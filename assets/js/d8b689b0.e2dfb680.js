"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[656],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),o=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),o=n(96540),r=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),p=n(89466);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=y({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var h=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=g(e);return o.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},o.createElement(b,(0,a.A)({},e,t)),o.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,h.A)();return o.createElement(x,(0,a.A)({key:String(t)},e))}},44896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>D,frontMatter:()=>h,metadata:()=>b,toc:()=>x});var a=n(58168),o=(n(96540),n(15680)),r=n(11470),i=n(19365);const l={toc:[]},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'Detox was built from the ground up to support "classic" React Native projects.'),(0,o.yg)("admonition",{title:"Note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"While Detox should work out of the box with almost any React Native version from the past few minor releases, official support is provided for React Native versions ",(0,o.yg)("inlineCode",{parentName:"p"},"0.71.x")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"0.72.x")," without React Native's ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/the-new-architecture/landing-page"},'"New Architecture"'),"."),(0,o.yg)("p",{parentName:"admonition"},'Newer versions, as well as React Native\'s "New Architecture", may work with Detox, but have not been tested out yet by the Detox team.'),(0,o.yg)("p",{parentName:"admonition"},"Although we do not officially support older React Native versions, we do our best to keep Detox compatible with them."),(0,o.yg)("p",{parentName:"admonition"},"Also, in case of a problem with an unsupported version of React Native, please ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/new/choose"},"submit an issue")," or write us in our ",(0,o.yg)("a",{parentName:"p",href:"https://discord.gg/CkD5QKheF5"},"Discord server")," and we will do our best to help out.")))}u.isMDXComponent=!0;const p={toc:[]},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Note",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Expo integration with Detox is entirely a community-driven effort.\nThere is no special support for Expo projects in Detox, and we do not maintain any Expo-specific code or documentation.")),(0,o.yg)("p",null,"There is a tutorial on how to set up Detox with Expo projects, which you can find on Expo official documentation site: ",(0,o.yg)("a",{parentName:"p",href:"https://docs.expo.dev/build-reference/e2e-tests/"},"Running E2E tests on EAS Build"),". It is a great starting point for projects that are using Expo."),(0,o.yg)("p",null,"For support on how to use Detox with Expo, you should contact the Expo team or the Expo community."),(0,o.yg)("p",null,"If you are experiencing a bug, which you believe is a Detox issue, please ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues"},"open an issue")," on our GitHub repository."))}d.isMDXComponent=!0;const m={toc:[]},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Note",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"At the moment, Detox does not support non-React Native apps on ",(0,o.yg)("strong",{parentName:"p"},"Android")," due to the blocking issues:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/2543"},"Restore support for pure-native/hybrid Projects")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/1220"},"cannot be cast to com.facebook.react.ReactApplication")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/wix/Detox/issues/1093"},"native android app Process crashes")))),(0,o.yg)("p",null,"However, native iOS apps are expected to work fine with Detox, and if that's your case, this introduction will help you in equal measure."))}g.isMDXComponent=!0;const h={},f="Environment Setup",b={unversionedId:"introduction/environment-setup",id:"version-20.x/introduction/environment-setup",title:"Environment Setup",description:"The Introduction section walks you through setting up Detox in your project, one step at a time.",source:"@site/versioned_docs/version-20.x/introduction/environment-setup.md",sourceDirName:"introduction",slug:"/introduction/environment-setup",permalink:"/Detox/docs/introduction/environment-setup",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/introduction/environment-setup.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Detox/docs/introduction/getting-started"},next:{title:"Project Setup",permalink:"/Detox/docs/introduction/project-setup"}},v={},x=[{value:"React Native CLI Quickstart",id:"react-native-cli-quickstart",level:2},{value:"Detox Prerequisites",id:"detox-prerequisites",level:2},{value:"1. Command Line Tools (<code>detox-cli</code>)",id:"1-command-line-tools-detox-cli",level:3},{value:"2. MacOS Only <code>applesimutils</code>",id:"2-macos-only-applesimutils",level:3}],w={toc:x},N="wrapper";function D(e){let{components:t,...l}=e;return(0,o.yg)(N,(0,a.A)({},w,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"environment-setup"},"Environment Setup"),(0,o.yg)("p",null,"The ",(0,o.yg)("em",{parentName:"p"},"Introduction section")," walks you through setting up Detox in your project, one step at a time."),(0,o.yg)("p",null,"You will find that some steps are longer than the others: some are a couple of paragraphs, while the others look like a dedicated multistep guide.\nBear with us - it is all necessary, and once set up, it is easy to move forward with writing tests at a high pace."),(0,o.yg)("p",null,"Please select type of your mobile application before you start the tutorial:"),(0,o.yg)(r.A,{groupId:"appType",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"start-rn",label:"React Native",default:!0,mdxType:"TabItem"},(0,o.yg)(u,{mdxType:"IntroRN"})),(0,o.yg)(i.A,{value:"start-expo",label:"Expo",mdxType:"TabItem"},(0,o.yg)(d,{mdxType:"IntroExpo"})),(0,o.yg)(i.A,{value:"start-other",label:"Other",mdxType:"TabItem"},(0,o.yg)(g,{mdxType:"IntroOther"}))),(0,o.yg)("h2",{id:"react-native-cli-quickstart"},"React Native CLI Quickstart"),(0,o.yg)("p",null,"Your first step would be to complete the\n",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/environment-setup"},"\ud83d\udcda React Native CLI Quickstart Guide")," for iOS/Android/both (depending\non your use case)."),(0,o.yg)("admonition",{title:"Note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Mind that for Android, we have an equivalent ",(0,o.yg)("a",{parentName:"p",href:"/Detox/docs/guide/android-dev-env"},"environment setup guide"),", which is a bit different,\nbut more comprehensive. Use your judgement and take what's most suitable for your environment from both guides. For\nexample, there is more than one way to install the right Java Development Kit.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"RN Env",src:n(42096).A,width:"1116",height:"405"})),(0,o.yg)("p",null,"Open the link above and switch there to ",(0,o.yg)("b",null,"React Native CLI Quickstart")," tab to see the interactive tutorial for ",(0,o.yg)("b",null,"Development OS")," and ",(0,o.yg)("b",null,"Target OS")," of your choice."),(0,o.yg)("p",null,"Follow all the steps ",(0,o.yg)("span",{style:{color:"red"}},"(yes, even if you have a native app!)")," and make sure you can create and run React Native apps on virtual testing devices."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"RN Env Done",src:n(30471).A,width:"600",height:"780"})),(0,o.yg)("h2",{id:"detox-prerequisites"},"Detox Prerequisites"),(0,o.yg)("p",null,"To complete the environment setup, you still have 2 steps ahead: installing ",(0,o.yg)("inlineCode",{parentName:"p"},"detox-cli")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"applesimutils"),"."),(0,o.yg)("h3",{id:"1-command-line-tools-detox-cli"},"1. Command Line Tools (",(0,o.yg)("inlineCode",{parentName:"h3"},"detox-cli"),")"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"detox-cli")," is merely a script that passes commands through to\na local Detox executable located at ",(0,o.yg)("inlineCode",{parentName:"p"},"node_modules/.bin/detox"),",\nmaking it easier to operate Detox from the command line, e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"detox test -c ios.sim.debug"),"."),(0,o.yg)("p",null,"It should be installed globally, enabling usage of the command line tools outside your npm scripts:"),(0,o.yg)(r.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,o.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n"))),(0,o.yg)(i.A,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm add detox-cli --global\n")))),(0,o.yg)("p",null,"On the other hand, if you are fine with running Detox commands with ",(0,o.yg)("inlineCode",{parentName:"p"},"npx detox ..."),", you may skip installing ",(0,o.yg)("inlineCode",{parentName:"p"},"detox-cli"),"."),(0,o.yg)("h3",{id:"2-macos-only-applesimutils"},"2. ","[MacOS Only]"," ",(0,o.yg)("inlineCode",{parentName:"h3"},"applesimutils")),(0,o.yg)("p",null,"This tool is ",(0,o.yg)("strong",{parentName:"p"},"required")," by Detox to work with iOS simulators. The recommended way to install\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/AppleSimulatorUtils"},(0,o.yg)("inlineCode",{parentName:"a"},"applesimutils"))," is via ",(0,o.yg)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"brew tap wix/brew\nbrew install applesimutils\n")),(0,o.yg)("admonition",{title:"Note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Make sure to periodically update your version of ",(0,o.yg)("inlineCode",{parentName:"p"},"applesimutils")," to the latest version.")),(0,o.yg)("p",null,"Now, when your environment is ready, let's move to the next section, ",(0,o.yg)("a",{parentName:"p",href:"/Detox/docs/introduction/project-setup"},"Project Setup"),"."))}D.isMDXComponent=!0},30471:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rn-env-done-7e6ae38e1abc1558b2c280191a7425a8.png"},42096:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rn-env-ff2580ce1cf001d1cad9dd3a507b97ab.png"}}]);