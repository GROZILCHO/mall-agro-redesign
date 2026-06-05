import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'B2B equipment catalog portal',
      title: 'A practical catalog entry point for equipment-driven projects',
      body: 'Mall Agro is structured around the main equipment categories that matter to agricultural operations, grain processors, food production companies, and industrial project investors.',
      note: 'The catalog is designed for inquiry and project orientation, not instant checkout or product-cart browsing.',
    },
    audiences: {
      title: 'Built around different operating contexts',
      items: [
        {
          label: 'Agricultural operations',
          body: 'Category-led browsing for field-related workflows and equipment direction.',
        },
        {
          label: 'Grain processors',
          body: 'A clear route into processing, handling, storage-related, and preparation workflows.',
        },
        {
          label: 'Food production companies',
          body: 'A dedicated category path for production, processing, and handling applications.',
        },
        {
          label: 'Industrial project investors',
          body: 'A structured starting point for discussing equipment needs before final specifications are approved.',
        },
      ],
    },
    workflow: {
      title: 'From category signal to project inquiry',
      body: 'The homepage helps visitors narrow the area of interest before a more specific project discussion.',
      steps: [
        {
          label: '01',
          title: 'Choose the operating area',
          body: 'Start with agriculture, grain processing and handling, or food industry equipment.',
        },
        {
          label: '02',
          title: 'Frame the equipment need',
          body: 'Use the category page as a reference point for the workflow or application you want to discuss.',
        },
        {
          label: '03',
          title: 'Continue as a project discussion',
          body: 'Move from catalog direction toward a practical inquiry, proposal, or future content-approved product detail.',
        },
      ],
    },
    cta: {
      eyebrow: 'Project-oriented, not ecommerce checkout',
      title: 'Use Mall Agro to start the right equipment conversation',
      body: 'The current category pages are catalog entry points. Final product detail pages and richer category content will be added only after the content scope is approved.',
      label: 'Request a quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
