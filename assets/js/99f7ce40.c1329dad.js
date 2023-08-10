"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1552],{7319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Deployment",s={unversionedId:"deployment/index",id:"deployment/index",title:"Deployment",description:"In Sleakops a deployment is the last step in getting your cloud infrastructure ready. Once all services are created a project can be deployed in a selected environment.",source:"@site/docs/deployment/index.mdx",sourceDirName:"deployment",slug:"/deployment/",permalink:"/deployment/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS SQS",permalink:"/dependency/sqs-aws"},next:{title:"Release",permalink:"/deployment/release"}},i={},p=[{value:"Create deployments",id:"create-deployments",level:2},{value:"How SleakOps handle deployments",id:"how-sleakops-handle-deployments",level:2},{value:"Cloud resources",id:"cloud-resources",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"In Sleakops a deployment is the last step in getting your cloud infrastructure ready. Once all services are created a project can be deployed in a selected environment.\nRemember that a project and environment make a namespace in a cluster. Sleakops will provide a Kubernetes deployment in the aforementioned cluster with all the services from the project."),(0,r.kt)("h2",{id:"create-deployments"},"Create deployments"),(0,r.kt)("p",null,"To create a deployment for a project in an environment you need to provide a ",(0,r.kt)("a",{parentName:"p",href:"/environment"},"environment"),", ",(0,r.kt)("a",{parentName:"p",href:"/project"},"project")," and a ",(0,r.kt)("a",{parentName:"p",href:"/deployment/release"},"release")),(0,r.kt)("h2",{id:"how-sleakops-handle-deployments"},"How SleakOps handle deployments"),(0,r.kt)("p",null,"When you create a Sleakops deployment a Helm release will be installed in your ",(0,r.kt)("a",{parentName:"p",href:"/cluster"},"cluster")," using a Helm chart built when a ",(0,r.kt)("a",{parentName:"p",href:"/deployment/release"},"release")," is created\nA Kubernetes deployment will pull an image (named as: environment_name-latest), built in ",(0,r.kt)("a",{parentName:"p",href:"/project/build/initial-build"},"initial-build"),", from the corresponding image repository (AWS ECR) built in ",(0,r.kt)("a",{parentName:"p",href:"/project"},"project"),"\nand desired numbers of Kubernetes pods will be created, running the desired image. A Kubernetes service and ingress will be created to allow the creation of the corresponding subdomains"),(0,r.kt)("h2",{id:"cloud-resources"},"Cloud resources"),(0,r.kt)("p",null,"When you create a deployment in Sleakops, the related cluster will receive these entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Kubernetes deployment for each web-service and worker Sleakops services types."),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes service for each web-service Sleakops services type"),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes Ingress for each web-service Sleakops services type"),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes hpa for each Sleakops service"),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes job for each job-service Sleakops service type"),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes cronjob for each cronjob-service Sleakops service type"),(0,r.kt)("li",{parentName:"ul"},"a Kubernetes release for each Sleakops release")))}u.isMDXComponent=!0}}]);