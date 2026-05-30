# Mall Agro Decisions Log

| ID | Decision | Date | Status | Notes |
|---|---|---|---|---|
| DEC-001 | Keep the existing Next.js App Router project instead of converting to Vite. | 2026-05-29 | Draft | Project already uses Next.js App Router. |
| DEC-002 | Redesign as a B2B product catalog, not a WooCommerce-style shop. | 2026-05-29 | Draft | Focus on clear categories and qualified inquiries. |
| DEC-003 | Use three main product categories. | 2026-05-29 | Draft | Agriculture; Grain Processing / Grain Handling; Food Industry Equipment. |
| DEC-004 | Exclude seed products from the new catalog. | 2026-05-29 | Draft | Seed products are out of scope unless explicitly re-approved. |
| DEC-005 | Use fully localized domain-specific slugs and SEO metadata. | 2026-05-29 | Draft | No English slugs on Romanian domain unless explicitly approved. |
| DEC-006 | Treat the old WooCommerce site as a content source, not a structure source. | 2026-05-29 | Draft | Product facts may be reviewed, but taxonomy must not be imported. |
| DEC-007 | Use domain-based localization architecture with shared internal content identifiers and separate English/Romanian route, content, metadata, Open Graph, alt text, and slug configs. | 2026-05-29 | Approved | mallagro.com serves English URLs/content; mallagro.ro serves Romanian URLs/content. Internal category IDs remain shared: agriculture, grain-processing-handling, food-industry-equipment. |
| DEC-008 | Approve the current Mall Agro design-system reference as the visual direction, but not as the final implementation source of truth. | 2026-05-29 | Approved | The reference may guide future visual work, category-card direction, CTA mood, palette direction, and general layout language. Final Tailwind tokens, typography scale, spacing scale, button implementation, card component, icon strategy, and asset/performance strategy still require separate scoped tasks. |
| DEC-009 | Temporarily noindex English category placeholder pages until final category content is approved. | 2026-05-30 | Approved | The English category routes `/products/agriculture`, `/products/grain-processing`, and `/products/food-industry-equipment` are currently placeholder landing pages. They should remain accessible to users but should not be treated as final indexable SEO pages until meaningful category content is approved and implemented. |
