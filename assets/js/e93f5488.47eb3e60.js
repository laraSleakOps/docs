"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[201],{3370:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=o(7462),n=(o(7294),o(3905)),s=(o(7435),o(6893));const i={sidebar_label:"AWS Hosted Zone"},r="Hosted Zone",d={unversionedId:"provider/awsprovider/hostedzone",id:"provider/awsprovider/hostedzone",title:"Hosted Zone",description:"First of all, as defined by AWS, a hosted zone is basically a container for records that contain information about how a domain routes its incoming traffic.",source:"@site/docs/provider/awsprovider/hostedzone.mdx",sourceDirName:"provider/awsprovider",slug:"/provider/awsprovider/hostedzone",permalink:"/provider/awsprovider/hostedzone",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"AWS Hosted Zone"},sidebar:"tutorialSidebar",previous:{title:"AWS Management Account",permalink:"/provider/awsprovider/aws-management-acc"},next:{title:"AWS Security Account",permalink:"/provider/awsprovider/security_account"}},l={},c=[{value:"Route53, how SleakOps uses it",id:"route53-how-sleakops-uses-it",level:2},{value:"How SleakOps manages domains and subdomains",id:"how-sleakops-manages-domains-and-subdomains",level:3},{value:"DNS Delegation",id:"dns-delegation",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hosted-zone"},"Hosted Zone"),(0,n.kt)("p",null,"First of all, as defined by AWS, a hosted zone is basically a container for records that contain information about how a domain routes its incoming traffic."),(0,n.kt)("h2",{id:"route53-how-sleakops-uses-it"},"Route53, how SleakOps uses it"),(0,n.kt)("p",null,"As initially described on ",(0,n.kt)("a",{parentName:"p",href:"/provider/"},"Provider")," SleakOps create a ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/route53/"},"Route53 ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," HostedZone inside the 'prod' account, this Zone will be considered and called the Primary HostedZone because it is where you use the 'pure' domain you've defined on the Provider creation, similarly, SleakOps will create other HostedZones, which are Secondaries and will be handled as subdomains of the domain when you create an ",(0,n.kt)("a",{parentName:"p",href:"/environment"},"Environment"),".\nWhen an Environment is created we also create its right Records on the Primary HostedZone to connect the Services of the Environment with the domain delegated on 'prod'."),(0,n.kt)("h3",{id:"how-sleakops-manages-domains-and-subdomains"},"How SleakOps manages domains and subdomains"),(0,n.kt)("p",null,"With these AWS services, we create public domains. Public domains describe how to route traffic on the internet. Also, both of them will be handled by the external-dns Pod we deploy on each Cluster created and it will make the subdomains needed based on the ",(0,n.kt)("a",{parentName:"p",href:"/service/"},"Services")," you create. For more information on external-dns you can check its ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"Github ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),"."),(0,n.kt)("h2",{id:"dns-delegation"},"DNS Delegation"),(0,n.kt)("p",null,"At this moment SleakOps only creates the Route53 HostedZones and manages them with 'external-dns', but you have to delegate your DNS service to the Primary Route53 of SleakOps manually. To do that you'll have to follow the steps described on this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html"},"link ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," and check what applies to your case."))}u.isMDXComponent=!0},7435:()=>{}}]);