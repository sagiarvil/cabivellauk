#!/usr/bin/env python3
"""Read-only SEO and claim risk audit over a public sitemap; outputs JSON/CSV.
Use on Gravity machine with Internet and explicit website owner approval.
Zero errors in this tool does not mean Google rank or licence compliance.
"""
import argparse
import concurrent.futures
import csv
import json
import re
import ssl
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, urljoin
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

UA='CabivellaSiteQA/1.0 (+site-owner-controlled-audit)'
WARNING_PATTERNS={
 'PUBLIC_TRY_PRICE':r'(?i)(reference\s+price|\b\d[\d.,\s]*\s*(?:tl|try)\b|₺|"price"\s*:)',
 'ABSOLUTE_UNVERIFIED':r'(?i)(never\s+(?:chip|peel|yellow|warp)|completely\s+impervious|100%\s+ergonomic|guarantee\s+4\s+to\s+8\s+weeks|accredited\s+UK\s+installers)',
 'UNVERIFIED_LICENCE_HINT':r'(?i)(tekzen_coffee|mondi_|koctas|real_bathrooms/bath_500)',
 'NON_BRITISH_SPELLING':r'(?i)\b(?:customizable|characterize|utilize|galvanized|leveling|matte|fulfill|customized)\b',
 'AI_CLICHE':r'(?i)\b(?:serene\s+domestic\s+chaos|architectural\s+sanctuary|peerless\s+quality|effortless\s+pocket-door\s+joinery|daily\s+cadence|architectural\s+monolith|artisanal\s+beverage\s+credenza)\b'
}
class Extract(HTMLParser):
 def __init__(self):
  super().__init__(); self.title='';self.lang='';self.h1=[];self.meta={};self.canonical=None;self.images=[];self._title=False;self._h1=False;self._h1buf='';self.visible=[];self._ignore=0; self.headings=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang','')
  if tag=='title':self._title=True
  if tag=='h1':self._h1=True;self._h1buf=''
  if tag=='meta':
   if a.get('name'):self.meta[a['name'].lower()]=a.get('content','')
   if a.get('property'):self.meta[a['property'].lower()]=a.get('content','')
  if tag=='link' and 'canonical' in a.get('rel','').lower().split():self.canonical=a.get('href')
  if tag=='img':self.images.append({'src':a.get('src',''),'alt':a.get('alt')})
  if tag in ('script','style','noscript'): self._ignore+=1
 def handle_endtag(self,tag):
  if tag=='title':self._title=False
  if tag=='h1':self._h1=False;self.h1.append(self._h1buf.strip())
  if tag in ('script','style','noscript'):self._ignore=max(0,self._ignore-1)
 def handle_data(self,d):
  if self._title:self.title+=d
  if self._h1:self._h1buf+=d
  if not self._ignore and d.strip():self.visible.append(d.strip())

def fetch(url,timeout=22):
 try:
  req=Request(url,headers={'User-Agent':UA,'Accept':'text/html,application/xml,text/xml,*/*'})
  with urlopen(req, timeout=timeout,context=ssl.create_default_context()) as res:
   data=res.read(5*1024*1024)
   return {'status':res.status,'final_url':res.geturl(),'body':data.decode('utf-8',errors='replace'),'content_type':res.headers.get('Content-Type','')}
 except Exception as e:
  code=getattr(e,'code',None)
  return {'status':code or 0,'error':str(e),'body':'','final_url':url}

def check(url):
 r=fetch(url); o={'url':url,'status':r['status'],'final_url':r['final_url'],'issues':[],'title':'','description':'','canonical':'','h1':'','img_count':0}
 if r['status']!=200:
  o['issues'].append('HTTP_NOT_200');return o
 p=Extract()
 try:p.feed(r['body'])
 except Exception as e:o['issues'].append('HTML_PARSE:'+str(e)[:70]);return o
 o.update({'title':p.title.strip(),'description':p.meta.get('description',''),'canonical':p.canonical or '','h1':' | '.join(p.h1),'img_count':len(p.images)})
 if len(p.h1)!=1:o['issues'].append('H1_COUNT_'+str(len(p.h1)))
 if not p.title.strip():o['issues'].append('TITLE_MISSING')
 if not p.meta.get('description',''):o['issues'].append('DESCRIPTION_MISSING')
 if p.lang.lower() not in ('en-gb','en'):o['issues'].append('LANG_NOT_EN_GB:'+p.lang)
 elif p.lang.lower()=='en':o['issues'].append('LANG_EN_NOT_EN_GB')
 if (p.canonical or '').rstrip('/')!=url.rstrip('/') :o['issues'].append('CANONICAL_MISMATCH')
 if any(x['alt'] is None for x in p.images):o['issues'].append('IMG_ALT_MISSING')
 main_text=' '.join(p.visible)
 for name,pattern in WARNING_PATTERNS.items():
  subject=main_text if name in ('PUBLIC_TRY_PRICE','ABSOLUTE_UNVERIFIED','NON_BRITISH_SPELLING','AI_CLICHE') else r['body']
  if re.search(pattern, subject):o['issues'].append(name)
 if re.search(r'(?i)("offers"\s*:|"aggregateRating"\s*:|"price"\s*:)',r['body']):o['issues'].append('SCHEMA_OFFER_PRICE_OR_RATING_REVIEW_REQUIRED')
 # Text fingerprint distinguishes exact copies; significant near-duplicate comparison requires manual review.
 text=re.sub(r'\b\d+(?:[,.]\d+)?\b','N',main_text.lower())
 text=re.sub(r'\s+',' ',text).strip()
 o['text_fingerprint']=text[:850]
 # Compare actual design highlights rather than shared site navigation/header/footer.
 # Individual model pages with a reused three-bullet list merit human review.
 if 'Design Highlights' in p.visible and 'Technical Specifications' in p.visible:
  i=p.visible.index('Design Highlights')
  j=p.visible.index('Technical Specifications')
  if j>i:
   items=p.visible[i+1:j]
   o['design_highlights_fingerprint']=re.sub(r'\s+',' ', ' '.join(items).lower()).strip()[:1400]
 return o

def run(base,sitemap,out,workers):
 sm=fetch(sitemap)
 if sm['status']!=200:raise SystemExit('Sitemap inaccessible: '+str(sm['status']))
 try:root=ET.fromstring(sm['body'])
 except Exception as e:raise SystemExit('Invalid XML sitemap: '+str(e))
 urls=[]
 for e in root.iter():
  if e.tag.endswith('}loc') or e.tag=='loc':
   if e.text and e.text.startswith(base):urls.append(e.text.strip())
 urls=list(dict.fromkeys(urls))
 with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
  results=list(executor.map(check,urls))
 titles={};descs={};fps={};highlights={}
 for p in results:
  for d,key in ((titles,p['title']),(descs,p['description']),(fps,p.get('text_fingerprint','')),(highlights,p.get('design_highlights_fingerprint',''))):
   if key:d.setdefault(key,[]).append(p['url'])
 for p in results:
  if p['title'] and len(titles[p['title']])>1:p['issues'].append('DUPLICATE_TITLE')
  if p['description'] and len(descs[p['description']])>1:p['issues'].append('DUPLICATE_DESCRIPTION')
  if p.get('text_fingerprint') and len(fps[p['text_fingerprint']])>1:p['issues'].append('DUPLICATE_TEXT_FINGERPRINT')
  if p.get('design_highlights_fingerprint') and len(highlights[p['design_highlights_fingerprint']])>1:p['issues'].append('DUPLICATE_DESIGN_HIGHLIGHTS')
 out.mkdir(parents=True,exist_ok=True)
 (out/'audit.json').write_text(json.dumps({'scope':sitemap,'total':len(results),'results':results},ensure_ascii=False,indent=2),encoding='utf-8')
 with (out/'audit.csv').open('w',newline='',encoding='utf-8') as f:
  w=csv.writer(f);w.writerow(['url','status','final_url','title','description','canonical','h1','img_count','issues'])
  for p in results:w.writerow([p.get(k,'') if k!='issues' else '|'.join(p['issues']) for k in ('url','status','final_url','title','description','canonical','h1','img_count','issues')])
 total=sum(bool(p['issues']) for p in results)
 print('AUDIT PAGES',len(results),'ISSUE_PAGES',total,'REPORT',out/'audit.csv')
 for p in results:
  if p['issues']:print(str(p['status']),p['url'],','.join(p['issues']))
 return results

def main():
 a=argparse.ArgumentParser();a.add_argument('--base',default='https://cabivella.co.uk');a.add_argument('--sitemap',default='https://cabivella.co.uk/sitemap.xml');a.add_argument('--out',default='results');a.add_argument('--workers',type=int,default=4);args=a.parse_args()
 run(args.base.rstrip('/')+'/',args.sitemap,Path(args.out),max(1,min(8,args.workers)))
if __name__=='__main__':main()
