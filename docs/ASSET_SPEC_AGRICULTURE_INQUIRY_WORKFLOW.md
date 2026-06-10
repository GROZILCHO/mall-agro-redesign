# Asset Spec: Agriculture Inquiry Workflow

## Status

This is a documentation-only optimization and export specification.

The `agriculture-inquiry-workflow` draft has been marked approved for optimization, but this document does not approve source implementation. Do not add files to `public/`, do not wire paths into `imageSlots`, and do not modify source until a separate implementation task is approved.

## Asset Identity

| Field | Specification |
|---|---|
| Asset name | `agriculture-inquiry-workflow` |
| Target slot | `workflow` |
| Intended page location | Agriculture category page inquiry workflow section at `/products/agriculture` |
| Planned final filename | `agriculture-inquiry-workflow.webp` |

## Export Specification

| Field | Specification |
|---|---|
| Primary format | `.webp` |
| Fallback format | `.png` only if WebP output has unacceptable visual artifacts |
| Target dimensions | Landscape export suitable for the current workflow visual panel; recommended working export around `1600x900` if the final crop supports it |
| Desktop crop dimensions | Wide landscape crop, approximately `16:9` or similar, with centered graphic structure |
| Mobile crop dimensions | Center-safe crop from the same source; avoid relying on edge detail; if separate crop is needed, use a narrower centered crop around `4:3` or `1:1` |
| File size target | Prefer under `180 KB` for WebP; acceptable upper review limit `250 KB` if visual quality requires it |

Exact dimensions should be confirmed during implementation against the rendered slot dimensions. Do not create files in this task.

## Optimization Rules

- Use lossy WebP with enough quality to preserve clean line edges and flat color areas.
- Avoid excessive compression that causes banding, muddy linework, or jagged connectors.
- Keep edges crisp but not oversharpened.
- Preserve contrast between warm-neutral background, green linework, and yellow accents.
- Do not add text, letters, numbers, labels, fake UI, forms, dashboards, or microtext.
- Do not add logos, brand marks, certification badges, distributor marks, or approval symbols.
- Do not introduce checkmarks, handshake symbols, seals, ribbons, or process-guarantee cues during optimization.
- Keep the graphic simple and readable at mobile size.

## Responsive Usage

### Desktop

- Use the full landscape composition.
- Keep the workflow sequence centered in the panel.
- Preserve whitespace around the graphic so it does not feel like a dense diagram.

### Tablet

- Use the same landscape asset if the central structure remains legible.
- Check that connectors and node shapes remain clear without text.
- Avoid cropping important nodes at the edges.

### Mobile

- Use a centered crop or scaled-down version where the major shapes remain recognizable.
- Do not rely on fine lines, small icons, or edge details.
- If mobile readability is poor, create a separate approved mobile crop in a later implementation task.

## Accessibility

Proposed alt-text direction:

```txt
Abstract workflow graphic showing agriculture inquiry steps from category context to project discussion.
```

Language note:

- English alt text is suitable for the current English Agriculture page.
- Romanian alt text must be created separately before this asset is used on a Romanian page.
- Alt text should describe the graphic purpose without implying guaranteed process outcomes.

## Approval Gates

Before implementation:

- [ ] Visual QA confirms the graphic remains neutral, B2B, and claim-safe.
- [ ] Crop QA confirms desktop, tablet, and mobile readability.
- [ ] Performance QA confirms WebP size target is acceptable.
- [ ] Accessibility QA confirms English alt text is appropriate.
- [ ] Brand QA confirms no logos, competitor marks, certification symbols, or approval cues.
- [ ] Implementation approval confirms the file may be added to `public/` and wired into `imageSlots`.

## Next Step

Recommended next task:

```txt
Optimize Agriculture Inquiry Workflow Draft For WebP Review
```

That future task may export image files only if explicitly approved. It should still avoid source wiring until final implementation approval.
