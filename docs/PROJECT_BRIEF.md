# Mall Agro Project Brief

## Project Identity

Mall Agro is being redesigned as a modern B2B product catalog for agricultural, grain handling, and food industry equipment.

## Current Situation

The existing local project is an early Next.js App Router application using JavaScript, React, and Tailwind CSS. It contains early layout components, Mall Agro brand assets, a hero video, icons, and initial Tailwind design tokens.

The existing public website is WooCommerce-heavy and contains a large seed-oriented catalog structure. That structure is not the target information architecture for the redesign.

## Business Goal

Create a cleaner, more focused B2B catalog that presents Mall Agro's equipment categories clearly and supports qualified inquiries rather than WooCommerce-style browsing.

## Target Domains

- `mallagro.com`: English version
- `mallagro.ro`: Romanian version

Both domains should share the same conceptual structure and product taxonomy, but every language-specific item must be fully localized.

## Language And Domain Rules

For `mallagro.com`, all visible content, navigation, category names, product names, SEO metadata, Open Graph text, image alt text, and slugs must be English.

For `mallagro.ro`, all visible content, navigation, category names, product names, SEO metadata, Open Graph text, image alt text, and slugs must be Romanian.

Romanian pages must not use English slugs unless explicitly approved later.

## Simplified Product Scope

The new catalog must use three main categories:

1. Agriculture
2. Grain Processing / Grain Handling
3. Food Industry Equipment

Romanian:

1. Agricultură
2. Procesarea și manipularea cerealelor
3. Echipamente pentru industria alimentară

Seed products from the old WooCommerce catalog are out of scope and must not be imported into the new product database unless explicitly re-approved.

## Old Website Role

The old WooCommerce website should be used only as a content source for validated business information, images, product descriptions, and terminology. It must not define the new navigation, taxonomy, or product database structure.

## Target Audience

- Agricultural businesses
- Grain processors and handlers
- Food industry operators
- Procurement and operations managers
- Technical buyers looking for equipment, automation, or machinery solutions

## Project Risks

- Mixing English and Romanian content across domains
- Carrying over the old seed-heavy WooCommerce taxonomy
- Creating unsupported business claims during content drafting
- Changing the early design system before it is audited
- Migrating products before taxonomy approval
- Assuming Vite behavior in a Next.js App Router project

## Unknowns

- Final GitHub repository URL
- Deployment target
- Domain routing and localization implementation strategy
- Approved design tokens
- Approved content source list
- Final product list per category
- Whether product detail pages are needed in the first release

## Next Decisions

- Confirm GitHub remote repository
- Approve localization strategy by domain
- Approve first site structure
- Approve content model
- Audit existing design system
- Define first browser-visible implementation task
