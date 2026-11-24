import { test, expect } from '@playwright/test';

test.describe('SEO & Structured Data Verification', () => {
  test('Homepage has Organization and WebSite schema', async ({ page }) => {
    await page.goto('/');

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    let hasOrg = false;
    for (let i = 0; i < count; i++) {
      const text = await jsonLdScripts.nth(i).textContent();
      if (text && text.includes('Organization') && text.includes('Cabivella')) {
        hasOrg = true;
      }
    }
    expect(hasOrg).toBe(true);
  });

  test('Model page has Product schema and Breadcrumbs', async ({ page }) => {
    await page.goto('/collections/kitchens/belgravia-handleless/');

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();

    let hasProduct = false;
    let hasBreadcrumb = false;

    for (let i = 0; i < count; i++) {
      const text = await jsonLdScripts.nth(i).textContent();
      if (text) {
        if (text.includes('Product')) hasProduct = true;
        if (text.includes('BreadcrumbList')) hasBreadcrumb = true;
      }
    }

    expect(hasProduct).toBe(true);
    expect(hasBreadcrumb).toBe(true);
  });

  test('Priority Search Console & LLM landing hubs render canonical, #hero-answer-engine, and FAQPage JSON-LD', async ({ page }) => {
    const priorityRoutes = [
      '/collections/kitchens/wimbledon-village-in-frame-shaker/',
      '/collections/pantry-larder/',
      '/collections/fitted-storage/',
      '/materials-supply/products/cable-tray-and-containment/',
      '/materials-supply/products/technical-plant-service-riser-steel-doors/',
      '/materials-supply/products/decorative-aluminium-louvre/',
    ];

    for (const route of priorityRoutes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://cabivella.co.uk${route}`);

      await expect(page.locator('#hero-answer-engine')).toBeAttached();

      const jsonLdScripts = page.locator('script[type="application/ld+json"]');
      const count = await jsonLdScripts.count();
      let hasFaq = false;
      for (let i = 0; i < count; i++) {
        const text = await jsonLdScripts.nth(i).textContent();
        if (text && text.includes('FAQPage')) {
          hasFaq = true;
        }
      }
      expect(hasFaq).toBe(true);
    }
  });
});
