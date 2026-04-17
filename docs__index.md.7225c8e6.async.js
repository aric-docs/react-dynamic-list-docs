"use strict";(self.webpackChunk_jswork_react_dynamic_list_docs=self.webpackChunk_jswork_react_dynamic_list_docs||[]).push([[935],{18923:function(i,s,_){_.r(s);var d=_(43902),c=_(84426),r=_(19833),n=_(29841),a=_(21860),t=_(51648),o=_(37305),x=_(69677),E=_(48757),m=_(39398),u=_(35206),p=_(75271),l=_(59528),e=_(52676);function h(){return(0,e.jsx)(m.dY,{children:(0,e.jsx)(p.Suspense,{fallback:(0,e.jsx)(u.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)(t.Z,{lang:"bash",children:l.texts[0].value}),(0,e.jsxs)("h2",{id:"quick-start",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:l.texts[1].value})]})})})})}s.default=h},48757:function(i,s,_){var d=_(52676);function c(n){var a=n.title,t=n.className,o=n.children;return _jsxs("article",{className:"p-6 bg-white rounded-xl shadow-md border ".concat(t||""),children:[_jsx("h3",{className:"text-lg font-bold mb-3",children:a}),o]})}var r=null},59528:function(i,s,_){_.r(s),_.d(s,{texts:function(){return d}});const d=[{value:`npm install @jswork/react-dynamic-list @jswork/react-list
`,paraId:0,tocIndex:0},{value:`import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const defaults = (): Todo => ({
  id: crypto.randomUUID(),
  title: '',
  done: false,
});

// Declarative
<DynamicList<Todo>
  name="todos"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  slots={{
    item: ({ item }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;

// Imperative
function Controls() {
  const { state, actions } = useCommand<Todo>('todos', { defaults, max: 5 });
  return (
    <>
      <button disabled={!state.canAdd} onClick={actions.add}>
        Add
      </button>
      <button
        disabled={!state.canRemove}
        onClick={() => actions.remove(state.list.length - 1)}
      >
        Remove Last
      </button>
    </>
  );
}
`,paraId:1,tocIndex:1}]}}]);
