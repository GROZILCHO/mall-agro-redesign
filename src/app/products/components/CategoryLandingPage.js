import Link from 'next/link';
import Image from 'next/image';
import { categoryPageContent } from '../../../lib/content/categoryPages.js';
import { getCategoryById } from '../../../lib/content/categories.js';

function toParagraphs(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value ? [value] : [];
}

export default function CategoryLandingPage({ categoryId, locale = 'en' }) {
  const category = getCategoryById(categoryId);
  const richContent = categoryPageContent[locale]?.[categoryId];
  const categoryContent = category?.locales[locale];

  if (!richContent || !categoryContent) {
    return null;
  }

  const imageSlots = richContent.imageSlots;
  const categoryIntentItems = richContent.categoryIntent.filter((intent) => intent?.trim());
  const relatedCategoryCtaLabel = locale === 'ro' ? 'Vezi categoria →' : 'View category →';

  return (
    <main className="bg-gentle">
      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <p className="body font-semibold normal-case tracking-normal text-menu">
                {richContent.hero.eyebrow}
              </p>
              <h1 className="responsive-h1 mt-3 text-primary">
                {richContent.hero.title}
              </h1>
              <div className="mt-6">
                {toParagraphs(richContent.hero.body).map((paragraph) => (
                  <p key={paragraph} className="body mb-5 text-menu last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {categoryIntentItems.map((intent) => (
                <p key={intent} className="body rounded border border-neutral bg-gentle px-4 py-3 font-semibold normal-case tracking-normal text-menu">
                  {intent}
                </p>
              ))}
            </div>
          </div>

          <div className="grid min-h-80 overflow-hidden rounded border border-neutral bg-gentle shadow">
            {imageSlots.hero.asset ? (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={imageSlots.hero.asset}
                  alt={imageSlots.hero.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/9] w-full items-end border-b border-neutral bg-primary p-6 text-white">
                <div className="w-full">
                  <p className="body text-accent">
                    {imageSlots.hero.label}
                  </p>
                  <p className="h3 mt-3 text-white">
                    {categoryContent.title}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
                    <span className="h-2 rounded bg-accent" />
                    <span className="h-2 rounded bg-white/70" />
                    <span className="h-2 rounded bg-white/40" />
                  </div>
                </div>
              </div>
            )}
            <div className="flex min-h-64 items-end border-b border-neutral bg-white p-6">
              <div>
                <p className="body font-semibold normal-case tracking-normal text-menu">
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
              <p className="body font-semibold normal-case tracking-normal text-menu">
                {richContent.currentCategory?.label || 'Current category'}
              </p>
              <p className="h3 mt-3 text-primary">
                {richContent.currentCategory?.title || categoryContent.title}
              </p>
              <p className="body mt-3 text-menu">
                {richContent.currentCategory?.body || categoryContent.cardDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label={`${categoryContent.title} category sections`} className="bg-primary px-4 py-4 md:px-10 lg:px-16">
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
            <p className="body font-semibold normal-case tracking-normal text-menu">
              {richContent.overview.eyebrow || 'Category overview'}
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
            <p className="body font-semibold normal-case tracking-normal text-menu">
              {richContent.applicationEyebrow || 'Operating contexts'}
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
              {richContent.applicationHeading}
            </h2>
            {richContent.applicationIntro && (
              <p className="body mt-5 text-menu">
                {richContent.applicationIntro}
              </p>
            )}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {richContent.applicationAreas.map((area, index) => {
              const context = imageSlots.operatingContexts[index];

              return (
              <article key={area.title} className="overflow-hidden rounded border border-neutral bg-gentle shadow">
                {context?.asset && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={context.asset}
                      alt={context.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex min-h-48 items-end border-b border-neutral bg-white p-5">
                  <div>
                    <p className="body font-semibold normal-case tracking-normal text-menu">
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
            <p className="body font-semibold normal-case tracking-normal text-menu">
              {richContent.equipmentDirection.eyebrow || 'Equipment direction'}
            </p>
            <h2 className="responsive-h2 text-primary">
              {richContent.equipmentDirection.title}
            </h2>
            {richContent.equipmentDirection.intro && (
              <div className="mt-5">
                {toParagraphs(richContent.equipmentDirection.intro).map((paragraph) => (
                  <p key={paragraph} className="body mb-5 text-menu last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="grid gap-6 lg:col-span-3">
            {imageSlots.equipmentDirection.renderCard !== false && (
              <div className="rounded border border-neutral bg-white p-6 shadow">
                <p className="body font-semibold normal-case tracking-normal text-menu">
                  {imageSlots.equipmentDirection.label}
                </p>
                <h3 className="h3 mt-3 text-primary">
                  {imageSlots.equipmentDirection.title}
                </h3>
                <p className="body mt-3 text-menu">
                  {imageSlots.equipmentDirection.body}
                </p>
              </div>
            )}
            <ul className="grid gap-4 sm:grid-cols-2">
              {richContent.equipmentDirection.items.map((item) => (
                <li key={item.title || item} className="body rounded border border-neutral bg-white p-4 text-menu shadow">
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <h3 className="h3 text-primary">
                        {item.title}
                      </h3>
                      <p className="body mt-3 text-menu">
                        {item.body}
                      </p>
                    </>
                  )}
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
              <p className="body font-semibold normal-case tracking-normal text-menu">
                {richContent.inquiryWorkflow.eyebrow || 'Inquiry workflow'}
              </p>
              <h2 className="responsive-h2 mt-3 text-primary">
                {richContent.inquiryWorkflow.title}
              </h2>
            </div>
            <div className="border-l border-neutral pl-4">
              {toParagraphs(richContent.inquiryWorkflow.intro || 'Move from general category interest toward a clearer project conversation.').map((paragraph) => (
                <p key={paragraph} className="body mb-5 text-menu last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {imageSlots.workflow.renderCard !== false && (
            <div className="mb-6 rounded border border-neutral bg-gentle p-5">
              <p className="body font-semibold normal-case tracking-normal text-menu">
                {imageSlots.workflow.label}
              </p>
              <h3 className="h3 mt-3 text-primary">
                {imageSlots.workflow.title}
              </h3>
              <p className="body mt-3 text-menu">
                {imageSlots.workflow.body}
              </p>
            </div>
          )}
          <div className="grid gap-4">
            {richContent.inquiryWorkflow.steps.map((step, index) => (
              <article key={step.title} className="grid gap-4 rounded border border-neutral bg-gentle p-5 md:grid-cols-5 md:items-start">
                <p className="h3 text-primary">
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
            <p className="body font-semibold normal-case tracking-normal text-menu">
              {richContent.inquiryPreparation.eyebrow || 'Before inquiry'}
            </p>
            <h2 className="responsive-h2 text-primary">
              {richContent.inquiryPreparation.title}
            </h2>
            {richContent.inquiryPreparation.intro && (
              <p className="body mt-5 text-menu">
                {richContent.inquiryPreparation.intro}
              </p>
            )}
          </div>
          <div className="lg:col-span-3">
            <ul className="grid gap-4 md:grid-cols-2">
              {richContent.inquiryPreparation.items.map((item, index) => (
                <li key={item.title || item} className="body rounded border border-neutral bg-white p-4 text-menu shadow">
                  <span className="text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {typeof item === 'string' ? (
                    <span className="mt-2 block">
                      {item}
                    </span>
                  ) : (
                    <span className="mt-2 block">
                      <span className="block font-semibold text-primary">
                        {item.title}
                      </span>
                      <span className="mt-2 block">
                        {item.body}
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl border-y border-neutral py-8">
          {richContent.beyondField ? (
            <>
              <div className="max-w-3xl">
                <p className="body font-semibold normal-case tracking-normal text-menu">
                  {richContent.beyondField.eyebrow}
                </p>
                <h2 className="responsive-h2 mt-3 text-primary">
                  {richContent.beyondField.title}
                </h2>
                <div className="mt-5">
                  {toParagraphs(richContent.beyondField.intro).map((paragraph) => (
                    <p key={paragraph} className="body mb-5 text-menu last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {richContent.beyondField.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block rounded border border-neutral bg-white p-5 text-primary shadow transition hover:-translate-y-0.5 hover:border-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {item.eyebrow && (
                      <span className="body block font-semibold normal-case tracking-normal text-menu">
                        {item.eyebrow}
                      </span>
                    )}
                    <span className="h3 mt-3 block">
                      {item.label}
                    </span>
                    {toParagraphs(item.body).map((paragraph) => (
                      <span key={paragraph} className="body mt-3 block text-menu">
                        {paragraph}
                      </span>
                    ))}
                    <span className="body mt-5 block font-semibold normal-case tracking-normal text-menu group-hover:underline">
                      {item.ctaLabel}
                    </span>
                    {item.ctaBody && (
                      <span className="body mt-2 block text-menu">
                        {item.ctaBody}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div>
                <p className="body font-semibold normal-case tracking-normal text-menu">
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
                    className="group block rounded border border-neutral bg-white p-5 text-primary shadow transition hover:-translate-y-0.5 hover:border-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <span className="h3 block">
                      {item.label}
                    </span>
                    <span className="body mt-3 block font-semibold normal-case tracking-normal text-menu group-hover:underline">
                      {relatedCategoryCtaLabel}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
            <div className="mt-4">
              {toParagraphs(richContent.cta.body).map((paragraph) => (
                <p key={paragraph} className="body mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            {richContent.cta.supportingText && (
              <div className="mt-5 border-l border-accent/50 pl-4">
                {toParagraphs(richContent.cta.supportingText).map((paragraph) => (
                  <p key={paragraph} className="body mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Link
            href={richContent.cta.href}
            className="button button-md inline-block self-start whitespace-nowrap md:justify-self-end"
          >
            {richContent.cta.label}
          </Link>
        </div>
      </section>

      {richContent.closingStatement && (
        <section className="bg-gentle px-4 py-12 md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl border-t border-neutral pt-8">
            {toParagraphs(richContent.closingStatement).map((paragraph) => (
              <p key={paragraph} className="body mb-4 text-menu last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
