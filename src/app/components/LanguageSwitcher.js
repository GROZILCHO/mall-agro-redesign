'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLanguageTargetUrl } from '../../lib/routes/languageUrls.js';

function getCurrentLocale(pathname) {
  if (pathname?.startsWith('/produse')) {
    return 'ro';
  }

  return 'en';
}

export default function LanguageSwitcher({ className = '', onNavigate }) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const targetLocale = currentLocale === 'ro' ? 'en' : 'ro';
  const target = getLanguageTargetUrl({
    currentPath: pathname,
    currentLocale,
    targetLocale,
  });

  if (!target) {
    return null;
  }

  return (
    <Link
      href={target.url}
      onClick={onNavigate}
      className={className}
      aria-label={`Switch language to ${target.locale.toUpperCase()}`}
    >
      {target.locale.toUpperCase()}
    </Link>
  );
}
