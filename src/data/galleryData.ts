import { GalleryItem } from '../types';
import { images } from './images';

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Porsche 911 GT3 & BMW M5 Full Body PPF & PPS Protection',
    category: 'PPF & PPS Studio',
    image: images.ppfHeroBanner,
    vehicle: 'Porsche 911 GT3 / BMW M5',
    description: 'Full body high-gloss self-healing TPU PPF & hydrophobic PPS coating applied in dust-free studio bay.',
  },
  {
    id: 'gal-2',
    title: 'Porsche Cayenne V8 Engine Precision Rebuild',
    category: 'Engine Overhaul',
    image: images.engineOverhaul,
    vehicle: 'Porsche Cayenne Turbo 4.8 V8',
    description: 'Complete cylinder head re-machining, piston ring replacement, and timing gear calibration.',
  },
  {
    id: 'gal-3',
    title: 'Mercedes-Benz AMG G63 9H Ceramic Coating & PPF',
    category: 'Ceramic & PPF',
    image: images.ceramicDetailing,
    vehicle: 'Mercedes-AMG G63',
    description: '3-stage paint correction followed by Gtechniq Ultra 9H Ceramic Coating and clear TPU front PPF.',
  },
  {
    id: 'gal-4',
    title: 'Toyota Land Cruiser LC300 3D Alignment & Suspension',
    category: 'Suspension & Brakes',
    image: images.suspension,
    vehicle: 'Toyota Land Cruiser ZX LC300',
    description: 'Italian 3D laser alignment, Brembo brake upgrade, and electronic shock calibration.',
  },
  {
    id: 'gal-5',
    title: 'Audi A6 Matrix LED & Electrical Module Coding',
    category: 'German Repair',
    image: images.germanCar,
    vehicle: 'Audi A6 3.0 TFSI Quattro',
    description: 'ODIS online coding for body control module and Matrix LED headlight replacement.',
  },
  {
    id: 'gal-6',
    title: 'Honda Vezel i-DCD Hybrid Battery & DCT Actuator Overhaul',
    category: 'Hybrid Battery',
    image: images.hybridBattery,
    vehicle: 'Honda Vezel Z Sensing',
    description: 'Battery cell replacement, high-voltage copper busbar de-oxidation, and clutch relearn.',
  },
];
