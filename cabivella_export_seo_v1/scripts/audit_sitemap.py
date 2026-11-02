#!/usr/bin/env python3
"""Read-only audit of sitemap URLs. Run only from authorized machine with Internet access.
Usage: python3 scripts/audit_sitemap.py https://cabivella.co.uk/sitemap.xml
Limit concurrency; no authentication, no writes to target website.
"""
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from pathlib import Path
import csv, io, re, sys, time
import xml.etree.ElementTree as ET
from collections import defaultdict

sitemap=sys.argv[1] if len(sys.argv)>1 else 'https://cabivella.co.uk/sitemap.xml'
if not sitemap.startswith('https://cabivella.co.uk/'):
 raise SystemExit('Only cabivella.co.uk sitemap is allowed for this audit.')

class HeadParser(HTMLParser):
 def __init__(self):
  super().__init__(); self.title='';self.desc='';self.h1=0;self.canon='';self.noindex=False;self.imgmissing=0;self._title=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='title':self._title=True
  if tag=='meta' and a.get('name','').lower()=='description':self.desc=a.get('content','')
  if tag=='meta' and a.get('name','').lower()=='robots':self.noindex='noindex' in a.get('content','').lower()
  if tag=='link' and a.get('rel')=='canonical':self.canon=a.get('href','')
  if tag=='img' and not a.get('alt'):self.imgmissing+=1
 def handle_endtag(self,tag):
  if tag=='title':self._title=False
 def handle_data(self,data):
  if self._title:self.title+=data

ua={'User-Agent':'Cabivella-SEO-Audit/1.0 (+read-only; webmaster-initiated)'}
def fetch(url):
 start=time.monotonic()
 try:
  with urlopen(Request(url,headers=ua),timeout=20) as resp:
   status=resp.status;final=resp.geturl();body=resp.read(1024*1024)
  parser=HeadParser();parser.feed(body.decode('utf-8','replace'))
  error=''
 except Exception as e:
  status=0;final='';parser=HeadParser();error=str(e)
 return {'url':url,'status':status,'final_url':final,'title':parser.title.strip(),'meta_description':parser.desc,'canonical':parser.canon,'h1_count':parser.h1,'noindex':parser.noindex,'missing_alt_count':parser.imgmissing,'seconds':round(time.monotonic()-start,2),'error':error}

with urlopen(Request(sitemap,headers=ua),timeout=20) as resp:xml=resp.read()
root=ET.fromstring(xml)
urls=[e.text.strip() for e in root.iter() if e.tag.endswith('loc') and e.text]
urls=[u for u in urls if urlparse(u).netloc=='cabivella.co.uk']
print(f'Checking {len(urls)} URLs with 2 concurrent GET requests; results are NOT live fixes.')
rows=[]
with ThreadPoolExecutor(max_workers=2) as ex:
 futures=[ex.submit(fetch,url) for url in urls]
 for n,fut in enumerate(as_completed(futures),1):
  rows.append(fut.result())
  if n%25==0: print('done',n)

by_title=defaultdict(list)
for r in rows:
 if r['title']:by_title[r['title']].append(r['url'])
for r in rows:
 r['duplicate_title_count']=len(by_title.get(r['title'],[])) if r['title'] else 0
 r['issues']=';'.join(k for k,cond in [
  ('HTTP',r['status']!=200),('noindex_sitemap',r['noindex']),('missing_title',not r['title']),
  ('missing_meta',not r['meta_description']),('missing_canonical',not r['canonical']),
  ('canonical_mismatch',bool(r['canonical']) and r['canonical']!=r['url']),
  ('h1_count',r['h1_count']!=1),('duplicate_title',r['duplicate_title_count']>1)] if cond)
output=Path('cabivella_live_sitemap_audit.csv')
with output.open('w',newline='',encoding='utf-8-sig') as fh:
 w=csv.DictWriter(fh,fieldnames=list(rows[0].keys()))
 w.writeheader();w.writerows(sorted(rows,key=lambda r:r['url']))
print('RESULTS',output.resolve())
print('HTTP !=200:',sum(r['status']!=200 for r in rows),'NOINDEX IN SITEMAP:',sum(r['noindex'] for r in rows),'CANONICAL_MISMATCH:',sum(bool(r['canonical']) and r['canonical']!=r['url'] for r in rows))
