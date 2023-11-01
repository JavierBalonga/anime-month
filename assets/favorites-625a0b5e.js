import{r as R,p as H}from"./index-1d337650.js";const I=e=>{let t;const n=new Set,o=(l,c)=>{const h=typeof l=="function"?l(t):l;if(!Object.is(h,t)){const p=t;t=c??typeof h!="object"?h:Object.assign({},t,h),n.forEach(g=>g(t,p))}},s=()=>t,d={setState:o,getState:s,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return t=e(o,s,d),d},P=e=>e?I(e):I;var F={exports:{}},_={},O={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=R;function j(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $=typeof Object.is=="function"?Object.is:j,L=E.useState,q=E.useEffect,z=E.useLayoutEffect,U=E.useDebugValue;function C(e,t){var n=t(),o=L({inst:{value:n,getSnapshot:t}}),s=o[0].inst,r=o[1];return z(function(){s.value=n,s.getSnapshot=t,D(s)&&r({inst:s})},[e,n,t]),q(function(){return D(s)&&r({inst:s}),e(function(){D(s)&&r({inst:s})})},[e]),U(n),n}function D(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$(e,n)}catch{return!0}}function T(e,t){return t()}var W=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?T:C;A.useSyncExternalStore=E.useSyncExternalStore!==void 0?E.useSyncExternalStore:W;O.exports=A;var k=O.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=R,B=k;function J(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var M=typeof Object.is=="function"?Object.is:J,N=B.useSyncExternalStore,G=w.useRef,K=w.useEffect,Q=w.useMemo,X=w.useDebugValue;_.useSyncExternalStoreWithSelector=function(e,t,n,o,s){var r=G(null);if(r.current===null){var f={hasValue:!1,value:null};r.current=f}else f=r.current;r=Q(function(){function l(v){if(!c){if(c=!0,h=v,v=o(v),s!==void 0&&f.hasValue){var S=f.value;if(s(S,v))return p=S}return p=v}if(S=p,M(h,v))return S;var u=o(v);return s!==void 0&&s(S,u)?S:(h=v,p=u)}var c=!1,h,p,g=n===void 0?null:n;return[function(){return l(t())},g===null?void 0:function(){return l(g())}]},[t,n,o,s]);var d=N(e,r[0],r[1]);return K(function(){f.hasValue=!0,f.value=d},[d]),X(d),d};F.exports=_;var Y=F.exports;const Z=H(Y),{useSyncExternalStoreWithSelector:V}=Z;function ee(e,t=e.getState,n){const o=V(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return R.useDebugValue(o),o}const x=e=>{const t=typeof e=="function"?P(e):e,n=(o,s)=>ee(t,o,s);return Object.assign(n,t),n},te=e=>e?x(e):x;function re(e,t){let n;try{n=e()}catch{return}return{getItem:s=>{var r;const f=l=>l===null?null:JSON.parse(l,t==null?void 0:t.reviver),d=(r=n.getItem(s))!=null?r:null;return d instanceof Promise?d.then(f):f(d)},setItem:(s,r)=>n.setItem(s,JSON.stringify(r,t==null?void 0:t.replacer)),removeItem:s=>n.removeItem(s)}}const b=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(o){return b(o)(n)},catch(o){return this}}}catch(n){return{then(o){return this},catch(o){return b(o)(n)}}}},ne=(e,t)=>(n,o,s)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:a=>a,version:0,merge:(a,m)=>({...m,...a}),...t},f=!1;const d=new Set,l=new Set;let c;try{c=r.getStorage()}catch{}if(!c)return e((...a)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...a)},o,s);const h=b(r.serialize),p=()=>{const a=r.partialize({...o()});let m;const i=h({state:a,version:r.version}).then(y=>c.setItem(r.name,y)).catch(y=>{m=y});if(m)throw m;return i},g=s.setState;s.setState=(a,m)=>{g(a,m),p()};const v=e((...a)=>{n(...a),p()},o,s);let S;const u=()=>{var a;if(!c)return;f=!1,d.forEach(i=>i(o()));const m=((a=r.onRehydrateStorage)==null?void 0:a.call(r,o()))||void 0;return b(c.getItem.bind(c))(r.name).then(i=>{if(i)return r.deserialize(i)}).then(i=>{if(i)if(typeof i.version=="number"&&i.version!==r.version){if(r.migrate)return r.migrate(i.state,i.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return i.state}).then(i=>{var y;return S=r.merge(i,(y=o())!=null?y:v),n(S,!0),p()}).then(()=>{m==null||m(S,void 0),f=!0,l.forEach(i=>i(S))}).catch(i=>{m==null||m(void 0,i)})};return s.persist={setOptions:a=>{r={...r,...a},a.getStorage&&(c=a.getStorage())},clearStorage:()=>{c==null||c.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>u(),hasHydrated:()=>f,onHydrate:a=>(d.add(a),()=>{d.delete(a)}),onFinishHydration:a=>(l.add(a),()=>{l.delete(a)})},u(),S||v},oe=(e,t)=>(n,o,s)=>{let r={storage:re(()=>localStorage),partialize:u=>u,version:0,merge:(u,a)=>({...a,...u}),...t},f=!1;const d=new Set,l=new Set;let c=r.storage;if(!c)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...u)},o,s);const h=()=>{const u=r.partialize({...o()});return c.setItem(r.name,{state:u,version:r.version})},p=s.setState;s.setState=(u,a)=>{p(u,a),h()};const g=e((...u)=>{n(...u),h()},o,s);let v;const S=()=>{var u,a;if(!c)return;f=!1,d.forEach(i=>{var y;return i((y=o())!=null?y:g)});const m=((a=r.onRehydrateStorage)==null?void 0:a.call(r,(u=o())!=null?u:g))||void 0;return b(c.getItem.bind(c))(r.name).then(i=>{if(i)if(typeof i.version=="number"&&i.version!==r.version){if(r.migrate)return r.migrate(i.state,i.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return i.state}).then(i=>{var y;return v=r.merge(i,(y=o())!=null?y:g),n(v,!0),h()}).then(()=>{m==null||m(v,void 0),v=o(),f=!0,l.forEach(i=>i(v))}).catch(i=>{m==null||m(void 0,i)})};return s.persist={setOptions:u=>{r={...r,...u},u.storage&&(c=u.storage)},clearStorage:()=>{c==null||c.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>S(),hasHydrated:()=>f,onHydrate:u=>(d.add(u),()=>{d.delete(u)}),onFinishHydration:u=>(l.add(u),()=>{l.delete(u)})},r.skipHydration||S(),v||g},se=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?ne(e,t):oe(e,t),ie=se,ae=te(ie(e=>({favorites:[],addFavorite:t=>{e(n=>({favorites:n.favorites.concat(t)}))},removeFavorite:t=>{e(n=>({favorites:n.favorites.filter(o=>o!==t)}))},setFavorites:t=>{e(()=>({favorites:t}))}}),{name:"anime-favorites",version:1})),ce=ae;export{ce as u};
