# Agriculture Final UX Resolution v1.0

## 1. Decision — `Hero Information Card`

**Decision:** **Replace** *(Editorial escalation required)*

### Rationale

"Hero Information Card" is an internal component name, not visitor-facing information.

It does not answer any user question and momentarily breaks the illusion of a polished B2B platform by exposing implementation terminology.

### Recommendation

Do **not** invent replacement text in the UX task.

Escalate to Editorial Director to define a semantic label that describes the information rather than the component.

**Classification:** Shared component.

---

## 2. Decision — `Current Category`

**Decision:** **Remove**

### Rationale

The visitor already knows:

* the route;
* the eyebrow;
* the H1;
* the page context;
* the Agriculture title inside the card.

The label adds no new information and slightly weakens hierarchy by repeating established context.

Removing it improves visual economy without affecting orientation.

**Classification:** Shared component.

---

# 3. Operating Context Cards

## Decision

Current behavior is **a technical layout defect**, not an intentional design variation.

The intended behavior should be:

* equal card height within each row;
* white primary content area expands vertically to fill remaining space;
* supporting tinted footer remains pinned to the bottom;
* no exposed section background between white body and tinted footer;
* responsive stacking may naturally remove equal-height behavior where appropriate.

This is both:

* **UX requirement**
* **layout implementation requirement**

It should become the default behavior for this shared card type.

**Classification:** Shared component.

---

# 4. Numbering Rule

## Project Discussion

**Keep numbering.**

Reason:

This is an ordered sequence.

The visitor performs:

01

↓

02

↓

03

The numbering reinforces process thinking.

---

## Preparing for Discussion

**Remove numbering.**

Reason:

The four items are not sequential.

They are project information categories.

Numbering incorrectly suggests workflow.

Use equal visual hierarchy instead.

No icons.

No decorative labels.

No replacement copy required.

Simply present them as parallel information blocks.

**Classification:** Shared category pattern.

---

# 5. CTA Reuse Decision

## Decision

The homepage CTA treatment should become the **standard enterprise CTA component**.

### Scope

Apply to:

* all category-page final CTAs;
* future Solution pages;
* future major landing-page final CTAs.

Do **not** apply automatically to:

* small inline CTAs;
* card CTAs;
* hero CTAs.

Those serve different interaction levels.

---

## Homepage elements to reuse

Reuse:

* background treatment;
* spacing system;
* internal layout;
* button positioning logic;
* responsive behavior;
* visual hierarchy;
* component styling.

This maintains one recognizable enterprise conversion pattern.

---

## Elements remaining category-specific

Keep unique:

* heading;
* supporting copy;
* CTA text;
* contextual messaging.

Only the visual component should be shared.

This avoids repetition while strengthening brand consistency.

**Classification:** Shared component.

---

# 6. Shared vs Agriculture-specific

### Shared component improvements

* Hero micro-label cleanup.
* Operating Context equal-height behavior.
* Final CTA component reuse.
* Removal of unnecessary component labels.
* Parallel information-card behavior.

### Agriculture-specific

None.

These decisions improve the shared category renderer without depending on Agriculture content.

---

# 7. Priority

### Fix now

* Remove `Current Category`.
* Replace `Hero Information Card` (editorial escalation).
* Fix Operating Context card-height behavior.
* Remove numbering from Preparing for Discussion.
* Reuse homepage enterprise CTA component.

### Defer to shared category polish

None.

### Optional

None.

All five items are coherent enough to justify implementation together.

---

# 8. Consolidated implementation scope

**Single implementation package:**

**"Shared Category Experience Polish — Hero Labels, Card Layout Consistency and Enterprise CTA Standardization"**

Scope includes:

* remove redundant hero micro-label;
* replace component-style hero label after editorial approval;
* correct shared Operating Context card layout behavior;
* retain numbering only where sequence exists;
* standardize category final CTA using the homepage enterprise CTA component;
* preserve all approved copy, routes, typography, colors and responsive architecture.

This should remain one controlled Codex task.

---

# 9. Likely files/components involved

Likely implementation surface:

* `src/app/products/components/CategoryLandingPage.js`
* Shared card component(s) used for Operating Contexts (if separated)
* Shared CTA component (or homepage CTA section component)
* `src/lib/content/categoryPages.js` only if hero label content is data-driven

No SEO, routing, metadata, assets or design-token files should be involved.

---

# 10. Copy confirmation

**Confirmed.**

The approved Agriculture copy does **not** require rewriting.

Only one item requires an **editorial escalation**:

* replacement wording for the current visitor-facing label **"Hero Information Card"**.

All remaining recommendations are purely compositional or component-level UX refinements and can be implemented without altering the approved public content.
