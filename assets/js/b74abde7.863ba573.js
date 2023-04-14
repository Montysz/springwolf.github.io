"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[791],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),s=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7901:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},l="Supported Protocols",p={unversionedId:"supported-protocols",id:"supported-protocols",title:"Supported Protocols",description:"| Protocol        | Annotation                        | Example Project                         | Latest Plugin Version |",source:"@site/docs/supported-protocols.md",sourceDirName:".",slug:"/supported-protocols",permalink:"/docs/supported-protocols",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/supported-protocols.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Documenting Producers",permalink:"/docs/documenting-producers"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},i={},s=[],c={toc:s};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supported-protocols"},"Supported Protocols"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Project"),(0,a.kt)("th",{parentName:"tr",align:null},"Latest Plugin Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AMQP (RabbitMQ)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@RabbitListener")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example"},"springwolf-amqp-example")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloud Functions"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example"},"springwolf-cloud-stream")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic",alt:"Maven Central"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@KafkaListener"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"@KafkaHandler")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example"},"springwolf-kafka-example")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic",alt:"Maven Central"}))))),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/issues/new"},"open an issue")," if you want a protocol to be supported."))}u.isMDXComponent=!0}}]);