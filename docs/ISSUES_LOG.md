# Mall Agro Issues Log

| ID | Issue | Status | Notes |
|---|---|---|---|
| ISS-001 | Project was initially detected outside a Git repository. | Open | Git was initialized locally during bootstrap. Repository is now clean on `main` and remote is configured. |
| ISS-002 | Workflow docs were missing before bootstrap. | Open | Required governance files are now present; keep open until baseline workflow commit is confirmed. |
| ISS-003 | Domain localization strategy must be implemented carefully. | Open | English and Romanian domains require fully localized slugs, metadata, alt text, and visible content. |
| ISS-004 | Design system is not yet stable. | Open | Early Tailwind tokens and global classes exist but need approval. |
| ISS-005 | Old WooCommerce taxonomy is too large and seed-heavy. | Open | It must be treated as source content only, not new structure. |
| ISS-006 | Deployment/domain strategy is not confirmed. | Open | Vercel, Node hosting, or static export compatibility are TBD. |
| ISS-007 | Existing project files were untracked after local Git initialization. | Open | Source audit later found the working tree clean; keep open until baseline commit history is verified. |
| ISS-008 | Placeholder metadata exists in App Router layout. | Resolved | Conservative English root title and description are active. Route-level metadata and the full SEO rollout remain pending separate tasks. |
| ISS-009 | Domain localization strategy is not implemented. | Open | No approved implementation exists yet for `mallagro.com` English and `mallagro.ro` Romanian routing/content. |
| ISS-010 | Hard-coded English UI labels and placeholder navigation exist. | Open | Homepage/header content includes English labels and placeholder product/solution links. |
| ISS-011 | Romanian route, content, and metadata implementation is missing. | Open | No Romanian App Router routes, localized content source, or Romanian metadata were found. |
| ISS-012 | `KeyMetrics.js` is empty. | Open | Empty component exists under `src/app/components/`. |
| ISS-013 | Large hero video and design reference asset may create performance risk. | Open | Audit noted large hero video and design reference image should be reviewed before production use. |
| ISS-014 | Tailwind token usage is mixed with arbitrary utility values. | Open | Source uses early Tailwind tokens plus hard-coded colors/spacing utilities. |
| ISS-015 | Source comments show encoding/mojibake. | Open | Some comments and localized text display corrupted encoding. |
| ISS-016 | Build validation has not been run under workflow control. | Open | Build was intentionally skipped during audit because `next build` writes to `.next`. |
| ISS-017 | Category route pages are missing. | Resolved | English placeholder routes `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment` are implemented. Local browser QA confirms they open normally. |
| ISS-018 | Manual responsive/browser QA is pending for homepage category cards. | Open | Source/SSR checks passed. Verify mobile, tablet, and desktop layouts manually in a browser. |
| ISS-019 | Category-card SVG icons trigger `@next/next/no-img-element`. | Resolved | Homepage category cards and the English category placeholder component now use Next.js `<Image />`. No asset, config, or `Icon.js` changes were required. Lint passes without warnings or errors. |
| ISS-020 | Google Tag Assistant attributes can cause hydration mismatch warnings. | Environment / Non-code | `data-tag-assistant-prod-present` and `data-tag-assistant-present` are browser-extension DOM mutations. Test in Incognito or with extensions disabled before treating this as a project bug. |
| ISS-021 | English category placeholder pages are not ready for indexable SEO metadata. | Resolved | Temporary `noindex` metadata is implemented for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`. Final indexable metadata remains deferred until meaningful category content is approved and implemented. |
| ISS-022 | TopBar contact group causes tablet horizontal overflow. | Resolved | The responsive fix is limited to `src/app/components/TopBar.js`. Browser QA confirms no overflow at `375px`, `768px`, `1024px`, or `1440px`. Phone, email, and social links remain visible at tablet widths; search is restored at `lg` and above. |
| ISS-023 | Route-pair mapping for cross-domain language switch is not defined. | Open | A future language switcher requires explicit EN/RO route pairs and fallback behavior for pages without equivalents. |
