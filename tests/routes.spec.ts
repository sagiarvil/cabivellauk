import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

function getStaticRoutes(): string[] {
  const distDir = path.resolve(process.cwd(), 'dist');
  const routes: string[] = ['/'];
  
  function scan(dir: string, base: string = '') {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const rel = path.join(base, f);
      if (fs.statSync(full).isDirectory()) {
        scan(full, rel);
      } else if (f === 'index.html' && rel !== 'index.html') {
        const route = "/" + base.replace(/\\/g, "/") + "/";
        routes.push(route);
      }
    }
  }

  scan(distDir);
  return routes;
}

const allRoutes = getStaticRoutes();

test.describe('Static Routes Health Check', () => {
  for (const route of allRoutes) {
    test(`Route ${route} loads with 200 OK`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);

      const title = await page.title();
      expect(title.length).toBeGreaterThan(5);
    });
  }
});
