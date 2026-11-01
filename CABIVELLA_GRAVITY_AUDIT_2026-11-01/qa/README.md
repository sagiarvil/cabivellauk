# Working with Gravity
Run the scripts in the real project terminal with Internet access and in a copy of the actual deployed source. No login credentials or API secrets in source. Scripts use only Python stdlib.

1. `python3 qa/audit_site.py --base https://cabivella.co.uk/ --sitemap https://cabivella.co.uk/sitemap.xml --out results`
2. Export actual approved products, pages and editorial journal items into `governance/content_manifest.json`. The included manifest is only a small illustrative *reviewed navigation seed*, not the complete current 255-URL sitemap.
3. `python3 qa/build_discovery.py --data governance/content_manifest.json --out staging-public`
4. Validate every sitemap URL is actually deployed with HTTP 200 before swapping staging-public files into live root. Do not overwrite full live sitemap with the small seed manifest.
5. Run the QA test suite and inspect audit CSV for each P0.
6. Block production on known price leaks, misleading product claims, unlicensed photos or 404 URLs. Document evidence and PR approvals.

Never run generated files blindly over live production. `build_discovery.py` intentionally does NOT create RSS without real dated journal articles. No crawler or script can guarantee search ranking.
