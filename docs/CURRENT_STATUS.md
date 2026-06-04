# Mall Agro Current Status

## Current Phase

Project Setup / Post-Audit Planning

## Current State

Documentation bootstrap baseline is complete. The existing early Next.js App Router project has completed its initial source audit. Architecture decision DEC-007 is approved. A localized content/config foundation has been added. Design direction decision DEC-008 is approved at reference level. The homepage category-card baseline is implemented.

## Notes

- The project is early.
- Git repository is clean on `main`.
- GitHub remote is configured as `origin https://github.com/GROZILCHO/mall-agro-redesign.git`.
- Next.js source audit is complete.
- Lint passed during audit.
- Build was not run during audit because it writes to `.next`, which is forbidden at this phase.
- Existing assets and components appear useful and should be preserved until implementation is scoped.
- Browser-visible homepage baseline is established under workflow control.
- Domain localization architecture is approved: domain-based localization with shared internal IDs and separate localized configs.
- Domain population strategy audit is complete.
- `mallagro.com` is the English version and `mallagro.ro` is the Romanian version. Future work must use domain-based language serving, not `/ro` prefixes or language redirects.
- Current runtime supports the English baseline and Romanian category placeholder routes only.
- Romanian config data exists, and Romanian category placeholder routes are implemented; Romanian homepage/root behavior and broader localized shared UI remain pending.
- Deployment model remains unresolved: use one deployment for both domains or separate deployments from the same repository.
- Deployment-model audit is complete.
- `docs/DEPLOYMENT_GUIDE.md` captures the two candidate deployment models and required owner decision checklist.
- Broader Romanian source implementation remains blocked pending deployment requirements and owner approval.
- Romanian homepage/root behavior and shared UI localization are not ready until deployment planning and localized shared UI content are clarified.
- DEC-010 is approved: use separate domain-specific language deployments with future cross-domain equivalent-page language switching.
- Cross-domain language switching is intended to link to equivalent pages on the other domain where explicit route pairs exist.
- Cross-domain language URL helper exists in `src/lib/routes/languageUrls.js`.
- `LanguageSwitcher` exists and `Navbar` has minimal language switcher integration.
- The language switcher uses approved route pairs only and returns no output for unknown or unpaired routes.
- The language switcher does not fallback to the homepage, guessed URLs, section landing pages, or unrelated content.
- Romanian category placeholder routes have been implemented for `/produse/agricultura`, `/produse/procesarea-cerealelor`, and `/produse/echipamente-industria-alimentara`.
- The Romanian category placeholders use the shared category placeholder renderer with `locale="ro"` and temporary `noindex` metadata.
- No Romanian homepage/root behavior has been implemented.
- Route-pair config foundation is implemented in `src/lib/routes/routePairs.js`.
- The route-pair config currently covers the homepage `/` ↔ `/` pair and the three approved category pairs.
- The route-pair config is data-only and uses relative paths.
- The route-pair config does not implement redirects, middleware, or SEO runtime behavior.
- Localized content/config foundation exists under `src/lib/`.
- Homepage baseline now includes Header, Hero, category-card section, and Footer.
- Homepage category cards are implemented and committed.
- Category cards use English/default-locale data from `src/lib/content/categories.js`.
- Navbar logo `next/image` legacy props are fixed and committed.
- English category placeholder pages are implemented and pushed.
- Local browser QA confirms `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment` open normally.
- Homepage category cards now link to existing English placeholder routes instead of 404 pages.
- These are placeholder category landing pages, not final category pages.
- No product detail pages exist yet.
- Romanian category routes are implemented as temporary placeholder pages, not final Romanian category content.
- No product migration is approved.
- Design-system source audit is complete.
- Design system is classified as partial draft/reference.
- Design-system direction decision DEC-008 is approved.
- Visual direction is approved at reference level.
- Final design implementation details remain pending.
- Category-card pattern and minimal homepage section are implemented.
- No design-token changes are approved.
- No Romanian homepage/root behavior, full Romanian navigation/header localization, or domain detection exists yet.
- Root placeholder metadata has been replaced with a conservative English metadata baseline.
- `html lang="en"` remains a temporary English baseline.
- Route-level metadata is still pending.
- SEO route-level metadata readiness audit is complete.
- DEC-009 is approved: English category placeholder pages should temporarily use `noindex`.
- Temporary category-page `noindex` metadata is implemented for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`.
- These English category placeholder pages remain accessible to users but are not final indexable SEO category pages.
- The homepage/root English metadata baseline remains active.
- Open Graph, canonical, sitemap, robots, hreflang, and structured data remain deferred.
- Romanian homepage/root behavior, full Romanian navigation/header localization, `html lang="ro"` behavior, and SEO runtime remain separate future tasks.
- Manual browser visual/responsive QA is still pending.
- Hydration mismatch with `data-tag-assistant-*` attributes is caused by Google Tag Assistant/browser-extension DOM mutation, not project code.
- Category SVG icons now use Next.js `<Image />` in homepage category cards and the English category placeholder page component.
- The previous category `<img>` lint warnings are resolved.
- Public SVG assets and config-driven icon paths remain unchanged.
- `Icon.js` remains untouched.
- Lint now passes without ESLint warnings or errors.
- TopBar tablet horizontal overflow is fixed with changes limited to `src/app/components/TopBar.js`.
- Browser QA confirms no horizontal overflow at `375px`, `768px`, `1024px`, and `1440px`.
- Phone, email, and social links remain visible at tablet widths.
- TopBar search is hidden below `lg` and restored at `lg` and above.
- No header or navbar layout redesign was done.
- Future product/content expansion remains deferred until approval.

## Current Constraints

- Do not wire localization config into UI before a source audit of the new config.
- Do not run build at this phase.
- Do not run `npm install` at this phase.
- Do not modify `.next`.
