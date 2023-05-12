"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:80},a="Frequently Asked Questions",s={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"General",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/faq.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Behind the scenes",permalink:"/docs/behind-the-scenes"}},l={},p=[{value:"General",id:"general",level:2},{value:"Is springwolf free? What is the license?",id:"is-springwolf-free-what-is-the-license",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The springwolf UI is not showing",id:"the-springwolf-ui-is-not-showing",level:3},{value:"Unable to publish message from the UI",id:"unable-to-publish-message-from-the-ui",level:3},{value:"Is Spring Boot 2.X supported?",id:"is-spring-boot-2x-supported",level:3},{value:"Usage Patterns",id:"usage-patterns",level:2},{value:"How to access the generated documentation within java?",id:"how-to-access-the-generated-documentation-within-java",level:3},{value:"How to generate the documentation at build time?",id:"how-to-generate-the-documentation-at-build-time",level:3},{value:"With Gradle",id:"with-gradle",level:4},{value:"My consumers are detected multiple times (with different payloads)",id:"my-consumers-are-detected-multiple-times-with-different-payloads",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"is-springwolf-free-what-is-the-license"},"Is springwolf free? What is the license?"),(0,o.kt)("p",null,"Yes, you can use springwolf for private and commercial purposes as long as you comply to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/LICENSE"},"Apache License 2.0"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"the-springwolf-ui-is-not-showing"},"The springwolf UI is not showing"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"springwolf-ui")," dependency is added, the ui should be visible at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/springwolf/asyncapi-ui.html"},"http://localhost:8080/springwolf/asyncapi-ui.html"),"."),(0,o.kt)("p",null,"If not, whether"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"you customized the spring ",(0,o.kt)("inlineCode",{parentName:"p"},"context-path")," setting ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"static assets are being served at all. See the code below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n  @Override\n  public void addResourceHandlers(ResourceHandlerRegistry registry) {\n    registry\n        .addResourceHandler("/**")\n        .addResourceLocations("classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/");\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"Taken from ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/950375987475005471/950375988217409548/1051909821848363038"},"Discord Chat"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"spring-security (or similar) denies access the urls (HTTP 403). Check ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomWebSecurityConfigurerAdapter")," in springwolf-kafka-example."))),(0,o.kt)("h3",{id:"unable-to-publish-message-from-the-ui"},"Unable to publish message from the UI"),(0,o.kt)("p",null,"Publishing messages from the UI is disabled by default due to security concerns.\nSpringwolf does not offer authentication nor authorization, anyone can publish messages to (production) channels."),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration")," to enable this feature."),(0,o.kt)("p",null,"Spring Security allows to limit access to authorized users."),(0,o.kt)("h3",{id:"is-spring-boot-2x-supported"},"Is Spring Boot 2.X supported?"),(0,o.kt)("p",null,"You can use an older version of springwolf, which is build to support Spring Boot 2.X.\nHowever, these versions do not get any updates."),(0,o.kt)("p",null,"Last versions to support Spring Boot 2.X:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"springwolf-amqp:0.6.0"),(0,o.kt)("li",{parentName:"ul"},"springwolf-cloud-stream:0.1.0"),(0,o.kt)("li",{parentName:"ul"},"springwolf-core:0.6.0"),(0,o.kt)("li",{parentName:"ul"},"springwolf-kafka:0.10.0"),(0,o.kt)("li",{parentName:"ul"},"springwolf-ui:0.6.0")),(0,o.kt)("h2",{id:"usage-patterns"},"Usage Patterns"),(0,o.kt)("h3",{id:"how-to-access-the-generated-documentation-within-java"},"How to access the generated documentation within java?"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncApiService")," to access the generated documentation."),(0,o.kt)("h3",{id:"how-to-generate-the-documentation-at-build-time"},"How to generate the documentation at build time?"),(0,o.kt)("h4",{id:"with-gradle"},"With Gradle"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin"},"springdoc-openapi-gradle-plugin")," and configure the plugin\nfor springwolf by pointing it to the springwolf docs endpoint: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'openApi {\n    apiDocsUrl = "http://localhost:8080/springwolf/docs"\n    outputDir = file("$buildDir/docs")\n    outputFileName = "async-api.json"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/build.gradle"},"springwolf-kafka-example"),"\ncontains a working example."),(0,o.kt)("p",null,"The plugin will startup the spring boot application by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task and then try to download the documentation\nfrom the given ",(0,o.kt)("inlineCode",{parentName:"p"},"apiDocsUrl")," and store it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir")," and with the given ",(0,o.kt)("inlineCode",{parentName:"p"},"outputFileName"),"."),(0,o.kt)("p",null,"If your application is unable to start up with the bootRun task, see if ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springdoc/springdoc-openapi-gradle-plugin#customization"},"customBootRun"),"\nproperties can help you."),(0,o.kt)("h3",{id:"my-consumers-are-detected-multiple-times-with-different-payloads"},"My consumers are detected multiple times (with different payloads)"),(0,o.kt)("p",null,"When springwolf finds multiple consumers/producers for the same channel/topic, these are merged together.\nThis is expected, as there are use-cases where different payloads are sent via the same channel/topic."),(0,o.kt)("p",null,"Springwolf uses on scanners to find all consumer and producers in your application.\nMost likely two scanners found your consumer/producer each.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration")," to disable scanners."))}c.isMDXComponent=!0}}]);