import { BrandItem } from '../types';
import { images } from './images';
import { getRouteMetadata } from './metadataRegistry';

const baseBrandsData: BrandItem[] = [
  {
    id: 'bmw-specialist',
    slug: 'bmw-repair-islamabad',
    name: 'BMW Repair & Maintenance Specialist Islamabad',
    tagline: 'Computerized BMW Diagnostics, VANOS & Valvetronic Servicing, B48/B58 Engine Overhauls & ZF 8-Speed Fluid Service',
    logoBadge: 'BMW Specialist',
    heroImage: images.galleryBmwBrakes,
    overview: 'HyperTune Garage is an independent automotive workshop in Sector O-9, Islamabad serving Islamabad and Rawalpindi owners of BMW M-Power, xDrive, and core Series models (3 Series, 5 Series, 7 Series, X3, X5, X6, X7, M3, M5). Utilizing multi-brand computerized diagnostic scanners and compatible interfaces, our technicians perform targeted diagnostics, VANOS camshaft timing solenoid repairs, Valvetronic eccentric shaft servo motor calibration, cooling system thermostat replacements, oil leak repairs (valve cover, oil filter housing gasket), and ZF 8HP transmission servicing.',
    modelsCovered: [
      'BMW 3 Series (E46, E90, F30, G20 - 318i, 320i, 328i, 330e Hybrid, M340i)',
      'BMW 5 Series (E60, F10, G30 - 520i, 528i, 530e, 535i, 540i, M550i)',
      'BMW 7 Series (F01/F02, G11/G12 - 730Li, 740Li, 750Li, ActiveHybrid 7)',
      'BMW X-Series (X1, X3, X5 E70/F15/G05, X6, X7 xDrive)',
      'BMW M Performance (M2, M3, M4, M5, X5M with S55/S58/S63 V8 Biturbo)',
      'BMW 4 Series & 6 Series Gran Coupé',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Live Telemetry Interface',
    commonIssuesAndFixes: [
      {
        issue: 'BMW "Drivetrain Malfunction - Drive Moderately" & Limp Mode',
        solution: 'Computerized fault code analysis, electronic wastegate solenoid actuator testing, high-pressure fuel pump (HPFP) pressure test, and ignition coil/spark plug replacement.',
      },
      {
        issue: 'Oil Filter Housing & Valve Cover Gasket Leaks (N20, B48, N55)',
        solution: 'Manufacturer-spec gasket replacement, PCV integrated valve cover renewal, and thorough engine bay degreasing.',
      },
      {
        issue: 'VANOS Camshaft Solenoid & Valvetronic Servo Motor Failure',
        solution: 'Replacement of VANOS solenoids with BMW-spec parts, eccentric shaft wear inspection, and electronic limit learning calibration.',
      },
      {
        issue: 'ZF 8-Speed / 6-Speed Automatic Transmission Jerk & Sluggish Shifts',
        solution: 'Transmission fluid flush using ZF Lifeguard Fluid 8, pan filter replacement, and mechatronic adaptive shift recalibration.',
      },
    ],
    specializedServices: [
      'Computerized BMW Diagnostics & Control Module Coding',
      'B38 / B48 / B58 / N20 / N55 / S58 Engine Rebuilding & Timing Calibration',
      'ZF 6HP & 8HP Transmission Fluid Flush & Mechatronic Repair',
      'BMW Dynamic Drive & Adaptive M Air Suspension Calibration',
      'VANOS Camshaft Phasing & Valvetronic Eccentric Shaft Repair',
      'High-Pressure Fuel System (HPFP) & Injector Inspection',
      'TPU Paint Protection Film (PPF) for BMW M & X Series',
    ],
    pricingRange: 'PKR 6,000 - PKR 350,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'How do you run BMW computerized diagnostics in Islamabad?',
        answer: 'We use multi-brand computerized diagnostic scanners and compatible interfaces to inspect electrical, mechanical, and hybrid systems alongside live sensor telemetry.',
      },
      {
        question: 'How often should the ZF 8HP transmission fluid be changed on a BMW?',
        answer: 'While sometimes marketed as lifetime fill, ZF recommends transmission fluid and integrated pan-filter replacement every 60,000 to 80,000 km to help prevent solenoid wear, shift flares, and shuddering.',
      },
      {
        question: 'Can you fix oil leaks on BMW N20, B48, and B58 engines in Islamabad?',
        answer: 'Yes. We repair oil filter housing gasket, valve cover, oil pan, and turbocharger oil feed line leaks using Victor Reinz, Elring, and BMW-spec seals.',
      },
      {
        question: 'How do you fix BMW Drivetrain Malfunction warnings and boost pressure faults?',
        answer: 'We run full-system diagnostic scans to read DME shadow codes, test boost pressure solenoids, inspect electronic wastegate actuators, check charge pipes for cracks, and evaluate high-pressure fuel pump pressures.',
      },
      {
        question: 'Can you service and calibrate BMW Dynamic Drive and Adaptive M suspension?',
        answer: 'Yes. Our technicians service BMW active anti-roll stabilizer bars, replace Adaptive M electronic dampers, and perform computerized ride-height calibration.',
      },
      {
        question: 'What warranty applies to replacement BMW parts in Pakistan?',
        answer: 'We source BMW-spec parts and Tier-1 European supplier components (Bosch, Lemförder, ZF, Mahle). For engine, brake/suspension/steering, transmission, and AC repairs, eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer’s or supplier’s warranty terms, component eligibility and applicable conditions.',
      },
    ],
    seo: {
      title: 'BMW Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Independent BMW workshop in Islamabad & Rawalpindi. Computerized BMW diagnostics, 3 Series, 5 Series, 7 Series, X5, M Power engine overhauls & ZF transmission service.',
      keywords: ['bmw repair islamabad', 'bmw specialist rawalpindi', 'bmw diagnostics', 'bmw workshop police foundation', 'bmw transmission service', 'bmw oil leak repair'],
    },
  },
  {
    id: 'mercedes-specialist',
    slug: 'mercedes-service-islamabad',
    name: 'Mercedes-Benz Luxury & AMG Specialist Workshop Islamabad',
    tagline: 'Computerized Mercedes Diagnostics, 7G/9G-Tronic Gearbox Care, Airmatic Air Suspension & M274/M264 Engine Tuning',
    logoBadge: 'Mercedes-Benz Specialist',
    heroImage: images.galleryAmgDetailing,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad serving Mercedes-Benz passenger, luxury limousine, and AMG performance vehicles across Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners and compatible interfaces, our experienced technicians deliver servicing for C-Class, E-Class, S-Class, CLA, GLA, GLC, GLE, GLS, and G-Wagon (G63 AMG)—from diagnosing Check Engine fault codes and repairing Airmatic air suspension leaks to 7G-Tronic and 9G-Tronic automatic transmission servicing, M274/M264 camshaft timing gear repairs, and Mercedes-spec 229.5 / 229.51 engine oil servicing.',
    modelsCovered: [
      'Mercedes-Benz C-Class (W203, W204, W205, W206 - C180, C200, C250, C300, C43 AMG)',
      'Mercedes-Benz E-Class (W211, W212, W213 - E200, E220d, E250, E300, E350e Hybrid, E63s)',
      'Mercedes-Benz S-Class (W221, W222, W223 - S350, S400 Hybrid, S500, S560, S580, Maybach)',
      'Mercedes-Benz SUV Family (GLA, GLB, GLC, GLE, GLS, ML350, GL500)',
      'Mercedes-AMG Performance Line (A45, C63s, E63s, G63 AMG 4.0L V8 Biturbo)',
      'Mercedes-Benz CLA & CLS 4-Door Coupé',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Live Module Telemetry',
    commonIssuesAndFixes: [
      {
        issue: 'Mercedes-Benz Airmatic Air Suspension "Car Rising / Stop Vehicle Too Low" Error',
        solution: 'Pneumatic pressure leak testing, air suspension compressor rebuild, air strut bellow replacement, and computerized 4-corner ride height calibration.',
      },
      {
        issue: 'M274 / M271 Camshaft Timing Adjuster Rattle on Cold Start',
        solution: 'Replacement of worn intake/exhaust camshaft sprockets, hydraulic timing chain tensioner renewal, and precision camshaft timing alignment.',
      },
      {
        issue: '7G-Tronic / 9G-Tronic Transmission Hesitation & Conductor Plate Fault',
        solution: 'Conductor plate speed sensor repair, valve body solenoid cleaning, Mercedes-spec ATF fluid flush, and adaptation drive.',
      },
      {
        issue: 'Auxiliary Battery Malfunction Warning on Dashboard',
        solution: 'Auxiliary capacitor / AGM voltage regulator replacement and electronic SAM module error reset.',
      },
    ],
    specializedServices: [
      'Mercedes-Benz Computerized Diagnostics & Module Coding',
      'M270 / M274 / M264 / M276 / M177 AMG V8 Biturbo Engine Overhaul',
      '7G-Tronic (722.9) & 9G-Tronic (725.0) Transmission Fluid Flush & Valve Body Repair',
      'Airmatic & ABC (Active Body Control) Hydraulic/Air Suspension Overhaul',
      'Mercedes ME9 / MED17 Engine ECU Diagnostics & Electronic Key/EIS Repair',
      'Distronic Plus Radar, 360-Camera & Active Brake Assist Calibration',
      'Self-Healing TPU Paint Protection Film (PPF) for Mercedes G63 & S-Class',
    ],
    pricingRange: 'PKR 6,000 - PKR 380,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'How do you run Mercedes-Benz computerized diagnostic scans in Islamabad?',
        answer: 'We use multi-brand computerized diagnostic scanners and compatible interfaces for control unit adaptation, module diagnostics, and live telemetry checks across C, E, S, and G-Class vehicles.',
      },
      {
        question: 'How do you fix Mercedes Airmatic and E-Active Body Control suspension problems?',
        answer: 'We pinpoint pneumatic leaks using pressure-decay routines and computerized diagnostic tests, replace failing air bellows, rebuild valve blocks, and service air suspension compressors.',
      },
      {
        question: 'Can you service Mercedes-AMG G63, C63, and V8 Biturbo engines in Islamabad & Rawalpindi?',
        answer: 'Yes. Our experienced technicians service M177 / M178 4.0L V8 Biturbo and M157 5.5L AMG powerplants, handling intercooler auxiliary water pumps, turbo oil scavenge lines, and Brembo braking systems.',
      },
      {
        question: 'How do you resolve M274 / M271 camshaft adjuster phaser rattles on cold start?',
        answer: 'Cold start rattling on M271 and M274 4-cylinder engines indicates worn camshaft adjuster sprockets and stretched timing chains. We replace sprockets with upgraded hardened units, install new hydraulic chain tensioners, and reset adaptation angles.',
      },
      {
        question: 'How often should Mercedes 7G-Tronic and 9G-Tronic transmission fluid be replaced?',
        answer: 'We recommend servicing Mercedes 7G-Tronic (Blue ATF 134 FE) and 9G-Tronic (ATF 9134) gearboxes every 60,000 km, including new integrated oil pans, pan filters, and torque converter drain plugs.',
      },
      {
        question: 'Do you service Mercedes EQ electric models and plug-in hybrid powertrains?',
        answer: 'Yes. Our technicians diagnose Mercedes EQ (EQA, EQB, EQC, EQS) and hybrid battery cooling loops, electric drive units, and onboard AC/DC charging electronics.',
      },
    ],
    seo: {
      title: 'Mercedes-Benz Repair & Service Specialist Islamabad | HyperTune Garage',
      description: 'Independent Mercedes-Benz workshop in Islamabad & Rawalpindi. Computerized Mercedes diagnostics, C-Class, E-Class, S-Class, G-Wagon, AMG repairs, Airmatic & 7G/9G transmission care.',
      keywords: ['mercedes repair islamabad', 'mercedes specialist rawalpindi', 'mercedes diagnostic', 'mercedes workshop police foundation', 'mercedes airmatic repair', 'mercedes amg service'],
    },
  },
  {
    id: 'audi-specialist',
    slug: 'audi-repair-islamabad',
    name: 'Audi & German VAG Specialist Workshop Islamabad',
    tagline: 'Computerized Audi Diagnostics, S-Tronic / DSG Dual-Clutch Repair, EA888 TFSI Carbon Cleaning & Quattro Servicing',
    logoBadge: 'Audi Specialist',
    heroImage: images.galleryAudiService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Audi and Volkswagen Group (VAG) vehicles serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners and compatible VAG interfaces, our technicians service Audi A3, A4, A5, A6, A7, A8, Q2, Q3, Q5, Q7, Q8, TT, and RS models—handling TFSI intake carbon cleaning, oil consumption repairs, S-Tronic (DQ200, DQ250, DQ381, DQ500, DL501) mechatronic work, and Quattro differential servicing.',
    modelsCovered: [
      'Audi A3 & S3 (1.4L TFSI, 1.8L TFSI, 2.0L TFSI S-Tronic)',
      'Audi A4 & S4 (B7, B8, B9 - 1.8T, 2.0 TFSI, 3.0T V6 Supercharged / Turbo)',
      'Audi A5 & S5 Sportback / Coupé',
      'Audi A6 & A7 (C6, C7, C8 - 2.0 TFSI, 3.0 TFSI V6 Quattro)',
      'Audi A8 & A8L Flagship Sedan (Matrix LED, Quattro)',
      'Audi Q-Series (Q2, Q3, Q5, Q7 3.0T / TDI, Q8 Coupé SUV)',
      'Audi RS Performance (RS3, RS5, RS6 Avant, RS7, Audi R8 V10)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & VAG Module Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Audi S-Tronic / DSG Transmission "Gearbox Malfunction: You Can Continue Driving"',
        solution: 'Mechatronic electronic circuit board repair, solenoid valve pressure recalibration, dual clutch pack clearance adjustment, and DSG fluid flush.',
      },
      {
        issue: 'EA888 1.8L / 2.0L TFSI High Engine Oil Consumption & Timing Chain Stretch',
        solution: 'Installation of updated piston ring assemblies, revised PCV oil separator, timing chain and hydraulic tensioner replacement with phase calibration.',
      },
      {
        issue: 'Intake Valve Carbon Fouling Causing Cold-Start Misfires (P0300)',
        solution: 'Intake valve carbon cleaning of intake ports and valves, direct-injection fuel injector cleaning, and throttle body relearn.',
      },
      {
        issue: 'Quattro Haldex / Torsen All-Wheel Drive Binding Noise & Shudder',
        solution: 'Quattro differential and Haldex AWD coupling fluid flush with Audi-spec gear lubricants and clutch pump filter cleaning.',
      },
    ],
    specializedServices: [
      'Computerized Audi Diagnostics & Guided Fault Finding',
      'EA888 Gen 2 / Gen 3 / Gen 4 TFSI Engine Rebuilding & Oil Consumption Repair',
      'S-Tronic & DSG (DQ200 / DQ250 / DQ381 / DL501) Mechatronic Unit Overhaul',
      'Intake Valve Direct-Injection Carbon Cleaning',
      'Adaptive Air Suspension Compressor & Strut Calibration',
      'Quattro AWD Differential & Transfer Case Servicing',
      'TPU Paint Protection Film (PPF) for Audi A5, A7 & Q8',
    ],
    pricingRange: 'PKR 5,000 - PKR 360,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'How do you run computerized Audi diagnostic checks in Islamabad?',
        answer: 'We use multi-brand computerized diagnostic scanners and compatible VAG interfaces for guided fault finding, module adaptations, and live sensor analysis.',
      },
      {
        question: 'How do you fix DSG / S-Tronic gearbox shudder and mechatronic faults on Audi cars?',
        answer: 'We repair internal mechatronic solenoid assemblies, replace worn dual clutch packs, flush dual-circuit hydraulic transmission fluids, and perform computerized basic settings clutch calibration.',
      },
      {
        question: 'Why do Audi TFSI engines consume oil and how does HyperTune fix it?',
        answer: 'Excessive oil consumption in 1.8 and 2.0 TFSI engines is typically caused by clogged oil scraper piston rings or failing crankcase breather PCV valves. We replace PCV assemblies and, if needed, install updated pistons and oil control rings.',
      },
      {
        question: 'How do you fix carbon buildup on 2.0 TFSI and 3.0 TFSI direct injection intake valves?',
        answer: 'Because direct-injected engines do not wash intake valves with gasoline, carbon builds up and causes misfires. We perform thorough intake valve carbon cleaning and service fuel injectors to restore smooth airflow and idling.',
      },
      {
        question: 'Can you service Audi Quattro differentials and electronic sports differentials?',
        answer: 'Yes. We change center Torsen differential fluids, crown-gear differential oils, and service Haldex / Ultra clutch packs with Audi-spec lubricants and filter screens.',
      },
      {
        question: 'What warranty applies to Audi replacement transmission and engine parts?',
        answer: 'Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer’s or supplier’s warranty terms, component eligibility and applicable conditions. Labour, consumables and unrelated components are not automatically covered.',
      },
    ],
    seo: {
      title: 'Audi Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Independent Audi workshop in Islamabad & Rawalpindi. Computerized Audi diagnostics, A3, A4, A6, A7, Q7, S-Tronic DSG transmission repair, TFSI engine overhaul & Quattro service.',
      keywords: ['audi repair islamabad', 'audi specialist rawalpindi', 'audi diagnostic', 'audi dsg repair', 'audi stronic workshop', 'audi tfsi carbon cleaning'],
    },
  },
  {
    id: 'porsche-specialist',
    slug: 'porsche-repair-islamabad',
    name: 'Porsche High-Performance Engineering Specialist Islamabad',
    tagline: 'Computerized Porsche Diagnostics, PDK Dual-Clutch Gearbox Care, PASM Air Suspension & 911 / Cayenne Care',
    logoBadge: 'Porsche Specialist',
    heroImage: images.galleryPorscheGt3,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad serving Porsche owners across Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners and engine machining tools, our technicians service Porsche 911 (996, 997, 991, 992), 718 Boxster & Cayman, Cayenne (9PA, 92A, 9YA), Panamera, Macan, and Taycan EV models—including PDK dual-clutch fluid services, PASM air suspension calibration, cooling pipe repairs, and brake maintenance.',
    modelsCovered: [
      'Porsche 911 (997, 991, 992 - Carrera, Carrera S, 4S, Turbo, Turbo S, GT3)',
      'Porsche 718 Cayman & Boxster (2.0T, 2.5T, GTS 4.0)',
      'Porsche Cayenne (958, 9YA - 3.0 V6, 3.6 V6, 4.8 V8, 4.0TT V8, E-Hybrid)',
      'Porsche Panamera (Panamera 4, 4S, GTS, Turbo, Turbo S E-Hybrid)',
      'Porsche Macan (Macan 2.0T, Macan S 3.0T, Macan GTS, Turbo)',
      'Porsche Taycan 100% Electric (4S, Turbo, Turbo S)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Live Sensor Telemetry',
    commonIssuesAndFixes: [
      {
        issue: 'Porsche PDK Transmission "Transmission Emergency Run" Warning',
        solution: 'PDK dual-chamber fluid flush (gear & clutch oil), distance sensor / temperature sensor telemetry check, and computerized clutch calibration relearn.',
      },
      {
        issue: 'Cayenne / Panamera V8 Coolant Valley Pipe Leak & Engine Overheating',
        solution: 'Replacement of plastic valley coolant pipes with upgraded aluminum lines, thermostat housing renewal, and vacuum bleed with Porsche-spec coolant.',
      },
      {
        issue: 'PASM (Porsche Active Suspension Management) Chassis System Fault',
        solution: 'PASM valve solenoid testing, air spring strut bladder leak detection, height sensor replacement, and computerized height calibration.',
      },
      {
        issue: 'Porsche Direct-Injection (DFI) Spark Plug & Ignition Coil Breakdown',
        solution: 'Installation of Bosch/Beru DFI spark plugs, heat shield inspection, and ignition coil pack replacement.',
      },
    ],
    specializedServices: [
      'Computerized Porsche Diagnostics & Live Sensor Telemetry',
      'PDK (Porsche Doppelkupplung) 7-Speed & 8-Speed Fluid Servicing & Calibration',
      'Flat-6 (3.0T, 3.8L, 4.0L) & V6 / V8 Twin-Turbo Engine Rebuilding',
      'PASM (Porsche Active Suspension Management) Air Suspension Calibration & Strut Repair',
      'Multi-Piston Caliper & Brake Rotor Overhaul',
      'Sport Chrono & Chassis Calibration Checks',
      'TPU Paint Protection Film (PPF) for Porsche 911, GT3, Cayman & Cayenne',
    ],
    pricingRange: 'PKR 10,000 - PKR 500,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'How do you perform Porsche computerized diagnostics in Islamabad?',
        answer: 'We use multi-brand computerized diagnostic scanners and compatible interfaces to inspect DME, PDK, PASM, PDCC, and PTV control modules.',
      },
      {
        question: 'How do you service Porsche PDK transmissions in Pakistan?',
        answer: 'We perform clutch fluid and gear oil services on 7-speed and 8-speed PDK transmissions using Porsche-spec fluids, replacing pan-filters and running calibration routines.',
      },
      {
        question: 'Can you install Paint Protection Film (PPF) on Porsche sports cars and GT3s?',
        answer: 'Yes. We use computerized CAD pattern-cutting for 911, 718 Cayman/Boxster, Taycan, and Macan/Cayenne models, finishing edges neatly around body panels.',
      },
      {
        question: 'How do you maintain Cayenne and Macan air suspension and transfer case systems?',
        answer: 'We service Cayenne and Macan multi-plate clutch transfer cases to help eliminate low-speed binding shudder, and diagnose Porsche Active Suspension Management (PASM) air struts and pneumatic lines.',
      },
      {
        question: 'Can you perform Porsche IMS bearing inspection and coolant pipe upgrades?',
        answer: 'Yes. For naturally aspirated 996, 997, and Boxster engines, we inspect intermediate shaft (IMS) bearing condition and upgrade plastic coolant pipes on applicable models.',
      },
      {
        question: 'What engine oil and service intervals are recommended for Porsche flat-6 and V8 engines?',
        answer: 'We use Porsche A40 and C40 specification fully synthetic motor oils (Mobil 1 FS 0W-40 / ESP X3 0W-40) with Mahle filter elements, typically serviced every 7,500 to 10,000 km.',
      },
    ],
    seo: {
      title: 'Porsche Repair & High-Performance Specialist Islamabad | HyperTune Garage',
      description: 'Independent Porsche workshop in Islamabad & Rawalpindi. Computerized Porsche diagnostics, 911, Cayenne, Panamera, Macan & Cayman service, PDK transmission fluid flush & PASM repair.',
      keywords: ['porsche repair islamabad', 'porsche specialist rawalpindi', 'porsche diagnostic', 'porsche 911 service', 'porsche cayenne maintenance', 'porsche pdk transmission repair'],
    },
  },
  {
    id: 'toyota-specialist',
    slug: 'toyota-repair-islamabad',
    name: 'Toyota Repair & Maintenance Specialist Islamabad',
    tagline: 'Computerized Toyota Diagnostics, Hybrid Battery Balancing, Land Cruiser V8 & CVT Servicing',
    logoBadge: 'Toyota Specialist',
    heroImage: images.brandToyotaService,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad serving Toyota passenger, hybrid, and 4x4 vehicle owners across Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners and experienced technicians, we service Yaris, Corolla, Fortuner, Hilux Revo/Rocco, Prado, and Land Cruiser LC200/LC300 models—handling P0A80 hybrid battery diagnosis, 1VD-FTV V8 and 1GD-FTV diesel repairs, common rail fuel system servicing, and Toyota Super Long Life Coolant flushes.',
    modelsCovered: [
      'Toyota Corolla (Gli, Altis 1.6, Grande 1.8, Cross Hybrid)',
      'Toyota Yaris (1.3L & 1.5L ATIV X CVT)',
      'Toyota Fortuner (2.7L Petrol, 2.8L 1GD-FTV Sigma 4 Diesel, Legender)',
      'Toyota Hilux (Revo, Rocco, GR-Sport 1GD-FTV)',
      'Toyota Land Cruiser (LC70, LC100, LC200 V8 1VD-FTV, LC300 V35A 3.5TT)',
      'Toyota Prado (1KZ, 1KD, 2TR, 1GD-FTV TX / TZ-G)',
      'Toyota Prius & Aqua Hybrid (NHW20, ZVW30, ZVW50, NHP10)',
      'Toyota Camry Hybrid & Crown Hybrid (2.5L THS-II Dynamic Force)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Hybrid Battery Health Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Check Hybrid System Warning & P0A80 Error Code',
        solution: 'Individual cell voltage load analysis, degraded module replacement, cell balancing, and hybrid blower fan cleaning.',
      },
      {
        issue: 'Land Cruiser 1VD-FTV / Hilux Revo Black Smoke & Turbo Boost Drop',
        solution: 'Common rail injector inspection and servicing, electronic turbo actuator calibration, and intake EGR cleaning.',
      },
      {
        issue: 'Corolla / Yaris CVT Transmission Drone & Acceleration Jerk',
        solution: 'CVT fluid flush using Toyota-spec CVT Fluid FE/TC, pan cleaning, strainer replacement, and transmission calibration.',
      },
      {
        issue: 'KDSS Sway Bar Warning & Steering Drift on Prado / Land Cruiser',
        solution: 'Hydraulic KDSS pressure equalization, accumulator valve check, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'Computerized Toyota Health Scans & Live Sensor Telemetry',
      'P0A80 Hybrid Battery Module Replacement, Balancing & Cooling Duct Maintenance',
      '1GD / 2GD / 1VD Diesel Common Rail Injector & Fuel Pump Servicing',
      'Toyota Super CVT-i & 6-Speed / 8-Speed / 10-Speed Automatic Transmission Flush',
      'Brake Booster Assembly Repair & ABS Actuator Calibration',
      'Air Suspension & KDSS Hydraulic Suspension Servicing',
      'TPU Paint Protection Film (PPF) for Fortuner, Revo & Land Cruiser',
    ],
    pricingRange: 'PKR 3,500 - PKR 180,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you use Toyota-spec parts and fluids?',
        answer: 'Yes. We source Toyota-spec replacement parts and manufacturer-recommended fluids, including synthetic engine oils (0W-20, 5W-30), Super Long Life Coolant, and CVT-FE fluids.',
      },
      {
        question: 'How do you fix P0A80 Hybrid Battery errors on Prius, Aqua, and Cross?',
        answer: 'We test individual nickel-metal hydride (NiMH) and lithium-ion modules under load using computerized hybrid diagnostics, replace degraded cells with matched modules, clean cooling blower fans, and balance the pack.',
      },
      {
        question: 'Can you service Toyota Fortuner Sigma 4 and Land Cruiser LC200 / LC300 in Islamabad?',
        answer: 'Yes. We service Toyota SUVs and 4x4s, offering 1GD-FTV and 1VD-FTV turbo diesel servicing, electronic KDSS suspension checks, common-rail injector servicing, and 4WD transfer case maintenance.',
      },
      {
        question: 'How often should Toyota Super Long Life Coolant and CVT-FE fluid be changed?',
        answer: 'CVT fluid is commonly serviced around every 40,000 km in Pakistan’s hot climate, and long-life coolant checked and flushed per schedule to help prevent aluminum head corrosion and water pump wear.',
      },
      {
        question: 'Can you repair KD and GD series common rail diesel injector knocking on Hilux and Fortuner?',
        answer: 'Yes. We inspect common rail injectors, check pilot quantity values via computerized diagnostics, service or replace worn injector units, and program injector compensation codes into the engine ECU.',
      },
      {
        question: 'Do you perform 4WD transfer case actuator and differential servicing for Land Cruisers?',
        answer: 'Yes. We repair stuck electronic 4WD high/low actuator motors, replace leaking axle pinion seals, and flush front and rear differentials with Toyota-spec 75W-85 GL-5 synthetic gear oil.',
      },
    ],
    seo: {
      title: 'Toyota Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Independent Toyota workshop in Islamabad & Rawalpindi. Computerized Toyota diagnostics, P0A80 hybrid battery repair, Land Cruiser V8, Fortuner, Revo & Corolla servicing.',
      keywords: ['toyota repair islamabad', 'toyota specialist rawalpindi', 'toyota diagnostics', 'hybrid battery repair toyota', 'fortuner maintenance', 'land cruiser overhaul islamabad'],
    },
  },
  {
    id: 'honda-specialist',
    slug: 'honda-service-islamabad',
    name: 'Honda Turbo & Hybrid Specialist Workshop Islamabad',
    tagline: 'Computerized Honda Diagnostics, Civic 1.5 Turbo Care, Vezel i-DCD Dual-Clutch Repair & Steering Calibration',
    logoBadge: 'Honda Specialist',
    heroImage: images.brandHondaService,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad serving Honda vehicles across Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners, our technicians troubleshoot Civic Turbo (Gen 10 & Gen 11), Vezel Hybrid i-DCD dual-clutch transmissions, City, Accord, and CR-V—handling intake valve carbon cleaning, Vezel dual-clutch actuator fluid bleeding, and electronic power steering (EPS) rack repairs.',
    modelsCovered: [
      'Honda Civic (Reborn, Rebirth, Turbo RS Gen 10 1.5T, Gen 11 1.5T Oriel/RS)',
      'Honda Vezel Hybrid (RU3 / RU4 1.5L i-DCD Dual-Clutch)',
      'Honda City (i-DSI, i-VTEC 1.3L/1.5L, GM6, GN2 Aspire)',
      'Honda HR-V (1.5L VTEC & VTEC Turbo)',
      'Honda BR-V (1.5L i-VTEC 7-Seater)',
      'Honda Accord (CL9, CU2, CR2, CV1 1.5T Turbo / 2.0 Hybrid)',
      'Honda CR-V (2.0L, 2.4L & 1.5T AWD)',
      'Honda Fit / Grace Hybrid (GP5, GM4 Sport Hybrid i-DCD)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Live Telemetry Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Honda Vezel Transmission Warning & "Transmission Temperature High"',
        solution: 'i-DCD slave cylinder actuator clutch fluid flush with DOT 4, clutch stroke distance relearn, and computerized clutch plate adaptation.',
      },
      {
        issue: 'Civic 1.5L VTEC Turbo Engine Judder & Cold Start Misfires',
        solution: 'Intake valve carbon cleaning to remove deposits from intake valves, direct-injection fuel injector cleaning, and spark plug refresh.',
      },
      {
        issue: 'Honda Civic / City Steering Rack Noise & EPS Warning Light',
        solution: 'Electronic Power Steering (EPS) torque sensor zero-point calibration, bushing replacement, and rack backlash adjustment.',
      },
      {
        issue: 'Honda CVT Acceleration Whine & Delayed Reverse Engagement',
        solution: 'Complete CVT flush using Honda HCF-2 fluid, internal pan filter renewal, and transmission pressure solenoid learning.',
      },
    ],
    specializedServices: [
      'Computerized Honda Diagnostics & Module Coding',
      'Honda Vezel i-DCD Dual-Clutch Actuator Overhaul & Stroke Relearning',
      'Civic Turbo Direct Injection Intake Valve Carbon De-coking',
      'Honda CVT Transmission Fluid Flush with HCF-2 / CVTF',
      'Electronic Power Steering (EPS) Rack & Column Repair',
      'Honda Earth Dreams Engine Timing Chain & Valve Clearance Adjustment',
      'TPU Paint Protection Film (PPF) for Civic RS & Vezel',
    ],
    pricingRange: 'PKR 3,500 - PKR 160,000',
    faqs: [
      {
        question: 'Can you fix the Vezel dual-clutch transmission warning in Islamabad?',
        answer: 'Yes. We service Honda i-DCD dual-clutch gearboxes (Vezel, Grace, Fit, Shuttle)—flushing actuator clutch fluid (DOT 4), bleeding the hydraulic release system, and running computerized clutch kiss-point adaptations.',
      },
      {
        question: 'Why does my Honda Civic 1.5 Turbo hesitate during boost or throw knock sensor codes?',
        answer: 'Civic Turbo hesitation in Pakistan is frequently caused by carbon deposits on direct injectors, fuel octane knock retard, or leaking charge/blow-off piping. We test live fuel-trim data, clean GDI injectors, and pressure-test intercooler piping for boost leaks.',
      },
      {
        question: 'Do you use Honda HCF-2 transmission fluid for CVTs?',
        answer: 'Yes. Using the wrong fluid in a Honda CVT risks premature belt and pulley wear. We use Honda HCF-2 (or Ultra ATF-DW1 for conventional automatics) with fresh internal filters.',
      },
      {
        question: 'How do you resolve steering rack clicking and EPS motor noise on Civic X and XI?',
        answer: 'Steering clunks on Civic X/XI often stem from worn steering rack guide sliders or EPS motor dampeners. We overhaul the steering rack with replacement guide bushings and lubricate the EPS worm gear to eliminate rattles.',
      },
      {
        question: 'How often should valve clearances and spark plugs be tuned on Honda i-VTEC engines?',
        answer: 'Mechanical valve clearances on applicable i-VTEC engines are commonly inspected around every 40,000 km, while iridium spark plugs are inspected and replaced every 60,000 to 80,000 km.',
      },
      {
        question: 'Can you service Honda e:HEV hybrid systems on new Civic and HR-V models?',
        answer: 'Yes. We connect computerized diagnostic scanners to inspect e:HEV hybrid powertrains, check the Intelligent Power Unit (IPU) lithium battery pack, and service electric motor inverter cooling loops.',
      },
    ],
    seo: {
      title: 'Honda Turbo & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Honda workshop in Islamabad & Rawalpindi. Computerized Honda diagnostics, Civic 1.5 Turbo care, Vezel i-DCD dual-clutch repairs, CVT fluid flush, and EPS calibration.',
      keywords: ['honda repair islamabad', 'civic turbo specialist rawalpindi', 'vezel hybrid dual clutch fix', 'honda diagnostic', 'honda city maintenance', 'honda vezel transmission repair'],
    },
  },
  {
    id: 'suzuki-specialist',
    slug: 'suzuki-repair-islamabad',
    name: 'Suzuki Repair & Servicing Specialist Islamabad',
    tagline: 'Computerized Suzuki Diagnostics, AGS Actuator Calibration, K-Series Engine Rebuild & Suspension Overhaul',
    logoBadge: 'Suzuki Specialist',
    heroImage: images.brandSuzukiService,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad servicing domestic Suzuki and imported Japanese kei cars across Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostic scanners, our technicians troubleshoot Alto (660cc & AGS), Cultus AGS, Swift (1.3L & 1.2L Boosterjet), Wagon R, Jimny 4x4, and imported Japanese models (Hustler, Spacia, Every)—handling AGS clutch actuator calibration, K-Series engine repairs, AC servicing, and suspension work.',
    modelsCovered: [
      'Suzuki Alto (660cc Japanese, 660cc PKDM VXR/VXL/AGS)',
      'Suzuki Cultus (VXL & AGS 1.0L K10B)',
      'Suzuki Swift (1.3L M13A, 1.2L DualJet K12M, 1.0L/1.4L Boosterjet Turbo)',
      'Suzuki Wagon R (1.0L K10B PKDM & JDM Stingray Turbo Hybrid)',
      'Suzuki Jimny / Sierra (660cc Turbo & 1.5L K15B 4x4)',
      'Suzuki Every & Bolan (DA64V, DA17V JDM Van & PKDM)',
      'Suzuki Hustler, Spacia & Lapin (JDM Mild Hybrid S-ENE Charge)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & OBD-II CAN Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Suzuki AGS Gear Transmission Warning & Jerky Gear Changes (Alto / Cultus)',
        solution: 'Automated Manual Transmission (AGS) hydraulic pump test, clutch stroke potentiometer calibration, actuator solenoid cleaning, and clutch relearn.',
      },
      {
        issue: 'K-Series Engine Idle Vibration, Hunting & Low Fuel Economy',
        solution: 'Fuel injector cleaning and testing, electronic throttle body carbon decoking, valve tappet adjustment, and spark plug replacement.',
      },
      {
        issue: 'Suspension Knocking & Steering Rattle on Broken Islamabad / Pindi Roads',
        solution: 'Control arm bushing replacement, ball joint renewal, strut mounting replacement, and computerized wheel alignment.',
      },
      {
        issue: 'Weak AC Cooling in 45°C Summer Heat',
        solution: 'AC condenser pressure washing, expansion valve replacement, compressor clutch gap adjustment, and R134a refrigerant recharge.',
      },
    ],
    specializedServices: [
      'Computerized Suzuki Health Scans & DTC Clearing',
      'AGS Auto Gear Shift Actuator Calibration & Clutch Pack Replacement',
      'Suzuki K-Series (K6A, R06A, K10B, K12M) Engine Overhauls',
      'Manual, Automatic & AGS Transmission Fluid Service',
      'Suspension, Steering Rack & Bushing Refresh',
      'Car AC Servicing & Refrigerant Leak Testing',
      'Paint Correction, Ceramic Coating & Front-End PPF for Suzuki Swift & Jimny',
    ],
    pricingRange: 'PKR 2,500 - PKR 75,000',
    faqs: [
      {
        question: 'Can you solve the jerky shifting on Suzuki Alto and Cultus AGS models?',
        answer: 'Yes. Suzuki Auto Gear Shift (AGS) jerkiness often comes from misaligned clutch actuator learn values or hydraulic pressure loss. We perform AGS actuator relearns and clutch calibration using computerized diagnostic software.',
      },
      {
        question: 'Do you service imported Japanese 660cc Suzuki Hustler, Spacia, and Every models?',
        answer: 'Yes. We service Japanese imported Kei cars, offering turbocharger inspections, Ene-Charge lithium auxiliary battery testing, CVT fluid replacements with Suzuki Green-2 oil, and computer scans.',
      },
      {
        question: 'How long does a routine Suzuki periodic maintenance oil service take?',
        answer: 'A routine maintenance service—including synthetic engine oil, oil filter, air filter inspection/replacement, and undercarriage suspension and brake checks—typically takes 45 minutes to 2 hours.',
      },
      {
        question: 'How do you repair Suzuki EPS electric power steering column vibration and rattle?',
        answer: 'Vibration and clattering on rough roads often trace back to worn rubber couplers inside the electric power steering column motor. We disassemble the column and install replacement couplers.',
      },
      {
        question: 'What coolant and engine oil viscosity is best for Suzuki K-Series engines in Pakistan?',
        answer: 'For Suzuki K10B, K10C, and K12M engines, we use 0W-20 or 5W-30 API SP fully synthetic engine oil matched to vehicle specs alongside long-life ethylene glycol coolant.',
      },
      {
        question: 'Can you resolve Suzuki catalytic converter choking and low mileage issues?',
        answer: 'Yes. Poor fuel quality and city traffic can foul catalytic converters. We inspect exhaust backpressure, perform catalytic converter cleaning where serviceable, and test oxygen sensor response.',
      },
    ],
    seo: {
      title: 'Suzuki Repair & Servicing Specialist Islamabad | HyperTune Garage',
      description: 'Independent Suzuki workshop in Islamabad & Rawalpindi. Computerized Suzuki diagnostics, Alto & Cultus AGS transmission calibration, Swift repairs, AC recharge & K-series engine rebuilds.',
      keywords: ['suzuki repair islamabad', 'suzuki specialist rawalpindi', 'alto ags calibration', 'cultus ags repair', 'suzuki swift maintenance', 'suzuki workshop police foundation'],
    },
  },
  {
    id: 'hyundai-specialist',
    slug: 'hyundai-repair-islamabad',
    name: 'Hyundai Specialist Repair & Service Center Islamabad',
    tagline: 'Computerized Hyundai Diagnostics, Tucson DCT Overhaul, Elantra & Santa Fe Servicing',
    logoBadge: 'Hyundai Specialist',
    heroImage: images.brandHyundaiService,
    overview: 'HyperTune Garage provides independent mechanical, electrical, and diagnostic servicing for the Hyundai lineup in Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners, our technicians service Elantra (1.6L/2.0L), Tucson (AWD/FWD), Sonata (2.0L/2.5L), Santa Fe Hybrid, Staria, and Porter H-100—including Dual-Clutch Transmission (DCT) shudder repairs, 8-speed automatic fluid flushes, and electronic parking brake calibration.',
    modelsCovered: [
      'Hyundai Tucson (2.0L MPI Petrol AWD/FWD & 1.6T DCT)',
      'Hyundai Elantra (1.6L GL & 2.0L GLS 6-Speed Auto)',
      'Hyundai Sonata (2.0L & 2.5L Smartstream Luxury Sedan)',
      'Hyundai Santa Fe (1.6L Turbo Hybrid AWD & 2.4L/3.5L Petrol)',
      'Hyundai Staria (3.5L V6 Petrol & 2.2L CRDi Diesel 11-Seater)',
      'Hyundai Ioniq Hybrid & Ioniq 5 Electric (EV Diagnostics)',
      'Hyundai Grand Starex & H-100 Porter Commercial Fleet',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Compatible VCI Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Hyundai Tucson / Sonata DCT Shudder & Low-Speed Gear Hesitation',
        solution: 'Dry dual-clutch clearance measurement, actuator stepper motor calibration, and computerized clutch touch-point relearn.',
      },
      {
        issue: 'Elantra / Sonata Engine Knocking & Tappet Noise on Cold Start',
        solution: 'Hydraulic lash adjuster (HLA) inspection, oil gallery pressure test, and synthetic 5W-30/0W-20 oil service with spec filter.',
      },
      {
        issue: 'Electronic Parking Brake (EPB) / Auto-Hold Warning Light On',
        solution: 'Computerized actuator position calibration, rear brake caliper motor service, and ceramic brake pad renewal.',
      },
      {
        issue: 'AWD 4WD Lock Warning & Rear Differential Binding on Tucson',
        solution: 'Electromagnetic coupling solenoid testing, transfer case fluid replacement, and multi-plate clutch inspection.',
      },
    ],
    specializedServices: [
      'Computerized Hyundai Diagnostic Scans & Module Checks',
      'Tucson & Sonata Dual-Clutch (DCT) and 6/8-Speed Automatic Transmission Service',
      'Smartstream 2.0L / 2.5L & CRDi Turbo Diesel Engine Maintenance',
      'Santa Fe Hybrid High-Voltage System Health Check & Inverter Cooling',
      'Electronic Power Steering, Suspension & Computerized Wheel Alignment',
      'Brake Disc Resurfacing, Brake Pads & ABS System Bleeding',
      'CAD Computer Pre-Cut Paint Protection Film (PPF) for Sonata & Tucson',
    ],
    pricingRange: 'PKR 4,000 - PKR 150,000',
    faqs: [
      {
        question: 'Do you have diagnostic tools for Hyundai Sonata, Tucson, and Elantra in Islamabad?',
        answer: 'Yes. We run multi-brand computerized bi-directional diagnostic scanners capable of reading Smartstream engine control units, ADAS systems, and electronic transmission modules.',
      },
      {
        question: 'Can you service the new Hyundai Santa Fe Hybrid and Tucson Hybrid in Islamabad?',
        answer: 'Yes. Our technicians service Hyundai 1.6T Hybrid powertrains, inspect hybrid starter-generators (HSG), test traction battery health, and service low-conductivity EV coolant loops.',
      },
      {
        question: 'What engine oil is recommended for Hyundai Elantra and Sonata in Pakistan?',
        answer: 'We use API SP / ILSAC GF-6 fully synthetic 5W-20 or 5W-30 engine oils formulated to protect against Low-Speed Pre-Ignition (LSPI) in Nu 2.0L and Theta II / Smartstream 2.5L engines.',
      },
      {
        question: 'How do you diagnose and prevent Theta II and Smartstream engine oil consumption?',
        answer: 'We perform internal cylinder inspections, test PCV oil separation, measure compression, and service with high-shear synthetic lubricants.',
      },
      {
        question: 'Can you service Hyundai 7-speed and 8-speed dual-clutch transmissions (DCT)?',
        answer: 'Yes. We service dry and wet dual-clutch transmissions on Hyundai Tucson and Sonata, replacing clutch gear fluid, adjusting clutch actuators, and running diagnostic touch-point adaptation cycles.',
      },
      {
        question: 'How do you service Hyundai Tucson electronic AWD coupling units?',
        answer: 'We inspect the electronic AWD coupling on all-wheel-drive Tucsons, replace synthetic differential oil, and repair hydraulic pump seals to eliminate rear-axle binding noises.',
      },
    ],
    seo: {
      title: 'Hyundai Specialist Repair & Service Center Islamabad | HyperTune Garage',
      description: 'Independent Hyundai specialist workshop in Islamabad & Rawalpindi. Computerized Hyundai diagnostics, Tucson DCT service, Sonata repairs, Elantra maintenance & Santa Fe hybrid care.',
      keywords: ['hyundai repair islamabad', 'hyundai specialist rawalpindi', 'hyundai tucson service', 'hyundai sonata maintenance', 'hyundai elantra workshop', 'hyundai diagnostic'],
    },
  },
  {
    id: 'kia-specialist',
    slug: 'kia-repair-islamabad',
    name: 'Kia Specialist Workshop & Maintenance Islamabad',
    tagline: 'Computerized Kia Diagnostics, Sportage AWD Servicing, Sorento V6, Stinger & Carnival Care',
    logoBadge: 'Kia Specialist',
    heroImage: images.brandKiaService,
    overview: 'HyperTune Garage provides independent servicing and technical repairs for Kia vehicles across Islamabad and Rawalpindi from our Sector O-9 Islamabad workshop. Utilizing multi-brand computerized diagnostic scanners, our technicians service Sportage (Alpha, FWD, AWD), Sorento (2.4L & 3.5L V6), Grand Carnival (3.5L V6 & 2.2L Diesel), Stonic, Picanto, and EV6—handling Sportage AWD coupling issues, 8-speed transmission servicing, sunroof track repairs, and brake work.',
    modelsCovered: [
      'Kia Sportage (Alpha, FWD, AWD 2.0L Nu MPI & 1.6T)',
      'Kia Sorento (2.4L Theta-II & 3.5L Lambda-II V6 AWD)',
      'Kia Grand Carnival (3.5L V6 Petrol & 2.2L CRDi Diesel 11-Seater)',
      'Kia Stonic (1.4L MPI EX & EX+ 6-Speed Auto)',
      'Kia Picanto (1.0L MPI Manual & 4-Speed Auto)',
      'Kia EV6 & Niro EV (High-Voltage Diagnostics)',
      'Kia Stinger GT (3.3L Twin-Turbo V6 AWD)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Compatible VCI Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Sportage AWD Jerk / Binding During Tight Turning',
        solution: 'Rear electro-hydraulic AWD coupling oil replacement, differential fluid flush with 75W-90, and magnetic clutch calibration.',
      },
      {
        issue: 'Kia Picanto Automatic Gearbox Late Shifting & High Fuel Burn',
        solution: 'ATF fluid flush, throttle position sensor relearn, and ignition coil resistance testing.',
      },
      {
        issue: 'Carnival / Sorento 3.5L V6 High-Temperature Coolant Leak',
        solution: 'Intake manifold removal, thermostat housing seal renewal, water pump replacement, and cooling system flush.',
      },
      {
        issue: 'Panoramic Sunroof Rattle, Sticking & Wind Noise on Sportage',
        solution: 'Track cleaning, synthetic lubrication, guide rail alignment, and motor anti-pinch calibration.',
      },
    ],
    specializedServices: [
      'Computerized Kia Diagnostic Scans, Sensor Calibration & DTC Troubleshooting',
      'Sportage & Sorento AWD Differential & 6/8-Speed Automatic Gearbox Service',
      'Lambda V6 3.5L & Theta 2.4L Engine Overhauls & Timing Chain Service',
      'Carnival 2.2L CRDi Diesel Injector Servicing & DPF Regeneration',
      'Suspension Control Arm Bushings, Shock Absorber & Computerized Wheel Alignment',
      'Brake Pad Fitment & Rotor Skimming for Heavy SUVs',
      'TPU Paint Protection Film (PPF) for Sportage & Carnival',
    ],
    pricingRange: 'PKR 3,500 - PKR 150,000',
    faqs: [
      {
        question: 'Why does my Kia Sportage AWD shudder when making sharp turns in parking?',
        answer: 'This often points to the electro-hydraulic AWD rear differential coupling. We inspect the coupling clutch pack, flush the differential gear oil with manufacturer-spec synthetic lubricant, and service or replace worn coupling units.',
      },
      {
        question: 'Do you service the Kia Grand Carnival 3.3 / 3.5 V6 and 2.2 CRDi Diesel in Islamabad?',
        answer: 'Yes. We service Kia Grand Carnival models, handling diesel common-rail injectors, DPF cleaning, V6 timing chain replacements, water pumps, and rear AC lines.',
      },
      {
        question: 'Can I keep detailed service records for my Kia maintenance visits?',
        answer: 'Yes. We follow scheduled maintenance intervals, install manufacturer-spec filters and fluids, and provide itemized service invoices and inspection records.',
      },
      {
        question: 'How do you fix the steering wheel MDPS flexible coupler knocking noise on Kia Sportage?',
        answer: 'A clicking sound in the steering wheel over bumps is commonly caused by a worn Motor Driven Power Steering (MDPS) rubber coupler. We disassemble the steering column motor and install a replacement dampener.',
      },
      {
        question: 'How often should Kia 6-speed and 8-speed automatic transmission fluid be serviced?',
        answer: 'We recommend changing ATF (SP-IV / SP-IV-RR) around every 50,000 km in Pakistan to maintain smooth shifts and help protect torque converter lock-up clutches.',
      },
      {
        question: 'Do you service Kia Sorento 3.5 V6 and hybrid powertrain models?',
        answer: 'Yes. We offer mechanical, electrical, and diagnostic support for Kia Sorento 2.4L, 3.5L Lambda V6, and 1.6T Hybrid models at our Sector O-9 Islamabad workshop.',
      },
    ],
    seo: {
      title: 'Kia Specialist Workshop & Maintenance Islamabad | HyperTune Garage',
      description: 'Independent Kia repair workshop in Islamabad & Rawalpindi. Computerized Kia diagnostics, Sportage AWD repairs, Sorento V6 service, Grand Carnival maintenance & Stonic servicing.',
      keywords: ['kia repair islamabad', 'kia specialist rawalpindi', 'kia sportage maintenance', 'kia sorento service', 'kia carnival workshop', 'kia diagnostic'],
    },
  },
  {
    id: 'changan-specialist',
    slug: 'changan-repair-islamabad',
    name: 'Changan Specialist Workshop Islamabad',
    tagline: 'Computerized Changan Diagnostics, Oshan X7 Blue Core Turbo, Alsvin DCT Servicing & Karvaan Fleet Care',
    logoBadge: 'Changan Specialist',
    heroImage: images.brandChanganService,
    overview: 'HyperTune Garage is an independent Changan repair and maintenance workshop in Sector O-9, Islamabad serving Islamabad and Rawalpindi. Equipped with Changan-compatible computerized diagnostic scanners, our technicians maintain Oshan X7 (FutureSense & Comfort 1.5T), Alsvin (1.3L & 1.5L Dual-Clutch), Karvaan, and Deepal EV/EREV models—covering Blue Core turbocharged engines, 7-speed wet dual-clutch transmissions (DCT), ADAS calibrations, and suspension care.',
    modelsCovered: [
      'Changan Oshan X7 (1.5L Blue Core Turbo 7-Speed Wet DCT FutureSense/Comfort)',
      'Changan Alsvin (1.37L Manual, 1.5L 5-Speed Dual-Clutch DCT Lumiere)',
      'Changan Karvaan & Karvaan Plus (1.0L C10 Engine Family Van)',
      'Changan Deepal S07 & L07 (EV & EREV Intelligent SUV/Sedan)',
      'Changan M9 Commercial Pick-up Truck',
      'Changan UNI-T & UNI-K (Imported Crossover SUV Series)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic Scanners & CAN Telemetry Interfaces',
    commonIssuesAndFixes: [
      {
        issue: 'Changan Alsvin 5-Speed DCT Shifting Delay & Rattle in Stop-and-Go Traffic',
        solution: 'Dual-clutch solenoid pressure calibration, transmission fluid flush with approved low-viscosity DCT fluid, and clutch position relearn.',
      },
      {
        issue: 'Oshan X7 Blue Core 1.5T Engine Spark Knock & High Summer Coolant Temps',
        solution: 'Direct-injection high-pressure fuel pump diagnostics, intake manifold decoking, synthetic 0W-20/5W-30 oil service, and coolant flush.',
      },
      {
        issue: 'Changan Oshan X7 FutureSense Radar & Camera ADAS Malfunction',
        solution: 'Radar alignment, front camera calibration, and steering angle sensor reset.',
      },
      {
        issue: 'Changan Karvaan Rear Leaf Spring Squeak & Differential Drone',
        solution: 'Leaf spring bushing replacement, differential gear oil flush with 80W-90, and axle bearing inspection.',
      },
    ],
    specializedServices: [
      'Computerized Changan Diagnostics & ECU Sensor Adaptations',
      'Oshan X7 & Alsvin Wet Dual-Clutch (DCT) Transmission Fluid Servicing',
      'Blue Core 1.5L Turbocharged Direct Injection Engine Maintenance',
      'Deepal EV Battery Health Evaluation & Inverter Diagnostics',
      'Suspension, Steering Rack & Computerized Wheel Alignment',
      'Car AC Gas Recharge & Compressor Repair',
      'TPU Paint Protection Film (PPF) for Oshan X7 & Deepal S07',
    ],
    pricingRange: 'PKR 3,000 - PKR 135,000',
    faqs: [
      {
        question: 'Can you service Changan Oshan X7 7-speed Wet DCT transmission in Islamabad?',
        answer: 'Yes. We service the Changan Oshan X7 1.5T Blue Core with 7-speed wet dual-clutch transmission—flushing specialized wet DCT fluids, replacing filters, and performing computerized clutch adaptation cycles.',
      },
      {
        question: 'Do you source spare parts and filters for Changan Alsvin and Oshan X7?',
        answer: 'Yes. We source Changan-spec engine oil filters, air filters, cabin filters, spark plugs, brake pads, and suspension components for scheduled services and repairs.',
      },
      {
        question: 'Can you work on the new Changan Deepal S07 and L07 electric models?',
        answer: 'Yes. Our technicians service Changan Deepal electric SUVs and sedans, testing traction battery status, electric drive axle fluids, and regenerative braking diagnostics.',
      },
      {
        question: 'How do you diagnose Blue Core turbocharger boost pressure and intercooler leaks?',
        answer: 'We run intake and boost pressure leak tests across the charge-pipe tract, test electronic wastegate solenoids, and inspect intercooler couplers for boost leaks on Alsvin and Oshan models.',
      },
      {
        question: 'Can you calibrate Changan ADAS radar and 360-degree camera systems?',
        answer: 'Yes. If your 360-degree cameras are misaligned or forward collision radar shows error alerts after bumper repair, we calibrate camera and radar sensors.',
      },
      {
        question: 'How often should the wet dual-clutch transmission fluid be changed on an Oshan X7?',
        answer: 'We recommend changing wet DCT oil around every 40,000 km to help prevent clutch debris from contaminating the hydraulic valve body in summer stop-and-go driving.',
      },
    ],
    seo: {
      title: 'Changan Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Changan workshop in Islamabad & Rawalpindi. Changan diagnostics, Oshan X7 Blue Core turbo service, Alsvin DCT transmission repairs & Karvaan maintenance.',
      keywords: ['changan repair islamabad', 'changan specialist rawalpindi', 'oshan x7 service', 'changan alsvin dct repair', 'changan deepal s07', 'changan workshop police foundation'],
    },
  },
  {
    id: 'haval-specialist',
    slug: 'haval-service-islamabad',
    name: 'Haval & Great Wall Motors Specialist Islamabad',
    tagline: 'GWM / Haval Diagnostics, H6 1.5T / 2.0T / HEV Hybrid Care & Jolion Dual-Clutch Servicing',
    logoBadge: 'Haval Specialist',
    heroImage: images.brandHavalService,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad serving Haval and Great Wall Motors (GWM) SUV owners across Islamabad and Rawalpindi. Equipped with GWM-compatible diagnostic interfaces, our technicians perform mechanical, electrical, and hybrid battery servicing for Haval H6 (1.5T Petrol, 2.0T AWD, and 1.5T HEV Hybrid), Haval Jolion, GWM Tank 500, and Ora 03 EV—handling hybrid battery cooling fan cleaning, 7-speed wet DCT transmission servicing, ADAS calibrations, and PPF installation.',
    modelsCovered: [
      'Haval H6 (1.5L Turbo Petrol, 2.0L Turbo AWD 7-Speed DCT)',
      'Haval H6 HEV (1.5L Turbo Hybrid Dedicated Hybrid Transmission DHT)',
      'Haval Jolion (1.5L Turbo Petrol & Jolion HEV Hybrid)',
      'GWM Tank 500 (3.0L Twin-Turbo V6 HEV Luxury Off-Roader)',
      'GWM Ora 03 / Good Cat (100% Electric EV)',
      'GWM Poer Pick-up Truck (2.0L Diesel / Petrol 4x4)',
    ],
    diagnosticSoftware: 'GWM / Haval Diagnostic Scanner & DHT Hybrid Telemetry Software',
    commonIssuesAndFixes: [
      {
        issue: 'Haval H6 HEV Dedicated Hybrid Transmission (DHT) Hesitation & P0A80 Codes',
        solution: 'DHT motor synchronizer calibration, high-voltage battery cell voltage balancing, and hybrid coolant loop bleeding.',
      },
      {
        issue: 'Haval Jolion / H6 7-Speed Wet DCT Gear Shudder During City Traffic',
        solution: 'DCT fluid change with GWM-spec low-viscosity transmission oil, clutch pressure adaptation, and control unit reset.',
      },
      {
        issue: 'Haval H6 Panoramic Camera 360° View & Radar Calibration Drift',
        solution: 'ADAS camera and radar calibration checks, forward radar realignment, and steering torque sensor zeroing.',
      },
      {
        issue: 'Brake Squeal & Heavy Dust on Haval H6 AWD Rotors',
        solution: 'Replacement brake pad installation, rotor resurfacing where safe, and caliper slider lubrication.',
      },
    ],
    specializedServices: [
      'Haval GWM Computer Scans & Live Hybrid Telemetry',
      'H6 HEV Dedicated Hybrid Transmission (DHT) & High-Voltage Battery Service',
      '7-Speed Wet Dual-Clutch (DCT) Fluid Flush & Adaptation Relearn',
      '2.0L AWD Electronic Transfer Case & Differential Service',
      'Brake Overhauls & Computerized Wheel Alignment',
      'GWM Tank 500 Off-Road Suspension & 4x4 Maintenance',
      'TPU Paint Protection Film (PPF) for Haval H6 & Jolion',
    ],
    pricingRange: 'PKR 4,500 - PKR 165,000',
    faqs: [
      {
        question: 'Can you service Haval H6 1.5T and 2.0T 7-speed dual-clutch gearboxes in Islamabad?',
        answer: 'Yes. We service the Great Wall Motor (GWM) 7DCT wet dual-clutch transmission used in Haval H6 and Jolion, executing fluid exchanges and clutch adaptations with diagnostic software.',
      },
      {
        question: 'Do you service Haval H6 HEV and Jolion Hybrid battery systems?',
        answer: 'Yes. We diagnose and service Haval Direct Hybrid Transmission (DHT) powertrains, inspecting the high-voltage lithium battery pack, hybrid cooling circuits, and electric drive motors.',
      },
      {
        question: 'Can you calibrate Haval driver assistance radars and cameras?',
        answer: 'Yes. We perform ADAS camera and radar calibration checks on Haval front millimeter-wave radar sensors, lane departure cameras, and blind-spot monitors.',
      },
      {
        question: 'How do you troubleshoot Haval infotainment screen freezing and instrument cluster lag?',
        answer: 'We inspect CAN-bus communication, perform module resets, and verify power and ground wiring stability to help resolve infotainment and display glitches.',
      },
      {
        question: 'What synthetic engine oil and maintenance schedule does HyperTune use for Haval engines?',
        answer: 'We use API SP / ACEA C2/C5 0W-20 and 5W-30 fully synthetic lubricants matched to GWM direct-injection turbo engines.',
      },
      {
        question: 'Do you source GWM Haval brake pads, air filters, and cooling components?',
        answer: 'Yes. We source Haval-spec consumables including brake pads, oil filters, spark plugs, and coolant hoses for scheduled servicing and repairs.',
      },
    ],
    seo: {
      title: 'Haval & Great Wall Motors Specialist Islamabad | HyperTune Garage',
      description: 'Independent Haval specialist workshop in Islamabad & Rawalpindi. Computerized Haval diagnostics, Haval H6 HEV hybrid care, H6 2.0T AWD service, Jolion repairs & PPF film protection.',
      keywords: ['haval repair islamabad', 'haval specialist rawalpindi', 'haval h6 hev service', 'haval jolion maintenance', 'gwm workshop islamabad', 'haval ppf islamabad'],
    },
  },
  {
    id: 'mg-specialist',
    slug: 'mg-repair-islamabad',
    name: 'MG Specialist Workshop & Electric Care Islamabad',
    tagline: 'Computerized MG Diagnostics, MG HS 1.5T / Trophy, MG ZS EV & MG 4 / MG 5 Servicing',
    logoBadge: 'MG Specialist',
    heroImage: images.brandMgService,
    overview: 'HyperTune Garage is an independent MG (Morris Garages) repair and maintenance workshop in Sector O-9, Islamabad serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners, our technicians maintain MG HS (1.5T Turbo, 2.0T Trophy AWD, and PHEV Plug-in Hybrid), MG ZS, MG ZS EV, MG 4 Electric, and MG 5—handling dual-clutch transmission calibration, turbo wastegate checks, and EV battery diagnostics.',
    modelsCovered: [
      'MG HS (1.5L Turbo Petrol, 2.0L Turbo Trophy AWD)',
      'MG HS PHEV (Plug-in Hybrid 10-Speed EDU Transmission)',
      'MG ZS (1.5L VTi-Tech Petrol 4-Speed Auto / CVT)',
      'MG ZS EV (100% Electric SUV High-Voltage Diagnostics)',
      'MG 4 EV & MG 5 EV (Pure Electric Hatchback / Sedan)',
      'MG GT (1.5T Fastback Sedan with 7-Speed Wet DCT)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & High-Voltage Testing Interface',
    commonIssuesAndFixes: [
      {
        issue: 'MG HS 7-Speed DCT Gearbox Clunking & Hesitation in 1st/2nd Gear',
        solution: 'Transmission TCU adaptation, DCT hydraulic fluid flush with low-friction oil, and dual-clutch calibration.',
      },
      {
        issue: 'MG HS 1.5T Turbo Boost Drop & Check Engine Light (P0299)',
        solution: 'Electronic turbo wastegate solenoid diagnosis, intercooler boost hose pressure leak test, and direct injector cleaning.',
      },
      {
        issue: 'MG ZS EV / HS PHEV High-Voltage Battery Isolation Warning',
        solution: 'High-voltage safety disconnect, inverter cooling fluid flush with non-conductive coolant, and cell state-of-health test.',
      },
      {
        issue: 'Electronic Power Steering Stiffening & Lane Assist Calibration Warning',
        solution: 'Steering torque angle sensor calibration, ADAS front windscreen camera alignment, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'Computerized MG Health Scans & Live Sensor Telemetry',
      'MG HS 7-Speed Dual-Clutch (DCT) Fluid Service & Clutch Adaptation',
      'MG ZS EV & MG 4 Electric Battery State-of-Health Diagnostic Scans',
      'MG HS PHEV Plug-in Hybrid Inverter & 10-Speed EDU Transmission Service',
      'Brake Pad Upgrades, Disc Skimming & ABS Actuator Bleeding',
      'Suspension Strut & Control Arm Bushing Overhaul',
      'TPU Paint Protection Film (PPF) for MG HS & MG GT',
    ],
    pricingRange: 'PKR 4,000 - PKR 160,000',
    faqs: [
      {
        question: 'How do you fix DCT transmission lag and jerky acceleration on MG HS in Islamabad?',
        answer: 'MG HS dual-clutch hesitation is addressed by inspecting clutch clearance values, flushing transmission/actuator fluid, and running Transmission Control Module (TCM) calibration routines.',
      },
      {
        question: 'Can you service MG ZS EV and MG4 electric vehicle high-voltage batteries?',
        answer: 'Yes. Our technicians perform battery state-of-health scans, insulation resistance checks, and electric drive reduction gearbox oil changes on MG EVs.',
      },
      {
        question: 'Why does the MG HS 1.5T engine run hot in summer and how do you resolve it?',
        answer: 'High under-hood temperatures can expose air pockets in the cooling circuit, thermostat issues, or weak radiator fans. We vacuum-bleed the coolant system and test fan operation.',
      },
      {
        question: 'How do you repair MG electric tailgate actuator and panoramic sunroof squeaks?',
        answer: 'We clean and lubricate panoramic sunroof sliding tracks and replace failing electric tailgate spindle struts to restore smooth motorized operation.',
      },
      {
        question: 'How do you run computerized MG diagnostic scans?',
        answer: 'We use multi-brand computerized diagnostic scanners to read fault codes, run module tests, and perform adaptation resets across MG HS, ZS, and GT models.',
      },
      {
        question: 'Can you supply MG-spec spark plugs, ignition coils, and brake pads?',
        answer: 'Yes. We source MG-spec parts including iridium spark plugs, ignition coils, filters, and brake pads matched to your vehicle estimate.',
      },
    ],
    seo: {
      title: 'MG Specialist Workshop & Electric Care Islamabad | HyperTune Garage',
      description: 'Independent MG workshop in Islamabad & Rawalpindi. Computerized MG diagnostics, MG HS turbo care, MG ZS EV electric maintenance, DCT transmission calibration & PPF film.',
      keywords: ['mg repair islamabad', 'mg specialist rawalpindi', 'mg hs service', 'mg zs ev maintenance', 'mg gt repair', 'mg diagnostic'],
    },
  },
  {
    id: 'byd-specialist',
    slug: 'byd-ev-service-islamabad',
    name: 'BYD EV & Hybrid Specialist Workshop Islamabad',
    tagline: 'Computerized BYD Diagnostics, Blade Battery SOH Scans, Atto 3, Seal, Sealion & Song Plus Care',
    logoBadge: 'BYD Specialist',
    heroImage: images.brandBydService,
    overview: 'HyperTune Garage is an independent electric and hybrid service workshop in Sector O-9, Islamabad supporting BYD (Build Your Dreams) vehicles across Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic scanners and high-voltage testing equipment, we service BYD Atto 3, BYD Seal, BYD Sealion 6, BYD Dolphin, and BYD Song Plus DM-i—including Blade Battery State-of-Health (SOH) scans, DM-i hybrid maintenance, high-voltage coolant flushes, and detailing.',
    modelsCovered: [
      'BYD Atto 3 (e-Platform 3.0 Blade Battery Crossover)',
      'BYD Seal (CTB Technology Performance Sedan 530HP Dual Motor AWD)',
      'BYD Sealion 6 & Song Plus (DM-i Super Hybrid Crossover)',
      'BYD Dolphin & Seagull (Compact Urban EV Series)',
      'BYD Han EV & Tang EV (Flagship Luxury Sedan & SUV)',
      'BYD Shark PHEV Pick-up Truck (DMO Super Hybrid Off-Roader)',
    ],
    diagnosticSoftware: 'Multi-Brand EV Diagnostics & High-Voltage Battery Health Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Blade Battery Pack Range Drop & SOH Calibration Drift',
        solution: 'High-voltage cell telemetry logging, thermal management cycle balancing, and BMS adaptation.',
      },
      {
        issue: 'BYD DM-i Super Hybrid Engine High-RPM Drone & Coolant Warning',
        solution: 'Cooling water pump diagnosis, non-conductive EV coolant flush, and 1.5L Xiaoyun engine tune-up.',
      },
      {
        issue: 'DiPilot ADAS Radar & 360-Degree Camera Misalignment',
        solution: 'ADAS camera and radar calibration checks for millimeter-wave radar and surround-view camera alignment.',
      },
      {
        issue: 'Regenerative Brake Squeal & Hydraulic Brake Actuator Noise',
        solution: 'Brake-by-wire booster inspection, brake pad renewal, and high-temp slider lubrication.',
      },
    ],
    specializedServices: [
      'Computerized BYD Health Scans & BMS Checks',
      'High-Voltage Battery Health, Insulation & Cell-Balance Testing',
      'DM-i / DM-p Super Hybrid Powertrain Servicing & High-Voltage Inverter Check',
      'Thermal Management Heat Pump System & Low-Conductivity Coolant Flush',
      'Electronic Suspension, Subframe Bushings & Computerized Wheel Alignment',
      'CAD Computer Pre-Cut TPU Paint Protection Film (PPF) for BYD Seal & Atto 3',
    ],
    pricingRange: 'PKR 4,500 - PKR 175,000',
    faqs: [
      {
        question: 'Can HyperTune Garage service BYD Atto 3, Seal, and Dolphin in Islamabad & Rawalpindi?',
        answer: 'Yes. We service BYD electric and DM-i hybrid vehicles, providing diagnostic scans, high-voltage battery health checks, heat pump AC servicing, and chassis maintenance.',
      },
      {
        question: 'How do you inspect and evaluate BYD Blade Battery cell health?',
        answer: 'We connect EV diagnostic interfaces to read individual lithium iron phosphate (LFP) cell voltages, state of health (SOH), internal resistance, and module temperature sensors.',
      },
      {
        question: 'Can you service BYD electric vehicle high-voltage coolant and gear reduction oil?',
        answer: 'Yes. BYD thermal management systems require specialized low-conductivity dielectric coolant and synthetic reduction gear oil, which we replace following manufacturer bleed procedures.',
      },
      {
        question: 'How do you diagnose high-voltage insulation warnings and charging port errors?',
        answer: 'We perform high-voltage battery insulation testing to check high-voltage cable shielding, inspect fast-charging contactors, and repair damaged GB/T or CCS2 charging port pins.',
      },
      {
        question: 'Can you calibrate BYD DiPilot radar, parking sensors, and emergency braking?',
        answer: 'Yes. We perform ADAS camera and radar calibration checks for BYD DiPilot driver assistance systems following bumper or windshield repairs.',
      },
      {
        question: 'Do you install Paint Protection Film (PPF) on BYD electric vehicles?',
        answer: 'Yes. We offer pre-cut computerized CAD TPU PPF coverage for BYD Atto 3, Seal, and Dolphin panels to help shield paint from highway stone chips.',
      },
    ],
    seo: {
      title: 'BYD EV & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent BYD EV & Hybrid workshop in Islamabad & Rawalpindi. Computerized BYD diagnostics, Blade Battery SOH scans, BYD Seal, Atto 3, Sealion & Song Plus DM-i care.',
      keywords: ['byd repair islamabad', 'byd specialist rawalpindi', 'byd seal service', 'byd atto 3 maintenance', 'blade battery repair', 'byd ev workshop islamabad'],
    },
  },
  {
    id: 'chery-specialist',
    slug: 'chery-repair-islamabad',
    name: 'Chery Specialist Workshop & Turbo Care Islamabad',
    tagline: 'Computerized Chery Diagnostics, Tiggo 4 Pro, Tiggo 8 Pro 1.6T / PHEV & Omoda 5 Servicing',
    logoBadge: 'Chery Specialist',
    heroImage: images.brandCheryService,
    overview: 'HyperTune Garage provides independent maintenance and diagnostic services for Chery and Omoda vehicles in Sector O-9, Islamabad serving Islamabad and Rawalpindi. Equipped with Chery-compatible diagnostic tools, our mechanics service Tiggo 4 Pro (1.5L Turbo CVT), Tiggo 8 Pro (1.6L TGDI 7-Speed DCT & 2.0T AWD), Tiggo 8 Pro e+ PHEV, and Omoda 5—handling ACTECO TGDI intake carbon cleaning, dual-clutch transmission adaptations, and suspension repairs.',
    modelsCovered: [
      'Chery Tiggo 8 Pro (1.6L TGDI Direct Injection 7-Speed Wet DCT 7-Seater)',
      'Chery Tiggo 8 Pro Max (2.0L TGDI AWD 250HP Flagship)',
      'Chery Tiggo 8 Pro e+ (Plug-in Hybrid DHT Powertrain)',
      'Chery Tiggo 4 Pro (1.5L Turbo CVT Compact SUV)',
      'Chery Omoda 5 / Omoda E5 (1.5T Turbo & 100% Electric Crossover)',
      'Chery Arrizo 6 Pro & Arrizo 8 Luxury Sedans',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Hybrid Telemetry Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Tiggo 8 Pro 7-Speed Wet DCT Gear Hunting & Hesitation at Red Lights',
        solution: 'TCU software adaptation, wet dual-clutch solenoid pressure test, and synthetic DCT transmission fluid replacement.',
      },
      {
        issue: '1.6L / 2.0L TGDI ACTECO Engine Carbon Crust on Intake Valves',
        solution: 'Intake valve carbon cleaning, high-pressure direct fuel injector cleaning, and iridium spark plugs.',
      },
      {
        issue: 'Chery Tiggo 4 Pro CVT Acceleration Drone & Whining Noise',
        solution: 'CVT fluid flush with approved high-shear fluid, internal magnet pan clean, and transmission line pressure reset.',
      },
      {
        issue: 'Electronic Parking Brake (EPB) / Hill Hold System Warning Light',
        solution: 'Rear caliper EPB motor calibration, brake rotor skimming, and ABS sensor harness inspection.',
      },
    ],
    specializedServices: [
      'Chery Computer Scans & ACTECO Engine Sensor Diagnostics',
      'Tiggo 8 Pro 7-Speed Wet DCT & Tiggo 4 Pro CVT Fluid Service',
      'ACTECO Direct Injection Turbo Engine Maintenance & De-coking',
      'Tiggo 8 Pro e+ PHEV Dedicated Hybrid Transmission (DHT) Servicing',
      'Brake Disc Skimming, Brake Pads & Computerized Wheel Alignment',
      'Car AC Climate Control Compressor Overhaul & Leak Testing',
      'TPU Paint Protection Film (PPF) for Tiggo 8 Pro & Omoda 5',
    ],
    pricingRange: 'PKR 3,500 - PKR 150,000',
    faqs: [
      {
        question: 'Can you service Chery Tiggo 4 Pro and Tiggo 8 Pro in Islamabad?',
        answer: 'Yes. We provide maintenance and repair for Chery Tiggo 4 Pro and Tiggo 8 Pro, including 1.5T, 1.6T, and 2.0T TGDI engine diagnostics, dual-clutch transmission flushes, and suspension work.',
      },
      {
        question: 'How do you maintain the 1.6T and 2.0T TGDI engines on Chery Tiggo models?',
        answer: 'We use API SP full synthetic oils to protect against turbo coking and timing chain wear, inspect intercooler charge piping, and service high-pressure direct injectors.',
      },
      {
        question: 'How often should the 7-speed wet dual-clutch transmission fluid be changed on Chery?',
        answer: 'We recommend replacing wet DCT transmission fluid and internal filter elements around every 40,000 km to help maintain smooth shifting and reduce clutch shudder.',
      },
      {
        question: 'Can you diagnose Chery electronic parking brake and auto-hold glitches?',
        answer: 'Yes. We test electronic parking brake (EPB) actuator caliper motors, inspect wheel speed sensors, and calibrate auto-hold thresholds using computer diagnostics.',
      },
      {
        question: 'Do you source oil filters and lubricants for Chery vehicles?',
        answer: 'Yes. We source Chery-spec replacement filters, spark plugs, brake pads, and approved synthetic lubricants at our Islamabad workshop.',
      },
      {
        question: 'Can you service Chery Tiggo dual-zone automatic climate control systems?',
        answer: 'Yes. We service Tiggo HVAC systems, repairing blend door actuators, leak-testing condensers, and recharging measured R134a refrigerant.',
      },
    ],
    seo: {
      title: 'Chery Specialist Workshop & Turbo Care Islamabad | HyperTune Garage',
      description: 'Independent Chery specialist in Islamabad & Rawalpindi. Computerized Chery diagnostics, Tiggo 8 Pro 1.6T DCT service, Tiggo 4 Pro CVT repairs & Omoda 5 maintenance.',
      keywords: ['chery repair islamabad', 'chery specialist rawalpindi', 'tiggo 8 pro service', 'tiggo 4 pro maintenance', 'omoda 5 repair', 'chery workshop police foundation'],
    },
  },
  {
    id: 'isuzu-specialist',
    slug: 'isuzu-dmax-repair-islamabad',
    name: 'Isuzu D-Max & Commercial 4x4 Specialist Islamabad',
    tagline: 'Computerized Isuzu Diagnostics, D-Max 3.0L / 1.9L Ddi BluePower, V-Cross & NPR Fleet Care',
    logoBadge: 'Isuzu Specialist',
    heroImage: images.brandIsuzuService,
    overview: 'HyperTune Garage is an independent diesel and 4x4 workshop in Sector O-9, Islamabad serving Isuzu owners across Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostic scanners, our diesel mechanics service Isuzu D-Max (V-Cross 3.0L 4JJ1/4JJ3, Hi-Spark 2.5L, and 1.9L Ddi BluePower), Isuzu MU-X, and Isuzu N-Series/NPR commercial fleets—handling 4JJ1/4JJ3 common rail diesel servicing, turbocharger repairs, 4x4 transmission servicing, leaf spring suspension work, and PPF.',
    modelsCovered: [
      'Isuzu D-Max V-Cross (3.0L 4JJ1-TCX & 4JJ3-TCX 4x4 AT/MT)',
      'Isuzu D-Max Hi-Lander & Hi-Spark (2.5L 4JK1-TC & 1.9L RZ4E-TC BluePower)',
      'Isuzu MU-X 7-Seater 4x4 SUV',
      'Isuzu N-Series / NPR / NQR Commercial Trucks (4HG1, 4HK1 Diesel Engines)',
      'Isuzu Trooper & Bighorn 4x4 (Classic Series)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Diesel Common Rail Testing',
    commonIssuesAndFixes: [
      {
        issue: '4JJ1 / 4JJ3 Engine Black Smoke & Loss of Boost on Highway Climb',
        solution: 'Variable geometry turbocharger (VGT) vane cleaning, electronic actuator calibration, and common rail diesel injector servicing.',
      },
      {
        issue: 'D-Max 4x4 Electronic Shift-on-the-Fly Selector Flashing',
        solution: 'Transfer case shift actuator solenoid testing, wiring harness repair, and front differential vacuum actuator service.',
      },
      {
        issue: 'Heavy Leaf Spring Rattle & Rough Ride on Rawalpindi-Islamabad Terrain',
        solution: 'Shackle bushing replacement, greaseable shackle pins, and heavy-duty shock absorber replacement.',
      },
      {
        issue: 'Aisin 6-Speed Automatic Transmission Shudder Under Heavy Load',
        solution: 'Transmission fluid flush with Isuzu-spec ATF, valve body solenoid clean, and transmission pan filter renewal.',
      },
    ],
    specializedServices: [
      'Computerized Isuzu Health Scans & Injector Compensation Coding',
      '4JJ1 / 4JJ3 / RZ4E Turbo Diesel Engine Overhauls to Manufacturer Tolerances',
      'Common Rail Injector & High-Pressure Fuel Pump Inspection & Servicing',
      'Aisin Automatic & 6-Speed Manual 4x4 Transmission & Transfer Case Service',
      'Off-Road Suspension, Leaf Springs & Computerized Wheel Alignment',
      'Brake Master Cylinder & Commercial Brake Drum / Disc Overhauls',
      'TPU Paint Protection Film (PPF) for Isuzu D-Max V-Cross',
    ],
    pricingRange: 'PKR 4,000 - PKR 220,000',
    faqs: [
      {
        question: 'Can you service Isuzu D-Max 3.0L and 1.9L BluePower turbo diesel engines in Islamabad?',
        answer: 'Yes. We service Isuzu 4JJ1, 4JJ3 3.0L, and RZ4E 1.9L D-Max diesel engines, handling common-rail injection pumps, turbochargers, and valve train repairs.',
      },
      {
        question: 'How do you clean and regenerate choked Isuzu D-Max DPF filters and EGR valves?',
        answer: 'We inspect soot loading via computerized diagnostics, clean carbon-choked EGR coolers and serviceable DPFs carefully without damaging catalyst substrates, and run computer regenerations.',
      },
      {
        question: 'How do you service Isuzu 4x4 Terrain Command shift-on-the-fly transfer cases?',
        answer: 'We service electronic 4WD shift actuators, repair transfer case components, replace output shaft seals, and refill with synthetic gear lubricants.',
      },
      {
        question: 'How often should diesel fuel filters and water separators be replaced on D-Max?',
        answer: 'Given local diesel fuel quality, fuel filters and water separators should be drained at routine checks and replaced on schedule to help protect high-pressure fuel injectors.',
      },
      {
        question: 'Can you overhaul Isuzu heavy-duty leaf spring and independent front suspensions?',
        answer: 'Yes. We replace worn leaf spring bushings, shackle pins, front control arm ball joints, and shock absorbers.',
      },
      {
        question: 'What engine oil spec is required for Isuzu common-rail diesel engines in Pakistan?',
        answer: 'We use API CK-4 / CJ-4 15W-40 and 5W-40 heavy-duty synthetic diesel motor oils formulated to control soot dispersion and resist thermal oxidation.',
      },
    ],
    seo: {
      title: 'Isuzu D-Max & Commercial 4x4 Specialist Islamabad | HyperTune Garage',
      description: 'Independent Isuzu workshop in Islamabad & Rawalpindi. Computerized Isuzu diagnostics, D-Max V-Cross 3.0L turbo diesel repair, 4JJ1/4JJ3 engine rebuilds & 4x4 transmission servicing.',
      keywords: ['isuzu repair islamabad', 'isuzu dmax specialist rawalpindi', 'isuzu diagnostic', 'isuzu 4jj1 engine overhaul', 'isuzu dmax v-cross maintenance', 'isuzu workshop police foundation'],
    },
  },
  {
    id: 'faw-specialist',
    slug: 'faw-repair-islamabad',
    name: 'FAW Specialist Repair & Fleet Maintenance Islamabad',
    tagline: 'FAW Diagnostic System, V2 1.3L VCT-i, Carrier, X-PV & Commercial Truck Care',
    logoBadge: 'FAW Specialist',
    heroImage: images.brandFawService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for FAW passenger vehicles and light commercial fleets across Islamabad and Rawalpindi. Equipped with FAW computerized diagnostic scanners and experienced technicians, we service FAW V2 (1.3L VCT-i), FAW X-PV, FAW Carrier, and FAW commercial trucks—covering engine rebuilds, gearbox repairs, cooling system overhauls, and suspension work.',
    modelsCovered: [
      'FAW V2 (1.3L 16-Valve VCT-i Petrol Hatchback)',
      'FAW X-PV & X-PV Dual AC (1.0L Family Van)',
      'FAW Carrier 1.0L Mini Pick-up Truck',
      'FAW Sirius S80 (1.5L 7-Seater MPV)',
      'FAW J5P / J6 Heavy Prime Movers & Dump Trucks',
    ],
    diagnosticSoftware: 'FAW Diagnostic Scanner & OBD-II Multiplexer',
    commonIssuesAndFixes: [
      {
        issue: 'FAW V2 Engine Idle Hunting, RPM Fluctuations & Low Mileage',
        solution: 'Throttle body carbon clean, idle air control (IAC) valve testing, oxygen sensor diagnostic, and spark plug replacement.',
      },
      {
        issue: 'FAW X-PV / Carrier Overheating in Summer Traffic',
        solution: 'Radiator descaling and flushing, water pump replacement, electric cooling fan relay testing, and coolant flush.',
      },
      {
        issue: 'Gear Grinding & Hard Shifting into 1st / Reverse on FAW V2',
        solution: 'Clutch release bearing replacement, clutch pressure plate renewal, and transmission gear oil service.',
      },
      {
        issue: 'Front Suspension Squeaks & Steering Wobble on Islamabad Highway',
        solution: 'Control arm bushing renewal, tie rod end replacement, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'FAW Computer Diagnostic Health Scans & Sensor Reset',
      'FAW V2 1.3L VCT-i Engine Overhauls & Servicing',
      'Manual Transmission Gearbox Rebuilding & Clutch Pack Replacement',
      'Cooling System Radiator Flush & Coolant Upgrade',
      'Suspension, Steering Rack & Bushing Refresh',
      'Car AC Repair & Refrigerant Recharge',
      'Commercial Fleet Periodic Preventive Maintenance',
    ],
    pricingRange: 'PKR 2,500 - PKR 65,000',
    faqs: [
      {
        question: 'Can you service FAW V2 1.3L engines and manual transmissions in Islamabad?',
        answer: 'Yes. We provide mechanical and electrical servicing for FAW V2 hatchbacks, including 1.3L 4-cylinder engine tuning, clutch plate replacement, and gearbox overhauls.',
      },
      {
        question: 'How do you fix FAW Carrier and X-PV commercial van overheating in summer?',
        answer: 'Summer overheating in under-seat engines is addressed by flushing mineral scale from the cooling system, replacing stuck thermostats, servicing radiators, and checking electric fan relays.',
      },
      {
        question: 'Where do you source FAW spare parts and suspension components?',
        answer: 'We source FAW-spec replacement parts including suspension tie rods, ball joints, brake rotors, brake master cylinders, and engine mountings.',
      },
      {
        question: 'How do you troubleshoot FAW electronic fuel injection and throttle body idling?',
        answer: 'We clean electronic throttle bodies, test manifold absolute pressure (MAP) sensors, and check idle air control operation to restore steady idling.',
      },
      {
        question: 'Can you repair FAW air conditioning compressor leaks and weak cooling?',
        answer: 'Yes. We test AC compressor pressures, inspect front and rear evaporator cooling coils for leaks, and recharge with measured R134a refrigerant.',
      },
      {
        question: 'What maintenance schedule does HyperTune recommend for FAW vehicles?',
        answer: 'We follow vehicle-specific intervals—typically oil and filter changes every 5,000 km, gear oil and brake fluid checks every 20,000 km, and regular suspension inspection.',
      },
    ],
    seo: {
      title: 'FAW Specialist Repair & Fleet Maintenance Islamabad | HyperTune Garage',
      description: 'Independent FAW workshop in Islamabad & Rawalpindi. FAW V2 1.3L repairs, X-PV cooling overhauls, Carrier fleet servicing & manual transmission rebuilds.',
      keywords: ['faw repair islamabad', 'faw v2 specialist rawalpindi', 'faw xpv service', 'faw carrier maintenance', 'faw workshop police foundation'],
    },
  },
  {
    id: 'daihatsu-specialist',
    slug: 'daihatsu-service-islamabad',
    name: 'Daihatsu Japanese Kei Car Specialist Islamabad',
    tagline: 'Multi-Brand Computerized Diagnostics, Mira, Move, Cast, Hijet, Coure & Terios 4x4 Care',
    logoBadge: 'Daihatsu Specialist',
    heroImage: images.brandDaihatsuService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Daihatsu Japanese imported kei cars and domestic classics serving Islamabad and Rawalpindi. Equipped with computerized diagnostic scanners, our mechanics service Mira (ES & Custom), Move (Custom Turbo), Cast, Tanto, Hijet, Coure, and Terios 4x4—handling Eco-Idle start-stop battery glitches, CVT servicing, KF-VE/KF-DET engine rebuilds, and suspension work.',
    modelsCovered: [
      'Daihatsu Mira (ES, Custom, Gino, Cocoa 660cc KF-VE Engine)',
      'Daihatsu Move & Move Custom (660cc KF-DET Turbo & Eco-Idle)',
      'Daihatsu Cast (Style, Activa, Sport 660cc Turbo)',
      'Daihatsu Tanto & Tanto Custom (Slide Door Kei Van)',
      'Daihatsu Hijet (S321V / S331V Cargo Van & 4x4 Mini Truck)',
      'Daihatsu Coure (850cc Classic PKDM)',
      'Daihatsu Terios & Terios Kid (4x4 Mini SUV)',
      'Daihatsu Rocky & Taft (1.0L Turbo / 1.2L New Generation)',
    ],
    diagnosticSoftware: 'Computerized Multi-Brand Diagnostic Scanners & Global OBD-II CAN Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Eco-Idle Flashing Orange & Stop-Start System Inoperative (Mira / Move)',
        solution: 'Eco-Idle secondary battery conductance test, current sensor recalibration, and EFB battery replacement.',
      },
      {
        issue: 'CVT Transmission Drone, Whining & Hesitation on Incline',
        solution: 'CVT fluid flush with Daihatsu-spec Amix CVT Fluid-DC, pan magnet cleaning, strainer replacement, and calibration.',
      },
      {
        issue: 'KF-VE / KF-DET 660cc Engine Oil Burning & Rattle on Acceleration',
        solution: 'Piston ring cleaning, valve stem seal replacement, PCV valve renewal, and synthetic 0W-20/5W-30 oil service.',
      },
      {
        issue: 'Suspension Knocking & Strut Mount Squeaks on Rawalpindi Roads',
        solution: 'Front strut mount replacement, lower arm bush renewal, stabilizer bar link replacement, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'Full-System Computerized Diagnostics & Eco-Idle Calibration',
      'KF-VE & KF-DET 660cc 3-Cylinder Engine Overhauls & Timing Chain Service',
      'Daihatsu Amix CVT Fluid Servicing & Transmission Adaptation Reset',
      'Japanese Imported Car AC Overhaul & Cabin Cooling Service',
      'Suspension, Steering Rack & Bushing Overhaul',
      'Brake Pads, Disc Lathe Skimming & ABS Checks',
      'Ceramic Coating & Paint Protection Film (PPF) for Daihatsu Rocky & Mira',
    ],
    pricingRange: 'PKR 2,500 - PKR 75,000',
    faqs: [
      {
        question: 'Can you service Japanese imported Daihatsu Mira, Move, Cast, and Taft in Islamabad?',
        answer: 'Yes. We service imported Japanese 660cc Daihatsu models, handling KF-VE naturally aspirated and KF-DET turbocharged engines, Eco-Idle circuits, and CVTs.',
      },
      {
        question: 'How do you diagnose and repair Daihatsu KF engine oil consumption?',
        answer: 'Daihatsu 660cc engines can develop stuck piston oil control rings when run on mineral oils or extended intervals. We inspect cylinder compression, service piston rings and valve stem oil seals where required, and use 0W-20 API SP synthetic oils.',
      },
      {
        question: 'How often should CVT transmission fluid be replaced on Daihatsu 660cc cars?',
        answer: 'Because of small CVT fluid capacity and urban heat, we recommend servicing Daihatsu CVT fluid around every 25,000 to 30,000 km with Daihatsu-spec CVT Fluid-DC.',
      },
      {
        question: 'Can you calibrate Daihatsu Smart Assist stereo camera emergency braking systems?',
        answer: 'Yes. If your windshield was replaced or camera error alerts appear on the dashboard, we perform Smart Assist forward camera calibration checks.',
      },
      {
        question: 'How do you repair Daihatsu front lower control arm and engine mount vibrations?',
        answer: 'Excessive idle vibration is often caused by collapsed hydraulic right-hand engine mounts. We inspect and replace worn engine mounts and control arm bushings.',
      },
      {
        question: 'Do you stock Daihatsu spark plugs, air filters, and brake shoes?',
        answer: 'Yes. We source Daihatsu-spec filters, NGK iridium spark plugs, and brake friction components for routine service and repairs.',
      },
    ],
    seo: {
      title: 'Daihatsu Japanese Kei Car Specialist Islamabad | HyperTune Garage',
      description: 'Independent Daihatsu workshop in Islamabad & Rawalpindi. Computerized diagnostics, Mira Eco-Idle fix, Move Turbo repairs, CVT fluid flush & Hijet maintenance.',
      keywords: ['daihatsu repair islamabad', 'daihatsu specialist rawalpindi', 'mira eco idle fix', 'daihatsu move turbo maintenance', 'daihatsu cvt service', 'daihatsu workshop police foundation'],
    },
  },
  {
    id: 'nissan-specialist',
    slug: 'nissan-repair-islamabad',
    name: 'Nissan Specialist Workshop & Xtronic CVT Care Islamabad',
    tagline: 'Computerized Diagnostics, Xtronic CVT Overhaul, Note e-Power, X-Trail, Juke & Patrol V8',
    logoBadge: 'Nissan Specialist',
    heroImage: images.brandNissanService,
    overview: 'HyperTune Garage is an independent Nissan workshop in Sector O-9, Islamabad serving Islamabad and Rawalpindi. Equipped with computerized diagnostic software, our technicians service Nissan Note e-Power, X-Trail (T31/T32/T33 Hybrid), Dayz/Roox, Juke (1.6T Turbo), Sunny, Kicks, Navara, and Patrol Y62 V8—handling Xtronic CVT servicing, e-Power generator inverter checks, V8 engine repairs, and direct injection carbon cleaning.',
    modelsCovered: [
      'Nissan Note e-Power (HE12 / E13 1.2L Range-Extender Series Hybrid)',
      'Nissan X-Trail (T31, T32, T33 e-Power Hybrid & 2.0L/2.5L AWD)',
      'Nissan Dayz & Roox (660cc BR06 / 3B20 Engine JDM Kei Car)',
      'Nissan Juke (1.5L HR15DE & 1.6L MR16DDT Turbo DIG-T)',
      'Nissan Sunny & Latio (1.3L, 1.5L & 1.6L Sedans)',
      'Nissan Patrol (Y61 TB48 & Y62 VK56VD 5.6L V8 Luxury 4x4)',
      'Nissan Navara & NP300 (2.3L / 2.5L YD25 Turbo Diesel 4x4)',
      'Nissan GT-R R35 (VR38DETT Performance Care & GR6 Gearbox)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics, CAN Bus Interfaces & e-Power Hybrid System Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Nissan Xtronic CVT Judder, RPM Slipping & Overheating in Hot Weather',
        solution: 'CVT fluid flush using Nissan-spec NS-2 / NS-3 fluid, transmission oil cooler check, stepper motor inspection, and TCM reset.',
      },
      {
        issue: 'Nissan Note e-Power Inverter Warning & Power Generator Drop',
        solution: 'Inverter cooling circuit bleeding, generator phase test, 12V auxiliary battery check, and high-voltage module inspection.',
      },
      {
        issue: 'MR16DDT / HR15DE Engine Carbon Clog on Valves & Cold Misfire',
        solution: 'Intake valve carbon cleaning, direct fuel injector cleaning, and iridium spark plug renewal.',
      },
      {
        issue: 'Patrol Y62 V8 Hydraulic Body Motion Control (HBMC) Sway Warning',
        solution: 'HBMC hydraulic pressure inspection, accumulator check, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'Full-System Computerized Diagnostics & Live Telemetry Logging',
      'Nissan Xtronic CVT Transmission Overhaul, Valve Body Repair & NS-3 Fluid Service',
      'Nissan Note e-Power & X-Trail e-Power Series Hybrid System Maintenance',
      'Patrol Y62 VK56 5.6L V8 Engine Servicing & Timing Chain Overhauls',
      'Electronic Power Steering, Suspension Bushings & Computerized Wheel Alignment',
      'Brake Pad Upgrades, Rotor Skimming & ABS Calibrations',
      'TPU Paint Protection Film (PPF) for Nissan Patrol & Note e-Power',
    ],
    pricingRange: 'PKR 3,500 - PKR 250,000',
    faqs: [
      {
        question: 'How do you prevent and repair Nissan X-Trail, Juke, and Note CVT transmission shudder?',
        answer: 'Nissan Xtronic CVTs can suffer from valve body sticking or belt wear when fluid degrades. We replace internal paper and pan filters, flush Nissan-spec NS-3 fluid, and clear CVT degradation counters.',
      },
      {
        question: 'Do you service Nissan Note e-Power series hybrid generators and inverters in Islamabad?',
        answer: 'Yes. We service Nissan e-Power systems, diagnosing the HR12DE range-extender generator engine, testing high-voltage inverter coolant pumps, and checking battery health.',
      },
      {
        question: 'Do you offer computerized diagnostic scanning and active testing for Nissan vehicles?',
        answer: 'Yes. We use multi-brand computerized diagnostic software with compatible interfaces to read BCM fault codes, calibrate CVT clutches, and run idle timing procedures.',
      },
      {
        question: 'How often should Nissan NS-2 / NS-3 CVT fluid be changed in Pakistan?',
        answer: 'In hot summer traffic, Nissan CVT fluid is typically serviced every 35,000 to 40,000 km to help prevent overheating limp mode and internal pulley wear.',
      },
      {
        question: 'Can you service Nissan Patrol Y61 and Y62 V8 4x4 drivetrains and hydraulic suspension?',
        answer: 'Yes. We service Nissan Patrol VK56VD 5.6L V8 engines, Hydraulic Body Motion Control (HBMC) lines, and 4WD transfer case components.',
      },
      {
        question: 'How do you resolve Nissan electronic throttle actuator and mass airflow sensor faults?',
        answer: 'We clean throttle valve plates, run Idle Air Volume Learn (IAVL) routines using computerized diagnostics, and test mass airflow sensor voltage signals to stabilize idling.',
      },
    ],
    seo: {
      title: 'Nissan Specialist Workshop & Xtronic CVT Care Islamabad | HyperTune Garage',
      description: 'Independent Nissan workshop in Islamabad & Rawalpindi. Computerized diagnostics, Note e-Power hybrid care, Xtronic CVT repairs, X-Trail & Patrol V8 maintenance.',
      keywords: ['nissan repair islamabad', 'nissan specialist rawalpindi', 'nissan cvt repair', 'nissan note epower service', 'nissan patrol v8 workshop', 'nissan diagnostics islamabad'],
    },
  },
  {
    id: 'mitsubishi-specialist',
    slug: 'mitsubishi-repair-islamabad',
    name: 'Mitsubishi 4x4 & JDM Specialist Islamabad',
    tagline: 'Computerized Diagnostics, Pajero V6 / Turbo Diesel, Outlander PHEV, Lancer & Ek Wagon Care',
    logoBadge: 'Mitsubishi Specialist',
    heroImage: images.brandMitsubishiService,
    overview: 'HyperTune Garage is an independent Mitsubishi workshop in Sector O-9, Islamabad serving Islamabad and Rawalpindi. Equipped with computerized diagnostic scanners, our technicians maintain Pajero (3.0L/3.5L/3.8L V6 & 3.2L 4M41 Di-D), Outlander PHEV (Plug-in Hybrid), Lancer (1.3L/1.6L & Evolution), Mirage, Ek Wagon/Ek Custom, and Triton/L200—covering Super Select 4WD-II repairs, Outlander hybrid checks, and GDI intake valve cleaning.',
    modelsCovered: [
      'Mitsubishi Pajero (V60, V70, V80, V90 - 3.0L, 3.5L, 3.8L V6 & 3.2L Di-D Diesel)',
      'Mitsubishi Outlander & Outlander PHEV (Plug-in Hybrid Twin-Motor 4WD)',
      'Mitsubishi Lancer & Lancer Evolution (CS3, CY4, Evo 7/8/9/10 4B11T)',
      'Mitsubishi Ek Wagon, Ek Custom & Ek Space (660cc 3B20 / BR06 Engine)',
      'Mitsubishi Mirage & Attrage (1.0L & 1.2L 3A92 Engine CVT)',
      'Mitsubishi Triton / L200 (2.4L MIVEC 4N15 Turbo Diesel 4x4)',
      'Mitsubishi Galant & Eclipse Cross (1.5T MIVEC Turbo)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic Software & Compatible VCI Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Pajero Super Select 4WD-II Center Diff Lock Indicator Flashing',
        solution: 'Vacuum actuator switch replacement, 4WD transfer case solenoid harness repair, and front axle freewheel actuator service.',
      },
      {
        issue: 'Outlander PHEV "EV System Service Required" Warning',
        solution: 'High-voltage battery cell voltage and health testing, generator inverter cooling flush, and BMU reset.',
      },
      {
        issue: '3.2L 4M41 Di-D Turbo Diesel Black Smoke & Hard Cold Starting',
        solution: 'Common rail injector servicing, glow plug circuit overhaul, and fuel suction control valve (SCV) renewal.',
      },
      {
        issue: 'Ek Wagon / Mirage CVT Acceleration Shudder & Drone',
        solution: 'Transmission fluid flush with Mitsubishi-spec DiaQueen CVT Fluid J4, pan magnet cleaning, and primary pressure relearn.',
      },
    ],
    specializedServices: [
      'Full-System Computerized Scans & Sensor Calibrations',
      'Pajero Super Select 4WD-II Transfer Case, Differential & Transmission Overhauls',
      'Outlander PHEV High-Voltage Battery Balancing & Drive Motor Inverter Care',
      '4M41 / 4N15 Diesel & 6G72 / 6G74 / 6G75 V6 Engine Rebuilding',
      'Suspension Shocks, Control Arms & Computerized Wheel Alignment',
      'Brake Master Cylinder, Brake Pads & ABS System Bleeding',
      'TPU Paint Protection Film (PPF) for Mitsubishi Pajero & Outlander',
    ],
    pricingRange: 'PKR 3,500 - PKR 220,000',
    faqs: [
      {
        question: 'Can you service Mitsubishi Pajero 3.2 DiD diesel and 3.8 V6 gasoline engines?',
        answer: 'Yes. We provide overhauls and tuning for Mitsubishi Pajero 4M41 3.2L common-rail diesel and 6G75 3.8L MIVEC V6 engines, including timing guides and fuel pumps.',
      },
      {
        question: 'How do you maintain Mitsubishi Super Select 4WD-II transfer cases and center differentials?',
        answer: 'We diagnose flashing transfer case indicator lights, replace vacuum actuator switches on the front differential, and flush GL-5 transfer case and differential fluids.',
      },
      {
        question: 'Do you service imported Mitsubishi Ek Wagon and Outlander PHEV hybrid systems?',
        answer: 'Yes. We service Japanese Ek Wagon 660cc CVTs as well as Outlander Plug-In Hybrid electric motors, drive battery cooling loops, and regenerative brake systems.',
      },
      {
        question: 'How do you fix Mitsubishi INVECS-III CVT transmission slippage and fluid overheating?',
        answer: 'We replace clogged CVT oil cooler filters, flush Mitsubishi-spec DiaQueen CVTF-J4 fluid, and inspect torque converter lockup solenoids.',
      },
      {
        question: 'Can you overhaul Mitsubishi front torsion bar and multi-link coil suspensions?',
        answer: 'Yes. We replace worn upper and lower control arm ball joints, stabilizer bar links, and shock absorbers to restore smooth handling.',
      },
      {
        question: 'Do you source Mitsubishi timing belts, tensioners, and water pumps?',
        answer: 'Yes. Timing belt kits installed on Pajero and Lancer models use Mitsubishi-spec parts alongside Japanese GMB/Aisin water pumps.',
      },
    ],
    seo: {
      title: 'Mitsubishi 4x4 & JDM Specialist Islamabad | HyperTune Garage',
      description: 'Independent Mitsubishi workshop in Islamabad & Rawalpindi. Computerized diagnostics, Pajero Super Select 4x4 repairs, Outlander PHEV hybrid service & Lancer maintenance.',
      keywords: ['mitsubishi repair islamabad', 'mitsubishi specialist rawalpindi', 'pajero 4x4 repair', 'outlander phev maintenance', 'mitsubishi diagnostics islamabad', 'mitsubishi workshop police foundation'],
    },
  },
  {
    id: 'mazda-specialist',
    slug: 'mazda-service-islamabad',
    name: 'Mazda SkyActiv Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, SkyActiv-G / SkyActiv-D Engine Care, Mazda 3, Mazda 6, CX-3 & CX-5',
    logoBadge: 'Mazda Specialist',
    heroImage: images.brandMazdaService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Mazda SkyActiv vehicles serving Islamabad and Rawalpindi. Equipped with computerized diagnostic interfaces, our technicians service Mazda 3 (Axela), Mazda 6 (Atenza), CX-3, CX-5, CX-9, Demio (Mazda 2), and MX-5 Miata—covering SkyActiv-G intake valve carbon cleaning, 6-speed SkyActiv-Drive automatic servicing, i-ELOOP capacitor checks, and suspension calibration.',
    modelsCovered: [
      'Mazda 3 / Axela (1.5L, 2.0L, 2.5L SkyActiv-G & SkyActiv-X)',
      'Mazda 6 / Atenza (2.0L & 2.5L SkyActiv-G Sedan / Estate)',
      'Mazda CX-3 & CX-30 (1.5L & 2.0L SkyActiv-G Crossover)',
      'Mazda CX-5 (2.0L, 2.5L & 2.5L Turbo AWD)',
      'Mazda CX-9 (2.5L SkyActiv-G Turbo 7-Seater Luxury SUV)',
      'Mazda Demio / Mazda 2 (1.3L & 1.5L SkyActiv-G / SkyActiv-D)',
      'Mazda MX-5 Miata & RX-8 (Rotary & SkyActiv Sports Performance)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic System & Compatible VCI Interface',
    commonIssuesAndFixes: [
      {
        issue: 'SkyActiv-G High-Compression Intake Valve Carbon Build-up & Hesitation',
        solution: 'Intake valve carbon cleaning, direct-injection fuel injector servicing, and spark plug replacement.',
      },
      {
        issue: 'i-ELOOP Capacitor Warning & i-Stop Malfunction on Dashboard',
        solution: 'Capacitor health check, DC-DC converter diagnostics, and Q85 EFB battery testing and calibration.',
      },
      {
        issue: 'SkyActiv-Drive 6-Speed Automatic Transmission Harsh 2nd to 3rd Shift',
        solution: 'Transmission fluid flush with Mazda-spec FZ fluid, mechatronic solenoid adaptation, and clutch line pressure relearn.',
      },
      {
        issue: 'Front Lower Control Arm Bushing Cracking & Highway Vibration',
        solution: 'Hydraulic control arm bushing replacement, ball joint renewal, and computerized wheel alignment.',
      },
    ],
    specializedServices: [
      'Full-System Computerized Scans & PCM Calibration Checks',
      'SkyActiv-G & SkyActiv-X Direct Injection Carbon De-coking',
      'SkyActiv-Drive 6-Speed Automatic Transmission Servicing with ATF-FZ Fluid',
      'i-Stop & i-ELOOP Regenerative Braking / Capacitor Diagnostics',
      'Suspension Refresh, Steering Rack & Computerized Wheel Alignment',
      'Brake Pads & Brake Disc Skimming',
      'TPU Paint Protection Film (PPF) for Mazda 3, CX-5 & Soul Red Crystal',
    ],
    pricingRange: 'PKR 3,500 - PKR 160,000',
    faqs: [
      {
        question: 'Can you service Mazda SkyActiv-G and SkyActiv-D engines in Islamabad & Rawalpindi?',
        answer: 'Yes. We service SkyActiv-G gasoline (1.5L, 2.0L, 2.5L) and SkyActiv-D diesel engines across Mazda 3, Mazda 6, CX-3, CX-5, and CX-9 models.',
      },
      {
        question: 'How do you clean carbon buildup from Mazda direct-injection intake valves?',
        answer: 'Because SkyActiv-G engines use high-pressure direct injection, intake valves accumulate carbon over time. We perform specialized intake valve carbon cleaning to restore airflow and throttle response.',
      },
      {
        question: 'Do you service Mazda 6-speed SkyActiv-Drive automatic transmissions with ATF-FZ fluid?',
        answer: 'Yes. SkyActiv-Drive gearboxes require low-viscosity Mazda-spec ATF-FZ fluid. We perform fluid exchanges and filter replacements to help reduce shift shudder.',
      },
      {
        question: 'Can you diagnose Mazda i-Stop capacitor systems and dual-battery charging circuits?',
        answer: 'Yes. We test Mazda EFB (Enhanced Flooded Batteries) and i-ELOOP capacitor storage modules, resetting battery management counters after replacement.',
      },
      {
        question: 'How do you calibrate Mazda i-ActivSense radar cruise and blind-spot monitors?',
        answer: 'We perform ADAS radar cruise and front camera calibration checks following windshield replacement or bumper repairs.',
      },
      {
        question: 'Can you repair Mazda electric power steering motor and suspension clunks?',
        answer: 'Yes. We overhaul steering rack guide bushings and replace worn front lower control arm hydraulic bushings to eliminate clunking over bumps.',
      },
    ],
    seo: {
      title: 'Mazda SkyActiv Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Mazda specialist in Islamabad & Rawalpindi. Computerized diagnostics, SkyActiv-G intake carbon cleaning, CX-5 service, Mazda 3 repairs & ATF FZ fluid flush.',
      keywords: ['mazda repair islamabad', 'mazda specialist rawalpindi', 'mazda cx5 service', 'mazda 3 maintenance', 'skyactiv direct injection cleaning', 'mazda workshop police foundation'],
    },
  },
  {
    id: 'subaru-specialist',
    slug: 'subaru-boxer-repair-islamabad',
    name: 'Subaru Boxer & Symmetrical AWD Specialist Islamabad',
    tagline: 'Computerized Diagnostics, Boxer Engine Overhaul, Lineartronic CVT & WRX STI Care',
    logoBadge: 'Subaru Specialist',
    heroImage: images.brandSubaruService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Subaru Boxer engines and Symmetrical All-Wheel Drive (AWD) vehicles serving Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostic software, our mechanics service Subaru Forester, Outback, XV / Crosstrek, Legacy, Impreza, WRX, and WRX STI—including Boxer head gasket repairs, Lineartronic CVT fluid servicing, and AWD differential care.',
    modelsCovered: [
      'Subaru Forester (SJ, SK - 2.0L, 2.5L FB20/FB25 & 2.0T FA20 DIT AWD)',
      'Subaru Outback & Legacy (2.5L FB25, 3.6L EZ36 Flat-6 & 2.4T FA24)',
      'Subaru XV / Crosstrek (2.0L FB20 Boxer e-Boxer Hybrid AWD)',
      'Subaru WRX & WRX STI (EJ20, EJ257, FA20F 2.0T/2.5T Turbo AWD)',
      'Subaru Impreza & Levorg (1.6T & 2.0T DIT Sport Tourer)',
      'Subaru BRZ (2.0L FA20 & 2.4L FA24 Boxer RWD Coupe)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic Scanners & AWD Telemetry Software',
    commonIssuesAndFixes: [
      {
        issue: 'Boxer Engine Oil Leaks from Valve Covers & Cam Carrier Gaskets',
        solution: 'Engine reseal using multi-layer steel gaskets and sealant torqued to manufacturer Newton-meter specifications.',
      },
      {
        issue: 'Subaru Lineartronic CVT Chain Slip & High Temperature Warning Light',
        solution: 'CVT fluid flush with Subaru-spec High-Torque CVTF-II / Lineartronic II, pressure solenoid calibration, and TCM relearn.',
      },
      {
        issue: 'Symmetrical AWD Binding / Judder During Tight Low-Speed Turns',
        solution: 'Center differential transfer clutch fluid flush, front/rear differential oil replacement with 75W-90, and solenoid test.',
      },
      {
        issue: 'EyeSight Driver Assist Camera Warning & Stereo Vision Disabled',
        solution: 'Windscreen camera calibration checks, forward radar alignment, and steering angle sensor zeroing.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & EyeSight ADAS Calibration Checks',
      'Boxer 4-Cylinder & Flat-6 Engine Overhauls & Head Gasket Replacement',
      'Subaru Lineartronic CVT Fluid Flush with High-Torque CVTF',
      'Symmetrical AWD Center Transfer Clutch & Front/Rear Differential Service',
      'WRX & STI Turbocharger Repair & Intercooler Pipe Pressure Testing',
      'Brake Pad Fitment & Computerized Wheel Alignment',
      'TPU Paint Protection Film (PPF) for Subaru Forester & WRX',
    ],
    pricingRange: 'PKR 4,500 - PKR 240,000',
    faqs: [
      {
        question: 'Can you service Subaru Boxer engines (EJ20, FA20, FB20, FA24) in Islamabad?',
        answer: 'Yes. We service horizontally-opposed Subaru Boxer engines, providing spark plug replacements, valve cover gasket reseals, oil separator servicing, and internal rebuilds.',
      },
      {
        question: 'How do you resolve Subaru Boxer head gasket oil and coolant weeping?',
        answer: 'We remove the Boxer engine to install multi-layer steel (MLS) head gaskets, verify cylinder head flatness using workshop machining checks, and replace cylinder head fasteners as specified.',
      },
      {
        question: 'How do you service Subaru Symmetrical All-Wheel Drive (AWD) and Lineartronic CVTs?',
        answer: 'We service Subaru Lineartronic CVTs with Subaru-spec High Torque CVTF, inspect center differentials, and replace worn rear differential carrier bearings.',
      },
      {
        question: 'Can you inspect and replace Subaru timing belts, pulleys, and water pumps?',
        answer: 'Yes. We install Gates / Aisin timing belt component kits including hydraulic tensioners, idler pulleys, camshaft seals, and water pumps.',
      },
      {
        question: 'How do you calibrate Subaru EyeSight dual-camera driver assistance systems?',
        answer: 'We use computerized diagnostic software and ADAS camera calibration checks for pre-collision braking and lane keep assistance.',
      },
      {
        question: 'What oil viscosity and coolant specs are recommended for Subaru Boxer engines in Pakistan?',
        answer: 'We use 0W-20 or 5W-30 API SP synthetic oils matched to the engine code alongside Subaru-spec Super Coolant.',
      },
    ],
    seo: {
      title: 'Subaru Boxer & Symmetrical AWD Specialist Islamabad | HyperTune Garage',
      description: 'Independent Subaru workshop in Islamabad & Rawalpindi. Computerized diagnostics, Boxer engine rebuilds, Lineartronic CVT repairs, Forester & WRX STI maintenance.',
      keywords: ['subaru repair islamabad', 'subaru specialist rawalpindi', 'boxer engine overhaul', 'subaru lineartronic cvt service', 'forester maintenance', 'subaru diagnostic islamabad'],
    },
  },
  {
    id: 'lexus-specialist',
    slug: 'lexus-hybrid-repair-islamabad',
    name: 'Lexus Luxury & Hybrid Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, P0A80 Hybrid Battery Balancing, LX600/LX570, RX & ES Care',
    logoBadge: 'Lexus Specialist',
    heroImage: images.brandLexusService,
    overview: 'HyperTune Garage is an independent workshop in Sector O-9, Islamabad for Lexus vehicles serving Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostics and experienced technicians, we service Lexus LX570, LX600 (3.5TT V6), RX450h / RX350, NX300h, ES300h / ES350, GX460, and LS500 / LS600h—covering high-voltage hybrid battery diagnostics, Active Height Control (AHC) hydraulic suspension service, audio electronics, and detailing.',
    modelsCovered: [
      'Lexus LX Series (LX470, LX570 5.7L V8 3UR-FE, LX600 3.5L Twin-Turbo V35A, LX500d)',
      'Lexus RX Series (RX350, RX450h Hybrid, RX500h F-Sport Performance)',
      'Lexus NX Series (NX200t, NX300h Hybrid, NX350h Turbo)',
      'Lexus ES Series (ES250, ES300h Hybrid, ES350 3.5L V6 Sedan)',
      'Lexus GX Series (GX460 4.6L V8 & New GX550 Twin-Turbo)',
      'Lexus LS Series (LS460, LS500 Twin-Turbo & LS600h V8 Hybrid Flagship)',
      'Lexus IS & RC F-Sport (IS200t, IS300, IS350, RC-F 5.0L V8)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic Software & Hybrid Battery Health Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Lexus RX450h / ES300h "Check Hybrid System" & P0A80 Trouble Code',
        solution: 'High-voltage individual module load analysis, replacement of degraded cells, pack voltage balancing, and hybrid cooling blower cleaning.',
      },
      {
        issue: 'LX570 / LX470 Active Height Control (AHC) Suspension Low & Stiff Ride',
        solution: 'AHC hydraulic fluid flush with Lexus-spec Suspension Fluid AHC, accumulator globe pressure test, height sensor calibration, and step bleeding.',
      },
      {
        issue: 'LX600 / LS500 3.5L Twin-Turbo (V35A) Boost Pressure Solenoid Code',
        solution: 'Electronic wastegate actuator calibration, intercooler boost hose pressure leak test, and direct injection fuel system check.',
      },
      {
        issue: 'Lexus Direct Shift 8-Speed / 10-Speed Automatic Gearbox Hesitation',
        solution: 'Transmission fluid flush with Lexus-spec ATF-WS, pan magnet cleaning, fine filter replacement, and shift adaptation.',
      },
    ],
    specializedServices: [
      'Full-System Computer Health Scans & Module Personalization',
      'P0A80 Hybrid Battery Rebuilding, Cell Balancing & Inverter Servicing',
      'Lexus LX570 / LX600 AHC Hydraulic Suspension Bleeding & Height Sensor Calibration',
      '3UR-FE 5.7L V8 & V35A 3.5L Twin-Turbo Engine Overhauls',
      'Mark Levinson Audio Amplifier & Electronic BCM Troubleshooting',
      'Brake Pad Upgrades & Rotor Skimming',
      'TPU Paint Protection Film (PPF) & Ceramic Coating for Lexus LX & RX',
    ],
    pricingRange: 'PKR 5,000 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Lexus RX450h, ES300h, and NX300h hybrid systems in Islamabad?',
        answer: 'Yes. We service Lexus hybrid vehicles, including high-voltage batteries, electric motor transaxles, inverter cooling systems, and regenerative brakes.',
      },
      {
        question: 'How do you inspect and recondition Lexus high-voltage hybrid battery packs?',
        answer: 'We run module-by-module voltage and health testing using computerized diagnostics to identify weak cells, replace defective blocks with matched modules, clean internal busbars, and service the battery cooling fan.',
      },
      {
        question: 'Do you service Lexus LX570 / LX600 V8 and Twin-Turbo V6 engines and AHC hydraulic suspension?',
        answer: 'Yes. We service 3UR-FE 5.7L V8 and V35A-FTS 3.5L Twin-Turbo V6 engines, flush Active Height Control (AHC) suspension hydraulic fluid, and calibrate ride-height accumulators.',
      },
      {
        question: 'How do you fix Lexus Mark Levinson premium audio amplifier failure and water ingress?',
        answer: 'We diagnose Mark Levinson DSP amplifier faults caused by trunk moisture or component wear and restore audio system operation.',
      },
      {
        question: 'Do you use computerized diagnostic software with live data logging for Lexus vehicles?',
        answer: 'Yes. We connect multi-brand computerized diagnostic scanners with compatible interfaces to execute live data graphing, active tests, and body electronics checks.',
      },
      {
        question: 'Can you apply Paint Protection Film (PPF) on Lexus spindle grilles and bodywork?',
        answer: 'Yes. We offer computer CAD pre-cut TPU PPF coverage for intricate Lexus spindle grilles, headlights, hoods, and door panels to guard against road chips.',
      },
    ],
    seo: {
      title: 'Lexus Luxury & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Lexus workshop in Islamabad & Rawalpindi. Computerized diagnostics, P0A80 hybrid battery repair, LX570 AHC suspension service & RX450h care.',
      keywords: ['lexus repair islamabad', 'lexus specialist rawalpindi', 'lexus lx570 maintenance', 'lexus hybrid battery repair', 'lexus ahc suspension bleeding', 'lexus workshop police foundation'],
    },
  },
  {
    id: 'land-rover-specialist',
    slug: 'land-rover-repair-islamabad',
    name: 'Land Rover Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, Defender, Discovery, Air Suspension & Terrain Response Overhaul',
    logoBadge: 'Land Rover Specialist',
    heroImage: images.brandLandRoverService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Land Rover vehicles serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic software, our technicians service Defender (New Defender L663, Classic Td5/Puma), Discovery (3, 4, 5), and Freelander—handling Terrain Response 4x4 faults, air suspension valve block leaks, Ingenium 2.0T/3.0T timing chains, and ZF 8HP transmission servicing.',
    modelsCovered: [
      'Land Rover Defender (New L663 - P300, P400 MHEV, D250, D300, V8 5.0L Supercharged)',
      'Land Rover Defender Classic (90, 110, 130 - 300Tdi, Td5, 2.4/2.2 Puma TDCi)',
      'Land Rover Discovery 3 & 4 (2.7L TDV6, 3.0L SDV6, 4.4L/5.0L V8 Petrol)',
      'Land Rover Discovery 5 (3.0L Si6, SDV6 & 2.0L Ingenium)',
      'Land Rover Discovery Sport & Freelander 2 (2.0L Turbo & 2.2L SD4)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Air Suspension Leak Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Air Suspension Dropped to Bump Stops & "Suspension Fault" Alert',
        solution: 'Air compressor output check, valve block O-ring renewal, air strut bladder leak check, and ride height sensor calibration.',
      },
      {
        issue: 'Land Rover Ingenium 2.0T / 3.0T Timing Chain Rattle & Stretch',
        solution: 'Installation of updated timing chains, guides, hydraulic tensioners, and variable camshaft timing (VCT) solenoid calibration.',
      },
      {
        issue: 'Terrain Response System Inoperative & Dynamic Stability Light On',
        solution: 'Computerized live telemetry scan, transfer case control module (TCCM) diagnostic, rear differential motor service, and wheel speed sensor renewal.',
      },
      {
        issue: 'ZF 8-Speed Automatic Gearbox Judder & Leak from Plastic Pan',
        solution: 'ZF fluid drain, mechatronic sleeve seal inspection, integrated pan filter replacement, and transmission adaptation reset.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & Module Configuration',
      'Air Suspension Compressor Rebuilding, Valve Block & Strut Leak Repair',
      'Ingenium 2.0T / 3.0T & 3.0L TDV6 / SDV6 Timing Chain Overhauls',
      'Terrain Response 4x4 Electronic Transfer Case & Rear Diff Motor Repair',
      'ZF 6HP & 8HP Transmission Fluid Flush & Mechatronic Repair',
      'Brake Upgrades, Disc Skimming & Computerized Wheel Alignment',
      'TPU Paint Protection Film (PPF) for New Defender 90 / 110',
    ],
    pricingRange: 'PKR 6,000 - PKR 320,000',
    faqs: [
      {
        question: 'Do you have computerized diagnostic scanners for Land Rover models in Islamabad?',
        answer: 'Yes. We use multi-brand computerized diagnostic scanners and compatible interfaces for fault reading, live telemetry, and module calibration.',
      },
      {
        question: 'How do you service Land Rover Defender and Discovery Terrain Response air suspension?',
        answer: 'We test air suspension spring bellows, repair valve blocks, service air compressor dryers, and recalibrate corner ride-height sensors.',
      },
      {
        question: 'How do you prevent Ingenium 2.0L diesel and petrol timing chain stretch and failure?',
        answer: 'We check timing chain phase correlation via diagnostics and replace worn timing chain assemblies with updated guides and tensioners.',
      },
      {
        question: 'Can you service Land Rover ZF 8HP and 9HP automatic transmissions and transfer cases?',
        answer: 'Yes. We perform transmission fluid flushes with ZF Lifeguard Fluid, install new pan-filters, and service electronic twin-speed transfer cases.',
      },
      {
        question: 'How do you repair Land Rover active anti-roll bar hydraulic actuator leaks?',
        answer: 'We inspect high-pressure hydraulic pumps, replace leaking roll-control actuator lines, and bleed the system with Pentosin CHF 11S fluid.',
      },
      {
        question: 'What warranty applies to Land Rover replacement parts?',
        answer: 'We install Land Rover-spec or Tier-1 European supplier parts matched to your estimate. For engine, brake/suspension/steering, transmission, and AC repairs, eligible replacement parts may carry a written warranty of up to 12 months subject to supplier terms and component eligibility.',
      },
    ],
    seo: {
      title: 'Land Rover Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Land Rover workshop in Islamabad & Rawalpindi. Computerized diagnostics, Defender L663 service, Discovery air suspension repair & Ingenium timing chains.',
      keywords: ['land rover repair islamabad', 'land rover specialist rawalpindi', 'defender l663 service', 'discovery air suspension fix', 'land rover diagnostics islamabad', 'land rover workshop police foundation'],
    },
  },
  {
    id: 'range-rover-specialist',
    slug: 'range-rover-service-islamabad',
    name: 'Range Rover Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, Vogue, Sport, Velar, Evoque & Air Suspension Care',
    logoBadge: 'Range Rover Specialist',
    heroImage: images.brandRangeRoverService,
    overview: 'HyperTune Garage is an independent repair and maintenance workshop in Sector O-9, Islamabad for Range Rover owners across Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostic platforms, we service Range Rover Vogue (L322, L405, L460), Range Rover Sport (L320, L494, L461), Range Rover Velar, and Range Rover Evoque—handling Dynamic Air Suspension sagging, Supercharged V8 cooling upgrades, ZF 8-speed gearbox repairs, and PPF.',
    modelsCovered: [
      'Range Rover Vogue / Autobiography (L322, L405, L460 - 3.0L D/P, 4.4L SDV8, 5.0L V8 Supercharged, 4.4L Twin-Turbo V8)',
      'Range Rover Sport (L320, L494, L461 - HSE, Dynamic, SVR 575HP 5.0L Supercharged)',
      'Range Rover Velar (P250, P380 Supercharged, D200)',
      'Range Rover Evoque (L538, L551 - 2.0L Si4 & 2.0L D180/D200)',
      'Range Rover PHEV Plug-in Hybrid (P400e, P440e, P510e)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics, DoIP Interfaces & Air Suspension Testing',
    commonIssuesAndFixes: [
      {
        issue: 'Dynamic Air Suspension Sagging Overnight & "Vehicle Raising Slowly"',
        solution: 'Air spring bladder leak detection, central valve block solenoid service, AMK air compressor overhaul, and height calibration.',
      },
      {
        issue: '5.0L Supercharged V8 Coolant Pipe Leaks under Supercharger',
        solution: 'Supercharger removal, installation of upgraded aluminum crossover coolant pipes, thermostat housing replacement, and vacuum bleeding.',
      },
      {
        issue: 'Active Roll Control (ARC) Dynamic Response Hydraulic Leak & Warning',
        solution: 'High-pressure hydraulic valve block reseal, ARC actuator inspection, and fluid flush with Pentosin CHF 11S.',
      },
      {
        issue: 'Deployable Side Steps Jammed or Clicking Noise',
        solution: 'Motor gear cleaning, linkage hinge lubrication, and door trigger module calibration.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & Module Calibration',
      'Range Rover Dynamic Air Suspension & Active Roll Control (ARC) Repair',
      '5.0L Supercharged V8 & 4.4L SDV8 / 3.0L TDV6 Engine Rebuilds',
      'ZF 8HP Automatic Transmission Fluid Flush & Mechatronic Repair',
      'Multi-Piston Brake Overhaul & Computerized Wheel Alignment',
      'Range Rover P400e / P510e Plug-in Hybrid High-Voltage System Health Check',
      'TPU Paint Protection Film (PPF) for Range Rover Vogue & Sport SVR',
    ],
    pricingRange: 'PKR 6,500 - PKR 350,000',
    faqs: [
      {
        question: 'How do you repair Range Rover Autobiography and Sport air suspension compressor and airbag leaks?',
        answer: 'We locate pneumatic leaks across air bellows, valve blocks, and air lines, replace failing air struts, rebuild pneumatic valve blocks, and service or replace AMK compressors.',
      },
      {
        question: 'Can you service Range Rover 5.0L Supercharged V8 and 3.0L Inline-6 Mild Hybrid engines?',
        answer: 'Yes. We service AJ133 5.0L Supercharged V8s (timing chains, supercharger isolator couplers, coolant crossover pipes) and 3.0L Ingenium MHEV turbocharged powertrains.',
      },
      {
        question: 'Do you use computerized diagnostic software for Range Rover vehicles in Islamabad?',
        answer: 'Yes. We use multi-brand computerized diagnostic platforms for fault isolation, module calibration, and system diagnostics.',
      },
      {
        question: 'How do you resolve Range Rover dual touchscreen infotainment and digital cluster blackouts?',
        answer: 'We inspect InControl Touch Pro and Pivi Pro power feeds, verify optical bus continuity, and diagnose module or ground faults.',
      },
      {
        question: 'How often should Range Rover high-performance brake pads and rotors be inspected?',
        answer: 'Due to heavy SUV curb weight, front brake pads and rotors require regular inspection and typically need replacement every 25,000 to 35,000 km depending on driving style.',
      },
      {
        question: 'Do you offer vehicle transport assistance for Range Rover owners in Islamabad & Rawalpindi?',
        answer: 'Yes. We offer workshop vehicle transport assistance across Islamabad and Rawalpindi to our Sector O-9 Islamabad workshop, subject to confirmation of applicable arrangements upon booking.',
      },
    ],
    seo: {
      title: 'Range Rover Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Range Rover workshop in Islamabad & Rawalpindi. Computerized diagnostics, Vogue & Sport air suspension repair, 5.0L V8 coolant upgrades & PPF.',
      keywords: ['range rover repair islamabad', 'range rover specialist rawalpindi', 'range rover vogue service', 'range rover sport svr maintenance', 'air suspension repair range rover', 'range rover diagnostics islamabad'],
    },
  },
  {
    id: 'jeep-specialist',
    slug: 'jeep-repair-islamabad',
    name: 'Jeep 4x4 & American SUV Specialist Islamabad',
    tagline: 'Computerized Diagnostics, Wrangler, Grand Cherokee, Hemi V8 & Quadra-Trac Servicing',
    logoBadge: 'Jeep Specialist',
    heroImage: images.brandJeepService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Jeep 4x4 vehicles serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic software, our technicians service Jeep Wrangler (TJ, JK, JL), Grand Cherokee (WK, WK2, WL), Gladiator, Cherokee, and Compass—including steering wobble repairs, axle rebuilding, Quadra-Lift air suspension checks, and 8-speed gearbox servicing.',
    modelsCovered: [
      'Jeep Wrangler (TJ, JK, JL - 3.6L Pentastar V6, 2.0L Turbo & 392 Hemi V8 Rubicon / Sahara)',
      'Jeep Grand Cherokee (WK2, WL - 3.6L Pentastar, 5.7L Hemi V8, 6.4L SRT-8 & 6.2L Trackhawk)',
      'Jeep Gladiator (JT - 3.6L Pentastar 4x4 Pick-up Truck)',
      'Jeep Cherokee & Compass (2.4L Tigershark & 2.0T MultiAir 4x4)',
      'Jeep Renegade (1.4T & 2.4L Trailhawk)',
      'Classic Jeep CJ-5, CJ-7 & Cherokee XJ 4.0L Straight-6',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic Suite & Compatible Interfaces',
    commonIssuesAndFixes: [
      {
        issue: 'Jeep Wrangler "Death Wobble" Steering Vibration at Highway Speeds',
        solution: 'Track bar bushing replacement, drag link/tie rod end renewal, steering stabilizer upgrade, ball joint inspection, and computerized wheel alignment.',
      },
      {
        issue: 'Pentastar 3.6L V6 Oil Filter Housing Leak & Coolant Mix in Valley',
        solution: 'Replacement of brittle plastic oil cooler housing with upgraded aluminum unit, intake manifold gasket renewal, and cooling flush.',
      },
      {
        issue: 'Grand Cherokee Quadra-Lift Air Suspension Warning & Compressor Overheat',
        solution: 'Closed-loop system leak check, valve block inspection, air spring bladder renewal, and ride height sensor calibration.',
      },
      {
        issue: 'Quadra-Trac II / Quadra-Drive II 4x4 Transfer Case Shudder',
        solution: 'Transfer case fluid flush with Mopar-spec lubricant, coupling test, and front/rear differential oil replacement with friction modifier.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & Module Diagnostics',
      'Death Wobble Repair & Steering / Suspension Overhauls',
      'Pentastar 3.6L V6 & 5.7L Hemi V8 Engine Rebuilding & Oil Cooler Upgrades',
      'Dana 30, Dana 44 & Dana 60 Axle Regearing, Locker & Bearing Overhauls',
      'TorqueFlite 8-Speed (8HP70 / 850RE) Transmission Fluid Servicing',
      'Quadra-Lift Air Suspension Inspection & Compressor Overhauls',
      'TPU Paint Protection Film (PPF) for Jeep Wrangler Rubicon',
    ],
    pricingRange: 'PKR 4,500 - PKR 250,000',
    faqs: [
      {
        question: 'Can you service Jeep Wrangler, Grand Cherokee, and Gladiator 4x4 systems in Islamabad?',
        answer: 'Yes. We provide maintenance, diagnostics, and repairs for Jeep Wrangler JL/JK, Grand Cherokee WK2/WL, and Gladiator models, including engines, transmissions, and 4x4 axles.',
      },
      {
        question: 'How do you diagnose and fix Jeep Grand Cherokee air suspension (Quadra-Lift) sagging?',
        answer: 'We leak-test air springs, service valve manifolds, inspect compressor operation, and recharge closed-loop Quadra-Lift systems to specification.',
      },
      {
        question: 'How do you resolve Jeep Wrangler front solid axle death wobble vibration?',
        answer: 'We inspect track bar mounting brackets, replace worn drag links and tie rod ends, check ball joints and steering box play, and install heavy-duty steering stabilizers.',
      },
      {
        question: 'How do you service 3.6L Pentastar V6 rocker arm ticking and oil cooler housing leaks?',
        answer: 'Ticking on Pentastar engines is often caused by worn roller rocker needle bearings. We replace faulty rocker arms and camshafts as needed and install upgraded aluminum oil filter housings.',
      },
      {
        question: 'Can you rebuild Jeep Dana 44 heavy-duty differentials and electronic locker solenoids?',
        answer: 'Yes. We inspect ring-and-pinion backlash, replace worn carrier bearings, service Tru-Lok electronic locker solenoids, and refill with 75W-140 synthetic gear oil.',
      },
      {
        question: 'Do you install off-road suspension kits, winches, and aftermarket bumpers?',
        answer: 'Yes. We fit aftermarket suspension kits, recovery winches, steel bumpers, and snorkel intakes after compatibility and clearance checks.',
      },
    ],
    seo: {
      title: 'Jeep 4x4 & American SUV Specialist Islamabad | HyperTune Garage',
      description: 'Independent Jeep workshop in Islamabad & Rawalpindi. Computerized diagnostics, Wrangler death wobble fix, Pentastar 3.6L oil cooler upgrades & Grand Cherokee service.',
      keywords: ['jeep repair islamabad', 'jeep specialist rawalpindi', 'jeep wrangler death wobble fix', 'jeep grand cherokee maintenance', 'jeep diagnostic islamabad', 'jeep workshop police foundation'],
    },
  },
  {
    id: 'ford-specialist',
    slug: 'ford-service-islamabad',
    name: 'Ford Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, F-150 Raptor, Ranger, Everest, Mustang & EcoBoost Care',
    logoBadge: 'Ford Specialist',
    heroImage: images.brandFordService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Ford vehicles serving Islamabad and Rawalpindi. Utilizing multi-brand computerized diagnostic interfaces, our technicians service Ford F-150 / F-150 Raptor, Ranger (T6 / T7 / T8 / Raptor 2.0L Bi-Turbo & 3.0L V6), Everest, Mustang (2.3L EcoBoost & 5.0L Coyote V8), Explorer, and EcoSport—handling EcoBoost carbon cleaning, 10-speed (10R80) transmission servicing, and Fox Racing suspension maintenance.',
    modelsCovered: [
      'Ford F-150 & F-150 Raptor (3.5L High-Output EcoBoost TT & 5.2L Supercharged V8 Raptor R)',
      'Ford Ranger & Ranger Raptor (2.2L TDCi, 3.2L 5-Cylinder, 2.0L Bi-Turbo & 3.0L V6 TT)',
      'Ford Everest / Endeavour (2.0L Bi-Turbo & 3.2L 4x4 7-Seater SUV)',
      'Ford Mustang (2.3L EcoBoost Turbo & 5.0L Coyote V8 GT / Mach 1)',
      'Ford Explorer (2.3L EcoBoost & 3.5L/3.0L Twin-Turbo AWD)',
      'Ford Taurus, Fusion & Edge Crossover Sedans',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic System & Compatible Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Ford 10-Speed Automatic (10R80) Harsh 3rd-to-4th Shift & Gear Hunting',
        solution: 'Transmission strategy checks via computerized diagnostics, fluid flush with Motorcraft Mercon ULV, and adaptive learning table reset.',
      },
      {
        issue: 'EcoBoost 2.3L / 3.5L Engine Intake Valve Carbon Clog & Boost Surge',
        solution: 'Intake valve carbon cleaning, direct injector servicing, electronic blow-off valve inspection, and iridium spark plugs.',
      },
      {
        issue: 'Ranger Raptor / F-150 Fox Live Valve Suspension Warning',
        solution: 'Suspension position sensor calibration, electronic damper solenoid diagnosis, and shock assembly inspection.',
      },
      {
        issue: 'Ford 2.0L Bi-Turbo Diesel Camshaft Belt-in-Oil Degradation',
        solution: 'Wet timing belt inspection, oil pump strainer cleaning, updated belt replacement, and Motorcraft-spec low-SAPS oil service.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & PCM Calibration',
      'EcoBoost 2.3L, 2.7L, 3.5L & Coyote 5.0L V8 Engine Rebuilding',
      '10-Speed (10R80) & 6-Speed (6R80) Automatic Transmission Servicing with Mercon ULV',
      'Ranger Raptor Fox Live Valve Suspension Inspection & Alignment',
      'Electronic 4x4 Transfer Case & Differential Fluid Servicing',
      'Performance Brake Overhaul & Computerized Wheel Alignment',
      'TPU Paint Protection Film (PPF) for Ford Mustang & Ranger Raptor',
    ],
    pricingRange: 'PKR 4,500 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Ford F-150 Raptor, Ranger, and Everest EcoBoost engines in Islamabad?',
        answer: 'Yes. We service 2.0L, 2.3L, 2.7L, and 3.5L Twin-Turbo EcoBoost engines, handling high-pressure fuel pumps, direct injectors, turbochargers, and cam phasers.',
      },
      {
        question: 'How do you prevent and fix Ford 10-speed (10R80) automatic transmission harsh shifting?',
        answer: '10R80 harsh shifts are addressed by flushing with Ford Motorcraft Mercon ULV fluid, inspecting valve body solenoids, and resetting adaptive shift tables.',
      },
      {
        question: 'Do you use computerized diagnostic equipment for Ford vehicles?',
        answer: 'Yes. We utilize multi-brand computerized diagnostic software with compatible interfaces for system diagnostics and module calibration.',
      },
      {
        question: 'Can you service Ford EcoBoost twin-turbochargers, high-pressure fuel pumps, and direct injectors?',
        answer: 'Yes. We inspect twin-turbo wastegate play, service carbon-fouled direct injectors, and test rail pressure sensors.',
      },
      {
        question: 'How do you maintain Ford Fox Racing suspension shocks on Raptor models?',
        answer: 'We inspect Fox Live Valve shocks, check seals and mounting hardware, and verify electronic active damping sensors.',
      },
      {
        question: 'Do you source Ford Motorcraft synthetic fluids, filters, and brake components?',
        answer: 'Yes. We source Motorcraft-spec engine oils, Mercon transmission fluids, filters, and heavy-duty brake pads.',
      },
    ],
    seo: {
      title: 'Ford Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Ford workshop in Islamabad & Rawalpindi. Computerized diagnostics, Ranger Raptor maintenance, F-150 EcoBoost service, Mustang 5.0L V8 repairs & 10R80 transmission flush.',
      keywords: ['ford repair islamabad', 'ford specialist rawalpindi', 'ford ranger raptor service', 'ford mustang maintenance', 'ford diagnostic islamabad', 'ford workshop police foundation'],
    },
  },
  {
    id: 'chevrolet-specialist',
    slug: 'chevrolet-repair-islamabad',
    name: 'Chevrolet & GM Specialist Workshop Islamabad',
    tagline: 'Computerized Diagnostics, Tahoe, Suburban, Silverado, Corvette, Camaro & Joy / Optra Care',
    logoBadge: 'Chevrolet Specialist',
    heroImage: images.brandChevroletService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Chevrolet and General Motors (GM) vehicles serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic tools, our technicians service Tahoe, Suburban, Silverado, Corvette (C7 & C8), Camaro (SS & ZL1), Captiva, Optra, and Joy/Exclusive models—handling Small Block V8 lifter repairs, Magnetic Ride Control checks, and transmission servicing.',
    modelsCovered: [
      'Chevrolet Tahoe & Suburban (5.3L & 6.2L EcoTec3 V8 Luxury SUV)',
      'Chevrolet Silverado & Colorado (5.3L, 6.2L V8 & 2.8L Duramax Diesel 4x4)',
      'Chevrolet Corvette (C7 LT1/LT4 & C8 Mid-Engine LT2 6.2L V8 / Z06)',
      'Chevrolet Camaro (2.0L Turbo, 3.6L V6, 6.2L V8 SS & 6.2L Supercharged ZL1)',
      'Chevrolet Captiva & Trailblazer (1.5T Turbo & 2.8L Diesel SUV)',
      'Chevrolet Optra, Cruze & Aveo (1.6L & 1.8L E-TEC II / Ecotec)',
      'Chevrolet Joy / Exclusive (800cc & 1.0L Classic PKDM)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostic System & Compatible Interfaces',
    commonIssuesAndFixes: [
      {
        issue: '5.3L / 6.2L EcoTec3 V8 Active Fuel Management (AFM/DFM) Lifter Tick & Misfire',
        solution: 'AFM lifter inspection, replacement with updated lifters and guide trays, camshaft inspection, and calibration.',
      },
      {
        issue: 'GM 8-Speed / 10-Speed Transmission Shudder & Torque Converter Slip',
        solution: 'Transmission triple-flush with Mobil 1 Synthetic LV ATF HP fluid, torque converter clutch slip test, and TCM adaptation.',
      },
      {
        issue: 'Magnetic Ride Control (Magneride) Suspension Stiffening & Leak',
        solution: 'Magnetorheological shock absorber test, ride height sensor calibration, and damper harness repair.',
      },
      {
        issue: 'Chevrolet Captiva / Cruze Coolant Leak from Thermostat & Oil Cooler Housing',
        solution: 'Aluminum thermostat housing replacement, oil cooler heat exchanger reseal, and cooling circuit pressure test.',
      },
    ],
    specializedServices: [
      'Full-System Computer Diagnostic Health Scans',
      'Small Block V8 (5.3L, 6.2L LT1/LT2/LT4) Engine Overhauls & AFM Repairs',
      'GM 6-Speed, 8-Speed & 10-Speed Automatic Gearbox Servicing with Dexron HP/VI',
      'Magnetic Ride Control Damper Diagnostics & Computerized Wheel Alignment',
      'Brake Overhaul & Rotor Lathe Skimming',
      'Car AC Climate Control Overhaul & R134a Gas Recharge',
      'TPU Paint Protection Film (PPF) for Corvette C8, Camaro & Tahoe',
    ],
    pricingRange: 'PKR 3,500 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Chevrolet Corvette, Camaro, Tahoe, and Suburban V8 engines in Islamabad?',
        answer: 'Yes. We service GM Small Block V8 powerplants (5.3L, 6.2L LT1, LT4, L86), handling mechanical maintenance, cooling systems, and drivelines.',
      },
      {
        question: 'How do you diagnose and repair GM Active Fuel Management (AFM / DFM) lifter failure?',
        answer: 'Misfires and lifter ticking on GM V8s often stem from collapsed AFM/DFM lifters. We replace faulty lifters, inspect camshaft lobes, and service VLOM oil manifolds.',
      },
      {
        question: 'Do you use computerized diagnostic software for Chevrolet and GM vehicles?',
        answer: 'Yes. We utilize multi-brand computerized diagnostic scanners with compatible interfaces to scan engine, body, suspension, and transmission modules.',
      },
      {
        question: 'Can you service GM 6-speed, 8-speed, and 10-speed automatic transmissions?',
        answer: 'Yes. We address 8L90 torque converter shudder via Mobil 1 Synthetic LV ATF HP fluid exchanges and service 10L80 10-speed gearboxes.',
      },
      {
        question: 'How do you repair Chevrolet Magnetic Ride Control (MagneRide) active shock absorbers?',
        answer: 'We inspect magnetorheological shock absorbers for leaks, check damper coil resistance, and calibrate ride-height trim values.',
      },
      {
        question: 'Can you source ACDelco and GM-spec replacement parts in Pakistan?',
        answer: 'Yes. We source ACDelco and GM-spec filters, spark plugs, sensors, brake pads, and suspension components matched to your service estimate.',
      },
    ],
    seo: {
      title: 'Chevrolet & GM Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Chevrolet workshop in Islamabad & Rawalpindi. Computerized diagnostics, Tahoe & Suburban service, Corvette C8 maintenance, Camaro repairs & V8 AFM lifter fix.',
      keywords: ['chevrolet repair islamabad', 'chevrolet specialist rawalpindi', 'chevrolet tahoe service', 'corvette c8 maintenance', 'chevrolet diagnostic islamabad', 'chevrolet workshop police foundation'],
    },
  },
  {
    id: 'volvo-specialist',
    slug: 'volvo-repair-islamabad',
    name: 'Volvo Scandinavian Safety & Hybrid Specialist Islamabad',
    tagline: 'Computerized Diagnostics, XC90, XC60, XC40 Recharge, T8 Twin-Engine & Drive-E Care',
    logoBadge: 'Volvo Specialist',
    heroImage: images.brandVolvoService,
    overview: 'HyperTune Garage is an independent specialist workshop in Sector O-9, Islamabad for Volvo vehicles serving Islamabad and Rawalpindi. Equipped with multi-brand computerized diagnostic interfaces, our technicians service Volvo XC90 (T6, T8 Twin-Engine Recharge, D5), XC60, XC40 / XC40 Recharge EV, S90, S60, and V90—including T8 hybrid battery checks, Aisin 8-speed transmission servicing, Four-C air suspension repairs, and IntelliSafe sensor calibrations.',
    modelsCovered: [
      'Volvo XC90 (T6 Supercharged+Turbo, T8 Twin-Engine Recharge PHEV, D5 AWD 7-Seater)',
      'Volvo XC60 (T5, T6, T8 Recharge Luxury Crossover)',
      'Volvo XC40 & XC40 Recharge (T4, T5 & 100% Pure Electric EV)',
      'Volvo S90 & S60 (T5, T6 & T8 Recharge Luxury Sedans)',
      'Volvo V90 & V60 Cross Country (All-Road Luxury Wagons)',
      'Volvo C40 Recharge (100% Electric Compact Crossover)',
    ],
    diagnosticSoftware: 'Multi-Brand Computerized Diagnostics & Compatible DoIP Interfaces',
    commonIssuesAndFixes: [
      {
        issue: 'Volvo XC90 / XC60 T8 Twin-Engine Hybrid Battery "Hybrid System Service Required"',
        solution: 'High-voltage battery cell telemetry scan, ERAD (Electric Rear Axle Drive) motor inspection, and hybrid cooling circuit flush.',
      },
      {
        issue: 'Drive-E 2.0L Twin-Charged (Supercharger + Turbo) Boost Loss & Magnetic Clutch Noise',
        solution: 'Supercharger magnetic clutch gap adjustment, bypass valve testing, and intake boost pressure leak test.',
      },
      {
        issue: 'Four-C Active Air Suspension Dropping Overnight on XC90',
        solution: 'Air compressor pressure output test, front/rear air spring bladder leak check, valve block reseal, and height calibration via computerized diagnostics.',
      },
      {
        issue: 'Aisin 8-Speed Automatic Gearbox Hesitation & Harsh Downshift',
        solution: 'Transmission fluid flush with Volvo-spec AW-1 fluid, linear solenoid adaptation, and neutral control calibration.',
      },
    ],
    specializedServices: [
      'Full-System Computer Scans & Module Diagnostics',
      'XC90 & XC60 T8 Twin-Engine Recharge Plug-in Hybrid & ERAD Motor Servicing',
      'Drive-E 2.0L Twin-Charged (Supercharger + Turbo) Engine Rebuilding',
      'Four-C Active Air Suspension Compressor Overhaul & Height Calibration',
      'Aisin 8-Speed Automatic Transmission Fluid Flush with AW-1 Fluid',
      'IntelliSafe ADAS City Safety Radar & Windscreen Camera Calibration',
      'TPU Paint Protection Film (PPF) for Volvo XC90 & XC60',
    ],
    pricingRange: 'PKR 6,000 - PKR 320,000',
    faqs: [
      {
        question: 'Do you use computerized diagnostic software for Volvo models in Islamabad?',
        answer: 'Yes. We use multi-brand computerized diagnostic platforms with compatible interfaces for fault isolation and system diagnostics.',
      },
      {
        question: 'Can you service Volvo Drive-E 2.0L Turbo and Twin-Engine T8 Plug-in Hybrid powertrains?',
        answer: 'Yes. We service turbocharged and supercharged Drive-E engines as well as T8 Recharge plug-in hybrids, inspecting rear electric drive axles (ERAD) and high-voltage batteries.',
      },
      {
        question: 'How do you diagnose Volvo XC90 and XC60 air suspension compressor and valve block faults?',
        answer: 'We test air compressor duty cycle and pneumatic valve block seals using computerized diagnostics, replacing leaky air bellows and recalibrating ride height.',
      },
      {
        question: 'Can you calibrate Volvo City Safety radar, IntelliSafe cameras, and emergency collision braking?',
        answer: 'Yes. We perform camera and radar calibration checks for Volvo City Safety and Pilot Assist systems.',
      },
      {
        question: 'How often should Volvo Aisin 8-speed automatic transmission fluid be serviced?',
        answer: 'We recommend flushing Volvo Aisin 8-speed transmissions around every 50,000 km with Volvo-spec ATF fluid to preserve shift quality.',
      },
      {
        question: 'Do you source Volvo-spec brake pads, pollen filters, and hybrid cooling pumps?',
        answer: 'Yes. We source Volvo-spec service kits, cabin pollen filters, brake pads, and electric cooling pumps.',
      },
    ],
    seo: {
      title: 'Volvo Scandinavian Safety & Hybrid Specialist Islamabad | HyperTune Garage',
      description: 'Independent Volvo workshop in Islamabad & Rawalpindi. Computerized diagnostics, XC90 & XC60 T8 hybrid service, Drive-E engine repairs & Four-C air suspension care.',
      keywords: ['volvo repair islamabad', 'volvo specialist rawalpindi', 'volvo xc90 service', 'volvo xc60 maintenance', 'volvo t8 hybrid repair', 'volvo diagnostic islamabad'],
    },
  },
];

export const brandsData: BrandItem[] = baseBrandsData.map((b) => {
  const meta = getRouteMetadata(`/brands/${b.slug}/`);
  return {
    ...b,
    seo: {
      ...b.seo,
      title: meta ? meta.title : (b.seo?.title || `${b.name} | HyperTune Garage`),
      description: meta ? meta.description : (b.seo?.description || b.tagline),
    },
  };
});

export function getBrandBySlug(slug?: string): BrandItem | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, '').trim();
  
  // Exact match
  const exact = brandsData.find((b) => b.slug === cleanSlug || b.id === cleanSlug);
  if (exact) return exact;

  // Slug aliases
  const aliasMap: Record<string, string> = {
    'bmw': 'bmw-repair-islamabad',
    'bmw-repair': 'bmw-repair-islamabad',
    'mercedes': 'mercedes-service-islamabad',
    'mercedes-benz': 'mercedes-service-islamabad',
    'mercedes-repair-islamabad': 'mercedes-service-islamabad',
    'mercedes-benz-repair-islamabad': 'mercedes-service-islamabad',
    'audi': 'audi-repair-islamabad',
    'porsche': 'porsche-repair-islamabad',
    'toyota': 'toyota-repair-islamabad',
    'honda': 'honda-service-islamabad',
    'honda-repair-islamabad': 'honda-service-islamabad',
    'suzuki': 'suzuki-repair-islamabad',
    'hyundai': 'hyundai-repair-islamabad',
    'kia': 'kia-repair-islamabad',
    'changan': 'changan-repair-islamabad',
    'haval': 'haval-service-islamabad',
    'mg': 'mg-repair-islamabad',
    'byd': 'byd-ev-service-islamabad',
    'chery': 'chery-repair-islamabad',
    'isuzu': 'isuzu-dmax-repair-islamabad',
    'faw': 'faw-repair-islamabad',
    'daihatsu': 'daihatsu-service-islamabad',
    'nissan': 'nissan-repair-islamabad',
    'mitsubishi': 'mitsubishi-repair-islamabad',
    'mazda': 'mazda-service-islamabad',
    'subaru': 'subaru-boxer-repair-islamabad',
    'lexus': 'lexus-hybrid-repair-islamabad',
    'land-rover': 'land-rover-repair-islamabad',
    'range-rover': 'range-rover-service-islamabad',
    'jeep': 'jeep-repair-islamabad',
    'ford': 'ford-service-islamabad',
    'chevrolet': 'chevrolet-repair-islamabad',
    'volvo': 'volvo-repair-islamabad',
  };

  const targetSlug = aliasMap[cleanSlug];
  if (targetSlug) {
    return brandsData.find((b) => b.slug === targetSlug);
  }

  // Partial match fallback
  return brandsData.find((b) => b.slug.includes(cleanSlug) || cleanSlug.includes(b.slug));
}

export function getBrandDisplayName(fullName: string): string {
  const twoWordMatch = fullName.match(/^(Land Rover|Range Rover)\b/i);
  if (twoWordMatch) return twoWordMatch[1];
  return fullName.trim().split(/\s+/)[0] || fullName;
}


