export interface CollectionCategory {
  slug: string;
  title: string;
  heroEyebrow: string;
  metaTitle: string;
  metaDescription: string;
  shortCopy: string;
  description: string;
  image: string;
  modelSlugs: string[];
}

export const collectionsData: Record<string, CollectionCategory> = {
  "kitchens": {
    "slug": "kitchens",
    "title": "Kitchens",
    "heroEyebrow": "CONSIDERED CABINETRY",
    "metaTitle": "Made-to-Measure Kitchen Cabinetry | Cabivella UK",
    "metaDescription": "Explore bespoke and made-to-measure kitchen designs for UK homes. Shaker, contemporary, and compact layouts crafted with considered proportions.",
    "shortCopy": "Timeless kitchens, designed around the way you live.",
    "description": "A kitchen is the heart of everyday life. Our cabinetry unites durable joinery, balanced proportions and tactile finishes tailored to your architectural space.",
    "image": "/assets/img/models/shaker-kitchens.webp",
    "modelSlugs": [
      "mayfair-executive-suite-310",
      "belgravia-chef-monolith-310",
      "kensington-linear-artisan-310",
      "cotswold-highgloss-corner-410",
      "richmond-charcoal-corner-410",
      "westminster-alabaster-corner-410",
      "knightsbridge-slate-corner-410",
      "chelsea-master-corner-400",
      "st-james-corner-kitchen-400",
      "marylebone-dualtone-corner-400",
      "hampstead-tower-pantry-400",
      "fitzrovia-linear-tower-400",
      "bloomsbury-deepdrawer-kitchen-400",
      "pimlico-anthracite-accent-400",
      "greenwich-tallappliance-suite-410",
      "chiswick-ergonomic-corner-400",
      "wimbledon-purewhite-gloss-400",
      "dulwich-seamless-jpull-400",
      "battersea-compact-corner-395",
      "highgate-doubletower-kitchen-400",
      "islington-fluted-accent-400",
      "putney-modernist-handleless-400",
      "barnes-grandhorizon-kitchen-410",
      "clapham-minimalist-pantry-400"
    ]
  },
  "bathrooms": {
    "slug": "bathrooms",
    "title": "Bathrooms",
    "heroEyebrow": "SERENE SPACES",
    "metaTitle": "Bathroom Vanity Units & Storage Cabinetry | Cabivella UK",
    "metaDescription": "Discover elegant wall-hung vanities, fluted cabinetry, and tall bathroom storage units designed for calming, functional UK bathrooms.",
    "shortCopy": "Elegant, functional spaces for everyday luxury.",
    "description": "Transform daily routines into rituals of calm with bespoke vanity units, moisture-resistant timbers and thoughtfully detailed fluted storage.",
    "image": "/assets/img/models/real_bathrooms/bath_5002572000_1.webp",
    "modelSlugs": [
      "kensington-reeded-100",
      "belgravia-monolith-100",
      "mayfair-floating-80",
      "cotswold-suite-115",
      "chelsea-compact-85",
      "st-james-trio-100",
      "westminster-suite-135",
      "knightsbridge-noir-135",
      "marylebone-lumiere-80",
      "hampstead-contrast-100",
      "fitzrovia-noir-90",
      "bloomsbury-minimalist-80",
      "richmond-legnano-100",
      "pimlico-navaro-100",
      "greenwich-cherry-100",
      "chiswick-walnut-100",
      "wimbledon-clay-80",
      "dulwich-compact-65"
    ]
  },
  "pantry-larder": {
    "slug": "pantry-larder",
    "title": "Pantry & Larder",
    "heroEyebrow": "INTELLIGENT STORAGE",
    "metaTitle": "Pantry & Larder Cupboards | Cabivella UK",
    "metaDescription": "Explore pantry and larder cupboard designs for UK homes, with thoughtful storage configurations and finishes. Enquire about tailored cabinets.",
    "shortCopy": "Smart, beautifully organised storage solutions.",
    "description": "From deep spice racks to integrated spice carousels and soft-close oak drawers, our larder cupboards bring effortless order to modern culinary living.",
    "image": "/assets/img/models/tall-larder-cupboards.webp",
    "modelSlugs": [
      "tall-larder-cupboards",
      "corner-pantry-storage",
      "tandem-tall-larder",
      "chefs-double-armoire",
      "lemans-corner-swivel",
      "carousel-blind-corner",
      "pullout-larder-tower",
      "walkin-step-pantry"
    ]
  },
  "coffee-stations": {
    "slug": "coffee-stations",
    "title": "Coffee Stations",
    "heroEyebrow": "MORNING RITUALS",
    "metaTitle": "Bespoke Coffee Stations & Breakfast Cupboards | Cabivella UK",
    "metaDescription": "Dedicated pocket-door coffee stations and open-shelf breakfast cupboards crafted for UK homes. Seamless storage for appliances and morning rituals.",
    "shortCopy": "A dedicated space for your daily rituals.",
    "description": "Conceal appliances behind smooth bi-fold pocket doors or display artisan ceramics on illuminated fluted shelving tailored to your daily cadence.",
    "image": "/assets/img/models/real_coffee_stations/coffee_station_01.webp",
    "modelSlugs": [
      "mayfair-barista-armoire-154",
      "belgravia-grand-beverage-247",
      "kensington-larder-coffee-184",
      "cotswold-dualtower-pantry-217",
      "st-james-fluted-glass-station",
      "richmond-vitrine-barista-niche",
      "chelsea-illuminated-coffee-armoire",
      "westminster-fluted-display-larder",
      "knightsbridge-drawer-stack-station",
      "marylebone-tridoor-coffee-cabinet",
      "hampstead-linear-barista-90",
      "fitzrovia-compact-credenza-90",
      "bloomsbury-quaddoor-pantry-120",
      "pimlico-grand-culinary-210",
      "greenwich-twindoor-breakfast-cabinet",
      "chiswick-utility-beverage-120",
      "wimbledon-petite-coffee-90",
      "dulwich-multimodule-pantry",
      "battersea-integrated-larder-unit",
      "highgate-dualsection-credenza-180",
      "islington-grand-vitrine-suite",
      "putney-ambient-beverage-armoire",
      "barnes-radiator-coffee-console-130",
      "clapham-tripledoor-morning-station"
    ]
  },
  "fitted-storage": {
    "slug": "fitted-storage",
    "title": "Fitted Storage",
    "heroEyebrow": "ARCHITECTURAL JOINERY",
    "metaTitle": "Bespoke Fitted Storage & Alcove Cabinetry | Cabivella UK",
    "metaDescription": "Custom alcove cupboards and utility room cabinetry designed for British period homes and contemporary spaces. Considered storage proportions.",
    "shortCopy": "Bespoke cabinetry for a calm and organised home.",
    "description": "Maximise characterful chimney alcoves and busy utility spaces with precision-dimensioned joinery that respects the architectural heritage of British rooms.",
    "image": "/assets/img/models/real_fitted_storage/wardrobe_01_img1.webp",
    "modelSlugs": [
      "kensington-4door-wardrobe",
      "belgravia-5door-wardrobe",
      "mayfair-6door-wardrobe",
      "cotswold-6door-mirrored-robe",
      "chelsea-5door-wardrobe",
      "st-james-6door-wardrobe",
      "richmond-5door-wardrobe",
      "westminster-4door-wardrobe",
      "knightsbridge-5door-robe",
      "marylebone-6door-robe",
      "hampstead-5door-artisan-robe",
      "fitzrovia-6door-artisan-robe",
      "bloomsbury-5door-armoire",
      "pimlico-6door-master-robe",
      "greenwich-6door-minimalist-robe",
      "chiswick-5door-minimalist-robe",
      "wimbledon-4door-minimalist-robe",
      "dulwich-6door-boheme-suite",
      "battersea-5door-boheme-suite",
      "highgate-6door-acoustic-robe",
      "islington-5door-acoustic-robe",
      "putney-sliding-wardrobe",
      "barnes-6door-integrated-robe",
      "clapham-5door-integrated-robe"
    ]
  },
  "kitchen-doors": {
    "slug": "kitchen-doors",
    "title": "Kitchen Doors",
    "heroEyebrow": "REFRESH & UPGRADE",
    "metaTitle": "Replacement Kitchen Doors & Cabinet Fronts | Cabivella UK",
    "metaDescription": "High-quality Shaker replacement kitchen doors and handleless fronts. Refresh existing cabinetry carcasses with precision-crafted Turkish timber fronts.",
    "shortCopy": "A curated range of styles, finishes and colours.",
    "description": "Transform existing kitchen layouts sustainably with precision-milled replacement door fronts, bespoke spray-lacquered paint and solid wood veneers.",
    "image": "/assets/img/models/shaker-replacement-doors.webp",
    "modelSlugs": [
      "shaker-replacement-doors",
      "handleless-cabinet-fronts",
      "chillingham-timber-shaker",
      "lea-framed-fronts",
      "axis-shadow-fronts",
      "vera-silk-slab",
      "slimline-micro-shaker-fronts",
      "fluted-wave-panels",
      "paint-ready-raw-mdf"
    ]
  }
};
