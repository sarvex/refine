"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(67842),n(43925),n(89542);const i={title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a Refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","darkmode","theme","ant-design"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/how-to-add-darkmode-in-ant-design",source:"@site/blog/2022-02-12-implement-darkmode.md",title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a Refine/Ant Design app, using gulp library and leveraging some React features like hooks",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"darkmode",permalink:"/blog/tags/darkmode"},{label:"theme",permalink:"/blog/tags/theme"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:4.885,hasTruncateMarker:!0,authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],frontMatter:{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a Refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","darkmode","theme","ant-design"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui"},nextItem:{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv"},relatedPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.92,date:"2022-10-04T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.61,date:"2022-03-16T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this article, we will provide an example on how to implement darkmode with ",(0,a.kt)("strong",{parentName:"p"},"refine"),". In order to switch between light and dark mode, we need 2 different styles and the possibility to switch between one and the other without restarting the application. Since the Less stylesheets with React doesn't allow variables to be modified without compilation and therefore a restart of the application. To solve this, we are going to use ",(0,a.kt)("strong",{parentName:"p"},"gulp")," that will compile the Less files into swappable CSS, directly accessible to the running application."))}m.isMDXComponent=!0},67842:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/css-2b017e876add7377874facb7cb18810a.png"},89542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dark-487d8449c7217d3f305cef1149029c68.png"},43925:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/light-3355e20004325de7707efc0cc3ff64aa.png"}}]);