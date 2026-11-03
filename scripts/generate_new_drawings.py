#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates crisp, high-end architectural engineering drawings (SVG) for
Insulation (24), Bathroom (24), and Drainage (22) products.
"""

import os
from new_collections_data import INSULATION_PRODUCTS, BATHROOM_PRODUCTS, DRAINAGE_PRODUCTS

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
  <text x="110" y="690" font-family="-apple-system, sans-serif" font-size="11" fill="#788680">Factory-engineered in Türkiye to BS EN / ISO standards · Full certificate of conformance included</text>
  <text x="925" y="680" font-family="Georgia, serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="end">CABIVELLA UK</text>
</svg>"""

def get_insulation_geometry(slug):
    if "rockwool" in slug or "wool" in slug or "quilt" in slug:
        return """
        <!-- Mineral Wool Slab Profile -->
        <polygon points="180,180 500,80 660,160 340,260" fill="#dfd6c3" stroke="#8e7a68" stroke-width="2"/>
        <polygon points="180,180 340,260 340,320 180,240" fill="#baa98e" stroke="#8e7a68" stroke-width="2"/>
        <polygon points="340,260 660,160 660,220 340,320" fill="#ccbd9f" stroke="#8e7a68" stroke-width="2"/>
        <!-- Texture Fibres -->
        <line x1="220" y1="180" x2="300" y2="230" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="8,4"/>
        <line x1="380" y1="160" x2="520" y2="120" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="8,4"/>
        <line x1="360" y1="280" x2="480" y2="220" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="8,4"/>
        <text x="410" y="360" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Basalt Stone Wool Core · Class A1 Non-Combustible</text>
        """
    elif "xps" in slug or "eps" in slug or "board" in slug:
        return """
        <!-- Rigid Foam Board with Shiplap Edge -->
        <path d="M 180 120 L 580 120 L 580 150 L 620 150 L 620 220 L 220 220 L 220 190 L 180 190 Z" fill="#cfdee7" stroke="#182320" stroke-width="2.5"/>
        <line x1="180" y1="120" x2="180" y2="190" stroke="#8e7a68" stroke-width="2"/>
        <line x1="180" y1="260" x2="620" y2="260" stroke="#8e7a68" stroke-width="1.5"/>
        <text x="400" y="285" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Closed-Cell Polystyrene Matrix (CS ≥ 300 kPa)</text>
        """
    elif "pyramid" in slug or "foam" in slug:
        return """
        <!-- Acoustic Pyramid Pattern -->
        <polygon points="200,220 250,120 300,220" fill="#364942" stroke="#182320" stroke-width="1.5"/>
        <polygon points="300,220 350,120 400,220" fill="#24332c" stroke="#182320" stroke-width="1.5"/>
        <polygon points="400,220 450,120 500,220" fill="#364942" stroke="#182320" stroke-width="1.5"/>
        <polygon points="500,220 550,120 600,220" fill="#24332c" stroke="#182320" stroke-width="1.5"/>
        <text x="400" y="290" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Acoustic Anechoic Foam Profiles (NRC 0.95)</text>
        """
    elif "anchor" in slug or "mesh" in slug or "profile" in slug:
        return """
        <!-- EWI Fixing Anchor and Reinforced Mesh -->
        <circle cx="280" cy="180" r="70" fill="none" stroke="#182320" stroke-width="4"/>
        <circle cx="280" cy="180" r="25" fill="#8e7a68"/>
        <!-- Shaft -->
        <rect x="270" y="180" width="20" height="150" fill="#182320" rx="3"/>
        <!-- Mesh Grid -->
        <g transform="translate(420, 110)">
          <rect width="200" height="180" fill="none" stroke="#3b82f6" stroke-width="2"/>
          <line x1="40" y1="0" x2="40" y2="180" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="80" y1="0" x2="80" y2="180" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="120" y1="0" x2="120" y2="180" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="160" y1="0" x2="160" y2="180" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="0" y1="36" x2="200" y2="36" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="0" y1="72" x2="200" y2="72" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="0" y1="108" x2="200" y2="108" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="0" y1="144" x2="200" y2="144" stroke="#3b82f6" stroke-width="1.5"/>
        </g>
        <text x="400" y="360" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">ETA Certified Mechanical EWI Anchors &amp; Alkali-Resistant Mesh</text>
        """
    else:
        return """
        <!-- Technical Membrane / Coating Layer -->
        <rect x="200" y="130" width="420" height="40" fill="#182320" rx="4"/>
        <rect x="200" y="175" width="420" height="25" fill="#8e7a68" rx="2"/>
        <rect x="200" y="205" width="420" height="60" fill="#ffffff" stroke="#d5cebf" stroke-width="2"/>
        <text x="410" y="320" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Multi-Layer Fluid Waterproofing &amp; Vapour Barrier</text>
        """

def get_bathroom_geometry(slug):
    if "wc" in slug or "toilet" in slug or "bidet" in slug or "urinal" in slug:
        return """
        <!-- Rimless Architectural Ceramic WC Elevation -->
        <path d="M 280 80 L 520 80 Q 560 80 560 140 L 540 240 Q 520 300 400 300 Q 280 300 260 240 L 240 140 Q 240 80 280 80 Z" fill="#ffffff" stroke="#182320" stroke-width="3"/>
        <ellipse cx="400" cy="180" rx="100" ry="80" fill="none" stroke="#8e7a68" stroke-width="2"/>
        <text x="400" y="340" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Vitreous China Grade A · 360° Dynamic Rimless Vortex</text>
        """
    elif "basin" in slug:
        return """
        <!-- Luxury Countertop Vessel Basin -->
        <path d="M 220 140 L 580 140 Q 560 260 400 260 Q 240 260 220 140 Z" fill="#ffffff" stroke="#182320" stroke-width="3"/>
        <ellipse cx="400" cy="140" rx="180" ry="25" fill="#f5f2eb" stroke="#182320" stroke-width="2"/>
        <circle cx="400" cy="200" r="18" fill="none" stroke="#8e7a68" stroke-width="2.5"/>
        <text x="400" y="310" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Fine Fireclay Thin Edge 5 mm · Anti-Bacterial Nano-Glaze</text>
        """
    elif "tap" in slug or "mixer" in slug:
        return """
        <!-- Monobloc Architectural Basin Tap Geometry -->
        <rect x="375" y="120" width="50" height="160" fill="url(#metalGrad)" stroke="#182320" stroke-width="2" rx="4"/>
        <path d="M 375 140 Q 375 70 480 70 L 520 70 L 520 110" fill="none" stroke="#182320" stroke-width="28" stroke-linecap="round"/>
        <line x1="330" y1="150" x2="375" y2="150" stroke="#8e7a68" stroke-width="8" stroke-linecap="round"/>
        <text x="400" y="330" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Solid DZR Brass CW617N · Kerox 35mm Ceramic Cartridge</text>
        """
    elif "shower" in slug or "column" in slug:
        return """
        <!-- Shower Riser and Overhead Rain Head -->
        <line x1="340" y1="300" x2="340" y2="80" stroke="#182320" stroke-width="12" stroke-linecap="round"/>
        <path d="M 340 80 Q 340 40 420 40 L 460 40" fill="none" stroke="#182320" stroke-width="10"/>
        <rect x="420" y="40" width="160" height="14" fill="url(#metalGrad)" stroke="#182320" stroke-width="2" rx="2"/>
        <!-- Rain Droplets -->
        <line x1="440" y1="65" x2="440" y2="120" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,6"/>
        <line x1="480" y1="65" x2="480" y2="120" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,6"/>
        <line x1="520" y1="65" x2="520" y2="120" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,6"/>
        <line x1="560" y1="65" x2="560" y2="120" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,6"/>
        <text x="400" y="350" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Thermostatic 38°C Safety Valve &amp; Air-Injection Drench Head</text>
        """
    elif "cistern" in slug or "actuator" in slug or "drain" in slug:
        return """
        <!-- Concealed Cistern Structural Frame -->
        <rect x="280" y="40" width="240" height="280" fill="none" stroke="#182320" stroke-width="4"/>
        <rect x="300" y="60" width="200" height="160" fill="#ffffff" stroke="#8e7a68" stroke-width="2" rx="6"/>
        <circle cx="400" cy="120" r="28" fill="#e8e4db"/>
        <rect x="360" y="270" width="80" height="50" fill="#182320" rx="4"/>
        <text x="400" y="360" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Tested to 400 kg Static Load · Dual Flush 3/6 Litres</text>
        """
    else:
        return """
        <!-- Bathroom Architectural Accessory -->
        <rect x="250" y="100" width="300" height="180" fill="#ffffff" stroke="#182320" stroke-width="2" rx="8"/>
        <circle cx="400" cy="180" r="40" fill="none" stroke="#8e7a68" stroke-width="3"/>
        <text x="400" y="320" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Solid Brass Concealed Architectural Hardware</text>
        """

def get_drainage_geometry(slug):
    if "corrugated" in slug or "corrupipe" in slug:
        return """
        <!-- Double-Wall Corrugated Pipe Cross Section -->
        <path d="M 160 140 L 640 140 L 640 220 L 160 220 Z" fill="#24332c" stroke="#182320" stroke-width="2"/>
        <!-- Exterior Corrugation Ribs -->
        <path d="M 160 140 Q 180 90 200 140 Q 220 90 240 140 Q 260 90 280 140 Q 300 90 320 140 Q 340 90 360 140 Q 380 90 400 140 Q 420 90 440 140 Q 460 90 480 140 Q 500 90 520 140 Q 540 90 560 140 Q 580 90 600 140 Q 620 90 640 140" fill="none" stroke="#182320" stroke-width="6"/>
        <line x1="160" y1="220" x2="640" y2="220" stroke="#8e7a68" stroke-width="6"/>
        <text x="400" y="280" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">SN8 High-Density Polyethylene Structured Wall (BS EN 13476)</text>
        """
    elif "pipe" in slug or "pprc" in slug or "pe100" in slug:
        return """
        <!-- Concentric Multi-Layer Pressure Pipe -->
        <circle cx="400" cy="160" r="140" fill="url(#metalGrad)" stroke="#182320" stroke-width="3"/>
        <circle cx="400" cy="160" r="120" fill="#8e7a68" stroke="#ffffff" stroke-width="2"/>
        <circle cx="400" cy="160" r="95" fill="#f5f2eb" stroke="#182320" stroke-width="2"/>
        <line x1="260" y1="160" x2="540" y2="160" stroke="#8e7a68" stroke-width="1.5" stroke-dasharray="6,4"/>
        <text x="400" y="150" font-family="sans-serif" font-size="13" font-weight="700" fill="#8e7a68" text-anchor="middle">Pressure Rating PN20 / PN25</text>
        <text x="400" y="340" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Homogenous Socket-Fusion / Electrofusion Welded System</text>
        """
    elif "valve" in slug or "chamber" in slug or "gully" in slug or "manifold" in slug:
        return """
        <!-- Flow Control Valve / Manifold / Chamber -->
        <path d="M 220 100 L 340 160 L 220 220 Z" fill="#182320" stroke="#182320" stroke-width="2"/>
        <path d="M 580 100 L 460 160 L 580 220 Z" fill="#182320" stroke="#182320" stroke-width="2"/>
        <circle cx="400" cy="160" r="35" fill="none" stroke="#8e7a68" stroke-width="4"/>
        <line x1="400" y1="125" x2="400" y2="50" stroke="#182320" stroke-width="10" stroke-linecap="round"/>
        <line x1="350" y1="50" x2="450" y2="50" stroke="#8e7a68" stroke-width="10" stroke-linecap="round"/>
        <text x="400" y="320" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Full-Bore Heavy DZR Brass / Cast Iron Isolation Valve (PN40)</text>
        """
    else:
        return """
        <!-- Architectural Drainage Fitting -->
        <path d="M 240 100 L 400 100 L 400 260 L 240 260 Z" fill="none" stroke="#182320" stroke-width="3"/>
        <circle cx="400" cy="180" r="50" fill="none" stroke="#8e7a68" stroke-width="3"/>
        <text x="400" y="320" font-family="sans-serif" font-size="14" font-weight="700" fill="#8e7a68" text-anchor="middle">Precision Molded Drainage &amp; Sanitary Fitting</text>
        """

# 1. Insulation SVGs
for p in INSULATION_PRODUCTS:
    fn = os.path.basename(p["img_src"])
    title = p["name"]
    subtitle = f"{p.get('thickness', 'Standard')} · {p.get('fire_class', 'Class A1')}"
    spec_tag = p["id"]
    geom = get_insulation_geometry(p["slug"])
    svg = make_svg_card(title, subtitle, geom, spec_tag)
    for b in [PUBLIC_DIR, DIST_DIR]:
        t = os.path.join(b, "assets", "img", "insulation", fn)
        os.makedirs(os.path.dirname(t), exist_ok=True)
        with open(t, "w", encoding="utf-8") as f: f.write(svg)

print(f"Generated {len(INSULATION_PRODUCTS)} Insulation SVGs.")

# 2. Bathroom SVGs
for p in BATHROOM_PRODUCTS:
    fn = os.path.basename(p["img_src"])
    title = p["name"]
    subtitle = f"{p.get('dimensions', 'Architectural')} · {p.get('material', 'Vitreous China')}"
    spec_tag = p["id"]
    geom = get_bathroom_geometry(p["slug"])
    svg = make_svg_card(title, subtitle, geom, spec_tag)
    for b in [PUBLIC_DIR, DIST_DIR]:
        t = os.path.join(b, "assets", "img", "bathroom", fn)
        os.makedirs(os.path.dirname(t), exist_ok=True)
        with open(t, "w", encoding="utf-8") as f: f.write(svg)

print(f"Generated {len(BATHROOM_PRODUCTS)} Bathroom SVGs.")

# 3. Drainage SVGs
for p in DRAINAGE_PRODUCTS:
    fn = os.path.basename(p["img_src"])
    title = p["name"]
    subtitle = f"{p.get('dimensions', 'Standard')} · {p.get('pressure_class', 'Pressure Rated')}"
    spec_tag = p["id"]
    geom = get_drainage_geometry(p["slug"])
    svg = make_svg_card(title, subtitle, geom, spec_tag)
    for b in [PUBLIC_DIR, DIST_DIR]:
        t = os.path.join(b, "assets", "img", "drainage", fn)
        os.makedirs(os.path.dirname(t), exist_ok=True)
        with open(t, "w", encoding="utf-8") as f: f.write(svg)

print(f"Generated {len(DRAINAGE_PRODUCTS)} Drainage SVGs.")
