// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import HomepageContentSections, { HomepageIntroSection } from './components/HomepageContentSections';
import './globals.css';
import { categories } from '../lib/content/categories.js';

const locale = 'en';

const homepageCategories = categories
    .map((category) => ({
        id: category.id,
        ...category.locales[locale],
    }))
    .sort((firstCategory, secondCategory) => firstCategory.displayOrder - secondCategory.displayOrder);

export default function HomePage() {
    return (
        <main>
            <Hero />
            <HomepageIntroSection />
            <section id="categories" className="max-w-full overflow-hidden bg-gentle px-4 py-16 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl min-w-0">
                    <div className="mb-10 max-w-3xl min-w-0">
                        <h2 className="responsive-h2 break-words [overflow-wrap:anywhere] text-primary">
                            Choose your starting category
                        </h2>
                        <p className="body mt-4 break-words [overflow-wrap:anywhere] text-menu">
                            Choose the starting point that best matches the operation, material flow, production activity, or equipment requirement behind your inquiry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {homepageCategories.map((category) => (
                            <article
                                key={category.id}
                                className="flex h-full min-w-0 flex-col rounded border border-neutral bg-white p-6 shadow"
                            >
                                {category.icon && (
                                    <Image
                                        src={category.icon}
                                        alt={category.altText || `${category.title} category icon`}
                                        width={56}
                                        height={56}
                                        className="mb-6 h-14 w-14"
                                    />
                                )}

                                <div className="flex min-w-0 flex-1 flex-col">
                                    <h3 className="responsive-h3 break-words [overflow-wrap:anywhere] text-primary">
                                        {category.title}
                                    </h3>
                                    <p className="body mt-4 flex-1 break-words [overflow-wrap:anywhere] text-menu">
                                        {category.cardDescription}
                                    </p>
                                    <Link
                                        href={category.route}
                                        className="button button-md mt-6 inline-block self-start"
                                    >
                                        {category.cardCtaLabel}
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <HomepageContentSections />
        </main>
    );
}
