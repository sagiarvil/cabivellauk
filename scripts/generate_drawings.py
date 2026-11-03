#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates crisp, high-end architectural engineering drawings (SVG) for all Steel and Roofing products.
Also copies & renames genuine uPVC profile drawings into clean, unbranded paths.
"""

import os
import shutil
from collections_data import UPVC_PRODUCTS, STEEL_PRODUCTS, ROOFING_PRODUCTS

ROOT = "/Users/macair1/projects/cabivellaUK"
PUBLIC_DIR = os.path.join(ROOT, "public")
DIST_DIR = os.path.join(ROOT, "dist")

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
  <rect x="800" y="65" width="130" height="38" fill="#182320" rx="3"/>
  <text x="865" y="89" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">{spec_tag}</text>

  <!-- Central Technical Geometry Canvas -->
  <g transform="translate(100, 160)">
    {geometry_svg}
  </g>

  <!-- Engineering Data Footer Banner -->
  <rect x="50" y="640" width="900" height="70" fill="#ffffff" rx="4" stroke="#dcd6c9" stroke-width="1"/>
  <circle cx="80" cy="675" r="14" fill="#182320"/>
  <path d="M75 675 L79 679 L87 671" fill="none" stroke="#c4a265" stroke-width="2.5" stroke-linecap="round"/>
  <text x="110" y="670" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#182320">{subtitle}</text>
  <text x="110" y="690" font-family="-apple-system, sans-serif" font-size="11" fill="#788680">Factory-engineered in Türkiye to BS EN / ISO standards · Full mill test certificate 3.1 included</text>
  <text x="925" y="680" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="end">CABIVELLA UK</text>
</svg>"""

# Geometry definitions for steel
def get_steel_geometry(slug):
    if "shs" in slug or "square" in slug:
        return """
        <!-- Square Hollow Section (SHS) -->
        <rect x="250" y="40" width="300" height="300" rx="28" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <rect x="290" y="80" width="220" height="220" rx="16" fill="#f5f2eb" stroke="#8e7a68" stroke-width="2"/>
        <!-- Dimension Lines -->
        <line x1="250" y1="365" x2="550" y2="365" stroke="#8e7a68" stroke-width="1.5"/>
        <line x1="250" y1="355" x2="250" y2="375" stroke="#8e7a68" stroke-width="1.5"/>
        <line x1="550" y1="355" x2="550" y2="375" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="388" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Width: B = 20–400 mm</text>
        <!-- Wall thickness dimension -->
        <line x1="250" y1="190" x2="290" y2="190" stroke="#c4a265" stroke-width="2"/>
        <text x="270" y="180" font-family="sans-serif" font-size="12" font-weight="700" fill="#8e7a68" text-anchor="middle">t</text>
        """
    elif "rhs" in slug or "rect" in slug:
        return """
        <!-- Rectangular Hollow Section (RHS) -->
        <rect x="220" y="50" width="360" height="240" rx="26" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <rect x="260" y="90" width="280" height="160" rx="16" fill="#f5f2eb" stroke="#8e7a68" stroke-width="2"/>
        <line x1="220" y1="320" x2="580" y2="320" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="342" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Width: B = 40–500 mm</text>
        <line x1="605" y1="50" x2="605" y2="290" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="635" y="175" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">H = 20–300 mm</text>
        """
    elif "chs" in slug or "pipe" in slug or "tube" in slug:
        return """
        <!-- Circular Hollow Section (CHS) -->
        <circle cx="400" cy="180" r="160" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <circle cx="400" cy="180" r="125" fill="#f5f2eb" stroke="#8e7a68" stroke-width="2"/>
        <!-- Diameter lines -->
        <line x1="240" y1="180" x2="560" y2="180" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="6,4"/>
        <text x="400" y="170" font-family="sans-serif" font-size="15" font-weight="700" fill="#8e7a68" text-anchor="middle">Ø Outside Diameter: 21.3–610 mm</text>
        <line x1="240" y1="180" x2="275" y2="180" stroke="#c4a265" stroke-width="3"/>
        <text x="257" y="165" font-family="sans-serif" font-size="12" font-weight="700" fill="#c4a265" text-anchor="middle">Wall (t)</text>
        """
    elif "ipe" in slug or "beam" in slug or "joist" in slug:
        return """
        <!-- European I-Beam Profile (IPE) -->
        <path d="M 280 40 L 520 40 L 520 70 L 415 70 L 415 310 L 520 310 L 520 340 L 280 340 L 280 310 L 385 310 L 385 70 L 280 70 Z" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <!-- Dimensions -->
        <line x1="280" y1="20" x2="520" y2="20" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="14" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Flange Width: b = 46–220 mm</text>
        <line x1="545" y1="40" x2="545" y2="340" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="585" y="195" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Height: h = 80–600 mm</text>
        """
    elif "hea" in slug or "heb" in slug or "hem" in slug:
        return """
        <!-- Wide-Flange Column Profile (HEA/HEB/HEM) -->
        <path d="M 240 40 L 560 40 L 560 85 L 420 85 L 420 295 L 560 295 L 560 340 L 240 340 L 240 295 L 380 295 L 380 85 L 240 85 Z" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <line x1="240" y1="20" x2="560" y2="20" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="14" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Broad Flange: b = 100–300 mm</text>
        <line x1="585" y1="40" x2="585" y2="340" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="625" y="195" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Depth: h = 96–1000 mm</text>
        """
    elif "upn" in slug or "channel" in slug:
        return """
        <!-- U-Channel Profile (UPN / PFC) -->
        <path d="M 280 40 L 500 40 L 500 80 L 340 80 L 340 300 L 500 300 L 500 340 L 280 340 Z" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <line x1="280" y1="20" x2="500" y2="20" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="390" y="14" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Flange: b = 38–110 mm</text>
        <line x1="255" y1="40" x2="255" y2="340" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="230" y="195" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">h = 50–400 mm</text>
        """
    elif "angle" in slug or "rsa" in slug:
        return """
        <!-- Equal Angle Profile (RSA) -->
        <path d="M 280 40 L 340 40 L 340 280 L 540 280 L 540 340 L 280 340 Z" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <line x1="280" y1="365" x2="540" y2="365" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="410" y="388" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Leg a = 20–200 mm</text>
        <line x1="255" y1="40" x2="255" y2="340" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="230" y="195" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Leg b = 20–200 mm</text>
        """
    elif "plate" in slug or "sheet" in slug or "corten" in slug or "wear" in slug:
        return """
        <!-- Structural Steel Heavy Plate (Perspective) -->
        <polygon points="200,160 520,70 660,140 340,240" fill="#364942" stroke="#182320" stroke-width="1.5"/>
        <polygon points="200,160 340,240 340,290 200,210" fill="#182320" stroke="#182320" stroke-width="1.5"/>
        <polygon points="340,240 660,140 660,190 340,290" fill="#24332c" stroke="#182320" stroke-width="1.5"/>
        <!-- Callout -->
        <line x1="340" y1="240" x2="340" y2="290" stroke="#c4a265" stroke-width="3"/>
        <text x="360" y="270" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68">Thickness: 3–200 mm</text>
        <text x="430" y="160" font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff">EN 10025 Tested Surface</text>
        """
    elif "laser" in slug or "plasma" in slug or "proc" in slug or "bending" in slug:
        return """
        <!-- CNC Precision Processing Bed -->
        <rect x="200" y="60" width="400" height="240" fill="#ffffff" stroke="#182320" stroke-width="2"/>
        <circle cx="300" cy="140" r="40" fill="none" stroke="#8e7a68" stroke-width="2" stroke-dasharray="4,4"/>
        <path d="M 400 100 L 520 100 L 520 220 L 400 220 Z" fill="none" stroke="#8e7a68" stroke-width="2"/>
        <!-- Laser Head Symbol -->
        <polygon points="400,20 380,60 420,60" fill="#c4a265"/>
        <line x1="400" y1="60" x2="400" y2="100" stroke="#c4a265" stroke-width="2" stroke-dasharray="2,2"/>
        <text x="400" y="335" font-family="sans-serif" font-size="14" font-weight="700" fill="#182320" text-anchor="middle">CNC Laser / Plasma Bed: 3000 x 12000 mm (Tolerance ±0.2mm)</text>
        """
    else:
        return """
        <!-- Universal Steel Semi-Finished Profile -->
        <rect x="220" y="100" width="360" height="160" rx="8" fill="url(#metalGrad)" stroke="#182320" stroke-width="2"/>
        <line x1="220" y1="280" x2="580" y2="280" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="302" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Cross Section: Standard Mill Dimensions</text>
        """

# Geometry definitions for roofing
def get_roofing_geometry(slug):
    if "clay" in slug or "slate" in slug:
        return """
        <!-- Interlocking Clay / Slate Roof Tile Profile -->
        <path d="M 180 180 Q 260 100 340 180 Q 420 260 500 180 Q 580 100 660 180" fill="none" stroke="#b85d3b" stroke-width="16" stroke-linecap="round"/>
        <path d="M 210 230 Q 290 150 370 230 Q 450 310 530 230 Q 610 150 690 230" fill="none" stroke="#8e7a68" stroke-width="12" stroke-linecap="round" opacity="0.6"/>
        <text x="420" y="320" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Interlocking Contour · BS EN 1304 Frost Proof</text>
        """
    elif "stone-coated" in slug or "tile" in slug:
        return """
        <!-- Stone-Coated Aluzinc Shingle Profile -->
        <path d="M 160 180 L 260 130 L 360 180 L 460 130 L 560 180 L 660 130" fill="none" stroke="#182320" stroke-width="14" stroke-linejoin="round"/>
        <!-- Texture granules -->
        <circle cx="210" cy="155" r="3" fill="#8e7a68"/>
        <circle cx="230" cy="145" r="4" fill="#a68e77"/>
        <circle cx="310" cy="155" r="3" fill="#8e7a68"/>
        <circle cx="410" cy="155" r="4" fill="#a68e77"/>
        <text x="410" y="300" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Volcanic Stone Granule Matrix over Aluzinc Steel (6.5 kg/m²)</text>
        """
    elif "panel" in slug or "pir" in slug or "rockwool" in slug or "eps" in slug:
        return """
        <!-- 5-Rib Insulated Composite Roof Panel Cross Section -->
        <!-- External Profile Skin with Ribs -->
        <path d="M 140 120 L 200 120 L 220 70 L 260 70 L 280 120 L 400 120 L 420 70 L 460 70 L 480 120 L 600 120 L 620 70 L 660 70 L 680 120" fill="none" stroke="#182320" stroke-width="6"/>
        <!-- Core Insulation Layer -->
        <path d="M 140 123 L 200 123 L 220 73 L 260 73 L 280 123 L 400 123 L 420 73 L 460 73 L 480 123 L 600 123 L 620 73 L 660 73 L 680 123 L 680 240 L 140 240 Z" fill="#e8dfce" stroke="#d5cebf" stroke-width="1"/>
        <!-- Internal Liner -->
        <line x1="140" y1="240" x2="680" y2="240" stroke="#182320" stroke-width="5"/>
        <text x="410" y="200" font-family="sans-serif" font-size="15" font-weight="700" fill="#182320" text-anchor="middle">Rigid High-Density Thermal Core (λ = 0.022 W/mK)</text>
        <line x1="110" y1="120" x2="110" y2="240" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="90" y="185" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Core: 40–150mm</text>
        """
    elif "trapezoidal" in slug or "boxprofile" in slug:
        return """
        <!-- Box Profile 38/151 Trapezoidal Roof Sheet -->
        <path d="M 140 220 L 220 220 L 250 120 L 320 120 L 350 220 L 450 220 L 480 120 L 550 120 L 580 220 L 680 220" fill="none" stroke="#182320" stroke-width="8" stroke-linejoin="round"/>
        <line x1="250" y1="100" x2="320" y2="100" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="285" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#8e7a68" text-anchor="middle">Crown: 70mm</text>
        <line x1="140" y1="250" x2="350" y2="250" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="245" y="275" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Pitch: 151 mm</text>
        <line x1="705" y1="120" x2="705" y2="220" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="735" y="175" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">h = 38 mm</text>
        """
    elif "sinusoidal" in slug or "corruwave" in slug or "fibrecement" in slug:
        return """
        <!-- Continuous Sinusoidal Wave Geometry -->
        <path d="M 140 180 Q 185 100 230 180 T 320 180 T 410 180 T 500 180 T 590 180 T 680 180" fill="none" stroke="#182320" stroke-width="10" stroke-linecap="round"/>
        <line x1="230" y1="230" x2="320" y2="230" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="275" y="255" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Pitch: 76 mm</text>
        <line x1="705" y1="140" x2="705" y2="220" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="735" y="185" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Wave: 18 mm</text>
        """
    elif "polycarbonate" in slug or "multiwall" in slug:
        return """
        <!-- Multiwall 5-Chamber Polycarbonate Section -->
        <rect x="160" y="110" width="500" height="120" rx="4" fill="#ffffff" stroke="#182320" stroke-width="4"/>
        <line x1="160" y1="150" x2="660" y2="150" stroke="#8e7a68" stroke-width="2"/>
        <line x1="160" y1="190" x2="660" y2="190" stroke="#8e7a68" stroke-width="2"/>
        <!-- Ribs -->
        <line x1="220" y1="110" x2="220" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="280" y1="110" x2="280" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="340" y1="110" x2="340" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="400" y1="110" x2="400" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="460" y1="110" x2="460" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="520" y1="110" x2="520" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <line x1="580" y1="110" x2="580" y2="230" stroke="#8e7a68" stroke-width="2"/>
        <!-- UV Shield -->
        <rect x="160" y="105" width="500" height="5" fill="#3b82f6"/>
        <text x="410" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#3b82f6" text-anchor="middle">Co-Extruded Dual UV Protective Surface Layer</text>
        <text x="410" y="275" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Multi-Chamber Structural Honeycomb (Thickness: 10–40mm)</text>
        """
    elif "rainwater" in slug or "gutter" in slug:
        return """
        <!-- Half-Round & Box Rainwater Gutter Section -->
        <path d="M 220 120 L 220 180 A 120 120 0 0 0 460 180 L 460 120" fill="none" stroke="#182320" stroke-width="8" stroke-linecap="round"/>
        <circle cx="220" cy="120" r="10" fill="none" stroke="#8e7a68" stroke-width="4"/>
        <path d="M 520 120 L 520 240 L 660 240 L 660 120" fill="none" stroke="#182320" stroke-width="8" stroke-linecap="round"/>
        <text x="440" y="310" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Architectural Half-Round & Box Gutters · Titanium Zinc / Copper / Steel</text>
        """
    elif "skylight" in slug or "dome" in slug:
        return """
        <!-- Architectural Rooflight / Dome Cross Section -->
        <!-- Insulated Kerb -->
        <polygon points="200,240 240,160 270,160 270,240" fill="#d5cebf" stroke="#182320" stroke-width="2"/>
        <polygon points="570,240 570,160 600,160 640,240" fill="#d5cebf" stroke="#182320" stroke-width="2"/>
        <!-- Thermoformed Dome Glass -->
        <path d="M 240 160 Q 420 80 600 160" fill="none" stroke="#3b82f6" stroke-width="6"/>
        <path d="M 245 170 Q 420 95 595 170" fill="none" stroke="#3b82f6" stroke-width="4" opacity="0.6"/>
        <text x="420" y="220" font-family="sans-serif" font-size="14" font-weight="700" fill="#182320" text-anchor="middle">Insulated Upstand Kerb + Multi-Skin PMMA Acrylic Glazing</text>
        """
    else:
        return """
        <!-- Architectural Weatherproof Roofing Layer -->
        <rect x="180" y="130" width="460" height="40" fill="#182320" rx="4"/>
        <rect x="180" y="175" width="460" height="20" fill="#8e7a68" rx="2"/>
        <rect x="180" y="200" width="460" height="50" fill="#f0ece6" stroke="#d5cebf" stroke-width="1.5"/>
        <text x="410" y="290" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Engineered Multi-Layer Weatherproofing Assembly</text>
        """

# 1. Generate Steel SVGs
for p in STEEL_PRODUCTS:
    filename = os.path.basename(p["img_src"])
    title = p["name"]
    subtitle = f"{p['grade']} · {p['thickness']} · EN Compliant"
    spec_tag = p["id"]
    geom = get_steel_geometry(p["slug"])
    svg_content = make_svg_card(title, subtitle, geom, spec_tag)
    
    for base in [PUBLIC_DIR, DIST_DIR]:
        target_path = os.path.join(base, "assets", "img", "steel", filename)
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(svg_content)

print(f"Generated {len(STEEL_PRODUCTS)} Steel SVG drawings.")

# 2. Generate Roofing SVGs
for p in ROOFING_PRODUCTS:
    filename = os.path.basename(p["img_src"])
    title = p["name"]
    subtitle = f"{p.get('gauge', 'Specification')} · {p.get('fire_rating', 'Class A1')}"
    spec_tag = p["id"]
    geom = get_roofing_geometry(p["slug"])
    svg_content = make_svg_card(title, subtitle, geom, spec_tag)
    
    for base in [PUBLIC_DIR, DIST_DIR]:
        target_path = os.path.join(base, "assets", "img", "roofing", filename)
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(svg_content)

print(f"Generated {len(ROOFING_PRODUCTS)} Roofing SVG drawings.")

# 3. Copy & Rename uPVC Images cleanly
source_upvc_dir = os.path.join(PUBLIC_DIR, "assets", "img", "upvc-aga")
for p in UPVC_PRODUCTS:
    orig = p.get("orig_file")
    new_name = os.path.basename(p["img_src"])
    if orig:
        src_path = os.path.join(source_upvc_dir, orig)
        if os.path.exists(src_path):
            for base in [PUBLIC_DIR, DIST_DIR]:
                dst_path = os.path.join(base, "assets", "img", "upvc", new_name)
                os.makedirs(os.path.dirname(dst_path), exist_ok=True)
                shutil.copy2(src_path, dst_path)

print(f"Renamed & synced {len(UPVC_PRODUCTS)} uPVC drawings into /assets/img/upvc/.")
