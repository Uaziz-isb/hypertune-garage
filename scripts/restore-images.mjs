import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// All original production asset mappings on hypertunegarage.pk
const assets = [
  { remote: 'haval_maroon_after_1786383981252-CvppoGAm.webp', local: 'haval_maroon_after_1786383981252.webp' },
  { remote: 'haval_maroon_before_1786385237615-NkXuE8mW.webp', local: 'haval_maroon_before_1786385237615.webp' },
  { remote: 'hypertune_banner_dyno_1785686809783-Dcea7vM2.webp', local: 'hypertune_banner_dyno_1785686809783.webp' },
  { remote: 'hypertune_banner_engine_1785686837582-BA8irQL6.webp', local: 'hypertune_banner_engine_1785686837582.webp' },
  { remote: 'hypertune_banner_ppf_1785686823979-B-Ta0MEh.webp', local: 'hypertune_banner_ppf_1785686823979.webp' },
  { remote: 'hypertune_ceramic_detailing_1785533581788-BfzUCUUM.webp', local: 'hypertune_ceramic_detailing_1785533581788.webp' },
  { remote: 'hypertune_ecu_tuning_1785533556122-BT3pePQ_.webp', local: 'hypertune_ecu_tuning_1785533556122.webp' },
  { remote: 'hypertune_engine_overhaul_1785533568562-BVK3URfs.webp', local: 'hypertune_engine_overhaul_1785533568562.webp' },
  { remote: 'hypertune_hero_banner_1785533542266-Vm4qEIId.webp', local: 'hypertune_hero_banner_1785533542266.webp' },
  { remote: 'ppf_fortuner_studio_1785597187309-Cmy7fHR6.webp', local: 'ppf_fortuner_studio_1785597187309.webp' },
  { remote: 'ppf_hero_banner_1785597040377-CyZWhe0I.webp', local: 'ppf_hero_banner_1785597040377.webp' },
  { remote: 'ppf_sedan_studio_1785597200101-DeSLTHvM.webp', local: 'ppf_sedan_studio_1785597200101.webp' },
  { remote: 'toyota_grey_after_1786385265810-CMawUXXn.webp', local: 'toyota_grey_after_1786385265810.webp' },
  { remote: 'toyota_grey_before_1786385251436-BaCYnEN3.webp', local: 'toyota_grey_before_1786385251436.webp' },
];

console.log('Downloading pristine assets from hypertunegarage.pk...');

for (const item of assets) {
  const url = `https://hypertunegarage.pk/assets/${item.remote}`;
  const srcPath = path.join('src/assets/images', item.local);
  const pubPath = path.join('public/images', item.local);
  
  try {
    execSync(`curl -k -s -L "${url}" -o "${srcPath}"`);
    const size = fs.statSync(srcPath).size;
    if (size > 10000) {
      fs.copyFileSync(srcPath, pubPath);
      console.log(`✓ Restored ${item.local} (${Math.round(size / 1024)} KB)`);
    } else {
      console.error(`Failed ${item.local}, size too small: ${size}`);
    }
  } catch (e) {
    console.error(`Error downloading ${item.local}:`, e.message);
  }
}

// Now check if studio branch assets exist on the site
const additional = [
  'islamabad_ppf_studio_1786992942639',
  'about_ppf_studio_1786992956322',
  'rawalpindi_hub_bay_1786992970175'
];

for (const name of additional) {
  const srcWebp = path.join('src/assets/images', `${name}.webp`);
  const srcJpg = path.join('src/assets/images', `${name}.jpg`);
  const pubWebp = path.join('public/images', `${name}.webp`);
  const pubJpg = path.join('public/images', `${name}.jpg`);
  
  // If jpg is healthy, convert directly to pristine WebP with ffmpeg
  if (fs.existsSync(srcJpg) && fs.statSync(srcJpg).size > 20000) {
    try {
      execSync(`ffmpeg -y -i "${srcJpg}" -c:v libwebp -quality 85 "${srcWebp}"`);
      fs.copyFileSync(srcWebp, pubWebp);
      fs.copyFileSync(srcJpg, pubJpg);
      console.log(`✓ Re-generated WebP from JPG for ${name} (${Math.round(fs.statSync(srcWebp).size / 1024)} KB)`);
    } catch (e) {
      console.error(`Failed to convert ${srcJpg} to ${srcWebp}:`, e.message);
    }
  }
}

console.log('All image restoration complete!');
