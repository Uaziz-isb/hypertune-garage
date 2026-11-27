import { BlogPost } from '../types';
import { images } from './images';
import { getRouteMetadata } from './metadataRegistry';
import { serviceGuideMap } from './guideData';

const baseBlogData: BlogPost[] = [
  {
    id: 'p0a80-hybrid-battery-repair-guide-pakistan',
    slug: 'p0a80-hybrid-battery-repair-guide-pakistan',
    title: 'P0A80 Error Code: How to Diagnose & Repair Hybrid Battery Failure in Toyota Prius, Aqua & Vezel',
    excerpt: 'Comprehensive guide on diagnosing the P0A80 "Replace Hybrid Battery Pack" error code, individual cell voltage load testing, module rebalancing, and cooling blower maintenance in Pakistan.',
    category: 'Hybrid Tech',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'August 18, 2026',
    readTime: '8 min read',
    featuredImage: images.blogHybridGuide,
    tags: ['P0A80', 'Hybrid Battery Repair', 'Toyota Prius', 'Toyota Aqua', 'Honda Vezel', 'Cell Balancing', 'Islamabad'],
    relatedServices: ['car-ac-repair', 'maintenance-servicing', 'inspection-diagnostics'],
    content: `
      <h2>Diagnosing & Repairing P0A80 Hybrid Battery Failure in Pakistan</h2>
      <p>Comprehensive guide on diagnosing the P0A80 "Replace Hybrid Battery Pack" error code, individual cell voltage load testing, module rebalancing, copper busbar de-oxidation, and cooling blower maintenance in Toyota Prius, Aqua, and Honda Vezel models.</p>
    `,
  },
  {
    id: 'bmw-check-engine-light-drivetrain-malfunction-guide',
    slug: 'bmw-check-engine-light-drivetrain-malfunction-guide',
    title: 'BMW Drivetrain Malfunction & Check Engine Light: Causes, Diagnostic Codes & Fixes in Pakistan',
    excerpt: 'Detailed technical guide explaining BMW Drivetrain Malfunction warnings, Valvetronic sensor drift, VANOS solenoids, electric water pump failures, and computerized diagnostic scanning.',
    category: 'German Cars',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'August 10, 2026',
    readTime: '9 min read',
    featuredImage: images.galleryBmwBrakes,
    tags: ['BMW Repair', 'Drivetrain Malfunction', 'BMW Diagnostics', 'VANOS', 'Valvetronic', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['engine-services', 'inspection-diagnostics', 'cooling-fuel-exhaust'],
    content: `
      <h2>BMW Drivetrain Malfunction Warnings &amp; Computerized Diagnostics</h2>
      <p>Technical troubleshooting guide detailing the BMW "Drivetrain: Check Drive System" error on N20, B48, N55, and B58 engines, resolving ignition coil misfires, VANOS solenoid sludge, Valvetronic motor drift, and electric water pump faults using multi-brand computerized diagnostic scanners.</p>
    `,
  },
  {
    id: 'mercedes-airmatic-suspension-leak-repair-guide',
    slug: 'mercedes-airmatic-suspension-leak-repair-guide',
    title: 'Mercedes-Benz Airmatic Suspension Dropping: Strut Leaks, Compressor Failure & Calibration in Pakistan',
    excerpt: 'How to diagnose and repair sagging Airmatic air suspension, "Car Too Low" warnings, valve block leaks, and air compressor burnout in Mercedes-Benz S-Class, E-Class, and ML/GLE models.',
    category: 'German Cars',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'August 04, 2026',
    readTime: '7 min read',
    featuredImage: images.heroG63Ceramic,
    tags: ['Mercedes Repair', 'Airmatic Suspension', 'Car Too Low', 'Air Suspension Diagnostics', 'S-Class', 'E-Class', 'GLE'],
    relatedServices: ['brake-suspension-steering', 'inspection-diagnostics'],
    content: `
      <h2>Mercedes-Benz Airmatic Suspension Diagnostic & Calibration Guide</h2>
      <p>How our technicians diagnose overnight sagging, "Stop, Car Too Low" cluster warnings, leaking pneumatic solenoid valve blocks, and air compressor burnouts on Mercedes S-Class, E-Class, and GLE models using computerized diagnostic scanners.</p>
    `,
  },
  {
    id: 'audi-dsg-stronic-transmission-shudder-repair-guide',
    slug: 'audi-dsg-stronic-transmission-shudder-repair-guide',
    title: 'Audi DSG / S-Tronic Transmission Jerking & Mechatronic Unit Failure: Causes & Permanent Fixes',
    excerpt: 'Comprehensive troubleshooting guide for Audi S-Tronic (DQ200, DQ250, DL501) Dual-Clutch transmissions: mechatronic valve body rebuild, clutch pack wear, and fluid maintenance in Islamabad.',
    category: 'German Cars',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 26, 2026',
    readTime: '8 min read',
    featuredImage: images.galleryAudiService,
    tags: ['Audi Repair', 'S-Tronic', 'DSG Transmission', 'Mechatronics', 'Audi A4', 'Audi A6', 'Audi Q5'],
    relatedServices: ['transmission-drivetrain', 'inspection-diagnostics'],
    content: `
      <h2>Audi S-Tronic & DSG Transmission Shudder: Engineering Causes & Solutions</h2>
      <p>Complete diagnostic breakdown of low-speed clutch judder, Mechatronic hydraulic accumulator pressure loss, dual-mass flywheel rotational slack, and factory clutch adaptation procedures on Audi DQ200, DQ250, and DL501 dual-clutch transmissions.</p>
    `,
  },
  {
    id: 'ceramic-coating-vs-ppf-pakistan-guide',
    slug: 'ceramic-coating-vs-ppf-pakistan-guide',
    title: 'PPF vs Ceramic Coating in Pakistan: Complete Comparison for Stone Chips, UV & Swirl Protection',
    excerpt: 'Expert comparison between TPU Paint Protection Film and Nano-Ceramic Coatings for Pakistani roads: stone chip defense, UV heat resistance, swirl marks, and hybrid setups.',
    category: 'PPF & Paint Protection',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 11, 2026',
    readTime: '12 min read',
    featuredImage: images.blogPpfGuide,
    tags: ['PPF', 'Ceramic Coating', 'Stone Chips', 'Car Detailing', 'Islamabad'],
    relatedServices: ['paint-protection-film-ppf', 'car-detailing', 'body-repair-paint'],
    content: `
      <h2>PPF vs Ceramic Coating in Pakistan: Complete Protection Analysis</h2>
      <p>Comprehensive engineering comparison between TPU Paint Protection Film (PPF) and Nano-Ceramic Coatings under Pakistani driving conditions: high-speed motorway stone-chip protection, extreme summer heat and solar UV defense, swirl marks, and hybrid protection strategies.</p>
    `,
  },
  {
    id: 'car-ac-cooling-troubleshooting-pakistan-summer',
    slug: 'car-ac-cooling-troubleshooting-pakistan-summer',
    title: 'Car AC Blowing Warm Air in Pakistan: Compressor, Condenser & R134a Gas Troubleshooting',
    excerpt: 'Why automotive air conditioning systems lose cooling power in Pakistani 45°C summers, how to detect refrigerant leaks, and compressor magnetic clutch repairs.',
    category: 'Maintenance Tips',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 03, 2026',
    readTime: '6 min read',
    featuredImage: images.serviceElectrical,
    tags: ['Car AC Repair', 'R134a Gas', 'AC Compressor', 'Summer Heat', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['car-ac-repair', 'cooling-fuel-exhaust'],
    content: `
      <h2>Car AC Cooling Loss in Pakistan Summer: Diagnostic Guide & Solutions</h2>
      <p>Learn why vehicle air conditioning systems struggle under 45°C ambient temperatures, how system pressure testing pinpoints evaporator and condenser leaks, the hazards of contaminated gas, and how to maintain high cabin cooling efficiency.</p>
    `,
  },
  {
    id: 'engine-overhaul-vs-engine-replacement-pakistan-guide',
    slug: 'engine-overhaul-vs-engine-replacement-pakistan-guide',
    title: 'Engine Overhaul vs Kabli/Used Engine Replacement: Cost, Reliability & Warranty in Islamabad',
    excerpt: 'Detailed comparison between rebuilding your original engine to manufacturer specifications versus swapping an imported used (Kabli) engine in Pakistan.',
    category: 'Engine Care',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'June 25, 2026',
    readTime: '8 min read',
    featuredImage: images.heroEngineOverhaul,
    tags: ['Engine Overhaul', 'Kabli Engine', 'Engine Rebuild', 'Engine Repair', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['engine-services', 'inspection-diagnostics'],
    content: `
      <h2>Engine Overhaul vs. Used Kabli Replacement in Pakistan</h2>
      <p>Examine the mechanical risks, legal excise registration hurdles, and true long-term costs of swapping imported scrap-market engines compared to an engine rebuild with workshop machining and a 12-month written parts warranty on eligible replacement parts.</p>
    `,
  },
  {
    id: 'synthetic-engine-oil-viscosity-guide-pakistan-heat',
    slug: 'synthetic-engine-oil-viscosity-guide-pakistan-heat',
    title: 'Choosing the Right Engine Oil (0W-20 vs 5W-30 vs 5W-40) for Extreme Pakistani Temperatures',
    excerpt: 'How to select the perfect synthetic motor oil viscosity for Japanese, German, and local vehicles facing 45°C summer heat in Islamabad and Rawalpindi.',
    category: 'Maintenance Tips',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'June 18, 2026',
    readTime: '7 min read',
    featuredImage: images.blogSummerCooling,
    tags: ['Engine Oil', 'Synthetic Oil', '0W-20', '5W-30', '5W-40', 'Liqui Moly', 'Toyota', 'Honda', 'BMW'],
    relatedServices: ['maintenance-servicing', 'engine-services'],
    content: `
      <h2>Selecting the Correct Engine Oil Viscosity for Pakistan's Extreme Heat</h2>
      <p>Debunking the dangerous "thick oil for hot weather" myth: understanding HTHS viscosity, tight modern bearing clearances, and selecting between 0W-20, 5W-30, and 5W-40 fully synthetic formulations.</p>
    `,
  },
  {
    id: 'pre-purchase-car-inspection-checklist-pakistan',
    slug: 'pre-purchase-car-inspection-checklist-pakistan',
    title: 'Pre-Purchase Used Car Inspection Checklist: Buyer Guide for Islamabad & Rawalpindi',
    excerpt: 'How our automotive inspection technicians detect hidden flood damage, structural chassis welds, odometer discrepancies, and repainted body panels before you buy a used car.',
    category: 'Buyer Guides',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'June 09, 2026',
    readTime: '8 min read',
    featuredImage: images.serviceDiagnostics,
    tags: ['Pre-Purchase Inspection', 'Used Car Inspection', 'Paint Meter', 'OBD2 Scan', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['inspection-diagnostics', 'maintenance-servicing'],
    content: `
      <h2>Pre-Purchase Used Car Inspection Checklist</h2>
      <p>Discover how our inspection technicians uncover hidden flood immersion, structural chassis rail welds, odometer discrepancies, and repainted body panels using paint thickness gauges, computerized OBD live data checks, and undercarriage inspections.</p>
    `,
  },
  {
    id: '3d-laser-wheel-alignment-suspension-guide',
    slug: '3d-laser-wheel-alignment-suspension-guide',
    title: 'Computerized Wheel Alignment vs Traditional Alignment: Preventing Tire Wear on Pakistani Roads',
    excerpt: 'Why computerized wheel alignment is essential for high-speed motorway stability, extended tire life, and steering wheel centering in Islamabad and Rawalpindi.',
    category: 'Maintenance Tips',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'May 30, 2026',
    readTime: '6 min read',
    featuredImage: images.serviceSuspension,
    tags: ['Wheel Alignment', 'Computerized Alignment', 'Tire Wear', 'Suspension', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['brake-suspension-steering', 'maintenance-servicing'],
    content: `
      <h2>Computerized Wheel Alignment & Suspension Geometry Guide</h2>
      <p>Learn how computerized wheel alignment measures camber, caster, and toe angles against manufacturer specs to eliminate highway wander, prevent shoulder tire scrubbing, and restore steering wheel centering on Pakistani roads.</p>
    `,
  },
  {
    id: 'honda-vezel-dual-clutch-transmission-error-guide',
    slug: 'honda-vezel-dual-clutch-transmission-error-guide',
    title: 'Honda Vezel Hybrid Transmission Warning & Clutch Actuator Overheating Solution',
    excerpt: 'How to diagnose and fix the infamous "Transmission Temperature High" warning, replace degraded clutch fluid, and calibrate i-DCD dual-clutch actuators in Pakistan.',
    category: 'Hybrid Tech',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'May 21, 2026',
    readTime: '7 min read',
    featuredImage: images.galleryStronicBox,
    tags: ['Honda Vezel', 'Dual Clutch Transmission', 'i-DCD Hybrid', 'Transmission Warning', 'Islamabad'],
    relatedServices: ['transmission-drivetrain', 'car-ac-repair'],
    content: `
      <h2>Solving Honda Vezel i-DCD Dual-Clutch Overheating Issues</h2>
      <p>Discover the engineering causes behind the Honda Vezel "Transmission Temperature High" warning light in heavy traffic, automated DOT 4 clutch actuator fluid reverse-bleeding, and computerized clutch clearance adaptation protocols.</p>
    `,
  },
  {
    id: 'porsche-maintenance-servicing-guide-pakistan',
    slug: 'porsche-maintenance-servicing-guide-pakistan',
    title: 'Porsche Maintenance & Service Guide: 911, Cayenne, Panamera & Macan in Pakistan',
    excerpt: 'Comprehensive maintenance schedules, PDK transmission oil changes, PASM air suspension care, and computerized diagnostics for Porsche owners in Islamabad and Rawalpindi.',
    category: 'German Cars',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'May 10, 2026',
    readTime: '8 min read',
    featuredImage: images.heroPorscheStudio,
    tags: ['Porsche Service', 'Porsche 911', 'Porsche Cayenne', 'Porsche Macan', 'PDK Transmission', 'Islamabad'],
    relatedServices: ['maintenance-servicing', 'engine-services', 'paint-protection-film-ppf'],
    content: `
      <h2>Porsche Maintenance & Service Guide for Pakistan</h2>
      <p>Essential maintenance protocols for Porsche 911, Cayenne, Panamera, and Macan owners in Pakistan: PDK dual-clutch oil service, PASM air height calibration, cooling valley pipe upgrades, and computerized diagnostic checks.</p>
    `,
  },
  {
    id: 'toyota-land-cruiser-prado-v8-maintenance-guide',
    slug: 'toyota-land-cruiser-prado-v8-maintenance-guide',
    title: 'Toyota Land Cruiser & Prado V8 Maintenance Guide: 1VD-FTV / 3UR-FE Longevity in Pakistan',
    excerpt: 'Essential maintenance practices to support Toyota Land Cruiser LC200/LC300 V8 diesel and petrol engine longevity in Pakistan.',
    category: 'Popular Brands',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'May 02, 2026',
    readTime: '8 min read',
    featuredImage: images.galleryLc300Alignment,
    tags: ['Land Cruiser V8', 'Toyota Prado', '1VD-FTV', 'Diesel Maintenance', '4x4 Overhaul', 'Islamabad'],
    relatedServices: ['engine-services', 'maintenance-servicing', 'cooling-fuel-exhaust'],
    content: `
      <h2>Toyota Land Cruiser & Prado V8 Maintenance in Pakistan</h2>
      <p>Proven maintenance practices to support long-term reliability in Toyota Land Cruiser LC200/LC300 V8 diesel (1VD-FTV) and petrol engines: common-rail fuel filtration, 5W-40 low-SAPS synthetic oil, intercooler cleaning, and transfer case fluid flushes.</p>
    `,
  },
  {
    id: 'car-vinyl-wrap-guide-pakistan-cost-care',
    slug: 'car-vinyl-wrap-guide-pakistan-cost-care',
    title: 'Car Vinyl Wrap Guide Pakistan: Cost, Care & Longevity',
    excerpt: 'Complete guide to vehicle vinyl wrapping in Pakistan: cast vs calendered films under summer sun, edge finishing, paint preservation, and maintenance wash protocols.',
    category: 'PPF & Paint Protection',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 18, 2026',
    readTime: '9 min read',
    featuredImage: images.serviceWrap,
    tags: ['Car Wrap', 'Vinyl Wrap', 'Color Change', 'Cast Vinyl', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['vehicle-wrap', 'paint-protection-film-ppf', 'body-modification'],
    content: `
      <h2>Vehicle Vinyl Wrapping in Pakistan: Complete Styling & Paint Preservation</h2>
      <p>Transform your vehicle's aesthetic with high-grade cast vinyl wrapping. Explore how cast films endure Pakistani summer heat, clean surface preparation and edge finishing, and essential maintenance protocols to avoid clear coat damage.</p>
    `,
  },
  {
    id: 'car-paint-booth-denting-repair-guide-pakistan',
    slug: 'car-paint-booth-denting-repair-guide-pakistan',
    title: 'Car Denting & Paint Repair Guide Pakistan',
    excerpt: 'How conventional dent repair, panel preparation, paint matching, and clear-coat refinishing restore damaged vehicle bodywork in Pakistan.',
    category: 'PPF & Paint Protection',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 20, 2026',
    readTime: '10 min read',
    featuredImage: images.servicePaint,
    tags: ['Car Denting', 'Body Repair', 'Color Matching', 'Paint Refinishing', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['body-repair-paint', 'paint-protection-film-ppf', 'body-modification'],
    content: `
      <h2>Car Denting, Panel Preparation &amp; Paint Refinishing</h2>
      <p>Explore how structured damage assessment, metalwork, surface priming, color matching, and clear-coat polishing restore exterior panels and protect finish consistency in Pakistan.</p>
    `,
  },
  {
    id: 'car-body-kit-modification-guide-pakistan',
    slug: 'car-body-kit-modification-guide-pakistan',
    title: 'Car Body Kit & Modification Guide Pakistan | Styling',
    excerpt: 'Comprehensive guide to car body styling in Pakistan: ABS plastic vs carbon fiber, speed breaker clearance, bumper fitment, and paint matching.',
    category: 'Maintenance Tips',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 22, 2026',
    readTime: '8 min read',
    featuredImage: images.serviceBodyMod,
    tags: ['Body Kit', 'Car Modification', 'Carbon Fiber', 'Front Lip', 'Diffuser', 'Islamabad'],
    relatedServices: ['body-modification', 'body-repair-paint', 'vehicle-wrap'],
    content: `
      <h2>Automotive Aerodynamics & Custom Body Modification in Pakistan</h2>
      <p>Explore material selection between ABS plastic, carbon fiber, and FRP composites, navigating Islamabad and Rawalpindi speed breakers, pre-fit testing protocols, and integrating parking radar sensors seamlessly.</p>
    `,
  },
  {
    id: 'ceramic-coating-maintenance-guide-pakistan',
    slug: 'ceramic-coating-maintenance-guide-pakistan',
    title: 'Ceramic Coating Maintenance Guide Pakistan | Detailing',
    excerpt: 'Expert guide to maintaining ceramic coatings in Pakistan: multi-stage paint correction stages, hard water spot etching defense, and safe two-bucket washing.',
    category: 'PPF & Paint Protection',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 24, 2026',
    readTime: '9 min read',
    featuredImage: images.serviceDetailing,
    tags: ['Ceramic Coating', 'Paint Correction', 'Car Detailing', 'Swirl Marks', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['car-detailing', 'paint-protection-film-ppf', 'body-repair-paint'],
    content: `
      <h2>Nano-Ceramic Coating Maintenance & Multi-Stage Paint Correction</h2>
      <p>Learn why paint inspection and dual-action machine correction precede ceramic application, how hard mineral water causes etching, and the two-bucket grit guard washing protocol that helps reduce swirl marks.</p>
    `,
  },
  {
    id: 'car-overheating-radiator-flush-coolant-guide-pakistan',
    slug: 'car-overheating-radiator-flush-coolant-guide-pakistan',
    title: 'Car Overheating & Radiator Flush Guide Pakistan',
    excerpt: 'How to prevent summer engine overheating in Pakistan: proper automotive coolant vs tap water, fuel injector assessment, and radiator pressure testing.',
    category: 'Maintenance Tips',
    author: {
      name: 'HyperTune Garage Editorial Team',
      role: 'Workshop Technical Documentation',
      avatar: images.logo,
    },
    publishedDate: 'July 26, 2026',
    readTime: '9 min read',
    featuredImage: images.serviceCooling,
    tags: ['Car Overheating', 'Radiator Flush', 'OAT Coolant', 'Fuel Injector Cleaning', 'Islamabad', 'Rawalpindi'],
    relatedServices: ['cooling-fuel-exhaust', 'engine-services', 'car-ac-repair'],
    content: `
      <h2>Preventing Engine Overheating in Extreme Pakistani Summer Heat</h2>
      <p>Examine why tap water causes corrosion and scale buildup, the benefits of vehicle-compatible ethylene glycol coolant, fuel injector assessment, and cooling system maintenance.</p>
    `,
  },
];

export const blogData: BlogPost[] = baseBlogData.map((p) => {
  const meta = getRouteMetadata(`/blog/${p.slug}/`);
  return {
    ...p,
    seo: {
      title: meta ? meta.title : `${p.title} | HyperTune Garage`,
      description: meta ? meta.description : p.excerpt,
    },
  };
});

// Set of canonical slugs featured in the dedicated "Service Guides" section
export const serviceGuideSlugs = new Set(Object.values(serviceGuideMap).map((g) => g.slug));

// Dedicated listing dataset for the "Blogs & Articles" section on /blog/
// Excludes all articles that are already represented in Service Guides
export const blogArticlesListingData: BlogPost[] = blogData.filter(
  (post) => !serviceGuideSlugs.has(post.slug)
);

