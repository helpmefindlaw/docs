"use strict";(self.webpackChunklawme_docs=self.webpackChunklawme_docs||[]).push([[526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="Question and Answer",l={unversionedId:"use-cases/qanda",id:"use-cases/qanda",title:"Question and Answer",description:"Using the /retreival endpoint, you can build your own legal Question and Answer with sources chain by consuming the lawme.ai API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset.",source:"@site/docs/use-cases/qanda.md",sourceDirName:"use-cases",slug:"/use-cases/qanda",permalink:"/docs/use-cases/qanda",draft:!1,editUrl:"https://github.com/helpmefindlaw/docs/tree/main/docs/use-cases/qanda.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Contract Drafting",permalink:"/docs/use-cases/contract-drafting"}},s={},c=[{value:"Langchain Example",id:"langchain-example",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"question-and-answer"},"Question and Answer"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/retreival")," endpoint, you can build your own legal Question and Answer with sources chain by consuming the lawme.ai API as a retreiver with langchain or llama index. This is usefull if you want to get access to the raw retreival functionality of our RAG pipeline, which includes the joint functionality of a vector search and knowledge graph over our custom laws dataset."),(0,a.kt)("h2",{id:"langchain-example"},"Langchain Example"),(0,a.kt)("p",null,"We define a custom langchain retriever like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="examples/src/utils/langchain.py"',title:'"examples/src/utils/langchain.py"'},'from typing import List\n\nfrom .api import RetrievalInput, LawMeClient\nfrom langchain.callbacks.manager import CallbackManagerForRetrieverRun\nfrom langchain.schema import BaseRetriever, Document\n\n\nclass LawMeRetriever(BaseRetriever):\n    """`lawme.ai` retriever.\n\n    It is used for the question-answering with sources with\n    the `/retrieve` endpoint of lawme.ai."""\n\n    client: LawMeClient\n\n    def _get_relevant_documents(\n        self, query: str, *, run_manager: CallbackManagerForRetrieverRun\n    ) -> List[Document]:\n        """Get documents relevant for a query."""\n        docs = self.client.retrieve(RetrievalInput(prompt=query))\n\n        # parse source nodes\n        docs = []\n        for doc in docs:\n            metadata = doc.metadata or {}\n            docs.append(\n                Document(\n                    page_content=doc.text,\n                    metadata=metadata)\n            )\n        return docs\n')),(0,a.kt)("p",null,"With this retriever, it is quite straight forward to add lawme.ai into your langchain workflows. The example below builds a RetrievalQA chain from the lawme.ai retriever. This allows you to develop your own legal QandA system leveraging the data and retreival optimizations within lawme.ai."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="qanda.py"',title:'"qanda.py"'},'import os\nfrom dotenv import load_dotenv\nfrom utils.api import LawMeClient\nfrom utils.langchain import LawMeRetriever\nfrom langchain.chains import RetrievalQA\nfrom langchain.chat_models import ChatOpenAI\n\nclient = LawMeClient(token="******")\nretriever = LawMeRetriever(client=client)\nllm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)\nchain = RetrievalQA.from_chain_type(llm, retriever=retriever)\n\nquestion = "What is the statute of limitations for a personal injury claim in California?"\nresult = chain({"query": question})\n')))}m.isMDXComponent=!0}}]);