// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'helpemefindlaw',
  tagline: 'Your AI legal research assistant',
  favicon: 'img/hmfl-logo.png',
  url: 'https://docs.helpmefindlaw.com',
  baseUrl: '/',
  organizationName: 'helpmefindlaw', // Usually your GitHub org/user name.
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/helpmefindlaw/docs/tree/main',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/helpmefindlaw/docs/tree/main',
        },
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
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          helpmefindlaw: {
            specPath: "openapi/openapi.json", // Path to designated spec file
            outputDir: "docs/reference", // Output directory for generated .mdx docs
            // sidebarOptions: {
            //   groupPathsBy: "tag",
            // },
          }
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'helpmefindlaw',
        logo: {
          alt: 'helpmefindlaw',
          src: 'img/hmfl-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sources',
            label: 'Sources', 
            position: 'left'
        },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Sources',
                to: '/docs/sources',
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
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
