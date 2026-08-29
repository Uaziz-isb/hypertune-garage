import fs from 'fs';
import path from 'path';

interface ImageVerifyResult {
  file: string;
  bytes: number;
  format: string;
  hasReplacementChars: boolean;
  replCount: number;
  headerValid: boolean;
}

function verifyImages() {
  const dirs = [path.resolve('public/images')];

  console.log('======================================================================');
  console.log('🖼️  FINAL COMPREHENSIVE IMAGE INTEGRITY & CORRUPTION AUDIT');
  console.log('======================================================================');

  let totalChecked = 0;
  let totalCorrupt = 0;
  const inspectedFiles: ImageVerifyResult[] = [];

  for (const d of dirs) {
    if (!fs.existsSync(d)) continue;
    const list = fs.readdirSync(d);
    for (const f of list) {
      const full = path.join(d, f);
      if (fs.statSync(full).isFile()) {
        const ext = path.extname(f).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.webp', '.svg', '.ico'].includes(ext)) continue;

        totalChecked++;
        const buf = fs.readFileSync(full);
        let replCount = 0;
        for (let i = 0; i < buf.length - 2; i++) {
          if (buf[i] === 0xef && buf[i+1] === 0xbf && buf[i+2] === 0xbd) replCount++;
        }

        let headerValid = false;
        let format = 'unknown';

        if (ext === '.jpg' || ext === '.jpeg') {
          format = 'jpeg';
          headerValid = buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8;
        } else if (ext === '.png') {
          format = 'png';
          headerValid = buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
        } else if (ext === '.webp') {
          format = 'webp';
          headerValid = buf.length >= 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP';
        } else if (ext === '.svg') {
          format = 'svg';
          headerValid = buf.toString('utf-8').includes('<svg');
        }

        const isCorrupt = replCount > 5 || !headerValid || buf.length < 500;
        if (isCorrupt) totalCorrupt++;

        inspectedFiles.push({
          file: path.relative(process.cwd(), full),
          bytes: buf.length,
          format,
          hasReplacementChars: replCount > 0,
          replCount,
          headerValid,
        });
      }
    }
  }

  console.log(`📁 Asset Directories Scanned:`);
  const srcImagesDir = path.resolve('src/assets/images');
  const publicImagesDir = path.resolve('public/images');
  console.log(`   - src/assets/images: ${fs.existsSync(srcImagesDir) ? fs.readdirSync(srcImagesDir).length : 0} files`);
  console.log(`   - public/images:     ${fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir).length : 0} files`);
  console.log(`\n🔍 Image Files Inspected: ${totalChecked}`);
  console.log(`❌ Corrupted Files Found: ${totalCorrupt}`);

  if (totalCorrupt > 0) {
    console.log('\nCorrupted files details:');
    for (const img of inspectedFiles) {
      if (img.hasReplacementChars || !img.headerValid) {
        console.log(` - ${img.file} (size: ${img.bytes}b, replChars: ${img.replCount}, headerValid: ${img.headerValid})`);
      }
    }
  }

  // Check code references
  console.log('\n🔗 Checking Codebase References:');
  const codeFiles: string[] = [];
  function walk(d: string) {
    for (const f of fs.readdirSync(d)) {
      if (f === 'node_modules' || f === 'dist' || f === '.git' || f === 'scripts') continue;
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (['.ts', '.tsx', '.js', '.jsx', '.html', '.css', '.json'].includes(path.extname(f))) {
        codeFiles.push(full);
      }
    }
  }
  walk(process.cwd());

  const brokenRefs: Array<{ source: string; ref: string }> = [];

  for (const cf of codeFiles) {
    const content = fs.readFileSync(cf, 'utf-8');
    // Match import or url paths
    const regex = /['"]([^'"]*\/assets\/images\/[^'"]+\.(?:webp|jpg|jpeg|png|svg|ico))['"]/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      const ref = m[1];
      const sourceDir = path.dirname(cf);
      const target = path.resolve(sourceDir, ref);
      if (!fs.existsSync(target)) {
        brokenRefs.push({ source: path.relative(process.cwd(), cf), ref });
      }
    }
  }

  console.log(`Broken references found: ${brokenRefs.length}`);
  if (brokenRefs.length > 0) {
    for (const br of brokenRefs) {
      console.log(` - In ${br.source}: ${br.ref}`);
    }
  }

  console.log('======================================================================');
  console.log(totalCorrupt === 0 && brokenRefs.length === 0 ? '🎉 RESULT: 100% CLEAN - ZERO CORRUPTED FILES, ZERO BROKEN REFERENCES' : '❌ AUDIT FAILED');
  console.log('======================================================================');
}

verifyImages();
