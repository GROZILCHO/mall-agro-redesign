# Agriculture Visual Draft Review

## Status

This is a documentation-only review record for preview Agriculture category visual drafts.

No visual draft is approved for implementation by this document. No files should be added to `public/`, no source files should be modified, and no image paths should be wired into `imageSlots` until manual approval and a separate implementation task.

## Purpose

Record the initial review status of the six preview-only Agriculture visual drafts generated from the approved prompt directions.

The review separates visual exploration from implementation so the project can reject risky drafts before assets enter the repository.

## Review Scope

Reviewed asset slots:

- `agriculture-hero-field-operations`
- `agriculture-context-field-workflows`
- `agriculture-context-preparation-handling`
- `agriculture-context-project-inquiry`
- `agriculture-equipment-direction`
- `agriculture-inquiry-workflow`

Review focus:

- realism;
- machinery plausibility;
- crop quality;
- brand/logo safety;
- claim risk;
- stock-photo or ecommerce feel;
- suitability for the Agriculture category page.

## Repository Boundary Confirmation

All preview drafts were generated outside the repository.

No files were added to `public/`.

No source files were changed.

No image paths were wired into `imageSlots`.

## Draft Review Table

| Asset name | Draft source / method | Approval status | Notes | Final filename if approved | Next action |
|---|---|---|---|---|---|
| `agriculture-hero-field-operations` | AI-generated preview from approved prompt direction | needs revision | Strong category fit and useful hero direction. Needs manual check for machinery plausibility, crop, and any accidental brand-like visual cues. | `agriculture-hero-field-operations.webp` | Review/revise |
| `agriculture-context-field-workflows` | AI-generated preview from approved prompt direction | needs revision | Good field-workflow direction. Needs review for realistic equipment geometry and avoidance of generic farming-stock feel. | `agriculture-context-field-workflows.webp` | Review/revise |
| `agriculture-context-preparation-handling` | AI-generated preview from approved prompt direction | needs revision | Potentially usable, but has category-overlap risk with grain handling. Needs stricter review so it stays Agriculture-specific. | `agriculture-context-preparation-handling.webp` | Review/revise or replace |
| `agriculture-context-project-inquiry` | AI-generated preview from approved prompt direction | needs revision | Communicates inquiry/planning context. Needs brand/logo and stock-photo review; avoid any implication of partnership or formal consulting guarantee. | `agriculture-context-project-inquiry.webp` | Review/revise |
| `agriculture-equipment-direction` | AI-generated preview from approved prompt direction | rejected | Reads too much like inventory/product availability and carries higher claim risk. Recommend replacing with a cleaner manual diagram or less product-list-like visual. | none | Replace with manual graphic direction |
| `agriculture-inquiry-workflow` | AI-generated preview from approved prompt direction | needs revision | Best treated as a direction for a manual graphic. Needs review to ensure no fake UI/text and that it supports workflow rather than becoming decorative. | `agriculture-inquiry-workflow.webp` | Convert to manual workflow graphic direction |

## PM Recommendation

- Do not implement assets yet.
- Replace `agriculture-equipment-direction`.
- Treat `agriculture-inquiry-workflow` as a manual graphic direction.
- Continue manual visual review for the remaining draft images.
- Only add optimized `.webp` files after manual approval.

## Next Task

Recommended next task:

```txt
Prepare Manual Graphic Briefs For Agriculture Direction And Inquiry Workflow
```
