import{s as I,f as x,a as A,e as B,g as N,c as E,j as P,i as m,X as q,d as p,r as D,l as g,m as w,w as U,x as j,y as V,u as L,z as ut,h as X,v as W,n as J,C as G,D as nt}from"./scheduler.a7cd560e.js";import{S as M,i as R,a as d,g as _t,t as h,c as dt,b as v,d as C,m as T,e as y}from"./index.396264e7.js";import{g as ht,a as ot}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as gt,P as O}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Z}from"./ShowMany.db7be1f3.js";import{B as wt}from"./Blockquote.fdb13b4a.js";import{S as F}from"./Strong.097578ae.js";import{C as bt}from"./Code.64283003.js";function st(f){let t,e;const o=f[2].default,s=D(o,f,f[1],null);return{c(){t=g("Component: "),s&&s.c()},l(n){t=w(n,"Component: "),s&&s.l(n)},m(n,r){m(n,t,r),s&&s.m(n,r),e=!0},p(n,r){s&&s.p&&(!e||r&2)&&U(s,o,n,n[1],e?V(o,n[1],r,null):j(n[1]),null)},i(n){e||(d(s,n),e=!0)},o(n){h(s,n),e=!1},d(n){n&&p(t),s&&s.d(n)}}}function kt(f){let t,e,o,s,n,r,l=f[0]&&st(f);return{c(){t=x("input"),e=A(),l&&l.c(),o=B(),this.h()},l(a){t=N(a,"INPUT",{type:!0}),e=E(a),l&&l.l(a),o=B(),this.h()},h(){P(t,"type","checkbox")},m(a,c){m(a,t,c),t.checked=f[0],m(a,e,c),l&&l.m(a,c),m(a,o,c),s=!0,n||(r=q(t,"change",f[3]),n=!0)},p(a,[c]){c&1&&(t.checked=a[0]),a[0]?l?(l.p(a,c),c&1&&d(l,1)):(l=st(a),l.c(),d(l,1),l.m(o.parentNode,o)):l&&(_t(),h(l,1,1,()=>{l=null}),dt())},i(a){s||(d(l),s=!0)},o(a){h(l),s=!1},d(a){a&&(p(t),p(e),p(o)),l&&l.d(a),n=!1,r()}}}function vt(f,t,e){let{$$slots:o={},$$scope:s}=t,n=!1;function r(){n=this.checked,e(0,n)}return f.$$set=l=>{"$$scope"in l&&e(1,s=l.$$scope)},[n,s,o,r]}class Ct extends M{constructor(t){super(),R(this,t,vt,kt,I,{})}}function Tt(f){let t,e,o="world";return{c(){t=g(`Hello\r
	`),e=x("span"),e.textContent=o},l(s){t=w(s,`Hello\r
	`),e=N(s,"SPAN",{["data-svelte-h"]:!0}),L(e)!=="svelte-1qa6y5u"&&(e.textContent=o)},m(s,n){m(s,t,n),m(s,e,n)},p:ut,d(s){s&&(p(t),p(e))}}}function yt(f){let t,e=`Hello
	<span>world</span>`,o,s,n;return s=new Ct({props:{$$slots:{default:[Tt]},$$scope:{ctx:f}}}),{c(){t=x("div"),t.innerHTML=e,o=A(),v(s.$$.fragment)},l(r){t=N(r,"DIV",{["data-svelte-h"]:!0}),L(t)!=="svelte-1pvezdz"&&(t.innerHTML=e),o=E(r),C(s.$$.fragment,r)},m(r,l){m(r,t,l),m(r,o,l),T(s,r,l),n=!0},p(r,[l]){const a={};l&1&&(a.$$scope={dirty:l,ctx:r}),s.$set(a)},i(r){n||(d(s.$$.fragment,r),n=!0)},o(r){h(s.$$.fragment,r),n=!1},d(r){r&&(p(t),p(o)),y(s,r)}}}class lt extends M{constructor(t){super(),R(this,t,null,yt,I,{})}}const Ht=`<script>\r
	import Component from "./Component.svelte";\r
<\/script>\r
\r
<div>\r
	Hello\r
	<span>world</span>\r
</div>\r
\r
<Component>\r
	Hello\r
	<span>world</span>\r
</Component>\r
\r
<style>\r
</style>\r
`,At=`<script>\r
	let show = false;\r
<\/script>\r
\r
<input type="checkbox" bind:checked={show} />\r
\r
{#if show}\r
	Component: <slot />\r
{/if}\r
\r
<style>\r
</style>\r
`;function rt(f){let t;const e=f[2].default,o=D(e,f,f[1],null),s=o||Et();return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,r){s&&s.m(n,r),t=!0},p(n,r){o&&o.p&&(!t||r&2)&&U(o,e,n,n[1],t?V(e,n[1],r,null):j(n[1]),null)},i(n){t||(d(s,n),t=!0)},o(n){h(s,n),t=!1},d(n){s&&s.d(n)}}}function Et(f){let t;return{c(){t=g("This is a fallback for when nothing was passed into the slot from the parent")},l(e){t=w(e,"This is a fallback for when nothing was passed into the slot from the parent")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function xt(f){let t,e,o,s,n,r,l=f[0]&&rt(f);return{c(){t=x("input"),e=A(),l&&l.c(),o=B(),this.h()},l(a){t=N(a,"INPUT",{type:!0}),e=E(a),l&&l.l(a),o=B(),this.h()},h(){P(t,"type","checkbox")},m(a,c){m(a,t,c),t.checked=f[0],m(a,e,c),l&&l.m(a,c),m(a,o,c),s=!0,n||(r=q(t,"change",f[3]),n=!0)},p(a,[c]){c&1&&(t.checked=a[0]),a[0]?l?(l.p(a,c),c&1&&d(l,1)):(l=rt(a),l.c(),d(l,1),l.m(o.parentNode,o)):l&&(_t(),h(l,1,1,()=>{l=null}),dt())},i(a){s||(d(l),s=!0)},o(a){h(l),s=!1},d(a){a&&(p(t),p(e),p(o)),l&&l.d(a),n=!1,r()}}}function Nt(f,t,e){let{$$slots:o={},$$scope:s}=t,n=!1;function r(){n=this.checked,e(0,n)}return f.$$set=l=>{"$$scope"in l&&e(1,s=l.$$scope)},[n,s,o,r]}class ft extends M{constructor(t){super(),R(this,t,Nt,xt,I,{})}}function St(f){let t,e,o,s="-",n,r;return{c(){t=g(f[0]),e=A(),o=x("button"),o.textContent=s},l(l){t=w(l,f[0]),e=E(l),o=N(l,"BUTTON",{["data-svelte-h"]:!0}),L(o)!=="svelte-1i0ct90"&&(o.textContent=s)},m(l,a){m(l,t,a),m(l,e,a),m(l,o,a),n||(r=q(o,"click",f[2]),n=!0)},p(l,a){a&1&&J(t,l[0])},d(l){l&&(p(t),p(e),p(o)),n=!1,r()}}}function It(f){let t,e,o,s,n="+",r,l,a,c,u,i,k;return l=new ft({props:{$$slots:{default:[St]},$$scope:{ctx:f}}}),c=new ft({}),{c(){t=x("div"),e=g(f[0]),o=A(),s=x("button"),s.textContent=n,r=A(),v(l.$$.fragment),a=A(),v(c.$$.fragment)},l(_){t=N(_,"DIV",{});var H=X(t);e=w(H,f[0]),o=E(H),s=N(H,"BUTTON",{["data-svelte-h"]:!0}),L(s)!=="svelte-1upznsy"&&(s.textContent=n),H.forEach(p),r=E(_),C(l.$$.fragment,_),a=E(_),C(c.$$.fragment,_)},m(_,H){m(_,t,H),W(t,e),W(t,o),W(t,s),m(_,r,H),T(l,_,H),m(_,a,H),T(c,_,H),u=!0,i||(k=q(s,"click",f[1]),i=!0)},p(_,[H]){(!u||H&1)&&J(e,_[0]);const S={};H&9&&(S.$$scope={dirty:H,ctx:_}),l.$set(S)},i(_){u||(d(l.$$.fragment,_),d(c.$$.fragment,_),u=!0)},o(_){h(l.$$.fragment,_),h(c.$$.fragment,_),u=!1},d(_){_&&(p(t),p(r),p(a)),y(l,_),y(c,_),i=!1,k()}}}function Mt(f,t,e){let o=0;return[o,()=>e(0,o++,o),()=>e(0,o--,o)]}class at extends M{constructor(t){super(),R(this,t,Mt,It,I,{})}}const Rt=`<script>\r
	import Component2 from "./Component2.svelte";\r
\r
  let count = 0;\r
<\/script>\r
\r
<div>\r
	{count}\r
	<button on:click={() => count++}>+</button>\r
</div>\r
\r
<Component2>\r
	{count}\r
	<button on:click={() => count--}>-</button>\r
</Component2>\r
\r
<Component2></Component2>\r
\r
<style>\r
</style>\r
`,Wt=`<script>\r
	let show = false;\r
<\/script>\r
\r
<input type="checkbox" bind:checked={show} />\r
\r
{#if show}\r
	<!-- we can have a fallback inside of the slot -->\r
	<slot>This is a fallback for when nothing was passed into the slot from the parent</slot>\r
{/if}\r
\r
<style>\r
</style>\r
`,Ft=f=>({}),ct=f=>({}),Lt=f=>({}),$t=f=>({});function Ot(f){let t;return{c(){t=g("Footer slot with fallback")},l(e){t=w(e,"Footer slot with fallback")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function Pt(f){let t;return{c(){t=g("Header slot with fallback")},l(e){t=w(e,"Header slot with fallback")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function qt(f){let t,e,o,s;const n=f[1].header,r=D(n,f,f[0],$t),l=r||Ot(),a=f[1].footer,c=D(a,f,f[0],ct),u=c||Pt();return{c(){t=x("header"),l&&l.c(),e=A(),o=x("footer"),u&&u.c()},l(i){t=N(i,"HEADER",{});var k=X(t);l&&l.l(k),k.forEach(p),e=E(i),o=N(i,"FOOTER",{});var _=X(o);u&&u.l(_),_.forEach(p)},m(i,k){m(i,t,k),l&&l.m(t,null),m(i,e,k),m(i,o,k),u&&u.m(o,null),s=!0},p(i,[k]){r&&r.p&&(!s||k&1)&&U(r,n,i,i[0],s?V(n,i[0],k,Lt):j(i[0]),$t),c&&c.p&&(!s||k&1)&&U(c,a,i,i[0],s?V(a,i[0],k,Ft):j(i[0]),ct)},i(i){s||(d(l,i),d(u,i),s=!0)},o(i){h(l,i),h(u,i),s=!1},d(i){i&&(p(t),p(e),p(o)),l&&l.d(i),u&&u.d(i)}}}function zt(f,t,e){let{$$slots:o={},$$scope:s}=t;return f.$$set=n=>{"$$scope"in n&&e(0,s=n.$$scope)},[s,o]}class pt extends M{constructor(t){super(),R(this,t,zt,qt,I,{})}}function Bt(f){let t,e,o,s,n="-",r,l;return{c(){t=x("slot:template"),e=g(f[0]),o=A(),s=x("button"),s.textContent=n,this.h()},l(a){t=N(a,"SLOT:TEMPLATE",{slot:!0});var c=X(t);e=w(c,f[0]),o=E(c),s=N(c,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(s)!=="svelte-1i0ct90"&&(s.textContent=n),c.forEach(p),this.h()},h(){P(s,"class","svelte-j4xuxf"),P(t,"slot","header")},m(a,c){m(a,t,c),W(t,e),W(t,o),W(t,s),r||(l=q(s,"click",f[1]),r=!0)},p(a,c){c&1&&J(e,a[0])},d(a){a&&p(t),r=!1,l()}}}function Dt(f){let t,e="Element for footer";return{c(){t=x("div"),t.textContent=e,this.h()},l(o){t=N(o,"DIV",{slot:!0,["data-svelte-h"]:!0}),L(t)!=="svelte-1ehtbu8"&&(t.textContent=e),this.h()},h(){P(t,"slot","footer")},m(o,s){m(o,t,s)},p:ut,d(o){o&&p(t)}}}function Ut(f){let t,e,o,s;return t=new pt({props:{$$slots:{footer:[Dt],header:[Bt]},$$scope:{ctx:f}}}),o=new pt({}),{c(){v(t.$$.fragment),e=A(),v(o.$$.fragment)},l(n){C(t.$$.fragment,n),e=E(n),C(o.$$.fragment,n)},m(n,r){T(t,n,r),m(n,e,r),T(o,n,r),s=!0},p(n,[r]){const l={};r&5&&(l.$$scope={dirty:r,ctx:n}),t.$set(l)},i(n){s||(d(t.$$.fragment,n),d(o.$$.fragment,n),s=!0)},o(n){h(t.$$.fragment,n),h(o.$$.fragment,n),s=!1},d(n){n&&p(e),y(t,n),y(o,n)}}}function jt(f,t,e){let o=0;return[o,()=>e(0,o--,o)]}class mt extends M{constructor(t){super(),R(this,t,jt,Ut,I,{})}}const Vt=`<script>\r
	import Component3 from "./Component3.svelte";\r
\r
	let count = 0;\r
<\/script>\r
\r
<Component3>\r
	<slot:template slot="header">\r
		{count}\r
		<button on:click={() => count--}>-</button>\r
	</slot:template>\r
	<div slot="footer">Element for footer</div>\r
</Component3>\r
\r
<Component3 />\r
\r
<style>\r
	/* styles are still scoped so even if we're adding something to a slot the styles come from this component! */\r
	button {\r
		font-size: 48px;\r
	}\r
</style>\r
`,Xt=`<script>\r
<\/script>\r
\r
<header>\r
	<slot name="header">Footer slot with fallback</slot>\r
</header>\r
\r
<footer>\r
	<slot name="footer">Header slot with fallback</slot>\r
</footer>\r
\r
<style>\r
</style>\r
`;function Zt(f){let t;return{c(){t=g("compose components")},l(e){t=w(e,"compose components")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function Gt(f){let t,e,o,s;return e=new F({props:{$$slots:{default:[Zt]},$$scope:{ctx:f}}}),{c(){t=g("Slots are a way to "),v(e.$$.fragment),o=g(".")},l(n){t=w(n,"Slots are a way to "),C(e.$$.fragment,n),o=w(n,".")},m(n,r){m(n,t,r),T(e,n,r),m(n,o,r),s=!0},p(n,r){const l={};r&2&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){s||(d(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){n&&(p(t),p(o)),y(e,n)}}}function Jt(f){let t;return{c(){t=g("Compose components?")},l(e){t=w(e,"Compose components?")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function Kt(f){let t,e;return t=new O({props:{$$slots:{default:[Jt]},$$scope:{ctx:f}}}),{c(){v(t.$$.fragment)},l(o){C(t.$$.fragment,o)},m(o,s){T(t,o,s),e=!0},p(o,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:o}),t.$set(n)},i(o){e||(d(t.$$.fragment,o),e=!0)},o(o){h(t.$$.fragment,o),e=!1},d(o){y(t,o)}}}function Qt(f){let t;return{c(){t=g("<div><span></span></div>")},l(e){t=w(e,"<div><span></span></div>")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function Yt(f){let t;return{c(){t=g("elements")},l(e){t=w(e,"elements")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function te(f){let t;return{c(){t=g("other components")},l(e){t=w(e,"other components")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function ee(f){let t,e,o,s,n,r,l,a;return e=new bt({props:{$$slots:{default:[Qt]},$$scope:{ctx:f}}}),s=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:f}}}),r=new F({props:{$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){t=g("In HTML you can have elements inside of elements, for example "),v(e.$$.fragment),o=g(". With slots we can do the same thing, we can put "),v(s.$$.fragment),n=g(" or "),v(r.$$.fragment),l=g(" inside of our components.")},l(c){t=w(c,"In HTML you can have elements inside of elements, for example "),C(e.$$.fragment,c),o=w(c,". With slots we can do the same thing, we can put "),C(s.$$.fragment,c),n=w(c," or "),C(r.$$.fragment,c),l=w(c," inside of our components.")},m(c,u){m(c,t,u),T(e,c,u),m(c,o,u),T(s,c,u),m(c,n,u),T(r,c,u),m(c,l,u),a=!0},p(c,u){const i={};u&2&&(i.$$scope={dirty:u,ctx:c}),e.$set(i);const k={};u&2&&(k.$$scope={dirty:u,ctx:c}),s.$set(k);const _={};u&2&&(_.$$scope={dirty:u,ctx:c}),r.$set(_)},i(c){a||(d(e.$$.fragment,c),d(s.$$.fragment,c),d(r.$$.fragment,c),a=!0)},o(c){h(e.$$.fragment,c),h(s.$$.fragment,c),h(r.$$.fragment,c),a=!1},d(c){c&&(p(t),p(o),p(n),p(l)),y(e,c),y(s,c),y(r,c)}}}function ne(f){let t;return{c(){t=g("fallback")},l(e){t=w(e,"fallback")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function oe(f){let t,e,o,s;return e=new F({props:{$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){t=g("What if nothing was passed into a slot? We can have a "),v(e.$$.fragment),o=g(":")},l(n){t=w(n,"What if nothing was passed into a slot? We can have a "),C(e.$$.fragment,n),o=w(n,":")},m(n,r){m(n,t,r),T(e,n,r),m(n,o,r),s=!0},p(n,r){const l={};r&2&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){s||(d(e.$$.fragment,n),s=!0)},o(n){h(e.$$.fragment,n),s=!1},d(n){n&&(p(t),p(o)),y(e,n)}}}function se(f){let t;return{c(){t=g("named slots")},l(e){t=w(e,"named slots")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function le(f){let t;return{c(){t=g("default")},l(e){t=w(e,"default")},m(e,o){m(e,t,o)},d(e){e&&p(t)}}}function re(f){let t,e,o,s,n,r;return e=new F({props:{$$slots:{default:[se]},$$scope:{ctx:f}}}),s=new F({props:{$$slots:{default:[le]},$$scope:{ctx:f}}}),{c(){t=g("Finally we can have "),v(e.$$.fragment),o=g(". Note that a slot without a name is named "),v(s.$$.fragment),n=g(" so you can't use that.")},l(l){t=w(l,"Finally we can have "),C(e.$$.fragment,l),o=w(l,". Note that a slot without a name is named "),C(s.$$.fragment,l),n=w(l," so you can't use that.")},m(l,a){m(l,t,a),T(e,l,a),m(l,o,a),T(s,l,a),m(l,n,a),r=!0},p(l,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:l}),e.$set(c);const u={};a&2&&(u.$$scope={dirty:a,ctx:l}),s.$set(u)},i(l){r||(d(e.$$.fragment,l),d(s.$$.fragment,l),r=!0)},o(l){h(e.$$.fragment,l),h(s.$$.fragment,l),r=!1},d(l){l&&(p(t),p(o),p(n)),y(e,l),y(s,l)}}}function fe(f){let t,e,o,s,n,r,l,a,c,u,i,k,_,H,S,z;return t=new O({props:{$$slots:{default:[Gt]},$$scope:{ctx:f}}}),o=new wt({props:{$$slots:{default:[Kt]},$$scope:{ctx:f}}}),n=new O({props:{$$slots:{default:[ee]},$$scope:{ctx:f}}}),l=new Z({props:{name:[{name:"App",comp:lt,raw:Ht,text:"Here is a simple example. We can put the slot anywhere, before or after the text. Here it is inside an if block that is controlled by the checkbox."},{name:"Component",comp:lt,raw:At,text:""}]}}),c=new O({props:{$$slots:{default:[oe]},$$scope:{ctx:f}}}),i=new Z({props:{name:[{name:"App2",comp:at,raw:Rt,text:"We can have a fallback by adding content inside of the slot tag."},{name:"Component2",comp:at,raw:Wt,text:""}]}}),_=new O({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),S=new Z({props:{name:[{name:"App3",comp:mt,raw:Vt,text:"If we want a named slot with a single element we can add it as a slot attribute, but if we want to group multiple elements we can have a slot template with a slot attribute which wraps all elements inside."},{name:"Component3",comp:mt,raw:Xt,text:""}]}}),{c(){v(t.$$.fragment),e=A(),v(o.$$.fragment),s=A(),v(n.$$.fragment),r=A(),v(l.$$.fragment),a=A(),v(c.$$.fragment),u=A(),v(i.$$.fragment),k=A(),v(_.$$.fragment),H=A(),v(S.$$.fragment)},l($){C(t.$$.fragment,$),e=E($),C(o.$$.fragment,$),s=E($),C(n.$$.fragment,$),r=E($),C(l.$$.fragment,$),a=E($),C(c.$$.fragment,$),u=E($),C(i.$$.fragment,$),k=E($),C(_.$$.fragment,$),H=E($),C(S.$$.fragment,$)},m($,b){T(t,$,b),m($,e,b),T(o,$,b),m($,s,b),T(n,$,b),m($,r,b),T(l,$,b),m($,a,b),T(c,$,b),m($,u,b),T(i,$,b),m($,k,b),T(_,$,b),m($,H,b),T(S,$,b),z=!0},p($,b){const K={};b&2&&(K.$$scope={dirty:b,ctx:$}),t.$set(K);const Q={};b&2&&(Q.$$scope={dirty:b,ctx:$}),o.$set(Q);const Y={};b&2&&(Y.$$scope={dirty:b,ctx:$}),n.$set(Y);const tt={};b&2&&(tt.$$scope={dirty:b,ctx:$}),c.$set(tt);const et={};b&2&&(et.$$scope={dirty:b,ctx:$}),_.$set(et)},i($){z||(d(t.$$.fragment,$),d(o.$$.fragment,$),d(n.$$.fragment,$),d(l.$$.fragment,$),d(c.$$.fragment,$),d(i.$$.fragment,$),d(_.$$.fragment,$),d(S.$$.fragment,$),z=!0)},o($){h(t.$$.fragment,$),h(o.$$.fragment,$),h(n.$$.fragment,$),h(l.$$.fragment,$),h(c.$$.fragment,$),h(i.$$.fragment,$),h(_.$$.fragment,$),h(S.$$.fragment,$),z=!1},d($){$&&(p(e),p(s),p(r),p(a),p(u),p(k),p(H)),y(t,$),y(o,$),y(n,$),y(l,$),y(c,$),y(i,$),y(_,$),y(S,$)}}}function ae(f){let t,e;const o=[f[0],it];let s={$$slots:{default:[fe]},$$scope:{ctx:f}};for(let n=0;n<o.length;n+=1)s=G(s,o[n]);return t=new gt({props:s}),{c(){v(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,r){T(t,n,r),e=!0},p(n,[r]){const l=r&1?ht(o,[r&1&&ot(n[0]),r&0&&ot(it)]):{};r&2&&(l.$$scope={dirty:r,ctx:n}),t.$set(l)},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){h(t.$$.fragment,n),e=!1},d(n){y(t,n)}}}const it={title:"<slot/>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function ce(f,t,e){return f.$$set=o=>{e(0,t=G(G({},t),nt(o)))},t=nt(t),[t]}class ge extends M{constructor(t){super(),R(this,t,ce,ae,I,{})}}export{ge as default,it as metadata};
