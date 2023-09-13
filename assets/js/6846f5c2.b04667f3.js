"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905)),i=n(9378);n(7435);const a={},c="Connect into the VPN",l={unversionedId:"vpn/vpn_user_connection",id:"vpn/vpn_user_connection",title:"Connect into the VPN",description:"To handle VPN connections we use Pritunl. You can download the client here.",source:"@site/docs/vpn/vpn_user_connection.mdx",sourceDirName:"vpn",slug:"/vpn/vpn_user_connection",permalink:"/vpn/vpn_user_connection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VPN",permalink:"/vpn/"}},p={},s=[],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-into-the-vpn"},"Connect into the VPN"),(0,o.kt)("p",null,"To handle VPN connections we use Pritunl. You can download the client ",(0,o.kt)("a",{parentName:"p",href:"https://client.pritunl.com/#install"},"here"),"."),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-pritunl-client.png",alt:"vpn-pritunl-client",style:{height:"300px",width:"auto"}})),(0,o.kt)("p",null,"Once you've created a ",(0,o.kt)("a",{parentName:"p",href:"/provider/"},"Provider "),", go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.sleakops.com/"},"SleakOps dashboard")," and select the account for which you want to get VPN access. Remember, to do this, you need to have access to the VPN of that account, but the VPN must also be created. We create the VPN of a specific account when the first cluster of that account is created. "),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-account-select.png",alt:"vpn-account-select"})),(0,o.kt)("p",null,"This will prompt you with what is called the URI profile. It has a validation period of 24 hours, and you must load it into the Pritunl client."),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-uri-profile.png",alt:"vpn-uri-profile"})),(0,o.kt)("p",null,"Copy it and import it into the Pritunl client, and you'll be able to connect to it:"),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-client-import.png",alt:"vpn-client-import",style:{height:"300px",width:"auto"}})),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-importing-profile.png",alt:"vpn-importing-profile",style:{height:"300px",width:"auto"}})),(0,o.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/VPN-profile-connect.png",alt:"vpn-profile-connect",style:{height:"300px",width:"auto"}})))}d.isMDXComponent=!0},7435:()=>{}}]);