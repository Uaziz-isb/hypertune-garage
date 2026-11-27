import { LocationItem } from '../types';
import { images } from './images';
import { getRouteMetadata } from './metadataRegistry';

const baseLocationsData: LocationItem[] = [
  {
    id: 'islamabad-hub',
    slug: 'islamabad-workshop',
    city: 'Islamabad',
    branchName: 'HyperTune Garage - Islamabad Flagship Hub',
    isOperational: true,
    statusBadge: 'Open & Operating',
    address: 'Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation, Islamabad, 44000, Pakistan',
    area: 'Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation, Islamabad, 44000, Pakistan',
    phone: '+92 333 0177717',
    whatsapp: '923330177717',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.215!2d73.1345365!3d33.5622113!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede5eabd2d83%3A0xf3b2d99386f26b69!2sHyperTune%20Garage!5e1!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk&maptype=satellite',
    googleMapsDirectionsUrl: 'https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed',
    hours: {
      weekdays: '10:00 AM - 10:00 PM (Sat - Thu)',
      friday: 'CLOSED (Weekly Holiday)',
      saturday: '10:00 AM - 10:00 PM',
      sunday: '10:00 AM - 10:00 PM',
    },
    workshopSpecs: [
      'Computerized PPF CAD Plotter & Indoor Wrap Studio Bay',
      'Dedicated Mechanical, Engine & Undercarriage Service Bays',
      'Computerized Wheel Alignment Station',
      'Indoor Ceramic Coating & PPF Application Bay',
      'Dedicated Automotive Electronics & Computerized Diagnostics Lab',
      'Dedicated Customer Waiting Area',
    ],
    landmarks: ['Central Avenue', 'Block E Police Foundation', 'Sector O-9 Islamabad'],
    managerName: 'HyperTune Workshop Team',
    image: images.workshopIslamabad,
    imageSmall: images.workshopIslamabad500w,
  },
  {
    id: 'rawalpindi-hub',
    slug: 'rawalpindi-workshop',
    city: 'Rawalpindi',
    branchName: 'HyperTune Garage - Rawalpindi Hub',
    isOperational: false,
    statusBadge: 'Coming Soon',
    statusNotice: 'Rawalpindi Hub — Coming Soon. Currently serving Rawalpindi customers through our Islamabad Flagship Hub, with transport assistance subject to confirmation upon booking.',
    phone: '+92 333 0177717',
    whatsapp: '923330177717',
    workshopSpecs: [
      'Planned PPF & Detailing Studio Bays (Coming Soon)',
      'Planned Mechanical & Engine Overhaul Bays (Coming Soon)',
      'Planned Computerized Wheel Alignment & Diagnostics (Coming Soon)',
      'Planned Customer Waiting Area (Coming Soon)',
    ],
    managerName: 'HyperTune Project Development Team',
    image: images.workshopRawalpindi,
    imageSmall: images.workshopRawalpindi500w,
  },
];

export const locationsData: LocationItem[] = baseLocationsData.map((l) => {
  const meta = getRouteMetadata(`/locations/${l.slug}/`);
  return {
    ...l,
    seo: {
      title: meta ? meta.title : `${l.branchName} | HyperTune Garage`,
      description: meta ? meta.description : `${l.branchName} - ${l.address || 'Islamabad & Rawalpindi'}`,
    },
  };
});
