#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates crisp, high-end architectural engineering drawings (SVG) for
Masonry & Bricks (20) and Modular & Project Components (18).
"""

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from batch5_collections_data import MASONRY_PRODUCTS, MODULAR_PRODUCTS

ROOT = "/Users/macair1/projects/cabivellaUK"
PUBLIC_DIR = os.path.join(ROOT, "public")
DIST_DIR = os.path.join(ROOT, "dist")
DEPLOY_DIR = os.path.join(ROOT, "CABIVELLA_BUILDING_MATERIALS_EN_GB_DEPLOY")

def make_svg_card(title, subtitle, geometry_svg, spec_tag):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 760" width="1000" height="760">
  <defs>
    <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e6e1d8" stroke-width="0.75"/>
      <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#d8d1c5" stroke-width="1.25"/>
    </pattern>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a3832"/>
      <stop offset="50%" stop-color="#182320"/>
      <stop offset="100%" stop-color="#0f1715"/>
    </linearGradient>
    <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a68e77"/>
      <stop offset="100%" stop-color="#8e7a68"/>
    </linearGradient>
    <linearGradient id="brickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c45c43"/>
      <stop offset="50%" stop-color="#a8432a"/>
      <stop offset="100%" stop-color="#82311d"/>
    </linearGradient>
    <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dedad2"/>
      <stop offset="50%" stop-color="#c5c0b6"/>
      <stop offset="100%" stop-color="#a9a397"/>
    </linearGradient>
  </defs>

  <!-- Clean Architectural Canvas -->
  <rect width="1000" height="760" fill="#f5f2eb"/>
  <rect width="1000" height="760" fill="url(#archGrid)"/>

  <!-- Outer Frame -->
  <rect x="24" y="24" width="952" height="712" fill="none" stroke="#d5cebf" stroke-width="1.5"/>
  <rect x="32" y="32" width="936" height="696" fill="none" stroke="#e0d9cc" stroke-width="0.75"/>

  <!-- Title Block Header -->
  <rect x="50" y="50" width="900" height="70" fill="#ffffff" rx="4" stroke="#dcd6c9" stroke-width="1"/>
  <text x="75" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#8e7a68" text-transform="uppercase">CABIVELLA ARCHITECTURAL SPECIFICATION</text>
  <text x="75" y="106" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#182320">{title}</text>
  <rect x="780" y="65" width="150" height="38" fill="#182320" rx="3"/>
  <text x="855" y="89" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">{spec_tag}</text>

  <!-- Central Technical Geometry Canvas -->
  <g transform="translate(100, 160)">
    {geometry_svg}
  </g>

  <!-- Footer Specification Block -->
  <rect x="50" y="660" width="900" height="50" fill="#ffffff" rx="4" stroke="#dcd6c9" stroke-width="1"/>
  <text x="75" y="690" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#5c5850">CLASSIFICATION: BS EN 771 / BOPAS / BBA CERTIFIED · FULL TRACEABILITY</text>
  <text x="925" y="690" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320" text-anchor="end">LONDON · MAYFAIR</text>
</svg>"""

def render_masonry_svg(prod):
    dims = prod.get("dimensions", "BS EN 771-1")
    return f"""
    <!-- Masonry Brick & Block Isometric Engineering Drawing -->
    <g transform="translate(140, 50)">
      <!-- Isometric Top Face -->
      <polygon points="120,100 420,50 560,130 260,180" fill="url(#brickGrad)" stroke="#182320" stroke-width="2.5"/>
      <!-- Isometric Front Face -->
      <polygon points="120,100 260,180 260,280 120,200" fill="#8e331c" stroke="#182320" stroke-width="2.5"/>
      <!-- Isometric Side Face -->
      <polygon points="260,180 560,130 560,230 260,280" fill="#6d2411" stroke="#182320" stroke-width="2.5"/>
      <!-- Perforation Holes / Frogs -->
      <ellipse cx="300" cy="115" rx="35" ry="12" fill="#541b0c" stroke="#182320" stroke-width="1.5"/>
      <ellipse cx="380" cy="100" rx="35" ry="12" fill="#541b0c" stroke="#182320" stroke-width="1.5"/>
      <!-- Dimension Callout Line -->
      <line x1="100" y1="100" x2="100" y2="200" stroke="#8e7a68" stroke-width="2"/>
      <polyline points="95,110 100,100 105,110" fill="none" stroke="#8e7a68" stroke-width="2"/>
      <polyline points="95,190 100,200 105,190" fill="none" stroke="#8e7a68" stroke-width="2"/>
      <text x="85" y="155" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#8e7a68" transform="rotate(-90 85 155)" text-anchor="middle">HEIGHT</text>
      
      <line x1="260" y1="310" x2="560" y2="260" stroke="#8e7a68" stroke-width="2"/>
      <text x="410" y="305" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#8e7a68" text-anchor="middle">{dims[:24]}</text>
    </g>
    <rect x="490" y="30" width="240" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
    <text x="505" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {prod['section'][:16]}</text>
    """

def render_modular_svg(prod):
    section = prod.get("section", "")
    dims = prod.get("dimensions", prod.get("footprint", "Modular"))
    return f"""
    <!-- Modular Volumetric Steel Frame & Pod Engineering Drawing -->
    <g transform="translate(100, 30)">
      <!-- 3D Volumetric Pod Wireframe -->
      <polygon points="100,80 480,40 620,120 240,160" fill="none" stroke="#182320" stroke-width="3"/>
      <!-- Front Face -->
      <polygon points="100,80 240,160 240,340 100,260" fill="#ffffff" stroke="#182320" stroke-width="2.5"/>
      <!-- Side Face -->
      <polygon points="240,160 620,120 620,300 240,340" fill="#f5f2eb" stroke="#182320" stroke-width="2.5"/>
      <!-- Corner Lifting Eyes -->
      <circle cx="100" cy="80" r="10" fill="#c29b38" stroke="#182320" stroke-width="2"/>
      <circle cx="480" cy="40" r="10" fill="#c29b38" stroke="#182320" stroke-width="2"/>
      <circle cx="620" cy="120" r="10" fill="#c29b38" stroke="#182320" stroke-width="2"/>
      <circle cx="240" cy="160" r="10" fill="#c29b38" stroke="#182320" stroke-width="2"/>
      <!-- Pod Doorway & Window -->
      <rect x="130" y="140" width="70" height="150" fill="#2a3832" stroke="#182320" stroke-width="1.5"/>
      <rect x="300" y="170" width="180" height="100" fill="#d0e5ea" stroke="#182320" stroke-width="1.5"/>
      <!-- Structural Base Chassis -->
      <rect x="90" y="260" width="160" height="15" fill="#182320"/>
      <!-- Span Annotation -->
      <line x1="240" y1="365" x2="620" y2="325" stroke="#8e7a68" stroke-width="2"/>
      <text x="430" y="370" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#8e7a68" text-anchor="middle">{dims[:26]}</text>
    </g>
    <rect x="490" y="30" width="240" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
    <text x="505" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {section[:16]}</text>
    """

def save_svg(file_rel_path, content):
    for base in [PUBLIC_DIR, DIST_DIR, DEPLOY_DIR]:
        full_path = os.path.join(base, file_rel_path.lstrip("/"))
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

def main():
    print("Generating batch 5 architectural SVG drawings...")
    
    # 1. Masonry
    for p in MASONRY_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_masonry_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(MASONRY_PRODUCTS)} Masonry SVGs.")

    # 2. Modular
    for p in MODULAR_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_modular_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(MODULAR_PRODUCTS)} Modular SVGs.")

if __name__ == "__main__":
    main()
