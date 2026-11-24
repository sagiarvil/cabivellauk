#!/usr/bin/env python3
"""
Deterministic SEO, AEO & LLM Grounding Optimizer for Cabivella Materials Supply.
1. Repairs any materials-supply HTML missing <title>, <meta description>, or <link canonical>.
2. Deep-optimizes high-impression GSC commercial landing pages & parent collection hubs:
   - cable-tray-and-containment ("cable containment", "cable containment london")
   - technical-plant-service-riser-steel-doors ("value engineered riser doors")
   - decorative-aluminium-louvre ("louvre manufacturer marketing" / architectural louvre manufacturer)
   - collections/electrical, collections/doors, collections/aluminium, collections/facades
"""

from __future__ import annotations

import glob
import html as html_lib
import json
import os
import re
from typing import Any, Dict, List

ORIGIN = "https://cabivella.co.uk"
DEFAULT_OG_IMAGE = f"{ORIGIN}/assets/img/homepage-hero-approved.webp"


def build_graph_jsonld(
    url: str,
    title: str,
    description: str,
    breadcrumbs: List[Dict[str, str]],
    product_name: str | None = None,
    sku: str | None = None,
    hero_answer: str | None = None,
    faqs: List[Dict[str, str]] | None = None,
) -> str:
    graph: List[Dict[str, Any]] = [
        {
            "@type": "Organization",
            "@id": f"{ORIGIN}/#organization",
            "name": "Cabivella UK",
            "url": ORIGIN,
            "logo": f"{ORIGIN}/assets/img/cabivella-crest-transparent.webp",
            "email": "enquiries@cabivella.co.uk",
            "telephone": "+44 7898 262110",
            "areaServed": ["United Kingdom", "London"],
            "sameAs": [
                "https://www.wikidata.org/wiki/Q11589432",
                "https://wa.me/447898262110",
                f"{ORIGIN}/our-story/",
            ],
        },
        {
            "@type": "WebSite",
            "@id": f"{ORIGIN}/#website",
            "url": ORIGIN,
            "name": "Cabivella UK",
            "publisher": {"@id": f"{ORIGIN}/#organization"},
            "inLanguage": "en-GB",
        },
        {
            "@type": "WebPage",
            "@id": f"{url}#webpage",
            "url": url,
            "name": title,
            "description": description,
            "isPartOf": {"@id": f"{ORIGIN}/#website"},
            "breadcrumb": {"@id": f"{url}#breadcrumb"},
            "inLanguage": "en-GB",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["#hero-answer-engine", "main h1"],
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id": f"{url}#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": idx + 1,
                    "name": b["name"],
                    "item": b["url"],
                }
                for idx, b in enumerate(breadcrumbs)
            ],
        },
    ]

    if product_name:
        prod: Dict[str, Any] = {
            "@type": "Product",
            "@id": f"{url}#product",
            "name": product_name,
            "description": hero_answer or description,
            "url": url,
            "brand": {"@type": "Brand", "name": "Cabivella UK"},
            "manufacturer": {"@id": f"{ORIGIN}/#organization"},
        }
        if sku:
            prod["sku"] = sku
        graph.append(prod)

    if faqs:
        graph.append(
            {
                "@type": "FAQPage",
                "@id": f"{url}#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": q["q"],
                        "acceptedAnswer": {"@type": "Answer", "text": q["a"]},
                    }
                    for q in faqs
                ],
            }
        )

    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)


def replace_or_inject_head_meta(
    raw_html: str,
    url: str,
    title: str,
    description: str,
    jsonld_str: str,
    og_type: str = "product",
) -> str:
    esc_title = html_lib.escape(title, quote=True)
    esc_desc = html_lib.escape(description, quote=True)

    # Remove stale meta/title/canonical/og/twitter/ld+json inside <head>
    head_match = re.search(r"(<head[^>]*>)([\s\S]*?)(</head>)", raw_html, re.I)
    if not head_match:
        return raw_html

    head_open, head_inner, head_close = head_match.group(1), head_match.group(2), head_match.group(3)

    patterns_to_strip = [
        r"<title[^>]*>[\s\S]*?</title>",
        r"<meta[^>]+name=[\"'](?:description|viewport|robots|theme-color|twitter:[^\"']+)[\"'][^>]*/?>",
        r"<meta[^>]+content=[\"'][^\"']*[\"'][^>]+name=[\"'](?:description|viewport|robots|theme-color|twitter:[^\"']+)[\"'][^>]*/?>",
        r"<meta[^>]+property=[\"']og:[^\"']+[\"'][^>]*/?>",
        r"<meta[^>]+content=[\"'][^\"']*[\"'][^>]+property=[\"']og:[^\"']+[\"'][^>]*/?>",
        r"<link[^>]+rel=[\"']canonical[\"'][^>]*/?>",
        r"<link[^>]+href=[\"'][^\"']*[\"'][^>]+rel=[\"']canonical[\"'][^>]*/?>",
        r"<script[^>]+type=[\"']application/ld\+json[\"'][^>]*>[\s\S]*?</script>",
    ]
    for pat in patterns_to_strip:
        head_inner = re.sub(pat, "", head_inner, flags=re.I)

    seo_block = (
        f'\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>'
        f'\n<meta name="theme-color" content="#182320"/>'
        f'\n<meta name="robots" content="index,follow,max-image-preview:large"/>'
        f"\n<title>{esc_title}</title>"
        f'\n<meta name="description" content="{esc_desc}"/>'
        f'\n<link rel="canonical" href="{url}"/>'
        f'\n<meta property="og:type" content="{og_type}"/>'
        f'\n<meta property="og:locale" content="en_GB"/>'
        f'\n<meta property="og:site_name" content="Cabivella UK"/>'
        f'\n<meta property="og:title" content="{esc_title}"/>'
        f'\n<meta property="og:description" content="{esc_desc}"/>'
        f'\n<meta property="og:url" content="{url}"/>'
        f'\n<meta property="og:image" content="{DEFAULT_OG_IMAGE}"/>'
        f'\n<meta name="twitter:card" content="summary_large_image"/>'
        f'\n<meta name="twitter:title" content="{esc_title}"/>'
        f'\n<meta name="twitter:description" content="{esc_desc}"/>'
        f'\n<meta name="twitter:image" content="{DEFAULT_OG_IMAGE}"/>'
        f'\n<script type="application/ld+json">{jsonld_str}</script>\n'
    )

    if '<meta charset="utf-8"' in head_inner.lower():
        head_inner = re.sub(
            r"(<meta[^>]*charset=[\"']?utf-8[\"']?[^>]*/?>)",
            r"\1" + seo_block.replace("\\", "\\\\"),
            head_inner,
            count=1,
            flags=re.I,
        )
    else:
        head_inner = '<meta charset="utf-8"/>' + seo_block + head_inner

    new_head = head_open + head_inner + head_close
    return raw_html[: head_match.start()] + new_head + raw_html[head_match.end() :]


def repair_broken_product_pages() -> int:
    repaired = 0
    for path in sorted(glob.glob("public/materials-supply/products/*/index.html")):
        slug = os.path.basename(os.path.dirname(path))
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()

        head_slice = content[:6500]
        missing_meta = (
            "<title>" not in head_slice
            or 'rel="canonical"' not in head_slice
            or "large-format-ceramic-fa-ade-facing" in head_slice
            and slug != "large-format-ceramic-fa-ade-facing"
        )
        if not missing_meta:
            continue

        h1_match = re.search(r"<h1[^>]*>([\s\S]*?)</h1>", content, re.I)
        lead_match = re.search(r'<p[^>]*class=["\']lead["\'][^>]*>([\s\S]*?)</p>', content, re.I)
        h1_txt = re.sub(r"<[^>]+>", " ", h1_match.group(1)).strip() if h1_match else slug.replace("-", " ").title()
        h1_txt = re.sub(r"\s+", " ", html_lib.unescape(h1_txt))
        lead_txt = re.sub(r"<[^>]+>", " ", lead_match.group(1)).strip() if lead_match else ""
        lead_txt = re.sub(r"\s+", " ", html_lib.unescape(lead_txt))

        url = f"{ORIGIN}/materials-supply/products/{slug}/"
        title = f"{h1_txt} | UK Specification & Trade Supply | Cabivella UK"
        base_desc = lead_txt if len(lead_txt) >= 60 else f"Specification-led {h1_txt} manufactured for UK and European architectural and commercial construction projects."
        if len(base_desc) > 122:
            base_desc = base_desc[:119].rstrip(" ,.;:-") + "."
        if not base_desc.endswith("."):
            base_desc += "."
        desc = f"{base_desc} Direct UK trade quotation."
        if len(desc) > 158:
            desc = desc[:155].rstrip(" ,.;:-") + "."

        jsonld = build_graph_jsonld(
            url=url,
            title=title,
            description=desc,
            breadcrumbs=[
                {"name": "Home", "url": f"{ORIGIN}/"},
                {"name": "Materials Supply", "url": f"{ORIGIN}/materials-supply/"},
                {"name": h1_txt, "url": url},
            ],
            product_name=h1_txt,
        )
        updated = replace_or_inject_head_meta(content, url, title, desc, jsonld, og_type="product")
        with open(path, "w", encoding="utf-8") as f:
            f.write(updated)
        repaired += 1
    return repaired


def upgrade_cable_containment() -> None:
    path = "public/materials-supply/products/cable-tray-and-containment/index.html"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    url = f"{ORIGIN}/materials-supply/products/cable-tray-and-containment/"
    title = "Cable Containment & Tray Systems | London & UK Supply | Cabivella UK"
    desc = "BS EN 61537 steel cable containment, perforated trays, ladder racks and trunking supplied direct to London and UK M&E sites. Request a 48h trade quote."
    hero_answer = (
        "Cabivella supplies BS EN 61537 certified cable containment systems direct from ISO-accredited Turkish rolling mills "
        "to M&E contractors across London and the United Kingdom. Specifications cover medium and heavy-duty return-flange "
        "perforated cable trays, long-span industrial cable ladders, welded wire mesh baskets, and IP4X galvanised steel trunking "
        "in pre-galvanised (SENZIMIR), hot-dip galvanised (BS EN ISO 1461) and 316L stainless steel finishes."
    )
    faqs = [
        {
            "q": "Do you deliver bulk cable containment packages direct to London commercial construction sites?",
            "a": "Yes. Cabivella coordinates palletised DAP and DDP deliveries with customs clearance direct to M&E contractors and consolidation hubs across Central London, Canary Wharf, Park Royal and nationwide UK postcodes.",
        },
        {
            "q": "Which corrosion classes and standards do Cabivella cable containment systems meet?",
            "a": "All metallic trays, ladders and trunking are manufactured in accordance with BS EN 61537 mechanical load standards, offered in pre-galvanised steel for dry risers, hot-dip galvanised BS EN ISO 1461 for external plant decks, and 316L marine stainless steel.",
        },
        {
            "q": "Can London M&E contractors combine cable containment with riser doors and fire cables in one schedule?",
            "a": "Yes. Contractors consolidate BS EN 61537 cable trays, ladder racks and wire baskets alongside fire-resistant FP200-equivalent cabling and EI60/EI120 steel riser shaft doors on a single itemized 48-hour BOQ quotation.",
        },
    ]
    jsonld = build_graph_jsonld(
        url=url,
        title=title,
        description=desc,
        breadcrumbs=[
            {"name": "Home", "url": f"{ORIGIN}/"},
            {"name": "Materials Supply", "url": f"{ORIGIN}/materials-supply/"},
            {"name": "Electrical & Containment", "url": f"{ORIGIN}/materials-supply/collections/electrical/"},
            {"name": "Cable Containment Systems", "url": url},
        ],
        product_name="Cabivella BS EN 61537 Cable Containment Systems",
        sku="CB-15-008",
        hero_answer=hero_answer,
        faqs=faqs,
    )

    content = replace_or_inject_head_meta(content, url, title, desc, jsonld, og_type="product")

    new_detail_block = """<main id="main"><div class="wrap detail"><div class="crumb"><a href="../../index.html">Materials</a><span>›</span><a href="../../collections/electrical/index.html">Electrical &amp; Containment</a><span>›</span>Cable Containment &amp; Tray Systems</div><div class="detail-top"><div><div class="detail-photo"><img alt="Cabivella BS EN 61537 Perforated Steel Cable Containment, Ladder Rack and Wire Basket Systems for London &amp; UK M&amp;E Projects" decoding="async" height="760" loading="eager" src="/materials-supply/assets/plates/cb-15-008.svg" width="1000"/></div><p class="notice">Technical plate CB-15-008. Manufactured to BS EN 61537 load classes with direct palletised delivery to Greater London (M25) and UK commercial M&amp;E sites.</p></div><div><div class="kicker">M&amp;E Cable Containment / CB-15-008</div><h1 class="h1">Cable Containment, Perforated Trays &amp; Heavy-Duty Ladder Systems</h1><p id="hero-answer-engine" class="lead hero-answer-engine">Cabivella supplies BS EN 61537 certified cable containment systems direct from ISO-accredited rolling mills to M&amp;E contractors across London and the United Kingdom. Specifications cover medium and heavy-duty return-flange perforated cable trays, long-span industrial cable ladders, welded wire mesh baskets, and IP4X galvanised steel trunking in pre-galvanised (SENZIMIR), hot-dip galvanised (BS EN ISO 1461) and 316L stainless steel finishes.</p><table class="spec-table"><tbody><tr><th>Product reference</th><td>CB-15-008 (Commercial M&amp;E Containment Suite)</td></tr><tr><th>Containment families</th><td>Light, Medium &amp; Heavy-Duty Perforated Cable Tray, Cable Ladder, Wire Mesh Basket, IP4X Steel Trunking</td></tr><tr><th>Standard widths &amp; depths</th><td>50 mm to 900 mm widths · 25 mm, 50 mm, 75 mm, 100 mm &amp; 150 mm return flanges (3 m lengths)</td></tr><tr><th>Corrosion protection</th><td>Pre-Galvanised (BS EN 10346), Post-Galvanised HDG (BS EN ISO 1461), 304 / 316L Stainless Steel, Epoxy Powder Coated</td></tr><tr><th>Conformity &amp; wiring regs</th><td>BS EN 61537 mechanical load tested · BS 7671 (18th Edition IET) earth continuity couplers &amp; fire-rated supports</td></tr><tr><th>London &amp; UK logistics</th><td>Direct palletised dispatch to Central London, Canary Wharf, Park Royal consolidation hubs &amp; nationwide UK sites (48h BOQ quote)</td></tr></tbody></table><div class="detail-actions"><button aria-pressed="false" class="button dark" data-product-id="CB-15-008" type="button">Add to M&amp;E enquiry</button><a class="button" href="#enquiry">Request 48h London / UK Quote ↗</a></div><div aria-live="polite" class="status" id="brief-status" style="margin-top:14px"></div><div class="detail-block"><h2>London &amp; UK Commercial Cable Containment Packages</h2><p>Engineered for data centres, commercial office fit-outs, hospital risers, and high-density residential basements across Greater London and the UK. Complete accessory schedules include 90° flat bends, internal/external risers, equal tees, reducers, cantilever arms, trapeze hangers, and earth bonding straps.</p></div><div class="detail-block"><h2>Technical Frequently Asked Questions</h2><details style="margin-bottom:10px;padding:12px 14px;background:#faf8f5;border:1px solid #e2ded5;border-radius:6px;"><summary style="font-weight:600;cursor:pointer;">Do you deliver bulk cable containment packages direct to London commercial construction sites?</summary><p style="margin:8px 0 0;">Yes. Cabivella coordinates palletised DAP and DDP deliveries with full UK customs clearance direct to M&amp;E contractors and consolidation hubs across Central London, Canary Wharf, Nine Elms, Park Royal and nationwide UK postcodes.</p></details><details style="margin-bottom:10px;padding:12px 14px;background:#faf8f5;border:1px solid #e2ded5;border-radius:6px;"><summary style="font-weight:600;cursor:pointer;">Which corrosion classes and standards do Cabivella cable containment systems meet?</summary><p style="margin:8px 0 0;">All metallic trays, ladders and trunking are manufactured in accordance with BS EN 61537 mechanical load standards, offered in pre-galvanised steel for dry risers, hot-dip galvanised BS EN ISO 1461 for external plant decks, and 316L marine stainless steel.</p></details><details style="padding:12px 14px;background:#faf8f5;border:1px solid #e2ded5;border-radius:6px;"><summary style="font-weight:600;cursor:pointer;">Can M&amp;E contractors combine cable containment with riser doors on one trade schedule?</summary><p style="margin:8px 0 0;">Yes. Contractors regularly combine BS EN 61537 cable containment with <a href="../../products/technical-plant-service-riser-steel-doors/index.html">value engineered EI60/EI120 steel riser doors</a> and <a href="../../products/fire-resistant-cable-system/index.html">fire-resistant cabling</a> under a single 48-hour commercial tender return.</p></details></div></div></div></div>"""

    content = re.sub(
        r'<main id="main"><div class="wrap detail">[\s\S]*?(?=<section class="detail-bottom">)',
        new_detail_block.replace("\\", "\\\\"),
        content,
        count=1,
    )
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def upgrade_riser_doors() -> None:
    path = "public/materials-supply/products/technical-plant-service-riser-steel-doors/index.html"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    url = f"{ORIGIN}/materials-supply/products/technical-plant-service-riser-steel-doors/"
    title = "Value Engineered Riser Doors | EI60–EI120 Steel Shaft Sets | Cabivella UK"
    desc = "Value engineered riser doors and EI60/EI120 fire-rated steel shaft access sets to BS 476-22 and EN 1634-1. Factory-direct London and UK project supply."
    hero_answer = (
        "Cabivella value engineered riser doors (Ref. CB-DR-0203) cut multi-storey core package costs without compromising fire "
        "or acoustic compliance. Pre-hung in 2.0mm Zintec steel concealed frames with 1.5mm flush leaves, they achieve EI60 and "
        "EI120 integrity and insulation to EN 1634-1 and BS 476-22, up to 41dB acoustic attenuation, budget locks or 3-point DIN "
        "deadlocks, and rapid dry-wall fixing for UK residential towers and commercial risers."
    )
    faqs = [
        {
            "q": "How do Cabivella value engineered riser doors reduce commercial package costs?",
            "a": "By supplying factory pre-hung steel door sets directly from high-volume CNC press lines with fast-fit dry-lining subframes and factory RAL powder coating, contractors cut material markups and reduce on-site joinery labour per riser opening.",
        },
        {
            "q": "Are your value engineered riser doors tested for fire integrity and cold smoke control?",
            "a": "Yes. Assemblies are available in E60, EI60 and EI120 fire ratings tested to EN 1634-1 and BS 476 Part 22, fitted with intumescent perimeter strips and cold-smoke brush seals compliant with UK Building Regulations Approved Document B.",
        },
        {
            "q": "Can riser doors be supplied with concealed frames for minimalist residential corridors?",
            "a": "Yes. We manufacture both flush concealed-frame picture-frame riser doors ready for corridor wall colour matching and heavy-duty rebated plant-room steel door sets in single, double, and over-panel configurations.",
        },
    ]
    jsonld = build_graph_jsonld(
        url=url,
        title=title,
        description=desc,
        breadcrumbs=[
            {"name": "Home", "url": f"{ORIGIN}/"},
            {"name": "Materials Supply", "url": f"{ORIGIN}/materials-supply/"},
            {"name": "Doors & Riser Openings", "url": f"{ORIGIN}/materials-supply/collections/doors/"},
            {"name": "Value Engineered Riser Doors", "url": url},
        ],
        product_name="Cabivella Value Engineered Steel Riser Doors (CB-DR-0203)",
        sku="CB-DR-0203",
        hero_answer=hero_answer,
        faqs=faqs,
    )

    content = replace_or_inject_head_meta(content, url, title, desc, jsonld, og_type="product")

    # Upgrade H1, Hero Answer Engine & add FAQ section before PROJECT ENQUIRY SECTION
    content = re.sub(
        r'<h1 class="h1">[\s\S]*?</h1>\s*<p class="lead">[\s\S]*?</p>',
        (
            '<h1 class="h1">Value Engineered Riser Doors &amp; Fire-Rated Steel Shaft Access Sets</h1>\n'
            f'      <p id="hero-answer-engine" class="lead hero-answer-engine">{html_lib.escape(hero_answer)}</p>'
        ),
        content,
        count=1,
    )

    ve_faq_block = """
  <section class="section" id="riser-ve-faqs" style="background:#faf8f5; border:1px solid #e2ded5; border-radius:8px; padding:32px; margin:32px 0;">
    <span class="eyebrow" style="color:#8e7a68; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; font-size:0.82rem;">Value Engineering &amp; Compliance Q&amp;A</span>
    <h2 style="font-family:var(--serif, Georgia, serif); font-size:1.6rem; color:#182320; margin:8px 0 18px 0;">Why UK Main Contractors Specify Cabivella Value Engineered Riser Doors</h2>
    <div style="display:grid; gap:12px;">
      <details style="background:#ffffff; padding:14px 18px; border:1px solid #e2ded5; border-radius:6px;" open>
        <summary style="font-weight:600; color:#182320; cursor:pointer;">How do Cabivella value engineered riser doors reduce commercial core package costs?</summary>
        <p style="margin:10px 0 0; color:#4a5852; line-height:1.6;">Factory pre-hung 2.0 mm steel riser frames install directly into taped-and-jointed drywall or masonry shafts without wet plaster architraves or secondary site painting. Direct export from high-volume CNC press lines eliminates UK distributor markups across multi-storey apartment and office cores.</p>
      </details>
      <details style="background:#ffffff; padding:14px 18px; border:1px solid #e2ded5; border-radius:6px;">
        <summary style="font-weight:600; color:#182320; cursor:pointer;">Are value engineered riser doors certified to BS 476-22 and EN 1634-1?</summary>
        <p style="margin:10px 0 0; color:#4a5852; line-height:1.6;">Yes. Single and double-leaf riser shaft assemblies are tested to EN 1634-1 and BS 476 Part 22 for E60, EI60 and EI120 fire resistance, supplied with intumescent fire/smoke seals and optional up to 41 dB Rw acoustic mineral-wool cores.</p>
      </details>
      <details style="background:#ffffff; padding:14px 18px; border:1px solid #e2ded5; border-radius:6px;">
        <summary style="font-weight:600; color:#182320; cursor:pointer;">Can we bundle riser doors with M&amp;E cable containment and architectural louvres?</summary>
        <p style="margin:10px 0 0; color:#4a5852; line-height:1.6;">Yes. Combine steel riser door schedules with <a href="../../products/cable-tray-and-containment/index.html">BS EN 61537 cable containment</a> and <a href="../../products/decorative-aluminium-louvre/index.html">architectural aluminium plant louvres</a> for consolidated UK site delivery.</p>
      </details>
    </div>
  </section>
"""
    if 'id="riser-ve-faqs"' not in content:
        content = content.replace("<!-- PROJECT ENQUIRY SECTION -->", ve_faq_block + "\n  <!-- PROJECT ENQUIRY SECTION -->", 1)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def upgrade_aluminium_louvre() -> None:
    path = "public/materials-supply/products/decorative-aluminium-louvre/index.html"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    url = f"{ORIGIN}/materials-supply/products/decorative-aluminium-louvre/"
    title = "Architectural Aluminium Louvre Manufacturer | UK Trade & OEM | Cabivella"
    desc = "Direct architectural aluminium louvre manufacturer supplying plant screening, solar shading, OEM marketing sample packs and UK trade submittals in 48 hours."
    hero_answer = (
        "Cabivella is a direct-export architectural aluminium louvre manufacturer supplying extruded EN AW-6063 T6 weather louvres, "
        "acoustic plant screens and solar brise-soleil blades across the UK and Europe. Alongside cut-to-schedule façade fabrication "
        "finished in Qualicoat Seaside powder coat or anodising, we equip UK façade contractors, merchants and OEM partners with "
        "unbranded CAD sections, BS EN 13030 airflow data and physical showroom marketing sample cases."
    )
    faqs = [
        {
            "q": "Do you support UK façade distributors with OEM louvre manufacturer marketing samples and technical submittals?",
            "a": "Yes. Trade partners, façade consultants and merchant stockists receive physical anodised and RAL powder-coated blade sample cases, DWG section drawings, BS EN 13030 free-area schedules and white-label submittal sheets for client presentations.",
        },
        {
            "q": "What blade pitches and finishes are manufactured for UK plant screening projects?",
            "a": "We extrude 50mm, 75mm and 100mm Z-blade and chevron weather profiles alongside rectangular architectural baguettes, finished in Qualicoat Class 2 marine-grade polyester powder coating or 25-micron architectural anodising.",
        },
        {
            "q": "Can louvre banks integrate concealed louvred plant doors and acoustic attenuators?",
            "a": "Yes. Continuous single, double and triple-bank louvre screens can incorporate flush hinged louvre access doors, bird/insect mesh backing, and mineral-wool acoustic louvre cassettes for rooftop HVAC enclosures.",
        },
    ]
    jsonld = build_graph_jsonld(
        url=url,
        title=title,
        description=desc,
        breadcrumbs=[
            {"name": "Home", "url": f"{ORIGIN}/"},
            {"name": "Materials Supply", "url": f"{ORIGIN}/materials-supply/"},
            {"name": "Aluminium Systems", "url": f"{ORIGIN}/materials-supply/collections/aluminium/"},
            {"name": "Architectural Aluminium Louvres", "url": url},
        ],
        product_name="Cabivella Extruded Architectural Aluminium Louvres (CB-04-005)",
        sku="CB-04-005",
        hero_answer=hero_answer,
        faqs=faqs,
    )

    content = replace_or_inject_head_meta(content, url, title, desc, jsonld, og_type="product")

    new_detail_block = """<main id="main"><div class="wrap detail"><div class="crumb"><a href="../../index.html">Materials</a><span>›</span><a href="../../collections/aluminium/index.html">Aluminium Systems</a><span>›</span>Architectural Aluminium Louvre Manufacturer</div><div class="detail-top"><div><div class="detail-photo"><img alt="Cabivella Extruded Architectural Aluminium Weather Louvres, Brise-Soleil &amp; OEM Trade Sample Profiles" decoding="async" height="760" loading="eager" src="/materials-supply/assets/plates/cb-04-005.svg" width="1000"/></div><p class="notice">Technical plate CB-04-005. Extruded EN AW-6063 T6 aluminium louvre systems with OEM showroom sample kits &amp; 48h UK trade quotations.</p></div><div><div class="kicker">Direct Louvre Manufacturer / CB-04-005</div><h1 class="h1">Architectural Aluminium Louvre Manufacturer &amp; UK Trade Specification</h1><p id="hero-answer-engine" class="lead hero-answer-engine">Cabivella is a direct-export architectural aluminium louvre manufacturer supplying extruded EN AW-6063 T6 weather louvres, acoustic plant screens and solar brise-soleil blades across the UK and Europe. Alongside cut-to-schedule façade fabrication finished in Qualicoat Seaside powder coat or anodising, we equip UK façade contractors, merchants and OEM partners with unbranded CAD sections, BS EN 13030 airflow data and physical showroom marketing sample cases.</p><table class="spec-table"><tbody><tr><th>Product reference</th><td>CB-04-005 (Extruded Architectural &amp; Weather Louvre Suite)</td></tr><tr><th>Alloy &amp; extrusion standard</th><td>EN AW-6063 T66 / T6 structural architectural aluminium (BS EN 755-9 tolerances)</td></tr><tr><th>Blade configurations</th><td>50 mm, 75 mm &amp; 100 mm Z-blade weather louvres · Sightproof chevron plant screens · Elliptical &amp; rectangular brise-soleil baguettes</td></tr><tr><th>Airflow &amp; rain defence</th><td>Engineered in accordance with BS EN 13030 free-area, pressure-drop and wind-driven rain classification</td></tr><tr><th>Surface finishes</th><td>Qualicoat Class 1 &amp; Class 2 Seaside RAL PPC, Woodgrain Sublimation &amp; Qualanod 25-micron Anodising</td></tr><tr><th>Trade &amp; OEM partner support</th><td>White-label DWG/BIM submittal packs, physical RAL blade sample boxes &amp; direct UK merchant/distributor supply</td></tr></tbody></table><div class="detail-actions"><button aria-pressed="false" class="button dark" data-product-id="CB-04-005" type="button">Add to trade enquiry</button><a class="button" href="#enquiry">Request Sample Pack / 48h Quote ↗</a></div><div aria-live="polite" class="status" id="brief-status" style="margin-top:14px"></div><div class="detail-block"><h2>OEM Distributor, Specifier Submittal &amp; Marketing Sample Programme</h2><p>For UK façade contractors, architectural envelope consultants, and B2B louvre distributors, Cabivella provides direct mill extrusion pricing alongside turnkey trade marketing support: boxed physical aluminium blade and finish swatches, unbranded technical data sheets, Mullion wind-load span tables, and rapid 48-hour take-off scheduling.</p></div><div class="detail-block"><h2>Technical Frequently Asked Questions</h2><details style="margin-bottom:10px;padding:12px 14px;background:#faf8f5;border:1px solid #e2ded5;border-radius:6px;"><summary style="font-weight:600;cursor:pointer;">Do you support UK façade distributors with OEM louvre manufacturer marketing samples and submittals?</summary><p style="margin:8px 0 0;">Yes. Approved UK trade partners, façade consultants and stockists receive physical anodised and RAL powder-coated blade sample cases, DWG section drawings, BS EN 13030 free-area schedules and white-label submittal sheets for tender and client presentations.</p></details><details style="margin-bottom:10px;padding:12px 14px;background:#faf8f5;border:1px solid #e2ded5;border-radius:6px;"><summary style="font-weight:600;cursor:pointer;">Can continuous aluminium louvres integrate concealed plant access doors?</summary><p style="margin:8px 0 0;">Yes. Louvre elevations integrate flush hinged single or double louvred access doors, bird/vermin mesh backing, and high-security <a href="../../products/technical-plant-service-riser-steel-doors/index.html">plant &amp; riser steel door sets</a>.</p></details></div></div></div></div>"""

    content = re.sub(
        r'<main id="main"><div class="wrap detail">[\s\S]*?(?=<section class="detail-bottom">)',
        new_detail_block.replace("\\", "\\\\"),
        content,
        count=1,
    )
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def upgrade_collection_hubs() -> None:
    hubs = [
        {
            "path": "public/materials-supply/collections/electrical/index.html",
            "url": f"{ORIGIN}/materials-supply/collections/electrical/",
            "title": "Cable Containment London, Fire Cables & M&E Electrical Supply | Cabivella UK",
            "desc": "BS EN 61537 steel cable containment, perforated trays, ladder racks, fire-resistant cables and architectural LED lighting supplied direct to London and UK M&E sites.",
        },
        {
            "path": "public/materials-supply/collections/doors/index.html",
            "url": f"{ORIGIN}/materials-supply/collections/doors/",
            "title": "Value Engineered Riser Doors, Fire Doors & Steel Access Sets | Cabivella UK",
            "desc": "EI60 and EI120 value engineered riser doors, acoustic steel plant doors and certified fire door assemblies supplied direct to London and UK developments.",
        },
        {
            "path": "public/materials-supply/collections/aluminium/index.html",
            "url": f"{ORIGIN}/materials-supply/collections/aluminium/",
            "title": "Architectural Aluminium Louvres, Curtain Wall & Doors | Cabivella UK",
            "desc": "Direct architectural aluminium louvre manufacturer, thermally broken windows, curtain wall framing and OEM UK trade submittal packages.",
        },
        {
            "path": "public/materials-supply/collections/facades/index.html",
            "url": f"{ORIGIN}/materials-supply/collections/facades/",
            "title": "Rainscreen Cladding, Aluminium Louvres & Façade Subframes | Cabivella UK",
            "desc": "Ventilated rainscreen cladding, architectural aluminium louvre screening, extruded carrier subframes and porcelain façade assemblies for UK projects.",
        },
    ]
    for h in hubs:
        with open(h["path"], "r", encoding="utf-8") as f:
            content = f.read()
        jsonld = build_graph_jsonld(
            url=h["url"],
            title=h["title"],
            description=h["desc"],
            breadcrumbs=[
                {"name": "Home", "url": f"{ORIGIN}/"},
                {"name": "Materials Supply", "url": f"{ORIGIN}/materials-supply/"},
                {"name": h["title"].split("|")[0].strip(), "url": h["url"]},
            ],
        )
        updated = replace_or_inject_head_meta(content, h["url"], h["title"], h["desc"], jsonld, og_type="website")
        with open(h["path"], "w", encoding="utf-8") as f:
            f.write(updated)


if __name__ == "__main__":
    fixed_count = repair_broken_product_pages()
    upgrade_cable_containment()
    upgrade_riser_doors()
    upgrade_aluminium_louvre()
    upgrade_collection_hubs()
    print(f"✅ Repaired {fixed_count} materials-supply product heads and deep-optimized 7 GSC target commercial pages/hubs.")
