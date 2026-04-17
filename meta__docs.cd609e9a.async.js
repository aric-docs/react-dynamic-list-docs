"use strict";(self.webpackChunk_jswork_react_dynamic_list_docs=self.webpackChunk_jswork_react_dynamic_list_docs||[]).push([[904],{59425:function(l,t,e){e.r(t),e.d(t,{DynamicList:function(){return J},addToList:function(){return F},emitChange:function(){return N},getList:function(){return D},removeAt:function(){return W},setList:function(){return K},subscribe:function(){return Z},updateAt:function(){return $},useListContext:function(){return H}});var a=e(75271),c=Object.defineProperty,m=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,i=(n,d,o)=>d in n?c(n,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[d]=o,g=(n,d)=>{for(var o in d||(d={}))R.call(d,o)&&i(n,o,d[o]);if(m)for(var o of m(d))b.call(d,o)&&i(n,o,d[o]);return n},A=(n,d)=>c(n,"name",{value:d,configurable:!0}),x=Symbol("react-list/self"),p=Symbol("react-list/index");function I(n){return n&&typeof n=="object"&&"component"in n}A(I,"isSlotConfig");function u(n,d,o){return n?typeof n=="function"?a.createElement(n,o!=null?g({key:o},d):d):I(n)?a.createElement(n.component,g(g({key:o},n.props),d)):o!==void 0?a.createElement(a.Fragment,{key:o},n):n:null}A(u,"renderSlot");function v(n,d,o,s){if(typeof s=="function")return s({item:n,index:d,data:o});if(s===x)return n;if(s===p)return d;let h=s.split("."),y=n;for(let P of h)y=y==null?void 0:y[P];return y!=null?y:d}A(v,"getKey");function C({data:n,keyExtractor:d="id",slots:o}){let s=(0,a.useMemo)(()=>n.map((h,y)=>v(h,y,n,d)),[n,d]);return n.length===0?a.createElement(a.Fragment,null,u(o.empty,{data:n})):a.createElement(a.Fragment,null,n.map((h,y)=>u(o.item,{item:h,index:y,data:n},s[y])))}A(C,"ReactList");var r=null,z=Object.defineProperty,j=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,V=(n,d,o)=>d in n?z(n,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[d]=o,X=(n,d)=>{for(var o in d||(d={}))G.call(d,o)&&V(n,o,d[o]);if(j)for(var o of j(d))Y.call(d,o)&&V(n,o,d[o]);return n},L=(n,d)=>z(n,"name",{value:d,configurable:!0}),_=(n,d)=>{var o={};for(var s in n)G.call(n,s)&&d.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&j)for(var s of j(n))d.indexOf(s)<0&&Y.call(n,s)&&(o[s]=n[s]);return o},T=new Map;function D(n){return T.has(n)||T.set(n,[]),T.get(n)}L(D,"getList");function K(n,d){T.set(n,[...d])}L(K,"setList");function W(n,d){let o=[...D(n)];o.splice(d,1),T.set(n,o)}L(W,"removeAt");function F(n,d){T.set(n,[...D(n),d])}L(F,"addToList");function $(n,d,o){let s=[...D(n)];s[d]=o(s[d]),T.set(n,s)}L($,"updateAt");var U=new Map;function Z(n,d){U.has(n)||U.set(n,new Set);let o=U.get(n);return o.add(d),()=>o.delete(d)}L(Z,"subscribe");function N(n,d,o){var s;(s=U.get(n))==null||s.forEach(h=>h(d,o))}L(N,"emitChange");function H(n,d){let[o,s]=(0,a.useState)(null);(0,a.useEffect)(()=>Z(n,(f,E)=>s({action:f,data:D(n),index:E})),[n]);let h=(0,a.useCallback)(()=>{let f=d==null?void 0:d.defaults();if(f===void 0)return;let E=D(n).length;F(n,f),N(n,"add",E)},[n,d]),y=(0,a.useCallback)((f,E)=>{$(n,f,E),N(n,"update",f)},[n]),P=(0,a.useCallback)(f=>{W(n,f),N(n,"remove",f)},[n]),w=(0,a.useCallback)(f=>{K(n,f),N(n,"reset")},[n]),O=D(n),S=d==null?void 0:d.max,B=d==null?void 0:d.min,M=S===void 0||O.length<S,k=B===void 0||O.length>B;return{list:O,change:o,add:h,remove:P,update:y,reset:w,canAdd:M,canRemove:k}}L(H,"useListContext");function J(n){let d=n,{name:o,data:s,min:h,max:y,defaults:P,onChange:w,keyExtractor:O=p}=d,S=_(d,["name","data","min","max","defaults","onChange","keyExtractor"]),{list:B,change:M,reset:k}=H(o,{min:h,max:y,defaults:P}),f=(0,a.useRef)(void 0),E=(0,a.useRef)(w);return(0,a.useEffect)(()=>{s&&s!==f.current&&k(s),f.current=s},[s,k]),E.current=w,(0,a.useEffect)(()=>{var Q;M&&((Q=E.current)==null||Q.call(E,M))},[M]),a.createElement(C,X({data:B,keyExtractor:O},S))}L(J,"DynamicList")},90265:function(l,t,e){var a;e.r(t),e.d(t,{demos:function(){return A}});var c=e(90228),m=e.n(c),R=e(87999),b=e.n(R),i=e(75271),g=e(59425),A={"docs-components-dynamic-list-demo-basic":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,11741))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1204).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"Basic list with add/remove"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}},"docs-components-dynamic-list-demo-todo-list":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,17222))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-todo-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99337).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"Todo list with inline editing"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}},"docs-components-dynamic-list-demo-constraints":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,52848))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-constraints",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9711).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"min/max constraints"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}}}},94668:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},5232:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},50177:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},77594:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},82822:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},16518:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},67486:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},38113:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},54070:function(l,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},73925:function(l,t,e){var a;e.r(t),e.d(t,{demos:function(){return A}});var c=e(90228),m=e.n(c),R=e(87999),b=e.n(R),i=e(75271),g=e(59425),A={"docs-playground-demo-basic":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,33901))})),asset:{type:"BLOCK",id:"docs-playground-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34175).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"Basic add/remove list"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}},"docs-playground-demo-todo-list":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,91589))})),asset:{type:"BLOCK",id:"docs-playground-demo-todo-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30842).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"Todo list with inline editing"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}},"docs-playground-demo-constraints":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,90230))})),asset:{type:"BLOCK",id:"docs-playground-demo-constraints",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87340).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"min/max constraints"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}},"docs-playground-demo-shared-state":{component:i.memo(i.lazy(function(){return e.e(433).then(e.bind(e,79113))})),asset:{type:"BLOCK",id:"docs-playground-demo-shared-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62661).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.1"}},entry:"index.tsx",title:"Two components sharing the same list"},context:{react:a||(a=e.t(i,2)),"@jswork/react-dynamic-list":g},renderOpts:{compile:function(){var x=b()(m()().mark(function I(){var u,v=arguments;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(321).then(e.bind(e,55321));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,v));case 3:case"end":return r.stop()}},I)}));function p(){return x.apply(this,arguments)}return p}()}}}},76843:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"The main declarative component. Wraps ",paraId:0,tocIndex:0},{value:"@jswork/react-list",paraId:0,tocIndex:0},{value:" with dynamic list management, slot-based rendering, and shared state.",paraId:0,tocIndex:0},{value:`import { DynamicList } from '@jswork/react-dynamic-list';
`,paraId:1,tocIndex:0},{value:"Prop",paraId:2,tocIndex:8},{value:"Type",paraId:2,tocIndex:8},{value:"Required",paraId:2,tocIndex:8},{value:"Description",paraId:2,tocIndex:8},{value:"name",paraId:2,tocIndex:8},{value:"string",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Unique key for the shared store",paraId:2,tocIndex:8},{value:"defaults",paraId:2,tocIndex:8},{value:"() => T",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Factory function for new items",paraId:2,tocIndex:8},{value:"data",paraId:2,tocIndex:8},{value:"T[]",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Initial data (syncs on change)",paraId:2,tocIndex:8},{value:"min",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Minimum list length",paraId:2,tocIndex:8},{value:"max",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Maximum list length",paraId:2,tocIndex:8},{value:"onChange",paraId:2,tocIndex:8},{value:"(event: ChangeEvent<T>) => void",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Callback on every mutation",paraId:2,tocIndex:8},{value:"slots",paraId:2,tocIndex:8},{value:"{ item: ComponentType; empty?: ComponentType }",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Slot components for rendering",paraId:2,tocIndex:8},{value:"keyExtractor",paraId:2,tocIndex:8},{value:"(item: T, index: number) => string | number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Key function (defaults to index)",paraId:2,tocIndex:8},{value:"...rest",paraId:2,tocIndex:8},{value:"ReactListProps<T>",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Any prop from ",paraId:2,tocIndex:8},{value:"@jswork/react-list",paraId:2,tocIndex:8},{value:`interface ChangeEvent<T> {
  action: 'add' | 'remove' | 'update' | 'reset';
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for reset)
}
`,paraId:3,tocIndex:9},{value:"name",paraId:4,tocIndex:10},{value:" is the shared-state key \u2014 all components with the same ",paraId:4,tocIndex:10},{value:"name",paraId:4,tocIndex:10},{value:" share the same list",paraId:4,tocIndex:10},{value:"defaults",paraId:4,tocIndex:10},{value:" must be a factory function ",paraId:4,tocIndex:10},{value:"() => T",paraId:4,tocIndex:10},{value:", not a value",paraId:4,tocIndex:10},{value:"keyExtractor",paraId:4,tocIndex:10},{value:" defaults to index-based keys \u2014 use a custom extractor for stable keys when items reorder",paraId:4,tocIndex:10}]},4948:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"React Dynamic List provides a declarative component and an imperative hook that share the same underlying store.",paraId:0,tocIndex:0},{value:"API",paraId:1,tocIndex:0},{value:"Type",paraId:1,tocIndex:0},{value:"Description",paraId:1,tocIndex:0},{value:"<DynamicList>",paraId:2,tocIndex:0},{value:"Component",paraId:1,tocIndex:0},{value:"Declarative wrapper with slot-based rendering",paraId:1,tocIndex:0},{value:"useListContext",paraId:3,tocIndex:0},{value:"Hook",paraId:1,tocIndex:0},{value:"Imperative access to list operations",paraId:1,tocIndex:0},{value:"Store & Events",paraId:4,tocIndex:0},{value:"Utilities",paraId:1,tocIndex:0},{value:"Direct store access and event subscription",paraId:1,tocIndex:0}]},78328:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Direct store and event access, useful for testing or non-React code.",paraId:0,tocIndex:0},{value:`import {
  getList,
  setList,
  addToList,
  removeAt,
  updateAt,
} from '@jswork/react-dynamic-list';
`,paraId:1,tocIndex:1},{value:"Function",paraId:2,tocIndex:1},{value:"Signature",paraId:2,tocIndex:1},{value:"Description",paraId:2,tocIndex:1},{value:"getList",paraId:2,tocIndex:1},{value:"<T>(name: string) => T[]",paraId:2,tocIndex:1},{value:"Read list from store",paraId:2,tocIndex:1},{value:"setList",paraId:2,tocIndex:1},{value:"(name: string, items: unknown[]) => void",paraId:2,tocIndex:1},{value:"Replace list and notify",paraId:2,tocIndex:1},{value:"addToList",paraId:2,tocIndex:1},{value:"<T>(name: string, item: T) => void",paraId:2,tocIndex:1},{value:"Append item and notify",paraId:2,tocIndex:1},{value:"removeAt",paraId:2,tocIndex:1},{value:"(name: string, index: number) => void",paraId:2,tocIndex:1},{value:"Remove at index and notify",paraId:2,tocIndex:1},{value:"updateAt",paraId:2,tocIndex:1},{value:"<T>(name: string, index: number, updater: (prev: T) => T) => void",paraId:2,tocIndex:1},{value:"Update at index and notify",paraId:2,tocIndex:1},{value:`import { subscribe, emitChange } from '@jswork/react-dynamic-list';
`,paraId:3,tocIndex:2},{value:"Function",paraId:4,tocIndex:2},{value:"Signature",paraId:4,tocIndex:2},{value:"Description",paraId:4,tocIndex:2},{value:"subscribe",paraId:4,tocIndex:2},{value:"(name: string, listener: Listener) => () => void",paraId:4,tocIndex:2},{value:"Subscribe, returns unsubscribe",paraId:4,tocIndex:2},{value:"emitChange",paraId:4,tocIndex:2},{value:"(name: string, action: ListAction, index?: number) => void",paraId:4,tocIndex:2},{value:"Emit change event",paraId:4,tocIndex:2},{value:`// Read current list
const items = getList<Item>('todos');

// Set list (triggers re-render for all subscribers)
setList('todos', [{ id: '1', title: 'Hello', done: false }]);

// Append an item
addToList('todos', { id: '2', title: 'World', done: false });

// Remove at index
removeAt('todos', 0);

// Update at index
updateAt('todos', 0, (prev) => ({ ...prev, done: true }));
`,paraId:5,tocIndex:4},{value:`// Subscribe to changes
const unsubscribe = subscribe('todos', (event) => {
  console.log(event.action, event.data);
});

// Later, unsubscribe
unsubscribe();
`,paraId:6,tocIndex:5},{value:`import { setList } from '@jswork/react-dynamic-list';

beforeEach(() => {
  // Reset store between tests
  setList('todos', []);
});
`,paraId:7,tocIndex:6},{value:"Direct store calls bypass ",paraId:8,tocIndex:7},{value:"min",paraId:8,tocIndex:7},{value:"/",paraId:8,tocIndex:7},{value:"max",paraId:8,tocIndex:7},{value:" constraints \u2014 those are only enforced at the hook level",paraId:8,tocIndex:7},{value:"The store is global and lives for the module's lifetime",paraId:8,tocIndex:7},{value:"All store mutations automatically emit change events to notify subscribers",paraId:8,tocIndex:7}]},76477:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Hook for imperative list access. Shares the same store as ",paraId:0,tocIndex:0},{value:"<DynamicList>",paraId:0,tocIndex:0},{value:" by name.",paraId:0,tocIndex:0},{value:`import { useListContext } from '@jswork/react-dynamic-list';
`,paraId:1,tocIndex:0},{value:`function useListContext<T>(name: string, options?: ListOptions<T>): ListApi<T>;
`,paraId:2,tocIndex:1},{value:"ListOptions<T>",paraId:3},{value:"Field",paraId:4,tocIndex:2},{value:"Type",paraId:4,tocIndex:2},{value:"Required",paraId:4,tocIndex:2},{value:"Description",paraId:4,tocIndex:2},{value:"defaults",paraId:4,tocIndex:2},{value:"() => T",paraId:4,tocIndex:2},{value:"Yes",paraId:4,tocIndex:2},{value:"Factory function for new items",paraId:4,tocIndex:2},{value:"min",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"No",paraId:4,tocIndex:2},{value:"Minimum list length",paraId:4,tocIndex:2},{value:"max",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"No",paraId:4,tocIndex:2},{value:"Maximum list length",paraId:4,tocIndex:2},{value:"ListApi<T>",paraId:3},{value:"Field",paraId:5,tocIndex:3},{value:"Type",paraId:5,tocIndex:3},{value:"Description",paraId:5,tocIndex:3},{value:"list",paraId:5,tocIndex:3},{value:"T[]",paraId:5,tocIndex:3},{value:"Current list data",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:"ChangeEvent<T> | null",paraId:5,tocIndex:3},{value:"Last change event",paraId:5,tocIndex:3},{value:"add",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:"Append item via ",paraId:5,tocIndex:3},{value:"defaults()",paraId:5,tocIndex:3},{value:"remove",paraId:5,tocIndex:3},{value:"(index: number) => void",paraId:5,tocIndex:3},{value:"Remove item at index",paraId:5,tocIndex:3},{value:"update",paraId:5,tocIndex:3},{value:"(index: number, updater: (prev: T) => T) => void",paraId:5,tocIndex:3},{value:"Update item at index",paraId:5,tocIndex:3},{value:"reset",paraId:5,tocIndex:3},{value:"(items: T[]) => void",paraId:5,tocIndex:3},{value:"Replace entire list",paraId:5,tocIndex:3},{value:"canAdd",paraId:5,tocIndex:3},{value:"boolean",paraId:5,tocIndex:3},{value:"false",paraId:5,tocIndex:3},{value:" when list length >= ",paraId:5,tocIndex:3},{value:"max",paraId:5,tocIndex:3},{value:"canRemove",paraId:5,tocIndex:3},{value:"boolean",paraId:5,tocIndex:3},{value:"false",paraId:5,tocIndex:3},{value:" when list length <= ",paraId:5,tocIndex:3},{value:"min",paraId:5,tocIndex:3},{value:`function MyControls() {
  const { add, remove, update, list, canAdd, canRemove } = useListContext<Item>(
    'todos',
    {
      max: 5,
      defaults: () => ({ id: crypto.randomUUID(), title: '', done: false }),
    },
  );

  return (
    <>
      <button disabled={!canAdd} onClick={add}>
        Add
      </button>
      <button disabled={!canRemove} onClick={() => remove(list.length - 1)}>
        Remove Last
      </button>
    </>
  );
}
`,paraId:6,tocIndex:4},{value:"Shares the same store as ",paraId:7,tocIndex:5},{value:"<DynamicList>",paraId:7,tocIndex:5},{value:" when using the same ",paraId:7,tocIndex:5},{value:"name",paraId:7,tocIndex:5},{value:"defaults",paraId:7,tocIndex:5},{value:" is required \u2014 it is a factory function ",paraId:7,tocIndex:5},{value:"() => T",paraId:7,tocIndex:5},{value:", not a value",paraId:7,tocIndex:5},{value:"canAdd",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"canRemove",paraId:7,tocIndex:5},{value:" are derived from ",paraId:7,tocIndex:5},{value:"min",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"max",paraId:7,tocIndex:5},{value:" constraints",paraId:7,tocIndex:5}]},74907:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 DynamicList  \u2502\u2500\u2500\u2500\u2500\u25B6\u2502  Store   \u2502\u25C0\u2500\u2500\u2500\u2500\u2502 useList  \u2502
\u2502 (component)  \u2502     \u2502 (global) \u2502     \u2502 Context  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
                         \u2502
                    \u250C\u2500\u2500\u2500\u2500\u25BC\u2500\u2500\u2500\u2500\u2500\u2510
                    \u2502  Event   \u2502
                    \u2502 (pub/sub)\u2502
                    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`,paraId:0,tocIndex:1},{value:"store.ts",paraId:1},{value:"Module-scoped ",paraId:2,tocIndex:3},{value:"Map<string, unknown[]>",paraId:2,tocIndex:3},{value:" holding list data outside the React tree. Provides direct access functions:",paraId:2,tocIndex:3},{value:"getList(name)",paraId:3,tocIndex:3},{value:" \u2014 Read list from store",paraId:3,tocIndex:3},{value:"setList(name, items)",paraId:3,tocIndex:3},{value:" \u2014 Replace list and notify",paraId:3,tocIndex:3},{value:"addToList(name, item)",paraId:3,tocIndex:3},{value:" \u2014 Append and notify",paraId:3,tocIndex:3},{value:"removeAt(name, index)",paraId:3,tocIndex:3},{value:" \u2014 Remove at index and notify",paraId:3,tocIndex:3},{value:"updateAt(name, index, updater)",paraId:3,tocIndex:3},{value:" \u2014 Update at index and notify",paraId:3,tocIndex:3},{value:"event.ts",paraId:1},{value:"Name-keyed pub/sub system for reactive cross-component propagation:",paraId:4,tocIndex:4},{value:"subscribe(name, listener)",paraId:5,tocIndex:4},{value:" \u2014 Subscribe to changes, returns unsubscribe function",paraId:5,tocIndex:4},{value:"emitChange(name, action, index?)",paraId:5,tocIndex:4},{value:" \u2014 Emit a change event",paraId:5,tocIndex:4},{value:"use-list-context.ts",paraId:1},{value:"React hook that bridges the store/events with React state via ",paraId:6,tocIndex:5},{value:"useState",paraId:6,tocIndex:5},{value:". Returns a ",paraId:6,tocIndex:5},{value:"ListApi<T>",paraId:6,tocIndex:5},{value:" with:",paraId:6,tocIndex:5},{value:"list",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"change",paraId:7,tocIndex:5},{value:" \u2014 Current state",paraId:7,tocIndex:5},{value:"add",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"remove",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"update",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"reset",paraId:7,tocIndex:5},{value:" \u2014 Mutations",paraId:7,tocIndex:5},{value:"canAdd",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"canRemove",paraId:7,tocIndex:5},{value:" \u2014 Constraint flags",paraId:7,tocIndex:5},{value:"dynamic-list.tsx",paraId:1},{value:"Declarative wrapper combining ",paraId:8,tocIndex:6},{value:"useListContext",paraId:8,tocIndex:6},{value:" + ",paraId:8,tocIndex:6},{value:"@jswork/react-list",paraId:8,tocIndex:6},{value:" for slot-based rendering.",paraId:8,tocIndex:6},{value:"A component calls ",paraId:9,tocIndex:7},{value:"add()",paraId:9,tocIndex:7},{value:" / ",paraId:9,tocIndex:7},{value:"remove()",paraId:9,tocIndex:7},{value:" / ",paraId:9,tocIndex:7},{value:"update()",paraId:9,tocIndex:7},{value:" / ",paraId:9,tocIndex:7},{value:"reset()",paraId:9,tocIndex:7},{value:" via hook or component",paraId:9,tocIndex:7},{value:"The mutation updates the ",paraId:9,tocIndex:7},{value:"Store",paraId:9,tocIndex:7},{value:"The ",paraId:9,tocIndex:7},{value:"Event",paraId:9,tocIndex:7},{value:" system notifies all subscribers",paraId:9,tocIndex:7},{value:"All subscribed hooks/components re-render with new data",paraId:9,tocIndex:7},{value:"onChange",paraId:9,tocIndex:7},{value:" callback fires with a ",paraId:9,tocIndex:7},{value:"ChangeEvent",paraId:9,tocIndex:7},{value:`type ListAction = 'add' | 'remove' | 'update' | 'reset';

interface ChangeEvent<T> {
  action: ListAction;
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for reset)
}
`,paraId:10,tocIndex:8},{value:"ChangeEvent.data",paraId:11,tocIndex:9},{value:" contains the ",paraId:11,tocIndex:9},{value:"full list after mutation",paraId:11,tocIndex:9},{value:", not the delta",paraId:11,tocIndex:9},{value:"ChangeEvent.index",paraId:11,tocIndex:9},{value:" is ",paraId:11,tocIndex:9},{value:"undefined",paraId:11,tocIndex:9},{value:" for ",paraId:11,tocIndex:9},{value:"reset",paraId:11,tocIndex:9},{value:" actions",paraId:11,tocIndex:9},{value:"The store is global and lives for the module's lifetime \u2014 call ",paraId:11,tocIndex:9},{value:"setList(name, [])",paraId:11,tocIndex:9},{value:" in test ",paraId:11,tocIndex:9},{value:"beforeEach",paraId:11,tocIndex:9},{value:" to reset",paraId:11,tocIndex:9},{value:"min",paraId:11,tocIndex:9},{value:"/",paraId:11,tocIndex:9},{value:"max",paraId:11,tocIndex:9},{value:" are soft constraints enforced at the hook level \u2014 direct store calls bypass them",paraId:11,tocIndex:9},{value:"All components using the same ",paraId:11,tocIndex:9},{value:"name",paraId:11,tocIndex:9},{value:" share the same list data and react to each other's mutations",paraId:11,tocIndex:9}]},43723:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"The main configuration file is ",paraId:0,tocIndex:1},{value:".dumirc.ts",paraId:0,tocIndex:1},{value:" in the project root.",paraId:0,tocIndex:1},{value:`import { defineConfig } from 'dumi';

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
`,paraId:2,tocIndex:2},{value:"See the ",paraId:3,tocIndex:3},{value:"official dumi documentation",paraId:3,tocIndex:3},{value:" for all available options.",paraId:3,tocIndex:3}]},69844:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Learn how to deploy your dumi documentation site.",paraId:0,tocIndex:0},{value:`npm run build
`,paraId:1,tocIndex:1},{value:"This will:",paraId:2,tocIndex:1},{value:"Build your documentation site",paraId:3,tocIndex:1},{value:"Generate PWA service worker (via workbox)",paraId:3,tocIndex:1},{value:"Output to ",paraId:3,tocIndex:1},{value:"dist/",paraId:3,tocIndex:1},{value:" directory",paraId:3,tocIndex:1},{value:"Update ",paraId:4,tocIndex:3},{value:".dumirc.ts",paraId:4,tocIndex:3},{value:":",paraId:4,tocIndex:3},{value:`export default defineConfig({
  base: '/your-repo-name/',
  publicPath: '/your-repo-name/',
});
`,paraId:5,tocIndex:3},{value:"Build and deploy:",paraId:6,tocIndex:3},{value:`npm run build

# Deploy using gh-pages
npx gh-pages -d dist
`,paraId:7,tocIndex:3},{value:"Or add a deploy script to ",paraId:8,tocIndex:3},{value:"package.json",paraId:8,tocIndex:3},{value:":",paraId:8,tocIndex:3},{value:`{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
`,paraId:9,tocIndex:3},{value:"Connect your repository to Netlify",paraId:10,tocIndex:4},{value:"Configure build settings:",paraId:10,tocIndex:4},{value:`Build command: npm run build
Publish directory: dist
`,paraId:11,tocIndex:4},{value:"Deploy automatically on push",paraId:12,tocIndex:4},{value:"Connect your repository to Vercel",paraId:13,tocIndex:5},{value:"Configure build settings:",paraId:13,tocIndex:5},{value:`Build command: npm run build
Output directory: dist
`,paraId:14,tocIndex:5},{value:"Deploy automatically on push",paraId:15,tocIndex:5},{value:"Serve the ",paraId:16,tocIndex:6},{value:"dist/",paraId:16,tocIndex:6},{value:" directory with any static file server:",paraId:16,tocIndex:6},{value:`# Using serve
npx serve dist

# Using http-server
npx http-server dist
`,paraId:17,tocIndex:6},{value:"This template includes PWA support via workbox. The service worker is automatically generated during build.",paraId:18,tocIndex:7},{value:"Edit ",paraId:19,tocIndex:8},{value:"workbox-config.cjs",paraId:19,tocIndex:8},{value:":",paraId:19,tocIndex:8},{value:`module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,json,txt,css,map}'],
  swDest: 'dist/sw.js',
  runtimeCaching: [
    // Add your caching strategies
  ],
};
`,paraId:20,tocIndex:8},{value:"You can use environment variables in your documentation:",paraId:21,tocIndex:9},{value:`# .env
MY_VARIABLE=value
`,paraId:22,tocIndex:9},{value:"Access in ",paraId:23,tocIndex:9},{value:".dumirc.ts",paraId:23,tocIndex:9},{value:":",paraId:23,tocIndex:9},{value:`export default defineConfig({
  themeConfig: {
    name: process.env.MY_VARIABLE,
  },
});
`,paraId:24,tocIndex:9},{value:`npm run build
npm run preview
`,paraId:25,tocIndex:10},{value:"This serves the production build locally for testing.",paraId:26,tocIndex:10},{value:`name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
`,paraId:27,tocIndex:12}]},75099:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"React >= 18",paraId:0,tocIndex:1},{value:"@jswork/react-list",paraId:0,tocIndex:1},{value:" as a peer dependency",paraId:0,tocIndex:1},{value:`npm install @jswork/react-dynamic-list @jswork/react-list
`,paraId:1,tocIndex:2},{value:"<DynamicList>",paraId:2},{value:`import { DynamicList } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  title: string;
  done: boolean;
}

const defaults = (): Item => ({
  id: crypto.randomUUID(),
  title: '',
  done: false,
});

<DynamicList<Item>
  name="my-list"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  max={10}
  onChange={(e) => console.log(e.action, e.index, e.data)}
  slots={{
    item: ({ item, index }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;
`,paraId:3,tocIndex:4},{value:"useListContext",paraId:2},{value:`import { useListContext } from '@jswork/react-dynamic-list';

function MyControls() {
  const { add, remove, list, canAdd, canRemove } = useListContext<Item>(
    'my-list',
    {
      max: 5,
      defaults: () => ({ id: crypto.randomUUID(), title: '', done: false }),
    },
  );

  return (
    <>
      <button disabled={!canAdd} onClick={add}>
        Add
      </button>
      <button disabled={!canRemove} onClick={() => remove(list.length - 1)}>
        Remove Last
      </button>
    </>
  );
}
`,paraId:4,tocIndex:5},{value:"name",paraId:5,tocIndex:6},{value:" \u2014 Shared-state key. All hooks/components with the same ",paraId:5,tocIndex:6},{value:"name",paraId:5,tocIndex:6},{value:" see the same list.",paraId:5,tocIndex:6},{value:"defaults",paraId:5,tocIndex:6},{value:" \u2014 Factory function ",paraId:5,tocIndex:6},{value:"() => T",paraId:5,tocIndex:6},{value:" for creating new items. Required in both ",paraId:5,tocIndex:6},{value:"<DynamicList>",paraId:5,tocIndex:6},{value:" and ",paraId:5,tocIndex:6},{value:"useListContext",paraId:5,tocIndex:6},{value:".",paraId:5,tocIndex:6},{value:"slots",paraId:5,tocIndex:6},{value:" \u2014 Customize rendering with ",paraId:5,tocIndex:6},{value:"item",paraId:5,tocIndex:6},{value:" and ",paraId:5,tocIndex:6},{value:"empty",paraId:5,tocIndex:6},{value:" slot components.",paraId:5,tocIndex:6},{value:"min",paraId:5,tocIndex:6},{value:"/",paraId:5,tocIndex:6},{value:"max",paraId:5,tocIndex:6},{value:" \u2014 Soft constraints. ",paraId:5,tocIndex:6},{value:"canAdd",paraId:5,tocIndex:6},{value:" is ",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:" when length >= ",paraId:5,tocIndex:6},{value:"max",paraId:5,tocIndex:6},{value:", ",paraId:5,tocIndex:6},{value:"canRemove",paraId:5,tocIndex:6},{value:" is ",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:" when length <= ",paraId:5,tocIndex:6},{value:"min",paraId:5,tocIndex:6},{value:".",paraId:5,tocIndex:6},{value:"Architecture",paraId:6,tocIndex:7},{value:" - Understand the internal design",paraId:7,tocIndex:7},{value:"DynamicList API",paraId:8,tocIndex:7},{value:" - Full component reference",paraId:7,tocIndex:7},{value:"useListContext API",paraId:9,tocIndex:7},{value:" - Hook reference",paraId:7,tocIndex:7},{value:"Playground",paraId:10,tocIndex:7},{value:" - Interactive examples",paraId:7,tocIndex:7}]},45674:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Welcome to React Dynamic List \u2014 a React component for managing dynamic lists with shared state, event-driven updates, and slot-based rendering.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation and basic usage",paraId:2,tocIndex:1},{value:"Architecture",paraId:3,tocIndex:1},{value:" - How it works internally",paraId:2,tocIndex:1},{value:"DynamicList Component",paraId:4,tocIndex:2},{value:"useListContext Hook",paraId:5,tocIndex:2},{value:"Store & Event Utilities",paraId:6,tocIndex:2},{value:"Playground",paraId:7,tocIndex:2}]},59528:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:`npm install @jswork/react-dynamic-list @jswork/react-list
`,paraId:0,tocIndex:0},{value:`import { DynamicList } from '@jswork/react-dynamic-list';

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

<DynamicList<Todo>
  name="todos"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  slots={{
    item: ({ item }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;
`,paraId:1,tocIndex:1}]},38904:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Interactive demos for React Dynamic List. All examples use Tailwind CSS for styling.",paraId:0,tocIndex:0}]},1204:function(l,t){t.Z=`import React from 'react';
import { DynamicList } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const SlotItem = ({ item, index, onAction }) => (
  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
    <span className="text-gray-500 text-sm">#{index}</span>
    <span className="flex-1">{item.label || '(empty)'}</span>
  </div>
);

const SlotEmpty = () => <div className="text-gray-400 text-center p-4">No items yet</div>;

const initialData = [{ id: '1', label: 'Item A' }, { id: '2', label: 'Item B' }];

export default () => (
  <DynamicList<Item>
    name="demo-basic"
    defaults={defaults}
    data={initialData}
    slots={{ item: SlotItem, empty: SlotEmpty }}
    onChange={(e) => console.log(e.action, e.data)}
  />
);
`},9711:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { remove, update } = useListContext<Item>('demo-constraints');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Type something..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, canRemove, list } = useListContext<Item>('demo-constraints', { defaults, min: 1, max: 4 });
  return (
    <div className="flex items-center gap-3 mb-3">
      <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
        + Add
      </button>
      <span className="text-sm text-gray-500">min: 1 | max: 4 | current: {list.length}</span>
      <span className="text-xs">
        {canAdd ? <span className="text-green-500">canAdd \u2713</span> : <span className="text-gray-400">canAdd \u2717</span>}
        {' | '}
        {canRemove ? <span className="text-green-500">canRemove \u2713</span> : <span className="text-gray-400">canRemove \u2717</span>}
      </span>
    </div>
  );
};

export default () => (
  <div>
    <Controls />
    <DynamicList<Item>
      name="demo-constraints"
      defaults={defaults}
      min={1}
      max={4}
      slots={{
        item: ItemSlot,
        empty: () => <div className="text-gray-400 text-center p-4">No items</div>,
      }}
    />
  </div>
);
`},99337:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const defaults = (): Todo => ({ id: crypto.randomUUID(), title: '', done: false });

const TodoItem = ({ item, index, onAction }) => {
  const { update, remove } = useListContext<Todo>('demo-todo');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => update(index, (prev) => ({ ...prev, done: !prev }))}
        className="w-4 h-4"
      />
      <input
        value={item.title}
        onChange={(e) => update(index, (prev) => ({ ...prev, title: e.target.value }))}
        placeholder="Todo title..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, canRemove, list } = useListContext<Todo>('demo-todo', { defaults, max: 5 });
  return (
    <div className="flex gap-2 mb-3">
      <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
        + Add ({list.length}/5)
      </button>
    </div>
  );
};

const initialData = [{ id: '1', title: 'Learn React', done: false }];

export default () => (
  <div>
    <Controls />
    <DynamicList<Todo>
      name="demo-todo"
      defaults={defaults}
      data={initialData}
      max={5}
      slots={{
        item: TodoItem,
        empty: () => <div className="text-gray-400 text-center p-4">No todos yet</div>,
      }}
    />
  </div>
);
`},34175:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { remove, update } = useListContext<Item>('pg-basic');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Type something..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, list } = useListContext<Item>('pg-basic', { defaults });
  return (
    <div className="flex gap-2 mb-3">
      <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
        + Add
      </button>
      <span className="text-sm text-gray-500 self-center">Items: {list.length}</span>
    </div>
  );
};

export default () => (
  <div>
    <Controls />
    <DynamicList<Item>
      name="pg-basic"
      defaults={defaults}
      slots={{
        item: ItemSlot,
        empty: () => <div className="text-gray-400 text-center p-4">Click "+ Add" to start</div>,
      }}
    />
  </div>
);
`},87340:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { remove, update } = useListContext<Item>('pg-constraints');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <span className="text-gray-400 text-xs w-6">#{index + 1}</span>
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Item label..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, canRemove, list } = useListContext<Item>('pg-constraints', { defaults, min: 1, max: 4 });
  return (
    <div className="space-y-2 mb-3">
      <div className="flex gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add
        </button>
      </div>
      <div className="flex gap-3 text-xs">
        <span className="text-gray-500">Count: {list.length} / 4</span>
        <span className={canAdd ? 'text-green-500' : 'text-gray-400'}>canAdd: {canAdd ? '\u2713' : '\u2717'}</span>
        <span className={canRemove ? 'text-green-500' : 'text-gray-400'}>canRemove: {canRemove ? '\u2713' : '\u2717'}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div className="bg-blue-500 h-1.5 rounded-full transition-all" style={{ width: \`\${(list.length / 4) * 100}%\` }} />
      </div>
    </div>
  );
};

const initialData = [{ id: '1', label: 'First item' }];

export default () => (
  <div>
    <Controls />
    <DynamicList<Item>
      name="pg-constraints"
      defaults={defaults}
      data={initialData}
      min={1}
      max={4}
      slots={{
        item: ItemSlot,
        empty: () => <div className="text-gray-400 text-center p-4">No items</div>,
      }}
    />
  </div>
);
`},62661:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { remove, update } = useListContext<Item>('pg-shared');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Type..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const PanelA = () => {
  const { add, canAdd, list } = useListContext<Item>('pg-shared', { defaults, max: 6 });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-blue-600">Panel A \u2014 Controls</div>
      <div className="flex gap-2 mb-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add
        </button>
        <span className="text-xs text-gray-500 self-center">{list.length} items</span>
      </div>
      <DynamicList<Item>
        name="pg-shared"
        defaults={defaults}
        max={6}
        slots={{ item: ItemSlot, empty: () => <div className="text-gray-400 text-sm text-center p-2">Empty</div> }}
      />
    </div>
  );
};

const PanelB = () => {
  const { list } = useListContext<Item>('pg-shared', { defaults });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-green-600">Panel B \u2014 Read-only mirror</div>
      {list.length === 0 ? (
        <div className="text-gray-400 text-sm text-center p-2">Empty</div>
      ) : (
        <ul className="space-y-1">
          {list.map((item, i) => (
            <li key={item.id} className="text-sm p-1 bg-green-50 rounded px-2">
              {item.label || '(empty)'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default () => (
  <div className="grid grid-cols-2 gap-4">
    <PanelA />
    <PanelB />
  </div>
);
`},30842:function(l,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

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

const TodoItem = ({ item, index }: any) => {
  const { update, remove } = useListContext<Todo>('pg-todo');
  return (
    <div
      className={\`flex items-center gap-2 p-2 rounded \${
        item.done ? 'bg-green-50' : 'bg-gray-50'
      }\`}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => {
          update(index, (prev) => {
            return { ...prev, done: !prev.done };
          });
        }}
        className="w-4 h-4"
      />
      <input
        value={item.title}
        onChange={(e) =>
          update(index, (prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Todo title..."
        className={\`flex-1 px-2 py-1 border rounded text-sm \${
          item.done ? 'line-through text-gray-400' : ''
        }\`}
      />
      <button
        onClick={() => remove(index)}
        className="text-red-400 hover:text-red-600 text-sm"
      >
        \u2715
      </button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, list } = useListContext<Todo>('pg-todo', {
    defaults,
    max: 8,
  });
  const remaining = list.filter((t) => !t.done).length;
  return (
    <div className="flex items-center gap-3 mb-3">
      <button
        onClick={add}
        disabled={!canAdd}
        className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40"
      >
        + Add Todo
      </button>
      <span className="text-sm text-gray-500">
        {remaining} remaining / {list.length} total
      </span>
    </div>
  );
};

const initialData = [
  { id: '1', title: 'Learn React', done: false },
  { id: '2', title: 'Build something', done: true },
];

export default () => (
  <div className="debug-red p-2">
    <Controls />
    <DynamicList<Todo>
      name="pg-todo"
      defaults={defaults}
      data={initialData}
      max={8}
      slots={{
        item: TodoItem,
        empty: () => (
          <div className="text-gray-400 text-center p-4">
            No todos \u2014 add one!
          </div>
        ),
      }}
    />
  </div>
);
`}}]);
