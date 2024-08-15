/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  userGuide: [
    'introduction',
    {
      type: 'category',
      label: 'Features',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/features/workforce',
        'user-guide/features/workflows',
        'user-guide/features/workflow-builder',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/getting-started/setup', 'user-guide/getting-started/first-workflow'],
    },
    {
      type: 'category',
      label: 'Creating Employees',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/overview-of-interface',
        'user-guide/adding-connecting-blocks',
        'user-guide/working-with-flows',
        'user-guide/working-with-workflows',
        'user-guide/executing-ai-chains',
        'user-guide/batching',
        'user-guide/subflows',
      ],
    },
    {
      type: 'category',
      label: 'Working with Workflows',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/overview-of-interface',
        'user-guide/adding-connecting-blocks',
        'user-guide/working-with-flows',
        'user-guide/working-with-workflows',
        'user-guide/executing-ai-chains',
        'user-guide/batching',
        'user-guide/subflows',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsible: true,
      collapsed: true,
      items: [
        'user-guide/plugins', 
      ],
    },
    'user-guide/live-debugging',
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/data-types', 'user-guide/control-flow', 'user-guide/loops'],
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
        'block-reference/RNG'
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
