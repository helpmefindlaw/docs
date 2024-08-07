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
        'user-guide/features/applications',
        'user-guide/features/workflows',
        'user-guide/features/workflow-builder',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/getting-started/setup', 'user-guide/getting-started/first-ai-agent'],
    },
    {
      type: 'category',
      label: 'Working with Workflows',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/overview-of-interface',
        'user-guide/adding-connecting-nodes',
        'user-guide/working-with-graphs',
        'user-guide/working-with-projects',
        'user-guide/executing-ai-chains',
        'user-guide/splitting',
        'user-guide/subgraphs',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsible: true,
      collapsed: true,
      items: [
        'user-guide/applications',
        'user-guide/plugins', 
        'user-guide/plugins/creating-plugins'
      ],
    },
    {
      type: 'category',
      label: 'Built-In Plugins',
      collapsible: true,
      collapsed: true,
      items: [
        'user-guide/plugins/built-in/all',
        'user-guide/plugins/built-in/anthropic',
        'user-guide/plugins/built-in/assemblyai',
        'user-guide/plugins/built-in/autoevals',
        'user-guide/plugins/built-in/gentrace',
        'user-guide/plugins/built-in/huggingface',
        'user-guide/plugins/built-in/pinecone',
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
    'tutorial/simple-graph',
    'tutorial/interpolation-more-node-types',
    'tutorial/matching-conditionals',
    'tutorial/yaml',
    'tutorial/subgraphs',
    'tutorial/splitting',
    'tutorial/loops',
  ],

  nodeReference: [
    'node-reference',
    'node-reference/all-nodes',
    {
      type: 'category',
      label: 'Text',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/chunk',
        'node-reference/extract-markdown-code-blocks',
        'node-reference/extract-with-regex',
        'node-reference/join',
        'node-reference/prompt',
        'node-reference/split-text',
        'node-reference/text',
        'node-reference/to-yaml',
        'node-reference/to-json',
      ],
    },
    {
      type: 'category',
      label: 'AI',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/assemble-message',
        'node-reference/assemble-prompt',
        'node-reference/chat',
        'node-reference/gpt-function',
        'node-reference/get-embedding',
        'node-reference/trim-chat-messages',
      ],
    },

    {
      type: 'category',
      label: 'Lists',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/array',
        'node-reference/filter',
        'node-reference/pop',
        'node-reference/shuffle',
        'node-reference/slice',
      ],
    },
    {
      type: 'category',
      label: 'Numbers',
      collapsible: true,
      collapsed: true,
      items: ['node-reference/evaluate', 'node-reference/number', 'node-reference/RNG'],
    },
    {
      type: 'category',
      label: 'Objects',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/destructure',
        'node-reference/extract-json',
        'node-reference/extract-object-path',
        'node-reference/extract-yaml',
        'node-reference/object',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/audio',
        'node-reference/bool',
        'node-reference/hash',
        'node-reference/image',
        'node-reference/url-reference',
      ],
    },
    {
      type: 'category',
      label: 'Logic',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/abort-graph',
        'node-reference/coalesce',
        'node-reference/compare',
        'node-reference/delay',
        'node-reference/if',
        'node-reference/if-else',
        'node-reference/loop-controller',
        'node-reference/match',
        'node-reference/passthrough',
        'node-reference/race-inputs',
      ],
    },
    {
      type: 'category',
      label: 'Input/Output',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/append-to-dataset',
        'node-reference/create-dataset',
        'node-reference/get-all-datasets',
        'node-reference/get-dataset-row',
        'node-reference/graph-input',
        'node-reference/graph-output',
        'node-reference/knn-dataset',
        'node-reference/load-dataset',
        'node-reference/read-directory',
        'node-reference/read-file',
        'node-reference/replace-dataset',
        'node-reference/user-input',
        'node-reference/vector-store',
        'node-reference/vector-knn',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: true,
      items: [
        'node-reference/code',
        'node-reference/comment',
        'node-reference/context',
        'node-reference/external-call',
        'node-reference/get-global',
        'node-reference/http-call',
        'node-reference/raise-event',
        'node-reference/set-global',
        'node-reference/subgraph',
        'node-reference/wait-for-event',
      ],
    },
  ],
  sources: [{
    type: "category", 
    label: "Sources",
    collapsible: false,
    items: [{ type: "autogenerated", dirName: "sources",  }],
    link: {
      type: 'generated-index',
    slug: "sources",
    },
  }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
