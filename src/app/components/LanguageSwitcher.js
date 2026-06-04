'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLanguageTargetUrl } from '../../lib/routes/languageUrls.js';

const desktopMediaQuery = '(min-width: 768px)';

function getCurrentLocale(pathname) {
  if (pathname?.startsWith('/produse')) {
    return 'ro';
  }

  return 'en';
}

export default function LanguageSwitcher({
  className = '',
  onNavigate,
  viewport = 'all',
}) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const currentLocale = getCurrentLocale(pathname);
  const targetLocale = currentLocale === 'ro' ? 'en' : 'ro';
  const target = getLanguageTargetUrl({
    currentPath: pathname,
    currentLocale,
    targetLocale,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);
    const updateViewportMode = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener('change', updateViewportMode);

    return () => {
      mediaQuery.removeEventListener('change', updateViewportMode);
    };
  }, []);

  if (!target) {
    return null;
  }

  if (viewport === 'desktop' && !isDesktop) {
    return null;
  }

  if (viewport === 'mobile' && isDesktop) {
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
