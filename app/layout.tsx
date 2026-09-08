import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TARUHAN88 | Agent TARUHAN Terbesar Se-Asia",
  description:
    "Lewat TARUHAN RESMI, nikmati link alternatif terpercaya yang menjamin kelancaran akses Anda. Didukung lisensi agen bola sah dan infrastruktur server terbaru, taruhan jadi jauh lebih aman, stabil, dan transparan",
  
  // Konfigurasi ikon / favicon menggunakan favicon.ico
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "https://www.boladewa.online",
    languages: {
      "id-ID": "https://boladewa.online",
    },
  },
  openGraph: {
    title: "TARUHAN88 | Agent Taruhan88 Terbesar Se-Asia",
    description:
      "Lewat TARUHAN88 RESMI, nikmati link alternatif terpercaya yang menjamin kelancaran akses Anda. Didukung lisensi agen bola sah dan infrastruktur server terbaru, taruhan jadi jauh lebih aman, stabil, dan transparan",
    url: "https://www.boladewa.online/",
    siteName: "TARUHAN88",
    images: [
      {
        url: "https://www.boladewa.online/icon.png",
        width: 800,
        height: 600,
        alt: "TARUHAN88 Logo",
      },
      {
        url: "https://boladewa.online/icon.png",
        width: 800,
        height: 600,
        alt: "TARUHAN88 Logo Tanpa WWW",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}