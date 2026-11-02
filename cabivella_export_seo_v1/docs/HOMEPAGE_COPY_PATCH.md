# Homepage positioning: UK retail + European wholesale, without abandoning existing design

## H1 — keep existing unless performance baseline justifies change
Current live H1: “More room for living.” This is brand-led but vague for search intent.
Alternative H1: “Made-to-Measure Cabinetry for UK Homes & European Trade.”
Alternative supporting paragraph: “Cabivella brings Turkish cabinetry craftsmanship to British homes and European trade projects. Explore kitchens, bathroom furniture, pantry systems, coffee stations, fitted storage and kitchen doors, then send drawings or dimensions for a tailored quotation.”

## Visible navigation add
- Trade / Wholesale → existing `/trade/`
- European Supply → new `/trade/europe/`
- Delivery & Import Information → new `/international-delivery/`

## Calls to action
1. “Explore Collections” → `/collections/`
2. “Request a Bespoke Quote” → `/enquire/`
3. “Wholesale & Trade Supply” → `/trade/`

## Trust section (ONLY after evidence)
Legal entity, business registration, tax/export identifiers if suitable for public display, headquarters and contact address, authentic project photographs, material certificates with evidence, and actual trade references with permission. Do not call the brand 'UK manufacturer', claim UK-made products, or invent UK incorporation if manufacturing is in Turkey.

## Organization schema
See `homepage-schema.json`; merge fields into existing `Organization` and `WebSite` graphs rather than adding duplicate IDs/nodes. Legal entity and `sameAs` must be checked.
