import type { Metadata, Viewport } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A1E3D" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1E3D" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sssecurityagency.com"
  ),
  title: {
    default:
      "SS Security Agency | Military-Grade Security Services by Col. Subhash Sinha (Veteran)",
    template: "%s | SS Security Agency",
  },
  description:
    "Professional security services with military precision. Led by Col. Subhash Sinha (Veteran) with 31+ years experience. Trusted by DRDO, IOCL & Fortune 500 companies. 24/7 security guards, corporate protection, VIP security, event management & facility services.",
  keywords: [
    "security services",
    "security agency",
    "security guards",
    "corporate security",
    "industrial security",
    "VIP protection",
    "executive protection",
    "event security",
    "facility management",
    "24/7 security monitoring",
    "DRDO security",
    "IOCL security",
    "military security",
    "Col Subhash Sinha",
    "professional security guards",
    "security company",
    "security solutions",
    "manned guarding",
    "compliance security",
    "fire safety",
    "surveillance services",
  ],
  authors: [{ name: "SS Security Agency" }],
  creator: "SS Security Agency",
  publisher: "SS Security Agency",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Security Services",
  classification: "Business",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "SS Security Agency | Military-Grade Security Services",
    description:
      "Professional security services with military precision. Led by Col. Subhash Sinha (Veteran) - 31+ years experience. Trusted by DRDO, IOCL & Fortune 500 companies.",
    siteName: "SS Security Agency",
    images: [
      {
        url: "/hero-security-leader.jpg",
        width: 1200,
        height: 630,
        alt: "SS Security Agency - Professional Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Security Agency | Military-Grade Security Services",
    description:
      "Professional security services with military precision. Led by Col. Subhash Sinha (Veteran) - 31+ years experience.",
    images: ["/hero-security-leader.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#0A1E3D",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicons - use brand logo */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for AI Search Agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SecurityCompany",
                  "@id": "https://sssecurityagency.com/#organization",
                  name: "SS Security Agency",
                  description:
                    "Professional security services with military precision led by Col. Subhash Sinha (Veteran)",
                  url: "https://sssecurityagency.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sssecurityagency.com/logo.png",
                  },
                  image:
                    "https://sssecurityagency.com/hero-security-leader.jpg",
                  sameAs: ["https://sssecurityagency.com"],
                  founder: {
                    "@type": "Person",
                    name: "Col. Subhash Sinha (Veteran)",
                    jobTitle: "Founder & CEO",
                    description:
                      "31+ years of military service, Ex-Army officer",
                  },
                  foundingDate: "1993",
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: "250+",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "B202, Nipuna Heritage, Virupakshapura",
                    addressLocality: "Bangalore",
                    addressRegion: "Karnataka",
                    postalCode: "560097",
                    addressCountry: "IN",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      telephone: "+91-7004708779",
                      email: "info@sssecurityagency.in",
                      areaServed: "IN",
                      availableLanguage: ["en"],
                    },
                  ],
                  hasMap:
                    "https://www.google.com/maps?q=B202%2C%20Nipuna%20Heritage%2C%20Virupakshapura%2C%20Bangalore%2C%20Karnataka%2C%20560097",
                  areaServed: {
                    "@type": "Country",
                    name: "India",
                  },
                  serviceType: [
                    "Corporate Security",
                    "Industrial Security",
                    "VIP Protection",
                    "Event Security",
                    "Facility Management",
                    "24/7 Security Monitoring",
                    "Security Guards",
                    "Executive Protection",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Security Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Professional Security Guards",
                          description:
                            "Highly trained and certified security personnel providing round-the-clock protection",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Industrial & Corporate Security",
                          description:
                            "Comprehensive security infrastructure for industrial facilities and corporate offices",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "24/7 Monitoring & Support",
                          description:
                            "Continuous surveillance and immediate response capabilities",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Event Security Management",
                          description:
                            "Expert crowd control and security coordination for events",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "VIP & Executive Protection",
                          description:
                            "Elite close protection services for high-profile individuals",
                        },
                      },
                    ],
                  },
                  knowsAbout: [
                    "Military Security Protocols",
                    "Corporate Security Management",
                    "Risk Assessment",
                    "Facility Management",
                    "Compliance Standards",
                    "Emergency Response",
                    "Surveillance Systems",
                    "Access Control",
                  ],
                  certifications: [
                    "DGR Certified",
                    "PASARA Certified",
                    "Labour Department Registered",
                  ],
                  clientele: [
                    "DRDO",
                    "IOCL",
                    "Fortune 500 Companies",
                    "Government Organizations",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://sssecurityagency.com/#website",
                  url: "https://sssecurityagency.com",
                  name: "SS Security Agency",
                  description: "Professional Security Services",
                  publisher: {
                    "@id": "https://sssecurityagency.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://sssecurityagency.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://sssecurityagency.com/#webpage",
                  url: "https://sssecurityagency.com",
                  name: "SS Security Agency | Military-Grade Security Services",
                  isPartOf: {
                    "@id": "https://sssecurityagency.com/#website",
                  },
                  about: {
                    "@id": "https://sssecurityagency.com/#organization",
                  },
                  description:
                    "Professional security services with military precision. Trusted by top organizations nationwide.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <SmoothScroll />
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
