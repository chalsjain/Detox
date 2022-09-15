"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Artifacts",s={unversionedId:"Troubleshooting.Artifacts",id:"Troubleshooting.Artifacts",title:"Artifacts",description:"Video Recording Issues on CI",source:"@site/../docs/Troubleshooting.Artifacts.md",sourceDirName:".",slug:"/Troubleshooting.Artifacts",permalink:"/Detox/docs/next/Troubleshooting.Artifacts",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Troubleshooting.Artifacts.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Video Recording Issues on CI",id:"video-recording-issues-on-ci",level:2},{value:"Detox Instruments is Installed in a Custom Location",id:"detox-instruments-is-installed-in-a-custom-location",level:2},{value:"<code>Ctrl+C</code> Does Not Clean Up Temporary Files",id:"ctrlc-does-not-clean-up-temporary-files",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"artifacts"},"Artifacts"),(0,o.kt)("h2",{id:"video-recording-issues-on-ci"},"Video Recording Issues on CI"),(0,o.kt)("p",null,"For iOS, you might be getting errors on CI similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'Error: Error Domain=NSPOSIXErrorDomain Code=22 "Invalid argument" UserInfo={NSLocalizedDescription=Video recording requires hardware Metal capability.}.\n')),(0,o.kt)("p",null,"Unfortunately, this error is beyond our reach. To fix it, you have to enable hardware acceleration on your build machine, or just disable video recording on CI if it is not possible to turn on the acceleration."),(0,o.kt)("p",null,"There might be a similar issue on Android when the screen recording process exits with an error on CI. While the solution might be identical to the one above, also you might try to experiment with other emulator devices and Android OS versions to see if it helps."),(0,o.kt)("h2",{id:"detox-instruments-is-installed-in-a-custom-location"},"Detox Instruments is Installed in a Custom Location"),(0,o.kt)("p",null,"If you have to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments"},"Detox Instruments")," installed in a custom location, you can point Detox to it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"DETOX_INSTRUMENTS_PATH")," environment variable, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DETOX_INSTRUMENTS_PATH="/path/to/Detox Instruments.app" detox test ...\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If ",(0,o.kt)("strong",{parentName:"p"},"Detox Instruments")," had been ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments/blob/master/Documentation/XcodeIntegrationGuide.md"},"integrated into your project"),", then the integrated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments/tree/master/Profiler"},"Detox Profiler framework")," will be used when profiling with Detox.")),(0,o.kt)("h2",{id:"ctrlc-does-not-clean-up-temporary-files"},(0,o.kt)("inlineCode",{parentName:"h2"},"Ctrl+C")," Does Not Clean Up Temporary Files"),(0,o.kt)("p",null,"This is a known issue. :man","_","shrugging:\nAfter you press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and stop the tests, some of temporary files won\u2019t get erased (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/sdcard/83541_0.mp4")," on Android emulator, or ",(0,o.kt)("inlineCode",{parentName:"p"},"/private/var/folders/lm/thz8hdxs4v3fppjh0fjc2twhfl_3x2/T/f12a4fcb-0d1f-4d98-866c-e7cea4942ade.png")," on your Mac).\nIt cannot be solved on behalf of Detox itself, because the problem has to do with how Jest runner terminates its puppet processes.\nThe issue is on our radar, but the ETA for the fix stays unknown.\nIf you feel able to contribute the fix to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"Jest"),", you are very welcome."))}p.isMDXComponent=!0}}]);