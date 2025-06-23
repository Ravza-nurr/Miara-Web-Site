"use client";

import { navigationItems } from "@/lib/data";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Mevcut URL'yi kontrol et ve aktif sayfayı belirle
    const currentPath = window.location.pathname;
    setActivePage(currentPath);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // URL'nin belirli bir path ile başlayıp başlamadığını kontrol eden fonksiyon
  const isPathActive = (path: string, currentPath: string) => {
    // Ana sayfa için tam eşleşme kontrolü
    if (path === "/") {
      return currentPath === "/";
    }
    // Diğer sayfalar için path ile başlama kontrolü
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full border-b border-[var(--color-border-primary)] z-50 transition-all duration-500 bg-[var(--color-bg-primary)] ${
        scrolled ? "h-[16vh] shadow-sm" : "h-[20vh]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Logo ve Nav'ı dikey hizala */}
        <div className="flex flex-col items-center relative w-full">
          {/* Logo */}
          <h1
            className={`font-bold tracking-wider text-[var(--color-text-primary)] mb-4 font-serif transition-all duration-500 ${
              scrolled ? "text-4xl" : "text-5xl"
            }`}
          >
            MİARA
          </h1>

          {/* Hamburger Icon - Only Mobile */}
          <button
            className="absolute right-0 top-0 sm:hidden p-2 z-50"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* Navigation - Web */}
          <nav className="hidden sm:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = isPathActive(item.href, activePage);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all hover:bg-[var(--color-hover-secondary)] px-2 py-1 rounded-xl duration-300 relative group ${
                    isActive
                      ? "text-[var(--color-text-primary)] bg-[var(--color-bg-quaternary)] font-bold"
                      : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <ThemeToggle />
          </nav>

          {/* Navigation - Mobile Dropdown */}
          {mobileMenuOpen && (
            <nav className="sm:hidden absolute top-full left-0 w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)] shadow-lg flex flex-col items-center py-4 animate-fade-in z-40">
              {navigationItems.map((item) => {
                const isActive = isPathActive(item.href, activePage);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block w-full text-center font-medium transition-all px-4 py-3 rounded-xl duration-300 relative group text-lg ${
                      isActive
                        ? "text-[var(--color-text-primary)] bg-[var(--color-bg-quaternary)] font-bold"
                        : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-2">
                <ThemeToggle />
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
