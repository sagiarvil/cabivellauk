CABIVELLA UK MULTI-PAGE WEBSITE — BUILD / RELEASE NOTES
========================================================
PROJECT: Cabivella.co.uk proposed UK cabinetry brand
PAGES: 1 home + 6 category + 14 design detail + 7 business/other = 28 HTML pages, plus 404.
SITE TYPE: static HTML; no build tool; responsive; British English.
START: open index.html or upload entire folder to static hosting (Netlify recommended).
IMPORTANT: Do not upload only index.html; keep folder structure.

CATEGORY TREE:
Kitchens: Shaker, Contemporary, Compact
Bathrooms: Wall-Hung, Fluted, Tall
Pantry & Larder: Tall, Corner
Coffee Stations: Pocket-Door, Open-Shelf
Fitted Storage: Alcove, Utility
Kitchen Doors: Shaker Replacement, Handleless

SEO IMPLEMENTED:
Unique static HTML title and page-specific meta descriptions; en-GB, self canonical,
OG/Twitter tags, heading hierarchy, breadcrumb navigation + BreadcrumbList JSON-LD,
WebPage/CollectionPage markup, static crawlable href links, static sitemap.xml,
robots.txt, readable category descriptions, product style explanations and FAQs,
alt text, image loading lazy except hero; mobile accessibility and reduced-motion support.
Canonical host is PROVISIONAL: https://cabivella.co.uk/ — verify registration & final domain.
No invented star ratings, price, supplier stock, official certifications, GBP offers,
or product structured data with fabricated SKU/availability.

PHOTOGRAPHY RIGHTS (CRITICAL):
Turkish premium brands were researched: Lineadecor, Vanucci, ORKA, Creavit.
Their official product pictures are NOT copied into this commercial build because
reuse/representation rights are unverified. Links and rights workflow are supplied
in TURKISH_BRAND_IMAGE_RIGHTS.csv and the image-credits page.
The illustrative gallery uses selected local concept images plus Pexels remote photo references (requires internet)
and the user's own supplied logo/Istanbul image and prior concept illustrative crops.
Illustrations are NOT genuine Cabivella manufactured product photographs.
Multi-image galleries are in place, but photos are not claimed to show the same
item from multiple angles. Replace galleries with 4-6 real matching angles per SKU.
No claim of affiliation or endorsement by Turkish brands or Pexels photographers.

BEFORE LIVE LAUNCH:
1. Confirm trading entity, physical contact method, domain registration and UK legal status.
2. Obtain real product data and rights-cleared photos (front/open/side/detail/room).
3. Replace all external image references with licensed local optimized WebP/AVIF.
4. Confirm fulfilment, returns, warranty, import/VAT, installation & trade terms.
5. Complete compliant UK-GDPR privacy notice and verify form controller details.
6. After completing privacy notice: set data-form-status='live', deploy form on Netlify, configure notification email and test with a real enquiry.
7. Validate image availability, canonical URLs, Search Console, XML sitemap, 404s.
8. Obtain permission before placing other manufacturers' original photos on Cabivella.

TEST / VERIFY:
python3 verify_site.py

NOTES:
The design deliberately keeps prices OFF all pages.
The illustrative design pages are not represented as confirmed sellable SKUs.
The supplied skyline photo/illustration appears to derive from Shutterstock: verify the commercial licence before public launch.

V5 PREMIUM HEADER & QA ADDENDUM
-------------------------------
The original V4 crest was truncated because a manual crop removed the bottom of the supplied emblem; a cream background was baked into the resulting RGB WebP.
V5 recreates a full-height transparent crest asset from the original user-provided artwork. The 448-pixel transparent WebP optimises delivery while maintaining the complete banner, lions, crown and lower ornament.
Header provides: stable responsive logo sizing, accessible mega navigation, nested mobile sub-collections, Escape and outside-click dismissals, reduced-motion compliance and a minimal sticky compact state.
Category detail pages provide local fallbacks when externally hosted inspiration pictures do not load. These images remain illustrative, not images of actual products for sale.
Automated checks cover 320, 390, 768, 1024, 1120, 1280 and 1440 pixel layouts, plus mobile and desktop navigation interactions. Static checks cover all page links, descriptions, canonical tags, headings and alt texts.
A live server-side enquiry handling test, GDPR compliance, image copyright and real fulfilment checks are still necessary before launch.
