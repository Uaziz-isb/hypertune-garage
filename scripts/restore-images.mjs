import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// SOURCE: the AI Studio preview domain, not production.
// Why: corruption happens specifically during this project's ZIP export
// step, not in AI Studio's own hosting — so the preview reliably serves
// pristine originals. Production was built FROM a corrupted export, so
// it is not a safe restore source right now.
//
// Update this if your current AI Studio preview URL differs:
const SOURCE_BASE = 'https://hypertune-garage-new.ai.studio/images';

// Every file confirmed corrupted (invalid magic bytes for its extension)
// in the most recent build, in both public/images and src/assets/images.
const corruptedFiles = [
  'about_cleanroom_studio_1787241321616.jpg',
  'about_ppf_studio_1786992956322.jpg',
  'blog_engine_oil_1787240407575.jpg',
  'blog_hybrid_guide_1787240392874.jpg',
  'blog_ppf_guide_1787240365277.jpg',
  'blog_summer_cooling_1787240377469.jpg',
  'car_paint_booth_1787164552209.jpg',
  'car_suspension_brakes_1787164569835.jpg',
  'car_transmission_gearbox_1787164584141.jpg',
  'car_vinyl_wrap_1787164536989.jpg',
  'gallery_amg_detailing_1787240277953.jpg',
  'gallery_audi_module_1787164659237.jpg',
  'gallery_bake_booth_1787240352785.jpg',
  'gallery_bmw_brakes_1787164674953.jpg',
  'gallery_cayenne_engine_1787240264648.jpg',
  'gallery_fortuner_armor_1787240293587.jpg',
  'gallery_hybrid_bench_1787164690125.jpg',
  'gallery_lc300_lift_1787164644299.jpg',
  'gallery_porsche_gt3_1787240250876.jpg',
  'gallery_prado_engine_1787240323035.jpg',
  'gallery_satin_wrap_1787240338557.jpg',
  'gallery_stronic_box_1787240309146.jpg',
  'haval_maroon_after_1786383981252.webp',
  'haval_maroon_before_1786385237615.webp',
  'hero_g63_ceramic_1787240170103.jpg',
  'hero_porsche_studio_1787240154464.jpg',
  'hypertune_banner_dyno_1785686809783.webp',
  'hypertune_banner_engine_1785686837582.webp',
  'hypertune_banner_ppf_1785686823979.webp',
  'hypertune_ceramic_detailing_1785533581788.webp',
  'hypertune_engine_overhaul_1785533568562.webp',
  'hypertune_hero_banner_1785533542266.webp',
  'ppf_fortuner_studio_1785597187309.webp',
  'ppf_sedan_studio_1785597200101.webp',
  'rawalpindi_hub_bay_1786992970175.webp',
  'service_ac_electrical_1787240223565.jpg',
  'service_body_kit_1787240237280.jpg',
  'service_diagnostics_live_1787240184785.jpg',
  'service_hybrid_battery_1787240208045.jpg',
];

function isValidImage(filePath) {
  const buf = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
  if (ext === '.png') return buf.slice(0, 8).equals(Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]));
  if (ext === '.webp') return buf.slice(0,4).toString() === 'RIFF' && buf.slice(8,12).toString() === 'WEBP';
  return true;
}

console.log(`Restoring ${corruptedFiles.length} corrupted images from ${SOURCE_BASE} ...\n`);

let restored = 0;
let failed = [];

for (const filename of corruptedFiles) {
  const url = `${SOURCE_BASE}/${filename}`;
  const publicPath = path.join('public/images', filename);
  const srcPath = path.join('src/assets/images', filename);

  try {
    execSync(`curl -sfL "${url}" -o "${publicPath}.new"`, { stdio: 'pipe' });

    if (!fs.existsSync(`${publicPath}.new`) || fs.statSync(`${publicPath}.new`).size < 5000) {
      throw new Error('downloaded file missing or suspiciously small');
    }
    if (!isValidImage(`${publicPath}.new`)) {
      throw new Error('downloaded file also fails magic-byte validation — source may be corrupted too');
    }

    fs.copyFileSync(`${publicPath}.new`, publicPath);
    if (fs.existsSync(path.dirname(srcPath))) {
      fs.copyFileSync(`${publicPath}.new`, srcPath);
    }
    fs.unlinkSync(`${publicPath}.new`);

    const kb = Math.round(fs.statSync(publicPath).size / 1024);
    console.log(`✓ Restored ${filename} (${kb} KB)`);
    restored++;
  } catch (e) {
    console.error(`✗ FAILED ${filename}: ${e.message}`);
    failed.push(filename);
    if (fs.existsSync(`${publicPath}.new`)) fs.unlinkSync(`${publicPath}.new`);
  }
}

console.log(`\n${restored}/${corruptedFiles.length} restored successfully.`);
if (failed.length) {
  console.log(`\n${failed.length} still need attention:`);
  failed.forEach(f => console.log(`  - ${f}`));
  console.log('\nFor any of these, try manually right-click > Save Image As from the live AI Studio preview page itself.');
}
