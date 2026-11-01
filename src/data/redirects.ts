export interface RedirectRule {
  from: string;
  to: string;
  status: 301 | 302;
}

export const redirectsList: RedirectRule[] = [
  { from: '/contact', to: '/enquire/', status: 301 },
  { from: '/contact/', to: '/enquire/', status: 301 },
  { from: '/quote', to: '/enquire/', status: 301 },
  { from: '/quote/', to: '/enquire/', status: 301 },
  { from: '/products', to: '/collections/kitchens/', status: 301 },
  { from: '/products/', to: '/collections/kitchens/', status: 301 }
];
