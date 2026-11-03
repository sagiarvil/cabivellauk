#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates crisp, high-end architectural engineering drawings (SVG) for
Electrical & Architectural Lighting (24) and Landscape & Outdoor Materials (22).
"""

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from batch4_collections_data import ELECTRICAL_PRODUCTS, LANDSCAPE_PRODUCTS

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
    <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dfdbd2"/>
      <stop offset="50%" stop-color="#c8c2b5"/>
      <stop offset="100%" stop-color="#b0a899"/>
    </linearGradient>
    <linearGradient id="amberLightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffe6aa" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#f5c25d" stop-opacity="0.2"/>
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
  <text x="75" y="690" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#5c5850">CLASSIFICATION: BS EN / BASEC / ISO ACCREDITED · UK BUILDING REGS CONFORMANT</text>
  <text x="925" y="690" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320" text-anchor="end">LONDON · MAYFAIR</text>
</svg>"""

def render_electrical_svg(prod):
    section = prod.get("section", "")
    badge_info = prod.get("voltage", prod.get("ip_rating", "BS EN"))

    if "Cable" in section:
        # Technical cable cross section with concentric copper cores and armour
        return f"""
        <!-- Concentric Cable Engineering Cross Section -->
        <g transform="translate(400, 200)">
          <!-- Outer Sheath -->
          <circle cx="0" cy="0" r="170" fill="#182320" stroke="#8e7a68" stroke-width="4"/>
          <!-- Armour Wire Layer -->
          <circle cx="0" cy="0" r="148" fill="none" stroke="#a68e77" stroke-width="8" stroke-dasharray="12 4"/>
          <!-- Inner Bedding -->
          <circle cx="0" cy="0" r="136" fill="#2a3832"/>
          <!-- 4 Phase Cores -->
          <circle cx="-55" cy="-55" r="50" fill="#a8432a" stroke="#ffffff" stroke-width="2"/>
          <circle cx="55" cy="-55" r="50" fill="#2d527c" stroke="#ffffff" stroke-width="2"/>
          <circle cx="-55" cy="55" r="50" fill="#4d4d4d" stroke="#ffffff" stroke-width="2"/>
          <circle cx="55" cy="55" r="50" fill="#4a7c59" stroke="#ffffff" stroke-width="2"/>
          <!-- Copper Conductors Inside Cores -->
          <circle cx="-55" cy="-55" r="30" fill="#c87d55"/>
          <circle cx="55" cy="-55" r="30" fill="#c87d55"/>
          <circle cx="-55" cy="55" r="30" fill="#c87d55"/>
          <circle cx="55" cy="55" r="30" fill="#c87d55"/>
        </g>
        <!-- Dimension Line -->
        <line x1="170" y1="390" x2="630" y2="390" stroke="#8e7a68" stroke-width="2"/>
        <polyline points="180,385 170,390 180,395" fill="none" stroke="#8e7a68" stroke-width="2"/>
        <polyline points="620,385 630,390 620,395" fill="none" stroke="#8e7a68" stroke-width="2"/>
        <text x="400" y="415" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">OVERALL CABLE CALIPER & ARMOUR MATRIX (BS 6724)</text>
        <!-- Specification Plate -->
        <rect x="490" y="30" width="240" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="505" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {badge_info[:16]}</text>
        """
    elif "Lighting" in section:
        # Luminaire engineering elevation with optical photometric light cone
        return f"""
        <!-- Luminaire Elevation & Light Cone Geometry -->
        <g transform="translate(150, 40)">
          <!-- Luminaire Chassis -->
          <rect x="150" y="20" width="200" height="50" rx="4" fill="#182320" stroke="#8e7a68" stroke-width="2"/>
          <rect x="170" y="10" width="160" height="10" fill="#a68e77"/>
          <rect x="160" y="70" width="180" height="15" rx="2" fill="#ffffff" stroke="#d5cebf"/>
          <!-- Photometric Light Distribution Cone -->
          <polygon points="250,85 50,340 450,340" fill="url(#amberLightGrad)" stroke="#f5c25d" stroke-width="1" stroke-dasharray="6 3"/>
          <line x1="250" y1="85" x2="250" y2="340" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="4 4"/>
          <!-- Optical Angle Indicators -->
          <path d="M 230 140 Q 250 150 270 140" fill="none" stroke="#8e7a68" stroke-width="2"/>
          <text x="250" y="170" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#8e7a68" text-anchor="middle">CUT-OFF OPTIC</text>
        </g>
        <rect x="480" y="280" width="250" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="495" y="310" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {badge_info[:16]}</text>
        """
    else:
        # Switchgear / Containment tray profile drawing
        return f"""
        <!-- Containment / Switchgear Structural Profile -->
        <g transform="translate(120, 50)">
          <!-- Steel Profile Section -->
          <rect x="60" y="60" width="440" height="260" rx="6" fill="#ffffff" stroke="#182320" stroke-width="3"/>
          <!-- Internal Mounting Plate -->
          <rect x="80" y="80" width="400" height="220" fill="#f5f2eb" stroke="#a68e77" stroke-width="1.5" stroke-dasharray="6 3"/>
          <!-- DIN Rail Units -->
          <rect x="110" y="120" width="340" height="30" fill="#182320" rx="3"/>
          <rect x="110" y="190" width="340" height="30" fill="#182320" rx="3"/>
          <!-- Cable Entry Glands -->
          <circle cx="160" cy="350" r="16" fill="#8e7a68"/>
          <circle cx="220" cy="350" r="16" fill="#8e7a68"/>
          <circle cx="280" cy="350" r="16" fill="#8e7a68"/>
          <circle cx="340" cy="350" r="16" fill="#8e7a68"/>
        </g>
        <rect x="480" y="30" width="250" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="495" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {badge_info[:16]}</text>
        """

def render_landscape_svg(prod):
    section = prod.get("section", "")
    grading = prod.get("grading", prod.get("dimensions", "BS EN"))

    if "Pebbles" in section or "Aggregates" in section:
        # Rounded decorative landscape stones / pebbles geometry
        return f"""
        <!-- Tumbled Decorative Stone Geology Matrix -->
        <g transform="translate(150, 40)">
          <!-- Central Large Pebble -->
          <path d="M 240 180 C 180 120, 320 80, 380 140 C 440 200, 360 300, 280 280 C 200 260, 280 220, 240 180 Z" fill="url(#stoneGrad)" stroke="#182320" stroke-width="3"/>
          <!-- Secondary Pebbles -->
          <ellipse cx="140" cy="220" rx="65" ry="45" fill="url(#stoneGrad)" stroke="#182320" stroke-width="2" transform="rotate(-20 140 220)"/>
          <ellipse cx="440" cy="220" rx="70" ry="50" fill="url(#stoneGrad)" stroke="#182320" stroke-width="2" transform="rotate(15 440 220)"/>
          <ellipse cx="200" cy="100" rx="45" ry="30" fill="url(#stoneGrad)" stroke="#182320" stroke-width="2" transform="rotate(10 200 100)"/>
          <!-- Calibrated Caliper Dimension -->
          <line x1="80" y1="320" x2="500" y2="320" stroke="#8e7a68" stroke-width="2"/>
          <polyline points="90,315 80,320 90,325" fill="none" stroke="#8e7a68" stroke-width="2"/>
          <polyline points="490,315 500,320 490,325" fill="none" stroke="#8e7a68" stroke-width="2"/>
          <text x="290" y="345" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">CALIBRATED SIEVE GRADING: {grading[:20]}</text>
        </g>
        <rect x="480" y="30" width="250" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="495" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {prod['section'][:16]}</text>
        """
    elif "Decking" in section:
        # Architectural decking board profile with side clip grooves
        return f"""
        <!-- Architectural Decking Cross-Section -->
        <g transform="translate(100, 80)">
          <!-- Decking Plank -->
          <path d="M 80 140 L 520 140 C 530 140, 540 145, 540 155 L 540 190 L 510 190 L 510 210 L 540 210 L 540 245 C 540 255, 530 260, 520 260 L 80 260 C 70 260, 60 255, 60 245 L 60 210 L 90 210 L 90 190 L 60 190 L 60 155 C 60 145, 70 140, 80 140 Z" fill="#c19a6b" stroke="#182320" stroke-width="3"/>
          <!-- Anti-Slip Micro-Grooves Top -->
          <line x1="120" y1="140" x2="120" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="160" y1="140" x2="160" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="200" y1="140" x2="200" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="240" y1="140" x2="240" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="280" y1="140" x2="280" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="320" y1="140" x2="320" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="360" y1="140" x2="360" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="400" y1="140" x2="400" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="440" y1="140" x2="440" y2="150" stroke="#7a5833" stroke-width="2"/>
          <line x1="480" y1="140" x2="480" y2="150" stroke="#7a5833" stroke-width="2"/>
          <!-- Concealed Fastening Clip -->
          <rect x="495" y="185" width="30" height="30" fill="#182320" rx="2"/>
          <!-- Joist Substructure -->
          <rect x="180" y="270" width="240" height="90" fill="#2a3832" stroke="#182320" stroke-width="2"/>
          <text x="300" y="325" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">SUB-FRAME STRUCTURAL JOIST</text>
        </g>
        <rect x="480" y="30" width="250" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="495" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {grading[:16]}</text>
        """
    else:
        # Paving slab / Stone step monolithic section
        return f"""
        <!-- Monolithic Stone Paving & Kerb Isometric Section -->
        <g transform="translate(100, 60)">
          <!-- Heavy Granite Slab Isometric -->
          <polygon points="120,120 440,80 540,160 220,200" fill="url(#stoneGrad)" stroke="#182320" stroke-width="2"/>
          <!-- Front Face -->
          <polygon points="120,120 220,200 220,270 120,190" fill="#a0988a" stroke="#182320" stroke-width="2"/>
          <!-- Side Face -->
          <polygon points="220,200 540,160 540,230 220,270" fill="#888072" stroke="#182320" stroke-width="2"/>
          <!-- Dimensions -->
          <line x1="100" y1="120" x2="100" y2="190" stroke="#8e7a68" stroke-width="2"/>
          <polyline points="95,130 100,120 105,130" fill="none" stroke="#8e7a68" stroke-width="2"/>
          <polyline points="95,180 100,190 105,180" fill="none" stroke="#8e7a68" stroke-width="2"/>
          <text x="85" y="160" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#8e7a68" transform="rotate(-90 85 160)" text-anchor="middle">DEPTH</text>
        </g>
        <rect x="480" y="30" width="250" height="50" fill="#ffffff" stroke="#182320" stroke-width="1.5" rx="3"/>
        <text x="495" y="60" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#182320">{prod['id']} · {grading[:16]}</text>
        """

def save_svg(file_rel_path, content):
    for base in [PUBLIC_DIR, DIST_DIR, DEPLOY_DIR]:
        full_path = os.path.join(base, file_rel_path.lstrip("/"))
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

def main():
    print("Generating batch 4 architectural SVG drawings...")
    
    # 1. Electrical
    for p in ELECTRICAL_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_electrical_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(ELECTRICAL_PRODUCTS)} Electrical SVGs.")

    # 2. Landscape
    for p in LANDSCAPE_PRODUCTS:
        svg = make_svg_card(p["name"], p["section"], render_landscape_svg(p), p["id"])
        save_svg(p["img_src"], svg)
    print(f"Generated {len(LANDSCAPE_PRODUCTS)} Landscape SVGs.")

if __name__ == "__main__":
    main()
