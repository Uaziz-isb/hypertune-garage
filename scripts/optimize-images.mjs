import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const dirs = ['src/assets/images', 'public/images'];

// Clean up any .opt or .tmp files first
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (f.includes('.opt.') || f.includes('.tmp')) {
      fs.unlinkSync(path.join(dir, f));
    }
  }
}

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (fs.statSync(filePath).isDirectory()) continue;
    if (file.includes('logo')) continue; // keep logo untouched
    
    if (ext === '.webp') {
      try {
        const tmpPng = filePath + '.tmp.png';
        const tmpWebp = filePath + '.tmp.webp';
        // decode to png then re-encode with optimal libwebp compression
        execSync(`ffmpeg -y -i "${filePath}" -vf "scale='min(1280,iw)':-2" "${tmpPng}"`, { stdio: 'pipe' });
        execSync(`ffmpeg -y -i "${tmpPng}" -c:v libwebp -quality 75 -compression_level 6 "${tmpWebp}"`, { stdio: 'pipe' });
        
        if (fs.existsSync(tmpWebp) && fs.statSync(tmpWebp).size > 1000) {
          fs.renameSync(tmpWebp, filePath);
          console.log(`Optimized WebP: ${filePath} (${Math.round(fs.statSync(filePath).size / 1024)}KB)`);
        }
        if (fs.existsSync(tmpPng)) fs.unlinkSync(tmpPng);
      } catch (err) {
        console.error(`Failed to optimize ${filePath}:`, err.message);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      try {
        const tmpJpg = filePath + '.tmp.jpg';
        execSync(`ffmpeg -y -i "${filePath}" -vf "scale='min(1280,iw)':-2" -q:v 3 "${tmpJpg}"`, { stdio: 'pipe' });
        if (fs.existsSync(tmpJpg) && fs.statSync(tmpJpg).size > 1000) {
          fs.renameSync(tmpJpg, filePath);
          console.log(`Optimized JPG: ${filePath} (${Math.round(fs.statSync(filePath).size / 1024)}KB)`);
        }
      } catch (err) {
        console.error(`Failed to optimize ${filePath}:`, err.message);
      }
    }
  }
}
console.log('Finished image optimizations!');
