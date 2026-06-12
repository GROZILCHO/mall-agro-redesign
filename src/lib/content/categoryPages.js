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
    'food-industry-equipment': {
      categoryId: 'food-industry-equipment',
      hero: {
        eyebrow: 'Food industry equipment category',
        title: 'Food Industry Equipment for Production Workflow Planning',
        body: 'Explore equipment discussions for food production environments, processing workflows, preparation and handling steps, and the practical details needed before an inquiry.',
      },
      imageSlots: {
        hero: {
          id: 'food-industry-hero',
          role: 'Category hero visual',
          label: 'Production workflow',
          title: 'Food production equipment in workflow context',
          body: 'Review food production activity, processing steps, and the equipment discussion that may need to be prepared.',
          intent: 'Immediate category recognition and food industry equipment identity.',
          asset: '/images/categories/food-industry/food-industry-hero-production-process.webp',
        },
        operatingContexts: [
          {
            id: 'production-workflows',
            role: 'Application context visual',
            label: 'Production workflows',
            title: 'Food Production Workflows',
            body: 'For discussions connected to preparation, processing, handling, or movement of food materials through a production environment.',
            intent: 'Help visitors identify production workflow needs.',
            asset: null,
          },
          {
            id: 'line-planning',
            role: 'Application context visual',
            label: 'Line planning',
            title: 'Production Line Planning',
            body: 'For workflows where equipment needs to fit into existing steps, available space, operator access, or downstream handling requirements.',
            intent: 'Support production line and equipment planning.',
            asset: null,
          },
          {
            id: 'equipment-inquiry',
            role: 'Application context visual',
            label: 'Equipment inquiry',
            title: 'Project Inquiry Preparation',
            body: 'For early-stage equipment discussions where the product type, workflow constraints, and expected production setup need to be clarified.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: null,
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment needs and workflow fit',
          body: 'Connect preparation steps, processing requirements, handling needs, and production planning details before narrowing the discussion to equipment options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing a food industry equipment inquiry',
          body: 'Bring together the product type, current workflow, production environment, and expected equipment needs before sending an inquiry.',
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
      overview: {
        title: 'Food Industry Equipment category scope',
        body: [
          'The Food Industry Equipment category covers equipment discussions connected to food production workflows, preparation and handling steps, processing environments, and production line planning.',
          'Visitors can use this category to organize an early discussion around the product type, current workflow, production setting, and equipment needs that should be explored.',
        ],
      },
      applicationAreas: [
        {
          title: 'Food Production Workflows',
          body: 'Use this context when the inquiry starts from preparation, processing, handling, or movement of food materials through a production workflow.',
        },
        {
          title: 'Production Line Planning',
          body: 'Use this context when equipment needs to connect with existing work steps, available space, operator access, or downstream production activity.',
        },
        {
          title: 'Project Inquiry Preparation',
          body: 'Use this context when the next step is to describe the product type, workflow constraints, production environment, and equipment discussion needed.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment discussions this category can support',
        items: [
          'Food production equipment discussions connected to preparation, processing, or handling workflows',
          'Production line planning where equipment must fit existing steps or available working space',
          'Handling requirements around material flow, operator access, hygiene-sensitive environments, or downstream discussion',
          'Project planning details that help define the right equipment discussion before a quote request',
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
            title: 'Clarify the equipment discussion',
            body: 'Indicate the expected equipment need, known constraints, and the information required for the next project conversation.',
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
        body: 'Use the inquiry page to describe the product type, production workflow, current process, and equipment need so the discussion can start with the right context.',
        label: 'Request a quote',
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
        body: 'Explore equipment discussions for grain reception, cleaning and preparation, conveying and elevation, storage-adjacent handling, and the practical details needed before an inquiry.',
      },
      imageSlots: {
        hero: {
          id: 'grain-processing-hero',
          role: 'Category hero visual',
          label: 'Grain workflow',
          title: 'Grain handling and processing workflow context',
          body: 'Review the grain flow, handling steps, and equipment discussion that may need to be prepared.',
          intent: 'Immediate category recognition and grain processing equipment identity.',
          asset: null,
        },
        operatingContexts: [
          {
            id: 'reception-intake',
            role: 'Application context visual',
            label: 'Reception and intake',
            title: 'Grain Reception and Intake',
            body: 'For discussions connected to receiving grain, planning intake flow, and understanding how material enters the handling or preparation process.',
            intent: 'Help visitors identify grain intake and reception needs.',
            asset: null,
          },
          {
            id: 'cleaning-preparation',
            role: 'Application context visual',
            label: 'Cleaning and preparation',
            title: 'Cleaning and Preparation',
            body: 'For workflows where grain needs to be cleaned, prepared, sorted, or conditioned before storage, handling, or further processing steps.',
            intent: 'Support grain cleaning and preparation inquiry planning.',
            asset: null,
          },
          {
            id: 'conveying-storage-handling',
            role: 'Application context visual',
            label: 'Conveying and handling',
            title: 'Conveying, Elevation, and Storage-Adjacent Handling',
            body: 'For equipment discussions around moving grain between process steps, elevation points, storage areas, or production-line connections.',
            intent: 'Support conveying, elevation, and storage-adjacent handling planning.',
            asset: null,
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Equipment direction',
          title: 'Equipment needs and grain workflow fit',
          body: 'Connect reception, cleaning, conveying, elevation, and storage-adjacent handling requirements before narrowing the discussion to equipment options.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Inquiry workflow',
          title: 'Preparing a grain processing equipment inquiry',
          body: 'Bring together the grain type, current flow, handling steps, site constraints, and expected equipment needs before sending an inquiry.',
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
      overview: {
        title: 'Grain Processing / Grain Handling category scope',
        body: [
          'The Grain Processing / Grain Handling category covers equipment discussions connected to grain reception, cleaning and preparation, conveying and elevation, storage-adjacent handling, and process flow planning.',
          'Visitors can use this category to organize an early discussion around the grain material, current workflow, handling requirements, site context, and equipment needs that should be explored.',
        ],
      },
      applicationAreas: [
        {
          title: 'Grain Reception and Intake',
          body: 'Use this context when the inquiry starts from receiving grain, planning intake flow, or connecting incoming material with the next preparation or handling step.',
        },
        {
          title: 'Cleaning and Preparation',
          body: 'Use this context when grain needs to be cleaned, prepared, sorted, or conditioned before storage, processing, or another handling stage.',
        },
        {
          title: 'Conveying, Elevation, and Storage-Adjacent Handling',
          body: 'Use this context when the discussion involves moving grain between steps, lifting material, connecting storage areas, or planning process flow.',
        },
      ],
      equipmentDirection: {
        title: 'Equipment discussions this category can support',
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
            title: 'Clarify the equipment discussion',
            body: 'Indicate the expected equipment need, known constraints, and the information required for the next project conversation.',
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
        body: 'Use the inquiry page to describe the grain material, current workflow, handling steps, and equipment need so the discussion can start with the right context.',
        label: 'Request a quote',
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
