import{S as z,i as H,s as K,k as I,a as k,q as _,l as N,c as M,m as Z,r as g,h as l,n as dt,b as i,D as F,T as J,H as O,o as Ct,w as ft,a7 as Tt,u as vt,y as w,z as b,A as d,g as v,d as C,B as T,K as ut,L as kt,M as gt,N as wt}from"./index.0b5cc0d7.js";import{M as Mt,P as j}from"./mdsvex-layout-notes.c527e9b3.js";import{S as G}from"./ShowCode.1ad00a73.js";import{S as A}from"./Strong.272c5f79.js";function Rt(p){let t,e,s,$,r,f;return{c(){t=I("input"),e=k(),s=I("button"),$=_("Reset"),this.h()},l(n){t=N(n,"INPUT",{type:!0}),e=M(n),s=N(n,"BUTTON",{});var m=Z(s);$=g(m,"Reset"),m.forEach(l),this.h()},h(){dt(t,"type","text")},m(n,m){i(n,t,m),p[2](t),i(n,e,m),i(n,s,m),F(s,$),r||(f=J(s,"click",p[1]),r=!0)},p:O,i:O,o:O,d(n){n&&l(t),p[2](null),n&&l(e),n&&l(s),r=!1,f()}}}function At(p,t,e){let s;function $(){e(0,s.value="",s)}Ct(()=>{console.log(s)});function r(f){ft[f?"unshift":"push"](()=>{s=f,e(0,s)})}return[s,$,r]}class Ot extends z{constructor(t){super(),H(this,t,At,Rt,K,{})}}const ht=`<script>\r
	import { onMount } from "svelte";\r
	let element;\r
	function reset() {\r
		element.value = "";\r
	}\r
	onMount(() => {\r
		console.log(element);\r
	});\r
<\/script>\r
\r
<input bind:this={element} type="text" />\r
\r
<button on:click={reset}>Reset</button>\r
`;function It(p){let t,e,s,$,r,f;return{c(){t=I("input"),e=k(),s=I("button"),$=_("Reset"),this.h()},l(n){t=N(n,"INPUT",{type:!0}),e=M(n),s=N(n,"BUTTON",{});var m=Z(s);$=g(m,"Reset"),m.forEach(l),this.h()},h(){dt(t,"type","text")},m(n,m){i(n,t,m),p[2](t),i(n,e,m),i(n,s,m),F(s,$),r||(f=J(s,"click",p[1]),r=!0)},p:O,i:O,o:O,d(n){n&&l(t),p[2](null),n&&l(e),n&&l(s),r=!1,f()}}}function Nt(p,t,e){let s;function $(){e(0,s.value="",s)}function r(f){ft[f?"unshift":"push"](()=>{s=f,e(0,s)})}return[s,$,r]}class Dt extends z{constructor(t){super(),H(this,t,Nt,It,K,{})}}const Et=`<script>\r
	let element;\r
	function reset() {\r
		element.value = "";\r
	}\r
<\/script>\r
\r
<input bind:this={element} type="text" />\r
\r
<button on:click={reset}>Reset</button>`;function St(p){let t,e,s,$;return{c(){t=I("button"),e=_(p[0])},l(r){t=N(r,"BUTTON",{});var f=Z(t);e=g(f,p[0]),f.forEach(l)},m(r,f){i(r,t,f),F(t,e),s||($=J(t,"click",p[1]),s=!0)},p(r,[f]){f&1&&vt(e,r[0])},i:O,o:O,d(r){r&&l(t),s=!1,$()}}}function Ut(p,t,e){let{count:s=0}=t;function $(){e(0,s=0)}function r(){e(0,s++,s)}return p.$$set=f=>{"count"in f&&e(0,s=f.count)},[s,r,$]}class xt extends z{constructor(t){super(),H(this,t,Ut,St,K,{count:0,reset:2})}get count(){return this.$$.ctx[0]}set count(t){this.$$set({count:t}),Tt()}get reset(){return this.$$.ctx[2]}}function yt(p){let t,e,s,$,r,f,n,m={};return t=new xt({props:m}),p[2](t),{c(){w(t.$$.fragment),e=k(),s=I("button"),$=_("Log Component.svelte's Count")},l(u){b(t.$$.fragment,u),e=M(u),s=N(u,"BUTTON",{});var a=Z(s);$=g(a,"Log Component.svelte's Count"),a.forEach(l)},m(u,a){d(t,u,a),i(u,e,a),i(u,s,a),F(s,$),r=!0,f||(n=J(s,"click",p[1]),f=!0)},p(u,[a]){const R={};t.$set(R)},i(u){r||(v(t.$$.fragment,u),r=!0)},o(u){C(t.$$.fragment,u),r=!1},d(u){p[2](null),T(t,u),u&&l(e),u&&l(s),f=!1,n()}}}function Bt(p,t,e){let s;function $(){console.log(s.count)}function r(f){ft[f?"unshift":"push"](()=>{s=f,e(0,s)})}return[s,$,r]}class Lt extends z{constructor(t){super(),H(this,t,Bt,yt,K,{})}}const Pt=`<script>\r
	let myComponent;\r
	function logCount() {\r
		console.log(myComponent.count);\r
	}\r
	import Component from "./Component.svelte";\r
<\/script>\r
\r
<Component bind:this={myComponent} />\r
\r
<button on:click={logCount}>Log Component.svelte's Count</button>\r
`;function qt(p){let t,e,s,$;return{c(){t=I("button"),e=_(p[0])},l(r){t=N(r,"BUTTON",{});var f=Z(t);e=g(f,p[0]),f.forEach(l)},m(r,f){i(r,t,f),F(t,e),s||($=J(t,"click",p[1]),s=!0)},p(r,[f]){f&1&&vt(e,r[0])},i:O,o:O,d(r){r&&l(t),s=!1,$()}}}function Wt(p,t,e){let s=0;function $(){e(0,s=0)}function r(){e(0,s++,s)}return[s,r,$]}class jt extends z{constructor(t){super(),H(this,t,Wt,qt,K,{reset:2})}get reset(){return this.$$.ctx[2]}}function zt(p){let t,e,s,$,r,f,n,m={};return t=new jt({props:m}),p[2](t),{c(){w(t.$$.fragment),e=k(),s=I("button"),$=_("Reset Component2.svelte's Count")},l(u){b(t.$$.fragment,u),e=M(u),s=N(u,"BUTTON",{});var a=Z(s);$=g(a,"Reset Component2.svelte's Count"),a.forEach(l)},m(u,a){d(t,u,a),i(u,e,a),i(u,s,a),F(s,$),r=!0,f||(n=J(s,"click",p[1]),f=!0)},p(u,[a]){const R={};t.$set(R)},i(u){r||(v(t.$$.fragment,u),r=!0)},o(u){C(t.$$.fragment,u),r=!1},d(u){p[2](null),T(t,u),u&&l(e),u&&l(s),f=!1,n()}}}function Ht(p,t,e){let s;function $(){s.reset()}function r(f){ft[f?"unshift":"push"](()=>{s=f,e(0,s)})}return[s,$,r]}class Kt extends z{constructor(t){super(),H(this,t,Ht,zt,K,{})}}const Zt=`<script>\r
	let myComponent;\r
	function reset() {\r
		myComponent.reset();\r
	}\r
	import Component2 from "./Component2.svelte";\r
<\/script>\r
\r
<Component2 bind:this={myComponent} />\r
\r
<button on:click={reset}>Reset Component2.svelte's Count</button>\r
`,Ft=`<!-- we also need this to create getters and setters for the component's props -->\r
<svelte:options accessors />\r
\r
<script>\r
	export let count = 0;\r
\r
	// exporting a function as a prop\r
	export function reset() {\r
		count = 0;\r
	}\r
	function inc() {\r
		count++;\r
	}\r
<\/script>\r
\r
<button on:click={inc}>{count}</button>\r
`,Gt=`<script>\r
	let count = 0;\r
\r
	// exporting a function as a prop (or, with bind:this, as a method)\r
	export function reset() {\r
		count = 0;\r
	}\r
	function inc() {\r
		count++;\r
	}\r
<\/script>\r
\r
<button on:click={inc}>{count}</button>\r
`;function Jt(p){let t;return{c(){t=_("bind:this")},l(e){t=g(e,"bind:this")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function Qt(p){let t;return{c(){t=_("one-way binding")},l(e){t=g(e,"one-way binding")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function Vt(p){let t,e,s,$,r,f;return e=new A({props:{$$slots:{default:[Jt]},$$scope:{ctx:p}}}),$=new A({props:{$$slots:{default:[Qt]},$$scope:{ctx:p}}}),{c(){t=_("If we want to get a reference to a DOM element we can use "),w(e.$$.fragment),s=_(". bind:this is a "),w($.$$.fragment),r=_(".")},l(n){t=g(n,"If we want to get a reference to a DOM element we can use "),b(e.$$.fragment,n),s=g(n,". bind:this is a "),b($.$$.fragment,n),r=g(n,".")},m(n,m){i(n,t,m),d(e,n,m),i(n,s,m),d($,n,m),i(n,r,m),f=!0},p(n,m){const u={};m&2&&(u.$$scope={dirty:m,ctx:n}),e.$set(u);const a={};m&2&&(a.$$scope={dirty:m,ctx:n}),$.$set(a)},i(n){f||(v(e.$$.fragment,n),v($.$$.fragment,n),f=!0)},o(n){C(e.$$.fragment,n),C($.$$.fragment,n),f=!1},d(n){n&&l(t),T(e,n),n&&l(s),T($,n),n&&l(r)}}}function Xt(p){let t;return{c(){t=_("undefined")},l(e){t=g(e,"undefined")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function Yt(p){let t;return{c(){t=_("when Svelte creates the element and mounts it onto the DOM")},l(e){t=g(e,"when Svelte creates the element and mounts it onto the DOM")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function te(p){let t,e,s,$,r,f;return e=new A({props:{$$slots:{default:[Xt]},$$scope:{ctx:p}}}),$=new A({props:{$$slots:{default:[Yt]},$$scope:{ctx:p}}}),{c(){t=_("If we have a variable and assign an element to it using bind:this and try to console.log() immediately it we will get "),w(e.$$.fragment),s=_(" because it is getting defined "),w($.$$.fragment),r=_(".")},l(n){t=g(n,"If we have a variable and assign an element to it using bind:this and try to console.log() immediately it we will get "),b(e.$$.fragment,n),s=g(n," because it is getting defined "),b($.$$.fragment,n),r=g(n,".")},m(n,m){i(n,t,m),d(e,n,m),i(n,s,m),d($,n,m),i(n,r,m),f=!0},p(n,m){const u={};m&2&&(u.$$scope={dirty:m,ctx:n}),e.$set(u);const a={};m&2&&(a.$$scope={dirty:m,ctx:n}),$.$set(a)},i(n){f||(v(e.$$.fragment,n),v($.$$.fragment,n),f=!0)},o(n){C(e.$$.fragment,n),C($.$$.fragment,n),f=!1},d(n){n&&l(t),T(e,n),n&&l(s),T($,n),n&&l(r)}}}function ee(p){let t;return{c(){t=_("onMount lifecycle event")},l(e){t=g(e,"onMount lifecycle event")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function ne(p){let t;return{c(){t=_("the component is mounted onto the DOM")},l(e){t=g(e,"the component is mounted onto the DOM")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function se(p){let t,e,s,$,r,f;return e=new A({props:{$$slots:{default:[ee]},$$scope:{ctx:p}}}),$=new A({props:{$$slots:{default:[ne]},$$scope:{ctx:p}}}),{c(){t=_("To get around this we can use the "),w(e.$$.fragment),s=_(" that is run when "),w($.$$.fragment),r=_(".")},l(n){t=g(n,"To get around this we can use the "),b(e.$$.fragment,n),s=g(n," that is run when "),b($.$$.fragment,n),r=g(n,".")},m(n,m){i(n,t,m),d(e,n,m),i(n,s,m),d($,n,m),i(n,r,m),f=!0},p(n,m){const u={};m&2&&(u.$$scope={dirty:m,ctx:n}),e.$set(u);const a={};m&2&&(a.$$scope={dirty:m,ctx:n}),$.$set(a)},i(n){f||(v(e.$$.fragment,n),v($.$$.fragment,n),f=!0)},o(n){C(e.$$.fragment,n),C($.$$.fragment,n),f=!1},d(n){n&&l(t),T(e,n),n&&l(s),T($,n),n&&l(r)}}}function oe(p){let t;return{c(){t=_("To be clear, if we don't use the element right away the onMount event isn't necessarily needed. In a simple case this would be enough:")},l(e){t=g(e,"To be clear, if we don't use the element right away the onMount event isn't necessarily needed. In a simple case this would be enough:")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function re(p){let t;return{c(){t=_("component")},l(e){t=g(e,"component")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function $e(p){let t,e,s,$;return e=new A({props:{$$slots:{default:[re]},$$scope:{ctx:p}}}),{c(){t=_("If we use bind:this on a "),w(e.$$.fragment),s=_(" we get access to its props as well.")},l(r){t=g(r,"If we use bind:this on a "),b(e.$$.fragment,r),s=g(r," we get access to its props as well.")},m(r,f){i(r,t,f),d(e,r,f),i(r,s,f),$=!0},p(r,f){const n={};f&2&&(n.$$scope={dirty:f,ctx:r}),e.$set(n)},i(r){$||(v(e.$$.fragment,r),$=!0)},o(r){C(e.$$.fragment,r),$=!1},d(r){r&&l(t),T(e,r),r&&l(s)}}}function fe(p){let t,e;return{c(){t=I("code"),e=_("<svelte:options accessors />")},l(s){t=N(s,"CODE",{});var $=Z(t);e=g($,"<svelte:options accessors />"),$.forEach(l)},m(s,$){i(s,t,$),F(t,e)},p:O,d(s){s&&l(t)}}}function ue(p){let t;return{c(){t=_("count")},l(e){t=g(e,"count")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function pe(p){let t;return{c(){t=_("functions")},l(e){t=g(e,"functions")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function me(p){let t,e,s,$,r,f,n,m;return e=new A({props:{$$slots:{default:[fe]},$$scope:{ctx:p}}}),$=new A({props:{$$slots:{default:[ue]},$$scope:{ctx:p}}}),f=new A({props:{$$slots:{default:[pe]},$$scope:{ctx:p}}}),{c(){t=_("We do need "),w(e.$$.fragment),s=_(" in order to get access to the "),w($.$$.fragment),r=_(" variable since it wasn't readonly, but for "),w(f.$$.fragment),n=_(" we don't need it.")},l(u){t=g(u,"We do need "),b(e.$$.fragment,u),s=g(u," in order to get access to the "),b($.$$.fragment,u),r=g(u," variable since it wasn't readonly, but for "),b(f.$$.fragment,u),n=g(u," we don't need it.")},m(u,a){i(u,t,a),d(e,u,a),i(u,s,a),d($,u,a),i(u,r,a),d(f,u,a),i(u,n,a),m=!0},p(u,a){const R={};a&2&&(R.$$scope={dirty:a,ctx:u}),e.$set(R);const U={};a&2&&(U.$$scope={dirty:a,ctx:u}),$.$set(U);const h={};a&2&&(h.$$scope={dirty:a,ctx:u}),f.$set(h)},i(u){m||(v(e.$$.fragment,u),v($.$$.fragment,u),v(f.$$.fragment,u),m=!0)},o(u){C(e.$$.fragment,u),C($.$$.fragment,u),C(f.$$.fragment,u),m=!1},d(u){u&&l(t),T(e,u),u&&l(s),T($,u),u&&l(r),T(f,u),u&&l(n)}}}function le(p){let t;return{c(){t=_("bind:this")},l(e){t=g(e,"bind:this")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function ie(p){let t;return{c(){t=_("methods")},l(e){t=g(e,"methods")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function ce(p){let t,e,s,$,r,f;return e=new A({props:{$$slots:{default:[le]},$$scope:{ctx:p}}}),$=new A({props:{$$slots:{default:[ie]},$$scope:{ctx:p}}}),{c(){t=_("This way we can export functions from a component and use it in another component where we bind to it using "),w(e.$$.fragment),s=_(" so we can use its "),w($.$$.fragment),r=_(".")},l(n){t=g(n,"This way we can export functions from a component and use it in another component where we bind to it using "),b(e.$$.fragment,n),s=g(n," so we can use its "),b($.$$.fragment,n),r=g(n,".")},m(n,m){i(n,t,m),d(e,n,m),i(n,s,m),d($,n,m),i(n,r,m),f=!0},p(n,m){const u={};m&2&&(u.$$scope={dirty:m,ctx:n}),e.$set(u);const a={};m&2&&(a.$$scope={dirty:m,ctx:n}),$.$set(a)},i(n){f||(v(e.$$.fragment,n),v($.$$.fragment,n),f=!0)},o(n){C(e.$$.fragment,n),C($.$$.fragment,n),f=!1},d(n){n&&l(t),T(e,n),n&&l(s),T($,n),n&&l(r)}}}function ae(p){let t,e,s,$,r,f,n,m,u,a,R,U,h,Q,x,V,D,X,y,Y,B,tt,L,et,E,nt,P,st,q,ot,W,rt,S,$t;return t=new j({props:{$$slots:{default:[Vt]},$$scope:{ctx:p}}}),s=new j({props:{$$slots:{default:[te]},$$scope:{ctx:p}}}),r=new j({props:{$$slots:{default:[se]},$$scope:{ctx:p}}}),n=new Ot({}),u=new G({props:{code:ht,name:"App.svelte"}}),R=new j({props:{$$slots:{default:[oe]},$$scope:{ctx:p}}}),h=new Dt({}),x=new G({props:{code:Et,name:"App2.svelte"}}),D=new j({props:{$$slots:{default:[$e]},$$scope:{ctx:p}}}),y=new Lt({}),B=new G({props:{code:Pt,name:"App3.svelte"}}),L=new G({props:{code:Ft,name:"Component.svelte"}}),E=new j({props:{$$slots:{default:[me]},$$scope:{ctx:p}}}),P=new Kt({}),q=new G({props:{code:Zt,name:"App4.svelte"}}),W=new G({props:{code:Gt,name:"Component2.svelte"}}),S=new j({props:{$$slots:{default:[ce]},$$scope:{ctx:p}}}),{c(){w(t.$$.fragment),e=k(),w(s.$$.fragment),$=k(),w(r.$$.fragment),f=k(),w(n.$$.fragment),m=k(),w(u.$$.fragment),a=k(),w(R.$$.fragment),U=k(),w(h.$$.fragment),Q=k(),w(x.$$.fragment),V=k(),w(D.$$.fragment),X=k(),w(y.$$.fragment),Y=k(),w(B.$$.fragment),tt=k(),w(L.$$.fragment),et=k(),w(E.$$.fragment),nt=k(),w(P.$$.fragment),st=k(),w(q.$$.fragment),ot=k(),w(W.$$.fragment),rt=k(),w(S.$$.fragment)},l(o){b(t.$$.fragment,o),e=M(o),b(s.$$.fragment,o),$=M(o),b(r.$$.fragment,o),f=M(o),b(n.$$.fragment,o),m=M(o),b(u.$$.fragment,o),a=M(o),b(R.$$.fragment,o),U=M(o),b(h.$$.fragment,o),Q=M(o),b(x.$$.fragment,o),V=M(o),b(D.$$.fragment,o),X=M(o),b(y.$$.fragment,o),Y=M(o),b(B.$$.fragment,o),tt=M(o),b(L.$$.fragment,o),et=M(o),b(E.$$.fragment,o),nt=M(o),b(P.$$.fragment,o),st=M(o),b(q.$$.fragment,o),ot=M(o),b(W.$$.fragment,o),rt=M(o),b(S.$$.fragment,o)},m(o,c){d(t,o,c),i(o,e,c),d(s,o,c),i(o,$,c),d(r,o,c),i(o,f,c),d(n,o,c),i(o,m,c),d(u,o,c),i(o,a,c),d(R,o,c),i(o,U,c),d(h,o,c),i(o,Q,c),d(x,o,c),i(o,V,c),d(D,o,c),i(o,X,c),d(y,o,c),i(o,Y,c),d(B,o,c),i(o,tt,c),d(L,o,c),i(o,et,c),d(E,o,c),i(o,nt,c),d(P,o,c),i(o,st,c),d(q,o,c),i(o,ot,c),d(W,o,c),i(o,rt,c),d(S,o,c),$t=!0},p(o,c){const pt={};c&2&&(pt.$$scope={dirty:c,ctx:o}),t.$set(pt);const mt={};c&2&&(mt.$$scope={dirty:c,ctx:o}),s.$set(mt);const lt={};c&2&&(lt.$$scope={dirty:c,ctx:o}),r.$set(lt);const it={};c&2&&(it.$$scope={dirty:c,ctx:o}),R.$set(it);const ct={};c&2&&(ct.$$scope={dirty:c,ctx:o}),D.$set(ct);const at={};c&2&&(at.$$scope={dirty:c,ctx:o}),E.$set(at);const _t={};c&2&&(_t.$$scope={dirty:c,ctx:o}),S.$set(_t)},i(o){$t||(v(t.$$.fragment,o),v(s.$$.fragment,o),v(r.$$.fragment,o),v(n.$$.fragment,o),v(u.$$.fragment,o),v(R.$$.fragment,o),v(h.$$.fragment,o),v(x.$$.fragment,o),v(D.$$.fragment,o),v(y.$$.fragment,o),v(B.$$.fragment,o),v(L.$$.fragment,o),v(E.$$.fragment,o),v(P.$$.fragment,o),v(q.$$.fragment,o),v(W.$$.fragment,o),v(S.$$.fragment,o),$t=!0)},o(o){C(t.$$.fragment,o),C(s.$$.fragment,o),C(r.$$.fragment,o),C(n.$$.fragment,o),C(u.$$.fragment,o),C(R.$$.fragment,o),C(h.$$.fragment,o),C(x.$$.fragment,o),C(D.$$.fragment,o),C(y.$$.fragment,o),C(B.$$.fragment,o),C(L.$$.fragment,o),C(E.$$.fragment,o),C(P.$$.fragment,o),C(q.$$.fragment,o),C(W.$$.fragment,o),C(S.$$.fragment,o),$t=!1},d(o){T(t,o),o&&l(e),T(s,o),o&&l($),T(r,o),o&&l(f),T(n,o),o&&l(m),T(u,o),o&&l(a),T(R,o),o&&l(U),T(h,o),o&&l(Q),T(x,o),o&&l(V),T(D,o),o&&l(X),T(y,o),o&&l(Y),T(B,o),o&&l(tt),T(L,o),o&&l(et),T(E,o),o&&l(nt),T(P,o),o&&l(st),T(q,o),o&&l(ot),T(W,o),o&&l(rt),T(S,o)}}}function _e(p){let t,e;const s=[p[0],bt];let $={$$slots:{default:[ae]},$$scope:{ctx:p}};for(let r=0;r<s.length;r+=1)$=ut($,s[r]);return t=new Mt({props:$}),{c(){w(t.$$.fragment)},l(r){b(t.$$.fragment,r)},m(r,f){d(t,r,f),e=!0},p(r,[f]){const n=f&1?kt(s,[f&1&&gt(r[0]),f&0&&gt(bt)]):{};f&2&&(n.$$scope={dirty:f,ctx:r}),t.$set(n)},i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){C(t.$$.fragment,r),e=!1},d(r){T(t,r)}}}const bt={title:"bind:this",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-05T00:00:00.000Z",layout:"notes"};function ge(p,t,e){return p.$$set=s=>{e(0,t=ut(ut({},t),wt(s)))},t=wt(t),[t]}class Ce extends z{constructor(t){super(),H(this,t,ge,_e,K,{})}}export{Ce as default,bt as metadata};