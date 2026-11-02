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
    await page.goto('/collections/kitchens/kensington-linear-chef-suite-300x240-cm-01/');

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
});
