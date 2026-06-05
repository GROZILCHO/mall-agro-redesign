import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'B2B catalog structure',
      title: 'A focused starting point for equipment inquiries',
      body: 'Mall Agro is organized as a focused B2B catalog for equipment categories in agriculture, grain processing and handling, and food industry applications.',
    },
    process: {
      title: 'How the catalog supports project discussions',
      steps: [
        {
          title: 'Explore the relevant category',
          body: 'Start with the equipment category that best matches your operation or application area.',
        },
        {
          title: 'Share your requirement',
          body: 'Use the category structure as a starting point for describing your project, workflow, or equipment need.',
        },
        {
          title: 'Move toward a proposal',
          body: 'The next step is a project-oriented discussion about suitable equipment or a future proposal.',
        },
      ],
    },
    cta: {
      title: 'Use the catalog as an inquiry starting point',
      body: 'The current category pages are catalog entry points. Final product details and richer category content will be added only after the content scope is approved.',
      label: 'Request a quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
