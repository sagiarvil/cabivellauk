export interface ModelDetail {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  leadTime: string;
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
  // 1. KITCHENS
  'shaker-kitchens': {
    slug: 'shaker-kitchens',
    category: 'kitchens',
    title: 'Shaker Kitchens',
    metaTitle: 'Classic Shaker Kitchens | Made-to-Measure British Joinery | Cabivella UK',
    metaDescription: 'Timeless made-to-measure Shaker kitchens featuring solid hardwood stiles, mortise-and-tenon joints, and precision motion hardware tailored to UK homes.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Made-to-measure (typical 600mm carcass depth, bespoke ceiling-height runs)',
    materials: ['Solid European Ash timber frame', 'High-density moisture-resistant MR-MDF core', 'Concealed hydraulic soft-close runners'],
    finishOptions: ['Heritage Sage Green', 'Chalk White', 'Deep Oxford Navy', 'Satin Pumice', 'Natural Oiled Oak interior'],
    installationScope: 'Delivered pre-assembled in protective timber crates; ready for installation by your appointed contractor or local specialist.',
    image: '/assets/img/models/shaker-kitchens.webp',
    gallery: ['/assets/img/models/shaker-kitchens.webp', '/assets/img/models/contemporary-kitchens.webp'],
    description: 'The definitive British architectural aesthetic. Our Shaker kitchens unite classical five-piece mortise-and-tenon timber stiles with contemporary concealed dampening mechanics, engineered to perform steadily across British domestic heating cycles.',
    keyFeatures: [
      'Traditional 70mm or contemporary slimline 20mm Shaker rail profiles',
      'Concealed hydraulic soft-close hinges with integrated buffer dampening',
      'Dovetailed solid oak internal drawer boxes with full extension glide',
      'Factory-baked polyurethane lacquer finish providing resilient protection against daily kitchen wear'
    ]
  },
  'contemporary-kitchens': {
    slug: 'contemporary-kitchens',
    category: 'kitchens',
    title: 'Contemporary Kitchens',
    metaTitle: 'Contemporary Minimalist Kitchens | Handleless Bespoke Cabinetry | Cabivella UK',
    metaDescription: 'Monolithic handleless contemporary kitchens with seamless shadow gaps and architectural proportions. Master timber joinery engineered for UK open-plan living.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Bespoke architectural dimensions aligned to room ceiling and window heights',
    materials: ['Super-matt anti-fingerprint thermal laminate', 'Continuous shadow gap aluminium rails', 'Double-wall steel drawer systems'],
    finishOptions: ['Cashmere Grey', 'Smoked European Oak', 'Warm Charcoal Basalt', 'Alabaster Silk Matt'],
    installationScope: 'Full cabinet joinery delivery with laser-levelled shadow gap profiles and concealed hanging brackets.',
    image: '/assets/img/models/contemporary-kitchens.webp',
    gallery: ['/assets/img/models/contemporary-kitchens.webp', '/assets/img/models/shaker-kitchens.webp'],
    description: 'Unbroken horizontal planes and pure monolithic volume characterise our contemporary kitchen commissions. Designed for open-plan residences where kitchen joinery converses quietly with surrounding architectural furniture.',
    keyFeatures: [
      'True handleless recessed shadow gap rails in brushed metal or anodised bronze',
      'Push-to-open mechanical and motorised touch-release options for effortless access',
      'Integrated pocket-door concealment stations for breakfast bars and appliances',
      'Reinforced double-skin carcass architecture engineered for long-term rigidity'
    ]
  },
  'compact-kitchens': {
    slug: 'compact-kitchens',
    category: 'kitchens',
    title: 'Compact Kitchens',
    metaTitle: 'Space-Maximising Compact Kitchens | London Flats & Townhouses | Cabivella UK',
    metaDescription: 'Ergonomically engineered compact kitchen cabinetry designed for London flats, Victorian terrace conversions, and refined UK urban residences.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Custom micro-depth (450mm–550mm) and full ceiling height units',
    materials: ['High-density marine grade core', 'Concealed air ventilation channels', 'Heavy-duty steel drawer runners'],
    finishOptions: ['Warm Travertine Matt', 'Smoked Walnut Veneer', 'Nordic Birch', 'Soft Clay White'],
    installationScope: 'Specialist compact staircase packaging; delivered pre-assembled or sectional for awkward urban access.',
    image: '/assets/img/models/compact-kitchens.webp',
    gallery: ['/assets/img/models/compact-kitchens.webp', '/assets/img/models/contemporary-kitchens.webp'],
    description: 'Urban living in London and UK city centres requires thoughtful spatial planning. Every millimetre of wall height and alcove depth is harnessed with bespoke pull-out pantries, internal drawer tiers, and recessed task illumination.',
    keyFeatures: [
      'Ceiling-reaching vertical cabinetry eliminating dead space above units',
      'Twin blind-corner pull-out trays delivering full ergonomic access',
      'Integrated heat-deflector panels protecting joinery near compact built-in ovens',
      'Continuous magnetic plinths with concealed kickboard step storage'
    ]
  },

  // 2. BATHROOMS
  'wall-hung-vanities': {
    slug: 'wall-hung-vanities',
    category: 'bathrooms',
    title: 'Wall-Hung Vanities',
    metaTitle: 'Floating Wall-Hung Bathroom Vanities | Bespoke UK Joinery | Cabivella UK',
    metaDescription: 'Modern floating bathroom vanities providing floor clearance, dual-drawer storage, and water-sealed hardwood construction for luxury UK bathrooms.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Widths 600mm / 800mm / 1000mm / 1200mm / 1400mm bespoke',
    materials: ['Water-sealed marine grade core & MR-MDF', 'Natural stone or solid surface basin cut-outs', 'Structural steel hanging cleat brackets'],
    finishOptions: ['Rich Smoked Walnut', 'Oatmeal Matt Lacquer', 'Natural Fluted Oak', 'Bone White Matt'],
    installationScope: 'Supplied with structural steel wall mounting cleat kit; requires solid masonry or reinforced timber stud backing.',
    image: '/assets/img/models/wall-hung-vanities.webp',
    gallery: ['/assets/img/models/wall-hung-vanities.webp', '/assets/img/models/fluted-vanities.webp'],
    description: 'Elevate your bathroom into a sanctuary of calm. Floating wall-hung cabinetry creates an uninterrupted floor plane that visually expands compact British bathrooms while offering expansive soft-close drawer storage.',
    keyFeatures: [
      'Concealed heavy-gauge steel wall-cleat anchoring system tested for residential domestic loads',
      'Specialist waste siphon drawer cut-outs preserving generous internal storage capacity',
      'Internal divider trays crafted in moisture-sealed solid beech with felt liners',
      'Multi-coat water-resistant lacquer edge treatment protecting against splash zones'
    ]
  },
  'fluted-vanities': {
    slug: 'fluted-vanities',
    category: 'bathrooms',
    title: 'Fluted Vanities',
    metaTitle: 'Fluted & Reeded Timber Bathroom Vanities | Luxury Made-to-Measure | Cabivella UK',
    metaDescription: 'Artisanal fluted timber bathroom vanities delivering tactile warmth, three-dimensional texture, and bespoke stone basin configurations.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Single or twin basin configurations from 750mm to 1600mm widths',
    materials: ['Solid fluted European oak or walnut slats', 'Hydrophobic polyurethane seal coat', 'Soft-touch push latches'],
    finishOptions: ['Natural Matte Oak', 'Rich Smoked Walnut', 'Forest Lichen Green', 'Pumice Satin Matt'],
    installationScope: 'Pre-machined plumbing entries for standard UK waste outlets and deck-mounted tap centres.',
    image: '/assets/img/models/fluted-vanities.webp',
    gallery: ['/assets/img/models/fluted-vanities.webp', '/assets/img/models/wall-hung-vanities.webp'],
    description: 'Reeded and fluted cabinetry fronts introduce architectural rhythm and tactile warmth into tiled bathroom sanctuaries. The precision CNC-milled fluting catches natural daylight, creating subtle interplay of light and shadow.',
    keyFeatures: [
      'Precision CNC-routed scallop and flute profiles milled into solid timber fronts',
      'Water-resistant UV-cured natural matte finish formulated for domestic bathroom moisture',
      'Concealed soft-close drawer mechanics providing smooth and quiet operation',
      'Optional matching framed fluted mirrors and open side alcove shelves'
    ]
  },
  'tall-bathroom-storage': {
    slug: 'tall-bathroom-storage',
    category: 'bathrooms',
    title: 'Tall Bathroom Storage',
    metaTitle: 'Tall Bathroom Linen & Storage Columns | Made-to-Measure | Cabivella UK',
    metaDescription: 'Vertical bathroom storage columns and linen cupboards with concealed laundry hampers, toughened glass shelves, and moisture-resistant construction.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Width 400mm–500mm, Depth 350mm, Height 1600mm–2000mm bespoke',
    materials: ['Moisture-sealed internal carcasses', 'Integrated ventilation channels', 'Concealed push latches'],
    finishOptions: ['Soft British Sage', 'Alabaster Silk Matt', 'Warm Natural Oak Veneer', 'Anthracite Matt'],
    installationScope: 'Supplied with anti-tip wall anchoring plates and adjustable levelling feet.',
    image: '/assets/img/models/tall-bathroom-storage.webp',
    gallery: ['/assets/img/models/tall-bathroom-storage.webp', '/assets/img/models/wall-hung-vanities.webp'],
    description: 'Maintain tranquil order in your bathroom. Our vertical storage columns conceal fresh towels, apothecary bottles, and laundry behind serene architectural door profiles that fit into narrow room alcoves.',
    keyFeatures: [
      'Integrated pull-out canvas laundry hamper basket on concealed steel runners',
      'Internal shaver and electric toothbrush charging cut-outs with cable conduits',
      'Adjustable 8mm safety toughened glass shelving with polished pencil edges',
      'Discreet rear ventilation slots preventing moisture build-up within the unit'
    ]
  },

  // 3. PANTRY & LARDER
  'tall-larder-cupboards': {
    slug: 'tall-larder-cupboards',
    category: 'pantry-larder',
    title: 'Tall Larder Cupboards',
    metaTitle: 'Freestanding & Fitted Tall Larder Cupboards | Bespoke Joinery | Cabivella UK',
    metaDescription: 'Master larder cupboards with solid oak door-mounted spice racks, cold marble pastry slabs, and internal dovetailed drawers for British kitchens.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Double door: Width 1000mm–1400mm x Depth 650mm x Height 2100mm–2400mm',
    materials: ['Solid European Oak internals', 'Carrara marble or quartz interior prep slab', 'Solid brass heavy butt hinges'],
    finishOptions: ['Heritage Olive Green', 'Smoked Ash', 'Stapleford Grey', 'Bespoke Heritage Swatch match'],
    installationScope: 'Delivered in sub-assemblies for straightforward room transit; full on-site alignment guidance included.',
    image: '/assets/img/models/tall-larder-cupboards.webp',
    gallery: ['/assets/img/models/tall-larder-cupboards.webp', '/assets/img/models/corner-pantry-storage.webp'],
    description: 'The crowning centrepiece of a considered English kitchen. Open the twin doors to reveal a complete culinary workshop: multi-tier solid oak door racks, a cool stone worktop for food preparation, and deep soft-closing produce drawers.',
    keyFeatures: [
      'Multi-tiered solid oak door spice and bottle shelves with solid brass retention bars',
      'Cool stone shelf insert for pastry rolling and artisan cheese keeping',
      'Automatic micro-switch warm 2700K LED illumination illuminating upon door opening',
      'Solid oak dovetailed internal pull-out drawers with soft-close motion control'
    ]
  },
  'corner-pantry-storage': {
    slug: 'corner-pantry-storage',
    category: 'pantry-larder',
    title: 'Corner Pantry Storage',
    metaTitle: 'Walk-In Corner Pantry Systems | Space Optimised Cabinetry | Cabivella UK',
    metaDescription: 'Bespoke walk-in and curved corner pantry cabinetry transforming awkward kitchen angles into organised dry food and appliance pantries.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Custom L-shaped footprint (typically 1050mm x 1050mm internal corner)',
    materials: ['Heavy-load solid timber shelving', 'Rigid timber carcass bracing', 'Twin bi-fold 170-degree hinges'],
    finishOptions: ['Raw Danish Oil Oak', 'Pebble Grey Matt', 'Crisp Off-White Silk'],
    installationScope: 'Custom scribing mouldings included for historic out-of-square walls.',
    image: '/assets/img/models/corner-pantry-storage.webp',
    gallery: ['/assets/img/models/corner-pantry-storage.webp', '/assets/img/models/tall-larder-cupboards.webp'],
    description: 'Convert hard-to-access kitchen corners into an expansive walk-in pantry. Continuous wraparound shelving accommodates dry goods, small appliances, and household provisions in one unified, easily surveyed space.',
    keyFeatures: [
      'Continuous 360-degree wraparound shelving eliminating hard-to-reach dead corners',
      'Heavy-duty lower vegetable crates mounted on full-extension ball-bearing glides',
      'Integrated electrical pass-throughs for stand mixers, breadmakers, and slow cookers',
      'Twin bi-fold wide opening hinges for easy room walk-in access'
    ]
  },

  // 4. COFFEE STATIONS
  'pocket-door-coffee-stations': {
    slug: 'pocket-door-coffee-stations',
    category: 'coffee-stations',
    title: 'Pocket-Door Coffee Stations',
    metaTitle: 'Bespoke Pocket-Door Coffee Stations | Concealed Breakfast Cupboards | Cabivella UK',
    metaDescription: 'Concealed coffee stations with precision bi-fold pocket doors that slide away flush into carcass cavities. Stone counter and barista organisation.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Width 1000mm–1500mm, Depth 650mm, Height 1400mm–2200mm bespoke',
    materials: ['Precision articulated pocket door runner systems', 'Heat & steam deflector back panel', 'Solid quartz work surface'],
    finishOptions: ['Espresso Stained Oak', 'Soft Linen Matt', 'Deep Forest Green', 'Warm Stone Matt'],
    installationScope: 'Pocket door hardware factory-calibrated and dry-fitted prior to crating.',
    image: '/assets/img/models/pocket-door-coffee-stations.webp',
    gallery: ['/assets/img/models/pocket-door-coffee-stations.webp', '/assets/img/models/open-shelf-coffee-cabinets.webp'],
    description: 'The pinnacle of domestic luxury and serenity. Pocket doors slide effortlessly back into side carcass cavities during morning routines or evening entertaining, then close completely flush to maintain a serene architectural room line.',
    keyFeatures: [
      'High-precision scissor pocket runners gliding smoothly into carcass side reveals',
      'Heat and steam deflector shields protecting upper joinery from espresso machine vapor',
      'Dedicated barista drawer with integrated knock-box, tamper holder, and bean canisters',
      'Flush-integrated electrical socket tracks for multiple appliances'
    ]
  },
  'open-shelf-coffee-cabinets': {
    slug: 'open-shelf-coffee-cabinets',
    category: 'coffee-stations',
    title: 'Open-Shelf Coffee Cabinets',
    metaTitle: 'Open-Shelf Coffee Bar Cabinetry & Credenzas | Cabivella UK',
    metaDescription: 'Architectural beverage credenzas and open-shelf coffee stations with warm lighting, solid brass hardware, and concealed lower storage.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Width 900mm–1600mm, Depth 500mm, Height 2100mm bespoke',
    materials: ['Solid timber architectural framing', 'Aged brass stemware rails', 'Micro-fluted timber acoustic backing'],
    finishOptions: ['Natural Oiled Walnut', 'Blackened Timber', 'Sandstone Matt Lacquer'],
    installationScope: 'Freestanding credenza or integrated wall-fixed options with concealed wire channelling.',
    image: '/assets/img/models/open-shelf-coffee-cabinets.webp',
    gallery: ['/assets/img/models/open-shelf-coffee-cabinets.webp', '/assets/img/models/pocket-door-coffee-stations.webp'],
    description: 'For homeowners who celebrate culinary apparatus as domestic art. Open display shelving showcases artisan ceramics, drippers, and glassware above an ergonomic timber and stone preparation credenza.',
    keyFeatures: [
      'Under-shelf recessed dimmable 2700K warm LED channels with anti-glare diffusers',
      'Solid aged brass hanging stemware rails machined to order',
      'Lower soft-close plinth drawers for filter papers, bulk beans, and accessories',
      'Resilient solid hardwood worktop treated with organic water-repellent hardwax'
    ]
  },

  // 5. FITTED STORAGE
  'alcove-cupboards': {
    slug: 'alcove-cupboards',
    category: 'fitted-storage',
    title: 'Alcove Cupboards',
    metaTitle: 'Fitted Alcove Cupboards & Period Bookcases | Victorian & Georgian | Cabivella UK',
    metaDescription: 'Bespoke alcove cupboards and floating bookshelves custom-measured for Victorian, Edwardian, and Georgian chimney breasts across Great Britain.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Bespoke measured to alcove width (typically 800mm–1300mm per alcove)',
    materials: ['High-density moisture-resistant core panels', 'Solid oak capping surface', 'Solid brass or aged bronze knobs'],
    finishOptions: ['Heritage Matched Eggshell', 'Natural Waxed Oak Counter', 'Slate Grey Matt', 'Soft White Silk'],
    installationScope: 'Supplied with generous scribing fillets and mouldings to accommodate out-of-plumb historic walls.',
    image: '/assets/img/models/alcove-cupboards.webp',
    gallery: ['/assets/img/models/alcove-cupboards.webp', '/assets/img/models/utility-room-cabinets.webp'],
    description: 'Bespoke alcove joinery restores proportion and essential storage to period living rooms flanking chimney breasts. Engineered to accommodate traditional plaster cornices, uneven Victorian floors, and concealed media conduits.',
    keyFeatures: [
      'Generous scribing fillets allowing clean fitting to uneven historic lath-and-plaster walls',
      'Concealed cable channels and ventilation grilles for home audio and media consoles',
      'Rigid 30mm thick floating book shelving engineered with hidden steel pins to prevent sagging',
      'Solid Shaker doors concealing games, books, and household clutter behind calm symmetry'
    ]
  },
  'utility-room-cabinets': {
    slug: 'utility-room-cabinets',
    category: 'fitted-storage',
    title: 'Utility Room Cabinets',
    metaTitle: 'Bespoke Utility & Boot Room Cabinetry | Laundry & Storage | Cabivella UK',
    metaDescription: 'Hardworking bespoke utility and boot room cabinetry. Washing machine housing towers, integrated drying racks, and boot storage benches.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Modular or full wall-run configurations tailored to architectural utility blueprint',
    materials: ['Waterproof marine plinth bases', 'Impact-resistant ABS edge banding', 'Solid turned hardwood coat pegs'],
    finishOptions: ['Nordic Slate Grey', 'Eucalyptus Green', 'Chalk White Satin', 'Natural Ash Veneer'],
    installationScope: 'Delivered in protected modules with pre-routed plumbing and electrical service voids.',
    image: '/assets/img/models/utility-room-cabinets.webp',
    gallery: ['/assets/img/models/utility-room-cabinets.webp', '/assets/img/models/alcove-cupboards.webp'],
    description: 'Transform hardworking utility and boot spaces into peaceful, highly functional transition rooms. Designed for boots, family laundry, and sports equipment with durable water-resistant materials and ventilated cupboards.',
    keyFeatures: [
      'Ergonomically elevated washing machine and tumble dryer pedestals with deep laundry drawers below',
      'Ceiling-mounted pulley clothes drying airers with timber laths matching cabinetry',
      'Solid oak bench seating with open shoe cubbies and boot storage drawers underneath',
      'Full-height broom and ironing board cupboards with integrated vacuum charging docks'
    ]
  },

  // 6. KITCHEN DOORS
  'shaker-replacement-doors': {
    slug: 'shaker-replacement-doors',
    category: 'kitchen-doors',
    title: 'Shaker Replacement Doors',
    metaTitle: 'Bespoke Replacement Shaker Kitchen Doors | Made to Measure | Cabivella UK',
    metaDescription: 'Precision made-to-measure replacement Shaker kitchen doors. Transform existing carcasses with master-crafted Turkish hardwood fronts.',
    leadTime: 'Typically 3–5 weeks (production & UK transit)',
    dimensionsMm: 'Exact millimetre replacement sizing to fit any existing UK or European carcasses',
    materials: ['High-density solid timber and moisture-resistant core', 'Oven-baked polyurethane spray lacquer'],
    finishOptions: ['Any RAL, NCS, or British Heritage colour swatch', 'Raw primed for on-site hand painting'],
    installationScope: 'Pre-machined 35mm hinge holes drilled to match your existing hinge centre positions.',
    image: '/assets/img/models/shaker-replacement-doors.webp',
    gallery: ['/assets/img/models/shaker-replacement-doors.webp', '/assets/img/models/handleless-cabinet-fronts.webp'],
    description: 'Renovate your kitchen sustainably without the upheaval of replacing sound carcasses. Keep your existing layout and replace only the doors, drawer fronts, and end panels with bespoke made-to-measure timber joinery.',
    keyFeatures: [
      'Precision CNC hinge boring matched to your exact existing carcass hinge offsets',
      'Oven-baked multi-coat polyurethane finish providing resilient protection against daily wear',
      'Available in both classic 70mm and modern 20mm slimline Shaker profile widths',
      'Matching plinths, cornices, pelmets, corner posts, and appliance cladding panels'
    ]
  },
  'handleless-cabinet-fronts': {
    slug: 'handleless-cabinet-fronts',
    category: 'kitchen-doors',
    title: 'Handleless Cabinet Fronts',
    metaTitle: 'Replacement Handleless Kitchen Fronts & J-Pull Doors | Cabivella UK',
    metaDescription: 'Sleek handleless cabinet fronts and J-pull replacement kitchen doors. Satin and tactile matt finishes manufactured to bespoke UK sizes.',
    leadTime: 'Typically 3–5 weeks (production & UK transit)',
    dimensionsMm: 'Custom sized to existing carcasses with precision-machined J-finger-pull bevels',
    materials: ['Deep-routable moisture-resistant core', 'Continuous wrapped silk lacquer or veneer'],
    finishOptions: ['Matt Cashmere Silk', 'Dust Grey Basalt', 'Porcelain White', 'Smoked European Walnut'],
    installationScope: 'Supplied with precision hinge drilling template and matching architectural end panels.',
    image: '/assets/img/models/handleless-cabinet-fronts.webp',
    gallery: ['/assets/img/models/handleless-cabinet-fronts.webp', '/assets/img/models/shaker-replacement-doors.webp'],
    description: 'Transform an existing kitchen into a sleek architectural showpiece with bespoke handleless fronts. Features an integrated 45-degree ergonomic finger pull routed directly into the solid top edge of each door for effortless opening.',
    keyFeatures: [
      'Precision 45-degree ergonomic J-pull grip machined directly into the solid core material',
      'Laser-fused perimeter edge banding providing a continuous water-resistant barrier',
      'Available in ultra-matte anti-fingerprint finishes that minimize smudges and glare',
      'Full suite of matching appliance door fronts, filler fillets, and corner return trims'
    ]
  }
};
