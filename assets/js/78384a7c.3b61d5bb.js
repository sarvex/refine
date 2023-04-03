"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={id:"custom-inputs",title:"Custom Inputs"},i=void 0,s={unversionedId:"api-reference/antd/components/inputs/custom-inputs",id:"api-reference/antd/components/inputs/custom-inputs",title:"Custom Inputs",description:"refine uses Ant Design's ` components to control and work with form data. Ant Design supports custom form items inside the  components. These items should be controllable via their value property and should implement onChange (or a custom callback name specified by 's trigger` prop).",source:"@site/docs/api-reference/antd/components/inputs/custom-inputs.md",sourceDirName:"api-reference/antd/components/inputs",slug:"/api-reference/antd/components/inputs/custom-inputs",permalink:"/docs/api-reference/antd/components/inputs/custom-inputs",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/inputs/custom-inputs.md",tags:[],version:"current",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1680531399,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"custom-inputs",title:"Custom Inputs"},sidebar:"someSidebar",previous:{title:"<FilterDropdown>",permalink:"/docs/api-reference/antd/components/filter-dropdown"},next:{title:"Theme",permalink:"/docs/api-reference/antd/theming"}},p={},m=[{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2}],c=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," uses Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Form>"))," components to control and work with form data. Ant Design supports custom form items inside the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,o.kt)("inlineCode",{parentName:"a"},"<Form.Item>"))," components. These items should be controllable via their ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property and should implement ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," (or a custom callback name specified by ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},(0,o.kt)("inlineCode",{parentName:"a"},"<Form.Item>")),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," prop)."),(0,o.kt)("p",null,"For some data types, displaying and editing as plain text may cause user experience problems."),(0,o.kt)("p",null,"Custom components may be useful when working with markdown (with markdown editor), JSON based rich text (draft, quill like editors), and HTML (a HTML editor). It can be used in table columns and form fields"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the Ant Design docs for more detailed information about ",(0,o.kt)("inlineCode",{parentName:"a"},"<Form>"),". ","\u2192")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"We will demonstrate how to use custom input fields for markdown data by adding a markdown editor to edit and create forms."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/edit.tsx"',title:'"/src/pages/posts/edit.tsx"'},'import React, { useState } from "react";\nimport { Edit, useForm } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n\n// highlight-start\nimport MDEditor from "@uiw/react-md-editor";\n// highlight-end\n\nimport { IPost } from "interfaces";\n\nexport const PostEdit: React.FC = (props) => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    return (\n        <Edit {...props} saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                // highlight-start\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                // highlight-end\n            </Form>\n        </Edit>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/components/inputs/custom-inputs/markdown-input.png",alt:"Markdown input"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)(c,{path:"input-custom",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);