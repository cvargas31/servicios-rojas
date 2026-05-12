import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LangProvider from "@/components/LangProvider";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.servicios-rojas.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Servicios Rojas, S.A. | Ingeniería Civil y Telecomunicaciones en Panamá",
    template: "%s | Servicios Rojas, S.A.",
  },
  description:
    "Servicios Rojas, S.A. — Soluciones llave en mano en ingeniería civil, telecomunicaciones y remodelaciones & construcción comercial en Panamá desde 1997. Calle E, Casa L 17, Bethania. Tel. +507 229-8840.",
  applicationName: "Servicios Rojas",
  authors: [{ name: "Servicios Rojas, S.A." }],
  generator: "Next.js",
  keywords: [
    "ingeniería civil Panamá",
    "telecomunicaciones Panamá",
    "construcción Panamá",
    "data center Panamá",
    "torres telecom",
    "BTS Panamá",
    "remodelación comercial Panamá",
    "construcción comercial Panamá",
    "proyectos llave en mano",
    "Servicios Rojas",
    "obra civil Panamá",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Servicios Rojas, S.A.",
  publisher: "Servicios Rojas, S.A.",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "es-PA": "/", "en-US": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Servicios Rojas, S.A.",
    title: "Servicios Rojas, S.A. | Ingeniería Civil y Telecomunicaciones en Panamá",
    description:
      "29 años entregando proyectos llave en mano de ingeniería civil, telecom y data centers en Panamá.",
    images: [
      {
        url: "/images/logotipo-servicios-rojas.png",
        width: 1200,
        height: 630,
        alt: "Servicios Rojas, S.A.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Rojas, S.A.",
    description:
      "Ingeniería civil, telecom y data centers en Panamá. Proyectos llave en mano desde 1997.",
    images: ["/images/logotipo-servicios-rojas.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": `${SITE_URL}#organization`,
  name: "Servicios Rojas, S.A.",
  legalName: "Servicios Rojas, S.A.",
  alternateName: "Servicios Rojas",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logotipo-servicios-rojas.png`,
  image: `${SITE_URL}/images/logotipo-servicios-rojas.png`,
  description:
    "Soluciones integradas en ingeniería civil, telecomunicaciones y remodelaciones & construcción comercial en Panamá desde 1997.",
  foundingDate: "1997",
  telephone: "+507-229-8840",
  faxNumber: "+507-229-6415",
  email: "proyectos@servicios-rojas.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle E, Casa L 17, Bethania",
    addressLocality: "Panamá",
    addressRegion: "Panamá",
    addressCountry: "PA",
  },
  areaServed: { "@type": "Country", name: "Panamá" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [] as string[],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Telecomunicaciones" },
      { "@type": "OfferCatalog", name: "Ingeniería Civil" },
      { "@type": "OfferCatalog", name: "Data Centers" },
      { "@type": "OfferCatalog", name: "Remodelaciones y Construcción Comercial" },
    ],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <LangProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </LangProvider>

        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {(GA_ID || GOOGLE_ADS_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID ?? GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
