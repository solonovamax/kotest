"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"nondeterministic",title:"Non-deterministic Testing",slug:"non-deterministic-testing.html"},o=void 0,s={unversionedId:"assertions/nondeterministic",id:"version-5.4/assertions/nondeterministic",title:"Non-deterministic Testing",description:"Sometimes you have to work with code that is non-deterministic in nature. This is not the preferred scenario for writing",source:"@site/versioned_docs/version-5.4/assertions/nondeterministic_testing.md",sourceDirName:"assertions",slug:"/assertions/non-deterministic-testing.html",permalink:"/docs/5.4/assertions/non-deterministic-testing.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/nondeterministic_testing.md",tags:[],version:"5.4",frontMatter:{id:"nondeterministic",title:"Non-deterministic Testing",slug:"non-deterministic-testing.html"}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes you have to work with code that is non-deterministic in nature. This is not the preferred scenario for writing\ntests, but if you have no choice then Kotest provides several functions that help writing tests where the happy path can take a variable amount of time to\npass successfully."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Role"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/5.4/assertions/eventually.html"},"Eventually")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test will ",(0,i.kt)("em",{parentName:"td"},"eventually")," pass within a specified time duration. The test is repeatedly executed until the test passes or the duration expires.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/5.4/assertions/continually.html"},"Continually")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test ",(0,i.kt)("em",{parentName:"td"},"continually")," passes for a period of time. Will repeatedly execute a test until the duration has expired or the test fails.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/5.4/assertions/until.html"},"Until")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to ensure that a predicate will eventually hold true within a specified time duration. The predicate is repeatedly executed until true or the duration expires.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/5.4/assertions/retry.html"},"Retry")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test willi eventually pass within a given number of retries. The test is repeatedly executed until the test passes or the iteration count is reached.")))))}d.isMDXComponent=!0}}]);