# Mall Agro Next Actions

1. Add missing category-card content fields to category config in a narrow implementation task.
2. Audit the updated category config before UI wiring.
3. Then implement minimal homepage category cards.
4. Do not implement category cards before card-specific content fields are added or explicitly deferred.
5. Keep token cleanup, icon strategy, and asset performance as separate tasks.
6. Decide whether hard-coded visual values should be normalized into Tailwind tokens in a later design-token task.
7. Continue controlled localization/domain tasks when their scope does not require visual redesign.
8. Later: run a separate SEO metadata/canonical/sitemap/hreflang task.

## Recommended Immediate Next Task

Add missing category-card content fields to `src/lib/content/categories.js` only, with no UI changes.
