#!/usr/bin/env python3
"""Build conservative metadata discovery files from approved Cabivella manifest.
No synthetic product feeds; no false British registration or product claims.
Usage: python3 qa/build_discovery.py --data governance/content_manifest.json --out public
"""
import argparse
import datetime as dt
import json
from pathlib import Path
from urllib.parse import urljoin
from xml.etree import ElementTree as ET
from xml.sax.saxutils import escape

NS = 'http://www.sitemaps.org/schemas/sitemap/0.9'
ET.register_namespace('', NS)

def render(data, out):
    out.mkdir(parents=True, exist_ok=True)
    base = data['base_url'].rstrip('/') + '/'
    pages = data['approved_pages']
    seen = set()
    for page in pages:
        url = urljoin(base, page['url'].lstrip('/'))
        if not url.startswith(base) or url in seen:
            raise ValueError('Duplicate/out-of-domain URL: '+url)
        if not all(page.get(k) for k in ('title','summary','section')):
            raise ValueError('Incomplete approved page: '+url)
        seen.add(url)
    # The actual deployed source can contain pages that must NOT be indexed;
    # the site manifest must only list approved, canonical, indexable 200 pages.
    root = ET.Element(f'{{{NS}}}urlset')
    for page in pages:
        e = ET.SubElement(root, f'{{{NS}}}url')
        ET.SubElement(e, f'{{{NS}}}loc').text = urljoin(base, page['url'].lstrip('/'))
        if page.get('lastmod_verified'):
            ET.SubElement(e, f'{{{NS}}}lastmod').text = page['lastmod_verified']
    ET.ElementTree(root).write(out / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
    (out / 'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+urljoin(base, 'sitemap.xml')+'\n', encoding='utf-8')
    md = ['# Cabivella','', '> '+data['brand_description'], '', 'This directory lists reviewed, publicly available information pages. Product details, availability, delivery and quotations are confirmed directly with Cabivella.', '']
    sections=[]
    for p in pages:
        if p['section'] not in sections:sections.append(p['section'])
    for section in sections:
        md+=['## '+section, '']
        for p in pages:
            if p['section']==section:
                md+=['- ['+p['title']+']('+urljoin(base,p['url'].lstrip('/'))+'): '+p['summary']]
        md+=['']
    (out/'llms.txt').write_text('\n'.join(md).rstrip()+'\n',encoding='utf-8')
    md2=['# Cabivella — Reviewed Website Guide','', data['brand_description'], '', '## Editorial and product information policy','', 'This file is not a warranty, price list, stock statement, manufacturing certificate or evidence of UK registration. The current website must be consulted before relying on descriptions. Images may be illustrative and are not necessarily photographs of a completed Cabivella commission.','']
    for section in sections:
        md2+=['## '+section,'']
        for p in pages:
            md2+=['### '+p['title'], p['summary'],'Page: '+urljoin(base,p['url'].lstrip('/')), '']
    (out/'llms-full.txt').write_text('\n'.join(md2).rstrip()+'\n', encoding='utf-8')
    articles = data.get('verified_articles', [])
    feed_path=out/'feed.xml'
    if articles:
        rss=ET.Element('rss', {'version':'2.0'})
        ch=ET.SubElement(rss,'channel')
        for tag,txt in (('title','Cabivella Journal'),('link',base),('description','Published Cabivella editorial updates'),('language','en-gb')):
            ET.SubElement(ch,tag).text=txt
        for article in articles:
            if not all(article.get(k) for k in ('title','url','summary','published_rfc2822','guid')):
                raise ValueError('Published article metadata incomplete')
            item=ET.SubElement(ch,'item')
            for tag,value in [('title',article['title']),('link',urljoin(base,article['url'].lstrip('/'))),('guid',article['guid']),('description',article['summary']),('pubDate',article['published_rfc2822'])]:
                ET.SubElement(item,tag).text=value
        ET.ElementTree(rss).write(feed_path, encoding='utf-8', xml_declaration=True)
    elif feed_path.exists():
        # Do not replace a live real feed with blank content; stop rather than fabricate.
        raise ValueError('Existing RSS feed found but no approved articles in manifest — review it manually.')
    print('CREATED sitemap.xml robots.txt llms.txt llms-full.txt; approved_pages='+str(len(pages))+'; RSS='+('published' if articles else 'not generated (no verified Journal articles)'))

def main():
    a=argparse.ArgumentParser()
    a.add_argument('--data',required=True)
    a.add_argument('--out',required=True)
    args=a.parse_args()
    render(json.loads(Path(args.data).read_text(encoding='utf-8')),Path(args.out))
if __name__=='__main__':main()
