import{S as F,i as K,s as Q,k as V,q as d,a as C,l as X,m as ae,r as w,h as u,c as M,b as c,D as _e,T as Y,u as ge,H as G,o as de,a8 as we,a9 as ce,j as ke,e as J,n as N,g as _,v as be,d as g,f as Ue,y as k,z as b,A as U,B as h,aa as xe,Q as ze,K as ie,L as He,M as Ne,N as je}from"./index.0b5cc0d7.js";import{M as Le,P as A}from"./mdsvex-layout-notes.c527e9b3.js";import{S as Z}from"./ShowCode.1ad00a73.js";import{U as Oe}from"./Ul.4059dc64.js";import{L as me}from"./Li.ecd818f1.js";import{S as I}from"./Strong.272c5f79.js";function qe($){let e,t,o,l,s,m;return{c(){e=V("button"),t=d("Click me"),o=C(),l=d($[0])},l(n){e=X(n,"BUTTON",{});var f=ae(e);t=w(f,"Click me"),f.forEach(u),o=M(n),l=w(n,$[0])},m(n,f){c(n,e,f),_e(e,t),c(n,o,f),c(n,l,f),s||(m=Y(e,"click",$[2]),s=!0)},p(n,[f]){f&1&&ge(l,n[0])},i:G,o:G,d(n){n&&u(e),n&&u(o),n&&u(l),s=!1,m()}}}function We($,e,t){let o=0;de(()=>{console.log("onMount")}),we(()=>{console.log("onDestroy")}),ce(()=>{console.log("beforeUpdate")}),ke(()=>{console.log("afterUpdate")});function l(){t(0,o++,o)}return[o,l,()=>l()]}class Fe extends F{constructor(e){super(),K(this,e,We,qe,Q,{})}}function Ee($){let e,t;return e=new Fe({}),{c(){k(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,l){U(e,o,l),t=!0},i(o){t||(_(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){h(e,o)}}}function Ke($){let e,t,o,l,s,m,n=$[0]&&Ee();return{c(){e=V("input"),t=C(),n&&n.c(),o=J(),this.h()},l(f){e=X(f,"INPUT",{type:!0,name:!0,id:!0}),t=M(f),n&&n.l(f),o=J(),this.h()},h(){N(e,"type","checkbox"),N(e,"name",""),N(e,"id","")},m(f,p){c(f,e,p),e.checked=$[0],c(f,t,p),n&&n.m(f,p),c(f,o,p),l=!0,s||(m=Y(e,"change",$[1]),s=!0)},p(f,[p]){p&1&&(e.checked=f[0]),f[0]?n?p&1&&_(n,1):(n=Ee(),n.c(),_(n,1),n.m(o.parentNode,o)):n&&(be(),g(n,1,1,()=>{n=null}),Ue())},i(f){l||(_(n),l=!0)},o(f){g(n),l=!1},d(f){f&&u(e),f&&u(t),n&&n.d(f),f&&u(o),s=!1,m()}}}function Qe($,e,t){let o;function l(){o=this.checked,t(0,o)}return[o,l]}class Ze extends F{constructor(e){super(),K(this,e,Qe,Ke,Q,{})}}const Ge=`<script>\r
	import Component from "./Component.svelte";\r
	let condition;\r
<\/script>\r
\r
<input type="checkbox" bind:checked={condition} name="" id="" />\r
\r
{#if condition}\r
	<Component />\r
{/if}\r
`;function Je(){de(()=>{console.log("onMount")})}function Ve($){let e,t,o,l,s,m;return{c(){e=V("button"),t=d("Click me"),o=C(),l=d($[0])},l(n){e=X(n,"BUTTON",{});var f=ae(e);t=w(f,"Click me"),f.forEach(u),o=M(n),l=w(n,$[0])},m(n,f){c(n,e,f),_e(e,t),c(n,o,f),c(n,l,f),s||(m=Y(e,"click",$[2]),s=!0)},p(n,[f]){f&1&&ge(l,n[0])},i:G,o:G,d(n){n&&u(e),n&&u(o),n&&u(l),s=!1,m()}}}function Xe($,e,t){let o=0;Je(),we(()=>{console.log("onDestroy")}),ce(()=>{console.log("beforeUpdate")}),ke(()=>{console.log("afterUpdate")});function l(){t(0,o++,o)}return[o,l,()=>l()]}class Ye extends F{constructor(e){super(),K(this,e,Xe,Ve,Q,{})}}function Pe($){let e,t;return e=new Ye({}),{c(){k(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,l){U(e,o,l),t=!0},i(o){t||(_(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){h(e,o)}}}function et($){let e,t,o,l,s,m,n=$[0]&&Pe();return{c(){e=V("input"),t=C(),n&&n.c(),o=J(),this.h()},l(f){e=X(f,"INPUT",{type:!0,name:!0,id:!0}),t=M(f),n&&n.l(f),o=J(),this.h()},h(){N(e,"type","checkbox"),N(e,"name",""),N(e,"id","")},m(f,p){c(f,e,p),e.checked=$[0],c(f,t,p),n&&n.m(f,p),c(f,o,p),l=!0,s||(m=Y(e,"change",$[1]),s=!0)},p(f,[p]){p&1&&(e.checked=f[0]),f[0]?n?p&1&&_(n,1):(n=Pe(),n.c(),_(n,1),n.m(o.parentNode,o)):n&&(be(),g(n,1,1,()=>{n=null}),Ue())},i(f){l||(_(n),l=!0)},o(f){g(n),l=!1},d(f){f&&u(e),f&&u(t),n&&n.d(f),f&&u(o),s=!1,m()}}}function tt($,e,t){let o;function l(){o=this.checked,t(0,o)}return[o,l]}class nt extends F{constructor(e){super(),K(this,e,tt,et,Q,{})}}function ot(){let $=new Set;return ce(()=>{$.forEach(e=>{e.style.outlineColor="red",setTimeout(()=>{$.has(e)&&(e.style.outlineColor="black")},1e3)})}),de(()=>{$.forEach(e=>{e.style.outline="2px solid black",e.style.margin="8px"})}),function(t){return $.add(t),{destroy(){$.delete(t)}}}}function rt($){let e,t,o,l,s,m;return{c(){e=V("button"),t=d("Click me"),o=C(),l=d($[0])},l(n){e=X(n,"BUTTON",{});var f=ae(e);t=w(f,"Click me"),f.forEach(u),o=M(n),l=w(n,$[0])},m(n,f){c(n,e,f),_e(e,t),c(n,o,f),c(n,l,f),s||(m=[xe($[1].call(null,e)),Y(e,"click",$[3])],s=!0)},p(n,[f]){f&1&&ge(l,n[0])},i:G,o:G,d(n){n&&u(e),n&&u(o),n&&u(l),s=!1,ze(m)}}}function st($,e,t){let o=0;const l=ot();we(()=>{console.log("onDestroy")}),ce(()=>{console.log("beforeUpdate")}),ke(()=>{console.log("afterUpdate")});function s(){t(0,o++,o)}return[o,l,s,()=>s()]}class ft extends F{constructor(e){super(),K(this,e,st,rt,Q,{})}}function Be($){let e,t;return e=new ft({}),{c(){k(e.$$.fragment)},l(o){b(e.$$.fragment,o)},m(o,l){U(e,o,l),t=!0},i(o){t||(_(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){h(e,o)}}}function lt($){let e,t,o,l,s,m,n=$[0]&&Be();return{c(){e=V("input"),t=C(),n&&n.c(),o=J(),this.h()},l(f){e=X(f,"INPUT",{type:!0,name:!0,id:!0}),t=M(f),n&&n.l(f),o=J(),this.h()},h(){N(e,"type","checkbox"),N(e,"name",""),N(e,"id","")},m(f,p){c(f,e,p),e.checked=$[0],c(f,t,p),n&&n.m(f,p),c(f,o,p),l=!0,s||(m=Y(e,"change",$[1]),s=!0)},p(f,[p]){p&1&&(e.checked=f[0]),f[0]?n?p&1&&_(n,1):(n=Be(),n.c(),_(n,1),n.m(o.parentNode,o)):n&&(be(),g(n,1,1,()=>{n=null}),Ue())},i(f){l||(_(n),l=!0)},o(f){g(n),l=!1},d(f){f&&u(e),f&&u(t),n&&n.d(f),f&&u(o),s=!1,m()}}}function $t($,e,t){let o;function l(){o=this.checked,t(0,o)}return[o,l]}class pt extends F{constructor(e){super(),K(this,e,$t,lt,Q,{})}}const ut=`<script>\r
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";\r
	let count = 0;\r
	onMount(() => {\r
		console.log("onMount");\r
	});\r
	onDestroy(() => {\r
		console.log("onDestroy");\r
	});\r
	beforeUpdate(() => {\r
		console.log("beforeUpdate");\r
	});\r
	afterUpdate(() => {\r
		console.log("afterUpdate");\r
	});\r
\r
	function update() {\r
		count++;\r
	}\r
<\/script>\r
\r
<button on:click={() => update()}>Click me</button>\r
{count}\r
`,mt=`<script>\r
	import { onDestroy, beforeUpdate, afterUpdate } from "svelte";\r
	import { foo } from "./foo";\r
	let count = 0;\r
\r
	// this will run onMount() from foo.js\r
	foo();\r
\r
	onDestroy(() => {\r
		console.log("onDestroy");\r
	});\r
	beforeUpdate(() => {\r
		console.log("beforeUpdate");\r
	});\r
	afterUpdate(() => {\r
		console.log("afterUpdate");\r
	});\r
\r
	function update() {\r
		count++;\r
	}\r
<\/script>\r
\r
<button on:click={() => update()}>Click me</button>\r
{count}\r
`,ct=`<script>\r
	import { onDestroy, beforeUpdate, afterUpdate } from "svelte";\r
	import markUpdate from "./markUpdate";\r
	let count = 0;\r
\r
	const action = markUpdate();\r
\r
	onDestroy(() => {\r
		console.log("onDestroy");\r
	});\r
	beforeUpdate(() => {\r
		console.log("beforeUpdate");\r
	});\r
	afterUpdate(() => {\r
		console.log("afterUpdate");\r
	});\r
\r
	function update() {\r
		count++;\r
	}\r
<\/script>\r
\r
<button use:action on:click={() => update()}>Click me</button>\r
{count}\r
`,it=`import { onMount } from "svelte";\r
export function foo() {\r
	onMount(() => {\r
		console.log("onMount");\r
	});\r
}\r
`,at=`import { beforeUpdate, onMount } from "svelte";\r
\r
export default function () {\r
	let elements = new Set();\r
\r
	beforeUpdate(() => {\r
		elements.forEach((element) => {\r
			element.style.outlineColor = "red";\r
			setTimeout(() => {\r
				if (elements.has(element)) {\r
					element.style.outlineColor = "black";\r
				}\r
			}, 1000);\r
		});\r
	});\r
\r
	onMount(() => {\r
		elements.forEach((element) => {\r
			element.style.outline = "2px solid black";\r
			element.style.margin = "8px";\r
		});\r
	});\r
\r
	return function markUpdateAction(node) {\r
		elements.add(node);\r
		return {\r
			destroy() {\r
				elements.delete(node);\r
			},\r
		};\r
	};\r
}\r
`;function _t($){let e;return{c(){e=d("There are 4 lifecycle events in Svelte:")},l(t){e=w(t,"There are 4 lifecycle events in Svelte:")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function gt($){let e;return{c(){e=d("beforeUpdate")},l(t){e=w(t,"beforeUpdate")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function dt($){let e;return{c(){e=d("onMount")},l(t){e=w(t,"onMount")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function wt($){let e;return{c(){e=d("afterUpdate")},l(t){e=w(t,"afterUpdate")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function kt($){let e;return{c(){e=d("onDestroy")},l(t){e=w(t,"onDestroy")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function bt($){let e,t,o,l,s,m,n,f;return e=new me({props:{$$slots:{default:[gt]},$$scope:{ctx:$}}}),o=new me({props:{$$slots:{default:[dt]},$$scope:{ctx:$}}}),s=new me({props:{$$slots:{default:[wt]},$$scope:{ctx:$}}}),n=new me({props:{$$slots:{default:[kt]},$$scope:{ctx:$}}}),{c(){k(e.$$.fragment),t=C(),k(o.$$.fragment),l=C(),k(s.$$.fragment),m=C(),k(n.$$.fragment)},l(p){b(e.$$.fragment,p),t=M(p),b(o.$$.fragment,p),l=M(p),b(s.$$.fragment,p),m=M(p),b(n.$$.fragment,p)},m(p,v){U(e,p,v),c(p,t,v),U(o,p,v),c(p,l,v),U(s,p,v),c(p,m,v),U(n,p,v),f=!0},p(p,v){const a={};v&2&&(a.$$scope={dirty:v,ctx:p}),e.$set(a);const D={};v&2&&(D.$$scope={dirty:v,ctx:p}),o.$set(D);const T={};v&2&&(T.$$scope={dirty:v,ctx:p}),s.$set(T);const S={};v&2&&(S.$$scope={dirty:v,ctx:p}),n.$set(S)},i(p){f||(_(e.$$.fragment,p),_(o.$$.fragment,p),_(s.$$.fragment,p),_(n.$$.fragment,p),f=!0)},o(p){g(e.$$.fragment,p),g(o.$$.fragment,p),g(s.$$.fragment,p),g(n.$$.fragment,p),f=!1},d(p){h(e,p),p&&u(t),h(o,p),p&&u(l),h(s,p),p&&u(m),h(n,p)}}}function Ut($){let e;return{c(){e=d("Here we have a component with a checkbox that if checked displays another component containing these lifecycle events.")},l(t){e=w(t,"Here we have a component with a checkbox that if checked displays another component containing these lifecycle events.")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function ht($){let e;return{c(){e=d("beforeUpdate, onMount, afterUpdate")},l(t){e=w(t,"beforeUpdate, onMount, afterUpdate")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function vt($){let e;return{c(){e=d("checked")},l(t){e=w(t,"checked")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Ct($){let e;return{c(){e=d("onDestroy")},l(t){e=w(t,"onDestroy")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Mt($){let e;return{c(){e=d("removed")},l(t){e=w(t,"removed")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Dt($){let e,t,o,l,s,m,n,f,p,v;return t=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:$}}}),l=new I({props:{$$slots:{default:[vt]},$$scope:{ctx:$}}}),m=new I({props:{$$slots:{default:[Ct]},$$scope:{ctx:$}}}),f=new I({props:{$$slots:{default:[Mt]},$$scope:{ctx:$}}}),{c(){e=d("If we toggle it we can see that the lifecycle events run in this order: "),k(t.$$.fragment),o=d(" when it is "),k(l.$$.fragment),s=d(" and "),k(m.$$.fragment),n=d(" when the check is "),k(f.$$.fragment),p=d(" and the component disappears.")},l(a){e=w(a,"If we toggle it we can see that the lifecycle events run in this order: "),b(t.$$.fragment,a),o=w(a," when it is "),b(l.$$.fragment,a),s=w(a," and "),b(m.$$.fragment,a),n=w(a," when the check is "),b(f.$$.fragment,a),p=w(a," and the component disappears.")},m(a,D){c(a,e,D),U(t,a,D),c(a,o,D),U(l,a,D),c(a,s,D),U(m,a,D),c(a,n,D),U(f,a,D),c(a,p,D),v=!0},p(a,D){const T={};D&2&&(T.$$scope={dirty:D,ctx:a}),t.$set(T);const S={};D&2&&(S.$$scope={dirty:D,ctx:a}),l.$set(S);const y={};D&2&&(y.$$scope={dirty:D,ctx:a}),m.$set(y);const x={};D&2&&(x.$$scope={dirty:D,ctx:a}),f.$set(x)},i(a){v||(_(t.$$.fragment,a),_(l.$$.fragment,a),_(m.$$.fragment,a),_(f.$$.fragment,a),v=!0)},o(a){g(t.$$.fragment,a),g(l.$$.fragment,a),g(m.$$.fragment,a),g(f.$$.fragment,a),v=!1},d(a){a&&u(e),h(t,a),a&&u(o),h(l,a),a&&u(s),h(m,a),a&&u(n),h(f,a),a&&u(p)}}}function Tt($){let e;return{c(){e=d("beforeUpdate")},l(t){e=w(t,"beforeUpdate")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function yt($){let e;return{c(){e=d("afterUpdate")},l(t){e=w(t,"afterUpdate")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function It($){let e,t,o,l,s,m;return t=new I({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),l=new I({props:{$$slots:{default:[yt]},$$scope:{ctx:$}}}),{c(){e=d("If we check the checkbox and click the button "),k(t.$$.fragment),o=d(" and "),k(l.$$.fragment),s=d(" will run each time we click the button.")},l(n){e=w(n,"If we check the checkbox and click the button "),b(t.$$.fragment,n),o=w(n," and "),b(l.$$.fragment,n),s=w(n," will run each time we click the button.")},m(n,f){c(n,e,f),U(t,n,f),c(n,o,f),U(l,n,f),c(n,s,f),m=!0},p(n,f){const p={};f&2&&(p.$$scope={dirty:f,ctx:n}),t.$set(p);const v={};f&2&&(v.$$scope={dirty:f,ctx:n}),l.$set(v)},i(n){m||(_(t.$$.fragment,n),_(l.$$.fragment,n),m=!0)},o(n){g(t.$$.fragment,n),g(l.$$.fragment,n),m=!1},d(n){n&&u(e),h(t,n),n&&u(o),h(l,n),n&&u(s)}}}function St($){let e;return{c(){e=d("once")},l(t){e=w(t,"once")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function At($){let e,t,o,l;return t=new I({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),{c(){e=d("If we update the state in afterUpdate it could lead to infinite loops (since it would trigger another update) so Svelte only runs the afterUpdate event "),k(t.$$.fragment),o=d(" to prevent this.")},l(s){e=w(s,"If we update the state in afterUpdate it could lead to infinite loops (since it would trigger another update) so Svelte only runs the afterUpdate event "),b(t.$$.fragment,s),o=w(s," to prevent this.")},m(s,m){c(s,e,m),U(t,s,m),c(s,o,m),l=!0},p(s,m){const n={};m&2&&(n.$$scope={dirty:m,ctx:s}),t.$set(n)},i(s){l||(_(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){s&&u(e),h(t,s),s&&u(o)}}}function Nt($){let e;return{c(){e=d("top level")},l(t){e=w(t,"top level")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function jt($){let e,t,o,l;return t=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:$}}}),{c(){e=d("Another thing to note is that these events need to be at the "),k(t.$$.fragment),o=d(" because they are run when the component initializes.")},l(s){e=w(s,"Another thing to note is that these events need to be at the "),b(t.$$.fragment,s),o=w(s," because they are run when the component initializes.")},m(s,m){c(s,e,m),U(t,s,m),c(s,o,m),l=!0},p(s,m){const n={};m&2&&(n.$$scope={dirty:m,ctx:s}),t.$set(n)},i(s){l||(_(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){s&&u(e),h(t,s),s&&u(o)}}}function Et($){let e;return{c(){e=d("in a function")},l(t){e=w(t,"in a function")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Pt($){let e,t,o,l;return t=new I({props:{$$slots:{default:[Et]},$$scope:{ctx:$}}}),{c(){e=d("We could though put the lifecycle event "),k(t.$$.fragment),o=d(" and then run the function as long as it's still in the top level. This could help if we have many components sharing the same lifecycle logic.")},l(s){e=w(s,"We could though put the lifecycle event "),b(t.$$.fragment,s),o=w(s," and then run the function as long as it's still in the top level. This could help if we have many components sharing the same lifecycle logic.")},m(s,m){c(s,e,m),U(t,s,m),c(s,o,m),l=!0},p(s,m){const n={};m&2&&(n.$$scope={dirty:m,ctx:s}),t.$set(n)},i(s){l||(_(t.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),l=!1},d(s){s&&u(e),h(t,s),s&&u(o)}}}function Bt($){let e;return{c(){e=d("markUpdate.js")},l(t){e=w(t,"markUpdate.js")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Rt($){let e;return{c(){e=d("action")},l(t){e=w(t,"action")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function xt($){let e,t,o,l,s,m;return t=new I({props:{$$slots:{default:[Bt]},$$scope:{ctx:$}}}),l=new I({props:{$$slots:{default:[Rt]},$$scope:{ctx:$}}}),{c(){e=d("In the next example we have a file called "),k(t.$$.fragment),o=d(" which will add outlines to our button using an "),k(l.$$.fragment),s=d(".")},l(n){e=w(n,"In the next example we have a file called "),b(t.$$.fragment,n),o=w(n," which will add outlines to our button using an "),b(l.$$.fragment,n),s=w(n,".")},m(n,f){c(n,e,f),U(t,n,f),c(n,o,f),U(l,n,f),c(n,s,f),m=!0},p(n,f){const p={};f&2&&(p.$$scope={dirty:f,ctx:n}),t.$set(p);const v={};f&2&&(v.$$scope={dirty:f,ctx:n}),l.$set(v)},i(n){m||(_(t.$$.fragment,n),_(l.$$.fragment,n),m=!0)},o(n){g(t.$$.fragment,n),g(l.$$.fragment,n),m=!1},d(n){n&&u(e),h(t,n),n&&u(o),h(l,n),n&&u(s)}}}function zt($){let e;return{c(){e=d("… we will talk more about this later (I hope).")},l(t){e=w(t,"… we will talk more about this later (I hope).")},m(t,o){c(t,e,o)},d(t){t&&u(e)}}}function Ht($){let e,t,o,l,s,m,n,f,p,v,a,D,T,S,y,x,j,ee,E,te,P,ne,z,oe,H,re,L,se,B,fe,R,le,O,$e,q,pe,W,ue;return e=new A({props:{$$slots:{default:[_t]},$$scope:{ctx:$}}}),o=new Oe({props:{$$slots:{default:[bt]},$$scope:{ctx:$}}}),s=new A({props:{$$slots:{default:[Ut]},$$scope:{ctx:$}}}),n=new Ze({}),p=new Z({props:{code:Ge,name:"App.svelte"}}),a=new Z({props:{code:ut,name:"Component.svelte"}}),T=new A({props:{$$slots:{default:[Dt]},$$scope:{ctx:$}}}),y=new A({props:{$$slots:{default:[It]},$$scope:{ctx:$}}}),j=new A({props:{$$slots:{default:[At]},$$scope:{ctx:$}}}),E=new A({props:{$$slots:{default:[jt]},$$scope:{ctx:$}}}),P=new A({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),z=new nt({}),H=new Z({props:{code:mt,name:"Component2.svelte"}}),L=new Z({props:{code:it,name:"foo.js"}}),B=new A({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),R=new A({props:{$$slots:{default:[zt]},$$scope:{ctx:$}}}),O=new pt({}),q=new Z({props:{code:ct,name:"Component3.svelte"}}),W=new Z({props:{code:at,name:"markUpdate.js"}}),{c(){k(e.$$.fragment),t=C(),k(o.$$.fragment),l=C(),k(s.$$.fragment),m=C(),k(n.$$.fragment),f=C(),k(p.$$.fragment),v=C(),k(a.$$.fragment),D=C(),k(T.$$.fragment),S=C(),k(y.$$.fragment),x=C(),k(j.$$.fragment),ee=C(),k(E.$$.fragment),te=C(),k(P.$$.fragment),ne=C(),k(z.$$.fragment),oe=C(),k(H.$$.fragment),re=C(),k(L.$$.fragment),se=C(),k(B.$$.fragment),fe=C(),k(R.$$.fragment),le=C(),k(O.$$.fragment),$e=C(),k(q.$$.fragment),pe=C(),k(W.$$.fragment)},l(r){b(e.$$.fragment,r),t=M(r),b(o.$$.fragment,r),l=M(r),b(s.$$.fragment,r),m=M(r),b(n.$$.fragment,r),f=M(r),b(p.$$.fragment,r),v=M(r),b(a.$$.fragment,r),D=M(r),b(T.$$.fragment,r),S=M(r),b(y.$$.fragment,r),x=M(r),b(j.$$.fragment,r),ee=M(r),b(E.$$.fragment,r),te=M(r),b(P.$$.fragment,r),ne=M(r),b(z.$$.fragment,r),oe=M(r),b(H.$$.fragment,r),re=M(r),b(L.$$.fragment,r),se=M(r),b(B.$$.fragment,r),fe=M(r),b(R.$$.fragment,r),le=M(r),b(O.$$.fragment,r),$e=M(r),b(q.$$.fragment,r),pe=M(r),b(W.$$.fragment,r)},m(r,i){U(e,r,i),c(r,t,i),U(o,r,i),c(r,l,i),U(s,r,i),c(r,m,i),U(n,r,i),c(r,f,i),U(p,r,i),c(r,v,i),U(a,r,i),c(r,D,i),U(T,r,i),c(r,S,i),U(y,r,i),c(r,x,i),U(j,r,i),c(r,ee,i),U(E,r,i),c(r,te,i),U(P,r,i),c(r,ne,i),U(z,r,i),c(r,oe,i),U(H,r,i),c(r,re,i),U(L,r,i),c(r,se,i),U(B,r,i),c(r,fe,i),U(R,r,i),c(r,le,i),U(O,r,i),c(r,$e,i),U(q,r,i),c(r,pe,i),U(W,r,i),ue=!0},p(r,i){const he={};i&2&&(he.$$scope={dirty:i,ctx:r}),e.$set(he);const ve={};i&2&&(ve.$$scope={dirty:i,ctx:r}),o.$set(ve);const Ce={};i&2&&(Ce.$$scope={dirty:i,ctx:r}),s.$set(Ce);const Me={};i&2&&(Me.$$scope={dirty:i,ctx:r}),T.$set(Me);const De={};i&2&&(De.$$scope={dirty:i,ctx:r}),y.$set(De);const Te={};i&2&&(Te.$$scope={dirty:i,ctx:r}),j.$set(Te);const ye={};i&2&&(ye.$$scope={dirty:i,ctx:r}),E.$set(ye);const Ie={};i&2&&(Ie.$$scope={dirty:i,ctx:r}),P.$set(Ie);const Se={};i&2&&(Se.$$scope={dirty:i,ctx:r}),B.$set(Se);const Ae={};i&2&&(Ae.$$scope={dirty:i,ctx:r}),R.$set(Ae)},i(r){ue||(_(e.$$.fragment,r),_(o.$$.fragment,r),_(s.$$.fragment,r),_(n.$$.fragment,r),_(p.$$.fragment,r),_(a.$$.fragment,r),_(T.$$.fragment,r),_(y.$$.fragment,r),_(j.$$.fragment,r),_(E.$$.fragment,r),_(P.$$.fragment,r),_(z.$$.fragment,r),_(H.$$.fragment,r),_(L.$$.fragment,r),_(B.$$.fragment,r),_(R.$$.fragment,r),_(O.$$.fragment,r),_(q.$$.fragment,r),_(W.$$.fragment,r),ue=!0)},o(r){g(e.$$.fragment,r),g(o.$$.fragment,r),g(s.$$.fragment,r),g(n.$$.fragment,r),g(p.$$.fragment,r),g(a.$$.fragment,r),g(T.$$.fragment,r),g(y.$$.fragment,r),g(j.$$.fragment,r),g(E.$$.fragment,r),g(P.$$.fragment,r),g(z.$$.fragment,r),g(H.$$.fragment,r),g(L.$$.fragment,r),g(B.$$.fragment,r),g(R.$$.fragment,r),g(O.$$.fragment,r),g(q.$$.fragment,r),g(W.$$.fragment,r),ue=!1},d(r){h(e,r),r&&u(t),h(o,r),r&&u(l),h(s,r),r&&u(m),h(n,r),r&&u(f),h(p,r),r&&u(v),h(a,r),r&&u(D),h(T,r),r&&u(S),h(y,r),r&&u(x),h(j,r),r&&u(ee),h(E,r),r&&u(te),h(P,r),r&&u(ne),h(z,r),r&&u(oe),h(H,r),r&&u(re),h(L,r),r&&u(se),h(B,r),r&&u(fe),h(R,r),r&&u(le),h(O,r),r&&u($e),h(q,r),r&&u(pe),h(W,r)}}}function Lt($){let e,t;const o=[$[0],Re];let l={$$slots:{default:[Ht]},$$scope:{ctx:$}};for(let s=0;s<o.length;s+=1)l=ie(l,o[s]);return e=new Le({props:l}),{c(){k(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,m){U(e,s,m),t=!0},p(s,[m]){const n=m&1?He(o,[m&1&&Ne(s[0]),m&0&&Ne(Re)]):{};m&2&&(n.$$scope={dirty:m,ctx:s}),e.$set(n)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){g(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}const Re={title:"Component lifecycle events",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-05T00:00:00.000Z",layout:"notes"};function Ot($,e,t){return $.$$set=o=>{t(0,e=ie(ie({},e),je(o)))},e=je(e),[e]}class Gt extends F{constructor(e){super(),K(this,e,Ot,Lt,Q,{})}}export{Gt as default,Re as metadata};