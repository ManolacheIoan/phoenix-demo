import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { site } from "@/content/site";
import { base, siteUrl } from "@/lib/paths";
import "./globals.css";

// Se preîncarcă doar „latin”; fișierele latin-ext (ă, î, ș, ț) sunt declarate și se încarcă imediat ce apar diacritice.
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: { default: `${site.name} — sală de fitness în Tecuci`, template: `%s | ${site.name}` },
  description: `${site.name}, sala de fitness de pe ${site.address.street}, ${site.address.city}. Cardio, aparate de forță, abonamente și antrenament de probă gratuit. Telefon ${site.phone.display}.`,
  alternates: { canonical: "./" },
  icons: { icon: `${base}/icon.svg`, apple: `${base}/apple-icon.png` },
  openGraph: {
    title: `${site.name} — Sala ta din Tecuci`,
    description: "Cardio, forță, fitness bar. Vino la un antrenament de probă gratuit.",
    locale: "ro_RO",
    siteName: site.name,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Fitness Phoenix — Sala ta din Tecuci" }],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#13203f", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  url: site.url,
  image: `${siteUrl}/og.png`,
  telephone: site.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.county,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram.url],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.google.ratingValue,
    reviewCount: site.google.reviewCount,
    bestRating: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`no-js ${montserrat.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
