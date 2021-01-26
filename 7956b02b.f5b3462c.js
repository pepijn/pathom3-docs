(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(95)),s={title:"Async"},c={unversionedId:"async",id:"async",isDocsHomePage:!1,title:"Async",description:"Async process allows Pathom to process resolvers that require async processing.",source:"@site/docs/async.mdx",slug:"/async",permalink:"/docs/async",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/async.mdx",version:"current",sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/plugins"},next:{title:"Debugging",permalink:"/docs/debugging"}},i=[{value:"Promesa",id:"promesa",children:[]},{value:"Async resolvers",id:"async-resolvers",children:[]},{value:"Async EQL",id:"async-eql",children:[]},{value:"Using core.async",id:"using-coreasync",children:[]}],p={rightToc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Async process allows Pathom to process resolvers that require async processing."),Object(o.b)("p",null,"In JS environments are limited without async support, you can't trigger HTTP or database\nrequests."),Object(o.b)("p",null,"In this section, you will learn how to use the async features from Pathom 3."),Object(o.b)("h2",{id:"promesa"},"Promesa"),Object(o.b)("p",null,"Pathom 3 uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/funcool/promesa"}),"Promesa")," library under the hood to manage the async process."),Object(o.b)("p",null,"Promesa uses native ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promises"),"\nin Javascript environments, and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/CompletableFuture.html"}),"CompletableFuture"),"\non the JVM."),Object(o.b)("p",null,"I'll use the term ",Object(o.b)("inlineCode",{parentName:"p"},"future")," to refer to both ",Object(o.b)("inlineCode",{parentName:"p"},"Promises")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CompletableFuture")," in the\nrest of this page."),Object(o.b)("h2",{id:"async-resolvers"},"Async resolvers"),Object(o.b)("p",null,"Async resolvers are not unique. They use the same constructs as the other resolvers\nyou know so far."),Object(o.b)("p",null,"The difference when you write an async resolver is that it may return a ",Object(o.b)("inlineCode",{parentName:"p"},"future")," from\nthe resolver, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.async\n  (:require [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [promesa.core :as p]))\n\n(defn json-get [url]\n  (p/let [resp (js/fetch url)\n          json (.json resp)]\n    (js->clj json :keywordize-keys true)))\n\n(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n    {::age age}))\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"future")," must be around the return map in the resolver. Returning futures as\nvalues for the keys won't work. This is a bad example:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  ; return map\n  {::age\n   ; with key value as a promise, won\'t work\n   (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n     age)})\n')))),Object(o.b)("h2",{id:"async-eql"},"Async EQL"),Object(o.b)("p",null,"To async, there is only the EQL interface. It behaves similar to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/eql"}),"EQL"),"\nstandard interface, but returns a promise in the end."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-clojure",metastring:"{4,17-19,22-25}","{4,17-19,22-25}":!0}),'(ns com.wsscode.pathom3.docs.demos.core.async\n  (:require [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [com.wsscode.pathom3.interface.async.eql :as p.a.eql]\n            [promesa.core :as p]))\n\n(defn json-get [url]\n  (p/let [resp (js/fetch url)\n          json (.json resp)]\n    (js->clj json :keywordize-keys true)))\n\n(pco/defresolver age-from-name [{::keys [first-name]}]\n  {::pco/output [::age]}\n  (p/let [{:keys [age]} (json-get (str "https://api.agify.io/?name=" first-name))]\n    {::age age}))\n\n(def env\n  (pci/register\n    age-from-name))\n\n(comment\n  (p/let [res (p.a.eql/process env\n                {::first-name "Ada"}\n                [::age])]\n    (cljs.pprint/pprint res)))\n')),Object(o.b)("h2",{id:"using-coreasync"},"Using core.async"),Object(o.b)("p",null,"To use core.async we can extend the channel protocol to implement the conversion from\na core.async channel to a future."),Object(o.b)("p",null,"I have made a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wilkerlucio/promesa-bridges"}),"library")," to share the implementation of this extension, this way we can\navoid issues when multiple people try to extend the same type."),Object(o.b)("p",null,"First add promesa-bridges to your dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-clojure"}),'{:deps {com.wsscode/promesa-bridges {:mvn/version "2021.01.20"}}}\n')),Object(o.b)("p",null,"Then include and use it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.async-extend-core-async\n  (:require\n    [clojure.core.async :as async :refer [go <!]]\n    [com.wsscode.promesa.bridges.core-async]\n    [com.wsscode.pathom3.connect.indexes :as pci]\n    [com.wsscode.pathom3.connect.operation :as pco]\n    [com.wsscode.pathom3.interface.async.eql :as p.a.eql]\n    [promesa.core :as p]))\n\n(pco/defresolver slow-resolver []\n  {::pco/output [::slow-response]}\n  ; returning a channel from resolver\n  (go\n    (<! (async/timeout 400))\n    {::slow-response "done"}))\n\n(def env (pci/register slow-resolver))\n\n(comment\n  (p/let [res (p.a.eql/process env [::slow-response])]\n    (cljs.pprint/pprint res)))\n')),Object(o.b)("p",null,"If you like to add more extensions to ",Object(o.b)("inlineCode",{parentName:"p"},"promesa-bridges"),", please send a pull request."))}l.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||o;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);