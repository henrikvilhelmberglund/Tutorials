import{S as B,i as N,s as S,k as w,q as _,a as I,l as k,m as h,r as $,h as m,c as y,b as v,G as T,Q as A,u as M,B as O,D as W,K as x,an as E,M as q,w as U,x as g,y as D,N as J,O as C,f as V,t as j,z as R,P as G}from"./index-58af1356.js";import{M as L,P}from"./mdsvex-layout-notes-a943bafe.js";import{w as Q}from"./index-be13bd0b.js";import{t as F}from"./index-27d389d0.js";import{a as X}from"./index-50f5df95.js";import{S as Y}from"./ShowMany-e03b9690.js";function tt(u){let e,l,n,r,o,f,a,p,s;return{c(){e=w("button"),l=_("-"),n=I(),r=_(u[0]),o=I(),f=w("button"),a=_("+")},l(c){e=k(c,"BUTTON",{});var t=h(e);l=$(t,"-"),t.forEach(m),n=y(c),r=$(c,u[0]),o=y(c),f=k(c,"BUTTON",{});var i=h(f);a=$(i,"+"),i.forEach(m)},m(c,t){v(c,e,t),T(e,l),v(c,n,t),v(c,r,t),v(c,o,t),v(c,f,t),T(f,a),p||(s=[A(e,"click",u[2]),A(f,"click",u[3])],p=!0)},p(c,[t]){t&1&&M(r,c[0])},i:O,o:O,d(c){c&&m(e),c&&m(n),c&&m(r),c&&m(o),c&&m(f),p=!1,W(s)}}}function et(u,e,l){let n;const r=Q(0);return x(u,r,a=>l(0,n=a)),[n,r,()=>{E(r,n--,n)},()=>{E(r,n++,n)}]}class nt extends B{constructor(e){super(),N(this,e,et,tt,S,{})}}const rt=`<script>\r
	import { writable } from "svelte/store";\r
	const value = writable(0);\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		$value--;\r
	}}>-</button>\r
{$value}\r
<button\r
	on:click={() => {\r
		$value++;\r
	}}>+</button>\r
`;function lt(u){let e,l,n,r,o,f,a,p,s,c;return{c(){e=w("button"),l=_("-"),n=I(),r=w("div"),o=_(u[0]),f=I(),a=w("button"),p=_("+")},l(t){e=k(t,"BUTTON",{});var i=h(e);l=$(i,"-"),i.forEach(m),n=y(t),r=k(t,"DIV",{});var d=h(r);o=$(d,u[0]),d.forEach(m),f=y(t),a=k(t,"BUTTON",{});var b=h(a);p=$(b,"+"),b.forEach(m)},m(t,i){v(t,e,i),T(e,l),v(t,n,i),v(t,r,i),T(r,o),v(t,f,i),v(t,a,i),T(a,p),s||(c=[A(e,"click",u[2]),A(a,"click",u[3])],s=!0)},p(t,[i]){i&1&&M(o,t[0])},i:O,o:O,d(t){t&&m(e),t&&m(n),t&&m(r),t&&m(f),t&&m(a),s=!1,W(c)}}}function st(u,e,l){let n;function r(p,s=1e3){const c=Q(p);let t,i;function d(b){t&&(clearInterval(t),t=null,p=i);const H=Date.now(),Z=H+s;t=setInterval(()=>{let z=Date.now();if(z>Z){p=b,c.set(b),clearInterval(t),t=null;return}i=(z-H)/s*(b-p)+p,c.set(i)},100)}return{subscribe:c.subscribe,set:d}}const o=r(0);return x(u,o,p=>l(0,n=p)),[n,o,()=>{E(o,n--,n)},()=>{E(o,n++,n)}]}class ot extends B{constructor(e){super(),N(this,e,st,lt,S,{})}}const at=`<script>\r
	import { writable } from "svelte/store";\r
\r
	function tweened(initialValue, duration = 1000) {\r
		const store = writable(initialValue);\r
		let intervalId;\r
		let valueToSet;\r
\r
		function set(newValue) {\r
			if (intervalId) {\r
				clearInterval(intervalId);\r
				intervalId = null;\r
				initialValue = valueToSet;\r
			}\r
\r
			const startTime = Date.now();\r
			const endTime = startTime + duration;\r
\r
			intervalId = setInterval(() => {\r
				let currentTime = Date.now();\r
				if (currentTime > endTime) {\r
					initialValue = newValue;\r
					store.set(newValue);\r
					clearInterval(intervalId);\r
					intervalId = null;\r
					return;\r
				}\r
\r
				valueToSet =\r
					((currentTime - startTime) / duration) * (newValue - initialValue) + initialValue;\r
				store.set(valueToSet);\r
			}, 100);\r
		}\r
\r
		return {\r
			subscribe: store.subscribe,\r
			set,\r
		};\r
	}\r
\r
	const value = tweened(0);\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		$value--;\r
	}}>-</button>\r
\r
<div>{$value}</div>\r
<button\r
	on:click={() => {\r
		$value++;\r
	}}>+</button>\r
`;function it(u){let e,l,n,r,o,f,a,p,s,c;return{c(){e=w("button"),l=_("-"),n=I(),r=w("div"),o=_(u[0]),f=I(),a=w("button"),p=_("+")},l(t){e=k(t,"BUTTON",{});var i=h(e);l=$(i,"-"),i.forEach(m),n=y(t),r=k(t,"DIV",{});var d=h(r);o=$(d,u[0]),d.forEach(m),f=y(t),a=k(t,"BUTTON",{});var b=h(a);p=$(b,"+"),b.forEach(m)},m(t,i){v(t,e,i),T(e,l),v(t,n,i),v(t,r,i),T(r,o),v(t,f,i),v(t,a,i),T(a,p),s||(c=[A(e,"click",u[2]),A(a,"click",u[3])],s=!0)},p(t,[i]){i&1&&M(o,t[0])},i:O,o:O,d(t){t&&m(e),t&&m(n),t&&m(r),t&&m(f),t&&m(a),s=!1,W(c)}}}function ut(u,e,l){let n;const r=F(0);return x(u,r,a=>l(0,n=a)),[n,r,()=>{E(r,n--,n)},()=>{E(r,n++,n)}]}class ct extends B{constructor(e){super(),N(this,e,ut,it,S,{})}}const ft=`<script>\r
	import { tweened } from "svelte/motion";\r
\r
	const value = tweened(0);\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		$value--;\r
	}}>-</button>\r
\r
<div>{$value}</div>\r
<button\r
	on:click={() => {\r
		$value++;\r
	}}>+</button>\r
`;function mt(u){let e,l,n,r,o,f,a,p,s,c;return{c(){e=w("button"),l=_("-"),n=I(),r=w("div"),o=_(u[0]),f=I(),a=w("button"),p=_("+")},l(t){e=k(t,"BUTTON",{});var i=h(e);l=$(i,"-"),i.forEach(m),n=y(t),r=k(t,"DIV",{});var d=h(r);o=$(d,u[0]),d.forEach(m),f=y(t),a=k(t,"BUTTON",{});var b=h(a);p=$(b,"+"),b.forEach(m)},m(t,i){v(t,e,i),T(e,l),v(t,n,i),v(t,r,i),T(r,o),v(t,f,i),v(t,a,i),T(a,p),s||(c=[A(e,"click",u[2]),A(a,"click",u[3])],s=!0)},p(t,[i]){i&1&&M(o,t[0])},i:O,o:O,d(t){t&&m(e),t&&m(n),t&&m(r),t&&m(f),t&&m(a),s=!1,W(c)}}}function pt(u,e,l){let n;const r=F(0,{duration:5e3});return x(u,r,a=>l(0,n=a)),[n,r,()=>{E(r,n--,n)},()=>{E(r,n++,n)}]}class vt extends B{constructor(e){super(),N(this,e,pt,mt,S,{})}}const _t=`<script>\r
	import { tweened } from "svelte/motion";\r
\r
	const value = tweened(0, { duration: 5000 });\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		$value--;\r
	}}>-</button>\r
\r
<div>{$value}</div>\r
<button\r
	on:click={() => {\r
		$value++;\r
	}}>+</button>\r
`;function $t(u){let e,l,n,r,o,f,a,p,s,c;return{c(){e=w("button"),l=_("-"),n=I(),r=w("div"),o=_(u[0]),f=I(),a=w("button"),p=_("+")},l(t){e=k(t,"BUTTON",{});var i=h(e);l=$(i,"-"),i.forEach(m),n=y(t),r=k(t,"DIV",{});var d=h(r);o=$(d,u[0]),d.forEach(m),f=y(t),a=k(t,"BUTTON",{});var b=h(a);p=$(b,"+"),b.forEach(m)},m(t,i){v(t,e,i),T(e,l),v(t,n,i),v(t,r,i),T(r,o),v(t,f,i),v(t,a,i),T(a,p),s||(c=[A(e,"click",u[2]),A(a,"click",u[3])],s=!0)},p(t,[i]){i&1&&M(o,t[0])},i:O,o:O,d(t){t&&m(e),t&&m(n),t&&m(r),t&&m(f),t&&m(a),s=!1,W(c)}}}function dt(u,e,l){let n;const r=F(0,{duration:5e3,delay:2e3,easing:X});return x(u,r,a=>l(0,n=a)),[n,r,()=>{E(r,n--,n)},()=>{E(r,n++,n)}]}class bt extends B{constructor(e){super(),N(this,e,dt,$t,S,{})}}const wt=`<script>\r
	import { tweened } from "svelte/motion";\r
	import { cubicInOut } from "svelte/easing";\r
\r
	const value = tweened(0, { duration: 5000, delay: 2000, easing: cubicInOut });\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		$value--;\r
	}}>-</button>\r
\r
<div>{$value}</div>\r
<button\r
	on:click={() => {\r
		$value++;\r
	}}>+</button>\r
`;function kt(u){let e;return{c(){e=_("Our store is a bit boring because it just changes the value instantly. We can make it more interesting by tweening the values.")},l(l){e=$(l,"Our store is a bit boring because it just changes the value instantly. We can make it more interesting by tweening the values.")},m(l,n){v(l,e,n)},d(l){l&&m(e)}}}function ht(u){let e;return{c(){e=_("If we use the tweened() store the value will move smoothly whenever it changes. First we'll make a custom version.")},l(l){e=$(l,"If we use the tweened() store the value will move smoothly whenever it changes. First we'll make a custom version.")},m(l,n){v(l,e,n)},d(l){l&&m(e)}}}function Tt(u){let e;return{c(){e=_("As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},l(l){e=$(l,"As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},m(l,n){v(l,e,n)},d(l){l&&m(e)}}}function It(u){let e,l,n,r,o,f,a,p;return e=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:u}}}),n=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:u}}}),o=new Y({props:{name:[{name:"App",comp:nt,raw:rt,text:"Here is our starting point."},{name:"App2",comp:ot,raw:at,text:"We implement a custom store using the store contract: returns an object and contains a subscribe method. Here we cheat a bit by just using the writable store."},{name:"App3",comp:ct,raw:ft,text:"That was a lot of work though. Thankfully Svelte has a tweened store built in already!"},{name:"App4",comp:vt,raw:_t,text:"We can set a custom duration by passing a parameter with an object."},{name:"App5",comp:bt,raw:wt,text:"There's also delay and easing."}]}}),a=new P({props:{$$slots:{default:[Tt]},$$scope:{ctx:u}}}),{c(){U(e.$$.fragment),l=I(),U(n.$$.fragment),r=I(),U(o.$$.fragment),f=I(),U(a.$$.fragment)},l(s){g(e.$$.fragment,s),l=y(s),g(n.$$.fragment,s),r=y(s),g(o.$$.fragment,s),f=y(s),g(a.$$.fragment,s)},m(s,c){D(e,s,c),v(s,l,c),D(n,s,c),v(s,r,c),D(o,s,c),v(s,f,c),D(a,s,c),p=!0},p(s,c){const t={};c&2&&(t.$$scope={dirty:c,ctx:s}),e.$set(t);const i={};c&2&&(i.$$scope={dirty:c,ctx:s}),n.$set(i);const d={};c&2&&(d.$$scope={dirty:c,ctx:s}),a.$set(d)},i(s){p||(V(e.$$.fragment,s),V(n.$$.fragment,s),V(o.$$.fragment,s),V(a.$$.fragment,s),p=!0)},o(s){j(e.$$.fragment,s),j(n.$$.fragment,s),j(o.$$.fragment,s),j(a.$$.fragment,s),p=!1},d(s){R(e,s),s&&m(l),R(n,s),s&&m(r),R(o,s),s&&m(f),R(a,s)}}}function yt(u){let e,l;const n=[u[0],K];let r={$$slots:{default:[It]},$$scope:{ctx:u}};for(let o=0;o<n.length;o+=1)r=q(r,n[o]);return e=new L({props:r}),{c(){U(e.$$.fragment)},l(o){g(e.$$.fragment,o)},m(o,f){D(e,o,f),l=!0},p(o,[f]){const a=f&1?J(n,[f&1&&C(o[0]),f&0&&C(K)]):{};f&2&&(a.$$scope={dirty:f,ctx:o}),e.$set(a)},i(o){l||(V(e.$$.fragment,o),l=!0)},o(o){j(e.$$.fragment,o),l=!1},d(o){R(e,o)}}}const K={title:"tweened() Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-27T00:00:00.000Z",layout:"notes"};function At(u,e,l){return u.$$set=n=>{l(0,e=q(q({},e),G(n)))},e=G(e),[e]}class gt extends B{constructor(e){super(),N(this,e,At,yt,S,{})}}export{gt as default,K as metadata};
