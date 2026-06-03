# Mall Agro Project Handoff

## Current Project State

Mall Agro is an early Next.js App Router project using JavaScript, React, and Tailwind CSS. Documentation bootstrap is complete and the initial read-only Next.js source audit has been completed.

Git baseline is clean on `main`. GitHub remote is configured as `origin https://github.com/GROZILCHO/mall-agro-redesign.git`.

DEC-007 is approved: use domain-based localization with shared internal content identifiers and separate English/Romanian route, content, metadata, Open Graph, alt text, and slug configs.

The localized content/config foundation has been added under `src/lib/`.

The language strategy is domain-based serving, not language redirection. `mallagro.com` is the English version and `mallagro.ro` is the Romanian version. Do not introduce `/ro` prefixes, browser-language redirects, automatic switching, hidden middleware rewrites, or `mallagro.ro -> mallagro.com/ro` redirects without a dedicated approved architecture task.

Current runtime is English baseline only. Romanian config exists, but Romanian runtime pages and shared UI localization are not implemented. The deployment model remains unresolved: one deployment for both domains or separate deployments from the same repository.

Deployment-model audit is complete. `docs/DEPLOYMENT_GUIDE.md` now documents the same-deployment and separate-deployment options, owner decision checklist, blocked Romanian runtime work, and safe preparatory work.

Romanian source implementation is blocked until the owner approves the deployment model and related routing/indexability policies.

DEC-010 is approved: `mallagro.com` and `mallagro.ro` are treated as separate domain-specific sites. A future language switcher should navigate cross-domain to equivalent pages when explicit route pairs exist. Future news content may differ by domain and must not be forced into one-to-one translation.

No source implementation has been done for the cross-domain language switch strategy.

Route-pair mapping policy is documented. Static homepage/category route pairs are known. DEC-011 is approved: missing equivalents should hide or disable the unavailable language switch option and must not redirect to the other domain homepage by default. The route-pair config foundation exists in `src/lib/routes/routePairs.js`; language switcher UI and Romanian route wrappers are not implemented.

The route-pair config uses relative paths only, covers the homepage and three approved category pairs, and returns no active pair / `null` when no approved pair exists. A future language switcher can consume it later.

Future news/articles may have no equivalent or may link to related-but-different content. Do not force future news content into one-to-one translation.

Design-system audit is complete. Current classification: partial draft/reference.

DEC-008 is approved: the current design-system reference is approved as visual direction only, not as the final implementation source of truth.

Category-card pattern draft scope has been documented. The minimal homepage category-card section is implemented and committed.

Navbar logo `next/image` legacy prop warnings have been fixed and committed.

English category placeholder pages are implemented and pushed. Local browser QA confirms the three homepage category-card CTA routes open normally.

Root placeholder metadata has been replaced with a conservative English metadata baseline. `html lang="en"` remains a temporary English baseline until Romanian/domain runtime behavior is scoped.

DEC-009 is approved and implemented: English category placeholder pages temporarily use `noindex` until meaningful final category content is approved and implemented. The pages remain accessible to users but are not intended as final indexable SEO pages.

Category SVG icons now use Next.js `<Image />` in homepage category cards and the English category placeholder page component. The previous category `<img>` lint warnings are resolved without asset, config, or `Icon.js` changes.

TopBar tablet horizontal overflow is fixed. Browser QA confirms no overflow at `375px`, `768px`, `1024px`, or `1440px`. Do not revisit TopBar unless new QA findings require it.

## What Exists

- Next.js App Router structure under `src/app`
- Homepage baseline rendering Header, Hero, category-card section, and Footer
- Header, top bar, navigation, hero, footer, icon component, and empty key metrics component
- Tailwind configuration with early tokens
- Mall Agro logo assets, hero video, hero background, icons, and fonts
- Clean Git repository on `main`
- GitHub remote configured
- Current implemented English routes: `/`, `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`
- Approved architecture direction: domain-based localization with shared internal IDs and separate localized configs
- Localized config modules for locales, route maps, category content, and navigation labels
- Route-pair config foundation for homepage and approved category pairs
- Design-system reference is approved as visual direction only
- Final Tailwind tokens and component patterns are not yet implemented
- Category-card pattern draft scope is documented in `docs/DESIGN_SYSTEM.md`
- Homepage category cards use English/default-locale data from `src/lib/content/categories.js`
- Navbar logo uses the modern `next/image` fill API
- English placeholder routes for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`
- Conservative English root metadata baseline
- Temporary root `html lang="en"` baseline

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
- Romanian placeholder `noindex` policy
- Language switcher UI implementation for cross-domain language switching
- Future news/content equivalence model
- Final design implementation details
- Final product list
- Product detail page scope

## Next Recommended Task

Audit and plan language switcher UI integration using the existing route-pair config foundation. Romanian route wrappers and SEO runtime behavior remain deferred until separately scoped.

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
- Manual responsive/browser QA remains pending.
- English category placeholder routes open normally in local browser QA.
- Romanian category routes are not implemented.
- Domain population strategy audit is complete. The approved direction is domain-based language serving without `/ro` prefixes or language redirects.
- Deployment selection remains unresolved.
- Romanian source implementation is blocked until deployment requirements are approved.
- Romanian shared UI content for homepage, Hero, Footer, TopBar, and placeholder labels must be scoped before Romanian route wrappers are created.
- Cross-domain language switching requires explicit route-pair mapping before implementation.
- Future news/articles may differ by domain and may not always have direct hreflang/language-switch equivalents.
- Route-pair mapping policy is documented at planning level; fallback behavior is approved by DEC-011, and the route-pair config foundation is implemented. Language switcher UI remains pending.
- Product pages are not implemented.
- `/products` index page remains pending.
- Category SVG icon `<img>` warnings are resolved through the narrow Next.js `<Image />` migration.
- TopBar tablet horizontal overflow is resolved and verified at `375px`, `768px`, `1024px`, and `1440px`.
- Indexable route-level SEO metadata and domain/locale runtime strategy remain separate future tasks.
- Final category content must be approved before the placeholder pages become indexable.
- Broader asset performance audit remains a separate future task.

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

Do not wire the new config into UI until the config foundation is audited.

Do not modify Tailwind tokens, global CSS, component styling, or assets before a dedicated design-system task.

Do not treat DEC-008 as approval to implement final Tailwind tokens, component styling, category cards, or asset changes.

Do not implement cards, tokens, CSS, icons, or assets before the next scoped task.

Hydration mismatch with `data-tag-assistant-*` attributes is browser-extension related. Test in Incognito or with extensions disabled before treating it as a project code issue.

Do not migrate products, redesign the homepage, change design tokens, or implement SEO/sitemap/robots unless separately approved.

Do not migrate products before taxonomy and content model approval.

Do not mix English and Romanian content across domains.
