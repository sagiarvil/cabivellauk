#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cabivella Systems Data Definitions (Batch 3: Timber, Glazing, Chemicals)
Timber Products (Kariwood Reference Cloned & 100% Rebranded)
Glazing Products (Zeyglass Reference Cloned & 100% Rebranded)
Chemicals Products (Fixa Reference Cloned & 100% Rebranded)
"""

TIMBER_PRODUCTS = [
    # Section 1: Engineered Plywood & Shuttering Panels (Kariwood Plywood Serileri)
    {
        "id": "CB-TM-0001",
        "name": "Cabivella BirchPlex Structural Birch Plywood BB/BB",
        "slug": "cabivella-birchplex-structural-birch-plywood",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "100% European cross-bonded birch veneer plywood conforming to BS EN 636-3 S and BS EN 314-2 Class 3 (exterior water & boil proof). High strength-to-weight ratio for architectural joinery.",
        "thickness": "4 mm – 40 mm",
        "grade": "BB/BB & S/BB Architectural Grade",
        "glue": "EN 314-2 Class 3 Exterior WBP Melamine",
        "density": "680 – 720 kg/m³",
        "img_src": "/assets/img/timber/plywood-birch.svg",
        "specs": [
            ("Standard", "BS EN 636-3 S (Structural exterior service)"),
            ("Bonding Quality", "BS EN 314-2 Class 3 (Exterior Weather Boil Proof)"),
            ("Veneer Quality", "100% solid core birch veneers (zero internal core voids)"),
            ("Panel Dimensions", "2440 x 1220 mm / 2500 x 1250 mm / 3050 x 1525 mm"),
            ("Formaldehyde Class", "E1 / CARB Phase 2 / TSCA Title VI certified"),
            ("Bending Strength (f_m)", "Parallel: 45 N/mm² / Perpendicular: 35 N/mm²"),
            ("Modulus of Elasticity", "7,500 N/mm²"),
            ("Sustainable Forestry", "FSC / PEFC 100% certified chain of custody")
        ]
    },
    {
        "id": "CB-TM-0002",
        "name": "Cabivella FormPlex Phenolic Film-Faced Shuttering Ply",
        "slug": "cabivella-formplex-phenolic-film-faced-plywood",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "Heavy-duty concrete shuttering plywood coated on both faces with 120 g/m² or 220 g/m² dynea phenolic film, sealed edges with waterproof acrylic paint, giving up to 30 fair-face re-uses.",
        "thickness": "18 mm & 21 mm",
        "grade": "Dynea Phenolic Film Coated 120/220 gsm",
        "glue": "WBP Phenolic Resin",
        "density": "700 kg/m³",
        "img_src": "/assets/img/timber/plywood-film-faced.svg",
        "specs": [
            ("Standard", "BS EN 636-3 / DIN 68705-3"),
            ("Film Coating", "Smooth dark brown hot-pressed phenolic surface"),
            ("Edge Protection", "Factory sealed with 3 coats of acrylic polyurethane paint"),
            ("Concrete Finish", "Produces smooth, blemish-free architectural fair-faced concrete")
        ]
    },
    {
        "id": "CB-TM-0003",
        "name": "Cabivella SafirGrip Anti-Slip Hexa Vehicle Flooring",
        "slug": "cabivella-safirgrip-anti-slip-hexa-flooring",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "High-wear vehicle and stage flooring plywood featuring an embossed wire-mesh or hexagonal anti-slip surface pattern, engineered for commercial van floors, trailers, and scaffolding.",
        "thickness": "9 mm – 30 mm",
        "grade": "Hexa / Wiremesh Wear Surface",
        "glue": "Class 3 Exterior WBP",
        "density": "710 kg/m³",
        "img_src": "/assets/img/timber/plywood-antislip.svg",
        "specs": [
            ("Abrasion Resistance", "Taber test > 4,000 revolutions to EN 438-2"),
            ("Pattern", "Imprinted 220 g/m² hot-pressed wiremesh or hexagonal relief"),
            ("Reverse Face", "Smooth film to deflect road splash and moisture")
        ]
    },
    {
        "id": "CB-TM-0004",
        "name": "Cabivella PyroPlex Fire-Retardant B-s1,d0 Plywood",
        "slug": "cabivella-pyroplex-fire-retardant-plywood",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "Vacuum-pressure autoclave flame retardant impregnated birch plywood certified to Euroclass B-s1,d0 for rail carriages, public buildings, hotels, and maritime passenger ships.",
        "thickness": "12 mm – 25 mm",
        "grade": "Euroclass B-s1, d0 Fire Retardant",
        "glue": "Melamine WBP",
        "density": "740 kg/m³",
        "img_src": "/assets/img/timber/plywood-fire.svg",
        "specs": [
            ("Fire Classification", "Euroclass B-s1, d0 (BS EN 13501-1)"),
            ("Smoke Production", "s1 (minimal smoke emission)"),
            ("Flaming Droplets", "d0 (zero flaming droplets)")
        ]
    },
    {
        "id": "CB-TM-0005",
        "name": "Cabivella FlexiPlex Cross-Grain Bendable Plywood",
        "slug": "cabivella-flexiplex-bendable-plywood",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "Ultra-flexible lightweight 3-ply panel constructed with specialized cross-grain rotary veneers, allowing tight radiused curves for curved reception counters, columns, and domes.",
        "thickness": "5 mm, 8 mm, 10 mm",
        "grade": "Curvature Radius < 100 mm",
        "glue": "Interior E1 / MR",
        "density": "450 kg/m³",
        "img_src": "/assets/img/timber/plywood-bendable.svg",
        "specs": [
            ("Bending Radius", "Can be formed dry to radii down to 100 mm without steaming"),
            ("Direction", "Long-grain (barrel bend) and Cross-grain (column bend) formats"),
            ("Application", "Curved walls, spiral stair balustrades, acoustic wave baffles")
        ]
    },
    {
        "id": "CB-TM-0006",
        "name": "Cabivella MarinePlex Okoume Marine Plywood BS 1088",
        "slug": "cabivella-marineplex-okoume-marine-plywood",
        "section": "Engineered Plywood & Shuttering Panels",
        "desc": "Certified BS 1088 marine plywood manufactured with selected exotic Okoume or Birch veneers, phenolic resorcinol glue lines, and zero core voids for yacht hulls and coastal joinery.",
        "thickness": "6 mm – 25 mm",
        "grade": "British Standard BS 1088 Certified",
        "glue": "Pure Phenolic WBP (72-hour boil test pass)",
        "density": "520 – 680 kg/m³",
        "img_src": "/assets/img/timber/plywood-marine.svg",
        "specs": [
            ("Standard", "BS 1088-1:2003 Lloyd's Register Type Approved"),
            ("Fungal Decay Resistance", "High natural durability class in marine salt splash"),
            ("Face Veneer Thickness", "Minimum 1.0 mm thick balanced face veneers")
        ]
    },

    # Section 2: Structural Glulam, Timber Beams & Joists (Kariwood Lamine Kiriş)
    {
        "id": "CB-TM-0007",
        "name": "Cabivella GlulamBeam GL24h / GL28c Structural Beams",
        "slug": "cabivella-glulambeam-gl24h-gl28c-beams",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "Glued laminated structural timber beams conforming to BS EN 14080. Precision finger-jointed and planed Nordic spruce laminations offering exceptional spans up to 30 metres.",
        "thickness": "Width 80–240 mm / Depth 120–1200 mm",
        "grade": "GL24h / GL28c / GL32c to EN 14080",
        "glue": "Melamine-Urea Formaldehyde (MUF) Type I",
        "density": "420 – 480 kg/m³",
        "img_src": "/assets/img/timber/timber-glulam.svg",
        "specs": [
            ("Standard", "BS EN 14080:2013"),
            ("Bending Strength (f_m,k)", "24 N/mm² (GL24) / 28 N/mm² (GL28) / 32 N/mm² (GL32)"),
            ("Modulus of Elasticity (E_0,mean)", "11,500 – 13,500 N/mm²"),
            ("Service Class", "Service Class 1 and 2 (indoor and sheltered outdoor)"),
            ("Spans", "Architectural curved and cambered arches up to 30 m clear span")
        ]
    },
    {
        "id": "CB-TM-0008",
        "name": "Cabivella C24 Kiln-Dried Structural Softwood Timber",
        "slug": "cabivella-c24-kiln-dried-structural-timber",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "Graded European Whitewood / Redwood timber dried in computer-controlled kilns to 15% moisture content and planed with eased edges (PAR E4E) for structural framing.",
        "thickness": "47x100 mm to 75x225 mm",
        "grade": "C24 Structural Grade (BS EN 338)",
        "glue": "Solid Timber",
        "density": "420 kg/m³",
        "img_src": "/assets/img/timber/timber-c24.svg",
        "specs": [
            ("Standard", "BS EN 14081-1:2016 + A1:2019"),
            ("Bending Strength", "24 N/mm² characteristic bending strength"),
            ("Moisture Content", "15% ± 3% (Kiln Dried)"),
            ("Surface Finishing", "Planed All Round (PAR) with 4 mm eased radius corners")
        ]
    },
    {
        "id": "CB-TM-0009",
        "name": "Cabivella Tanalised Pressure-Treated Carcassing Timber",
        "slug": "cabivella-tanalised-pressure-treated-timber",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "C24 softwood vacuum-pressure impregnated with copper-based Tanalith E preservative to Use Class 3 & 4 (BS 8417) for 30-year resistance to fungal decay and wood-boring insects.",
        "thickness": "47x150 mm to 100x100 mm",
        "grade": "Use Class 3 / 4 In-Ground & Subfloor",
        "glue": "Preservative Impregnated",
        "density": "450 kg/m³",
        "img_src": "/assets/img/timber/timber-treated.svg",
        "specs": [
            ("Standard", "BS 8417 / BS EN 351-1"),
            ("Preservative", "Tanalith E copper-triazole high-pressure penetration"),
            ("Service Life", "30-year warranty against wood rot and termite attacks")
        ]
    },
    {
        "id": "CB-TM-0010",
        "name": "Cabivella Engineered I-Joist Lightweight Floor Beam",
        "slug": "cabivella-engineered-i-joist-floor-beam",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "High-efficiency composite floor joist featuring structural LVL solid flanges and an ultra-dense 9 mm oriented strand board (OSB/3) web for silent, bounce-free floor systems.",
        "thickness": "Depth: 200 mm, 240 mm, 300 mm, 360 mm",
        "grade": "ETA-06/0238 Composite Joist",
        "glue": "Polyurethane Structural",
        "density": "Lightweight Joist",
        "img_src": "/assets/img/timber/timber-ijoist.svg",
        "specs": [
            ("Web Material", "9 mm structural OSB/3 web with pre-marked knockout holes for pipes"),
            ("Flange Material", "Solid LVL laminated veneer lumber flanges"),
            ("Spans", "Spans up to 8.5 metres with zero shrinkage, warping or floor squeak")
        ]
    },
    {
        "id": "CB-TM-0011",
        "name": "Cabivella LVL Structural Laminated Veneer Lumber",
        "slug": "cabivella-lvl-structural-laminated-veneer-lumber",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "High-strength engineered wood product composed of multiple 3 mm rotary-peeled softwood veneers laminated in parallel alignment under extreme heat and pressure.",
        "thickness": "30 mm – 90 mm (Bilinear heights up to 600 mm)",
        "grade": "LVL 48 P (BS EN 14374)",
        "glue": "Phenolic Weatherproof",
        "density": "550 kg/m³",
        "img_src": "/assets/img/timber/timber-lvl.svg",
        "specs": [
            ("Standard", "BS EN 14374 / BS EN 14272"),
            ("Bending Strength", "48 N/mm² edgewise bending strength (2x stronger than solid sawn timber)"),
            ("Dimensional Stability", "Virtually zero moisture swelling and shrinkage")
        ]
    },
    {
        "id": "CB-TM-0012",
        "name": "Cabivella CLT Mass Timber Solid Structural Wall Panel",
        "slug": "cabivella-clt-mass-timber-solid-wall-panel",
        "section": "Structural Glulam, Timber Beams & Joists",
        "desc": "Cross-laminated timber (CLT) panels composed of 3, 5 or 7 orthogonal layers of kiln-dried timber boards bonded with solvent-free polyurethane for multi-storey mass timber buildings.",
        "thickness": "60 mm – 300 mm",
        "grade": "ETA Certified Mass Timber",
        "glue": "Formaldehyde-Free 1K PUR",
        "density": "470 kg/m³",
        "img_src": "/assets/img/timber/timber-clt.svg",
        "specs": [
            ("Standard", "BS EN 16351"),
            ("Max Dimensions", "Up to 3.5 m width x 16.0 m length monolithic panels"),
            ("Fire Resistance", "Inherent predictable charring rate (0.65 mm/min) achieving REI 90")
        ]
    },

    # Section 3: Engineered Sheet Goods: OSB, MDF & Flooring (Kariwood Ürün Seçimi)
    {
        "id": "CB-TM-0013",
        "name": "Cabivella OSB-3 Moisture-Resistant Structural Board",
        "slug": "cabivella-osb3-moisture-resistant-structural-board",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Oriented strand board type 3 bonded with 100% formaldehyde-free isocyanate (PMDI) resins, designed for load-bearing roof decking, timber frame sheathing, and wall linings.",
        "thickness": "9 mm, 11 mm, 15 mm, 18 mm, 22 mm",
        "grade": "OSB/3 to BS EN 300",
        "glue": "PMDI Zero-Formaldehyde",
        "density": "600 – 640 kg/m³",
        "img_src": "/assets/img/timber/sheet-osb3.svg",
        "specs": [
            ("Standard", "BS EN 300 Type OSB/3"),
            ("Thickness Swelling", "< 15% after 24-hour water immersion"),
            ("Edge Detail", "Square Edge (SE) and 4-sided Tongue & Groove (T&G4)")
        ]
    },
    {
        "id": "CB-TM-0014",
        "name": "Cabivella High-Density Moisture-Resistant MR-MDF",
        "slug": "cabivella-mr-mdf-moisture-resistant-board",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Green-dyed moisture-resistant medium density fibreboard engineered with high resin solids and refined wood fibres for architectural mouldings, skirtings, and bathroom joinery.",
        "thickness": "6 mm – 30 mm",
        "grade": "MDF.HLS (BS EN 622-5)",
        "glue": "Melamine Urea Formaldehyde",
        "density": "730 – 800 kg/m³",
        "img_src": "/assets/img/timber/sheet-mdf.svg",
        "specs": [
            ("Standard", "BS EN 622-5 Type MDF.HLS"),
            ("Machinability", "Flawless CNC profiling, clean sharp routed edges with zero furring"),
            ("Internal Bond (IB)", "Min 0.70 N/mm² high core cohesion")
        ]
    },
    {
        "id": "CB-TM-0015",
        "name": "Cabivella UltraCompact High-Pressure Laminate HPL",
        "slug": "cabivella-ultracompact-hpl-facade-panel",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Solid core high pressure laminate (HPL) manufactured under 9 MPa pressure and 150°C heat, reinforced with cellulose fibres and electron beam cured (EBC) exterior weather shield.",
        "thickness": "6 mm, 8 mm, 10 mm, 12 mm",
        "grade": "BS EN 438-6 Type EDF Exterior",
        "glue": "Thermosetting Resins",
        "density": "1400 kg/m³",
        "img_src": "/assets/img/timber/sheet-hpl.svg",
        "specs": [
            ("Standard", "BS EN 438-6"),
            ("Impact Resistance", "Extreme hail and graffiti resistance (removable with solvents)"),
            ("UV Resistance", "Grey scale rating 4–5 after 3,000 hours xenon arc exposure")
        ]
    },
    {
        "id": "CB-TM-0016",
        "name": "Cabivella ThermoWood Ash & Pine Architectural Cladding",
        "slug": "cabivella-thermowood-ash-pine-cladding",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Thermally modified timber produced by baking European Ash or Pine at 215°C in a steam atmosphere, altering the cellular structure to achieve Class 1 durability without chemicals.",
        "thickness": "20x118 mm / 26x140 mm",
        "grade": "Thermo-D Durability Class 1/2",
        "glue": "100% Chemical-Free Thermal Modification",
        "density": "590 kg/m³ (Ash) / 450 kg/m³ (Pine)",
        "img_src": "/assets/img/timber/timber-thermowood.svg",
        "specs": [
            ("Standard", "BS EN 350-1 & ThermoWood Association guidelines"),
            ("Durability Class", "Class 1 (Ash) / Class 2 (Pine) expected lifespan > 30 years outdoors"),
            ("Moisture Movement", "50% lower equilibrium moisture content than untreated timber")
        ]
    },
    {
        "id": "CB-TM-0017",
        "name": "Cabivella OakCraft Multi-Layer Engineered Flooring",
        "slug": "cabivella-oakcraft-engineered-flooring",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "15 mm / 20 mm architectural engineered timber flooring comprising a 4 mm / 6 mm European white oak wear layer bonded to multi-ply birch plywood with tongue-and-groove jointing.",
        "thickness": "15 mm (4 mm oak) / 20 mm (6 mm oak)",
        "grade": "Select / Character Grade European Oak",
        "glue": "D4 Waterproof Cross-Link",
        "density": "680 kg/m³",
        "img_src": "/assets/img/timber/timber-flooring.svg",
        "specs": [
            ("Standard", "BS EN 13489"),
            ("Underfloor Heating", "100% compatible with waterborne hydronic and electric heating screeds"),
            ("Finishes", "UV cured matte lacquer or natural oxidative penetrating oil")
        ]
    },
    {
        "id": "CB-TM-0018",
        "name": "Cabivella AcousticLignum Slotted Timber Wall Baffles",
        "slug": "cabivella-acousticlignum-slotted-wall-baffles",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Natural wood veneered acoustic wall and ceiling slats backed with 9 mm recycled PET felt, achieving sound absorption Class A for lecture halls and executive boardrooms.",
        "thickness": "21 mm total (12 mm slat + 9 mm PET felt)",
        "grade": "NRC 0.90 Class A Absorber",
        "glue": "Low VOC",
        "density": "600 x 2400 mm panels",
        "img_src": "/assets/img/timber/timber-acoustic-slats.svg",
        "specs": [
            ("Absorption Coefficient", "αw = 0.90 (BS EN ISO 11654 Class A)"),
            ("Felt Core", "Non-toxic acoustic felt produced from 100% recycled plastic bottles")
        ]
    },
    {
        "id": "CB-TM-0019",
        "name": "Cabivella PineLignin Premium Wood Biomass Pellets",
        "slug": "cabivella-pinelignin-premium-biomass-pellets",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "ENplus A1 certified 6 mm wood fuel pellets manufactured from 100% pure virgin spruce and pine debarked sawdust, with calorific value ≥ 4.6 kWh/kg and ash content < 0.7%.",
        "thickness": "Diameter 6 mm",
        "grade": "ENplus A1 Certified (BS EN ISO 17225-2)",
        "glue": "Zero Additives / Natural Lignin Bound",
        "density": "Bulk Density > 600 kg/m³",
        "img_src": "/assets/img/timber/timber-pellets.svg",
        "specs": [
            ("Calorific Energy", "≥ 16.5 MJ/kg (≥ 4.6 kWh/kg)"),
            ("Moisture Content", "≤ 10.0%"),
            ("Ash Content", "≤ 0.7% (at 550°C)")
        ]
    },
    {
        "id": "CB-TM-0020",
        "name": "Cabivella KraftShield Bituminized Oiled Building Paper",
        "slug": "cabivella-kraftshield-bituminized-building-paper",
        "section": "Engineered Sheet Goods & Cladding",
        "desc": "Traditional water-repellent bitumen-impregnated kraft paper building membrane conforming to BS 1521 Class A1, serving as moisture separation layer under timber cladding.",
        "thickness": "Weight 140 g/m²",
        "grade": "BS 1521 Class A1 Building Paper",
        "glue": "Natural Bitumen Treated",
        "density": "1.0 m x 50 m rolls",
        "img_src": "/assets/img/timber/timber-kraftpaper.svg",
        "specs": [
            ("Standard", "BS 1521 Class A1"),
            ("Water Resistance", "Zero water penetration after 24 hours head test"),
            ("Vapour Check", "Acts as traditional breathable weather baffle under timber siding")
        ]
    }
]

GLAZING_PRODUCTS = [
    # Section 1: High-Performance Insulated Glass Units (Zeyglass Isı Yalıtımlı Cam)
    {
        "id": "CB-GL-0001",
        "name": "Cabivella ThermoGlaze Double Low-E Insulated Unit",
        "slug": "cabivella-thermoglaze-double-low-e-unit",
        "section": "High-Performance Insulated Glass Units",
        "desc": "Double glazed architectural unit comprising 6 mm Low-E soft-coat glass, 16 mm 90% Argon gas cavity with warm-edge composite spacer, delivering Ug = 1.1 W/m²K.",
        "thickness": "28 mm (6mm + 16mm cavity + 6mm)",
        "u_value": "Ug = 1.1 W/m²K",
        "solar_factor": "g = 0.62 / Light Transmittance: 74%",
        "acoustic": "Rw 34 dB",
        "img_src": "/assets/img/glazing/glass-igu-double.svg",
        "specs": [
            ("Standard", "BS EN 1279-1 to 6 (Insulating glass units)"),
            ("Thermal Transmittance", "Ug = 1.1 W/m²K (conforms to UK Part L building regulations)"),
            ("Spacer Bar", "Warm-edge stainless steel or silicone composite spacer bar (Ψ = 0.038 W/mK)"),
            ("Gas Fill", "90% Argon gas sealed with polyisobutylene primary and polysulphide secondary seal")
        ]
    },
    {
        "id": "CB-GL-0002",
        "name": "Cabivella TriMax Triple Glazed Passivhaus Glass Unit",
        "slug": "cabivella-trimax-triple-glazed-passivhaus-unit",
        "section": "High-Performance Insulated Glass Units",
        "desc": "Triple glazed architectural unit featuring dual magnetron Low-E coatings and twin 16 mm Argon-filled cavities, achieving an extraordinary thermal Ug value of 0.50 W/m²K.",
        "thickness": "44 mm – 52 mm (4-16-4-16-4 or 6-16-6-16-6)",
        "u_value": "Ug = 0.50 W/m²K",
        "solar_factor": "g = 0.50 / Light Transmittance: 68%",
        "acoustic": "Rw 38 dB",
        "img_src": "/assets/img/glazing/glass-igu-triple.svg",
        "specs": [
            ("Passivhaus Certified", "Passive House Institute certified glazing component"),
            ("Cavity Configuration", "Twin 16 mm or 18 mm cavities charged with 90% Argon gas"),
            ("Condensation Risk", "Completely eliminates interior perimeter surface condensation")
        ]
    },
    {
        "id": "CB-GL-0003",
        "name": "Cabivella SolarShield Advanced Solar Control Low-E",
        "slug": "cabivella-solarshield-advanced-solar-control-glass",
        "section": "High-Performance Insulated Glass Units",
        "desc": "Selective neutral magnetron-sputtered triple silver coated glass reflecting 65% of solar infrared heat while transmitting 70% daylight, preventing summertime overheating.",
        "thickness": "6 mm to 12 mm monolithic / IGUs",
        "u_value": "Ug = 1.0 W/m²K",
        "solar_factor": "g = 0.35 (Selectivity Index: 2.0)",
        "acoustic": "Rw 36 dB",
        "img_src": "/assets/img/glazing/glass-solar-control.svg",
        "specs": [
            ("Selectivity Ratio", "Light-to-Solar Gain ratio (LT/g) = 2.00 (highest green building score)"),
            ("Reflection", "Neutral aesthetic low exterior reflection (< 14%)"),
            ("Applications", "South and West facing commercial curtain walls and skylights")
        ]
    },

    # Section 2: Toughened & Safety Architectural Glass (Zeyglass Temperli Cam)
    {
        "id": "CB-GL-0004",
        "name": "Cabivella ArmorTough Heat-Soaked Monolithic Toughened Glass",
        "slug": "cabivella-armortough-heat-soaked-toughened-glass",
        "section": "Toughened & Safety Architectural Glass",
        "desc": "Thermally toughened safety glass conforming to BS EN 12150-1, subjected to secondary Heat Soak Testing (HST to BS EN 14179) to eliminate spontaneous nickel sulphide (NiS) inclusions.",
        "thickness": "4 mm – 19 mm",
        "u_value": "Safety Glass",
        "solar_factor": "5x Mechanical Strength",
        "acoustic": "BS EN 12600 Class 1(C)1",
        "img_src": "/assets/img/glazing/glass-toughened.svg",
        "specs": [
            ("Standard", "BS EN 12150-1 & BS EN 14179-1 (Heat Soak Tested)"),
            ("Fracture Pattern", "Shatters into small blunt granular fragments (< 1 cm²) without sharp shards"),
            ("Bending Strength", "120 N/mm² surface compression stress (vs 45 N/mm² annealed float)"),
            ("Thermal Shock Resistance", "Withstands temperature differentials up to 200°C")
        ]
    },
    {
        "id": "CB-GL-0005",
        "name": "Cabivella CurveTough Architectural Curved Toughened Glass",
        "slug": "cabivella-curvetough-architectural-curved-glass",
        "section": "Toughened & Safety Architectural Glass",
        "desc": "Cylindrically bent and thermally toughened safety glass manufactured in high-precision horizontal roller bending furnaces for revolving doors, corner shopfronts, and spiral lifts.",
        "thickness": "6 mm – 19 mm",
        "u_value": "Bespoke Geometry",
        "solar_factor": "Radii down to 1000 mm",
        "acoustic": "Toughened Safety",
        "img_src": "/assets/img/glazing/glass-curved.svg",
        "specs": [
            ("Minimum Radius", "1000 mm for 6 mm / 1500 mm for 10–12 mm"),
            ("Optical Quality", "Minimal roller-wave and edge dip distortion to ASTM C1464"),
            ("Maximum Arch Arc", "Arc length up to 3600 mm x Height 2440 mm")
        ]
    },

    # Section 3: Laminated, Acoustic & Ballistic Glass (Zeyglass Lamine Cam)
    {
        "id": "CB-GL-0006",
        "name": "Cabivella AcousticLami Sound Control Laminated Glass",
        "slug": "cabivella-acousticlami-sound-control-laminated-glass",
        "section": "Laminated, Acoustic & Ballistic Glass",
        "desc": "Safety glass comprising two float panes permanently bonded under 13 bar autoclave pressure with a specialized 0.76 mm or 1.52 mm tri-layer acoustic PVB interlayer.",
        "thickness": "6.8 mm (33.2) to 20.8 mm (1010.2)",
        "u_value": "Acoustic Attenuation",
        "solar_factor": "Rw up to 48 dB",
        "acoustic": "BS EN ISO 140-3 Compliant",
        "img_src": "/assets/img/glazing/glass-acoustic.svg",
        "specs": [
            ("Standard", "BS EN 14449 (Laminated safety glass)"),
            ("Acoustic Core", "Multi-layer acoustic PVB interlayer damping the coincidence frequency dip"),
            ("Sound Reduction Index", "Rw = 37 dB for 8.8 mm (44.2) / Rw = 42 dB for 16.8 mm (88.2)"),
            ("Safety Rating", "BS EN 12600 Class 1(B)1")
        ]
    },
    {
        "id": "CB-GL-0007",
        "name": "Cabivella SentryGuard Structural Ionoplast Laminated Glass",
        "slug": "cabivella-sentryguard-structural-ionoplast-glass",
        "section": "Laminated, Acoustic & Ballistic Glass",
        "desc": "Ultra-rigid structural laminated glass laminated with SentryGlas ionoplast polymer interlayers (5x tougher and 100x stiffer than standard PVB) for open-edge glass balustrades.",
        "thickness": "17.5 mm (88.4) to 31.5 mm (1515.4)",
        "u_value": "Structural Edge",
        "solar_factor": "5x Tear Strength",
        "acoustic": "Zero Delamination",
        "img_src": "/assets/img/glazing/glass-structural-lami.svg",
        "specs": [
            ("Interlayer", "SentryGlas (SG) ionoplast interlayer (shear modulus G = 100 MPa)"),
            ("Open-Edge Durability", "Zero moisture ingress or edge delamination even in coastal marine spray"),
            ("Post-Breakage Capacity", "Retains standing load-bearing barrier even after both glass panes shatter")
        ]
    },
    {
        "id": "CB-GL-0008",
        "name": "Cabivella BallistiShield EN 1063 Bullet-Resistant Glass",
        "slug": "cabivella-ballistishield-bullet-resistant-glass",
        "section": "Laminated, Acoustic & Ballistic Glass",
        "desc": "Multi-ply composite glass-polycarbonate ballistic assemblies certified from BR2 to BR7 (BS EN 1063) and blast resistant to ISO 16933 for banks, embassies, and guard booths.",
        "thickness": "24 mm – 75 mm",
        "u_value": "Ballistic Certified",
        "solar_factor": "BR2 to BR7 No-Spall",
        "acoustic": "EN 1063 Class NS",
        "img_src": "/assets/img/glazing/glass-ballistic.svg",
        "specs": [
            ("Standard", "BS EN 1063 (Security glazing - Bullet resistance)"),
            ("Classes Available", "BR2 (9mm Luger), BR4 (.44 Magnum), BR6 (7.62x51 NATO rifle), BR7 (AP Armour Piercing)"),
            ("Spall Protection", "Available in NS (No Spall - zero glass fragments fly into interior space)")
        ]
    },
    {
        "id": "CB-GL-0009",
        "name": "Cabivella PyroStop Fire-Resistant Glass EI 30 / EI 60",
        "slug": "cabivella-pyrostop-fire-resistant-glass",
        "section": "Laminated, Acoustic & Ballistic Glass",
        "desc": "Multi-laminated clear fire-resistant glass incorporating intumescent clear mineral hydrogel interlayers that foam into an opaque thermal heat radiation barrier during a fire.",
        "thickness": "15 mm – 45 mm",
        "u_value": "Integrity & Insulation",
        "solar_factor": "EI 30 to EI 120",
        "acoustic": "EN 13501-2 Certified",
        "img_src": "/assets/img/glazing/glass-fire.svg",
        "specs": [
            ("Standard", "BS EN 13501-2 & BS EN 1364"),
            ("Classification", "Class E (Integrity) / Class EW (Radiation control) / Class EI (Insulation)"),
            ("Thermal Insulation (EI)", "Maintains cold-face temperature < 140°C above ambient for 30, 60 or 120 mins")
        ]
    },

    # Section 4: Decorative, Screen-Printed & Spandrel Glass (Zeyglass Dekoratif & Emaye)
    {
        "id": "CB-GL-0010",
        "name": "Cabivella EnamelSpandrel Ceramic-Coated Opaque Glass",
        "slug": "cabivella-enamelspandrel-ceramic-coated-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Toughened spandrel glass coated on face #2 with lead-free ceramic enamel frit and baked into the glass matrix at 650°C to conceal floor slab edges and building service plenums.",
        "thickness": "6 mm – 12 mm",
        "u_value": "Opaque Cladding",
        "solar_factor": "Any RAL Colour",
        "acoustic": "Fired Ceramic Enamel",
        "img_src": "/assets/img/glazing/glass-spandrel.svg",
        "specs": [
            ("Standard", "BS EN 12150 & BS EN 1863"),
            ("Colour Consistency", "Precision roller-coated in any custom RAL / NCS shade"),
            ("Durability", "Ceramic glaze becomes scratch-proof, acid-proof and UV permanent")
        ]
    },
    {
        "id": "CB-GL-0011",
        "name": "Cabivella SilkFrit Screen-Printed Solar Architectural Glass",
        "slug": "cabivella-silkfrit-screen-printed-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Ceramic fritted glass featuring silk-screened dot, line, or bespoke digital ceramic patterns that reduce solar glare, provide bird-friendly flight markers, and deliver privacy.",
        "thickness": "6 mm – 15 mm",
        "u_value": "Glare & Bird Safe",
        "solar_factor": "Pattern Coverage 20–80%",
        "acoustic": "Permanent Frit",
        "img_src": "/assets/img/glazing/glass-fritted.svg",
        "specs": [
            ("Bird-Friendly Standard", "Conforms to 2x4 rule / 2x2 rule preventing bird collisions"),
            ("Pattern Flexibility", "Precision silk-screen printing or high-resolution 720 dpi digital ceramic printing"),
            ("Light Transmittance", "Engineered to balance daylight factor with daylight glare index")
        ]
    },
    {
        "id": "CB-GL-0012",
        "name": "Cabivella SatinEtched Acid-Daubed Frosted Glass",
        "slug": "cabivella-satinetched-acid-frosted-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Chemically acid-etched float glass delivering a silky smooth, translucent satin surface that diffuses light evenly while resisting oily fingerprints and water stains.",
        "thickness": "4 mm – 12 mm",
        "u_value": "Translucent Privacy",
        "solar_factor": "Fingerprint Resistant",
        "acoustic": "Silky Matte",
        "img_src": "/assets/img/glazing/glass-satin.svg",
        "specs": [
            ("Surface Treatment", "Permanent hydrofluoric acid immersion etch (unlike porous sandblasting)"),
            ("Light Transmittance", "Transmits > 82% ambient light while providing total visual privacy"),
            ("Applications", "Shower screens, office partition demountable walls, frosted doors")
        ]
    },
    {
        "id": "CB-GL-0013",
        "name": "Cabivella WalkOn Structural Multi-Ply Glass Floor Steps",
        "slug": "cabivella-walkon-structural-glass-floors",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Multi-laminated structural glass floors and staircase treads comprising three or four toughened glass plies with anti-slip ceramic acid-etched grit textures rated R11 to DIN 51130.",
        "thickness": "28 mm to 52 mm (10+10+10 mm or 12+12+12 mm)",
        "u_value": "Heavy Traffic Load",
        "solar_factor": "Load: 5.0 kN/m²",
        "acoustic": "Slip Rating R11",
        "img_src": "/assets/img/glazing/glass-walkon.svg",
        "specs": [
            ("Standard", "BS 5395-1 (Stairs & walkways) & DIN 51130 slip resistance"),
            ("Redundancy", "Engineered so that full design crowd load is carried even if top sacrificial ply breaks"),
            ("Anti-Slip Surface", "Dot or diamond ceramic enamel pattern providing slip resistance when wet")
        ]
    },
    {
        "id": "CB-GL-0014",
        "name": "Cabivella SmartSwitch PDLC Switchable Privacy Glass",
        "slug": "cabivella-smartswitch-pdlc-privacy-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Active switchable smart glass utilizing Polymer Dispersed Liquid Crystal (PDLC) film laminated between glass layers, changing from frosted opaque to crystal clear in 20 milliseconds.",
        "thickness": "10.8 mm (55.2) to 14.8 mm (66.2)",
        "u_value": "Active Electrochromic",
        "solar_factor": "Response: < 20 ms",
        "acoustic": "Power: 5 W/m²",
        "img_src": "/assets/img/glazing/glass-smart-pdlc.svg",
        "specs": [
            ("Operating Voltage", "48V – 65V AC low-voltage safety transformer"),
            ("Switching Cycles", "Tested to over 3,000,000 continuous ON/OFF cycles"),
            ("Control Options", "Wall switch, home automation relay (DALI/KNX), remote or motion sensor")
        ]
    },
    {
        "id": "CB-GL-0015",
        "name": "Cabivella SpiderPoint Countersunk Bolted Glazing Units",
        "slug": "cabivella-spiderpoint-bolted-glazing-units",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Point-supported structural glass panes with precision CNC waterjet-drilled countersunk or cylindrical holes, articulated stainless steel rotules, and silicone weatherproof seals.",
        "thickness": "12 mm – 25 mm Toughened Laminated",
        "u_value": "Point Fixed Spider",
        "solar_factor": "Articulated Rotules",
        "acoustic": "Frameless Façade",
        "img_src": "/assets/img/glazing/glass-spider.svg",
        "specs": [
            ("Standard", "CWCT technical guidelines for point-fixed glass façades"),
            ("Hole Tolerances", "CNC milled ± 0.2 mm bevelled countersunk holes"),
            ("Rotules", "316 marine stainless steel ball-jointed articulators accommodating wind deflections")
        ]
    },
    {
        "id": "CB-GL-0016",
        "name": "Cabivella ClearVision Low-Iron Extra Clear Starphire Float",
        "slug": "cabivella-clearvision-low-iron-starphire-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Ultra-clear float glass with reduced ferric oxide content, completely removing the traditional greenish edge tint to deliver 92% optical clarity and true color neutrality.",
        "thickness": "4 mm – 19 mm",
        "u_value": "Extra Clear",
        "solar_factor": "Light Transmittance: 92%",
        "acoustic": "True Colour CRI 100",
        "img_src": "/assets/img/glazing/glass-low-iron.svg",
        "specs": [
            ("Iron Content", "Fe2O3 < 100 ppm (compared to standard float ~1000 ppm)"),
            ("Colour Rendering Index (Ra)", "Ra = 99.5 (displays authentic artwork, luxury garments and stone worktops)"),
            ("Edge Quality", "Brilliant turquoise-crystal edge instead of dark green")
        ]
    },
    {
        "id": "CB-GL-0017",
        "name": "Cabivella HydroClean Self-Cleaning Photocatalytic Glass",
        "slug": "cabivella-hydroclean-self-cleaning-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Dual-action glass with a pyrolytic micro-coating of titanium dioxide that breaks down organic dirt under solar UV radiation and causes rainwater to sheet off smoothly without droplets.",
        "thickness": "6 mm & 8 mm (Single / Double IGU)",
        "u_value": "Self-Cleaning",
        "solar_factor": "Photocatalytic TiO2",
        "acoustic": "Hydrophilic Sheeting",
        "img_src": "/assets/img/glazing/glass-self-cleaning.svg",
        "specs": [
            ("Standard", "BS EN 1096-5 (Test method for self-cleaning performances of coated glass)"),
            ("Photocatalysis", "UV light reacts with TiO2 layer to break down dirt, tree sap and smog"),
            ("Hydrophilic Action", "Water sheets flat, flushing away dirt without drying spots")
        ]
    },
    {
        "id": "CB-GL-0018",
        "name": "Cabivella TintColor Body-Tinted Float Glass",
        "slug": "cabivella-tintcolor-body-tinted-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Mass-coloured float glass tinted during the melting furnace stage by adding metal oxides, available in Bronze, Euro Grey, Dark Grey, and French Green for subtle solar control.",
        "thickness": "4 mm – 12 mm",
        "u_value": "Body Tinted",
        "solar_factor": "Solar Heat Reduction",
        "acoustic": "Grey/Bronze/Green",
        "img_src": "/assets/img/glazing/glass-tinted.svg",
        "specs": [
            ("Standard", "BS EN 572-2"),
            ("Colors", "Smoked Euro Grey, Deep Black Grey, Architectural Bronze, Emerald Green"),
            ("Thermal Safety", "Requires thermal toughening to resist solar thermal stress absorption")
        ]
    },
    {
        "id": "CB-GL-0019",
        "name": "Cabivella MirroGuard Copper & Lead-Free Eco Mirror",
        "slug": "cabivella-mirroguard-copper-lead-free-mirror",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Environmentally friendly silvered glass mirror manufactured without toxic copper and lead, offering 10x higher corrosion resistance against black edge clouding in humid bathrooms.",
        "thickness": "4 mm, 5 mm, 6 mm",
        "u_value": "Eco Mirror",
        "solar_factor": "Zero Copper / Zero Lead",
        "acoustic": "CASS Test 480h Pass",
        "img_src": "/assets/img/glazing/glass-mirror.svg",
        "specs": [
            ("Standard", "BS EN 1036-1 (Mirrors from silver-coated float glass)"),
            ("Salt Spray Resistance", "Withstands 480 hours Copper-Accelerated Acetic Salt Spray (CASS)"),
            ("Safety Backing", "Available with Class 2B2 anti-shatter woven safety film backing")
        ]
    },
    {
        "id": "CB-GL-0020",
        "name": "Cabivella SolarReflect Pyrolytic Hard-Coated Glass",
        "slug": "cabivella-solarreflect-pyrolytic-hard-coated-glass",
        "section": "Decorative, Screen-Printed & Spandrel Glass",
        "desc": "Hard-coated reflective glass produced by chemical vapour deposition (CVD) of metal oxide films at 600°C on the float line, providing high privacy and mirror-like solar reflection.",
        "thickness": "6 mm – 10 mm",
        "u_value": "High Reflection",
        "solar_factor": "Exterior Privacy",
        "acoustic": "Pyrolytic CVD Coat",
        "img_src": "/assets/img/glazing/glass-reflective.svg",
        "specs": [
            ("Coating Durability", "Class A pyrolytic coating can be exposed on face #1 or face #2"),
            ("Reflectance", "Up to 32% external reflectance creating daytime one-way privacy"),
            ("Processing", "Can be laminated, toughened, bent and glazed as single or double units")
        ]
    }
]

CHEMICALS_PRODUCTS = [
    # Section 1: Technical Waterproofing & Liquid Membranes (Fixa Su Yalıtım)
    {
        "id": "CB-CH-0001",
        "name": "Cabivella AquaFix 2K Super-Elastic Waterproof Slurry",
        "slug": "cabivella-aquafix-2k-super-elastic-slurry",
        "section": "Technical Waterproofing & Liquid Membranes",
        "desc": "Two-component polymer-modified super-elastic cementitious waterproofing slurry conforming to BS EN 14891 CM O2P. Bridges cracks down to -20°C in swimming pools and balconies.",
        "packaging": "20 kg powder + 10 kg liquid latex",
        "coverage": "2.5 – 3.0 kg/m² (2 coats)",
        "elasticity": "Elongation > 150% (Crack bridging ≥ 2.5 mm)",
        "standard": "BS EN 14891 CM O2P",
        "img_src": "/assets/img/chemicals/chem-waterproof-2k.svg",
        "specs": [
            ("Standard", "BS EN 14891:2017 Class CM O2P"),
            ("Water Pressure Resistance", "Positive pressure resistance up to 7 bar (70 m water head)"),
            ("Crack Bridging", "Maintains > 2.5 mm crack bridging at -20°C"),
            ("Potable Water", "Sağlık Bakanlığı içme suyu depoları uygunluk sertifikası")
        ]
    },
    {
        "id": "CB-CH-0002",
        "name": "Cabivella PolyFix Pure Aliphatic Polyurethane Liquid Roof",
        "slug": "cabivella-polyfix-pure-aliphatic-polyurethane",
        "section": "Technical Waterproofing & Liquid Membranes",
        "desc": "Solvent-based high-solids pure aliphatic polyurethane liquid roofing membrane curing with air moisture into a UV-stable, seamless rubber blanket with 600% elongation.",
        "packaging": "25 kg metal pails",
        "coverage": "1.5 – 2.0 kg/m² total",
        "elasticity": "Elongation > 600% (Tensile > 8 MPa)",
        "standard": "ETAG 005 / Broof(t4)",
        "img_src": "/assets/img/chemicals/chem-polyurethane.svg",
        "specs": [
            ("Standard", "ETAG 005 (Liquid applied roof waterproofing kits)"),
            ("UV Resistance", "100% aliphatic backbone (zero yellowing, chalking or embrittlement)"),
            ("Service Temperature", "-40°C to +90°C continuous service"),
            ("Standing Water", "Resistant to permanent standing water and ponding on flat roofs")
        ]
    },
    {
        "id": "CB-CH-0003",
        "name": "Cabivella PlugFix Ultra-Rapid Hydraulic Waterstop Plug",
        "slug": "cabivella-plugfix-rapid-waterstop-plug",
        "section": "Technical Waterproofing & Liquid Membranes",
        "desc": "Ready-to-use dry hydraulic cementitious compound that expands slightly and sets in 60 to 90 seconds to stop active, high-pressure leaking water bursts in tunnels and basements.",
        "packaging": "5 kg / 15 kg plastic buckets",
        "coverage": "Approx 1.8 kg/L cavity fill",
        "elasticity": "Compressive: 35 N/mm²",
        "standard": "Instant Setting Waterstop",
        "img_src": "/assets/img/chemicals/chem-plugfix.svg",
        "specs": [
            ("Setting Time", "Initial set: 60 seconds / Final set: 90 seconds at 20°C"),
            ("Expansion", "Slight volume expansion ensuring tight mechanical key in boreholes"),
            ("Chloride Free", "Contains zero chlorides, will not corrode structural steel rebars")
        ]
    },
    {
        "id": "CB-CH-0004",
        "name": "Cabivella CrystalFix In-Depth Capillary Waterproofing",
        "slug": "cabivella-crystalfix-capillary-waterproofing",
        "section": "Technical Waterproofing & Liquid Membranes",
        "desc": "Active chemical crystalline waterproofing slurry that penetrates deeply into concrete micro-capillaries, reacting with free lime to grow insoluble needle-like crystals.",
        "packaging": "25 kg kraft bags",
        "coverage": "1.0 – 1.5 kg/m²",
        "elasticity": "Self-Healing Crystalline",
        "standard": "BS EN 1504-2",
        "img_src": "/assets/img/chemicals/chem-crystalfix.svg",
        "specs": [
            ("Standard", "BS EN 1504-2 (Surface protection systems for concrete)"),
            ("Penetration Depth", "Penetrates up to 100 mm into concrete pore matrix"),
            ("Self-Healing", "Re-activates upon future water contact to seal micro-cracks up to 0.4 mm")
        ]
    },
    {
        "id": "CB-CH-0005",
        "name": "Cabivella BituPoly Foundation Rubberized Bitumen Seal",
        "slug": "cabivella-bitupoly-rubberized-bitumen-seal",
        "section": "Technical Waterproofing & Liquid Membranes",
        "desc": "Polyurethane-modified high-build bituminous emulsion creating a thick, flexible underground barrier on concrete retaining walls and foundation footings against humic acids.",
        "packaging": "20 kg buckets",
        "coverage": "2.0 – 3.0 kg/m²",
        "elasticity": "Elongation > 400%",
        "standard": "BS EN 15814",
        "img_src": "/assets/img/chemicals/chem-bitumen.svg",
        "specs": [
            ("Standard", "BS EN 15814 (Polymer modified bituminous thick coatings)"),
            ("Resistance to Soil Chemicals", "Impermeable to sulphates, aggressive groundwater salts and humic acids")
        ]
    },

    # Section 2: Sealants, Expanding Foams & Façade Joints (Fixa Sızdırmazlık)
    {
        "id": "CB-CH-0006",
        "name": "Cabivella PolySeal PU-40 Low-Modulus Facade Sealant",
        "slug": "cabivella-polyseal-pu-40-facade-sealant",
        "section": "Sealants, Expanding Foams & Joints",
        "desc": "One-component polyurethane joint sealant conforming to ISO 11600 Class 25LM, designed for precast expansion joints, brick masonry control joints, and curtain walls.",
        "packaging": "600 ml sausages / 310 ml cartridges",
        "coverage": "Approx 6 linear metres (10x10 mm joint)",
        "elasticity": "Movement Capability ± 25%",
        "standard": "ISO 11600 F 25LM",
        "img_src": "/assets/img/chemicals/chem-sealant-pu.svg",
        "specs": [
            ("Standard", "ISO 11600 Class 25LM & BS EN 15651-1 Type F-EXT-INT-CC"),
            ("Shore A Hardness", "25 – 30 Shore A (low modulus avoids edge spalling)"),
            ("Paintability", "Can be overpainted with exterior elastomeric facade coatings")
        ]
    },
    {
        "id": "CB-CH-0007",
        "name": "Cabivella NeutralSil 100% Neutral Architectural Silicone",
        "slug": "cabivella-neutralsil-neutral-architectural-silicone",
        "section": "Sealants, Expanding Foams & Joints",
        "desc": "Alkoxy neutral cure 100% silicone sealant with primerless adhesion to glass, aluminium, masonry, and plastics, without releasing corrosive acetic acid fumes.",
        "packaging": "310 ml cartridges",
        "coverage": "Approx 3.1 linear metres (10x10 mm)",
        "elasticity": "Movement Capability ± 25%",
        "standard": "BS EN 15651-1 & 2",
        "img_src": "/assets/img/chemicals/chem-silicone.svg",
        "specs": [
            ("Standard", "BS EN 15651-1 (Façade) & BS EN 15651-2 (Glazing)"),
            ("Non-Staining", "Guaranteed zero plasticizer bleed or staining on granite and porous marble"),
            ("Weathering", "Unrivalled UV, ozone and temperature resistance from -50°C to +150°C")
        ]
    },
    {
        "id": "CB-CH-0008",
        "name": "Cabivella MS-Polymer High-Tack Structural Grab Adhesive",
        "slug": "cabivella-ms-polymer-high-tack-adhesive",
        "section": "Sealants, Expanding Foams & Joints",
        "desc": "Hybrid silane-terminated polyether (MS polymer) mounting adhesive providing instant green grab (300 kg/m² initial hold) and extreme shear strength on wet or dry surfaces.",
        "packaging": "290 ml cartridges",
        "coverage": "High-tack bead application",
        "elasticity": "High Tensile: 2.8 N/mm²",
        "standard": "Zero Solvent & Isocyanate",
        "img_src": "/assets/img/chemicals/chem-mspolymer.svg",
        "specs": [
            ("Initial Grab", "Immediate mechanical suction eliminates clamping or prop support"),
            ("Solvent Free", "100% solids, zero odour, zero VOC, can bond mirrors and polystyrene")
        ]
    },
    {
        "id": "CB-CH-0009",
        "name": "Cabivella FireStop Intumescent Acrylic Fire Mastic",
        "slug": "cabivella-firestop-intumescent-fire-mastic",
        "section": "Sealants, Expanding Foams & Joints",
        "desc": "Water-based intumescent acoustic sealant that swells up to 5x its volume at temperatures above 180°C to seal service penetrations, providing up to 240 minutes fire rating (EI 240).",
        "packaging": "310 ml cartridges / 600 ml foils",
        "coverage": "Linear joint to specification",
        "elasticity": "Fire Barrier EI 240",
        "standard": "BS EN 1366-3 & 4 / BS 476",
        "img_src": "/assets/img/chemicals/chem-firestop.svg",
        "specs": [
            ("Standard", "BS EN 1366-3 (Penetration seals) & BS EN 1366-4 (Linear joint seals)"),
            ("Fire Resistance", "Tested up to 240 minutes fire integrity and insulation (EI 240)"),
            ("Acoustic Rating", "Rw up to 62 dB acoustic barrier performance")
        ]
    },

    # Section 3: Premium Tile Adhesives & Grouts (Fixa Seramik Yapıştırıcıları)
    {
        "id": "CB-CH-0010",
        "name": "Cabivella CeramFlex C2TE S1 Flexible Tile Adhesive",
        "slug": "cabivella-ceramflex-c2te-s1-tile-adhesive",
        "section": "Tile Adhesives & Technical Grouts",
        "desc": "High-performance polymer-modified deformable cementitious tile adhesive conforming to BS EN 12004 C2TE S1. Ideal for large porcelain tiles on heated screeds and facades.",
        "packaging": "25 kg paper bags",
        "coverage": "3.0 – 5.0 kg/m² depending on trowel notch",
        "elasticity": "Deformability S1 (≥ 2.5 mm)",
        "standard": "BS EN 12004 C2TE S1",
        "img_src": "/assets/img/chemicals/chem-adhesive-c2te.svg",
        "specs": [
            ("Standard", "BS EN 12004:2017 Class C2TE S1"),
            ("Adhesion Strength", "Initial tensile adhesion ≥ 1.0 N/mm² (after heat, water and freeze-thaw cycles)"),
            ("Extended Open Time", "Class E (open time ≥ 30 minutes with zero skinning)"),
            ("Slip Resistance", "Class T (slip ≤ 0.5 mm for heavy vertical wall cladding)")
        ]
    },
    {
        "id": "CB-CH-0011",
        "name": "Cabivella MegaFlex C2TES2 Ultra-Deformable Large Slab",
        "slug": "cabivella-megaflex-c2tes2-ultra-deformable-adhesive",
        "section": "Tile Adhesives & Technical Grouts",
        "desc": "Highly deformable fiber-reinforced cementitious adhesive meeting Class C2TE S2 (> 5 mm transversal deformation) for oversized 3000x1000 mm thin porcelain slabs and facades.",
        "packaging": "25 kg bags",
        "coverage": "4.0 – 6.0 kg/m²",
        "elasticity": "Super Deformable S2 (≥ 5.0 mm)",
        "standard": "BS EN 12004 C2TE S2",
        "img_src": "/assets/img/chemicals/chem-adhesive-s2.svg",
        "specs": [
            ("Transverse Deformation", "S2 rating (deflects > 5 mm before shear failure)"),
            ("Large Format Cladding", "Absorbs extreme building thermal shock on high-rise exterior facades")
        ]
    },
    {
        "id": "CB-CH-0012",
        "name": "Cabivella GroutFlex CG2WA Water-Repellent Grout",
        "slug": "cabivella-groutflex-cg2wa-flexible-grout",
        "section": "Tile Adhesives & Technical Grouts",
        "desc": "Polymer-modified flexible cementitious tile grout with drop-effect water repellency and anti-mould silver technology for joint widths from 1 mm to 8 mm in wetrooms.",
        "packaging": "5 kg / 20 kg bags (Available in 24 shades)",
        "coverage": "0.3 – 0.8 kg/m² depending on tile format",
        "elasticity": "High Abrasion Resistance",
        "standard": "BS EN 13888 CG2WA",
        "img_src": "/assets/img/chemicals/chem-grout-cg2wa.svg",
        "specs": [
            ("Standard", "BS EN 13888 Class CG2WA"),
            ("Water Absorption (W)", "Reduced water absorption ≤ 2.0 g after 240 mins"),
            ("Abrasion Resistance (A)", "High abrasion resistance ≤ 1000 mm³")
        ]
    },
    {
        "id": "CB-CH-0013",
        "name": "Cabivella EpoxyGrout RG Two-Part Chemical Resistant Grout",
        "slug": "cabivella-epoxygrout-rg-chemical-resistant-grout",
        "section": "Tile Adhesives & Technical Grouts",
        "desc": "Solvent-free two-component epoxy resin reactive grout and tile adhesive for hygienic commercial kitchens, breweries, chemical processing plants, and thermal spa pools.",
        "packaging": "5 kg twin pack kits",
        "coverage": "0.5 – 1.5 kg/m²",
        "elasticity": "100% Stain Resistant",
        "standard": "BS EN 13888 RG / EN 12004 R2T",
        "img_src": "/assets/img/chemicals/chem-grout-epoxy.svg",
        "specs": [
            ("Chemical Resistance", "Resistant to aggressive acids, alkalis, fats, chlorine and high-pressure steam cleaning"),
            ("Zero Porosity", "100% stain proof, impervious to bacteria and mold growth")
        ]
    },

    # Section 4: Structural Concrete Repair, Grouts & Anchors (Fixa Onarım)
    {
        "id": "CB-CH-0014",
        "name": "Cabivella StructRep R4 Thixotropic Structural Mortar",
        "slug": "cabivella-structrep-r4-structural-repair-mortar",
        "section": "Structural Concrete Repair, Grouts & Anchors",
        "desc": "Single-component fiber-reinforced sulfate-resistant thixotropic structural repair mortar conforming to BS EN 1504-3 Class R4 for overhead and vertical spalling concrete restoration.",
        "packaging": "25 kg kraft bags",
        "coverage": "Approx 19 kg/m² per 10 mm thickness",
        "elasticity": "Compressive: > 50 N/mm²",
        "standard": "BS EN 1504-3 Class R4",
        "img_src": "/assets/img/chemicals/chem-repair-r4.svg",
        "specs": [
            ("Standard", "BS EN 1504-3 Class R4 (Structural repair)"),
            ("Compressive Strength", "Min 50 N/mm² at 28 days"),
            ("Modulus of Elasticity", "≥ 20 GPa (matches existing structural concrete)"),
            ("Adhesion to Concrete", "≥ 2.0 N/mm²")
        ]
    },
    {
        "id": "CB-CH-0015",
        "name": "Cabivella GroutFlow High-Strength Non-Shrink Precision Grout",
        "slug": "cabivella-groutflow-non-shrink-precision-grout",
        "section": "Structural Concrete Repair, Grouts & Anchors",
        "desc": "Cementitious fluid non-shrink grout with controlled dual-stage expansion, achieving > 70 N/mm² final compressive strength for anchoring steel baseplates, bridge bearings, and crane rails.",
        "packaging": "25 kg bags",
        "coverage": "Approx 2.0 kg per litre cavity",
        "elasticity": "Compressive: > 70 N/mm²",
        "standard": "BS EN 1504-6 Anchor / Grout",
        "img_src": "/assets/img/chemicals/chem-groutflow.svg",
        "specs": [
            ("Standard", "BS EN 1504-6 (Anchoring of reinforcing steel bar)"),
            ("Compressive Strength", "1 day: > 30 MPa / 7 days: > 55 MPa / 28 days: > 75 MPa"),
            ("Expansion System", "Controlled gaseous expansion in fresh state + crystalline shrinkage compensation")
        ]
    },
    {
        "id": "CB-CH-0016",
        "name": "Cabivella CarboWrap High-Modulus Carbon Fibre Fabric",
        "slug": "cabivella-carbowrap-carbon-fibre-fabric",
        "section": "Structural Concrete Repair, Grouts & Anchors",
        "desc": "Unidirectional 300 g/m² high-tensile carbon fibre fabric for external seismic retrofit and flexural/shear strengthening of reinforced concrete bridge columns and beams.",
        "packaging": "50 cm width x 50 m rolls",
        "coverage": "Epoxy saturated composite",
        "elasticity": "Tensile: > 4,900 N/mm²",
        "standard": "BS EN 1504-4 Structural Bonding",
        "img_src": "/assets/img/chemicals/chem-carbowrap.svg",
        "specs": [
            ("Tensile Modulus", "240,000 N/mm² (240 GPa)"),
            ("Tensile Strength", "4,900 N/mm² (10x stronger than structural steel)"),
            ("Thickness", "0.166 mm nominal design fiber thickness")
        ]
    },
    {
        "id": "CB-CH-0017",
        "name": "Cabivella AnchorPure High-Load Pure Epoxy Chemical Anchor",
        "slug": "cabivella-anchorpure-pure-epoxy-chemical-anchor",
        "section": "Structural Concrete Repair, Grouts & Anchors",
        "desc": "1:1 ratio pure epoxy injection resin cartridge tested according to EAD 330499-00-0601 for post-installed rebar connections and seismic C1/C2 anchoring in cracked concrete.",
        "packaging": "585 ml side-by-side cartridges",
        "coverage": "Standard rebar borehole filling",
        "elasticity": "Seismic C1 / C2 ETA Certified",
        "standard": "ETA-17/0856 / EAD 330499",
        "img_src": "/assets/img/chemicals/chem-anchor-epoxy.svg",
        "specs": [
            ("European Technical Assessment", "ETA for cracked/non-cracked concrete and rebar connections"),
            ("Seismic Performance", "Category C1 & C2 seismic approved"),
            ("Water Filled Holes", "Approved for submerged and water-filled drill holes")
        ]
    },

    # Section 5: Floor Systems, Concrete Admixtures & Curing (Fixa Zemin & Katkı)
    {
        "id": "CB-CH-0018",
        "name": "Cabivella EpoxyFloor Self-Levelling Heavy-Duty Resin",
        "slug": "cabivella-epoxyfloor-self-levelling-resin",
        "section": "Floor Systems & Concrete Admixtures",
        "desc": "Solvent-free 3-component self-smoothing epoxy floor topping producing a mirror-gloss, high-abrasion and chemical resistant floor from 2 mm to 4 mm for warehouses and cleanrooms.",
        "packaging": "25 kg pre-weighed set (A+B+C)",
        "coverage": "Approx 1.8 kg/m² per 1 mm thickness",
        "elasticity": "Shore D: 80 / Compressive: 65 MPa",
        "standard": "BS EN 13813 SR-B2.0-AR0.5-IR10",
        "img_src": "/assets/img/chemicals/chem-epoxy-floor.svg",
        "specs": [
            ("Standard", "BS EN 13813 (Screed material and floor screeds)"),
            ("Wear Resistance", "Taber CS10 / 1000 cycles < 30 mg weight loss"),
            ("Hygienic Finish", "Seamless dust-free surface suitable for GMP pharmaceutical plants")
        ]
    },
    {
        "id": "CB-CH-0019",
        "name": "Cabivella HardFloor Metallic Non-Oxidizing Dry Shake",
        "slug": "cabivella-hardfloor-metallic-dry-shake",
        "section": "Floor Systems & Concrete Admixtures",
        "desc": "Monolithic dry-shake floor surface hardener comprising synthetic corundum, graded non-rusting metallic aggregates, and special cements trowelled into fresh concrete slabs.",
        "packaging": "25 kg bags",
        "coverage": "4.0 – 6.0 kg/m²",
        "elasticity": "Mohs Hardness: 8–9",
        "standard": "BS EN 13813 CT-C70-F11-A1.5",
        "img_src": "/assets/img/chemicals/chem-dry-shake.svg",
        "specs": [
            ("Böhme Abrasion Resistance", "Class A1.5 (< 1.5 cm³/50 cm² - extreme wear immunity)"),
            ("Impact Resistance", "Class IR20 (highest shock resistance for logistics forklifts)")
        ]
    },
    {
        "id": "CB-CH-0020",
        "name": "Cabivella LithiHard Penetrating Lithium Concrete Densifier",
        "slug": "cabivella-lithihard-lithium-concrete-densifier",
        "section": "Floor Systems & Concrete Admixtures",
        "desc": "Advanced lithium silicate clear liquid penetrating hardener that chemically reacts with free lime to form permanent calcium silicate hydrates, eliminating concrete dusting.",
        "packaging": "20 L / 200 L drums",
        "coverage": "15 – 20 m² per litre",
        "elasticity": "Anti-Dust Chemical Reaction",
        "standard": "Dustproofer & Densifier",
        "img_src": "/assets/img/chemicals/chem-lithium-densifier.svg",
        "specs": [
            ("Lithium Technology", "Smaller molecular size penetrates deeper than sodium/potassium silicates without efflorescence"),
            ("Abrasion Increase", "+40% surface abrasion hardness increase after 14 days")
        ]
    },
    {
        "id": "CB-CH-0021",
        "name": "Cabivella PlastFlow Polycarboxylate Superplasticizer",
        "slug": "cabivella-plastflow-superplasticizer-admixture",
        "section": "Floor Systems & Concrete Admixtures",
        "desc": "Third-generation polycarboxylate ether (PCE) high-range water reducer for self-compacting concrete, reducing water-cement ratio by up to 35% with long slump retention.",
        "packaging": "20 kg / 1000 kg IBC containers",
        "coverage": "0.6% – 1.8% by weight of cement",
        "elasticity": "Water Reduction > 30%",
        "standard": "BS EN 934-2 Table 3.1 & 3.2",
        "img_src": "/assets/img/chemicals/chem-superplasticizer.svg",
        "specs": [
            ("Standard", "BS EN 934-2 (Admixtures for concrete)"),
            ("Early Strength", "Increases 24-hour compressive strength by up to 70%")
        ]
    },
    {
        "id": "CB-CH-0022",
        "name": "Cabivella CureSeal Acrylic Membrane Curing Compound",
        "slug": "cabivella-cureseal-acrylic-curing-compound",
        "section": "Floor Systems & Concrete Admixtures",
        "desc": "Waterborne acrylic resin emulsion sprayed onto fresh concrete to form an evaporative barrier membrane, preventing plastic shrinkage micro-cracking during early hydration.",
        "packaging": "20 L / 200 L drums",
        "coverage": "5 – 7 m² per litre",
        "elasticity": "Water Retention > 85%",
        "standard": "ASTM C309 Type 1 Class B",
        "img_src": "/assets/img/chemicals/chem-curing-compound.svg",
        "specs": [
            ("Standard", "ASTM C309 & BS 7542"),
            ("Efficiency Index", "> 85% moisture retention after 72 hours in drying wind tunnels")
        ]
    }
]
