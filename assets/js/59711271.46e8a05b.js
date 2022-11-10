"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(28029),r=n(90318);const l={title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["JavaScript","how-to","base64","file-upload"],image:"/img/placeholder.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/how-to-base64-upload",source:"@site/blog/2021-12-22-base64-upload.md",title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"how-to",permalink:"/blog/tags/how-to"},{label:"base64",permalink:"/blog/tags/base-64"},{label:"file-upload",permalink:"/blog/tags/file-upload"}],readingTime:3.575,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["JavaScript","how-to","base64","file-upload"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},nextItem:{title:"Web3 with Refine",permalink:"/blog/web3-with-refine"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"},{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.28,date:"2022-01-18T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.935,date:"2021-12-27T00:00:00.000Z"}],authorPosts:[{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.61,date:"2022-03-16T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.815,date:"2021-10-25T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"What is Base64 encoding?",id:"what-is-base64-encoding",level:2},{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to Base64 Upload with Refine?",id:"how-to-base64-upload-with-refine",level:2},{value:"Refine Base64 Upload Live StackBlitz Example",id:"refine-base64-upload-live-stackblitz-example",level:2}],m=(h="PromotionBanner",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var h;const u={toc:c};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding"),(0,i.kt)("h2",{id:"what-is-base64-encoding"},"What is Base64 encoding?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Base64 Encoding")," is the most widely used technique for storing or transmitting binary data by converting it to text. With this technique, binary data, which basically consists of 8-bit bytes, is divided into 6-bit (2^6 = 64) parts. 64 different numbers expressed in 6 bits are matched with 64 different characters expressed as Printable Characters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASCII")," character set."),(0,i.kt)("p",null,"Base64 encoding is most commonly used to attach binary files to electronic mail in applications of the MIME (Multipurpose Internet Mail Extensions) standard."),(0,i.kt)("p",null,"Another usage area of \u200b\u200bBase64 Encoding is adding images and other files to HTML and CSS documents by encoding with Base64 using Data URLs format in modern browsers."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In our example, we will upload the image file by encoding the image as Base64. First, let's write simple HTML and set the ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/"},"Bootstrap")," CSS link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="stylesheet" href="./index.css" />\n        <link\n            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n            rel="stylesheet"\n            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n            crossorigin="anonymous"\n        />\n        <title>Base64 File Upload</title>\n    </head>\n\n    <body>\n        <div style="margin: 24px">\n            <h2>Upload Image</h2>\n        </div>\n\n        <script src="./index.js"><\/script>\n    </body>\n</html>\n')),(0,i.kt)("p",null,"Then we need to use the HTML ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"},"input")," tag to receive an image file from the user."),(0,i.kt)("p",null,"We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"file input")," because it must be the input type file we want to receive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./index.css" />\n    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n    <link\n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n      rel="stylesheet"\n      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n      crossorigin="anonymous"\n    />\n\n    <title>Base64 File Upload</title>\n  </head>\n  <body>\n    <div style="margin: 24px">\n      <h2>Upload Image</h2>\n    </div>\n    //highlight-start\n    <div style="margin: 16px; padding: 16px">\n      <input\n        class="form-control form-control-lg"\n        id="selectAvatar"\n        type="file"\n      />\n    </div>\n    //highlight-end\n</html>\n')),(0,i.kt)("p",null,"Now we have an input to interact with the user and select a file. Let's add the HTML elements that will show the image file and Base64 code we received from the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="stylesheet" href="./index.css" />\n        <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />\n        <link\n            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"\n            rel="stylesheet"\n            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"\n            crossorigin="anonymous"\n        />\n\n        <title>Base64 File Upload</title>\n    </head>\n    <body>\n        <div style="margin: 24px">\n            <h2>Upload Image</h2>\n        </div>\n\n        <div style="margin: 16px; padding: 16px">\n            <input\n                class="form-control form-control-lg"\n                id="selectAvatar"\n                type="file"\n            />\n        </div>\n        //highlight-start\n        <div class="container">\n            <div class="row">\n                <div class="col">\n                    <h6>Image Preview:</h6>\n                    <img class="img" id="avatar" />\n                </div>\n                <div class="col">\n                    <h6>Base64 Output</h6>\n                    <textarea id="textArea" rows="30" cols="50"></textarea>\n                </div>\n            </div>\n        </div>\n        //highlight-end\n        <script src="./index.js"><\/script>\n    </body>\n</html>\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"upload_screen"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Our fields are ready to display the image file and Base64 code. Now let's do our operations on the JavaScript side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const input = document.getElementById("selectAvatar");\nconst avatar = document.getElementById("avatar");\nconst textArea = document.getElementById("textAreaExample");\n\nconst convertBase64 = (file) => {\n    return new Promise((resolve, reject) => {\n        const fileReader = new FileReader();\n        fileReader.readAsDataURL(file);\n\n        fileReader.onload = () => {\n            resolve(fileReader.result);\n        };\n\n        fileReader.onerror = (error) => {\n            reject(error);\n        };\n    });\n};\n\nconst uploadImage = async (event) => {\n    const file = event.target.files[0];\n    const base64 = await convertBase64(file);\n    avatar.src = base64;\n    textArea.innerText = base64;\n};\n\ninput.addEventListener("change", (e) => {\n    uploadImage(e);\n});\n')),(0,i.kt)("p",null,"Here we take data in file format and encode it as Base64. Then we show this encoded image and Base64 encoding output."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:r.Z,alt:"overview"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/base64-upload-file-h3yy0?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"base64-upload-file",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)(m,{title:"Does your CRUD app need server state management?",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-base64-upload-with-refine"},"How to Base64 Upload with Refine?"),(0,i.kt)("p",null,"The Base64 file upload process with ",(0,i.kt)("strong",{parentName:"p"},"refine")," is very simple. How to use it is explained step by step in the guide and example. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/upload/base64-upload/"},"Refer to the ",(0,i.kt)("strong",{parentName:"a"},"refine")," Base64 Upload guide for more information. \u2192")," "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/upload/base64Upload"},"View Source")),(0,i.kt)("h2",{id:"refine-base64-upload-live-stackblitz-example"},"Refine Base64 Upload Live StackBlitz Example"),(0,i.kt)("iframe",{src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/upload/antd/base64/?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-base64-upload-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}g.isMDXComponent=!0},90318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-d7796f796ff01018f96c182efa0c8c52.png"},28029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/upload-18806eb77c8bdb4c67d067f086a659f0.png"}}]);