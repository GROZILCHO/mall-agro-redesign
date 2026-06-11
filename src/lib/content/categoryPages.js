export const categoryPageContent = {
  en: {
    agriculture: {
      categoryId: 'agriculture',
      hero: {
        eyebrow: 'Agriculture equipment category',
        title: 'Agriculture Equipment and Project-Oriented Inquiry Support',
        body: 'Use this category as a starting point for equipment discussions related to agricultural operations, field-related workflows, and preparation needs.',
      },
      imageSlots: {
        hero: {
          id: 'agriculture-hero',
          role: 'Category hero visual',
          label: 'Field operations',
          title: 'Agricultural equipment in operating context',
          body: 'Use this category to frame field-related equipment and workflow discussions.',
          intent: 'Immediate category recognition and agriculture equipment identity.',
          asset: '/images/categories/agriculture/agriculture-hero-project-context.webp',
        },
        operatingContexts: [
          {
            id: 'field-operations',
            role: 'Application context visual',
            label: 'Field operations',
            title: 'Agricultural workflow context',
            body: 'Frame equipment needs around field-related workflows and operating conditions.',
            intent: 'Help visitors identify field-operation needs.',
            asset: '/images/categories/agriculture/agriculture-context-field-workflows.webp',
          },
          {
            id: 'preparation-handling',
            role: 'Application context visual',
            label: 'Preparation and handling',
            title: 'Material preparation context',
            body: 'Clarify preparation, handling, or pre-processing needs before a project discussion.',
            intent: 'Support preparation and handling inquiry framing.',
            asset: '/images/categories/agriculture/agriculture-context-preparation-handling.webp',
          },
          {
            id: 'equipment-planning',
            role: 'Application context visual',
            label: 'Equipment planning',
            title: 'Project inquiry context',
            body: 'Use category-level context to shape the first equipment inquiry conversation.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-project-inquiry.webp',
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Machinery and workflow direction',
          body: 'Frame the workflow, application, and project context before moving into equipment-specific discussion.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Project conversation sequence',
          body: 'Move from category interest toward a clearer project conversation with practical operating context.',
          intent: 'Clarify the inquiry path without turning the page into a product grid.',
          asset: null,
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
          'Field equipment direction',
          'Workflow or application context',
          'Material preparation needs',
          'Project inquiry details',
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
