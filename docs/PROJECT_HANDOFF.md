# Mall Agro Project Handoff

## Current Project State

Mall Agro is an early Next.js App Router project using JavaScript, React, and Tailwind CSS. Documentation bootstrap is complete and the initial read-only Next.js source audit has been completed.

Git baseline is clean on `main`. GitHub remote is configured as `origin https://github.com/GROZILCHO/mall-agro-redesign.git`.

## What Exists

- Next.js App Router structure under `src/app`
- Early homepage rendering a hero section
- Header, top bar, navigation, hero, footer, icon component, and empty key metrics component
- Tailwind configuration with early tokens
- Mall Agro logo assets, hero video, hero background, icons, and fonts
- Clean Git repository on `main`
- GitHub remote configured
- Current source route map: only `/`

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
- Domain routing strategy
- Localization implementation strategy
- Final design system approval
- Final product list
- Product detail page scope

## Next Recommended Task

Approve the localization/domain architecture for `mallagro.com` and `mallagro.ro` before any source implementation begins.

## Source Audit Results

- Source audit completed.
- Lint passed.
- Build was not run because `next build` writes to `.next`.
- No old WooCommerce taxonomy or seed product leakage was found in source files.
- Placeholder metadata, hard-coded English labels, missing Romanian routing/content/metadata, design-system drift, asset performance risk, and encoding/mojibake remain open issues.

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

Do not start source-code implementation before localization strategy is approved.

Do not migrate products before taxonomy and content model approval.

Do not mix English and Romanian content across domains.
