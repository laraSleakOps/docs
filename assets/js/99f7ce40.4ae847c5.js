"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Deployment",i={unversionedId:"deployment/index",id:"deployment/index",title:"Deployment",description:"In Sleakops a deployment is the last step in getting your cloud infrastructure ready. Once all services are created a project can be deployed in a selected environment.",source:"@site/docs/deployment/index.mdx",sourceDirName:"deployment",slug:"/deployment/",permalink:"/deployment/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQS-AWS",permalink:"/dependency/sqs-aws"},next:{title:"Release",permalink:"/deployment/release"}},s={},p=[{value:"Create deployments",id:"create-deployments",level:2},{value:"How SleakOps handle deployments",id:"how-sleakops-handle-deployments",level:2},{value:"Cloud resources",id:"cloud-resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"In Sleakops a deployment is the last step in getting your cloud infrastructure ready. Once all services are created a project can be deployed in a selected environment.\nRemember that a project and environment make a namespace in a cluster. Sleakops will provide a Kubernetes deployment in the aforementioned cluster with all the services from the project."),(0,a.kt)("h2",{id:"create-deployments"},"Create deployments"),(0,a.kt)("p",null,"To create a deployment for a project in an environment you need to provide a ",(0,a.kt)("a",{parentName:"p",href:"/environment"},"environment"),", ",(0,a.kt)("a",{parentName:"p",href:"/project"},"project")," and a ",(0,a.kt)("a",{parentName:"p",href:"/deployment/release"},"release")),(0,a.kt)("h2",{id:"how-sleakops-handle-deployments"},"How SleakOps handle deployments"),(0,a.kt)("p",null,"When you create a Sleakops deployment a Helm release will be installed in your ",(0,a.kt)("a",{parentName:"p",href:"/cluster"},"cluster")," using a Helm chart built when a ",(0,a.kt)("a",{parentName:"p",href:"/deployment/release"},"release")," is created\nA Kubernetes deployment will pull an image (named as: environment_name-latest), built in ",(0,a.kt)("a",{parentName:"p",href:"/project/initial-build"},"initial-build"),", from the corresponding image repository (AWS ECR) built in ",(0,a.kt)("a",{parentName:"p",href:"/project"},"project"),"\nand desired numbers of Kubernetes pods will be created, running the desired image. A Kubernetes service and ingress will be created to allow the creation of the corresponding subdomains"),(0,a.kt)("h2",{id:"cloud-resources"},"Cloud resources"),(0,a.kt)("p",null,"When you create a deployment in Sleakops, the related cluster will receive these entities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a Kubernetes deployment for each web-service and worker Sleakops services types."),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes service for each web-service Sleakops services type"),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes Ingress for each web-service Sleakops services type"),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes hpa for each Sleakops service"),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes job for each job-service Sleakops service type"),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes cronjob for each cronjob-service Sleakops service type"),(0,a.kt)("li",{parentName:"ul"},"a Kubernetes release for each Sleakops release")))}d.isMDXComponent=!0}}]);