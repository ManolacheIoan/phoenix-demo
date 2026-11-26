import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: `${site.name} — sală de fitness în Tecuci`,
  description: `${site.name}, sala de fitness de pe ${site.address.street}, ${site.address.city}. Abonamente, program, antrenament de probă gratuit. Telefon ${site.phone.display}.`,
  icons: { icon: `${base}/icon.svg` },
  openGraph: {
    title: `${site.name} — Sala ta din Tecuci`,
    description: "Abonamente, program și antrenament de probă gratuit.",
    locale: "ro_RO",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  url: site.url,
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
    <html lang="ro" className="no-js">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
