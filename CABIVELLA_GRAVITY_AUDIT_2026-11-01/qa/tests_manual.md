# Production acceptance matrix (manual + automated)

1. Freeze source SHA, record timestamp, protect production release (rollback SHA known).
2. Crawl *all* live indexed URLs and old links. No sitemap 404/redirect/noindex/dupe canonical.
3. Verify `/llms.txt`, `/llms-full.txt` respond 200 `text/plain` with factual content. This is non-ranking auxiliary functionality.
4. `/robots.txt` `User-agent: *` and real sitemap absolute URL valid; XML parser passes.
5. `feed.xml` only if published UK English Journal posts with true dates. Check XML and auto discovery tag.
6. Screenshots at 320/390/768/1024/1440/1920 for homepage, all categories, 3 product classes, Our Story, Trade, Enquire and policies. Header and watermark not clipped. Real English text not painted into background image.
7. UK English human copy edit all visible strings, errors, meta, alt, confirmation, email templates, scheme data, llms.
8. Price leak: no TRY/TL/₺ or reference prices anywhere public including server-rendered HTML, JSON-LD, CSS hidden fields, exposed structured JSON feeds or cached data. Real B2B quotation after enquiry may contain an agreed price.
9. Product rights: approved license mapped to each published photo; no unfounded 'manufactured by Cabivella' claim for another brand's picture.
10. Each model has credible unique proof of size/material/photos/mechanism, not a renamed copy.
11. Form: client valid input, bad email, zero-length name, oversized attachment, duplicate double-click, network outage, CRM down, bot request and successful full loop. Do not insert live personal data without consent.
12. Cookies: reject before acceptance, all non-essential scripts remain inactive; withdraw choice easily; consent audit persisted according to actual policy.
13. HTTP security: HSTS only where HTTPS stable, CSP tuned without breaking UI, Referrer-Policy, X-Content-Type-Options, proper MIME/charset, no leaked secrets.
14. Core Web Vitals from actual UK users / CrUX when available: p75 LCP<=2.5s, INP<=200ms, CLS<=0.1. Lab test separately.
15. GSC/Bing verification with official account; cannot claim ranking/indexing without readbacks.
16. Real UK B2B and homeowner usability interviews before claiming 'British customers love it'.
