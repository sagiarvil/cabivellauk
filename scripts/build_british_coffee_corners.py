#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builds the 100% British English (en-GB) Coffee Corners Flagship Component & Page
from /Users/macair1/projects/kahvekosem/evler-icin-kahve-koseleri/index.html
with all 32 MDF models and all 328 high-resolution WebP photographs.
"""

from pathlib import Path
import re
import html as html_lib

SRC_HTML = Path("/Users/macair1/projects/kahvekosem/evler-icin-kahve-koseleri/index.html").read_text(encoding="utf-8")
lines = SRC_HTML.splitlines()
cards_line = lines[468]
raw_articles = re.findall(r'<article class="ev-card.*?</article>', cards_line)
assert len(raw_articles) == 32, f"Expected 32 articles, got {len(raw_articles)}"

# Complete 1:1 British English specification dictionary for all 32 models
MODELS_EN = {
    1: {
        "name": "RIVA 90",
        "subtitle": "Arched Alcove · Compact Module",
        "size": "90–93 cm",
        "color": "Sand Beige MDF",
        "layout": "Arched Alcove",
        "dims": "90 × 45 × 205 cm",
        "finish": "Sand beige membrane MDF · Matt black cup handles",
        "desc": "A compact domestic coffee station featuring a vertically grooved arched alcove designed for British kitchen corners and dining niches. Equipped with contactless hand-wave daylight LED illumination, a soft-close accessory drawer, and an 18 mm full-MDF carcass to organise espresso machines and pouring equipment in one dedicated hub.",
        "badges": ["18 mm Full MDF", "Hand-Wave Sensor LED", "Soft-Close Drawer", "Arched Alcove"],
        "note": "43 cm net worktop depth · Contactless hand-wave daylight LED",
        "slug": "riva-90-sand-beige",
    },
    2: {
        "name": "RIVA 130 LEFT",
        "subtitle": "Left Glazed Vitrine · Arched Alcove",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Left Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige membrane MDF · Left vitrine with 6 mm glass shelves",
        "desc": "Combines a full-height 40 cm left-hand glazed display tower with a vertically grooved arched preparation alcove, showcasing porcelain and glassware across illuminated 6 mm tempered glass shelves. Its modular tower construction can also be positioned as a standalone display cabinet.",
        "badges": ["Left Glazed Vitrine", "Detachable Tower", "Hand-Wave Sensor LED", "18 mm Full MDF"],
        "note": "90 cm central station + 40 cm detachable left glazed vitrine",
        "slug": "riva-130-left-sand-beige",
    },
    3: {
        "name": "RIVA 130 RIGHT",
        "subtitle": "Right Glazed Vitrine · Arched Alcove",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Right Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige membrane MDF · Right vitrine with 6 mm glass shelves",
        "desc": "Tailored for room layouts requiring right-hand door swing clearance, uniting an illuminated full-height glazed display tower on the right wing with an arched preparation worktop. Conceals coffee pods, filters, and dry provisions within a soft-close telescopic drawer and twin base cupboard.",
        "badges": ["Right Glazed Vitrine", "Detachable Tower", "Hand-Wave Sensor LED", "18 mm Full MDF"],
        "note": "90 cm central station + 40 cm detachable right glazed vitrine",
        "slug": "riva-130-right-sand-beige",
    },
    4: {
        "name": "RIVA 170",
        "subtitle": "Twin Glazed Vitrine · Arched Alcove",
        "size": "170 cm",
        "color": "Sand Beige MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Sand beige membrane MDF · Twin full-height glazed vitrines",
        "desc": "Establishes an architectural focal point in open-plan British kitchens and dining rooms with an arched hospitality alcove flanked by symmetrical left and right glazed display towers. Built with 6 mm tempered glass shelves, contactless hand-wave daylight LED lighting, and an 18 mm full-MDF carcass.",
        "badges": ["Twin Glazed Vitrine", "Symmetrical 170 cm", "Hand-Wave Sensor LED", "18 mm Full MDF"],
        "note": "40 + 90 + 40 cm symmetrical three-module architectural suite",
        "slug": "riva-170-sand-beige",
    },
    5: {
        "name": "ARCO NERO 170",
        "subtitle": "Twin Glazed Vitrine · Matt Black Hardware",
        "size": "170 cm",
        "color": "Matt White MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Matt white full MDF · Contrast matt black metal handles",
        "desc": "A high-capacity 170 cm coffee credenza pairing a crisp matt white full-MDF carcass with contrasting black metal ironmongery and a central arched preparation bay. Twin glazed side towers and motion-activated LED lighting provide both illuminated glass display and concealed larder storage.",
        "badges": ["Twin Glazed Vitrine", "Hand-Wave Sensor LED", "Black Metal Hardware", "18 mm Full MDF"],
        "note": "43 cm net worktop depth · 56 cm preparation alcove height",
        "slug": "arco-nero-170-white",
    },
    6: {
        "name": "ARCO DORE 170",
        "subtitle": "Twin Glazed Vitrine · Brushed Gold Hardware",
        "size": "170 cm",
        "color": "Matt White MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Matt white full MDF · Brushed gold metal handles",
        "desc": "Brings refined warmth to bright kitchen-diners and reception rooms by pairing a central arched serving alcove and twin glazed display towers with brushed gold metal hardware. Generous soft-close drawers and lower cupboards keep espresso glassware and coffee beans impeccably organised.",
        "badges": ["Twin Glazed Vitrine", "Brushed Gold Hardware", "Arched Alcove", "18 mm Full MDF"],
        "note": "40 + 90 + 40 cm twin-tower configuration · Brushed gold ironmongery",
        "slug": "arco-dore-170-white",
    },
    7: {
        "name": "PURA 170",
        "subtitle": "Handleless Minimalist · Twin Half-Vitrine",
        "size": "170 cm",
        "color": "Matt White MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Matt white full MDF · Black-framed smoked glass",
        "desc": "Designed for contemporary handleless kitchens with clean flush door lines, black-framed smoked glass upper cabinets, and enclosed lower larder cupboards. Its generous 65 cm high preparation bay easily accommodates bean-to-cup espresso machines and commercial-grade grinders.",
        "badges": ["Handleless Profile", "Smoked Glass Vitrine", "LED Illumination", "Detachable Towers"],
        "note": "65 cm upper alcove clearance · Detachable 40 cm side towers",
        "slug": "pura-170-handleless-white",
    },
    8: {
        "name": "CLARO 90",
        "subtitle": "Smoked Upper Vitrine · Compact Module",
        "size": "90–93 cm",
        "color": "Matt White MDF",
        "layout": "Compact Single Module",
        "dims": "90 × 45 × 205 cm",
        "finish": "Matt white full MDF · Black-framed smoked glass",
        "desc": "Maximises storage efficiency within a 90 cm wall footprint. The LED-illuminated black-framed smoked glass upper cabinet displays espresso cups and glassware, whilst the wide central soft-close drawer and double lower cupboard house all brewing essentials.",
        "badges": ["90 cm Compact", "Smoked Glass Cabinet", "LED Illumination", "18 mm Full MDF"],
        "note": "86 × 43 cm net machine bay · 65 cm alcove clearance",
        "slug": "claro-90-white",
    },
    9: {
        "name": "CLARO 130 LEFT",
        "subtitle": "Left Full-Height Smoked Vitrine",
        "size": "130–140 cm",
        "color": "Matt White MDF",
        "layout": "Left Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Matt white full MDF · Left full-height black smoked vitrine",
        "desc": "Creates striking contemporary presence with a floor-to-ceiling black-framed smoked glass display tower on the left wing and warm internal LED lighting. Thanks to its modular coupling system, the display column can be adapted to suit your room architecture.",
        "badges": ["Left Full Vitrine", "Smoked Glass", "LED Illumination", "18 mm Full MDF"],
        "note": "90 cm preparation station + 40 cm left full-height smoked vitrine",
        "slug": "claro-130-left-white",
    },
    10: {
        "name": "CLARO 130 RIGHT",
        "subtitle": "Right Full-Height Smoked Vitrine",
        "size": "130–140 cm",
        "color": "Matt White MDF",
        "layout": "Right Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Matt white full MDF · Right full-height black smoked vitrine",
        "desc": "Pairs a 205 cm tall right-hand smoked glass display tower with an 86 cm clear preparation worktop, offering balanced glassware display and concealed larder storage for medium-sized British kitchens and dining rooms.",
        "badges": ["Right Full Vitrine", "Smoked Glass", "LED Illumination", "18 mm Full MDF"],
        "note": "90 cm preparation station + 40 cm right full-height smoked vitrine",
        "slug": "claro-130-right-white",
    },
    11: {
        "name": "CLARO 170",
        "subtitle": "Twin Full-Height Smoked Vitrine",
        "size": "170 cm",
        "color": "Matt White MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Matt white full MDF · Twin full-height black smoked vitrines",
        "desc": "Establishes a gallery-grade home coffee & beverage bar in spacious kitchens and living areas, combining twin full-height LED-lit smoked glass vitrine towers with a wide central barista preparation station.",
        "badges": ["Twin Full Vitrine", "Smoked Glass", "LED Illumination", "18 mm Full MDF"],
        "note": "40 + 90 + 40 cm full-height glazed architectural composition",
        "slug": "claro-170-white",
    },
    12: {
        "name": "DUNA 90",
        "subtitle": "Sand Beige · Compact Smoked Vitrine",
        "size": "90–93 cm",
        "color": "Sand Beige MDF",
        "layout": "Compact Single Module",
        "dims": "90 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Black smoked glass upper vitrine",
        "desc": "Unites a warm sand beige MDF finish with a black-framed smoked glass upper cabinet and ambient LED lighting in a compact 90 cm footprint. Fitted with hydraulic soft-close hinges and a telescopic damped drawer for quiet everyday use.",
        "badges": ["Sand Beige MDF", "90 cm Compact", "Smoked Glass Vitrine", "Soft-Close Motion"],
        "note": "86 × 43 cm worktop · 65 cm upper clearance · Soft-close runners",
        "slug": "duna-90-sand-beige",
    },
    13: {
        "name": "DUNA 130 LEFT",
        "subtitle": "Sand Beige · Left Half-Vitrine Tower",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Left Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Left half-glazed smoked vitrine tower",
        "desc": "A 130 cm modular sand beige coffee station offering LED-lit smoked glass display shelving in the upper left tower and enclosed dry-larder storage below. Its detachable tower design provides flexible placement across alcoves.",
        "badges": ["Left Half-Vitrine", "Sand Beige MDF", "Detachable Tower", "LED Illumination"],
        "note": "Enclosed lower cupboard with smoked glass upper vitrine on left wing",
        "slug": "duna-130-left-sand-beige",
    },
    14: {
        "name": "DUNA 130 RIGHT",
        "subtitle": "Sand Beige · Right Half-Vitrine Tower",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Right Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Right half-glazed smoked vitrine tower",
        "desc": "Combines an enclosed lower cupboard and LED-illuminated smoked glass upper display on the right wing with a warm sand beige MDF body. The 86 cm clear worktop provides ample space for espresso machines and serving trays.",
        "badges": ["Right Half-Vitrine", "Sand Beige MDF", "Detachable Tower", "LED Illumination"],
        "note": "Enclosed lower cupboard with smoked glass upper vitrine on right wing",
        "slug": "duna-130-right-sand-beige",
    },
    15: {
        "name": "DUNA 170",
        "subtitle": "Sand Beige · Twin Half-Vitrine Towers",
        "size": "170 cm",
        "color": "Sand Beige MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Twin half-glazed smoked vitrine towers",
        "desc": "Crafted for homes seeking both illuminated glassware display and substantial concealed larder storage in a 170 cm sand beige silhouette. Upper smoked glass vitrines showcase stemware and cups under warm LED light whilst lower cupboards conceal larger kitchen appliances.",
        "badges": ["Twin Half-Vitrine", "Sand Beige MDF", "Soft-Close Drawer", "LED Illumination"],
        "note": "40 + 90 + 40 cm · Enclosed base cupboards with glazed upper towers",
        "slug": "duna-170-sand-beige",
    },
    16: {
        "name": "TERRA 90",
        "subtitle": "Sand Beige · Sleek Compact Module",
        "size": "90–93 cm",
        "color": "Sand Beige MDF",
        "layout": "Compact Single Module",
        "dims": "90 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Black-framed smoked glass",
        "desc": "Transforms compact kitchen corners and dining room alcoves into an organised coffee bar with minimalist handle lines and a warm sand beige finish. Internal LED lighting within the smoked glass upper cabinet casts a soft evening ambience.",
        "badges": ["90 cm Compact", "Sand Beige MDF", "Smoked Glass", "Ambient LED"],
        "note": "90 × 205 × 45 cm · 65 cm worktop vertical clearance",
        "slug": "terra-90-sand-beige",
    },
    17: {
        "name": "TERRA 130 LEFT",
        "subtitle": "Sand Beige · Left Full-Height Glazed Vitrine",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Left Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Left full-height smoked glass vitrine",
        "desc": "Unites the warmth of a sand beige full-MDF carcass with a five-shelf full-height black smoked glass vitrine tower on the left wing. A wide telescopic soft-close drawer keeps coffee capsules, portafilters, and pour-over accessories close at hand.",
        "badges": ["Left Full Vitrine", "5-Shelf Tower", "Sand Beige MDF", "LED Illumination"],
        "note": "Left 40 cm full-height glazed vitrine + 90 cm primary station",
        "slug": "terra-130-left-sand-beige",
    },
    18: {
        "name": "TERRA 130 RIGHT",
        "subtitle": "Sand Beige · Right Full-Height Glazed Vitrine",
        "size": "130–140 cm",
        "color": "Sand Beige MDF",
        "layout": "Right Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Right full-height smoked glass vitrine",
        "desc": "Features a full-height LED-lit smoked glass display tower on the right wing paired with a sand beige preparation module, creating a cohesive serving and display centrepiece for living rooms, dining spaces, and contemporary kitchens.",
        "badges": ["Right Full Vitrine", "5-Shelf Tower", "Sand Beige MDF", "LED Illumination"],
        "note": "Right 40 cm full-height glazed vitrine + 90 cm primary station",
        "slug": "terra-130-right-sand-beige",
    },
    19: {
        "name": "TERRA 170",
        "subtitle": "Sand Beige · Twin Full-Height Glazed Vitrines",
        "size": "170 cm",
        "color": "Sand Beige MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Sand beige full MDF · Twin full-height smoked glass vitrines",
        "desc": "One of the highest display-capacity designs in the collection, combining twin floor-to-ceiling illuminated smoked glass vitrine towers with a sand beige central barista station. Functions effortlessly as both a dining room sideboard and a complete home coffee bar.",
        "badges": ["Twin Full Vitrine", "170 cm Grand Width", "Sand Beige MDF", "LED Illumination"],
        "note": "40 + 90 + 40 cm twin full-height vitrine living & kitchen bar",
        "slug": "terra-170-sand-beige",
    },
    20: {
        "name": "NATURA 90",
        "subtitle": "Natural Oak Grain · Compact Module",
        "size": "90–93 cm",
        "color": "Natural Oak Grain MDF",
        "layout": "Compact Single Module",
        "dims": "90 × 45 × 205 cm",
        "finish": "Natural timber-grain full MDF · Smoked glass upper vitrine",
        "desc": "Introduces organic timber warmth to British interiors with a natural oak-textured full-MDF carcass and smoked glass upper display cabinet. Its compact 90 cm width delivers a fully equipped coffee preparation station for smaller kitchen and living corners.",
        "badges": ["Natural Oak Grain", "90 cm Compact", "Smoked Glass", "LED Illumination"],
        "note": "86 × 43 cm preparation worktop · Warm tactile timber grain",
        "slug": "natura-90-oak",
    },
    21: {
        "name": "NATURA 130 LEFT",
        "subtitle": "Natural Oak Grain · Left Glazed Vitrine",
        "size": "130–140 cm",
        "color": "Natural Oak Grain MDF",
        "layout": "Left Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Natural timber-grain full MDF · Left smoked glass vitrine",
        "desc": "A 130 cm modular coffee corner enriching a natural timber-textured MDF body with a left-hand smoked glass display tower and daylight LED illumination. Its separable two-piece modular structure allows effortless relocation and layout flexibility.",
        "badges": ["Natural Oak Grain", "Left Glazed Vitrine", "Detachable Tower", "18 mm Full MDF"],
        "note": "Left 40 cm detachable vitrine + 90 cm timber-grain station",
        "slug": "natura-130-left-oak",
    },
    22: {
        "name": "NATURA 130 RIGHT",
        "subtitle": "Natural Oak Grain · Right Glazed Vitrine",
        "size": "130–140 cm",
        "color": "Natural Oak Grain MDF",
        "layout": "Right Glazed Vitrine",
        "dims": "130 × 45 × 205 cm",
        "finish": "Natural timber-grain full MDF · Right smoked glass vitrine",
        "desc": "Harmonises with both Scandinavian and warm contemporary British interiors through an 18 mm natural timber-grain MDF carcass and a right-hand LED-lit smoked glass display column.",
        "badges": ["Natural Oak Grain", "Right Glazed Vitrine", "Detachable Tower", "18 mm Full MDF"],
        "note": "Right 40 cm detachable vitrine + 90 cm timber-grain station",
        "slug": "natura-130-right-oak",
    },
    23: {
        "name": "NATURA 170",
        "subtitle": "Natural Oak Grain · Twin Glazed Vitrines",
        "size": "170 cm",
        "color": "Natural Oak Grain MDF",
        "layout": "Twin Glazed Vitrine",
        "dims": "170 × 45 × 205 cm",
        "finish": "Natural timber-grain full MDF · Twin smoked glass vitrines",
        "desc": "Crowns the organic warmth of natural timber-grain MDF with twin full-height black-framed smoked glass display towers across a 170 cm span. Brings together a wide cutlery/pod drawer, enclosed base cupboards, and illuminated display shelving in one statement piece.",
        "badges": ["Natural Oak Grain", "Twin Glazed Vitrine", "170 cm Grand Width", "LED Illumination"],
        "note": "40 + 90 + 40 cm symmetrical timber & smoked glass architecture",
        "slug": "natura-170-oak",
    },
    24: {
        "name": "TOSCANA 93 PLINTH",
        "subtitle": "Timber Worktop · Dual Integrated Sockets",
        "size": "90–93 cm",
        "color": "White & Timber Worktop",
        "layout": "Integrated Dual Sockets",
        "dims": "93 × 45 × 208 cm",
        "finish": "Matt white membrane MDF · Warm timber worktop & splashback",
        "desc": "A 93 cm plinth-base MDF coffee cupboard featuring 2 flush-mounted power sockets on the back panel and touch-sensor LED task lighting, powering your espresso machine, grinder, and kettle cleanly without trailing extension leads.",
        "badges": ["2 Integrated Sockets", "Touch-Sensor LED", "93 cm Compact", "Membrane MDF"],
        "note": "61 cm worktop clearance · 2 integrated sockets · Touch-sensor LED",
        "slug": "toscana-93-plinth",
    },
    25: {
        "name": "TOSCANA 93 RAISED",
        "subtitle": "Raised Legs · Dual Integrated Sockets",
        "size": "90–93 cm",
        "color": "White & Timber Worktop",
        "layout": "Integrated Dual Sockets",
        "dims": "93 × 45 × 210 cm",
        "finish": "Matt white membrane MDF · Timber worktop · Raised legs",
        "desc": "An elevated 2-door full-MDF coffee unit with raised legs for effortless floor and robot-vacuum cleaning, a warm timber-toned preparation alcove, touch-sensor LED illumination, and 2 integrated power sockets for high utility in compact kitchens.",
        "badges": ["Raised Legs", "2 Integrated Sockets", "Touch-Sensor LED", "18 mm Full MDF"],
        "note": "Robot-vacuum friendly raised legs · 2 integrated power sockets",
        "slug": "toscana-93-raised",
    },
    26: {
        "name": "TOSCANA 140",
        "subtitle": "4-Door Wide Worktop · Dual Integrated Sockets",
        "size": "130–140 cm",
        "color": "White & Timber Worktop",
        "layout": "Integrated Dual Sockets",
        "dims": "140 × 45 × 208 cm",
        "finish": "Matt white membrane MDF · Warm timber worktop & splashback",
        "desc": "Offers an uninterrupted 140 cm wide preparation worktop to position espresso machines, grinders, and companion kitchen appliances side by side. Complete with 4 glazed upper doors, twin soft-close drawers, a 4-door lower larder, and 2 integrated power sockets.",
        "badges": ["140 cm Wide Worktop", "2 Integrated Sockets", "Twin Drawers", "Membrane MDF"],
        "note": "140 cm continuous wide worktop · 2 integrated sockets · Twin drawers",
        "slug": "toscana-140",
    },
    27: {
        "name": "IONIA 93",
        "subtitle": "Fluted Reeded Doors · Arched Glazed Top",
        "size": "90–93 cm",
        "color": "White & Timber Worktop",
        "layout": "Compact Single Module",
        "dims": "93 × 45 × 208 cm",
        "finish": "Matt white membrane MDF · Vertical reeded doors & timber alcove",
        "desc": "Interprets classic British country-modern joinery within a compact 93 cm footprint, pairing vertically reeded lower cupboard doors with arched upper glass panes and a warm timber-toned preparation worktop in 18 mm full MDF.",
        "badges": ["Reeded Lower Doors", "Arched Glazed Top", "93 cm Compact", "Membrane MDF"],
        "note": "61 cm worktop vertical clearance · Soft-close hydraulic hinges",
        "slug": "ionia-93",
    },
    28: {
        "name": "IONIA 140",
        "subtitle": "4-Bay Reeded Joinery · Wide Timber Alcove",
        "size": "130–140 cm",
        "color": "White & Timber Worktop",
        "layout": "Integrated Dual Sockets",
        "dims": "140 × 45 × 208 cm",
        "finish": "Matt white membrane MDF · Vertical reeded doors & timber alcove",
        "desc": "Configured as both a dedicated home coffee bar and an elegant dining room dresser, featuring four arched glazed upper cabinet doors, a touch-sensor LED-illuminated warm timber preparation alcove, and wide vertically reeded base cupboards.",
        "badges": ["140 cm Wide Span", "Touch-Sensor LED", "Twin Drawers", "Membrane MDF"],
        "note": "140 × 45 cm wide worktop · Touch-sensor daylight LED illumination",
        "slug": "ionia-140",
    },
    29: {
        "name": "FIORE 140 RAISED",
        "subtitle": "Arched Relief Doors · 15 cm Timber Legs",
        "size": "130–140 cm",
        "color": "White & Timber Worktop",
        "layout": "Raised Timber Legs",
        "dims": "140 × 45 × 213 cm",
        "finish": "Matt white membrane MDF · Timber worktop & 15 cm raised legs",
        "desc": "Presents an airy architectural silhouette through matching arched motifs repeated across both the upper glazed doors and lower membrane doors, elevated on 15 cm timber-toned legs and fitted with touch-sensor LED task lighting and soft-close drawers.",
        "badges": ["15 cm Raised Legs", "Arched Membrane", "Touch-Sensor LED", "140 cm Wide Span"],
        "note": "213 cm total height · 15 cm raised legs · Touch-sensor LED",
        "slug": "fiore-140-raised",
    },
    30: {
        "name": "BIANCA 93 PLINTH",
        "subtitle": "Pure White Carcass · Matt Black Cup Handles",
        "size": "90–93 cm",
        "color": "Matt White MDF",
        "layout": "Compact Single Module",
        "dims": "93 × 45 × 208 cm",
        "finish": "Pure white full MDF · Contrast matt black cup handles",
        "desc": "Blends seamlessly into bright British kitchens with an all-white full-MDF carcass, clear-glazed upper cup cabinet, and contrasting matt black cup handles. A 61 cm tall worktop alcove and integrated cable management port keep the work surface clutter-free.",
        "badges": ["Pure White MDF", "61 cm Clearance", "LED Illumination", "Cable Port"],
        "note": "61 cm tall worktop clearance · Integrated rear cable port",
        "slug": "bianca-93-plinth",
    },
    31: {
        "name": "BIANCA 93 RAISED",
        "subtitle": "Raised Legs · Pure White Full MDF",
        "size": "90–93 cm",
        "color": "Matt White MDF",
        "layout": "Raised Timber Legs",
        "dims": "93 × 45 × 210 cm",
        "finish": "Pure white full MDF · Black cup handles · Raised legs",
        "desc": "Lifts a crisp all-white 93 cm coffee cabinet off the floor on slender raised legs. Featuring twin clear-glazed upper doors, LED worktop illumination, a full-width central drawer, and a two-door lower cupboard for an airy presence in compact rooms.",
        "badges": ["Raised Legs", "Pure White MDF", "LED Illumination", "93 cm Compact"],
        "note": "93 × 210 × 45 cm · Raised legs for easy under-cabinet cleaning",
        "slug": "bianca-93-raised",
    },
    32: {
        "name": "BIANCA 140 RAISED",
        "subtitle": "4-Door Raised Legs · Dual Integrated Sockets",
        "size": "130–140 cm",
        "color": "Matt White MDF",
        "layout": "Integrated Dual Sockets",
        "dims": "140 × 45 × 210 cm",
        "finish": "Pure white membrane MDF · Black handles · Raised legs",
        "desc": "Unites a generous 140 cm all-white MDF carcass, raised legs, touch-sensor LED worktop lighting, and 2 integrated power sockets in one cohesive design. Its twin-drawer, four-door layout makes it ideal for busy family kitchens and open-plan dining spaces.",
        "badges": ["140 cm Raised Legs", "2 Integrated Sockets", "Touch-Sensor LED", "Membrane MDF"],
        "note": "140 × 210 × 45 cm · 2 integrated power sockets · Touch-sensor LED",
        "slug": "bianca-140-raised",
    },
}

translated_cards = []

for idx, art in enumerate(raw_articles, 1):
    m = MODELS_EN[idx]
    code = f"EV–{idx:02d}"
    card_id = f"ev-ev-{idx:02d}"

    # Extract all thumbnail buttons from the original article to preserve exact image paths, dimensions, and data-fit
    thumb_matches = re.findall(
        r'<button type="button" class="ev-thumb([^"]*)" data-idx="(\d+)" data-src="([^"]+)" data-fit="([^"]+)"[^>]*><img src="[^"]+"[^>]*width="(\d+)" height="(\d+)"[^>]*/></button>',
        art,
    )
    assert len(thumb_matches) >= 1, f"No thumbs found for article {idx}"
    photo_count = len(thumb_matches)
    first_src = thumb_matches[0][2]
    first_fit = thumb_matches[0][3]
    first_w = thumb_matches[0][4]
    first_h = thumb_matches[0][5]

    first_alt = f"{m['name']} ({m['dims']}) {m['finish']} bespoke MDF home coffee corner — view 1"
    loading_attr = 'loading="eager" fetchpriority="high"' if idx <= 3 else 'loading="lazy"'

    thumbs_html_parts = []
    for is_act, t_idx, t_src, t_fit, t_w, t_h in thumb_matches:
        view_num = int(t_idx) + 1
        t_alt = f"{m['name']} ({m['dims']}) {m['finish']} bespoke MDF home coffee corner — view {view_num}"
        act_cls = " is-active" if "is-active" in is_act else ""
        thumbs_html_parts.append(
            f'<button type="button" class="ev-thumb{act_cls}" data-idx="{t_idx}" data-src="{t_src}" data-fit="{t_fit}" '
            f'data-alt="{html_lib.escape(t_alt, quote=True)}" aria-label="{html_lib.escape(m["name"], quote=True)} image {view_num}">'
            f'<img src="{t_src}" alt="{html_lib.escape(t_alt, quote=True)}" width="{t_w}" height="{t_h}" loading="lazy" decoding="async"/></button>'
        )

    thumbs_html = "".join(thumbs_html_parts)
    badges_html = "".join(f"<li>{html_lib.escape(b)}</li>" for b in m["badges"])
    w_cm, d_cm, h_cm = [x.strip() for x in m["dims"].replace("cm", "").split("×")]

    card_html = (
        f'<article class="ev-card ev-reveal" id="{card_id}" '
        f'data-size="{html_lib.escape(m["size"], quote=True)}" '
        f'data-color="{html_lib.escape(m["color"], quote=True)}" '
        f'data-layout="{html_lib.escape(m["layout"], quote=True)}" '
        f'data-name="{html_lib.escape(m["name"], quote=True)}" '
        f'data-dims="{html_lib.escape(m["dims"], quote=True)}">'
        f'<div class="ev-stage" data-fit="{first_fit}">'
        f'<button type="button" class="ev-main-btn" aria-label="{html_lib.escape(m["name"], quote=True)} full-screen gallery ({photo_count} photos)">'
        f'<img class="ev-main-img" src="{first_src}" alt="{html_lib.escape(first_alt, quote=True)}" width="{first_w}" height="{first_h}" decoding="async" {loading_attr}/>'
        f'</button>'
        f'<button type="button" class="ev-nav ev-prev" aria-label="Previous image">‹</button>'
        f'<button type="button" class="ev-nav ev-next" aria-label="Next image">›</button>'
        f'<span class="ev-count-badge">1 / {photo_count} photos</span>'
        f'<button type="button" class="ev-zoom-pill" aria-label="Enlarge {html_lib.escape(m["name"], quote=True)} photos">＋ Enlarge</button>'
        f'</div>'
        f'<div class="ev-thumbs" role="region" aria-label="{html_lib.escape(m["name"], quote=True)} all product photographs">{thumbs_html}</div>'
        f'<div class="ev-body">'
        f'<div class="ev-meta"><span>{html_lib.escape(m["color"])} · {html_lib.escape(m["layout"])}</span><span>{code}</span></div>'
        f'<h3>{html_lib.escape(m["name"])} <span>{html_lib.escape(m["subtitle"])}</span></h3>'
        f'<p class="ev-finish">{html_lib.escape(m["finish"])}</p>'
        f'<p class="ev-desc">{html_lib.escape(m["desc"])}</p>'
        f'<ul class="ev-badges">{badges_html}</ul>'
        f'<div class="ev-dims">'
        f'<div><small>Width</small><b>{w_cm} cm</b></div>'
        f'<div><small>Depth</small><b>{d_cm} cm</b></div>'
        f'<div><small>Height</small><b>{h_cm} cm</b></div>'
        f'</div>'
        f'<p class="ev-counter-note">{html_lib.escape(m["note"])}</p>'
        f'<div class="ev-actions">'
        f'<div><label for="ev-q-{idx-1}">Qty</label><input id="ev-q-{idx-1}" class="ev-qty" type="number" value="1" min="1" max="100" step="1" inputmode="numeric"/></div>'
        f'<button type="button" class="ev-add">Add to Quote List <span aria-hidden="true">＋</span></button>'
        f'</div>'
        f'<a class="ev-direct" href="/enquire/?collection=coffee-stations&amp;model={m["slug"]}">Request Dimensions &amp; Project Quote for This Model ↗</a>'
        f'</div></article>'
    )
    translated_cards.append(card_html)

all_cards_joined = "\n    ".join(translated_cards)

# Extract the CSS block from lines 304-411 and adapt brand accent colours to Cabivella UK British heritage green & gold
style_block = "\n".join(lines[304:410])
style_block = style_block.replace(
    "linear-gradient(90deg,#0d7332 0 33.333%,#ffffff 33.333% 66.666%,#a81212 66.666%)",
    "linear-gradient(90deg,#072d25 0 50%,#b9914a 50% 100%)",
)

component_astro = f"""---
export interface Props {{
  showHeadingH1?: boolean;
}}
const {{ showHeadingH1 = true }} = Astro.props;
---

<section id="kk-evsel-collection" aria-labelledby="ev-col-title">
<style is:global>
{style_block}
</style>
<div class="ev-wrap">
  <div class="ev-kicker"><span class="ev-tri" aria-hidden="true"></span> CABIVELLA UK / FLAGSHIP BESPOKE MDF COFFEE CORNERS</div>
  <div class="ev-head">
    {{showHeadingH1 ? (
      <h1 id="ev-col-title">32 bespoke MDF coffee corners<br/>for British kitchens &amp; living spaces.</h1>
    ) : (
      <h2 id="ev-col-title" style="margin:0!important;font-size:clamp(34px,4.3vw,58px)!important;font-weight:700!important;letter-spacing:-.045em!important;line-height:1.06!important;color:var(--ev-ink)!important">32 bespoke MDF coffee corners<br/>for British kitchens &amp; living spaces.</h2>
    )}}
    <p data-answer-capsule="true">Our flagship Home Coffee Corners collection comprises 32 architectural models spanning 90 cm compact alcove stations, 130 cm single-vitrine units, and 170 cm twin-vitrine dining room credenzas. Every cabinet is crafted from 18 mm Grade-A full MDF with integrated daylight LED illumination, soft-close European motion hardware, and direct crated delivery across the United Kingdom.</p>
  </div>
  <div class="ev-stats">
    <div><b>32</b><small>Bespoke domestic models</small></div>
    <div><b>328</b><small>High-resolution angles &amp; diagrams</small></div>
    <div><b>90–170 cm</b><small>Modular width options</small></div>
    <div><b>100% MDF</b><small>LED-illuminated carcass &amp; doors</small></div>
  </div>
  <div class="ev-filters" data-seo-interactive="true">
    <div>
      <label for="ev-search">Search model, dimensions or feature</label>
      <input id="ev-search" type="search" placeholder="e.g. sand beige, 90 cm, smoked glass, sockets, raised legs..."/>
    </div>
    <div>
      <label for="ev-size">Width group</label>
      <select id="ev-size">
        <option value="">All widths (32)</option>
        <option value="90–93 cm">Compact · 90–93 cm</option>
        <option value="130–140 cm">Medium · 130–140 cm</option>
        <option value="170 cm">Grand · 170 cm</option>
      </select>
    </div>
    <div>
      <label for="ev-color">Finish &amp; colour</label>
      <select id="ev-color">
        <option value="">All finishes</option>
        <option value="Sand Beige MDF">Sand Beige MDF</option>
        <option value="Matt White MDF">Matt White MDF</option>
        <option value="Natural Oak Grain MDF">Natural Oak Grain MDF</option>
        <option value="White &amp; Timber Worktop">White &amp; Timber Worktop</option>
      </select>
    </div>
    <div>
      <label for="ev-layout">Module configuration</label>
      <select id="ev-layout">
        <option value="">All configurations</option>
        <option value="Compact Single Module">Compact Single Module</option>
        <option value="Left Glazed Vitrine">Left Glazed Vitrine</option>
        <option value="Right Glazed Vitrine">Right Glazed Vitrine</option>
        <option value="Twin Glazed Vitrine">Twin Glazed Vitrine (170 cm)</option>
        <option value="Arched Alcove">Arched Alcove Series</option>
        <option value="Integrated Dual Sockets">Integrated Dual Sockets</option>
        <option value="Raised Timber Legs">Raised Timber Legs</option>
      </select>
    </div>
    <button id="ev-reset" class="ev-reset" type="button">Reset Filters</button>
  </div>
  <div class="ev-toolbar">
    <p id="ev-count" aria-live="polite">Showing 32 of 32 models · Every card includes multi-angle photography &amp; dimension diagrams</p>
    <a id="ev-top-total" class="ev-pill-link" href="#ev-quote">My Quote List · 0 items ↓</a>
  </div>
  <div class="ev-grid">
    {all_cards_joined}
  </div>
  <p id="ev-noresult" class="ev-empty" hidden>No models match your selected filters. Reset the filters to view all 32 coffee corner designs.</p>
  <p class="ev-note">Espresso machines, small domestic appliances, and serving accessories shown in photographs are for styling illustration only and are not included in the cabinetry scope. UK delivery postcode, installation guidance, and bespoke size adaptations are confirmed during your project quotation.</p>
  <div class="ev-quote" id="ev-quote">
    <div class="ev-qhead">
      <div>
        <div class="ev-kicker">UK HOME &amp; TRADE SPECIFICATION ENQUIRY</div>
        <h3>Your selected coffee corner models</h3>
        <p>Add one or more models to your specification list and request direct workshop pricing and UK delivery lead times via WhatsApp or email.</p>
      </div>
      <strong id="ev-total" style="color:var(--ev-green);font-size:14px" aria-live="polite">0 items</strong>
    </div>
    <p id="ev-cart-empty" class="ev-empty">You have not selected any models yet. Use the &ldquo;Add to Quote List&rdquo; button on any card above.</p>
    <div id="ev-lines"></div>
    <div class="ev-form">
      <div><label for="ev-name">Full Name (optional)</label><input id="ev-name" maxlength="120" autocomplete="name" placeholder="Your Full Name"/></div>
      <div><label for="ev-city">UK Town / Postcode (optional)</label><input id="ev-city" maxlength="100" placeholder="e.g. London SW19, Richmond, Manchester..."/></div>
      <div><label for="ev-note-inp">Project Notes (optional)</label><input id="ev-note-inp" maxlength="200" placeholder="e.g. Alcove width 135 cm, socket on left wall"/></div>
    </div>
    <div class="ev-links">
      <a class="ev-primary" id="ev-wa" href="https://wa.me/447898262110" aria-disabled="true" target="_blank" rel="noopener noreferrer">Request Quote &amp; Specs via WhatsApp ↗</a>
      <a class="ev-pill-link" id="ev-mail" href="mailto:enquiries@cabivella.co.uk" aria-disabled="true">Request Quote via Email ↗</a>
      <button class="ev-pill-link" id="ev-copy" type="button" disabled>Copy Specification Summary</button>
      <a class="ev-pill-link" href="/enquire/">Full Architectural Enquiry Form ↗</a>
    </div>
    <p id="ev-feedback" class="ev-note" role="status"></p>
    <p class="ev-note">Direct UK Specification Desk · WhatsApp: <a href="https://wa.me/447898262110">+44 7898 262110</a> · Email: <a href="mailto:enquiries@cabivella.co.uk">enquiries@cabivella.co.uk</a></p>
  </div>
  <div class="ev-pillars">
    <div class="ev-pillar"><strong>100% Grade-A Full MDF Carcass</strong><p>18 mm high-density MDF carcasses with membrane and tempered glass doors engineered for superior screw retention, steam resistance, and long-term domestic durability.</p></div>
    <div class="ev-pillar"><strong>Sensor LED &amp; Socket Options</strong><p>Contactless hand-wave or touch-activated daylight LED task lighting, with dual flush-mounted worktop power sockets on selected series.</p></div>
    <div class="ev-pillar"><strong>Soft-Close Drawers &amp; Hinges</strong><p>Damped telescopic steel drawer runners and hydraulic soft-close hinges ensuring silent, vibration-free daily operation.</p></div>
    <div class="ev-pillar"><strong>Modular &amp; Bespoke Sizing Support</strong><p>Separable 40 cm vitrine towers across the 130 cm and 170 cm ranges, plus <a href="/enquire/" style="color:var(--ev-green);font-weight:600">bespoke alcove dimensioning ↗</a> for UK period homes.</p></div>
  </div>
</div>
<dialog class="ev-dialog" id="ev-dialog" aria-label="Product photograph gallery">
  <div class="ev-dlg-top">
    <strong id="ev-dlg-title"></strong>
    <button class="ev-reset" id="ev-dlg-close" type="button">Close ×</button>
  </div>
  <div class="ev-dlg-stage">
    <button type="button" class="ev-nav ev-prev" id="ev-dlg-prev" aria-label="Previous photograph">‹</button>
    <img id="ev-dlg-img" alt="Cabivella UK enlarged coffee corner photograph" src="" width="1200" height="900"/>
    <button type="button" class="ev-nav ev-next" id="ev-dlg-next" aria-label="Next photograph">›</button>
    <span class="ev-count-badge" id="ev-dlg-count">1 / 1</span>
  </div>
  <div class="ev-dlg-strip" id="ev-dlg-strip"></div>
</dialog>
<script is:inline>
(()=>{{
  const root=document.getElementById("kk-evsel-collection");
  if(!root)return;
  const $=(s,p=root)=>p.querySelector(s);
  const $$=(s,p=root)=>Array.from(p.querySelectorAll(s));
  const cards=$$(".ev-card");
  const cart=new Map();

  function setSlide(card,nextIdx){{
    const thumbs=$$(".ev-thumb",card);
    if(!thumbs.length)return;
    const total=thumbs.length;
    const idx=((nextIdx%total)+total)%total;
    const active=thumbs[idx];
    const stage=$(".ev-stage",card);
    const img=$(".ev-main-img",card);
    const badge=$(".ev-count-badge",card);
    img.src=active.dataset.src;
    img.alt=active.dataset.alt||card.dataset.name;
    stage.dataset.fit=active.dataset.fit||"cover";
    badge.textContent=(idx+1)+" / "+total+" photos";
    card.dataset.idx=String(idx);
    thumbs.forEach((t,i)=>t.classList.toggle("is-active",i===idx));
  }}

  cards.forEach(card=>{{
    card.dataset.idx="0";
    $$(".ev-thumb",card).forEach((btn,i)=>btn.addEventListener("click",()=>setSlide(card,i)));
    const prev=$(".ev-prev",card),next=$(".ev-next",card);
    if(prev)prev.addEventListener("click",e=>{{e.stopPropagation();setSlide(card,Number(card.dataset.idx||0)-1);}});
    if(next)next.addEventListener("click",e=>{{e.stopPropagation();setSlide(card,Number(card.dataset.idx||0)+1);}});
    const openFn=()=>openDialog(card,Number(card.dataset.idx||0));
    $(".ev-main-btn",card).addEventListener("click",openFn);
    $(".ev-zoom-pill",card).addEventListener("click",openFn);
    $(".ev-add",card).addEventListener("click",()=>{{
      const qtyInput=$(".ev-qty",card);
      const raw=Number(qtyInput.value);
      const qty=Number.isInteger(raw)&&raw>=1&&raw<=100?raw:1;
      qtyInput.value=String(qty);
      const key=card.id;
      const cur=cart.get(key)||{{name:card.dataset.name,dims:card.dataset.dims,qty:0}};
      cur.qty=Math.min(100,cur.qty+qty);
      cart.set(key,cur);
      renderCart();
      const btn=$(".ev-add",card);
      btn.classList.add("is-added");
      btn.textContent="Added to Quote List ✓";
      setTimeout(()=>{{btn.classList.remove("is-added");btn.textContent="Add to Quote List ＋";}},1400);
    }});
  }});

  const dlg=$("#ev-dialog"),dlgImg=$("#ev-dlg-img"),dlgTitle=$("#ev-dlg-title"),dlgCount=$("#ev-dlg-count"),dlgStrip=$("#ev-dlg-strip");
  let dlgCard=null,dlgIdx=0;
  function renderDialog(){{
    if(!dlgCard)return;
    const thumbs=$$(".ev-thumb",dlgCard);
    const total=thumbs.length;
    dlgIdx=((dlgIdx%total)+total)%total;
    const t=thumbs[dlgIdx];
    dlgImg.src=t.dataset.src;
    dlgImg.alt=t.dataset.alt||dlgCard.dataset.name;
    dlgTitle.textContent=dlgCard.dataset.name+" · "+dlgCard.dataset.dims;
    dlgCount.textContent=(dlgIdx+1)+" / "+total;
    $$("button",dlgStrip).forEach((b,i)=>b.classList.toggle("is-active",i===dlgIdx));
  }}
  function openDialog(card,startIdx){{
    dlgCard=card;dlgIdx=startIdx;
    dlgStrip.replaceChildren();
    $$(".ev-thumb",card).forEach((t,i)=>{{
      const b=document.createElement("button");
      b.type="button";
      b.setAttribute("aria-label",card.dataset.name+" photo "+(i+1));
      const im=document.createElement("img");
      im.src=t.dataset.src;im.alt=t.dataset.alt||"";im.width=116;im.height=100;im.loading="lazy";
      b.appendChild(im);
      b.addEventListener("click",()=>{{dlgIdx=i;renderDialog();}});
      dlgStrip.appendChild(b);
    }});
    renderDialog();
    if(typeof dlg.showModal==="function")dlg.showModal();
    else dlg.setAttribute("open","");
  }}
  function closeDialog(){{
    if(typeof dlg.close==="function"&&dlg.open)dlg.close();
    else dlg.removeAttribute("open");
  }}
  $("#ev-dlg-close").addEventListener("click",closeDialog);
  $("#ev-dlg-prev").addEventListener("click",()=>{{dlgIdx--;renderDialog();}});
  $("#ev-dlg-next").addEventListener("click",()=>{{dlgIdx++;renderDialog();}});
  dlg.addEventListener("click",e=>{{if(e.target===dlg)closeDialog();}});
  document.addEventListener("keydown",e=>{{
    if(!dlg.open)return;
    if(e.key==="ArrowLeft"){{dlgIdx--;renderDialog();}}
    else if(e.key==="ArrowRight"){{dlgIdx++;renderDialog();}}
  }});

  const sIn=$("#ev-search"),szIn=$("#ev-size"),clIn=$("#ev-color"),lyIn=$("#ev-layout"),countEl=$("#ev-count"),emptyEl=$("#ev-noresult");
  const norm=v=>(v||"").toLocaleLowerCase("en-GB").trim();
  function applyFilters(){{
    const q=norm(sIn.value),sz=szIn.value,cl=clIn.value,ly=lyIn.value;
    let vis=0;
    cards.forEach(c=>{{
      const hay=norm(c.dataset.name+" "+c.dataset.dims+" "+c.dataset.color+" "+c.dataset.layout+" "+c.textContent);
      const ok=(!q||hay.includes(q))&&(!sz||c.dataset.size===sz)&&(!cl||c.dataset.color===cl)&&(!ly||c.dataset.layout===ly);
      c.hidden=!ok;
      if(ok)vis++;
    }});
    countEl.textContent="Showing "+vis+" of "+cards.length+" models · Every card includes multi-angle photography & dimension diagrams";
    emptyEl.hidden=vis!==0;
  }}
  [sIn,szIn,clIn,lyIn].forEach(el=>el.addEventListener("input",applyFilters));
  $("#ev-reset").addEventListener("click",()=>{{sIn.value="";szIn.value="";clIn.value="";lyIn.value="";applyFilters();}});

  function buildMessage(){{
    const lines=["Hello Cabivella UK, I would like to request a quote and UK delivery specification for the following Home Coffee Corner models:"];
    cart.forEach(v=>lines.push("• "+v.name+" ("+v.dims+") — "+v.qty+" unit(s)"));
    const nm=$("#ev-name").value.trim(),ct=$("#ev-city").value.trim(),nt=$("#ev-note-inp").value.trim();
    if(nm)lines.push("Name: "+nm);
    if(ct)lines.push("UK Delivery Postcode / Town: "+ct);
    if(nt)lines.push("Notes: "+nt);
    return lines.join("\\n");
  }}
  function updateLinks(){{
    const has=cart.size>0;
    const wa=$("#ev-wa"),mail=$("#ev-mail"),cp=$("#ev-copy");
    wa.setAttribute("aria-disabled",String(!has));
    mail.setAttribute("aria-disabled",String(!has));
    cp.disabled=!has;
    if(has){{
      const msg=buildMessage();
      wa.href="https://wa.me/447898262110?text="+encodeURIComponent(msg);
      mail.href="mailto:enquiries@cabivella.co.uk?subject="+encodeURIComponent("Cabivella UK — Home Coffee Corner Specification & Quote Enquiry")+"&body="+encodeURIComponent(msg);
    }}
  }}
  function renderCart(){{
    const box=$("#ev-lines");box.replaceChildren();
    let total=0;
    cart.forEach((v,k)=>{{
      total+=v.qty;
      const row=document.createElement("div");row.className="ev-line";
      const info=document.createElement("div");
      const st=document.createElement("strong");st.textContent=v.name;
      const sm=document.createElement("small");sm.textContent=v.dims;
      info.append(st,sm);
      const inp=document.createElement("input");inp.type="number";inp.min="1";inp.max="100";inp.value=String(v.qty);
      inp.setAttribute("aria-label",v.name+" quantity");
      inp.addEventListener("change",()=>{{
        const nv=Number(inp.value);
        if(!Number.isInteger(nv)||nv<1||nv>100){{inp.value=String(v.qty);return;}}
        v.qty=nv;renderCart();
      }});
      const del=document.createElement("button");del.type="button";del.className="ev-remove";del.textContent="×";
      del.setAttribute("aria-label","Remove "+v.name);
      del.addEventListener("click",()=>{{cart.delete(k);renderCart();}});
      row.append(info,inp,del);box.appendChild(row);
    }});
    $("#ev-cart-empty").hidden=cart.size>0;
    $("#ev-total").textContent=total+" unit(s) · "+cart.size+" model(s)";
    $("#ev-top-total").textContent="My Quote List · "+total+" item(s) ↓";
    updateLinks();
  }}
  ["#ev-name","#ev-city","#ev-note-inp"].forEach(s=>$(s).addEventListener("input",updateLinks));
  $("#ev-copy").addEventListener("click",async()=>{{
    if(!cart.size)return;
    try{{await navigator.clipboard.writeText(buildMessage());$("#ev-feedback").textContent="Specification summary copied to clipboard.";}}
    catch(_){{$("#ev-feedback").textContent="Could not copy automatically; please use the WhatsApp or Email buttons.";}}
  }});
}})();
</script>
<div class="ev-wrap ev-seo-faq" style="margin-top:42px;padding-top:32px;border-top:1px solid var(--ev-border)">
<h2 style="font-size:24px;font-weight:700;letter-spacing:-.02em;margin:0 0 18px;color:var(--ev-ink)">Frequently Asked Questions About Bespoke MDF Home Coffee Corners</h2>
<div style="display:grid;gap:12px">
<details style="background:#fff;border:1px solid var(--ev-border);border-radius:10px;padding:16px 18px"><summary style="font-weight:600;font-size:15px;cursor:pointer;color:var(--ev-ink)">What carcass and door material is used across the 32 Home Coffee Corner models?</summary><p style="margin:10px 0 0;font-size:14.5px!important;line-height:1.6!important;color:var(--ev-sub)">Every single model in our domestic coffee corner collection is fabricated from 18 mm Grade-A full MDF carcasses and membrane or tempered glass doors—never low-density chipboard—providing superior screw retention and moisture resistance against daily espresso steam.</p></details>
<details style="background:#fff;border:1px solid var(--ev-border);border-radius:10px;padding:16px 18px"><summary style="font-weight:600;font-size:15px;cursor:pointer;color:var(--ev-ink)">Which width should I choose for my British kitchen, utility alcove, or dining room?</summary><p style="margin:10px 0 0;font-size:14.5px!important;line-height:1.6!important;color:var(--ev-sub)">Our 90–93 cm compact modules fit neatly into Victorian and Edwardian kitchen alcoves or apartment hallways; 130–140 cm single-vitrine and wide-worktop units suit standard kitchen-diners; and 170 cm twin-vitrine consoles create a commanding architectural centrepiece in open-plan living and dining rooms.</p></details>
<details style="background:#fff;border:1px solid var(--ev-border);border-radius:10px;padding:16px 18px"><summary style="font-weight:600;font-size:15px;cursor:pointer;color:var(--ev-ink)">Is the worktop clearance suitable for bean-to-cup espresso machines and integrated LED lighting?</summary><p style="margin:10px 0 0;font-size:14.5px!important;line-height:1.6!important;color:var(--ev-sub)">Yes. Concealed daylight LED illumination (contactless hand-wave sensor or touch sensor) is fitted as standard across our arched and glazed series, and the 56–65 cm vertical alcove clearance comfortably accommodates domestic espresso machines, grinders, pour-over stands, and boiling-water taps.</p></details>
<details style="background:#fff;border:1px solid var(--ev-border);border-radius:10px;padding:16px 18px"><summary style="font-weight:600;font-size:15px;cursor:pointer;color:var(--ev-ink)">How are the coffee corners packaged, delivered, and installed in the UK?</summary><p style="margin:10px 0 0;font-size:14.5px!important;line-height:1.6!important;color:var(--ev-sub)">All units are exported in reinforced shock-absorbing crates directly to UK mainland postcodes with numbered assembly diagrams and pre-drilled soft-close hinge and runner fittings. You can request a direct single-unit or multi-unit trade quote via WhatsApp or our enquiry desk.</p></details>
</div></div>
</section>
"""

comp_path = Path("/Users/macair1/projects/cabivellaUK/src/components/CoffeeCornersCatalog.astro")
comp_path.write_text(component_astro, encoding="utf-8")
print("Wrote:", comp_path, "size:", len(component_astro))
