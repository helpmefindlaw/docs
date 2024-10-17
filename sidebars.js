const sidebars = {
  userGuide: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        'introduction',  // Root Introduction Page
        {
          type: 'doc',
          id: 'product-overview/introduction/getting-started',
          label: 'Getting Started',
        },
      ],
    },
    {
      type: 'category',
      label: 'Workforce',
      collapsible: true,
      collapsed: true,
      items: [
        'product-overview/workforce/overview', 
        'product-overview/workforce/onboarding', 
        'product-overview/workforce/applications', 
        
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      collapsible: true,
      collapsed: true,
      items: [
        'product-overview/workflow/overview',
        'product-overview/workflow/overview-of-interface',
        'product-overview/workflow/blocks',
        'product-overview/workflow/working-with-flows',
        'product-overview/workflow/executing-ai-chains',
        'product-overview/workflow/live-debugging',
        'product-overview/workflow/data-types', 
        'product-overview/workflow/batching',
        'product-overview/workflow/subflows',
        'product-overview/workflow/control-flow', 
        'product-overview/workflow/loops'
      ],
    },
    {
      type: 'category',
      label: 'Document Stores',
      collapsible: true,
      collapsed: true,
      items: [
        'product-overview/document-store/document-stores-overview',
        'product-overview/document-store/how-it-works',
        'product-overview/document-store/user-benefits',
        'product-overview/document-store/metadata',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsible: true,
      collapsed: true,
      items: [
        'product-overview/workflow/plugins', 
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting & FAQ',
      collapsible: true,
      collapsed: true,
      items: [
        'product-overview/troubleshoot-faq/faq'
      ],
    },
  ],
  tutorial: [
    'tutorial',
    'tutorial/simple-flow',
    'tutorial/matching-conditionals',
    'tutorial/subflows',
    'tutorial/batching',
    'tutorial/loops',
  ],
  blockReference: [
    'block-reference',
    'block-reference/all-blocks',
    {
      type: 'category',
      label: 'Text',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/chunk',
        'block-reference/extract-with-regex',
        'block-reference/join',
        'block-reference/prompt',
        'block-reference/split-text',
        'block-reference/text',
      ],
    },
    {
      type: 'category',
      label: 'AI',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/chat',
      ],
    },
    {
      type: 'category',
      label: 'Lists',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/array',
        'block-reference/filter',
        'block-reference/pop',
        'block-reference/shuffle',
        'block-reference/slice',
      ],
    },
    {
      type: 'category',
      label: 'Numbers',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/evaluate', 
        'block-reference/RNG',
      ],
    },
    {
      type: 'category',
      label: 'Objects',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/destructure',
        'block-reference/extract-object-path',
        'block-reference/object',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/audio',
        'block-reference/bool',
        'block-reference/image',
        'block-reference/number', 
      ],
    },
    {
      type: 'category',
      label: 'Logic',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/abort-flow',
        'block-reference/coalesce',
        'block-reference/compare',
        'block-reference/delay',
        'block-reference/if',
        'block-reference/if-else',
        'block-reference/loop-controller',
        'block-reference/match',
        'block-reference/passthrough',
        'block-reference/race-inputs',
      ],
    },
    {
      type: 'category',
      label: 'Input/Output',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/input',
        'block-reference/output',
        'block-reference/read-file',
        'block-reference/user-input',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: true,
      items: [
        'block-reference/code',
        'block-reference/comment',
        'block-reference/context',
        'block-reference/external-call',
        'block-reference/get-global',
        'block-reference/http-call',
        'block-reference/raise-event',
        'block-reference/set-global',
        'block-reference/subflow',
        'block-reference/wait-for-event',
      ],
    },
  ]
};

module.exports = sidebars;
