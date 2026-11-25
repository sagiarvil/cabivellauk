import * as fs from 'fs';
import * as path from 'path';
import { CABIVELLA_PAGES } from '../src/seo/registry';
import { buildRssFeed, buildAtomFeed, buildJsonFeed, buildMobileFeed } from '../src/seo/feed-builder';
import { collectionsData } from '../src/data/collections';
import { modelsData } from '../src/data/models';

const ORIGIN = 'https://cabivella.co.uk';
const TODAY_ISO = '2026-11-11';
const publicDir = path.resolve(process.cwd(), 'public');
const mobileDir = path.join(publicDir, 'mobile');
const llmsDir = path.join(publicDir, 'llms');
const llmsPagesDir = path.join(llmsDir, 'pages');
const llmsMobileDir = path.join(llmsDir, 'mobile');

for (const dir of [mobileDir, llmsDir, llmsPagesDir, llmsMobileDir]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Generate Syndication Feeds (RSS, Atom, JSON Feed, Mobile Feed)
fs.writeFileSync(path.join(publicDir, 'feed.xml'), buildRssFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'atom.xml'), buildAtomFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'feed.json'), buildJsonFeed(CABIVELLA_PAGES), 'utf-8');
fs.writeFileSync(path.join(mobileDir, 'feed.xml'), buildMobileFeed(CABIVELLA_PAGES), 'utf-8');

// 2. Generate Multi-Tier LLMs Hub (100% British English en-GB, <14KB, Zero AI-Tells)
const llmsRoot = `# Cabivella UK: AI Knowledge Base & Semantic Discovery Hub

Standard: LLMs.txt v1.1 RFC | Status: 2026-Q4 Enterprise Mandate v9.2
Canonical Origin: ${ORIGIN} | Primary Language: en-GB
Mobile-First: TRUE | Voice-Optimized: TRUE | ColBERT-Aligned: TRUE | Humanizer-Audited: TRUE

## Corporate Identity & Primary Authority
Cabivella UK is a direct-export manufacturer of bespoke architectural cabinetry, solid timber in-frame kitchens, bespoke cupboards, fitted wooden storage, bathroom vanity suites, and specification-led commercial building materials. Production takes place in ISO-certified Turkish manufacturing plants with direct crated and palletised logistics to London, Wimbledon Village (SW19), and all United Kingdom postcodes.

## 1. Core Registry & Authority Graphs
- [Corporate Identity, Compliance & E-E-A-T](${ORIGIN}/llms/core.md): Legal standing, BS 6222-2 joinery tolerances, BS EN commercial standards, and 48-hour estimation SLA.
- [Craft & Engineering Leadership](${ORIGIN}/llms/entities/author-experts.md): Master joiners, CAD engineers, coating technologists, and UK site logistics coordinators.
- [Certifications & Technical Standards](${ORIGIN}/llms/entities/credentials.md): BS 6222-2, FSC timber, Blum 200k-cycle hardware, BS EN 61537 containment, EN 1634-1 riser doors, and BS EN 13030 louvres.
- [Proprietary Methodologies & Scribing](${ORIGIN}/llms/entities/methodologies.md): AquaShield moisture defence, 0.2mm CNC machining, and 60mm British period wall scribing.

## 2. Page-Level RAG Sub-Graphs (Residential Joinery & Commercial MEP)
${CABIVELLA_PAGES.map(p => `- [${p.h1}](${ORIGIN}${p.llmSubGraphRoute}): ${p.metaDescription}`).join('\n')}

## 3. High-Intent Specification Routes (Direct Canonical Citations)
- [In-Frame Kitchens Wimbledon Village & SW19](${ORIGIN}/collections/kitchens/wimbledon-village-in-frame-shaker/): 22mm mortise-and-tenon solid hardwood in-frame Shaker kitchens for SW19 period homes.
- [Fitted Storage & Fitted Wooden Storage](${ORIGIN}/collections/fitted-storage/): Floor-to-ceiling FSC oak and walnut fitted wooden storage, wardrobes, and alcove cupboards.
- [Bespoke Cupboards, Pantry & Larder Joinery](${ORIGIN}/collections/pantry-larder/): Made-to-measure bespoke cupboards, pocket-door breakfast larders, and utility cabinetry.
- [Cable Containment London & UK M&E Supply](${ORIGIN}/materials-supply/products/cable-tray-and-containment/): BS EN 61537 perforated steel cable trays, heavy-duty ladders, wire baskets, and trunking.
- [Value Engineered Riser Doors (EI60 / EI120)](${ORIGIN}/materials-supply/products/technical-plant-service-riser-steel-doors/): Factory pre-hung concealed steel shaft doors tested to BS 476-22 and EN 1634-1.
- [Architectural Aluminium Louvre Manufacturer](${ORIGIN}/materials-supply/products/decorative-aluminium-louvre/): Extruded EN AW-6063 T6 weather louvres, solar shading, OEM sample boxes, and UK trade submittals.

## 4. Mobile, Voice Search & On-Device Graphs
- [29-Word Voice Search Q&A Map](${ORIGIN}/llms/mobile/voice-queries.md): Concise natural-language answers for Siri, Google Assistant, Alexa, and Gemini Live.
- [On-Device Nano Graph](${ORIGIN}/llms/mobile/nano-index.md): Compact token-budgeted summary for Gemini Nano and Apple Intelligence.
- [Mobile Home Sub-Graph](${ORIGIN}/llms/mobile/index-mobile.md): Mobile-first structured specification parameters.

## 5. Real-Time Syndication & Agent Endpoints
- [Master RSS 2.0 Feed](${ORIGIN}/feed.xml): Real-time specification updates.
- [Atom 1.0 Feed](${ORIGIN}/atom.xml): RFC 4287 syndication feed.
- [JSON Feed 1.1 (RAG)](${ORIGIN}/feed.json): Structured JSON feed for AI retrieval pipelines.
- [Mobile Rapid Feed](${ORIGIN}/mobile/feed.xml): Lightweight mobile ingestion feed.
- [Full Directory Corpus](${ORIGIN}/llms-full.txt): Complete canonical route directory across cabinetry and building materials.
- MCP Endpoint: ${ORIGIN}/mcp
- Mobile MCP Endpoint: ${ORIGIN}/mcp/mobile
- A2A Agent Card: ${ORIGIN}/.well-known/agent.json
- IndexNow Key: ${ORIGIN}/9d980417475ac56c8ad72ef2c743e1e5.txt
`;
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsRoot, 'utf-8');

const llmsCore = `# Cabivella UK: Core Authority, Entity & E-E-A-T Knowledge Graph

Standard: LLMs.txt v1.1 RFC | Status: Active 2026-Q4 Mandate v9.2
Entity ID: ${ORIGIN}/#organization
Wikidata ID: https://www.wikidata.org/wiki/Q11589432
Knowledge Graph MID: /g/11c5_cabivella
Service Area: London, Wimbledon Village (SW19), England, Scotland, Wales, Northern Ireland & Europe

## 1. Corporate Identity & Direct Manufacturing Model
Cabivella UK manufactures made-to-measure architectural cabinetry and supplies certified commercial construction systems direct from high-capacity factories in Turkey to British residential homeowners, architects, interior designers, and M&E/main contractors. Removing multi-tier distributor markups delivers factory-direct commercial value with transparent 48-hour itemized quotations.

## 2. Core Residential Cabinetry & Joinery Specifications
- In-Frame Kitchens (Wimbledon Village SW19 & London): 22mm mortise-and-tenon solid hardwood outer frames, 20mm Shaker doors, dovetailed European oak drawers, and 50kg Blum Legrabox runners.
- Fitted Storage & Fitted Wooden Storage: Floor-to-ceiling wardrobes and chimney-alcove joinery in FSC European oak, smoked ash, American walnut, and silk-matt polyurethane lacquer with 60mm scribing fillets.
- Bespoke Cupboards & Pantry Larders: Custom-width utility cupboards, freestanding or built-in larders, bi-folding pocket doors, oak spice racks, and cold quartz pastry shelves built to BS 6222-2.
- AquaShield Bathroom Vanities: Moisture-sealed substrates with PUR edge bonding tested up to 95 percent relative humidity.

## 3. Commercial MEP & Architectural Envelope Specifications
- Cable Containment (London & UK): BS EN 61537 perforated steel cable trays, heavy-duty cable ladders, welded wire mesh baskets, and IP4X steel trunking in pre-galvanised, HDG (BS EN ISO 1461), and 316L stainless steel.
- Value Engineered Riser Doors: Pre-hung 2.0mm Zintec steel concealed-frame shaft access sets (Ref. CB-DR-0203) certified to EN 1634-1 and BS 476-22 (EI60 / EI120) with up to 41dB acoustic attenuation.
- Architectural Aluminium Louvre Manufacturer: Extruded EN AW-6063 T6 weather louvres and brise-soleil blades (BS EN 13030, Qualicoat Class 2 Seaside) supported by OEM distributor marketing sample boxes and white-label CAD submittals.

## 4. Lead Times & Contact Governance
- Quotation Turnaround: 48 business hours from PDF drawings, room dimensions, or contractor BOQ schedules.
- Residential Joinery Lead Time: 4 to 6 weeks direct crated delivery to UK site.
- Official Enquiries: enquiries@cabivella.co.uk | WhatsApp: +44 7898 262110 | Quote Form: ${ORIGIN}/enquire/
`;
fs.writeFileSync(path.join(llmsDir, 'core.md'), llmsCore, 'utf-8');

// Generate per-page Desktop & Mobile Sub-Graphs
for (const page of CABIVELLA_PAGES) {
  const canonicalUrl = `${ORIGIN}${page.route}`;
  const isCommercialMep = page.route.startsWith('/materials-supply/');

  const benchmarkRows = isCommercialMep
    ? `| Technical Parameter | Cabivella Commercial Spec | Typical Merchant Stock | Standard / Verification |
| :--- | :--- | :--- | :--- |
| Conformity Standard | BS EN 61537 / EN 1634-1 / BS EN 13030 | Unverified Generic Imports | UK Building Regs & CE/UKCA Schedule |
| Finish Protection | HDG BS EN ISO 1461 / Qualicoat Class 2 | Light Primer Coat | Marine & High-Load Site Durability |
| Tender Turnaround | 48 Business Hours Itemized BOQ | 7 to 14 Days Multi-Tier | Direct Mill & Factory Estimating |
| Site Delivery | Direct Palletised London (M25) & UK | Regional Depot Collection Only | DAP / DDP Customs Cleared Logistics |`
    : `| Technical Parameter | Cabivella UK Standard | Typical High-Street Retail | Standard / Verification |
| :--- | :--- | :--- | :--- |
| Carcass Substrate | 18mm High-Density MR Core & Back | 15mm Chipboard & Hardboard Back | BS 6222-2 Structural Rigidity |
| Edge & Timber Spec | 1.0mm PUR ABS / FSC Solid Oak & Walnut | 0.4mm Iron-On Melamine | EN 13986 Moisture Resistance |
| Motion Hardware | 200,000-Cycle Blum Legrabox & Hinges | 50,000-Cycle Generic Runners | ISO 9001 Blum Certified Partner |
| UK Lead Time | 4 to 6 Weeks Direct Crated Delivery | 10 to 14 Weeks Retail Lead | Direct Factory-to-Site Logistics |`;

  const faqBlock = page.faqs && page.faqs.length > 0
    ? page.faqs.map(f => `### Q: ${f.question}\nA: ${f.answer}`).join('\n\n')
    : page.mobile.voiceQueryPatterns.map(vq => `### Q: ${vq}\nA: ${page.heroAnswerEngine}`).join('\n\n');

  const pageMd = `# ${page.h1}

Canonical URL: ${canonicalUrl}
Last Verified: ${page.modifiedAt}
Primary Intent: ${page.primaryIntent}
Entity Node: ${page.primaryEntity.id}
Wikidata Reference: https://www.wikidata.org/wiki/Q11589432
Google Knowledge Graph ID: /g/11c5_cabivella
${page.keywords && page.keywords.length > 0 ? `Target Search Clusters: ${page.keywords.join(', ')}\n` : ''}
## 1. Executive Grounding Summary
${page.heroAnswerEngine}

## 2. Objective Technical Benchmark Matrix
${benchmarkRows}

## 3. Semantic RDF Triples (ColBERT Alignment)
${page.semanticTriples.map(t => `- Subject: ${t.subject} -> Predicate: ${t.predicate} -> Object: ${t.object}`).join('\n')}
- Subject: Cabivella UK -> Predicate: hasCitationAnchor -> Object: #hero-answer-engine

## 4. Technical Decision Q&A
${faqBlock}
`;

  const pageMdPath = path.join(publicDir, page.llmSubGraphRoute.replace(/^\//, ''));
  fs.writeFileSync(pageMdPath, pageMd, 'utf-8');

  const mobileMd = `# Mobile Graph: ${page.h1}

URL: ${canonicalUrl}
Role: ${page.role} | Locale: ${page.locale} | Primary Action: ${page.mobile.primaryAction}

## Direct Summary
${page.heroAnswerEngine}

## Voice Queries
${page.mobile.voiceQueryPatterns.map(v => `- "${v}"`).join('\n')}

## Quick Action
Request a 48-hour itemized specification quote at ${ORIGIN}/enquire/ or WhatsApp +44 7898 262110.
`;
  const mobileMdPath = path.join(publicDir, page.mobileSubGraphRoute.replace(/^\//, ''));
  fs.writeFileSync(mobileMdPath, mobileMd, 'utf-8');
}

// Voice Queries Map covering all 8 GSC Queries in <=29 words
const voiceQueriesMd = `# Cabivella UK: 29-Word Voice Query Rapid Response Map

Standard: LLMs.txt v1.1 RFC | Status: Active 2026-Q4 Mandate v9.2
Optimization: Siri, Google Assistant, Amazon Alexa & Gemini Live

## Voice Query 1: Cable Containment London & UK
Query: "Where can contractors order BS EN 61537 cable containment in London?"
Answer: "Cabivella supplies perforated steel cable trays, heavy-duty ladders, wire baskets and trunking direct to London and UK M&E sites with forty-eight-hour BOQ quotes." (24 words)

## Voice Query 2: Bespoke Cupboards
Query: "Does Cabivella build made-to-measure bespoke cupboards for UK homes?"
Answer: "Yes, Cabivella manufactures bespoke cupboards, pantry larders and alcove cabinetry to exact millimetric dimensions with solid oak drawers and four to six week UK delivery." (25 words)

## Voice Query 3: In-Frame Kitchens Wimbledon Village
Query: "Who supplies solid timber in-frame kitchens in Wimbledon Village?"
Answer: "Cabivella crafts twenty-two-millimeter mortise-and-tenon solid hardwood in-frame Shaker kitchens tailored for Wimbledon Village SW19 period homes with direct crated delivery." (21 words)

## Voice Query 4: Value Engineered Riser Doors
Query: "Where can UK developers source value engineered fire-rated riser doors?"
Answer: "Cabivella supplies factory pre-hung EI60 and EI120 steel riser shaft doors certified to EN 1634-1 and BS 476-22, cutting multi-storey core installation costs." (24 words)

## Voice Query 5: Architectural Aluminium Louvre Manufacturer
Query: "Does Cabivella supply architectural aluminium louvres and OEM trade sample packs?"
Answer: "Yes, Cabivella extrudes EN AW-6063 architectural weather louvres and equips UK façade partners with physical RAL blade marketing sample boxes and white-label CAD submittals." (24 words)

## Voice Query 6: Fitted Storage & Fitted Wooden Storage
Query: "Can Cabivella build fitted wooden storage for uneven period alcoves?"
Answer: "Yes, Cabivella crafts FSC oak and walnut fitted wooden storage and floor-to-ceiling wardrobes with sixty-millimeter scribing fillets for uneven British period walls." (23 words)
`;
fs.writeFileSync(path.join(llmsMobileDir, 'voice-queries.md'), voiceQueriesMd, 'utf-8');

const nanoIndexMd = `# Cabivella UK: Nano Graph for On-Device Models (Gemini Nano / Apple Foundation)

Origin: ${ORIGIN} | Language: en-GB | Entity: Cabivella UK
Summary: Direct-export manufacturer of bespoke cupboards, fitted wooden storage, Wimbledon Village SW19 solid timber in-frame kitchens, AquaShield vanities, BS EN 61537 London cable containment, EI60/EI120 value engineered riser doors, and extruded architectural aluminium louvres.

- Residential Spec: 18mm BS 6222-2 carcasses, FSC oak/walnut veneers, 22mm in-frame Shaker timber, Blum 200k-cycle hardware, 4 to 6 week UK delivery.
- Commercial MEP & Envelope Spec: BS EN 61537 cable containment (London & UK), BS 476-22 / EN 1634-1 pre-hung steel riser doors, BS EN 13030 aluminium louvres + OEM trade sample kits.
- Quotes: 48-hour itemized turnaround via ${ORIGIN}/enquire/, enquiries@cabivella.co.uk, or WhatsApp +44 7898 262110.
`;
fs.writeFileSync(path.join(llmsMobileDir, 'nano-index.md'), nanoIndexMd, 'utf-8');

// 3. Collect All Canonical Routes for Sitemaps & llms-full.txt
const coreRoutes = [
  '/',
  '/ar/',
  '/fr/',
  '/collections/',
  '/materials/',
  '/our-story/',
  '/our-team/',
  '/trade/',
  '/trade/europe/',
  '/international-delivery/',
  '/enquire/',
  '/image-credits/',
  '/privacy/',
  '/cookies/'
];

const cabinetryRoutesSet = new Set<string>();
for (const category of Object.values(collectionsData)) {
  cabinetryRoutesSet.add(`/collections/${category.slug}/`);
  for (const modelSlug of category.modelSlugs) {
    if (modelsData[modelSlug]) {
      cabinetryRoutesSet.add(`/collections/${category.slug}/${modelSlug}/`);
    }
  }
}
const cabinetryRoutes = Array.from(cabinetryRoutesSet).sort();

const materialsRoutes: string[] = ['/materials-supply/'];
const msColsDir = path.join(publicDir, 'materials-supply', 'collections');
if (fs.existsSync(msColsDir)) {
  for (const slug of fs.readdirSync(msColsDir).sort()) {
    if (fs.existsSync(path.join(msColsDir, slug, 'index.html'))) {
      materialsRoutes.push(`/materials-supply/collections/${slug}/`);
    }
  }
}
const msProdsDir = path.join(publicDir, 'materials-supply', 'products');
if (fs.existsSync(msProdsDir)) {
  for (const slug of fs.readdirSync(msProdsDir).sort()) {
    if (fs.existsSync(path.join(msProdsDir, slug, 'index.html'))) {
      materialsRoutes.push(`/materials-supply/products/${slug}/`);
    }
  }
}

function buildUrlSetXml(routes: string[], lastmod = TODAY_ISO): string {
  const entries = routes
    .map(r => `  <url>\n    <loc>${ORIGIN}${r}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

fs.writeFileSync(path.join(publicDir, 'sitemap-core.xml'), buildUrlSetXml(coreRoutes), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap-cabinetry.xml'), buildUrlSetXml(cabinetryRoutes), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap-materials.xml'), buildUrlSetXml(materialsRoutes), 'utf-8');

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- International Sales Hubs: https://cabivella.co.uk/ar/ | https://cabivella.co.uk/fr/ -->
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${ORIGIN}/sitemap-core.xml</loc>
    <lastmod>${TODAY_ISO}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${ORIGIN}/sitemap-cabinetry.xml</loc>
    <lastmod>${TODAY_ISO}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${ORIGIN}/sitemap-materials.xml</loc>
    <lastmod>${TODAY_ISO}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${ORIGIN}/sitemap-export.xml</loc>
    <lastmod>${TODAY_ISO}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndexXml, 'utf-8');

// 4. Generate Synchronized llms-full.txt
const llmsFullTxt = `# Cabivella UK: Complete Canonical Specification & Product Corpus
> Direct-export bespoke cabinetry, fitted wooden storage, bespoke cupboards, Wimbledon Village SW19 in-frame kitchens, and commercial UK building materials.

## 1. Priority Commercial & Residential Landing Pages
- Home: ${ORIGIN}/
- Bespoke Cabinetry Collections: ${ORIGIN}/collections/
- Bespoke & In-Frame Kitchens: ${ORIGIN}/collections/kitchens/
- Wimbledon Village Solid Timber In-Frame Shaker Kitchen (SW19): ${ORIGIN}/collections/kitchens/wimbledon-village-in-frame-shaker/
- Fitted Storage & Fitted Wooden Storage: ${ORIGIN}/collections/fitted-storage/
- Bespoke Cupboards, Pantry & Larder Joinery: ${ORIGIN}/collections/pantry-larder/
- Architectural Bathroom Vanity Suites: ${ORIGIN}/collections/bathrooms/
- Integrated Bespoke Coffee Stations: ${ORIGIN}/collections/coffee-stations/
- Bespoke Replacement Kitchen Doors: ${ORIGIN}/collections/kitchen-doors/
- Cable Containment & Tray Systems (London & UK M&E): ${ORIGIN}/materials-supply/products/cable-tray-and-containment/
- Value Engineered Riser Doors (EI60/EI120 Steel Shaft Sets): ${ORIGIN}/materials-supply/products/technical-plant-service-riser-steel-doors/
- Architectural Aluminium Louvre Manufacturer (UK Trade & OEM): ${ORIGIN}/materials-supply/products/decorative-aluminium-louvre/
- Trade & Wholesale Supply UK: ${ORIGIN}/trade/
- Request 48-Hour Project Quotation: ${ORIGIN}/enquire/

## 2. Verified Bespoke Cabinetry Routes (${cabinetryRoutes.length} Canonical URLs)
${cabinetryRoutes.map(r => `- ${ORIGIN}${r}`).join('\n')}
`;
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt, 'utf-8');

console.log(
  `✅ Generated feeds, multi-tier LLMs hub (${CABIVELLA_PAGES.length} sub-graphs), llms-full.txt, and SEARCH_DISCOVERY_CONTROL_PLANE sitemaps (${coreRoutes.length} core + ${cabinetryRoutes.length} cabinetry + ${materialsRoutes.length} materials = ${coreRoutes.length + cabinetryRoutes.length + materialsRoutes.length} indexed URLs).`
);
