import { test, expect } from '@playwright/test';

test.describe('Cabivella Navigation & Contact Integrity', () => {
  test('Header and footer contain verified email and WhatsApp', async ({ page }) => {
    await page.goto('/');

    // Check email link
    const emailLinks = page.locator('a[href^="mailto:enquiries@cabivella.co.uk"]');
    await expect(emailLinks.first()).toBeVisible();

    // Check WhatsApp floating concierge
    const whatsappLink = page.locator('button#whatsapp-toggle-btn');
    await expect(whatsappLink).toBeVisible();

    // Check collections direct navigation links
    await expect(page.locator('nav.desktop-nav > a[href="/collections/kitchens/"]')).toBeVisible();
    await expect(page.locator('nav.desktop-nav > a[href="/collections/bathrooms/"]')).toBeVisible();
  });

  test('Our Story page renders architectural panorama and client management contacts', async ({ page }) => {
    await page.goto('/our-story/');

    // Check giant panorama image right under header
    const panoramaImg = page.locator('.story-giant-panorama-stage img.giant-panorama-image');
    await expect(panoramaImg).toBeVisible();

    // Check leadership section
    await expect(page.locator('.leadership-card strong:has-text("Dedicated Client Management")')).toBeVisible();
    await expect(page.locator('.leadership-card a[href^="https://wa.me/447898262110"]')).toBeVisible();
    await expect(page.locator('.leadership-card a[href^="mailto:enquiries@cabivella.co.uk"]')).toBeVisible();
  });
});
