export interface ModelDetail {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dimensionsMm: string;
  materials: string[];
  finishOptions: string[];
  installationScope: string;
  image: string;
  gallery: string[];
  description: string;
  keyFeatures: string[];
}

export const modelsData: Record<string, ModelDetail> = {
  "shaker-kitchens": {
    "slug": "shaker-kitchens",
    "category": "kitchens",
    "title": "Classic Shaker Kitchens",
    "metaTitle": "Classic Shaker Kitchens | Made-to-Measure British Joinery | Cabivella UK",
    "metaDescription": "Timeless made-to-measure Shaker kitchens featuring solid hardwood stiles, mortise-and-tenon joints, and precision motion hardware tailored to UK homes.",
    "dimensionsMm": "Made-to-measure (typical 600mm carcass depth, bespoke ceiling-height runs)",
    "materials": [
      "Solid European Ash timber frame",
      "High-density moisture-resistant MR-MDF core",
      "Concealed hydraulic soft-close runners"
    ],
    "finishOptions": [
      "Heritage Sage Green",
      "Chalk White",
      "Deep Oxford Navy",
      "Satin Pumice",
      "Natural Oiled Oak interior"
    ],
    "installationScope": "Delivered pre-assembled in protective timber crates; ready for installation by your appointed contractor or local specialist.",
    "image": "/assets/img/models/shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/shaker-kitchens.webp",
      "/assets/img/models/slim-frame-shaker-kitchens.webp"
    ],
    "description": "The definitive British architectural aesthetic. Classical five-piece mortise-and-tenon timber stiles with integrated buffer dampening, engineered for longevity in UK homes.",
    "keyFeatures": [
      "Traditional 70mm timber rails with subtle internal bead detailing",
      "Solid oak dovetailed drawer boxes with 40kg load-rated undermount glides",
      "Multi-coat factory-baked lacquer resilient against grease and cooking steam",
      "Full custom dimensioning tailored to uneven chimney breasts and bay windows"
    ],
  },
  "contemporary-kitchens": {
    "slug": "contemporary-kitchens",
    "category": "kitchens",
    "title": "Contemporary Slab Kitchens",
    "metaTitle": "Contemporary Handleless Kitchens | Made-to-Measure Joinery | Cabivella UK",
    "metaDescription": "Architectural flat-panel and handleless kitchens with micro-bevelled edges, recessed J-pull channels, and matt anti-fingerprint surfaces.",
    "dimensionsMm": "Made-to-measure (typical 600mm base, 350mm wall runs)",
    "materials": [
      "E1 grade structural birch core",
      "Velvet super-matt anti-fingerprint laminate",
      "Continuous anodised aluminium rail profile"
    ],
    "finishOptions": [
      "Graphite Anthracite",
      "Porcelain Warm White",
      "Raw Umber Walnut",
      "Smoked Forest Green"
    ],
    "installationScope": "Pre-assembled rigid carcasses with pre-fitted recessed aluminium grip channels for seamless alignment.",
    "image": "/assets/img/models/contemporary-kitchens.webp",
    "gallery": [
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/models/compact-kitchens.webp"
    ],
    "description": "Purist architectural cabinetry celebrating unobstructed monolithic elevations, razor-sharp shadow gaps, and tactile matt surfaces.",
    "keyFeatures": [
      "Continuous anodised continuous channel system for pure handleless operation",
      "Super-matt tactile surface formulation with thermal micro-scratch healability",
      "Full-height floor-to-ceiling appliance banks with integrated ventilation chimneys",
      "Bespoke cutlery divider sets in solid American black walnut"
    ],
  },
  "compact-kitchens": {
    "slug": "compact-kitchens",
    "category": "kitchens",
    "title": "Compact Architectural Kitchens",
    "metaTitle": "Compact Studio Kitchens | Made-to-Measure Small Space Joinery | Cabivella UK",
    "metaDescription": "High-density functional cabinetry designed for UK urban apartments, guest suites, and secondary kitchen spaces without compromising specification.",
    "dimensionsMm": "From 1600mm to 2400mm compact modular runs",
    "materials": [
      "18mm moisture-resistant structural core",
      "HPL hardwearing work surface",
      "Synchronised heavy-duty lift-up flap fittings"
    ],
    "finishOptions": [
      "Monochrome Basalt & Chalk",
      "Warm Oak & Putty",
      "Dove Grey & Brushed Brass accents"
    ],
    "installationScope": "Engineered for rapid, accurate levelling in tight city apartments and historic properties.",
    "image": "/assets/img/models/compact-kitchens.webp",
    "gallery": [
      "/assets/img/models/compact-kitchens.webp",
      "/assets/img/models/contemporary-kitchens.webp"
    ],
    "description": "Maximum spatial efficiency for urban residences. Integrated appliance housings, tiered cutlery inserts, and vertical wall storage modules.",
    "keyFeatures": [
      "High-capacity bi-fold lift-up wall units for unrestricted headroom",
      "Integrated pull-out recycling sorting station and under-sink organiser caddy",
      "Pre-routed LED task lighting recesses beneath wall cabinets",
      "Modular width increments from 1600mm upwards for bespoke alcove installation"
    ],
  },
  "arya-classic-shaker": {
    "slug": "arya-classic-shaker",
    "category": "kitchens",
    "title": "Arya Heritage Shaker Kitchen",
    "metaTitle": "Arya Heritage Shaker Kitchen | British Joinery | Cabivella UK",
    "metaDescription": "Quintessential British five-piece Shaker cabinetry featuring solid ash stiles, deep recessed centre panels, and hand-finished satin lacquer.",
    "dimensionsMm": "Made-to-measure tailored to room architecture",
    "materials": [
      "Solid European Ash framing",
      "Moisture-resistant core panel",
      "Under-mount soft-close damping runners"
    ],
    "finishOptions": [
      "Heritage Sage Green",
      "Parchment Cream",
      "Deep Indigo Navy",
      "Natural Ash Interior"
    ],
    "installationScope": "Supplied rigid in protective timber boxing with installation guides.",
    "image": "/assets/img/models/shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/shaker-kitchens.webp",
      "/assets/img/models/slim-frame-shaker-kitchens.webp"
    ],
    "description": "A celebrated tribute to traditional British joinery. Solid ash framing with authentic mortise-and-tenon construction, offering enduring poise in townhouse and country settings.",
    "keyFeatures": [
      "Authentic five-piece solid ash frame with 75mm stiles",
      "Concealed 3D adjustable soft-close European hinges",
      "Dovetailed solid timber drawer boxes with full extension glides",
      "Custom decorative mantle and cooker canopy integration options"
    ],
  },
  "lea-bevelled-shaker": {
    "slug": "lea-bevelled-shaker",
    "category": "kitchens",
    "title": "Lea Bevelled Shaker Kitchen",
    "metaTitle": "Lea Bevelled Shaker Kitchen | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Refined bevelled-frame Shaker kitchen cabinetry uniting classical geometry with subtle contemporary chamfered detailing.",
    "dimensionsMm": "Bespoke height and width increments",
    "materials": [
      "Solid hardwood outer framing",
      "High-density centre panel",
      "Heavy-gauge steel hinges"
    ],
    "finishOptions": [
      "Smoked Olive",
      "Cashmere Neutral",
      "Slate Grey",
      "Warm Truffle"
    ],
    "installationScope": "Factory rigid assembly with pre-machined hardware locations.",
    "image": "/assets/img/models/slim-frame-shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/slim-frame-shaker-kitchens.webp",
      "/assets/img/models/shaker-kitchens.webp"
    ],
    "description": "Characterised by an internal 45-degree chamfer that catches natural light, the Lea profile brings transitional warmth to Victorian terrace extensions and Georgian properties.",
    "keyFeatures": [
      "Internal 45-degree chamfered edge profile preventing dust accumulation",
      "22mm door thickness providing substantial tactile feel",
      "Multi-layer polyurethane matt lacquer resistant to household spills",
      "Tailored tall appliance larders with integrated breakfast bar elements"
    ],
  },
  "luna-micro-shaker": {
    "slug": "luna-micro-shaker",
    "category": "kitchens",
    "title": "Luna Micro-Frame Modern Shaker",
    "metaTitle": "Luna Micro-Frame Shaker Kitchen | Modern British Joinery | Cabivella UK",
    "metaDescription": "Slimline 15mm micro-frame Shaker kitchen cabinetry delivering a lightweight, contemporary silhouette for architectural interiors.",
    "dimensionsMm": "Made-to-measure ceiling-height cabinetry runs",
    "materials": [
      "Engineered timber composite",
      "Solid timber reinforcement",
      "Concealed motion slide hardware"
    ],
    "finishOptions": [
      "Forest Moss",
      "Oatmeal Beige",
      "Charcoal Noir",
      "Oiled Warm Oak"
    ],
    "installationScope": "Pre-assembled carcasses with laser-levelled suspension brackets.",
    "image": "/assets/img/models/slim-frame-shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/slim-frame-shaker-kitchens.webp",
      "/assets/img/models/contemporary-kitchens.webp"
    ],
    "description": "An ultra-refined evolution of the traditional Shaker aesthetic. Slender 15mm perimeter frames create delicate shadow lines while preserving structural integrity.",
    "keyFeatures": [
      "Ultra-slim 15mm contemporary outer framing",
      "Seamless corner jointing with zero visible glue seams",
      "Full integration with fluted feature back panels and open display niches",
      "Factory-mounted interior LED strip lighting channels"
    ],
  },
  "lora-contemporary-slab": {
    "slug": "lora-contemporary-slab",
    "category": "kitchens",
    "title": "Lora Super-Matt Contemporary Kitchen",
    "metaTitle": "Lora Super-Matt Kitchen | Contemporary Cabinets | Cabivella UK",
    "metaDescription": "Velvety super-matt slab kitchen cabinetry with anti-fingerprint thermal technology and clean monolithic architectural runs.",
    "dimensionsMm": "Made-to-measure base, tall, and wall runs",
    "materials": [
      "Moisture-resistant MR core",
      "Thermal-healing super-matt finish",
      "Anodised aluminium channels"
    ],
    "finishOptions": [
      "Matt Anthracite",
      "Chalk White",
      "Warm Greige",
      "Deep Espresso"
    ],
    "installationScope": "Pre-assembled rigid units complete with levelling feet and transit braces.",
    "image": "/assets/img/models/contemporary-kitchens.webp",
    "gallery": [
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/models/compact-kitchens.webp"
    ],
    "description": "A masterclass in restraint. Velvet-touch slab doors with micro-beveled borders create an atmosphere of serene minimalism in modern architect-designed extensions.",
    "keyFeatures": [
      "Anti-fingerprint nano-coating with silk-touch tactile response",
      "Seamless laser-welded edge banding resistant to steam degradation",
      "Push-to-open electronic servo-drive options for true handleless purity",
      "Custom ceiling-height infill panels scribed to UK plaster contours"
    ],
  },
  "vera-architectural-kitchen": {
    "slug": "vera-architectural-kitchen",
    "category": "kitchens",
    "title": "Vera Architectural Clean-Line Kitchen",
    "metaTitle": "Vera Architectural Kitchen | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Minimalist architectural kitchen cabinetry featuring flush facades, integrated J-pull contours, and natural European oak accents.",
    "dimensionsMm": "Made-to-measure layouts",
    "materials": [
      "European oak veneer accents",
      "High-density structural substrate",
      "Synchronised soft-close glides"
    ],
    "finishOptions": [
      "Natural White Oak",
      "Satin Taupe",
      "Pumice Stone",
      "Matt Carbon"
    ],
    "installationScope": "Supplied fully assembled in timber shipping crates.",
    "image": "/assets/img/models/contemporary-kitchens.webp",
    "gallery": [
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/models/island-suite-kitchens.webp"
    ],
    "description": "Harmonising warm organic timber veneers with cool lacquered surfaces, Vera provides balanced texture and architectural permanence.",
    "keyFeatures": [
      "Matched-grain natural European oak veneer fronts",
      "Concealed finger-pull channel lacquered in complementary tones",
      "Heavy-duty pan drawers tested to 50kg dynamic loads",
      "Bespoke spice and condiment pull-out inserts"
    ],
  },
  "axis-handleless-shadow": {
    "slug": "axis-handleless-shadow",
    "category": "kitchens",
    "title": "Axis Handleless Shadow-Gap Kitchen",
    "metaTitle": "Axis Handleless Shadow-Gap Kitchen | Cabivella UK",
    "metaDescription": "Pure continuous shadow-gap handleless kitchen cabinetry with extruded aluminium rails and flush monolithic elevations.",
    "dimensionsMm": "Bespoke runs to millimetre precision",
    "materials": [
      "Precision-extruded aluminium profiles",
      "High-density lacquer core",
      "German engineered motion runners"
    ],
    "finishOptions": [
      "Brushed Bronze Profile / Chalk",
      "Matt Black Profile / Anthracite",
      "Natural Anodised / Greige"
    ],
    "installationScope": "Factory pre-fitted rail brackets for laser-straight line continuity.",
    "image": "/assets/img/models/contemporary-kitchens.webp",
    "gallery": [
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/models/shaker-kitchens.webp"
    ],
    "description": "Continuous horizontal and vertical shadow-gap architecture. Recessed aluminium profiles allow ergonomic finger-access while preserving uninterrupted door planes.",
    "keyFeatures": [
      "Continuous uninterrupted horizontal and vertical finger rails",
      "Recessed LED illumination channel within grip profile",
      "Fully integrated column refrigeration and larder housings",
      "Scratch-resistant micro-texture baked enamel finish"
    ],
  },
  "vega-ergonomic-suite": {
    "slug": "vega-ergonomic-suite",
    "category": "kitchens",
    "title": "Vega Ergonomic Culinary Suite",
    "metaTitle": "Vega Ergonomic Culinary Suite | Bespoke Kitchens | Cabivella UK",
    "metaDescription": "High-performance culinary kitchen cabinetry featuring tiered workflow zones, concealed breakfast stations, and ergonomic reach heights.",
    "dimensionsMm": "Made-to-measure culinary runs",
    "materials": [
      "Moisture-resistant carcass timber",
      "Solid brass interior handles",
      "Heavy-load pantry pull-outs"
    ],
    "finishOptions": [
      "Oxford Navy",
      "Almond Silk",
      "Smoked Pine",
      "Pure Oyster"
    ],
    "installationScope": "Modular rigid delivery with dedicated joinery numbering system.",
    "image": "/assets/img/models/island-suite-kitchens.webp",
    "gallery": [
      "/assets/img/models/island-suite-kitchens.webp",
      "/assets/img/models/shaker-kitchens.webp"
    ],
    "description": "Engineered for passionate culinary hosts. Intuitive workstation zoning combines deep prep drawers, hidden charging docks, and bi-folding appliance cupboards.",
    "keyFeatures": [
      "Bi-fold concealed prep station with integrated task lighting",
      "Ergonomic split-level island preparation surface",
      "Solid beech dovetail internal drawer inserts",
      "Heavy-capacity pull-out tall dry storage tower"
    ],
  },
  "urban-compact-160": {
    "slug": "urban-compact-160",
    "category": "kitchens",
    "title": "Urban 160 Compact Studio Kitchen",
    "metaTitle": "Urban 160 Compact Kitchen | Studio Apartment Joinery | Cabivella UK",
    "metaDescription": "Space-saving 160cm to 220cm compact kitchen solution combining cooktop, sink, integrated extraction, and soft-close cabinetry.",
    "dimensionsMm": "1600mm standard width (expandable to 2400mm)",
    "materials": [
      "18mm dense MR composite",
      "High-pressure compact laminate top",
      "Soft-close motion hinges"
    ],
    "finishOptions": [
      "Anthracite & Natural Timber",
      "Clean White & Slate",
      "Muted Sage & Sand Oak"
    ],
    "installationScope": "Rapid-installation modular framework with integrated plumbing void.",
    "image": "/assets/img/models/compact-kitchens.webp",
    "gallery": [
      "/assets/img/models/compact-kitchens.webp",
      "/assets/img/models/contemporary-kitchens.webp"
    ],
    "description": "An ingenious high-density solution for secondary suites, loft conversions, and London pied-\u00e0-terres. Complete culinary capability within a tailored 160cm footprint.",
    "keyFeatures": [
      "Engineered 1600mm base with provisions for compact oven, hob, and sink",
      "Bi-fold overhead lift cabinets providing clear line of sight",
      "Moisture-proof composite worktop with factory-machined cutouts",
      "Integrated waste sorting drawer and modular utility storage"
    ],
  },
  "wall-hung-vanities": {
    "slug": "wall-hung-vanities",
    "category": "bathrooms",
    "title": "Floating Wall-Hung Vanities",
    "metaTitle": "Wall-Hung Bathroom Vanities | Bespoke Floating Storage | Cabivella UK",
    "metaDescription": "Bespoke floating bathroom vanity units crafted from marine-grade moisture-resistant timbers with concealed heavy-duty wall brackets.",
    "dimensionsMm": "600mm to 1600mm widths (bespoke single or double basin)",
    "materials": [
      "Marine-grade moisture-resistant substrate",
      "Waterproof polyurethane baked lacquer",
      "Concealed heavy-load steel wall brackets"
    ],
    "finishOptions": [
      "Nordic Pale Oak",
      "Fluted Basalt Grey",
      "Warm Alabaster",
      "Deep Aegean Blue"
    ],
    "installationScope": "Supplied with certified heavy-duty steel hanging plates and 3D alignment adjustments.",
    "image": "/assets/img/models/real_bathrooms/bath_5002579014_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002579014_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002579014_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002579014_3.webp"
],
    "description": "Elevate bathroom acoustics and floor visibility. Floating vanity units engineered to withstand high-humidity British bathroom environments.",
    "keyFeatures": [
      "Tested for structural rigidity under 150kg downward point loads",
      "U-shaped plumbing cutout preserving maximum usable drawer volume",
      "Soft-close full extension drawer runners with dampening buffers",
      "Optional integrated warm-white under-vanity ambient LED lighting"
    ],
  },
  "fluted-vanities": {
    "slug": "fluted-vanities",
    "category": "bathrooms",
    "title": "Acoustic Fluted Timber Vanities",
    "metaTitle": "Fluted Bathroom Vanities | Reeded Timber Joinery | Cabivella UK",
    "metaDescription": "Tactile fluted and reeded wood bathroom vanity units with solid surface or quartz countertop integrations.",
    "dimensionsMm": "800mm, 1000mm, 1200mm and bespoke bespoke double configurations",
    "materials": [
      "Precision CNC-milled reeded oak veneer",
      "Moisture-sealed internal carcasses",
      "Solid brass knurled handles"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Black Walnut",
      "Satin White Reeded",
      "Soft Clay"
    ],
    "installationScope": "Factory assembled, pre-drilled for basin waste and tap positions.",
    "image": "/assets/img/models/real_bathrooms/bath_5002572184_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002572184_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002572184_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002572184_3.webp"
],
    "description": "Architectural reeded surfaces that introduce depth, texture, and acoustic dampening to tiled luxury bathroom environments.",
    "keyFeatures": [
      "Precision 12mm fluted timber profile carved on multi-axis CNC routers",
      "Multi-step hydro-repellent sealant shielding against steam and standing drops",
      "Seamless push-to-open drawer mechanisms preserving pure fluted facades",
      "Coordinated open towel niche and drawer storage configurations"
    ],
  },
  "tall-bathroom-storage": {
    "slug": "tall-bathroom-storage",
    "category": "bathrooms",
    "title": "Tall Bathroom Linen Columns",
    "metaTitle": "Tall Bathroom Linen Cabinets | Slim Tower Storage | Cabivella UK",
    "metaDescription": "Full-height slimline bathroom storage towers for towels, apothecary goods, and laundry baskets in UK residential bathrooms.",
    "dimensionsMm": "350mm to 500mm wide, 1600mm to 2000mm high, 320mm depth",
    "materials": [
      "18mm moisture-sealed timber core",
      "Toughened glass adjustable shelves",
      "Concealed 110-degree soft-close hinges"
    ],
    "finishOptions": [
      "Muted Sage",
      "Chalk White",
      "Warm Pumice",
      "Dark Graphite"
    ],
    "installationScope": "Supplied rigid with heavy-duty wall anchor brackets for secure installation.",
    "image": "/assets/img/models/real_bathrooms/bath_5002572000_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002572000_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002572000_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002572000_3.webp"
],
    "description": "Maximise vertical room geometry. Slim-footprint storage towers tailored for compact en-suites and grand master bathrooms alike.",
    "keyFeatures": [
      "Reversible door orientation (left or right swing) with soft-close cushioning",
      "Lower pull-out ventilated timber laundry basket compartment",
      "Toughened 8mm clear safety glass shelves with anti-tip locking pins",
      "Internal 240V shaver socket and toothbrush charging conduit integration"
    ],
  },
  "malta-vanity-console": {
    "slug": "malta-vanity-console",
    "category": "bathrooms",
    "title": "Malta 100 Illuminated Vanity Console",
    "metaTitle": "Malta 100 Illuminated Vanity | Bathroom Furniture | Cabivella UK",
    "metaDescription": "100cm floating vanity suite featuring integrated LED magnifying mirror, dual soft-close drawers, and matt polyurethane lacquer.",
    "dimensionsMm": "1000mm width, 520mm height, 480mm depth",
    "materials": [
      "MR-MDF substrate",
      "Hydrophobic matt lacquer",
      "Blum motion soft-close glides"
    ],
    "finishOptions": [
      "Matt White & Anthracite",
      "Deep Slate & Oak",
      "Pure Cashmere"
    ],
    "installationScope": "Heavy-duty wall anchors included.",
    "image": "/assets/img/models/real_bathrooms/bath_5002001118_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002001118_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002001118_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002001118_3.webp"
],
    "description": "A refined 100cm floating bathroom console designed for sophisticated en-suites. Dual deep drawers provide ample storage for beauty apparatus and linens.",
    "keyFeatures": [
      "Precision 1000mm single-basin footprint optimised for modern master en-suites",
      "Concealed handleless bevel lip for effortless drawer opening",
      "Hydro-phobic multi-layer coating moisture-resistant in bathroom environments",
      "Compatible with luxury undermount or vessel stone washbasins"
    ],
  },
  "design-monolith-vanity": {
    "slug": "design-monolith-vanity",
    "category": "bathrooms",
    "title": "Design 105 Monolith Double-Basin Vanity",
    "metaTitle": "Design 105 Double Vanity | Luxury Bathrooms | Cabivella UK",
    "metaDescription": "105cm to 160cm architectural double-basin vanity console with monolithic mitred drawer edges and solid ceramic top integration.",
    "dimensionsMm": "1050mm to 1600mm bespoke spans",
    "materials": [
      "Engineered core timber",
      "Composite stone deck",
      "Soft-close hydraulic slides"
    ],
    "finishOptions": [
      "Nordic Sand",
      "Smoked Timber",
      "Silk Taupe",
      "Charcoal"
    ],
    "installationScope": "Pre-assembled dual-carcass delivery.",
    "image": "/assets/img/models/real_bathrooms/bath_5002579024_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002579024_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002579024_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002579024_3.webp"
],
    "description": "Monolithic lines with mitred 45-degree edge detailing create a floating sculpture in expansive family and master bathrooms.",
    "keyFeatures": [
      "Continuous mitred outer carcass wrapping seamlessly around drawer faces",
      "Dual independent soft-close drawers with integrated cosmetic dividers",
      "Tested to withstand high dynamic loads with certified wall hanging fixings",
      "Internal water-repellent walnut melamine lining"
    ],
  },
  "aydos-compact-vanity": {
    "slug": "aydos-compact-vanity",
    "category": "bathrooms",
    "title": "Aydos 55 Compact Cloakroom Vanity",
    "metaTitle": "Aydos 55 Cloakroom Vanity | Small Bathroom Furniture | Cabivella UK",
    "metaDescription": "55cm slim-projection cloakroom vanity unit designed for UK under-stair WCs and compact powder rooms.",
    "dimensionsMm": "550mm width, 400mm height, 380mm slim depth",
    "materials": [
      "Moisture-resistant compact composite",
      "Stainless steel hardware",
      "Soft-close hinge"
    ],
    "finishOptions": [
      "Gloss Chalk White",
      "Matt Pebble",
      "Sage Dust"
    ],
    "installationScope": "Compact delivery for tight staircase and hallway access.",
    "image": "/assets/img/models/real_bathrooms/bath_5001103682_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5001103682_1.webp",
      "/assets/img/models/real_bathrooms/bath_5001103682_2.webp",
      "/assets/img/models/real_bathrooms/bath_5001103682_3.webp"
],
    "description": "Engineered specifically for British cloakrooms and downstairs WCs. Slim 380mm depth ensures unobstructed passage while concealing toiletries.",
    "keyFeatures": [
      "Ultra-slim 380mm projection maximising door clearance in tight cloakrooms",
      "Single soft-close deep drawer with cutaway plumbing channel",
      "Integrated side towel rail bracket option in brushed nickel or brass",
      "Factory-tested waterproof edge-sealing technology"
    ],
  },
  "root-groove-vanity": {
    "slug": "root-groove-vanity",
    "category": "bathrooms",
    "title": "Root Groove Reeded Vanity Unit",
    "metaTitle": "Root Groove Reeded Vanity | Fluted Bathroom Units | Cabivella UK",
    "metaDescription": "80cm to 120cm reeded timber vanity unit featuring vertical acoustic rhythm, rich wood grain, and soft-close storage.",
    "dimensionsMm": "800mm, 1000mm, 1200mm configurations",
    "materials": [
      "CNC routed grooved timber",
      "Sealed MR substrate",
      "Concealed heavy-load brackets"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Matt Clay",
      "Basalt"
    ],
    "installationScope": "Factory assembled, pre-cut for standard UK plumbing traps.",
    "image": "/assets/img/models/real_bathrooms/bath_5000668234_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000668234_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000668234_2.webp"
],
    "description": "Rhythmic vertical grooves carved into organic timber veneers soften ceramic and porcelain bathroom walls with tactile architectural warmth.",
    "keyFeatures": [
      "Distinctive vertical grooved facade milled with 8mm spacing",
      "Concealed finger-pull bevel across the top drawer rim",
      "Marine-grade hydrophobic protective finish",
      "Generous bottom drawer designed for tall shampoo and lotion bottles"
    ],
  },
  "beat-ribbed-vanity": {
    "slug": "beat-ribbed-vanity",
    "category": "bathrooms",
    "title": "Beat Ribbed Architectural Vanity",
    "metaTitle": "Beat Ribbed Vanity | Bespoke Fluted Joinery | Cabivella UK",
    "metaDescription": "Geometric ribbed vanity unit featuring bold dimensional fluting and premium lacquered or wood veneer finishes.",
    "dimensionsMm": "800mm to 1400mm bespoke spans",
    "materials": [
      "Multi-density timber composite",
      "Hydraulic damping slides",
      "Quartz top compatible"
    ],
    "finishOptions": [
      "Warm Putty",
      "Graphite Silk",
      "Oiled Oak",
      "Earthy Terracotta"
    ],
    "installationScope": "Supplied rigid with timber wall-mounting cleat.",
    "image": "/assets/img/models/real_bathrooms/bath_5000580839_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000580839_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000580839_2.webp",
      "/assets/img/models/real_bathrooms/bath_5000580839_3.webp"
],
    "description": "Daring geometric ribs create dramatic play of light and shadow, delivering a boutique hotel aesthetic into private British residences.",
    "keyFeatures": [
      "Deep-cut 15mm ribs offering tactile and visual drama",
      "Durable moisture-cured polyurethane finish",
      "Full extension synchronous drawer mechanisms with 35kg load rating",
      "Fully sealed sink trap cutouts with protective PVC edging"
    ],
  },
  "daisy-reeded-console": {
    "slug": "daisy-reeded-console",
    "category": "bathrooms",
    "title": "Daisy Fluted Timber Console",
    "metaTitle": "Daisy Fluted Timber Console | Reeded Bathroom Storage | Cabivella UK",
    "metaDescription": "Softly rounded reeded bathroom vanity with curved corner radius and tactile wood textures.",
    "dimensionsMm": "900mm to 1200mm single vanity widths",
    "materials": [
      "Curved timber moulding",
      "MR interior carcass",
      "Concealed runners"
    ],
    "finishOptions": [
      "Bleached Natural Oak",
      "Warm Honey Walnut",
      "Satin Ivory"
    ],
    "installationScope": "Supplied with bespoke wall anchors and silicone sealing profiles.",
    "image": "/assets/img/models/real_bathrooms/bath_5000478362_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000478362_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000478362_2.webp",
      "/assets/img/models/real_bathrooms/bath_5000478362_3.webp"
],
    "description": "Curved radius corners and fine vertical reeding combine to soften rectangular bathroom spaces, providing ergonomic safety and visual elegance.",
    "keyFeatures": [
      "Gentle 50mm radius curved corner transitions preventing sharp hip knocks",
      "Continuous cylindrical reeding seamlessly wrapping around curved sides",
      "Premium soft-close internal drawers with removable anti-slip mats",
      "Integrated cutouts for tapware and countertop washbowls"
    ],
  },
  "root-groove-tall-unit": {
    "slug": "root-groove-tall-unit",
    "category": "bathrooms",
    "title": "Root Tall Fluted Storage Column",
    "metaTitle": "Root Tall Fluted Linen Column | Bathroom Tower | Cabivella UK",
    "metaDescription": "Full-height vertical bathroom storage column with coordinating fluted door panels and adjustable interior glass shelving.",
    "dimensionsMm": "400mm width, 1750mm height, 350mm depth",
    "materials": [
      "Grooved timber front",
      "Moisture-sealed carcass",
      "Concealed clip hinges"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Matt Basalt",
      "Parchment"
    ],
    "installationScope": "Includes heavy-duty anti-tip wall brackets.",
    "image": "/assets/img/models/real_bathrooms/bath_5000465933_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000465933_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000465933_2.webp",
      "/assets/img/models/real_bathrooms/bath_5000465933_3.webp"
],
    "description": "The perfect vertical accompaniment to fluted vanities. Conceals spare towels, skincare collections, and household essentials in an elegant tall silhouette.",
    "keyFeatures": [
      "Full-height 1750mm storage column with 5 internal compartments",
      "Reversible soft-closing door with 110-degree opening angle",
      "Matching fluted facade ensuring complete room collection continuity",
      "Adjustable 8mm safety glass shelves with edge-polished bevels"
    ],
  },
  "integra-square-tower": {
    "slug": "integra-square-tower",
    "category": "bathrooms",
    "title": "Integra Square Modular Bathroom Tower",
    "metaTitle": "Integra Square Bathroom Tower | Modular Linen Storage | Cabivella UK",
    "metaDescription": "Clean-lined square modular bathroom tower with open display niche and dual concealed soft-close cabinets.",
    "dimensionsMm": "450mm width, 1650mm height, 380mm depth",
    "materials": [
      "18mm moisture-resistant timber",
      "Stainless steel internal hinges",
      "Tempered glass"
    ],
    "finishOptions": [
      "Satin White",
      "Nordic Ash",
      "Charcoal Slate",
      "Taupe"
    ],
    "installationScope": "Factory pre-assembled with multi-point wall securing fittings.",
    "image": "/assets/img/models/real_bathrooms/bath_5000252445_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000252445_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000252445_2.webp",
      "/assets/img/models/real_bathrooms/bath_5000252445_3.webp"
],
    "description": "Equipped with an open central timber niche for perfume and rolled guest towels, flanked by closed cupboards top and bottom.",
    "keyFeatures": [
      "Open central display niche illuminated with warm micro-spot LED",
      "Dual push-to-open flush doors for discreet storage",
      "Lower laundry drop chute or basket integration option",
      "Sealed against 100% relative humidity conditions"
    ],
  },
  "tall-larder-cupboards": {
    "slug": "tall-larder-cupboards",
    "category": "pantry-larder",
    "title": "Tall Larder & Pantry Cupboards",
    "metaTitle": "Tall Larder & Pantry Cupboards | Made-to-Measure Kitchen Storage | Cabivella UK",
    "metaDescription": "Double-door and single-door pantry cupboards with solid oak door-mounted spice racks, internal drawers, and cold marble shelf options.",
    "dimensionsMm": "Widths from 600mm single to 1200mm double armoire; heights up to 2400mm",
    "materials": [
      "Solid oak internal drawers & door racks",
      "Moisture-resistant carcass timber",
      "170-degree wide-angle soft-close hinges"
    ],
    "finishOptions": [
      "Heritage Sage Green",
      "Oxford Navy",
      "Parchment Cream",
      "Smoked Oak exterior"
    ],
    "installationScope": "Delivered rigid with adjustable heavy-load levelling feet and top cornice mouldings.",
    "image": "/assets/img/models/tall-larder-cupboards.webp",
    "gallery": [
      "/assets/img/models/tall-larder-cupboards.webp",
      "/assets/img/models/corner-pantry-storage.webp"
    ],
    "description": "The quintessential culinary larder. Deep dovetail drawers glide forward effortlessly, while door-mounted solid oak racks display spices at eye level.",
    "keyFeatures": [
      "Solid timber door-mounted spice and jar racks with brass retaining rails",
      "Full-depth lower pantry pull-out drawers with 50kg dynamic load ratings",
      "Optional 30mm cold Italian Carrara marble pastry shelf insert",
      "Concealed automated magnetic door-switch micro-LED internal illumination"
    ]
  },
  "corner-pantry-storage": {
    "slug": "corner-pantry-storage",
    "category": "pantry-larder",
    "title": "Corner Pantry Optimiser Cupboards",
    "metaTitle": "Corner Pantry & Blind Corner Units | Smart Kitchen Storage | Cabivella UK",
    "metaDescription": "Intelligent articulated corner pantry cupboards with twin articulated swing-out shelves and full-extension blind corner mechanisms.",
    "dimensionsMm": "900x900mm L-shaped corner or 1000\u20131200mm blind corner configurations",
    "materials": [
      "Articulated steel swing-out trays with non-slip bases",
      "Heavy-gauge pivot arms",
      "18mm structural carcass"
    ],
    "finishOptions": [
      "Anthracite & Chrome baskets",
      "Champagne & Timber trays",
      "Classic Silver Wire"
    ],
    "installationScope": "Mechanism factory pre-installed and calibrated within carcass prior to delivery.",
    "image": "/assets/img/models/corner-pantry-storage.webp",
    "gallery": [
      "/assets/img/models/corner-pantry-storage.webp",
      "/assets/img/models/tall-larder-cupboards.webp"
    ],
    "description": "Eliminate dark, inaccessible corner voids. Smooth articulated trays glide completely clear of the cabinet opening, bringing deep cookware forward.",
    "keyFeatures": [
      "German-engineered twin articulated trays carrying up to 25kg per tier",
      "Non-slip textured surface preventing jars and tins from sliding during movement",
      "Soft-close controlled self-retracting damping action",
      "Full height corner tall units or under-counter corner base implementations"
    ]
  },
  "tandem-tall-larder": {
    "slug": "tandem-tall-larder",
    "category": "pantry-larder",
    "title": "Tandem Dual-Access Larder Tower",
    "metaTitle": "Tandem Dual-Access Larder Tower | Kitchen Pantry | Cabivella UK",
    "metaDescription": "Intelligent tandem larder tower where opening the door automatically pulls rear shelves forward for panoramic visibility.",
    "dimensionsMm": "600mm width, 1950mm\u20132300mm height, 580mm depth",
    "materials": [
      "Solid oak tray fronts",
      "Heavy steel carriage frame",
      "Damped slide runners"
    ],
    "finishOptions": [
      "Natural Oiled Oak",
      "Dark Walnut Interior",
      "Platinum Silver Trays"
    ],
    "installationScope": "Factory calibrated carriage frame for effortless motion.",
    "image": "/assets/img/models/tall-larder-cupboards.webp",
    "gallery": [
      "/assets/img/models/tall-larder-cupboards.webp",
      "/assets/img/models/pullout-larder-tower.webp"
    ],
    "description": "Ingenious tandem kinematics. Opening the door smoothly brings back shelves towards you while door shelves swing wide for comprehensive access.",
    "keyFeatures": [
      "Synchronous split-shelf mechanism delivering rear items into immediate reach",
      "Door-mounted shelves holding daily essentials and condiments",
      "Heavy-duty powder-coated steel chassis tested to 100kg total capacity",
      "Full soft-close damping on both opening and closing cycles"
    ]
  },
  "chefs-double-armoire": {
    "slug": "chefs-double-armoire",
    "category": "pantry-larder",
    "title": "Chef's Double-Door Culinary Armoire",
    "metaTitle": "Chef's Double Larder Armoire | Luxury Pantries | Cabivella UK",
    "metaDescription": "Grand 120cm double-door freestanding or integrated pantry armoire with solid timber internal fittings, bread drawers, and marble slab.",
    "dimensionsMm": "1200mm width, 2200mm height, 650mm depth",
    "materials": [
      "Solid European ash stiles",
      "Dovetailed oak interior drawers",
      "Carrara marble shelf"
    ],
    "finishOptions": [
      "Heritage Sage",
      "Deep Oxford Navy",
      "Chalk White",
      "Satin Pumice"
    ],
    "installationScope": "Delivered in two modular sections for simple residential access.",
    "image": "/assets/img/models/chefs-double-larder.webp",
    "gallery": [
      "/assets/img/models/chefs-double-larder.webp",
      "/assets/img/models/tall-larder-cupboards.webp"
    ],
    "description": "The crown jewel of traditional culinary storage. Double doors open 170 degrees to reveal solid oak drawers, bottle racks, and a cold stone work surface.",
    "keyFeatures": [
      "Wide 1200mm double-door format providing full panoramic workspace access",
      "Internal 30mm cold stone pastry shelf for prep and dough handling",
      "Four dovetailed solid oak internal drawers with engraved custom labels",
      "Concealed LED strip illumination triggered automatically by door sensors"
    ]
  },
  "lemans-corner-swivel": {
    "slug": "lemans-corner-swivel",
    "category": "pantry-larder",
    "title": "LeMans Articulated Corner Optimiser",
    "metaTitle": "LeMans Corner Optimiser | Articulated Blind Corner | Cabivella UK",
    "metaDescription": "Ergonomic curved swivel shelves that glide smoothly out of 90cm to 120cm blind corner cabinets with zero effort.",
    "dimensionsMm": "900mm, 1000mm, 1200mm blind corner carcass sizes",
    "materials": [
      "Articulated steel armatures",
      "Solid timber bordered shelves",
      "Soft-close guides"
    ],
    "finishOptions": [
      "Anthracite & Oak",
      "Bright Chrome & White",
      "Champagne"
    ],
    "installationScope": "Factory mounted and balanced.",
    "image": "/assets/img/models/corner-pantry-storage.webp",
    "gallery": [
      "/assets/img/models/corner-pantry-storage.webp",
      "/assets/img/models/tall-larder-cupboards.webp"
    ],
    "description": "Gracefully curved trays swing completely out into the kitchen room space, bringing pots, pans, and heavy kitchen appliances within effortless reach.",
    "keyFeatures": [
      "Independently moving curved trays with 25kg individual capacity",
      "Trays extend 100% outside the cabinet carcass for top-down visibility",
      "Height-adjustable shelf positioning adapting to stockpots and tall mixers",
      "Controlled soft-close retraction preventing items from tipping"
    ]
  },
  "carousel-blind-corner": {
    "slug": "carousel-blind-corner",
    "category": "pantry-larder",
    "title": "Full-Extension Carousel Blind Corner",
    "metaTitle": "Carousel Blind Corner Pantry | Smart Corner Units | Cabivella UK",
    "metaDescription": "360-degree rotating corner carousel storage unit with sturdy metal railings and non-slip surfaces.",
    "dimensionsMm": "900x900mm L-corner or 1050mm blind base unit",
    "materials": [
      "Heavy-gauge central steel pole",
      "Rigid composite trays",
      "Aluminium railing"
    ],
    "finishOptions": [
      "Chrome Rail with White Base",
      "Anthracite Wire with Grey Base"
    ],
    "installationScope": "Supplied fully installed inside rigid corner carcass.",
    "image": "/assets/img/models/corner-pantry-storage.webp",
    "gallery": [
      "/assets/img/models/corner-pantry-storage.webp",
      "/assets/img/models/chefs-double-larder.webp"
    ],
    "description": "Smooth 360-degree rotary action ensures every centimetre of corner volume is accessible in tight L-shaped kitchen designs.",
    "keyFeatures": [
      "Smooth 360-degree rotary central bearing mechanism",
      "Raised 50mm perimeter rails keeping tins and spice jars securely on trays",
      "Height-adjustable trays adapting to seasonal baking supplies",
      "Durable easy-clean surface resistant to oil and liquid stains"
    ]
  },
  "pullout-larder-tower": {
    "slug": "pullout-larder-tower",
    "category": "pantry-larder",
    "title": "Pull-Out Spice & Bottle Larder Tower",
    "metaTitle": "Pull-Out Spice Larder Tower | Slim Tall Storage | Cabivella UK",
    "metaDescription": "Slim 300mm to 400mm pull-out larder tower with central steel spine and dual-sided access to oils, vinegar, and dry goods.",
    "dimensionsMm": "300mm\u2013400mm width, 1800mm\u20132200mm height, 580mm depth",
    "materials": [
      "Heavy-duty central runner frame",
      "Timber or wire basket trays",
      "Top stabiliser guide"
    ],
    "finishOptions": [
      "Dark Anthracite",
      "Polished Chrome",
      "Champagne Gold"
    ],
    "installationScope": "Supplied rigid with integrated anti-tip suspension.",
    "image": "/assets/img/models/pullout-larder-tower.webp",
    "gallery": [
      "/assets/img/models/pullout-larder-tower.webp",
      "/assets/img/models/tall-larder-cupboards.webp"
    ],
    "description": "Glides out in a single smooth motion to present bottles, condiments, and preserved provisions from either side with zero blind spots.",
    "keyFeatures": [
      "Slim 300mm footprint providing 5 levels of high-capacity dry storage",
      "Dual-sided access allowing quick reach during high-heat cooking sessions",
      "Heavy-load bottom runner with soft-close damping tested to 80kg",
      "Adjustable clip-on basket trays with solid acoustic bases"
    ]
  },
  "walkin-step-pantry": {
    "slug": "walkin-step-pantry",
    "category": "pantry-larder",
    "title": "Walk-In Step-Through Pantry Suite",
    "metaTitle": "Walk-In Step-Through Pantry Suite | Custom Joinery | Cabivella UK",
    "metaDescription": "Architectural step-in corner pantry room disguised behind kitchen cabinetry facades with ceiling-height open shelving.",
    "dimensionsMm": "Made-to-measure walk-in room dimensions (minimum 1200x1200mm)",
    "materials": [
      "Solid timber uprights",
      "Adjustable open shelving",
      "Integrated task lighting"
    ],
    "finishOptions": [
      "Natural Oiled Pine",
      "Heritage Chalk",
      "Smoked Oak",
      "Parchment"
    ],
    "installationScope": "Modular flat-pack delivery with on-site joinery assembly brackets.",
    "image": "/assets/img/models/tall-larder-cupboards.webp",
    "gallery": [
      "/assets/img/models/tall-larder-cupboards.webp",
      "/assets/img/models/chefs-double-larder.webp"
    ],
    "description": "Seamlessly integrated behind matching cabinetry frontals, opening up into a dedicated floor-to-ceiling walk-in pantry chamber.",
    "keyFeatures": [
      "Disguised cabinet front door matching adjacent kitchen runs perfectly",
      "Floor-to-ceiling wrap-around open shelving for bulk dry store visibility",
      "Dedicated countertop for high-draw appliances (slow cooker, dehydrator)",
      "Automated motion-sensor overhead warm LED illumination"
    ]
  },
  "pocket-door-coffee-stations": {
    "slug": "pocket-door-coffee-stations",
    "category": "coffee-stations",
    "title": "Pocket-Door Concealed Coffee Stations",
    "metaTitle": "Pocket-Door Coffee Stations | Concealed Breakfast Cabinets | Cabivella UK",
    "metaDescription": "Luxury pocket-door breakfast and barista stations. Doors slide back into carcass cavities during use and close flush to maintain clean lines.",
    "dimensionsMm": "Widths from 1000mm to 1600mm; standard 2150mm height, 650mm depth",
    "materials": [
      "Heavy-duty scissor pocket-door tracking gear",
      "Solid quartz or granite prep slab",
      "Moisture-resistant carcass with timber veneer"
    ],
    "finishOptions": [
      "Smoked Black Walnut & Brass",
      "Chalk White & Natural Oak",
      "Basalt Grey & Bronze accents"
    ],
    "installationScope": "Pocket mechanism pre-installed, squared, and calibrated prior to delivery.",
    "image": "/assets/img/models/pocket-door-coffee-stations.webp",
    "gallery": [
      "/assets/img/models/pocket-door-coffee-stations.webp",
      "/assets/img/models/open-shelf-coffee-cabinets.webp"
    ],
    "description": "The pinnacle of domestic luxury and serenity. Pocket doors slide effortlessly back into side carcass cavities during morning routines, then close completely flush.",
    "keyFeatures": [
      "Precision German scissor pocket-door gear eliminating floor guide channels",
      "Reinforced prep counter supporting commercial dual-boiler espresso machines",
      "Concealed rear cable raceways with integrated UK plug sockets and USB-C ports",
      "Integrated extraction vent baffle dissipating steam from espresso wands"
    ]
  },
  "open-shelf-coffee-cabinets": {
    "slug": "open-shelf-coffee-cabinets",
    "category": "coffee-stations",
    "title": "Open-Shelf Artisan Coffee Cabinets",
    "metaTitle": "Open-Shelf Coffee Cabinets | Artisan Barista Storage | Cabivella UK",
    "metaDescription": "Architectural open-shelf coffee and beverage cabinetry featuring fluted glass display, integrated LED bar lighting, and timber prep credenzas.",
    "dimensionsMm": "900mm to 1500mm widths, tailored heights up to 2300mm",
    "materials": [
      "Solid European oak or ash shelving",
      "Reeded/fluted toughened safety glass",
      "Anodised aluminium warm-LED light profiles"
    ],
    "finishOptions": [
      "Natural Oiled Oak",
      "Deep Walnut",
      "Matt Anthracite frame with brass accents"
    ],
    "installationScope": "Pre-assembled base credenza with modular upper architectural shelving system.",
    "image": "/assets/img/models/open-shelf-coffee-cabinets.webp",
    "gallery": [
      "/assets/img/models/open-shelf-coffee-cabinets.webp",
      "/assets/img/models/pocket-door-coffee-stations.webp"
    ],
    "description": "For homeowners who celebrate culinary apparatus as domestic art. Open display shelving showcases artisan ceramics, drippers, and glassware above an ergonomic credenza.",
    "keyFeatures": [
      "Integrated continuous LED light profile with dimmable warm 2700K Kelvin glow",
      "Fluted timber backboard providing acoustic dampening against grinder vibrations",
      "Lower soft-close storage drawers engineered for coffee beans, syrups, and filter papers",
      "Stain-resistant nano-treated timber worktop impervious to espresso spills"
    ]
  },
  "hawa-retractable-station": {
    "slug": "hawa-retractable-station",
    "category": "coffee-stations",
    "title": "Hawa Retractable Bi-Fold Beverage Station",
    "metaTitle": "Hawa Retractable Beverage Station | Luxury Coffee Bar | Cabivella UK",
    "metaDescription": "High-specification bi-folding retractable pocket door coffee station with commercial-grade Swiss hardware and quartz prep counter.",
    "dimensionsMm": "1200mm\u20131800mm wide, 2200mm high, 680mm deep",
    "materials": [
      "Swiss Hawa Concepta hardware",
      "Composite quartz worktop",
      "Veneered timber interior"
    ],
    "finishOptions": [
      "Espresso Oak & Brushed Brass",
      "Warm Cashmere & Walnut",
      "Oxford Blue"
    ],
    "installationScope": "Factory pre-assembled and calibrated pocket tracks.",
    "image": "/assets/img/models/pocket-door-coffee-stations.webp",
    "gallery": [
      "/assets/img/models/pocket-door-coffee-stations.webp",
      "/assets/img/models/illuminated-beverage-stations.webp"
    ],
    "description": "Ultra-smooth Swiss bi-folding pocket technology enables wide panoramic openings that glide into side recesses with zero protruding doors.",
    "keyFeatures": [
      "Certified Swiss pocket tracking mechanism supporting 50kg door panels",
      "Dedicated heat and steam dissipation duct behind upper cabinet facade",
      "Integrated 4-gang UK socket rail with concealed surge protection",
      "Dual pull-out preparation trays for coffee bean scales and tampers"
    ]
  },
  "ervin-breakfast-bar": {
    "slug": "ervin-breakfast-bar",
    "category": "coffee-stations",
    "title": "Ervin Artisan Breakfast & Espresso Credenza",
    "metaTitle": "Ervin Breakfast Credenza | Coffee Bar Cabinetry | Cabivella UK",
    "metaDescription": "Free-standing or built-in artisan breakfast credenza featuring reeded lower storage, quartz slab, and open ceramic display shelving.",
    "dimensionsMm": "1100mm\u20131500mm width, 900mm base height (2100mm with upper hutch)",
    "materials": [
      "Solid ash frame",
      "Fluted glass doors",
      "Natural quartz counter"
    ],
    "finishOptions": [
      "Natural Ash & Calacatta",
      "Smoked Walnut",
      "Satin Sage"
    ],
    "installationScope": "Pre-assembled base and hutch with connecting fittings.",
    "image": "/assets/img/models/open-shelf-coffee-cabinets.webp",
    "gallery": [
      "/assets/img/models/open-shelf-coffee-cabinets.webp",
      "/assets/img/models/breakfast-armoire-coffee-stations.webp"
    ],
    "description": "Combines a solid quartz prep credenza with open micro-ribbed shelving and fluted glass display doors for pour-over carafes and artisan cups.",
    "keyFeatures": [
      "Stain-resistant quartz worktop impervious to acidic citrus and espresso drips",
      "Fluted glass wall cabinets concealing coffee beans and morning cereals",
      "Lower drawers fitted with custom dividers for espresso accessories",
      "Integrated warm LED under-shelf downlighting"
    ]
  },
  "breakfast-armoire-coffee-stations": {
    "slug": "breakfast-armoire-coffee-stations",
    "category": "coffee-stations",
    "title": "Grand Breakfast Armoire & Espresso Bar",
    "metaTitle": "Grand Breakfast Armoire | Luxury Coffee Stations | Cabivella UK",
    "metaDescription": "Traditional double-door breakfast armoire housing toaster, kettle, and barista machine behind five-piece classic Shaker doors.",
    "dimensionsMm": "1200mm width, 2200mm height, 650mm depth",
    "materials": [
      "European ash stiles",
      "Dovetailed timber internal drawers",
      "Polished stone counter"
    ],
    "finishOptions": [
      "Heritage Sage Green",
      "Oxford Navy",
      "Chalk White",
      "Warm Pumice"
    ],
    "installationScope": "Delivered rigid with adjustable feet and cornice fittings.",
    "image": "/assets/img/models/breakfast-armoire-coffee-stations.webp",
    "gallery": [
      "/assets/img/models/breakfast-armoire-coffee-stations.webp",
      "/assets/img/models/pocket-door-coffee-stations.webp"
    ],
    "description": "Transforms busy morning breakfast routines into a tranquil moment. Open the double doors to reveal a complete breakfast and barista bar.",
    "keyFeatures": [
      "Full 1200mm wide stone preparation deck accommodating toaster and espresso unit",
      "Internal 4-gang electric point with automatic safety master cut-off when doors close",
      "Dovetailed lower timber drawers for bread storage and coffee pods",
      "Door-mounted timber racks for mugs, preserves, and artisan honey jars"
    ]
  },
  "illuminated-beverage-stations": {
    "slug": "illuminated-beverage-stations",
    "category": "coffee-stations",
    "title": "Illuminated Barista Suite with Quartz Surface",
    "metaTitle": "Illuminated Barista Suite | Modern Coffee Cabinets | Cabivella UK",
    "metaDescription": "Contemporary illuminated beverage suite featuring continuous vertical LED profiles, mirror splashback, and integrated wine cooler housing.",
    "dimensionsMm": "1200mm\u20132000mm made-to-measure widths",
    "materials": [
      "Bronze mirror glass splashback",
      "Quartz stone worktop",
      "Velvet-touch lacquer"
    ],
    "finishOptions": [
      "Matt Carbon & Bronze",
      "Warm Taupe & Brass",
      "Pure White"
    ],
    "installationScope": "Pre-assembled cabinetry modules with plug-and-play lighting driver.",
    "image": "/assets/img/models/illuminated-beverage-stations.webp",
    "gallery": [
      "/assets/img/models/illuminated-beverage-stations.webp",
      "/assets/img/models/pocket-door-coffee-stations.webp"
    ],
    "description": "An evening cocktail bar and morning coffee retreat in one. Bronze mirror splashbacks amplify warm LED illumination above a monolithic quartz deck.",
    "keyFeatures": [
      "Antiqued bronze mirror splashback reflecting ambient room lighting",
      "Integrated recess prepared for under-counter wine climate cabinet",
      "Solid quartz worktop with integrated drainer grooves for espresso rinsing",
      "Smart touch-dimmable LED lighting with circadian temperature tuning"
    ]
  },
  "alcove-cupboards": {
    "slug": "alcove-cupboards",
    "category": "fitted-storage",
    "title": "Victorian Alcove Bookcases & Cabinets",
    "metaTitle": "Bespoke Alcove Cupboards & Bookcases | Period Joinery | Cabivella UK",
    "metaDescription": "Precision made-to-measure alcove cupboards and open bookcases designed for British Victorian and Edwardian chimney breasts.",
    "dimensionsMm": "Bespoke widths from 800mm to 1400mm per alcove; heights up to 3000mm ceiling",
    "materials": [
      "High-density MR-MDF core",
      "Solid timber face frames & mouldings",
      "Concealed or traditional butt hinges"
    ],
    "finishOptions": [
      "Heritage Chalk",
      "Satin Downpipe Grey",
      "Parchment Cream",
      "Deep Oxford Navy"
    ],
    "installationScope": "Supplied with oversize scribe fillets for on-site scribing to historic plaster walls.",
    "image": "/assets/img/models/alcove-cupboards.webp",
    "gallery": [
      "/assets/img/models/alcove-cupboards.webp",
      "/assets/img/models/utility-room-cabinets.webp"
    ],
    "description": "The quintessential British living room solution. Symmetrical cabinetry flanking the fireplace chimney breast with tailored bookcases above.",
    "keyFeatures": [
      "Included 50mm scribe fillets allowing seamless scribing to out-of-plumb historic walls",
      "Lower cupboards with cable grommets for AV routers, gaming consoles, and media boxes",
      "Traditional panelled door fronts with soft-close cushioning",
      "Load-bearing 25mm thick bookcase shelves preventing book sagging over time"
    ]
  },
  "utility-room-cabinets": {
    "slug": "utility-room-cabinets",
    "category": "fitted-storage",
    "title": "Made-to-Measure Utility & Laundry Runs",
    "metaTitle": "Bespoke Utility Room Cabinets | Laundry Storage | Cabivella UK",
    "metaDescription": "Durable moisture-resistant utility room cabinetry with stacked washer-dryer housings, pull-out laundry hampers, and boot room benches.",
    "dimensionsMm": "Made-to-measure linear runs, typical 650mm appliance depth",
    "materials": [
      "Water-resistant carcass boards",
      "Hardwearing polyurethane lacquer",
      "Heavy-duty 50kg drawer slides"
    ],
    "finishOptions": [
      "Highland Green",
      "Warm Stone",
      "Nordic White",
      "Muted Basalt"
    ],
    "installationScope": "Modular rigid units with service voids for plumbing, waste pipes, and dryer venting.",
    "image": "/assets/img/models/utility-room-cabinets.webp",
    "gallery": [
      "/assets/img/models/utility-room-cabinets.webp",
      "/assets/img/models/alcove-cupboards.webp"
    ],
    "description": "Bring order to busy family back-door entries. Purpose-built cabinetry housing laundry appliances at ergonomic working heights.",
    "keyFeatures": [
      "Reinforced tower carcass designed for stacked or side-by-side washing machines",
      "Integrated pull-out multi-compartment laundry sorting hampers",
      "Full-height broom and vacuum cleaner storage cupboard with cordless charging point",
      "Hardwearing surfaces resistant to muddy boots, pet paws, and domestic detergents"
    ]
  },
  "bespoke-alcove-units": {
    "slug": "bespoke-alcove-units",
    "category": "fitted-storage",
    "title": "Tailored Chimney Alcove Cabinetry",
    "metaTitle": "Tailored Chimney Alcove Cabinetry | Fitted Furniture | Cabivella UK",
    "metaDescription": "Precision-crafted bespoke chimney alcove cabinetry pairing lower panelled storage cupboards with floating floating display shelves.",
    "dimensionsMm": "Custom width and height matched to room plaster",
    "materials": [
      "Structural MR-MDF",
      "Solid hardwood face trims",
      "Soft-close motion hinges"
    ],
    "finishOptions": [
      "Slate Grey",
      "Warm Alabaster",
      "Heritage Green",
      "Natural Wood Tops"
    ],
    "installationScope": "Includes adjustable wall scribing battens.",
    "image": "/assets/img/models/alcove-cupboards.webp",
    "gallery": [
      "/assets/img/models/alcove-cupboards.webp",
      "/assets/img/models/utility-room-cabinets.webp"
    ],
    "description": "Tailored to the exact millimeter of non-standard chimney alcoves, ensuring harmonious symmetry on either side of the fireplace hearth.",
    "keyFeatures": [
      "Precision cut for flush integration between chimney breast and party wall",
      "Lower media cabinet with concealed cable management channels",
      "Sturdy 30mm thick display shelves designed for heavy hardback libraries",
      "Factory-primed or satin spray-lacquered in curated heritage palettes"
    ]
  },
  "bosco-utility-cabinet": {
    "slug": "bosco-utility-cabinet",
    "category": "fitted-storage",
    "title": "Bosco Full-Height Utility & Appliance Cabinet",
    "metaTitle": "Bosco Full-Height Utility Cabinet | Laundry Cupboards | Cabivella UK",
    "metaDescription": "Full-height tall utility cabinet housing ironing board, laundry hampers, Dyson vacuum docks, and cleaning essentials in one tall unit.",
    "dimensionsMm": "800mm\u20131000mm width, 2200mm height, 650mm depth",
    "materials": [
      "Moisture-resistant core",
      "Ventilated timber shelves",
      "Heavy-gauge hinges"
    ],
    "finishOptions": [
      "Muted Sage",
      "Highland Green",
      "Warm Stone",
      "Chalk"
    ],
    "installationScope": "Pre-assembled carcass with adjustable feet.",
    "image": "/assets/img/models/utility-room-cabinets.webp",
    "gallery": [
      "/assets/img/models/utility-room-cabinets.webp",
      "/assets/img/models/boot-room-cabinetry.webp"
    ],
    "description": "The ultimate organisational workhorse for laundry and boot rooms. Dedicated compartments keep ironing boards, vacuum cleaners, and mops neatly concealed.",
    "keyFeatures": [
      "Dedicated vertical slot for tall ironing boards and folding stepladders",
      "Integrated power socket outlet for internal cordless vacuum docking",
      "Two ventilated pull-out wire hampers for whites and colours",
      "Adjustable upper chemical and detergent shelves out of reach of children"
    ]
  },
  "boot-room-cabinetry": {
    "slug": "boot-room-cabinetry",
    "category": "fitted-storage",
    "title": "Country Estate Boot Room & Mudroom Suite",
    "metaTitle": "Boot Room & Mudroom Cabinetry | Country Joinery | Cabivella UK",
    "metaDescription": "Bespoke country boot room joinery featuring solid oak seating benches, open coat hooks, shoe pigeonholes, and overhead basket storage.",
    "dimensionsMm": "Made-to-measure runs from 1500mm to 4000mm",
    "materials": [
      "Solid European oak benchtop",
      "Heavy coat hooks in aged brass",
      "Tough enamel lacquer"
    ],
    "finishOptions": [
      "Oxford Navy & Oak",
      "Sage Green & Oak",
      "Deep Charcoal"
    ],
    "installationScope": "Modular delivery with integrated tongue-and-groove wall panelling.",
    "image": "/assets/img/models/boot-room-cabinetry.webp",
    "gallery": [
      "/assets/img/models/boot-room-cabinetry.webp",
      "/assets/img/models/utility-room-cabinets.webp"
    ],
    "description": "Built to endure country lifestyle demands. A solid oak bench seat provides comfort for unlacing muddy boots, backed by tongue-and-groove timber panelling.",
    "keyFeatures": [
      "40mm solid European oak bench surface with waterproof oiled seal",
      "Under-bench open pigeonholes for quick wellington and boot storage",
      "Aged brass double coat hooks securely fastened to timber backboard",
      "Upper enclosed storage cupboards for seasonal hats, scarves, and dog gear"
    ]
  },
  "walkin-dressing-suite": {
    "slug": "walkin-dressing-suite",
    "category": "fitted-storage",
    "title": "Architectural Walk-In Dressing Suite",
    "metaTitle": "Walk-In Dressing Suite | Bespoke Wardrobes | Cabivella UK",
    "metaDescription": "Master walk-in wardrobe and dressing room cabinetry featuring open hanging runs, glass-fronted watch drawers, and LED-lit shoe galleries.",
    "dimensionsMm": "Made-to-measure room layouts up to 3000mm height",
    "materials": [
      "Linen-textured carcass linings",
      "Solid timber hanging rails",
      "Smoked glass drawer fronts"
    ],
    "finishOptions": [
      "Smoked Bronze Oak",
      "Natural Linen & Cashmere",
      "Rich Walnut"
    ],
    "installationScope": "Modular precision-milled delivery with laser alignment templates.",
    "image": "/assets/img/models/dressing-room-wardrobes.webp",
    "gallery": [
      "/assets/img/models/dressing-room-wardrobes.webp",
      "/assets/img/models/alcove-cupboards.webp"
    ],
    "description": "Bespoke dressing sanctuary crafted around your personal wardrobe. Dual-level hanging rails, velvet jewellery dividers, and angled illuminated shoe displays.",
    "keyFeatures": [
      "Integrated motion-sensor LED lighting channels along full vertical jambs",
      "Glass-topped central island with velvet-lined watch and jewellery displays",
      "Full-height double hanging runs tailored for evening gowns and long overcoats",
      "Linen-textured scratch-resistant internal carcass surfaces"
    ]
  },
  "panelled-wardrobe-run": {
    "slug": "panelled-wardrobe-run",
    "category": "fitted-storage",
    "title": "Full-Height Floor-to-Ceiling Panelled Wardrobes",
    "metaTitle": "Full-Height Fitted Wardrobes | Panelled Bedroom Joinery | Cabivella UK",
    "metaDescription": "Architectural fitted bedroom wardrobes with traditional panelled doors, decorative cornice mouldings, and bespoke internal organisation.",
    "dimensionsMm": "Made-to-measure spans, heights up to 2800mm ceiling runs",
    "materials": [
      "Moisture-resistant MR core",
      "Solid timber stiles",
      "Full soft-close hardware"
    ],
    "finishOptions": [
      "Heritage Off-White",
      "French Grey",
      "Deep Indigo",
      "Muted Taupe"
    ],
    "installationScope": "Delivered rigid with top scribing fascia and plinth mouldings.",
    "image": "/assets/img/models/dressing-room-wardrobes.webp",
    "gallery": [
      "/assets/img/models/dressing-room-wardrobes.webp",
      "/assets/img/models/alcove-cupboards.webp"
    ],
    "description": "Seamlessly integrates bedroom storage into room walls. Decorative architraves and plinths ensure the wardrobes appear as original architectural masonry.",
    "keyFeatures": [
      "Ceiling-height scribed cornice mouldings completing continuous architectural lines",
      "Custom internal configuration of solid timber drawers, shoe trays, and hanging rails",
      "Integrated soft-close damping on both doors and heavy interior drawers",
      "Solid brass or aged bronze unlacquered knobs and cup pull handles"
    ]
  },
  "shaker-replacement-doors": {
    "slug": "shaker-replacement-doors",
    "category": "kitchen-doors",
    "title": "Solid Hardwood Shaker Replacement Fronts",
    "metaTitle": "Shaker Replacement Kitchen Doors | Made-to-Measure Fronts | Cabivella UK",
    "metaDescription": "Upgrade existing kitchen carcasses with custom-sized solid hardwood and MR-MDF Shaker replacement doors, factory spray-finished in heritage tones.",
    "dimensionsMm": "Made-to-measure to exact millimetre dimensions; standard 22mm thickness",
    "materials": [
      "Solid European ash outer framing",
      "High-density moisture-resistant core panel",
      "Multi-coat baked polyurethane lacquer"
    ],
    "finishOptions": [
      "Heritage Sage Green",
      "Oxford Navy",
      "Chalk White",
      "Satin Pumice",
      "Raw Ready-to-Paint"
    ],
    "installationScope": "Supplied pre-drilled for your existing hinge centres (standard 35mm cup) or un-drilled for custom hardware.",
    "image": "/assets/img/models/shaker-replacement-doors.webp",
    "gallery": [
      "/assets/img/models/shaker-replacement-doors.webp",
      "/assets/img/models/handleless-cabinet-fronts.webp"
    ],
    "description": "The sustainable, cost-effective kitchen transformation. Replace worn laminate doors with precision-milled solid ash Shaker fronts that fit your existing carcasses.",
    "keyFeatures": [
      "Custom hinge-hole boring matched precisely to your existing carcass hinge positions",
      "Substantial 22mm door thickness providing a weighty, luxury tactile experience",
      "Ultra-durable polyurethane enamel factory spray finish resistant to chipping",
      "Matching drawer fronts, end panels, plinths, and cornice profiles supplied to order"
    ]
  },
  "handleless-cabinet-fronts": {
    "slug": "handleless-cabinet-fronts",
    "category": "kitchen-doors",
    "title": "Integrated J-Pull & Shadow Fronts",
    "metaTitle": "Handleless Replacement Doors | J-Pull Cabinet Fronts | Cabivella UK",
    "metaDescription": "Contemporary handleless replacement kitchen doors with integrated J-pull routing or chamfered shadow profiles in matt and gloss finishes.",
    "dimensionsMm": "Made-to-measure to exact millimetre dimensions; 22mm profile thickness",
    "materials": [
      "Deep-routed moisture-resistant structural core",
      "Laser-applied edge sealing",
      "Velvet matt or mirror gloss lacquer"
    ],
    "finishOptions": [
      "Matt Anthracite",
      "Porcelain Warm White",
      "Raw Umber Walnut",
      "Cashmere Neutral"
    ],
    "installationScope": "Pre-drilled to custom hinge measurements; compatible with standard 18mm British carcass specifications.",
    "image": "/assets/img/models/handleless-cabinet-fronts.webp",
    "gallery": [
      "/assets/img/models/handleless-cabinet-fronts.webp",
      "/assets/img/models/shaker-replacement-doors.webp"
    ],
    "description": "Instantly modernize an existing kitchen layout without demolition. Seamless integrated J-pull grooves provide comfortable grip without external hardware.",
    "keyFeatures": [
      "Ergonomically contoured 22mm J-pull profile with smooth finger clearance",
      "Laser-welded edge bands creating an impermeable seal against steam and moisture",
      "Thermal-repairable super-matt surface technology resisting fingerprints and smudges",
      "Available in bespoke heights and widths for non-standard vintage carcasses"
    ]
  },
  "chillingham-timber-shaker": {
    "slug": "chillingham-timber-shaker",
    "category": "kitchen-doors",
    "title": "Chillingham Authentic Hardwood Shaker Fronts",
    "metaTitle": "Chillingham Hardwood Shaker Doors | Replacement Fronts | Cabivella UK",
    "metaDescription": "Authentic 5-piece solid European ash replacement doors with 80mm traditional stiles and mortise-and-tenon craftsmanship.",
    "dimensionsMm": "Custom millimetre sizing, 22mm thickness",
    "materials": [
      "Solid European ash timber",
      "Moisture-sealed core",
      "Catalysed lacquer"
    ],
    "finishOptions": [
      "Cotswold Cream",
      "Deep Forest Green",
      "Charcoal Slate",
      "Raw Timber"
    ],
    "installationScope": "Supplied with optional hinge hole boring to client schedule.",
    "image": "/assets/img/models/shaker-replacement-doors.webp",
    "gallery": [
      "/assets/img/models/shaker-replacement-doors.webp",
      "/assets/img/models/slimline-micro-shaker-fronts.webp"
    ],
    "description": "Substantial 80mm solid ash stiles lend grounded permanence to country homes and historic London townhouses upgrading existing kitchen carcasses.",
    "keyFeatures": [
      "Solid ash framing with authentic mortise-and-tenon corner joints",
      "Substantial 22mm door depth delivering reassuring tactile weight",
      "Multi-coat catalysed satin lacquer resisting kitchen grease and heat",
      "Matching architectural plinths, pilasters, and cornice available"
    ]
  },
  "lea-framed-fronts": {
    "slug": "lea-framed-fronts",
    "category": "kitchen-doors",
    "title": "Lea Architectural Framed Cabinet Doors",
    "metaTitle": "Lea Framed Cabinet Fronts | Replacement Doors | Cabivella UK",
    "metaDescription": "Transitional framed kitchen cabinet fronts featuring a delicate internal chamfer and satin smooth painted finish.",
    "dimensionsMm": "Bespoke dimensions to 1mm tolerance",
    "materials": [
      "Hardwood composite",
      "Moisture-resistant resin core",
      "Multi-stage lacquer"
    ],
    "finishOptions": [
      "Heritage Sage",
      "Oxford Navy",
      "Warm Taupe",
      "Pure White"
    ],
    "installationScope": "Pre-bored for 35mm concealed euro hinges.",
    "image": "/assets/img/models/shaker-replacement-doors.webp",
    "gallery": [
      "/assets/img/models/shaker-replacement-doors.webp",
      "/assets/img/models/handleless-cabinet-fronts.webp"
    ],
    "description": "Combines traditional framing with a modern 45-degree inner chamfer, making cleaning effortless while capturing gentle room light.",
    "keyFeatures": [
      "45-degree chamfered inner rail preventing grime and flour buildup",
      "Custom hinge spacing matching Howdens, Wren, and bespoke carcasses",
      "Tough factory spray lacquer that will never peel or delaminate like vinyl wrap",
      "Available with glazed door frames ready for reeded or fluted glass inserts"
    ]
  },
  "axis-shadow-fronts": {
    "slug": "axis-shadow-fronts",
    "category": "kitchen-doors",
    "title": "Axis Minimal Shadow-Profile Fronts",
    "metaTitle": "Axis Minimal Shadow Fronts | Handleless Doors | Cabivella UK",
    "metaDescription": "Pure flush cabinet fronts with bevelled shadow profile for integrated channel handleless kitchens.",
    "dimensionsMm": "Made-to-measure width and height increments",
    "materials": [
      "18mm or 22mm dense MR-MDF",
      "Laser-applied ABS edge",
      "Anti-fingerprint matt lacquer"
    ],
    "finishOptions": [
      "Super-Matt Basalt",
      "Porcelain Chalk",
      "Smoked Pine",
      "Raw Umber"
    ],
    "installationScope": "Supplied drilled or undrilled per specification.",
    "image": "/assets/img/models/handleless-cabinet-fronts.webp",
    "gallery": [
      "/assets/img/models/handleless-cabinet-fronts.webp",
      "/assets/img/models/shaker-replacement-doors.webp"
    ],
    "description": "Designed for kitchens featuring continuous rail systems, providing flush, monolithic door planes with zero visual clutter.",
    "keyFeatures": [
      "Bevelled 30-degree rear edge profile for ergonomic finger clearance",
      "Zero-glue-line laser edge banding protecting against steam degradation",
      "Anti-fingerprint velvet coating formulation",
      "Available with custom push-catch hardware pre-machining"
    ]
  },
  "vera-silk-slab": {
    "slug": "vera-silk-slab",
    "category": "kitchen-doors",
    "title": "Vera Silk-Touch Lacquered Slab Fronts",
    "metaTitle": "Vera Silk-Touch Slab Doors | Replacement Fronts | Cabivella UK",
    "metaDescription": "Contemporary flat slab replacement kitchen doors in silky matt and soft satin finishes for minimalist kitchens.",
    "dimensionsMm": "Exact millimetre precision custom sizes",
    "materials": [
      "Structural E1 grade core",
      "Silk-touch polyurethane enamel",
      "Sealed back face"
    ],
    "finishOptions": [
      "Warm Putty",
      "Satin Alabaster",
      "Deep Bronze",
      "Graphite"
    ],
    "installationScope": "Factory pre-bored for quick DIY or trade hinge hanging.",
    "image": "/assets/img/models/handleless-cabinet-fronts.webp",
    "gallery": [
      "/assets/img/models/handleless-cabinet-fronts.webp",
      "/assets/img/models/fluted-wave-panels.webp"
    ],
    "description": "Uncomplicated, timeless architectural slabs. Silky soft-touch lacquer creates a tranquil, tactile environment in open-plan spaces.",
    "keyFeatures": [
      "Ultra-flat flat-panel facade with micro-radiused safe edges",
      "Six-stage automated spray application ensuring smooth orange-peel-free finish",
      "Colour-matched backing face ensuring consistent internal cupboard beauty",
      "Custom drawer front sizing for deep pan drawers and internal concealed cutlery"
    ]
  },
  "slimline-micro-shaker-fronts": {
    "slug": "slimline-micro-shaker-fronts",
    "category": "kitchen-doors",
    "title": "Slimline Micro-Shaker Feature Fronts",
    "metaTitle": "Slimline Micro-Shaker Fronts | Modern Shaker Doors | Cabivella UK",
    "metaDescription": "Contemporary 15mm slim-frame Shaker replacement cabinet doors for modern British architectural kitchen renovations.",
    "dimensionsMm": "Custom height and width to 1mm tolerance",
    "materials": [
      "Precision milled composite",
      "Solid timber perimeter",
      "Matt satin lacquer"
    ],
    "finishOptions": [
      "Moss Green",
      "Oatmeal",
      "Charcoal Noir",
      "Oiled Oak"
    ],
    "installationScope": "Supplied ready for hardware installation with precision boreholes.",
    "image": "/assets/img/models/slimline-micro-shaker-fronts.webp",
    "gallery": [
      "/assets/img/models/slimline-micro-shaker-fronts.webp",
      "/assets/img/models/shaker-replacement-doors.webp"
    ],
    "description": "Slender 15mm outer borders strike the ideal balance between heritage warmth and Scandinavian minimalism.",
    "keyFeatures": [
      "Ultra-narrow 15mm perimeter frame delivering a sleek architectural outline",
      "Rigid solid core preventing warping across tall larder doors",
      "Factory-drilled hinge cups positioned to your supplied carcass plan",
      "Durable satin finish resistant to cleaning chemicals and finger grease"
    ]
  },
  "fluted-wave-panels": {
    "slug": "fluted-wave-panels",
    "category": "kitchen-doors",
    "title": "Fluted Wave Acoustic Feature Panels",
    "metaTitle": "Fluted Wave Kitchen Fronts | Reeded Cabinet Panels | Cabivella UK",
    "metaDescription": "Reeded and fluted replacement cabinet doors and kitchen island cladding panels for striking architectural texture.",
    "dimensionsMm": "Made-to-measure doors and full 2400x1200mm cladding sheets",
    "materials": [
      "Multi-axis CNC routed oak veneer",
      "Moisture-sealed substrate",
      "Protective matt oil"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Satin Black Wave",
      "Chalk White"
    ],
    "installationScope": "Supplied with matched edge-banding and hinge preparation.",
    "image": "/assets/img/models/fluted-reeded-fronts.webp",
    "gallery": [
      "/assets/img/models/fluted-reeded-fronts.webp",
      "/assets/img/models/handleless-cabinet-fronts.webp"
    ],
    "description": "Introduces tactile drama to kitchen island backsplashes and feature tall housing runs, breaking up flat surfaces with rhythmic timber waves.",
    "keyFeatures": [
      "Precision 10mm periodic wave profile CNC-routed into hardwood veneer",
      "Ideal for statement kitchen island backings and breakfast bar fronts",
      "Provides noticeable acoustic sound absorption in open-plan tiled rooms",
      "Available as both functional hinged doors and continuous architectural cladding"
    ]
  },
  "paint-ready-raw-mdf": {
    "slug": "paint-ready-raw-mdf",
    "category": "kitchen-doors",
    "title": "Paint-Ready Moisture-Resistant Raw MDF Fronts",
    "metaTitle": "Paint-Ready Raw MDF Doors | DIY Kitchen Fronts | Cabivella UK",
    "metaDescription": "Unfinished, double-sanded moisture-resistant MR-MDF Shaker and slab replacement doors, ready for on-site bespoke hand-painting.",
    "dimensionsMm": "Made-to-measure to exact millimetres; 22mm thick",
    "materials": [
      "Premium Medite MR moisture-resistant MDF",
      "Calibrated smooth surface",
      "Machined edges"
    ],
    "finishOptions": [
      "Raw Double-Sanded (Ready for Primer & Topcoat)"
    ],
    "installationScope": "Hinge holes pre-drilled to order. Requires on-site priming and painting.",
    "image": "/assets/img/models/doors-inspiration.webp",
    "gallery": [
      "/assets/img/models/doors-inspiration.webp",
      "/assets/img/models/shaker-replacement-doors.webp"
    ],
    "description": "For decorators and discerning homeowners desiring bespoke Farrow & Ball, Little Greene, or Paint & Paper Library hand-painted finishes on site.",
    "keyFeatures": [
      "Premium moisture-resistant Medite MR-MDF substrate ensuring zero grain raise",
      "Pre-sanded with 240-grit calibration ready for immediate primer application",
      "Sharp internal corners and crisp Shaker profiling for authentic joinery look",
      "Significant budget savings allowing custom colour experimentation"
    ]
  },
  "kensington-linear-240": {
    "slug": "kensington-linear-240",
    "category": "kitchens",
    "title": "Kensington 240cm Integrated Linear Kitchen",
    "metaTitle": "Kensington 240cm Linear Kitchen | Made-to-Measure Joinery | Cabivella UK",
    "metaDescription": "Precision-engineered 240cm made-to-measure kitchen suite featuring 80cm sink base, 60cm oven housing, 3-tier pan drawer stack, and matching wall units.",
    "dimensionsMm": "2400mm width, 600mm base carcass depth (340mm wall depth), 2150mm standard installed height",
    "materials": [
      "18mm moisture-resistant structural MR core",
      "Thermal-healing super-matt anti-fingerprint surface",
      "Concealed 35mm European soft-close clip hinges",
      "Synchronised full-extension 40kg undermount drawer runners"
    ],
    "finishOptions": [
      "Chalk White & Oiled Oak",
      "Matt Basalt Anthracite",
      "Cashmere Taupe",
      "Heritage Sage Green"
    ],
    "installationScope": "Supplied rigid in protective wooden crates with pre-fitted levelling feet and plumbing service voids.",
    "image": "/assets/img/models/contemporary-kitchens.webp",
    "gallery": [
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/concept-kitchen.webp",
      "/assets/img/models/compact-kitchens.webp"
    ],
    "description": "An exquisitely proportioned 240cm linear kitchen layout engineered for British terraced homes and open-plan apartments. Balances continuous preparation surfaces with high-capacity concealed cabinetry, integrating sink, cooking, and storage zones with quiet elegance.",
    "keyFeatures": [
      "Dedicated 800mm sink base unit with moisture-shield aluminium drip tray",
      "600mm integrated oven and induction hob housing with heat-deflector shields",
      "400mm 3-tier drawer stack with solid oak cutlery inserts and deep pan storage",
      "2400mm matching wall run with integrated concealed extractor hood housing"
    ],
  },
  "belgravia-grand-380": {
    "slug": "belgravia-grand-380",
    "category": "kitchens",
    "title": "Belgravia 380cm Grand Architectural Suite",
    "metaTitle": "Belgravia 380cm Grand Kitchen Suite | Luxury Cabinetry | Cabivella UK",
    "metaDescription": "Commanding 380cm bespoke kitchen layout featuring dual full-height appliance towers, 260cm central chef run, 90cm pot drawers, and integrated dishwasher housing.",
    "dimensionsMm": "3800mm width, 600mm worktop depth, 2250mm ceiling-line height",
    "materials": [
      "Solid European ash face framing",
      "Moisture-resistant high-density carcass core",
      "Heavy-load undermount runners tested to 50kg dynamic loads",
      "Integrated acoustic buffer seals"
    ],
    "finishOptions": [
      "Deep Oxford Navy",
      "Hand-Painted Parchment Cream",
      "Smoked Forest Green",
      "Basalt Silk"
    ],
    "installationScope": "Delivered in numbered modular rigid units with bespoke ceiling-height scribing infills.",
    "image": "/assets/img/models/island-suite-kitchens.webp",
    "gallery": [
      "/assets/img/models/island-suite-kitchens.webp",
      "/assets/img/models/shaker-kitchens.webp",
      "/assets/img/models/contemporary-kitchens.webp"
    ],
    "description": "A commanding 380cm architectural kitchen suite designed for expansive UK family residences and country properties. Featuring dual full-height towers flanking a grand culinary workstation, delivering generous storage and seamless appliance integration.",
    "keyFeatures": [
      "Dual 600mm full-height appliance towers for integrated refrigeration and dual ovens",
      "Expansive 2600mm central culinary preparation run with seamless quartz surface",
      "900mm wide heavy-duty pot and pan drawers beneath central 5-zone cooking hob",
      "600mm integrated concealed dishwasher housing with waterproof floor barrier"
    ],
  },
  "mayfair-pantry-320": {
    "slug": "mayfair-pantry-320",
    "category": "kitchens",
    "title": "Mayfair 320cm Tower & Pantry Run",
    "metaTitle": "Mayfair 320cm Kitchen & Pantry Run | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Harmonious 320cm kitchen suite pairing an ergonomic tall food pantry tower with an 80cm sink module, 60cm appliance bay, and walnut dovetailed drawers.",
    "dimensionsMm": "3200mm width, 600mm base depth (350mm wall depth), 2200mm tall column height",
    "materials": [
      "Precision-milled 22mm moisture-sealed timber panels",
      "Solid walnut dovetailed interior drawers",
      "Blum motion soft-close dampers",
      "Heavy-duty adjustable steel levelling legs"
    ],
    "finishOptions": [
      "Satin Pumice",
      "Alabaster White",
      "Smoked Walnut accents",
      "Slate Grey"
    ],
    "installationScope": "Factory pre-assembled rigid carcasses with pre-machined internal cable channels.",
    "image": "/assets/img/models/shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/shaker-kitchens.webp",
      "/assets/img/models/island-suite-kitchens.webp",
      "/assets/img/models/slim-frame-shaker-kitchens.webp"
    ],
    "description": "A sophisticated 320cm made-to-measure run uniting an ergonomic tall food pantry tower with an expansive preparation zone. Ideal for Victorian townhouses and modern suburban extensions requiring maximum organisation within a single wall plane.",
    "keyFeatures": [
      "600mm full-height larder tower with tandem pull-out shelving for instant visibility",
      "800mm undermount double-bowl sink unit with integrated recycling sorting bins",
      "600mm 3-drawer prep bank with solid walnut dovetail cutlery dividers",
      "Continuous overhead wall cabinetry with integrated warm LED task lighting"
    ],
  },
  "cotswold-classic-280": {
    "slug": "cotswold-classic-280",
    "category": "kitchens",
    "title": "Cotswold 280cm Chef's Preparation Kitchen",
    "metaTitle": "Cotswold 280cm Chef's Kitchen | Classic British Joinery | Cabivella UK",
    "metaDescription": "Traditional 280cm British kitchen layout featuring solid timber stiles, 80cm wide cookware drawers, glazed feature wall cabinets, and durable lacquer finish.",
    "dimensionsMm": "2800mm width, 600mm base carcass depth, 2150mm standard installed height",
    "materials": [
      "Solid timber face frames & mortise-and-tenon joints",
      "High-density moisture-resistant MR-MDF panels",
      "Fluted toughened display glass",
      "Aged unlacquered brass hardware"
    ],
    "finishOptions": [
      "Cotswold Cream",
      "Heritage Sage",
      "Deep Indigo",
      "Muted Truffle"
    ],
    "installationScope": "Supplied rigid with integrated service ducting and wall hanging brackets.",
    "image": "/assets/img/models/slim-frame-shaker-kitchens.webp",
    "gallery": [
      "/assets/img/models/slim-frame-shaker-kitchens.webp",
      "/assets/img/models/shaker-kitchens.webp",
      "/assets/img/concept-kitchen.webp"
    ],
    "description": "Celebrating authentic British kitchen joinery, this 280cm layout provides generous food preparation surface, dedicated deep cookware drawers, and glazed display units, bringing timeless warmth and enduring utility to culinary spaces.",
    "keyFeatures": [
      "800mm wide deep drawer chest engineered for cast iron cookware and Dutch ovens",
      "2800mm upper cabinetry run with 800mm glazed feature cupboards for glassware",
      "600mm integrated cooking range module with heat-dissipation ventilation grille",
      "800mm sink base unit with integrated plumbing access service void"
    ],
  },
  "richmond-studio-200": {
    "slug": "richmond-studio-200",
    "category": "kitchens",
    "title": "Richmond 200cm Linear Apartment Kitchen",
    "metaTitle": "Richmond 200cm Studio Kitchen | Compact Joinery | Cabivella UK",
    "metaDescription": "High-density 200cm linear kitchen solution for London apartments and secondary suites, with bi-fold lift wall units and integrated cooking station.",
    "dimensionsMm": "2000mm width, 600mm base depth (320mm wall depth), 2100mm installed height",
    "materials": [
      "18mm dense MR structural composite",
      "Laser-sealed ABS edge banding resistant to steam",
      "Concealed soft-close buffer hinges",
      "Bi-fold lift-up flap mechanisms"
    ],
    "finishOptions": [
      "Porcelain White & Warm Ash",
      "Matt Anthracite",
      "Nordic Pebble",
      "Smoked Greige"
    ],
    "installationScope": "Modular framework engineered for tight staircase access and rapid on-site levelling.",
    "image": "/assets/img/models/compact-kitchens.webp",
    "gallery": [
      "/assets/img/models/compact-kitchens.webp",
      "/assets/img/models/contemporary-kitchens.webp",
      "/assets/img/kitchen-inspiration.webp"
    ],
    "description": "High-density functional joinery within an efficient 200cm envelope. Specifically engineered for London apartments, annexes, and studio suites where every millimetre of preparation and storage space must perform with distinction.",
    "keyFeatures": [
      "800mm sink module accommodating under-sink water filtration and waste disposal",
      "600mm compact oven and induction hob station with reinforced base carcass",
      "Overhead lift-up flap cabinets providing unobstructed head clearance during food prep",
      "Integrated moisture-resistant splashback panel with pre-cut electrical outlet ports"
    ],
  },
  "chelsea-monolith-100": {
    "slug": "chelsea-monolith-100",
    "category": "bathrooms",
    "title": "Chelsea 100cm Illuminated Vanity & Linen Suite",
    "metaTitle": "Chelsea 100cm Vanity Suite | Luxury Bathrooms | Cabivella UK",
    "metaDescription": "Refined 100cm floating bathroom vanity suite with vitreous china basin, touchless LED demister mirror cabinet, and coordinating tall linen tower.",
    "dimensionsMm": "1000mm vanity width, 520mm height, 480mm depth; optional 350x1600mm linen tower",
    "materials": [
      "Marine-grade moisture-sealed core substrate",
      "Multi-coat hydrophobic polyurethane satin lacquer",
      "Vitreous china washbasin deck with integrated overflow",
      "Concealed heavy-load steel wall brackets tested to 150kg"
    ],
    "finishOptions": [
      "Matt Chalk White",
      "Basalt Grey Silk",
      "Natural Bleached Oak",
      "Deep Oxford Navy"
    ],
    "installationScope": "Factory pre-assembled with certified heavy-duty wall anchor plates and waste trap clearance cutouts.",
    "image": "/assets/img/models/real_bathrooms/bath_1000744405_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_1000744405_1.webp",
      "/assets/img/models/real_bathrooms/bath_1000744405_2.webp"
],
    "description": "An impeccably balanced 100cm floating bathroom suite engineered for UK family bathrooms and boutique en-suites. Features twin soft-close drawers beneath an architectural washbasin deck, paired with an illuminated anti-condensation LED mirror cabinet.",
    "keyFeatures": [
      "1000mm single-basin console with contoured U-shaped waste cutout preserving drawer depth",
      "Touchless infrared sensor LED mirror cabinet with internal heated demister pad",
      "Dual soft-close drawers on synchronised undermount runners with 35kg dynamic rating",
      "Sealed against 100% relative humidity with impermeable polyurethane edge-welding"
    ]
  },
  "belgravia-double-140": {
    "slug": "belgravia-double-140",
    "category": "bathrooms",
    "title": "Belgravia 140cm Architectural Double Vanity",
    "metaTitle": "Belgravia 140cm Double Vanity | Master Suite Joinery | Cabivella UK",
    "metaDescription": "Commanding 140cm wall-hung double-basin bathroom console featuring dual ceramic washbowls, four soft-close drawers, and matching dual LED mirrors.",
    "dimensionsMm": "1400mm width, 540mm height, 500mm depth",
    "materials": [
      "Structural moisture-resistant carcass core",
      "Dual high-fire vitreous ceramic basins",
      "Blum soft-close drawer glides with dampening buffers",
      "Solid brass knurled handles or handleless bevel lip"
    ],
    "finishOptions": [
      "Smoked Black Walnut",
      "Highland Moss Green",
      "Satin Pumice",
      "Porcelain Chalk"
    ],
    "installationScope": "Supplied rigid in heavy wooden crating with dual-point suspension brackets and levelling bolts.",
    "image": "/assets/img/models/real_bathrooms/bath_5000076563_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5000076563_1.webp",
      "/assets/img/models/real_bathrooms/bath_5000076563_2.webp",
      "/assets/img/models/real_bathrooms/bath_5000076563_3.webp"
],
    "description": "The quintessential master en-suite centrepiece. 140cm of uninterrupted architectural joinery offering dual independent wash stations and four deep organising drawers for shared morning rituals without friction.",
    "keyFeatures": [
      "Generous 1400mm dual-basin configuration with independent plumbing service ducts",
      "Four soft-close drawers with integrated dividers for skincare, towels, and grooming items",
      "Coordinating dual anti-steam LED mirrors with perimeter ambient lighting",
      "Factory-treated hydrophobic coating resistant to standing cosmetic fluids"
    ]
  },
  "st-james-reeded-120": {
    "slug": "st-james-reeded-120",
    "category": "bathrooms",
    "title": "St James 120cm Reeded Timber Console",
    "metaTitle": "St James 120cm Reeded Vanity | Fluted Bathroom Units | Cabivella UK",
    "metaDescription": "Tactile 120cm fluted bathroom vanity unit with CNC-milled vertical reeding, quartz stone deck, and twin soft-close storage compartments.",
    "dimensionsMm": "1200mm width, 520mm height, 490mm depth",
    "materials": [
      "Multi-axis CNC-routed reeded European oak veneer",
      "Engineered composite quartz countertop",
      "Heavy-duty internal steel drawer boxes",
      "Concealed push-to-open motion hardware"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Matt Clay Reeded",
      "Basalt Wave"
    ],
    "installationScope": "Factory pre-assembled with pre-machined cutouts for undermount or vessel washbasin integration.",
    "image": "/assets/img/models/real_bathrooms/bath_5002579017_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5002579017_1.webp",
      "/assets/img/models/real_bathrooms/bath_5002579017_2.webp",
      "/assets/img/models/real_bathrooms/bath_5002579017_3.webp"
],
    "description": "Architectural fluted geometry that introduces organic warmth and tactile depth to tiled bathroom spaces. Precision-milled vertical ridges conceal a seamless push-to-open drawer system of expansive capacity.",
    "keyFeatures": [
      "Continuous 12mm reeded profile wrapping cleanly across drawer elevations",
      "Stain-resistant quartz worktop deck impervious to limescale and acidic soap residues",
      "Twin soft-close drawers fitted with non-slip removable washable lining mats",
      "Engineered acoustic dampening preventing hollow drawer closure reverberation"
    ]
  },
  "kensington-artisan-80": {
    "slug": "kensington-artisan-80",
    "category": "bathrooms",
    "title": "Kensington 80cm Fluted Basin Console",
    "metaTitle": "Kensington 80cm Fluted Vanity | Compact Luxury Joinery | Cabivella UK",
    "metaDescription": "80cm made-to-measure floating vanity unit with reeded timber detailing, slim ceramic washbasin, and deep double-drawer storage.",
    "dimensionsMm": "800mm width, 500mm height, 460mm depth",
    "materials": [
      "Moisture-resistant MR-MDF substrate",
      "Precision fluted frontal profile",
      "Vitreous ceramic slim-rim washbasin",
      "Synchronised soft-close glides"
    ],
    "finishOptions": [
      "Natural Light Oak",
      "Cashmere Greige",
      "Muted Olive Green",
      "Satin White"
    ],
    "installationScope": "Delivered rigid with wall-mounting bracket kit and multi-axis alignment adjusters.",
    "image": "/assets/img/models/real_bathrooms/bath_1000793079_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_1000793079_1.webp",
      "/assets/img/models/real_bathrooms/bath_1000793079_2.webp"
],
    "description": "A tailored 80cm solution providing full-size luxury within compact guest en-suites and period terrace bathrooms. The tactile fluted facade softens rectangular architecture while providing generous internal drawer space.",
    "keyFeatures": [
      "Optimised 800mm width designed to fit standard British alcove and en-suite dimensions",
      "Integrated slim-rim ceramic washbasin with gentle internal basin radii for easy wiping",
      "Upper drawer with bespoke cosmetic organising compartments and U-trap cutaway",
      "Deep lower drawer designed specifically for upright storage of tall bottles and spare linens"
    ]
  },
  "knightsbridge-master-160": {
    "slug": "knightsbridge-master-160",
    "category": "bathrooms",
    "title": "Knightsbridge 160cm Grand Double Suite",
    "metaTitle": "Knightsbridge 160cm Master Bathroom Suite | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Grand 160cm double vanity console with bespoke quartz slab, dual undermount ceramic bowls, six soft-close drawers, and matching full-height linen column.",
    "dimensionsMm": "1600mm vanity width, 550mm height, 520mm depth; 400x1750mm linen tower",
    "materials": [
      "Structural timber composite with water-cured resin bonding",
      "30mm engineered quartz deck with pencil-edge detail",
      "Dual glazed undermount ceramic basins",
      "Full heavy-duty 50kg dynamic load slides"
    ],
    "finishOptions": [
      "Smoked Bronze Oak",
      "Heritage Charcoal",
      "Chalk White & Brass trims",
      "Deep Slate"
    ],
    "installationScope": "Modular dual-chassis delivery with reinforced steel mounting rails and laser-aligned templates.",
    "image": "/assets/img/models/real_bathrooms/bath_5003552041_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5003552041_1.webp",
      "/assets/img/models/real_bathrooms/bath_5003552041_2.webp"
],
    "description": "An uncompromising expression of bespoke master bathroom luxury. Spanning 160cm with a continuous quartz deck, dual undermount washbowls, and an accompanying tall linen tower with internal laundry sorting hampers.",
    "keyFeatures": [
      "Expansive 1600mm double-bowl station with generous central preparation island",
      "Six individual soft-close drawers providing dedicated storage for both partners",
      "Full-height 1750mm linen column with integrated fold-down laundry basket hamper",
      "Concealed internal 240V charging sockets for electric toothbrushes and shavers"
    ]
  },
  "mayfair-cloakroom-65": {
    "slug": "mayfair-cloakroom-65",
    "category": "bathrooms",
    "title": "Mayfair 65cm Compact Cloakroom Vanity",
    "metaTitle": "Mayfair 65cm Cloakroom Vanity | Small Space Joinery | Cabivella UK",
    "metaDescription": "Slim 65cm wall-hung cloakroom vanity with ceramic basin, soft-close double drawers, and matching LED backlit mirror for UK powder rooms.",
    "dimensionsMm": "650mm width, 480mm height, 420mm slim projection",
    "materials": [
      "High-density moisture-sealed MR core",
      "Gloss or matt polyurethane lacquer",
      "Compact vitreous china washbasin",
      "Concealed soft-close buffer hinges"
    ],
    "finishOptions": [
      "Porcelain Chalk White",
      "Warm Stone Greige",
      "Sage Mist",
      "Matt Anthracite"
    ],
    "installationScope": "Engineered for rapid, accurate mounting in compact under-stair WCs and cloakrooms.",
    "image": "/assets/img/models/real_bathrooms/bath_5003552028_1.webp",
    "gallery": [
      "/assets/img/models/real_bathrooms/bath_5003552028_1.webp",
      "/assets/img/models/real_bathrooms/bath_5003552028_2.webp"
],
    "description": "Tailored specifically for British cloakrooms, under-stair powder rooms, and compact en-suites. Slim 420mm projection preserves crucial walkway clearance while concealing spare hand towels and soaps behind elegant lacquered facades.",
    "keyFeatures": [
      "Slim 420mm projection maximising door swing and walking clearance in tight WCs",
      "Compact ceramic basin with single pre-punched central monobloc tap hole",
      "Dual soft-close drawers providing organised storage for guest toiletries",
      "Factory-applied hydrophobic perimeter seals preventing water droplet swelling"
    ]
  },
  "westminster-chef-suite-310": {
    "slug": "westminster-chef-suite-310",
    "category": "kitchens",
    "title": "Westminster 310cm Chef's Linear Kitchen",
    "metaTitle": "Westminster 310cm Chef's Linear Kitchen | Cabivella UK",
    "metaDescription": "Luxury 310cm made-to-measure culinary kitchen layout featuring moisture-resistant MDF fronts, seamless integrated worktop, deep pot drawers, and matching wall units.",
    "dimensionsMm": "3100mm width, 600mm base carcass depth (350mm wall depth), 2150mm standard installed height",
    "materials": [
      "High-density moisture-resistant MR-MDF core",
      "Seamless acrylic stone-composite worktop deck",
      "Concealed heavy-load undermount runners with hydraulic damping",
      "Factory-baked multi-layer polyurethane enamel"
    ],
    "finishOptions": [
      "Pure Architectural Chalk",
      "Warm Stone Greige",
      "Smoked Slate",
      "Natural Oiled Oak interior"
    ],
    "installationScope": "Supplied rigid in bespoke protective timber crating with laser-levelled wall hanging gear and plumbing service voids.",
    "image": "/assets/img/models/real_kitchens/5002886738_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002886738_1.webp",
      "/assets/img/models/real_kitchens/5002886738_2.webp",
      "/assets/img/models/real_kitchens/5002886738_3.webp"
    ],
    "description": "An expansive 310cm linear culinary workstation engineered for British homes demanding generous preparation space. Includes dedicated sink module, hob housing, high-capacity pan drawers, and full-width overhead storage with integrated extraction housing.",
    "keyFeatures": [
      "3100mm continuous preparation run incorporating integrated worktop and sink cutaway",
      "Triple-tier heavy-duty pan drawer bank tested to 50kg dynamic loads",
      "Dedicated tall utility column and appliance housings with heat-deflector lining",
      "Moisture-sealed service cavity allowing clean pipework runs behind rear carcasses"
    ]
  },
  "kensington-culinary-suite-310": {
    "slug": "kensington-culinary-suite-310",
    "category": "kitchens",
    "title": "Kensington 310cm Architectural Culinary Suite",
    "metaTitle": "Kensington 310cm Culinary Suite | Bespoke Kitchens | Cabivella UK",
    "metaDescription": "Grand 310cm made-to-measure kitchen suite featuring precision-milled cabinetry, full-extension dovetail drawers, and integrated prep worktop.",
    "dimensionsMm": "3100mm width, 600mm worktop depth, 2200mm ceiling-line height",
    "materials": [
      "Moisture-resistant high-density timber composite",
      "Durable heat-resistant work surface",
      "Synchronised full-extension drawer glides",
      "Concealed soft-close buffer hinges"
    ],
    "finishOptions": [
      "Satin Oyster White",
      "Basalt Grey Silk",
      "Heritage Olive",
      "Smoked Walnut interior"
    ],
    "installationScope": "Factory pre-assembled rigid units complete with adjustable steel levelling feet.",
    "image": "/assets/img/models/real_kitchens/5002886726_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002886726_1.webp",
      "/assets/img/models/real_kitchens/5002886726_2.webp",
      "/assets/img/models/real_kitchens/5002886726_3.webp"
    ],
    "description": "Designed for open-plan living and serious culinary preparation. Balances symmetry with ergonomic flow, integrating sink, cooking, and extensive larder storage within a monolithic 310cm elevation.",
    "keyFeatures": [
      "Precision 3100mm layout with balanced symmetry around central cooking zone",
      "Overhead lift-up flap cabinets providing clear line of sight while preparing meals",
      "Full internal organiser inserts for spices, cutlery, and kitchen linens",
      "Factory-applied hydrophobic sealing protecting against cooking steam and water spills"
    ]
  },
  "belgravia-executive-kitchen-310": {
    "slug": "belgravia-executive-kitchen-310",
    "category": "kitchens",
    "title": "Belgravia 310cm Executive Integrated Kitchen",
    "metaTitle": "Belgravia 310cm Executive Kitchen | Luxury Joinery | Cabivella UK",
    "metaDescription": "Sophisticated 310cm bespoke kitchen layout featuring high-specification cabinetry, integrated breakfast preparation zone, and durable work surfaces.",
    "dimensionsMm": "3100mm width, 600mm base depth (350mm wall depth), 2150mm height",
    "materials": [
      "18mm structural MR-MDF substrate",
      "Scratch-resistant satin lacquer finish",
      "Heavy-duty 40kg soft-close glides",
      "Stainless steel internal mounting fittings"
    ],
    "finishOptions": [
      "Cashmere Warm Taupe",
      "Alabaster White",
      "Deep Navy",
      "Natural Oak accents"
    ],
    "installationScope": "Supplied rigid with integrated service ducting and wall hanging brackets.",
    "image": "/assets/img/models/real_kitchens/5002886596_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002886596_1.webp",
      "/assets/img/models/real_kitchens/5002886596_2.webp",
      "/assets/img/models/real_kitchens/5002886596_3.webp"
    ],
    "description": "A refined expression of contemporary British domestic joinery. Generous 310cm footprint accommodates high-capacity recycling systems, deep stockpot drawers, and discrete appliance housings.",
    "keyFeatures": [
      "3100mm made-to-measure run with integrated waste recycling pull-out",
      "Deep lower pan drawers engineered for cast iron cookware and Dutch ovens",
      "Concealed extractor hood housing with moisture-shield baffle",
      "Continuous worktop surface with pre-cut sink and hob apertures"
    ]
  },
  "mayfair-monolith-highgloss-410": {
    "slug": "mayfair-monolith-highgloss-410",
    "category": "kitchens",
    "title": "Mayfair 410cm Monolith High-Gloss Suite",
    "metaTitle": "Mayfair 410cm High-Gloss Kitchen | Architectural Suites | Cabivella UK",
    "metaDescription": "Commanding 410cm x 240cm architectural kitchen suite featuring mirror-finish high-gloss lacquered fronts, dual full-height towers, and expansive central preparation run.",
    "dimensionsMm": "4100mm width, 2400mm full ceiling height, 600mm depth",
    "materials": [
      "High-gloss mirror acrylic lacquered MDF",
      "Moisture-sealed structural carcass",
      "Heavy-duty tall tower slide mechanisms",
      "Integrated aluminium finger-grip rails"
    ],
    "finishOptions": [
      "Mirror Pure White",
      "Deep Gloss Anthracite",
      "Cashmere Silk Gloss"
    ],
    "installationScope": "Modular numbered delivery with ceiling scribing infills and heavy appliance tower bracings.",
    "image": "/assets/img/models/real_kitchens/5002600107_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002600107_1.webp",
      "/assets/img/models/real_kitchens/5002600107_2.webp",
      "/assets/img/models/real_kitchens/5002600107_3.webp"
    ],
    "description": "Grand architectural presence spanning 4.10 metres. Dual full-height 240cm towers flank an expansive central cooking and prep workstation, finished in pristine mirror high-gloss lacquer.",
    "keyFeatures": [
      "Massive 4100mm x 2400mm elevation providing floor-to-ceiling storage capacity",
      "Dual full-height appliance towers accommodating integrated fridge, freezer, and eye-level ovens",
      "Mirror high-gloss finish amplifying natural light in expansive open-plan UK extensions",
      "Concealed soft-close motion hardware with 50kg load ratings on lower drawers"
    ]
  },
  "chelsea-dualtone-highgloss-410": {
    "slug": "chelsea-dualtone-highgloss-410",
    "category": "kitchens",
    "title": "Chelsea 410cm Dual-Tone High-Gloss Suite",
    "metaTitle": "Chelsea 410cm Dual-Tone Kitchen | High-Gloss Joinery | Cabivella UK",
    "metaDescription": "Striking 410cm x 240cm contemporary kitchen combining chalk white overhead cabinetry with deep anthracite base towers and seamless work surfaces.",
    "dimensionsMm": "4100mm width, 2400mm ceiling height, 600mm depth",
    "materials": [
      "Dual-tone high-gloss acrylic MDF panels",
      "Water-resistant sealed carcasses",
      "Heavy-load tandem pantry slides",
      "Laser-welded ABS edge banding"
    ],
    "finishOptions": [
      "Chalk White & Anthracite Gloss",
      "Pure White & Basalt Grey",
      "Ivory & Smoked Slate"
    ],
    "installationScope": "Delivered rigid in modular sections with adjustable steel feet and wall suspension kits.",
    "image": "/assets/img/models/real_kitchens/5002600116_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002600116_1.webp",
      "/assets/img/models/real_kitchens/5002600116_2.webp",
      "/assets/img/models/real_kitchens/5002600116_3.webp"
    ],
    "description": "A striking dual-tone aesthetic uniting light reflective upper units with grounded dark base cabinetry. Designed for modern architectural residences seeking bold visual contrast.",
    "keyFeatures": [
      "Contrast dual-tone elevation with white upper units and anthracite base banks",
      "Full 4100mm linear span incorporating sink, cooking, and refrigeration zones",
      "Integrated tall larder tower with multi-tier pull-out storage baskets",
      "Impermeable laser-applied edge sealing preventing moisture ingress from dishwasher steam"
    ]
  },
  "knightsbridge-tall-larder-410": {
    "slug": "knightsbridge-tall-larder-410",
    "category": "kitchens",
    "title": "Knightsbridge 410cm Tall Larder Kitchen",
    "metaTitle": "Knightsbridge 410cm Larder Kitchen | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Expansive 410cm made-to-measure kitchen suite featuring dedicated walk-in tall larder capacity, integrated appliance banks, and high-gloss lacquer.",
    "dimensionsMm": "4100mm width, 2400mm height, 600mm depth",
    "materials": [
      "High-gloss lacquered moisture-resistant core",
      "Heavy-duty Blum motion slides",
      "Structural Birch plywood reinforcements",
      "Internal LED light integration profiles"
    ],
    "finishOptions": [
      "Pure Architectural White",
      "Basalt Silk Gloss",
      "Cashmere Gloss"
    ],
    "installationScope": "Pre-assembled rigid carcasses with dedicated joinery numbering system.",
    "image": "/assets/img/models/real_kitchens/5002599734_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002599734_1.webp",
      "/assets/img/models/real_kitchens/5002599734_2.webp",
      "/assets/img/models/real_kitchens/5002599734_3.webp"
    ],
    "description": "Engineered for generous UK family homes. High-volume tall cabinetry houses provisions, small appliances, and cooking essentials, keeping countertops completely pristine.",
    "keyFeatures": [
      "4100mm wide layout featuring integrated full-height pantry storage tower",
      "Central culinary prep zone with heavy-duty cooking appliance integration",
      "Full soft-close damping across every door and drawer front",
      "Scribed top infill panels allowing tailored fit to out-of-level British ceilings"
    ]
  },
  "st-james-integrated-tower-410": {
    "slug": "st-james-integrated-tower-410",
    "category": "kitchens",
    "title": "St James 410cm Integrated Tower Kitchen",
    "metaTitle": "St James 410cm Integrated Kitchen | Luxury Suites | Cabivella UK",
    "metaDescription": "Contemporary 410cm kitchen layout featuring dual appliance towers in contrasting anthracite and white high-gloss finishes.",
    "dimensionsMm": "4100mm width, 2400mm height, 600mm depth",
    "materials": [
      "Moisture-resistant MR-MDF substrate",
      "High-gloss polyurethane enamel",
      "Concealed 3D adjustable steel hinges",
      "Synchronised full-extension glides"
    ],
    "finishOptions": [
      "Anthracite Base & White Wall Units",
      "Monochrome Basalt",
      "Satin Pumice"
    ],
    "installationScope": "Factory rigid assembly with pre-machined internal wiring conduits.",
    "image": "/assets/img/models/real_kitchens/5002599731_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002599731_1.webp",
      "/assets/img/models/real_kitchens/5002599731_2.webp",
      "/assets/img/models/real_kitchens/5002599731_3.webp"
    ],
    "description": "Architectural balance meets high-capacity domestic utility. Features integrated tower cabinetry flanking a functional culinary bank with extensive pan drawer storage.",
    "keyFeatures": [
      "Dual appliance towers with dedicated heat dissipation chimneys",
      "Wide 4100mm run with ergonomic spacing between water and cooking points",
      "High-gloss surfaces resistant to grease and cooking heat",
      "Plumbing service void pre-cut to standard British waste line requirements"
    ]
  },
  "cotswold-fullheight-suite-400": {
    "slug": "cotswold-fullheight-suite-400",
    "category": "kitchens",
    "title": "Cotswold 400cm Full-Height Architectural Suite",
    "metaTitle": "Cotswold 400cm Full-Height Kitchen | Grand Suites | Cabivella UK",
    "metaDescription": "Magnificent 400cm x 240cm kitchen suite with dual full-height storage towers, integrated appliances, and pristine white high-gloss finish.",
    "dimensionsMm": "4000mm width, 2400mm ceiling height, 600mm depth",
    "materials": [
      "18mm high-gloss lacquer core",
      "Waterproof carcass resin bonding",
      "Heavy-load undermount drawer runners",
      "Concealed handleless bevel profiles"
    ],
    "finishOptions": [
      "Pure Architectural White Gloss",
      "Warm Alabaster",
      "Cashmere Gloss"
    ],
    "installationScope": "Supplied rigid in protective wooden crates with bespoke ceiling infill fillets.",
    "image": "/assets/img/models/real_kitchens/5002598452_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002598452_1.webp",
      "/assets/img/models/real_kitchens/5002598452_2.webp",
      "/assets/img/models/real_kitchens/5002598452_3.webp"
    ],
    "description": "Four continuous metres of architectural cabinetry designed for grand British kitchen renovations. Features twin full-height larder towers and an uninterrupted prep bank.",
    "keyFeatures": [
      "4000mm x 2400mm monolithic elevation offering immense dry food and cookware storage",
      "Twin tall larder columns providing dedicated breakfast station and dry storage capacity",
      "Heavy-gauge drawer slides carrying up to 50kg per pan drawer",
      "Seamless edge sealing protecting against everyday cooking vapour"
    ]
  },
  "richmond-dualtower-kitchen-400": {
    "slug": "richmond-dualtower-kitchen-400",
    "category": "kitchens",
    "title": "Richmond 400cm Dual Tower Kitchen Run",
    "metaTitle": "Richmond 400cm Dual Tower Kitchen | Luxury Joinery | Cabivella UK",
    "metaDescription": "400cm bespoke kitchen layout featuring dual tall refrigeration and oven columns flanking a central prep workstation in pure white gloss.",
    "dimensionsMm": "4000mm width, 2400mm height, 600mm depth",
    "materials": [
      "High-density moisture-resistant MR substrate",
      "High-gloss baked lacquer finish",
      "Concealed hydraulic damping hardware",
      "Aluminium heat-deflection plates"
    ],
    "finishOptions": [
      "Pure White Gloss",
      "Porcelain Chalk",
      "Basalt Grey"
    ],
    "installationScope": "Factory assembled with pre-fitted levelling feet and transit braces.",
    "image": "/assets/img/models/real_kitchens/5002600636_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002600636_1.webp",
      "/assets/img/models/real_kitchens/5002600636_2.webp",
      "/assets/img/models/real_kitchens/5002600636_3.webp"
    ],
    "description": "Bespoke architectural symmetry. Dual 240cm towers house cooking appliances and cold storage at ergonomic heights, creating a balanced, clutter-free culinary environment.",
    "keyFeatures": [
      "Ergonomic dual-tower format keeping eye-level ovens and refrigeration within easy reach",
      "Extensive central preparation surface with integrated hob and extraction provisions",
      "Soft-close damping throughout ensuring quiet, effortless operation",
      "Engineered for rapid, accurate levelling in period and modern UK properties"
    ]
  },
  "hampstead-contemporary-suite-400": {
    "slug": "hampstead-contemporary-suite-400",
    "category": "kitchens",
    "title": "Hampstead 400cm Contemporary High-Gloss Suite",
    "metaTitle": "Hampstead 400cm Contemporary Suite | Made-to-Measure | Cabivella UK",
    "metaDescription": "Modern 400cm kitchen suite combining white high-gloss overhead cabinets with anthracite base towers and seamless prep surfaces.",
    "dimensionsMm": "4000mm width, 2400mm height, 600mm depth",
    "materials": [
      "Dual-tone high-gloss acrylic MDF",
      "Water-resistant interior carcasses",
      "Heavy-load drawer slides",
      "Laser-applied ABS edge sealing"
    ],
    "finishOptions": [
      "White Gloss & Anthracite",
      "Full Gloss Anthracite",
      "Basalt Silk"
    ],
    "installationScope": "Delivered rigid with dedicated joinery numbering and installation templates.",
    "image": "/assets/img/models/real_kitchens/5002598757_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002598757_1.webp",
      "/assets/img/models/real_kitchens/5002598757_2.webp",
      "/assets/img/models/real_kitchens/5002598757_3.webp"
    ],
    "description": "Sophisticated contemporary proportions spanning 400cm. Unites crisp white overhead reflection with dark architectural base cabinetry, ideal for light-filled UK kitchen extensions.",
    "keyFeatures": [
      "4-metre linear span with dual-tone high-gloss cabinetry elevations",
      "Triple-stack pan drawers with internal dividers for cutlery and cooking tools",
      "Integrated tall tower capacity housing built-in refrigeration and double ovens",
      "Durable high-gloss surface resistant to grease and everyday household scuffs"
    ]
  },
  "belgravia-island-olive-240": {
    "slug": "belgravia-island-olive-240",
    "category": "kitchens",
    "title": "Belgravia 240cm Island Olive Shaker Kitchen",
    "metaTitle": "Belgravia 240cm Island Olive Kitchen | Shaker Joinery | Cabivella UK",
    "metaDescription": "Heritage 240cm Shaker kitchen cabinetry in refined island olive green, featuring 80cm sink base, 60cm oven module, and matching wall units.",
    "dimensionsMm": "2400mm width, 600mm base depth (340mm wall depth), 2150mm height",
    "materials": [
      "Solid timber Shaker stiles",
      "High-density moisture-resistant MR core panel",
      "Concealed soft-close buffer hinges",
      "Smooth satin polyurethane lacquer"
    ],
    "finishOptions": [
      "Island Olive Green",
      "Heritage Sage",
      "Chalk White",
      "Oxford Navy"
    ],
    "installationScope": "Factory pre-assembled rigid units with plumbing service voids.",
    "image": "/assets/img/models/real_kitchens/5002571266_1.webp",
    "gallery": [
      "/assets/img/models/real_kitchens/5002571266_1.webp",
      "/assets/img/models/shaker-kitchens.webp"
    ],
    "description": "Authentic British Shaker styling finished in an earthy island olive hue. Proportioned for standard 2.4-metre runs in terraced extensions, uniting classic five-piece framing with contemporary soft-close motion hardware.",
    "keyFeatures": [
      "2400mm standard modular run with dedicated sink, cooking, and drawer zones",
      "Authentic five-piece Shaker stiles with smooth wipe-clean satin finish",
      "Soft-close runners and hinges preventing door slamming in busy households",
      "Engineered service space behind rear backboard for clean pipe and wire integration"
    ]
  },
  "kensington-reeded-100": {
      "slug": "kensington-reeded-100",
      "category": "bathrooms",
      "title": "Kensington 100cm Reeded Forest Vanity",
      "metaTitle": "Kensington 100cm Reeded Vanity Unit | Forest Green | Cabivella UK",
      "metaDescription": "1000mm wall-hung vanity in deep botanical green with rhythmic vertical reeding, integrated ceramic basin and mirrored cabinet.",
      "dimensionsMm": "1000mm width, 480mm depth, 520mm height",
      "materials": [
          "High-density MR lacquer panel",
          "Glazed vitreous china",
          "Concealed steel suspension brackets"
      ],
      "finishOptions": [
          "Matt Forest Green",
          "Botanical Sage",
          "Deep Moss"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5002579014_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5002579014_1.webp",
          "/assets/img/models/real_bathrooms/bath_5002579014_2.webp",
          "/assets/img/models/real_bathrooms/bath_5002579014_3.webp"
      ],
      "description": "1000mm wall-hung vanity in deep botanical green with rhythmic vertical reeding, integrated ceramic basin and mirrored cabinet.",
      "keyFeatures": [
          "Precision CNC fluted fascia in matt sage-forest lacquer",
          "Coordinating double-door mirrored demister cabinet with interior shelving",
          "Integrated glazed vitreous china washbasin with pre-punched brassware hole",
          "Twin soft-close full-extension undermount runners with 35kg dynamic load rating"
      ]
  },
  "belgravia-monolith-100": {
      "slug": "belgravia-monolith-100",
      "category": "bathrooms",
      "title": "Belgravia 100cm Gloss Porcelain Console",
      "metaTitle": "Belgravia 100cm Gloss Vanity Console | Minimalist | Cabivella UK",
      "metaDescription": "1000mm pristine high-gloss white bathroom console with continuous J-pull profile and wide-format washbasin.",
      "dimensionsMm": "1000mm width, 460mm depth, 500mm height",
      "materials": [
          "Multi-coat gloss lacquer",
          "Sanitary ceramic basin",
          "Hydraulic soft-close damping"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "Alabaster White",
          "Chalk Glaze"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5002572184_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5002572184_1.webp",
          "/assets/img/models/real_bathrooms/bath_5002572184_2.webp",
          "/assets/img/models/real_bathrooms/bath_5002572184_3.webp"
      ],
      "description": "1000mm pristine high-gloss white bathroom console with continuous J-pull profile and wide-format washbasin.",
      "keyFeatures": [
          "Multi-coat polyurethane pristine high-gloss white mirrored reflection",
          "Wide-format ergonomic mono-basin in seamless vitreous ceramic",
          "Bevelled J-pull handleless architecture for continuous clean elevations",
          "Double drawer volume with dedicated internal U-bend plumbing cut-out"
      ]
  },
  "mayfair-floating-80": {
      "slug": "mayfair-floating-80",
      "category": "bathrooms",
      "title": "Mayfair 80cm Architectural Charcoal Vanity",
      "metaTitle": "Mayfair 80cm Charcoal Floating Vanity | Luxury Suite | Cabivella UK",
      "metaDescription": "800mm floating vanity console in architectural matt slate with matching demister mirror and recessed ambient illumination.",
      "dimensionsMm": "800mm width, 460mm depth, 520mm height",
      "materials": [
          "Anti-fingerprint thermal foil",
          "Fine vitreous china",
          "Backlit silvered mirror"
      ],
      "finishOptions": [
          "Matt Slate Charcoal",
          "Volcanic Ash",
          "Carbon Silk"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5002572000_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5002572000_1.webp",
          "/assets/img/models/real_bathrooms/bath_5002572000_2.webp",
          "/assets/img/models/real_bathrooms/bath_5002572000_3.webp"
      ],
      "description": "800mm floating vanity console in architectural matt slate with matching demister mirror and recessed ambient illumination.",
      "keyFeatures": [
          "Ultra-matt anti-fingerprint slate grey composite finish with silky tactile feel",
          "Frameless architectural backlit LED mirror with touch-dimming and demister pad",
          "Slimline profile ceramic washbasin with generous side deck for amenities",
          "Heavy-duty adjustable steel wall hanger system with acoustic decoupling"
      ]
  },
  "cotswold-suite-115": {
      "slug": "cotswold-suite-115",
      "category": "bathrooms",
      "title": "Cotswold 115cm Integrated Suite with Tall Linen Column",
      "metaTitle": "Cotswold 115cm Bathroom Suite with Tall Column | Cabivella UK",
      "metaDescription": "Complete 800mm vanity console paired with 350mm full-height linen storage tower in duo-tone graphite and chalk.",
      "dimensionsMm": "800mm vanity + 350mm column (1150mm total width), 450mm depth",
      "materials": [
          "Duo-tone MR engineered timber",
          "Vitreous china",
          "Toughened float glass"
      ],
      "finishOptions": [
          "Graphite Grey & White",
          "Dual-Tone Cashmere",
          "Nordic Slate"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5002001118_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5002001118_1.webp",
          "/assets/img/models/real_bathrooms/bath_5002001118_2.webp",
          "/assets/img/models/real_bathrooms/bath_5002001118_3.webp"
      ],
      "description": "Complete 800mm vanity console paired with 350mm full-height linen storage tower in duo-tone graphite and chalk.",
      "keyFeatures": [
          "Dual-component ensemble: 800mm basin console plus 350mm full-height larder tower",
          "Four internal height-adjustable safety glass shelves in the companion linen tower",
          "Sculpted edge-profile ceramic basin with anti-splash perimeter rim",
          "Soft-closing 110-degree clip hinges with 3-way eccentric cam adjustment"
      ]
  },
  "chelsea-compact-85": {
      "slug": "chelsea-compact-85",
      "category": "bathrooms",
      "title": "Chelsea 85cm Cloakroom Vanity in Matt Anthracite",
      "metaTitle": "Chelsea 85cm Vanity Console | Matt Anthracite | Cabivella UK",
      "metaDescription": "850mm proportioned vanity unit designed for distinguished en-suites and cloakrooms with enclosed mirrored storage.",
      "dimensionsMm": "850mm width, 450mm depth, 520mm height",
      "materials": [
          "Matt anthracite polyurethane",
          "Sanitary vitreous porcelain",
          "Stainless hardware"
      ],
      "finishOptions": [
          "Matt Anthracite",
          "Deep Charcoal",
          "Cast Iron Matt"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5002579024_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5002579024_1.webp",
          "/assets/img/models/real_bathrooms/bath_5002579024_2.webp",
          "/assets/img/models/real_bathrooms/bath_5002579024_3.webp"
      ],
      "description": "850mm proportioned vanity unit designed for distinguished en-suites and cloakrooms with enclosed mirrored storage.",
      "keyFeatures": [
          "Compact 850mm footprint optimised for Victorian townhome en-suites and powder rooms",
          "Deep single-bowl ceramic washbasin providing maximum wash area in modest dimensions",
          "Recessed handleless shadow gap for effortless opening from any hand angle",
          "Moisture-cured PU edge-banding throughout preventing delamination in damp zones"
      ]
  },
  "st-james-trio-100": {
      "slug": "st-james-trio-100",
      "category": "bathrooms",
      "title": "St James 100cm Modular Triad Suite",
      "metaTitle": "St James 100cm Modular Bathroom Suite | Mirror & Column | Cabivella UK",
      "metaDescription": "Three-piece architectural suite comprising 1000mm base vanity, 350mm vertical linen armoire, and wide mirrored cabinet.",
      "dimensionsMm": "1000mm base + 350mm column, 460mm depth, 1900mm suite height",
      "materials": [
          "Engineered MR composite",
          "Polished glazed ceramic",
          "Stainless handles"
      ],
      "finishOptions": [
          "Chalk White Gloss",
          "Arctic Silk",
          "Opal Cream"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5001103682_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5001103682_1.webp",
          "/assets/img/models/real_bathrooms/bath_5001103682_2.webp",
          "/assets/img/models/real_bathrooms/bath_5001103682_3.webp"
      ],
      "description": "Three-piece architectural suite comprising 1000mm base vanity, 350mm vertical linen armoire, and wide mirrored cabinet.",
      "keyFeatures": [
          "Full architectural trio: 1000mm base cabinet, matching mirrored upper, and separate linen column",
          "Generous twin pull-out drawers with internal non-slip dividers and cosmetic trays",
          "High-gloss sealed surfaces resistant to cosmetic cleansers and steam exposure",
          "Concealed pipework chase cavity to accept standard British 32mm and 40mm waste pipes"
      ]
  },
  "westminster-suite-135": {
      "slug": "westminster-suite-135",
      "category": "bathrooms",
      "title": "Westminster 135cm Grand Duo Suite",
      "metaTitle": "Westminster 135cm Grand Duo Bathroom Suite | Cabivella UK",
      "metaDescription": "Commanding 1000mm basin console with companion 350mm floor-mounted column in pure architectural satin white.",
      "dimensionsMm": "1000mm console + 350mm tower, 460mm depth",
      "materials": [
          "High-tensile moisture resistant substrate",
          "Vitreous china",
          "Chrome hardware"
      ],
      "finishOptions": [
          "Satin White",
          "Nordic Alabaster",
          "Alpine Matt"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000668234_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000668234_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000668234_2.webp"
      ],
      "description": "Commanding 1000mm basin console with companion 350mm floor-mounted column in pure architectural satin white.",
      "keyFeatures": [
          "Grand master suite proportioning combining central wash station and vertical dry storage",
          "Reinforced ceramic deck with ergonomic contoured basin bowl and integrated overflow",
          "Fully assembled structural carcass pre-glued with dowelled joints for permanent rigidity",
          "Synchronised soft-close drawer slides tested to 80,000 continuous opening cycles"
      ]
  },
  "knightsbridge-noir-135": {
      "slug": "knightsbridge-noir-135",
      "category": "bathrooms",
      "title": "Knightsbridge 135cm Noir Architectural Suite",
      "metaTitle": "Knightsbridge 135cm Noir Bathroom Suite | Black Oak & Ceramic | Cabivella UK",
      "metaDescription": "Dramatic 1000mm base vanity with 350mm storage column in deep architectural obsidian black.",
      "dimensionsMm": "1000mm vanity + 350mm tower, 460mm depth",
      "materials": [
          "Textured black timber composite",
          "Vitreous porcelain",
          "Soft-close dampeners"
      ],
      "finishOptions": [
          "Obsidian Noir",
          "Blackened Oak",
          "Midnight Matt"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000580839_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000580839_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000580839_2.webp",
          "/assets/img/models/real_bathrooms/bath_5000580839_3.webp"
      ],
      "description": "Dramatic 1000mm base vanity with 350mm storage column in deep architectural obsidian black.",
      "keyFeatures": [
          "Obsidian black textured woodgrain finish introducing dramatic chiaroscuro to bathroom walls",
          "Upper mirrored medicine cabinet with concealed bottom finger pull and interior shaver socket cavity",
          "Deep-well vitreous ceramic sink resistant to thermal shock and cosmetic staining",
          "Integrated service void allowing vertical waste and copper supply pipe routing"
      ]
  },
  "marylebone-lumiere-80": {
      "slug": "marylebone-lumiere-80",
      "category": "bathrooms",
      "title": "Marylebone 80cm Lumi\u00e8re LED Demister Vanity",
      "metaTitle": "Marylebone 80cm LED Illuminated Vanity Suite | Cabivella UK",
      "metaDescription": "800mm wall-hung vanity in soft mist grey featuring integrated magnifying LED mirror and companion column.",
      "dimensionsMm": "800mm vanity + 350mm tower, 460mm depth",
      "materials": [
          "Moisture-sealed MR lacquer",
          "Fine sanitaryware ceramic",
          "IP44 LED mirror assembly"
      ],
      "finishOptions": [
          "Mist Grey",
          "Pewter Silk",
          "Silver Fog"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000478362_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000478362_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000478362_2.webp",
          "/assets/img/models/real_bathrooms/bath_5000478362_3.webp"
      ],
      "description": "800mm wall-hung vanity in soft mist grey featuring integrated magnifying LED mirror and companion column.",
      "keyFeatures": [
          "Precision optic magnifying zone built directly into the circular illuminated LED mirror face",
          "Warm mist grey palette creating a calming spa atmosphere in contemporary apartments",
          "Soft-closing doors with integrated silicone bumper pads for whisper-quiet latching",
          "Accommodates tall cosmetic bottles, spare bath linens, and personal wellness appliances"
      ]
  },
  "hampstead-contrast-100": {
      "slug": "hampstead-contrast-100",
      "category": "bathrooms",
      "title": "Hampstead 100cm Contrast Duo Console",
      "metaTitle": "Hampstead 100cm Architectural Contrast Vanity | Cabivella UK",
      "metaDescription": "1000mm two-tone vanity unit pairing crisp white porcelain with deep graphite framework and linen tower.",
      "dimensionsMm": "1000mm vanity + 350mm tower, 460mm depth",
      "materials": [
          "Duo-tone moisture barrier board",
          "Glazed ceramic",
          "Full-extension runners"
      ],
      "finishOptions": [
          "White & Anthracite Contrast",
          "Chalk & Iron",
          "Pure White"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000465933_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000465933_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000465933_2.webp",
          "/assets/img/models/real_bathrooms/bath_5000465933_3.webp"
      ],
      "description": "1000mm two-tone vanity unit pairing crisp white porcelain with deep graphite framework and linen tower.",
      "keyFeatures": [
          "Two-tone architectural tension pairing crisp white ceramic basin with deep graphite drawer fronts",
          "Full companion linen tower with dual split compartments for upper toiletries and lower laundry storage",
          "High-grade ceramic basin with wide rear shelf suitable for soap dispensers and toothbrush tumblers",
          "Zero-VOC protective exterior sealant resistant to splashing, steam condensation, and humidity"
      ]
  },
  "fitzrovia-noir-90": {
      "slug": "fitzrovia-noir-90",
      "category": "bathrooms",
      "title": "Fitzrovia 90cm Noir Master Console & Tower",
      "metaTitle": "Fitzrovia 90cm Noir Vanity Suite | Master Suite Storage | Cabivella UK",
      "metaDescription": "900mm wide vanity console in matt obsidian black with matching wall-mounted storage armoire.",
      "dimensionsMm": "900mm vanity + 350mm column, 470mm depth",
      "materials": [
          "Deep black textured board",
          "Heavy ceramic bowl",
          "Brushed metal hardware"
      ],
      "finishOptions": [
          "Matt Obsidian Noir",
          "Smoked Carbon",
          "Gunmetal Black"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000252445_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000252445_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000252445_2.webp",
          "/assets/img/models/real_bathrooms/bath_5000252445_3.webp"
      ],
      "description": "900mm wide vanity console in matt obsidian black with matching wall-mounted storage armoire.",
      "keyFeatures": [
          "Tactile matt black exterior impervious to steamy bathroom humidity and cosmetic contact",
          "Asymmetrical storage architecture combining wide slide-out drawers and dedicated cupboard space",
          "Generous 900mm ceramic basin providing ample perimeter clearance for bathroom rituals",
          "Solid metal handles finished in brushed matt graphite for unified understated aesthetics"
      ]
  },
  "bloomsbury-minimalist-80": {
      "slug": "bloomsbury-minimalist-80",
      "category": "bathrooms",
      "title": "Bloomsbury 80cm Minimalist Vanity Unit",
      "metaTitle": "Bloomsbury 80cm Minimalist Bathroom Vanity | Cabivella UK",
      "metaDescription": "800mm floating single-console vanity in architectural matt charcoal with integrated soft-close drawers.",
      "dimensionsMm": "800mm width, 450mm depth, 480mm height",
      "materials": [
          "Matt architectural lacquer",
          "Sanitary porcelain",
          "Galvanized steel plates"
      ],
      "finishOptions": [
          "Architectural Charcoal",
          "Graphite Silk",
          "Storm Grey"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5000076563_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5000076563_1.webp",
          "/assets/img/models/real_bathrooms/bath_5000076563_2.webp",
          "/assets/img/models/real_bathrooms/bath_5000076563_3.webp"
      ],
      "description": "800mm floating single-console vanity in architectural matt charcoal with integrated soft-close drawers.",
      "keyFeatures": [
          "Tailored for streamlined en-suites without visual clutter or bulky floor pedestals",
          "Dual horizontal soft-close drawers with precision mitred front edges",
          "Direct plumbing trap relief engineered into the top drawer structure",
          "Supplied with heavy-gauge galvanised hanging plates and wall fixings"
      ]
  },
  "richmond-legnano-100": {
      "slug": "richmond-legnano-100",
      "category": "bathrooms",
      "title": "Richmond 100cm Legnano Warm Oak Vanity",
      "metaTitle": "Richmond 100cm Legnano Timber Vanity Console | Cabivella UK",
      "metaDescription": "1000mm floating vanity console in natural Legnano warm timber grain with dual deep soft-close drawers.",
      "dimensionsMm": "1000mm width, 460mm depth, 500mm height",
      "materials": [
          "Embossed Legnano timber foil",
          "Vitreous china",
          "Zinc-coated steel runners"
      ],
      "finishOptions": [
          "Legnano Warm Oak",
          "Honey Timber",
          "Nordic Dune"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003366016_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003366016_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003366016_2.webp",
          "/assets/img/models/real_bathrooms/bath_5003366016_3.webp"
      ],
      "description": "1000mm floating vanity console in natural Legnano warm timber grain with dual deep soft-close drawers.",
      "keyFeatures": [
          "Organic warm Legnano woodgrain texture replicating authentic Nordic saw-cut timber planks",
          "Large 1000mm ceramic deck with deep central basin bowl and rear tap platform",
          "Two high-capacity drawers on heavy-duty underfloor concealed runners",
          "Antibacterial, easy-clean glazed surface resistant to limescale and water marking"
      ]
  },
  "pimlico-navaro-100": {
      "slug": "pimlico-navaro-100",
      "category": "bathrooms",
      "title": "Pimlico 100cm Navaro Walnut Console",
      "metaTitle": "Pimlico 100cm Navaro Walnut Vanity Console | Cabivella UK",
      "metaDescription": "1000mm rich Navaro walnut vanity console paired with sleek white ceramic mono-basin.",
      "dimensionsMm": "1000mm width, 460mm depth, 500mm height",
      "materials": [
          "Navaro walnut grain laminate",
          "Glazed ceramic",
          "Silent hydraulic slides"
      ],
      "finishOptions": [
          "Navaro Walnut",
          "Smoked Hazel",
          "Dark Cognac"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003365984_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003365984_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003365984_2.webp",
          "/assets/img/models/real_bathrooms/bath_5003365984_3.webp"
      ],
      "description": "1000mm rich Navaro walnut vanity console paired with sleek white ceramic mono-basin.",
      "keyFeatures": [
          "Deep Navaro walnut rich brown tone bringing grounding organic warmth to stone and porcelain tiled walls",
          "Substantial double drawer system with silent hydraulic damper closing mechanism",
          "Integrated overflow fitting and standard UK 1\u00bc inch waste compatibility",
          "Rigid pre-assembled cabinet construction ready for direct wall suspension"
      ]
  },
  "greenwich-cherry-100": {
      "slug": "greenwich-cherry-100",
      "category": "bathrooms",
      "title": "Greenwich 100cm Morgana Cherry Vanity Suite",
      "metaTitle": "Greenwich 100cm Morgana Cherry Bathroom Suite | Cabivella UK",
      "metaDescription": "1000mm vanity in rich Morgana cherry grain with coordinating LED illuminated mirror.",
      "dimensionsMm": "1000mm width, 460mm depth, 520mm height",
      "materials": [
          "Morgana cherry grain veneer",
          "Glazed porcelain",
          "Integrated LED mirror"
      ],
      "finishOptions": [
          "Morgana Cherry",
          "Warm Chestnut",
          "Auburn Timber"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003365970_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003365970_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003365970_2.webp",
          "/assets/img/models/real_bathrooms/bath_5003365970_3.webp"
      ],
      "description": "1000mm vanity in rich Morgana cherry grain with coordinating LED illuminated mirror.",
      "keyFeatures": [
          "Distinguished Morgana cherry wood tone evoking classic English estate joinery in a sleek modern form",
          "Coordinating landscape mirror with warm perimeter LED illumination strip",
          "High-rebound ceramic basin with smooth radius curves for effortless daily cleaning",
          "Drawer facades mitred seamlessly to ensure grain alignment across the unit face"
      ]
  },
  "chiswick-walnut-100": {
      "slug": "chiswick-walnut-100",
      "category": "bathrooms",
      "title": "Chiswick 100cm Artisanal Walnut Vanity Suite",
      "metaTitle": "Chiswick 100cm Artisanal Walnut Bathroom Suite | Cabivella UK",
      "metaDescription": "1000mm artisanal walnut timber grain vanity console with companion mirror cabinet.",
      "dimensionsMm": "1000mm width, 460mm depth, 520mm height",
      "materials": [
          "Artisanal walnut composite",
          "Fine vitreous china",
          "Concealed steel tracks"
      ],
      "finishOptions": [
          "Artisanal Walnut",
          "Smoked Mocha",
          "Espresso Timber"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003365882_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003365882_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003365882_2.webp",
          "/assets/img/models/real_bathrooms/bath_5003365882_3.webp"
      ],
      "description": "1000mm artisanal walnut timber grain vanity console with companion mirror cabinet.",
      "keyFeatures": [
          "Authentic knot-matched walnut grain finish with tactile textured grain embossing",
          "Generous internal capacity suited for full family toiletries and bulk towel storage",
          "High-gloss ceramic vanity top with precision factory-ground level bottom",
          "Tested under continuous 95% relative humidity conditions without dimensional distortion"
      ]
  },
  "wimbledon-clay-80": {
      "slug": "wimbledon-clay-80",
      "category": "bathrooms",
      "title": "Wimbledon 80cm Terracotta Clay Floating Console",
      "metaTitle": "Wimbledon 80cm Terracotta Clay Bathroom Vanity | Cabivella UK",
      "metaDescription": "800mm designer vanity unit in warm earthy terracotta clay with twin soft-close drawer storage.",
      "dimensionsMm": "800mm width, 460mm depth, 500mm height",
      "materials": [
          "Terracotta clay matt lacquer",
          "Fine vitreous porcelain",
          "Hydraulic drawer dampeners"
      ],
      "finishOptions": [
          "Terracotta Clay",
          "Warm Ochre",
          "Tuscan Sand"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003358804_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003358804_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003358804_2.webp"
      ],
      "description": "800mm designer vanity unit in warm earthy terracotta clay with twin soft-close drawer storage.",
      "keyFeatures": [
          "Sophisticated warm earthy clay matt tone inspired by Mediterranean ceramic ateliers and British spa retreats",
          "Dual tiered drawers featuring concealed handle recesses on the lower drawer edge",
          "Integrated slim-rim porcelain washbasin designed for single-lever mixer taps",
          "Anti-bacterial seal around all exposed carcass edges ensuring lifelong water resistance"
      ]
  },
  "dulwich-compact-65": {
      "slug": "dulwich-compact-65",
      "category": "bathrooms",
      "title": "Dulwich 65cm Cloakroom Vanity Suite",
      "metaTitle": "Dulwich 65cm Cloakroom Bathroom Suite | Cabivella UK",
      "metaDescription": "650mm compact bathroom console with mirror and ceramic basin tailored for secondary bathrooms.",
      "dimensionsMm": "650mm width, 400mm depth, 480mm height",
      "materials": [
          "Moisture-resistant white gloss board",
          "Sanitary ceramic",
          "Polished plate mirror"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "Chalk Silk",
          "Classic Alabaster"
      ],
      "installationScope": "Supplied fully assembled with heavy-duty concealed hanging brackets, integrated ceramic basin, and waste cut-out routing.",
      "image": "/assets/img/models/real_bathrooms/bath_5003552041_1.webp",
      "gallery": [
          "/assets/img/models/real_bathrooms/bath_5003552041_1.webp",
          "/assets/img/models/real_bathrooms/bath_5003552041_2.webp"
      ],
      "description": "650mm compact bathroom console with mirror and ceramic basin tailored for secondary bathrooms.",
      "keyFeatures": [
          "Ultra-compact 650mm width designed specifically for British cloakrooms and guest suites",
          "Twin-door base cabinet offering uninterrupted plumbing access and tall bottle storage",
          "Includes frameless matching 650mm polished-edge plate glass wall mirror",
          "Vitreous ceramic basin with integrated overflow and tap-hole platform"
      ]
  },
  "mayfair-barista-armoire-154": {
      "slug": "mayfair-barista-armoire-154",
      "category": "coffee-stations",
      "title": "Mayfair Barista Armoire 154cm",
      "metaTitle": "Mayfair Barista Armoire 154cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1540mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1540mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_01.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_01.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Mayfair Barista Armoire 154cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "belgravia-grand-beverage-247": {
      "slug": "belgravia-grand-beverage-247",
      "category": "coffee-stations",
      "title": "Belgravia Grand Beverage Suite 247cm",
      "metaTitle": "Belgravia Grand Beverage Suite 247cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 2470mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "2470mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_02.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_02.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Belgravia Grand Beverage Suite 247cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "kensington-larder-coffee-184": {
      "slug": "kensington-larder-coffee-184",
      "category": "coffee-stations",
      "title": "Kensington Larder & Coffee Station 184cm",
      "metaTitle": "Kensington Larder & Coffee Station 184cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1840mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1840mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_03.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_03.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Kensington Larder & Coffee Station 184cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "cotswold-dualtower-pantry-217": {
      "slug": "cotswold-dualtower-pantry-217",
      "category": "coffee-stations",
      "title": "Cotswold Dual-Tower Breakfast Pantry 217cm",
      "metaTitle": "Cotswold Dual-Tower Breakfast Pantry 217cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 2170mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "2170mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_04.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_04.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Cotswold Dual-Tower Breakfast Pantry 217cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "st-james-fluted-glass-station": {
      "slug": "st-james-fluted-glass-station",
      "category": "coffee-stations",
      "title": "St James Fluted Glass Coffee Credenza",
      "metaTitle": "St James Fluted Glass Coffee Credenza | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1400mm width, 420mm depth, 1820mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1400mm width, 420mm depth, 1820mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_05.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_05.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the St James Fluted Glass Coffee Credenza integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "richmond-vitrine-barista-niche": {
      "slug": "richmond-vitrine-barista-niche",
      "category": "coffee-stations",
      "title": "Richmond Vitrine Barista Niche",
      "metaTitle": "Richmond Vitrine Barista Niche | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1200mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1200mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_06.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_06.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Richmond Vitrine Barista Niche integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "chelsea-illuminated-coffee-armoire": {
      "slug": "chelsea-illuminated-coffee-armoire",
      "category": "coffee-stations",
      "title": "Chelsea Illuminated Coffee Armoire",
      "metaTitle": "Chelsea Illuminated Coffee Armoire | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1500mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1500mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_07.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_07.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Chelsea Illuminated Coffee Armoire integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "westminster-fluted-display-larder": {
      "slug": "westminster-fluted-display-larder",
      "category": "coffee-stations",
      "title": "Westminster Fluted Display Larder",
      "metaTitle": "Westminster Fluted Display Larder | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 600mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "600mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_08.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_08.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Westminster Fluted Display Larder integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "knightsbridge-drawer-stack-station": {
      "slug": "knightsbridge-drawer-stack-station",
      "category": "coffee-stations",
      "title": "Knightsbridge Drawer Stack Coffee Station",
      "metaTitle": "Knightsbridge Drawer Stack Coffee Station | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1200mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1200mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_09.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_09.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Knightsbridge Drawer Stack Coffee Station integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "marylebone-tridoor-coffee-cabinet": {
      "slug": "marylebone-tridoor-coffee-cabinet",
      "category": "coffee-stations",
      "title": "Marylebone Tri-Door Coffee Cabinet",
      "metaTitle": "Marylebone Tri-Door Coffee Cabinet | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 900mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "900mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_10.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_10.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Marylebone Tri-Door Coffee Cabinet integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "hampstead-linear-barista-90": {
      "slug": "hampstead-linear-barista-90",
      "category": "coffee-stations",
      "title": "Hampstead Linear Barista Station 90cm",
      "metaTitle": "Hampstead Linear Barista Station 90cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 900mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "900mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_11.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_11.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Hampstead Linear Barista Station 90cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "fitzrovia-compact-credenza-90": {
      "slug": "fitzrovia-compact-credenza-90",
      "category": "coffee-stations",
      "title": "Fitzrovia Compact Coffee Credenza 90cm",
      "metaTitle": "Fitzrovia Compact Coffee Credenza 90cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 900mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "900mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_12.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_12.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Fitzrovia Compact Coffee Credenza 90cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "bloomsbury-quaddoor-pantry-120": {
      "slug": "bloomsbury-quaddoor-pantry-120",
      "category": "coffee-stations",
      "title": "Bloomsbury Quad-Door Coffee Pantry 120cm",
      "metaTitle": "Bloomsbury Quad-Door Coffee Pantry 120cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1200mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1200mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_13.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_13.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Bloomsbury Quad-Door Coffee Pantry 120cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "pimlico-grand-culinary-210": {
      "slug": "pimlico-grand-culinary-210",
      "category": "coffee-stations",
      "title": "Pimlico Grand Culinary Station 210cm",
      "metaTitle": "Pimlico Grand Culinary Station 210cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 2100mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "2100mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_14.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_14.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Pimlico Grand Culinary Station 210cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "greenwich-twindoor-breakfast-cabinet": {
      "slug": "greenwich-twindoor-breakfast-cabinet",
      "category": "coffee-stations",
      "title": "Greenwich Twin-Door Breakfast Cabinet",
      "metaTitle": "Greenwich Twin-Door Breakfast Cabinet | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 800mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "800mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_15.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_15.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Greenwich Twin-Door Breakfast Cabinet integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "chiswick-utility-beverage-120": {
      "slug": "chiswick-utility-beverage-120",
      "category": "coffee-stations",
      "title": "Chiswick Utility Beverage Larder 120cm",
      "metaTitle": "Chiswick Utility Beverage Larder 120cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1200mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1200mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_16.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_16.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Chiswick Utility Beverage Larder 120cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "wimbledon-petite-coffee-90": {
      "slug": "wimbledon-petite-coffee-90",
      "category": "coffee-stations",
      "title": "Wimbledon Petite Coffee Niche 90cm",
      "metaTitle": "Wimbledon Petite Coffee Niche 90cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 900mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "900mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_17.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_17.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Wimbledon Petite Coffee Niche 90cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "dulwich-multimodule-pantry": {
      "slug": "dulwich-multimodule-pantry",
      "category": "coffee-stations",
      "title": "Dulwich Multi-Module Breakfast Pantry",
      "metaTitle": "Dulwich Multi-Module Breakfast Pantry | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1600mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1600mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_18.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_18.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Dulwich Multi-Module Breakfast Pantry integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "battersea-integrated-larder-unit": {
      "slug": "battersea-integrated-larder-unit",
      "category": "coffee-stations",
      "title": "Battersea Integrated Larder & Coffee Unit",
      "metaTitle": "Battersea Integrated Larder & Coffee Unit | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1750mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1750mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_19.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_19.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Battersea Integrated Larder & Coffee Unit integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "highgate-dualsection-credenza-180": {
      "slug": "highgate-dualsection-credenza-180",
      "category": "coffee-stations",
      "title": "Highgate Dual-Section Beverage Credenza 180cm",
      "metaTitle": "Highgate Dual-Section Beverage Credenza 180cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1800mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1800mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_20.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_20.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Highgate Dual-Section Beverage Credenza 180cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "islington-grand-vitrine-suite": {
      "slug": "islington-grand-vitrine-suite",
      "category": "coffee-stations",
      "title": "Islington Grand Vitrine Coffee Suite",
      "metaTitle": "Islington Grand Vitrine Coffee Suite | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1900mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1900mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_21.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_21.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Islington Grand Vitrine Coffee Suite integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "putney-ambient-beverage-armoire": {
      "slug": "putney-ambient-beverage-armoire",
      "category": "coffee-stations",
      "title": "Putney Ambient Beverage Armoire",
      "metaTitle": "Putney Ambient Beverage Armoire | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1300mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1300mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_22.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_22.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Putney Ambient Beverage Armoire integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "barnes-radiator-coffee-console-130": {
      "slug": "barnes-radiator-coffee-console-130",
      "category": "coffee-stations",
      "title": "Barnes Radiator Cover Coffee Console 130cm",
      "metaTitle": "Barnes Radiator Cover Coffee Console 130cm | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1300mm width, 220mm depth, 850mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1300mm width, 220mm depth, 850mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_23.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_23.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Barnes Radiator Cover Coffee Console 130cm integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "clapham-tripledoor-morning-station": {
      "slug": "clapham-tripledoor-morning-station",
      "category": "coffee-stations",
      "title": "Clapham Triple-Door Morning Station",
      "metaTitle": "Clapham Triple-Door Morning Station | Luxury Coffee Stations | Cabivella UK",
      "metaDescription": "Bespoke 1400mm width, 400mm depth, 1800mm height architectural beverage cabinetry featuring integrated LED task illumination, appliance prep surface, and concealed storage.",
      "dimensionsMm": "1400mm width, 400mm depth, 1800mm height",
      "materials": [
          "Melamine-faced moisture resistant timber core",
          "Thermal foil sealed exterior fascia",
          "Integrated diffused warm-white LED channel",
          "Heavy-duty nickel-plated hinges and soft-close slides"
      ],
      "finishOptions": [
          "Alpine Matt White",
          "Warm Cashmere",
          "Nordic White & Oak Niche"
      ],
      "installationScope": "Supplied modular with pre-machined cable grommets, adjustable levelling plinths, and integrated low-voltage LED transformer.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_24.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_24.webp"
      ],
      "description": "Engineered for dedicated domestic barista rituals, the Clapham Triple-Door Morning Station integrates spacious espresso machine clearance, dedicated glassware shelving, and generous closed pantry storage.",
      "keyFeatures": [
          "Recessed warm-white LED illumination spotlighting beverage preparation",
          "High-capacity lower cupboards accommodating cups, beans, syrups, and appliances",
          "Durable wipe-clean laminated preparation surfaces resistant to steam and heat",
          "Pre-routed service channels for unobtrusive coffee machine and grinder power cables"
      ]
  },
  "kensington-4door-wardrobe": {
      "slug": "kensington-4door-wardrobe",
      "category": "fitted-storage",
      "title": "Kensington 4-Door Fitted Wardrobe",
      "metaTitle": "Kensington 4-Door Fitted Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 1800mm width, 600mm depth, 2200mm height fitted wardrobe featuring 4 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "1800mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_01_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_01_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_01_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_01_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_01_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Kensington 4-Door Fitted Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 4 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "belgravia-5door-wardrobe": {
      "slug": "belgravia-5door-wardrobe",
      "category": "fitted-storage",
      "title": "Belgravia 5-Door Architectural Robe",
      "metaTitle": "Belgravia 5-Door Architectural Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 600mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_02_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_02_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_02_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_02_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_02_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Belgravia 5-Door Architectural Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "mayfair-6door-wardrobe": {
      "slug": "mayfair-6door-wardrobe",
      "category": "fitted-storage",
      "title": "Mayfair 6-Door Master Dressing Suite",
      "metaTitle": "Mayfair 6-Door Master Dressing Suite | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 600mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_03_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_03_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_03_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_03_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_03_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Mayfair 6-Door Master Dressing Suite pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "cotswold-6door-mirrored-robe": {
      "slug": "cotswold-6door-mirrored-robe",
      "category": "fitted-storage",
      "title": "Cotswold 6-Door Mirrored Armoire",
      "metaTitle": "Cotswold 6-Door Mirrored Armoire | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 600mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_04_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_04_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_04_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_04_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_04_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Cotswold 6-Door Mirrored Armoire pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "chelsea-5door-wardrobe": {
      "slug": "chelsea-5door-wardrobe",
      "category": "fitted-storage",
      "title": "Chelsea 5-Door Contemporary Robe",
      "metaTitle": "Chelsea 5-Door Contemporary Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 600mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_05_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_05_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_05_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_05_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_05_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Chelsea 5-Door Contemporary Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "st-james-6door-wardrobe": {
      "slug": "st-james-6door-wardrobe",
      "category": "fitted-storage",
      "title": "St James 6-Door Linear Wardrobe",
      "metaTitle": "St James 6-Door Linear Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2600mm width, 580mm depth, 2180mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2600mm width, 580mm depth, 2180mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_06_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_06_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_06_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_06_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_06_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the St James 6-Door Linear Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "richmond-5door-wardrobe": {
      "slug": "richmond-5door-wardrobe",
      "category": "fitted-storage",
      "title": "Richmond 5-Door Classic Wardrobe",
      "metaTitle": "Richmond 5-Door Classic Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2150mm width, 580mm depth, 2180mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2150mm width, 580mm depth, 2180mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_07_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_07_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_07_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_07_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_07_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Richmond 5-Door Classic Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "westminster-4door-wardrobe": {
      "slug": "westminster-4door-wardrobe",
      "category": "fitted-storage",
      "title": "Westminster 4-Door Compact Robe",
      "metaTitle": "Westminster 4-Door Compact Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 1750mm width, 580mm depth, 2180mm height fitted wardrobe featuring 4 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "1750mm width, 580mm depth, 2180mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_08_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_08_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_08_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_08_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_08_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Westminster 4-Door Compact Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 4 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "knightsbridge-5door-robe": {
      "slug": "knightsbridge-5door-robe",
      "category": "fitted-storage",
      "title": "Knightsbridge 5-Door Fluted Wardrobe",
      "metaTitle": "Knightsbridge 5-Door Fluted Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2200mm width, 590mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2200mm width, 590mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_09_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_09_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_09_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_09_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_09_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Knightsbridge 5-Door Fluted Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "marylebone-6door-robe": {
      "slug": "marylebone-6door-robe",
      "category": "fitted-storage",
      "title": "Marylebone 6-Door Fluted Master Robe",
      "metaTitle": "Marylebone 6-Door Fluted Master Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2650mm width, 590mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2650mm width, 590mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_10_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_10_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_10_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_10_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_10_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Marylebone 6-Door Fluted Master Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "hampstead-5door-artisan-robe": {
      "slug": "hampstead-5door-artisan-robe",
      "category": "fitted-storage",
      "title": "Hampstead 5-Door Artisan Wardrobe",
      "metaTitle": "Hampstead 5-Door Artisan Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 600mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_11_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_11_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_11_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_11_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_11_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Hampstead 5-Door Artisan Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "fitzrovia-6door-artisan-robe": {
      "slug": "fitzrovia-6door-artisan-robe",
      "category": "fitted-storage",
      "title": "Fitzrovia 6-Door Artisan Wardrobe",
      "metaTitle": "Fitzrovia 6-Door Artisan Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 600mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_12_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_12_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_12_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_12_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_12_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Fitzrovia 6-Door Artisan Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "bloomsbury-5door-armoire": {
      "slug": "bloomsbury-5door-armoire",
      "category": "fitted-storage",
      "title": "Bloomsbury 5-Door Porcelain Armoire",
      "metaTitle": "Bloomsbury 5-Door Porcelain Armoire | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2200mm width, 600mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2200mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_13_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_13_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_13_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_13_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_13_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Bloomsbury 5-Door Porcelain Armoire pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "pimlico-6door-master-robe": {
      "slug": "pimlico-6door-master-robe",
      "category": "fitted-storage",
      "title": "Pimlico 6-Door Porcelain Master Robe",
      "metaTitle": "Pimlico 6-Door Porcelain Master Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2650mm width, 600mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2650mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_14_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_14_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_14_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_14_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_14_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Pimlico 6-Door Porcelain Master Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "greenwich-6door-minimalist-robe": {
      "slug": "greenwich-6door-minimalist-robe",
      "category": "fitted-storage",
      "title": "Greenwich 6-Door Minimalist Robe",
      "metaTitle": "Greenwich 6-Door Minimalist Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2600mm width, 580mm depth, 2150mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2600mm width, 580mm depth, 2150mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_15_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_15_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_15_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_15_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_15_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Greenwich 6-Door Minimalist Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "chiswick-5door-minimalist-robe": {
      "slug": "chiswick-5door-minimalist-robe",
      "category": "fitted-storage",
      "title": "Chiswick 5-Door Minimalist Robe",
      "metaTitle": "Chiswick 5-Door Minimalist Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2150mm width, 580mm depth, 2150mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2150mm width, 580mm depth, 2150mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_16_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_16_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_16_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_16_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_16_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Chiswick 5-Door Minimalist Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "wimbledon-4door-minimalist-robe": {
      "slug": "wimbledon-4door-minimalist-robe",
      "category": "fitted-storage",
      "title": "Wimbledon 4-Door Minimalist Robe",
      "metaTitle": "Wimbledon 4-Door Minimalist Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 1720mm width, 580mm depth, 2150mm height fitted wardrobe featuring 4 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "1720mm width, 580mm depth, 2150mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_17_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_17_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_17_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_17_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_17_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Wimbledon 4-Door Minimalist Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 4 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "dulwich-6door-boheme-suite": {
      "slug": "dulwich-6door-boheme-suite",
      "category": "fitted-storage",
      "title": "Dulwich 6-Door Boheme Dressing Suite",
      "metaTitle": "Dulwich 6-Door Boheme Dressing Suite | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 600mm depth, 2220mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 600mm depth, 2220mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_18_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_18_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_18_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_18_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_18_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Dulwich 6-Door Boheme Dressing Suite pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "battersea-5door-boheme-suite": {
      "slug": "battersea-5door-boheme-suite",
      "category": "fitted-storage",
      "title": "Battersea 5-Door Boheme Dressing Suite",
      "metaTitle": "Battersea 5-Door Boheme Dressing Suite | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 600mm depth, 2220mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 600mm depth, 2220mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_19_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_19_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_19_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_19_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_19_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Battersea 5-Door Boheme Dressing Suite pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "highgate-6door-acoustic-robe": {
      "slug": "highgate-6door-acoustic-robe",
      "category": "fitted-storage",
      "title": "Highgate 6-Door Grand Acoustic Robe",
      "metaTitle": "Highgate 6-Door Grand Acoustic Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 620mm depth, 2250mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 620mm depth, 2250mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_20_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_20_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_20_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_20_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_20_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Highgate 6-Door Grand Acoustic Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "islington-5door-acoustic-robe": {
      "slug": "islington-5door-acoustic-robe",
      "category": "fitted-storage",
      "title": "Islington 5-Door Grand Acoustic Robe",
      "metaTitle": "Islington 5-Door Grand Acoustic Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 620mm depth, 2250mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 620mm depth, 2250mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_21_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_21_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_21_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_21_img3.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_21_img4.webp"
      ],
      "description": "Designed for generous bedroom storage, the Islington 5-Door Grand Acoustic Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "putney-sliding-wardrobe": {
      "slug": "putney-sliding-wardrobe",
      "category": "fitted-storage",
      "title": "Putney Full-Length Sliding Wardrobe",
      "metaTitle": "Putney Full-Length Sliding Wardrobe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2400mm width, 680mm depth, 2220mm height fitted wardrobe featuring Sliding doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2400mm width, 680mm depth, 2220mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_22_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_22_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_22_img2.webp"
      ],
      "description": "Designed for generous bedroom storage, the Putney Full-Length Sliding Wardrobe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with Sliding doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "barnes-6door-integrated-robe": {
      "slug": "barnes-6door-integrated-robe",
      "category": "fitted-storage",
      "title": "Barnes 6-Door Integrated Master Robe",
      "metaTitle": "Barnes 6-Door Integrated Master Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2700mm width, 600mm depth, 2200mm height fitted wardrobe featuring 6 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2700mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_23_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_23_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_23_img2.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_23_img3.webp"
      ],
      "description": "Designed for generous bedroom storage, the Barnes 6-Door Integrated Master Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 6 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "clapham-5door-integrated-robe": {
      "slug": "clapham-5door-integrated-robe",
      "category": "fitted-storage",
      "title": "Clapham 5-Door Integrated Master Robe",
      "metaTitle": "Clapham 5-Door Integrated Master Robe | Made-to-Measure Fitted Wardrobes | Cabivella UK",
      "metaDescription": "Bespoke 2250mm width, 600mm depth, 2200mm height fitted wardrobe featuring 5 doors, integrated soft-close runners, interior drawer chests, and LED hanger rails.",
      "dimensionsMm": "2250mm width, 600mm depth, 2200mm height",
      "materials": [
          "Heavy-duty moisture-resistant engineered timber carcass",
          "Matt polyurethane lacquered door fascias",
          "Concealed 110-degree soft-close clip hinges",
          "Anodised aluminium integrated hanging rails and shelf supports"
      ],
      "finishOptions": [
          "Warm Putty & Fluted Glass",
          "Smoked Oak & Champagne Mirror",
          "Pure Matt Chalk"
      ],
      "installationScope": "Supplied modular with adjustable floor-to-ceiling filler scribes, interior LED downlighting, and heavy-duty concealed hanging tracks.",
      "image": "/assets/img/models/real_fitted_storage/wardrobe_24_img1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/wardrobe_24_img1.webp",
          "/assets/img/models/real_fitted_storage/wardrobe_24_img2.webp"
      ],
      "description": "Designed for generous bedroom storage, the Clapham 5-Door Integrated Master Robe pairs architectural exterior lines with versatile internal hanging, shelf, and drawer configurations.",
      "keyFeatures": [
          "Configured with 5 doors for comprehensive bedroom garment organisation",
          "Internal drawer chests with soft-closing undermount runners",
          "Full-length integrated mirrored door option for dressing convenience",
          "Zero-VOC durable surface finishes resistant to scratches and everyday wear"
      ]
  },
  "mayfair-executive-suite-310": {
      "slug": "mayfair-executive-suite-310",
      "category": "kitchens",
      "title": "Mayfair 310cm Executive Culinary Suite",
      "metaTitle": "Mayfair 310cm Executive Culinary Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 3100mm span, 600mm base depth, 900mm counter height luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "3100mm span, 600mm base depth, 900mm counter height",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002886738_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002886738_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886738_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886738_3.webp"
      ],
      "description": "The Mayfair 310cm Executive Culinary Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "belgravia-chef-monolith-310": {
      "slug": "belgravia-chef-monolith-310",
      "category": "kitchens",
      "title": "Belgravia 310cm Chef Monolith Kitchen",
      "metaTitle": "Belgravia 310cm Chef Monolith Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 3100mm span, 600mm base depth, 900mm counter height luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "3100mm span, 600mm base depth, 900mm counter height",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002886726_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002886726_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886726_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886726_3.webp"
      ],
      "description": "The Belgravia 310cm Chef Monolith Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "kensington-linear-artisan-310": {
      "slug": "kensington-linear-artisan-310",
      "category": "kitchens",
      "title": "Kensington 310cm Linear Artisan Kitchen",
      "metaTitle": "Kensington 310cm Linear Artisan Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 3100mm span, 600mm base depth, 900mm counter height luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "3100mm span, 600mm base depth, 900mm counter height",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002886596_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002886596_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886596_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002886596_3.webp"
      ],
      "description": "The Kensington 310cm Linear Artisan Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "cotswold-highgloss-corner-410": {
      "slug": "cotswold-highgloss-corner-410",
      "category": "kitchens",
      "title": "Cotswold 410x240cm High-Gloss Corner Suite",
      "metaTitle": "Cotswold 410x240cm High-Gloss Corner Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600107_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600107_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600107_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600107_3.webp"
      ],
      "description": "The Cotswold 410x240cm High-Gloss Corner Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "richmond-charcoal-corner-410": {
      "slug": "richmond-charcoal-corner-410",
      "category": "kitchens",
      "title": "Richmond 410x240cm Charcoal High-Gloss Kitchen",
      "metaTitle": "Richmond 410x240cm Charcoal High-Gloss Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600116_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600116_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600116_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600116_3.webp"
      ],
      "description": "The Richmond 410x240cm Charcoal High-Gloss Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "westminster-alabaster-corner-410": {
      "slug": "westminster-alabaster-corner-410",
      "category": "kitchens",
      "title": "Westminster 410x240cm Alabaster Corner Suite",
      "metaTitle": "Westminster 410x240cm Alabaster Corner Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002599734_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002599734_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599734_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599734_3.webp"
      ],
      "description": "The Westminster 410x240cm Alabaster Corner Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "knightsbridge-slate-corner-410": {
      "slug": "knightsbridge-slate-corner-410",
      "category": "kitchens",
      "title": "Knightsbridge 410x240cm Slate Corner Suite",
      "metaTitle": "Knightsbridge 410x240cm Slate Corner Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002599731_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002599731_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599731_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599731_3.webp"
      ],
      "description": "The Knightsbridge 410x240cm Slate Corner Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "chelsea-master-corner-400": {
      "slug": "chelsea-master-corner-400",
      "category": "kitchens",
      "title": "Chelsea 400x240cm Master Corner Kitchen",
      "metaTitle": "Chelsea 400x240cm Master Corner Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598452_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598452_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598452_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598452_3.webp"
      ],
      "description": "The Chelsea 400x240cm Master Corner Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "st-james-corner-kitchen-400": {
      "slug": "st-james-corner-kitchen-400",
      "category": "kitchens",
      "title": "St James 400x240cm Architectural Corner Kitchen",
      "metaTitle": "St James 400x240cm Architectural Corner Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600636_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600636_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600636_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600636_3.webp"
      ],
      "description": "The St James 400x240cm Architectural Corner Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "marylebone-dualtone-corner-400": {
      "slug": "marylebone-dualtone-corner-400",
      "category": "kitchens",
      "title": "Marylebone 400x240cm Dual-Tone Corner Suite",
      "metaTitle": "Marylebone 400x240cm Dual-Tone Corner Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598446_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598446_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598446_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598446_3.webp"
      ],
      "description": "The Marylebone 400x240cm Dual-Tone Corner Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "hampstead-tower-pantry-400": {
      "slug": "hampstead-tower-pantry-400",
      "category": "kitchens",
      "title": "Hampstead 400x240cm Tower Pantry Kitchen",
      "metaTitle": "Hampstead 400x240cm Tower Pantry Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598757_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598757_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598757_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598757_3.webp"
      ],
      "description": "The Hampstead 400x240cm Tower Pantry Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "fitzrovia-linear-tower-400": {
      "slug": "fitzrovia-linear-tower-400",
      "category": "kitchens",
      "title": "Fitzrovia 400x240cm Linear Tower Suite",
      "metaTitle": "Fitzrovia 400x240cm Linear Tower Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598748_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598748_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598748_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598748_3.webp"
      ],
      "description": "The Fitzrovia 400x240cm Linear Tower Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "bloomsbury-deepdrawer-kitchen-400": {
      "slug": "bloomsbury-deepdrawer-kitchen-400",
      "category": "kitchens",
      "title": "Bloomsbury 400x240cm Deep Drawer Kitchen",
      "metaTitle": "Bloomsbury 400x240cm Deep Drawer Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600457_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600457_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600457_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600457_3.webp"
      ],
      "description": "The Bloomsbury 400x240cm Deep Drawer Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "pimlico-anthracite-accent-400": {
      "slug": "pimlico-anthracite-accent-400",
      "category": "kitchens",
      "title": "Pimlico 400x240cm Anthracite Accent Kitchen",
      "metaTitle": "Pimlico 400x240cm Anthracite Accent Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600644_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600644_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600644_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600644_3.webp"
      ],
      "description": "The Pimlico 400x240cm Anthracite Accent Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "greenwich-tallappliance-suite-410": {
      "slug": "greenwich-tallappliance-suite-410",
      "category": "kitchens",
      "title": "Greenwich 410x240cm Tall Appliance Suite",
      "metaTitle": "Greenwich 410x240cm Tall Appliance Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002601192_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002601192_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002601192_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002601192_3.webp"
      ],
      "description": "The Greenwich 410x240cm Tall Appliance Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "chiswick-ergonomic-corner-400": {
      "slug": "chiswick-ergonomic-corner-400",
      "category": "kitchens",
      "title": "Chiswick 400x240cm Ergonomic L-Kitchen",
      "metaTitle": "Chiswick 400x240cm Ergonomic L-Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600467_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600467_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600467_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600467_3.webp"
      ],
      "description": "The Chiswick 400x240cm Ergonomic L-Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "wimbledon-purewhite-gloss-400": {
      "slug": "wimbledon-purewhite-gloss-400",
      "category": "kitchens",
      "title": "Wimbledon 400x240cm Pure White Gloss Kitchen",
      "metaTitle": "Wimbledon 400x240cm Pure White Gloss Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600283_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600283_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600283_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600283_3.webp"
      ],
      "description": "The Wimbledon 400x240cm Pure White Gloss Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "dulwich-seamless-jpull-400": {
      "slug": "dulwich-seamless-jpull-400",
      "category": "kitchens",
      "title": "Dulwich 400x240cm Seamless J-Pull Kitchen",
      "metaTitle": "Dulwich 400x240cm Seamless J-Pull Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002600279_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002600279_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600279_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002600279_3.webp"
      ],
      "description": "The Dulwich 400x240cm Seamless J-Pull Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "battersea-compact-corner-395": {
      "slug": "battersea-compact-corner-395",
      "category": "kitchens",
      "title": "Battersea 395x240cm Urban Compact Corner",
      "metaTitle": "Battersea 395x240cm Urban Compact Corner | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 3950mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "3950mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598767_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598767_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598767_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598767_3.webp"
      ],
      "description": "The Battersea 395x240cm Urban Compact Corner represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "highgate-doubletower-kitchen-400": {
      "slug": "highgate-doubletower-kitchen-400",
      "category": "kitchens",
      "title": "Highgate 400x240cm Double Tower Kitchen",
      "metaTitle": "Highgate 400x240cm Double Tower Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002599490_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002599490_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599490_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599490_3.webp"
      ],
      "description": "The Highgate 400x240cm Double Tower Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "islington-fluted-accent-400": {
      "slug": "islington-fluted-accent-400",
      "category": "kitchens",
      "title": "Islington 400x240cm Fluted Accent Suite",
      "metaTitle": "Islington 400x240cm Fluted Accent Suite | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598606_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598606_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598606_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598606_3.webp"
      ],
      "description": "The Islington 400x240cm Fluted Accent Suite represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "putney-modernist-handleless-400": {
      "slug": "putney-modernist-handleless-400",
      "category": "kitchens",
      "title": "Putney 400x240cm Modernist Handleless Kitchen",
      "metaTitle": "Putney 400x240cm Modernist Handleless Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002598781_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002598781_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598781_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002598781_3.webp"
      ],
      "description": "The Putney 400x240cm Modernist Handleless Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "barnes-grandhorizon-kitchen-410": {
      "slug": "barnes-grandhorizon-kitchen-410",
      "category": "kitchens",
      "title": "Barnes 410x240cm Grand Horizon Kitchen",
      "metaTitle": "Barnes 410x240cm Grand Horizon Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4100mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4100mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002601320_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002601320_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002601320_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002601320_3.webp"
      ],
      "description": "The Barnes 410x240cm Grand Horizon Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },
  "clapham-minimalist-pantry-400": {
      "slug": "clapham-minimalist-pantry-400",
      "category": "kitchens",
      "title": "Clapham 400x240cm Minimalist Pantry Kitchen",
      "metaTitle": "Clapham 400x240cm Minimalist Pantry Kitchen | Luxury Bespoke Kitchens | Cabivella UK",
      "metaDescription": "Made-to-measure 4000mm x 2400mm L-shaped run, 600mm base depth luxury British kitchen featuring integrated tall larder towers, high-gloss lacquered fascias, and soft-closing drawer runners.",
      "dimensionsMm": "4000mm x 2400mm L-shaped run, 600mm base depth",
      "materials": [
          "High-density moisture-resistant MDF carcass",
          "High-gloss polyurethane mirror finish",
          "Solid stone worktop compatible substrate",
          "Heavy-duty concealed undermount drawer runners"
      ],
      "finishOptions": [
          "Pristine Gloss White",
          "High-Gloss Anthracite",
          "Duo-Tone Alabaster & Slate"
      ],
      "installationScope": "Supplied with fully assembled carcasses, adjustable plinth feet, Blum soft-close hardware, and pre-machined service voids.",
      "image": "/assets/img/models/real_kitchens/kitchen_5002599480_1.webp",
      "gallery": [
          "/assets/img/models/real_kitchens/kitchen_5002599480_1.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599480_2.webp",
          "/assets/img/models/real_kitchens/kitchen_5002599480_3.webp"
      ],
      "description": "The Clapham 400x240cm Minimalist Pantry Kitchen represents the pinnacle of modern architectural joinery, blending vast continuous preparation runs with full-height pantry towers.",
      "keyFeatures": [
          "Continuous handleless profile for sleek architectural minimalism",
          "Full-extension heavy-load pan drawers tested to 50kg dynamic rating",
          "Dedicated tall appliance housing and integrated microwave voids",
          "Anti-bacterial wipe-clean surfaces impervious to kitchen steam and moisture"
      ]
  },

  "mayfair-4-door-master-wardrobe-01": {
      "slug": "mayfair-4-door-master-wardrobe-01",
      "category": "fitted-storage",
      "title": "Mayfair 4-Door Integrated Wardrobe",
      "metaTitle": "Mayfair 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22JUL2004ATAD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22JUL2004ATAD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2004ATAD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2004ATAD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2004ATAD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Mayfair 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "belgravia-5-door-master-wardrobe-02": {
      "slug": "belgravia-5-door-master-wardrobe-02",
      "category": "fitted-storage",
      "title": "Belgravia 5-Door Integrated Wardrobe",
      "metaTitle": "Belgravia 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22VCA2005KGKG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22VCA2005KGKG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2005KGKG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2005KGKG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2005KGKG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Belgravia 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "kensington-6-door-master-wardrobe-03": {
      "slug": "kensington-6-door-master-wardrobe-03",
      "category": "fitted-storage",
      "title": "Kensington 6-Door Integrated Wardrobe",
      "metaTitle": "Kensington 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22VCA2006KGKG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22VCA2006KGKG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2006KGKG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2006KGKG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VCA2006KGKG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Kensington 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "chelsea-6-door-master-wardrobe-04": {
      "slug": "chelsea-6-door-master-wardrobe-04",
      "category": "fitted-storage",
      "title": "Chelsea 6-Door Integrated Wardrobe",
      "metaTitle": "Chelsea 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22OLA2006QFQG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22OLA2006QFQG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2006QFQG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2006QFQG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2006QFQG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Chelsea 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "knightsbridge-5-door-master-wardrobe-05": {
      "slug": "knightsbridge-5-door-master-wardrobe-05",
      "category": "fitted-storage",
      "title": "Knightsbridge 5-Door Integrated Wardrobe",
      "metaTitle": "Knightsbridge 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22OLA2005QFQG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22OLA2005QFQG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2005QFQG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2005QFQG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22OLA2005QFQG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Knightsbridge 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "westminster-6-door-master-wardrobe-06": {
      "slug": "westminster-6-door-master-wardrobe-06",
      "category": "fitted-storage",
      "title": "Westminster 6-Door Integrated Wardrobe",
      "metaTitle": "Westminster 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BLO2006FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BLO2006FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2006FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2006FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2006FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Westminster 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "marylebone-5-door-master-wardrobe-07": {
      "slug": "marylebone-5-door-master-wardrobe-07",
      "category": "fitted-storage",
      "title": "Marylebone 5-Door Integrated Wardrobe",
      "metaTitle": "Marylebone 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BLO2005FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BLO2005FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2005FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2005FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2005FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Marylebone 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "fitzrovia-4-door-master-wardrobe-08": {
      "slug": "fitzrovia-4-door-master-wardrobe-08",
      "category": "fitted-storage",
      "title": "Fitzrovia 4-Door Integrated Wardrobe",
      "metaTitle": "Fitzrovia 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BLO2004FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BLO2004FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2004FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2004FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BLO2004FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Fitzrovia 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "bloomsbury-5-door-master-wardrobe-09": {
      "slug": "bloomsbury-5-door-master-wardrobe-09",
      "category": "fitted-storage",
      "title": "Bloomsbury 5-Door Integrated Wardrobe",
      "metaTitle": "Bloomsbury 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22VAL2005HZPD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22VAL2005HZPD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2005HZPD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2005HZPD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2005HZPD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Bloomsbury 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "hampstead-6-door-master-wardrobe-10": {
      "slug": "hampstead-6-door-master-wardrobe-10",
      "category": "fitted-storage",
      "title": "Hampstead 6-Door Integrated Wardrobe",
      "metaTitle": "Hampstead 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22VAL2006HZPD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22VAL2006HZPD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2006HZPD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2006HZPD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22VAL2006HZPD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Hampstead 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "highgate-5-door-master-wardrobe-11": {
      "slug": "highgate-5-door-master-wardrobe-11",
      "category": "fitted-storage",
      "title": "Highgate 5-Door Integrated Wardrobe",
      "metaTitle": "Highgate 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22SEM2005SLBP_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22SEM2005SLBP_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2005SLBP_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2005SLBP_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2005SLBP_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Highgate 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "islington-6-door-master-wardrobe-12": {
      "slug": "islington-6-door-master-wardrobe-12",
      "category": "fitted-storage",
      "title": "Islington 6-Door Integrated Wardrobe",
      "metaTitle": "Islington 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22SEM2006SLBP_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22SEM2006SLBP_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2006SLBP_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2006SLBP_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22SEM2006SLBP_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Islington 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "richmond-5-door-master-wardrobe-13": {
      "slug": "richmond-5-door-master-wardrobe-13",
      "category": "fitted-storage",
      "title": "Richmond 5-Door Integrated Wardrobe",
      "metaTitle": "Richmond 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22ROS2005FSFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22ROS2005FSFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2005FSFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2005FSFS_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2005FSFS_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Richmond 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "chiswick-6-door-master-wardrobe-14": {
      "slug": "chiswick-6-door-master-wardrobe-14",
      "category": "fitted-storage",
      "title": "Chiswick 6-Door Integrated Wardrobe",
      "metaTitle": "Chiswick 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22ROS2006FSFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22ROS2006FSFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2006FSFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2006FSFS_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ROS2006FSFS_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Chiswick 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "wimbledon-6-door-master-wardrobe-15": {
      "slug": "wimbledon-6-door-master-wardrobe-15",
      "category": "fitted-storage",
      "title": "Wimbledon 6-Door Integrated Wardrobe",
      "metaTitle": "Wimbledon 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EWA2006MWMW_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EWA2006MWMW_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2006MWMW_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2006MWMW_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2006MWMW_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Wimbledon 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "barnes-5-door-master-wardrobe-16": {
      "slug": "barnes-5-door-master-wardrobe-16",
      "category": "fitted-storage",
      "title": "Barnes 5-Door Integrated Wardrobe",
      "metaTitle": "Barnes 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EWA2005MWMW_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EWA2005MWMW_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2005MWMW_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2005MWMW_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2005MWMW_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Barnes 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "putney-4-door-master-wardrobe-17": {
      "slug": "putney-4-door-master-wardrobe-17",
      "category": "fitted-storage",
      "title": "Putney 4-Door Integrated Wardrobe",
      "metaTitle": "Putney 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EWA2004MWMW_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EWA2004MWMW_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2004MWMW_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2004MWMW_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EWA2004MWMW_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Putney 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "battersea-6-door-master-wardrobe-18": {
      "slug": "battersea-6-door-master-wardrobe-18",
      "category": "fitted-storage",
      "title": "Battersea 6-Door Integrated Wardrobe",
      "metaTitle": "Battersea 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BEM2006FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BEM2006FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2006FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2006FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2006FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Battersea 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "clapham-5-door-master-wardrobe-19": {
      "slug": "clapham-5-door-master-wardrobe-19",
      "category": "fitted-storage",
      "title": "Clapham 5-Door Integrated Wardrobe",
      "metaTitle": "Clapham 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BEM2005FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BEM2005FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2005FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2005FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2005FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Clapham 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "dulwich-6-door-master-wardrobe-20": {
      "slug": "dulwich-6-door-master-wardrobe-20",
      "category": "fitted-storage",
      "title": "Dulwich 6-Door Integrated Wardrobe",
      "metaTitle": "Dulwich 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LUC2006BSPG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LUC2006BSPG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2006BSPG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2006BSPG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2006BSPG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Dulwich 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "greenwich-5-door-master-wardrobe-21": {
      "slug": "greenwich-5-door-master-wardrobe-21",
      "category": "fitted-storage",
      "title": "Greenwich 5-Door Integrated Wardrobe",
      "metaTitle": "Greenwich 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LUC2005BSPG_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LUC2005BSPG_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2005BSPG_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2005BSPG_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LUC2005BSPG_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Greenwich 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "pimlico-architectural-master-wardrobe-22": {
      "slug": "pimlico-architectural-master-wardrobe-22",
      "category": "fitted-storage",
      "title": "Pimlico Architectural Integrated Wardrobe",
      "metaTitle": "Pimlico Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22AES2001GZFY_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22AES2001GZFY_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22AES2001GZFY_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Pimlico Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "st-james-6-door-master-wardrobe-23": {
      "slug": "st-james-6-door-master-wardrobe-23",
      "category": "fitted-storage",
      "title": "St James 6-Door Integrated Wardrobe",
      "metaTitle": "St James 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22AES2006GZFY_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22AES2006GZFY_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22AES2006GZFY_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22AES2006GZFY_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the St James 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "cotswold-5-door-master-wardrobe-24": {
      "slug": "cotswold-5-door-master-wardrobe-24",
      "category": "fitted-storage",
      "title": "Cotswold 5-Door Integrated Wardrobe",
      "metaTitle": "Cotswold 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22AES2005GZFY_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22AES2005GZFY_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22AES2005GZFY_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Cotswold 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "holborn-architectural-master-wardrobe-25": {
      "slug": "holborn-architectural-master-wardrobe-25",
      "category": "fitted-storage",
      "title": "Holborn Architectural Integrated Wardrobe",
      "metaTitle": "Holborn Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22MTD2001TDZA_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22MTD2001TDZA_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2001TDZA_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2001TDZA_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Holborn Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "soho-5-door-master-wardrobe-26": {
      "slug": "soho-5-door-master-wardrobe-26",
      "category": "fitted-storage",
      "title": "Soho 5-Door Integrated Wardrobe",
      "metaTitle": "Soho 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22MTD2005TDZA_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22MTD2005TDZA_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2005TDZA_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2005TDZA_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Soho 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "primrose-6-door-master-wardrobe-27": {
      "slug": "primrose-6-door-master-wardrobe-27",
      "category": "fitted-storage",
      "title": "Primrose 6-Door Integrated Wardrobe",
      "metaTitle": "Primrose 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2062TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2062TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2062TRFS_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Primrose 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "belsize-6-door-master-wardrobe-28": {
      "slug": "belsize-6-door-master-wardrobe-28",
      "category": "fitted-storage",
      "title": "Belsize 6-Door Integrated Wardrobe",
      "metaTitle": "Belsize 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2061TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2061TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2061TRFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2061TRFS_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Belsize 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "holland-park-5-door-master-wardrobe-29": {
      "slug": "holland-park-5-door-master-wardrobe-29",
      "category": "fitted-storage",
      "title": "Holland Park 5-Door Integrated Wardrobe",
      "metaTitle": "Holland Park 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2052TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2052TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2052TRFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2052TRFS_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Holland Park 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "notting-hill-5-door-master-wardrobe-30": {
      "slug": "notting-hill-5-door-master-wardrobe-30",
      "category": "fitted-storage",
      "title": "Notting Hill 5-Door Integrated Wardrobe",
      "metaTitle": "Notting Hill 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2051TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2051TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2051TRFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2051TRFS_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Notting Hill 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "paddington-6-door-master-wardrobe-31": {
      "slug": "paddington-6-door-master-wardrobe-31",
      "category": "fitted-storage",
      "title": "Paddington 6-Door Integrated Wardrobe",
      "metaTitle": "Paddington 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LZO2006HZFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LZO2006HZFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2006HZFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2006HZFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2006HZFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Paddington 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "bayswater-5-door-master-wardrobe-32": {
      "slug": "bayswater-5-door-master-wardrobe-32",
      "category": "fitted-storage",
      "title": "Bayswater 5-Door Integrated Wardrobe",
      "metaTitle": "Bayswater 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LZO2005HZFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LZO2005HZFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2005HZFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2005HZFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2005HZFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Bayswater 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "regent-architectural-master-wardrobe-33": {
      "slug": "regent-architectural-master-wardrobe-33",
      "category": "fitted-storage",
      "title": "Regent Architectural Integrated Wardrobe",
      "metaTitle": "Regent Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22CCL2001FDQR_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22CCL2001FDQR_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2001FDQR_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2001FDQR_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2001FDQR_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Regent Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "piccadilly-6-door-master-wardrobe-34": {
      "slug": "piccadilly-6-door-master-wardrobe-34",
      "category": "fitted-storage",
      "title": "Piccadilly 6-Door Integrated Wardrobe",
      "metaTitle": "Piccadilly 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22STU2006BMQR_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22STU2006BMQR_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22STU2006BMQR_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22STU2006BMQR_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Piccadilly 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "strand-5-door-master-wardrobe-35": {
      "slug": "strand-5-door-master-wardrobe-35",
      "category": "fitted-storage",
      "title": "Strand 5-Door Integrated Wardrobe",
      "metaTitle": "Strand 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22STU2005BMQR_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22STU2005BMQR_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22STU2005BMQR_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Strand 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "aldwych-architectural-master-wardrobe-36": {
      "slug": "aldwych-architectural-master-wardrobe-36",
      "category": "fitted-storage",
      "title": "Aldwych Architectural Integrated Wardrobe",
      "metaTitle": "Aldwych Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSFS_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Aldwych Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "temple-6-door-master-wardrobe-37": {
      "slug": "temple-6-door-master-wardrobe-37",
      "category": "fitted-storage",
      "title": "Temple 6-Door Integrated Wardrobe",
      "metaTitle": "Temple 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSKJ_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSKJ_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSKJ_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSKJ_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Temple 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "clerkenwell-6-door-master-wardrobe-38": {
      "slug": "clerkenwell-6-door-master-wardrobe-38",
      "category": "fitted-storage",
      "title": "Clerkenwell 6-Door Integrated Wardrobe",
      "metaTitle": "Clerkenwell 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2006FSFS_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Clerkenwell 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "shoreditch-5-door-master-wardrobe-39": {
      "slug": "shoreditch-5-door-master-wardrobe-39",
      "category": "fitted-storage",
      "title": "Shoreditch 5-Door Integrated Wardrobe",
      "metaTitle": "Shoreditch 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSFS_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Shoreditch 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "spitalfields-5-door-master-wardrobe-40": {
      "slug": "spitalfields-5-door-master-wardrobe-40",
      "category": "fitted-storage",
      "title": "Spitalfields 5-Door Integrated Wardrobe",
      "metaTitle": "Spitalfields 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSKJ_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSKJ_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSKJ_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2005FSKJ_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Spitalfields 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "wapping-architectural-master-wardrobe-41": {
      "slug": "wapping-architectural-master-wardrobe-41",
      "category": "fitted-storage",
      "title": "Wapping Architectural Integrated Wardrobe",
      "metaTitle": "Wapping Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSKJ_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSKJ_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSKJ_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22PSA2001FSKJ_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Wapping Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "canary-4-door-master-wardrobe-42": {
      "slug": "canary-4-door-master-wardrobe-42",
      "category": "fitted-storage",
      "title": "Canary 4-Door Integrated Wardrobe",
      "metaTitle": "Canary 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BEM2004FTFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BEM2004FTFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2004FTFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2004FTFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BEM2004FTFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Canary 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "blackheath-4-door-master-wardrobe-43": {
      "slug": "blackheath-4-door-master-wardrobe-43",
      "category": "fitted-storage",
      "title": "Blackheath 4-Door Integrated Wardrobe",
      "metaTitle": "Blackheath 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2040TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2040TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2040TRFS_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2040TRFS_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Blackheath 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "wandsworth-4-door-master-wardrobe-44": {
      "slug": "wandsworth-4-door-master-wardrobe-44",
      "category": "fitted-storage",
      "title": "Wandsworth 4-Door Integrated Wardrobe",
      "metaTitle": "Wandsworth 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22EKL2004TRFS_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22EKL2004TRFS_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22EKL2004TRFS_2.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Wandsworth 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "fulham-4-door-master-wardrobe-45": {
      "slug": "fulham-4-door-master-wardrobe-45",
      "category": "fitted-storage",
      "title": "Fulham 4-Door Integrated Wardrobe",
      "metaTitle": "Fulham 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22BET2004PDNO_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22BET2004PDNO_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BET2004PDNO_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22BET2004PDNO_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Fulham 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "kew-4-door-master-wardrobe-46": {
      "slug": "kew-4-door-master-wardrobe-46",
      "category": "fitted-storage",
      "title": "Kew 4-Door Integrated Wardrobe",
      "metaTitle": "Kew 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LVB2004FDGF_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LVB2004FDGF_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LVB2004FDGF_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LVB2004FDGF_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Kew 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "twickenham-5-door-master-wardrobe-47": {
      "slug": "twickenham-5-door-master-wardrobe-47",
      "category": "fitted-storage",
      "title": "Twickenham 5-Door Integrated Wardrobe",
      "metaTitle": "Twickenham 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22JUL2005ATAD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22JUL2005ATAD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2005ATAD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2005ATAD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2005ATAD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Twickenham 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "ealing-5-door-master-wardrobe-48": {
      "slug": "ealing-5-door-master-wardrobe-48",
      "category": "fitted-storage",
      "title": "Ealing 5-Door Integrated Wardrobe",
      "metaTitle": "Ealing 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LGN2005AFAD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LGN2005AFAD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LGN2005AFAD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LGN2005AFAD_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Ealing 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "harrow-5-door-master-wardrobe-49": {
      "slug": "harrow-5-door-master-wardrobe-49",
      "category": "fitted-storage",
      "title": "Harrow 5-Door Integrated Wardrobe",
      "metaTitle": "Harrow 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22ARS20052V2V_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22ARS20052V2V_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20052V2V_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20052V2V_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20052V2V_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Harrow 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "dulwich-village-5-door-master-wardrobe-50": {
      "slug": "dulwich-village-5-door-master-wardrobe-50",
      "category": "fitted-storage",
      "title": "Dulwich Village 5-Door Integrated Wardrobe",
      "metaTitle": "Dulwich Village 5-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 5-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (5-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22CCL2005FDQR_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22CCL2005FDQR_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2005FDQR_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2005FDQR_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2005FDQR_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Dulwich Village 5-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 5-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "kingston-6-door-master-wardrobe-51": {
      "slug": "kingston-6-door-master-wardrobe-51",
      "category": "fitted-storage",
      "title": "Kingston 6-Door Integrated Wardrobe",
      "metaTitle": "Kingston 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22JUL2006ATAD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22JUL2006ATAD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2006ATAD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2006ATAD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22JUL2006ATAD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Kingston 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "green-park-6-door-master-wardrobe-52": {
      "slug": "green-park-6-door-master-wardrobe-52",
      "category": "fitted-storage",
      "title": "Green Park 6-Door Integrated Wardrobe",
      "metaTitle": "Green Park 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LGN2006AFAD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LGN2006AFAD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LGN2006AFAD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LGN2006AFAD_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Green Park 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "victoria-6-door-master-wardrobe-53": {
      "slug": "victoria-6-door-master-wardrobe-53",
      "category": "fitted-storage",
      "title": "Victoria 6-Door Integrated Wardrobe",
      "metaTitle": "Victoria 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22ARS20062V2V_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22ARS20062V2V_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20062V2V_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20062V2V_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20062V2V_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Victoria 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "knights-6-door-master-wardrobe-54": {
      "slug": "knights-6-door-master-wardrobe-54",
      "category": "fitted-storage",
      "title": "Knights 6-Door Integrated Wardrobe",
      "metaTitle": "Knights 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22MTD2006TDZA_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22MTD2006TDZA_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2006TDZA_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22MTD2006TDZA_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Knights 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "hyde-park-6-door-master-wardrobe-55": {
      "slug": "hyde-park-6-door-master-wardrobe-55",
      "category": "fitted-storage",
      "title": "Hyde Park 6-Door Integrated Wardrobe",
      "metaTitle": "Hyde Park 6-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 6-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (6-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22CCL2006FDQR_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22CCL2006FDQR_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2006FDQR_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2006FDQR_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22CCL2006FDQR_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Hyde Park 6-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 6-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "borough-architectural-master-wardrobe-56": {
      "slug": "borough-architectural-master-wardrobe-56",
      "category": "fitted-storage",
      "title": "Borough Architectural Integrated Wardrobe",
      "metaTitle": "Borough Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22ARS20012V2V_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22ARS20012V2V_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20012V2V_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20012V2V_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22ARS20012V2V_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Borough Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "greenwich-park-architectural-master-wardrobe-57": {
      "slug": "greenwich-park-architectural-master-wardrobe-57",
      "category": "fitted-storage",
      "title": "Greenwich Park Architectural Integrated Wardrobe",
      "metaTitle": "Greenwich Park Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LZO2001HZFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LZO2001HZFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2001HZFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2001HZFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2001HZFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Greenwich Park Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "st-pancras-4-door-master-wardrobe-58": {
      "slug": "st-pancras-4-door-master-wardrobe-58",
      "category": "fitted-storage",
      "title": "St Pancras 4-Door Integrated Wardrobe",
      "metaTitle": "St Pancras 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LZO2004HZFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LZO2004HZFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2004HZFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2004HZFD_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LZO2004HZFD_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the St Pancras 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "covent-garden-architectural-master-wardrobe-59": {
      "slug": "covent-garden-architectural-master-wardrobe-59",
      "category": "fitted-storage",
      "title": "Covent Garden Architectural Integrated Wardrobe",
      "metaTitle": "Covent Garden Architectural Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke architectural fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (Architectural), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LVB2009FDGF_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LVB2009FDGF_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LVB2009FDGF_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LVB2009FDGF_3.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LVB2009FDGF_4.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Covent Garden Architectural Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height architectural configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "southwark-4-door-master-wardrobe-60": {
      "slug": "southwark-4-door-master-wardrobe-60",
      "category": "fitted-storage",
      "title": "Southwark 4-Door Integrated Wardrobe",
      "metaTitle": "Southwark 4-Door Integrated Wardrobe | Cabivella UK",
      "metaDescription": "Bespoke 4-door fitted wardrobe with integrated soft-close mechanisms, interior lighting, and tailored British joinery.",
      "dimensionsMm": "Bespoke width (4-Door), 600mm carcass depth, made-to-measure ceiling height",
      "materials": [
          "High-density moisture-resistant MR-MDF core",
          "Solid European Ash interior drawer components",
          "Concealed German soft-close hydraulic hinge systems"
      ],
      "finishOptions": [
          "Chalk White Silk",
          "Heritage Pumice",
          "Oxford Midnight Blue",
          "Natural Smoked Oak",
          "Muted Sage Lacquer"
      ],
      "installationScope": "Delivered fully finished in protective crates; ready for turnkey assembly by your appointed specialist.",
      "image": "/assets/img/models/real_fitted_storage/mondi_22LDA2004FDFD_1.webp",
      "gallery": [
          "/assets/img/models/real_fitted_storage/mondi_22LDA2004FDFD_1.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LDA2004FDFD_2.webp",
          "/assets/img/models/real_fitted_storage/mondi_22LDA2004FDFD_3.webp"
      ],
      "description": "Tailored specifically for generous master dressing rooms and elegant British bedrooms, the Southwark 4-Door Integrated Wardrobe combines flawless architectural proportions with intelligent full-extension interior storage.",
      "keyFeatures": [
          "Full-height 4-door configuration with balanced shadow-gap reveals",
          "Concealed Blum/Hettich 110-degree soft-close integrated hinges",
          "Dovetailed solid timber internal drawer stacks with velvet accessory trays"
      ]
  },
  "mayfair-artisan-beverage-credenza-01": {
      "slug": "mayfair-artisan-beverage-credenza-01",
      "category": "coffee-stations",
      "title": "Mayfair 154cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Mayfair 154cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 154cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "154cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_01.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_01.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Mayfair 154cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "belgravia-artisan-beverage-credenza-02": {
      "slug": "belgravia-artisan-beverage-credenza-02",
      "category": "coffee-stations",
      "title": "Belgravia 247cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Belgravia 247cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 247cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "247cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_02.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_02.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Belgravia 247cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "kensington-artisan-beverage-credenza-03": {
      "slug": "kensington-artisan-beverage-credenza-03",
      "category": "coffee-stations",
      "title": "Kensington 184cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Kensington 184cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 184cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "184cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_03.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_03.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Kensington 184cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "chelsea-artisan-beverage-credenza-04": {
      "slug": "chelsea-artisan-beverage-credenza-04",
      "category": "coffee-stations",
      "title": "Chelsea 217cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Chelsea 217cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 217cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "217cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_04.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_04.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Chelsea 217cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "knightsbridge-artisan-beverage-credenza-05": {
      "slug": "knightsbridge-artisan-beverage-credenza-05",
      "category": "coffee-stations",
      "title": "Knightsbridge 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Knightsbridge 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_05.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_05.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Knightsbridge 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "westminster-artisan-beverage-credenza-06": {
      "slug": "westminster-artisan-beverage-credenza-06",
      "category": "coffee-stations",
      "title": "Westminster 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Westminster 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_06.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_06.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Westminster 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "marylebone-artisan-beverage-credenza-07": {
      "slug": "marylebone-artisan-beverage-credenza-07",
      "category": "coffee-stations",
      "title": "Marylebone 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Marylebone 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_07.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_07.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Marylebone 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "fitzrovia-artisan-beverage-credenza-08": {
      "slug": "fitzrovia-artisan-beverage-credenza-08",
      "category": "coffee-stations",
      "title": "Fitzrovia 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Fitzrovia 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_08.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_08.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Fitzrovia 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "bloomsbury-artisan-beverage-credenza-09": {
      "slug": "bloomsbury-artisan-beverage-credenza-09",
      "category": "coffee-stations",
      "title": "Bloomsbury 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Bloomsbury 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_09.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_09.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Bloomsbury 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "hampstead-artisan-beverage-credenza-10": {
      "slug": "hampstead-artisan-beverage-credenza-10",
      "category": "coffee-stations",
      "title": "Hampstead 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Hampstead 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_10.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_10.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Hampstead 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "highgate-artisan-beverage-credenza-11": {
      "slug": "highgate-artisan-beverage-credenza-11",
      "category": "coffee-stations",
      "title": "Highgate 90cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Highgate 90cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 90cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "90cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_11.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_11.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Highgate 90cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "islington-artisan-beverage-credenza-12": {
      "slug": "islington-artisan-beverage-credenza-12",
      "category": "coffee-stations",
      "title": "Islington 90cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Islington 90cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 90cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "90cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_12.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_12.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Islington 90cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "richmond-artisan-beverage-credenza-13": {
      "slug": "richmond-artisan-beverage-credenza-13",
      "category": "coffee-stations",
      "title": "Richmond 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Richmond 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_13.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_13.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Richmond 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "chiswick-artisan-beverage-credenza-14": {
      "slug": "chiswick-artisan-beverage-credenza-14",
      "category": "coffee-stations",
      "title": "Chiswick 210cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Chiswick 210cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 210cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "210cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_14.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_14.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Chiswick 210cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "wimbledon-artisan-beverage-credenza-15": {
      "slug": "wimbledon-artisan-beverage-credenza-15",
      "category": "coffee-stations",
      "title": "Wimbledon 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Wimbledon 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_15.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_15.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Wimbledon 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "barnes-artisan-beverage-credenza-16": {
      "slug": "barnes-artisan-beverage-credenza-16",
      "category": "coffee-stations",
      "title": "Barnes 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Barnes 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_16.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_16.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Barnes 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "putney-artisan-beverage-credenza-17": {
      "slug": "putney-artisan-beverage-credenza-17",
      "category": "coffee-stations",
      "title": "Putney 90cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Putney 90cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 90cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "90cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_17.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_17.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Putney 90cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "battersea-artisan-beverage-credenza-18": {
      "slug": "battersea-artisan-beverage-credenza-18",
      "category": "coffee-stations",
      "title": "Battersea 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Battersea 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_18.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_18.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Battersea 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "clapham-artisan-beverage-credenza-19": {
      "slug": "clapham-artisan-beverage-credenza-19",
      "category": "coffee-stations",
      "title": "Clapham 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Clapham 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_19.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_19.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Clapham 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "dulwich-artisan-beverage-credenza-20": {
      "slug": "dulwich-artisan-beverage-credenza-20",
      "category": "coffee-stations",
      "title": "Dulwich 180cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Dulwich 180cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 180cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "180cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_20.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_20.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Dulwich 180cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "greenwich-artisan-beverage-credenza-21": {
      "slug": "greenwich-artisan-beverage-credenza-21",
      "category": "coffee-stations",
      "title": "Greenwich 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Greenwich 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_21.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_21.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Greenwich 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "pimlico-artisan-beverage-credenza-22": {
      "slug": "pimlico-artisan-beverage-credenza-22",
      "category": "coffee-stations",
      "title": "Pimlico 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Pimlico 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_22.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_22.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Pimlico 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "st-james-artisan-beverage-credenza-23": {
      "slug": "st-james-artisan-beverage-credenza-23",
      "category": "coffee-stations",
      "title": "St James 130cm Bespoke Coffee Station Cabinet",
      "metaTitle": "St James 130cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 130cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "130cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_23.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_23.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the St James 130cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "cotswold-artisan-beverage-credenza-24": {
      "slug": "cotswold-artisan-beverage-credenza-24",
      "category": "coffee-stations",
      "title": "Cotswold 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Cotswold 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_24.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_24.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Cotswold 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "holborn-artisan-beverage-credenza-25": {
      "slug": "holborn-artisan-beverage-credenza-25",
      "category": "coffee-stations",
      "title": "Holborn 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Holborn 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_25.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_25.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Holborn 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "soho-artisan-beverage-credenza-26": {
      "slug": "soho-artisan-beverage-credenza-26",
      "category": "coffee-stations",
      "title": "Soho 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Soho 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_26.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_26.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Soho 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "primrose-artisan-beverage-credenza-27": {
      "slug": "primrose-artisan-beverage-credenza-27",
      "category": "coffee-stations",
      "title": "Primrose 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Primrose 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_27.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_27.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Primrose 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "belsize-artisan-beverage-credenza-28": {
      "slug": "belsize-artisan-beverage-credenza-28",
      "category": "coffee-stations",
      "title": "Belsize 90cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Belsize 90cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 90cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "90cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_28.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_28.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Belsize 90cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "holland-park-artisan-beverage-credenza-29": {
      "slug": "holland-park-artisan-beverage-credenza-29",
      "category": "coffee-stations",
      "title": "Holland Park 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Holland Park 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_29.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_29.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Holland Park 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "notting-hill-artisan-beverage-credenza-30": {
      "slug": "notting-hill-artisan-beverage-credenza-30",
      "category": "coffee-stations",
      "title": "Notting Hill 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Notting Hill 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_30.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_30.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Notting Hill 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "paddington-artisan-beverage-credenza-31": {
      "slug": "paddington-artisan-beverage-credenza-31",
      "category": "coffee-stations",
      "title": "Paddington 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Paddington 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_31.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_31.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Paddington 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "bayswater-artisan-beverage-credenza-32": {
      "slug": "bayswater-artisan-beverage-credenza-32",
      "category": "coffee-stations",
      "title": "Bayswater 180cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Bayswater 180cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 180cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "180cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_32.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_32.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Bayswater 180cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "regent-artisan-beverage-credenza-33": {
      "slug": "regent-artisan-beverage-credenza-33",
      "category": "coffee-stations",
      "title": "Regent 90cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Regent 90cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 90cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "90cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_33.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_33.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Regent 90cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "piccadilly-artisan-beverage-credenza-34": {
      "slug": "piccadilly-artisan-beverage-credenza-34",
      "category": "coffee-stations",
      "title": "Piccadilly 60cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Piccadilly 60cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 60cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "60cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_34.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_34.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Piccadilly 60cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "strand-artisan-beverage-credenza-35": {
      "slug": "strand-artisan-beverage-credenza-35",
      "category": "coffee-stations",
      "title": "Strand 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Strand 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_35.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_35.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Strand 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "aldwych-artisan-beverage-credenza-36": {
      "slug": "aldwych-artisan-beverage-credenza-36",
      "category": "coffee-stations",
      "title": "Aldwych 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Aldwych 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_36.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_36.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Aldwych 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "temple-artisan-beverage-credenza-37": {
      "slug": "temple-artisan-beverage-credenza-37",
      "category": "coffee-stations",
      "title": "Temple 110cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Temple 110cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 110cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "110cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_37.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_37.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Temple 110cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "clerkenwell-artisan-beverage-credenza-38": {
      "slug": "clerkenwell-artisan-beverage-credenza-38",
      "category": "coffee-stations",
      "title": "Clerkenwell 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Clerkenwell 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_38.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_38.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Clerkenwell 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "shoreditch-artisan-beverage-credenza-39": {
      "slug": "shoreditch-artisan-beverage-credenza-39",
      "category": "coffee-stations",
      "title": "Shoreditch 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Shoreditch 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_39.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_39.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Shoreditch 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "spitalfields-artisan-beverage-credenza-40": {
      "slug": "spitalfields-artisan-beverage-credenza-40",
      "category": "coffee-stations",
      "title": "Spitalfields 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Spitalfields 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_40.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_40.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Spitalfields 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "wapping-artisan-beverage-credenza-41": {
      "slug": "wapping-artisan-beverage-credenza-41",
      "category": "coffee-stations",
      "title": "Wapping 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Wapping 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_41.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_41.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Wapping 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "canary-artisan-beverage-credenza-42": {
      "slug": "canary-artisan-beverage-credenza-42",
      "category": "coffee-stations",
      "title": "Canary 130cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Canary 130cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 130cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "130cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_42.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_42.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Canary 130cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "blackheath-artisan-beverage-credenza-43": {
      "slug": "blackheath-artisan-beverage-credenza-43",
      "category": "coffee-stations",
      "title": "Blackheath 110cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Blackheath 110cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 110cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "110cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_43.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_43.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Blackheath 110cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "wandsworth-artisan-beverage-credenza-44": {
      "slug": "wandsworth-artisan-beverage-credenza-44",
      "category": "coffee-stations",
      "title": "Wandsworth 110cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Wandsworth 110cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 110cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "110cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_44.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_44.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Wandsworth 110cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "fulham-artisan-beverage-credenza-45": {
      "slug": "fulham-artisan-beverage-credenza-45",
      "category": "coffee-stations",
      "title": "Fulham 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Fulham 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_45.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_45.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Fulham 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "kew-artisan-beverage-credenza-46": {
      "slug": "kew-artisan-beverage-credenza-46",
      "category": "coffee-stations",
      "title": "Kew 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Kew 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_46.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_46.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Kew 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "twickenham-artisan-beverage-credenza-47": {
      "slug": "twickenham-artisan-beverage-credenza-47",
      "category": "coffee-stations",
      "title": "Twickenham 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Twickenham 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_47.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_47.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Twickenham 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "ealing-artisan-beverage-credenza-48": {
      "slug": "ealing-artisan-beverage-credenza-48",
      "category": "coffee-stations",
      "title": "Ealing 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Ealing 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_01.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_01.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Ealing 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "harrow-artisan-beverage-credenza-49": {
      "slug": "harrow-artisan-beverage-credenza-49",
      "category": "coffee-stations",
      "title": "Harrow 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Harrow 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/coffee_station_01.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/coffee_station_01.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Harrow 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "dulwich-village-artisan-beverage-credenza-50": {
      "slug": "dulwich-village-artisan-beverage-credenza-50",
      "category": "coffee-stations",
      "title": "Dulwich Village 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Dulwich Village 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_50.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_50.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Dulwich Village 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "kingston-artisan-beverage-credenza-51": {
      "slug": "kingston-artisan-beverage-credenza-51",
      "category": "coffee-stations",
      "title": "Kingston 45cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Kingston 45cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 45cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "45cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_51.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_51.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Kingston 45cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "green-park-artisan-beverage-credenza-52": {
      "slug": "green-park-artisan-beverage-credenza-52",
      "category": "coffee-stations",
      "title": "Green Park 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Green Park 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_52.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_52.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Green Park 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "victoria-artisan-beverage-credenza-53": {
      "slug": "victoria-artisan-beverage-credenza-53",
      "category": "coffee-stations",
      "title": "Victoria 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Victoria 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_53.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_53.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Victoria 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "knights-artisan-beverage-credenza-54": {
      "slug": "knights-artisan-beverage-credenza-54",
      "category": "coffee-stations",
      "title": "Knights 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Knights 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_54.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_54.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Knights 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "hyde-park-artisan-beverage-credenza-55": {
      "slug": "hyde-park-artisan-beverage-credenza-55",
      "category": "coffee-stations",
      "title": "Hyde Park 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Hyde Park 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_55.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_55.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Hyde Park 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "borough-artisan-beverage-credenza-56": {
      "slug": "borough-artisan-beverage-credenza-56",
      "category": "coffee-stations",
      "title": "Borough 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Borough 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_56.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_56.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Borough 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "greenwich-park-artisan-beverage-credenza-57": {
      "slug": "greenwich-park-artisan-beverage-credenza-57",
      "category": "coffee-stations",
      "title": "Greenwich Park 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Greenwich Park 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_57.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_57.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Greenwich Park 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "st-pancras-artisan-beverage-credenza-58": {
      "slug": "st-pancras-artisan-beverage-credenza-58",
      "category": "coffee-stations",
      "title": "St Pancras 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "St Pancras 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_58.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_58.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the St Pancras 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "covent-garden-artisan-beverage-credenza-59": {
      "slug": "covent-garden-artisan-beverage-credenza-59",
      "category": "coffee-stations",
      "title": "Covent Garden 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Covent Garden 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_59.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_59.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Covent Garden 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "southwark-artisan-beverage-credenza-60": {
      "slug": "southwark-artisan-beverage-credenza-60",
      "category": "coffee-stations",
      "title": "Southwark 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Southwark 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_60.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_60.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Southwark 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "west-end-artisan-beverage-credenza-61": {
      "slug": "west-end-artisan-beverage-credenza-61",
      "category": "coffee-stations",
      "title": "West End 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "West End 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_61.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_61.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the West End 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "canary-wharf-artisan-beverage-credenza-62": {
      "slug": "canary-wharf-artisan-beverage-credenza-62",
      "category": "coffee-stations",
      "title": "Canary Wharf 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Canary Wharf 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_62.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_62.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Canary Wharf 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "vauxhall-artisan-beverage-credenza-63": {
      "slug": "vauxhall-artisan-beverage-credenza-63",
      "category": "coffee-stations",
      "title": "Vauxhall 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Vauxhall 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_63.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_63.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Vauxhall 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "lambeth-artisan-beverage-credenza-64": {
      "slug": "lambeth-artisan-beverage-credenza-64",
      "category": "coffee-stations",
      "title": "Lambeth 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Lambeth 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_64.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_64.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Lambeth 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "bermondsey-artisan-beverage-credenza-65": {
      "slug": "bermondsey-artisan-beverage-credenza-65",
      "category": "coffee-stations",
      "title": "Bermondsey 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Bermondsey 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_65.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_65.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Bermondsey 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "kennington-artisan-beverage-credenza-66": {
      "slug": "kennington-artisan-beverage-credenza-66",
      "category": "coffee-stations",
      "title": "Kennington 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Kennington 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_66.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_66.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Kennington 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "peckham-artisan-beverage-credenza-67": {
      "slug": "peckham-artisan-beverage-credenza-67",
      "category": "coffee-stations",
      "title": "Peckham 190cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Peckham 190cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 190cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "190cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_67.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_67.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Peckham 190cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "camberwell-artisan-beverage-credenza-68": {
      "slug": "camberwell-artisan-beverage-credenza-68",
      "category": "coffee-stations",
      "title": "Camberwell 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Camberwell 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_68.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_68.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Camberwell 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "brixton-artisan-beverage-credenza-69": {
      "slug": "brixton-artisan-beverage-credenza-69",
      "category": "coffee-stations",
      "title": "Brixton 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Brixton 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_69.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_69.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Brixton 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "streatham-artisan-beverage-credenza-70": {
      "slug": "streatham-artisan-beverage-credenza-70",
      "category": "coffee-stations",
      "title": "Streatham 160cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Streatham 160cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 160cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "160cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_70.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_70.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Streatham 160cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "balham-artisan-beverage-credenza-71": {
      "slug": "balham-artisan-beverage-credenza-71",
      "category": "coffee-stations",
      "title": "Balham 195cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Balham 195cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 195cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "195cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_71.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_71.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Balham 195cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "tooting-artisan-beverage-credenza-72": {
      "slug": "tooting-artisan-beverage-credenza-72",
      "category": "coffee-stations",
      "title": "Tooting 125cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Tooting 125cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 125cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "125cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_72.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_72.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Tooting 125cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "wimbledon-village-artisan-beverage-credenza-73": {
      "slug": "wimbledon-village-artisan-beverage-credenza-73",
      "category": "coffee-stations",
      "title": "Wimbledon Village 160cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Wimbledon Village 160cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 160cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "160cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_73.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_73.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Wimbledon Village 160cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "putney-heath-artisan-beverage-credenza-74": {
      "slug": "putney-heath-artisan-beverage-credenza-74",
      "category": "coffee-stations",
      "title": "Putney Heath 120cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Putney Heath 120cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 120cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "120cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_74.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_74.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Putney Heath 120cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "barnes-common-artisan-beverage-credenza-75": {
      "slug": "barnes-common-artisan-beverage-credenza-75",
      "category": "coffee-stations",
      "title": "Barnes Common 125cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Barnes Common 125cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 125cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "125cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_75.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_75.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Barnes Common 125cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
  "roehampton-artisan-beverage-credenza-76": {
      "slug": "roehampton-artisan-beverage-credenza-76",
      "category": "coffee-stations",
      "title": "Roehampton 160cm Bespoke Coffee Station Cabinet",
      "metaTitle": "Roehampton 160cm Bespoke Coffee Station Cabinet | Cabivella UK",
      "metaDescription": "Architectural 160cm freestanding and integrated beverage console featuring concealed pocket doors, appliance storage, and moisture-resistant internal joinery.",
      "dimensionsMm": "160cm width, 550mm depth, 1850mm height",
      "materials": [
          "European Oak and Moisture-Resistant Core",
          "Precision bi-fold pocket-door sliding tracks",
          "Integrated heat-resistant quartz preparation surface"
      ],
      "finishOptions": [
          "Natural Satin Oak",
          "Deep Navy Lacquer",
          "Warm Alabaster",
          "Smoked Charcoal"
      ],
      "installationScope": "Delivered pre-assembled in protective architectural packaging ready for immediate positioning and plumbing connection.",
      "image": "/assets/img/models/real_coffee_stations/tekzen_coffee_76.webp",
      "gallery": [
          "/assets/img/models/real_coffee_stations/tekzen_coffee_76.webp"
      ],
      "description": "Created as a dedicated sanctuary for morning coffee rituals and evening beverage hospitality, the Roehampton 160cm Bespoke Coffee Station Cabinet conceals sophisticated appliances behind effortless pocket-door joinery.",
      "keyFeatures": [
          "Retractable pocket-door system with smooth roller dampening",
          "Integrated heat-dissipation ventilation for high-end espresso machinery",
          "Dedicated accessory drawer with customisable solid walnut dividers"
      ]
  },
};
