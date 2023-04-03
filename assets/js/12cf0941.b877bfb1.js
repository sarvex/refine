"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61112],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83745:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),a=n(67294),o=n(3905);const i={id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},s=void 0,l={unversionedId:"api-reference/chakra-ui/components/inferencer",id:"api-reference/chakra-ui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports ChakraUIListInferencer, ChakraUIShowInferencer, ChakraUIEditInferencer, ChakraUICreateInferencer and ChakraUIInferencer (which combines all in one place) components.",source:"@site/docs/api-reference/chakra-ui/components/inferencer.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/inferencer",permalink:"/docs/api-reference/chakra-ui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/inferencer.md",tags:[],version:"current",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1680531399,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/api-reference/chakra-ui/components/chakra-auth-page"},next:{title:"Create",permalink:"/docs/api-reference/chakra-ui/components/basic-views/create"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],u=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",r)},m=u("Tabs"),d=u("TabItem"),f=u("CodeSandboxExample"),h={toc:c};function k(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUICreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," (which combines all in one place) components."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Inferencer components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/chakra-ui"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.kt)(m,{defaultValue:"resources",values:[{label:(0,o.kt)(a.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(d,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        {/* highlight-next-line */}\n                        <Route path="/samples" element={<ChakraUIInferencer />} />\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n'))),(0,o.kt)(d,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"List")),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        }\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}\n                        >\n                            {/* highlight-next-line */}\n                            <Route path="/samples" element={<ChakraUIInferencer />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"Show")),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            show: "/samples/show/:id",\n                        }\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}\n                        >\n                            {/* highlight-next-line */}\n                            <Route path="/samples/show/:id" element={<ChakraUIInferencer />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"Create")),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            create: "/samples/create",\n                        }\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}\n                        >\n                            {/* highlight-next-line */}\n                            <Route path="/samples/create" element={<ChakraUIInferencer />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit"},(0,o.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            edit: "/samples/edit/:id",\n                        }\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}\n                        >\n                            {/* highlight-next-line */}\n                            <Route path="/samples/edit/:id" element={<ChakraUIInferencer />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/chakra-ui")," components."),(0,o.kt)(f,{path:"inferencer-chakra-ui",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);