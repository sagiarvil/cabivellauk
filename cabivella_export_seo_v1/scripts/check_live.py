#!/usr/bin/env python3
"""Optional public live-site smoke test. GET only, no writes."""
import urllib.request,urllib.error,sys,xml.etree.ElementTree as ET
base=sys.argv[1].rstrip('/') if len(sys.argv)>1 else 'https://cabivella.co.uk'
paths=['/','/robots.txt','/sitemap.xml','/llms.txt','/trade/','/trade/europe/','/de/grosshandel-einbaumoebel/','/fr/fabricant-meubles-sur-mesure-grossiste/','/nl/maatwerk-kasten-groothandel/','/international-delivery/','/sitemap-export.xml']
fail=[]
for path in paths:
 try:
  req=urllib.request.Request(base+path,headers={'User-Agent':'Cabivella-Deployment-QA/1.0'})
  with urllib.request.urlopen(req,timeout=12) as r:
   body=r.read(102400); print(r.status,path,r.headers.get('content-type',''))
   if r.status!=200:fail.append(path)
 except Exception as exc:print('FAIL',path,str(exc));fail.append(path)
print('FAILURES:',len(fail));sys.exit(1 if fail else 0)
