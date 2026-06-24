export const categoryPageContent = {
  en: {
    agriculture: {
      categoryId: 'agriculture',
      hero: {
        eyebrow: 'Agriculture equipment category',
        title: 'Agriculture Equipment for Field Workflows and Project Planning',
        body: 'Plan agriculture equipment needs around field activity, preparation tasks, material handling, and the site details that shape a useful inquiry.',
      },
      imageSlots: {
        hero: {
          id: 'agriculture-hero',
          role: 'Category hero visual',
          label: 'Field operations',
          title: 'Field operations and equipment planning',
          body: 'Review field activity, working conditions, and the equipment requirements that may need to be planned.',
          intent: 'Immediate category recognition and agriculture equipment identity.',
          asset: '/images/categories/agriculture/agriculture-hero-project-context.webp',
        },
        operatingContexts: [
          {
            id: 'field-operations',
            role: 'Application context visual',
            label: 'Field operations',
            title: 'Field Operations',
            body: 'For field work, crop-related activity, site conditions, and equipment used around day-to-day agricultural operations.',
            intent: 'Help visitors identify field-operation needs.',
            asset: '/images/categories/agriculture/agriculture-context-field-workflows.webp',
          },
          {
            id: 'preparation-handling',
            role: 'Application context visual',
            label: 'Preparation and handling',
            title: 'Preparation & Handling',
            body: 'For preparing, moving, grouping, or handling agricultural materials before the next work step.',
            intent: 'Support preparation and handling inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-preparation-handling.webp',
          },
          {
            id: 'equipment-planning',
            role: 'Application context visual',
            label: 'Equipment planning',
            title: 'Project Inquiry Planning',
            body: 'For early planning when the operation, site limits, current process, and likely equipment needs still need to be clarified.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-project-inquiry.webp',
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment needs and workflow fit',
          body: 'Connect field activity, preparation requirements, handling needs, and site planning details before narrowing the options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing an agriculture equipment inquiry',
          body: 'Bring together the operation type, material handled, current work steps, and expected equipment needs before sending an inquiry.',
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
      applicationHeading: 'Where the agriculture category can support inquiry framing',
      overview: {
        title: 'Agriculture category scope',
        body: [
          'The Agriculture category covers field operations, agricultural workflows, preparation activities, and material handling needs around farming-related projects.',
          'Use this page to prepare the first inquiry around the operation, current work steps, material or activity involved, and possible equipment requirements.',
        ],
      },
      applicationAreas: [
        {
          title: 'Field Operations',
          body: 'Choose this area when the inquiry starts from field activity, working conditions, seasonal tasks, or equipment used around agricultural work.',
        },
        {
          title: 'Preparation & Handling',
          body: 'Choose this area when the work includes preparing, collecting, moving, or handling agricultural materials before storage, processing, or another step.',
        },
        {
          title: 'Project Inquiry Planning',
          body: 'Choose this area when the next step is to describe the operation, site limits, gaps in the current process, and the equipment needs to review.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment needs this category can help organize',
        items: [
          'Field equipment needs connected to agricultural operations and working conditions',
          'Preparation workflows that need equipment for organizing, moving, or handling materials',
          'Handling requirements around material flow, site layout, and integration with existing work steps',
          'Project planning details that help define the equipment requirements before a quote request',
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
            title: 'Clarify the equipment need',
            body: 'Indicate the equipment type you expect, any known site limits, and the information needed for the next planning step.',
          },
        ],
      },
      inquiryPreparation: {
        title: 'Before sending an inquiry, prepare these details',
        items: [
          'Operation type, such as field work, preparation, handling, or another agricultural activity',
          'Material handled, including its condition, volume range, or handling requirements if known',
          'Current workflow, including the steps before and after the equipment would be used',
          'Expected equipment type, site constraints, or questions that should guide the first discussion',
        ],
      },
      cta: {
        eyebrow: 'Project-oriented inquiry',
        title: 'Share the context for an agriculture equipment inquiry',
        body: 'Use the inquiry page to describe the operation, material, current work steps, and equipment needs so the first response can focus on the relevant details.',
        label: 'Request a Quote',
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
    'food-industry-equipment': {
      categoryId: 'food-industry-equipment',
      hero: {
        eyebrow: 'Food industry equipment category',
        title: 'Food Industry Equipment for Production Workflow Planning',
        body: 'Plan food industry equipment needs around production workflows, processing environments, preparation and handling steps, and line-planning details.',
      },
      imageSlots: {
        hero: {
          id: 'food-industry-hero',
          role: 'Category hero visual',
          label: 'Production workflow',
          title: 'Food production equipment in workflow context',
          body: 'Review production activity, processing steps, and the equipment requirements that may need to be planned.',
          intent: 'Immediate category recognition and food industry equipment identity.',
          asset: '/images/categories/food-industry/food-industry-hero-production-process.webp',
        },
        operatingContexts: [
          {
            id: 'production-workflows',
            role: 'Application context visual',
            label: 'Production workflows',
            title: 'Food Production Workflows',
            body: 'For preparation, processing, handling, or movement of food materials through a production environment.',
            intent: 'Help visitors identify production workflow needs.',
            asset: null,
          },
          {
            id: 'line-planning',
            role: 'Application context visual',
            label: 'Line planning',
            title: 'Production Line Planning',
            body: 'For planning how equipment fits existing steps, available space, operator access, and downstream handling.',
            intent: 'Support production line and equipment planning.',
            asset: null,
          },
          {
            id: 'equipment-inquiry',
            role: 'Application context visual',
            label: 'Equipment inquiry',
            title: 'Project Inquiry Preparation',
            body: 'For early planning when the product type, current process, site limits, and expected setup need to be clarified.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: null,
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment needs and workflow fit',
          body: 'Connect preparation steps, processing requirements, handling needs, and line-planning details before narrowing the options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing a food industry equipment inquiry',
          body: 'Bring together the product type, current process, production environment, and expected equipment needs before sending an inquiry.',
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
        'Production workflows',
        'Processing context',
        'Line planning',
        'Inquiry preparation',
      ],
      applicationHeading: 'Where food industry equipment can support inquiry framing',
      overview: {
        title: 'Food Industry Equipment category scope',
        body: [
          'The Food Industry Equipment category covers food production workflows, preparation and handling steps, processing environments, and production line planning.',
          'Use this page to prepare an early inquiry around the product type, current process, production setting, and equipment needs that should be reviewed.',
        ],
      },
      applicationAreas: [
        {
          title: 'Food Production Workflows',
          body: 'Choose this area when the inquiry starts from preparation, processing, handling, or movement of food materials through a production workflow.',
        },
        {
          title: 'Production Line Planning',
          body: 'Choose this area when equipment needs to connect with existing work steps, available space, operator access, or downstream production activity.',
        },
        {
          title: 'Project Inquiry Preparation',
          body: 'Choose this area when the next step is to describe the product type, current process, production environment, and equipment need.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment needs this category can help organize',
        items: [
          'Food production equipment needs connected to preparation, processing, or handling workflows',
          'Production line planning where equipment must fit existing steps or available working space',
          'Handling requirements around material flow, operator access, hygiene-sensitive environments, or downstream steps',
          'Project planning details that help define equipment requirements before a quote request',
        ],
      },
      inquiryWorkflow: {
        title: 'How to prepare an effective equipment inquiry',
        steps: [
          {
            title: 'Describe the production activity',
            body: 'Start with the food product type, production step, and workflow where equipment is needed.',
          },
          {
            title: 'Explain the current workflow',
            body: 'Share how preparation, processing, handling, or downstream steps currently work and where support is needed.',
          },
          {
            title: 'Clarify the equipment need',
            body: 'Indicate the expected equipment type, known limits, and the information required for the next planning step.',
          },
        ],
      },
      inquiryPreparation: {
        title: 'Before sending an inquiry, prepare these details',
        items: [
          'Product type or food material involved in the production workflow',
          'Current preparation, processing, handling, or downstream steps',
          'Production environment details, including space, access, or hygiene-sensitive requirements if known',
          'Expected equipment need, project constraints, or questions that should guide the first discussion',
        ],
      },
      cta: {
        eyebrow: 'Equipment inquiry',
        title: 'Share the context for a food industry equipment inquiry',
        body: 'Use the inquiry page to describe the product type, production workflow, current process, and equipment need so the first response can focus on the relevant details.',
        label: 'Request a Quote',
        href: '/quote',
      },
      relatedCategories: {
        eyebrow: 'Continue browsing',
        title: 'Related equipment categories',
        links: [
          {
            label: 'Agriculture',
            href: '/products/agriculture',
          },
          {
            label: 'Grain Processing / Grain Handling',
            href: '/products/grain-processing',
          },
        ],
      },
    },
    'grain-processing-handling': {
      categoryId: 'grain-processing-handling',
      hero: {
        eyebrow: 'Grain processing and handling category',
        title: 'Grain Processing and Handling Equipment Planning',
        body: 'Plan grain equipment needs around reception, cleaning and preparation, conveying and elevation, storage-adjacent handling, and process flow.',
      },
      imageSlots: {
        hero: {
          id: 'grain-processing-hero',
          role: 'Category hero visual',
          label: 'Grain workflow',
          title: 'Grain handling and processing workflow context',
          body: 'Review the grain flow, handling steps, and equipment requirements that may need to be planned.',
          intent: 'Immediate category recognition and grain processing equipment identity.',
          asset: null,
        },
        operatingContexts: [
          {
            id: 'reception-intake',
            role: 'Application context visual',
            label: 'Reception and intake',
            title: 'Grain Reception and Intake',
            body: 'For receiving grain, planning intake flow, and understanding how material enters the handling or preparation process.',
            intent: 'Help visitors identify grain intake and reception needs.',
            asset: null,
          },
          {
            id: 'cleaning-preparation',
            role: 'Application context visual',
            label: 'Cleaning and preparation',
            title: 'Cleaning and Preparation',
            body: 'For cleaning, preparing, sorting, or conditioning grain before storage, handling, or further processing steps.',
            intent: 'Support grain cleaning and preparation inquiry planning.',
            asset: null,
          },
          {
            id: 'conveying-storage-handling',
            role: 'Application context visual',
            label: 'Conveying and handling',
            title: 'Conveying, Elevation, and Storage-Adjacent Handling',
            body: 'For moving grain between process steps, elevation points, storage areas, or production-line connections.',
            intent: 'Support conveying, elevation, and storage-adjacent handling planning.',
            asset: null,
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment needs and grain workflow fit',
          body: 'Connect reception, cleaning, conveying, elevation, and storage-adjacent handling requirements before narrowing the options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing a grain processing equipment inquiry',
          body: 'Bring together the grain type, current flow, handling steps, site limits, and expected equipment needs before sending an inquiry.',
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
        'Reception and intake',
        'Cleaning context',
        'Conveying and elevation',
        'Inquiry preparation',
      ],
      applicationHeading: 'Where grain processing and handling can support inquiry framing',
      overview: {
        title: 'Grain Processing / Grain Handling category scope',
        body: [
          'The Grain Processing / Grain Handling category covers grain reception, cleaning and preparation, conveying and elevation, storage-adjacent handling, and process flow planning.',
          'Use this page to prepare an early inquiry around the grain material, current flow, handling requirements, site context, and equipment needs that should be reviewed.',
        ],
      },
      applicationAreas: [
        {
          title: 'Grain Reception and Intake',
          body: 'Choose this area when the inquiry starts from receiving grain, planning intake flow, or connecting incoming material with the next preparation or handling step.',
        },
        {
          title: 'Cleaning and Preparation',
          body: 'Choose this area when grain needs to be cleaned, prepared, sorted, or conditioned before storage, processing, or another handling stage.',
        },
        {
          title: 'Conveying, Elevation, and Storage-Adjacent Handling',
          body: 'Choose this area when the work involves moving grain between steps, lifting material, connecting storage areas, or planning process flow.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment needs this category can help organize',
        items: [
          'Grain reception and intake discussions connected to incoming material flow and site layout',
          'Cleaning and preparation workflows that need equipment for organizing grain before the next step',
          'Conveying and elevation requirements around material movement, transfer points, and storage-adjacent handling',
          'Project planning details for farms, mills, storage operators, or processors before a quote request',
        ],
      },
      inquiryWorkflow: {
        title: 'How to prepare an effective equipment inquiry',
        steps: [
          {
            title: 'Describe the grain workflow',
            body: 'Start with the grain material, site context, and the process step where equipment is needed.',
          },
          {
            title: 'Explain handling and preparation needs',
            body: 'Share how grain is received, cleaned, moved, elevated, stored, or prepared today and where support is needed.',
          },
          {
            title: 'Clarify the equipment need',
            body: 'Indicate the expected equipment type, known site limits, and the information required for the next planning step.',
          },
        ],
      },
      inquiryPreparation: {
        title: 'Before sending an inquiry, prepare these details',
        items: [
          'Grain type or material involved in the handling or processing workflow',
          'Current reception, cleaning, conveying, elevation, or storage-adjacent steps',
          'Site and process context, including transfer points, available space, or integration needs if known',
          'Expected equipment need, project constraints, or questions that should guide the first discussion',
        ],
      },
      cta: {
        eyebrow: 'Equipment inquiry',
        title: 'Share the context for a grain processing equipment inquiry',
        body: 'Use the inquiry page to describe the grain material, current flow, handling steps, and equipment need so the first response can focus on the relevant details.',
        label: 'Request a Quote',
        href: '/quote',
      },
      relatedCategories: {
        eyebrow: 'Continue browsing',
        title: 'Related equipment categories',
        links: [
          {
            label: 'Agriculture',
            href: '/products/agriculture',
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
