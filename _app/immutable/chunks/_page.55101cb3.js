import{s as W,f as E,g as M,i as p,X as ft,z as B,d as a,l as c,a as k,h as K,m as _,c as R,v as y,n as Q,o as Bt,A as V,al as ct,u as Mt,C as pt,D as Ht}from"./scheduler.a7cd560e.js";import{S as D,i as L,b as h,d as b,m as v,a as d,t as I,e as T}from"./index.396264e7.js";import{g as Ut,a as yt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Pt,P as N}from"./mdsvex-layout-notes.4b2b7ac6.js";import{r as _t,w as gt}from"./index.5e192797.js";import{S as at}from"./ShowMany.db7be1f3.js";import{U as jt}from"./Ul.01790c78.js";import{H as Nt}from"./H3.2217b794.js";import{S as j}from"./Strong.097578ae.js";import{L as G}from"./Li.8eab8712.js";let Wt=_t(0,$=>{let e=0,t=setInterval(()=>{$(e++)},1e3);return()=>{clearTimeout(t)}});const Et=gt("");function Dt($){let e,t,s;return{c(){e=E("input")},l(o){e=M(o,"INPUT",{})},m(o,n){p(o,e,n),t||(s=ft(e,"input",$[0]),t=!0)},p:B,i:B,o:B,d(o){o&&a(e),t=!1,s()}}}function Lt($){return[t=>Et.set(t.currentTarget.value)]}class Yt extends D{constructor(e){super(),L(this,e,Lt,Dt,W,{})}}function qt($){let e,t,s,o,n,u,r;return{c(){e=E("h1"),t=c("store1: "),s=c($[0]),o=k(),n=E("h1"),u=c("store2: "),r=c($[1])},l(m){e=M(m,"H1",{});var f=K(e);t=_(f,"store1: "),s=_(f,$[0]),f.forEach(a),o=R(m),n=M(m,"H1",{});var w=K(n);u=_(w,"store2: "),r=_(w,$[1]),w.forEach(a)},m(m,f){p(m,e,f),y(e,t),y(e,s),p(m,o,f),p(m,n,f),y(n,u),y(n,r)},p(m,[f]){f&1&&Q(s,m[0]),f&2&&Q(r,m[1])},i:B,o:B,d(m){m&&(a(e),a(o),a(n))}}}function zt($,e,t){let s,o;return Bt(()=>Wt.subscribe(n=>{t(0,s=n)})),Bt(()=>Et.subscribe(n=>{t(1,o=n)})),[s,o]}class Xt extends D{constructor(e){super(),L(this,e,zt,qt,W,{})}}function Zt($){let e,t,s,o;return e=new Yt({}),s=new Xt({}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment)},l(n){b(e.$$.fragment,n),t=R(n),b(s.$$.fragment,n)},m(n,u){v(e,n,u),p(n,t,u),v(s,n,u),o=!0},p:B,i(n){o||(d(e.$$.fragment,n),d(s.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),I(s.$$.fragment,n),o=!1},d(n){n&&a(t),T(e,n),T(s,n)}}}class $t extends D{constructor(e){super(),L(this,e,null,Zt,W,{})}}const Ft=`<script>\r
	import Input from "./Input.svelte";\r
	import Output from "./Output.svelte";\r
<\/script>\r
\r
<Input />\r
<Output />`,Gt=`<script>\r
	import { store2 } from "./data";\r
<\/script>\r
\r
<input on:input={(e) => store2.set(e.currentTarget.value)} />\r
\r
<style>\r
</style>\r
`,Jt=`<script>\r
	import { store1, store2 } from "./data";\r
	import { onMount } from "svelte";\r
\r
	let _value1, _value2;\r
\r
	onMount(() => {\r
		return store1.subscribe((value) => {\r
			_value1 = value;\r
		});\r
	});\r
\r
	onMount(() => {\r
		return store2.subscribe((value) => {\r
			_value2 = value;\r
		});\r
	});\r
<\/script>\r
\r
<h1>store1: {_value1}</h1>\r
<h1>store2: {_value2}</h1>\r
\r
<style>\r
</style>\r
`,Kt=`import { writable, readable } from "svelte/store";\r
\r
export let store1 = readable(0, (set) => {\r
	let i = 0;\r
	let timer = setInterval(() => {\r
		set(i++);\r
	}, 1000);\r
\r
	return () => {\r
		clearTimeout(timer);\r
	};\r
});\r
\r
export const store2 = writable("");`;let Qt=_t(0,$=>{let e=0,t=setInterval(()=>{$(e++)},1e3);return()=>{clearTimeout(t)}});const mt=gt("");function Vt($){let e,t,s;return{c(){e=E("input")},l(o){e=M(o,"INPUT",{})},m(o,n){p(o,e,n),t||(s=ft(e,"input",$[1]),t=!0)},p:B,i:B,o:B,d(o){o&&a(e),t=!1,s()}}}function te($,e,t){let s;return V($,mt,n=>t(0,s=n)),[s,n=>ct(mt,s=n.currentTarget.value,s)]}class ee extends D{constructor(e){super(),L(this,e,te,Vt,W,{})}}function ne($){let e,t,s,o,n,u,r;return{c(){e=E("h1"),t=c("store1: "),s=c($[0]),o=k(),n=E("h1"),u=c("store2: "),r=c($[1])},l(m){e=M(m,"H1",{});var f=K(e);t=_(f,"store1: "),s=_(f,$[0]),f.forEach(a),o=R(m),n=M(m,"H1",{});var w=K(n);u=_(w,"store2: "),r=_(w,$[1]),w.forEach(a)},m(m,f){p(m,e,f),y(e,t),y(e,s),p(m,o,f),p(m,n,f),y(n,u),y(n,r)},p(m,[f]){f&1&&Q(s,m[0]),f&2&&Q(r,m[1])},i:B,o:B,d(m){m&&(a(e),a(o),a(n))}}}function se($,e,t){let s,o;return V($,Qt,n=>t(0,s=n)),V($,mt,n=>t(1,o=n)),[s,o]}class re extends D{constructor(e){super(),L(this,e,se,ne,W,{})}}function oe($){let e,t,s,o;return e=new ee({}),s=new re({}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment)},l(n){b(e.$$.fragment,n),t=R(n),b(s.$$.fragment,n)},m(n,u){v(e,n,u),p(n,t,u),v(s,n,u),o=!0},p:B,i(n){o||(d(e.$$.fragment,n),d(s.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),I(s.$$.fragment,n),o=!1},d(n){n&&a(t),T(e,n),T(s,n)}}}class lt extends D{constructor(e){super(),L(this,e,null,oe,W,{})}}const $e=`<script>\r
	import Input2 from "./Input2.svelte";\r
	import Output2 from "./Output2.svelte";\r
<\/script>\r
\r
<Input2 />\r
<Output2 />`,le=`<script>\r
	import { store2 } from "./data2";\r
<\/script>\r
\r
<input on:input={(e) => $store2 = e.currentTarget.value} />\r
\r
<style>\r
</style>\r
`,ue=`<script>\r
	import { store1, store2 } from "./data2";\r
<\/script>\r
\r
<h1>store1: {$store1}</h1>\r
<h1>store2: {$store2}</h1>\r
\r
<style>\r
</style>\r
`,fe=`import { writable, readable } from "svelte/store";\r
\r
export let store1 = readable(0, (set) => {\r
	let i = 0;\r
	let timer = setInterval(() => {\r
		set(i++);\r
	}, 1000);\r
\r
	return () => {\r
		clearTimeout(timer);\r
	};\r
});\r
\r
export const store2 = writable("");`;let ae=_t(0,$=>{let e=0,t=setInterval(()=>{$(e++)},1e3);return()=>{clearTimeout(t)}});const it=gt("");function pe($){let e,t,s;return{c(){e=E("input")},l(o){e=M(o,"INPUT",{})},m(o,n){p(o,e,n),t||(s=ft(e,"input",$[1]),t=!0)},p:B,i:B,o:B,d(o){o&&a(e),t=!1,s()}}}function me($,e,t){let s;return V($,it,n=>t(0,s=n)),[s,n=>ct(it,s=n.currentTarget.value,s)]}class ie extends D{constructor(e){super(),L(this,e,me,pe,W,{})}}function ce($){let e,t,s,o,n,u,r,m,f,w,i,x,S,U="Click me!",H,P;return{c(){e=E("h1"),t=c("store1: "),s=c($[0]),o=k(),n=E("h1"),u=c("store2: "),r=c($[1]),m=k(),f=E("h1"),w=c("store3: "),i=c($[2]),x=k(),S=E("button"),S.textContent=U},l(O){e=M(O,"H1",{});var A=K(e);t=_(A,"store1: "),s=_(A,$[0]),A.forEach(a),o=R(O),n=M(O,"H1",{});var C=K(n);u=_(C,"store2: "),r=_(C,$[1]),C.forEach(a),m=R(O),f=M(O,"H1",{});var Y=K(f);w=_(Y,"store3: "),i=_(Y,$[2]),Y.forEach(a),x=R(O),S=M(O,"BUTTON",{["data-svelte-h"]:!0}),Mt(S)!=="svelte-19lfsnx"&&(S.textContent=U)},m(O,A){p(O,e,A),y(e,t),y(e,s),p(O,o,A),p(O,n,A),y(n,u),y(n,r),p(O,m,A),p(O,f,A),y(f,w),y(f,i),p(O,x,A),p(O,S,A),H||(P=ft(S,"click",$[4]),H=!0)},p(O,[A]){A&1&&Q(s,O[0]),A&2&&Q(r,O[1]),A&4&&Q(i,O[2])},i:B,o:B,d(O){O&&(a(e),a(o),a(n),a(m),a(f),a(x),a(S)),H=!1,P()}}}function _e($,e,t){let s,o,n;V($,ae,f=>t(0,s=f)),V($,it,f=>t(1,o=f));const u=[];setInterval(()=>{for(const f of u)f(+new Date)},1e3);const r={subscribe(f){return f(""),u.push(f),()=>{u.splice(u.indexOf(f),1)}},set(f){for(const w of u)w(f)}};return V($,r,f=>t(2,n=f)),[s,o,n,r,()=>ct(r,n="hello",n)]}class ge extends D{constructor(e){super(),L(this,e,_e,ce,W,{})}}function we($){let e,t,s,o;return e=new ie({}),s=new ge({}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment)},l(n){b(e.$$.fragment,n),t=R(n),b(s.$$.fragment,n)},m(n,u){v(e,n,u),p(n,t,u),v(s,n,u),o=!0},p:B,i(n){o||(d(e.$$.fragment,n),d(s.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),I(s.$$.fragment,n),o=!1},d(n){n&&a(t),T(e,n),T(s,n)}}}class ut extends D{constructor(e){super(),L(this,e,null,we,W,{})}}const he=`<script>\r
	import Input3 from "./Input3.svelte";\r
	import Output3 from "./Output3.svelte";\r
<\/script>\r
\r
<Input3 />\r
<Output3 />`,be=`<script>\r
	import { store2 } from "./data3";\r
<\/script>\r
\r
<input on:input={(e) => $store2 = e.currentTarget.value} />\r
\r
<style>\r
</style>\r
`,ve=`<script>\r
	import { store1, store2 } from "./data3";\r
\r
	const subscribers = [];\r
	setInterval(() => {\r
		for (const subscriber of subscribers) {\r
			subscriber(+new Date());\r
		}\r
	}, 1000);\r
\r
	const store3 = {\r
		subscribe(fn) {\r
			fn("");\r
			subscribers.push(fn);\r
			return () => {\r
				subscribers.splice(subscribers.indexOf(fn), 1);\r
			};\r
		},\r
		set(value) {\r
			for (const subscriber of subscribers) {\r
				subscriber(value);\r
			}\r
		},\r
	};\r
<\/script>\r
\r
<h1>store1: {$store1}</h1>\r
<h1>store2: {$store2}</h1>\r
<h1>store3: {$store3}</h1>\r
\r
<button on:click={() => ($store3 = "hello")}>Click me!</button>\r
\r
<style>\r
</style>\r
`,de=`import { writable, readable } from "svelte/store";\r
\r
export let store1 = readable(0, (set) => {\r
	let i = 0;\r
	let timer = setInterval(() => {\r
		set(i++);\r
	}, 1000);\r
\r
	return () => {\r
		clearTimeout(timer);\r
	};\r
});\r
\r
export const store2 = writable("");`;function Ie($){let e;return{c(){e=c("writable")},l(t){e=_(t,"writable")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Te($){let e;return{c(){e=c("readable")},l(t){e=_(t,"readable")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function xe($){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Oe($){let e,t,s,o,n,u,r,m;return t=new j({props:{$$slots:{default:[Ie]},$$scope:{ctx:$}}}),o=new j({props:{$$slots:{default:[Te]},$$scope:{ctx:$}}}),u=new j({props:{$$slots:{default:[xe]},$$scope:{ctx:$}}}),{c(){e=c("Both the "),h(t.$$.fragment),s=c(" and "),h(o.$$.fragment),n=c(" stores have a similarity: they follow the "),h(u.$$.fragment),r=c(".")},l(f){e=_(f,"Both the "),b(t.$$.fragment,f),s=_(f," and "),b(o.$$.fragment,f),n=_(f," stores have a similarity: they follow the "),b(u.$$.fragment,f),r=_(f,".")},m(f,w){p(f,e,w),v(t,f,w),p(f,s,w),v(o,f,w),p(f,n,w),v(u,f,w),p(f,r,w),m=!0},p(f,w){const i={};w&2&&(i.$$scope={dirty:w,ctx:f}),t.$set(i);const x={};w&2&&(x.$$scope={dirty:w,ctx:f}),o.$set(x);const S={};w&2&&(S.$$scope={dirty:w,ctx:f}),u.$set(S)},i(f){m||(d(t.$$.fragment,f),d(o.$$.fragment,f),d(u.$$.fragment,f),m=!0)},o(f){I(t.$$.fragment,f),I(o.$$.fragment,f),I(u.$$.fragment,f),m=!1},d(f){f&&(a(e),a(s),a(n),a(r)),T(t,f),T(o,f),T(u,f)}}}function ke($){let e;return{c(){e=c("useful special syntax")},l(t){e=_(t,"useful special syntax")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Re($){let e,t,s,o;return t=new j({props:{$$slots:{default:[ke]},$$scope:{ctx:$}}}),{c(){e=c("Svelte has a "),h(t.$$.fragment),s=c(" for using stores that leverages this store contract. But first, let's see how we do it before using that:")},l(n){e=_(n,"Svelte has a "),b(t.$$.fragment,n),s=_(n," for using stores that leverages this store contract. But first, let's see how we do it before using that:")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function Se($){let e;return{c(){e=c("readable store")},l(t){e=_(t,"readable store")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ae($){let e,t,s,o;return t=new j({props:{$$slots:{default:[Se]},$$scope:{ctx:$}}}),{c(){e=c("store1 is a "),h(t.$$.fragment),s=c(" with the default value 0 that then increases by 1 every second.")},l(n){e=_(n,"store1 is a "),b(t.$$.fragment,n),s=_(n," with the default value 0 that then increases by 1 every second.")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function Be($){let e;return{c(){e=c("writable store")},l(t){e=_(t,"writable store")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function He($){let e,t,s,o;return t=new j({props:{$$slots:{default:[Be]},$$scope:{ctx:$}}}),{c(){e=c("store2 is a "),h(t.$$.fragment),s=c(" that updates every time you type in the input field.")},l(n){e=_(n,"store2 is a "),b(t.$$.fragment,n),s=_(n," that updates every time you type in the input field.")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function ye($){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function je($){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ce($){let e,t,s,o,n,u;return t=new j({props:{$$slots:{default:[ye]},$$scope:{ctx:$}}}),o=new j({props:{$$slots:{default:[je]},$$scope:{ctx:$}}}),{c(){e=c("Both of these stores follow the "),h(t.$$.fragment),s=c(". This allows us to use the special syntax which is a "),h(o.$$.fragment),n=c(" prefix before the variable.")},l(r){e=_(r,"Both of these stores follow the "),b(t.$$.fragment,r),s=_(r,". This allows us to use the special syntax which is a "),b(o.$$.fragment,r),n=_(r," prefix before the variable.")},m(r,m){p(r,e,m),v(t,r,m),p(r,s,m),v(o,r,m),p(r,n,m),u=!0},p(r,m){const f={};m&2&&(f.$$scope={dirty:m,ctx:r}),t.$set(f);const w={};m&2&&(w.$$scope={dirty:m,ctx:r}),o.$set(w)},i(r){u||(d(t.$$.fragment,r),d(o.$$.fragment,r),u=!0)},o(r){I(t.$$.fragment,r),I(o.$$.fragment,r),u=!1},d(r){r&&(a(e),a(s),a(n)),T(t,r),T(o,r)}}}function Ee($){let e;return{c(){e=c("assign a value to the store directly")},l(t){e=_(t,"assign a value to the store directly")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Me($){let e,t,s,o;return t=new j({props:{$$slots:{default:[Ee]},$$scope:{ctx:$}}}),{c(){e=c("This way we can "),h(t.$$.fragment),s=c(" without using set().")},l(n){e=_(n,"This way we can "),b(t.$$.fragment,n),s=_(n," without using set().")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function Ue($){let e;return{c(){e=c("When we use the syntax when displaying the value it does three things:")},l(t){e=_(t,"When we use the syntax when displaying the value it does three things:")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Pe($){let e;return{c(){e=c("Subscribes to the store.")},l(t){e=_(t,"Subscribes to the store.")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ne($){let e;return{c(){e=c("The value is always updated as the latest value of the store.")},l(t){e=_(t,"The value is always updated as the latest value of the store.")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function We($){let e;return{c(){e=c("When unmonted, it will automatically unsubscribe.")},l(t){e=_(t,"When unmonted, it will automatically unsubscribe.")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function De($){let e,t,s,o,n,u;return e=new G({props:{$$slots:{default:[Pe]},$$scope:{ctx:$}}}),s=new G({props:{$$slots:{default:[Ne]},$$scope:{ctx:$}}}),n=new G({props:{$$slots:{default:[We]},$$scope:{ctx:$}}}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment),o=k(),h(n.$$.fragment)},l(r){b(e.$$.fragment,r),t=R(r),b(s.$$.fragment,r),o=R(r),b(n.$$.fragment,r)},m(r,m){v(e,r,m),p(r,t,m),v(s,r,m),p(r,o,m),v(n,r,m),u=!0},p(r,m){const f={};m&2&&(f.$$scope={dirty:m,ctx:r}),e.$set(f);const w={};m&2&&(w.$$scope={dirty:m,ctx:r}),s.$set(w);const i={};m&2&&(i.$$scope={dirty:m,ctx:r}),n.$set(i)},i(r){u||(d(e.$$.fragment,r),d(s.$$.fragment,r),d(n.$$.fragment,r),u=!0)},o(r){I(e.$$.fragment,r),I(s.$$.fragment,r),I(n.$$.fragment,r),u=!1},d(r){r&&(a(t),a(o)),T(e,r),T(s,r),T(n,r)}}}function Le($){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ye($){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function qe($){let e,t,s,o,n,u;return t=new j({props:{$$slots:{default:[Le]},$$scope:{ctx:$}}}),o=new j({props:{$$slots:{default:[Ye]},$$scope:{ctx:$}}}),{c(){e=c("This is the power of the "),h(t.$$.fragment),s=c(". By following it we can reference the store value by using the "),h(o.$$.fragment),n=c(" prefix and also assign to it like if it was a normal variable.")},l(r){e=_(r,"This is the power of the "),b(t.$$.fragment,r),s=_(r,". By following it we can reference the store value by using the "),b(o.$$.fragment,r),n=_(r," prefix and also assign to it like if it was a normal variable.")},m(r,m){p(r,e,m),v(t,r,m),p(r,s,m),v(o,r,m),p(r,n,m),u=!0},p(r,m){const f={};m&2&&(f.$$scope={dirty:m,ctx:r}),t.$set(f);const w={};m&2&&(w.$$scope={dirty:m,ctx:r}),o.$set(w)},i(r){u||(d(t.$$.fragment,r),d(o.$$.fragment,r),u=!0)},o(r){I(t.$$.fragment,r),I(o.$$.fragment,r),u=!1},d(r){r&&(a(e),a(s),a(n)),T(t,r),T(o,r)}}}function ze($){let e;return{c(){e=c("So what is the store contract?")},l(t){e=_(t,"So what is the store contract?")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Xe($){let e;return{c(){e=c("Your subscriber method needs to:")},l(t){e=_(t,"Your subscriber method needs to:")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ze($){let e;return{c(){e=c("Be an object that")},l(t){e=_(t,"Be an object that")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Fe($){let e;return{c(){e=c("immediately")},l(t){e=_(t,"immediately")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ge($){let e,t,s,o;return t=new j({props:{$$slots:{default:[Fe]},$$scope:{ctx:$}}}),{c(){e=c("Takes in a function and call that function "),h(t.$$.fragment),s=c(" (synchronously)")},l(n){e=_(n,"Takes in a function and call that function "),b(t.$$.fragment,n),s=_(n," (synchronously)")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function Je($){let e;return{c(){e=c("Returns a function that unsubscribes the function")},l(t){e=_(t,"Returns a function that unsubscribes the function")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ke($){let e;return{c(){e=c("At some point loops through the subscribers list and call them with the value of the store")},l(t){e=_(t,"At some point loops through the subscribers list and call them with the value of the store")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Qe($){let e;return{c(){e=c('(optional) Implements a set method that takes in a value that you update the store with when using $store as in for example $store = "hello"')},l(t){e=_(t,'(optional) Implements a set method that takes in a value that you update the store with when using $store as in for example $store = "hello"')},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ve($){let e,t,s,o,n,u,r,m,f,w;return e=new G({props:{$$slots:{default:[Ze]},$$scope:{ctx:$}}}),s=new G({props:{$$slots:{default:[Ge]},$$scope:{ctx:$}}}),n=new G({props:{$$slots:{default:[Je]},$$scope:{ctx:$}}}),r=new G({props:{$$slots:{default:[Ke]},$$scope:{ctx:$}}}),f=new G({props:{$$slots:{default:[Qe]},$$scope:{ctx:$}}}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment),o=k(),h(n.$$.fragment),u=k(),h(r.$$.fragment),m=k(),h(f.$$.fragment)},l(i){b(e.$$.fragment,i),t=R(i),b(s.$$.fragment,i),o=R(i),b(n.$$.fragment,i),u=R(i),b(r.$$.fragment,i),m=R(i),b(f.$$.fragment,i)},m(i,x){v(e,i,x),p(i,t,x),v(s,i,x),p(i,o,x),v(n,i,x),p(i,u,x),v(r,i,x),p(i,m,x),v(f,i,x),w=!0},p(i,x){const S={};x&2&&(S.$$scope={dirty:x,ctx:i}),e.$set(S);const U={};x&2&&(U.$$scope={dirty:x,ctx:i}),s.$set(U);const H={};x&2&&(H.$$scope={dirty:x,ctx:i}),n.$set(H);const P={};x&2&&(P.$$scope={dirty:x,ctx:i}),r.$set(P);const O={};x&2&&(O.$$scope={dirty:x,ctx:i}),f.$set(O)},i(i){w||(d(e.$$.fragment,i),d(s.$$.fragment,i),d(n.$$.fragment,i),d(r.$$.fragment,i),d(f.$$.fragment,i),w=!0)},o(i){I(e.$$.fragment,i),I(s.$$.fragment,i),I(n.$$.fragment,i),I(r.$$.fragment,i),I(f.$$.fragment,i),w=!1},d(i){i&&(a(t),a(o),a(u),a(m)),T(e,i),T(s,i),T(n,i),T(r,i),T(f,i)}}}function tn($){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function en($){let e,t,s,o;return t=new j({props:{$$slots:{default:[tn]},$$scope:{ctx:$}}}),{c(){e=c("If you do that you will be able to use the "),h(t.$$.fragment),s=c(" prefix.")},l(n){e=_(n,"If you do that you will be able to use the "),b(t.$$.fragment,n),s=_(n," prefix.")},m(n,u){p(n,e,u),v(t,n,u),p(n,s,u),o=!0},p(n,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:n}),t.$set(r)},i(n){o||(d(t.$$.fragment,n),o=!0)},o(n){I(t.$$.fragment,n),o=!1},d(n){n&&(a(e),a(s)),T(t,n)}}}function nn($){let e,t,s,o,n,u,r,m,f,w,i,x,S,U,H,P,O,A,C,Y,q,tt,z,et,X,nt,Z,st,F,rt,J,ot;return e=new N({props:{$$slots:{default:[Oe]},$$scope:{ctx:$}}}),s=new N({props:{$$slots:{default:[Re]},$$scope:{ctx:$}}}),n=new at({props:{name:[{name:"App",comp:$t,raw:Ft,text:""},{name:"Input",comp:$t,raw:Gt,text:""},{name:"Output",comp:$t,raw:Jt,text:""},{name:"data.js",comp:$t,raw:Kt,text:""}]}}),r=new N({props:{$$slots:{default:[Ae]},$$scope:{ctx:$}}}),f=new N({props:{$$slots:{default:[He]},$$scope:{ctx:$}}}),i=new N({props:{$$slots:{default:[Ce]},$$scope:{ctx:$}}}),S=new N({props:{$$slots:{default:[Me]},$$scope:{ctx:$}}}),H=new N({props:{$$slots:{default:[Ue]},$$scope:{ctx:$}}}),O=new jt({props:{$$slots:{default:[De]},$$scope:{ctx:$}}}),C=new at({props:{name:[{name:"App2",comp:lt,raw:$e,text:""},{name:"Input2",comp:lt,raw:le,text:"Here we can treat $store2 as a normal variable and assign to it to update the store value."},{name:"Output2",comp:lt,raw:ue,text:"Here we replaced all of the previous code just by using $store1 and $store2."},{name:"data2.js",comp:lt,raw:fe,text:""}]}}),q=new N({props:{$$slots:{default:[qe]},$$scope:{ctx:$}}}),z=new Nt({props:{$$slots:{default:[ze]},$$scope:{ctx:$}}}),X=new N({props:{$$slots:{default:[Xe]},$$scope:{ctx:$}}}),Z=new jt({props:{$$slots:{default:[Ve]},$$scope:{ctx:$}}}),F=new N({props:{$$slots:{default:[en]},$$scope:{ctx:$}}}),J=new at({props:{name:[{name:"App3",comp:ut,raw:he,text:"store3 is our new store which fulfills the store contract allowing the use of $store3"},{name:"Input3",comp:ut,raw:be,text:""},{name:"Output3",comp:ut,raw:ve,text:""},{name:"data3.js",comp:ut,raw:de,text:""}]}}),{c(){h(e.$$.fragment),t=k(),h(s.$$.fragment),o=k(),h(n.$$.fragment),u=k(),h(r.$$.fragment),m=k(),h(f.$$.fragment),w=k(),h(i.$$.fragment),x=k(),h(S.$$.fragment),U=k(),h(H.$$.fragment),P=k(),h(O.$$.fragment),A=k(),h(C.$$.fragment),Y=k(),h(q.$$.fragment),tt=k(),h(z.$$.fragment),et=k(),h(X.$$.fragment),nt=k(),h(Z.$$.fragment),st=k(),h(F.$$.fragment),rt=k(),h(J.$$.fragment)},l(l){b(e.$$.fragment,l),t=R(l),b(s.$$.fragment,l),o=R(l),b(n.$$.fragment,l),u=R(l),b(r.$$.fragment,l),m=R(l),b(f.$$.fragment,l),w=R(l),b(i.$$.fragment,l),x=R(l),b(S.$$.fragment,l),U=R(l),b(H.$$.fragment,l),P=R(l),b(O.$$.fragment,l),A=R(l),b(C.$$.fragment,l),Y=R(l),b(q.$$.fragment,l),tt=R(l),b(z.$$.fragment,l),et=R(l),b(X.$$.fragment,l),nt=R(l),b(Z.$$.fragment,l),st=R(l),b(F.$$.fragment,l),rt=R(l),b(J.$$.fragment,l)},m(l,g){v(e,l,g),p(l,t,g),v(s,l,g),p(l,o,g),v(n,l,g),p(l,u,g),v(r,l,g),p(l,m,g),v(f,l,g),p(l,w,g),v(i,l,g),p(l,x,g),v(S,l,g),p(l,U,g),v(H,l,g),p(l,P,g),v(O,l,g),p(l,A,g),v(C,l,g),p(l,Y,g),v(q,l,g),p(l,tt,g),v(z,l,g),p(l,et,g),v(X,l,g),p(l,nt,g),v(Z,l,g),p(l,st,g),v(F,l,g),p(l,rt,g),v(J,l,g),ot=!0},p(l,g){const wt={};g&2&&(wt.$$scope={dirty:g,ctx:l}),e.$set(wt);const ht={};g&2&&(ht.$$scope={dirty:g,ctx:l}),s.$set(ht);const bt={};g&2&&(bt.$$scope={dirty:g,ctx:l}),r.$set(bt);const vt={};g&2&&(vt.$$scope={dirty:g,ctx:l}),f.$set(vt);const dt={};g&2&&(dt.$$scope={dirty:g,ctx:l}),i.$set(dt);const It={};g&2&&(It.$$scope={dirty:g,ctx:l}),S.$set(It);const Tt={};g&2&&(Tt.$$scope={dirty:g,ctx:l}),H.$set(Tt);const xt={};g&2&&(xt.$$scope={dirty:g,ctx:l}),O.$set(xt);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:l}),q.$set(Ot);const kt={};g&2&&(kt.$$scope={dirty:g,ctx:l}),z.$set(kt);const Rt={};g&2&&(Rt.$$scope={dirty:g,ctx:l}),X.$set(Rt);const St={};g&2&&(St.$$scope={dirty:g,ctx:l}),Z.$set(St);const At={};g&2&&(At.$$scope={dirty:g,ctx:l}),F.$set(At)},i(l){ot||(d(e.$$.fragment,l),d(s.$$.fragment,l),d(n.$$.fragment,l),d(r.$$.fragment,l),d(f.$$.fragment,l),d(i.$$.fragment,l),d(S.$$.fragment,l),d(H.$$.fragment,l),d(O.$$.fragment,l),d(C.$$.fragment,l),d(q.$$.fragment,l),d(z.$$.fragment,l),d(X.$$.fragment,l),d(Z.$$.fragment,l),d(F.$$.fragment,l),d(J.$$.fragment,l),ot=!0)},o(l){I(e.$$.fragment,l),I(s.$$.fragment,l),I(n.$$.fragment,l),I(r.$$.fragment,l),I(f.$$.fragment,l),I(i.$$.fragment,l),I(S.$$.fragment,l),I(H.$$.fragment,l),I(O.$$.fragment,l),I(C.$$.fragment,l),I(q.$$.fragment,l),I(z.$$.fragment,l),I(X.$$.fragment,l),I(Z.$$.fragment,l),I(F.$$.fragment,l),I(J.$$.fragment,l),ot=!1},d(l){l&&(a(t),a(o),a(u),a(m),a(w),a(x),a(U),a(P),a(A),a(Y),a(tt),a(et),a(nt),a(st),a(rt)),T(e,l),T(s,l),T(n,l),T(r,l),T(f,l),T(i,l),T(S,l),T(H,l),T(O,l),T(C,l),T(q,l),T(z,l),T(X,l),T(Z,l),T(F,l),T(J,l)}}}function sn($){let e,t;const s=[$[0],Ct];let o={$$slots:{default:[nn]},$$scope:{ctx:$}};for(let n=0;n<s.length;n+=1)o=pt(o,s[n]);return e=new Pt({props:o}),{c(){h(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,u){v(e,n,u),t=!0},p(n,[u]){const r=u&1?Ut(s,[u&1&&yt(n[0]),u&0&&yt(Ct)]):{};u&2&&(r.$$scope={dirty:u,ctx:n}),e.$set(r)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}const Ct={title:"Svelte store contract",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function rn($,e,t){return $.$$set=s=>{t(0,e=pt(pt({},e),Ht(s)))},e=Ht(e),[e]}class gn extends D{constructor(e){super(),L(this,e,rn,sn,W,{})}}export{gn as default,Ct as metadata};
