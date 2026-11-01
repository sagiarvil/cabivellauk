import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/collections/',
  '/our-story/',
  '/trade/',
  '/enquire/',
  '/privacy/',
  '/cookies/',
  '/image-credits/',
  '/materials/',

  // Kitchens
  '/collections/kitchens/',
  '/collections/kitchens/shaker-kitchens/',
  '/collections/kitchens/contemporary-kitchens/',
  '/collections/kitchens/compact-kitchens/',
  '/collections/kitchens/slim-frame-shaker-kitchens/',
  '/collections/kitchens/island-suite-kitchens/',

  // Bathrooms
  '/collections/bathrooms/',
  '/collections/bathrooms/wall-hung-vanities/',
  '/collections/bathrooms/fluted-vanities/',
  '/collections/bathrooms/tall-bathroom-storage/',
  '/collections/bathrooms/double-basin-vanities/',
  '/collections/bathrooms/slim-mirror-storage-cabinets/',

  // Pantry & Larder
  '/collections/pantry-larder/',
  '/collections/pantry-larder/tall-larder-cupboards/',
  '/collections/pantry-larder/corner-pantry-storage/',
  '/collections/pantry-larder/chefs-double-larder/',
  '/collections/pantry-larder/pullout-larder-tower/',

  // Coffee Stations
  '/collections/coffee-stations/',
  '/collections/coffee-stations/pocket-door-coffee-stations/',
  '/collections/coffee-stations/open-shelf-coffee-cabinets/',
  '/collections/coffee-stations/breakfast-armoire-coffee-stations/',
  '/collections/coffee-stations/illuminated-beverage-stations/',

  // Fitted Storage
  '/collections/fitted-storage/',
  '/collections/fitted-storage/alcove-cupboards/',
  '/collections/fitted-storage/utility-room-cabinets/',
  '/collections/fitted-storage/boot-room-cabinetry/',
  '/collections/fitted-storage/dressing-room-wardrobes/',

  // Kitchen Doors
  '/collections/kitchen-doors/',
  '/collections/kitchen-doors/shaker-replacement-doors/',
  '/collections/kitchen-doors/handleless-cabinet-fronts/',
  '/collections/kitchen-doors/slimline-micro-shaker-fronts/',
  '/collections/kitchen-doors/fluted-reeded-fronts/'
];

test.describe('Cabivella UK Routes Verification', () => {
  for (const route of routes) {
    test(`Route ${route} returns 200 and has single H1 and en-GB lang`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      // Check single H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      // Check en-GB html attribute
      const lang = await page.getAttribute('html', 'lang');
      expect(lang).toBe('en-GB');

      // Check canonical tag exists
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toContain('cabivella.co.uk');
    });
  }

  test('Non-existent route returns 404', async ({ page }) => {
    const response = await page.goto('/non-existent-furniture-direction/');
    expect(response?.status()).toBe(404);
  });
});
