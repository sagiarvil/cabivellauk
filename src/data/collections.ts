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
  'kitchens': {
    slug: 'kitchens',
    title: 'Kitchens',
    heroEyebrow: 'CONSIDERED CABINETRY',
    metaTitle: 'Made-to-Measure Kitchen Cabinetry | Cabivella UK',
    metaDescription: 'Explore bespoke and made-to-measure kitchen designs for UK homes. Shaker, contemporary, and compact layouts crafted with considered proportions.',
    shortCopy: 'Timeless kitchens, designed around the way you live.',
    description: 'A kitchen is the heart of everyday life. Our cabinetry unites durable joinery, balanced proportions and tactile finishes tailored to your architectural space.',
    image: '/assets/img/models/shaker-kitchens.webp',
    modelSlugs: ['shaker-kitchens', 'contemporary-kitchens', 'compact-kitchens']
  },
  'bathrooms': {
    slug: 'bathrooms',
    title: 'Bathrooms',
    heroEyebrow: 'SERENE SPACES',
    metaTitle: 'Bathroom Vanity Units & Storage Cabinetry | Cabivella UK',
    metaDescription: 'Discover elegant wall-hung vanities, fluted cabinetry, and tall bathroom storage units designed for calming, functional UK bathrooms.',
    shortCopy: 'Elegant, functional spaces for everyday luxury.',
    description: 'Transform daily routines into rituals of calm with bespoke vanity units, moisture-resistant timbers and thoughtfully detailed fluted storage.',
    image: '/assets/img/models/wall-hung-vanities.webp',
    modelSlugs: ['wall-hung-vanities', 'fluted-vanities', 'tall-bathroom-storage']
  },
  'pantry-larder': {
    slug: 'pantry-larder',
    title: 'Pantry & Larder',
    heroEyebrow: 'INTELLIGENT STORAGE',
    metaTitle: 'Pantry & Larder Cupboards | Cabivella UK',
    metaDescription: 'Explore pantry and larder cupboard designs for UK homes, with thoughtful storage configurations and finishes. Enquire about tailored cabinets.',
    shortCopy: 'Smart, beautifully organised storage solutions.',
    description: 'From deep spice racks to integrated spice carousels and soft-close oak drawers, our larder cupboards bring effortless order to modern culinary living.',
    image: '/assets/img/models/tall-larder-cupboards.webp',
    modelSlugs: ['tall-larder-cupboards', 'corner-pantry-storage']
  },
  'coffee-stations': {
    slug: 'coffee-stations',
    title: 'Coffee Stations',
    heroEyebrow: 'MORNING RITUALS',
    metaTitle: 'Bespoke Coffee Stations & Breakfast Cupboards | Cabivella UK',
    metaDescription: 'Dedicated pocket-door coffee stations and open-shelf breakfast cupboards crafted for UK homes. Seamless storage for appliances and morning rituals.',
    shortCopy: 'A dedicated space for your daily rituals.',
    description: 'Conceal appliances behind smooth bi-fold pocket doors or display artisanal ceramics on illuminated fluted shelving tailored to your daily cadence.',
    image: '/assets/img/models/pocket-door-coffee-stations.webp',
    modelSlugs: ['pocket-door-coffee-stations', 'open-shelf-coffee-cabinets']
  },
  'fitted-storage': {
    slug: 'fitted-storage',
    title: 'Fitted Storage',
    heroEyebrow: 'ARCHITECTURAL JOINERY',
    metaTitle: 'Bespoke Fitted Storage & Alcove Cabinetry | Cabivella UK',
    metaDescription: 'Custom alcove cupboards and utility room cabinetry designed for British period homes and contemporary spaces. Considered storage proportions.',
    shortCopy: 'Bespoke cabinetry for a calm and organised home.',
    description: 'Maximise characterful chimney alcoves and busy utility spaces with precision-dimensioned joinery that respects the architectural heritage of British rooms.',
    image: '/assets/img/models/alcove-cupboards.webp',
    modelSlugs: ['alcove-cupboards', 'utility-room-cabinets']
  },
  'kitchen-doors': {
    slug: 'kitchen-doors',
    title: 'Kitchen Doors',
    heroEyebrow: 'REFRESH & UPGRADE',
    metaTitle: 'Replacement Kitchen Doors & Cabinet Fronts | Cabivella UK',
    metaDescription: 'High-quality Shaker replacement kitchen doors and handleless fronts. Refresh existing cabinetry carcasses with precision-crafted Turkish timber fronts.',
    shortCopy: 'A curated range of styles, finishes and colours.',
    description: 'Transform existing kitchen layouts sustainably with precision-milled replacement door fronts, bespoke spray-lacquered paint and solid wood veneers.',
    image: '/assets/img/models/shaker-replacement-doors.webp',
    modelSlugs: ['shaker-replacement-doors', 'handleless-cabinet-fronts']
  }
};
