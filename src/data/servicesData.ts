import { ServiceItem } from '../types';
import { images } from './images';

export const servicesData: ServiceItem[] = [
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
        answer: 'PPF is a thick elastomeric TPU film that physically absorbs stone chips. The clear topcoat self-heals minor scratches and swirl marks when exposed to heat or sunlight.',
      },
      {
        question: 'Will PPF damage my original paint when removed?',
        answer: 'Not at all! We use premium imported acrylic adhesives that peel away cleanly with zero sticky residue, preserving original factory paint.',
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
        answer: 'Full detailing includes exterior paint decontamination, multi-stage machine paint correction, 9H ceramic coating layer, deep interior steam cleaning, leather conditioning, engine bay wash, and headlight restoration.',
      },
      {
        question: 'How long does 9H Ceramic Coating last?',
        answer: 'Our professional 9H ceramic glass coatings provide extreme water beading and high-gloss protection for 2 to 5 years depending on maintenance.',
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
      '12-Month / 20,000 km Written Warranty on complete engine rebuilds',
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
        question: 'How do I know if my engine needs a repair or a full overhaul?',
        answer: 'Our technicians conduct a 4-point diagnostic test including cylinder compression, leak-down test, oil pressure check, and scope camera inspection. If wear is limited to gaskets or sensors, we perform targeted repair; if internal pistons or bearings are damaged, a full rebuild is recommended.',
      },
      {
        question: 'What is included in HyperTune Garage Engine Maintenance & Overhaul?',
        answer: 'Engine overhaul includes block resurfacing, precision cylinder honing, new OEM pistons, rings, bearings, timing chain replacement, valve clearance adjustment, and ultrasonic fuel injector servicing.',
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
    shortDesc: 'Computerized dealer-level OBD2 diagnostic scanning and detailed 150+ point pre-purchase car inspection in Islamabad & Rawalpindi. Get an honest digital health report covering engine compression, transmission codes, accident body damage, paint thickness microns, and electrical diagnostics before buying any car.',
    fullDesc: 'Buying a used car in Pakistan without a thorough professional inspection can lead to hidden financial nightmares—such as flood damage, rolled-back odometers, concealed accident body repairs, or failing hybrid batteries. HyperTune Garage offers dealer-grade 150+ Point Pre-Purchase Car Inspections and Computerized Diagnostic Scanning across Islamabad and Rawalpindi. We provide an un-biased, comprehensive digital report complete with paint meter micron readings, camera scope cylinder checks, and ECU diagnostic logs.',
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
      '150+ Point Comprehensive Inspection Report sent directly to your phone',
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
        answer: 'Yes! We measure panel paint thickness in microns to identify body filler (poti), inspect factory spot welds, check frame rail straightness, and verify airbag module deployment history.',
      },
      {
        question: 'Do you offer mobile on-site pre-purchase car inspections in Islamabad/Rawalpindi?',
        answer: 'We strongly recommend bringing the vehicle to our workshop where we can lift it on hydraulic ramps for undercarriage checks, but we also offer mobile inspection teams across Islamabad & Rawalpindi upon request.',
      },
    ],
    seo: {
      seoTitle: 'Car Diagnostics & Pre-Purchase Inspection | HyperTune',
      metaDescription: 'Dealer-level computer diagnostics & 150+ point pre-purchase car inspection in Islamabad & Rawalpindi. Digital health report & paint thickness audit.',
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
      keywordParagraph: 'Make informed automotive decisions with dealer-level Car Diagnostics in Islamabad and comprehensive Pre Purchase Car Inspection in Rawalpindi. HyperTune Garage utilizes advanced OBD2 Diagnostic Scan and computerized car scan rigs to audit all control modules for engine fault codes, transmission issues, and electrical warnings. Before buying a used car in Pakistan, rely on our detailed used car inspection report—including paint meter car inspection micron readings and cylinder scope checks—for a complete car health report in G-8 Islamabad.',
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
        answer: 'We recommend 0W-20 for modern Japanese hybrid cars, and 5W-30 or 5W-40 fully synthetic oils for turbo gasoline and European vehicles to withstand summer ambient heat exceeding 45°C in Islamabad and Rawalpindi.',
      },
      {
        question: 'What is included in the 50-Point Inspection?',
        answer: 'The audit covers brake pad thickness, battery cold-cranking amps, suspension play, coolant freezing/boiling point, transmission fluid condition, drive belt tension, tire tread depth, and computerized diagnostic fault scan.',
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
      keywordParagraph: 'Ensure your vehicle stays in peak condition with our top-rated Oil Change in Islamabad and complete Periodic Maintenance in Rawalpindi. At HyperTune Garage, we deliver premium Car Maintenance in Pakistan using 100% authentic imported lubricants for every Synthetic Oil Change in Islamabad. Our comprehensive periodic service includes genuine oil filter installation, Spark Plug Replacement, air/cabin filter renewal, Liqui Moly oil changes, and a thorough 50 Point Car Inspection. Visit our modern facility for Car Servicing in G-8 Islamabad to enjoy long-term reliability and complete Preventive Car Care for all Asian, Japanese, and European car models.',
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
        question: 'How often should I align my car wheels in Islamabad & Rawalpindi?',
        answer: 'We recommend 3D laser wheel alignment every 10,000 km or immediately after hitting deep road potholes or installing new tires/suspension parts.',
      },
      {
        question: 'What causes squealing brake noises?',
        answer: 'Brake squeal occurs due to worn friction pads, glazed brake rotors, or missing anti-squeal shims. We inspect pad thickness, rotor runout, and install premium ceramic brake pads with anti-vibration lubricant.',
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
        question: 'Why does Honda Vezel or Grace transmission jerk during summer?',
        answer: 'Honda Dual-Clutch (DCT) gearboxes experience clutch actuator fluid breakdown in Pakistani heat. We perform a specialized DOT4 clutch fluid flush and computerized actuator relearn to restore smooth gear shifts.',
      },
      {
        question: 'How often should CVT transmission fluid be changed in Pakistan?',
        answer: 'We recommend replacing CVT fluid and internal filters every 40,000 km to prevent belt slippage and costly transmission failure.',
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
        question: 'Will a vehicle wrap damage my car’s original paint?',
        answer: 'No! Automotive cast vinyl wraps protect your original paint from UV rays and road debris. When removed professionally, the wrap leaves no adhesive residue and leaves paint intact.',
      },
      {
        question: 'How long does a car wrap last in Pakistan?',
        answer: 'High-quality cast vinyl wraps (Avery/3M) last 3 to 5 years under Pakistani sun when cared for properly.',
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
        question: 'How do you guarantee an exact paint color match?',
        answer: 'We use digital spectrophotometers to analyze your car’s current paint tint and mix custom Standox European paint formulas to guarantee 100% seamless color matching.',
      },
      {
        question: 'Do you help with car insurance collision claims?',
        answer: 'Yes, we assist with insurance claim estimates, surveyor inspections, and repairs for all major insurance companies in Pakistan.',
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
        question: 'What body kit modifications do you install?',
        answer: 'We supply and install front lips, side skirts, rear diffusers, trunk spoilers, carbon fiber hoods, wide body kits, sports bumpers, and custom grilles for sedans, sports cars, and SUVs.',
      },
      {
        question: 'Can you custom paint match body kits to my vehicle?',
        answer: 'Yes! All body kit parts are painted in our computerized thermal spray booth to match your car’s exact paint shade.',
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
    id: 'hybrid-ev-battery-services',
    slug: 'hybrid-ev-battery-services',
    title: 'Hybrid & EV Battery Services',
    shortDesc: 'State-of-the-art hybrid battery diagnostic, cell balancing, reconditioning, and replacement laboratory in Islamabad & Rawalpindi for Toyota Prius, Aqua, Vezel, Insight, and Lexus hybrids.',
    fullDesc: 'HyperTune Garage operates a dedicated Hybrid & EV Battery Diagnostics & Cell Reconditioning Laboratory serving vehicle owners across Islamabad and Rawalpindi. We perform computerized cell internal resistance testing, individual NiMH and Li-ion module balancing, high-voltage cooling fan cleaning, inverter coolant flushing, and genuine OEM cell replacements with warranty.',
    subServices: ['Cell Balancing & Health Audit', 'Hybrid Battery Cell Replacement', 'High Voltage Cooling Fan Cleaning', 'Inverter & Converter Servicing'],
    subServicePrices: [
      { name: 'Cell Balancing & Health Audit', price: 'PKR 15,000' },
      { name: 'Cell Replacement & Reconditioning', price: 'PKR 45,000 to 180,000' }
    ],
    category: 'hybrid',
    icon: 'Zap',
    image: images.serviceCooling,
    priceRange: 'PKR 15,000 - PKR 180,000',
    estimatedTime: '1 - 2 Days',
    isFeatured: true,
    symptoms: [
      'Red Triangle of Death or Hybrid System Warning Light illuminated on dashboard',
      'Engine running continuously with rapid battery charge level fluctuations',
      'Reduced fuel economy (km/l dropping significantly)',
      'High voltage cooling fan running loudly in backseat area',
    ],
    keyBenefits: [
      'Computerized computerized cell charge/discharge balancing restores up to 90% capacity',
      'Fraction of the cost compared to dealership complete battery replacement',
      'Genuine high-grade Japanese replacement cells with performance warranty',
      'High-voltage inverter cooling maintenance prevents catastrophic inverter failure',
    ],
    whyChooseUs: [
      'Certified high-voltage hybrid electrical safety technicians',
      'Automated multi-channel computerized battery load tester rigs',
      'Dust-free clean cell assembly laboratory',
      'Comprehensive warranty provided on cell reconditioning and packs',
    ],
    processSteps: [
      { title: '1. Computerized Hybrid ECU Diagnostics', desc: 'Read high-voltage battery ECU error codes, block voltage deltas, and temperature sensors.' },
      { title: '2. Battery Pack Disassembly & Safety Isolation', desc: 'Isolate high-voltage service plug and disassemble pack in clean room laboratory.' },
      { title: '3. Individual Cell Internal Resistance Test', desc: 'Test each cell module under load to identify weak or shorted cells.' },
      { title: '4. Module Replacement & Balance Cycle', desc: 'Replace faulty cells and perform multi-cycle automated charge/discharge balancing.' },
      { title: '5. Cooling System Cleaning & Installation', desc: 'Clean high-voltage cooling duct fan, clear error codes, and perform road test.' },
    ],
    faqs: [
      {
        question: 'Can individual hybrid battery cells be replaced without buying a full battery?',
        answer: 'Yes! Our diagnostic equipment identifies the exact weak cells, allowing us to replace only bad modules and balance the pack at a fraction of dealership prices.',
      },
      {
        question: 'How often should hybrid battery cooling fans be cleaned?',
        answer: 'We recommend cleaning the cooling fan and air duct every 20,000 km to prevent thermal degradation of hybrid battery cells.',
      },
    ],
    seo: {
      seoTitle: 'Hybrid Battery Repair & Cell Reconditioning Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Expert hybrid battery repair, cell balancing, and replacement laboratory in Islamabad & Rawalpindi for Toyota, Honda, and Nissan hybrids.',
      h1Heading: 'Hybrid Battery Diagnostic & Reconditioning Laboratory',
      targetKeywords: [
        'Hybrid battery repair Islamabad',
        'Hybrid battery Rawalpindi',
        'Prius battery repair',
        'Aqua hybrid battery',
        'Vezel hybrid battery',
        'Hybrid cell balancing',
        'Lexus hybrid battery service'
      ],
      keywordParagraph: 'Restore hybrid battery performance and fuel efficiency with expert Hybrid Battery Repair, Cell Balancing, and High-Voltage Diagnostics at HyperTune Garage in Islamabad & Rawalpindi.',
    },
  },

  {
    id: 'car-ac-electrical',
    slug: 'car-ac-electrical',
    title: 'Car AC & Auto Electrical Systems',
    shortDesc: 'Precision car AC gas recharging, compressor overhaul, cooling coil leak repair, and computerized wiring diagnostics in Islamabad & Rawalpindi for all Japanese, European, and local vehicles.',
    fullDesc: 'HyperTune Garage provides full-service Automotive Air Conditioning & Electrical System repair in Islamabad & Rawalpindi. We utilize automated AC refrigerant recovery/recharge stations, digital leak detectors, and oscilloscope wiring analysis to solve cooling loss, compressor noise, electrical short circuits, and sensor glitches.',
    subServices: ['AC Gas Recharging (R134a / R1234yf)', 'Compressor & Clutch Overhaul', 'Evaporator / Cooling Coil Leak Repair', 'Computerized Electrical & Wiring Trace'],
    subServicePrices: [
      { name: 'AC Service & Gas Top-Up', price: 'PKR 5,000 to 12,000' },
      { name: 'Compressor & Cooling Coil Overhaul', price: 'PKR 18,000 to 45,000' }
    ],
    category: 'electrical',
    icon: 'Wind',
    image: images.serviceElectrical,
    priceRange: 'PKR 5,000 - PKR 45,000',
    estimatedTime: '1 Day',
    isFeatured: true,
    symptoms: [
      'AC blowing warm or tepid air during hot summer weather',
      'Squealing or grinding noise when AC compressor engages',
      'Unpleasant musty odor coming from dashboard air vents',
      'Intermittent battery drain, blown fuses, or malfunctioning lights and windows',
    ],
    keyBenefits: [
      'Ice-cold cabin cooling restored to factory sub-zero standards',
      '100% pure high-grade R134a and R1234yf synthetic refrigerant used',
      'Nitrogen pressure testing identifies microscopic leaks without damaging components',
      'Professional electrical diagnosis prevents short circuit risks',
    ],
    whyChooseUs: [
      'Automated digital AC recovery and recharge station',
      'Electronic halogen leak detectors and UV dye inspection',
      'Genuine OEM AC compressors, expansion valves, and condensers in stock',
      'Certified auto-electricians with oscilloscope diagnostic tools',
    ],
    processSteps: [
      { title: '1. Temperature & Pressure Gauge Audit', desc: 'Measure vent output temperature and high/low side system refrigerant pressures.' },
      { title: '2. Nitrogen Pressure & UV Leak Detection', desc: 'Pressurize system with dry nitrogen gas to pinpoint evaporator or hose leaks.' },
      { title: '3. Vacuum Evacuation & Moisture Removal', desc: 'Pull deep vacuum to boil off moisture and contaminants inside cooling lines.' },
      { title: '4. PAG Oil & Refrigerant Automated Recharge', desc: 'Inject fresh PAG compressor oil and exact weight of pure R134a refrigerant.' },
      { title: '5. Cabin Filter Swap & Odor Disinfection', desc: 'Swap cabin air micro-filter and perform antibacterial ozone vent treatment.' },
    ],
    faqs: [
      {
        question: 'Why is my car AC blowing warm air even after gas top-up?',
        answer: 'A simple gas top-up will leak out if there is a pinhole leak in the cooling coil, condenser, or compressor seals. We perform nitrogen pressure testing to locate and repair the leak permanently.',
      },
      {
        question: 'How long does a car AC overhaul take?',
        answer: 'Standard AC service and gas recharge takes 1 to 2 hours. A full dashboard dashboard cooling coil replacement is completed within 1 day.',
      },
    ],
    seo: {
      seoTitle: 'Car AC Repair & Auto Electrical Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Complete car AC gas recharging, compressor repair, cooling coil replacement, and electrical diagnostics in Islamabad & Rawalpindi.',
      h1Heading: 'Car AC Repair & Automotive Electrical Specialist',
      targetKeywords: [
        'Car AC repair Islamabad',
        'Car AC gas Rawalpindi',
        'Car compressor repair',
        'Cooling coil replacement',
        'Auto electrician Islamabad',
        'Car wiring repair Rawalpindi'
      ],
      keywordParagraph: 'Beat the summer heat with expert Car AC Repair, Refrigerant Gas Recharging, Compressor Overhaul, and Wiring Diagnostics in Islamabad & Rawalpindi at HyperTune Garage.',
    },
  },

  {
    id: 'car-ac-repair',
    slug: 'car-ac-repair',
    title: 'Air Conditioning (AC) & R134a Gas Recharge',
    shortDesc: 'Automated refrigerant recovery, cooling coil leak detection, compressor overhaul, and climate control servicing in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage provides precision Automotive Air Conditioning repair and R134a / R1234yf refrigerant gas recharging in Islamabad and Rawalpindi. We utilize automated digital recovery stations, electronic halogen leak detectors, and nitrogen pressure testing to solve warm air blowing, compressor clutch failure, and evaporator leaks.',
    subServices: ['Automated R134a / R1234yf Refrigerant Recharge', 'Compressor Rebuild & Clutch Repair', 'Evaporator / Cooling Coil Leak Fix', 'Odor Removal & Antibacterial Vent Ozone Treatment'],
    subServicePrices: [
      { name: 'Standard AC Gas Top-Up & Audit', price: 'PKR 6,000 - 12,000' },
      { name: 'Compressor & Evaporator Coil Overhaul', price: 'PKR 18,000 - 45,000' }
    ],
    category: 'ac',
    icon: 'Wind',
    image: images.serviceElectrical,
    priceRange: 'PKR 6,000 - PKR 45,000',
    estimatedTime: '2 - 6 Hours',
    isFeatured: true,
    symptoms: [
      'AC blowing warm or humid air during summer temperatures',
      'Loud clicking or grinding noises when AC button is engaged',
      'Musty, mildew odor blowing out of dashboard air registers',
      'Water leaking into front passenger footwell area',
    ],
    keyBenefits: [
      'Ice-cold vent temperatures restored to sub-zero factory specs',
      '100% pure high-purity R134a synthetic refrigerant (no contaminated gases)',
      'Digital halogen leak detection prevents recurring gas leaks',
      'Fresh PAG lubricant prevents expensive compressor seizing',
    ],
    whyChooseUs: [
      'Automated digital AC recovery, vacuuming, and oil injection station',
      'Dry nitrogen pressure testing for pinhole leak diagnosis',
      'Genuine OEM Denso and Valeo compressors and condenser units in stock',
      '12-month warranty on AC compressor replacements and coil overhauls',
    ],
    processSteps: [
      { title: '1. Vent Temp & Pressure Testing', desc: 'Measure vent output temperature and dual-gauge high/low pressure levels.' },
      { title: '2. Nitrogen Pinhole Leak Test', desc: 'Pressurize AC lines with dry nitrogen to inspect cooling coil and condenser.' },
      { title: '3. Deep Vacuum Evacuation', desc: 'Pull 30-minute deep vacuum to eliminate all moisture and atmospheric air.' },
      { title: '4. PAG Oil & Exact Gas Recharge', desc: 'Inject synthetic compressor oil and precision weighed R134a refrigerant.' },
      { title: '5. Vent Ozone Disinfection', desc: 'Sanitize ducts with antibacterial ozone treatment and install new cabin filter.' },
    ],
    faqs: [
      {
        question: 'Why does my car AC lose cooling after only a few weeks?',
        answer: 'Gas loss indicates a microscopic leak in the cooling coil, condenser, or rubber O-rings. We perform nitrogen pressure testing to locate and permanently repair the leak before refilling.',
      },
      {
        question: 'How long does a complete AC service take?',
        answer: 'Standard AC gas recharging and pressure testing takes 1 to 2 hours. Dashboard removal for evaporator cooling coil replacement takes 1 business day.',
      },
    ],
    seo: {
      seoTitle: 'Car AC Repair & R134a Gas Recharge Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Specialized car AC repair, R134a gas recharging, compressor overhaul, and cooling coil replacement in Islamabad & Rawalpindi. 100% cooling guarantee.',
      h1Heading: 'Car AC Repair & Climate Control Specialists in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car AC repair Islamabad',
        'Car AC gas refill Rawalpindi',
        'Car compressor repair',
        'Cooling coil replacement',
        'Car AC service Islamabad',
        'R134a gas recharge'
      ],
      keywordParagraph: 'Restore icy sub-zero cabin comfort with professional Car AC Repair, R134a Gas Recharging, Compressor Overhauls, and Evaporator Leak Repairs in Islamabad and Rawalpindi at HyperTune Garage.',
    },
  },

  {
    id: 'electrical-electronics',
    slug: 'electrical-electronics',
    title: 'Auto Electrical & Electronics Diagnostics',
    shortDesc: 'Master auto electricians for ECU programming, wiring harness repairs, sensor diagnostics, alternator/starter overhaul, and battery health audits in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage features certified master auto electricians equipped with digital oscilloscopes, CAN-bus analyzers, and factory diagnostic computers in Islamabad and Rawalpindi. We diagnose complex parasitic battery drains, short circuits, airbag SRS faults, body control module (BCM) glitches, and blown fuse networks.',
    subServices: ['CAN-Bus & Wiring Harness Trace', 'ECU / BCM Module Repair & Coding', 'Alternator & Starter Motor Rebuild', 'Parasitic Battery Drain Diagnosis'],
    subServicePrices: [
      { name: 'Computerized Electrical Diagnostic Audit', price: 'PKR 5,000 - 15,000' },
      { name: 'Wiring Harness & Module Overhaul', price: 'PKR 15,000 - 65,000' }
    ],
    category: 'electrical',
    icon: 'Zap',
    image: images.serviceElectrical,
    priceRange: 'PKR 5,000 - PKR 65,000',
    estimatedTime: '2 - 8 Hours',
    isFeatured: false,
    symptoms: [
      'Battery going flat overnight due to unseen parasitic electrical drain',
      'Power windows, central locking, or digital cluster screens malfunctioning',
      'Alternator warning light or battery icon illuminated on dashboard',
      'Engine cranking slowly or refusing to turn over when ignition is pressed',
    ],
    keyBenefits: [
      'Pinpoint wiring trace without hacking or damaging factory wire harnesses',
      'Factory CAN-bus signal testing with multi-channel digital oscilloscope',
      'Genuine OEM relay, fuse, sensor, and starter replacements',
      'Prevents fire hazards caused by improper aftermarket accessory wiring',
    ],
    whyChooseUs: [
      'Master auto-electricians with German & Japanese electrical certifications',
      'Factory electrical schematics for Toyota, Honda, BMW, Mercedes & Audi',
      'Thermal imaging cameras to detect overheating relays and resistance hotspots',
      'Clean solder and heat-shrink terminal insulation standards',
    ],
    processSteps: [
      { title: '1. Multi-Meter & Parasitic Amp Draw Test', desc: 'Measure milliamp draw with vehicle in sleep mode to trace active battery drains.' },
      { title: '2. Oscilloscope Signal Audit', desc: 'Test sensor wave signals, CAN-bus communications, and voltage ripple.' },
      { title: '3. Harness Isolation & Trace', desc: 'Isolate malfunctioning circuit branch using factory wiring schematics.' },
      { title: '4. Component Repair or Replacement', desc: 'Rebuild alternator, replace faulty actuator, or repair broken wiring harness.' },
      { title: '5. Full System Re-Scan & Load Test', desc: 'Perform full electrical load test under headlights, AC, and high demand.' },
    ],
    faqs: [
      {
        question: 'Why does my car battery discharge overnight even with a new battery?',
        answer: 'This is caused by a parasitic drain — an electronic module (such as an audio amp, tracker, door lock actuator, or ECU) remaining active after the engine is turned off. We trace the exact circuit using milliamp meters.',
      },
      {
        question: 'Can you fix burnt wiring without replacing the whole harness?',
        answer: 'Yes! We isolate damaged wires, solder military-grade splices with heat-shrink insulation, and protect lines with flame-retardant conduit.',
      },
    ],
    seo: {
      seoTitle: 'Auto Electrical Repair & Wiring Specialists Islamabad & Rawalpindi | HyperTune',
      metaDescription: 'Expert auto electricians in Islamabad & Rawalpindi for CAN-bus diagnostics, battery drain testing, ECU wiring repair, alternator rebuilds & sensor fixes.',
      h1Heading: 'Auto Electrical & Electronics Specialists in Islamabad & Rawalpindi',
      targetKeywords: [
        'Auto electrician Islamabad',
        'Car wiring repair Rawalpindi',
        'Car battery drain fix',
        'Alternator repair Islamabad',
        'Starter motor repair',
        'ECU repair Pakistan'
      ],
      keywordParagraph: 'Solve tricky electrical issues with certified Auto Electrical & Wiring Diagnostics in Islamabad & Rawalpindi at HyperTune Garage. Specializing in battery drain traces, starter overhauls, CAN-bus repair, and OEM module coding.',
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
        question: 'Why should I use organic coolant instead of tap water in my radiator?',
        answer: 'Tap water contains minerals that create corrosion, rust, and scale inside the engine block, destroying water pumps and causing head gasket failure. Genuine coolant elevates the boiling point to 108°C and lubricates the pump.',
      },
      {
        question: 'How often should fuel injectors be ultrasonically cleaned?',
        answer: 'Due to local fuel quality in Pakistan, we recommend ultrasonic fuel injector cleaning and flow testing every 30,000 km for optimal fuel efficiency and throttle response.',
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
    'ac-repair': 'car-ac-repair',
    'car-ac': 'car-ac-repair',
    'ac-gas-refill': 'car-ac-repair',
    'auto-electrician': 'electrical-electronics',
    'car-wiring': 'electrical-electronics',
    'radiator-repair': 'cooling-fuel-exhaust',
    'injector-cleaning': 'cooling-fuel-exhaust',
    'pre-purchase-inspection': 'inspection-diagnostics',
    'car-diagnostic': 'inspection-diagnostics',
    'hybrid-battery': 'hybrid-ev-battery-services',
    'prius-battery': 'hybrid-ev-battery-services',
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

