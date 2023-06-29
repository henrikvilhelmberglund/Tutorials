import{s as U,f as V,l as g,a as T,g as I,h as kt,m as w,c as y,u as E,d as f,i as c,v as W,X as B,n as et,z as j,H as Vt,A as tt,p as ne,j as re,a8 as Ct,am as xt,al as oe,ac as le,an as pe,e as Et,B as ie,C as yt,D as Ht}from"./scheduler.a7cd560e.js";import{S as O,i as P,b as C,d as M,m as k,a as d,t as v,e as x,g as ue,c as me}from"./index.396264e7.js";import{g as fe,a as Lt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as $e,P as N}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as nt}from"./ShowMany.db7be1f3.js";import{w as at}from"./index.5e192797.js";import{e as qt}from"./each.32d06572.js";import{H as dt}from"./HR.c0e72d5d.js";import{S as z}from"./Strong.097578ae.js";import{C as se}from"./Code.64283003.js";const At=at(1);let rt;function ce(l){rt&&(rt.style.border="none"),rt=l,rt.style.border="1px solid black"}function _e(l){let t,e,n,s,r="Set me",p,a,i="Who's set?",u,h;return{c(){t=V("div"),e=g(l[1]),n=T(),s=V("button"),s.textContent=r,p=T(),a=V("button"),a.textContent=i},l(m){t=I(m,"DIV",{});var $=kt(t);e=w($,l[1]),n=y($),s=I($,"BUTTON",{["data-svelte-h"]:!0}),E(s)!=="svelte-1k2nh9i"&&(s.textContent=r),p=y($),a=I($,"BUTTON",{["data-svelte-h"]:!0}),E(a)!=="svelte-15t0d4u"&&(a.textContent=i),$.forEach(f)},m(m,$){c(m,t,$),W(t,e),W(t,n),W(t,s),W(t,p),W(t,a),l[4](t),u||(h=[B(s,"click",l[2]),B(a,"click",l[3])],u=!0)},p(m,[$]){$&2&&et(e,m[1])},i:j,o:j,d(m){m&&f(t),l[4](null),u=!1,Vt(h)}}}function he(l,t,e){let n;tt(l,At,i=>e(1,n=i));let s;function r(){ce(s)}function p(){console.log(rt)}function a(i){ne[i?"unshift":"push"](()=>{s=i,e(0,s)})}return[s,n,r,p,a]}let Ft=class extends O{constructor(t){super(),P(this,t,he,_e,U,{})}};function ge(l){let t,e,n,s,r,p,a,i;return n=new Ft({}),r=new Ft({}),{c(){t=V("input"),e=T(),C(n.$$.fragment),s=T(),C(r.$$.fragment),this.h()},l(u){t=I(u,"INPUT",{type:!0}),e=y(u),M(n.$$.fragment,u),s=y(u),M(r.$$.fragment,u),this.h()},h(){re(t,"type","number")},m(u,h){c(u,t,h),Ct(t,l[0]),c(u,e,h),k(n,u,h),c(u,s,h),k(r,u,h),p=!0,a||(i=B(t,"input",l[1]),a=!0)},p(u,[h]){h&1&&xt(t.value)!==u[0]&&Ct(t,u[0])},i(u){p||(d(n.$$.fragment,u),d(r.$$.fragment,u),p=!0)},o(u){v(n.$$.fragment,u),v(r.$$.fragment,u),p=!1},d(u){u&&(f(t),f(e),f(s)),x(n,u),x(r,u),a=!1,i()}}}function we(l,t,e){let n;tt(l,At,r=>e(0,n=r));function s(){n=xt(this.value),At.set(n)}return[n,s]}class vt extends O{constructor(t){super(),P(this,t,we,ge,U,{})}}const de=`<script>\r
	import Map from "./Map.svelte";\r
\r
	import { mapValue } from "./mapStore";\r
<\/script>\r
\r
<input bind:value={$mapValue} type="number" />\r
\r
<Map />\r
<Map />\r
\r
<style>\r
</style>\r
`,ve=`<script>\r
	import { mapValue } from "./mapStore";\r
	import { currentMap, setCurrentMap } from "./mapData";\r
\r
	let div;\r
\r
	function setMe() {\r
		setCurrentMap(div);\r
	}\r
\r
	function whosSet() {\r
		console.log(currentMap);\r
	}\r
<\/script>\r
\r
<div bind:this={div}>\r
	{$mapValue}\r
	<button on:click={setMe}>Set me</button>\r
	<button on:click={whosSet}>Who's set?</button>\r
</div>\r
\r
<style>\r
</style>\r
`,be=`export let currentMap;\r
\r
export function setCurrentMap(newCurrentMap) {\r
	if (currentMap) currentMap.style.border = "none";\r
\r
	currentMap = newCurrentMap;\r
	currentMap.style.border = "1px solid black";\r
}\r
`,Ce=`import { writable } from "svelte/store";\r
export const mapValue = writable(1);\r
`;function Me(l){let t,e,n,s,r="Set me",p,a,i="Who's set?",u,h;return{c(){t=V("div"),e=g(l[1]),n=T(),s=V("button"),s.textContent=r,p=T(),a=V("button"),a.textContent=i},l(m){t=I(m,"DIV",{});var $=kt(t);e=w($,l[1]),n=y($),s=I($,"BUTTON",{["data-svelte-h"]:!0}),E(s)!=="svelte-1k2nh9i"&&(s.textContent=r),p=y($),a=I($,"BUTTON",{["data-svelte-h"]:!0}),E(a)!=="svelte-15t0d4u"&&(a.textContent=i),$.forEach(f)},m(m,$){c(m,t,$),W(t,e),W(t,n),W(t,s),W(t,p),W(t,a),l[3](t),u||(h=[B(s,"click",l[2]),B(a,"click",ke)],u=!0)},p(m,[$]){$&2&&et(e,m[1])},i:j,o:j,d(m){m&&f(t),l[3](null),u=!1,Vt(h)}}}const St=at(1);let ot;function ke(){console.log(ot)}function xe(l,t,e){let n,s=j;tt(l,St,i=>e(1,n=i)),l.$$.on_destroy.push(()=>s());let r;function p(){ot&&(ot.style.border="none"),ot=r,ot.style.border="1px solid black"}function a(i){ne[i?"unshift":"push"](()=>{r=i,e(0,r)})}return[r,n,p,a]}class Xt extends O{constructor(t){super(),P(this,t,xe,Me,U,{})}}function Te(l){let t,e,n,s,r,p,a,i;return n=new Xt({}),r=new Xt({}),{c(){t=V("input"),e=T(),C(n.$$.fragment),s=T(),C(r.$$.fragment),this.h()},l(u){t=I(u,"INPUT",{type:!0}),e=y(u),M(n.$$.fragment,u),s=y(u),M(r.$$.fragment,u),this.h()},h(){re(t,"type","number")},m(u,h){c(u,t,h),Ct(t,l[0]),c(u,e,h),k(n,u,h),c(u,s,h),k(r,u,h),p=!0,a||(i=B(t,"input",l[1]),a=!0)},p(u,[h]){h&1&&xt(t.value)!==u[0]&&Ct(t,u[0])},i(u){p||(d(n.$$.fragment,u),d(r.$$.fragment,u),p=!0)},o(u){v(n.$$.fragment,u),v(r.$$.fragment,u),p=!1},d(u){u&&(f(t),f(e),f(s)),x(n,u),x(r,u),a=!1,i()}}}function ye(l,t,e){let n;tt(l,St,r=>e(0,n=r));function s(){n=xt(this.value),St.set(n)}return[n,s]}class Zt extends O{constructor(t){super(),P(this,t,ye,Te,U,{})}}const Ae=`<script>\r
	import Map, { mapValue } from "./Map2.svelte";\r
<\/script>\r
\r
<input bind:value={$mapValue} type="number" />\r
\r
<Map />\r
<Map />\r
\r
<style>\r
</style>\r
`,Se=`<script context="module">\r
	import { writable } from "svelte/store";\r
	export const mapValue = writable(1);\r
\r
	let currentMap;\r
<\/script>\r
\r
<script>\r
	let div;\r
\r
	function setMe() {\r
		if (currentMap) currentMap.style.border = "none";\r
		currentMap = div;\r
		currentMap.style.border = "1px solid black";\r
	}\r
\r
	function whosSet() {\r
		console.log(currentMap);\r
	}\r
<\/script>\r
\r
<div bind:this={div}>\r
	{$mapValue}\r
	<button on:click={setMe}>Set me</button>\r
	<button on:click={whosSet}>Who's set?</button>\r
</div>\r
\r
<style>\r
</style>\r
`;function Ve(l){let t,e,n,s,r="Increment (does not work)",p,a;return{c(){t=g("Value: "),e=g(st),n=T(),s=V("button"),s.textContent=r},l(i){t=w(i,"Value: "),e=w(i,st),n=y(i),s=I(i,"BUTTON",{["data-svelte-h"]:!0}),E(s)!=="svelte-sezpw2"&&(s.textContent=r)},m(i,u){c(i,t,u),c(i,e,u),c(i,n,u),c(i,s,u),p||(a=B(s,"click",l[0]),p=!0)},p(i,[u]){u&0&&et(e,st)},i:j,o:j,d(i){i&&(f(t),f(e),f(n),f(s)),p=!1,a()}}}let st=0;console.log(st);function Ie(l){return[()=>st++]}class De extends O{constructor(t){super(),P(this,t,Ie,Ve,U,{})}}const We=`<script context="module">\r
	// These will only run once!\r
	let count = 0;\r
	console.log(count);\r
<\/script>\r
\r
<script>\r
<\/script>\r
\r
Value: {count}\r
<button on:click={() => count++}>Increment (does not work)</button>\r
\r
<style>\r
</style>\r
`;function Re(l){let t,e,n,s,r="Increment",p,a;return{c(){t=g("Value: "),e=g(l[0]),n=T(),s=V("button"),s.textContent=r},l(i){t=w(i,"Value: "),e=w(i,l[0]),n=y(i),s=I(i,"BUTTON",{["data-svelte-h"]:!0}),E(s)!=="svelte-12fbflc"&&(s.textContent=r)},m(i,u){c(i,t,u),c(i,e,u),c(i,n,u),c(i,s,u),p||(a=B(s,"click",l[1]),p=!0)},p(i,[u]){u&1&&et(e,i[0])},i:j,o:j,d(i){i&&(f(t),f(e),f(n),f(s)),p=!1,a()}}}let Gt=at(0);function je(l,t,e){let n;return tt(l,Gt,r=>e(0,n=r)),[n,()=>oe(Gt,n++,n)]}class Tt extends O{constructor(t){super(),P(this,t,je,Re,U,{})}}function Ne(l){let t,e,n,s,r,p;return t=new Tt({}),n=new Tt({}),r=new Tt({}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment),s=T(),C(r.$$.fragment)},l(a){M(t.$$.fragment,a),e=y(a),M(n.$$.fragment,a),s=y(a),M(r.$$.fragment,a)},m(a,i){k(t,a,i),c(a,e,i),k(n,a,i),c(a,s,i),k(r,a,i),p=!0},p:j,i(a){p||(d(t.$$.fragment,a),d(n.$$.fragment,a),d(r.$$.fragment,a),p=!0)},o(a){v(t.$$.fragment,a),v(n.$$.fragment,a),v(r.$$.fragment,a),p=!1},d(a){a&&(f(e),f(s)),x(t,a),x(n,a),x(r,a)}}}class Jt extends O{constructor(t){super(),P(this,t,null,Ne,U,{})}}const Be=`<script>\r
	import CountComponent from "./CountComponent.svelte";\r
<\/script>\r
\r
<CountComponent />\r
<CountComponent />\r
<CountComponent />\r
\r
<style>\r
</style>\r
`,Ue=`<script context="module">\r
	import { writable } from "svelte/store";\r
\r
	let count = writable(0);\r
<\/script>\r
\r
<script>\r
<\/script>\r
\r
Value: {$count}\r
<button on:click={() => $count++}>Increment</button>\r
\r
<style>\r
</style>\r
`;function Oe(l){let t,e,n;return{c(){t=V("p"),e=g("Total value: "),n=g(l[0])},l(s){t=I(s,"P",{});var r=kt(t);e=w(r,"Total value: "),n=w(r,l[0]),r.forEach(f)},m(s,r){c(s,t,r),W(t,e),W(t,n)},p(s,r){r&1&&et(n,s[0])},d(s){s&&f(t)}}}function Pe(l){let t,e,n,s,r,p,a="Increment",i,u,h=l[3]===0&&Oe(l);return{c(){h&&h.c(),t=T(),e=V("p"),n=g("Value: "),s=g(l[1]),r=T(),p=V("button"),p.textContent=a},l(m){h&&h.l(m),t=y(m),e=I(m,"P",{});var $=kt(e);n=w($,"Value: "),s=w($,l[1]),$.forEach(f),r=y(m),p=I(m,"BUTTON",{["data-svelte-h"]:!0}),E(p)!=="svelte-qeotzc"&&(p.textContent=a)},m(m,$){h&&h.m(m,$),c(m,t,$),c(m,e,$),W(e,n),W(e,s),c(m,r,$),c(m,p,$),i||(u=B(p,"click",l[4]),i=!0)},p(m,[$]){m[3]===0&&h.p(m,$),$&2&&et(s,m[1])},i:j,o:j,d(m){m&&(f(t),f(e),f(r),f(p)),h&&h.d(m),i=!1,u()}}}let ae=at(0),bt=0;function Kt(){const l=[...Mt].map(([t,e])=>pe(e));ae.set(l.reduce((t,e)=>t+e,0)),Mt.size===0&&(bt=0)}let Mt=new Map;function ze(l,t,e){let n,s;tt(l,ae,i=>e(0,n=i));let r=at(0);tt(l,r,i=>e(1,s=i)),Mt.set(bt,r);let p=bt;return bt++,le(()=>{Mt.delete(p),Kt()}),[n,s,r,p,()=>{oe(r,s++,s),Kt()}]}class Ee extends O{constructor(t){super(),P(this,t,ze,Pe,U,{})}}function Qt(l,t,e){const n=l.slice();return n[3]=t[e],n}function Yt(l){let t,e;return t=new Ee({}),{c(){C(t.$$.fragment)},l(n){M(t.$$.fragment,n)},m(n,s){k(t,n,s),e=!0},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function He(l){let t,e="Add instance",n,s,r="Remove instance",p,a,i,u,h,m=qt(Array.from({length:l[0]})),$=[];for(let b=0;b<m.length;b+=1)$[b]=Yt(Qt(l,m,b));const R=b=>v($[b],1,1,()=>{$[b]=null});return{c(){t=V("button"),t.textContent=e,n=T(),s=V("button"),s.textContent=r,p=T();for(let b=0;b<$.length;b+=1)$[b].c();a=Et()},l(b){t=I(b,"BUTTON",{["data-svelte-h"]:!0}),E(t)!=="svelte-exklbg"&&(t.textContent=e),n=y(b),s=I(b,"BUTTON",{["data-svelte-h"]:!0}),E(s)!=="svelte-117cz29"&&(s.textContent=r),p=y(b);for(let A=0;A<$.length;A+=1)$[A].l(b);a=Et()},m(b,A){c(b,t,A),c(b,n,A),c(b,s,A),c(b,p,A);for(let D=0;D<$.length;D+=1)$[D]&&$[D].m(b,A);c(b,a,A),i=!0,u||(h=[B(t,"click",l[1]),B(s,"click",l[2])],u=!0)},p(b,[A]){if(A&1){const D=m.length;m=qt(Array.from({length:b[0]}));let S;for(S=D;S<m.length;S+=1)Qt(b,m,S),$[S]?d($[S],1):($[S]=Yt(),$[S].c(),d($[S],1),$[S].m(a.parentNode,a));for(ue(),S=m.length;S<$.length;S+=1)R(S);me()}},i(b){if(!i){for(let A=0;A<m.length;A+=1)d($[A]);i=!0}},o(b){$=$.filter(Boolean);for(let A=0;A<$.length;A+=1)v($[A]);i=!1},d(b){b&&(f(t),f(n),f(s),f(p),f(a)),ie($,b),u=!1,Vt(h)}}}function Le(l,t,e){let n=2;return[n,()=>e(0,n++,n),()=>e(0,n--,n)]}class te extends O{constructor(t){super(),P(this,t,Le,He,U,{})}}const qe=`<script>\r
	import CountComponent2 from "./CountComponent2.svelte";\r
\r
	let instances = 2;\r
<\/script>\r
\r
<button on:click={() => instances++}>Add instance</button>\r
<button on:click={() => instances--}>Remove instance</button>\r
\r
{#each Array.from({ length: instances }) as _}\r
	<CountComponent2 />\r
{/each}\r
\r
<style>\r
</style>\r
`,Fe=`<script context="module">\r
	import { writable } from "svelte/store";\r
	import { get } from "svelte/store";\r
\r
	// Create a module-level store to hold the combined count value\r
	let totalCount = writable(0);\r
	// Create a module level id variable\r
	let id = 0;\r
\r
	// Function to update the totalCount based on the individual counts of all components\r
	function updateTotalCount() {\r
		const counts = [...components].map(([_, store]) => get(store));\r
		totalCount.set(counts.reduce((sum, count) => sum + count, 0));\r
		if (components.size === 0) id = 0;\r
	}\r
\r
	// Create a map to store component instances and their individual count stores\r
	let components = new Map();\r
<\/script>\r
\r
<script>\r
	import { onDestroy } from "svelte";\r
	// Create a writable store for the individual count value of the component\r
	let count = writable(0);\r
	// Add the count store to the components map when the component is created\r
	components.set(id, count);\r
	// Save a local ID reference for use with onDestroy later\r
	let localID = id;\r
	// Increment the module level id variable so the next component gets a new id\r
	id++;\r
\r
	// when the component is destroyed, delete the component and its value from the map, then update the total value\r
	onDestroy(() => {\r
		components.delete(localID);\r
		updateTotalCount();\r
	});\r
<\/script>\r
\r
<!-- only show the total value if it's the first component instance -->\r
{#if localID === 0}\r
	<p>\r
		Total value: {$totalCount}\r
	</p>\r
{/if}\r
<p>\r
	Value: {$count}\r
</p>\r
<button\r
	on:click={() => {\r
		// When clicked, increment the count value in the store and run the function to update the total value\r
		$count++;\r
		updateTotalCount();\r
	}}>Increment</button>\r
\r
<style>\r
</style>\r
`;function Xe(l){let t;return{c(){t=g("In this example we have an App with a few Map components. The Map components import a store from mapStore.js. The reason we don't create the store inside of the Map component is that that would end up with a store for each Map component (meaning a state within each component) instead of a separate shared store used by every Map component.")},l(e){t=w(e,"In this example we have an App with a few Map components. The Map components import a store from mapStore.js. The reason we don't create the store inside of the Map component is that that would end up with a store for each Map component (meaning a state within each component) instead of a separate shared store used by every Map component.")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function Ze(l){let t;return{c(){t=g("singleton")},l(e){t=w(e,"singleton")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function Ge(l){let t,e,n,s;return e=new z({props:{$$slots:{default:[Ze]},$$scope:{ctx:l}}}),{c(){t=g("We only have one store instance, this is called a "),C(e.$$.fragment),n=g(". We are also using it in the main App.svelte as well where the store value is bound to the input field.")},l(r){t=w(r,"We only have one store instance, this is called a "),M(e.$$.fragment,r),n=w(r,". We are also using it in the main App.svelte as well where the store value is bound to the input field.")},m(r,p){c(r,t,p),k(e,r,p),c(r,n,p),s=!0},p(r,p){const a={};p&2&&(a.$$scope={dirty:p,ctx:r}),e.$set(a)},i(r){s||(d(e.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),s=!1},d(r){r&&(f(t),f(n)),x(e,r)}}}function Je(l){let t;return{c(){t=g("currentMap")},l(e){t=w(e,"currentMap")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function Ke(l){let t;return{c(){t=g("export let currentMap;")},l(e){t=w(e,"export let currentMap;")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function Qe(l){let t,e,n,s,r,p;return e=new z({props:{$$slots:{default:[Je]},$$scope:{ctx:l}}}),s=new se({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){t=g("We have another file called mapData.js containing another singleton, "),C(e.$$.fragment),n=g(". It contains a function to update the currentMap to another map. Since we're exportíng the value with "),C(s.$$.fragment),r=g(" it will update where we are importing it (inside our Map component).")},l(a){t=w(a,"We have another file called mapData.js containing another singleton, "),M(e.$$.fragment,a),n=w(a,". It contains a function to update the currentMap to another map. Since we're exportíng the value with "),M(s.$$.fragment,a),r=w(a," it will update where we are importing it (inside our Map component).")},m(a,i){c(a,t,i),k(e,a,i),c(a,n,i),k(s,a,i),c(a,r,i),p=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),e.$set(u);const h={};i&2&&(h.$$scope={dirty:i,ctx:a}),s.$set(h)},i(a){p||(d(e.$$.fragment,a),d(s.$$.fragment,a),p=!0)},o(a){v(e.$$.fragment,a),v(s.$$.fragment,a),p=!1},d(a){a&&(f(t),f(n),f(r)),x(e,a),x(s,a)}}}function Ye(l){let t;return{c(){t=g("It is not super nice though to have to have a separate .js file with the store for our Map components since they are so tightly coupled. Importing the store from a separate file makes it seem like it's a separate thing (something that's supposed to be used everywhere within the app for example).")},l(e){t=w(e,"It is not super nice though to have to have a separate .js file with the store for our Map components since they are so tightly coupled. Importing the store from a separate file makes it seem like it's a separate thing (something that's supposed to be used everywhere within the app for example).")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function tn(l){let t;return{c(){t=g("Is there a way to improve this? Let's see!")},l(e){t=w(e,"Is there a way to improve this? Let's see!")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function en(l){let t="<",e,n;return{c(){e=g(t),n=g('script context="module"/>')},l(s){e=w(s,t),n=w(s,'script context="module"/>')},m(s,r){c(s,e,r),c(s,n,r)},p:j,d(s){s&&(f(e),f(n))}}}function nn(l){let t;return{c(){t=g("module level script tag")},l(e){t=w(e,"module level script tag")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function rn(l){let t;return{c(){t=g("export the store from Map2")},l(e){t=w(e,"export the store from Map2")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function on(l){let t;return{c(){t=g('import Map, { mapValue } from "./Map2.svelte";')},l(e){t=w(e,'import Map, { mapValue } from "./Map2.svelte";')},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function sn(l){let t,e,n,s,r,p,a,i,u,h;return e=new z({props:{$$slots:{default:[en]},$$scope:{ctx:l}}}),s=new z({props:{$$slots:{default:[nn]},$$scope:{ctx:l}}}),p=new z({props:{$$slots:{default:[rn]},$$scope:{ctx:l}}}),i=new se({props:{$$slots:{default:[on]},$$scope:{ctx:l}}}),{c(){t=g("Here is the version using "),C(e.$$.fragment),n=g(". It allows us to have a "),C(s.$$.fragment),r=g(" inside our Svelte component. All of our instances will have the same data in that script tag so we can put the functions and store we had in the .js files in there instead and it will still work. We can even "),C(p.$$.fragment),a=g(" and import it in App2 with this line: "),C(i.$$.fragment),u=g(".")},l(m){t=w(m,"Here is the version using "),M(e.$$.fragment,m),n=w(m,". It allows us to have a "),M(s.$$.fragment,m),r=w(m," inside our Svelte component. All of our instances will have the same data in that script tag so we can put the functions and store we had in the .js files in there instead and it will still work. We can even "),M(p.$$.fragment,m),a=w(m," and import it in App2 with this line: "),M(i.$$.fragment,m),u=w(m,".")},m(m,$){c(m,t,$),k(e,m,$),c(m,n,$),k(s,m,$),c(m,r,$),k(p,m,$),c(m,a,$),k(i,m,$),c(m,u,$),h=!0},p(m,$){const R={};$&2&&(R.$$scope={dirty:$,ctx:m}),e.$set(R);const b={};$&2&&(b.$$scope={dirty:$,ctx:m}),s.$set(b);const A={};$&2&&(A.$$scope={dirty:$,ctx:m}),p.$set(A);const D={};$&2&&(D.$$scope={dirty:$,ctx:m}),i.$set(D)},i(m){h||(d(e.$$.fragment,m),d(s.$$.fragment,m),d(p.$$.fragment,m),d(i.$$.fragment,m),h=!0)},o(m){v(e.$$.fragment,m),v(s.$$.fragment,m),v(p.$$.fragment,m),v(i.$$.fragment,m),h=!1},d(m){m&&(f(t),f(n),f(r),f(a),f(u)),x(e,m),x(s,m),x(p,m),x(i,m)}}}function an(l){let t;return{c(){t=g("default export")},l(e){t=w(e,"default export")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function ln(l){let t;return{c(){t=g("component itself is the default export")},l(e){t=w(e,"component itself is the default export")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function pn(l){let t,e,n,s,r,p;return e=new z({props:{$$slots:{default:[an]},$$scope:{ctx:l}}}),s=new z({props:{$$slots:{default:[ln]},$$scope:{ctx:l}}}),{c(){t=g("The one thing we can't do is have a "),C(e.$$.fragment),n=g(" since in Svelte the "),C(s.$$.fragment),r=g(".")},l(a){t=w(a,"The one thing we can't do is have a "),M(e.$$.fragment,a),n=w(a," since in Svelte the "),M(s.$$.fragment,a),r=w(a,".")},m(a,i){c(a,t,i),k(e,a,i),c(a,n,i),k(s,a,i),c(a,r,i),p=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),e.$set(u);const h={};i&2&&(h.$$scope={dirty:i,ctx:a}),s.$set(h)},i(a){p||(d(e.$$.fragment,a),d(s.$$.fragment,a),p=!0)},o(a){v(e.$$.fragment,a),v(s.$$.fragment,a),p=!1},d(a){a&&(f(t),f(n),f(r)),x(e,a),x(s,a)}}}function un(l){let t;return{c(){t=g("are not state")},l(e){t=w(e,"are not state")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function mn(l){let t,e,n,s;return e=new z({props:{$$slots:{default:[un]},$$scope:{ctx:l}}}),{c(){t=g("Another thing to keep in mind is that the module level variables "),C(e.$$.fragment),n=g(" and we can not change them from within our markup like we normally can in our instance level script tag.")},l(r){t=w(r,"Another thing to keep in mind is that the module level variables "),M(e.$$.fragment,r),n=w(r," and we can not change them from within our markup like we normally can in our instance level script tag.")},m(r,p){c(r,t,p),k(e,r,p),c(r,n,p),s=!0},p(r,p){const a={};p&2&&(a.$$scope={dirty:p,ctx:r}),e.$set(a)},i(r){s||(d(e.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),s=!1},d(r){r&&(f(t),f(n)),x(e,r)}}}function fn(l){let t;return{c(){t=g("use a store")},l(e){t=w(e,"use a store")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function $n(l){let t,e,n,s;return e=new z({props:{$$slots:{default:[fn]},$$scope:{ctx:l}}}),{c(){t=g("To fix this we can again "),C(e.$$.fragment),n=g(" which will give us a reactive variable (assuming we interact with it as a store).")},l(r){t=w(r,"To fix this we can again "),M(e.$$.fragment,r),n=w(r," which will give us a reactive variable (assuming we interact with it as a store).")},m(r,p){c(r,t,p),k(e,r,p),c(r,n,p),s=!0},p(r,p){const a={};p&2&&(a.$$scope={dirty:p,ctx:r}),e.$set(a)},i(r){s||(d(e.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),s=!1},d(r){r&&(f(t),f(n)),x(e,r)}}}function cn(l){let t;return{c(){t=g("We can even do something fun like this:")},l(e){t=w(e,"We can even do something fun like this:")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function _n(l){let t;return{c(){t=g("Probably a bit overkill but at least it's possible!")},l(e){t=w(e,"Probably a bit overkill but at least it's possible!")},m(e,n){c(e,t,n)},d(e){e&&f(t)}}}function hn(l){let t,e,n,s,r,p,a,i,u,h,m,$,R,b,A,D,S,lt,H,pt,L,it,q,ut,G,mt,J,ft,F,$t,K,ct,Q,_t,X,ht,Y,gt,Z,wt;return t=new nt({props:{name:[{name:"App",comp:vt,raw:de,text:""},{name:"Map",comp:vt,raw:ve,text:""},{name:"mapData.js",comp:vt,raw:be,text:""},{name:"mapStore.js",comp:vt,raw:Ce,text:""}]}}),n=new dt({}),r=new N({props:{$$slots:{default:[Xe]},$$scope:{ctx:l}}}),a=new N({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),u=new N({props:{$$slots:{default:[Qe]},$$scope:{ctx:l}}}),m=new N({props:{$$slots:{default:[Ye]},$$scope:{ctx:l}}}),R=new N({props:{$$slots:{default:[tn]},$$scope:{ctx:l}}}),A=new nt({props:{name:[{name:"App2",comp:Zt,raw:Ae,text:"We can import our store from the Map2 component as a named export."},{name:"Map2",comp:Zt,raw:Se,text:"We removed the function since we can update the variable from within each instance."}]}}),S=new dt({}),H=new N({props:{$$slots:{default:[sn]},$$scope:{ctx:l}}}),L=new N({props:{$$slots:{default:[pn]},$$scope:{ctx:l}}}),q=new N({props:{$$slots:{default:[mn]},$$scope:{ctx:l}}}),G=new nt({props:{name:[{name:"App3",comp:De,raw:We,text:""}]}}),J=new dt({}),F=new N({props:{$$slots:{default:[$n]},$$scope:{ctx:l}}}),K=new nt({props:{name:[{name:"App4",comp:Jt,raw:Be,text:"Each component shows the same value because now it is a module level state."},{name:"CountComponent",comp:Jt,raw:Ue,text:""}]}}),Q=new dt({}),X=new N({props:{$$slots:{default:[cn]},$$scope:{ctx:l}}}),Y=new nt({props:{name:[{name:"App5",comp:te,raw:qe,text:""},{name:"CountComponent2",comp:te,raw:Fe,text:""}]}}),Z=new N({props:{$$slots:{default:[_n]},$$scope:{ctx:l}}}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment),s=T(),C(r.$$.fragment),p=T(),C(a.$$.fragment),i=T(),C(u.$$.fragment),h=T(),C(m.$$.fragment),$=T(),C(R.$$.fragment),b=T(),C(A.$$.fragment),D=T(),C(S.$$.fragment),lt=T(),C(H.$$.fragment),pt=T(),C(L.$$.fragment),it=T(),C(q.$$.fragment),ut=T(),C(G.$$.fragment),mt=T(),C(J.$$.fragment),ft=T(),C(F.$$.fragment),$t=T(),C(K.$$.fragment),ct=T(),C(Q.$$.fragment),_t=T(),C(X.$$.fragment),ht=T(),C(Y.$$.fragment),gt=T(),C(Z.$$.fragment)},l(o){M(t.$$.fragment,o),e=y(o),M(n.$$.fragment,o),s=y(o),M(r.$$.fragment,o),p=y(o),M(a.$$.fragment,o),i=y(o),M(u.$$.fragment,o),h=y(o),M(m.$$.fragment,o),$=y(o),M(R.$$.fragment,o),b=y(o),M(A.$$.fragment,o),D=y(o),M(S.$$.fragment,o),lt=y(o),M(H.$$.fragment,o),pt=y(o),M(L.$$.fragment,o),it=y(o),M(q.$$.fragment,o),ut=y(o),M(G.$$.fragment,o),mt=y(o),M(J.$$.fragment,o),ft=y(o),M(F.$$.fragment,o),$t=y(o),M(K.$$.fragment,o),ct=y(o),M(Q.$$.fragment,o),_t=y(o),M(X.$$.fragment,o),ht=y(o),M(Y.$$.fragment,o),gt=y(o),M(Z.$$.fragment,o)},m(o,_){k(t,o,_),c(o,e,_),k(n,o,_),c(o,s,_),k(r,o,_),c(o,p,_),k(a,o,_),c(o,i,_),k(u,o,_),c(o,h,_),k(m,o,_),c(o,$,_),k(R,o,_),c(o,b,_),k(A,o,_),c(o,D,_),k(S,o,_),c(o,lt,_),k(H,o,_),c(o,pt,_),k(L,o,_),c(o,it,_),k(q,o,_),c(o,ut,_),k(G,o,_),c(o,mt,_),k(J,o,_),c(o,ft,_),k(F,o,_),c(o,$t,_),k(K,o,_),c(o,ct,_),k(Q,o,_),c(o,_t,_),k(X,o,_),c(o,ht,_),k(Y,o,_),c(o,gt,_),k(Z,o,_),wt=!0},p(o,_){const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),r.$set(It);const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:o}),a.$set(Dt);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:o}),u.$set(Wt);const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:o}),m.$set(Rt);const jt={};_&2&&(jt.$$scope={dirty:_,ctx:o}),R.$set(jt);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),H.$set(Nt);const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:o}),L.$set(Bt);const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:o}),q.$set(Ut);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:o}),F.$set(Ot);const Pt={};_&2&&(Pt.$$scope={dirty:_,ctx:o}),X.$set(Pt);const zt={};_&2&&(zt.$$scope={dirty:_,ctx:o}),Z.$set(zt)},i(o){wt||(d(t.$$.fragment,o),d(n.$$.fragment,o),d(r.$$.fragment,o),d(a.$$.fragment,o),d(u.$$.fragment,o),d(m.$$.fragment,o),d(R.$$.fragment,o),d(A.$$.fragment,o),d(S.$$.fragment,o),d(H.$$.fragment,o),d(L.$$.fragment,o),d(q.$$.fragment,o),d(G.$$.fragment,o),d(J.$$.fragment,o),d(F.$$.fragment,o),d(K.$$.fragment,o),d(Q.$$.fragment,o),d(X.$$.fragment,o),d(Y.$$.fragment,o),d(Z.$$.fragment,o),wt=!0)},o(o){v(t.$$.fragment,o),v(n.$$.fragment,o),v(r.$$.fragment,o),v(a.$$.fragment,o),v(u.$$.fragment,o),v(m.$$.fragment,o),v(R.$$.fragment,o),v(A.$$.fragment,o),v(S.$$.fragment,o),v(H.$$.fragment,o),v(L.$$.fragment,o),v(q.$$.fragment,o),v(G.$$.fragment,o),v(J.$$.fragment,o),v(F.$$.fragment,o),v(K.$$.fragment,o),v(Q.$$.fragment,o),v(X.$$.fragment,o),v(Y.$$.fragment,o),v(Z.$$.fragment,o),wt=!1},d(o){o&&(f(e),f(s),f(p),f(i),f(h),f($),f(b),f(D),f(lt),f(pt),f(it),f(ut),f(mt),f(ft),f($t),f(ct),f(_t),f(ht),f(gt)),x(t,o),x(n,o),x(r,o),x(a,o),x(u,o),x(m,o),x(R,o),x(A,o),x(S,o),x(H,o),x(L,o),x(q,o),x(G,o),x(J,o),x(F,o),x(K,o),x(Q,o),x(X,o),x(Y,o),x(Z,o)}}}function gn(l){let t,e;const n=[l[0],ee];let s={$$slots:{default:[hn]},$$scope:{ctx:l}};for(let r=0;r<n.length;r+=1)s=yt(s,n[r]);return t=new $e({props:s}),{c(){C(t.$$.fragment)},l(r){M(t.$$.fragment,r)},m(r,p){k(t,r,p),e=!0},p(r,[p]){const a=p&1?fe(n,[p&1&&Lt(r[0]),p&0&&Lt(ee)]):{};p&2&&(a.$$scope={dirty:p,ctx:r}),t.$set(a)},i(r){e||(d(t.$$.fragment,r),e=!0)},o(r){v(t.$$.fragment,r),e=!1},d(r){x(t,r)}}}const ee={title:'<script context="module"/>',author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-06-22T00:00:00.000Z",layout:"notes"};function wn(l,t,e){return Error.stackTraceLimit=0,l.$$set=n=>{e(0,t=yt(yt({},t),Ht(n)))},t=Ht(t),[t]}class Vn extends O{constructor(t){super(),P(this,t,wn,gn,U,{})}}export{Vn as default,ee as metadata};
