"use strict";(self.webpackChunk_jswork_react_dynamic_list_docs=self.webpackChunk_jswork_react_dynamic_list_docs||[]).push([[904],{54674:function(c,t,e){e.r(t),e.d(t,{DynamicList:function(){return V},addToList:function(){return $},emitChange:function(){return E},getList:function(){return T},removeAt:function(){return K},setList:function(){return F},subscribe:function(){return Z},updateAt:function(){return W},useListContext:function(){return z}});var d=e(75271),x=Object.defineProperty,u=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,s=(n,o,r)=>o in n?x(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,y=(n,o)=>{for(var r in o||(o={}))R.call(o,r)&&s(n,r,o[r]);if(u)for(var r of u(o))h.call(o,r)&&s(n,r,o[r]);return n},A=(n,o)=>x(n,"name",{value:o,configurable:!0}),v=Symbol("react-list/self"),m=Symbol("react-list/index");function p(n){return n&&typeof n=="object"&&"component"in n}A(p,"isSlotConfig");function i(n,o,r){return n?typeof n=="function"?d.createElement(n,r!=null?y({key:r},o):o):p(n)?d.createElement(n.component,y(y({key:r},n.props),o)):r!==void 0?d.createElement(d.Fragment,{key:r},n):n:null}A(i,"renderSlot");function I(n,o,r,l){if(typeof l=="function")return l({item:n,index:o,data:r});if(l===v)return n;if(l===m)return o;let C=l.split("."),g=n;for(let P of C)g=g==null?void 0:g[P];return g!=null?g:o}A(I,"getKey");function b({data:n,keyExtractor:o="id",slots:r}){let l=(0,d.useMemo)(()=>n.map((C,g)=>I(C,g,n,o)),[n,o]);return n.length===0?d.createElement(d.Fragment,null,i(r.empty,{data:n})):d.createElement(d.Fragment,null,n.map((C,g)=>i(r.item,{item:C,index:g,data:n},l[g])))}A(b,"ReactList");var a=null,H=Object.defineProperty,j=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,J=(n,o,r)=>o in n?H(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,Q=(n,o)=>{for(var r in o||(o={}))G.call(o,r)&&J(n,r,o[r]);if(j)for(var r of j(o))Y.call(o,r)&&J(n,r,o[r]);return n},L=(n,o)=>H(n,"name",{value:o,configurable:!0}),q=(n,o)=>{var r={};for(var l in n)G.call(n,l)&&o.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&j)for(var l of j(n))o.indexOf(l)<0&&Y.call(n,l)&&(r[l]=n[l]);return r},D=new Map;function T(n){return D.has(n)||D.set(n,[]),D.get(n)}L(T,"getList");function F(n,o){D.set(n,[...o])}L(F,"setList");function K(n,o){let r=[...T(n)];r.splice(o,1),D.set(n,r)}L(K,"removeAt");function $(n,o){D.set(n,[...T(n),o])}L($,"addToList");function W(n,o,r){let l=[...T(n)];l[o]=r(l[o]),D.set(n,l)}L(W,"updateAt");var U=new Map;function Z(n,o){U.has(n)||U.set(n,new Set);let r=U.get(n);return r.add(o),()=>r.delete(o)}L(Z,"subscribe");function E(n,o,r){var l;(l=U.get(n))==null||l.forEach(C=>C(o,r))}L(E,"emitChange");function z(n,o){let[r,l]=(0,d.useState)(null);(0,d.useEffect)(()=>Z(n,(f,N)=>l({action:f,data:T(n),index:N})),[n]);let C=(0,d.useCallback)(()=>{let f=o==null?void 0:o.defaults();if(f===void 0)return;let N=T(n).length;$(n,f),E(n,"add",N)},[n,o]),g=(0,d.useCallback)((f,N)=>{W(n,f,N),E(n,"update",f)},[n]),P=(0,d.useCallback)(f=>{K(n,f),E(n,"remove",f)},[n]),k=(0,d.useCallback)(f=>{F(n,f),E(n,"reset")},[n]),O=T(n),w=o==null?void 0:o.max,S=o==null?void 0:o.min,M=w===void 0||O.length<w,B=S===void 0||O.length>S;return{list:O,change:r,add:C,remove:P,update:g,reset:k,canAdd:M,canRemove:B}}L(z,"useListContext");function V(n){let o=n,{name:r,data:l,min:C,max:g,defaults:P,onChange:k,keyExtractor:O=m}=o,w=q(o,["name","data","min","max","defaults","onChange","keyExtractor"]),{list:S,change:M,reset:B}=z(r,{min:C,max:g,defaults:P}),f=(0,d.useRef)(void 0),N=(0,d.useRef)(k);return(0,d.useEffect)(()=>{l&&l!==f.current&&B(l),f.current=l},[l,B]),N.current=k,(0,d.useEffect)(()=>{var X;M&&((X=N.current)==null||X.call(N,M))},[M]),d.createElement(b,Q({data:S,keyExtractor:O},w))}L(V,"DynamicList")},90265:function(c,t,e){var d;e.r(t),e.d(t,{demos:function(){return A}});var x=e(90228),u=e.n(x),R=e(87999),h=e.n(R),s=e(75271),y=e(54674),A={"docs-components-dynamic-list-demo-basic":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,11741))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1204).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Basic list with add/remove"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-components-dynamic-list-demo-todo-list":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,17222))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-todo-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99337).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Todo list with inline editing"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-components-dynamic-list-demo-constraints":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,52848))})),asset:{type:"BLOCK",id:"docs-components-dynamic-list-demo-constraints",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9711).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"min/max constraints"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}}}},94668:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},5232:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},50177:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},77594:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},67486:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},38113:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},54070:function(c,t,e){e.r(t),e.d(t,{demos:function(){return x}});var d=e(75271),x={}},73925:function(c,t,e){var d;e.r(t),e.d(t,{demos:function(){return A}});var x=e(90228),u=e.n(x),R=e(87999),h=e.n(R),s=e(75271),y=e(54674),A={"docs-playground-demo-string-list":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,42745))})),asset:{type:"BLOCK",id:"docs-playground-demo-string-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18913).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Add/remove fruits"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-tag-input":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,27146))})),asset:{type:"BLOCK",id:"docs-playground-demo-tag-input",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29325).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Add tags with Enter key"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-dynamic-form":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,22359))})),asset:{type:"BLOCK",id:"docs-playground-demo-dynamic-form",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77124).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Key-value field editor"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-todo-list":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,91589))})),asset:{type:"BLOCK",id:"docs-playground-demo-todo-list",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30842).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Todo list with inline editing"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-constraints":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,90230))})),asset:{type:"BLOCK",id:"docs-playground-demo-constraints",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87340).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"min/max constraints"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-shared-state":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,79113))})),asset:{type:"BLOCK",id:"docs-playground-demo-shared-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62661).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Two components sharing the same list"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}},"docs-playground-demo-change-tracker":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,15328))})),asset:{type:"BLOCK",id:"docs-playground-demo-change-tracker",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65234).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-dynamic-list":{type:"NPM",value:"1.0.3"}},entry:"index.tsx",title:"Task list with priority and change log"},context:{react:d||(d=e.t(s,2)),"@jswork/react-dynamic-list":y},renderOpts:{compile:function(){var v=h()(u()().mark(function p(){var i,I=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(321).then(e.bind(e,55321));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,I));case 3:case"end":return a.stop()}},p)}));function m(){return v.apply(this,arguments)}return m}()}}}},76843:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"The main declarative component. Wraps ",paraId:0,tocIndex:0},{value:"@jswork/react-list",paraId:0,tocIndex:0},{value:" with dynamic list management, slot-based rendering, and shared state.",paraId:0,tocIndex:0},{value:`import { DynamicList } from '@jswork/react-dynamic-list';
`,paraId:1,tocIndex:0},{value:"Prop",paraId:2,tocIndex:8},{value:"Type",paraId:2,tocIndex:8},{value:"Required",paraId:2,tocIndex:8},{value:"Description",paraId:2,tocIndex:8},{value:"name",paraId:2,tocIndex:8},{value:"string",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Unique key for the shared store",paraId:2,tocIndex:8},{value:"defaults",paraId:2,tocIndex:8},{value:"() => T",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Factory function for new items",paraId:2,tocIndex:8},{value:"data",paraId:2,tocIndex:8},{value:"T[]",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Initial data (syncs on change)",paraId:2,tocIndex:8},{value:"min",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Minimum list length",paraId:2,tocIndex:8},{value:"max",paraId:2,tocIndex:8},{value:"number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Maximum list length",paraId:2,tocIndex:8},{value:"onChange",paraId:2,tocIndex:8},{value:"(event: ChangeEvent<T>) => void",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Callback on every mutation",paraId:2,tocIndex:8},{value:"slots",paraId:2,tocIndex:8},{value:"{ item: ComponentType; empty?: ComponentType }",paraId:2,tocIndex:8},{value:"Yes",paraId:2,tocIndex:8},{value:"Slot components for rendering",paraId:2,tocIndex:8},{value:"keyExtractor",paraId:2,tocIndex:8},{value:"(item: T, index: number) => string | number",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Key function (defaults to index)",paraId:2,tocIndex:8},{value:"...rest",paraId:2,tocIndex:8},{value:"ReactListProps<T>",paraId:2,tocIndex:8},{value:"No",paraId:2,tocIndex:8},{value:"Any prop from ",paraId:2,tocIndex:8},{value:"@jswork/react-list",paraId:2,tocIndex:8},{value:`interface ChangeEvent<T> {
  action: 'add' | 'remove' | 'update' | 'reset';
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for reset)
}
`,paraId:3,tocIndex:9},{value:"name",paraId:4,tocIndex:10},{value:" is the shared-state key \u2014 all components with the same ",paraId:4,tocIndex:10},{value:"name",paraId:4,tocIndex:10},{value:" share the same list",paraId:4,tocIndex:10},{value:"defaults",paraId:4,tocIndex:10},{value:" must be a factory function ",paraId:4,tocIndex:10},{value:"() => T",paraId:4,tocIndex:10},{value:", not a value",paraId:4,tocIndex:10},{value:"keyExtractor",paraId:4,tocIndex:10},{value:" defaults to index-based keys \u2014 use a custom extractor for stable keys when items reorder",paraId:4,tocIndex:10}]},4948:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"React Dynamic List provides a declarative component and an imperative hook that share the same underlying store.",paraId:0,tocIndex:0},{value:"API",paraId:1,tocIndex:0},{value:"Type",paraId:1,tocIndex:0},{value:"Description",paraId:1,tocIndex:0},{value:"<DynamicList>",paraId:2,tocIndex:0},{value:"Component",paraId:1,tocIndex:0},{value:"Declarative wrapper with slot-based rendering",paraId:1,tocIndex:0},{value:"useListContext",paraId:3,tocIndex:0},{value:"Hook",paraId:1,tocIndex:0},{value:"Imperative access to list operations",paraId:1,tocIndex:0},{value:"Store & Events",paraId:4,tocIndex:0},{value:"Utilities",paraId:1,tocIndex:0},{value:"Direct store access and event subscription",paraId:1,tocIndex:0}]},78328:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"Direct store and event access, useful for testing or non-React code.",paraId:0,tocIndex:0},{value:`import {
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
`,paraId:7,tocIndex:6},{value:"Direct store calls bypass ",paraId:8,tocIndex:7},{value:"min",paraId:8,tocIndex:7},{value:"/",paraId:8,tocIndex:7},{value:"max",paraId:8,tocIndex:7},{value:" constraints \u2014 those are only enforced at the hook level",paraId:8,tocIndex:7},{value:"The store is global and lives for the module's lifetime",paraId:8,tocIndex:7},{value:"All store mutations automatically emit change events to notify subscribers",paraId:8,tocIndex:7}]},76477:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"Hook for imperative list access. Shares the same store as ",paraId:0,tocIndex:0},{value:"<DynamicList>",paraId:0,tocIndex:0},{value:" by name.",paraId:0,tocIndex:0},{value:`import { useListContext } from '@jswork/react-dynamic-list';
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
`,paraId:6,tocIndex:4},{value:"Shares the same store as ",paraId:7,tocIndex:5},{value:"<DynamicList>",paraId:7,tocIndex:5},{value:" when using the same ",paraId:7,tocIndex:5},{value:"name",paraId:7,tocIndex:5},{value:"defaults",paraId:7,tocIndex:5},{value:" is required \u2014 it is a factory function ",paraId:7,tocIndex:5},{value:"() => T",paraId:7,tocIndex:5},{value:", not a value",paraId:7,tocIndex:5},{value:"canAdd",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"canRemove",paraId:7,tocIndex:5},{value:" are derived from ",paraId:7,tocIndex:5},{value:"min",paraId:7,tocIndex:5},{value:" / ",paraId:7,tocIndex:5},{value:"max",paraId:7,tocIndex:5},{value:" constraints",paraId:7,tocIndex:5}]},74907:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
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
`,paraId:10,tocIndex:8},{value:"ChangeEvent.data",paraId:11,tocIndex:9},{value:" contains the ",paraId:11,tocIndex:9},{value:"full list after mutation",paraId:11,tocIndex:9},{value:", not the delta",paraId:11,tocIndex:9},{value:"ChangeEvent.index",paraId:11,tocIndex:9},{value:" is ",paraId:11,tocIndex:9},{value:"undefined",paraId:11,tocIndex:9},{value:" for ",paraId:11,tocIndex:9},{value:"reset",paraId:11,tocIndex:9},{value:" actions",paraId:11,tocIndex:9},{value:"The store is global and lives for the module's lifetime \u2014 call ",paraId:11,tocIndex:9},{value:"setList(name, [])",paraId:11,tocIndex:9},{value:" in test ",paraId:11,tocIndex:9},{value:"beforeEach",paraId:11,tocIndex:9},{value:" to reset",paraId:11,tocIndex:9},{value:"min",paraId:11,tocIndex:9},{value:"/",paraId:11,tocIndex:9},{value:"max",paraId:11,tocIndex:9},{value:" are soft constraints enforced at the hook level \u2014 direct store calls bypass them",paraId:11,tocIndex:9},{value:"All components using the same ",paraId:11,tocIndex:9},{value:"name",paraId:11,tocIndex:9},{value:" share the same list data and react to each other's mutations",paraId:11,tocIndex:9}]},75099:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"React >= 18",paraId:0,tocIndex:1},{value:"@jswork/react-list",paraId:0,tocIndex:1},{value:" as a peer dependency",paraId:0,tocIndex:1},{value:`npm install @jswork/react-dynamic-list @jswork/react-list
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
`,paraId:4,tocIndex:5},{value:"name",paraId:5,tocIndex:6},{value:" \u2014 Shared-state key. All hooks/components with the same ",paraId:5,tocIndex:6},{value:"name",paraId:5,tocIndex:6},{value:" see the same list.",paraId:5,tocIndex:6},{value:"defaults",paraId:5,tocIndex:6},{value:" \u2014 Factory function ",paraId:5,tocIndex:6},{value:"() => T",paraId:5,tocIndex:6},{value:" for creating new items. Required in both ",paraId:5,tocIndex:6},{value:"<DynamicList>",paraId:5,tocIndex:6},{value:" and ",paraId:5,tocIndex:6},{value:"useListContext",paraId:5,tocIndex:6},{value:".",paraId:5,tocIndex:6},{value:"slots",paraId:5,tocIndex:6},{value:" \u2014 Customize rendering with ",paraId:5,tocIndex:6},{value:"item",paraId:5,tocIndex:6},{value:" and ",paraId:5,tocIndex:6},{value:"empty",paraId:5,tocIndex:6},{value:" slot components.",paraId:5,tocIndex:6},{value:"min",paraId:5,tocIndex:6},{value:"/",paraId:5,tocIndex:6},{value:"max",paraId:5,tocIndex:6},{value:" \u2014 Soft constraints. ",paraId:5,tocIndex:6},{value:"canAdd",paraId:5,tocIndex:6},{value:" is ",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:" when length >= ",paraId:5,tocIndex:6},{value:"max",paraId:5,tocIndex:6},{value:", ",paraId:5,tocIndex:6},{value:"canRemove",paraId:5,tocIndex:6},{value:" is ",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:" when length <= ",paraId:5,tocIndex:6},{value:"min",paraId:5,tocIndex:6},{value:".",paraId:5,tocIndex:6},{value:"Architecture",paraId:6,tocIndex:7},{value:" - Understand the internal design",paraId:7,tocIndex:7},{value:"DynamicList API",paraId:8,tocIndex:7},{value:" - Full component reference",paraId:7,tocIndex:7},{value:"useListContext API",paraId:9,tocIndex:7},{value:" - Hook reference",paraId:7,tocIndex:7},{value:"Playground",paraId:10,tocIndex:7},{value:" - Interactive examples",paraId:7,tocIndex:7}]},45674:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"Welcome to React Dynamic List \u2014 a React component for managing dynamic lists with shared state, event-driven updates, and slot-based rendering.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation and basic usage",paraId:2,tocIndex:1},{value:"Architecture",paraId:3,tocIndex:1},{value:" - How it works internally",paraId:2,tocIndex:1},{value:"DynamicList Component",paraId:4,tocIndex:2},{value:"useListContext Hook",paraId:5,tocIndex:2},{value:"Store & Event Utilities",paraId:6,tocIndex:2},{value:"Playground",paraId:7,tocIndex:2}]},59528:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:`npm install @jswork/react-dynamic-list @jswork/react-list
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
`,paraId:1,tocIndex:1}]},38904:function(c,t,e){e.r(t),e.d(t,{texts:function(){return d}});const d=[{value:"Interactive demos from simple to complex. All examples use Tailwind CSS for styling.",paraId:0,tocIndex:0}]},1204:function(c,t){t.Z=`import React from 'react';
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
`},9711:function(c,t){t.Z=`import React from 'react';
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
`},99337:function(c,t){t.Z=`import React from 'react';
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
`},65234:function(c,t){t.Z=`import React, { useState } from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';
import type { ChangeEvent } from '@jswork/react-dynamic-list';

interface Task {
  id: string;
  title: string;
  priority: 'low' | 'mid' | 'high';
}

const priorities: Task['priority'][] = ['low', 'mid', 'high'];
const priorityColor: Record<Task['priority'], string> = {
  low: 'bg-gray-200 text-gray-600',
  mid: 'bg-yellow-200 text-yellow-700',
  high: 'bg-red-200 text-red-700',
};

const defaults = (): Task => ({ id: crypto.randomUUID(), title: '', priority: 'mid' });

const TaskItem = ({ item, index }: any) => {
  const { update, remove } = useListContext<Task>('pg-tracker');
  const cycle = () => {
    const next = priorities[(priorities.indexOf(item.priority) + 1) % 3];
    update(index, (prev) => ({ ...prev, priority: next }));
  };
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <button onClick={cycle} className={\`px-2 py-0.5 rounded text-xs font-mono \${priorityColor[item.priority]}\`}>
        {item.priority}
      </button>
      <input
        value={item.title}
        onChange={(e) => update(index, (prev) => ({ ...prev, title: e.target.value }))}
        placeholder="Task title..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const initialData = [
  { id: '1', title: 'Fix login bug', priority: 'high' as const },
  { id: '2', title: 'Update README', priority: 'low' as const },
  { id: '3', title: 'Refactor API', priority: 'mid' as const },
];

export default () => {
  const { add, canAdd, list } = useListContext<Task>('pg-tracker', { defaults, max: 8 });
  const [log, setLog] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<Task>) => {
    setLog((prev) => [\`\${e.action}\${e.index != null ? \` [\${e.index}]\` : ''} \u2192 \${list.length} items\`, ...prev.slice(0, 9)]);
  };

  const highCount = list.filter((t) => t.priority === 'high').length;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Task
        </button>
        <span className="text-xs text-gray-500">{list.length} tasks \xB7 {highCount} high priority</span>
      </div>
      <DynamicList<Task>
        name="pg-tracker"
        defaults={defaults}
        data={initialData}
        max={8}
        onChange={handleChange}
        slots={{
          item: TaskItem,
          empty: () => <div className="text-gray-400 text-sm text-center p-2">No tasks</div>,
        }}
      />
      {log.length > 0 && (
        <div className="text-xs bg-gray-900 text-gray-300 p-2 rounded font-mono">
          <div className="text-gray-500 mb-1">Change log:</div>
          {log.map((entry, i) => <div key={i}>{entry}</div>)}
        </div>
      )}
    </div>
  );
};
`},87340:function(c,t){t.Z=`import React from 'react';
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
`},77124:function(c,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Field {
  id: string;
  name: string;
  value: string;
}

const defaults = (): Field => ({ id: crypto.randomUUID(), name: '', value: '' });

const FieldItem = ({ item, index }: any) => {
  const { update, remove } = useListContext<Field>('pg-form');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.name}
        onChange={(e) => update(index, (prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Key"
        className="w-24 px-2 py-1 border rounded text-sm"
      />
      <span className="text-gray-400">:</span>
      <input
        value={item.value}
        onChange={(e) => update(index, (prev) => ({ ...prev, value: e.target.value }))}
        placeholder="Value"
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

const initialData = [
  { id: '1', name: 'host', value: 'localhost' },
  { id: '2', name: 'port', value: '3000' },
];

export default () => {
  const { add, canAdd, list, reset } = useListContext<Field>('pg-form', { defaults, max: 8 });
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Field
        </button>
        <button onClick={() => reset(initialData)} className="px-3 py-1 bg-gray-200 rounded text-sm">
          Reset
        </button>
      </div>
      <DynamicList<Field>
        name="pg-form"
        defaults={defaults}
        data={initialData}
        max={8}
        slots={{
          item: FieldItem,
          empty: () => <div className="text-gray-400 text-sm text-center p-2">No fields</div>,
        }}
      />
      <pre className="text-xs bg-gray-900 text-green-400 p-2 rounded mt-2">
        {JSON.stringify(
          Object.fromEntries(list.filter((f) => f.name).map((f) => [f.name, f.value])),
          null,
          2
        )}
      </pre>
    </div>
  );
};
`},62661:function(c,t){t.Z=`import React from 'react';
import {
  DynamicList,
  useListContext,
  type ItemContext,
} from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }: ItemContext<Item>) => {
  const { remove, update } = useListContext<Item>('pg-shared');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) =>
          update(index, (prev) => ({ ...prev, label: e.target.value }))
        }
        placeholder="Type..."
        className="flex-1 px-2 py-1 border rounded text-sm"
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

const PanelA = () => {
  const { add, canAdd, list } = useListContext<Item>('pg-shared', {
    defaults,
    max: 6,
  });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-blue-600">
        Panel A \u2014 Controls
      </div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={add}
          disabled={!canAdd}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40"
        >
          + Add
        </button>
        <span className="text-xs text-gray-500 self-center">
          {list.length} items
        </span>
      </div>
      <DynamicList<Item>
        name="pg-shared"
        defaults={defaults}
        max={6}
        slots={{
          item: ItemSlot,
          empty: () => (
            <div className="text-gray-400 text-sm text-center p-2">Empty</div>
          ),
        }}
      />
    </div>
  );
};

const PanelB = () => {
  const { list } = useListContext<Item>('pg-shared', { defaults });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-green-600">
        Panel B \u2014 Read-only mirror
      </div>
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
`},18913:function(c,t){t.Z=`import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

const fruits = ['\u{1F34E} Apple', '\u{1F350} Pear', '\u{1F34C} Banana', '\u{1F347} Grape', '\u{1F34A} Orange'];
let fruitIdx = 0;

const defaults = (): { id: string; value: string } => ({
  id: String(fruitIdx),
  value: fruits[fruitIdx++ % fruits.length],
});

const FruitItem = ({ item, index }: any) => {
  const { remove } = useListContext('pg-string');
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
      <span>{item.value}</span>
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">\u2715</button>
    </div>
  );
};

export default () => {
  const { add, canAdd, canRemove, list, reset } = useListContext<{ id: string; value: string }>('pg-string', { defaults, max: 8 });
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Fruit
        </button>
        <button onClick={() => { fruitIdx = 0; reset([]); }} className="px-3 py-1 bg-gray-200 rounded text-sm">
          Reset
        </button>
      </div>
      {list.length === 0 ? (
        <div className="text-gray-400 text-center p-4 text-sm">Click "+ Add Fruit" to start</div>
      ) : (
        <div className="space-y-1">
          {list.map((item, i) => (
            <FruitItem key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
      <div className="text-xs text-gray-400">{list.length} / 8</div>
    </div>
  );
};
`},29325:function(c,t){t.Z=`import React, { useState } from 'react';
import { DynamicList, useListContext, addToList } from '@jswork/react-dynamic-list';

interface Tag {
  id: string;
  text: string;
}

const defaults = (): Tag => ({ id: crypto.randomUUID(), text: '' });

const TagItem = ({ item, index }: any) => {
  const { remove } = useListContext<Tag>('pg-tags');
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
      {item.text}
      <button onClick={() => remove(index)} className="text-blue-400 hover:text-blue-600">\u2715</button>
    </span>
  );
};

export default () => {
  const { list } = useListContext<Tag>('pg-tags', { defaults, max: 10 });
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const text = input.trim();
    if (!text || list.length >= 10) return;
    addToList('pg-tags', { id: crypto.randomUUID(), text });
    setInput('');
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Type a tag, press Enter..."
          className="flex-1 px-2 py-1 border rounded text-sm"
        />
        <button onClick={handleAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
          Add
        </button>
      </div>
      <DynamicList<Tag>
        name="pg-tags"
        defaults={defaults}
        max={10}
        slots={{
          item: TagItem,
          empty: () => <div className="text-gray-400 text-sm">No tags yet</div>,
        }}
      />
    </div>
  );
};
`},30842:function(c,t){t.Z=`import React from 'react';
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
