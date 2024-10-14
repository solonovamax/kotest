"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[93985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,m=g["".concat(i,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"ranges",title:"Range Matchers",slug:"range-matchers.html",sidebar_label:"Ranges"},s=void 0,l={unversionedId:"assertions/ranges",id:"assertions/ranges",title:"Range Matchers",description:"This page describes the rich assertions (matchers) that are available for ClosedRange and OpenEndRange types.",source:"@site/docs/assertions/ranges.md",sourceDirName:"assertions",slug:"/assertions/range-matchers.html",permalink:"/docs/next/assertions/range-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/ranges.md",tags:[],version:"current",frontMatter:{id:"ranges",title:"Range Matchers",slug:"range-matchers.html",sidebar_label:"Ranges"},sidebar:"assertions",previous:{title:"Jsoup",permalink:"/docs/next/assertions/jsoup-matchers.html"}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page describes the rich assertions (matchers) that are available for ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ranges.html"},"ClosedRange")," and ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ranges.html"},"OpenEndRange")," types."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ranges"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"value.shouldBeIn(range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Asserts that an object is contained in range, checking by value and not by reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"value.shouldNotBeIn(range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Asserts that an object is not contained in range, checking by value and not by reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"range.shouldIntersect(range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Asserts that a range intersects with another range. Both ranges can be either ",(0,a.kt)("inlineCode",{parentName:"td"},"ClosedRange")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"OpenEndRange"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"range.shouldNotIntersect(range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Asserts that a range does not intersect with another range. Both ranges can be either ",(0,a.kt)("inlineCode",{parentName:"td"},"ClosedRange")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"OpenEndRange"),".")))))}d.isMDXComponent=!0}}]);