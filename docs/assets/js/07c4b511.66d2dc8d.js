"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[76696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"until",title:"Until",slug:"until.html"},a=void 0,s={unversionedId:"assertions/until",id:"version-5.7/assertions/until",title:"Until",description:'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".',source:"@site/versioned_docs/version-5.7/assertions/until.md",sourceDirName:"assertions",slug:"/assertions/until.html",permalink:"/docs/5.7/assertions/until.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/assertions/until.md",tags:[],version:"5.7",frontMatter:{id:"until",title:"Until",slug:"until.html"},sidebar:"framework",previous:{title:"Continually",permalink:"/docs/5.7/assertions/continually.html"},next:{title:"Retry",permalink:"/docs/5.7/assertions/retry.html"}},l={},c=[{value:"Duration",id:"duration",level:3},{value:"Interval",id:"interval",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".'),(0,i.kt)("p",null,"For example, you might want to test that a message has been received by a broker. You could setup a time limit,\nand repeatedly poll until the message was received, but this would block the thread. Plus you would have to write\nthe loop code, adding boilerplate."),(0,i.kt)("p",null,"As an alternative, kotest provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"until")," function which will periodically execute a function until either that\nfunction returns true, or the given duration expires."),(0,i.kt)("p",null,"Until is the predicate equivalent of ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.7/assertions/eventually.html"},"eventually"),"."),(0,i.kt)("h3",{id:"duration"},"Duration"),(0,i.kt)("p",null,"Let's say we have a function that polls a broker, and returns a list of messages. We want to test that when we\nsend a message the message is picked up by the broker within 5 seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n\n  private val broker = createBrokerClient()\n\n  init {\n    should("broker should receive a message") {\n      sendMessage()\n      until(5.seconds) {\n        broker.poll().size > 0\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"interval"},"Interval"),(0,i.kt)("p",null,"By default, the predicate is checked every second. We can specify an interval which controls the delay between invocations.\nHere is the same example again, this time with a more aggressive fixed 250 millisecond interval."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n\n  private val broker = createBrokerClient()\n\n  init {\n    should("broker should receive a message") {\n      sendMessage()\n      until(5.seconds, 250.milliseconds.fixed()) {\n        broker.poll().size > 0\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"We can also specify a fibonacci interval, if we want to increase the delay after each failure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n\n  private val broker = createBrokerClient()\n\n  init {\n    should("broker should receive a message") {\n      sendMessage()\n      until(5.seconds, 100.milliseconds.fibonacci()) {\n        broker.poll().size > 0\n      }\n    }\n  }\n}\n')))}p.isMDXComponent=!0}}]);