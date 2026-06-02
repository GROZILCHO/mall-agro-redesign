# Mall Agro SEO Plan

## Strategy

Mall Agro needs a separate SEO strategy per domain while preserving shared business structure.

- `mallagro.com`: English SEO strategy
- `mallagro.ro`: Romanian SEO strategy

No mixed-language metadata is allowed.

## Domain Serving Boundary

`mallagro.com` and `mallagro.ro` are separate language versions. No redirect-based language SEO plan is approved. Do not redirect `mallagro.ro` to `mallagro.com/ro`, introduce a `/ro` primary route-prefix model, or use browser-language redirects unless separately approved.

Canonical URLs, hreflang, sitemap, robots, and localized metadata rollout must wait until the domain/deployment strategy and both route trees are stable. Placeholder pages and temporary `noindex` policies remain separate from the final SEO rollout.

## Indexability

The conservative English root metadata baseline is active. The homepage can remain indexable under the current English baseline.

English category placeholder pages should temporarily use `noindex`:

- `/products/agriculture`
- `/products/grain-processing`
- `/products/food-industry-equipment`

This temporary policy does not create a `robots.txt` or sitemap policy. Canonical URLs, hreflang, sitemap, robots, Open Graph, and structured data remain future scoped tasks.

Category pages can become indexable only after final category content is approved, the placeholder notice is removed or replaced, SEO metadata is reviewed, and the routing/domain strategy remains consistent.

## Localized Metadata

Each page must define localized:

- title
- description
- Open Graph title
- Open Graph description
- image alt text
- canonical URL
- slug

English pages must use English metadata. Romanian pages must use Romanian metadata.

## Slug Strategy

English routes must use English slugs.

Romanian routes must use Romanian slugs.

Do not use English slugs for the Romanian domain unless explicitly approved later.

## Canonical Strategy

Canonical URLs should be domain-specific:

- English pages canonicalize to `mallagro.com`
- Romanian pages canonicalize to `mallagro.ro`

Cross-domain hreflang strategy is TBD and should be defined before implementation.

## Sitemap Strategy

Each domain should have its own sitemap containing only language-matched URLs.

Seed categories and seed products from the old WooCommerce catalog must be excluded from the new sitemap unless explicitly re-approved.

## Open Graph

Open Graph text must match the page language and domain.

Open Graph images should be registered in `IMAGE_ASSET_REGISTER.md` before final use.

## Alt Text

Image alt text must match the language of the domain/page where the asset appears.

## Future Product Detail Metadata

Future product detail pages should include:

- localized product title
- localized product slug
- localized SEO title
- localized SEO description
- localized Open Graph title
- localized Open Graph description
- localized image alt text
- canonical URL for the correct domain
- optional structured data only after product fields are source-verified
