"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3623],{8157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(7462),r=(a(7294),a(3905)),s=a(7219);const l={},o="AWS RDS PostgreSQL",d={unversionedId:"dependency/postgresql-aws",id:"dependency/postgresql-aws",title:"AWS RDS PostgreSQL",description:"For database solutions, Sleakops supports as a dependency AWS-managed Postgresql RDS, with the benefits of cloud-managed RDS like scalability, backups, software patchings. You can read more about those benefits in AWS .",source:"@site/docs/dependency/postgresql-aws.mdx",sourceDirName:"dependency",slug:"/dependency/postgresql-aws",permalink:"/dependency/postgresql-aws",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS MySQL RDS",permalink:"/dependency/mysql-aws"},next:{title:"PostgreSQL-SERVERLESS",permalink:"/dependency/postgresql-serverless"}},p={},i=[{value:"Parameters",id:"parameters",level:2}],m={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-rds-postgresql"},"AWS RDS PostgreSQL"),(0,r.kt)("p",null,"For database solutions, Sleakops supports as a ",(0,r.kt)("a",{parentName:"p",href:"/dependency/"},"dependency")," AWS-managed Postgresql RDS, with the benefits of cloud-managed RDS like scalability, backups, software patchings. You can read more about those benefits in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.RDS"},"AWS ",(0,r.kt)(s.AlO,{mdxType:"FiExternalLink"})),"."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"When you create this dependency, you only need to provide the parameters listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbName"),(0,r.kt)("td",{parentName:"tr",align:null},"Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbMasterUsername"),(0,r.kt)("td",{parentName:"tr",align:null},"Master username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbMasterPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"Master password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbInstanceClass"),(0,r.kt)("td",{parentName:"tr",align:null},"The EC2 instance type and size, check ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#Concepts.DBInstanceClass.Types"},"AWS ",(0,r.kt)(s.AlO,{mdxType:"FiExternalLink"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbEngineVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Postgresql engine version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbStorage"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of storage for the instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbMultiAZ"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies if the instance is multi-AZ or not. Recommended for production environments")))),(0,r.kt)("p",null,"The subnet group needed will be within your environment VPC according to our ",(0,r.kt)("a",{parentName:"p",href:"/provider/aws"},"proposed architecture"),"."))}u.isMDXComponent=!0}}]);