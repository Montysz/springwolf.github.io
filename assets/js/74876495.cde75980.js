"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[49],{3506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=n(5893),o=n(1151),s=n(4866),a=n(5162),i=n(9286);const l="dependencies {\n    // Provides the documentation API\n    implementation 'io.github.springwolf:springwolf-kafka:1.3.0'\n\n    // Provides the UI - optional (recommended)\n    runtimeOnly 'io.github.springwolf:springwolf-ui:1.3.0'\n}\n",c="<dependencies>\n    \x3c!-- Provides the documentation API --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-kafka</artifactId>\n        <version>1.3.0</version>\n    </dependency>\n    \x3c!-- Provides the UI - optional (recommended) --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-ui</artifactId>\n        <version>1.3.0</version>\n    </dependency>\n</dependencies>\n",u={sidebar_position:20},d="Quickstart",p={id:"quickstart",title:"Quickstart",description:"The following instructions are for Kafka services - other protocols are almost the same. Check out the example project for complete examples.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/quickstart.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Supported Protocols",permalink:"/docs/introduction/supported-protocols"},next:{title:"Configuration",permalink:"/docs/configuration/"}},h={},f=[{value:"1. Add dependencies",id:"1-add-dependencies",level:2},{value:"2. Configure properties",id:"2-configure-properties",level:2},{value:"3. View the docs",id:"3-view-the-docs",level:2},{value:"4. Next steps",id:"4-next-steps",level:2}];function g(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The following instructions are for Kafka services - other protocols are almost the same. Check out the ",(0,r.jsx)(t.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples",children:"example project for complete examples"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"1-add-dependencies",children:"1. Add dependencies"}),"\n",(0,r.jsx)(t.p,{children:"Add the following dependencies:"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"Groovy",label:"Groovy",default:!0,children:(0,r.jsx)(i.Z,{language:"groovy",children:l})}),(0,r.jsx)(a.Z,{value:"Maven",label:"Maven",children:(0,r.jsx)(i.Z,{language:"xml",children:c})})]}),"\n",(0,r.jsxs)(t.p,{children:["Latest version: ",(0,r.jsx)(t.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-core?color=green&label=springwolf&style=plastic",alt:"Maven Central"})]}),"\n",(0,r.jsx)(t.h2,{id:"2-configure-properties",children:"2. Configure properties"}),"\n",(0,r.jsx)(t.p,{children:"Add the following to your application.properties:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"springwolf.docket.base-package=io.github.springwolf.example.consumers\n\nspringwolf.docket.info.title=${spring.application.name}\nspringwolf.docket.info.version=1.0.0\n\nspringwolf.docket.servers.kafka-server.protocol=kafka\nspringwolf.docket.servers.kafka-server.host=${kafka.bootstrap.servers:localhost:29092}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Make sure to change the value of ",(0,r.jsx)(t.code,{children:"springwolf.docket.base-package"})," to the package containing your listeners, so that Springwolf will automatically pick them up."]})}),"\n",(0,r.jsx)(t.h2,{id:"3-view-the-docs",children:"3. View the docs"}),"\n",(0,r.jsx)(t.p,{children:"Start the application and open the URLs in your browser:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["JSON: ",(0,r.jsx)(t.a,{href:"http://localhost:8080/springwolf/docs",children:(0,r.jsx)(t.code,{children:"<host>:<port>/springwolf/docs"})})]}),"\n",(0,r.jsxs)(t.li,{children:["YAML: ",(0,r.jsx)(t.a,{href:"http://localhost:8080/springwolf/docs.yaml",children:(0,r.jsx)(t.code,{children:"<host>:<port>/springwolf/docs.yaml"})})]}),"\n",(0,r.jsxs)(t.li,{children:["UI: ",(0,r.jsx)(t.a,{href:"http://localhost:8080/springwolf/asyncapi-ui.html",children:(0,r.jsx)(t.code,{children:"<host>:<port>/springwolf/asyncapi-ui.html"})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you configured a different context path in your application, make sure to prepend it to Springwolf URLs: ",(0,r.jsx)(t.code,{children:"<host>:<port>/<context-path>/springwolf/asyncapi-ui.html"})]}),"\n",(0,r.jsx)(t.h2,{id:"4-next-steps",children:"4. Next steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Read an elaborated tutorial on Baeldung at ",(0,r.jsx)(t.a,{href:"https://www.baeldung.com/java-spring-doc-asyncapi-springwolf",children:"https://www.baeldung.com/java-spring-doc-asyncapi-springwolf"})]}),"\n",(0,r.jsxs)(t.li,{children:["Check out the ",(0,r.jsx)(t.a,{href:"introduction/supported-protocols",children:"supported protocols and example projects"})]}),"\n",(0,r.jsx)(t.li,{children:"Dive deeper on the next pages"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(512);const o={tabItem:"tabItem_Ymn6"};var s=n(5893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),o=n(512),s=n(2466),a=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:o}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==r&&(c(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function k(e){const t=(0,m.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}}}]);