# DESIGN.md: Wego.pk

## Source
- URL: https://www.wego.pk/
- Capture date: 2026-06-11
- Evidence: Firecrawl CLI (`branding`, `images`, `screenshot`, `markdown` formats)

## Reference Screenshot
![Full-page screenshot of Wego.pk](./.firecrawl/wego-hero-bg.png)

Use this screenshot as the visual source of truth for layout, hierarchy, density, and feel.

## Design Summary
Wego.pk is a travel booking aggregator with a clean, modern light design. The hero features a full-bleed photo background (mountain/golden sunset) with a centered-to-left aligned white search card floated on it. A fixed top navbar sits in Wego's brand blue. The green mascot (fluffy alien creature) and hot-air balloons appear as decorative elements on the hero. Below the fold: trust bar, feature highlights, app download section, FAQ, and footer.

## Design Tokens

### Colors
- **Primary Brand Blue** (navbar): `#0090CC` (observed from screenshot)
- **Primary Accent / CTA Green**: `#44B50C` (confirmed from branding.json)
- **Light Green (badge bg)**: `#E7FDDC` (confirmed from branding.json)
- **Text Primary**: `#1D1D1D` (confirmed)
- **Background**: `#FFFFFF` (confirmed)
- **Link / Icon**: `#44B50C`
- **Navbar Blue**: `#0090CC` (observed)
- **Orange badge (New)**: `#FF7A00` (observed)

### Typography
- **Primary Font**: `Inter`, `Geeza Pro`, `sans-serif`
- **Heading Font**: `Inter`, `Geeza Pro`, `sans-serif`
- **Font Sizes**: h1=16px, h2=30px, body=16px
- **Button**: font-extrabold, 100px border-radius (pill)

### Spacing And Layout
- **Base Unit**: 4px
- **Border Radius**: 8px (cards), 100px (buttons/pills)
- **Container**: max-w-7xl, px-4/6/8
- **Navbar Height**: 64px fixed
- **Search Card**: white bg, rounded-2xl, p-5/6, shadow-2xl

## Hero Section
- **Background**: Real photo `pk_1.png` (mountain/golden-hour landscape, full bleed)
- **Background position**: center/bottom, object-cover
- **Overlay**: subtle dark gradient overlay at top for navbar readability
- **Left Balloon**: Large hot-air balloon (orange/red/yellow stripes) at bottom-left
- **Right Balloon**: Smaller red hot-air balloon at right side
- **Mascot**: Green furry alien (`support_363374119.png`) positioned center-right, sitting above bottom of hero
- **Search card**: white card, centered horizontally, tabs above card
- **Visa Bar**: white pill below search card with Umrah e-Visa / e-Visa / eSIM

## Components

### Navbar (fixed, blue)
- Logo: italic "wego" text + green plane box icon
- WegoPro link (with blue crystal icon) for Business Travel
- Flag + EN + PKR language/currency selector
- Support link, My Trips link
- Login button (outlined pill, white border)

### Search Tabs (translucent pill above card)
- Dark translucent background: `rgba(0,0,0,0.25)` with backdrop-blur
- Active tab: white bg, green icon
- Tabs: Flights (plane icon), Hotels (bed icon), Car Rentals (car icon)

### Flight Search Form (inside white card)
- Trip type pills: One-way | Round-trip (active=green bg) | Multi-city
- From/To inputs in bordered box with swap icon
- Depart/Return date inputs with < > arrows
- Bottom bar: Direct Only checkbox, 1 Adult dropdown, Economy dropdown, Payment Types dropdown, Search button (green pill)

### Trust Section
- "Trusted by 83 million+ travellers worldwide"  
- App Store 4.7 / 230,591+ reviews | Google Play 4.7 / 187,371+ reviews

### Feature Highlights (3 cards)
- Best Deals (flight icon)
- Flexible Payment (pay icon)
- 24/7 Support (mascot icon)

### App Download Section
- "Globally top-rated and MENA's #1 travel app, with 83M+ downloads"
- App mockup phone image
- QR code
- Apple App Store + Google Play badges

### FAQ Section
- Accordion items: What is Wego? | Reliability | Book on Wego | Lowest price | Popularity

### Footer
- 4 columns: Plan & Book | Company & Support | Business & Partners | Download
- Social links: Facebook, X, Instagram, LinkedIn, TikTok
- Copyright 2026 Wego Pte Ltd

## Images (from scrape)
| Role | URL |
|---|---|
| Hero BG | `https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_1920/v1597920831/web/hero_images/pk_1.png` |
| Mascot/Support | `https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/support_363374119.png` |
| Flight/Deals icon | `https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/flight_363374043.png` |
| Pay icon | `https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/pay_363374094.png` |
| App mockup | `https://zen.wego.com/cdn-cgi/image/width=600/web/illustrations/download-app-phone_en.png` |
| App Store badge | `https://zen.wego.com/cdn-cgi/image/format=auto,quality=90/cms/images/app-store-icon_354729773.png` |
| Play Store badge | `https://zen.wego.com/cdn-cgi/image/format=auto,quality=90/cms/images/google-playstore-icon_354729800.png` |
| QR Code | `https://assets.wego.com/image/upload/h_120,w_120,f_auto,fl_lossy,q_auto:low/v202010050/web/install_banner/qr_code.png` |

## Rerun Inputs
workflow: firecrawl-website-design-clone
source_url: https://www.wego.pk/
target_stack: Next.js 15 + TypeScript + Tailwind CSS
output: DESIGN.md
