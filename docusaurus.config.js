// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lawme.ai',
  tagline: 'Virtual workforce and process automation platform',
  favicon: 'img/logo.svg',
  url: 'https://docs.lawme.ai',
  baseUrl: '/',
  organizationName: 'lawme.ai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
        },
        docs: {
          routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/helpmefindlaw/docs/tree/main',
          docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem",
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/helpmefindlaw/docs/tree/main',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: "G-831XHD3VGE",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    // [
      // 'docusaurus-plugin-openapi-docs',
      // {
      //   id: "apiDocs",
      //   docsPluginId: "classic",
      //   config: {
      //     lawme: {
      //       specPath: "openapi/openapi.json", // Path to designated spec file
      //       outputDir: "docs/reference", // Output directory for generated .mdx docs
      //       // sidebarOptions: {
      //       //   groupPathsBy: "tag",
      //       // },
      //     }
      //   }
      // },
    // ]
  ],
  // themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'lawme.ai',
          src: 'img/logo.svg',
          href: "https://lawme.ai"
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Product Overview',
          },
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'block-reference',
            position: 'left',
            label: 'Block Reference',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/helpmefindlaw/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorial',
              },
              {
                label: 'Block Reference',
                to: '/docs/block-reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/URGcgVHWup',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LAIW Pty Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["go", "python", "typescript", "bash"],

      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true
      },
    }),
};

module.exports = config;
