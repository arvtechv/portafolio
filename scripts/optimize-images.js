const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const minSize = 200 * 1024; // 200KB

console.log('Starting image optimization...');

fs.readdir(publicDir, (err, files) => {
  if (err) {
    console.error('Error reading public directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();

    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error processing ${file}:`, err);
          return;
        }

        if (stats.size > minSize) {
          console.log(`Optimizing ${file} (${(stats.size / 1024).toFixed(2)} KB)...`);

          // Convert to WebP
          const webpPath = filePath.replace(ext, '.webp');
          
          sharp(filePath)
            .webp({ quality: 80 }) // 80% quality is usually a good balance
            .toFile(webpPath)
            .then(info => {
              console.log(`✅ Created ${path.basename(webpPath)} (${(info.size / 1024).toFixed(2)} KB) - Savings: ${((1 - info.size / stats.size) * 100).toFixed(1)}%`);
            })
            .catch(err => {
              console.error(`Error converting ${file} to WebP:`, err);
            });
        }
      });
    }
  });
});
