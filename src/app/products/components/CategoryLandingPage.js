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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
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
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {richContent.categoryIntent.map((intent) => (
                <p key={intent} className="body rounded border border-neutral bg-gentle px-4 py-3 text-primary">
                  {intent}
                </p>
              ))}
            </div>
          </div>

          <div className="grid min-h-80 overflow-hidden rounded border border-neutral bg-gentle shadow">
            <div className="flex min-h-56 items-center justify-center border-b border-neutral bg-white p-6 text-center">
              <div>
                <p className="body text-accent">
                  {richContent.visuals.hero.label}
                </p>
                <h2 className="h3 mt-3 text-primary">
                  {richContent.visuals.hero.title}
                </h2>
                <p className="body mt-3 text-menu">
                  {richContent.visuals.hero.note}
                </p>
              </div>
            </div>
            <div className="p-6">
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
        </div>
      </section>

      <section className="px-4 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 border-y border-neutral py-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="body text-accent">
              Category overview
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
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
              Operating contexts
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
              Where the agriculture category can support inquiry framing
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {richContent.applicationAreas.map((area, index) => (
              <article key={area.title} className="overflow-hidden rounded border border-neutral bg-gentle shadow">
                <div className="flex min-h-40 items-center border-b border-neutral bg-white p-5">
                  <div>
                    <p className="body text-accent">
                      Planned image area
                    </p>
                    <h3 className="h3 mt-3 text-primary">
                      {richContent.visuals.operatingContexts[index]?.title || area.title}
                    </h3>
                    <p className="body mt-3 text-menu">
                      {richContent.visuals.operatingContexts[index]?.note}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="h3 text-primary">
                    {area.title}
                  </h3>
                  <p className="body mt-3 text-menu">
                    {area.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="body text-accent">
              Equipment direction
            </p>
            <h2 className="responsive-h2 text-primary">
              {richContent.equipmentDirection.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:col-span-3">
            <div className="rounded border border-neutral bg-white p-6 shadow">
              <p className="body text-accent">
                Future category visual
              </p>
              <h3 className="h3 mt-3 text-primary">
                {richContent.visuals.equipmentDirection.title}
              </h3>
              <p className="body mt-3 text-menu">
                {richContent.visuals.equipmentDirection.note}
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {richContent.equipmentDirection.items.map((item) => (
                <li key={item} className="body rounded border border-neutral bg-white p-4 text-menu shadow">
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
            <div>
              <p className="body text-accent">
                Inquiry workflow
              </p>
              <h2 className="responsive-h2 mt-3 text-primary">
                {richContent.inquiryWorkflow.title}
              </h2>
            </div>
            <p className="body border-l border-neutral pl-4 text-menu">
              Move from general category interest toward a clearer project conversation.
            </p>
          </div>
          <div className="grid gap-4">
            {richContent.inquiryWorkflow.steps.map((step, index) => (
              <article key={step.title} className="grid gap-4 rounded border border-neutral bg-gentle p-5 md:grid-cols-5 md:items-start">
                <p className="h3 text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="md:col-span-4">
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="body text-accent">
              Before inquiry
            </p>
            <h2 className="responsive-h2 text-primary">
              {richContent.inquiryPreparation.title}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <ul className="grid gap-4 md:grid-cols-2">
              {richContent.inquiryPreparation.items.map((item, index) => (
                <li key={item} className="body rounded border border-neutral bg-white p-4 text-menu shadow">
                  <span className="text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-2 block">
                    {item}
                  </span>
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
