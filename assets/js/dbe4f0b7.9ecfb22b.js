"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8877],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,d=p["".concat(u,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={},i="Cucumber.js Integration",s={unversionedId:"guide/cucumber-js-integration",id:"version-20.x/guide/cucumber-js-integration",title:"Cucumber.js Integration",description:"This is an article generously contributed by the community.",source:"@site/versioned_docs/version-20.x/guide/cucumber-js-integration.md",sourceDirName:"guide",slug:"/guide/cucumber-js-integration",permalink:"/Detox/docs/guide/cucumber-js-integration",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/guide/cucumber-js-integration.md",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProGuard configuration",permalink:"/Detox/docs/guide/proguard-configuration"},next:{title:"Uninstalling Detox",permalink:"/Detox/docs/guide/uninstalling"}},u={},l=[],c={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cucumberjs-integration"},"Cucumber.js Integration"),(0,a.yg)("admonition",{title:"Community resource",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This is an article generously contributed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wix/Detox/pull/3858"},"by the community"),".\nFeel free to ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/contributing"},"contribute to it")," by submitting a pull request\nif you find any errors or have suggestions for improvements.\nIf you have any questions, please get in touch with the author directly.")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber")," is a tool for running automated tests written in plain language.\nIt can be integrated with Detox to run end-to-end tests for mobile applications\nif you manage ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/api/internals"},"Detox Internals API")," from ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md"},"Cucumber.js hooks"),"."),(0,a.yg)("p",null,"In your ",(0,a.yg)("inlineCode",{parentName:"p"},"init.js")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"init.ts")," file, please import ",(0,a.yg)("inlineCode",{parentName:"p"},"detox/internals")," on top of the file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import detox from 'detox/internals'\n")),(0,a.yg)("p",null,"Also import the hooks we'll be using just a bit later:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { Before, BeforeAll, AfterAll, After,  ITestCaseHookParameter } from '@cucumber/cucumber'\n")),(0,a.yg)("p",null,"Define the earliest ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js#documentation"},"Cucumber.js")," hook, ",(0,a.yg)("inlineCode",{parentName:"p"},"BeforeAll"),", where you\u2019ll ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/api/internals#initoptions-promise"},"initialize")," Detox and launch the app:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"BeforeAll({ timeout: 120 * 1000 }, async () => {\n    await detox.init()\n    await device.launchApp()\n})\n")),(0,a.yg)("p",null,"You must also tell Detox explicitly when ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js#documentation"},"Cucumber.js")," starts a test via calling ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/api/internals#onteststartevent-promise"},(0,a.yg)("inlineCode",{parentName:"a"},"detox.onTestStart()"))," inside ",(0,a.yg)("inlineCode",{parentName:"p"},"Before")," hook.\nOtherwise, Detox won't be able to ",(0,a.yg)("em",{parentName:"p"},"start recording")," logs, screenshots, videos, and other artifacts:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"Before(async (message: ITestCaseHookParameter) => {\n    const { pickle } = message\n    await detox.onTestStart({\n        title: pickle.uri,\n        fullName: pickle.name,\n        status: 'running',\n    })\n})\n")),(0,a.yg)("p",null,"The symmetrical step is to inform Detox that the current test is over via calling ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/api/internals#ontestdoneevent-promise"},(0,a.yg)("inlineCode",{parentName:"a"},"detox.onTestDone()"))," inside ",(0,a.yg)("inlineCode",{parentName:"p"},"After")," hook.\nOtherwise, Detox won't be able to ",(0,a.yg)("em",{parentName:"p"},"save")," logs, screenshots, videos, and other artifacts:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"After(async (message: ITestCaseHookParameter) => {\n    const { pickle, result } = message\n    await detox.onTestDone({\n        title: pickle.uri,\n        fullName: pickle.name,\n        status: result ? 'passed' : 'failed',\n    })\n})\n")),(0,a.yg)("p",null,"After the tests are over, you should call ",(0,a.yg)("a",{parentName:"p",href:"/Detox/docs/api/internals#cleanup-promise"},(0,a.yg)("inlineCode",{parentName:"a"},"detox.cleanup()"))," inside ",(0,a.yg)("inlineCode",{parentName:"p"},"AfterAll")," hook so that Detox can clean up all the resources it has allocated:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"AfterAll(async () => {\n    await detox.cleanup();\n})\n")),(0,a.yg)("p",null,"For more information on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js#documentation"},"Cucumber.js")," please check out this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js#documentation"},"documentation"),"."))}m.isMDXComponent=!0}}]);