import { BrandItem } from '../types';
import { images } from './images';
import { getRouteMetadata } from './metadataRegistry';

const baseBrandsData: BrandItem[] = [
  {
    id: 'bmw-specialist',
    slug: 'bmw-repair-islamabad',
    name: 'BMW Repair & Maintenance Specialist Islamabad',
    tagline: 'BMW ISTA Diagnostics, VANOS & Valvetronic Servicing, B48/B58 Engine Overhauls & ZF 8-Speed Fluid Service',
    logoBadge: 'BMW Master Specialist',
    heroImage: images.galleryBmwBrakes,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent German automotive workshop specializing in BMW M-Power, xDrive, and core Series models (3 Series, 5 Series, 7 Series, X3, X5, X6, X7, M3, M5). Utilizing genuine BMW ISTA-D diagnostic software, ISTA-P programming suites, and dealer-grade optical ICOM interfaces, our factory-certified BMW technicians perform precision diagnostics, VANOS camshaft timing solenoid repairs, Valvetronic eccentric shaft servo motor calibration, cooling system thermostat replacements, oil leak remediations (valve cover, oil filter housing gasket), and ZF 8HP transmission servicing backed by written warranties.',
    modelsCovered: [
      'BMW 3 Series (E46, E90, F30, G20 - 318i, 320i, 328i, 330e Hybrid, M340i)',
      'BMW 5 Series (E60, F10, G30 - 520i, 528i, 530e, 535i, 540i, M550i)',
      'BMW 7 Series (F01/F02, G11/G12 - 730Li, 740Li, 750Li, ActiveHybrid 7)',
      'BMW X-Series (X1, X3, X5 E70/F15/G05, X6, X7 xDrive)',
      'BMW M Performance (M2, M3, M4, M5, X5M with S55/S58/S63 V8 Biturbo)',
      'BMW 4 Series & 6 Series Gran Coupé',
    ],
    diagnosticSoftware: 'BMW ISTA-D (Integrated Service Technical Application - Diagnostics), BMW ISTA-P (Programming), ICOM Next Optical Diagnostic Rig',
    commonIssuesAndFixes: [
      {
        issue: 'BMW "Drivetrain Malfunction - Drive Moderately" & Limp Mode',
        solution: 'ISTA deep fault code analysis, electronic wastegate solenoid actuator testing, high-pressure fuel pump (HPFP) pressure test, and ignition coil/spark plug replacement.',
      },
      {
        issue: 'Oil Filter Housing & Valve Cover Gasket Leaks (N20, B48, N55)',
        solution: 'OEM gasket replacement with high-temp sealant, PCV integrated valve cover renewal, and ultrasonic engine bay degreasing.',
      },
      {
        issue: 'VANOS Camshaft Solenoid & Valvetronic Servo Motor Failure',
        solution: 'Replacement of VANOS solenoids with genuine BMW parts, eccentric shaft wear inspection, and electronic ISTA limit learning calibration.',
      },
      {
        issue: 'ZF 8-Speed / 6-Speed Automatic Transmission Jerk & Sluggish Shifts',
        solution: 'Full transmission fluid flush using genuine ZF Lifeguard Fluid 8, pan filter replacement, and mechatronic adaptive shift recalibration.',
      },
    ],
    specializedServices: [
      'BMW ISTA-D & ISTA-P Factory Dealer Diagnostics & ECU Module Coding',
      'B38 / B48 / B58 / N20 / N55 / S58 Master Engine Rebuilding & Timing Calibration',
      'ZF 6HP & 8HP Transmission Fluid Flush & Mechatronic Repair',
      'BMW Dynamic Drive & Adaptive M Air Suspension Calibration',
      'VANOS Camshaft Phasing & Valvetronic Eccentric Shaft Rebuild',
      'High-Pressure Fuel System (HPFP) & Piezo/Solenoid Injector Flow Testing',
      'Self-Healing TPU Paint Protection Film (PPF) for BMW M & X Series',
    ],
    pricingRange: 'PKR 6,000 - PKR 350,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you use genuine BMW ISTA diagnostic software in Islamabad?',
        answer: 'Yes, we use the official BMW ISTA diagnostic and programming system with ICOM Next interfaces to diagnose all electrical, mechanical, and hybrid systems down to individual sensor telemetry.',
      },
      {
        question: 'How often should the ZF 8HP transmission fluid be changed on a BMW?',
        answer: 'While marketed as lifetime by some dealers, ZF explicitly recommends transmission fluid and integrated pan-filter replacement every 60,000 to 80,000 km to prevent solenoid wear, shift flares, and shuddering.',
      },
      {
        question: 'Can you fix oil leaks on BMW N20, B48, and B58 engines in Islamabad?',
        answer: 'Yes! We specialize in resolving oil filter housing gasket, valve cover, oil pan, and turbocharger oil feed line leaks using OEM Victor Reinz, Elring, and genuine BMW seals.',
      },
      {
        question: 'How do you fix BMW Drivetrain Malfunction warnings and boost pressure faults?',
        answer: 'We connect BMW ISTA to read DME shadow codes, test boost pressure solenoids, inspect electronic wastegate actuators, check charge pipes for hairline cracks, and evaluate high-pressure fuel pump pressures.',
      },
      {
        question: 'Can you service and calibrate BMW Dynamic Drive and Adaptive M suspension?',
        answer: 'Yes. Our technicians service BMW active anti-roll stabilizer bars, replace Adaptive M electronic dampers, and perform factory ride-height calibration using ISTA software.',
      },
      {
        question: 'Do you source authentic BMW OEM parts with warranty in Pakistan?',
        answer: 'All replacement parts installed at HyperTune Garage are either genuine BMW OEM boxed components with verifiable hologram seals or Tier-1 German OEM suppliers (Bosch, Lemförder, ZF, Mahle), backed by our written warranty.',
      },
    ],
    seo: {
      title: 'BMW Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Certified BMW workshop in Islamabad & Rawalpindi. BMW ISTA diagnostics, 3 Series, 5 Series, 7 Series, X5, M Power engine overhauls & ZF transmission service.',
      keywords: ['bmw repair islamabad', 'bmw specialist rawalpindi', 'bmw ista diagnostics', 'bmw workshop police foundation', 'bmw transmission service', 'bmw oil leak repair'],
    },
  },
  {
    id: 'mercedes-specialist',
    slug: 'mercedes-service-islamabad',
    name: 'Mercedes-Benz Luxury & AMG Specialist Workshop Islamabad',
    tagline: 'Mercedes Xentry Diagnostics, 7G/9G-Tronic Gearbox Care, Airmatic Air Suspension & M274/M264 Engine Tuning',
    logoBadge: 'Mercedes-Benz Master Specialist',
    heroImage: images.galleryAmgDetailing,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent workshop for Mercedes-Benz passenger, luxury limousine, and AMG performance vehicles. Armed with dealer-grade Mercedes-Benz Xentry Diagnostics, DAS, Star Diagnosis hardware, and certified European master engineers, we deliver comprehensive solutions for C-Class, E-Class, S-Class, CLA, GLA, GLC, GLE, GLS, and G-Wagon (G63 AMG). From diagnosing Check Engine fault codes and repairing Airmatic air suspension strut leaks to 7G-Tronic and 9G-Tronic automatic transmission overhauls, M274/M264 camshaft timing gear rattle fixes, and genuine 229.5 / 229.51 engine oil servicing, we provide dealership-level precision at honest rates.',
    modelsCovered: [
      'Mercedes-Benz C-Class (W203, W204, W205, W206 - C180, C200, C250, C300, C43 AMG)',
      'Mercedes-Benz E-Class (W211, W212, W213 - E200, E220d, E250, E300, E350e Hybrid, E63s)',
      'Mercedes-Benz S-Class (W221, W222, W223 - S350, S400 Hybrid, S500, S560, S580, Maybach)',
      'Mercedes-Benz SUV Family (GLA, GLB, GLC, GLE, GLS, ML350, GL500)',
      'Mercedes-AMG Performance Line (A45, C63s, E63s, G63 AMG 4.0L V8 Biturbo)',
      'Mercedes-Benz CLA & CLS 4-Door Coupé',
    ],
    diagnosticSoftware: 'Mercedes-Benz Xentry Diagnosis, DAS (Diagnostic Assistance System), Star Diagnosis C4/C6 DoIP Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Mercedes-Benz Airmatic Air Suspension "Car Rising / Stop Vehicle Too Low" Error',
        solution: 'Xentry pneumatic pressure testing, air suspension compressor rebuild, air strut bellow replacement, and computerized 4-corner ride height calibration.',
      },
      {
        issue: 'M274 / M271 Camshaft Timing Adjuster Rattle on Cold Start',
        solution: 'Replacement of worn intake/exhaust camshaft sprockets, hydraulic timing chain tensioner renewal, and laser timing lock alignment.',
      },
      {
        issue: '7G-Tronic / 9G-Tronic Transmission Hesitation & Conductor Plate Fault',
        solution: 'Conductor plate speed sensor repair, valve body solenoid ultrasonic cleaning, genuine Mercedes ATF fluid flush, and adaptation drive.',
      },
      {
        issue: 'Auxiliary Battery Malfunction Warning on Dashboard',
        solution: 'Auxiliary capacitor / AGM voltage regulator replacement and electronic SAM module error reset.',
      },
    ],
    specializedServices: [
      'Mercedes-Benz Xentry Dealer Diagnostics & SCN Online Module Coding',
      'M270 / M274 / M264 / M276 / M177 AMG V8 Biturbo Master Engine Overhaul',
      '7G-Tronic (722.9) & 9G-Tronic (725.0) Transmission Fluid Flush & Valve Body Repair',
      'Airmatic & ABC (Active Body Control) Hydraulic/Air Suspension Overhaul',
      'Mercedes ME9 / MED17 Engine ECU Diagnostics & Electronic Key/EIS Repair',
      'Distronic Plus Radar, 360-Camera & Active Brake Assist Calibration',
      'Self-Healing TPU Paint Protection Film (PPF) for Mercedes G63 & S-Class',
    ],
    pricingRange: 'PKR 6,000 - PKR 380,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you have official Mercedes Xentry Star Diagnostic scanners in Islamabad?',
        answer: 'Yes. We run authentic Mercedes-Benz Xentry Star Diagnosis systems with C4/C6 DoIP interfaces, enabling deep control unit adaptation, SCN coding, and module programming for all C, E, S, and G-Class vehicles.',
      },
      {
        question: 'How do you fix Mercedes Airmatic and E-Active Body Control suspension problems?',
        answer: 'We pinpoint leaks using ultrasonic leak detectors and Xentry pneumatic pressure test routines. We replace failing air bellows, rebuild valve blocks, and install heavy-duty suspension compressors at a fraction of dealership cost.',
      },
      {
        question: 'Can you service Mercedes-AMG G63, C63, and V8 Biturbo engines in Islamabad & Rawalpindi?',
        answer: 'Yes. Our master mechanics specialize in M177 / M178 4.0L V8 Biturbo and M157 5.5L AMG powerplants, handling intercooler auxiliary water pumps, turbo oil scavenge lines, and high-performance Brembo carbon/steel braking systems.',
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
        answer: 'Yes. Our certified high-voltage technicians diagnose Mercedes EQ (EQA, EQB, EQC, EQS) and hybrid battery cooling loops, electric drive units, and onboard AC/DC charging electronics.',
      },
    ],
    seo: {
      title: 'Mercedes-Benz Repair & Service Specialist Islamabad | HyperTune Garage',
      description: 'Certified Mercedes-Benz workshop in Islamabad & Rawalpindi. Mercedes Xentry diagnostics, C-Class, E-Class, S-Class, G-Wagon, AMG repairs, Airmatic & 7G/9G transmission care.',
      keywords: ['mercedes repair islamabad', 'mercedes specialist rawalpindi', 'mercedes xentry diagnostic', 'mercedes workshop police foundation', 'mercedes airmatic repair', 'mercedes amg service'],
    },
  },
  {
    id: 'audi-specialist',
    slug: 'audi-repair-islamabad',
    name: 'Audi & German VAG Specialist Workshop Islamabad',
    tagline: 'ODIS Factory Diagnostics, S-Tronic / DSG Dual-Clutch Repair, EA888 TFSI Carbon Cleaning & Quattro Servicing',
    logoBadge: 'Audi Master Specialist',
    heroImage: images.galleryAudiService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Audi and Volkswagen Group (VAG) vehicles. Equipped with the official Audi ODIS (Offboard Diagnostic Information System), VCDS / VAG-COM interfaces, and VAS specialty toolsets, our certified European technicians deliver comprehensive engineering solutions for Audi A3, A4, A5, A6, A7, A8, Q2, Q3, Q5, Q7, Q8, TT, and RS models. From diagnosing TFSI carbon buildup and solving excessive oil consumption to rebuilding S-Tronic (DQ200, DQ250, DQ381, DQ500, DL501) mechatronic units and servicing Quattro differentials, we provide dealer-grade expertise.',
    modelsCovered: [
      'Audi A3 & S3 (1.4L TFSI, 1.8L TFSI, 2.0L TFSI S-Tronic)',
      'Audi A4 & S4 (B7, B8, B9 - 1.8T, 2.0 TFSI, 3.0T V6 Supercharged / Turbo)',
      'Audi A5 & S5 Sportback / Coupé',
      'Audi A6 & A7 (C6, C7, C8 - 2.0 TFSI, 3.0 TFSI V6 Quattro)',
      'Audi A8 & A8L Flagship Sedan (Matrix LED, Quattro)',
      'Audi Q-Series (Q2, Q3, Q5, Q7 3.0T / TDI, Q8 Coupé SUV)',
      'Audi RS Performance (RS3, RS5, RS6 Avant, RS7, Audi R8 V10)',
    ],
    diagnosticSoftware: 'Audi ODIS (Offboard Diagnostic Information System), VAS 6154 DoIP Interface & Ross-Tech VCDS Hex-V2',
    commonIssuesAndFixes: [
      {
        issue: 'Audi S-Tronic / DSG Transmission "Gearbox Malfunction: You Can Continue Driving"',
        solution: 'Mechatronic electronic circuit board repair, solenoid valve pressure recalibration, dual clutch pack clearance adjustment, and high-performance DSG fluid flush.',
      },
      {
        issue: 'EA888 1.8L / 2.0L TFSI High Engine Oil Consumption & Timing Chain Stretch',
        solution: 'Installation of updated OEM piston ring assemblies, revised PCV oil separator, timing chain and hydraulic tensioner replacement with phase calibration.',
      },
      {
        issue: 'Intake Valve Carbon Fouling Causing Cold-Start Misfires (P0300)',
        solution: 'Precision walnut shell abrasive blasting of intake ports and valves, ultrasonic direct-injection fuel injector cleansing, and throttle body relearn.',
      },
      {
        issue: 'Quattro Haldex / Torsen All-Wheel Drive Binding Noise & Shudder',
        solution: 'Quattro differential and Haldex AWD coupling fluid flush with OEM Audi G055 / G060 gear lubricants and clutch pump filter cleaning.',
      },
    ],
    specializedServices: [
      'Audi ODIS Factory Dealer Diagnostics & Component Protection Removal',
      'EA888 Gen 2 / Gen 3 / Gen 4 TFSI Master Engine Rebuilding & Oil Consumption Rectification',
      'S-Tronic & DSG (DQ200 / DQ250 / DQ381 / DL501) Mechatronic Unit Overhaul',
      'Intake Valve Direct-Injection Carbon Removal via Walnut Blasting',
      'Adaptive Air Suspension Compressor & Strut Calibration',
      'Quattro AWD Differential & Transfer Case Servicing with OEM Fluids',
      'Self-Healing TPU Paint Protection Film (PPF) for Audi A5, A7 & Q8',
    ],
    pricingRange: 'PKR 5,000 - PKR 360,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you have official Audi ODIS dealer diagnostic tools in Islamabad?',
        answer: 'Yes. We operate official Audi ODIS (Offboard Diagnostic Information System) with VAS 6154 interfaces, enabling factory component protection removal, module flashing, and guided fault finding.',
      },
      {
        question: 'How do you fix DSG / S-Tronic gearbox shudder and mechatronic faults on Audi cars?',
        answer: 'We repair internal mechatronic solenoid circuit boards, replace dual clutch packs, flush dual-circuit hydraulic transmission fluids, and perform ODIS basic settings clutch kiss-point calibration.',
      },
      {
        question: 'Why do Audi TFSI engines consume oil and how does HyperTune fix it?',
        answer: 'Excessive oil consumption in 1.8 and 2.0 TFSI engines is typically caused by clogged oil scraper piston rings or failing crankcase breather PCV valves. We replace PCV assemblies and, if needed, install upgraded modified Mahle pistons with wider oil control rings.',
      },
      {
        question: 'How do you fix carbon buildup on 2.0 TFSI and 3.0 TFSI direct injection intake valves?',
        answer: 'Because direct-injected engines do not wash intake valves with gasoline, carbon builds up and causes misfires. We perform walnut shell blasting on intake ports and valves, restoring lost horsepower and smooth idling without damaging metal surfaces.',
      },
      {
        question: 'Can you service Audi Quattro differentials and electronic sports differentials?',
        answer: 'Yes. We change center Torsen differential fluids, crown-gear differential oils, and service Haldex / Ultra clutch packs with genuine Audi high-performance lubricants and new internal filter screens.',
      },
      {
        question: 'What warranty is provided on Audi electronic module repairs and mechatronics?',
        answer: 'All Audi mechatronic overhauls and electronic control module repairs completed by HyperTune Garage come with a 6 to 12-month written warranty covering parts and diagnostic labor.',
      },
    ],
    seo: {
      title: 'Audi Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Certified Audi workshop in Islamabad & Rawalpindi. Audi ODIS diagnostics, A3, A4, A6, A7, Q7, S-Tronic DSG transmission repair, TFSI engine overhaul & Quattro service.',
      keywords: ['audi repair islamabad', 'audi specialist rawalpindi', 'audi odis diagnostic', 'audi dsg repair', 'audi stronic workshop', 'audi tfsi carbon cleaning'],
    },
  },
  {
    id: 'porsche-specialist',
    slug: 'porsche-repair-islamabad',
    name: 'Porsche High-Performance Engineering Specialist Islamabad',
    tagline: 'Porsche PIWIS III Diagnostics, PDK Dual-Clutch Gearbox Overhauls, PASM Air Suspension & 911 / Cayenne Care',
    logoBadge: 'Porsche Master Specialist',
    heroImage: images.galleryPorscheGt3,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s dedicated high-performance engineering studio for Porsche sports cars and luxury performance SUVs. Equipped with official Porsche PIWIS III dealer diagnostic rigs, specialized engine micrometer toolsets, and certified master technicians, we cater to Porsche 911 (996, 997, 991, 992), 718 Boxster & Cayman, Cayenne (9PA, 92A, 9YA - V6, S, GTS, Turbo), Panamera, Macan, and Taycan EV models. From PDK dual-clutch transmission dual-chamber fluid flushes and PASM air suspension accelerometer calibrations to V6/V8 twin-turbo cooling tube upgrades and 6-piston Brembo / PCCB ceramic brake maintenance, we deliver Stuttgart-standard precision.',
    modelsCovered: [
      'Porsche 911 (997, 991, 992 - Carrera, Carrera S, 4S, Turbo, Turbo S, GT3)',
      'Porsche 718 Cayman & Boxster (2.0T, 2.5T, GTS 4.0)',
      'Porsche Cayenne (958, 9YA - 3.0 V6, 3.6 V6, 4.8 V8, 4.0TT V8, E-Hybrid)',
      'Porsche Panamera (Panamera 4, 4S, GTS, Turbo, Turbo S E-Hybrid)',
      'Porsche Macan (Macan 2.0T, Macan S 3.0T, Macan GTS, Turbo)',
      'Porsche Taycan 100% Electric (4S, Turbo, Turbo S)',
    ],
    diagnosticSoftware: 'Porsche PIWIS Tester III (Porsche Integrated Workshop Information System) & VCI Diagnostic Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Porsche PDK Transmission "Transmission Emergency Run" Warning',
        solution: 'PDK dual-chamber fluid flush (gear & clutch oil), distance sensor / temperature sensor telemetry check, and PIWIS clutch calibration relearn.',
      },
      {
        issue: 'Cayenne / Panamera V8 Coolant Valley Pipe Leak & Engine Overheating',
        solution: 'Replacement of plastic valley coolant pipes with upgraded aluminum lines, thermostat housing renewal, and vacuum bleed with genuine Porsche G40 coolant.',
      },
      {
        issue: 'PASM (Porsche Active Suspension Management) Chassis System Fault',
        solution: 'PASM valve solenoid testing, air spring strut bladder leak detection, height sensor replacement, and PIWIS corner weighting calibration.',
      },
      {
        issue: 'Porsche Direct-Injection (DFI) Spark Plug & Ignition Coil Breakdown',
        solution: 'Installation of genuine Porsche OEM Bosch/Beru spark plugs, heat shield verification, and high-energy coil pack replacement.',
      },
    ],
    specializedServices: [
      'Porsche PIWIS III Dealer-Level Diagnostics, Live Telemetry & Handover Handshake',
      'PDK (Porsche Doppelkupplung) 7-Speed & 8-Speed Fluid Servicing & Calibration',
      'Flat-6 (3.0T, 3.8L, 4.0L) & V6 / V8 Twin-Turbo Master Engine Rebuilding',
      'PASM (Porsche Active Suspension Management) Air Suspension Calibration & Strut Repair',
      'Porsche Ceramic Composite Brakes (PCCB) & Multi-Piston Brembo Caliper Overhaul',
      'Sport Chrono Package Calibration & Diagnostic Telemetry',
      'Self-Healing TPU Paint Protection Film (PPF) for Porsche 911, GT3, Cayman & Cayenne',
    ],
    pricingRange: 'PKR 10,000 - PKR 500,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you have official Porsche PIWIS III diagnostic equipment in Islamabad?',
        answer: 'Yes. We utilize official Porsche PIWIS III diagnostic systems with authentic PT3G VCI interfaces, allowing full access to all DME, PDK, PASM, PDCC, and PTV control modules.',
      },
      {
        question: 'How do you service Porsche PDK transmissions in Pakistan?',
        answer: 'We perform clutch fluid and gear oil services on 7-speed and 8-speed PDK transmissions using genuine Porsche Mobilube and Pentosin FFL fluids, replacing integrated pan-filters and running automated calibration drive routines.',
      },
      {
        question: 'Can you install Paint Protection Film (PPF) on Porsche sports cars and GT3s?',
        answer: 'Yes! We specialize in custom computerized CAD pattern-cutting for 911, 718 Cayman/Boxster, Taycan, and Macan/Cayenne models, wrapping all edges seamlessly around curvaceous aerodynamic body panels.',
      },
      {
        question: 'How do you maintain Cayenne and Macan air suspension and transfer case systems?',
        answer: 'We service Cayenne and Macan multi-plate clutch transfer cases to eliminate low-speed binding shudder, and diagnose Porsche Active Suspension Management (PASM) air struts and nitrogen charging circuits.',
      },
      {
        question: 'Can you perform Porsche IMS bearing inspection and coolant pipe pinning?',
        answer: 'Yes. For naturally aspirated 996, 997, and Boxster engines, we inspect intermediate shaft (IMS) bearing tolerance, install dual-row ceramic retrofits, and pin or weld aluminum coolant pipes on GT3 and Turbo models.',
      },
      {
        question: 'What engine oil and service intervals are recommended for Porsche flat-6 and V8 engines?',
        answer: 'We exclusively use Porsche A40 and C40 homologated fully synthetic motor oils (Mobil 1 FS 0W-40 / ESP X3 0W-40) with OEM Mahle filter elements, recommending intervals of 7,500 to 10,000 km.',
      },
    ],
    seo: {
      title: 'Porsche Repair & High-Performance Specialist Islamabad | HyperTune Garage',
      description: 'Premier Porsche workshop in Islamabad & Rawalpindi. Porsche PIWIS III diagnostics, 911, Cayenne, Panamera, Macan & Cayman service, PDK transmission fluid flush & PASM repair.',
      keywords: ['porsche repair islamabad', 'porsche specialist rawalpindi', 'porsche piwis diagnostic', 'porsche 911 service', 'porsche cayenne maintenance', 'porsche pdk transmission repair'],
    },
  },
  {
    id: 'toyota-specialist',
    slug: 'toyota-repair-islamabad',
    name: 'Toyota Repair & Maintenance Specialist Islamabad',
    tagline: 'Techstream OEM Diagnostics, Hybrid Battery Balancing, Land Cruiser V8 & CVT Servicing',
    logoBadge: 'Toyota Master Specialist',
    heroImage: images.brandToyotaService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent workshop for Toyota passenger, hybrid, and heavy-duty 4x4 vehicles. Equipped with official Toyota Techstream diagnostic interfaces, Denso scanner rigs, and factory-trained master technicians, we deliver bumper-to-bumper solutions for Yaris, Corolla, Fortuner, Hilux Revo/Rocco, Prado, and Land Cruiser LC200/LC300 models. From resolving P0A80 hybrid battery degradation to 1VD-FTV V8 twin-turbo overhauls, high-pressure common rail fuel calibration, and genuine Toyota Super Long Life Coolant flushes, we guarantee unmatched reliability at transparent pricing.',
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
    diagnosticSoftware: 'Toyota Techstream OEM Diagnostic Suite, Denso Intelligent Tester II & High-Voltage Battery Load Bench',
    commonIssuesAndFixes: [
      {
        issue: 'Check Hybrid System Warning & P0A80 Error Code',
        solution: 'Computerized individual cell voltage impedance analysis, high-resistance nickel-metal/lithium module replacement, cell rebalancing, and hybrid blower fan ultrasonic cleaning.',
      },
      {
        issue: 'Land Cruiser 1VD-FTV / Hilux Revo Black Smoke & Turbo Boost Drop',
        solution: 'Ultrasonic common rail injector flow matching, stepper motor electronic turbo actuator calibration, and intake EGR chemical decoking.',
      },
      {
        issue: 'Corolla / Yaris CVT Transmission Drone & Acceleration Jerk',
        solution: 'CVT fluid flush using Genuine Toyota CVT Fluid FE/TC, magnet pan cleaning, fine-mesh strainer replacement, and computer transmission pressure recalibration.',
      },
      {
        issue: 'KDSS Sway Bar Warning & Steering Drift on Prado / Land Cruiser',
        solution: 'Hydraulic KDSS pressure equalization, accumulator valve check, and 3D computer laser wheel alignment.',
      },
    ],
    specializedServices: [
      'Toyota Techstream Dealer-Level Computer Scans & Live Sensor Telemetry',
      'P0A80 Hybrid Battery Module Replacement, Balancing & Cooling Duct Maintenance',
      '1GD / 2GD / 1VD Diesel Common Rail Injector & High-Pressure Pump Rebuild',
      'Toyota Super CVT-i & 6-Speed / 8-Speed / 10-Speed Automatic Transmission Flush',
      'Brake Booster Assembly Overhaul & ABS Actuator Coding',
      'Air Suspension & KDSS Hydraulic Suspension Servicing',
      'Self-Healing TPU Paint Protection Film (PPF) for Fortuner, Revo & Land Cruiser',
    ],
    pricingRange: 'PKR 3,500 - PKR 180,000 (Based on Model & Service)',
    faqs: [
      {
        question: 'Do you use genuine Toyota OEM parts and oils?',
        answer: 'Yes. We strictly source genuine Toyota OEM parts (imported from Japan and Toyota Indus) with verifiable part numbers, including Toyota Genuine Motor Oils (0W-20, 5W-30), Super Long Life Coolant, and CVT-FE fluids.',
      },
      {
        question: 'How do you fix P0A80 Hybrid Battery errors on Prius, Aqua, and Cross?',
        answer: 'We test individual nickel-metal hydride (NiMH) and lithium-ion cells under discharge load using Toyota Techstream. We replace degraded modules with balanced OEM cells, clean cooling blower fans, and recondition the high-voltage pack.',
      },
      {
        question: 'Can you service Toyota Fortuner Sigma 4 and Land Cruiser LC200 / LC300 in Islamabad?',
        answer: 'Yes. We are the premier facility for Toyota SUVs, offering 1GD-FTV and 1VD-FTV turbo diesel servicing, electronic KDSS suspension balancing, common-rail injector calibration, and 4WD transfer case rebuilding.',
      },
      {
        question: 'How often should Toyota Super Long Life Coolant and CVT-FE fluid be changed?',
        answer: 'Toyota factory CVT fluid should be replaced every 40,000 km in Pakistan’s hot climate, and pink Super Long Life Coolant flushed every 80,000 km or 4 years to prevent aluminum head erosion and water pump cavitation.',
      },
      {
        question: 'Can you repair KD and GD series common rail diesel injector knocking on Hilux and Fortuner?',
        answer: 'Yes. We test common rail piezo and solenoid injectors on our digital test bench, measure injector pilot quantity learning values, replace worn nozzles, and reprogram injector compensation codes into the engine ECU.',
      },
      {
        question: 'Do you perform 4WD transfer case actuator and differential servicing for Land Cruisers?',
        answer: 'Yes. We repair stuck electronic 4WD high/low actuator motors, replace leaking axle pinion seals, and flush front and rear differentials with genuine Toyota LT 75W-85 GL-5 synthetic gear oil.',
      },
    ],
    seo: {
      title: 'Toyota Repair & Maintenance Specialist Islamabad | HyperTune Garage',
      description: 'Certified Toyota workshop in Islamabad & Rawalpindi. Toyota Techstream diagnostics, P0A80 hybrid battery repair, Land Cruiser V8, Fortuner, Revo & Corolla servicing.',
      keywords: ['toyota repair islamabad', 'toyota specialist rawalpindi', 'toyota techstream', 'hybrid battery repair toyota', 'fortuner maintenance', 'land cruiser overhaul islamabad'],
    },
  },
  {
    id: 'honda-specialist',
    slug: 'honda-service-islamabad',
    name: 'Honda Turbo & Hybrid Specialist Workshop Islamabad',
    tagline: 'HDS Factory Diagnostics, Civic 1.5 Turbo Care, Vezel i-DCD Dual-Clutch Repair & Steering Calibration',
    logoBadge: 'Honda Master Specialist',
    heroImage: images.brandHondaService,
    overview: 'HyperTune Garage is the go-to independent specialist workshop for Honda vehicles in Islamabad and Rawalpindi. Equipped with official Honda Diagnostic System (HDS) and GNA600 scan rigs, our certified technicians excel in solving complex issues across Civic Turbo (Gen 10 & Gen 11), Vezel Hybrid i-DCD dual-clutch transmissions, City, Accord, and CR-V. From intake valve walnut blasting for direct-injection carbon buildup to Vezel dual-clutch actuator fluid bleeding and electronic power steering (EPS) rack repairs, we ensure smooth, responsive performance.',
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
    diagnosticSoftware: 'Honda HDS (Honda Diagnostic System), GNA600 & i-HDS Diagnostic Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Honda Vezel Transmission Warning & "Transmission Temperature High"',
        solution: 'i-DCD slave cylinder actuator clutch fluid flush with DOT 4, clutch stroke distance relearn, and computerized clutch plate adaptation.',
      },
      {
        issue: 'Civic 1.5L VTEC Turbo Engine Judder & Cold Start Misfires',
        solution: 'Walnut shell blasting to remove heavy carbon crust from intake valves, direct-injection high-pressure fuel injector calibration, and spark plug refresh.',
      },
      {
        issue: 'Honda Civic / City Steering Rack Noise & EPS Warning Light',
        solution: 'Electronic Power Steering (EPS) torque sensor zero-point calibration, Teflon bushing replacement, and rack backlash adjustment.',
      },
      {
        issue: 'Honda CVT Acceleration Whine & Delayed Reverse Engagement',
        solution: 'Complete CVT flush using Genuine Honda HCF-2 fluid, dual internal pan filter renewal, and transmission pressure solenoid learning.',
      },
    ],
    specializedServices: [
      'Honda Diagnostic System (HDS) Scanner Scans & Module Coding',
      'Honda Vezel i-DCD Dual-Clutch Actuator Overhaul & Stroke Relearning',
      'Civic Turbo Direct Injection Intake Valve Carbon Walnut De-coking',
      'Honda CVT Transmission Fluid Flush with Genuine HCF-2 / CVTF',
      'Electronic Power Steering (EPS) Rack & Column Restoration',
      'Honda Earth Dreams Engine Timing Chain & Valve Clearance Adjustment',
      'Self-Healing TPU Paint Protection Film (PPF) for Civic RS & Vezel',
    ],
    pricingRange: 'PKR 3,500 - PKR 160,000',
    faqs: [
      {
        question: 'Can you fix the dreaded Vezel dual-clutch transmission warning in Islamabad?',
        answer: 'Yes! We are Islamabad’s leading authority on Honda i-DCD dual-clutch gearboxes (Vezel, Grace, Fit, Shuttle). We flush actuator clutch fluid (DOT 4), bleed the hydraulic release system, and run computerized clutch kiss-point adaptations.',
      },
      {
        question: 'Why does my Honda Civic 1.5 Turbo hesitate during boost or throw knock sensor codes?',
        answer: 'Civic Turbo hesitation in Pakistan is frequently caused by carbon deposits on direct injectors, low fuel octane knock retard, or leaking turbo blow-off valves. We test fuel trim live data, clean GDI injectors ultrasonically, and check intercooler piping.',
      },
      {
        question: 'Do you use genuine Honda HCF-2 transmission fluid for CVTs?',
        answer: 'Yes. Using incorrect transmission fluid in a Honda CVT destroys the steel push belt. We strictly use genuine Honda HCF-2 (or Ultra ATF-DW1 for traditional automatics) with new internal pan and paper filters.',
      },
      {
        question: 'How do you resolve steering rack clicking and EPS motor noise on Civic X and XI?',
        answer: 'Steering clunks on Civic X/XI are caused by worn steering rack guide sliders or loose EPS motor dampeners. We overhaul the steering rack with upgraded Teflon guide bushings and re-grease the EPS worm gear to eliminate rattles.',
      },
      {
        question: 'How often should valve clearances and spark plugs be tuned on Honda i-VTEC engines?',
        answer: 'Honda mechanical valve clearances should be checked and adjusted using feeler gauges every 40,000 km, while OEM NGK Laser Iridium spark plugs should be inspected and replaced every 60,000 to 80,000 km.',
      },
      {
        question: 'Can you service Honda e:HEV hybrid systems on new Civic and HR-V models?',
        answer: 'Yes. We connect Honda HDS diagnostic software to service e:HEV dual-motor hybrid powertrains, inspect the Intelligent Power Unit (IPU) lithium battery pack, and flush electric motor inverter cooling loops.',
      },
    ],
    seo: {
      title: 'Honda Turbo & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Expert Honda repair in Islamabad & Rawalpindi. Honda HDS diagnostics, Civic 1.5 Turbo care, Vezel i-DCD dual-clutch repairs, CVT fluid flush, and EPS calibration.',
      keywords: ['honda repair islamabad', 'civic turbo specialist rawalpindi', 'vezel hybrid dual clutch fix', 'honda hds diagnostic', 'honda city maintenance', 'honda vezel transmission repair'],
    },
  },
  {
    id: 'suzuki-specialist',
    slug: 'suzuki-repair-islamabad',
    name: 'Suzuki Repair & Servicing Specialist Islamabad',
    tagline: 'SDT-II Computer Diagnostics, AGS Actuator Calibration, K-Series Engine Rebuild & Suspension Overhaul',
    logoBadge: 'Suzuki Master Specialist',
    heroImage: images.brandSuzukiService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s trusted specialist for all Suzuki domestic and imported Japanese kei cars. Utilizing the official Suzuki SDT-II scanner, our expert technicians troubleshoot Alto (660cc & AGS), Cultus AGS, Swift (1.3L & 1.2L Boosterjet), Wagon R, Jimny 4x4, and imported Japanese models (Hustler, Spacia, Every). We offer swift AGS clutch actuator repairs, K-Series engine tune-ups, AC cooling overhauls, and robust suspension rebuilding.',
    modelsCovered: [
      'Suzuki Alto (660cc Japanese, 660cc PKDM VXR/VXL/AGS)',
      'Suzuki Cultus (VXL & AGS 1.0L K10B)',
      'Suzuki Swift (1.3L M13A, 1.2L DualJet K12M, 1.0L/1.4L Boosterjet Turbo)',
      'Suzuki Wagon R (1.0L K10B PKDM & JDM Stingray Turbo Hybrid)',
      'Suzuki Jimny / Sierra (660cc Turbo & 1.5L K15B 4x4)',
      'Suzuki Every & Bolan (DA64V, DA17V JDM Van & PKDM)',
      'Suzuki Hustler, Spacia & Lapin (JDM Mild Hybrid S-ENE Charge)',
    ],
    diagnosticSoftware: 'Suzuki Diagnostic Tester II (SDT-II) & Global OBD-II High-Speed CAN Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Suzuki AGS Gear Transmission Warning & Jerky Gear Changes (Alto / Cultus)',
        solution: 'Automated Manual Transmission (AGS) hydraulic pump test, clutch stroke potentiometer calibration, actuator solenoid cleaning, and clutch relearn.',
      },
      {
        issue: 'K-Series Engine Idle Vibration, Hunting & Low Fuel Economy',
        solution: 'Ultrasonic fuel injector cleaning, electronic throttle body carbon decoking, valve tappet adjustment, and OEM spark plug replacement.',
      },
      {
        issue: 'Suspension Knocking & Steering Rattle on Broken Islamabad / Pindi Roads',
        solution: 'Heavy-duty polyurethane and OEM rubber control arm bushing replacement, ball joint renewal, strut mounting replacement, and 3D wheel alignment.',
      },
      {
        issue: 'Weak AC Cooling in 45°C Summer Heat',
        solution: 'AC condenser pressure washing, expansion valve replacement, compressor clutch gap adjustment, and computerized R134a refrigerant recharge.',
      },
    ],
    specializedServices: [
      'Suzuki SDT-II Full-System Computer Health Scans & DTC Clearing',
      'AGS Auto Gear Shift Actuator Calibration & Clutch Pack Replacement',
      'Suzuki K-Series (K6A, R06A, K10B, K12M) Master Engine Overhauls',
      'Manual, Automatic & AGS Transmission Fluid Service with Genuine Shell/Suzuki Oils',
      'Suspension, Steering Rack & Bushing Refresh for Smooth City Ride',
      'High-Performance Car AC Servicing & Sub-5°C Vent Cooling Upgrades',
      'Paint Correction, Ceramic Coating & Front-End PPF for Suzuki Swift & Jimny',
    ],
    pricingRange: 'PKR 2,500 - PKR 75,000',
    faqs: [
      {
        question: 'Can you solve the jerky shifting on Suzuki Alto and Cultus AGS models?',
        answer: 'Yes! Suzuki Auto Gear Shift (AGS) jerkiness is caused by misaligned clutch actuator learn values or hydraulic accumulator pressure drops. We perform full AGS actuator relearns and clutch calibration using specialized Suzuki diagnostic software.',
      },
      {
        question: 'Do you service imported Japanese 660cc Suzuki Hustler, Spacia, and Every models?',
        answer: 'Yes. We cater to Japanese imported Kei cars, offering turbocharger inspections, Suzuki Ene-Charge lithium auxiliary battery testing, CVT fluid replacements with Suzuki Green-2 oil, and computer scans.',
      },
      {
        question: 'How long does a routine Suzuki periodic maintenance oil service take?',
        answer: 'A routine maintenance service—including genuine synthetic engine oil, OEM oil filter, air filter cleaning/replacement, and 50-point suspension and brake check—is completed in approximately 45 minutes.',
      },
      {
        question: 'How do you repair Suzuki EPS electric power steering column vibration and rattle?',
        answer: 'Vibration and clattering on rough roads is caused by worn rubber star couplers inside the electric power steering column motor. We disassemble the column and install upgraded heavy-duty polyurethane couplers.',
      },
      {
        question: 'What coolant and engine oil viscosity is best for Suzuki K-Series engines in Pakistan?',
        answer: 'For Suzuki K10B, K10C, and K12M engines, we recommend 0W-20 or 5W-30 API SP fully synthetic engine oil paired with genuine blue or green long-life ethylene glycol coolant to protect the aluminum block.',
      },
      {
        question: 'Can you resolve Suzuki catalytic converter choking and low mileage issues?',
        answer: 'Yes. Due to low-quality fuel and dusty conditions, Suzuki catalytic converters choke quickly. We measure exhaust backpressure, clean the converter using pressurized decarbonizing foam, and test oxygen sensor response times.',
      },
    ],
    seo: {
      title: 'Suzuki Repair & Servicing Specialist Islamabad | HyperTune Garage',
      description: 'Leading Suzuki workshop in Islamabad & Rawalpindi. Suzuki SDT-II diagnostics, Alto & Cultus AGS transmission calibration, Swift repairs, AC recharge & K-series engine rebuilds.',
      keywords: ['suzuki repair islamabad', 'suzuki specialist rawalpindi', 'alto ags calibration', 'cultus ags repair', 'suzuki swift maintenance', 'suzuki workshop police foundation'],
    },
  },
  {
    id: 'hyundai-specialist',
    slug: 'hyundai-repair-islamabad',
    name: 'Hyundai Specialist Repair & Service Center Islamabad',
    tagline: 'Hyundai GDS Factory Diagnostics, Tucson DCT Overhaul, Elantra & Santa Fe Servicing',
    logoBadge: 'Hyundai Master Specialist',
    heroImage: images.brandHyundaiService,
    overview: 'HyperTune Garage provides dealer-level independent engineering for the entire Hyundai lineup in Islamabad and Rawalpindi. Equipped with the official Hyundai Global Diagnostic System (GDS-Mobile), our master technicians specialize in Elantra (1.6L/2.0L), Tucson (AWD/FWD), Sonata (2.0L/2.5L), Santa Fe Hybrid, Staria, and Porter H-100. From diagnosing Dual-Clutch Transmission (DCT) shudder and theta/nu engine maintenance to 8-speed automatic gearbox fluid flushes and electronic parking brake calibration, we ensure factory refinement.',
    modelsCovered: [
      'Hyundai Tucson (2.0L MPI Petrol AWD/FWD & 1.6T DCT)',
      'Hyundai Elantra (1.6L GL & 2.0L GLS 6-Speed Auto)',
      'Hyundai Sonata (2.0L & 2.5L Smartstream Luxury Sedan)',
      'Hyundai Santa Fe (1.6L Turbo Hybrid AWD & 2.4L/3.5L Petrol)',
      'Hyundai Staria (3.5L V6 Petrol & 2.2L CRDi Diesel 11-Seater)',
      'Hyundai Ioniq Hybrid & Ioniq 5 Electric (EV Diagnostics)',
      'Hyundai Grand Starex & H-100 Porter Commercial Fleet',
    ],
    diagnosticSoftware: 'Hyundai Global Diagnostic System (GDS-Mobile) & VCI-II Diagnostic Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Hyundai Tucson / Sonata DCT Shudder & Low-Speed Gear Hesitation',
        solution: 'Dry dual-clutch clearance measurement, actuator stepper motor calibration, and computerized clutch touch-point relearn.',
      },
      {
        issue: 'Elantra / Sonata Engine Knocking & Tappet Noise on Cold Start',
        solution: 'Hydraulic lash adjuster (HLA) inspection, oil gallery pressure test, and 100% synthetic 5W-30/0W-20 oil upgrade with OEM filter.',
      },
      {
        issue: 'Electronic Parking Brake (EPB) / Auto-Hold Warning Light On',
        solution: 'GDS software actuator position calibration, rear brake caliper motor service, and ceramic brake pad renewal.',
      },
      {
        issue: 'AWD 4WD Lock Warning & Rear Differential Binding on Tucson',
        solution: 'Electromagnetic coupling solenoid testing, transfer case fluid replacement, and multi-plate clutch inspection.',
      },
    ],
    specializedServices: [
      'Hyundai GDS Computer Diagnostic Scans & Firmware Module Updates',
      'Tucson & Sonata Dual-Clutch (DCT) and 6/8-Speed Automatic Transmission Service',
      'Smartstream 2.0L / 2.5L & CRDi Turbo Diesel Engine Maintenance',
      'Santa Fe Hybrid High-Voltage System Health Check & Inverter Cooling',
      'Electronic Power Steering, Suspension & 3D Laser Wheel Alignment',
      'Brake Disc Resurfacing, Ceramic Brake Pads & ABS System Bleeding',
      'CAD Computer Pre-Cut Paint Protection Film (PPF) for Sonata & Tucson',
    ],
    pricingRange: 'PKR 4,000 - PKR 150,000',
    faqs: [
      {
        question: 'Do you have official diagnostic tools for Hyundai Sonata, Tucson, and Elantra in Islamabad?',
        answer: 'Yes. We run Hyundai GDS-Mobile and advanced bi-directional diagnostic scanners capable of scanning all Smartstream engine control units, ADAS radar calibration, and electronic transmission modules.',
      },
      {
        question: 'Can you service the new Hyundai Santa Fe Hybrid and Tucson Hybrid in Islamabad?',
        answer: 'Yes. Our high-voltage technicians service Hyundai 1.6T Hybrid powertrains, inspect hybrid starter-generators (HSG), test traction battery health, and flush specialized low-conductivity EV coolant loops.',
      },
      {
        question: 'What engine oil is recommended for Hyundai Elantra and Sonata in Pakistan?',
        answer: 'We recommend API SP / ILSAC GF-6 fully synthetic 5W-20 or 5W-30 engine oils formulated to protect against Low-Speed Pre-Ignition (LSPI) in Nu 2.0L and Theta II / Smartstream 2.5L engines.',
      },
      {
        question: 'How do you diagnose and prevent Theta II and Smartstream engine oil consumption?',
        answer: 'We perform cylinder borescope inspections to inspect cylinder wall cross-hatching, test PCV oil separation, and measure compression. We use high-shear synthetic lubricants to prevent ring gumming.',
      },
      {
        question: 'Can you service Hyundai 7-speed and 8-speed dual-clutch transmissions (DCT)?',
        answer: 'Yes. We service dry and wet dual-clutch transmissions on Hyundai Tucson and Sonata, replacing clutch gear fluid, adjusting clutch actuator rods, and running diagnostic touch-point adaptation cycles.',
      },
      {
        question: 'How do you service Hyundai Tucson electronic AWD coupling units?',
        answer: 'We inspect the Magna electronic AWD coupling on all-wheel-drive Tucsons, replace the synthetic differential oil, and repair electric hydraulic pump pressure seals to eliminate rear-axle binding noises.',
      },
    ],
    seo: {
      title: 'Hyundai Specialist Repair & Service Center Islamabad | HyperTune Garage',
      description: 'Independent Hyundai specialist workshop in Islamabad & Rawalpindi. Hyundai GDS diagnostics, Tucson DCT service, Sonata repairs, Elantra maintenance & Santa Fe hybrid care.',
      keywords: ['hyundai repair islamabad', 'hyundai specialist rawalpindi', 'hyundai tucson service', 'hyundai sonata maintenance', 'hyundai elantra workshop', 'hyundai gds diagnostic'],
    },
  },
  {
    id: 'kia-specialist',
    slug: 'kia-repair-islamabad',
    name: 'Kia Specialist Workshop & Maintenance Islamabad',
    tagline: 'Kia KDS Dealer Diagnostics, Sportage AWD Servicing, Sorento V6, Stinger & Carnival Care',
    logoBadge: 'Kia Master Specialist',
    heroImage: images.brandKiaService,
    overview: 'HyperTune Garage provides premium independent servicing and technical repairs for Kia vehicles across Islamabad and Rawalpindi. Utilizing the official Kia Diagnostic System (KDS) scanner, our technicians expertly maintain Sportage (Alpha, FWD, AWD), Sorento (2.4L & 3.5L V6), Grand Carnival (3.5L V6 & 2.2L Diesel), Stonic, Picanto, and EV6. From fixing Sportage AWD coupling binding to 8-speed transmission servicing, panoramic sunroof track repairs, and ceramic brake upgrades, we ensure top-tier performance.',
    modelsCovered: [
      'Kia Sportage (Alpha, FWD, AWD 2.0L Nu MPI & 1.6T)',
      'Kia Sorento (2.4L Theta-II & 3.5L Lambda-II V6 AWD)',
      'Kia Grand Carnival (3.5L V6 Petrol & 2.2L CRDi Diesel 11-Seater)',
      'Kia Stonic (1.4L MPI EX & EX+ 6-Speed Auto)',
      'Kia Picanto (1.0L MPI Manual & 4-Speed Auto)',
      'Kia EV6 & Niro EV (High-Voltage Diagnostics)',
      'Kia Stinger GT (3.3L Twin-Turbo V6 AWD)',
    ],
    diagnosticSoftware: 'Kia Diagnostic System (KDS) & Global VCI-II Diagnostic Suite',
    commonIssuesAndFixes: [
      {
        issue: 'Sportage AWD Jerk / Binding During Tight Turning',
        solution: 'Rear electro-hydraulic AWD coupling oil replacement, differential fluid flush with genuine 75W-90, and magnetic clutch calibration.',
      },
      {
        issue: 'Kia Picanto Automatic Gearbox Late Shifting & High Fuel Burn',
        solution: 'ATF fluid flush, throttle position sensor relearn, and ignition coil resistance testing.',
      },
      {
        issue: 'Carnival / Sorento 3.5L V6 High-Temperature Coolant Leak',
        solution: 'Intake manifold removal, thermostat housing seal renewal, water pump replacement, and vacuum pressure cooling flush.',
      },
      {
        issue: 'Panoramic Sunroof Rattle, Sticking & Wind Noise on Sportage',
        solution: 'Track ultrasonic clean, synthetic high-temp lubrication, guide rail alignment, and motor anti-pinch calibration.',
      },
    ],
    specializedServices: [
      'Kia KDS Diagnostic Scans, Sensor Calibration & DTC Troubleshooting',
      'Sportage & Sorento AWD Differential & 6/8-Speed Automatic Gearbox Service',
      'Lambda V6 3.5L & Theta 2.4L Engine Overhauls & Timing Chain Service',
      'Carnival 2.2L CRDi Diesel Injector Cleaning & DPF Regeneration',
      'Suspension Control Arm Bushings, Shock Absorber & 3D Wheel Alignment',
      'Ceramic Brake Pad Fitment & Rotor Skimming for Heavy Luxury SUVs',
      'Self-Healing TPU Paint Protection Film (PPF) for Sportage & Carnival',
    ],
    pricingRange: 'PKR 3,500 - PKR 150,000',
    faqs: [
      {
        question: 'Why does my Kia Sportage AWD shudder when making sharp turns in parking?',
        answer: 'This is a well-known issue with the electro-hydraulic AWD rear differential coupling. We inspect the coupling clutch pack, flush the differential gear oil with genuine OEM synthetic lubricant, and replace worn coupling units.',
      },
      {
        question: 'Do you service the Kia Grand Carnival 3.3 / 3.5 V6 and 2.2 CRDi Diesel in Islamabad?',
        answer: 'Yes. We service all generations of Kia Grand Carnival, handling diesel common-rail injectors, DPF cleaning, V6 timing chain replacements, water pumps, and multi-zone rear air conditioning lines.',
      },
      {
        question: 'Can I get my Kia serviced without voiding my routine driving peace of mind?',
        answer: 'Absolutely. We follow strict Kia factory service schedules, install genuine OEM filters and parts with verifiable numbers, and stamp maintenance logs with full computerized records.',
      },
      {
        question: 'How do you fix the steering wheel MDPS flexible coupler knocking noise on Kia Sportage?',
        answer: 'A clicking sound in the steering wheel over bumps is caused by a disintegrated Motor Driven Power Steering (MDPS) rubber star coupler. We replace it with an OEM reinforced dampener in under 90 minutes.',
      },
      {
        question: 'How often should Kia 6-speed and 8-speed automatic transmission fluid be serviced?',
        answer: 'We recommend changing ATF (SP-IV / SP-IV-RR) every 50,000 km in Pakistan to maintain silky smooth shifts and prevent torque converter lock-up clutch slippage.',
      },
      {
        question: 'Do you service Kia Sorento 3.5 V6 and hybrid powertrain models?',
        answer: 'Yes. We offer complete mechanical, electrical, and computer support for Kia Sorento 2.4L, 3.5L Lambda V6, and 1.6T Hybrid models across Islamabad and Rawalpindi.',
      },
    ],
    seo: {
      title: 'Kia Specialist Workshop & Maintenance Islamabad | HyperTune Garage',
      description: 'Certified Kia repair center in Islamabad & Rawalpindi. Kia KDS diagnostics, Sportage AWD repairs, Sorento V6 service, Grand Carnival maintenance & Stonic servicing.',
      keywords: ['kia repair islamabad', 'kia specialist rawalpindi', 'kia sportage maintenance', 'kia sorento service', 'kia carnival workshop', 'kia kds diagnostic'],
    },
  },
  {
    id: 'changan-specialist',
    slug: 'changan-repair-islamabad',
    name: 'Changan Specialist Workshop Islamabad',
    tagline: 'Changan Diagnostic System, Oshan X7 Blue Core Turbo, Alsvin DCT Servicing & Karvaan Fleet Care',
    logoBadge: 'Changan Master Specialist',
    heroImage: images.brandChanganService,
    overview: 'HyperTune Garage is the leading independent Changan specialist in Islamabad and Rawalpindi. Equipped with Changan OEM computerized diagnostic rigs, our technicians expertly maintain Oshan X7 (FutureSense & Comfort 1.5T), Alsvin (1.3L & 1.5L Dual-Clutch), Karvaan, and Deepal EV/EREV models. We provide specialized care for Changan’s high-output Blue Core turbocharged engines, 7-speed wet dual-clutch transmissions (DCT), ADAS sensor calibrations, and suspension setup.',
    modelsCovered: [
      'Changan Oshan X7 (1.5L Blue Core Turbo 7-Speed Wet DCT FutureSense/Comfort)',
      'Changan Alsvin (1.37L Manual, 1.5L 5-Speed Dual-Clutch DCT Lumiere)',
      'Changan Karvaan & Karvaan Plus (1.0L C10 Engine Family Van)',
      'Changan Deepal S07 & L07 (EV & EREV Intelligent SUV/Sedan)',
      'Changan M9 Commercial Pick-up Truck',
      'Changan UNI-T & UNI-K (Imported Crossover SUV Series)',
    ],
    diagnosticSoftware: 'Changan OEM Diagnostic Rig & Blue Core Engine CAN Telemetry Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Changan Alsvin 5-Speed DCT Shifting Delay & Rattle in Stop-and-Go Traffic',
        solution: 'Dual-clutch solenoid pressure calibration, transmission fluid flush with approved low-viscosity DCT fluid, and clutch position relearn.',
      },
      {
        issue: 'Oshan X7 Blue Core 1.5T Engine Spark Knock & High Summer Coolant Temps',
        solution: 'Direct-injection high-pressure fuel pump diagnostics, intake manifold decoking, high-performance synthetic 0W-20/5W-30 oil service, and coolant flush.',
      },
      {
        issue: 'Changan Oshan X7 FutureSense Radar & Camera ADAS Malfunction',
        solution: 'Laser radar alignment, front camera calibration, and steering angle sensor reset.',
      },
      {
        issue: 'Changan Karvaan Rear Leaf Spring Squeak & Differential Drone',
        solution: 'Leaf spring polyurethane bushing replacement, differential gear oil flush with 80W-90, and axle bearing inspection.',
      },
    ],
    specializedServices: [
      'Changan Factory Scanner Diagnostics & ECU Sensor Adaptations',
      'Oshan X7 & Alsvin Wet Dual-Clutch (DCT) Transmission Fluid Servicing',
      'Blue Core 1.5L Turbocharged Direct Injection Engine Maintenance',
      'Deepal EV Battery Health Evaluation & Inverter Diagnostics',
      'Suspension, Steering Rack & 3D Computer Laser Alignment',
      'Car AC High-Efficiency Gas Recharge & Compressor Overhaul',
      'Self-Healing TPU Paint Protection Film (PPF) for Oshan X7 & Deepal S07',
    ],
    pricingRange: 'PKR 3,000 - PKR 135,000',
    faqs: [
      {
        question: 'Can you service Changan Oshan X7 7-speed Wet DCT transmission in Islamabad?',
        answer: 'Yes. We specialize in the Changan Oshan X7 1.5T Blue Core with 7-speed wet dual-clutch transmission. We flush specialized wet DCT fluids, replace filters, and perform computerized clutch adaptation cycles.',
      },
      {
        question: 'Do you carry genuine spare parts and filters for Changan Alsvin and Oshan X7?',
        answer: 'Yes. We stock genuine Changan OEM engine oil filters, air filters, cabin microfilters, spark plugs, brake pads, and suspension components directly sourced from authorized supply channels.',
      },
      {
        question: 'Can you work on the new Changan Deepal S07 and L07 electric models?',
        answer: 'Yes. Our high-voltage EV specialists service Changan Deepal electric SUVs and sedans, testing traction battery status, electric drive axle fluids, and electronic braking recuperation.',
      },
      {
        question: 'How do you diagnose Blue Core turbocharger boost pressure and intercooler leaks?',
        answer: 'We run digital boost pressure smoke tests across the charge air intake tract, test electronic wastegate solenoids, and inspect intercooler rubber couplers for boost leaks on Alsvin and Oshan models.',
      },
      {
        question: 'Can you calibrate Changan ADAS radar and 360-degree camera systems?',
        answer: 'Yes. If your 360-degree cameras are misaligned or the forward collision radar shows error alerts after a bumper repair, our computerized calibration targets re-align all optical sensors.',
      },
      {
        question: 'How often should the wet dual-clutch transmission fluid be changed on an Oshan X7?',
        answer: 'We recommend changing the wet DCT oil every 40,000 km to prevent clutch debris from contaminating the sensitive mechatronic hydraulic valve body in summer stop-and-go driving.',
      },
    ],
    seo: {
      title: 'Changan Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Premier Changan workshop in Islamabad & Rawalpindi. Changan OEM diagnostics, Oshan X7 Blue Core turbo service, Alsvin DCT transmission repairs & Karvaan maintenance.',
      keywords: ['changan repair islamabad', 'changan specialist rawalpindi', 'oshan x7 service', 'changan alsvin dct repair', 'changan deepal s07', 'changan workshop police foundation'],
    },
  },
  {
    id: 'haval-specialist',
    slug: 'haval-service-islamabad',
    name: 'Haval & Great Wall Motors Specialist Islamabad',
    tagline: 'GWM Factory Diagnostics, H6 1.5T / 2.0T / HEV Hybrid Care & Jolion Dual-Clutch Servicing',
    logoBadge: 'Haval Master Specialist',
    heroImage: images.brandHavalService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier destination for Haval and Great Wall Motors (GWM) SUV maintenance. Equipped with official GWM Diagnostic interfaces, our technicians deliver comprehensive mechanical, electrical, and hybrid battery servicing for Haval H6 (1.5T Petrol, 2.0T AWD, and 1.5T HEV Hybrid), Haval Jolion, GWM Tank 500, and Ora 03 EV. From hybrid battery cooling fan cleaning and 7-speed wet DCT transmission servicing to Level 2 ADAS calibrations and PPF protection, we ensure optimal luxury SUV performance.',
    modelsCovered: [
      'Haval H6 (1.5L Turbo Petrol, 2.0L Turbo AWD 7-Speed DCT)',
      'Haval H6 HEV (1.5L Turbo Hybrid Dedicated Hybrid Transmission DHT)',
      'Haval Jolion (1.5L Turbo Petrol & Jolion HEV Hybrid)',
      'GWM Tank 500 (3.0L Twin-Turbo V6 HEV Luxury Off-Roader)',
      'GWM Ora 03 / Good Cat (100% Electric EV)',
      'GWM Poer Pick-up Truck (2.0L Diesel / Petrol 4x4)',
    ],
    diagnosticSoftware: 'GWM / Haval Factory Diagnostic Rig & DHT Hybrid Telemetry Scanner',
    commonIssuesAndFixes: [
      {
        issue: 'Haval H6 HEV Dedicated Hybrid Transmission (DHT) Hesitation & P0A80 Codes',
        solution: 'DHT motor synchronizer calibration, high-voltage battery cell voltage balancing, and hybrid coolant loop bleeding.',
      },
      {
        issue: 'Haval Jolion / H6 7-Speed Wet DCT Gear Shudder During City Traffic',
        solution: 'DCT fluid change with genuine GWM low-viscosity transmission oil, clutch pressure adaptation, and control unit software reset.',
      },
      {
        issue: 'Haval H6 Panoramic Camera 360° View & Radar Calibration Drift',
        solution: '360 camera optical target recalibration, forward radar realignment, and steering torque sensor zeroing.',
      },
      {
        issue: 'Brake Squeal & Heavy Dust on Haval H6 AWD Rotors',
        solution: 'Installation of high-performance low-dust ceramic brake pads, rotor skim lathe resurfacing, and caliper slider lubrication.',
      },
    ],
    specializedServices: [
      'Haval GWM Dealer-Level Computer Scans & Live Hybrid Telemetry',
      'H6 HEV Dedicated Hybrid Transmission (DHT) & High-Voltage Battery Service',
      '7-Speed Wet Dual-Clutch (DCT) Fluid Flush & Adaptation Relearn',
      '2.0L AWD Electronic BorgWarner Transfer Case & Differential Service',
      'High-Grade Ceramic Brake Overhauls & 3D Wheel Alignment',
      'GWM Tank 500 Heavy-Duty Off-Road Suspension & 4x4 Maintenance',
      'Full Body Self-Healing TPU Paint Protection Film (PPF) for Haval H6 & Jolion',
    ],
    pricingRange: 'PKR 4,500 - PKR 165,000',
    faqs: [
      {
        question: 'Can you service Haval H6 1.5T and 2.0T 7-speed dual-clutch gearboxes in Islamabad?',
        answer: 'Yes. We service the Great Wall Motor (GWM) 7DCT wet dual-clutch transmission used in Haval H6 and Jolion, executing fluid exchanges and clutch kiss-point adaptations with factory diagnostic software.',
      },
      {
        question: 'Do you service Haval H6 HEV and Jolion Hybrid battery systems?',
        answer: 'Yes. We diagnose and service Haval Direct Hybrid Transmission (DHT) powertrains, inspecting the high-voltage lithium battery pack, hybrid cooling circuits, and electric drive motors.',
      },
      {
        question: 'Can you calibrate Haval Level 2 autonomous driving radars and cameras?',
        answer: 'Yes. We perform precision calibration on Haval front millimeter-wave radar sensors, lane departure cameras, and blind-spot monitors using computerized optical calibration boards.',
      },
      {
        question: 'How do you troubleshoot Haval infotainment screen freezing and instrument cluster lag?',
        answer: 'We perform factory firmware updates, hard module reboots, and verify CAN-bus power grounds to eliminate infotainment reboots and instrument display glitches.',
      },
      {
        question: 'What synthetic engine oil and maintenance schedule does HyperTune use for Haval engines?',
        answer: 'We use API SP / ACEA C2/C5 0W-20 and 5W-30 fully synthetic lubricants designed for GWM direct-injection turbo engines, protecting against LSPI and turbo bearing heat coking.',
      },
      {
        question: 'Do you stock genuine GWM Haval brake pads, air filters, and cooling components?',
        answer: 'Yes. We maintain inventory of genuine OEM Haval H6 and Jolion consumables including ceramic brake pads, oil filters, spark plugs, and coolant hoses.',
      },
    ],
    seo: {
      title: 'Haval & Great Wall Motors Specialist Islamabad | HyperTune Garage',
      description: 'Certified Haval specialist workshop in Islamabad & Rawalpindi. GWM diagnostics, Haval H6 HEV hybrid care, H6 2.0T AWD service, Jolion repairs & PPF film protection.',
      keywords: ['haval repair islamabad', 'haval specialist rawalpindi', 'haval h6 hev service', 'haval jolion maintenance', 'gwm workshop islamabad', 'haval ppf islamabad'],
    },
  },
  {
    id: 'mg-specialist',
    slug: 'mg-repair-islamabad',
    name: 'MG Specialist Workshop & Electric Care Islamabad',
    tagline: 'MG VDS Factory Diagnostics, MG HS 1.5T / Trophy, MG ZS EV & MG 4 / MG 5 Servicing',
    logoBadge: 'MG Master Specialist',
    heroImage: images.brandMgService,
    overview: 'HyperTune Garage is the premier independent MG (Morris Garages) repair and maintenance facility in Islamabad and Rawalpindi. Equipped with the official MG VDS diagnostic platform, our technicians expertly maintain MG HS (1.5T Turbo, 2.0T Trophy AWD, and PHEV Plug-in Hybrid), MG ZS, MG ZS EV, MG 4 Electric, and MG 5. From dual-clutch transmission clutch pack calibration and turbo wastegate actuator adjustments to high-voltage EV battery diagnostics, we provide dealer-quality care.',
    modelsCovered: [
      'MG HS (1.5L Turbo Petrol, 2.0L Turbo Trophy AWD)',
      'MG HS PHEV (Plug-in Hybrid 10-Speed EDU Transmission)',
      'MG ZS (1.5L VTi-Tech Petrol 4-Speed Auto / CVT)',
      'MG ZS EV (100% Electric SUV High-Voltage Diagnostics)',
      'MG 4 EV & MG 5 EV (Pure Electric Hatchback / Sedan)',
      'MG GT (1.5T Fastback Sedan with 7-Speed Wet DCT)',
    ],
    diagnosticSoftware: 'MG VDS (Vehicle Diagnostic Suite) & High-Voltage EV Safety Rig',
    commonIssuesAndFixes: [
      {
        issue: 'MG HS 7-Speed DCT Gearbox Clunking & Hesitation in 1st/2nd Gear',
        solution: 'Transmission TCU software update, DCT hydraulic fluid flush with genuine low-friction oil, and dual-clutch bite-point calibration.',
      },
      {
        issue: 'MG HS 1.5T Turbo Boost Drop & Check Engine Light (P0299)',
        solution: 'Electronic turbo wastegate solenoid diagnosis, intercooler boost hose smoke leak test, and direct injector cleaning.',
      },
      {
        issue: 'MG ZS EV / HS PHEV High-Voltage Battery Isolation Warning',
        solution: 'High-voltage safety disconnect, inverter cooling fluid flush with non-conductive coolant, and individual cell state-of-health test.',
      },
      {
        issue: 'Electronic Power Steering Stiffening & Lane Assist Calibration Warning',
        solution: 'Steering torque angle sensor calibration, ADAS front windscreen camera alignment, and 3D wheel laser alignment.',
      },
    ],
    specializedServices: [
      'MG VDS Dealer-Level Computer Scans & Live Sensor Telemetry',
      'MG HS 7-Speed Dual-Clutch (DCT) Fluid Service & Clutch Adaptation',
      'MG ZS EV & MG 4 Electric Battery State-of-Health Diagnostic Scans',
      'MG HS PHEV Plug-in Hybrid Inverter & 10-Speed EDU Transmission Service',
      'Ceramic Brake Pad Upgrades, Disc Skimming & ABS Actuator Bleeding',
      'Suspension Strut & Control Arm Bushing Overhaul for Heavy EV/SUV Weights',
      'Self-Healing TPU Paint Protection Film (PPF) for MG HS & MG GT',
    ],
    pricingRange: 'PKR 4,000 - PKR 160,000',
    faqs: [
      {
        question: 'How do you fix DCT transmission lag and jerky acceleration on MG HS in Islamabad?',
        answer: 'MG HS 1.5T dry dual-clutch hesitation is resolved by updating the Transmission Control Module (TCM) firmware, adjusting clutch clearance values, and flushing clutch actuator fluid to eliminate gear hunting.',
      },
      {
        question: 'Can you service MG ZS EV and MG4 electric vehicle high-voltage batteries?',
        answer: 'Yes. Our high-voltage EV technicians perform cell balancing, battery health percentage reports, insulation resistance checks, and electric drive reduction gearbox oil changes on MG EVs.',
      },
      {
        question: 'Why does the MG HS 1.5T engine run hot in summer and how do you resolve it?',
        answer: 'The MG HS turbo generates immense under-hood heat. Overheating is typically linked to air pockets in the dual cooling circuit or delayed radiator fan speeds. We vacuum-bleed the coolant and recalibrate fan trigger thresholds.',
      },
      {
        question: 'How do you repair MG electric tailgate actuator and panoramic sunroof squeaks?',
        answer: 'We service panoramic sunroof sliding tracks using specialized dry Teflon lubricant and replace failing electric tailgate spindle struts to restore smooth motorized opening and closing.',
      },
      {
        question: 'Do you use official MG VDS computer diagnostic software?',
        answer: 'Yes. We utilize official MG Vehicle Diagnostic Software (VDS) to read proprietary fault codes, perform adaptation resets, and program electronic modules across all MG HS, ZS, and GT models.',
      },
      {
        question: 'Can you supply genuine MG OEM spark plugs, ignition coils, and brake pads?',
        answer: 'Yes. We stock genuine SAIC MG factory parts, including laser iridium spark plugs, high-output ignition coils, and low-dust ceramic brake pads.',
      },
    ],
    seo: {
      title: 'MG Specialist Workshop & Electric Care Islamabad | HyperTune Garage',
      description: 'Top MG workshop in Islamabad & Rawalpindi. Official MG VDS diagnostics, MG HS turbo care, MG ZS EV electric maintenance, DCT transmission calibration & PPF film.',
      keywords: ['mg repair islamabad', 'mg specialist rawalpindi', 'mg hs service', 'mg zs ev maintenance', 'mg gt repair', 'mg vds diagnostic'],
    },
  },
  {
    id: 'byd-specialist',
    slug: 'byd-ev-service-islamabad',
    name: 'BYD EV & Hybrid Specialist Workshop Islamabad',
    tagline: 'BYD VDS3.0 Diagnostics, Blade Battery SOH Scans, Atto 3, Seal, Sealion & Song Plus Care',
    logoBadge: 'BYD Master Specialist',
    heroImage: images.brandBydService,
    overview: 'HyperTune Garage is Pakistan’s leading high-voltage electric and hybrid engineering workshop for BYD (Build Your Dreams) vehicles in Islamabad and Rawalpindi. Equipped with the official BYD VDS3.0 diagnostic suite, high-voltage insulation testers, and master electrical engineers, we service BYD Atto 3, BYD Seal, BYD Sealion 6, BYD Dolphin, and BYD Song Plus DM-i. From Blade Battery State-of-Health (SOH) evaluations and Cell-to-Body (CTB) chassis inspections to DM-i dual-mode hybrid engine overhauls, high-voltage cooling flushes, and ceramic detailing, we deliver certified EV care.',
    modelsCovered: [
      'BYD Atto 3 (e-Platform 3.0 Blade Battery Crossover)',
      'BYD Seal (CTB Technology Performance Sedan 530HP Dual Motor AWD)',
      'BYD Sealion 6 & Song Plus (DM-i Super Hybrid Crossover)',
      'BYD Dolphin & Seagull (Compact Urban EV Series)',
      'BYD Han EV & Tang EV (Flagship Luxury Sedan & SUV)',
      'BYD Shark PHEV Pick-up Truck (DMO Super Hybrid Off-Roader)',
    ],
    diagnosticSoftware: 'BYD VDS3.0 EV Diagnostic Suite, Blade Battery Cell Load Analyzer & High-Voltage Insulation Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Blade Battery Pack Range Drop & SOH Calibration Drift',
        solution: 'VDS3.0 high-voltage cell telemetry logging, thermal management cycle balancing, and BMS software adaptation.',
      },
      {
        issue: 'BYD DM-i Super Hybrid Engine High-RPM Drone & Coolant Warning',
        solution: 'Direct cooling water pump diagnosis, non-conductive EV coolant flush, and Atkinson-cycle 1.5L Xiaoyun engine tune-up.',
      },
      {
        issue: 'DiPilot ADAS Radar & 360-Degree Camera Misalignment',
        solution: 'Optical target calibration for millimeter-wave radar and surround-view camera stitching correction.',
      },
      {
        issue: 'Regenerative Brake Squeal & Hydraulic Brake Actuator Noise',
        solution: 'Brake-by-wire electronic booster calibration, ceramic low-metal brake pad renewal, and high-temp slider lube.',
      },
    ],
    specializedServices: [
      'BYD VDS3.0 Full-System Computer Scans & BMS Firmware Configuration',
      'Blade Battery Cell State-of-Health (SOH) & Insulation Resistance Testing',
      'DM-i / DM-p Super Hybrid Powertrain Servicing & High-Voltage Inverter Check',
      'Thermal Management Heat Pump System & Low-Conductivity Coolant Flush',
      'Electronic Suspension, Subframe Bushings & 3D Laser Wheel Alignment',
      'CAD Computer Pre-Cut Self-Healing TPU Paint Protection Film (PPF) for BYD Seal & Atto 3',
    ],
    pricingRange: 'PKR 4,500 - PKR 175,000',
    faqs: [
      {
        question: 'Can HyperTune Garage service BYD Atto 3, Seal, and Dolphin in Islamabad & Rawalpindi?',
        answer: 'Yes! We are equipped to service BYD electric vehicles, providing full diagnostic scans, high-voltage battery health verification, air conditioning heat pump servicing, and chassis maintenance.',
      },
      {
        question: 'How do you inspect and balance BYD Blade Battery cell health?',
        answer: 'We connect our specialized EV diagnostic interfaces to read individual lithium iron phosphate (LFP) cell voltages, state of health (SOH), internal resistance, and module temperature sensors to verify battery life.',
      },
      {
        question: 'Can you service BYD electric vehicle high-voltage coolant and gear reduction oil?',
        answer: 'Yes. BYD thermal management systems require specialized low-conductivity dielectric coolant and synthetic reduction gear oil, which we replace following strict factory bleed procedures.',
      },
      {
        question: 'How do you diagnose high-voltage insulation warnings and charging port errors?',
        answer: 'We utilize 1,000V megohmmeter insulation testers to verify high-voltage cable shielding, inspect DC fast-charging contactors, and replace damaged GB/T or CCS2 charging port pins.',
      },
      {
        question: 'Can you calibrate BYD DiPilot radar, ultrasonic sensors, and emergency braking?',
        answer: 'Yes. We perform radar alignment and camera calibration for BYD DiPilot driver assistance systems to ensure autonomous emergency braking and adaptive cruise operate accurately.',
      },
      {
        question: 'Do you install self-healing Paint Protection Film (PPF) on BYD electric vehicles?',
        answer: 'Yes. We offer pre-cut computerized TPU PPF kits for BYD Atto 3, Seal, and Dolphin, protecting their sleek aerodynamic bumpers, hoods, and door panels from highway stone chips.',
      },
    ],
    seo: {
      title: 'BYD EV & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Pakistan’s top BYD EV & Hybrid workshop in Islamabad & Rawalpindi. BYD VDS3.0 diagnostics, Blade Battery SOH scans, BYD Seal, Atto 3, Sealion & Song Plus DM-i care.',
      keywords: ['byd repair islamabad', 'byd specialist rawalpindi', 'byd seal service', 'byd atto 3 maintenance', 'blade battery repair', 'byd ev workshop islamabad'],
    },
  },
  {
    id: 'chery-specialist',
    slug: 'chery-repair-islamabad',
    name: 'Chery Specialist Workshop & Turbo Care Islamabad',
    tagline: 'Chery ACTECO Diagnostics, Tiggo 4 Pro, Tiggo 8 Pro 1.6T / PHEV & Omoda 5 Servicing',
    logoBadge: 'Chery Master Specialist',
    heroImage: images.brandCheryService,
    overview: 'HyperTune Garage provides expert independent maintenance and diagnostic services for Chery and Omoda vehicles in Islamabad and Rawalpindi. Equipped with official Chery Diagnostic test rigs, our certified mechanics specialize in Tiggo 4 Pro (1.5L Turbo CVT), Tiggo 8 Pro (1.6L TGDI 7-Speed DCT & 2.0T AWD), Tiggo 8 Pro e+ PHEV, and Omoda 5. From ACTECO TGDI engine carbon cleaning to dual-clutch transmission adaptations and suspension overhauls, we keep your luxury crossover running at peak efficiency.',
    modelsCovered: [
      'Chery Tiggo 8 Pro (1.6L TGDI Direct Injection 7-Speed Wet DCT 7-Seater)',
      'Chery Tiggo 8 Pro Max (2.0L TGDI AWD 250HP Flagship)',
      'Chery Tiggo 8 Pro e+ (Plug-in Hybrid DHT Powertrain)',
      'Chery Tiggo 4 Pro (1.5L Turbo CVT Compact SUV)',
      'Chery Omoda 5 / Omoda E5 (1.5T Turbo & 100% Electric Crossover)',
      'Chery Arrizo 6 Pro & Arrizo 8 Luxury Sedans',
    ],
    diagnosticSoftware: 'Chery ACTECO Factory Diagnostic Rig & Dedicated Hybrid DHT Telemetry Suite',
    commonIssuesAndFixes: [
      {
        issue: 'Tiggo 8 Pro 7-Speed Wet DCT Gear Hunting & Hesitation at Red Lights',
        solution: 'TCU software adaptation, wet dual-clutch solenoid pressure test, and synthetic DCT transmission fluid replacement.',
      },
      {
        issue: '1.6L / 2.0L TGDI ACTECO Engine Carbon Crust on Intake Valves',
        solution: 'Walnut shell blasting intake de-coking, high-pressure direct fuel injector flow testing, and OEM iridium spark plugs.',
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
      'Chery Factory Computer Scans & ACTECO Engine Sensor Diagnostics',
      'Tiggo 8 Pro 7-Speed Wet DCT & Tiggo 4 Pro CVT Fluid Service',
      'ACTECO Direct Injection Turbo Engine Maintenance & Walnut De-coking',
      'Tiggo 8 Pro e+ PHEV Dedicated Hybrid Transmission (DHT) Servicing',
      'Brake Lathe Disc Skimming, Ceramic Pads & 3D Wheel Alignment',
      'Car AC Climate Control Compressor Overhaul & Antibacterial Sterilization',
      'Self-Healing TPU Paint Protection Film (PPF) for Tiggo 8 Pro & Omoda 5',
    ],
    pricingRange: 'PKR 3,500 - PKR 150,000',
    faqs: [
      {
        question: 'Can you service Chery Tiggo 4 Pro and Tiggo 8 Pro in Islamabad?',
        answer: 'Yes. We provide complete maintenance and repair for Chery Tiggo 4 Pro and Tiggo 8 Pro, including 1.5T, 1.6T, and 2.0T TGDI engine diagnostics, dual-clutch transmission flushes, and suspension work.',
      },
      {
        question: 'How do you maintain the 1.6T and 2.0T TGDI engines on Chery Tiggo models?',
        answer: 'We utilize API SP full synthetic oils to prevent turbo coking and timing chain wear, inspect intercooler charge piping, and ultrasonically clean high-pressure direct injectors.',
      },
      {
        question: 'How often should the 7-speed wet dual-clutch transmission fluid be changed on Chery?',
        answer: 'We recommend replacing the wet DCT transmission fluid and internal filter element every 40,000 km to guarantee smooth shifting and prevent clutch shudder.',
      },
      {
        question: 'Can you diagnose Chery electronic parking brake and auto-hold glitches?',
        answer: 'Yes. We test electronic parking brake (EPB) actuator caliper motors, inspect wheel speed sensors, and calibrate auto-hold engagement thresholds using computer diagnostics.',
      },
      {
        question: 'Do you stock OEM oil filters and genuine lubricants for Chery vehicles?',
        answer: 'Yes. We maintain genuine Chery OEM replacement filters, spark plugs, ceramic brake pads, and approved synthetic lubricants at our Islamabad workshop.',
      },
      {
        question: 'Can you service Chery Tiggo dual-zone automatic climate control systems?',
        answer: 'Yes. We service Tiggo HVAC systems, repairing digital blend door actuators, leak-testing condensers, and refilling pure R134a refrigerant gas.',
      },
    ],
    seo: {
      title: 'Chery Specialist Workshop & Turbo Care Islamabad | HyperTune Garage',
      description: 'Independent Chery specialist in Islamabad & Rawalpindi. Chery ACTECO diagnostics, Tiggo 8 Pro 1.6T DCT service, Tiggo 4 Pro CVT repairs & Omoda 5 maintenance.',
      keywords: ['chery repair islamabad', 'chery specialist rawalpindi', 'tiggo 8 pro service', 'tiggo 4 pro maintenance', 'omoda 5 repair', 'chery workshop police foundation'],
    },
  },
  {
    id: 'isuzu-specialist',
    slug: 'isuzu-dmax-repair-islamabad',
    name: 'Isuzu D-Max & Commercial 4x4 Specialist Islamabad',
    tagline: 'Isuzu G-IDSS Factory Diagnostics, D-Max 3.0L / 1.9L Ddi BluePower, V-Cross & NPR Fleet Care',
    logoBadge: 'Isuzu Master Specialist',
    heroImage: images.brandIsuzuService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent diesel and 4x4 workshop for Isuzu vehicles. Utilizing the official Isuzu G-IDSS (Global Isuzu Diagnostic Service System), our master diesel mechanics specialize in Isuzu D-Max (V-Cross 3.0L 4JJ1/4JJ3, Hi-Spark 2.5L, and 1.9L Ddi BluePower), Isuzu MU-X, and Isuzu N-Series/NPR commercial fleets. We excel in 4JJ1/4JJ3 common rail diesel servicing, turbocharger rebuilding, heavy-duty 4x4 transmission servicing, leaf spring suspension upgrades, and PPF armor.',
    modelsCovered: [
      'Isuzu D-Max V-Cross (3.0L 4JJ1-TCX & 4JJ3-TCX 4x4 AT/MT)',
      'Isuzu D-Max Hi-Lander & Hi-Spark (2.5L 4JK1-TC & 1.9L RZ4E-TC BluePower)',
      'Isuzu MU-X 7-Seater 4x4 SUV',
      'Isuzu N-Series / NPR / NQR Commercial Trucks (4HG1, 4HK1 Diesel Engines)',
      'Isuzu Trooper & Bighorn 4x4 (Classic Series)',
    ],
    diagnosticSoftware: 'Isuzu G-IDSS (Global Isuzu Diagnostic Service System), Tech 2 & Diesel Common Rail Flow Bench',
    commonIssuesAndFixes: [
      {
        issue: '4JJ1 / 4JJ3 Engine Black Smoke & Loss of Boost on Highway Climb',
        solution: 'Variable geometry turbocharger (VGT) vane cleaning, electronic actuator calibration, and common rail diesel injector flow matching.',
      },
      {
        issue: 'D-Max 4x4 Electronic Shift-on-the-Fly Selector Flashing',
        solution: 'Transfer case shift actuator solenoid testing, wiring harness repair, and front differential vacuum actuator service.',
      },
      {
        issue: 'Heavy Leaf Spring Rattle & Rough Ride on Rawalpindi-Islamabad Terrain',
        solution: 'Upgraded polyurethane shackle bushing installation, greaseable shackle pins, and heavy-duty shock absorber replacement.',
      },
      {
        issue: 'Aisin 6-Speed Automatic Transmission Shudder Under Heavy Load',
        solution: 'Transmission fluid flush with genuine Isuzu ATF-WS, valve body solenoid clean, and transmission pan filter renewal.',
      },
    ],
    specializedServices: [
      'Isuzu G-IDSS Dealer-Level Computer Scans & Injector Flow Coding',
      '4JJ1 / 4JJ3 / RZ4E Turbo Diesel Master Engine Overhauls to 0.001mm Tolerance',
      'Common Rail Injector & High-Pressure Fuel Pump Calibration on High-Pressure Bench',
      'Aisin Automatic & 6-Speed Manual 4x4 Transmission & Transfer Case Service',
      'Heavy-Duty Off-Road Suspension, Leaf Springs & 3D Wheel Alignment',
      'Brake Master Cylinder & Heavy Commercial Brake Drum / Disc Overhauls',
      'Heavy-Duty Self-Healing TPU Paint Protection Film (PPF) for Isuzu D-Max V-Cross',
    ],
    pricingRange: 'PKR 4,000 - PKR 220,000',
    faqs: [
      {
        question: 'Can you service Isuzu D-Max 3.0L and 1.9L BluePower turbo diesel engines in Islamabad?',
        answer: 'Yes. We are experts in Isuzu 4JJ1, 4JJ3 3.0L, and RZ4E 1.9L D-Max diesel engines, handling common-rail injection pumps, turbochargers, and heavy-duty valve train servicing.',
      },
      {
        question: 'How do you clean and regenerate choked Isuzu D-Max DPF filters and EGR valves?',
        answer: 'We perform chemical on-car and off-car DPF cleaning to dissolve soot and ash without damaging platinum washcoats, clean carbon-choked EGR coolers, and run forced computer regenerations.',
      },
      {
        question: 'How do you service Isuzu 4x4 Terrain Command shift-on-the-fly transfer cases?',
        answer: 'We service electronic 4WD shift actuators, rebuild transfer case planetary gears, replace output shaft seals, and refill with genuine high-viscosity synthetic gear lubricants.',
      },
      {
        question: 'How often should diesel fuel filters and water separators be replaced on D-Max?',
        answer: 'Given diesel fuel quality in Pakistan, fuel filters and sediment water separators should be drained every 5,000 km and replaced every 15,000 to 20,000 km to protect high-pressure fuel injectors.',
      },
      {
        question: 'Can you overhaul Isuzu heavy-duty leaf spring and independent front suspensions?',
        answer: 'Yes. We replace worn leaf spring bushings, greaseable shackles, front control arm ball joints, and install upgraded heavy-duty shock absorbers (Old Man Emu, Ironman 4x4, Bilstein).',
      },
      {
        question: 'What engine oil spec is required for Isuzu common-rail diesel engines in Pakistan?',
        answer: 'We use premium API CK-4 / CJ-4 15W-40 and 5W-40 heavy-duty synthetic diesel motor oils formulated to control soot dispersion, resist thermal oxidation, and protect camshaft lobes.',
      },
    ],
    seo: {
      title: 'Isuzu D-Max & Commercial 4x4 Specialist Islamabad | HyperTune Garage',
      description: 'Expert Isuzu workshop in Islamabad & Rawalpindi. Isuzu G-IDSS diagnostics, D-Max V-Cross 3.0L turbo diesel repair, 4JJ1/4JJ3 engine rebuilds & 4x4 transmission servicing.',
      keywords: ['isuzu repair islamabad', 'isuzu dmax specialist rawalpindi', 'isuzu g-idss diagnostic', 'isuzu 4jj1 engine overhaul', 'isuzu dmax v-cross maintenance', 'isuzu workshop police foundation'],
    },
  },
  {
    id: 'faw-specialist',
    slug: 'faw-repair-islamabad',
    name: 'FAW Specialist Repair & Fleet Maintenance Islamabad',
    tagline: 'FAW Diagnostic System, V2 1.3L VCT-i, Carrier, X-PV & Commercial Truck Care',
    logoBadge: 'FAW Master Specialist',
    heroImage: images.brandFawService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s dedicated specialist workshop for FAW passenger vehicles and light commercial fleets. Equipped with FAW computerized diagnostic scanners and experienced automotive technicians, we expertly service FAW V2 (1.3L VCT-i), FAW X-PV, FAW Carrier, and FAW J5P/J6 heavy commercial trucks. We provide affordable, durable solutions for engine rebuilds, gearbox overhauls, cooling system upgrades, and suspension repairs.',
    modelsCovered: [
      'FAW V2 (1.3L 16-Valve VCT-i Petrol Hatchback)',
      'FAW X-PV & X-PV Dual AC (1.0L Family Van)',
      'FAW Carrier 1.0L Mini Pick-up Truck',
      'FAW Sirius S80 (1.5L 7-Seater MPV)',
      'FAW J5P / J6 Heavy Prime Movers & Dump Trucks',
    ],
    diagnosticSoftware: 'FAW Factory Diagnostic Scanner & OBD-II High-Speed Multiplexer',
    commonIssuesAndFixes: [
      {
        issue: 'FAW V2 Engine Idle Hunting, RPM Fluctuations & Low Mileage',
        solution: 'Throttle body carbon clean, idle air control (IAC) valve testing, oxygen sensor diagnostic, and spark plug replacement.',
      },
      {
        issue: 'FAW X-PV / Carrier Overheating in Summer Traffic',
        solution: 'Radiator ultrasonic descaling, high-flow water pump replacement, electric cooling fan relay testing, and coolant flush.',
      },
      {
        issue: 'Gear Grinding & Hard Shifting into 1st / Reverse on FAW V2',
        solution: 'Clutch release bearing replacement, clutch pressure plate renewal, and transmission gear oil upgrade.',
      },
      {
        issue: 'Front Suspension Squeaks & Steering Wobble on Islamabad Highway',
        solution: 'Control arm bushing renewal, tie rod end replacement, and 3D computer laser wheel alignment.',
      },
    ],
    specializedServices: [
      'FAW Computer Diagnostic Health Scans & Sensor Reset',
      'FAW V2 1.3L VCT-i Engine Overhauls & Servicing',
      'Manual Transmission Gearbox Rebuilding & Clutch Pack Replacement',
      'Heavy-Duty Cooling System Radiator Flush & High-Temp Coolant Upgrade',
      'Suspension, Steering Rack & Bushing Refresh',
      'Car AC Repair & High-Performance Gas Recharge',
      'Commercial Fleet Periodic Preventive Maintenance Packages',
    ],
    pricingRange: 'PKR 2,500 - PKR 65,000',
    faqs: [
      {
        question: 'Can you service FAW V2 1.3L engines and manual transmissions in Islamabad?',
        answer: 'Yes. We provide comprehensive mechanical and electrical servicing for FAW V2 hatchbacks, including 1.3L 4-cylinder engine tuning, clutch plate replacement, and gearbox overhauls.',
      },
      {
        question: 'How do you fix FAW Carrier and X-PV commercial van overheating in summer?',
        answer: 'Summer overheating in under-seat engines is resolved by flushing mineral scale from the cooling system, replacing jammed thermostats, installing high-flow aluminum radiators, and checking electric fan relays.',
      },
      {
        question: 'Where do you source genuine FAW spare parts and suspension components?',
        answer: 'We maintain direct access to genuine FAW OEM spare parts, including suspension tie rods, ball joints, brake rotors, brake master cylinders, and engine mountings.',
      },
      {
        question: 'How do you troubleshoot FAW electronic fuel injection and throttle body idling?',
        answer: 'We clean motorized electronic throttle bodies, test manifold absolute pressure (MAP) sensors, and calibrate idle air control steps to ensure stable 800 RPM idling.',
      },
      {
        question: 'Can you repair FAW air conditioning compressor leaks and weak cooling?',
        answer: 'Yes. We test AC compressor suction and discharge pressures, replace failing front and rear evaporator cooling coils, and recharge with pure R134a refrigerant gas.',
      },
      {
        question: 'What maintenance schedule does HyperTune recommend for FAW vehicles?',
        answer: 'We recommend oil and filter changes every 5,000 km, gear oil and brake fluid inspections every 20,000 km, and periodic suspension greasing every 10,000 km.',
      },
    ],
    seo: {
      title: 'FAW Specialist Repair & Fleet Maintenance Islamabad | HyperTune Garage',
      description: 'Reliable FAW workshop in Islamabad & Rawalpindi. FAW V2 1.3L repairs, X-PV cooling overhauls, Carrier fleet servicing & manual transmission rebuilds.',
      keywords: ['faw repair islamabad', 'faw v2 specialist rawalpindi', 'faw xpv service', 'faw carrier maintenance', 'faw workshop police foundation'],
    },
  },
  {
    id: 'daihatsu-specialist',
    slug: 'daihatsu-service-islamabad',
    name: 'Daihatsu Japanese Kei Car Specialist Islamabad',
    tagline: 'Daihatsu DS-II Diagnostics, Mira, Move, Cast, Hijet, Coure & Terios 4x4 Care',
    logoBadge: 'Daihatsu Master Specialist',
    heroImage: images.brandDaihatsuService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s trusted specialist for all Daihatsu Japanese imported kei cars and PKDM classics. Equipped with the official Daihatsu DS-II / DST-i scanner interface, our mechanics expertly service Mira (ES & Custom), Move (Custom Turbo), Cast, Tanto, Hijet, Coure, and Terios 4x4. From solving Eco-Idle start-stop battery glitches and CVT transmission whining to KF-VE/KF-DET engine rebuilds and suspension overhauls, we keep your Japanese mini car purring.',
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
    diagnosticSoftware: 'Daihatsu DS-II, DST-i Diagnostic Tool & Global OBD-II JDM CAN Multiplexer',
    commonIssuesAndFixes: [
      {
        issue: 'Eco-Idle Flashing Orange & Stop-Start System Inoperative (Mira / Move)',
        solution: 'Eco-Idle secondary battery conductance test, current sensor recalibration, and specialized EFB battery replacement.',
      },
      {
        issue: 'CVT Transmission Drone, Whining & Hesitation on Incline',
        solution: 'CVT fluid flush with genuine Daihatsu Amix CVT Fluid-DC, pan magnet de-sludging, fine strainer replacement, and calibration.',
      },
      {
        issue: 'KF-VE / KF-DET 660cc Engine Oil Burning & Rattle on Acceleration',
        solution: 'Piston ring de-gumming, valve stem seal replacement, PCV valve renewal, and synthetic 0W-20/5W-30 oil upgrade.',
      },
      {
        issue: 'Suspension Knocking & Strut Mount Squeaks on Rawalpindi Roads',
        solution: 'Front strut mount replacement, lower arm bush renewal, stabilizer bar link replacement, and laser wheel alignment.',
      },
    ],
    specializedServices: [
      'Daihatsu DS-II Scanner Full-System Diagnostics & Eco-Idle Calibration',
      'KF-VE & KF-DET 660cc 3-Cylinder Engine Overhauls & Timing Chain Service',
      'Daihatsu Amix CVT Fluid Servicing & Transmission Adaptation Reset',
      'Japanese Imported Car AC Overhaul & Sub-5°C Vent Cooling Refresh',
      'Suspension, Steering Rack & Polyurethane Bushing Overhaul',
      'Ceramic Brake Pads, Disc Lathe Skimming & ABS Calibrations',
      '9H Ceramic Coating & Paint Protection Film (PPF) for Daihatsu Rocky & Mira',
    ],
    pricingRange: 'PKR 2,500 - PKR 75,000',
    faqs: [
      {
        question: 'Can you service Japanese imported Daihatsu Mira, Move, Cast, and Taft in Islamabad?',
        answer: 'Yes. We service all imported Japanese 660cc Daihatsu models, handling KF-VE naturally aspirated and KF-DET turbocharged engines, Eco-Idle circuits, and CVTs.',
      },
      {
        question: 'How do you diagnose and repair Daihatsu KF engine oil consumption?',
        answer: 'Daihatsu 660cc engines develop stuck piston oil control rings when operated with mineral oils. We chemically decarbonize piston rings, replace valve stem oil seals, and use 0W-20 API SP synthetic oils.',
      },
      {
        question: 'How often should CVT transmission fluid be replaced on Daihatsu 660cc cars?',
        answer: 'Due to small CVT sump capacity (under 3 liters) and high engine RPMs, Daihatsu CVT fluid should be replaced every 25,000 to 30,000 km with genuine Daihatsu Amix CVT Fluid-DC.',
      },
      {
        question: 'Can you calibrate Daihatsu Smart Assist stereo camera emergency braking systems?',
        answer: 'Yes. If your windshield was replaced or camera error warnings illuminate on the dashboard, we calibrate the Smart Assist forward camera optical alignment targets.',
      },
      {
        question: 'How do you repair Daihatsu front lower control arm and engine mount vibrations?',
        answer: 'Heavy idle vibration is caused by collapsed hydraulic right-hand engine mounts. We replace collapsed mounts and press in high-durability polyurethane control arm bushings.',
      },
      {
        question: 'Do you stock genuine Daihatsu spark plugs, air filters, and brake shoes?',
        answer: 'Yes. We stock genuine Daihatsu Japan filters, specialized NGK bi-hex iridium spark plugs, and low-wear Japanese brake friction materials.',
      },
    ],
    seo: {
      title: 'Daihatsu Japanese Kei Car Specialist Islamabad | HyperTune Garage',
      description: 'Specialized Daihatsu workshop in Islamabad & Rawalpindi. Daihatsu DS-II diagnostics, Mira Eco-Idle fix, Move Turbo repairs, CVT fluid flush & Hijet maintenance.',
      keywords: ['daihatsu repair islamabad', 'daihatsu specialist rawalpindi', 'mira eco idle fix', 'daihatsu move turbo maintenance', 'daihatsu cvt service', 'daihatsu workshop police foundation'],
    },
  },
  {
    id: 'nissan-specialist',
    slug: 'nissan-repair-islamabad',
    name: 'Nissan Specialist Workshop & Xtronic CVT Care Islamabad',
    tagline: 'Nissan Consult-III Plus Diagnostics, Xtronic CVT Overhaul, Note e-Power, X-Trail, Juke & Patrol V8',
    logoBadge: 'Nissan Master Specialist',
    heroImage: images.brandNissanService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent Nissan specialist workshop. Equipped with the official Nissan Consult-III Plus diagnostic platform, our technicians expertly service Nissan Note e-Power (Hybrid Series), X-Trail (T31/T32/T33 Hybrid), Dayz/Roox, Juke (1.6T Turbo), Sunny, Kicks, Navara, and Patrol Y62 V8. We specialize in solving Nissan Xtronic CVT transmission judders, e-Power generator inverter calibrations, VK56 V8 engine rebuilds, and direct injection carbon cleaning.',
    modelsCovered: [
      'Nissan Note e-Power (HE12 / E13 1.2L Range-Extender Series Hybrid)',
      'Nissan X-Trail (T31, T32, T33 e-Power Hybrid & 2.0L/2.5L AWD)',
      'Nissan Dayz & Roox (660cc BR06 / 3B20 Engine JDM Kei Car)',
      'Nissan Juke (1.5L HR15DE & 1.6L MR16DDT Turbo DIG-T)',
      'Nissan Sunny & Latio (1.3L, 1.5L & 1.6L Sedans)',
      'Nissan Patrol (Y61 TB48 & Y62 VK56VD 5.6L V8 Luxury 4x4)',
      'Nissan Navara & NP300 (2.3L / 2.5L YD25 Turbo Diesel 4x4)',
      'Nissan GT-R R35 (VR38DETT Master Performance Care & GR6 Gearbox)',
    ],
    diagnosticSoftware: 'Nissan Consult-III Plus, VI2 Interface & e-Power High-Voltage Inverter Analyzer',
    commonIssuesAndFixes: [
      {
        issue: 'Nissan Xtronic CVT Judder, RPM Slipping & Overheating in Hot Weather',
        solution: 'CVT fluid flush using Genuine Nissan NS-2 / NS-3 fluid, transmission oil cooler upgrade, stepper motor calibration, and TCM deterioration count reset.',
      },
      {
        issue: 'Nissan Note e-Power Inverter Warning & Power Generator Drop',
        solution: 'Inverter cooling circuit vacuum bleeding, generator phase test, 12V auxiliary battery calibration, and high-voltage module check.',
      },
      {
        issue: 'MR16DDT / HR15DE Engine Carbon Clog on Valves & Cold Misfire',
        solution: 'Walnut shell intake valve blasting, direct fuel injector flow matching, and OEM iridium spark plug renewal.',
      },
      {
        issue: 'Patrol Y62 V8 Hydraulic Body Motion Control (HBMC) Sway Warning',
        solution: 'HBMC hydraulic accumulator pressure recharging, nitrogen shock check, and 3D laser wheel alignment.',
      },
    ],
    specializedServices: [
      'Nissan Consult-III Plus Dealer Diagnostics & Live Telemetry Logging',
      'Nissan Xtronic CVT Transmission Overhaul, Valve Body Repair & NS-3 Fluid Service',
      'Nissan Note e-Power & X-Trail e-Power Series Hybrid System Maintenance',
      'Patrol Y62 VK56 5.6L V8 Engine Servicing & Timing Chain Overhauls',
      'Electronic Power Steering, Suspension Bushings & 3D Wheel Alignment',
      'Ceramic Brake Pad Upgrades, Rotor Skimming & ABS Calibrations',
      'Self-Healing TPU Paint Protection Film (PPF) for Nissan Patrol & Note e-Power',
    ],
    pricingRange: 'PKR 3,500 - PKR 250,000',
    faqs: [
      {
        question: 'How do you prevent and repair Nissan X-Trail, Juke, and Note CVT transmission shudder?',
        answer: 'Nissan Xtronic CVTs suffer from stepper motor and flow control valve sticking caused by degraded fluid. We replace internal paper and pan filters, flush genuine Nissan NS-3 fluid, and clear CVT degradation data.',
      },
      {
        question: 'Do you service Nissan Note e-Power series hybrid generators and inverters in Islamabad?',
        answer: 'Yes. We service Nissan e-Power systems, diagnosing the HR12DE range-extender generator engine, testing high-voltage inverter coolant pumps, and evaluating the lithium battery pack.',
      },
      {
        question: 'Do you use official Nissan Consult III+ computer diagnostic software?',
        answer: 'Yes. We use authentic Nissan Consult III+ diagnostic software with VI2 interfaces to program keys, read BCM fault codes, calibrate CVT clutches, and adjust idle timing.',
      },
      {
        question: 'How often should genuine Nissan NS-2 / NS-3 CVT fluid be changed in Pakistan?',
        answer: 'In Pakistan’s 40°C+ summer weather, Nissan CVT fluid must be changed every 35,000 to 40,000 km to prevent belt slippage, overheating limp mode, and metal pulley scouring.',
      },
      {
        question: 'Can you service Nissan Patrol Y61 and Y62 V8 4x4 drivetrains and hydraulic suspension?',
        answer: 'Yes. We specialize in Nissan Patrol VK56VD 5.6L V8 maintenance, hydraulic Body Motion Control (HBMC) pressure balancing, and heavy-duty 4WD transfer case rebuilding.',
      },
      {
        question: 'How do you resolve Nissan electronic throttle actuator and mass airflow sensor faults?',
        answer: 'We clean throttle valve plates, run automated Idle Air Volume Learn (IAVL) routines via Consult III+, and test mass airflow sensor voltage response to eliminate erratic idling.',
      },
    ],
    seo: {
      title: 'Nissan Specialist Workshop & Xtronic CVT Care Islamabad | HyperTune Garage',
      description: 'Premier Nissan workshop in Islamabad & Rawalpindi. Nissan Consult-III Plus diagnostics, Note e-Power hybrid care, Xtronic CVT repairs, X-Trail & Patrol V8 maintenance.',
      keywords: ['nissan repair islamabad', 'nissan specialist rawalpindi', 'nissan cvt repair', 'nissan note epower service', 'nissan patrol v8 workshop', 'nissan consult-iii plus'],
    },
  },
  {
    id: 'mitsubishi-specialist',
    slug: 'mitsubishi-repair-islamabad',
    name: 'Mitsubishi 4x4 & JDM Specialist Islamabad',
    tagline: 'MUT-III SE Diagnostics, Pajero V6 / Turbo Diesel, Outlander PHEV, Lancer & Ek Wagon Care',
    logoBadge: 'Mitsubishi Master Specialist',
    heroImage: images.brandMitsubishiService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent Mitsubishi workshop. Equipped with the official Mitsubishi MUT-III SE diagnostic scanner, our technicians expertly maintain Pajero (3.0L/3.5L/3.8L V6 & 3.2L 4M41 Di-D), Outlander PHEV (Plug-in Hybrid), Lancer (1.3L/1.6L & Evolution), Mirage, Ek Wagon/Ek Custom, and Triton/L200. From Super Select 4WD-II actuator repairs and Outlander high-voltage hybrid diagnostics to GDI intake valve cleaning, we provide dealer-quality engineering.',
    modelsCovered: [
      'Mitsubishi Pajero (V60, V70, V80, V90 - 3.0L, 3.5L, 3.8L V6 & 3.2L Di-D Diesel)',
      'Mitsubishi Outlander & Outlander PHEV (Plug-in Hybrid Twin-Motor 4WD)',
      'Mitsubishi Lancer & Lancer Evolution (CS3, CY4, Evo 7/8/9/10 4B11T)',
      'Mitsubishi Ek Wagon, Ek Custom & Ek Space (660cc 3B20 / BR06 Engine)',
      'Mitsubishi Mirage & Attrage (1.0L & 1.2L 3A92 Engine CVT)',
      'Mitsubishi Triton / L200 (2.4L MIVEC 4N15 Turbo Diesel 4x4)',
      'Mitsubishi Galant & Eclipse Cross (1.5T MIVEC Turbo)',
    ],
    diagnosticSoftware: 'Mitsubishi MUT-III SE Diagnostic Suite, VCI Interface & PHEV High-Voltage Bench',
    commonIssuesAndFixes: [
      {
        issue: 'Pajero Super Select 4WD-II Center Diff Lock Indicator Flashing',
        solution: 'Vacuum actuator switch replacement, 4WD transfer case solenoid harness repair, and front axle freewheel actuator service.',
      },
      {
        issue: 'Outlander PHEV "EV System Service Required" Warning',
        solution: 'MUT-III high-voltage battery cell voltage capacity scan, generator inverter cooling flush, and BMU software reset.',
      },
      {
        issue: '3.2L 4M41 Di-D Turbo Diesel Black Smoke & Hard Cold Starting',
        solution: 'Common rail injector ultrasonic cleaning, glow plug circuit overhaul, and high-pressure fuel suction control valve (SCV) renewal.',
      },
      {
        issue: 'Ek Wagon / Mirage CVT Acceleration Shudder & Drone',
        solution: 'Transmission fluid flush with genuine Mitsubishi DiaQueen CVT Fluid J4, pan magnet cleaning, and primary pressure relearn.',
      },
    ],
    specializedServices: [
      'Mitsubishi MUT-III SE Full-System Computer Scans & Sensor Calibrations',
      'Pajero Super Select 4WD-II Transfer Case, Differential & Transmission Overhauls',
      'Outlander PHEV High-Voltage Battery Balancing & Drive Motor Inverter Care',
      '4M41 / 4N15 Diesel & 6G72 / 6G74 / 6G75 V6 Master Engine Rebuilding',
      'Suspension Shocks, Heavy-Duty Control Arms & 3D Wheel Laser Alignment',
      'Brake Master Cylinder, Ceramic Brake Pads & ABS System Bleeding',
      'Self-Healing TPU Paint Protection Film (PPF) for Mitsubishi Pajero & Outlander',
    ],
    pricingRange: 'PKR 3,500 - PKR 220,000',
    faqs: [
      {
        question: 'Can you service Mitsubishi Pajero 3.2 DiD diesel and 3.8 V6 gasoline engines?',
        answer: 'Yes. We provide complete overhauls and tuning for Mitsubishi Pajero 4M41 3.2L common-rail diesel and 6G75 3.8L MIVEC V6 engines, including timing chain guides and high-pressure fuel pumps.',
      },
      {
        question: 'How do you maintain Mitsubishi Super Select 4WD-II transfer cases and center differentials?',
        answer: 'We diagnose transfer case indicator flashing lights, replace vacuum actuator switches on the front differential, and flush synthetic GL-5 transfer case and differential fluids.',
      },
      {
        question: 'Do you service imported Mitsubishi Ek Wagon and Outlander PHEV hybrid systems?',
        answer: 'Yes. We service Japanese Ek Wagon 660cc CVTs as well as Outlander Plug-In Hybrid twin electric motors, lithium drive battery cooling loops, and regenerative brake systems.',
      },
      {
        question: 'How do you fix Mitsubishi INVECS-III CVT transmission slippage and fluid overheating?',
        answer: 'We replace clogged CVT oil cooler filters, flush genuine Mitsubishi DiaQueen CVTF-J4 fluid, and inspect torque converter lockup solenoids to restore immediate throttle response.',
      },
      {
        question: 'Can you overhaul Mitsubishi front torsion bar and multi-link coil suspensions?',
        answer: 'Yes. We replace worn upper and lower control arm ball joints, stabilizer bar links, and shock absorbers to restore smooth off-road and highway handling.',
      },
      {
        question: 'Do you source genuine Mitsubishi OEM timing belts, tensioners, and water pumps?',
        answer: 'Yes. All timing belt kits installed on Pajero and Lancer models are genuine Mitsubishi parts with hydraulic tensioners and Japanese GMB/Aisin water pumps.',
      },
    ],
    seo: {
      title: 'Mitsubishi 4x4 & JDM Specialist Islamabad | HyperTune Garage',
      description: 'Expert Mitsubishi workshop in Islamabad & Rawalpindi. MUT-III SE diagnostics, Pajero Super Select 4x4 repairs, Outlander PHEV hybrid service & Lancer maintenance.',
      keywords: ['mitsubishi repair islamabad', 'mitsubishi specialist rawalpindi', 'pajero 4x4 repair', 'outlander phev maintenance', 'mitsubishi mut-iii', 'mitsubishi workshop police foundation'],
    },
  },
  {
    id: 'mazda-specialist',
    slug: 'mazda-service-islamabad',
    name: 'Mazda SkyActiv Specialist Workshop Islamabad',
    tagline: 'Mazda IDS Diagnostics, SkyActiv-G / SkyActiv-D Engine Care, Mazda 3, Mazda 6, CX-3 & CX-5',
    logoBadge: 'Mazda Master Specialist',
    heroImage: images.brandMazdaService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist workshop for Mazda SkyActiv vehicles. Equipped with official Mazda IDS and M-MDS diagnostic interfaces, our certified technicians expertly service Mazda 3 (Axela), Mazda 6 (Atenza), CX-3, CX-5, CX-9, Demio (Mazda 2), and MX-5 Miata. From de-coking SkyActiv-G high-compression direct injection intake valves and servicing 6-speed SkyActiv-Drive automatic transmissions to i-ELOOP capacitor checks and suspension calibration, we deliver refined driving dynamics.',
    modelsCovered: [
      'Mazda 3 / Axela (1.5L, 2.0L, 2.5L SkyActiv-G & SkyActiv-X)',
      'Mazda 6 / Atenza (2.0L & 2.5L SkyActiv-G Sedan / Estate)',
      'Mazda CX-3 & CX-30 (1.5L & 2.0L SkyActiv-G Crossover)',
      'Mazda CX-5 (2.0L, 2.5L & 2.5L Turbo AWD)',
      'Mazda CX-9 (2.5L SkyActiv-G Turbo 7-Seater Luxury SUV)',
      'Mazda Demio / Mazda 2 (1.3L & 1.5L SkyActiv-G / SkyActiv-D)',
      'Mazda MX-5 Miata & RX-8 (Rotary & SkyActiv Sports Performance)',
    ],
    diagnosticSoftware: 'Mazda IDS (Integrated Diagnostic System), M-MDS & VCM-II Diagnostic Interface',
    commonIssuesAndFixes: [
      {
        issue: 'SkyActiv-G High-Compression Intake Valve Carbon Build-up & Hesitation',
        solution: 'Walnut shell media blasting of intake valves, direct-injection high-pressure injector flow testing, and OEM spark plug replacement.',
      },
      {
        issue: 'i-ELOOP Capacitor Warning & i-Stop Malfunction on Dashboard',
        solution: 'Electric double-layer capacitor health check, DC-DC converter diagnostics, and Q85 specialized EFB battery calibration.',
      },
      {
        issue: 'SkyActiv-Drive 6-Speed Automatic Transmission Harsh 2nd to 3rd Shift',
        solution: 'Transmission fluid flush with genuine Mazda FZ fluid, mechatronic solenoid adaptation, and clutch line pressure relearn.',
      },
      {
        issue: 'Front Lower Control Arm Bushing Cracking & Highway Vibration',
        solution: 'Heavy-duty hydraulic control arm bushing replacement, ball joint renewal, and 3D computer laser wheel alignment.',
      },
    ],
    specializedServices: [
      'Mazda IDS Full-System Computer Scans & PCM Firmware Calibration',
      'SkyActiv-G & SkyActiv-X Direct Injection Carbon Walnut De-coking',
      'SkyActiv-Drive 6-Speed Automatic Transmission Servicing with Genuine FZ Fluid',
      'i-Stop & i-ELOOP Regenerative Braking / Capacitor Diagnostics',
      'Suspension Refresh, Steering Rack & 3D Wheel Laser Alignment',
      'High-Performance Ceramic Brake Pads & Brake Disc Skimming',
      'Self-Healing TPU Paint Protection Film (PPF) for Mazda 3, CX-5 & Soul Red Crystal',
    ],
    pricingRange: 'PKR 3,500 - PKR 160,000',
    faqs: [
      {
        question: 'Can you service Mazda SkyActiv-G and SkyActiv-D engines in Islamabad & Rawalpindi?',
        answer: 'Yes. We service high-compression SkyActiv-G gasoline (1.5L, 2.0L, 2.5L) and SkyActiv-D twin-turbo diesel engines across Mazda 3, Mazda 6, CX-3, CX-5, and CX-9 models.',
      },
      {
        question: 'How do you clean carbon buildup from Mazda direct-injection intake valves?',
        answer: 'Because SkyActiv-G engines use high-pressure direct injection, intake valves accumulate carbon over time. We perform non-abrasive walnut shell blasting to restore airflow and throttle crispness.',
      },
      {
        question: 'Do you service Mazda 6-speed SkyActiv-Drive automatic transmissions with genuine FZ fluid?',
        answer: 'Yes. SkyActiv-Drive gearboxes require specialized ultra-low-viscosity blue Mazda ATF-FZ fluid. We perform full fluid exchanges and filter replacements to prevent shift shudder.',
      },
      {
        question: 'Can you diagnose Mazda i-Stop capacitor systems and dual-battery charging circuits?',
        answer: 'Yes. We test Mazda EFB (Enhanced Flooded Batteries) and i-ELOOP capacitor energy storage modules, resetting battery management counters after replacement.',
      },
      {
        question: 'How do you calibrate Mazda i-ActivSense radar cruise and blind-spot monitors?',
        answer: 'We utilize computerized target boards to re-align Mazda radar cruise control and front camera sensors following windshield replacement or bumper repairs.',
      },
      {
        question: 'Can you repair Mazda electric power steering motor and suspension clunks?',
        answer: 'Yes. We overhaul steering rack guide bushings and replace worn front lower control arm rear hydraulic bushings to eliminate clunking over speed bumps.',
      },
    ],
    seo: {
      title: 'Mazda SkyActiv Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Certified Mazda specialist in Islamabad & Rawalpindi. Mazda IDS diagnostics, SkyActiv-G carbon walnut blasting, CX-5 service, Mazda 3 repairs & ATF FZ fluid flush.',
      keywords: ['mazda repair islamabad', 'mazda specialist rawalpindi', 'mazda cx5 service', 'mazda 3 maintenance', 'skyactiv direct injection cleaning', 'mazda workshop police foundation'],
    },
  },
  {
    id: 'subaru-specialist',
    slug: 'subaru-boxer-repair-islamabad',
    name: 'Subaru Boxer & Symmetrical AWD Specialist Islamabad',
    tagline: 'Subaru SSM4 Diagnostics, Boxer Engine Overhaul, Lineartronic CVT & WRX STI Care',
    logoBadge: 'Subaru Master Specialist',
    heroImage: images.brandSubaruService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Subaru Boxer engines and Symmetrical All-Wheel Drive (AWD) vehicles. Utilizing official Subaru Select Monitor (SSM4) diagnostic software, our master mechanics service Subaru Forester, Outback, XV / Crosstrek, Legacy, Impreza, WRX, and WRX STI. From Boxer head gasket overhauls and Lineartronic CVT high-torque fluid servicing to turbocharger calibrations and symmetrical AWD differential maintenance, we guarantee master-level precision.',
    modelsCovered: [
      'Subaru Forester (SJ, SK - 2.0L, 2.5L FB20/FB25 & 2.0T FA20 DIT AWD)',
      'Subaru Outback & Legacy (2.5L FB25, 3.6L EZ36 Flat-6 & 2.4T FA24)',
      'Subaru XV / Crosstrek (2.0L FB20 Boxer e-Boxer Hybrid AWD)',
      'Subaru WRX & WRX STI (EJ20, EJ257, FA20F 2.0T/2.5T Turbo AWD)',
      'Subaru Impreza & Levorg (1.6T & 2.0T DIT Sport Tourer)',
      'Subaru BRZ (2.0L FA20 & 2.4L FA24 Boxer RWD Coupe)',
    ],
    diagnosticSoftware: 'Subaru Select Monitor 4 (SSM4), DST-i Interface & Symmetrical AWD Computer Telemetry',
    commonIssuesAndFixes: [
      {
        issue: 'Boxer Engine Oil Leaks from Valve Covers & Cam Carrier Gaskets',
        solution: 'Precision engine reseal using OEM multi-layer steel gaskets, three-bond sealant, and torqued to exact factory Newton-meter specifications.',
      },
      {
        issue: 'Subaru Lineartronic CVT Chain Slip & High Temperature Warning Light',
        solution: 'CVT fluid flush with genuine Subaru High-Torque CVTF-II / Lineartronic II, secondary pressure solenoid calibration, and TCM relearn.',
      },
      {
        issue: 'Symmetrical AWD Binding / Judder During Tight Low-Speed Turns',
        solution: 'Center differential electronic transfer clutch (MP-T) fluid flush, front/rear differential oil replacement with 75W-90, and solenoid test.',
      },
      {
        issue: 'EyeSight Driver Assist Camera Warning & Stereo Vision Disabled',
        solution: 'Windscreen optical calibration, forward radar alignment, and steering angle sensor zeroing.',
      },
    ],
    specializedServices: [
      'Subaru SSM4 Dealer-Level Computer Scans & EyeSight ADAS Calibration',
      'Boxer 4-Cylinder & Flat-6 Engine Master Overhauls & Head Gasket Replacement',
      'Subaru Lineartronic CVT Fluid Flush with Genuine High-Torque CVTF',
      'Symmetrical AWD Center Transfer Clutch & Front/Rear Differential Service',
      'WRX & STI Turbocharger Rebuilding, Intercooler Pipe Pressure Testing',
      'High-Performance Ceramic Brake Pad Fitment & 3D Wheel Laser Alignment',
      'Self-Healing TPU Paint Protection Film (PPF) for Subaru Forester & WRX',
    ],
    pricingRange: 'PKR 4,500 - PKR 240,000',
    faqs: [
      {
        question: 'Can you service Subaru Boxer engines (EJ20, FA20, FB20, FA24) in Islamabad?',
        answer: 'Yes. We specialize in horizontally-opposed Subaru Boxer engines, providing spark plug replacements, valve cover gasket reseals, oil separator servicing, and full internal rebuilds.',
      },
      {
        question: 'How do you resolve Subaru Boxer head gasket oil and coolant weeping?',
        answer: 'We remove the Boxer engine to install multi-layer steel (MLS) Six-Star / Cometic head gaskets, verify cylinder head flatness on our surface grinder, and replace cylinder head bolts.',
      },
      {
        question: 'How do you service Subaru Symmetrical All-Wheel Drive (AWD) and Lineartronic CVTs?',
        answer: 'We service Subaru Lineartronic CVTs with genuine Subaru High Torque CVTF, inspect viscous coupling center differentials, and replace worn rear differential carrier bearings.',
      },
      {
        question: 'Can you inspect and replace Subaru timing belts, pulleys, and water pumps?',
        answer: 'Yes. We install complete OEM Gates / Aisin timing belt component kits including hydraulic tensioners, idler pulleys, camshaft seals, and water pumps.',
      },
      {
        question: 'How do you calibrate Subaru EyeSight dual-camera driver assistance systems?',
        answer: 'We utilize official Subaru diagnostic interfaces and optical alignment charts to calibrate stereo cameras for pre-collision braking and adaptive lane keep assistance.',
      },
      {
        question: 'What oil viscosity and coolant specs are recommended for Subaru Boxer engines in Pakistan?',
        answer: 'We recommend 0W-20 or 5W-30 API SP synthetic oils with high thermal resistance and genuine Subaru Super Coolant formulated with non-amine phosphate additives.',
      },
    ],
    seo: {
      title: 'Subaru Boxer & Symmetrical AWD Specialist Islamabad | HyperTune Garage',
      description: 'Expert Subaru workshop in Islamabad & Rawalpindi. Subaru SSM4 diagnostics, Boxer engine rebuilds, Lineartronic CVT repairs, Forester & WRX STI maintenance.',
      keywords: ['subaru repair islamabad', 'subaru specialist rawalpindi', 'boxer engine overhaul', 'subaru lineartronic cvt service', 'forester maintenance', 'subaru ssm4 diagnostic'],
    },
  },
  {
    id: 'lexus-specialist',
    slug: 'lexus-hybrid-repair-islamabad',
    name: 'Lexus Luxury & Hybrid Specialist Workshop Islamabad',
    tagline: 'Lexus Techstream Diagnostics, P0A80 Hybrid Battery Balancing, LX600/LX570, RX & ES Care',
    logoBadge: 'Lexus Master Specialist',
    heroImage: images.brandLexusService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent luxury workshop for Lexus vehicles. Utilizing official Lexus Techstream diagnostics, Denso scanning rigs, and master automotive engineers, we provide white-glove servicing for Lexus LX570, LX600 (3.5TT V6), RX450h / RX350, NX300h, ES300h / ES350, GX460, and LS500 / LS600h. From high-voltage hybrid battery balancing and Active Height Control (AHC) hydraulic air suspension overhauls to Mark Levinson audio electronics and concourse detailing, we ensure unparalleled luxury.',
    modelsCovered: [
      'Lexus LX Series (LX470, LX570 5.7L V8 3UR-FE, LX600 3.5L Twin-Turbo V35A, LX500d)',
      'Lexus RX Series (RX350, RX450h Hybrid, RX500h F-Sport Performance)',
      'Lexus NX Series (NX200t, NX300h Hybrid, NX350h Turbo)',
      'Lexus ES Series (ES250, ES300h Hybrid, ES350 3.5L V6 Sedan)',
      'Lexus GX Series (GX460 4.6L V8 & New GX550 Twin-Turbo)',
      'Lexus LS Series (LS460, LS500 Twin-Turbo & LS600h V8 Hybrid Flagship)',
      'Lexus IS & RC F-Sport (IS200t, IS300, IS350, RC-F 5.0L V8)',
    ],
    diagnosticSoftware: 'Lexus Techstream Professional Diagnostic Rig, Denso VIM & High-Voltage Battery Load Bench',
    commonIssuesAndFixes: [
      {
        issue: 'Lexus RX450h / ES300h "Check Hybrid System" & P0A80 Trouble Code',
        solution: 'High-voltage individual module load impedance analysis, replacement of high-resistance cells, pack voltage balancing, and hybrid cooling blower ultrasonic clean.',
      },
      {
        issue: 'LX570 / LX470 Active Height Control (AHC) Suspension Low & Stiff Ride',
        solution: 'AHC hydraulic fluid flush with genuine Toyota/Lexus Suspension Fluid AHC, accumulator globe pressure test, height sensor calibration, and pressure step bleeding.',
      },
      {
        issue: 'LX600 / LS500 3.5L Twin-Turbo (V35A) Boost Pressure Solenoid Code',
        solution: 'Electronic wastegate actuator calibration, intercooler boost hose smoke pressure test, and direct injection fuel flow check.',
      },
      {
        issue: 'Lexus Direct Shift 8-Speed / 10-Speed Automatic Gearbox Hesitation',
        solution: 'Transmission fluid flush with Genuine Lexus ATF-WS, pan magnet de-sludging, fine filter replacement, and computer shift adaptation.',
      },
    ],
    specializedServices: [
      'Lexus Techstream Dealer Computer Health Scans & Module Personalization',
      'P0A80 Hybrid Battery Rebuilding, Cell Balancing & Inverter Servicing',
      'Lexus LX570 / LX600 AHC Hydraulic Suspension Bleeding & Height Sensor Calibration',
      '3UR-FE 5.7L V8 & V35A 3.5L Twin-Turbo Master Engine Overhauls',
      'Mark Levinson Audio Amplifier & Electronic BCM Module Troubleshooting',
      'High-Performance Ceramic Brake Pad Upgrades & Rotor Skimming',
      'Self-Healing TPU Paint Protection Film (PPF) & 9H Ceramic Coating for Lexus LX & RX',
    ],
    pricingRange: 'PKR 5,000 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Lexus RX450h, ES300h, and NX300h hybrid systems in Islamabad?',
        answer: 'Yes! We are Islamabad’s leading Lexus hybrid specialists, servicing high-voltage batteries, electric motor transaxles, inverter cooling systems, and electronic regenerative brakes.',
      },
      {
        question: 'How do you inspect and recondition Lexus high-voltage hybrid battery packs?',
        answer: 'We run module-by-module load testing via Techstream to detect weak cells, replace defective blocks with matched OEM cells, clean internal nickel busbars, and service the battery cooling fan.',
      },
      {
        question: 'Do you service Lexus LX570 / LX600 V8 and Twin-Turbo V6 engines and AHC hydraulic suspension?',
        answer: 'Yes. We service 3UR-FE 5.7L V8 and V35A-FTS 3.5L Twin-Turbo V6 engines, flush Active Height Control (AHC) suspension hydraulic fluid, and calibrate ride-height accumulators.',
      },
      {
        question: 'How do you fix Lexus Mark Levinson premium audio amplifier failure and water ingress?',
        answer: 'We diagnose and repair Mark Levinson DSP amplifier circuit boards damaged by trunk moisture or capacitor degradation, restoring surround-sound audio clarity.',
      },
      {
        question: 'Do you use official Toyota/Lexus Techstream diagnostic equipment with live data logging?',
        answer: 'Yes. We connect authentic Lexus Techstream software with Mongoose and Denso VCIs to execute live data graphing, active test actuations, and custom body electronics personalization.',
      },
      {
        question: 'Can you apply self-healing Paint Protection Film (PPF) on Lexus spindle grilles and bodywork?',
        answer: 'Yes. We offer computer CAD pre-cut TPU PPF kits for intricate Lexus spindle grilles, headlights, hoods, and door cups, safeguarding against paint chipping.',
      },
    ],
    seo: {
      title: 'Lexus Luxury & Hybrid Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Premier independent Lexus workshop in Islamabad & Rawalpindi. Lexus Techstream diagnostics, P0A80 hybrid battery repair, LX570 AHC suspension service & RX450h care.',
      keywords: ['lexus repair islamabad', 'lexus specialist rawalpindi', 'lexus lx570 maintenance', 'lexus hybrid battery repair', 'lexus ahc suspension bleeding', 'lexus workshop police foundation'],
    },
  },
  {
    id: 'land-rover-specialist',
    slug: 'land-rover-repair-islamabad',
    name: 'Land Rover Specialist Workshop Islamabad',
    tagline: 'JLR Pathfinder & SDD Diagnostics, Defender, Discovery, Air Suspension & Terrain Response Overhaul',
    logoBadge: 'Land Rover Master Specialist',
    heroImage: images.brandLandRoverService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist workshop for Land Rover vehicles. Equipped with official Jaguar Land Rover (JLR) Pathfinder and SDD diagnostic suites, our master British automotive technicians specialize in Defender (New Defender L663, Classic Td5/Puma), Discovery (3, 4, 5), and Freelander. From solving Terrain Response 4x4 faults and air suspension valve block leaks to Ingenium 2.0T/3.0T timing chain overhauls and ZF 8HP transmission fluid flushes, we deliver dealer-level mastery.',
    modelsCovered: [
      'Land Rover Defender (New L663 - P300, P400 MHEV, D250, D300, V8 5.0L Supercharged)',
      'Land Rover Defender Classic (90, 110, 130 - 300Tdi, Td5, 2.4/2.2 Puma TDCi)',
      'Land Rover Discovery 3 & 4 (2.7L TDV6, 3.0L SDV6, 4.4L/5.0L V8 Petrol)',
      'Land Rover Discovery 5 (3.0L Si6, SDV6 & 2.0L Ingenium)',
      'Land Rover Discovery Sport & Freelander 2 (2.0L Turbo & 2.2L SD4)',
    ],
    diagnosticSoftware: 'JLR Pathfinder (DoIP Interface), JLR SDD & Air Suspension Pressure Test Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Air Suspension Dropped to Bump Stops & "Suspension Fault" Alert',
        solution: 'Air compressor pressure output bench test, valve block O-ring renewal, air strut bladder nitrogen leak check, and ride height sensor calibration.',
      },
      {
        issue: 'Land Rover Ingenium 2.0T / 3.0T Timing Chain Rattle & Stretch',
        solution: 'Installation of updated OEM timing chains, guides, hydraulic tensioners, and variable camshaft timing (VCT) solenoid calibration.',
      },
      {
        issue: 'Terrain Response System Inoperative & Dynamic Stability Light On',
        solution: 'JLR Pathfinder live telemetry scan, transfer case control module (TCCM) diagnostic, rear electronic differential motor service, and wheel speed sensor renewal.',
      },
      {
        issue: 'ZF 8-Speed Automatic Gearbox Judder & Leak from Plastic Pan',
        solution: 'ZF factory fluid drain, mechatronic sleeve seal inspection, and integrated pan filter replacement followed by transmission adaptation reset.',
      },
    ],
    specializedServices: [
      'JLR Pathfinder & SDD Dealer Computer Scans & CCF Module Configuration',
      'Air Suspension Compressor Rebuilding, Valve Block & Strut Leak Repair',
      'Ingenium 2.0T / 3.0T & 3.0L TDV6 / SDV6 Timing Chain Overhauls',
      'Terrain Response 4x4 Electronic Transfer Case & Rear Diff Motor Overhauls',
      'ZF 6HP & 8HP Transmission Fluid Flush & Mechatronic Repair',
      'Heavy-Duty Off-Road Brake Upgrades, Disc Skimming & 3D Wheel Alignment',
      'Self-Healing TPU Paint Protection Film (PPF) for New Defender 90 / 110',
    ],
    pricingRange: 'PKR 6,000 - PKR 320,000',
    faqs: [
      {
        question: 'Do you have official Land Rover Pathfinder and SDD diagnostic scanners in Islamabad?',
        answer: 'Yes. We operate Land Rover Symptom Driven Diagnostics (SDD) for older models and JLR Pathfinder / Topix Cloud for newer DoIP architectures (2017+), enabling full module programming.',
      },
      {
        question: 'How do you service Land Rover Defender and Discovery Terrain Response air suspension?',
        answer: 'We test air suspension spring bellows, repair valve blocks, replace desiccants in air compressor dryers, and recalibrate corner ride-height sensors to eliminate suspension fault warnings.',
      },
      {
        question: 'How do you prevent Ingenium 2.0L diesel and petrol timing chain stretch and failure?',
        answer: 'We measure timing chain elongation using diagnostic cam-crank phase correlation and replace worn rear timing chain assemblies with upgraded OEM Land Rover guides and tensioners.',
      },
      {
        question: 'Can you service Land Rover ZF 8HP and 9HP automatic transmissions and transfer cases?',
        answer: 'Yes. We perform complete transmission fluid flushes with genuine ZF Lifeguard Fluid, install new integrated sump pan-filters, and service electronic twin-speed transfer cases.',
      },
      {
        question: 'How do you repair Land Rover active anti-roll bar hydraulic actuator leaks?',
        answer: 'We service Dynamic Response high-pressure hydraulic pumps, replace leaking front and rear roll-control actuator bars, and bleed the system with genuine Pentosin CHF 11S fluid.',
      },
      {
        question: 'Do you source genuine Land Rover OEM parts and oil filters with warranty?',
        answer: 'Yes. All parts installed at HyperTune Garage are authentic Land Rover OEM parts or Tier-1 German OEM suppliers, backed by a comprehensive warranty.',
      },
    ],
    seo: {
      title: 'Land Rover Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Independent Land Rover workshop in Islamabad & Rawalpindi. JLR Pathfinder diagnostics, Defender L663 service, Discovery air suspension repair & Ingenium timing chains.',
      keywords: ['land rover repair islamabad', 'land rover specialist rawalpindi', 'defender l663 service', 'discovery air suspension fix', 'jlr pathfinder diagnostic', 'land rover workshop police foundation'],
    },
  },
  {
    id: 'range-rover-specialist',
    slug: 'range-rover-service-islamabad',
    name: 'Range Rover Specialist Workshop Islamabad',
    tagline: 'JLR Pathfinder Diagnostics, Vogue, Sport, Velar, Evoque & Air Suspension Mastery',
    logoBadge: 'Range Rover Master Specialist',
    heroImage: images.brandRangeRoverService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s dedicated luxury destination for Range Rover repair and maintenance. Utilizing official JLR Pathfinder and SDD diagnostic suites with factory-trained master technicians, we service Range Rover Vogue (L322, L405, L460), Range Rover Sport (L320, L494, L461), Range Rover Velar, and Range Rover Evoque. From resolving Dynamic Air Suspension sagging and Supercharged V8 cooling issues to ZF 8-speed gearbox overhauls, deployable side-step motor repairs, and concourse PPF wrapping, we deliver unmatched prestige care.',
    modelsCovered: [
      'Range Rover Vogue / Autobiography (L322, L405, L460 - 3.0L D/P, 4.4L SDV8, 5.0L V8 Supercharged, 4.4L Twin-Turbo V8)',
      'Range Rover Sport (L320, L494, L461 - HSE, Dynamic, SVR 575HP 5.0L Supercharged)',
      'Range Rover Velar (P250, P380 Supercharged, D200)',
      'Range Rover Evoque (L538, L551 - 2.0L Si4 & 2.0L D180/D200)',
      'Range Rover PHEV Plug-in Hybrid (P400e, P440e, P510e)',
    ],
    diagnosticSoftware: 'JLR Pathfinder DoIP Professional Rig, JLR SDD & High-Pressure Air Suspension Test Rig',
    commonIssuesAndFixes: [
      {
        issue: 'Dynamic Air Suspension Sagging Overnight & "Vehicle Raising Slowly"',
        solution: 'Air spring bladder leak detection, central valve block solenoid service, high-output AMK air compressor overhaul, and height calibration.',
      },
      {
        issue: '5.0L Supercharged V8 Coolant Pipe Leaks under Supercharger',
        solution: 'Supercharger removal, installation of upgraded aluminum crossover coolant pipes, thermostat housing replacement, and vacuum bleeding.',
      },
      {
        issue: 'Active Roll Control (ARC) Dynamic Response Hydraulic Leak & Warning',
        solution: 'High-pressure hydraulic valve block reseal, ARC actuator inspection, and cold-climate fluid flush with Pentosin CHF 11S.',
      },
      {
        issue: 'Deployable Side Steps Jammed or Clicking Noise',
        solution: 'Motor gear ultrasonic clean, linkage hinge synthetic lubrication, and door trigger module calibration.',
      },
    ],
    specializedServices: [
      'JLR Pathfinder Full-System Computer Scans & Online Module Programming',
      'Range Rover Dynamic Air Suspension & Active Roll Control (ARC) Overhauls',
      '5.0L Supercharged V8 & 4.4L SDV8 / 3.0L TDV6 Master Engine Rebuilds',
      'ZF 8HP Automatic Transmission Fluid Flush & Mechatronic Repair',
      'Brembo Multi-Piston Ceramic Brake Overhaul & 3D Wheel Laser Alignment',
      'Range Rover P400e / P510e Plug-in Hybrid High-Voltage System Health Check',
      'Self-Healing TPU Paint Protection Film (PPF) for Range Rover Vogue & Sport SVR',
    ],
    pricingRange: 'PKR 6,500 - PKR 350,000',
    faqs: [
      {
        question: 'How do you repair Range Rover Autobiography and Sport air suspension compressor and airbag leaks?',
        answer: 'We identify microscopic air bladder leaks using ultrasonic acoustic detectors, replace failing air struts, rebuild pneumatic valve blocks, and install heavy-duty AMK compressors.',
      },
      {
        question: 'Can you service Range Rover 5.0L Supercharged V8 and 3.0L Inline-6 Mild Hybrid engines?',
        answer: 'Yes. We service AJ133 5.0L Supercharged V8s (timing chains, supercharger isolator couplers, coolant crossover pipes) and newer 3.0L Ingenium MHEV turbocharged powertrains.',
      },
      {
        question: 'Do you have official JLR Topix Cloud and Pathfinder diagnostic equipment in Islamabad?',
        answer: 'Yes. We have full factory JLR diagnostic capabilities to perform CCF (Car Configuration File) programming, key learning, and module software updates.',
      },
      {
        question: 'How do you resolve Range Rover dual touchscreen infotainment and digital cluster blackouts?',
        answer: 'We diagnose InControl Touch Pro and Pivi Pro screen blackouts, update audio head unit (AAM) software, verify optical MOST bus continuity, and resolve power ground faults.',
      },
      {
        question: 'How often should Range Rover Brembo high-performance brake pads and rotors be replaced?',
        answer: 'Due to vehicle curb weight (over 2.5 tons), 6-piston front Brembo brake pads typically require replacement every 25,000 to 35,000 km, paired with high-carbon composite rotors.',
      },
      {
        question: 'Do you provide insured valet vehicle pickup for Range Rover owners in Islamabad & DHA?',
        answer: 'Yes. We offer white-glove flatbed and insured valet vehicle pickup and delivery across Islamabad, Rawalpindi, DHA, and Bahria Town for luxury vehicle services.',
      },
    ],
    seo: {
      title: 'Range Rover Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Premier independent Range Rover workshop in Islamabad & Rawalpindi. JLR Pathfinder diagnostics, Vogue & Sport air suspension repair, 5.0L V8 coolant upgrades & PPF.',
      keywords: ['range rover repair islamabad', 'range rover specialist rawalpindi', 'range rover vogue service', 'range rover sport svr maintenance', 'air suspension repair range rover', 'jlr pathfinder islamabad'],
    },
  },
  {
    id: 'jeep-specialist',
    slug: 'jeep-repair-islamabad',
    name: 'Jeep 4x4 & American SUV Specialist Islamabad',
    tagline: 'Chrysler wiTECH 2.0 Diagnostics, Wrangler, Grand Cherokee, Hemi V8 & Quadra-Trac Servicing',
    logoBadge: 'Jeep Master Specialist',
    heroImage: images.brandJeepService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Jeep 4x4 vehicles. Equipped with the official Chrysler/Stellantis wiTECH 2.0 diagnostic system, our American SUV master technicians service Jeep Wrangler (TJ, JK, JL - 3.6L Pentastar & 2.0T), Grand Cherokee (WK, WK2, WL - 3.6L, 5.7L Hemi V8, 6.4L SRT), Gladiator, Cherokee, and Compass. From death wobble elimination and Dana 44 axle rebuilding to Quadra-Lift air suspension repairs and 8-speed automatic gearbox servicing, we guarantee heavy-duty reliability.',
    modelsCovered: [
      'Jeep Wrangler (TJ, JK, JL - 3.6L Pentastar V6, 2.0L Turbo & 392 Hemi V8 Rubicon / Sahara)',
      'Jeep Grand Cherokee (WK2, WL - 3.6L Pentastar, 5.7L Hemi V8, 6.4L SRT-8 & 6.2L Trackhawk)',
      'Jeep Gladiator (JT - 3.6L Pentastar 4x4 Pick-up Truck)',
      'Jeep Cherokee & Compass (2.4L Tigershark & 2.0T MultiAir 4x4)',
      'Jeep Renegade (1.4T & 2.4L Trailhawk)',
      'Classic Jeep CJ-5, CJ-7 & Cherokee XJ 4.0L Straight-6',
    ],
    diagnosticSoftware: 'Chrysler / Stellantis wiTECH 2.0 Diagnostic Suite & MicroPod II Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Jeep Wrangler "Death Wobble" Steering Vibration at Highway Speeds',
        solution: 'Track bar bushing replacement, drag link/tie rod end renewal, steering stabilizer upgrade, ball joint inspection, and caster angle laser alignment.',
      },
      {
        issue: 'Pentastar 3.6L V6 Oil Filter Housing Leak & Coolant Mix in Valley',
        solution: 'Replacement of brittle plastic oil cooler housing with upgraded aluminum unit, intake manifold gasket renewal, and cooling flush.',
      },
      {
        issue: 'Grand Cherokee Quadra-Lift Air Suspension Warning & Compressor Overheat',
        solution: 'Closed-loop nitrogen recharging, valve block leak test, air spring bladder renewal, and ride height sensor calibration.',
      },
      {
        issue: 'Quadra-Trac II / Quadra-Drive II 4x4 Transfer Case Shudder',
        solution: 'Transfer case fluid flush with Mopar NV245 / NV247 lubricant, progressive coupler test, and front/rear differential oil replacement with friction modifier.',
      },
    ],
    specializedServices: [
      'Chrysler wiTECH 2.0 Dealer Diagnostic Scans & Module Flashing',
      'Death Wobble Elimination & Heavy-Duty Steering / Suspension Overhauls',
      'Pentastar 3.6L V6 & 5.7L Hemi V8 Master Engine Rebuilding & Oil Cooler Upgrades',
      'Dana 30, Dana 44 & Dana 60 Axle Regearing, Locker & Bearing Overhauls',
      'TorqueFlite 8-Speed (8HP70 / 850RE) Transmission Fluid Servicing',
      'Quadra-Lift Air Suspension Nitrogen Bleeding & Compressor Overhauls',
      'Heavy-Duty Self-Healing TPU Paint Protection Film (PPF) for Jeep Wrangler Rubicon',
    ],
    pricingRange: 'PKR 4,500 - PKR 250,000',
    faqs: [
      {
        question: 'Can you service Jeep Wrangler, Grand Cherokee, and Gladiator 4x4 systems in Islamabad?',
        answer: 'Yes. We provide complete maintenance and upgrades for Jeep Wrangler JL/JK, Grand Cherokee WK2/WL, and Gladiator models, including engines, transmissions, and heavy-duty axles.',
      },
      {
        question: 'How do you diagnose and fix Jeep Grand Cherokee air suspension (Quadra-Lift) sagging?',
        answer: 'Quadra-Lift uses a closed-loop pressurized nitrogen system. We leak-test air bags, service valve manifolds, and recharge the system with pure 99.9% nitrogen to 14 bar factory pressure.',
      },
      {
        question: 'How do you resolve the infamous Jeep Wrangler front solid axle death wobble vibration?',
        answer: 'We inspect track bar mounting bracket ovalization, replace worn drag links and tie rod ends, check steering box play, and install heavy-duty Fox steering stabilizers.',
      },
      {
        question: 'How do you service 3.6L Pentastar V6 rocker arm ticking and oil cooler housing leaks?',
        answer: 'Ticking on Pentastar engines is caused by collapsed roller rocker needle bearings. We replace rocker arms and camshafts before lobes wipe out, and install upgraded aluminum oil filter housings.',
      },
      {
        question: 'Can you rebuild Jeep Dana 44 heavy-duty differentials and electronic locker solenoids?',
        answer: 'Yes. We set ring-and-pinion gear backlash, install replacement Timken carrier bearings, service Tru-Lok electronic locker solenoids, and refill with 75W-140 synthetic gear oil.',
      },
      {
        question: 'Do you install heavy-duty suspension lift kits, off-road winches, and steel bumpers?',
        answer: 'Yes. We professionally install Rubicon Express, Fox, and Falcon suspension lift kits, heavy-duty recovery winches, high-clearance steel bumpers, and snorkel intakes.',
      },
    ],
    seo: {
      title: 'Jeep 4x4 & American SUV Specialist Islamabad | HyperTune Garage',
      description: 'Expert Jeep workshop in Islamabad & Rawalpindi. Chrysler wiTECH 2.0 diagnostics, Wrangler death wobble fix, Pentastar 3.6L oil cooler upgrades & Grand Cherokee service.',
      keywords: ['jeep repair islamabad', 'jeep specialist rawalpindi', 'jeep wrangler death wobble fix', 'jeep grand cherokee maintenance', 'chrysler witech diagnostic', 'jeep workshop police foundation'],
    },
  },
  {
    id: 'ford-specialist',
    slug: 'ford-service-islamabad',
    name: 'Ford Specialist Workshop Islamabad',
    tagline: 'Ford FDRS / IDS Diagnostics, F-150 Raptor, Ranger, Everest, Mustang & EcoBoost Care',
    logoBadge: 'Ford Master Specialist',
    heroImage: images.brandFordService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist workshop for Ford vehicles. Utilizing official Ford FDRS (Ford Diagnostic & Repair System) and IDS platforms, our technicians service Ford F-150 / F-150 Raptor, Ranger (T6 / T7 / T8 / Raptor 2.0L Bi-Turbo & 3.0L V6), Everest (Endeavour), Mustang (2.3L EcoBoost & 5.0L Coyote V8), Explorer, and EcoSport. From solving EcoBoost direct injection carbon issues and 10-speed (10R80) automatic transmission hesitations to Fox Racing suspension overhauls, we deliver heavy-duty American performance.',
    modelsCovered: [
      'Ford F-150 & F-150 Raptor (3.5L High-Output EcoBoost TT & 5.2L Supercharged V8 Raptor R)',
      'Ford Ranger & Ranger Raptor (2.2L TDCi, 3.2L 5-Cylinder, 2.0L Bi-Turbo & 3.0L V6 TT)',
      'Ford Everest / Endeavour (2.0L Bi-Turbo & 3.2L 4x4 7-Seater SUV)',
      'Ford Mustang (2.3L EcoBoost Turbo & 5.0L Coyote V8 GT / Mach 1)',
      'Ford Explorer (2.3L EcoBoost & 3.5L/3.0L Twin-Turbo AWD)',
      'Ford Taurus, Fusion & Edge Crossover Sedans',
    ],
    diagnosticSoftware: 'Ford FDRS (Ford Diagnostic & Repair System), Ford IDS & VCM-3 Diagnostic Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Ford 10-Speed Automatic (10R80) Harsh 3rd-to-4th Shift & Gear Hunting',
        solution: 'Transmission solenoid strategy update via FDRS, fluid flush with genuine Motorcraft Mercon ULV, and adaptive learning table reset.',
      },
      {
        issue: 'EcoBoost 2.3L / 3.5L Engine Intake Valve Carbon Clog & Boost Surge',
        solution: 'Walnut shell blasting intake de-coking, direct injector flow testing, electronic blow-off valve inspection, and iridium spark plugs.',
      },
      {
        issue: 'Ranger Raptor / F-150 Fox Live Valve Suspension Warning',
        solution: 'Suspension position sensor calibration, electronic damper solenoid diagnosis, and nitrogen recharge.',
      },
      {
        issue: 'Ford 2.0L Bi-Turbo Diesel Camshaft Belt-in-Oil Degradation',
        solution: 'Wet timing belt inspection, oil pump strainer cleaning, updated OEM belt replacement, and Motorcraft approved low-SAPS oil service.',
      },
    ],
    specializedServices: [
      'Ford FDRS & IDS Dealer Computer Scans & PCM Calibration',
      'EcoBoost 2.3L, 2.7L, 3.5L & Coyote 5.0L V8 Master Engine Rebuilding',
      '10-Speed (10R80) & 6-Speed (6R80) Automatic Transmission Servicing with Mercon ULV',
      'Ranger Raptor Fox Racing Live Valve Suspension Inspection & Alignment',
      'Electronic 4x4 Transfer Case & Differential Fluid Servicing',
      'Brembo High-Performance Brake Overhaul & 3D Wheel Laser Alignment',
      'Self-Healing TPU Paint Protection Film (PPF) for Ford Mustang & Ranger Raptor',
    ],
    pricingRange: 'PKR 4,500 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Ford F-150 Raptor, Ranger, and Everest EcoBoost engines in Islamabad?',
        answer: 'Yes. We service 2.0L, 2.3L, 2.7L, and 3.5L Twin-Turbo EcoBoost engines, handling high-pressure fuel pumps, direct injectors, turbochargers, and cam phasers.',
      },
      {
        question: 'How do you prevent and fix Ford 10-speed (10R80) automatic transmission harsh shifting?',
        answer: '10R80 harsh downshifts are resolved by updating TCM software calibrations, flushing with genuine Ford Motorcraft Mercon ULV fluid, and clearing adaptive shift tables.',
      },
      {
        question: 'Do you have official Ford FDRS and IDS diagnostic equipment with VCM interfaces?',
        answer: 'Yes. We utilize Ford Diagnostic & Repair System (FDRS) and Integrated Diagnostic Software (IDS) with genuine VCM II/III interfaces for factory module programming and PATS key coding.',
      },
      {
        question: 'Can you service Ford EcoBoost twin-turbochargers, high-pressure fuel pumps, and direct injectors?',
        answer: 'Yes. We inspect twin-turbo wastegate play, clean carbon-fouled direct injectors, and test rail pressure sensors to ensure peak horsepower and fuel efficiency.',
      },
      {
        question: 'How do you maintain Ford Fox Racing internal bypass suspension shocks on Raptor models?',
        answer: 'We service Fox Live Valve shocks, inspecting high-pressure nitrogen charge valves, replacing oil seals, and recalibrating electronic active damping sensors.',
      },
      {
        question: 'Do you stock genuine Ford Motorcraft synthetic fluids, filters, and brake components?',
        answer: 'Yes. We import and stock authentic Ford Motorcraft engine oils, Mercon transmission fluids, genuine oil filters, and heavy-duty brake pads.',
      },
    ],
    seo: {
      title: 'Ford Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Expert Ford workshop in Islamabad & Rawalpindi. Ford FDRS diagnostics, Ranger Raptor maintenance, F-150 EcoBoost service, Mustang 5.0L V8 repairs & 10R80 transmission flush.',
      keywords: ['ford repair islamabad', 'ford specialist rawalpindi', 'ford ranger raptor service', 'ford mustang maintenance', 'ford fdrs diagnostic', 'ford workshop police foundation'],
    },
  },
  {
    id: 'chevrolet-specialist',
    slug: 'chevrolet-repair-islamabad',
    name: 'Chevrolet & GM Specialist Workshop Islamabad',
    tagline: 'GM GDS2 Diagnostics, Tahoe, Suburban, Silverado, Corvette, Camaro & Joy / Optra Care',
    logoBadge: 'Chevrolet Master Specialist',
    heroImage: images.brandChevroletService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Chevrolet and General Motors (GM) vehicles. Equipped with the official GM GDS2 and Tech2 diagnostic platforms, our American vehicle technicians expertly service Tahoe, Suburban, Silverado, Corvette (C7 & C8), Camaro (SS & ZL1), Captiva, Optra, and classic Joy/Exclusive models. From Small Block V8 (5.3L, 6.2L LT1/LT4) lifter repairs and Active Fuel Management (AFM) calibration to Magnetic Ride Control calibrations and heavy-duty transmission overhauls, we ensure peak performance.',
    modelsCovered: [
      'Chevrolet Tahoe & Suburban (5.3L & 6.2L EcoTec3 V8 Luxury SUV)',
      'Chevrolet Silverado & Colorado (5.3L, 6.2L V8 & 2.8L Duramax Diesel 4x4)',
      'Chevrolet Corvette (C7 LT1/LT4 & C8 Mid-Engine LT2 6.2L V8 / Z06)',
      'Chevrolet Camaro (2.0L Turbo, 3.6L V6, 6.2L V8 SS & 6.2L Supercharged ZL1)',
      'Chevrolet Captiva & Trailblazer (1.5T Turbo & 2.8L Diesel SUV)',
      'Chevrolet Optra, Cruze & Aveo (1.6L & 1.8L E-TEC II / Ecotec)',
      'Chevrolet Joy / Exclusive (800cc & 1.0L Classic PKDM)',
    ],
    diagnosticSoftware: 'GM Global Diagnostic System 2 (GDS2), MDI-2 Interface & GM Tech2 Scanner',
    commonIssuesAndFixes: [
      {
        issue: '5.3L / 6.2L EcoTec3 V8 Active Fuel Management (AFM/DFM) Lifter Tick & Misfire',
        solution: 'AFM lifter inspection, replacement with updated OEM lifters and guide trays, camshaft inspection, and AFM software calibration.',
      },
      {
        issue: 'GM 8-Speed / 10-Speed Transmission Shudder & Torque Converter Slip',
        solution: 'Transmission triple-flush with genuine Mobil 1 Synthetic LV ATF HP fluid, torque converter clutch slip test, and TCM adaptation.',
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
      'GM GDS2 & Tech2 Dealer Computer Diagnostic Health Scans',
      'Small Block V8 (5.3L, 6.2L LT1/LT2/LT4) Master Engine Overhauls & AFM Repairs',
      'GM 6-Speed, 8-Speed & 10-Speed Automatic Gearbox Servicing with Dexron HP/VI',
      'Magnetic Ride Control Damper Diagnostics & 3D Wheel Laser Alignment',
      'Brembo High-Performance Brake Overhaul & Rotor Lathe Skimming',
      'Car AC Climate Control Overhaul & R134a Precision Gas Recharge',
      'Self-Healing TPU Paint Protection Film (PPF) for Corvette C8, Camaro & Tahoe',
    ],
    pricingRange: 'PKR 3,500 - PKR 260,000',
    faqs: [
      {
        question: 'Can you service Chevrolet Corvette, Camaro, Tahoe, and Suburban V8 engines in Islamabad?',
        answer: 'Yes. We specialize in GM Small Block V8 powerplants (5.3L, 6.2L LT1, LT4, L86), handling complete mechanical maintenance, cooling systems, and drivelines.',
      },
      {
        question: 'How do you diagnose and repair GM Active Fuel Management (AFM / DFM) lifter failure?',
        answer: 'Misfires and lifter ticking on GM V8s are caused by collapsed AFM/DFM displacement-on-demand lifters. We replace collapsed lifters, install upgraded VLOM oil manifolds, or perform full mechanical AFM deletes.',
      },
      {
        question: 'Do you have official GM GDS2 and Tech2 computer diagnostic software?',
        answer: 'Yes. We utilize GM Global Diagnostic System 2 (GDS2) and Tech2 scanners with MDI interfaces to scan all engine, body, suspension, and transmission modules.',
      },
      {
        question: 'Can you service GM 6-speed, 8-speed, and 10-speed automatic transmissions?',
        answer: 'Yes. We resolve 8L90 torque converter shudder by executing full Mobil 1 Synthetic LV ATF HP fluid exchanges and servicing 10L80 10-speed gearboxes.',
      },
      {
        question: 'How do you repair Chevrolet Magnetic Ride Control (MagneRide) active shock absorbers?',
        answer: 'We inspect magnetorheological fluid shock absorbers for leaks, verify electronic damper coil resistance, and calibrate ride-height trim values.',
      },
      {
        question: 'Can you source genuine ACDelco and GM Genuine replacement parts in Pakistan?',
        answer: 'Yes. We strictly install authentic ACDelco Gold/GM Genuine filters, spark plugs, sensors, brake pads, and suspension parts backed by warranty.',
      },
    ],
    seo: {
      title: 'Chevrolet & GM Specialist Workshop Islamabad | HyperTune Garage',
      description: 'Expert Chevrolet workshop in Islamabad & Rawalpindi. GM GDS2 diagnostics, Tahoe & Suburban service, Corvette C8 maintenance, Camaro repairs & V8 AFM lifter fix.',
      keywords: ['chevrolet repair islamabad', 'chevrolet specialist rawalpindi', 'chevrolet tahoe service', 'corvette c8 maintenance', 'gm gds2 diagnostic', 'chevrolet workshop police foundation'],
    },
  },
  {
    id: 'volvo-specialist',
    slug: 'volvo-repair-islamabad',
    name: 'Volvo Scandinavian Safety & Hybrid Specialist Islamabad',
    tagline: 'Volvo VIDA Diagnostics, XC90, XC60, XC40 Recharge, T8 Twin-Engine & Drive-E Care',
    logoBadge: 'Volvo Master Specialist',
    heroImage: images.brandVolvoService,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Volvo Scandinavian luxury vehicles. Equipped with the official Volvo VIDA (Vehicle Information & Diagnostics for Aftersales) platform and DiCE diagnostic interface, our European master technicians expertly service Volvo XC90 (T6, T8 Twin-Engine Recharge, D5), XC60, XC40 / XC40 Recharge EV, S90, S60, and V90. From high-voltage T8 hybrid battery diagnostics and Aisin 8-speed transmission servicing to Four-C active air suspension overhauls and IntelliSafe radar calibrations, we provide Swedish engineering excellence.',
    modelsCovered: [
      'Volvo XC90 (T6 Supercharged+Turbo, T8 Twin-Engine Recharge PHEV, D5 AWD 7-Seater)',
      'Volvo XC60 (T5, T6, T8 Recharge Luxury Crossover)',
      'Volvo XC40 & XC40 Recharge (T4, T5 & 100% Pure Electric EV)',
      'Volvo S90 & S60 (T5, T6 & T8 Recharge Luxury Sedans)',
      'Volvo V90 & V60 Cross Country (All-Road Luxury Wagons)',
      'Volvo C40 Recharge (100% Electric Compact Crossover)',
    ],
    diagnosticSoftware: 'Volvo VIDA (Vehicle Information & Diagnostics for Aftersales) & DiCE / VOE DoIP Interface',
    commonIssuesAndFixes: [
      {
        issue: 'Volvo XC90 / XC60 T8 Twin-Engine Hybrid Battery "Hybrid System Service Required"',
        solution: 'VIDA high-voltage battery cell telemetry scan, ERAD (Electric Rear Axle Drive) motor inspection, and hybrid cooling circuit flush.',
      },
      {
        issue: 'Drive-E 2.0L Twin-Charged (Supercharger + Turbo) Boost Loss & Magnetic Clutch Noise',
        solution: 'Roots supercharger magnetic clutch gap adjustment, bypass valve testing, and intake smoke pressure leak test.',
      },
      {
        issue: 'Four-C Active Air Suspension Dropping Overnight on XC90',
        solution: 'Air compressor pressure output test, front/rear air spring bladder leak check, valve block reseal, and height calibration via VIDA.',
      },
      {
        issue: 'Aisin 8-Speed Automatic Gearbox Hesitation & Harsh Downshift',
        solution: 'Transmission fluid flush with genuine Volvo AW-1 fluid, linear solenoid adaptation, and neutral control calibration.',
      },
    ],
    specializedServices: [
      'Volvo VIDA Dealer-Level Computer Scans & Online Software Reloads',
      'XC90 & XC60 T8 Twin-Engine Recharge Plug-in Hybrid & ERAD Motor Servicing',
      'Drive-E 2.0L Twin-Charged (Supercharger + Turbo) Master Engine Rebuilding',
      'Four-C Active Air Suspension Compressor Overhaul & Height Calibration',
      'Aisin 8-Speed Automatic Transmission Fluid Flush with Genuine AW-1 Fluid',
      'IntelliSafe ADAS City Safety Radar & Windscreen Camera Calibration',
      'Self-Healing TPU Paint Protection Film (PPF) for Volvo XC90 & XC60',
    ],
    pricingRange: 'PKR 6,000 - PKR 320,000',
    faqs: [
      {
        question: 'Do you have official Volvo VIDA diagnostic software and DiCE interfaces in Islamabad?',
        answer: 'Yes. We operate authentic Volvo VIDA (Vehicle Information & Diagnostics for Aftersales) with DiCE hardware, enabling factory fault isolation and software module downloads.',
      },
      {
        question: 'Can you service Volvo Drive-E 2.0L Turbo and Twin-Engine T8 Plug-in Hybrid powertrains?',
        answer: 'Yes. We service turbocharged and supercharged Drive-E engines as well as T8 Recharge plug-in hybrids, inspecting rear electric drive axles (ERAD) and high-voltage hybrid batteries.',
      },
      {
        question: 'How do you diagnose Volvo XC90 and XC60 air suspension compressor and valve block faults?',
        answer: 'We test air compressor duty cycle and pneumatic valve block seals using VIDA diagnostics, replacing leaky air bellows and recalibrating chassis ride height.',
      },
      {
        question: 'Can you calibrate Volvo City Safety radar, IntelliSafe cameras, and emergency collision braking?',
        answer: 'Yes. We perform precision camera and radar target alignment for Volvo City Safety and Pilot Assist semi-autonomous driving systems.',
      },
      {
        question: 'How often should Volvo Aisin 8-speed automatic transmission fluid be serviced?',
        answer: 'We recommend flushing Volvo Aisin 8-speed (AWF8F45) transmissions every 50,000 km with genuine Volvo ATF fluid to preserve shift quality and prevent valve body stickiness.',
      },
      {
        question: 'Do you source genuine Volvo OEM brake pads, pollen filters, and hybrid cooling pumps?',
        answer: 'Yes. We import authentic Volvo OEM service kits, high-filtration CleanZone cabin pollen filters, ceramic brake pads, and electric cooling pumps.',
      },
    ],
    seo: {
      title: 'Volvo Scandinavian Safety & Hybrid Specialist Islamabad | HyperTune Garage',
      description: 'Premier independent Volvo workshop in Islamabad & Rawalpindi. Volvo VIDA diagnostics, XC90 & XC60 T8 hybrid service, Drive-E engine repairs & Four-C air suspension care.',
      keywords: ['volvo repair islamabad', 'volvo specialist rawalpindi', 'volvo xc90 service', 'volvo xc60 maintenance', 'volvo t8 hybrid repair', 'volvo vida diagnostic islamabad'],
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
    'kia': 'kia-service-islamabad',
    'changan': 'changan-service-islamabad',
    'haval': 'haval-service-islamabad',
    'mg': 'mg-service-islamabad',
    'byd': 'byd-ev-service-islamabad',
    'chery': 'chery-service-islamabad',
    'isuzu': 'isuzu-dmax-service-islamabad',
    'faw': 'faw-service-islamabad',
    'daihatsu': 'daihatsu-repair-islamabad',
    'nissan': 'nissan-repair-islamabad',
    'mitsubishi': 'mitsubishi-repair-islamabad',
    'mazda': 'mazda-repair-islamabad',
    'subaru': 'subaru-boxer-service-islamabad',
    'lexus': 'lexus-hybrid-service-islamabad',
    'land-rover': 'land-rover-service-islamabad',
    'range-rover': 'range-rover-service-islamabad',
    'jeep': 'jeep-grand-cherokee-service-islamabad',
    'ford': 'ford-service-islamabad',
    'chevrolet': 'chevrolet-service-islamabad',
    'volvo': 'volvo-repair-islamabad',
  };

  const targetSlug = aliasMap[cleanSlug];
  if (targetSlug) {
    return brandsData.find((b) => b.slug === targetSlug);
  }

  // Partial match fallback
  return brandsData.find((b) => b.slug.includes(cleanSlug) || cleanSlug.includes(b.slug));
}

