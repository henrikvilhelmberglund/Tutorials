import{S as q,i as D,s as L,k as U,l as N,b as m,Q as ut,B as A,h as a,q as c,a as R,m as F,r as _,c as S,G as y,u as V,o as At,w as b,x as h,y as v,f as I,t as T,z as O,K as X,an as ct,M as pt,N as Pt,O as Ht,P as yt}from"./index-58af1356.js";import{M as Ut,P as W}from"./mdsvex-layout-notes-a943bafe.js";import{r as _t,w as wt}from"./index-be13bd0b.js";import{S as at}from"./ShowMany-e03b9690.js";import{U as Et}from"./Ul-d8f43016.js";import{H as Nt}from"./H3-0dfd9e52.js";import{S as E}from"./Strong-d8efce91.js";import{L as Z}from"./Li-5470a037.js";let Ct=_t(0,f=>{let e=0,t=setInterval(()=>{f(e++)},1e3);return()=>{clearTimeout(t)}});const jt=wt("");function Wt(f){let e,t,n;return{c(){e=U("input")},l($){e=N($,"INPUT",{})},m($,s){m($,e,s),t||(n=ut(e,"input",f[0]),t=!0)},p:A,i:A,o:A,d($){$&&a(e),t=!1,n()}}}function qt(f){return[t=>jt.set(t.currentTarget.value)]}class Dt extends q{constructor(e){super(),D(this,e,qt,Wt,L,{})}}function Lt(f){let e,t,n,$,s,l,r;return{c(){e=U("h1"),t=c("store1: "),n=c(f[0]),$=R(),s=U("h1"),l=c("store2: "),r=c(f[1])},l(p){e=N(p,"H1",{});var u=F(e);t=_(u,"store1: "),n=_(u,f[0]),u.forEach(a),$=S(p),s=N(p,"H1",{});var g=F(s);l=_(g,"store2: "),r=_(g,f[1]),g.forEach(a)},m(p,u){m(p,e,u),y(e,t),y(e,n),m(p,$,u),m(p,s,u),y(s,l),y(s,r)},p(p,[u]){u&1&&V(n,p[0]),u&2&&V(r,p[1])},i:A,o:A,d(p){p&&a(e),p&&a($),p&&a(s)}}}function Yt(f,e,t){let n,$;return At(()=>Ct.subscribe(s=>{t(0,n=s)})),At(()=>jt.subscribe(s=>{t(1,$=s)})),[n,$]}class zt extends q{constructor(e){super(),D(this,e,Yt,Lt,L,{})}}function Gt(f){let e,t,n,$;return e=new Dt({}),n=new zt({}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment)},l(s){h(e.$$.fragment,s),t=S(s),h(n.$$.fragment,s)},m(s,l){v(e,s,l),m(s,t,l),v(n,s,l),$=!0},p:A,i(s){$||(I(e.$$.fragment,s),I(n.$$.fragment,s),$=!0)},o(s){T(e.$$.fragment,s),T(n.$$.fragment,s),$=!1},d(s){O(e,s),s&&a(t),O(n,s)}}}class $t extends q{constructor(e){super(),D(this,e,null,Gt,L,{})}}const Kt=`<script>\r
	import Input from "./Input.svelte";\r
	import Output from "./Output.svelte";\r
<\/script>\r
\r
<Input />\r
<Output />`,Qt=`<script>\r
	import { store2 } from "./data";\r
<\/script>\r
\r
<input on:input={(e) => store2.set(e.currentTarget.value)} />\r
\r
<style>\r
</style>\r
`,Zt=`<script>\r
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
`,Ft=`import { writable, readable } from "svelte/store";\r
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
export const store2 = writable("");`;let Jt=_t(0,f=>{let e=0,t=setInterval(()=>{f(e++)},1e3);return()=>{clearTimeout(t)}});const mt=wt("");function Vt(f){let e,t,n;return{c(){e=U("input")},l($){e=N($,"INPUT",{})},m($,s){m($,e,s),t||(n=ut(e,"input",f[1]),t=!0)},p:A,i:A,o:A,d($){$&&a(e),t=!1,n()}}}function Xt(f,e,t){let n;return X(f,mt,s=>t(0,n=s)),[n,s=>ct(mt,n=s.currentTarget.value,n)]}class te extends q{constructor(e){super(),D(this,e,Xt,Vt,L,{})}}function ee(f){let e,t,n,$,s,l,r;return{c(){e=U("h1"),t=c("store1: "),n=c(f[0]),$=R(),s=U("h1"),l=c("store2: "),r=c(f[1])},l(p){e=N(p,"H1",{});var u=F(e);t=_(u,"store1: "),n=_(u,f[0]),u.forEach(a),$=S(p),s=N(p,"H1",{});var g=F(s);l=_(g,"store2: "),r=_(g,f[1]),g.forEach(a)},m(p,u){m(p,e,u),y(e,t),y(e,n),m(p,$,u),m(p,s,u),y(s,l),y(s,r)},p(p,[u]){u&1&&V(n,p[0]),u&2&&V(r,p[1])},i:A,o:A,d(p){p&&a(e),p&&a($),p&&a(s)}}}function se(f,e,t){let n,$;return X(f,Jt,s=>t(0,n=s)),X(f,mt,s=>t(1,$=s)),[n,$]}class ne extends q{constructor(e){super(),D(this,e,se,ee,L,{})}}function re(f){let e,t,n,$;return e=new te({}),n=new ne({}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment)},l(s){h(e.$$.fragment,s),t=S(s),h(n.$$.fragment,s)},m(s,l){v(e,s,l),m(s,t,l),v(n,s,l),$=!0},p:A,i(s){$||(I(e.$$.fragment,s),I(n.$$.fragment,s),$=!0)},o(s){T(e.$$.fragment,s),T(n.$$.fragment,s),$=!1},d(s){O(e,s),s&&a(t),O(n,s)}}}class ft extends q{constructor(e){super(),D(this,e,null,re,L,{})}}const oe=`<script>\r
	import Input2 from "./Input2.svelte";\r
	import Output2 from "./Output2.svelte";\r
<\/script>\r
\r
<Input2 />\r
<Output2 />`,$e=`<script>\r
	import { store2 } from "./data2";\r
<\/script>\r
\r
<input on:input={(e) => $store2 = e.currentTarget.value} />\r
\r
<style>\r
</style>\r
`,fe=`<script>\r
	import { store1, store2 } from "./data2";\r
<\/script>\r
\r
<h1>store1: {$store1}</h1>\r
<h1>store2: {$store2}</h1>\r
\r
<style>\r
</style>\r
`,le=`import { writable, readable } from "svelte/store";\r
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
export const store2 = writable("");`;let ue=_t(0,f=>{let e=0,t=setInterval(()=>{f(e++)},1e3);return()=>{clearTimeout(t)}});const it=wt("");function ae(f){let e,t,n;return{c(){e=U("input")},l($){e=N($,"INPUT",{})},m($,s){m($,e,s),t||(n=ut(e,"input",f[1]),t=!0)},p:A,i:A,o:A,d($){$&&a(e),t=!1,n()}}}function pe(f,e,t){let n;return X(f,it,s=>t(0,n=s)),[n,s=>ct(it,n=s.currentTarget.value,n)]}class me extends q{constructor(e){super(),D(this,e,pe,ae,L,{})}}function ie(f){let e,t,n,$,s,l,r,p,u,g,i,k,B,M,H,C;return{c(){e=U("h1"),t=c("store1: "),n=c(f[0]),$=R(),s=U("h1"),l=c("store2: "),r=c(f[1]),p=R(),u=U("h1"),g=c("store3: "),i=c(f[2]),k=R(),B=U("button"),M=c("Click me!")},l(x){e=N(x,"H1",{});var d=F(e);t=_(d,"store1: "),n=_(d,f[0]),d.forEach(a),$=S(x),s=N(x,"H1",{});var j=F(s);l=_(j,"store2: "),r=_(j,f[1]),j.forEach(a),p=S(x),u=N(x,"H1",{});var Y=F(u);g=_(Y,"store3: "),i=_(Y,f[2]),Y.forEach(a),k=S(x),B=N(x,"BUTTON",{});var P=F(B);M=_(P,"Click me!"),P.forEach(a)},m(x,d){m(x,e,d),y(e,t),y(e,n),m(x,$,d),m(x,s,d),y(s,l),y(s,r),m(x,p,d),m(x,u,d),y(u,g),y(u,i),m(x,k,d),m(x,B,d),y(B,M),H||(C=ut(B,"click",f[4]),H=!0)},p(x,[d]){d&1&&V(n,x[0]),d&2&&V(r,x[1]),d&4&&V(i,x[2])},i:A,o:A,d(x){x&&a(e),x&&a($),x&&a(s),x&&a(p),x&&a(u),x&&a(k),x&&a(B),H=!1,C()}}}function ce(f,e,t){let n,$,s;X(f,ue,u=>t(0,n=u)),X(f,it,u=>t(1,$=u));const l=[];setInterval(()=>{for(const u of l)u(+new Date)},1e3);const r={subscribe(u){return u(""),l.push(u),()=>{l.splice(l.indexOf(u),1)}},set(u){for(const g of l)g(u)}};return X(f,r,u=>t(2,s=u)),[n,$,s,r,()=>ct(r,s="hello",s)]}class _e extends q{constructor(e){super(),D(this,e,ce,ie,L,{})}}function we(f){let e,t,n,$;return e=new me({}),n=new _e({}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment)},l(s){h(e.$$.fragment,s),t=S(s),h(n.$$.fragment,s)},m(s,l){v(e,s,l),m(s,t,l),v(n,s,l),$=!0},p:A,i(s){$||(I(e.$$.fragment,s),I(n.$$.fragment,s),$=!0)},o(s){T(e.$$.fragment,s),T(n.$$.fragment,s),$=!1},d(s){O(e,s),s&&a(t),O(n,s)}}}class lt extends q{constructor(e){super(),D(this,e,null,we,L,{})}}const ge=`<script>\r
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
`,he=`<script>\r
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
`,ve=`import { writable, readable } from "svelte/store";\r
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
export const store2 = writable("");`;function Ie(f){let e;return{c(){e=c("writable")},l(t){e=_(t,"writable")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Te(f){let e;return{c(){e=c("readable")},l(t){e=_(t,"readable")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Oe(f){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function xe(f){let e,t,n,$,s,l,r,p;return t=new E({props:{$$slots:{default:[Ie]},$$scope:{ctx:f}}}),$=new E({props:{$$slots:{default:[Te]},$$scope:{ctx:f}}}),l=new E({props:{$$slots:{default:[Oe]},$$scope:{ctx:f}}}),{c(){e=c("Both the "),b(t.$$.fragment),n=c(" and "),b($.$$.fragment),s=c(" stores have a similarity: they follow the "),b(l.$$.fragment),r=c(".")},l(u){e=_(u,"Both the "),h(t.$$.fragment,u),n=_(u," and "),h($.$$.fragment,u),s=_(u," stores have a similarity: they follow the "),h(l.$$.fragment,u),r=_(u,".")},m(u,g){m(u,e,g),v(t,u,g),m(u,n,g),v($,u,g),m(u,s,g),v(l,u,g),m(u,r,g),p=!0},p(u,g){const i={};g&2&&(i.$$scope={dirty:g,ctx:u}),t.$set(i);const k={};g&2&&(k.$$scope={dirty:g,ctx:u}),$.$set(k);const B={};g&2&&(B.$$scope={dirty:g,ctx:u}),l.$set(B)},i(u){p||(I(t.$$.fragment,u),I($.$$.fragment,u),I(l.$$.fragment,u),p=!0)},o(u){T(t.$$.fragment,u),T($.$$.fragment,u),T(l.$$.fragment,u),p=!1},d(u){u&&a(e),O(t,u),u&&a(n),O($,u),u&&a(s),O(l,u),u&&a(r)}}}function ke(f){let e;return{c(){e=c("useful special syntax")},l(t){e=_(t,"useful special syntax")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Re(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[ke]},$$scope:{ctx:f}}}),{c(){e=c("Svelte has a "),b(t.$$.fragment),n=c(" for using stores that leverages this store contract. But first, let's see how we do it before using that:")},l(s){e=_(s,"Svelte has a "),h(t.$$.fragment,s),n=_(s," for using stores that leverages this store contract. But first, let's see how we do it before using that:")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function Se(f){let e;return{c(){e=c("readable store")},l(t){e=_(t,"readable store")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Be(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[Se]},$$scope:{ctx:f}}}),{c(){e=c("store1 is a "),b(t.$$.fragment),n=c(" with the default value 0 that then increases by 1 every second.")},l(s){e=_(s,"store1 is a "),h(t.$$.fragment,s),n=_(s," with the default value 0 that then increases by 1 every second.")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function de(f){let e;return{c(){e=c("writable store")},l(t){e=_(t,"writable store")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ae(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[de]},$$scope:{ctx:f}}}),{c(){e=c("store2 is a "),b(t.$$.fragment),n=c(" that updates every time you type in the input field.")},l(s){e=_(s,"store2 is a "),h(t.$$.fragment,s),n=_(s," that updates every time you type in the input field.")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function He(f){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function ye(f){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ee(f){let e,t,n,$,s,l;return t=new E({props:{$$slots:{default:[He]},$$scope:{ctx:f}}}),$=new E({props:{$$slots:{default:[ye]},$$scope:{ctx:f}}}),{c(){e=c("Both of these stores follow the "),b(t.$$.fragment),n=c(". This allows us to use the special syntax which is a "),b($.$$.fragment),s=c(" prefix before the variable.")},l(r){e=_(r,"Both of these stores follow the "),h(t.$$.fragment,r),n=_(r,". This allows us to use the special syntax which is a "),h($.$$.fragment,r),s=_(r," prefix before the variable.")},m(r,p){m(r,e,p),v(t,r,p),m(r,n,p),v($,r,p),m(r,s,p),l=!0},p(r,p){const u={};p&2&&(u.$$scope={dirty:p,ctx:r}),t.$set(u);const g={};p&2&&(g.$$scope={dirty:p,ctx:r}),$.$set(g)},i(r){l||(I(t.$$.fragment,r),I($.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T($.$$.fragment,r),l=!1},d(r){r&&a(e),O(t,r),r&&a(n),O($,r),r&&a(s)}}}function Me(f){let e;return{c(){e=c("assign a value to the store directly")},l(t){e=_(t,"assign a value to the store directly")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function je(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[Me]},$$scope:{ctx:f}}}),{c(){e=c("This way we can "),b(t.$$.fragment),n=c(" without using set().")},l(s){e=_(s,"This way we can "),h(t.$$.fragment,s),n=_(s," without using set().")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function Pe(f){let e;return{c(){e=c("When we use the syntax when displaying the value it does three things:")},l(t){e=_(t,"When we use the syntax when displaying the value it does three things:")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ue(f){let e;return{c(){e=c("Subscribes to the store.")},l(t){e=_(t,"Subscribes to the store.")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ne(f){let e;return{c(){e=c("The value is always updated as the latest value of the store.")},l(t){e=_(t,"The value is always updated as the latest value of the store.")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ce(f){let e;return{c(){e=c("When unmonted, it will automatically unsubscribe.")},l(t){e=_(t,"When unmonted, it will automatically unsubscribe.")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function We(f){let e,t,n,$,s,l;return e=new Z({props:{$$slots:{default:[Ue]},$$scope:{ctx:f}}}),n=new Z({props:{$$slots:{default:[Ne]},$$scope:{ctx:f}}}),s=new Z({props:{$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment),$=R(),b(s.$$.fragment)},l(r){h(e.$$.fragment,r),t=S(r),h(n.$$.fragment,r),$=S(r),h(s.$$.fragment,r)},m(r,p){v(e,r,p),m(r,t,p),v(n,r,p),m(r,$,p),v(s,r,p),l=!0},p(r,p){const u={};p&2&&(u.$$scope={dirty:p,ctx:r}),e.$set(u);const g={};p&2&&(g.$$scope={dirty:p,ctx:r}),n.$set(g);const i={};p&2&&(i.$$scope={dirty:p,ctx:r}),s.$set(i)},i(r){l||(I(e.$$.fragment,r),I(n.$$.fragment,r),I(s.$$.fragment,r),l=!0)},o(r){T(e.$$.fragment,r),T(n.$$.fragment,r),T(s.$$.fragment,r),l=!1},d(r){O(e,r),r&&a(t),O(n,r),r&&a($),O(s,r)}}}function qe(f){let e;return{c(){e=c("store contract")},l(t){e=_(t,"store contract")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function De(f){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Le(f){let e,t,n,$,s,l;return t=new E({props:{$$slots:{default:[qe]},$$scope:{ctx:f}}}),$=new E({props:{$$slots:{default:[De]},$$scope:{ctx:f}}}),{c(){e=c("This is the power of the "),b(t.$$.fragment),n=c(". By following it we can reference the store value by using the "),b($.$$.fragment),s=c(" prefix and also assign to it like if it was a normal variable.")},l(r){e=_(r,"This is the power of the "),h(t.$$.fragment,r),n=_(r,". By following it we can reference the store value by using the "),h($.$$.fragment,r),s=_(r," prefix and also assign to it like if it was a normal variable.")},m(r,p){m(r,e,p),v(t,r,p),m(r,n,p),v($,r,p),m(r,s,p),l=!0},p(r,p){const u={};p&2&&(u.$$scope={dirty:p,ctx:r}),t.$set(u);const g={};p&2&&(g.$$scope={dirty:p,ctx:r}),$.$set(g)},i(r){l||(I(t.$$.fragment,r),I($.$$.fragment,r),l=!0)},o(r){T(t.$$.fragment,r),T($.$$.fragment,r),l=!1},d(r){r&&a(e),O(t,r),r&&a(n),O($,r),r&&a(s)}}}function Ye(f){let e;return{c(){e=c("So what is the store contract?")},l(t){e=_(t,"So what is the store contract?")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function ze(f){let e;return{c(){e=c("Your subscriber method needs to:")},l(t){e=_(t,"Your subscriber method needs to:")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ge(f){let e;return{c(){e=c("Be an object that")},l(t){e=_(t,"Be an object that")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ke(f){let e;return{c(){e=c("immediately")},l(t){e=_(t,"immediately")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Qe(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[Ke]},$$scope:{ctx:f}}}),{c(){e=c("Takes in a function and call that function "),b(t.$$.fragment),n=c(" (synchronously)")},l(s){e=_(s,"Takes in a function and call that function "),h(t.$$.fragment,s),n=_(s," (synchronously)")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function Ze(f){let e;return{c(){e=c("Returns a function that unsubscribes the function")},l(t){e=_(t,"Returns a function that unsubscribes the function")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Fe(f){let e;return{c(){e=c("At some point loops through the subscribers list and call them with the value of the store")},l(t){e=_(t,"At some point loops through the subscribers list and call them with the value of the store")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Je(f){let e;return{c(){e=c('(optional) Implements a set method that takes in a value that you update the store with when using $store as in for example $store = "hello"')},l(t){e=_(t,'(optional) Implements a set method that takes in a value that you update the store with when using $store as in for example $store = "hello"')},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function Ve(f){let e,t,n,$,s,l,r,p,u,g;return e=new Z({props:{$$slots:{default:[Ge]},$$scope:{ctx:f}}}),n=new Z({props:{$$slots:{default:[Qe]},$$scope:{ctx:f}}}),s=new Z({props:{$$slots:{default:[Ze]},$$scope:{ctx:f}}}),r=new Z({props:{$$slots:{default:[Fe]},$$scope:{ctx:f}}}),u=new Z({props:{$$slots:{default:[Je]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment),$=R(),b(s.$$.fragment),l=R(),b(r.$$.fragment),p=R(),b(u.$$.fragment)},l(i){h(e.$$.fragment,i),t=S(i),h(n.$$.fragment,i),$=S(i),h(s.$$.fragment,i),l=S(i),h(r.$$.fragment,i),p=S(i),h(u.$$.fragment,i)},m(i,k){v(e,i,k),m(i,t,k),v(n,i,k),m(i,$,k),v(s,i,k),m(i,l,k),v(r,i,k),m(i,p,k),v(u,i,k),g=!0},p(i,k){const B={};k&2&&(B.$$scope={dirty:k,ctx:i}),e.$set(B);const M={};k&2&&(M.$$scope={dirty:k,ctx:i}),n.$set(M);const H={};k&2&&(H.$$scope={dirty:k,ctx:i}),s.$set(H);const C={};k&2&&(C.$$scope={dirty:k,ctx:i}),r.$set(C);const x={};k&2&&(x.$$scope={dirty:k,ctx:i}),u.$set(x)},i(i){g||(I(e.$$.fragment,i),I(n.$$.fragment,i),I(s.$$.fragment,i),I(r.$$.fragment,i),I(u.$$.fragment,i),g=!0)},o(i){T(e.$$.fragment,i),T(n.$$.fragment,i),T(s.$$.fragment,i),T(r.$$.fragment,i),T(u.$$.fragment,i),g=!1},d(i){O(e,i),i&&a(t),O(n,i),i&&a($),O(s,i),i&&a(l),O(r,i),i&&a(p),O(u,i)}}}function Xe(f){let e;return{c(){e=c("$")},l(t){e=_(t,"$")},m(t,n){m(t,e,n)},d(t){t&&a(e)}}}function ts(f){let e,t,n,$;return t=new E({props:{$$slots:{default:[Xe]},$$scope:{ctx:f}}}),{c(){e=c("If you do that you will be able to use the "),b(t.$$.fragment),n=c(" prefix.")},l(s){e=_(s,"If you do that you will be able to use the "),h(t.$$.fragment,s),n=_(s," prefix.")},m(s,l){m(s,e,l),v(t,s,l),m(s,n,l),$=!0},p(s,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(I(t.$$.fragment,s),$=!0)},o(s){T(t.$$.fragment,s),$=!1},d(s){s&&a(e),O(t,s),s&&a(n)}}}function es(f){let e,t,n,$,s,l,r,p,u,g,i,k,B,M,H,C,x,d,j,Y,P,tt,z,et,G,st,K,nt,Q,rt,J,ot;return e=new W({props:{$$slots:{default:[xe]},$$scope:{ctx:f}}}),n=new W({props:{$$slots:{default:[Re]},$$scope:{ctx:f}}}),s=new at({props:{name:[{name:"App",comp:$t,raw:Kt,text:""},{name:"Input",comp:$t,raw:Qt,text:""},{name:"Output",comp:$t,raw:Zt,text:""},{name:"data.js",comp:$t,raw:Ft,text:""}]}}),r=new W({props:{$$slots:{default:[Be]},$$scope:{ctx:f}}}),u=new W({props:{$$slots:{default:[Ae]},$$scope:{ctx:f}}}),i=new W({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),B=new W({props:{$$slots:{default:[je]},$$scope:{ctx:f}}}),H=new W({props:{$$slots:{default:[Pe]},$$scope:{ctx:f}}}),x=new Et({props:{$$slots:{default:[We]},$$scope:{ctx:f}}}),j=new at({props:{name:[{name:"App2",comp:ft,raw:oe,text:""},{name:"Input2",comp:ft,raw:$e,text:"Here we can treat $store2 as a normal variable and assign to it to update the store value."},{name:"Output2",comp:ft,raw:fe,text:"Here we replaced all of the previous code just by using $store1 and $store2."},{name:"data2.js",comp:ft,raw:le,text:""}]}}),P=new W({props:{$$slots:{default:[Le]},$$scope:{ctx:f}}}),z=new Nt({props:{$$slots:{default:[Ye]},$$scope:{ctx:f}}}),G=new W({props:{$$slots:{default:[ze]},$$scope:{ctx:f}}}),K=new Et({props:{$$slots:{default:[Ve]},$$scope:{ctx:f}}}),Q=new W({props:{$$slots:{default:[ts]},$$scope:{ctx:f}}}),J=new at({props:{name:[{name:"App3",comp:lt,raw:ge,text:"store3 is our new store which fulfills the store contract allowing the use of $store3"},{name:"Input3",comp:lt,raw:be,text:""},{name:"Output3",comp:lt,raw:he,text:""},{name:"data3.js",comp:lt,raw:ve,text:""}]}}),{c(){b(e.$$.fragment),t=R(),b(n.$$.fragment),$=R(),b(s.$$.fragment),l=R(),b(r.$$.fragment),p=R(),b(u.$$.fragment),g=R(),b(i.$$.fragment),k=R(),b(B.$$.fragment),M=R(),b(H.$$.fragment),C=R(),b(x.$$.fragment),d=R(),b(j.$$.fragment),Y=R(),b(P.$$.fragment),tt=R(),b(z.$$.fragment),et=R(),b(G.$$.fragment),st=R(),b(K.$$.fragment),nt=R(),b(Q.$$.fragment),rt=R(),b(J.$$.fragment)},l(o){h(e.$$.fragment,o),t=S(o),h(n.$$.fragment,o),$=S(o),h(s.$$.fragment,o),l=S(o),h(r.$$.fragment,o),p=S(o),h(u.$$.fragment,o),g=S(o),h(i.$$.fragment,o),k=S(o),h(B.$$.fragment,o),M=S(o),h(H.$$.fragment,o),C=S(o),h(x.$$.fragment,o),d=S(o),h(j.$$.fragment,o),Y=S(o),h(P.$$.fragment,o),tt=S(o),h(z.$$.fragment,o),et=S(o),h(G.$$.fragment,o),st=S(o),h(K.$$.fragment,o),nt=S(o),h(Q.$$.fragment,o),rt=S(o),h(J.$$.fragment,o)},m(o,w){v(e,o,w),m(o,t,w),v(n,o,w),m(o,$,w),v(s,o,w),m(o,l,w),v(r,o,w),m(o,p,w),v(u,o,w),m(o,g,w),v(i,o,w),m(o,k,w),v(B,o,w),m(o,M,w),v(H,o,w),m(o,C,w),v(x,o,w),m(o,d,w),v(j,o,w),m(o,Y,w),v(P,o,w),m(o,tt,w),v(z,o,w),m(o,et,w),v(G,o,w),m(o,st,w),v(K,o,w),m(o,nt,w),v(Q,o,w),m(o,rt,w),v(J,o,w),ot=!0},p(o,w){const gt={};w&2&&(gt.$$scope={dirty:w,ctx:o}),e.$set(gt);const bt={};w&2&&(bt.$$scope={dirty:w,ctx:o}),n.$set(bt);const ht={};w&2&&(ht.$$scope={dirty:w,ctx:o}),r.$set(ht);const vt={};w&2&&(vt.$$scope={dirty:w,ctx:o}),u.$set(vt);const It={};w&2&&(It.$$scope={dirty:w,ctx:o}),i.$set(It);const Tt={};w&2&&(Tt.$$scope={dirty:w,ctx:o}),B.$set(Tt);const Ot={};w&2&&(Ot.$$scope={dirty:w,ctx:o}),H.$set(Ot);const xt={};w&2&&(xt.$$scope={dirty:w,ctx:o}),x.$set(xt);const kt={};w&2&&(kt.$$scope={dirty:w,ctx:o}),P.$set(kt);const Rt={};w&2&&(Rt.$$scope={dirty:w,ctx:o}),z.$set(Rt);const St={};w&2&&(St.$$scope={dirty:w,ctx:o}),G.$set(St);const Bt={};w&2&&(Bt.$$scope={dirty:w,ctx:o}),K.$set(Bt);const dt={};w&2&&(dt.$$scope={dirty:w,ctx:o}),Q.$set(dt)},i(o){ot||(I(e.$$.fragment,o),I(n.$$.fragment,o),I(s.$$.fragment,o),I(r.$$.fragment,o),I(u.$$.fragment,o),I(i.$$.fragment,o),I(B.$$.fragment,o),I(H.$$.fragment,o),I(x.$$.fragment,o),I(j.$$.fragment,o),I(P.$$.fragment,o),I(z.$$.fragment,o),I(G.$$.fragment,o),I(K.$$.fragment,o),I(Q.$$.fragment,o),I(J.$$.fragment,o),ot=!0)},o(o){T(e.$$.fragment,o),T(n.$$.fragment,o),T(s.$$.fragment,o),T(r.$$.fragment,o),T(u.$$.fragment,o),T(i.$$.fragment,o),T(B.$$.fragment,o),T(H.$$.fragment,o),T(x.$$.fragment,o),T(j.$$.fragment,o),T(P.$$.fragment,o),T(z.$$.fragment,o),T(G.$$.fragment,o),T(K.$$.fragment,o),T(Q.$$.fragment,o),T(J.$$.fragment,o),ot=!1},d(o){O(e,o),o&&a(t),O(n,o),o&&a($),O(s,o),o&&a(l),O(r,o),o&&a(p),O(u,o),o&&a(g),O(i,o),o&&a(k),O(B,o),o&&a(M),O(H,o),o&&a(C),O(x,o),o&&a(d),O(j,o),o&&a(Y),O(P,o),o&&a(tt),O(z,o),o&&a(et),O(G,o),o&&a(st),O(K,o),o&&a(nt),O(Q,o),o&&a(rt),O(J,o)}}}function ss(f){let e,t;const n=[f[0],Mt];let $={$$slots:{default:[es]},$$scope:{ctx:f}};for(let s=0;s<n.length;s+=1)$=pt($,n[s]);return e=new Ut({props:$}),{c(){b(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,l){v(e,s,l),t=!0},p(s,[l]){const r=l&1?Pt(n,[l&1&&Ht(s[0]),l&0&&Ht(Mt)]):{};l&2&&(r.$$scope={dirty:l,ctx:s}),e.$set(r)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}const Mt={title:"Svelte store contract",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function ns(f,e,t){return f.$$set=n=>{t(0,e=pt(pt({},e),yt(n)))},e=yt(e),[e]}class ms extends q{constructor(e){super(),D(this,e,ns,ss,L,{})}}export{ms as default,Mt as metadata};
