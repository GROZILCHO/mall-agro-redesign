# Mall Agro Next Actions

1. Audit and commit `docs/HOMEPAGE_SECTION_REFINEMENT_MATRIX.md` before using it for implementation.
2. After approval/commit, implement the approved homepage section refinement matrix with exact copy mapping only.
3. Codex must not freely rewrite homepage copy; implementation should preserve approved wording and report any content that does not fit the current component/data structure.
4. Keep visual asset generation deferred; future homepage visual planning must remain claim-safe: no client-identifiable facilities, no readable manufacturer labels, no visible brand logos unless approved, no fake certificates, no stock-photo handshakes, and no exaggerated AI imagery.
5. Plan About page messaging using `docs/BRAND_POSITIONING.md` and `docs/HOMEPAGE_MESSAGING.md` as claim-safety boundaries.
6. Run a content/editorial QA sprint across the three English rich category pages if additional polish is needed.
7. Optionally migrate shared `CategoryLandingPage.js` image rendering from `<img>` to `next/image`.
8. Plan Grain Processing visual asset sourcing separately; the rich Grain Processing page v1 currently has no visual assets.
9. Keep final Hero media/visual refinement separate.
10. Keep final inquiry form/contact flow separate from the temporary `/quote` placeholder.
11. Audit or implement Romanian homepage/root behavior separately.
12. Audit full Header/Navbar localization readiness for the Romanian domain.
13. Keep `/produse` index route implementation separate unless explicitly approved.
14. Keep canonical, hreflang, sitemap, robots, localized metadata rollout, and structured data deferred until route pairs, deployment behavior, and Romanian runtime behavior are stable.
15. Keep future news/content equivalence modeling separate from static category pages.
16. Track Romanian mojibake/display-text audit separately if still present.
17. Confirm hosting provider, DNS/domain control, and CI/CD deployment settings.
18. Decide wrong-language route policy.
19. Plan final Romanian category content separately from the temporary placeholder pages.
20. Keep middleware, rewrites, and language redirects deferred unless separately approved.
21. Keep token cleanup and broader asset performance audit as separate tasks.
22. Continue avoiding product migration and WooCommerce taxonomy import.
23. Keep product template architecture and product import strategy out of scope until separately approved.

## Recommended Immediate Next Task

Audit and commit `docs/HOMEPAGE_SECTION_REFINEMENT_MATRIX.md`. After approval/commit, the next implementation task should map the approved matrix copy exactly into the homepage content files, with no freeform copy rewriting. Visual evidence strategy remains a later follow-up and must avoid client-identifiable facilities, readable manufacturer labels, visible brand logos unless approved, fake certificates, stock-photo handshakes, and exaggerated AI imagery. Product template architecture and product import strategy remain later phases, not immediate work.
