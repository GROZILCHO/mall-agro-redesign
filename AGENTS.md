# Mall Agro Agent Instructions

## Source Of Truth

GitHub is the source of truth for this project once the remote repository is configured. Do not add or change a remote unless the exact GitHub repository URL is provided by the human operator.

## Project Type

This is a Next.js App Router project using JavaScript, React, and Tailwind CSS.

Do not treat this project as Vite. Do not create Vite files such as `vite.config.*`, `index.html`, `App.tsx`, or `main.jsx`.

## Allowed File Scope For Workflow Bootstrap

For workflow documentation bootstrap tasks, agents may create or modify only:

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

Do not modify application source, styling, assets, package files, build output, deployment files, or binary files unless a separate narrow implementation task explicitly allows it.

## Forbidden During Documentation Bootstrap

Do not modify:

- `src/**`
- `public/**`
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tailwind.config.js`
- `postcss.config.js`
- `jsconfig.json`
- `.eslintrc.json`
- `.gitignore`
- `README.md`
- `.next/**`
- `node_modules/**`
- image files
- video files
- SVG files
- font files
- binary files
- application source code
- styling files
- build or deployment files

If a forbidden file appears to need changes, stop and report.

## Product And Content Rules

Do not invent routes. Do not invent product categories. Do not invent unsupported business claims.

The new catalog has three main product categories:

1. Agriculture
2. Grain Processing / Grain Handling
3. Food Industry Equipment

Romanian category names:

1. Agricultură
2. Procesarea și manipularea cerealelor
3. Echipamente pentru industria alimentară

Do not migrate products before the content model and taxonomy are approved.

Do not import seed products from the old WooCommerce catalog into the new catalog unless explicitly re-approved.

Treat the old WooCommerce website as a content source, not as the new information architecture.

## Localization Rules

For `mallagro.com`, all visible content, navigation, product/category names, SEO metadata, Open Graph text, image alt text, and slugs must be English.

For `mallagro.ro`, all visible content, navigation, product/category names, SEO metadata, Open Graph text, image alt text, and slugs must be Romanian.

Do not use English slugs on the Romanian domain unless explicitly approved later.

Do not use Romanian content on the English domain.

## Design Rules

Do not invent colors, design tokens, layout systems, or brand rules. Existing design assets and early Tailwind tokens must be audited and documented before design changes are made.

Do not modify source code without a separate narrow implementation task.
