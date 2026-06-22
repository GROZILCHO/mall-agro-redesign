import { routeKeys, siteRoutes } from '../routes/siteRoutes.js';

export const homepageContent = {
  en: {
    intro: {
      eyebrow: 'B2B equipment and project support',
      title: 'Start with the equipment context behind the inquiry',
      body: 'Mall Agro helps visitors organize equipment needs across agriculture, grain processing and handling, and food industry production workflows.',
      note: 'Use the homepage to choose the relevant equipment area, clarify the working context, and prepare the details needed for a focused quote discussion.',
    },
    audiences: {
      title: 'Built around practical project requirements',
      items: [
        {
          label: 'Agricultural operations',
          body: 'Field activity, preparation tasks, material handling, and site realities that shape agriculture equipment needs.',
        },
        {
          label: 'Grain processors',
          body: 'Reception, cleaning, conveying, elevation, storage-adjacent handling, and grain flow requirements.',
        },
        {
          label: 'Food production companies',
          body: 'Production workflows, processing environments, line planning, and operational continuity requirements.',
        },
        {
          label: 'Project and procurement teams',
          body: 'A structured way to gather operating details before starting an equipment planning discussion.',
        },
      ],
    },
    whatWeSupport: {
      eyebrow: 'What we support',
      title: 'Support for focused equipment needs and larger industrial projects',
      body: 'Mall Agro works with inquiries that range from individual equipment requests to broader production and handling projects.',
      paths: [
        {
          title: 'Single Equipment Needs',
          body: 'Individual machines, replacement equipment, targeted handling or processing needs, and smaller upgrades for farms, processors, and production operators.',
        },
        {
          title: 'Industrial Projects',
          body: 'Production lines, modernization work, silo and grain handling systems, and integrated equipment solutions where planning, delivery, and implementation need coordination.',
        },
      ],
    },
    projectCapabilities: {
      eyebrow: 'Project capability',
      title: 'Capabilities Behind the Equipment Request',
      body: 'Mall Agro helps connect the commercial inquiry with the practical requirements behind the work: equipment selection, workflow planning, logistics coordination, and implementation support.',
      items: [
        {
          title: 'Project planning support',
          body: 'Clarify the production or operational requirement before moving toward equipment selection.',
        },
        {
          title: 'Equipment selection',
          body: 'Match equipment needs with the material, workflow, site conditions, and expected role in the process.',
        },
        {
          title: 'Logistics coordination',
          body: 'Prepare larger equipment requests with delivery planning and coordination requirements in mind.',
        },
        {
          title: 'Implementation support',
          body: 'Include installation or implementation context in the inquiry where it is relevant to the work.',
        },
      ],
    },
    authority: {
      eyebrow: 'Practical inquiry discipline',
      title: 'Built Around Practical Equipment Inquiries',
      body: 'The category structure is the starting point, not the whole process. Mall Agro uses clear equipment areas, workflow context, material details, and site requirements to help shape a more useful first discussion.',
      items: [
        {
          title: 'Structured category organization',
          body: 'Agriculture, grain processing and handling, and food industry equipment are kept separate so visitors can start from the area that matches their operation.',
        },
        {
          title: 'Requirement gathering before quotation',
          body: 'The inquiry path focuses on operation type, material or product flow, current workflow, site limits, and expected equipment needs.',
        },
        {
          title: 'Clear separation from ecommerce',
          body: 'The homepage guides visitors toward a focused quote discussion rather than product stock browsing or instant checkout.',
        },
      ],
    },
    workflow: {
      title: 'From equipment area to focused quote discussion',
      body: 'The homepage connects category browsing with the practical details needed before a project-oriented inquiry.',
      steps: [
        {
          label: '01',
          title: 'Choose the equipment area',
          body: 'Start with the area that best matches the operation: agriculture, grain processing and handling, or food industry equipment.',
        },
        {
          label: '02',
          title: 'Describe the operation or production activity',
          body: 'Identify the work being done, the material or product involved, and the current workflow that needs equipment support.',
        },
        {
          label: '03',
          title: 'Share site and workflow requirements',
          body: 'Prepare the site limits, process requirements, handling steps, and expected equipment needs before requesting a quote.',
        },
        {
          label: '04',
          title: 'Start a focused quote discussion',
          body: 'Use the quote page to share enough context for the first response to focus on relevant equipment details.',
        },
      ],
    },
    cta: {
      eyebrow: 'Equipment inquiry',
      title: 'Planning an equipment inquiry?',
      body: 'Share the category, operation, material or product type, current workflow, site limits, and expected equipment need so the first discussion can start with relevant details.',
      label: 'Request a Quote',
      href: siteRoutes.en[routeKeys.quote],
    },
  },
};
