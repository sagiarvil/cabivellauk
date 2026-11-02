export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const siteConfig = {
  name: 'Cabivella',
  domain: 'cabivella.co.uk',
  siteUrl: 'https://cabivella.co.uk',
  tagline: 'Considered Cabinetry for UK Homes',
  email: 'enquiries@cabivella.co.uk',
  phone: '+44 7898 262110',
  phoneClean: '+447898262110',
  whatsappUrl: 'https://wa.me/447898262110?text=Hello%20Cabivella%2C%20I%20would%20like%20to%20enquire%20about%20bespoke%20cabinetry%20for%20my%20home.',
  address: {
    country: 'United Kingdom',
    region: 'London & Nationwide'
  }
};

export const mainNav: NavItem[] = [
  { label: 'Kitchens', href: '/collections/kitchens/' },
  { label: 'Bathrooms', href: '/collections/bathrooms/' },
  { label: 'Pantry', href: '/collections/pantry-larder/' },
  { label: 'Coffee Stations', href: '/collections/coffee-stations/' },
  { label: 'Storage', href: '/collections/fitted-storage/' },
  { label: 'Kitchen Doors', href: '/collections/kitchen-doors/' },
  { label: 'Our Story', href: '/our-story/' },
  { label: 'Trade', href: '/trade/' }
];

export const footerNav = {
  explore: [
    { label: 'Kitchens', href: '/collections/kitchens/' },
    { label: 'Bathrooms', href: '/collections/bathrooms/' },
    { label: 'Pantry & Larder', href: '/collections/pantry-larder/' },
    { label: 'Coffee Stations', href: '/collections/coffee-stations/' }
  ],
  moreSpaces: [
    { label: 'Fitted Storage', href: '/collections/fitted-storage/' },
    { label: 'Kitchen Doors', href: '/collections/kitchen-doors/' },
    { label: 'Materials & Finishes', href: '/materials/' },
    { label: 'Image Information', href: '/image-credits/' }
  ],
  cabivella: [
    { label: 'Our Story', href: '/our-story/' },
    { label: 'Trade Enquiries', href: '/trade/' },
    { label: 'Enquire About a Project', href: '/enquire/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Cookie Policy', href: '/cookies/' }
  ]
};
