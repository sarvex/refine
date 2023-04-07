"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||l[u]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/breadcrumb",id:"api-reference/antd/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Ant Design's Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/antd/components/breadcrumb.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/breadcrumb",permalink:"/docs/api-reference/antd/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1680862795,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/antd/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/antd/components/buttons/clone-button"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(l="PropsTable",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const m={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," components using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,o.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { Show, Breadcrumb } from "@refinedev/antd";\n\nconst PostIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-list"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <line x1={9} y1={6} x2={20} y2={6}></line>\n        <line x1={9} y1={12} x2={20} y2={12}></line>\n        <line x1={9} y1={18} x2={20} y2={18}></line>\n        <line x1={5} y1={6} x2={5} y2="6.01"></line>\n        <line x1={5} y1={12} x2={5} y2="12.01"></line>\n        <line x1={5} y1={18} x2={5} y2="18.01"></line>\n    </svg>\n);\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-next-line\n            breadcrumb={<Breadcrumb />}\n        >\n            <p>Content of your show page...</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nconst PostList = () => {\n    return (\n        <RefineAntd.List>\n            <p>Content of your list page...</p>\n        </RefineAntd.List>\n    );\n};\n\n\nsetInitialRoutes(["/posts/show/123"]);\n\nrender(\n    <ReactRouterDom.BrowserRouter>\n        <RefineCore.Refine\n            dataProvider={RefineSimpleRest.default("https://api.fake-rest.refine.dev")}\n            routerProvider={RefineReactRouterV6.default}\n            resources={[\n                {\n                    name: "posts",\n                    meta: { icon: PostIcon },\n                    show: "/posts/show/:id",\n                    list: "/posts",\n                },\n            ]}\n        >\n            <RefineAntd.Layout>\n                <ReactRouterDom.Routes>\n                    <ReactRouterDom.Route path="/posts" element={<PostList />} />\n                    <ReactRouterDom.Route path="/posts/show/:id" element={<PostShow />} />\n                </ReactRouterDom.Routes>\n            </RefineAntd.Layout>\n        </RefineCore.Refine>\n    </ReactRouterDom.BrowserRouter>,\n);\n')),(0,o.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In earlier versions of ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," API of ",(0,o.kt)("strong",{parentName:"p"},"refine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package."),(0,o.kt)("p",{parentName:"admonition"},"In earlier versions, the home icon in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"breadcrumbprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," component so it can be configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"showhome"},(0,o.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,o.kt)("p",null,"If you have a page with route ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb showHome={true} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"hideicons"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,o.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb hideIcons />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(d,{module:"@refinedev/antd/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://ant.design/components/breadcrumb/#API)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://ant.design/components/breadcrumb/#Breadcrumb)",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);