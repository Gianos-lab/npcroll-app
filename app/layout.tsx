import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://npcroll.com"),
  title: "NPCRoll — Curated NPC Generator for Fantasy TTRPGs",
  description: "Generate curated NPCs for your fantasy campaign in seconds. Pick your filters, roll the dice, and summon a unique character with backstory, voice, hooks, and motivations.",
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
    title: "NPCRoll — Curated NPC Generator for Fantasy TTRPGs",
    description:
      "Generate curated NPCs for your fantasy campaign in seconds. Pick your filters, roll the dice, and summon a unique character with backstory, voice, hooks, and motivations.",
    url: "https://npcroll.com",
    siteName: "NPCRoll",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "NPCRoll — Curated NPC Generator for Fantasy TTRPGs",
      },
    ],
    locale: "en_US",
    type: "website",
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
