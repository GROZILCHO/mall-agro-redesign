'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

export default function Navbar() {
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
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Десктоп навигация */}
        <nav className="hidden md:flex items-center space-x-6 text-accent text-sm md:text-base lg:text-lg">
          <Link href="/" className="hover:underline whitespace-nowrap">Home</Link>

          <div className="relative group">
            <Link href="#products" className="hover:underline flex items-center whitespace-nowrap">
              Products
              <Icon name="chevronDown" size={20} className="ml-1" />
            </Link>
            <div className="absolute left-0 top-full bg-white text-black shadow-lg hidden group-hover:block p-4">
              <ul>
                <li><Link href="#product1" className="hover:underline">Product 1</Link></li>
                <li><Link href="#product2" className="hover:underline">Product 2</Link></li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <Link href="#solutions" className="hover:underline flex items-center whitespace-nowrap">
              Solutions
              <Icon name="chevronDown" size={20} className="ml-1" />
            </Link>
            <div className="absolute left-0 top-full bg-white text-black shadow-lg hidden group-hover:block p-4">
              <ul>
                <li><Link href="#solution1" className="hover:underline">Solution 1</Link></li>
                <li><Link href="#solution2" className="hover:underline">Solution 2</Link></li>
              </ul>
            </div>
          </div>

          <Link href="#about" className="hover:underline whitespace-nowrap">About Us</Link>
        </nav>

        {/* CTA бутон */}
        <Link
          href="#quote"
          className="hidden md:block button sm:button-sm md:button-md lg:button-lg"
        >
          Get a Quote
        </Link>

        {/* Хамбургер бутон за мобилно меню */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#FFCC33] hover:text-yellow-500 z-50"
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
        <nav className="md:hidden bg-[#154F3C] text-accent px-4 pt-4 pb-6 space-y-4 text-base">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block">Home</Link>
          <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block">Products</Link>
          <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block">Solutions</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block">About Us</Link>
          <Link href="#quote" onClick={() => setIsMobileMenuOpen(false)} className="block button w-full text-center">Get a Quote</Link>
        </nav>
      )}
    </header>
  );
}
