"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28600],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var m=n.createContext({}),c=function(e){var t=n.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(o),g=i,d=s["".concat(m,".").concat(g)]||s[g]||p[g]||r;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},4870:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(87462),i=(o(67294),o(3905));const r={title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},a=void 0,l={permalink:"/blog/mui-button-in-react",source:"@site/blog/2022-09-05-mui-button.md",title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-button",permalink:"/blog/tags/mui-button"}],readingTime:9.04,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},prevItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},nextItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},relatedPosts:[{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.835,date:"2022-08-04T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.685,date:"2022-09-04T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.495,date:"2022-09-11T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.375,date:"2022-10-30T00:00:00.000Z"},{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Material UI is a dynamic React library because it provides numerous component infrastructures for responsive web design. One such essential component is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),". "),(0,i.kt)("p",null,"In this article, we will deeply explore the MUI ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," component, its variants, and the different ways it can be used in a React application."))}p.isMDXComponent=!0}}]);