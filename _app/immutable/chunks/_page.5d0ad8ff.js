import{S as U,i as X,s as Y,k as R,a as k,q as _,l as C,c as K,m as O,r as h,h as $,n as x,b as m,D as I,u as ee,H as A,o as Q,w as te,ad as ne,T as Z,Q as re,av as se,K as P,y as v,z as g,A as y,L as oe,M as F,g as b,d as W,B as L,N as G}from"./index.0b5cc0d7.js";import{M as ie,P as D}from"./mdsvex-layout-notes.c527e9b3.js";import{S as le}from"./ShowMany.5b53376e.js";import{U as fe}from"./Ul.4059dc64.js";import{L as B}from"./Li.ecd818f1.js";function ae(l){let e,t,n,a,o;return{c(){e=R("input"),t=k(),n=R("div"),a=_("Width: "),o=_(l[0]),this.h()},l(i){e=C(i,"INPUT",{placeholder:!0}),t=K(i),n=C(i,"DIV",{});var f=O(n);a=h(f,"Width: "),o=h(f,l[0]),f.forEach($),this.h()},h(){x(e,"placeholder","Search for...")},m(i,f){m(i,e,f),l[2](e),m(i,t,f),m(i,n,f),I(n,a),I(n,o)},p(i,[f]){f&1&&ee(o,i[0])},i:A,o:A,d(i){i&&$(e),l[2](null),i&&$(t),i&&$(n)}}}function $e(l,e,t){let n=0,a;Q(()=>{t(0,n=window.innerWidth);function i(){t(0,n=window.innerWidth)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}),Q(()=>{function i(f){(f.metaKey||f.ctrlKey)&&f.key.toLowerCase()==="f"&&(a.focus(),f.preventDefault())}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)});function o(i){te[i?"unshift":"push"](()=>{a=i,t(1,a)})}return[n,a,o]}class pe extends U{constructor(e){super(),X(this,e,$e,ae,Y,{})}}const ue=`<script>\r
	import { browser } from "$app/environment";\r
	let innerWidth = 0;\r
	import { onMount } from "svelte";\r
\r
	let searchBar;\r
\r
	onMount(() => {\r
		innerWidth = window.innerWidth;\r
		function onResize() {\r
			innerWidth = window.innerWidth;\r
		}\r
		window.addEventListener("resize", onResize);\r
		return () => window.removeEventListener("resize", onResize);\r
	});\r
\r
	onMount(() => {\r
		function onKeydown(event) {\r
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {\r
				searchBar.focus();\r
				event.preventDefault();\r
			}\r
		}\r
		window.addEventListener("keydown", onKeydown);\r
		return () => window.removeEventListener("keydown", onKeydown);\r
	});\r
<\/script>\r
\r
<input bind:this={searchBar} placeholder="Search for..." />\r
\r
<div>\r
	Width: {innerWidth}\r
</div>\r
\r
<style>\r
</style>\r
`,{window:T}=se;function me(l){let e,t,n,a,o,i,f;return ne(l[3]),{c(){e=R("input"),t=k(),n=R("div"),a=_("Width: "),o=_(l[0]),this.h()},l(p){e=C(p,"INPUT",{placeholder:!0}),t=K(p),n=C(p,"DIV",{});var c=O(n);a=h(c,"Width: "),o=h(c,l[0]),c.forEach($),this.h()},h(){x(e,"placeholder","Search for...")},m(p,c){m(p,e,c),l[4](e),m(p,t,c),m(p,n,c),I(n,a),I(n,o),i||(f=[Z(T,"keydown",l[2]),Z(T,"resize",l[3])],i=!0)},p(p,[c]){c&1&&ee(o,p[0])},i:A,o:A,d(p){p&&$(e),l[4](null),p&&$(t),p&&$(n),i=!1,re(f)}}}function ce(l,e,t){let n=0;n=window.innerWidth;let a;function o(p){(p.metaKey||p.ctrlKey)&&p.key.toLowerCase()==="f"&&(a.focus(),p.preventDefault())}function i(){t(0,n=T.innerWidth)}function f(p){te[p?"unshift":"push"](()=>{a=p,t(1,a)})}return[n,a,o,i,f]}class we extends U{constructor(e){super(),X(this,e,ce,me,Y,{})}}const de=`<script>\r
	import { browser } from "$app/environment";\r
	let innerWidth = 0;\r
	import { onMount } from "svelte";\r
\r
	// for SSR\r
	if (browser) {\r
		innerWidth = window.innerWidth;\r
	}\r
\r
	let searchBar;\r
\r
	function onKeydown(event) {\r
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {\r
			searchBar.focus();\r
			event.preventDefault();\r
		}\r
	}\r
<\/script>\r
\r
<svelte:window on:keydown={onKeydown} bind:innerWidth />\r
\r
<input bind:this={searchBar} placeholder="Search for..." />\r
\r
<div>\r
	Width: {innerWidth}\r
</div>\r
\r
<style>\r
</style>\r
`;function _e(l){let e,t="<",n,a;return{c(){e=_("Another Svelte special element is "),n=_(t),a=_("svelte:window>.")},l(o){e=h(o,"Another Svelte special element is "),n=h(o,t),a=h(o,"svelte:window>.")},m(o,i){m(o,e,i),m(o,n,i),m(o,a,i)},p:A,d(o){o&&$(e),o&&$(n),o&&$(a)}}}function he(l){let e;return{c(){e=_("Here we want to see the width and have it change whenever we resize the window. We also want to focus the search bar whenever we press ctrl+f.")},l(t){e=h(t,"Here we want to see the width and have it change whenever we resize the window. We also want to focus the search bar whenever we press ctrl+f.")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function ve(l){let e;return{c(){e=_("Svelte bindings (bind:) are usually two way bindings but here everything except scrollX and scrollY are readonly so effectively they are one way bindings.")},l(t){e=h(t,"Svelte bindings (bind:) are usually two way bindings but here everything except scrollX and scrollY are readonly so effectively they are one way bindings.")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function ge(l){let e;return{c(){e=_("Here is a list of the properties we can bind to:")},l(t){e=h(t,"Here is a list of the properties we can bind to:")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function ye(l){let e;return{c(){e=_("innerWidth")},l(t){e=h(t,"innerWidth")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function be(l){let e;return{c(){e=_("innerHeight")},l(t){e=h(t,"innerHeight")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function We(l){let e;return{c(){e=_("outerWidth")},l(t){e=h(t,"outerWidth")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function Le(l){let e;return{c(){e=_("outerHeight")},l(t){e=h(t,"outerHeight")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function ke(l){let e;return{c(){e=_("scrollX (not readonly)")},l(t){e=h(t,"scrollX (not readonly)")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function Ke(l){let e;return{c(){e=_("scrollY (not readonly)")},l(t){e=h(t,"scrollY (not readonly)")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function Se(l){let e;return{c(){e=_("online — an alias for window.navigator.onLine")},l(t){e=h(t,"online — an alias for window.navigator.onLine")},m(t,n){m(t,e,n)},d(t){t&&$(e)}}}function ze(l){let e,t,n,a,o,i,f,p,c,S,d,z,s,w;return e=new B({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),n=new B({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),o=new B({props:{$$slots:{default:[We]},$$scope:{ctx:l}}}),f=new B({props:{$$slots:{default:[Le]},$$scope:{ctx:l}}}),c=new B({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),d=new B({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),s=new B({props:{$$slots:{default:[Se]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),t=k(),v(n.$$.fragment),a=k(),v(o.$$.fragment),i=k(),v(f.$$.fragment),p=k(),v(c.$$.fragment),S=k(),v(d.$$.fragment),z=k(),v(s.$$.fragment)},l(r){g(e.$$.fragment,r),t=K(r),g(n.$$.fragment,r),a=K(r),g(o.$$.fragment,r),i=K(r),g(f.$$.fragment,r),p=K(r),g(c.$$.fragment,r),S=K(r),g(d.$$.fragment,r),z=K(r),g(s.$$.fragment,r)},m(r,u){y(e,r,u),m(r,t,u),y(n,r,u),m(r,a,u),y(o,r,u),m(r,i,u),y(f,r,u),m(r,p,u),y(c,r,u),m(r,S,u),y(d,r,u),m(r,z,u),y(s,r,u),w=!0},p(r,u){const E={};u&2&&(E.$$scope={dirty:u,ctx:r}),e.$set(E);const H={};u&2&&(H.$$scope={dirty:u,ctx:r}),n.$set(H);const M={};u&2&&(M.$$scope={dirty:u,ctx:r}),o.$set(M);const N={};u&2&&(N.$$scope={dirty:u,ctx:r}),f.$set(N);const q={};u&2&&(q.$$scope={dirty:u,ctx:r}),c.$set(q);const V={};u&2&&(V.$$scope={dirty:u,ctx:r}),d.$set(V);const j={};u&2&&(j.$$scope={dirty:u,ctx:r}),s.$set(j)},i(r){w||(b(e.$$.fragment,r),b(n.$$.fragment,r),b(o.$$.fragment,r),b(f.$$.fragment,r),b(c.$$.fragment,r),b(d.$$.fragment,r),b(s.$$.fragment,r),w=!0)},o(r){W(e.$$.fragment,r),W(n.$$.fragment,r),W(o.$$.fragment,r),W(f.$$.fragment,r),W(c.$$.fragment,r),W(d.$$.fragment,r),W(s.$$.fragment,r),w=!1},d(r){L(e,r),r&&$(t),L(n,r),r&&$(a),L(o,r),r&&$(i),L(f,r),r&&$(p),L(c,r),r&&$(S),L(d,r),r&&$(z),L(s,r)}}}function Be(l){let e,t,n,a,o,i,f,p,c,S,d,z;return e=new D({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),n=new D({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),o=new le({props:{name:[{name:"App",comp:pe,raw:ue,text:"Here it is normally without using svelte:window. Let's try to rewrite it using svelte:window>."},{name:"App2",comp:we,raw:de,text:"By using svelte:window we can bind to the innerWidth variable and remove that function. We can also remove the onMount lifecycle functions and instead put the event handlers on the svelte:window element itself."}]}}),f=new D({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),c=new D({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),d=new fe({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),t=k(),v(n.$$.fragment),a=k(),v(o.$$.fragment),i=k(),v(f.$$.fragment),p=k(),v(c.$$.fragment),S=k(),v(d.$$.fragment)},l(s){g(e.$$.fragment,s),t=K(s),g(n.$$.fragment,s),a=K(s),g(o.$$.fragment,s),i=K(s),g(f.$$.fragment,s),p=K(s),g(c.$$.fragment,s),S=K(s),g(d.$$.fragment,s)},m(s,w){y(e,s,w),m(s,t,w),y(n,s,w),m(s,a,w),y(o,s,w),m(s,i,w),y(f,s,w),m(s,p,w),y(c,s,w),m(s,S,w),y(d,s,w),z=!0},p(s,w){const r={};w&2&&(r.$$scope={dirty:w,ctx:s}),e.$set(r);const u={};w&2&&(u.$$scope={dirty:w,ctx:s}),n.$set(u);const E={};w&2&&(E.$$scope={dirty:w,ctx:s}),f.$set(E);const H={};w&2&&(H.$$scope={dirty:w,ctx:s}),c.$set(H);const M={};w&2&&(M.$$scope={dirty:w,ctx:s}),d.$set(M)},i(s){z||(b(e.$$.fragment,s),b(n.$$.fragment,s),b(o.$$.fragment,s),b(f.$$.fragment,s),b(c.$$.fragment,s),b(d.$$.fragment,s),z=!0)},o(s){W(e.$$.fragment,s),W(n.$$.fragment,s),W(o.$$.fragment,s),W(f.$$.fragment,s),W(c.$$.fragment,s),W(d.$$.fragment,s),z=!1},d(s){L(e,s),s&&$(t),L(n,s),s&&$(a),L(o,s),s&&$(i),L(f,s),s&&$(p),L(c,s),s&&$(S),L(d,s)}}}function Ee(l){let e,t;const n=[l[0],J];let a={$$slots:{default:[Be]},$$scope:{ctx:l}};for(let o=0;o<n.length;o+=1)a=P(a,n[o]);return e=new ie({props:a}),{c(){v(e.$$.fragment)},l(o){g(e.$$.fragment,o)},m(o,i){y(e,o,i),t=!0},p(o,[i]){const f=i&1?oe(n,[i&1&&F(o[0]),i&0&&F(J)]):{};i&2&&(f.$$scope={dirty:i,ctx:o}),e.$set(f)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){W(e.$$.fragment,o),t=!1},d(o){L(e,o)}}}const J={title:"<svelte:window>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-28T00:00:00.000Z",layout:"notes"};function He(l,e,t){return l.$$set=n=>{t(0,e=P(P({},e),G(n)))},e=G(e),[e]}class Ie extends U{constructor(e){super(),X(this,e,He,Ee,Y,{})}}export{Ie as default,J as metadata};
