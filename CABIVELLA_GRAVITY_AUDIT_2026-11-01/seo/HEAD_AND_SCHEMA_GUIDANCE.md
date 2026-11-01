# Metadata and schema — implement in the current site generator

Do not paste sample JSON-LD into production unchanged. Use verified content to render only truthfully described entities.

## HTML head on each approved indexed page
```html
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Unique descriptive British-English page title | Cabivella</title>
  <meta name="description" content="Unique concise and accurate description reflecting the visible page.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="https://cabivella.co.uk/REPLACE-WITH-REAL-CANONICAL/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_GB">
  <meta property="og:site_name" content="Cabivella">
  <meta property="og:title" content="Same page's accurate title">
  <meta property="og:description" content="Same page's accurate description">
  <meta property="og:image" content="https://cabivella.co.uk/assets/img/ONLY-AUTHORISED-IMAGE.webp">
</head>
```
Editorial rules: No `meta keywords` stuffing. A 200 + correct canonical is not a ranking guarantee. `hreflang` is unnecessary if there is only a single UK English version. `lastmod` must be an actual content change, not build time.

## Root page `WebSite` schema — safe facts only
```json
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "@id":"https://cabivella.co.uk/#website",
  "name":"Cabivella",
  "url":"https://cabivella.co.uk/",
  "inLanguage":"en-GB"
}
```

## Collection page schema (actual approved collection only)
```json
{
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  "@id":"https://cabivella.co.uk/collections/kitchens/#webpage",
  "name":"Kitchen Cabinetry | Cabivella",
  "url":"https://cabivella.co.uk/collections/kitchens/",
  "inLanguage":"en-GB",
  "isPartOf":{"@id":"https://cabivella.co.uk/#website"}
}
```

For each product: `Product` may describe a real individual product with truthful `name`, `description`, `image`, `brand` and `material`; **without actual public price and checkout, do not add `Offer`, fake `price`, or `aggregateRating`**. Google merchant-listing rich results will therefore generally not be available, which is acceptable for an enquiry-only site. Skip `Product` entirely for generic concepts without actual product identity.

For a product with factual parent category: `BreadcrumbList` must match visible navigation, positions 1/2/3. Do not markup breadcrumb trails that are not visible to the user.

## RSS rule
Only generate a valid RSS feed when genuine dated journal posts exist. A daily catalogue rebuild is not a news update. Don't publish an empty fabricated blog and don't create a sitemap index for only 255 URLs unless it serves a real administrative purpose.

## AI and GEO note
As of June 2026, official Google Search documentation says `llms.txt` provides no Google ranking or AI Overview advantage. Maintaining it for other clients is optional; do not make it a ranking KPI. Structured content, verified source facts and real links remain the priority.
