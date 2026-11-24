import type { SeoPageRecord } from './registry.types';

export const CABIVELLA_PAGES: SeoPageRecord[] = [
  {
    route: '/',
    locale: 'en-GB',
    role: 'home',
    indexDirective: 'index, follow',
    canonicalRoute: '/',
    title: 'Bespoke Cabinetry, Fitted Storage & Cupboards | Cabivella UK',
    metaDescription: 'Cabivella crafts bespoke kitchens, bespoke cupboards, fitted wooden storage and bathroom suites direct for London and UK homes. Request a 48h project quote.',
    h1: 'Cabivella UK Architectural Cabinetry & Joinery',
    primaryIntent: 'Bespoke architectural cabinetry, bespoke cupboards and fitted wooden storage specification for UK homeowners, architects and builders.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/#organization',
      name: 'Cabivella UK',
      type: 'Organization',
      sameAs: ['https://www.wikidata.org/wiki/Q11589432', 'https://wa.me/447898262110', 'https://cabivella.co.uk/our-story/'],
      wikidataQid: 'Q11589432',
      googleKgMid: '/g/11c5_cabivella'
    },
    semanticTriples: [
      { subject: 'Cabivella UK', predicate: 'manufactures', object: 'Bespoke Cupboards, In-Frame Kitchens and Fitted Wooden Storage' },
      { subject: 'Cabivella UK', predicate: 'suppliesRegion', object: 'London, Wimbledon Village and United Kingdom' },
      { subject: 'Cabivella Joinery', predicate: 'adheresTo', object: 'BS 6222-2 British Standards' }
    ],
    heroAnswerEngine: 'Cabivella manufactures specification-led bespoke cabinetry, solid timber in-frame kitchens, bespoke cupboards, fitted wooden storage and moisture-sealed bathroom vanities for London and UK properties. Engineered with 18mm BS 6222-2 carcasses, FSC oak and walnut veneers, Blum 200,000-cycle motion hardware and factory-cured polyurethane lacquers, rigid modules ship direct to British residential and commercial sites within 4 to 6 weeks.',
    keywords: [
      'bespoke cupboards',
      'fitted storage',
      'fitted wooden storage',
      'in frame kitchens wimbledon village',
      'bespoke cabinetry uk',
      'made to measure joinery london'
    ],
    faqs: [
      {
        question: 'Does Cabivella build bespoke cupboards and fitted wooden storage to exact alcove measurements?',
        answer: 'Yes. Every Cabivella cupboard, alcove unit and floor-to-ceiling fitted wooden storage run is CNC-machined to millimetric site dimensions with 60mm scribing fillets for uneven period walls in London and across the UK.'
      },
      {
        question: 'Do you supply solid timber in-frame kitchens to Wimbledon Village and Greater London?',
        answer: 'Yes. We manufacture 22mm solid hardwood in-frame Shaker kitchens with dovetailed oak drawer boxes and deliver rigid pre-assembled modules direct to Wimbledon Village (SW19), Richmond, Kensington and nationwide UK postcodes in 4 to 6 weeks.'
      },
      {
        question: 'Does Cabivella also supply commercial MEP cable containment, riser doors and architectural louvres?',
        answer: 'Yes. Through our commercial building materials division, UK contractors specify BS EN 61537 cable containment for London sites, value engineered EI60/EI120 steel riser doors, and architectural aluminium louvre packages.'
      }
    ],
    publishedAt: '2026-01-15T09:00:00+00:00',
    modifiedAt: '2026-11-11T16:00:00+00:00',
    bodyContentHash: 'a12f4c9e8b1d3a5f6e7c8d9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b01',
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
        'Where can I order bespoke cupboards and fitted wooden storage in the UK?',
        'Does Cabivella deliver in-frame kitchens to Wimbledon Village London?',
        'How fast does Cabivella deliver made to measure fitted storage?'
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
    route: '/coffee-corners/',
    locale: 'en-GB',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/coffee-corners/',
    title: 'Bespoke MDF Home Coffee Corners & Barista Stations | Cabivella UK',
    metaDescription: 'Explore 32 bespoke 18mm full-MDF home coffee corners (90–170 cm) with sensor LED lighting, smoked glass vitrines, soft-close drawers and UK mainland delivery.',
    h1: '32 Bespoke MDF Coffee Corners for British Kitchens & Living Spaces',
    primaryIntent: 'Bespoke 18mm full-MDF domestic coffee corners, home barista stations and glazed coffee credenzas for British kitchens and dining rooms.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/coffee-corners/#category',
      name: 'Cabivella Home Coffee Corners',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization', 'https://cabivella.co.uk/collections/coffee-stations/']
    },
    semanticTriples: [
      { subject: 'Cabivella Coffee Corners', predicate: 'comprisesModels', object: '32 Bespoke 18mm Full-MDF Domestic Coffee Stations (90–170 cm)' },
      { subject: 'Cabivella Coffee Corners', predicate: 'featuresHardware', object: 'Contactless Daylight LED Illumination, Tempered Smoked Glass Vitrines and Soft-Close Drawers' },
      { subject: 'Cabivella UK', predicate: 'deliversTo', object: 'London and UK Mainland Residential Postcodes' }
    ],
    heroAnswerEngine: 'Cabivella manufactures 32 bespoke domestic coffee corner models ranging from 90 cm compact arched alcove stations to 130 cm single-vitrine and 170 cm twin-vitrine dining room credenzas. Fabricated exclusively from 18 mm Grade-A full MDF with contactless hand-wave or touch-sensor daylight LED illumination, 6 mm tempered smoked glass display shelving, soft-close telescopic drawers and optional flush worktop sockets, every unit ships in reinforced export crating direct to UK homes.',
    keywords: [
      'home coffee corner uk',
      'bespoke coffee station cabinet',
      'mdf coffee bar cupboard uk',
      'kitchen coffee corner unit',
      'illuminated coffee credenza london'
    ],
    faqs: [
      {
        question: 'What carcass and door material is used across the 32 Home Coffee Corner models?',
        answer: 'Every model is fabricated from 18 mm Grade-A full MDF carcasses with membrane or tempered glass doors, never low-density chipboard, providing high screw retention and daily espresso steam durability.'
      },
      {
        question: 'Which coffee corner width suits my British kitchen alcove or dining room?',
        answer: 'Our 90–93 cm compact modules fit Victorian and Edwardian kitchen alcoves; 130–140 cm single-vitrine and wide-worktop units suit standard kitchen-diners; and 170 cm twin-vitrine consoles anchor open-plan dining rooms.'
      }
    ],
    publishedAt: '2026-02-01T10:00:00+00:00',
    modifiedAt: '2026-11-11T16:10:00+00:00',
    bodyContentHash: '9c4f6e1a0d3f5b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0399',
    llmSubGraphRoute: '/llms/pages/coffee-corners.md',
    mobileSubGraphRoute: '/llms/mobile/coffee-corners-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Coffee Corners', item: '/coffee-corners/' }
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
        'Where can I buy a bespoke MDF home coffee corner cabinet in the UK?',
        'What sizes do Cabivella home coffee corners come in?'
      ],
      speakableSelectors: ['#hero-answer-engine', '#ev-col-title', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1650,
      inpMs: 90,
      cls: 0.02,
      ttfbMs: 145,
      htmlKb: 50
    }
  },
  {
    route: '/collections/',
    locale: 'en-GB',
    role: 'hub',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/',
    title: 'Bespoke Cabinetry, Cupboards & Fitted Storage | Cabivella UK',
    metaDescription: 'Explore Cabivella collections: in-frame kitchens, bespoke cupboards, fitted wooden storage, bathroom vanities and larder suites built for British homes.',
    h1: 'Architectural Cabinetry Collections',
    primaryIntent: 'Browse full range of bespoke cabinetry collections including in-frame kitchens, bespoke cupboards, bathrooms and fitted storage.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/#category',
      name: 'Cabivella Collections',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'In-Frame & Handleless Kitchens' },
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'Bespoke Cupboards & Pantry Larders' },
      { subject: 'Cabivella Collections', predicate: 'includesCategory', object: 'Fitted Wooden Storage & Wardrobes' }
    ],
    heroAnswerEngine: 'Cabivella collections span six dedicated architectural joinery disciplines: bespoke in-frame and handleless kitchens, AquaShield moisture-sealed bathroom vanities, bespoke cupboards and concealed pantry larders, integrated coffee stations, floor-to-ceiling fitted wooden storage, and custom replacement cabinet doors. Every collection adheres to BS 6222-2 structural tolerances and Blum hardware standards.',
    keywords: [
      'bespoke cupboards',
      'fitted storage',
      'fitted wooden storage',
      'bespoke cabinetry collections uk'
    ],
    publishedAt: '2026-01-20T10:00:00+00:00',
    modifiedAt: '2026-11-11T16:05:00+00:00',
    bodyContentHash: '8b3e5d0f9c2e4a6b7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b02',
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
        'What bespoke cupboard and fitted storage collections does Cabivella offer?',
        'Can I view fitted wooden storage and kitchen collections in the UK?'
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
    title: 'Bespoke & In-Frame Kitchens | London, Wimbledon & UK | Cabivella',
    metaDescription: 'Made-to-measure bespoke kitchens, solid timber in-frame kitchens for Wimbledon Village and London homes, and modern handleless suites. Get a 48h estimate.',
    h1: 'Bespoke Made-to-Measure Kitchens',
    primaryIntent: 'Order or specify bespoke handleless and solid timber in-frame kitchen cabinetry tailored to UK room dimensions.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/kitchens/#product',
      name: 'Cabivella Bespoke & In-Frame Kitchens',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Kitchens', predicate: 'providesStyle', object: 'Solid Timber In-Frame Shaker and Handleless Modern' },
      { subject: 'Cabivella Kitchens', predicate: 'servesLocation', object: 'Wimbledon Village SW19, London and United Kingdom' },
      { subject: 'Cabivella Kitchens', predicate: 'usesHardware', object: 'Blum Legrabox and Concealed Hinges' }
    ],
    heroAnswerEngine: 'Cabivella bespoke kitchens unite millimetre-accurate spatial engineering across solid hardwood in-frame Shaker cabinetry, tactile fluted timber islands, and minimalist Gola handleless runs. Tailored for period residences in Wimbledon Village (SW19), Richmond, Kensington and across Britain, our 18mm BS 6222-2 carcasses pair dovetailed oak drawers with Blum soft-close hardware and 4 to 6 week direct delivery.',
    keywords: [
      'in frame kitchens wimbledon village',
      'bespoke kitchens london',
      'in-frame shaker kitchens sw19',
      'made to measure kitchen cabinetry uk'
    ],
    faqs: [
      {
        question: 'What distinguishes a Cabivella in-frame kitchen for Wimbledon Village period homes?',
        answer: 'Our Wimbledon Village In-Frame Shaker specification seats each 20mm solid timber door leaf inside a rigid 22mm mortise-and-tenon hardwood outer frame, preventing seasonal movement and matching Victorian and Edwardian architectural joinery in SW19.'
      },
      {
        question: 'How quickly are bespoke in-frame and handleless kitchens delivered to London?',
        answer: 'Following CAD sign-off, rigid factory-assembled kitchen cabinets and islands are crated and delivered direct to London and UK residential sites within 4 to 6 weeks, with itemized quotes issued in 48 hours.'
      }
    ],
    publishedAt: '2026-02-01T11:00:00+00:00',
    modifiedAt: '2026-11-11T16:10:00+00:00',
    bodyContentHash: '9c4f6e1a0d3f5b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c03',
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
        'Who supplies bespoke in-frame kitchens in Wimbledon Village?',
        'How much time does a bespoke kitchen from Cabivella take to deliver?'
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
    route: '/collections/kitchens/wimbledon-village-in-frame-shaker/',
    locale: 'en-GB',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/collections/kitchens/wimbledon-village-in-frame-shaker/',
    title: 'In-Frame Kitchens Wimbledon Village & SW19 | Bespoke Shaker | Cabivella',
    metaDescription: 'Bespoke solid timber in-frame kitchens designed for Wimbledon Village (SW19) period homes. 22mm mortise-and-tenon frames, dovetailed oak and 48h estimates.',
    h1: 'Wimbledon Village Solid Timber In-Frame Shaker Kitchen',
    primaryIntent: 'Commission bespoke solid timber in-frame Shaker kitchens specifically proportioned for Wimbledon Village SW19 and South West London period residences.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/kitchens/wimbledon-village-in-frame-shaker/#product',
      name: 'Wimbledon Village Solid Timber In-Frame Shaker Kitchen',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Wimbledon Village In-Frame Shaker Kitchen', predicate: 'featuresConstruction', object: '22mm Mortise-and-Tenon Solid Hardwood Outer Frame' },
      { subject: 'Wimbledon Village In-Frame Shaker Kitchen', predicate: 'tailoredForArea', object: 'Wimbledon Village SW19, Merton and South West London' },
      { subject: 'Wimbledon Village In-Frame Shaker Kitchen', predicate: 'includesJoinery', object: 'Dovetailed Solid European Oak Drawers and Walk-In Larder' }
    ],
    heroAnswerEngine: 'The Wimbledon Village Solid Timber In-Frame Shaker Kitchen is engineered specifically for Victorian, Edwardian and Conservation Area residences across Wimbledon Village (SW19) and South West London. Each 20mm five-piece hardwood door sits flush inside a rigid 22mm beaded timber frame, paired with solid dovetailed oak drawers, bespoke chimney-breast scribing, pocket-door breakfast cupboards and 50kg Blum Legrabox runners.',
    keywords: [
      'in frame kitchens wimbledon village',
      'in-frame shaker kitchen sw19',
      'bespoke kitchens wimbledon',
      'solid timber in frame kitchen london'
    ],
    faqs: [
      {
        question: 'Can the Wimbledon Village In-Frame Kitchen be scribed to high Edwardian ceilings and chimney alcoves in SW19?',
        answer: 'Yes. Every carcass and tall pantry elevation is manufactured to exact architectural survey heights up to 3000mm with custom cornice moulds and 60mm solid timber scribing stiles for out-of-plumb period walls.'
      },
      {
        question: 'Which hinge and finish options are available on Cabivella in-frame kitchens?',
        answer: 'Clients can specify exposed solid brass or satin nickel butt hinges for heritage authenticity, or concealed Blum soft-close hinges, finished in bespoke colour-matched silk-matt polyurethane lacquer or natural oiled oak.'
      }
    ],
    publishedAt: '2026-03-10T10:00:00+00:00',
    modifiedAt: '2026-11-11T16:15:00+00:00',
    bodyContentHash: 'ad4f6e1a0d3f5b7c8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c04',
    llmSubGraphRoute: '/llms/pages/wimbledon-village-in-frame-shaker.md',
    mobileSubGraphRoute: '/llms/mobile/wimbledon-village-in-frame-shaker-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Kitchens', item: '/collections/kitchens/' },
      { name: 'Wimbledon Village In-Frame Shaker', item: '/collections/kitchens/wimbledon-village-in-frame-shaker/' }
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
        'Where can I commission in-frame kitchens in Wimbledon Village?',
        'What timber is used in Cabivella Wimbledon Village in-frame kitchens?'
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
    title: 'Bespoke Cupboards, Pantry & Larder Joinery | Cabivella UK',
    metaDescription: 'Handcrafted bespoke cupboards, full-height pantry larders and pocket-door storage joinery built to exact UK room dimensions. Request a 48h project quote.',
    h1: 'Bespoke Cupboards, Pantry & Larder Joinery',
    primaryIntent: 'Order bespoke cupboards, full-height pantry cabinets and utility storage joinery with internal oak racks and cold shelves.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/pantry-larder/#product',
      name: 'Cabivella Bespoke Cupboards & Pantry Joinery',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Bespoke Cupboards', predicate: 'includesFeature', object: 'Concealed Bi-Fold Pocket Doors and Made-to-Measure Carcasses' },
      { subject: 'Cabivella Pantry Joinery', predicate: 'incorporatesMaterial', object: 'Solid Oak Spice Racks, Dovetailed Drawers and Quartz Cold Shelves' }
    ],
    heroAnswerEngine: 'Cabivella bespoke cupboards, walk-in pantries and freestanding or built-in larder systems combine made-to-measure 18mm rigid carcasses with bi-folding pocket doors that retract flush into side housings. Interiors integrate solid European oak dovetailed drawers, door-mounted spice racks, sensor-activated 3000K LED strips, and cold-surface quartz shelves tailored for UK kitchens, utility rooms and hallways.',
    keywords: [
      'bespoke cupboards',
      'bespoke larder cupboards uk',
      'made to measure pantry cupboards',
      'built in utility cupboards london'
    ],
    faqs: [
      {
        question: 'Can Cabivella manufacture bespoke cupboards for awkward alcoves, utility rooms and hallways?',
        answer: 'Yes. We engineer custom-width and custom-depth bespoke cupboards from 300mm slimline utility stores up to 2400mm double-armoire pantry suites, delivered pre-assembled for rapid UK site installation.'
      },
      {
        question: 'Do bespoke pantry cupboards include solid wood internal drawers and pocket doors?',
        answer: 'Yes. Specifiers can configure retractable pocket doors, solid oak spice racks, cold marble or quartz pastry shelves, and 50kg Blum soft-close pull-out larder trays.'
      }
    ],
    publishedAt: '2026-02-10T12:00:00+00:00',
    modifiedAt: '2026-11-11T16:20:00+00:00',
    bodyContentHash: '1e6b8a3c2f5b7d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e05',
    llmSubGraphRoute: '/llms/pages/pantry-larder.md',
    mobileSubGraphRoute: '/llms/mobile/pantry-larder-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Collections', item: '/collections/' },
      { name: 'Pantry & Bespoke Cupboards', item: '/collections/pantry-larder/' }
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
        'Where can I order made-to-measure bespoke cupboards in the UK?',
        'Does Cabivella build pantry cupboards with pocket doors?'
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
    title: 'Fitted Storage & Fitted Wooden Storage | Bespoke Cupboards | Cabivella',
    metaDescription: 'Made-to-measure fitted storage, solid oak fitted wooden storage and bespoke alcove cupboards crafted to BS 6222-2 for London and UK homes. Get a 48h quote.',
    h1: 'Architectural Fitted Storage & Wardrobes',
    primaryIntent: 'Commission bespoke floor-to-ceiling fitted storage, fitted wooden storage, built-in alcove cupboards and dressing room joinery.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/collections/fitted-storage/#product',
      name: 'Cabivella Fitted Storage & Fitted Wooden Storage',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Fitted Storage', predicate: 'maximizesSpace', object: 'Floor-to-Ceiling Wardrobes, Chimney Alcoves and Bespoke Cupboards' },
      { subject: 'Cabivella Fitted Wooden Storage', predicate: 'offersFinishes', object: 'FSC European Oak, Fluted Walnut, Louvred Timber and Silk-Matt Lacquer' }
    ],
    heroAnswerEngine: 'Cabivella fitted storage and fitted wooden storage joinery maximizes vertical wall and chimney-alcove footprints with millimetric floor-to-ceiling framing. Crafted from FSC-certified European oak, walnut veneers and 18mm moisture-resistant cores to BS 6222-2, configurations include bespoke alcove cupboards, louvred timber doors, acoustic soft-close ash drawers, reeded glass vitrines, and 60mm scribing trims for British period properties.',
    keywords: [
      'fitted storage',
      'fitted wooden storage',
      'bespoke cupboards',
      'fitted alcove cupboards london',
      'made to measure fitted wardrobes uk'
    ],
    faqs: [
      {
        question: 'What timber species are used in Cabivella fitted wooden storage and bespoke alcove cupboards?',
        answer: 'We craft fitted wooden storage from FSC-certified European oak, smoked ash and American black walnut veneers bonded over rigid 18mm E1 moisture-resistant cores, alongside spray-lacquered Shaker and fluted timber fronts.'
      },
      {
        question: 'How does Cabivella fitted storage accommodate uneven Victorian and Georgian walls?',
        answer: 'Every fitted storage run is supplied with 60mm solid scribing stiles and top filler fascias so your site carpenter achieves a shadow-free floor-to-ceiling fit against sloped ceilings and chimney breasts.'
      }
    ],
    publishedAt: '2026-02-15T16:00:00+00:00',
    modifiedAt: '2026-11-11T16:25:00+00:00',
    bodyContentHash: '3a8d0c5e4b7d9f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f06',
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
        'Where can I order bespoke fitted wooden storage in the UK?',
        'Can fitted storage and bespoke cupboards fit uneven chimney alcoves?'
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
    route: '/materials-supply/products/cable-tray-and-containment/',
    locale: 'en-GB',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/materials-supply/products/cable-tray-and-containment/',
    title: 'Cable Containment & Tray Systems | London & UK Supply | Cabivella UK',
    metaDescription: 'BS EN 61537 steel cable containment, perforated trays, ladder racks and trunking supplied direct to London and UK M&E sites. Request a 48h trade quote.',
    h1: 'Cable Containment, Perforated Trays & Heavy-Duty Ladder Systems',
    primaryIntent: 'Procure BS EN 61537 metallic cable containment, cable trays, ladder racks and wire basket systems for London and UK M&E projects.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/materials-supply/products/cable-tray-and-containment/#product',
      name: 'Cabivella BS EN 61537 Cable Containment Systems',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Cable Containment', predicate: 'compliesWith', object: 'BS EN 61537 and BS 7671 IET Wiring Regulations' },
      { subject: 'Cabivella Cable Containment', predicate: 'deliversDirectTo', object: 'Greater London M25 Commercial Sites and UK-Wide M&E Contractors' },
      { subject: 'Cabivella Cable Containment', predicate: 'includesVariants', object: 'Perforated Cable Tray, Heavy-Duty Cable Ladder, Wire Basket and Steel Trunking' }
    ],
    heroAnswerEngine: 'Cabivella supplies BS EN 61537 certified cable containment systems direct from ISO-accredited Turkish rolling mills to M&E contractors across London and the United Kingdom. Specifications cover medium and heavy-duty return-flange perforated cable trays, long-span industrial cable ladders, welded wire mesh baskets, and IP4X galvanised steel trunking in pre-galvanised (SENZIMIR), hot-dip galvanised (BS EN ISO 1461) and 316L stainless steel finishes.',
    keywords: [
      'cable containment',
      'cable containment london',
      'bs en 61537 cable tray supplier uk',
      'commercial m&e cable containment london'
    ],
    faqs: [
      {
        question: 'Do you deliver bulk cable containment packages direct to London commercial construction sites?',
        answer: 'Yes. Cabivella coordinates palletised DAP and DDP deliveries with customs clearance direct to M&E contractors and consolidation hubs across Central London, Canary Wharf, Park Royal and nationwide UK postcodes.'
      },
      {
        question: 'Which corrosion classes and standards do Cabivella cable containment systems meet?',
        answer: 'All metallic trays, ladders and trunking are manufactured in accordance with BS EN 61537 mechanical load standards, offered in pre-galvanised steel for dry risers, hot-dip galvanised BS EN ISO 1461 for external plant decks, and 316L marine stainless steel.'
      }
    ],
    publishedAt: '2026-03-05T09:00:00+00:00',
    modifiedAt: '2026-11-11T16:30:00+00:00',
    bodyContentHash: 'b11e1d6f5c8e0a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a07',
    llmSubGraphRoute: '/llms/pages/cable-containment.md',
    mobileSubGraphRoute: '/llms/mobile/cable-containment-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Materials Supply', item: '/materials-supply/' },
      { name: 'Electrical & Containment', item: '/materials-supply/collections/electrical/' },
      { name: 'Cable Containment Systems', item: '/materials-supply/products/cable-tray-and-containment/' }
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
        'Where can M&E contractors source bulk cable containment in London?',
        'Does Cabivella supply BS EN 61537 perforated cable tray and ladder systems?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 52
    }
  },
  {
    route: '/materials-supply/products/technical-plant-service-riser-steel-doors/',
    locale: 'en-GB',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/materials-supply/products/technical-plant-service-riser-steel-doors/',
    title: 'Value Engineered Riser Doors | EI60–EI120 Steel Shaft Sets | Cabivella UK',
    metaDescription: 'Value engineered riser doors and EI60/EI120 fire-rated steel shaft access sets to BS 476-22 and EN 1634-1. Factory-direct London and UK project supply.',
    h1: 'Value Engineered Riser Doors & Fire-Rated Steel Shaft Access Sets',
    primaryIntent: 'Specify value engineered riser doors and EI60 to EI120 fire-rated concealed steel service shaft door sets for UK commercial and residential cores.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/materials-supply/products/technical-plant-service-riser-steel-doors/#product',
      name: 'Cabivella Value Engineered Steel Riser Doors (CB-DR-0203)',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Value Engineered Riser Doors', predicate: 'certifiedTo', object: 'EN 1634-1 and BS 476 Part 22 Fire Resistance (EI60 / EI120)' },
      { subject: 'Cabivella Value Engineered Riser Doors', predicate: 'reducesInstalledCostVia', object: 'Factory Pre-Hung Flush Steel Frames Eliminating Wet Architraves' },
      { subject: 'Cabivella Value Engineered Riser Doors', predicate: 'attenuatesNoise', object: 'Up to 41dB Rw Mineral-Wool Acoustic Core' }
    ],
    heroAnswerEngine: 'Cabivella value engineered riser doors (Ref. CB-DR-0203) cut multi-storey core package costs without compromising fire or acoustic compliance. Pre-hung in 2.0mm Zintec steel concealed frames with 1.5mm flush leaves, they achieve EI60 and EI120 integrity and insulation to EN 1634-1 and BS 476-22, up to 41dB acoustic attenuation, budget locks or 3-point DIN deadlocks, and rapid dry-wall fixing for UK residential towers and commercial risers.',
    keywords: [
      'value engineered riser doors',
      'fire rated steel riser doors uk',
      'concealed frame riser shaft doors',
      'ei60 ei120 riser door sets london'
    ],
    faqs: [
      {
        question: 'How do Cabivella value engineered riser doors reduce commercial package costs?',
        answer: 'By supplying factory pre-hung steel door sets directly from high-volume CNC press lines with fast-fit dry-lining subframes and factory RAL powder coating, contractors cut material markups and reduce on-site joinery labour per riser opening.'
      },
      {
        question: 'Are your value engineered riser doors tested for fire integrity and cold smoke control?',
        answer: 'Yes. Assemblies are available in E60, EI60 and EI120 fire ratings tested to EN 1634-1 and BS 476 Part 22, fitted with intumescent perimeter strips and cold-smoke brush seals compliant with UK Building Regulations Approved Document B.'
      }
    ],
    publishedAt: '2026-03-08T10:00:00+00:00',
    modifiedAt: '2026-11-11T16:35:00+00:00',
    bodyContentHash: 'c22e1d6f5c8e0a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a08',
    llmSubGraphRoute: '/llms/pages/riser-doors.md',
    mobileSubGraphRoute: '/llms/mobile/riser-doors-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Materials Supply', item: '/materials-supply/' },
      { name: 'Doors & Riser Openings', item: '/materials-supply/collections/doors/' },
      { name: 'Value Engineered Riser Doors', item: '/materials-supply/products/technical-plant-service-riser-steel-doors/' }
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
        'Where can UK contractors buy value engineered fire-rated riser doors?',
        'Do Cabivella steel riser doors meet EI60 and BS 476 Part 22?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 52
    }
  },
  {
    route: '/materials-supply/products/decorative-aluminium-louvre/',
    locale: 'en-GB',
    role: 'product',
    indexDirective: 'index, follow',
    canonicalRoute: '/materials-supply/products/decorative-aluminium-louvre/',
    title: 'Architectural Aluminium Louvre Manufacturer | UK Trade & OEM | Cabivella',
    metaDescription: 'Direct architectural aluminium louvre manufacturer supplying plant screening, solar shading, OEM marketing sample packs and UK trade submittals in 48 hours.',
    h1: 'Architectural Aluminium Louvre Manufacturer & UK Trade Specification',
    primaryIntent: 'Partner with a direct architectural aluminium louvre manufacturer for plant screening, façade shading, OEM distributor branding and UK trade submittals.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/materials-supply/products/decorative-aluminium-louvre/#product',
      name: 'Cabivella Extruded Architectural Aluminium Louvres (CB-04-005)',
      type: 'Product',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Aluminium Louvre Manufacturing', predicate: 'extrudesAlloy', object: 'EN AW-6063 T6 Architectural Aluminium with Qualicoat Seaside PPC' },
      { subject: 'Cabivella Aluminium Louvre Manufacturing', predicate: 'testedToStandard', object: 'BS EN 13030 Weather & Airflow Performance Classification' },
      { subject: 'Cabivella Trade Programme', predicate: 'providesPartnerCollateral', object: 'OEM Louvre Manufacturer Marketing Sample Boxes, CAD Details & NBS Submittals' }
    ],
    heroAnswerEngine: 'Cabivella is a direct-export architectural aluminium louvre manufacturer supplying extruded EN AW-6063 T6 weather louvres, acoustic plant screens and solar brise-soleil blades across the UK and Europe. Alongside cut-to-schedule façade fabrication finished in Qualicoat Seaside powder coat or anodising, we equip UK façade contractors, merchants and OEM partners with unbranded CAD sections, BS EN 13030 airflow data and physical showroom marketing sample cases.',
    keywords: [
      'louvre manufacturer marketing',
      'architectural aluminium louvre manufacturer uk',
      'oem aluminium louvre trade supplier',
      'plant screen weather louvres london'
    ],
    faqs: [
      {
        question: 'Do you support UK façade distributors with OEM louvre manufacturer marketing samples and technical submittals?',
        answer: 'Yes. Trade partners, façade consultants and merchant stockists receive physical anodised and RAL powder-coated blade sample cases, DWG section drawings, BS EN 13030 free-area schedules and white-label submittal sheets for client presentations.'
      },
      {
        question: 'What blade pitches and finishes are manufactured for UK plant screening projects?',
        answer: 'We extrude 50mm, 75mm and 100mm Z-blade and chevron weather profiles alongside rectangular architectural baguettes, finished in Qualicoat Class 2 marine-grade polyester powder coating or 25-micron architectural anodising.'
      }
    ],
    publishedAt: '2026-03-12T11:00:00+00:00',
    modifiedAt: '2026-11-11T16:40:00+00:00',
    bodyContentHash: 'd33e1d6f5c8e0a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a09',
    llmSubGraphRoute: '/llms/pages/aluminium-louvres.md',
    mobileSubGraphRoute: '/llms/mobile/aluminium-louvres-mobile.md',
    breadcrumbs: [
      { name: 'Home', item: '/' },
      { name: 'Materials Supply', item: '/materials-supply/' },
      { name: 'Aluminium Systems', item: '/materials-supply/collections/aluminium/' },
      { name: 'Architectural Aluminium Louvres', item: '/materials-supply/products/decorative-aluminium-louvre/' }
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
        'Which architectural aluminium louvre manufacturer supplies UK trade partners direct?',
        'Can UK specifiers request aluminium louvre sample packs and CAD submittals?'
      ],
      speakableSelectors: ['#hero-answer-engine', 'main h1'],
      pwaInstallable: true
    },
    mobileCwvBudget: {
      lcpMs: 1600,
      inpMs: 85,
      cls: 0.02,
      ttfbMs: 140,
      htmlKb: 52
    }
  },
  {
    route: '/materials/',
    locale: 'en-GB',
    role: 'service',
    indexDirective: 'index, follow',
    canonicalRoute: '/materials/',
    title: 'Cabinetry Materials, Solid Timber & Hardware | Cabivella UK',
    metaDescription: 'Explore FSC European oak, fitted wooden storage veneers, polyurethane lacquers and Blum hardware engineered into every Cabivella cabinetry specification.',
    h1: 'Cabinetry Materials, Finishes & Hardware Standards',
    primaryIntent: 'Review technical substrate specifications, FSC timber veneers, moisture resistance and Blum hardware.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/materials/#service',
      name: 'Cabivella Materials & Finishes',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Substrates', predicate: 'certifiedBy', object: 'FSC and PEFC Sustainable Timber Sourcing' },
      { subject: 'Cabivella Hardware', predicate: 'testedToCycles', object: '200000 Blumotion Operational Cycles' }
    ],
    heroAnswerEngine: 'Cabivella specifies certified E1 low-emission moisture-resistant MDF, birch core plywood, and sustainably harvested European oak, ash and walnut veneers for bespoke cupboards, in-frame kitchens and fitted wooden storage. Surface treatments use multi-coat polyurethane lacquers tested against household moisture and thermal stress, paired exclusively with Blum hardware rated to 200,000 cycles.',
    publishedAt: '2026-02-20T10:00:00+00:00',
    modifiedAt: '2026-11-11T16:45:00+00:00',
    bodyContentHash: '5c0f2e7a6d9f1b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b10',
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
        'What wood is used in Cabivella fitted wooden storage and bespoke cupboards?',
        'Does Cabivella use Blum soft close hinges on all units?'
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
    title: 'Our Story & Direct UK Joinery Manufacturing | Cabivella UK',
    metaDescription: 'Learn about Cabivella. Combining artisanal Turkish timber joinery with British architectural precision for private residences and UK commercial developments.',
    h1: 'Our Story & Architectural Manufacturing Approach',
    primaryIntent: 'Discover Cabivella company history, craftsmanship standards and UK direct factory export mission.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/our-story/#article',
      name: 'Cabivella Company Heritage',
      type: 'Organization',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Heritage', predicate: 'originatesIn', object: 'Artisanal Joinery Workshop Tradition' },
      { subject: 'Cabivella Manufacturing', predicate: 'deliversDirect', object: 'Factory to London and UK Site Efficiency' }
    ],
    heroAnswerEngine: 'Cabivella unites traditional cabinet-making craftsmanship with five-axis CNC joinery and architectural building-material export. Operating from high-capacity manufacturing facilities in Turkey with direct logistics into London and across Britain, we remove multi-tier distributor markups on bespoke kitchens, fitted wooden storage, riser doors and commercial façade packages.',
    publishedAt: '2026-02-22T09:00:00+00:00',
    modifiedAt: '2026-11-11T16:50:00+00:00',
    bodyContentHash: '6d1a3f8b7e0a2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c11',
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
        'Where are Cabivella cabinets and architectural materials manufactured?',
        'How does Cabivella ship joinery direct to the UK?'
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
    title: 'Trade Cabinetry, Riser Doors & MEP Supply UK | Cabivella',
    metaDescription: 'Direct B2B supply of bespoke cupboards, fitted storage, value engineered riser doors, aluminium louvres and cable containment for London and UK contractors.',
    h1: 'Trade & Wholesale Cabinetry Supply UK',
    primaryIntent: 'Apply for UK trade accounts covering wholesale joinery, value engineered riser doors, cable containment and OEM louvre packages.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/trade/#service',
      name: 'Cabivella UK Trade & Commercial Supply',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Trade Supply', predicate: 'servesProfession', object: 'UK Property Developers, M&E Contractors, Architects and Façade Distributors' },
      { subject: 'Cabivella Trade Supply', predicate: 'suppliesPackages', object: 'Bespoke Fitted Storage, Value Engineered Riser Doors, Cable Containment & Aluminium Louvres' }
    ],
    heroAnswerEngine: 'Cabivella Trade provides factory-direct commercial procurement for London and UK property developers, M&E contractors, architects and merchant distributors. Trade accounts access volume pricing across multi-plot kitchens and fitted storage, EI60/EI120 value engineered riser doors, BS EN 61537 cable containment, and architectural aluminium louvre systems complete with OEM sample kits, CAD submittals and DDP UK delivery.',
    keywords: [
      'value engineered riser doors',
      'cable containment london',
      'louvre manufacturer marketing',
      'wholesale bespoke cabinetry uk'
    ],
    faqs: [
      {
        question: 'Can main contractors combine residential joinery with core riser doors and M&E containment on one trade account?',
        answer: 'Yes. UK developers and Tier-1/Tier-2 contractors consolidate multi-plot kitchens, bespoke cupboards and fitted wardrobes alongside EI60/EI120 steel riser doors, aluminium louvres and BS EN 61537 cable containment under unified phased shipping.'
      },
      {
        question: 'Do you provide showroom sample boards and OEM marketing packs for UK trade partners?',
        answer: 'Yes. Approved UK trade showrooms, interior studios and façade distributors receive timber veneer swatches, painted Shaker corner samples, aluminium louvre blade cases and unbranded technical data sheets.'
      }
    ],
    publishedAt: '2026-02-25T11:00:00+00:00',
    modifiedAt: '2026-11-11T16:55:00+00:00',
    bodyContentHash: '7e2b4a9c8f1b3d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d12',
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
        'How do I open a UK trade account with Cabivella?',
        'Does Cabivella supply value engineered riser doors and cable containment to London contractors?'
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
    title: 'Enquire About a Project | 48h Cabinetry & Trade Quote | Cabivella',
    metaDescription: 'Submit drawings or BOQ schedules for an itemized 48-hour quote on bespoke kitchens, fitted wooden storage, bespoke cupboards or commercial MEP packages.',
    h1: 'Enquire About Your Cabinetry Project',
    primaryIntent: 'Submit bespoke cabinetry or commercial building material specifications for 48-hour estimation and quotation.',
    primaryEntity: {
      id: 'https://cabivella.co.uk/enquire/#tool',
      name: 'Cabivella Project Estimator',
      type: 'Service',
      sameAs: ['https://cabivella.co.uk/#organization']
    },
    semanticTriples: [
      { subject: 'Cabivella Project Estimator', predicate: 'providesQuoteWithin', object: '48 Business Hours' },
      { subject: 'Cabivella Project Estimator', predicate: 'acceptsFormats', object: 'CAD, PDF Plans, BOQ Schedules and Room Sketches' }
    ],
    heroAnswerEngine: 'Start your residential or commercial specification by submitting room measurements, architectural PDFs, or contractor BOQ schedules. Our UK estimating engineers verify structural tolerances, BS 6222-2 joinery or BS EN material compliance, and return an itemized commercial quotation with guaranteed factory lead times within 48 business hours.',
    publishedAt: '2026-03-01T08:00:00+00:00',
    modifiedAt: '2026-11-11T17:00:00+00:00',
    bodyContentHash: '8f3c5b0d9a2c4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e13',
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
        'How can I get a quote for bespoke cupboards or in-frame kitchens from Cabivella?',
        'What drawings should I send Cabivella for a 48-hour quote?'
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
