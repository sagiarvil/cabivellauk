#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cabivella UK - Enterprise Catalogue & Product Page Generator (Batch 5)
Generates:
1. /materials-supply/collections/masonry/index.html (20 products)
2. /materials-supply/collections/modular/index.html (18 products)
3. 38 dedicated product pages with 50/50 symmetry and 3NF tables
Enforces Atölye Locus typography, CANONICAL CB-HEADER, RFQ smooth scroll, and zero broken images.
"""

import os
import sys
import shutil

sys.path.insert(0, os.path.dirname(__file__))
from batch5_collections_data import MASONRY_PRODUCTS, MODULAR_PRODUCTS

ROOT = "/Users/macair1/projects/cabivellaUK"
PUBLIC_DIR = os.path.join(ROOT, "public")
DIST_DIR = os.path.join(ROOT, "dist")
DEPLOY_DIR = os.path.join(ROOT, "CABIVELLA_BUILDING_MATERIALS_EN_GB_DEPLOY")

with open(os.path.join(ROOT, "scripts", "canonical_header.html"), "r", encoding="utf-8") as f:
    CANONICAL_CB_HEADER = f.read()

LOCUS_HEADER_STYLE = """
<link rel="stylesheet" href="/materials-supply/assets/header-nav.css">
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
}

/* 50/50 Product Detail Grid */
.product-detail-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: start;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

@media (max-width: 900px) {
  .product-detail-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.product-image-container {
  background: #fbf9f5;
  border: 1px solid #e7e2d9;
  border-radius: 4px;
  padding: 1.5rem;
  position: sticky;
  top: 6rem;
}

.product-image-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

/* 3NF Specification Tables */
.spec-table-block {
  margin-top: 2.5rem;
  background: #ffffff;
  border: 1px solid #e7e2d9;
  border-radius: 4px;
  overflow: hidden;
}

.spec-table-block h4 {
  background: #182320;
  color: #ffffff;
  margin: 0;
  padding: 0.85rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
}

.spec-table th, .spec-table td {
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid #f0ece3;
  text-align: left;
  font-size: 0.9rem;
}

.spec-table th {
  background: #fbf9f5;
  color: #4a453e;
  width: 38%;
  font-weight: 500;
}

.spec-table td {
  color: #182320;
  font-weight: 600;
}

.spec-table tr:last-child th,
.spec-table tr:last-child td {
  border-bottom: none;
}

.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #182320;
  color: #ffffff !important;
  padding: 1rem 2rem;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  margin-top: 1.5rem;
}

.cta-button-primary:hover {
  background: #2a3832;
  transform: translateY(-1px);
}
</style>
"""

FOOTER_HTML = """
<footer class="footer">
  <div class="container footer-content" style="padding-top: 4rem; padding-bottom: 4rem;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 3rem;">
      <div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 1rem; color: #182320;">Cabivella UK</h4>
        <p style="font-size: 0.88rem; color: #5c5850; line-height: 1.6;">Direct manufacturer-to-site procurement of architectural building materials engineered to BS EN / ISO / BOPAS standards for UK residential, commercial, and infrastructure contractors.</p>
        <p style="font-size: 0.82rem; color: #8e7a68; margin-top: 1rem; font-weight: 600;">London · Mayfair · Direct Freight Logistics</p>
      </div>
      <div>
        <h5 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; color: #182320;">Structural & Envelope</h5>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; line-height: 2;">
          <li><a href="/materials-supply/collections/steel/" style="color: #5c5850; text-decoration: none;">Structural Steel & Fabrications</a></li>
          <li><a href="/materials-supply/collections/masonry/" style="color: #5c5850; text-decoration: none;">Bricks, Blocks & Masonry</a></li>
          <li><a href="/materials-supply/collections/modular/" style="color: #5c5850; text-decoration: none;">Modular & Project Components</a></li>
          <li><a href="/materials-supply/collections/timber/" style="color: #5c5850; text-decoration: none;">Timber & Engineered Panels</a></li>
          <li><a href="/materials-supply/collections/upvc/" style="color: #5c5850; text-decoration: none;">uPVC Window & Door Systems</a></li>
        </ul>
      </div>
      <div>
        <h5 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; color: #182320;">MEP, Civils & Landscape</h5>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; line-height: 2;">
          <li><a href="/materials-supply/collections/electrical/" style="color: #5c5850; text-decoration: none;">Electrical & Architectural Lighting</a></li>
          <li><a href="/materials-supply/collections/landscape/" style="color: #5c5850; text-decoration: none;">Landscape & Natural Stone Paving</a></li>
          <li><a href="/materials-supply/collections/glazing/" style="color: #5c5850; text-decoration: none;">Architectural Glazing Systems</a></li>
          <li><a href="/materials-supply/collections/chemicals/" style="color: #5c5850; text-decoration: none;">Waterproofing & Construction Chemistry</a></li>
          <li><a href="/materials-supply/collections/bathroom/" style="color: #5c5850; text-decoration: none;">Sanitaryware & Bathrooms</a></li>
        </ul>
      </div>
      <div>
        <h5 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; color: #182320;">Direct Commercial Contact</h5>
        <p style="font-size: 0.85rem; color: #5c5850; margin-bottom: 0.5rem;">Commercial Desk: <strong style="color: #182320;">+44 7898 262110</strong></p>
        <p style="font-size: 0.85rem; color: #5c5850; margin-bottom: 1.5rem;">Specification: <strong style="color: #182320;">enquiries@cabivella.co.uk</strong></p>
        <div style="background: #fbf9f5; border: 1px solid #e7e2d9; padding: 1rem; border-radius: 4px; font-size: 0.8rem; color: #5c5850;">
          Direct container freight logistics from Türkiye ports to London Gateway, Southampton & Felixstowe.
        </div>
      </div>
    </div>
    <div style="border-top: 1px solid #e7e2d9; margin-top: 3rem; padding-top: 1.5rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: #8e7a68; flex-wrap: wrap; gap: 1rem;">
      <div>&copy; 2026 Cabivella UK Limited. All rights reserved. Full BS EN, BOPAS & CE / UKCA conformity.</div>
      <div>Atölye Locus Structural Architectural Typography Standard</div>
    </div>
  </div>
</footer>
"""

RFQ_FORM_BLOCK = """
<section class="rfq-section" id="enquiry" style="background: #fbf9f5; padding: 5rem 0; border-top: 1px solid #e7e2d9;">
  <div class="container" style="max-width: 800px; margin: 0 auto; padding: 0 1.5rem;">
    <div style="text-align: center; margin-bottom: 2.5rem;">
      <span class="kicker">Direct Factory Procurement</span>
      <h2 style="margin-top: 0.5rem; margin-bottom: 1rem;">Request Technical Specification & Pricing</h2>
      <p style="color: #5c5850; font-size: 1rem; line-height: 1.6;">Submit your architectural project bill of quantities (BOQ), tender drawings, or required schedule. Our technical team returns guaranteed DDP / FOB factory pricing and testing certifications within 24 hours.</p>
    </div>
    <form class="rfq-form" style="background: #ffffff; padding: 2.5rem; border: 1px solid #e7e2d9; border-radius: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label style="display: block; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; color: #182320;">Contact Name *</label>
          <input type="text" required placeholder="e.g. William Harris" style="width: 100%; padding: 0.85rem; border: 1px solid #d5cebf; border-radius: 3px; font-size: 0.95rem; box-sizing: border-box;">
        </div>
        <div>
          <label style="display: block; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; color: #182320;">Corporate Email *</label>
          <input type="email" required placeholder="w.harris@contractor.co.uk" style="width: 100%; padding: 0.85rem; border: 1px solid #d5cebf; border-radius: 3px; font-size: 0.95rem; box-sizing: border-box;">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label style="display: block; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; color: #182320;">Company / Contractor *</label>
          <input type="text" required placeholder="e.g. Mayfair Developments Ltd" style="width: 100%; padding: 0.85rem; border: 1px solid #d5cebf; border-radius: 3px; font-size: 0.95rem; box-sizing: border-box;">
        </div>
        <div>
          <label style="display: block; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; color: #182320;">Phone / Direct Mobile *</label>
          <input type="tel" required placeholder="+44 7..." style="width: 100%; padding: 0.85rem; border: 1px solid #d5cebf; border-radius: 3px; font-size: 0.95rem; box-sizing: border-box;">
        </div>
      </div>
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; font-size: 0.82rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; color: #182320;">Project Details / Required Quantities & Specifications *</label>
        <textarea id="project-message-box" rows="4" required placeholder="Specify volumes, required thickness/dimensions, BS EN standards, delivery site postcode, and delivery timeline..." style="width: 100%; padding: 0.85rem; border: 1px solid #d5cebf; border-radius: 3px; font-size: 0.95rem; box-sizing: border-box;"></textarea>
      </div>
      <button type="submit" class="cta-button-primary" style="margin-top: 0; padding: 1.15rem; cursor: pointer;">SUBMIT ENQUIRY FOR DIRECT FACTORY PRICING &rarr;</button>
      <p style="font-size: 0.78rem; color: #8e7a68; margin-top: 1rem; text-align: center;">Confidential commercial procurement. All factory quotes provided with Mill Test Certificates & UKCA documentation.</p>
    </form>
  </div>
</section>
"""

def generate_collection_page(title, meta_desc, kicker, lead, banner_img, products, sections):
    sections_html = ""
    for sec in sections:
        sec_prods = [p for p in products if p["section"] == sec]
        if not sec_prods:
            continue
        
        cards_html = ""
        for p in sec_prods:
            cards_html += f"""
            <div class="product-card" style="background: #ffffff; border: 1px solid #e7e2d9; border-radius: 4px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.2s ease, box-shadow 0.2s ease;">
              <a href="/materials-supply/products/{p['slug']}/" style="display: block; background: #fbf9f5; border-bottom: 1px solid #e7e2d9; padding: 1.25rem;">
                <img src="{p['img_src']}" alt="{p['name']}" style="width: 100%; height: auto; display: block; border-radius: 2px;">
              </a>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span class="product-code" style="color: #8e7a68; font-size: 0.75rem; font-weight: 700;">{p['id']}</span>
                  <span style="background: #f0ece3; color: #182320; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.5rem; border-radius: 2px;">BS EN CERTIFIED</span>
                </div>
                <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.15rem; line-height: 1.3;">
                  <a href="/materials-supply/products/{p['slug']}/" style="color: #182320; text-decoration: none;">{p['name']}</a>
                </h3>
                <p style="color: #5c5850; font-size: 0.85rem; line-height: 1.55; margin-bottom: 1.25rem; flex-grow: 1;">{p['desc']}</p>
                <div style="border-top: 1px solid #f0ece3; padding-top: 1rem; margin-top: auto; display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.8rem; font-weight: 600; color: #182320;">UK Specification</span>
                  <a href="/materials-supply/products/{p['slug']}/" style="color: #8e7a68; font-size: 0.85rem; font-weight: 600; text-decoration: none;">View Detail &rarr;</a>
                </div>
              </div>
            </div>
            """

        sections_html += f"""
        <div class="collection-section-group" style="margin-bottom: 4.5rem;">
          <div style="border-bottom: 2px solid #182320; padding-bottom: 0.75rem; margin-bottom: 2rem;">
            <h2 style="font-size: 1.6rem; margin: 0; color: #182320;">{sec}</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 2rem;">
            {cards_html}
          </div>
        </div>
        """

    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} | Cabivella Building Materials</title>
  <meta name="description" content="{meta_desc}">
  <link rel="canonical" href="https://cabivella.co.uk{banner_img}">
  <link rel="stylesheet" href="/assets/css/site.css">
  {LOCUS_HEADER_STYLE}
</head>
<body>
  {CANONICAL_CB_HEADER}
  <main>
    <div style="background: #fbf9f5; border-bottom: 1px solid #e7e2d9; padding: 4.5rem 0 3.5rem 0;">
      <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
        <span class="kicker" style="color: #8e7a68; margin-bottom: 0.5rem; display: block;">{kicker}</span>
        <h1 style="margin-top: 0; margin-bottom: 1.25rem;">{title}</h1>
        <p style="color: #5c5850; font-size: 1.12rem; line-height: 1.65; max-width: 820px; margin: 0;">{lead}</p>
        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="#enquiry" class="cta-button-primary" style="width: auto; padding: 0.85rem 1.75rem; margin: 0;">Request Tender Pricing &rarr;</a>
          <a href="/materials-supply/contact/" style="display: inline-flex; align-items: center; padding: 0.85rem 1.5rem; border: 1px solid #182320; color: #182320; text-decoration: none; border-radius: 3px; font-size: 0.88rem; font-weight: 600;">Contact Specification Team</a>
        </div>
      </div>
    </div>
    
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 4rem 1.5rem;">
      {sections_html}
    </div>

    {RFQ_FORM_BLOCK}
  </main>
  {FOOTER_HTML}
</body>
</html>
"""

def generate_product_page(p, collection_title, collection_url):
    specs = p["specs"]
    split_len = max(1, len(specs) // 3)
    t1 = specs[:split_len]
    t2 = specs[split_len:split_len*2]
    t3 = specs[split_len*2:]

    def render_rows(rows):
        out = ""
        for k, v in rows:
            out += f"<tr><th>{k}</th><td>{v}</td></tr>"
        return out

    table_a = f"""
    <div class="spec-table-block">
      <h4>TABLE A: DIMENSIONAL & GEOMETRIC SPECIFICATION</h4>
      <table class="spec-table">
        <tbody>{render_rows(t1)}</tbody>
      </table>
    </div>
    """

    table_b = f"""
    <div class="spec-table-block">
      <h4>TABLE B: PHYSICAL & PERFORMANCE CHARACTERISTICS</h4>
      <table class="spec-table">
        <tbody>{render_rows(t2)}</tbody>
      </table>
    </div>
    """

    table_c = f"""
    <div class="spec-table-block">
      <h4>TABLE C: STANDARDS, COMPLIANCE & ACCREDITATIONS</h4>
      <table class="spec-table">
        <tbody>{render_rows(t3)}</tbody>
      </table>
    </div>
    """

    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{p['name']} | Cabivella UK Technical Specification</title>
  <meta name="description" content="Technical specification for {p['name']}. Full BS EN, ISO conformity, structural parameters, and direct procurement from Cabivella UK.">
  <link rel="canonical" href="https://cabivella.co.uk/materials-supply/products/{p['slug']}/">
  <link rel="stylesheet" href="/assets/css/site.css">
  {LOCUS_HEADER_STYLE}
</head>
<body>
  {CANONICAL_CB_HEADER}
  <main>
    <!-- Breadcrumb -->
    <div style="background: #fbf9f5; border-bottom: 1px solid #e7e2d9; padding: 1rem 0;">
      <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; font-size: 0.85rem; color: #8e7a68;">
        <a href="/materials-supply/" style="color: #8e7a68; text-decoration: none;">Materials Supply</a> &rsaquo; 
        <a href="{collection_url}" style="color: #8e7a68; text-decoration: none;">{collection_title}</a> &rsaquo; 
        <span style="color: #182320; font-weight: 600;">{p['id']}</span>
      </div>
    </div>

    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
      <div class="product-detail-hero">
        <!-- 50% Left Column: Architectural Drawing / Image -->
        <div>
          <div class="product-image-container">
            <img src="{p['img_src']}" alt="{p['name']} Architectural Specification Drawing" width="1000" height="760">
            <div style="display: flex; justify-content: space-between; margin-top: 1rem; font-size: 0.78rem; color: #8e7a68; border-top: 1px solid #e7e2d9; padding-top: 0.75rem;">
              <span>DRAWING REF: {p['id']}-REV-D</span>
              <span>SCALE: AS INDICATED · BS EN CONFORMANT</span>
            </div>
          </div>
        </div>

        <!-- 50% Right Column: Product Detail & Specification Tables -->
        <div>
          <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem;">
            <span class="product-code" style="color: #8e7a68; font-weight: 700;">{p['id']}</span>
            <span style="background: #182320; color: #ffffff; font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.5rem; border-radius: 2px;">{p['section']}</span>
          </div>
          <h1 style="font-size: 2.1rem; line-height: 1.25; margin-top: 0; margin-bottom: 1rem;">{p['name']}</h1>
          <p style="color: #5c5850; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">{p['desc']}</p>

          <a href="#enquiry" class="cta-button-primary" onclick="document.getElementById('project-message-box').value = 'Please provide direct factory pricing and technical tender submission documents for: {p['name']} ({p['id']}). Project location: London/UK.'; document.getElementById('project-message-box').focus();">
            SEND PROJECT DETAILS &rarr;
          </a>

          {table_a}
          {table_b}
          {table_c}

          <div style="margin-top: 2rem; background: #fbf9f5; border: 1px solid #e7e2d9; border-radius: 4px; padding: 1.25rem;">
            <h5 style="margin: 0 0 0.5rem 0; font-size: 0.85rem; font-weight: 700; color: #182320; text-transform: uppercase;">Direct Freight & Procurement Security</h5>
            <p style="font-size: 0.82rem; color: #5c5850; line-height: 1.5; margin: 0;">Manufactured in Türkiye under European BS EN, BBA, and BOPAS certified quality regimes. Full traceability with third-party lab testing and mill certificates supplied with every bill of lading.</p>
          </div>
        </div>
      </div>
    </div>

    {RFQ_FORM_BLOCK}
  </main>
  {FOOTER_HTML}
</body>
</html>
"""

def main():
    print("Building Batch 5 Collection and Dedicated Product Pages...")

    # 1. Masonry Collection
    masonry_sections = [
        "Architectural Facing Bricks & Engineering Clay",
        "Concrete Blocks, Aerated & Lightweight Masonry",
        "Terrazzo Tiles, Cementitious & Mineral Paving",
        "Boundary Copings, Pier Caps & Harpuşta"
    ]
    masonry_html = generate_collection_page(
        title="Bricks, Blocks & Architectural Masonry from Türkiye",
        meta_desc="Handmade facing bricks, Class A engineering blue bricks, lightweight pumice blocks, terrazzo floor tiles, encaustic cement tiles, and once/twice-weathered wall copings.",
        kicker="Bricks, Blocks & Masonry",
        lead="Direct supply of kiln-fired facing bricks, volcanic pumice insulating blocks, precision AAC autoclaved blocks, hydraulic-pressed terrazzo tiles, and cast stone wall copings.",
        banner_img="/materials-supply/collections/masonry/",
        products=MASONRY_PRODUCTS,
        sections=masonry_sections
    )

    # 2. Modular Collection
    modular_sections = [
        "Pre-Engineered Bathroom Pods & Monolithic Washrooms",
        "Modular Flat-Pack Site Cabins & Welfare Units",
        "Light Gauge Steel Framing & Pre-Assembled Cassettes",
        "Pre-Insulated Utility Units & MEP Service Risers",
        "Volumetric Residential Modules & Steel Space Frames"
    ]
    modular_html = generate_collection_page(
        title="Modular Buildings & Offsite Project Components from Türkiye",
        meta_desc="Turnkey pre-fabricated steel bathroom pods, flat-pack demountable site accommodation cabins, light gauge steel (LGS) framing, and volumetric offsite residential modules.",
        kicker="Modular & Project Components",
        lead="Precision offsite modular construction components, crane-liftable hotel bathroom pods, ISO 20ft flat-pack site accommodation, CNC cold-formed LGS studs, and volumetric living modules.",
        banner_img="/materials-supply/collections/modular/",
        products=MODULAR_PRODUCTS,
        sections=modular_sections
    )

    # Save Collections across public, dist, and deploy
    for base in [PUBLIC_DIR, DIST_DIR, DEPLOY_DIR]:
        # Masonry
        p = os.path.join(base, "materials-supply", "collections", "masonry", "index.html")
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f: f.write(masonry_html)

        # Modular
        p = os.path.join(base, "materials-supply", "collections", "modular", "index.html")
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f: f.write(modular_html)

    print("Saved masonry and modular collection pages.")

    # Save 38 Dedicated Product Pages
    tasks = [
        (MASONRY_PRODUCTS, "Bricks, Blocks & Masonry", "/materials-supply/collections/masonry/"),
        (MODULAR_PRODUCTS, "Modular & Project Components", "/materials-supply/collections/modular/")
    ]

    total = 0
    for prods, col_title, col_url in tasks:
        for p in prods:
            p_html = generate_product_page(p, col_title, col_url)
            slug = p["slug"]
            for base in [PUBLIC_DIR, DIST_DIR, DEPLOY_DIR]:
                prod_path = os.path.join(base, "materials-supply", "products", slug, "index.html")
                os.makedirs(os.path.dirname(prod_path), exist_ok=True)
                with open(prod_path, "w", encoding="utf-8") as f:
                    f.write(p_html)
            total += 1

    print(f"Generated and wrote {total} new dedicated product pages across public, dist, and deploy.")

if __name__ == "__main__":
    main()
