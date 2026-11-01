export interface ModelDetail {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  leadTime: string;
  referencePriceTl?: string;
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "48.000 TL"
  },
  "contemporary-kitchens": {
    "slug": "contemporary-kitchens",
    "category": "kitchens",
    "title": "Contemporary Slab Kitchens",
    "metaTitle": "Contemporary Handleless Kitchens | Made-to-Measure Joinery | Cabivella UK",
    "metaDescription": "Architectural flat-panel and handleless kitchens with micro-bevelled edges, recessed J-pull channels, and matte anti-fingerprint surfaces.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "Made-to-measure (typical 600mm base, 350mm wall runs)",
    "materials": [
      "E1 grade structural birch core",
      "Velvet super-matte anti-fingerprint laminate",
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
    "description": "Purist architectural cabinetry celebrating unobstructed monolithic elevations, razor-sharp shadow gaps, and tactile matte surfaces.",
    "keyFeatures": [
      "Continuous anodised continuous channel system for pure handleless operation",
      "Super-matte tactile surface formulation with thermal micro-scratch healability",
      "Full-height floor-to-ceiling appliance banks with integrated ventilation chimneys",
      "Bespoke cutlery divider sets in solid American black walnut"
    ],
    "referencePriceTl": "46.000 TL"
  },
  "compact-kitchens": {
    "slug": "compact-kitchens",
    "category": "kitchens",
    "title": "Compact Architectural Kitchens",
    "metaTitle": "Compact Studio Kitchens | Made-to-Measure Small Space Joinery | Cabivella UK",
    "metaDescription": "High-density functional cabinetry designed for UK urban apartments, guest suites, and secondary kitchen spaces without compromising specification.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "referencePriceTl": "18.900 TL"
  },
  "arya-classic-shaker": {
    "slug": "arya-classic-shaker",
    "category": "kitchens",
    "title": "Arya Heritage Shaker Kitchen",
    "metaTitle": "Arya Heritage Shaker Kitchen | British Joinery | Cabivella UK",
    "metaDescription": "Quintessential British five-piece Shaker cabinetry featuring solid ash stiles, deep recessed centre panels, and hand-finished satin lacquer.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "46.500 TL"
  },
  "lea-bevelled-shaker": {
    "slug": "lea-bevelled-shaker",
    "category": "kitchens",
    "title": "Lea Bevelled Shaker Kitchen",
    "metaTitle": "Lea Bevelled Shaker Kitchen | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Refined bevelled-frame Shaker kitchen cabinetry uniting classical geometry with subtle contemporary chamfered detailing.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
      "Multi-layer polyurethane matte lacquer resistant to household spills",
      "Tailored tall appliance larders with integrated breakfast bar elements"
    ],
    "referencePriceTl": "48.200 TL"
  },
  "luna-micro-shaker": {
    "slug": "luna-micro-shaker",
    "category": "kitchens",
    "title": "Luna Micro-Frame Modern Shaker",
    "metaTitle": "Luna Micro-Frame Shaker Kitchen | Modern British Joinery | Cabivella UK",
    "metaDescription": "Slimline 15mm micro-frame Shaker kitchen cabinetry delivering a lightweight, contemporary silhouette for architectural interiors.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "43.800 TL"
  },
  "lora-contemporary-slab": {
    "slug": "lora-contemporary-slab",
    "category": "kitchens",
    "title": "Lora Super-Matte Contemporary Kitchen",
    "metaTitle": "Lora Super-Matte Kitchen | Contemporary Cabinets | Cabivella UK",
    "metaDescription": "Velvety super-matte slab kitchen cabinetry with anti-fingerprint thermal technology and clean monolithic architectural runs.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "Made-to-measure base, tall, and wall runs",
    "materials": [
      "Moisture-resistant MR core",
      "Thermal-healing super-matte finish",
      "Anodised aluminium channels"
    ],
    "finishOptions": [
      "Matte Anthracite",
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
    "referencePriceTl": "45.600 TL"
  },
  "vera-architectural-kitchen": {
    "slug": "vera-architectural-kitchen",
    "category": "kitchens",
    "title": "Vera Architectural Clean-Line Kitchen",
    "metaTitle": "Vera Architectural Kitchen | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Minimalist architectural kitchen cabinetry featuring flush facades, integrated J-pull contours, and natural European oak accents.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
      "Matte Carbon"
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
    "referencePriceTl": "47.900 TL"
  },
  "axis-handleless-shadow": {
    "slug": "axis-handleless-shadow",
    "category": "kitchens",
    "title": "Axis Handleless Shadow-Gap Kitchen",
    "metaTitle": "Axis Handleless Shadow-Gap Kitchen | Cabivella UK",
    "metaDescription": "Pure continuous shadow-gap handleless kitchen cabinetry with extruded aluminium rails and flush monolithic elevations.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "Bespoke runs to millimetre precision",
    "materials": [
      "Precision-extruded aluminium profiles",
      "High-density lacquer core",
      "German engineered motion runners"
    ],
    "finishOptions": [
      "Brushed Bronze Profile / Chalk",
      "Matte Black Profile / Anthracite",
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
    "referencePriceTl": "49.500 TL"
  },
  "vega-ergonomic-suite": {
    "slug": "vega-ergonomic-suite",
    "category": "kitchens",
    "title": "Vega Ergonomic Culinary Suite",
    "metaTitle": "Vega Ergonomic Culinary Suite | Bespoke Kitchens | Cabivella UK",
    "metaDescription": "High-performance culinary kitchen cabinetry featuring tiered workflow zones, concealed breakfast stations, and ergonomic reach heights.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "52.400 TL"
  },
  "urban-compact-160": {
    "slug": "urban-compact-160",
    "category": "kitchens",
    "title": "Urban 160 Compact Studio Kitchen",
    "metaTitle": "Urban 160 Compact Kitchen | Studio Apartment Joinery | Cabivella UK",
    "metaDescription": "Space-saving 160cm to 220cm compact kitchen solution combining cooktop, sink, integrated extraction, and soft-close cabinetry.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "referencePriceTl": "16.450 TL"
  },
  "wall-hung-vanities": {
    "slug": "wall-hung-vanities",
    "category": "bathrooms",
    "title": "Floating Wall-Hung Vanities",
    "metaTitle": "Wall-Hung Bathroom Vanities | Bespoke Floating Storage | Cabivella UK",
    "metaDescription": "Bespoke floating bathroom vanity units crafted from marine-grade moisture-resistant timbers with concealed heavy-duty wall brackets.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/wall-hung-vanities.webp",
    "gallery": [
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/fluted-vanities.webp"
    ],
    "description": "Elevate bathroom acoustics and floor visibility. Floating vanity units engineered to withstand high-humidity British bathroom environments.",
    "keyFeatures": [
      "Tested for structural rigidity under 150kg downward point loads",
      "U-shaped plumbing cutout preserving maximum usable drawer volume",
      "Soft-close full extension drawer runners with dampening buffers",
      "Optional integrated warm-white under-vanity ambient LED lighting"
    ],
    "referencePriceTl": "22.500 TL"
  },
  "fluted-vanities": {
    "slug": "fluted-vanities",
    "category": "bathrooms",
    "title": "Acoustic Fluted Timber Vanities",
    "metaTitle": "Fluted Bathroom Vanities | Reeded Timber Joinery | Cabivella UK",
    "metaDescription": "Tactile fluted and reeded wood bathroom vanity units with solid surface or quartz countertop integrations.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Architectural reeded surfaces that introduce depth, texture, and acoustic dampening to tiled luxury bathroom environments.",
    "keyFeatures": [
      "Precision 12mm fluted timber profile carved on multi-axis CNC routers",
      "Multi-step hydro-repellent sealant shielding against steam and standing drops",
      "Seamless push-to-open drawer mechanisms preserving pure fluted facades",
      "Coordinated open towel niche and drawer storage configurations"
    ],
    "referencePriceTl": "27.800 TL"
  },
  "tall-bathroom-storage": {
    "slug": "tall-bathroom-storage",
    "category": "bathrooms",
    "title": "Tall Bathroom Linen Columns",
    "metaTitle": "Tall Bathroom Linen Cabinets | Slim Tower Storage | Cabivella UK",
    "metaDescription": "Full-height slimline bathroom storage towers for towels, apothecary goods, and laundry baskets in UK residential bathrooms.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/tall-bathroom-storage.webp",
    "gallery": [
      "/assets/img/models/tall-bathroom-storage.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Maximise vertical room geometry. Slim-footprint storage towers tailored for compact en-suites and grand master bathrooms alike.",
    "keyFeatures": [
      "Reversible door orientation (left or right swing) with soft-close cushioning",
      "Lower pull-out ventilated timber laundry basket compartment",
      "Toughened 8mm clear safety glass shelves with anti-tip locking pins",
      "Internal 240V shaver socket and toothbrush charging conduit integration"
    ],
    "referencePriceTl": "18.600 TL"
  },
  "malta-vanity-console": {
    "slug": "malta-vanity-console",
    "category": "bathrooms",
    "title": "Malta 100 Illuminated Vanity Console",
    "metaTitle": "Malta 100 Illuminated Vanity | Bathroom Furniture | Cabivella UK",
    "metaDescription": "100cm floating vanity suite featuring integrated LED magnifying mirror, dual soft-close drawers, and matte polyurethane lacquer.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "dimensionsMm": "1000mm width, 520mm height, 480mm depth",
    "materials": [
      "MR-MDF substrate",
      "Hydrophobic matte lacquer",
      "Blum motion soft-close glides"
    ],
    "finishOptions": [
      "Matte White & Anthracite",
      "Deep Slate & Oak",
      "Pure Cashmere"
    ],
    "installationScope": "Heavy-duty wall anchors included.",
    "image": "/assets/img/models/wall-hung-vanities.webp",
    "gallery": [
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/slim-mirror-storage-cabinets.webp"
    ],
    "description": "A refined 100cm floating bathroom console designed for sophisticated en-suites. Dual deep drawers provide ample storage for beauty apparatus and linens.",
    "keyFeatures": [
      "Precision 1000mm single-basin footprint optimised for modern master en-suites",
      "Concealed handleless bevel lip for effortless drawer opening",
      "Hydro-phobic multi-layer coating impenetrable to shower steam",
      "Compatible with luxury undermount or vessel stone washbasins"
    ],
    "referencePriceTl": "25.400 TL"
  },
  "design-monolith-vanity": {
    "slug": "design-monolith-vanity",
    "category": "bathrooms",
    "title": "Design 105 Monolith Double-Basin Vanity",
    "metaTitle": "Design 105 Double Vanity | Luxury Bathrooms | Cabivella UK",
    "metaDescription": "105cm to 160cm architectural double-basin vanity console with monolithic mitred drawer edges and solid ceramic top integration.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/double-basin-vanities.webp",
    "gallery": [
      "/assets/img/models/double-basin-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Monolithic lines with mitred 45-degree edge detailing create a floating sculpture in expansive family and master bathrooms.",
    "keyFeatures": [
      "Continuous mitred outer carcass wrapping seamlessly around drawer faces",
      "Dual independent soft-close drawers with integrated cosmetic dividers",
      "Tested to withstand high dynamic loads with certified wall hanging fixings",
      "Internal water-repellent walnut melamine lining"
    ],
    "referencePriceTl": "39.200 TL"
  },
  "aydos-compact-vanity": {
    "slug": "aydos-compact-vanity",
    "category": "bathrooms",
    "title": "Aydos 55 Compact Cloakroom Vanity",
    "metaTitle": "Aydos 55 Cloakroom Vanity | Small Bathroom Furniture | Cabivella UK",
    "metaDescription": "55cm slim-projection cloakroom vanity unit designed for UK under-stair WCs and compact powder rooms.",
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
    "dimensionsMm": "550mm width, 400mm height, 380mm slim depth",
    "materials": [
      "Moisture-resistant compact composite",
      "Stainless steel hardware",
      "Soft-close hinge"
    ],
    "finishOptions": [
      "Gloss Chalk White",
      "Matte Pebble",
      "Sage Dust"
    ],
    "installationScope": "Compact delivery for tight staircase and hallway access.",
    "image": "/assets/img/models/wall-hung-vanities.webp",
    "gallery": [
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/fluted-vanities.webp"
    ],
    "description": "Engineered specifically for British cloakrooms and downstairs WCs. Slim 380mm depth ensures unobstructed passage while concealing toiletries.",
    "keyFeatures": [
      "Ultra-slim 380mm projection maximising door clearance in tight cloakrooms",
      "Single soft-close deep drawer with cutaway plumbing channel",
      "Integrated side towel rail bracket option in brushed nickel or brass",
      "Factory-tested waterproof edge-sealing technology"
    ],
    "referencePriceTl": "14.800 TL"
  },
  "root-groove-vanity": {
    "slug": "root-groove-vanity",
    "category": "bathrooms",
    "title": "Root Groove Reeded Vanity Unit",
    "metaTitle": "Root Groove Reeded Vanity | Fluted Bathroom Units | Cabivella UK",
    "metaDescription": "80cm to 120cm reeded timber vanity unit featuring vertical acoustic rhythm, rich wood grain, and soft-close storage.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "dimensionsMm": "800mm, 1000mm, 1200mm configurations",
    "materials": [
      "CNC routed grooved timber",
      "Sealed MR substrate",
      "Concealed heavy-load brackets"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Matte Clay",
      "Basalt"
    ],
    "installationScope": "Factory assembled, pre-cut for standard UK plumbing traps.",
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Rhythmic vertical grooves carved into organic timber veneers soften ceramic and porcelain bathroom walls with tactile architectural warmth.",
    "keyFeatures": [
      "Distinctive vertical grooved facade milled with 8mm spacing",
      "Concealed finger-pull bevel across the top drawer rim",
      "Marine-grade hydrophobic protective finish",
      "Generous bottom drawer designed for tall shampoo and lotion bottles"
    ],
    "referencePriceTl": "28.900 TL"
  },
  "beat-ribbed-vanity": {
    "slug": "beat-ribbed-vanity",
    "category": "bathrooms",
    "title": "Beat Ribbed Architectural Vanity",
    "metaTitle": "Beat Ribbed Vanity | Bespoke Fluted Joinery | Cabivella UK",
    "metaDescription": "Geometric ribbed vanity unit featuring bold dimensional fluting and premium lacquered or wood veneer finishes.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/double-basin-vanities.webp"
    ],
    "description": "Daring geometric ribs create dramatic play of light and shadow, delivering a boutique hotel aesthetic into private British residences.",
    "keyFeatures": [
      "Deep-cut 15mm ribs offering tactile and visual drama",
      "Durable moisture-cured polyurethane finish",
      "Full extension synchronous drawer mechanisms with 35kg load rating",
      "Fully sealed sink trap cutouts with protective PVC edging"
    ],
    "referencePriceTl": "29.500 TL"
  },
  "daisy-reeded-console": {
    "slug": "daisy-reeded-console",
    "category": "bathrooms",
    "title": "Daisy Fluted Timber Console",
    "metaTitle": "Daisy Fluted Timber Console | Reeded Bathroom Storage | Cabivella UK",
    "metaDescription": "Softly rounded reeded bathroom vanity with curved corner radius and tactile wood textures.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Curved radius corners and fine vertical reeding combine to soften rectangular bathroom spaces, providing ergonomic safety and visual elegance.",
    "keyFeatures": [
      "Gentle 50mm radius curved corner transitions preventing sharp hip knocks",
      "Continuous cylindrical reeding seamlessly wrapping around curved sides",
      "Premium soft-close internal drawers with removable anti-slip mats",
      "Integrated cutouts for tapware and countertop washbowls"
    ],
    "referencePriceTl": "31.200 TL"
  },
  "root-groove-tall-unit": {
    "slug": "root-groove-tall-unit",
    "category": "bathrooms",
    "title": "Root Tall Fluted Storage Column",
    "metaTitle": "Root Tall Fluted Linen Column | Bathroom Tower | Cabivella UK",
    "metaDescription": "Full-height vertical bathroom storage column with coordinating fluted door panels and adjustable interior glass shelving.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "dimensionsMm": "400mm width, 1750mm height, 350mm depth",
    "materials": [
      "Grooved timber front",
      "Moisture-sealed carcass",
      "Concealed clip hinges"
    ],
    "finishOptions": [
      "Natural Fluted Oak",
      "Smoked Walnut",
      "Matte Basalt",
      "Parchment"
    ],
    "installationScope": "Includes heavy-duty anti-tip wall brackets.",
    "image": "/assets/img/models/tall-bathroom-storage.webp",
    "gallery": [
      "/assets/img/models/tall-bathroom-storage.webp",
      "/assets/img/models/fluted-vanities.webp"
    ],
    "description": "The perfect vertical accompaniment to fluted vanities. Conceals spare towels, skincare collections, and household essentials in an elegant tall silhouette.",
    "keyFeatures": [
      "Full-height 1750mm storage column with 5 internal compartments",
      "Reversible soft-closing door with 110-degree opening angle",
      "Matching fluted facade ensuring complete room collection continuity",
      "Adjustable 8mm safety glass shelves with edge-polished bevels"
    ],
    "referencePriceTl": "19.400 TL"
  },
  "integra-square-tower": {
    "slug": "integra-square-tower",
    "category": "bathrooms",
    "title": "Integra Square Modular Bathroom Tower",
    "metaTitle": "Integra Square Bathroom Tower | Modular Linen Storage | Cabivella UK",
    "metaDescription": "Clean-lined square modular bathroom tower with open display niche and dual concealed soft-close cabinets.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "image": "/assets/img/models/tall-bathroom-storage.webp",
    "gallery": [
      "/assets/img/models/tall-bathroom-storage.webp",
      "/assets/img/models/wall-hung-vanities.webp"
    ],
    "description": "Equipped with an open central timber niche for perfume and rolled guest towels, flanked by closed cupboards top and bottom.",
    "keyFeatures": [
      "Open central display niche illuminated with warm micro-spot LED",
      "Dual push-to-open flush doors for discreet storage",
      "Lower laundry drop chute or basket integration option",
      "Sealed against 100% relative humidity conditions"
    ],
    "referencePriceTl": "17.900 TL"
  },
  "tall-larder-cupboards": {
    "slug": "tall-larder-cupboards",
    "category": "pantry-larder",
    "title": "Tall Larder & Pantry Cupboards",
    "metaTitle": "Tall Larder & Pantry Cupboards | Made-to-Measure Kitchen Storage | Cabivella UK",
    "metaDescription": "Double-door and single-door pantry cupboards with solid oak door-mounted spice racks, internal drawers, and cold marble shelf options.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 7\u20139 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "dimensionsMm": "900mm to 1500mm widths, tailored heights up to 2300mm",
    "materials": [
      "Solid European oak or ash shelving",
      "Reeded/fluted toughened safety glass",
      "Anodised aluminium warm-LED light profiles"
    ],
    "finishOptions": [
      "Natural Oiled Oak",
      "Deep Walnut",
      "Matte Anthracite frame with brass accents"
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "1200mm\u20132000mm made-to-measure widths",
    "materials": [
      "Bronze mirror glass splashback",
      "Quartz stone worktop",
      "Velvet-touch lacquer"
    ],
    "finishOptions": [
      "Matte Carbon & Bronze",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
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
    "metaDescription": "Contemporary handleless replacement kitchen doors with integrated J-pull routing or chamfered shadow profiles in matte and gloss finishes.",
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
    "dimensionsMm": "Made-to-measure to exact millimetre dimensions; 22mm profile thickness",
    "materials": [
      "Deep-routed moisture-resistant structural core",
      "Laser-applied edge sealing",
      "Velvet matte or mirror gloss lacquer"
    ],
    "finishOptions": [
      "Matte Anthracite",
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
      "Thermal-repairable super-matte surface technology resisting fingerprints and smudges",
      "Available in bespoke heights and widths for non-standard vintage carcasses"
    ]
  },
  "chillingham-timber-shaker": {
    "slug": "chillingham-timber-shaker",
    "category": "kitchen-doors",
    "title": "Chillingham Authentic Hardwood Shaker Fronts",
    "metaTitle": "Chillingham Hardwood Shaker Doors | Replacement Fronts | Cabivella UK",
    "metaDescription": "Authentic 5-piece solid European ash replacement doors with 80mm traditional stiles and mortise-and-tenon craftsmanship.",
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
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
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
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
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
    "dimensionsMm": "Made-to-measure width and height increments",
    "materials": [
      "18mm or 22mm dense MR-MDF",
      "Laser-applied ABS edge",
      "Anti-fingerprint matte lacquer"
    ],
    "finishOptions": [
      "Super-Matte Basalt",
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
    "metaDescription": "Contemporary flat slab replacement kitchen doors in silky matte and soft satin finishes for minimalist kitchens.",
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
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
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
    "dimensionsMm": "Custom height and width to 1mm tolerance",
    "materials": [
      "Precision milled composite",
      "Solid timber perimeter",
      "Matte satin lacquer"
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "dimensionsMm": "Made-to-measure doors and full 2400x1200mm cladding sheets",
    "materials": [
      "Multi-axis CNC routed oak veneer",
      "Moisture-sealed substrate",
      "Protective matte oil"
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
    "leadTime": "Typically 3\u20135 weeks (production & UK transit)",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "2400mm width, 600mm base carcass depth (340mm wall depth), 2150mm standard installed height",
    "materials": [
      "18mm moisture-resistant structural MR core",
      "Thermal-healing super-matte anti-fingerprint surface",
      "Concealed 35mm European soft-close clip hinges",
      "Synchronised full-extension 40kg undermount drawer runners"
    ],
    "finishOptions": [
      "Chalk White & Oiled Oak",
      "Matte Basalt Anthracite",
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
    "referencePriceTl": "20.490 TL"
  },
  "belgravia-grand-380": {
    "slug": "belgravia-grand-380",
    "category": "kitchens",
    "title": "Belgravia 380cm Grand Architectural Suite",
    "metaTitle": "Belgravia 380cm Grand Kitchen Suite | Luxury Cabinetry | Cabivella UK",
    "metaDescription": "Commanding 380cm bespoke kitchen layout featuring dual full-height appliance towers, 260cm central chef run, 90cm pot drawers, and integrated dishwasher housing.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "50.800 TL"
  },
  "mayfair-pantry-320": {
    "slug": "mayfair-pantry-320",
    "category": "kitchens",
    "title": "Mayfair 320cm Tower & Pantry Run",
    "metaTitle": "Mayfair 320cm Kitchen & Pantry Run | Bespoke Joinery | Cabivella UK",
    "metaDescription": "Harmonious 320cm kitchen suite pairing an ergonomic tall food pantry tower with an 80cm sink module, 60cm appliance bay, and walnut dovetailed drawers.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "44.900 TL"
  },
  "cotswold-classic-280": {
    "slug": "cotswold-classic-280",
    "category": "kitchens",
    "title": "Cotswold 280cm Chef's Preparation Kitchen",
    "metaTitle": "Cotswold 280cm Chef's Kitchen | Classic British Joinery | Cabivella UK",
    "metaDescription": "Traditional 280cm British kitchen layout featuring solid timber stiles, 80cm wide cookware drawers, glazed feature wall cabinets, and durable lacquer finish.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
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
    "referencePriceTl": "32.850 TL"
  },
  "richmond-studio-200": {
    "slug": "richmond-studio-200",
    "category": "kitchens",
    "title": "Richmond 200cm Linear Apartment Kitchen",
    "metaTitle": "Richmond 200cm Studio Kitchen | Compact Joinery | Cabivella UK",
    "metaDescription": "High-density 200cm linear kitchen solution for London apartments and secondary suites, with bi-fold lift wall units and integrated cooking station.",
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "dimensionsMm": "2000mm width, 600mm base depth (320mm wall depth), 2100mm installed height",
    "materials": [
      "18mm dense MR structural composite",
      "Laser-sealed ABS edge banding resistant to steam",
      "Concealed soft-close buffer hinges",
      "Bi-fold lift-up flap mechanisms"
    ],
    "finishOptions": [
      "Porcelain White & Warm Ash",
      "Matte Anthracite",
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
    "referencePriceTl": "19.720 TL"
  },
  "chelsea-monolith-100": {
    "slug": "chelsea-monolith-100",
    "category": "bathrooms",
    "title": "Chelsea 100cm Illuminated Vanity & Linen Suite",
    "metaTitle": "Chelsea 100cm Vanity Suite | Luxury Bathrooms | Cabivella UK",
    "metaDescription": "Refined 100cm floating bathroom vanity suite with vitreous china basin, touchless LED demister mirror cabinet, and coordinating tall linen tower.",
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "referencePriceTl": "26.850 TL",
    "dimensionsMm": "1000mm vanity width, 520mm height, 480mm depth; optional 350x1600mm linen tower",
    "materials": [
      "Marine-grade moisture-sealed core substrate",
      "Multi-coat hydrophobic polyurethane satin lacquer",
      "Vitreous china washbasin deck with integrated overflow",
      "Concealed heavy-load steel wall brackets tested to 150kg"
    ],
    "finishOptions": [
      "Matte Chalk White",
      "Basalt Grey Silk",
      "Natural Bleached Oak",
      "Deep Oxford Navy"
    ],
    "installationScope": "Factory pre-assembled with certified heavy-duty wall anchor plates and waste trap clearance cutouts.",
    "image": "/assets/img/models/wall-hung-vanities.webp",
    "gallery": [
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/slim-mirror-storage-cabinets.webp",
      "/assets/img/models/tall-bathroom-storage.webp"
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "referencePriceTl": "48.600 TL",
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
    "image": "/assets/img/models/double-basin-vanities.webp",
    "gallery": [
      "/assets/img/models/double-basin-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/bathroom-inspiration.webp"
    ],
    "description": "The quintessential master en-suite centerpiece. 140cm of uninterrupted architectural joinery offering dual independent wash stations and four deep organising drawers for shared morning rituals without friction.",
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "referencePriceTl": "34.750 TL",
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
      "Matte Clay Reeded",
      "Basalt Wave"
    ],
    "installationScope": "Factory pre-assembled with pre-machined cutouts for undermount or vessel washbasin integration.",
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/double-basin-vanities.webp",
      "/assets/img/models/tall-bathroom-storage.webp"
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
    "leadTime": "Typically 5\u20137 weeks (production & UK transit)",
    "referencePriceTl": "21.500 TL",
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
    "image": "/assets/img/models/fluted-vanities.webp",
    "gallery": [
      "/assets/img/models/fluted-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/slim-mirror-storage-cabinets.webp"
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "64.500 TL",
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
    "image": "/assets/img/models/double-basin-vanities.webp",
    "gallery": [
      "/assets/img/models/double-basin-vanities.webp",
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/tall-bathroom-storage.webp"
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
    "leadTime": "Typically 4\u20136 weeks (production & UK transit)",
    "referencePriceTl": "20.250 TL",
    "dimensionsMm": "650mm width, 480mm height, 420mm slim projection",
    "materials": [
      "High-density moisture-sealed MR core",
      "Gloss or matte polyurethane lacquer",
      "Compact vitreous china washbasin",
      "Concealed soft-close buffer hinges"
    ],
    "finishOptions": [
      "Porcelain Chalk White",
      "Warm Stone Greige",
      "Sage Mist",
      "Matte Anthracite"
    ],
    "installationScope": "Engineered for rapid, accurate mounting in compact under-stair WCs and cloakrooms.",
    "image": "/assets/img/models/wall-hung-vanities.webp",
    "gallery": [
      "/assets/img/models/wall-hung-vanities.webp",
      "/assets/img/models/slim-mirror-storage-cabinets.webp",
      "/assets/img/bathroom-inspiration.webp"
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "125.998 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "125.998 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "125.998 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "71.650 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "71.470 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "71.340 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "71.150 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "70.710 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "70.540 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "70.500 TL",
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
    "leadTime": "Typically 6\u20138 weeks (production & UK transit)",
    "referencePriceTl": "19.889 TL",
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
  }
};
