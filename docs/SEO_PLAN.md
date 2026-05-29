# Mall Agro SEO Plan

## Strategy

Mall Agro needs a separate SEO strategy per domain while preserving shared business structure.

- `mallagro.com`: English SEO strategy
- `mallagro.ro`: Romanian SEO strategy

No mixed-language metadata is allowed.

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
