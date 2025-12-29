import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newworldtransportation.ae"),
  title: {
    default:
      "New World Transportation Services LLC - Water Tanker Services & Logistics UAE",
    template: "%s | New World Transportation Services LLC",
  },
  description:
    "Leading water tanker services in UAE with 2000, 5000, 7000, 10000 & 15000 gallon tankers. Expert sweet water delivery, cargo transportation, logistics, and vehicle recovery services across Dubai, Abu Dhabi & UAE.",
  keywords: [
    "water tanker services UAE",
    "sweet water delivery Dubai",
    "water transportation Abu Dhabi",
    "cargo logistics UAE",
    "tanker rental Dubai",
    "2000 gallon tanker",
    "5000 gallon water tanker",
    "7000 gallon tanker UAE",
    "10000 gallon water delivery",
    "15000 gallon tanker rental",
    "TSE water irrigation",
    "sewage removal services",
    "vehicle recovery UAE",
    "dewatering services Dubai",
    "portable water supply",
    "commercial water delivery",
    "construction water supply",
    "emergency water tanker",
    "bulk water transportation",
    "New World Transportation LLC",
  ],
  authors: [{ name: "New World Transportation Services LLC" }],
  creator: "New World Transportation Services LLC",
  publisher: "New World Transportation Services LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://newworldtransportation.ae",
    siteName: "New World Transportation Services LLC",
    title:
      "New World Transportation Services - Water Tanker Services & Logistics UAE",
    description:
      "Premier water tanker services (2000-15000 gallons), cargo transportation, and logistics solutions across UAE. Reliable, professional, and available 24/7.",
    images: [
      {
        url: "/logonwt.jpeg",
        width: 1200,
        height: 630,
        alt: "New World Transportation Services LLC - Water Tanker & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New World Transportation Services - Water Tanker Services UAE",
    description:
      "Leading water tanker services with 2000-15000 gallon capacity. Expert logistics & transportation solutions in UAE.",
    images: ["/logonwt.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://newworldtransportation.ae",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: "/logonwt.jpeg" },
      { url: "/logonwt.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logonwt.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logonwt.jpeg" },
      { url: "/logonwt.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: "/logonwt.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logonwt.jpeg" />
        <link rel="apple-touch-icon" href="/logonwt.jpeg" />
        <meta name="theme-color" content="#0891B2" />
        <meta
          name="application-name"
          content="New World Transportation Services"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NWT Services" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "New World Transportation Services LLC",
              image: "/logonwt.jpeg",
              "@id": "https://newworldtransportation.ae",
              url: "https://newworldtransportation.ae",
              telephone: "+971-XX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dubai",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2048,
                longitude: 55.2708,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/newworldtransportation",
                "https://www.instagram.com/newworldtransportation",
              ],
              priceRange: "$$",
              description:
                "Leading water tanker services in UAE with fleet ranging from 2000 to 15000 gallons. We provide sweet water delivery, cargo transportation, logistics, and vehicle recovery services.",
              areaServed: [
                {
                  "@type": "City",
                  name: "Dubai",
                },
                {
                  "@type": "City",
                  name: "Abu Dhabi",
                },
                {
                  "@type": "City",
                  name: "Sharjah",
                },
                {
                  "@type": "State",
                  name: "United Arab Emirates",
                },
              ],
              serviceType: [
                "Water Tanker Services",
                "Sweet Water Delivery",
                "Cargo Transportation",
                "Logistics Services",
                "Vehicle Recovery",
                "Dewatering Services",
                "TSE Water Irrigation",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  );
}
