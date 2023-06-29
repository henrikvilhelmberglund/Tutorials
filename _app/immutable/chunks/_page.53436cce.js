import{s as C,f as d,a as $,l as g,g as _,u as w,c as b,m as x,i as v,X as h,n as D,z as k,d as p,H as V,A as j,al as T,h as R,v as E,C as M,D as X}from"./scheduler.a7cd560e.js";import{S as y,i as I,b as A,d as O,m as S,a as B,t as N,e as U}from"./index.396264e7.js";import{g as L,a as Z}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{c as Q,M as Y,P as H}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as J}from"./index.5e192797.js";import{t as F}from"./tweened.c20bb7bf.js";import{S as tt}from"./ShowMany.db7be1f3.js";function et(i){let t,o="-",n,r,s,c,l="+",f,a;return{c(){t=d("button"),t.textContent=o,n=$(),r=g(i[0]),s=$(),c=d("button"),c.textContent=l},l(m){t=_(m,"BUTTON",{["data-svelte-h"]:!0}),w(t)!=="svelte-11b57zv"&&(t.textContent=o),n=b(m),r=x(m,i[0]),s=b(m),c=_(m,"BUTTON",{["data-svelte-h"]:!0}),w(c)!=="svelte-1y8g835"&&(c.textContent=l)},m(m,e){v(m,t,e),v(m,n,e),v(m,r,e),v(m,s,e),v(m,c,e),f||(a=[h(t,"click",i[2]),h(c,"click",i[3])],f=!0)},p(m,[e]){e&1&&D(r,m[0])},i:k,o:k,d(m){m&&(p(t),p(n),p(r),p(s),p(c)),f=!1,V(a)}}}function nt(i,t,o){let n;const r=J(0);return j(i,r,l=>o(0,n=l)),[n,r,()=>{T(r,n--,n)},()=>{T(r,n++,n)}]}class rt extends y{constructor(t){super(),I(this,t,nt,et,C,{})}}const lt=`<script>\r
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
`;function st(i){let t,o="-",n,r,s,c,l,f="+",a,m;return{c(){t=d("button"),t.textContent=o,n=$(),r=d("div"),s=g(i[0]),c=$(),l=d("button"),l.textContent=f},l(e){t=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(t)!=="svelte-11b57zv"&&(t.textContent=o),n=b(e),r=_(e,"DIV",{});var u=R(r);s=x(u,i[0]),u.forEach(p),c=b(e),l=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(l)!=="svelte-1y8g835"&&(l.textContent=f)},m(e,u){v(e,t,u),v(e,n,u),v(e,r,u),E(r,s),v(e,c,u),v(e,l,u),a||(m=[h(t,"click",i[2]),h(l,"click",i[3])],a=!0)},p(e,[u]){u&1&&D(s,e[0])},i:k,o:k,d(e){e&&(p(t),p(n),p(r),p(c),p(l)),a=!1,V(m)}}}function at(i,t,o){let n;function r(f,a=1e3){const m=J(f);let e,u;function z(W){e&&(clearInterval(e),e=null,f=u);const P=Date.now(),K=P+a;e=setInterval(()=>{let q=Date.now();if(q>K){f=W,m.set(W),clearInterval(e),e=null;return}u=(q-P)/a*(W-f)+f,m.set(u)},100)}return{subscribe:m.subscribe,set:z}}const s=r(0);return j(i,s,f=>o(0,n=f)),[n,s,()=>{T(s,n--,n)},()=>{T(s,n++,n)}]}class ot extends y{constructor(t){super(),I(this,t,at,st,C,{})}}const it=`<script>\r
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
`;function ut(i){let t,o="-",n,r,s,c,l,f="+",a,m;return{c(){t=d("button"),t.textContent=o,n=$(),r=d("div"),s=g(i[0]),c=$(),l=d("button"),l.textContent=f},l(e){t=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(t)!=="svelte-11b57zv"&&(t.textContent=o),n=b(e),r=_(e,"DIV",{});var u=R(r);s=x(u,i[0]),u.forEach(p),c=b(e),l=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(l)!=="svelte-1y8g835"&&(l.textContent=f)},m(e,u){v(e,t,u),v(e,n,u),v(e,r,u),E(r,s),v(e,c,u),v(e,l,u),a||(m=[h(t,"click",i[2]),h(l,"click",i[3])],a=!0)},p(e,[u]){u&1&&D(s,e[0])},i:k,o:k,d(e){e&&(p(t),p(n),p(r),p(c),p(l)),a=!1,V(m)}}}function ct(i,t,o){let n;const r=F(0);return j(i,r,l=>o(0,n=l)),[n,r,()=>{T(r,n--,n)},()=>{T(r,n++,n)}]}class mt extends y{constructor(t){super(),I(this,t,ct,ut,C,{})}}const pt=`<script>\r
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
`;function vt(i){let t,o="-",n,r,s,c,l,f="+",a,m;return{c(){t=d("button"),t.textContent=o,n=$(),r=d("div"),s=g(i[0]),c=$(),l=d("button"),l.textContent=f},l(e){t=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(t)!=="svelte-11b57zv"&&(t.textContent=o),n=b(e),r=_(e,"DIV",{});var u=R(r);s=x(u,i[0]),u.forEach(p),c=b(e),l=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(l)!=="svelte-1y8g835"&&(l.textContent=f)},m(e,u){v(e,t,u),v(e,n,u),v(e,r,u),E(r,s),v(e,c,u),v(e,l,u),a||(m=[h(t,"click",i[2]),h(l,"click",i[3])],a=!0)},p(e,[u]){u&1&&D(s,e[0])},i:k,o:k,d(e){e&&(p(t),p(n),p(r),p(c),p(l)),a=!1,V(m)}}}function ft(i,t,o){let n;const r=F(0,{duration:5e3});return j(i,r,l=>o(0,n=l)),[n,r,()=>{T(r,n--,n)},()=>{T(r,n++,n)}]}class dt extends y{constructor(t){super(),I(this,t,ft,vt,C,{})}}const _t=`<script>\r
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
`;function $t(i){let t,o="-",n,r,s,c,l,f="+",a,m;return{c(){t=d("button"),t.textContent=o,n=$(),r=d("div"),s=g(i[0]),c=$(),l=d("button"),l.textContent=f},l(e){t=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(t)!=="svelte-11b57zv"&&(t.textContent=o),n=b(e),r=_(e,"DIV",{});var u=R(r);s=x(u,i[0]),u.forEach(p),c=b(e),l=_(e,"BUTTON",{["data-svelte-h"]:!0}),w(l)!=="svelte-1y8g835"&&(l.textContent=f)},m(e,u){v(e,t,u),v(e,n,u),v(e,r,u),E(r,s),v(e,c,u),v(e,l,u),a||(m=[h(t,"click",i[2]),h(l,"click",i[3])],a=!0)},p(e,[u]){u&1&&D(s,e[0])},i:k,o:k,d(e){e&&(p(t),p(n),p(r),p(c),p(l)),a=!1,V(m)}}}function bt(i,t,o){let n;const r=F(0,{duration:5e3,delay:2e3,easing:Q});return j(i,r,l=>o(0,n=l)),[n,r,()=>{T(r,n--,n)},()=>{T(r,n++,n)}]}class wt extends y{constructor(t){super(),I(this,t,bt,$t,C,{})}}const ht=`<script>\r
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
`;function kt(i){let t;return{c(){t=g("Our store is a bit boring because it just changes the value instantly. We can make it more interesting by tweening the values.")},l(o){t=x(o,"Our store is a bit boring because it just changes the value instantly. We can make it more interesting by tweening the values.")},m(o,n){v(o,t,n)},d(o){o&&p(t)}}}function Tt(i){let t;return{c(){t=g("If we use the tweened() store the value will move smoothly whenever it changes. First we'll make a custom version.")},l(o){t=x(o,"If we use the tweened() store the value will move smoothly whenever it changes. First we'll make a custom version.")},m(o,n){v(o,t,n)},d(o){o&&p(t)}}}function gt(i){let t;return{c(){t=g("As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},l(o){t=x(o,"As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},m(o,n){v(o,t,n)},d(o){o&&p(t)}}}function xt(i){let t,o,n,r,s,c,l,f;return t=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:i}}}),n=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:i}}}),s=new tt({props:{name:[{name:"App",comp:rt,raw:lt,text:"Here is our starting point."},{name:"App2",comp:ot,raw:it,text:"We implement a custom store using the store contract: returns an object and contains a subscribe method. Here we cheat a bit by just using the writable store."},{name:"App3",comp:mt,raw:pt,text:"That was a lot of work though. Thankfully Svelte has a tweened store built in already!"},{name:"App4",comp:dt,raw:_t,text:"We can set a custom duration by passing a parameter with an object."},{name:"App5",comp:wt,raw:ht,text:"There's also delay and easing."}]}}),l=new H({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){A(t.$$.fragment),o=$(),A(n.$$.fragment),r=$(),A(s.$$.fragment),c=$(),A(l.$$.fragment)},l(a){O(t.$$.fragment,a),o=b(a),O(n.$$.fragment,a),r=b(a),O(s.$$.fragment,a),c=b(a),O(l.$$.fragment,a)},m(a,m){S(t,a,m),v(a,o,m),S(n,a,m),v(a,r,m),S(s,a,m),v(a,c,m),S(l,a,m),f=!0},p(a,m){const e={};m&2&&(e.$$scope={dirty:m,ctx:a}),t.$set(e);const u={};m&2&&(u.$$scope={dirty:m,ctx:a}),n.$set(u);const z={};m&2&&(z.$$scope={dirty:m,ctx:a}),l.$set(z)},i(a){f||(B(t.$$.fragment,a),B(n.$$.fragment,a),B(s.$$.fragment,a),B(l.$$.fragment,a),f=!0)},o(a){N(t.$$.fragment,a),N(n.$$.fragment,a),N(s.$$.fragment,a),N(l.$$.fragment,a),f=!1},d(a){a&&(p(o),p(r),p(c)),U(t,a),U(n,a),U(s,a),U(l,a)}}}function Ct(i){let t,o;const n=[i[0],G];let r={$$slots:{default:[xt]},$$scope:{ctx:i}};for(let s=0;s<n.length;s+=1)r=M(r,n[s]);return t=new Y({props:r}),{c(){A(t.$$.fragment)},l(s){O(t.$$.fragment,s)},m(s,c){S(t,s,c),o=!0},p(s,[c]){const l=c&1?L(n,[c&1&&Z(s[0]),c&0&&Z(G)]):{};c&2&&(l.$$scope={dirty:c,ctx:s}),t.$set(l)},i(s){o||(B(t.$$.fragment,s),o=!0)},o(s){N(t.$$.fragment,s),o=!1},d(s){U(t,s)}}}const G={title:"tweened() Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-27T00:00:00.000Z",layout:"notes"};function yt(i,t,o){return i.$$set=n=>{o(0,t=M(M({},t),X(n)))},t=X(t),[t]}class Dt extends y{constructor(t){super(),I(this,t,yt,Ct,C,{})}}export{Dt as default,G as metadata};
