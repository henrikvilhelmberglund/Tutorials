import{S as y,i as B,s as U,k as S,q as d,a as O,l as L,m as I,r as C,c as T,h as m,p as F,b as _,D as E,P as N,H as q,an as tt,a0 as J,e as K,n as R,g as w,v as it,d as k,f as ct,y as g,z as v,A as P,B as j,a2 as Z,u as z,ao as et,T as Ot,J as st,K as Tt,L as dt,M as Ct}from"./index.37298988.js";import{M as Et,P as M}from"./mdsvex-layout-notes.28d092d4.js";import{S as nt}from"./ShowMany.1ce9c697.js";import{S as x}from"./Strong.b6d58cbc.js";function St(l){let t,n,r,s,e,i,o,p;return{c(){t=S("div"),n=d("Child "),r=d(l[0]),s=O(),e=S("button"),i=d("Click me"),this.h()},l(c){t=L(c,"DIV",{style:!0});var f=I(t);n=C(f,"Child "),r=C(f,l[0]),s=T(f),e=L(f,"BUTTON",{});var $=I(e);i=C($,"Click me"),$.forEach(m),f.forEach(m),this.h()},h(){F(t,"color",l[0])},m(c,f){_(c,t,f),E(t,n),E(t,r),E(t,s),E(t,e),E(e,i),o||(p=N(e,"click",l[1]),o=!0)},p:q,i:q,o:q,d(c){c&&m(t),o=!1,p()}}}function Lt(l){const t=tt("color");function n(r){J.call(this,l,r)}return[t,n]}class bt extends y{constructor(t){super(),B(this,t,Lt,St,U,{})}}function wt(l){let t,n,r,s;return t=new bt({}),t.$on("click",l[2]),r=new bt({}),r.$on("click",l[3]),{c(){g(t.$$.fragment),n=O(),g(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){P(t,e,i),_(e,n,i),P(r,e,i),s=!0},i(e){s||(w(t.$$.fragment,e),w(r.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),k(r.$$.fragment,e),s=!1},d(e){j(t,e),e&&m(n),j(r,e)}}}function At(l){let t,n,r,s,e,i,o,p,c=l[0]&&wt(l);return{c(){t=S("label"),n=S("input"),r=d("Show"),s=O(),c&&c.c(),e=K(),this.h()},l(f){t=L(f,"LABEL",{for:!0});var $=I(t);n=L($,"INPUT",{type:!0}),r=C($,"Show"),$.forEach(m),s=T(f),c&&c.l(f),e=K(),this.h()},h(){R(n,"type","checkbox"),R(t,"for","")},m(f,$){_(f,t,$),E(t,n),n.checked=l[0],E(t,r),_(f,s,$),c&&c.m(f,$),_(f,e,$),i=!0,o||(p=N(n,"change",l[1]),o=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&w(c,1):(c=wt(f),c.c(),w(c,1),c.m(e.parentNode,e)):c&&(it(),k(c,1,1,()=>{c=null}),ct())},i(f){i||(w(c),i=!0)},o(f){k(c),i=!1},d(f){f&&m(t),f&&m(s),c&&c.d(f),f&&m(e),o=!1,p()}}}function It(l,t,n){let r=!0;function s(){r=this.checked,n(0,r)}function e(o){J.call(this,l,o)}function i(o){J.call(this,l,o)}return[r,s,e,i]}class Nt extends y{constructor(t){super(),B(this,t,It,At,U,{})}}function yt(l){let t,n,r,s,e,i,o,p,c,f;return e=new Nt({}),e.$on("click",l[2]),{c(){t=S("input"),n=O(),r=d(l[0]),s=O(),g(e.$$.fragment),i=d(`\r
\r
Count: `),o=d(l[1]),this.h()},l($){t=L($,"INPUT",{type:!0}),n=T($),r=C($,l[0]),s=T($),v(e.$$.fragment,$),i=C($,`\r
\r
Count: `),o=C($,l[1]),this.h()},h(){R(t,"type","color")},m($,a){_($,t,a),Z(t,l[0]),_($,n,a),_($,r,a),_($,s,a),P(e,$,a),_($,i,a),_($,o,a),p=!0,c||(f=N(t,"input",l[3]),c=!0)},p($,[a]){a&1&&Z(t,$[0]),(!p||a&1)&&z(r,$[0]),(!p||a&2)&&z(o,$[1])},i($){p||(w(e.$$.fragment,$),p=!0)},o($){k(e.$$.fragment,$),p=!1},d($){$&&m(t),$&&m(n),$&&m(r),$&&m(s),j(e,$),$&&m(i),$&&m(o),c=!1,f()}}}function Bt(l,t,n){let r="red",s=0;et("color",r);function e(){n(1,s++,s)}function i(){r=this.value,n(0,r)}return[r,s,e,i]}class rt extends y{constructor(t){super(),B(this,t,Bt,yt,U,{})}}const Ut=`<script>\r
	import Parent from "./Parent.svelte";\r
	import { setContext } from "svelte";\r
\r
	let color = "red";\r
	let count = 0;\r
\r
	setContext("color", color);\r
\r
	function onClick() {\r
		count++;\r
	}\r
<\/script>\r
\r
<input bind:value={color} type="color" />\r
\r
{color}\r
\r
<Parent on:click={onClick} />\r
\r
Count: {count}\r
`,Rt=`<script>\r
	import Child from "./Child.svelte";\r
\r
	let show = true;\r
<\/script>\r
\r
<label for="">\r
	<input bind:checked={show} type="checkbox" />Show\r
</label>\r
\r
{#if show}\r
	<Child on:click />\r
	<Child on:click />\r
{/if}\r
`,Ht=`<script>\r
	import { getContext } from "svelte";\r
\r
	const color = getContext("color");\r
<\/script>\r
\r
<div style="color: {color}">\r
	Child {color}\r
	<button on:click>Click me</button>\r
</div>`;function Wt(l){let t,n,r,s,e,i,o,p;return{c(){t=S("div"),n=d("Child "),r=d(l[0]),s=O(),e=S("button"),i=d("Click me"),this.h()},l(c){t=L(c,"DIV",{style:!0});var f=I(t);n=C(f,"Child "),r=C(f,l[0]),s=T(f),e=L(f,"BUTTON",{});var $=I(e);i=C($,"Click me"),$.forEach(m),f.forEach(m),this.h()},h(){F(t,"color",l[0])},m(c,f){_(c,t,f),E(t,n),E(t,r),E(t,s),E(t,e),E(e,i),o||(p=N(e,"click",l[1]),o=!0)},p(c,[f]){f&1&&z(r,c[0]),f&1&&F(t,"color",c[0])},i:q,o:q,d(c){c&&m(t),o=!1,p()}}}function Dt(l,t,n){const r=tt("color");let s=r.color;r.listenToColorChange(i=>n(0,s=i));function e(i){J.call(this,l,i)}return[s,e]}class kt extends y{constructor(t){super(),B(this,t,Dt,Wt,U,{})}}function gt(l){let t,n,r,s;return t=new kt({}),t.$on("click",l[2]),r=new kt({}),r.$on("click",l[3]),{c(){g(t.$$.fragment),n=O(),g(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){P(t,e,i),_(e,n,i),P(r,e,i),s=!0},i(e){s||(w(t.$$.fragment,e),w(r.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),k(r.$$.fragment,e),s=!1},d(e){j(t,e),e&&m(n),j(r,e)}}}function Mt(l){let t,n,r,s,e,i,o,p,c=l[0]&&gt(l);return{c(){t=S("label"),n=S("input"),r=d("Show"),s=O(),c&&c.c(),e=K(),this.h()},l(f){t=L(f,"LABEL",{for:!0});var $=I(t);n=L($,"INPUT",{type:!0}),r=C($,"Show"),$.forEach(m),s=T(f),c&&c.l(f),e=K(),this.h()},h(){R(n,"type","checkbox"),R(t,"for","")},m(f,$){_(f,t,$),E(t,n),n.checked=l[0],E(t,r),_(f,s,$),c&&c.m(f,$),_(f,e,$),i=!0,o||(p=N(n,"change",l[1]),o=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&w(c,1):(c=gt(f),c.c(),w(c,1),c.m(e.parentNode,e)):c&&(it(),k(c,1,1,()=>{c=null}),ct())},i(f){i||(w(c),i=!0)},o(f){k(c),i=!1},d(f){f&&m(t),f&&m(s),c&&c.d(f),f&&m(e),o=!1,p()}}}function zt(l,t,n){let r=!0;function s(){r=this.checked,n(0,r)}function e(o){J.call(this,l,o)}function i(o){J.call(this,l,o)}return[r,s,e,i]}class Vt extends y{constructor(t){super(),B(this,t,zt,Mt,U,{})}}function qt(l){let t,n,r=l[0].color+"",s,e,i,o,p,c,f,$;return i=new Vt({}),i.$on("click",l[2]),{c(){t=S("input"),n=O(),s=d(r),e=O(),g(i.$$.fragment),o=d(`\r
\r
Count: `),p=d(l[1]),this.h()},l(a){t=L(a,"INPUT",{type:!0}),n=T(a),s=C(a,r),e=T(a),v(i.$$.fragment,a),o=C(a,`\r
\r
Count: `),p=C(a,l[1]),this.h()},h(){R(t,"type","color")},m(a,h){_(a,t,h),Z(t,l[0].color),_(a,n,h),_(a,s,h),_(a,e,h),P(i,a,h),_(a,o,h),_(a,p,h),c=!0,f||($=N(t,"input",l[3]),f=!0)},p(a,[h]){h&1&&Z(t,a[0].color),(!c||h&1)&&r!==(r=a[0].color+"")&&z(s,r),(!c||h&2)&&z(p,a[1])},i(a){c||(w(i.$$.fragment,a),c=!0)},o(a){k(i.$$.fragment,a),c=!1},d(a){a&&m(t),a&&m(n),a&&m(s),a&&m(e),j(i,a),a&&m(o),a&&m(p),f=!1,$()}}}function xt(l,t,n){let r=0;const s=new Set;let e={color:"red",listenToColorChange(p){s.add(p)}};et("color",e);function i(){n(1,r++,r)}function o(){e.color=this.value,n(0,e)}return l.$$.update=()=>{l.$$.dirty&1&&s.forEach(p=>p(e.color))},[e,r,i,o]}class ot extends y{constructor(t){super(),B(this,t,xt,qt,U,{})}}const Jt=`<script>\r
	import Parent2 from "./Parent2.svelte";\r
	import { setContext } from "svelte";\r
\r
	let count = 0;\r
	const colorListeners = new Set();\r
	let colorObj = {\r
		color: "red",\r
		listenToColorChange(fn) {\r
			colorListeners.add(fn);\r
		},\r
	};\r
	$: colorListeners.forEach((listener) => listener(colorObj.color));\r
\r
	setContext("color", colorObj);\r
\r
	function onClick() {\r
		count++;\r
	}\r
<\/script>\r
\r
<input bind:value={colorObj.color} type="color" />\r
\r
{colorObj.color}\r
\r
<Parent2 on:click={onClick} />\r
\r
Count: {count}\r
`,Kt=`<script>\r
	import Child2 from "./Child2.svelte";\r
\r
	let show = true;\r
<\/script>\r
\r
<label for="">\r
	<input bind:checked={show} type="checkbox" />Show\r
</label>\r
\r
{#if show}\r
	<Child2 on:click />\r
	<Child2 on:click />\r
{/if}\r
`,Zt=`<script>\r
	import { getContext } from "svelte";\r
\r
	const colorObj = getContext("color");\r
	let color = colorObj.color;\r
	colorObj.listenToColorChange((newColor) => (color = newColor));\r
<\/script>\r
\r
<div style="color: {color}">\r
	Child {color}\r
	<button on:click>Click me</button>\r
</div>\r
`;function Ft(l){let t,n,r,s,e,i,o,p,c,f,$;return{c(){t=S("div"),n=d("Child "),r=d(l[0]),s=O(),e=S("button"),i=d("Click me +1"),o=O(),p=S("button"),c=d("Click me +2"),this.h()},l(a){t=L(a,"DIV",{style:!0});var h=I(t);n=C(h,"Child "),r=C(h,l[0]),s=T(h),e=L(h,"BUTTON",{});var V=I(e);i=C(V,"Click me +1"),V.forEach(m),o=T(h),p=L(h,"BUTTON",{});var A=I(p);c=C(A,"Click me +2"),A.forEach(m),h.forEach(m),this.h()},h(){F(t,"color",l[0])},m(a,h){_(a,t,h),E(t,n),E(t,r),E(t,s),E(t,e),E(e,i),E(t,o),E(t,p),E(p,c),f||($=[N(e,"click",l[2]),N(p,"click",l[3])],f=!0)},p(a,[h]){h&1&&z(r,a[0]),h&1&&F(t,"color",a[0])},i:q,o:q,d(a){a&&m(t),f=!1,Ot($)}}}function Gt(l,t,n){const r=tt("color");let s=r.color;r.listenToColorChange(p=>n(0,s=p));const e=tt("click");return[s,e,()=>e(1),()=>e(2)]}class vt extends y{constructor(t){super(),B(this,t,Gt,Ft,U,{})}}function Pt(l){let t,n,r,s;return t=new vt({}),r=new vt({}),{c(){g(t.$$.fragment),n=O(),g(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){P(t,e,i),_(e,n,i),P(r,e,i),s=!0},i(e){s||(w(t.$$.fragment,e),w(r.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),k(r.$$.fragment,e),s=!1},d(e){j(t,e),e&&m(n),j(r,e)}}}function Qt(l){let t,n,r,s,e,i,o,p,c=l[0]&&Pt();return{c(){t=S("label"),n=S("input"),r=d("Show"),s=O(),c&&c.c(),e=K(),this.h()},l(f){t=L(f,"LABEL",{for:!0});var $=I(t);n=L($,"INPUT",{type:!0}),r=C($,"Show"),$.forEach(m),s=T(f),c&&c.l(f),e=K(),this.h()},h(){R(n,"type","checkbox"),R(t,"for","")},m(f,$){_(f,t,$),E(t,n),n.checked=l[0],E(t,r),_(f,s,$),c&&c.m(f,$),_(f,e,$),i=!0,o||(p=N(n,"change",l[1]),o=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&w(c,1):(c=Pt(),c.c(),w(c,1),c.m(e.parentNode,e)):c&&(it(),k(c,1,1,()=>{c=null}),ct())},i(f){i||(w(c),i=!0)},o(f){k(c),i=!1},d(f){f&&m(t),f&&m(s),c&&c.d(f),f&&m(e),o=!1,p()}}}function Xt(l,t,n){let r=!0;function s(){r=this.checked,n(0,r)}return[r,s]}class Yt extends y{constructor(t){super(),B(this,t,Xt,Qt,U,{})}}function te(l){let t,n,r=l[0].color+"",s,e,i,o,p,c,f,$;return i=new Yt({}),{c(){t=S("input"),n=O(),s=d(r),e=O(),g(i.$$.fragment),o=d(`\r
\r
Count: `),p=d(l[1]),this.h()},l(a){t=L(a,"INPUT",{type:!0}),n=T(a),s=C(a,r),e=T(a),v(i.$$.fragment,a),o=C(a,`\r
\r
Count: `),p=C(a,l[1]),this.h()},h(){R(t,"type","color")},m(a,h){_(a,t,h),Z(t,l[0].color),_(a,n,h),_(a,s,h),_(a,e,h),P(i,a,h),_(a,o,h),_(a,p,h),c=!0,f||($=N(t,"input",l[2]),f=!0)},p(a,[h]){h&1&&Z(t,a[0].color),(!c||h&1)&&r!==(r=a[0].color+"")&&z(s,r),(!c||h&2)&&z(p,a[1])},i(a){c||(w(i.$$.fragment,a),c=!0)},o(a){k(i.$$.fragment,a),c=!1},d(a){a&&m(t),a&&m(n),a&&m(s),a&&m(e),j(i,a),a&&m(o),a&&m(p),f=!1,$()}}}function ee(l,t,n){let r=0;const s=new Set;let e={color:"red",listenToColorChange(p){s.add(p)}};et("color",e),et("click",i);function i(p){n(1,r+=p)}function o(){e.color=this.value,n(0,e)}return l.$$.update=()=>{l.$$.dirty&1&&s.forEach(p=>p(e.color))},[e,r,o]}class lt extends y{constructor(t){super(),B(this,t,ee,te,U,{})}}const ne=`<script>\r
	import Parent3 from "./Parent3.svelte";\r
	import { setContext } from "svelte";\r
\r
	let count = 0;\r
	const colorListeners = new Set();\r
	let colorObj = {\r
		color: "red",\r
		listenToColorChange(fn) {\r
			colorListeners.add(fn);\r
		},\r
	};\r
	$: colorListeners.forEach((listener) => listener(colorObj.color));\r
\r
	setContext("color", colorObj);\r
	setContext("click", onClick);\r
\r
	function onClick(delta) {\r
		count += delta;\r
	}\r
<\/script>\r
\r
<input bind:value={colorObj.color} type="color" />\r
\r
{colorObj.color}\r
\r
<Parent3 />\r
\r
Count: {count}\r
`,re=`<script>\r
	import Child3 from "./Child3.svelte";\r
\r
	let show = true;\r
<\/script>\r
\r
<label for="">\r
	<input bind:checked={show} type="checkbox" />Show\r
</label>\r
\r
{#if show}\r
	<Child3 />\r
	<Child3 />\r
{/if}\r
`,oe=`<script>\r
	import { getContext } from "svelte";\r
\r
	const colorObj = getContext("color");\r
	let color = colorObj.color;\r
	colorObj.listenToColorChange((newColor) => (color = newColor));\r
\r
	const onClick = getContext("click");\r
<\/script>\r
\r
<div style="color: {color}">\r
	Child {color}\r
	<button on:click={() => onClick(1)}>Click me +1</button>\r
	<button on:click={() => onClick(2)}>Click me +2</button>\r
</div>\r
`;function le(l){let t;return{c(){t=d("component initialization")},l(n){t=C(n,"component initialization")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function se(l){let t,n,r,s;return n=new x({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){t=d("getContext and setContext are run at "),g(n.$$.fragment),r=d(". Even if we change the context later it won't update.")},l(e){t=C(e,"getContext and setContext are run at "),v(n.$$.fragment,e),r=C(e,". Even if we change the context later it won't update.")},m(e,i){_(e,t,i),P(n,e,i),_(e,r,i),s=!0},p(e,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:e}),n.$set(o)},i(e){s||(w(n.$$.fragment,e),s=!0)},o(e){k(n.$$.fragment,e),s=!1},d(e){e&&m(t),j(n,e),e&&m(r)}}}function ie(l){let t;return{c(){t=d("object")},l(n){t=C(n,"object")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function ce(l){let t,n,r,s;return n=new x({props:{$$slots:{default:[ie]},$$scope:{ctx:l}}}),{c(){t=d("We could have the color variable be an "),g(n.$$.fragment),r=d(" instead.")},l(e){t=C(e,"We could have the color variable be an "),v(n.$$.fragment,e),r=C(e," instead.")},m(e,i){_(e,t,i),P(n,e,i),_(e,r,i),s=!0},p(e,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:e}),n.$set(o)},i(e){s||(w(n.$$.fragment,e),s=!0)},o(e){k(n.$$.fragment,e),s=!1},d(e){e&&m(t),j(n,e),e&&m(r)}}}function fe(l){let t;return{c(){t=d("callbacks")},l(n){t=C(n,"callbacks")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function ue(l){let t;return{c(){t=d("events")},l(n){t=C(n,"events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function $e(l){let t,n,r,s,e,i;return n=new x({props:{$$slots:{default:[fe]},$$scope:{ctx:l}}}),s=new x({props:{$$slots:{default:[ue]},$$scope:{ctx:l}}}),{c(){t=d("If we want to go from child to parent we can use "),g(n.$$.fragment),r=d(" or "),g(s.$$.fragment),e=d(" instead.")},l(o){t=C(o,"If we want to go from child to parent we can use "),v(n.$$.fragment,o),r=C(o," or "),v(s.$$.fragment,o),e=C(o," instead.")},m(o,p){_(o,t,p),P(n,o,p),_(o,r,p),P(s,o,p),_(o,e,p),i=!0},p(o,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:o}),n.$set(c);const f={};p&2&&(f.$$scope={dirty:p,ctx:o}),s.$set(f)},i(o){i||(w(n.$$.fragment,o),w(s.$$.fragment,o),i=!0)},o(o){k(n.$$.fragment,o),k(s.$$.fragment,o),i=!1},d(o){o&&m(t),j(n,o),o&&m(r),j(s,o),o&&m(e)}}}function ae(l){let t;return{c(){t=d("In the above example we're doing this by forwarding dispatched events (on:click) that run a function in the parent.")},l(n){t=C(n,"In the above example we're doing this by forwarding dispatched events (on:click) that run a function in the parent.")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function pe(l){let t;return{c(){t=d("Let's try doing it using context instead:")},l(n){t=C(n,"Let's try doing it using context instead:")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function me(l){let t;return{c(){t=d("run the function inside the child")},l(n){t=C(n,"run the function inside the child")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function _e(l){let t,n,r,s;return n=new x({props:{$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){t=d("By doing that we could remove the dispatched events and events from the parents and just "),g(n.$$.fragment),r=d(" using getContext.")},l(e){t=C(e,"By doing that we could remove the dispatched events and events from the parents and just "),v(n.$$.fragment,e),r=C(e," using getContext.")},m(e,i){_(e,t,i),P(n,e,i),_(e,r,i),s=!0},p(e,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:e}),n.$set(o)},i(e){s||(w(n.$$.fragment,e),s=!0)},o(e){k(n.$$.fragment,e),s=!1},d(e){e&&m(t),j(n,e),e&&m(r)}}}function he(l){let t;return{c(){t=d("We can also pass different data up by changing the function inputs.")},l(n){t=C(n,"We can also pass different data up by changing the function inputs.")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function de(l){let t;return{c(){t=d("publisher of events")},l(n){t=C(n,"publisher of events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function Ce(l){let t;return{c(){t=d("subscriber of the events")},l(n){t=C(n,"subscriber of the events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function be(l){let t,n,r,s,e,i;return n=new x({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),s=new x({props:{$$slots:{default:[Ce]},$$scope:{ctx:l}}}),{c(){t=d("Here the child is a "),g(n.$$.fragment),r=d(" and the app is a "),g(s.$$.fragment),e=d(".")},l(o){t=C(o,"Here the child is a "),v(n.$$.fragment,o),r=C(o," and the app is a "),v(s.$$.fragment,o),e=C(o,".")},m(o,p){_(o,t,p),P(n,o,p),_(o,r,p),P(s,o,p),_(o,e,p),i=!0},p(o,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:o}),n.$set(c);const f={};p&2&&(f.$$scope={dirty:p,ctx:o}),s.$set(f)},i(o){i||(w(n.$$.fragment,o),w(s.$$.fragment,o),i=!0)},o(o){k(n.$$.fragment,o),k(s.$$.fragment,o),i=!1},d(o){o&&m(t),j(n,o),o&&m(r),j(s,o),o&&m(e)}}}function we(l){let t,n,r,s,e,i,o,p,c,f,$,a,h,V,A,G,H,Q,W,X,D,Y;return t=new M({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),r=new nt({props:{name:[{name:"App",comp:rt,raw:Ut,text:"Here we have a component with a color picker. We want to update the colors of the children using that color picker. How do we do that?"},{name:"Parent",comp:rt,raw:Rt},{name:"Child",comp:rt,raw:Ht}]}}),e=new M({props:{$$slots:{default:[ce]},$$scope:{ctx:l}}}),o=new nt({props:{name:[{name:"App2",comp:ot,raw:Jt,text:"Here we're sending the whole object using context."},{name:"Parent2",comp:ot,raw:Kt},{name:"Child2",comp:ot,raw:Zt}]}}),c=new M({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),$=new M({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),h=new M({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}}),A=new nt({props:{name:[{name:"App3",comp:lt,raw:ne,text:"Any children within this component can read the onClick function from the click context."},{name:"Parent3",comp:lt,raw:re},{name:"Child3",comp:lt,raw:oe}]}}),H=new M({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),W=new M({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),D=new M({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),n=O(),g(r.$$.fragment),s=O(),g(e.$$.fragment),i=O(),g(o.$$.fragment),p=O(),g(c.$$.fragment),f=O(),g($.$$.fragment),a=O(),g(h.$$.fragment),V=O(),g(A.$$.fragment),G=O(),g(H.$$.fragment),Q=O(),g(W.$$.fragment),X=O(),g(D.$$.fragment)},l(u){v(t.$$.fragment,u),n=T(u),v(r.$$.fragment,u),s=T(u),v(e.$$.fragment,u),i=T(u),v(o.$$.fragment,u),p=T(u),v(c.$$.fragment,u),f=T(u),v($.$$.fragment,u),a=T(u),v(h.$$.fragment,u),V=T(u),v(A.$$.fragment,u),G=T(u),v(H.$$.fragment,u),Q=T(u),v(W.$$.fragment,u),X=T(u),v(D.$$.fragment,u)},m(u,b){P(t,u,b),_(u,n,b),P(r,u,b),_(u,s,b),P(e,u,b),_(u,i,b),P(o,u,b),_(u,p,b),P(c,u,b),_(u,f,b),P($,u,b),_(u,a,b),P(h,u,b),_(u,V,b),P(A,u,b),_(u,G,b),P(H,u,b),_(u,Q,b),P(W,u,b),_(u,X,b),P(D,u,b),Y=!0},p(u,b){const ft={};b&2&&(ft.$$scope={dirty:b,ctx:u}),t.$set(ft);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:u}),e.$set(ut);const $t={};b&2&&($t.$$scope={dirty:b,ctx:u}),c.$set($t);const at={};b&2&&(at.$$scope={dirty:b,ctx:u}),$.$set(at);const pt={};b&2&&(pt.$$scope={dirty:b,ctx:u}),h.$set(pt);const mt={};b&2&&(mt.$$scope={dirty:b,ctx:u}),H.$set(mt);const _t={};b&2&&(_t.$$scope={dirty:b,ctx:u}),W.$set(_t);const ht={};b&2&&(ht.$$scope={dirty:b,ctx:u}),D.$set(ht)},i(u){Y||(w(t.$$.fragment,u),w(r.$$.fragment,u),w(e.$$.fragment,u),w(o.$$.fragment,u),w(c.$$.fragment,u),w($.$$.fragment,u),w(h.$$.fragment,u),w(A.$$.fragment,u),w(H.$$.fragment,u),w(W.$$.fragment,u),w(D.$$.fragment,u),Y=!0)},o(u){k(t.$$.fragment,u),k(r.$$.fragment,u),k(e.$$.fragment,u),k(o.$$.fragment,u),k(c.$$.fragment,u),k($.$$.fragment,u),k(h.$$.fragment,u),k(A.$$.fragment,u),k(H.$$.fragment,u),k(W.$$.fragment,u),k(D.$$.fragment,u),Y=!1},d(u){j(t,u),u&&m(n),j(r,u),u&&m(s),j(e,u),u&&m(i),j(o,u),u&&m(p),j(c,u),u&&m(f),j($,u),u&&m(a),j(h,u),u&&m(V),j(A,u),u&&m(G),j(H,u),u&&m(Q),j(W,u),u&&m(X),j(D,u)}}}function ke(l){let t,n;const r=[l[0],jt];let s={$$slots:{default:[we]},$$scope:{ctx:l}};for(let e=0;e<r.length;e+=1)s=st(s,r[e]);return t=new Et({props:s}),{c(){g(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,i){P(t,e,i),n=!0},p(e,[i]){const o=i&1?Tt(r,[i&1&&dt(e[0]),i&0&&dt(jt)]):{};i&2&&(o.$$scope={dirty:i,ctx:e}),t.$set(o)},i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}const jt={title:"Communicating through context",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-10T00:00:00.000Z",layout:"notes"};function ge(l,t,n){return l.$$set=r=>{n(0,t=st(st({},t),Ct(r)))},t=Ct(t),[t]}class Te extends y{constructor(t){super(),B(this,t,ge,ke,U,{})}}export{Te as default,jt as metadata};
