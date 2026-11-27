// Central Metadata Registry for HyperTune Garage
// 100% Unique, Approved Titles & Meta Descriptions across all 75 canonical routes
// Strict Zero-Regression SEO Policy Compliance

export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
}

export const METADATA_REGISTRY: Record<string, RouteMetadata> = {
  // 1. Homepage
  '/': {
    path: '/',
    title: 'HyperTune Garage | PPF, Detailing, Diagnostics & Tuneup',
    description: 'HyperTune Garage is an Automotive Workshop for PPF, Detailing, Diagnostics, Tune-up, Repair & Care Services Serving Islamabad & Rawalpindi.',
    canonicalUrl: 'https://hypertunegarage.pk/',
  },

  // 2. Core Navigation Pages
  '/about/': {
    path: '/about/',
    title: 'About HyperTune Garage | Automotive Experts Islamabad',
    description: 'Learn about HyperTune Garage, an automotive workshop in Islamabad specializing in diagnostics, repairs, PPF, detailing, servicing and vehicle care.',
    canonicalUrl: 'https://hypertunegarage.pk/about/',
  },
  '/services/': {
    path: '/services/',
    title: 'Car Services in Islamabad | HyperTune Garage',
    description: 'Explore HyperTune Garage automotive services in Islamabad including PPF, detailing, diagnostics, engine repair, servicing, AC, transmission, bodywork and more.',
    canonicalUrl: 'https://hypertunegarage.pk/services/',
  },
  '/brands/': {
    path: '/brands/',
    title: 'Car Brand Specialists in Islamabad | HyperTune Garage',
    description: 'Find specialist repair and servicing for BMW, Mercedes, Audi, Toyota, Honda, Porsche, Kia, Hyundai, BYD, Lexus and more at HyperTune Garage.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/',
  },
  '/locations/': {
    path: '/locations/',
    title: 'HyperTune Garage Locations | Islamabad & Rawalpindi',
    description: 'Find HyperTune Garage service locations in Islamabad and Rawalpindi, including workshop details, contact information and service coverage.',
    canonicalUrl: 'https://hypertunegarage.pk/locations/',
  },
  '/gallery/': {
    path: '/gallery/',
    title: 'Auto Workshop & PPF Gallery | HyperTune Garage',
    description: 'View HyperTune Garage automotive work including PPF installations, detailing, repairs, diagnostics, bodywork and vehicle modifications in Islamabad.',
    canonicalUrl: 'https://hypertunegarage.pk/gallery/',
  },
  '/testimonials/': {
    path: '/testimonials/',
    title: 'Customer Reviews | HyperTune Garage Islamabad',
    description: 'Read customer reviews and experiences with HyperTune Garage for PPF, detailing, diagnostics, repairs, servicing and automotive care in Islamabad.',
    canonicalUrl: 'https://hypertunegarage.pk/testimonials/',
  },
  '/faq/': {
    path: '/faq/',
    title: 'Car Repair & PPF FAQs | HyperTune Garage Islamabad',
    description: 'Find answers about PPF, detailing, car repairs, diagnostics, servicing, warranties, appointments and automotive services at HyperTune Garage.',
    canonicalUrl: 'https://hypertunegarage.pk/faq/',
  },
  '/contact/': {
    path: '/contact/',
    title: 'Contact HyperTune Garage | Auto Workshop Islamabad',
    description: 'Contact HyperTune Garage in Islamabad for automotive repairs, diagnostics, PPF, detailing, servicing and appointments. Call or WhatsApp our team.',
    canonicalUrl: 'https://hypertunegarage.pk/contact/',
  },
  '/book-appointment/': {
    path: '/book-appointment/',
    title: 'Book Car Service in Islamabad | HyperTune Garage',
    description: 'Book an appointment with HyperTune Garage for PPF, detailing, diagnostics, repairs, maintenance, AC service and other automotive services in Islamabad.',
    canonicalUrl: 'https://hypertunegarage.pk/book-appointment/',
  },
  '/blog/': {
    path: '/blog/',
    title: 'Automotive Repair & Car Care Guides | HyperTune Garage',
    description: 'Read technical car care guides, diagnostic advice, maintenance tips, PPF comparisons and vehicle repair insights from HyperTune Garage in Islamabad.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/',
  },
  '/warranty-specs/': {
    path: '/warranty-specs/',
    title: 'Warranty & Service Terms | HyperTune Garage',
    description: 'Review HyperTune Garage warranty coverage, service terms and protection details for automotive repairs, maintenance and selected vehicle services.',
    canonicalUrl: 'https://hypertunegarage.pk/warranty-specs/',
  },
  '/privacy-policy/': {
    path: '/privacy-policy/',
    title: 'Privacy Policy | HyperTune Garage',
    description: 'Read the HyperTune Garage privacy policy covering website usage, information handling and privacy practices.',
    canonicalUrl: 'https://hypertunegarage.pk/privacy-policy/',
  },
  '/terms-conditions/': {
    path: '/terms-conditions/',
    title: 'Terms & Conditions | HyperTune Garage',
    description: 'Review the terms and conditions governing use of the HyperTune Garage website, services, appointments and related information.',
    canonicalUrl: 'https://hypertunegarage.pk/terms-conditions/',
  },
  '/sitemap/': {
    path: '/sitemap/',
    title: 'HTML Sitemap | HyperTune Garage',
    description: 'Browse the HyperTune Garage HTML sitemap to find automotive services, brand specialists, locations, guides and important website pages.',
    canonicalUrl: 'https://hypertunegarage.pk/sitemap/',
  },

  // 3. Specialized Automotive Services (12)
  '/services/paint-protection-film-ppf/': {
    path: '/services/paint-protection-film-ppf/',
    title: 'Paint Protection Film (PPF) Installation Islamabad | HyperTune',
    description: 'Clear Paint Protection Film (PPF) installation in Islamabad & Rawalpindi for full-body or high-impact front panels. Book a consultation at HyperTune Garage.',
    canonicalUrl: 'https://hypertunegarage.pk/services/paint-protection-film-ppf/',
  },
  '/services/car-detailing/': {
    path: '/services/car-detailing/',
    title: 'Car Detailing & Ceramic Coating Islamabad | HyperTune Garage',
    description: 'Interior and exterior car detailing, paint correction and ceramic coating in Islamabad & Rawalpindi. Restore cabin hygiene and paint gloss—book your slot.',
    canonicalUrl: 'https://hypertunegarage.pk/services/car-detailing/',
  },
  '/services/engine-services/': {
    path: '/services/engine-services/',
    title: 'Engine Repair & Overhaul in Islamabad | HyperTune Garage',
    description: 'Engine diagnostics, mechanical repair and complete overhaul in Islamabad & Rawalpindi for overheating, leaks and engine wear. Book an assessment today.',
    canonicalUrl: 'https://hypertunegarage.pk/services/engine-services/',
  },
  '/services/inspection-diagnostics/': {
    path: '/services/inspection-diagnostics/',
    title: 'Car Inspection & Diagnostics in Islamabad | HyperTune Garage',
    description: 'OBD computer diagnostics, warning-light investigation and pre-purchase vehicle inspection in Islamabad & Rawalpindi. Book an accurate fault assessment today.',
    canonicalUrl: 'https://hypertunegarage.pk/services/inspection-diagnostics/',
  },
  '/services/maintenance-servicing/': {
    path: '/services/maintenance-servicing/',
    title: 'Car Maintenance & Servicing in Islamabad | HyperTune Garage',
    description: 'Scheduled car maintenance and preventive servicing in Islamabad & Rawalpindi. Engine oil, filters, fluids, brake, tyre and cooling checks—book your visit.',
    canonicalUrl: 'https://hypertunegarage.pk/services/maintenance-servicing/',
  },
  '/services/brake-suspension-steering/': {
    path: '/services/brake-suspension-steering/',
    title: 'Brake, Suspension & Steering Repair Islamabad | HyperTune',
    description: 'Brake, suspension and steering inspection, repair and wheel alignment in Islamabad & Rawalpindi for noise, vibration or pulling. Schedule a safety check.',
    canonicalUrl: 'https://hypertunegarage.pk/services/brake-suspension-steering/',
  },
  '/services/transmission-drivetrain/': {
    path: '/services/transmission-drivetrain/',
    title: 'Transmission, CVT & DSG Repair Islamabad | HyperTune Garage',
    description: 'Automatic transmission, CVT, DSG and drivetrain diagnostics and repair in Islamabad & Rawalpindi for slipping, jerking or fluid issues. Book your inspection.',
    canonicalUrl: 'https://hypertunegarage.pk/services/transmission-drivetrain/',
  },
  '/services/vehicle-wrap/': {
    path: '/services/vehicle-wrap/',
    title: 'Car Vinyl Wrap & Color Change Islamabad | HyperTune Garage',
    description: 'Full and partial car vinyl wraps in Islamabad & Rawalpindi with careful surface preparation and finish options. Book a wrap consultation at HyperTune Garage.',
    canonicalUrl: 'https://hypertunegarage.pk/services/vehicle-wrap/',
  },
  '/services/body-repair-paint/': {
    path: '/services/body-repair-paint/',
    title: 'Car Body Repair, Denting & Paint Islamabad | HyperTune Garage',
    description: 'Exterior dent repair, collision bodywork, panel preparation and paint refinishing in Islamabad & Rawalpindi. Book a bodywork inspection and estimate today.',
    canonicalUrl: 'https://hypertunegarage.pk/services/body-repair-paint/',
  },
  '/services/body-modification/': {
    path: '/services/body-modification/',
    title: 'Vehicle Modification & Styling Islamabad | HyperTune Garage',
    description: 'Appearance-focused exterior and interior vehicle modification in Islamabad & Rawalpindi with fitment checks and clean installation. Book a consultation.',
    canonicalUrl: 'https://hypertunegarage.pk/services/body-modification/',
  },
  '/services/car-ac-repair/': {
    path: '/services/car-ac-repair/',
    title: 'Car AC & Auto Electrical Repair Islamabad | HyperTune Garage',
    description: 'Car AC diagnostics, leak testing, compressor service and auto electrical repair in Islamabad & Rawalpindi for weak cooling or battery drain. Book today.',
    canonicalUrl: 'https://hypertunegarage.pk/services/car-ac-repair/',
  },
  '/services/cooling-fuel-exhaust/': {
    path: '/services/cooling-fuel-exhaust/',
    title: 'Cooling, Fuel & Exhaust Repair Islamabad | HyperTune Garage',
    description: 'Engine cooling, fuel delivery and exhaust inspection and repair in Islamabad & Rawalpindi for overheating, fuel issues or exhaust leaks. Book a visit.',
    canonicalUrl: 'https://hypertunegarage.pk/services/cooling-fuel-exhaust/',
  },

  // 4. Workshop Locations (2)
  '/locations/islamabad-workshop/': {
    path: '/locations/islamabad-workshop/',
    title: 'Auto Workshop Islamabad | HyperTune Garage',
    description: 'Visit HyperTune Garage\'s Islamabad automotive workshop in Sector O-9 for PPF, detailing, diagnostics, repairs, servicing, AC and vehicle maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/locations/islamabad-workshop/',
  },
  '/locations/rawalpindi-workshop/': {
    path: '/locations/rawalpindi-workshop/',
    title: 'Car Repair & Services for Rawalpindi | HyperTune Garage',
    description: 'HyperTune Garage serves Rawalpindi with auto repair, diagnostics, PPF, detailing and servicing via our Islamabad flagship hub and scheduled service support.',
    canonicalUrl: 'https://hypertunegarage.pk/locations/rawalpindi-workshop/',
  },

  // 5. Technical Blog Guides (18)
  '/blog/p0a80-hybrid-battery-repair-guide-pakistan/': {
    path: '/blog/p0a80-hybrid-battery-repair-guide-pakistan/',
    title: 'P0A80 Hybrid Battery Fault: Causes & Repair Guide Pakistan',
    description: 'Learn what the P0A80 hybrid battery fault means, common causes, diagnostic steps and repair considerations for hybrid vehicles in Pakistan.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/p0a80-hybrid-battery-repair-guide-pakistan/',
  },
  '/blog/bmw-check-engine-light-drivetrain-malfunction-guide/': {
    path: '/blog/bmw-check-engine-light-drivetrain-malfunction-guide/',
    title: 'BMW Drivetrain Malfunction: Causes & Repair Guide',
    description: 'Learn what BMW drivetrain malfunction and check-engine warnings mean, common causes, diagnostics and repair options for BMW owners in Pakistan.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/bmw-check-engine-light-drivetrain-malfunction-guide/',
  },
  '/blog/mercedes-airmatic-suspension-leak-repair-guide/': {
    path: '/blog/mercedes-airmatic-suspension-leak-repair-guide/',
    title: 'Mercedes AIRMATIC Suspension Leak: Causes & Repair Guide',
    description: 'Learn the common causes of Mercedes AIRMATIC suspension leaks, warning signs, diagnostics and repair options before major suspension damage occurs.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/mercedes-airmatic-suspension-leak-repair-guide/',
  },
  '/blog/audi-dsg-stronic-transmission-shudder-repair-guide/': {
    path: '/blog/audi-dsg-stronic-transmission-shudder-repair-guide/',
    title: 'Audi DSG / S-Tronic Shudder: Causes & Repair Guide',
    description: 'Learn why Audi DSG and S-Tronic transmissions shudder, common causes, diagnostic checks, servicing and potential repair solutions.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/audi-dsg-stronic-transmission-shudder-repair-guide/',
  },
  '/blog/ceramic-coating-vs-ppf-pakistan-guide/': {
    path: '/blog/ceramic-coating-vs-ppf-pakistan-guide/',
    title: 'PPF vs Ceramic Coating in Pakistan: Complete Comparison',
    description: 'Compare PPF and ceramic coating in Pakistan for stone chips, UV heat, swirls and daily driving. Discover which protection fits your car and driving priorities.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/ceramic-coating-vs-ppf-pakistan-guide/',
  },
  '/blog/car-ac-cooling-troubleshooting-pakistan-summer/': {
    path: '/blog/car-ac-cooling-troubleshooting-pakistan-summer/',
    title: 'Car AC Not Cooling: Troubleshooting Guide Pakistan',
    description: 'Find common reasons a car AC stops cooling in Pakistan\'s summer, including refrigerant, compressor, condenser, cooling coil and electrical problems.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/car-ac-cooling-troubleshooting-pakistan-summer/',
  },
  '/blog/engine-overhaul-vs-engine-replacement-pakistan-guide/': {
    path: '/blog/engine-overhaul-vs-engine-replacement-pakistan-guide/',
    title: 'Engine Overhaul vs Replacement: Pakistan Guide',
    description: 'Compare engine overhaul and replacement in Pakistan, including symptoms, costs, reliability, repair scope and when each option makes sense.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/engine-overhaul-vs-engine-replacement-pakistan-guide/',
  },
  '/blog/synthetic-engine-oil-viscosity-guide-pakistan-heat/': {
    path: '/blog/synthetic-engine-oil-viscosity-guide-pakistan-heat/',
    title: 'Engine Oil Viscosity Guide for Pakistan\'s Climate',
    description: 'Understand engine oil viscosity grades and how Pakistan\'s heat, driving conditions and vehicle requirements affect the right oil choice.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/synthetic-engine-oil-viscosity-guide-pakistan-heat/',
  },
  '/blog/pre-purchase-car-inspection-checklist-pakistan/': {
    path: '/blog/pre-purchase-car-inspection-checklist-pakistan/',
    title: 'Car Inspection Checklist Before Buying in Pakistan',
    description: 'Use this pre-purchase car inspection checklist to check engine, transmission, suspension, bodywork, electrical systems, diagnostics and accident history.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/pre-purchase-car-inspection-checklist-pakistan/',
  },
  '/blog/3d-laser-wheel-alignment-suspension-guide/': {
    path: '/blog/3d-laser-wheel-alignment-suspension-guide/',
    title: 'Wheel Alignment & Suspension: Complete Guide',
    description: 'Learn how computerized wheel alignment works, common alignment symptoms, suspension problems, tyre wear and when your vehicle needs professional inspection.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/3d-laser-wheel-alignment-suspension-guide/',
  },
  '/blog/honda-vezel-dual-clutch-transmission-error-guide/': {
    path: '/blog/honda-vezel-dual-clutch-transmission-error-guide/',
    title: 'Honda Vezel DCT Error: Causes & Repair Guide',
    description: 'Learn common Honda Vezel dual-clutch transmission errors, symptoms, diagnostic steps, servicing requirements and potential repair solutions.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/honda-vezel-dual-clutch-transmission-error-guide/',
  },
  '/blog/porsche-maintenance-servicing-guide-pakistan/': {
    path: '/blog/porsche-maintenance-servicing-guide-pakistan/',
    title: 'Porsche Maintenance & Service Guide Pakistan',
    description: 'A practical Porsche maintenance guide covering servicing intervals, diagnostics, common maintenance needs and specialist care for Porsche vehicles in Pakistan.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/porsche-maintenance-servicing-guide-pakistan/',
  },
  '/blog/toyota-land-cruiser-prado-v8-maintenance-guide/': {
    path: '/blog/toyota-land-cruiser-prado-v8-maintenance-guide/',
    title: 'Toyota Prado V8 Maintenance Guide Pakistan',
    description: 'Learn key Toyota Land Cruiser Prado V8 maintenance requirements, service intervals, fluids, engine care, suspension checks and common issues.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/toyota-land-cruiser-prado-v8-maintenance-guide/',
  },
  '/blog/car-vinyl-wrap-guide-pakistan-cost-care/': {
    path: '/blog/car-vinyl-wrap-guide-pakistan-cost-care/',
    title: 'Car Vinyl Wrap Guide Pakistan: Cost, Care & Longevity',
    description: 'Complete guide to vehicle vinyl wrapping in Pakistan covering cast vs calendered vinyl, color change options, installation workflow, costs and maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/car-vinyl-wrap-guide-pakistan-cost-care/',
  },
  '/blog/car-paint-booth-denting-repair-guide-pakistan/': {
    path: '/blog/car-paint-booth-denting-repair-guide-pakistan/',
    title: 'Car Denting & Paint Repair Guide Pakistan',
    description: 'Learn how conventional dent repair, panel preparation, color matching and paint refinishing restore damaged vehicle bodywork in Pakistan.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/car-paint-booth-denting-repair-guide-pakistan/',
  },
  '/blog/car-body-kit-modification-guide-pakistan/': {
    path: '/blog/car-body-kit-modification-guide-pakistan/',
    title: 'Car Body Kit & Modification Guide Pakistan | Styling',
    description: 'A practical guide to car body kits and styling in Pakistan covering ABS vs carbon fiber, speed breaker clearance, bumper fitment and paint matching.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/car-body-kit-modification-guide-pakistan/',
  },
  '/blog/ceramic-coating-maintenance-guide-pakistan/': {
    path: '/blog/ceramic-coating-maintenance-guide-pakistan/',
    title: 'Ceramic Coating Maintenance Guide Pakistan | Detailing',
    description: 'Learn how to maintain ceramic coatings in Pakistan, multi-stage paint correction levels, safe two-bucket washing and preventing water-spot etching.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/ceramic-coating-maintenance-guide-pakistan/',
  },
  '/blog/car-overheating-radiator-flush-coolant-guide-pakistan/': {
    path: '/blog/car-overheating-radiator-flush-coolant-guide-pakistan/',
    title: 'Car Overheating & Radiator Flush Guide Pakistan',
    description: 'Prevent summer engine overheating in Pakistan with our complete guide on OAT coolant vs tap water, fuel injector cleaning and radiator flushing.',
    canonicalUrl: 'https://hypertunegarage.pk/blog/car-overheating-radiator-flush-coolant-guide-pakistan/',
  },

  // 6. Brand Specialist Hubs (28)
  '/brands/bmw-repair-islamabad/': {
    path: '/brands/bmw-repair-islamabad/',
    title: 'BMW Repair & Service Islamabad | HyperTune Garage',
    description: 'BMW repair and servicing in Islamabad with computerized fault diagnostics, engine overhauls, VANOS repair, ZF transmission servicing, cooling care and BMW-spec parts.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/bmw-repair-islamabad/',
  },
  '/brands/mercedes-service-islamabad/': {
    path: '/brands/mercedes-service-islamabad/',
    title: 'Mercedes-Benz Service & Repair Islamabad | HyperTune',
    description: 'Mercedes-Benz service and repair in Islamabad with full-system fault diagnostics, AIRMATIC suspension care, 7G/9G-Tronic transmission repair and engine maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/mercedes-service-islamabad/',
  },
  '/brands/audi-repair-islamabad/': {
    path: '/brands/audi-repair-islamabad/',
    title: 'Audi Repair & Service Islamabad | HyperTune Garage',
    description: 'Audi repair and servicing in Islamabad with computerized fault diagnostics, S-Tronic DSG gearbox repairs, TFSI engine overhaul, mechatronic care and Quattro maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/audi-repair-islamabad/',
  },
  '/brands/porsche-repair-islamabad/': {
    path: '/brands/porsche-repair-islamabad/',
    title: 'Porsche Repair & Service Islamabad | HyperTune Garage',
    description: 'Porsche repair and servicing in Islamabad with multi-system fault diagnostics, PDK transmission maintenance, PASM suspension repair and precision engine care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/porsche-repair-islamabad/',
  },
  '/brands/toyota-repair-islamabad/': {
    path: '/brands/toyota-repair-islamabad/',
    title: 'Toyota Repair & Service Islamabad | HyperTune Garage',
    description: 'Toyota repair and servicing in Islamabad with computerized diagnostics, hybrid battery maintenance, engine overhaul, transmission care and Toyota-spec parts.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/toyota-repair-islamabad/',
  },
  '/brands/honda-service-islamabad/': {
    path: '/brands/honda-service-islamabad/',
    title: 'Honda Repair & Service Islamabad | HyperTune Garage',
    description: 'Honda repair and servicing in Islamabad with computerized fault diagnostics, VTEC and turbo engine maintenance, Vezel i-DCD dual-clutch repair and CVT fluid servicing.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/honda-service-islamabad/',
  },
  '/brands/suzuki-repair-islamabad/': {
    path: '/brands/suzuki-repair-islamabad/',
    title: 'Suzuki Repair & Service Islamabad | HyperTune Garage',
    description: 'Suzuki repair and servicing in Islamabad with OBD fault diagnostics, AGS actuator calibration, K-Series engine overhaul, AC repair and periodic maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/suzuki-repair-islamabad/',
  },
  '/brands/hyundai-repair-islamabad/': {
    path: '/brands/hyundai-repair-islamabad/',
    title: 'Hyundai Repair & Service Islamabad | HyperTune Garage',
    description: 'Hyundai repair and servicing in Islamabad with computerized diagnostics, DCT and automatic transmission repair, Smartstream engine maintenance and Hyundai-spec parts.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/hyundai-repair-islamabad/',
  },
  '/brands/kia-repair-islamabad/': {
    path: '/brands/kia-repair-islamabad/',
    title: 'Kia Repair & Service Islamabad | HyperTune Garage',
    description: 'Kia repair and servicing in Islamabad with computerized fault diagnostics, Sportage AWD care, automatic transmission service, engine maintenance and Kia-spec spare parts.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/kia-repair-islamabad/',
  },
  '/brands/changan-repair-islamabad/': {
    path: '/brands/changan-repair-islamabad/',
    title: 'Changan Repair & Service Islamabad | HyperTune Garage',
    description: 'Changan repair and servicing in Islamabad with computerized fault diagnostics, Blue Core turbo maintenance, Alsvin and Oshan X7 DCT transmission servicing.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/changan-repair-islamabad/',
  },
  '/brands/haval-service-islamabad/': {
    path: '/brands/haval-service-islamabad/',
    title: 'Haval Repair & Service Islamabad | HyperTune Garage',
    description: 'Haval repair and servicing in Islamabad with computerized diagnostics, Haval H6 HEV hybrid maintenance, 7-speed wet DCT transmission servicing and complete vehicle care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/haval-service-islamabad/',
  },
  '/brands/mg-repair-islamabad/': {
    path: '/brands/mg-repair-islamabad/',
    title: 'MG Repair & Service Islamabad | HyperTune Garage',
    description: 'MG repair and servicing in Islamabad with computerized fault diagnostics, MG HS turbo engine care, DCT transmission calibration and MG ZS EV electrical checks.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/mg-repair-islamabad/',
  },
  '/brands/byd-ev-service-islamabad/': {
    path: '/brands/byd-ev-service-islamabad/',
    title: 'BYD EV & Hybrid Service Islamabad | HyperTune',
    description: 'BYD EV and hybrid servicing in Islamabad with computerized fault scanning, Blade Battery state-of-health testing, DM-i powertrain care and electrical diagnostics.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/byd-ev-service-islamabad/',
  },
  '/brands/chery-repair-islamabad/': {
    path: '/brands/chery-repair-islamabad/',
    title: 'Chery Repair & Service Islamabad | HyperTune Garage',
    description: 'Chery repair and servicing in Islamabad with computerized fault diagnostics, Tiggo 8 Pro DCT servicing, Tiggo 4 Pro CVT repairs and turbo engine maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/chery-repair-islamabad/',
  },
  '/brands/isuzu-dmax-repair-islamabad/': {
    path: '/brands/isuzu-dmax-repair-islamabad/',
    title: 'Isuzu D-Max Repair Islamabad | HyperTune Garage',
    description: 'Isuzu D-Max repair in Islamabad with computerized diesel diagnostics, 4JJ1 and 4JJ3 turbo diesel engine overhauls, common rail injector care and 4x4 drivetrain service.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/isuzu-dmax-repair-islamabad/',
  },
  '/brands/faw-repair-islamabad/': {
    path: '/brands/faw-repair-islamabad/',
    title: 'FAW Repair & Service Islamabad | HyperTune Garage',
    description: 'FAW repair and servicing in Islamabad with computerized diagnostics, FAW V2 engine overhaul, manual transmission servicing and fleet maintenance solutions.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/faw-repair-islamabad/',
  },
  '/brands/daihatsu-service-islamabad/': {
    path: '/brands/daihatsu-service-islamabad/',
    title: 'Daihatsu Repair & Service Islamabad | HyperTune Garage',
    description: 'Daihatsu repair and servicing in Islamabad with computerized fault diagnostics, Mira Eco-Idle calibration, KF-VE engine overhaul and Amix CVT transmission servicing.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/daihatsu-service-islamabad/',
  },
  '/brands/nissan-repair-islamabad/': {
    path: '/brands/nissan-repair-islamabad/',
    title: 'Nissan Repair & Service Islamabad | HyperTune Garage',
    description: 'Nissan repair and servicing in Islamabad with multi-system fault diagnostics, Xtronic CVT gearbox repairs, e-Power hybrid care and engine maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/nissan-repair-islamabad/',
  },
  '/brands/mitsubishi-repair-islamabad/': {
    path: '/brands/mitsubishi-repair-islamabad/',
    title: 'Mitsubishi Repair & Service Islamabad | HyperTune Garage',
    description: 'Mitsubishi repair and servicing in Islamabad with computerized fault diagnostics, Pajero Super Select 4WD-II overhauls, Outlander PHEV care and engine rebuilds.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/mitsubishi-repair-islamabad/',
  },
  '/brands/mazda-service-islamabad/': {
    path: '/brands/mazda-service-islamabad/',
    title: 'Mazda Repair & Service Islamabad | HyperTune Garage',
    description: 'Mazda repair and servicing in Islamabad with computerized fault diagnostics, SkyActiv engine care, direct injection intake cleaning and SkyActiv-Drive transmission service.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/mazda-service-islamabad/',
  },
  '/brands/subaru-boxer-repair-islamabad/': {
    path: '/brands/subaru-boxer-repair-islamabad/',
    title: 'Subaru Repair & Service Islamabad | HyperTune Garage',
    description: 'Subaru repair and servicing in Islamabad with computerized fault diagnostics, Boxer engine rebuilds, Lineartronic CVT fluid service and Symmetrical AWD maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/subaru-boxer-repair-islamabad/',
  },
  '/brands/lexus-hybrid-repair-islamabad/': {
    path: '/brands/lexus-hybrid-repair-islamabad/',
    title: 'Lexus & Hybrid Repair Islamabad | HyperTune Garage',
    description: 'Lexus and hybrid repair in Islamabad with computerized fault diagnostics, P0A80 hybrid battery balancing, LX570 AHC suspension servicing and V8 engine maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/lexus-hybrid-repair-islamabad/',
  },
  '/brands/land-rover-repair-islamabad/': {
    path: '/brands/land-rover-repair-islamabad/',
    title: 'Land Rover Repair & Service Islamabad | HyperTune',
    description: 'Land Rover repair and servicing in Islamabad with multi-system fault diagnostics, air suspension compressor repair, Terrain Response service and engine care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/land-rover-repair-islamabad/',
  },
  '/brands/range-rover-service-islamabad/': {
    path: '/brands/range-rover-service-islamabad/',
    title: 'Range Rover Repair & Service Islamabad | HyperTune',
    description: 'Range Rover repair and servicing in Islamabad with computerized fault diagnostics, dynamic air suspension repairs, V8 engine service and ZF transmission care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/range-rover-service-islamabad/',
  },
  '/brands/jeep-repair-islamabad/': {
    path: '/brands/jeep-repair-islamabad/',
    title: 'Jeep 4x4 Repair & Service Islamabad | HyperTune',
    description: 'Jeep 4x4 repair and servicing in Islamabad with computerized fault diagnostics, Wrangler steering wobble fix, Pentastar V6 and Hemi V8 engine maintenance.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/jeep-repair-islamabad/',
  },
  '/brands/ford-service-islamabad/': {
    path: '/brands/ford-service-islamabad/',
    title: 'Ford Repair & Service Islamabad | HyperTune Garage',
    description: 'Ford repair and servicing in Islamabad with computerized fault diagnostics, Raptor maintenance, EcoBoost engine rebuilding and 10-speed transmission fluid servicing.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/ford-service-islamabad/',
  },
  '/brands/chevrolet-repair-islamabad/': {
    path: '/brands/chevrolet-repair-islamabad/',
    title: 'Chevrolet Repair & Service Islamabad | HyperTune',
    description: 'Chevrolet repair and servicing in Islamabad with computerized fault diagnostics, Small Block V8 engine rebuilds, Tahoe and Suburban service and transmission care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/chevrolet-repair-islamabad/',
  },
  '/brands/volvo-repair-islamabad/': {
    path: '/brands/volvo-repair-islamabad/',
    title: 'Volvo Repair & Service Islamabad | HyperTune Garage',
    description: 'Volvo repair and servicing in Islamabad with multi-system fault diagnostics, XC90 and XC60 T8 hybrid servicing, Drive-E engine repairs and Four-C air suspension care.',
    canonicalUrl: 'https://hypertunegarage.pk/brands/volvo-repair-islamabad/',
  },
};

export function getRouteMetadata(rawPath: string): RouteMetadata | null {
  const normalized = (rawPath.split('?')[0].split('#')[0] || '/').replace(/^\/?/, '/').replace(/\/?$/, '/');
  return METADATA_REGISTRY[normalized] || null;
}
