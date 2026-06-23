import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'Why Mall Agro',
      title: 'From equipment requests to production-ready decisions',
      body: 'Mall Agro helps clients move from a business or production need toward a clearer equipment path. The company supports discussions around machinery, production lines, material handling, workflow requirements and project context before a focused quote discussion begins.',
      note: 'For smaller buyers, this may mean identifying a suitable machine or upgrade. For larger projects, it may mean coordinating equipment requirements, logistics considerations and implementation context around a broader industrial solution.',
      supportPoints: [
        'Equipment needs linked to real operating context',
        'Support for both individual machines and broader projects',
        'Practical preparation before quotation',
        'Category structure used as a starting point, not as the full service',
      ],
    },
    whatWeSupport: {
      eyebrow: 'What we support',
      title: 'Support across machines, production lines and industrial projects',
      body: 'Mall Agro works with inquiries that range from focused equipment requests to broader production and handling projects.',
      paths: [
        {
          title: 'Individual Equipment Needs',
          body: 'Focused requests for individual machines, replacement equipment, process upgrades and handling systems for farms, processors and production operators.',
        },
        {
          title: 'Production Lines and Modernization',
          body: 'Support for production lines, process improvements, modernization work and coordinated equipment solutions across grain handling, agriculture and food production.',
        },
        {
          title: 'Integrated Industrial Project Support',
          body: 'Project-oriented support where equipment selection, material flow, logistics, installation context and implementation planning need to work together.',
        },
      ],
    },
    projectCapabilities: {
      eyebrow: 'Project capability',
      title: 'Capabilities behind the equipment request',
      body: 'Behind a serious equipment request there is usually a production goal, a material flow, a site condition, a logistics question or an implementation need. Mall Agro helps structure these factors before the inquiry moves toward equipment selection or quotation.',
      items: [
        {
          title: 'Operational Requirement Review',
          body: 'Clarifying production goals, material flow, site conditions and operational limits before equipment selection begins.',
        },
        {
          title: 'Equipment and Line Planning',
          body: 'Matching machinery, handling systems and production steps to the role they need to perform in the process.',
        },
        {
          title: 'Logistics Coordination',
          body: 'Planning delivery and coordination requirements for larger machines, handling systems and project-related equipment.',
        },
        {
          title: 'Installation Context',
          body: 'Supporting the discussion around installation, integration and on-site implementation needs where relevant to the project.',
        },
      ],
    },
    authority: {
      eyebrow: 'Industrial inquiry discipline',
      title: 'Built for practical industrial decision-making',
      body: 'The category structure is only the starting point. Mall Agro uses operation type, material flow, site limits, logistics needs and implementation context to help shape a more useful first discussion.',
      items: [
        {
          title: 'Project-first thinking',
          body: 'The inquiry starts from the production or operational need, not from a random product list.',
        },
        {
          title: 'Requirement clarity before quotation',
          body: 'A useful quote discussion depends on material, workflow, site and expected equipment role.',
        },
        {
          title: 'Separation from ecommerce',
          body: 'Mall Agro is not designed as an instant checkout experience or a product-stock browsing portal.',
        },
        {
          title: 'Confidential Communication',
          body: 'Public communication should protect client, project and supplier confidentiality where needed.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Inquiry process',
      title: 'From production need to focused project discussion',
      body: 'The inquiry path helps turn a broad equipment interest into the practical details needed for a first review.',
      steps: [
        {
          label: '01',
          title: 'Define the production or operational need',
          body: 'Start from the work that needs to be done: agricultural operation, grain flow, production activity, handling step or process upgrade.',
        },
        {
          label: '02',
          title: 'Identify the relevant equipment area',
          body: 'Choose whether the inquiry belongs under Agriculture, Grain Processing / Grain Handling, or Food Industry Equipment.',
        },
        {
          label: '03',
          title: 'Share material, workflow and site conditions',
          body: 'Prepare information about the material or product type, current process, available space, access, site limits and expected equipment role.',
        },
        {
          label: '04',
          title: 'Start a focused quote or project discussion',
          body: 'Use the quote path to share enough context for a more relevant first response.',
        },
      ],
    },
    cta: {
      eyebrow: 'Equipment inquiry',
      title: 'Planning a machine request or industrial project?',
      body: 'Share your operation, material or product type, current workflow, site limits and expected equipment need so Mall Agro can review the inquiry with the right context.',
      label: 'Request a Quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
