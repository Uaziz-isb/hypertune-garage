export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'brands'
  | 'brand-detail'
  | 'locations'
  | 'location-detail'
  | 'blog'
  | 'blog-post'
  | 'booking'
  | 'gallery'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'warranty'
  | 'sitemap';

export interface BrandItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  logoBadge: string;
  heroImage: string;
  overview: string;
  modelsCovered: string[];
  diagnosticSoftware: string;
  commonIssuesAndFixes: { issue: string; solution: string }[];
  specializedServices: string[];
  pricingRange: string;
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface SectorItem {
  id: string;
  slug: string;
  name: string;
  areaName: string;
  city: 'Islamabad' | 'Rawalpindi';
  description: string;
  travelTimeFromHub: string;
  valetServiceAvailable: boolean;
  popularVehiclesInArea: string[];
  landmarks: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subServices: string[];
  subServicePrices?: { name: string; price: string }[];
  category: 'engine' | 'maintenance' | 'suspension' | 'transmission' | 'diagnostics' | 'protection' | 'detailing' | 'wrap' | 'body' | 'modification' | 'hybrid' | 'tuning' | 'electrical';
  icon: string;
  image: string;
  priceRange: string;
  estimatedTime: string;
  symptoms: string[];
  keyBenefits: string[];
  whyChooseUs: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
  seo: {
    seoTitle: string;
    metaDescription: string;
    h1Heading: string;
    targetKeywords: string[];
    keywordParagraph?: string;
  };
}

export interface LocationItem {
  id: string;
  slug: string;
  city: 'Islamabad' | 'Rawalpindi';
  branchName: string;
  isOperational: boolean;
  statusBadge?: string;
  statusNotice?: string;
  address?: string;
  area?: string;
  phone?: string;
  whatsapp?: string;
  googleMapEmbedUrl?: string;
  googleMapsDirectionsUrl?: string;
  hours?: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  workshopSpecs?: string[];
  landmarks?: string[];
  managerName?: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Maintenance Tips' | 'Engine Care' | 'PPF & Paint Protection' | 'PPF & PPS Protection' | 'Popular Brands' | 'German Cars' | 'Hybrid Tech' | 'Buyer Guides';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  relatedServices: string[];
}

export interface ReviewItem {
  id: string;
  customerName: string;
  vehicle: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  verified: boolean;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Engine Overhaul' | 'PPF & PPS Studio' | 'German Repair' | 'Ceramic & PPF' | 'Suspension & Brakes' | 'Hybrid Battery' | 'Popular Brands Repair' | 'Transmission & Gearbox';
  image: string;
  vehicle: string;
  description: string;
}

export interface DiagnosticResult {
  likelyIssues: string[];
  urgencyLevel: 'High' | 'Medium' | 'Low';
  estimatedTimeHours: string;
  recommendedServices: string[];
  diagnosticAdvice: string;
  safetyWarning?: string | null;
}

export interface BookingState {
  step: number;
  vehicleMake: string;
  vehicleModel: string;
  year: string;
  licensePlate?: string;
  selectedServices: string[];
  customIssues: string;
  locationId: string;
  preferredDate: string;
  preferredTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupRequired: boolean;
  pickupAddress?: string;
}
