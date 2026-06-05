// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import HomepageContentSections from './components/HomepageContentSections';
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
            <section id="categories" className="bg-gentle px-4 py-16 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <h2 className="responsive-h2 text-primary">
                            Explore our equipment categories
                        </h2>
                        <p className="body mt-4 text-menu">
                            A focused B2B catalog structure for agriculture, grain processing and handling, and food industry equipment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {homepageCategories.map((category) => (
                            <article
                                key={category.id}
                                className="flex h-full flex-col rounded border border-neutral bg-white p-6 shadow"
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

                                <div className="flex flex-1 flex-col">
                                    <h3 className="h3 text-primary">
                                        {category.title}
                                    </h3>
                                    <p className="body mt-4 flex-1 text-menu">
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
            {/* Добавете останалите секции тук */}
        </main>
    );
}
