import { test, expect } from '@playwright/test';

test.describe('Lineadecor-Style Architectural Kitchens Verification', () => {
  test('Kitchens page renders Lineadecor header, switcher, toolbar, and slider cards', async ({ page }) => {
    await page.goto('/collections/kitchens/');

    // 1. Single H1
    const h1 = page.locator('h1.linea-main-title');
    await expect(h1).toHaveText('KITCHENS');

    // 2. Switcher buttons
    const switchBtns = page.locator('.linea-switch-btn');
    await expect(switchBtns).toHaveCount(3);

    // 3. Toolbar: Filter and Density toggles
    await expect(page.locator('.linea-filters-trigger')).toBeVisible();
    await expect(page.locator('.linea-density-switcher')).toBeVisible();

    // 4. Grid cards: 26 cards total
    const cards = page.locator('.linea-suite-card');
    await expect(cards).toHaveCount(26);

    // 5. Model Title ABOVE image
    const firstTitle = page.locator('.linea-suite-card .suite-primary-name a').first();
    await expect(firstTitle).toBeVisible();

    // 6. Test in-card slider: first card has slider buttons
    const firstCard = cards.first();
    const nextBtn = firstCard.locator('[data-slider-next]');
    const curImg = firstCard.locator('.suite-slider-img');
    const initialSrc = await curImg.getAttribute('src');

    await nextBtn.click();
    await page.waitForTimeout(300);
    const newSrc = await curImg.getAttribute('src');
    expect(newSrc).not.toBe(initialSrc);

    // 7. Test Modern Kitchens switch
    const modernBtn = page.locator('[data-kitchen-switch="modern"]');
    await modernBtn.click();
    await page.waitForTimeout(200);

    const visibleCards = page.locator('.linea-suite-card:visible');
    await expect(visibleCards).toHaveCount(20);
    await expect(h1).toHaveText('MODERN KITCHENS');

    // 8. Test Classic Kitchens switch
    const classicBtn = page.locator('[data-kitchen-switch="classic"]');
    await classicBtn.click();
    await page.waitForTimeout(200);

    const visibleClassic = page.locator('.linea-suite-card:visible');
    await expect(visibleClassic).toHaveCount(6);
    await expect(h1).toHaveText('CLASSIC KITCHENS');

    // 9. Test Density switch: toggle to 3-column
    const grid = page.locator('[data-kitchen-grid]');
    await expect(grid).toHaveClass(/density-2/);

    const density3Btn = page.locator('[data-grid-density="3"]');
    await density3Btn.click();
    await expect(grid).toHaveClass(/density-3/);

    // 10. Test Filters drawer
    const filterBtn = page.locator('[data-filter-toggle]');
    const filterDrawer = page.locator('[data-filter-drawer]');
    await expect(filterDrawer).not.toBeVisible();

    await filterBtn.click();
    await expect(filterDrawer).toBeVisible();
  });
});
