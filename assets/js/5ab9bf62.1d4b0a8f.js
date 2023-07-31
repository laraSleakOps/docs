"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6395],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),v=a,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1935:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={},i="Variable Group",s={unversionedId:"vargroup/index",id:"vargroup/index",title:"Variable Group",description:"In Sleakops a variable group or var group is a set of key-value pairs as in a dictionary that provides configuration for services in a given project and environment.",source:"@site/docs/vargroup/index.mdx",sourceDirName:"vargroup",slug:"/vargroup/",permalink:"/vargroup/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Release",permalink:"/deployment/release"},next:{title:"Sleakops onboarding",permalink:"/deploy-helper"}},l={},p=[{value:"Create a var group",id:"create-a-var-group",level:2},{value:"Preference between var groups",id:"preference-between-var-groups",level:3},{value:"Cloud resources",id:"cloud-resources",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-group"},"Variable Group"),(0,a.kt)("p",null,"In Sleakops a variable group or var group is a set of key-value pairs as in a dictionary that provides configuration for services in a given project and environment."),(0,a.kt)("h2",{id:"create-a-var-group"},"Create a var group"),(0,a.kt)("p",null,"To create a var group you need to define a project, an environment, an identification name for the group and optionally a service.\nYou may provide as many key-value pairs as needed as long as the keys aren't duplicated.\nThe console gives you the choice to enter them in separate fields or as plain text much like dotenv files.\nWhen you save the var group, Sleakops creates a Kubernetes secret inside the namespace.\nOnce created you may only edit the entries inside the var group."),(0,a.kt)("p",null,"The optional service field indicates the scope of the var group.\nIf a service is not selected the resulting var group is ",(0,a.kt)("em",{parentName:"p"},"global")," and is available for all the ",(0,a.kt)("a",{parentName:"p",href:"/environment#infrastructure-created-with-an-environment"},"namespace"),".\nOtherwise, the var group is local to the selected service.\nThe interaction between var groups inside the namespace is described in the ",(0,a.kt)("a",{parentName:"p",href:"/vargroup#preference-between-var-groups"},"next section"),"."),(0,a.kt)("h3",{id:"preference-between-var-groups"},"Preference between var groups"),(0,a.kt)("p",null,"As previously mentioned, var groups end up being secrets inside the namespace.\nThis design allows Sleakops users to add identical keys with different values for several var groups.\nThis behavior is intended and needed to provide different configurations for services.\nWhen there is a conflict between the values of identical keys, the local values prevail (if any) or in the case of two global entries, the most recent one is kept."),(0,a.kt)("h2",{id:"cloud-resources"},"Cloud resources"),(0,a.kt)("p",null,"The creation of var groups only adds secrets to the environment cluster and has no significant costs for the Sleakops users."))}d.isMDXComponent=!0}}]);