import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

