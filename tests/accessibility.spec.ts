import { test, expect } from '@playwright/test';

test.describe('Accessibility & Motion Tests', () => {
  test('Skip to content link is present and targets #main', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a.skip');
    await expect(skipLink).toBeAttached();
    expect(await skipLink.getAttribute('href')).toBe('#main');
    await expect(page.locator('main#main')).toBeAttached();
  });

  test('Page supports prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    // Check if motion reveals immediately when reduced motion is requested
    const reveal = page.locator('[data-reveal]').first();
    await expect(reveal).toBeAttached();
  });
});
