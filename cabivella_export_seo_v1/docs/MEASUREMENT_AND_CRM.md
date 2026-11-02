# Search-to-revenue attribution for Cabivella

## Event taxonomy (implementation contract)
- `lead_submit` — successful server-side receipt of a new request, with non-PII fields: buyer_type (consumer/trade), market (UK/DE/FR/NL/other), category, entry_page.
- `lead_qualified` — sales team validates destination, product, quantity/dimensions and reachable lead.
- `quote_sent` — written offer with confirmed price, logistics scope and date sent.
- `order_won` — accepted order, actual revenue currency and privacy-safe order_id.
- `cash_received` — partial/full receipt matched to order_id in CRM (not GA4 personal data).

Do **not** send name, email, phone, detailed drawings, street address, or free-text form content into analytics. Consent management must be reviewed for UK/EU privacy obligations. GA4 purchase/revenue event rules should be consistent and not double counted with order and cash events.

## Lead routing SLA [Planning target, not company promise]
- New trade enquiry first human response: within 1 business day; if not feasible, publish a realistic policy rather than an unkept promise.
- Track: form accepted timestamp, assigned person, first reply timestamp, qualification status, quote date, outcome, gross margin band.
- No valid delivery country or unsupported destination -> clarify before committing price or shipping.

## Attribution report dimensions
`market x language x buyer_type x collection x source_medium x landing_page x crm_stage`

## KPI formulas
- Lead qualification rate = qualified leads / valid unique submissions.
- Quote conversion = quotes / qualified leads.
- Order conversion = won orders / qualified leads.
- Quote win rate = won orders / issued quotes.
- Contribution per order = realised revenue - confirmed direct production, freight, duties borne by seller, warranties and commercial fees.
- CAC = attributable marketing spend / new won customers.

## AI discovery test
Maintain a small monthly log of real search queries, whether Cabivella is cited/linked, competing pages, landing-page visibility and follow-on leads. Do not treat anecdotal ChatGPT answers as an official ranking or a guaranteed distribution channel. Search Console and web analytics are the main measurable baselines.
