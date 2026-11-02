#!/usr/bin/env python3
"""Validate Cabivella add-on package offline. No network required."""
import sys, pathlib, json, re, xml.etree.ElementTree as ET
from html.parser import HTMLParser
base=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else 'publish_to_site_root')
errors=[]
class Parser(HTMLParser):
 def __init__(self): super().__init__();self.canon=[];self.h1=0;self.lang=None;self.ld=[];self.meta={};self.alts=[];self.inld=False;self.buf=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang')
  if tag=='h1':self.h1+=1
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href',''))
  if tag=='link' and a.get('rel')=='alternate':self.alts.append((a.get('hreflang'),a.get('href')))
  if tag=='meta': self.meta[a.get('name') or a.get('property')]=a.get('content')
  if tag=='script' and a.get('type')=='application/ld+json':self.inld=True;self.buf=[]
 def handle_endtag(self,tag):
  if tag=='script' and self.inld:self.inld=False;self.ld.append(''.join(self.buf))
 def handle_data(self,d):
  if self.inld:self.buf.append(d)

htmlfiles=sorted(base.rglob('index.html'))
if len(htmlfiles)!=5:errors.append(f'expected 5 new HTML pages, found {len(htmlfiles)}')
for f in htmlfiles:
 try:
  p=Parser();p.feed(f.read_text(encoding='utf-8'))
  if p.h1!=1:errors.append(f'{f}: h1 count {p.h1}')
  if not p.lang:errors.append(f'{f}: missing html lang')
  if len(p.canon)!=1:errors.append(f'{f}: canonical count {len(p.canon)}')
  if not p.meta.get('description'):errors.append(f'{f}: missing description')
  if not p.ld:errors.append(f'{f}: no JSON-LD')
  for ld in p.ld:json.loads(ld)
  for name,url in p.alts:
   if not (name and url and url.startswith('https://cabivella.co.uk/')):errors.append(f'{f}: invalid hreflang')
 except Exception as e:errors.append(f'{f}: {e}')
for filename in ['sitemap-export.xml','feed.xml','atom.xml']:
 try:ET.parse(base/filename)
 except Exception as e: errors.append(f'{filename}: {e}')
try:
 s=ET.parse(base/'sitemap-export.xml').getroot()
 urls=[x.text for x in s.iter() if x.tag.endswith('loc')]
 if len(urls)!=5:errors.append(f'new sitemap expected 5 URLs; got {len(urls)}')
 for url in urls:
  local=base / url.split('cabivella.co.uk/',1)[-1] / 'index.html'
  if not local.exists():errors.append(f'sitemap route missing: {url}')
except Exception as e:errors.append(str(e))
try:json.loads((base/'feed.json').read_text(encoding='utf-8'))
except Exception as e:errors.append('feed.json: '+str(e))
if not (base/'llms.txt').exists(): errors.append('missing llms.txt')
if errors:
 print('FAILED:',*errors,sep='\n - ');sys.exit(1)
print(f'PASS: {len(htmlfiles)} local HTML pages, canonical, H1, JSON-LD, hreflang syntax, sitemap (5 URLs), feeds and llms.txt')
