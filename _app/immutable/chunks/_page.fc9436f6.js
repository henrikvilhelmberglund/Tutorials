import{s as F,f as Q,a as C,l as b,g as V,u as ie,c as M,m as U,i as a,X as Y,n as _e,z as J,d as u,o as ge,ac as de,ad as ue,b as he,e as K,j as A,ae as Ee,H as Re,C as me,D as Se}from"./scheduler.a7cd560e.js";import{S as X,i as Z,a as _,g as we,t as g,c as ke,b as d,d as h,m as w,e as k}from"./index.396264e7.js";import{g as Be,a as Ae}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as He,P as S}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as G}from"./ShowCode.9be9983a.js";import{U as Oe}from"./Ul.01790c78.js";import{L as ae}from"./Li.8eab8712.js";import{S as I}from"./Strong.097578ae.js";function Le($){let e,t="Click me",n,f,s,p;return{c(){e=Q("button"),e.textContent=t,n=C(),f=b($[0])},l(o){e=V(o,"BUTTON",{["data-svelte-h"]:!0}),ie(e)!=="svelte-1hf3z7m"&&(e.textContent=t),n=M(o),f=U(o,$[0])},m(o,l){a(o,e,l),a(o,n,l),a(o,f,l),s||(p=Y(e,"click",$[2]),s=!0)},p(o,[l]){l&1&&_e(f,o[0])},i:J,o:J,d(o){o&&(u(e),u(n),u(f)),s=!1,p()}}}function We($,e,t){let n=0;ge(()=>{console.log("onMount")}),de(()=>{console.log("onDestroy")}),ue(()=>{console.log("beforeUpdate")}),he(()=>{console.log("afterUpdate")});function f(){t(0,n++,n)}return[n,f,()=>f()]}class qe extends X{constructor(e){super(),Z(this,e,We,Le,F,{})}}function Ne($){let e,t;return e=new qe({}),{c(){d(e.$$.fragment)},l(n){h(e.$$.fragment,n)},m(n,f){w(e,n,f),t=!0},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function Fe($){let e,t,n,f,s,p,o=$[0]&&Ne();return{c(){e=Q("input"),t=C(),o&&o.c(),n=K(),this.h()},l(l){e=V(l,"INPUT",{type:!0,name:!0,id:!0}),t=M(l),o&&o.l(l),n=K(),this.h()},h(){A(e,"type","checkbox"),A(e,"name",""),A(e,"id","")},m(l,c){a(l,e,c),e.checked=$[0],a(l,t,c),o&&o.m(l,c),a(l,n,c),f=!0,s||(p=Y(e,"change",$[1]),s=!0)},p(l,[c]){c&1&&(e.checked=l[0]),l[0]?o?c&1&&_(o,1):(o=Ne(),o.c(),_(o,1),o.m(n.parentNode,n)):o&&(we(),g(o,1,1,()=>{o=null}),ke())},i(l){f||(_(o),f=!0)},o(l){g(o),f=!1},d(l){l&&(u(e),u(t),u(n)),o&&o.d(l),s=!1,p()}}}function Xe($,e,t){let n;function f(){n=this.checked,t(0,n)}return[n,f]}class Ze extends X{constructor(e){super(),Z(this,e,Xe,Fe,F,{})}}const Ge=`<script>\r
	import Component from "./Component.svelte";\r
	let condition;\r
<\/script>\r
\r
<input type="checkbox" bind:checked={condition} name="" id="" />\r
\r
{#if condition}\r
	<Component />\r
{/if}\r
`;function Je(){ge(()=>{console.log("onMount")})}function Ke($){let e,t="Click me",n,f,s,p;return{c(){e=Q("button"),e.textContent=t,n=C(),f=b($[0])},l(o){e=V(o,"BUTTON",{["data-svelte-h"]:!0}),ie(e)!=="svelte-1hf3z7m"&&(e.textContent=t),n=M(o),f=U(o,$[0])},m(o,l){a(o,e,l),a(o,n,l),a(o,f,l),s||(p=Y(e,"click",$[2]),s=!0)},p(o,[l]){l&1&&_e(f,o[0])},i:J,o:J,d(o){o&&(u(e),u(n),u(f)),s=!1,p()}}}function Qe($,e,t){let n=0;Je(),de(()=>{console.log("onDestroy")}),ue(()=>{console.log("beforeUpdate")}),he(()=>{console.log("afterUpdate")});function f(){t(0,n++,n)}return[n,f,()=>f()]}class Ve extends X{constructor(e){super(),Z(this,e,Qe,Ke,F,{})}}function je($){let e,t;return e=new Ve({}),{c(){d(e.$$.fragment)},l(n){h(e.$$.fragment,n)},m(n,f){w(e,n,f),t=!0},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function Ye($){let e,t,n,f,s,p,o=$[0]&&je();return{c(){e=Q("input"),t=C(),o&&o.c(),n=K(),this.h()},l(l){e=V(l,"INPUT",{type:!0,name:!0,id:!0}),t=M(l),o&&o.l(l),n=K(),this.h()},h(){A(e,"type","checkbox"),A(e,"name",""),A(e,"id","")},m(l,c){a(l,e,c),e.checked=$[0],a(l,t,c),o&&o.m(l,c),a(l,n,c),f=!0,s||(p=Y(e,"change",$[1]),s=!0)},p(l,[c]){c&1&&(e.checked=l[0]),l[0]?o?c&1&&_(o,1):(o=je(),o.c(),_(o,1),o.m(n.parentNode,n)):o&&(we(),g(o,1,1,()=>{o=null}),ke())},i(l){f||(_(o),f=!0)},o(l){g(o),f=!1},d(l){l&&(u(e),u(t),u(n)),o&&o.d(l),s=!1,p()}}}function et($,e,t){let n;function f(){n=this.checked,t(0,n)}return[n,f]}class tt extends X{constructor(e){super(),Z(this,e,et,Ye,F,{})}}function nt(){let $=new Set;return ue(()=>{$.forEach(e=>{e.style.outlineColor="red",setTimeout(()=>{$.has(e)&&(e.style.outlineColor="black")},1e3)})}),ge(()=>{$.forEach(e=>{e.style.outline="2px solid black",e.style.margin="8px"})}),function(t){return $.add(t),{destroy(){$.delete(t)}}}}function ot($){let e,t="Click me",n,f,s,p;return{c(){e=Q("button"),e.textContent=t,n=C(),f=b($[0])},l(o){e=V(o,"BUTTON",{["data-svelte-h"]:!0}),ie(e)!=="svelte-1dtd9uv"&&(e.textContent=t),n=M(o),f=U(o,$[0])},m(o,l){a(o,e,l),a(o,n,l),a(o,f,l),s||(p=[Ee($[1].call(null,e)),Y(e,"click",$[3])],s=!0)},p(o,[l]){l&1&&_e(f,o[0])},i:J,o:J,d(o){o&&(u(e),u(n),u(f)),s=!1,Re(p)}}}function rt($,e,t){let n=0;const f=nt();de(()=>{console.log("onDestroy")}),ue(()=>{console.log("beforeUpdate")}),he(()=>{console.log("afterUpdate")});function s(){t(0,n++,n)}return[n,f,s,()=>s()]}class st extends X{constructor(e){super(),Z(this,e,rt,ot,F,{})}}function ze($){let e,t;return e=new st({}),{c(){d(e.$$.fragment)},l(n){h(e.$$.fragment,n)},m(n,f){w(e,n,f),t=!0},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){k(e,n)}}}function lt($){let e,t,n,f,s,p,o=$[0]&&ze();return{c(){e=Q("input"),t=C(),o&&o.c(),n=K(),this.h()},l(l){e=V(l,"INPUT",{type:!0,name:!0,id:!0}),t=M(l),o&&o.l(l),n=K(),this.h()},h(){A(e,"type","checkbox"),A(e,"name",""),A(e,"id","")},m(l,c){a(l,e,c),e.checked=$[0],a(l,t,c),o&&o.m(l,c),a(l,n,c),f=!0,s||(p=Y(e,"change",$[1]),s=!0)},p(l,[c]){c&1&&(e.checked=l[0]),l[0]?o?c&1&&_(o,1):(o=ze(),o.c(),_(o,1),o.m(n.parentNode,n)):o&&(we(),g(o,1,1,()=>{o=null}),ke())},i(l){f||(_(o),f=!0)},o(l){g(o),f=!1},d(l){l&&(u(e),u(t),u(n)),o&&o.d(l),s=!1,p()}}}function ft($,e,t){let n;function f(){n=this.checked,t(0,n)}return[n,f]}class $t extends X{constructor(e){super(),Z(this,e,ft,lt,F,{})}}const ct=`<script>\r
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
`,pt=`<script>\r
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
`,at=`<script>\r
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
`,ut=`import { onMount } from "svelte";\r
export function foo() {\r
	onMount(() => {\r
		console.log("onMount");\r
	});\r
}\r
`,mt=`import { beforeUpdate, onMount } from "svelte";\r
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
`;function it($){let e;return{c(){e=b("There are 4 lifecycle events in Svelte:")},l(t){e=U(t,"There are 4 lifecycle events in Svelte:")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function _t($){let e;return{c(){e=b("beforeUpdate")},l(t){e=U(t,"beforeUpdate")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function gt($){let e;return{c(){e=b("onMount")},l(t){e=U(t,"onMount")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function dt($){let e;return{c(){e=b("afterUpdate")},l(t){e=U(t,"afterUpdate")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function ht($){let e;return{c(){e=b("onDestroy")},l(t){e=U(t,"onDestroy")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function wt($){let e,t,n,f,s,p,o,l;return e=new ae({props:{$$slots:{default:[_t]},$$scope:{ctx:$}}}),n=new ae({props:{$$slots:{default:[gt]},$$scope:{ctx:$}}}),s=new ae({props:{$$slots:{default:[dt]},$$scope:{ctx:$}}}),o=new ae({props:{$$slots:{default:[ht]},$$scope:{ctx:$}}}),{c(){d(e.$$.fragment),t=C(),d(n.$$.fragment),f=C(),d(s.$$.fragment),p=C(),d(o.$$.fragment)},l(c){h(e.$$.fragment,c),t=M(c),h(n.$$.fragment,c),f=M(c),h(s.$$.fragment,c),p=M(c),h(o.$$.fragment,c)},m(c,v){w(e,c,v),a(c,t,v),w(n,c,v),a(c,f,v),w(s,c,v),a(c,p,v),w(o,c,v),l=!0},p(c,v){const i={};v&2&&(i.$$scope={dirty:v,ctx:c}),e.$set(i);const D={};v&2&&(D.$$scope={dirty:v,ctx:c}),n.$set(D);const T={};v&2&&(T.$$scope={dirty:v,ctx:c}),s.$set(T);const x={};v&2&&(x.$$scope={dirty:v,ctx:c}),o.$set(x)},i(c){l||(_(e.$$.fragment,c),_(n.$$.fragment,c),_(s.$$.fragment,c),_(o.$$.fragment,c),l=!0)},o(c){g(e.$$.fragment,c),g(n.$$.fragment,c),g(s.$$.fragment,c),g(o.$$.fragment,c),l=!1},d(c){c&&(u(t),u(f),u(p)),k(e,c),k(n,c),k(s,c),k(o,c)}}}function kt($){let e;return{c(){e=b("Here we have a component with a checkbox that if checked displays another component containing these lifecycle events.")},l(t){e=U(t,"Here we have a component with a checkbox that if checked displays another component containing these lifecycle events.")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function bt($){let e;return{c(){e=b("beforeUpdate, onMount, afterUpdate")},l(t){e=U(t,"beforeUpdate, onMount, afterUpdate")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Ut($){let e;return{c(){e=b("checked")},l(t){e=U(t,"checked")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function vt($){let e;return{c(){e=b("onDestroy")},l(t){e=U(t,"onDestroy")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Ct($){let e;return{c(){e=b("removed")},l(t){e=U(t,"removed")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Mt($){let e,t,n,f,s,p,o,l,c,v;return t=new I({props:{$$slots:{default:[bt]},$$scope:{ctx:$}}}),f=new I({props:{$$slots:{default:[Ut]},$$scope:{ctx:$}}}),p=new I({props:{$$slots:{default:[vt]},$$scope:{ctx:$}}}),l=new I({props:{$$slots:{default:[Ct]},$$scope:{ctx:$}}}),{c(){e=b("If we toggle it we can see that the lifecycle events run in this order: "),d(t.$$.fragment),n=b(" when it is "),d(f.$$.fragment),s=b(" and "),d(p.$$.fragment),o=b(" when the check is "),d(l.$$.fragment),c=b(" and the component disappears.")},l(i){e=U(i,"If we toggle it we can see that the lifecycle events run in this order: "),h(t.$$.fragment,i),n=U(i," when it is "),h(f.$$.fragment,i),s=U(i," and "),h(p.$$.fragment,i),o=U(i," when the check is "),h(l.$$.fragment,i),c=U(i," and the component disappears.")},m(i,D){a(i,e,D),w(t,i,D),a(i,n,D),w(f,i,D),a(i,s,D),w(p,i,D),a(i,o,D),w(l,i,D),a(i,c,D),v=!0},p(i,D){const T={};D&2&&(T.$$scope={dirty:D,ctx:i}),t.$set(T);const x={};D&2&&(x.$$scope={dirty:D,ctx:i}),f.$set(x);const y={};D&2&&(y.$$scope={dirty:D,ctx:i}),p.$set(y);const R={};D&2&&(R.$$scope={dirty:D,ctx:i}),l.$set(R)},i(i){v||(_(t.$$.fragment,i),_(f.$$.fragment,i),_(p.$$.fragment,i),_(l.$$.fragment,i),v=!0)},o(i){g(t.$$.fragment,i),g(f.$$.fragment,i),g(p.$$.fragment,i),g(l.$$.fragment,i),v=!1},d(i){i&&(u(e),u(n),u(s),u(o),u(c)),k(t,i),k(f,i),k(p,i),k(l,i)}}}function Dt($){let e;return{c(){e=b("beforeUpdate")},l(t){e=U(t,"beforeUpdate")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Tt($){let e;return{c(){e=b("afterUpdate")},l(t){e=U(t,"afterUpdate")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function yt($){let e,t,n,f,s,p;return t=new I({props:{$$slots:{default:[Dt]},$$scope:{ctx:$}}}),f=new I({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),{c(){e=b("If we check the checkbox and click the button "),d(t.$$.fragment),n=b(" and "),d(f.$$.fragment),s=b(" will run each time we click the button.")},l(o){e=U(o,"If we check the checkbox and click the button "),h(t.$$.fragment,o),n=U(o," and "),h(f.$$.fragment,o),s=U(o," will run each time we click the button.")},m(o,l){a(o,e,l),w(t,o,l),a(o,n,l),w(f,o,l),a(o,s,l),p=!0},p(o,l){const c={};l&2&&(c.$$scope={dirty:l,ctx:o}),t.$set(c);const v={};l&2&&(v.$$scope={dirty:l,ctx:o}),f.$set(v)},i(o){p||(_(t.$$.fragment,o),_(f.$$.fragment,o),p=!0)},o(o){g(t.$$.fragment,o),g(f.$$.fragment,o),p=!1},d(o){o&&(u(e),u(n),u(s)),k(t,o),k(f,o)}}}function It($){let e;return{c(){e=b("once")},l(t){e=U(t,"once")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function xt($){let e,t,n,f;return t=new I({props:{$$slots:{default:[It]},$$scope:{ctx:$}}}),{c(){e=b("If we update the state in afterUpdate it could lead to infinite loops (since it would trigger another update) so Svelte only runs the afterUpdate event "),d(t.$$.fragment),n=b(" to prevent this.")},l(s){e=U(s,"If we update the state in afterUpdate it could lead to infinite loops (since it would trigger another update) so Svelte only runs the afterUpdate event "),h(t.$$.fragment,s),n=U(s," to prevent this.")},m(s,p){a(s,e,p),w(t,s,p),a(s,n,p),f=!0},p(s,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:s}),t.$set(o)},i(s){f||(_(t.$$.fragment,s),f=!0)},o(s){g(t.$$.fragment,s),f=!1},d(s){s&&(u(e),u(n)),k(t,s)}}}function St($){let e;return{c(){e=b("top level")},l(t){e=U(t,"top level")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function At($){let e,t,n,f;return t=new I({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),{c(){e=b("Another thing to note is that these events need to be at the "),d(t.$$.fragment),n=b(" because they are run when the component initializes.")},l(s){e=U(s,"Another thing to note is that these events need to be at the "),h(t.$$.fragment,s),n=U(s," because they are run when the component initializes.")},m(s,p){a(s,e,p),w(t,s,p),a(s,n,p),f=!0},p(s,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:s}),t.$set(o)},i(s){f||(_(t.$$.fragment,s),f=!0)},o(s){g(t.$$.fragment,s),f=!1},d(s){s&&(u(e),u(n)),k(t,s)}}}function Nt($){let e;return{c(){e=b("in a function")},l(t){e=U(t,"in a function")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function jt($){let e,t,n,f;return t=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:$}}}),{c(){e=b("We could though put the lifecycle event "),d(t.$$.fragment),n=b(" and then run the function as long as it's still in the top level. This could help if we have many components sharing the same lifecycle logic.")},l(s){e=U(s,"We could though put the lifecycle event "),h(t.$$.fragment,s),n=U(s," and then run the function as long as it's still in the top level. This could help if we have many components sharing the same lifecycle logic.")},m(s,p){a(s,e,p),w(t,s,p),a(s,n,p),f=!0},p(s,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:s}),t.$set(o)},i(s){f||(_(t.$$.fragment,s),f=!0)},o(s){g(t.$$.fragment,s),f=!1},d(s){s&&(u(e),u(n)),k(t,s)}}}function zt($){let e;return{c(){e=b("markUpdate.js")},l(t){e=U(t,"markUpdate.js")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Pt($){let e;return{c(){e=b("action")},l(t){e=U(t,"action")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Et($){let e,t,n,f,s,p;return t=new I({props:{$$slots:{default:[zt]},$$scope:{ctx:$}}}),f=new I({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),{c(){e=b("In the next example we have a file called "),d(t.$$.fragment),n=b(" which will add outlines to our button using an "),d(f.$$.fragment),s=b(".")},l(o){e=U(o,"In the next example we have a file called "),h(t.$$.fragment,o),n=U(o," which will add outlines to our button using an "),h(f.$$.fragment,o),s=U(o,".")},m(o,l){a(o,e,l),w(t,o,l),a(o,n,l),w(f,o,l),a(o,s,l),p=!0},p(o,l){const c={};l&2&&(c.$$scope={dirty:l,ctx:o}),t.$set(c);const v={};l&2&&(v.$$scope={dirty:l,ctx:o}),f.$set(v)},i(o){p||(_(t.$$.fragment,o),_(f.$$.fragment,o),p=!0)},o(o){g(t.$$.fragment,o),g(f.$$.fragment,o),p=!1},d(o){o&&(u(e),u(n),u(s)),k(t,o),k(f,o)}}}function Rt($){let e;return{c(){e=b("… we will talk more about this later (I hope).")},l(t){e=U(t,"… we will talk more about this later (I hope).")},m(t,n){a(t,e,n)},d(t){t&&u(e)}}}function Bt($){let e,t,n,f,s,p,o,l,c,v,i,D,T,x,y,R,N,ee,j,te,z,ne,B,oe,H,re,O,se,P,le,E,fe,L,$e,W,ce,q,pe;return e=new S({props:{$$slots:{default:[it]},$$scope:{ctx:$}}}),n=new Oe({props:{$$slots:{default:[wt]},$$scope:{ctx:$}}}),s=new S({props:{$$slots:{default:[kt]},$$scope:{ctx:$}}}),o=new Ze({}),c=new G({props:{code:Ge,name:"App.svelte"}}),i=new G({props:{code:ct,name:"Component.svelte"}}),T=new S({props:{$$slots:{default:[Mt]},$$scope:{ctx:$}}}),y=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:$}}}),N=new S({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),j=new S({props:{$$slots:{default:[At]},$$scope:{ctx:$}}}),z=new S({props:{$$slots:{default:[jt]},$$scope:{ctx:$}}}),B=new tt({}),H=new G({props:{code:pt,name:"Component2.svelte"}}),O=new G({props:{code:ut,name:"foo.js"}}),P=new S({props:{$$slots:{default:[Et]},$$scope:{ctx:$}}}),E=new S({props:{$$slots:{default:[Rt]},$$scope:{ctx:$}}}),L=new $t({}),W=new G({props:{code:at,name:"Component3.svelte"}}),q=new G({props:{code:mt,name:"markUpdate.js"}}),{c(){d(e.$$.fragment),t=C(),d(n.$$.fragment),f=C(),d(s.$$.fragment),p=C(),d(o.$$.fragment),l=C(),d(c.$$.fragment),v=C(),d(i.$$.fragment),D=C(),d(T.$$.fragment),x=C(),d(y.$$.fragment),R=C(),d(N.$$.fragment),ee=C(),d(j.$$.fragment),te=C(),d(z.$$.fragment),ne=C(),d(B.$$.fragment),oe=C(),d(H.$$.fragment),re=C(),d(O.$$.fragment),se=C(),d(P.$$.fragment),le=C(),d(E.$$.fragment),fe=C(),d(L.$$.fragment),$e=C(),d(W.$$.fragment),ce=C(),d(q.$$.fragment)},l(r){h(e.$$.fragment,r),t=M(r),h(n.$$.fragment,r),f=M(r),h(s.$$.fragment,r),p=M(r),h(o.$$.fragment,r),l=M(r),h(c.$$.fragment,r),v=M(r),h(i.$$.fragment,r),D=M(r),h(T.$$.fragment,r),x=M(r),h(y.$$.fragment,r),R=M(r),h(N.$$.fragment,r),ee=M(r),h(j.$$.fragment,r),te=M(r),h(z.$$.fragment,r),ne=M(r),h(B.$$.fragment,r),oe=M(r),h(H.$$.fragment,r),re=M(r),h(O.$$.fragment,r),se=M(r),h(P.$$.fragment,r),le=M(r),h(E.$$.fragment,r),fe=M(r),h(L.$$.fragment,r),$e=M(r),h(W.$$.fragment,r),ce=M(r),h(q.$$.fragment,r)},m(r,m){w(e,r,m),a(r,t,m),w(n,r,m),a(r,f,m),w(s,r,m),a(r,p,m),w(o,r,m),a(r,l,m),w(c,r,m),a(r,v,m),w(i,r,m),a(r,D,m),w(T,r,m),a(r,x,m),w(y,r,m),a(r,R,m),w(N,r,m),a(r,ee,m),w(j,r,m),a(r,te,m),w(z,r,m),a(r,ne,m),w(B,r,m),a(r,oe,m),w(H,r,m),a(r,re,m),w(O,r,m),a(r,se,m),w(P,r,m),a(r,le,m),w(E,r,m),a(r,fe,m),w(L,r,m),a(r,$e,m),w(W,r,m),a(r,ce,m),w(q,r,m),pe=!0},p(r,m){const be={};m&2&&(be.$$scope={dirty:m,ctx:r}),e.$set(be);const Ue={};m&2&&(Ue.$$scope={dirty:m,ctx:r}),n.$set(Ue);const ve={};m&2&&(ve.$$scope={dirty:m,ctx:r}),s.$set(ve);const Ce={};m&2&&(Ce.$$scope={dirty:m,ctx:r}),T.$set(Ce);const Me={};m&2&&(Me.$$scope={dirty:m,ctx:r}),y.$set(Me);const De={};m&2&&(De.$$scope={dirty:m,ctx:r}),N.$set(De);const Te={};m&2&&(Te.$$scope={dirty:m,ctx:r}),j.$set(Te);const ye={};m&2&&(ye.$$scope={dirty:m,ctx:r}),z.$set(ye);const Ie={};m&2&&(Ie.$$scope={dirty:m,ctx:r}),P.$set(Ie);const xe={};m&2&&(xe.$$scope={dirty:m,ctx:r}),E.$set(xe)},i(r){pe||(_(e.$$.fragment,r),_(n.$$.fragment,r),_(s.$$.fragment,r),_(o.$$.fragment,r),_(c.$$.fragment,r),_(i.$$.fragment,r),_(T.$$.fragment,r),_(y.$$.fragment,r),_(N.$$.fragment,r),_(j.$$.fragment,r),_(z.$$.fragment,r),_(B.$$.fragment,r),_(H.$$.fragment,r),_(O.$$.fragment,r),_(P.$$.fragment,r),_(E.$$.fragment,r),_(L.$$.fragment,r),_(W.$$.fragment,r),_(q.$$.fragment,r),pe=!0)},o(r){g(e.$$.fragment,r),g(n.$$.fragment,r),g(s.$$.fragment,r),g(o.$$.fragment,r),g(c.$$.fragment,r),g(i.$$.fragment,r),g(T.$$.fragment,r),g(y.$$.fragment,r),g(N.$$.fragment,r),g(j.$$.fragment,r),g(z.$$.fragment,r),g(B.$$.fragment,r),g(H.$$.fragment,r),g(O.$$.fragment,r),g(P.$$.fragment,r),g(E.$$.fragment,r),g(L.$$.fragment,r),g(W.$$.fragment,r),g(q.$$.fragment,r),pe=!1},d(r){r&&(u(t),u(f),u(p),u(l),u(v),u(D),u(x),u(R),u(ee),u(te),u(ne),u(oe),u(re),u(se),u(le),u(fe),u($e),u(ce)),k(e,r),k(n,r),k(s,r),k(o,r),k(c,r),k(i,r),k(T,r),k(y,r),k(N,r),k(j,r),k(z,r),k(B,r),k(H,r),k(O,r),k(P,r),k(E,r),k(L,r),k(W,r),k(q,r)}}}function Ht($){let e,t;const n=[$[0],Pe];let f={$$slots:{default:[Bt]},$$scope:{ctx:$}};for(let s=0;s<n.length;s+=1)f=me(f,n[s]);return e=new He({props:f}),{c(){d(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,p){w(e,s,p),t=!0},p(s,[p]){const o=p&1?Be(n,[p&1&&Ae(s[0]),p&0&&Ae(Pe)]):{};p&2&&(o.$$scope={dirty:p,ctx:s}),e.$set(o)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){g(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}const Pe={title:"Component lifecycle events",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-05T00:00:00.000Z",layout:"notes"};function Ot($,e,t){return $.$$set=n=>{t(0,e=me(me({},e),Se(n)))},e=Se(e),[e]}class Kt extends X{constructor(e){super(),Z(this,e,Ot,Ht,F,{})}}export{Kt as default,Pe as metadata};
