"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2380],{2149:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905)),o=(i(7435),i(6893));const s={},a="Cluster",l={unversionedId:"cluster/index",id:"cluster/index",title:"Cluster",description:"A cluster is a group of interconnected computers or instances that work together as a single unit to perform specific tasks or run applications. In the context of AWS Elastic Kubernetes Service  (EKS), a cluster consists of one or more EC2 instances (nodes) that form the foundation for running containerized applications using Kubernetes orchestration.",source:"@site/docs/cluster/index.mdx",sourceDirName:"cluster",slug:"/cluster/",permalink:"/cluster/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Security Account",permalink:"/provider/awsprovider/security_account"},next:{title:"Getting Started",permalink:"/cluster/gettingstarted"}},u={},c=[{value:"Memory and CPU Limits",id:"memory-and-cpu-limits",level:2},{value:"High-Availability for Reliability",id:"high-availability-for-reliability",level:2},{value:"Cluster Shutdown",id:"cluster-shutdown",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster"},"Cluster"),(0,r.kt)("p",null,"A cluster is a group of interconnected computers or instances that work together as a single unit to perform specific tasks or run applications. In the context of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/"},"AWS Elastic Kubernetes Service ",(0,r.kt)(o.AlO,{mdxType:"FiExternalLink"}))," (EKS), a cluster consists of one or more EC2 instances (nodes) that form the foundation for running containerized applications using Kubernetes orchestration."),(0,r.kt)("p",null,"When creating a cluster the configuration options offer you the flexibility and control needed to create an EKS cluster that aligns precisely with your requirements.\nIn the following sections, we will dive deeper into node provisioning, high-availability, and cluster shutdown features, providing you with valuable insights to manage your EKS cluster effectively. So, let's get started!"),(0,r.kt)("h2",{id:"memory-and-cpu-limits"},"Memory and CPU Limits"),(0,r.kt)("p",null,"During cluster creation, you have the power to define upper limits for memory and CPU resources.\nBy setting these limits, you ensure that your resources are utilized effectively, avoiding any over-commitment."),(0,r.kt)("h2",{id:"high-availability-for-reliability"},"High-Availability for Reliability"),(0,r.kt)("p",null,'To guarantee constant and reliable availability of your critical systems and services, you can enable the "High-Availability" feature.\nWith HA enabled the EKS cluster is distributed across multiple Availability Zones (AZs), providing redundancy and fault tolerance. This way, even if one AZ experiences an issue, your cluster continues to function smoothly, ensuring uninterrupted operations.'),(0,r.kt)("h2",{id:"cluster-shutdown"},"Cluster Shutdown"),(0,r.kt)("p",null,'Another essential option is the "Cluster Shutdown" feature. By enabling this option, you can choose a preferred time window for the cluster to be on.\nThis functionality allows you to optimize your resource utilization and minimize costs during idle periods, for instance, for a development cluster.\nIf you are interested in learning more about how it works, check out this ',(0,r.kt)("a",{parentName:"p",href:"/cluster/nightly_shutdown"},"section"),"."))}p.isMDXComponent=!0},7435:()=>{}}]);