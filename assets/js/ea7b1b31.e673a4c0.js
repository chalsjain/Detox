"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7367],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=g(n),p=i,f=c["".concat(l,".").concat(p)]||c[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var g=2;g<o;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=n(58168),i=(n(96540),n(15680));const o={},a="Investigating Failures",s={unversionedId:"guide/investigating-test-failure",id:"version-20.x/guide/investigating-test-failure",title:"Investigating Failures",description:"There are a few tricks and tools that can help you to understand the reason for test failures, even before you resort to debugging.",source:"@site/versioned_docs/version-20.x/guide/investigating-test-failure.mdx",sourceDirName:"guide",slug:"/guide/investigating-test-failure",permalink:"/Detox/docs/guide/investigating-test-failure",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/guide/investigating-test-failure.mdx",tags:[],version:"20.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Preparing for CI",permalink:"/Detox/docs/introduction/preparing-for-ci"},next:{title:"Adding testID to your components",permalink:"/Detox/docs/guide/test-id"}},l={},g=[{value:"Using Detox test artifacts",id:"using-detox-test-artifacts",level:2},{value:"Switch to verbose log levels",id:"switch-to-verbose-log-levels",level:2},{value:"Missing elements",id:"missing-elements",level:2},{value:"More recipes",id:"more-recipes",level:2},{value:"Debugging",id:"debugging",level:2}],u={toc:g},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"investigating-failures"},"Investigating Failures"),(0,i.yg)("p",null,"There are a few tricks and tools that can help you to understand the reason for test failures, even before you resort to debugging."),(0,i.yg)("h2",{id:"using-detox-test-artifacts"},"Using Detox test artifacts"),(0,i.yg)("p",null,"Artifacts are very powerful tool to understand your test failure, you can easily make a screenshot, video or even hierarchy of your app under test,\ne.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"detox test -c <configuration> --take-screenshots failing --record-videos failing\n")),(0,i.yg)("p",null,"Learn more about ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/config/artifacts"},"configuration")," of Detox test artifacts and available ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/cli/test"},"CLI options"),"."),(0,i.yg)("h2",{id:"switch-to-verbose-log-levels"},"Switch to verbose log levels"),(0,i.yg)("p",null,"You can get detailed information about the test execution if you use ",(0,i.yg)("inlineCode",{parentName:"p"},"debug")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"trace")," log level:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"detox test -c <configuration> -l trace\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"In most cases we recommend using ",(0,i.yg)("inlineCode",{parentName:"p"},"debug")," log level to understand the failed test better.")),(0,i.yg)("h2",{id:"missing-elements"},"Missing elements"),(0,i.yg)("p",null,"If your tests are failing due to non-existent or invisible elements, you can ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/guide/test-id#find-your-testid"},"inspect the native view hierarchy")," to understand better the failure reason."),(0,i.yg)("h2",{id:"more-recipes"},"More recipes"),(0,i.yg)("p",null,"See ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/troubleshooting/running-tests"},"Dealing With Problems With Running Tests")," guide for more recipes."),(0,i.yg)("h2",{id:"debugging"},"Debugging"),(0,i.yg)("p",null,"If debugging still seems a viable option, please follow our ",(0,i.yg)("a",{parentName:"p",href:"/Detox/docs/introduction/debugging"},"debugging guide"),"."))}d.isMDXComponent=!0}}]);