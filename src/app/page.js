// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import HomepageContentSections, { HomepageIntroSection, HomepagePreCategorySections } from './components/HomepageContentSections';
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
            <HomepagePreCategorySections />
            <section id="categories" className="max-w-full overflow-hidden bg-gentle px-4 py-16 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl min-w-0">
                    <div className="mb-10 max-w-3xl min-w-0">
                        <p className="body font-semibold text-primary">
                            Equipment areas
                        </p>
                        <h2 className="responsive-h2 break-words [overflow-wrap:anywhere] text-primary">
                            Start from the right equipment area
                        </h2>
                        <p className="body mt-4 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                            Start with the area that matches the material, operation or production process behind your inquiry - from field-related equipment to grain reception, cleaning, conveying and food production workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {homepageCategories.map((category) => (
                            <article
                                key={category.id}
                                className="flex h-full min-w-0 flex-col rounded border border-neutral bg-white p-7 shadow-md"
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
                                    <p className="body mt-4 flex-1 break-words text-base leading-7 [overflow-wrap:anywhere] text-menu md:text-[1rem]">
                                        {category.cardDescription}
                                    </p>
                                    <Link
                                        href={category.route}
                                        className="button button-md mt-6 inline-flex min-h-[44px] items-center justify-center self-start"
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
