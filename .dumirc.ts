import { defineConfig } from 'dumi';
import * as path from 'node:path';

export default defineConfig({
  alias: {
    '@builtins': path.resolve(__dirname, '.dumi/theme/builtins'),
  },
  base: '/react-dynamic-list-docs/',
  publicPath: '/react-dynamic-list-docs/',
  logo: '/react-dynamic-list-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'react-dynamic-list-docs',
    description: 'react-dynamic-list docs.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        children: [
          { title: 'DynamicList', link: '/components/dynamic-list' },
          { title: 'useListContext', link: '/components/use-list-context' },
          { title: 'Store & Events', link: '/components/store-utilities' },
        ],
      },
      {
        title: 'Playground',
        link: '/playground',
      },
    ],
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/aric-tpls/react-dynamic-list-docs',
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
