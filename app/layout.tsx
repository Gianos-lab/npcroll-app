import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/query-provider";

export const metadata: Metadata = {
  title: "NPCRoll",
  description: "Curated NPC library and generator",
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
