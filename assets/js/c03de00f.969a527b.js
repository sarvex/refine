"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35018],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),y=n,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},66539:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const i={id:"deploy-project",title:"6. Deploy your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}},a=void 0,l={unversionedId:"tutorial/getting-started/deploy-project",id:"version-3.xx.xx/tutorial/getting-started/deploy-project",title:"6. Deploy your app to the web",description:"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/5-deploy-project.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/deploy-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/deploy-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/5-deploy-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1680531399,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:5,frontMatter:{id:"deploy-project",title:"6. Deploy your app to the web",tutorial:{prev:"tutorial/getting-started/store-your-repository",next:"tutorial/understanding-dataprovider/index"}}},p={},s=[{value:"Create a new Netlify site",id:"create-a-new-netlify-site",level:2},{value:"Visit your new website",id:"visit-your-new-website",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("Checklist"),d=c("ChecklistItem"),y={toc:s};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To make your app accessible to the public, you can use a hosting service to build and deploy your site live on the web. In this tutorial, we will use Netlify, but you are welcome to choose your preferred hosting service."),(0,n.kt)("p",null,"Netlify will use your GitHub repository to build and deploy your site every time you commit a change to your code. To connect your repository to Netlify, you will need to create a new Netlify site and link it to your GitHub repository."),(0,n.kt)("h2",{id:"create-a-new-netlify-site"},"Create a new Netlify site"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you don't already have a Netlify account, go to ",(0,n.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify.com")," and create a free account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Add new site")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Import an existing project"),"."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You will be prompted to connect to a Git provider. Choose GitHub and follow the on-screen instructions to authenticate your GitHub account. Then, choose your project\u2019s GitHub repository from the list provided.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To complete the process of deploying your app to the web, you will need to review and confirm the settings provided by Netlify. These settings should already be correctly configured for your ",(0,n.kt)("strong",{parentName:"li"},"refine")," project. Simply scroll down and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy site"),".")),(0,n.kt)("p",null,"Congratulations! You now have an ",(0,n.kt)("strong",{parentName:"p"},"refine")," website hosted on Netlify."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To support for client-side routing, you can check out the Create React App documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/#netlify"},"deployment"),".")),(0,n.kt)("h2",{id:"visit-your-new-website"},"Visit your new website"),(0,n.kt)("p",null,"To view your new website, visit the URL provided in your site settings or type it into a browser window."),(0,n.kt)(u,{mdxType:"Checklist"},(0,n.kt)(d,{id:"deploy-your-project",mdxType:"ChecklistItem"},"I deployed my app to the Netfly.")))}f.isMDXComponent=!0}}]);