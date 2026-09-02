import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const serviceImageFiles = [
  'hypertune_banner_engine_1787965807591.webp',
  'car_paint_booth_1787965665925.webp',
  'ppf_hero_banner_1787965710518.webp',
  'hypertune_banner_dyno_1787965778539.webp',
  'service_hybrid_battery_1787965698487.webp',
  'service_ac_electrical_1787240223565.webp',
  'car_transmission_gearbox_1787164584141.webp',
  'service_body_kit_1787240237280.webp',
  'car_suspension_brakes_1787164569835.webp',
  'car_vinyl_wrap_1787965685845.webp',
  'hypertune_ceramic_detailing_1787965750616.webp',
  'service_diagnostics_live_1787240184785.webp',
];

async function generateImages() {
  const imgDir = path.resolve('public/images');
  console.log('Generating responsive WebP variants for 12 service images + logo...');

  let totalSavedBytes = 0;

  for (const filename of serviceImageFiles) {
    const inputPath = path.join(imgDir, filename);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Warning: Missing ${filename}`);
      continue;
    }

    const baseName = filename.replace(/\.webp$/i, '');
    const out450Path = path.join(imgDir, `${baseName}_450w.webp`);
    const out800Path = path.join(imgDir, `${baseName}_800w.webp`);

    const originalStats = fs.statSync(inputPath);

    // 450w variant (for mobile & 344px card display)
    await sharp(inputPath)
      .resize(450)
      .webp({ quality: 80, effort: 6 })
      .toFile(out450Path);

    // 800w variant (for retina & 2-column tablet)
    await sharp(inputPath)
      .resize(800)
      .webp({ quality: 80, effort: 6 })
      .toFile(out800Path);

    const stat450 = fs.statSync(out450Path);
    const stat800 = fs.statSync(out800Path);

    const saved = originalStats.size - stat450.size;
    totalSavedBytes += saved;

    console.log(`✅ ${filename}:`);
    console.log(`   Original: ${(originalStats.size / 1024).toFixed(1)} KB`);
    console.log(`   450w:     ${(stat450.size / 1024).toFixed(1)} KB (Saved: ${(saved / 1024).toFixed(1)} KB)`);
    console.log(`   800w:     ${(stat800.size / 1024).toFixed(1)} KB`);
  }

  // Small Logo (100x100 for 50x50 header display)
  const logoInput = path.join(imgDir, 'hypertune_logo.webp');
  const logoOut = path.join(imgDir, 'hypertune_logo_small.webp');
  if (fs.existsSync(logoInput)) {
    const origLogoStat = fs.statSync(logoInput);
    await sharp(logoInput)
      .resize(100, 100)
      .webp({ quality: 85, effort: 6 })
      .toFile(logoOut);
    const logoStat = fs.statSync(logoOut);
    const logoSaved = origLogoStat.size - logoStat.size;
    totalSavedBytes += logoSaved;
    console.log(`✅ hypertune_logo.webp:`);
    console.log(`   Original: ${(origLogoStat.size / 1024).toFixed(1)} KB`);
    console.log(`   Small:    ${(logoStat.size / 1024).toFixed(1)} KB (Saved: ${(logoSaved / 1024).toFixed(1)} KB)`);
  }

  console.log(`\n🎉 Total Estimated Bandwidth Saved on 344px Card Display: ${(totalSavedBytes / 1024).toFixed(1)} KB`);
}

generateImages().catch((err) => {
  console.error('Failed to generate responsive images:', err);
  process.exit(1);
});
