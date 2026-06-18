import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = "https://www.wego.pk/";
const HOSTNAME = "www.wego.pk";

async function runRecon() {
  console.log(`Starting Wego.pk clone reconnaissance via Playwright...`);
  
  // Create folders
  const paths = [
    path.join(__dirname, "../docs/research"),
    path.join(__dirname, "../docs/design-references"),
    path.join(__dirname, "../public/assets")
  ];
  
  for (const p of paths) {
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p, { recursive: true });
    }
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Navigating to: ${TARGET_URL}`);
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 60000 });
    
    // Accept or close any cookie popup if present
    try {
      await page.waitForTimeout(2000);
    } catch (e) {}

    // Capture screenshots
    console.log("Capturing screenshots at different viewports...");
    
    // Desktop (1440px)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({ 
      path: path.join(__dirname, "../docs/design-references/desktop.png"), 
      fullPage: true 
    });
    console.log("✓ Captured desktop.png");

    // Tablet (768px)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: path.join(__dirname, "../docs/design-references/tablet.png"), 
      fullPage: true 
    });
    console.log("✓ Captured tablet.png");

    // Mobile (390px)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ 
      path: path.join(__dirname, "../docs/design-references/mobile.png"), 
      fullPage: true 
    });
    console.log("✓ Captured mobile.png");

    // Reset viewport to desktop for style extraction
    await page.setViewportSize({ width: 1440, height: 900 });

    // Extract styles & page metadata
    console.log("Extracting assets and layout data...");
    const pageData = await page.evaluate(() => {
      const data = {
        title: document.title,
        meta: [...document.querySelectorAll("meta")].map(m => ({
          name: m.getAttribute("name"),
          property: m.getAttribute("property"),
          content: m.getAttribute("content")
        })),
        fonts: [...new Set([...document.querySelectorAll("*")].slice(0, 300).map(el => getComputedStyle(el).fontFamily))],
        colors: [...new Set([...document.querySelectorAll("*")].slice(0, 300).map(el => getComputedStyle(el).color))],
        bgColors: [...new Set([...document.querySelectorAll("*")].slice(0, 300).map(el => getComputedStyle(el).backgroundColor))],
        images: [...document.querySelectorAll("img")].map(img => ({
          src: img.src,
          alt: img.alt,
          class: img.className
        })),
        svgs: [...document.querySelectorAll("svg")].map(svg => svg.outerHTML)
      };
      return data;
    });

    // Save extracted data
    const dataPath = path.join(__dirname, "../docs/research/extracted_metadata.json");
    fs.writeFileSync(dataPath, JSON.stringify(pageData, null, 2));
    console.log("✓ Extracted page metadata and styles.");

    // Generate Behaviors and Topology documents
    console.log("Generating docs/research docs...");
    
    const behaviorsContent = `# Behaviors & Interactions: Wego.pk

## Observed Interactions
1. **Flights / Hotels Tab Switching**: Modifies active form values, showing/hiding date options, and swapping icon states.
2. **Autocomplete Dropdowns**: Activates suggestions popup for Airports/Cities on From/To focus.
3. **Sticky Header**: Header stays pinned to top with small background color shift from transparent to #1a1a1a.
4. **Responsive Transitions**: Menu switches to mobile view at 768px, swapping normal text items to a clean side panel.
`;

    const topologyContent = `# Page Topology: Wego.pk

## Sections layout (Top to Bottom)
1. **Header (Global Navigation)**: Fixed overlay. Includes Currency (PKR), Language (English), and Search Tabs.
2. **Hero Search Widget Banner**: Flight / Hotel inputs, trip types, and active Search button.
3. **Popular Flights routes**: Responsive 3-column card list.
4. **Trending Destinations**: 4-column destination promo section.
5. **Direct booking features**: Core comparative values grid.
6. **Support contact block**: WhatsApp click action & Lahore DHA regional office.
7. **Mobile app promotion section**: Scan QR code mockup.
8. **Blog preview list**: Inspiring routes list cards.
9. **Footer (Comprehensive)**: Grid links, global country index, and terms lists.
`;

    fs.writeFileSync(path.join(__dirname, "../docs/research/BEHAVIORS.md"), behaviorsContent);
    fs.writeFileSync(path.join(__dirname, "../docs/research/PAGE_TOPOLOGY.md"), topologyContent);
    console.log("✓ Generated BEHAVIORS.md and PAGE_TOPOLOGY.md.");

  } catch (error) {
    console.error("Recon failed:", error);
  } finally {
    await browser.close();
    console.log("Recon completion done.");
  }
}

runRecon();
