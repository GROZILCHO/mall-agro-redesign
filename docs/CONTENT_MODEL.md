# Mall Agro Content Model

This is a draft model. No product migration should begin until this model and taxonomy are approved.

Every product and category must have separate localized fields for English and Romanian. Do not reuse English slugs, metadata, Open Graph text, or alt text on Romanian pages.

## Category Fields

| Field | Description |
|---|---|
| `id` | Stable internal identifier. |
| `locale` | `en` or `ro`. |
| `title` | Localized category name. |
| `slug` | Localized URL slug for the relevant domain. |
| `subtitle` | Short localized supporting line. |
| `intro` | Localized category introduction. |
| `productGroups` | Optional localized groups inside the category. |
| `ctaLabel` | Localized call-to-action label. |
| `ctaTarget` | Route or form target. |
| `seoTitle` | Localized SEO title. |
| `seoDescription` | Localized SEO description. |
| `heroImage` | Hero/category image reference. |
| `altText` | Localized image alt text. |

## Product Fields

| Field | Description |
|---|---|
| `id` | Stable internal identifier. |
| `categoryId` | Parent category identifier. |
| `locale` | `en` or `ro`. |
| `title` | Localized product name. |
| `slug` | Localized URL slug for the relevant domain. |
| `shortDescription` | Localized summary. |
| `longDescription` | Localized detailed description. |
| `applications` | Localized list of applications. |
| `keyFeatures` | Localized list of key features. |
| `technicalHighlights` | Localized technical highlights, only when source-verified. |
| `images` | Product image references. |
| `documents` | Datasheets, PDFs, manuals, or downloads. |
| `relatedProducts` | Related product IDs. |
| `seoTitle` | Localized SEO title. |
| `seoDescription` | Localized SEO description. |
| `altText` | Localized image alt text. |

## Category IDs

Initial stable category IDs:

- `agriculture`
- `grain-processing-handling`
- `food-industry-equipment`

## Product Migration Rule

The old WooCommerce website can be used as a source for product facts and media, but the old WooCommerce taxonomy must not be imported as the new structure.

Seed products are excluded from the new product database unless explicitly re-approved.
