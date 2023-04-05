"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"nextjs",title:"Next.js"},o=void 0,p={unversionedId:"advanced-tutorials/ssr/nextjs",id:"version-3.xx.xx/advanced-tutorials/ssr/nextjs",title:"Next.js",description:"refine can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/ssr/nextjs.md",sourceDirName:"advanced-tutorials/ssr",slug:"/advanced-tutorials/ssr/nextjs",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/nextjs",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/ssr/nextjs.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680662435,formattedLastUpdatedAt:"Apr 5, 2023",frontMatter:{id:"nextjs",title:"Next.js"},sidebar:"someSidebar",previous:{title:"Remix",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/remix"},next:{title:"Base64 Upload",permalink:"/docs/3.xx.xx/advanced-tutorials/upload/base64-upload"}},s={},d=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Custom Page",id:"custom-page",level:2},{value:"SSR",id:"ssr",level:3},{value:"Standard CRUD Page",id:"standard-crud-page",level:2},{value:"SSR",id:"ssr-1",level:3},{value:"Server Side Authentication",id:"server-side-authentication",level:2},{value:"<code>syncWithLocation</code> and Query Parameters in SSR",id:"syncwithlocation-and-query-parameters-in-ssr",level:2},{value:"<code>appDir</code> Support",id:"appdir-support",level:2},{value:"Example",id:"example",level:2}],l=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," can be used with ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},(0,r.kt)("strong",{parentName:"a"},"Next.js"))," to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,r.kt)("strong",{parentName:"a"},"nextjs-router"))," package provided by ",(0,r.kt)("strong",{parentName:"p"},"refine")," must be used for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-core @pankod/refine-antd @pankod/refine-nextjs-router\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"create refine-app")," to initialize your refine projects. It configures the project according to your needs including SSR with Next.js."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"npm create refine-app@latest -- -o refine-nextjs my-refine-nextjs-app\n"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," must wrap your pages in a ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/custom-app"},"custom App")," component. This way your ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/pages"},"pages")," are integrated to refine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\n\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-nextjs-router";\n\nimport { PostList, PostEdit, PostCreate, PostShow } from "pages/posts";\nimport { UserList, UserShow } from "pages/users";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n    return (\n        // highlight-start\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n                {\n                    name: "users",\n                    list: UserList,\n                    show: UserShow,\n                },\n            ]}\n        >\n            <Component {...pageProps} />\n        </Refine>\n        // highlight-end\n    );\n}\n\nexport default MyApp;\n')),(0,r.kt)("h2",{id:"custom-page"},"Custom Page"),(0,r.kt)("p",null,"Let's say we want to show a list of users in ",(0,r.kt)("inlineCode",{parentName:"p"},"/users"),". After creating ",(0,r.kt)("inlineCode",{parentName:"p"},"users.tsx")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," in your Nextjs app, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," hook to list the users in a table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import { LayoutWrapper } from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC = () => {\n    const { tableProps } = useTable<IUser>({\n        resource: "users",\n    });\n\n    return (\n        <LayoutWrapper>\n            <List title="Users">\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" sorter />\n                    <Table.Column dataIndex="firstName" title="Name" />\n                </Table>\n            </List>\n        </LayoutWrapper>\n    );\n};\n// highlight-end\ninterface IUser {\n    id: number;\n    firstName: string;\n}\n\nexport default UserList;\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to handle your ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," with a custom page or create a custom page with or without a resource, these will not be visible in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component. You can trick the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider/>")," by passing an empty resource to show your custom route in it."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Example"',title:'"Example"'},'const App = () => (\n    <Refine\n        resources={[\n            // This will add an item to `<Sider/>` with route `/my-custom-item`\n            { name: "my-custom-item", list: () => null },\n        ]}\n    />\n);\n'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Notice how we passed ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable")),". This is necessary since for ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable")," to be able to get ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," name from route, it needs to be a route parameter in a dynamic route. ",(0,r.kt)("a",{parentName:"p",href:"#standard-crud-page"},"Refer here")," where standard CRUD pages can be built with dynamic routing.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We also used ",(0,r.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," to show the page in the layout provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>")),". This is deliberately opt-in to provide flexibility. ",(0,r.kt)("a",{parentName:"p",href:"#standart-crud-page"},"If you're building a standard CRUD page layout can be baked in automatically"),".")),(0,r.kt)("h3",{id:"ssr"},"SSR"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," in its hooks for data management. ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/ssr#using-initialdata"},"Following react-query's guide"),", SSR can be achieved like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'// highlight-next-line\nimport { GetServerSideProps } from "next";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    LayoutWrapper,\n    // highlight-next-line\n    GetListResponse,\n} from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n// highlight-start\nexport const UserList: React.FC<{ users: GetListResponse<IUser> }> = ({\n    users,\n}) => {\n    // highlight-end\n    const { tableProps } = useTable<IUser>({\n        resource: "users",\n        // highlight-start\n        queryOptions: {\n            initialData: users,\n        },\n        // highlight-end\n    });\n\n    return (\n        <LayoutWrapper>\n            <List title="Users">\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" sorter />\n                    <Table.Column dataIndex="firstName" title="Name" />\n                </Table>\n            </List>\n        </LayoutWrapper>\n    );\n};\n\n// highlight-start\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n    const data = await dataProvider(API_URL).getList({\n        resource: "users",\n    });\n\n    return {\n        props: { users: data },\n    };\n};\n// highlight-end\n\ninterface IUser {\n    id: number;\n    firstName: string;\n}\n\nexport default UserList;\n')),(0,r.kt)("p",null,"We use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/#getlist-"},(0,r.kt)("inlineCode",{parentName:"a"},"getList"))," method from our ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," data and pass through ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," as conventionally done in Next.js. Then ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," data is available in the props of our ",(0,r.kt)("inlineCode",{parentName:"p"},"/users")," page. ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useTable"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))," can take options for underlying react-query queries with ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions"),". Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," data to its ",(0,r.kt)("inlineCode",{parentName:"p"},"initialData")," loads the data on server side."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We used ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," but data can be fetched in any way you desire.")),(0,r.kt)("h2",{id:"standard-crud-page"},"Standard CRUD Page"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," for routing in ",(0,r.kt)("strong",{parentName:"p"},"refine")," resources. Simply export the component from the page and add a ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching"},"data fetching function"),". While you can create pages with defined params like ",(0,r.kt)("inlineCode",{parentName:"p"},"[resource]/[action]/[id].tsx"),", we recommend using a catch-all route to handle all ",(0,r.kt)("strong",{parentName:"p"},"refine")," routing in a single file. You can start by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...refine]].tsx")," file under ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," in your Nextjs app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also define routes without using ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...refine]].tsx")," file like below, but a catch-all route is an easier approach with nested route support."),(0,r.kt)("p",{parentName:"admonition"},"Export ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," as default in the following pages:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/[resource].tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/[resource]/[action].tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/[resource]/[action]/[id].tsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages/index.tsx"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will use route parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," and render the associated component defined in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"resources")),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list")," component will be rendered for ",(0,r.kt)("inlineCode",{parentName:"li"},"/[resource]")," route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"show")," will be rendered for ",(0,r.kt)("inlineCode",{parentName:"li"},"/[resource]/[action]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/[resource]/[action]/[id]")," routes"),(0,r.kt)("li",{parentName:"ul"},"For the root ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," route, it will render ",(0,r.kt)("inlineCode",{parentName:"li"},"DashboardPage")," if it's defined and if not will navigate to the first resource in ",(0,r.kt)("inlineCode",{parentName:"li"},"resources"),"."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will wrap the page with ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>")))),(0,r.kt)("h3",{id:"ssr-1"},"SSR"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"initialData")," prop for SSR data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type NextRouteComponentProps = {\n    initialData?: any;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initialData")," must be passed as props from ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," will pass this data as ",(0,r.kt)("inlineCode",{parentName:"p"},"initialData")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," components."),(0,r.kt)("p",null,"For example, for a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," component that will be rendered for ",(0,r.kt)("inlineCode",{parentName:"p"},"/[resource]"),", the page can use SSR like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\nimport { handleRefineParams } from "@pankod/refine-nextjs-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { GetServerSideProps } from "next";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n    const { resource, action, id } = handleRefineParams(context.params?.refine);\n\n    try {\n        if (resource && action === "show" && id) {\n            const data = await dataProvider(API_URL).getOne({\n                // we\'re slicing the resource param to get the resource name from the last part\n                resource: resource.slice(resource.lastIndexOf("/") + 1),\n                id,\n            });\n\n            return {\n                props: {\n                    initialData: data,\n                },\n            };\n        } else if (resource && !action && !id) {\n            const data = await dataProvider(API_URL).getList({\n                // we\'re slicing the resource param to get the resource name from the last part\n                resource: resource.slice(resource.lastIndexOf("/") + 1),\n            });\n\n            return {\n                props: {\n                    initialData: data,\n                },\n            };\n        }\n    } catch (error) {\n        return { props: {} };\n    }\n\n    return { props: {} };\n};\n')),(0,r.kt)("p",null,"And in the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," component for a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),' e.g. "posts":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/posts/list.tsx"',title:'"src/components/posts/list.tsx"'},'import { GetListResponse, IResourceComponentsProps } from "@pankod/refine-core";\nimport { useTable, List, Table } from "@pankod/refine-antd";\n\nexport const PostList: React.FC<\n    IResourceComponentsProps<GetListResponse<IPost>>\n    // highlight-next-line\n> = ({ initialData }) => {\n    const { tableProps } = useTable<IPost>({\n        // highlight-start\n        queryOptions: {\n            initialData,\n        },\n        // highlight-end\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    firstName: string;\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also achieve SSR with ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," for static generation. All you need to do is to add the paths you want to statically generate to ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," and pass the data as ",(0,r.kt)("inlineCode",{parentName:"p"},"initialData")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),".")),(0,r.kt)("h2",{id:"server-side-authentication"},"Server Side Authentication"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nextjs-router")," package provides ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," to easily handle server side authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/[[...refine]].tsx"',title:'"pages/[[...refine]].tsx"'},'export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";\n// highlight-next-line\nimport { checkAuthentication } from "@pankod/refine-nextjs-router";\n\nimport { GetServerSideProps } from "next";\n\nimport { authProvider } from "../../src/authProvider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n    // highlight-start\n    const { isAuthenticated, ...props } = await checkAuthentication(\n        authProvider,\n        context,\n    );\n\n    if (!isAuthenticated) {\n        return props;\n    }\n    // highlight-end\n\n    return {\n        props: {},\n    };\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," expects your ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," and ",(0,r.kt)("strong",{parentName:"p"},"getServerSideProps"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),". It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuth")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," to check for authentication and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," accordingly. It also returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," object to handle unauthenticated case. It redirects to ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," while keeping the original route to be navigated to after successful login."),(0,r.kt)("h2",{id:"syncwithlocation-and-query-parameters-in-ssr"},(0,r.kt)("inlineCode",{parentName:"h2"},"syncWithLocation")," and Query Parameters in SSR"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," is enabled, query parameters must be handled while doing SSR."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/users.tsx"',title:'"pages/users.tsx"'},'import { GetServerSideProps } from "next";\n// highlight-next-line\nimport { parseTableParamsFromQuery } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {\n    // highlight-start\n    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =\n        parseTableParamsFromQuery(context.query);\n    // highlight-end\n    const data = await dataProvider(API_URL).getList({\n        resource: "users",\n        // highlight-start\n        filters: parsedFilters,\n        pagination: {\n            current: parsedCurrent || 1,\n            pageSize: parsedPageSize || 10,\n        },\n        sort: parsedSorter,\n        // highlight-end\n    });\n\n    return {\n        props: { users: data },\n    };\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"parseTableParams")," parses the query string and returns query parameters(",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#crudfilters"},"refer here for their interfaces"),"). They can be directly used for ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods that accepts them."),(0,r.kt)("h2",{id:"appdir-support"},(0,r.kt)("inlineCode",{parentName:"h2"},"appDir")," Support"),(0,r.kt)("p",null,"Next.js introduced a new way of defining pages within the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory. ",(0,r.kt)("em",{parentName:"p"},"This new directory has support for layouts, nested routes, and uses Server Components by default.")," To learn more about the feature check out ",(0,r.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/upgrade-guide"},"Next.js Beta docs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," also follows this feature and provides a way to use ",(0,r.kt)("inlineCode",{parentName:"p"},"appDir")," with your ",(0,r.kt)("strong",{parentName:"p"},"refine")," apps."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"app/")," is currently in beta and is ",(0,r.kt)("strong",{parentName:"p"},"not recommended")," for production use in Next.js. In ",(0,r.kt)("strong",{parentName:"p"},"refine"),", we're providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," support as experimental and not recommended for production use.")),(0,r.kt)("p",null,"To start using ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," with ",(0,r.kt)("strong",{parentName:"p"},"refine"),", you need to set create the ",(0,r.kt)("strong",{parentName:"p"},"refine")," routes in your ",(0,r.kt)("inlineCode",{parentName:"p"},"/app")," directory with the following convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nyour-project\n\u2514\u2500\u2500 app\n    \u2514\u2500\u2500 [[...refine]]\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initializing ",(0,r.kt)("inlineCode",{parentName:"strong"},"<Refine/>")," in ",(0,r.kt)("inlineCode",{parentName:"strong"},"layout.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/[[...refine]]/layout.tsx"',title:'"app/[[...refine]]/layout.tsx"'},'"use client";\n\nimport routerProvider from "@pankod/refine-nextjs-router/app";\n\nexport default function RefineLayout({\n    children,\n    params,\n}: {\n    children: React.ReactNode;\n    params: Record<"refine", string[]>;\n}) {\n    return (\n        <Refine\n            routerProvider={routerProvider.call({ params })}\n            /* ... */\n        >\n            {children}\n        </Refine>\n    );\n}\n')),(0,r.kt)("p",null,"We need to bind the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," and call it to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider"),". This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," are not available via hooks for ",(0,r.kt)("strong",{parentName:"p"},"refine")," to use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating ",(0,r.kt)("inlineCode",{parentName:"strong"},"page.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/[[...refine]]/page.tsx"',title:'"app/[[...refine]]/page.tsx"'},'"use client";\n\nimport { NextRouteComponent } from "@pankod/refine-nextjs-router/app";\n\nexport default NextRouteComponent;\n')),(0,r.kt)("p",null,"Note that we're importing ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-nextjs-router/app")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-nextjs-router"),". This is because we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory and we need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NextRouteComponent"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'"use client";')," is a directive that instructs Next.js to opt-out from Server Components. This is because ",(0,r.kt)("strong",{parentName:"p"},"refine")," and dependencies are not yet compatible with Server Components. That's why we're using it in both ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," files.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," does not work with ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory. You need to handle the authentication of your views while using ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," aims to provide a middleware for ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory to substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"checkAuthentication")," but it's not available yet.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," directory example with ",(0,r.kt)("strong",{parentName:"p"},"refine")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/remix/antd"},"examples/nextjs/appdir"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l,{path:"with-nextjs",mdxType:"CodeSandboxExample"}))}c.isMDXComponent=!0}}]);