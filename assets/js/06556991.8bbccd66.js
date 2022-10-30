"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:f,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,s.U)(),[N,w]=(0,l.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=D.indexOf(t),n=g[a].value;n!==N&&(O(t),w(n),null!=f&&x(f,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>D.push(e),onKeyDown:C,onClick:T},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},6876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),i=a(5162);const o={},s="Uninstalling Detox",u={unversionedId:"guide/uninstalling",id:"guide/uninstalling",title:"Uninstalling Detox",description:"Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc.",source:"@site/../docs/guide/uninstalling.md",sourceDirName:"guide",slug:"/guide/uninstalling",permalink:"/Detox/docs/next/guide/uninstalling",draft:!1,editUrl:"https://github.com/wix/Detox/edit/next/docs/../docs/guide/uninstalling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProGuard configuration",permalink:"/Detox/docs/next/guide/proguard-configuration"},next:{title:"Dealing With Problems With Building the App & Detox",permalink:"/Detox/docs/next/troubleshooting/building-the-app"}},c={},p=[{value:"Detox Framework Cache",id:"detox-framework-cache",level:2},{value:"Test Session State",id:"test-session-state",level:2},{value:"Cloned Simulators (macOS)",id:"cloned-simulators-macos",level:2},{value:"Remnants of Artifacts",id:"remnants-of-artifacts",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Detox CLI",id:"detox-cli",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uninstalling-detox"},"Uninstalling Detox"),(0,l.kt)("p",null,"Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc."),(0,l.kt)("p",null,"This checklist might come in handy whenever you have to make a clean uninstallation after using Detox."),(0,l.kt)("h2",{id:"detox-framework-cache"},"Detox Framework Cache"),(0,l.kt)("p",null,"Every install of Detox also triggers a ",(0,l.kt)("inlineCode",{parentName:"p"},"postinstall")," script in its ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", which builds (or unpacks) ",(0,l.kt)("inlineCode",{parentName:"p"},"Detox.framework")," into ",(0,l.kt)("inlineCode",{parentName:"p"},"~/Library/Detox"),"."),(0,l.kt)("p",null,"You can either delete the folder manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/Library/Detox\n")),(0,l.kt)("p",null,"or run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"detox clean-framework-cache\n")),(0,l.kt)("h2",{id:"test-session-state"},"Test Session State"),(0,l.kt)("p",null,"On every test run, Detox rewrites a few temporary files in ",(0,l.kt)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH"),", i.e.:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The respective iOS and Android lockfiles to tell apart the busy and the available devices for use with multiple workers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"device.registry.state.lock")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"android-device.registry.state.lock"),".")))),(0,l.kt)("p",null,"The location of ",(0,l.kt)("inlineCode",{parentName:"p"},"DETOX_LIBRARY_ROOT_PATH")," may vary depending on the operating system:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/Library/Detox"),"."))),(0,l.kt)("li",{parentName:"ul"},"Linux:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME/Detox"),", if ",(0,l.kt)("inlineCode",{parentName:"li"},"$XDG_DATA_HOME")," is defined;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.local/share/Detox"),", otherwise."))),(0,l.kt)("li",{parentName:"ul"},"Windows:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%\\data\\Detox"),", if ",(0,l.kt)("inlineCode",{parentName:"li"},"%LOCALAPPDATA%")," is defined;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\Application Data\\Detox"),", otherwise.")))),(0,l.kt)("h2",{id:"cloned-simulators-macos"},"Cloned Simulators (macOS)"),(0,l.kt)("p",null,'To support the "multiple workers" feature on iOS, Detox clones simulator instances when there aren\u2019t enough available ones.\nThe autogenerated simulators have names with ',(0,l.kt)("inlineCode",{parentName:"p"},"-Detox")," suffix appended, so you can easily spot them with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'xcrun simctl list | grep "-Detox"\n')),(0,l.kt)("p",null,"To delete a simulator, you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl delete <uuid>\n")),(0,l.kt)("h2",{id:"remnants-of-artifacts"},"Remnants of Artifacts"),(0,l.kt)("p",null,"Forced exits may result in leaving some temporary files behind."),(0,l.kt)("h3",{id:"ios"},"iOS"),(0,l.kt)("p",null,"To ensure there are no temporary artifact files (logs, screenshots, etc.), you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf $TMPDIR/*.detox.*\n")),(0,l.kt)("p",null,"If you wish to clean up your iOS simulators from the installed apps and other customizations, just run the erase procedure for the relevant ones:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl erase <uuid>\n")),(0,l.kt)("h3",{id:"android"},"Android"),(0,l.kt)("p",null,"The advice for iOS applies to the Android virtual devices as well. To wipe user files on a specific AVD, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -avd <your_AVD> -wipe-data\n")),(0,l.kt)("p",null,"If you have to clean temporary Detox files from an individual booted device, look out for files like ",(0,l.kt)("inlineCode",{parentName:"p"},"11159175_0.log")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"/sdcard")," folder.\nYou can try deleting them using a simple wildcard like below or use your own:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"adb -s <emulator-port> shell rm -rf /sdcard/*_*.*\n")),(0,l.kt)("h2",{id:"detox-cli"},"Detox CLI"),(0,l.kt)("p",null,"If you have installed the official CLI wrapper for Detox, then make sure to uninstall it as well:"),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall detox-cli --global\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global remove detox-cli\n")))))}m.isMDXComponent=!0}}]);