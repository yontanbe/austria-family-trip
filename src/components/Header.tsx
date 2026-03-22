"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/journey", label: "📖 יומן מסע" },
  { href: "/days/1", label: "ימים" },
  { href: "/waterfalls", label: "💧 מפלים" },
  { href: "/lakes", label: "🌊 אגמים" },
  { href: "/videos", label: "▶️ סרטונים" },
  { href: "/tips", label: "טיפים" },
  { href: "/gallery", label: "גלריה" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🏔️</span>
            <div className="leading-tight">
              <div className="font-black text-sm text-[#1a3d2b] group-hover:text-[#4a9eca] transition-colors">
                17 ימים באוסטריה
              </div>
              <div className="font-medium text-xs text-[#6b7280]">משפחת בן חיים</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a3d2b] hover:bg-[#f0f7f3] rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Link
              href="/days/1"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a3d2b] text-white text-sm font-semibold rounded-full hover:bg-[#2d6b4a] transition-colors shadow-sm"
            >
              <span>🗺️</span>
              <span>לו"ז יומי</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
          >
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
