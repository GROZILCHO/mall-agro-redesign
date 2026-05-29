# Mall Agro Design System

## Current Classification

The current Mall Agro design system remains classified as a partial draft/reference, not an approved final source of truth.

DEC-008 approves the current Mall Agro design-system reference as the visual direction/reference for future work. This approval does not make the current tokens, components, layouts, or assets final implementation rules.

## Approved Visual Direction

The current Mall Agro design-system reference is approved as the visual direction/reference for future work.

This approval covers general visual direction only. It may guide future visual tasks, category-card direction, CTA mood, green/yellow/warm-neutral palette direction, clean B2B catalog feel, agricultural/industrial iconographic direction, and overall layout language.

It does not approve direct implementation of all values, tokens, layouts, or assets.

It does not authorize immediate token cleanup, component styling changes, category-card implementation, or asset changes without a separate implementation task.

## Known Design-System Inputs

Current design-related inputs include:

- `tailwind.config.js`
- `src/app/globals.css`
- existing layout components under `src/app/components/`
- Mall Agro logo assets in `public/`
- hero video in `public/`
- icon assets in `public/`
- `public/Design System.jpg`
- source design assets such as `.ai` files in `public/`, if present

These inputs are useful audit material. They are not automatically approved final design rules.

## Reference Asset Status

`public/Design System.jpg` is a visual reference/export.

It is not currently used by code.

It is approved as a visual direction reference under DEC-008.

It is not approved as the final implementation source of truth.

It should not be treated as a runtime production asset unless explicitly approved.

## Current Token Observations

Early Tailwind tokens exist for:

- colors
- typography scale
- font families
- button padding
- button radius
- shadows
- selected viewport-height utilities

Typography appears partly defined in Tailwind and global CSS component classes.

Spacing and layout use a mix of Tailwind tokens and hard-coded utility values.

## Preserve Until Approved

Preserve the following until a separate approval or implementation task says otherwise:

- existing Tailwind tokens
- existing global CSS classes
- existing header/navbar/hero/footer visual structure
- logo assets
- hero video
- icon assets
- current button classes
- current typography classes

## Do Not Change Yet

Future Codex tasks must not change the following without a dedicated design-system implementation task:

- color palette
- typography scale
- font loading strategy
- spacing scale
- button styling
- card styling
- shadows
- border radius
- icon strategy
- hero video/image strategy
- responsive layout rules

## Design Blockers

The design-system audit identified these blockers for final implementation:

- final color palette is not approved
- typography system is not approved
- spacing/layout scale is not approved
- button rules are partial and inconsistent
- card rules are missing
- component specs are missing
- logo/icon strategy is unclear
- font strategy is unclear
- hero video is large and needs performance review
- final use of `Design System.jpg` as an implementation source or runtime asset is not approved

## Approval Checklist

Rosen / MindGrid Studio should approve the following before final design implementation:

- [x] Approve whether `Design System.jpg` is the visual direction.
- [ ] Approve final color palette.
- [ ] Approve typography system and font strategy.
- [ ] Approve spacing/layout scale.
- [ ] Approve button styles.
- [ ] Approve card component pattern.
- [ ] Approve section layout rules.
- [ ] Approve icon strategy.
- [ ] Approve image/video usage strategy.
- [ ] Approve whether hard-coded component values should be migrated to Tailwind tokens.

## Category Card Readiness

Category content config is structurally ready.

Category cards are not visually approved yet.

Category cards should wait until card pattern, spacing, hover state, image rules, and responsive behavior are approved.

## Category Card Pattern - Draft Implementation Scope

This is a draft implementation scope, not a completed source-code implementation.

The intended category card pattern applies to the three approved categories:

- Agriculture
- Grain Processing / Grain Handling
- Food Industry Equipment

Romanian labels, routes, alt text, and CTA copy must remain controlled by localized content config. Do not duplicate localized category copy manually in UI components.

### Card Content Requirements

Each category card should eventually have:

- stable category ID
- localized title
- localized short label
- localized short card description
- localized route
- localized CTA label
- icon or image reference
- localized alt text
- display order

Fields that already exist in `src/lib/content/categories.js`:

- `id`
- `title`
- `shortLabel`
- `slug`
- `route`
- `seoTitle`
- `seoDescription`
- `openGraphTitle`
- `openGraphDescription`
- `altText`

Fields that are missing or not yet approved:

- `cardDescription`
- `cardCtaLabel`
- `icon`
- `image`
- `displayOrder`
- `visualVariant`

Missing fields should not be invented inside UI components. Add approved card-specific fields to category config before implementing the homepage card section, unless a future task explicitly scopes a minimal implementation that uses only existing fields.

### Card Visual Structure

The intended card structure is:

- card container
- optional icon or image area
- category title
- short supporting text / card description
- CTA link or button

The entire card may link to the category route only if accessibility is handled properly. The CTA must use the localized route from config.

Cards should follow the approved DEC-008 visual direction:

- clean B2B catalog look
- green/yellow/warm-neutral palette direction
- restrained industrial/agricultural tone
- generous spacing
- clear hierarchy
- no WooCommerce/shop-style product grid behavior

Category cards are entry points to the simplified catalog, not product/shop cards.

### Token Usage Scope

The first category-card implementation may reuse these existing values/classes unless a future audit says otherwise:

- `bg-gentle`
- `bg-white`
- `text-menu`
- `text-primary`
- `text-accent`
- `border-neutral`
- `shadow` or an existing soft shadow if already available
- `rounded` or `rounded-btn` only if visually suitable
- responsive typography classes where appropriate
- `.button`, `.button-sm`, and `.button-md` where CTA is needed

The first category-card implementation should avoid:

- new Tailwind theme tokens
- new global CSS classes
- hard-coded hex colors
- large spacing inventions such as `px-[100px]`
- unapproved custom shadows
- unapproved font changes
- unapproved hover animations

### Responsive Layout Direction

A first safe responsive layout direction is:

- mobile: one card per row
- tablet: two cards per row if space allows
- desktop: three cards per row
- cards should have equal visual weight
- no complex masonry behavior
- no slider or carousel in the first implementation

### Icon/Image Strategy For First Card Task

The icon strategy is not fully resolved. Use a conservative first approach.

Preferred first task options:

1. Implement cards without icons/images first.
2. Use existing public SVG icons only if explicitly approved in the implementation task.

The first category-card task should not mix public SVGs and inline `Icon.js` icons without a separate icon strategy decision.

Potential public SVG candidates, listed as candidates only and not approved final assets:

- `icon-tractor.svg`
- `icon-grain-processing.svg`
- `icon-food-processing.svg`

### Content Boundaries

- Do not use old WooCommerce taxonomy.
- Do not import seed products.
- Do not invent unsupported business claims.
- Use draft-neutral copy only if the implementation task explicitly allows adding `cardDescription`.
- Category cards are entry points to the simplified catalog, not product/shop cards.

### First Implementation Boundary

Future implementation should likely follow one of these paths:

- Option A: add missing category-card content fields to `categories.js`, no UI.
- Option B: implement a minimal homepage category-card section using only existing fields, no icons/images, and no new tokens.
- Option C: define and approve icon usage first, then implement cards.

Recommended safest option: Option A first. Add missing card-specific content fields to `src/lib/content/categories.js`, audit the updated config, then implement the UI section in a later task.

## Next Recommended Design Step

The next design-related step should be one of:

1. A narrow content-config implementation task to add missing category-card fields.
2. A source audit of the updated category config.
3. A minimal homepage category-card implementation after config audit.
4. A narrow design-token cleanup task after final token approval.

Do not implement category cards or visual redesign before card pattern and layout scope are approved.
