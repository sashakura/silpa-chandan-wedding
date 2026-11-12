import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/layout/MusicPlayer";

const siteUrl =
  process.env.DEPLOY_PRIME_URL ||
  process.env.URL ||
  "http://localhost:3000";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Silpa & Chandan | Wedding Invitation",
  description: "Join Silpa & Chandan as they begin their forever.",
  openGraph: {
    title: "Silpa & Chandan | Wedding Invitation",
    description: "Join us as we begin our forever."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
