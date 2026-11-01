import { test, expect } from '@playwright/test';

test.describe('Cabivella Navigation & Contact Integrity', () => {
  test('Header and footer contain verified email, WhatsApp and LinkedIn', async ({ page }) => {
    await page.goto('/');

    // Check email link
    const emailLinks = page.locator('a[href^="mailto:barisbagirlar@gmail.com"]');
    await expect(emailLinks.first()).toBeVisible();

    // Check WhatsApp floating concierge
    const whatsappLink = page.locator('button#whatsapp-toggle-btn');
    await expect(whatsappLink).toBeVisible();

    // Check LinkedIn link
    const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/barisbagirlar/"]');
    await expect(linkedinLink.first()).toBeVisible();

    // Check collections direct navigation links
    await expect(page.locator('nav.desktop-nav > a[href="/collections/kitchens/"]')).toBeVisible();
    await expect(page.locator('nav.desktop-nav > a[href="/collections/bathrooms/"]')).toBeVisible();
  });

  test('Our Story page renders architectural panorama and leadership contacts', async ({ page }) => {
    await page.goto('/our-story/');

    // Check panorama image
    const panoramaImg = page.locator('img[src="/assets/img/istanbul-heritage-panorama.webp"]');
    await expect(panoramaImg).toBeVisible();

    // Check Barış Bağırlı leadership section
    await expect(page.locator('.leadership-card strong:has-text("Barış Bağırlı")')).toBeVisible();
    await expect(page.locator('.leadership-card a[href^="https://wa.me/447898262110"]')).toBeVisible();
    await expect(page.locator('.leadership-card a[href^="mailto:barisbagirlar@gmail.com"]')).toBeVisible();
    await expect(page.locator('.leadership-card a[href="https://www.linkedin.com/in/barisbagirlar/"]')).toBeVisible();
  });
});
