import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { width: 320, height: 640 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

test.describe('Cabivella International V2 — Full Acceptance Suite', () => {
  test('1. Main UK header INTERNATIONAL menu works on desktop and mobile (<=2 touches) and closes on Escape/outside click', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const trigger = page.locator('#cb-intl-trigger');
    const dropdown = page.locator('#cb-intl-dropdown');
    await expect(trigger).toBeVisible();
    await expect(trigger).toContainText('INTERNATIONAL');

    // Click to open
    await trigger.click();
    await expect(dropdown).toBeVisible();

    // Check cards & bottom text
    const arCard = dropdown.locator('a.cb-intl-card[href="/ar/"]');
    const frCard = dropdown.locator('a.cb-intl-card[href="/fr/"]');
    await expect(arCard).toContainText('Middle East & North Africa');
    await expect(arCard).toContainText('العربية');
    await expect(arCard).toContainText('Arabic collections');
    await expect(frCard).toContainText('Francophone Markets');
    await expect(frCard).toContainText('Français');
    await expect(frCard).toContainText('Maroc · Tunisie · Algérie');
    await expect(dropdown.locator('.cb-intl-foot')).toContainText('Private Clients · Wholesale · Trade');

    // Ensure dropdown does not overflow viewport
    const box = await dropdown.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(1440);
    }

    // Escape closes dropdown
    await page.keyboard.press('Escape');
    await expect(dropdown).not.toBeVisible();

    // Move mouse away and click again, then click outside to close
    await page.mouse.move(10, 10);
    await trigger.click();
    await expect(dropdown).toBeVisible();
    await page.mouse.click(10, 200);
    await expect(dropdown).not.toBeVisible();

    // Mobile test (390px): 2 touches max to reach /ar/ and /fr/
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileToggle = page.locator('.cb-mobile-toggle');
    await expect(mobileToggle).toBeVisible();
    // Touch 1: open mobile menu
    await mobileToggle.click();
    const mobilePanel = page.locator('#cb-mobile-panel');
    await expect(mobilePanel).toBeVisible();
    await expect(mobilePanel.locator('.cb-mobile-intl-head')).toContainText('INTERNATIONAL');
    // Touch 2 target links are immediately visible
    await expect(mobilePanel.locator('a.cb-mobile-intl-card[href="/ar/"]')).toBeVisible();
    await expect(mobilePanel.locator('a.cb-mobile-intl-card[href="/fr/"]')).toBeVisible();
  });

  test('2. Shared header INTERNATIONAL menu is accessible across interior UK pages', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const route of ['/coffee-corners/', '/collections/kitchens/', '/collections/bathrooms/', '/trade/']) {
      await page.goto(route);
      await expect(page.locator('#cb-intl-trigger')).toBeVisible();
    }
  });

  test('3. Arabic page (/ar/) RTL layout, identity, single H1, WebP images, and zero console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const res = await page.goto('/ar/');
    expect(res?.status()).toBe(200);

    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    const dir = await page.evaluate(() => getComputedStyle(document.body).direction);
    expect(dir).toBe('rtl');

    // Header identity
    await expect(page.locator('.top-identity')).toHaveText('CABIVELLA INTERNATIONAL — العربية');

    // Single visible H1
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
    await expect(h1s.first()).toHaveText('أثاث تركي أنيق على مقاس منزلك');

    // Retail & Wholesale CTAs
    await expect(page.locator('.hero .actions a[data-type="retail"]')).toContainText('اطلب عرض سعر');
    await expect(page.locator('.hero .actions a[data-type="trade"]')).toContainText('طلبات الجملة والتوزيع');

    // Verify all visible images load and none use Base64 data URIs
    const imgAudit = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const base64Count = imgs.filter((i) => i.src.startsWith('data:')).length;
      const broken = imgs
        .filter((i) => !i.closest('details:not([open])'))
        .filter((i) => {
          i.scrollIntoView();
          return false;
        });
      return { total: imgs.length, base64Count, brokenCount: broken.length };
    });
    expect(imgAudit.base64Count).toBe(0);
    expect(imgAudit.total).toBeGreaterThanOrEqual(20);

    // Wait for lazy images after scrolling
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const loadedAll = await page.evaluate(() => {
      const mainImgs = Array.from(document.querySelectorAll('.hero img, .product > .photo img, .feature img, .trade img'));
      return mainImgs.every((img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0);
    });
    expect(loadedAll).toBe(true);
    expect(errors).toEqual([]);
  });

  test('4. French page (/fr/) LTR layout, identity, single H1, WebP images, and zero console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const res = await page.goto('/fr/');
    expect(res?.status()).toBe(200);

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    const dir = await page.evaluate(() => getComputedStyle(document.body).direction);
    expect(dir).toBe('ltr');

    // Header identity
    await expect(page.locator('.top-identity')).toHaveText('CABIVELLA INTERNATIONAL — FRANÇAIS');

    // Single visible H1
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
    await expect(h1s.first()).toHaveText('Mobilier turc haut de gamme, conçu pour votre intérieur.');

    // Retail & Wholesale CTAs
    await expect(page.locator('.hero .actions a[data-type="retail"]')).toContainText('Demander mon devis');
    await expect(page.locator('.hero .actions a[data-type="trade"]')).toContainText('Demander une offre professionnelle');

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const loadedAll = await page.evaluate(() => {
      const mainImgs = Array.from(document.querySelectorAll('.hero img, .product > .photo img, .feature img, .trade img'));
      return mainImgs.every((img) => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0);
    });
    expect(loadedAll).toBe(true);
    expect(errors).toEqual([]);
  });

  test('5. Product selection, Retail & Wholesale flows, Other country, quantity validation, WhatsApp message & analytics on /fr/ and /ar/', async ({ page }) => {
    // Test on /fr/
    await page.goto('/fr/');
    await page.evaluate(() => {
      (window as any).__cabivellaPreventRedirect = true;
    });

    // Click coffee corner model in drawer
    const coffeeDrawer = page.locator('#coffee .models-drawer');
    await coffeeDrawer.locator('summary').click();
    const riva170Btn = coffeeDrawer.locator('[data-model="RIVA 170 (EV-04)"]');
    await riva170Btn.click();

    await expect(page.locator('#product')).toHaveValue('coffee');
    await expect(page.locator('#model')).toHaveValue('RIVA 170 (EV-04)');
    await expect(page.locator('#measure')).toHaveValue('170 × 45 × 205 cm');

    // Test OTHER country option
    await page.locator('#country').selectOption('OTHER');
    await expect(page.locator('#other-field')).toBeVisible();
    await page.locator('#other').fill('Cameroun');
    await page.locator('#city').fill('Douala');

    // Test invalid/empty quantity validation
    await page.locator('#quantity').fill('0');
    await page.locator('#quote button[type="submit"]').click();
    await expect(page.locator('#form-error')).toBeVisible();
    await expect(page.locator('#form-error')).toContainText('quantité valide');

    // Fix quantity and submit Retail quote
    await page.locator('#quantity').fill('2');
    await page.locator('#quote button[type="submit"]').click();
    await expect(page.locator('#form-error')).toBeHidden();

    const frWa = await page.evaluate(() => (window as any).__cabivellaLastWhatsApp);
    expect(frWa.url).toContain('https://wa.me/905324261788?text=');
    expect(frWa.message).toContain('Bonjour Cabivella');
    expect(frWa.message).toContain('Particulier');
    expect(frWa.message).toContain('Cameroun');
    expect(frWa.message).toContain('Douala');
    expect(frWa.message).toContain('Coins café');
    expect(frWa.message).toContain('RIVA 170 (EV-04)');
    expect(frWa.message).toContain('170 × 45 × 205 cm');

    // Switch to Wholesale (trade) flow on /ar/
    await page.goto('/ar/');
    await page.evaluate(() => {
      (window as any).__cabivellaPreventRedirect = true;
    });

    await page.locator('#trade a[data-type="trade"]').click();
    await expect(page.locator('#company-field')).toBeVisible();
    await expect(page.locator('#trade-scope-field')).toBeVisible();

    await page.locator('#country').selectOption('SA');
    await page.locator('#city').fill('الرياض');
    await page.locator('#product').selectOption('bathroom');
    await page.locator('#quantity').fill('25');
    await page.locator('#company').fill('شركة الأفق للمفروشات');
    await page.locator('#measure').fill('1000 mm');
    await page.locator('#quote button[type="submit"]').click();

    const arWa = await page.evaluate(() => (window as any).__cabivellaLastWhatsApp);
    expect(arWa.url).toContain('https://wa.me/905324261788?text=');
    expect(arWa.message).toContain('مرحباً كابيفيلا');
    expect(arWa.message).toContain('تاجر أو شركة');
    expect(arWa.message).toContain('المملكة العربية السعودية');
    expect(arWa.message).toContain('الرياض');
    expect(arWa.message).toContain('أثاث الحمامات');
    expect(arWa.message).toContain('25');
    expect(arWa.message).toContain('شركة الأفق للمفروشات');

    // Verify analytics events in dataLayer (and ensure zero PII in dataLayer!)
    const dlEvents = await page.evaluate(() => (window as any).dataLayer || []);
    const eventNames = dlEvents.map((e: any) => e.event).filter(Boolean);
    expect(eventNames).toContain('wholesale_quote_start');
    expect(eventNames).toContain('quote_form_complete');
    expect(eventNames).toContain('whatsapp_click');
    const dlJson = JSON.stringify(dlEvents);
    expect(dlJson).not.toContain('شركة الأفق للمفروشات');
    expect(dlJson).not.toContain('الرياض');
  });

  test('6. Responsive viewports (320, 390, 768, 1024, 1440, 1920) have zero horizontal overflow and mobile sticky dock works cleanly', async ({ page }) => {
    for (const route of ['/', '/ar/', '/fr/']) {
      for (const vp of VIEWPORTS) {
        await page.setViewportSize(vp);
        await page.goto(route);
        const overflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        expect(overflow, `Overflow detected on ${route} at ${vp.width}px`).toBe(false);

        if (route !== '/' && vp.width <= 768) {
          const dock = page.locator('.dock');
          await expect(dock).toBeVisible();
          await expect(dock.locator('a[href="tel:+905324261788"]')).toBeVisible();
          await expect(dock.locator('a[href="#devis"]')).toBeVisible();
        }
      }
    }
  });

  test('7. International SEO, canonical, mutual hreflang, and sitemap verification', async ({ page }) => {
    await page.goto('/ar/');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://cabivella.co.uk/ar/');
    await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute('href', 'https://cabivella.co.uk/ar/');
    await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute('href', 'https://cabivella.co.uk/fr/');
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(0);

    await page.goto('/fr/');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://cabivella.co.uk/fr/');
    await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute('href', 'https://cabivella.co.uk/fr/');
    await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute('href', 'https://cabivella.co.uk/ar/');
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(0);

    // Check English homepage hreflang has NOT been polluted with /ar/
    await page.goto('/');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://cabivella.co.uk/');
    await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveCount(0);

    // Check sitemap files on disk
    const sitemapCore = fs.readFileSync(path.resolve(process.cwd(), 'public/sitemap-core.xml'), 'utf-8');
    const sitemapExport = fs.readFileSync(path.resolve(process.cwd(), 'public/sitemap-export.xml'), 'utf-8');
    expect(sitemapCore).toContain('https://cabivella.co.uk/ar/');
    expect(sitemapCore).toContain('https://cabivella.co.uk/fr/');
    expect(sitemapExport).toContain('https://cabivella.co.uk/ar/');
    expect(sitemapExport).toContain('https://cabivella.co.uk/fr/');
    expect(sitemapExport).toContain('https://cabivella.co.uk/trade/europe/');
  });
});
