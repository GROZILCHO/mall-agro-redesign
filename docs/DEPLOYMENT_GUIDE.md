# Mall Agro Deployment Guide

## Status

Deployment target is not confirmed.

Domain routing strategy is not implemented yet.

Next.js deployment model is TBD.

No deployment model is approved yet for the two domain-specific language versions:

- `mallagro.com` = English
- `mallagro.ro` = Romanian

The project must use domain-based language serving. Do not use `mallagro.ro -> mallagro.com/ro`, `/ro` as the primary Romanian model, browser-language redirects, or unapproved middleware rewrites.

## Possible Deployment Options

- Vercel
- Node hosting
- Static export only if compatible with the final Next.js routing, localization, and content strategy

## Domain Requirements

- `mallagro.com` must serve the English experience.
- `mallagro.ro` must serve the Romanian experience.
- Each domain must use matching localized routes, metadata, Open Graph text, alt text, and sitemap entries.

## Candidate Deployment Models

### Option A - Same Next.js Deployment For Both Domains

Both domains point to one deployment.

This model requires runtime or hosting-level hostname handling. Root `/` must serve English on `mallagro.com` and Romanian on `mallagro.ro`. The rendered `html lang`, metadata, visible UI, and route links must match the hostname. Wrong-language route behavior must be defined before implementation.

Middleware, rewrites, or other hostname-based routing must not be introduced unless separately approved.

Risks:

- mixed-language rendering
- hidden routing behavior
- harder debugging
- SEO, canonical, and hreflang complexity
- wrong-language route exposure

### Option B - Separate Deployments From The Same Repository

`mallagro.com` and `mallagro.ro` are separate deployments. Each deployment may use an environment-selected default locale while source still shares renderers and config.

This model requires hosting and CI/CD controls that prevent wrong-language exposure and keep both deployments synchronized.

Risks:

- deployment drift
- duplicated deployment configuration
- environment variable mistakes
- sitemap, robots, and canonical separation complexity
- need for a clear CI/CD process

## Required Owner Decisions Before Romanian Runtime Work

- [ ] Which hosting provider will be used?
- [ ] Will both domains point to the same deployment?
- [ ] Or will each domain have a separate deployment from the same repository?
- [ ] Are environment variables available per deployment?
- [ ] Should wrong-language routes return 404, remain accessible, or follow another approved policy?
- [ ] Should Romanian placeholder pages also use temporary noindex?
- [ ] Should root `/` differ by hostname or by deployment environment?
- [ ] Who controls DNS/domain mapping?
- [ ] Who controls CI/CD deployment settings?

## Blocked Until Deployment Model Approval

- Romanian route tree implementation
- Romanian homepage runtime
- Romanian Navbar runtime
- Romanian metadata wiring
- `html lang="ro"` behavior
- canonical and hreflang
- sitemap and robots
- middleware or hostname logic
- wrong-language route policy

## Safe Preparatory Work Before Deployment Decision

- Romanian content config planning
- Romanian shared UI string inventory
- homepage, Header, Footer, TopBar, and Hero localization readiness audits
- final category content planning
- design QA
- manual browser QA

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
