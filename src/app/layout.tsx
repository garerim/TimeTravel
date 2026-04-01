import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TimeTravel Agency - Voyagez dans le temps",
  description:
    "Explorez les époques les plus fascinantes de l'histoire. Paris 1889, le Crétacé, Florence 1504. Réservez votre voyage temporel de luxe.",
  alternates: {
    canonical: "https://time-travel-beta.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://time-travel-beta.vercel.app/",
    title: "TimeTravel Agency - Voyagez dans le temps",
    description:
      "Explorez les époques les plus fascinantes de l'histoire. Paris 1889, le Crétacé, Florence 1504. Réservez votre voyage temporel de luxe.",
    images: [
      {
        url: "https://time-travel-beta.vercel.app/images/paris.png",
        width: 1200,
        height: 630,
        alt: "TimeTravel Agency - Voyagez dans le temps",
      },
    ],
    locale: "fr_FR",
    siteName: "TimeTravel Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeTravel Agency - Voyagez dans le temps",
    description:
      "Explorez les époques les plus fascinantes de l'histoire. Paris 1889, le Crétacé, Florence 1504.",
    images: ["https://time-travel-beta.vercel.app/images/paris.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://time-travel-beta.vercel.app/#organization",
    name: "TimeTravel Agency",
    url: "https://time-travel-beta.vercel.app/",
    logo: {
      "@type": "ImageObject",
      url: "https://time-travel-beta.vercel.app/images/paris.png",
      width: 1200,
      height: 630,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      email: "contact@timetravel-agency.com",
      contactType: "customer support",
      availableLanguage: "French",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "42 Rue du Temps",
      postalCode: "75001",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    foundingDate: "2035",
    description:
      "Agence de voyage temporel de luxe. Explorez les époques les plus fascinantes de l'histoire.",
  },
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://time-travel-beta.vercel.app/#travelagency",
    name: "TimeTravel Agency",
    url: "https://time-travel-beta.vercel.app/",
    telephone: "+33-1-23-45-67-89",
    email: "contact@timetravel-agency.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "42 Rue du Temps",
      postalCode: "75001",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    description:
      "Votre agence de voyage temporel de luxe. Depuis 2035, nous transformons les rêves d'exploration historique en réalité.",
    image: "https://time-travel-beta.vercel.app/images/paris.png",
    priceRange: "€€€€",
    currenciesAccepted: "EUR",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://time-travel-beta.vercel.app/#website",
    url: "https://time-travel-beta.vercel.app/",
    name: "TimeTravel Agency",
    description:
      "Explorez les époques les plus fascinantes de l'histoire. Paris 1889, le Crétacé, Florence 1504.",
    inLanguage: "fr-FR",
    publisher: {
      "@id": "https://time-travel-beta.vercel.app/#organization",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Voyage Temporel — Paris 1889",
    description:
      "Vivez l'inauguration de la Tour Eiffel et l'Exposition Universelle dans le Paris flamboyant de la Belle Époque.",
    image: "https://time-travel-beta.vercel.app/images/paris.png",
    sku: "TT-PARIS-1889",
    brand: { "@type": "Brand", name: "TimeTravel Agency" },
    offers: {
      "@type": "Offer",
      url: "https://time-travel-beta.vercel.app/#destinations",
      priceCurrency: "EUR",
      price: "12500",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Voyage Temporel — Crétacé",
    description:
      "Explorez un monde dominé par les dinosaures, où la nature règne en maître absolu sur une Terre méconnaissable.",
    image: "https://time-travel-beta.vercel.app/images/dino.png",
    sku: "TT-CRET-65M",
    brand: { "@type": "Brand", name: "TimeTravel Agency" },
    offers: {
      "@type": "Offer",
      url: "https://time-travel-beta.vercel.app/#destinations",
      priceCurrency: "EUR",
      price: "18900",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Voyage Temporel — Florence 1504",
    description:
      "Rencontrez les plus grands génies de la Renaissance et contemplez la création des chefs-d'œuvre qui ont changé le monde.",
    image: "https://time-travel-beta.vercel.app/images/florence.png",
    sku: "TT-FLO-1504",
    brand: { "@type": "Brand", name: "TimeTravel Agency" },
    offers: {
      "@type": "Offer",
      url: "https://time-travel-beta.vercel.app/#destinations",
      priceCurrency: "EUR",
      price: "14200",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
