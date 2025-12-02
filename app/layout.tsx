import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://npcroll.com"),
  title: "NPCRoll | Fast, Curated Fantasy NPC Generator for TTRPG GMs",
  description: "Tired of bland NPCs? NPCRoll instantly generates fully-written, system-agnostic Non-Player Characters with unique personalities, detailed hooks, and plot-driving story details for your next TTRPG game. Roll your next adventure.",
  keywords: ["NPC generator", "TTRPG", "D&D", "Pathfinder", "fantasy RPG", "GM tools", "tabletop RPG", "NPC creator", "random NPC", "character generator"],
  authors: [{ name: "NPCRoll" }],
  creator: "NPCRoll",
  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  ],
  apple: "/apple-touch-icon.png",
  },
   alternates: {
    canonical: "https://npcroll.com",  },
  openGraph: {
    title: "NPCRoll | Fast, Curated Fantasy NPC Generator for TTRPG GMs",
    description:
      "Tired of bland NPCs? NPCRoll instantly generates fully-written, system-agnostic Non-Player Characters with unique personalities, detailed hooks, and plot-driving story details for your next TTRPG game.",
    url: "https://npcroll.com",
    siteName: "NPCRoll",
    images: [
      {
        url: "/og_cover.jpg",
        width: 1200,
        height: 630,
        alt: "NPCRoll — Fast, Curated Fantasy NPC Generator for TTRPG GMs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NPCRoll | Fast, Curated Fantasy NPC Generator for TTRPG GMs",
    description: "Tired of bland NPCs? Instantly generate fully-written characters with unique personalities, hooks, and story details.",
    images: ["/og_cover.jpg"],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NPCRoll",
  applicationCategory: "GameApplication",
  operatingSystem: "Web",
  description: "A curated NPC generator for fantasy tabletop RPGs. Instantly generate fully-written, system-agnostic Non-Player Characters with unique personalities, detailed hooks, and plot-driving story details.",
  url: "https://npcroll.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGC63CQX');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Germania+One&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGC63CQX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
