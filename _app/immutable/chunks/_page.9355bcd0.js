import{s as B,f as S,a as L,e as V,g as D,h as j,d as m,c as A,j as W,i as f,ae as le,X as se,H as ae,l as b,m as h,n as H,z as C,r as ie,w as ce,x as pe,y as me,u as be,p as he,a9 as we,C as F,D as J}from"./scheduler.a7cd560e.js";import{S as R,i as T,a as $,g as fe,t as d,c as ue,b as w,d as v,m as k,e as y,h as ve}from"./index.396264e7.js";import{g as ke,a as K}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as ye,P}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Q}from"./ShowMany.db7be1f3.js";import{_ as _e}from"./preload-helper.41c905a7.js";import{h as N,u as $e}from"./await_block.4c3fba22.js";import{S as de}from"./Strong.097578ae.js";import{C as Ce}from"./Code.64283003.js";let O;function Le(){O||(O=new IntersectionObserver(s=>{s.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function ge(s){return Le(),O.observe(s),{destroy(){O.unobserve(s)}}}function U(s){s[4]=s[5].default}function Y(s){let e,t,o,r={ctx:s,current:null,token:null,hasCatch:!0,pending:Ve,then:ze,catch:Ae,value:5,error:6,blocks:[,,,]};return N(t=s[0],r),{c(){e=V(),r.block.c()},l(n){e=V(),r.block.l(n)},m(n,l){f(n,e,l),r.block.m(n,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(n,l){s=n,r.ctx=s,l&1&&t!==(t=s[0])&&N(t,r)||$e(r,s,l)},i(n){o||($(r.block),o=!0)},o(n){for(let l=0;l<3;l+=1){const i=r.blocks[l];d(i)}o=!1},d(n){n&&m(e),r.block.d(n),r.token=null,r=null}}}function Ae(s){let e=s[6]+"",t;return{c(){t=b(e)},l(o){t=h(o,e)},m(o,r){f(o,t,r)},p(o,r){r&1&&e!==(e=o[6]+"")&&H(t,e)},i:C,o:C,d(o){o&&m(t)}}}function ze(s){U(s);let e,t;return e=new s[4]({props:{foo:"123",bar:456}}),e.$on("click",s[3]),{c(){w(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){k(e,o,r),t=!0},p(o,r){U(o)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){y(e,o)}}}function Ve(s){let e;return{c(){e=b("Loading...")},l(t){e=h(t,"Loading...")},m(t,o){f(t,e,o)},p:C,i:C,o:C,d(t){t&&m(e)}}}function Pe(s){let e,t,o,r,n,l,i,u,c=s[0]&&Y(s);return{c(){e=S("div"),t=L(),o=S("div"),r=L(),c&&c.c(),n=V(),this.h()},l(p){e=D(p,"DIV",{class:!0}),j(e).forEach(m),t=A(p),o=D(p,"DIV",{}),j(o).forEach(m),r=A(p),c&&c.l(p),n=V(),this.h()},h(){W(e,"class","spu-hkur2x")},m(p,g){f(p,e,g),f(p,t,g),f(p,o,g),f(p,r,g),c&&c.m(p,g),f(p,n,g),l=!0,i||(u=[le(ge.call(null,o)),se(o,"enterViewport",s[2])],i=!0)},p(p,[g]){p[0]?c?(c.p(p,g),g&1&&$(c,1)):(c=Y(p),c.c(),$(c,1),c.m(n.parentNode,n)):c&&(fe(),d(c,1,1,()=>{c=null}),ue())},i(p){l||($(c),l=!0)},o(p){d(c),l=!1},d(p){p&&(m(e),m(t),m(o),m(r),m(n)),c&&c.d(p),i=!1,ae(u)}}}function Ie(s,e,t){let o,r=!1;return[o,r,()=>{r||t(0,o=_e(()=>import("./Component.f326437d.js"),["./Component.f326437d.js","./scheduler.a7cd560e.js","./index.396264e7.js"],import.meta.url)),t(1,r=!0)},()=>console.log("From App.svelte!")]}class x extends R{constructor(e){super(),T(this,e,Ie,Pe,B,{})}}const Ee=`<script>\r
	import viewport from "./useViewportAction";\r
	// When using import here, the component will be loaded at the same time as App.svelte which is not what we want.\r
	// import Component from "./Component.svelte";\r
\r
	// This will return a promise that will be resolved when this file is fetched and ready to use\r
	let componentPromise;\r
	let isLoaded = false;\r
<\/script>\r
\r
<div class="h-screen bg-blue-500" />\r
\r
<div\r
	use:viewport\r
	on:enterViewport={() => {\r
		if (!isLoaded) {\r
			componentPromise = import("./Component.svelte");\r
		}\r
		isLoaded = true;\r
	}} />\r
\r
{#if componentPromise}\r
	{#await componentPromise}\r
		Loading...\r
	{:then { default: Component }}\r
		<Component foo="123" bar={456} on:click={() => console.log("From App.svelte!")} />\r
	{:catch error}\r
		{error}\r
	{/await}\r
{/if}\r
\r
\r
<style>\r
</style>\r
`,Se=`<script>\r
	export let foo;\r
	export let bar;\r
\r
	console.log("lazy component initialized!");\r
<\/script>\r
\r
Foo: {foo}\r
Bar: {bar}\r
\r
<input type="text" bind:value={bar} />\r
\r
<button on:click>A button to click</button>\r
\r
<style>\r
</style>\r
`;function ee(s){s[7]=s[8].default}const De=s=>({Component:s&2}),te=s=>({Component:s[7]}),Ne=s=>({}),ne=s=>({});function Oe(s){let e,t,o,r={ctx:s,current:null,token:null,hasCatch:!0,pending:je,then:Te,catch:Re,value:8,error:9,blocks:[,,,]};return N(t=s[1],r),{c(){e=V(),r.block.c()},l(n){e=V(),r.block.l(n)},m(n,l){f(n,e,l),r.block.m(n,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(n,l){s=n,r.ctx=s,l&2&&t!==(t=s[1])&&N(t,r)||$e(r,s,l)},i(n){o||($(r.block),o=!0)},o(n){for(let l=0;l<3;l+=1){const i=r.blocks[l];d(i)}o=!1},d(n){n&&m(e),r.block.d(n),r.token=null,r=null}}}function Be(s){let e,t,o;return{c(){e=S("div")},l(r){e=D(r,"DIV",{}),j(e).forEach(m)},m(r,n){f(r,e,n),t||(o=[le(ge.call(null,e)),se(e,"enterViewport",s[6])],t=!0)},p:C,i:C,o:C,d(r){r&&m(e),t=!1,ae(o)}}}function Re(s){let e=s[9]+"",t;return{c(){t=b(e)},l(o){t=h(o,e)},m(o,r){f(o,t,r)},p(o,r){r&2&&e!==(e=o[9]+"")&&H(t,e)},i:C,o:C,d(o){o&&m(t)}}}function Te(s){ee(s);let e;const t=s[5].component,o=ie(t,s,s[4],te);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,n){o&&o.m(r,n),e=!0},p(r,n){ee(r),o&&o.p&&(!e||n&18)&&ce(o,t,r,r[4],e?me(t,r[4],n,De):pe(r[4]),te)},i(r){e||($(o,r),e=!0)},o(r){d(o,r),e=!1},d(r){o&&o.d(r)}}}function je(s){let e;const t=s[5].loading,o=ie(t,s,s[4],ne),r=o||We();return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,l){r&&r.m(n,l),e=!0},p(n,l){o&&o.p&&(!e||l&16)&&ce(o,t,n,n[4],e?me(t,n[4],l,Ne):pe(n[4]),ne)},i(n){e||($(r,n),e=!0)},o(n){d(r,n),e=!1},d(n){r&&r.d(n)}}}function We(s){let e;return{c(){e=b("Loading...")},l(t){e=h(t,"Loading...")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function Fe(s){let e,t,o,r;const n=[Be,Oe],l=[];function i(u,c){return u[2]?1:0}return e=i(s),t=l[e]=n[e](s),{c(){t.c(),o=V()},l(u){t.l(u),o=V()},m(u,c){l[e].m(u,c),f(u,o,c),r=!0},p(u,[c]){let p=e;e=i(u),e===p?l[e].p(u,c):(fe(),d(l[p],1,1,()=>{l[p]=null}),ue(),t=l[e],t?t.p(u,c):(t=l[e]=n[e](u),t.c()),$(t,1),t.m(o.parentNode,o))},i(u){r||($(t),r=!0)},o(u){d(t),r=!1},d(u){u&&m(o),l[e].d(u)}}}function He(s,e,t){let{$$slots:o={},$$scope:r}=e,{this:n}=e,l,i=!1,{bar:u="567"}=e;const c=()=>{t(1,l=n()),t(2,i=!0)};return s.$$set=p=>{"this"in p&&t(0,n=p.this),"bar"in p&&t(3,u=p.bar),"$$scope"in p&&t(4,r=p.$$scope)},[n,l,i,u,r,o,c]}class Me extends R{constructor(e){super(),T(this,e,He,Fe,B,{this:0,bar:3})}}function qe(s){let e,t="Loading...";return{c(){e=S("div"),e.textContent=t,this.h()},l(o){e=D(o,"DIV",{class:!0,slot:!0,["data-svelte-h"]:!0}),be(e)!=="svelte-xrrsur"&&(e.textContent=t),this.h()},h(){W(e,"class","spu-0kxbjc"),W(e,"slot","loading")},m(o,r){f(o,e,r)},p:C,d(o){o&&m(e)}}}function Xe(s){let e,t,o;function r(l){s[1](l)}let n={foo:"123"};return s[0]!==void 0&&(n.bar=s[0]),e=new s[3]({props:n}),he.push(()=>ve(e,"bar",r)),e.$on("click",s[2]),{c(){w(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,i){k(e,l,i),o=!0},p(l,i){const u={};!t&&i&1&&(t=!0,u.bar=l[0],we(()=>t=!1)),e.$set(u)},i(l){o||($(e.$$.fragment,l),o=!0)},o(l){d(e.$$.fragment,l),o=!1},d(l){y(e,l)}}}function Ze(s){let e,t,o,r,n;return r=new Me({props:{this:Ge,$$slots:{component:[Xe,({Component:l})=>({3:l}),({Component:l})=>l?8:0],loading:[qe]},$$scope:{ctx:s}}}),{c(){e=b("Bar in App2: "),t=b(s[0]),o=L(),w(r.$$.fragment)},l(l){e=h(l,"Bar in App2: "),t=h(l,s[0]),o=A(l),v(r.$$.fragment,l)},m(l,i){f(l,e,i),f(l,t,i),f(l,o,i),k(r,l,i),n=!0},p(l,[i]){(!n||i&1)&&H(t,l[0]);const u={};i&17&&(u.$$scope={dirty:i,ctx:l}),r.$set(u)},i(l){n||($(r.$$.fragment,l),n=!0)},o(l){d(r.$$.fragment,l),n=!1},d(l){l&&(m(e),m(t),m(o)),y(r,l)}}}const Ge=()=>_e(()=>import("./Component.f326437d.js"),["./Component.f326437d.js","./scheduler.a7cd560e.js","./index.396264e7.js"],import.meta.url);function Je(s,e,t){let o="789";function r(l){o=l,t(0,o)}return[o,r,()=>console.log("I am an event in App2.svelte!")]}class oe extends R{constructor(e){super(),T(this,e,Je,Ze,B,{})}}const Ke=`<script>\r
	import Lazy from "./Lazy.svelte";\r
	let bar = "789";\r
<\/script>\r
\r
Bar in App2: {bar}\r
\r
<Lazy this={() => import("./Component.svelte")}>\r
	<div class="text-blue-500" slot="loading">Loading...</div>\r
	<!-- we use a slot to be able to use bind, events like if it was a normal component -->\r
	<svelte:fragment slot="component" let:Component>\r
		<Component foo="123" bind:bar on:click={() => console.log("I am an event in App2.svelte!")} />\r
	</svelte:fragment>\r
</Lazy>\r
\r
<style>\r
</style>\r
`,Qe=`<script>\r
	import viewport from "./useViewportAction";\r
	export { loadComponent as this };\r
\r
	let loadComponent;\r
	let componentPromise;\r
	let isShowingComponent = false;\r
	export let bar = "567";\r
<\/script>\r
\r
{#if !isShowingComponent}\r
	<div\r
		use:viewport\r
		on:enterViewport={() => {\r
			componentPromise = loadComponent();\r
			isShowingComponent = true;\r
		}} />\r
{:else}\r
	{#await componentPromise}\r
		<slot name="loading">Loading...</slot>\r
	{:then { default: Component }}\r
		<!-- since we use let:Component  in App2.svelte we need to have our component as a prop here -->\r
		<!-- this allows us to use things like bind and events in App2.svelte without having to forward them from Lazy.svelte -->\r
		<slot name="component" {Component} />\r
	{:catch error}\r
		{error}\r
	{/await}\r
{/if}\r
\r
<style>\r
</style>\r
`;function Ue(s){let e;return{c(){e=b("Here we're making a lazy component that will only load when it is in view. We'll reuse our viewport action that we used a few times before.")},l(t){e=h(t,"Here we're making a lazy component that will only load when it is in view. We'll reuse our viewport action that we used a few times before.")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function Ye(s){let e;return{c(){e=b("promise")},l(t){e=h(t,"promise")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function xe(s){let e,t,o,r;return t=new de({props:{$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){e=b("By not using import at the top and instead setting a variable to a "),w(t.$$.fragment),o=b(" we can load it dynamically when our div with the viewport action comes into view.")},l(n){e=h(n,"By not using import at the top and instead setting a variable to a "),v(t.$$.fragment,n),o=h(n," we can load it dynamically when our div with the viewport action comes into view.")},m(n,l){f(n,e,l),k(t,n,l),f(n,o,l),r=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&(m(e),m(o)),y(t,n)}}}function et(s){let e;return{c(){e=b("isLoaded")},l(t){e=h(t,"isLoaded")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function tt(s){let e,t,o,r;return t=new Ce({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){e=b("This works fine but is a bit annoying because we have to have a lot of code just to load the component when we want to, like having "),w(t.$$.fragment),o=b(", if statements around our dynamic component and so on.")},l(n){e=h(n,"This works fine but is a bit annoying because we have to have a lot of code just to load the component when we want to, like having "),v(t.$$.fragment,n),o=h(n,", if statements around our dynamic component and so on.")},m(n,l){f(n,e,l),k(t,n,l),f(n,o,l),r=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&(m(e),m(o)),y(t,n)}}}function nt(s){let e;return{c(){e=b("component for loading a dynamic component")},l(t){e=h(t,"component for loading a dynamic component")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function ot(s){let e,t,o,r;return t=new de({props:{$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){e=b("We can make this better by creating a "),w(t.$$.fragment),o=b(".")},l(n){e=h(n,"We can make this better by creating a "),v(t.$$.fragment,n),o=h(n,".")},m(n,l){f(n,e,l),k(t,n,l),f(n,o,l),r=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&(m(e),m(o)),y(t,n)}}}function rt(s){let e;return{c(){e=b("Our dynamically loaded Lazy component is finished and can use bindings and events like if it was a normal component imported statically. Nice!")},l(t){e=h(t,"Our dynamically loaded Lazy component is finished and can use bindings and events like if it was a normal component imported statically. Nice!")},m(t,o){f(t,e,o)},d(t){t&&m(e)}}}function lt(s){let e,t,o,r,n,l,i,u,c,p,g,I,z,E;return e=new P({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),o=new P({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),n=new Q({props:{name:[{name:"App",comp:x,raw:Ee,text:""},{name:"Component",comp:x,raw:Se,text:""}]}}),i=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),c=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:s}}}),g=new Q({props:{name:[{name:"App2",comp:oe,raw:Ke,text:""},{name:"Lazy",comp:oe,raw:Qe,text:""}]}}),z=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment),t=L(),w(o.$$.fragment),r=L(),w(n.$$.fragment),l=L(),w(i.$$.fragment),u=L(),w(c.$$.fragment),p=L(),w(g.$$.fragment),I=L(),w(z.$$.fragment)},l(a){v(e.$$.fragment,a),t=A(a),v(o.$$.fragment,a),r=A(a),v(n.$$.fragment,a),l=A(a),v(i.$$.fragment,a),u=A(a),v(c.$$.fragment,a),p=A(a),v(g.$$.fragment,a),I=A(a),v(z.$$.fragment,a)},m(a,_){k(e,a,_),f(a,t,_),k(o,a,_),f(a,r,_),k(n,a,_),f(a,l,_),k(i,a,_),f(a,u,_),k(c,a,_),f(a,p,_),k(g,a,_),f(a,I,_),k(z,a,_),E=!0},p(a,_){const M={};_&2&&(M.$$scope={dirty:_,ctx:a}),e.$set(M);const q={};_&2&&(q.$$scope={dirty:_,ctx:a}),o.$set(q);const X={};_&2&&(X.$$scope={dirty:_,ctx:a}),i.$set(X);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:a}),c.$set(Z);const G={};_&2&&(G.$$scope={dirty:_,ctx:a}),z.$set(G)},i(a){E||($(e.$$.fragment,a),$(o.$$.fragment,a),$(n.$$.fragment,a),$(i.$$.fragment,a),$(c.$$.fragment,a),$(g.$$.fragment,a),$(z.$$.fragment,a),E=!0)},o(a){d(e.$$.fragment,a),d(o.$$.fragment,a),d(n.$$.fragment,a),d(i.$$.fragment,a),d(c.$$.fragment,a),d(g.$$.fragment,a),d(z.$$.fragment,a),E=!1},d(a){a&&(m(t),m(r),m(l),m(u),m(p),m(I)),y(e,a),y(o,a),y(n,a),y(i,a),y(c,a),y(g,a),y(z,a)}}}function st(s){let e,t;const o=[s[0],re];let r={$$slots:{default:[lt]},$$scope:{ctx:s}};for(let n=0;n<o.length;n+=1)r=F(r,o[n]);return e=new ye({props:r}),{c(){w(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,l){k(e,n,l),t=!0},p(n,[l]){const i=l&1?ke(o,[l&1&&K(n[0]),l&0&&K(re)]):{};l&2&&(i.$$scope={dirty:l,ctx:n}),e.$set(i)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}const re={title:"Lazy component",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-25T00:00:00.000Z",layout:"notes"};function at(s,e,t){return s.$$set=o=>{t(0,e=F(F({},e),J(o)))},e=J(e),[e]}class gt extends R{constructor(e){super(),T(this,e,at,st,B,{})}}export{gt as default,re as metadata};
