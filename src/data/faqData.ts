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
  relatedArticle?: { title: string; href: string };
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
    answer: 'Our operational Islamabad Flagship Hub is located at Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation, Islamabad (near PWD, DHA Phases 1–5, and Bahria Town). We serve clients across Islamabad and Rawalpindi (currently served through our Islamabad Flagship Hub, with transport assistance subject to confirmation upon booking).',
    keyHighlights: [
      'Islamabad Flagship Hub — Open & Operating: O-9 Block E Police Foundation, Islamabad (accessible via Islamabad Expressway)',
      'Rawalpindi Hub — Coming Soon: Currently serving Rawalpindi customers through our Islamabad Flagship Hub',
      'Operating Hours: Saturday – Thursday: 10:00 AM – 10:00 PM | Friday: CLOSED (Weekly Holiday)',
    ],
    details: [
      'Our facility houses dedicated bays for computerized diagnostics, computerized wheel alignment, mechanical repairs, engine machining, and an indoor studio bay for PPF and detailing.',
      'Clients have access to a dedicated customer waiting area while vehicle work is completed.',
    ],
    comprehensiveOverview: 'HyperTune Garage operates its flagship automotive workshop at the Police Foundation automotive district in Sector O-9, Islamabad. Situated near PWD Housing Society, Bahria Town, and DHA Islamabad, the facility provides convenient access for vehicle owners across the twin cities. The workshop includes multi-brand computerized diagnostic equipment, computerized wheel alignment hardware, engine machining tools, and an indoor studio bay with a computerized CAD plotter for Paint Protection Film (PPF) application.',
    relatedLocation: { name: 'Islamabad Flagship Hub', href: '/locations/islamabad-workshop/' },
    tags: ['location', 'islamabad', 'rawalpindi', 'pwd', 'police foundation', 'hours'],
  },
  {
    id: 'faq-gen-2',
    category: 'General & Workshop',
    question: 'How does your vehicle pick-up and transport assistance work?',
    answer: 'HyperTune Garage offers workshop vehicle transport assistance across Islamabad and Rawalpindi, subject to confirmation of applicable arrangements upon booking. You can tick the transport request option in our online booking form or message us on WhatsApp so our service desk can confirm availability and logistics for your appointment.',
    keyHighlights: [
      'Booking Integration: Request vehicle transport assistance directly in our online booking form or via WhatsApp',
      'Pre-Confirmed Arrangements: Availability, timing, and applicable charges are confirmed with you prior to dispatch',
      'Twin Cities Coverage: Assists vehicle owners in Islamabad and Rawalpindi visiting our Sector O-9 Islamabad workshop',
    ],
    details: [
      'Our service coordinator confirms transport scheduling, handoff details, and inspection check-in requirements before pickup.',
      'Once workshop service and post-work checks finish, return arrangements are coordinated directly with you.',
    ],
    comprehensiveOverview: 'For vehicle owners who cannot visit Sector O-9 Islamabad in person during working hours, HyperTune Garage offers workshop transport assistance across Islamabad and Rawalpindi. Because pickup scheduling depends on vehicle condition, route distance, and bay timing, transport arrangements are confirmed with the customer after booking submission or WhatsApp coordination before any dispatch takes place.',
    relatedService: { title: 'Maintenance & Servicing', href: '/services/maintenance-servicing/' },
    tags: ['transport assistance', 'pick-up', 'delivery', 'islamabad', 'rawalpindi', 'booking'],
  },

  // -------------------------------------------------------------
  // 2. PPF & DETAILING
  // -------------------------------------------------------------
  {
    id: 'faq-ppf-1',
    category: 'PPF & Detailing',
    question: 'What is the difference between TPU Paint Protection Film (PPF) and Ceramic Coating?',
    answer: 'Thermoplastic Polyurethane (TPU) Paint Protection Film provides a thick, optically clear physical barrier against highway stone chips, gravel impacts, and light surface abrasions. Ceramic Coating is a liquid polymer sealant that bonds chemically to clear coat to enhance gloss, water-beading, and resistance to UV fade and environmental grime.',
    keyHighlights: [
      'PPF Physical Barrier: Helps absorb stone chips, minor scrapes, and road debris on highways and city roads',
      'Ceramic Coating: Hydrophobic surface layer that repels water, road film, and intense UV exposure',
      'Combined Protection: Protect high-impact front panels with TPU PPF and apply ceramic coating over remaining paintwork',
    ],
    details: [
      'TPU film absorbs physical road-debris impacts that a liquid coating alone cannot stop.',
      'Ceramic coating creates a slick, hydrophobic finish that simplifies routine washing and maintenance.',
    ],
    comprehensiveOverview: 'Choosing between Paint Protection Film (PPF) and Ceramic Coating depends on whether your priority is physical rock-chip defense or chemical surface protection. Frequent driving on the Islamabad Expressway and M-2 Motorway exposes front bumpers, hoods, and side mirrors to loose gravel and flying debris where TPU PPF delivers essential impact protection. Meanwhile, ceramic coating shields paintwork from intense sunlight, bird droppings, and hard-water spotting while boosting gloss. Many twin-city drivers pair front-end or full-body TPU PPF with ceramic detailing.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    relatedArticle: { title: 'PPF vs Ceramic Coating Comparison', href: '/blog/ceramic-coating-vs-ppf-pakistan-guide/' },
    tags: ['ppf', 'ceramic coating', 'tpu', 'paint protection', 'detailing'],
  },
  {
    id: 'faq-ppf-2',
    category: 'PPF & Detailing',
    question: 'Will installing or removing Paint Protection Film damage my car’s original factory paint?',
    answer: 'When installed on sound, cured paintwork using pre-cut plotter patterns and proper techniques, TPU PPF protects factory paint rather than harming it. At HyperTune Garage, we use a computerized CAD plotter to pre-cut vehicle panel templates off the car, minimizing razor contact near paintwork.',
    keyHighlights: [
      'CAD Plotter Pre-Cutting: Computer-cut panel templates reduce manual trimming directly on body panels',
      'Surface Preparation: Thorough wash, decontamination, and panel prep performed before film application',
      'Controlled Removal Technique: Quality TPU films lift cleanly using controlled warming when properly maintained',
    ],
    details: [
      'Before application, painted surfaces are cleaned and inspected for repainted panels or fragile clear coat.',
      'Panel edges are neatly wrapped where geometry permits for a clean, low-visibility finish.',
    ],
    comprehensiveOverview: 'Proper PPF installation relies on clean surface preparation and precision pattern cutting. Freehand razor cutting directly over body panels risks scoring the underlying clear coat. By using our computerized CAD plotter to pre-cut patterns matched to each vehicle model before application, HyperTune Garage minimizes blade use on the car itself. Healthy factory paint handles quality TPU adhesive safely when installed and removed with proper heat and surface care.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    tags: ['cad plotting', 'paint safe', 'ppf installation', 'surface prep'],
  },
  {
    id: 'faq-ppf-3',
    category: 'PPF & Detailing',
    question: 'Does Aliphatic TPU film resist yellowing and self-heal light swirl marks in Pakistan’s climate?',
    answer: 'Quality Aliphatic TPU films are formulated with UV stabilizers to resist yellowing under harsh summer sunlight, and feature elastomeric topcoats that allow light wash swirls to recover with heat from sunlight or warm water. Film coverage and any product warranty depend on the specific film grade and supplier terms selected.',
    keyHighlights: [
      'Self-Healing Topcoat: Light wash swirls and fine surface marks level out when warmed by sunlight or warm water',
      'Aliphatic TPU Material: Engineered to resist UV discoloration compared with budget PVC films',
      'Indoor Bay Application: Installed inside our dedicated PPF studio bay for clean alignment and edge finishing',
    ],
    details: [
      'Routine pH-neutral washing preserves the hydrophobic topcoat and optical clarity of TPU film.',
      'We inspect edges and film settling after installation and advise on safe washing practices.',
    ],
    comprehensiveOverview: 'High summer temperatures and strong UV exposure in Islamabad and Rawalpindi quickly discolor cheap PVC wraps and lower-grade films. Aliphatic TPU films use UV-resistant polymer chemistry paired with a heat-responsive topcoat designed to stay clear and recover from light surface swirling. Our team installs PPF inside an indoor studio bay and advises customers on care intervals and exact manufacturer terms for their chosen film package.',
    relatedService: { title: 'Paint Protection Film (PPF)', href: '/services/paint-protection-film-ppf/' },
    tags: ['self-healing', 'anti-yellowing', 'uv protection', 'tpu ppf'],
  },

  // -------------------------------------------------------------
  // 3. ENGINE & DIAGNOSTICS
  // -------------------------------------------------------------
  {
    id: 'faq-eng-1',
    category: 'Engine & Diagnostics',
    question: 'How do you diagnose Check Engine Lights and electronic sensor faults without guessing?',
    answer: 'We use multi-brand computerized diagnostic scanners to read active and stored fault codes, inspect live sensor data streams, check intake/vacuum leaks, and test circuits before recommending part replacements.',
    keyHighlights: [
      'Multi-Brand Diagnostic Scanners: Deep module scans covering engine, transmission, ABS, and body electronics',
      'Live Sensor Data Inspection: Real-time monitoring of fuel trims, boost pressure, temperatures, and O2 sensor response',
      'Evidence-First Estimates: Diagnostic findings and visual evidence shared before repairs begin',
    ],
    details: [
      'Physical checks isolate intake leaks, faulty vacuum lines, ignition misfires, and wiring faults.',
      'Testing components before replacement helps prevent unnecessary part swaps.',
    ],
    comprehensiveOverview: 'Modern engine management systems cannot be accurately diagnosed with basic generic code readers alone. When a Check Engine or warning lamp appears, HyperTune Garage connects multi-brand computerized diagnostic scanners to inspect stored fault memory, freeze-frame conditions, and live sensor telemetry. Combining electronic scan data with physical inspection allows our technicians to pinpoint the root fault and share clear findings with the owner before replacement work starts.',
    relatedService: { title: 'Inspection & Diagnostics', href: '/services/inspection-diagnostics/' },
    relatedBrand: { name: 'BMW Repair Specialist Islamabad', href: '/brands/bmw-repair-islamabad/' },
    tags: ['check engine light', 'diagnostics', 'ecu scan', 'fault codes', 'live telemetry'],
  },
  {
    id: 'faq-eng-2',
    category: 'Engine & Diagnostics',
    question: 'What is included in an engine overhaul at HyperTune Garage, and what warranty applies?',
    answer: 'An engine overhaul includes disassembly, thorough component cleaning, workshop machining where required, precision measurement of wear surfaces, and replacement of worn pistons, rings, bearings, timing components, gaskets, and seals. Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions.',
    keyHighlights: [
      'In-House Machining & Assembly: Block, head, and valvetrain wear inspected and machined using workshop machining equipment',
      'Comprehensive Internal Renewal: Replacement of worn pistons, rings, main/rod bearings, timing kits, and gaskets',
      '12-Month Written Parts Warranty: Eligible replacement parts carry up to 12 months written coverage subject to supplier terms',
    ],
    details: [
      'Cylinder heads undergo inspection, valve sealing checks, and resurfacing as needed.',
      'Compression, fluid circulation, and operating temperatures are verified after reassembly.',
    ],
    comprehensiveOverview: 'Engine overhauls require clean assembly practices, accurate wear measurement, and proper cylinder head and block preparation. HyperTune Garage disassembles affected engines, inspects cylinder bores, crankshaft journals, and cylinder heads with dedicated machining equipment, and installs approved replacement internals, seals, and timing hardware. Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions.',
    relatedService: { title: 'Engine Services & Overhaul', href: '/services/engine-services/' },
    tags: ['engine rebuild', 'overhaul', 'machining', 'compression test', 'parts warranty'],
  },

  // -------------------------------------------------------------
  // 4. TRANSMISSION & DRIVETRAIN
  // -------------------------------------------------------------
  {
    id: 'faq-trans-1',
    category: 'Transmission & Drivetrain',
    question: 'Why do CVT and Dual-Clutch (DCT) gearboxes jerk or overheat in Pakistani traffic, and how do you repair them?',
    answer: 'Heavy stop-and-go traffic in high summer temperatures accelerates transmission fluid breakdown in CVT and DCT gearboxes, leading to solenoid sticking, clutch shudder, and hydraulic pressure drop. We scan transmission control modules, perform specified-grade fluid and filter services, repair valve bodies or mechatronics, and run clutch adaptation resets.',
    keyHighlights: [
      'TCU Diagnostic Scanning: Reading transmission fault codes, pressure data, and clutch adaptation values',
      'Specified-Grade Fluids: Using transmission fluids matched to Toyota, Honda, Nissan, German, and Chinese gearbox specs',
      '12-Month Written Parts Warranty: Eligible replacement parts may carry up to 12 months written coverage subject to supplier terms',
    ],
    details: [
      'We perform computerized clutch calibration and adaptation relearns for Honda Vezel i-DCD and VW/Audi DSG gearboxes.',
      'Routine fluid and filter servicing helps protect valve bodies and clutches from premature wear.',
    ],
    comprehensiveOverview: 'Automatic, CVT, and dual-clutch transmissions depend on clean hydraulic fluid at stable operating temperatures. Stop-and-go congestion in Islamabad and Rawalpindi accelerates fluid shear and heat buildup, causing low-speed jerking, delayed engagement, or overheating warnings. HyperTune Garage inspects transmission fault codes and operating parameters before performing targeted fluid servicing, solenoid or mechatronic repairs, and adaptation resets. Eligible replacement parts carry our 12-Month Written Parts Warranty subject to applicable supplier terms and conditions.',
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
    question: 'Can degraded hybrid battery modules be serviced without replacing the entire battery pack?',
    answer: 'Often, yes. After running hybrid diagnostic scans and testing individual battery modules, weak or failed modules can frequently be replaced with capacity-matched modules while cleaning oxidized copper busbars, balancing pack voltages, and clearing clogged battery cooling fans.',
    keyHighlights: [
      'Module-Level Testing: Evaluating individual hybrid battery blocks for voltage drop and capacity imbalance',
      'Busbar & Terminal Cleaning: Removing corrosion from copper connectors to improve electrical contact and reduce heat',
      'Cooling Duct Servicing: Cleaning hybrid battery blower fans and air channels to support thermal stability',
    ],
    details: [
      'We service popular hybrid platforms including Toyota (Prius, Aqua, Camry, Corolla Cross), Honda (Vezel, Fit, Grace), and Lexus hybrids.',
      'Pack condition dictates whether targeted module replacement or full pack replacement is the more reliable option.',
    ],
    comprehensiveOverview: 'When a "Check Hybrid System" alert or codes such as P0A80 appear on Toyota or Honda hybrids, only a subset of battery modules may have weakened rather than every module in the pack. HyperTune Garage scans hybrid control modules, inspects individual module health and busbar condition, cleans blocked cooling fans, and replaces degraded modules when the overall pack remains viable—giving owners a clear, transparent assessment before proceeding.',
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
    question: 'What causes steering vibration or pulling, and how does computerized wheel alignment fix uneven tire wear?',
    answer: 'Highway steering vibrations often trace back to wheel imbalance, warped brake rotors, or worn control arm bushings, while pulling is commonly caused by camber, caster, or toe misalignment from pothole impacts. We combine computerized wheel alignment with suspension joint inspection and brake rotor service to restore stable handling.',
    keyHighlights: [
      'Computerized Wheel Alignment: Measuring and adjusting camber, caster, and toe angles to vehicle specifications',
      'Brake Rotor & Pad Service: Inspecting brake disc runout, pads, calipers, and brake fluid condition',
      '12-Month Written Parts Warranty: Eligible replacement suspension and brake parts carry up to 12 months written coverage subject to terms',
    ],
    details: [
      'Proper four-wheel alignment helps prevent uneven tire shoulder wear and improves straight-line highway stability.',
      'We check steering angle sensors, tie rods, ball joints, and shocks during alignment setup.',
    ],
    comprehensiveOverview: 'Rough road patches, speed breakers, and potholes around Islamabad and Rawalpindi take a toll on control arm bushings, tie-rod ends, ball joints, and wheel geometry. Misalignment accelerates uneven tire wear and causes pulling or steering shake. HyperTune Garage uses computerized wheel alignment equipment alongside thorough undercarriage suspension and brake inspection to restore safe, predictable handling. Eligible replacement parts carry our 12-Month Written Parts Warranty subject to supplier terms and component eligibility.',
    relatedService: { title: 'Brake, Suspension & Steering', href: '/services/brake-suspension-steering/' },
    tags: ['wheel alignment', 'suspension', 'brakes', 'steering vibration', 'tire wear'],
  },

  // -------------------------------------------------------------
  // 7. AC & ELECTRICAL
  // -------------------------------------------------------------
  {
    id: 'faq-ac-1',
    category: 'AC & Electrical',
    question: 'Why does car air conditioning lose cooling during peak Islamabad summer heat, and how do you inspect leaks?',
    answer: 'Summer AC performance drops when condensers clog with dust, cooling fans weaken, compressors lose efficiency, or refrigerant leaks from evaporator cores, pipes, or O-rings. We pressure-test the system for leaks, service condensers and compressors, evacuate moisture, and recharge refrigerant and compressor oil accurately.',
    keyHighlights: [
      'System Leak & Pressure Testing: Checking evaporator cores, condensers, hoses, and compressor seals before recharging',
      'Evacuation & Refrigerant Charging: Removing trapped air and moisture before refilling measured refrigerant and oil',
      '12-Month Written Parts Warranty: Eligible replacement AC parts carry up to 12 months written coverage subject to terms',
    ],
    details: [
      'We inspect cabin air filters, evaporator cleanliness, blower motors, and radiator cooling fans together.',
      'We service both belt-driven compressors and high-voltage electric AC compressors on hybrid vehicles.',
    ],
    comprehensiveOverview: 'During intense summer heat in Islamabad and Rawalpindi, car air conditioning systems run near maximum thermal load. Simply topping up refrigerant without finding the leak leads to repeat cooling failure and compressor damage. HyperTune Garage pressure-checks the AC circuit, inspects condenser airflow and fan operation, repairs faulty seals or components, and recharges the system cleanly. Eligible replacement parts carry our 12-Month Written Parts Warranty subject to applicable terms and conditions.',
    relatedService: { title: 'AC Repair & Electrical Specialist', href: '/services/car-ac-repair/' },
    tags: ['car ac', 'ac repair', 'refrigerant leak', 'compressor', 'cooling'],
  },

  // -------------------------------------------------------------
  // 8. BRAND SPECIALISTS & PARTS
  // -------------------------------------------------------------
  {
    id: 'faq-brd-1',
    category: 'Brand Specialists & Parts',
    question: 'Why choose HyperTune Garage as an independent specialist workshop for German and Japanese vehicles?',
    answer: 'As an independent multi-brand workshop, HyperTune Garage combines multi-brand computerized diagnostic scanners with transparent, itemized estimates and component-level troubleshooting where repair is practical.',
    keyHighlights: [
      'Itemized Upfront Estimates: Clear breakdown of parts and labor shared before repair work proceeds',
      'Component-Level Troubleshooting: Repairing individual failed sensors, seals, or sub-assemblies when safe and practical',
      'Multi-Brand Diagnostic Platforms: Dedicated diagnostic support across European, Japanese, Korean, and Chinese brands',
    ],
    details: [
      'Customers receive clear explanations, inspection photos—and short video updates when helpful—on WhatsApp, plus transparent parts options.',
      'We are an independent specialist workshop and are not affiliated with authorized manufacturer dealerships.',
    ],
    comprehensiveOverview: 'Owners of imported and luxury vehicles often struggle to balance diagnostic accuracy with transparent repair pricing. HyperTune Garage bridges that gap as an independent specialist workshop equipped with multi-brand diagnostic platforms and experienced technicians. Rather than defaulting to costly whole-assembly replacements when a targeted repair is viable, we verify root faults thoroughly and share itemized estimates before starting work.',
    relatedBrand: { name: 'Mercedes-Benz Specialist Workshop Islamabad', href: '/brands/mercedes-service-islamabad/' },
    tags: ['independent specialist', 'transparent pricing', 'parts sourcing', 'bmw', 'mercedes', 'audi'],
  },
  {
    id: 'faq-brd-2',
    category: 'Brand Specialists & Parts',
    question: 'Do you service emerging Chinese vehicle brands like Haval, Changan, Chery, and MG?',
    answer: 'Yes. We provide scheduled maintenance, computerized scanning, and replacement parts sourcing for Haval (H6, Jolion), Changan (Alsvin, Oshan X7, Karvaan), Chery (Tiggo 4/8 Pro), and MG (HS, ZS, 4 EV), handling common turbo maintenance, DCT servicing, and electronic fault diagnostics.',
    keyHighlights: [
      'Multi-Brand Diagnostic Coverage: Scanning engine, DCT transmission, ABS, and body modules on modern Chinese platforms',
      'DCT & Turbo Servicing: Fluid services, cooling checks, and intercooler/intake maintenance for turbocharged crossovers',
      'Dedicated Parts Sourcing: Sourcing quality replacement brake pads, filters, suspension components, and sensors',
    ],
    details: [
      'We handle routine servicing, electronic parking brake (EPB) service modes, and DCT fluid maintenance.',
      'Diagnostic checks help isolate warning lights, misfires, and sensor faults accurately.',
    ],
    comprehensiveOverview: 'With Chinese SUVs and sedans growing rapidly across Islamabad and Rawalpindi, owners need reliable independent servicing alongside routine maintenance support. HyperTune Garage uses updated multi-brand diagnostic tools covering Great Wall Motors / Haval, Changan, Chery, and MG platforms. Our technicians service turbocharged direct-injection engines, dual-clutch gearboxes, brakes, suspension, and cabin electronics for dependable daily driving.',
    relatedBrand: { name: 'Haval & Great Wall Motors Specialist Islamabad', href: '/brands/haval-service-islamabad/' },
    tags: ['changan', 'haval', 'mg', 'chery', 'chinese cars', 'turbo', 'dct'],
  },

  // -------------------------------------------------------------
  // 9. PRICING & BOOKING
  // -------------------------------------------------------------
  {
    id: 'faq-prc-1',
    category: 'Pricing & Booking',
    question: 'What is included in a Pre-Purchase Vehicle Inspection (PPI) before buying a used car in Pakistan?',
    answer: 'Our Pre-Purchase Inspection includes a computerized ECU scan for active and stored fault codes, paint-depth readings across body panels to detect hidden body filler or repaints, undercarriage and suspension inspection, engine and fluid checks, a road test, and a clear summary sent to your WhatsApp.',
    keyHighlights: [
      'Paint Depth Gauge Check: Panel-by-panel thickness measurements to help spot prior bodywork filler or repaints',
      'Computerized ECU Audit: Scanning engine, transmission, ABS, and hybrid systems for stored codes and module data',
      'Undercarriage & Leak Inspection: Checking frame rails, suspension bushings, steering play, and fluid leaks',
    ],
    details: [
      'A structured pre-purchase inspection helps buyers identify existing mechanical or body issues before finalizing a deal.',
      'We also review visible maintenance indicators and wear items across brakes, tires, and fluids.',
    ],
    comprehensiveOverview: 'Buying a used car in Pakistan carries real risk of concealed accident repairs, cleared dashboard warnings, or worn hybrid and transmission components. HyperTune Garage conducts an independent Pre-Purchase Inspection (PPI) combining panel paint-thickness measurements, multi-brand computerized scanning, undercarriage checks, and road testing so buyers receive a practical report of immediate and upcoming maintenance needs before completing payment.',
    relatedService: { title: 'Inspection & Diagnostics', href: '/services/inspection-diagnostics/' },
    tags: ['pre-purchase inspection', 'ppi', 'used car', 'paint depth', 'diagnostics'],
  },
  {
    id: 'faq-prc-2',
    category: 'Pricing & Booking',
    question: 'How do I book an appointment, and how do estimates and payments work?',
    answer: 'You can book online through our website booking form, call +92 333 0177717, or message us on WhatsApp. Booking ahead helps reserve your preferred workshop slot. Before any repair proceeds, we share a clear itemized estimate for your approval, and we accept cash and bank/card payments.',
    keyHighlights: [
      'Online & WhatsApp Reservation: Pick your preferred service, date, and time slot in advance',
      'Convenient Payment Options: Cash, major cards, and bank transfers accepted at workshop reception',
      'Itemized Estimates First: Transparent written estimate provided for customer approval before repair work starts',
    ],
    details: [
      'Same-day walk-ins are accommodated depending on workshop bay availability, though advance booking is recommended.',
      'Eligible replacement parts for engine, brake/suspension/steering, transmission, and car AC repairs carry a written parts warranty of up to 12 months subject to supplier terms.',
    ],
    comprehensiveOverview: 'Scheduling service at HyperTune Garage is straightforward. Use our online booking portal or WhatsApp reception to choose your service category, preferred date, and optional transport assistance request. After initial inspection, our team provides an itemized estimate for approval before starting repairs and issues clear invoicing upon completion. For engine, brake/suspension/steering, transmission, and car AC repairs, eligible replacement parts may carry a written warranty of up to 12 months subject to supplier terms.',
    relatedService: { title: 'Maintenance & Servicing', href: '/services/maintenance-servicing/' },
    tags: ['booking', 'appointment', 'payment', 'whatsapp', 'pricing', 'transparent'],
  },
];
