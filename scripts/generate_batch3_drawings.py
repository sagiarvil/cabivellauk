#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates crisp, high-end architectural engineering drawings (SVG) for
Timber (20), Glazing (20), and Chemicals (22) products.
"""

import os
import sys

# Ensure scripts dir is on sys.path
sys.path.insert(0, os.path.dirname(__file__))

from batch3_collections_data import TIMBER_PRODUCTS, GLAZING_PRODUCTS, CHEMICALS_PRODUCTS

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
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d0e5ea" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#a4c6ce" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d4b28c"/>
      <stop offset="50%" stop-color="#c19a6b"/>
      <stop offset="100%" stop-color="#a87f50"/>
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
  <text x="75" y="690" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#5c5850">CLASSIFICATION: BS EN / ISO APPROVED · FULL STRUCTURAL TRACEABILITY</text>
  <text x="925" y="690" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320" text-anchor="end">LONDON · MAYFAIR</text>
</svg>"""

def render_timber_svg(prod):
    thickness = prod.get("thickness", "Calibrated")
    grade = prod.get("grade", "BS EN")
    return f"""
    <!-- Timber Structural Cross-Section -->
    <rect x="100" y="40" width="600" height="340" fill="url(#woodGrad)" stroke="#182320" stroke-width="3" rx="6"/>
    <!-- Plywood/Grain Layers -->
    <line x1="100" y1="90" x2="700" y2="90" stroke="#7a5833" stroke-width="2" stroke-dasharray="8 4"/>
    <line x1="100" y1="140" x2="700" y2="140" stroke="#7a5833" stroke-width="2"/>
    <line x1="100" y1="190" x2="700" y2="190" stroke="#7a5833" stroke-width="2" stroke-dasharray="8 4"/>
    <line x1="100" y1="240" x2="700" y2="240" stroke="#7a5833" stroke-width="2"/>
    <line x1="100" y1="290" x2="700" y2="290" stroke="#7a5833" stroke-width="2" stroke-dasharray="8 4"/>
    <!-- End Grain Rings -->
    <path d="M 680 50 Q 640 180 680 320" fill="none" stroke="#5d4327" stroke-width="2"/>
    <path d="M 660 70 Q 625 180 660 300" fill="none" stroke="#5d4327" stroke-width="1.5"/>
    <path d="M 640 90 Q 610 180 640 280" fill="none" stroke="#5d4327" stroke-width="1"/>
    <!-- Dimension Arrows -->
    <line x1="80" y1="40" x2="80" y2="380" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="75,50 80,40 85,50" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="75,370 80,380 85,370" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <text x="65" y="215" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#8e7a68" transform="rotate(-90 65 215)" text-anchor="middle">{thickness}</text>
    
    <line x1="100" y1="400" x2="700" y2="400" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="110,395 100,400 110,405" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="690,395 700,400 690,405" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <text x="400" y="420" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">NOMINAL FORMAT / SPAN (BS EN 13986)</text>
    
    <!-- Callout Box -->
    <rect x="490" y="320" width="230" height="45" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
    <text x="505" y="348" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {grade[:16]}</text>
    """

def render_glazing_svg(prod):
    u_val = prod.get("u_value", "BS EN 1279")
    thickness = prod.get("thickness", "Calibrated")
    return f"""
    <!-- Insulated / Laminated Glass Architectural Section -->
    <rect x="160" y="30" width="480" height="360" fill="url(#glassGrad)" stroke="#182320" stroke-width="3" rx="4"/>
    <!-- Diagonal Glass Highlights -->
    <line x1="180" y1="50" x2="320" y2="370" stroke="#ffffff" stroke-width="4" stroke-opacity="0.6"/>
    <line x1="340" y1="50" x2="480" y2="370" stroke="#ffffff" stroke-width="2" stroke-opacity="0.5"/>
    <line x1="500" y1="50" x2="620" y2="310" stroke="#ffffff" stroke-width="3" stroke-opacity="0.6"/>
    
    <!-- Spacer Bar / Edge Seal Detail -->
    <rect x="145" y="15" width="20" height="390" fill="#333" stroke="#182320" stroke-width="2"/>
    <rect x="635" y="15" width="20" height="390" fill="#333" stroke="#182320" stroke-width="2"/>
    <rect x="135" y="180" width="40" height="60" fill="#c29b38" stroke="#182320" stroke-width="1.5" rx="2"/>
    <text x="155" y="215" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#182320" text-anchor="middle">SEAL</text>

    <!-- Structural Dimensions -->
    <line x1="160" y1="410" x2="640" y2="410" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="170,405 160,410 170,415" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <polyline points="630,405 640,410 630,415" fill="none" stroke="#8e7a68" stroke-width="2"/>
    <text x="400" y="430" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">{thickness} · EN 1279</text>
    
    <!-- Performance Badge -->
    <rect x="420" y="320" width="200" height="45" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
    <text x="435" y="348" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {u_val[:14]}</text>
    """

def render_chemicals_svg(prod):
    coverage = prod.get("coverage", "Standard")
    standard = prod.get("standard", "BS EN")
    return f"""
    <!-- Industrial Chemical Delivery System / Drum Section -->
    <g transform="translate(180, 20)">
      <!-- Vessel Body -->
      <rect x="100" y="60" width="240" height="310" rx="20" fill="#ffffff" stroke="#182320" stroke-width="3"/>
      <!-- Drum Reinforcing Ribs -->
      <line x1="100" y1="130" x2="340" y2="130" stroke="#d5cebf" stroke-width="2"/>
      <line x1="100" y1="210" x2="340" y2="210" stroke="#d5cebf" stroke-width="2"/>
      <line x1="100" y1="290" x2="340" y2="290" stroke="#d5cebf" stroke-width="2"/>
      
      <!-- Top Cap / Seal Nozzle -->
      <path d="M 170 60 L 170 30 Q 170 20 180 20 L 260 20 Q 270 20 270 30 L 270 60 Z" fill="#8e7a68" stroke="#182320" stroke-width="2.5"/>
      <line x1="190" y1="20" x2="190" y2="10" stroke="#182320" stroke-width="3"/>
      <line x1="250" y1="20" x2="250" y2="10" stroke="#182320" stroke-width="3"/>
      <rect x="180" y="5" width="80" height="10" fill="#182320" rx="2"/>

      <!-- Specification Plate -->
      <rect x="125" y="150" width="190" height="110" fill="#182320" rx="4"/>
      <text x="220" y="180" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#a68e77" text-anchor="middle">CABIVELLA</text>
      <text x="220" y="202" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">{prod['id']}</text>
      <text x="220" y="235" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#e0d9cc" text-anchor="middle">{standard[:16]}</text>

      <!-- Technical Cross Measurement -->
      <line x1="70" y1="60" x2="70" y2="370" stroke="#8e7a68" stroke-width="2"/>
      <polyline points="65,70 70,60 75,70" fill="none" stroke="#8e7a68" stroke-width="2"/>
      <polyline points="65,360 70,370 75,360" fill="none" stroke="#8e7a68" stroke-width="2"/>
      <text x="55" y="215" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#8e7a68" transform="rotate(-90 55 215)" text-anchor="middle">{coverage[:18]}</text>
    </g>
    """

def save_svg(file_rel_path, content):
    for base in [PUBLIC_DIR, DIST_DIR, DEPLOY_DIR]:
        full_path = os.path.join(base, file_rel_path.lstrip("/"))
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

def main():
    print("Generating batch 3 architectural SVG drawings...")
    
    # 1. Timber
    for p in TIMBER_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_timber_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(TIMBER_PRODUCTS)} Timber SVGs.")

    # 2. Glazing
    for p in GLAZING_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_glazing_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(GLAZING_PRODUCTS)} Glazing SVGs.")

    # 3. Chemicals
    for p in CHEMICALS_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_chemicals_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(CHEMICALS_PRODUCTS)} Chemicals SVGs.")

if __name__ == "__main__":
    main()
