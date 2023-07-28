"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[122],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:80},a="Customizing",c={unversionedId:"configuration/customizing",id:"configuration/customizing",title:"Customizing",description:"Adding and changing functionality of Springwolf is easy.",source:"@site/docs/configuration/customizing.md",sourceDirName:"configuration",slug:"/configuration/customizing",permalink:"/docs/configuration/customizing",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration/customizing.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/docs/configuration/documenting-messages"},next:{title:"Behind the scenes",permalink:"/docs/behind-the-scenes"}},s={},l=[{value:"<code>AsyncApiCustomizer</code> - Full AsyncAPI document",id:"asyncapicustomizer---full-asyncapi-document",level:2},{value:"<code>ChannelScanners</code> - Channel detection",id:"channelscanners---channel-detection",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"Adding and changing functionality of Springwolf is easy.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/"},"configuration")," page mentions the existing ones."),(0,o.kt)("p",null,"When you feel that Springwolf is missing a feature, you are able to add it yourself.\nTo learn more about how Springwolf works, look ",(0,o.kt)("a",{parentName:"p",href:"/docs/behind-the-scenes"},"behind the scenes"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please let us know on GitHub or Discord, so that other people can benefit from it as well.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/CONTRIBUTING.md"},"Contributions are welcome, here are some basic tips"),".")),(0,o.kt)("p",null,"Springwolf uses interfaces to allow to inject functionality at integration points.\nSpringwolf provides default implementation, but those can be replaced.\nAll default implementations are Spring managed beans, which can be overridden."),(0,o.kt)("h2",{id:"asyncapicustomizer---full-asyncapi-document"},(0,o.kt)("inlineCode",{parentName:"h2"},"AsyncApiCustomizer")," - Full AsyncAPI document"),(0,o.kt)("p",null,"By implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncApiCustomizer"),", the AsyncAPI document can be modified after Springwolf has done all the scanning and has built the document.\nIt is the final interception point before the document is available to the user."),(0,o.kt)("p",null,"For example, the title can be adjusted - although this should be done through the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class AsyncApiTitleCustomizer implements AsyncApiCustomizer {\n    @Override\n    public void customize(AsyncAPI asyncAPI) {\n         asyncAPI.getInfo().setTitle("Title set through customizer");\n    }\n}\n')),(0,o.kt)("h2",{id:"channelscanners---channel-detection"},(0,o.kt)("inlineCode",{parentName:"h2"},"ChannelScanners")," - Channel detection"),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelScanner")," beans are called to scan for channels.\nThis interface is helpful when a protocol currently unsupported by Springwolf is used.\nRemember to register all payloads in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemasService"),"."))}p.isMDXComponent=!0}}]);