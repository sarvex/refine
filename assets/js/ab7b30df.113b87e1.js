"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(y,i(i({ref:t},s),{},{components:r})):o.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={id:"keycloak",title:"Keycloak","example-tags":["antd","auth-provider","keycloak"]},i=void 0,p={unversionedId:"examples/auth-provider/keycloak",id:"examples/auth-provider/keycloak",title:"Keycloak",description:"Keycloak is a modular, API-first authentication and authorization service that you may use to add authentication and authorization to your apps. In this example, you'll see how to use Keycloak Login with refine.",source:"@site/docs/examples/auth-provider/keycloak.md",sourceDirName:"examples/auth-provider",slug:"/examples/auth-provider/keycloak",permalink:"/docs/examples/auth-provider/keycloak",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/auth-provider/keycloak.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1680862795,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"keycloak",title:"Keycloak","example-tags":["antd","auth-provider","keycloak"]},sidebar:"someSidebar",previous:{title:"Google Auth",permalink:"/docs/examples/auth-provider/google-auth"},next:{title:"OTP Login",permalink:"/docs/examples/auth-provider/otpLogin"}},l={},c=[],s=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org"},"Keycloak")," is a modular, API-first authentication and authorization service that you may use to add authentication and authorization to your apps. In this example, you'll see how to use Keycloak Login with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Username"),": refine\n",(0,a.kt)("strong",{parentName:"p"},"Password"),": refine")),(0,a.kt)(s,{path:"auth-keycloak",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);