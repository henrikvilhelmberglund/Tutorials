import{S as F,i as M,s as O,k as S,a as A,e as U,l as I,c as H,n as D,b as u,T as q,g as w,v as ie,d as b,f as ue,h as m,C as V,q as d,r as h,E as j,F as z,G,y as v,m as W,z as C,D as N,A as E,B as T,H as _e,u as J,K as Z,L as de,M as te,N as ne}from"./index.0b5cc0d7.js";import{M as he,P as B}from"./mdsvex-layout-notes.c527e9b3.js";import{S as K}from"./ShowMany.5b53376e.js";import{B as we}from"./Blockquote.dafc4c5a.js";import{S as P}from"./Strong.272c5f79.js";function oe(f){let e,t;const o=f[2].default,l=V(o,f,f[1],null);return{c(){e=d("Component: "),l&&l.c()},l(n){e=h(n,"Component: "),l&&l.l(n)},m(n,a){u(n,e,a),l&&l.m(n,a),t=!0},p(n,a){l&&l.p&&(!t||a&2)&&j(l,o,n,n[1],t?G(o,n[1],a,null):z(n[1]),null)},i(n){t||(w(l,n),t=!0)},o(n){b(l,n),t=!1},d(n){n&&m(e),l&&l.d(n)}}}function be(f){let e,t,o,l,n,a,s=f[0]&&oe(f);return{c(){e=S("input"),t=A(),s&&s.c(),o=U(),this.h()},l(r){e=I(r,"INPUT",{type:!0}),t=H(r),s&&s.l(r),o=U(),this.h()},h(){D(e,"type","checkbox")},m(r,$){u(r,e,$),e.checked=f[0],u(r,t,$),s&&s.m(r,$),u(r,o,$),l=!0,n||(a=q(e,"change",f[3]),n=!0)},p(r,[$]){$&1&&(e.checked=r[0]),r[0]?s?(s.p(r,$),$&1&&w(s,1)):(s=oe(r),s.c(),w(s,1),s.m(o.parentNode,o)):s&&(ie(),b(s,1,1,()=>{s=null}),ue())},i(r){l||(w(s),l=!0)},o(r){b(s),l=!1},d(r){r&&m(e),r&&m(t),s&&s.d(r),r&&m(o),n=!1,a()}}}function ke(f,e,t){let{$$slots:o={},$$scope:l}=e,n=!1;function a(){n=this.checked,t(0,n)}return f.$$set=s=>{"$$scope"in s&&t(1,l=s.$$scope)},[n,l,o,a]}class ge extends F{constructor(e){super(),M(this,e,ke,be,O,{})}}function ve(f){let e,t,o;return{c(){e=d(`Hello\r
	`),t=S("span"),o=d("world")},l(l){e=h(l,`Hello\r
	`),t=I(l,"SPAN",{});var n=W(t);o=h(n,"world"),n.forEach(m)},m(l,n){u(l,e,n),u(l,t,n),N(t,o)},p:_e,d(l){l&&m(e),l&&m(t)}}}function Ce(f){let e,t,o,l,n,a,s;return a=new ge({props:{$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){e=S("div"),t=d(`Hello\r
	`),o=S("span"),l=d("world"),n=A(),v(a.$$.fragment)},l(r){e=I(r,"DIV",{});var $=W(e);t=h($,`Hello\r
	`),o=I($,"SPAN",{});var c=W(o);l=h(c,"world"),c.forEach(m),$.forEach(m),n=H(r),C(a.$$.fragment,r)},m(r,$){u(r,e,$),N(e,t),N(e,o),N(o,l),u(r,n,$),E(a,r,$),s=!0},p(r,[$]){const c={};$&1&&(c.$$scope={dirty:$,ctx:r}),a.$set(c)},i(r){s||(w(a.$$.fragment,r),s=!0)},o(r){b(a.$$.fragment,r),s=!1},d(r){r&&m(e),r&&m(n),T(a,r)}}}class se extends F{constructor(e){super(),M(this,e,null,Ce,O,{})}}const Ee=`<script>\r
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
`,Te=`<script>\r
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
`;function le(f){let e;const t=f[2].default,o=V(t,f,f[1],null),l=o||ye();return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,a){l&&l.m(n,a),e=!0},p(n,a){o&&o.p&&(!e||a&2)&&j(o,t,n,n[1],e?G(t,n[1],a,null):z(n[1]),null)},i(n){e||(w(l,n),e=!0)},o(n){b(l,n),e=!1},d(n){l&&l.d(n)}}}function ye(f){let e;return{c(){e=d("This is a fallback for when nothing was passed into the slot from the parent")},l(t){e=h(t,"This is a fallback for when nothing was passed into the slot from the parent")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Ae(f){let e,t,o,l,n,a,s=f[0]&&le(f);return{c(){e=S("input"),t=A(),s&&s.c(),o=U(),this.h()},l(r){e=I(r,"INPUT",{type:!0}),t=H(r),s&&s.l(r),o=U(),this.h()},h(){D(e,"type","checkbox")},m(r,$){u(r,e,$),e.checked=f[0],u(r,t,$),s&&s.m(r,$),u(r,o,$),l=!0,n||(a=q(e,"change",f[3]),n=!0)},p(r,[$]){$&1&&(e.checked=r[0]),r[0]?s?(s.p(r,$),$&1&&w(s,1)):(s=le(r),s.c(),w(s,1),s.m(o.parentNode,o)):s&&(ie(),b(s,1,1,()=>{s=null}),ue())},i(r){l||(w(s),l=!0)},o(r){b(s),l=!1},d(r){r&&m(e),r&&m(t),s&&s.d(r),r&&m(o),n=!1,a()}}}function He(f,e,t){let{$$slots:o={},$$scope:l}=e,n=!1;function a(){n=this.checked,t(0,n)}return f.$$set=s=>{"$$scope"in s&&t(1,l=s.$$scope)},[n,l,o,a]}class re extends F{constructor(e){super(),M(this,e,He,Ae,O,{})}}function Ne(f){let e,t,o,l,n,a;return{c(){e=d(f[0]),t=A(),o=S("button"),l=d("-")},l(s){e=h(s,f[0]),t=H(s),o=I(s,"BUTTON",{});var r=W(o);l=h(r,"-"),r.forEach(m)},m(s,r){u(s,e,r),u(s,t,r),u(s,o,r),N(o,l),n||(a=q(o,"click",f[2]),n=!0)},p(s,r){r&1&&J(e,s[0])},d(s){s&&m(e),s&&m(t),s&&m(o),n=!1,a()}}}function Se(f){let e,t,o,l,n,a,s,r,$,c,i,g;return s=new re({props:{$$slots:{default:[Ne]},$$scope:{ctx:f}}}),$=new re({}),{c(){e=S("div"),t=d(f[0]),o=A(),l=S("button"),n=d("+"),a=A(),v(s.$$.fragment),r=A(),v($.$$.fragment)},l(_){e=I(_,"DIV",{});var y=W(e);t=h(y,f[0]),o=H(y),l=I(y,"BUTTON",{});var R=W(l);n=h(R,"+"),R.forEach(m),y.forEach(m),a=H(_),C(s.$$.fragment,_),r=H(_),C($.$$.fragment,_)},m(_,y){u(_,e,y),N(e,t),N(e,o),N(e,l),N(l,n),u(_,a,y),E(s,_,y),u(_,r,y),E($,_,y),c=!0,i||(g=q(l,"click",f[1]),i=!0)},p(_,[y]){(!c||y&1)&&J(t,_[0]);const R={};y&9&&(R.$$scope={dirty:y,ctx:_}),s.$set(R)},i(_){c||(w(s.$$.fragment,_),w($.$$.fragment,_),c=!0)},o(_){b(s.$$.fragment,_),b($.$$.fragment,_),c=!1},d(_){_&&m(e),_&&m(a),T(s,_),_&&m(r),T($,_),i=!1,g()}}}function Ie(f,e,t){let o=0;return[o,()=>t(0,o++,o),()=>t(0,o--,o)]}class fe extends F{constructor(e){super(),M(this,e,Ie,Se,O,{})}}const Re=`<script>\r
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
`,We=`<script>\r
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
`,Fe=f=>({}),ae=f=>({}),Me=f=>({}),pe=f=>({});function Oe(f){let e;return{c(){e=d("Footer slot with fallback")},l(t){e=h(t,"Footer slot with fallback")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Pe(f){let e;return{c(){e=d("Header slot with fallback")},l(t){e=h(t,"Header slot with fallback")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Be(f){let e,t,o,l;const n=f[1].header,a=V(n,f,f[0],pe),s=a||Oe(),r=f[1].footer,$=V(r,f,f[0],ae),c=$||Pe();return{c(){e=S("header"),s&&s.c(),t=A(),o=S("footer"),c&&c.c()},l(i){e=I(i,"HEADER",{});var g=W(e);s&&s.l(g),g.forEach(m),t=H(i),o=I(i,"FOOTER",{});var _=W(o);c&&c.l(_),_.forEach(m)},m(i,g){u(i,e,g),s&&s.m(e,null),u(i,t,g),u(i,o,g),c&&c.m(o,null),l=!0},p(i,[g]){a&&a.p&&(!l||g&1)&&j(a,n,i,i[0],l?G(n,i[0],g,Me):z(i[0]),pe),$&&$.p&&(!l||g&1)&&j($,r,i,i[0],l?G(r,i[0],g,Fe):z(i[0]),ae)},i(i){l||(w(s,i),w(c,i),l=!0)},o(i){b(s,i),b(c,i),l=!1},d(i){i&&m(e),s&&s.d(i),i&&m(t),i&&m(o),c&&c.d(i)}}}function De(f,e,t){let{$$slots:o={},$$scope:l}=e;return f.$$set=n=>{"$$scope"in n&&t(0,l=n.$$scope)},[l,o]}class $e extends F{constructor(e){super(),M(this,e,De,Be,O,{})}}function qe(f){let e,t,o,l,n,a,s;return{c(){e=S("slot:template"),t=d(f[0]),o=A(),l=S("button"),n=d("-"),this.h()},l(r){e=I(r,"SLOT:TEMPLATE",{slot:!0});var $=W(e);t=h($,f[0]),o=H($),l=I($,"BUTTON",{class:!0});var c=W(l);n=h(c,"-"),c.forEach(m),$.forEach(m),this.h()},h(){D(l,"class","svelte-j4xuxf"),D(e,"slot","header")},m(r,$){u(r,e,$),N(e,t),N(e,o),N(e,l),N(l,n),a||(s=q(l,"click",f[1]),a=!0)},p(r,$){$&1&&J(t,r[0])},d(r){r&&m(e),a=!1,s()}}}function Le(f){let e,t;return{c(){e=S("div"),t=d("Element for footer"),this.h()},l(o){e=I(o,"DIV",{slot:!0});var l=W(e);t=h(l,"Element for footer"),l.forEach(m),this.h()},h(){D(e,"slot","footer")},m(o,l){u(o,e,l),N(e,t)},p:_e,d(o){o&&m(e)}}}function Ue(f){let e,t,o,l;return e=new $e({props:{$$slots:{footer:[Le],header:[qe]},$$scope:{ctx:f}}}),o=new $e({}),{c(){v(e.$$.fragment),t=A(),v(o.$$.fragment)},l(n){C(e.$$.fragment,n),t=H(n),C(o.$$.fragment,n)},m(n,a){E(e,n,a),u(n,t,a),E(o,n,a),l=!0},p(n,[a]){const s={};a&5&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){l||(w(e.$$.fragment,n),w(o.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),b(o.$$.fragment,n),l=!1},d(n){T(e,n),n&&m(t),T(o,n)}}}function Ve(f,e,t){let o=0;return[o,()=>t(0,o--,o)]}class ce extends F{constructor(e){super(),M(this,e,Ve,Ue,O,{})}}const je=`<script>\r
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
`,ze=`<script>\r
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
`;function Ge(f){let e;return{c(){e=d("compose components")},l(t){e=h(t,"compose components")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Ke(f){let e,t,o,l;return t=new P({props:{$$slots:{default:[Ge]},$$scope:{ctx:f}}}),{c(){e=d("Slots are a way to "),v(t.$$.fragment),o=d(".")},l(n){e=h(n,"Slots are a way to "),C(t.$$.fragment,n),o=h(n,".")},m(n,a){u(n,e,a),E(t,n,a),u(n,o,a),l=!0},p(n,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:n}),t.$set(s)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){b(t.$$.fragment,n),l=!1},d(n){n&&m(e),T(t,n),n&&m(o)}}}function Ze(f){let e;return{c(){e=d("Compose components?")},l(t){e=h(t,"Compose components?")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Je(f){let e,t;return e=new B({props:{$$slots:{default:[Ze]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){E(e,o,l),t=!0},p(o,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:o}),e.$set(n)},i(o){t||(w(e.$$.fragment,o),t=!0)},o(o){b(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function Qe(f){let e;return{c(){e=d("elements")},l(t){e=h(t,"elements")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Xe(f){let e;return{c(){e=d("other components")},l(t){e=h(t,"other components")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function Ye(f){let e,t,o,l,n,a,s,r,$;return n=new P({props:{$$slots:{default:[Qe]},$$scope:{ctx:f}}}),s=new P({props:{$$slots:{default:[Xe]},$$scope:{ctx:f}}}),{c(){e=d("In HTML you can have elements inside of elements, for example "),t=S("code"),o=d("<div><span></span></div>"),l=d(". With slots we can do the same thing, we can put "),v(n.$$.fragment),a=d(" or "),v(s.$$.fragment),r=d(" inside of our components.")},l(c){e=h(c,"In HTML you can have elements inside of elements, for example "),t=I(c,"CODE",{});var i=W(t);o=h(i,"<div><span></span></div>"),i.forEach(m),l=h(c,". With slots we can do the same thing, we can put "),C(n.$$.fragment,c),a=h(c," or "),C(s.$$.fragment,c),r=h(c," inside of our components.")},m(c,i){u(c,e,i),u(c,t,i),N(t,o),u(c,l,i),E(n,c,i),u(c,a,i),E(s,c,i),u(c,r,i),$=!0},p(c,i){const g={};i&2&&(g.$$scope={dirty:i,ctx:c}),n.$set(g);const _={};i&2&&(_.$$scope={dirty:i,ctx:c}),s.$set(_)},i(c){$||(w(n.$$.fragment,c),w(s.$$.fragment,c),$=!0)},o(c){b(n.$$.fragment,c),b(s.$$.fragment,c),$=!1},d(c){c&&m(e),c&&m(t),c&&m(l),T(n,c),c&&m(a),T(s,c),c&&m(r)}}}function xe(f){let e;return{c(){e=d("fallback")},l(t){e=h(t,"fallback")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function et(f){let e,t,o,l;return t=new P({props:{$$slots:{default:[xe]},$$scope:{ctx:f}}}),{c(){e=d("What if nothing was passed into a slot? We can have a "),v(t.$$.fragment),o=d(":")},l(n){e=h(n,"What if nothing was passed into a slot? We can have a "),C(t.$$.fragment,n),o=h(n,":")},m(n,a){u(n,e,a),E(t,n,a),u(n,o,a),l=!0},p(n,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:n}),t.$set(s)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){b(t.$$.fragment,n),l=!1},d(n){n&&m(e),T(t,n),n&&m(o)}}}function tt(f){let e;return{c(){e=d("named slots")},l(t){e=h(t,"named slots")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function nt(f){let e;return{c(){e=d("default")},l(t){e=h(t,"default")},m(t,o){u(t,e,o)},d(t){t&&m(e)}}}function ot(f){let e,t,o,l,n,a;return t=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),l=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:f}}}),{c(){e=d("Finally we can have "),v(t.$$.fragment),o=d(". Note that a slot without a name is named "),v(l.$$.fragment),n=d(" so you can't use that.")},l(s){e=h(s,"Finally we can have "),C(t.$$.fragment,s),o=h(s,". Note that a slot without a name is named "),C(l.$$.fragment,s),n=h(s," so you can't use that.")},m(s,r){u(s,e,r),E(t,s,r),u(s,o,r),E(l,s,r),u(s,n,r),a=!0},p(s,r){const $={};r&2&&($.$$scope={dirty:r,ctx:s}),t.$set($);const c={};r&2&&(c.$$scope={dirty:r,ctx:s}),l.$set(c)},i(s){a||(w(t.$$.fragment,s),w(l.$$.fragment,s),a=!0)},o(s){b(t.$$.fragment,s),b(l.$$.fragment,s),a=!1},d(s){s&&m(e),T(t,s),s&&m(o),T(l,s),s&&m(n)}}}function st(f){let e,t,o,l,n,a,s,r,$,c,i,g,_,y,R,L;return e=new B({props:{$$slots:{default:[Ke]},$$scope:{ctx:f}}}),o=new we({props:{$$slots:{default:[Je]},$$scope:{ctx:f}}}),n=new B({props:{$$slots:{default:[Ye]},$$scope:{ctx:f}}}),s=new K({props:{name:[{name:"App",comp:se,raw:Ee,text:"Here is a simple example. We can put the slot anywhere, before or after the text. Here it is inside an if block that is controlled by the checkbox."},{name:"Component",comp:se,raw:Te,text:""}]}}),$=new B({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),i=new K({props:{name:[{name:"App2",comp:fe,raw:Re,text:"We can have a fallback by adding content inside of the slot tag."},{name:"Component2",comp:fe,raw:We,text:""}]}}),_=new B({props:{$$slots:{default:[ot]},$$scope:{ctx:f}}}),R=new K({props:{name:[{name:"App3",comp:ce,raw:je,text:"If we want a named slot with a single element we can add it as a slot attribute, but if we want to group multiple elements we can have a slot template with a slot attribute which wraps all elements inside."},{name:"Component3",comp:ce,raw:ze,text:""}]}}),{c(){v(e.$$.fragment),t=A(),v(o.$$.fragment),l=A(),v(n.$$.fragment),a=A(),v(s.$$.fragment),r=A(),v($.$$.fragment),c=A(),v(i.$$.fragment),g=A(),v(_.$$.fragment),y=A(),v(R.$$.fragment)},l(p){C(e.$$.fragment,p),t=H(p),C(o.$$.fragment,p),l=H(p),C(n.$$.fragment,p),a=H(p),C(s.$$.fragment,p),r=H(p),C($.$$.fragment,p),c=H(p),C(i.$$.fragment,p),g=H(p),C(_.$$.fragment,p),y=H(p),C(R.$$.fragment,p)},m(p,k){E(e,p,k),u(p,t,k),E(o,p,k),u(p,l,k),E(n,p,k),u(p,a,k),E(s,p,k),u(p,r,k),E($,p,k),u(p,c,k),E(i,p,k),u(p,g,k),E(_,p,k),u(p,y,k),E(R,p,k),L=!0},p(p,k){const Q={};k&2&&(Q.$$scope={dirty:k,ctx:p}),e.$set(Q);const X={};k&2&&(X.$$scope={dirty:k,ctx:p}),o.$set(X);const Y={};k&2&&(Y.$$scope={dirty:k,ctx:p}),n.$set(Y);const x={};k&2&&(x.$$scope={dirty:k,ctx:p}),$.$set(x);const ee={};k&2&&(ee.$$scope={dirty:k,ctx:p}),_.$set(ee)},i(p){L||(w(e.$$.fragment,p),w(o.$$.fragment,p),w(n.$$.fragment,p),w(s.$$.fragment,p),w($.$$.fragment,p),w(i.$$.fragment,p),w(_.$$.fragment,p),w(R.$$.fragment,p),L=!0)},o(p){b(e.$$.fragment,p),b(o.$$.fragment,p),b(n.$$.fragment,p),b(s.$$.fragment,p),b($.$$.fragment,p),b(i.$$.fragment,p),b(_.$$.fragment,p),b(R.$$.fragment,p),L=!1},d(p){T(e,p),p&&m(t),T(o,p),p&&m(l),T(n,p),p&&m(a),T(s,p),p&&m(r),T($,p),p&&m(c),T(i,p),p&&m(g),T(_,p),p&&m(y),T(R,p)}}}function lt(f){let e,t;const o=[f[0],me];let l={$$slots:{default:[st]},$$scope:{ctx:f}};for(let n=0;n<o.length;n+=1)l=Z(l,o[n]);return e=new he({props:l}),{c(){v(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,a){E(e,n,a),t=!0},p(n,[a]){const s=a&1?de(o,[a&1&&te(n[0]),a&0&&te(me)]):{};a&2&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}const me={title:"<slot/>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function rt(f,e,t){return f.$$set=o=>{t(0,e=Z(Z({},e),ne(o)))},e=ne(e),[e]}class mt extends F{constructor(e){super(),M(this,e,rt,lt,O,{})}}export{mt as default,me as metadata};
