# -*- coding: utf-8 -*-
"""
Batch 4 Collections Data:
1. ELECTRICAL_PRODUCTS: Cloned & differentiated from https://www.karelmar.com/urunler/
   Target Collection: https://cabivella.co.uk/materials-supply/collections/electrical/
   (24 Enterprise Products covering Low/Medium Voltage Energy Cables, Architectural Indoor/Outdoor Lighting, Cable Management, and Switchgear)

2. LANDSCAPE_PRODUCTS: Cloned & differentiated from https://eurostore.com.tr/zemin
   Target Collection: https://cabivella.co.uk/materials-supply/collections/landscape/ (also mirrored into timber if requested)
   (22 Enterprise Products covering Tumbled Decorative Aggregates, Granite Setts, Basalt & Travertine Paving, Kerbs, Steps, Stepping Stones, Garden Sockets, and Architectural Decking)
"""

ELECTRICAL_PRODUCTS = [
    # Section 1: Power, Fire-Resistant & Low/Medium Voltage Cables
    {
        "id": "CB-EL-0001",
        "name": "Cabivella PyroSafe FP200 Gold Fire-Resistant Low Voltage Cable",
        "slug": "cabivella-pyrosafe-fp200-fire-resistant-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "High-integrity, fire-resistant low voltage power and control cable conforming to BS 7629-1 and BS 5839-1 (Enhanced 120 mins). Silicon rubber insulation with LSZH (Low Smoke Zero Halogen) sheath for emergency lighting and fire alarms.",
        "conductor": "Plain annealed copper Class 1 / Class 2 (BS EN 60228)",
        "fire_rating": "PH 120 (120 min fire integrity under BS EN 50200)",
        "voltage": "300 / 500 V",
        "sheath": "LSZH Thermoplastic Compound (BS EN 50363-8)",
        "img_src": "/assets/img/electrical/cable-fire-resistant.svg",
        "specs": [
            ("Standard", "BS 7629-1 / BS 5839-1 / BS EN 50200 PH120"),
            ("Conductor Class", "Class 2 Stranded Annealed Copper (BS EN 60228)"),
            ("Insulation", "High-performance ceramifying silicone rubber"),
            ("Screening", "Aluminium/Polyester laminated tape with tinned copper drain wire"),
            ("Outer Sheath", "Low Smoke Zero Halogen (LSZH) Red or White"),
            ("Operating Temperature", "-40°C to +90°C (Short circuit 250°C)"),
            ("Bending Radius", "6 x Overall Diameter"),
            ("Third-Party Approval", "BASEC & LPCB Certified for UK building compliance")
        ]
    },
    {
        "id": "CB-EL-0002",
        "name": "Cabivella ArmouredPro XLPE SWA Steel Wire Armoured Mains Cable",
        "slug": "cabivella-armouredpro-xlpe-swa-mains-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "Heavy-duty 600/1000V multi-core power cable with XLPE insulation, galvanised steel wire armour (SWA), and robust LSZH outer bedding. Engineered for direct burial underground power networks and industrial plant sub-mains.",
        "conductor": "Class 2 Stranded Copper Conductor",
        "armour": "Galvanised Steel Wire Armour (SWA)",
        "voltage": "600 / 1000 V (BS 5467 / BS 6724)",
        "insulation": "Cross-linked Polyethylene (XLPE)",
        "img_src": "/assets/img/electrical/cable-swa-armoured.svg",
        "specs": [
            ("Standard", "BS 6724 / BS EN 60332-1-2 / IEC 60502-1"),
            ("Voltage Rating", "0.6/1 kV (Um = 1.2 kV)"),
            ("Insulation Material", "XLPE (Cross-linked Polyethylene) GP8 to BS 7655-1.3"),
            ("Armour Layer", "Galvanised round steel wires (BS EN 10257-1)"),
            ("Flame Retardance", "BS EN 60332-3-24 Category C (Flame propagated self-extinguishing)"),
            ("Smoke Emission", "Low Smoke to BS EN 61034-2 (Transmittance > 60%)"),
            ("Acid Gas Emission", "Zero Halogen < 0.5% HCl to BS EN 60754-1"),
            ("Installation", "Direct burial, ducts, cable trays, or outdoor air")
        ]
    },
    {
        "id": "CB-EL-0003",
        "name": "Cabivella Solarix H1Z2Z2-K TÜV Certified Photovoltaic Solar Cable",
        "slug": "cabivella-solarix-h1z2z2-k-photovoltaic-solar-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "Dual-certified TÜV and BS EN 50618 cross-linked solar PV cable engineered for commercial solar farms and rooftop photovoltaic arrays. 1500V DC rated with extreme ozone, UV, and water submersion resistance (AD8).",
        "conductor": "Class 5 Tinned Flexible Copper (BS EN 60228)",
        "voltage": "1500 V DC (1800 V DC max)",
        "rating": "BS EN 50618 H1Z2Z2-K / TÜV 2 Pfg 1169",
        "lifespan": "Expected service life > 30 years at 90°C",
        "img_src": "/assets/img/electrical/cable-solar-pv.svg",
        "specs": [
            ("Standard", "BS EN 50618 / IEC 62930 / TÜV Rheinland certified"),
            ("Rated Voltage", "AC: 1.0/1.0 kV | DC: 1.5/1.5 kV (Max system DC 1.8 kV)"),
            ("Conductor", "Electrolytic tinned copper Class 5 fine-stranded wire"),
            ("Insulation & Sheath", "Cross-linked halogen-free copolymer compound"),
            ("UV & Weathering", "EN 50618 Annex E (Weathering / UV resistance test)"),
            ("Flame Retardance", "EN 60332-1-2 / CPR Class Dca-s2,d2,a1"),
            ("Temperature Range", "-40°C to +120°C max conductor temperature"),
            ("Halogen Content", "Zero halogen conforming to EN 50525-1 Annex B")
        ]
    },
    {
        "id": "CB-EL-0004",
        "name": "Cabivella OptiCore Multi-Tube Indoor/Outdoor Fibre Optic Cable",
        "slug": "cabivella-opticore-indoor-outdoor-fibre-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "High-density singlemode OS2 and multimode OM4 loose tube optical fibre cable with water-blocking yarn, glass yarn rodent protection, and flame-retardant LSZH jacket conforming to Euroclass B2ca-s1a,d0,a1.",
        "fibre_count": "12 to 144 Core Single-Mode (G.657.A1 / OS2)",
        "cpr_class": "Euroclass B2ca-s1a,d0,a1 (Highest UK Building Safety)",
        "water_block": "Dry water-swellable tape and yarns",
        "sheath": "UV-resistant LSZH Black / Violet",
        "img_src": "/assets/img/electrical/cable-fibre-optic.svg",
        "specs": [
            ("Standard", "ISO/IEC 11801 / BS EN 50173 / ITU-T G.657.A1"),
            ("Core Types Available", "OS2 Singlemode (9/125µm) / OM4 Multimode (50/125µm)"),
            ("Armour / Strength", "Dielectric E-glass yarn peripheral strength elements"),
            ("Crush Resistance", "2000 N/100mm (IEC 60794-1-2-E3)"),
            ("Tensile Performance", "Installation: 1500 N | Permanent: 600 N"),
            ("Water Penetration", "Water-tight to IEC 60794-1-2-F5B (no water leak at 1m head)"),
            ("Reaction to Fire", "BS EN 13501-6 Euroclass B2ca-s1a,d0,a1"),
            ("Jacket Compound", "Heavy-duty low smoke zero halogen (LSZH) UV stabilized")
        ]
    },
    {
        "id": "CB-EL-0005",
        "name": "Cabivella MediVolt 11kV/33kV Medium Voltage Power Cable",
        "slug": "cabivella-medivolt-medium-voltage-11kv-33kv-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "Three-core and single-core medium voltage distribution cable with copper wire screen, aluminium/steel wire armour, and triple extrusion bonded semiconductor layers. Fully accredited for private DNO substations and microgrid feeds.",
        "voltage": "6.35/11 (12) kV to 19/33 (36) kV",
        "conductor": "Compacted circular stranded copper or aluminium",
        "standard": "BS 7870-4.10 / IEC 60502-2",
        "insulation": "High dielectric strength dry-cured XLPE",
        "img_src": "/assets/img/electrical/cable-medium-voltage.svg",
        "specs": [
            ("Standard", "BS 7870-4.10 / IEC 60502-2 / ENA TS 09-12"),
            ("Voltage Rating", "11 kV / 22 kV / 33 kV system distribution"),
            ("Conductor Screen", "Extruded semi-conducting compound bonded to XLPE"),
            ("Insulation", "Super-clean dry nitrogen-cured cross-linked polyethylene"),
            ("Metallic Screen", "Helically applied copper wires with equalising copper tape"),
            ("Bedding & Armour", "Extruded MDPE/LSZH with galvanised steel/aluminium wires"),
            ("Outer Jacket", "Heavy-duty red or black MDPE (Type TS2) or LSZH"),
            ("Partial Discharge", "< 2 pC at 1.73 Uo (Factory routine test certificate supplied)")
        ]
    },
    {
        "id": "CB-EL-0006",
        "name": "Cabivella FlexoPower H07RN-F Heavy-Duty Rubber Trailing Cable",
        "slug": "cabivella-flexopower-h07rn-f-heavy-duty-rubber-cable",
        "section": "Power, Fire-Resistant & Low Voltage Cables",
        "desc": "Heavy-duty industrial EPR rubber insulated and PCP/CPE elastomeric sheathed flexible power cable. Resistant to mechanical impact, oils, grease, and continuous submersion (AD8), ideal for temporary site power distribution and cranes.",
        "standard": "BS EN 50525-2-21 / H07RN-F",
        "voltage": "450 / 750 V",
        "compound": "EPR (Ethylene Propylene Rubber) EI4 insulation",
        "outer_sheath": "Cross-linked synthetic elastomer EM2 (Heavy Duty)",
        "img_src": "/assets/img/electrical/cable-rubber-trailing.svg",
        "specs": [
            ("Standard", "BS EN 50525-2-21 / HAR certified H07RN-F"),
            ("Voltage Rating", "450/750V (Fixed installation: 0.6/1 kV)"),
            ("Conductor", "Class 5 flexible plain annealed copper (BS EN 60228)"),
            ("Insulation", "EPR compound type EI4 to EN 50363-2-1"),
            ("Sheath Quality", "Polychloroprene or equivalent synthetic elastomer EM2"),
            ("Oil Resistance", "EN 60811-404 (Immersion in IRM 902 oil at 100°C)"),
            ("Ozone & Weather", "Ozone resistant to EN 50396 Clause 8.1.3"),
            ("Flexibility", "Continuous flexing at -25°C to +60°C; fixed up to +90°C")
        ]
    },

    # Section 2: Architectural Indoor LED Lighting & Luminaires
    {
        "id": "CB-EL-0007",
        "name": "Cabivella LuminaGrid UGR<19 Architectural Microprismatic LED Panel",
        "slug": "cabivella-luminagrid-ugr19-microprismatic-led-panel",
        "section": "Architectural Indoor LED Lighting & Luminaires",
        "desc": "Ultra-slim 600x600 mm modular ceiling LED luminaire engineered with multilayer PMMA laser light guide plate and microprismatic diffuser achieving unified glare rating UGR < 19, 140 lm/W efficacy, and flicker-free Tridonic DALI-2 drivers.",
        "dimensions": "595 x 595 x 9 mm",
        "efficacy": "140 lumens/Watt (CRI > 90)",
        "glare_rating": "UGR < 19 (EN 12464-1 Office compliant)",
        "driver": "DALI-2 / PUSH-DIM Flicker-Free (< 1%)",
        "img_src": "/assets/img/electrical/lighting-led-panel.svg",
        "specs": [
            ("Standard", "BS EN 60598-1 / BS EN 60598-2-2 / EN 12464-1"),
            ("Luminous Flux", "4,200 lm at 30W system consumption (140 lm/W)"),
            ("Colour Temperature", "3000K Warm / 4000K Neutral / Tunable White 2700K-6500K"),
            ("Colour Rendering", "Ra (CRI) > 90 with R9 > 50 for true architectural vibrancy"),
            ("Optical Diffuser", "Anti-yellowing German PMMA microprismatic lens (UGR<19)"),
            ("Driver Lifetime", "Tridonic / Philips Xitanium DALI-2 (B10 L80 > 100,000h)"),
            ("Emergency Option", "Integrated 3-hour self-test LiFePO4 emergency battery pack"),
            ("Ingress Protection", "IP44 front / IP20 rear (Cleanroom IP65 variant available)")
        ]
    },
    {
        "id": "CB-EL-0008",
        "name": "Cabivella LinearTrack Magnetic 48V Low-Voltage Architectural Track",
        "slug": "cabivella-lineartrack-magnetic-48v-architectural-track",
        "section": "Architectural Indoor LED Lighting & Luminaires",
        "desc": "Minimalist recessed, surface, and suspended 48V DC magnetic track system. Enables tool-free click-and-lock positioning of micro-spotlights, linear diffusers, and adjustable accent wall-washers with Casambi wireless Bluetooth mesh control.",
        "voltage": "48V DC Safe Extra Low Voltage (SELV)",
        "mounting": "Trimless Plaster-in, Surface or Suspended",
        "control": "Casambi Wireless BLE / DALI-2 Broadcast",
        "finish": "Fine Textured Architectural Matt Black / Pure White",
        "img_src": "/assets/img/electrical/lighting-magnetic-track.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-1 / BS EN 60570 Electrical supply track systems"),
            ("Extrusion Profile", "High-grade 6063-T6 extruded architectural aluminium"),
            ("Conductor Busbars", "4 continuous insulated copper conductors (48V DC + Data)"),
            ("Module Locking", "High-strength Neodymium magnetic attraction + mechanical latch"),
            ("Dimming Control", "DALI-2 DT8 / Casambi wireless BLE mesh / 1-10V"),
            ("Spotlight Modules", "Adjustable 15° / 24° / 38° beam angle, CRI 95+ Bridgelux COB"),
            ("Linear Modules", "Opal or micro-louvre diffuse glare-free general lighting"),
            ("System Power", "Up to 300W per continuous run with remote Meanwell driver")
        ]
    },
    {
        "id": "CB-EL-0009",
        "name": "Cabivella AccentPro Deep-Baffle Anti-Glare Recessed Architectural Downlight",
        "slug": "cabivella-accentpro-deep-baffle-recessed-downlight",
        "section": "Architectural Indoor LED Lighting & Luminaires",
        "desc": "Precision architectural downlight featuring a 50mm recessed baffle design providing complete 40° visual cut-off. High-CRI 98 Citizen COB LED chip with cold-forged aluminium passive heatsink and IP65 wet-location rating.",
        "cut_off": "40° Visual Cut-Off Angle (Zero Glare)",
        "cri": "CRI > 98 (R9 > 90) Museum Grade",
        "power": "12W / 18W / 25W (up to 2,600 lm)",
        "ip_rating": "IP65 Waterproof Front (Bathrooms & Spas)",
        "img_src": "/assets/img/electrical/lighting-recessed-downlight.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-2 / Part L compliant / Part B 90min fire-rated"),
            ("Acoustic / Fire", "Conforms to BS 476 Part 21 (30, 60, 90 mins solid timber joists)"),
            ("LED Light Source", "Citizen CLU028 6th Gen COB LED module"),
            ("Optical Beam", "Facet-cut vacuum metallised specular reflector (18°, 28°, 45°)"),
            ("Heatsink", "Cold-forged 1070 pure aluminium (Tc < 65°C at Ta 40°C)"),
            ("Finishes", "Die-cast bezel in Matt White, Jet Black, Bronze or Brushed Brass"),
            ("Dimming", "Phase Mains (Trailing Edge), DALI-2 or 0-10V"),
            ("Warranty", "5-year comprehensive commercial project replacement warranty")
        ]
    },
    {
        "id": "CB-EL-0010",
        "name": "Cabivella ContourFlex IP68 High-Output Architectural Silicone LED Neon",
        "slug": "cabivella-contourflex-ip68-architectural-silicone-led-neon",
        "section": "Architectural Indoor LED Lighting & Luminaires",
        "desc": "Monolithic food-grade silicone encapsulated linear LED neon with side and top-bending profiles. UV-resistant, saltwater resistant, dot-free homogeneous luminance with 3-Step MacAdam ellipse colour consistency for coffer ceilings and facade reveals.",
        "ip_rating": "IP68 Submersible up to 2m (BS EN 60529)",
        "bending": "Vertical Top-Bend or Horizontal Side-Bend (Rmin 60mm)",
        "led_density": "160 LEDs/m (High Uniformity Dot-Free)",
        "cct": "2400K, 2700K, 3000K, 4000K, RGBW (4-in-1)",
        "img_src": "/assets/img/electrical/lighting-led-neon-flex.svg",
        "specs": [
            ("Standard", "BS EN 62031 / BS EN 60598-1 / UL 2108"),
            ("Operating Voltage", "24V DC Constant Voltage"),
            ("Power Consumption", "10W / 15W / 20W per linear metre"),
            ("Silicone Grade", "Dow Corning structural optical silicone extrusion"),
            ("Chemical Resistance", "Chlorine, saline mist, ammonia, and UV resistant (ASTM G154)"),
            ("Impact Resistance", "IK08 mechanical impact rated"),
            ("Cutting Unit", "50 mm incremental cut points with injection moulded end-caps"),
            ("Lifespan", "L80 B10 > 60,000 operating hours")
        ]
    },

    # Section 3: Commercial & Industrial Lighting, Highbays & Floodlights
    {
        "id": "CB-EL-0011",
        "name": "Cabivella TitanBay IP65 Die-Cast Industrial UFO LED Highbay",
        "slug": "cabivella-titanbay-ip65-industrial-ufo-led-highbay",
        "section": "Commercial & Industrial Lighting, Highbays & Floodlights",
        "desc": "Heavy-duty industrial highbay luminaire engineered with ADC12 die-cast aluminium housing and Lumileds 3030 LED array generating 160 lm/W. Fitted with Meanwell / Sosen 1-10V dimmable driver and plug-in microwave presence/daylight sensor.",
        "power": "100W / 150W / 200W (up to 32,000 lm)",
        "efficacy": "160 lm/W System Efficiency",
        "impact": "IK10 Vandal / Impact Resistant (BS EN 62262)",
        "protection": "IP65 Wet & Dusty Environment Sealed",
        "img_src": "/assets/img/electrical/lighting-ufo-highbay.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-1 / EN 55015 / EN 61000-3-2"),
            ("LED Engine", "Lumileds Luxeon 3030 2D high-flux emitters"),
            ("Optics", "60°, 90°, 120° polycarbonate optical lens with UV inhibitor"),
            ("Thermal Design", "Integrated finned convective air-flow heat dissipation channels"),
            ("Driver", "Meanwell HBG / Inventronics isolated 100-277V AC driver"),
            ("Surge Protection", "6 kV line-to-line, 10 kV line-to-earth built-in surge suppressor"),
            ("Smart Controls", "Zhaga Book 18 socket for twist-and-lock microwave PIR sensor"),
            ("Suspension", "Forged eye-bolt hook, steel safety wire, or adjustable bracket")
        ]
    },
    {
        "id": "CB-EL-0012",
        "name": "Cabivella ProFlood IP66 Asymmetric Stadium & Facade LED Floodlight",
        "slug": "cabivella-proflood-ip66-asymmetric-facade-floodlight",
        "section": "Commercial & Industrial Lighting, Highbays & Floodlights",
        "desc": "High-powered exterior architectural floodlight with precise forward-throw asymmetric beam distribution (55° x 115°) eliminating upward light pollution (ULR 0%). Ideal for architectural building facades, logistics yards, and sports fields.",
        "power": "150W / 300W / 600W (up to 96,000 lm)",
        "light_pollution": "ULR 0% (Dark Sky Approved / Zero Upward Light)",
        "casing": "Marine-grade powder-coated ADC12 aluminium",
        "wind_load": "Aerodynamic profile tested to 160 km/h wind gusts",
        "img_src": "/assets/img/electrical/lighting-led-floodlight.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-5 / Institution of Lighting Professionals (ILP) GN01"),
            ("Optical System", "Patented micro-reflector asymmetric forward throw (Type IV / V)"),
            ("Glass Cover", "4 mm thermal shock resistant toughened safety glass"),
            ("Salt Spray", "1000-hour ASTM B117 salt spray corrosion resistant coating"),
            ("Mounting Bracket", "Graduated heavy-duty steel yoke bracket with 180° rotation lock"),
            ("Breathable Valve", "Gore-Tex breathable pressure compensation valve prevents condensation"),
            ("Power Factor", "> 0.98 with THD < 10%"),
            ("Operating Ambient", "-35°C to +50°C continuous operation")
        ]
    },
    {
        "id": "CB-EL-0013",
        "name": "Cabivella AquaProof IP66 Non-Corrosive Twin LED Tri-Proof Batten",
        "slug": "cabivella-aquaproof-ip66-twin-led-triproof-batten",
        "section": "Commercial & Industrial Lighting, Highbays & Floodlights",
        "desc": "Corrosion, moisture, and dust resistant vapour-proof LED batten luminaire with heavy-duty polycarbonate body and stainless steel grade 316 retaining clips. Through-wired with fast-connect terminals for continuous car park and plant room runs.",
        "length": "1200 mm (4ft) / 1500 mm (5ft)",
        "material": "Polycarbonate body + Opal IK08 PC diffuser",
        "clips": "Grade 316 Stainless Steel Quick-Release Clips",
        "through_wiring": "Integrated 5-core 2.5 mm² through-wiring loom",
        "img_src": "/assets/img/electrical/lighting-triproof-batten.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-1 / D-Mark approved for fire-hazard facilities"),
            ("Ingress & Impact", "IP66 waterproof & dustproof / IK08 mechanical impact"),
            ("Glow Wire Test", "850°C self-extinguishing polycarbonate housing"),
            ("Gasket", "Seamless poured polyurethane (PUR) closed-cell gasket"),
            ("Cable Glands", "Dual M20 nylon cable glands at both ends with blind grommets"),
            ("Emergency Mode", "Optional 3-hour maintained emergency battery with green status LED"),
            ("Microwave Sensor", "Internal concealed microwave step-dimming corridor function"),
            ("Mounting", "Stainless steel surface snap-brackets or suspended chain mounts")
        ]
    },

    # Section 4: Cable Containment, Steel Trays & Trunking Systems
    {
        "id": "CB-EL-0014",
        "name": "Cabivella HDG-CableTray Heavy-Duty Perforated Hot-Dip Galvanised Steel Tray",
        "slug": "cabivella-hdg-cabletray-heavy-duty-galvanised-steel-tray",
        "section": "Cable Containment, Steel Trays & Trunking Systems",
        "desc": "Engineered perforated cable tray manufactured from continuous roll-formed structural steel hot-dip galvanised to BS EN ISO 1461 (> 55µm zinc coating). Features 50mm return flanges and slot perforation pattern for rapid cable tie fastening.",
        "coating": "Hot-Dip Galvanised to BS EN ISO 1461",
        "width": "100 mm to 600 mm (Flange height 50mm)",
        "steel_gauge": "1.5 mm / 2.0 mm structural sheet steel",
        "fire_integrity": "Tested to DIN 4102-12 (E30 to E90 fire survival)",
        "img_src": "/assets/img/electrical/containment-cable-tray.svg",
        "specs": [
            ("Standard", "BS EN 61537 / BS EN ISO 1461 / DIN 4102-12"),
            ("Material", "Structural carbon steel S250GD or cold-rolled DX51D"),
            ("Zinc Coating Thickness", "Average 55 µm – 70 µm zinc layer thickness"),
            ("Safe Working Load", "Up to 180 kg/m over 2.0 m support spans (SWL verified)"),
            ("Perforation Geometry", "Staggered 7x25 mm transverse and longitudinal punch slots"),
            ("Return Flange", "Double folded smooth return flange to protect cable sheath"),
            ("Fittings Range", "Factory manufactured 90° bends, equal tees, reducers and risers"),
            ("Earthing Continuity", "Electrical continuity < 5 mΩ across bolted splice joints")
        ]
    },
    {
        "id": "CB-EL-0015",
        "name": "Cabivella SteelMesh Grade 316 Stainless Steel Wire Mesh Cable Basket",
        "slug": "cabivella-steelmesh-wire-mesh-cable-basket",
        "section": "Cable Containment, Steel Trays & Trunking Systems",
        "desc": "Open architecture wire mesh cable basket fabricated from 4.0 mm – 5.0 mm cold-drawn steel wire welded on a 50x100 mm grid. Chamfered safety-edge design prevents cable snagging and optimizes airflow in data centres and IT server risers.",
        "mesh_grid": "50 x 100 mm Wire Matrix",
        "wire_diameter": "Ø 4.0 mm – Ø 5.0 mm High-Tensile Steel",
        "material": "Electro-galvanised or AISI 316L Stainless Steel",
        "airflow": "95% Open Area (Zero Heat Trapping)",
        "img_src": "/assets/img/electrical/containment-wire-basket.svg",
        "specs": [
            ("Standard", "BS EN 61537 Cable tray and cable ladder systems"),
            ("Fire Performance", "Tested under DIN 4102-12 (E90 electrical circuit integrity)"),
            ("Safety Edge", "T-welded safety edge on upper perimeter to avoid damage to data cables"),
            ("Fast-Fix Splice", "Toolless spring-steel snap-in coupler clamps"),
            ("Corrosion Resistance", "316L Acid-resistant stainless steel for marine & food processing"),
            ("Data Integrity", "Certified for high-speed Cat 6A / Cat 7 and fibre optic looms"),
            ("Load Rating", "Class II load rating compliant with IEC 61537"),
            ("Standard Length", "3000 mm precision lengths with pre-marked bend cut guides")
        ]
    },
    {
        "id": "CB-EL-0016",
        "name": "Cabivella PowerTrack Three-Compartment Skirting & Dado Trunking",
        "slug": "cabivella-powertrack-three-compartment-dado-trunking",
        "section": "Cable Containment, Steel Trays & Trunking Systems",
        "desc": "High-impact rigid PVCu or extruded anodised aluminium three-compartment perimeter dado trunking with segregated data, power, and low-voltage channels. Compatible with UK standard BS 4662 dry-lining boxes and BS 1363 twin sockets.",
        "profile": "170 x 50 mm Curved Chamfered Profile",
        "compartments": "3 segregated channels with clip-in dividers",
        "material": "Heavy-Duty Flame-Retardant PVCu or Aluminium",
        "screening": "Aluminium screening divider for zero EMI interference",
        "img_src": "/assets/img/electrical/containment-dado-trunking.svg",
        "specs": [
            ("Standard", "BS 4678-4 / BS EN 50085-1 / BS EN 50085-2-1"),
            ("Impact Resistance", "Medium / Heavy impact strength up to 6 Joules (IK08)"),
            ("Flame Retardance", "Self-extinguishing PVCu conforming to UL 94 V-0"),
            ("Data Screening", "Shielded copper/fibre channel exceeds BS EN 50174-2 separation"),
            ("Socket Mounting", "Accepts standard 1-gang and 2-gang 35mm accessory boxes"),
            ("Corners & Bends", "Pre-moulded internal, external, and flat angle variable corners"),
            ("Colour Finish", "Pure White RAL 9010 or Architectural Natural Anodised Silver"),
            ("Cleanability", "Smooth anti-static wipe-clean surface for healthcare & education")
        ]
    },
    {
        "id": "CB-EL-0017",
        "name": "Cabivella RigidConduit Class 4 Hot-Dip Galvanised Steel Conduit",
        "slug": "cabivella-rigidconduit-class-4-galvanised-steel-conduit",
        "section": "Cable Containment, Steel Trays & Trunking Systems",
        "desc": "Heavy-duty threaded steel electrical installation conduit conforming to BS EN 61386-21 Class 4. Heavy corrosion protection inside and outside for demanding commercial parking structures, tunnels, and mechanical plant rooms.",
        "diameter": "20 mm / 25 mm / 32 mm OD",
        "classification": "Class 4 (Heavy Corrosion & High Mechanical Protection)",
        "threading": "Standard ISO Metric threads (1.5mm pitch) both ends",
        "length": "3.75 metre standard threaded tubes with coupling",
        "img_src": "/assets/img/electrical/containment-steel-conduit.svg",
        "specs": [
            ("Standard", "BS EN 61386-1 / BS EN 61386-21 / BS 4568 Class 4"),
            ("Resistance to Compression", "Very Heavy (Class 5 > 4000 N / 50mm)"),
            ("Resistance to Impact", "Very Heavy (Class 5 > 6.8 Joules at -45°C)"),
            ("Temperature Rating", "-45°C to +400°C permanent service temperature"),
            ("Internal Weld Seam", "Completely flash-removed internal weld to eliminate cable snagging"),
            ("Coating Quality", "Hot-dip galvanised interior and exterior (> 400 g/m² zinc mass)"),
            ("Accessories", "Malleable cast iron junction boxes (terminal, through, angle, tee)"),
            ("Earthing Path", "Guaranteed low impedance continuous earth return path")
        ]
    },

    # Section 5: Switchgear, Circuit Protection & Enclosures
    {
        "id": "CB-EL-0018",
        "name": "Cabivella ModuSafe 10kA Type B/C RCBO Circuit Breaker",
        "slug": "cabivella-modusafe-10ka-rcbo-circuit-breaker",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Compact single-module (18mm) combined miniature circuit breaker (MCB) and residual current device (RCD) with switched neutral. 10kA breaking capacity conforming to BS EN 61009-1 with Type A residual current detection.",
        "breaking_capacity": "10 kA (BS EN 61009-1 / IEC 61009-1)",
        "pole": "1P+N (Switched Neutral in 1 Mod width)",
        "rcd_type": "Type A (AC & pulsating DC fault current protection)",
        "current_ratings": "6A, 10A, 16A, 20A, 32A, 40A (B & C Tripping Curve)",
        "img_src": "/assets/img/electrical/switchgear-rcbo.svg",
        "specs": [
            ("Standard", "BS EN 61009-1 / BS EN 62423 / UK 18th Edition BS 7671"),
            ("Rated Operational Voltage", "230V AC (50/60 Hz)"),
            ("Residual Sensitivity", "IΔn = 30 mA (Instantaneous disconnection < 40ms)"),
            ("Tripping Characteristics", "Type B (3-5 In) for domestic / Type C (5-10 In) commercial"),
            ("Terminals", "Bi-connect tunnel terminals for comb busbar and cable up to 16 mm²"),
            ("Mechanical Endurance", "20,000 operations | Electrical endurance 10,000 operations"),
            ("Trip Flag Indicator", "Separate red/green contact position and fault trip indicator"),
            ("Locking Facility", "Integrated padlock lockout clip for safe isolation compliance")
        ]
    },
    {
        "id": "CB-EL-0019",
        "name": "Cabivella SurgePro Type 1+2+3 Combined Lightning & Surge Protection Device",
        "slug": "cabivella-surgepro-type-1-2-3-surge-protection-device",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Modular three-phase 4-pole surge arrester (SPD) combining high-energy spark gap and heavy-duty zinc oxide varistors. Provides coordinated Type 1, Type 2, and Type 3 surge mitigation protecting electronic equipment from direct lightning strikes.",
        "discharge_current": "Iimp = 25 kA (10/350 µs) per pole | Imax = 100 kA",
        "protection_level": "Up < 1.5 kV (Coordinated for all sensitive equipment)",
        "standard": "BS EN 62305 / BS EN 61643-11 / BS 7671 Section 443",
        "remote_signalling": "Volt-free changeover contact for BMS alert monitoring",
        "img_src": "/assets/img/electrical/switchgear-surge-spd.svg",
        "specs": [
            ("Standard", "BS EN 61643-11 / IEC 61643-11 / BS 7671 Chapter 44"),
            ("Network Topology", "TN-S, TN-C-S (PME) and TT earthing systems (3P+N)"),
            ("Response Time", "< 25 nanoseconds fast response time"),
            ("Visual Status", "Mechanical Green (Normal) / Red (Replacement required) flags"),
            ("Cartridge System", "Pluggable modules with vibration-proof retaining catches"),
            ("Short Circuit Rating", "50 kA / 50 Hz backup fuse coordination"),
            ("Enclosure Size", "4 DIN modules wide (72 mm rail mount)"),
            ("Thermal Disconnector", "Internal dynamic thermal fuse prevents thermal runaway")
        ]
    },
    {
        "id": "CB-EL-0020",
        "name": "Cabivella IsoMax 125A IP65 Weatherproof Rotary Isolator Switch",
        "slug": "cabivella-isomax-125a-ip65-rotary-isolator-switch",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Heavy-duty 3-pole and 4-pole enclosed load break rotary isolator switch housed in UV-stabilised flame-retardant polycarbonate. Padlockable in the OFF position with up to 3 padlocks for safe maintenance isolation of HVAC chillers and plant equipment.",
        "current_rating": "32A, 63A, 100A, 125A AC-23A High-Inductive Duty",
        "ip_rating": "IP65 Weatherproof & Hoseproof (BS EN 60529)",
        "interlock": "Lid interlocking handle prevents opening when switched ON",
        "poles": "3 Pole + Switched Neutral + Early Break Auxiliary Contact",
        "img_src": "/assets/img/electrical/switchgear-rotary-isolator.svg",
        "specs": [
            ("Standard", "BS EN 60947-3 / IEC 60947-3 Low-voltage switchgear"),
            ("Utilisation Category", "AC-21A (Resistive) / AC-23A (Frequent motor switching)"),
            ("Rated Insulation Voltage", "Ui = 690 V | Uimp = 8 kV"),
            ("Enclosure Enclosure", "High-impact UV-resistant polycarbonate casing (IK08)"),
            ("Cable Entries", "Threaded M25 / M32 / M40 knockouts on top, bottom, and rear"),
            ("Padlocking", "Red/Yellow high-visibility handle accepts 3 x 8mm padlocks"),
            ("Earth & Neutral", "Integrated heavy brass earth and neutral terminal bars"),
            ("Temperature Range", "-25°C to +70°C operational environment")
        ]
    },
    {
        "id": "CB-EL-0021",
        "name": "Cabivella FloorPod Heavy-Duty Cast Stainless Steel Floor Service Box",
        "slug": "cabivella-floorpod-stainless-steel-floor-box",
        "section": "Cable Containment, Steel Trays & Trunking Systems",
        "desc": "Screed-depth adjustable cast stainless steel and brass access floor box for commercial atriums, car showrooms, and high-traffic public concourses. Certified 3000 kg point load resistance with wet-wash IP66 waterproof sealing.",
        "load_capacity": "30 kN (3000 kg point load) to BS EN 50085-2-2",
        "finish": "Satin Brushed Grade 304 / 316 Stainless Steel Lid",
        "waterproof": "IP66 Water Jet Resistant when closed (Wet Cleaning)",
        "capacity": "4 Compartment (Power, Data, HDMI & Audio/Visual)",
        "img_src": "/assets/img/electrical/containment-floor-box.svg",
        "specs": [
            ("Standard", "BS EN 50085-2-2 Floor service systems / BS 1363"),
            ("Lid Construction", "8 mm solid stainless steel with rubber perimeter O-ring seal"),
            ("Cable Exit", "Retractable sealed cable snorkel protects leads from crushing"),
            ("Depth Adjustment", "Levelling screws allow 75 mm to 120 mm floor screed adjustment"),
            ("Socket Options", "Modular euro-plates for twin 13A sockets, RJ45 Cat6A, and USB-C"),
            ("Locking", "Turnbuckle coin-operated or security key tamper-proof latch"),
            ("Fire Compartmentation", "Optional intumescent fire stop pill for slab penetrations"),
            ("Corrosion Resistance", "Suitable for commercial terrazzo, marble, polished concrete, timber")
        ]
    },
    {
        "id": "CB-EL-0022",
        "name": "Cabivella PowerRail 250A-800A Compact Low-Impedance Busbar Trunking",
        "slug": "cabivella-powerrail-compact-copper-busbar-trunking",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Sandwich-construction compact busbar trunking system engineered with electrolytic copper conductors insulated with Class B (130°C) polyester film. Housed in extruded aluminium alloy casing acting as a 100% integral earth path with low voltage drop.",
        "rating": "250 A to 800 A (Up to 5000A for central risers)",
        "conductors": "99.99% E-Cu electrolytic copper bars (100% neutral)",
        "casing": "Extruded Aluminium Alloy (Zero magnetic hysteresis loss)",
        "tap_off": "Plug-in tap-off outlets every 1000 mm along the run",
        "img_src": "/assets/img/electrical/switchgear-busbar-trunking.svg",
        "specs": [
            ("Standard", "BS EN 61439-6 / IEC 61439-6 Busbar trunking systems"),
            ("Short-Circuit Strength", "Icw = 50 kA / 1 sec (Peak Ipk = 105 kA)"),
            ("Protection Degree", "IP55 standard / IP66 outdoor weatherproof"),
            ("Insulation System", "Multi-layer Class B Mylar / Polyester film insulation"),
            ("Joint Block", "Single-bolt torque-indicating joint pack for rapid installation"),
            ("Tap-Off Units", "Direct plug-in MCCB and fuse-switch units up to 250A"),
            ("Fire Barrier", "Internal fire barriers certified to BS 476 Part 20 (4 hours)"),
            ("Efficiency", "Low inductive reactance for optimal energy transmission efficiency")
        ]
    },
    {
        "id": "CB-EL-0023",
        "name": "Cabivella PaneloSteel IP65 Wall-Mounting Industrial Electrical Enclosure",
        "slug": "cabivella-panelosteel-ip65-wall-mount-enclosure",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Heavy-gauge continuous seam-welded steel distribution enclosure treated with iron-phosphate pre-treatment and electrostatic epoxy-polyester powder coating (RAL 7035). Features 2.0mm galvanised internal gear plate and seamless polyurethane door gasket.",
        "dimensions": "From 300x200x150 mm to 1200x800x300 mm",
        "ingress_protection": "IP65 (BS EN 60529) / NEMA 4, 12",
        "mechanical_impact": "IK10 Impact Resistance (BS EN 62262)",
        "door": "Reversible 120° opening door with double-bar quarter turn locks",
        "img_src": "/assets/img/electrical/switchgear-steel-enclosure.svg",
        "specs": [
            ("Standard", "BS EN 62208 Empty enclosures for low-voltage switchgear"),
            ("Sheet Steel Thickness", "Body: 1.5 mm | Door: 2.0 mm | Mounting Plate: 2.5 mm"),
            ("Gasket", "Continuous robotic CNC-poured polyurethane (PUR) seal"),
            ("Mounting Plate", "Full-size zinc-passivated galvanized steel plate with grid markings"),
            ("Gland Plate", "Removable bottom gland plate with pre-cut cable gasket"),
            ("Earthing Studs", "Copper-plated M8 earthing studs on body, door, and mounting plate"),
            ("Finish", "Textured epoxy polyester powder coat RAL 7035 light grey"),
            ("Accessories", "Wall fixing brackets, rain canopy, plinth and document pocket")
        ]
    },
    {
        "id": "CB-EL-0024",
        "name": "Cabivella SafeVolt 110V Site Isolation Transformer & Distribution Centre",
        "slug": "cabivella-safevolt-110v-site-isolation-transformer",
        "section": "Switchgear, Circuit Protection & Enclosures",
        "desc": "Site power safety transformer stepping down 230V/400V mains to 110V Centre Tapped to Earth (55V-0-55V) for UK construction tool safety (BS 7375 / BS 7671). Heavy-duty GRP or steel vented enclosure with IP44 BS 4343 industrial yellow socket outlets.",
        "power_rating": "5 kVA / 10 kVA Continuous (Tool duty 10/20 kVA)",
        "secondary_voltage": "110V CTE (55V to Earth maximum safety shock limit)",
        "sockets": "4 x 16A + 2 x 32A 110V 2P+E Yellow Outlets (BS EN 60309)",
        "enclosure": "Corrosion-resistant vented steel or heavy GRP",
        "img_src": "/assets/img/electrical/switchgear-site-transformer.svg",
        "specs": [
            ("Standard", "BS EN 61558-1 / BS EN 61558-2-23 / BS 7375 Construction sites"),
            ("Primary Voltage", "230V AC Single Phase or 415V AC Three Phase"),
            ("Safety Scheme", "Reduced Low Voltage System (RLV) complying with HSE GS6"),
            ("Winding Material", "Double wound Class F (155°C) copper magnet wire"),
            ("Thermal Protection", "Automatic thermal trip with manual reset push-button"),
            ("Protection Devices", "Double pole MCB on primary and individual MCBs on secondary sockets"),
            ("Portability", "Forklift skids and crane lifting lugs for rapid site relocation"),
            ("Duty Cycle", "Continuous duty cycle for commercial construction operations")
        ]
    }
]

LANDSCAPE_PRODUCTS = [
    # Section 1: Tumbled Decorative Aggregates, Pebbles & Cobbles
    {
        "id": "CB-LS-0001",
        "name": "Cabivella DolomiteSnow Pure White Tumbled Architectural Marble Pebbles",
        "slug": "cabivella-dolomitesnow-tumbled-white-marble-pebbles",
        "section": "Tumbled Decorative Aggregates, Pebbles & Cobbles",
        "desc": "Premium hand-selected pure crystalline white dolomite marble pebbles tumbled to a smooth rounded finish. Sourced from certified Aegean quarries, chemically inert and non-porous for luxury water features, gravel borders, and courtyard light wells.",
        "grading": "10-20 mm, 20-40 mm, 40-60 mm, 60-100 mm",
        "origin": "Selected Turkish White Crystalline Dolomite",
        "purity": "CaMg(CO3)2 > 98% Ultra-High Purity White",
        "packaging": "20 kg weatherproof bags or 1000 kg bulk tote bags",
        "img_src": "/assets/img/landscape/stone-dolomite-white.svg",
        "specs": [
            ("Standard", "BS EN 12620 / BS EN 13043 Aggregates for landscape works"),
            ("Shape", "Naturally tumbled rounded pebbles (Shape Index SI < 15)"),
            ("Bulk Density", "1,550 kg/m³ loose bulk volume"),
            ("Water Absorption", "< 0.3% (Highly frost resistant to BS EN 1367-1)"),
            ("Weathering Resistance", "Zero discoloration, acid-rain resistant, UV permanent white"),
            ("Chemical Inertness", "Non-toxic to aquatic flora and ornamental fish"),
            ("Typical Coverage", "Approx. 50 kg covers 1.0 m² at 35mm finished depth"),
            ("Applications", "Courtyards, Japanese gardens, water gardens, tree pits, green roofs")
        ]
    },
    {
        "id": "CB-LS-0002",
        "name": "Cabivella BlackAngel Deep Anthracite Tumbled Basalt Pebbles",
        "slug": "cabivella-blackangel-deep-anthracite-basalt-pebbles",
        "section": "Tumbled Decorative Aggregates, Pebbles & Cobbles",
        "desc": "Dense volcanic basalt decorative landscape stones tumbled to satin smoothness. Jet-black when wet, elegant dark charcoal grey when dry. High compressive strength and zero algae growth for contemporary minimalist landscape architecture.",
        "grading": "20-40 mm and 40-60 mm Calibrated",
        "rock_type": "Fine-Grained Extrusive Volcanic Basalt",
        "colour": "Charcoal Grey (Dry) / Jet Black Gloss (Wet)",
        "compressive": "> 180 MPa High Crushing Strength",
        "img_src": "/assets/img/landscape/stone-basalt-black.svg",
        "specs": [
            ("Standard", "BS EN 13383-1 Armourstone and decorative aggregates"),
            ("Specific Gravity", "2.85 g/cm³ high-density volcanic stone"),
            ("Freeze-Thaw", "Passed 56 cycles freeze-thaw with zero mass loss"),
            ("Wear Resistance", "Micro-Deval coefficient MDE < 12 (Very high hardness)"),
            ("pH Value", "Neutral (pH 7.1) - zero chemical leaching"),
            ("Packaging", "20 kg sealed poly sacks or 1-tonne bulk bags with bottom discharge"),
            ("Light Fastness", "100% natural volcanic mineral pigment, indefinite lifespan"),
            ("Sub-base", "Recommended on Cabivella GeoTextile membrane for weed suppression")
        ]
    },
    {
        "id": "CB-LS-0003",
        "name": "Cabivella EmeraldAngel Green Serpentine Tumbled Decorative Stones",
        "slug": "cabivella-emeraldangel-green-serpentine-pebbles",
        "section": "Tumbled Decorative Aggregates, Pebbles & Cobbles",
        "desc": "Unique olive-to-emerald green serpentine metamorphic landscape pebbles with natural white calcite veins. Machine-tumbled with rounded edges for reflective garden ponds, drainage margins, and architectural floral bedding borders.",
        "grading": "20-40 mm and 40-60 mm",
        "mineral": "Natural Serpentine Metamorphic Silicate",
        "hue": "Sage Olive to Deep Emerald Green",
        "finish": "Fine Satin Tumbled Texture",
        "img_src": "/assets/img/landscape/stone-serpentine-green.svg",
        "specs": [
            ("Standard", "BS EN 12620 Decorative garden aggregates"),
            ("Mohs Hardness", "4.5 to 5.5 on Mohs scale"),
            ("Water Absorption", "0.45% by weight (BS EN 1097-6)"),
            ("Frost Resistance", "Category F1 Frost resistant under BS EN 1367-1"),
            ("Tumble Quality", "Cleaned, washed, and dust-free packaging"),
            ("Algae Resistance", "Inherent mineral composition discourages moss formation"),
            ("Packaging", "20 kg commercial bags (50 bags per pallet = 1000 kg)"),
            ("Specification", "UK architectural landscape specification reference LS-AGG-GRN")
        ]
    },
    {
        "id": "CB-LS-0004",
        "name": "Cabivella RossoImperial Tumbled Red Porphyry & Marble Gravel",
        "slug": "cabivella-rossoimperial-tumbled-red-marble-gravel",
        "section": "Tumbled Decorative Aggregates, Pebbles & Cobbles",
        "desc": "Rich terracotta, burgundy, and imperial red decorative stone pebbles tumbled to remove all sharp angular edges. Provides striking contrast against green lawns, silver foliage, and buff natural stone paving.",
        "grading": "10-20 mm and 20-40 mm",
        "origin": "Anatolian Red Marble & Porphyry Quarries",
        "pigmentation": "100% Natural Iron Oxide Mineral Coloration",
        "slip_resistance": "Non-slip surface suitable for pathway mulch",
        "img_src": "/assets/img/landscape/stone-red-pebbles.svg",
        "specs": [
            ("Standard", "BS EN 13043 Aggregates for bituminous and surface treatments"),
            ("Hardness", "Compressive resistance > 140 N/mm²"),
            ("Density", "Apparent particle density 2.68 Mg/m³"),
            ("Solar Reflectance", "SRI 45 (Moderate heat island mitigation)"),
            ("Packaging", "Reinforced 20 kg bags and 1.0 m³ heavy-duty bulk bags"),
            ("Colour Stability", "Immune to sunlight fading, chlorine, and acid detergents"),
            ("Permeability", "High free-draining void ratio when laid on open-graded sub-base"),
            ("Quality Assurance", "Factory calibrated batch sieving conforming to ISO 9001")
        ]
    },

    # Section 2: Granite Setts, Natural Stone Paving & Kerbs
    {
        "id": "CB-LS-0005",
        "name": "Cabivella SilverGrey Fine-Picked Flamed Granite Paving Slabs",
        "slug": "cabivella-silvergrey-flamed-granite-paving-slabs",
        "section": "Granite Setts, Natural Stone Paving & Kerbs",
        "desc": "Hard-wearing fine-grained silver grey natural granite paving slabs with flamed thermal textured slip-resistant surface. Calibrated 50mm thickness engineered for heavy pedestrian traffic, civic squares, and vehicular driveways.",
        "dimensions": "600x600x50 mm / 900x600x50 mm / 600x300x50 mm",
        "finish": "Thermal Flamed Slip-Resistant Top Surface",
        "slip_resistance": "PTV > 70 (Extremely low slip risk in wet conditions)",
        "load_class": "Class 4 Vehicular Overrun (BS EN 1341)",
        "img_src": "/assets/img/landscape/stone-granite-slab.svg",
        "specs": [
            ("Standard", "BS EN 1341 Slabs of natural stone for external paving"),
            ("Petrographic Description", "Biotite granite with uniform light silver grey quartz matrix"),
            ("Flexural Strength", "16.8 MPa (BS EN 12372 lowest expected value)"),
            ("Water Absorption", "0.22% by weight (Class W1 BS EN 13755)"),
            ("Freeze-Thaw Resistance", "Passed 56 cycles freeze-thaw without loss of strength (Class F1)"),
            ("Abrasion Resistance", "15.2 mm (Class A2 heavy commercial pedestrian abrasion)"),
            ("Edge Detail", "Precision sawn edges with 2mm top edge chamfer"),
            ("Installation", "Laid on BS 7533-4 compliant permeable cementitious bedding mortar")
        ]
    },
    {
        "id": "CB-LS-0006",
        "name": "Cabivella Cropped Granite Paving Setts 100x100x100mm",
        "slug": "cabivella-cropped-granite-paving-setts-100mm",
        "section": "Granite Setts, Natural Stone Paving & Kerbs",
        "desc": "Traditional hand-cropped 100x100x100mm cubic granite setts. Naturally cleft on all 6 faces for authentic heritage cobblestone driveways, traffic-calming speed tables, and perimeter edging with extraordinary compressive resistance.",
        "dimensions": "100 x 100 x 100 mm (Cubic cropped setts)",
        "finish": "Natural Cleft Split Faces (All 6 Sides)",
        "crushing_strength": "Compressive strength > 220 MPa",
        "coverage": "Approx. 80-85 setts per m² (depending on joint width)",
        "img_src": "/assets/img/landscape/stone-granite-setts.svg",
        "specs": [
            ("Standard", "BS EN 1342 Setts of natural stone for external paving"),
            ("Dimensional Tolerance", "Class T1 / Class F1 to BS EN 1342"),
            ("Density", "2,650 kg/m³ bulk density"),
            ("Skid Resistance", "USRV > 75 (Unpolished skid resistance value wet)"),
            ("De-icing Salt", "Immune to de-icing chemical salts and frost heave"),
            ("Packaging", "Supplied in heavy-duty 1-tonne wooden crates or bulk bags"),
            ("Jointing System", "Compatible with high-strength epoxy resin or polymer sand grouts"),
            ("Architectural Heritage", "Authentic European cobblestone specification")
        ]
    },
    {
        "id": "CB-LS-0007",
        "name": "Cabivella BasaltRock Flamed Sawn Volcanic Paving Flags",
        "slug": "cabivella-basaltrock-flamed-sawn-volcanic-paving",
        "section": "Granite Setts, Natural Stone Paving & Kerbs",
        "desc": "Contemporary dark charcoal-to-black dense basalt paving flags. Sawn on all sides with a micro-flamed and brushed top surface, offering modern architectural elegance, deep color saturation, and unmatched structural durability.",
        "dimensions": "800x400x40 mm / 600x400x50 mm",
        "finish": "Flamed & Water-Brushed Satin Non-Slip",
        "porosity": "< 0.5% Ultra-Dense Volcanic Stone",
        "flexural": "Flexural strength > 22 MPa",
        "img_src": "/assets/img/landscape/stone-basalt-slab.svg",
        "specs": [
            ("Standard", "BS EN 1341 / BS 7533-8"),
            ("Rock Class", "Fine crystalline olivine basalt (Central Anatolian quarry origin)"),
            ("Thermal Conductivity", "Low solar absorption coefficient with high heat dissipation"),
            ("Slip Potential", "Pendulum Test Value (PTV) wet: 65+ (Low slip risk)"),
            ("Stain Resistance", "Factory treated with penetrating fluoropolymer oil-repellent sealer"),
            ("Tolerances", "Calibrated thickness +/- 1.5mm / Plan dimensions +/- 1mm"),
            ("Edge Profile", "Clean sawn square edge with pencil round arris"),
            ("Vehicular Rating", "Suitable for pedestrian zones and occasional service vehicle overrun")
        ]
    },
    {
        "id": "CB-LS-0008",
        "name": "Cabivella TravertinoIvory Tumbled Unfilled Exterior Travertine Pavers",
        "slug": "cabivella-travertinoivory-tumbled-exterior-travertine-pavers",
        "section": "Granite Setts, Natural Stone Paving & Kerbs",
        "desc": "Authentic Turkish Denizli cross-cut ivory travertine exterior paving tiles. Naturally textured open voids, tumbled rustic edges, and unfilled natural surface for swimming pool surrounds, patios, and sun decks that stay cool under foot.",
        "dimensions": "Opus Romano Pattern (600x400, 400x400, 400x200, 200x200 mm) x 30 mm",
        "finish": "Tumbled Unfilled Slip-Resistant Natural Travertine",
        "thermal_comfort": "Cool-Touch Surface (Does not absorb heat under direct sunlight)",
        "origin": "Denizli, Türkiye (World's Premier Travertine Basin)",
        "img_src": "/assets/img/landscape/stone-travertine-paver.svg",
        "specs": [
            ("Standard", "BS EN 1341 / BS EN 1469 Natural stone slabs"),
            ("Apparent Density", "2,420 kg/m³ to BS EN 1936"),
            ("Open Porosity", "6.5% natural breathable travertine voids"),
            ("Slip Rating", "R11 DIN 51130 / PTV wet > 58"),
            ("Pool Chemical Resistance", "Unaffected by salt chlorinators and swimming pool chemicals"),
            ("Freeze-Thaw", "Tested for 48 cycles freeze-thaw without surface spalling"),
            ("Modular Patterns", "Available in French Pattern (Opus 4-size modular pack) or single format"),
            ("Cleaning", "Washable with mild neutral stone cleaner; zero efflorescence")
        ]
    },
    {
        "id": "CB-LS-0009",
        "name": "Cabivella GraniteKerb Radius & Straight Sawn Chamfered Road Kerbs",
        "slug": "cabivella-granitekerb-sawn-chamfered-road-kerbs",
        "section": "Granite Setts, Natural Stone Paving & Kerbs",
        "desc": "Heavy-duty civic road kerbs sawn from solid silver-grey granite. Finished with a 125x255mm or 150x305mm profile and 45° bullnose/chamfer edge to guide carriageway runoff and resist vehicle wheel impacts along urban roads.",
        "profile": "125 x 255 mm / 150 x 305 mm Half-Battered or Chamfered",
        "length": "914 mm and 1000 mm Standard Lengths",
        "finish": "Fine-Picked / Flamed Face and Top Surface",
        "impact_class": "Class 1 Heavy Urban Vehicular Impact (BS EN 1343)",
        "img_src": "/assets/img/landscape/stone-granite-kerb.svg",
        "specs": [
            ("Standard", "BS EN 1343 Kerbs of natural stone for external paving"),
            ("Compressive Strength", "> 190 MPa (BS EN 1926)"),
            ("Bending Strength", "> 15 MPa (BS EN 12372)"),
            ("Radius Units", "Convex and concave curved kerbs from 1.0 m to 12.0 m radius"),
            ("Transition Units", "Dropper kerbs (left/right handover) for pedestrian crossings"),
            ("Water Absorption", "< 0.3% prevents frost-induced spalling"),
            ("Installation", "Laid on C20/25 concrete foundation with continuous haunching"),
            ("Lifetime", "Over 100-year design life in municipal infrastructure")
        ]
    },

    # Section 3: Natural Stone Steps, Stepping Stones & Edging
    {
        "id": "CB-LS-0010",
        "name": "Cabivella SolidStep Flamed Monolithic Natural Granite Step Treads",
        "slug": "cabivella-solidstep-flamed-monolithic-granite-steps",
        "section": "Natural Stone Steps, Stepping Stones & Edging",
        "desc": "Solid monolithic block stone steps sawn from single granite blocks. 1000x350x150mm dimensions with 50mm bullnose or pencil-round front arris, flamed non-slip tread surface, and calibrated risers for grand architectural entrance stairs.",
        "dimensions": "1000x350x150 mm / 1200x350x150 mm Solid Blocks",
        "finish": "Thermal Flamed Tread Surface + Sawn Sides",
        "edge_detail": "50mm Bullnose or 5mm Eased Arris on Leading Edge",
        "safety_grooves": "Optional 3 x 6mm sandblasted high-contrast hazard warning grooves",
        "img_src": "/assets/img/landscape/stone-monolithic-step.svg",
        "specs": [
            ("Standard", "BS EN 1341 / Building Regulations Approved Document K (Stairs)"),
            ("Tread Depth / Rise", "350mm Going / 150mm Riser (Conforms to BS 5395-1)"),
            ("Slip Resistance", "PTV > 65 wet (Approved for unsupervised public entrances)"),
            ("Weight", "Approx. 140 kg per 1-metre block unit"),
            ("Load Bearing", "High structural self-supporting span capability"),
            ("Corner Units", "Available as internal 90° and external wrap-around step returns"),
            ("Fixing Detail", "Stainless steel dowel pin holes pre-drilled on underside"),
            ("Visual Contrast", "Complies with Equality Act 2010 Part M step contrast requirements")
        ]
    },
    {
        "id": "CB-LS-0011",
        "name": "Cabivella SteppingRound Natural Sawn & Tumbled Circular Stepping Stones",
        "slug": "cabivella-steppinground-tumbled-circular-stepping-stones",
        "section": "Natural Stone Steps, Stepping Stones & Edging",
        "desc": "Circular and organic-shaped natural granite and sandstone stepping stones calibrated to 40mm thickness with non-slip flamed top. Sunk flush into manicured turf, pebble mulch, or gravel pathways to create effortless garden walkways.",
        "diameter": "Ø 400 mm / Ø 500 mm / Ø 600 mm",
        "thickness": "40 mm Calibrated (+/- 2mm)",
        "finish": "Flamed Non-Slip Top with Tumbled Soft Edges",
        "material": "Silver Granite / Fossil Sandstone / Charcoal Basalt",
        "img_src": "/assets/img/landscape/stone-stepping-stone.svg",
        "specs": [
            ("Standard", "BS EN 1341 Natural stone landscape pavers"),
            ("Weight", "Approx. 14 kg (Ø400mm) / 22 kg (Ø500mm) per stone"),
            ("Installation Method", "Set directly on sand-cement mortar bed or compacted gravel"),
            ("Mowing Clearance", "Laid flush with lawn level to allow direct lawnmower pass-over"),
            ("Frost Proof", "100% impervious to frost splitting and moss degradation"),
            ("Slip Resistance", "Pendulum test value PTV > 60 in wet conditions"),
            ("Packaging", "Palletised in reinforced wooden crates with protective separators"),
            ("Aesthetic", "Minimalist contemporary Japanese and English garden path aesthetic")
        ]
    },
    {
        "id": "CB-LS-0012",
        "name": "Cabivella EdgeLinear Flamed Granite Garden Border Edging Strips",
        "slug": "cabivella-edgelinear-flamed-granite-border-edging",
        "section": "Natural Stone Steps, Stepping Stones & Edging",
        "desc": "Precision sawn linear stone edging strips designed to demarcate gravel driveways, flowerbeds, and paving lawns. 1000x150x50mm profile prevents lateral migration of loose aggregates and provides sharp architectural delineation.",
        "dimensions": "1000 x 150 x 50 mm",
        "finish": "Sawn 4 sides with flamed top surface",
        "profile": "Square Edge with 2mm top chamfer",
        "strength": "High-density granite resisting soil pressure and lawn trimmers",
        "img_src": "/assets/img/landscape/stone-linear-edging.svg",
        "specs": [
            ("Standard", "BS EN 1343 Kerbs and edging units"),
            ("Linear Weight", "Approx. 20 kg per linear metre"),
            ("Alignment", "Precision square-cut ends for tight 3mm jointing"),
            ("Mortar Bed", "Installed on 100mm concrete bed with haunched back support"),
            ("Lawn Mower Resistance", "Withstands metal strimmer and nylon blade contact without chipping"),
            ("Colours Available", "Silver Grey, Midnight Black, and Warm Buff Granite"),
            ("Packaging", "50 pieces per heavy wooden crate (50 linear metres)"),
            ("Design Life", "Permanent architectural retaining solution")
        ]
    },

    # Section 4: Architectural Decking & Composite Outdoor Surfaces
    {
        "id": "CB-LS-0013",
        "name": "Cabivella ThermoDeck European Ash High-Stability Architectural Decking",
        "slug": "cabivella-thermodeck-european-ash-architectural-decking",
        "section": "Architectural Decking & Composite Outdoor Surfaces",
        "desc": "Chemical-free thermally modified European ash decking boards (ThermoWood Class Thermo-D at 215°C). Delivers Durability Class 1 (> 25 years in ground contact), extreme dimensional stability, and concealed clip installation.",
        "profile": "140 x 21 mm x 2400-3600 mm",
        "wood_species": "100% Certified European Ash (Fraxinus excelsior)",
        "durability": "Class 1 (BS EN 350-2 / Expected life > 30 years)",
        "fixation": "Concealed side-groove stainless steel clip system",
        "img_src": "/assets/img/landscape/timber-decking-ash.svg",
        "specs": [
            ("Standard", "BS EN 14915 Solid wood cladding and decking / Thermo-D"),
            ("Moisture Content", "Equilibrium moisture content 4% – 6% (Zero shrinkage)"),
            ("Surface Profile", "Smooth planed architectural face with eased 3mm edge radius"),
            ("Fire Reaction", "Class D-s2,d0 (Euroclass fire-retardant treatment available to B-s1,d0)"),
            ("Thermal Modification", "Pure steam and heat process (Zero chemical additives)"),
            ("Hardware", "Grade 316 A4 stainless steel hidden fastening clips with Torx screws"),
            ("Sub-frame Spacing", "Recommended joist centres: 400 mm on centre"),
            ("Eco Certification", "FSC 100% responsibly managed forest chain of custody")
        ]
    },
    {
        "id": "CB-LS-0014",
        "name": "Cabivella CompositeShield Co-Extruded Capped WPC Timber Decking",
        "slug": "cabivella-compositeshield-co-extruded-wpc-decking",
        "section": "Architectural Decking & Composite Outdoor Surfaces",
        "desc": "Second-generation capped wood-plastic composite (WPC) decking board protected by a 360-degree high-density polymer shield. Resists wine/oil staining, UV fading, and scratching with a deeply embossed 3D dual-tone natural timber grain.",
        "dimensions": "140 x 23 mm x 3600 mm",
        "shield": "360° Surlyn / HDPE Co-Extruded Protective Cap",
        "core": "60% Recycled Hardwood Fibres + 40% High-Grade Polyethylene",
        "slip_rating": "PTV > 45 wet (Class 2 Non-Slip Decking)",
        "img_src": "/assets/img/landscape/timber-composite-decking.svg",
        "specs": [
            ("Standard", "BS EN 15534-1 / BS EN 15534-4 Composites for decking"),
            ("Stain Resistance", "Zero absorption of oils, barbecue fats, and red wine (wipe clean)"),
            ("Fade Warranty", "25-year structural and stain/fade residential warranty"),
            ("Reversible Profile", "Dual-sided: Deep 3D Woodgrain on one side, Fine Grooved on reverse"),
            ("Thermal Expansion", "< 1.5 mm per linear metre under 40°C temperature delta"),
            ("Core Type", "Solid core extrusion (Zero hollow cavities for high point loading)"),
            ("Fasteners", "Narrow 4mm black polymer concealed clip with black stainless screws"),
            ("Colours", "Teak, Antique Oak, Silver Birch, Charcoal, and Walnut")
        ]
    },
    {
        "id": "CB-LS-0015",
        "name": "Cabivella IpeHardwood FSC Certified Brazilian Ironwood Decking",
        "slug": "cabivella-ipehardwood-fsc-brazilian-ironwood-decking",
        "section": "Architectural Decking & Composite Outdoor Surfaces",
        "desc": "World-renowned ultra-dense Brazilian Ipê hardwood decking. Naturally resistant to rot, termites, fire (Class A fire rated), and extreme wear without requiring chemical preservatives. Rich deep olive-brown tones with interlocked fine grain.",
        "dimensions": "145 x 21 mm x 2150 mm to 4850 mm Random Lengths",
        "density": "1,150 kg/m³ (Sinks in water / extreme hardness)",
        "durability": "Durability Class 1 (Expected life > 50 years without treatment)",
        "fire_rating": "Class A Flame Spread Index (ASTM E84 / BS EN 13501)",
        "img_src": "/assets/img/landscape/timber-ipe-hardwood.svg",
        "specs": [
            ("Standard", "BS EN 14915 / BS EN 350-2 / FSC 100% Certified"),
            ("Janka Hardness", "3,680 lbf (Over 3x harder than English Oak)"),
            ("Bending Strength", "172 N/mm² exceptional structural load capacity"),
            ("Installation Method", "Pre-drilled counter-sunk stainless screws or pre-grooved hidden clips"),
            ("Weathering", "Weathers to a silver patina if untreated, or maintained with UV deck oil"),
            ("Moisture Stability", "Kiln-dried (KD) to 14-16% moisture content for UK climate"),
            ("Commercial Rating", "Approved for heavy-traffic public boardwalks, marinas, and hotel terraces"),
            ("Chain of Custody", "Fully documented UK Timber Regulations (UKTR) import compliance")
        ]
    },

    # Section 5: Garden Sockets, Water Outlets & Outdoor Architecture
    {
        "id": "CB-LS-0016",
        "name": "Cabivella RockPower Granite-Textured Weatherproof Garden Socket Pillar",
        "slug": "cabivella-rockpower-granite-weatherproof-garden-socket",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Discreet garden power distribution column cast from real stone mineral resin mimicking natural granite rock. Houses 4 internal 13A IP44 shuttered UK sockets with spring-loaded weatherproof flap covers and magnetic stone access door.",
        "housing": "High-Density Mineral Polyresin Natural Granite Cast",
        "outlets": "4 x 13A 230V UK BS 1363 Shuttered Socket Outlets",
        "protection": "IP44 Splashproof & Weatherproof (BS EN 60529)",
        "access": "Hidden magnetic stone closure door with cable exit channel",
        "img_src": "/assets/img/landscape/power-garden-socket-rock.svg",
        "specs": [
            ("Standard", "BS 1363-2 / BS EN 60529 Outdoor electrical installations"),
            ("Total Load", "Max 16A / 3680W continuous total connected load"),
            ("Cable Supply", "Supplied with pre-wired 5m heavy rubber H07RN-F 3G1.5mm² cable"),
            ("Base Anchoring", "Integrated stainless steel baseplate with masonry ground anchors"),
            ("Weather Resistance", "UV-stabilized resin unaffected by frost, heavy snow, or high heat"),
            ("Camouflage", "Blends seamlessly into gravel beds, shrubberies, and natural rockeries"),
            ("Timer Control", "Optional integrated 24-hour mechanical timer or twilight sensor"),
            ("Ground Clearance", "Socket height 150mm above ground level prevents splash water ingress")
        ]
    },
    {
        "id": "CB-LS-0017",
        "name": "Cabivella ColumnPower Architectural 316 Stainless Steel Garden Power Post",
        "slug": "cabivella-columnpower-stainless-steel-power-post",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Sleek marine-grade brushed 316 stainless steel architectural bollard power post. Incorporates 2 or 4 IP55 rated 13A power outlets and warm white downward LED courtesy pathway accent illumination.",
        "height": "400 mm / 600 mm / 900 mm Bollard Height",
        "material": "Grade 316 Marine Stainless Steel (1.5mm wall)",
        "protection": "IP55 Weatherproof Outdoor Electrical Rating",
        "lighting": "Integrated 5W 3000K warm white downward pathway LED",
        "img_src": "/assets/img/landscape/power-stainless-bollard.svg",
        "specs": [
            ("Standard", "BS EN 60598-2-1 / BS 7671 Part 7 (Special Installations)"),
            ("Socket Outlets", "2 or 4 x BS 1363 13A sockets behind spring-hinged lockable covers"),
            ("Terminal Block", "Internal 3-pole 6mm² loop-in loop-out terminal rail with earth lug"),
            ("Root Mount", "Heavy-duty 4-bolt internal flange with root mount option for soft ground"),
            ("Finish", "Corrosion-resistant satin brushed finish with passivation treatment"),
            ("Security Option", "Cylinder key-lockable protective lid to prevent power theft"),
            ("Cable Gland", "Includes M20 brass compression cable gland on baseplate"),
            ("Commercial Spec", "Engineered for high-end residential gardens and hotel landscaped courtyards")
        ]
    },
    {
        "id": "CB-LS-0018",
        "name": "Cabivella AquaPost Free-Standing Stainless Steel Garden Water Pillar",
        "slug": "cabivella-aquapost-stainless-steel-garden-water-pillar",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Architectural free-standing garden water tap column fabricated from heavy-gauge brushed 316 stainless steel. Fitted with a quarter-turn solid brass bib tap, integrated hose hanger, and frost-insulated internal PEX water pipework.",
        "height": "850 mm x 80x80 mm Square Column",
        "material": "A4 Grade 316 Stainless Steel with Electropolished Finish",
        "tap_fitting": "1/2\" BSP Heavy Cast Brass Quarter-Turn Bib Tap with 3/4\" Hose Thread",
        "internal_pipe": "Pre-installed insulated 1/2\" PEX pipe with bottom female union",
        "img_src": "/assets/img/landscape/water-garden-pillar.svg",
        "specs": [
            ("Standard", "BS EN 1717 Backflow prevention / WRAS approved components"),
            ("Mounting Base", "150 x 150 x 5 mm solid stainless baseplate with 4 anchor bolt holes"),
            ("Hose Bracket", "Integral curved stainless steel saddle bracket holds up to 30m garden hose"),
            ("Double Tap Option", "Secondary lower 1/2\" tap outlet for automatic drip irrigation timer"),
            ("Internal Insulation", "Closed-cell elastomeric thermal foam jacket protects from light freezing"),
            ("Drain Down", "Base isolator valve connection allows rapid winter drainage"),
            ("Water Pressure", "Tested to 16 bar maximum hydrostatic test pressure (PN16)"),
            ("Corrosion Warranty", "Lifetime structural corrosion warranty on Grade 316 steel body")
        ]
    },
    {
        "id": "CB-LS-0019",
        "name": "Cabivella AutoReel Commercial 30m Wall-Mounted Retractable Hose Reel",
        "slug": "cabivella-autoreel-retractable-garden-hose-reel",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Heavy-duty wall-mounted garden hose reel with slow, smooth automatic rewind mechanism. Features 30 metres of 1/2\" premium kink-resistant anti-torsion braided PVC hose, 180-degree wall swivel bracket, and multi-pattern spray gun.",
        "hose_length": "30 metres + 2m feeder hose (1/2\" 12.5mm ID)",
        "rewind_system": "Internal torsion spring with patented centrifugal brake (Slow-Rewind)",
        "swivel": "180° Heavy-Duty Wall Pivot Swivel Bracket with Security Pin",
        "burst_pressure": "Burst pressure > 30 bar (Operational pressure up to 8 bar)",
        "img_src": "/assets/img/landscape/water-retractable-hose.svg",
        "specs": [
            ("Standard", "BS EN ISO 1402 Rubber and plastics hoses / REACH compliant"),
            ("Hose Construction", "4-layer UV-stabilized PVC with polyester cross-mesh reinforcement"),
            ("Stop-Anywhere", "Patented ratcheting lock stops hose at any desired extended length"),
            ("Casing", "UV-stabilized weather-resistant high-impact polypropylene housing"),
            ("Fittings Included", "Solid brass 3/4\" tap connector, waterstop quick-coupler, and nozzle"),
            ("Winter Storage", "Quick-release wall pin allows easy detachment for winter frost storage"),
            ("Temperature Range", "-5°C to +45°C operating water temperature"),
            ("Commercial Use", "Suitable for expansive landscaped grounds, nurseries, and villa estates")
        ]
    },
    {
        "id": "CB-LS-0020",
        "name": "Cabivella GeoGrid Polypropylene Permeable Gravel Stabilisation Paving Grid",
        "slug": "cabivella-geogrid-permeable-gravel-stabilisation-grid",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Heavy-duty interlocking honeycomb gravel stabilisation grid manufactured from 100% recycled UV-stabilised polypropylene. Thermally bonded non-woven geotextile backing prevents weed growth while supporting up to 500 tonnes/m² for car parking.",
        "dimensions": "1150 x 800 x 30 mm (Honeycomb cell size 42mm)",
        "load_bearing": "500 tonnes/m² (Tested filled with 6-10mm decorative gravel)",
        "membrane": "Factory thermally welded 100g/m² permeable geotextile backing",
        "porosity": "98% permeable void ratio for SuDS compliant rainwater drainage",
        "img_src": "/assets/img/landscape/drainage-gravel-grid.svg",
        "specs": [
            ("Standard", "BS 7533-13 SuDS Permeable Pavements / ISO 9001"),
            ("Interlocking", "Heavy-duty click-lock perimeter joints for rapid layout"),
            ("Vehicle Rating", "Emergency access vehicles, delivery HGVs, and light aircraft aprons"),
            ("Gradient Limit", "Suitable for gravel driveways on slopes up to 15% (8.5 degrees)"),
            ("Weed Prevention", "Geotextile backing prevents weed germination from sub-base"),
            ("Rutting Resistance", "Eliminates gravel displacement, tire ruts, and mud generation"),
            ("Aggregate Fit", "Engineered for 6-16mm angular decorative gravel and chippings"),
            ("Chemical Resistance", "Impervious to road salts, engine oils, petroleum, and acid rain")
        ]
    },
    {
        "id": "CB-LS-0021",
        "name": "Cabivella SlotDrain Concealed Stainless Steel Threshold Drainage Channel",
        "slug": "cabivella-slotdrain-concealed-stainless-threshold-channel",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Discreet architectural slot drainage channel with a 15mm visible stainless steel throat. Designed for flush threshold patio installations, sliding glass doors, and boundary drainage conforming to BS EN 1433 Class A15/B125.",
        "throat_width": "15 mm Minimalist Concealed Slot",
        "channel_material": "Heavy-Duty Polymer Concrete with Grade 316 Stainless Top",
        "load_class": "Class B125 (125 kN) Pedestrian and Driveway Safe",
        "length": "1000 mm modular units with pre-formed bottom 110mm outlet",
        "img_src": "/assets/img/landscape/drainage-slot-channel.svg",
        "specs": [
            ("Standard", "BS EN 1433 Drainage channels for vehicular and pedestrian areas"),
            ("Building Regs", "Complies with Part M level threshold drainage requirements"),
            ("Throat Profile", "15 mm continuous slot with heel-safe grating aperture"),
            ("Access Unit", "Removable access inspection box with lockable stainless cover"),
            ("Flow Rate", "Hydraulically smooth polymer concrete interior delivers > 4.5 l/s flow"),
            ("Jointing", "Tongue and groove interlocking with elastomeric sealant rebate"),
            ("Depth Options", "Available in 60mm shallow profile and 130mm deep profile"),
            ("Applications", "Patio threshold transitions, bi-fold door thresholds, poolside decks")
        ]
    },
    {
        "id": "CB-LS-0022",
        "name": "Cabivella SphereGlow Architectural Natural Granite Carved Garden Spheres",
        "slug": "cabivella-sphereglow-granite-carved-garden-spheres",
        "section": "Garden Sockets, Water Outlets & Outdoor Architecture",
        "desc": "Solid spherical landscape sculpture water features carved from solid natural granite boulders. Available with central drilled water fountain core and polished or Bush-hammered textured surface for luxury estate focal points.",
        "diameter": "Ø 300 mm, Ø 500 mm, Ø 750 mm, Ø 1000 mm",
        "stone": "Natural Silver Grey or Midnight Black Anatolian Granite",
        "drilling": "Central Ø 32mm hole for bubbling water feature pipe and LED light",
        "base": "Flat sawn bottom base for ultra-stable freestanding placement",
        "img_src": "/assets/img/landscape/stone-sphere-fountain.svg",
        "specs": [
            ("Standard", "BS EN 1341 / Architectural Garden Sculptures"),
            ("Weight", "Ø300mm: 40 kg | Ø500mm: 180 kg | Ø750mm: 610 kg | Ø1000mm: 1,450 kg"),
            ("Finish Options", "Hand-carved bush-hammered texture or 1000-grit high mirror polish"),
            ("Water Feature Kit", "Supplied with optional submersible 230V pump and warm LED ring"),
            ("Frost Resistance", "Impervious to freezing weather and thermal cracking"),
            ("Packaging", "Reinforced custom timber shipping crate with foam internal cradles"),
            ("Civil Anchor", "Underside threaded M16 stainless anchor socket for security bolting"),
            ("Architectural Use", "Estate entrances, reflecting pools, commercial plazas, sensory gardens")
        ]
    }
]
