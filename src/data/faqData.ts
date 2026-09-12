export interface FAQItem {
  id: string;
  category:
    | 'General & Workshop'
    | 'PPF & Detailing'
    | 'Engine & Diagnostics'
    | 'Transmission & Drivetrain'
    | 'Hybrid & EV Care'
    | 'Brakes & Suspension'
    | 'AC & Electrical'
    | 'Brand Specialists & Parts'
    | 'Pricing & Booking';
  question: string;
  answer: string;
  keyHighlights?: string[];
  details?: string[];
  comprehensiveOverview?: string;
  relatedService?: { title: string; href: string };
  relatedBrand?: { name: string; href: string };
  relatedLocation?: { name: string; href: string };
  tags?: string[];
}

export const faqData: FAQItem[] = [
  // -------------------------------------------------------------
  // 1. GENERAL & WORKSHOP OPERATIONS
  // -------------------------------------------------------------
  {
    id: 'faq-gen-1',
    category: 'General & Workshop',
    question: 'Where is HyperTune Garage located, and what areas of Islamabad and Rawalpindi do you serve?',
    answer: 'Our operational Islamabad Flagship Hub is located at Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad (near PWD, DHA Phases 1–5, and Bahria Town). We serve clients across all Islamabad sectors (F-6 to F-11, E-11, G-11) and Rawalpindi (via our Islamabad Flagship Hub with insured valet pickup), offering dedicated customer lounges with live workshop video feeds.',
    keyHighlights: [
      'Islamabad Flagship Hub — Open & Operating: Block E Police Foundation, Sector O-9, Islamabad (accessible via Islamabad Expressway)',
      'Rawalpindi Hub — Coming Soon: Currently serving Rawalpindi customers through our Islamabad Flagship Hub with insured valet pickup',
      'Operating Hours: Saturday – Thursday: 10:00 AM – 10:00 PM | Friday: CLOSED (Weekly Maintenance)',
    ],
    details: [
      'Our facility features dedicated bays for computerized diagnostics, 3D laser wheel alignment, mechanical overhauls, and pressurized clean rooms for PPF and ceramic detailing.',
      'Clients enjoy high-speed Wi-Fi, private workstation desks, espresso, and real-time CCTV monitors showing their vehicle being serviced.',
    ],
    comprehensiveOverview: 'HyperTune Garage operates its flagship automotive workshop at the Police Foundation automotive district in Sector O-9, Islamabad. Situated directly adjacent to PWD Housing Society, Bahria Town Phases 1–8, and DHA Islamabad, the facility provides rapid access for vehicle owners across the twin cities. The workshop houses computerized diagnostic labs, hydraulic lift bays, and a pressurized dust-free booth dedicated to Paint Protection Film (PPF) application. Our customer lounge offers full transparency with live video monitors streaming each technician’s work.',
    relatedLocation: { name: 'Islamabad Flagship Hub', href: '/locations/islamabad-workshop/' },
    tags: ['location', 'islamabad', 'rawalpindi', 'pwd', 'police foundation', 'hours'],
  },
  {
    id: 'faq-gen-2',
    category: 'General & Workshop',
    question: 'How does your Executive Valet Concierge pick-up and delivery service work?',
    answer: 'We provide fully insured, professional vehicle pick-up and delivery across Islamabad (including Sectors F-6, F-7, F-8, F-10, F-11, DHA, and Bahria Town). A verified driver collects your vehicle, conducts a digital 360° walkaround inspection with fuel and mileage logging on WhatsApp, and delivers it back sanitized upon job completion.',
    keyHighlights: [
      'Digital Intake Video Walkaround: Instant condition, fuel, and odometer logging sent to your smartphone',
      'Transit Insurance Coverage: Complete insurance protection while your vehicle is in transit and on our premises',
      'Convenient Scheduling: Request valet concierge directly during online reservation or via WhatsApp',
    ],
    details: [
      'Our concierge service is ideal for busy executives, embassies, and vehicle owners who require routine servicing, detailing, or repairs without leaving their office or home.',
      'Upon completion of quality assurance checks, your vehicle is washed, detailed, and safely returned to your chosen address.',
    ],
    comprehensiveOverview: 'For clients unable to visit our workshop in person, HyperTune Garage offers an Executive Valet Concierge service throughout Islamabad and surrounding areas. A vetted, professional driver arrives at your home or workplace, completes a photographic and video intake report on our mobile workshop portal, and logs initial vehicle condition before transport. All vehicles are protected under our comprehensive commercial garage policy during transit and maintenance.',
    relatedService: { title: 'Maintenance & Servicing', href: '/services/maintenance-servicing/' },
    tags: ['valet', 'concierge', 'pick-up', 'delivery', 'islamabad', 'dha', 'bahria town'],
  },

  // -------------------------------------------------------------
  // 2. PPF & DETAILING
  // -------------------------------------------------------------
  {
    id: 'faq-ppf-1',
    category: 'PPF & Detailing',
    question: 'What is the difference between 8.5 mil TPU Paint Protection Film (PPF) and 9H Ceramic Coating?',
    answer: 'PPF is an 8.5 mil thick, optically clear Thermoplastic Polyurethane (TPU) physical armor with an elastomeric self-healing topcoat designed to absorb high-velocity stone chips and highway debris. In contrast, 9H Ceramic Coating is a chemical nano-sealant that bonds to clear coat to provide hydrophobic water-beading, chemical resistance, and UV protection against Islamabad’s 45°C summer heat.',
    keyHighlights: [
      'PPF: 8.5 mil physical impact barrier against stone chips, scratches, and door dings on Motorway (M-2) & Islamabad Expressway',
      'Ceramic Coating: 9H hardness liquid glass matrix repelling acid rain, industrial fallout, tree sap, and road grime',
      'Ultimate Combination: Full front-end TPU PPF paired with 9H ceramic coating across remaining bodywork, glass, and wheels',
    ],
    details: [
      'PPF absorbs kinetic impacts that would otherwise puncture factory clear coat down to bare metal.',
      'Ceramic coating provides high-gloss slickness with a 110° water contact angle, reducing wash effort by 70%.',
    ],
    comprehensiveOverview: 'Choosing between Paint Protection Film (PPF) and Ceramic Coating depends on whether you seek physical impact resistance or chemical environmental defense. In Pakistan, high-speed stone chips on the Islamabad Highway and M-2 Motorway cause severe rock pitting on front bumpers and bonnets. Only 8.5 mil TPU film possesses sufficient tensile strength to absorb gravel impacts without puncturing factory clear coat. Meanwhile, 9H ceramic coating provides chemical defense against intense ultraviolet (UV) oxidation and hard water mineral stains. For optimal vehicle preservation, HyperTune Garage recommends wrapping high-impact front panels in TPU PPF while ceramic coating all remaining bodywork.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    tags: ['ppf', 'ceramic coating', 'tpu', 'paint protection', 'detailing'],
  },
  {
    id: 'faq-ppf-2',
    category: 'PPF & Detailing',
    question: 'Will installing or removing Paint Protection Film damage my car’s original factory paint?',
    answer: 'No. Absolute paint safety is guaranteed when installed and removed at HyperTune Garage. We use 100% blade-free digital CAD computer plotting software to pre-cut patterns off the car, and optical-grade pressure-sensitive acrylic adhesives that lift cleanly with infrared heat without pulling factory clear coat.',
    keyHighlights: [
      '100% Blade-Free Installation: Digital Graphtec plotters pre-cut panels before film touches vehicle paintwork',
      'OEM Clear Coat Safe: High-tack optical acrylic adhesive formulated specifically for automotive factory paint',
      'Residue-Free Removal: Clean removal after 5–10 years under controlled infrared heat lamps',
    ],
    details: [
      'Pre-installation includes a 5-step decontamination: pH-neutral foam wash, fallout remover, clay bar, machine polish, and IPA panel wipe.',
      'Edges are tucked inside panel seams wherever possible for an invisible, seamless finish.',
    ],
    comprehensiveOverview: 'At HyperTune Garage, we ensure complete factory paint integrity through blade-free computerized installation. Budget workshops frequently use manual utility razor blades directly over car panels, creating hidden score lines in the clear coat that rust over time. We eliminate this by utilizing computerized plotters programmed with exact manufacturer panel schematics. Furthermore, our optical-grade pressure-sensitive adhesives are engineered to flex with body panels through thermal expansion, allowing clean removal after years of sun exposure without leaving adhesive residue or stripping clear coat.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    tags: ['blade free', 'cad plotting', 'paint safe', 'removal guarantee'],
  },
  {
    id: 'faq-ppf-3',
    category: 'PPF & Detailing',
    question: 'Does your TPU film resist yellowing and self-heal swirl marks in Pakistan’s climate?',
    answer: 'Yes. We install non-yellowing Aliphatic TPU films manufactured with embedded UV block stabilizers and shape-memory elastomeric topcoats. Surface swirl marks and light wash scratches automatically disappear under natural sunlight or warm water (above 60°C), while resisting clouding under 45°C summer UV indexes.',
    keyHighlights: [
      'Elastomeric Self-Healing: Swirl marks and light wash scratches melt away in sunlight or warm water',
      'Aliphatic TPU Chemistry: Resists UV photo-oxidation and yellowing unlike budget aromatic PVC films',
      '10-Year Warranty: Backed by written warranty coverage against bubbling, cracking, or delamination',
    ],
    details: [
      'After application, every vehicle undergoes a 2-hour low-temperature infrared lamp cure to eliminate moisture and lock down edges.',
      'Hydrophobic topcoats repel road grime, making routine maintenance washing fast and swirl-free.',
    ],
    comprehensiveOverview: 'The extreme summer temperatures and intense UV radiation in Islamabad and Rawalpindi quickly degrade low-grade PVC or aromatic polyurethane wraps, turning them yellow and brittle within 6 to 12 months. HyperTune Garage exclusively installs premium Aliphatic TPU films engineered with optical UV inhibitors. The elastomeric topcoat features shape memory: when scratched by dusty cloths or roadside shrubs, warmth from ambient sunlight or warm water triggers the polymer chains to realign, erasing blemishes in minutes.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    tags: ['self-healing', 'anti-yellowing', 'uv protection', 'warranty'],
  },

  // -------------------------------------------------------------
  // 3. ENGINE & DIAGNOSTICS
  // -------------------------------------------------------------
  {
    id: 'faq-eng-1',
    category: 'Engine & Diagnostics',
    question: 'How do you diagnose Check Engine Lights and electronic sensor faults without guessing?',
    answer: 'We deploy a 4-stage diagnostic protocol using dealer-level diagnostic software (BMW ISTA, Mercedes Xentry, Toyota Techstream, Honda HDS, ODIS). We read active and shadow DTC codes, graph live sensor operating parameters under load, conduct EVAP smoke tests for vacuum leaks, and verify circuit integrity before replacing any component.',
    keyHighlights: [
      'Dealer Diagnostic Software: Deep ECU scans including historic freeze-frame telemetry and shadow fault memory',
      'Live Sensor Data Graphing: Real-time analysis of short/long term fuel trims, boost pressure, and O2 sensor response',
      'No Parts Guesswork: We pinpoint the exact root cause and send video proof to your WhatsApp before repairs begin',
    ],
    details: [
      'Smoke testing isolates intake manifold leaks, vacuum hose splits, and PCV valve failures causing rough idling.',
      'Oscilloscope waveform analysis verifies crankshaft/camshaft sensor synchronization and ignition coil firing curves.',
    ],
    comprehensiveOverview: 'Modern electronic engine management systems cannot be diagnosed with generic handheld code scanners. When a Check Engine or EPC warning illuminates, HyperTune Garage deploys dedicated manufacturer diagnostic suites. We retrieve freeze-frame telemetry that records exact vehicle speed, engine RPM, coolant temperature, and fuel rail pressure at the millisecond the error triggered. By coupling live sensor telemetry graphing with physical diagnostic tools like calibrated smoke machines and digital oscilloscopes, our engineers identify faulty components with surgical precision, avoiding costly part swaps.',
    relatedService: { title: 'Inspection & Diagnostics', href: '/services/inspection-diagnostics/' },
    relatedBrand: { name: 'BMW Repair Specialist Islamabad', href: '/brands/bmw-repair-islamabad/' },
    tags: ['check engine light', 'diagnostics', 'ecu scan', 'smoke test', 'bmw ista', 'techstream'],
  },
  {
    id: 'faq-eng-2',
    category: 'Engine & Diagnostics',
    question: 'What is included in a master engine rebuild at HyperTune Garage, and why is a clean room essential?',
    answer: 'A master overhaul includes complete engine extraction, ultrasonic chemical cleaning, 0.001mm micrometer measurement of cylinder taper and crankshaft runout, cylinder boring/sleeving, and replacement of all pistons, rings, bearings, timing chains, oil pumps, and seals with genuine OEM parts inside our pressurized, dust-free engine lab.',
    keyHighlights: [
      'Pressurized Dust-Free Rebuild Lab: Clean-air filtration prevents airborne sand and grit from contaminating bearing journals',
      '100% Genuine OEM Internals: Brand-new factory pistons, rings, rod bearings, main bearings, timing chain kit, and gaskets',
      '12-Month / 15,000 km Warranty: Written warranty coverage with included 1,000 km break-in service and compression verification',
    ],
    details: [
      'Cylinder heads undergo pressure crack testing, multi-angle valve seat cutting, and precision deck resurfacing.',
      'All fasteners are torqued with calibrated digital angle wrenches in accordance with factory torque-to-yield sequences.',
    ],
    comprehensiveOverview: 'Engine rebuilding in Pakistan often fails prematurely due to dirty street workshop assembly where airborne road dust contaminates fresh bearing shells. At HyperTune Garage, all engine overhauls are conducted inside a climate-controlled, pressurized rebuild lab. Every engine block and cylinder head undergoes ultrasonic hot-tank cleaning before precision micrometer measurement down to 0.001mm. We install only authentic OEM internal components and follow factory torque-angle bolt tightening sequences. Every rebuild includes specialized high-zinc break-in oil, a complimentary 1,000 km inspection, and our 12-Month / 15,000 km mechanical warranty.',
    relatedService: { title: 'Engine Services & Overhaul', href: '/services/engine-services/' },
    tags: ['engine rebuild', 'overhaul', 'clean room', 'compression test', 'warranty'],
  },

  // -------------------------------------------------------------
  // 4. TRANSMISSION & DRIVETRAIN
  // -------------------------------------------------------------
  {
    id: 'faq-trans-1',
    category: 'Transmission & Drivetrain',
    question: 'Why do CVT and Dual-Clutch (DCT) gearboxes jerk or overheat in Pakistani traffic, and how do you repair them?',
    answer: 'Continuous stop-and-go driving in 40°C+ summer heat causes severe thermal fluid degradation in CVT and DCT gearboxes. This leads to solenoid sticking, clutch slip, and valve body pressure loss. We diagnose fluid degradation index values via diagnostic scanners, perform temperature-controlled fluid flushes with genuine OEM fluids, and rebuild valve bodies or mechatronics units when needed.',
    keyHighlights: [
      'Diagnostic Fluid Indexing: Reading electronic transmission fluid deterioration index and clutch pressure adaptations',
      'Genuine OEM Fluid Sourcing: Exact viscosity fluids for Toyota Super CVT-FE, Honda HCF-2/DW-1, Nissan NS-3, and German DCTF',
      'Mechatronic & Valve Body Restoration: In-house solenoid testing, pressure transducer renewal, and clutch adaptation relearns',
    ],
    details: [
      'We perform computerized clutch calibration and pressure adaptation relearns for Honda Vezel i-DCD and VW/Audi DSG gearboxes.',
      'Routine fluid and filter replacement every 30,000 to 40,000 km prevents costly premature transmission failure.',
    ],
    comprehensiveOverview: 'Modern automatic, CVT, and dual-clutch transmissions are highly sensitive to fluid temperature and contamination. In Islamabad and Rawalpindi stop-and-go congestion, transmission oil temperatures can exceed 110°C, breaking down hydraulic shear stability. This triggers symptoms such as low-speed shuddering, delayed gear engagement, and transmission overheating error messages. HyperTune Garage checks live transmission line pressures and fluid deterioration parameters before recommending targeted solutions—from precision multi-step fluid flushes using factory-specified fluids to mechatronics solenoid refurbishment and computer adaptation resets.',
    relatedService: { title: 'Transmission & Drivetrain', href: '/services/transmission-drivetrain/' },
    relatedBrand: { name: 'Honda Specialist Workshop Islamabad', href: '/brands/honda-service-islamabad/' },
    tags: ['cvt', 'dct', 'gearbox jerk', 'transmission fluid', 'mechatronics', 'vezel'],
  },

  // -------------------------------------------------------------
  // 5. HYBRID & EV CARE
  // -------------------------------------------------------------
  {
    id: 'faq-hyb-1',
    category: 'Hybrid & EV Care',
    question: 'Can individual hybrid battery cells be reconditioned, or must I replace the entire battery pack?',
    answer: 'In over 85% of cases, you do not need an expensive new battery. We test individual cell modules under computerized CADEX load testers, replace only weak modules with capacity-matched OEM cells, ultrasonic-clean corroded copper busbars, and balance pack voltage within 0.02V, saving vehicle owners 50% to 70% compared to dealership quotes.',
    keyHighlights: [
      'Computerized Module Testing: Automated charge/discharge load cycling measuring milliamp-hour (mAh) capacity and internal resistance',
      'Ultrasonic Busbar Cleaning: Restoring 100% electrical conductivity on oxidized copper connectors to eliminate heat bottlenecks',
      'Cooling Blower Decontamination: Deep chemical cleaning of intake fan ducts to prevent thermal throttling and cell degradation',
    ],
    details: [
      'We service Toyota (Prius, Aqua, Camry, Corolla Cross), Honda (Vezel, Fit, Grace), and Lexus (RX450h, CT200h) hybrid platforms.',
      'Restored voltage uniformity brings back electric EV driving duration and restores fuel economy back to 20–25 km/L.',
    ],
    comprehensiveOverview: 'When the "Check Hybrid System" warning light or diagnostic error codes P0A80/P0A7F trigger on Toyota or Honda hybrids, authorized 3S dealerships routinely advise replacing the entire high-voltage assembly at exorbitant costs. In reality, typically only 2 or 3 individual modules out of 28+ have degraded. HyperTune Garage’s specialized Hybrid Lab extracts the pack, measures the exact internal resistance of every cell, replaces degraded cells with matched OEM modules, deoxidizes corroded busbars, and cleans clogged cooling blowers, restoring complete factory battery efficiency with written warranty coverage.',
    relatedService: { title: 'Inspection & Diagnostics', href: '/services/inspection-diagnostics/' },
    relatedBrand: { name: 'Toyota Specialist Workshop Islamabad', href: '/brands/toyota-repair-islamabad/' },
    tags: ['hybrid battery', 'cell balancing', 'prius', 'aqua', 'vezel', 'p0a80', 'ev care'],
  },

  // -------------------------------------------------------------
  // 6. BRAKES & SUSPENSION
  // -------------------------------------------------------------
  {
    id: 'faq-brk-1',
    category: 'Brakes & Suspension',
    question: 'What causes steering vibration or pulling, and how does 3D laser wheel alignment fix uneven tire wear?',
    answer: 'Steering vibrations at highway speeds (80–120 km/h) are typically caused by dynamic wheel unbalance, warped brake rotors, or worn control arm bushings. Vehicle pulling is caused by camber or caster misalignment from rough road impacts. We use high-precision 3D digital camera alignment racks and on-car brake disc skimming to restore laser-straight stability.',
    keyHighlights: [
      '3D Digital Laser Alignment: High-resolution camera sensors measuring camber, caster, and toe angles to 0.01° factory tolerances',
      'On-Car Brake Disc Skimming: Precision rotor resurfacing eliminating brake pedal pulsation without rotor removal',
      'Suspension Bushing Replacement: Hydraulic press replacement of degraded rubber bushings without replacing entire control arms',
    ],
    details: [
      'Proper 4-wheel alignment extends tire tread life by up to 25,000 km and reduces rolling resistance for better fuel economy.',
      'We test electronic power steering (EPS) steering angle sensor calibration to ensure stability control systems operate accurately.',
    ],
    comprehensiveOverview: 'The uneven road conditions, speed breakers, and potholes across Islamabad and Rawalpindi place high stress on steering racks, tie rods, ball joints, and control arm bushings. Misalignment causes rapid tire edge scrubbing and compromises highway braking stability. HyperTune Garage utilizes computer-guided 3D optical wheel alignment systems that calibrate suspension geometry against official manufacturer specifications. For brake pulsation, our on-car lathe skims warped brake discs to exact runout tolerances, ensuring smooth, vibration-free stopping power.',
    relatedService: { title: 'Brake, Suspension & Steering', href: '/services/brake-suspension-steering/' },
    tags: ['wheel alignment', 'suspension', 'brake skimming', 'steering vibration', 'tire wear'],
  },

  // -------------------------------------------------------------
  // 7. AC & ELECTRICAL
  // -------------------------------------------------------------
  {
    id: 'faq-ac-1',
    category: 'AC & Electrical',
    question: 'Why does car air conditioning fail during peak summer heat in Islamabad, and how do you test for refrigerant leaks?',
    answer: 'Car AC performance degrades when condenser fins get clogged with dust, cooling fan clutches weaken, or microscopic refrigerant leaks develop in evaporator coils. We use computerized vacuum decay testing, electronic halogen sniffing, and ultraviolet (UV) fluorescent dye under darkroom inspection to pinpoint micro-leaks, followed by high-purity R134a/R1234yf charging.',
    keyHighlights: [
      'Electronic Halogen & UV Dye Leak Detection: Pinpointing micro-leaks in evaporator cores, condenser joints, and compressor seals',
      'Dual-Stage Vacuum Recovery: Deep vacuum evacuation removing moisture before precision digital refrigerant scale charging',
      'Compressor Performance Analysis: Verifying high/low pressure differentials and electronic control valve (ECV) duty cycles',
    ],
    details: [
      'We perform chemical antibacterial cabin evaporator coil flushing to eliminate unpleasant damp odors and mildew.',
      'We service both conventional belt-driven compressors and high-voltage electric AC compressors in hybrid and EV models.',
    ],
    comprehensiveOverview: 'During Islamabad’s intense 42°C–46°C summer months, vehicle air conditioning systems operate under extreme thermal head pressures. A slight drop in refrigerant charge or a dust-clogged condenser causes the compressor to overheat and disengage. Rather than simply adding gas—which fails again if leaks persist—HyperTune Garage performs electronic vacuum decay tests and UV dye inspections to locate and seal leaks. We then charge the exact factory weight of refrigerant and PAG compressor oil using computerized digital charging stations.',
    relatedService: { title: 'AC Repair & Electrical Specialist', href: '/services/car-ac-repair/' },
    tags: ['car ac', 'ac repair', 'refrigerant leak', 'uv dye', 'compressor', 'cooling'],
  },

  // -------------------------------------------------------------
  // 8. BRAND SPECIALISTS & GENUINE PARTS
  // -------------------------------------------------------------
  {
    id: 'faq-brd-1',
    category: 'Brand Specialists & Parts',
    question: 'Why choose HyperTune Garage over authorized 3S dealerships for German and Japanese vehicles?',
    answer: 'HyperTune Garage provides dealer-grade diagnostic software and master technician expertise at 40% to 50% lower cost than authorized dealerships, combined with component-level repairs instead of replacing entire expensive assemblies, 100% itemized estimates, and real-time WhatsApp video proof.',
    keyHighlights: [
      '40% to 50% Cost Savings: Genuine OEM parts sourced transparently with 0% inflated dealership overhead markups',
      'Component-Level Diagnostics: We repair mechatronics, sensors, and wiring harnesses rather than forcing assembly replacements',
      'Dealer-Level Software: Full diagnostics using BMW ISTA, Mercedes Xentry, Audi ODIS, Porsche PIWIS, and Toyota Techstream',
    ],
    details: [
      'Dealerships carry massive administrative overheads passed directly to clients in inflated labor rates.',
      'Every repair at HyperTune Garage receives an upfront digital quote with barcode-verifiable OEM part numbers.',
    ],
    comprehensiveOverview: 'Vehicle owners often feel compelled to visit authorized 3S dealerships for luxury and imported cars out of fear that local mechanics lack proper diagnostic equipment. HyperTune Garage bridges this gap as an independent master specialist. We operate with official manufacturer diagnostic systems for German, European, Japanese, Korean, and Chinese vehicles. Unlike dealerships that routinely quote whole assembly replacements for minor sensor or solenoid faults, we diagnose and rebuild sub-components with factory accuracy, saving clients substantial expense while maintaining uncompromised quality.',
    relatedBrand: { name: 'Mercedes-Benz Specialist Workshop Islamabad', href: '/brands/mercedes-service-islamabad/' },
    tags: ['dealership alternative', 'cost savings', 'oem parts', 'bmw', 'mercedes', 'audi'],
  },
  {
    id: 'faq-brd-2',
    category: 'Brand Specialists & Parts',
    question: 'Do you service emerging Chinese vehicle brands like Haval, Changan, Chery, and MG?',
    answer: 'Yes. We provide specialized maintenance, computerized scanning, and OEM parts sourcing for Haval (H6, Jolion), Changan (Alsvin, Oshan X7, Karvaan), Chery (Tiggo 4/8 Pro), and MG (HS, ZS, 4 EV), addressing common turbo lag, DCT transmission heat, and electronic sensor issues.',
    keyHighlights: [
      'Dedicated Diagnostic Scanning: Full DTC interrogation for Chinese domestic market (CDM) and localized CKD control modules',
      'DCT & Turbo Maintenance: Specific fluid changes and intercooler cleaning for 1.5T and 2.0T turbocharged crossover engines',
      'Authentic OEM Spares: Fast procurement of authentic brake pads, suspension bushings, and body electronics',
    ],
    details: [
      'We resolve common DCT clutch calibration errors and electronic parking brake (EPB) initialization faults.',
      'Scheduled periodic maintenance packages maintain engine health and protect manufacturer warranty compliance.',
    ],
    comprehensiveOverview: 'The rapid rise of Chinese SUVs and sedans in Pakistan has created a major service gap, with dealership service centers struggling with long wait times and parts shortages. HyperTune Garage houses diagnostic scanners equipped with updated software protocols for Great Wall Motors / Haval, Changan Auto, Chery, and MG platforms. Our technicians are trained in the specific maintenance demands of direct-injection turbo engines and dual-clutch transmissions, ensuring reliable daily performance across the twin cities.',
    relatedBrand: { name: 'Haval & Great Wall Motors Specialist Islamabad', href: '/brands/haval-service-islamabad/' },
    tags: ['changan', 'haval', 'mg', 'chery', 'chinese cars', 'turbo', 'dct'],
  },

  // -------------------------------------------------------------
  // 9. PRICING & BOOKING
  // -------------------------------------------------------------
  {
    id: 'faq-prc-1',
    category: 'Pricing & Booking',
    question: 'What is included in a 200-Point Pre-Purchase Vehicle Inspection (PPI) before buying a used car in Pakistan?',
    answer: 'Our 200-point Pre-Purchase Inspection includes a full computerized ECU scan for cleared fault codes, paint depth meter readings across all panels to detect hidden accidental filler and resprays, undercarriage structural chassis inspection, engine compression check, road test, and a comprehensive digital report sent to your WhatsApp.',
    keyHighlights: [
      'Paint Depth Gauge Measurement: Digital ultrasonic micron readings revealing hidden accidental body filler and non-factory resprays',
      'ECU Odometer & Freeze-Frame Audit: Detecting reversed odometers and historic shadow fault codes in transmission and engine modules',
      'Undercarriage & Rust Analysis: Examining subframe alignment, suspension joints, steering play, and oil/coolant seal leaks',
    ],
    details: [
      'Our inspection takes 60–90 minutes and gives prospective car buyers complete peace of mind before transferring payment.',
      'We inspect Japanese auction sheet verification and local CKD vehicle maintenance history.',
    ],
    comprehensiveOverview: 'Purchasing a used car in Pakistan carries substantial risk of altered odometers, concealed structural accident damage, and failing hybrid batteries. HyperTune Garage provides an independent 200-Point Pre-Purchase Inspection (PPI) that removes the guesswork. Our master technicians use digital paint depth gauges to verify factory clear coat thickness on every panel, connect manufacturer scanners to uncover cleared error codes and genuine mileage stamps, inspect the chassis for alignment pulls, and compression-test the cylinders. You receive a detailed digital health certificate highlighting immediate and upcoming repair costs.',
    relatedService: { title: 'Inspection & Diagnostics', href: '/services/inspection-diagnostics/' },
    tags: ['pre-purchase inspection', 'ppi', 'used car', 'paint depth', 'odometer check'],
  },
  {
    id: 'faq-prc-2',
    category: 'Pricing & Booking',
    question: 'How do I book an appointment, and what payment methods do you accept?',
    answer: 'Booking is simple: reserve online via our interactive website booking portal, call our workshop helpline at 0333-0177717, or message us on WhatsApp. Booking in advance reserves a dedicated lift bay and assigns a master technician to your car. We accept cash, major credit/debit cards (Visa, Mastercard), PayPak, online bank transfers, and corporate account invoicing.',
    keyHighlights: [
      'Online & WhatsApp Reservation: Instant booking confirmation with preferred time slot and technician assignment',
      'Multiple Payment Methods: Cash, debit/credit cards, direct 1Link bank transfer, and corporate invoicing',
      'Transparent Digital Estimates: Detailed itemized invoice with zero hidden charges or unapproved work',
    ],
    details: [
      'Same-day emergency drive-ins are accepted based on bay availability, though prior booking is strongly advised.',
      'All payments receive official computer-generated receipts and warranty registration certificates.',
    ],
    comprehensiveOverview: 'Scheduling vehicle service at HyperTune Garage is quick and transparent. Customers can utilize our online appointment scheduler to pick their desired date, time slot, and required service category, or send a quick WhatsApp message to our service reception. Before any physical work begins, an itemized digital estimate is issued for client approval. We accept all major payment avenues including digital banking and cards, providing itemized invoices and official warranty certificates.',
    relatedService: { title: 'Maintenance & Servicing', href: '/services/maintenance-servicing/' },
    tags: ['booking', 'appointment', 'payment', 'whatsapp', 'pricing', 'transparent'],
  },
];
