# Mall Agro Design System

## Current Classification

The current Mall Agro design system is classified as a partial draft/reference, not an approved final source of truth.

Do not treat the current tokens, components, or reference assets as final until Rosen / MindGrid Studio explicitly approves the design direction.

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

It is not yet approved as the final implementation source of truth.

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

The design-system audit identified these blockers:

- final color palette is not approved
- typography system is not approved
- spacing/layout scale is not approved
- button rules are partial and inconsistent
- card rules are missing
- component specs are missing
- logo/icon strategy is unclear
- font strategy is unclear
- hero video is large and needs performance review
- `Design System.jpg` status needs human approval

## Approval Checklist

Rosen / MindGrid Studio should approve the following before visual implementation:

- [ ] Approve whether `Design System.jpg` is the visual direction.
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

## Next Recommended Design Step

The next design-related step should be one of:

1. Human approval of `Design System.jpg` as visual direction.
2. A revised design-system brief before implementation.
3. A narrow design-token cleanup task after approval.
4. A card pattern implementation task after token/card approval.

Do not implement category cards or visual redesign before a design-system approval decision is recorded.
