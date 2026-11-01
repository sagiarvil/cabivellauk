import { test, expect } from '@playwright/test';

test.describe('Enquiry Form Tests', () => {
  test('Enquiry form contains required fields and inputs', async ({ page }) => {
    await page.goto('/enquire/');

    await expect(page.locator('#enquiry-name')).toBeVisible();
    await expect(page.locator('#enquiry-email')).toBeVisible();
    await expect(page.locator('#enquiry-phone')).toBeVisible();
    await expect(page.locator('#enquiry-message')).toBeVisible();
    await expect(page.locator('#submit-btn')).toBeVisible();

    // Verify WhatsApp fallback link is present
    await expect(page.locator('a.whatsapp-direct-link')).toBeVisible();
  });
});
