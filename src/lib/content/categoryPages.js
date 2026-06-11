export const categoryPageContent = {
  en: {
    agriculture: {
      categoryId: 'agriculture',
      hero: {
        eyebrow: 'Agriculture equipment category',
        title: 'Agriculture Equipment for Field Workflows and Project Planning',
        body: 'Explore equipment discussions for agricultural operations, field workflows, preparation and handling activities, and the practical details needed before an inquiry.',
      },
      imageSlots: {
        hero: {
          id: 'agriculture-hero',
          role: 'Category hero visual',
          label: 'Field operations',
          title: 'Field operations and equipment planning',
          body: 'Review agricultural field activity, operating conditions, and the type of equipment direction that may need to be discussed.',
          intent: 'Immediate category recognition and agriculture equipment identity.',
          asset: '/images/categories/agriculture/agriculture-hero-project-context.webp',
        },
        operatingContexts: [
          {
            id: 'field-operations',
            role: 'Application context visual',
            label: 'Field operations',
            title: 'Field Operations',
            body: 'For discussions connected to field work, crop-related operations, site conditions, and equipment used around day-to-day agricultural activity.',
            intent: 'Help visitors identify field-operation needs.',
            asset: '/images/categories/agriculture/agriculture-context-field-workflows.webp',
          },
          {
            id: 'preparation-handling',
            role: 'Application context visual',
            label: 'Preparation and handling',
            title: 'Preparation & Handling',
            body: 'For workflows where materials need to be prepared, moved, grouped, or handled before the next agricultural or processing step.',
            intent: 'Support preparation and handling inquiry framing.',
            asset: '/images/categories/agriculture/agriculture-context-preparation-handling.webp',
          },
          {
            id: 'equipment-planning',
            role: 'Application context visual',
            label: 'Equipment planning',
            title: 'Project Inquiry Planning',
            body: 'For early-stage equipment discussions where the operation, workflow, constraints, and expected equipment direction still need to be clarified.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-project-inquiry.webp',
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment direction and workflow fit',
          body: 'Connect field activity, preparation requirements, handling needs, and project planning details before narrowing the discussion to equipment options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing an agriculture equipment inquiry',
          body: 'Bring together the operation type, material handled, current workflow, and expected equipment direction before sending an inquiry.',
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
        title: 'Agriculture category scope',
        body: [
          'The Agriculture category covers equipment discussions connected to field operations, agricultural workflows, preparation activities, and material handling needs around farming-related projects.',
          'Visitors can use this category to organize the first discussion around the operation, the current workflow, the material or activity involved, and the equipment direction that may need to be explored.',
        ],
      },
      applicationAreas: [
        {
          title: 'Field Operations',
          body: 'Use this context when the inquiry starts from field activity, operating conditions, seasonal tasks, or equipment used around agricultural work.',
        },
        {
          title: 'Preparation & Handling',
          body: 'Use this context when the workflow includes preparing, collecting, moving, or handling agricultural materials before storage, processing, or another project step.',
        },
        {
          title: 'Project Inquiry Planning',
          body: 'Use this context when the next step is to describe the operation, constraints, workflow gaps, and the equipment direction that should be discussed.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment discussions this category can support',
        items: [
          'Field equipment discussions connected to agricultural operations and working conditions',
          'Preparation workflows that need equipment for organizing, moving, or handling materials',
          'Handling requirements around material flow, site layout, and integration with existing work steps',
          'Project planning details that help define the right equipment conversation before a quote request',
        ],
      },
      inquiryWorkflow: {
        title: 'How to prepare an effective equipment inquiry',
        steps: [
          {
            title: 'Describe the operation',
            body: 'Start with the agricultural activity, site context, and the workflow where equipment is needed.',
          },
          {
            title: 'Explain the material and workflow',
            body: 'Share what is being handled or prepared, how the work is currently done, and where the process needs support.',
          },
          {
            title: 'Clarify the equipment direction',
            body: 'Indicate the type of equipment discussion you expect, any known constraints, and the information needed for the next conversation.',
          },
        ],
      },
      inquiryPreparation: {
        title: 'Before sending an inquiry, prepare these details',
        items: [
          'Operation type, such as field work, preparation, handling, or another agricultural activity',
          'Material handled, including its condition, volume range, or handling requirements if known',
          'Current workflow, including the steps before and after the equipment would be used',
          'Expected equipment direction, site constraints, or questions that should guide the first discussion',
        ],
      },
      cta: {
        eyebrow: 'Project-oriented inquiry',
        title: 'Share the context for an agriculture equipment inquiry',
        body: 'Use the inquiry page to describe the operation, material, current workflow, and equipment direction so the discussion can start with the right context.',
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
