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
    image: "/images/dubai.jpg",
  },
  {
    id: 2,
    name: "Istanbul",
    country: "Turkey",
    code: "IST",
    price: "PKR 98,200",
    route: "KHI → IST",
    image: "/images/istanbul.jpg",
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom",
    code: "LHR",
    price: "PKR 142,000",
    route: "KHI → LHR",
    image: "/images/london.jpg",
  },
  {
    id: 4,
    name: "Bangkok",
    country: "Thailand",
    code: "BKK",
    price: "PKR 62,300",
    route: "LHE → BKK",
    image: "/images/bangkok.jpg",
  },
  {
    id: 5,
    name: "Jeddah",
    country: "Saudi Arabia",
    code: "JED",
    price: "PKR 54,900",
    route: "KHI → JED",
    image: "/images/jeddah.jpg",
  },
  {
    id: 6,
    name: "Kuala Lumpur",
    country: "Malaysia",
    code: "KUL",
    price: "PKR 72,800",
    route: "KHI → KUL",
    image: "/images/kualalumpur.jpg",
  },
  {
    id: 7,
    name: "Toronto",
    country: "Canada",
    code: "YYZ",
    price: "PKR 218,000",
    route: "ISB → YYZ",
    image: "/images/toronto.jpg",
  },
  {
    id: 8,
    name: "Riyadh",
    country: "Saudi Arabia",
    code: "RUH",
    price: "PKR 51,200",
    route: "KHI → RUH",
    image: "/images/riyadh.jpg",
  },
  {
    id: 9,
    name: "New York",
    country: "United States",
    code: "JFK",
    price: "PKR 256,000",
    route: "KHI → JFK",
    image: "/images/newyork.jpg",
  },
  {
    id: 10,
    name: "Muscat",
    country: "Oman",
    code: "MCT",
    price: "PKR 38,700",
    route: "KHI → MCT",
    image: "/images/muscat.jpg",
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
