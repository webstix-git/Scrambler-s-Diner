import type { Metadata } from "next";
import { Archivo_Black, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Scrambler's Diner | Springfield, MO",
    template: "%s | Scrambler's Diner",
  },
  description:
    "Family-owned breakfast and lunch diner in Springfield, Missouri since 1997. Omelets, skillets, pancakes, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${barlow.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
