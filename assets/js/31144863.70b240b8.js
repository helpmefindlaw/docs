"use strict";(self.webpackChunkhelpmefindlaw_docs=self.webpackChunkhelpmefindlaw_docs||[]).push([[3947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},o="Statement Of Claim",s={unversionedId:"use-cases/statement-of-claim",id:"use-cases/statement-of-claim",title:"Statement Of Claim",description:"When drafting a contract clause, it's crucial to achieve clarcity and conciseness to express the parties' intent effectively without conflicting with applicable laws. Some clauses may need to align with statutory compliance requirements or industry best practices.",source:"@site/docs/use-cases/statement-of-claim.md",sourceDirName:"use-cases",slug:"/use-cases/statement-of-claim",permalink:"/docs/use-cases/statement-of-claim",draft:!1,editUrl:"https://github.com/helpmefindlaw/docs/tree/main/docs/use-cases/statement-of-claim.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Contract Drafting",permalink:"/docs/use-cases/contract-drafting"},next:{title:"API Reference",permalink:"/docs/category/api-reference"}},c={},l=[{value:"Working Example",id:"working-example",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"statement-of-claim"},"Statement Of Claim"),(0,a.kt)("p",null,"When drafting a contract clause, it's crucial to achieve clarcity and conciseness to express the parties' intent effectively without conflicting with applicable laws. Some clauses may need to align with statutory compliance requirements or industry best practices."),(0,a.kt)("p",null,"Lawyers leverage their expertise in legal frameworks, statutory requirements, contract principles, and industry standards to determine necessary clauses for an agreement. To replicate this workflow with AI, the AI should possess knowledge of best practices, gained through fine-tuning on contract data, and the ability to interpret and incorporate relevant laws, similar to a professional Lawyer."),(0,a.kt)("p",null,"Utilizing the HelpMeFindLaw Developer API, we can enhance contract drafting assistance by employing a multi-step planning agent and the /completions endpoint. We'll explore this approach in more detail below."),(0,a.kt)("h2",{id:"working-example"},"Working Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="qanda.ts"',title:'"qanda.ts"'},'async function getCompletion(token: string) {\n  const resp = await fetch("https://api.helpmefindlaw.com/completion", {\n    method: "POST",\n    body: JSON.stringify({\n      prompt:\n        "What laws must I abide by when creating a raffle in Nervada, USA.",\n    }),\n    headers: {\n      Authorization: `Bearer ${token}`,\n      "Content-Type": "application/json",\n    },\n  });\n  if (resp.ok) {\n    return await resp.json();\n  }\n}\n')))}m.isMDXComponent=!0}}]);