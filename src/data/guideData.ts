export interface ServiceGuideInfo {
  slug: string;
  title: string;
  desc: string;
  buttonText: string;
}

export const serviceGuideMap: Record<string, ServiceGuideInfo> = {
  'paint-protection-film-ppf': {
    slug: 'ceramic-coating-vs-ppf-pakistan-guide',
    title: 'PPF vs Ceramic Coating in Pakistan: Complete Comparison',
    desc: 'Engineering breakdown of motorway gravel defense, 45°C UV heat resistance, self-healing TPU, and hybrid package setups.',
    buttonText: 'Read Full Paint Protection Guide',
  },
  'car-detailing': {
    slug: 'ceramic-coating-maintenance-guide-pakistan',
    title: 'Ceramic Coating Maintenance & Multi-Stage Paint Correction Guide',
    desc: 'Technical guide on paint micron audits, orbital machine polishing, hard mineral water spot defense, and safe two-bucket washing.',
    buttonText: 'Read Detailing & Ceramic Guide',
  },
  'vehicle-wrap': {
    slug: 'car-vinyl-wrap-guide-pakistan-cost-care',
    title: 'Car Vinyl Wrap Guide Pakistan: Cost, Care & Longevity',
    desc: 'Expert guide to cast vs calendered vinyl films, color change options, seamless edge tucking, 90°C post-heating, and paint preservation.',
    buttonText: 'Read Vehicle Wrap Guide',
  },
  'body-repair-paint': {
    slug: 'car-paint-booth-denting-repair-guide-pakistan',
    title: 'Car Paint Booth & Denting Repair Guide Pakistan',
    desc: 'Discover why dust-free 60°C to 70°C thermal bake spray booths and digital spectrophotometer scanning are vital for factory-standard finishes.',
    buttonText: 'Read Bodyshop & Paint Guide',
  },
  'body-modification': {
    slug: 'car-body-kit-modification-guide-pakistan',
    title: 'Car Body Kit & Modification Guide Pakistan | Styling',
    desc: 'Engineering considerations for ABS plastic vs carbon fiber, speed breaker approach angles, test-fitting protocols, and parking sensor integration.',
    buttonText: 'Read Body Styling Guide',
  },
  'cooling-fuel-exhaust': {
    slug: 'car-overheating-radiator-flush-coolant-guide-pakistan',
    title: 'Car Overheating & Radiator Flush Guide Pakistan',
    desc: 'Prevent summer engine overheating: genuine 50/50 OAT coolant vs tap water, ultrasonic fuel injector spray balancing, and radiator pressure testing.',
    buttonText: 'Read Cooling & Fuel Guide',
  },
  'engine-services': {
    slug: 'engine-overhaul-vs-engine-replacement-pakistan-guide',
    title: 'Engine Overhaul vs Engine Replacement in Pakistan',
    desc: 'Compare precision engine overhauls with imported kabli replacement engines, warranty considerations, machine tolerances, and costs.',
    buttonText: 'Read Engine Overhaul Guide',
  },
  'inspection-diagnostics': {
    slug: 'pre-purchase-car-inspection-checklist-pakistan',
    title: 'Pre-Purchase Car Inspection Checklist Pakistan',
    desc: '200-point inspection guide covering digital paint depth scanning, live OBD data stream audits, chassis frame alignment, and hybrid battery health.',
    buttonText: 'Read Car Inspection Guide',
  },
  'maintenance-servicing': {
    slug: 'synthetic-engine-oil-viscosity-guide-pakistan-heat',
    title: 'Synthetic Engine Oil Viscosity Guide for Pakistan Heat',
    desc: 'Choosing the right oil viscosity (0W-20, 5W-30, 5W-40) under 45°C summer heat, shear stability ratings, and engine wear prevention.',
    buttonText: 'Read Oil Viscosity Guide',
  },
  'brake-suspension-steering': {
    slug: '3d-laser-wheel-alignment-suspension-guide',
    title: '3D Laser Wheel Alignment & Suspension Guide',
    desc: 'Learn how high-precision 3D optical camera alignment measures camber, caster, and toe to 0.01 degrees to eliminate tire wear and highway wander.',
    buttonText: 'Read Suspension & Alignment Guide',
  },
  'transmission-drivetrain': {
    slug: 'audi-dsg-stronic-transmission-shudder-repair-guide',
    title: 'Audi DSG / S-Tronic Transmission Shudder Repair Guide',
    desc: 'Diagnosing dual-clutch transmission shudder, Mechatronics valve body pressure leaks, and solenoid refurbishment versus costly replacements.',
    buttonText: 'Read Transmission Guide',
  },
  'car-ac-repair': {
    slug: 'car-ac-cooling-troubleshooting-pakistan-summer',
    title: 'Car AC Cooling Troubleshooting Guide Pakistan',
    desc: 'Troubleshooting AC compressor solenoid valves, condenser fin cleaning, R134a refrigerant micro-leaks, and cabin airflow restrictions in summer heat.',
    buttonText: 'Read Car AC Guide',
  },
};

export const serviceShortLabels: Record<string, string> = {
  'paint-protection-film-ppf': 'PPF',
  'car-detailing': 'Detailing & Ceramic',
  'engine-services': 'Engine Services',
  'inspection-diagnostics': 'Diagnostics',
  'maintenance-servicing': 'Maintenance & Oil',
  'brake-suspension-steering': 'Brakes & Suspension',
  'transmission-drivetrain': 'Transmission',
  'car-ac-repair': 'AC & Electrical',
  'cooling-fuel-exhaust': 'Cooling & Fuel',
  'vehicle-wrap': 'Vehicle Wrap',
  'body-repair-paint': 'Body Repair & Paint',
  'body-modification': 'Body Modification',
};
