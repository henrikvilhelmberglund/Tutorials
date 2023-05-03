import{S as V,i as L,s as q,k as U,q as _,a as I,l as D,m as R,r as d,c as O,h as f,b as g,D as k,T as y,u as j,H,Q as K,al as at,y as T,z as x,A as C,g as G,d as A,B as E,am as $t,I as ct,an as P,K as F,L as ft,M as rt,N as ot}from"./index.0b5cc0d7.js";import{M as ut,P as z}from"./mdsvex-layout-notes.c527e9b3.js";import{w as it}from"./index.153ae70b.js";import{S as st}from"./ShowMany.5b53376e.js";import{S}from"./Strong.272c5f79.js";function mt(a){let t,e,n,l,r,$,u,p,o,c,h;return{c(){t=U("div"),e=_("Grandchildren: "),n=_(a[0]),l=I(),r=U("button"),$=_("+"),u=I(),p=U("button"),o=_("-")},l(w){t=D(w,"DIV",{});var m=R(t);e=d(m,"Grandchildren: "),n=d(m,a[0]),l=O(m),r=D(m,"BUTTON",{});var B=R(r);$=d(B,"+"),B.forEach(f),u=O(m),p=D(m,"BUTTON",{});var i=R(p);o=d(i,"-"),i.forEach(f),m.forEach(f)},m(w,m){g(w,t,m),k(t,e),k(t,n),k(t,l),k(t,r),k(r,$),k(t,u),k(t,p),k(p,o),c||(h=[y(r,"click",a[1]),y(p,"click",a[2])],c=!0)},p(w,[m]){m&1&&j(n,w[0])},i:H,o:H,d(w){w&&f(t),c=!1,K(h)}}}function pt(a,t,e){let n=at("value");return[n,()=>e(0,n++,n),()=>e(0,n--,n)]}class _t extends V{constructor(t){super(),L(this,t,pt,mt,q,{})}}function dt(a){let t,e;return t=new _t({}),{c(){T(t.$$.fragment)},l(n){x(t.$$.fragment,n)},m(n,l){C(t,n,l),e=!0},p:H,i(n){e||(G(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){E(t,n)}}}class gt extends V{constructor(t){super(),L(this,t,null,dt,q,{})}}function wt(a){let t,e,n,l,r,$,u,p,o,c,h,w,m,B;return h=new gt({}),{c(){t=U("div"),e=_("App: "),n=_(a[0]),l=I(),r=U("button"),$=_("+"),u=I(),p=U("button"),o=_("-"),c=I(),T(h.$$.fragment)},l(i){t=D(i,"DIV",{});var v=R(t);e=d(v,"App: "),n=d(v,a[0]),l=O(v),r=D(v,"BUTTON",{});var N=R(r);$=d(N,"+"),N.forEach(f),u=O(v),p=D(v,"BUTTON",{});var M=R(p);o=d(M,"-"),M.forEach(f),v.forEach(f),c=O(i),x(h.$$.fragment,i)},m(i,v){g(i,t,v),k(t,e),k(t,n),k(t,l),k(t,r),k(r,$),k(t,u),k(t,p),k(p,o),g(i,c,v),C(h,i,v),w=!0,m||(B=[y(r,"click",a[1]),y(p,"click",a[2])],m=!0)},p(i,[v]){(!w||v&1)&&j(n,i[0])},i(i){w||(G(h.$$.fragment,i),w=!0)},o(i){A(h.$$.fragment,i),w=!1},d(i){i&&f(t),i&&f(c),E(h,i),m=!1,K(B)}}}function ht(a,t,e){let n=10;return $t("value",n),[n,()=>e(0,n++,n),()=>e(0,n--,n)]}class Q extends V{constructor(t){super(),L(this,t,ht,wt,q,{})}}const vt=`<script>\r
	import Child from "./Child.svelte";\r
	import { setContext } from "svelte";\r
\r
	let count = 10;\r
\r
	setContext("value", count);\r
<\/script>\r
\r
<div>\r
	App: {count}\r
	<button on:click={() => count++}>+</button>\r
	<button on:click={() => count--}>-</button>\r
</div>\r
\r
<Child />\r
`,bt=`<script>\r
	import Grandchildren from "./Grandchildren.svelte";\r
<\/script>\r
\r
<Grandchildren />\r
`,kt=`<script>\r
	import { getContext } from "svelte";\r
\r
	let count = getContext("value");\r
<\/script>\r
\r
<div>\r
	Grandchildren: {count}\r
	<button on:click={() => count++}>+</button>\r
	<button on:click={() => count--}>-</button>\r
</div>\r
`;function Tt(a){let t,e,n,l,r,$,u,p,o,c,h;return{c(){t=U("div"),e=_("Grandchildren: "),n=_(a[0]),l=I(),r=U("button"),$=_("+"),u=I(),p=U("button"),o=_("-")},l(w){t=D(w,"DIV",{});var m=R(t);e=d(m,"Grandchildren: "),n=d(m,a[0]),l=O(m),r=D(m,"BUTTON",{});var B=R(r);$=d(B,"+"),B.forEach(f),u=O(m),p=D(m,"BUTTON",{});var i=R(p);o=d(i,"-"),i.forEach(f),m.forEach(f)},m(w,m){g(w,t,m),k(t,e),k(t,n),k(t,l),k(t,r),k(r,$),k(t,u),k(t,p),k(p,o),c||(h=[y(r,"click",a[2]),y(p,"click",a[3])],c=!0)},p(w,[m]){m&1&&j(n,w[0])},i:H,o:H,d(w){w&&f(t),c=!1,K(h)}}}function xt(a,t,e){let n,l=at("value");return ct(a,l,u=>e(0,n=u)),[n,l,()=>P(l,n++,n),()=>P(l,n--,n)]}class Ct extends V{constructor(t){super(),L(this,t,xt,Tt,q,{})}}function Gt(a){let t,e;return t=new Ct({}),{c(){T(t.$$.fragment)},l(n){x(t.$$.fragment,n)},m(n,l){C(t,n,l),e=!0},p:H,i(n){e||(G(t.$$.fragment,n),e=!0)},o(n){A(t.$$.fragment,n),e=!1},d(n){E(t,n)}}}class At extends V{constructor(t){super(),L(this,t,null,Gt,q,{})}}function Et(a){let t,e,n,l,r,$,u,p,o,c,h,w,m,B;return h=new At({}),{c(){t=U("div"),e=_("App: "),n=_(a[0]),l=I(),r=U("button"),$=_("+"),u=I(),p=U("button"),o=_("-"),c=I(),T(h.$$.fragment)},l(i){t=D(i,"DIV",{});var v=R(t);e=d(v,"App: "),n=d(v,a[0]),l=O(v),r=D(v,"BUTTON",{});var N=R(r);$=d(N,"+"),N.forEach(f),u=O(v),p=D(v,"BUTTON",{});var M=R(p);o=d(M,"-"),M.forEach(f),v.forEach(f),c=O(i),x(h.$$.fragment,i)},m(i,v){g(i,t,v),k(t,e),k(t,n),k(t,l),k(t,r),k(r,$),k(t,u),k(t,p),k(p,o),g(i,c,v),C(h,i,v),w=!0,m||(B=[y(r,"click",a[2]),y(p,"click",a[3])],m=!0)},p(i,[v]){(!w||v&1)&&j(n,i[0])},i(i){w||(G(h.$$.fragment,i),w=!0)},o(i){A(h.$$.fragment,i),w=!1},d(i){i&&f(t),i&&f(c),E(h,i),m=!1,K(B)}}}function It(a,t,e){let n,l=it(10);return ct(a,l,u=>e(0,n=u)),$t("value",l),[n,l,()=>P(l,n++,n),()=>P(l,n--,n)]}class Z extends V{constructor(t){super(),L(this,t,It,Et,q,{})}}const Ot=`<script>\r
	import Child2 from "./Child2.svelte";\r
  import { writable } from "svelte/store";\r
	import { setContext } from "svelte";\r
\r
	let count = writable(10);\r
\r
	setContext("value", count);\r
<\/script>\r
\r
<div>\r
	App: {$count}\r
	<button on:click={() => $count++}>+</button>\r
	<button on:click={() => $count--}>-</button>\r
</div>\r
\r
<Child2 />\r
`,Bt=`<script>\r
	import Grandchildren2 from "./Grandchildren2.svelte";\r
<\/script>\r
\r
<Grandchildren2 />\r
`,Nt=`<script>\r
	import { getContext } from "svelte";\r
\r
	let count = getContext("value");\r
<\/script>\r
\r
<div>\r
	Grandchildren: {$count}\r
	<button on:click={() => $count++}>+</button>\r
	<button on:click={() => $count--}>-</button>\r
</div>\r
`;function Ut(a){let t;return{c(){t=_("external store")},l(e){t=d(e,"external store")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Dt(a){let t,e,n,l;return e=new S({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),{c(){t=_("If we want our data to not be linked to our components in any way we could use an "),T(e.$$.fragment),n=_(", but here we want to share the data between only the main component, the children and the grandchildren.")},l(r){t=d(r,"If we want our data to not be linked to our components in any way we could use an "),x(e.$$.fragment,r),n=d(r,", but here we want to share the data between only the main component, the children and the grandchildren.")},m(r,$){g(r,t,$),C(e,r,$),g(r,n,$),l=!0},p(r,$){const u={};$&2&&(u.$$scope={dirty:$,ctx:r}),e.$set(u)},i(r){l||(G(e.$$.fragment,r),l=!0)},o(r){A(e.$$.fragment,r),l=!1},d(r){r&&f(t),E(e,r),r&&f(n)}}}function Rt(a){let t;return{c(){t=_("context")},l(e){t=d(e,"context")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Mt(a){let t,e,n,l;return e=new S({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),{c(){t=_("That's why we will use "),T(e.$$.fragment),n=_(" here.")},l(r){t=d(r,"That's why we will use "),x(e.$$.fragment,r),n=d(r," here.")},m(r,$){g(r,t,$),C(e,r,$),g(r,n,$),l=!0},p(r,$){const u={};$&2&&(u.$$scope={dirty:$,ctx:r}),e.$set(u)},i(r){l||(G(e.$$.fragment,r),l=!0)},o(r){A(e.$$.fragment,r),l=!1},d(r){r&&f(t),E(e,r),r&&f(n)}}}function St(a){let t;return{c(){t=_("key")},l(e){t=d(e,"key")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function yt(a){let t;return{c(){t=_("value")},l(e){t=d(e,"value")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function zt(a){let t;return{c(){t=_("component initialization")},l(e){t=d(e,"component initialization")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Vt(a){let t,e,n,l,r,$,u,p;return e=new S({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),l=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),$=new S({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),{c(){t=_("setContext() takes a "),T(e.$$.fragment),n=_(" and a "),T(l.$$.fragment),r=_(" as parameters. The context is set and get upon "),T($.$$.fragment),u=_(" (whenever it is mounted in the DOM).")},l(o){t=d(o,"setContext() takes a "),x(e.$$.fragment,o),n=d(o," and a "),x(l.$$.fragment,o),r=d(o," as parameters. The context is set and get upon "),x($.$$.fragment,o),u=d(o," (whenever it is mounted in the DOM).")},m(o,c){g(o,t,c),C(e,o,c),g(o,n,c),C(l,o,c),g(o,r,c),C($,o,c),g(o,u,c),p=!0},p(o,c){const h={};c&2&&(h.$$scope={dirty:c,ctx:o}),e.$set(h);const w={};c&2&&(w.$$scope={dirty:c,ctx:o}),l.$set(w);const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),$.$set(m)},i(o){p||(G(e.$$.fragment,o),G(l.$$.fragment,o),G($.$$.fragment,o),p=!0)},o(o){A(e.$$.fragment,o),A(l.$$.fragment,o),A($.$$.fragment,o),p=!1},d(o){o&&f(t),E(e,o),o&&f(n),E(l,o),o&&f(r),E($,o),o&&f(u)}}}function Lt(a){let t;return{c(){t=_("set an initial value")},l(e){t=d(e,"set an initial value")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function qt(a){let t;return{c(){t=_("the other won't change")},l(e){t=d(e,"the other won't change")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Ht(a){let t;return{c(){t=_("not by reference")},l(e){t=d(e,"not by reference")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Pt(a){let t,e,n,l,r,$,u,p;return e=new S({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),l=new S({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),$=new S({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),{c(){t=_("This means that we can "),T(e.$$.fragment),n=_(" but after that if we increase count in one of the components "),T(l.$$.fragment),r=_(" because we're getting the value by value, "),T($.$$.fragment),u=_(".")},l(o){t=d(o,"This means that we can "),x(e.$$.fragment,o),n=d(o," but after that if we increase count in one of the components "),x(l.$$.fragment,o),r=d(o," because we're getting the value by value, "),x($.$$.fragment,o),u=d(o,".")},m(o,c){g(o,t,c),C(e,o,c),g(o,n,c),C(l,o,c),g(o,r,c),C($,o,c),g(o,u,c),p=!0},p(o,c){const h={};c&2&&(h.$$scope={dirty:c,ctx:o}),e.$set(h);const w={};c&2&&(w.$$scope={dirty:c,ctx:o}),l.$set(w);const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),$.$set(m)},i(o){p||(G(e.$$.fragment,o),G(l.$$.fragment,o),G($.$$.fragment,o),p=!0)},o(o){A(e.$$.fragment,o),A(l.$$.fragment,o),A($.$$.fragment,o),p=!1},d(o){o&&f(t),E(e,o),o&&f(n),E(l,o),o&&f(r),E($,o),o&&f(u)}}}function jt(a){let t;return{c(){t=_("This is the reason we're going to use a store in combination with context.")},l(e){t=d(e,"This is the reason we're going to use a store in combination with context.")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Kt(a){let t;return{c(){t=_("Let's try to sync the value using a store.")},l(e){t=d(e,"Let's try to sync the value using a store.")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Qt(a){let t;return{c(){t=_("store in combination with context")},l(e){t=d(e,"store in combination with context")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Zt(a){let t,e,n,l;return e=new S({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){t=_("It works! If we want to sync values down the chain of components we can use "),T(e.$$.fragment),n=_(".")},l(r){t=d(r,"It works! If we want to sync values down the chain of components we can use "),x(e.$$.fragment,r),n=d(r,".")},m(r,$){g(r,t,$),C(e,r,$),g(r,n,$),l=!0},p(r,$){const u={};$&2&&(u.$$scope={dirty:$,ctx:r}),e.$set(u)},i(r){l||(G(e.$$.fragment,r),l=!0)},o(r){A(e.$$.fragment,r),l=!1},d(r){r&&f(t),E(e,r),r&&f(n)}}}function Ft(a){let t,e,n,l,r,$,u,p,o,c,h,w,m,B,i,v,N,M;return t=new z({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),n=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),r=new z({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),u=new z({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}}),o=new z({props:{$$slots:{default:[jt]},$$scope:{ctx:a}}}),h=new st({props:{name:[{name:"App",comp:Q,raw:vt,text:"This is an example where the value is synced once at component initialization but then loses sync."},{name:"Child",comp:Q,raw:bt,text:""},{name:"Grandchildren",comp:Q,raw:kt,text:""}]}}),m=new z({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),i=new st({props:{name:[{name:"App2",comp:Z,raw:Ot,text:"Here we're using a writable store."},{name:"Child2",comp:Z,raw:Bt,text:""},{name:"Grandchildren2",comp:Z,raw:Nt,text:""}]}}),N=new z({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){T(t.$$.fragment),e=I(),T(n.$$.fragment),l=I(),T(r.$$.fragment),$=I(),T(u.$$.fragment),p=I(),T(o.$$.fragment),c=I(),T(h.$$.fragment),w=I(),T(m.$$.fragment),B=I(),T(i.$$.fragment),v=I(),T(N.$$.fragment)},l(s){x(t.$$.fragment,s),e=O(s),x(n.$$.fragment,s),l=O(s),x(r.$$.fragment,s),$=O(s),x(u.$$.fragment,s),p=O(s),x(o.$$.fragment,s),c=O(s),x(h.$$.fragment,s),w=O(s),x(m.$$.fragment,s),B=O(s),x(i.$$.fragment,s),v=O(s),x(N.$$.fragment,s)},m(s,b){C(t,s,b),g(s,e,b),C(n,s,b),g(s,l,b),C(r,s,b),g(s,$,b),C(u,s,b),g(s,p,b),C(o,s,b),g(s,c,b),C(h,s,b),g(s,w,b),C(m,s,b),g(s,B,b),C(i,s,b),g(s,v,b),C(N,s,b),M=!0},p(s,b){const J={};b&2&&(J.$$scope={dirty:b,ctx:s}),t.$set(J);const W={};b&2&&(W.$$scope={dirty:b,ctx:s}),n.$set(W);const X={};b&2&&(X.$$scope={dirty:b,ctx:s}),r.$set(X);const Y={};b&2&&(Y.$$scope={dirty:b,ctx:s}),u.$set(Y);const tt={};b&2&&(tt.$$scope={dirty:b,ctx:s}),o.$set(tt);const et={};b&2&&(et.$$scope={dirty:b,ctx:s}),m.$set(et);const nt={};b&2&&(nt.$$scope={dirty:b,ctx:s}),N.$set(nt)},i(s){M||(G(t.$$.fragment,s),G(n.$$.fragment,s),G(r.$$.fragment,s),G(u.$$.fragment,s),G(o.$$.fragment,s),G(h.$$.fragment,s),G(m.$$.fragment,s),G(i.$$.fragment,s),G(N.$$.fragment,s),M=!0)},o(s){A(t.$$.fragment,s),A(n.$$.fragment,s),A(r.$$.fragment,s),A(u.$$.fragment,s),A(o.$$.fragment,s),A(h.$$.fragment,s),A(m.$$.fragment,s),A(i.$$.fragment,s),A(N.$$.fragment,s),M=!1},d(s){E(t,s),s&&f(e),E(n,s),s&&f(l),E(r,s),s&&f($),E(u,s),s&&f(p),E(o,s),s&&f(c),E(h,s),s&&f(w),E(m,s),s&&f(B),E(i,s),s&&f(v),E(N,s)}}}function Jt(a){let t,e;const n=[a[0],lt];let l={$$slots:{default:[Ft]},$$scope:{ctx:a}};for(let r=0;r<n.length;r+=1)l=F(l,n[r]);return t=new ut({props:l}),{c(){T(t.$$.fragment)},l(r){x(t.$$.fragment,r)},m(r,$){C(t,r,$),e=!0},p(r,[$]){const u=$&1?ft(n,[$&1&&rt(r[0]),$&0&&rt(lt)]):{};$&2&&(u.$$scope={dirty:$,ctx:r}),t.$set(u)},i(r){e||(G(t.$$.fragment,r),e=!0)},o(r){A(t.$$.fragment,r),e=!1},d(r){E(t,r)}}}const lt={title:"Reactive context",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function Wt(a,t,e){return a.$$set=n=>{e(0,t=F(F({},t),ot(n)))},t=ot(t),[t]}class re extends V{constructor(t){super(),L(this,t,Wt,Jt,q,{})}}export{re as default,lt as metadata};