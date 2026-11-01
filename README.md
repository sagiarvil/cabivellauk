# Cabivella UK — Bespoke Architectural Cabinetry

> **Considered Cabinetry for UK Homes — Turkish Making, British Sensibility.**  
> High-performance multi-page production architecture built with Astro, TypeScript, and Firebase Hosting. Engineered specifically for the United Kingdom market with zero price display, tailored enquiry pipelines, and verified commercial specifications.

---

## 🏛️ Project Overview

- **Domain:** [https://cabivella.co.uk](https://cabivella.co.uk) (Connected via Firebase Hosting & Cloudflare Edge)
- **Live Hosting:** [https://cabivellauk.web.app](https://cabivellauk.web.app) | [https://cabivellauk.firebaseapp.com](https://cabivellauk.firebaseapp.com)
- **Target Market:** United Kingdom (`en-GB`)
- **Commercial Model:** B2B Architectural Specifiers & Trade Tenders / Homeowner Bespoke Enquiries (No public price lists)
- **Repository:** [https://github.com/sagiarvil/cabivellauk](https://github.com/sagiarvil/cabivellauk)

---

## 🌟 Key Features & Architecture

1. **Astro 5+ Static Pre-rendering:** Sub-second TTFB across all 28 content pages, 6 root collections, and 14 individual design directions.
2. **Typography & Aesthetics:** Modern Geometric Neo-Grotesque (`Plus Jakarta Sans`) headings matching approved architectural design references, paired with soft neutral dynamic watermarks (`#ECEAE5`) and 80ms Apple Motion staggered reveal transitions.
3. **Dual-Tier Direct Concierge:**
   - **Direct Email:** [`barisbagirlar@gmail.com`](mailto:barisbagirlar@gmail.com)
   - **WhatsApp Business Concierge:** [`+44 7898 262110`](https://wa.me/447898262110)
   - **Executive Network:** [Barış Bağırlı on LinkedIn](https://www.linkedin.com/in/barisbagirlar/)
4. **Resilient Lead Generation Pipeline:**
   - Cloudflare Pages Functions (`/api/enquiries`) with Zod schema validation.
   - Cloudflare Turnstile bot deterrence.
   - Cloudflare D1 durable SQLite audit logging with idempotency enforcement.
   - Automatic CRM dispatch (HubSpot) and Postmark transactional notifications.
5. **Full SEO & Structured Data:**
   - 100% unique meta descriptions and single-`<h1>` enforcement per page.
   - Schema.org `Organization`, `WebSite`, `BreadcrumbList`, and `Product` JSON-LD models.
   - Strict UK GDPR and PECR cookie preferences management.
   - Zero-leakage responsive design tested against 320px–1440px viewports.

---

## 📁 Collections & Design Directions

| Collection | Model Directions | Primary Application |
|---|---|---|
| **Kitchens** | Shaker Kitchens, Contemporary Kitchens, Compact Kitchens | Bespoke culinary spaces, Victorian/Georgian conversions |
| **Bathrooms** | Wall-Hung Vanities, Fluted Vanities, Tall Bathroom Storage | Serene wellness retreats, moisture-resistant cabinetry |
| **Pantry & Larder** | Tall Larder Cupboards, Corner Pantry Storage | High-density culinary dry goods & spice organisation |
| **Coffee Stations** | Pocket-Door Coffee Stations, Open-Shelf Coffee Cabinets | Concealed breakfast bars & artisanal appliance garages |
| **Fitted Storage** | Alcove Cupboards, Utility Room Cabinets | Architectural chimney breast joinery & boot room units |
| **Kitchen Doors** | Shaker Replacement Doors, Handleless Cabinet Fronts | Sustainable kitchen carcass upgrades & bespoke refacing |

---

## 🛠️ Local Development & Quality Gates

```bash
# Clone the repository
git clone https://github.com/sagiarvil/cabivellauk.git
cd cabivellauk

# Install dependencies
npm ci

# Start local development server
npm run dev

# Execute Astro production build
npm run build

# Run automated SEO & asset integrity checks
npm run audit:seo
npm run audit:assets

# Execute Playwright E2E & responsive layout acceptance suite (40 tests)
npm test

# Deploy to Firebase Hosting (sagiarvil account)
firebase deploy --only hosting
```

---

## 🛡️ Quality Gates & Compliance

- **BOM Inspection:** Byte-level zero-BOM verification (`0xEF, 0xBB, 0xBF` absent across all project assets).
- **Automated CI/CD:** GitHub Actions workflows for continuous integration (`ci.yml`) and Firebase deployment (`firebase-deploy.yml`).
- **Security Headers:** HSTS, `nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, and fine-grained `Permissions-Policy` configured in `firebase.json`.

---

© 2026 Cabivella. All rights reserved. Registered for UK supply.
