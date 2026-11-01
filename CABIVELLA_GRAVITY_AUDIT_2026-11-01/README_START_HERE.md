# Cabivella — 1 November 2026 UK Live Site Audit & Gravity Handoff

**Status:** Audited with remote live-content extraction; fixes have NOT been deployed to cabivella.co.uk. Includes a staged repair specification and runnable read-only QA/build scripts, not a replacement live website. No claim of an all-pages browser rendering pass. Last live sitemap counts differed during crawl (first 123, later 255); re-run a frozen inventory at deployment.

- `GRAVITY_MASTER_BRIEF_TR.md`: complete Turkish P0/P1/P2 implementer requirements.
- `governance/BRITISH_ENGLISH_REPLACEMENTS.csv`: mandatory editor replacements (not a blind global replace; context matters).
- `governance/content_manifest.json`: safe seed of verified navigation pages, **not** a complete live-site product catalogue.
- `governance/CLAIMS_REVIEW_TEMPLATE.csv`: evidence register for every technical/commercial promise.
- `governance/IMAGE_RIGHTS_TEMPLATE.csv`: rights review for Turkish retailer-source photo names.
- `qa/audit_site.py`: crawl real live sitemap to generate CSV and JSON, warn on duplicate metadata/text, price, weak claims and en-GB differences.
- `qa/build_discovery.py`: generate `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`; creates real RSS only if verified dated articles exist.
- `qa/legacy_urls.csv`: 404 URLs identified in remote audit, **do not invent 301 targets**.
- `seo/`: generated draft discovery files based on seed manifest; review before deployment.

## Audit source caveats
Observed page content via live remote webpage extractor. Verified status for selected endpoints (llms.txt, RSS and selected 404) via provider fetch; exact on-page browser layout and true Google indexing data were not tested in this pack. Legal and technical claims cannot be certified without original contracts, product specification sheets, rights agreements, and production deployment access. 

## Priority decision
HOLD paid scale-up until incorrect TL prices and model/technical claim duplication and image provenance are resolved. Do not remove whole website. Approve products individually, repair URL migration, retest form + consent, and only then run controlled UK lead tests.
