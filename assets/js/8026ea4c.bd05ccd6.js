"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/actionButtonUsageMui-3ccde10c5fe5da0c82f71365bc2c04de.png",i=n.p+"assets/images/cardHeaderPropsTitle-060274be72f7068ebfc6af1b1d8941c8.png",p={id:"edit",title:"Edit"},d=void 0,s={unversionedId:"api-reference/mui/components/basic-views/edit",id:"api-reference/mui/components/basic-views/edit",title:"Edit",description:"` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a `.",source:"@site/docs/api-reference/mui/components/basic-views/edit.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/edit",permalink:"/docs/api-reference/mui/components/basic-views/edit",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/edit.md",tags:[],version:"current",lastUpdatedBy:"TDP17",lastUpdatedAt:1666700495,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{id:"edit",title:"Edit"},sidebar:"someSidebar",previous:{title:"Create",permalink:"/docs/api-reference/mui/components/basic-views/create"},next:{title:"List",permalink:"/docs/api-reference/mui/components/basic-views/list"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",level:3},{value:"<code>canDelete</code> and <code>deleteButtonProps</code>",id:"candelete-and-deletebuttonprops",level:3},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>mutationMode</code>",id:"mutationmode",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<code>footerButtons</code>",id:"footerbuttons",level:3},{value:"<code>footerButtonProps</code>",id:"footerbuttonprops",level:3},{value:"<del><code>actionButtons</code></del>",id:"actionbuttons",level:3},{value:"<del><code>cardProps</code></del>",id:"cardprops",level:3},{value:"<del><code>cardHeaderProps</code></del>",id:"cardheaderprops",level:3},{value:"<del><code>cardContentProps</code></del>",id:"cardcontentprops",level:3},{value:"<del><code>cardActionsProps</code></del>",id:"cardactionsprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const h={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/refresh-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<RefreshButton>")),"."),(0,a.kt)("p",null,"We will show what ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," does using properties with examples."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"It allows adding title inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>"),' component. if you don\'t pass title props it uses "Edit" prefix and singular resource name by default. For example, for the ',(0,a.kt)("inlineCode",{parentName:"p"},"/posts/edit"),' resource, it will be "Edit post".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return <Edit title="Custom Title">...</Edit>;\n};\n')),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component in a custom page, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { Edit } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <Edit resource="posts">...</Edit>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"savebuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component has a save button by default. If you want to customize this button you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,a.kt)("p",null,"Clicking on the save button will submit your form."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/save-button"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    // highlight-next-line\n    return <Edit saveButtonProps={{ size: "small" }}>...</Edit>;\n};\n')),(0,a.kt)("h3",{id:"candelete-and-deletebuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"deleteButtonProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," allows us to add the delete button inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component. If the resource has the ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," property, refine adds the delete button by default. If you want to customize this button you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteButtonProps")," property like the code below."),(0,a.kt)("p",null,"When clicked on, the delete button executes the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete"},(0,a.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton>")," documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'import { usePermissions } from "@pankod/refine-core";\n// highlight-next-line\nimport { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Edit\n            // highlight-start\n            canDelete={data === "admin"}\n            deleteButtonProps={{ size: "small" }}\n            // highlight-end\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,a.kt)("h3",{id:"recorditemid"},(0,a.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL(when used on a custom page, modal or drawer)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'import { useModalForm } from "@pankod/refine-react-hook-form";\nimport { Drawer, Edit} from "@pankod/refine-mui";\n\nexport const PostEdit: React.FC = () => {\n    const editDrawerFormProps = useModalForm<ICategory>({\n        refineCoreProps: { action: "edit" },\n    });\n\n    return (\n        <Drawer>\n            <Edit\n                ...\n                // highlight-next-line\n                recordItemId="2"\n            >\n                ...\n            </Edit>\n        </Drawer>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," component needs the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/refresh-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<RefreshButton>"))," to work properly.")),(0,a.kt)("h3",{id:"mutationmode"},(0,a.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,a.kt)("p",null,"Determines which mode mutation will have while executing ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton>")),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    // highlight-next-line\n    return <Edit mutationMode="undoable">...</Edit>;\n};\n')),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If not specified, Refine will use the default data provider. If you have multiple data providers and want to use a different one, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { Edit } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst PostEdit = () => {\n    return <Edit dataProviderName="other">...</Edit>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            // highlight-start\n            dataProvider={{\n                default: dataProvider("https://api.fake-rest.refine.dev/"),\n                other: dataProvider("https://other-api.fake-rest.refine.dev/"),\n            }}\n            // highlight-end\n            resources={[{ name: "posts", edit: PostEdit }]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"goback"},(0,a.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,a.kt)("p",null,"To customize the back button or to disable it, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"goBack")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\nimport { useNavigation } from "@pankod/refine-core";\nimport { MyBackButton } from "@components";\n\nexport const EditPage: React.FC = () => {\n    const { goBack } = useNavigation();\n\n    return (\n        <Edit\n            /* ... */\n            goBack={<MyBackButton onClick={() => goBack()} />}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"isloading"},(0,a.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,a.kt)("p",null,"To toggle the loading state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    const [loading, setLoading] = React.useState(true);\n\n    return (\n        <Edit\n            /* ... */\n            isLoading={loading}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"breadcrumb"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,a.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            breadcrumb={null}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"wrapperprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,a.kt)("p",null,"If you want to customize the wrapper of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,a.kt)("p",null,"If you want to customize the header of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            headerProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"contentprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,a.kt)("p",null,"If you want to customize the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," component, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            contentProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Button } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"headerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"footerbuttons"},(0,a.kt)("inlineCode",{parentName:"h3"},"footerButtons")),(0,a.kt)("p",null,"You can customize the buttons at the footer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtons")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,a.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Button } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            footerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"footerbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"footerButtonProps")),(0,a.kt)("p",null,"You can customize the wrapper element of the buttons at the footer by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," property."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CardActions")," documentation from Material UI for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            /* ... */\n            footerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("h3",{id:"actionbuttons"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"actionButtons"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtons")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," component. The children of the ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," component shows ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/save-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<SaveButton>"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/delete-button"},(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton>"))," based on your resource definition in the",(0,a.kt)("inlineCode",{parentName:"p"},"resources"),"property you pass to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),". If you want to use other things instead of these buttons, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"actionButton")," property like the code below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// highlight-next-line\nimport { Edit, Button } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            // highlight-start\n            actionButtons={\n                <>\n                    <Button>Custom Button 1</Button>\n                    <Button>Custom Button 2</Button>\n                </>\n            }\n            // highlight-end\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:r,alt:"actionButton Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,a.kt)("h3",{id:"cardheaderprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardHeaderProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// highlight-next-line\nimport { Edit, Typography } from "@pankod/refine-mui";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            //highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            //highlight-end\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i,alt:"actionButton Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardcontentprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardContentProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"contentProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,a.kt)("h3",{id:"cardactionsprops"},(0,a.kt)("del",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"del"},"cardActionsProps"))),(0,a.kt)("admonition",{title:"Deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"footerButtonProps")," instead.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-actions/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardActions>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardActionsProps"),"."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(u,{module:"@pankod/refine-mui/Edit","wrapperProps-type":"[`CardProps`](https://mui.com/material-ui/api/card/#props)","contentProps-type":"[`CardContentProps`](https://mui.com/material-ui/api/card-content/#props)","headerProps-type":"[`CardHeaderProps`](https://mui.com/material-ui/api/card-header/#props)","headerButtons-default":"[`ListButton`](https://refine.dev/docs/api-reference/mui/components/buttons/list-button/) and [`RefreshButton`](https://refine.dev/docs/api-reference/mui/components/buttons/refresh-button/)","headerButtonProps-type":"[`BoxProps`](https://mui.com/material-ui/api/box/#props)","deleteButtonProps-type":"[`DeleteButtonProps`](/docs/api-reference/mui/components/buttons/delete-button/)","saveButtonProps-type":"[`SaveButtonProps`](https://refine.dev/docs/api-reference/mui/components/buttons/save-button/)","footerButtons-default":"[`SaveButton`](https://refine.dev/docs/api-reference/mui/components/buttons/save-button/) and [`DeleteButton`](https://refine.dev/docs/api-reference/mui/components/buttons/delete-button/)","footerButtonsProps-type":"[`CardActionsProps`](https://mui.com/material-ui/api/card-actions/#props)","breadcrumb-default":"[`<Breadcrumb/>`](/docs/api-reference/mui/components/mui-breadcrumb/)","goBack-default":"`<ArrowLeft />`","goBack-type":"`ReactNode`",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);