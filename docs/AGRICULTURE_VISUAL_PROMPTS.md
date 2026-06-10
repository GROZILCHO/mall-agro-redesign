# Agriculture Visual Prompts

## Status

This is a planning document for draft AI/image-generation prompts only.

No image assets are approved by this document. Do not add files to `public/`, do not wire image paths into source, and do not treat these prompts as final visual approval. All outputs require manual review against `docs/ASSET_BRIEF_AGRICULTURE.md` before any asset implementation task.

## Shared Prompt Rules

All draft prompts must follow these rules:

- realistic B2B industrial/agricultural style;
- clean Mall Agro-compatible green, yellow, and warm-neutral palette;
- no fake logos, brand marks, readable text, signage, UI screens, or license plates;
- no competitor brand imitation;
- no impossible or distorted machinery;
- no certification, distributor, partnership, stock, performance, or technical-spec implication;
- no over-futuristic machinery;
- no generic stock-photo look;
- no old WooCommerce imagery unless explicitly re-approved.

## agriculture-hero-field-operations

| Field | Requirement |
|---|---|
| Asset name | `agriculture-hero-field-operations` |
| Target slot | `hero` |
| Intended page usage | Main category hero visual for `/products/agriculture`. |
| Aspect ratio | Wide landscape source with mobile-safe center crop. |
| Visual concept | Realistic agricultural equipment in a field-related operating context, grounded and premium without looking decorative. |

Main prompt:

```txt
Realistic premium B2B agricultural equipment scene in field operations, modern but practical machinery visible in a working agricultural environment, clean industrial composition, warm natural light, green and warm-neutral color mood compatible with an agricultural equipment catalog, equipment and workflow context clearly visible, professional catalog-quality photography style, no people posing, no brand marks, no readable text, no logos.
```

Negative prompt:

```txt
fake logo, readable text, signage, license plate, competitor branding, brand imitation, impossible machinery, distorted wheels, broken equipment geometry, futuristic sci-fi machine, certification badge, distributor claim, performance claim, stock availability implication, product model text, technical specs, smiling stock-photo workers, empty landscape without equipment, old ecommerce product photo, over-polished render.
```

Realism criteria:

- machinery must look physically plausible;
- equipment scale and ground contact must be credible;
- scene must read as agriculture operations, not generic landscape;
- no visible brand identity should be present.

Crop notes:

- keep main equipment subject centered;
- avoid placing key machinery at the far left or right edge;
- mobile crop must still show equipment and operating context.

Brand/claim safety notes:

- do not imply Mall Agro owns, distributes, certifies, stocks, or guarantees the shown equipment;
- avoid recognizable competitor colors, logo placement, or product design as the focus.

Manual review checklist:

- [ ] Equipment is realistic.
- [ ] No logos or readable text.
- [ ] No unsupported claim implied.
- [ ] Works as desktop hero crop.
- [ ] Works as mobile center crop.
- [ ] Does not look like generic stock farming scenery.

## agriculture-context-field-workflows

| Field | Requirement |
|---|---|
| Asset name | `agriculture-context-field-workflows` |
| Target slot | `operatingContexts[0]` |
| Intended page usage | Operating context visual for field workflows. |
| Aspect ratio | Card-friendly landscape or wide rectangular crop. |
| Visual concept | Field workflow with visible agricultural equipment and operational context. |

Main prompt:

```txt
Realistic agricultural field workflow scene with practical equipment in use or positioned for field operations, clear operational context, grounded B2B catalog style, clean composition, natural light, warm-neutral and green color mood, equipment is the visual focus, no staged posing, no logos, no readable text, no brand marks.
```

Negative prompt:

```txt
empty farm landscape, smiling workers looking at camera, fake machinery, distorted equipment, competitor logo, readable labels, signage, product model numbers, certification badge, distributor implication, unrealistic AI-generated mechanical parts, futuristic tractor, stock-photo style, ecommerce product cutout.
```

Realism criteria:

- equipment must be central and believable;
- field context must support workflow understanding;
- avoid scenic-only composition.

Crop notes:

- one clear equipment/workflow focal point;
- must remain understandable in a smaller card area;
- avoid tiny machinery details.

Brand/claim safety notes:

- no specific model, capacity, or performance implication;
- do not show a brand/logo as the reason for credibility.

Manual review checklist:

- [ ] Field workflow is clear.
- [ ] Equipment is visible.
- [ ] No competitor branding.
- [ ] No fake text.
- [ ] Mobile crop remains readable.
- [ ] Does not look decorative-only.

## agriculture-context-preparation-handling

| Field | Requirement |
|---|---|
| Asset name | `agriculture-context-preparation-handling` |
| Target slot | `operatingContexts[1]` |
| Intended page usage | Operating context visual for preparation and handling workflows. |
| Aspect ratio | Card-friendly landscape or medium rectangular crop. |
| Visual concept | Agricultural material preparation, handling, staging, or workflow support context with visible equipment. |

Main prompt:

```txt
Realistic agricultural preparation and handling context, practical equipment and material movement or staging area visible, organized industrial-agricultural workflow, clean B2B catalog photography style, grounded lighting, warm-neutral and green palette, no logos, no readable text, no people posing, no technical labels.
```

Negative prompt:

```txt
grain processing factory if not clearly agricultural, food production line, fake machine, impossible conveyor, unreadable UI text, visible brand logo, competitor identity, certification mark, stock availability claim, capacity numbers, model names, futuristic render, random warehouse with no agriculture context, old WooCommerce product image.
```

Realism criteria:

- process context must be plausible;
- equipment/material relationship must make sense;
- visual should not confuse Agriculture with Grain Processing or Food Industry.

Crop notes:

- center the equipment/process area;
- avoid crowded detail;
- must work as a stacked mobile card.

Brand/claim safety notes:

- no technical-performance implication;
- no visible brand or supplier ownership signal.

Manual review checklist:

- [ ] Agriculture context is clear.
- [ ] Handling/preparation idea is understandable.
- [ ] No category confusion.
- [ ] No fake text or specs.
- [ ] Mobile crop is clean.
- [ ] No unsupported claim.

## agriculture-context-project-inquiry

| Field | Requirement |
|---|---|
| Asset name | `agriculture-context-project-inquiry` |
| Target slot | `operatingContexts[2]` |
| Intended page usage | Operating context visual for project inquiry and discussion framing. |
| Aspect ratio | Card-friendly landscape or medium rectangular crop. |
| Visual concept | Practical equipment review or project planning context related to agricultural equipment, without generic sales imagery. |

Main prompt:

```txt
Realistic B2B agricultural equipment planning context, practical project discussion around equipment or workflow, machinery or operational material visible in the scene, calm professional catalog style, no handshake, no people smiling at camera, no office stock-photo mood, no logos, no readable text, no brand marks, grounded industrial-agricultural palette.
```

Negative prompt:

```txt
business handshake, smiling stock-photo team, generic office meeting, fake charts with readable text, competitor logos, branded machinery as focal point, distributor certificate, partnership implication, guaranteed service claim, unrealistic people, over-polished corporate render, unrelated farm landscape, ecommerce product image.
```

Realism criteria:

- equipment or workflow context must be visible;
- people, if present, must be secondary and natural;
- scene should communicate inquiry preparation, not sales guarantee.

Crop notes:

- do not rely on faces or documents;
- keep equipment/context in the focal area;
- mobile crop must not reduce the image to an unrecognizable meeting scene.

Brand/claim safety notes:

- avoid implying consulting scope, partnership status, distributor status, or guaranteed outcome;
- avoid supplier logos or branded machines as focal point.

Manual review checklist:

- [ ] Inquiry/project context is clear.
- [ ] Not a stock handshake image.
- [ ] Equipment/workflow remains visible.
- [ ] No readable documents or fake UI.
- [ ] No partnership/distributor implication.
- [ ] Mobile crop remains meaningful.

## agriculture-equipment-direction

| Field | Requirement |
|---|---|
| Asset name | `agriculture-equipment-direction` |
| Target slot | `equipmentDirection` |
| Intended page usage | Support the equipment direction section without becoming a product/spec list. |
| Aspect ratio | Wide or medium landscape crop. |
| Visual concept | Structured machinery and workflow direction visual, potentially more diagrammatic than photographic. |

Main prompt:

```txt
Realistic structured visual of agricultural machinery and workflow direction, equipment grouped in a clean industrial-agricultural context, practical B2B catalog composition, no specific model emphasis, no labels, no readable text, no logos, warm-neutral and green palette, clear space and hierarchy, grounded and realistic.
```

Negative prompt:

```txt
model names, technical specification text, capacity numbers, stock label, certification badge, distributor logo, competitor brand mark, impossible machinery, futuristic equipment, schematic with readable labels, fake UI, cluttered parts catalog, ecommerce product grid, over-polished 3D render.
```

Realism criteria:

- equipment should be plausible and not over-specific;
- visual must support direction and inquiry framing;
- avoid appearing as an approved product inventory.

Crop notes:

- preserve broad equipment shapes;
- avoid small labels or tiny details;
- mobile crop should still communicate equipment direction.

Brand/claim safety notes:

- highest claim risk of the asset group;
- avoid any suggestion of exact models, specs, capacities, inventory, or distributor relationship.

Manual review checklist:

- [ ] Does not imply product list or stock.
- [ ] No model/spec/capacity text.
- [ ] Machinery is plausible.
- [ ] No competitor visual identity.
- [ ] Mobile crop is understandable.
- [ ] Works with the current page section.

## agriculture-inquiry-workflow

| Field | Requirement |
|---|---|
| Asset name | `agriculture-inquiry-workflow` |
| Target slot | `workflow` |
| Intended page usage | Support the inquiry workflow section. |
| Aspect ratio | Simple horizontal or compact process graphic crop. |
| Visual concept | Clean process-support visual showing inquiry flow without text embedded in the image. |

Main prompt:

```txt
Clean abstract B2B process graphic for agricultural equipment inquiry workflow, simple connected shapes suggesting sequence and preparation, warm-neutral background with green and yellow accents, no readable text, no logos, no fake UI, no certification marks, minimal and professional, suitable for a catalog landing page.
```

Negative prompt:

```txt
readable text, fake UI labels, dashboard screenshot, logo, certification badge, distributor mark, complex flowchart with tiny text, futuristic interface, stock-photo people, machinery with brand marks, technical specs, performance numbers, decorative-only abstract art.
```

Realism criteria:

- if abstract, it must support the workflow section rather than distract;
- graphic should be simple enough to read on mobile;
- no embedded text should be required.

Crop notes:

- keep shapes large and centered;
- avoid small icons or labels;
- should remain clear in a narrow mobile viewport.

Brand/claim safety notes:

- do not imply a proprietary process, guaranteed service level, or formal certification;
- keep it generic and explanatory.

Manual review checklist:

- [ ] No text inside image.
- [ ] No fake UI.
- [ ] Workflow concept is clear.
- [ ] Mobile-safe.
- [ ] Not decorative-only.
- [ ] Does not imply certification or guaranteed process.

## Final Review Gate

Before any image is generated, sourced, added, or wired:

- [ ] Confirm the asset slot is approved.
- [ ] Confirm generation/source method is approved.
- [ ] Confirm prompt or source list is manually reviewed.
- [ ] Confirm no source or public asset changes are part of this planning task.
- [ ] Confirm final image review will happen before implementation.
