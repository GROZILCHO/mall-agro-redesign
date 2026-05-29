# Mall Agro Project Rules

## Platform Rules

- The project uses Next.js App Router.
- The project uses JavaScript, React, and Tailwind CSS.
- Do not make Vite assumptions.
- Do not create Vite entry files or Vite deployment assumptions.

## Domain-Language Integrity

- `mallagro.com` must be fully English.
- `mallagro.ro` must be fully Romanian.
- No mixed-language navigation, visible UI, metadata, slugs, Open Graph text, or alt text.

## Localized Slugs

English domain slugs must be English.

Romanian domain slugs must be Romanian.

Do not use English slugs on the Romanian domain unless explicitly approved later.

## Localized Metadata

Each domain must have language-matched:

- SEO title
- SEO description
- Open Graph title
- Open Graph description
- image alt text
- canonical URLs
- sitemap URLs

## Product Taxonomy

The approved top-level taxonomy is:

1. Agriculture
2. Grain Processing / Grain Handling
3. Food Industry Equipment

Romanian:

1. Agricultură
2. Procesarea și manipularea cerealelor
3. Echipamente pentru industria alimentară

Do not invent additional top-level product categories without approval.

## Exclusions

Seed products from the old WooCommerce catalog are out of scope for the new product database unless explicitly re-approved.

The old WooCommerce structure must not be imported as the new taxonomy.

## Content Claims

Do not invent unsupported business claims, certifications, partnerships, product capabilities, technical specs, or market claims.

If a claim is needed, mark it as needing source validation.

## Implementation Control

Do not modify source code without a separate narrow implementation task.

Do not migrate products before the content audit, content model, and taxonomy are approved.

Do not modify design tokens, layout systems, colors, or typography without a design-system task.
