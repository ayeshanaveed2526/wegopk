const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = require('../docs/research/global_assets.json');

const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        resolve(null);
      }
    }).on('error', reject);
  });
}

(async () => {
  console.log('Downloading images...');
  for (const img of assets.images) {
    if (!img.src || img.src.startsWith('data:')) continue;
    let imgUrl = img.src;
    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
    
    // Create a filename from the url
    const urlObj = new URL(imgUrl);
    let filename = path.basename(urlObj.pathname);
    if (!filename || !filename.includes('.')) {
      filename += '.png';
    }
    
    try {
      await download(imgUrl, path.join(imagesDir, filename));
      console.log(`Downloaded ${filename}`);
    } catch(e) {
      console.error(`Failed ${imgUrl}`);
    }
  }
  console.log('Done downloading images.');
})();
