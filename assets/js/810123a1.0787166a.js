"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",source:"@site/blog/2021-10-4-feedback-admin-panel.md",title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:7.14,hasTruncateMarker:!0,authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],frontMatter:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},nextItem:{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine"},relatedPosts:[{title:"Comparing the best headless CMS solutions",permalink:"/blog/best-headless-cms",formattedDate:"February 8, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:10.145,date:"2023-02-08T00:00:00.000Z"},{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.05,date:"2023-01-04T00:00:00.000Z"},{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"}],authorPosts:[{title:"Build internal tools using Low-Code with refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.675,date:"2022-02-21T00:00:00.000Z"},{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.8,date:"2022-04-29T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Creating api with <code>Strapi</code>",id:"creating-api-with-strapi",level:3},{value:"Creating panel with <code>refine</code>",id:"creating-panel-with-refine",level:3},{value:"Custom Layout",id:"custom-layout",level:3},{value:"Custom Header",id:"custom-header",level:3},{value:"Create FeedbackList",id:"create-feedbacklist",level:3},{value:"Overview",id:"overview",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,r.kt)("p",null,"In this article, we will create a panel where we can manage the feedback we receive from our web application. "),(0,r.kt)("p",null,"We will quickly create an api with ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io"},"Strapi.io")," and then develop its frontend with ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine"),". Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine."),(0,r.kt)("p",null,"Features that our panel will have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authentication with strapi.io"),(0,r.kt)("li",{parentName:"ul"},"A page to list feedbacks"),(0,r.kt)("li",{parentName:"ul"},"Mutation on Feedbacks")),(0,r.kt)("h3",{id:"creating-api-with-strapi"},"Creating api with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Strapi")),(0,r.kt)("p",null,"Let's create our backend project with Strapi's ",(0,r.kt)("a",{parentName:"p",href:"https:/strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"quick start guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-strapi-app strapi-feedback-api --quickstart\n")),(0,r.kt)("p",null,"After the installation is complete, the tab will automatically open in the browser. Here, let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"feedback")," collection with Content-Types Builder."),(0,r.kt)("p",null,"Quite simply, a feedback should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," text field, A ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," text field that shows the page the feedback was sent from, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," enumeration field indicating the type of feedback (issue, idea, other, archive)."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/strapi_content.png",alt:"content"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"creating-panel-with-refine"},"Creating panel with ",(0,r.kt)("inlineCode",{parentName:"h3"},"refine")),(0,r.kt)("p",null,"Let's create our frontend project with refine's ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/#setting-up"},"setting up guide"),"."),(0,r.kt)("p",null,"There are two alternative methods to set up a refine application. We will quickly create our application with ",(0,r.kt)("a",{parentName:"p",href:"https://pankod.github.io/superplate"},"superplate"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest refine-feedback-client -- -b v3\n")),(0,r.kt)("p",null,"Select the following options to complete the CLI wizard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Select your project type:\n\u276f refine-react\n\n? What will be the name of your app:\n> refine-strapi-web\n\n? Package manager:\n\u276f Npm\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n\u276f Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider:\n\u276f Strapi v3\n\n? Do you want a customized layout?\n\u276f Yes\n\n? i18n - Internationalization:\n\u276f No\n")),(0,r.kt)("p",null,"After the installation is completed, Strapi-specific ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/strapi"},"data provider"),", auth provider, and also layout components that we can change the default view of Refine with the custom layout option will be included in our project."),(0,r.kt)("p",null,"Now, bootstrap the app with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/refine_welcome.png",alt:"welcome"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now let's list the changes we will make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change our Strapi API URL"),(0,r.kt)("li",{parentName:"ul"},"Remove components that we will not use when changing the refinement look"),(0,r.kt)("li",{parentName:"ul"},"Adding resources according to the collection name we created in Strapi")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { Refine } from "@pankod/refine";\nimport "@pankod/refine/dist/styles.min.css";\nimport { DataProvider } from "@refinedev/strapi";\nimport strapiAuthProvider from "authProvider";\nimport {\n- Title,\n  Header,\n- Sider,\n- Footer,\n  Layout,\n  OffLayoutArea,\n} from "components";\n\nfunction App() {\n-  const API_URL = "your-strapi-api-url";\n+  const API_URL = "http://localhost:1337";\n\n  const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);\n  const dataProvider = DataProvider(API_URL, axiosInstance);\n  return (\n    <Refine\n      dataProvider={dataProvider}\n      authProvider={authProvider}\n-     Title={Title}\n      Header={Header}\n-     Sider={Sider}\n-     Footer={Footer}\n      Layout={Layout}\n      OffLayoutArea={OffLayoutArea}\n      routerProvider={routerProvider}\n      resources={[\n        {\n          name: "feedbacks",\n        },\n      ]}\n    />\n  );\n}\n \n\nexport default App;\n')),(0,r.kt)("p",null,"After adding the resource, our auth provider was activated."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/signin.png",alt:"signin"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now let's create a user on the Strapi to be able to login to the application."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/user.png",alt:"user"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"We created a user and login to the application with this user."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/feedback.png",alt:"feedback"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's customize the layout component, remove the sider and add a header."),(0,r.kt)("h3",{id:"custom-layout"},"Custom Layout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { Layout as AntLayout } from "antd";\n\nimport { LayoutProps } from "@pankod/refine";\n\nexport const Layout: React.FC<LayoutProps> = ({\n  children,\n  Header,\n  OffLayoutArea,\n}) => {\n  return (\n    <AntLayout style={{ minHeight: "100vh", flexDirection: "row" }}>\n      <AntLayout>\n        <Header />\n        <AntLayout.Content>\n          {children}\n          <OffLayoutArea />\n        </AntLayout.Content>\n      </AntLayout>\n    </AntLayout>\n  );\n};\n')),(0,r.kt)("p",null,"Let's customize the header component too"),(0,r.kt)("h3",{id:"custom-header"},"Custom Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { Layout } from "antd";\n\nexport const Header: React.FC = () => {\n  return (\n    <Layout.Header\n      style={{\n        display: "flex",\n        justifyContent: "center",\n        alignItems: "center",\n        height: "64px",\n        backgroundColor: "#FFF",\n        borderBottom: "1px solid #f0f0f0",\n      }}\n    >\n      <img src="./refeedback.png" alt="refeedback" style={{ width: "250px" }} />\n    </Layout.Header>\n  );\n};\n')),(0,r.kt)("p",null,"In the new view, there are no siders anymore and the header we have customized is here."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/header.png",alt:"header"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now we come to the part where we can list our feedback and make changes to it. Before that, let's create dummy feedback records on Strapi."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/feedbacks.png",alt:"feedbacks"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"FeedbackList.tsx")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," folder. Then, let's create our component as follows with the components and hooks that come with refine."),(0,r.kt)("h3",{id:"create-feedbacklist"},"Create FeedbackList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  List,\n  Typography,\n  AntdList,\n  useSimpleList,\n  CrudFilters,\n  Form,\n  HttpError,\n  Row,\n  Col,\n  Tag,\n  Radio,\n  Space,\n  Descriptions,\n  Button,\n  DateField,\n  Card,\n  useUpdate,\n} from "@pankod/refine";\n\nimport { IFeedback, IFeedbackFilterVariables, FeedBackType } from "interfaces";\n\nconst { Paragraph } = Typography;\n\nconst addTagColor = (type: FeedBackType) => {\n  switch (type) {\n    case "issue":\n      return "error";\n    case "idea":\n      return "orange";\n    default:\n      return "default";\n  }\n};\n\nexport const FeedbackList: React.FC = () => {\n  const { listProps, searchFormProps } = useSimpleList<\n    IFeedback,\n    HttpError,\n    IFeedbackFilterVariables\n  >({\n    sorters: {\n      initial: [{ field: "created_at", order: "desc" }],\n    },\n    onSearch: (params) => {\n      const filters: CrudFilters = [];\n      const { type } = params;\n\n      filters.push({\n        field: "type",\n        operator: "eq",\n        value: type || undefined,\n      });\n\n      return filters;\n    },\n  });\n\n  const { mutate, isLoading } = useUpdate();\n\n  const renderItem = (item: IFeedback) => {\n    const { id, description, type, page, created_at } = item;\n    return (\n      <AntdList.Item>\n        <Card hoverable>\n          <AntdList.Item.Meta\n            description={\n              <div style={{ display: "flex", justifyContent: "space-between" }}>\n                <Tag\n                  color={addTagColor(type)}\n                  style={{ textTransform: "capitalize" }}\n                >\n                  {type}\n                </Tag>\n                <DateField format="LLL" value={created_at} />\n              </div>\n            }\n          />\n          <Paragraph strong>{description}</Paragraph>\n          <Descriptions labelStyle={{ color: "grey", fontWeight: 600 }}>\n            <Descriptions.Item label="Path">{page}</Descriptions.Item>\n          </Descriptions>\n          <div style={{ display: "flex", justifyContent: "end", gap: "4px" }}>\n            <Button\n              size="small"\n              loading={isLoading}\n              onClick={() =>\n                mutate({\n                  id,\n                  resource: "feedbacks",\n                  values: {\n                    type: "archive",\n                  },\n                })\n              }\n            >\n              Archive\n            </Button>\n          </div>\n        </Card>\n      </AntdList.Item>\n    );\n  };\n\n  return (\n    <List title="" pageHeaderProps={{ style: { height: "100%" } }}>\n      <Row gutter={[64, 0]} justify="center">\n        <Col xs={24} sm={24} md={4} lg={4} xl={4}>\n          <Form\n            {...searchFormProps}\n            layout="vertical"\n            onValuesChange={() => searchFormProps.form?.submit()}\n            initialValues={{\n              type: "",\n            }}\n          >\n            <Form.Item label="FILTERS" name="type">\n              <Radio.Group>\n                <Space direction="vertical">\n                  <Radio.Button value="">All</Radio.Button>\n                  <Radio.Button value="issue">Issue</Radio.Button>\n                  <Radio.Button value="idea">Idea</Radio.Button>\n                  <Radio.Button value="other">Other</Radio.Button>\n                  <Radio.Button value="archive">Archive</Radio.Button>\n                </Space>\n              </Radio.Group>\n            </Form.Item>\n          </Form>\n        </Col>\n        <Col xs={24} sm={24} md={14} lg={14} xl={14}>\n          <AntdList\n            {...listProps}\n            split={false}\n            renderItem={renderItem}\n            itemLayout="vertical"\n          />\n        </Col>\n      </Row>\n    </List>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export type FeedBackType = "idea" | "issue" | "other" | "archive";\n\nexport interface IFeedback {\n  id: string;\n  description: string;\n  page: string;\n  user: string;\n  type: FeedBackType;\n  created_at: Date;\n}\n\nexport interface IFeedbackFilterVariables {\n  type: FeedBackType;\n}\n')),(0,r.kt)("p",null,"In this component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We listed our records using the ",(0,r.kt)("a",{parentName:"li",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/list/useSimpleList/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSimpleList"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://ant.design"},"Ant Design")," ",(0,r.kt)("a",{parentName:"li",href:"https://ant.design/components/list"},(0,r.kt)("inlineCode",{parentName:"a"},"<List>"))," component."),(0,r.kt)("li",{parentName:"ul"},"We used Antd ",(0,r.kt)("a",{parentName:"li",href:"https://ant.design/components/form/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Form>"))," component to filter our records."),(0,r.kt)("li",{parentName:"ul"},"We made it possible to change the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," of our record with ",(0,r.kt)("a",{parentName:"li",href:"https://refine.dev/docs/api-reference/core/hooks/data/useUpdate/"},(0,r.kt)("inlineCode",{parentName:"a"},"useUpdate")))),(0,r.kt)("p",null,"See detailed usage of useSimpleList for adding new filters, adding search entries, dynamic sorting operations and more ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/hooks/list/useSimpleList/"},"here"),"."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/feedback_overview.gif",alt:"feedback_overview"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's develop feedback widget where we can get feedback to expand the application a little more. For this application, I will develop this component with refine, but you can create this component with Strapi APIs in any way you want."),(0,r.kt)("p",null,"You can look at the code of the component I developed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine-hackathon/tree/main/refeedback/src/components/feedback"},"here"),"."),(0,r.kt)("p",null,"Now let's add this component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"OfflayouArea")," component and create feedback on the page and see how it comes to our feedback list."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-feedback-admin-panel/widgets.gif",alt:"widgets"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can find the source code of the project here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog-refeedback"},"https://github.com/refinedev/refine/tree/master/examples/blog-refeedback")))}d.isMDXComponent=!0}}]);