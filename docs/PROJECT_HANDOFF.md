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

Homepage v2 Phase 2 is complete in commit `8be18c9` (`feat: add homepage project capability sections`). The milestone updated hero positioning, added `What We Support`, added `Project Capabilities`, and positioned company capability sections before the category gateway while preserving category links, routes, SEO behavior, assets, localization, category pages, and product pages.

Current homepage order is: Hero, Company / intro positioning, What We Support, Project Capabilities, Equipment Categories, Authority / Inquiry Discipline, Inquiry Process, Final CTA.

Homepage v2 Phase 2 QA passed: `npm.cmd run build` passed, `/` returned `200`, `/products/agriculture` returned `200`, `/products/grain-processing` returned `200`, `/products/food-industry-equipment` returned `200`, and no unsupported claims were introduced. Known non-blocking notes remain: shared `<img>` warnings in `CategoryLandingPage.js`, stale Browserslist/caniuse-lite data, the homepage still lacks strong visual proof of project capability and industrial scale, and a future visual strategy is required before the homepage can reach an international B2B standard.

Homepage v2 responsive and section hierarchy refinement is complete in commit `a016f47` (`fix: refine homepage responsive layout and section hierarchy`). The refinement split Hero content into a shorter H1 and industry subline, fixed Hero CTA visibility, improved Hero mobile readability, improved `What We Support` cards, changed `Project Capabilities` to a stronger card/grid presentation, improved the authority section label to `Confidential Communication`, improved Inquiry Process readability, and refined category cards and CTA touch targets.

The current homepage is a stable responsive baseline with the Content Matrix implemented. Mobile layout is no longer blocked by hidden CTAs or cramped cards, and desktop remains structurally stable. The refinement preserved routes, SEO behavior, metadata, localization, assets, product pages, and category pages.

Homepage static visual placeholder system is complete in commit `af8eb8e` (`feat: add homepage visual placeholder system`). The milestone created a reusable static homepage visual placeholder component, added controlled placeholder content data in `src/lib/content/homepage.js`, rendered one placeholder in the Company / Why Mall Agro section, and rendered one placeholder in the Project Capabilities section.

The current homepage is a stable content/layout baseline with temporary visual slots for future project/equipment visuals. The page is less text-heavy than before. The placeholder milestone did not add images or public assets, did not rewrite homepage copy, and did not change routes, SEO behavior, metadata, localization, product pages, category pages, or public assets.

Known non-blocking homepage notes remain: shared `<img>` warnings in `CategoryLandingPage.js`, stale Browserslist/caniuse-lite data, placeholder panels are temporary and must not be treated as final visual proof, the homepage still needs stronger section-level content refinement before final visual production, final visuals must avoid client-identifiable facilities, readable manufacturer labels, fake certificates, logos, and unsupported project claims, category cards still need stronger future visual differentiation, and an Inquiry Process section that is functional but visually dry.

`docs/HOMEPAGE_SECTION_REFINEMENT_MATRIX.md` was approved and used as the controlled source for the refined homepage messaging implemented in commit `3f037ad`. Codex must still not rewrite homepage copy freely; future copy changes should be narrow, approved, and claim-safe.

Refined homepage messaging is implemented in commit `3f037ad` (`content: refine homepage messaging`). The implementation mapped approved refined homepage copy from `docs/HOMEPAGE_SECTION_REFINEMENT_MATRIX.md`, updated Hero body copy, refined Why Mall Agro wording, refined What We Support cards, refined Project Capabilities wording, refined Equipment Areas heading and English category descriptions, replaced unclear `Separation from ecommerce` wording with `Consultative inquiry model`, refined Inquiry Process title/body, preserved Final CTA structure, and preserved the placeholder system.

Implementation files changed were `docs/HOMEPAGE_SECTION_REFINEMENT_MATRIX.md`, `src/app/page.js`, `src/lib/content/categories.js`, `src/lib/content/hero.js`, and `src/lib/content/homepage.js`. Validation passed: `npm.cmd run build` passed, and production route checks returned `200` for `/`, `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`. Known non-blocking warnings remain: `<img>` warnings in `CategoryLandingPage.js`, stale Browserslist/caniuse-lite, and occasional webpack cache snapshot warnings.

The current homepage English messaging is cleaner, more industrial, and less generic. Structure remains stable, the visual placeholder system remains temporary, no unsupported claims were added, no Cimbria/Bühler public claims were added under Mall Agro, and no routes, SEO behavior, metadata, product pages, Romanian content, assets, or localization logic were changed.

Known remaining homepage issues: final visual QA is still needed after content refinement, placeholder visuals are temporary and must later be replaced or supported by a visual evidence strategy, category cards may later need stronger visual differentiation, category/product pages still need future review after the homepage stabilizes, and existing `<img>` warnings in `CategoryLandingPage.js` remain outside this milestone.

Homepage post-implementation screenshot audit for commit `3f037ad` is complete at `375px`, `768px`, and `1440px`. The audit found stable layout, no obvious horizontal overflow, visible CTAs, rendered placeholder panels that help reduce the text-heavy feel, and coherent homepage structure. Refined homepage messaging is stable; English copy is cleaner, more industrial, and less generic; no broad copy rewrite is recommended at this stage.

Section-level audit notes: Hero content direction is good, but the visual is still agriculture-heavy and temporary. Why Mall Agro is improved and client-facing, but its placeholder remains temporary. What We Support has the correct structure, though cards remain visually generic. Project Capabilities is a strong concept and slightly dense but acceptable. Equipment Areas is functional and clear, but category cards need future visual differentiation. Industrial Inquiry Discipline is important but visually heavy and should be considered for future visual refinement. Inquiry Process is useful and readable. Final CTA is clear and safe.

Remaining homepage issues after audit: the page lacks final visual evidence of industrial scale, placeholders are temporary, the dark authority/inquiry discipline section is visually heavy, cards remain clean but generic, and `storage-adjacent handling` is a minor future copy-polish candidate if approved later. Next homepage work should focus on controlled visual hierarchy / evidence strategy before generating final assets, while preserving claim-safety rules: no public Cimbria/Bühler claims under Mall Agro, no official representative claim, no exclusive distribution claim, no market leader claim, no turnkey/EPC claim, and no instant quote or stock claim.

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

Prepare a controlled homepage visual hierarchy / evidence strategy. The post-implementation audit for commit `3f037ad` is complete and found the refined copy stable with no broad rewrite recommended. Next work should define visual proof areas for industrial scale, equipment context, production lines, logistics and delivery coordination, implementation support, and category-specific credibility before generating final homepage assets. Optional follow-ups include About page messaging, a content/editorial QA sprint across the three English rich category pages, migrating shared category image rendering from `<img>` to `next/image`, and planning Grain Processing visual assets. Product template architecture and product import strategy remain later phases. Romanian homepage/root behavior, full Romanian header/navigation localization, `html lang="ro"`, and SEO runtime behavior remain deferred until separately scoped.

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
- Next major work packages: homepage visual hierarchy / evidence strategy, About page messaging, and later product template architecture/product import planning.
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
