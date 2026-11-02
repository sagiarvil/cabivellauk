# Cabivella: 90-day export search growth system

## Business objective (measure sales, not rank promises)
Build a traceable pipeline of UK homeowners and UK/EU trade buyers who submit qualified cabinetry enquiries that become signed, margin-positive orders.

**Primary KPI:** qualified leads by market and buyer type; secondary: quote rate, quote→order rate, gross margin after freight/tax, cash collected. Search Console impressions/clicks alone are not sales.

## Days 0–7: evidence and technical stabilization
1. Snapshot current sitemap (164 URLs on 2026-11-02). Keep it live. Check 200/canonical/noindex robots consistency, mobile render, JSON-LD and duplicate titles.
2. Confirm Turkish legal entity and cross-border contractual seller; ensure Our Story, footer and contact details match company records. Capture signed manufacturing, quality and material evidence before making quality claims.
3. Integrate `/trade/europe/`, localized pages (if staffed), `/international-delivery/`, and internal links. Deploy supplemental sitemap with new URLs. Add robots sitemap line only after pages are 200 and indexable.
4. Register/verify Google Search Console and Bing Webmaster Tools if not connected; submit both sitemaps.

## Days 8–30: commercial content and buyer trust
1. Build 6 detailed collection introductions, all factual and unique; category comparison (fitted wardrobes vs fitted storage), product specification tables, dimension tolerances, installation scope, gallery alt text.
2. UK B2C: one clear enquiry CTA per product and qualification form. UK B2B: improve `/trade/` without intent cannibalization.
3. EU B2B: launch German, French, Dutch pages with humans validating translations and customer support coverage; make truthful delivery terms available in native languages.
4. Obtain permission for genuine customer project case studies (before/after, drawings, dimensions, materials, buyer needs); publish no AI-produced fake 'installation proof'.

## Days 31–60: distribution and demand
1. Build industry-relevant third-party visibility: real supplier profiles on Europages, Houzz where eligible, Archiproducts/Kompass and relevant trade directories; no bought links or invented reviews.
2. Earn specifications in architects' material directories and trade procurement communities; identify 20 suitable dealers or studios per market (manual research and qualification).
3. Publish two genuine case studies and one detailed material/transport guide per month when verifiable examples exist. Add measured images and embedded short technical videos.
4. Set up CRM lead lifecycle and sales follow-up; distinguish consumer vs reseller vs architect vs contractor.

## Days 61–90: data-driven scale
1. GSC query→landing-page mapping, country conversion and no-result pages; rewrite only weak, high-intent pages.
2. Perform real purchaser interviews about objections: import duties, lead times, service guarantees, fit, installation and after-sales resolution. Update site based on evidence.
3. Confirm profitable delivery lanes per country before expanding translated locations.
4. Evaluate paid search only after quote-to-order and gross margin baseline is available.

## Funnel definitions
Qualified lead: valid contact, buyer type, delivery destination, product category and actionable specification (dimension or drawing), not spam and not an existing duplicate.
Quote rate = quoted qualified leads / qualified leads.
Order conversion = signed orders / qualified leads.
Gross margin after supply = (net sales - material - labour - freight - import obligations - warranty provision - other direct costs) / net sales.
Use CRM deduplication, consent-compliant analytics, and offline conversion matching where consent/legal basis exists. Never send buyer email, phone or dimensions in GA4 events.

## Early-stage indicative targets [Planning hypothesis, not current metrics]
7 days: 100% new URLs resolve 200, no accidental duplicate canonical, 0 sitemap broken URLs.
30 days: all live commercial pages have owner, search intent, unique H1/title and conversion path.
60 days: report qualified leads by market, not just visits.
90 days: choose 1–2 profitable markets based on quoted orders and unit economics; do not assume SEO sales guarantees.

## Failure modes and mitigations
- Risk 1 — localization yields leads Cabivella cannot service: language/quantity/order readiness gate; don't publish region-specific availability without logistics confirmation.
- Risk 2 — visibility rises but no sales: CRM stage attribution, form validation, response SLA monitored, product-specific quote forms and buyer-fit filtering.
- Risk 3 — fake technical or certification claims: evidence registry and legal sign-off before launch; remove or qualify unsupported claims.
- Risk 4 — SEO rollout damages legacy URLs: retain existing sitemap, do not redirect 164 existing URLs en masse, compare Search Console pre/post, rollback new pages independently.
