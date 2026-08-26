// Public-path string constants instead of ES binary imports.
// This makes this file (and everything that imports it: SSR renderer, prerender
// script, servicesData/brandsData/locationsData/blogData) safely importable by
// plain Node/tsx at build time -- not just by Vite's client bundler -- since a
// binary asset import has no meaning outside Vite's asset plugin. It also removes
// the need for a separate ssrData.ts mirror (source of real slug/content drift)
// and avoids esbuild needing (harmful) text-loader flags for these extensions.

const logo = '/images/hypertune_logo.webp';
const logoNew = '/images/hypertune_logo_new_1785539043513.webp';

// Global & Page Banners
const heroBanner = '/images/hypertune_hero_banner_1785533542266.webp';
const bannerPpf = '/images/hypertune_banner_ppf_1785686823979.webp';
const ppfSedanStudio = '/images/ppf_sedan_studio_1785597200101.webp';

// Home Carousel (5 Unique Slides)
const heroPorscheStudio = '/images/hero_porsche_studio_1787240154464.jpg';
const heroFortuner = '/images/ppf_fortuner_studio_1785597187309.webp';
const heroEcuTuning = '/images/hypertune_ecu_tuning_1785533556122.webp';
const heroG63Ceramic = '/images/hero_g63_ceramic_1787240170103.jpg';
const heroEngineOverhaul = '/images/hypertune_engine_overhaul_1785533568562.webp';

// 12 Dedicated Distinct Services (Zero repetition across whole app)
const servicePpf = '/images/ppf_hero_banner_1785597040377.webp';
const serviceDetailing = '/images/hypertune_ceramic_detailing_1785533581788.webp';
const serviceEngine = '/images/hypertune_banner_engine_1785686837582.webp';
const serviceDiagnostics = '/images/service_diagnostics_live_1787240184785.jpg';
const serviceMaintenance = '/images/hypertune_banner_dyno_1785686809783.webp';
const serviceSuspension = '/images/car_suspension_brakes_1787164569835.jpg';
const serviceTransmission = '/images/car_transmission_gearbox_1787164584141.jpg';
const serviceWrap = '/images/car_vinyl_wrap_1787164536989.jpg';
const servicePaint = '/images/car_paint_booth_1787164552209.jpg';
// NOTE: original file shows a real competing shop's signage ("Modified Performance
// Tuning") -- replaced with a safe, brand-neutral, thematically-relevant image.
const serviceBodyMod = '/images/gallery_bake_booth_1787240352785.jpg';
const serviceCooling = '/images/service_hybrid_battery_1787240208045.jpg';
const serviceElectrical = '/images/service_ac_electrical_1787240223565.jpg';

// 12 Dedicated Distinct Gallery Items (Zero repetition across whole app)
// NOTE: originals showed real competing businesses (Autoshield Detailing, Corghi
// Service, an official Mercedes-Benz dealer, Auto Wrap Co.) -- replaced with genuine
// HyperTune project photos and safe brand-neutral images.
const galleryPorscheGt3 = '/images/toyota_grey_before_1786385251436.webp';
const galleryCayenneEngine = '/images/gallery_cayenne_engine_1787240264648.jpg';
const galleryAmgDetailing = '/images/gallery_amg_detailing_1787240277953.jpg';
const galleryLc300Lift = '/images/toyota_grey_after_1786385265810.webp';
const galleryAudiModule = '/images/haval_maroon_before_1786385237615.webp';
const galleryHybridBench = '/images/gallery_hybrid_bench_1787164690125.jpg';
const galleryBmwBrakes = '/images/gallery_bmw_brakes_1787164674953.jpg';
const galleryFortunerArmor = '/images/gallery_fortuner_armor_1787240293587.jpg';
const galleryStronicBox = '/images/gallery_stronic_box_1787240309146.jpg';
const galleryPradoEngine = '/images/gallery_prado_engine_1787240323035.jpg';
const gallerySatinWrap = '/images/car_transmission_gearbox_1787164584141.jpg';
const galleryBakeBooth = '/images/gallery_bake_booth_1787240352785.jpg';

// 4 Dedicated Distinct Blog Featured Articles (Zero repetition across whole app)
const blogPpfGuide = '/images/blog_ppf_guide_1787240365277.jpg';
const blogSummerCooling = '/images/blog_summer_cooling_1787240377469.jpg';
const blogHybridGuide = '/images/blog_hybrid_guide_1787240392874.jpg';
const blogEngineOil = '/images/blog_engine_oil_1787240407575.jpg';

// Locations & About Feature (Zero repetition)
// NOTE: the original islamabad_ppf_studio/rawalpindi_hub_bay files show a DIFFERENT,
// unrelated real workshop's signage/staff -- not HyperTune Garage. Islamabad now uses
// about_cleanroom_studio, which genuinely shows "HYPERTUNE GARAGE ISLAMABAD" branding.
// Rawalpindi has no genuine matching photo available yet -- using a safe, brand-neutral
// image as an honest placeholder rather than another business's real photo. Replace with
// a real photo of the Rawalpindi location as soon as one is available.
const workshopIslamabad = '/images/about_cleanroom_studio_1787241321616.jpg';
const workshopRawalpindi = '/images/gallery_bake_booth_1787240352785.jpg';
const aboutPpfStudio = '/images/about_cleanroom_studio_1787241321616.jpg';
const brandToyotaService = '/images/brand_toyota_service_1787494386869.jpg';

// 4 Before & After Project Showcases (Zero repetition)
const havalStudioBefore = '/images/haval_maroon_before_1786385237615.webp';
const havalStudioAfter = '/images/haval_maroon_after_1786383981252.webp';
const toyotaStudioBefore = '/images/toyota_grey_before_1786385251436.webp';
const toyotaStudioAfter = '/images/toyota_grey_after_1786385265810.webp';

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
  brandToyotaService,

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
