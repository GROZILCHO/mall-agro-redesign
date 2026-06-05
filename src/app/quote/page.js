import Link from 'next/link';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function QuotePage() {
  return (
    <main className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl rounded border border-neutral bg-white p-6 shadow">
        <p className="body text-accent">
          Project-oriented inquiry
        </p>
        <h1 className="responsive-h2 mt-3 text-primary">
          Request a Quote
        </h1>
        <p className="body mt-5 text-menu">
          Use this page as a starting point for an equipment or project inquiry.
          Share the category, application, workflow, or equipment direction you
          want to discuss.
        </p>
        <p className="body mt-4 text-menu">
          A more detailed inquiry form will be added after the content and
          contact flow are approved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="button button-md inline-block self-start">
            Back to homepage
          </Link>
          <Link href="/contact" className="button button-md inline-block self-start">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
