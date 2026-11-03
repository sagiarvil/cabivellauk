#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cabivella Systems Data Definitions (Batch 2: Insulation, Bathroom, Drainage)
Insulation Products (Erk Izolasyon Reference Cloned & 100% Rebranded)
Bathroom Products (Bien Banyo Reference Cloned & 100% Rebranded)
Drainage Products (Ege Yildiz Reference Cloned & 100% Rebranded)
"""

INSULATION_PRODUCTS = [
    # Section 1: Mineral Wool & High-Efficiency Thermal Slabs
    {
        "id": "CB-IN-0001",
        "name": "Cabivella ThermoWool Facade Rockwool Slabs",
        "slug": "cabivella-thermowool-facade-rockwool-slabs",
        "section": "Mineral Wool & High-Efficiency Thermal Slabs",
        "desc": "High-density basalt stone wool thermal insulation slabs conforming to BS EN 13162. Engineered for external wall insulation (EWI / ETICS) systems with Class A1 non-combustible fire protection.",
        "thickness": "50 mm – 150 mm",
        "thermal_lambda": "λ = 0.035 W/mK",
        "density": "150 kg/m³",
        "fire_class": "Class A1 Non-combustible",
        "img_src": "/assets/img/insulation/rockwool-slab.svg",
        "specs": [
            ("Standard", "BS EN 13162:2012+A1:2015"),
            ("Thermal Conductivity", "λ = 0.035 W/mK"),
            ("Density", "130 – 150 kg/m³ nominal"),
            ("Fire Classification", "Euroclass A1 (BS EN 13501-1)"),
            ("Compressive Strength", "Min 40 kPa (at 10% deformation)"),
            ("Tensile Strength", "Min 15 kPa perpendicular to faces (TR15)"),
            ("Water Vapour Resistance", "μ = 1 (vapour permeable)"),
            ("Dimensions", "1200 x 600 mm slabs")
        ]
    },
    {
        "id": "CB-IN-0002",
        "name": "Cabivella GlassWool Acoustic Partition Batt",
        "slug": "cabivella-glasswool-acoustic-partition-batt",
        "section": "Mineral Wool & High-Efficiency Thermal Slabs",
        "desc": "Resilient biosoluble mineral glass wool friction-fit acoustic batts designed to eliminate sound transfer within internal drywall stud partitions and timber joist ceilings.",
        "thickness": "50 mm – 100 mm",
        "thermal_lambda": "λ = 0.038 W/mK",
        "density": "20 kg/m³",
        "fire_class": "Class A1",
        "img_src": "/assets/img/insulation/glasswool-batt.svg",
        "specs": [
            ("Standard", "BS EN 13162"),
            ("Air Flow Resistivity", "r ≥ 5 kPa·s/m² (optimum acoustic damping)"),
            ("Acoustic Rating", "Rw up to 54 dB in twin-stud drywall assemblies"),
            ("Binder Technology", "Formaldehyde-free organic plant-based binder")
        ]
    },
    {
        "id": "CB-IN-0003",
        "name": "Cabivella RoofBlanket Thermal Loft Glasswool",
        "slug": "cabivella-roofblanket-thermal-loft-glasswool",
        "section": "Mineral Wool & High-Efficiency Thermal Slabs",
        "desc": "Lightweight unbonded or aluminium-foil faced thermal glasswool quilt rolls for horizontal attic floors, pitched roof rafters, and suspended timber floors.",
        "thickness": "100 mm – 200 mm",
        "thermal_lambda": "λ = 0.040 W/mK",
        "density": "12 – 14 kg/m³",
        "fire_class": "Class A1 / Class B with foil",
        "img_src": "/assets/img/insulation/glasswool-quilt.svg",
        "specs": [
            ("Standard", "BS EN 13162"),
            ("Roll Width", "1200 mm (perforated at 2 x 600 mm or 3 x 400 mm)"),
            ("Coverage", "Pack coverage up to 9.6 m² per roll")
        ]
    },
    {
        "id": "CB-IN-0004",
        "name": "Cabivella UltraFoam XPS Rigid Extruded Board",
        "slug": "cabivella-ultrafoam-xps-rigid-extruded-board",
        "section": "Mineral Wool & High-Efficiency Thermal Slabs",
        "desc": "Closed-cell extruded polystyrene (XPS) insulation boards with high compressive resistance (300 to 500 kPa) and zero water absorption for inverted roofs and basement perimeters.",
        "thickness": "30 mm – 120 mm",
        "thermal_lambda": "λ = 0.033 W/mK",
        "density": "32 – 38 kg/m³",
        "fire_class": "Class E (BS EN 13501-1)",
        "img_src": "/assets/img/insulation/xps-board.svg",
        "specs": [
            ("Standard", "BS EN 13164:2012+A1:2015"),
            ("Compressive Strength", "300 kPa (CS(10/Y)300) / 500 kPa heavy grade"),
            ("Water Absorption by Submersion", "WL(T)0.7 (≤ 0.7% vol)"),
            ("Edge Profile", "Ship-lap shiplap rebate preventing thermal bridging")
        ]
    },
    {
        "id": "CB-IN-0005",
        "name": "Cabivella GraphiteEPS Thermal Insulation Board",
        "slug": "cabivella-graphiteeps-thermal-insulation-board",
        "section": "Mineral Wool & High-Efficiency Thermal Slabs",
        "desc": "Graphite-enhanced expanded polystyrene (EPS) board delivering 20% superior thermal efficiency compared to standard white EPS, specifically formulated for external ETICS systems.",
        "thickness": "40 mm – 150 mm",
        "thermal_lambda": "λ = 0.031 W/mK",
        "density": "16 – 18 kg/m³",
        "fire_class": "Class E / Flame Retardant",
        "img_src": "/assets/img/insulation/graphite-eps.svg",
        "specs": [
            ("Standard", "BS EN 13163"),
            ("Infrared Absorbers", "High-purity graphite platelets scattering radiant heat"),
            ("Tensile Strength (TR)", "Min 100 kPa perpendicular to faces")
        ]
    },

    # Section 2: Acoustic Dampers & Decoupling Systems
    {
        "id": "CB-IN-0006",
        "name": "Cabivella SoundShield High-Density Acoustic Rockwool",
        "slug": "cabivella-soundshield-acoustic-rockwool",
        "section": "Acoustic Dampers & Decoupling Systems",
        "desc": "Ultra-dense (100 kg/m³) acoustic rockwool slabs engineered for machine rooms, recording studios, cinema walls, and heavy industrial sound attenuation enclosures.",
        "thickness": "50 mm – 100 mm",
        "thermal_lambda": "λ = 0.036 W/mK",
        "density": "100 kg/m³",
        "fire_class": "Class A1 Non-combustible",
        "img_src": "/assets/img/insulation/acoustic-rockwool.svg",
        "specs": [
            ("Acoustic Absorption", "NRC 0.95 (Noise Reduction Coefficient)"),
            ("Weighted Sound Absorption (αw)", "1.00 at 500 Hz to 4000 Hz"),
            ("Standard", "BS EN ISO 11654 Class A sound absorber")
        ]
    },
    {
        "id": "CB-IN-0007",
        "name": "Cabivella BondexAcoustic Heavy Mass Barrier",
        "slug": "cabivella-bondexacoustic-heavy-mass-barrier",
        "section": "Acoustic Dampers & Decoupling Systems",
        "desc": "Re-bonded high-density open-cell polyurethane foam laminated with a 5 kg/m² visco-elastic lead-free heavy acoustic rubber membrane for airborne & impact noise control.",
        "thickness": "20 mm – 50 mm",
        "thermal_lambda": "Acoustic Damping",
        "density": "150 – 180 kg/m³",
        "fire_class": "Class B-s2, d0",
        "img_src": "/assets/img/insulation/bondex-barrier.svg",
        "specs": [
            ("Composite Structure", "Bonded acoustic PU foam + Viscoelastic mass barrier layer"),
            ("Airborne Sound Reduction", "Rw improvement up to +28 dB on masonry party walls"),
            ("Density", "150 kg/m³ foam core with 2000 kg/m³ septum layer")
        ]
    },
    {
        "id": "CB-IN-0008",
        "name": "Cabivella PyramidAcoustic Studio Damping Foam",
        "slug": "cabivella-pyramidacoustic-studio-damping-foam",
        "section": "Acoustic Dampers & Decoupling Systems",
        "desc": "Precision CNC-profiled polyurethane acoustic foam tiles featuring pyramid geometric relief to scatter flutter echoes and reverberation across podcast suites and auditoriums.",
        "thickness": "40 mm – 70 mm",
        "thermal_lambda": "Sound Reflection Control",
        "density": "30 kg/m³",
        "fire_class": "Class 0 / BS 476 Part 6 & 7",
        "img_src": "/assets/img/insulation/pyramid-foam.svg",
        "specs": [
            ("Pattern Geometry", "3D pyramid pattern scattering high-frequency flutter"),
            ("Tile Size", "500 x 500 mm / 1000 x 1000 mm self-adhesive panels"),
            ("Safety", "Fire retardant treated to British Standard Class 0")
        ]
    },
    {
        "id": "CB-IN-0009",
        "name": "Cabivella AcousticTape Resilient Decoupling Foam Strip",
        "slug": "cabivella-acoustictape-resilient-decoupling-strip",
        "section": "Acoustic Dampers & Decoupling Systems",
        "desc": "Self-adhesive closed-cell cellular rubber decoupling foam tape placed under floor joists, drywall perimeter tracks, and metal studs to prevent flanking sound transmission.",
        "thickness": "3 mm – 10 mm",
        "thermal_lambda": "Vibration Break",
        "density": "Closed-Cell EPDM / PE",
        "fire_class": "Class B1",
        "img_src": "/assets/img/insulation/acoustic-tape.svg",
        "specs": [
            ("Application", "Acoustic isolation for drylining ceiling channels and base tracks"),
            ("Widths", "30 mm, 50 mm, 70 mm, 100 mm"),
            ("Adhesive", "High-tack cross-woven synthetic rubber adhesive")
        ]
    },

    # Section 3: High-Temperature Refractory & Industrial Fireproof Systems
    {
        "id": "CB-IN-0010",
        "name": "Cabivella PyroWool High-Temp Industrial Mineral Blanket",
        "slug": "cabivella-pyrowool-high-temp-industrial-blanket",
        "section": "High-Temperature Refractory & Industrial Fireproof Systems",
        "desc": "Industrial rockwool stitched mattress stitched onto galvanized hexagonal wire mesh (rabitz wire), designed for boiler casings, high-temperature flue pipes, and kilns up to 650°C.",
        "thickness": "30 mm – 100 mm",
        "thermal_lambda": "λ = 0.038 W/mK at 50°C",
        "density": "80 – 100 kg/m³",
        "fire_class": "Class A1 Non-combustible (up to 650°C)",
        "img_src": "/assets/img/insulation/industrial-mattress.svg",
        "specs": [
            ("Maximum Service Temp", "650°C continuous service"),
            ("Stitching Mesh", "Galvanized or 304 stainless steel hexagonal wire netting"),
            ("Standard", "BS EN 14303 (Thermal insulation products for building equipment)")
        ]
    },
    {
        "id": "CB-IN-0011",
        "name": "Cabivella CeramicFibre Extreme Heat Refractory Blanket",
        "slug": "cabivella-ceramicfibre-refractory-blanket",
        "section": "High-Temperature Refractory & Industrial Fireproof Systems",
        "desc": "High-purity spun aluminosilicate refractory ceramic fibre (RCF) blanket delivering thermal stability up to 1260°C and 1430°C for foundry furnaces, kilns, and exhaust expansion joints.",
        "thickness": "13 mm – 50 mm",
        "thermal_lambda": "Extreme Refractory",
        "density": "96 – 128 kg/m³",
        "fire_class": "Non-combustible (up to 1430°C)",
        "img_src": "/assets/img/insulation/ceramic-fibre.svg",
        "specs": [
            ("Classification Temp", "1260°C Standard / 1430°C Zirconia Grade"),
            ("Tensile Strength", "Min 50 kPa"),
            ("Chemical Resistance", "Resistant to all chemicals except hydrofluoric and phosphoric acids")
        ]
    },

    # Section 4: Elastomeric Rubber & Polyethylene Pipe Insulation
    {
        "id": "CB-IN-0012",
        "name": "Cabivella ElastomericRubber Pipe & Duct Insulation Sheet",
        "slug": "cabivella-elastomericrubber-pipe-duct-sheet",
        "section": "Elastomeric Rubber & Polyethylene Pipe Insulation",
        "desc": "Flexible closed-cell synthetic nitrile rubber (NBR) foam sheets and continuous slit tubes with high water vapour diffusion resistance (μ ≥ 10,000) preventing HVAC condensation.",
        "thickness": "6 mm – 32 mm",
        "thermal_lambda": "λ = 0.033 W/mK at 0°C",
        "density": "50 – 65 kg/m³",
        "fire_class": "Class B-s3, d0 / Class 0",
        "img_src": "/assets/img/insulation/rubber-sheet.svg",
        "specs": [
            ("Standard", "BS EN 14304"),
            ("Water Vapour Permeability", "μ ≥ 10,000 (built-in continuous vapour barrier)"),
            ("Operating Range", "-50°C to +105°C continuous pipework service"),
            ("Surface Finish", "Plain or reinforced aluminium foil laminate for outdoor UV protection")
        ]
    },
    {
        "id": "CB-IN-0013",
        "name": "Cabivella PolyFoam Closed-Cell Crosslinked PE Sheet",
        "slug": "cabivella-polyfoam-closed-cell-pe-sheet",
        "section": "Elastomeric Rubber & Polyethylene Pipe Insulation",
        "desc": "Physically crosslinked closed-cell polyethylene foam rolls providing thermal insulation, expansion joint filling, and under-screed impact sound reduction up to 26 dB.",
        "thickness": "5 mm – 20 mm",
        "thermal_lambda": "λ = 0.036 W/mK",
        "density": "28 – 33 kg/m³",
        "fire_class": "Class B2 / Class E",
        "img_src": "/assets/img/insulation/pe-foam.svg",
        "specs": [
            ("Structure", "100% closed-cell micro-cellular crosslinked PE"),
            ("Impact Sound Damping", "ΔLw = 22 – 26 dB under floating concrete screeds"),
            ("Water Absorption", "< 1% by volume after 28 days")
        ]
    },

    # Section 5: Technical Waterproofing & Cementitious Coatings
    {
        "id": "CB-IN-0014",
        "name": "Cabivella HydroFlex 2K Cementitious Waterproof Coating",
        "slug": "cabivella-hydroflex-2k-cementitious-coating",
        "section": "Technical Waterproofing & Cementitious Coatings",
        "desc": "Two-component polymer-modified flexible cementitious waterproof slurry conforming to BS EN 14891. Bridges cracks up to 2 mm in wet rooms, swimming pools, balconies, and water tanks.",
        "thickness": "2.0 mm applied film",
        "thermal_lambda": "Waterproofing Barrier",
        "density": "1.7 kg/dm³",
        "fire_class": "Class A2-s1, d0",
        "img_src": "/assets/img/insulation/hydroflex-2k.svg",
        "specs": [
            ("Standard", "BS EN 14891 Class CM O2P (Crack-bridging at -20°C)"),
            ("Hydrostatic Resistance", "Resists positive water pressure up to 7 bar (70 m water column)"),
            ("Crack Bridging", "> 2.0 mm elastic bridge elongation"),
            ("Potable Water Contact", "Certified non-toxic for drinking water reservoirs")
        ]
    },
    {
        "id": "CB-IN-0015",
        "name": "Cabivella PolySeal 2K Pure Polyurethane Liquid Membrane",
        "slug": "cabivella-polyseal-2k-polyurethane-membrane",
        "section": "Technical Waterproofing & Cementitious Coatings",
        "desc": "Solvent-free two-component elastomeric polyurethane liquid coating that cures into a seamless, high-elasticity waterproof membrane for exposed roofs, car parks, and podium decks.",
        "thickness": "1.5 mm – 2.5 mm",
        "thermal_lambda": "Seamless Polymer",
        "density": "1.4 kg/dm³",
        "fire_class": "Broof(t4)",
        "img_src": "/assets/img/insulation/polyseal-2k.svg",
        "specs": [
            ("Elongation at Break", "> 400% high-elasticity bridge"),
            ("Root Resistance", "FLL certified root penetration resistance for green roof podiums"),
            ("Tensile Strength", "> 6.0 N/mm²")
        ]
    },
    {
        "id": "CB-IN-0016",
        "name": "Cabivella SunShield UV-Resistant Liquid Waterproofing",
        "slug": "cabivella-sunshield-uv-resistant-waterproofing",
        "section": "Technical Waterproofing & Cementitious Coatings",
        "desc": "Hybrid acrylic-polyurethane solar-reflective elastomeric liquid waterproofing coating, reflecting 84% of solar radiation to lower building roof cooling loads.",
        "thickness": "1.2 mm coating",
        "thermal_lambda": "Cool Roof SRI 104",
        "density": "1.35 kg/dm³",
        "fire_class": "Class B-s1, d0",
        "img_src": "/assets/img/insulation/sunshield-liquid.svg",
        "specs": [
            ("Solar Reflectance Index (SRI)", "104 (LEED and BREEAM compliant cool roof)"),
            ("UV Stability", "Continuous aliphatic UV resistance with zero chalking"),
            ("Application", "Applied by roller, squeegee or airless spray pump")
        ]
    },
    {
        "id": "CB-IN-0017",
        "name": "Cabivella BitumenRubber Foundation Damp-Proof Membrane",
        "slug": "cabivella-bitumenrubber-foundation-membrane",
        "section": "Technical Waterproofing & Cementitious Coatings",
        "desc": "Thick-coat polymer-modified bitumen emulsion enriched with rubber granules for tanking retaining walls, basement basements, and foundation grade beams against soil damp.",
        "thickness": "3 mm – 4 mm dry film",
        "thermal_lambda": "Sub-grade Damp Proof",
        "density": "1.1 kg/dm³",
        "fire_class": "Class E",
        "img_src": "/assets/img/insulation/bitumen-rubber.svg",
        "specs": [
            ("Standard", "BS EN 15814 (Polymer modified bituminous thick coatings)"),
            ("Solids Content", "> 70% high-build volume"),
            ("Application", "Cold applied by notched trowel or airless spray")
        ]
    },
    {
        "id": "CB-IN-0018",
        "name": "Cabivella LevelFlow Self-Levelling Precision Floor Screed",
        "slug": "cabivella-levelflow-self-levelling-screed",
        "section": "Technical Waterproofing & Cementitious Coatings",
        "desc": "Fast-setting pumpable polymer-modified cementitious self-levelling compound designed for levelling subfloors from 1 mm to 30 mm thickness prior to laying timber, vinyl or tile.",
        "thickness": "1 mm – 30 mm single pour",
        "thermal_lambda": "Subfloor Leveller",
        "density": "2.0 kg/dm³ cured",
        "fire_class": "Class A1fl",
        "img_src": "/assets/img/insulation/levelflow-screed.svg",
        "specs": [
            ("Standard", "BS EN 13813 CT-C30-F7"),
            ("Compressive Strength", "Min 30 N/mm² after 28 days"),
            ("Walkable After", "3 to 4 hours under 20°C ambient"),
            ("Underfloor Heating", "Ideal encapsulation of electric and hydronic heating pipes")
        ]
    },

    # Section 6: EWI Anchors, Meshes & Facade Reinforcements
    {
        "id": "CB-IN-0019",
        "name": "Cabivella ArmorMesh 160g Alkali-Resistant Reinforcement",
        "slug": "cabivella-armormesh-160g-alkali-resistant-mesh",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "Woven glass-fibre reinforcing mesh treated with specialized styrene-butadiene alkali-resistant coating to absorb thermal expansions in basecoat render layers.",
        "thickness": "Mesh 4 x 4 mm",
        "thermal_lambda": "Structural Reinforcement",
        "density": "160 g/m²",
        "fire_class": "Class A1 yarn",
        "img_src": "/assets/img/insulation/armormesh-160.svg",
        "specs": [
            ("Standard", "ETAG 004 / EAD 040016-00-0404 compliant"),
            ("Tensile Strength", "Min 2000 N/5cm before ageing; > 50% retained after 28-day alkali bath"),
            ("Roll Dimensions", "1.0 m width x 50.0 m length (50 m² rolls)")
        ]
    },
    {
        "id": "CB-IN-0020",
        "name": "Cabivella EdgeProfile PVC Mesh-Integrated Corner Bead",
        "slug": "cabivella-edgeprofile-pvc-corner-bead",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "Rigid UV-stabilized virgin PVC corner profile welded with two 100x150 mm ultrasonic alkali-resistant mesh wings to form sharp, impact-resistant 90° building corners.",
        "thickness": "100x150 mm mesh wings",
        "thermal_lambda": "Impact Protection",
        "density": "Extruded PVC",
        "fire_class": "Self-extinguishing",
        "img_src": "/assets/img/insulation/edge-profile.svg",
        "specs": [
            ("Corner Nose", "Impact-resistant rigid PVC nose bead"),
            ("Mesh Bonding", "Ultrasonic welded joint (no glue failure)"),
            ("Lengths", "2.5 m standard architectural profiles")
        ]
    },
    {
        "id": "CB-IN-0021",
        "name": "Cabivella AnchorSteel Heavy-Duty Mechanical Fixings",
        "slug": "cabivella-anchorsteel-heavy-duty-fixings",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "Galvanized steel drive nail insulation anchor with reinforced polyamide expanding sleeve and specialized plastic head cap, eliminating cold bridging on concrete and masonry.",
        "thickness": "Length: 95 mm – 300 mm",
        "thermal_lambda": "Thermal Point Loss χ ≤ 0.002 W/K",
        "density": "Polyamide + Steel",
        "fire_class": "Metal Core",
        "img_src": "/assets/img/insulation/anchor-steel.svg",
        "specs": [
            ("European Technical Assessment", "ETA-11/0232 for use categories A, B, C, D, E"),
            ("Plate Diameter", "60 mm washer diameter (compatible with 90mm/140mm washers for rockwool)"),
            ("Point Thermal Transmittance", "χ = 0.002 W/K (virtually zero thermal bridge)")
        ]
    },
    {
        "id": "CB-IN-0022",
        "name": "Cabivella AirGuard Vapour Control Breather Membrane",
        "slug": "cabivella-airguard-vapour-breather-membrane",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "High-performance three-layer microporous polypropylene spunbond breather membrane providing airtightness, vapour permeability, and secondary water deflection.",
        "thickness": "Weight 135 – 175 g/m²",
        "thermal_lambda": "Sd = 0.02 m",
        "density": "3-Layer Spunbond",
        "fire_class": "Class B-s1, d0 / FireCurb",
        "img_src": "/assets/img/insulation/breather-membrane.svg",
        "specs": [
            ("Water Vapour Resistance (Sd)", "0.02 m (highly breathable vapour transmission)"),
            ("Water Column Resistance", "> 2000 mm (Class W1 water penetration)"),
            ("Roll Size", "1.5 m x 50 m (75 m²)")
        ]
    },
    {
        "id": "CB-IN-0023",
        "name": "Cabivella FlexMortar Polymer-Modified EWI Basecoat",
        "slug": "cabivella-flexmortar-polymer-modified-basecoat",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "Mineral-based cementitious powder enriched with redispersible synthetic resins for bonding rockwool/EPS boards and bedding the reinforcement mesh.",
        "thickness": "4 mm – 6 mm basecoat",
        "thermal_lambda": "EWI Bonding & Basecoat",
        "density": "1.45 kg/dm³",
        "fire_class": "Class A1 Non-combustible",
        "img_src": "/assets/img/insulation/flexmortar-basecoat.svg",
        "specs": [
            ("Standard", "BS EN 998-1 (General purpose rendering mortar)"),
            ("Adhesion to Concrete", "> 1.0 N/mm²"),
            ("Adhesion to Rockwool / EPS", "> 0.1 N/mm² (substrate failure)")
        ]
    },
    {
        "id": "CB-IN-0024",
        "name": "Cabivella TextureCoat Silicone Exterior Render",
        "slug": "cabivella-texturecoat-silicone-exterior-render",
        "section": "EWI Anchors, Meshes & Facade Reinforcements",
        "desc": "Ready-to-use pasty silicone resin-based decorative thin-coat render offering hydrophobic self-cleaning lotus effect and superior vapour permeability across UK coastal climates.",
        "thickness": "Grain sizes 1.5 mm / 2.0 mm",
        "thermal_lambda": "Protective Topcoat",
        "density": "1.8 kg/dm³",
        "fire_class": "Class B-s1, d0",
        "img_src": "/assets/img/insulation/texturecoat-silicone.svg",
        "specs": [
            ("Water Absorption", "W3 low water absorption (< 0.1 kg/m²·h^0.5)"),
            ("Vapour Permeability", "V1 high vapour permeability (Sd < 0.14 m)"),
            ("Algae Resistance", "Integral biocidal capsule protection against mould and moss")
        ]
    }
]

BATHROOM_PRODUCTS = [
    # Section 1: Architectural Vitreous Sanitaryware (Bien Reference)
    {
        "id": "CB-BA-0001",
        "name": "Cabivella PureLine Wall-Hung Rimless Architectural WC",
        "slug": "cabivella-pureline-wall-hung-rimless-wc",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Vitreous china wall-hung toilet bowl featuring Easywash rimless flush vortex technology, concealed wall fixings, and ultra-hygienic anti-bacterial nano-glaze.",
        "dimensions": "540 x 360 x 350 mm",
        "flush_volume": "3 / 4.5 Litres Dual Flush",
        "material": "Vitreous China Grade A",
        "img_src": "/assets/img/bathroom/wc-wall-hung.svg",
        "specs": [
            ("Standard", "BS EN 997:2018 Class 1"),
            ("Flushing System", "Rimless 360° dynamic hydro-vortex"),
            ("Fixing Architecture", "Concealed bottom-mounted fixing bolts"),
            ("Load Bearing Capacity", "Tested to 400 kg static load to EN 997")
        ]
    },
    {
        "id": "CB-BA-0002",
        "name": "Cabivella BackToWall Concealed Ceramic Toilet Suite",
        "slug": "cabivella-backtowall-concealed-toilet-suite",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Floor-standing back-to-wall ceramic toilet pan with smooth skirted side profiles, flush-to-wall mounting, and dual horizontal/vertical soil pipe outlet adaptability.",
        "dimensions": "560 x 365 x 400 mm",
        "flush_volume": "3 / 4.5 L",
        "material": "Fine Fireclay Vitreous China",
        "img_src": "/assets/img/bathroom/wc-back-to-wall.svg",
        "specs": [
            ("Standard", "BS EN 997"),
            ("Soil Outlet", "Universal P-trap / S-trap convertible with flexible elbow"),
            ("Finish", "High-gloss Alpine White sanitary glaze")
        ]
    },
    {
        "id": "CB-BA-0003",
        "name": "Cabivella SoftClose Duroplast Ultra-Slim Bidet Seat",
        "slug": "cabivella-softclose-duroplast-slim-seat",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Heavyweight thermosetting Duroplast toilet seat with quick-release stainless steel top-fixing hinges and synchronized soft-close hydraulic dampers.",
        "dimensions": "Tailored to PureLine pan geometry",
        "flush_volume": "Accessory",
        "material": "Duroplast Urea-Formaldehyde",
        "img_src": "/assets/img/bathroom/seat-softclose.svg",
        "specs": [
            ("Hinge Technology", "Stainless steel 304 top-fixing quick release (one-button lift)"),
            ("Damping Cycles", "> 100,000 certified soft-closing actions"),
            ("Antibacterial", "Inherent silver-ion additive resisting 99.9% bacteria")
        ]
    },
    {
        "id": "CB-BA-0004",
        "name": "Cabivella VesselBasin Countertop Architectural Ceramic Bowl",
        "slug": "cabivella-vesselbasin-countertop-ceramic-bowl",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Ultra-slim 5 mm edge ceramic countertop washbasin fired at 1220°C for extreme surface density and minimal water absorption on luxury stone vanities.",
        "dimensions": "600 x 400 x 140 mm",
        "flush_volume": "Vessel Basin",
        "material": "Fine Fireclay Thin Edge",
        "img_src": "/assets/img/bathroom/basin-countertop.svg",
        "specs": [
            ("Standard", "BS EN 14688:2015"),
            ("Rim Thickness", "5 mm engineered thin-rim architecture"),
            ("Waste Hole", "Standard 45 mm diameter, unslotted or slotted compatible")
        ]
    },
    {
        "id": "CB-BA-0005",
        "name": "Cabivella Monolith Freestanding Ceramic Basin",
        "slug": "cabivella-monolith-freestanding-ceramic-basin",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Floor-standing monolithic cylindrical ceramic washbasin presenting a bold architectural statement in luxury cloakrooms and boutique hotel powder rooms.",
        "dimensions": "450 mm diameter x 850 mm height",
        "flush_volume": "Floor Standing",
        "material": "Vitreous China Monobloc",
        "img_src": "/assets/img/bathroom/basin-monolith.svg",
        "specs": [
            ("Mounting", "Floor anchored with integrated vertical siphon channel"),
            ("Finish Options", "Gloss White, Matte Anthracite, Matte Sand Stone")
        ]
    },
    {
        "id": "CB-BA-0006",
        "name": "Cabivella InsetBasin Undermount Glazed Vanity Basin",
        "slug": "cabivella-insetbasin-undermount-vanity-basin",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Under-counter seamless mounting ceramic basin with glazed exterior underbelly and integrated concealed overflow for solid marble and quartz worktops.",
        "dimensions": "520 x 380 x 180 mm",
        "flush_volume": "Undermount",
        "material": "Vitreous China",
        "img_src": "/assets/img/bathroom/basin-undermount.svg",
        "specs": [
            ("Standard", "BS EN 14688"),
            ("Fixing Kit", "Stainless steel under-counter clamping brackets included")
        ]
    },
    {
        "id": "CB-BA-0007",
        "name": "Cabivella TitanPVD Metallic Brushed Vessel Basin",
        "slug": "cabivella-titanpvd-metallic-brushed-vessel-basin",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Ceramic countertop basin finished with physical vapour deposition (PVD) titanium coating in brushed gunmetal and brushed brass for luxury interior schemes.",
        "dimensions": "500 x 380 x 130 mm",
        "flush_volume": "PVD Coated",
        "material": "PVD Coated Vitreous Ceramic",
        "img_src": "/assets/img/bathroom/basin-pvd.svg",
        "specs": [
            ("Coating", "High-vacuum Physical Vapour Deposition (PVD)"),
            ("Scratch Hardness", "3x more resistant to abrasion than chrome plating")
        ]
    },
    {
        "id": "CB-BA-0008",
        "name": "Cabivella ModernBidet Wall-Mounted Ceramic Bidet",
        "slug": "cabivella-modernbidet-wall-mounted-ceramic-bidet",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Sleek wall-hung ceramic bidet matching PureLine WC geometry, pre-punched with a single central tap hole and concealed water overflow.",
        "dimensions": "540 x 360 x 320 mm",
        "flush_volume": "Single Hole Bidet",
        "material": "Vitreous China",
        "img_src": "/assets/img/bathroom/bidet-wall-hung.svg",
        "specs": [
            ("Standard", "BS EN 14528"),
            ("Tap Hole", "Standard 35 mm single bidet mixer opening")
        ]
    },
    {
        "id": "CB-BA-0009",
        "name": "Cabivella AeroUrinal Wall-Mounted Siphon Urinal",
        "slug": "cabivella-aerourinal-wall-mounted-siphon-urinal",
        "section": "Architectural Vitreous Sanitaryware",
        "desc": "Commercial vitreous china wall urinal with concealed back-inlet spud, integrated ceramic spreader, and matching ceramic partition privacy screens.",
        "dimensions": "320 x 350 x 580 mm",
        "flush_volume": "1.0 – 2.0 Litres",
        "material": "Commercial Grade Vitreous China",
        "img_src": "/assets/img/bathroom/urinal-wall.svg",
        "specs": [
            ("Standard", "BS EN 13407"),
            ("Sensor Compatibility", "Compatible with concealed infrared sensor flush valves")
        ]
    },

    # Section 2: Designer Brassware & Basin Mixers (Bien Armatür Reference)
    {
        "id": "CB-BA-0010",
        "name": "Cabivella DanteLux Basin Mixer Tap - Brushed Rose Gold",
        "slug": "cabivella-dantelux-basin-mixer-rose-gold",
        "section": "Designer Brassware & Basin Mixers",
        "desc": "Solid CW617N brass monobloc basin mixer equipped with 35 mm Kerox ceramic disc cartridge, Neoperl aerator, and electro-plated brushed rose gold finish.",
        "dimensions": "Spout Height: 120 mm / Reach: 145 mm",
        "flush_volume": "Flow: 5.0 L/min at 3 bar",
        "material": "DZR Solid Brass CW617N",
        "img_src": "/assets/img/bathroom/tap-basin-rosegold.svg",
        "specs": [
            ("Standard", "BS EN 817:2008"),
            ("Cartridge", "Kerox 35 mm ceramic disc (tested to 500,000 cycles)"),
            ("Water Saving", "Neoperl Honeycomb laminar flow aerator with 5.0 l/min limiter"),
            ("Flexible Tails", "TÜV certified stainless steel braided PEX hoses (G 3/8\")")
        ]
    },
    {
        "id": "CB-BA-0011",
        "name": "Cabivella DanteLux Tall Countertop Mixer - Matte Black",
        "slug": "cabivella-dantelux-tall-mixer-matte-black",
        "section": "Designer Brassware & Basin Mixers",
        "desc": "Extended high-spout monobloc tap designed specifically for freestanding countertop basins, finished in electrophoretic matte black with fingerprint-free coat.",
        "dimensions": "Spout Height: 245 mm / Total Height: 310 mm",
        "flush_volume": "Flow: 5.0 L/min",
        "material": "Solid Brass Electro-coating",
        "img_src": "/assets/img/bathroom/tap-tall-black.svg",
        "specs": [
            ("Finish Technology", "Electrophoretic deposition coating resisting saltwater humidity"),
            ("Max Operating Pressure", "10 bar (Recommended 1.5 – 5.0 bar)")
        ]
    },
    {
        "id": "CB-BA-0012",
        "name": "Cabivella PruvaLine Concealed Wall-Mounted Mixer",
        "slug": "cabivella-pruvaline-concealed-wall-mixer",
        "section": "Designer Brassware & Basin Mixers",
        "desc": "Two-hole wall-mounted basin mixer with separate single lever control and 200 mm architectural spout mounted on a solid brass rough-in concealed box.",
        "dimensions": "Spout Projection: 200 mm",
        "flush_volume": "Wall Mounted",
        "material": "Solid Brass with Installation Box",
        "img_src": "/assets/img/bathroom/tap-wall-mounted.svg",
        "specs": [
            ("Rough-in Box", "Included brass rough-in installation chassis with spirit level"),
            ("Plate Dimensions", "200 x 80 mm flush brass trim plate")
        ]
    },
    {
        "id": "CB-BA-0013",
        "name": "Cabivella SensorFlow Touchless Infrared Electronic Tap",
        "slug": "cabivella-sensorflow-touchless-infrared-tap",
        "section": "Designer Brassware & Basin Mixers",
        "desc": "Hands-free commercial sensor basin tap with dual mains/battery power pack, 0.5-second auto-shutoff, and hygienic thermal disinfection override.",
        "dimensions": "Height: 160 mm",
        "flush_volume": "Flow: 3.5 L/min BREEAM",
        "material": "Chrome Plated Brass",
        "img_src": "/assets/img/bathroom/tap-sensorflow.svg",
        "specs": [
            ("Power Supply", "230V AC adapter with 4x AA lithium battery backup"),
            ("Sensor Range", "Self-calibrating optical infrared sensor (10–25 cm detection)")
        ]
    },
    {
        "id": "CB-BA-0014",
        "name": "Cabivella ChefPro Pull-Down 360° Spring Kitchen Mixer",
        "slug": "cabivella-chefpro-pull-down-spring-mixer",
        "section": "Designer Brassware & Basin Mixers",
        "desc": "Professional culinary dual-function spray kitchen tap featuring a stainless steel coil spring arm, 360-degree swivel radius, and magnetic docking sprayhead.",
        "dimensions": "Height: 480 mm / Reach: 220 mm",
        "flush_volume": "Dual Spray Jet",
        "material": "Stainless Steel / Brass",
        "img_src": "/assets/img/bathroom/tap-kitchen-pro.svg",
        "specs": [
            ("Spray Functions", "Aerated aerator stream + High-pressure rinse spray"),
            ("Spring Hose", "Reinforced silicone-sheathed stainless spring")
        ]
    },

    # Section 3: Luxury Shower Enclosures, Rain Heads & Concealed Valves (Bien Duş Reference)
    {
        "id": "CB-BA-0015",
        "name": "Cabivella GrandRain Thermostatic Overhead Shower Column",
        "slug": "cabivella-grandrain-thermostatic-shower-column",
        "section": "Luxury Shower Enclosures & Valves",
        "desc": "Exposed thermostatic shower column combining a 300 mm stainless steel overhead drench head, 3-mode ergonomic hand shower, and 38°C safety anti-scald cartridge.",
        "dimensions": "Column Height: 850–1200 mm adjustable",
        "flush_volume": "Thermostatic 38°C",
        "material": "Brass Thermostat / SS Shower Head",
        "img_src": "/assets/img/bathroom/shower-column.svg",
        "specs": [
            ("Standard", "BS EN 1111 (Thermostatic mixing valves)"),
            ("Anti-Scald Protection", "Automatic water cut-off within 0.2s if cold water supply fails"),
            ("Overhead Drench", "300 x 300 mm ultra-slim square or round stainless steel head")
        ]
    },
    {
        "id": "CB-BA-0016",
        "name": "Cabivella ConcealedSpa Multi-Function Built-in Shower Suite",
        "slug": "cabivella-concealedspa-built-in-shower-suite",
        "section": "Luxury Shower Enclosures & Valves",
        "desc": "3-outlet concealed thermostatic valve package with flush ceiling-mounted rain head, wall waterfall outlet, and brass cylindrical pencil hand shower.",
        "dimensions": "Ceiling Head: 400x400 mm",
        "flush_volume": "3-Way Concealed",
        "material": "Solid Brass Concealed Body",
        "img_src": "/assets/img/bathroom/shower-concealed.svg",
        "specs": [
            ("Diverter Mechanism", "Push-button or rotary 3-way ceramic diverter"),
            ("Water Flow Rate", "Overhead 16 L/min, Handset 9 L/min at 3 bar")
        ]
    },
    {
        "id": "CB-BA-0017",
        "name": "Cabivella SlimRail Adjustable Height Handset Shower Set",
        "slug": "cabivella-slimrail-adjustable-shower-set",
        "section": "Luxury Shower Enclosures & Valves",
        "desc": "Heavy-gauge 900 mm stainless steel shower riser rail with smooth gliding bracket, 1.75 m anti-twist smooth PVC hose, and silicone easy-clean nozzles.",
        "dimensions": "Rail Length: 900 mm",
        "flush_volume": "Multi-mode Handset",
        "material": "Inox 304 Rail + Brass Brackets",
        "img_src": "/assets/img/bathroom/shower-riser.svg",
        "specs": [
            ("Nozzles", "Rub-clean limescale-resistant elastomeric nozzles"),
            ("Hose", "1.75 m reinforced smooth anti-microbial PVC hose (conical nut 1/2\")")
        ]
    },
    {
        "id": "CB-BA-0018",
        "name": "Cabivella UltraThin 300mm Stainless Steel Rain Shower Head",
        "slug": "cabivella-ultrathin-300mm-rain-shower-head",
        "section": "Luxury Shower Enclosures & Valves",
        "desc": "Seamless laser-welded 2 mm ultra-thin stainless steel overhead rain shower head with swivel ball joint and air-injection droplet enrichment technology.",
        "dimensions": "300 x 300 mm / Ø 300 mm",
        "flush_volume": "Air Injection Rain",
        "material": "AISI 304 Stainless Steel",
        "img_src": "/assets/img/bathroom/shower-head-thin.svg",
        "specs": [
            ("Air Induction", "Mixes 30% air into water stream for full soft droplets"),
            ("Connection", "Standard 1/2\" female brass swivel connector")
        ]
    },
    {
        "id": "CB-BA-0019",
        "name": "Cabivella AquaDrain 360° Stainless Steel Linear Drain",
        "slug": "cabivella-aquadrain-stainless-linear-drain",
        "section": "Luxury Shower Enclosures & Valves",
        "desc": "Grade 304 stainless steel linear wetroom channel with 360-degree rotating horizontal siphon trap, hair catcher, and reversible tile-insert grate.",
        "dimensions": "Lengths: 500, 600, 800, 1000 mm",
        "flush_volume": "Discharge: 48 L/min",
        "material": "AISI 304 Brushed Stainless",
        "img_src": "/assets/img/bathroom/drain-linear.svg",
        "specs": [
            ("Standard", "BS EN 1253-1"),
            ("Grate Versatility", "Dual-sided: brushed stainless top or flip over for 12 mm tile inset"),
            ("Water Trap Height", "50 mm EN 1253 compliant foul-air water seal")
        ]
    },

    # Section 4: Concealed Cisterns & Flush Actuators (Bien Gömme Rezervuar Reference)
    {
        "id": "CB-BA-0020",
        "name": "Cabivella SlimCistern 80mm Concealed Dual-Flush Frame",
        "slug": "cabivella-slimcistern-80mm-concealed-frame",
        "section": "Concealed Cisterns & Flush Actuators",
        "desc": "Ultra-slim 80 mm structural steel frame and blow-moulded insulated cistern designed for shallow stud partitions, brick reveals, and space-saving wall-hung WCs.",
        "dimensions": "Frame Depth: 80 mm / Height: 1120 mm / Width: 500 mm",
        "flush_volume": "Adjustable 3/6L or 2.5/4.5L",
        "material": "Powder Coated Steel + HDPE Cistern",
        "img_src": "/assets/img/bathroom/cistern-slim.svg",
        "specs": [
            ("Standard", "BS EN 14055 Class 1"),
            ("Frame Strength", "Tested to 400 kg static cantilever load"),
            ("Condensation Barrier", "Encapsulated with seamless EPS thermal insulation shell"),
            ("Acoustic Class", "Class 1 silent fill valve (< 20 dB noise level)")
        ]
    },
    {
        "id": "CB-BA-0021",
        "name": "Cabivella SolidCistern 120mm Structural Wall-Hung WC Frame",
        "slug": "cabivella-solidcistern-120mm-structural-frame",
        "section": "Concealed Cisterns & Flush Actuators",
        "desc": "Robust 120 mm standard installation frame equipped with telescoping height-adjustable feet (0–200 mm) and pre-assembled waste elbow for drylining partitions.",
        "dimensions": "Frame Depth: 120 mm / Height: 1120 mm",
        "flush_volume": "3 / 6 Litres Dual Flush",
        "material": "Structural Box Steel 40x40 mm",
        "img_src": "/assets/img/bathroom/cistern-solid.svg",
        "specs": [
            ("Inlet Valve", "Silent hydraulic servo-controlled filling mechanism"),
            ("Waste Connection", "90/110 mm adjustable discharge bend included")
        ]
    },
    {
        "id": "CB-BA-0022",
        "name": "Cabivella ActuatorPlate Dual-Flush Push Plate - Gunmetal",
        "slug": "cabivella-actuatorplate-dual-flush-gunmetal",
        "section": "Concealed Cisterns & Flush Actuators",
        "desc": "Mechanical or pneumatic dual-flush control plate manufactured from die-cast zinc alloy or stainless steel with soft-touch buttons and brushed gunmetal finish.",
        "dimensions": "246 x 164 x 12 mm",
        "flush_volume": "Dual Push",
        "material": "Die-Cast Metal Alloy",
        "img_src": "/assets/img/bathroom/actuator-plate.svg",
        "specs": [
            ("Actuation Force", "< 20 N smooth ergonomic push action"),
            ("Maintenance Access", "Serves as tool-free inspection window for cistern internal valve gear")
        ]
    },

    # Section 5: Architectural Bathroom Accessories & Hardware
    {
        "id": "CB-BA-0023",
        "name": "Cabivella LinearAcc Heated Architectural Towel Rail",
        "slug": "cabivella-linearacc-heated-towel-rail",
        "section": "Architectural Bathroom Accessories",
        "desc": "Hydronic or dual-fuel stainless steel ladder towel radiator finished in matte black or brushed brass with 22 mm horizontal tubes and concealed wall mounts.",
        "dimensions": "1200 x 500 mm / 1600 x 600 mm",
        "flush_volume": "Heat Output: 650 Watts",
        "material": "Low Carbon Steel / Inox",
        "img_src": "/assets/img/bathroom/towel-rail.svg",
        "specs": [
            ("Standard", "BS EN 442"),
            ("Operating Pressure", "Max 10 bar test pressure (working 6 bar)"),
            ("Connections", "1/2\" BSP bottom inlet and outlet")
        ]
    },
    {
        "id": "CB-BA-0024",
        "name": "Cabivella LuxePack Solid Brass Bathroom Hardware Suite",
        "slug": "cabivella-luxepack-solid-brass-hardware-suite",
        "section": "Architectural Bathroom Accessories",
        "desc": "Coordinated 5-piece solid brass bathroom accessory suite including toilet paper roll holder, double robe hook, 600 mm single towel bar, soap dispenser, and toilet brush.",
        "dimensions": "5-Piece Coordinated Set",
        "flush_volume": "Hardware Set",
        "material": "CW617N Solid Brass",
        "img_src": "/assets/img/bathroom/hardware-suite.svg",
        "specs": [
            ("Concealed Fixings", "Threaded grub-screw wall anchor brackets with zero visible screws"),
            ("Finishes", "Brushed Brass, Matte Black, Brushed Nickel, Polished Chrome")
        ]
    }
]

DRAINAGE_PRODUCTS = [
    # Section 1: Building Soil, Waste & Sanitary Potable Systems (Ege Yildiz Bina Grubu)
    {
        "id": "CB-DR-0001",
        "name": "Cabivella PPRC Pipe PN20 Potable Distribution",
        "slug": "cabivella-pprc-pipe-pn20-potable-distribution",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "Polypropylene Random Copolymer (PP-R Type 3) drinking water pipes certified to BS EN ISO 15874 for pressurized hot and cold plumbing systems up to 20 bar.",
        "dimensions": "OD 20 mm to 160 mm",
        "pressure_class": "PN 20 (SDR 6)",
        "material": "Polypropylene Type 3 (Borealis raw material)",
        "img_src": "/assets/img/drainage/pprc-pipe.svg",
        "specs": [
            ("Standard", "BS EN ISO 15874-2 / DIN 8077/8078"),
            ("Service Life", "50 years at 20°C / 20 bar or 70°C / 10 bar"),
            ("Hygiene Certification", "WRAS / DVGW / Sağlık Bakanlığı içme suyu onaylı"),
            ("Jointing", "Thermal socket-fusion welding (homogenous monolithic joint)")
        ]
    },
    {
        "id": "CB-DR-0002",
        "name": "Cabivella GlassFibre Composite PPRC Low-Expansion Pipe",
        "slug": "cabivella-glassfibre-composite-pprc-pipe",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "Three-layer glass-fibre reinforced PP-RCT composite pipe offering 75% reduced thermal linear expansion and 30% higher flow rate for central heating riser mains.",
        "dimensions": "OD 20 mm to 160 mm",
        "pressure_class": "PN 25 (SDR 7.4)",
        "material": "PP-RCT / Glass Fibre Composite / PP-RCT",
        "img_src": "/assets/img/drainage/pprc-composite.svg",
        "specs": [
            ("Linear Expansion Coefficient", "0.035 mm/m·K (compared to 0.150 for plain PPR)"),
            ("Operating Temp", "Continuous 95°C hot water service"),
            ("No Shaving Required", "Can be directly welded without peeling the outer layer")
        ]
    },
    {
        "id": "CB-DR-0003",
        "name": "Cabivella SilentWaste Multi-Layer Acoustic Soil Pipe",
        "slug": "cabivella-silentwaste-acoustic-soil-pipe",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "Mineral-reinforced polypropylene (PP-MD) triple-layer push-fit acoustic soil and waste pipe delivering sound insulation below 14 dB(A) at 2 L/s flow rate.",
        "dimensions": "OD 50 mm, 75 mm, 110 mm, 160 mm",
        "pressure_class": "Gravity Waste / BS EN 1451",
        "material": "PP-MD Mineral Reinforced Core",
        "img_src": "/assets/img/drainage/silent-pipe.svg",
        "specs": [
            ("Acoustic Performance", "Sound level 12 – 14 dB(A) tested to BS EN 14366 (Fraunhofer Institute)"),
            ("Intermediate Layer", "High-density barium sulphate reinforced polypropylene"),
            ("Ring Seal", "Factory-inserted lip seal gasket conforming to EN 681-1")
        ]
    },
    {
        "id": "CB-DR-0004",
        "name": "Cabivella DuplexPVC Standard Soil, Waste & Vent Pipe",
        "slug": "cabivella-duplexpvc-standard-soil-waste-pipe",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "Unplasticized polyvinyl chloride (PVC-U) push-fit socketed grey waste and soil pipes manufactured in Type B (inside building) and Type BD (underground building perimeter).",
        "dimensions": "OD 32 mm to 200 mm",
        "pressure_class": "Type B / BD to BS EN 1329",
        "material": "PVC-U Unplasticized Polyvinyl Chloride",
        "img_src": "/assets/img/drainage/pvc-waste-pipe.svg",
        "specs": [
            ("Standard", "BS EN 1329-1"),
            ("Impact Resistance", "TIR (True Impact Rate) < 10% at 0°C"),
            ("Jointing", "Push-fit elastomeric rubber ring socket")
        ]
    },
    {
        "id": "CB-DR-0005",
        "name": "Cabivella PEX-a EVOH Oxygen Barrier Underfloor Heating Pipe",
        "slug": "cabivella-pexa-evoh-oxygen-barrier-pipe",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "Peroxide-crosslinked polyethylene (PEX-a) 5-layer pipe coated with ethyl vinyl alcohol (EVOH) oxygen barrier preventing corrosion of steel radiators and boiler pumps.",
        "dimensions": "16x2.0 mm, 17x2.0 mm, 20x2.0 mm",
        "pressure_class": "Class 4/5 6 bar to ISO 10508",
        "material": "PEX-a Crosslinked PE (Crosslinking degree > 75%)",
        "img_src": "/assets/img/drainage/pexa-pipe.svg",
        "specs": [
            ("Oxygen Tightness", "DIN 4726 compliant (< 0.32 mg/m²·d at 40°C)"),
            ("Thermal Memory", "Self-repairing thermal kink recovery using hot air gun")
        ]
    },
    {
        "id": "CB-DR-0006",
        "name": "Cabivella DeepGutter PVC Rainwater Half-Round Systems",
        "slug": "cabivella-deepgutter-pvc-rainwater-system",
        "section": "Building Soil, Waste & Potable Water Systems",
        "desc": "High-capacity 125 mm half-round and 100x70 mm box PVC-U gutters with matching 80/100 mm downpipes and internal silicone expansion gaskets.",
        "dimensions": "Gutter 125 mm / Downpipe 80–100 mm",
        "pressure_class": "Gravity Rainwater Discharge",
        "material": "UV-Stabilized PVC-U",
        "img_src": "/assets/img/drainage/pvc-gutter.svg",
        "specs": [
            ("Standard", "BS EN 607 (Gutters) & BS EN 1462 (Brackets)"),
            ("Flow Capacity", "Up to 4.8 L/s with end-outlet")
        ]
    },

    # Section 2: Infrastructure Sewer, Corrugated & Telecommunication Systems (Ege Yildiz Alt Yapı)
    {
        "id": "CB-DR-0007",
        "name": "Cabivella CorruPipe SN8 Twin-Wall Corrugated Sewer Pipe",
        "slug": "cabivella-corrupipe-sn8-twin-wall-sewer-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "High-density polyethylene (HDPE) double-wall structured-wall corrugated pipes with smooth interior waterway and corrugated exterior ribs for municipal foul sewers.",
        "dimensions": "ID 100 mm to ID 1200 mm",
        "pressure_class": "Ring Stiffness SN 8 (≥ 8 kN/m²)",
        "material": "100% Virgin HDPE",
        "img_src": "/assets/img/drainage/corrugated-sn8.svg",
        "specs": [
            ("Standard", "BS EN 13476-3 Type B"),
            ("Ring Stiffness", "SN 8 (≥ 8 kN/m²) & SN 4 options"),
            ("Ring Flexibility", "No cracking or delamination at 30% diameter deflection"),
            ("Joint Type", "Integral in-line bell socket with EPDM profile gasket")
        ]
    },
    {
        "id": "CB-DR-0008",
        "name": "Cabivella CorruPipe SN4 Stormwater Drainage Pipe",
        "slug": "cabivella-corrupipe-sn4-stormwater-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Lightweight twin-wall HDPE corrugated pipes designed for non-trafficked civil rainwater collection, highway ditches, and retention basin attenuation systems.",
        "dimensions": "ID 150 mm to ID 800 mm",
        "pressure_class": "Ring Stiffness SN 4 (≥ 4 kN/m²)",
        "material": "HDPE Structural Pipe",
        "img_src": "/assets/img/drainage/corrugated-sn4.svg",
        "specs": [
            ("Standard", "BS EN 13476-3"),
            ("Manning Roughness Coefficient", "n = 0.009 (ultra-slick hydraulic waterway)")
        ]
    },
    {
        "id": "CB-DR-0009",
        "name": "Cabivella PolyMax PE100 Potable Water Mains Pipe",
        "slug": "cabivella-polymax-pe100-potable-mains-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "High-density polyethylene PE100 blue-striped pressure pipe manufactured to BS EN 12201 for underground municipal potable water distribution networks.",
        "dimensions": "OD 20 mm to 1000 mm",
        "pressure_class": "PN 10, PN 16, PN 25 (SDR 17 / SDR 11)",
        "material": "PE100 High-Density Resin (MRS 10 MPa)",
        "img_src": "/assets/img/drainage/pe100-pipe.svg",
        "specs": [
            ("Standard", "BS EN 12201-2"),
            ("Slow Crack Growth (SCG)", "> 1000 hours resistance to notch propagation"),
            ("Coil / Length Supply", "Coils up to 110 mm (100 m / 300 m); Straight 12 m bars above 110 mm")
        ]
    },
    {
        "id": "CB-DR-0010",
        "name": "Cabivella ElectroFuse PE100 Electrofusion Fittings",
        "slug": "cabivella-electrofuse-pe100-electrofusion-fittings",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Injection-moulded PE100 electrofusion couplers, 90°/45° elbows, reducing tees, and tapping saddles featuring embedded heating wire coils and barcode data tags.",
        "dimensions": "OD 20 mm to 630 mm",
        "pressure_class": "PN 16 (Gas: 10 bar / Water: 16 bar)",
        "material": "Virgin PE100 Resin with Copper Coils",
        "img_src": "/assets/img/drainage/electrofusion-fitting.svg",
        "specs": [
            ("Standard", "BS EN 12201-3 & BS EN 1555-3"),
            ("Barcode Recognition", "Universal 24-digit ISO 13950 optical barcode"),
            ("Welding Voltage", "Standard 39.5V – 40V automatic fusion parameters")
        ]
    },
    {
        "id": "CB-DR-0011",
        "name": "Cabivella PressurePVC-U Solvent Weld Distribution Pipe",
        "slug": "cabivella-pressurepvc-u-distribution-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Rigid unplasticized PVC pressure pipes with integrated rubber gasket bell mouths (Anger socket) or plain ends for chemical lines and pressurized water conveyance.",
        "dimensions": "OD 20 mm to 500 mm",
        "pressure_class": "PN 6, PN 10, PN 16",
        "material": "PVC-U Unplasticized",
        "img_src": "/assets/img/drainage/pressure-pvc.svg",
        "specs": [
            ("Standard", "BS EN ISO 1452-2 (Plastics piping systems for water supply)"),
            ("Socket Type", "Anger push-fit socket with captive DIN-lock rubber seal")
        ]
    },
    {
        "id": "CB-DR-0012",
        "name": "Cabivella SlottedDrain Perforated Subsoil Drainage Pipe",
        "slug": "cabivella-slotteddrain-perforated-subsoil-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Flexible corrugated PVC-U subsoil drainage coils with 220° or 360° laser-cut water entry perforations, available plain or wrapped in non-woven geotextile filter sock.",
        "dimensions": "OD 80 mm, 100 mm, 125 mm, 160 mm, 200 mm",
        "pressure_class": "Subsoil Drainage DIN 1187",
        "material": "PVC-U Flexible Corrugated Coil",
        "img_src": "/assets/img/drainage/slotted-drain.svg",
        "specs": [
            ("Standard", "DIN 1187 / BS 4962"),
            ("Water Inlet Area", "Min 50 cm² per linear metre"),
            ("Geotextile Sock", "Class 1 non-woven needle-punched polypropylene filter wrap")
        ]
    },
    {
        "id": "CB-DR-0013",
        "name": "Cabivella GasPoly PE80 / PE100 Gas Distribution Pipe",
        "slug": "cabivella-gaspoly-pe80-pe100-gas-pipe",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Solid yellow or black with yellow stripes high-integrity polyethylene pipe certified to BS EN 1555 for underground natural gas and LPG municipal mains.",
        "dimensions": "OD 20 mm to 400 mm",
        "pressure_class": "MOP 4 bar (PE80) / MOP 10 bar (PE100)",
        "material": "High-Grade Gas Polyethylene",
        "img_src": "/assets/img/drainage/gas-poly.svg",
        "specs": [
            ("Standard", "BS EN 1555-2"),
            ("Rapid Crack Propagation", "Critical pressure Pc > 10 bar at 0°C"),
            ("Traceability", "Laser marked every metre with batch, resin code, and production stamp")
        ]
    },
    {
        "id": "CB-DR-0014",
        "name": "Cabivella TelecomHDPE Underground Multi-Duct Conduit",
        "slug": "cabivella-telecomhdpe-underground-conduit",
        "section": "Infrastructure Corrugated, Sewer & PE Systems",
        "desc": "Internal longitudinal ribbed low-friction HDPE conduit pipes manufactured in single or multi-bore bundled packs for blowing optical fibre cables.",
        "dimensions": "OD 32 mm, 40 mm, 50 mm",
        "pressure_class": "Cable Ducting",
        "material": "High Density Polyethylene with Silicon Liner",
        "img_src": "/assets/img/drainage/telecom-conduit.svg",
        "specs": [
            ("Friction Coefficient", "Dynamic friction coefficient < 0.10"),
            ("Blowing Distance", "Supports continuous cable blowing runs up to 2000 metres")
        ]
    },

    # Section 3: Commercial Agricultural & Irrigation Systems (Ege Yildiz Ziraat)
    {
        "id": "CB-DR-0015",
        "name": "Cabivella QuickSprink Lever-Lock Sprinkler Pipes",
        "slug": "cabivella-quicksprink-lever-lock-sprinkler-pipes",
        "section": "Agricultural Irrigation & Water Management",
        "desc": "Lightweight HDPE or aluminium agricultural portable sprinkler irrigation pipes fitted with quick-release galvanised steel latch couplers for field relocation.",
        "dimensions": "OD 75 mm, 90 mm, 110 mm, 125 mm",
        "pressure_class": "PN 6 (Working Pressure 6 bar)",
        "material": "UV-Stabilized HDPE with Steel Latches",
        "img_src": "/assets/img/drainage/sprinkler-pipe.svg",
        "specs": [
            ("Standard", "ISO 11678 (Agricultural irrigation equipment)"),
            ("Joint Architecture", "Single-action cam-lock latch with self-draining rubber cup seal"),
            ("Bar Lengths", "Standard 5.0 m and 6.0 m portable pipe sections")
        ]
    },
    {
        "id": "CB-DR-0016",
        "name": "Cabivella DripLine Pressure-Compensating Inline Pipe",
        "slug": "cabivella-dripline-pressure-compensating-pipe",
        "section": "Agricultural Irrigation & Water Management",
        "desc": "Heavy-wall polyethylene drip line with cylindrical pressure-compensating (PC) self-flushing emitters delivering uniform discharge across sloping terrain.",
        "dimensions": "OD 16 mm / OD 20 mm (Wall: 0.9 – 1.1 mm)",
        "pressure_class": "Operating 0.8 to 4.0 bar",
        "material": "Virgin PE with Silicone Diaphragm Emitters",
        "img_src": "/assets/img/drainage/dripline-pipe.svg",
        "specs": [
            ("Flow Uniformity", "Discharge rate 1.6 L/h, 2.2 L/h or 3.8 L/h ± 3% along 500 m lateral"),
            ("Emitter Spacing", "20 cm, 33 cm, 50 cm, 100 cm interval intervals"),
            ("Clogging Resistance", "Self-cleaning labyrinth vortex with continuous diaphragm flush")
        ]
    },

    # Section 4: Valves, Chambers, Manifolds & Drainage Flow Control
    {
        "id": "CB-DR-0017",
        "name": "Cabivella BallValve Full-Bore Isolation Valves",
        "slug": "cabivella-ballvalve-full-bore-isolation-valves",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Full-bore nickel-plated DZR brass and true-union PVC-U isolation valves engineered with hard chrome-plated brass balls, PTFE seats, and blowout-proof stems.",
        "dimensions": "DN 15 (1/2\") to DN 100 (4\")",
        "pressure_class": "PN 25 / PN 40",
        "material": "DZR Brass CW602N / PVC-U",
        "img_src": "/assets/img/drainage/valve-ball.svg",
        "specs": [
            ("Standard", "BS EN 13828 (Ball valves for potable water)"),
            ("Working Temperature", "-20°C to +130°C"),
            ("Lever Handle", "Reversible steel lever handle with thermal PVC sleeve")
        ]
    },
    {
        "id": "CB-DR-0018",
        "name": "Cabivella BackwaterValve Anti-Flooding Non-Return Valve",
        "slug": "cabivella-backwatervalve-anti-flooding-valve",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Type 1 and Type 2 automatic flap non-return check valves installed on horizontal foul sewer lines to protect basements against backflow storm flooding.",
        "dimensions": "OD 110 mm, 160 mm, 200 mm",
        "pressure_class": "BS EN 13564 Class 1",
        "material": "Impact-Modified ABS / Stainless Flap",
        "img_src": "/assets/img/drainage/valve-backwater.svg",
        "specs": [
            ("Standard", "BS EN 13564-1 (Anti-flooding devices for buildings)"),
            ("Flap Flange", "Stainless steel rodent-proof mechanical flap"),
            ("Manual Lock", "Emergency manual shut-off lock lever")
        ]
    },
    {
        "id": "CB-DR-0019",
        "name": "Cabivella InspectionChamber Modular PVC Drainage Shaft",
        "slug": "cabivella-inspectionchamber-modular-drainage-shaft",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Pre-formed polypropylene inspection chamber base with multi-inlet flow channels, corrugated shaft riser tube, and telescopic frame with ductile iron cover.",
        "dimensions": "Base Diameter: 315 mm / 400 mm / 600 mm",
        "pressure_class": "Loading Class A15 to D400",
        "material": "Polypropylene Copolymer",
        "img_src": "/assets/img/drainage/inspection-chamber.svg",
        "specs": [
            ("Standard", "BS EN 13598-1 & BS EN 13598-2"),
            ("Inlet Outlets", "110 mm & 160 mm inline and 45°/90° branch junctions"),
            ("Depth", "Depth adjustable up to 3.0 m with push-fit riser rings")
        ]
    },
    {
        "id": "CB-DR-0020",
        "name": "Cabivella GullyTrap Heavy-Duty Yard Drainage Catchpit",
        "slug": "cabivella-gullytrap-heavy-duty-catchpit",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Heavy-duty yard gully and sediment silt catchpit bucket with removable stainless steel basket and foul-air water seal for paved areas and driveways.",
        "dimensions": "300 x 300 mm / 400 x 400 mm",
        "pressure_class": "Loading Class B125 / C250",
        "material": "PVC Body with Ductile Iron Grate",
        "img_src": "/assets/img/drainage/gully-trap.svg",
        "specs": [
            ("Removable Silt Bucket", "Includes galvanized perforated debris basket"),
            ("Outlet Trap", "Removable dip-pipe trap preventing sewer smells")
        ]
    },
    {
        "id": "CB-DR-0021",
        "name": "Cabivella ManifoldSystem Modular Brass Distribution Kit",
        "slug": "cabivella-manifoldsystem-brass-distribution-kit",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Pre-assembled 1\" solid extruded brass underfloor heating manifold featuring flowmeters (0–5 L/min), thermo-electric actuator valves, air vents, and fill/drain valves.",
        "dimensions": "2 to 12 Circuit Manifolds",
        "pressure_class": "Operating 6 bar / Test 10 bar",
        "material": "Forged Brass CW617N Nickel Plated",
        "img_src": "/assets/img/drainage/manifold-kit.svg",
        "specs": [
            ("Flowmeters", "Integrated sight-glass flow visualizers on flow bar"),
            ("Actuator Threads", "M30 x 1.5 standard connection on return bar"),
            ("Brackets", "Rubber sound-insulated wall mounting brackets included")
        ]
    },
    {
        "id": "CB-DR-0022",
        "name": "Cabivella FlangeAdapter Ductile Iron & PE Couplings",
        "slug": "cabivella-flangeadapter-ductile-iron-couplings",
        "section": "Valves, Chambers, Manifolds & Flow Control",
        "desc": "Wide-tolerance universal mechanical flange adaptors and end-restrained tensile couplings connecting polyethylene pipes to valves and cast iron pipelines.",
        "dimensions": "DN 50 to DN 600",
        "pressure_class": "PN 10 / PN 16 (BS EN 1092-2)",
        "material": "Epoxy-Coated Ductile Iron GGG-50",
        "img_src": "/assets/img/drainage/flange-adapter.svg",
        "specs": [
            ("Standard", "BS EN 14525 (Restrained mechanical fittings)"),
            ("Corrosion Protection", "Fusion bonded epoxy (FBE) coating ≥ 250 µm thickness"),
            ("Gripper Mechanism", "Integrated brass or stainless steel gripper ring preventing pipe pull-out")
        ]
    }
]
