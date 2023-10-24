import{c as se,z as ie,_ as $,A as oe,C as B,D as z,E as ae,F as ue,G as H,H as W,I as ce,J as le,K as C,S as de,v as x,L as he,M as fe,r as w,n as ve,j as R,B as pe,k as T,T as me,N as ye,O as ge,P as Se}from"./index-ec97c7d2.js";const ht=se("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var Re=function(n){ie(t,n);function t(i,s){var e;return e=n.call(this)||this,e.client=i,e.options=s,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(s),e}var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),q(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return _(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return _(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(s,e){var a=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(s),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var c=this.hasListeners();c&&J(this.currentQuery,o,this.options,a)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==o||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();c&&(this.currentQuery!==o||this.options.enabled!==a.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},r.getOptimisticResult=function(s){var e=this.client.defaultQueryObserverOptions(s),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(s,e){var a=this,o={},c=function(v){a.trackedProps.includes(v)||a.trackedProps.push(v)};return Object.keys(s).forEach(function(u){Object.defineProperty(o,u,{configurable:!1,enumerable:!0,get:function(){return c(u),s[u]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),o},r.getNextResult=function(s){var e=this;return new Promise(function(a,o){var c=e.subscribe(function(u){u.isFetching||(c(),u.isError&&(s!=null&&s.throwOnError)?o(u.error):a(u))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(s){return this.fetch($({},s,{meta:{refetchPage:s==null?void 0:s.refetchPage}}))},r.fetchOptimistic=function(s){var e=this,a=this.client.defaultQueryObserverOptions(s),o=this.client.getQueryCache().build(this.client,a);return o.fetch().then(function(){return e.createResult(o,a)})},r.fetch=function(s){var e=this;return this.executeFetch(s).then(function(){return e.updateResult(),e.currentResult})},r.executeFetch=function(s){this.updateQuery();var e=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(e=e.catch(oe)),e},r.updateStaleTimeout=function(){var s=this;if(this.clearStaleTimeout(),!(B||this.currentResult.isStale||!z(this.options.staleTime))){var e=ae(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){s.currentResult.isStale||s.updateResult()},a)}},r.computeRefetchInterval=function(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1},r.updateRefetchInterval=function(s){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=s,!(B||this.options.enabled===!1||!z(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||ue.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(s,e){var a=this.currentQuery,o=this.options,c=this.currentResult,u=this.currentResultState,v=this.currentResultOptions,y=s!==a,g=y?s.state:this.currentQueryInitialState,m=y?this.currentResult:this.previousQueryResult,h=s.state,l=h.dataUpdatedAt,f=h.error,S=h.errorUpdatedAt,d=h.isFetching,p=h.status,L=!1,N=!1,b;if(e.optimisticResults){var M=this.hasListeners(),te=!M&&q(s,e),re=M&&J(s,a,e,o);(te||re)&&(d=!0,l||(p="loading"))}if(e.keepPreviousData&&!h.dataUpdateCount&&(m!=null&&m.isSuccess)&&p!=="error")b=m.data,l=m.dataUpdatedAt,p=m.status,L=!0;else if(e.select&&typeof h.data<"u")if(c&&h.data===(u==null?void 0:u.data)&&e.select===this.selectFn)b=this.selectResult;else try{this.selectFn=e.select,b=e.select(h.data),e.structuralSharing!==!1&&(b=H(c==null?void 0:c.data,b)),this.selectResult=b,this.selectError=null}catch(O){W().error(O),this.selectError=O}else b=h.data;if(typeof e.placeholderData<"u"&&typeof b>"u"&&(p==="loading"||p==="idle")){var E;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(v==null?void 0:v.placeholderData))E=c.data;else if(E=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof E<"u")try{E=e.select(E),e.structuralSharing!==!1&&(E=H(c==null?void 0:c.data,E)),this.selectError=null}catch(O){W().error(O),this.selectError=O}typeof E<"u"&&(p="success",b=E,N=!0)}this.selectError&&(f=this.selectError,b=this.selectResult,S=Date.now(),p="error");var ne={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:b,dataUpdatedAt:l,error:f,errorUpdatedAt:S,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>g.dataUpdateCount||h.errorUpdateCount>g.errorUpdateCount,isFetching:d,isRefetching:d&&p!=="loading",isLoadingError:p==="error"&&h.dataUpdatedAt===0,isPlaceholderData:N,isPreviousData:L,isRefetchError:p==="error"&&h.dataUpdatedAt!==0,isStale:j(s,e),refetch:this.refetch,remove:this.remove};return ne},r.shouldNotifyListeners=function(s,e){if(!e)return!0;var a=this.options,o=a.notifyOnChangeProps,c=a.notifyOnChangePropsExclusions;if(!o&&!c||o==="tracked"&&!this.trackedProps.length)return!0;var u=o==="tracked"?this.trackedProps:o;return Object.keys(s).some(function(v){var y=v,g=s[y]!==e[y],m=u==null?void 0:u.some(function(l){return l===v}),h=c==null?void 0:c.some(function(l){return l===v});return g&&!h&&(!u||m)})},r.updateResult=function(s){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ce(this.currentResult,e)){var a={cache:!0};(s==null?void 0:s.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify($({},a,s))}},r.updateQuery=function(){var s=this.client.getQueryCache().build(this.client,this.options);if(s!==this.currentQuery){var e=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),s.addObserver(this))}},r.onQueryUpdate=function(s){var e={};s.type==="success"?e.onSuccess=!0:s.type==="error"&&!le(s.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(s){var e=this;C.batch(function(){s.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):s.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),s.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),s.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},t}(de);function be(n,t){return t.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&t.retryOnMount===!1)}function q(n,t){return be(n,t)||n.state.dataUpdatedAt>0&&_(n,t,t.refetchOnMount)}function _(n,t,r){if(t.enabled!==!1){var i=typeof r=="function"?r(n):r;return i==="always"||i!==!1&&j(n,t)}return!1}function J(n,t,r,i){return r.enabled!==!1&&(n!==t||i.enabled===!1)&&(!r.suspense||n.state.status!=="error")&&j(n,r)}function j(n,t){return n.isStaleByTime(t.staleTime)}function Ee(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var xe=x.createContext(Ee()),we=function(){return x.useContext(xe)};function Ie(n,t,r){return typeof t=="function"?t.apply(void 0,r):typeof t=="boolean"?t:!!n}function Oe(n,t){var r=x.useRef(!1),i=x.useState(0),s=i[1],e=he(),a=we(),o=e.defaultQueryObserverOptions(n);o.optimisticResults=!0,o.onError&&(o.onError=C.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=C.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=C.batchCalls(o.onSettled)),o.suspense&&(typeof o.staleTime!="number"&&(o.staleTime=1e3),o.cacheTime===0&&(o.cacheTime=1)),(o.suspense||o.useErrorBoundary)&&(a.isReset()||(o.retryOnMount=!1));var c=x.useState(function(){return new t(e,o)}),u=c[0],v=u.getOptimisticResult(o);if(x.useEffect(function(){r.current=!0,a.clearReset();var y=u.subscribe(C.batchCalls(function(){r.current&&s(function(g){return g+1})}));return u.updateResult(),function(){r.current=!1,y()}},[a,u]),x.useEffect(function(){u.setOptions(o,{listeners:!1})},[o,u]),o.suspense&&v.isLoading)throw u.fetchOptimistic(o).then(function(y){var g=y.data;o.onSuccess==null||o.onSuccess(g),o.onSettled==null||o.onSettled(g,null)}).catch(function(y){a.clearReset(),o.onError==null||o.onError(y),o.onSettled==null||o.onSettled(void 0,y)});if(v.isError&&!a.isReset()&&!v.isFetching&&Ie(o.suspense,o.useErrorBoundary,[v.error,u.getCurrentQuery()]))throw v.error;return o.notifyOnChangeProps==="tracked"&&(v=u.trackResult(v,o)),v}function ft(n,t,r){var i=fe(n,t,r);return Oe(i,Re)}const K=n=>{let t;const r=new Set,i=(c,u)=>{const v=typeof c=="function"?c(t):c;if(!Object.is(v,t)){const y=t;t=u??typeof v!="object"?v:Object.assign({},t,v),r.forEach(g=>g(t,y))}},s=()=>t,o={setState:i,getState:s,subscribe:c=>(r.add(c),()=>r.delete(c)),destroy:()=>{r.clear()}};return t=n(i,s,o),o},Ce=n=>n?K(n):K;var Y={exports:{}},X={},Z={exports:{}},ee={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=w;function Qe(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Te=typeof Object.is=="function"?Object.is:Qe,Fe=I.useState,Ae=I.useEffect,Ue=I.useLayoutEffect,De=I.useDebugValue;function _e(n,t){var r=t(),i=Fe({inst:{value:r,getSnapshot:t}}),s=i[0].inst,e=i[1];return Ue(function(){s.value=r,s.getSnapshot=t,A(s)&&e({inst:s})},[n,r,t]),Ae(function(){return A(s)&&e({inst:s}),n(function(){A(s)&&e({inst:s})})},[n]),De(r),r}function A(n){var t=n.getSnapshot;n=n.value;try{var r=t();return!Te(n,r)}catch{return!0}}function je(n,t){return t()}var Pe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?je:_e;ee.useSyncExternalStore=I.useSyncExternalStore!==void 0?I.useSyncExternalStore:Pe;Z.exports=ee;var ke=Z.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=w,Le=ke;function Ne(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Me=typeof Object.is=="function"?Object.is:Ne,$e=Le.useSyncExternalStore,Be=F.useRef,ze=F.useEffect,He=F.useMemo,We=F.useDebugValue;X.useSyncExternalStoreWithSelector=function(n,t,r,i,s){var e=Be(null);if(e.current===null){var a={hasValue:!1,value:null};e.current=a}else a=e.current;e=He(function(){function c(m){if(!u){if(u=!0,v=m,m=i(m),s!==void 0&&a.hasValue){var h=a.value;if(s(h,m))return y=h}return y=m}if(h=y,Me(v,m))return h;var l=i(m);return s!==void 0&&s(h,l)?h:(v=m,y=l)}var u=!1,v,y,g=r===void 0?null:r;return[function(){return c(t())},g===null?void 0:function(){return c(g())}]},[t,r,i,s]);var o=$e(n,e[0],e[1]);return ze(function(){a.hasValue=!0,a.value=o},[o]),We(o),o};Y.exports=X;var qe=Y.exports;const Je=ve(qe),{useSyncExternalStoreWithSelector:Ke}=Je;function Ve(n,t=n.getState,r){const i=Ke(n.subscribe,n.getState,n.getServerState||n.getState,t,r);return w.useDebugValue(i),i}const V=n=>{const t=typeof n=="function"?Ce(n):n,r=(i,s)=>Ve(t,i,s);return Object.assign(r,t),r},Ge=n=>n?V(n):V;function Ye(n,t){let r;try{r=n()}catch{return}return{getItem:s=>{var e;const a=c=>c===null?null:JSON.parse(c,t==null?void 0:t.reviver),o=(e=r.getItem(s))!=null?e:null;return o instanceof Promise?o.then(a):a(o)},setItem:(s,e)=>r.setItem(s,JSON.stringify(e,t==null?void 0:t.replacer)),removeItem:s=>r.removeItem(s)}}const Q=n=>t=>{try{const r=n(t);return r instanceof Promise?r:{then(i){return Q(i)(r)},catch(i){return this}}}catch(r){return{then(i){return this},catch(i){return Q(i)(r)}}}},Xe=(n,t)=>(r,i,s)=>{let e={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:f=>f,version:0,merge:(f,S)=>({...S,...f}),...t},a=!1;const o=new Set,c=new Set;let u;try{u=e.getStorage()}catch{}if(!u)return n((...f)=>{console.warn(`[zustand persist middleware] Unable to update item '${e.name}', the given storage is currently unavailable.`),r(...f)},i,s);const v=Q(e.serialize),y=()=>{const f=e.partialize({...i()});let S;const d=v({state:f,version:e.version}).then(p=>u.setItem(e.name,p)).catch(p=>{S=p});if(S)throw S;return d},g=s.setState;s.setState=(f,S)=>{g(f,S),y()};const m=n((...f)=>{r(...f),y()},i,s);let h;const l=()=>{var f;if(!u)return;a=!1,o.forEach(d=>d(i()));const S=((f=e.onRehydrateStorage)==null?void 0:f.call(e,i()))||void 0;return Q(u.getItem.bind(u))(e.name).then(d=>{if(d)return e.deserialize(d)}).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==e.version){if(e.migrate)return e.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var p;return h=e.merge(d,(p=i())!=null?p:m),r(h,!0),y()}).then(()=>{S==null||S(h,void 0),a=!0,c.forEach(d=>d(h))}).catch(d=>{S==null||S(void 0,d)})};return s.persist={setOptions:f=>{e={...e,...f},f.getStorage&&(u=f.getStorage())},clearStorage:()=>{u==null||u.removeItem(e.name)},getOptions:()=>e,rehydrate:()=>l(),hasHydrated:()=>a,onHydrate:f=>(o.add(f),()=>{o.delete(f)}),onFinishHydration:f=>(c.add(f),()=>{c.delete(f)})},l(),h||m},Ze=(n,t)=>(r,i,s)=>{let e={storage:Ye(()=>localStorage),partialize:l=>l,version:0,merge:(l,f)=>({...f,...l}),...t},a=!1;const o=new Set,c=new Set;let u=e.storage;if(!u)return n((...l)=>{console.warn(`[zustand persist middleware] Unable to update item '${e.name}', the given storage is currently unavailable.`),r(...l)},i,s);const v=()=>{const l=e.partialize({...i()});return u.setItem(e.name,{state:l,version:e.version})},y=s.setState;s.setState=(l,f)=>{y(l,f),v()};const g=n((...l)=>{r(...l),v()},i,s);let m;const h=()=>{var l,f;if(!u)return;a=!1,o.forEach(d=>{var p;return d((p=i())!=null?p:g)});const S=((f=e.onRehydrateStorage)==null?void 0:f.call(e,(l=i())!=null?l:g))||void 0;return Q(u.getItem.bind(u))(e.name).then(d=>{if(d)if(typeof d.version=="number"&&d.version!==e.version){if(e.migrate)return e.migrate(d.state,d.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return d.state}).then(d=>{var p;return m=e.merge(d,(p=i())!=null?p:g),r(m,!0),v()}).then(()=>{S==null||S(m,void 0),m=i(),a=!0,c.forEach(d=>d(m))}).catch(d=>{S==null||S(void 0,d)})};return s.persist={setOptions:l=>{e={...e,...l},l.storage&&(u=l.storage)},clearStorage:()=>{u==null||u.removeItem(e.name)},getOptions:()=>e,rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:l=>(o.add(l),()=>{o.delete(l)}),onFinishHydration:l=>(c.add(l),()=>{c.delete(l)})},e.skipHydration||h(),m||g},et=(n,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?Xe(n,t):Ze(n,t),tt=et,rt=Ge(tt(n=>({favorites:[],addFavorite:t=>n(r=>({favorites:r.favorites.concat(t)})),removeFavorite:t=>n(r=>({favorites:r.favorites.filter(i=>i!==t)}))}),{name:"anime-favorites",version:1})),U=rt,nt=n=>R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",...n,children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),st=nt;function vt({loading:n,anime:t}){const r=U(o=>o.favorites),i=U(o=>o.addFavorite),s=U(o=>o.removeFavorite),e=w.useMemo(()=>!t||!t.mal_id?!1:r.includes(t.mal_id),[r,t]),a=()=>{!t||!t.mal_id||(e?s(t.mal_id):i(t.mal_id))};return R.jsxs("div",{className:"relative flex flex-col gap-2",children:[R.jsx(pe,{size:"icon",className:"absolute right-2 top-2 z-10 rounded-full text-yellow-500 hover:bg-neutral-100/10 hover:text-yellow-300",variant:"ghost",onClick:a,children:R.jsx(st,{fill:e?"currentColor":"none"})}),n||!t?R.jsx("div",{className:"aspect-[3/4] w-full animate-pulse rounded-sm bg-gray-300"}):R.jsx("img",{src:t.images.jpg.image_url,alt:t.title,width:500,height:670,className:T("aspect-[3/4] w-full rounded-sm object-cover outline outline-transparent brightness-75 transition-all",e&&"outline-yellow-300")}),n||!t?R.jsx("div",{className:"h-4 w-full animate-pulse rounded-sm bg-gray-300"}):R.jsxs(me,{children:[R.jsx(ye,{asChild:!0,children:R.jsx("h4",{className:"line-clamp-2 text-center text-lg font-medium tracking-tight",children:t.title})}),R.jsx(ge,{children:R.jsx("p",{children:t.title})})]})]})}const P="https://api.jikan.moe";function pt(){const n=new URL("/v4/genres/anime",P);return k(n)}function mt(n){const t=new URL("/v4/anime",P);for(const r in n){const i=n[r];i&&t.searchParams.set(r,String(i))}return k(t)}function yt({id:n}){const t=new URL(`/v4/anime/${n}`,P);return k(t)}const it=1e3;let G=0,D=Promise.resolve();function k(n){return D=D.then(()=>{const t=Date.now(),r=G+it;if(t<r)return new Promise(i=>{setTimeout(i,r-t)})}).then(()=>{const t=Date.now();return fetch(n).then(r=>{const i=Date.now();if(i-t<20||(G=i),r.status>=400)throw new Error(r.statusText);return r.json()}).then(r=>{if(ot(r))throw new Error(r.error);return r})}),D}function ot(n){return typeof n=="object"&&typeof n.status=="number"&&typeof n.type=="string"&&typeof n.error=="string"&&typeof n.messages=="object"}const at=Se("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),ut=w.forwardRef(({className:n,variant:t,...r},i)=>R.jsx("div",{ref:i,role:"alert",className:T(at({variant:t}),n),...r}));ut.displayName="Alert";const ct=w.forwardRef(({className:n,...t},r)=>R.jsx("h5",{ref:r,className:T("mb-1 font-medium leading-none tracking-tight",n),...t}));ct.displayName="AlertTitle";const lt=w.forwardRef(({className:n,...t},r)=>R.jsx("div",{ref:r,className:T("text-sm [&_p]:leading-relaxed",n),...t}));lt.displayName="AlertDescription";export{ut as A,ht as a,ct as b,lt as c,vt as d,mt as e,yt as f,pt as g,U as h,ft as u};
