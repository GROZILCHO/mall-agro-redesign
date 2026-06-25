# AGRICULTURE_IMPLEMENTATION_NOTES.md

**Project:** Mall Agro Redesign

**Page:**
Agriculture Category

**Reference Content:**
AGRICULTURE_CATEGORY_GOLDEN_MASTER_v2.0.md

**Status:**
Implementation Ready

---

# Purpose

This document defines the technical implementation notes for the Agriculture category page.

It complements the editorial Golden Master and should be used by developers during implementation.

The Golden Master defines **what** should be communicated.

This document defines **how** that content should be integrated into the website.

---

# 1. Source of Truth

Editorial source:

`AGRICULTURE_CATEGORY_GOLDEN_MASTER_v2.0.md`

All public content must follow the approved editorial wording.

Implementation should not rewrite, shorten or simplify the approved copy unless explicitly requested.

---

# 2. Page Route

English

```text
/products/agriculture
```

Romanian (future)

```text
/produse/agricultura
```

---

# 3. SEO Metadata

## Page Title

Agriculture Equipment | Field Operations, Material Handling & Equipment Planning | Mall Agro

---

## Meta Description

Explore agricultural operations through workflow, material handling and equipment planning. Understand the operational context before discussing agricultural equipment.

Target length:

150–160 characters.

---

## Canonical

English

```text
https://mallagro.com/products/agriculture
```

Romanian version will use its own domain and localized canonical.

---

# 4. Open Graph

## OG Title

Agriculture Equipment for Modern Agricultural Operations

---

## OG Description

Explore agricultural workflows, equipment planning and operational context before selecting agricultural equipment.

---

## OG Image

Future dedicated Agriculture category social image.

Current implementation may temporarily use the approved category hero image.

---

# 5. Hero Image

Reference image:

Approved Agriculture Hero

Requirements:

* realistic
* project-oriented
* operational context
* no dealership feeling
* no visible branding
* natural lighting

---

# 6. Internal Links

Current page should reference:

Primary

→ Grain Processing & Handling

Secondary

→ Food Industry Equipment

Future

→ Solutions

→ Project Discussion

→ Request a Quote

---

# 7. CTA Mapping

Hero

Primary CTA

Discuss Your Project

↓

Quote / Consultation page

---

Bottom CTA

Discuss Your Project

↓

Same destination for consistency.

---

# 8. Section Order

Maintain the approved editorial sequence.

Hero

↓

Operational Overview

↓

Operating Contexts

↓

Equipment Planning

↓

Project Discussion

↓

Preparing for Discussion

↓

Beyond the Field

↓

Final CTA

No section reordering unless approved.

---

# 9. Visual Guidelines

Maintain generous vertical spacing.

Avoid long uninterrupted text blocks.

Preserve the educational progression throughout the page.

Cards should support—not replace—the written content.

Images should reinforce operational understanding rather than showcase individual machines.

---

# 10. Responsive Notes

Desktop

Two-column layouts where appropriate.

Tablet

Reduce visual density while preserving section hierarchy.

Mobile

Maintain full editorial sequence.

Do not collapse multiple sections into accordion layouts without approval.

---

# 11. Accessibility

Semantic heading hierarchy.

Descriptive image alt text.

Visible keyboard focus.

Sufficient colour contrast.

Meaningful button labels.

---

# 12. Performance

Prefer WebP.

Lazy-load below-the-fold imagery.

Avoid duplicate hero images.

Do not introduce unnecessary JavaScript for editorial sections.

---

# 13. Future Enhancements

Potential additions after launch:

* operational diagrams;
* process illustrations;
* equipment family cards;
* FAQ module;
* related solutions;
* downloadable planning resources.

These enhancements should not alter the approved editorial structure.

---

# 14. Implementation Rules

Do not rewrite editorial copy.

Do not merge sections.

Do not introduce unsupported claims.

Do not replace operational language with product marketing language.

Preserve the progression from operational understanding to project discussion.

---

# Status

Editorial Content

Approved

Implementation

Ready for Codex

SEO

Ready

UX

Ready

Localization

Pending Romanian adaptation

End of Document
