import{S as R,i as T,s as j,k as E,a as L,e as V,l as I,m as S,h as f,c as A,n as W,b as m,ac as le,R as se,g as $,v as ae,d,f as ie,V as ce,O as B,P as fe,q as b,r as w,u as M,H as C,y as h,z as v,A as k,B as y,C as pe,E as me,F as ue,G as _e,D as $e,w as ge,a5 as he,a6 as ve,J as F,K as ke,L as Z,M as Q}from"./index.5815ca79.js";import{M as ye,P}from"./mdsvex-layout-notes.7536afaf.js";import{S as U}from"./ShowMany.2af9ac15.js";import{_ as de}from"./preload-helper.41c905a7.js";import{S as be}from"./Strong.b8abec16.js";let N;function Ce(){N||(N=new IntersectionObserver(s=>{s.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function we(s){return Ce(),N.observe(s),{destroy(){N.unobserve(s)}}}function X(s){s[4]=s[5].default}function Y(s){let e,t,o,r={ctx:s,current:null,token:null,hasCatch:!0,pending:ze,then:Ae,catch:Le,value:5,error:6,blocks:[,,,]};return B(t=s[0],r),{c(){e=V(),r.block.c()},l(n){e=V(),r.block.l(n)},m(n,l){m(n,e,l),r.block.m(n,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(n,l){s=n,r.ctx=s,l&1&&t!==(t=s[0])&&B(t,r)||fe(r,s,l)},i(n){o||($(r.block),o=!0)},o(n){for(let l=0;l<3;l+=1){const i=r.blocks[l];d(i)}o=!1},d(n){n&&f(e),r.block.d(n),r.token=null,r=null}}}function Le(s){let e=s[6]+"",t;return{c(){t=b(e)},l(o){t=w(o,e)},m(o,r){m(o,t,r)},p(o,r){r&1&&e!==(e=o[6]+"")&&M(t,e)},i:C,o:C,d(o){o&&f(t)}}}function Ae(s){X(s);let e,t;return e=new s[4]({props:{foo:"123",bar:456}}),e.$on("click",s[3]),{c(){h(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){k(e,o,r),t=!0},p(o,r){X(o)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){y(e,o)}}}function ze(s){let e;return{c(){e=b("Loading...")},l(t){e=w(t,"Loading...")},m(t,o){m(t,e,o)},p:C,i:C,o:C,d(t){t&&f(e)}}}function Ve(s){let e,t,o,r,n,l,i,u,p=s[0]&&Y(s);return{c(){e=E("div"),t=L(),o=E("div"),r=L(),p&&p.c(),n=V(),this.h()},l(c){e=I(c,"DIV",{class:!0}),S(e).forEach(f),t=A(c),o=I(c,"DIV",{}),S(o).forEach(f),r=A(c),p&&p.l(c),n=V(),this.h()},h(){W(e,"class","uno-lfjsr9")},m(c,g){m(c,e,g),m(c,t,g),m(c,o,g),m(c,r,g),p&&p.m(c,g),m(c,n,g),l=!0,i||(u=[le(we.call(null,o)),se(o,"enterViewport",s[2])],i=!0)},p(c,[g]){c[0]?p?(p.p(c,g),g&1&&$(p,1)):(p=Y(c),p.c(),$(p,1),p.m(n.parentNode,n)):p&&(ae(),d(p,1,1,()=>{p=null}),ie())},i(c){l||($(p),l=!0)},o(c){d(p),l=!1},d(c){c&&f(e),c&&f(t),c&&f(o),c&&f(r),p&&p.d(c),c&&f(n),i=!1,ce(u)}}}function Pe(s,e,t){let o,r=!1;return[o,r,()=>{r||t(0,o=de(()=>import("./Component.8445de94.js"),["./Component.8445de94.js","./index.5815ca79.js"],import.meta.url)),t(1,r=!0)},()=>console.log("From App.svelte!")]}class x extends R{constructor(e){super(),T(this,e,Pe,Ve,j,{})}}const Ee=`<script>\r
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
`,Ie=`<script>\r
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
`;function ee(s){s[7]=s[8].default}const Se=s=>({Component:s&2}),te=s=>({Component:s[7]}),Oe=s=>({}),ne=s=>({});function De(s){let e,t,o,r={ctx:s,current:null,token:null,hasCatch:!0,pending:Te,then:Re,catch:Ne,value:8,error:9,blocks:[,,,]};return B(t=s[1],r),{c(){e=V(),r.block.c()},l(n){e=V(),r.block.l(n)},m(n,l){m(n,e,l),r.block.m(n,r.anchor=l),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(n,l){s=n,r.ctx=s,l&2&&t!==(t=s[1])&&B(t,r)||fe(r,s,l)},i(n){o||($(r.block),o=!0)},o(n){for(let l=0;l<3;l+=1){const i=r.blocks[l];d(i)}o=!1},d(n){n&&f(e),r.block.d(n),r.token=null,r=null}}}function Be(s){let e,t,o;return{c(){e=E("div")},l(r){e=I(r,"DIV",{}),S(e).forEach(f)},m(r,n){m(r,e,n),t||(o=[le(we.call(null,e)),se(e,"enterViewport",s[6])],t=!0)},p:C,i:C,o:C,d(r){r&&f(e),t=!1,ce(o)}}}function Ne(s){let e=s[9]+"",t;return{c(){t=b(e)},l(o){t=w(o,e)},m(o,r){m(o,t,r)},p(o,r){r&2&&e!==(e=o[9]+"")&&M(t,e)},i:C,o:C,d(o){o&&f(t)}}}function Re(s){ee(s);let e;const t=s[5].component,o=pe(t,s,s[4],te);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,n){o&&o.m(r,n),e=!0},p(r,n){ee(r),o&&o.p&&(!e||n&18)&&me(o,t,r,r[4],e?_e(t,r[4],n,Se):ue(r[4]),te)},i(r){e||($(o,r),e=!0)},o(r){d(o,r),e=!1},d(r){o&&o.d(r)}}}function Te(s){let e;const t=s[5].loading,o=pe(t,s,s[4],ne),r=o||je();return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,l){r&&r.m(n,l),e=!0},p(n,l){o&&o.p&&(!e||l&16)&&me(o,t,n,n[4],e?_e(t,n[4],l,Oe):ue(n[4]),ne)},i(n){e||($(r,n),e=!0)},o(n){d(r,n),e=!1},d(n){r&&r.d(n)}}}function je(s){let e;return{c(){e=b("Loading...")},l(t){e=w(t,"Loading...")},m(t,o){m(t,e,o)},d(t){t&&f(e)}}}function We(s){let e,t,o,r;const n=[Be,De],l=[];function i(u,p){return u[2]?1:0}return e=i(s),t=l[e]=n[e](s),{c(){t.c(),o=V()},l(u){t.l(u),o=V()},m(u,p){l[e].m(u,p),m(u,o,p),r=!0},p(u,[p]){let c=e;e=i(u),e===c?l[e].p(u,p):(ae(),d(l[c],1,1,()=>{l[c]=null}),ie(),t=l[e],t?t.p(u,p):(t=l[e]=n[e](u),t.c()),$(t,1),t.m(o.parentNode,o))},i(u){r||($(t),r=!0)},o(u){d(t),r=!1},d(u){l[e].d(u),u&&f(o)}}}function Fe(s,e,t){let{$$slots:o={},$$scope:r}=e,{this:n}=e,l,i=!1,{bar:u="567"}=e;const p=()=>{t(1,l=n()),t(2,i=!0)};return s.$$set=c=>{"this"in c&&t(0,n=c.this),"bar"in c&&t(3,u=c.bar),"$$scope"in c&&t(4,r=c.$$scope)},[n,l,i,u,r,o,p]}class Me extends R{constructor(e){super(),T(this,e,Fe,We,j,{this:0,bar:3})}}function He(s){let e,t;return{c(){e=E("div"),t=b("Loading..."),this.h()},l(o){e=I(o,"DIV",{class:!0,slot:!0});var r=S(e);t=w(r,"Loading..."),r.forEach(f),this.h()},h(){W(e,"class","uno-lj6mce"),W(e,"slot","loading")},m(o,r){m(o,e,r),$e(e,t)},p:C,d(o){o&&f(e)}}}function qe(s){let e,t,o;function r(l){s[1](l)}let n={foo:"123"};return s[0]!==void 0&&(n.bar=s[0]),e=new s[3]({props:n}),ge.push(()=>he(e,"bar",r)),e.$on("click",s[2]),{c(){h(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,i){k(e,l,i),o=!0},p(l,i){const u={};!t&&i&1&&(t=!0,u.bar=l[0],ve(()=>t=!1)),e.$set(u)},i(l){o||($(e.$$.fragment,l),o=!0)},o(l){d(e.$$.fragment,l),o=!1},d(l){y(e,l)}}}function Ge(s){let e,t,o,r,n;return r=new Me({props:{this:Je,$$slots:{component:[qe,({Component:l})=>({3:l}),({Component:l})=>l?8:0],loading:[He]},$$scope:{ctx:s}}}),{c(){e=b("Bar in App2: "),t=b(s[0]),o=L(),h(r.$$.fragment)},l(l){e=w(l,"Bar in App2: "),t=w(l,s[0]),o=A(l),v(r.$$.fragment,l)},m(l,i){m(l,e,i),m(l,t,i),m(l,o,i),k(r,l,i),n=!0},p(l,[i]){(!n||i&1)&&M(t,l[0]);const u={};i&17&&(u.$$scope={dirty:i,ctx:l}),r.$set(u)},i(l){n||($(r.$$.fragment,l),n=!0)},o(l){d(r.$$.fragment,l),n=!1},d(l){l&&f(e),l&&f(t),l&&f(o),y(r,l)}}}const Je=()=>de(()=>import("./Component.8445de94.js"),["./Component.8445de94.js","./index.5815ca79.js"],import.meta.url);function Ke(s,e,t){let o="789";function r(l){o=l,t(0,o)}return[o,r,()=>console.log("I am an event in App2.svelte!")]}class oe extends R{constructor(e){super(),T(this,e,Ke,Ge,j,{})}}const Ze=`<script>\r
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
`;function Ue(s){let e;return{c(){e=b("Here we're making a lazy component that will only load when it is in view. We'll reuse our viewport action that we used a few times before.")},l(t){e=w(t,"Here we're making a lazy component that will only load when it is in view. We'll reuse our viewport action that we used a few times before.")},m(t,o){m(t,e,o)},d(t){t&&f(e)}}}function Xe(s){let e;return{c(){e=b("promise")},l(t){e=w(t,"promise")},m(t,o){m(t,e,o)},d(t){t&&f(e)}}}function Ye(s){let e,t,o,r;return t=new be({props:{$$slots:{default:[Xe]},$$scope:{ctx:s}}}),{c(){e=b("By not using import at the top and instead setting a variable to a "),h(t.$$.fragment),o=b(" we can load it dynamically when our div with the viewport action comes into view.")},l(n){e=w(n,"By not using import at the top and instead setting a variable to a "),v(t.$$.fragment,n),o=w(n," we can load it dynamically when our div with the viewport action comes into view.")},m(n,l){m(n,e,l),k(t,n,l),m(n,o,l),r=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&f(e),y(t,n),n&&f(o)}}}function xe(s){let e,t,o,r;return{c(){e=b("This works fine but is a bit annoying because we have to have a lot of code just to load the component when we want to, like having "),t=E("code"),o=b("isLoaded"),r=b(", if statements around our dynamic component and so on.")},l(n){e=w(n,"This works fine but is a bit annoying because we have to have a lot of code just to load the component when we want to, like having "),t=I(n,"CODE",{});var l=S(t);o=w(l,"isLoaded"),l.forEach(f),r=w(n,", if statements around our dynamic component and so on.")},m(n,l){m(n,e,l),m(n,t,l),$e(t,o),m(n,r,l)},p:C,d(n){n&&f(e),n&&f(t),n&&f(r)}}}function et(s){let e;return{c(){e=b("component for loading a dynamic component")},l(t){e=w(t,"component for loading a dynamic component")},m(t,o){m(t,e,o)},d(t){t&&f(e)}}}function tt(s){let e,t,o,r;return t=new be({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){e=b("We can make this better by creating a "),h(t.$$.fragment),o=b(".")},l(n){e=w(n,"We can make this better by creating a "),v(t.$$.fragment,n),o=w(n,".")},m(n,l){m(n,e,l),k(t,n,l),m(n,o,l),r=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),t.$set(i)},i(n){r||($(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){n&&f(e),y(t,n),n&&f(o)}}}function nt(s){let e;return{c(){e=b("Our dynamically loaded Lazy component is finished and can use bindings and events like if it was a normal component imported statically. Nice!")},l(t){e=w(t,"Our dynamically loaded Lazy component is finished and can use bindings and events like if it was a normal component imported statically. Nice!")},m(t,o){m(t,e,o)},d(t){t&&f(e)}}}function ot(s){let e,t,o,r,n,l,i,u,p,c,g,O,z,D;return e=new P({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),o=new P({props:{$$slots:{default:[Ye]},$$scope:{ctx:s}}}),n=new U({props:{name:[{name:"App",comp:x,raw:Ee,text:""},{name:"Component",comp:x,raw:Ie,text:""}]}}),i=new P({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),p=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),g=new U({props:{name:[{name:"App2",comp:oe,raw:Ze,text:""},{name:"Lazy",comp:oe,raw:Qe,text:""}]}}),z=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment),t=L(),h(o.$$.fragment),r=L(),h(n.$$.fragment),l=L(),h(i.$$.fragment),u=L(),h(p.$$.fragment),c=L(),h(g.$$.fragment),O=L(),h(z.$$.fragment)},l(a){v(e.$$.fragment,a),t=A(a),v(o.$$.fragment,a),r=A(a),v(n.$$.fragment,a),l=A(a),v(i.$$.fragment,a),u=A(a),v(p.$$.fragment,a),c=A(a),v(g.$$.fragment,a),O=A(a),v(z.$$.fragment,a)},m(a,_){k(e,a,_),m(a,t,_),k(o,a,_),m(a,r,_),k(n,a,_),m(a,l,_),k(i,a,_),m(a,u,_),k(p,a,_),m(a,c,_),k(g,a,_),m(a,O,_),k(z,a,_),D=!0},p(a,_){const H={};_&2&&(H.$$scope={dirty:_,ctx:a}),e.$set(H);const q={};_&2&&(q.$$scope={dirty:_,ctx:a}),o.$set(q);const G={};_&2&&(G.$$scope={dirty:_,ctx:a}),i.$set(G);const J={};_&2&&(J.$$scope={dirty:_,ctx:a}),p.$set(J);const K={};_&2&&(K.$$scope={dirty:_,ctx:a}),z.$set(K)},i(a){D||($(e.$$.fragment,a),$(o.$$.fragment,a),$(n.$$.fragment,a),$(i.$$.fragment,a),$(p.$$.fragment,a),$(g.$$.fragment,a),$(z.$$.fragment,a),D=!0)},o(a){d(e.$$.fragment,a),d(o.$$.fragment,a),d(n.$$.fragment,a),d(i.$$.fragment,a),d(p.$$.fragment,a),d(g.$$.fragment,a),d(z.$$.fragment,a),D=!1},d(a){y(e,a),a&&f(t),y(o,a),a&&f(r),y(n,a),a&&f(l),y(i,a),a&&f(u),y(p,a),a&&f(c),y(g,a),a&&f(O),y(z,a)}}}function rt(s){let e,t;const o=[s[0],re];let r={$$slots:{default:[ot]},$$scope:{ctx:s}};for(let n=0;n<o.length;n+=1)r=F(r,o[n]);return e=new ye({props:r}),{c(){h(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,l){k(e,n,l),t=!0},p(n,[l]){const i=l&1?ke(o,[l&1&&Z(n[0]),l&0&&Z(re)]):{};l&2&&(i.$$scope={dirty:l,ctx:n}),e.$set(i)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}const re={title:"Lazy component",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-25T00:00:00.000Z",layout:"notes"};function lt(s,e,t){return s.$$set=o=>{t(0,e=F(F({},e),Q(o)))},e=Q(e),[e]}class pt extends R{constructor(e){super(),T(this,e,lt,rt,j,{})}}export{pt as default,re as metadata};
