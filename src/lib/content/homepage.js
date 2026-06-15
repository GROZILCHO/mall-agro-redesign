import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'B2B equipment category gateway',
      title: 'Start with the equipment area that matches your project',
      body: 'Mall Agro organizes equipment inquiries around three practical areas: agriculture, grain processing and handling, and food industry production workflows.',
      note: 'Use the catalog to choose the relevant category, review the working context, and prepare the details needed for a focused inquiry.',
    },
    audiences: {
      title: 'Built around practical equipment needs',
      items: [
        {
          label: 'Agricultural operations',
          body: 'Field activity, preparation tasks, material handling, and site realities around agricultural work.',
        },
        {
          label: 'Grain processors',
          body: 'Reception, cleaning, conveying, elevation, storage-adjacent handling, and grain flow planning.',
        },
        {
          label: 'Food production companies',
          body: 'Production workflows, processing environments, line planning, and operational continuity needs.',
        },
        {
          label: 'Project and procurement teams',
          body: 'A structured way to gather operating details before moving into an equipment planning discussion.',
        },
      ],
    },
    workflow: {
      title: 'From category choice to prepared inquiry',
      body: 'The homepage helps visitors move from a broad equipment area toward the practical details needed for the next discussion.',
      steps: [
        {
          label: '01',
          title: 'Choose the equipment area',
          body: 'Start with the category that best matches the operation: agriculture, grain processing and handling, or food industry equipment.',
        },
        {
          label: '02',
          title: 'Review the working context',
          body: 'Use the category page to check the relevant workflow, material handling step, production setting, or site requirement.',
        },
        {
          label: '03',
          title: 'Prepare the inquiry details',
          body: 'Share the operation, material, current process, site limits, and expected equipment need when requesting a quote.',
        },
      ],
    },
    cta: {
      eyebrow: 'Equipment inquiry',
      title: 'Prepare a focused equipment inquiry',
      body: 'Use the quote page to share the category, operation, material or product type, current workflow, and equipment need so the first response can focus on the relevant details.',
      label: 'Request a quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
