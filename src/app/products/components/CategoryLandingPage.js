import Link from 'next/link';
import { categoryPageContent } from '../../../lib/content/categoryPages.js';
import { getCategoryById } from '../../../lib/content/categories.js';

export default function CategoryLandingPage({ categoryId, locale = 'en' }) {
  const category = getCategoryById(categoryId);
  const richContent = categoryPageContent[locale]?.[categoryId];
  const categoryContent = category?.locales[locale];

  if (!richContent || !categoryContent) {
    return null;
  }

  return (
    <main className="bg-gentle">
      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:items-end">
          <div className="lg:col-span-3">
            <p className="body text-accent">
              {richContent.hero.eyebrow}
            </p>
            <h1 className="responsive-h1 mt-3 text-primary">
              {richContent.hero.title}
            </h1>
            <p className="body mt-6 text-menu">
              {richContent.hero.body}
            </p>
          </div>
          <div className="border-y border-neutral py-6 lg:col-span-2">
            <p className="body text-accent">
              Current category
            </p>
            <p className="h3 mt-3 text-primary">
              {categoryContent.title}
            </p>
            <p className="body mt-3 text-menu">
              {categoryContent.cardDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="responsive-h2 text-primary">
              {richContent.overview.title}
            </h2>
          </div>
          <div className="lg:col-span-3">
            {richContent.overview.body.map((paragraph) => (
              <p key={paragraph} className="body mb-5 text-menu last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="body text-accent">
              Application areas
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
              Where the agriculture category can support inquiry framing
            </h2>
          </div>
          <div className="grid gap-0 border-y border-neutral md:grid-cols-3">
            {richContent.applicationAreas.map((area) => (
              <article key={area.title} className="border-t border-neutral py-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0">
                <h3 className="h3 text-primary">
                  {area.title}
                </h3>
                <p className="body mt-3 text-menu">
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="responsive-h2 text-primary">
              {richContent.equipmentDirection.title}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="border-y border-neutral bg-white">
              {richContent.equipmentDirection.items.map((item) => (
                <li key={item} className="body border-t border-neutral px-4 py-4 text-menu first:border-t-0 md:px-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="responsive-h2 text-primary">
              {richContent.inquiryWorkflow.title}
            </h2>
            <p className="body text-menu">
              Move from general category interest toward a clearer project conversation.
            </p>
          </div>
          <div className="border-y border-neutral">
            {richContent.inquiryWorkflow.steps.map((step, index) => (
              <article key={step.title} className="grid gap-4 border-t border-neutral px-4 py-6 first:border-t-0 md:grid-cols-4 md:px-6">
                <p className="body text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="md:col-span-3">
                  <h3 className="h3 text-primary">
                    {step.title}
                  </h3>
                  <p className="body mt-3 text-menu">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="responsive-h2 text-primary">
              {richContent.inquiryPreparation.title}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="grid gap-4 md:grid-cols-2">
              {richContent.inquiryPreparation.items.map((item) => (
                <li key={item} className="body rounded border border-neutral bg-white p-4 text-menu shadow">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 bg-primary p-6 text-white shadow md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <p className="body text-accent">
              {richContent.cta.eyebrow}
            </p>
            <h2 className="responsive-h2 text-white">
              {richContent.cta.title}
            </h2>
            <p className="body mt-4">
              {richContent.cta.body}
            </p>
          </div>
          <Link
            href={richContent.cta.href}
            className="button button-md inline-block self-start whitespace-nowrap md:justify-self-end"
          >
            {richContent.cta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
