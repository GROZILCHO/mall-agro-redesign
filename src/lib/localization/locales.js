export const defaultLocale = 'en';

export const locales = {
  en: {
    id: 'en',
    language: 'English',
    htmlLang: 'en',
    domain: 'mallagro.com',
  },
  ro: {
    id: 'ro',
    language: 'Romana',
    nativeLanguage: 'Română',
    htmlLang: 'ro',
    domain: 'mallagro.ro',
  },
};

export const localeIds = Object.keys(locales);

export const domainLocales = Object.fromEntries(
  Object.values(locales).map((locale) => [locale.domain, locale.id])
);
