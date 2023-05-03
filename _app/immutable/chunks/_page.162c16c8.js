import{S as F,i as J,s as U,k as j,a as y,q as _,l as H,m as M,h as l,c as h,r as v,p as b,n as T,b as p,D as Y,aa as B,T as G,H as R,Q as ee,K as q,y as x,z as I,A as k,L as te,M as K,g as E,d as A,B as z,N as Q}from"./index.0b5cc0d7.js";import{M as ne,P as W}from"./mdsvex-layout-notes.c527e9b3.js";import{S as re}from"./ShowMany.5b53376e.js";import{b as oe}from"./paths.d0c84c02.js";import{S as N}from"./Strong.272c5f79.js";let P;function se(){P||(P=new IntersectionObserver(a=>{a.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function X(a){return se(),P.observe(a),{destroy(){P.unobserve(a)}}}function ie(a){const e=X(a);a.addEventListener("enterViewport",t);function t(){a.src=a.dataset.src,a.removeEventListener("enterViewport",t)}return{destroy(){e.destroy(),a.removeEventListener("enterViewport",t)}}}function ae(a){let e,t,i,u,n,f,o,$,c,V,d,g,r,m,L,O,S,D;return{c(){e=j("div"),t=y(),i=j("div"),u=y(),n=j("div"),f=y(),o=j("img"),$=y(),c=j("h1"),V=_("Hello world!"),d=y(),g=j("div"),r=y(),m=j("div"),L=y(),O=j("div"),this.h()},l(s){e=H(s,"DIV",{style:!0}),M(e).forEach(l),t=h(s),i=H(s,"DIV",{style:!0}),M(i).forEach(l),u=h(s),n=H(s,"DIV",{style:!0}),M(n).forEach(l),f=h(s),o=H(s,"IMG",{"data-src":!0,alt:!0}),$=h(s),c=H(s,"H1",{});var w=M(c);V=v(w,"Hello world!"),w.forEach(l),d=h(s),g=H(s,"DIV",{style:!0}),M(g).forEach(l),r=h(s),m=H(s,"DIV",{style:!0}),M(m).forEach(l),L=h(s),O=H(s,"DIV",{style:!0}),M(O).forEach(l),this.h()},h(){b(e,"height","200px"),b(e,"background","red"),b(i,"height","200px"),b(i,"background","blue"),b(n,"height","200px"),b(n,"background","green"),T(o,"data-src",oe+"/Henrik.png"),T(o,"alt","lazy image demo"),b(g,"height","200px"),b(g,"background","red"),b(m,"height","200px"),b(m,"background","blue"),b(O,"height","200px"),b(O,"background","green")},m(s,w){p(s,e,w),p(s,t,w),p(s,i,w),p(s,u,w),p(s,n,w),p(s,f,w),p(s,o,w),p(s,$,w),p(s,c,w),Y(c,V),p(s,d,w),p(s,g,w),p(s,r,w),p(s,m,w),p(s,L,w),p(s,O,w),S||(D=[B(ie.call(null,o)),B(X.call(null,c)),G(c,"enterViewport",a[0]),G(c,"exitViewport",a[1])],S=!0)},p:R,i:R,o:R,d(s){s&&l(e),s&&l(t),s&&l(i),s&&l(u),s&&l(n),s&&l(f),s&&l(o),s&&l($),s&&l(c),s&&l(d),s&&l(g),s&&l(r),s&&l(m),s&&l(L),s&&l(O),S=!1,ee(D)}}}function le(a){return[()=>console.log("entered viewport"),()=>console.log("exited viewport")]}class C extends F{constructor(e){super(),J(this,e,le,ae,U,{})}}const fe=`<script>\r
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
`,pe=`let intersectionObserver;\r
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
`,ue=`import viewport from "./useViewportAction";\r
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
`;function me(a){let e;return{c(){e=_("reuse the use:viewport action")},l(t){e=v(t,"reuse the use:viewport action")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function ce(a){let e,t,i,u;return t=new N({props:{$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){e=_("Here we're going to use an action to only load an image when it's in the viewport. We could try to "),x(t.$$.fragment),i=_(", but it's in a .js file instead of a .svelte file.")},l(n){e=v(n,"Here we're going to use an action to only load an image when it's in the viewport. We could try to "),I(t.$$.fragment,n),i=v(n,", but it's in a .js file instead of a .svelte file.")},m(n,f){p(n,e,f),k(t,n,f),p(n,i,f),u=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){u||(E(t.$$.fragment,n),u=!0)},o(n){A(t.$$.fragment,n),u=!1},d(n){n&&l(e),z(t,n),n&&l(i)}}}function $e(a){let e;return{c(){e=_("Let's try to make it work.")},l(t){e=v(t,"Let's try to make it work.")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function we(a){let e;return{c(){e=_("run the function")},l(t){e=v(t,"run the function")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function _e(a){let e,t,i,u;return t=new N({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){e=_("If we want to use an action in a .js file we can just simply "),x(t.$$.fragment),i=_(" (here with a variable reference to it as well).")},l(n){e=v(n,"If we want to use an action in a .js file we can just simply "),I(t.$$.fragment,n),i=v(n," (here with a variable reference to it as well).")},m(n,f){p(n,e,f),k(t,n,f),p(n,i,f),u=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){u||(E(t.$$.fragment,n),u=!0)},o(n){A(t.$$.fragment,n),u=!1},d(n){n&&l(e),z(t,n),n&&l(i)}}}function ve(a){let e;return{c(){e=_("Since we could reuse our old action it was very easy. We simply import our old action and add new event listeners for the events created in the old action.")},l(t){e=v(t,"Since we could reuse our old action it was very easy. We simply import our old action and add new event listeners for the events created in the old action.")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function de(a){let e;return{c(){e=_("data-src")},l(t){e=v(t,"data-src")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function ge(a){let e;return{c(){e=_("src")},l(t){e=v(t,"src")},m(t,i){p(t,e,i)},d(t){t&&l(e)}}}function be(a){let e,t,i,u,n,f;return t=new N({props:{$$slots:{default:[de]},$$scope:{ctx:a}}}),u=new N({props:{$$slots:{default:[ge]},$$scope:{ctx:a}}}),{c(){e=_("We put a "),x(t.$$.fragment),i=_(" attribute in the img tag instead of a "),x(u.$$.fragment),n=_(" one to prevent it from loading when the page loads.")},l(o){e=v(o,"We put a "),I(t.$$.fragment,o),i=v(o," attribute in the img tag instead of a "),I(u.$$.fragment,o),n=v(o," one to prevent it from loading when the page loads.")},m(o,$){p(o,e,$),k(t,o,$),p(o,i,$),k(u,o,$),p(o,n,$),f=!0},p(o,$){const c={};$&2&&(c.$$scope={dirty:$,ctx:o}),t.$set(c);const V={};$&2&&(V.$$scope={dirty:$,ctx:o}),u.$set(V)},i(o){f||(E(t.$$.fragment,o),E(u.$$.fragment,o),f=!0)},o(o){A(t.$$.fragment,o),A(u.$$.fragment,o),f=!1},d(o){o&&l(e),z(t,o),o&&l(i),z(u,o),o&&l(n)}}}function ye(a){let e,t,i,u,n,f,o,$,c,V,d,g;return e=new W({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),i=new W({props:{$$slots:{default:[$e]},$$scope:{ctx:a}}}),n=new re({props:{name:[{name:"App",comp:C,raw:fe,text:""},{name:"lazyImageActionRaw.js",comp:C,raw:ue,text:""},{name:"useViewportAction.js",comp:C,raw:pe,text:""}]}}),o=new W({props:{$$slots:{default:[_e]},$$scope:{ctx:a}}}),c=new W({props:{$$slots:{default:[ve]},$$scope:{ctx:a}}}),d=new W({props:{$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){x(e.$$.fragment),t=y(),x(i.$$.fragment),u=y(),x(n.$$.fragment),f=y(),x(o.$$.fragment),$=y(),x(c.$$.fragment),V=y(),x(d.$$.fragment)},l(r){I(e.$$.fragment,r),t=h(r),I(i.$$.fragment,r),u=h(r),I(n.$$.fragment,r),f=h(r),I(o.$$.fragment,r),$=h(r),I(c.$$.fragment,r),V=h(r),I(d.$$.fragment,r)},m(r,m){k(e,r,m),p(r,t,m),k(i,r,m),p(r,u,m),k(n,r,m),p(r,f,m),k(o,r,m),p(r,$,m),k(c,r,m),p(r,V,m),k(d,r,m),g=!0},p(r,m){const L={};m&2&&(L.$$scope={dirty:m,ctx:r}),e.$set(L);const O={};m&2&&(O.$$scope={dirty:m,ctx:r}),i.$set(O);const S={};m&2&&(S.$$scope={dirty:m,ctx:r}),o.$set(S);const D={};m&2&&(D.$$scope={dirty:m,ctx:r}),c.$set(D);const s={};m&2&&(s.$$scope={dirty:m,ctx:r}),d.$set(s)},i(r){g||(E(e.$$.fragment,r),E(i.$$.fragment,r),E(n.$$.fragment,r),E(o.$$.fragment,r),E(c.$$.fragment,r),E(d.$$.fragment,r),g=!0)},o(r){A(e.$$.fragment,r),A(i.$$.fragment,r),A(n.$$.fragment,r),A(o.$$.fragment,r),A(c.$$.fragment,r),A(d.$$.fragment,r),g=!1},d(r){z(e,r),r&&l(t),z(i,r),r&&l(u),z(n,r),r&&l(f),z(o,r),r&&l($),z(c,r),r&&l(V),z(d,r)}}}function he(a){let e,t;const i=[a[0],Z];let u={$$slots:{default:[ye]},$$scope:{ctx:a}};for(let n=0;n<i.length;n+=1)u=q(u,i[n]);return e=new ne({props:u}),{c(){x(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,f){k(e,n,f),t=!0},p(n,[f]){const o=f&1?te(i,[f&1&&K(n[0]),f&0&&K(Z)]):{};f&2&&(o.$$scope={dirty:f,ctx:n}),e.$set(o)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){A(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}const Z={title:"use:lazyImage",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function Ve(a,e,t){return a.$$set=i=>{t(0,e=q(q({},e),Q(i)))},e=Q(e),[e]}class ze extends F{constructor(e){super(),J(this,e,Ve,he,U,{})}}export{ze as default,Z as metadata};
