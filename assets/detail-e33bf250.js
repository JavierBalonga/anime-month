import{c as j,j as s,a as h,r as f,B as v,I as X,E as y,F as N,G as b}from"./index-f6e837f7.js";import{u,a as C,A as k,b as A,c as L,d as F,f as _}from"./alert-56adfb60.js";import{B as o}from"./badge-e74643f1.js";import{S as g}from"./types-8d4a14f3.js";const S=j("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),d=j("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),$=({className:r,...l})=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:h("h-6 w-6",r),...l,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})}),I=$,M=({className:r,...l})=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"1 1 22 22",className:h("h-6 w-6",r),...l,children:[s.jsx("path",{d:"M11.4849 3.49882C11.5272 3.39565 11.5993 3.3074 11.6919 3.24528C11.7845 3.18317 11.8934 3.15 12.0049 3.15C12.0049 4.15 12.0049 17.15 12.0049 17.5716C11.9016 17.5716 11.8002 17.6 11.7119 17.6538L6.98694 20.5398C6.89219 20.5978 6.78239 20.6264 6.67139 20.6221C6.5604 20.6177 6.45319 20.5805 6.3633 20.5152C6.27342 20.45 6.2049 20.3595 6.16639 20.2553C6.12788 20.1511 6.12111 20.0379 6.14694 19.9298L7.43194 14.5438C7.45577 14.4432 7.45139 14.338 7.41928 14.2397C7.38717 14.1415 7.32857 14.0539 7.24994 13.9868L3.04594 10.3848C2.96175 10.3124 2.90085 10.2168 2.87089 10.1099C2.84092 10.0029 2.84324 9.88957 2.87755 9.78397C2.91186 9.67837 2.97662 9.58528 3.0637 9.51639C3.15078 9.44751 3.25628 9.40591 3.36694 9.39682L8.88494 8.95482C8.98819 8.94658 9.08716 8.91001 9.17096 8.84914C9.25477 8.78827 9.32016 8.70546 9.35994 8.60982L11.4849 3.49882Z",fill:"currentColor"}),s.jsx("path",{d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),B=M;function V({value:r,loading:l}){return s.jsx("div",{className:"flex flex-row gap-1",children:l||r===void 0?Array.from({length:5}).map((n,i)=>s.jsx(d,{fill:"currentColor",className:"animate-pulse text-neutral-500"},i)):s.jsxs(s.Fragment,{children:[Array.from({length:Math.floor(r)}).map((n,i)=>s.jsx(d,{fill:"currentColor"},i)),r%1!==0&&s.jsx(B,{}),Array.from({length:Math.floor(5-r)}).map((n,i)=>s.jsx(d,{},i))]})})}function E({loading:r,previewUrl:l,url:n}){const[i,x]=f.useState(!1);return s.jsx("div",{className:"relative aspect-video h-full w-full overflow-hidden rounded-xl bg-background",children:r||!l||!n?s.jsx("div",{className:"h-full w-full animate-pulse bg-neutral-500 dark:bg-neutral-300"}):i?s.jsx("iframe",{src:n,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0,className:"h-full w-full"}):s.jsxs(s.Fragment,{children:[s.jsx("img",{src:l,alt:"YouTube video preview",className:"h-full w-full object-cover"}),s.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:s.jsx(v,{variant:"outline",size:"icon",className:"h-24 w-24 rounded-full pl-2 opacity-80",onClick:()=>x(!0),children:s.jsx(S,{className:"h-12 w-12 shrink-0",fill:"currentColor"})})})]})})}function H(r,l=0){const n=10**l;return Math.round(r*n)/n}function Y(){const{id:r}=X(),l=u(a=>a.favorites),n=u(a=>a.addFavorite),i=u(a=>a.removeFavorite),x=f.useMemo(()=>r?l.includes(Number(r)):!1,[l,r]),{data:e,isLoading:t,error:m}=C({queryKey:["/anime",r],queryFn:()=>_({id:Number(r)})}),p=f.useMemo(()=>H(((e==null?void 0:e.data.score)??0)/2,2),[e==null?void 0:e.data.score]),w=a=>{if(a.preventDefault(),!r)return;const c=Number(r);x?i(c):n(c)};return m?s.jsx("div",{className:"flex w-full max-w-7xl grow flex-col gap-24 py-24",children:s.jsxs(k,{variant:"destructive",children:[s.jsx(A,{className:"h-4 w-4"}),s.jsx(L,{children:"Error"}),s.jsx(F,{children:m instanceof Error?m.message:"Something went wrong!"})]})}):s.jsxs("div",{className:"flex w-full max-w-7xl grow flex-col gap-24 py-24",children:[s.jsxs("section",{className:"flex flex-col items-stretch gap-8 md:flex-row",children:[s.jsx("div",{className:"aspect-[3/4] h-full flex-shrink-0 overflow-hidden rounded-sm",children:t||!(e!=null&&e.data)?s.jsx("div",{className:"h-full w-[150px] animate-pulse bg-neutral-500 dark:bg-neutral-300 lg:w-[300px]"}):s.jsx("img",{src:e.data.images.jpg.large_image_url,alt:e.data.title,width:300,className:"w-full object-cover brightness-75 md:w-[300px]"})}),s.jsxs("div",{className:"flex grow flex-col gap-6",children:[s.jsxs("hgroup",{className:"flex flex-col gap-x-2 gap-y-4",children:[s.jsxs("div",{className:"flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-4",children:[s.jsxs("div",{className:"flex flex-row flex-wrap items-center gap-x-6 gap-y-4",children:[t||!(e!=null&&e.data)?s.jsx("div",{className:"h-9 w-[280px] animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"}):s.jsx("h1",{className:"text-4xl font-medium tracking-tight",children:e.data.title}),s.jsx(o,{variant:t||!(e!=null&&e.data)?"loading":"default",children:(e==null?void 0:e.data.type)??"XXX"})]}),s.jsxs("div",{className:"flex flex-row flex-wrap items-center gap-x-6  gap-y-4",children:[t||!(e!=null&&e.data)?s.jsx("div",{className:"h-7 w-[40px] animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"}):s.jsx("span",{className:"text-xl font-medium tracking-tight",children:p}),s.jsx(V,{loading:t||!(e!=null&&e.data),value:p}),s.jsxs(o,{variant:t||!(e!=null&&e.data)?"loading":(e==null?void 0:e.data.status)===g.CurrentlyAiring?"green":"pink",className:"items-center gap-2 px-6 py-2 text-xl text-white",children:[s.jsx(I,{})," ",s.jsx("span",{children:e!=null&&e.data.status?(e==null?void 0:e.data.status)===g.CurrentlyAiring?"On Air":"Finished":"XXX"})]})]})]}),s.jsxs("div",{className:"flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-4",children:[s.jsxs("div",{className:"flex flex-row items-center gap-2",children:[s.jsx(o,{variant:t||!(e!=null&&e.data)?"loading":"secondary",children:(e==null?void 0:e.data.title_english)??"XXXXXXXXXXXXXXXXXXXXX"}),s.jsx(o,{variant:t||!(e!=null&&e.data)?"loading":"secondary",children:(e==null?void 0:e.data.title_japanese)??"XXXXXXXXXXXXXXXXXXXXX"})]}),s.jsxs(y,{children:[s.jsx(N,{children:s.jsx(v,{className:"h-fit rounded-full p-0",variant:"ghost",onClick:w,children:s.jsxs(o,{variant:"secondary",className:h("flex gap-2 px-3 py-1 text-lg font-semibold",x&&"bg-yellow-500 text-black hover:bg-yellow-300"),children:[s.jsx("span",{children:"Favorite"}),s.jsx(d,{})]})})}),s.jsx(b,{children:s.jsx("p",{children:x?"Remove from favorites":"Add to favorites"})})]})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex flex-row flex-wrap items-center justify-between",children:[s.jsx("h5",{className:"text-2xl font-medium tracking-tight",children:"Synopsis"}),s.jsx("div",{className:"flex flex-row items-center gap-2",children:t||!(e!=null&&e.data)?Array.from({length:3},(a,c)=>s.jsx(o,{variant:"loading",children:"XXXXX"},c)):e==null?void 0:e.data.genres.map(a=>s.jsx(o,{children:a.name},a.mal_id))})]}),t||!(e!=null&&e.data)?Array.from({length:8},(a,c)=>s.jsx("div",{className:"h-4 animate-pulse rounded-sm bg-neutral-500 dark:bg-neutral-300"},c)):s.jsx("p",{children:e==null?void 0:e.data.synopsis})]})]})]}),s.jsxs("section",{className:"flex flex-col gap-4",children:[s.jsx("h5",{className:"text-4xl font-medium tracking-tight",children:"Trailer"}),s.jsx(E,{loading:t||!(e!=null&&e.data),previewUrl:e==null?void 0:e.data.trailer.images.maximum_image_url,url:e==null?void 0:e.data.trailer.embed_url})]})]})}export{Y as default};
