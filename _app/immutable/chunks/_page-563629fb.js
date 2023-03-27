import{S as b,i as B,s as I,k as V,q as p,l as j,m as S,r as u,h as f,p as Y,b as i,G as k,B as G,u as Ct,w as _,a as A,x as g,c as P,y as v,f as h,t as w,z as C,n as et,al as nt,am as xt,M as tt,N as Pt,O as mt,P as pt}from"./index-a6ce3bb5.js";import{M as bt,P as E}from"./mdsvex-layout-notes-38a9c8fb.js";import{S as X}from"./ShowMany-33ef960d.js";import{S as y}from"./Strong-98ce4a94.js";function Bt($){let t,e;return{c(){t=V("div"),e=p("GrandChild A"),this.h()},l(r){t=j(r,"DIV",{style:!0});var s=S(t);e=u(s,"GrandChild A"),s.forEach(f),this.h()},h(){Y(t,"color",$[0])},m(r,s){i(r,t,s),k(t,e)},p(r,[s]){s&1&&Y(t,"color",r[0])},i:G,o:G,d(r){r&&f(t)}}}function It($,t,e){let{color:r}=t;return $.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class kt extends b{constructor(t){super(),B(this,t,It,Bt,I,{color:0})}}function yt($){let t,e,r;return{c(){t=V("div"),e=p("GrandChild B: "),r=p($[0])},l(s){t=j(s,"DIV",{});var n=S(t);e=u(n,"GrandChild B: "),r=u(n,$[0]),n.forEach(f)},m(s,n){i(s,t,n),k(t,e),k(t,r)},p(s,[n]){n&1&&Ct(r,s[0])},i:G,o:G,d(s){s&&f(t)}}}function Rt($,t,e){let{color:r}=t;return $.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class Dt extends b{constructor(t){super(),B(this,t,Rt,yt,I,{color:0})}}function Et($){let t,e,r,s;return t=new kt({props:{color:$[0]}}),r=new Dt({props:{color:$[0]}}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=P(n),g(r.$$.fragment,n)},m(n,a){v(t,n,a),i(n,e,a),v(r,n,a),s=!0},p(n,[a]){const o={};a&1&&(o.color=n[0]),t.$set(o);const c={};a&1&&(c.color=n[0]),r.$set(c)},i(n){s||(h(t.$$.fragment,n),h(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){C(t,n),n&&f(e),C(r,n)}}}function Vt($,t,e){let{color:r}=t;return $.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class jt extends b{constructor(t){super(),B(this,t,Vt,Et,I,{color:0})}}function St($){let t,e,r;return{c(){t=V("div"),e=p("Child2: >> "),r=p($[0])},l(s){t=j(s,"DIV",{});var n=S(t);e=u(n,"Child2: >> "),r=u(n,$[0]),n.forEach(f)},m(s,n){i(s,t,n),k(t,e),k(t,r)},p(s,[n]){n&1&&Ct(r,s[0])},i:G,o:G,d(s){s&&f(t)}}}function Mt($,t,e){let{color:r}=t;return $.$$set=s=>{"color"in s&&e(0,r=s.color)},[r]}class qt extends b{constructor(t){super(),B(this,t,Mt,St,I,{color:0})}}function zt($){let t,e,r,s,n,a;return r=new jt({props:{color:ut}}),n=new qt({props:{color:ut}}),{c(){t=V("div"),e=p(`Parent A\r
	`),_(r.$$.fragment),s=A(),_(n.$$.fragment),this.h()},l(o){t=j(o,"DIV",{class:!0});var c=S(t);e=u(c,`Parent A\r
	`),g(r.$$.fragment,c),s=P(c),g(n.$$.fragment,c),c.forEach(f),this.h()},h(){et(t,"class","uno-gtx6qv")},m(o,c){i(o,t,c),k(t,e),v(r,t,null),k(t,s),v(n,t,null),a=!0},p:G,i(o){a||(h(r.$$.fragment,o),h(n.$$.fragment,o),a=!0)},o(o){w(r.$$.fragment,o),w(n.$$.fragment,o),a=!1},d(o){o&&f(t),C(r),C(n)}}}let ut="red";class Nt extends b{constructor(t){super(),B(this,t,null,zt,I,{})}}function Tt($){let t,e;return t=new Nt({}),{c(){_(t.$$.fragment)},l(r){g(t.$$.fragment,r)},m(r,s){v(t,r,s),e=!0},p:G,i(r){e||(h(t.$$.fragment,r),e=!0)},o(r){w(t.$$.fragment,r),e=!1},d(r){C(t,r)}}}class O extends b{constructor(t){super(),B(this,t,null,Tt,I,{})}}const Ht=`<script>\r
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
`,Ot=`<script>\r
	import GrandChildA from "./GrandChildA.svelte";\r
	import GrandChildB from "./GrandChildB.svelte";\r
	export let color;\r
<\/script>\r
\r
<GrandChildA {color} />\r
<GrandChildB {color} />\r
`,Zt=`<script>\r
	export let color;\r
<\/script>\r
\r
<div>\r
	Child2: >> {color}\r
</div>\r
\r
<style>\r
</style>\r
`,Ft=`<script>\r
	export let color;\r
<\/script>\r
\r
<div style="color: {color}">GrandChild A</div>\r
`,Jt=`<script>\r
	export let color;\r
<\/script>\r
\r
<div>GrandChild B: {color}</div>\r
`;function Kt($){let t,e;return{c(){t=V("div"),e=p("GrandChild A"),this.h()},l(r){t=j(r,"DIV",{style:!0});var s=S(t);e=u(s,"GrandChild A"),s.forEach(f),this.h()},h(){Y(t,"color",$[0])},m(r,s){i(r,t,s),k(t,e)},p:G,i:G,o:G,d(r){r&&f(t)}}}function Lt($){return[nt("color")]}class Gt extends b{constructor(t){super(),B(this,t,Lt,Kt,I,{})}}function Qt($){let t,e,r;return{c(){t=V("div"),e=p("GrandChild B: "),r=p($[0])},l(s){t=j(s,"DIV",{});var n=S(t);e=u(n,"GrandChild B: "),r=u(n,$[0]),n.forEach(f)},m(s,n){i(s,t,n),k(t,e),k(t,r)},p:G,i:G,o:G,d(s){s&&f(t)}}}function Ut($){return[nt("color")]}class Xt extends b{constructor(t){super(),B(this,t,Ut,Qt,I,{})}}function Yt($){let t,e,r,s;return t=new Gt({}),r=new Xt({}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=P(n),g(r.$$.fragment,n)},m(n,a){v(t,n,a),i(n,e,a),v(r,n,a),s=!0},p:G,i(n){s||(h(t.$$.fragment,n),h(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){C(t,n),n&&f(e),C(r,n)}}}class te extends b{constructor(t){super(),B(this,t,null,Yt,I,{})}}function ee($){let t,e,r;return{c(){t=V("div"),e=p("Child2: >> "),r=p($[0])},l(s){t=j(s,"DIV",{});var n=S(t);e=u(n,"Child2: >> "),r=u(n,$[0]),n.forEach(f)},m(s,n){i(s,t,n),k(t,e),k(t,r)},p:G,i:G,o:G,d(s){s&&f(t)}}}function ne($){return[nt("color")]}class re extends b{constructor(t){super(),B(this,t,ne,ee,I,{})}}function se($){let t,e,r,s,n,a;return r=new te({}),n=new re({}),{c(){t=V("div"),e=p(`Parent A\r
	`),_(r.$$.fragment),s=A(),_(n.$$.fragment),this.h()},l(o){t=j(o,"DIV",{class:!0});var c=S(t);e=u(c,`Parent A\r
	`),g(r.$$.fragment,c),s=P(c),g(n.$$.fragment,c),c.forEach(f),this.h()},h(){et(t,"class","uno-cgps7b")},m(o,c){i(o,t,c),k(t,e),v(r,t,null),k(t,s),v(n,t,null),a=!0},p:G,i(o){a||(h(r.$$.fragment,o),h(n.$$.fragment,o),a=!0)},o(o){w(r.$$.fragment,o),w(n.$$.fragment,o),a=!1},d(o){o&&f(t),C(r),C(n)}}}function oe($){return xt("color","red"),[]}class At extends b{constructor(t){super(),B(this,t,oe,se,I,{})}}function le($){let t,e;return t=new At({}),{c(){_(t.$$.fragment)},l(r){g(t.$$.fragment,r)},m(r,s){v(t,r,s),e=!0},p:G,i(r){e||(h(t.$$.fragment,r),e=!0)},o(r){w(t.$$.fragment,r),e=!1},d(r){C(t,r)}}}class Z extends b{constructor(t){super(),B(this,t,null,le,I,{})}}const $e=`<script>\r
	import Parentv2 from "./Parentv2.svelte";\r
<\/script>\r
\r
<Parentv2 />\r
`;function ae($){let t,e,r;return e=new Gt({}),{c(){t=V("div"),_(e.$$.fragment),this.h()},l(s){t=j(s,"DIV",{class:!0});var n=S(t);g(e.$$.fragment,n),n.forEach(f),this.h()},h(){et(t,"class","uno-krel8d")},m(s,n){i(s,t,n),v(e,t,null),r=!0},p:G,i(s){r||(h(e.$$.fragment,s),r=!0)},o(s){w(e.$$.fragment,s),r=!1},d(s){s&&f(t),C(e)}}}function fe($){return xt("color","blue"),[]}class ie extends b{constructor(t){super(),B(this,t,fe,ae,I,{})}}function ce($){let t,e,r,s;return t=new At({}),r=new ie({}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment)},l(n){g(t.$$.fragment,n),e=P(n),g(r.$$.fragment,n)},m(n,a){v(t,n,a),i(n,e,a),v(r,n,a),s=!0},p:G,i(n){s||(h(t.$$.fragment,n),h(r.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),w(r.$$.fragment,n),s=!1},d(n){C(t,n),n&&f(e),C(r,n)}}}class W extends b{constructor(t){super(),B(this,t,null,ce,I,{})}}const me=`<script>\r
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
`,vt=`<script>\r
	import { getContext } from "svelte";\r
\r
	const color = getContext("color");\r
<\/script>\r
\r
<div style="color: {color}">GrandChild A</div>\r
`,ht=`<script>\r
	import { getContext } from "svelte";\r
\r
	const color = getContext("color");\r
<\/script>\r
\r
<div>GrandChild B: {color}</div>\r
`;function ue($){let t;return{c(){t=p("Context")},l(e){t=u(e,"Context")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function de($){let t;return{c(){t=p("all of its children")},l(e){t=u(e,"all of its children")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function _e($){let t,e,r,s,n;return t=new y({props:{$$slots:{default:[ue]},$$scope:{ctx:$}}}),r=new y({props:{$$slots:{default:[de]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),e=p(" is a way to pass data from a component to "),_(r.$$.fragment),s=p(".")},l(a){g(t.$$.fragment,a),e=u(a," is a way to pass data from a component to "),g(r.$$.fragment,a),s=u(a,".")},m(a,o){v(t,a,o),i(a,e,o),v(r,a,o),i(a,s,o),n=!0},p(a,o){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),t.$set(c);const m={};o&2&&(m.$$scope={dirty:o,ctx:a}),r.$set(m)},i(a){n||(h(t.$$.fragment,a),h(r.$$.fragment,a),n=!0)},o(a){w(t.$$.fragment,a),w(r.$$.fragment,a),n=!1},d(a){C(t,a),a&&f(e),C(r,a),a&&f(s)}}}function ge($){let t;return{c(){t=p("It is a bit inefficient though because we need to pass the props in every child component to its children.")},l(e){t=u(e,"It is a bit inefficient though because we need to pass the props in every child component to its children.")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function ve($){let t;return{c(){t=p("getContext")},l(e){t=u(e,"getContext")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function he($){let t;return{c(){t=p("setContext")},l(e){t=u(e,"setContext")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function we($){let t,e,r,s,n,a;return e=new y({props:{$$slots:{default:[ve]},$$scope:{ctx:$}}}),s=new y({props:{$$slots:{default:[he]},$$scope:{ctx:$}}}),{c(){t=p("Instead we can use "),_(e.$$.fragment),r=p(" and "),_(s.$$.fragment),n=p(".")},l(o){t=u(o,"Instead we can use "),g(e.$$.fragment,o),r=u(o," and "),g(s.$$.fragment,o),n=u(o,".")},m(o,c){i(o,t,c),v(e,o,c),i(o,r,c),v(s,o,c),i(o,n,c),a=!0},p(o,c){const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),e.$set(m);const x={};c&2&&(x.$$scope={dirty:c,ctx:o}),s.$set(x)},i(o){a||(h(e.$$.fragment,o),h(s.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),a=!1},d(o){o&&f(t),C(e,o),o&&f(r),C(s,o),o&&f(n)}}}function Ce($){let t;return{c(){t=p("context.js")},l(e){t=u(e,"context.js")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function xe($){let t,e="{",r;return{c(){t=p("export const key = "),r=p(e)},l(s){t=u(s,"export const key = "),r=u(s,e)},m(s,n){i(s,t,n),i(s,r,n)},p:G,d(s){s&&f(t),s&&f(r)}}}function Ge($){let t,e,r,s,n,a;return e=new y({props:{$$slots:{default:[Ce]},$$scope:{ctx:$}}}),s=new y({props:{$$slots:{default:[xe]},$$scope:{ctx:$}}}),{c(){t=p("We could also create a file "),_(e.$$.fragment),r=p(" where we export a key as an object "),_(s.$$.fragment),n=p(" that we then import in the files.")},l(o){t=u(o,"We could also create a file "),g(e.$$.fragment,o),r=u(o," where we export a key as an object "),g(s.$$.fragment,o),n=u(o," that we then import in the files.")},m(o,c){i(o,t,c),v(e,o,c),i(o,r,c),v(s,o,c),i(o,n,c),a=!0},p(o,c){const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),e.$set(m);const x={};c&2&&(x.$$scope={dirty:c,ctx:o}),s.$set(x)},i(o){a||(h(e.$$.fragment,o),h(s.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),a=!1},d(o){o&&f(t),C(e,o),o&&f(r),C(s,o),o&&f(n)}}}function Ae($){let t;return{c(){t=p("This wil make sure that we can't have collisions with our contexts (rather than using strings).")},l(e){t=u(e,"This wil make sure that we can't have collisions with our contexts (rather than using strings).")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function Pe($){let t;return{c(){t=p("context")},l(e){t=u(e,"context")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function be($){let t,e,r,s;return e=new y({props:{$$slots:{default:[Pe]},$$scope:{ctx:$}}}),{c(){t=p("Now that we're using "),_(e.$$.fragment),r=p(" we can do things like this:")},l(n){t=u(n,"Now that we're using "),g(e.$$.fragment,n),r=u(n," we can do things like this:")},m(n,a){i(n,t,a),v(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&f(t),C(e,n),n&&f(r)}}}function Be($){let t;return{c(){t=p("override")},l(e){t=u(e,"override")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function Ie($){let t;return{c(){t=p("new context")},l(e){t=u(e,"new context")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function ke($){let t;return{c(){t=p("its children")},l(e){t=u(e,"its children")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function ye($){let t,e,r,s,n,a,o,c;return e=new y({props:{$$slots:{default:[Be]},$$scope:{ctx:$}}}),s=new y({props:{$$slots:{default:[Ie]},$$scope:{ctx:$}}}),a=new y({props:{$$slots:{default:[ke]},$$scope:{ctx:$}}}),{c(){t=p("It is important to note that you could also "),_(e.$$.fragment),r=p(" the context within a child, which will then give the "),_(s.$$.fragment),n=p(" to "),_(a.$$.fragment),o=p(".")},l(m){t=u(m,"It is important to note that you could also "),g(e.$$.fragment,m),r=u(m," the context within a child, which will then give the "),g(s.$$.fragment,m),n=u(m," to "),g(a.$$.fragment,m),o=u(m,".")},m(m,x){i(m,t,x),v(e,m,x),i(m,r,x),v(s,m,x),i(m,n,x),v(a,m,x),i(m,o,x),c=!0},p(m,x){const R={};x&2&&(R.$$scope={dirty:x,ctx:m}),e.$set(R);const T={};x&2&&(T.$$scope={dirty:x,ctx:m}),s.$set(T);const D={};x&2&&(D.$$scope={dirty:x,ctx:m}),a.$set(D)},i(m){c||(h(e.$$.fragment,m),h(s.$$.fragment,m),h(a.$$.fragment,m),c=!0)},o(m){w(e.$$.fragment,m),w(s.$$.fragment,m),w(a.$$.fragment,m),c=!1},d(m){m&&f(t),C(e,m),m&&f(r),C(s,m),m&&f(n),C(a,m),m&&f(o)}}}function Re($){let t;return{c(){t=p("below")},l(e){t=u(e,"below")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function De($){let t,e,r,s;return e=new y({props:{$$slots:{default:[Re]},$$scope:{ctx:$}}}),{c(){t=p("If you want to retain the parent context for that child component but override in the children, the setContext() needs to be "),_(e.$$.fragment),r=p(" getContext() in that file.")},l(n){t=u(n,"If you want to retain the parent context for that child component but override in the children, the setContext() needs to be "),g(e.$$.fragment,n),r=u(n," getContext() in that file.")},m(n,a){i(n,t,a),v(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&f(t),C(e,n),n&&f(r)}}}function Ee($){let t;return{c(){t=p("top level")},l(e){t=u(e,"top level")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function Ve($){let t,e,r,s;return e=new y({props:{$$slots:{default:[Ee]},$$scope:{ctx:$}}}),{c(){t=p("Also, you can only set and get context in the "),_(e.$$.fragment),r=p(" (during component initialization).")},l(n){t=u(n,"Also, you can only set and get context in the "),g(e.$$.fragment,n),r=u(n," (during component initialization).")},m(n,a){i(n,t,a),v(e,n,a),i(n,r,a),s=!0},p(n,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),s=!1},d(n){n&&f(t),C(e,n),n&&f(r)}}}function je($){let t,e,r,s,n,a,o,c,m,x,R,T,D,F,M,J,H,K,q,L,z,Q,N,U;return t=new E({props:{$$slots:{default:[_e]},$$scope:{ctx:$}}}),r=new X({props:{name:[{name:"App",comp:O,raw:Ht,text:"Here we have a component with many children where we just pass a color as a prop."},{name:"Parent",comp:O,raw:Wt},{name:"Child",comp:O,raw:Ot},{name:"Child2",comp:O,raw:Zt},{name:"GrandChildA",comp:O,raw:Ft},{name:"GrandChildB",comp:O,raw:Jt}]}}),n=new E({props:{$$slots:{default:[ge]},$$scope:{ctx:$}}}),o=new E({props:{$$slots:{default:[we]},$$scope:{ctx:$}}}),m=new X({props:{name:[{name:"Appv2",comp:Z,raw:$e},{name:"Parentv2",comp:Z,raw:dt},{name:"Childv2",comp:Z,raw:_t},{name:"Child2v2",comp:Z,raw:gt},{name:"GrandChildAv2",comp:Z,raw:vt},{name:"GrandChildBv2",comp:Z,raw:ht}]}}),R=new E({props:{$$slots:{default:[Ge]},$$scope:{ctx:$}}}),D=new E({props:{$$slots:{default:[Ae]},$$scope:{ctx:$}}}),M=new E({props:{$$slots:{default:[be]},$$scope:{ctx:$}}}),H=new X({props:{name:[{name:"Appv3",comp:W,raw:me,text:"Here I added a Parent2 component that sets the color using context to blue. Its child, GrandChildAv2, will use that context to get the new color."},{name:"Parent2",comp:W,raw:pe},{name:"Parentv2",comp:W,raw:dt},{name:"Childv2",comp:W,raw:_t},{name:"Child2v2",comp:W,raw:gt},{name:"GrandChildAv2",comp:W,raw:vt},{name:"GrandChildBv2",comp:W,raw:ht}]}}),q=new E({props:{$$slots:{default:[ye]},$$scope:{ctx:$}}}),z=new E({props:{$$slots:{default:[De]},$$scope:{ctx:$}}}),N=new E({props:{$$slots:{default:[Ve]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),e=A(),_(r.$$.fragment),s=A(),_(n.$$.fragment),a=A(),_(o.$$.fragment),c=A(),_(m.$$.fragment),x=A(),_(R.$$.fragment),T=A(),_(D.$$.fragment),F=A(),_(M.$$.fragment),J=A(),_(H.$$.fragment),K=A(),_(q.$$.fragment),L=A(),_(z.$$.fragment),Q=A(),_(N.$$.fragment)},l(l){g(t.$$.fragment,l),e=P(l),g(r.$$.fragment,l),s=P(l),g(n.$$.fragment,l),a=P(l),g(o.$$.fragment,l),c=P(l),g(m.$$.fragment,l),x=P(l),g(R.$$.fragment,l),T=P(l),g(D.$$.fragment,l),F=P(l),g(M.$$.fragment,l),J=P(l),g(H.$$.fragment,l),K=P(l),g(q.$$.fragment,l),L=P(l),g(z.$$.fragment,l),Q=P(l),g(N.$$.fragment,l)},m(l,d){v(t,l,d),i(l,e,d),v(r,l,d),i(l,s,d),v(n,l,d),i(l,a,d),v(o,l,d),i(l,c,d),v(m,l,d),i(l,x,d),v(R,l,d),i(l,T,d),v(D,l,d),i(l,F,d),v(M,l,d),i(l,J,d),v(H,l,d),i(l,K,d),v(q,l,d),i(l,L,d),v(z,l,d),i(l,Q,d),v(N,l,d),U=!0},p(l,d){const rt={};d&2&&(rt.$$scope={dirty:d,ctx:l}),t.$set(rt);const st={};d&2&&(st.$$scope={dirty:d,ctx:l}),n.$set(st);const ot={};d&2&&(ot.$$scope={dirty:d,ctx:l}),o.$set(ot);const lt={};d&2&&(lt.$$scope={dirty:d,ctx:l}),R.$set(lt);const $t={};d&2&&($t.$$scope={dirty:d,ctx:l}),D.$set($t);const at={};d&2&&(at.$$scope={dirty:d,ctx:l}),M.$set(at);const ft={};d&2&&(ft.$$scope={dirty:d,ctx:l}),q.$set(ft);const it={};d&2&&(it.$$scope={dirty:d,ctx:l}),z.$set(it);const ct={};d&2&&(ct.$$scope={dirty:d,ctx:l}),N.$set(ct)},i(l){U||(h(t.$$.fragment,l),h(r.$$.fragment,l),h(n.$$.fragment,l),h(o.$$.fragment,l),h(m.$$.fragment,l),h(R.$$.fragment,l),h(D.$$.fragment,l),h(M.$$.fragment,l),h(H.$$.fragment,l),h(q.$$.fragment,l),h(z.$$.fragment,l),h(N.$$.fragment,l),U=!0)},o(l){w(t.$$.fragment,l),w(r.$$.fragment,l),w(n.$$.fragment,l),w(o.$$.fragment,l),w(m.$$.fragment,l),w(R.$$.fragment,l),w(D.$$.fragment,l),w(M.$$.fragment,l),w(H.$$.fragment,l),w(q.$$.fragment,l),w(z.$$.fragment,l),w(N.$$.fragment,l),U=!1},d(l){C(t,l),l&&f(e),C(r,l),l&&f(s),C(n,l),l&&f(a),C(o,l),l&&f(c),C(m,l),l&&f(x),C(R,l),l&&f(T),C(D,l),l&&f(F),C(M,l),l&&f(J),C(H,l),l&&f(K),C(q,l),l&&f(L),C(z,l),l&&f(Q),C(N,l)}}}function Se($){let t,e;const r=[$[0],wt];let s={$$slots:{default:[je]},$$scope:{ctx:$}};for(let n=0;n<r.length;n+=1)s=tt(s,r[n]);return t=new bt({props:s}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,a){v(t,n,a),e=!0},p(n,[a]){const o=a&1?Pt(r,[a&1&&mt(n[0]),a&0&&mt(wt)]):{};a&2&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){C(t,n)}}}const wt={title:"getContext",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-10T00:00:00.000Z",layout:"notes"};function Me($,t,e){return $.$$set=r=>{e(0,t=tt(tt({},t),pt(r)))},t=pt(t),[t]}class He extends b{constructor(t){super(),B(this,t,Me,Se,I,{})}}export{He as default,wt as metadata};
