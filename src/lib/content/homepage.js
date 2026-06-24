import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'Why Mall Agro',
      title: 'From equipment needs to practical production decisions',
      body: 'Choosing industrial equipment is rarely only a product question. The right machine or line depends on the material being handled, the production goal, the available site conditions, the process flow and the way the equipment will be delivered, installed and used.',
      note: 'Mall Agro helps clients structure these requirements before moving toward a quote or project discussion. For smaller buyers, this can mean identifying a suitable machine, replacement unit or process upgrade. For larger projects, it can mean preparing the equipment logic behind a production line, handling system or broader industrial solution.',
      supportPoints: [
        'Equipment needs connected to real operating conditions',
        'Support for individual machines, lines and broader projects',
        'Practical preparation before quotation',
        'Categories used as a starting point, not as the full service',
      ],
    },
    visualPlaceholders: {
      projectPlanning: {
        eyebrow: 'Project context',
        title: 'Equipment planning and production flow',
      },
      capabilities: {
        eyebrow: 'Capability context',
        title: 'From requirement review to implementation planning',
      },
      inquiryProcess: {
        eyebrow: 'Inquiry context',
        title: 'From need to focused equipment discussion',
      },
    },
    whatWeSupport: {
      eyebrow: 'What we support',
      title: 'Support across machines, lines and industrial projects',
      body: 'Mall Agro works with equipment inquiries at different levels of complexity - from a single machine request to production line planning, modernization work and coordinated industrial equipment solutions.',
      paths: [
        {
          title: 'Individual Equipment Needs',
          body: 'Focused requests for individual machines, replacement equipment, process upgrades and handling systems for farms, processors and production operators that need a practical equipment solution.',
        },
        {
          title: 'Production Lines and Modernization',
          body: 'Support for production lines, process improvements and modernization work where several machines, handling steps or processing stages need to operate together.',
        },
        {
          title: 'Integrated Industrial Project Support',
          body: 'Project-oriented support for inquiries where equipment selection, material flow, logistics, installation context and implementation planning need to be considered as one connected process.',
        },
      ],
    },
    projectCapabilities: {
      eyebrow: 'Project capability',
      title: 'What shapes a serious equipment request',
      body: 'A serious equipment inquiry usually starts before the exact machine is selected. It begins with the production goal, the material or product, the site conditions, the required handling steps, and the practical limits around delivery and implementation.\n\nMall Agro helps organize these details so the first discussion can move beyond a generic product request and toward a more useful equipment or project review.',
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
          body: 'Preparing delivery and coordination requirements for larger machines, handling systems and project-related equipment.',
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
          title: 'Consultative inquiry model',
          body: 'Mall Agro is structured around equipment review and quote-based discussion, not instant checkout or product-stock browsing.',
        },
        {
          title: 'Confidential Communication',
          body: 'Public communication should protect client, project and supplier confidentiality where needed.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Inquiry process',
      title: 'From production need to focused equipment discussion',
      body: 'A useful request starts with the operation, material or product, current workflow and site limits. This helps Mall Agro review whether the need is an individual machine, a line adjustment or a broader equipment discussion.',
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
      title: 'Planning an equipment request or industrial project?',
      body: 'Share your operation, material or product type, current workflow, site limits and expected equipment need so Mall Agro can review the inquiry with the right context.',
      label: 'Request a Quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
