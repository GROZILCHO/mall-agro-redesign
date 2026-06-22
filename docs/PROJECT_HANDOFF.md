# Mall Agro Project Handoff

## Current Project State

Mall Agro is an early Next.js App Router project using JavaScript, React, and Tailwind CSS. Documentation bootstrap is complete and the initial read-only Next.js source audit has been completed.

Git baseline is clean on `main`. GitHub remote is configured as `origin https://github.com/GROZILCHO/mall-agro-redesign.git`.

DEC-007 is approved: use domain-based localization with shared internal content identifiers and separate English/Romanian route, content, metadata, Open Graph, alt text, and slug configs.

The localized content/config foundation has been added under `src/lib/`.

The language strategy is domain-based serving, not language redirection. `mallagro.com` is the English version and `mallagro.ro` is the Romanian version. Do not introduce `/ro` prefixes, browser-language redirects, automatic switching, hidden middleware rewrites, or `mallagro.ro -> mallagro.com/ro` redirects without a dedicated approved architecture task.

Current runtime is English baseline plus Romanian category placeholder routes only. Romanian config exists, and the three Romanian category placeholders are implemented, but Romanian homepage/root behavior and broader shared UI localization remain pending. The deployment model remains unresolved: one deployment for both domains or separate deployments from the same repository.

Deployment-model audit is complete. `docs/DEPLOYMENT_GUIDE.md` now documents the same-deployment and separate-deployment options, owner decision checklist, blocked Romanian runtime work, and safe preparatory work.

Broader Romanian source implementation is blocked until the owner approves the deployment model and related routing/indexability policies.

DEC-010 is approved: `mallagro.com` and `mallagro.ro` are treated as separate domain-specific sites. The minimal language switcher navigates cross-domain to equivalent pages when explicit route pairs exist. Future news content may differ by domain and must not be forced into one-to-one translation.

Minimal source implementation exists for the cross-domain language switch strategy.

Route-pair mapping policy is documented. Static homepage/category route pairs are known. DEC-011 is approved: missing equivalents should hide or disable the unavailable language switch option and must not redirect to the other domain homepage by default. The route-pair config foundation exists in `src/lib/routes/routePairs.js`; the cross-domain URL helper exists in `src/lib/routes/languageUrls.js`; `LanguageSwitcher` exists and is minimally integrated into `Navbar`.

The route-pair config uses relative paths only, covers the homepage and three approved category pairs, and returns no active pair / `null` when no approved pair exists. The language switcher uses approved route pairs only and does not fallback to the homepage, guessed URLs, section landing pages, or unrelated content.

Romanian category placeholder routes now exist at `/produse/agricultura`, `/produse/procesarea-cerealelor`, and `/produse/echipamente-industria-alimentara`. They use the shared category placeholder renderer with `locale="ro"` and temporary `noindex` metadata. They are not final Romanian category content.

Future news/articles may have no equivalent or may link to related-but-different content. Do not force future news content into one-to-one translation.

Design-system audit is complete. Current classification: partial draft/reference.

DEC-008 is approved: the current design-system reference is approved as visual direction only, not as the final implementation source of truth.

Category-card pattern draft scope has been documented. The English homepage working B2B baseline is implemented and accepted as a working baseline. It includes conservative Hero copy from `src/lib/content/hero.js`, category cards with `id="categories"`, refined English B2B sections from `src/lib/content/homepage.js`, and Footer. This is not final visual design.

Homepage Authority & Trust Expansion v1 is complete in commit `69f9372`. The homepage now aligns with `docs/BRAND_POSITIONING.md` and `docs/HOMEPAGE_MESSAGING.md`. The milestone updated hero messaging, aligned category gateway copy, added a content-driven authority/trust section, expanded the inquiry process to four steps, and improved quote CTA framing.

Homepage Authority v1 QA passed: `npm.cmd run build` passed, `/` returned `200`, the three English category routes returned `200`, and no unsupported claims were introduced. Known non-blocking notes remain: shared `<img>` warnings in `CategoryLandingPage.js`, stale Browserslist/caniuse-lite data, and a possible future homepage hierarchy refinement to move company positioning before the category gateway.

Navbar logo `next/image` legacy prop warnings have been fixed and committed.

English rich category pages are implemented for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`. Local browser QA confirms the three routes return `200`, render rich category layouts, show no broken images, and have no horizontal overflow at tested viewports.

`/quote` exists as a temporary English placeholder route with `noindex` and returns `200`. It is not the final inquiry form/contact flow.

Root placeholder metadata has been replaced with a conservative English metadata baseline. `html lang="en"` remains a temporary English baseline until Romanian/domain runtime behavior is scoped.

DEC-009 is approved and implemented: English category pages temporarily use `noindex` until final indexable category content and SEO treatment are approved. The pages remain accessible to users but are not intended as final indexable SEO pages yet.

Category SVG icons now use Next.js `<Image />` in homepage category cards and the English category placeholder page component. The previous category `<img>` lint warnings are resolved without asset, config, or `Icon.js` changes.

TopBar tablet horizontal overflow is fixed. Browser QA confirms no overflow at `375px`, `768px`, `1024px`, or `1440px`. Do not revisit TopBar unless new QA findings require it.

Navbar responsive correction is implemented: desktop layout appears at `xl`, and mobile/tablet menu appears below `xl`, resolving the 768px/1024px overlap issue in manual visual review.

Latest stable category baseline includes rich English category pages for Agriculture, Grain Processing / Grain Handling, and Food Industry Equipment.

The recent local homepage `404` report was traced to stale/multiple local dev servers or port mismatch. After killing Node processes, deleting `.next`, and starting one clean dev server, `/`, `/products/agriculture`, and `/quote` returned `200`. If route behavior differs by port, stop and clear stale Node/Next processes before assuming source regression.

The Agriculture category page uses explicit image-slot architecture, v1 content, and implemented visuals. Food Industry Equipment has a rich page v1 and hero visual. Grain Processing / Grain Handling has a rich page v1 with all image slots currently empty. All three English category pages remain temporary `noindex`. Romanian category routes remain placeholders.

The attempted Agriculture mobile overflow/readability fix was not committed and must not be treated as accepted. Mobile readability at 375px remains a separate controlled follow-up. Mobile menu concerns are observation-only unless reproduced on a clean single dev server.

## What Exists

- Next.js App Router structure under `src/app`
- Homepage working baseline rendering Header, Hero, category-card section, refined B2B content sections, and Footer
- Header, top bar, navigation, hero, footer, icon component, and empty key metrics component
- Tailwind configuration with early tokens
- Mall Agro logo assets, hero video, hero background, icons, and fonts
- Clean Git repository on `main`
- GitHub remote configured
- Current implemented English routes: `/`, `/quote`, `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`
- Current implemented Romanian category placeholder routes: `/produse/agricultura`, `/produse/procesarea-cerealelor`, and `/produse/echipamente-industria-alimentara`
- Approved architecture direction: domain-based localization with shared internal IDs and separate localized configs
- Localized config modules for locales, route maps, category content, and navigation labels
- Route-pair config foundation for homepage and approved category pairs
- Cross-domain language URL helper in `src/lib/routes/languageUrls.js`
- Minimal `LanguageSwitcher` component integrated into `Navbar`
- Design-system reference is approved as visual direction only
- Final Tailwind tokens and component patterns are not yet implemented
- Category-card pattern draft scope is documented in `docs/DESIGN_SYSTEM.md`
- Homepage category cards use English/default-locale data from `src/lib/content/categories.js`
- Conservative Hero copy uses `src/lib/content/hero.js`
- Refined English homepage B2B sections use `src/lib/content/homepage.js`
- Navbar logo uses the modern `next/image` fill API
- English rich category routes for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`
- Romanian placeholder routes for `/produse/agricultura`, `/produse/procesarea-cerealelor`, and `/produse/echipamente-industria-alimentara`
- Conservative English root metadata baseline
- Temporary root `html lang="en"` baseline
- Rich Agriculture category page with image-slot architecture and implemented visuals at `/products/agriculture`
- Rich Grain Processing / Grain Handling category page v1 at `/products/grain-processing`; visual assets remain pending
- Rich Food Industry Equipment category page v1 with hero visual at `/products/food-industry-equipment`

## What Was Added

Workflow governance documentation:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/PROJECT_RULES.md`
- `docs/SITE_STRUCTURE.md`
- `docs/CONTENT_MODEL.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/SEO_PLAN.md`
- `docs/IMAGE_ASSET_REGISTER.md`
- `docs/CURRENT_STATUS.md`
- `docs/NEXT_ACTIONS.md`
- `docs/ISSUES_LOG.md`
- `docs/DECISIONS_LOG.md`
- `docs/PROJECT_HANDOFF.md`
- `docs/DEPLOYMENT_GUIDE.md`

## Unresolved Decisions

- Deployment target
- Deployment model for `mallagro.com` and `mallagro.ro`
- Wrong-language route behavior
- Language switcher browser QA across desktop, tablet, and mobile
- Future news/content equivalence model
- Final design implementation details
- Final product list
- Product detail page scope

## Next Recommended Task

Run homepage visual/UX QA for Homepage Authority & Trust Expansion v1, then decide whether to refine homepage hierarchy before moving into About page messaging. Optional follow-ups include a content/editorial QA sprint across the three English rich category pages, migrating shared category image rendering from `<img>` to `next/image`, and planning Grain Processing visual assets. Product template architecture and product import strategy remain later phases. Romanian homepage/root behavior, full Romanian header/navigation localization, `html lang="ro"`, and SEO runtime behavior remain deferred until separately scoped.

## Source Audit Results

- Source audit completed.
- Lint passed.
- Build was not run because `next build` writes to `.next`.
- No old WooCommerce taxonomy or seed product leakage was found in source files.
- Root placeholder metadata is resolved; route-level metadata remains pending.
- SEO route-level metadata readiness audit is complete.
- DEC-009 temporary `noindex` metadata is implemented for the three English category placeholder pages.
- Open Graph, canonical, sitemap, robots, hreflang, and structured data remain deferred.
- Hard-coded English labels, missing Romanian routing/content/metadata, design-system drift, asset performance risk, and encoding/mojibake remain open issues.
- Minimal homepage category cards are implemented and committed.
- Navbar logo `next/image` legacy prop warnings are fixed.
- English homepage working baseline has passed source, lint, local route, and manual visual review at practical viewport levels.
- English rich category routes open normally in local browser QA.
- Romanian category placeholder routes are implemented with `locale="ro"` and temporary `noindex`; final Romanian category content remains pending.
- Domain population strategy audit is complete. The approved direction is domain-based language serving without `/ro` prefixes or language redirects.
- Deployment selection remains unresolved.
- Romanian homepage/root behavior remains blocked until deployment requirements and route handling are approved.
- Romanian shared UI content for homepage, Hero, Footer, and TopBar must be scoped before broader Romanian runtime implementation.
- Cross-domain language switching milestone is implemented at minimal scope: route-pair config, URL helper, `LanguageSwitcher`, and Navbar integration.
- Future news/articles may differ by domain and may not always have direct hreflang/language-switch equivalents.
- Route-pair mapping policy is documented; fallback behavior is approved by DEC-011; route-pair config, URL helper, and minimal language switcher UI are implemented. Manual browser QA remains pending.
- Product pages are not implemented.
- `/products` index page remains pending.
- Category SVG icon `<img>` warnings are resolved through the narrow Next.js `<Image />` migration.
- TopBar tablet horizontal overflow is resolved and verified at `375px`, `768px`, `1024px`, and `1440px`.
- Navbar 768px/1024px overlap is resolved by using the mobile/tablet menu below `xl`.
- `/quote` placeholder route is implemented with temporary `noindex`; final inquiry/contact flow remains pending.
- Indexable route-level SEO metadata and domain/locale runtime strategy remain separate future tasks.
- Final category content and SEO treatment must be approved before the category pages become indexable.
- Next major work packages: homepage visual/UX QA, homepage hierarchy decision, About page messaging, and later product template architecture/product import planning.
- Broader asset performance audit remains a separate future task.
- Current category-page baseline is the committed Agriculture image-slot architecture in `bc91cdd`.
- Avoid multiple concurrent local dev servers. If `/` or another route behaves differently by port, kill stale Node processes, delete `.next` if needed, and restart one clean dev server from this repository.

## Files To Inspect First

- `package.json`
- `next.config.mjs`
- `tailwind.config.js`
- `src/app/layout.js`
- `src/app/page.js`
- `src/app/components/`
- `public/`

## Warnings / Do Not Touch

Do not modify source code, styles, assets, packages, build output, or deployment files without a separate narrow implementation task.

Do not modify Navbar, Header, homepage, or mobile menu behavior without a dedicated audit and scoped implementation task.

Do not wire the new config into UI until the config foundation is audited.

Do not modify Tailwind tokens, global CSS, component styling, or assets before a dedicated design-system task.

Do not treat DEC-008 as approval to implement final Tailwind tokens, component styling, category cards, or asset changes.

Do not implement cards, tokens, CSS, icons, or assets before the next scoped task.

Hydration mismatch with `data-tag-assistant-*` attributes is browser-extension related. Test in Incognito or with extensions disabled before treating it as a project code issue.

Do not migrate products, redesign the homepage, change design tokens, or implement SEO/sitemap/robots unless separately approved.

Do not migrate products before taxonomy and content model approval.

Do not mix English and Romanian content across domains.
