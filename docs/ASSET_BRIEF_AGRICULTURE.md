# Agriculture Category Visual Asset Brief

## Status

This is a planning brief only.

No Agriculture category image assets are approved yet. No files should be added to `public/` until the asset list, source method, visual direction, and final drafts are manually approved. No image paths should be wired into `imageSlots` yet.

The current Agriculture page uses explicit image-slot metadata with `asset: null`. This brief defines what those future assets should be, not the final assets themselves.

## Purpose

The Agriculture category visuals should help both larger B2B industrial/agricultural buyers and smaller agricultural operators or production owners understand the category quickly.

The images should make clear:

- what the Agriculture category covers;
- whether a visitor's equipment need fits the category;
- what kind of project or equipment inquiry can be started from the page.

The page should feel like a practical B2B category entry point, not an ecommerce product grid, not a generic farming brochure, and not a claim-heavy distributor page.

## Current Page Context

The current Agriculture page exists at `/products/agriculture` and remains temporary `noindex`.

Current Agriculture image slots are:

- `hero`
- `operatingContexts`
- `equipmentDirection`
- `workflow`

These slots exist in the content architecture in `src/lib/content/categoryPages.js`, but currently use `asset: null`. No real image files, public paths, or runtime image assets are assigned.

Other English category routes remain placeholders. Romanian category routes remain placeholders. SEO runtime remains deferred.

## Existing Image Slots

The committed page structure uses the following image-slot roles:

- `hero`: high-level category context for agriculture equipment and field-related inquiry.
- `operatingContexts`: three visual/context areas mapped to Agriculture application contexts.
- `equipmentDirection`: support visual for machinery and workflow direction.
- `workflow`: support visual for inquiry workflow and project discussion.

Each slot should remain conservative, realistic, and claim-safe.

## Required Visual Assets

1. `agriculture-hero-field-operations`
   - Purpose: establish Agriculture as a field and operations equipment category.
   - Recommended visual type: realistic agricultural equipment/workflow photo or realistic generated visual.
   - Preferred source method: approved real Mall Agro, Uni Compani, project, or partner-provided photo if rights are clear.
   - Acceptable AI direction: realistic B2B industrial agriculture scene with visible equipment and no readable branding.
   - Required mood: grounded, practical, premium B2B, not decorative.
   - Crop notes: must support a wide desktop crop and a narrower mobile crop.
   - Mobile focal area: equipment and operating context centered, with no critical detail at edges.
   - Risks: fake machinery, competitor branding, generic landscape without equipment.
   - Approval notes: approve only after brand, rights, claim, and mobile-crop review.

2. `agriculture-context-field-workflows`
   - Purpose: show field-related operating workflows.
   - Recommended visual type: field equipment or workflow context with machinery visible.
   - Preferred source method: real approved field/project image.
   - Acceptable AI direction: realistic equipment in an agricultural operating context, no logos, no people posing.
   - Required mood: practical and task-focused.
   - Crop notes: should work in a card-like region.
   - Mobile focal area: one clear equipment/workflow subject.
   - Risks: empty field scenery, unrealistic AI wheels/implements, brand marks.
   - Approval notes: must read as operational context, not scenic farming.

3. `agriculture-context-preparation-handling`
   - Purpose: support preparation, handling, and material/workflow framing.
   - Recommended visual type: equipment, material handling, preparation, or staging context.
   - Preferred source method: real approved machinery or operations photo.
   - Acceptable AI direction: clean equipment/material preparation scene with no technical claims.
   - Required mood: organized, industrial-agricultural, clear.
   - Crop notes: avoid dense small details.
   - Mobile focal area: visible equipment or process area centered.
   - Risks: confusing grain/food-industry overlap, fake machinery, unreadable labels.
   - Approval notes: confirm the visual still belongs to Agriculture and does not imply a specific product capability.

4. `agriculture-context-project-inquiry`
   - Purpose: show that the page supports project discussion and inquiry preparation.
   - Recommended visual type: equipment planning, operator/project context, or neutral workflow review.
   - Preferred source method: company-owned project discussion or equipment review image if available.
   - Acceptable AI direction: realistic B2B planning context around agricultural equipment, no staged stock-photo posing.
   - Required mood: practical, calm, professional.
   - Crop notes: should not depend on faces or documents.
   - Mobile focal area: equipment/context, not people.
   - Risks: generic office handshake, stock-photo people smiling at camera, implied consulting guarantee.
   - Approval notes: use only if it reinforces inquiry framing without unsupported service claims.

5. `agriculture-equipment-direction`
   - Purpose: support the equipment-direction section without listing products or specs.
   - Recommended visual type: equipment grouping, workflow diagram, or realistic machinery context.
   - Preferred source method: approved machinery image or manually designed diagram.
   - Acceptable AI direction: realistic, non-branded equipment/workflow visual with no model text.
   - Required mood: clear, industrial, structured.
   - Crop notes: can be more diagrammatic than the hero.
   - Mobile focal area: broad shapes and workflow, not tiny labels.
   - Risks: implying specific models, capacities, stock availability, or exact technical specs.
   - Approval notes: manual diagram may be safer than AI if technical accuracy is hard to verify.

6. `agriculture-inquiry-workflow`
   - Purpose: support the inquiry workflow section.
   - Recommended visual type: simple process graphic or manually designed workflow illustration.
   - Preferred source method: manual design based on approved page copy.
   - Acceptable AI direction: abstract process graphic only if it contains no fake UI/text and no misleading icons.
   - Required mood: simple, clean, explanatory.
   - Crop notes: must stay readable without small text.
   - Mobile focal area: simple visual hierarchy, no detailed labels.
   - Risks: unreadable fake UI, decorative-only graphic, inaccurate process implication.
   - Approval notes: this is the strongest candidate for manual design instead of AI.

## Slot-by-Slot Brief

### Hero Slot

| Field | Requirement |
|---|---|
| Slot ID | `hero` / `agriculture-hero` |
| Intended file name | `agriculture-hero-field-operations.webp` |
| Visual role | Establish the Agriculture category as a B2B equipment and field-operations entry point. |
| Best asset type | Approved real photo or realistic B2B agriculture equipment visual. |
| Acceptable temporary type | Realistic AI-generated equipment/workflow visual with no logos or readable text. |
| Desktop crop | Wide contextual crop with equipment and operating environment visible. |
| Mobile crop | Subject centered; avoid placing machinery or key context at edges. |
| Must show | Agricultural equipment or field-related workflow context. |
| Must avoid | Empty landscapes, fake machinery, competitor logos, futuristic rendering. |
| Claim risk | Medium |
| Approval status | Pending |

### Operating Context Slot: Field Workflows

| Field | Requirement |
|---|---|
| Slot ID | `operatingContexts[0]` |
| Intended file name | `agriculture-context-field-workflows.webp` |
| Visual role | Show field-related workflows as a practical operating context. |
| Best asset type | Approved field/equipment photo. |
| Acceptable temporary type | Realistic AI field equipment scene. |
| Desktop crop | Card-friendly crop with clear equipment subject. |
| Mobile crop | Single clear focal point; avoid small implements at the edge. |
| Must show | Equipment, workflow, or operational context. |
| Must avoid | Pure scenery, workers posing, fake brands. |
| Claim risk | Medium |
| Approval status | Pending |

### Operating Context Slot: Preparation And Handling

| Field | Requirement |
|---|---|
| Slot ID | `operatingContexts[1]` |
| Intended file name | `agriculture-context-preparation-handling.webp` |
| Visual role | Support preparation, handling, and material/workflow framing. |
| Best asset type | Approved machinery/preparation/handling photo. |
| Acceptable temporary type | Realistic AI preparation or handling visual. |
| Desktop crop | Clear process context without dense detail. |
| Mobile crop | Centered process/equipment subject. |
| Must show | Preparation, handling, staging, or equipment context. |
| Must avoid | Grain/Food category confusion, technical labels, unrealistic AI mechanisms. |
| Claim risk | Medium |
| Approval status | Pending |

### Operating Context Slot: Project Inquiry

| Field | Requirement |
|---|---|
| Slot ID | `operatingContexts[2]` |
| Intended file name | `agriculture-context-project-inquiry.webp` |
| Visual role | Reinforce inquiry planning and project discussion. |
| Best asset type | Approved project/equipment review photo. |
| Acceptable temporary type | Neutral realistic planning context without brand/logos/text. |
| Desktop crop | Human/equipment context may be included, but equipment should remain relevant. |
| Mobile crop | Focus on equipment/context rather than faces or documents. |
| Must show | A practical project or equipment discussion context. |
| Must avoid | Handshakes, stock-photo smiles, sales-team imagery, implied guarantees. |
| Claim risk | Medium-High |
| Approval status | Pending |

### Equipment Direction Slot

| Field | Requirement |
|---|---|
| Slot ID | `equipmentDirection` |
| Intended file name | `agriculture-equipment-direction.webp` |
| Visual role | Support machinery and workflow direction before product-specific discussion. |
| Best asset type | Approved machinery grouping or manually designed workflow graphic. |
| Acceptable temporary type | Realistic AI equipment context or abstract process graphic. |
| Desktop crop | Wide or medium crop with structured visual hierarchy. |
| Mobile crop | Avoid tiny technical detail; maintain broad recognizable shapes. |
| Must show | Equipment direction, workflow grouping, or process framing. |
| Must avoid | Model names, specs, capacities, stock claims, competitor branding. |
| Claim risk | High |
| Approval status | Pending |

### Inquiry Workflow Slot

| Field | Requirement |
|---|---|
| Slot ID | `workflow` / `inquiry-workflow` |
| Intended file name | `agriculture-inquiry-workflow.webp` |
| Visual role | Explain inquiry flow and project preparation visually. |
| Best asset type | Manually designed process graphic. |
| Acceptable temporary type | Simple abstract graphic with no text inside the image. |
| Desktop crop | Horizontal or compact graphic that supports the workflow area. |
| Mobile crop | Simple shapes; no small labels or text dependence. |
| Must show | Flow, sequence, or inquiry preparation concept. |
| Must avoid | Fake UI, unreadable text, decorative-only graphic. |
| Claim risk | Low-Medium |
| Approval status | Pending |

## AI Generation Guidance

Do not generate final prompts in this brief. Use these constraints when a later prompt-generation task is approved.

- All AI visuals must use a realistic B2B industrial/agricultural style.
- Use clean, practical lighting and a Mall Agro-compatible green, yellow, and warm-neutral mood.
- Do not include fake logos, readable labels, signage, UI screens, license plates, or brand marks.
- Do not imitate competitor brands, products, colors, or proprietary imagery.
- Do not generate impossible machinery, distorted equipment, unsafe scenes, or overly futuristic equipment.
- Avoid people posing unnaturally or smiling directly at the camera.
- Do not imply certification, official distributor status, guaranteed performance, stock availability, or technical capability.
- Keep equipment and workflow context visible; avoid decorative backgrounds.

Per visual:

- `agriculture-hero-field-operations`: realistic agricultural equipment in field-related operations, premium but grounded, no brand marks.
- `agriculture-context-field-workflows`: clear field workflow with visible machinery and operational context.
- `agriculture-context-preparation-handling`: preparation or handling context with equipment/material movement, no technical labels.
- `agriculture-context-project-inquiry`: practical planning or equipment review scene, not a handshake or office stock image.
- `agriculture-equipment-direction`: structured equipment/workflow direction visual; avoid specific model/spec implication.
- `agriculture-inquiry-workflow`: simple process-support visual; manual design may be preferred.

## Real Asset / Company Asset Guidance

Real photos are preferable when they are approved and rights-safe:

- approved Mall Agro project photos;
- approved Uni Compani project or machinery photos;
- company-owned images;
- partner-provided images with explicit permission;
- supplier images only when usage rights and brand implications are clear.

Every real asset must be reviewed for:

- rights confirmation;
- visible logo/brand exposure;
- competitor or supplier brand risk;
- implied distributor/partnership/certification claims;
- product/spec/capacity implications;
- mobile and desktop crop quality;
- consistency with the approved visual direction.

## Crop And Export Requirements

Future exports should use `.webp`.

Guidance:

- prepare desktop and mobile-safe crops;
- keep the important subject centered or safely within the focal area;
- avoid tiny machinery details that disappear on mobile;
- avoid text inside images;
- avoid logos as focal points;
- preserve enough negative space for the current card/slot layout;
- do not require exact pixel dimensions until the implementation task confirms the rendered layout needs;
- do not create files yet.

## File Naming Plan

Planned future paths only. These files do not exist yet and should not be added until approval.

```txt
/public/images/categories/agriculture/agriculture-hero-field-operations.webp
/public/images/categories/agriculture/agriculture-context-field-workflows.webp
/public/images/categories/agriculture/agriculture-context-preparation-handling.webp
/public/images/categories/agriculture/agriculture-context-project-inquiry.webp
/public/images/categories/agriculture/agriculture-equipment-direction.webp
/public/images/categories/agriculture/agriculture-inquiry-workflow.webp
```

## Visual Quality Criteria

Approved visuals must be:

- realistic;
- industrial/B2B;
- not generic stock-photo content;
- clear about equipment, workflow, or category context;
- usable for both larger buyers and smaller operators;
- not exaggerated, futuristic, or decorative-only;
- visually compatible with the Mall Agro green/yellow/warm-neutral direction;
- mobile-safe with a clear focal area;
- free of misleading visual claims.

## Brand And Claim Safety Rules

Visuals must not imply:

- official distributor status;
- certification;
- guaranteed performance;
- stock availability;
- exact technical specs;
- specific machine models;
- partnerships;
- market leadership;
- country coverage or service scope not approved in copy;
- ownership/founding history positioning not approved for this project.

## Forbidden Elements

Do not use:

- random farm landscapes without equipment;
- fake machines;
- competitor copyrighted imagery;
- visible competitor logos as focal point;
- old WooCommerce images unless explicitly re-approved;
- unreadable fake UI or text;
- people smiling at camera in stock-photo style;
- unrealistic AI factory scenes;
- over-polished futuristic renders;
- product models, specs, capacities, or stock visuals;
- certification badges or distributor-style marks.

## Review Checklist

- [ ] Rights approved.
- [ ] Brand/logo risk checked.
- [ ] Claim risk checked.
- [ ] Realism checked.
- [ ] Mobile crop checked.
- [ ] Desktop crop checked.
- [ ] No fake text or UI.
- [ ] No competitor logo as focal point.
- [ ] No certification/distributor implication.
- [ ] File name approved.
- [ ] Slot mapping approved.
- [ ] Manual review completed before adding to `public/`.

## Approval Workflow

1. Approve this brief.
2. Prepare prompts and/or source list.
3. Generate or source draft images.
4. Manually review draft images.
5. Export final approved `.webp` files.
6. Add files to `public/images/categories/agriculture/`.
7. Wire approved paths into `imageSlots`.
8. Run browser QA across mobile, tablet, and desktop.
9. Only then use the accepted template direction for Grain Processing and Food Industry.

## Open Questions

- Do we have usable real Mall Agro or Uni Compani project photos?
- Are partner or supplier images allowed?
- Should Agriculture use real photography, AI-generated visuals, or a mixed approach?
- Should the workflow graphic be designed manually instead of generated by AI?
- Should `/products` overview be implemented before or after category assets?
- Should future category visuals share a strict crop ratio system before expansion to Grain Processing and Food Industry?

## Next Implementation Task After Approval

Recommended next task:

```txt
Generate Agriculture Visual Prompts For Approved Asset Slots
```

Alternative next task if real image sources are available:

```txt
Source And Review Agriculture Category Visual Drafts
```

Neither task should add files to `public/` or wire paths into `imageSlots` until manual visual approval is complete.
