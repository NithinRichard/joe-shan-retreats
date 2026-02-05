import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joe Shan Retreats | Luxury Villas in Kerala",
    template: "%s | Joe Shan Retreats",
  },
  description:
    "Luxury boutique retreats in Kerala. Discover tropical villas, coastal escapes, and curated experiences by Joe Shan Retreats.",
  metadataBase: new URL("https://joeshanretreats.com"),
  openGraph: {
    title: "Joe Shan Retreats",
    description:
      "Luxury boutique retreats in Kerala. Discover tropical villas, coastal escapes, and curated experiences by Joe Shan Retreats.",
    url: "https://joeshanretreats.com",
    siteName: "Joe Shan Retreats",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Joe Shan Retreats",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} bg-ivory text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}