import{s as J,f as j,a as b,g as H,h as S,d as a,c as y,u as Y,k as h,j as G,i as u,ae as T,X,z as R,H as ee,C as q,D as Z,l as w,m as _}from"./scheduler.a7cd560e.js";import{S as K,i as Q,b as V,d as x,m as I,a as k,t as E,e as A}from"./index.396264e7.js";import{g as te,a as B}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as ne,P as D}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as re}from"./ShowMany.db7be1f3.js";import{b as oe}from"./paths.bd29c1ba.js";import{S as W}from"./Strong.097578ae.js";let P;function se(){P||(P=new IntersectionObserver(i=>{i.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function U(i){return se(),P.observe(i),{destroy(){P.unobserve(i)}}}function ie(i){const e=U(i);i.addEventListener("enterViewport",t);function t(){i.src=i.dataset.src,i.removeEventListener("enterViewport",t)}return{destroy(){e.destroy(),i.removeEventListener("enterViewport",t)}}}function ae(i){let e,t,s,c,n,l,o,$,m,z="Hello world!",g,v,r,f,L,O,M,C;return{c(){e=j("div"),t=b(),s=j("div"),c=b(),n=j("div"),l=b(),o=j("img"),$=b(),m=j("h1"),m.textContent=z,g=b(),v=j("div"),r=b(),f=j("div"),L=b(),O=j("div"),this.h()},l(p){e=H(p,"DIV",{style:!0}),S(e).forEach(a),t=y(p),s=H(p,"DIV",{style:!0}),S(s).forEach(a),c=y(p),n=H(p,"DIV",{style:!0}),S(n).forEach(a),l=y(p),o=H(p,"IMG",{"data-src":!0,alt:!0}),$=y(p),m=H(p,"H1",{["data-svelte-h"]:!0}),Y(m)!=="svelte-14hf1c"&&(m.textContent=z),g=y(p),v=H(p,"DIV",{style:!0}),S(v).forEach(a),r=y(p),f=H(p,"DIV",{style:!0}),S(f).forEach(a),L=y(p),O=H(p,"DIV",{style:!0}),S(O).forEach(a),this.h()},h(){h(e,"height","200px"),h(e,"background","red"),h(s,"height","200px"),h(s,"background","blue"),h(n,"height","200px"),h(n,"background","green"),G(o,"data-src",oe+"/Henrik.png"),G(o,"alt","lazy image demo"),h(v,"height","200px"),h(v,"background","red"),h(f,"height","200px"),h(f,"background","blue"),h(O,"height","200px"),h(O,"background","green")},m(p,d){u(p,e,d),u(p,t,d),u(p,s,d),u(p,c,d),u(p,n,d),u(p,l,d),u(p,o,d),u(p,$,d),u(p,m,d),u(p,g,d),u(p,v,d),u(p,r,d),u(p,f,d),u(p,L,d),u(p,O,d),M||(C=[T(ie.call(null,o)),T(U.call(null,m)),X(m,"enterViewport",i[0]),X(m,"exitViewport",i[1])],M=!0)},p:R,i:R,o:R,d(p){p&&(a(e),a(t),a(s),a(c),a(n),a(l),a(o),a($),a(m),a(g),a(v),a(r),a(f),a(L),a(O)),M=!1,ee(C)}}}function le(i){return[()=>console.log("entered viewport"),()=>console.log("exited viewport")]}class N extends K{constructor(e){super(),Q(this,e,le,ae,J,{})}}const pe=`<script>\r
	import viewport from "./useViewportAction";\r
	import lazyImage from "./lazyImageAction";\r
	import { base } from "$app/paths";\r
<\/script>\r
\r
<div style="height: 200px; background: red;" />\r
<div style="height: 200px; background: blue;" />\r
<div style="height: 200px; background: green;" />\r
\r
<img use:lazyImage data-src="{base}/Henrik.png" alt="lazy image demo" />\r
<h1\r
	use:viewport\r
	on:enterViewport={() => console.log("entered viewport")}\r
	on:exitViewport={() => console.log("exited viewport")}>\r
	Hello world!\r
</h1>\r
\r
<div style="height: 200px; background: red;" />\r
<div style="height: 200px; background: blue;" />\r
<div style="height: 200px; background: green;" />\r
\r
<style>\r
</style>\r
`,ue=`let intersectionObserver;\r
\r
function ensureIntersectionObserver() {\r
	if (intersectionObserver) return;\r
\r
	intersectionObserver = new IntersectionObserver((entries) => {\r
		entries.forEach((entry) => {\r
			const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";\r
			entry.target.dispatchEvent(new CustomEvent(eventName));\r
		});\r
	});\r
}\r
export default function viewport(element) {\r
	ensureIntersectionObserver();\r
	intersectionObserver.observe(element);\r
	return {\r
		destroy() {\r
			intersectionObserver.unobserve(element);\r
		},\r
	};\r
}\r
`,ce=`import viewport from "./useViewportAction";\r
\r
export default function lazyImage(element) {\r
	const viewportActionMethods = viewport(element);\r
	element.addEventListener("enterViewport", enterViewport);\r
\r
	function enterViewport() {\r
		element.src = element.dataset.src;\r
		element.removeEventListener("enterViewport", enterViewport);\r
	}\r
\r
	return {\r
		// if we wanted to have update\r
		// update(newParams) {\r
		// 	viewportActionMethods.update(newParams);\r
		// },\r
		destroy() {\r
			viewportActionMethods.destroy();\r
			element.removeEventListener("enterViewport", enterViewport);\r
		},\r
	};\r
}\r
`;function fe(i){let e;return{c(){e=w("reuse the use:viewport action")},l(t){e=_(t,"reuse the use:viewport action")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function me(i){let e,t,s,c;return t=new W({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){e=w("Here we're going to use an action to only load an image when it's in the viewport. We could try to "),V(t.$$.fragment),s=w(", but it's in a .js file instead of a .svelte file.")},l(n){e=_(n,"Here we're going to use an action to only load an image when it's in the viewport. We could try to "),x(t.$$.fragment,n),s=_(n,", but it's in a .js file instead of a .svelte file.")},m(n,l){u(n,e,l),I(t,n,l),u(n,s,l),c=!0},p(n,l){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){c||(k(t.$$.fragment,n),c=!0)},o(n){E(t.$$.fragment,n),c=!1},d(n){n&&(a(e),a(s)),A(t,n)}}}function $e(i){let e;return{c(){e=w("Let's try to make it work.")},l(t){e=_(t,"Let's try to make it work.")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function de(i){let e;return{c(){e=w("run the function")},l(t){e=_(t,"run the function")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function ge(i){let e,t,s,c;return t=new W({props:{$$slots:{default:[de]},$$scope:{ctx:i}}}),{c(){e=w("If we want to use an action in a .js file we can just simply "),V(t.$$.fragment),s=w(" (here with a variable reference to it as well).")},l(n){e=_(n,"If we want to use an action in a .js file we can just simply "),x(t.$$.fragment,n),s=_(n," (here with a variable reference to it as well).")},m(n,l){u(n,e,l),I(t,n,l),u(n,s,l),c=!0},p(n,l){const o={};l&2&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){c||(k(t.$$.fragment,n),c=!0)},o(n){E(t.$$.fragment,n),c=!1},d(n){n&&(a(e),a(s)),A(t,n)}}}function we(i){let e;return{c(){e=w("Since we could reuse our old action it was very easy. We simply import our old action and add new event listeners for the events created in the old action.")},l(t){e=_(t,"Since we could reuse our old action it was very easy. We simply import our old action and add new event listeners for the events created in the old action.")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function _e(i){let e;return{c(){e=w("data-src")},l(t){e=_(t,"data-src")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function ve(i){let e;return{c(){e=w("src")},l(t){e=_(t,"src")},m(t,s){u(t,e,s)},d(t){t&&a(e)}}}function he(i){let e,t,s,c,n,l;return t=new W({props:{$$slots:{default:[_e]},$$scope:{ctx:i}}}),c=new W({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),{c(){e=w("We put a "),V(t.$$.fragment),s=w(" attribute in the img tag instead of a "),V(c.$$.fragment),n=w(" one to prevent it from loading when the page loads.")},l(o){e=_(o,"We put a "),x(t.$$.fragment,o),s=_(o," attribute in the img tag instead of a "),x(c.$$.fragment,o),n=_(o," one to prevent it from loading when the page loads.")},m(o,$){u(o,e,$),I(t,o,$),u(o,s,$),I(c,o,$),u(o,n,$),l=!0},p(o,$){const m={};$&2&&(m.$$scope={dirty:$,ctx:o}),t.$set(m);const z={};$&2&&(z.$$scope={dirty:$,ctx:o}),c.$set(z)},i(o){l||(k(t.$$.fragment,o),k(c.$$.fragment,o),l=!0)},o(o){E(t.$$.fragment,o),E(c.$$.fragment,o),l=!1},d(o){o&&(a(e),a(s),a(n)),A(t,o),A(c,o)}}}function be(i){let e,t,s,c,n,l,o,$,m,z,g,v;return e=new D({props:{$$slots:{default:[me]},$$scope:{ctx:i}}}),s=new D({props:{$$slots:{default:[$e]},$$scope:{ctx:i}}}),n=new re({props:{name:[{name:"App",comp:N,raw:pe,text:""},{name:"lazyImageActionRaw.js",comp:N,raw:ce,text:""},{name:"useViewportAction.js",comp:N,raw:ue,text:""}]}}),o=new D({props:{$$slots:{default:[ge]},$$scope:{ctx:i}}}),m=new D({props:{$$slots:{default:[we]},$$scope:{ctx:i}}}),g=new D({props:{$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment),t=b(),V(s.$$.fragment),c=b(),V(n.$$.fragment),l=b(),V(o.$$.fragment),$=b(),V(m.$$.fragment),z=b(),V(g.$$.fragment)},l(r){x(e.$$.fragment,r),t=y(r),x(s.$$.fragment,r),c=y(r),x(n.$$.fragment,r),l=y(r),x(o.$$.fragment,r),$=y(r),x(m.$$.fragment,r),z=y(r),x(g.$$.fragment,r)},m(r,f){I(e,r,f),u(r,t,f),I(s,r,f),u(r,c,f),I(n,r,f),u(r,l,f),I(o,r,f),u(r,$,f),I(m,r,f),u(r,z,f),I(g,r,f),v=!0},p(r,f){const L={};f&2&&(L.$$scope={dirty:f,ctx:r}),e.$set(L);const O={};f&2&&(O.$$scope={dirty:f,ctx:r}),s.$set(O);const M={};f&2&&(M.$$scope={dirty:f,ctx:r}),o.$set(M);const C={};f&2&&(C.$$scope={dirty:f,ctx:r}),m.$set(C);const p={};f&2&&(p.$$scope={dirty:f,ctx:r}),g.$set(p)},i(r){v||(k(e.$$.fragment,r),k(s.$$.fragment,r),k(n.$$.fragment,r),k(o.$$.fragment,r),k(m.$$.fragment,r),k(g.$$.fragment,r),v=!0)},o(r){E(e.$$.fragment,r),E(s.$$.fragment,r),E(n.$$.fragment,r),E(o.$$.fragment,r),E(m.$$.fragment,r),E(g.$$.fragment,r),v=!1},d(r){r&&(a(t),a(c),a(l),a($),a(z)),A(e,r),A(s,r),A(n,r),A(o,r),A(m,r),A(g,r)}}}function ye(i){let e,t;const s=[i[0],F];let c={$$slots:{default:[be]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)c=q(c,s[n]);return e=new ne({props:c}),{c(){V(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,l){I(e,n,l),t=!0},p(n,[l]){const o=l&1?te(s,[l&1&&B(n[0]),l&0&&B(F)]):{};l&2&&(o.$$scope={dirty:l,ctx:n}),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}const F={title:"use:lazyImage",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function Ve(i,e,t){return i.$$set=s=>{t(0,e=q(q({},e),Z(s)))},e=Z(e),[e]}class je extends K{constructor(e){super(),Q(this,e,Ve,ye,J,{})}}export{je as default,F as metadata};
