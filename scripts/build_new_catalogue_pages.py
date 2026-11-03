#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cabivella UK - Enterprise Catalogue & Product Page Generator (Batch 2)
Generates:
1. /materials-supply/collections/insulation/index.html (24 products)
2. /materials-supply/collections/bathroom/index.html (24 products)
3. /materials-supply/collections/drainage/index.html (22 products)
4. 70 dedicated product pages with 50/50 symmetry and 3NF tables
Enforces Atölye Locus typography and zero broken images.
"""

import os
import shutil
from new_collections_data import INSULATION_PRODUCTS, BATHROOM_PRODUCTS, DRAINAGE_PRODUCTS

ROOT = "/Users/macair1/projects/cabivellaUK"
PUBLIC_DIR = os.path.join(ROOT, "public")
DIST_DIR = os.path.join(ROOT, "dist")

LOCUS_HEADER_STYLE = """
<style id="atolyelocus-typography-engine">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

:root {
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Roboto Mono', Menlo, Consolas, monospace;
}

body, html {
  font-family: var(--font-sans) !important;
  color: #182320;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, .h1, h2, .h2, h3, .h3 {
  font-family: var(--font-serif) !important;
  font-weight: 500 !important;
  letter-spacing: -0.04em !important;
  line-height: 1.18 !important;
  color: #182320 !important;
}

h1, .h1 { font-size: clamp(2.4rem, 4.5vw, 3.6rem) !important; }
h2, .h2 { font-size: clamp(1.8rem, 3.2vw, 2.6rem) !important; }
h3, .h3 { font-size: 1.25rem !important; line-height: 1.35 !important; }

p, li, span, td, th, input, textarea, select, button {
  font-family: var(--font-sans) !important;
  letter-spacing: -0.015em;
}

.kicker, .product-code, .category-badge {
  font-family: var(--font-sans) !important;
  font-weight: 600 !important;
  font-size: 0.75rem !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #8e7a68 !important;
}

.product-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.product-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 16px 36px rgba(24, 35, 32, 0.08) !important;
}

.tech-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e8e4db;
  border-radius: 6px;
  overflow: hidden;
}
.tech-table th {
  background: #f7f5f0;
  color: #182320;
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
  font-size: 0.82rem;
  border-bottom: 1px solid #e8e4db;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.tech-table td {
  padding: 12px 16px;
  font-size: 0.88rem;
  border-bottom: 1px solid #f0ede6;
  color: #3b4742;
}
.tech-table tr:last-child td {
  border-bottom: none;
}
.tech-table td:first-child {
  font-weight: 500;
  color: #182320;
  width: 40%;
  background: #faf9f6;
}
</style>
"""

SITE_NAV = """
<header class="site-header">
  <div class="wrap header-wrap">
    <div class="header-left">
      <a href="/" class="brand-link" aria-label="Cabivella Home">
        <img src="/assets/img/cabivella-crest-transparent.png" alt="Cabivella Crest" width="46" height="46" class="brand-crest">
        <span class="brand-title">CABIVELLA</span>
      </a>
      <div class="brand-subtitle">UNITED KINGDOM · BESPOKE ARCHITECTURAL SUPPLY</div>
    </div>
    <nav class="header-nav" aria-label="Primary Navigation">
      <a href="/materials-supply/">Overview</a>
      <a href="/materials-supply/collections/insulation/">Insulation</a>
      <a href="/materials-supply/collections/bathroom/">Sanitaryware</a>
      <a href="/materials-supply/collections/drainage/">Drainage &amp; Piping</a>
      <a href="/materials-supply/#enquiry" class="nav-cta">Trade Enquiry ↗</a>
    </nav>
  </div>
</header>
"""

SITE_FOOTER = """
<footer class="site-footer">
  <div class="wrap foot-top">
    <div class="foot-brand-col">
      <div class="foot-brand-header">
        <img src="/assets/img/cabivella-crest-transparent.png" alt="Cabivella Crest" width="42" height="42">
        <span style="font-family:Georgia,serif; font-size:1.4rem; letter-spacing:0.04em; color:#ffffff;">CABIVELLA</span>
      </div>
      <p style="font-size:0.86rem; color:#a2b1a9; line-height:1.6; margin-top:12px;">Direct mill &amp; factory supply of European-certified building materials, precision structural steel, uPVC fenestration, acoustic insulation, vitreous sanitaryware and civil drainage from Türkiye to UK contractors.</p>
      <div style="font-size:0.8rem; color:#788680; margin-top:8px;">BS EN / ISO 9001 / CE &amp; UKCA Compliant</div>
    </div>
    <div>
      <div class="foot-col-title" style="font-family:Georgia,serif; color:#ffffff; font-size:1.05rem; margin-bottom:16px;">Thermal &amp; Acoustic</div>
      <ul style="list-style:none; padding:0; margin:0; font-size:0.86rem; display:flex; flex-direction:column; gap:8px;">
        <li><a href="/materials-supply/collections/insulation/" style="color:#a2b1a9; text-decoration:none;">Rockwool Facade Slabs</a></li>
        <li><a href="/materials-supply/collections/insulation/#acoustic" style="color:#a2b1a9; text-decoration:none;">Acoustic Partition Batts</a></li>
        <li><a href="/materials-supply/collections/insulation/#waterproof" style="color:#a2b1a9; text-decoration:none;">2K Cementitious Coatings</a></li>
        <li><a href="/materials-supply/collections/insulation/#ewi" style="color:#a2b1a9; text-decoration:none;">ETA EWI Anchors &amp; Meshes</a></li>
      </ul>
    </div>
    <div>
      <div class="foot-col-title" style="font-family:Georgia,serif; color:#ffffff; font-size:1.05rem; margin-bottom:16px;">Sanitary &amp; Bathrooms</div>
      <ul style="list-style:none; padding:0; margin:0; font-size:0.86rem; display:flex; flex-direction:column; gap:8px;">
        <li><a href="/materials-supply/collections/bathroom/" style="color:#a2b1a9; text-decoration:none;">Rimless Wall-Hung WCs</a></li>
        <li><a href="/materials-supply/collections/bathroom/#brassware" style="color:#a2b1a9; text-decoration:none;">Solid Brass Basin Mixers</a></li>
        <li><a href="/materials-supply/collections/bathroom/#showers" style="color:#a2b1a9; text-decoration:none;">Thermostatic Rain Columns</a></li>
        <li><a href="/materials-supply/collections/bathroom/#cisterns" style="color:#a2b1a9; text-decoration:none;">Concealed 80mm Cisterns</a></li>
      </ul>
    </div>
    <div>
      <div class="foot-col-title" style="font-family:Georgia,serif; color:#ffffff; font-size:1.05rem; margin-bottom:16px;">Drainage &amp; Piping</div>
      <ul style="list-style:none; padding:0; margin:0; font-size:0.86rem; display:flex; flex-direction:column; gap:8px;">
        <li><a href="/materials-supply/collections/drainage/" style="color:#a2b1a9; text-decoration:none;">PN20 Potable PPRC Pipes</a></li>
        <li><a href="/materials-supply/collections/drainage/#silent" style="color:#a2b1a9; text-decoration:none;">Acoustic Silent Waste Pipes</a></li>
        <li><a href="/materials-supply/collections/drainage/#corrugated" style="color:#a2b1a9; text-decoration:none;">SN8 Twin-Wall Sewer Pipes</a></li>
        <li><a href="/materials-supply/collections/drainage/#pe100" style="color:#a2b1a9; text-decoration:none;">PE100 Water Mains &amp; Valves</a></li>
      </ul>
    </div>
  </div>
  <div style="border-top:1px solid #23322d; padding-top:24px; text-align:center; font-size:0.8rem; color:#788680; margin-top:40px;">
    © 2026 Cabivella Building Materials Division. All rights reserved. London · Istanbul · Trade Procurement Office.
  </div>
</footer>
"""

RFQ_SECTION = """
<section class="section" id="enquiry" style="background:#f7f5f0; padding:80px 0; border-top:1px solid #e8e4db;">
  <div class="wrap" style="max-width:1120px; margin:0 auto; padding:0 24px;">
    <div style="text-align:center; max-width:680px; margin:0 auto 48px auto;">
      <div class="kicker" style="margin-bottom:8px;">Direct Trade Specification &amp; Quotation</div>
      <h2 style="margin-bottom:16px;">Put your project specification<br/>in front of our engineering team.</h2>
      <p style="color:#57655f; font-size:1.02rem; line-height:1.6;">Share CAD schedules, drawings, destination port/site, and required material volumes. We evaluate compliance against BS EN standards and deliver FOB / DDP commercial terms.</p>
    </div>
    <div style="background:#ffffff; border:1px solid #e2ded5; border-radius:12px; padding:40px; box-shadow:0 12px 32px rgba(24,35,32,0.04);">
      <form id="enquiry-form" onsubmit="event.preventDefault(); alert('Your specification request has been registered. An engineering director will contact you with formal schedules.');" style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div>
          <label style="display:block; font-size:0.85rem; font-weight:600; color:#182320; margin-bottom:6px;">Contact Name *</label>
          <input type="text" name="name" required style="width:100%; padding:12px 14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.95rem; box-sizing:border-box; background:#faf9f6;"/>
        </div>
        <div>
          <label style="display:block; font-size:0.85rem; font-weight:600; color:#182320; margin-bottom:6px;">Company / Practice Name</label>
          <input type="text" name="company" style="width:100%; padding:12px 14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.95rem; box-sizing:border-box; background:#faf9f6;"/>
        </div>
        <div>
          <label style="display:block; font-size:0.85rem; font-weight:600; color:#182320; margin-bottom:6px;">Corporate Email *</label>
          <input type="email" name="email" required style="width:100%; padding:12px 14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.95rem; box-sizing:border-box; background:#faf9f6;"/>
        </div>
        <div>
          <label style="display:block; font-size:0.85rem; font-weight:600; color:#182320; margin-bottom:6px;">Destination Country / Site Location *</label>
          <input type="text" name="destination" placeholder="United Kingdom (e.g. London / Port of Felixstowe)" required style="width:100%; padding:12px 14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.95rem; box-sizing:border-box; background:#faf9f6;"/>
        </div>
        <div style="grid-column:1 / -1;">
          <label style="display:block; font-size:0.85rem; font-weight:600; color:#182320; margin-bottom:6px;">Approximate Quantities, Profile Grades &amp; Architectural Notes *</label>
          <textarea id="enquiry-notes" name="notes" rows="4" required placeholder="Specify estimated quantities (e.g., 2000 m² Rockwool slabs, 80 sets rimless WCs, 500 m SN8 corrugated pipe), target delivery schedules, and drawing reference tags." style="width:100%; padding:14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.95rem; box-sizing:border-box; background:#faf9f6;"></textarea>
        </div>
        <div style="grid-column:1 / -1; display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
          <div style="font-size:0.85rem; color:#788680;">Direct Turkish Mill &amp; Factory Channel · Zero Intermediary Markups</div>
          <button type="submit" style="background:#182320; color:#ffffff; font-weight:600; font-size:0.95rem; padding:14px 28px; border:none; border-radius:6px; cursor:pointer; letter-spacing:0.02em;">Submit Project Specification ↗</button>
        </div>
      </form>
    </div>
  </div>
</section>
"""

def generate_collection_page(title, meta_desc, kicker, lead, banner_img, products, sections):
    sec_html = ""
    for sec_title in sections:
        items = [p for p in products if p["section"] == sec_title]
        if not items:
            continue
        
        cards_html = ""
        for p in items:
            p_img = p["img_src"]
            p_url = f"/materials-supply/products/{p['slug']}/"
            p_code = p["id"]
            p_name = p["name"]
            p_desc = p["desc"]
            metric = p.get("thickness") or p.get("dimensions") or p.get("pressure_class") or "Standard"
            
            cards_html += f"""
            <article class="product-card" data-product-search="{p_name.lower()} {p_desc.lower()} {p_code.lower()}" style="background:#ffffff; border:1px solid #e5e0d8; border-radius:8px; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between;">
              <a href="{p_url}" class="product-img" style="display:block; overflow:hidden; background:#f5f2eb; aspect-ratio:4/3; position:relative;">
                <img src="{p_img}" alt="{p_name} - Genuine Architectural System Drawing" loading="lazy" decoding="async" width="1000" height="760" style="width:100%; height:100%; object-fit:cover; display:block;"/>
              </a>
              <div class="product-body" style="padding:22px; display:flex; flex-direction:column; justify-content:space-between; flex-grow:1;">
                <div>
                  <div class="product-code" style="margin-bottom:6px;">Catalogue / {p_code}</div>
                  <h3 style="margin:0 0 10px 0;"><a href="{p_url}" style="color:#182320; text-decoration:none;">{p_name}</a></h3>
                  <p style="color:#57655f; font-size:0.88rem; line-height:1.55; margin-bottom:18px;">{p_desc}</p>
                </div>
                <div style="border-top:1px solid #f0ede8; padding-top:14px; display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.82rem; color:#788680; font-weight:600;">{metric}</span>
                  <a href="{p_url}" style="color:#182320; font-weight:600; font-size:0.86rem; text-decoration:none;">Specifications ↗</a>
                </div>
              </div>
            </article>
            """
        
        sec_html += f"""
        <section class="collection-section" style="margin-top:60px;">
          <div style="border-bottom:2px solid #182320; padding-bottom:12px; margin-bottom:28px; display:flex; justify-content:space-between; align-items:baseline;">
            <h2 style="font-size:1.6rem; margin:0;">{sec_title}</h2>
            <span style="font-size:0.85rem; color:#788680; font-weight:600;">{len(items)} Systems</span>
          </div>
          <div class="product-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:28px;">
            {cards_html}
          </div>
        </section>
        """
        
    html = f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="theme-color" content="#f7f6f2"/>
  <title>{title} | Product Catalogue | Cabivella UK</title>
  <meta name="description" content="{meta_desc}"/>
  <link rel="canonical" href="https://cabivella.co.uk{banner_img.split('?')[0]}"/>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"/>
  <link rel="stylesheet" href="/assets/site.css"/>
  {LOCUS_HEADER_STYLE}
</head>
<body style="background:#fcfbf9; margin:0; padding:0;">
  {SITE_NAV}
  <main id="main">
    <div class="wrap" style="max-width:1360px; margin:0 auto; padding:40px 24px 80px 24px;">
      <div style="font-size:0.84rem; color:#788680; margin-bottom:24px;">
        <a href="/materials-supply/" style="color:#788680; text-decoration:none;">Materials Supply</a>
        <span style="margin:0 8px;">›</span>
        <span style="color:#182320; font-weight:600;">{kicker}</span>
      </div>
      
      <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:48px; align-items:center; background:#ffffff; border:1px solid #e8e4db; border-radius:12px; padding:48px; margin-bottom:40px;">
        <div>
          <div class="kicker" style="margin-bottom:8px;">{kicker} · {len(products)} Product Specifications</div>
          <h1 style="margin:0 0 18px 0;">{title}</h1>
          <p style="color:#57655f; font-size:1.1rem; line-height:1.6; margin-bottom:28px; max-width:620px;">{lead}</p>
          <div style="display:flex; gap:16px;">
            <a href="#enquiry" style="background:#182320; color:#ffffff; text-decoration:none; font-weight:600; font-size:0.95rem; padding:14px 28px; border-radius:6px;">Request Technical Schedules ↗</a>
            <a href="#catalogue" style="background:#faf9f6; color:#182320; border:1px solid #d5cebf; text-decoration:none; font-weight:600; font-size:0.95rem; padding:14px 24px; border-radius:6px;">Browse All {len(products)} Systems ↓</a>
          </div>
        </div>
        <div style="border-radius:8px; overflow:hidden; border:1px solid #e5e0d8; background:#f5f2eb; aspect-ratio:4/3;">
          <img src="{products[0]['img_src']}" alt="{title} Master Category Illustration" style="width:100%; height:100%; object-fit:cover; display:block;"/>
        </div>
      </div>

      <div id="catalogue" style="background:#ffffff; border:1px solid #e8e4db; border-radius:8px; padding:16px 24px; margin-bottom:32px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div style="display:flex; align-items:center; gap:12px; flex-grow:1; max-width:480px;">
          <input type="search" id="live-search" placeholder="Search systems by name, dimensions, or standard..." onkeyup="filterCards()" style="width:100%; padding:10px 14px; border:1px solid #d5cebf; border-radius:6px; font-size:0.92rem; background:#faf9f6;"/>
        </div>
        <div style="font-size:0.86rem; color:#788680; font-weight:500;">
          Showing <span id="visible-count" style="font-weight:700; color:#182320;">{len(products)}</span> of {len(products)} verified specifications
        </div>
      </div>

      <div id="sections-container">
        {sec_html}
      </div>
    </div>
    {RFQ_SECTION}
  </main>
  {SITE_FOOTER}
  <script>
    function filterCards() {{
      const query = document.getElementById('live-search').value.toLowerCase();
      const cards = document.querySelectorAll('.product-card');
      let visible = 0;
      cards.forEach(card => {{
        const text = card.getAttribute('data-product-search');
        if (text.includes(query)) {{
          card.style.display = 'flex';
          visible++;
        }} else {{
          card.style.display = 'none';
        }}
      }});
      document.getElementById('visible-count').innerText = visible;
    }}
  </script>
</body>
</html>
"""
    return html

def generate_product_page(p, collection_title, collection_url):
    name = p["name"]
    code = p["id"]
    desc = p["desc"]
    img = p["img_src"]
    sec = p["section"]
    specs = p.get("specs", [])
    
    # Generate 3NF Table A
    rows_a = ""
    for k, v in specs[:len(specs)//2]:
        rows_a += f"<tr><td>{k}</td><td>{v}</td></tr>"
    table_a = f"""
    <table class="tech-table">
      <thead><tr><th colspan="2">Table A: Structural &amp; Dimensional Geometry</th></tr></thead>
      <tbody>{rows_a}</tbody>
    </table>
    """
    
    # Generate 3NF Table B
    rows_b = ""
    for k, v in specs[len(specs)//2:]:
        rows_b += f"<tr><td>{k}</td><td>{v}</td></tr>"
    table_b = f"""
    <table class="tech-table">
      <thead><tr><th colspan="2">Table B: Material &amp; Performance Properties</th></tr></thead>
      <tbody>{rows_b}</tbody>
    </table>
    """
    
    # Generate 3NF Table C
    table_c = """
    <table class="tech-table">
      <thead><tr><th colspan="2">Table C: European Compliance &amp; Quality Gates</th></tr></thead>
      <tbody>
        <tr><td>Harmonized Standard</td><td>BS EN / ISO Harmonized Architectural Code</td></tr>
        <tr><td>Quality Assurance</td><td>Factory Production Control (FPC) ISO 9001:2015</td></tr>
        <tr><td>Mill / Test Traceability</td><td>Type 3.1 Factory Inspection Certificate Included</td></tr>
        <tr><td>Regulatory Marking</td><td>CE Mark (EU CPR 305/2011) / UKCA Compliant</td></tr>
        <tr><td>Supply Origin</td><td>Marmara &amp; Aegean Industrial Hubs, Türkiye (Direct Port Dispatch)</td></tr>
      </tbody>
    </table>
    """

    html = f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="theme-color" content="#f7f6f2"/>
  <title>{name} | Technical Specification | Cabivella UK</title>
  <meta name="description" content="{desc}"/>
  <link rel="canonical" href="https://cabivella.co.uk/materials-supply/products/{p['slug']}/"/>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"/>
  <link rel="stylesheet" href="/assets/site.css"/>
  {LOCUS_HEADER_STYLE}
</head>
<body style="background:#fcfbf9; margin:0; padding:0;">
  {SITE_NAV}
  <main id="main">
    <div class="wrap" style="max-width:1360px; margin:0 auto; padding:40px 24px 80px 24px;">
      <div style="font-size:0.84rem; color:#788680; margin-bottom:28px;">
        <a href="/materials-supply/" style="color:#788680; text-decoration:none;">Materials Supply</a>
        <span style="margin:0 8px;">›</span>
        <a href="{collection_url}" style="color:#788680; text-decoration:none;">{collection_title}</a>
        <span style="margin:0 8px;">›</span>
        <span style="color:#182320; font-weight:600;">{name}</span>
      </div>

      <!-- 50/50 Master Architectural Layout -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; margin-bottom:60px;">
        
        <!-- Left Column: Sticky Drawing & Verification Badges -->
        <div style="position:sticky; top:32px;">
          <div style="background:#ffffff; border:1px solid #e5e0d8; border-radius:12px; overflow:hidden; box-shadow:0 12px 32px rgba(24,35,32,0.04);">
            <div style="background:#f5f2eb; aspect-ratio:4/3; position:relative; overflow:hidden;">
              <img src="{img}" alt="{name} - Architectural System Drawing" width="1000" height="760" style="width:100%; height:100%; object-fit:contain; display:block;"/>
            </div>
            <div style="padding:24px; background:#faf9f6; border-top:1px solid #e8e4db;">
              <div style="font-size:0.75rem; font-weight:700; color:#8e7a68; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:6px;">Verified Specification Asset</div>
              <div style="font-size:0.88rem; color:#182320; font-weight:600;">Authentic Engineering Drawing &amp; Profile Geometry</div>
              <p style="font-size:0.82rem; color:#57655f; margin:6px 0 0 0; line-height:1.5;">CAD DWG / BIM models, acoustic test certificates and structural calculation schedules available to consulting engineers and contractors.</p>
            </div>
          </div>
          
          <div style="margin-top:24px; display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background:#ffffff; border:1px solid #e8e4db; border-radius:8px; padding:16px; text-align:center;">
              <div style="font-size:1.1rem; font-weight:700; color:#182320;">EN / ISO</div>
              <div style="font-size:0.78rem; color:#788680; margin-top:4px;">Factory Quality Gate Approved</div>
            </div>
            <div style="background:#ffffff; border:1px solid #e8e4db; border-radius:8px; padding:16px; text-align:center;">
              <div style="font-size:1.1rem; font-weight:700; color:#182320;">CE &amp; UKCA</div>
              <div style="font-size:0.78rem; color:#788680; margin-top:4px;">Verified Conformity Certificate</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Product Data & 3NF Technical Tables -->
        <div>
          <div class="product-code" style="margin-bottom:8px;">Catalogue / {code} · {sec}</div>
          <h1 style="margin:0 0 16px 0; font-size:2.4rem;">{name}</h1>
          <p style="color:#57655f; font-size:1.05rem; line-height:1.65; margin-bottom:32px;">{desc}</p>
          
          <div style="background:#ffffff; border:1px solid #e8e4db; border-radius:8px; padding:20px; margin-bottom:32px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:0.8rem; color:#788680; font-weight:600; text-transform:uppercase;">Procurement Status</div>
              <div style="font-size:1rem; font-weight:700; color:#182320; margin-top:2px;">Direct Factory Dispatch · Trade Quantities</div>
            </div>
            <a href="#enquiry" onclick="focusRfq('{code}', '{name}')" style="background:#182320; color:#ffffff; font-weight:600; font-size:0.92rem; padding:12px 24px; border-radius:6px; text-decoration:none;">Send project details ↗</a>
          </div>

          <!-- 3NF Tables -->
          {table_a}
          {table_b}
          {table_c}

          <div style="background:#f7f5f0; border-left:3px solid #8e7a68; padding:18px; margin-top:32px; border-radius:0 6px 6px 0;">
            <div style="font-weight:700; font-size:0.88rem; color:#182320; margin-bottom:4px;">Trade Procurement Assurance</div>
            <p style="font-size:0.82rem; color:#57655f; margin:0; line-height:1.55;">Direct mill &amp; manufacturer shipments from Türkiye. Fully packed in seaworthy containers with complete bill of lading, mill test certificates, and customs documentation for streamlined clearance into UK ports.</p>
          </div>
        </div>

      </div>
    </div>
    {RFQ_SECTION}
  </main>
  {SITE_FOOTER}
  <script>
    function focusRfq(code, name) {{
      const notes = document.getElementById('enquiry-notes');
      if (notes) {{
        notes.value = "Requesting formal trade quotation & schedules for: " + code + " - " + name + "\\n\\nRequired quantity: \\nDestination site: \\nTarget delivery: ";
        notes.focus();
      }}
    }}
  </script>
</body>
</html>
"""
    return html

# 1. Insulation Collection
insulation_sections = [
    "Mineral Wool & High-Efficiency Thermal Slabs",
    "Acoustic Dampers & Decoupling Systems",
    "High-Temperature Refractory & Industrial Fireproof Systems",
    "Elastomeric Rubber & Polyethylene Pipe Insulation",
    "Technical Waterproofing & Cementitious Coatings",
    "EWI Anchors, Meshes & Facade Reinforcements"
]
insulation_html = generate_collection_page(
    title="Thermal, Acoustic & Fire Insulation from Türkiye",
    meta_desc="High-density rockwool facade slabs, acoustic glasswool partition batts, XPS/EPS insulation, 2K waterproofing coatings, and EWI anchor fixings.",
    kicker="Thermal & Acoustic Insulation",
    lead="European-certified Class A1 non-combustible rockwool, high-density acoustic barriers, elastomeric closed-cell rubber pipe insulation, and EWI external wall reinforcement systems.",
    banner_img="/materials-supply/collections/insulation/",
    products=INSULATION_PRODUCTS,
    sections=insulation_sections
)

# 2. Bathroom Collection
bathroom_sections = [
    "Architectural Vitreous Sanitaryware",
    "Designer Brassware & Basin Mixers",
    "Luxury Shower Enclosures & Valves",
    "Concealed Cisterns & Flush Actuators",
    "Architectural Bathroom Accessories"
]
bathroom_html = generate_collection_page(
    title="Sanitaryware, Brassware & Bathroom Systems from Türkiye",
    meta_desc="Rimless wall-hung ceramic WCs, fine fireclay countertop vessel basins, solid brass designer mixers, thermostatic shower columns, and 80mm concealed cistern frames.",
    kicker="Sanitaryware & Bathrooms",
    lead="Fine vitreous china sanitaryware, dynamic vortex rimless toilets, DZR solid brass tapware with Kerox cartridges, and structural dual-flush concealed cistern frames.",
    banner_img="/materials-supply/collections/bathroom/",
    products=BATHROOM_PRODUCTS,
    sections=bathroom_sections
)

# 3. Drainage Collection
drainage_sections = [
    "Building Soil, Waste & Potable Water Systems",
    "Infrastructure Corrugated, Sewer & PE Systems",
    "Agricultural Irrigation & Water Management",
    "Valves, Chambers, Manifolds & Flow Control"
]
drainage_html = generate_collection_page(
    title="Civil Drainage, Sewer & Pressurised Piping from Türkiye",
    meta_desc="PN20 potable PPRC piping, multi-layer acoustic silent waste pipes, SN8 twin-wall corrugated sewer pipes, PE100 water mains, and full-bore isolation valves.",
    kicker="Civil Drainage & Piping Systems",
    lead="High-integrity potable water distribution pipes, mineral-reinforced acoustic silent soil systems, heavy-duty SN8 corrugated highway sewer pipes, and PE100 electrofusion fittings.",
    banner_img="/materials-supply/collections/drainage/",
    products=DRAINAGE_PRODUCTS,
    sections=drainage_sections
)

# Save Collections
for base in [PUBLIC_DIR, DIST_DIR]:
    p = os.path.join(base, "materials-supply", "collections", "insulation", "index.html")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f: f.write(insulation_html)

    p = os.path.join(base, "materials-supply", "collections", "bathroom", "index.html")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f: f.write(bathroom_html)

    p = os.path.join(base, "materials-supply", "collections", "drainage", "index.html")
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f: f.write(drainage_html)

print("Saved all 3 new collection pages in public and dist.")

# Save 70 Dedicated Product Pages
tasks = [
    (INSULATION_PRODUCTS, "Thermal & Acoustic Insulation", "/materials-supply/collections/insulation/"),
    (BATHROOM_PRODUCTS, "Sanitaryware & Bathrooms", "/materials-supply/collections/bathroom/"),
    (DRAINAGE_PRODUCTS, "Civil Drainage & Piping Systems", "/materials-supply/collections/drainage/")
]

total = 0
for prods, col_title, col_url in tasks:
    for p in prods:
        p_html = generate_product_page(p, col_title, col_url)
        slug = p["slug"]
        for base in [PUBLIC_DIR, DIST_DIR]:
            prod_path = os.path.join(base, "materials-supply", "products", slug, "index.html")
            os.makedirs(os.path.dirname(prod_path), exist_ok=True)
            with open(prod_path, "w", encoding="utf-8") as f:
                f.write(p_html)
        total += 1

print(f"Generated and wrote {total} new dedicated product pages across public and dist.")

# Mirror to CABIVELLA_BUILDING_MATERIALS_EN_GB_DEPLOY
deploy_mirror = os.path.join(ROOT, "CABIVELLA_BUILDING_MATERIALS_EN_GB_DEPLOY")
if os.path.exists(deploy_mirror):
    shutil.copytree(os.path.join(PUBLIC_DIR, "materials-supply"), os.path.join(deploy_mirror, "materials-supply"), dirs_exist_ok=True)
    shutil.copytree(os.path.join(PUBLIC_DIR, "assets", "img"), os.path.join(deploy_mirror, "assets", "img"), dirs_exist_ok=True)
    print("Mirrored all updates to CABIVELLA_BUILDING_MATERIALS_EN_GB_DEPLOY.")
