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
  // KITCHENS
  'shaker-kitchens': {
    slug: 'shaker-kitchens',
    category: 'kitchens',
    title: 'Shaker Kitchens',
    metaTitle: 'Classic Shaker Kitchens | Cabivella UK',
    metaDescription: 'Timeless Shaker kitchens with clean rails, precision mortise detailing and durable painted finishes. Tailored to UK floorplans and layouts.',
    leadTime: '6–8 weeks verified',
    dimensionsMm: 'Made-to-measure (typical 600mm carcass depth, custom heights)',
    materials: ['Solid FSC Ash frame', 'Moisture-resistant MR-MDF core', 'Blum soft-close runners'],
    finishOptions: ['Satin lacquer', 'Chalk white', 'Sage green', 'Deep navy', 'Natural oak interior'],
    installationScope: 'Delivered pre-assembled; dry-fit by our accredited UK installers or your trade contractor.',
    image: '/assets/img/kitchen-inspiration.webp',
    gallery: ['/assets/img/kitchen-inspiration.webp', '/assets/img/concept-kitchen.webp'],
    description: 'The Shaker style embodies timeless honesty of proportion. Our shaker kitchen cabinetry combines traditional five-piece stiles with contemporary German hardware.',
    keyFeatures: ['Traditional 70mm or slimline 20mm Shaker rail profiles', 'Concealed Blum soft-close hinges with integrated buffer', 'Dovetail solid oak internal drawer boxes']
  },
  'contemporary-kitchens': {
    slug: 'contemporary-kitchens',
    category: 'kitchens',
    title: 'Contemporary Kitchens',
    metaTitle: 'Contemporary Minimalist Kitchens | Cabivella UK',
    metaDescription: 'Sleek handleless contemporary kitchens with seamless J-pull and tip-on integration. Modern European aesthetic crafted with precision joinery.',
    leadTime: '6–8 weeks verified',
    dimensionsMm: 'Bespoke architectural dimensions to room ceiling heights',
    materials: ['Super-matt anti-fingerprint thermal laminate', 'Brushed brass shadow gap rails', 'Anthracite steel drawer systems'],
    finishOptions: ['Cashmere grey', 'Smoked oak', 'Warm charcoal', 'Matt basalt'],
    installationScope: 'Full cabinet joinery delivery with laser-levelled shadow gap profiles.',
    image: '/assets/img/concept-kitchen.webp',
    gallery: ['/assets/img/concept-kitchen.webp', '/assets/img/kitchen-inspiration.webp'],
    description: 'Crisp monolithic surfaces and continuous unbroken horizontal lines characterize our contemporary kitchen direction. Designed for seamless open-plan living.',
    keyFeatures: ['True handleless recessed aluminium/brass rail channels', 'Push-to-open servo-drive motorization options', 'Integrated pocket door appliance garages']
  },
  'compact-kitchens': {
    slug: 'compact-kitchens',
    category: 'kitchens',
    title: 'Compact Kitchens',
    metaTitle: 'Compact Kitchen Cabinetry for City Living | Cabivella UK',
    metaDescription: 'Space-maximising compact kitchen joinery for London flats, Victorian conversions, and compact UK urban homes.',
    leadTime: '5–7 weeks verified',
    dimensionsMm: 'Custom micro-depth (450mm–550mm) and full ceiling height units',
    materials: ['High-density marine grade core', 'Concealed ventilation channels', 'Heavy-duty drawer runners'],
    finishOptions: ['Light travertine matt', 'Pecan veneer', 'Nordic birch', 'Soft clay'],
    installationScope: 'Compact flat or apartment access packaging; assembled on site where required.',
    image: '/assets/img/home-category-kitchens.webp',
    gallery: ['/assets/img/home-category-kitchens.webp'],
    description: 'Compact living demands uncompromising ergonomic intelligence. Every millimetre of vertical height is utilised with pull-out pantries and concealed extractor housings.',
    keyFeatures: ['Floor-to-ceiling single run storage maximization', 'Corner LeMans twin pull-out mechanisms', 'Concealed under-cabinet LED task illumination']
  },

  // BATHROOMS
  'wall-hung-vanities': {
    slug: 'wall-hung-vanities',
    category: 'bathrooms',
    title: 'Wall-Hung Vanities',
    metaTitle: 'Floating Wall-Hung Bathroom Vanities | Cabivella UK',
    metaDescription: 'Modern floating bathroom vanities providing floor clearance and spacious dual-drawer organisation. Moisture-resistant core and stone tops.',
    leadTime: '4–6 weeks verified',
    dimensionsMm: 'Widths 600mm / 800mm / 1000mm / 1200mm / 1400mm bespoke',
    materials: ['Water-sealed marine plywood & MR-MDF', 'Corian or quartz top cut-outs', 'Austrian concealed hanging brackets'],
    finishOptions: ['Walnut veneer', 'Oatmeal matt lacquer', 'Fluted oak', 'Bone white'],
    installationScope: 'Heavy duty steel wall bracket mounting kit included with load certification.',
    image: '/assets/img/bathroom-inspiration.webp',
    gallery: ['/assets/img/bathroom-inspiration.webp'],
    description: 'Elevate your bathroom with architectural lightness. Wall-hung cabinetry creates an uninterrupted floor plane, enhancing the feeling of space in British bathrooms.',
    keyFeatures: ['Heavy-load tested wall-cleat anchoring system', 'Cut-out trap siphon drawer liners preserving storage', 'Internal drawer divider trays in lacquered beech']
  },
  'fluted-vanities': {
    slug: 'fluted-vanities',
    category: 'bathrooms',
    title: 'Fluted Vanities',
    metaTitle: 'Fluted & Ribbed Timber Bathroom Vanities | Cabivella UK',
    metaDescription: 'Artisanal fluted timber vanity units delivering tactile warmth, reeded texture, and bespoke stone basin configurations.',
    leadTime: '5–7 weeks verified',
    dimensionsMm: 'Single or double basin configurations from 750mm to 1600mm',
    materials: ['Solid fluted American oak / walnut slats', 'High-moisture seal coat', 'Soft-touch push latches'],
    finishOptions: ['Natural matte oak', 'Rich smoked walnut', 'Forest lichen green'],
    installationScope: 'Pre-bored plumbing entries for standard UK waste and tap centres.',
    image: '/assets/img/home-category-bathrooms.webp',
    gallery: ['/assets/img/home-category-bathrooms.webp'],
    description: 'Reeded and fluted cabinetry fronts introduce three-dimensional shadow lines and natural warmth into tiled bathroom sanctuaries.',
    keyFeatures: ['Precision CNC routed scallop and flute profiles', 'Hydrophobic UV-cured natural matte seal', 'Custom matching framed fluted mirrors available']
  },
  'tall-bathroom-storage': {
    slug: 'tall-bathroom-storage',
    category: 'bathrooms',
    title: 'Tall Bathroom Storage',
    metaTitle: 'Tall Bathroom Linen & Storage Cupboards | Cabivella UK',
    metaDescription: 'Vertical bathroom storage columns and linen cupboards with concealed laundry hampers and adjustable toughened glass shelves.',
    leadTime: '4–6 weeks verified',
    dimensionsMm: 'Width 400mm–500mm, Depth 350mm, Height 1600mm–2000mm',
    materials: ['Moisture-sealed internal carcasses', 'Integrated ventilation louvres', 'Concealed push latches'],
    finishOptions: ['Soft sage', 'Alabaster white', 'Warm oak veneer'],
    installationScope: 'Tethering fixings and floor/wall stabilizer mounts provided.',
    image: '/assets/img/bathroom-inspiration.webp',
    gallery: ['/assets/img/bathroom-inspiration.webp'],
    description: 'Keep towels, toiletries and laundry discreetly contained within a slim architectural profile that fits neatly into alcoves and corners.',
    keyFeatures: ['Integrated pull-out canvas laundry hamper basket', 'Internal shaver and toothbrush electrical charging sockets', 'Adjustable 8mm safety glass shelving']
  },

  // PANTRY & LARDER
  'tall-larder-cupboards': {
    slug: 'tall-larder-cupboards',
    category: 'pantry-larder',
    title: 'Tall Larder Cupboards',
    metaTitle: 'Freestanding & Fitted Tall Larder Cupboards | Cabivella UK',
    metaDescription: 'Master larder cupboards with solid oak door-mounted spice racks, cold marble worktops, and internal bespoke dovetailed drawers.',
    leadTime: '6–8 weeks verified',
    dimensionsMm: 'Double door: W 1000mm–1400mm x D 650mm x H 2100mm–2400mm',
    materials: ['Solid European Oak internals', 'Carrara marble or quartz interior slab', 'Solid brass butt hinges'],
    finishOptions: ['Heritage olive', 'Smoked ash', 'Stapleford grey', 'Farrow & Ball colour match'],
    installationScope: 'Delivered in sub-assemblies with full on-site alignment guidance.',
    image: '/assets/img/pantry-inspiration.webp',
    gallery: ['/assets/img/pantry-inspiration.webp'],
    description: 'The definitive centrepiece of a considered kitchen. Open the dual doors to reveal a dedicated culinary workshop with integrated prep surfaces and door shelving.',
    keyFeatures: ['Multi-tiered solid oak door spice and bottle shelves', 'Cool marble shelf insert for pastry and cheese keeping', 'Automatic micro-switch warm LED interior illumination']
  },
  'corner-pantry-storage': {
    slug: 'corner-pantry-storage',
    category: 'pantry-larder',
    title: 'Corner Pantry Storage',
    metaTitle: 'Walk-In & Corner Pantry Storage Solutions | Cabivella UK',
    metaDescription: 'Walk-in and curved corner pantry cabinetry transforming dead corners into expansive, organised food and appliance pantries.',
    leadTime: '6–8 weeks verified',
    dimensionsMm: 'Custom L-shaped footprint 1050mm x 1050mm footprint',
    materials: ['Heavy-load spruce plywood shelving', 'Solid timber carcass bracing', 'Twin bi-fold hinges'],
    finishOptions: ['Raw Danish oil oak', 'Pebble grey', 'Crisp off-white'],
    installationScope: 'Custom cut-to-site scribe mouldings included for out-of-square walls.',
    image: '/assets/img/home-category-pantry-larder.webp',
    gallery: ['/assets/img/home-category-pantry-larder.webp'],
    description: 'Convert hard-to-reach room corners into a high-capacity walk-in pantry that holds provisions for the entire household.',
    keyFeatures: ['Continuous 360-degree wraparound open shelving', 'Deep lower crate drawers for bulk vegetable storage', 'Integrated power points for stand mixers and blenders']
  },

  // COFFEE STATIONS
  'pocket-door-coffee-stations': {
    slug: 'pocket-door-coffee-stations',
    category: 'coffee-stations',
    title: 'Pocket-Door Coffee Stations',
    metaTitle: 'Pocket-Door Coffee Cabinets & Breakfast Bars | Cabivella UK',
    metaDescription: 'Concealed coffee stations with smooth pocket doors that slide away flush into carcass cavities. Integrated stone counter and lighting.',
    leadTime: '6–8 weeks verified',
    dimensionsMm: 'Width 1000mm–1500mm, Depth 650mm, Height 1400mm–2200mm',
    materials: ['Salice Exedra pocket door runners', 'Heat & moisture-resistant back panels', 'Quartz work surface'],
    finishOptions: ['Espresso stained oak', 'Soft linen matte', 'Deep forest green'],
    installationScope: 'Precision pocket door hardware calibration prior to dispatch.',
    image: '/assets/img/coffee-inspiration.webp',
    gallery: ['/assets/img/coffee-inspiration.webp'],
    description: 'The ultimate luxury of concealment. Pocket doors slide effortlessly back into the cabinet walls when entertaining, then close flush to maintain a serene aesthetic.',
    keyFeatures: ['High-precision pocket runners gliding into carcass side pockets', 'Heat and steam deflector shields protecting upper cabinetry', 'Dedicated barista pull-out knock-box and grinder drawers']
  },
  'open-shelf-coffee-cabinets': {
    slug: 'open-shelf-coffee-cabinets',
    category: 'coffee-stations',
    title: 'Open-Shelf Coffee Cabinets',
    metaTitle: 'Open-Shelf Coffee Bar Cabinetry | Cabivella UK',
    metaDescription: 'Architectural coffee and beverage credenzas featuring illuminated display shelves, brass glass racks, and soft-close storage below.',
    leadTime: '5–7 weeks verified',
    dimensionsMm: 'Width 900mm–1600mm, Depth 500mm, Height 2100mm',
    materials: ['Warm solid timber framing', 'Aged brass stemware rails', 'Micro-reeded back panel'],
    finishOptions: ['Natural oiled walnut', 'Blackened timber', 'Sandstone lacquer'],
    installationScope: 'Free-standing or wall-fixed options with concealed wire routing.',
    image: '/assets/img/home-category-coffee-stations.webp',
    gallery: ['/assets/img/home-category-coffee-stations.webp'],
    description: 'For those who appreciate celebrating culinary apparatus. Open display shelves showcase glassware and ceramics above a functional prep base.',
    keyFeatures: ['Under-shelf recessed dimmable 2700K warm LED channels', 'Integrated hanging stemware racks in solid brass', 'Plinth storage drawer for spare coffee beans and filters']
  },

  // FITTED STORAGE
  'alcove-cupboards': {
    slug: 'alcove-cupboards',
    category: 'fitted-storage',
    title: 'Alcove Cupboards',
    metaTitle: 'Fitted Chimney Breast Alcove Cupboards | Cabivella UK',
    metaDescription: 'Custom alcove cupboards and floating floating bookshelves tailored to Victorian and Edwardian chimney breasts across the UK.',
    leadTime: '4–6 weeks verified',
    dimensionsMm: 'Bespoke measured to alcove width (typically 800mm–1300mm)',
    materials: ['FSC MR-MDF panels', 'Solid oak top capping', 'Heritage cast iron or brass knobs'],
    finishOptions: ['Farrow & Ball matched eggshell', 'Natural waxed oak top', 'Shadow grey'],
    installationScope: 'Includes extra-wide scribing fillets for unlevel walls and coving.',
    image: '/assets/img/utility-inspiration.webp',
    gallery: ['/assets/img/utility-inspiration.webp'],
    description: 'Bespoke alcove cabinetry brings balance, symmetry and essential storage to period living rooms on either side of the fireplace.',
    keyFeatures: ['Flawless scribing to uneven historic lath-and-plaster walls', 'Cable pass-throughs for concealed TV and media equipment', 'Heavy-duty non-sagging 30mm thick floating shelves']
  },
  'utility-room-cabinets': {
    slug: 'utility-room-cabinets',
    category: 'fitted-storage',
    title: 'Utility Room Cabinets',
    metaTitle: 'Bespoke Utility & Boot Room Cabinetry | Cabivella UK',
    metaDescription: 'Hardworking utility room, boot room, and laundry joinery. Integrated washing machine towers, drying racks, and boot benches.',
    leadTime: '5–7 weeks verified',
    dimensionsMm: 'Modular configurations tailored to utility room blueprint',
    materials: ['Waterproof marine plinths', 'Impact-resistant laminate edging', 'Heavy-duty coat hooks'],
    finishOptions: ['Nordic slate', 'Eucalyptus green', 'Chalk white'],
    installationScope: 'Modular delivery with plumber access service voids.',
    image: '/assets/img/home-category-fitted-storage.webp',
    gallery: ['/assets/img/home-category-fitted-storage.webp'],
    description: 'Transform utility and boot rooms into orderly zones with integrated appliance stacks, solid boot benches, and ventilated shoe pigeonholes.',
    keyFeatures: ['Elevated washing machine and tumble dryer pedestals with push drawers', 'Integrated ceiling-mounted pulley laundry airer matching woodwork', 'Solid oak bench seat with under-seat boot drawers']
  },

  // KITCHEN DOORS
  'shaker-replacement-doors': {
    slug: 'shaker-replacement-doors',
    category: 'kitchen-doors',
    title: 'Shaker Replacement Doors',
    metaTitle: 'Bespoke Replacement Shaker Kitchen Doors | Cabivella UK',
    metaDescription: 'Replacement Shaker kitchen doors made to measure to fit any IKEA Metod, Howdens, Magnet, or custom cabinet carcasses.',
    leadTime: '3–5 weeks verified',
    dimensionsMm: 'Exact millimetre replacement sizing to fit any existing carcasses',
    materials: ['High-density solid timber and MR-MDF', 'Polyurethane spray lacquer coat'],
    finishOptions: ['Any RAL, NCS, or British Heritage colour swatch', 'Raw primed for on-site painting'],
    installationScope: 'Pre-drilled 35mm hinge holes matched to your exact hinge centres.',
    image: '/assets/img/doors-inspiration.webp',
    gallery: ['/assets/img/doors-inspiration.webp'],
    description: 'Upgrade tired kitchen cabinets sustainably. Keep your functional cabinet carcasses and replace only the door and drawer fronts with bespoke Turkish joinery.',
    keyFeatures: ['Precision CNC hinge boring to match Howdens, IKEA Metod, or bespoke hinge offsets', 'Factory-baked polyurethane finish that resists chipping and yellowing', 'Matching plinths, pelmets, corner posts, and end panels available']
  },
  'handleless-cabinet-fronts': {
    slug: 'handleless-cabinet-fronts',
    category: 'kitchen-doors',
    title: 'Handleless Cabinet Fronts',
    metaTitle: 'Replacement Handleless Kitchen Fronts & J-Pull Doors | Cabivella UK',
    metaDescription: 'Ultra-sleek handleless cabinet fronts and J-pull replacement kitchen doors. Satin and high-gloss architectural finishes.',
    leadTime: '3–5 weeks verified',
    dimensionsMm: 'Custom sized to existing carcasses with integrated J-finger-pull bevels',
    materials: ['Deep routable MR-MDF', 'Continuous wrap thermofoil or lacquer'],
    finishOptions: ['Matt cashmere', 'Dust grey', 'Porcelain white', 'Textured walnut'],
    installationScope: 'Supplied with precision hinge drilling template and matching cover panels.',
    image: '/assets/img/home-category-kitchen-doors.webp',
    gallery: ['/assets/img/home-category-kitchen-doors.webp'],
    description: 'Modernise your kitchen with minimalist handleless fronts featuring ergonomic finger pulls milled directly into the top edge of each door.',
    keyFeatures: ['Precision 45-degree ergonomic J-pull grip machined into solid core', 'Zero-edge laser banded perimeter ensuring moisture resistance', 'Matching filler panels and appliance surrounds for integrated ovens']
  }
};
