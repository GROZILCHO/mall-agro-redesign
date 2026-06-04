# Mall Agro Site Structure

All routes are draft until approved. The two domains should share the same conceptual structure while using fully localized routes and content.

## Domain-Based Route Model

`mallagro.com` and `mallagro.ro` are separate language versions. The approved public URL model is domain-based, not redirect-based. No `/ro` route-prefix model is approved.

Current implemented English routes:

- `mallagro.com/`
- `mallagro.com/products/agriculture`
- `mallagro.com/products/grain-processing`
- `mallagro.com/products/food-industry-equipment`

Current implemented Romanian category placeholder routes:

- `mallagro.ro/produse/agricultura`
- `mallagro.ro/produse/procesarea-cerealelor`
- `mallagro.ro/produse/echipamente-industria-alimentara`

Romanian routes still pending:

- `mallagro.ro/`
- `mallagro.ro/produse`

The implemented `/produse/...` category routes are temporary placeholder pages that use the shared category placeholder renderer with Romanian content and temporary `noindex` metadata. The `/produse` index route and Romanian homepage/root behavior are not implemented. Romanian routes must use Romanian slugs. English and Romanian route trees may share renderers, but they must expose language-specific public URLs. Deployment architecture remains unresolved.

## Route Pair Model For Language Switching

Future cross-domain language switching should use explicit route pairs, not automatic slug similarity.

The current language switcher supports only approved route pairs from `src/lib/routes/routePairs.js` and cross-domain URL generation from `src/lib/routes/languageUrls.js`. Unknown or unpaired routes do not produce a language switcher link.

Current implemented route-pair support:

| English URL | Romanian URL | Status |
|---|---|---|
| `mallagro.com/` | `mallagro.ro/` | Pair configured; Romanian homepage/root behavior not implemented. |
| `mallagro.com/products/agriculture` | `mallagro.ro/produse/agricultura` | Both paths physically exist; Romanian route is a placeholder. |
| `mallagro.com/products/grain-processing` | `mallagro.ro/produse/procesarea-cerealelor` | Both paths physically exist; Romanian route is a placeholder. |
| `mallagro.com/products/food-industry-equipment` | `mallagro.ro/produse/echipamente-industria-alimentara` | Both paths physically exist; Romanian route is a placeholder. |

Not every future page must be a direct translation. Future news or article content may differ by market and may not always have a one-to-one equivalent.

Future dynamic content may need an internal pairing field, such as `translationGroupId`, `relatedContentId`, or a similar candidate. These are future candidates only and are not approved implementation requirements yet.

## Cross-Domain Route-Pair Mapping Policy

Route pairs must be explicit and auditable before any language switcher is implemented.

Static route pairs may be listed explicitly. Category route pairs may be derived from shared internal category IDs because the approved categories have stable shared IDs and separate localized routes.

Current approved static/category equivalence examples:

| English URL | Romanian URL |
|---|---|
| `mallagro.com/` | `mallagro.ro/` |
| `mallagro.com/products/agriculture` | `mallagro.ro/produse/agricultura` |
| `mallagro.com/products/grain-processing` | `mallagro.ro/produse/procesarea-cerealelor` |
| `mallagro.com/products/food-industry-equipment` | `mallagro.ro/produse/echipamente-industria-alimentara` |

These examples are implemented as route-pair data and minimal language switcher URL targets. The three Romanian category route wrappers now exist as temporary placeholder pages and align with the route-pair config.

Future dynamic content such as news or articles must not assume a translation exists. Dynamic content must support exact translation pairs, related but non-translated content, and pages with no equivalent.

If a route pair exists, a future language switch may link to the paired URL. If no route pair exists, the switch must not generate a guessed URL from slug similarity or route shape.

If no equivalent or explicitly assigned related page exists, the unavailable language option should be hidden or disabled. The exact UI treatment is a future design/implementation detail.

Fallback to the other domain homepage or to a section landing page is not approved as default behavior. Related pages may be used only when explicitly assigned in future content mapping.

| Domain | Locale | Route | Page Name | Page Type | Next.js App Path / Proposed App Path | SEO Intent | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| mallagro.com | en | `/` | Home | Landing / catalog entry | `src/app/page.js` | Brand and category overview | Draft | Existing homepage is early and not workflow-approved. |
| mallagro.com | en | `/products` | Products | Product index | `src/app/products/page.js` | Product catalog overview | Draft | Proposed path. |
| mallagro.com | en | `/products/agriculture` | Agriculture | Category page | `src/app/products/agriculture/page.js` | Agriculture equipment category | Draft | English slug required. |
| mallagro.com | en | `/products/grain-processing` | Grain Processing / Grain Handling | Category page | `src/app/products/grain-processing/page.js` | Grain processing and handling equipment | Draft | English slug required. |
| mallagro.com | en | `/products/food-industry-equipment` | Food Industry Equipment | Category page | `src/app/products/food-industry-equipment/page.js` | Food industry equipment category | Draft | English slug required. |
| mallagro.com | en | `/solutions` | Solutions | Solutions index | `src/app/solutions/page.js` | Industry and business solutions | Draft | Proposed path. |
| mallagro.com | en | `/about` | About | Company page | `src/app/about/page.js` | Company trust and background | Draft | Proposed path. |
| mallagro.com | en | `/contact` | Contact | Contact page | `src/app/contact/page.js` | Contact and local business discovery | Draft | Proposed path. |
| mallagro.com | en | `/quote` | Request a Quote | Lead generation | `src/app/quote/page.js` | Quote request conversions | Draft | Proposed path. |
| mallagro.com | en | `/privacy-policy` | Privacy Policy | Legal | `src/app/privacy-policy/page.js` | Legal compliance | Draft | Proposed path. |
| mallagro.com | en | `/cookie-policy` | Cookie Policy | Legal | `src/app/cookie-policy/page.js` | Legal compliance | Draft | Proposed path. |
| mallagro.ro | ro | `/` | Acasă | Landing / catalog entry | `src/app/page.js` or locale/domain routing TBD | Prezentare brand și categorii | Draft | Domain routing strategy TBD. |
| mallagro.ro | ro | `/produse` | Produse | Product index | `src/app/produse/page.js` or locale/domain routing TBD | Prezentare catalog produse | Draft | Not implemented. Romanian slug required. |
| mallagro.ro | ro | `/produse/agricultura` | Agricultură | Category page | `src/app/produse/agricultura/page.js` | Echipamente pentru agricultură | Placeholder / Noindex | Implemented as temporary placeholder. Romanian slug required. |
| mallagro.ro | ro | `/produse/procesarea-cerealelor` | Procesarea și manipularea cerealelor | Category page | `src/app/produse/procesarea-cerealelor/page.js` | Echipamente pentru procesarea cerealelor | Placeholder / Noindex | Implemented as temporary placeholder. Romanian slug required. |
| mallagro.ro | ro | `/produse/echipamente-industria-alimentara` | Echipamente pentru industria alimentară | Category page | `src/app/produse/echipamente-industria-alimentara/page.js` | Echipamente pentru industria alimentară | Placeholder / Noindex | Implemented as temporary placeholder. Romanian slug required. |
| mallagro.ro | ro | `/solutii` | Soluții | Solutions index | `src/app/solutii/page.js` or locale/domain routing TBD | Soluții pentru industrii și aplicații | Draft | Romanian slug required. |
| mallagro.ro | ro | `/despre-noi` | Despre noi | Company page | `src/app/despre-noi/page.js` or locale/domain routing TBD | Informații despre companie | Draft | Romanian slug required. |
| mallagro.ro | ro | `/contact` | Contact | Contact page | `src/app/contact/page.js` or locale/domain routing TBD | Contact și descoperire locală | Draft | Same spelling works in Romanian. |
| mallagro.ro | ro | `/cerere-oferta` | Cerere ofertă | Lead generation | `src/app/cerere-oferta/page.js` or locale/domain routing TBD | Cereri de ofertă | Draft | Romanian slug required. |
| mallagro.ro | ro | `/politica-de-confidentialitate` | Politica de confidențialitate | Legal | `src/app/politica-de-confidentialitate/page.js` or locale/domain routing TBD | Conformitate legală | Draft | Romanian slug required. |
| mallagro.ro | ro | `/politica-cookie` | Politica cookie | Legal | `src/app/politica-cookie/page.js` or locale/domain routing TBD | Conformitate legală | Draft | Romanian slug required. |
