"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[49],{3506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=t(5893),s=t(1151),o=t(4866),a=t(5162),i=t(9286);const l="dependencies {\n    // Provides the documentation API\n    implementation 'io.github.springwolf:springwolf-kafka:0.18.0'\n\n    // Provides the UI - optional (recommended)\n    runtimeOnly 'io.github.springwolf:springwolf-ui:0.18.0'\n}",c="<dependencies>\n    \x3c!-- Provides the documentation API --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-kafka</artifactId>\n        <version>0.18.0</version>\n    </dependency>\n    \x3c!-- Provides the UI - optional (recommended) --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-ui</artifactId>\n        <version>0.18.0</version>\n    </dependency>\n</dependencies>",u={sidebar_position:20},d="Quickstart",p={id:"quickstart",title:"Quickstart",description:"The following instructions are for Kafka services - but AMQP services configuration is almost same. Check out the example project for complete examples.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/quickstart.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Supported Protocols",permalink:"/docs/introduction/supported-protocols"},next:{title:"Configuration",permalink:"/docs/configuration/"}},h={},f=[{value:"1. Add dependencies",id:"1-add-dependencies",level:2},{value:"2. Configure properties",id:"2-configure-properties",level:2},{value:"3. View the docs",id:"3-view-the-docs",level:2},{value:"4. Next steps",id:"4-next-steps",level:2}];function g(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The following instructions are for Kafka services - but AMQP services configuration is almost same. Check out the ",(0,r.jsx)(n.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples",children:"example project for complete examples"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"1-add-dependencies",children:"1. Add dependencies"}),"\n",(0,r.jsx)(n.p,{children:"Add the following dependencies:"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"Groovy",label:"Groovy",default:!0,children:(0,r.jsx)(i.Z,{language:"groovy",children:l})}),(0,r.jsx)(a.Z,{value:"Maven",label:"Maven",children:(0,r.jsx)(i.Z,{language:"xml",children:c})})]}),"\n",(0,r.jsxs)(n.p,{children:["Latest version: ",(0,r.jsx)(n.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-core?color=green&label=springwolf&style=plastic",alt:"Maven Central"})]}),"\n",(0,r.jsx)(n.h2,{id:"2-configure-properties",children:"2. Configure properties"}),"\n",(0,r.jsx)(n.p,{children:"Add the following to your application.properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"springwolf.docket.base-package=io.github.stavshamir.springwolf.example.consumers\n\nspringwolf.docket.info.title=${spring.application.name}\nspringwolf.docket.info.version=1.0.0\n\nspringwolf.docket.servers.kafka.protocol=kafka\nspringwolf.docket.servers.kafka.url=${kafka.bootstrap.servers:localhost:29092}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Make sure to change the value of ",(0,r.jsx)(n.code,{children:"springwolf.docket.base-package"})," to the package containing your listeners, so that Springwolf will automatically pick them up."]})}),"\n",(0,r.jsx)(n.h2,{id:"3-view-the-docs",children:"3. View the docs"}),"\n",(0,r.jsx)(n.p,{children:"Start the application and open the URLs in your browser:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["JSON: ",(0,r.jsx)(n.a,{href:"http://localhost:8080/springwolf/docs",children:(0,r.jsx)(n.code,{children:"<host>:<port>/springwolf/docs"})})]}),"\n",(0,r.jsxs)(n.li,{children:["YAML: ",(0,r.jsx)(n.a,{href:"http://localhost:8080/springwolf/docs.yaml",children:(0,r.jsx)(n.code,{children:"<host>:<port>/springwolf/docs.yaml"})})]}),"\n",(0,r.jsxs)(n.li,{children:["UI: ",(0,r.jsx)(n.a,{href:"http://localhost:8080/springwolf/asyncapi-ui.html",children:(0,r.jsx)(n.code,{children:"<host>:<port>/springwolf/asyncapi-ui.html"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you configured a different context path in your application, make sure to prepend it to Springwolf URLs: ",(0,r.jsx)(n.code,{children:"<host>:<port>/<context-path>/springwolf/asyncapi-ui.html"})]}),"\n",(0,r.jsx)(n.h2,{id:"4-next-steps",children:"4. Next steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Read an elaborated tutorial on Baeldung at ",(0,r.jsx)(n.a,{href:"https://www.baeldung.com/java-spring-doc-asyncapi-springwolf",children:"https://www.baeldung.com/java-spring-doc-asyncapi-springwolf"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check out the ",(0,r.jsx)(n.a,{href:"introduction/supported-protocols",children:"supported protocols and example projects"})]}),"\n",(0,r.jsx)(n.li,{children:"Dive deeper on the next pages"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const s={tabItem:"tabItem_Ymn6"};var o=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),s=t(512),o=t(2466),a=t(6550),i=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),b=(()=>{const e=c??g;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}}}]);