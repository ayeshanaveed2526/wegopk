const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');
const path = require('path');

const url = 'https://wego.pk';
const outDir = path.join(__dirname, '../docs/research');
const designDir = path.join(__dirname, '../docs/design-references');

// Ensure output directories exist
[outDir, designDir, path.join(outDir, 'components')].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

(async () => {
  console.log(`Starting Puppeteer for ${url}...`);
  const browser = await puppeteer.launch({ 
    headless: false, // Turn off headless to bypass some cloudflare checks
    executablePath: "C:\\Users\\PMLS\\.cache\\puppeteer\\chrome\\win64-149.0.7827.22\\chrome-win64\\chrome.exe"
  });
  const page = await browser.newPage();
  
  // Set Desktop viewport
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Wait for 5 seconds to ensure SPA content loads
  await new Promise(r => setTimeout(r, 5000));
  
  console.log('Taking Desktop screenshot...');
  await page.screenshot({ path: path.join(designDir, 'desktop.png'), fullPage: true });

  // Set Mobile viewport
  await page.setViewport({ width: 390, height: 844 });
  console.log('Taking Mobile screenshot...');
  await page.screenshot({ path: path.join(designDir, 'mobile.png'), fullPage: true });

  // Reset to desktop for extraction
  await page.setViewport({ width: 1440, height: 1080 });

  // Extract Global Assets and Info
  console.log('Extracting global assets and fonts...');
  const globalData = await page.evaluate(() => {
    return {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        parentClasses: img.parentElement ? img.parentElement.className : null,
        position: getComputedStyle(img).position,
        zIndex: getComputedStyle(img).zIndex
      })),
      videos: [...document.querySelectorAll('video')].map(v => ({
        src: v.src || (v.querySelector('source') ? v.querySelector('source').src : null)
      })),
      backgroundImages: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none';
      }).map(el => ({
        url: getComputedStyle(el).backgroundImage,
        element: el.tagName + '.' + (el.className ? el.className.split(' ')[0] : '')
      })),
      fonts: [...new Set([...document.querySelectorAll('*')].slice(0, 200).map(el => getComputedStyle(el).fontFamily))],
      colors: [...new Set([...document.querySelectorAll('*')].map(el => getComputedStyle(el).color))],
      bgColors: [...new Set([...document.querySelectorAll('*')].map(el => getComputedStyle(el).backgroundColor))]
    };
  });

  fs.writeFileSync(path.join(outDir, 'global_assets.json'), JSON.stringify(globalData, null, 2));

  // Extract page topology (sections)
  console.log('Extracting page topology...');
  const topology = await page.evaluate(() => {
    const sections = [];
    const directChildren = document.body.children;
    for (let i = 0; i < directChildren.length; i++) {
      const el = directChildren[i];
      if (['SCRIPT', 'NOSCRIPT', 'STYLE', 'IFRAME', 'LINK'].includes(el.tagName)) continue;
      
      const cs = getComputedStyle(el);
      if (cs.display === 'none') continue;
      
      sections.push({
        index: i,
        tagName: el.tagName,
        className: el.className,
        id: el.id,
        position: cs.position,
        height: cs.height,
        width: cs.width,
        zIndex: cs.zIndex
      });
    }
    return sections;
  });

  fs.writeFileSync(path.join(outDir, 'topology.json'), JSON.stringify(topology, null, 2));

  // Deep extraction of specific elements
  console.log('Extracting component DOM trees...');
  
  const extractScript = `
  const props = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'backgroundColor','padding','margin','width','height','display','flexDirection',
    'justifyContent','alignItems','gap','borderRadius','border','boxShadow',
    'position','top','right','bottom','left','zIndex','opacity','transform','textAlign'
  ];
  function extractStyles(element) {
    const cs = getComputedStyle(element);
    const styles = {};
    props.forEach(p => { 
      const v = cs[p]; 
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
        styles[p] = v; 
      }
    });
    return styles;
  }
  function walk(element, depth) {
    if (depth > 8) return null;
    const children = [...element.children].filter(c => !['SCRIPT', 'STYLE'].includes(c.tagName));
    return {
      tag: element.tagName.toLowerCase(),
      classes: element.className ? element.className.toString() : '',
      id: element.id || '',
      text: element.childNodes.length > 0 ? [...element.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').slice(0, 200) : null,
      styles: extractStyles(element),
      images: element.tagName === 'IMG' ? { src: element.src, alt: element.alt } : null,
      svg: element.tagName === 'SVG' ? element.outerHTML : null,
      children: children.map(c => walk(c, depth + 1)).filter(Boolean)
    };
  }
  return walk(document.body, 0);
  `;
  
  const domTree = await page.evaluate(new Function(extractScript));
  fs.writeFileSync(path.join(outDir, 'dom_tree.json'), JSON.stringify(domTree, null, 2));

  console.log('Extraction complete.');
  await browser.close();
})();
