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
  
  // Konfigurasi Verifikasi Google Search Console
  verification: {
    google: "_H8PRjc6rX-fm2p9GMzaXhm8t17DiZECiNtYvJCWEdg",
  },

  // Konfigurasi ikon / favicon menggunakan favicon.ico
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "https://taruhan88-ten.vercel.app/",
    languages: {
      "id-ID": "https://taruhan88-ten.vercel.app/",
    },
  },
  openGraph: {
    title: "TARUHAN88 | Agent Taruhan88 Terbesar Se-Asia",
    description:
      "Lewat TARUHAN88 RESMI, nikmati link alternatif terpercaya yang menjamin kelancaran akses Anda. Didukung lisensi agen bola sah dan infrastruktur server terbaru, taruhan jadi jauh lebih aman, stabil, dan transparan",
    url: "https://taruhan88-ten.vercel.app/",
    siteName: "TARUHAN88",
    images: [
      {
        url: "https://taruhan88-ten.vercel.app/icon.png",
        width: 800,
        height: 600,
        alt: "TARUHAN88 Logo",
      },
      {
        url: "https://taruhan88-ten.vercel.app/icon.png",
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