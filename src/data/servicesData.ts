import { ServiceItem } from '../types';
import { images, serviceImageVariants } from './images';
import { getRouteMetadata } from './metadataRegistry';

const baseServicesData: ServiceItem[] = [
  {
    id: 'paint-protection-film-ppf',
    slug: 'paint-protection-film-ppf',
    title: 'Paint Protection Film (PPF)',
    shortDesc: 'Clear Paint Protection Film (PPF) installation in Islamabad & Rawalpindi for full-body or front-end coverage against stone chips and road debris.',
    fullDesc: 'HyperTune Garage installs clear Paint Protection Film (PPF) at our Sector O-9 workshop in Islamabad. PPF places a transparent barrier over painted panels to absorb gravel impact, insect pitting, and light road abrasion before it reaches clear coat—though no film makes paint scratch-proof or stops severe impacts. Choose full-body coverage or high-impact front panels (bonnet, bumper, fenders, mirrors). We inspect paint first, compare PPF with Ceramic Coating, and confirm film specs and warranty terms during consultation.',
    subServices: [
      'Full-Body Clear PPF',
      'Partial Front-End PPF',
      'Bonnet, Bumper & Mirror Film',
      'Prep & Edge Inspection',
    ],
    subServicePrices: [
      { name: 'PPF (Paint Protection Film)', price: 'PKR 10,000 to 250,000' }
    ],
    category: 'protection',
    icon: 'ShieldCheck',
    image: images.servicePpf,
    priceRange: 'PKR 10,000 - PKR 250,000',
    estimatedTime: '2 - 4 Days',
    isFeatured: true,
    relatedServiceSlugs: ['car-detailing', 'vehicle-wrap', 'body-repair-paint'],
    symptoms: [
      'Shielding new or polished paint from Islamabad Expressway and M-2 Motorway gravel',
      'Protecting high-impact front bumpers, bonnets, fenders, and side mirrors',
      'Preventing highway bug etching and everyday abrasion on daily commuters',
      'Preserving factory clear coat on vehicles parked outdoors in twin-city sun and dust',
    ],
    keyBenefits: [
      'Physical Impact Barrier: Absorbs light stone chips and road grit before clear coat takes damage',
      'Full or Partial Coverage: Protect every panel or target front bumper, bonnet, fenders, and mirrors',
      'Clean Prep & Edge Work: Thorough wash, polishing as needed, tidy alignment, and finished edges',
      'Single-Panel Replacement: Replace one scuffed film panel without repainting bodywork',
    ],
    whyChooseUs: [
      'Indoor installation bay in Sector O-9, Islamabad shielded from roadside dust',
      'Clear-coat inspection and decontamination before film touches your paint',
      'Honest comparison between PPF and Car Detailing & Ceramic Coating',
      'Film specs, coverage, and pricing confirmed before booking',
    ],
    processSteps: [
      { title: '1. Paint Audit & Consultation', desc: 'Inspect clear-coat condition and confirm film specs and coverage.' },
      { title: '2. Wash & Decontamination', desc: 'Remove road tar, fallout, and bonded grit so adhesive seats cleanly.' },
      { title: '3. Surface Polishing (As Needed)', desc: 'Polish light swirls or haze so defects are not trapped under film.' },
      { title: '4. Indoor Fitment & Edge Work', desc: 'Align film indoors with wrapped or neatly trimmed panel edges.' },
      { title: '5. Inspection & Care Guide', desc: 'Inspect edges under workshop lights and review curing and wash care.' },
    ],
    faqs: [
      {
        question: 'What is Paint Protection Film (PPF) and what does it protect against?',
        answer: 'PPF is a clear urethane film applied over painted panels to absorb light stone chips, highway gravel, and minor abrasions. It reduces everyday wear, though it cannot make a car scratch-proof or stop heavy collision damage.',
      },
      {
        question: 'Should I choose Full-Body PPF or Partial Panel Coverage?',
        answer: 'Partial coverage shields the front bumper, bonnet, fenders, and mirrors where most highway chips hit. Full-body PPF adds doors, quarter panels, and rear bumpers for tight city parking and uniform coverage.',
      },
      {
        question: 'How does PPF differ from Ceramic Coating?',
        answer: 'PPF is a physical film built to cushion gravel impact, while ceramic coating is a liquid layer that boosts gloss, UV resistance, and washing ease without stopping rock chips. Compare options on our Car Detailing & Ceramic Coating page.',
      },
      {
        question: 'How do you prepare the vehicle and finish film edges?',
        answer: 'We wash and decontaminate each panel, polish light haze where needed, install film indoors away from dust, finish edges cleanly, and inspect under bright lighting before handover.',
      },
      {
        question: 'How should I maintain my car after PPF installation?',
        answer: 'Wait out the advised curing window before washing, then use pH-neutral shampoo and clean microfiber mitts. Never aim high-pressure washer nozzles directly at film edges.',
      },
      {
        question: 'Which film brands, thickness, and warranty options apply?',
        answer: 'Film brand options, thickness, topcoat features, and manufacturer warranty terms depend on your chosen film line and are confirmed in writing during your consultation.',
      },
    ],
    seo: {
      seoTitle: 'Paint Protection Film (PPF) Installation Islamabad | HyperTune',
      metaDescription: 'Clear Paint Protection Film (PPF) installation in Islamabad & Rawalpindi for full-body or high-impact front panels. Book a consultation at HyperTune Garage.',
      h1Heading: 'Paint Protection Film (PPF) Installation in Islamabad & Rawalpindi',
      targetKeywords: [
        'PPF Installation Islamabad',
        'Paint Protection Film Rawalpindi',
        'Full-Body PPF',
        'Partial PPF Coverage',
        'PPF vs Ceramic Coating',
      ],
      keywordParagraph: 'Protect factory paint across Islamabad and Rawalpindi with clear Paint Protection Film (PPF) at HyperTune Garage. Compare full-body or front-end coverage with ceramic coating and book your consultation online.',
    },
  },

  {
    id: 'car-detailing',
    slug: 'car-detailing',
    title: 'Car Detailing',
    shortDesc: 'Interior and exterior car detailing, machine polishing, paint correction, and ceramic coating in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage provides Car Detailing and Ceramic Coating in Sector O-9, Islamabad. Safe washing and decontamination clear bonded grit, paint enhancement lifts light haze, and multi-stage paint correction reduces deeper swirls depending on clear-coat condition. We also deep-clean upholstery, trim, and leather. Ceramic coating boosts UV resistance and washing ease—but does not stop stone chips like Paint Protection Film (PPF) or remove the need to wash.',
    subServices: [
      'Wash & Decontamination',
      'Paint Enhancement & Correction',
      'Ceramic Coating',
      'Interior Deep Cleaning',
    ],
    subServicePrices: [
      { name: 'Detailing (Interior & Exterior Ceramic)', price: 'PKR 10,000 to 45,000' }
    ],
    category: 'detailing',
    icon: 'Sparkles',
    image: images.serviceDetailing,
    priceRange: 'PKR 10,000 - PKR 45,000',
    estimatedTime: '1 - 2 Days',
    isFeatured: true,
    relatedServiceSlugs: ['paint-protection-film-ppf', 'vehicle-wrap', 'body-repair-paint'],
    symptoms: [
      'Swirl marks, wash marring, oxidation, and dull clear coat under sunlight',
      'Dusty air vents, stained upholstery, soiled carpets, and worn interior trim',
      'Stubborn hard-water spots, road tar, or tree sap on paint and glass',
      'Choosing between detailing, paint correction, ceramic coating, or physical PPF',
    ],
    keyBenefits: [
      'Safe Wash & Decontamination: Remove bonded tar, iron fallout, and grit before polishing',
      'Enhancement or Correction: Select single-stage gloss boost or deeper multi-step swirl reduction',
      'Ceramic Coating: Adds UV and chemical resistance so routine washes release dirt faster',
      'Cabin Deep Clean: Vacuum, extract or steam upholstery safely, and condition trim and leather',
    ],
    whyChooseUs: [
      'Indoor Islamabad studio lighting to assess paint defects accurately',
      'Clear guidance comparing detailing, correction, ceramic coating, and PPF',
      'Honest aftercare expectations—never "scratch-proof" or zero-wash claims',
      'Product options and coating terms confirmed before work begins',
    ],
    processSteps: [
      { title: '1. Paint & Cabin Assessment', desc: 'Inspect upholstery and clear coat under studio lighting to set scope.' },
      { title: '2. Wash & Decontamination', desc: 'Clean wheels and panels, then remove tar, fallout, and bonded grit.' },
      { title: '3. Polishing or Correction', desc: 'Machine-polish paint to restore gloss or reduce swirls prior to coating.' },
      { title: '4. Interior Deep Cleaning', desc: 'Clean seats, carpets, vents, and dash, then condition leather and trim.' },
      { title: '5. Coating & Care Guide', desc: 'Apply ceramic coating if selected and review curing and wash care.' },
    ],
    faqs: [
      {
        question: 'How do cleaning, decontamination, paint enhancement, and paint correction differ?',
        answer: 'Cleaning removes loose dirt; decontamination removes bonded tar and grit; paint enhancement uses light polishing to boost gloss; and paint correction uses multi-step polishing to reduce deeper swirls and oxidation.',
      },
      {
        question: 'What does ceramic coating do—and what does it NOT do?',
        answer: 'Ceramic coating bonds to clear coat to improve gloss, water beading, UV resistance, and washing ease. It does NOT make paint scratch-proof, prevent stone chips, or eliminate regular washing.',
      },
      {
        question: 'How does ceramic coating differ from wax, sealants, and PPF?',
        answer: 'Waxes and sealants wear away faster in heat and rain, whereas ceramic coatings last longer on prepped paint. Unlike Paint Protection Film (PPF), ceramic coating provides no physical cushion against highway gravel.',
      },
      {
        question: 'Should I choose car detailing, paint correction, or ceramic coating?',
        answer: 'Book detailing to restore cabin cleanliness and gloss, add paint correction for visible swirl marks, and add ceramic coating for easier upkeep afterward. We inspect your vehicle first to recommend the right step.',
      },
      {
        question: 'How should I care for a vehicle after ceramic coating?',
        answer: 'Wait out the initial curing period before washing, use pH-neutral shampoo with clean microfiber mitts, dry hard Islamabad/Rawalpindi water quickly, and avoid abrasive roadside brushes.',
      },
      {
        question: 'Which ceramic coating products and warranty terms apply?',
        answer: 'Ceramic product lines, expected durability, and any warranty or maintenance terms vary by selected coating and are confirmed in writing before application.',
      },
    ],
    seo: {
      seoTitle: 'Car Detailing & Ceramic Coating Islamabad | HyperTune Garage',
      metaDescription: 'Interior and exterior car detailing, paint correction and ceramic coating in Islamabad & Rawalpindi. Restore cabin hygiene and paint gloss—book your slot.',
      h1Heading: 'Car Detailing & Ceramic Coating in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Detailing Islamabad',
        'Ceramic Coating Rawalpindi',
        'Paint Correction Islamabad',
        'Interior Car Detailing',
        'Ceramic vs PPF',
      ],
      keywordParagraph: 'Book interior and exterior car detailing, paint enhancement, paint correction, and ceramic coating at HyperTune Garage in Islamabad & Rawalpindi. Compare ceramic coating with wax and PPF and schedule your slot.',
    },
  },

  {
    id: 'engine-services',
    slug: 'engine-services',
    title: 'Engine Services & Overhaul',
    shortDesc: 'Engine diagnostics, mechanical repair, and complete engine overhauls in Islamabad & Rawalpindi for petrol, hybrid, diesel, and turbo engines.',
    fullDesc: 'Engine problems do not always require a full rebuild. At HyperTune Garage in Sector O-9, Islamabad, we distinguish fault diagnosis, targeted component repair, and complete engine overhaul across Islamabad and Rawalpindi. We inspect fault codes, oil and coolant condition, cylinder compression, and internal wear before recommending gasket, timing, or valve work—or a full engine overhaul when internal wear requires it. Cooling, lubrication, and vehicle-specific clearances are checked before handover.',
    subServices: [
      'Engine Diagnostics & Assessment',
      'Cylinder Head & Gasket Repair',
      'Timing Chain & Belt Service',
      'Targeted Mechanical Repair',
      'Complete Engine Overhaul',
    ],
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
    relatedServiceSlugs: ['cooling-fuel-exhaust', 'transmission-drivetrain', 'inspection-diagnostics'],
    symptoms: [
      'Knocking, metallic ticking, or unusual timing noise at idle or acceleration',
      'Engine overheating, recurring coolant loss, or milky oil residue',
      'Blue, white, or heavy dark exhaust smoke during startup or driving',
      'Noticeable power loss, rough idle, misfires, or rising oil consumption',
      'Active check-engine warning light requiring mechanical and sensor checks',
    ],
    keyBenefits: [
      'Clear Repair Scope: Distinguish minor seal, timing, or sensor repairs from a full overhaul',
      'Mechanical Assessment: Evaluate compression, leak-down, and internal wear before disassembly',
      'System-Wide Checks: Inspect cooling, lubrication, and related hoses during engine work',
      'Vehicle-Specific Parts: Source parts matched to your engine design and approved estimate',
      '12-Month Written Parts Warranty available on eligible replacement parts per invoice terms',
    ],
    whyChooseUs: [
      'Assessment-first workflow at our Sector O-9, Islamabad workshop serving Islamabad & Rawalpindi',
      'Clear explanation comparing targeted component repair versus complete engine overhaul',
      'Itemized estimate shared for customer approval before disassembly or added work',
      'Post-repair fluid, leak, temperature, and road checks before vehicle delivery',
    ],
    processSteps: [
      { title: 'Symptom & Fault Assessment', desc: 'Review driving symptoms, warning lights, oil condition, and service history.' },
      { title: 'Compression & System Testing', desc: 'Run compression, cooling, and leak checks to separate external faults from internal wear.' },
      { title: 'Repair vs Overhaul Estimate', desc: 'Present clear repair or overhaul options with itemized parts for your approval.' },
      { title: 'Engine Repair or Rebuild', desc: 'Complete targeted gasket, timing, or cylinder head work—or full overhaul to spec.' },
      { title: 'Post-Repair Verification', desc: 'Verify idle stability, oil and coolant levels, leaks, and road behavior before handover.' },
    ],
    faqs: [
      {
        question: 'How do I know if my engine needs targeted repair or a full overhaul?',
        answer: 'Not every engine fault needs a full overhaul. If compression and bearings remain sound, replacing a leaking gasket, timing kit, or external component resolves the issue. A full overhaul is recommended only when compression, piston rings, cylinder walls, or bearings show significant internal wear.',
      },
      {
        question: 'What inspection takes place before you recommend opening an engine?',
        answer: 'We start with fault-code scanning, fluid inspection, leak checks, and compression or leak-down assessment where appropriate. Reviewing mechanical test findings first helps avoid unnecessary teardown.',
      },
      {
        question: 'What is included in a complete engine overhaul versus cylinder head repair?',
        answer: 'Cylinder head repair focuses on head gaskets, valves, seals, and surface condition. A complete overhaul addresses the full engine assembly, including pistons, rings, bearings, timing components, gaskets, and related wear items confirmed on your estimate.',
      },
      {
        question: 'Why do cooling and lubrication issues lead to serious engine damage?',
        answer: 'Overheating warps cylinder heads and weakens head gaskets, while degraded or low engine oil accelerates bearing and timing wear. We inspect both systems during repair work to help protect the repaired engine.',
      },
      {
        question: 'What affects engine repair cost and estimated turnaround time?',
        answer: 'Cost and duration depend on engine layout (petrol, hybrid, turbo, or diesel), whether external repairs or full machining are needed, and parts availability for your specific vehicle.',
      },
      {
        question: 'What warranty applies to replacement engine parts?',
        answer: 'Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions. Exact coverage is confirmed on the service estimate and final invoice. Labour, consumables and unrelated components are not automatically covered.',
      },
    ],
    seo: {
      seoTitle: 'Engine Repair & Overhaul in Islamabad | HyperTune Garage',
      metaDescription: 'Engine diagnostics, mechanical repair and complete overhaul in Islamabad & Rawalpindi for overheating, leaks and engine wear. Book an assessment today.',
      h1Heading: 'Engine Repair & Overhaul Services in Islamabad & Rawalpindi',
      targetKeywords: [
        'Engine Repair Islamabad',
        'Engine Overhaul Rawalpindi',
        'Cylinder Head Repair',
        'Engine Diagnostics',
        'Timing Belt & Chain Service',
      ],
      keywordParagraph: 'Book engine diagnostics, cylinder head work, timing service, and complete engine overhauls at HyperTune Garage in Islamabad & Rawalpindi. We assess mechanical condition first and pair repairs smoothly with Cooling, Fuel & Exhaust or Maintenance & Servicing.',
    },
  },

  {
    id: 'inspection-diagnostics',
    slug: 'inspection-diagnostics',
    title: 'Inspection & Diagnostics',
    shortDesc: 'OBD computer scans, warning-light fault investigation, and pre-purchase vehicle inspections in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage provides Inspection & Diagnostics in Sector O-9, Islamabad for car owners and buyers across Islamabad and Rawalpindi. OBD scanning reads fault codes and live sensor data across engine, transmission, and electrical modules, while undercarriage and physical inspection checks leaks, suspension, brakes, chassis, and paint thickness. A fault code alone never confirms a failed part—we verify root causes first or direct routine vehicles to Maintenance & Servicing.',
    subServices: [
      'OBD Computer Scanning',
      'Warning-Light Diagnosis',
      'Engine & Electrical Checks',
      'Physical & Undercarriage Inspection',
      'Pre-Purchase Assessment',
    ],
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
    relatedServiceSlugs: ['maintenance-servicing', 'brake-suspension-steering', 'car-ac-repair'],
    symptoms: [
      'Check-engine, ABS, airbag, transmission, or battery warning lights on the cluster',
      'Misfires, stalling, harsh shifting, electrical faults, or recurring post-reset codes',
      'Evaluating a used car in Islamabad or Rawalpindi prior to purchase',
      'Checking paint thickness, underbody leaks, and suspension wear during inspection',
    ],
    keyBenefits: [
      'OBD & Live Telemetry Scan: Read stored fault codes and live sensor data across key modules',
      'Fault-Code Verification: Test wiring and hardware before recommending any part replacement',
      'Physical Mechanical Audit: Inspect chassis rails, leaks, brakes, and suspension during undercarriage inspection',
      'Pre-Purchase Car Check: Evaluate paint-thickness consistency, wear, and road behavior',
      'Clear Next Steps: Review confirmed causes, repair priorities, or Maintenance & Servicing',
    ],
    whyChooseUs: [
      'Separates code reading from root-cause diagnosis to avoid guesswork parts swapping',
      'Pairs electronic scanning with undercarriage and physical condition checks',
      'Objective pre-purchase assessment for Islamabad & Rawalpindi car buyers',
      'Book with make, model, warning lights, symptoms, and recent service history',
    ],
    processSteps: [
      { title: '1. Vehicle & Symptom Intake', desc: 'Log make, model, year, warning lights, driving symptoms, and history.' },
      { title: '2. Electronic OBD Scan', desc: 'Scan engine, gearbox, ABS, and electrical modules for codes and live data.' },
      { title: '3. Root-Cause Testing', desc: 'Verify wiring and mechanical behavior—never replacing parts on a raw code.' },
      { title: '4. Physical & Pre-Purchase Check', desc: 'Inspect underbody, leaks, brakes, suspension, and paint thickness readings.' },
      { title: '5. Findings Review', desc: 'Explain confirmed faults, repair priorities, or Maintenance & Servicing steps.' },
    ],
    faqs: [
      {
        question: 'How do OBD scanning, fault-code interpretation, and root-cause diagnosis differ?',
        answer: 'Scanning reads stored codes, interpretation compares live sensor values, and diagnosis tests wiring, vacuum, fuel, or hardware directly. A fault code alone never proves a failed part—for example, an oxygen-sensor code may stem from an exhaust leak or wiring fault.',
      },
      {
        question: 'How does electronic diagnostics differ from physical mechanical inspection?',
        answer: 'Electronic diagnostics checks control modules and live sensor telemetry, while physical inspection checks worn bushings, fluid leaks, brakes, frame condition, and paint thickness that scanners cannot detect.',
      },
      {
        question: 'What details should I share when booking an inspection or diagnostic check?',
        answer: 'Share your vehicle make, model, year, specific symptoms (such as misfires or hesitation), active warning lights, and recent repair history so technicians can target testing quickly.',
      },
      {
        question: 'What findings and recommendations can I expect afterward?',
        answer: 'We review active or stored codes, distinguish confirmed faults from items needing deeper inspection, and separate urgent repairs from routine Maintenance & Servicing. Request a written summary when booking if needed.',
      },
      {
        question: 'Why do warning lights return after someone clears the fault codes?',
        answer: 'Clearing codes erases warning memory without fixing the underlying sensor, wiring, or mechanical fault, so the control module re-triggers the light once self-tests run again.',
      },
      {
        question: 'Should I book Inspection & Diagnostics or Maintenance & Servicing?',
        answer: 'Book Inspection & Diagnostics for warning lights, drivability faults, or pre-purchase checks. If your car runs normally and needs oil, filter, and preventive checks, choose Maintenance & Servicing.',
      },
    ],
    seo: {
      seoTitle: 'Car Inspection & Diagnostics in Islamabad | HyperTune Garage',
      metaDescription: 'OBD computer diagnostics, warning-light investigation and pre-purchase vehicle inspection in Islamabad & Rawalpindi. Book an accurate fault assessment today.',
      h1Heading: 'Car Inspection & Diagnostics in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Diagnostics Islamabad',
        'OBD Diagnostic Scan',
        'Warning Light Investigation',
        'Pre-Purchase Car Inspection',
        'Mechanical Inspection Rawalpindi',
      ],
      keywordParagraph: 'Investigate warning lights, drivability faults, and used-car condition at HyperTune Garage in Islamabad & Rawalpindi. Pair OBD scanning with undercarriage inspection to verify root causes or route smoothly to Maintenance & Servicing.',
    },
  },

  {
    id: 'maintenance-servicing',
    slug: 'maintenance-servicing',
    title: 'Maintenance & Servicing',
    shortDesc: 'Scheduled car maintenance and preventive servicing in Islamabad & Rawalpindi for oil, filters, fluids, brakes, tyres, and cooling.',
    fullDesc: 'Preventive maintenance protects reliability and fuel efficiency in Islamabad and Rawalpindi traffic, summer heat, and dust. At HyperTune Garage in Sector O-9, Islamabad, we perform oil and OEM-grade filter changes matched to manufacturer specs alongside fluid, brake, tyre, battery, and cooling checks. Because intervals and oil grades differ across petrol, hybrid, turbo, and diesel engines, we follow vehicle-specific specs rather than one universal schedule. Routine servicing differs from repairs or Inspection & Diagnostics, and any extra wear is reviewed with you first.',
    subServices: [
      'Engine Oil & Filter Change',
      'Air & Cabin Filter Service',
      'Fluid Checks & Top-Ups',
      'Brake & Tyre Checklist',
      'Battery & Cooling Checks',
    ],
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
    relatedServiceSlugs: ['inspection-diagnostics', 'brake-suspension-steering', 'cooling-fuel-exhaust'],
    symptoms: [
      'Due for manufacturer-scheduled mileage or time-based car maintenance',
      'Dashboard maintenance reminder or oil-service alert active',
      'Preparing for motorway travel or seasonal summer/winter temperature shifts',
      'Dust-loaded cabin airflow, aged engine oil, or unknown history on a recently bought car',
    ],
    keyBenefits: [
      'Oil & Filter Service: Drain spent oil and fit OEM-grade oil, engine air, and cabin filters',
      'Fluid Condition Checks: Inspect coolant, brake fluid, and reservoir levels for leaks or wear',
      'Brake & Tyre Audit: Check pad thickness, disc surfaces, tyre tread wear, and pressures',
      'Battery & Cooling Checks: Inspect battery state, hoses, drive belts, and cooling operation',
      'Service Reminder Reset: Reset supported cluster alerts and log completed maintenance items',
    ],
    whyChooseUs: [
      'Oil grades and filters matched to your vehicle manufacturer specifications',
      'Clear separation between routine servicing, repairs, and fault diagnostics',
      'Extra wear discovered during checks is shared for approval before added work starts',
      'Convenient Sector O-9 Islamabad workshop serving twin-city owners online',
    ],
    processSteps: [
      { title: '1. Vehicle & History Intake', desc: 'Confirm make, model, year, odometer reading, service history, and alerts.' },
      { title: '2. Oil & Filter Replacement', desc: 'Drain spent engine oil and fit OEM-grade oil, air, and cabin filters.' },
      { title: '3. Fluids, Battery & Cooling', desc: 'Inspect coolant, brake fluid, hoses, belts, and battery health.' },
      { title: '4. Brake & Tyre Checklist', desc: 'Check brake pads, rotors, tyre tread depth, and underbody seepage.' },
      { title: '5. Findings & Reminder Reset', desc: 'Review completed checks, reset service alerts, or flag Inspection & Diagnostics.' },
    ],
    faqs: [
      {
        question: 'What happens during a routine car maintenance visit at HyperTune Garage?',
        answer: 'We verify vehicle specs, drain old engine oil, replace the oil filter and air/cabin filters as required, check essential fluids, inspect brakes, tyres, battery, and cooling hoses, and reset supported reminders.',
      },
      {
        question: 'Why do oil specifications and service intervals vary between vehicles?',
        answer: 'Intervals and oil grades depend on engine design across petrol, hybrid, turbocharged, and diesel vehicles. Islamabad and Rawalpindi traffic heat and dust also accelerate filter and fluid wear.',
      },
      {
        question: 'What is the difference between routine servicing, repair work, and Inspection & Diagnostics?',
        answer: 'Routine servicing handles scheduled preventive care like oil, filters, and safety checks. Repair work fixes worn components, while Inspection & Diagnostics investigates warning lights or unknown faults before repairs.',
      },
      {
        question: 'How are additional issues handled if discovered during servicing?',
        answer: 'Worn brake pads, fluid leaks, or cracked hoses spotted during undercarriage inspection are kept separate from routine servicing and discussed with you first so you choose whether to repair now or book later.',
      },
      {
        question: 'When should I book maintenance and what vehicle information should I provide?',
        answer: 'Book per your owner manual interval, when service reminders light up, or before long highway trips. Share your make, model, year, odometer reading, last service date, and any warning lights.',
      },
      {
        question: 'Why do twin-city heat and dust make preventive checks important?',
        answer: 'Airborne dust across Islamabad and Rawalpindi clogs air and cabin filters quickly, while stop-and-go summer heat stresses oil, cooling systems, and batteries—making regular checks essential.',
      },
    ],
    seo: {
      seoTitle: 'Car Maintenance & Servicing in Islamabad | HyperTune Garage',
      metaDescription: 'Scheduled car maintenance and preventive servicing in Islamabad & Rawalpindi. Engine oil, filters, fluids, brake, tyre and cooling checks—book your visit.',
      h1Heading: 'Car Maintenance & Servicing in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Maintenance Islamabad',
        'Scheduled Servicing Rawalpindi',
        'Engine Oil & Filter Change',
        'Preventive Vehicle Care',
        'Brake & Fluid Checks',
      ],
      keywordParagraph: 'Stay ahead with scheduled Car Maintenance & Servicing at HyperTune Garage in Islamabad & Rawalpindi. Book oil and filter changes, fluid, brake, tyre, battery, and cooling checks, or choose Inspection & Diagnostics for warning lights.',
    },
  },

  {
    id: 'brake-suspension-steering',
    slug: 'brake-suspension-steering',
    title: 'Brake, Suspension & Steering',
    shortDesc: 'Brake pad and disc service, suspension overhaul, steering rack repair, and computerized wheel alignment in Islamabad & Rawalpindi.',
    fullDesc: 'Potholes, speed breakers, and highway mileage across Islamabad and Rawalpindi wear brake components, suspension bushings, shock absorbers, and steering linkages over time. At HyperTune Garage in Sector O-9, Islamabad, we inspect pads, rotors, brake fluid condition, struts, air-suspension leaks, control arms, and tie rods before recommending repair or replacement. Paired with computerized wheel alignment, our post-repair checks verify smooth tracking and reliable mechanical operation.',
    subServices: [
      'Brake Pad, Disc & Fluid Service',
      'Suspension & Control Arm Repair',
      'Air Suspension Assessment & Repair',
      'Steering Rack & Tie Rod Service',
      'Computerized Wheel Alignment',
    ],
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
    relatedServiceSlugs: ['inspection-diagnostics', 'maintenance-servicing', 'transmission-drivetrain'],
    symptoms: [
      'Squealing, grinding, brake-pedal pulsation, or soft/spongy pedal feel',
      'Clunking, knocking, or creaking noises over bumps and speed breakers',
      'Steering wheel vibration at highway speed or pulling to one side',
      'Loose steering play, heavy turning effort, or fluid leaks near the rack',
      'Uneven inner or outer tyre tread wear or sagging air-suspension corners',
    ],
    keyBenefits: [
      'Safety-Focused Inspection: Check brake pads, disc thickness, calipers, and brake fluid condition',
      'Suspension & Bushings: Inspect shocks, struts, mounts, ball joints, and control-arm bushings',
      'Steering Diagnostics: Assess tie-rod ends, steering racks, and power-steering leaks',
      'Computerized Wheel Alignment: Measure camber, caster, and toe angles against chassis specs',
      '12-Month Written Parts Warranty available on eligible replacement parts per invoice terms',
    ],
    whyChooseUs: [
      'Undercarriage inspection and computerized wheel alignment checks in Sector O-9, Islamabad',
      'Clear explanation of worn versus serviceable undercarriage components',
      'Written itemized estimate approved before replacing suspension or brake parts',
      'Post-repair alignment verification and functional brake and steering check',
    ],
    processSteps: [
      { title: 'Brake & Undercarriage Audit', desc: 'Inspect pads, rotors, calipers, fluid condition, bushings, and suspension joints during undercarriage inspection.' },
      { title: 'Steering & Alignment Check', desc: 'Check steering play, rack boots, tie rods, and tyre wear patterns.' },
      { title: 'Itemized Repair Plan', desc: 'Review worn components and confirm parts options and pricing before work starts.' },
      { title: 'Component & Brake Service', desc: 'Replace worn parts, skim serviceable discs where safe, or service air-suspension leaks.' },
      { title: 'Wheel Alignment & Road Check', desc: 'Calibrate wheel alignment and verify pedal feel, noise elimination, and tracking.' },
    ],
    faqs: [
      {
        question: 'When should I book a brake, suspension, or steering inspection?',
        answer: 'Book an inspection if you hear brake squealing or grinding, feel steering vibration or pedal pulsation, notice uneven tyre wear, hear clunks over bumps, or hit a deep pothole.',
      },
      {
        question: 'When can brake discs be resurfaced versus replaced?',
        answer: 'Discs with light surface grooves that remain safely above the manufacturer minimum thickness can often be skimmed flat. Heavily worn, cracked, or heat-warped discs require replacement.',
      },
      {
        question: 'Why does my steering wheel vibrate or pull on the highway?',
        answer: 'Pulling or vibration commonly comes from misaligned camber or toe angles, unbalanced wheels, bent rims, or worn tie-rod ends and control-arm bushings. We check alignment and linkage play together.',
      },
      {
        question: 'How do you assess suspension knocks and air-suspension sagging?',
        answer: 'We inspect shock absorbers, strut mounts, sway-bar links, bushings, and air-spring lines during undercarriage inspection—plus fault scans on electronic height sensors—to isolate the exact worn part.',
      },
      {
        question: 'Why check brake fluid alongside brake pads and discs?',
        answer: 'Brake fluid absorbs moisture over time, lowering boiling resistance and encouraging internal corrosion. Checking fluid condition alongside pads helps maintain consistent hydraulic braking response.',
      },
      {
        question: 'What warranty covers replacement brake, suspension, and steering parts?',
        answer: 'Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions. Exact coverage is confirmed on the service estimate and final invoice. Labour, consumables and unrelated components are not automatically covered.',
      },
    ],
    seo: {
      seoTitle: 'Brake, Suspension & Steering Repair Islamabad | HyperTune',
      metaDescription: 'Brake, suspension and steering inspection, repair and wheel alignment in Islamabad & Rawalpindi for noise, vibration or pulling. Schedule a safety check.',
      h1Heading: 'Brake, Suspension & Steering Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Brake Repair Islamabad',
        'Suspension Repair Rawalpindi',
        'Steering Rack Repair',
        'Wheel Alignment Islamabad',
        'Air Suspension Repair',
      ],
      keywordParagraph: 'Resolve brake noise, suspension knocks, steering vibration, and alignment pull at HyperTune Garage in Islamabad & Rawalpindi. Combine undercarriage inspection with computerized wheel alignment, Inspection & Diagnostics, or Maintenance & Servicing.',
    },
  },

  {
    id: 'transmission-drivetrain',
    slug: 'transmission-drivetrain',
    title: 'Transmission & Drivetrain',
    shortDesc: 'Diagnostics and repair for automatic, CVT, DSG/DCT transmissions, differentials, and drivetrains in Islamabad & Rawalpindi.',
    fullDesc: 'Automatic, Continuously Variable (CVT), Dual-Clutch (DSG/DCT), and manual drivetrains each use distinct hydraulic systems, clutch designs, and vehicle-specific fluids. At HyperTune Garage in Sector O-9, Islamabad, we never treat every gearbox with one generic fluid or repair procedure. We scan transmission control modules, assess fluid condition and leaks, inspect drivetrain mounts and differentials, and verify whether servicing, mechatronic repair, or mechanical overhaul is needed.',
    subServices: [
      'Automatic & CVT Diagnostics',
      'DSG & Dual-Clutch (DCT) Repair',
      'Vehicle-Specific Fluid Service',
      'Valve Body & Gearbox Repair',
      'Differential & Drivetrain Care',
    ],
    subServicePrices: [
      { name: 'Transmission Repair', price: 'PKR 8,000 to 85,000' },
    ],
    category: 'transmission',
    icon: 'Settings',
    image: images.serviceTransmission,
    priceRange: 'PKR 8,000 - PKR 85,000',
    estimatedTime: '1 - 4 Days',
    isFeatured: true,
    relatedServiceSlugs: ['inspection-diagnostics', 'brake-suspension-steering', 'engine-services'],
    symptoms: [
      'Delayed engagement when shifting between Park, Reverse, and Drive',
      'Gear slipping, sudden RPM flares without acceleration, or loss of drive',
      'Harsh shifts, low-speed juddering, or shuddering in stop-and-go traffic',
      'Transmission warning light or overheating alert on the instrument cluster',
      'Whining, clunking, driveline vibration, or fluid leaks under the vehicle',
    ],
    keyBenefits: [
      'Diagnostic Assessment First: Scan TCU fault codes and inspect fluid before recommending repairs',
      'System-Specific Care: Separate procedures for torque-converter automatics, CVTs, and DSG/DCTs',
      'Correct Fluid Matching: Use transmission fluids matched strictly to manufacturer specifications',
      'Drivetrain Coverage: Inspect differentials, transfer cases, shafts, and gearbox mounts',
      '12-Month Written Parts Warranty available on eligible replacement parts per invoice terms',
    ],
    whyChooseUs: [
      'Serving Islamabad & Rawalpindi drivers with gearbox diagnostics before parts teardown',
      'Clear explanation comparing fluid service, mechatronic repair, and full rebuilds',
      'Written estimate and customer approval prior to transmission removal or repair',
      'Post-repair adaptation checks and road testing under operating load',
    ],
    processSteps: [
      { title: 'Symptom & Drive Intake', desc: 'Log shifting complaints, cold-versus-warm behavior, warning messages, and service history.' },
      { title: 'TCU Scan & Fluid Check', desc: 'Read transmission fault codes, live pressure/temperature data, and fluid condition.' },
      { title: 'Drivetrain & Leak Inspection', desc: 'Inspect gearbox seals, cooler lines, mounts, differentials, and transfer case components.' },
      { title: 'Targeted Service or Rebuild', desc: 'Perform vehicle-specific fluid service, valve-body/mechatronic work, or clutch rebuild as approved.' },
      { title: 'Adaptation & Road Check', desc: 'Run supported electronic adaptations and verify shift behavior during road testing.' },
    ],
    faqs: [
      {
        question: 'What symptoms show a transmission or drivetrain needs diagnostic inspection?',
        answer: 'Delayed gear engagement, slipping RPMs, harsh shifts, low-speed shudder, warning lights, whining noises, or fluid leaks all warrant early diagnostic inspection before minor faults worsen internal wear.',
      },
      {
        question: 'Do automatic, CVT, and DSG/DCT transmissions use the same fluid and service procedure?',
        answer: 'No. Conventional automatics, belt/chain CVTs, and dry or wet dual-clutch (DSG/DCT) units require completely different fluid chemistries, fill levels, temperature procedures, and service intervals matched to the vehicle.',
      },
      {
        question: 'When is a transmission fluid service enough versus mechanical or mechatronic repair?',
        answer: 'If degraded fluid causes mild shift hesitation without worn clutches or hydraulic failures, a proper fluid and filter service may help. Slipping gears, actuator faults, or solenoid damage require mechanical or mechatronic repair.',
      },
      {
        question: 'Why do dual-clutch (DSG/DCT) transmissions shudder in twin-city traffic?',
        answer: 'Stop-and-go heat in Islamabad and Rawalpindi accelerates clutch wear, actuator fluid degradation, and mechatronic pressure drop. We scan clutch engagement data and inspect actuator/mechatronic components first.',
      },
      {
        question: 'What factors affect transmission repair cost and turnaround time?',
        answer: 'Pricing and timeframe depend on gearbox type, whether the fault is external, fluid-related, electronic, or internal, and component availability for your make and model.',
      },
      {
        question: 'What warranty applies to replacement transmission parts?',
        answer: 'Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions. Exact coverage is confirmed on the service estimate and final invoice. Labour, consumables and unrelated components are not automatically covered.',
      },
    ],
    seo: {
      seoTitle: 'Transmission, CVT & DSG Repair Islamabad | HyperTune Garage',
      metaDescription: 'Automatic transmission, CVT, DSG and drivetrain diagnostics and repair in Islamabad & Rawalpindi for slipping, jerking or fluid issues. Book your inspection.',
      h1Heading: 'Automatic Transmission, CVT, DSG & Drivetrain Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Transmission Repair Islamabad',
        'CVT Gearbox Service Rawalpindi',
        'DSG & DCT Repair',
        'Automatic Transmission Diagnostics',
        'Drivetrain & Differential Service',
      ],
      keywordParagraph: 'Diagnose gear slipping, harsh shifts, CVT hesitation, and DSG shudder at HyperTune Garage in Islamabad & Rawalpindi. We inspect transmission fluid and control modules first and coordinate with Inspection & Diagnostics and Engine Services.',
    },
  },

  {
    id: 'vehicle-wrap',
    slug: 'vehicle-wrap',
    title: 'Vehicle Wrap',
    shortDesc: 'Full and partial car vinyl wraps in Islamabad & Rawalpindi with surface preparation, finish options, and neat edge finishing.',
    fullDesc: 'At HyperTune Garage in Sector O-9, Islamabad, car vinyl wrapping changes exterior appearance across full panels, roofs, trims, and chrome-delete accents without repainting. Vinyl wrap is an aesthetic film—distinct from Paint Protection Film (PPF), which targets stone-chip impact, and Ceramic Coating, which focuses on liquid gloss and washing ease. Because wrap adhesion and future removal depend heavily on existing clear-coat health, we inspect paint condition first and review aftercare before booking.',
    subServices: [
      'Full Color-Change Vinyl Wrap',
      'Partial Roof & Accent Wraps',
      'Chrome-Delete Trim Styling',
      'Matte, Satin & Gloss Finishes',
    ],
    subServicePrices: [
      { name: 'Body Wrap (Vehicle Wrapping)', price: 'PKR 1,000 to 250,000' }
    ],
    category: 'wrap',
    icon: 'Shield',
    image: images.serviceWrap,
    priceRange: 'PKR 1,000 - PKR 250,000',
    estimatedTime: '2 - 4 Days',
    isFeatured: true,
    relatedServiceSlugs: ['paint-protection-film-ppf', 'car-detailing', 'body-repair-paint'],
    symptoms: [
      'Wanting a full color change or matte, satin, or gloss finish without repainting',
      'Updating roof contrast, hood accents, or weathered exterior chrome trim',
      'Comparing appearance-focused vinyl wrap against clear PPF or ceramic coating',
      'Checking whether existing paint and clear coat are sound enough for wrapping',
    ],
    keyBenefits: [
      'Full or Partial Styling: Wrap the whole exterior or target roofs, mirrors, and chrome trim',
      'Paint Suitability Audit: Assess clear coat, repairs, and panel condition prior to application',
      'Clean Prep & Edge Work: Wash, decontaminate, apply panel by panel, and finish seams neatly',
      'Clear Service Distinction: Honest comparison between vinyl wrap, PPF, and ceramic coating',
    ],
    whyChooseUs: [
      'Indoor wrapping workspace in Sector O-9, Islamabad serving Islamabad & Rawalpindi owners',
      'Honest evaluation of paint suitability—we flag peeling or weak paint before wrapping',
      'Clear explanation of finish choices, panel scope, and removal considerations',
      'Written scope, material selection, and pricing confirmed before installation',
    ],
    processSteps: [
      { title: 'Paint & Wrap Consultation', desc: 'Inspect existing paint condition, confirm finish selection, and agree full or partial scope.' },
      { title: 'Wash & Surface Prep', desc: 'Clean panels thoroughly, remove bonded contamination, and prep trim and edges.' },
      { title: 'Panel-by-Panel Application', desc: 'Apply selected vinyl film smoothly across panels without trapped air or distortion.' },
      { title: 'Edge & Seam Finishing', desc: 'Trim and finish panel edges, recesses, and reinstalled trim neatly.' },
      { title: 'Final Audit & Aftercare', desc: 'Inspect seams under workshop lighting and review gentle washing and shade care.' },
    ],
    faqs: [
      {
        question: 'How does a car vinyl wrap differ from Paint Protection Film (PPF) and ceramic coating?',
        answer: 'Vinyl wrap changes exterior color and finish (gloss, satin, matte, or accent trim). PPF is a clear protective film built to cushion light stone chips, while ceramic coating is a liquid layer for gloss and easier washing.',
      },
      {
        question: 'Can any vehicle paint be wrapped, or does paint condition matter?',
        answer: 'Paint condition matters. Sound factory clear coat wraps well, whereas peeling clear coat, rust, heavy rock chips, or freshly cured repaint work can fail to hold vinyl evenly or lift during removal.',
      },
      {
        question: 'Can a vinyl wrap be removed later without affecting the paint underneath?',
        answer: 'When applied over healthy factory paint and removed carefully, vinyl usually peels off cleanly. However, aged film, sun exposure, or underlying repainted/weak clear coat can increase the risk of paint or adhesive lift.',
      },
      {
        question: 'Should I choose a full color-change wrap or partial roof and chrome-delete wraps?',
        answer: 'Full wraps transform the entire car color, while partial wraps target roofs, mirrors, or window chrome for lower cost and faster turnaround. We inspect your car and review options in person.',
      },
      {
        question: 'How should I clean and care for a vinyl-wrapped vehicle?',
        answer: 'Hand-wash with pH-neutral car shampoo and soft microfiber mitts, dry water spots promptly, and keep high-pressure washer nozzles away from film edges and seams.',
      },
      {
        question: 'What factors affect vinyl wrap pricing and completion time?',
        answer: 'Total cost and turnaround depend on vehicle size, body-line complexity, full versus partial coverage, chosen finish material, and any surface preparation needed beforehand.',
      },
    ],
    seo: {
      seoTitle: 'Car Vinyl Wrap & Color Change Islamabad | HyperTune Garage',
      metaDescription: 'Full and partial car vinyl wraps in Islamabad & Rawalpindi with careful surface preparation and finish options. Book a wrap consultation at HyperTune Garage.',
      h1Heading: 'Car Vinyl Wrap & Color Change Studio in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Vinyl Wrap Islamabad',
        'Vehicle Wrap Rawalpindi',
        'Color Change Car Wrap',
        'Matte & Satin Wrap',
        'Chrome Delete Styling',
      ],
      keywordParagraph: 'Customize your vehicle exterior with full or partial car vinyl wraps at HyperTune Garage in Islamabad & Rawalpindi. Compare appearance-focused vinyl wraps with Paint Protection Film (PPF), Car Detailing, or Body Repair & Paint before booking.',
    },
  },

  {
    id: 'body-repair-paint',
    slug: 'body-repair-paint',
    title: 'Body Repair & Paint',
    shortDesc: 'Exterior dent repair, collision bodywork, panel preparation, and paint refinishing in Islamabad & Rawalpindi.',
    fullDesc: 'HyperTune Garage repairs exterior dents, scrapes, bumper damage, and collision bodywork at our Sector O-9, Islamabad workshop for Islamabad and Rawalpindi owners. After inspecting panel deformation and underlying clear coat, we carry out dent repair, metalwork, surface preparation, paint matching, and panel refinishing based on the damage found. Estimate scope and finish expectations are reviewed clearly before work starts.',
    subServices: [
      'Collision Denting & Panel Repair',
      'Exterior Dent & Bumper Repair',
      'Panel Prep & Rust Treatment',
      'Paint Matching & Refinishing',
      'Post-Paint Finish Polishing',
    ],
    subServicePrices: [
      { name: 'Body Repair & Paint', price: 'PKR 5,000 to 100,000' }
    ],
    category: 'body',
    icon: 'Palette',
    image: images.servicePaint,
    priceRange: 'PKR 5,000 - PKR 100,000',
    estimatedTime: '2 - 5 Days',
    isFeatured: true,
    relatedServiceSlugs: ['vehicle-wrap', 'body-modification', 'paint-protection-film-ppf'],
    symptoms: [
      'Dented doors, creased fenders, cracked bumpers, or collision panel misalignment',
      'Deep paint scratches, scuffs, or bare metal exposed to moisture and rust',
      'Sun-faded, oxidized, or peeling clear coat needing panel refinishing',
      'Minor door dings, bumper scuffs, and panel creases affecting exterior appearance',
    ],
    keyBenefits: [
      'Damage-First Assessment: Inspect dent severity and paint condition to scope only the repairs needed',
      'Thorough Surface Prep: Sand, treat surface rust, prime, and block-level panels before paint',
      'Color-Matched Refinishing: Match vehicle paint codes and blend refinished panels with adjacent paintwork',
      'Consistent Finish Check: Inspect panel gaps, gloss, and texture under workshop lighting',
    ],
    whyChooseUs: [
      'Honest inspection of bodywork scope at our Sector O-9, Islamabad workshop',
      'Clear estimate detailing panels, prep steps, and refinishing work before approval',
      'Careful surface preparation, priming, and block-sanding before paint application',
      'Thorough post-repair inspection for panel alignment and finish consistency',
    ],
    processSteps: [
      { title: 'Damage & Panel Inspection', desc: 'Assess dent depth, paint condition, panel gaps, and required bodywork scope.' },
      { title: 'Scope & Estimate Approval', desc: 'Review panel list, repair method, and estimated turnaround before work starts.' },
      { title: 'Metalwork & Surface Prep', desc: 'Reshape damaged metal, treat surface rust, apply primer, and level panels smooth.' },
      { title: 'Color Match & Refinishing', desc: 'Mix matched color code, apply basecoat and clear coat, and blend adjacent areas as needed.' },
      { title: 'Curing & Finish Inspection', desc: 'Polish cured panels, check alignment and color consistency, and review care tips.' },
    ],
    faqs: [
      {
        question: 'When can a dented panel be repaired instead of replaced?',
        answer: 'Shallow dents, minor door dings, and repairable sheet-metal creases can often be straightened, prepped, and refinished on the original panel. Severe structural creases, torn metal, or cracked mounting points may require panel replacement.',
      },
      {
        question: 'How do you inspect and prepare body panels before painting?',
        answer: 'We check panel alignment and underlying rust, straighten damaged sheet metal, strip loose or failing paint, apply primer, and block-sand surfaces smooth so topcoat adheres evenly.',
      },
      {
        question: 'How is paint color matched, and what affects match consistency?',
        answer: 'We reference the vehicle paint code and test-match against existing panels, considering sun fade and metallic flake orientation. Blending adjacent areas may be discussed when weathered paint differs from factory codes.',
      },
      {
        question: 'What steps help achieve a clean, consistent paint finish?',
        answer: 'Thorough surface cleaning, rust removal, proper primer adhesion, block-sanding, accurate color matching, and post-cure polishing all help repaired panels match adjacent factory paintwork smoothly.',
      },
      {
        question: 'How is surface rust handled if found under damaged paint?',
        answer: 'Affected areas are cleaned down to sound metal and treated with primer before filler or color coats are applied, reducing the chance of bubbling returning later.',
      },
      {
        question: 'What determines body repair and paint pricing and turnaround?',
        answer: 'Pricing and timeframe depend on the number of damaged panels, dent severity, bumper or trim replacement needs, paint type (solid, metallic, or pearl), and curing time.',
      },
    ],
    seo: {
      seoTitle: 'Car Body Repair, Denting & Paint Islamabad | HyperTune Garage',
      metaDescription: 'Exterior dent repair, collision bodywork, panel preparation and paint refinishing in Islamabad & Rawalpindi. Book a bodywork inspection and estimate today.',
      h1Heading: 'Car Body Repair, Denting & Paint Refinishing in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car Body Repair Islamabad',
        'Denting & Paint Rawalpindi',
        'Exterior Dent Repair Islamabad',
        'Car Paint Refinishing',
        'Collision Bodywork Islamabad',
      ],
      keywordParagraph: 'Restore dented panels, scrapes, and faded clear coat with car body repair, denting, and paint refinishing at HyperTune Garage in Islamabad & Rawalpindi. Pair freshly refinished panels with Vehicle Wrap, Body Modification, or Paint Protection Film (PPF).',
    },
  },

  {
    id: 'body-modification',
    slug: 'body-modification',
    title: 'Body Modification',
    shortDesc: 'Appearance-focused exterior and interior vehicle modification in Islamabad & Rawalpindi with fitment checks and clean installation.',
    fullDesc: 'HyperTune Garage handles appearance-focused exterior and interior vehicle modification at our Sector O-9 workshop for Islamabad and Rawalpindi owners. From front lips, side skirts, rear diffusers, spoilers, and grille updates to body-kit fitment and trim styling, every aftermarket part varies by vehicle trim and material. We assess compatibility, sensor clearance, and speed-breaker practicality first, test-fit before painting, and remind owners to verify local road-use and registration rules.',
    subServices: [
      'Exterior Body Kit Fitment',
      'Front Lips, Skirts & Diffusers',
      'Spoilers & Grille Upgrades',
      'Interior & Exterior Trim Styling',
      'Fitment & Paint Coordination',
    ],
    subServicePrices: [
      { name: 'Body Modification', price: 'PKR 5,000 to 300,000' }
    ],
    category: 'modification',
    icon: 'Wrench',
    image: images.serviceBodyMod,
    priceRange: 'PKR 5,000 - PKR 300,000',
    estimatedTime: '2 - 7 Days',
    isFeatured: true,
    relatedServiceSlugs: ['body-repair-paint', 'vehicle-wrap', 'inspection-diagnostics'],
    symptoms: [
      'Updating stock exterior appearance with body kits, lips, skirts, or diffusers',
      'Fitting a rear spoiler, replacement grille, or exterior/interior trim upgrade',
      'Resolving poor panel gaps or loose fitment on customer-supplied styling parts',
      'Checking parking-sensor clearance and ground height before mounting aero trim',
    ],
    keyBenefits: [
      'Fitment Assessment First: Test-fit aftermarket kits before drilling or painting panels',
      'Trim & Sensor Care: Check parking sensors, cameras, and mounting points during planning',
      'Coordinated Paint Finishing: Color-match paintable body-kit pieces prior to installation',
      'Practical Road Guidance: Review ground clearance for speed breakers and steep ramps',
    ],
    whyChooseUs: [
      'Vehicle-specific compatibility checks before installation at our Sector O-9, Islamabad hub',
      'Honest advice on part quality, panel gaps, ground clearance, and road-use rules',
      'Written estimate covering fitment, trimming, paint prep, and mounting scope',
      'Post-installation fastening, alignment, and sensor check prior to handover',
    ],
    processSteps: [
      { title: 'Compatibility & Clearance Review', desc: 'Inspect vehicle trim, aftermarket part quality, sensor locations, and ground clearance.' },
      { title: 'Dry Test-Fitment Check', desc: 'Mock-fit body-kit components against factory panels to check gaps and brackets.' },
      { title: 'Trimming & Surface Prep', desc: 'Adjust mounting edges where needed and prepare paintable surfaces cleanly.' },
      { title: 'Paint & Secure Mounting', desc: 'Color-match paintable parts if required and mount using appropriate fasteners.' },
      { title: 'Sensor & Finish Inspection', desc: 'Check panel alignment, fastener security, and parking-sensor operation on delivery.' },
    ],
    faqs: [
      {
        question: 'What exterior and interior vehicle modifications do you handle?',
        answer: 'We focus on visual and styling upgrades such as body kits, front lips, side skirts, rear diffusers, spoilers, grille swaps, and interior or exterior trim enhancements—planned around your specific vehicle model.',
      },
      {
        question: 'Do aftermarket body kits fit every vehicle trim without adjustments?',
        answer: 'No. Aftermarket fiberglass, ABS, and composite parts vary in molding accuracy and trim compatibility (such as facelift bumpers or sensor cutouts). We test-fit parts first before painting or permanent mounting.',
      },
      {
        question: 'How do speed breakers and ground clearance affect front lips and body kits?',
        answer: 'Low front splitters and side skirts reduce approach clearance over steep ramps and Islamabad/Rawalpindi speed breakers. We discuss clearance trade-offs before installation so you can choose a practical profile.',
      },
      {
        question: 'Are all vehicle modifications street-legal in Islamabad and Rawalpindi?',
        answer: 'Not every modification is permitted for public road use. Exterior width changes, lighting alterations, or color changes may be subject to local traffic and excise/registration rules, which owners should verify beforehand.',
      },
      {
        question: 'Can body-kit pieces be painted to match my vehicle before installation?',
        answer: 'Yes. Unpainted ABS or fiberglass pieces can be prepped, primed, and painted to match your car color before final mounting, or finished in gloss black or trim accents as requested.',
      },
      {
        question: 'What factors affect vehicle modification cost and turnaround time?',
        answer: 'Cost and timeframe depend on part material, how much trimming or bracket work test-fitting reveals, whether painting is needed, and sensor or trim reassembly.',
      },
    ],
    seo: {
      seoTitle: 'Vehicle Modification & Styling Islamabad | HyperTune Garage',
      metaDescription: 'Appearance-focused exterior and interior vehicle modification in Islamabad & Rawalpindi with fitment checks and clean installation. Book a consultation.',
      h1Heading: 'Vehicle Modification & Custom Styling in Islamabad & Rawalpindi',
      targetKeywords: [
        'Vehicle Modification Islamabad',
        'Car Styling Rawalpindi',
        'Body Kit Fitment',
        'Spoilers & Diffusers',
        'Custom Car Trim Islamabad',
      ],
      keywordParagraph: 'Plan clean, well-fitted exterior and interior styling upgrades at HyperTune Garage in Islamabad & Rawalpindi. Coordinate body-kit fitment smoothly with Body Repair & Paint, Car Vinyl Wrap, or Inspection & Diagnostics.',
    },
  },

  {
    id: 'car-ac-repair',
    slug: 'car-ac-repair',
    title: 'AC Repair & Electrical Specialist',
    shortDesc: 'Car AC diagnostics, leak testing, compressor repair, charging-system checks, and wiring fault tracing in Islamabad & Rawalpindi.',
    fullDesc: 'Summer heat across Islamabad and Rawalpindi exposes AC leaks, worn compressors, clogged condensers, and charging-system strain. At HyperTune Garage in Sector O-9, Islamabad, we diagnose AC cooling loss, electrical controls, alternators, starter motors, batteries, and wiring faults using pressure, leak, and circuit testing. Because different vehicles use different refrigerants and oils, we match vehicle-specific requirements rather than applying blanket specs, and verify cooling and charging performance after repair.',
    subServices: [
      'AC Inspection & Leak Testing',
      'Vehicle-Specific Refrigerant Service',
      'Compressor, Condenser & Evaporator Repair',
      'Battery, Alternator & Starter Checks',
      'Electrical Fault Tracing & Wiring Repair',
      'Module & Climate-Control Diagnostics',
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
    relatedServiceSlugs: ['inspection-diagnostics', 'cooling-fuel-exhaust', 'maintenance-servicing'],
    symptoms: [
      'AC blowing warm, weak, or inconsistent air in traffic or idle',
      'Clicking, whining, or grinding noises when the AC compressor engages',
      'Musty vent smell, poor blower airflow, or dampness in passenger footwells',
      'Overnight battery discharge, slow engine cranking, or battery warning light',
      'Intermittent windows, locks, lights, cooling fans, or electrical warning alerts',
    ],
    keyBenefits: [
      'Leak Testing Before Recharge: Pinpoint evaporator, condenser, or seal leaks before refilling',
      'Vehicle-Specific Specs: Match refrigerant and compressor oil to your exact vehicle label',
      'Complete Charging Audit: Test battery health, alternator output, and starter draw together',
      'Targeted Wiring Tracing: Isolate short circuits, parasitic drains, and sensor faults cleanly',
      '12-Month Written Parts Warranty available on eligible replacement parts per invoice terms',
    ],
    whyChooseUs: [
      'AC and auto-electrical diagnostics under one roof in Sector O-9, Islamabad',
      'No blind gas top-ups without checking for system leaks and condenser airflow first',
      'Itemized estimate approved before dashboard removal, compressor work, or wiring repair',
      'Post-repair vent cooling check, leak check, and charging-load verification',
    ],
    processSteps: [
      { title: 'Cooling & Electrical Intake', desc: 'Check vent temperature, AC clutch engagement, battery voltage, and warning lights.' },
      { title: 'Leak & Circuit Testing', desc: 'Inspect pressures, trace refrigerant leaks, or run parasitic-draw and circuit tests.' },
      { title: 'Specification & Quote Review', desc: 'Confirm required refrigerant spec, damaged AC or electrical parts, and estimate.' },
      { title: 'AC or Electrical Repair', desc: 'Repair leaks, service compressor/evaporator, or fix wiring, alternator, or starter faults.' },
      { title: 'Post-Repair Verification', desc: 'Verify steady cabin cooling, leak tightness, and stable charging under electrical load.' },
    ],
    faqs: [
      {
        question: 'Why does my car AC stop cooling soon after a gas refill?',
        answer: 'Refrigerant does not get consumed during normal AC operation. If cooling fades quickly, a leak in the evaporator coil, condenser, hoses, or compressor seals must be located and repaired before recharging.',
      },
      {
        question: 'Do all vehicles use the same AC refrigerant and compressor oil?',
        answer: 'No. Vehicles specify different refrigerant types and compressor oils—including dedicated non-conductive oils for many hybrid and EV compressors. We check your vehicle specification before servicing.',
      },
      {
        question: 'How do you trace overnight battery drain and electrical wiring faults?',
        answer: 'We test battery health and alternator charging first, then measure sleep-mode current draw across fused circuits and inspect wiring, switches, and modules to isolate the active drain or fault.',
      },
      {
        question: 'What AC components are inspected when cooling drops in Islamabad summer traffic?',
        answer: 'Beyond refrigerant level, weak cooling at idle often involves condenser airflow, radiator cooling fans, compressor valve performance, expansion valves, or a clogged cabin filter.',
      },
      {
        question: 'What affects AC and auto-electrical repair pricing and turnaround?',
        answer: 'Cost and timeframe depend on whether the job involves a routine leak check and recharge, dashboard removal for an evaporator coil, compressor replacement, or complex wiring fault tracing.',
      },
      {
        question: 'What warranty applies to replacement AC and electrical parts?',
        answer: 'Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer\'s or supplier\'s warranty terms, component eligibility and applicable conditions. Exact coverage is confirmed on the service estimate and final invoice. Labour, consumables and unrelated components are not automatically covered.',
      },
    ],
    seo: {
      seoTitle: 'Car AC & Auto Electrical Repair Islamabad | HyperTune Garage',
      metaDescription: 'Car AC diagnostics, leak testing, compressor service and auto electrical repair in Islamabad & Rawalpindi for weak cooling or battery drain. Book today.',
      h1Heading: 'Car AC & Auto Electrical Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Car AC Repair Islamabad',
        'Auto Electrical Repair Rawalpindi',
        'AC Leak & Compressor Service',
        'Battery Drain & Alternator Check',
        'Car Wiring Diagnostics',
      ],
      keywordParagraph: 'Diagnose weak AC cooling, refrigerant leaks, charging problems, and wiring faults at HyperTune Garage in Islamabad & Rawalpindi. Combine AC and electrical care with Inspection & Diagnostics, Cooling, Fuel & Exhaust, or Maintenance & Servicing.',
    },
  },

  {
    id: 'cooling-fuel-exhaust',
    slug: 'cooling-fuel-exhaust',
    title: 'Cooling System, Fuel Injection & Exhaust',
    shortDesc: 'Chemical radiator flushing, coolant leak checks, injector cleaning, catalytic converter cleaning, and exhaust repair in Islamabad & Rawalpindi.',
    fullDesc: 'Heavy traffic and hot summers in Islamabad and Rawalpindi quickly expose weak cooling components, fouled fuel injectors, and clogged catalytic converters. At HyperTune Garage in Sector O-9, Islamabad, we provide chemical radiator flushing, radiator and thermostat service, fuel injector cleaning, catalytic converter cleaning, and exhaust leak repairs to resolve overheating, poor drivability, and emissions warning faults. Every inspection and repair recommendation matches your specific vehicle setup before work proceeds.',
    subServices: [
      'Chemical Radiator Flushing & Leak Checks',
      'Thermostat, Fan & Water Pump Care',
      'Fuel Injector Cleaning & Delivery Checks',
      'Catalytic Converter Cleaning & Exhaust Repair',
      'O2 & Emissions Sensor Inspection',
    ],
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
    relatedServiceSlugs: ['engine-services', 'car-ac-repair', 'maintenance-servicing'],
    symptoms: [
      'Temperature gauge rising in traffic, coolant boiling, or frequent coolant top-ups',
      'Visible coolant drips, swollen hoses, or cooling fans failing to engage',
      'Hard starting, hesitation under throttle, misfires, or sluggish fuel delivery',
      'Loud exhaust noise, underbody rattling, exhaust fumes, or sulfur odors',
      'Check-engine warnings linked to cooling performance, fuel trim, or O2/catalyst signals',
    ],
    keyBenefits: [
      'Chemical Radiator Flushing: Remove scale and rust buildup across radiators, hoses, and heater cores',
      'Fuel Injector Cleaning: Service clogged fuel injectors and test fuel pumps and filters together',
      'Catalytic Converter Cleaning: Clean restricted exhaust catalysts and inspect manifold/pipe leaks',
      'Vehicle-Specific Fluids: Use coolant types aligned with your engine manufacturer specs',
    ],
    whyChooseUs: [
      'Integrated cooling, fuel, and exhaust checks at our Sector O-9, Islamabad workshop',
      'Pinpoint root causes before replacing radiators, pumps, injectors, or converters',
      'Clear estimate and explanation before starting repairs or ordering parts',
      'Post-repair leak, temperature, and road checks before handover',
    ],
    processSteps: [
      { title: 'Symptom & System Intake', desc: 'Log overheating triggers, starting hesitation, exhaust noises, or warning lights.' },
      { title: 'Cooling & Leak Inspection', desc: 'Inspect radiator, hoses, reservoir cap, thermostat operation, and fan engagement.' },
      { title: 'Fuel & Exhaust Assessment', desc: 'Assess fuel delivery, injector flow behavior, catalytic converter restriction, and sensor readings.' },
      { title: 'Cleaning, Flush or Repair', desc: 'Perform chemical radiator flushing, injector cleaning, catalytic converter cleaning, or targeted component repair.' },
      { title: 'Temperature & Operation Check', desc: 'Bleed cooling circuits properly and verify operating temperature, leaks, and idle.' },
    ],
    faqs: [
      {
        question: 'What causes engine overheating or recurring coolant loss in Islamabad traffic?',
        answer: 'Common causes include leaking hoses or radiator seams, a failing radiator cap, stuck thermostat, weak water pump, clogged radiator core, or cooling fan faults. Inspecting the whole circuit prevents repeat overheating.',
      },
      {
        question: 'Why should proper automotive coolant be used instead of tap water?',
        answer: 'Plain tap water promotes rust, mineral scale inside radiator tubes, and earlier boiling under load. Using proper vehicle-compatible coolant protects cooling passages and pump components.',
      },
      {
        question: 'What symptoms suggest fuel pump, fuel filter, or injector issues?',
        answer: 'Long cranking, hesitation during acceleration, rough idling, stalling under load, or fuel-trim fault codes can point to fuel-delivery restrictions or fouled injectors that need inspection.',
      },
      {
        question: 'How do exhaust leaks or blocked catalytic converters affect a vehicle?',
        answer: 'Exhaust leaks create cabin noise, fumes, and false oxygen-sensor readings, while a restricted catalytic converter chokes exhaust flow, reduces power, and triggers catalyst warning codes.',
      },
      {
        question: 'When is cooling-system repair enough versus deeper engine repair?',
        answer: 'If overheating is caught before cylinder-head gasket damage occurs, fixing the radiator, thermostat, fan, or leak solves it. Persistent pressure or coolant mixing in oil needs engine-level assessment.',
      },
      {
        question: 'What affects the price and turnaround time for cooling, fuel, or exhaust work?',
        answer: 'Costs and duration depend on which component failed, accessibility on your engine layout, whether cleaning or part replacement is needed, and coolant bleeding verification.',
      },
    ],
    seo: {
      seoTitle: 'Cooling, Fuel & Exhaust Repair Islamabad | HyperTune Garage',
      metaDescription: 'Engine cooling, fuel delivery and exhaust inspection and repair in Islamabad & Rawalpindi for overheating, fuel issues or exhaust leaks. Book a visit.',
      h1Heading: 'Cooling, Fuel & Exhaust System Repair in Islamabad & Rawalpindi',
      targetKeywords: [
        'Cooling System Repair Islamabad',
        'Radiator & Thermostat Service',
        'Fuel Injector & Pump Care',
        'Exhaust Repair Rawalpindi',
        'Overheating Diagnosis',
      ],
      keywordParagraph: 'Address engine overheating, coolant leaks, fuel-delivery hesitation, and exhaust faults at HyperTune Garage in Islamabad & Rawalpindi. Coordinate repairs seamlessly with Engine Services, Inspection & Diagnostics, or Maintenance & Servicing.',
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

