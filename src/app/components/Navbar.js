'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '../../lib/content/navigation.js';
import { siteRoutes } from '../../lib/routes/siteRoutes.js';
import LanguageSwitcher from './LanguageSwitcher.js';

function getCurrentLocale(pathname) {
  if (pathname?.startsWith('/produse')) {
    return 'ro';
  }

  return 'en';
}

function getNavHref(item, routes) {
  return routes[item.routeKey] || '/';
}

export default function Navbar() {
  const pathname = usePathname();
  const locale = getCurrentLocale(pathname);
  const navItems = navigationItems[locale] || navigationItems.en;
  const routes = siteRoutes[locale] || siteRoutes.en;
  const primaryNavItem = navItems.find((item) => item.isPrimary);
  const mainNavItems = navItems.filter((item) => !item.isPrimary);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 🔁 Изпълнява се само на клиента (браузъра)
  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⛔ Изчакай да се зареди в браузъра
  if (!hasMounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2 bg-[#154F3C]' : 'py-4 bg-menu'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-[100px]">
        {/* Лого */}
        <div className="relative w-full max-w-[300px] h-[60px] md:h-[60px] lg:h-[80px]">
          <Image
            src="/Mall-Agro-logo-slogan.svg"
            alt="Mall Agro Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Десктоп навигация */}
        <nav className="hidden xl:flex items-center space-x-6 text-accent text-sm md:text-base lg:text-lg">
          {mainNavItems.map((item) => (
            <Link key={item.id} href={getNavHref(item, routes)} className="hover:underline whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA бутон */}
        {primaryNavItem && (
          <Link
            href={getNavHref(primaryNavItem, routes)}
            className="hidden xl:block button sm:button-sm md:button-md lg:button-lg"
          >
            {primaryNavItem.label}
          </Link>
        )}

        <LanguageSwitcher
          className="hidden xl:block text-accent text-sm md:text-base lg:text-lg hover:underline whitespace-nowrap"
          viewport="desktop"
        />

        {/* Хамбургер бутон за мобилно меню */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-[#FFCC33] hover:text-yellow-500 z-50"
        >
          {isMobileMenuOpen ? (
            // X икона
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Хамбургер икона
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Мобилно меню */}
      {isMobileMenuOpen && (
        <nav className="xl:hidden bg-[#154F3C] text-accent px-4 pt-4 pb-6 space-y-4 text-base">
          {mainNavItems.map((item) => (
            <Link key={item.id} href={getNavHref(item, routes)} onClick={() => setIsMobileMenuOpen(false)} className="block">
              {item.label}
            </Link>
          ))}
          {primaryNavItem && (
            <Link href={getNavHref(primaryNavItem, routes)} onClick={() => setIsMobileMenuOpen(false)} className="block button w-full text-center">
              {primaryNavItem.label}
            </Link>
          )}
          <LanguageSwitcher
            className="block"
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
