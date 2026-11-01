# GRAVITY — CABIVELLA UK: ZERO-FICTION REPAIR EXECUTION

**Mission:** Fix the *actual live Cabivella repository*, not a generic new website. Retain the approved visual design and all verified products. The attached `GRAVITY_MASTER_BRIEF_TR.md` is the binding implementation brief. Perform evidence-first audit → minimal diff → staging tests → readback → explicit deployment approval.

**First action:** Locate the deployed site root and generator/config by exploring the repo; obtain `git status`, deployment SHA, build command, actual route model and production source of product data. Do not assume WordPress, Astro, Next.js or an arbitrary framework. Store a backup and URL/source snapshots. Analyse the report's live evidence (255 sitemap URLs in latest snapshot, 123 in an earlier crawl) and recheck current counts before any edits.

**P0 must be fixed:**
1. Source-level removal of all publicly visible TRY/TL prices and `Reference Price` labels, including structured data.
2. Quarantine unverified product claims and models, without silently deleting or redirecting real products.
3. Produce a rights register for all photos (notably filenames containing `tekzen_coffee`, `mondi_`, numeric Turkish retailer IDs); only licensed images may show under Cabivella branding.
4. Resolve 404 and old-to-new redirects with correct semantic matches. Rebuild sitemap only from live 200 indexable canonical approved pages.
5. Eliminate duplicated coffee model content; do not fabricate originality with synonyms. Demand real feature/size/photos per product.
6. Correct commercial identity, operational responsibilities, realistic lead times, installation and warranty claims (require human-provided evidence).
7. Test enquiry handling end to end and UK consent behaviour in staging, do not submit a customer's data without permission.

**P1:** Enforce native en-GB editorial style; create `llms.txt` and `llms-full.txt` from approved pages; optionally generate RSS only from *real dated Journal posts*. Validate JSON-LD, metadata, internal linking, sitemap, alt, images, favicons and responsive behaviour. Do not promise llms.txt improves Google ranking.

**Required readback:** Provide exact diff and list of files changed, the URLs removed/redirected/kept, site crawl report, all P0 tests, before/after screenshots at 390 and 1440, API validation tests (real staging only), actual GSC/ranking unknowns. No '100/100' scoring without defined empirical tests.

**Exit:** Do not deploy to production until the user explicitly approves the verified diff. Never state 'fixed' when you only created an instruction file.
