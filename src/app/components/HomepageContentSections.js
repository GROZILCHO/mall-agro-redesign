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
          <p className="body font-semibold normal-case tracking-normal text-menu">
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
            {content.intro.supportPoints.map((item, index) => (
              <div
                key={item}
                className={`min-w-0 py-4 ${index > 0 ? 'border-t border-neutral' : ''}`}
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
            <p className="body font-semibold normal-case tracking-normal text-menu">
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
            {content.whatWeSupport.paths.map((path, index) => {
              const pathLabels = [
                'Machine-level inquiry',
                'Line-level planning',
                'Project-context support',
              ];

              return (
              <article
                key={path.title}
                className="flex min-w-0 flex-col rounded border border-neutral bg-white shadow-md"
              >
                <div className="h-1 w-full bg-primary/80" aria-hidden="true" />
                <div className="flex min-w-0 flex-1 flex-col p-7">
                  <p className="body text-sm font-semibold normal-case tracking-normal text-menu">
                    {pathLabels[index]}
                  </p>
                  <h3 className="responsive-h3 mt-3 break-normal text-primary">
                    {path.title}
                  </h3>
                  <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                    {path.body}
                  </p>
                  <div className="mt-6 h-px w-16 bg-neutral" aria-hidden="true" />
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-full overflow-hidden bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-2">
            <p className="body font-semibold normal-case tracking-normal text-menu">
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
            {content.projectCapabilities.items.map((item, index) => {
              const capabilityLabels = [
                'Requirement',
                'Planning',
                'Coordination',
                'Implementation',
              ];

              return (
              <article
                key={item.title}
                className="min-w-0 rounded border border-neutral bg-gentle p-6 shadow-sm"
              >
                <div className="mb-5 h-1 w-12 bg-accent" aria-hidden="true" />
                <p className="body text-sm font-semibold normal-case tracking-normal text-menu">
                  {capabilityLabels[index]}
                </p>
                <h3 className="responsive-h3 mt-3 break-normal text-primary">
                  {item.title}
                </h3>
                <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                  {item.body}
                </p>
              </article>
              );
            })}
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
        <section className="relative isolate max-w-full overflow-hidden bg-primary px-4 py-16 text-white md:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(247,235,212,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(247,235,212,0.9) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl min-w-0 gap-10 rounded border border-white/10 bg-white/[0.04] p-6 shadow md:p-8 lg:grid-cols-5">
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
              <div className="relative mt-6 min-w-0 overflow-hidden rounded border border-white/10 bg-white/[0.05] p-5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(247,235,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(247,235,212,0.8) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative min-w-0">
                  <p className="body text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                    Inquiry discipline
                  </p>
                  <p className="body mt-3 max-w-xs break-words text-base font-semibold leading-6 text-white">
                    Structured review before quotation
                  </p>
                  <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3" aria-hidden="true">
                    <div className="h-px bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <div className="h-px bg-white/20" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 lg:col-span-3">
              {content.authority.items.map((item) => (
                <div
                  key={item.title}
                  className="grid min-w-0 gap-2 rounded border border-white/10 bg-white/[0.05] p-5"
                >
                  <h3 className="responsive-h3 break-words text-white">
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
          <div className="mb-10 grid min-w-0 gap-8 lg:grid-cols-5 lg:items-stretch">
            <div className="min-w-0 lg:col-span-3">
              <p className="body font-semibold normal-case tracking-normal text-menu">
                {content.workflow.eyebrow}
              </p>
              <h2 className="responsive-h2 mt-3 break-words [overflow-wrap:anywhere] text-primary">
                {content.workflow.title}
              </h2>
              <p className="body mt-5 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                {content.workflow.body}
              </p>
            </div>
            <div className="min-w-0 lg:col-span-2">
              <HomepageVisualPlaceholder
                eyebrow={content.visualPlaceholders.inquiryProcess.eyebrow}
                title={content.visualPlaceholders.inquiryProcess.title}
                variant="capability"
              />
            </div>
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.workflow.steps.map((step) => (
              <article
                key={step.title}
                className="flex min-w-0 flex-col rounded border border-neutral bg-white p-6 shadow-sm"
              >
                <p className="text-4xl font-semibold leading-none text-menu">
                  {step.label}
                </p>
                <div className="mt-5 min-w-0">
                  <h3 className="responsive-h3 break-normal text-primary">
                    {step.title}
                  </h3>
                  <p className="body mt-3 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-full overflow-hidden bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="relative isolate mx-auto grid max-w-6xl min-w-0 gap-8 overflow-hidden bg-primary p-7 text-white shadow md:grid-cols-3 md:items-center md:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'linear-gradient(rgba(247,235,212,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(247,235,212,0.85) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10 bg-white/[0.03]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-8 top-8 h-px w-32 bg-accent/40" aria-hidden="true" />

          <div className="relative z-10 min-w-0 md:col-span-2">
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
            className="button button-md relative z-10 inline-flex min-h-[44px] w-full items-center justify-center self-start text-center sm:w-auto md:justify-self-end"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
