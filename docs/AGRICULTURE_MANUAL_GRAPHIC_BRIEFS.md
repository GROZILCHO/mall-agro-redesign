# Agriculture Manual Graphic Briefs

## Status

This is a planning brief only.

No manual graphics are approved yet. Do not add files to `public/`, do not wire image paths into `imageSlots`, and do not treat this document as final visual approval. Final graphics must be manually designed, reviewed, approved, optimized, and implemented through a separate scoped task.

## Purpose

The Agriculture visual draft review rejected the AI-generated `agriculture-equipment-direction` draft and recommended treating `agriculture-inquiry-workflow` as a manual graphic direction.

These two assets carry higher communication and claim risk than simple contextual photography. Manual graphics should keep the page explanatory and B2B-focused without implying product inventory, technical specifications, distributor status, or guaranteed process outcomes.

## Shared Design Rules

- Use a clean B2B industrial/agricultural visual language.
- Keep graphics simple enough to read at mobile sizes.
- Use restrained green, yellow, white, and warm-neutral tones compatible with the Mall Agro direction.
- Avoid fake UI, fake labels, decorative clutter, and product-list styling.
- Do not include logos, brand marks, certifications, technical specs, model names, or capacity values.
- Treat text inside the final raster image as forbidden unless a later design task explicitly approves editable/vector text handling.

## agriculture-equipment-direction

| Field | Requirement |
|---|---|
| Asset name | `agriculture-equipment-direction` |
| Target slot | `equipmentDirection` |
| Export filename | `agriculture-equipment-direction.webp` |
| Approval status | Pending |

### Why AI Photo Was Rejected

The AI-generated photo direction read too much like inventory or product availability. It also carried higher claim risk because equipment lineups can imply stock, specific models, supplier relationships, or product capability.

### Graphic Type

Manual abstract equipment/workflow direction graphic.

Preferred format:

- simplified process or cluster diagram;
- no photorealistic machinery lineup;
- no product grid;
- no exact product silhouettes that imply a specific model.

### Content Structure

The graphic should communicate a path from general agriculture need to equipment discussion:

1. operating context;
2. material or workflow need;
3. equipment direction;
4. inquiry discussion.

Do not turn this into a detailed technical flowchart.

### Visual Style Direction

- premium but restrained;
- diagrammatic, not decorative;
- agricultural/industrial feel through shapes, linework, and palette;
- clear hierarchy with generous whitespace;
- compatible with the current category page card/panel style.

### Layout Notes

- horizontal or balanced rectangular composition;
- 3-4 main visual groups maximum;
- simple connectors or directional lines allowed;
- keep the visual readable when cropped into the current equipment-direction slot;
- avoid dense diagrams.

### Typography Notes

Avoid embedded text in the exported image.

If labels are needed later, prefer rendering text in HTML near the image rather than baking labels into the asset.

### Icon / Shape Guidance

Acceptable:

- simple equipment-neutral shapes;
- field/workflow blocks;
- material-flow arrows;
- abstract implement silhouettes;
- circular or rectangular process nodes.

Avoid:

- exact tractor/combine/product silhouettes tied to a specific model;
- detailed machine renderings;
- icons copied from competitor or supplier materials;
- dashboard or UI-like elements.

### Color Constraints

- use Mall Agro-compatible greens and yellows sparingly;
- use warm neutrals and white for base areas;
- avoid high-saturation neon or futuristic gradients;
- avoid competitor-identifying color schemes.

### Responsive / Crop Notes

- center the main graphic structure;
- avoid placing critical nodes at edges;
- maintain broad shapes that remain legible on mobile;
- do not rely on fine line detail.

### Forbidden Elements

- product inventory rows;
- model names;
- capacity numbers;
- technical specs;
- stock labels;
- certification badges;
- distributor-style marks;
- competitor logos or colors as focal point;
- fake UI labels;
- photorealistic product lineup.

### Claim-Safety Notes

The graphic must not imply:

- Mall Agro has stock available;
- Mall Agro is an official distributor;
- specific products are available;
- a technical configuration is approved;
- a guaranteed workflow or performance outcome exists.

### Approval Criteria

- reads as equipment/workflow direction, not product inventory;
- no text baked into the image;
- no brand or claim risk;
- mobile crop remains legible;
- visually supports the Agriculture category page;
- approved before export and implementation.

## agriculture-inquiry-workflow

| Field | Requirement |
|---|---|
| Asset name | `agriculture-inquiry-workflow` |
| Target slot | `workflow` |
| Export filename | `agriculture-inquiry-workflow.webp` |
| Approval status | Pending |

### Why AI Draft Was Downgraded

The AI draft was best treated as direction only. Inquiry workflow is explanatory and benefits from deliberate structure. AI-generated process graphics can introduce fake UI, unreadable labels, decorative shapes, or misleading process implications.

### Graphic Type

Manual inquiry workflow graphic.

Preferred format:

- simple 3-4 step visual sequence;
- abstract process graphic;
- no embedded text;
- no fake dashboard or UI.

### Content Structure

The graphic should support the current inquiry workflow concept:

1. identify category/application;
2. describe workflow or material context;
3. clarify equipment direction;
4. start project inquiry.

Keep the graphic generic and supportive. The actual explanatory wording should remain in page copy.

### Visual Style Direction

- calm, practical, and B2B;
- clear process flow;
- restrained linework and simple shapes;
- not decorative-only;
- consistent with the Agriculture page visual panels.

### Layout Notes

- horizontal sequence preferred for desktop;
- stacked or centered structure must remain understandable on mobile crop;
- use simple connectors between steps;
- avoid complex branching.

### Typography Notes

Do not bake text into the graphic.

If labels are required in a future implementation, render them in accessible HTML rather than inside the image.

### Icon / Shape Guidance

Acceptable:

- category node;
- workflow/material node;
- equipment-direction node;
- inquiry/message node;
- simple arrows or connectors.

Avoid:

- fake forms;
- fake dashboards;
- fake charts;
- unreadable microtext;
- icons implying certification, partnership, or guaranteed process.

### Color Constraints

- use warm-neutral base;
- use green and yellow accents to indicate flow;
- keep contrast accessible;
- avoid glossy tech gradients and futuristic interface colors.

### Responsive / Crop Notes

- graphic should remain meaningful at mobile width;
- major shapes should be large and centered;
- avoid details that disappear below tablet width;
- leave safe padding around the flow.

### Forbidden Elements

- readable text inside the image;
- fake UI screens;
- dashboards;
- certification marks;
- distributor badges;
- exact process guarantees;
- decorative abstract art with no workflow meaning;
- stock-photo people;
- machinery brand marks.

### Claim-Safety Notes

The graphic must not imply:

- a guaranteed response process;
- official consulting process certification;
- exact service timeline;
- formal partnership workflow;
- performance or project outcome guarantee.

### Approval Criteria

- supports inquiry workflow clearly;
- no embedded text or fake UI;
- no certification or process guarantee implication;
- readable as a mobile crop;
- visually consistent with the Agriculture category page;
- approved before export and implementation.

## Review And Approval Gate

Before either graphic is created, added, or wired:

- [ ] Manual graphic direction approved.
- [ ] Layout sketch reviewed.
- [ ] Claim risk reviewed.
- [ ] Mobile crop reviewed.
- [ ] Export filename approved.
- [ ] No source or public asset changes made outside a scoped implementation task.

## Next Implementation Task After Approval

Recommended next task:

```txt
Create Manual Draft Graphics For Agriculture Direction And Inquiry Workflow
```

That future task may create visual draft files only if explicitly approved and should still avoid wiring paths into source until final graphic approval.
