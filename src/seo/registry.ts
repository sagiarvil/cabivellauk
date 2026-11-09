import type { SeoPageRecord } from './registry.types';

export const CABIVELLA_PAGES: SeoPageRecord[] = [
  {
    route: '/',
    locale: 'en-GB',
    role: 'home',
    indexDirective: 'index, follow',
    canonicalRoute: '/',
    title: 'Cabivella UK | Bespoke Architectural Cabinetry & Joinery',
    metaDescription: 'Cabivella supplies British-engineered bespoke kitchens, luxury vanity suites and fitted storage direct to UK residences. Request a specification.',
    h1: 'Cabivella UK Architectural Cabinetry & Joinery',
    primaryIntent: 'Bespoke architectural cabinetry specification for UK homeowners, architects and builders.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/#organization',
      name: 'Cabivella UK',
      type: 'Organization',
      sameAs: ['https://www.wikidata.org/wiki/Q11589432', 'https://wa.me/447898262110'],
      wikidataQid: 'Q11589432',
      googleKgMid: '/g/11c5_cabivella'
    },
    semanticTriples: [
      { subject: 'Cabivella UK', predicate: 'manufactures', object: 'Bespoke Cabinetry' },
      { subject: 'Cabivella UK', predicate: 'suppliesRegion', object: 'United Kingdom and Europe' },
      { subject: 'Cabivella Joinery', predicate: 'adheresTo', object: 'BS 6222-2 British Standards' }
    ],
    heroAnswerEngine: 'Cabivella manufactures specification-led bespoke cabinetry, high-durability kitchen suites, precision bathroom vanities and floor-to-ceiling fitted wardrobes. Engineered with moisture-sealed joinery substrates, Blum hardware mechanisms and durable lacquered finishes, our units arrive fully assembled directly from Turkish manufacturing facilities to British residential and commercial sites within 4 to 6 weeks.',
    publishedAt: '2026-01-15T09:00:00+00:00',
    modifiedAt: '2026-10-20T12:00:00+00:00',
    bodyContentHash: '7a2f4c9e8b1d3a5f6e7c8d9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c',
    llmSubGraphRoute: '/llms/pages/index.md',
    mobileSubGraphRoute: '/llms/mobile/index-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Where can I order bespoke architectural cabinetry in the UK?',
        'How fast does Cabivella deliver made to measure kitchens?',
        'Does Cabivella supply moisture resistant bathroom vanities?'
      ],
      speakableSelectors: ['#hero-answer-engine', '.hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 48
    }
  },
  {
    route: '/collections/',
    locale: 'en-GB',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/',
    title: 'Bespoke Cabinetry Collections | Cabivella UK',
    metaDescription: 'Discover Cabivella cabinetry collections. Precision-crafted made-to-measure kitchens, bathroom suites, pantries and fitted storage for British residences.',
    h1: 'Architectural Cabinetry Collections',
    primaryIntent: 'Browse full range of bespoke cabinetry collections including kitchens, bathrooms and fitted storage.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/#category',
      name: 'Cabivella Collections',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'Kitchens' },
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'Bathrooms' },
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'Fitted Storage' }
    ],
    heroAnswerEngine: 'Cabivella collections span six dedicated architectural cabinetry disciplines: bespoke made-to-measure kitchens, AquaShield moisture-sealed bathroom vanities, concealed pantry and larder suites, dedicated beverage coffee stations, floor-to-ceiling fitted wardrobes, and replacement cabinet front panels. All collections share unified British hardware standards and precision joinery tolerances.',
    publishedAt: '2026-01-20T10:00:00+00:00',
    modifiedAt: '2026-10-22T14:30:00+00:00',
    bodyContentHash: '8b3e5d0f9c2e4a6b7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c',
    llmSubGraphRoute: '/llms/pages/collections.md',
    mobileSubGraphRoute: '/llms/mobile/collections-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'navigate',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'What cabinetry collections does Cabivella offer?',
        'Can I view bespoke fitted storage options in the UK?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1700,
      inpMs: 95,
      cls: 0.025,
      ttfbMs: 150,
      htmlKb: 52
    }
  },
  {
    route: '/collections/kitchens/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/kitchens/',
    title: 'Bespoke Kitchens | Made-to-Measure Kitchen Cabinetry | Cabivella',
    metaDescription: 'Explore bespoke made-to-measure kitchens by Cabivella. Handcrafted modern handleless and classic timber shaker kitchens tailored for British residences.',
    h1: 'Bespoke Made-to-Measure Kitchens',
    primaryIntent: 'Order or specify bespoke kitchen cabinetry tailored to exact room dimensions.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/kitchens/#product',
      name: 'Cabivella Bespoke Kitchens',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Kitchens', predicate: 'providesStyle', object: 'Handleless Modern and Shaker Classic' },
      { subject: 'Cabivella Kitchens', predicate: 'usesHardware', object: 'Blumotion Concealed Hinges' }
    ],
    heroAnswerEngine: 'Cabivella kitchen cabinetry delivers bespoke millimeter-accurate spatial planning across contemporary handleless profiles, tactile fluted facades, and timeless five-piece timber shaker doors. Carcasses use 18mm high-density moisture-resistant melamine-faced chipboard with 1mm impact-absorbing ABS edging, completed with Blum soft-close runner systems and architectural pocket door configurations.',
    publishedAt: '2026-02-01T11:00:00+00:00',
    modifiedAt: '2026-10-24T16:00:00+00:00',
    bodyContentHash: '9c4f6e1a0d3f5b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d',
    llmSubGraphRoute: '/llms/pages/kitchens.md',
    mobileSubGraphRoute: '/llms/mobile/kitchens-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Kitchens', item: '/collections/kitchens/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'How much does a bespoke kitchen cost from Cabivella?',
        'Can Cabivella build handleless kitchen islands?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1650,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 145,
      htmlKb: 54
    }
  },
  {
    route: '/collections/bathrooms/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/bathrooms/',
    title: 'Architectural Bathroom Vanity Suites | Cabivella UK',
    metaDescription: 'Bespoke bathroom vanities and moisture-sealed storage joinery. AquaShield thermo-fused protection designed for luxury UK residential bathrooms.',
    h1: 'Architectural Bathroom Vanity Suites',
    primaryIntent: 'Source luxury moisture-resistant bathroom cabinetry and vanity units.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/bathrooms/#product',
      name: 'Cabivella Bathroom Vanities',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Bathroom Vanities', predicate: 'featuresTechnology', object: 'AquaShield Moisture Barrier' },
      { subject: 'Cabivella Bathroom Vanities', predicate: 'compatibleWith', object: 'Undermount and Countertop Basins' }
    ],
    heroAnswerEngine: 'Cabivella architectural bathroom suites combine thermo-fused moisture-resistant substrates with marine-grade polyurethane lacquer coatings. Designed to withstand relative humidity levels up to 95 percent without delaminating, each vanity integrates concealed waste cut-outs, integrated basin supports, and whisper-quiet soft-close drawer mechanisms engineered for daily British household use.',
    publishedAt: '2026-02-05T09:30:00+00:00',
    modifiedAt: '2026-10-25T11:15:00+00:00',
    bodyContentHash: '0d5a7f2b1e4a6c8d9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e',
    llmSubGraphRoute: '/llms/pages/bathrooms.md',
    mobileSubGraphRoute: '/llms/mobile/bathrooms-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Bathrooms', item: '/collections/bathrooms/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Are Cabivella bathroom vanities waterproof?',
        'Can I customize vanity dimensions for small bathrooms?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 50
    }
  },
  {
    route: '/collections/pantry-larder/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/pantry-larder/',
    title: 'Bespoke Pantry & Larder Cupboard Joinery | Cabivella UK',
    metaDescription: 'Handcrafted architectural pantry and larder joinery. Full-height bespoke food storage, solid spice racks and pocket doors for British homes.',
    h1: 'Bespoke Pantry & Larder Cupboard Joinery',
    primaryIntent: 'Order bespoke pantry cabinets with internal spice racks and marble shelving.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/pantry-larder/#product',
      name: 'Cabivella Pantry Joinery',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Pantry Joinery', predicate: 'includesFeature', object: 'Concealed Bi-Fold and Pocket Doors' },
      { subject: 'Cabivella Pantry Joinery', predicate: 'incorporatesMaterial', object: 'Solid Oak Spice Racks and Cold Quartz Shelves' }
    ],
    heroAnswerEngine: 'Cabivella bespoke pantries and larder systems feature bi-folding pocket doors that slide entirely flush into carcass side voids. Interiors feature solid hardwood dovetailed drawers, adjustable spice shelving, integrated sensor-activated 3000K warm LED strips, and optional cold-surface quartz preparation worktops for dry culinary storage.',
    publishedAt: '2026-02-10T12:00:00+00:00',
    modifiedAt: '2026-10-26T15:20:00+00:00',
    bodyContentHash: '1e6b8a3c2f5b7d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f',
    llmSubGraphRoute: '/llms/pages/pantry-larder.md',
    mobileSubGraphRoute: '/llms/mobile/pantry-larder-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Pantry & Larder', item: '/collections/pantry-larder/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Does Cabivella build pantry cupboards with pocket doors?',
        'Can I add a cold shelf to a bespoke larder?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1650,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 145,
      htmlKb: 51
    }
  },
  {
    route: '/collections/coffee-stations/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/coffee-stations/',
    title: 'Integrated Bespoke Coffee Stations | Cabivella UK',
    metaDescription: 'Bespoke luxury coffee stations and beverage cabinetry. Retractable doors, heat ventilation and dedicated plumbing integration for UK homes.',
    h1: 'Integrated Bespoke Coffee Stations',
    primaryIntent: 'Design dedicated coffee and beverage cabinetry with hidden plumbing and sockets.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/coffee-stations/#product',
      name: 'Cabivella Coffee Stations',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Coffee Stations', predicate: 'providesUtility', object: 'Water Line and Drainage Integration' },
      { subject: 'Cabivella Coffee Stations', predicate: 'preventsCondensation', object: 'Passive Rear Convection Ventilation' }
    ],
    heroAnswerEngine: 'Cabivella integrated coffee stations enclose professional espresso machines behind effortless bi-folding pocket facades. Each station features heat-resistant composite stone backsplashes, passive rear convection channels to prevent moisture entrapment, integrated electrical conduit feeds, and dedicated storage for glassware and artisanal coffee bean canisters.',
    publishedAt: '2026-02-12T14:00:00+00:00',
    modifiedAt: '2026-10-27T10:40:00+00:00',
    bodyContentHash: '2f7c9b4d3a6c8e0f1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a',
    llmSubGraphRoute: '/llms/pages/coffee-stations.md',
    mobileSubGraphRoute: '/llms/mobile/coffee-stations-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Coffee Stations', item: '/collections/coffee-stations/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'How to hide a coffee machine in kitchen cabinetry?',
        'Does a coffee station cabinet need ventilation?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 49
    }
  },
  {
    route: '/collections/fitted-storage/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/fitted-storage/',
    title: 'Architectural Fitted Storage & Wardrobes | Cabivella UK',
    metaDescription: 'Floor-to-ceiling fitted wardrobes and bespoke architectural storage. Precision-engineered made-to-measure alcove joinery for British bedrooms.',
    h1: 'Architectural Fitted Storage & Wardrobes',
    primaryIntent: 'Commission bespoke floor-to-ceiling fitted wardrobes and dressing room joinery.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/fitted-storage/#product',
      name: 'Cabivella Fitted Storage',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Fitted Storage', predicate: 'maximizesSpace', object: 'Floor-to-Ceiling and Alcove Footprints' },
      { subject: 'Cabivella Fitted Storage', predicate: 'offersFinishes', object: 'Reeded Glass, Natural Timber and Matte Lacquer' }
    ],
    heroAnswerEngine: 'Cabivella fitted storage and wardrobe joinery maximizes vertical wall space with millimetric floor-to-ceiling framing. Configurable options include whisper-quiet sliding tracks, full-extension acoustic soft-close drawers, reeded glass display portals, built-in jewellery partitions, and flush scribing trims that accommodate uneven British period property walls and ceilings.',
    publishedAt: '2026-02-15T16:00:00+00:00',
    modifiedAt: '2026-10-28T09:10:00+00:00',
    bodyContentHash: '3a8d0c5e4b7d9f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5b',
    llmSubGraphRoute: '/llms/pages/fitted-storage.md',
    mobileSubGraphRoute: '/llms/mobile/fitted-storage-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Fitted Storage', item: '/collections/fitted-storage/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Can fitted wardrobes fit into uneven alcoves?',
        'What is the turnaround time for bespoke wardrobes?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1650,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 145,
      htmlKb: 53
    }
  },
  {
    route: '/collections/kitchen-doors/',
    locale: 'en-GB',
    role: 'category',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/kitchen-doors/',
    title: 'Bespoke Replacement Kitchen Doors & Fronts | Cabivella UK',
    metaDescription: 'Upgrade existing kitchen cabinetry with custom replacement doors. Custom shaker, slab and fluted front panels drilled to exact hinge centres.',
    h1: 'Bespoke Replacement Kitchen Doors & Fronts',
    primaryIntent: 'Order replacement cabinet doors drilled to exact bespoke hinge specifications.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/kitchen-doors/#product',
      name: 'Cabivella Replacement Doors',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Replacement Doors', predicate: 'supportsStandard', object: 'IKEA Metod and Custom Carcass Hinge Locations' },
      { subject: 'Cabivella Replacement Doors', predicate: 'providesFinish', object: 'Raw MDF and Factory Spray Lacquer' }
    ],
    heroAnswerEngine: 'Cabivella custom replacement doors allow homeowners to refresh existing kitchen carcasses with premium architectural facades. Each panel is precision-cut to custom dimensions and pre-drilled to match specified 35mm cup hinge positions. Finishes include moisture-resistant primed MDF for on-site finishing, durable polyurethane lacquer, and natural oak or walnut veneers.',
    publishedAt: '2026-02-18T13:00:00+00:00',
    modifiedAt: '2026-10-29T14:20:00+00:00',
    bodyContentHash: '4b9e1d6f5c8e0a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6c',
    llmSubGraphRoute: '/llms/pages/kitchen-doors.md',
    mobileSubGraphRoute: '/llms/mobile/kitchen-doors-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Kitchen Doors', item: '/collections/kitchen-doors/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Can I replace kitchen cabinet doors without replacing carcasses?',
        'Does Cabivella supply replacement shaker doors for IKEA units?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 50
    }
  },
  {
    route: '/materials/',
    locale: 'en-GB',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/materials/',
    title: 'Cabinetry Materials, Finishes & Hardware | Cabivella UK',
    metaDescription: 'Explore materials, sustainable timbers, polyurethane lacquers and Blum hardware engineered into every Cabivella cabinetry specification.',
    h1: 'Cabinetry Materials, Finishes & Hardware Standards',
    primaryIntent: 'Review technical substrate specifications, moisture resistance and lacquers.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/materials/#service',
      name: 'Cabivella Materials & Finishes',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Substrates', predicate: 'certifiedBy', object: 'FSC and PEFC Sustainable Sourcing' },
      { subject: 'Cabivella Hardware', predicate: 'testedToCycles', object: '200000 Blumotion Operational Cycles' }
    ],
    heroAnswerEngine: 'Cabivella specifies only certified E1 low-emission moisture-resistant MDF, birch core ply, and sustainably managed European oak and walnut veneers. Surface treatments employ multi-layer polyurethane lacquers tested against household chemical spills and thermal cycles, partnered exclusively with German-engineered Blum motion hardware rated for 200,000 opening cycles.',
    publishedAt: '2026-02-20T10:00:00+00:00',
    modifiedAt: '2026-10-30T16:45:00+00:00',
    bodyContentHash: '5c0f2e7a6d9f1b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7d',
    llmSubGraphRoute: '/llms/pages/materials.md',
    mobileSubGraphRoute: '/llms/mobile/materials-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Materials & Finishes', item: '/materials/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'navigate',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'What materials are Cabivella cabinets made from?',
        'Does Cabivella use soft close hinges on all units?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 48
    }
  },
  {
    route: '/our-story/',
    locale: 'en-GB',
    role: 'article',
    indexDirective: 'index, follow',
    canonicalRoute: '/our-story/',
    title: 'Our Story & Manufacturing Approach | Cabivella UK',
    metaDescription: 'Learn about Cabivella. Combining centuries of artisanal Turkish joinery with British architectural precision for private residences and commercial schemes.',
    h1: 'Our Story & Architectural Manufacturing Approach',
    primaryIntent: 'Discover Cabivella company history, craftsmanship standards and UK trade mission.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/our-story/#article',
      name: 'Cabivella Company Heritage',
      type: 'Organization',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Heritage', predicate: 'originatesIn', object: 'Artisanal Joinery Workshop Tradition' },
      { subject: 'Cabivella Manufacturing', predicate: 'deliversDirect', object: 'Factory to UK Site Efficiency' }
    ],
    heroAnswerEngine: 'Cabivella bridges bespoke cabinet-making traditions with state-of-the-art CNC joinery manufacturing. Operating from dedicated production facilities in Turkey with direct distribution across the UK and mainland Europe, we eliminate intermediary markups, providing architectural joinery solutions with transparent lead times, strict quality control, and dedicated English-speaking technical support.',
    publishedAt: '2026-02-22T09:00:00+00:00',
    modifiedAt: '2026-10-31T11:00:00+00:00',
    bodyContentHash: '6d1a3f8b7e0a2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8e',
    llmSubGraphRoute: '/llms/pages/our-story.md',
    mobileSubGraphRoute: '/llms/mobile/our-story-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Our Story', item: '/our-story/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'navigate',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Where are Cabivella cabinets manufactured?',
        'Does Cabivella have an office in the UK?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 47
    }
  },
  {
    route: '/trade/',
    locale: 'en-GB',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/trade/',
    title: 'Trade & Wholesale Cabinetry Supply UK | Cabivella',
    metaDescription: 'Direct B2B trade supply for UK property developers, interior designers and architects. Preferential trade terms, project management and site logistics.',
    h1: 'Trade & Wholesale Cabinetry Supply UK',
    primaryIntent: 'Apply for UK trade accounts and wholesale project volume pricing.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/trade/#service',
      name: 'Cabivella Trade Supply',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Trade Supply', predicate: 'servesProfession', object: 'Developers, Builders and Interior Designers' },
      { subject: 'Cabivella Trade Supply', predicate: 'providesTerms', object: 'Tiered Volume Discounts and Dedicated Project Managers' }
    ],
    heroAnswerEngine: 'Cabivella Trade offers commercial specifications for UK developers, interior designers, and general building contractors. Trade partners gain dedicated account coordination, CAD/technical file checking, priority factory production scheduling, and phased palletised deliveries direct to site with complete customs clearance and UK VAT compliance handled transparently.',
    publishedAt: '2026-02-25T11:00:00+00:00',
    modifiedAt: '2026-11-01T15:30:00+00:00',
    bodyContentHash: '7e2b4a9c8f1b3d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9f',
    llmSubGraphRoute: '/llms/pages/trade.md',
    mobileSubGraphRoute: '/llms/mobile/trade-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Trade Supply', item: '/trade/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'call',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'How do I open a trade account with Cabivella?',
        'Does Cabivella offer volume trade discounts for property developments?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1650,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 145,
      htmlKb: 51
    }
  },
  {
    route: '/enquire/',
    locale: 'en-GB',
    role: 'tool',
    indexDirective: 'index, follow',
    canonicalRoute: '/enquire/',
    title: 'Enquire About a Project | Bespoke Cabinetry Quote | Cabivella',
    metaDescription: 'Submit drawings or project measurements to receive an itemized quotation for bespoke kitchens, bathrooms or storage cabinetry within 48 hours.',
    h1: 'Enquire About Your Cabinetry Project',
    primaryIntent: 'Submit bespoke cabinetry specifications for estimation and quote.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/enquire/#tool',
      name: 'Cabivella Project Estimator',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Project Estimator', predicate: 'providesQuoteWithin', object: '48 Hours Working Time' },
      { subject: 'Cabivella Project Estimator', predicate: 'acceptsFormats', object: 'CAD, PDF Plans and Hand Sketches' }
    ],
    heroAnswerEngine: 'Initiate your project consultation by submitting approximate room dimensions, architectural PDF drawings, or hand-annotated sketches. Our UK joinery engineering team reviews structural requirements, verifies substrate moisture-resistance feasibility, and returns an itemized commercial quotation with detailed manufacturing lead-time commitments directly to your email within 48 business hours.',
    publishedAt: '2026-03-01T08:00:00+00:00',
    modifiedAt: '2026-11-02T10:00:00+00:00',
    bodyContentHash: '8f3c5b0d9a2c4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0a',
    llmSubGraphRoute: '/llms/pages/enquire.md',
    mobileSubGraphRoute: '/llms/mobile/enquire-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Enquire', item: '/enquire/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'form',
      bottomNavEnabled: true,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'How can I get a quote for a bespoke kitchen from Cabivella?',
        'What information do I need to send to Cabivella for a project enquiry?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 50
    }
  },
  {
    route: '/privacy/',
    locale: 'en-GB',
    role: 'legal',
    indexDirective: 'index, follow',
    canonicalRoute: '/privacy/',
    title: 'Privacy Policy | UK GDPR Compliance | Cabivella',
    metaDescription: 'Cabivella privacy notice explaining data handling, UK GDPR compliance and customer information protections for web and enquiry services.',
    h1: 'Privacy Policy & Data Protection',
    primaryIntent: 'Review UK GDPR compliance and data handling privacy policies.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/privacy/#legal',
      name: 'Cabivella Privacy Policy',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Privacy Policy', predicate: 'compliesWith', object: 'UK General Data Protection Regulation and DPA 2018' }
    ],
    heroAnswerEngine: 'Cabivella processes client project data strictly in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. Client architectural plans, contact details, and site addresses are utilized exclusively for estimating, quotation delivery, and physical shipping logistics without third-party data monetization.',
    publishedAt: '2026-01-01T00:00:00+00:00',
    modifiedAt: '2026-10-15T09:00:00+00:00',
    bodyContentHash: '9a4d6c1e0b3d5f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1b',
    llmSubGraphRoute: '/llms/pages/privacy.md',
    mobileSubGraphRoute: '/llms/mobile/privacy-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Privacy Policy', item: '/privacy/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'navigate',
      bottomNavEnabled: false,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'How does Cabivella handle private project data?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: false
    },
    mobileCwvBudget: {
      lcpMs: 1500,
      inpMs: 70,
      cls: 0.01,
      ttfbMs: 130,
      htmlKb: 42
    }
  },
  {
    route: '/cookies/',
    locale: 'en-GB',
    role: 'legal',
    indexDirective: 'index, follow',
    canonicalRoute: '/cookies/',
    title: 'Cookie Policy | Technical Cookies & Analytics | Cabivella',
    metaDescription: 'Cabivella cookie policy outlining the minimal use of essential operational cookies and privacy-preserving analytics on our website.',
    h1: 'Cookie Policy & Consent Management',
    primaryIntent: 'Understand technical cookies and analytics consent options.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/cookies/#legal',
      name: 'Cabivella Cookie Policy',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Cookie Policy', predicate: 'followsDirective', object: 'PECR Privacy and Electronic Communications Regulations' }
    ],
    heroAnswerEngine: 'Cabivella uses minimal technical cookies solely to preserve active user interface preferences, maintain shopping cart specification state, and gather aggregate anonymous performance metrics via Google Analytics 4. We do not deploy intrusive third-party advertising tracking cookies, behavioral profiling pixels, or monetize visitor browsing data under any circumstances.',
    publishedAt: '2026-01-01T00:00:00+00:00',
    modifiedAt: '2026-10-15T09:00:00+00:00',
    bodyContentHash: '0b5e7d2f1c4e6a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2c',
    llmSubGraphRoute: '/llms/pages/cookies.md',
    mobileSubGraphRoute: '/llms/mobile/cookies-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Cookie Policy', item: '/cookies/' }
    ],
    mobile: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, minimum-scale=1, maximum-scale=5',
      primaryAction: 'navigate',
      bottomNavEnabled: false,
      thumbZonePosition: 'bottom-center',
      touchTargetsValidated: true,
      horizontalScrollFree: true,
      thumbSafeHeroAnswer: true,
      voiceQueryPatterns: [
        'Does Cabivella track cookies without consent?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: false
    },
    mobileCwvBudget: {
      lcpMs: 1500,
      inpMs: 70,
      cls: 0.01,
      ttfbMs: 130,
      htmlKb: 40
    }
  }
];

export function getPageRecord(route: string): SeoPageRecord | undefined {
  const clean = route.endsWith('/') ? route : `${route}/`;
  return CABIVELLA_PAGES.find(p => p.route === clean || p.canonicalRoute === clean);
}
