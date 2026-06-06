export const categoryPageContent = {
  en: {
    agriculture: {
      categoryId: 'agriculture',
      hero: {
        eyebrow: 'Agriculture equipment category',
        title: 'Agriculture Equipment and Project-Oriented Inquiry Support',
        body: 'Use this category as a starting point for equipment discussions related to agricultural operations, field-related workflows, and preparation needs.',
      },
      visuals: {
        hero: {
          label: 'Category context',
          title: 'Agricultural equipment in operating context',
          note: 'A planned visual frame for field-related equipment and agricultural workflow context.',
        },
        operatingContexts: [
          {
            title: 'Field workflow context',
            note: 'A visual frame for agricultural operations and field-related workflow discussion.',
          },
          {
            title: 'Preparation and handling context',
            note: 'A visual frame for preparation, handling, and pre-processing inquiry context.',
          },
          {
            title: 'Equipment planning context',
            note: 'A visual frame for technical discussion and project-oriented equipment planning.',
          },
        ],
        equipmentDirection: {
          title: 'Equipment direction',
          note: 'A visual frame for machinery, workflow, or technical direction related to agricultural equipment inquiries.',
        },
      },
      pageNavigation: [
        {
          label: 'Overview',
          href: '#overview',
        },
        {
          label: 'Applications',
          href: '#applications',
        },
        {
          label: 'Equipment direction',
          href: '#equipment-direction',
        },
        {
          label: 'Inquiry',
          href: '#inquiry',
        },
      ],
      categoryIntent: [
        'Field workflows',
        'Preparation context',
        'Inquiry planning',
        'Project discussion',
      ],
      overview: {
        title: 'A category entry point for agricultural equipment needs',
        body: [
          'This page introduces the Agriculture category within the Mall Agro B2B equipment catalog.',
          'It is designed to help visitors frame an equipment inquiry before moving toward a more specific discussion.',
        ],
      },
      applicationAreas: [
        {
          title: 'Agricultural operations',
          body: 'Category-led browsing for field-related workflows and equipment direction.',
        },
        {
          title: 'Raw material preparation',
          body: 'A starting point for discussing preparation, handling, or pre-processing needs before a project proposal.',
        },
        {
          title: 'Equipment inquiry planning',
          body: 'A practical reference point for describing what type of equipment or workflow should be discussed.',
        },
      ],
      equipmentDirection: {
        title: 'What this category can help frame',
        items: [
          'equipment category direction',
          'application or workflow context',
          'initial project inquiry requirements',
          'future product-detail expansion after content approval',
        ],
      },
      inquiryWorkflow: {
        title: 'From category interest to project discussion',
        steps: [
          {
            title: 'Identify the operating context',
            body: 'Start with the type of agricultural workflow or application you want to discuss.',
          },
          {
            title: 'Describe the equipment direction',
            body: 'Use the category page as a reference point for describing the equipment need.',
          },
          {
            title: 'Move toward a project inquiry',
            body: 'Continue toward a practical inquiry or quote request when the category direction is clear.',
          },
        ],
      },
      inquiryPreparation: {
        title: 'Useful details before sending an inquiry',
        items: [
          'operation or application type',
          'material or workflow description',
          'existing process context',
          'expected equipment direction, if known',
        ],
      },
      cta: {
        eyebrow: 'Project-oriented inquiry',
        title: 'Start an agriculture equipment conversation',
        body: 'Use the quote page to share the category, application, workflow, or equipment direction you want to discuss.',
        label: 'Request a quote',
        href: '/quote',
      },
      relatedCategories: {
        eyebrow: 'Continue browsing',
        title: 'Related equipment categories',
        links: [
          {
            label: 'Grain Processing / Grain Handling',
            href: '/products/grain-processing',
          },
          {
            label: 'Food Industry Equipment',
            href: '/products/food-industry-equipment',
          },
        ],
      },
    },
  },
};
