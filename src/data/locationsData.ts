import { LocationItem } from '../types';
import { images } from './images';

export const locationsData: LocationItem[] = [
  {
    id: 'islamabad-g8',
    slug: 'islamabad-workshop-g8',
    city: 'Islamabad',
    branchName: 'HyperTune Garage - Islamabad Flagship Hub',
    isOperational: true,
    statusBadge: 'Fully Operational',
    address: 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan',
    area: 'Block E Police Foundation, Sector O-9, Islamabad',
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
      'Computerized PPF CAD Plotter & Dust-Free Wrap Studio',
      '8 Hydraulic Vehicle Lifts with Low-Profile Ramps',
      'Italian 3D Laser Wheel Alignment Station',
      'Dust-Free 9H Ceramic Coating & PPF Clean Room',
      'Dedicated Automotive Electronics & Computerized Diagnostics Lab',
      'Air-Conditioned VIP Customer Lounge with WiFi & Espresso',
    ],
    landmarks: ['Central Avenue', 'Block E Police Foundation', 'Sector O-9 Islamabad'],
    managerName: 'Engr. Tariq Mahmood (Master Tech lead)',
    image: images.workshopIslamabad,
  },
  {
    id: 'rawalpindi-hub',
    slug: 'rawalpindi-workshop-saddar',
    city: 'Rawalpindi',
    branchName: 'HyperTune Garage - Rawalpindi Hub',
    isOperational: false,
    statusBadge: 'Opening Soon',
    statusNotice: 'Opening soon — our new branch is currently under development. Stay tuned for the official opening announcement.',
    image: images.workshopRawalpindi,
  },
];
