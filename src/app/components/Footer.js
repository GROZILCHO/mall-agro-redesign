'use client';

import { usePathname } from 'next/navigation';

const footerLabels = {
  en: 'All Rights Reserved.',
  ro: 'Toate drepturile rezervate.',
};

function getCurrentLocale(pathname) {
  if (pathname?.startsWith('/produse')) {
    return 'ro';
  }

  return 'en';
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getCurrentLocale(pathname);
  const rightsLabel = footerLabels[locale] || footerLabels.en;

  return (
      <footer className="bg-[#1E5F4B] text-white text-center p-2">
          &copy; 2024 Mall Agro. {rightsLabel}
      </footer>
  );
}
