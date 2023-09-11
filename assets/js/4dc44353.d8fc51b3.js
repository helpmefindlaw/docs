"use strict";(self.webpackChunkhelpmefindlaw_docs=self.webpackChunkhelpmefindlaw_docs||[]).push([[526],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1},i="Question and Answer",s={unversionedId:"use-cases/qanda",id:"use-cases/qanda",title:"Question and Answer",description:"Using the /retreival endpoint, you can build your own legal Question and Answer with sources chain by consuming the helpmefindlaw API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset.",source:"@site/docs/use-cases/qanda.md",sourceDirName:"use-cases",slug:"/use-cases/qanda",permalink:"/docs/use-cases/qanda",draft:!1,editUrl:"https://github.com/helpmefindlaw/docs/tree/main/docs/use-cases/qanda.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Use Cases",permalink:"/docs/category/use-cases"},next:{title:"Contract Drafting",permalink:"/docs/use-cases/contract-drafting"}},c={},l=[{value:"Langchain Example",id:"langchain-example",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"question-and-answer"},"Question and Answer"),(0,a.kt)("p",null,"Using the /retreival endpoint, you can build your own legal Question and Answer with sources chain by consuming the helpmefindlaw API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset."),(0,a.kt)("h2",{id:"langchain-example"},"Langchain Example"),(0,a.kt)("p",null,"Release a version 1.0 of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="qanda.ts"',title:'"qanda.ts"'},'async function getCompletion(token: string) {\n  const resp = await fetch("https://api.helpmefindlaw.com/completion", {\n    method: "POST",\n    body: JSON.stringify({\n      prompt:\n        "What laws must I abide by when creating a raffle in Nervada, USA.",\n    }),\n    headers: {\n      Authorization: `Bearer ${token}`,\n      "Content-Type": "application/json",\n    },\n  });\n  if (resp.ok) {\n    return await resp.json();\n  }\n}\n')))}d.isMDXComponent=!0}}]);