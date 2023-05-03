import{S as q,i as L,s as N,k as z,l as C,n as Y,b as m,T as et,H as E,h as p,q as c,m as y,r as _,D as J,u as st,o as nt,y as w,a as O,z as b,c as R,A as v,g as d,d as h,B as k,K as W,L as rt,M as Q,N as V}from"./index.0b5cc0d7.js";import{M as ot,P as B}from"./mdsvex-layout-notes.c527e9b3.js";import{w as $t}from"./index.153ae70b.js";import{S as ft}from"./ShowMany.5b53376e.js";import{S as T}from"./Strong.272c5f79.js";let tt=$t("");function at(a){let e,t,r;return{c(){e=z("input"),this.h()},l($){e=C($,"INPUT",{type:!0}),this.h()},h(){Y(e,"type","text")},m($,s){m($,e,s),t||(r=et(e,"input",a[0]),t=!0)},p:E,i:E,o:E,d($){$&&p(e),t=!1,r()}}}function lt(a){return[t=>tt.set(t.currentTarget.value)]}class ut extends q{constructor(e){super(),L(this,e,lt,at,N,{})}}function pt(a){let e,t,r;return{c(){e=z("h1"),t=c("value: "),r=c(a[0])},l($){e=C($,"H1",{});var s=y(e);t=_(s,"value: "),r=_(s,a[0]),s.forEach(p)},m($,s){m($,e,s),J(e,t),J(e,r)},p($,[s]){s&1&&st(r,$[0])},i:E,o:E,d($){$&&p(e)}}}function mt(a,e,t){let r;return nt(()=>tt.subscribe($=>{t(0,r=$)})),[r]}class ct extends q{constructor(e){super(),L(this,e,mt,pt,N,{})}}function _t(a){let e,t,r,$;return e=new ut({}),r=new ct({}),{c(){w(e.$$.fragment),t=O(),w(r.$$.fragment)},l(s){b(e.$$.fragment,s),t=R(s),b(r.$$.fragment,s)},m(s,l){v(e,s,l),m(s,t,l),v(r,s,l),$=!0},p:E,i(s){$||(d(e.$$.fragment,s),d(r.$$.fragment,s),$=!0)},o(s){h(e.$$.fragment,s),h(r.$$.fragment,s),$=!1},d(s){k(e,s),s&&p(t),k(r,s)}}}class H extends q{constructor(e){super(),L(this,e,null,_t,N,{})}}const it=`<script>\r
	import Input from "./Input.svelte";\r
	import Output from "./Output.svelte";\r
<\/script>\r
\r
<Input />\r
<Output />\r
`,gt=`<script>\r
	import { valueStore } from "./data";\r
<\/script>\r
\r
<input on:input={(e) => valueStore.set(e.currentTarget.value)} type="text" />\r
`,wt=`<script>\r
	import { valueStore } from "./data";\r
	import { onMount } from "svelte";\r
\r
	let _value;\r
\r
	onMount(() => {\r
		return valueStore.subscribe((value) => {\r
			_value = value;\r
		});\r
	});\r
<\/script>\r
\r
<h1>value: {_value}</h1>\r
`,bt=`import { writable, readable } from "svelte/store";\r
\r
export let valueStore = writable("");\r
`;function vt(a){let e;return{c(){e=c("store functions")},l(t){e=_(t,"store functions")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function dt(a){let e;return{c(){e=c("writable store")},l(t){e=_(t,"writable store")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function ht(a){let e,t,r,$,s,l;return t=new T({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),$=new T({props:{$$slots:{default:[dt]},$$scope:{ctx:a}}}),{c(){e=c("Svelte has a few built-in "),w(t.$$.fragment),r=c(", one of them being the "),w($.$$.fragment),s=c(".")},l(n){e=_(n,"Svelte has a few built-in "),b(t.$$.fragment,n),r=_(n,", one of them being the "),b($.$$.fragment,n),s=_(n,".")},m(n,u){m(n,e,u),v(t,n,u),m(n,r,u),v($,n,u),m(n,s,u),l=!0},p(n,u){const S={};u&2&&(S.$$scope={dirty:u,ctx:n}),t.$set(S);const M={};u&2&&(M.$$scope={dirty:u,ctx:n}),$.$set(M)},i(n){l||(d(t.$$.fragment,n),d($.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),h($.$$.fragment,n),l=!1},d(n){n&&p(e),k(t,n),n&&p(r),k($,n),n&&p(s)}}}function kt(a){let e;return{c(){e=c('importing them from "svelte/store"')},l(t){e=_(t,'importing them from "svelte/store"')},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function St(a){let e,t,r,$;return t=new T({props:{$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){e=c("We use them by "),w(t.$$.fragment),r=c(" like this:")},l(s){e=_(s,"We use them by "),b(t.$$.fragment,s),r=_(s," like this:")},m(s,l){m(s,e,l),v(t,s,l),m(s,r,l),$=!0},p(s,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:s}),t.$set(n)},i(s){$||(d(t.$$.fragment,s),$=!0)},o(s){h(t.$$.fragment,s),$=!1},d(s){s&&p(e),k(t,s),s&&p(r)}}}function Mt(a){let e;return{c(){e=c("writable")},l(t){e=_(t,"writable")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Tt(a){let e;return{c(){e=c("read")},l(t){e=_(t,"read")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function xt(a){let e;return{c(){e=c("write")},l(t){e=_(t,"write")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function It(a){let e;return{c(){e=c("readable")},l(t){e=_(t,"readable")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function At(a){let e;return{c(){e=c("read only")},l(t){e=_(t,"read only")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Ot(a){let e,t,r,$,s,l,n,u,S,M,A;return e=new T({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),r=new T({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}}}),s=new T({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),n=new T({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),S=new T({props:{$$slots:{default:[At]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),t=c(" is a store where we can both "),w(r.$$.fragment),$=c(" and "),w(s.$$.fragment),l=c(", and "),w(n.$$.fragment),u=c(" is a store that is "),w(S.$$.fragment),M=c(".")},l(f){b(e.$$.fragment,f),t=_(f," is a store where we can both "),b(r.$$.fragment,f),$=_(f," and "),b(s.$$.fragment,f),l=_(f,", and "),b(n.$$.fragment,f),u=_(f," is a store that is "),b(S.$$.fragment,f),M=_(f,".")},m(f,g){v(e,f,g),m(f,t,g),v(r,f,g),m(f,$,g),v(s,f,g),m(f,l,g),v(n,f,g),m(f,u,g),v(S,f,g),m(f,M,g),A=!0},p(f,g){const I={};g&2&&(I.$$scope={dirty:g,ctx:f}),e.$set(I);const j={};g&2&&(j.$$scope={dirty:g,ctx:f}),r.$set(j);const x={};g&2&&(x.$$scope={dirty:g,ctx:f}),s.$set(x);const P={};g&2&&(P.$$scope={dirty:g,ctx:f}),n.$set(P);const o={};g&2&&(o.$$scope={dirty:g,ctx:f}),S.$set(o)},i(f){A||(d(e.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),d(n.$$.fragment,f),d(S.$$.fragment,f),A=!0)},o(f){h(e.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),h(n.$$.fragment,f),h(S.$$.fragment,f),A=!1},d(f){k(e,f),f&&p(t),k(r,f),f&&p($),k(s,f),f&&p(l),k(n,f),f&&p(u),k(S,f),f&&p(M)}}}function Rt(a){let e;return{c(){e=c("subscribe")},l(t){e=_(t,"subscribe")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function jt(a){let e;return{c(){e=c("subscribe to the store")},l(t){e=_(t,"subscribe to the store")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Pt(a){let e,t,r,$,s,l;return t=new T({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),$=new T({props:{$$slots:{default:[jt]},$$scope:{ctx:a}}}),{c(){e=c("Both of these stores have a method called "),w(t.$$.fragment),r=c(" that allows you to "),w($.$$.fragment),s=c(".")},l(n){e=_(n,"Both of these stores have a method called "),b(t.$$.fragment,n),r=_(n," that allows you to "),b($.$$.fragment,n),s=_(n,".")},m(n,u){m(n,e,u),v(t,n,u),m(n,r,u),v($,n,u),m(n,s,u),l=!0},p(n,u){const S={};u&2&&(S.$$scope={dirty:u,ctx:n}),t.$set(S);const M={};u&2&&(M.$$scope={dirty:u,ctx:n}),$.$set(M)},i(n){l||(d(t.$$.fragment,n),d($.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),h($.$$.fragment,n),l=!1},d(n){n&&p(e),k(t,n),n&&p(r),k($,n),n&&p(s)}}}function Bt(a){let e;return{c(){e=c("set")},l(t){e=_(t,"set")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Et(a){let e;return{c(){e=c("set (and update) the value")},l(t){e=_(t,"set (and update) the value")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Ht(a){let e,t,r,$,s,l;return t=new T({props:{$$slots:{default:[Bt]},$$scope:{ctx:a}}}),$=new T({props:{$$slots:{default:[Et]},$$scope:{ctx:a}}}),{c(){e=c("The writable store has a method called "),w(t.$$.fragment),r=c(" that allows you to "),w($.$$.fragment),s=c(".")},l(n){e=_(n,"The writable store has a method called "),b(t.$$.fragment,n),r=_(n," that allows you to "),b($.$$.fragment,n),s=_(n,".")},m(n,u){m(n,e,u),v(t,n,u),m(n,r,u),v($,n,u),m(n,s,u),l=!0},p(n,u){const S={};u&2&&(S.$$scope={dirty:u,ctx:n}),t.$set(S);const M={};u&2&&(M.$$scope={dirty:u,ctx:n}),$.$set(M)},i(n){l||(d(t.$$.fragment,n),d($.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),h($.$$.fragment,n),l=!1},d(n){n&&p(e),k(t,n),n&&p(r),k($,n),n&&p(s)}}}function qt(a){let e;return{c(){e=c("writable store")},l(t){e=_(t,"writable store")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Lt(a){let e,t,r,$;return t=new T({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),{c(){e=c("As you can see we could remove a lot of code by using the built in "),w(t.$$.fragment),r=c(" functionality.")},l(s){e=_(s,"As you can see we could remove a lot of code by using the built in "),b(t.$$.fragment,s),r=_(s," functionality.")},m(s,l){m(s,e,l),v(t,s,l),m(s,r,l),$=!0},p(s,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:s}),t.$set(n)},i(s){$||(d(t.$$.fragment,s),$=!0)},o(s){h(t.$$.fragment,s),$=!1},d(s){s&&p(e),k(t,s),s&&p(r)}}}function Nt(a){let e,t,r,$,s,l='<code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> writable<span class="token punctuation">,</span> readable <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte/store"</span><span class="token punctuation">;</span></code>',n,u,S,M,A,f,g,I,j,x,P;return e=new B({props:{$$slots:{default:[ht]},$$scope:{ctx:a}}}),r=new B({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),u=new B({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),M=new B({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}}),f=new B({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),I=new ft({props:{name:[{name:"App",comp:H,raw:it,text:""},{name:"Input",comp:H,raw:gt,text:""},{name:"Output",comp:H,raw:wt,text:""},{name:"data.js",comp:H,raw:bt,text:""}]}}),x=new B({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),t=O(),w(r.$$.fragment),$=O(),s=z("pre"),n=O(),w(u.$$.fragment),S=O(),w(M.$$.fragment),A=O(),w(f.$$.fragment),g=O(),w(I.$$.fragment),j=O(),w(x.$$.fragment),this.h()},l(o){b(e.$$.fragment,o),t=R(o),b(r.$$.fragment,o),$=R(o),s=C(o,"PRE",{class:!0});var i=y(s);i.forEach(p),n=R(o),b(u.$$.fragment,o),S=R(o),b(M.$$.fragment,o),A=R(o),b(f.$$.fragment,o),g=R(o),b(I.$$.fragment,o),j=R(o),b(x.$$.fragment,o),this.h()},h(){Y(s,"class","language-js")},m(o,i){v(e,o,i),m(o,t,i),v(r,o,i),m(o,$,i),m(o,s,i),s.innerHTML=l,m(o,n,i),v(u,o,i),m(o,S,i),v(M,o,i),m(o,A,i),v(f,o,i),m(o,g,i),v(I,o,i),m(o,j,i),v(x,o,i),P=!0},p(o,i){const D={};i&2&&(D.$$scope={dirty:i,ctx:o}),e.$set(D);const K={};i&2&&(K.$$scope={dirty:i,ctx:o}),r.$set(K);const U={};i&2&&(U.$$scope={dirty:i,ctx:o}),u.$set(U);const Z={};i&2&&(Z.$$scope={dirty:i,ctx:o}),M.$set(Z);const F={};i&2&&(F.$$scope={dirty:i,ctx:o}),f.$set(F);const G={};i&2&&(G.$$scope={dirty:i,ctx:o}),x.$set(G)},i(o){P||(d(e.$$.fragment,o),d(r.$$.fragment,o),d(u.$$.fragment,o),d(M.$$.fragment,o),d(f.$$.fragment,o),d(I.$$.fragment,o),d(x.$$.fragment,o),P=!0)},o(o){h(e.$$.fragment,o),h(r.$$.fragment,o),h(u.$$.fragment,o),h(M.$$.fragment,o),h(f.$$.fragment,o),h(I.$$.fragment,o),h(x.$$.fragment,o),P=!1},d(o){k(e,o),o&&p(t),k(r,o),o&&p($),o&&p(s),o&&p(n),k(u,o),o&&p(S),k(M,o),o&&p(A),k(f,o),o&&p(g),k(I,o),o&&p(j),k(x,o)}}}function Wt(a){let e,t;const r=[a[0],X];let $={$$slots:{default:[Nt]},$$scope:{ctx:a}};for(let s=0;s<r.length;s+=1)$=W($,r[s]);return e=new ot({props:$}),{c(){w(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,l){v(e,s,l),t=!0},p(s,[l]){const n=l&1?rt(r,[l&1&&Q(s[0]),l&0&&Q(X)]):{};l&2&&(n.$$scope={dirty:l,ctx:s}),e.$set(n)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}const X={title:"writable store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function zt(a,e,t){return a.$$set=r=>{t(0,e=W(W({},e),V(r)))},e=V(e),[e]}class Ft extends q{constructor(e){super(),L(this,e,zt,Wt,N,{})}}export{Ft as default,X as metadata};