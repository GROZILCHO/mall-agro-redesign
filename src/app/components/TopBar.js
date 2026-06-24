'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

const topBarLabels = {
    en: {
        hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
        searchPlaceholder: 'Search products...',
    },
    ro: {
        hours: 'Luni-Vineri: 9:00 - 18:00',
        searchPlaceholder: 'Caută produse...',
    },
};

function getCurrentLocale(pathname) {
    if (pathname?.startsWith('/produse')) {
        return 'ro';
    }

    return 'en';
}

export default function TopBar() {
    const pathname = usePathname();
    const locale = getCurrentLocale(pathname);
    const labels = topBarLabels[locale] || topBarLabels.en;
    const [showTopBar, setShowTopBar] = useState(true);
    const [hasMounted, setHasMounted] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        setHasMounted(true);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current) {
                setShowTopBar(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowTopBar(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!hasMounted) return null;

    return (
        <div
            className={`hidden md:flex bg-[#F8F5F0] text-[#1E5F4B] text-sm py-2 px-4 lg:px-[100px] justify-between items-center transition-transform duration-300 ${
                showTopBar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* Лява секция */}
            <div className="flex items-center gap-2 whitespace-nowrap font-serif">
                <Icon name="clockThin" size={22} />
                <span>{labels.hours}</span>
            </div>

            {/* Търсачка */}
            <div className="hidden lg:flex items-center gap-2">
                <Icon name="search" size={22} />
                <input
                    type="text"
                    placeholder={labels.searchPlaceholder}
                    className="text-sm px-2 py-1 border rounded"
                />
            </div>

            {/* Дясна секция */}
            <div className="flex items-center gap-2 lg:gap-4">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:underline whitespace-nowrap">
                    <Icon name="phoneThin" size={22} />
                    <span>+123 456 7890</span>
                </a>
                <a href="mailto:info@mallagro.com" className="flex items-center gap-2 hover:underline whitespace-nowrap">
                    <Icon name="emailThin" size={22} />
                    <span>info@mallagro.com</span>
                </a>
                <a href="#" className="hover:underline flex items-center border-l border-[#1E5F4B] pl-2 lg:pl-4">
                    <Icon name="facebook" size={22} />
                </a>
            </div>
        </div>
    );
}
