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

  const imageSlots = richContent.imageSlots;

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
            <div className="flex min-h-64 items-end border-b border-neutral bg-white p-6">
              <div>
                <p className="body text-accent">
                  {imageSlots.hero.label}
                </p>
                <h2 className="h3 mt-3 text-primary">
                  {imageSlots.hero.title}
                </h2>
                <p className="body mt-3 text-menu">
                  {imageSlots.hero.body}
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

      <nav aria-label="Agriculture category sections" className="bg-primary px-4 py-4 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-white sm:flex-row sm:flex-wrap">
          {richContent.pageNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="body border border-neutral px-4 py-3 text-center text-white hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-24 px-4 py-12 md:px-10 lg:px-16">
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

      <section id="applications" className="scroll-mt-24 bg-white px-4 py-16 md:px-10 lg:px-16">
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
            {richContent.applicationAreas.map((area, index) => {
              const context = imageSlots.operatingContexts[index];

              return (
              <article key={area.title} className="overflow-hidden rounded border border-neutral bg-gentle shadow">
                {context?.asset && (
                  <img
                    src={context.asset}
                    alt={context.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                )}
                <div className="flex min-h-48 items-end border-b border-neutral bg-white p-5">
                  <div>
                    <p className="body text-accent">
                      {context?.label || area.title}
                    </p>
                    <h3 className="h3 mt-3 text-primary">
                      {context?.title || area.title}
                    </h3>
                    <p className="body mt-3 text-menu">
                      {context?.body || area.body}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="body mt-3 text-menu">
                    {area.body}
                  </p>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="equipment-direction" className="scroll-mt-24 px-4 py-16 md:px-10 lg:px-16">
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
                {imageSlots.equipmentDirection.label}
              </p>
              <h3 className="h3 mt-3 text-primary">
                {imageSlots.equipmentDirection.title}
              </h3>
              <p className="body mt-3 text-menu">
                {imageSlots.equipmentDirection.body}
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

      <section id="inquiry" className="scroll-mt-24 bg-white px-4 py-16 md:px-10 lg:px-16">
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
          <div className="mb-6 rounded border border-neutral bg-gentle p-5">
            <p className="body text-accent">
              {imageSlots.workflow.label}
            </p>
            <h3 className="h3 mt-3 text-primary">
              {imageSlots.workflow.title}
            </h3>
            <p className="body mt-3 text-menu">
              {imageSlots.workflow.body}
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

      <section className="bg-white px-4 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 border-y border-neutral py-8 md:grid-cols-3 md:items-center">
          <div>
            <p className="body text-accent">
              {richContent.relatedCategories.eyebrow}
            </p>
            <h2 className="h3 mt-3 text-primary">
              {richContent.relatedCategories.title}
            </h2>
          </div>
          <div className="grid gap-3 md:col-span-2 md:grid-cols-2">
            {richContent.relatedCategories.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="body rounded border border-neutral bg-gentle px-4 py-4 text-primary hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
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
