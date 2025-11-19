import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/query-provider";

export const metadata: Metadata = {
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
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
