import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryById } from '../../../lib/content/categories.js';

const locale = 'en';

export default function CategoryPlaceholderPage({ categoryId }) {
  const category = getCategoryById(categoryId);
  const content = category?.locales[locale];

  if (!content) {
    notFound();
  }

  return (
    <main className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl rounded border border-neutral bg-white p-6 shadow md:p-10">
        {content.icon && (
          <img
            src={content.icon}
            alt={content.altText}
            className="mb-6 h-16 w-16"
          />
        )}

        <h1 className="responsive-h1 text-primary">{content.title}</h1>
        <p className="body mt-6 text-menu">{content.cardDescription}</p>
        <p className="body mt-4 text-menu">
          This category page is being prepared as part of the Mall Agro B2B catalog redesign.
        </p>

        <Link href="/" className="button button-md mt-8 inline-block">
          Back to homepage
        </Link>
      </section>
    </main>
  );
}
