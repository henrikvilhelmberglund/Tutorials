import{s as U,f as R,a as k,l as _,g as C,c as K,h as Q,m as h,d as $,j as x,i as u,v as X,n as ee,z as A,o as J,p as te,J as ne,X as Z,H as re,C as I,D as F}from"./scheduler.a7cd560e.js";import{S as Y,i as T,b as v,d as g,m as y,a as b,t as W,e as L}from"./index.396264e7.js";import{g as se,a as G}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as oe,P as D}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as ie}from"./ShowMany.db7be1f3.js";import{g as le}from"./globals.7f7f1b26.js";import{U as ae}from"./Ul.01790c78.js";import{L as E}from"./Li.8eab8712.js";function fe(l){let e,t,n,f,o;return{c(){e=R("input"),t=k(),n=R("div"),f=_("Width: "),o=_(l[0]),this.h()},l(i){e=C(i,"INPUT",{placeholder:!0}),t=K(i),n=C(i,"DIV",{});var a=Q(n);f=h(a,"Width: "),o=h(a,l[0]),a.forEach($),this.h()},h(){x(e,"placeholder","Search for...")},m(i,a){u(i,e,a),l[2](e),u(i,t,a),u(i,n,a),X(n,f),X(n,o)},p(i,[a]){a&1&&ee(o,i[0])},i:A,o:A,d(i){i&&($(e),$(t),$(n)),l[2](null)}}}function $e(l,e,t){let n=0,f;J(()=>{t(0,n=window.innerWidth);function i(){t(0,n=window.innerWidth)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}),J(()=>{function i(a){(a.metaKey||a.ctrlKey)&&a.key.toLowerCase()==="f"&&(f.focus(),a.preventDefault())}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)});function o(i){te[i?"unshift":"push"](()=>{f=i,t(1,f)})}return[n,f,o]}class pe extends Y{constructor(e){super(),T(this,e,$e,fe,U,{})}}const ue=`<script>\r
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
`,{window:P}=le;function me(l){let e,t,n,f,o,i,a;return ne(l[3]),{c(){e=R("input"),t=k(),n=R("div"),f=_("Width: "),o=_(l[0]),this.h()},l(m){e=C(m,"INPUT",{placeholder:!0}),t=K(m),n=C(m,"DIV",{});var c=Q(n);f=h(c,"Width: "),o=h(c,l[0]),c.forEach($),this.h()},h(){x(e,"placeholder","Search for...")},m(m,c){u(m,e,c),l[4](e),u(m,t,c),u(m,n,c),X(n,f),X(n,o),i||(a=[Z(P,"keydown",l[2]),Z(P,"resize",l[3])],i=!0)},p(m,[c]){c&1&&ee(o,m[0])},i:A,o:A,d(m){m&&($(e),$(t),$(n)),l[4](null),i=!1,re(a)}}}function ce(l,e,t){let n=0;n=window.innerWidth;let f;function o(m){(m.metaKey||m.ctrlKey)&&m.key.toLowerCase()==="f"&&(f.focus(),m.preventDefault())}function i(){t(0,n=P.innerWidth)}function a(m){te[m?"unshift":"push"](()=>{f=m,t(1,f)})}return[n,f,o,i,a]}class de extends Y{constructor(e){super(),T(this,e,ce,me,U,{})}}const we=`<script>\r
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
`;function _e(l){let e,t="<",n,f;return{c(){e=_("Another Svelte special element is "),n=_(t),f=_("svelte:window>.")},l(o){e=h(o,"Another Svelte special element is "),n=h(o,t),f=h(o,"svelte:window>.")},m(o,i){u(o,e,i),u(o,n,i),u(o,f,i)},p:A,d(o){o&&($(e),$(n),$(f))}}}function he(l){let e;return{c(){e=_("Here we want to see the width and have it change whenever we resize the window. We also want to focus the search bar whenever we press ctrl+f.")},l(t){e=h(t,"Here we want to see the width and have it change whenever we resize the window. We also want to focus the search bar whenever we press ctrl+f.")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function ve(l){let e;return{c(){e=_("Svelte bindings (bind:) are usually two way bindings but here everything except scrollX and scrollY are readonly so effectively they are one way bindings.")},l(t){e=h(t,"Svelte bindings (bind:) are usually two way bindings but here everything except scrollX and scrollY are readonly so effectively they are one way bindings.")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function ge(l){let e;return{c(){e=_("Here is a list of the properties we can bind to:")},l(t){e=h(t,"Here is a list of the properties we can bind to:")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function ye(l){let e;return{c(){e=_("innerWidth")},l(t){e=h(t,"innerWidth")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function be(l){let e;return{c(){e=_("innerHeight")},l(t){e=h(t,"innerHeight")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function We(l){let e;return{c(){e=_("outerWidth")},l(t){e=h(t,"outerWidth")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function Le(l){let e;return{c(){e=_("outerHeight")},l(t){e=h(t,"outerHeight")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function ke(l){let e;return{c(){e=_("scrollX (not readonly)")},l(t){e=h(t,"scrollX (not readonly)")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function Ke(l){let e;return{c(){e=_("scrollY (not readonly)")},l(t){e=h(t,"scrollY (not readonly)")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function Se(l){let e;return{c(){e=_("online — an alias for window.navigator.onLine")},l(t){e=h(t,"online — an alias for window.navigator.onLine")},m(t,n){u(t,e,n)},d(t){t&&$(e)}}}function ze(l){let e,t,n,f,o,i,a,m,c,S,w,z,s,d;return e=new E({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),n=new E({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),o=new E({props:{$$slots:{default:[We]},$$scope:{ctx:l}}}),a=new E({props:{$$slots:{default:[Le]},$$scope:{ctx:l}}}),c=new E({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),w=new E({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),s=new E({props:{$$slots:{default:[Se]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),t=k(),v(n.$$.fragment),f=k(),v(o.$$.fragment),i=k(),v(a.$$.fragment),m=k(),v(c.$$.fragment),S=k(),v(w.$$.fragment),z=k(),v(s.$$.fragment)},l(r){g(e.$$.fragment,r),t=K(r),g(n.$$.fragment,r),f=K(r),g(o.$$.fragment,r),i=K(r),g(a.$$.fragment,r),m=K(r),g(c.$$.fragment,r),S=K(r),g(w.$$.fragment,r),z=K(r),g(s.$$.fragment,r)},m(r,p){y(e,r,p),u(r,t,p),y(n,r,p),u(r,f,p),y(o,r,p),u(r,i,p),y(a,r,p),u(r,m,p),y(c,r,p),u(r,S,p),y(w,r,p),u(r,z,p),y(s,r,p),d=!0},p(r,p){const H={};p&2&&(H.$$scope={dirty:p,ctx:r}),e.$set(H);const B={};p&2&&(B.$$scope={dirty:p,ctx:r}),n.$set(B);const M={};p&2&&(M.$$scope={dirty:p,ctx:r}),o.$set(M);const j={};p&2&&(j.$$scope={dirty:p,ctx:r}),a.$set(j);const N={};p&2&&(N.$$scope={dirty:p,ctx:r}),c.$set(N);const V={};p&2&&(V.$$scope={dirty:p,ctx:r}),w.$set(V);const q={};p&2&&(q.$$scope={dirty:p,ctx:r}),s.$set(q)},i(r){d||(b(e.$$.fragment,r),b(n.$$.fragment,r),b(o.$$.fragment,r),b(a.$$.fragment,r),b(c.$$.fragment,r),b(w.$$.fragment,r),b(s.$$.fragment,r),d=!0)},o(r){W(e.$$.fragment,r),W(n.$$.fragment,r),W(o.$$.fragment,r),W(a.$$.fragment,r),W(c.$$.fragment,r),W(w.$$.fragment,r),W(s.$$.fragment,r),d=!1},d(r){r&&($(t),$(f),$(i),$(m),$(S),$(z)),L(e,r),L(n,r),L(o,r),L(a,r),L(c,r),L(w,r),L(s,r)}}}function Ee(l){let e,t,n,f,o,i,a,m,c,S,w,z;return e=new D({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),n=new D({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),o=new ie({props:{name:[{name:"App",comp:pe,raw:ue,text:"Here it is normally without using svelte:window. Let's try to rewrite it using svelte:window>."},{name:"App2",comp:de,raw:we,text:"By using svelte:window we can bind to the innerWidth variable and remove that function. We can also remove the onMount lifecycle functions and instead put the event handlers on the svelte:window element itself."}]}}),a=new D({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),c=new D({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),w=new ae({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){v(e.$$.fragment),t=k(),v(n.$$.fragment),f=k(),v(o.$$.fragment),i=k(),v(a.$$.fragment),m=k(),v(c.$$.fragment),S=k(),v(w.$$.fragment)},l(s){g(e.$$.fragment,s),t=K(s),g(n.$$.fragment,s),f=K(s),g(o.$$.fragment,s),i=K(s),g(a.$$.fragment,s),m=K(s),g(c.$$.fragment,s),S=K(s),g(w.$$.fragment,s)},m(s,d){y(e,s,d),u(s,t,d),y(n,s,d),u(s,f,d),y(o,s,d),u(s,i,d),y(a,s,d),u(s,m,d),y(c,s,d),u(s,S,d),y(w,s,d),z=!0},p(s,d){const r={};d&2&&(r.$$scope={dirty:d,ctx:s}),e.$set(r);const p={};d&2&&(p.$$scope={dirty:d,ctx:s}),n.$set(p);const H={};d&2&&(H.$$scope={dirty:d,ctx:s}),a.$set(H);const B={};d&2&&(B.$$scope={dirty:d,ctx:s}),c.$set(B);const M={};d&2&&(M.$$scope={dirty:d,ctx:s}),w.$set(M)},i(s){z||(b(e.$$.fragment,s),b(n.$$.fragment,s),b(o.$$.fragment,s),b(a.$$.fragment,s),b(c.$$.fragment,s),b(w.$$.fragment,s),z=!0)},o(s){W(e.$$.fragment,s),W(n.$$.fragment,s),W(o.$$.fragment,s),W(a.$$.fragment,s),W(c.$$.fragment,s),W(w.$$.fragment,s),z=!1},d(s){s&&($(t),$(f),$(i),$(m),$(S)),L(e,s),L(n,s),L(o,s),L(a,s),L(c,s),L(w,s)}}}function He(l){let e,t;const n=[l[0],O];let f={$$slots:{default:[Ee]},$$scope:{ctx:l}};for(let o=0;o<n.length;o+=1)f=I(f,n[o]);return e=new oe({props:f}),{c(){v(e.$$.fragment)},l(o){g(e.$$.fragment,o)},m(o,i){y(e,o,i),t=!0},p(o,[i]){const a=i&1?se(n,[i&1&&G(o[0]),i&0&&G(O)]):{};i&2&&(a.$$scope={dirty:i,ctx:o}),e.$set(a)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){W(e.$$.fragment,o),t=!1},d(o){L(e,o)}}}const O={title:"<svelte:window>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-28T00:00:00.000Z",layout:"notes"};function Be(l,e,t){return l.$$set=n=>{t(0,e=I(I({},e),F(n)))},e=F(e),[e]}class Ue extends Y{constructor(e){super(),T(this,e,Be,He,U,{})}}export{Ue as default,O as metadata};
