# -*- coding: utf-8 -*-
"""
Batch 5 Collections Data:
1. MASONRY_PRODUCTS: Cloned & differentiated from https://www.aktascini.com.tr/category/urunler/
   Target: https://cabivella.co.uk/materials-supply/collections/masonry/
   (24 Enterprise Products covering Architectural Facing Bricks, Structural Concrete Blocks, Decorative Terrazzo Tiles, Boundary Walling, Copings & Harpuşta)

2. MODULAR_PRODUCTS: Cloned & differentiated from https://asicigrup.com/urunler/
   Target: https://cabivella.co.uk/materials-supply/collections/modular/
   (22 Enterprise Products covering Pre-Engineered Bathroom Pods, Modular Flat-Pack Site Cabins, Light Gauge Steel Framing, Pre-Insulated Utility Units, and Volumetric Residential Modules)
"""

MASONRY_PRODUCTS = [
    # Section 1: Architectural Facing Bricks & Engineering Clay
    {
        "id": "CB-MS-0001",
        "name": "Cabivella HeritageRed Hand-Made Textured Architectural Clay Facing Brick",
        "slug": "cabivella-heritagered-handmade-clay-facing-brick",
        "section": "Architectural Facing Bricks & Engineering Clay",
        "desc": "Traditional hand-thrown imperial and metric facing bricks crafted from high-density Anatolian red alluvial clay. High compressive strength, frost resistance Class F2, and active soluble salt content S2 for timeless architectural facades.",
        "dimensions": "215 x 102.5 x 65 mm (UK Standard Format)",
        "compressive": "Mean Compressive Strength > 45 N/mm²",
        "frost": "Frost Resistance Class F2 (Severe Exposure to BS EN 771-1)",
        "absorption": "Water Absorption < 9% (Low water suction)",
        "img_src": "/assets/img/masonry/brick-clay-facing.svg",
        "specs": [
            ("Standard", "BS EN 771-1 Specification for clay masonry units"),
            ("Format Dimensions", "215 x 102.5 x 65 mm (Tolerance Category T2 / Range R1)"),
            ("Configuration", "Solid brick with frog or perforated multi-hole layout"),
            ("Active Soluble Salts", "Class S2 (Low efflorescence risk)"),
            ("Bond Strength", "0.15 N/mm² (Fixed value with general purpose mortar)"),
            ("Reaction to Fire", "Class A1 Non-combustible (Zero contribution to fire)"),
            ("Gross Dry Density", "1,850 kg/m³ (Density tolerance D1)"),
            ("Thermal Conductivity", "λ = 0.52 W/mK (P=90% to BS EN 1745)")
        ]
    },
    {
        "id": "CB-MS-0002",
        "name": "Cabivella Class-A Engineering Blue High-Density Clay Brick",
        "slug": "cabivella-class-a-engineering-blue-clay-brick",
        "section": "Architectural Facing Bricks & Engineering Clay",
        "desc": "Ultra-dense vitreous Class A engineering clay brick fired at 1250°C. Delivers extraordinary compressive strength (> 125 N/mm²) and ultra-low water absorption (< 4.5%), engineered for retaining walls, damp-proof courses, and bridge abutments.",
        "dimensions": "215 x 102.5 x 65 mm",
        "classification": "Class A Engineering Brick (BS EN 771-1 / BS 3921)",
        "compressive": "Compressive Strength ≥ 125 N/mm²",
        "water_absorption": "≤ 4.5% Maximum Water Absorption",
        "img_src": "/assets/img/masonry/brick-engineering-blue.svg",
        "specs": [
            ("Standard", "BS EN 771-1 / BS 3921 Category I high-integrity masonry"),
            ("Vitrification", "Fully vitrified dense ceramic matrix"),
            ("Chemical Resistance", "Highly resistant to sulfate attack and chemical wastewater"),
            ("Durability Class", "F2 Severe Weather Exposure (Unprotected ground contact)"),
            ("Soluble Salts", "Class S2 (Zero surface salt crystallization)"),
            ("Weight", "Approx. 3.2 kg per brick unit (Solid structure)"),
            ("Packaging", "Shrink-wrapped pallets of 400 bricks with void bands"),
            ("Structural Use", "Civil engineering substructures, sewers, manholes, parapet walls")
        ]
    },
    {
        "id": "CB-MS-0003",
        "name": "Cabivella BrickSlip Natural Clay Facade Wall Cladding Slips",
        "slug": "cabivella-brickslip-natural-clay-facade-slips",
        "section": "Architectural Facing Bricks & Engineering Clay",
        "desc": "Genuine 15-20mm kiln-fired clay brick slips cut from whole facing bricks with matching pistol corner units. Designed for external wall insulation (EWI) carrier board systems, modular pre-cast panels, and luxury interior feature walls.",
        "thickness": "15 mm – 20 mm (+/- 1mm)",
        "slip_size": "215 x 65 x 18 mm (Pistol corner 215x102.5x65x18mm)",
        "fire_rating": "Euroclass A1 Non-Combustible (Approved for tall buildings >18m)",
        "backing": "Ribbed reverse profile for high mechanical adhesive key",
        "img_src": "/assets/img/masonry/brick-slip-cladding.svg",
        "specs": [
            ("Standard", "BS EN 771-1 / BBA Certified for exterior cladding systems"),
            ("Tensile Pull-Off", "Pull-off adhesion > 1.2 N/mm² with C2TE S1 polymer adhesive"),
            ("Weight per m²", "Approx. 28 kg/m² (Lightweight facade retrofit load)"),
            ("Coverage", "60 standard slips per m² with nominal 10mm mortar joint"),
            ("Freeze-Thaw", "Passed 100 freeze-thaw cycles without delamination"),
            ("Colours Available", "London Stock Buff, Charcoal Black, Smoked Terracotta, White Glaze"),
            ("Joint Pointing", "Compatible with gun-injected polymer pointing mortar"),
            ("Acoustic Mass", "Increases airborne sound reduction by up to 6 dB")
        ]
    },
    {
        "id": "CB-MS-0004",
        "name": "Cabivella FireClay Kiln-Refractory Heat-Resistant Firebrick",
        "slug": "cabivella-fireclay-refractory-heat-resistant-firebrick",
        "section": "Architectural Facing Bricks & Engineering Clay",
        "desc": "High-alumina refractory fireclay brick engineered to withstand continuous thermal exposure up to 1350°C. Exceptional thermal shock resistance for bespoke pizza ovens, open fireplaces, biomass boilers, and industrial kilns.",
        "dimensions": "230 x 114 x 64 mm",
        "max_temperature": "1350°C (Pyrometric Cone Equivalent PCE 30)",
        "alumina_content": "Al2O3 > 38% High-Grade Chamotte Refractory",
        "bulk_density": "2,150 kg/m³",
        "img_src": "/assets/img/masonry/brick-refractory-fireclay.svg",
        "specs": [
            ("Standard", "BS EN ISO 10081-1 / ASTM C27 Dense refractory bricks"),
            ("Cold Crushing Strength", "> 35 N/mm²"),
            ("Reversible Thermal Expansion", "0.55% at 1000°C"),
            ("Thermal Conductivity", "1.15 W/mK at 800°C"),
            ("Spalling Resistance", "High thermal shock resistance (Water quench cycle tested)"),
            ("Mortar Pairing", "Must be laid with Cabivella FireMortar air-setting refractory paste"),
            ("Porosity", "Apparent porosity < 22%"),
            ("Safety", "100% mineral formulation, zero volatile toxic emissions under heat")
        ]
    },

    # Section 2: Concrete Blocks, Aerated & Lightweight Masonry
    {
        "id": "CB-MS-0005",
        "name": "Cabivella ThermalBims Lightweight Volcanic Pumice Insulating Block",
        "slug": "cabivella-thermalbims-lightweight-pumice-block",
        "section": "Concrete Blocks, Aerated & Lightweight Masonry",
        "desc": "Natural Anatolian volcanic pumice (bims) lightweight insulating building block. Features hollow multi-chamber acoustic baffling, exceptional thermal insulation (λ = 0.12 W/mK), Class A1 fire rating, and breathability for internal partitions and cavity walls.",
        "dimensions": "390 x 190 x 190 mm / 390 x 100 x 190 mm",
        "density": "Dry Density 650 – 750 kg/m³ (Ultra-Lightweight)",
        "thermal_lambda": "λ = 0.12 W/mK (Zero cold-bridging)",
        "fire_survival": "4 Hours Fire Resistance (BS EN 1365-1)",
        "img_src": "/assets/img/masonry/block-pumice-bims.svg",
        "specs": [
            ("Standard", "BS EN 771-3 Aggregate concrete masonry units (Dense and lightweight)"),
            ("Compressive Strength", "3.6 N/mm² / 5.0 N/mm² (Category II block)"),
            ("Acoustic Isolation", "Weighted sound reduction index Rw = 46 dB"),
            ("Moisture Vapour", "Vapour diffusion resistance factor μ = 5/10 (Breathable wall)"),
            ("Workability", "Rapid hand saw cutting, easily chased for electrical conduit"),
            ("Environmental", "100% natural volcanic aggregate with low embodied carbon"),
            ("Jointing", "Standard 10mm mortar bed or 2mm thin-joint polymer adhesive"),
            ("UK Regs", "Complies with Part L thermal conservation and Part B fire safety")
        ]
    },
    {
        "id": "CB-MS-0006",
        "name": "Cabivella DenseCrete 7.3N Solid High-Strength Concrete Block",
        "slug": "cabivella-densecrete-7-3n-solid-concrete-block",
        "section": "Concrete Blocks, Aerated & Lightweight Masonry",
        "desc": "Heavyweight solid aggregate concrete load-bearing block manufactured to 7.3 N/mm² compressive strength. Delivers exceptional acoustic mass (2,000 kg/m³ dry density) and high point-load capacity for multi-storey separating party walls and foundations.",
        "dimensions": "440 x 215 x 100 mm (UK Face Format)",
        "strength": "7.3 N/mm² (Standard) / 10.4 N/mm² (Heavy-Duty)",
        "density": "2,000 kg/m³ Dense Limestone Aggregate",
        "acoustic_rating": "Airborne sound insulation Rw > 50 dB (Separating wall)",
        "img_src": "/assets/img/masonry/block-dense-concrete.svg",
        "specs": [
            ("Standard", "BS EN 771-3 / BS 5628 Code of practice for use of masonry"),
            ("Unit Weight", "Approx. 19.5 kg per block unit"),
            ("Moisture Movement", "< 0.5 mm/m drying shrinkage"),
            ("Shear Bond Strength", "0.15 N/mm²"),
            ("Durability Exposure", "Suitable for use below DPC in severe exposure soil conditions"),
            ("Fixing Capability", "Excellent pull-out resistance for heavy anchor bolts and joist hangers"),
            ("Packaging", "Banded pallet packs of 72 blocks (approx. 1.4 tonnes)"),
            ("Recycled Content", "Manufactured using minimum 20% recycled secondary aggregates")
        ]
    },
    {
        "id": "CB-MS-0007",
        "name": "Cabivella Aerocel Precision Thin-Joint Autoclaved Aerated AAC Block",
        "slug": "cabivella-aerocel-precision-thin-joint-aac-block",
        "section": "Concrete Blocks, Aerated & Lightweight Masonry",
        "desc": "Millimetre-calibrated autoclaved aerated concrete (AAC) block engineered for rapid 2mm thin-joint adhesive masonry. Millions of microscopic non-connecting air pores provide monolithic thermal insulation, lightweight handling, and airtight envelope performance.",
        "dimensions": "600 x 250 x 100 mm / 150 mm / 200 mm",
        "thermal_conductivity": "λ = 0.095 W/mK",
        "airtightness": "Certified Passivhaus airtight monolithic construction",
        "joint_system": "2 mm thin-joint polymer mortar bed",
        "img_src": "/assets/img/masonry/block-aac-aerated.svg",
        "specs": [
            ("Standard", "BS EN 771-4 Autoclaved aerated concrete masonry units"),
            ("Compressive Strength", "4.0 N/mm² (Grade 4)"),
            ("Dry Bulk Density", "450 kg/m³ (+/- 30 kg/m³)"),
            ("Dimensional Tolerance", "Flatness < 1.0mm, Thickness +/- 1.0mm (TLMB Class)"),
            ("Speed of Erection", "Builds up to 2.5x faster than traditional brick and blockwork"),
            ("Fire Classification", "Euroclass A1 Non-combustible (up to 4 hours fire wall)"),
            ("Toxicity", "Zero organic compounds, zero VOC emissions"),
            ("Sustainability", "BREEAM Outstanding potential / Low carbon curing lifecycle")
        ]
    },

    # Section 3: Terrazzo Tiles, Cementitious & Mineral Paving
    {
        "id": "CB-MS-0008",
        "name": "Cabivella TerrazzoClassico Polished Natural Marble Aggregate Tile",
        "slug": "cabivella-terrazzoclassico-polished-marble-tile",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "High-pressure hydraulic pressed architectural terrazzo tile combining fine Anatolian white, black, and beige marble chips bound in high-strength Portland cement. Diamond-honed to a smooth 800-grit satin sheen with pre-sealed surface protection.",
        "dimensions": "400 x 400 x 28 mm / 600 x 600 x 32 mm",
        "pressing_force": "600 Tonnes Hydraulic Vacuum Dual-Layer Compaction",
        "wear_resistance": "Deep Abrasion Resistance ≤ 18 mm (BS EN 13748-1)",
        "slip_rating": "PTV wet > 36 / PTV dry > 60 (Low Slip Potential)",
        "img_src": "/assets/img/masonry/tile-terrazzo-marble.svg",
        "specs": [
            ("Standard", "BS EN 13748-1 Terrazzo tiles for internal use"),
            ("Breaking Strength", "Bending tensile strength ≥ 5.0 MPa"),
            ("Marble Aggregate Ratio", "> 75% surface coverage with graded marble chips"),
            ("Surface Polish", "Factory diamond micro-honed with stain-resistant impregnator"),
            ("Impact Resistance", "High impact resistance Class 2"),
            ("Skirting Details", "Matching 100mm high pencil-round terrazzo coved skirtings available"),
            ("Sub-Floor", "Suitable for screeds with underfloor heating systems"),
            ("Heritage Appeal", "Authentic European mid-century and civic terrazzo aesthetic")
        ]
    },
    {
        "id": "CB-MS-0009",
        "name": "Cabivella Karosiman Hand-Crafted Encaustic Cement Tile",
        "slug": "cabivella-karosiman-hand-crafted-encaustic-tile",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "Authentic artisanal encaustic cement tiles manufactured individually by hand using traditional brass mould stencils. 4mm top wear layer of pure marble dust, silica, and natural mineral oxides hydraulically pressed without firing for historic geometric patterns.",
        "dimensions": "200 x 200 x 18 mm",
        "wear_layer": "4 mm solid coloured wear layer (Lifetime design durability)",
        "craft": "Individually hand-poured in Istanbul & Anatolia ateliers",
        "finish": "Velvet Matt Natural Patina",
        "img_src": "/assets/img/masonry/tile-encaustic-cement.svg",
        "specs": [
            ("Standard", "BS EN 13748-1 / Traditional Encaustic Specification"),
            ("Curing Method", "Natural 28-day water submersion curing (Zero kiln firing)"),
            ("Slip Resistance", "Pendulum test value PTV > 42 (Slip safe for hallways & kitchens)"),
            ("Compressive Strength", "> 35 N/mm²"),
            ("Colour Palette", "Bespoke custom Pantone / RAL colour matching available"),
            ("Sealant Required", "Supplied ready for on-site penetrating breathable wax/oil seal"),
            ("Joint Spacing", "Designed for tight 1.5mm – 2mm grout joint lines"),
            ("Aesthetic", "Heritage Victorian, Mediterranean, and Ottoman revival patterns")
        ]
    },
    {
        "id": "CB-MS-0010",
        "name": "Cabivella TactilePave Blister & Hazard Warning Concrete Flag",
        "slug": "cabivella-tactilepave-blister-hazard-concrete-flag",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "Pre-cast high-density concrete tactile paving units conforming to Department for Transport (DfT) Guidance on the Use of Tactile Paving Surfaces. Features raised blister domes for pedestrian road crossings or hazard platform edge warnings.",
        "dimensions": "400 x 400 x 50 mm",
        "profile": "5mm high flat-topped blister studs (BS 7997)",
        "colours": "Buff (Uncontrolled crossings) / Red (Controlled crossings) / Charcoal",
        "slip_skid": "USRV > 65 wet (High pedestrian safety)",
        "img_src": "/assets/img/masonry/tile-tactile-paving.svg",
        "specs": [
            ("Standard", "BS 7997 / BS EN 1339 Concrete paving flags"),
            ("Bending Strength", "Class 3 (Characteristic bending strength ≥ 5.0 MPa)"),
            ("Freeze-Thaw Durability", "Class 4 (Mark D: loss of mass ≤ 1.0 kg/m² after freeze-thaw)"),
            ("Stud Geometry", "25 mm diameter raised domes on 67 mm centre-to-centre grid"),
            ("Tactile Distinction", "Provides unequivocal tactile sensation through footwear and canes"),
            ("Vehicular Overrun", "Withstands commercial delivery vehicle overrun at junctions"),
            ("Packaging", "Palletised with protective foam dividers"),
            ("Civic Compliance", "Mandatory specification for UK highways and rail stations")
        ]
    },

    # Section 4: Boundary Copings, Pier Caps & Harpuşta
    {
        "id": "CB-MS-0011",
        "name": "Cabivella ApexCoping Twice-Weathered Cast Stone Wall Coping",
        "slug": "cabivella-apexcoping-twice-weathered-wall-coping",
        "section": "Boundary Copings, Pier Caps & Harpuşta",
        "desc": "Architectural twice-weathered apex wall coping (harpuşta) cast from high-density semi-dry architectural cast stone. Features continuous water drip-grooves on both undersides to shed rainwater clear of brickwork and prevent efflorescence staining.",
        "dimensions": "600 x 300 x 75/50 mm / 600 x 350 x 75/50 mm",
        "weathering": "Twice-Weathered Apex Ridged Profile (Drains both sides)",
        "drip_groove": "Continuous 8x6 mm cast drip channels on both overhangs",
        "finish": "Etched fine-grained Portland stone or sandstone texture",
        "img_src": "/assets/img/masonry/coping-twice-weathered.svg",
        "specs": [
            ("Standard", "BS 5642-2 Wall copings / BS 1217 Cast stone"),
            ("Compressive Strength", "Cube strength > 35 N/mm² at 28 days"),
            ("Water Absorption", "CAT factor < 0.22 mg/mm² (Water repellent integral additive)"),
            ("Joint Type", "Supplied with pre-formed rebate for flexible mastic seal jointing"),
            ("Colours Available", "Portland White, Bath Stone Buff, Yorkstone Grey, Anthracite"),
            ("Wall Width Fit", "Engineered to overhang 215mm and 275mm cavity boundary walls"),
            ("Corner Units", "Factory cast 90° return corners and stop-ends"),
            ("Protection", "Protects underlying masonry core from frost heave and saturation")
        ]
    },
    {
        "id": "CB-MS-0012",
        "name": "Cabivella PierCap Four-Way Pyramid Cast Stone Pier Cap",
        "slug": "cabivella-piercap-four-way-pyramid-cast-stone",
        "section": "Boundary Copings, Pier Caps & Harpuşta",
        "desc": "Square four-way pyramid apex pier cap designed to crown brick entrance pillars and gateposts. Sawn or etched architectural finish with 4-sided integral drip grooves and optional spherical finial mounting boss.",
        "dimensions": "380x380 mm (1.5 brick pier) / 520x520 mm (2 brick pier)",
        "profile": "Four-Way Pyramid Peak Profile with 50mm drip overhang",
        "material": "Architectural Wet-Cast High-Strength Stone",
        "frost_rating": "Class F2 Severe Weather Exposure",
        "img_src": "/assets/img/masonry/coping-pyramid-piercap.svg",
        "specs": [
            ("Standard", "BS 5642-2 Coping and pier capping units / BS 1217"),
            ("Density", "2,300 kg/m³ dense wet-cast structural stone"),
            ("Underside Drip", "Continuous recessed drip throating prevents water tracking down pier"),
            ("Finial Option", "Central stainless steel locating pin accepts decorative ball finials"),
            ("Tolerances", "+/- 2mm precision mouldings"),
            ("Surface Pore Size", "Ultra-fine pore matrix resists atmospheric pollution and algae"),
            ("Installation", "Bedded on 1:3 cement-sand mortar with polymer bonding agent"),
            ("Gate Hanging", "Engineered to complement architectural ironmongery gate pillars")
        ]
    },
    # Section 4 Continued: Boundary Walling, Blocks & Landscaping Stones
    {
        "id": "CB-MS-0013",
        "name": "Cabivella FloraWall Interlocking Retaining Earth Landscape Block",
        "slug": "cabivella-florawall-interlocking-retaining-block",
        "section": "Boundary Copings, Pier Caps & Harpuşta",
        "desc": "Dry-stacked interlocking hollow concrete retaining wall block engineered with open pockets for living vegetation and roots. Resists high lateral soil pressures on banked garden slopes without requiring mortar joints.",
        "dimensions": "300 x 250 x 150 mm",
        "system": "Mortarless Dry-Stacked Interlocking Lug System",
        "slope": "Engineered for earth retaining slopes up to 70 deg incline",
        "img_src": "/assets/img/masonry/block-retaining-florawall.svg",
        "specs": [
            ("Standard", "BS EN 771-3 / BS 8002 Earth retaining structures"),
            ("Compressive Strength", "> 25 N/mm²"),
            ("Drainage", "Hollow core allows continuous free-draining granular backfill"),
            ("Planting Pockets", "Terraced soil recesses support evergreen trailing flora"),
            ("Weight", "Approx. 16 kg per unit"),
            ("Freeze-Thaw", "Class F2 severe ground exposure rating")
        ]
    },
    {
        "id": "CB-MS-0014",
        "name": "Cabivella CableBims Underground Infrastructure Protection Trough Block",
        "slug": "cabivella-cablebims-underground-infrastructure-trough",
        "section": "Concrete Blocks, Aerated & Lightweight Masonry",
        "desc": "Heavy-duty pumice-concrete utility trough block with interlocking rebated lid. Sunk into subterranean trenches to protect high-voltage energy cables, optical fibres, and gas lines from accidental excavator strikes.",
        "dimensions": "500 x 200 x 150 mm (Internal channel 100x100mm)",
        "protection": "Class 1 Subterranean Cable Protection (BS 7671)",
        "durability": "Resistant to aggressive groundwater, acids, and soil hydrocarbons",
        "img_src": "/assets/img/masonry/block-cable-trough-bims.svg",
        "specs": [
            ("Standard", "BS EN 771-3 / ENA TS 09-02"),
            ("Lid Interlock", "Tongue-and-groove rebated protective concrete lid"),
            ("Warning Label", "Deep-cast 'CAUTION ELECTRIC CABLES' identification"),
            ("Impact Strength", "Withstands pickaxe and backhoe bucket impact resistance"),
            ("Installation", "Rapid dry-laid continuous utility trench run"),
            ("Weight", "22 kg per complete set (Trough + Lid)")
        ]
    },
    {
        "id": "CB-MS-0015",
        "name": "Cabivella BollardMushroom Half-Mushroom Reinforced Concrete Parking Bollard",
        "slug": "cabivella-bollardmushroom-concrete-parking-bollard",
        "section": "Boundary Copings, Pier Caps & Harpuşta",
        "desc": "Solid cast architectural dome/mushroom concrete perimeter vehicle barrier (yarım mantar duba). Engineered for public sidewalks, commercial pedestrian plazas, and driveway parking demarcation with high vehicle impact arrest.",
        "dimensions": "Diameter 350 mm x 240 mm Height",
        "weight": "Approx. 45 kg Solid Dense Concrete",
        "anchoring": "Integrated M16 high-tensile galvanised ground anchoring pin",
        "img_src": "/assets/img/masonry/bollard-concrete-mushroom.svg",
        "specs": [
            ("Standard", "BS 1342 / PAS 68 Security barrier performance guidance"),
            ("Concrete Grade", "C35/45 high-strength aggregate mix"),
            ("Finish", "Exposed washed river pebble or smooth architectural grey"),
            ("Reflective Band", "Optional 3M diamond-grade high-visibility reflective collar"),
            ("Impact Rating", "Arrests low-speed vehicle encroachment"),
            ("Maintenance", "Immune to weathering, de-icing salts, and graffiti vandals")
        ]
    },
    {
        "id": "CB-MS-0016",
        "name": "Cabivella PlanterCube Heavy-Duty Exposed Aggregate Concrete Planter",
        "slug": "cabivella-plantercube-exposed-aggregate-concrete-planter",
        "section": "Boundary Copings, Pier Caps & Harpuşta",
        "desc": "Monolithic cubic and rectangular civic street planters cast from mineral-washed exposed aggregate concrete. Functions as an urban greening feature while providing discreet anti-ram vehicle security for civic entrances.",
        "dimensions": "800 x 800 x 700 mm / 1000 x 500 x 600 mm",
        "capacity": "Up to 350 Litres Root Ball Growing Medium",
        "security": "Anti-Ram Hostile Vehicle Mitigation (HVM) mass (> 380 kg)",
        "img_src": "/assets/img/masonry/planter-concrete-cube.svg",
        "specs": [
            ("Standard", "BS EN 13198 Precast concrete street furniture"),
            ("Drainage", "Integrated dual base drainage weeps with geotextile filter cups"),
            ("Lifting Anchors", "Internal concealed M12 threaded lifting sockets for transport"),
            ("Finish", "Washed basalt, dolomite white, or granite aggregate texture"),
            ("Forklift Pockets", "Concealed bottom forklift fork rebates for effortless relocation"),
            ("Frost Durability", "Class F2 severe winter exposure certification")
        ]
    },
    {
        "id": "CB-MS-0017",
        "name": "Cabivella AndezitPave Central Anatolian Volcanic Porphyry Paving Slabs",
        "slug": "cabivella-andezitpave-volcanic-porphyry-slabs",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "Renowned Ankara/Golbasi pink and grey andesite volcanic stone paving slabs. Sawn, honed, or Bush-hammered non-slip texture delivering superior frost resistance and low thermal expansion for historical restoration and public plazas.",
        "dimensions": "600 x 300 x 40 mm / 400 x 400 x 50 mm",
        "rock_type": "Volcanic Andesite (Intermediate Extrusive Igneous)",
        "colour": "Natural Rose Pink or Heather Grey",
        "img_src": "/assets/img/masonry/stone-andesite-slab.svg",
        "specs": [
            ("Standard", "BS EN 1341 Natural stone slabs for external paving"),
            ("Compressive Strength", "> 115 MPa"),
            ("Flexural Strength", "14.2 MPa"),
            ("Freeze-Thaw Durability", "56 cycles freeze-thaw without loss of integrity"),
            ("Slip Resistance", "PTV wet > 68 (Bush-hammered or flamed texture)"),
            ("Water Absorption", "< 1.8% by weight")
        ]
    },
    {
        "id": "CB-MS-0018",
        "name": "Cabivella MosaicPour Washed Dolomite & Granite Seed Aggregates",
        "slug": "cabivella-mosaicpour-washed-dolomite-seed-aggregates",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "Graded washed natural stone mosaic aggregates (dokme mozaik) for in-situ cast terrazzo, exposed aggregate driveways, and decorative concrete finishes. Sourced from pure crystalline Aegean quarries in calibrated grain sieves.",
        "grading": "0-3 mm, 3-6 mm, 6-9 mm, 9-12 mm Calibrated",
        "mineral": "White Marble, Midnight Basalt, and Anatolian Yellow Granite",
        "purity": "Triple-washed, kiln-dried, and zero silt dust",
        "img_src": "/assets/img/masonry/aggregate-mosaic-seed.svg",
        "specs": [
            ("Standard", "BS EN 12620 / BS EN 13139 Aggregates for mortar"),
            ("Bulk Density", "1,520 kg/m³"),
            ("Compressive Matrix", "Creates compressive strengths > 50 MPa in terrazzo mixes"),
            ("Packaging", "25 kg paper sacks or 1200 kg heavy bulk tote bags"),
            ("Applications", "Seamless poured terrazzo floors, steps, precast facades, polished concrete"),
            ("Color Fastness", "100% natural inorganic mineral, permanent UV stability")
        ]
    },
    {
        "id": "CB-MS-0019",
        "name": "Cabivella ArchTravert Sawn & Honed Classic Light Travertine Paving",
        "slug": "cabivella-archtravert-sawn-honed-light-travertine",
        "section": "Terrazzo Tiles, Cementitious & Mineral Paving",
        "desc": "First-choice Denizli light beige travertine slabs sawn and honed for grand architectural terraces, colonnades, and exterior facades. Features cross-cut continuous uniform patterning with low porosity and high slip safety.",
        "dimensions": "600 x 600 x 30 mm / 800 x 400 x 30 mm",
        "finish": "Honed 200-Grit Micro-Porous Slip-Resistant Finish",
        "origin": "Pamukkale/Denizli Geological Basin, Turkiye",
        "img_src": "/assets/img/masonry/stone-travertine-sawn.svg",
        "specs": [
            ("Standard", "BS EN 1341 / BS EN 1469 Natural stone"),
            ("Flexural Strength", "13.5 N/mm²"),
            ("Slip Resistance", "PTV wet > 48 (Class 1 Pedestrian safety)"),
            ("Density", "2,460 kg/m³"),
            ("Thermal Conductivity", "Cool-touch high emissivity, ideal for barefoot walking"),
            ("Resistance", "Immune to pool chlorine and salt spray corrosion")
        ]
    },
    {
        "id": "CB-MS-0020",
        "name": "Cabivella BrickBond C2TE High-Polymer Brick Slip & Tile Adhesive",
        "slug": "cabivella-brickbond-c2te-high-polymer-adhesive",
        "section": "Architectural Facing Bricks & Engineering Clay",
        "desc": "Thixotropic polymer-modified cementitious adhesive specifically formulated for bonding exterior natural clay brick slips, stone copings, and terrazzo tiles. Non-slip (T) with extended open time (E) for vertical brick slip coursing.",
        "classification": "BS EN 12004 Class C2TE",
        "packaging": "25 kg multi-wall moisture-resistant bag",
        "coverage": "Approx. 4.5 – 5.5 kg/m² with 10mm notched trowel",
        "img_src": "/assets/img/masonry/chem-brick-adhesive.svg",
        "specs": [
            ("Standard", "BS EN 12004:2017 Class C2TE"),
            ("Tensile Adhesion", "Initial tensile adhesion ≥ 1.5 N/mm²"),
            ("After Freeze-Thaw", "Tensile adhesion after 25 freeze-thaw cycles ≥ 1.0 N/mm²"),
            ("Vertical Slip", "Zero slip (≤ 0.5 mm) prevents heavy slips sliding on wall"),
            ("Open Time", "> 30 minutes extended open time"),
            ("Pot Life", "Approx. 4 hours at 20 deg C")
        ]
    }
]

MODULAR_PRODUCTS = [
    # Section 1: Pre-Engineered Bathroom Pods & Monolithic Washrooms
    {
        "id": "CB-MD-0001",
        "name": "Cabivella PodLux Pre-Fabricated Steel-Framed Bathroom Pod",
        "slug": "cabivella-podlux-prefabricated-bathroom-pod",
        "section": "Pre-Engineered Bathroom Pods & Monolithic Washrooms",
        "desc": "Turnkey pre-fabricated architectural bathroom pod constructed with a rigid light gauge cold-formed steel chassis. Fully plumbed, tiled, wired, and tested in factory conditions, delivering plug-and-play crane hook lifting for hotels and build-to-rent towers.",
        "footprint": "2200 x 1800 x 2450 mm (Custom BOQ layouts)",
        "weight": "Approx. 1,800 – 2,200 kg fully fitted",
        "structure": "Cold-Formed Galvanised Steel Frame (BS EN 10346 S350GD)",
        "testing": "100% Factory Hydrostatic Pressure & 18th Edition Electrical Tested",
        "img_src": "/assets/img/modular/pod-bathroom-hotel.svg",
        "specs": [
            ("Standard", "BS 9999 / BS 7671 / BBA & NHBC Accepted Modular Pod System"),
            ("Base Tray", "Rigid GRP composite or concrete composite monocoque water tray"),
            ("Plumbing Rig", "Multilayer composite PEX-AL-PEX pipework with single service riser point"),
            ("Sanitaryware", "Pre-installed rimless wall-hung WC, concealed frame, mixer, vanity, mirror"),
            ("Floor Finish", "Pre-tiled porcelain mosaic or large format porcelain (R10 slip rated)"),
            ("Lifting Rig", "Four certified corner lifting eyes for crane hoist offload"),
            ("Acoustic Isolation", "Acoustic rubber perimeter decoupling pads achieve Rw > 54 dB"),
            ("Site Connection", "Quick-connect mechanical push-fit and electrical plug loom (< 2 hrs)")
        ]
    },
    {
        "id": "CB-MD-0002",
        "name": "Cabivella PodStudent Compact Accessible GRP En-Suite Pod",
        "slug": "cabivella-podstudent-compact-accessible-grp-pod",
        "section": "Pre-Engineered Bathroom Pods & Monolithic Washrooms",
        "desc": "Lightweight, highly durable composite GRP monolithic en-suite bathroom pod designed for student accommodation, key worker housing, and healthcare facilities. Seamless rounded corners eliminate grime traps and deliver 100% leak-proof reliability.",
        "dimensions": "1600 x 1400 x 2200 mm",
        "structure": "Heavy-Duty Moulded GRP Composite (Fire-Retardant Resin)",
        "cleaning": "Moulded seamless radii for clinical infection control",
        "weight": "Approx. 450 kg (Ultra-Lightweight)",
        "img_src": "/assets/img/modular/pod-bathroom-student.svg",
        "specs": [
            ("Standard", "BS EN 14428 / BS 8300 (Equality Act Accessible compliance)"),
            ("Fire Retardancy", "Class 1 / Class 0 Fire retardant resin system (BS 476 Part 7)"),
            ("Sanitary Fitting", "Vitreous china washbasin, thermo-shower mixer, and dual-flush toilet"),
            ("Lighting", "Recessed IP65 LED downlights with automated PIR motion sensor"),
            ("Ventilation", "Integrated 100mm high-efficiency continuous extractor fan"),
            ("Door Assembly", "Pre-hung timber fire door (FD30) with stainless steel ironmongery"),
            ("Durability", "Withstands vigorous commercial turnover without maintenance"),
            ("Logistics", "Fits through standard building openings or crane hoisted per floor")
        ]
    },

    # Section 2: Modular Flat-Pack Site Cabins & Welfare Units
    {
        "id": "CB-MD-0003",
        "name": "Cabivella FlatPack-Pro 20ft Demountable Site Accommodation Container",
        "slug": "cabivella-flatpack-pro-20ft-demountable-site-container",
        "section": "Modular Flat-Pack Site Cabins & Welfare Units",
        "desc": "ISO-standard 20ft modular flat-pack cabin unit featuring a cold-formed structural steel chassis and 60mm polyurethane sandwich panels. Up to 4 demounted units stack within a standard shipping container footprint for 75% logistics freight savings.",
        "dimensions": "6058 x 2438 x 2591 mm (20ft ISO Format)",
        "panels": "60 mm High-Density Rigid Polyurethane (PU) Sandwich Panels",
        "stacking": "Fully load-bearing up to 3 storeys high (G+2)",
        "freight_saving": "4 Flat-Packed units per standard shipping bundle",
        "img_src": "/assets/img/modular/cabin-flatpack-container.svg",
        "specs": [
            ("Standard", "BS EN 1993-1-1 (Eurocode 3 Steel) / ISO 1496-1 Container Standards"),
            ("Chassis Frame", "3.0 mm cold-formed galvanised structural steel corner columns"),
            ("Roof System", "Galvanised sheet roof with integrated corner rainwater downpipes"),
            ("Insulation U-Value", "Roof: U = 0.28 W/m²K | Wall: U = 0.35 W/m²K"),
            ("Electrical Package", "Pre-wired 18th Edition consumer unit, LED battens, 13A twin sockets"),
            ("Flooring", "18mm fiber cement board topped with heavy-duty commercial PVC sheet"),
            ("Windows & Doors", "uPVC double-glazed tilt-and-turn windows with integrated security shutters"),
            ("Assembly Time", "Erected by 2 men and a forklift in under 2 hours")
        ]
    },
    {
        "id": "CB-MD-0004",
        "name": "Cabivella WelfareEco Solar-Hybrid Towable Site Welfare Unit",
        "slug": "cabivella-welfareeco-solar-hybrid-site-welfare-unit",
        "section": "Modular Flat-Pack Site Cabins & Welfare Units",
        "desc": "Self-contained mobile site welfare unit accommodating up to 8 site workers. Equipped with rooftop monocrystalline solar panels, lithium-iron battery storage, backup low-emission diesel generator, eco toilet, canteen, and drying room.",
        "capacity": "8-Person Commercial Construction Site Welfare",
        "power_system": "Solar Hybrid PV + LiFePO4 Lithium Battery Storage",
        "towing": "VCA Certified Road Towable Chassis with Retractable Axle",
        "emissions": "80% Generator Run-Time Reduction (Near-Zero Carbon)",
        "img_src": "/assets/img/modular/cabin-welfare-hybrid.svg",
        "specs": [
            ("Standard", "HSE Construction Welfare Schedule 2 / BS 7671"),
            ("Canteen Facilities", "Stainless steel sink, microwave, hot water kettle, seating for 8"),
            ("Drying Room", "Dedicated ventilated drying room with tubular heater and hanging rail"),
            ("Toilet Compartment", "Micro-flush chemical recirculating toilet with stainless washbasin"),
            ("Solar Array", "3 x 380W high-efficiency rooftop monocrystalline solar panels"),
            ("Inverter / Battery", "Victron Energy MultiPlus 3kVA inverter + 4.8kWh lithium bank"),
            ("Security Shell", "All-steel anti-vandal construction with high-security multi-point doors"),
            ("Telemetry", "GPS tracking and remote smartphone fuel/battery monitoring")
        ]
    },

    # Section 3: Light Gauge Steel Framing & Pre-Assembled Cassettes
    {
        "id": "CB-MD-0005",
        "name": "Cabivella LightSteel-Stud CNC Cold-Rolled Structural LGS Framing",
        "slug": "cabivella-lightsteel-stud-cnc-cold-rolled-lgs-framing",
        "section": "Light Gauge Steel Framing & Pre-Assembled Cassettes",
        "desc": "Precision roll-formed light gauge steel (LGS) C-sections and U-tracks manufactured from structural zinc-coated steel (S350GD + Z275). Pre-punched with service holes and dimpled fastening points directly from 3D BIM / Revit models.",
        "profile": "C90, C140, C200 Structural Sections (Flange 45-65mm)",
        "steel_grade": "High-Yield S350GD (Tensile strength > 420 N/mm²)",
        "zinc_coating": "Z275 (275 g/m² Zinc Coating to BS EN 10346)",
        "bim_link": "Direct CNC fabrication from Tekla / Revit IFC data",
        "img_src": "/assets/img/modular/steel-lgs-stud-frame.svg",
        "specs": [
            ("Standard", "BS EN 1993-1-3 Eurocode 3 Cold-formed thin gauge members"),
            ("Dimensional Accuracy", "+/- 0.5 mm machine roll-formed tolerance"),
            ("Service Ducts", "Pre-punched Ø 34mm service grommet holes every 600mm"),
            ("Fire Protection", "Up to 120 mins fire rating when combined with fire-rated boards"),
            ("Weight Reduction", "Over 70% lighter than traditional masonry cavity walls"),
            ("Rot / Termite Proof", "100% non-combustible, dimensionally stable, zero rot or shrinkage"),
            ("Screws / Fasteners", "High-shear self-drilling carbon steel framing screws"),
            ("BPS Accreditation", "Steel Construction Institute (SCI) assessed system")
        ]
    },
    {
        "id": "CB-MD-0006",
        "name": "Cabivella FloorCassette Pre-Assembled Timber/LGS Acoustic Floor Deck",
        "slug": "cabivella-floorcassette-preassembled-acoustic-floor-deck",
        "section": "Light Gauge Steel Framing & Pre-Assembled Cassettes",
        "desc": "Offsite pre-assembled volumetric floor cassettes spanning up to 8.0 metres. Integrates LGS web joists or engineered timber I-beams with factory-fixed tongue-and-groove decking, perimeter lifting strops, and acoustic mineral insulation batts.",
        "span_capacity": "Clear Spans up to 8.0 Metres (Deflection < L/360)",
        "decking": "22 mm P5 Moisture-Resistant T&G Particleboard or OSB-3",
        "offsite": "Supplied complete with factory-installed lifting slings",
        "acoustic": "Conforms to Robust Detail E-FT-1 (Airborne sound DnTw+Ctr ≥ 52 dB)",
        "img_src": "/assets/img/modular/steel-floor-cassette.svg",
        "specs": [
            ("Standard", "BS EN 1995-1-1 (Eurocode 5) / BS EN 1993-1-3 (Eurocode 3)"),
            ("Floor Vibration", "Designed for natural frequency > 8.0 Hz (Zero floor bounciness)"),
            ("Lifting Safety", "Supplied with certified disposable web lifting strops to LOLER regs"),
            ("Site Productivity", "Installs an entire floor level in 2-3 crane picks per house"),
            ("Service Voids", "Integrated open web geometry allows rapid pipe and cable runs"),
            ("Perimeter Restraint", "Engineered acoustic perimeter flanking strips pre-applied"),
            ("Weather Protection", "Covered in heavy-duty peel-clean waterproof protective film"),
            ("Warranties", "NHBC, Premier Guarantee, and LABC accepted")
        ]
    },

    # Section 4: Pre-Insulated Utility Units & MEP Service Risers
    {
        "id": "CB-MD-0007",
        "name": "Cabivella UtilityCupboard Pre-Fabricated Apartment MEP Cupboard",
        "slug": "cabivella-utilitycupboard-prefabricated-apartment-mep-unit",
        "section": "Pre-Insulated Utility Units & MEP Service Risers",
        "desc": "Plug-and-play factory-built mechanical and electrical utility cupboard module for modern apartments. Integrates heat interface unit (HIU), mechanical ventilation with heat recovery (MVHR), consumer unit, water meter manifold, and washing machine prep.",
        "dimensions": "1200 x 900 x 2400 mm (Fits standard apartment hallway recess)",
        "mep_systems": "HIU Heat Interface Unit + MVHR Heat Recovery + Consumer Unit",
        "fire_barrier": "Compartmentalised fire dampers conforming to Part B",
        "commissioning": "100% Pre-commissioned and pressure tested before site delivery",
        "img_src": "/assets/img/modular/utility-mep-cupboard.svg",
        "specs": [
            ("Standard", "BESA UK HIU Test Standard / BS 7671 / BS 8558"),
            ("Heating Capacity", "Domestic Hot Water: up to 55 kW | Space Heating: up to 10 kW"),
            ("Acoustic Lining", "Class O acoustic insulation foam lining maintains sound < 35 dBA"),
            ("Cold Water Manifold", "WRAS-approved brass distribution manifold with isolating valves"),
            ("MVHR Unit", "Passivhaus-certified MVHR recovering > 90% exhaust heat"),
            ("Consumer Unit", "Dual-RCD or all-RCBO 18th Edition metal board with surge protection"),
            ("Connections", "Top and bottom standardised connection flange positions"),
            ("Schedule Impact", "Reduces apartment first-fix MEP installation from 5 days to 2 hours")
        ]
    },
    {
        "id": "CB-MD-0008",
        "name": "Cabivella VerticalRiser Multi-Service Offsite Steel MEP Riser Module",
        "slug": "cabivella-verticalriser-multi-service-offsite-mep-module",
        "section": "Pre-Insulated Utility Units & MEP Service Risers",
        "desc": "Floor-to-floor pre-fabricated vertical MEP service riser cassette. Fully assembled with structural steel support frame, soil and waste stacks, potable boosted water pipes, heating flow/return pipes, electrical busbars, and cast-in firestop penetration collars.",
        "height": "Floor-to-Floor Height (Typically 3000 mm – 4200 mm)",
        "piping_services": "Soil & Waste, Boosted Cold Water, District Heating, Sprinklers, Dry Riser",
        "firestop": "Pre-installed 4-hour intumescent floor penetration fire seals (BS EN 1366-3)",
        "structural_frame": "Heavy-duty hot-dip galvanised Unistrut / steel channel frame",
        "img_src": "/assets/img/modular/utility-vertical-riser.svg",
        "specs": [
            ("Standard", "BS 8558 / BS EN 12056 / BS EN 12845 (Fire sprinklers)"),
            ("Thermal Insulation", "Foil-faced phenolic foam insulation pre-lagged on all pipework"),
            ("Trace Heating", "Self-regulating trace heating pre-wired on cold water mains"),
            ("Flange Connections", "Roll-grooved Victaulic or press-fit Mapress connections for rapid jointing"),
            ("Testing Protocol", "Hydrostatically pressure tested to 1.5x working pressure in factory"),
            ("Floor Slab Penetration", "Drops into pre-formed slab opening with acoustic decoupling brackets"),
            ("Safety Handover", "Supplied with temporary floor mesh covers to prevent site fall hazards"),
            ("High-Rise Optimized", "Engineered for rapid storey-by-storey erection in high-rise towers")
        ]
    },

    # Section 5: Volumetric Residential Modules & Steel Space Frames
    {
        "id": "CB-MD-0009",
        "name": "Cabivella SpaceModule Volumetric Residential Living Room & Kitchen Unit",
        "slug": "cabivella-spacemodule-volumetric-residential-module",
        "section": "Volumetric Residential Modules & Steel Space Frames",
        "desc": "Fully finished volumetric steel space-frame residential building module. Shipped with fully fitted kitchen, integrated appliances, hardwood flooring, electrical wiring, and high-performance Passivhaus envelope insulation for rapid offsite housing schemes.",
        "dimensions": "Up to 12.0m Length x 4.2m Width x 3.2m Height",
        "structural_core": "Hot-Rolled Structural Steel Space Frame (BS EN 10025 S355)",
        "insulation_envelope": "Closed-Panel Mineral Wool + Aerogel (U-Value < 0.15 W/m²K)",
        "fitout": "100% turnkey interior decor, joinery, and appliances pre-installed",
        "img_src": "/assets/img/modular/module-residential-volumetric.svg",
        "specs": [
            ("Standard", "BOPAS (Buildoffsite Property Assurance Scheme) 60-Year Durability"),
            ("Structural Warranty", "Accepted by all UK mortgage lenders and NHBC / Premier Guarantee"),
            ("Air Permeability", "< 1.0 m³/(h.m²) at 50 Pa (Passivhaus air tightness level)"),
            ("Window Fenestration", "Triple-glazed aluminium-clad timber or uPVC Passivhaus windows"),
            ("Roof System", "Factory-applied green sedum roof or standing seam zinc roof ready"),
            ("Lifting & Placement", "Engineered crane spreader beam connections for 30-min per module drop"),
            ("Inter-Module Connection", "Patented seismic and wind-load shear pin connection blocks"),
            ("Carbon Footprint", "50% lower embodied carbon and 90% less site waste compared to masonry")
        ]
    },
    {
        "id": "CB-MD-0010",
        "name": "Cabivella ModularClass Offsite Pre-Engineered Educational Classroom Unit",
        "slug": "cabivella-modularclass-preengineered-classroom-unit",
        "section": "Volumetric Residential Modules & Steel Space Frames",
        "desc": "DfE (Department for Education) compliant high-ceiling modular classroom unit. Incorporates acoustic ceiling baffles (BB93), natural daylight harvesting, automated CO2 demand-controlled ventilation (BB101), and heavy-duty contract finishes.",
        "dimensions": "12.0 x 8.0 m Clear Internal Span (60m² – 96m² Learning Space)",
        "ventilation": "Demand-Controlled Heat Recovery Ventilation keeping CO2 < 800 ppm",
        "acoustics": "Designed to DfE Building Bulletin BB93 Acoustic Design of Schools",
        "daylight": "High VLT Low-E glazing maximizing natural daylight autonomy",
        "img_src": "/assets/img/modular/module-classroom-educational.svg",
        "specs": [
            ("Standard", "DfE Output Specification / BB93 / BB101 / BS EN 1993"),
            ("Floor Load", "4.0 kN/m² commercial school corridor and classroom load"),
            ("Internal Height", "2.7m to 3.0m finished ceiling height"),
            ("Lighting", "Low-glare UGR<16 DALI daylight-harvesting LED lighting scheme"),
            ("IT Infrastructure", "Pre-wired Cat 6A data network points and interactive screen backing"),
            ("Wall Protection", "High-impact acoustic wall panels resistant to school furniture impacts"),
            ("Accessibility", "DDA / Part M compliant level threshold entrance with wide clear opening"),
            ("Deployment", "Delivered, craned, and operational within 48 hours during school holidays")
        ]
    },

    # Section 4 Continued: Pre-Engineered Modular Buildings & Cabins
    {
        "id": "CB-MD-0011",
        "name": "Cabivella ModularOffice Executive Turnkey Pre-Fabricated Office Suite",
        "slug": "cabivella-modularoffice-turnkey-executive-office-suite",
        "section": "Volumetric Residential Modules & Steel Space Frames",
        "desc": "Offsite pre-manufactured executive commercial sales and administrative suite. Delivered 100% complete with acoustic glass partition walls, integrated Cat 6A data networking, climate control HVAC, and flush architectural facade panels.",
        "dimensions": "12.0m Length x 3.6m Width x 3.0m Internal Height",
        "turnkey": "Supplied complete with acoustic ceiling, LED lighting, and VRF HVAC",
        "energy_rating": "EPC Rating A / BREEAM Excellent Ready",
        "img_src": "/assets/img/modular/module-office-executive.svg",
        "specs": [
            ("Standard", "BS EN 1993 / UK Building Regulations Approved Documents A, B, E, L"),
            ("Insulation Performance", "U-values: Roof 0.15 | Walls 0.18 | Floor 0.16 W/m²K"),
            ("Glazing", "Full-height solar control architectural double glazing (Ug = 1.1)"),
            ("Electrical Spec", "BS 7671 compliant perimeter dado trunking with USB-C ports"),
            ("Fire Compartmentation", "60 minutes fire resistance throughout structural chassis"),
            ("Deployment", "Fully operational within 24 hours of site crane landing")
        ]
    },
    {
        "id": "CB-MD-0012",
        "name": "Cabivella SiteDorm Multi-Occupancy Modular Workforce Accommodation",
        "slug": "cabivella-sitedorm-workforce-accommodation-module",
        "section": "Modular Flat-Pack Site Cabins & Welfare Units",
        "desc": "Heavy-duty modular multi-bed accommodation unit designed for major infrastructure sites, mining, and civil mega-projects. Fitted with individual en-suite shower rooms, climate control, fire sprinkler connections, and robust lockable storage.",
        "capacity": "2-Person or 4-Person Private En-Suite Rooms",
        "structure": "Continuous Welded Heavy-Gauge Corten Steel Space Frame",
        "soundproofing": "Acoustic party wall sound isolation Rw > 52 dB",
        "img_src": "/assets/img/modular/cabin-dormitory-workforce.svg",
        "specs": [
            ("Standard", "HSE Site Accommodation / BS 5588 Part 1 Fire Precautions"),
            ("En-Suite Units", "Pre-fitted shower cubicle, ceramic basin, and water-efficient WC"),
            ("Heating & Cooling", "Inverter heat pump split air conditioning in each room"),
            ("Stackability", "Engineered to stack 3 levels high with exterior steel staircases"),
            ("Water Services", "Centralised manifold inlet for rapid site utility tie-in"),
            ("Vandal Resistance", "Heavy steel security external doors with euro-cylinder mortice locks")
        ]
    },
    {
        "id": "CB-MD-0013",
        "name": "Cabivella CanteenModular 50-Person Commercial Site Canteen Complex",
        "slug": "cabivella-canteenmodular-50-person-canteen-complex",
        "section": "Modular Flat-Pack Site Cabins & Welfare Units",
        "desc": "Interlinked open-plan modular canteen building accommodating up to 50 contractors simultaneously. Features commercial food service counter, stainless wash sinks, boiling water taps, handwash stations, and wipe-clean hygienic wall surfaces.",
        "capacity": "50 Diners per sitting (Double-module linked format)",
        "hygiene": "Food-grade antimicrobial PVC wall claddings and non-slip vinyl",
        "ventilation": "High-capacity commercial extraction hoods conforming to DW172",
        "img_src": "/assets/img/modular/cabin-canteen-complex.svg",
        "specs": [
            ("Standard", "Food Safety Act 1990 / Workplace (Health, Safety and Welfare) Regs"),
            ("Catering Equipment", "Stainless steel preparation tables, commercial microwave shelves, urns"),
            ("Fire Protection", "Automatic kitchen hood fire suppression system installed"),
            ("Floor Finish", "Heavy-duty commercial safety vinyl with coved skirting (R11)"),
            ("Double Doors", "Emergency push-bar panic hardware on external fire exit doors"),
            ("Link Seal", "Patented EPDM watertight weather seal between modular chassis")
        ]
    },
    {
        "id": "CB-MD-0014",
        "name": "Cabivella TinyHome Luxury Off-Grid Micro-Architectural Living Pod",
        "slug": "cabivella-tinyhome-luxury-off-grid-living-pod",
        "section": "Volumetric Residential Modules & Steel Space Frames",
        "desc": "Bespoke architectural micro-home engineered with thermo-wood exterior cladding, standing-seam zinc roof, panoramic slimline sliding doors, and complete off-grid solar and rainwater harvesting capabilities for luxury eco-resorts.",
        "footprint": "8.5m Length x 3.2m Width x 3.4m Height (27m² Usable Luxury)",
        "offgrid": "Equipped with integrated lithium battery storage and bio-composting WC",
        "facade": "Charred Shou Sugi Ban or Natural Thermo-Wood Cladding",
        "img_src": "/assets/img/modular/module-tinyhome-luxury.svg",
        "specs": [
            ("Standard", "BS EN 1647 Residential leisure homes / Caravan Act compliant"),
            ("Thermal Envelope", "Super-insulated 150mm PIR insulation delivering U = 0.14 W/m²K"),
            ("Joinery", "Hand-crafted bespoke birch plywood cabinetry and hidden storage beds"),
            ("Glazing", "Full-height solar control architectural glass reveals"),
            ("Chassis", "Heavy galvanised road-towable or crane-liftable steel subframe"),
            ("Luxury Finish", "Solid brass fixtures, quartz stone worktops, and engineered oak floors")
        ]
    },
    {
        "id": "CB-MD-0015",
        "name": "Cabivella SteelPurlin Galvanised Z & C Purlin Structural System",
        "slug": "cabivella-steelpurlin-galvanised-z-c-purlins",
        "section": "Light Gauge Steel Framing & Pre-Assembled Cassettes",
        "desc": "High-tensile cold-rolled galvanised Z and C purlins engineered for industrial warehouse roof and side-wall cladding support. High strength-to-weight ratio with pre-punched staggered holes for continuous sleeve or overlap jointing.",
        "profiles": "Z140 to Z300 / C140 to C300 (Depth 140mm – 300mm)",
        "steel_grade": "High-Yield S390GD / S450GD Structural Steel",
        "galvanising": "Hot-dip zinc coating Z275 (BS EN 10346)",
        "img_src": "/assets/img/modular/steel-purlin-industrial.svg",
        "specs": [
            ("Standard", "BS EN 1993-1-3 Eurocode 3 Cold-formed thin gauge members"),
            ("Span Capacity", "Optimized for continuous spans up to 9.0 metres between portal frames"),
            ("Pre-Punching", "18mm x 22mm elongated slots for rapid assembly with high-shear bolts"),
            ("Structural Overlap", "Sleeved or lapped joint configurations maximizing bending resistance"),
            ("Weight Savings", "40% lighter than hot-rolled structural steel channel purlins"),
            ("Software Integration", "Engineered with dedicated purlin design software conforming to BS 5950")
        ]
    },
    {
        "id": "CB-MD-0016",
        "name": "Cabivella PrefabClinic Rapid-Deploy Offsite Medical Treatment Module",
        "slug": "cabivella-prefabclinic-rapid-deploy-medical-module",
        "section": "Volumetric Residential Modules & Steel Space Frames",
        "desc": "Offsite pre-engineered clinical medical module complying with NHS Health Building Note (HBN) and Health Technical Memorandum (HTM) standards. Fitted with HEPA positive-pressure air filtration, antimicrobial smooth finishes, and medical gas outlets.",
        "dimensions": "9.0 x 3.6 x 3.0 m Fully Sealed Clinical Unit",
        "hbn_compliance": "Designed to NHS HBN 00-01 and HTM 03-01 Specialist Ventilation",
        "filtration": "HEPA H14 filtration ensuring 99.995% particulate air purity",
        "img_src": "/assets/img/modular/module-clinic-medical.svg",
        "specs": [
            ("Standard", "NHS HBN 00-01 / HTM 03-01 / Health Technical Memorandum 06-01"),
            ("Antimicrobial Walls", "Smooth hot-welded Bioclad PVC antimicrobial wall claddings"),
            ("Flooring", "Coved medical-grade vinyl with R10 slip rating and bacteriostatic seal"),
            ("Medical Gases", "Pre-installed certified pipeline for O2, medical air, and vacuum"),
            ("Electrical Reliability", "Dual-circuit isolated power supply (IPS) and UPS backup interface"),
            ("Speed of Deployment", "Fully operational surgical or treatment suite in under 72 hours")
        ]
    },
    {
        "id": "CB-MD-0017",
        "name": "Cabivella SecureGuard Ballistic & Blast-Resistant Modular Gatehouse",
        "slug": "cabivella-secureguard-ballistic-modular-gatehouse",
        "section": "Modular Flat-Pack Site Cabins & Welfare Units",
        "desc": "High-security armoured modular guard house and access control building. Armoured with certified ballistic steel and BR4/BR6 bullet-resistant glazing, providing 360-degree surveillance for corporate headquarters, embassies, and critical infrastructure.",
        "security_level": "EN 1522/1523 FB4 to FB6 Ballistic Protection / Blast Mitigated",
        "glazing": "BS EN 1063 BR4 / BR6 Bullet-Resistant Glass Reveals",
        "surveillance": "360-degree panoramic sightlines with gun-port option",
        "img_src": "/assets/img/modular/cabin-security-armoured.svg",
        "specs": [
            ("Standard", "BS EN 1522 Windows, doors, shutters and blinds - Bullet resistance"),
            ("Wall Construction", "Composite layered ballistic steel armour plates within wall cavity"),
            ("Intercom & Pass-Through", "Speech-transfer intercom system and ballistic document tray"),
            ("Roof Protection", "Overhead blast and projectile mitigation steel reinforcement"),
            ("Climate Comfort", "Integrated split HVAC and air purification positive-pressure system"),
            ("Turnkey Delivery", "Pre-wired, plumbed with private WC, ready for immediate power connection")
        ]
    },
    {
        "id": "CB-MD-0018",
        "name": "Cabivella TimberLGS Hybrid Sustainable Offsite Wall Panel",
        "slug": "cabivella-timberlgs-hybrid-sustainable-wall-panel",
        "section": "Light Gauge Steel Framing & Pre-Assembled Cassettes",
        "desc": "Offsite pre-manufactured closed external wall panel combining an ultra-rigid light gauge steel skeleton with FSC timber stud infills and breathable natural wood-fibre insulation. Delivers Passivhaus thermal efficiency and ultra-low embodied carbon.",
        "thickness": "280 mm Total Wall Thickness (U-Value = 0.12 W/m²K)",
        "hybrid_core": "Structural Cold-Formed Steel Core + Sustainable Timber Infill",
        "insulation": "Natural Wood-Fibre & Aerogel Composite Insulation",
        "img_src": "/assets/img/modular/steel-hybrid-wall-panel.svg",
        "specs": [
            ("Standard", "BS EN 1993 / BS EN 1995 Hybrid structural design guidance"),
            ("Acoustic Rating", "Weighted sound reduction index Rw = 58 dB"),
            ("Airtightness", "Factory-applied vapour control layer achieving < 0.6 ACH@50Pa"),
            ("Service Void", "Pre-formed 50mm internal service void prevents membrane puncture"),
            ("Carbon Sequestration", "Carbon-negative insulation materials balance structural steel footprint"),
            ("Third-Party Warranty", "BBA, BOPAS, and NHBC accepted for 60-year design life")
        ]
    }
]
