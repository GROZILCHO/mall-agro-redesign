# Mall Agro Site Structure

All routes are draft until approved. The two domains should share the same conceptual structure while using fully localized routes and content.

| Domain | Locale | Route | Page Name | Page Type | Next.js App Path / Proposed App Path | SEO Intent | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| mallagro.com | en | `/` | Home | Landing / catalog entry | `src/app/page.js` | Brand and category overview | Draft | Existing homepage is early and not workflow-approved. |
| mallagro.com | en | `/products` | Products | Product index | `src/app/products/page.js` | Product catalog overview | Draft | Proposed path. |
| mallagro.com | en | `/products/agriculture` | Agriculture | Category page | `src/app/products/agriculture/page.js` | Agriculture equipment category | Draft | English slug required. |
| mallagro.com | en | `/products/grain-processing` | Grain Processing / Grain Handling | Category page | `src/app/products/grain-processing/page.js` | Grain processing and handling equipment | Draft | English slug required. |
| mallagro.com | en | `/products/food-industry-equipment` | Food Industry Equipment | Category page | `src/app/products/food-industry-equipment/page.js` | Food industry equipment category | Draft | English slug required. |
| mallagro.com | en | `/solutions` | Solutions | Solutions index | `src/app/solutions/page.js` | Industry and business solutions | Draft | Proposed path. |
| mallagro.com | en | `/about` | About | Company page | `src/app/about/page.js` | Company trust and background | Draft | Proposed path. |
| mallagro.com | en | `/contact` | Contact | Contact page | `src/app/contact/page.js` | Contact and local business discovery | Draft | Proposed path. |
| mallagro.com | en | `/quote` | Request a Quote | Lead generation | `src/app/quote/page.js` | Quote request conversions | Draft | Proposed path. |
| mallagro.com | en | `/privacy-policy` | Privacy Policy | Legal | `src/app/privacy-policy/page.js` | Legal compliance | Draft | Proposed path. |
| mallagro.com | en | `/cookie-policy` | Cookie Policy | Legal | `src/app/cookie-policy/page.js` | Legal compliance | Draft | Proposed path. |
| mallagro.ro | ro | `/` | Acasă | Landing / catalog entry | `src/app/page.js` or locale/domain routing TBD | Prezentare brand și categorii | Draft | Domain routing strategy TBD. |
| mallagro.ro | ro | `/produse` | Produse | Product index | `src/app/produse/page.js` or locale/domain routing TBD | Prezentare catalog produse | Draft | Romanian slug required. |
| mallagro.ro | ro | `/produse/agricultura` | Agricultură | Category page | `src/app/produse/agricultura/page.js` or locale/domain routing TBD | Echipamente pentru agricultură | Draft | Romanian slug required. |
| mallagro.ro | ro | `/produse/procesarea-cerealelor` | Procesarea și manipularea cerealelor | Category page | `src/app/produse/procesarea-cerealelor/page.js` or locale/domain routing TBD | Echipamente pentru procesarea cerealelor | Draft | Romanian slug required. |
| mallagro.ro | ro | `/produse/echipamente-industria-alimentara` | Echipamente pentru industria alimentară | Category page | `src/app/produse/echipamente-industria-alimentara/page.js` or locale/domain routing TBD | Echipamente pentru industria alimentară | Draft | Romanian slug required. |
| mallagro.ro | ro | `/solutii` | Soluții | Solutions index | `src/app/solutii/page.js` or locale/domain routing TBD | Soluții pentru industrii și aplicații | Draft | Romanian slug required. |
| mallagro.ro | ro | `/despre-noi` | Despre noi | Company page | `src/app/despre-noi/page.js` or locale/domain routing TBD | Informații despre companie | Draft | Romanian slug required. |
| mallagro.ro | ro | `/contact` | Contact | Contact page | `src/app/contact/page.js` or locale/domain routing TBD | Contact și descoperire locală | Draft | Same spelling works in Romanian. |
| mallagro.ro | ro | `/cerere-oferta` | Cerere ofertă | Lead generation | `src/app/cerere-oferta/page.js` or locale/domain routing TBD | Cereri de ofertă | Draft | Romanian slug required. |
| mallagro.ro | ro | `/politica-de-confidentialitate` | Politica de confidențialitate | Legal | `src/app/politica-de-confidentialitate/page.js` or locale/domain routing TBD | Conformitate legală | Draft | Romanian slug required. |
| mallagro.ro | ro | `/politica-cookie` | Politica cookie | Legal | `src/app/politica-cookie/page.js` or locale/domain routing TBD | Conformitate legală | Draft | Romanian slug required. |
