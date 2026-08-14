// Standardized Centralized Image Asset Directory for HyperTune Garage
// All images are organized by category with safe lowercase hyphenated filenames
// Supported formats: WebP (modern lightweight) with bundled and static public fallback

// Logos
import logoMain from '../assets/images/logo/hypertune-logo.webp';
import logoBadge from '../assets/images/logo/hypertune-badge.webp';

// Hero Banners
import ppfHeroBanner from '../assets/images/hero/ppf-hero-banner.webp';
import workshopHeroBanner from '../assets/images/hero/workshop-hero-banner.webp';

// Services
import ppfProtection from '../assets/images/services/ppf-installation.webp';
import ceramicDetailing from '../assets/images/services/ceramic-detailing.webp';
import engineOverhaul from '../assets/images/services/engine-overhaul.webp';
import ecuTuning from '../assets/images/services/ecu-tuning.webp';
import dynoTuning from '../assets/images/services/dyno-tuning.webp';
import engineDiagnostics from '../assets/images/services/engine-diagnostics.webp';
import germanCar from '../assets/images/services/german-car.webp';
import hybridBattery from '../assets/images/services/hybrid-battery.webp';
import suspension from '../assets/images/services/suspension.webp';
import oilChange from '../assets/images/services/oil-change.webp';
import carAc from '../assets/images/services/car-ac.webp';
import ppfStudio from '../assets/images/services/ppf-studio.webp';
import engineRebuild from '../assets/images/services/engine-rebuild.webp';

// Gallery & Restoration
import havalBefore from '../assets/images/gallery/haval-before.webp';
import havalAfter from '../assets/images/gallery/haval-after.webp';
import toyotaBefore from '../assets/images/gallery/toyota-before.webp';
import toyotaAfter from '../assets/images/gallery/toyota-after.webp';
import ppfFortunerStudio from '../assets/images/gallery/ppf-fortuner-studio.webp';
import ppfSedanStudio from '../assets/images/gallery/ppf-sedan-studio.webp';
import aboutPpfStudio from '../assets/images/gallery/about-ppf-studio.webp';
import aboutStudioBay from '../assets/images/gallery/about-studio-bay.webp';

// Locations
import workshopIslamabad from '../assets/images/locations/workshop-islamabad.webp';
import workshopRawalpindi from '../assets/images/locations/workshop-rawalpindi.webp';

// Avatars
import author1 from '../assets/images/avatars/author-1.webp';
import author2 from '../assets/images/avatars/author-2.webp';
import author3 from '../assets/images/avatars/author-3.webp';
import author4 from '../assets/images/avatars/author-4.webp';
import author5 from '../assets/images/avatars/author-5.webp';

export const images = {
  // Brand Logos
  logoMain,
  logoBadge,
  defaultBrandLogo: logoMain,
  logoNew: logoMain,
  logoOld: logoBadge,

  // Hero Banners
  heroBanner: workshopHeroBanner,
  ppfHeroBanner,
  workshopHeroBanner,

  // Services
  ppfProtection,
  ceramicDetailing,
  engineOverhaul,
  ecuTuning,
  dynoTuning,
  bannerDyno: dynoTuning,
  engineDiagnostics,
  bannerEngine: engineDiagnostics,
  ppfInstallation: ppfProtection,
  bannerPpf: ppfProtection,
  germanCar,
  hybridBattery,
  suspension,
  oilChange,
  carAc,
  ppfStudio,
  ppfDetailingGarage: ppfStudio,
  engineRebuild,
  sportsCarHero: ppfHeroBanner,
  sportsCarShowcase: ppfFortunerStudio,
  ecuTuningAlt: ecuTuning,
  ceramicPpf: ceramicDetailing,

  // Gallery & Restoration
  havalBefore,
  havalAfter,
  havalStudioBefore: havalBefore,
  havalStudioAfter: havalAfter,
  toyotaBefore,
  toyotaAfter,
  toyotaStudioBefore: toyotaBefore,
  toyotaStudioAfter: toyotaAfter,
  ppfFortunerStudio,
  ppfSedanStudio,
  aboutPpfStudio,
  aboutStudioBay,

  // Locations
  workshopIslamabad,
  workshopRawalpindi,

  // Avatars
  author1,
  author2,
  author3,
  author4,
  author5,
};
