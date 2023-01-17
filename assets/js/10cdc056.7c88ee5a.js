"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/nextauth-google-github-authentication-nextjs",source:"@site/blog/2022-08-18-auth-with-nextauth.md",title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",date:"2022-08-18T00:00:00.000Z",formattedDate:"August 18, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"nextauth",permalink:"/blog/tags/nextauth"},{label:"github-authentication",permalink:"/blog/tags/github-authentication"},{label:"google-authentication",permalink:"/blog/tags/google-authentication"},{label:"oauth",permalink:"/blog/tags/oauth"}],readingTime:13.75,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","nextauth","github-authentication","google-authentication","oauth"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},prevItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops",formattedDate:"October 31, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:9.315,date:"2022-10-31T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.495,date:"2022-09-11T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.305,date:"2022-09-12T00:00:00.000Z"}],authorPosts:[{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui",formattedDate:"September 2, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:10.24,date:"2022-09-02T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is NextAuth?",id:"what-is-nextauth",level:2},{value:"Why use NextAuth.js?",id:"why-use-nextauthjs",level:2},{value:"Project setup",id:"project-setup",level:2},{value:"Create API Routes",id:"create-api-routes",level:2},{value:"For GoogleProvider (Make sure you have a Google account):",id:"for-googleprovider-make-sure-you-have-a-google-account",level:3},{value:"For GithubProvider (you will need a GitHub account):",id:"for-githubprovider-you-will-need-a-github-account",level:3},{value:"Configure Shared Session State",id:"configure-shared-session-state",level:2},{value:"Update Page Components",id:"update-page-components",level:2},{value:"Add React Hook",id:"add-react-hook",level:2},{value:"Protect API Routes",id:"protect-api-routes",level:2},{value:"Conclusion",id:"conclusion",level:2}],p=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We know how exhausting and time-consuming it can be to set up authentication, which includes handling databases, cookies, JWT, sessions, etc., on your own.\nThe goal of this article is for you to learn about an alternative and simple tool (NextAuth), which we will use to easily add Google and GitHub authentication to our application."),(0,o.kt)("p",null,"Steps we\u2019ll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-nextauth"},"What is NextAuth?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-use-nextauthjs"},"Why use NextAuth.js?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#project-setup"},"Project setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-api-routes"},"Create API Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-shared-session-state"},"Configure Shared Session State")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#update-page-components"},"Update Page Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-react-hook"},"Add React Hook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#protect-api-routes"},"Protect API Routes"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We will be building a simple landing page to demonstrate how you can simply add Google and GitHub authentication to your Next.js app, and to follow along, you need to have the following in place:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js 12.22.0 or later"),(0,o.kt)("li",{parentName:"ul"},"Google console account."),(0,o.kt)("li",{parentName:"ul"},"GitHub account.")),(0,o.kt)("h2",{id:"what-is-nextauth"},"What is NextAuth?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://next-auth.js.org/"},"NextAuth.js")," is an easy-to-implement open source authentication library originally designed for Nextjs and serverless. With NextAuth, you don\u2019t necessarily have to create and use any database or any backend of any kind for authentication because it takes care of all that. It allows your users to sign in with their favorite preexisting logins. You can add as many predefined providers provided by NextAuth to your applications."),(0,o.kt)("h2",{id:"why-use-nextauthjs"},"Why use NextAuth.js?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It supports OAuth 1.0, 1.0A, 2.0, and OpenID Connect and is designed to work with any OAuth service."),(0,o.kt)("li",{parentName:"ul"},"Many popular sign-in services are already supported."),(0,o.kt)("li",{parentName:"ul"},"Email and passwordless authentication are supported."),(0,o.kt)("li",{parentName:"ul"},"Allows for stateless authentication with any backend (Active Directory, LDAP, etc.)"),(0,o.kt)("li",{parentName:"ul"},"JSON Web Tokens and database sessions are both supported."),(0,o.kt)("li",{parentName:"ul"},"Designed for Serverless but runs anywhere (AWS Lambda, Docker, Heroku, and so on\u2026)."),(0,o.kt)("li",{parentName:"ul"},"An open-source solution that gives you control over your data *"),(0,o.kt)("li",{parentName:"ul"},"MySQL, MariaDB, Postgres, SQL Server, MongoDB, and SQLite are all supported natively."),(0,o.kt)("li",{parentName:"ul"},"Excellent compatibility with popular hosting provider databases"),(0,o.kt)("li",{parentName:"ul"},"It can be used without a database (for example, OAuth + JWT)."),(0,o.kt)("li",{parentName:"ul"},"Secure by default")),(0,o.kt)("h2",{id:"project-setup"},"Project setup"),(0,o.kt)("p",null,"To create a project, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn create next-app\n")),(0,o.kt)("p",null,"The command above creates a new Next.js app using ",(0,o.kt)("inlineCode",{parentName:"p"},"create-next-app"),", which sets up everything automatically for you. You will be prompted to enter your project name to complete the installation. We used the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," package manager here, feel free to use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," if you have to."),(0,o.kt)("p",null,"Once the installation is completed, move into your folder directory and run the below command to start the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn dev\n")),(0,o.kt)("p",null,"Now your app has started you need to install the NextAuth package which is essential for the authentications. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add next-auth\n")),(0,o.kt)("p",null,"Once this is done, you will have all the dependencies required to follow up with this tutorial set up and can proceed with s authentication in your next application."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you are using TypeScript, NextAuth.js comes with its types definitions within the package. To learn more about TypeScript for next-auth, check out the ",(0,o.kt)("a",{parentName:"em",href:"https://next-auth.js.org/getting-started/typescript"},"TypeScript documentation"))),(0,o.kt)("h2",{id:"create-api-routes"},"Create API Routes"),(0,o.kt)("p",null,"To get started with adding NextAuth.js to your project, you first create a new folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api")," directory. Inside this new folder, you will create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"[...nextauth].js"),"."),(0,o.kt)("p",null,"This will contains the dynamic route handler for ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth.js")," which will also contain all of your global ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth.js")," configurations. "),(0,o.kt)("p",null,"Next, inside the `",(0,o.kt)("inlineCode",{parentName:"p"},"[...nextauth].js")," you've created, you will configure the global ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth")," configurations for ",(0,o.kt)("inlineCode",{parentName:"p"},"Github")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Google")," providers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/auth/[...nextauth].js"',title:'"pages/api/auth/[...nextauth].js"'},'import NextAuth from "next-auth"\nimport GoogleProvider from "next-auth/providers/google";\nimport GithubProvider from "next-auth/providers/github"\n\nexport default NextAuth({\n  // Configure one or more authentication providers\n  providers: [\n    GoogleProvider({\n      clientId: process.env.GOOGLE_CLIENT_ID,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET\n    }),\n    GithubProvider({\n      clientId: process.env.GITHUB_ID,\n      clientSecret: process.env.GITHUB_SECRET,\n    }),\n    // ...add more providers here\n  ],\n})\n')),(0,o.kt)("p",null,"Looking at the code snippet above, we started by importing ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth")," from the next-auth package we installed earlier, and since we will be adding only Google and Github auth in this tutorial, ",(0,o.kt)("inlineCode",{parentName:"p"},"GoogleProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GithubProvider")," were also imported and passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," array which stores all ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth")," providers."),(0,o.kt)("p",null,"Next, we will be looking into how we can obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," for each of the providers."),(0,o.kt)("h3",{id:"for-googleprovider-make-sure-you-have-a-google-account"},"For GoogleProvider (Make sure you have a Google account):"),(0,o.kt)("p",null,"Navigate to your ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"Google console")," credentials tab."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/google-create.jpeg",alt:"Create a Google project"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you have created and selected a project before now, you will see a button at the top that says ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"CREATE CREDENTIALS"'))," but if you haven't you need to create a project by clicking on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"CREATE PROJECT"'))," action button like the one circled in the image above. You will be taken to a page where you will enter your project name and organization (optional)."),(0,o.kt)("p",null,"When that is done, ensure you select the project you just created when notified."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/google-select-project.png",alt:"Google select project"})),(0,o.kt)("br",null),(0,o.kt)("p",null,'Once that is done, proceed to create credentials by clicking on the "CREATE CREDENTIALS" action button at the top, this will open a dropdown containing four items. Click on the item circled in the below image to create an OAuth client ID.'),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/google-select-auth.png",alt:"Google select auth provider"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you come across anything like:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To create an OAuth client ID, you must first configure your consent screen")),(0,o.kt)("p",null,"Please, go ahead to configure the consent screen by providing some information on your app, and when that is done, proceed to continue creating the OAuth client ID by choosing the application type and filling up the rest of the fields."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/google-select-type.png",alt:"Create an auth client"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"After entering the name of your OAuth 2.0 client. You will see a section that requests adding an ",(0,o.kt)("strong",{parentName:"p"},'"Authorised JavaScript origins"'),', click on the "+ ADD URI" action button to add your app origin. Since we are working in the development environment, all we need to do is to copy/paste our app URL which is running on localhost.'),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/authorised-origins.png",alt:"Authorised origins"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},'"Authorised redirect URIs"'),", you must include your full domain and end in the callback path."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For production: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://{YOUR_DOMAIN}/api/auth/callback/google")),(0,o.kt)("li",{parentName:"ul"},"For development: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/api/auth/callback/google"))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/redirect-url.png",alt:"Redirect URL"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you eventually push to production, you need to change the Authorised JavaScript Origin and Authorised redirect URIs to the production URIs.")),(0,o.kt)("br",null),(0,o.kt)("p",null,'Please verify the details provided and if they are all correct, click on "CREATE" to finally create your OAuth client ID.'),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/auth-client-created.png",alt:"Auth client verified"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Congratulations! You've successfully created Google OAuth client ID and SECRET. "),(0,o.kt)("p",null,"Where do you store it?"),(0,o.kt)("p",null,"Next, you will create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file in the root level of your app folder and inside of it you will create ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_CLIENT_SECRET")," environment variables and assign the OAuth client values we just created for each. "),(0,o.kt)("p",null,"You also need to include ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXTAUTH_URL")," (assign your app origin) and ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXTAUTH_SECRET")," environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("p",null,"When deploying to production, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXTAUTH_URL")," environment variable to the canonical URL of your site."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXTAUTH_SECRET")," environment variable for all environments. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"openssl rand -base64 32")," or ",(0,o.kt)("a",{parentName:"li",href:"https://generate-secret.vercel.app/32"},"https://generate-secret.vercel.app/32")," to generate a random value. "),(0,o.kt)("li",{parentName:"ul"},"You ",(0,o.kt)("strong",{parentName:"li"},"do not")," need the ",(0,o.kt)("inlineCode",{parentName:"li"},"NEXTAUTH_URL")," environment variable in Vercel.")),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file should be looking like this when you're done."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".env"',title:'".env"'},"GOOGLE_CLIENT_ID=YOUR_CLIENT_ID\nGOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET\n\nNEXTAUTH_URL=http://localhost:3000\nNEXTAUTH_SECRET=YOUR_SECRET\n")),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/refinedev/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,o.kt)("h3",{id:"for-githubprovider-you-will-need-a-github-account"},"For GithubProvider (you will need a GitHub account):"),(0,o.kt)("p",null,"To create your GithubProvider ID and SECRET, navigate to your GitHub account ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/settings/apps"},"developer settings")," and click on the OAuth Apps tab to register a new application."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/github_register.png",alt:"Github register"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Complete application registration by filling out the fields."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/github_register_enable.png",alt:"Github register enable"})),(0,o.kt)("br",null),(0,o.kt)("p",null,'Once completed, click on the "Register application" action button to register your app.\nRemember to go back and change the URIs to your production URI once you push to production.'),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/github_client_secrets.png",alt:"Github secrets"})),(0,o.kt)("br",null),(0,o.kt)("p",null,'Congratulations! You\'ve just created your Github OAuth Client ID and SECRET. You can generate a new client secret by clicking on the "Generate a new client secret" action button.'),(0,o.kt)("p",null,"Recall you've already created a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file for your environment variables, go ahead and assign the Client ID and Client secrets you just generated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_SECRET")," variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".env"',title:'".env"'},"GOOGLE_CLIENT_ID=YOUR_CLIENT_ID\nGOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET\n\nNEXTAUTH_URL=http://localhost:3000\nNEXTAUTH_SECRET=YOUR_SECRET\n\nGITHUB_ID=YOUR_ID\nGITHUB_SECRET=YOUR_SECRET\n")),(0,o.kt)("p",null,"This is the final look of our ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"Next, you will head into your ",(0,o.kt)("inlineCode",{parentName:"p"},"[...nextauth].js")," file and add the secret, remember you've already added the environment variable as ",(0,o.kt)("inlineCode",{parentName:"p"},"NEXTAUTH_SECRET"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/api/auth/[...nextauth].js"',title:'"pages/api/auth/[...nextauth].js"'},'import NextAuth from "next-auth"\nimport GoogleProvider from "next-auth/providers/google";\nimport GithubProvider from "next-auth/providers/github"\n\nexport default NextAuth({\n  // Configure one or more authentication providers\n  providers: [\n    GoogleProvider({\n      clientId: process.env.GOOGLE_CLIENT_ID,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET\n    }),\n    GithubProvider({\n      clientId: process.env.GITHUB_ID,\n      clientSecret: process.env.GITHUB_SECRET,\n    }),\n    // ...add more providers here\n  ],\n  secret: process.env.NEXTAUTH_SECRET\n})\n')),(0,o.kt)("p",null,"Congratulations! You\u2019ve added your complete API route. The next thing you are going to do is to configure the shared session state."),(0,o.kt)("hr",null),(0,o.kt)(p,{title:"Is your CRUD app overloaded with technical debt?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configure-shared-session-state"},"Configure Shared Session State"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useSession()")," React Hook in the NextAuth.js client is the easiest way to check if someone is signed in, and to be able to use this hook, first you\u2019ll need to expose the session context, ",(0,o.kt)("inlineCode",{parentName:"p"},"<SessionProvider />"),", at the top level of your application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/_app.jsx"',title:'"pages/_app.jsx"'},'import { SessionProvider } from "next-auth/react"\n\nexport default function App({\n  Component,\n  pageProps: { session, ...pageProps },\n}) {\n  return (\n    <SessionProvider session={session}>\n      <Component {...pageProps} />\n    </SessionProvider>\n  )\n}\n')),(0,o.kt)("p",null,"Instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"useSession")," will then have access to the session data and status. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<SessionProvider />")," also takes care of keeping the session updated and synced between browser tabs and windows."),(0,o.kt)("h2",{id:"update-page-components"},"Update Page Components"),(0,o.kt)("p",null,"Now update the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/index.js")," file to create a blog application. To that, add the code snippet below to the ",(0,o.kt)("inlineCode",{parentName:"p"},"page/index.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="page/index.js"',title:'"page/index.js"'},'import Head from "next/head";\nimport Image from "next/image";\nimport styles from "../styles/Home.module.css";\n\nexport default function Home() {\n  return (\n    <div className={styles.container}>\n      <Head>\n        <title>Create Next App</title>\n        <meta name="description" content="Generated by create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <main className={styles.main}>\n        <h1 className={styles.title}>My Blog</h1>\n        <div className={styles.row}>\n          <div className={styles.blogCard}>\n            <Image\n              src="/Getting-Started-with-NextJS-Inside.jpeg"\n              alt="blog1"\n              width={300}\n              height={200}\n            />\n            <div className={styles.blogCardContent}>\n              <h2>Nexjs for Beginers</h2>\n              <p>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Quisquam, quidem.\n              </p>\n\n              <a href="/blog1">Read More</a>\n            </div>\n          </div>\n          <div className={styles.blogCard}>\n            <Image\n              src="/pasted image 0.png"\n              alt="blog1"\n              width={300}\n              height={200}\n            />\n            <div className={styles.blogCardContent}>\n              <h2>Django Full Course</h2>\n              <p>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Quisquam, quidem.\n              </p>\n\n              <a href="/blog1">Read More</a>\n            </div>\n          </div>\n        </div>\n      </main>\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Then add the code snippets in the ",(0,o.kt)("inlineCode",{parentName:"p"},"styles/Home.module.css")," file to style the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles/Home.module.css"',title:'"styles/Home.module.css"'},".blogCard {\n  margin: 1rem;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n  max-width: 300px;\n}\n.blogCardContent {\n  margin-top: 1rem;\n}\n\n.login {\n  margin: 1rem;\n  padding: 1.5rem;\n  text-align: left;\n  color: inherit;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n  max-width: 300px;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-right: -15px;\n  margin-left: -15px;\n  justify-content: center;\n}\n.header {\n  display: flex;\n  align-items: center;\n}\n.header button {\n  margin-left: 10rem;\n  padding: 4px;\n  height: 2rem;\n  background-color: #ad270c;\n  border: none;\n}\n")),(0,o.kt)("p",null,"So if you refresh the application, you should see the blog application as shown in the screenshot below."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/result_view.png",alt:"Result view"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Right now, everyone can have access to the application. Let's add a hook to restrict access to only authenticated users."),(0,o.kt)("h2",{id:"add-react-hook"},"Add React Hook"),(0,o.kt)("p",null,"To know if a user is authenticated, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSession()")," hook. To get started, we need to import and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/index.js")," with the code snippet below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/index"',title:'"pages/index"'},'import Head from "next/head";\nimport Image from "next/image";\nimport styles from "../styles/Home.module.css";\nimport { useSession, signIn, signOut } from "next-auth/react";\n\nexport default function Home() {\n  const { data: session } = useSession();\n  return (\n    <div className={styles.container}>\n      <Head>\n        <title>Create Next App</title>\n        <meta name="description" content="Generated by create next app" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      {!session ? (\n        <>\n          <p>Not signed in</p>\n          <br />\n          <button onClick={() => signIn()}>Sign in</button>\n        </>\n      ) : (\n        <main className={styles.main}>\n          <div className={styles.header}>\n            <h4>Signed in as {session.user.name}</h4>\n            <button onClick={() => signOut()}>Sign out</button>\n          </div>\n          <h1 className={styles.title}>My Blog</h1>\n          <div className={styles.row}>\n            <div className={styles.blogCard}>\n              <Image\n                src="/Getting-Started-with-NextJS-Inside.jpeg"\n                alt="blog1"\n                width={300}\n                height={200}\n              />\n              <div className={styles.blogCardContent}>\n                <h2>Nexjs for Beginers</h2>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Quisquam, quidem.\n                </p>\n\n                <a href="/blog1">Read More</a>\n              </div>\n            </div>\n            <div className={styles.blogCard}>\n              <Image\n                src="/pasted image 0.png"\n                alt="blog1"\n                width={300}\n                height={200}\n              />\n              <div className={styles.blogCardContent}>\n                <h2>Django Full Course</h2>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Quisquam, quidem.\n                </p>\n\n                <a href="/blog1">Read More</a>\n              </div>\n            </div>\n          </div>\n        </main>\n      )}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Let's point out what we did in the above code. First, we ",(0,o.kt)("inlineCode",{parentName:"p"},"NextAuth")," hooks, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSession")," which helps us know if a user is authenticated, the ",(0,o.kt)("inlineCode",{parentName:"p"},"signIn")," hook to load the sign-in buttons and the ",(0,o.kt)("inlineCode",{parentName:"p"},"signOut")," hook to log a user out. Then we destructured the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," object from the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSession")," hook. The ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," object provides us with the information of the logged-in user. Using conditional rendering, we check if a user is logged in and render the blogs else show the user a sign-in button. "),(0,o.kt)("p",null,"Now, if you refresh the application, it will look like the screenshot below for non-authenticated users."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/not_signed_in.png",alt:"Not sign in"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"When the user clicks the sign-in button, they will be redirected to the sign-in button page as shown in the screenshot below."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/sign_in_box.png",alt:"Sign in box"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now when they click on any of the buttons, they will be redirected to the  Google or Github page depending on which button they click. Once they are authenticated, the application will look like the screenshot below."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/result_with_sign.png",alt:"Sign in result"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"protect-api-routes"},"Protect API Routes"),(0,o.kt)("p",null,"NextAuth also allows you to protect your API routes. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_getServerSession()")," method to do that. Let's update and protect the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/api/hello.js")," API with the code snippet below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="pages/api/hello.js"',title:'"pages/api/hello.js"'},'// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nimport { unstable_getServerSession } from "next-auth/next"\nimport { authOptions } from "../api/auth/[...nextauth]"\n\nexport default async function handler(req, res) {\n  const session = await unstable_getServerSession(req, res, authOptions)\n  if (session) {\n    const blogData = [\n      {\n        id: 1,\n        title: "Blog 1",\n        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",\n        image: "/images/blog1.jpg",\n      },\n      {\n        id: 2,\n        title: "Blog 2",\n        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",\n        image: "/images/blog2.jpg",\n      },\n    ]\n    res.status(200).json(blogData)\n  } else {\n    res.status(401).json({ message: "Unauthorized" })\n  }\n}\n')),(0,o.kt)("p",null,"In the above code snippet, we imported the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_getServerSession")," method and the ",(0,o.kt)("inlineCode",{parentName:"p"},"authOptions")," props. Then we created a ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," object from the ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_getServerSession")," method passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"authOptions")," as arguments. The session object will provide us with the details of the logged-in user. We check if a session exists and send the blog data to the client else send a ",(0,o.kt)("inlineCode",{parentName:"p"},"401")," (Unauthorized) response."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Throughout this tutorial, we've implemented how to add Google and GitHub authentication to a Nextjs application using NextAuth. We started by knowing what NextAuth is and why you should use it. Then we built a blog application for the demonstration. Now that you have the knowledge you seek, how would you add authentication to your next Nextjs project? Perhaps you can learn more about NextAuth from the ",(0,o.kt)("a",{parentName:"p",href:"https://next-auth.js.org/"},"documentation"),"."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))))}h.isMDXComponent=!0}}]);