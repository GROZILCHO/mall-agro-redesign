# Mall Agro Current Status

## Current Phase

Project Setup / Post-Audit Planning

## Current State

Documentation bootstrap baseline is complete. The existing early Next.js App Router project has completed its initial source audit. Architecture decision DEC-007 is approved. A localized content/config foundation has been added. Design direction decision DEC-008 is approved at reference level. The English homepage working B2B baseline is implemented and accepted as a working baseline.

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
- Homepage baseline now includes Header, Hero, category-card section, refined B2B content sections, and Footer.
- English homepage working B2B baseline is implemented and accepted as a working baseline.
- Hero uses conservative config-driven B2B catalog copy from `src/lib/content/hero.js`.
- Old unsupported Hero claims have been removed: `Expert Solutions`, `over 10 years`, and `tailored machinery and automation solutions`.
- Hero primary CTA points to `/#categories`.
- Homepage category section has `id="categories"`.
- Homepage category cards are implemented and committed.
- Category cards use English/default-locale data from `src/lib/content/categories.js`.
- Refined English B2B homepage sections render after category cards from `src/lib/content/homepage.js` through `HomepageContentSections.js`.
- `/quote` placeholder route exists, returns `200`, and is temporary `noindex`.
- Navbar responsive behavior at `768px` and `1024px` has been corrected by using the mobile/tablet menu below `xl`.
- Navbar logo `next/image` legacy props are fixed and committed.
- English rich category pages baseline is implemented for `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment`.
- Local browser QA confirms the three English category routes return `200`, render rich category layouts, show no broken images, and have no horizontal overflow at tested viewports.
- Homepage category cards now link to existing English rich category routes instead of 404 pages.
- These are working category page v1 baselines, not final indexable SEO category pages.
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
- These English category pages remain accessible to users but are still temporary `noindex` until final content/SEO approval.
- The homepage/root English metadata baseline remains active.
- Open Graph, canonical, sitemap, robots, hreflang, and structured data remain deferred.
- Romanian homepage/root behavior, full Romanian navigation/header localization, `html lang="ro"` behavior, and SEO runtime remain separate future tasks.
- Manual visual review accepted the English homepage as a working B2B baseline.
- The homepage is not final visual design.
- Hero media/background strategy remains future work.
- Mobile Hero is usable but may need future refinement.
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
- SEO runtime remains deferred.
- Romanian homepage/root behavior and full Romanian shared navigation/header localization remain deferred.
- Latest stable implementation baseline includes rich English category pages for Agriculture, Grain Processing / Grain Handling, and Food Industry Equipment.
- After killing stale Node processes, deleting `.next`, and starting one clean dev server, the homepage route `/` was confirmed working with `200`.
- `/products/agriculture` was confirmed working and uses the rich Agriculture category page with explicit image-slot architecture.
- `/quote` was confirmed working with `200`.
- `/products/grain-processing` was confirmed working and uses a rich Grain Processing / Grain Handling category page v1 with all image slots currently `asset: null`.
- `/products/food-industry-equipment` was confirmed working and uses a rich Food Industry Equipment category page v1 with a hero visual.
- Romanian category routes remain placeholders.
- Agriculture has v1 content and implemented category visuals.
- Food Industry has v1 content and the hero visual `food-industry-hero-production-process.webp`.
- Grain Processing has v1 content but no approved visual assets yet.
- `/products/agriculture` remains temporary `noindex`; SEO runtime remains deferred.
- Temporary `noindex` remains on all three English category pages.
- `npm.cmd run build` passed for the English category baseline. Non-blocking warnings remain: shared `<img>` warnings in `CategoryLandingPage.js` and stale Browserslist/caniuse-lite data.
- The attempted Agriculture mobile overflow/readability fix was not committed and must not be treated as accepted.
- Agriculture mobile 375px overflow/readability remains a separate controlled follow-up.
- Mobile menu concerns remain observation-only unless reproduced on a clean single dev server.

## Current Constraints

- Do not wire localization config into UI before a source audit of the new config.
- Do not run build unless a scoped validation task explicitly requires it.
- Do not run `npm install` at this phase.
- Do not modify `.next`.
