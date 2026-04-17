"use strict";(self.webpackChunk_jswork_react_dynamic_list_docs=self.webpackChunk_jswork_react_dynamic_list_docs||[]).push([[307],{39349:function(o,s,e){e.r(s);var d=e(43902),r=e(84426),l=e(19833),t=e(29841),a=e(21860),i=e(51648),c=e(37305),h=e(69677),y=e(48757),m=e(39398),u=e(35206),p=e(75271),n=e(43723),_=e(52676);function x(){return(0,_.jsx)(m.dY,{children:(0,_.jsx)(p.Suspense,{fallback:(0,_.jsx)(u.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"configuration",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Configuration"]}),(0,_.jsxs)("h2",{id:"dumi-configuration",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dumi-configuration",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Dumi Configuration"]}),(0,_.jsxs)("p",{children:[n.texts[0].value,(0,_.jsx)("code",{children:n.texts[1].value}),n.texts[2].value]}),(0,_.jsx)(i.Z,{lang:"ts",children:n.texts[3].value}),(0,_.jsxs)("h2",{id:"directory-structure",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#directory-structure",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Directory Structure"]}),(0,_.jsx)(i.Z,{children:n.texts[4].value}),(0,_.jsxs)("h2",{id:"more-configuration-options",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#more-configuration-options",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"More Configuration Options"]}),(0,_.jsxs)("p",{children:[n.texts[5].value,(0,_.jsx)("a",{href:"https://d.umijs.org/config",children:n.texts[6].value}),n.texts[7].value]})]})})})})}s.default=x},48757:function(o,s,e){var d=e(52676);function r(t){var a=t.title,i=t.className,c=t.children;return _jsxs("article",{className:"p-6 bg-white rounded-xl shadow-md border ".concat(i||""),children:[_jsx("h3",{className:"text-lg font-bold mb-3",children:a}),c]})}var l=null},43723:function(o,s,e){e.r(s),e.d(s,{texts:function(){return d}});const d=[{value:"The main configuration file is ",paraId:0,tocIndex:1},{value:".dumirc.ts",paraId:0,tocIndex:1},{value:" in the project root.",paraId:0,tocIndex:1},{value:`import { defineConfig } from 'dumi';

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
`,paraId:1,tocIndex:1},{value:`docs/
\u251C\u2500\u2500 index.md                          # Homepage
\u251C\u2500\u2500 guide/
\u2502   \u251C\u2500\u2500 getting-started.md            # Installation & Quick Start
\u2502   \u2514\u2500\u2500 architecture.md               # Architecture overview
\u251C\u2500\u2500 components/
\u2502   \u251C\u2500\u2500 dynamic-list.md               # DynamicList component
\u2502   \u251C\u2500\u2500 use-list-context.md           # useListContext hook
\u2502   \u2514\u2500\u2500 store-utilities.md            # Store & Event utilities
\u2514\u2500\u2500 playground/
    \u251C\u2500\u2500 index.md                      # Interactive demos
    \u2514\u2500\u2500 demos/
        \u251C\u2500\u2500 basic.tsx
        \u251C\u2500\u2500 todo-list.tsx
        \u2514\u2500\u2500 constraints.tsx
`,paraId:2,tocIndex:2},{value:"See the ",paraId:3,tocIndex:3},{value:"official dumi documentation",paraId:3,tocIndex:3},{value:" for all available options.",paraId:3,tocIndex:3}]}}]);
