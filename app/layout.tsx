import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export const metadata: Metadata = {
  title: "Nebula Conf 2026 — The Future of AI & Design",
  description:
    "Three days of talks, workshops and after-parties exploring the intersection of artificial intelligence and craft. Lisbon, May 14–16, 2026.",
  openGraph: {
    title: "Nebula Conf 2026",
    description: "The Future of AI & Design — Lisbon, May 14–16, 2026",
    type: "website",
  },
  icons:{
    icon:"/favicon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} dark`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
