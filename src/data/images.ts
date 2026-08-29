// Global and Component Image Registry
// Uses URL resolution so that modules can be loaded seamlessly across Vite client and Node/SSR prerendering

const getImg = (relPath: string) => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta && import.meta.url) {
      return new URL(relPath, import.meta.url).href;
    }
  } catch {}
  return relPath;
};

// Brand
const logo = getImg('../assets/images/hypertune_logo.webp');
const logoNew = getImg('../assets/images/hypertune_logo.webp');

// Global & Page Banners
const heroBanner = getImg('../assets/images/hypertune_hero_banner_1787965822146.jpg');
const bannerPpf = getImg('../assets/images/hypertune_banner_ppf_1787965838696.jpg');
const ppfSedanStudio = getImg('../assets/images/ppf_sedan_studio_1787965738328.jpg');

// Home Carousel (5 Unique Slides)
const heroPorscheStudio = getImg('../assets/images/hero_porsche_studio_1787240154464.jpg');
const heroFortuner = getImg('../assets/images/ppf_fortuner_studio_1787965723571.jpg');
const heroEcuTuning = getImg('../assets/images/hypertune_ecu_tuning_1787965764115.jpg');
const heroG63Ceramic = getImg('../assets/images/hero_g63_ceramic_1787240170103.jpg');
const heroEngineOverhaul = getImg('../assets/images/hypertune_engine_overhaul_1787965792462.jpg');

// 12 Dedicated Distinct Services (Zero repetition across whole app)
const servicePpf = getImg('../assets/images/ppf_hero_banner_1787965710518.jpg');
const serviceDetailing = getImg('../assets/images/hypertune_ceramic_detailing_1787965750616.jpg');
const serviceEngine = getImg('../assets/images/hypertune_banner_engine_1787965807591.jpg');
const serviceDiagnostics = getImg('../assets/images/service_diagnostics_live_1787240184785.jpg');
const serviceMaintenance = getImg('../assets/images/hypertune_banner_dyno_1787965778539.jpg');
const serviceSuspension = getImg('../assets/images/car_suspension_brakes_1787164569835.jpg');
const serviceTransmission = getImg('../assets/images/car_transmission_gearbox_1787164584141.jpg');
const serviceWrap = getImg('../assets/images/car_vinyl_wrap_1787965685845.jpg');
const servicePaint = getImg('../assets/images/car_paint_booth_1787965665925.jpg');
const serviceBodyMod = getImg('../assets/images/service_body_kit_1787240237280.jpg');
const serviceCooling = getImg('../assets/images/service_hybrid_battery_1787965698487.jpg');
const serviceElectrical = getImg('../assets/images/service_ac_electrical_1787240223565.jpg');

// 12 Dedicated Distinct Gallery Items (Zero repetition across whole app)
const galleryPorscheGt3 = getImg('../assets/images/gallery_porsche_gt3_1787240250876.jpg');
const galleryCayenneEngine = getImg('../assets/images/gallery_cayenne_engine_1787240264648.jpg');
const galleryAmgDetailing = getImg('../assets/images/gallery_amg_detailing_1787240277953.jpg');
const galleryLc300Lift = getImg('../assets/images/gallery_lc300_lift_1787965916877.jpg');
const galleryAudiModule = getImg('../assets/images/gallery_audi_module_1787164659237.jpg');
const galleryHybridBench = getImg('../assets/images/gallery_hybrid_bench_1787965901266.jpg');
const galleryBmwBrakes = getImg('../assets/images/gallery_bmw_brakes_1787164674953.jpg');
const galleryFortunerArmor = getImg('../assets/images/gallery_fortuner_armor_1787965879388.jpg');
const galleryStronicBox = getImg('../assets/images/gallery_stronic_box_1787240309146.jpg');
const galleryPradoEngine = getImg('../assets/images/gallery_prado_engine_1787965930368.jpg');
const gallerySatinWrap = getImg('../assets/images/gallery_satin_wrap_1787240338557.jpg');
const galleryBakeBooth = getImg('../assets/images/gallery_bake_booth_1787240352785.jpg');

// 4 Dedicated Distinct Blog Featured Articles (Zero repetition across whole app)
const blogPpfGuide = getImg('../assets/images/blog_ppf_guide_1787240365277.jpg');
const blogSummerCooling = getImg('../assets/images/blog_summer_cooling_1787240377469.jpg');
const blogHybridGuide = getImg('../assets/images/blog_hybrid_guide_1787240392874.jpg');
const blogEngineOil = getImg('../assets/images/blog_engine_oil_1787240407575.jpg');

// Locations & About Feature (Zero repetition)
const workshopIslamabad = getImg('../assets/images/islamabad_ppf_studio_1787965852020.jpg');
const workshopRawalpindi = getImg('../assets/images/rawalpindi_hub_bay_1787965865804.jpg');
const aboutPpfStudio = getImg('../assets/images/about_cleanroom_studio_1787241321616.jpg');

// 4 Before & After Project Showcases (Zero repetition)
const havalStudioBefore = getImg('../assets/images/haval_maroon_before_1787965944306.jpg');
const havalStudioAfter = getImg('../assets/images/haval_maroon_after_1787965958764.jpg');
const toyotaStudioBefore = getImg('../assets/images/toyota_grey_before_1787965972757.jpg');
const toyotaStudioAfter = getImg('../assets/images/toyota_grey_after_1787965987271.jpg');

// 24 Dedicated Distinct Brand Specialists Hero Images (Zero repetition)
const brandToyotaService = getImg('../assets/images/brand_toyota_service_1787494386869.jpg');
const brandHondaService = getImg('../assets/images/brand_honda_service_1787601769426.jpg');
const brandSuzukiService = getImg('../assets/images/brand_suzuki_service_1787601783830.jpg');
const brandHyundaiService = getImg('../assets/images/brand_hyundai_service_1787601797429.jpg');
const brandKiaService = getImg('../assets/images/brand_kia_service_1787601810718.jpg');
const brandChanganService = getImg('../assets/images/brand_changan_service_1787601827068.jpg');
const brandHavalService = getImg('../assets/images/haval_maroon_after_1787965958764.jpg');
const brandMgService = getImg('../assets/images/brand_mg_service_1787601843445.jpg');
const brandBydService = getImg('../assets/images/brand_byd_service_1787601859747.jpg');
const brandCheryService = getImg('../assets/images/brand_chery_service_1787601873858.jpg');
const brandIsuzuService = getImg('../assets/images/brand_isuzu_service_1787601887545.jpg');
const brandFawService = getImg('../assets/images/brand_faw_service_1787601900668.jpg');
const brandDaihatsuService = getImg('../assets/images/brand_daihatsu_service_1787601914844.jpg');
const brandNissanService = getImg('../assets/images/brand_nissan_service_1787601927848.jpg');
const brandMitsubishiService = getImg('../assets/images/brand_mitsubishi_service_1787601948558.jpg');
const brandMazdaService = getImg('../assets/images/brand_mazda_service_1787601965157.jpg');
const brandSubaruService = getImg('../assets/images/brand_subaru_service_1787601980931.jpg');
const brandLexusService = getImg('../assets/images/brand_lexus_service_1787601996391.jpg');
const brandLandRoverService = getImg('../assets/images/brand_land_rover_service_1787602011136.jpg');
const brandRangeRoverService = getImg('../assets/images/brand_range_rover_service_1787602025003.jpg');
const brandJeepService = getImg('../assets/images/brand_jeep_service_1787602039896.jpg');
const brandFordService = getImg('../assets/images/brand_ford_service_1787602054178.jpg');
const brandChevroletService = getImg('../assets/images/brand_chevrolet_service_1787602068956.jpg');
const brandVolvoService = getImg('../assets/images/brand_volvo_service_1787602086461.jpg');

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

  // 24 Dedicated Distinct Brand Specialists Hero Images
  brandToyotaService,
  brandHondaService,
  brandSuzukiService,
  brandHyundaiService,
  brandKiaService,
  brandChanganService,
  brandHavalService,
  brandMgService,
  brandBydService,
  brandCheryService,
  brandIsuzuService,
  brandFawService,
  brandDaihatsuService,
  brandNissanService,
  brandMitsubishiService,
  brandMazdaService,
  brandSubaruService,
  brandLexusService,
  brandLandRoverService,
  brandRangeRoverService,
  brandJeepService,
  brandFordService,
  brandChevroletService,
  brandVolvoService,
};
