"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3037],{1530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),i=a(9378),s=(a(7435),a(6893));const o={},c="Providers",l={unversionedId:"provider/index",id:"provider/index",title:"Providers",description:"What is a provider?",source:"@site/docs/provider/index.mdx",sourceDirName:"provider",slug:"/provider/",permalink:"/provider/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Navigating in Sleakops",permalink:"/navigating"},next:{title:"Getting Started",permalink:"/provider/gettingstarted"}},p={},u=[{value:"What is a provider?",id:"what-is-a-provider",level:2},{value:"Building process and required resources",id:"building-process-and-required-resources",level:2}],d={toc:u},h="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"providers"},"Providers"),(0,n.kt)("h2",{id:"what-is-a-provider"},"What is a provider?"),(0,n.kt)("p",null,"The Provider is the first step to start on SleakOps after you've created your company. As well as in every case, when someone wants to start up its infrastructure it needs to decide which one of all the cloud infrastructure providers to use based on different pros and cons that each one has. Here, we are talking exactly about that, a provider is the cloud provider that you want, it can be AWS, Azure or GCP."),(0,n.kt)("p",null,"Next to this, you have to create the provider so SleakOps need access to this provider through credentials. This starts the process of generating different infrastructure resources and services that are needed to replicate the Architecture Reference Schema presented for that Cloud Provider. In this case, we will describe the construction of the presented ",(0,n.kt)("a",{parentName:"p",href:"/provider/awsprovider/aws"},"AWS Reference Architecture"),"."),(0,n.kt)("p",null,"Account Security:\nEn esta cuenta vamos a mantener todos los usuarios que tienen acceso a este provider. "),(0,n.kt)("p",null,"Account Management:\nEsta cuenta est\xe1 pensada para mantener servicios internos que sirvan para el mantenimiento de la aplicaci\xf3n y sean compartidos o no entre cuentas. Ej: sentry,"),(0,n.kt)("p",null,"Account Development\nEsta cuenta es para mantener las diferentes etapas de  tu aplicaci\xf3n antes de ser productiva."),(0,n.kt)("p",null,"Account Production\nEsta cuenta est\xe1 pensada para tener instalada tu aplicaci\xf3n de manera productiva. aislada del resto de las etapas de tu aplicaci\xf3n."),(0,n.kt)("h2",{id:"building-process-and-required-resources"},"Building process and required resources"),(0,n.kt)(i.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,n.kt)("img",{src:"/img/provider/aws/craftech-reference-architecture.png",alt:"craftech-reference-architecture"})),(0,n.kt)("p",null,"The first thing that we see in the architecture is the distribution of three ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/organizations/"},"Accounts ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," (",(0,n.kt)("em",{parentName:"p"},"mgt"),", ",(0,n.kt)("em",{parentName:"p"},"dev")," and ",(0,n.kt)("em",{parentName:"p"},"prod"),"), following the creation flow, these are the resources that are initially created. Once the Accounts are up, we set to each one of them what we call Network Module, it contains a lot of different AWS services that are used to make the network connections inside accounts, it's extensive so let's dive in on what it creates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/vpc/"},"Virtual Private Cloud (VPC) ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": Needed because inside it is where we build our infrastructure and a big part of its connections."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"},"Internet Gateway (IGW) ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": The door of the VPC that allows us to access the resources inside it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html"},"Elastic IP (Eip) ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": The IP related to the Internet Gateway."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html"},"Route Tables ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": As you can assume by analyzing the schema, we make three, the Public, the Private and the Persistence Route Tables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"},"Subnets ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": Similar to Route Tables. We create a Public Subnet, a Private Subnet and a Persistence Subnet. After this, the subnets are associated with their respective Route Tables via a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#route-table-assocation"},"Route Table Association ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#route-table-routes"},"Route ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": It's applied on network traffic resources like an Internet Gateway and a NatGateway, for Public and Private Route Tables respectively. Specifies a route in a Route Table within a VPC."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"},"NatGateway ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),": Allow resources on a private subnet to connect to services outside of the VPC, but negate traffic into this subnet.")),(0,n.kt)("p",null,"Now we establish the connection between the accounts with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"},"VPC Peering connections ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"})),", in the ",(0,n.kt)("em",{parentName:"p"},"mgt")," account we use a Network Peering Connection that works as the Requester while in the other accounts we need the Network Peering Accepter. All these cases need a Route for the traffic."),(0,n.kt)("p",null,"When generating these connections we also create the ",(0,n.kt)("a",{parentName:"p",href:"https://pritunl.com/"},"Pritunl ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," VPN on ",(0,n.kt)("em",{parentName:"p"},"mgt"),". For this, we use an ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"EC2 instance ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," that contains the VPN Server and configure three ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules"},"Security Group Rules ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"},"Security Group ",(0,n.kt)(s.AlO,{mdxType:"FiExternalLink"}))," to regulate the traffic."),(0,n.kt)("p",null,"Another difference between the networking on these organizations is that on the 'prod' account we also create a ",(0,n.kt)("a",{parentName:"p",href:"/provider/awsprovider/hostedzone"},"HostedZone"),"."))}m.isMDXComponent=!0},7435:()=>{}}]);