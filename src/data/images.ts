import logo from '../assets/images/hypertune_logo.webp';
import logoNew from '../assets/images/hypertune_logo_new_1785539043513.webp';

// Global & Page Banners
import heroBanner from '../assets/images/hypertune_hero_banner_1785533542266.webp';
import bannerPpf from '../assets/images/hypertune_banner_ppf_1785686823979.webp';
import ppfSedanStudio from '../assets/images/ppf_sedan_studio_1785597200101.webp';

// Home Carousel (5 Unique Slides)
// Served from /public (not bundled) so it matches the <link rel="preload"> in index.html exactly —
// prevents the browser from double-downloading the LCP hero image under two different URLs.
const heroPorscheStudio = '/images/hero_porsche_studio_1787240154464.jpg';
import heroFortuner from '../assets/images/ppf_fortuner_studio_1785597187309.webp';
import heroEcuTuning from '../assets/images/hypertune_ecu_tuning_1785533556122.webp';
import heroG63Ceramic from '../assets/images/hero_g63_ceramic_1787240170103.jpg';
import heroEngineOverhaul from '../assets/images/hypertune_engine_overhaul_1785533568562.webp';

// 12 Dedicated Distinct Services (Zero repetition across whole app)
import servicePpf from '../assets/images/ppf_hero_banner_1785597040377.webp';
import serviceDetailing from '../assets/images/hypertune_ceramic_detailing_1785533581788.webp';
import serviceEngine from '../assets/images/hypertune_banner_engine_1785686837582.webp';
import serviceDiagnostics from '../assets/images/service_diagnostics_live_1787240184785.jpg';
import serviceMaintenance from '../assets/images/hypertune_banner_dyno_1785686809783.webp';
import serviceSuspension from '../assets/images/car_suspension_brakes_1787164569835.jpg';
import serviceTransmission from '../assets/images/car_transmission_gearbox_1787164584141.jpg';
import serviceWrap from '../assets/images/car_vinyl_wrap_1787164536989.jpg';
import servicePaint from '../assets/images/car_paint_booth_1787164552209.jpg';
import serviceBodyMod from '../assets/images/service_body_kit_1787240237280.jpg';
import serviceCooling from '../assets/images/service_hybrid_battery_1787240208045.jpg';
import serviceElectrical from '../assets/images/service_ac_electrical_1787240223565.jpg';

// 12 Dedicated Distinct Gallery Items (Zero repetition across whole app)
import galleryPorscheGt3 from '../assets/images/gallery_porsche_gt3_1787240250876.jpg';
import galleryCayenneEngine from '../assets/images/gallery_cayenne_engine_1787240264648.jpg';
import galleryAmgDetailing from '../assets/images/gallery_amg_detailing_1787240277953.jpg';
import galleryLc300Lift from '../assets/images/gallery_lc300_lift_1787164644299.jpg';
import galleryAudiModule from '../assets/images/gallery_audi_module_1787164659237.jpg';
import galleryHybridBench from '../assets/images/gallery_hybrid_bench_1787164690125.jpg';
import galleryBmwBrakes from '../assets/images/gallery_bmw_brakes_1787164674953.jpg';
import galleryFortunerArmor from '../assets/images/gallery_fortuner_armor_1787240293587.jpg';
import galleryStronicBox from '../assets/images/gallery_stronic_box_1787240309146.jpg';
import galleryPradoEngine from '../assets/images/gallery_prado_engine_1787240323035.jpg';
import gallerySatinWrap from '../assets/images/gallery_satin_wrap_1787240338557.jpg';
import galleryBakeBooth from '../assets/images/gallery_bake_booth_1787240352785.jpg';

// 4 Dedicated Distinct Blog Featured Articles (Zero repetition across whole app)
import blogPpfGuide from '../assets/images/blog_ppf_guide_1787240365277.jpg';
import blogSummerCooling from '../assets/images/blog_summer_cooling_1787240377469.jpg';
import blogHybridGuide from '../assets/images/blog_hybrid_guide_1787240392874.jpg';
import blogEngineOil from '../assets/images/blog_engine_oil_1787240407575.jpg';

// Locations & About Feature (Zero repetition)
import workshopIslamabad from '../assets/images/islamabad_ppf_studio_1786992942639.webp';
import workshopRawalpindi from '../assets/images/rawalpindi_hub_bay_1786992970175.webp';
import aboutPpfStudio from '../assets/images/about_cleanroom_studio_1787241321616.jpg';

// 4 Before & After Project Showcases (Zero repetition)
import havalStudioBefore from '../assets/images/haval_maroon_before_1786385237615.webp';
import havalStudioAfter from '../assets/images/haval_maroon_after_1786383981252.webp';
import toyotaStudioBefore from '../assets/images/toyota_grey_before_1786385251436.webp';
import toyotaStudioAfter from '../assets/images/toyota_grey_after_1786385265810.webp';

export const images = {
  // Brand
  logo,
  logoNew,

  // Global & General Banners
  heroBanner,
  bannerPpf,
  ppfSedanStudio,

  // Hero Slides (Distinct)
  heroPorscheStudio,
  heroFortuner,
  heroEcuTuning,
  heroG63Ceramic,
  heroEngineOverhaul,

  // 12 Unique Services
  servicePpf,
  serviceDetailing,
  serviceEngine,
  serviceDiagnostics,
  serviceMaintenance,
  serviceSuspension,
  serviceTransmission,
  serviceWrap,
  servicePaint,
  serviceBodyMod,
  serviceCooling,
  serviceElectrical,

  // 12 Unique Gallery Items
  galleryPorscheGt3,
  galleryCayenneEngine,
  galleryAmgDetailing,
  galleryLc300Lift,
  galleryAudiModule,
  galleryHybridBench,
  galleryBmwBrakes,
  galleryFortunerArmor,
  galleryStronicBox,
  galleryPradoEngine,
  gallerySatinWrap,
  galleryBakeBooth,

  // 4 Unique Blog Articles
  blogPpfGuide,
  blogSummerCooling,
  blogHybridGuide,
  blogEngineOil,

  // Locations & About
  workshopIslamabad,
  workshopRawalpindi,
  aboutPpfStudio,

  // Aliases for backward compatibility in onError callbacks
  islamabadPpfStudio: workshopIslamabad,
  rawalpindiHubBay: workshopRawalpindi,
  ppfHeroBanner: servicePpf,
  ppfFortunerStudio: heroFortuner,
  ecuTuning: heroEcuTuning,
  ceramicDetailing: serviceDetailing,
  engineOverhaul: heroEngineOverhaul,
  bannerDyno: serviceMaintenance,
  bannerEngine: serviceEngine,

  // Before & After Showcases
  havalStudioBefore,
  havalStudioAfter,
  toyotaStudioBefore,
  toyotaStudioAfter,
};
