export interface FAQItem {
  id: string;
  category: 'PPF & Paint Protection' | 'Popular Car Brands' | 'Engine & Overhaul' | 'Hybrid & EV' | 'General & Booking';
  question: string;
  answer: string;
  keyHighlights?: string[];
  details?: string[];
  comprehensiveOverview?: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'PPF & Paint Protection',
    question: 'What is Paint Protection Film (PPF) and how does it protect my car in Pakistan?',
    answer: 'Paint Protection Film (PPF) is an advanced self-healing optical barrier engineered to preserve your vehicle aesthetic and resale value against Pakistan harsh environmental conditions:',
    keyHighlights: [
      'PPF: 8.5 mil Ultra-Clear Thermoplastic Polyurethane (TPU) physical armor against stone chips & deep scratches',
      'Ceramic Topcoat: 9H Hardness Hydrophobic Nano-Ceramic Sealant that protects microscopic paint pores against acid rain, tree sap, and UV rays',
      'Complete Protection: We recommend full front-end PPF combined with Ceramic Coating across the vehicle for total peace of mind',
    ],
    details: [
      'PPF (Paint Protection Film): An 8.5 mil optical-grade TPU film engineered with an elastomeric self-healing topcoat. It acts as an impact-absorbing shield against highway gravel, road salt, key marks, and flying debris on Islamabad Highway and Motorway (M2).',
      'Ceramic Shielding: A 9H liquid glass ceramic matrix that permanently bonds to your clear coat. It creates an extreme hydrophobic surface (110° water contact angle) that prevents water spots, industrial fallout, bird droppings, and UV-induced oxidation in 45°C summer heat.',
      'Durability & Care: PPF comes backed by a 10-Year Anti-Yellowing & Delamination Warranty with annual maintenance top-ups at our Islamabad and Rawalpindi studios.',
    ],
    comprehensiveOverview: `When choosing paint preservation for your vehicle at HyperTune Garage, understanding the benefits of Paint Protection Film (PPF) and 9H ceramic nano-coating is essential for maximizing long-term protection and vehicle resale value in Pakistan. Paint Protection Film (PPF) is an 8.5 mil thick, optically transparent Thermoplastic Polyurethane (TPU) membrane physically applied over your car's exterior body panels. Engineered with an advanced elastomeric self-healing top layer, PPF operates as a heavy-duty physical shield against high-velocity highway gravel, stone chips, road debris, parking lot door dings, and malicious key scratches. On major thoroughfares like the Islamabad Highway, Kashmir Highway, and the M-2 Motorway, flying stone chips are the primary cause of permanent paint chipping—PPF absorbs the kinetic energy of these impacts, preventing the stone from reaching your factory clear coat. Conversely, Ceramic Nano-Coating is a liquid formula containing silicon dioxide (SiO2) and titanium dioxide (TiO2) that chemically bonds with the microscopic pores of your automotive clear coat to create a permanent 9H hardness glass layer. While ceramic coating does not prevent deep physical stone chips, it offers superior chemical defense against environmental contaminants prevalent in Islamabad and Rawalpindi, such as intense ultraviolet (UV) solar radiation, acidic bird droppings, tree sap, industrial fallout, and hard water minerals. The extreme hydrophobic surface produces a 110-degree water contact angle, causing rainwater, mud, and road grime to slide off effortlessly during routine maintenance washes. At HyperTune Garage, our certified master applicators routinely install the ultimate protection package: wrapping high-impact front-end zones (front bumper, bonnet, fenders, side mirrors, and headlights) in 8.5 mil Aliphatic TPU PPF, while applying 9H ceramic coating across all remaining painted surfaces, wheels, glass, and exterior trim. This dual-layer strategy ensures 360-degree defense against physical chips and atmospheric weathering for up to 10 years.`,
  },
  {
    id: 'faq-2',
    category: 'PPF & Paint Protection',
    question: 'Will installing Paint Protection Film (PPF) damage my vehicle original factory paint during application or removal?',
    answer: 'No, absolute paint safety is guaranteed when done at HyperTune Garage. We follow strict zero-contact blade procedures and use museum-grade installation techniques:',
    keyHighlights: [
      '100% Blade-Free Installation: CAD computerized vinyl plotters pre-cut panels according to exact manufacturer blueprints',
      'Paint-Safe Adhesives: Optical acrylic pressure-sensitive adhesive (PSA) formulated specifically for automotive OEM clear coats',
      'Safe Removal Guarantee: Can be safely peeled off after 5-10 years without pulling clear coat or leaving sticky residue',
    ],
    details: [
      'Computer Plotting Technology: Unlike budget installers who use razor blades directly on your car panels, HyperTune Garage utilizes Graphtec 7000-Series Plotters and official manufacturer CAD software. Every pattern for headlights, bonnet, bumpers, and side mirrors is pre-cut before reaching your vehicle.',
      'Surface Preparation Protocol: Prior to PPF application, your vehicle undergoes a 5-step decontamination process: pH-neutral foam wash, iron-decontaminant spray, clay bar treatment, single-stage paint correction polish, and isopropyl alcohol (IPA) panel wipe-down in our dust-free clean booth.',
      'Tucked Edges & Stealth Fit: Where possible, our certified installers wrap edges inside panel seams (door edges, bonnet lip, trunk lid) so the film is virtually invisible with zero exposed seams.',
    ],
    comprehensiveOverview: `At HyperTune Garage, we guarantee that the application, lifetime wear, and eventual removal of our Paint Protection Film (PPF) will never compromise your vehicle's original factory paintwork. The primary concern among vehicle owners is whether razor blades used during installation will score the underlying clear coat. We eliminate this risk entirely by employing 100% blade-free digital CAD computer plotting technology. Utilizing industrial Graphtec 7000-Series plotters paired with official manufacturer design blueprints, every pattern—including front bumpers, intricate intake grilles, side mirror caps, and door handles—is precision pre-cut prior to being brought anywhere near your vehicle. In addition, the adhesive technology used in our Aliphatic TPU PPF consists of ultra-clear, pressure-sensitive acrylic adhesives (PSA) specifically formulated for automotive OEM clear coats. This low-tack initial formula allows our technicians to position panels with surgical accuracy using slip solutions before squeegeeing out moisture, forming a cohesive bond that flexes with the metal bodywork through temperature fluctuations from 0°C winter mornings to 45°C summer heatwaves in Islamabad. Before any film touches the vehicle, your car undergoes a rigorous 5-stage paint decontamination protocol in our pressurized, dust-free installation studio. This includes a pH-balanced snow foam wash, chemical iron-decontaminant fallout removal, synthetic clay bar smoothing, single-stage machine polish to eliminate existing swirl marks, and a 99% isopropyl alcohol panel wipe-down. When the film reaches the end of its 10-year service life or if you decide to sell the vehicle, our technicians heat the film using controlled infrared lamps, allowing the TPU membrane and adhesive to lift off cleanly in large sheets without pulling factory paint, leaving zero adhesive residue behind, and revealing pristine, factory-fresh paint beneath.`,
  },
  {
    id: 'faq-3',
    category: 'PPF & Paint Protection',
    question: 'Does your PPF self-heal minor scratches and resist yellowing under Pakistan sun and heat?',
    answer: 'Yes, our premium TPU Paint Protection Film is engineered specifically to withstand Pakistan extreme climatic conditions:',
    keyHighlights: [
      'Elastomeric Self-Healing: Swirl marks and light surface scratches automatically melt away under direct sunlight or hot water (above 60°C)',
      'UV-Stabilized Aliphatic TPU: Resistant to harsh UV radiation, preventing yellowing, clouding, or embrittlement in 45°C+ summer heat',
      'Self-Cleaning Hydrophobic Topcoat: Repels dust, mud, and rain spots, keeping your car looking freshly detailed after every wash',
    ],
    details: [
      'Self-Healing Science: The top layer of our film consists of a thermo-plastic polymer with shape memory. When scratched by wash mitts, bushes, or fingernails around door cups, warmth from sunlight or hot tap water causes the polymers to re-align, erasing scratches within minutes.',
      'Anti-Yellowing Formula: Lower-grade PVC or aromatic TPU films turn yellow within 6 to 12 months due to intense UV exposure. HyperTune Garage exclusively installs imported Aliphatic TPU films with UV block technology tested against Islamabad UV index levels.',
      'Infrared Curing: After installation, every vehicle undergoes a 2-hour low-temperature infrared lamp cure to lock down edges and eliminate moisture pockets.',
    ],
    comprehensiveOverview: `Yes, the Aliphatic TPU Paint Protection Film installed at HyperTune Garage features advanced self-healing elastomeric topcoat technology and optical UV-stabilization designed specifically for the extreme weather conditions experienced in Islamabad, Rawalpindi, and across Pakistan. Conventional car paint and low-grade vinyl wraps suffer from wash swirls, micro-scratches, and severe UV degradation when exposed to dust storms, harsh wash sponges, and intense summer sunshine. Our premium 8.5 mil TPU film utilizes a heat-sensitive elastomeric polymer topcoat with shape-memory properties. When light scratches, swirl marks, or micro-abrasions occur—such as those caused by dusty cleaning cloths or roadside bushes—the polymer chain flexes without breaking. Upon exposure to natural heat from direct sunlight (or poured hot water above 60°C), the thermo-plastic layer relaxes and flows back into its smooth original orientation, completely erasing fine scratches within minutes. Furthermore, anti-yellowing performance is where low-quality films fail rapidly in Asian climates. Cheaper PVC or aromatic polyurethane films degrade when exposed to ultraviolet spectrum radiation, turning yellow, brittle, and cloudy within 6 to 12 months. HyperTune Garage exclusively imports non-yellowing Aliphatic TPU films manufactured with embedded UV inhibitors and anti-oxidant stabilizers. This specialized chemical structure resists UV photo-oxidation, preserving 99% optical clarity and high-gloss transparency even after years of parking under the harsh Islamabad sun. After installation in our temperature-controlled clean room, every protected panel undergoes a 2-hour low-temperature infrared lamp curing session to bond panel edges securely and eliminate residual moisture pockets. Backed by our 10-Year Anti-Yellowing Warranty, your vehicle retains a permanent showroom gloss with minimal maintenance effort.`,
  },
  {
    id: 'faq-4',
    category: 'Popular Car Brands',
    question: 'Why choose HyperTune Garage for Toyota, Honda, Suzuki, Hyundai & Kia repairs over local 3S dealerships?',
    answer: 'HyperTune Garage provides vehicle owners in Pakistan with dealer-level technical perfection at 40% to 50% lower prices, combined with complete repair transparency:',
    keyHighlights: [
      'Dealer Diagnostic Scanning: Factory diagnostic software for Toyota, Honda, Suzuki, Hyundai, Kia, Changan, and Haval platforms',
      '40% to 50% Cost Savings: Genuine OEM parts sourced with transparent itemized estimates and 0% artificial dealership markups',
      'WhatsApp Live Video Proof: Receive HD videos & photos of worn components and diagnostic scans prior to job approval',
    ],
    details: [
      'Diagnostic Precision: 3S Dealerships often replace entire expensive assemblies. We perform component-level diagnostics, ECU sensor testing, calibration, and wiring repairs using factory scanners.',
      'Master Technicians: Our senior engineers possess over 15 years of dedicated experience servicing Pakistan’s most popular vehicles including Toyota Yaris/Corolla/Fortuner, Honda Civic/City/Vezel, Suzuki Cultus/Swift/Alto, Hyundai Tucson/Sonata, and Kia Sportage.',
      'Itemized Transparent Estimates: You receive a digital breakdown on your phone specifying OEM part numbers, brand manufacturers, exact labor charges, and estimated completion times. No mystery line items or surprise surcharges.',
    ],
    comprehensiveOverview: `Choosing HyperTune Garage over authorized 3S dealerships provides vehicle owners in Islamabad and Rawalpindi with dealer-grade engineering expertise, authentic original spare parts, and complete pricing transparency at 40% to 50% lower total costs. Authorized dealerships carry massive operational overheads, passing exorbitant labor rates and heavy markups on spare parts down to vehicle owners. Furthermore, dealership personnel frequently insist on replacing expensive, complete component assemblies when a simple sensor, solenoid, bushing, or fluid service would fully restore function. HyperTune Garage bridges this gap by operating with factory-level diagnostic scanner suites for Toyota (Techstream), Honda (HDS), Suzuki (SDT-II), Hyundai & Kia (GDS), Changan, and Haval. This allows our certified diagnostic engineers to perform ECU diagnostics, sensor calibration, transmission adaptation, and guided troubleshooting with pinpoint factory accuracy. In terms of parts supply, we source genuine original equipment manufacturer (OEM) components directly with barcode verification. Above all, HyperTune Garage prioritizes client trust through absolute visual transparency. Before any work begins, we conduct a comprehensive digital health check and send a detailed itemized estimate directly to your WhatsApp, accompanied by high-definition videos showing worn components, play in suspension bushings, or live diagnostic data graphs. You maintain total control over your repair budget with direct WhatsApp communication with our workshop technical team throughout the repair process.`,
  },
  {
    id: 'faq-5',
    category: 'Popular Car Brands',
    question: 'How do you diagnose check engine lights, CVT transmission jerks, or suspension noises on popular Pakistani cars?',
    answer: 'We deploy a rigorous 4-step diagnostic methodology that pinpoints root causes without guessing or unnecessarily replacing good parts:',
    keyHighlights: [
      'Step 1 - Full OBD-II & System Scan: Reading factory fault codes, freeze-frame data, and sensor parameters',
      'Step 2 - Live Sensor Data Graphing: Analyzing short/long term fuel trims, boost pressures, CVT fluid deterioration index, and wheel speeds',
      'Step 3 - Physical & Smoke Inspection: Smoke testing intake vacuum leaks, testing ignition coils, and inspecting suspension bushings',
      'Step 4 - Digital Fault Report: Detailed report with HD videos sent to your smartphone before any repair work commences',
    ],
    details: [
      'Intake & EVAP Leak Detection: We use calibrated smoke machines to detect minute vacuum or intake leaks in Toyota, Honda, Suzuki, and Hyundai engines that cause rough idling and high fuel consumption.',
      'Suspension & Steering Diagnostics: We test control arm bushings, tie rod ends, stabilizer links, and shock absorbers to eliminate thumping or knocking noises over rough Pakistani road surfaces.',
      'CVT & Automatic Transmission Adaptation: Gearbox hesitation or jerking in CVT, DCT, or automatic transmissions are diagnosed via live sensor data and fluid degradation checks before recommending fluid service or clutch actuator relearns.',
    ],
    comprehensiveOverview: `Diagnosing modern vehicles in Pakistan requires far more than plugging in a generic code reader; it demands deep system comprehension, live data graphing, and multi-stage physical testing to isolate complex root causes. When a check engine warning, drive hesitation message, transmission malfunction, or ABS fault code illuminates on your dashboard, HyperTune Garage executes a structured 4-phase diagnostic protocol. First, we connect dedicated dealer scanners to query the entire CAN-bus network, extracting active fault codes, shadow fault memory, freeze-frame operating parameters (engine RPM, coolant temperature, fuel pressure at time of failure), and historic mileage stamps. Second, our engineers perform dynamic live sensor data graphing while operating the vehicle under specific load conditions. For engines across Toyota, Honda, Suzuki, Hyundai, and Kia vehicles, we evaluate short-term and long-term fuel trims, mass air flow rates, and fuel rail pressures to differentiate between vacuum leaks, failing fuel pumps, or ignition misfires. If intake leaks are suspected, we deploy a digital EVAP smoke machine that pressurizes the intake tract with dense mineral smoke, pinpointing hairline cracks in intake hoses or PCV valves without disassembling the engine. For automatic, CVT, and dual-clutch transmission issues, we evaluate fluid quality, pressure adaptation limits, and oil temperature logs to determine whether an issue requires a fluid service, solenoid valve replacement, or mechanical repair. Finally, for suspension noise, we perform physical play checks and 3D laser alignment checks. Every client receives a comprehensive digital report featuring sensor graphs, inspection images, and explanatory video clips, ensuring complete clarity before any repairs commence.`,
  },
  {
    id: 'faq-6',
    category: 'Engine & Overhaul',
    question: 'What is included in a complete engine or transmission rebuild at HyperTune Garage?',
    answer: 'Our engine and gearbox overhauls are conducted inside a dedicated, pressurized dust-free rebuild lab according to strict factory assembly tolerances:',
    keyHighlights: [
      'Precision Measuring: Cylinder bore alignment, crankshaft journal play, and valve guide clearances measured to 0.001mm precision',
      '100% Genuine OEM Internal Replacement: New pistons, rings, rod bearings, main bearings, timing chain kit, oil pump, and gasket seals',
      'Pressure Testing & Machining: Cylinder head hot tank cleaning, pressure crack testing, multi-angle valve seat cutting, and deck resurfacing',
      'Post-Overhaul Testing: 1,000 km break-in protocol, oil pressure verification graph, and follow-up compression check',
    ],
    details: [
      'Dust-Free Rebuild Lab: Contamination during assembly is the #1 cause of premature engine overhaul failure. Our clean room uses filtered airflow to prevent airborne dust particles from settling on open cylinder walls and bearing shells.',
      'Torque & Angle Tightening: All main cap bolts, rod bolts, and cylinder head studs are tightened using digital torque-angle wrenches following exact factory torque-to-yield manufacturer specifications.',
      'Break-In Service Included: Every overhauled engine receives specialized break-in mineral oil for initial run-in, followed by a complimentary 1,000 km filter change, valve timing check, and computer diagnostics to certify engine health.',
    ],
    comprehensiveOverview: `An engine or transmission overhaul at HyperTune Garage represents the highest standard of mechanical restoration available in Pakistan, executed inside a climate-controlled, dust-free engine build room according to exact manufacturer factory specifications. When an engine suffers from low compression, severe oil burning, rod knock, or timing chain failure, a haphazard street workshop rebuild will result in quick repeat failure. At HyperTune Garage, every engine overhaul begins with complete engine extraction and complete disassembly down to the bare engine block. The block, cylinder head, and oil galleries undergo ultrasonic hot-tank cleaning to remove carbon deposits and sludge. Next, our machinist engineers utilize precision digital micrometers, bore gauges, and dial indicators to measure cylinder taper, main bearing clearance, and crankshaft journal runout down to 0.001 millimeter accuracy. If cylinder walls exhibit wear, the block is micro-honed or resleeved to factory specifications. We replace 100% of internal wearing components with brand-new original OEM parts: forged pistons, piston rings, main bearings, connecting rod bearings, complete timing chain assemblies with tensioners and guides, high-flow oil pumps, valve stem seals, and full engine gasket kits. Cylinder heads are pressure-tested at high temperature to detect hidden internal coolant passage cracks, followed by multi-angle valve seat cutting and deck resurfacing for a perfect head gasket seal. During reassembly, every fastener—including cylinder head studs, main cap bolts, and rod cap bolts—is torqued using digital angle torque wrenches in strict accordance with factory torque-to-yield sequences. For gearbox overhauls, valve bodies are bench-tested, solenoid packs rebuilt, friction clutch plates renewed, and torque converters remanufactured. Upon completion, the engine receives high-zinc break-in oil and undergoes controlled bench testing before vehicle installation. We include a complimentary 1,000 km break-in inspection, oil change, and compression test, backed by our written 12-Month / 15,000 km Overhaul Warranty.`,
  },
  {
    id: 'faq-7',
    category: 'Hybrid & EV',
    question: 'Do you repair and recondition Toyota, Honda, and Lexus hybrid battery packs, or just replace them?',
    answer: 'We specialize in component-level hybrid battery reconditioning, saving vehicle owners 60% to 70% compared to full battery replacement costs:',
    keyHighlights: [
      'Individual Cell Module Testing: Automated CADEX battery analyzer load testing to isolate weak or failing modules',
      'Cell Re-Balancing: Equalizing voltage profiles across all 28+ modules to within 0.02V for maximum energy efficiency',
      'Busbar De-Oxidation: Ultrasonic cleaning and nickel plating of corroded copper busbars to prevent resistance overheating',
      'Cooling Blower Service: Deep cleaning hybrid battery cooling fans and ducting to prevent heat degradation',
    ],
    details: [
      'Diagnostic Analysis: When a "Check Hybrid System" or error code P0A80 appears (Toyota Prius, Aqua, Camry, Vezel, Lexus RX), dealerships typically quote 400,000+ PKR for a new pack. At HyperTune, we run deep discharge and internal resistance tests on each module.',
      'Module Replacement & Matching: Only degraded modules falling below 65% capacity are replaced with tested, capacity-matched Panasonic or Primearth EV cells, ensuring uniform load distribution across the battery pack.',
      'Restored Fuel Efficiency: Proper battery balancing restores electric EV mode duration, improves acceleration response, and brings fuel average back to factory figures (20-25 km/L).',
    ],
    comprehensiveOverview: `At HyperTune Garage, we specialize in high-voltage hybrid battery reconditioning and module-level repair for Toyota (Prius, Aqua, Camry, Corolla Cross), Honda (Vezel, Fit, Grace, Accord), and Lexus (RX450h, CT200h) hybrid vehicles. When the dreaded "Check Hybrid System" warning light or diagnostic fault codes P0A80 / P0A7F appear on your dashboard, main dealerships routinely inform owners that the entire battery assembly must be replaced at costs exceeding 400,000 to 700,000 PKR. However, in over 85% of cases, the entire pack has not failed; rather, only 2 or 3 individual module cells out of 28 to 34 total modules have lost milliampere-hour (mAh) capacity or developed elevated internal electrical resistance. Our specialized Hybrid Tech Laboratory resolves this at a fraction of the cost through a scientific 5-stage reconditioning process. First, the high-voltage pack is safely isolated and extracted by certified high-voltage technicians. Second, each individual Nickel-Metal Hydride (NiMH) or Lithium-ion module is connected to automated CADEX computerized battery analyzers to conduct deep charge/discharge cycles, measuring exact amp-hour capacity, internal resistance (mΩ), and thermal expansion under heavy load. Third, defective or low-capacity modules are replaced with fresh, laboratory-tested Panasonic or Primearth EV cells that are carefully matched for voltage, internal resistance, and capacity curve to ensure equal load sharing. Fourth, copper busbars connecting the battery modules—which heavily oxidize in humid Pakistani weather causing electrical bottlenecks and heat build-up—undergo ultrasonic acid cleaning and nickel electroplating to restore 100% electrical conductivity. Fifth, the entire battery cooling fan assembly and ventilation ducts are thoroughly dismantled and chemical-cleaned to eliminate dust blockages that cause thermal throttling. Finally, the reassembled pack undergoes high-current active cell balancing until module voltage variations are locked within 0.02 Volts. This restores factory EV electric drive mode, smooth engine auto-stop transitions, and original fuel averages (20-25 km/L) with a 12-Month Warranty.`,
  },
  {
    id: 'faq-8',
    category: 'General & Booking',
    question: 'Where are your workshop locations, and how do I schedule service?',
    answer: 'Our operational Flagship Hub is in Islamabad, and our Rawalpindi Hub is currently under development:',
    keyHighlights: [
      'Islamabad Flagship Hub (Operational): Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan - Full-service studio with PPF clean room, 3D alignment, and diagnostics lab',
      'Rawalpindi Hub (Opening Soon): Currently under development. Stay tuned for the official launch announcement',
      'Operating Hours (Islamabad Hub): Saturday – Thursday: 10:00 AM – 10:00 PM | Friday: CLOSED (Weekly Holiday)',
    ],
    details: [
      'Booking Process: You can reserve your service slot online via our website booking tool, call our direct helpline, or send a WhatsApp message. Booking in advance reserves a dedicated lift bay and assigns a master engineer to your vehicle upon arrival.',
      'Customer Lounge Amenities: Enjoy complimentary espresso, high-speed Wi-Fi, private workstation desks, and live HD video monitors showing your car being serviced in real-time.',
      'Payment Methods: We accept cash, major credit/debit cards (Visa, MasterCard), bank wire transfers, and corporate account invoicing.',
    ],
    comprehensiveOverview: `HyperTune Garage provides premium automotive care and computerized diagnostics for vehicle owners across the twin cities. Our fully operational Islamabad Flagship Studio is situated at the Police Foundation Automotive Hub (offering quick access from Sectors E-11, F-10, F-11, PWD, and DHA). This location features pressurized dust-free clean rooms, climate-controlled infrared paint curing booths, and specialized vehicle detailing bays dedicated to Paint Protection Film (PPF), 9H Ceramic coatings, and executive vehicle maintenance. Our new Rawalpindi Hub is currently under development to expand our footprint. In the meantime, all vehicle services and inquiries are fulfilled at our Islamabad Flagship Hub. Scheduling an appointment is quick: you can utilize the online booking tool, call 0333-0177717, or connect via WhatsApp.`,
  },
  {
    id: 'faq-9',
    category: 'General & Booking',
    question: 'Do you offer executive vehicle pick-up and drop-off service in Islamabad?',
    answer: 'Yes! We provide safe, insured concierge valet pick-up and drop-off services across Islamabad:',
    keyHighlights: [
      'Valet Concierge Pick-Up: Professional, background-checked drivers pick up your vehicle directly from your home or office',
      'Digital Intake Video Walkaround: 360-degree inspection report with fuel and odometer logs sent immediately to your phone',
      'Coverage Sectors: Islamabad (F-6, F-7, F-8, F-10, F-11, G-11, E-11, DHA Phase 1-5, Bahria Town)',
    ],
    details: [
      'Service Booking: Simply request Concierge Pick-Up during your online reservation or via WhatsApp customer support.',
      'Vehicle Intake Inspection: When our valet driver picks up your vehicle, a digital 360-degree walkaround video and inventory report (odometer reading, fuel level, existing minor blemishes) is generated and sent to your WhatsApp.',
      'Drop-off Delivery: Once servicing or PPF application is complete, your vehicle undergoes a final QA inspection, detailing wipe-down, and is delivered back to your doorstep in pristine condition.',
    ],
    comprehensiveOverview: `Yes, HyperTune Garage provides premium executive concierge vehicle pick-up and drop-off services across residential and commercial sectors of Islamabad. For routine maintenance, PPF application, brake servicing, or scheduled repairs, we offer our Executive Concierge Valet Service. A uniformed, background-checked, and fully insured HyperTune professional driver will pick up your vehicle directly from your residence, office, or embassy anywhere in Islamabad (F-6, F-7, F-8, F-10, F-11, G-11, E-11, Diplomatic Enclave, DHA Phases 1–5, Bahria Town). Upon arrival at your location, our driver conducts a comprehensive digital 360-degree intake walkaround, logging odometer readings, fuel levels, and existing exterior conditions into a digital report sent instantly to your phone. Throughout transit and workshop servicing, your vehicle is fully covered under our garage transit insurance policy. Once all servicing, quality assurance testing, and final detailing cleanups are finalized, your vehicle is delivered back to your specified location in spotless, road-ready condition.`,
  },
];
