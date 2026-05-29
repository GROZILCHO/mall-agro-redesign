# Mall Agro Deployment Guide

## Status

Deployment target is not confirmed.

Domain routing strategy is not implemented yet.

Next.js deployment model is TBD.

## Possible Deployment Options

- Vercel
- Node hosting
- Static export only if compatible with the final Next.js routing, localization, and content strategy

## Domain Requirements

- `mallagro.com` must serve the English experience.
- `mallagro.ro` must serve the Romanian experience.
- Each domain must use matching localized routes, metadata, Open Graph text, alt text, and sitemap entries.

## Deployment Blockers

No deployment should happen before the following are stable:

- workflow docs
- route structure
- content model
- localization strategy
- build process
- domain routing strategy
- SEO and sitemap strategy
- deployment target

## Prohibited Assumptions

Do not assume Vite-style `dist/` deployment.

Do not assume static export until it is validated against the required Next.js App Router and localization behavior.

Do not configure hosting or domains without an explicit deployment task.
