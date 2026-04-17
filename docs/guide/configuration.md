---
title: Configuration
order: 2
---

# Configuration

## Dumi Configuration

The main configuration file is `.dumirc.ts` in the project root.

```ts
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-dynamic-list-docs/',
  publicPath: '/react-dynamic-list-docs/',
  logo: '/react-dynamic-list-docs/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'react-dynamic-list',
    description: 'react-dynamic-list docs.',
    nav: [
      { title: 'Guide', link: '/guide/getting-started' },
      { title: 'Components', children: [...] },
      { title: 'Playground', link: '/playground' },
    ],
    socialLinks: {
      github: 'https://github.com/aric-tpls/react-dynamic-list-docs',
    },
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
```

## Directory Structure

```
docs/
├── index.md                          # Homepage
├── guide/
│   ├── getting-started.md            # Installation & Quick Start
│   └── architecture.md               # Architecture overview
├── components/
│   ├── dynamic-list.md               # DynamicList component
│   ├── use-list-context.md           # useListContext hook
│   └── store-utilities.md            # Store & Event utilities
└── playground/
    ├── index.md                      # Interactive demos
    └── demos/
        ├── basic.tsx
        ├── todo-list.tsx
        └── constraints.tsx
```

## More Configuration Options

See the [official dumi documentation](https://d.umijs.org/config) for all available options.
