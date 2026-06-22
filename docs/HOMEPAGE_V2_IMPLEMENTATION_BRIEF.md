# Homepage v2 Implementation Brief

## Purpose

This brief defines the planning scope for a future Homepage v2 implementation.

Homepage v2 should align the public homepage with the approved homepage information architecture and positioning direction. The homepage must present Mall Agro first as an equipment and industrial project partner for agriculture, grain processing and handling, and food production, with the catalog serving as a navigation and inquiry-preparation tool.

This document is planning-only. It does not implement source changes.

## Current Problem

The current homepage is a working baseline, not the final structure.

The current structure still behaves too much like:

1. Hero
2. Equipment categories
3. Company / authority content
4. Inquiry process
5. Final CTA

This makes the homepage feel catalog-first. It does not yet fully answer why a serious buyer should speak with Mall Agro before asking the visitor to choose a category.

Homepage v2 should shift the narrative toward:

1. Company role
2. Project capability
3. Equipment scope
4. Inquiry path

## Target Homepage Structure

Homepage v2 should follow this order:

1. Hero
2. Company Positioning / Why Mall Agro
3. What We Support
4. Project Capabilities
5. Equipment Categories
6. Inquiry Process
7. Final CTA

The categories must appear after the company/project-partner message is established.

## Section-by-Section Implementation Requirements

### 1. Hero

Purpose:

- Present Mall Agro as more than a product catalog.
- Establish equipment and project support across agriculture, grain processing and handling, and food production.
- Avoid making the first homepage action only category-focused.

Content direction:

- Use source-safe B2B language.
- Explain that visitors can prepare equipment, workflow, and project inquiries.
- Keep the quote path framed as an inquiry start, not checkout.

CTA direction:

- Primary CTA should point toward capabilities or the homepage explanation, not only category browsing.
- Secondary CTA may remain `Request a Quote`.

### 2. Company Positioning / Why Mall Agro

Purpose:

- Answer why a serious buyer should speak with Mall Agro.
- Explain the company role before presenting category choices.

Content direction:

- Project-oriented approach.
- Equipment selection support.
- Workflow and requirement clarification.
- Logistics coordination where claim-safe.
- Implementation support where claim-safe.

Claim boundary:

- Do not claim official representation, exclusive distribution, market leadership, certifications, guaranteed delivery, named manufacturer partnerships, or guaranteed project outcomes.

### 3. What We Support

Purpose:

- Show that Mall Agro supports both smaller equipment needs and broader industrial projects.

Recommended structure:

- Single Equipment Needs
- Industrial Projects

Single Equipment Needs may cover:

- individual machines;
- replacement equipment;
- targeted production or handling upgrades;
- smaller processing or workflow needs.

Industrial Projects may cover:

- new production lines;
- modernization projects;
- storage or handling systems;
- grain handling and processing systems;
- source-safe process-line planning language;
- integrated equipment solutions where not framed as a guarantee.

### 4. Project Capabilities

Purpose:

- Build trust through capability themes without exposing sensitive projects, client names, manufacturers, or confidential project evidence.

Approved themes:

- project planning support;
- equipment selection;
- engineering coordination where source-safe;
- transport and logistics organization where source-safe;
- implementation and installation support where source-safe;
- multidisciplinary team involvement where source-safe;
- support across agriculture, grain processing, and food industry contexts.

Do not add:

- client names;
- project locations when sensitive;
- visible manufacturer names;
- unapproved supplier relationships;
- confidential project photos;
- exact project references that may allow bypassing Mall Agro.

### 5. Equipment Categories

Purpose:

- Help visitors choose the right starting area after the business role has been established.

Categories:

- Agriculture
- Grain Processing / Grain Handling
- Food Industry Equipment

Requirements:

- Preserve approved category IDs, routes, icons, order, and English card copy unless a separate content task approves changes.
- Keep categories as entry points into equipment and project discussions, not the entire homepage message.

### 6. Inquiry Process

Purpose:

- Explain how a visitor moves from interest to a productive first discussion.

Recommended steps:

1. Define the business or production need.
2. Identify the relevant equipment area.
3. Share material, workflow, site, and process details.
4. Start a focused quote or project discussion.

Tone:

- Practical and professional.
- Not checkout.
- Not instant quotation.
- Not bureaucratic.

### 7. Final CTA

Purpose:

- Encourage contact while preserving project-oriented positioning.

Recommended direction:

- Address both machine requests and industrial projects.
- Explain what information the visitor should share.
- Keep the CTA label clear and direct, such as `Request a Quote`.

## Required Content Data Changes

Future implementation will likely require content changes in:

- `src/lib/content/hero.js`
- `src/lib/content/homepage.js`
- possibly `src/lib/content/categories.js` if category card context needs minor alignment after the section reorder

Expected content model needs:

- hero messaging focused on equipment and project support;
- company positioning content;
- support-path content for single equipment needs and industrial projects;
- project capability content;
- category gateway intro copy aligned to the new placement;
- inquiry process copy;
- final CTA copy.

Do not add unsupported business facts to content data.

## Required Component Changes

Future implementation may require updates to homepage rendering components:

- `src/app/page.js`
- `src/app/components/HomepageContentSections.js`
- possibly `src/app/components/Hero.js` if CTA targets or layout treatment need adjustment

Likely component-level needs:

- reorder homepage sections so categories appear after company/project positioning;
- render a `What We Support` section;
- render or refine a `Project Capabilities` section;
- preserve the existing category card rendering unless a separate design task approves a redesign;
- preserve mobile-safe wrapping and overflow protections from the mobile stability pass.

Do not modify category page components as part of Homepage v2.

## Files Likely To Modify Later

Likely allowed files for a future narrow implementation task:

- `src/app/page.js`
- `src/app/components/HomepageContentSections.js`
- `src/app/components/Hero.js`
- `src/lib/content/homepage.js`
- `src/lib/content/hero.js`
- `src/lib/content/categories.js`

Only include files that are necessary for the specific implementation phase.

## Files Forbidden For Implementation

Homepage v2 implementation should not modify:

- `src/app/products/**`
- `src/app/produse/**`
- `src/app/products/components/CategoryLandingPage.js`
- `src/lib/content/categoryPages.js`
- `src/lib/routes/**`
- `src/lib/localization/**`
- `public/**`
- SEO runtime files
- metadata files unless a dedicated SEO task approves them
- package files
- config files
- existing documentation files unless the task is documentation-only

Do not add routes, middleware, redirects, sitemap, robots, canonical logic, hreflang, Open Graph, JSON-LD, or structured data as part of Homepage v2.

## Claim-Safety Rules

Homepage v2 must not claim or imply:

- official representative status;
- exclusive distributor status;
- named manufacturer partnerships unless approved;
- guaranteed delivery across Romania, Europe, or the EU;
- market leadership;
- certifications;
- exact years of experience;
- product stock or availability;
- exact machine models, capacities, or performance metrics unless source-verified;
- guaranteed efficiency, production, savings, or project outcomes;
- instant quotation;
- ecommerce checkout behavior;
- confidential client names, project locations, project photos, or supplier relationships.

Allowed cautious direction:

- Mall Agro supports equipment and project inquiries.
- Mall Agro helps visitors structure equipment requirements.
- Mall Agro serves agriculture, grain handling, and food production contexts.
- Mall Agro can support both single equipment needs and broader industrial project discussions where source-safe.

## Mobile/Responsive Requirements

Homepage v2 must be mobile-safe from the start.

Requirements:

- no horizontal overflow at 375px;
- no clipped headings, intro text, category cards, process rows, or CTA text;
- category cards must stack cleanly on mobile;
- section grids must collapse predictably below desktop widths;
- CTA buttons must wrap or resize safely on mobile;
- desktop layout should remain stable at 1024px and 1440px;
- preserve or improve existing `min-w-0`, `max-w-full`, and text wrapping protections.

Minimum QA viewports:

- 375px
- 768px
- 1024px
- 1440px

## Visual/UX Requirements

Homepage v2 should feel:

- company-first;
- project-partner-first;
- still category-aware, but not catalog-first;
- serious and industrial;
- calm, practical, and B2B;
- clear for both strategic project buyers and smaller equipment buyers.

Visual hierarchy should make the visitor understand:

1. what Mall Agro is;
2. what types of needs it supports;
3. why the company is relevant for project or equipment planning;
4. which equipment category to choose;
5. how to prepare a useful inquiry.

Avoid:

- oversized decorative sections without content value;
- ecommerce/shop language;
- repeated card-heavy sections with the same visual rhythm;
- generic stock-photo positioning;
- unsupported trust signals.

## Stop Conditions

Stop a future implementation task if:

- the working tree is dirty before starting;
- the task would require modifying category pages or product pages;
- the task would require new images or public assets;
- the task would require source-unsupported business claims;
- the task would require SEO runtime or metadata changes;
- the task would require route, localization, middleware, or domain behavior changes;
- the task would require adding products or importing old WooCommerce taxonomy;
- mobile stability cannot be preserved;
- the requested change conflicts with `docs/PROJECT_RULES.md`, `docs/BRAND_POSITIONING.md`, or `docs/HOMEPAGE_INFORMATION_ARCHITECTURE.md`.

## QA Requirements

Future Homepage v2 QA should include:

- `npm.cmd run build`;
- route check for `/`;
- route checks for the three English category pages;
- visual review at 375px, 768px, 1024px, and 1440px;
- horizontal overflow check;
- CTA target check;
- category link check;
- claim-safety review against `docs/BRAND_POSITIONING.md`;
- information architecture review against `docs/HOMEPAGE_INFORMATION_ARCHITECTURE.md`;
- content review against `docs/HOMEPAGE_MESSAGING.md`;
- confirmation that no SEO/runtime/route/product/category-page changes were introduced.

Known non-blocking warnings may remain unless separately fixed:

- shared `<img>` warnings in category landing page rendering;
- stale Browserslist/caniuse-lite warning.

## Suggested Implementation Phases

### Phase 1: Restructure Homepage Order Using Existing Components and Content

Goal:

- Move the homepage narrative closer to the approved IA order.
- Place company/project positioning before the category gateway.

Scope:

- homepage source and homepage content only;
- no new assets;
- no category page changes.

### Phase 2: Add or Refine Company Capability Section

Goal:

- Make Mall Agro's project-support role clearer.
- Add or refine structured capability content if the current content model is insufficient.

Scope:

- `homepage.js`;
- `HomepageContentSections.js`;
- possibly `Hero.js` or `hero.js` only if needed for CTA flow.

### Phase 3: Category Gateway Repositioning

Goal:

- Keep categories as the entry point into equipment areas while making them secondary to company/project positioning.

Scope:

- `page.js`;
- category gateway copy if needed;
- no route or category ID changes.

### Phase 4: Visual and Spacing QA

Goal:

- Verify that the new structure is readable, balanced, and mobile-safe.

Scope:

- homepage rendering files only;
- no content strategy changes during QA unless a separate fix task is created.

### Phase 5: Final Content and Claim-Safety QA

Goal:

- Confirm the homepage sounds serious, B2B, and project-oriented without overclaiming.

Scope:

- audit only first;
- any copy edits should be handled in a separate narrow content task.
