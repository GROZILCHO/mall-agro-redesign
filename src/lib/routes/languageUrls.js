import { getPairedPath } from './routePairs.js';
import { locales } from '../localization/locales.js';

const defaultProtocol = 'https';

function getLocaleDomain(locale) {
  return locales[locale]?.domain || null;
}

function buildAbsoluteUrl({ domain, path }) {
  if (!domain || !path || !path.startsWith('/')) {
    return null;
  }

  const baseUrl = domain.startsWith('http://') || domain.startsWith('https://')
    ? domain
    : `${defaultProtocol}://${domain}`;

  return `${baseUrl.replace(/\/$/, '')}${path}`;
}

export function getLanguageTargetUrl({
  currentPath,
  currentLocale,
  targetLocale,
}) {
  if (!currentPath || !currentLocale || !targetLocale) {
    return null;
  }

  if (!locales[currentLocale] || !locales[targetLocale]) {
    return null;
  }

  const targetDomain = getLocaleDomain(targetLocale);
  const targetPath = getPairedPath({
    currentLocale,
    targetLocale,
    path: currentPath,
  });

  const targetUrl = buildAbsoluteUrl({
    domain: targetDomain,
    path: targetPath,
  });

  if (!targetPath || !targetUrl) {
    return null;
  }

  return {
    locale: targetLocale,
    path: targetPath,
    url: targetUrl,
    isAvailable: true,
  };
}
