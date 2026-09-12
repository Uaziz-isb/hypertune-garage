import { ServiceItem } from '../types';
import { images, serviceImageVariants } from './images';
import { getRouteMetadata } from './metadataRegistry';

const baseServicesData: ServiceItem[] = [
  {
    id: 'paint-protection-film-ppf',
    slug: 'paint-protection-film-ppf',
    title: 'Paint Protection Film (PPF)',
    shortDesc: 'Pakistan’s premier studio for self-healing TPU Paint Protection Film (PPF) in Islamabad & Rawalpindi. Defend original paintwork from stone chips, UV fading, road debris, and scratches with up to 10-year warranty protection.',
    fullDesc: 'HyperTune Garage is Pakistan’s leading studio for self-healing TPU Paint Protection Film (PPF). Located at our Flagship Studio in Block E Police Foundation, Sector O-9, Islamabad and Rawalpindi, our clean, climate-controlled detailing bay utilizes CAD computer digital plotter pre-cut TPU self-healing films. PPF forms an invisible, ultra-durable hydrophobic armor over your vehicle’s paint, self-healing swirl marks under heat or sunlight while preserving original factory paint and high resale value.',
    subServices: ['Paint Protection Film (PPF)', 'Self-Healing TPU Film', 'Clear Bra Armor', 'Luxury Vehicle Armor'],
    subServicePrices: [
      { name: 'PPF (Paint Protection Film)', price: 'PKR 10,000 to 250,000' }
    ],
    category: 'protection',
    icon: 'ShieldCheck',
    image: images.servicePpf,
    priceRange: 'PKR 10,000 - PKR 250,000',
    estimatedTime: '2 - 4 Days',
    isFeatured: true,
    symptoms: [
      'Stone chips and gravel impact marks on front bumper, hood, and fenders',
      'Swirl marks, spiderweb scratches, and environmental fallout on car body',
      'Desire to preserve 100% original factory paint resale value on new vehicle delivery',
      'Frequent highway driving causing gravel erosion on quarter panels',
    ],
    keyBenefits: [
      'Self-Healing TPU Technology — scratches vanish under sun or heat',
      'Up to 10-Year Manufacturer Warranty against yellowing, cracking & peeling',
      'Hydrophobic surface resistance repelling water, mud, and road grime',
      'Computerized CAD plotter pre-cut patterns — 0% razor blade cuts on car paintwork',
    ],
    whyChooseUs: [
      'Dust-free, climate-controlled installation bay with infrared curing lamps',
      'Certified master detailers & wrap technicians with 1,000+ completed projects',
      'Official imported TPU film brands (Gtechniq, CarPro, Avery, 3M)',
      'Seamless wrapped edge tucking for invisible film borders',
    ],
    processSteps: [
      { title: '1. Multi-Stage Decontamination Wash', desc: 'Iron fallout removal, clay bar decontamination, and high-pressure snow foam wash.' },
      { title: '2. Paint Correction & Surface Audit', desc: 'Dual-action machine polishing to eliminate swirl marks and prep clear coat.' },
      { title: '3. CAD Digital Plotter Pre-Cut Film', desc: 'Computerized pre-cut film matching your specific vehicle model measurements.' },
      { title: '4. Clean Room Squeegee Installation', desc: 'Squeegee installation in dust-free bay with seamless wrapped edge tucking.' },
      { title: '5. IR Thermal Curing & Quality Audit', desc: 'Infrared thermal lamp curing and multi-angle light inspection before delivery.' },
    ],
    faqs: [
      {
        question: 'What is Paint Protection Film (PPF) and how does self-healing work?',
        answer: 'Paint Protection Film (PPF) is an optical-grade thermoplastic polyurethane (TPU) barrier engineered with an elastomeric clear coat. When exposed to sunlight or heat from warm water, the polymer chains re-align to erase swirl marks, wash scratches, and stone abrasions automatically.',
      },
      {
        question: 'Will PPF damage my original factory paint when removed?',
        answer: 'Not at all. We utilize premium imported films formulated with ultra-stable, repositionable acrylic adhesives that peel away cleanly with zero sticky residue or clear coat peeling, preserving 100% of your factory paint thickness and resale value.',
      },
      {
        question: 'What is the difference between TPU and PVC PPF in Pakistan’s climate?',
        answer: 'Cheap PVC (vinyl) films turn yellow, crack, and bake onto the clear coat within 6 to 12 months under Islamabad’s intense UV rays and 45°C summer heat. Our premium aliphatic TPU films resist UV degradation, remain crystal clear, and carry a 5 to 10-year manufacturer warranty against yellowing and bubbling.',
      },
      {
        question: 'How do you install PPF without cutting on the vehicle’s paint?',
        answer: 'We employ precision computerized CAD plotters pre-loaded with digital templates for your exact vehicle make and model. Every panel is pre-cut before reaching the vehicle, eliminating the need for razor blades on your original paintwork, and edges are wrapped seamlessly around panel borders.',
      },
      {
        question: 'How long does a full vehicle PPF wrap take and what warranty is provided?',
        answer: 'A full exterior TPU PPF installation takes 2 to 4 business days. This timeframe covers decontamination foam washing, clay-bar prep, two-stage paint correction, computerized film plotting, clean-room installation, and infrared thermal curing backed by a 5 to 10-year warranty.',
      },
      {
        question: 'Can I wash and wax my car normally after installing PPF?',
        answer: 'Yes. After a 7-day initial curing period, you can wash your car normally. Because our TPU films feature an integrated hydrophobic topcoat, dirt and water slide off easily without requiring traditional paste waxes, though ceramic booster sprays are recommended for maximum gloss.',
      },
    ],
    seo: {
      seoTitle: 'Paint Protection Film (PPF) Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Premier self-healing TPU Paint Protection Film (PPF) studio in Islamabad & Rawalpindi. Protect original vehicle paint with up to 10-year warranty.',
      h1Heading: 'Paint Protection Film (PPF) Studio in Islamabad & Rawalpindi',
      targetKeywords: [
        'PPF Islamabad',
        'PPF Rawalpindi',
        'Paint Protection Film Islamabad',
        'Paint Protection Film Rawalpindi',
        'Car PPF Islamabad',
        'Car PPF Rawalpindi',
        'Best PPF in Islamabad',
        'Best PPF in Rawalpindi',
        'PPF Installation Islamabad',
        'Self-Healing TPU Film',
        'TPU Paint Protection Film',
        'Clear Bra Installation',
        'Luxury Car PPF Islamabad'
      ],
      keywordParagraph: 'Shield original paintwork and preserve maximum resale value with world-class Paint Protection Film (PPF) in Islamabad & Rawalpindi. HyperTune Garage is Pakistan\'s premier studio for self-healing TPU PPF installation, computer plotter pre-cut film, clear bra armor, and luxury vehicle protection with up to 10-year warranty protection.',
    },
  },

  {
    id: 'car-detailing',
    slug: 'car-detailing',
    title: 'Car Detailing',
    shortDesc: 'Professional interior steam extraction & 9H Nano-Ceramic Coating detailing studio in Islamabad & Rawalpindi. Restore showroom shine with multi-stage paint correction, deep leather treatment, and headlight restoration.',
    fullDesc: 'HyperTune Garage provides comprehensive professional Car Detailing services in Islamabad and Rawalpindi. Our master detailers use multi-stage paint correction to eliminate 95%+ of swirl marks and scratches, followed by 9H Nano-Ceramic glass coating for hydrophobic mirror clarity. Inside the cabin, we perform deep steam extraction, leather conditioning, ozone anti-bacterial sterilization, and engine bay detailing.',
    subServices: ['Car Detailing', '9H Ceramic Coating', 'Interior Steam Detailing', 'Paint Correction'],
    subServicePrices: [
      { name: 'Detailing (Interior & Exterior Ceramic)', price: 'PKR 10,000 to 45,000' }
    ],
    category: 'detailing',
    icon: 'Sparkles',
    image: images.serviceDetailing,
    priceRange: 'PKR 10,000 - PKR 45,000',
    estimatedTime: '1 - 2 Days',
    isFeatured: true,
    symptoms: [
      'Swirl marks, scratches, and dull oxidation on vehicle paint under sunlight',
      'Stained leather seats, dirty carpet interior, and dust accumulation in vents',
      'Yellowed or cloudy headlights reducing nighttime driving visibility',
      'Brake dust build-up and road tar baked onto alloy wheels',
    ],
    keyBenefits: [
      'Multi-Stage Machine Paint Correction removing swirl marks & holograms',
      '9H Nano-Ceramic Coating providing hydrophobic gloss & dirt repellency',
      'Hot steam extraction detailing killing 99.9% of cabin bacteria & allergens',
      'Deep leather nourishing and UV protection preventing seat cracking',
    ],
    whyChooseUs: [
      'Clean indoor detailing studio with high-intensity color-matching inspection lights',
      'Imported ceramic coating products (Gtechniq, CarPro, Meguiar’s, Koch Chemie)',
      'Experienced detailers using orbital dual-action polishers to prevent paint burn',
      'Complete interior, exterior, engine bay, and wheel glass restoration',
    ],
    processSteps: [
      { title: '1. Snow Foam Decontamination Wash', desc: 'Pre-rinse foam wash, iron fallout chemical removal, and clay bar treatment.' },
      { title: '2. Paint Micron Audit & Inspection', desc: 'Measure paint depth microns to safely guide multi-stage machine polishing.' },
      { title: '3. Dual-Action Paint Correction', desc: 'Compound cutting and finishing polish to remove 95%+ of swirl marks.' },
      { title: '4. Interior Steam Extraction & Leather Conditioning', desc: 'Deep steam clean carpets, dashboard vents, and apply leather balm.' },
      { title: '5. 9H Ceramic Coating Application', desc: 'Hand-apply hydrophobic ceramic glass coating to paint, glass, and alloy wheels.' },
    ],
    faqs: [
      {
        question: 'What is included in full Car Detailing at HyperTune Garage?',
        answer: 'Full detailing includes snow foam decontamination, iron fallout removal, clay-bar cleansing, multi-stage dual-action paint correction to remove 95%+ of swirl marks, 9H nano-ceramic coating, hot steam cabin extraction, leather nourishment, engine bay cleaning, and headlight UV restoration.',
      },
      {
        question: 'How long does 9H Ceramic Coating last in Islamabad’s climate?',
        answer: 'Our professional-grade 9H nano-ceramic coatings provide durable hydrophobic protection, UV defense, and deep optical gloss for 2 to 5 years, provided the vehicle is washed with pH-neutral shampoo and maintained with periodic ceramic booster sprays.',
      },
      {
        question: 'What is the difference between Ceramic Coating and Paint Protection Film (PPF)?',
        answer: 'Ceramic coating is a liquid silica polymer that chemically bonds to clear coat, providing extreme slickness, hydrophobic water beading, and UV gloss, but it cannot prevent physical stone chips. PPF is a thick 8-mil physical TPU shield that absorbs stone impact. Many clients apply PPF on high-impact front zones and ceramic coating on remaining panels.',
      },
      {
        question: 'Can interior steam detailing remove stubborn smoke, pet, and damp odors?',
        answer: 'Yes. We utilize high-temperature 140°C dry steam extraction that penetrates deep into carpet fibers and seat foam to kill odor-causing bacteria, mold spores, and allergens, followed by an industrial ozone generator treatment that neutralizes organic odors at the molecular level.',
      },
      {
        question: 'How many microns of paint are removed during multi-stage paint correction?',
        answer: 'We measure paint thickness across every panel using digital magnetic gauge meters before polishing. Professional dual-action correction removes only 1 to 3 microns of the standard 35 to 50-micron factory clear coat, safely eliminating swirl marks while preserving maximum protective depth.',
      },
      {
        question: 'How should I maintain my car after receiving a ceramic coating treatment?',
        answer: 'Avoid washing the vehicle for 7 days while the ceramic layer fully cures. Afterwards, use a two-bucket wash technique with microfiber mitts and pH-neutral car wash shampoo. Avoid harsh roadside degreasers, acid-based wheel cleaners, and abrasive dry wiping that can scratch the surface.',
      },
    ],
    seo: {
      seoTitle: 'Car Detailing & 9H Ceramic Coating Islamabad | HyperTune',
      metaDescription: 'Professional car detailing, 9H ceramic coating & interior steam cleaning in Islamabad & Rawalpindi. Restore showroom shine and paint clarity.',
      h1Heading: 'Car Detailing & Ceramic Coating Studio in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Detailing Islamabad',
        'Car Detailing Rawalpindi',
        'Auto Detailing Islamabad',
        'Professional Car Detailing',
        'Best Car Detailing Islamabad',
        'Ceramic Coating Islamabad',
        'Ceramic Coating Rawalpindi',
        'Paint Correction Islamabad',
        'Interior Car Detailing',
        'Exterior Car Detailing'
      ],
      keywordParagraph: 'Restore your car\'s showroom luster with specialized Car Detailing in Islamabad and Rawalpindi. HyperTune Garage provides professional 9H Ceramic Coating, multi-stage paint correction, interior steam extraction detailing, leather restoration, and exterior polishing for all car makes.',
    },
  },

  {
    id: 'engine-services',
    slug: 'engine-services',
    title: 'Engine Services & Overhaul',
    shortDesc: 'Specialized engine repair and precision mechanical overhaul for all vehicle makes in Islamabad & Rawalpindi. Our certified technicians perform engine overhauls, cylinder head repairs, valve jobs, timing chain replacement, and computerized sensor calibration to restore power, fuel efficiency, and factory smoothness.',
    fullDesc: 'HyperTune Garage is Islamabad and Rawalpindi’s dedicated center for complete engine repair, overhaul, and precision diagnostics. Whether your engine suffers from overheating damage, blown head gaskets, excessive oil burning, low cylinder compression, or rod knock, our dust-free mechanical bay is equipped with computerized diagnostic rigs and precision micrometer measuring tools. We rebuild engines to strict 0.001mm OEM specifications with guaranteed factory reliability.',
    subServices: ['Engine Repair & Rebuild', 'Engine Health & Diagnostics'],
    subServicePrices: [
      { name: 'Computerized Diagnostics Scan', price: 'PKR 1,500 to 2,500' },
      { name: 'Cylinder Head & Valve Repair', price: 'PKR 15,000 to 45,000' },
      { name: 'Complete Engine Overhaul', price: 'PKR 45,000 to 180,000' },
    ],
    category: 'engine',
    icon: 'Cpu',
    image: images.serviceEngine,
    priceRange: 'PKR 8,000 - PKR 180,000',
    estimatedTime: '1 - 5 Days',
    isFeatured: true,
    symptoms: [
      'Check Engine light illuminated with active fault codes (P0300, P0011, etc.)',
      'Engine knocking sound, metallic ticking, or heavy blue exhaust smoke',
      'Engine overheating, coolant reservoir boiling, or oil mixing with coolant',
      'Loss of power, slow acceleration, or engine stalling under load',
      'Rough idle, engine misfire, or decreased fuel economy (KM/L)',
    ],
    keyBenefits: [
      '0.001mm micrometer precision block honing & deck resurfacing',
      '100% genuine OEM pistons, rings, valves, timing chain kits, and head gaskets',
      'Computerized sensor calibration & fuel injector balance for Pakistani conditions',
      '12-Month / 15,000 km Written Warranty on complete engine rebuilds',
      'Complimentary break-in inspection & 1,000 km oil service check',
    ],
    whyChooseUs: [
      'Cleanroom engine assembly bay free of dirt & grit',
      'Master mechanics with 15+ years experience in Asian & European engines',
      'High-pressure ultrasonic cleaning for engine heads & oil galleries',
      'Transparent video reports sent to your WhatsApp during teardown',
    ],
    processSteps: [
      { title: '1. Diagnostic Computer & Pressure Test', desc: 'Read fault codes, cylinder compression test, and cooling pressure audit.' },
      { title: '2. Safe Extraction & Teardown', desc: 'Meticulous engine disassembly with cataloged parts and video documentation.' },
      { title: '3. Precision Machining & Ultrasonic Wash', desc: 'Resurface cylinder heads, hone cylinders, and clean all internal galleries.' },
      { title: '4. OEM Assembly & Torque Specs', desc: 'Rebuild using genuine OEM components adhering strictly to factory torque limits.' },
      { title: '5. Break-In Test & Road Verification', desc: 'Warm break-in cycle, oil pressure verification, and road safety audit.' },
    ],
    faqs: [
      {
        question: 'How do I know if my engine needs a minor repair or a full overhaul?',
        answer: 'Our master technicians perform comprehensive diagnostics including cylinder compression testing, cylinder leak-down analysis, oil pressure measurement, and borescope camera inspection. If issues are isolated to valve cover gaskets, oil cooler seals, or timing sensors, we perform targeted repairs. If piston rings, cylinder walls, or crankshaft main bearings show heavy scoring, a precision rebuild is recommended.',
      },
      {
        question: 'What is included in HyperTune Garage Engine Maintenance & Overhaul?',
        answer: 'A master engine overhaul includes engine block ultrasonic cleaning, precision line boring and cylinder honing, brand new OEM pistons, rings, rod bearings, crankshaft polishing, complete cylinder head valve seat re-cutting, new valve stem seals, OEM timing chain kits, water pump replacement, and full gasket renewal.',
      },
      {
        question: 'What is the recommended break-in protocol after an engine rebuild?',
        answer: 'We recommend driving moderately below 3,000 RPM for the first 1,000 km without towing or harsh acceleration. At the 1,000 km milestone, return to HyperTune Garage for a complimentary oil and filter change, torque check on head studs, and diagnostic sensor review to ensure optimal piston ring seating.',
      },
      {
        question: 'Why does my car engine overheat in Islamabad summer traffic?',
        answer: 'Overheating in 40°C+ twin-city traffic is frequently caused by mineral scale clogging the radiator core from tap water usage, a weakened water pump impeller, a stuck thermostat, or failed electric radiator fan relays. We pressure-test the cooling circuit and refill with genuine 50/50 organic coolant.',
      },
      {
        question: 'Do you use genuine OEM engine components for Japanese and German vehicles?',
        answer: 'Yes. We strictly source genuine OEM engine parts with verifiable part numbers (Toyota Genuine, Honda OEM, BMW Genuine, Mercedes-Benz OEM) and premium Tier-1 Japanese and German component manufacturers such as Mahle, Victor Reinz, Aisin, and Denso.',
      },
      {
        question: 'What warranty do you offer on master engine overhauls?',
        answer: 'All master engine overhauls and internal mechanical rebuilds performed at HyperTune Garage are backed by a comprehensive 12-month or 15,000 km written warranty covering workmanship and installed internal components.',
      },
    ],
    seo: {
      seoTitle: 'Engine Services, Repair & Overhaul Islamabad | HyperTune',
      metaDescription: 'Expert engine repair, diagnostics & overhaul in Islamabad & Rawalpindi. Factory-grade diagnostics, head gasket repair, timing belt replacement & 12-month warranty.',
      h1Heading: 'Engine Repair & Precision Overhaul Services in Islamabad & Rawalpindi',
      targetKeywords: [
        'Engine Repair Islamabad',
        'Engine Overhaul Rawalpindi',
        'Cylinder Head Repair',
        'Engine Diagnostics Islamabad',
        'Timing Belt Replacement',
        'Car Engine Overhaul Rawalpindi'
      ],
      keywordParagraph: 'Looking for specialized Engine Repair in Islamabad or complete Engine Overhaul in Rawalpindi? HyperTune Garage provides dealership-grade Engine Diagnostics in Islamabad using advanced diagnostic scanners, cylinder compression testing, and precision measuring tools. Our certified mechanics excel in Cylinder Head Repair, timing belt replacement, valve clearance adjustment, and precision engine rebuilds with a 12-month warranty across Islamabad and Rawalpindi.',
    },
  },

  {
    id: 'inspection-diagnostics',
    slug: 'inspection-diagnostics',
    title: 'Inspection & Diagnostics',
    shortDesc: 'Computerized dealer-level OBD2 diagnostic scanning and detailed 200-point pre-purchase car inspection in Islamabad & Rawalpindi. Get an honest digital health report covering engine compression, transmission codes, accident body damage, paint thickness microns, and electrical diagnostics before buying any car.',
    fullDesc: 'Buying a used car in Pakistan without a thorough professional inspection can lead to hidden financial nightmares—such as flood damage, rolled-back odometers, concealed accident body repairs, or failing hybrid batteries. HyperTune Garage offers dealer-grade 200-Point Pre-Purchase Car Inspections and Computerized Diagnostic Scanning across Islamabad and Rawalpindi. We provide an un-biased, comprehensive digital report complete with paint meter micron readings, camera scope cylinder checks, and ECU diagnostic logs.',
    subServices: ['Car Diagnostics', 'Pre-Purchase Car Inspection'],
    subServicePrices: [
      { name: 'Car Diagnostics', price: 'PKR 1,500 to 2,500 per Diagnostics' },
      { name: 'Pre-Purchase Car Inspection', price: 'PKR 2,000 to 10,000' },
    ],
    category: 'diagnostics',
    icon: 'Search',
    image: images.serviceDiagnostics,
    priceRange: 'PKR 1,500 - PKR 10,000',
    estimatedTime: '1 - 3 Hours',
    isFeatured: true,
    symptoms: [
      'Planning to buy a used car in Islamabad / Rawalpindi and need unbiased inspection',
      'Check Engine light, ABS, Airbag, or Transmission lights lit on dashboard',
      'Unexplained vehicle behavior, intermittent electrical glitches, or sudden stalling',
      'Need verified paint thickness measurement to check for re-painted or filled panels',
      'Verifying mileage integrity & historic ECU fault code records',
    ],
    keyBenefits: [
      '200-Point Comprehensive Inspection Report sent directly to your phone',
      'Dealer-level diagnostic scanners (BMW ISTA+, Mercedes Xentry, Audi ODIS, Toyota Techstream)',
      'Digital magnetic paint thickness meter audit (detects body filler & repainted panels)',
      'Engine cylinder scope camera inspection & compression test option',
      'Unbiased evaluation protecting buyers from costly pre-existing mechanical defects',
    ],
    whyChooseUs: [
      '100% Independent inspection studio — zero seller commission bias',
      'Equipped with hydraulic undercarriage lifts to check hidden chassis damage',
      'Master inspection engineers with thousands of verified car evaluations',
      'Fast same-day appointment booking at Islamabad Flagship Hub & Rawalpindi',
    ],
    processSteps: [
      { title: '1. Computerized Full-System ECU Scan', desc: 'Scan all control modules for current fault codes, historic errors, and mileage tampering.' },
      { title: '2. Paint Thickness & Body Structure Audit', desc: 'Measure clear coat microns across all panels to detect hidden accident repair.' },
      { title: '3. Undercarriage Lift Inspection', desc: 'Inspect chassis rails, floor pan, suspension joints, oil leaks, and exhaust condition.' },
      { title: '4. Engine Bay & Fluid Quality Test', desc: 'Check brake fluid moisture, coolant freeze point, battery health, and belt wear.' },
      { title: '5. Road Audit & Comprehensive Report', desc: 'Perform test drive and deliver a detailed digital PDF report with HD photos.' },
    ],
    faqs: [
      {
        question: 'Can your pre-purchase inspection detect if a car has been in a major accident?',
        answer: 'Yes. Our 200-point pre-purchase inspection utilizes digital paint depth gauges to measure clear coat microns on every metal and plastic panel, detecting hidden body filler (poti) and repainted sections. We also inspect chassis frame rail straightness on our hydraulic lifts, factory spot welds, radiator support pillars, and airbag deployment history.',
      },
      {
        question: 'Do you offer mobile on-site pre-purchase car inspections in Islamabad/Rawalpindi?',
        answer: 'Yes. While an in-workshop inspection is recommended because it allows full undercarriage hydraulic lift access, our mobile inspection vans equipped with portable diagnostic scanners, paint depth gauges, and battery analyzers can inspect vehicles across Islamabad and Rawalpindi at dealerships or seller residences.',
      },
      {
        question: 'What is the difference between a cheap OBD2 code reader and your dealer-level diagnostic scanners?',
        answer: 'Basic handheld scanners only read generic engine emissions fault codes (P-codes). HyperTune Garage utilizes authentic dealer-level diagnostic software suites (BMW ISTA, Mercedes Xentry, Audi ODIS, Porsche PIWIS III, Toyota Techstream, and Autel MaxiSys Elite) that communicate with all vehicle modules including ABS, transmission, airbag, body control, and suspension.',
      },
      {
        question: 'Can you detect tampered or reversed digital odometers during inspection?',
        answer: 'Yes. Dishonest sellers often alter the instrument cluster mileage, but vehicle control units such as the Transmission Control Module (TCM), ABS control module, Airbag module, and ignition key immobilizer store independent operational hours and distance logs that our dealer software cross-checks to reveal discrepancies.',
      },
      {
        question: 'How detailed is your pre-purchase inspection report and how is it delivered?',
        answer: 'Clients receive a comprehensive digital PDF report within 60 minutes of inspection completion. The report includes 50+ high-resolution photos, paint micron readings for every panel, computerized ECU scan printouts, tire and brake wear measurements, and an estimated repair cost breakdown.',
      },
      {
        question: 'What does your high-voltage hybrid battery health diagnostic check?',
        answer: 'For hybrid vehicles (Prius, Aqua, Vezel, Cross, Camry, Lexus), our scan tools read individual battery block voltages, internal cell resistance (milliohms), state-of-charge delta variation, hybrid cooling fan airflow, and inverter coolant pump speed to detect failing battery packs before buying.',
      },
    ],
    seo: {
      seoTitle: 'Car Diagnostics & Pre-Purchase Inspection | HyperTune',
      metaDescription: 'Dealer-level computer diagnostics & 200-point pre-purchase car inspection in Islamabad & Rawalpindi. Digital health report & paint thickness audit.',
      h1Heading: 'Computerized Car Diagnostics & Pre-Purchase Inspection in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Diagnostics Islamabad',
        'Pre Purchase Car Inspection Rawalpindi',
        'Used Car Inspection Islamabad',
        'Computerized Car Scan',
        'Paint Meter Car Inspection',
        'OBD2 Diagnostic Scan',
        'Car Health Report Islamabad',
        'Used Car Verification Pakistan'
      ],
      keywordParagraph: 'Make informed automotive decisions with dealer-level Car Diagnostics in Islamabad and comprehensive Pre Purchase Car Inspection in Rawalpindi. HyperTune Garage utilizes advanced OBD2 Diagnostic Scan and computerized car scan rigs to audit all control modules for engine fault codes, transmission issues, and electrical warnings. Before buying a used car in Pakistan, rely on our detailed used car inspection report—including paint meter car inspection micron readings and cylinder scope checks—for a complete car health report in Islamabad.',
    },
  },

  {
    id: 'maintenance-servicing',
    slug: 'maintenance-servicing',
    title: 'Maintenance & Servicing',
    shortDesc: 'Comprehensive periodic maintenance, synthetic oil changes, and preventive inspection services in Islamabad & Rawalpindi. Keep your vehicle running smoothly with genuine filters, high-grade lubricants, spark plug replacement, fluid flushes, and a thorough 50-point safety health audit by expert technicians.',
    fullDesc: 'Regular periodic maintenance is the single most important factor in extending your car’s lifespan and maintaining peak resale value. At HyperTune Garage Islamabad & Rawalpindi, our maintenance packages use 100% authentic imported fully synthetic oils (Liqui Moly, Mobil 1, Shell Helix Ultra, Total Quartz) matched strictly to manufacturer viscosity standards (0W-20, 5W-30, 5W-40). Every periodic service comes with our 50-Point Digital Vehicle Health Report.',
    subServices: ['Oil Change & Periodic Maintenance', 'Preventive Car Maintenance'],
    subServicePrices: [
      { name: 'Oil Change & Periodic Maintenance', price: 'PKR 6,000 to 18,000' },
      { name: 'Preventive Car Maintenance', price: 'PKR 1,000 to 20,000' },
    ],
    category: 'maintenance',
    icon: 'Activity',
    image: images.serviceMaintenance,
    priceRange: 'PKR 1,000 - PKR 20,000',
    estimatedTime: '45 Mins - 2 Hours',
    isFeatured: true,
    symptoms: [
      'Due for oil change mileage interval (every 5,000 km to 10,000 km)',
      'Maintenance indicator light or oil service alert on dashboard',
      'Dark, dirty, or low engine oil level on dipstick check',
      'Sluggish engine performance or reduced fuel average (KM/L)',
      'Preparing car for long northern tours (Kaghan, Hunza, Skardu, Murree)',
    ],
    keyBenefits: [
      '100% Authentic Imported Synthetic Oils with QR Code traceability',
      'Genuine OEM Oil, Air, Cabin, and Fuel Filters',
      'Comprehensive 50-Point Digital Safety Inspection Report with photos',
      'Complimentary fluid top-up (coolant, brake fluid, washer fluid)',
      'Computerized service interval reset & digital maintenance logbook',
    ],
    whyChooseUs: [
      'Express maintenance completed in under 60 minutes',
      'Clean vehicle lift bays & air-conditioned customer lounge',
      'Zero counterfeit oil guarantee — sourced directly from official importers',
      'Free tire pressure audit & brake pad thickness measurement',
    ],
    processSteps: [
      { title: '1. Hot Oil Drain & Inspection', desc: 'Warm gravity drain of old engine oil to clear sludge and heavy deposits.' },
      { title: '2. OEM Filter Replacement', desc: 'Install new OEM oil filter, clean air intake box, and swap cabin micro-filter.' },
      { title: '3. Synthetic Refill & Torque Check', desc: 'Refill exact oil volume using digital dispensing guns and torque oil plug.' },
      { title: '4. 50-Point Health Audit', desc: 'Inspect battery health, brake pads, suspension bushings, belts, and hoses.' },
      { title: '5. Service Reset & Wash', desc: 'Reset dash maintenance alert and provide complimentary exterior wash.' },
    ],
    faqs: [
      {
        question: 'Which engine oil viscosity should I use for Pakistani summer temperatures?',
        answer: 'For modern Japanese hybrid vehicles, 0W-20 or 5W-20 fully synthetic oils provide optimal fuel efficiency and cold-start lubrication. For turbocharged gasoline engines, modern crossovers, and European vehicles operating in 40°C to 47°C summer ambient heat, we recommend 5W-30 or 5W-40 full synthetic oils meeting API SP and European ACEA specs.',
      },
      {
        question: 'What is included in the 50-Point Periodic Maintenance Inspection?',
        answer: 'Our 50-point checklist inspects engine oil and filter condition, air intake filter, cabin pollen microfilter, brake pad thickness, brake fluid moisture percentage, cooling system pressure and boiling point, battery health and cranking voltage, suspension play, tire pressure, and a comprehensive computerized diagnostic scan.',
      },
      {
        question: 'How frequently should spark plugs, fuel filters, and cabin air filters be replaced?',
        answer: 'Standard nickel spark plugs should be changed every 20,000 km, while OEM Iridium/Platinum plugs last 80,000 to 100,000 km. Due to heavy airborne dust in the twin cities, engine air and cabin pollen filters should be inspected every 5,000 km and replaced every 10,000 to 15,000 km.',
      },
      {
        question: 'Why is tap water dangerous for radiators in Islamabad and Rawalpindi?',
        answer: 'Tap water contains dissolved minerals and chlorine that cause severe rust, electrolysis, and scaling inside the engine block, clogging narrow radiator passages and eroding water pump seals. We use 50/50 premixed demineralized ethylene glycol coolant with organic acid technology (OAT) that protects up to 108°C boiling point.',
      },
      {
        question: 'Do you reset vehicle maintenance service reminder lights and electronic monitors?',
        answer: 'Yes. After completing routine servicing, we hook up our diagnostic interface to reset maintenance reminder intervals, oil life monitors, brake pad wear sensors, and inspection countdowns in your instrument cluster according to factory reset procedures.',
      },
      {
        question: 'How long does a standard periodic maintenance service take at your workshop?',
        answer: 'A routine synthetic oil change, OEM filter replacement, and full 50-point vehicle inspection is typically completed within 45 to 60 minutes. You can relax in our air-conditioned customer lounge with Wi-Fi while our technicians service your vehicle.',
      },
    ],
    seo: {
      seoTitle: 'Car Maintenance & Oil Change Services | HyperTune Garage',
      metaDescription: 'Professional periodic car maintenance & synthetic oil change in Islamabad & Rawalpindi. 100% genuine lubricants, OEM filters & 50-point safety check.',
      h1Heading: 'Periodic Car Maintenance & Oil Change Services in Islamabad & Rawalpindi',
      targetKeywords: [
        'Oil Change Islamabad',
        'Car Maintenance Rawalpindi',
        'Synthetic Oil Change Islamabad',
        'Periodic Car Service',
        'Preventive Car Maintenance',
        'Liqui Moly Oil Change Pakistan',
        'Car Inspection Islamabad',
        'Periodic Maintenance Service'
      ],
      keywordParagraph: 'Ensure your vehicle stays in peak condition with our top-rated Oil Change in Islamabad and complete Periodic Maintenance in Rawalpindi. At HyperTune Garage, we deliver premium Car Maintenance in Pakistan using 100% authentic imported lubricants for every Synthetic Oil Change in Islamabad. Our comprehensive periodic service includes genuine oil filter installation, Spark Plug Replacement, air/cabin filter renewal, Liqui Moly oil changes, and a thorough 50 Point Car Inspection. Visit our modern facility for Car Servicing in Islamabad to enjoy long-term reliability and complete Preventive Car Care for all Asian, Japanese, and European car models.',
    },
  },

  {
    id: 'brake-suspension-steering',
    slug: 'brake-suspension-steering',
    title: 'Brake, Suspension & Steering',
    shortDesc: 'Precision brake repair, suspension overhaul, electronic air suspension repair, steering rack restoration, and 3D laser wheel alignment in Islamabad & Rawalpindi. Eliminate thumping noises, spongy braking, steering looseness, and uneven tire wear with factory OEM replacement components.',
    fullDesc: 'Pakistani road conditions place severe stress on vehicle undercarriage systems, causing worn shocks, damaged control arm bushings, leaking steering racks, and misaligned wheels. HyperTune Garage houses Italian 3D Laser Wheel Alignment rigs, heavy-duty hydraulic presses, and specialized diagnostic software for electronic air suspension (Mercedes Airmatic, Audi Adaptive Air, BMW Dynamic Drive). We restore factory handling, stopping distance, and ride comfort.',
    subServices: ['Brake Repair', 'Suspension Repair', 'Steering Repair'],
    subServicePrices: [
      { name: 'Brake Repair', price: 'PKR 1,000 to 5,000' },
      { name: 'Suspension Repair', price: 'PKR 4,000 to 50,000' },
      { name: 'Steering Repair', price: 'PKR 3,500 to 25,000' },
    ],
    category: 'suspension',
    icon: 'Disc',
    image: images.serviceSuspension,
    priceRange: 'PKR 1,000 - PKR 50,000',
    estimatedTime: '2 - 5 Hours',
    isFeatured: true,
    symptoms: [
      'Clunking, squeaking, or thumping noises over road bumps and speed breakers',
      'Vehicle pulling to left or right while steering straight',
      'Spongy brake pedal feeling, squealing noise, or extended stopping distance',
      'Steering wheel vibration at high highway speeds (80-120 km/h)',
      'Uneven, premature tire tread wear across inner or outer edges',
    ],
    keyBenefits: [
      'Italian 3D Laser Wheel Alignment with sub-millimeter toe & camber accuracy',
      'High-performance ceramic low-dust brake pads for maximum stopping power',
      'Hydraulic press bushing installation preserving suspension arms',
      'Air suspension compressor & strut repair with 12-month warranty',
      'Electronic steering rack re-calibration & power steering fluid flush',
    ],
    whyChooseUs: [
      'Official 3D laser alignment targets matched to factory chassis specs',
      '100% Genuine OEM brake discs, pads, shock absorbers, and tie rods',
      'No guess work — clear digital report of alignment angles before & after',
      'Expert repair for both standard coil springs & complex air suspension',
    ],
    processSteps: [
      { title: '1. Undercarriage Lift Audit', desc: 'Inspect ball joints, tie-rod ends, sway bar links, shock absorbers, and brake discs.' },
      { title: '2. OEM Component Replacement', desc: 'Extract worn parts using hydraulic presses and install genuine replacement components.' },
      { title: '3. Brake Disc Resurfacing / Renewal', desc: 'Precision brake lathe skimming or brand new rotor installation with low-dust ceramic pads.' },
      { title: '4. 3D Laser Wheel Alignment', desc: 'Mount 3D optical targets to calibrate toe, camber, and caster to factory specifications.' },
      { title: '5. High-Speed Highway Drive Test', desc: 'Verify straight-line tracking, steering returnability, and braking emergency response.' },
    ],
    faqs: [
      {
        question: 'How often should I align my car wheels and check suspension in Islamabad & Rawalpindi?',
        answer: 'We recommend computerized 3D laser wheel alignment and suspension inspection every 10,000 km, or immediately after hitting deep road potholes, curbs, or installing new tires. Proper alignment prevents uneven tire wear and ensures straight highway tracking.',
      },
      {
        question: 'What causes squealing or grinding brake noises and pedal pulsation?',
        answer: 'High-pitched squealing indicates that brake pads have reached their minimum wear indicator. Grinding noises signal metal-to-metal contact between worn backing plates and brake rotors. Pulsating pedals during braking are caused by warped brake rotors due to rapid temperature cycling.',
      },
      {
        question: 'What is the difference between brake rotor resurfacing (lathe skimming) and replacement?',
        answer: 'If brake rotors exhibit surface grooves or minor warping but remain safely above the manufacturer’s minimum discarded thickness stamp, our on-car and off-car precision brake lathe skims the surface flat. If the rotor is below minimum thickness or heavily heat-cracked, brand new OEM rotors must be installed.',
      },
      {
        question: 'Why does my steering wheel vibrate at highway speeds on the Islamabad Highway?',
        answer: 'Highway steering vibration between 80 km/h and 120 km/h is commonly caused by unbalanced front wheels, bent wheel rims, worn inner or outer tie rod ends, or loose steering rack bushings. We perform high-speed dynamic wheel balancing and inspect steering linkage tolerance.',
      },
      {
        question: 'Can you rebuild air suspension struts for Mercedes Airmatic, Audi Adaptive, and Range Rover?',
        answer: 'Yes. Instead of purchasing expensive whole strut assemblies, our suspension specialists rebuild leaking air suspension rubber bellows, replace internal seals, repair suspension air compressors, and calibrate ride height sensors using dealer computer software.',
      },
      {
        question: 'What warranty is provided on suspension bushings, control arms, and shock absorbers?',
        answer: 'All genuine OEM and premium aftermarket suspension components installed by HyperTune Garage (such as Lemförder, 555, Kayaba, Bilstein, and TRW) come backed by our 12-month or 15,000 km warranty against premature wear or knocking.',
      },
    ],
    seo: {
      seoTitle: 'Brake, Suspension & Steering Repair | HyperTune Garage',
      metaDescription: 'Expert brake repair, suspension overhaul, steering rack repair & 3D wheel alignment in Islamabad & Rawalpindi. Eliminate noises & restore smooth handling.',
      h1Heading: 'Precision Brake, Suspension & Steering Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Brake Repair Islamabad',
        'Suspension Repair Rawalpindi',
        'Steering Rack Repair',
        '3D Wheel Alignment Islamabad',
        'Ceramic Brake Pads Pakistan',
        'Air Suspension Repair Islamabad',
        'Shock Absorber Replacement',
        'Car Steering Repair Rawalpindi'
      ],
      keywordParagraph: 'Eliminate undercarriage noises, uneven tire wear, and spongy braking with professional Brake Repair in Islamabad and complete Suspension Repair in Rawalpindi. HyperTune Garage offers precision Steering Rack Repair, Italian 3D Wheel Alignment in Islamabad, shock absorber replacement, and expert Ceramic Brake Pads installation in Pakistan. From complex Air Suspension Repair in Islamabad on European luxury sedans to heavy-duty Steering Repair in Rawalpindi on local Japanese hatchbacks and SUVs, our technicians restore original factory handling, stopping confidence, and ride comfort.',
    },
  },

  {
    id: 'transmission-drivetrain',
    slug: 'transmission-drivetrain',
    title: 'Transmission & Drivetrain',
    shortDesc: 'Expert automatic, CVT, dual-clutch (DCT), and manual transmission repair and rebuilding in Islamabad & Rawalpindi. We resolve gear slipping, shifting jerks, transmission fluid leaks, torque converter faults, and electronic solenoid issues using genuine OEM parts and specialized diagnostic procedures.',
    fullDesc: 'Modern automatic gearboxes—including Continuously Variable Transmissions (CVT), Dual-Clutch Transmissions (Honda DCT, VW DSG), and multi-speed torque-converter automatics—require delicate hydraulic and electronic calibration. High summer ambient heat and delayed fluid service lead to jerking, gear slipping, or limp-mode warnings. HyperTune Garage provides complete transmission diagnostics, fluid flushing with OEM specs, valve body solenoid rebuilding, and complete gearbox overhauls.',
    subServices: ['Transmission Repair'],
    subServicePrices: [
      { name: 'Transmission Repair', price: 'PKR 8,000 to 85,000' },
    ],
    category: 'transmission',
    icon: 'Settings',
    image: images.serviceTransmission,
    priceRange: 'PKR 8,000 - PKR 85,000',
    estimatedTime: '1 - 4 Days',
    isFeatured: true,
    symptoms: [
      'Harsh jerking or shuddering when shifting from Park to Drive or during gear shifts',
      'Engine revving high without vehicle accelerating (gear slip)',
      'Transmission warning light or "Transmission Malfunction" message on dash',
      'Delayed gear engagement when cold or noisy transmission whining',
      'Reddish or brown transmission fluid leaking underneath car',
    ],
    keyBenefits: [
      'Factory diagnostic scanning for TCU error codes & solenoid live data',
      '100% Genuine OEM CVT / DCT / ATF fluids matching exact manufacturer specs',
      'Complete valve body overhaul & electronic solenoid replacement',
      'Honda DCT / Vezel clutch actuator relearn & computerized fluid exchange',
      '12-Month warranty on rebuilt automatic & CVT transmissions',
    ],
    whyChooseUs: [
      'Specialized clean bench for automatic gearbox rebuilding',
      'Computerized fluid exchange machines preventing torque converter air lock',
      'Save 50% compared to purchasing new factory gearbox units',
      'Experienced master transmission technicians',
    ],
    processSteps: [
      { title: '1. Computerized TCU Scan & Fluid Test', desc: 'Audit transmission control unit fault codes, pressure sensors, and fluid burnt smell.' },
      { title: '2. Transmission Fluid Flush / Removal', desc: 'Perform full fluid exchange or safely extract gearbox for bench rebuilding.' },
      { title: '3. Valve Body & Solenoid Servicing', desc: 'Disassemble valve body, replace faulty solenoids, and clean internal fluid channels.' },
      { title: '4. Clutch Pack & Seal Rebuild', desc: 'Replace worn friction plates, seals, torque converter, and bearings.' },
      { title: '5. Calibration & Adaption Drive', desc: 'Perform electronic clutch adaptation relearn and road test under load.' },
    ],
    faqs: [
      {
        question: 'Why does Honda Vezel, Grace, or Fit dual-clutch transmission jerk or show high temperature warnings?',
        answer: 'Honda i-DCD dry dual-clutch transmissions overheat in Pakistani stop-and-go summer traffic due to degraded clutch actuator brake fluid (DOT 4) and clutch friction wear. HyperTune Garage performs a specialized clutch actuator fluid flush, high-pressure bleeding, and Honda diagnostic computer clutch kiss-point adaptation relearn to restore smooth shifting.',
      },
      {
        question: 'How often should CVT transmission fluid be changed in Pakistan?',
        answer: 'Due to extreme summer ambient temperatures and twin-city stop-and-go traffic, CVT fluid degrades significantly faster. We recommend replacing CVT fluid and internal pan filters every 30,000 to 40,000 km using only genuine factory-specified fluids (Toyota TC/FE, Honda HCF-2, Nissan NS-3, Suzuki Green 2) with computer deterioration index resets.',
      },
      {
        question: 'What are the warning signs of mechatronic or clutch failure in German DSG/S-Tronic gearboxes?',
        answer: 'Common symptoms include violent juddering when pulling away in 1st or 2nd gear, delayed reverse engagement, sudden transmission emergency mode warnings, or oil leaks from the mechatronic breather valve. We repair mechatronic hydraulic pressure circuits and replace dual-clutch packs.',
      },
      {
        question: 'Do you perform transmission computer adaptations and clutch point relearns?',
        answer: 'Yes. After any transmission fluid replacement, solenoid service, or clutch overhaul, we hook up OEM diagnostic software to perform clutch touch-point calibration, shift drum relearn, and line pressure adaptation drive cycles.',
      },
      {
        question: 'What is the difference between a transmission fluid drain-and-fill versus a pressurized flush?',
        answer: 'A standard gravity drain-and-fill replaces 40% to 50% of the fluid resting in the pan, which is safe for regular maintenance. For neglected transmissions with burnt fluid, our automated transmission exchanger gently exchanges 100% of the fluid throughout the torque converter and cooler lines without harming delicate internal seals.',
      },
      {
        question: 'Can you repair differential whine and transfer case clunking on 4x4 vehicles like Prado and Fortuner?',
        answer: 'Yes. We inspect differential ring-and-pinion gear backlash, replace worn carrier bearings and pinion seals, and service electronic 4WD transfer case actuator motors with genuine synthetic gear lubricants (75W-90 / 80W-90 GL-5).',
      },
    ],
    seo: {
      seoTitle: 'Transmission Repair & Gearbox Service | HyperTune Garage',
      metaDescription: 'Professional transmission repair, CVT overhaul & dual-clutch service in Islamabad & Rawalpindi. Resolve shifting jerks, gear slip & gearbox fluid leaks.',
      h1Heading: 'Automatic & CVT Transmission Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Transmission Repair Islamabad',
        'Automatic Gearbox Repair Rawalpindi',
        'CVT Transmission Service',
        'Dual Clutch Repair Honda Vezel',
        'Gearbox Overhaul Islamabad',
        'Transmission Fluid Flush',
        'DSG Repair Pakistan',
        'Car Transmission Specialist'
      ],
      keywordParagraph: 'Solve gear slipping, harsh shifting, and transmission fluid leaks with specialized Transmission Repair in Islamabad and Automatic Gearbox Repair in Rawalpindi. HyperTune Garage is equipped for complete CVT Transmission Service, factory-spec Transmission Fluid Flush, Dual Clutch Repair for Honda Vezel / Grace, and advanced DSG Repair in Pakistan. If your vehicle experiences gear slipping, delayed engagement, or transmission errors, our Car Transmission Specialists provide complete gearbox overhaul solutions to guarantee smooth gear shifts.',
    },
  },

  {
    id: 'vehicle-wrap',
    slug: 'vehicle-wrap',
    title: 'Vehicle Wrap',
    shortDesc: 'Full car vinyl wrapping studio in Islamabad & Rawalpindi. Transform your vehicle\'s look with matte, satin, gloss, chrome, and carbon fiber vinyl wraps while preserving original factory paint.',
    fullDesc: 'HyperTune Garage is Islamabad and Rawalpindi’s premier studio for custom Vehicle Wrapping and vinyl styling. Whether you desire a complete color change wrap (matte black, satin gray, gloss Nardo, metallic), roof wraps, carbon fiber accents, or custom vinyl wraps, our skilled technicians disassemble trim for seamless, bubble-free installation with wrapped edge tucking.',
    subServices: ['Vehicle Wrap', 'Color Change Vinyl Wrap', 'Matte & Satin Wrap', 'Carbon Fiber & Roof Wrap'],
    subServicePrices: [
      { name: 'Body Wrap (Vehicle Wrapping)', price: 'PKR 1,000 to 250,000' }
    ],
    category: 'wrap',
    icon: 'Shield',
    image: images.serviceWrap,
    priceRange: 'PKR 1,000 - PKR 250,000',
    estimatedTime: '2 - 4 Days',
    isFeatured: true,
    symptoms: [
      'Desire to transform vehicle color without permanently altering factory paint',
      'Sun-faded roof or bonnet paint requiring stylish black or carbon wrap contrast',
      'Desire for specialized finishes like satin metallic, matte, or gloss colors',
      'Protection of original body paint against minor road debris and sun oxidation',
    ],
    keyBenefits: [
      'Endless custom color & texture options (Matte, Satin, Gloss, Chrome, Carbon Fiber)',
      'Non-destructive installation preserving original factory paint underneath',
      'Fully reversible — peel off cleanly anytime with zero paint damage',
      'Protects factory clear coat from UV fading, light scratches, and rain stains',
    ],
    whyChooseUs: [
      'Clean, dust-controlled wrapping booth with heat-gun post-curing',
      'Imported automotive cast vinyl films (Avery Dennison, 3M, KPMF, Inozetek)',
      'Master wrap artists trained in corner wrapping and edge tucking',
      'Disassembly of handles, lights, and emblems for seamless finish',
    ],
    processSteps: [
      { title: '1. Surface Cleaning & Trim Prep', desc: 'Thorough clay bar cleaning, alcohol wipe down, and careful removal of emblems/handles.' },
      { title: '2. Panel Measurement & Film Cutting', desc: 'Precision panel sizing of premium cast vinyl wrap rolls.' },
      { title: '3. Heat Application & Seamless Wrapping', desc: 'Squeegee installation with heat stretching for smooth contour wrapping.' },
      { title: '4. Deep Edge Tucking & Trim Reassembly', desc: 'Tuck edges behind body panels to prevent lifting and reinstall vehicle trim.' },
      { title: '5. Post-Heating & Inspection Audit', desc: 'Post-heat film edges to 90°C to lock memory shape and ensure 100% adhesion.' },
    ],
    faqs: [
      {
        question: 'Will a vehicle vinyl wrap damage my car’s original paint?',
        answer: 'No. Premium cast automotive vinyl wraps from Avery Dennison, 3M, and Inozetek actually safeguard your factory paintwork from UV sun bleaching, minor rock chips, and bird droppings. When peeled professionally, the wrap comes off cleanly without leaving adhesive residue or damaging clear coat.',
      },
      {
        question: 'How long does a car wrap last in Pakistan’s climate?',
        answer: 'High-quality cast vinyl wraps last between 3 to 5 years under Pakistani sun when properly maintained. Horizontal surfaces (hood, roof, and trunk) endure the highest UV exposure, so regular washing and parking in covered shade extends wrap longevity.',
      },
      {
        question: 'What is the difference between a color change vinyl wrap and Paint Protection Film (PPF)?',
        answer: 'Color change vinyl wrap is a thin 3 to 4-mil PVC film primarily designed to alter vehicle color, finish (satin, matte, gloss, metallic), and appearance. PPF is a much thicker 8-mil thermoplastic polyurethane (TPU) film engineered specifically for impact absorption and self-healing rock chip defense.',
      },
      {
        question: 'How do you prep the paintwork before applying a vehicle wrap?',
        answer: 'Surface preparation is vital for wrap longevity. We perform a full exterior decontamination wash, chemical clay bar extraction to eliminate embedded tar and road grime, panel alcohol wipe-down, and trim disassembly to tuck edges deeply behind rubbers and moldings.',
      },
      {
        question: 'Can individual damaged wrap panels be replaced without wrapping the whole car?',
        answer: 'Yes. If a fender, bumper, or door panel gets scratched in an accident, we can remove the vinyl from that specific panel and install a fresh piece matching your vinyl roll batch code without disturbing the rest of the vehicle wrap.',
      },
      {
        question: 'Can wrapped vehicles be washed at standard commercial car wash stations?',
        answer: 'We recommend hand washing wrapped vehicles using microfiber wash mitts and pH-neutral automotive soap. High-pressure jet washers should be kept at least 12 to 18 inches away from panel edges and seams to prevent film lifting.',
      },
    ],
    seo: {
      seoTitle: 'Car Wrap & Vehicle Vinyl Wrapping Islamabad | HyperTune',
      metaDescription: 'Custom car vinyl wrapping studio in Islamabad & Rawalpindi. Full color change, matte, satin, gloss & carbon fiber wraps.',
      h1Heading: 'Car Wrap & Vehicle Vinyl Wrapping Studio in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Wrap Islamabad',
        'Car Wrap Rawalpindi',
        'Vehicle Wrap Islamabad',
        'Vinyl Wrap Islamabad',
        'Best Car Wrap Islamabad',
        'Color Change Wrap',
        'Matte Car Wrap',
        'Gloss Vinyl Wrap',
        'Satin Car Wrap',
        'Carbon Fiber Wrap'
      ],
      keywordParagraph: 'Transform your car\'s style with premier Car Wrap and Vehicle Vinyl Wrapping in Islamabad & Rawalpindi. HyperTune Garage offers custom color change wraps, matte black, satin metallic, gloss finishes, roof wraps, and carbon fiber wraps with seamless edge tucking.',
    },
  },

  {
    id: 'body-repair-paint',
    slug: 'body-repair-paint',
    title: 'Body Repair & Paint',
    shortDesc: 'Premier auto body repair, collision denting, paintless dent repair (PDR), and computerized paint booth spraying in Islamabad & Rawalpindi with exact European spectrophotometer color matching.',
    fullDesc: 'HyperTune Garage operates a state-of-the-art auto body repair and thermal spray paint booth facility in Islamabad and Rawalpindi. From major insurance collision repair and chassis alignment to minor dent removal, scratch repair, and bumper restoration, our skilled craftsmen deliver factory-smooth panel alignment and 100% computerized paint color matching.',
    subServices: ['Body Repair & Paint', 'Collision Denting & Frame Alignment', 'Paintless Dent Repair (PDR)', 'Thermal Paint Booth Spraying'],
    subServicePrices: [
      { name: 'Body Repair & Paint', price: 'PKR 5,000 to 100,000' }
    ],
    category: 'body',
    icon: 'Palette',
    image: images.servicePaint,
    priceRange: 'PKR 5,000 - PKR 100,000',
    estimatedTime: '2 - 5 Days',
    isFeatured: true,
    symptoms: [
      'Accident collision damage, dented doors, crushed bumpers, or misaligned panels',
      'Deep paint scratches, key marks, or scraped quarter panels',
      'Faded, sun-damaged, or peeling clear coat requiring complete car repainting',
      'Insurance claim repair requiring professional bodyshop documentation',
    ],
    keyBenefits: [
      'Dust-Free Down-Draft Thermal Paint Booth for mirror glass paint clarity',
      'Computerized Spectrophotometer Color Matching (100% exact factory paint match)',
      'Paintless Dent Repair (PDR) for minor door dings preserving original paint',
      'High-grade Standox / PPG European paint systems with 5-year color warranty',
    ],
    whyChooseUs: [
      'Precision hydraulic frame alignment bench for collision restoration',
      'Experienced denters and painters with decades of automotive bodyshop expertise',
      'Direct assistance with insurance claim paperwork and surveyor approvals',
      'Seamless panel gaps matching original factory assembly line standards',
    ],
    processSteps: [
      { title: '1. Damage Assessment & Panel Pulling', desc: 'Inspect frame straightness, pull dented panels, or replace damaged sheet metal.' },
      { title: '2. Surface Prep & Primer Application', desc: 'Sanding, leveling filler, anti-corrosion primer coating, and guide coat block sanding.' },
      { title: '3. Computerized Spectrophotometer Match', desc: 'Scan paint color code and mix premium European basecoat to exact factory tint.' },
      { title: '4. Thermal Bake Spray Booth Application', desc: 'Spray basecoat and high-solid clear coat inside dust-free 70°C heated spray booth.' },
      { title: '5. Wet Sanding & Mirror Polish', desc: '2000-3000 grit wet sanding and dual-action machine polishing for a flawless finish.' },
    ],
    faqs: [
      {
        question: 'How do you guarantee an exact paint color match for factory and metallic colors?',
        answer: 'We utilize digital optical spectrophotometers to scan your vehicle’s exact current paint condition and clear coat oxidation. We then formulate precision paint codes using premium European Standox and Glasurit computerized mixing systems to guarantee an undetectable, seamless match across adjacent panels.',
      },
      {
        question: 'Do you assist with private and corporate car insurance collision claims in Islamabad?',
        answer: 'Yes. We work directly with all major insurance companies across Pakistan (including Adamjee, Jubilee, EFU, TPL, and Askari). We prepare official surveyor repair estimates, manage insurance inspection visits, and execute factory-standard collision repairs with zero stress for the car owner.',
      },
      {
        question: 'What is computerized bake booth painting and why is it superior to open-air spray painting?',
        answer: 'Our pressurized, downdraft thermal spray booth filters out 99.9% of dust particles, airborne bugs, and moisture before air touches wet paint. After spraying European high-solid clear coat, the booth bakes the vehicle at 65°C to 70°C, ensuring hard curing, high gloss, and factory durability.',
      },
      {
        question: 'What is Paintless Dent Repair (PDR) and can it fix door dings without repainting?',
        answer: 'PDR is a specialized metal sculpting technique using surgical-grade rods and suction tools to massage minor dents, door dings, and hail damage from behind the body panel without disturbing or repainting the factory clear coat, preserving 100% original vehicle paint value.',
      },
      {
        question: 'What warranty is provided against clear coat peeling, bubbling, and color fading?',
        answer: 'All full-panel paint jobs and collision repairs executed in our heated bake booth come backed by our written warranty guaranteeing against clear coat flaking, cracking, bubbling, and premature UV color fading.',
      },
      {
        question: 'How do you treat rust and corrosion before repainting body panels?',
        answer: 'We grind away oxidized metal down to clean virgin steel, apply chemical rust convertors, and seal with high-adhesion anti-corrosion zinc epoxy primers before applying any body fillers or basecoats, ensuring rust never bubbles back through the finished paintwork.',
      },
    ],
    seo: {
      seoTitle: 'Car Body Repair, Denting & Paint Shop Islamabad | HyperTune',
      metaDescription: 'Premier car body repair, denting, paint booth repainting & collision restoration in Islamabad & Rawalpindi. 100% exact color matching.',
      h1Heading: 'Car Body Repair, Denting & Painting in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Body Repair Islamabad',
        'Car Body Repair Rawalpindi',
        'Car Paint Shop Islamabad',
        'Best Car Paint Shop Rawalpindi',
        'Dent Repair Islamabad',
        'Bumper Repair',
        'Collision Repair',
        'Paint Booth Service'
      ],
      keywordParagraph: 'Restore your vehicle\'s factory body condition with top-rated Car Body Repair in Islamabad & Rawalpindi. HyperTune Garage features the best car paint shop in Islamabad and Rawalpindi with a dust-free paint booth for dent repair, scratch removal, bumper repair, and insurance claim collision repair with 100% computerized color matching.',
    },
  },

  {
    id: 'body-modification',
    slug: 'body-modification',
    title: 'Body Modification',
    shortDesc: 'Custom car body modification studio in Islamabad & Rawalpindi. Supply & installation of wide body kits, spoilers, front lips, side skirts, rear diffusers, carbon fiber hoods, and sports bumpers.',
    fullDesc: 'HyperTune Garage is Islamabad and Rawalpindi’s dedicated workshop for custom Body Modification and sports car aerodynamic upgrades. From wide body conversions, lip kits, side skirts, and rear diffusers to carbon fiber hoods, trunk spoilers, performance bumpers, and custom grille upgrades, we turn your car design vision into reality.',
    subServices: ['Body Modification', 'Wide Body Kit Installation', 'Front Lips & Side Skirts', 'Rear Diffuser & Spoilers', 'Carbon Fiber Body Parts'],
    subServicePrices: [
      { name: 'Body Modification', price: 'PKR 5,000 to 300,000' }
    ],
    category: 'modification',
    icon: 'Wrench',
    image: images.serviceBodyMod,
    priceRange: 'PKR 5,000 - PKR 300,000',
    estimatedTime: '2 - 7 Days',
    isFeatured: true,
    symptoms: [
      'Desire to upgrade stock car appearance with aggressive sports body kits',
      'Desire for functional aerodynamic downforce (front lips, rear diffusers, GT wings)',
      'Installation of aftermarket fiberglass, ABS plastic, or carbon fiber body components',
      'Custom stance, wide wheel arch fender flare modification, and fitment',
    ],
    keyBenefits: [
      'Custom Body Kit Installation (Wide body kits, front lips, side skirts, rear diffusers)',
      'Precision test-fitting and panel alignment before paint matching',
      'Expertise in carbon fiber, ABS plastic, and composite fiberglass body parts',
      'Flawless paint matching in our thermal bake spray booth',
    ],
    whyChooseUs: [
      'Experienced body modification technicians skilled in custom body styling',
      'Imported body kits & custom fabrication facilities',
      'Seamless integration with original mounting points and sensor locations',
      'Complete custom car transformations under one roof',
    ],
    processSteps: [
      { title: '1. Design Consultation & Part Inspection', desc: 'Inspect body kit material quality, test fitment on vehicle, and align mounting brackets.' },
      { title: '2. Panel Trimming & Custom Fitment', desc: 'Custom modify panel gaps, arches, and body lines for perfect flush fitment.' },
      { title: '3. Surface Preparation & Color Matching', desc: 'Prime, sand, and spectrophotometer color-match body kit components to car paint.' },
      { title: '4. Thermal Bake Painting', desc: 'Spray body kit components inside dust-free thermal bake paint booth.' },
      { title: '5. Final Assembly & Polish', desc: 'Mount body kit securely, re-connect PDC sensors, and machine polish for delivery.' },
    ],
    faqs: [
      {
        question: 'What body kit modifications and aerodynamic styling components do you install?',
        answer: 'We supply and install front bumper splitters, side skirt extensions, aggressive rear diffusers, ducktail and GT trunk spoilers, carbon fiber vented hoods, wide-body fender flares, honeycomb mesh grilles, and complete body conversion packages (e.g. M-Sport for BMW, AMG styling for Mercedes, and Lexus F-Sport kits).',
      },
      {
        question: 'Can you custom paint match body kits to my vehicle’s factory color code?',
        answer: 'Yes. All body kit parts (whether ABS plastic, polyurethane, or fiberglass) undergo thorough surface sanding, adhesion promotion primer application, and computerized spectrophotometer color matching inside our dust-free heated bake booth to guarantee exact factory alignment.',
      },
      {
        question: 'Do body kit installations require permanent drilling into the factory bodywork?',
        answer: 'Whenever possible, we utilize factory underside mounting holes, existing chassis brackets, and 3M VHB industrial automotive adhesive tapes. If structural fasteners are required for high-downforce spoilers or splitters, we drill precision holes treated with anti-rust zinc primers to protect factory metal.',
      },
      {
        question: 'Can you upgrade standard headlights and taillights to modern LED / Matrix projector units?',
        answer: 'Yes. We install OEM-style LED projector headlights, sequential dynamic turn signal taillights, and laser fog light conversions with plug-and-play wiring harnesses and CAN-bus decoders to eliminate dashboard bulb failure warnings.',
      },
      {
        question: 'Can aftermarket exhaust tips and diffusers be safely installed without heat damage?',
        answer: 'Yes. We custom weld stainless steel exhaust tips and install heat-reflective thermal insulation shielding behind rear bumpers and diffusers to ensure hot exhaust gases never melt or discolor aftermarket aero parts.',
      },
      {
        question: 'Do your modifications comply with local Islamabad traffic inspection regulations?',
        answer: 'Yes. We ensure all aerodynamic body components are securely bolted, do not exceed legal track width boundaries, and maintain proper ground clearance for safe navigation over twin-city speed breakers and ramp inclines.',
      },
    ],
    seo: {
      seoTitle: 'Car Body Modification & Body Kit Installation Islamabad | HyperTune',
      metaDescription: 'Custom car body modification studio in Islamabad & Rawalpindi. Body kits, wide body fitment, spoilers, front lips, diffusers & carbon fiber parts.',
      h1Heading: 'Car Body Modification & Body Kit Studio in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Modification Islamabad',
        'Car Customization Rawalpindi',
        'Body Kit Installation Islamabad',
        'Wide Body Kit',
        'Spoiler Installation',
        'Front Lip Installation',
        'Side Skirts',
        'Rear Diffuser',
        'Performance Body Parts'
      ],
      keywordParagraph: 'Upgrade your vehicle with expert Car Body Modification and Body Kit Installation in Islamabad & Rawalpindi. HyperTune Garage specializes in sports car modifications, wide body kits, spoilers, front lips, side skirts, rear diffusers, carbon fiber body parts, and aggressive aerodynamic styling.',
    },
  },

  {
    id: 'car-ac-repair',
    slug: 'car-ac-repair',
    title: 'AC Repair & Electrical Specialist',
    shortDesc: 'Automated R134a/R1234yf refrigerant recovery & recharge, cooling coil leak detection, compressor overhaul, climate control servicing, ECU module programming, and computerized auto electrical wiring diagnostics in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage provides comprehensive, master-level Automotive Air Conditioning & Electrical System repair in Islamabad & Rawalpindi. We combine automated digital AC refrigerant recovery/recharge stations, dry nitrogen pressure leak testing, and electronic halogen detectors with certified master auto-electrician diagnostics utilizing digital oscilloscopes, CAN-bus analyzers, and factory diagnostic computers to solve cooling loss, compressor noise, evaporator coil leaks, parasitic battery drains, short circuits, and electronic sensor glitches.',
    subServices: [
      'Automated R134a / R1234yf Refrigerant Recharge',
      'AC Compressor & Clutch Overhaul',
      'Evaporator / Cooling Coil Leak Repair & Replacement',
      'Computerized Auto Electrical & Wiring Diagnostics',
      'ECU & BCM Module Coding & Programming',
      'Alternator & Starter Motor Rebuild',
      'Parasitic Battery Drain Diagnostics',
      'Cabin Air Filter & Antibacterial Ozone Vent Disinfection'
    ],
    subServicePrices: [
      { name: 'Standard AC Gas Recharge & Leak Audit', price: 'PKR 6,000 to 12,000' },
      { name: 'Compressor & Cooling Coil Overhaul', price: 'PKR 18,000 to 45,000' },
      { name: 'Computerized Electrical Diagnostic & Wiring Trace', price: 'PKR 5,000 to 25,000' },
      { name: 'ECU Coding, Alternator & Starter Overhaul', price: 'PKR 15,000 to 65,000' }
    ],
    category: 'electrical',
    icon: 'Wind',
    image: images.serviceElectrical,
    priceRange: 'PKR 5,000 - PKR 65,000',
    estimatedTime: '2 - 8 Hours',
    isFeatured: true,
    symptoms: [
      'AC blowing warm or humid air during intense summer temperatures',
      'Loud clicking or grinding noises when AC compressor clutch is engaged',
      'Musty, mildew odor blowing out of dashboard air registers',
      'Battery going flat overnight due to unseen parasitic electrical drain',
      'Power windows, central locking, digital cluster screens, or headlights malfunctioning',
      'Alternator warning light or battery icon illuminated on instrument cluster',
      'Engine cranking slowly or refusing to turn over when ignition is pressed',
      'Water leaking into front passenger footwell area',
    ],
    keyBenefits: [
      'Ice-cold cabin cooling restored to factory sub-zero standards (sub-5°C vent output)',
      '100% pure high-grade R134a and R1234yf synthetic refrigerant used (no contaminated gases)',
      'Dry nitrogen pressure testing pinpoints microscopic leaks without component damage',
      'Master certified auto-electricians with multi-channel oscilloscopes prevent short circuits & fire risks',
      'Pinpoint wiring trace without hacking or damaging factory wire harnesses',
      '12-month warranty on AC compressor replacements and major electrical overhauls',
    ],
    whyChooseUs: [
      'Automated digital AC recovery, vacuuming, and oil injection station',
      'Dry nitrogen pressure testing and electronic halogen leak detectors',
      'Master auto-electricians with German & Japanese electrical certifications',
      'Factory electrical schematics for Toyota, Honda, BMW, Mercedes & Audi',
      'Genuine OEM Denso, Valeo, and Bosch AC compressors and electrical parts in stock',
      '12-month written warranty on all major climate control and electrical repairs',
    ],
    processSteps: [
      { title: '1. Temperature, Pressure & Multi-Meter Audit', desc: 'Measure vent output temperature, dual-gauge refrigerant pressures, and quiescent milliamp battery draw.' },
      { title: '2. Nitrogen Pressure, UV Leak & Oscilloscope Test', desc: 'Pressurize AC lines with dry nitrogen to inspect cooling coil, and test sensor wave signals with digital oscilloscope.' },
      { title: '3. Deep Vacuum Evacuation & Circuit Isolation', desc: 'Pull 30-minute deep vacuum to eliminate line moisture, and isolate malfunctioning circuit branches using OEM wiring schematics.' },
      { title: '4. Precision Component Repair & PAG Recharge', desc: 'Rebuild compressor/alternator, repair wiring with military-grade heat shrink, and inject precision weighed pure R134a refrigerant.' },
      { title: '5. Full System Re-Scan & Ozone Disinfection', desc: 'Perform full electrical load test under headlights/AC, swap cabin micro-filter, and sanitize air ducts with antibacterial ozone.' },
    ],
    faqs: [
      {
        question: 'Why is my car AC blowing warm air even after a gas recharge?',
        answer: 'Refrigerant gas only escapes if there is a physical leak in the AC circuit — such as an oxidized aluminum cooling coil (evaporator), stone-damaged condenser, loose O-ring seal, or leaking compressor shaft seal. Recharging gas without fixing the leak guarantees failure within days. We pressure-test with dry nitrogen to pinpoint and repair leaks before recharging.',
      },
      {
        question: 'How long does a complete AC service, leak test, and gas refill take?',
        answer: 'A routine AC vacuum test, compressor oil injection, and precision refrigerant gas recharge takes 1 to 2 hours. If dashboard removal is necessary to replace an evaporator cooling coil, our technicians complete the entire teardown, replacement, and reassembly within 1 business day.',
      },
      {
        question: 'Why does my car battery discharge overnight even with a brand new battery?',
        answer: 'Overnight battery drain is caused by a parasitic electrical draw — an electronic control module, aftermarket tracker, infotainment amplifier, or interior door latch switch failing to enter low-power sleep mode after the ignition is switched off. We isolate the offending circuit using precision milliamp clamps.',
      },
      {
        question: 'Can you fix automotive wiring shorts without replacing the entire dashboard harness?',
        answer: 'Yes. Our senior auto-electricians trace wiring breaks, melted circuits, and rodent damage using digital oscilloscopes and factory wiring schematics. We solder repairs with military-grade splice crimps, heat-shrink insulation, and flame-retardant loom tape without unnecessary complete harness replacement.',
      },
      {
        question: 'What type of AC compressor oil and refrigerant gas do you use?',
        answer: 'We strictly use 100% pure virgin R134a and R1234yf refrigerants along with OEM-specified polyalkylene glycol (PAG) synthetic compressor oils (PAG 46, PAG 100) or non-conductive POE oils for hybrid/EV electric scroll compressors.',
      },
      {
        question: 'Why does my car AC smell foul or musty when turned on in the morning?',
        answer: 'Musty odors are caused by mold and bacterial mildew growing on the damp evaporator coil fins inside the dark ventilation box. We perform high-temperature steam duct cleaning, install an antibacterial activated charcoal cabin filter, and run an ozone gas purification cycle to eliminate odors.',
      },
    ],
    seo: {
      seoTitle: 'AC Repair & Electrical Specialist Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Specialized car AC repair, R134a gas recharge, compressor overhaul, cooling coil replacement, ECU programming, and auto electrical wiring diagnostics in Islamabad & Rawalpindi. 100% cooling guarantee.',
      h1Heading: 'AC Repair & Electrical Specialist',
      targetKeywords: [
        'AC Repair & Electrical Specialist',
        'Car AC repair Islamabad',
        'Auto electrician Islamabad',
        'Car AC gas refill Rawalpindi',
        'Car wiring repair Rawalpindi',
        'Car compressor repair',
        'Cooling coil replacement',
        'Car battery drain fix',
        'Alternator repair Islamabad',
        'ECU repair Pakistan'
      ],
      keywordParagraph: 'Restore icy sub-zero cabin comfort and flawless vehicle electronics with certified AC Repair & Electrical Specialist services at HyperTune Garage in Islamabad & Rawalpindi. Specializing in R134a gas recharging, compressor overhauls, battery drain traces, CAN-bus repairs, and OEM module coding.',
    },
  },

  {
    id: 'cooling-fuel-exhaust',
    slug: 'cooling-fuel-exhaust',
    title: 'Cooling System, Fuel Injection & Exhaust',
    shortDesc: 'Ultrasonic fuel injector cleaning, radiator flushing, water pump replacement, thermostat testing, and catalytic converter cleaning in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage provides specialized Engine Cooling, Fuel Delivery, and Exhaust System maintenance in Islamabad & Rawalpindi. We prevent catastrophic engine overheating, rough idling, fuel waste, and catalytic converter clogging using ultrasonic injector testing benches and closed-loop radiator flushing rigs.',
    subServices: ['Ultrasonic Fuel Injector Cleaning & Flow Match', 'Radiator Chemical Flush & Coolant Swap', 'Water Pump & Thermostat Replacement', 'Catalytic Converter Chemical Wash & O2 Sensors'],
    subServicePrices: [
      { name: 'Injector Cleaning & Chemical Radiator Flush', price: 'PKR 8,000 - 18,000' },
      { name: 'Water Pump, Thermostat & Cooling Overhaul', price: 'PKR 15,000 - 55,000' }
    ],
    category: 'engine',
    icon: 'Cpu',
    image: images.serviceCooling,
    priceRange: 'PKR 8,000 - PKR 55,000',
    estimatedTime: '2 - 6 Hours',
    isFeatured: false,
    symptoms: [
      'Engine temperature gauge climbing toward red mark in city traffic',
      'Engine jerking, hesitation during acceleration, or poor fuel economy',
      'Rotten egg sulfur smell or black smoke from exhaust tailpipe',
      'Sweet-smelling coolant puddles underneath vehicle engine bay',
    ],
    keyBenefits: [
      'Prevents warped cylinder heads, blown head gaskets, and engine seizures',
      'Ultrasonic injector pulse spray pattern restores crisp throttle response',
      'Restores 2 to 4 km/L fuel economy lost to clogged injectors',
      'Cleans catalytic converter to clear P0420 catalyst efficiency codes',
    ],
    whyChooseUs: [
      'Computerized multi-injector flow testing bench with dynamic spray comparison',
      'Closed-loop pressure radiator flush machine with organic long-life coolant',
      'Original OEM water pumps, dual-stage thermostats, and radiator caps',
      'Emission and exhaust backpressure diagnostic gauges',
    ],
    processSteps: [
      { title: '1. Radiator & Pressure Cap Test', desc: 'Pressurize cooling system to 1.5 bar to inspect hoses, radiator core, and cap seal.' },
      { title: '2. Ultrasonic Injector Cleaning', desc: 'Remove fuel injectors and bathe in ultrasonic cleaning tank while pulsing nozzles.' },
      { title: '3. Spray Pattern & Flow Rate Balancing', desc: 'Mount injectors on test bench to verify equal flow volumes across all cylinders.' },
      { title: '4. Chemical Radiator Flush & Purge', desc: 'Flush old rust/scale from engine block and refill with genuine 50/50 OAT coolant.' },
      { title: '5. Catalytic Converter Foam Wash', desc: 'Inject specialized decarb cleaner into exhaust manifold to dissolve carbon deposits.' },
    ],
    faqs: [
      {
        question: 'Why should I use organic OAT coolant instead of tap water in my radiator?',
        answer: 'Tap water boils at 100°C and contains hard minerals that corrode aluminum cylinder heads, dissolve water pump impellers, and coat radiator tubes in insulating limescale. High-performance Organic Acid Technology (OAT) coolant elevates boiling temperature to 108°C under pressure and protects against rust and cavitation.',
      },
      {
        question: 'How often should fuel injectors be ultrasonically cleaned and flow-tested?',
        answer: 'Due to variable fuel quality, high sulfur content, and dust in Pakistan, we recommend ultrasonic fuel injector cleaning every 30,000 to 40,000 km. We bathe injectors in heated ultrasonic tanks while pulsing nozzles, then measure spray patterns and flow balance on a digital test bench.',
      },
      {
        question: 'What causes a choked catalytic converter and how does HyperTune restore exhaust flow?',
        answer: 'Catalytic converters choke with unburnt carbon deposits and oil ash from dirty spark plugs or worn valve seals, causing sluggish acceleration and check engine codes (P0420). We use pressurized chemical decarbonizing foam to dissolve carbon build-up without requiring costly converter replacement.',
      },
      {
        question: 'What causes coolant boiling and bubbling in the expansion reservoir?',
        answer: 'Coolant boiling is typically caused by a blown head gasket allowing high-pressure exhaust gas into the water jacket, a defective radiator pressure cap failing to hold 0.9 to 1.1 bar pressure, or air pockets trapped inside the cooling circuit. We perform chemical combustion leak tests to verify head gasket integrity.',
      },
      {
        question: 'Why does my car produce black, blue, or white exhaust smoke?',
        answer: 'Black smoke indicates an overly rich air-fuel mixture caused by clogged fuel injectors, a faulty mass airflow (MAF) sensor, or dirty air filter. Blue smoke indicates engine oil burning from worn piston rings or valve stem seals. Thick sweet-smelling white smoke indicates coolant entering combustion chambers from a blown head gasket.',
      },
      {
        question: 'Can a faulty oxygen sensor or stuck thermostat cause high fuel consumption?',
        answer: 'Yes. An oxygen sensor reading falsely lean causes the engine computer to inject excessive fuel, increasing fuel consumption by 20% to 30%. Similarly, a thermostat stuck open prevents the engine from reaching its 90°C operating temperature, keeping the ECU in cold enrichment mode permanently.',
      },
    ],
    seo: {
      seoTitle: 'Radiator Flush, Injector Cleaning & Exhaust Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Specialized radiator flushing, ultrasonic fuel injector cleaning, water pump replacement, and catalytic converter care in Islamabad & Rawalpindi.',
      h1Heading: 'Engine Cooling, Fuel Injection & Exhaust Services in Islamabad & Rawalpindi',
      targetKeywords: [
        'Radiator flush Islamabad',
        'Injector cleaning Rawalpindi',
        'Car overheating fix',
        'Catalytic converter cleaning',
        'Water pump replacement Islamabad',
        'Fuel pump repair'
      ],
      keywordParagraph: 'Protect your engine from overheating and restore optimal fuel economy with professional Cooling System, Fuel Injector Cleaning, and Exhaust Care at HyperTune Garage in Islamabad & Rawalpindi.',
    },
  }
];

export const servicesData: ServiceItem[] = baseServicesData.map((s) => {
  const variant = serviceImageVariants[s.image];
  const meta = getRouteMetadata(`/services/${s.slug}/`);
  return {
    ...s,
    imageSmall: variant?.small || s.image,
    imageSrcSet: variant?.srcSet,
    seo: {
      ...s.seo,
      seoTitle: meta ? meta.title : (s.seo?.seoTitle || `${s.title} in Islamabad & Rawalpindi | HyperTune Garage`),
      metaDescription: meta ? meta.description : (s.seo?.metaDescription || s.shortDesc),
      h1Heading: s.seo?.h1Heading || s.title,
    },
  };
});

/**
 * Exact or alias lookup helper that returns undefined if no valid match is found
 */
export function findServiceBySlug(slug?: string): ServiceItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  if (!normalized) return undefined;

  // Direct slug match
  const direct = servicesData.find((s) => s.slug === normalized || s.id === normalized);
  if (direct) return direct;

  // Exact known alias mappings
  const aliases: Record<string, string> = {
    'paint-protection-film': 'paint-protection-film-ppf',
    'ppf': 'paint-protection-film-ppf',
    'ppf-coating': 'paint-protection-film-ppf',
    'ceramic-coating': 'car-detailing',
    'detailing': 'car-detailing',
    'vinyl-wrap': 'vehicle-wrap',
    'car-wrap': 'vehicle-wrap',
    'denting-painting': 'body-repair-paint',
    'body-repair': 'body-repair-paint',
    'car-modification': 'body-modification',
    'body-kit': 'body-modification',
    'engine-repair': 'engine-services',
    'engine-overhaul': 'engine-services',
    'car-servicing': 'maintenance-servicing',
    'oil-change': 'maintenance-servicing',
    'suspension': 'brake-suspension-steering',
    'brakes': 'brake-suspension-steering',
    'wheel-alignment': 'brake-suspension-steering',
    'gearbox-repair': 'transmission-drivetrain',
    'cvt-repair': 'transmission-drivetrain',
    'car-ac-electrical': 'car-ac-repair',
    'electrical-electronics': 'car-ac-repair',
    'ac-repair': 'car-ac-repair',
    'car-ac': 'car-ac-repair',
    'ac-gas-refill': 'car-ac-repair',
    'r134a-gas-recharge': 'car-ac-repair',
    'auto-electrician': 'car-ac-repair',
    'car-wiring': 'car-ac-repair',
    'radiator-repair': 'cooling-fuel-exhaust',
    'injector-cleaning': 'cooling-fuel-exhaust',
    'pre-purchase-inspection': 'inspection-diagnostics',
    'car-diagnostic': 'inspection-diagnostics',
  };

  if (aliases[normalized]) {
    const targetId = aliases[normalized];
    return servicesData.find((s) => s.id === targetId || s.slug === targetId);
  }

  return undefined;
}

/**
 * Safe helper function that always returns a ServiceItem (with fallback to default if not found)
 */
export function getServiceBySlug(slug?: string): ServiceItem {
  const found = findServiceBySlug(slug);
  if (found) return found;
  return servicesData[0];
}

