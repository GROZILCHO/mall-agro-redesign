import Link from 'next/link';
import { homepageContent } from '../../lib/content/homepage.js';

const locale = 'en';
const content = homepageContent[locale];

export default function HomepageContentSections() {
  return (
    <>
      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="body text-accent">
              {content.intro.eyebrow}
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
              {content.intro.title}
            </h2>
            <p className="body mt-5 text-menu">
              {content.intro.body}
            </p>
            <p className="body mt-5 border-l border-neutral pl-4 text-menu">
              {content.intro.note}
            </p>
          </div>

          <div className="border-y border-neutral py-2 lg:col-span-2">
            <h3 className="h3 py-4 text-primary">
              {content.audiences.title}
            </h3>
            <div>
              {content.audiences.items.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-neutral py-4"
                >
                  <p className="body text-accent">
                    {item.label}
                  </p>
                  <p className="body mt-2 text-menu">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="responsive-h2 text-primary">
              {content.workflow.title}
            </h2>
            <p className="body text-menu">
              {content.workflow.body}
            </p>
          </div>

          <div className="border-y border-neutral bg-white">
            {content.workflow.steps.map((step) => (
              <div
                key={step.title}
                className="grid gap-4 border-t border-neutral px-4 py-6 first:border-t-0 md:grid-cols-4 md:px-6"
              >
                <p className="body text-accent md:col-span-1">
                  {step.label}
                </p>
                <div className="md:col-span-3">
                  <h3 className="h3 text-primary">
                    {step.title}
                  </h3>
                  <p className="body mt-3 text-menu">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 bg-primary p-6 text-white shadow md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <p className="body text-accent">
              {content.cta.eyebrow}
            </p>
            <h2 className="responsive-h2 text-white">
              {content.cta.title}
            </h2>
            <p className="body mt-4">
              {content.cta.body}
            </p>
          </div>
          <Link
            href={content.cta.href}
            className="button button-md inline-block self-start whitespace-nowrap md:justify-self-end"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
