import { BrandItem } from '../types';
import { images } from './images';

export const brandsData: BrandItem[] = [
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
        answer: 'Yes! We only use 100% genuine Toyota Indus / Japan OEM replacement parts, Toyota Genuine Motor Oil (0W-20, 5W-30, 15W-40), Super Long Life Coolant, and authentic Toyota CVT/ATF transmission fluids.',
      },
      {
        question: 'How do you fix P0A80 Hybrid Battery errors on Prius and Aqua?',
        answer: 'We test each module under artificial load on our high-voltage bench to isolate degraded cells, replace them with matched high-capacity cells, balance the pack voltage, and clean the cooling fan.',
      },
      {
        question: 'Can you service Toyota Fortuner Sigma 4 and Land Cruiser LC300 in Islamabad?',
        answer: 'Yes, our heavy-duty hydraulic lifts and master diesel diagnostic technicians handle all Fortuner Legender, Revo Rocco, Prado, and Land Cruiser LC300 service and suspension maintenance.',
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
    heroImage: images.galleryBmwBrakes,
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
        answer: 'Yes! We specialize in Honda i-DCD dual-clutch actuator repairs, master/slave cylinder rebuilding, DOT 4 hydraulic clutch bleeding, and computer-guided clutch adaptation.',
      },
      {
        question: 'Why does my Honda Civic 1.5 Turbo hesitate during boost?',
        answer: 'Direct injection engines accumulate carbon crust on the intake valves over time. Our walnut shell blasting cleans the valves back to factory metal, restoring instant throttle response.',
      },
      {
        question: 'Do you use genuine Honda HCF-2 transmission fluid for CVTs?',
        answer: 'Always. We only use 100% genuine Honda OEM fluids including HCF-2 for CVTs, DW-1 for ATFs, and genuine Honda Type-2 All Season Coolant.',
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
    heroImage: images.galleryCayenneEngine,
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
        answer: 'Yes! Using our Suzuki SDT-II scanner, we recalibrate the AGS clutch engagement point and actuator hydraulic pump to restore buttery-smooth gear changes.',
      },
      {
        question: 'Do you service imported Japanese 660cc Suzuki Hustler and Every models?',
        answer: 'Absolutely. We carry genuine filters, spark plugs, turbo gaskets, and sensors for Japanese Suzuki models like Hustler, Spacia, Every, and Jimny.',
      },
      {
        question: 'How long does a routine Suzuki periodic maintenance oil service take?',
        answer: 'A routine 50-point maintenance service with genuine synthetic engine oil, oil filter, air filter, and brake check takes approximately 45 to 60 minutes.',
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
    heroImage: images.galleryStronicBox,
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
        question: 'Do you have official diagnostic tools for Hyundai Sonata and Tucson in Islamabad?',
        answer: 'Yes! We use the official Hyundai GDS scanner to perform deep-system scans, live sensor logging, DCT clutch adaptations, and module resets identical to authorized dealership standards.',
      },
      {
        question: 'Can you service the new Hyundai Santa Fe Hybrid in Rawalpindi / Islamabad?',
        answer: 'Yes, our high-voltage certified electrical technicians handle the Santa Fe Hybrid powertrain, electric water pumps, hybrid cooling packs, and turbocharged petrol engines.',
      },
      {
        question: 'What engine oil is recommended for Hyundai Elantra and Sonata?',
        answer: 'We use high-grade 100% fully synthetic API SP / ILSAC GF-6 oils (0W-20 or 5W-30) matching Hyundai factory engineering specifications.',
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
    heroImage: images.galleryBakeBooth,
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
        answer: 'This is commonly caused by degraded rear AWD coupling fluid or differential binding. We flush the coupling with genuine OEM lubricant and recalibrate the system to eliminate binding.',
      },
      {
        question: 'Do you service the Kia Grand Carnival V6 and 2.2 Diesel in Islamabad?',
        answer: 'Yes! We regularly service both the 3.5L V6 Petrol and 2.2L CRDi Diesel Kia Grand Carnivals with specialized lifts and genuine filters.',
      },
      {
        question: 'Can I get my Kia serviced without voiding my routine driving peace of mind?',
        answer: 'Absolutely. We follow strict OEM factory procedures and provide written 12-month warranties on all mechanical workmanship.',
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
    name: 'Changan Specialist Workshop & Tuning Islamabad',
    tagline: 'Changan Diagnostic System, Oshan X7 Blue Core Turbo, Alsvin DCT Servicing & Karvaan Fleet Care',
    logoBadge: 'Changan Master Specialist',
    heroImage: images.serviceCooling,
    overview: 'HyperTune Garage is the leading independent Changan specialist in Islamabad and Rawalpindi. Equipped with Changan OEM computerized diagnostic rigs, our technicians expertly maintain Oshan X7 (FutureSense & Comfort 1.5T), Alsvin (1.3L & 1.5L Dual-Clutch), Karvaan, and Deepal EV/EREV models. We provide specialized care for Changan’s high-output Blue Core turbocharged engines, 7-speed wet dual-clutch transmissions (DCT), ADAS sensor calibrations, and suspension tuning.',
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
        answer: 'Yes! We have specialized diagnostic tools and approved DCT fluid to service Changan 7-speed wet dual-clutch transmissions and calibrate smooth clutch shifts.',
      },
      {
        question: 'Do you carry genuine spare parts and filters for Changan Alsvin and Oshan X7?',
        answer: 'Yes, we source 100% genuine Changan OEM oil filters, air filters, cabin filters, spark plugs, and brake pads.',
      },
      {
        question: 'Can you work on the new Changan Deepal S07 and L07 electric models?',
        answer: 'Yes, our EV diagnostic technicians handle high-voltage battery health scans, electrical electronics, brake regen systems, and suspension for Deepal vehicles.',
      },
    ],
    seo: {
      title: 'Changan Specialist Workshop & Tuning Islamabad | HyperTune Garage',
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
    heroImage: images.havalStudioAfter,
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
        question: 'Do you specialize in the Haval H6 HEV (Hybrid) in Islamabad?',
        answer: 'Yes! We have specialized diagnostic test equipment for Haval H6 HEV Dedicated Hybrid Transmissions (DHT), high-voltage lithium battery packs, and 1.5T hybrid engines.',
      },
      {
        question: 'Can you install Paint Protection Film (PPF) on my new Haval H6 / Jolion?',
        answer: 'Yes! We are Pakistan’s top studio for self-healing TPU PPF. Our CAD computer plotter cuts patterns with millimeter precision so no razor blades touch your Haval factory paint.',
      },
      {
        question: 'What transmission fluid does Haval H6 use?',
        answer: 'We strictly use authentic GWM factory-approved wet DCT and DHT transmission fluids matching exact viscosity and friction coefficient specifications.',
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
    heroImage: images.galleryBmwBrakes,
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
        question: 'Can you fix the sluggish shifting on MG HS dual-clutch transmission in Islamabad?',
        answer: 'Yes! We perform TCU adaptations, fluid replacements with high-grade DCT fluid, and clutch position calibrations using our MG VDS system to ensure crisp, smooth shifts.',
      },
      {
        question: 'Do you service MG ZS EV and MG 4 pure electric cars in Rawalpindi / Islamabad?',
        answer: 'Yes! We have high-voltage certified technicians equipped to perform EV health checks, inverter cooling flushes, regenerative braking repairs, and suspension overhauls.',
      },
      {
        question: 'What warranty is offered on MG repairs at HyperTune Garage?',
        answer: 'We provide a 12-month / 15,000 km written warranty on all mechanical repairs and replacement OEM parts.',
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
    heroImage: images.galleryHybridBench,
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
        question: 'Do you have diagnostic equipment for BYD Seal and BYD Atto 3 in Islamabad?',
        answer: 'Yes! We have the dedicated BYD VDS3.0 diagnostic system capable of communicating with all e-Platform 3.0 modules, Blade Battery BMS, and DiPilot safety units.',
      },
      {
        question: 'Can you install PPF on BYD Seal and Atto 3 glass-roof and bodywork?',
        answer: 'Yes, our cleanroom studio provides precision CAD pre-cut self-healing TPU PPF, protecting BYD’s high-gloss paintwork from stone chips on Islamabad motorways.',
      },
      {
        question: 'How do you test the health of BYD Blade Batteries?',
        answer: 'We run live voltage delta scans under regenerative and discharge load, verify internal cell resistance, and inspect thermal management pump efficiency.',
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
    heroImage: images.galleryCayenneEngine,
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
        question: 'Can you service Chery Tiggo 8 Pro 1.6T DCT transmission in Islamabad?',
        answer: 'Yes! We have specialized diagnostic tools to service Chery 7-speed wet dual-clutch transmissions, flush the oil, and calibrate clutch bite points for seamless shifts.',
      },
      {
        question: 'Do you carry genuine replacement filters for Chery Tiggo 4 Pro and 8 Pro?',
        answer: 'Yes, we stock 100% genuine Chery OEM oil filters, air filters, cabin filters, spark plugs, and brake components.',
      },
      {
        question: 'What motor oil should be used in Chery ACTECO Turbocharged engines?',
        answer: 'We use high-performance 100% fully synthetic 5W-30 or 0W-20 API SP oils designed specifically for direct-injection turbocharged engines to prevent Low-Speed Pre-Ignition (LSPI).',
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
    heroImage: images.galleryStronicBox,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent diesel and 4x4 workshop for Isuzu vehicles. Utilizing the official Isuzu G-IDSS (Global Isuzu Diagnostic Service System), our master diesel mechanics specialize in Isuzu D-Max (V-Cross 3.0L 4JJ1/4JJ3, Hi-Spark 2.5L, and 1.9L Ddi BluePower), Isuzu MU-X, and Isuzu N-Series/NPR commercial fleets. We excel in 4JJ1/4JJ3 common rail diesel tuning, turbocharger rebuilding, heavy-duty 4x4 transmission servicing, leaf spring suspension upgrades, and PPF armor.',
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
        question: 'Do you have official Isuzu G-IDSS software for D-Max in Islamabad?',
        answer: 'Yes! We use official Isuzu G-IDSS diagnostic hardware to read engine live telemetry, program injector codes, test turbo boost pressures, and calibrate transfer cases.',
      },
      {
        question: 'Can you rebuild the 4JJ1 and 4JJ3 3.0L Turbo Diesel engines in D-Max?',
        answer: 'Yes, our diesel machine shop handles complete 4JJ1/4JJ3 engine overhauls including cylinder sleeving, crankshaft micrometer balancing, and head gasket replacements.',
      },
      {
        question: 'What maintenance is needed for Isuzu D-Max before Northern off-road trips?',
        answer: 'We provide a comprehensive 50-point 4x4 audit: differential oils, transfer case fluid, steering knuckles, leaf spring shackles, brake inspection, and air/fuel filters.',
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
    heroImage: images.galleryBakeBooth,
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
      'FAW V2 1.3L VCT-i Engine Tuning & Overhauls',
      'Manual Transmission Gearbox Rebuilding & Clutch Pack Replacement',
      'Heavy-Duty Cooling System Radiator Flush & High-Temp Coolant Upgrade',
      'Suspension, Steering Rack & Bushing Refresh',
      'Car AC Repair & High-Performance Gas Recharge',
      'Commercial Fleet Periodic Preventive Maintenance Packages',
    ],
    pricingRange: 'PKR 2,500 - PKR 65,000',
    faqs: [
      {
        question: 'Do you carry spare parts and filters for FAW V2 in Islamabad?',
        answer: 'Yes, we stock genuine OEM and certified high-quality replacement parts including oil filters, air filters, clutch plates, sensors, and brake pads for FAW V2 and X-PV.',
      },
      {
        question: 'How do you fix overheating issues on FAW X-PV vans?',
        answer: 'We inspect the complete cooling circuit: flush and descale the radiator, replace stuck thermostats, verify electric fan speeds, and use 50/50 ethylene glycol coolant.',
      },
      {
        question: 'Can you handle fleet maintenance for FAW Carrier commercial delivery vans?',
        answer: 'Yes! We offer customized preventive maintenance schedules and priority bays for corporate and delivery fleet operators across Rawalpindi and Islamabad.',
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
    heroImage: images.serviceCooling,
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
        question: 'Why is the Eco-Idle light flashing on my Daihatsu Mira ES?',
        answer: 'An orange flashing Eco-Idle light indicates low secondary battery voltage or an uncalibrated current sensor. We test and calibrate the system with our Daihatsu DST-i scanner.',
      },
      {
        question: 'Do you carry genuine Japanese filters for Daihatsu Move and Cast?',
        answer: 'Yes! We stock genuine Daihatsu / Toyota OEM oil filters, air filters, CVT transmission fluids, and spark plugs for all JDM 660cc models.',
      },
      {
        question: 'Can you rebuild the 660cc 3-cylinder Daihatsu engine if it burns oil?',
        answer: 'Yes, our machine shop specializes in micro-tolerance rebuilding of KF-VE and KF-DET 3-cylinder engines to permanently resolve oil consumption.',
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
    heroImage: images.galleryBmwBrakes,
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
        question: 'How do you fix the shuddering on Nissan Xtronic CVT transmissions?',
        answer: 'We perform a full transmission fluid drain and flush with authentic Nissan NS-3 fluid, replace the fine paper filter and pan strainer, clean the magnets, and reset the TCM fluid deterioration counter.',
      },
      {
        question: 'Do you service Nissan Note e-Power hybrid vehicles in Islamabad?',
        answer: 'Yes! We specialize in Nissan e-Power systems including the 1.2L generator engine, EM57 traction electric motor, inverter cooling, and lithium battery management.',
      },
      {
        question: 'Can you work on Nissan Patrol Y62 V8 in Rawalpindi / Islamabad?',
        answer: 'Yes, our heavy-duty bays handle full mechanical maintenance, HBMC suspension checks, and VK56 engine overhauls for Nissan Patrol Y62 V8s.',
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
    heroImage: images.galleryCayenneEngine,
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
        question: 'Can you fix the flashing 4WD center differential light on Mitsubishi Pajero?',
        answer: 'Yes! This is a classic vacuum actuator or solenoid fault in the Super Select 4WD-II system. We test each solenoid with MUT-III diagnostics and restore flawless 4WD shifting.',
      },
      {
        question: 'Do you service Mitsubishi Outlander PHEV plug-in hybrids in Islamabad?',
        answer: 'Yes! We handle Outlander PHEV high-voltage lithium battery diagnostics, S-AWC twin-motor electric drives, and Atkinson-cycle generator engines.',
      },
      {
        question: 'What transmission fluid does Mitsubishi Ek Wagon and Mirage require?',
        answer: 'We strictly use authentic Mitsubishi DiaQueen CVT Fluid J1/J4 to prevent belt slip and ensure smooth acceleration.',
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
    heroImage: images.galleryStronicBox,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist workshop for Mazda SkyActiv vehicles. Equipped with official Mazda IDS and M-MDS diagnostic interfaces, our certified technicians expertly service Mazda 3 (Axela), Mazda 6 (Atenza), CX-3, CX-5, CX-9, Demio (Mazda 2), and MX-5 Miata. From de-coking SkyActiv-G high-compression direct injection intake valves and servicing 6-speed SkyActiv-Drive automatic transmissions to i-ELOOP capacitor checks and suspension tuning, we deliver refined driving dynamics.',
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
        question: 'Why does my Mazda 3 / CX-5 hesitate under acceleration in hot weather?',
        answer: 'High-compression SkyActiv direct injection engines accumulate carbon crust on the intake valves. Our walnut blasting removes 100% of carbon, restoring crisp throttle response.',
      },
      {
        question: 'Do you carry genuine Mazda FZ automatic transmission fluid?',
        answer: 'Yes! SkyActiv-Drive transmissions require specific low-viscosity Mazda Genuine ATF FZ fluid (blue color). We always use original factory fluid.',
      },
      {
        question: 'Can you protect Mazda Soul Red Crystal paint with PPF in Islamabad?',
        answer: 'Yes! Mazda’s multi-stage Soul Red paint is notoriously prone to stone chipping. Our self-healing TPU PPF provides an invisible armor shield with up to 10-year warranty.',
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
    heroImage: images.galleryBakeBooth,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Subaru Boxer engines and Symmetrical All-Wheel Drive (AWD) vehicles. Utilizing official Subaru Select Monitor (SSM4) diagnostic software, our master mechanics service Subaru Forester, Outback, XV / Crosstrek, Legacy, Impreza, WRX, and WRX STI. From Boxer head gasket overhauls and Lineartronic CVT high-torque fluid servicing to turbocharger calibrations and symmetrical AWD differential maintenance, we guarantee master-level precision.',
    modelsCovered: [
      'Subaru Forester (SJ, SK - 2.0L, 2.5L FB20/FB25 & 2.0T FA20 DIT AWD)',
      'Subaru Outback & Legacy (2.5L FB25, 3.6L EZ36 Flat-6 & 2.4T FA24)',
      'Subaru XV / Crosstrek (2.0L FB20 Boxer e-Boxer Hybrid AWD)',
      'Subaru WRX & WRX STI (EJ20, EJ257, FA20F 2.0T/2.5T Turbo AWD)',
      'Subaru Impreza & Levorg (1.6T & 2.0T DIT Sport Tourer)',
      'Subaru BRZ (2.0L FA20 & 2.4L FA24 Boxer RWD Coupe)',
    ],
    diagnosticSoftware: 'Subaru Select Monitor 4 (SSM4), DST-i Interface & Symmetrical AWD Dyno Telemetry',
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
        question: 'Do you have official Subaru SSM4 diagnostic tools in Islamabad?',
        answer: 'Yes! We use the official Subaru Select Monitor 4 (SSM4) to diagnose all Boxer engine sensors, Lineartronic CVTs, and EyeSight safety cameras.',
      },
      {
        question: 'Can you rebuild Boxer engines (EJ25, FB20, FA20) without pulling them improperly?',
        answer: 'Yes, our technicians specialize in horizontally-opposed Boxer engine overhauls using proper Subaru factory alignment rigs, precision torquing, and OEM multi-layer steel head gaskets.',
      },
      {
        question: 'What fluid should be used in Subaru Lineartronic CVT transmissions?',
        answer: 'We strictly use genuine Subaru High-Torque CVTF / Lineartronic Fluid matching your specific Subaru model year and transmission code.',
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
    heroImage: images.serviceCooling,
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
        question: 'How do you repair hybrid battery failure (P0A80) on Lexus RX450h and ES300h?',
        answer: 'We test each module under artificial load on our high-voltage bench, replace degraded cell blocks with matched capacity OEM cells, balance the complete pack voltage, and clean the cooling fan.',
      },
      {
        question: 'Can you service the Active Height Control (AHC) suspension on Lexus LX570?',
        answer: 'Yes! We carry genuine Lexus AHC hydraulic fluid, test accumulator globes, and bleed the system using Techstream pressure step calibration for a plush, cloud-like ride.',
      },
      {
        question: 'Do you offer pickup and delivery for Lexus owners in Islamabad & Rawalpindi?',
        answer: 'Yes, we provide insured VIP valet pickup and drop-off across Islamabad (DHA, Bahria, F-6, F-7, E-7) and Rawalpindi.',
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
    heroImage: images.galleryBmwBrakes,
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
        question: 'Do you have official JLR Pathfinder diagnostic software in Islamabad?',
        answer: 'Yes! We use the genuine Jaguar Land Rover Pathfinder system with DoIP (Diagnostics over Internet Protocol) hardware to service all modern Land Rover models.',
      },
      {
        question: 'How do you fix air suspension sag on Land Rover Discovery and Defender?',
        answer: 'We pressure-test the air lines, replace leaking air struts or valve blocks, rebuild the compressor pump, and calibrate ride height sensors back to factory levels.',
      },
      {
        question: 'Can you service the timing chain on Land Rover Ingenium engines?',
        answer: 'Yes, our British vehicle master mechanics specialize in Ingenium 2.0L and 3.0L timing chain replacements using specialized JLR locking toolsets.',
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
    heroImage: images.galleryCayenneEngine,
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
        question: 'Why does my Range Rover sag on one side when parked overnight?',
        answer: 'This is usually caused by a micro-leak in the air strut rubber bladder or an internal valve block leak. We pressure-test each corner to identify the exact leaking component.',
      },
      {
        question: 'How do you fix coolant leaks on the 5.0L Supercharged V8 Range Rover?',
        answer: 'The factory plastic coolant crossover pipes under the supercharger become brittle with heat. We replace them with lifetime upgraded aluminum pipes and vacuum-bleed the cooling system.',
      },
      {
        question: 'Do you offer pickup and delivery for Range Rover Vogue in Islamabad?',
        answer: 'Yes, we provide insured VIP flatbed and valet pickup and drop-off across Islamabad and Rawalpindi.',
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
    heroImage: images.galleryStronicBox,
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
        question: 'How do you permanently eliminate "Death Wobble" on Jeep Wranglers in Islamabad?',
        answer: 'We perform a complete front-end diagnostic: replacing worn track bar bushings, drag links, ball joints, installing high-strength steering stabilizers, and setting precise caster alignment.',
      },
      {
        question: 'Can you fix the common oil filter housing leak on 3.6L Pentastar V6 engines?',
        answer: 'Yes! The factory plastic oil filter adapter cracks with engine heat. We replace it with an upgraded all-aluminum oil cooler housing that never cracks.',
      },
      {
        question: 'Do you service Jeep Grand Cherokee Quadra-Lift air suspension?',
        answer: 'Yes, we have specialized nitrogen refill rigs and wiTECH 2.0 diagnostics to bleed and calibrate closed-loop Quadra-Lift systems.',
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
    name: 'Ford Specialist Workshop & EcoBoost Tuning Islamabad',
    tagline: 'Ford FDRS / IDS Diagnostics, F-150 Raptor, Ranger, Everest, Mustang & EcoBoost Care',
    logoBadge: 'Ford Master Specialist',
    heroImage: images.galleryBakeBooth,
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
        question: 'Do you have official Ford FDRS diagnostic equipment in Islamabad?',
        answer: 'Yes! We use the genuine Ford Diagnostic & Repair System (FDRS) and VCM-3 hardware to service modern Ford Ranger, F-150, Everest, and Mustang models.',
      },
      {
        question: 'How do you fix shifting issues on Ford 10-speed automatic transmissions?',
        answer: 'We reprogram the Transmission Control Module (TCM), perform solenoid strategy relearns, and flush with genuine Motorcraft Mercon ULV fluid.',
      },
      {
        question: 'Can you service Ford Ranger Raptor and F-150 Raptor in Rawalpindi / Islamabad?',
        answer: 'Yes, our heavy-duty bays handle full mechanical maintenance, EcoBoost bi-turbo diagnostics, and Fox Live Valve suspension checks for Ford Raptors.',
      },
    ],
    seo: {
      title: 'Ford Specialist Workshop & EcoBoost Tuning Islamabad | HyperTune Garage',
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
    heroImage: images.serviceCooling,
    overview: 'HyperTune Garage is Islamabad and Rawalpindi’s premier independent specialist for Chevrolet and General Motors (GM) vehicles. Equipped with the official GM GDS2 and Tech2 diagnostic platforms, our American vehicle technicians expertly service Tahoe, Suburban, Silverado, Corvette (C7 & C8), Camaro (SS & ZL1), Captiva, Optra, and classic Joy/Exclusive models. From Small Block V8 (5.3L, 6.2L LT1/LT4) lifter repairs and Active Fuel Management (AFM) tuning to Magnetic Ride Control calibrations and heavy-duty transmission overhauls, we ensure peak performance.',
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
        question: 'Can you fix the AFM lifter tick on Chevrolet Tahoe and Silverado V8 engines?',
        answer: 'Yes! We specialize in diagnosing and resolving Active Fuel Management (AFM/DFM) lifter failure on GM 5.3L and 6.2L V8 engines with genuine upgraded GM parts.',
      },
      {
        question: 'Do you have official GM diagnostic software for Corvette C8 and Camaro in Islamabad?',
        answer: 'Yes, we use the official GM GDS2 with MDI-2 hardware to communicate with all electronic modules in modern Corvettes, Camaros, and Tahoes.',
      },
      {
        question: 'Can you still service classic Chevrolet Joy and Optra cars in Rawalpindi / Islamabad?',
        answer: 'Yes! We carry diagnostic scanners and service parts for classic Chevrolet Joy, Exclusive, and Optra vehicles.',
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
    heroImage: images.galleryBmwBrakes,
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
        question: 'Do you have official Volvo VIDA diagnostic tools in Islamabad?',
        answer: 'Yes! We use the genuine Volvo VIDA platform with DiCE / VOE DoIP hardware to perform deep diagnostics, module resets, and hybrid system calibrations on all modern Volvos.',
      },
      {
        question: 'Can you service the complex T8 Twin-Engine (Supercharged + Turbocharged + Electric) hybrid system?',
        answer: 'Yes, our European master technicians specialize in the complete Volvo T8 hybrid powertrain, high-voltage battery cooling, and Electric Rear Axle Drive (ERAD) motors.',
      },
      {
        question: 'How do you fix air suspension failure on Volvo XC90?',
        answer: 'We pressure-test the air lines, inspect Four-C active dampers, replace leaking air bellows or valve blocks, and calibrate ride height levels via VIDA.',
      },
    ],
    seo: {
      title: 'Volvo Scandinavian Safety & Hybrid Specialist Islamabad | HyperTune Garage',
      description: 'Premier independent Volvo workshop in Islamabad & Rawalpindi. Volvo VIDA diagnostics, XC90 & XC60 T8 hybrid service, Drive-E engine repairs & Four-C air suspension care.',
      keywords: ['volvo repair islamabad', 'volvo specialist rawalpindi', 'volvo xc90 service', 'volvo xc60 maintenance', 'volvo t8 hybrid repair', 'volvo vida diagnostic islamabad'],
    },
  },
];
