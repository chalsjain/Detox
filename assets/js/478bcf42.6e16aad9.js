"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7619],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),c=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(h,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function x(e){const t=(0,y.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},95297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),o=n(11470),i=n(19365);const l={},s="Documentation Site",u={unversionedId:"contributing/documentation",id:"version-20.x/contributing/documentation",title:"Documentation Site",description:"Contributions towards enhancing our documentation are highly valued in the Detox community.",source:"@site/versioned_docs/version-20.x/contributing/documentation.md",sourceDirName:"contributing",slug:"/contributing/documentation",permalink:"/Detox/docs/contributing/documentation",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/contributing/documentation.md",tags:[],version:"20.x",frontMatter:{},sidebar:"contributeSidebar",previous:{title:"Review a Pull Request",permalink:"/Detox/docs/contributing/code/reviewing-pull-requests"},next:{title:"Code of Conduct",permalink:"/Detox/docs/contributing/code-of-conduct"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Making Updates",id:"making-updates",level:2},{value:"Deploying Changes",id:"deploying-changes",level:2},{value:"Modifying Old Versions",id:"modifying-old-versions",level:2},{value:"Reviewing Style Modifications",id:"reviewing-style-modifications",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"documentation-site"},"Documentation Site"),(0,a.yg)("p",null,"Contributions towards enhancing our documentation are highly valued in the Detox community.\nClear, concise, and comprehensive documentation enables users to understand and utilize the project more effectively."),(0,a.yg)("p",null,"We appreciate all contributions, from correcting typos to creating new documentation pages."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Our ",(0,a.yg)("a",{parentName:"p",href:"https://wix.github.io/Detox"},"documentation website")," is developed using ",(0,a.yg)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To set up a local version of the website for editing, follow these steps:"),(0,a.yg)(o.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd website\nnpm install\nnpm start\n"))),(0,a.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd website\nyarn install\nyarn start\n"))),(0,a.yg)(i.A,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd website\npnpm install\npnpm start\n")))),(0,a.yg)("h2",{id:"making-updates"},"Making Updates"),(0,a.yg)("p",null,"To modify an existing page, find the associated markdown file in the ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/")," directory and make the required changes. To introduce a new page, create a markdown file in ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/")," and link to it in ",(0,a.yg)("inlineCode",{parentName:"p"},"website/sidebars.json"),"."),(0,a.yg)("h2",{id:"deploying-changes"},"Deploying Changes"),(0,a.yg)("p",null,"Automatic updates to the website occur with each commit to the ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," branch, with these changes reflected under the ",(0,a.yg)("inlineCode",{parentName:"p"},"Next")," version. The process of tagging and locking documentation to a specific version is automated and coincides with each Detox release."),(0,a.yg)("p",null,"If there's a need to update the documentation of a particular version, modify the associated files and code located under ",(0,a.yg)("inlineCode",{parentName:"p"},"website/versioned_docs/version-<version>/")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"website/versioned_sidebars/version-<version>-sidebars.json"),"."),(0,a.yg)("h2",{id:"modifying-old-versions"},"Modifying Old Versions"),(0,a.yg)("p",null,"To update an older version with the latest changes:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Remove the desired version from ",(0,a.yg)("inlineCode",{parentName:"li"},"versions.json"),"."),(0,a.yg)("li",{parentName:"ol"},"Execute ",(0,a.yg)("inlineCode",{parentName:"li"},"npm run docusaurus docs:version <version>"),".")),(0,a.yg)("h2",{id:"reviewing-style-modifications"},"Reviewing Style Modifications"),(0,a.yg)("p",null,"If you're making changes to the stylesheets, use this ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/demo"},"demo page")," to visually inspect the impact of your changes and avoid unintentional visual regressions."))}g.isMDXComponent=!0}}]);