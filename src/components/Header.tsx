"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "ABOUT US", href: "/about" },
    { label: "PRODUCTS", href: "/products" },
    { label: "SPECIALITY CAKES", href: "/speciality-cakes" },
    { label: "FIND US", href: "/find-us" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/olivebakers/olive-bakers-logo.svg"
            width={40}
            height={40}
            alt="Olive Bakers"
            className="h-10 w-10"
            priority
          />
          <span className="hidden text-xl font-bold text-[var(--brand-primary)] sm:block">
            Olive Bakers®
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wide transition ${pathname === item.href
                  ? "text-[#5d2260] underline"
                  : "text-[var(--brand-primary)] hover:text-[#5d2260]"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-[var(--brand-primary)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/40 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-0 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 text-sm font-semibold uppercase tracking-wide transition ${pathname === item.href
                    ? "text-[#5d2260] underline"
                    : "text-[var(--brand-primary)] hover:text-[#5d2260]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

