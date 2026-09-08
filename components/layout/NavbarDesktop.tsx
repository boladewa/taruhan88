"use client";

import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
  external: boolean;
}

const menus: MenuItem[] = [
  { name: "BERANDA", href: "/", external: false },
  { name: "SPORTS", href: "https://www.terushebatunggul.com/en/euro", external: true },
  { name: "VIRTUAL SPORTS", href: "https://www.terushebatunggul.com/virtualsports", external: true },
  { name: "LIVE CASINO", href: "https://www.terushebatunggul.com/livecasino", external: true },
  { name: "SLOT", href: "https://www.terushebatunggul.com/games", external: true },
  { name: "TEMBAK IKAN", href: "https://www.terushebatunggul.com", external: true },
  { name: "SABUNG AYAM", href: "https://www.terushebatunggul.com", external: true },
];

export default function NavbarDesktop() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-xl">
      {/* 1. TOP BAR */}
      <div className="w-full border-b border-blue-500/20">
        <div className="relative flex h-[100px] w-full items-center px-6 lg:px-12">
          {/* Logo di Kiri */}
          <a
            href="https://www.terushebatunggul.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex cursor-pointer items-center"
          >
            <Image
              src="/logo-navbar.png"
              alt="TARUHAN88"
              width={240}
              height={70}
              priority
              className="h-auto w-auto drop-shadow-[0_0_15px_rgba(30,111,255,.35)] transition-all duration-300 hover:scale-105"
            />
          </a>

          {/* Grup Tombol di Kanan */}
          <div className="absolute right-6 flex items-center gap-3 lg:right-12">
            {/* Tombol LOGIN */}
            <a
              href="https://www.terushebatunggul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 min-w-[120px] items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-600 px-5 text-sm font-extrabold uppercase text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              LOGIN
            </a>

            {/* Tombol RTP */}
            <Link
              href="/rtp"
              className="flex h-11 min-w-[100px] items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-600 px-5 text-sm font-extrabold uppercase text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              RTP
            </Link>

            {/* Tombol DAFTAR */}
            <Link
              href="/register"
              className="flex h-11 min-w-[125px] items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-600 px-5 text-sm font-extrabold uppercase text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              DAFTAR
            </Link>

            {/* Tombol HUBUNGI */}
            <a
              href="https://wa.me/855887833087"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 min-w-[120px] items-center justify-center rounded-xl border border-blue-400 bg-black px-5 text-sm font-bold uppercase text-blue-400 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white"
            >
              HUBUNGI
            </a>
          </div>
        </div>
      </div>

      {/* 2. MENU BAR */}
      <div className="flex w-full justify-center border-b border-blue-500/20 bg-[#151515]">
        <div className="w-full max-w-[1080px]">
          <nav className="flex h-14 w-full items-center">
            <ul className="flex w-full items-center justify-between">
              {menus.map((menu) => (
                <li key={menu.name} className="shrink-0">
                  {menu.external ? (
                    <a
                      href={menu.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-blue-400 lg:text-base after:absolute after:-bottom-[17px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {menu.name}
                    </a>
                  ) : (
                    <Link
                      href={menu.href}
                      className="relative block text-sm font-black uppercase tracking-wide text-blue-400 lg:text-base after:absolute after:-bottom-[17px] after:left-0 after:h-[2px] after:w-full after:bg-blue-400"
                    >
                      {menu.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}