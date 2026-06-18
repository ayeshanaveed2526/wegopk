import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wego.pk - The #1 Travel Booking Website For Flights & Hotel Deals",
  description:
    "Book your flights & hotels on Wego.pk ✈ Compare over 1000 booking sites ✓ Find the lowest price ✓ Fast & easy booking ✓ Find out more now.",
  authors: [{ name: "Wego" }],
  keywords: [
    "flights",
    "hotels",
    "travel",
    "booking",
    "Pakistan",
    "cheap flights",
    "hotel deals",
  ],
  openGraph: {
    title: "Wego.pk - The #1 Travel Booking Website For Flights & Hotel Deals",
    description:
      "Book your flights & hotels on Wego.pk ✈ Compare over 1000 booking sites ✓ Find the lowest price ✓",
    url: "https://www.wego.pk",
    siteName: "Wego.pk",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wego.pk - The #1 Travel Booking Website",
    description: "Compare 1000+ sites to find the lowest flight & hotel prices.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  minimumScale: 1,
  initialScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
            data-options={JSON.stringify(
              { activationMode: "toggle", allowActivationInsideInput: true, maxContextLines: 3 }
            )}
          />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
