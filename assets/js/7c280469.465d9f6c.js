"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},i="Writing Your First Test",s={unversionedId:"introduction/writing-first-test",id:"introduction/writing-first-test",title:"Writing Your First Test",description:"This article is outdated and it suggests using a deprecated tool.",source:"@site/../docs/introduction/writing-first-test.md",sourceDirName:"introduction",slug:"/introduction/writing-first-test",permalink:"/Detox/docs/next/introduction/writing-first-test",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/introduction/writing-first-test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building with Detox",permalink:"/Detox/docs/next/introduction/introduction/building-with-detox"},next:{title:"Preparing for CI",permalink:"/Detox/docs/next/introduction/preparing-for-ci"}},l={},p=[{value:"Detox Recorder",id:"detox-recorder",level:2},{value:"Step 1: Prepare a JavaScript File to Hold Your Scenario (Spec)",id:"step-1-prepare-a-javascript-file-to-hold-your-scenario-spec",level:2},{value:"Step 2: Decide how to Reset Your App for the Beginning of the Scenario",id:"step-2-decide-how-to-reset-your-app-for-the-beginning-of-the-scenario",level:2},{value:"Step 3: Add <code>testID</code>s to Your App to Assist in Matching Elements",id:"step-3-add-testids-to-your-app-to-assist-in-matching-elements",level:2},{value:"Step 4: Match an Element and Perform an Action",id:"step-4-match-an-element-and-perform-an-action",level:2},{value:"Step 5: Set an Expectation on the Result",id:"step-5-set-an-expectation-on-the-result",level:2},{value:"Step 6: Rinse and Repeat",id:"step-6-rinse-and-repeat",level:2},{value:"Step 7: Run Your Tests and Make Sure They Pass",id:"step-7-run-your-tests-and-make-sure-they-pass",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-your-first-test"},"Writing Your First Test"),(0,r.kt)("admonition",{title:"Disclaimer",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This article is outdated and it suggests using a deprecated tool.\nWe're looking for contributors who could provide a beginner-friendly\nexplanation on how to start writing tests.")),(0,r.kt)("p",null,"This tutorial assumes you\u2019ve already installed Detox successfully on a working React Native project."),(0,r.kt)("h2",{id:"detox-recorder"},"Detox Recorder"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder"),", our tool for recording tests directly from your device."),(0,r.kt)("h2",{id:"step-1-prepare-a-javascript-file-to-hold-your-scenario-spec"},"Step 1: Prepare a JavaScript File to Hold Your Scenario (Spec)"),(0,r.kt)("p",null,"Every Detox test scenario is usually placed in its own JavaScript file. If you\u2019ve followed the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/getting-started"},"installation tutorial"),", these files are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/e2e/*.spec.js")," under your React Native project root. Feel free to place these files wherever you like, this directory structure is just a recommendation."),(0,r.kt)("p",null,"If you\u2019re using Mocha as your test runner, these files will simply be executed one by one when you run your tests."),(0,r.kt)("p",null,"If you\u2019ve followed the installation tutorial, you should already have ",(0,r.kt)("inlineCode",{parentName:"p"},"firstTest.spec.js")," as a placeholder to start from."),(0,r.kt)("h2",{id:"step-2-decide-how-to-reset-your-app-for-the-beginning-of-the-scenario"},"Step 2: Decide how to Reset Your App for the Beginning of the Scenario"),(0,r.kt)("p",null,"In order to start the scenario from a predictable app state and reset the state from any previous scenarios that may have been running, it\u2019s customary to start the scenario by restarting the app."),(0,r.kt)("p",null,"The fastest way to reset is by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"await device.reloadReactNative();"),". This is equivalent to pressing CMD+R in the simulator window - it will just reload the React Native bundle. You can find other alternatives that may be slower but more thorough ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/device"},"here"),"."),(0,r.kt)("p",null,"Our scenario is made from multiple different test cases (",(0,r.kt)("inlineCode",{parentName:"p"},"it()")," clauses). We usually want to reset before each one is running. This can be accomplished by placing the reset logic inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach()")," clause."),(0,r.kt)("h2",{id:"step-3-add-testids-to-your-app-to-assist-in-matching-elements"},"Step 3: Add ",(0,r.kt)("inlineCode",{parentName:"h2"},"testID"),"s to Your App to Assist in Matching Elements"),(0,r.kt)("p",null,"Most test cases start by finding a UI element on screen (",(0,r.kt)("em",{parentName:"p"},"matching"),") and performing some user interaction on it (",(0,r.kt)("em",{parentName:"p"},"action"),"). To assist in finding the correct UI element, it\u2019s recommended to mark it in some way. The best practice is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#testid"},(0,r.kt)("inlineCode",{parentName:"a"},"testID"))," prop for this purpose. This means we\u2019ll modify the app code and add these props to various elements."),(0,r.kt)("p",null,"Note that not all React components support this prop. Most of the built-in native components in React Native like ",(0,r.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Switch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," have support though. If you create your own composite components, you will have to propagate this prop manually to the correct native component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <TouchableOpacity testID='MyUniqueId123'>\n    <Text>Some button</Text>\n  </TouchableOpacity>\n</View>\n")),(0,r.kt)("h2",{id:"step-4-match-an-element-and-perform-an-action"},"Step 4: Match an Element and Perform an Action"),(0,r.kt)("p",null,"Choose a method to match your element, the various alternatives are documented ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/matchers"},"here"),". You will most likely be relying on ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," which means our matching code will look like ",(0,r.kt)("inlineCode",{parentName:"p"},"element(by.id('MyUniqueId123'))"),"."),(0,r.kt)("p",null,"Choose an action to perform on the element, the various alternatives are documented ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/actions"},"here"),". If we have a button, a ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," is probably what you\u2019re looking for, resulting in this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await element(by.id('MyUniqueId123')).tap();\n")),(0,r.kt)("h2",{id:"step-5-set-an-expectation-on-the-result"},"Step 5: Set an Expectation on the Result"),(0,r.kt)("p",null,"After performing the action, the app will most likely do something. The process might also take a little time - for example if we\u2019re logging in, there would be a server request. The great thing about detox is that you\u2019re not supposed to worry about synchronization and how much time actions take. Detox will monitor the app and continue to the next line in your test only when the app completes pending operations and becomes idle."),(0,r.kt)("p",null,"The most natural expectation is to verify that some UI element has eventually appeared on screen as a result. Like before, we\u2019ll need to match this element first. We can keep using ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," for this purpose with ",(0,r.kt)("inlineCode",{parentName:"p"},"element(by.id('AnotherUniqueId456'))"),"."),(0,r.kt)("p",null,"The various available expectations are documented ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/expect"},"here"),". If we want to make sure an element is visible, we\u2019ll get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await expect(element(by.id('AnotherUniqueId456'))).toBeVisible();\n")),(0,r.kt)("p",null,"Note that the visibility matcher makes sure the element is actually visible on screen (at least 75% of it to be exact). If it appears under the fold (e.g. the user has to scroll to see it), this specific matcher will fail."),(0,r.kt)("h2",{id:"step-6-rinse-and-repeat"},"Step 6: Rinse and Repeat"),(0,r.kt)("p",null,"Create more complicated test cases by stringing actions and expectations one after the other. Explore the rest of the API to see what other things you can do in your tests."),(0,r.kt)("p",null,"Add more test cases to your file by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"it()")," clauses. Add new scenarios by adding new ",(0,r.kt)("inlineCode",{parentName:"p"},"*.spec.js")," files."),(0,r.kt)("h2",{id:"step-7-run-your-tests-and-make-sure-they-pass"},"Step 7: Run Your Tests and Make Sure They Pass"),(0,r.kt)("p",null,"This is usually done by running ",(0,r.kt)("inlineCode",{parentName:"p"},"detox test")," in terminal. If your test is failing, and you don\u2019t understand why, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/running-tests"},"troubleshooting tutorial"),"."))}u.isMDXComponent=!0}}]);