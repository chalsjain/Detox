"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5599],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),l=n(20053),i=n(23104),o=n(56347),s=n(57485),u=n(31682),c=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,f.A)();return r.createElement(x,(0,a.A)({key:String(t)},e))}},4732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),l=n(11470),i=n(19365);const o={id:"uninstalling",slug:"guide/uninstalling",title:"Uninstalling Detox",sidebar_label:"Uninstalling Detox"},s=void 0,u={unversionedId:"uninstalling",id:"version-19.x/uninstalling",title:"Uninstalling Detox",description:"Uninstalling Detox",source:"@site/versioned_docs/version-19.x/Guide.Uninstalling.md",sourceDirName:".",slug:"/guide/uninstalling",permalink:"/Detox/docs/19.x/guide/uninstalling",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Uninstalling.md",tags:[],version:"19.x",frontMatter:{id:"uninstalling",slug:"guide/uninstalling",title:"Uninstalling Detox",sidebar_label:"Uninstalling Detox"},sidebar:"tutorialSidebar",previous:{title:"Expo",permalink:"/Detox/docs/19.x/guide/expo"},next:{title:"Contributing",permalink:"/Detox/docs/19.x/contributing"}},c={},p=[{value:"Uninstalling Detox",id:"uninstalling-detox",level:2},{value:"Detox Framework Cache",id:"detox-framework-cache",level:3},{value:"Test Session State",id:"test-session-state",level:3},{value:"Cloned Simulators (macOS)",id:"cloned-simulators-macos",level:3},{value:"Remnants of Artifacts",id:"remnants-of-artifacts",level:3},{value:"iOS",id:"ios",level:4},{value:"Android",id:"android",level:4},{value:"Detox CLI",id:"detox-cli",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"uninstalling-detox"},"Uninstalling Detox"),(0,r.yg)("p",null,"Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc."),(0,r.yg)("p",null,"This checklist might come in handy whenever you have to make a clean uninstallation after using Detox."),(0,r.yg)("h3",{id:"detox-framework-cache"},"Detox Framework Cache"),(0,r.yg)("p",null,"Every install of Detox also triggers a ",(0,r.yg)("inlineCode",{parentName:"p"},"postinstall")," script in its ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json"),", which builds (or unpacks) ",(0,r.yg)("inlineCode",{parentName:"p"},"Detox.framework")," into ",(0,r.yg)("inlineCode",{parentName:"p"},"~/Library/Detox"),"."),(0,r.yg)("p",null,"You can either delete the folder manually:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/Library/Detox\n")),(0,r.yg)("p",null,"or run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"detox clean-framework-cache\n")),(0,r.yg)("h3",{id:"test-session-state"},"Test Session State"),(0,r.yg)("p",null,"On every test run, Detox rewrites a few temporary files in ",(0,r.yg)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH"),", i.e.:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The respective iOS and Android lockfiles to tell apart the busy and the available devices for use with multiple workers:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"device.registry.state.lock")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"android-device.registry.state.lock"),"."))),(0,r.yg)("li",{parentName:"ol"},"A plain text file with the line-separated list of last failed test files to rerun via ",(0,r.yg)("inlineCode",{parentName:"li"},"-R <retries-count>")," CLI feature:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"last-failed.txt"),".")))),(0,r.yg)("p",null,"The location of ",(0,r.yg)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH")," may vary depending on the operating system:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"macOS:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"~/Library/Detox"),"."))),(0,r.yg)("li",{parentName:"ul"},"Linux:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME/Detox"),", if ",(0,r.yg)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME")," is defined;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"~/.local/share/Detox"),", otherwise."))),(0,r.yg)("li",{parentName:"ul"},"Windows:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\data\\Detox"),", if ",(0,r.yg)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%")," is defined;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"%USERPROFILE%\\Application Data\\Detox"),", otherwise.")))),(0,r.yg)("h3",{id:"cloned-simulators-macos"},"Cloned Simulators (macOS)"),(0,r.yg)("p",null,'To support the "multiple workers" feature on iOS, Detox clones simulator instances when there aren\u2019t enough available ones.\nThe autogenerated simulators have names with ',(0,r.yg)("inlineCode",{parentName:"p"},"-Detox")," suffix appended, so you can easily spot them with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'xcrun simctl list | grep "-Detox"\n')),(0,r.yg)("p",null,"To delete a simulator, you can use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"xcrun simctl delete <uuid>\n")),(0,r.yg)("h3",{id:"remnants-of-artifacts"},"Remnants of Artifacts"),(0,r.yg)("p",null,"Forced exits may result in leaving some temporary files behind."),(0,r.yg)("h4",{id:"ios"},"iOS"),(0,r.yg)("p",null,"To ensure there are no temporary artifact files (logs, screenshots, etc.), you can run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rm -rf $TMPDIR/*.detox.*\n")),(0,r.yg)("p",null,"If you wish to clean up your iOS simulators from the installed apps and other customizations, just run the erase procedure for the relevant ones:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"xcrun simctl erase <uuid>\n")),(0,r.yg)("h4",{id:"android"},"Android"),(0,r.yg)("p",null,"The advice for iOS applies to the Android virtual devices as well. To wipe user files on a specific AVD, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"emulator -avd <your_AVD> -wipe-data\n")),(0,r.yg)("p",null,"If you have to clean temporary Detox files from an individual booted device, look out for files like ",(0,r.yg)("inlineCode",{parentName:"p"},"11159175_0.log")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"/sdcard")," folder.\nYou can try deleting them using a simple wildcard like below or use your own:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"adb -s <emulator-port> shell rm -rf /sdcard/*_*.* \n")),(0,r.yg)("h3",{id:"detox-cli"},"Detox CLI"),(0,r.yg)("p",null,"If you have installed the official CLI wrapper for Detox, then make sure to uninstall it as well:"),(0,r.yg)(l.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"npm",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm uninstall detox-cli --global\n"))),(0,r.yg)(i.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn global remove detox-cli\n"))),(0,r.yg)(i.A,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm remove detox-cli --global\n")))))}g.isMDXComponent=!0}}]);