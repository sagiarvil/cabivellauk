#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cabivella Systems Data Definitions
Steel Products (Demkop Reference Cloned & 100% Rebranded)
Roofing Products (LN Yapi Reference Cloned & 100% Rebranded)
uPVC Products (AGA Reference Cloned & 100% Rebranded)
"""

UPVC_PRODUCTS = [
    # Section 1: Cabivella Heritage Architectural Systems
    {
        "id": "CB-UP-0001",
        "name": "Cabivella GrandLift HST-175",
        "slug": "cabivella-grandlift-hst-175-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "175mm",
        "desc": "Ultra-wide panoramic lift-and-slide architectural door system with 175 mm frame depth, multi-point compression seals, and heavy-duty stainless steel carriage rollers for seamless patio openings.",
        "u_val": "0.88 W/m²K",
        "chambers": "6 Chambers",
        "glass": "Up to 52mm Triple Glazing",
        "img_src": "/assets/img/upvc/grandlift-hst-175.png",
        "orig_file": "legend-hebeschiebe-175mm.png",
        "specs": [
            ("Frame Depth", "175 mm structural casing"),
            ("Sash Depth", "76 mm reinforced door profile"),
            ("Maximum Sash Weight", "400 kg per operating leaf"),
            ("Acoustic Attenuation", "Rw up to 43 dB"),
            ("Air Permeability", "Class 4 (BS EN 12207)"),
            ("Water Tightness", "Class E900 (BS EN 12208)"),
            ("Wind Load Resistance", "Class C5/B5 (BS EN 12210)"),
            ("Thermal Insulation", "Ud = 0.88 W/m²K with Argon triple unit")
        ]
    },
    {
        "id": "CB-UP-0002",
        "name": "Cabivella HorizonSlide 149",
        "slug": "cabivella-horizonslide-149-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "149mm",
        "desc": "High-insulation parallel sliding patio door system engineered with a 149 mm structural frame, co-extruded TPE weather seals, and internal steel reinforcement for coastal wind loads.",
        "u_val": "1.05 W/m²K",
        "chambers": "5 Chambers",
        "glass": "Up to 44mm Glazing",
        "img_src": "/assets/img/upvc/horizonslide-149.png",
        "orig_file": "legend-surme-149mm.png",
        "specs": [
            ("Frame Depth", "149 mm dual-track profile"),
            ("Sash Depth", "65 mm insulated profile"),
            ("Maximum Sash Weight", "250 kg"),
            ("Acoustic Attenuation", "Rw up to 40 dB"),
            ("Air Permeability", "Class 4"),
            ("Water Tightness", "Class 8A"),
            ("Wind Load Resistance", "Class C4"),
            ("Thermal Insulation", "Ud = 1.05 W/m²K")
        ]
    },
    {
        "id": "CB-UP-0003",
        "name": "Cabivella ThermalMaster 80",
        "slug": "cabivella-thermalmaster-80-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "80mm",
        "desc": "Passive-house certified 80 mm profile system featuring 6 thermal chambers, triple compression gasket topology, and Class A wall thickness for maximum structural longevity.",
        "u_val": "0.78 W/m²K",
        "chambers": "6 Chambers",
        "glass": "Up to 52mm Acoustic Triple",
        "img_src": "/assets/img/upvc/thermalmaster-80.png",
        "orig_file": "legend-80mm.png",
        "specs": [
            ("Frame Depth", "80 mm Class A profile (BS EN 12608)"),
            ("Chamber Count", "6 symmetrical thermal chambers"),
            ("Gasket Architecture", "Triple continuous EPDM/TPE seals"),
            ("Acoustic Attenuation", "Rw up to 46 dB with laminated glazing"),
            ("Thermal Performance", "Uf = 0.95 W/m²K | Uw = 0.78 W/m²K"),
            ("Burglary Resistance", "PAS 24 / RC3 compliant"),
            ("Air Permeability", "Class 4 (600 Pa)"),
            ("Water Tightness", "Class E1200 (1200 Pa)")
        ]
    },
    {
        "id": "CB-UP-0004",
        "name": "Cabivella PureFrame 70",
        "slug": "cabivella-pureframe-70-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "70mm",
        "desc": "Architectural standard 70 mm casement and tilt-and-turn fenestration system with 5 insulated chambers, optimized drain channels, and universal UK ironmongery eurogroove.",
        "u_val": "1.18 W/m²K",
        "chambers": "5 Chambers",
        "glass": "Up to 40mm Double/Triple",
        "img_src": "/assets/img/upvc/pureframe-70.png",
        "orig_file": "zendow-70mm.png",
        "specs": [
            ("Frame Depth", "70 mm 5-chamber design"),
            ("Rebate Depth", "20 mm glass engagement"),
            ("Acoustic Attenuation", "Rw up to 38 dB"),
            ("Air Permeability", "Class 4"),
            ("Water Tightness", "Class 9A"),
            ("Wind Load Resistance", "Class C5"),
            ("Thermal Insulation", "Uw = 1.18 W/m²K"),
            ("Standard Colours", "Smooth White, Anthracite Grey, Chartwell Green, Golden Oak")
        ]
    },
    {
        "id": "CB-UP-0005",
        "name": "Cabivella AcousticShield 70",
        "slug": "cabivella-acousticshield-70-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "70mm",
        "desc": "Heavy-duty 70 mm acoustic system equipped with a central co-extruded fin gasket, isolating the hardware groove against driving rain, high-decibel street noise, and condensation.",
        "u_val": "1.10 W/m²K",
        "chambers": "6 Chambers with Central Fin",
        "glass": "Up to 44mm Acoustic Unit",
        "img_src": "/assets/img/upvc/acousticshield-70.png",
        "orig_file": "zendow-plus-70mm.png",
        "specs": [
            ("Frame Depth", "70 mm with central acoustic barrier"),
            ("Gasket Topology", "Triple fin sealing system"),
            ("Acoustic Attenuation", "Rw up to 44 dB"),
            ("Thermal Performance", "Uw = 1.10 W/m²K"),
            ("Air Permeability", "Class 4"),
            ("Water Tightness", "Class E1050"),
            ("Security Grade", "PAS 24 / Secured by Design specification")
        ]
    },
    {
        "id": "CB-UP-0006",
        "name": "Cabivella SculpturedDeluxe 70",
        "slug": "cabivella-sculptureddeluxe-70-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "70mm",
        "desc": "Curved ovolo decorative exterior contour designed for period and conservation properties requiring traditional timber sightlines with modern maintenance-free durability.",
        "u_val": "1.15 W/m²K",
        "chambers": "5 Chambers Ovolo",
        "glass": "Up to 40mm",
        "img_src": "/assets/img/upvc/sculptureddeluxe-70.png",
        "orig_file": "zendow-deluxe-70mm.png",
        "specs": [
            ("Frame Depth", "70 mm sculptured profile"),
            ("Sightline", "112 mm slim sash/frame combination"),
            ("Acoustic Attenuation", "Rw up to 39 dB"),
            ("Thermal Performance", "Uw = 1.15 W/m²K"),
            ("Heritage Compatibility", "Flush sash look & Georgian astragal bar options")
        ]
    },
    {
        "id": "CB-UP-0007",
        "name": "Cabivella DynamicFusion 70",
        "slug": "cabivella-dynamicfusion-70-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "70mm",
        "desc": "Contemporary flush-line profile featuring an integral weather-drip projection, concealed sashes, and balanced sightlines engineered for modern residential developments.",
        "u_val": "1.20 W/m²K",
        "chambers": "5 Chambers Flush",
        "glass": "Up to 36mm",
        "img_src": "/assets/img/upvc/dynamicfusion-70.png",
        "orig_file": "fusion-70mm.png",
        "specs": [
            ("Frame Depth", "70 mm modern geometry"),
            ("Water Drainage", "Concealed front-face or bottom-face slotting"),
            ("Acoustic Attenuation", "Rw up to 37 dB"),
            ("Thermal Performance", "Uw = 1.20 W/m²K")
        ]
    },
    {
        "id": "CB-UP-0008",
        "name": "Cabivella CompactPro 60",
        "slug": "cabivella-compactpro-60-upvc-system",
        "section": "Cabivella Heritage Architectural Systems",
        "depth": "60mm",
        "desc": "Engineered 60 mm 4-chamber architectural profile designed for commercial developments, institutional refurbishments, and budget-conscious multi-unit residential schemes.",
        "u_val": "1.32 W/m²K",
        "chambers": "4 Chambers",
        "glass": "Up to 32mm",
        "img_src": "/assets/img/upvc/compactpro-60.png",
        "orig_file": "everest-max-60mm.png",
        "specs": [
            ("Frame Depth", "60 mm narrow footprint"),
            ("Structural Core", "Hot-dip galvanized internal steel box"),
            ("Acoustic Attenuation", "Rw up to 35 dB"),
            ("Thermal Performance", "Uw = 1.32 W/m²K")
        ]
    },

    # Section 2: Cabivella Horizon Sliding & Monorail Architecture
    {
        "id": "CB-UP-0009",
        "name": "Cabivella ImpactSlide 70",
        "slug": "cabivella-impactslide-70-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "70mm",
        "desc": "Heavy-duty sliding system with reinforced interlock profiles, engineered to withstand high wind pressure in coastal or multi-storey residential applications.",
        "u_val": "1.25 W/m²K",
        "chambers": "3 Chambers Heavy",
        "glass": "Up to 32mm",
        "img_src": "/assets/img/upvc/impactslide-70.png",
        "orig_file": "maestro-impact-70mm.png",
        "specs": [("Frame Depth", "70 mm structural sliding frame"), ("Max Sash Load", "160 kg"), ("Thermal Insulation", "1.25 W/m²K")]
    },
    {
        "id": "CB-UP-0010",
        "name": "Cabivella RebelSlide 60",
        "slug": "cabivella-rebelslide-60-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "60mm",
        "desc": "Slimline sliding window profile with ultra-compact frame dimensions, maximizing glass area and natural daylight penetration for contemporary urban apartments.",
        "u_val": "1.38 W/m²K",
        "chambers": "3 Chambers Slim",
        "glass": "Up to 24mm",
        "img_src": "/assets/img/upvc/rebelslide-60.png",
        "orig_file": "maestro-rebel-60mm.png",
        "specs": [("Frame Depth", "60 mm compact sliding frame"), ("Sightline", "Narrow meeting stile"), ("Thermal Insulation", "1.38 W/m²K")]
    },
    {
        "id": "CB-UP-0011",
        "name": "Cabivella EcoDual FlyScreen 93",
        "slug": "cabivella-ecodual-flyscreen-93-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "93mm",
        "desc": "Double-track sliding door frame featuring an integrated third extruded flyscreen track, providing unhindered ventilation without insect intrusion.",
        "u_val": "1.30 W/m²K",
        "chambers": "Integrated Screen Track",
        "glass": "Up to 28mm",
        "img_src": "/assets/img/upvc/ecodual-flyscreen-93.png",
        "orig_file": "maestro-eko-cift-ray-sineklikli-s-rme-93mm.png",
        "specs": [("Frame Depth", "93 mm triple-groove frame"), ("Screen Type", "Extruded aluminium mesh slider"), ("Thermal Insulation", "1.30 W/m²K")]
    },
    {
        "id": "CB-UP-0012",
        "name": "Cabivella EcoMono SingleTrack 73",
        "slug": "cabivella-ecomono-singletrack-73-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "73mm",
        "desc": "Architectural monorail sliding design featuring one direct fixed-glazed side and one sliding sash, optimizing light transmittance while reducing frame cost.",
        "u_val": "1.22 W/m²K",
        "chambers": "Monorail Hybrid",
        "glass": "Up to 32mm",
        "img_src": "/assets/img/upvc/ecomono-singletrack-73.png",
        "orig_file": "maestro-eko-tek-ray-s-rme-73mm.png",
        "specs": [("Frame Depth", "73 mm monorail casing"), ("Fixed Glass Area", "Direct frame glazed"), ("Thermal Insulation", "1.22 W/m²K")]
    },
    {
        "id": "CB-UP-0013",
        "name": "Cabivella EcoTriple ThreeTrack 108",
        "slug": "cabivella-ecotriple-threetrack-108-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "108mm",
        "desc": "Three-rail telescopic sliding system allowing up to six sliding panels to stack cleanly, opening up to two-thirds of the structural opening.",
        "u_val": "1.35 W/m²K",
        "chambers": "3-Rail Heavy",
        "glass": "Up to 28mm",
        "img_src": "/assets/img/upvc/ecotriple-threetrack-108.png",
        "orig_file": "maestro-eko-ray-s-rme-108mm.png",
        "specs": [("Frame Depth", "108 mm triple rail profile"), ("Opening Ratio", "66% clear aperture"), ("Thermal Insulation", "1.35 W/m²K")]
    },
    {
        "id": "CB-UP-0014",
        "name": "Cabivella EcoTwin ClassicSlide 60",
        "slug": "cabivella-ecotwin-classicslide-60-upvc-system",
        "section": "Cabivella Horizon Sliding & Monorail Architecture",
        "depth": "60mm",
        "desc": "Classic dual-track balanced sliding door and window system engineered for straightforward installation and dependable multi-point latching.",
        "u_val": "1.40 W/m²K",
        "chambers": "2-Rail Classic",
        "glass": "Up to 24mm",
        "img_src": "/assets/img/upvc/ecotwin-classicslide-60.png",
        "orig_file": "maestro-eko-ift-ray-s-rme-60mm.png",
        "specs": [("Frame Depth", "60 mm dual rail profile"), ("Roller Material", "POM silent nylon runners"), ("Thermal Insulation", "1.40 W/m²K")]
    },

    # Section 3: Cabivella ThermalMaster High-Efficiency Passive Fenestration
    {
        "id": "CB-UP-0015",
        "name": "Cabivella AerogelCore IKD Insulated Profiles",
        "slug": "cabivella-aerogelcore-ikd-insulated-profiles",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Factory-injected specialized rigid PU foam insulation core inside profile chambers, eliminating convection currents and reducing profile U-values below 0.89 W/m²K.",
        "u_val": "0.74 W/m²K",
        "chambers": "6 Chambers with Foam Core",
        "glass": "Up to 54mm",
        "img_src": "/assets/img/upvc/aerogelcore-ikd.png",
        "orig_file": "gealan-ikd-k-p-k-dolgulu-profiller.png",
        "specs": [("Core Material", "High-density polyurethane foam"), ("Uf Value", "0.89 W/m²K"), ("Overall Uw", "0.74 W/m²K")]
    },
    {
        "id": "CB-UP-0016",
        "name": "Cabivella DryBond STV Static Tape Glass Adhesion",
        "slug": "cabivella-drybond-stv-static-tape-system",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "System Tech",
        "desc": "Static dry-bonding high-shear structural tape system securing the insulating glass unit directly to the sash upstand, transferring wind loads into the glass pane.",
        "u_val": "System Integration",
        "chambers": "Structural Adhesion",
        "glass": "All Glass Thicknesses",
        "img_src": "/assets/img/upvc/drybond-stv.png",
        "orig_file": "gealan-stv-statik-bant-sistemi.png",
        "specs": [("Bonding Technology", "Heavy-duty double-sided acrylic foam tape"), ("Torsional Rigidity", "+40% compared to conventional packing"), ("Sash Sag Prevention", "Permanent zero-maintenance alignment")]
    },
    {
        "id": "CB-UP-0017",
        "name": "Cabivella IntelliVent GECCO Smart Aeration",
        "slug": "cabivella-intellivent-gecco-aeration",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "Integrated Vent",
        "desc": "Self-regulating mechanical airflow flap concealed within the profile gasket, automatically throttling at wind gusts above 30 Pa to prevent draft while preventing mould.",
        "u_val": "Continuous Aeration",
        "chambers": "Concealed Vent",
        "glass": "Independent",
        "img_src": "/assets/img/upvc/intellivent-gecco.png",
        "orig_file": "gealan-gecco-havaland-rma.png",
        "specs": [("Operation", "Gravity and pressure counter-weight flap"), ("Sound Reduction", "No acoustic bridging"), ("Compliance", "UK Part F compliant background trickle ventilation")]
    },
    {
        "id": "CB-UP-0018",
        "name": "Cabivella ArmourPMMA AcrylColor Surface Shield",
        "slug": "cabivella-armourpmma-acrylcolor-surface",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "Co-Extruded 0.5mm",
        "desc": "Co-extruded polymethylmethacrylate (PMMA) acrylic glass layer fused seamlessly onto the outer profile surface, offering 2x scratch resistance compared to PVC foils.",
        "u_val": "Surface Tech",
        "chambers": "PMMA Composite",
        "glass": "Universal",
        "img_src": "/assets/img/upvc/armourpmma-acrylcolor.png",
        "orig_file": "gealan-acrylcolor.png",
        "specs": [("Surface Layer", "0.5 mm fused acrylic glass"), ("Scratch Resistance", "Twice as hard as standard uPVC"), ("Reflectivity", "High solar reflectance prevents profile warping")]
    },
    {
        "id": "CB-UP-0019",
        "name": "Cabivella PortalSlide ST-74 Heavy Door",
        "slug": "cabivella-portalslide-st-74-door",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "74mm",
        "desc": "Commercial-grade 74 mm heavy sliding door system engineered with steel-armoured corner joints and continuous perimeter brushes for extreme exposure zones.",
        "u_val": "1.15 W/m²K",
        "chambers": "4 Chambers Heavy",
        "glass": "Up to 44mm",
        "img_src": "/assets/img/upvc/portalslide-st-74.jpg",
        "orig_file": "gealan-st-s-rme-kap-74mm.jpg",
        "specs": [("Frame Depth", "74 mm reinforced sliding frame"), ("Corner Joint", "Welded corner connector inserts"), ("Thermal Performance", "1.15 W/m²K")]
    },
    {
        "id": "CB-UP-0020",
        "name": "Cabivella AeroSlide SF-74 Window",
        "slug": "cabivella-aeroslide-sf-74-window",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "74mm",
        "desc": "Precision 74 mm sliding window frame with internal drainage baffles, stainless steel running tracks, and smooth gliding action for contemporary urban fenestration.",
        "u_val": "1.20 W/m²K",
        "chambers": "4 Chambers Window",
        "glass": "Up to 36mm",
        "img_src": "/assets/img/upvc/aeroslide-sf-74.jpg",
        "orig_file": "gealan-sf-s-rme-pencere-74mm.jpg",
        "specs": [("Frame Depth", "74 mm sliding casing"), ("Running Track", "Inox 316 grade stainless steel"), ("Thermal Performance", "1.20 W/m²K")]
    },
    {
        "id": "CB-UP-0021",
        "name": "Cabivella ApexPro S-9000 83mm TripleSeal",
        "slug": "cabivella-apexpro-s-9000-83mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Flagship 83 mm 6-chamber system with central fin gasket, optimized for ultra-low energy architecture, passive house standards, and acoustic performance up to 47 dB.",
        "u_val": "0.73 W/m²K",
        "chambers": "6 Chambers Passive",
        "glass": "Up to 54mm Triple Glazing",
        "img_src": "/assets/img/upvc/apexpro-s-9000.jpg",
        "orig_file": "gealan-s9000iq-83mm.jpg",
        "specs": [("Frame Depth", "83 mm 6 chambers"), ("Uw Performance", "0.73 W/m²K (Passivhaus compliant)"), ("Central Fin", "Continuous extruded thermal break gasket")]
    },
    {
        "id": "CB-UP-0022",
        "name": "Cabivella UltraFrame S-8000 83mm Plus",
        "slug": "cabivella-ultraframe-s-8000-83mm-plus",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Extended 83 mm outer frame depth variant of the 8000 series offering superior wall connection depth, thermal bridging elimination, and deep glazing rebating.",
        "u_val": "0.85 W/m²K",
        "chambers": "6 Chambers Extended",
        "glass": "Up to 50mm",
        "img_src": "/assets/img/upvc/ultraframe-s-8000-83mm.jpg",
        "orig_file": "gealan-s8000iq-83mm.jpg",
        "specs": [("Frame Depth", "83 mm structural casing"), ("Glazing Infill", "50 mm triple glazing unit"), ("Thermal Insulation", "0.85 W/m²K")]
    },
    {
        "id": "CB-UP-0023",
        "name": "Cabivella ProLine S-8000 74mm",
        "slug": "cabivella-proline-s-8000-74mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "74mm",
        "desc": "Workhorse 74 mm 6-chamber fenestration system striking the ideal balance between raw material efficiency, thermal transmittance, and structural steel reinforcement cavity.",
        "u_val": "1.10 W/m²K",
        "chambers": "6 Chambers Standard",
        "glass": "Up to 44mm",
        "img_src": "/assets/img/upvc/proline-s-8000-74mm.jpg",
        "orig_file": "gealan-s8000iq-74mm.jpg",
        "specs": [("Frame Depth", "74 mm 6-chamber core"), ("Reinforcement", "Large central chamber for thick galvanized steel"), ("Thermal Insulation", "1.10 W/m²K")]
    },
    {
        "id": "CB-UP-0024",
        "name": "Cabivella PrestigeLine S-7000 83mm Plus",
        "slug": "cabivella-prestigeline-s-7000-83mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Deep installation frame version of the 7000 platform, delivering robust anchor points for heavy multi-glazed architectural tilt-and-turn units.",
        "u_val": "0.92 W/m²K",
        "chambers": "5 Chambers Heavy Plus",
        "glass": "Up to 48mm",
        "img_src": "/assets/img/upvc/prestigeline-s-7000-83mm.jpg",
        "orig_file": "gealan-s7000iq-83mm.jpg",
        "specs": [("Frame Depth", "83 mm structural frame"), ("Anchorage", "Heavy-gauge wall fixing channel"), ("Thermal Insulation", "0.92 W/m²K")]
    },
    {
        "id": "CB-UP-0025",
        "name": "Cabivella SolidCore S-7000 74mm",
        "slug": "cabivella-solidcore-s-7000-74mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "74mm",
        "desc": "Proven 74 mm profile architecture with central rebate gasket and high internal static stiffness for commercial office windows and residential towers.",
        "u_val": "1.12 W/m²K",
        "chambers": "5 Chambers Central Gasket",
        "glass": "Up to 40mm",
        "img_src": "/assets/img/upvc/solidcore-s-7000-74mm.jpg",
        "orig_file": "gealan-s7000-iq-74mm.jpg",
        "specs": [("Frame Depth", "74 mm standard"), ("Gasket Seal", "Continuous middle gasket"), ("Thermal Insulation", "1.12 W/m²K")]
    },
    {
        "id": "CB-UP-0026",
        "name": "Cabivella EcoLine S-3000 62mm",
        "slug": "cabivella-ecoline-s-3000-62mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "62mm",
        "desc": "Streamlined 62 mm profile depth designed for cost-effective retrofit projects where existing narrow brick reveals must be preserved without masonry altering.",
        "u_val": "1.35 W/m²K",
        "chambers": "3 Chambers Retrofit",
        "glass": "Up to 32mm",
        "img_src": "/assets/img/upvc/ecoline-s-3000-62mm.jpg",
        "orig_file": "gealan-s3000-eco-62mm.jpg",
        "specs": [("Frame Depth", "62 mm compact"), ("Application", "Renovation & replacement"), ("Thermal Insulation", "1.35 W/m²K")]
    },
    {
        "id": "CB-UP-0027",
        "name": "Cabivella CurtainWall uPVC Façade System",
        "slug": "cabivella-curtainwall-upvc-facade-system",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "Façade Mullion/Transom",
        "desc": "Structural mullion-transom façade system combining internal structural steel core pillars with thermally insulated external uPVC covers for multi-storey glazed lobbies.",
        "u_val": "0.95 W/m²K",
        "chambers": "Steel-Reinforced Curtain",
        "glass": "Up to 50mm",
        "img_src": "/assets/img/upvc/curtainwall-facade.jpg",
        "orig_file": "gealan-pvc-cephe-sistemleri.jpg",
        "specs": [("Structural Mullion", "Internal structural box tube"), ("External Cover", "UV-stabilized uPVC pressure cap"), ("Application", "Multi-storey glazed atriums")]
    },
    {
        "id": "CB-UP-0028",
        "name": "Cabivella HeritageNL WoodLook 115mm",
        "slug": "cabivella-heritagenl-woodlook-115mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "115mm",
        "desc": "Authentic Dutch / English block-frame profile with square mechanical butt joints (Houtlook) mimicking historic timber fenestration with 115 mm casing depth.",
        "u_val": "1.00 W/m²K",
        "chambers": "Deep Block Frame 115mm",
        "glass": "Up to 48mm",
        "img_src": "/assets/img/upvc/heritagenl-woodlook-115mm.jpg",
        "orig_file": "gealan-nl-houtlook-115mm.jpg",
        "specs": [("Frame Depth", "115 mm traditional block"), ("Joint Technology", "90-degree mechanical joint appearance"), ("Thermal Insulation", "1.00 W/m²K")]
    },
    {
        "id": "CB-UP-0029",
        "name": "Cabivella HeritageNL BlockFrame 115mm",
        "slug": "cabivella-heritagenl-blockframe-115mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "115mm",
        "desc": "Deep rebate 115 mm architectural frame designed specifically for cavity-wall construction in Northern European and UK climate envelopes.",
        "u_val": "1.02 W/m²K",
        "chambers": "Deep Block Frame",
        "glass": "Up to 48mm",
        "img_src": "/assets/img/upvc/heritagenl-blockframe-115mm.jpg",
        "orig_file": "gealan-nl-hollanda-115mm.jpg",
        "specs": [("Frame Depth", "115 mm casing depth"), ("Cavity Closure", "Integral masonry reveal overlap"), ("Thermal Insulation", "1.02 W/m²K")]
    },
    {
        "id": "CB-UP-0030",
        "name": "Cabivella Kubus Minimalist 83mm Concealed Sash",
        "slug": "cabivella-kubus-minimalist-83mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Ultra-minimalist architectural system where the sash is completely hidden from the exterior, presenting a pure square frame sightline with seamless all-glass aesthetics.",
        "u_val": "0.82 W/m²K",
        "chambers": "Concealed Sash Minimalist",
        "glass": "Up to 48mm",
        "img_src": "/assets/img/upvc/kubus-minimalist-83mm.png",
        "orig_file": "gealan-kubus-83mm.png",
        "specs": [("Sightline", "100 mm completely flush exterior sightline"), ("Sash", "100% concealed behind outer frame"), ("Thermal Insulation", "0.82 W/m²K")]
    },
    {
        "id": "CB-UP-0031",
        "name": "Cabivella HeavyLift HST-170 Patio Door",
        "slug": "cabivella-heavylift-hst-170-patio-door",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "170mm",
        "desc": "170 mm installation depth lift-and-slide door engineered for oversized glass leaves up to 3.0 m height and 300 kg sash weights with zero threshold barrier options.",
        "u_val": "0.95 W/m²K",
        "chambers": "Lift & Slide 170mm",
        "glass": "Up to 50mm",
        "img_src": "/assets/img/upvc/heavylift-hst-170.jpg",
        "orig_file": "gealan-hebeschiebe-170mm.jpg",
        "specs": [("Frame Depth", "170 mm heavy sliding frame"), ("Threshold", "DIN 18040 barrier-free 20 mm threshold"), ("Thermal Insulation", "0.95 W/m²K")]
    },
    {
        "id": "CB-UP-0032",
        "name": "Cabivella Futura S-9000 83mm Passivhaus",
        "slug": "cabivella-futura-s-9000-83mm",
        "section": "Cabivella ThermalMaster High-Efficiency Passive Fenestration",
        "depth": "83mm",
        "desc": "Passive House Institute certified window profile utilizing IKD foam cores and STV glass bonding to achieve an exceptional Uf of 0.89 W/m²K with standard steel inserts.",
        "u_val": "0.72 W/m²K",
        "chambers": "Passivhaus Certified 83mm",
        "glass": "Up to 54mm Quadruple Glazing Option",
        "img_src": "/assets/img/upvc/futura-s-9000-83mm.png",
        "orig_file": "gealan-futura-83mm.png",
        "specs": [("Certification", "Passivhaus Dr. Feist certified"), ("Overall Uw", "0.72 W/m²K with Ug 0.5"), ("Acoustic Rating", "Rw 46 dB")]
    },

    # Section 4: Cabivella Compact Commercial Series
    {
        "id": "CB-UP-0033",
        "name": "Cabivella WinFrame S-70 70mm Commercial",
        "slug": "cabivella-winframe-s-70-70mm",
        "section": "Cabivella Compact Commercial Series",
        "depth": "70mm",
        "desc": "Standard commercial 70 mm 5-chamber window profile engineered for high-volume trade procurement, large-scale residential tracts, and office renovations.",
        "u_val": "1.25 W/m²K",
        "chambers": "5 Chambers Commercial",
        "glass": "Up to 36mm",
        "img_src": "/assets/img/upvc/winframe-s-70-70mm.png",
        "orig_file": "winlife-s70-70mm.png",
        "specs": [("Frame Depth", "70 mm 5 chambers"), ("Cost Efficiency", "High performance-to-cost ratio"), ("Thermal Insulation", "1.25 W/m²K")]
    },
    {
        "id": "CB-UP-0034",
        "name": "Cabivella WinFrame S-60 60mm Commercial",
        "slug": "cabivella-winframe-s-60-60mm",
        "section": "Cabivella Compact Commercial Series",
        "depth": "60mm",
        "desc": "Compact 60 mm 4-chamber architectural profile offering reliable weather protection, standard hardware grooving, and competitive square-metre pricing.",
        "u_val": "1.38 W/m²K",
        "chambers": "4 Chambers Commercial",
        "glass": "Up to 32mm",
        "img_src": "/assets/img/upvc/winframe-s-60-60mm.png",
        "orig_file": "winlife-s60-60mm.png",
        "specs": [("Frame Depth", "60 mm 4 chambers"), ("Application", "High-volume residential developments"), ("Thermal Insulation", "1.38 W/m²K")]
    },

    # Section 5: Precision Hardware, Glass Adhesion & Opening Topologies
    {
        "id": "CB-UP-0035",
        "name": "Cabivella Vasistas Bottom-Hung Hopper Vent",
        "slug": "cabivella-vasistas-bottom-hung-hopper-vent",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "60–83mm",
        "desc": "Inward bottom-hung tilting transom and clerestory hopper vent engineered with precision friction stays and remote mechanical cord or spindle operators.",
        "u_val": "Hardware Topology",
        "chambers": "Inward Tilt Vent",
        "glass": "Compatible 24–52mm",
        "img_src": "/assets/img/upvc/vasistas-hopper-vent.jpg",
        "orig_file": "vasistas-pvc-pencere-sistemi.jpg",
        "specs": [("Opening Topology", "Bottom-hung inward tilting"), ("Safety Stay", "Twin limiting stay catches"), ("Remote Operation", "Manual flexible rod or electric actuator ready")]
    },
    {
        "id": "CB-UP-0036",
        "name": "Cabivella SideHung Single Inward/Outward Casement",
        "slug": "cabivella-sidehung-single-casement",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "60–83mm",
        "desc": "Single-leaf side-hung architectural casement equipped with 3D adjustable concealed or rebate hinges and multi-point perimeter mushroom cam locking.",
        "u_val": "Hardware Topology",
        "chambers": "Side-Hung Single",
        "glass": "Compatible 24–52mm",
        "img_src": "/assets/img/upvc/sidehung-single-casement.jpg",
        "orig_file": "tek-a-l-m-pvc-pencere-ve-kap-sistemi.jpg",
        "specs": [("Hinge Type", "Heavy-load 3D adjustable hinges"), ("Locking Cams", "Perimeter anti-lift mushroom studs"), ("Sash Weight", "Up to 130 kg")]
    },
    {
        "id": "CB-UP-0037",
        "name": "Cabivella TiltAndTurn DualAction Fenestration",
        "slug": "cabivella-tiltandturn-dualaction-fenestration",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "60–83mm",
        "desc": "Dual-mode tilt-and-turn operating gear controlled via a single ergonomic handle, providing draught-free micro-ventilation in tilt mode and easy cleaning in turn mode.",
        "u_val": "Hardware Topology",
        "chambers": "Tilt & Turn Dual Action",
        "glass": "Compatible 24–52mm",
        "img_src": "/assets/img/upvc/tiltandturn-dualaction.jpg",
        "orig_file": "ift-a-l-m-pvc-pencere-ve-kap-sistemi.jpg",
        "specs": [("Operating Modes", "Turn (side-hung) + Tilt (top-tilt ventilation)"), ("Handle Positions", "Down (closed) / Horizontal (turn) / Up (tilt)"), ("Security", "PAS 24 / RC2 standard")]
    },
    {
        "id": "CB-UP-0038",
        "name": "Cabivella FrenchDouble FloatingMullion Casement",
        "slug": "cabivella-frenchdouble-floatingmullion-casement",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "60–83mm",
        "desc": "Twin-leaf opening French casement featuring a floating central flying mullion attached to the slave sash, yielding a 100% unobstructed panoramic aperture.",
        "u_val": "Hardware Topology",
        "chambers": "French Floating Mullion",
        "glass": "Compatible 24–52mm",
        "img_src": "/assets/img/upvc/frenchdouble-floatingmullion.jpg",
        "orig_file": "ift-kanat-pvc-pencere-ve-kap-sistemi.jpg",
        "specs": [("Central Mullion", "Attached to secondary leaf (floating)"), ("Clear Opening", "100% unobstructed exit aperture"), ("Secondary Latch", "Finger-operated top and bottom shootbolts")]
    },
    {
        "id": "CB-UP-0039",
        "name": "Cabivella TiltAndSlide Parallel PSK System",
        "slug": "cabivella-tiltandslide-parallel-psk-system",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "70–83mm",
        "desc": "Parallel tilt-and-slide (PSK / Check-Out) patio mechanism allowing heavy sashes up to 200 kg to tilt for secure ventilation and slide smoothly along internal carriage rails.",
        "u_val": "Hardware Topology",
        "chambers": "Tilt & Slide Mechanism",
        "glass": "Compatible 24–52mm",
        "img_src": "/assets/img/upvc/tiltandslide-psk.jpg",
        "orig_file": "paralel-devirmeli-s-rme-sistemi-ek-a-s-rme-pvc-pencere-ve-kap.jpg",
        "specs": [("Carriage Type", "Bogies with automatic track engagement"), ("Ventilation Position", "Top tilt mode locked under night-vent"), ("Sash Weight", "Up to 200 kg per sash")]
    },
    {
        "id": "CB-UP-0040",
        "name": "Cabivella LiftAndSlide HST Heavy Bogie Topology",
        "slug": "cabivella-liftandslide-hst-heavy-bogie-topology",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "170–175mm",
        "desc": "Heavy-duty lifting gear system using a rotating lever handle to raise the multi-hundred kilogram sash off its continuous compression gaskets onto tandem needle-bearing wheels.",
        "u_val": "Hardware Topology",
        "chambers": "Lift & Slide HST Hardware",
        "glass": "Compatible 32–54mm",
        "img_src": "/assets/img/upvc/liftandslide-hst-bogie.jpg",
        "orig_file": "hebeschiebe-kald-rmal-s-rme-pvc-pencere-ve-kap-sistemi.jpg",
        "specs": [("Lift Mechanism", "Internal eccentric lever gears"), ("Tandem Bogie", "Hardened stainless steel needle bearings"), ("Weather Seal", "Double perimeter compression gaskets")]
    },
    {
        "id": "CB-UP-0041",
        "name": "Cabivella SimpleSlide BrushSeal Runner Topology",
        "slug": "cabivella-simpleslide-brushseal-runner-topology",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "60–74mm",
        "desc": "Standard sliding gear featuring siliconized high-density fin-seal brush strips, aluminum bottom rails, and self-levelling height-adjustable roller units.",
        "u_val": "Hardware Topology",
        "chambers": "Simple Sliding Hardware",
        "glass": "Compatible 20–32mm",
        "img_src": "/assets/img/upvc/simpleslide-brushseal.jpg",
        "orig_file": "basit-s-rme-klasik-s-rme-pvc-pencere-ve-kap.jpg",
        "specs": [("Sealing", "Siliconized woven polypropylene fin pile"), ("Roller Unit", "Height-adjustable twin nylon wheel assemblies"), ("Security Catch", "Concealed interlock hooks")]
    },
    {
        "id": "CB-UP-0042",
        "name": "Cabivella Pivot360 Center-Hung Reversible System",
        "slug": "cabivella-pivot360-center-hung-reversible",
        "section": "Precision Hardware, Glass Adhesion & Opening Topologies",
        "depth": "70–83mm",
        "desc": "Center-pivot horizontal or vertical rotating window hardware permitting full 180-degree rotation for effortless cleaning of external glass from inside the room.",
        "u_val": "Hardware Topology",
        "chambers": "Center Pivot 360",
        "glass": "Compatible 24–44mm",
        "img_src": "/assets/img/upvc/pivot360-center-hung.jpg",
        "orig_file": "pivot-pvc-pencere-sistemi.jpg",
        "specs": [("Pivot Bearing", "Heavy-duty friction pivot with multi-stop brake"), ("Rotation Range", "Continuous 180-degree inversion"), ("Safety Catch", "Automatic engagement at 15-degree cleaning stop")]
    }
]

STEEL_PRODUCTS = [
    # Section 1: Heavy Structural Steel Plates & Sheet Products (Demkop: Yassı Ürünler)
    {
        "id": "CB-ST-0001",
        "name": "Cabivella S235JR Structural Steel Plate (St-37)",
        "slug": "cabivella-s235jr-st37-structural-steel-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "3 mm – 150 mm",
        "desc": "Standard hot-rolled non-alloy structural steel plate conforming to BS EN 10025-2. Ideal for welded columns, foundation baseplates, and general architectural metal fabrications.",
        "grade": "S235JR / St-37-2",
        "yield_strength": "235 MPa",
        "tensile_strength": "360 – 510 MPa",
        "img_src": "/assets/img/steel/plate-s235jr.svg",
        "specs": [
            ("Standard", "BS EN 10025-2:2019"),
            ("Thickness Range", "3 mm to 150 mm"),
            ("Plate Dimensions", "1500x6000 mm / 2000x12000 mm / Custom cut"),
            ("Yield Strength (ReH)", "Min 235 N/mm²"),
            ("Tensile Strength (Rm)", "360 – 510 N/mm²"),
            ("Elongation (A5)", "Min 26%"),
            ("Weldability", "Excellent CEV ≤ 0.35"),
            ("Mill Certification", "EN 10204 3.1 Certified")
        ]
    },
    {
        "id": "CB-ST-0002",
        "name": "Cabivella S275JR Medium-Tensile Steel Plate (St-44)",
        "slug": "cabivella-s275jr-st44-medium-tensile-steel-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "4 mm – 120 mm",
        "desc": "Medium-strength carbon manganese structural steel with enhanced load-bearing capacity for bridge girders, industrial mezzanine framing, and multi-storey connections.",
        "grade": "S275JR / St-44-2",
        "yield_strength": "275 MPa",
        "tensile_strength": "410 – 560 MPa",
        "img_src": "/assets/img/steel/plate-s275jr.svg",
        "specs": [
            ("Standard", "BS EN 10025-2"),
            ("Yield Strength", "Min 275 N/mm²"),
            ("Tensile Strength", "410 – 560 N/mm²"),
            ("Impact Energy", "27 Joules at 20°C (JR)"),
            ("Fabrication Suitability", "CNC laser, plasma and cold brake folding")
        ]
    },
    {
        "id": "CB-ST-0003",
        "name": "Cabivella S355J2+N High-Yield Structural Plate (St-52)",
        "slug": "cabivella-s355j2-st52-high-yield-structural-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "5 mm – 200 mm",
        "desc": "High-yield normalized structural steel plate offering superior toughness down to -20°C. Engineered for heavy crane girders, offshore platforms, and seismic architectural nodes.",
        "grade": "S355J2+N / St-52-3",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/plate-s355j2.svg",
        "specs": [
            ("Standard", "BS EN 10025-2:2019"),
            ("Impact Test", "27 J at -20°C (J2 test)"),
            ("Condition", "Normalized / Normalized rolled (+N)"),
            ("Yield Strength", "Min 355 N/mm²"),
            ("Ultrasonic Testing", "EN 10160 Class S1/E1 on request")
        ]
    },
    {
        "id": "CB-ST-0004",
        "name": "Cabivella ColdRoll DC01 Precision DKP Steel Sheet",
        "slug": "cabivella-coldroll-dc01-precision-dkp-sheet",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "0.50 mm – 3.00 mm",
        "desc": "Cold-reduced carbon steel sheet with flawless surface smoothness, high drawing ductility, and tight gauge tolerance for architectural casings and precision sheet metal.",
        "grade": "DC01 / St-12 (EN 10130)",
        "yield_strength": "140 – 280 MPa",
        "tensile_strength": "270 – 410 MPa",
        "img_src": "/assets/img/steel/sheet-coldroll.svg",
        "specs": [
            ("Standard", "BS EN 10130:2006"),
            ("Surface Finish", "Skin-passed matte / light oil"),
            ("Thickness Range", "0.50 mm to 3.00 mm"),
            ("Coil Widths", "1000 mm, 1250 mm, 1500 mm"),
            ("Application", "Acoustic panels, metal doors, HVAC enclosures")
        ]
    },
    {
        "id": "CB-ST-0005",
        "name": "Cabivella ZincShield DX51D+Z Continuous Galvanised Sheet",
        "slug": "cabivella-zincshield-dx51d-galvanised-sheet",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "0.40 mm – 4.00 mm",
        "desc": "Continuous hot-dip zinc coated steel sheet offering robust corrosion resistance with zinc coating weights from Z100 to Z275 g/m² for external construction ducting.",
        "grade": "DX51D+Z / S280GD+Z",
        "yield_strength": "Forming Grade",
        "tensile_strength": "270 – 500 MPa",
        "img_src": "/assets/img/steel/sheet-galvanised.svg",
        "specs": [
            ("Standard", "BS EN 10346:2015"),
            ("Zinc Coating Weight", "Z140 to Z275 (double-sided)"),
            ("Surface Treatment", "Passivated (chemical treatment) & unoiled"),
            ("Spangle Structure", "Minimized spangle (M) for smooth painting")
        ]
    },
    {
        "id": "CB-ST-0006",
        "name": "Cabivella PressureCore P265GH Boiler Quality Carbon Plate",
        "slug": "cabivella-pressurecore-p265gh-boiler-quality-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "6 mm – 100 mm",
        "desc": "Elevated-temperature pressure vessel steel plate conforming to BS EN 10028-2, certified for pressurized heat exchangers, boilers, and high-temp industrial plant vessels.",
        "grade": "P265GH / P355GH (EN 10028-2)",
        "yield_strength": "265 MPa",
        "tensile_strength": "410 – 530 MPa",
        "img_src": "/assets/img/steel/plate-pressure.svg",
        "specs": [
            ("Standard", "BS EN 10028-2:2017"),
            ("Pressure Directive", "PED 2014/68/EU Compliant"),
            ("Hot Yield Proof (0.2%)", "Min 190 MPa at 300°C"),
            ("Certification", "3.1 / 3.2 Inspectorate Inspection (Lloyd's / DNV)")
        ]
    },
    {
        "id": "CB-ST-0007",
        "name": "Cabivella HardWear Extreme Abrasion-Resistant Plate",
        "slug": "cabivella-hardwear-extreme-abrasion-resistant-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "4 mm – 80 mm",
        "desc": "Through-hardened wear plates delivering 400 to 500 Brinell nominal hardness for aggregate chutes, concrete mixer liners, quarry skips, and earthmoving buckets.",
        "grade": "Cabivella HardWear 400 / 500 HBW",
        "yield_strength": "1000 – 1250 MPa",
        "tensile_strength": "1250 – 1650 MPa",
        "img_src": "/assets/img/steel/plate-hardwear.svg",
        "specs": [
            ("Hardness", "400 HBW / 500 HBW nominal"),
            ("Impact Toughness", "Min 30 J at -40°C"),
            ("Cold Bending", "Formable under certified brake radius"),
            ("Lifespan", "4x to 6x longer service life vs S355")
        ]
    },
    {
        "id": "CB-ST-0008",
        "name": "Cabivella CortenCraft S355J2W Architectural Weathering Plate",
        "slug": "cabivella-cortencraft-s355j2w-weathering-plate",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "1.5 mm – 40 mm",
        "desc": "Atmospheric corrosion-resistant structural steel that forms a self-healing protective copper-rich patina, eliminating the need for periodic paint maintenance.",
        "grade": "S355J2W+N / Cor-Ten A & B",
        "yield_strength": "355 MPa",
        "tensile_strength": "490 – 630 MPa",
        "img_src": "/assets/img/steel/plate-corten.svg",
        "specs": [
            ("Standard", "BS EN 10025-5:2019"),
            ("Patina Chemistry", "Alloyed with Copper, Chromium, Nickel"),
            ("Corrosion Resistance", "5x higher atmospheric resistance than carbon steel"),
            ("Applications", "Sculptural façades, retaining walls, landscape bridges")
        ]
    },
    {
        "id": "CB-ST-0009",
        "name": "Cabivella MangArmor X120Mn12 Work-Hardening Steel",
        "slug": "cabivella-mangarmor-x120mn12-work-hardening-steel",
        "section": "Structural Steel Plates & Sheet Products",
        "category": "Plates & Sheets",
        "thickness": "3 mm – 30 mm",
        "desc": "11-14% high-manganese austenitic wear plate that rapidly work-hardens under repeated severe impact from 200 HB up to 550 HB without becoming brittle.",
        "grade": "X120Mn12 / 1.3401 (Hadfield Manganese)",
        "yield_strength": "350 MPa",
        "tensile_strength": "800 – 1000 MPa",
        "img_src": "/assets/img/steel/plate-manganese.svg",
        "specs": [
            ("Initial Hardness", "Approx 200 HBW"),
            ("Work-Hardened Hardness", "Up to 550 HBW under kinetic impact"),
            ("Magnetic Property", "Completely non-magnetic austenitic structure"),
            ("Application", "Shot-blast liners, security safes, crusher jaws")
        ]
    },

    # Section 2: Long Structural Sections & Hollow Tubes (Demkop: Uzun Ürünler)
    {
        "id": "CB-ST-0010",
        "name": "Cabivella SquareHollow SHS Hot-Finished Box Profile",
        "slug": "cabivella-squarehollow-shs-box-profile",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "20x20 mm to 400x400 mm",
        "desc": "Seamless or high-frequency welded square structural hollow sections conforming to BS EN 10210 / 10219. Delivers high torsional rigidity for building columns.",
        "grade": "S275J2H / S355J2H",
        "yield_strength": "275 – 355 MPa",
        "tensile_strength": "430 – 600 MPa",
        "img_src": "/assets/img/steel/section-shs.svg",
        "specs": [
            ("Standards", "BS EN 10210-1 (Hot Finished) / BS EN 10219-1 (Cold Formed)"),
            ("Size Range", "20x20x2 mm up to 400x400x16 mm"),
            ("Corner Radius", "Controlled tight external radius for architectural aesthetics"),
            ("Corner Weldability", "Full penetration corner suitability")
        ]
    },
    {
        "id": "CB-ST-0011",
        "name": "Cabivella RectHollow RHS Architectural Box Sections",
        "slug": "cabivella-recthollow-rhs-box-sections",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "40x20 mm to 500x300 mm",
        "desc": "Rectangular structural hollow section optimized for directional flexural loading in roof trusses, portal rafters, and curtain-wall mullion backings.",
        "grade": "S355J2H / S275J2H",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/section-rhs.svg",
        "specs": [
            ("Standards", "BS EN 10210 & BS EN 10219"),
            ("Dimensions", "40x20x2.5 mm up to 500x300x20 mm"),
            ("Tolerances", "Tight dimensional tolerances to EN 10210-2")
        ]
    },
    {
        "id": "CB-ST-0012",
        "name": "Cabivella StructuralPipe CHS Welded & Seamless Hollow Tubes",
        "slug": "cabivella-structuralpipe-chs-hollow-tubes",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "OD 21.3 mm to 610 mm",
        "desc": "Circular hollow sections (CHS) providing isotropic sectional properties, low aerodynamic drag, and minimal surface area for painted stadium trusses and architectural spaceframes.",
        "grade": "S355J2H / S235JRH",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/section-chs.svg",
        "specs": [
            ("Standard", "BS EN 10210 / EN 10219 / ASTM A500"),
            ("Outer Diameters", "21.3 mm to 610 mm outside diameter"),
            ("Wall Thicknesses", "2.0 mm to 32 mm"),
            ("Testing", "Non-destructive Eddy Current and Hydrostatic tested")
        ]
    },
    {
        "id": "CB-ST-0013",
        "name": "Cabivella BoilerTube EN 10216-2 Seamless Heat Exchanger Tubes",
        "slug": "cabivella-boilertube-en10216-2-heat-exchanger-tubes",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "OD 17.2 mm to 219 mm",
        "desc": "Seamless carbon steel tubes designed for elevated temperature pressurized service in boiler plants, steam generation conduits, and district heating manifolds.",
        "grade": "P235GH / 16Mo3 (EN 10216-2)",
        "yield_strength": "235 MPa",
        "tensile_strength": "360 – 480 MPa",
        "img_src": "/assets/img/steel/section-boilertube.svg",
        "specs": [
            ("Standard", "BS EN 10216-2:2014"),
            ("Testing", "100% Eddy Current / Ultrasonic flaw detection"),
            ("Certification", "EN 10204 3.1 with heat charge traceability")
        ]
    },
    {
        "id": "CB-ST-0014",
        "name": "Cabivella UniversalBeam IPE Narrow Parallel Flange Beams",
        "slug": "cabivella-universalbeam-ipe-parallel-flange-beams",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "IPE 80 to IPE 600",
        "desc": "Standard European I-profile parallel flange beams offering optimized weight-to-bending strength ratio for multi-storey floor joists and primary structural steel frameworks.",
        "grade": "S275JR / S355J2",
        "yield_strength": "275 – 355 MPa",
        "tensile_strength": "410 – 630 MPa",
        "img_src": "/assets/img/steel/section-ipe.svg",
        "specs": [
            ("Standard", "BS EN 10025-2 & EN 10034"),
            ("Profile Sizes", "IPE 80 up to IPE 600"),
            ("Flange Design", "True parallel flanges for simplified bolted end-plate connections")
        ]
    },
    {
        "id": "CB-ST-0015",
        "name": "Cabivella StandardBeam IPN Tapered Flange Architectural Joists",
        "slug": "cabivella-standardbeam-ipn-tapered-flange-joists",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "IPN 80 to IPN 550",
        "desc": "Classic I-beams with an 8% internal flange taper conforming to DIN 1025-1. Preferred for monorail hoist tracks and heritage steel restorations.",
        "grade": "S235JR / S275JR",
        "yield_strength": "235 – 275 MPa",
        "tensile_strength": "360 – 510 MPa",
        "img_src": "/assets/img/steel/section-ipn.svg",
        "specs": [
            ("Standard", "DIN 1025-1 / BS EN 10024"),
            ("Profile Sizes", "IPN 80 to IPN 550"),
            ("Application", "Overhead gantry rails and monorail crane beams")
        ]
    },
    {
        "id": "CB-ST-0016",
        "name": "Cabivella WideFlange HEA Light Universal Steel Columns",
        "slug": "cabivella-wideflange-hea-light-universal-columns",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "HEA 100 to HEA 1000",
        "desc": "European wide-flange beams with reduced web and flange thicknesses compared to HEB, delivering maximum load-bearing efficiency per tonne of structural steelwork.",
        "grade": "S355J2 / S275JR",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/section-hea.svg",
        "specs": [
            ("Standard", "EN 10025-2 & DIN 1025-3"),
            ("Size Range", "HEA 100 to HEA 1000"),
            ("Advantage", "15% lighter than standard HEB while preserving 85% axial column strength")
        ]
    },
    {
        "id": "CB-ST-0017",
        "name": "Cabivella HeavyFlange HEB Standard Universal Columns",
        "slug": "cabivella-heavyflange-heb-standard-universal-columns",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "HEB 100 to HEB 1000",
        "desc": "Standard European broad-flange H-columns engineered for primary vertical building columns carrying combined high axial compression and biaxial bending moments.",
        "grade": "S355J2 / S355JR",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/section-heb.svg",
        "specs": [
            ("Standard", "EN 10025-2 & DIN 1025-2"),
            ("Size Range", "HEB 100 to HEB 1000"),
            ("Mass Range", "20.4 kg/m up to 314 kg/m")
        ]
    },
    {
        "id": "CB-ST-0018",
        "name": "Cabivella MassiveFlange HEM Heavy Load-Bearing Girders",
        "slug": "cabivella-massiveflange-hem-heavy-girders",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "HEM 100 to HEM 1000",
        "desc": "Extra-heavy European wide-flange beams with ultra-thick webs and flanges, supporting skyscraper transfer trusses, bridge piers, and nuclear plant foundations.",
        "grade": "S355J2 / S355K2",
        "yield_strength": "355 MPa",
        "tensile_strength": "470 – 630 MPa",
        "img_src": "/assets/img/steel/section-hem.svg",
        "specs": [
            ("Standard", "DIN 1025-4 & EN 10034"),
            ("Max Flange Thickness", "Up to 40 mm thick monolithic flanges"),
            ("Application", "Severe heavy-civil engineering and seismic transfer girders")
        ]
    },
    {
        "id": "CB-ST-0019",
        "name": "Cabivella ParallelChannel UPN Structural Parallel Channels",
        "slug": "cabivella-parallelchannel-upn-structural-channels",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "UPN 50 to UPN 400",
        "desc": "Hot-rolled U-profile steel channels with tapered or parallel flanges, universally specified for staircase stringers, edge trims, and perimeter building lintels.",
        "grade": "S235JR / S275JR",
        "yield_strength": "235 – 275 MPa",
        "tensile_strength": "360 – 510 MPa",
        "img_src": "/assets/img/steel/section-upn.svg",
        "specs": [
            ("Standard", "DIN 1026-1 / BS EN 10279"),
            ("Profile Sizes", "UPN 50 up to UPN 400"),
            ("Application", "Architectural stair stringers and perimeter tie channels")
        ]
    },
    {
        "id": "CB-ST-0020",
        "name": "Cabivella EqualAngle RSA Structural L-Profile Angles",
        "slug": "cabivella-equalangle-rsa-structural-angles",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "20x20x3 mm to 200x200x24 mm",
        "desc": "Equal and unequal hot-rolled structural steel angle bars manufactured to BS EN 10056-1. Primary bracing elements for transmission towers and truss diagonals.",
        "grade": "S275JR / S355J2",
        "yield_strength": "275 – 355 MPa",
        "tensile_strength": "410 – 630 MPa",
        "img_src": "/assets/img/steel/section-angle.svg",
        "specs": [
            ("Standard", "BS EN 10056-1:2017"),
            ("Size Range", "20x20x3 mm up to 200x200x24 mm"),
            ("Tolerances", "EN 10056-2 tight angular tolerance")
        ]
    },
    {
        "id": "CB-ST-0021",
        "name": "Cabivella SolidBar Flat & Square Structural Bars",
        "slug": "cabivella-solidbar-flat-square-structural-bars",
        "section": "Long Structural Sections & Hollow Tubes",
        "category": "Structural Sections",
        "thickness": "Flats: 10x3 to 300x50 mm | Squares: 10x10 to 120x120 mm",
        "desc": "Hot-rolled merchant solid bars produced to strict dimensional EN standards for steel fabricators, machine shafts, balustrades, and structural tie rods.",
        "grade": "S235JR / S355J2",
        "yield_strength": "235 – 355 MPa",
        "tensile_strength": "360 – 630 MPa",
        "img_src": "/assets/img/steel/section-solidbar.svg",
        "specs": [
            ("Standards", "EN 10058 (Flats) / EN 10059 (Squares)"),
            ("Length Supply", "Standard 6000 mm / 12000 mm lengths or cut-to-size")
        ]
    },

    # Section 3: Architectural Stainless Steel Products (Demkop: Paslanmaz Çelik)
    {
        "id": "CB-ST-0022",
        "name": "Cabivella InoxSheet Grade 304 Satin Stainless Plate",
        "slug": "cabivella-inoxsheet-grade-304-satin-plate",
        "section": "Architectural Stainless Steel Products",
        "category": "Stainless Steel",
        "thickness": "0.8 mm – 50 mm",
        "desc": "Austenitic grade 1.4301 (AISI 304) stainless steel plate available in mill 1D, 2B cold rolled, or 240-grit architectural satin finish for internal and commercial façades.",
        "grade": "1.4301 / AISI 304",
        "yield_strength": "230 MPa",
        "tensile_strength": "540 – 750 MPa",
        "img_src": "/assets/img/steel/inox-sheet-304.svg",
        "specs": [
            ("Standard", "BS EN 10088-2 / ASTM A240"),
            ("Surface Finishes", "2B, No.4 Satin Brushed, Hairline, Mirror No.8 with protective PVC foil"),
            ("Food Contact", "Fully hygienic and certified for catering / architectural cladding")
        ]
    },
    {
        "id": "CB-ST-0023",
        "name": "Cabivella MarineInox Grade 316 Acid-Resistant Marine Plate",
        "slug": "cabivella-marineinox-grade-316-acid-resistant-plate",
        "section": "Architectural Stainless Steel Products",
        "category": "Stainless Steel",
        "thickness": "1.0 mm – 60 mm",
        "desc": "Molybdenum-bearing austenitic stainless steel (1.4404 / 316L) providing exceptional pitting resistance in coastal salt spray and urban sulphur atmospheres.",
        "grade": "1.4404 / AISI 316L",
        "yield_strength": "240 MPa",
        "tensile_strength": "550 – 700 MPa",
        "img_src": "/assets/img/steel/inox-sheet-316.svg",
        "specs": [
            ("Standard", "BS EN 10088-2 / ASTM A240"),
            ("Molybdenum Content", "Min 2.0% Mo for chloride pitting immunity"),
            ("PREN Value", "Pitting Resistance Equivalent Number ≥ 25")
        ]
    },
    {
        "id": "CB-ST-0024",
        "name": "Cabivella InoxTube Sanitary & Architectural Stainless Sections",
        "slug": "cabivella-inoxtube-sanitary-architectural-sections",
        "section": "Architectural Stainless Steel Products",
        "category": "Stainless Steel",
        "thickness": "Round: 12–219 mm | Square: 20x20 to 150x150 mm",
        "desc": "High-specification circular, square, and rectangular stainless steel hollow sections in grades 304 and 316 for structural handrails, balustrades, and canopies.",
        "grade": "304 / 316L (EN 10217-7 / EN 10296-2)",
        "yield_strength": "240 MPa",
        "tensile_strength": "550 MPa",
        "img_src": "/assets/img/steel/inox-tube.svg",
        "specs": [
            ("Standards", "BS EN 10296-2 & EN 10217-7"),
            ("Finishes", "Mirror Polished 600-grit, Satin Brushed 320-grit")
        ]
    },

    # Section 4: CNC Cutting, Processing & Fabricated Packages (Demkop: Kesilmiş & İşlenmiş)
    {
        "id": "CB-ST-0025",
        "name": "Cabivella PrecisionLaser CNC 20kW Fiber Laser Cutting",
        "slug": "cabivella-precisionlaser-cnc-fiber-laser-cutting",
        "section": "CNC Cutting, Processing & Fabricated Packages",
        "category": "Processing & Fabrication",
        "thickness": "0.5 mm – 40 mm",
        "desc": "High-speed 20 kW CNC fiber laser cutting service operating on multi-axis beds up to 3000x12000 mm with nitrogen assist, delivering zero-dross clean edges.",
        "grade": "Customer Specification",
        "yield_strength": "Precision Tolerances",
        "tensile_strength": "ISO 9013 Class 1",
        "img_src": "/assets/img/steel/proc-laser.svg",
        "specs": [
            ("Machine Capacity", "20 kW Fiber Laser with automated pallet changers"),
            ("Bed Size", "Up to 3,000 x 12,000 mm sheet capacity"),
            ("Tolerance", "± 0.2 mm positional tolerance to ISO 9013 Class 1"),
            ("Materials Cut", "Mild carbon steel, Corten, stainless steel, aluminium")
        ]
    },
    {
        "id": "CB-ST-0026",
        "name": "Cabivella MegaPlasma Heavy-Duty Underwater CNC Plasma",
        "slug": "cabivella-megaplasma-heavy-duty-plasma-cutting",
        "section": "CNC Cutting, Processing & Fabricated Packages",
        "category": "Processing & Fabrication",
        "thickness": "10 mm – 150 mm",
        "desc": "Heavy-plate high-definition underwater CNC plasma and oxy-fuel profile cutting for thick foundation baseplates, heavy crane hooks, and counterweights.",
        "grade": "Customer Specification",
        "yield_strength": "Heavy Plate",
        "tensile_strength": "ISO 9013 Class 2",
        "img_src": "/assets/img/steel/proc-plasma.svg",
        "specs": [
            ("Max Thickness", "Plasma up to 60 mm / Oxy-fuel up to 250 mm"),
            ("Thermal Distortion", "Minimized via underwater cutting bed"),
            ("Bevel Cutting", "3D multi-axis weld prep bevel cutting up to ±45°")
        ]
    },
    {
        "id": "CB-ST-0027",
        "name": "Cabivella PressBrake Multi-Axis CNC Hydraulic Plate Bending",
        "slug": "cabivella-pressbrake-cnc-hydraulic-plate-bending",
        "section": "CNC Cutting, Processing & Fabricated Packages",
        "category": "Processing & Fabrication",
        "thickness": "Up to 25 mm plate",
        "desc": "Heavy-tonnage multi-axis CNC press brake folding service capable of bending complex structural channels, curved flashings, and architectural column covers.",
        "grade": "Plate Forming",
        "yield_strength": "1000 Tonne Capacity",
        "tensile_strength": "Precision Angles",
        "img_src": "/assets/img/steel/proc-bending.svg",
        "specs": [
            ("Press Capacity", "1000 tonnes synchronized tandem press brakes"),
            ("Bending Length", "Up to 8,000 mm in single piece or 16,000 mm in tandem"),
            ("Crowning System", "Dynamic hydraulic crowning for zero angular error")
        ]
    },
    {
        "id": "CB-ST-0028",
        "name": "Cabivella CoiledSlit Automated Decoiling & Slitting Lines",
        "slug": "cabivella-coiledslit-decoiling-slitting-lines",
        "section": "CNC Cutting, Processing & Fabricated Packages",
        "category": "Processing & Fabrication",
        "thickness": "0.50 mm – 16 mm",
        "desc": "High-output computerized coil decoiling, rotary shear slitting, and precision cut-to-length lines processing master coils into custom-dimensioned strips.",
        "grade": "Coil Processing",
        "yield_strength": "Coil Processing",
        "tensile_strength": "Burr-Free",
        "img_src": "/assets/img/steel/proc-slitting.svg",
        "specs": [
            ("Coil Weight", "Up to 35 tonnes master coils"),
            ("Slit Widths", "From 20 mm up to 2000 mm slit strips"),
            ("Levelling", "Precision 6-high roller leveller eliminating coil set")
        ]
    },
    {
        "id": "CB-ST-0029",
        "name": "Cabivella FabriPack Drawing-to-Site Fabricated Assemblies",
        "slug": "cabivella-fabripack-drawing-to-site-assemblies",
        "section": "CNC Cutting, Processing & Fabricated Packages",
        "category": "Processing & Fabrication",
        "thickness": "Full Structural Packs",
        "desc": "Full turnkey fabrication of architectural steelwork from client Tekla / IFC / DWG models. Includes shot-blasting, SAW welding, hot-dip galvanizing, and site marking.",
        "grade": "BS EN 1090-2 EXC3",
        "yield_strength": "CE / UKCA Marked",
        "tensile_strength": "ISO 3834-2",
        "img_src": "/assets/img/steel/proc-fabripack.svg",
        "specs": [
            ("Execution Class", "BS EN 1090-2 Execution Class 3 (EXC3)"),
            ("Welding Quality", "ISO 3834-2 comprehensive quality requirements"),
            ("Surface Finishing", "Hot-dip galvanizing to BS EN ISO 1461 & C4/C5 marine paint schemes"),
            ("Delivery", "Sequential site delivery packs tagged with piece marks")
        ]
    },

    # Section 5: Primary Semi-Finished Steel (Demkop: Yarı Mamuller)
    {
        "id": "CB-ST-0030",
        "name": "Cabivella MasterCoil Prime Hot-Rolled Pickled Coils",
        "slug": "cabivella-mastercoil-prime-hot-rolled-coils",
        "section": "Primary Semi-Finished Steel",
        "category": "Semi-Finished",
        "thickness": "1.5 mm – 20 mm",
        "desc": "Direct mill supply of hot-rolled and pickled & oiled (HRP) steel coils in commercial and drawing grades for roll-forming, profile manufacturing, and tube making.",
        "grade": "S235JR / DD11 / S355MC",
        "yield_strength": "235 – 355 MPa",
        "tensile_strength": "Standard Mill Coils",
        "img_src": "/assets/img/steel/semi-coil.svg",
        "specs": [
            ("Standard", "EN 10051 / EN 10111"),
            ("Internal Diameter", "610 mm / 760 mm standard bore"),
            ("Coil Weight", "15 to 30 tonnes per coil")
        ]
    },
    {
        "id": "CB-ST-0031",
        "name": "Cabivella HeavySlab Continuous Casting Steel Slabs",
        "slug": "cabivella-heavyslab-continuous-casting-steel-slabs",
        "section": "Primary Semi-Finished Steel",
        "category": "Semi-Finished",
        "thickness": "150 mm – 300 mm",
        "desc": "Primary continuous cast steel slabs conforming to international chemical standards, supplied directly to re-rolling mills and heavy forging facilities.",
        "grade": "Carbon & Alloyed Steels",
        "yield_strength": "Primary Ingot/Slab",
        "tensile_strength": "Homogeneous Melt",
        "img_src": "/assets/img/steel/semi-slab.svg",
        "specs": [
            ("Thickness", "150 mm to 300 mm monolithic cast slab"),
            ("Width", "1000 mm to 2200 mm"),
            ("Chemical Segregation", "Argon-shrouded casting for ultra-clean microstructure")
        ]
    },
    {
        "id": "CB-ST-0032",
        "name": "Cabivella SteelBillet Forging & Re-Rolling Square Billets",
        "slug": "cabivella-steelbillet-forging-rerolling-billets",
        "section": "Primary Semi-Finished Steel",
        "category": "Semi-Finished",
        "thickness": "100x100 mm to 200x200 mm",
        "desc": "Continuously cast square steel billets with uniform grain structure for high-speed rolling into rebars, wire rods, and merchant profile bars.",
        "grade": "3sp / 5sp / Grade 60 (BS 4449)",
        "yield_strength": "Structural Billet",
        "tensile_strength": "Re-rolling Standard",
        "img_src": "/assets/img/steel/semi-billet.svg",
        "specs": [
            ("Cross-Section", "100x100, 120x120, 130x130, 150x150 mm"),
            ("Length", "6000 mm or 12000 mm standard billet length"),
            ("Defect Free", "100% surface crack inspected and ends sheared")
        ]
    }
]

ROOFING_PRODUCTS = [
    # Section 1: Traditional Clay & Architectural Slate
    {
        "id": "CB-RF-0001",
        "name": "Cabivella HeritageClay Mediterranean Interlocking Clay Tile",
        "slug": "cabivella-heritageclay-interlocking-clay-tile",
        "section": "Traditional Clay & Architectural Slate",
        "category": "Clay & Slate",
        "desc": "High-temperature kiln-fired natural clay interlocking roof tiles conforming to BS EN 1304. Offers 100-year durability, frost resistance, and timeless architectural aesthetics.",
        "gauge": "Pitch 17.5° – 90°",
        "coverage": "10.5 tiles / m²",
        "fire_rating": "Class A1 Non-combustible",
        "img_src": "/assets/img/roofing/clay-tile.svg",
        "specs": [
            ("Standard", "BS EN 1304:2013"),
            ("Material", "100% natural alluvial clay fired at 1050°C"),
            ("Frost Resistance", "Method E (150 freeze-thaw cycles pass)"),
            ("Water Impermeability", "Category 1 (<0.8 cm³/cm²·day)"),
            ("Flexural Strength", "Min 1200 N breaking load"),
            ("Colours", "Natural Terracotta, Anthracite Engobe, Rustic Antique")
        ]
    },
    {
        "id": "CB-RF-0002",
        "name": "Cabivella SlateCraft Natural Architectural Roofing Slate",
        "slug": "cabivella-slatecraft-natural-architectural-slate",
        "section": "Traditional Clay & Architectural Slate",
        "category": "Clay & Slate",
        "desc": "Hand-split authentic natural metamorphic slate tiles engineered for prime British and European heritage restorations and high-end residential architecture.",
        "gauge": "Pitch 22.5°+",
        "coverage": "Approx 14 slates / m²",
        "fire_rating": "Class A1",
        "img_src": "/assets/img/roofing/slate-tile.svg",
        "specs": [
            ("Standard", "BS EN 12326-1:2014"),
            ("Water Absorption", "W1 grade (<0.6%)"),
            ("Thermal Cycle Code", "T1 (no oxidation or structural change)"),
            ("SO2 Resistance", "S1 code (unaffected by acid rain)"),
            ("Sizes", "500x250 mm / 400x200 mm")
        ]
    },

    # Section 2: Stone-Coated & Pre-Painted Metal Roof Tiles
    {
        "id": "CB-RF-0003",
        "name": "Cabivella UltraTile Stone-Granule Coated Steel Shingle",
        "slug": "cabivella-ultratile-stone-coated-steel-shingle",
        "section": "Stone-Coated & Pre-Painted Metal Roof Tiles",
        "category": "Metal Tiles",
        "desc": "Aluzinc (55% Al-Zn) core steel roofing panel embedded with natural volcanic stone granules and acrylic overglaze. Weighs only 6.5 kg/m² with Class 4 hail resistance.",
        "gauge": "Pitch 12° – 90°",
        "coverage": "2.15 panels / m² (6.5 kg/m²)",
        "fire_rating": "Class A / Broof(t4)",
        "img_src": "/assets/img/roofing/stone-coated-steel.svg",
        "specs": [
            ("Substrate", "Aluzinc (AZ150) high-tensile structural steel"),
            ("Surface", "Ceramic-coated basalt stone granules with pure acrylic binder"),
            ("Wind Resistance", "Interlocking concealed nailing withstanding 240 km/h hurricane gusts"),
            ("Hail Rating", "UL 2218 Class 4 (highest impact rating)"),
            ("Weight Advantage", "1/7th the weight of traditional concrete or clay roof tiles")
        ]
    },
    {
        "id": "CB-RF-0004",
        "name": "Cabivella ColorTile Pre-Painted Metal Architectural Tile",
        "slug": "cabivella-colortile-prepainted-metal-tile",
        "section": "Stone-Coated & Pre-Painted Metal Roof Tiles",
        "category": "Metal Tiles",
        "desc": "Step-pressed prepainted galvanized steel tile panels with 50-micron PVDF or High-Durable Polyester (HDP) coatings mimicking classical pan-and-roll tile aesthetics.",
        "gauge": "Pitch 14°+",
        "coverage": "Custom length sheets (approx 4.8 kg/m²)",
        "fire_rating": "Class A2-s1, d0",
        "img_src": "/assets/img/roofing/painted-metal-tile.svg",
        "specs": [
            ("Core Steel", "0.50 mm – 0.60 mm S280GD + Z275 hot-dip galvanised"),
            ("Coating System", "50 µm Polyurethane / 25 µm HDP polyester"),
            ("Sheet Lengths", "Factory roll-formed up to 7.0 m to eliminate end-laps"),
            ("Corrosion Class", "RC4 / RC5 external atmospheric durability")
        ]
    },

    # Section 3: High-Performance Insulated Sandwich Panels
    {
        "id": "CB-RF-0005",
        "name": "Cabivella ThermoCore PIR 5-Rib Insulated Roof Panel",
        "slug": "cabivella-thermocore-pir-insulated-roof-panel",
        "section": "High-Performance Insulated Sandwich Panels",
        "category": "Sandwich Panels",
        "desc": "Polyisocyanurate (PIR) rigid core composite roof panels with 5 continuous stiffening trapezoidal ribs, achieving thermal conductivity lambda λ = 0.022 W/mK and B-s1,d0 fire behavior.",
        "gauge": "Core 40 mm – 150 mm",
        "coverage": "1000 mm modular width",
        "fire_rating": "B-s1, d0 / LPCB Certified",
        "img_src": "/assets/img/roofing/panel-pir.svg",
        "specs": [
            ("Standard", "BS EN 14509:2013"),
            ("Thermal Conductivity", "λ = 0.022 W/mK (highest commercial thermal efficiency)"),
            ("U-Value Range", "0.48 W/m²K (40mm) down to 0.14 W/m²K (150mm)"),
            ("External Skin", "0.50 mm pre-painted steel with 5 structural ribs"),
            ("Internal Skin", "0.40 mm bright white polyester steel or foil liner"),
            ("Overlapping", "Factory-trimmed cutback lip for watertight transverse joints")
        ]
    },
    {
        "id": "CB-RF-0006",
        "name": "Cabivella PyroSafe Rockwool Class-A1 Fireproof Roof Panel",
        "slug": "cabivella-pyrosafe-rockwool-fireproof-roof-panel",
        "section": "High-Performance Insulated Sandwich Panels",
        "category": "Sandwich Panels",
        "desc": "High-density structural stone wool core sandwich panel certified Class A1 non-combustible. Provides up to 120 minutes certified fire resistance (REI 120) and 34 dB acoustic damping.",
        "gauge": "Core 50 mm – 200 mm",
        "coverage": "1000 mm modular width",
        "fire_rating": "Class A1 / REI 120 Non-combustible",
        "img_src": "/assets/img/roofing/panel-rockwool.svg",
        "specs": [
            ("Standard", "BS EN 14509 & BS EN 13501-2"),
            ("Core Density", "100 – 120 kg/m³ vertically oriented basalt mineral wool fibers"),
            ("Fire Integrity", "REI 60 to REI 120 fire barrier certified"),
            ("Acoustic Reduction", "Rw = 32 – 36 dB (ideal for rain drumming noise reduction)"),
            ("Thermal Conductivity", "λ = 0.040 W/mK")
        ]
    },
    {
        "id": "CB-RF-0007",
        "name": "Cabivella EcoCore EPS Lightweight Insulated Roof Panel",
        "slug": "cabivella-ecocore-eps-lightweight-roof-panel",
        "section": "High-Performance Insulated Sandwich Panels",
        "category": "Sandwich Panels",
        "desc": "Expanded polystyrene (EPS) core composite roof panels offering an economical, ultra-lightweight thermal envelope solution for agricultural hangars and light commercial canopies.",
        "gauge": "Core 40 mm – 120 mm",
        "coverage": "1000 mm modular width",
        "fire_rating": "Class E / B-s2, d0 with fire retardant",
        "img_src": "/assets/img/roofing/panel-eps.svg",
        "specs": [
            ("Standard", "BS EN 14509"),
            ("Core Density", "16 – 20 kg/m³ flame-retardant EPS beads"),
            ("Thermal Conductivity", "λ = 0.038 W/mK"),
            ("Application", "Cost-effective warehouses, sports shelters, agricultural storage")
        ]
    },

    # Section 4: Trapezoidal & Sinusoidal Roof Profiles
    {
        "id": "CB-RF-0008",
        "name": "Cabivella BoxProfile 38/151 Galvanised Trapezoidal Sheet",
        "slug": "cabivella-boxprofile-38-151-trapezoidal-sheet",
        "section": "Trapezoidal & Sinusoidal Roof Profiles",
        "category": "Single Skin Metal",
        "desc": "Heavy-duty 38 mm deep trapezoidal box profile sheet manufactured from structural S320GD galvanized steel. Features capillary drainage groove along the side overlap.",
        "gauge": "0.50 mm – 1.00 mm",
        "coverage": "910 mm / 1000 mm cover width",
        "fire_rating": "Class A1",
        "img_src": "/assets/img/roofing/sheet-trapezoidal.svg",
        "specs": [
            ("Profile Geometry", "38 mm rib height at 151 mm pitch"),
            ("Steel Grade", "BS EN 10346 S320GD structural steel"),
            ("Capillary Groove", "Integrated anti-siphon channel on overlapping rib"),
            ("Anti-Condensation", "Optional factory-applied fleece backing (absorbs 900 g/m² moisture)")
        ]
    },
    {
        "id": "CB-RF-0009",
        "name": "Cabivella CorruWave 18/76 Architectural Sinusoidal Sheet",
        "slug": "cabivella-corruwave-18-76-sinusoidal-sheet",
        "section": "Trapezoidal & Sinusoidal Roof Profiles",
        "category": "Single Skin Metal",
        "desc": "Classic undulating sinusoidal corrugated metal sheets providing soft shadow-lines and dependable high-volume water shedding on agricultural and modern commercial façades.",
        "gauge": "0.50 mm – 0.80 mm",
        "coverage": "18 mm wave height at 76 mm pitch",
        "fire_rating": "Class A1",
        "img_src": "/assets/img/roofing/sheet-sinusoidal.svg",
        "specs": [
            ("Profile Wave", "18 mm amplitude / 76 mm wave length"),
            ("Finishes", "Polyester 25 µm, Granite HDX 55 µm, or Bare Galvalume AZ185"),
            ("Curve Capability", "Factory crimp-curved to radii as tight as 1.5 m")
        ]
    },

    # Section 5: Fibre Cement & Reinforced Corrugated Sheets
    {
        "id": "CB-RF-0010",
        "name": "Cabivella FibreShield Profile 6 Corrugated Fibre Cement",
        "slug": "cabivella-fibreshield-profile-6-fibre-cement",
        "section": "Fibre Cement & Reinforced Corrugated Sheets",
        "category": "Fibre Cement",
        "desc": "100% asbestos-free reinforced composite fibre cement sheets conforming to BS EN 494 Class 1A. Chemical-resistant and immune to fungal rot in humid agricultural atmospheres.",
        "gauge": "Thickness 6.5 mm",
        "coverage": "1016 mm cover width (Profile 6)",
        "fire_rating": "Class A2-s1, d0 Non-combustible",
        "img_src": "/assets/img/roofing/sheet-fibrecement.svg",
        "specs": [
            ("Standard", "BS EN 494:2012+A1:2015"),
            ("Material Composition", "Portland cement, natural cellulose fibres, reinforcing synthetic fibres"),
            ("Vapour Permeability", "High moisture breathability prevents dripping in equestrian / livestock barns"),
            ("Corrosion Resistance", "Totally unaffected by aggressive ammonia fumes and marine salt"),
            ("Acoustic Damping", "Zero drumming resonance under heavy torrential rain")
        ]
    },

    # Section 6: Translucent & Architectural Daylighting Systems
    {
        "id": "CB-RF-0011",
        "name": "Cabivella CrystalSpan Multiwall Polycarbonate Sheet",
        "slug": "cabivella-crystalspan-multiwall-polycarbonate",
        "section": "Translucent & Architectural Daylighting Systems",
        "category": "Daylighting",
        "desc": "Multi-chamber extruded polycarbonate daylighting sheets with co-extruded dual-side UV barriers, high impact resistance (200x stronger than glass), and thermal insulation down to 1.1 W/m²K.",
        "gauge": "10 mm – 40 mm",
        "coverage": "Up to 2100 mm width x 12 m length",
        "fire_rating": "Class B-s1, d0",
        "img_src": "/assets/img/roofing/polycarbonate-multiwall.svg",
        "specs": [
            ("Internal Structure", "5-wall, 7-wall and X-structure honeycombs"),
            ("Light Transmission", "55% – 78% depending on tint (Clear, Opal, Bronze)"),
            ("Impact Strength", "Virtually unbreakable (BS EN 16153 Class 1)"),
            ("Thermal U-Value", "1.1 W/m²K (40mm 7-wall) to 2.4 W/m²K (16mm)"),
            ("UV Warranty", "10-year warranty against yellowing and loss of light transmission")
        ]
    },
    {
        "id": "CB-RF-0012",
        "name": "Cabivella ArmourClear Solid Monolithic Polycarbonate",
        "slug": "cabivella-armourclear-solid-polycarbonate",
        "section": "Translucent & Architectural Daylighting Systems",
        "category": "Daylighting",
        "desc": "Optical-grade monolithic transparent polycarbonate sheets offering crystal clarity (89% light transmittance) combined with supreme vandal-proof ballistic and impact resistance.",
        "gauge": "2.0 mm – 15 mm",
        "coverage": "2050 x 3050 mm standard sheets",
        "fire_rating": "Class B-s1, d0",
        "img_src": "/assets/img/roofing/polycarbonate-solid.svg",
        "specs": [
            ("Standard", "BS EN ISO 11963"),
            ("Impact Resistance", "300 times higher impact resistance than standard float glass"),
            ("Light Transmittance", "89% (equal to architectural window glass)"),
            ("Cold Curving", "Can be cold-curved on site to minimum radius of 150x thickness")
        ]
    },
    {
        "id": "CB-RF-0013",
        "name": "Cabivella PolyGlass GRP Translucent Corrugated Daylight Sheet",
        "slug": "cabivella-polyglass-grp-translucent-daylight-sheet",
        "section": "Translucent & Architectural Daylighting Systems",
        "category": "Daylighting",
        "desc": "Glass Reinforced Polyester (GRP / CTP) corrugated profile rooflights profiled to match metal box sheets seamlessly, delivering diffuse natural daylight across warehouse floors.",
        "gauge": "Weight 1.8 – 3.6 kg/m²",
        "coverage": "Matches 38/151 & Sinusoidal profiles exactly",
        "fire_rating": "SAB Class 3 / Class 1 surface spread of flame",
        "img_src": "/assets/img/roofing/sheet-grp.svg",
        "specs": [
            ("Standard", "BS EN 1013"),
            ("UV Protection", "Melinex 389 anti-yellowing surface gelcoat"),
            ("Light Diffusion", "Even diffuse lighting prevents glare and internal hot-spots"),
            ("Service Temperature", "-40°C to +120°C")
        ]
    },
    {
        "id": "CB-RF-0014",
        "name": "Cabivella DomeLux Continuous Architectural Acrylic Skylights",
        "slug": "cabivella-domelux-architectural-acrylic-skylights",
        "section": "Translucent & Architectural Daylighting Systems",
        "category": "Daylighting",
        "desc": "Thermoformed double or triple-skin PMMA acrylic roof domes mounted on insulated GRP kerbs with integral natural smoke and heat exhaust (NSHEV) pneumatic opening options.",
        "gauge": "Double / Triple Skin",
        "coverage": "Spans up to 2000 x 3000 mm",
        "fire_rating": "Class B-s2, d0",
        "img_src": "/assets/img/roofing/skylight-dome.svg",
        "specs": [
            ("Standard", "BS EN 1873:2014"),
            ("Glazing Unit", "Impact-modified acrylic PMMA / Polycarbonate inner layer"),
            ("Upstand Kerb", "Thermally insulated double-walled polyurethane kerb (height 150–500 mm)"),
            ("Ventilation", "Optional 24V linear motor for everyday comfort airing")
        ]
    },
    {
        "id": "CB-RF-0015",
        "name": "Cabivella GlazedSpan Structural Aluminium Rooflights",
        "slug": "cabivella-glazedspan-structural-glazed-rooflights",
        "section": "Translucent & Architectural Daylighting Systems",
        "category": "Daylighting",
        "desc": "Thermally broken structural aluminium roof lanterns, flat walk-on skylights, and pitched ridgelights glazed with hermetically sealed argon-filled toughened laminates.",
        "gauge": "Span to specification",
        "coverage": "Custom architectural atriums",
        "fire_rating": "Class A1 / CWCT tested",
        "img_src": "/assets/img/roofing/skylight-glazed.svg",
        "specs": [
            ("Structure", "Thermally broken extruded 6063-T6 architectural aluminium"),
            ("Glass Spec", "6mm toughened Low-E + 16mm Argon + 8.8mm acoustic laminate (Walk-on: 33mm laminated)"),
            ("Thermal Value", "Overall Uw = 1.05 W/m²K"),
            ("Testing", "CWCT Class 1 airtightness and water testing")
        ]
    },

    # Section 7: Bituminous Waterproofing & Rainwater Systems
    {
        "id": "CB-RF-0016",
        "name": "Cabivella FlexiShingle Multi-Tab Bituminous Roof Shingle",
        "slug": "cabivella-flexishingle-bituminous-roof-shingle",
        "section": "Bituminous Waterproofing & Rainwater Systems",
        "category": "Waterproofing",
        "desc": "Glass-fibre reinforced polymer-modified bitumen architectural shingles with ceramic basalt granules. Highly flexible around hips, valleys, and conical roof shapes.",
        "gauge": "Pitch 15° – 85°",
        "coverage": "Approx 3.0 m² per pack (9.5 kg/m²)",
        "fire_rating": "Broof(t1) / BS EN 544",
        "img_src": "/assets/img/roofing/shingle-bitumen.svg",
        "specs": [
            ("Standard", "BS EN 544:2011"),
            ("Reinforcement", "High-tensile non-woven glass fibre mat (110 g/m²)"),
            ("Adhesive Line", "Full thermo-adhesive self-welding bitumen backing strips"),
            ("Styles", "Beaver-tail, Hexagonal Mosaic, Rectangular 3-Tab")
        ]
    },
    {
        "id": "CB-RF-0017",
        "name": "Cabivella AquaScrew SBS Torch-On Waterproofing Membrane",
        "slug": "cabivella-aquascrew-sbs-torch-on-membrane",
        "section": "Bituminous Waterproofing & Rainwater Systems",
        "category": "Waterproofing",
        "desc": "Heavy-duty 4.5 mm SBS elastomer-modified bitumen roofing felt reinforced with spunbond non-woven polyester fabric, coated with slate flakes for UV shield on flat roofs.",
        "gauge": "Thickness 4.0 mm – 5.0 mm",
        "coverage": "1.0 m width x 8.0 m / 10.0 m rolls",
        "fire_rating": "Broof(t4)",
        "img_src": "/assets/img/roofing/membrane-bitumen.svg",
        "specs": [
            ("Standard", "BS EN 13707:2013"),
            ("Low Temperature Flexibility", "-20°C (SBS elastomer modification)"),
            ("Tensile Resistance", "L/T: 850 / 650 N/50mm"),
            ("Reinforcement", "200 g/m² longitudinal glass thread reinforced spunbond polyester")
        ]
    },
    {
        "id": "CB-RF-0018",
        "name": "Cabivella AquaFlow Zinc & Copper Seamless Gutter Systems",
        "slug": "cabivella-aquaflow-zinc-copper-gutter-systems",
        "section": "Bituminous Waterproofing & Rainwater Systems",
        "category": "Rainwater Management",
        "desc": "Architectural grade pre-weathered zinc and solid natural copper half-round and box gutters with matching swaged downpipes for high-end luxury residences.",
        "gauge": "0.70 mm – 0.80 mm",
        "coverage": "Custom lengths up to 4.0 m",
        "fire_rating": "Class A1 Non-combustible",
        "img_src": "/assets/img/roofing/rainwater-zinc.svg",
        "specs": [
            ("Materials", "Titanium Zinc (BS EN 988) / 99.9% Pure Copper (BS EN 1172)"),
            ("Profiles", "Half-round 125/150 mm & Box Section 140x100 mm"),
            ("Jointing", "Soldered capillary seam or specialized silicone expansion clips"),
            ("Life Expectancy", "80 to 100+ years maintenance-free service")
        ]
    },
    {
        "id": "CB-RF-0019",
        "name": "Cabivella DeepFlow Heavy-Duty Galvanised Rainwater Gutters",
        "slug": "cabivella-deepflow-galvanised-rainwater-gutters",
        "section": "Bituminous Waterproofing & Rainwater Systems",
        "category": "Rainwater Management",
        "desc": "Deep-flow high-capacity pre-painted galvanized steel rainwater systems designed to channel extreme storm discharge from commercial roofs without overflow.",
        "gauge": "125 mm – 190 mm Width",
        "coverage": "Downpipes 87 mm, 100 mm, 120 mm",
        "fire_rating": "Class A1",
        "img_src": "/assets/img/roofing/rainwater-galvanised.svg",
        "specs": [
            ("Standard", "BS EN 612"),
            ("Coating", "Zinc 275 g/m² + Double-sided polyurethane scratch-resistant paint"),
            ("Flow Capacity", "Up to 5.2 litres/second per outlet"),
            ("Warranty", "25-year manufacturer trade warranty")
        ]
    }
]
