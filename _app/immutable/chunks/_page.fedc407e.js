import{s as P,f as E,l as p,g as V,h as S,m as u,d as c,k as Y,i,v as I,z as G,n as Ct,a as A,c as b,j as et,aj as nt,ak as xt,C as tt,D as mt}from"./scheduler.a7cd560e.js";import{S as k,i as B,b as _,d as g,m as h,a as v,t as w,e as C}from"./index.396264e7.js";import{g as bt,a as pt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Pt,P as j}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as X}from"./ShowMany.db7be1f3.js";import{S as y}from"./Strong.097578ae.js";function kt(l){let t,e;return{c(){t=E("div"),e=p("GrandChild A"),this.h()},l(r){t=V(r,"DIV",{style:!0});var s=S(t);e=u(s,"GrandChild A"),s.forEach(c),this.h()},h(){Y(t,"color",l[0])},m(r,s){i(r,t,s),I(t,e)},p(r,[s]){s&1&&Y(t,"color",r[0])},i:G,o:G,d(r){r&&c(t)}}}function Bt(l,t,e){let{color:r}=t;return l.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class It extends k{constructor(t){super(),B(this,t,Bt,kt,P,{color:0})}}function yt(l){let t,e,r;return{c(){t=E("div"),e=p("GrandChild B: "),r=p(l[0])},l(s){t=V(s,"DIV",{});var n=S(t);e=u(n,"GrandChild B: "),r=u(n,l[0]),n.forEach(c)},m(s,n){i(s,t,n),I(t,e),I(t,r)},p(s,[n]){n&1&&Ct(r,s[0])},i:G,o:G,d(s){s&&c(t)}}}function Rt(l,t,e){let{color:r}=t;return l.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class Dt extends k{constructor(t){super(),B(this,t,Rt,yt,P,{color:0})}}function jt(l){let t,e,r,s;return t=new It({props:{color:l[0]}}),r=new Dt({props:{color:l[0]}}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=b(n),g(r.$$.fragment,n)},m(n,a){h(t,n,a),i(n,e,a),h(r,n,a),s=!0},p(n,[a]){const o={};a&1&&(o.color=n[0]),t.$set(o);const f={};a&1&&(f.color=n[0]),r.$set(f)},i(n){s||(v(t.$$.fragment,n),v(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){n&&c(e),C(t,n),C(r,n)}}}function Et(l,t,e){let{color:r}=t;return l.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class Vt extends k{constructor(t){super(),B(this,t,Et,jt,P,{color:0})}}function St(l){let t,e,r;return{c(){t=E("div"),e=p("Child2: >> "),r=p(l[0])},l(s){t=V(s,"DIV",{});var n=S(t);e=u(n,"Child2: >> "),r=u(n,l[0]),n.forEach(c)},m(s,n){i(s,t,n),I(t,e),I(t,r)},p(s,[n]){n&1&&Ct(r,s[0])},i:G,o:G,d(s){s&&c(t)}}}function qt(l,t,e){let{color:r}=t;return l.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class zt extends k{constructor(t){super(),B(this,t,qt,St,P,{color:0})}}function Mt(l){let t,e,r,s,n,a;return r=new Vt({props:{color:ut}}),n=new zt({props:{color:ut}}),{c(){t=E("div"),e=p(`Parent A\r
	`),_(r.$$.fragment),s=A(),_(n.$$.fragment),this.h()},l(o){t=V(o,"DIV",{class:!0});var f=S(t);e=u(f,`Parent A\r
	`),g(r.$$.fragment,f),s=b(f),g(n.$$.fragment,f),f.forEach(c),this.h()},h(){et(t,"class","spu-kjwfql")},m(o,f){i(o,t,f),I(t,e),h(r,t,null),I(t,s),h(n,t,null),a=!0},p:G,i(o){a||(v(r.$$.fragment,o),v(n.$$.fragment,o),a=!0)},o(o){w(r.$$.fragment,o),w(n.$$.fragment,o),a=!1},d(o){o&&c(t),C(r),C(n)}}}let ut="red";class Tt extends k{constructor(t){super(),B(this,t,null,Mt,P,{})}}function Ht(l){let t,e;return t=new Tt({}),{c(){_(t.$$.fragment)},l(r){g(t.$$.fragment,r)},m(r,s){h(t,r,s),e=!0},p:G,i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){w(t.$$.fragment,r),e=!1},d(r){C(t,r)}}}class Z extends k{constructor(t){super(),B(this,t,null,Ht,P,{})}}const Nt=`<script>\r
	import Parent from "./Parent.svelte";\r
<\/script>\r
\r
<Parent />\r
`,Wt=`<script>\r
	import Child from "./Child.svelte";\r
	import Child2 from "./Child2.svelte";\r
	let color = "red";\r
<\/script>\r
\r
<div class="border border-black">\r
	Parent A\r
	<Child {color} />\r
	<Child2 {color} />\r
</div>\r
\r
<style>\r
</style>\r
`,Zt=`<script>\r
	import GrandChildA from "./GrandChildA.svelte";\r
	import GrandChildB from "./GrandChildB.svelte";\r
	export let color;\r
<\/script>\r
\r
<GrandChildA {color} />\r
<GrandChildB {color} />\r
`,Ft=`<script>\r
	export let color;\r
<\/script>\r
\r
<div>\r
	Child2: >> {color}\r
</div>\r
\r
<style>\r
</style>\r
`,Jt=`<script>\r
	export let color;\r
<\/script>\r
\r
<div style="color: {color}">GrandChild A</div>\r
`,Kt=`<script>\r
	export let color;\r
<\/script>\r
\r
<div>GrandChild B: {color}</div>\r
`;function Lt(l){let t,e;return{c(){t=E("div"),e=p("GrandChild A"),this.h()},l(r){t=V(r,"DIV",{style:!0});var s=S(t);e=u(s,"GrandChild A"),s.forEach(c),this.h()},h(){Y(t,"color",l[0])},m(r,s){i(r,t,s),I(t,e)},p:G,i:G,o:G,d(r){r&&c(t)}}}function Ot(l){return[nt("color")]}class Gt extends k{constructor(t){super(),B(this,t,Ot,Lt,P,{})}}function Qt(l){let t,e,r;return{c(){t=E("div"),e=p("GrandChild B: "),r=p(l[0])},l(s){t=V(s,"DIV",{});var n=S(t);e=u(n,"GrandChild B: "),r=u(n,l[0]),n.forEach(c)},m(s,n){i(s,t,n),I(t,e),I(t,r)},p:G,i:G,o:G,d(s){s&&c(t)}}}function Ut(l){return[nt("color")]}class Xt extends k{constructor(t){super(),B(this,t,Ut,Qt,P,{})}}function Yt(l){let t,e,r,s;return t=new Gt({}),r=new Xt({}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=b(n),g(r.$$.fragment,n)},m(n,a){h(t,n,a),i(n,e,a),h(r,n,a),s=!0},p:G,i(n){s||(v(t.$$.fragment,n),v(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){n&&c(e),C(t,n),C(r,n)}}}class te extends k{constructor(t){super(),B(this,t,null,Yt,P,{})}}function ee(l){let t,e,r;return{c(){t=E("div"),e=p("Child2: >> "),r=p(l[0])},l(s){t=V(s,"DIV",{});var n=S(t);e=u(n,"Child2: >> "),r=u(n,l[0]),n.forEach(c)},m(s,n){i(s,t,n),I(t,e),I(t,r)},p:G,i:G,o:G,d(s){s&&c(t)}}}function ne(l){return[nt("color")]}class re extends k{constructor(t){super(),B(this,t,ne,ee,P,{})}}function se(l){let t,e,r,s,n,a;return r=new te({}),n=new re({}),{c(){t=E("div"),e=p(`Parent A\r
	`),_(r.$$.fragment),s=A(),_(n.$$.fragment),this.h()},l(o){t=V(o,"DIV",{class:!0});var f=S(t);e=u(f,`Parent A\r
	`),g(r.$$.fragment,f),s=b(f),g(n.$$.fragment,f),f.forEach(c),this.h()},h(){et(t,"class","spu-dqswyt")},m(o,f){i(o,t,f),I(t,e),h(r,t,null),I(t,s),h(n,t,null),a=!0},p:G,i(o){a||(v(r.$$.fragment,o),v(n.$$.fragment,o),a=!0)},o(o){w(r.$$.fragment,o),w(n.$$.fragment,o),a=!1},d(o){o&&c(t),C(r),C(n)}}}function oe(l){return xt("color","red"),[]}class At extends k{constructor(t){super(),B(this,t,oe,se,P,{})}}function le(l){let t,e;return t=new At({}),{c(){_(t.$$.fragment)},l(r){g(t.$$.fragment,r)},m(r,s){h(t,r,s),e=!0},p:G,i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){w(t.$$.fragment,r),e=!1},d(r){C(t,r)}}}class F extends k{constructor(t){super(),B(this,t,null,le,P,{})}}const ae=`<script>\r
	import Parentv2 from "./Parentv2.svelte";\r
<\/script>\r
\r
<Parentv2 />\r
`;function $e(l){let t,e,r;return e=new Gt({}),{c(){t=E("div"),_(e.$$.fragment),this.h()},l(s){t=V(s,"DIV",{class:!0});var n=S(t);g(e.$$.fragment,n),n.forEach(c),this.h()},h(){et(t,"class","spu-bxgern")},m(s,n){i(s,t,n),h(e,t,null),r=!0},p:G,i(s){r||(v(e.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),r=!1},d(s){s&&c(t),C(e)}}}function ce(l){return xt("color","blue"),[]}class ie extends k{constructor(t){super(),B(this,t,ce,$e,P,{})}}function fe(l){let t,e,r,s;return t=new At({}),r=new ie({}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=b(n),g(r.$$.fragment,n)},m(n,a){h(t,n,a),i(n,e,a),h(r,n,a),s=!0},p:G,i(n){s||(v(t.$$.fragment,n),v(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){n&&c(e),C(t,n),C(r,n)}}}class W extends k{constructor(t){super(),B(this,t,null,fe,P,{})}}const me=`<script>\r
	import Parentv2 from "./Parentv2.svelte";\r
	import Parent2 from "./Parent2.svelte";\r
<\/script>\r
\r
<Parentv2 />\r
<Parent2/>\r
`,dt=`<script>\r
	import { setContext } from "svelte";\r
\r
	import Childv2 from "./Childv2.svelte";\r
	import Child2v2 from "./Child2v2.svelte";\r
\r
	// key, value\r
	setContext("color", "red");\r
<\/script>\r
\r
<div class="border border-black">\r
	Parent A\r
	<Childv2 />\r
	<Child2v2 />\r
</div>\r
\r
<style>\r
</style>\r
`,pe=`<script>\r
	import { setContext } from "svelte";\r
\r
	import GrandChildAv2 from "./GrandChildAv2.svelte";\r
\r
	// key, value\r
	setContext("color", "blue");\r
<\/script>\r
\r
<div class="border border-black">\r
	<GrandChildAv2 />\r
</div>\r
\r
<style>\r
</style>\r
`,_t=`<script>\r
	import GrandChildAv2 from "./GrandChildAv2.svelte";\r
	import GrandChildBv2 from "./GrandChildBv2.svelte";\r
<\/script>\r
\r
<GrandChildAv2  />\r
<GrandChildBv2  />\r
`,gt=`<script>\r
  import { getContext } from "svelte";\r
\r
  const color = getContext("color")\r
<\/script>\r
\r
<div>\r
	Child2: >> {color}\r
</div>\r
\r
<style>\r
</style>\r
`,ht=`<script>\r
	import { getContext } from "svelte";\r
\r
	const color = getContext("color");\r
<\/script>\r
\r
<div style="color: {color}">GrandChild A</div>\r
`,vt=`<script>\r
	import { getContext } from "svelte";\r
\r
	const color = getContext("color");\r
<\/script>\r
\r
<div>GrandChild B: {color}</div>\r
`;function ue(l){let t;return{c(){t=p("Context")},l(e){t=u(e,"Context")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function de(l){let t;return{c(){t=p("all of its children")},l(e){t=u(e,"all of its children")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function _e(l){let t,e,r,s,n;return t=new y({props:{$$slots:{default:[ue]},$$scope:{ctx:l}}}),r=new y({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),e=p(" is a way to pass data from a component to "),_(r.$$.fragment),s=p(".")},l(a){g(t.$$.fragment,a),e=u(a," is a way to pass data from a component to "),g(r.$$.fragment,a),s=u(a,".")},m(a,o){h(t,a,o),i(a,e,o),h(r,a,o),i(a,s,o),n=!0},p(a,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:a}),t.$set(f);const m={};o&2&&(m.$$scope={dirty:o,ctx:a}),r.$set(m)},i(a){n||(v(t.$$.fragment,a),v(r.$$.fragment,a),n=!0)},o(a){w(t.$$.fragment,a),w(r.$$.fragment,a),n=!1},d(a){a&&(c(e),c(s)),C(t,a),C(r,a)}}}function ge(l){let t;return{c(){t=p("It is a bit inefficient though because we need to pass the props in every child component to its children.")},l(e){t=u(e,"It is a bit inefficient though because we need to pass the props in every child component to its children.")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function he(l){let t;return{c(){t=p("getContext")},l(e){t=u(e,"getContext")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function ve(l){let t;return{c(){t=p("setContext")},l(e){t=u(e,"setContext")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function we(l){let t,e,r,s,n,a;return e=new y({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),s=new y({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){t=p("Instead we can use "),_(e.$$.fragment),r=p(" and "),_(s.$$.fragment),n=p(".")},l(o){t=u(o,"Instead we can use "),g(e.$$.fragment,o),r=u(o," and "),g(s.$$.fragment,o),n=u(o,".")},m(o,f){i(o,t,f),h(e,o,f),i(o,r,f),h(s,o,f),i(o,n,f),a=!0},p(o,f){const m={};f&2&&(m.$$scope={dirty:f,ctx:o}),e.$set(m);const x={};f&2&&(x.$$scope={dirty:f,ctx:o}),s.$set(x)},i(o){a||(v(e.$$.fragment,o),v(s.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),a=!1},d(o){o&&(c(t),c(r),c(n)),C(e,o),C(s,o)}}}function Ce(l){let t;return{c(){t=p("context.js")},l(e){t=u(e,"context.js")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function xe(l){let t,e="{",r;return{c(){t=p("export const key = "),r=p(e)},l(s){t=u(s,"export const key = "),r=u(s,e)},m(s,n){i(s,t,n),i(s,r,n)},p:G,d(s){s&&(c(t),c(r))}}}function Ge(l){let t,e,r,s,n,a;return e=new y({props:{$$slots:{default:[Ce]},$$scope:{ctx:l}}}),s=new y({props:{$$slots:{default:[xe]},$$scope:{ctx:l}}}),{c(){t=p("We could also create a file "),_(e.$$.fragment),r=p(" where we export a key as an object "),_(s.$$.fragment),n=p(" that we then import in the files.")},l(o){t=u(o,"We could also create a file "),g(e.$$.fragment,o),r=u(o," where we export a key as an object "),g(s.$$.fragment,o),n=u(o," that we then import in the files.")},m(o,f){i(o,t,f),h(e,o,f),i(o,r,f),h(s,o,f),i(o,n,f),a=!0},p(o,f){const m={};f&2&&(m.$$scope={dirty:f,ctx:o}),e.$set(m);const x={};f&2&&(x.$$scope={dirty:f,ctx:o}),s.$set(x)},i(o){a||(v(e.$$.fragment,o),v(s.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),a=!1},d(o){o&&(c(t),c(r),c(n)),C(e,o),C(s,o)}}}function Ae(l){let t;return{c(){t=p("This wil make sure that we can't have collisions with our contexts (rather than using strings).")},l(e){t=u(e,"This wil make sure that we can't have collisions with our contexts (rather than using strings).")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function be(l){let t;return{c(){t=p("context")},l(e){t=u(e,"context")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function Pe(l){let t,e,r,s;return e=new y({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){t=p("Now that we're using "),_(e.$$.fragment),r=p(" we can do things like this:")},l(n){t=u(n,"Now that we're using "),g(e.$$.fragment,n),r=u(n," we can do things like this:")},m(n,a){i(n,t,a),h(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&(c(t),c(r)),C(e,n)}}}function ke(l){let t;return{c(){t=p("override")},l(e){t=u(e,"override")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function Be(l){let t;return{c(){t=p("new context")},l(e){t=u(e,"new context")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function Ie(l){let t;return{c(){t=p("its children")},l(e){t=u(e,"its children")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function ye(l){let t,e,r,s,n,a,o,f;return e=new y({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),s=new y({props:{$$slots:{default:[Be]},$$scope:{ctx:l}}}),a=new y({props:{$$slots:{default:[Ie]},$$scope:{ctx:l}}}),{c(){t=p("It is important to note that you could also "),_(e.$$.fragment),r=p(" the context within a child, which will then give the "),_(s.$$.fragment),n=p(" to "),_(a.$$.fragment),o=p(".")},l(m){t=u(m,"It is important to note that you could also "),g(e.$$.fragment,m),r=u(m," the context within a child, which will then give the "),g(s.$$.fragment,m),n=u(m," to "),g(a.$$.fragment,m),o=u(m,".")},m(m,x){i(m,t,x),h(e,m,x),i(m,r,x),h(s,m,x),i(m,n,x),h(a,m,x),i(m,o,x),f=!0},p(m,x){const R={};x&2&&(R.$$scope={dirty:x,ctx:m}),e.$set(R);const H={};x&2&&(H.$$scope={dirty:x,ctx:m}),s.$set(H);const D={};x&2&&(D.$$scope={dirty:x,ctx:m}),a.$set(D)},i(m){f||(v(e.$$.fragment,m),v(s.$$.fragment,m),v(a.$$.fragment,m),f=!0)},o(m){w(e.$$.fragment,m),w(s.$$.fragment,m),w(a.$$.fragment,m),f=!1},d(m){m&&(c(t),c(r),c(n),c(o)),C(e,m),C(s,m),C(a,m)}}}function Re(l){let t;return{c(){t=p("below")},l(e){t=u(e,"below")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function De(l){let t,e,r,s;return e=new y({props:{$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){t=p("If you want to retain the parent context for that child component but override in the children, the setContext() needs to be "),_(e.$$.fragment),r=p(" getContext() in that file.")},l(n){t=u(n,"If you want to retain the parent context for that child component but override in the children, the setContext() needs to be "),g(e.$$.fragment,n),r=u(n," getContext() in that file.")},m(n,a){i(n,t,a),h(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&(c(t),c(r)),C(e,n)}}}function je(l){let t;return{c(){t=p("top level")},l(e){t=u(e,"top level")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function Ee(l){let t,e,r,s;return e=new y({props:{$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){t=p("Also, you can only set and get context in the "),_(e.$$.fragment),r=p(" (during component initialization).")},l(n){t=u(n,"Also, you can only set and get context in the "),g(e.$$.fragment,n),r=u(n," (during component initialization).")},m(n,a){i(n,t,a),h(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(v(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&(c(t),c(r)),C(e,n)}}}function Ve(l){let t,e,r,s,n,a,o,f,m,x,R,H,D,J,q,K,N,L,z,O,M,Q,T,U;return t=new j({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),r=new X({props:{name:[{name:"App",comp:Z,raw:Nt,text:"Here we have a component with many children where we just pass a color as a prop."},{name:"Parent",comp:Z,raw:Wt},{name:"Child",comp:Z,raw:Zt},{name:"Child2",comp:Z,raw:Ft},{name:"GrandChildA",comp:Z,raw:Jt},{name:"GrandChildB",comp:Z,raw:Kt}]}}),n=new j({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),o=new j({props:{$$slots:{default:[we]},$$scope:{ctx:l}}}),m=new X({props:{name:[{name:"Appv2",comp:F,raw:ae},{name:"Parentv2",comp:F,raw:dt},{name:"Childv2",comp:F,raw:_t},{name:"Child2v2",comp:F,raw:gt},{name:"GrandChildAv2",comp:F,raw:ht},{name:"GrandChildBv2",comp:F,raw:vt}]}}),R=new j({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),D=new j({props:{$$slots:{default:[Ae]},$$scope:{ctx:l}}}),q=new j({props:{$$slots:{default:[Pe]},$$scope:{ctx:l}}}),N=new X({props:{name:[{name:"Appv3",comp:W,raw:me,text:"Here I added a Parent2 component that sets the color using context to blue. Its child, GrandChildAv2, will use that context to get the new color."},{name:"Parent2",comp:W,raw:pe},{name:"Parentv2",comp:W,raw:dt},{name:"Childv2",comp:W,raw:_t},{name:"Child2v2",comp:W,raw:gt},{name:"GrandChildAv2",comp:W,raw:ht},{name:"GrandChildBv2",comp:W,raw:vt}]}}),z=new j({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),M=new j({props:{$$slots:{default:[De]},$$scope:{ctx:l}}}),T=new j({props:{$$slots:{default:[Ee]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment),s=A(),_(n.$$.fragment),a=A(),_(o.$$.fragment),f=A(),_(m.$$.fragment),x=A(),_(R.$$.fragment),H=A(),_(D.$$.fragment),J=A(),_(q.$$.fragment),K=A(),_(N.$$.fragment),L=A(),_(z.$$.fragment),O=A(),_(M.$$.fragment),Q=A(),_(T.$$.fragment)},l($){g(t.$$.fragment,$),e=b($),g(r.$$.fragment,$),s=b($),g(n.$$.fragment,$),a=b($),g(o.$$.fragment,$),f=b($),g(m.$$.fragment,$),x=b($),g(R.$$.fragment,$),H=b($),g(D.$$.fragment,$),J=b($),g(q.$$.fragment,$),K=b($),g(N.$$.fragment,$),L=b($),g(z.$$.fragment,$),O=b($),g(M.$$.fragment,$),Q=b($),g(T.$$.fragment,$)},m($,d){h(t,$,d),i($,e,d),h(r,$,d),i($,s,d),h(n,$,d),i($,a,d),h(o,$,d),i($,f,d),h(m,$,d),i($,x,d),h(R,$,d),i($,H,d),h(D,$,d),i($,J,d),h(q,$,d),i($,K,d),h(N,$,d),i($,L,d),h(z,$,d),i($,O,d),h(M,$,d),i($,Q,d),h(T,$,d),U=!0},p($,d){const rt={};d&2&&(rt.$$scope={dirty:d,ctx:$}),t.$set(rt);const st={};d&2&&(st.$$scope={dirty:d,ctx:$}),n.$set(st);const ot={};d&2&&(ot.$$scope={dirty:d,ctx:$}),o.$set(ot);const lt={};d&2&&(lt.$$scope={dirty:d,ctx:$}),R.$set(lt);const at={};d&2&&(at.$$scope={dirty:d,ctx:$}),D.$set(at);const $t={};d&2&&($t.$$scope={dirty:d,ctx:$}),q.$set($t);const ct={};d&2&&(ct.$$scope={dirty:d,ctx:$}),z.$set(ct);const it={};d&2&&(it.$$scope={dirty:d,ctx:$}),M.$set(it);const ft={};d&2&&(ft.$$scope={dirty:d,ctx:$}),T.$set(ft)},i($){U||(v(t.$$.fragment,$),v(r.$$.fragment,$),v(n.$$.fragment,$),v(o.$$.fragment,$),v(m.$$.fragment,$),v(R.$$.fragment,$),v(D.$$.fragment,$),v(q.$$.fragment,$),v(N.$$.fragment,$),v(z.$$.fragment,$),v(M.$$.fragment,$),v(T.$$.fragment,$),U=!0)},o($){w(t.$$.fragment,$),w(r.$$.fragment,$),w(n.$$.fragment,$),w(o.$$.fragment,$),w(m.$$.fragment,$),w(R.$$.fragment,$),w(D.$$.fragment,$),w(q.$$.fragment,$),w(N.$$.fragment,$),w(z.$$.fragment,$),w(M.$$.fragment,$),w(T.$$.fragment,$),U=!1},d($){$&&(c(e),c(s),c(a),c(f),c(x),c(H),c(J),c(K),c(L),c(O),c(Q)),C(t,$),C(r,$),C(n,$),C(o,$),C(m,$),C(R,$),C(D,$),C(q,$),C(N,$),C(z,$),C(M,$),C(T,$)}}}function Se(l){let t,e;const r=[l[0],wt];let s={$$slots:{default:[Ve]},$$scope:{ctx:l}};for(let n=0;n<r.length;n+=1)s=tt(s,r[n]);return t=new Pt({props:s}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,a){h(t,n,a),e=!0},p(n,[a]){const o=a&1?bt(r,[a&1&&pt(n[0]),a&0&&pt(wt)]):{};a&2&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}const wt={title:"getContext",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-10T00:00:00.000Z",layout:"notes"};function qe(l,t,e){return l.$$set=r=>{e(0,t=tt(tt({},t),mt(r)))},t=mt(t),[t]}class Ze extends k{constructor(t){super(),B(this,t,qe,Se,P,{})}}export{Ze as default,wt as metadata};
