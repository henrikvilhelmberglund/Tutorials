import{s as A,f as L,l as d,a as O,g as E,h as Z,m as g,c as T,u as tt,d as m,k as F,i as _,v as S,X as x,z as D,aj as et,$ as V,e as q,j as y,a8 as X,n as z,ak as nt,H as Tt,C as it,D as gt}from"./scheduler.a7cd560e.js";import{S as I,i as N,a as b,g as ct,t as w,c as ft,b as k,d as v,m as j,e as P}from"./index.396264e7.js";import{g as St,a as Ct}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Lt,P as H}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as rt}from"./ShowMany.db7be1f3.js";import{S as M}from"./Strong.097578ae.js";function Et(o){let t,n,r,l,e,i="Click me",s,a;return{c(){t=L("div"),n=d("Child "),r=d(o[0]),l=O(),e=L("button"),e.textContent=i,this.h()},l(c){t=E(c,"DIV",{style:!0});var f=Z(t);n=g(f,"Child "),r=g(f,o[0]),l=T(f),e=E(f,"BUTTON",{["data-svelte-h"]:!0}),tt(e)!=="svelte-1un4zub"&&(e.textContent=i),f.forEach(m),this.h()},h(){F(t,"color",o[0])},m(c,f){_(c,t,f),S(t,n),S(t,r),S(t,l),S(t,e),s||(a=x(e,"click",o[1]),s=!0)},p:D,i:D,o:D,d(c){c&&m(t),s=!1,a()}}}function xt(o){const t=et("color");function n(r){V.call(this,o,r)}return[t,n]}class bt extends I{constructor(t){super(),N(this,t,xt,Et,A,{})}}function wt(o){let t,n,r,l;return t=new bt({}),t.$on("click",o[2]),r=new bt({}),r.$on("click",o[3]),{c(){k(t.$$.fragment),n=O(),k(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){j(t,e,i),_(e,n,i),j(r,e,i),l=!0},i(e){l||(b(t.$$.fragment,e),b(r.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),w(r.$$.fragment,e),l=!1},d(e){e&&m(n),P(t,e),P(r,e)}}}function At(o){let t,n,r,l,e,i,s,a,c=o[0]&&wt(o);return{c(){t=L("label"),n=L("input"),r=d("Show"),l=O(),c&&c.c(),e=q(),this.h()},l(f){t=E(f,"LABEL",{for:!0});var $=Z(t);n=E($,"INPUT",{type:!0}),r=g($,"Show"),$.forEach(m),l=T(f),c&&c.l(f),e=q(),this.h()},h(){y(n,"type","checkbox"),y(t,"for","")},m(f,$){_(f,t,$),S(t,n),n.checked=o[0],S(t,r),_(f,l,$),c&&c.m(f,$),_(f,e,$),i=!0,s||(a=x(n,"change",o[1]),s=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&b(c,1):(c=wt(f),c.c(),b(c,1),c.m(e.parentNode,e)):c&&(ct(),w(c,1,1,()=>{c=null}),ft())},i(f){i||(b(c),i=!0)},o(f){w(c),i=!1},d(f){f&&(m(t),m(l),m(e)),c&&c.d(f),s=!1,a()}}}function It(o,t,n){let r=!0;function l(){r=this.checked,n(0,r)}function e(s){V.call(this,o,s)}function i(s){V.call(this,o,s)}return[r,l,e,i]}class Nt extends I{constructor(t){super(),N(this,t,It,At,A,{})}}function yt(o){let t,n,r,l,e,i,s,a,c,f;return e=new Nt({}),e.$on("click",o[2]),{c(){t=L("input"),n=O(),r=d(o[0]),l=O(),k(e.$$.fragment),i=d(`\r
\r
Count: `),s=d(o[1]),this.h()},l($){t=E($,"INPUT",{type:!0}),n=T($),r=g($,o[0]),l=T($),v(e.$$.fragment,$),i=g($,`\r
\r
Count: `),s=g($,o[1]),this.h()},h(){y(t,"type","color")},m($,p){_($,t,p),X(t,o[0]),_($,n,p),_($,r,p),_($,l,p),j(e,$,p),_($,i,p),_($,s,p),a=!0,c||(f=x(t,"input",o[3]),c=!0)},p($,[p]){p&1&&X(t,$[0]),(!a||p&1)&&z(r,$[0]),(!a||p&2)&&z(s,$[1])},i($){a||(b(e.$$.fragment,$),a=!0)},o($){w(e.$$.fragment,$),a=!1},d($){$&&(m(t),m(n),m(r),m(l),m(i),m(s)),P(e,$),c=!1,f()}}}function Ut(o,t,n){let r="red",l=0;nt("color",r);function e(){n(1,l++,l)}function i(){r=this.value,n(0,r)}return[r,l,e,i]}class ot extends I{constructor(t){super(),N(this,t,Ut,yt,A,{})}}const Bt=`<script>\r
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
</div>`;function zt(o){let t,n,r,l,e,i="Click me",s,a;return{c(){t=L("div"),n=d("Child "),r=d(o[0]),l=O(),e=L("button"),e.textContent=i,this.h()},l(c){t=E(c,"DIV",{style:!0});var f=Z(t);n=g(f,"Child "),r=g(f,o[0]),l=T(f),e=E(f,"BUTTON",{["data-svelte-h"]:!0}),tt(e)!=="svelte-1un4zub"&&(e.textContent=i),f.forEach(m),this.h()},h(){F(t,"color",o[0])},m(c,f){_(c,t,f),S(t,n),S(t,r),S(t,l),S(t,e),s||(a=x(e,"click",o[1]),s=!0)},p(c,[f]){f&1&&z(r,c[0]),f&1&&F(t,"color",c[0])},i:D,o:D,d(c){c&&m(t),s=!1,a()}}}function Wt(o,t,n){const r=et("color");let l=r.color;r.listenToColorChange(i=>n(0,l=i));function e(i){V.call(this,o,i)}return[l,e]}class kt extends I{constructor(t){super(),N(this,t,Wt,zt,A,{})}}function vt(o){let t,n,r,l;return t=new kt({}),t.$on("click",o[2]),r=new kt({}),r.$on("click",o[3]),{c(){k(t.$$.fragment),n=O(),k(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){j(t,e,i),_(e,n,i),j(r,e,i),l=!0},i(e){l||(b(t.$$.fragment,e),b(r.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),w(r.$$.fragment,e),l=!1},d(e){e&&m(n),P(t,e),P(r,e)}}}function Dt(o){let t,n,r,l,e,i,s,a,c=o[0]&&vt(o);return{c(){t=L("label"),n=L("input"),r=d("Show"),l=O(),c&&c.c(),e=q(),this.h()},l(f){t=E(f,"LABEL",{for:!0});var $=Z(t);n=E($,"INPUT",{type:!0}),r=g($,"Show"),$.forEach(m),l=T(f),c&&c.l(f),e=q(),this.h()},h(){y(n,"type","checkbox"),y(t,"for","")},m(f,$){_(f,t,$),S(t,n),n.checked=o[0],S(t,r),_(f,l,$),c&&c.m(f,$),_(f,e,$),i=!0,s||(a=x(n,"change",o[1]),s=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&b(c,1):(c=vt(f),c.c(),b(c,1),c.m(e.parentNode,e)):c&&(ct(),w(c,1,1,()=>{c=null}),ft())},i(f){i||(b(c),i=!0)},o(f){w(c),i=!1},d(f){f&&(m(t),m(l),m(e)),c&&c.d(f),s=!1,a()}}}function Mt(o,t,n){let r=!0;function l(){r=this.checked,n(0,r)}function e(s){V.call(this,o,s)}function i(s){V.call(this,o,s)}return[r,l,e,i]}class Vt extends I{constructor(t){super(),N(this,t,Mt,Dt,A,{})}}function qt(o){let t,n,r=o[0].color+"",l,e,i,s,a,c,f,$;return i=new Vt({}),i.$on("click",o[2]),{c(){t=L("input"),n=O(),l=d(r),e=O(),k(i.$$.fragment),s=d(`\r
\r
Count: `),a=d(o[1]),this.h()},l(p){t=E(p,"INPUT",{type:!0}),n=T(p),l=g(p,r),e=T(p),v(i.$$.fragment,p),s=g(p,`\r
\r
Count: `),a=g(p,o[1]),this.h()},h(){y(t,"type","color")},m(p,h){_(p,t,h),X(t,o[0].color),_(p,n,h),_(p,l,h),_(p,e,h),j(i,p,h),_(p,s,h),_(p,a,h),c=!0,f||($=x(t,"input",o[3]),f=!0)},p(p,[h]){h&1&&X(t,p[0].color),(!c||h&1)&&r!==(r=p[0].color+"")&&z(l,r),(!c||h&2)&&z(a,p[1])},i(p){c||(b(i.$$.fragment,p),c=!0)},o(p){w(i.$$.fragment,p),c=!1},d(p){p&&(m(t),m(n),m(l),m(e),m(s),m(a)),P(i,p),f=!1,$()}}}function Xt(o,t,n){let r=0;const l=new Set;let e={color:"red",listenToColorChange(a){l.add(a)}};nt("color",e);function i(){n(1,r++,r)}function s(){e.color=this.value,n(0,e)}return o.$$.update=()=>{o.$$.dirty&1&&l.forEach(a=>a(e.color))},[e,r,i,s]}class lt extends I{constructor(t){super(),N(this,t,Xt,qt,A,{})}}const Zt=`<script>\r
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
`,Ft=`<script>\r
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
`,Gt=`<script>\r
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
`;function Jt(o){let t,n,r,l,e,i="Click me +1",s,a,c="Click me +2",f,$;return{c(){t=L("div"),n=d("Child "),r=d(o[0]),l=O(),e=L("button"),e.textContent=i,s=O(),a=L("button"),a.textContent=c,this.h()},l(p){t=E(p,"DIV",{style:!0});var h=Z(t);n=g(h,"Child "),r=g(h,o[0]),l=T(h),e=E(h,"BUTTON",{["data-svelte-h"]:!0}),tt(e)!=="svelte-13374b"&&(e.textContent=i),s=T(h),a=E(h,"BUTTON",{["data-svelte-h"]:!0}),tt(a)!=="svelte-tmvdf3"&&(a.textContent=c),h.forEach(m),this.h()},h(){F(t,"color",o[0])},m(p,h){_(p,t,h),S(t,n),S(t,r),S(t,l),S(t,e),S(t,s),S(t,a),f||($=[x(e,"click",o[2]),x(a,"click",o[3])],f=!0)},p(p,[h]){h&1&&z(r,p[0]),h&1&&F(t,"color",p[0])},i:D,o:D,d(p){p&&m(t),f=!1,Tt($)}}}function Kt(o,t,n){const r=et("color");let l=r.color;r.listenToColorChange(a=>n(0,l=a));const e=et("click");return[l,e,()=>e(1),()=>e(2)]}class jt extends I{constructor(t){super(),N(this,t,Kt,Jt,A,{})}}function Pt(o){let t,n,r,l;return t=new jt({}),r=new jt({}),{c(){k(t.$$.fragment),n=O(),k(r.$$.fragment)},l(e){v(t.$$.fragment,e),n=T(e),v(r.$$.fragment,e)},m(e,i){j(t,e,i),_(e,n,i),j(r,e,i),l=!0},i(e){l||(b(t.$$.fragment,e),b(r.$$.fragment,e),l=!0)},o(e){w(t.$$.fragment,e),w(r.$$.fragment,e),l=!1},d(e){e&&m(n),P(t,e),P(r,e)}}}function Qt(o){let t,n,r,l,e,i,s,a,c=o[0]&&Pt();return{c(){t=L("label"),n=L("input"),r=d("Show"),l=O(),c&&c.c(),e=q(),this.h()},l(f){t=E(f,"LABEL",{for:!0});var $=Z(t);n=E($,"INPUT",{type:!0}),r=g($,"Show"),$.forEach(m),l=T(f),c&&c.l(f),e=q(),this.h()},h(){y(n,"type","checkbox"),y(t,"for","")},m(f,$){_(f,t,$),S(t,n),n.checked=o[0],S(t,r),_(f,l,$),c&&c.m(f,$),_(f,e,$),i=!0,s||(a=x(n,"change",o[1]),s=!0)},p(f,[$]){$&1&&(n.checked=f[0]),f[0]?c?$&1&&b(c,1):(c=Pt(),c.c(),b(c,1),c.m(e.parentNode,e)):c&&(ct(),w(c,1,1,()=>{c=null}),ft())},i(f){i||(b(c),i=!0)},o(f){w(c),i=!1},d(f){f&&(m(t),m(l),m(e)),c&&c.d(f),s=!1,a()}}}function Yt(o,t,n){let r=!0;function l(){r=this.checked,n(0,r)}return[r,l]}class te extends I{constructor(t){super(),N(this,t,Yt,Qt,A,{})}}function ee(o){let t,n,r=o[0].color+"",l,e,i,s,a,c,f,$;return i=new te({}),{c(){t=L("input"),n=O(),l=d(r),e=O(),k(i.$$.fragment),s=d(`\r
\r
Count: `),a=d(o[1]),this.h()},l(p){t=E(p,"INPUT",{type:!0}),n=T(p),l=g(p,r),e=T(p),v(i.$$.fragment,p),s=g(p,`\r
\r
Count: `),a=g(p,o[1]),this.h()},h(){y(t,"type","color")},m(p,h){_(p,t,h),X(t,o[0].color),_(p,n,h),_(p,l,h),_(p,e,h),j(i,p,h),_(p,s,h),_(p,a,h),c=!0,f||($=x(t,"input",o[2]),f=!0)},p(p,[h]){h&1&&X(t,p[0].color),(!c||h&1)&&r!==(r=p[0].color+"")&&z(l,r),(!c||h&2)&&z(a,p[1])},i(p){c||(b(i.$$.fragment,p),c=!0)},o(p){w(i.$$.fragment,p),c=!1},d(p){p&&(m(t),m(n),m(l),m(e),m(s),m(a)),P(i,p),f=!1,$()}}}function ne(o,t,n){let r=0;const l=new Set;let e={color:"red",listenToColorChange(a){l.add(a)}};nt("color",e),nt("click",i);function i(a){n(1,r+=a)}function s(){e.color=this.value,n(0,e)}return o.$$.update=()=>{o.$$.dirty&1&&l.forEach(a=>a(e.color))},[e,r,s]}class st extends I{constructor(t){super(),N(this,t,ne,ee,A,{})}}const re=`<script>\r
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
`,oe=`<script>\r
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
`,le=`<script>\r
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
`;function se(o){let t;return{c(){t=d("component initialization")},l(n){t=g(n,"component initialization")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function ie(o){let t,n,r,l;return n=new M({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){t=d("getContext and setContext are run at "),k(n.$$.fragment),r=d(". Even if we change the context later it won't update.")},l(e){t=g(e,"getContext and setContext are run at "),v(n.$$.fragment,e),r=g(e,". Even if we change the context later it won't update.")},m(e,i){_(e,t,i),j(n,e,i),_(e,r,i),l=!0},p(e,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:e}),n.$set(s)},i(e){l||(b(n.$$.fragment,e),l=!0)},o(e){w(n.$$.fragment,e),l=!1},d(e){e&&(m(t),m(r)),P(n,e)}}}function ce(o){let t;return{c(){t=d("object")},l(n){t=g(n,"object")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function fe(o){let t,n,r,l;return n=new M({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),{c(){t=d("We could have the color variable be an "),k(n.$$.fragment),r=d(" instead.")},l(e){t=g(e,"We could have the color variable be an "),v(n.$$.fragment,e),r=g(e," instead.")},m(e,i){_(e,t,i),j(n,e,i),_(e,r,i),l=!0},p(e,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:e}),n.$set(s)},i(e){l||(b(n.$$.fragment,e),l=!0)},o(e){w(n.$$.fragment,e),l=!1},d(e){e&&(m(t),m(r)),P(n,e)}}}function ue(o){let t;return{c(){t=d("callbacks")},l(n){t=g(n,"callbacks")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function ae(o){let t;return{c(){t=d("events")},l(n){t=g(n,"events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function $e(o){let t,n,r,l,e,i;return n=new M({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}}),l=new M({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){t=d("If we want to go from child to parent we can use "),k(n.$$.fragment),r=d(" or "),k(l.$$.fragment),e=d(" instead.")},l(s){t=g(s,"If we want to go from child to parent we can use "),v(n.$$.fragment,s),r=g(s," or "),v(l.$$.fragment,s),e=g(s," instead.")},m(s,a){_(s,t,a),j(n,s,a),_(s,r,a),j(l,s,a),_(s,e,a),i=!0},p(s,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:s}),n.$set(c);const f={};a&2&&(f.$$scope={dirty:a,ctx:s}),l.$set(f)},i(s){i||(b(n.$$.fragment,s),b(l.$$.fragment,s),i=!0)},o(s){w(n.$$.fragment,s),w(l.$$.fragment,s),i=!1},d(s){s&&(m(t),m(r),m(e)),P(n,s),P(l,s)}}}function pe(o){let t;return{c(){t=d("In the above example we're doing this by forwarding dispatched events (on:click) that run a function in the parent.")},l(n){t=g(n,"In the above example we're doing this by forwarding dispatched events (on:click) that run a function in the parent.")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function me(o){let t;return{c(){t=d("Let's try doing it using context instead:")},l(n){t=g(n,"Let's try doing it using context instead:")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function _e(o){let t;return{c(){t=d("run the function inside the child")},l(n){t=g(n,"run the function inside the child")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function he(o){let t,n,r,l;return n=new M({props:{$$slots:{default:[_e]},$$scope:{ctx:o}}}),{c(){t=d("By doing that we could remove the dispatched events and events from the parents and just "),k(n.$$.fragment),r=d(" using getContext.")},l(e){t=g(e,"By doing that we could remove the dispatched events and events from the parents and just "),v(n.$$.fragment,e),r=g(e," using getContext.")},m(e,i){_(e,t,i),j(n,e,i),_(e,r,i),l=!0},p(e,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:e}),n.$set(s)},i(e){l||(b(n.$$.fragment,e),l=!0)},o(e){w(n.$$.fragment,e),l=!1},d(e){e&&(m(t),m(r)),P(n,e)}}}function de(o){let t;return{c(){t=d("We can also pass different data up by changing the function inputs.")},l(n){t=g(n,"We can also pass different data up by changing the function inputs.")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function ge(o){let t;return{c(){t=d("publisher of events")},l(n){t=g(n,"publisher of events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function Ce(o){let t;return{c(){t=d("subscriber of the events")},l(n){t=g(n,"subscriber of the events")},m(n,r){_(n,t,r)},d(n){n&&m(t)}}}function be(o){let t,n,r,l,e,i;return n=new M({props:{$$slots:{default:[ge]},$$scope:{ctx:o}}}),l=new M({props:{$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){t=d("Here the child is a "),k(n.$$.fragment),r=d(" and the app is a "),k(l.$$.fragment),e=d(".")},l(s){t=g(s,"Here the child is a "),v(n.$$.fragment,s),r=g(s," and the app is a "),v(l.$$.fragment,s),e=g(s,".")},m(s,a){_(s,t,a),j(n,s,a),_(s,r,a),j(l,s,a),_(s,e,a),i=!0},p(s,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:s}),n.$set(c);const f={};a&2&&(f.$$scope={dirty:a,ctx:s}),l.$set(f)},i(s){i||(b(n.$$.fragment,s),b(l.$$.fragment,s),i=!0)},o(s){w(n.$$.fragment,s),w(l.$$.fragment,s),i=!1},d(s){s&&(m(t),m(r),m(e)),P(n,s),P(l,s)}}}function we(o){let t,n,r,l,e,i,s,a,c,f,$,p,h,G,W,J,U,K,B,Q,R,Y;return t=new H({props:{$$slots:{default:[ie]},$$scope:{ctx:o}}}),r=new rt({props:{name:[{name:"App",comp:ot,raw:Bt,text:"Here we have a component with a color picker. We want to update the colors of the children using that color picker. How do we do that?"},{name:"Parent",comp:ot,raw:Rt},{name:"Child",comp:ot,raw:Ht}]}}),e=new H({props:{$$slots:{default:[fe]},$$scope:{ctx:o}}}),s=new rt({props:{name:[{name:"App2",comp:lt,raw:Zt,text:"Here we're sending the whole object using context."},{name:"Parent2",comp:lt,raw:Ft},{name:"Child2",comp:lt,raw:Gt}]}}),c=new H({props:{$$slots:{default:[$e]},$$scope:{ctx:o}}}),$=new H({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),h=new H({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),W=new rt({props:{name:[{name:"App3",comp:st,raw:re,text:"Any children within this component can read the onClick function from the click context."},{name:"Parent3",comp:st,raw:oe},{name:"Child3",comp:st,raw:le}]}}),U=new H({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),B=new H({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),R=new H({props:{$$slots:{default:[be]},$$scope:{ctx:o}}}),{c(){k(t.$$.fragment),n=O(),k(r.$$.fragment),l=O(),k(e.$$.fragment),i=O(),k(s.$$.fragment),a=O(),k(c.$$.fragment),f=O(),k($.$$.fragment),p=O(),k(h.$$.fragment),G=O(),k(W.$$.fragment),J=O(),k(U.$$.fragment),K=O(),k(B.$$.fragment),Q=O(),k(R.$$.fragment)},l(u){v(t.$$.fragment,u),n=T(u),v(r.$$.fragment,u),l=T(u),v(e.$$.fragment,u),i=T(u),v(s.$$.fragment,u),a=T(u),v(c.$$.fragment,u),f=T(u),v($.$$.fragment,u),p=T(u),v(h.$$.fragment,u),G=T(u),v(W.$$.fragment,u),J=T(u),v(U.$$.fragment,u),K=T(u),v(B.$$.fragment,u),Q=T(u),v(R.$$.fragment,u)},m(u,C){j(t,u,C),_(u,n,C),j(r,u,C),_(u,l,C),j(e,u,C),_(u,i,C),j(s,u,C),_(u,a,C),j(c,u,C),_(u,f,C),j($,u,C),_(u,p,C),j(h,u,C),_(u,G,C),j(W,u,C),_(u,J,C),j(U,u,C),_(u,K,C),j(B,u,C),_(u,Q,C),j(R,u,C),Y=!0},p(u,C){const ut={};C&2&&(ut.$$scope={dirty:C,ctx:u}),t.$set(ut);const at={};C&2&&(at.$$scope={dirty:C,ctx:u}),e.$set(at);const $t={};C&2&&($t.$$scope={dirty:C,ctx:u}),c.$set($t);const pt={};C&2&&(pt.$$scope={dirty:C,ctx:u}),$.$set(pt);const mt={};C&2&&(mt.$$scope={dirty:C,ctx:u}),h.$set(mt);const _t={};C&2&&(_t.$$scope={dirty:C,ctx:u}),U.$set(_t);const ht={};C&2&&(ht.$$scope={dirty:C,ctx:u}),B.$set(ht);const dt={};C&2&&(dt.$$scope={dirty:C,ctx:u}),R.$set(dt)},i(u){Y||(b(t.$$.fragment,u),b(r.$$.fragment,u),b(e.$$.fragment,u),b(s.$$.fragment,u),b(c.$$.fragment,u),b($.$$.fragment,u),b(h.$$.fragment,u),b(W.$$.fragment,u),b(U.$$.fragment,u),b(B.$$.fragment,u),b(R.$$.fragment,u),Y=!0)},o(u){w(t.$$.fragment,u),w(r.$$.fragment,u),w(e.$$.fragment,u),w(s.$$.fragment,u),w(c.$$.fragment,u),w($.$$.fragment,u),w(h.$$.fragment,u),w(W.$$.fragment,u),w(U.$$.fragment,u),w(B.$$.fragment,u),w(R.$$.fragment,u),Y=!1},d(u){u&&(m(n),m(l),m(i),m(a),m(f),m(p),m(G),m(J),m(K),m(Q)),P(t,u),P(r,u),P(e,u),P(s,u),P(c,u),P($,u),P(h,u),P(W,u),P(U,u),P(B,u),P(R,u)}}}function ke(o){let t,n;const r=[o[0],Ot];let l={$$slots:{default:[we]},$$scope:{ctx:o}};for(let e=0;e<r.length;e+=1)l=it(l,r[e]);return t=new Lt({props:l}),{c(){k(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,i){j(t,e,i),n=!0},p(e,[i]){const s=i&1?St(r,[i&1&&Ct(e[0]),i&0&&Ct(Ot)]):{};i&2&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}const Ot={title:"Communicating through context",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-10T00:00:00.000Z",layout:"notes"};function ve(o,t,n){return o.$$set=r=>{n(0,t=it(it({},t),gt(r)))},t=gt(t),[t]}class Ee extends I{constructor(t){super(),N(this,t,ve,ke,A,{})}}export{Ee as default,Ot as metadata};
