from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import re,json
ROOT=Path(__file__).parent
pages=list(ROOT.rglob('*.html'))
class Checker(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.titles=[];self.desc=[];self.canonical=[];self.lang=[];self.h1=0;self.img_alt=[]
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='html':self.lang.append(d.get('lang'))
  if tag=='a' and d.get('href'):self.links.append(d['href'])
  if tag=='img':self.img_alt.append(d.get('alt'))
  if tag=='meta' and d.get('name')=='description':self.desc.append(d.get('content'))
  if tag=='link' and d.get('rel')=='canonical':self.canonical.append(d.get('href'))
  if tag=='h1':self.h1+=1
  if tag=='title':self.titles.append(1)
errors=[]; metas=set();checked=0
for p in pages:
 if p.name=='404.html':continue
 t=p.read_text();c=Checker();c.feed(t);checked+=1
 if len(c.desc)!=1:errors.append((p,'description'))
 if len(c.canonical)!=1:errors.append((p,'canonical'))
 if c.h1!=1:errors.append((p,'h1 count '+str(c.h1)))
 if c.lang!=['en-GB']:errors.append((p,'lang'))
 if not c.img_alt or any(x is None for x in c.img_alt):errors.append((p,'alt image'))
 if c.desc and c.desc[0] in metas:errors.append((p,'duplicate meta'))
 if c.desc:metas.add(c.desc[0])
 for url in c.links:
  if url.startswith(('#','mailto:','https://','http://','tel:')):continue
  target=(p.parent/url.split('?')[0].split('#')[0])
  if url.endswith('/'):target=target/'index.html'
  if not target.exists():errors.append((p,'broken link: '+url))
print('pages checked',checked,'unique descriptions',len(metas),'errors',len(errors))
for e in errors[:50]:print(e)
if errors:raise SystemExit(1)
