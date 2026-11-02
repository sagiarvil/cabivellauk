import { test, expect } from '@playwright/test';

const viewports = [
  { width: 320, height: 600, name: 'mobile-small' },
  { width: 390, height: 844, name: 'mobile-medium' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1280, height: 800, name: 'desktop' },
  { width: 1440, height: 900, name: 'desktop-wide' }
];

test.describe('Responsive Layout & No Horizontal Overflow Verification', () => {
  for (const vp of viewports) {
    test(`Homepage renders with zero horizontal overflow at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Evaluate horizontal scroll width vs viewport width
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalScroll).toBe(false);

      // Verify header and footer are attached
      await expect(page.locator('#site-header')).toBeAttached();
      await expect(page.locator('footer.site-footer')).toBeAttached();
    });

    test(`Our Story renders with zero horizontal overflow at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/our-story/');

      // Evaluate horizontal scroll width vs viewport width
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalScroll).toBe(false);
      await expect(page.locator('.story-giant-panorama-stage img.giant-panorama-image')).toBeVisible();
    });

    test(`Model Detail page renders with zero horizontal overflow at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/collections/kitchens/lora-modern-kitchen/');

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalScroll).toBe(false);
      await expect(page.locator('.product-gallery .gallery-main img')).toBeVisible();
    });
  }
});
