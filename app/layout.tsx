import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://npcroll.com"),
  title: "NPCRoll — Generate NPCs for Your 5e Adventures",
  description: "Generate curated NPCs for your 5e campaign in seconds. Pick your filters, roll the dice, and summon a unique character with backstory, voice, hooks, and motivations.",
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
    title: "NPCRoll — Generate NPCs for Your 5e Adventures",
    description:
      "Generate curated NPCs for your 5e campaign in seconds. Pick your filters, roll the dice, and summon a unique character with backstory, voice, hooks, and motivations.",
    url: "https://npcroll.com",
    siteName: "NPCRoll",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "NPCRoll — Generate NPCs for Your 5e Adventures",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Germania+One&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
