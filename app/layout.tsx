import type { Metadata } from "next";
import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-fallback",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair-fallback",
});

export const metadata: Metadata = {
  title: "Business Leaders Association",
  description: "Website for the Business Leaders Association.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
