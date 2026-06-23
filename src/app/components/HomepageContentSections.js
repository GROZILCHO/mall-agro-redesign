import Link from 'next/link';
import { homepageContent } from '../../lib/content/homepage.js';
import HomepageVisualPlaceholder from './HomepageVisualPlaceholder.js';

const locale = 'en';
const content = homepageContent[locale];

export function HomepageIntroSection() {
  return (
    <section className="max-w-full overflow-hidden bg-white px-4 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-5">
        <div className="min-w-0 lg:col-span-3">
          <p className="body font-semibold text-primary">
            {content.intro.eyebrow}
          </p>
          <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-primary">
            {content.intro.title}
          </h2>
          <p className="body mt-5 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
            {content.intro.body}
          </p>
          <p className="body mt-5 break-words border-l border-neutral pl-4 text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
            {content.intro.note}
          </p>
        </div>

        <div className="min-w-0 border-y border-neutral py-2 lg:col-span-2">
          <div>
            {content.intro.supportPoints.map((item) => (
              <div
                key={item}
                className="min-w-0 border-t border-neutral py-4"
              >
                <p className="body break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <HomepageVisualPlaceholder
              eyebrow={content.visualPlaceholders.projectPlanning.eyebrow}
              title={content.visualPlaceholders.projectPlanning.title}
              variant="project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomepagePreCategorySections() {
  return (
    <>
      <section className="max-w-full overflow-hidden bg-gentle px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl min-w-0">
          <div className="mb-10 max-w-3xl min-w-0">
            <p className="body font-semibold text-primary">
              {content.whatWeSupport.eyebrow}
            </p>
            <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-primary">
              {content.whatWeSupport.title}
            </h2>
            <p className="body mt-5 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
              {content.whatWeSupport.body}
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-3">
            {content.whatWeSupport.paths.map((path) => (
              <article
                key={path.title}
                className="flex min-w-0 flex-col rounded border border-neutral bg-white p-7 shadow-md"
              >
                <h3 className="responsive-h3 break-normal text-primary">
                  {path.title}
                </h3>
                <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                  {path.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-full overflow-hidden bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-2">
            <p className="body font-semibold text-primary">
              {content.projectCapabilities.eyebrow}
            </p>
            <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-primary">
              {content.projectCapabilities.title}
            </h2>
            <p className="body mt-5 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
              {content.projectCapabilities.body}
            </p>
            <div className="mt-6">
              <HomepageVisualPlaceholder
                eyebrow={content.visualPlaceholders.capabilities.eyebrow}
                title={content.visualPlaceholders.capabilities.title}
                variant="capability"
              />
            </div>
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:col-span-3">
            {content.projectCapabilities.items.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded border border-neutral bg-gentle p-6 shadow-sm"
              >
                <h3 className="responsive-h3 break-normal text-primary">
                  {item.title}
                </h3>
                <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function HomepageContentSections() {
  return (
    <>
      {content.authority && (
        <section className="max-w-full overflow-hidden bg-primary px-4 py-16 text-white md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-5">
            <div className="min-w-0 lg:col-span-2">
              <p className="body font-semibold text-accent">
                {content.authority.eyebrow}
              </p>
              <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-white">
                {content.authority.title}
              </h2>
              <p className="body mt-5 break-words text-base leading-7 [overflow-wrap:anywhere]">
                {content.authority.body}
              </p>
            </div>

            <div className="grid min-w-0 gap-4 lg:col-span-3">
              {content.authority.items.map((item) => (
                <div
                  key={item.title}
                  className="grid min-w-0 gap-3 border-t border-neutral py-5 first:border-t-0 md:grid-cols-[minmax(14rem,1fr)_2fr]"
                >
                  <h3 className="responsive-h3 break-normal text-white">
                    {item.title}
                  </h3>
                  <p className="body break-words text-base leading-7 [overflow-wrap:anywhere]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-full overflow-hidden bg-gentle px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl min-w-0">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <div className="min-w-0">
              <p className="body font-semibold text-primary">
                {content.workflow.eyebrow}
              </p>
              <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-primary">
                {content.workflow.title}
              </h2>
            </div>
            <p className="body break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:self-end md:text-[1rem]">
              {content.workflow.body}
            </p>
          </div>

          <div className="border-y border-neutral bg-white">
            {content.workflow.steps.map((step) => (
              <div
                key={step.title}
                className="grid min-w-0 gap-4 border-t border-neutral px-4 py-6 first:border-t-0 md:grid-cols-4 md:px-6"
              >
                <p className="body font-semibold text-primary md:col-span-1">
                  {step.label}
                </p>
                <div className="min-w-0 md:col-span-3">
                  <h3 className="responsive-h3 break-words [overflow-wrap:anywhere] text-primary">
                    {step.title}
                  </h3>
                  <p className="body mt-3 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-full overflow-hidden bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-8 bg-primary p-7 text-white shadow md:grid-cols-3 md:items-center md:p-8">
          <div className="min-w-0 md:col-span-2">
            <p className="body font-semibold text-accent">
              {content.cta.eyebrow}
            </p>
            <h2 className="responsive-h2 break-words [overflow-wrap:anywhere] text-white">
              {content.cta.title}
            </h2>
            <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere]">
              {content.cta.body}
            </p>
          </div>
          <Link
            href={content.cta.href}
            className="button button-md inline-flex min-h-[44px] w-full items-center justify-center self-start text-center sm:w-auto md:justify-self-end"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
