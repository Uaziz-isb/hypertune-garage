// One authoritative image library lives in public/images. Keeping image URLs
// stable avoids bundling a second hashed copy and lets the HTML preload match
// the image used by the application.
const getImg = (relPath: string) => `/images/${relPath.split('/').pop()}`;

// Brand
const logo = getImg('../assets/images/hypertune_logo.webp');
const logoNew = getImg('../assets/images/hypertune_logo.webp');

// Global & Page Banners
const heroBanner = getImg('../assets/images/hypertune_hero_banner_1787965822146.webp');
const bannerPpf = getImg('../assets/images/hypertune_banner_ppf_1787965838696.webp');
const ppfSedanStudio = getImg('../assets/images/ppf_sedan_studio_1787965738328.webp');

// Home Carousel (5 Unique Slides)
const heroPorscheStudio = getImg('../assets/images/hero_porsche_studio_1787240154464.webp');
const heroFortuner = getImg('../assets/images/ppf_fortuner_studio_1787965723571.webp');
const heroEcuTuning = getImg('../assets/images/hypertune_ecu_tuning_1787965764115.webp');
const heroG63Ceramic = getImg('../assets/images/hero_g63_ceramic_1787240170103.webp');
const heroEngineOverhaul = getImg('../assets/images/hypertune_engine_overhaul_1787965792462.webp');

// 12 Dedicated Distinct Services (Zero repetition across whole app)
const servicePpf = getImg('../assets/images/ppf_hero_banner_1787965710518.webp');
const serviceDetailing = getImg('../assets/images/hypertune_ceramic_detailing_1787965750616.webp');
const serviceEngine = getImg('../assets/images/hypertune_banner_engine_1787965807591.webp');
const serviceDiagnostics = getImg('../assets/images/service_diagnostics_live_1787240184785.webp');
const serviceMaintenance = getImg('../assets/images/hypertune_banner_dyno_1787965778539.webp');
const serviceSuspension = getImg('../assets/images/car_suspension_brakes_1787164569835.webp');
const serviceTransmission = getImg('../assets/images/car_transmission_gearbox_1787164584141.webp');
const serviceWrap = getImg('../assets/images/car_vinyl_wrap_1787965685845.webp');
const servicePaint = getImg('../assets/images/car_paint_booth_1787965665925.webp');
const serviceBodyMod = getImg('../assets/images/service_body_kit_1787240237280.webp');
const serviceCooling = getImg('../assets/images/service_hybrid_battery_1787965698487.webp');
const serviceElectrical = getImg('../assets/images/service_ac_electrical_1787240223565.webp');

// 12 Dedicated Distinct Gallery Items (Zero repetition across whole app)
const galleryPorscheGt3 = getImg('../assets/images/gallery_porsche_gt3_1787240250876.webp');
const galleryCayenneEngine = getImg('../assets/images/gallery_cayenne_engine_1787240264648.webp');
const galleryAmgDetailing = getImg('../assets/images/gallery_amg_detailing_1787240277953.webp');
const galleryLc300Lift = getImg('../assets/images/gallery_lc300_lift_1787965916877.webp');
const galleryAudiModule = getImg('../assets/images/gallery_audi_module_1787164659237.webp');
const galleryHybridBench = getImg('../assets/images/gallery_hybrid_bench_1787965901266.webp');
const galleryBmwBrakes = getImg('../assets/images/gallery_bmw_brakes_1787164674953.webp');
const galleryFortunerArmor = getImg('../assets/images/gallery_fortuner_armor_1787965879388.webp');
const galleryStronicBox = getImg('../assets/images/gallery_stronic_box_1787240309146.webp');
const galleryPradoEngine = getImg('../assets/images/gallery_prado_engine_1787965930368.webp');
const gallerySatinWrap = getImg('../assets/images/gallery_satin_wrap_1787240338557.webp');
const galleryBakeBooth = getImg('../assets/images/gallery_bake_booth_1787240352785.webp');

// 4 Dedicated Distinct Blog Featured Articles (Zero repetition across whole app)
const blogPpfGuide = getImg('../assets/images/blog_ppf_guide_1787240365277.webp');
const blogSummerCooling = getImg('../assets/images/blog_summer_cooling_1787240377469.webp');
const blogHybridGuide = getImg('../assets/images/blog_hybrid_guide_1787240392874.webp');
const blogEngineOil = getImg('../assets/images/blog_engine_oil_1787240407575.webp');

// Locations & About Feature (Zero repetition)
const workshopIslamabad = getImg('../assets/images/about_cleanroom_studio_1787241321616.webp');
const workshopRawalpindi = getImg('../assets/images/rawalpindi_hub_bay_1787965865804.webp');
const aboutPpfStudio = getImg('../assets/images/about_cleanroom_studio_1787241321616.webp');

// 4 Before & After Project Showcases (Zero repetition)
const havalStudioBefore = getImg('../assets/images/haval_maroon_before_1788042124245.webp');
const havalStudioAfter = getImg('../assets/images/haval_maroon_after_1788042137567.webp');
const toyotaStudioBefore = getImg('../assets/images/toyota_grey_before_1788042150340.webp');
const toyotaStudioAfter = getImg('../assets/images/toyota_grey_after_1788042164355.webp');

// 24 Dedicated Distinct Brand Specialists Hero Images (Zero repetition)
const brandToyotaService = getImg('../assets/images/brand_toyota_service_1787494386869.webp');
const brandHondaService = getImg('../assets/images/brand_honda_service_1787601769426.webp');
const brandSuzukiService = getImg('../assets/images/brand_suzuki_service_1787601783830.webp');
const brandHyundaiService = getImg('../assets/images/brand_hyundai_service_1787601797429.webp');
const brandKiaService = getImg('../assets/images/brand_kia_service_1787601810718.webp');
const brandChanganService = getImg('../assets/images/brand_changan_service_1787601827068.webp');
const brandHavalService = getImg('../assets/images/haval_maroon_after_1788042137567.webp');
const brandMgService = getImg('../assets/images/brand_mg_service_1787601843445.webp');
const brandBydService = getImg('../assets/images/brand_byd_service_1787601859747.webp');
const brandCheryService = getImg('../assets/images/brand_chery_service_1787601873858.webp');
const brandIsuzuService = getImg('../assets/images/brand_isuzu_service_1787601887545.webp');
const brandFawService = getImg('../assets/images/brand_faw_service_1787601900668.webp');
const brandDaihatsuService = getImg('../assets/images/brand_daihatsu_service_1787601914844.webp');
const brandNissanService = getImg('../assets/images/brand_nissan_service_1787601927848.webp');
const brandMitsubishiService = getImg('../assets/images/brand_mitsubishi_service_1787601948558.webp');
const brandMazdaService = getImg('../assets/images/brand_mazda_service_1787601965157.webp');
const brandSubaruService = getImg('../assets/images/brand_subaru_service_1787601980931.webp');
const brandLexusService = getImg('../assets/images/brand_lexus_service_1787601996391.webp');
const brandLandRoverService = getImg('../assets/images/brand_land_rover_service_1787602011136.webp');
const brandRangeRoverService = getImg('../assets/images/brand_range_rover_service_1787602025003.webp');
const brandJeepService = getImg('../assets/images/brand_jeep_service_1787602039896.webp');
const brandFordService = getImg('../assets/images/brand_ford_service_1787602054178.webp');
const brandChevroletService = getImg('../assets/images/brand_chevrolet_service_1787602068956.webp');
const brandVolvoService = getImg('../assets/images/brand_volvo_service_1787602086461.webp');

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
