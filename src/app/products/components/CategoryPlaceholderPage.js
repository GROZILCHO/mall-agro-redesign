import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategoryById } from '../../../lib/content/categories.js';

const placeholderUi = {
  en: {
    placeholderNotice: 'This category page is being prepared as part of the Mall Agro B2B catalog redesign.',
    backToHomepage: 'Back to homepage',
    backHref: '/',
  },
  ro: {
    placeholderNotice: 'Această pagină de categorie este în pregătire ca parte a reproiectării catalogului B2B Mall Agro.',
    backToHomepage: 'Înapoi la pagina principală',
    backHref: '/',
  },
};

export default function CategoryPlaceholderPage({ categoryId, locale = 'en' }) {
  const category = getCategoryById(categoryId);
  const activeLocale = category?.locales[locale] ? locale : 'en';
  const content = category?.locales[activeLocale];
  const ui = placeholderUi[activeLocale] || placeholderUi.en;

  if (!content) {
    notFound();
  }

  return (
    <main className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl rounded border border-neutral bg-white p-6 shadow md:p-10">
        {content.icon && (
          <Image
            src={content.icon}
            alt={content.altText}
            width={64}
            height={64}
            className="mb-6 h-16 w-16"
          />
        )}

        <h1 className="responsive-h1 text-primary">{content.title}</h1>
        <p className="body mt-6 text-menu">{content.cardDescription}</p>
        <p className="body mt-4 text-menu">
          {ui.placeholderNotice}
        </p>

        <Link href={ui.backHref} className="button button-md mt-8 inline-block">
          {ui.backToHomepage}
        </Link>
      </section>
    </main>
  );
}
