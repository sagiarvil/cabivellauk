import re

with open('scripts/batch5_collections_data.py', 'r', encoding='utf-8') as f:
    code = f.read()

additional_masonry = '''
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
'''

additional_modular = '''
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
'''

pos_mod = code.find("MODULAR_PRODUCTS = [")
# insert before MODULAR_PRODUCTS = [
code = code[:pos_mod-2] + additional_masonry + code[pos_mod-2:]

pos_end = code.rfind("]")
code = code[:pos_end] + additional_modular + code[pos_end:]

with open('scripts/batch5_collections_data.py', 'w', encoding='utf-8') as f:
    f.write(code)

print("Expanded batch5_collections_data.py successfully!")
