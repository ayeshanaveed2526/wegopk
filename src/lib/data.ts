export interface Destination {
  id: number;
  name: string;
  country: string;
  code: string;       // IATA code shown on real wego.pk cards
  price: string;
  image: string;
  route: string;      // e.g. "KHI → DXB"
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

// Popular destinations from Pakistan — real routes shown on wego.pk
// Images from Unsplash (free-to-use, travel photography)
export const popularDestinations: Destination[] = [
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirates",
    code: "DXB",
    price: "PKR 48,500",
    route: "KHI → DXB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Istanbul",
    country: "Turkey",
    code: "IST",
    price: "PKR 98,200",
    route: "KHI → IST",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom",
    code: "LHR",
    price: "PKR 142,000",
    route: "KHI → LHR",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Bangkok",
    country: "Thailand",
    code: "BKK",
    price: "PKR 62,300",
    route: "LHE → BKK",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Jeddah",
    country: "Saudi Arabia",
    code: "JED",
    price: "PKR 54,900",
    route: "KHI → JED",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515099?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Kuala Lumpur",
    country: "Malaysia",
    code: "KUL",
    price: "PKR 72,800",
    route: "KHI → KUL",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Toronto",
    country: "Canada",
    code: "YYZ",
    price: "PKR 218,000",
    route: "ISB → YYZ",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Riyadh",
    country: "Saudi Arabia",
    code: "RUH",
    price: "PKR 51,200",
    route: "KHI → RUH",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "New York",
    country: "United States",
    code: "JFK",
    price: "PKR 256,000",
    route: "KHI → JFK",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Muscat",
    country: "Oman",
    code: "MCT",
    price: "PKR 38,700",
    route: "KHI → MCT",
    image: "https://images.unsplash.com/photo-1601972599748-bf11b788e8e2?auto=format&fit=crop&w=600&q=80",
  },
];

export const valueProps = [
  {
    title: "Search Flights & Hotels",
    description: "Compare over 1,000 online travel sites and get the best prices instantly.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/flight_363374043.png",
  },
  {
    title: "Local & Secure Payments",
    description: "Book in local currency PKR with trusted payment methods and security.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/pay_363374094.png",
  },
  {
    title: "24/7 Premium Support",
    description: "Our support team is always ready to assist you before, during, and after your trip.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/support_363374119.png",
  },
];

export const footerLinks = {
  company: [
    { label: "About Wego", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  explore: [
    { label: "Flights", href: "#" },
    { label: "Hotels", href: "#" },
    { label: "Popular Routes", href: "#" },
    { label: "Travel Destinations", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
