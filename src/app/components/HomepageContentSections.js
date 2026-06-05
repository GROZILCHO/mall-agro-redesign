import Link from 'next/link';
import { homepageContent } from '../../lib/content/homepage.js';

const locale = 'en';
const content = homepageContent[locale];

export default function HomepageContentSections() {
  return (
    <>
      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="body text-accent">
              {content.intro.eyebrow}
            </p>
            <h2 className="responsive-h2 mt-3 text-primary">
              {content.intro.title}
            </h2>
          </div>
          <p className="body text-menu">
            {content.intro.body}
          </p>
        </div>
      </section>

      <section className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="responsive-h2 text-primary">
              {content.process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded border border-neutral bg-white p-6 shadow"
              >
                <p className="body text-accent">
                  Step {index + 1}
                </p>
                <h3 className="h3 mt-3 text-primary">
                  {step.title}
                </h3>
                <p className="body mt-4 text-menu">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded border border-neutral bg-gentle p-6 shadow md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="responsive-h2 text-primary">
              {content.cta.title}
            </h2>
            <p className="body mt-4 text-menu">
              {content.cta.body}
            </p>
          </div>
          <Link
            href={content.cta.href}
            className="button button-md inline-block self-start whitespace-nowrap md:self-center"
          >
            {content.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
