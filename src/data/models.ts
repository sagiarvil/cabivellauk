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
    title: 'Classic Shaker Kitchens',
    metaTitle: 'Classic Shaker Kitchens | Made-to-Measure British Joinery | Cabivella UK',
    metaDescription: 'Timeless made-to-measure Shaker kitchens featuring solid hardwood stiles, mortise-and-tenon joints, and precision motion hardware tailored to UK homes.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Made-to-measure (typical 600mm carcass depth, bespoke ceiling-height runs)',
    materials: ['Solid European Ash timber frame', 'High-density moisture-resistant MR-MDF core', 'Concealed hydraulic soft-close runners'],
    finishOptions: ['Heritage Sage Green', 'Chalk White', 'Deep Oxford Navy', 'Satin Pumice', 'Natural Oiled Oak interior'],
    installationScope: 'Delivered pre-assembled in protective timber crates; ready for installation by your appointed contractor or local specialist.',
    image: '/assets/img/models/shaker-kitchens.webp',
    gallery: ['/assets/img/models/shaker-kitchens.webp', '/assets/img/models/slim-frame-shaker-kitchens.webp'],
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
    title: 'Contemporary Monolithic Kitchens',
    metaTitle: 'Contemporary Minimalist Kitchens | Handleless Bespoke Cabinetry | Cabivella UK',
    metaDescription: 'Monolithic handleless contemporary kitchens with seamless shadow gaps and architectural proportions. Master timber joinery engineered for UK open-plan living.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Bespoke architectural dimensions aligned to room ceiling and window heights',
    materials: ['Super-matt anti-fingerprint thermal laminate', 'Continuous shadow gap aluminium rails', 'Double-wall steel drawer systems'],
    finishOptions: ['Cashmere Grey', 'Smoked European Oak', 'Warm Charcoal Basalt', 'Alabaster Silk Matt'],
    installationScope: 'Full cabinet joinery delivery with laser-levelled shadow gap profiles and concealed hanging brackets.',
    image: '/assets/img/models/contemporary-kitchens.webp',
    gallery: ['/assets/img/models/contemporary-kitchens.webp', '/assets/img/models/island-suite-kitchens.webp'],
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
    title: 'Compact Studio Kitchenettes',
    metaTitle: 'Compact Kitchen Units (160–240cm) | Studio & Apartment Joinery | Cabivella UK',
    metaDescription: 'High-density compact kitchen cabinetry from 160cm runs. Fully equipped with integrated appliances, undermount storage and durable worktops for UK apartments.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Standard 1600mm to 2400mm modular widths, tailored ceiling extensions available',
    materials: ['Moisture-resistant 18mm melamine-faced carcass', 'High-pressure laminate (HPL) waterproof worktop', 'Full-extension soft-close cutlery and pan drawers'],
    finishOptions: ['Anthracite & Natural Timber', 'Pure White Satin', 'Pumice Grey & Nordic Birch'],
    installationScope: 'Modular factory-assembled carcasses for rapid installation in secondary suites, mews houses, and urban apartments.',
    image: '/assets/img/models/compact-kitchens.webp',
    gallery: ['/assets/img/models/compact-kitchens.webp', '/assets/img/models/contemporary-kitchens.webp'],
    description: 'Maximal functionality within disciplined urban footprints. Our compact kitchen runs assemble induction cooking, refrigeration, extraction, and refuse sorting into a unified 160cm to 240cm architectural joinery envelope.',
    keyFeatures: [
      'Ergonomically planned 1600mm base unit with integrated sink and appliance cut-outs',
      'Double-height overhead wall storage maximizing vertical room volume',
      'Durable HPL worktop surface impervious to common household acids and boiling water spills',
      'Integrated under-cabinet warm LED task illumination channels'
    ]
  },
  'slim-frame-shaker-kitchens': {
    slug: 'slim-frame-shaker-kitchens',
    category: 'kitchens',
    title: 'Slim-Frame Contemporary Shaker',
    metaTitle: 'Slim-Frame Shaker Kitchens | Micro-Shaker Joinery | Cabivella UK',
    metaDescription: 'Refined 20mm slim-frame contemporary Shaker cabinetry. A delicate transitional aesthetic bridging historic proportions with modern detailing.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Tailored room elevations with continuous plinths and cornice returns',
    materials: ['Solid Ash 20mm outer frame', 'Veneered centre panel', 'Concealed soft-close mechanics'],
    finishOptions: ['Pistachio & Bone White', 'Fumed Oak Veneer', 'Deep Slate Blue'],
    installationScope: 'Delivered pre-assembled; dry-fit by your appointed joiner or kitchen installer.',
    image: '/assets/img/models/slim-frame-shaker-kitchens.webp',
    gallery: ['/assets/img/models/slim-frame-shaker-kitchens.webp', '/assets/img/models/shaker-kitchens.webp'],
    description: 'A contemporary evolution of the traditional Shaker aesthetic, featuring slim 20mm stiles that deliver delicate architectural shadowlines without compromising timber strength.',
    keyFeatures: [
      'Slimline 20mm frame detailing for a lighter, modern architectural profile',
      'Solid hardwood stiles precision-machined with micro-bevel internal joins',
      'Integrated plinth drawers and concealed bin pull-out solutions',
      'Multi-coat oven-cured polyurethane spray lacquer in bespoke heritage colours'
    ]
  },
  'island-suite-kitchens': {
    slug: 'island-suite-kitchens',
    category: 'kitchens',
    title: 'Ergonomic Island Suites & Breakfast Bars',
    metaTitle: 'Kitchen Island Suites & Breakfast Bars | Bespoke Islands | Cabivella UK',
    metaDescription: 'Freestanding and integrated kitchen island cabinetry with cantilevered seating overhangs, wine storage and induction cooking bays.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Tailored island dimensions from 1800mm x 900mm up to 3600mm x 1200mm',
    materials: ['Reinforced internal steel bracing', 'Kiln-dried oak framing', 'Heavy-load drawer systems'],
    finishOptions: ['Contrast Fluted Walnut', 'Matt Black Forest Green', 'Stained White Oak'],
    installationScope: 'Engineered for seamless plumbing and electrical feeds with sub-floor service voids.',
    image: '/assets/img/models/island-suite-kitchens.webp',
    gallery: ['/assets/img/models/island-suite-kitchens.webp', '/assets/img/models/contemporary-kitchens.webp'],
    description: 'The social anchor of modern open-plan living. Our bespoke island cabinetry unites culinary preparation, breakfast seating, and concealed wine or pan storage into a sculptural centrepiece.',
    keyFeatures: [
      'Cantilevered timber and stone breakfast bar overhangs with hidden steel supports',
      'Dedicated pan and crockery pull-outs tested for 40kg dynamic load ratings',
      'Integrated service voids for downdraft induction hobs and under-counter appliances',
      'Fluted or panelled back wraps complementing adjacent living and dining joinery'
    ]
  },

  // 2. BATHROOMS
  'wall-hung-vanities': {
    slug: 'wall-hung-vanities',
    category: 'bathrooms',
    title: 'Wall-Hung Basin Vanities',
    metaTitle: 'Wall-Hung Bathroom Vanities (80–120cm) | Bespoke Vanity Units | Cabivella UK',
    metaDescription: 'Contemporary floating wall-hung vanity consoles with integrated basins, moisture-resistant lacquer finishes, and deep soft-close toiletry drawers.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 800mm, 1000mm, 1200mm | Height: 520mm | Depth: 480mm',
    materials: ['Moisture-resistant MR-MDF core', 'Polyurethane satin spray lacquer', 'Heavy-duty adjustable steel wall-mounting brackets'],
    finishOptions: ['Matt Anthracite', 'Pure Alabaster White', 'Earthy Terracotta', 'Sage Grey'],
    installationScope: 'Supplied with precision 3-way adjustable heavy-duty hanging brackets for solid masonry or reinforced stud walls.',
    image: '/assets/img/models/wall-hung-vanities.webp',
    gallery: ['/assets/img/models/wall-hung-vanities.webp', '/assets/img/models/double-basin-vanities.webp'],
    description: 'Floating vanity architecture that expands perceived floor space while providing generous concealed storage. Precision mitred drawer edges and integrated basin cut-outs accommodate standard UK bottle traps effortlessly.',
    keyFeatures: [
      'Twin push-to-open or discreet J-pull soft-close drawers with internal bamboo dividers',
      'Supplied with pre-milled waste pipe and water supply clearance cavities',
      'Water-repellent 4-coat polyurethane finish designed specifically for high-humidity bathroom environments',
      'Pairs seamlessly with undermount ceramic basins or surface-mounted solid stone vessels'
    ]
  },
  'fluted-vanities': {
    slug: 'fluted-vanities',
    category: 'bathrooms',
    title: 'Fluted & Reeded Vanity Consoles',
    metaTitle: 'Fluted Bathroom Vanities | Reeded Timber Joinery | Cabivella UK',
    metaDescription: 'Textured fluted and reeded timber bathroom vanity units. Tactile vertical ribbing with quartz or marble worktop options for luxurious UK bathrooms.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 900mm, 1200mm, 1500mm | Height: 820mm (freestanding) or 540mm (wall-hung)',
    materials: ['Precision CNC-routed solid timber fluted panels', '18mm water-resistant birch ply internal structure', 'Concealed touch-release drawer slides'],
    finishOptions: ['Natural Bleached Oak', 'Smoked Walnut', 'Forest Green Matt', 'Brushed Brass Accent Handles'],
    installationScope: 'Available in both wall-hung and architectural steel/timber leg-mounted freestanding configurations.',
    image: '/assets/img/models/fluted-vanities.webp',
    gallery: ['/assets/img/models/fluted-vanities.webp', '/assets/img/models/wall-hung-vanities.webp'],
    description: 'Tactile three-dimensional fluted surfaces capture cascading light across bathroom walls. Our reeded vanity units combine bespoke timber craftsmanship with daily practical storage.',
    keyFeatures: [
      'Precision CNC-machined vertical flutes with seamless wraparound corner continuity',
      'Deep bottom drawer for tall shampoo bottles and folded bath sheets',
      'Solid brass knurled or finger-pull hardware options available',
      'Waterproof seal applied across all joint lines and plumbing penetration points'
    ]
  },
  'tall-bathroom-storage': {
    slug: 'tall-bathroom-storage',
    category: 'bathrooms',
    title: 'Tall Bathroom Linen Towers',
    metaTitle: 'Tall Bathroom Storage Columns | Linen Cupboards | Cabivella UK',
    metaDescription: 'Slimline vertical bathroom storage columns with integrated laundry tilt bins, adjustable glass shelving, and moisture-resistant internal carcases.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Width: 400mm | Depth: 370mm | Height: 1800mm',
    materials: ['Moisture-resistant core with anti-warp vertical stiffeners', 'Tempered safety glass interior shelves', 'Concealed 110-degree soft-close hinges'],
    finishOptions: ['Eiche Gold Oak Veneer', 'Matt Silk Grey', 'Satin White Lacquer', 'Deep Bronze Metal Trim'],
    installationScope: 'Wall-mounted vertical column with safety anti-tilt wall anchors and adjustable internal shelf clips.',
    image: '/assets/img/models/tall-bathroom-storage.webp',
    gallery: ['/assets/img/models/tall-bathroom-storage.webp', '/assets/img/models/slim-mirror-storage-cabinets.webp'],
    description: 'A space-efficient vertical storage solution designed to organize towels, linen, and personal care essentials without encroaching on floor space in compact British bathrooms.',
    keyFeatures: [
      'Integrated lower tilt-out laundry basket hamper for concealed daily linen sorting',
      'Upper section with 3 adjustable 6mm tempered safety glass shelves',
      'Reversible door hanging (left or right swing) to adapt to any bathroom corner',
      'Full-height moisture-barrier edge seal prevents steam infiltration during hot showers'
    ]
  },
  'double-basin-vanities': {
    slug: 'double-basin-vanities',
    category: 'bathrooms',
    title: 'Double Basin Architectural Vanities',
    metaTitle: 'Double Basin Bathroom Vanities (140–180cm) | Twin Vanities | Cabivella UK',
    metaDescription: 'Generous 140cm to 180cm twin-basin vanity consoles for master en-suite bathrooms. Dual mirrors, four deep drawers and bespoke quartz tops.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 1400mm, 1600mm, 1800mm | Height: 520mm | Depth: 500mm',
    materials: ['Marine-grade birch plywood substrate', 'High-density moisture-resistant lacquered fronts', 'Dual concealed drawer runners'],
    finishOptions: ['Nordic White Oak', 'Satin Pumice Grey', 'Midnight Navy', 'Warm Carrara Vein'],
    installationScope: 'Heavy-duty sub-frame mounting system engineered to support double stone sinks and heavy toiletries.',
    image: '/assets/img/models/double-basin-vanities.webp',
    gallery: ['/assets/img/models/double-basin-vanities.webp', '/assets/img/models/wall-hung-vanities.webp'],
    description: 'Engineered for shared master en-suites where morning schedules demand effortless dual access. Generous counter space separates twin under-mount basins above four symmetrical storage drawers.',
    keyFeatures: [
      'Four independent soft-close drawers with custom timber cosmetic trays',
      'Central partition with integrated hidden dual electrical shaver and toothbrush sockets',
      'Reinforced rear chassis designed to carry up to 90kg of combined stone and water weight',
      'Matching fluted or panelled side returns creating a monolithic freestanding illusion'
    ]
  },
  'slim-mirror-storage-cabinets': {
    slug: 'slim-mirror-storage-cabinets',
    category: 'bathrooms',
    title: 'Slim Recessed Mirror Storage Cabinets',
    metaTitle: 'Recessed Mirror Bathroom Cabinets | LED Mirror Storage | Cabivella UK',
    metaDescription: 'Flush-mounted and surface-hung bathroom mirror cabinets with internal demister pads, concealed toothbrush charging and dimmable warm LED halos.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 600mm, 800mm, 1200mm | Height: 800mm | Depth: 140mm',
    materials: ['Anodised aluminium slim profile', 'Copper-free silver mirror glass', 'Moisture-sealed internal carcase'],
    finishOptions: ['Brushed Brass Frame', 'Matt Black Halo', 'Frameless Bevelled Glass', 'Natural Oak Reveal'],
    installationScope: 'Recessed flush into 100mm stud walls or surface mounted with perimeter lighting returns.',
    image: '/assets/img/models/slim-mirror-storage-cabinets.webp',
    gallery: ['/assets/img/models/slim-mirror-storage-cabinets.webp', '/assets/img/models/tall-bathroom-storage.webp'],
    description: 'Combining high-illumination grooming with hidden shallow storage. Our mirror cabinets conceal electrical toothbrushes, cosmetics, and medicines flush behind reflection glass.',
    keyFeatures: [
      'Heated mirror demister pad preventing condensation build-up in steamy en-suites',
      'Concealed internal shaver/toothbrush charging point (IP44 compliant)',
      'Touchless infrared sensor switch for dimmable 2700K warm LED illumination',
      'Adjustable internal glass shelves with silicone vibration buffers'
    ]
  },

  // 3. PANTRY & LARDER
  'tall-larder-cupboards': {
    slug: 'tall-larder-cupboards',
    category: 'pantry-larder',
    title: 'Full-Height Tandem Larder Cupboards',
    metaTitle: 'Tall Larder Cupboards & Tandem Pantries | Kitchen Joinery | Cabivella UK',
    metaDescription: 'Floor-to-ceiling tall larder cupboards with door-mounted spice racks, solid oak dovetailed inner drawers, and cold marble shelf options for UK homes.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 600mm, 900mm, 1200mm | Depth: 650mm | Heights: 2150mm to 2400mm',
    materials: ['Kiln-dried solid timber framework', '18mm moisture-resistant carcass', 'Heavy-gauge steel tandem pull-out mechanisms'],
    finishOptions: ['Heritage Sage', 'Oxford Navy', 'Chalk White with Natural Oak Interior', 'Satin Basalt'],
    installationScope: 'Delivered pre-assembled in protective timber packaging; installs with integrated levelling feet and top wall anchors.',
    image: '/assets/img/models/tall-larder-cupboards.webp',
    gallery: ['/assets/img/models/tall-larder-cupboards.webp', '/assets/img/models/chefs-double-larder.webp'],
    description: 'The culinary centrepiece of a considered kitchen. When opened, our tall larder cupboards reveal a meticulously organized interior with shallow door-mounted spice racks and deep full-extension oak drawers.',
    keyFeatures: [
      'Five solid oak internal dovetailed drawers with soft-close motion control',
      'Twin door-hung spice and bottle shelves engineered with anti-sway retaining rails',
      'Integrated cold Carrara marble or quartz shelf for pastry preparation and cheese storage',
      'Automatic LED illumination activated when doors are opened'
    ]
  },
  'corner-pantry-storage': {
    slug: 'corner-pantry-storage',
    category: 'pantry-larder',
    title: 'Corner Pantry & Swivel Shelf Systems',
    metaTitle: 'Corner Pantry Cupboards | LeMans & Carousel Storage | Cabivella UK',
    metaDescription: 'Eliminate dead kitchen corners with smooth-glide LeMans and carousel corner pantry mechanisms. High-capacity made-to-measure kitchen joinery.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Corner footprint: 900x900mm or 1050x1050mm blind corner configurations',
    materials: ['Anti-slip melamine tray bases', 'Chrome or anthracite steel perimeter rails', 'Heavy-load swivel arms (up to 25kg per tray)'],
    finishOptions: ['Anthracite & Smoked Oak', 'Silver Chrome & White Melamine', 'Champagne Bronze'],
    installationScope: 'Precision factory-installed mechanical arms with micro-adjustment for smooth swing clearance.',
    image: '/assets/img/models/corner-pantry-storage.webp',
    gallery: ['/assets/img/models/corner-pantry-storage.webp', '/assets/img/models/pullout-larder-tower.webp'],
    description: 'Kitchen corners often trap valuable storage space. Our bespoke corner pantries incorporate precision-balanced swivel shelves that swing completely outside the cupboard carcass, bringing heavy cast-iron cookware effortlessly within reach.',
    keyFeatures: [
      'Twin independent contour trays that glide fully clear of the cabinet opening',
      'Anti-slip textured base panels prevent pots and jars from sliding during movement',
      'Integrated soft-close dampening on both outward travel and return docking',
      'Bespoke carcass sizing adapted to awkward chimney breasts or pipe boxing'
    ]
  },
  'chefs-double-larder': {
    slug: 'chefs-double-larder',
    category: 'pantry-larder',
    title: "Chef's Double Pantry Armoire",
    metaTitle: "Chef's Double Larder Armoire | Luxury Pantry Joinery | Cabivella UK",
    metaDescription: "Double-door chef's larder armoire with fold-out door shelves, deep drawers, appliance station with quartz bench, and wine racking.",
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Width: 1200mm | Depth: 650mm | Height: 2200mm to 2400mm',
    materials: ['Solid Ash face frames', 'Natural Oak veneer carcass', 'Solid stone worktop slab'],
    finishOptions: ['Classic British Olive Green', 'Pumice Satin', 'Rich Navy & Brass'],
    installationScope: 'Freestanding or integrated between tall refrigeration runs; anchored securely to structural back wall.',
    image: '/assets/img/models/chefs-double-larder.webp',
    gallery: ['/assets/img/models/chefs-double-larder.webp', '/assets/img/models/tall-larder-cupboards.webp'],
    description: "Designed for avid cooks who value order and immediate ingredient access. Our Chef's Double Larder combines door-mounted condiment tiers with an internal stone preparation shelf and deep pan drawers.",
    keyFeatures: [
      'Twin full-height doors holding four tiers of solid timber spice and bottle shelves',
      'Integrated cold quartz preparation ledge for food processors and dry decanting',
      'Four deep dovetailed solid oak internal drawers with soft-close motion',
      'Integrated internal 13A dual power socket for stand mixers and coffee grinders'
    ]
  },
  'pullout-larder-tower': {
    slug: 'pullout-larder-tower',
    category: 'pantry-larder',
    title: 'Pull-Out Vertical Larder Towers',
    metaTitle: 'Pull-Out Larder Towers (30–45cm) | Slim Kitchen Pantries | Cabivella UK',
    metaDescription: 'High-density vertical pull-out pantry towers from 300mm to 450mm widths. Dual-sided access with height-adjustable wire baskets.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 300mm, 400mm, 450mm | Depth: 600mm | Height: 2150mm',
    materials: ['Reinforced bottom and top telescopic runners', 'Powder-coated steel baskets with solid bases', 'Heavy-gauge steel centre spine'],
    finishOptions: ['Anthracite Wire & Timber', 'Brushed Steel & White', 'Matt Black'],
    installationScope: 'Factory installed on synchronised top and bottom runners rated for 80kg total capacity.',
    image: '/assets/img/models/pullout-larder-tower.webp',
    gallery: ['/assets/img/models/pullout-larder-tower.webp', '/assets/img/models/corner-pantry-storage.webp'],
    description: 'A slimline storage powerhouse that transforms narrow gaps adjacent to built-in ovens into dual-sided accessible pantries. Pulls forward smoothly in a single fluid gesture.',
    keyFeatures: [
      'Six height-adjustable storage baskets to accommodate tall cereal boxes and oil bottles',
      'Dual-sided accessibility allowing quick selection without reaching behind items',
      'Synchronised top-guide runner guarantees whisper-quiet glide without racking or tilt',
      'Dampened soft-close action cushions the mechanism on closure even under full load'
    ]
  },

  // 4. COFFEE STATIONS
  'pocket-door-coffee-stations': {
    slug: 'pocket-door-coffee-stations',
    category: 'coffee-stations',
    title: 'Bi-Fold Pocket-Door Barista Stations',
    metaTitle: 'Pocket-Door Coffee Stations | Concealed Breakfast Joinery | Cabivella UK',
    metaDescription: 'Luxury concealed coffee stations with smooth bi-fold pocket doors that slide into cabinet side cavities. Stone countertops and internal power for espresso machines.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 1000mm, 1200mm, 1400mm | Depth: 650mm | Height: 2200mm',
    materials: ['Precision mechanical pocket-door pivot systems', 'Quartz or solid granite preparation shelf', 'Veneered or lacquered internal cabinetry'],
    finishOptions: ['Smoked Oak & Matt Anthracite', 'Bleached Ash & Cashmere', 'Blackened Oak with Brass Inlays'],
    installationScope: 'Supplied with pre-calibrated pocket cavities and integrated cable management routing for high-wattage coffee equipment.',
    image: '/assets/img/models/pocket-door-coffee-stations.webp',
    gallery: ['/assets/img/models/pocket-door-coffee-stations.webp', '/assets/img/models/breakfast-armoire-coffee-stations.webp'],
    description: 'The pinnacle of domestic morning luxury. When entertaining or brewing morning espresso, doors glide effortlessly into side recesses, remaining completely concealed. Once routines conclude, doors close flush to restore serene room proportions.',
    keyFeatures: [
      'Concealed pocket sliders allow full, unobstructed access to coffee grinders and portafilters',
      'Waterproof quartz preparation surface resistant to coffee acid stains and hot kettle rings',
      'Four integrated 13A UK plug sockets and cable ports concealed below worktop level',
      'Upper storage for artisan syrups, glassware, and espresso cup warmers'
    ]
  },
  'open-shelf-coffee-cabinets': {
    slug: 'open-shelf-coffee-cabinets',
    category: 'coffee-stations',
    title: 'Open-Shelf Artisan Coffee Credenzas',
    metaTitle: 'Open-Shelf Coffee Cabinets | Free-Standing Coffee Bars | Cabivella UK',
    metaDescription: 'Free-standing coffee bars and open-shelf breakfast cupboards with mug racks, display shelving, and closed lower cupboards for supplies.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 800mm, 1000mm | Depth: 450mm | Height: 1850mm',
    materials: ['Solid European Oak shelves', 'Moisture-resistant carcass', 'Brass cup hooks and rail fittings'],
    finishOptions: ['Warm White Satin', 'Rustic Sage Oak', 'Charcoal & Natural Timber'],
    installationScope: 'Pre-assembled base credenza with upper shelf rack module and safety anti-topple wall fixing kit.',
    image: '/assets/img/models/open-shelf-coffee-cabinets.webp',
    gallery: ['/assets/img/models/open-shelf-coffee-cabinets.webp', '/assets/img/models/illuminated-beverage-stations.webp'],
    description: 'For coffee enthusiasts who take pride in displaying artisan drippers, bean canisters, and hand-thrown ceramics. Open slatted shelving pairs with closed lower cabinetry for bean storage and milk frothers.',
    keyFeatures: [
      'Two open display tiers with solid brass retaining rails and integrated hanging cup hooks',
      'Ergonomic preparation worktop at comfortable 900mm pouring height',
      'Twin lower cupboards with adjustable shelving for coffee bean bags and cleaning supplies',
      'Durable wipe-clean surfaces engineered for daily coffee dripper cleaning'
    ]
  },
  'breakfast-armoire-coffee-stations': {
    slug: 'breakfast-armoire-coffee-stations',
    category: 'coffee-stations',
    title: 'Concealed Breakfast Armoires',
    metaTitle: 'Concealed Breakfast Armoires | Integrated Coffee Cupboards | Cabivella UK',
    metaDescription: 'Full-height breakfast armoires concealing toasters, kettles, and coffee machinery behind classic panelled doors. Fitted with internal stone ledges.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 900mm, 1100mm | Depth: 600mm | Height: 2150mm to 2350mm',
    materials: ['Solid hardwood face frames', 'Heat-shielded appliance compartment', 'Integrated ventilation louvres'],
    finishOptions: ['Deep Forest Green', 'Chalk Bone White', 'Oiled Oak Interior'],
    installationScope: 'Delivered pre-assembled; electrical connections prepared through designated service panel.',
    image: '/assets/img/models/breakfast-armoire-coffee-stations.webp',
    gallery: ['/assets/img/models/breakfast-armoire-coffee-stations.webp', '/assets/img/models/pocket-door-coffee-stations.webp'],
    description: 'Keep kitchen counters pristine by locating morning clutter—toasters, blenders, kettles, and pod machines—within a dedicated breakfast armoire with integrated heat dissipation.',
    keyFeatures: [
      'Heat-deflecting upper ceiling lining and rear ventilation relief for safe toaster operation',
      'Integrated quartz or marble ledge prevents moisture damage from steaming kettles',
      'Door-mounted shallow tiers for honey jars, artisan tea tins, and mugs',
      'Lower pull-out crumb drawer and dedicated bin compartment'
    ]
  },
  'illuminated-beverage-stations': {
    slug: 'illuminated-beverage-stations',
    category: 'coffee-stations',
    title: 'Illuminated Quartz Beverage Stations',
    metaTitle: 'Illuminated Beverage Stations | Luxury Bar Joinery | Cabivella UK',
    metaDescription: 'Architectural beverage stations with integrated LED linear backlights, fluted timber splashbacks, and under-counter wine cooler surrounds.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Widths: 1200mm, 1500mm, 1800mm | Depth: 600mm | Height: 2200mm',
    materials: ['Acoustic fluted timber panelling', 'Engineered quartz countertop and upstand', 'Dimmable 2700K warm LED channels'],
    finishOptions: ['Fluted Dark Walnut', 'Smoked Bronze Glass', 'Velvet Matt Charcoal'],
    installationScope: 'Bespoke joinery installation with concealed electrical drivers and wine cooler ventilation grilles.',
    image: '/assets/img/models/illuminated-beverage-stations.webp',
    gallery: ['/assets/img/models/illuminated-beverage-stations.webp', '/assets/img/models/open-shelf-coffee-cabinets.webp'],
    description: 'Transition effortlessly from morning flat whites to evening aperitifs. This multi-purpose station features warm back-lit glassware display shelves above integrated wine refrigeration.',
    keyFeatures: [
      'Continuous warm 2700K LED linear illumination routed flush behind vertical flutes',
      'Dedicated alcove for dual-zone under-counter wine and beverage coolers',
      'Solid quartz stone worktop and high-rise matching upstand',
      'Stemware racks in brushed brass or blackened steel for wine and champagne glasses'
    ]
  },

  // 5. FITTED STORAGE
  'alcove-cupboards': {
    slug: 'alcove-cupboards',
    category: 'fitted-storage',
    title: 'Victorian Alcove Cabinets & Shelving',
    metaTitle: 'Victorian Alcove Cabinets & Bookshelves | Chimney Breast Joinery | Cabivella UK',
    metaDescription: 'Bespoke alcove cupboards and floating shelving built to fit uneven Victorian and Edwardian chimney breast recesses. Classical mouldings and cable routing.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Individually scribed to site alcove widths (typical 800mm to 1400mm per recess)',
    materials: ['High-density moisture-resistant MDF', 'Solid timber face framing and cornice', 'Concealed push-latch or brass handles'],
    finishOptions: ['Heritage Neutral Matt', 'Oxford Navy', 'Studio Green', 'Primed for on-site painting'],
    installationScope: 'Supplied with generous scribing fillets and adjustable shelf brackets for uneven period plaster walls.',
    image: '/assets/img/models/alcove-cupboards.webp',
    gallery: ['/assets/img/models/alcove-cupboards.webp', '/assets/img/models/boot-room-cabinetry.webp'],
    description: 'Turn awkward period chimney recesses into calming architectural features. Our alcove units combine deep lower storage cupboards with thick floating display shelves, concealing media wiring effortlessly.',
    keyFeatures: [
      'Lower cupboards designed to conceal routers, gaming consoles, and television equipment',
      'Heavy-duty 36mm thick floating shelves with concealed internal steel rod brackets',
      'Generous scribing fillets allow neat scribing against uneven Victorian plasterwork',
      'Integrated cable pass-throughs between upper shelving and lower equipment cupboards'
    ]
  },
  'utility-room-cabinets': {
    slug: 'utility-room-cabinets',
    category: 'fitted-storage',
    title: 'Utility Room & Laundry Stacking Towers',
    metaTitle: 'Utility Room Cabinets & Laundry Stacking Units | Boot Room Storage | Cabivella UK',
    metaDescription: 'Durable utility room storage units with integrated washing machine/dryer stacking frames, pull-out laundry baskets, and broom cupboards for UK homes.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Modular 650mm depth units, custom run lengths from 1500mm to 3600mm',
    materials: ['100% moisture-resistant core boards', 'High-impact 1.5mm ABS protective edging', 'Heavy-vibration anti-vibration rubber isolation pads'],
    finishOptions: ['Porcelain White', 'Earthy Sage Green', 'Dove Grey Satin', 'Natural Birch Interior'],
    installationScope: 'Heavy-duty modular carcass installation with vibration-damping levelling plinths.',
    image: '/assets/img/models/utility-room-cabinets.webp',
    gallery: ['/assets/img/models/utility-room-cabinets.webp', '/assets/img/models/dressing-room-wardrobes.webp'],
    description: 'Bespoke joinery engineered to tame laundry clutter and household utility. Conceals stacked washing machines, vacuums, ironing boards, and pet care within robust, moisture-resistant cabinetry.',
    keyFeatures: [
      'Ergonomic raised appliance plinths with pull-out laundry basket loading shelves below',
      'Tall broom and ironing board cupboard with integrated Dyson vacuum dock power outlet',
      'Deep Belfast sink base cupboard with waterproof plastic-lined drip tray base',
      'Impact-resistant 1.5mm ABS edge-banding prevents chipping from laundry baskets'
    ]
  },
  'boot-room-cabinetry': {
    slug: 'boot-room-cabinetry',
    category: 'fitted-storage',
    title: 'Boot Room & Mudroom Bench Joinery',
    metaTitle: 'Boot Room Joinery & Hallway Mudroom Benches | Country Storage | Cabivella UK',
    metaDescription: 'Country-style boot room joinery with integrated solid oak bench seating, tongue-and-groove back panelling, shoe pigeonholes, and coat hooks.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Tailored widths from 1400mm to 3000mm | Depth: 500mm | Height: 2200mm',
    materials: ['Solid European Oak bench top', 'Moisture-resistant tongue-and-groove panelling', 'Cast iron or antique brass double coat hooks'],
    finishOptions: ['Deep English Olive', 'Flint Grey', 'Vintage Parchment', 'Natural Oiled Oak'],
    installationScope: 'Delivered in pre-fitted modular assemblies with scribing fillets for hallway cornices.',
    image: '/assets/img/models/boot-room-cabinetry.webp',
    gallery: ['/assets/img/models/boot-room-cabinetry.webp', '/assets/img/models/alcove-cupboards.webp'],
    description: 'An indispensable transition space between the British outdoors and home interior. Features a welcoming solid oak bench, under-seat shoe pigeonholes, and sturdy cast iron coat hooks.',
    keyFeatures: [
      'Solid 40mm thick character oak bench seat with rounded bullnose comfort edge',
      'Open shoe and welly boot pigeonholes or smooth pull-out lower shoe drawers',
      'Classic tongue-and-groove timber back panelling protecting walls from wet jackets',
      'Upper overhead storage cupboards for winter scarves, hats, and sporting kit'
    ]
  },
  'dressing-room-wardrobes': {
    slug: 'dressing-room-wardrobes',
    category: 'fitted-storage',
    title: 'Dressing Room & Wardrobe Suites',
    metaTitle: 'Bespoke Dressing Rooms & Fitted Wardrobes | Walk-In Closets | Cabivella UK',
    metaDescription: 'Full-height bespoke fitted wardrobes and walk-in dressing room suites with illuminated hanging rails, glass-fronted drawers, and shoe galleries.',
    leadTime: 'Typically 6–8 weeks (production & UK transit)',
    dimensionsMm: 'Tailored floor-to-ceiling elevations scribed to ceiling coving and skirting',
    materials: ['Lacquered MDF or natural oak veneer', 'Concealed LED hanging rails with diffuser lenses', 'Dovetailed solid timber internal drawers'],
    finishOptions: ['Smoked Walnut Veneer', 'Cashmere Matt Lacquer', 'Alabaster Silk with Brass Hardware'],
    installationScope: 'Complete architectural wardrobe installation scribed flush to room plaster and coving.',
    image: '/assets/img/models/dressing-room-wardrobes.webp',
    gallery: ['/assets/img/models/dressing-room-wardrobes.webp', '/assets/img/models/utility-room-cabinets.webp'],
    description: 'Transform bedroom corners or dedicated dressing rooms into serene personal boutiques. Our fitted wardrobes combine double-hanging spaces with velvet-lined jewellery drawers and integrated warm LED lighting.',
    keyFeatures: [
      'Floor-to-ceiling panelled or flush doors with soft-close motion and magnetic catches',
      'Internal dual-height hanging rails with concealed warm 2700K wardrobe illumination',
      'Custom accessory drawers with solid timber dividers for watches, ties, and jewellery',
      'Dedicated angled shoe display shelves with polished brass heel stops'
    ]
  },

  // 6. KITCHEN DOORS
  'shaker-replacement-doors': {
    slug: 'shaker-replacement-doors',
    category: 'kitchen-doors',
    title: 'Classic Shaker Replacement Doors',
    metaTitle: 'Shaker Replacement Kitchen Doors | Made-to-Measure Fronts | Cabivella UK',
    metaDescription: 'Refresh existing kitchen carcasses with premium bespoke Shaker replacement doors. 20mm solid timber frames with custom hinge-hole boring to fit your units.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Custom cut to any millimeter dimension; standard 600, 500, 400, 300 widths available',
    materials: ['20mm solid European Ash timber frame', 'High-density moisture-resistant centre panel', 'Four-coat polyurethane lacquer'],
    finishOptions: ['Heritage Sage', 'Chalk White', 'Oxford Navy', 'Parchment', 'Custom Colour Match'],
    installationScope: 'Precision pre-drilled hinge holes matching your existing carcass hinge positions (IKEA, Howdens, Magnet, or bespoke).',
    image: '/assets/img/models/shaker-replacement-doors.webp',
    gallery: ['/assets/img/models/shaker-replacement-doors.webp', '/assets/img/models/slimline-micro-shaker-fronts.webp'],
    description: 'Transform tired kitchen cabinetry without the mess and expense of ripping out structurally sound carcasses. Our replacement Shaker doors are machined to your exact millimetre measurements with hinge holes bored to match your existing hinge centres.',
    keyFeatures: [
      'Exact millimetre replacement sizing to fit any UK carcass brand without alterations',
      'Hinge cup hole boring custom-aligned to your existing cabinet hinge positions',
      'Durable oven-cured polyurethane finish that resists chipping, steam, and everyday stains',
      'Matching plinths, pelmets, corner posts, and end panels supplied for a complete transformation'
    ]
  },
  'handleless-cabinet-fronts': {
    slug: 'handleless-cabinet-fronts',
    category: 'kitchen-doors',
    title: 'Handleless J-Pull Replacement Fronts',
    metaTitle: 'Handleless Replacement Kitchen Doors | J-Pull Fronts | Cabivella UK',
    metaDescription: 'Sleek integrated J-pull replacement kitchen cabinet doors. Super-matt and gloss lacquer finishes cut to bespoke sizes for modern kitchen refurbishments.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Made to measure with precision 22mm integrated J-profile finger grip',
    materials: ['22mm thick moisture-resistant core', 'Continuous routed J-profile handle groove', 'Velvety smooth polyurethane spray lacquer'],
    finishOptions: ['Super-Matt Anthracite', 'Pure Silk White', 'Cashmere Grey', 'Forest Green'],
    installationScope: 'Pre-bored for quick screw-fit installation on standard 35mm concealed hinges.',
    image: '/assets/img/models/handleless-cabinet-fronts.webp',
    gallery: ['/assets/img/models/handleless-cabinet-fronts.webp', '/assets/img/models/fluted-reeded-fronts.webp'],
    description: 'Achieve a clean, contemporary architectural look with integrated J-pull replacement fronts. The handle is precision-routed directly into the top edge of the 22mm door, eliminating the need for attached handles.',
    keyFeatures: [
      'Ergonomic 22mm deep finger grip profile machined directly into the door head',
      'Ultra-matt anti-fingerprint surface technology reduces visible smudges and marks',
      'Compatible with standard UK 18mm and 15mm carcass thicknesses',
      'Supplied with pre-drilled hinge cups for rapid, tool-friendly replacement installation'
    ]
  },
  'slimline-micro-shaker-fronts': {
    slug: 'slimline-micro-shaker-fronts',
    category: 'kitchen-doors',
    title: 'Slimline Micro-Shaker Fronts',
    metaTitle: 'Slimline Micro-Shaker Replacement Doors | Slim Rails | Cabivella UK',
    metaDescription: 'Modern micro-Shaker replacement doors with 15mm–20mm slim rails. Delicate transitional aesthetic designed to upgrade existing kitchen units.',
    leadTime: 'Typically 4–6 weeks (production & UK transit)',
    dimensionsMm: 'Bespoke millimeter dimensions with 18mm rail widths',
    materials: ['Solid Ash outer perimeter', 'Ultra-flat MR-MDF core', 'Multi-coat oven lacquer'],
    finishOptions: ['Bone White Satin', 'Fumed Oak', 'Sage Heritage', 'Charcoal Grey'],
    installationScope: 'Custom hinge boring provided to customer specification chart.',
    image: '/assets/img/models/slimline-micro-shaker-fronts.webp',
    gallery: ['/assets/img/models/slimline-micro-shaker-fronts.webp', '/assets/img/models/shaker-replacement-doors.webp'],
    description: 'The emerging favourite in British interior design. Narrow 18mm stiles offer an understated, tailored framing effect that brings classical warmth to contemporary modular carcasses.',
    keyFeatures: [
      'Ultra-narrow 18mm face rail creating crisp, contemporary shadow gaps',
      'Solid hardwood perimeter framing delivers robust edge impact resistance',
      'Factory-bored hinge recesses matching 35mm standard cups',
      'Matching cover panels and filler trims supplied in identical lacquer batch'
    ]
  },
  'fluted-reeded-fronts': {
    slug: 'fluted-reeded-fronts',
    category: 'kitchen-doors',
    title: 'Vertical Fluted & Reeded Front Panels',
    metaTitle: 'Fluted Replacement Kitchen Doors | Reeded Front Panels | Cabivella UK',
    metaDescription: 'Architectural fluted and reeded replacement cabinet doors with rhythmic vertical grooves. Adds luxury texture to kitchen islands and base units.',
    leadTime: 'Typically 5–7 weeks (production & UK transit)',
    dimensionsMm: 'Bespoke door and drawer front dimensions with continuous fluting alignment',
    materials: ['CNC-milled moisture-resistant panel', 'Solid wood or polyurethane spray lacquer', 'Heavy-duty hinge mounting backing'],
    finishOptions: ['Natural American Walnut', 'Bleached Oak', 'Matt Black', 'Deep Navy'],
    installationScope: 'Precision-bored for standard soft-close hinges or push-to-open touch latches.',
    image: '/assets/img/models/fluted-reeded-fronts.webp',
    gallery: ['/assets/img/models/fluted-reeded-fronts.webp', '/assets/img/models/handleless-cabinet-fronts.webp'],
    description: 'Add striking architectural texture to existing island runs or feature pantry units. Precision CNC-milled vertical flutes catch ambient room light, transforming ordinary modular units into focal furniture.',
    keyFeatures: [
      'Continuous vertical reed grooves aligned across adjoining door and drawer banks',
      'Pairs beautifully with push-to-open latches for a clean, uninterrupted tactile facade',
      'Polyurethane protective coating seals every groove against moisture and cooking vapours',
      'Ideal for kitchen island back wraps, breakfast bar seating, or feature statement cupboards'
    ]
  }
};
