export const categoryPageContent = {
  en: {
    agriculture: {
      categoryId: 'agriculture',
      layoutVariant: 'agriculture-ux-v1',
      hero: {
        eyebrow: 'Agriculture Equipment Category',
        title: 'Agriculture Equipment for Field Operations, Material Handling and Operational Planning',
        body: 'Agricultural operations combine field work, material movement and seasonal planning into one continuous workflow. Understanding how these activities connect before discussing equipment creates a stronger foundation for practical project planning and more informed equipment decisions.',
      },
      imageSlots: {
        hero: {
          id: 'agriculture-hero',
          role: 'Category hero visual',
          label: 'Hero Information Card',
          title: 'Operational Focus',
          body: 'Field preparation, cultivation, harvesting support and material handling work together as one operational system. Planning equipment around the complete workflow leads to more effective project discussions.',
          intent: 'Immediate category recognition and agriculture equipment identity.',
          asset: '/images/categories/agriculture/agriculture-hero-project-context.webp',
        },
        operatingContexts: [
          {
            id: 'field-operations',
            role: 'Application context visual',
            label: 'Operational Context 01',
            title: 'Field Operations',
            body: 'Land preparation, cultivation and seasonal field work depend on changing terrain, weather conditions and production schedules. Equipment planning should reflect how these practical conditions influence day-to-day operations.',
            intent: 'Help visitors identify field-operation needs.',
            asset: '/images/categories/agriculture/agriculture-context-field-workflows.webp',
          },
          {
            id: 'preparation-handling',
            role: 'Application context visual',
            label: 'Operational Context 02',
            title: 'Material Preparation and Handling',
            body: 'Collecting, loading and transferring agricultural materials before transport, storage or further processing often determines how efficiently the wider operation performs.',
            intent: 'Support preparation and handling inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-preparation-handling.webp',
          },
          {
            id: 'equipment-planning',
            role: 'Application context visual',
            label: 'Operational Context 03',
            title: 'Operational Planning',
            body: 'Production objectives, existing workflows and available infrastructure all contribute to equipment planning. Considering these factors together creates a stronger basis for future project decisions.',
            intent: 'Support technical and non-technical inquiry planning.',
            asset: '/images/categories/agriculture/agriculture-context-project-inquiry.webp',
          },
        ],
        equipmentDirection: {
          id: 'equipment-direction',
          role: 'Equipment direction visual',
          label: 'Planning Before Selection',
          title: 'Understanding the Factors That Shape Equipment Planning',
          body: 'Successful equipment planning begins with understanding the operation rather than comparing individual machines. Field conditions, material characteristics, existing workflows and long-term project objectives all influence how equipment should support the production process. Reviewing these factors first creates a stronger basis for practical decisions and future project development.',
          intent: 'Connect the category to machinery and process logic.',
          asset: null,
          renderCard: false,
        },
        workflow: {
          id: 'inquiry-workflow',
          role: 'Process graphic slot',
          label: 'Project Preparation',
          title: 'Building Better Equipment Discussions',
          body: 'Every agricultural operation has different priorities, constraints and development goals. Sharing operational information before discussing equipment helps focus the conversation on practical requirements instead of assumptions, creating a more productive starting point for future project planning.',
          intent: 'Clarify the inquiry path without turning the page into a product grid.',
          asset: null,
          renderCard: false,
        },
      },
      pageNavigation: [
        {
          label: 'Overview',
          href: '#overview',
        },
        {
          label: 'Operating contexts',
          href: '#applications',
        },
        {
          label: 'Equipment planning',
          href: '#equipment-direction',
        },
        {
          label: 'Project discussion',
          href: '#inquiry',
        },
      ],
      categoryIntent: [
        'Field operations',
        'Material handling',
        'Operational planning',
        'Project discussion',
      ],
      currentCategory: {
        label: 'Current Category',
        title: 'Agriculture',
        body: 'This category focuses on agricultural operations where equipment planning begins with understanding the workflow, the operating conditions and the objectives of the project before selecting equipment.',
      },
      applicationHeading: 'Where Agricultural Equipment Supports Daily Operations',
      overview: {
        eyebrow: 'Operational Overview',
        title: 'Understanding Agricultural Operations Before Equipment Decisions',
        body: [
          'Agricultural operations involve far more than individual field activities. Field work, material handling, seasonal timing and production planning influence one another throughout the production cycle. Looking at the complete operation before discussing equipment helps establish practical project priorities and supports decisions that remain effective as the operation develops.',
          'Equipment planning therefore begins with understanding how the operation functions today rather than comparing machines in isolation.',
        ],
      },
      applicationEyebrow: 'Typical Operational Environments',
      applicationIntro: 'Equipment planning differs according to the operational environment. These examples illustrate common situations where understanding the workflow becomes the starting point for selecting an appropriate equipment direction.',
      applicationAreas: [
        {
          title: 'Field Operations',
          body: 'Land preparation, cultivation and seasonal field work depend on changing terrain, weather conditions and production schedules. Equipment planning should reflect how these practical conditions influence day-to-day operations.',
        },
        {
          title: 'Material Preparation and Handling',
          body: 'Collecting, loading and transferring agricultural materials before transport, storage or further processing often determines how efficiently the wider operation performs.',
        },
        {
          title: 'Operational Planning',
          body: 'Production objectives, existing workflows and available infrastructure all contribute to equipment planning. Considering these factors together creates a stronger basis for future project decisions.',
        },
      ],
      equipmentDirection: {
        eyebrow: 'Planning Before Selection',
        title: 'Understanding the Factors That Shape Equipment Planning',
        intro: 'Successful equipment planning begins with understanding the operation rather than comparing individual machines. Field conditions, material characteristics, existing workflows and long-term project objectives all influence how equipment should support the production process. Reviewing these factors first creates a stronger basis for practical decisions and future project development.',
        items: [
          {
            title: 'Field Conditions',
            body: 'Terrain, weather, working space and seasonal conditions influence how equipment performs in daily operation.',
          },
          {
            title: 'Material Characteristics',
            body: 'Material type, handling method, production volumes and seasonal variation all influence equipment planning.',
          },
          {
            title: 'Existing Workflow',
            body: "Understanding today's process helps identify bottlenecks, repeated handling and opportunities for improvement.",
          },
          {
            title: 'Project Objectives',
            body: 'Production goals, efficiency targets and future expansion plans provide direction for equipment planning.',
          },
        ],
      },
      inquiryWorkflow: {
        eyebrow: 'Project Preparation',
        title: 'Building Better Equipment Discussions',
        intro: 'Every agricultural operation has different priorities, constraints and development goals. Sharing operational information before discussing equipment helps focus the conversation on practical requirements instead of assumptions, creating a more productive starting point for future project planning.',
        steps: [
          {
            title: 'Describe Your Operation',
            body: 'Explain the agricultural activity and the role the planned equipment should support.',
          },
          {
            title: 'Explain Your Workflow',
            body: 'Describe how materials move through the operation and where challenges typically occur.',
          },
          {
            title: 'Define Your Objectives',
            body: 'Clarify the expected results, whether improving efficiency, increasing capacity or preparing for future development.',
          },
        ],
      },
      inquiryPreparation: {
        eyebrow: 'Project Information',
        title: 'Information That Supports Better Equipment Planning',
        intro: 'Providing a basic understanding of the operation before the first discussion helps establish the operational context and allows equipment planning to begin with practical information rather than assumptions.',
        items: [
          {
            title: 'Operational Activity',
            body: 'Primary agricultural activity, production type and seasonal characteristics.',
          },
          {
            title: 'Material Profile',
            body: 'Material type, production volumes and handling conditions relevant to the project.',
          },
          {
            title: 'Existing Operation',
            body: 'Current workflow, available equipment and operational challenges.',
          },
          {
            title: 'Future Development',
            body: 'Planned improvements, production targets and future operational priorities.',
          },
        ],
      },
      beyondField: {
        eyebrow: 'Beyond the Field',
        title: 'Agriculture Is the First Stage of a Connected Production Workflow',
        intro: 'Field operations are only one part of the production journey. After harvesting, agricultural materials typically continue through handling, storage and processing environments where new operational requirements influence equipment planning.',
        links: [
          {
            label: 'Grain Processing & Handling',
            href: '/products/grain-processing',
            body: 'Post-harvest operations focus on receiving, cleaning, conveying, drying and storing agricultural materials while maintaining product quality and operational continuity.',
            ctaLabel: 'Explore Grain Processing & Handling →',
          },
          {
            label: 'Food Industry Equipment',
            href: '/products/food-industry-equipment',
            body: 'Many agricultural products continue into food production where preparation, processing and packaging create a new set of operational requirements and equipment priorities.',
            ctaLabel: 'Explore Food Industry Equipment →',
          },
        ],
      },
      cta: {
        eyebrow: 'Start with the Operation',
        title: 'Every Successful Equipment Project Begins with Understanding the Operation',
        body: 'The most productive equipment discussions begin with a clear understanding of how the operation works today and what it should achieve tomorrow. Starting with the operational context creates a stronger foundation for planning, investment and long-term development.',
        label: 'Discuss Your Project',
        href: '/quote',
        supportingText: 'Tell us about your operation, workflow and project objectives. We will use this information as the starting point for a structured equipment discussion.',
      },
      relatedCategories: {
        eyebrow: 'The Next Operational Stage',
        title: 'Beyond the field',
        links: [
          {
            label: 'Grain Processing & Handling',
            href: '/products/grain-processing',
          },
          {
            label: 'Food Industry Equipment',
            href: '/products/food-industry-equipment',
          },
        ],
      },
      closingStatement: [
        'Agriculture is more than equipment.',
        'It is a connected operational system where field activities, material movement and production objectives shape every project decision.',
        'Understanding comes first.',
        'Equipment follows.',
      ],
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
