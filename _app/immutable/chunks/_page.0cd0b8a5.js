import{S as Z,i as z,s as F,k as T,a as E,l as j,m as P,c as I,h as m,b as $,D as G,v as pe,ad as ge,ae as de,f as me,g,d,a1 as we,C as ve,E as be,F as ke,G as ye,ac as Me,R as $e,V as Le,q as w,r as v,e as ne,n as W,I as De,J as H,y as b,z as k,A as y,K as _e,L as U,B as M,Z as re,M as se}from"./index.5815ca79.js";import{M as Ee,P as A}from"./mdsvex-layout-notes.7536afaf.js";import{S as Ie}from"./ShowMany.2af9ac15.js";import{w as We}from"./index.522bc5dc.js";import{S as N}from"./Strong.b8abec16.js";let q;function Ve(){q||(q=new IntersectionObserver(l=>{l.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function Oe(l){return Ve(),q.observe(l),{destroy(){q.unobserve(l)}}}function oe(l,e,t){const s=l.slice();return s[8]=e[t],s}const Ae=l=>({item:l&1}),ie=l=>({item:l[8]});function ae(l,e){let t,s;const i=e[6].item,n=ve(i,e,e[5],ie);return{key:l,first:null,c(){t=T("li"),n&&n.c(),this.h()},l(a){t=j(a,"LI",{});var u=P(t);n&&n.l(u),u.forEach(m),this.h()},h(){this.first=t},m(a,u){$(a,t,u),n&&n.m(t,null),s=!0},p(a,u){e=a,n&&n.p&&(!s||u&33)&&be(n,i,e,e[5],s?ye(i,e[5],u,Ae):ke(e[5]),ie)},i(a){s||(g(n,a),s=!0)},o(a){d(n,a),s=!1},d(a){a&&m(t),n&&n.d(a)}}}function le(l){let e,t,s,i=l[3]&&fe();return{c(){e=T("li"),i&&i.c()},l(n){e=j(n,"LI",{});var a=P(e);i&&i.l(a),a.forEach(m)},m(n,a){$(n,e,a),i&&i.m(e,null),t||(s=[Me(Oe.call(null,e)),$e(e,"enterViewport",l[7])],t=!0)},p(n,a){n[3]?i||(i=fe(),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(n){n&&m(e),i&&i.d(),t=!1,Le(s)}}}function fe(l){let e;return{c(){e=w("Loading...")},l(t){e=v(t,"Loading...")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Se(l){let e,t=[],s=new Map,i,n,a=l[0];const u=f=>f[8][f[2]];for(let f=0;f<a.length;f+=1){let c=oe(l,a,f),r=u(c);s.set(r,t[f]=ae(r,c))}let p=!l[1]&&le(l);return{c(){e=T("ul");for(let f=0;f<t.length;f+=1)t[f].c();i=E(),p&&p.c()},l(f){e=j(f,"UL",{});var c=P(e);for(let r=0;r<t.length;r+=1)t[r].l(c);i=I(c),p&&p.l(c),c.forEach(m)},m(f,c){$(f,e,c);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);G(e,i),p&&p.m(e,null),n=!0},p(f,[c]){c&37&&(a=f[0],pe(),t=ge(t,c,u,1,f,a,s,e,de,ae,i,oe),me()),f[1]?p&&(p.d(1),p=null):p?p.p(f,c):(p=le(f),p.c(),p.m(e,null))},i(f){if(!n){for(let c=0;c<a.length;c+=1)g(t[c]);n=!0}},o(f){for(let c=0;c<t.length;c+=1)d(t[c]);n=!1},d(f){f&&m(e);for(let c=0;c<t.length;c+=1)t[c].d();p&&p.d()}}}function Te(l,e,t){let{$$slots:s={},$$scope:i}=e,{data:n}=e,{noMoreData:a}=e,{key:u}=e,{loading:p}=e;const f=we(),c=()=>f("loadMore");return l.$$set=r=>{"data"in r&&t(0,n=r.data),"noMoreData"in r&&t(1,a=r.noMoreData),"key"in r&&t(2,u=r.key),"loading"in r&&t(3,p=r.loading),"$$scope"in r&&t(5,i=r.$$scope)},[n,a,u,p,f,i,s,c]}class je extends Z{constructor(e){super(),z(this,e,Te,Se,F,{data:0,noMoreData:1,key:2,loading:3})}}let S=!1,R=!1,Ne=1,C=[];const B=We({loading:S,data:C,noMoreData:R}),he={subscribe:B.subscribe,async fetchMore(){if(S||R)return;S=!0,B.set({loading:S,data:C,noMoreData:R});const e=await(await fetch(`https://picsum.photos/v2/list?page=${Ne++}&limit=3`)).json();S=!1,R=e.length===0,C.push(...e),B.set({loading:S,data:C,noMoreData:R})}};function ce(l){let e,t;const s=[l[1],{key:"id"}];let i={$$slots:{item:[Re,({item:{download_url:n,author:a}})=>({3:n,4:a}),({item:n})=>(n?8:0)|(n?16:0)]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)i=H(i,s[n]);return e=new je({props:i}),e.$on("loadMore",he.fetchMore),{c(){b(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){y(e,n,a),t=!0},p(n,a){const u=a&2?_e(s,[U(n[1]),s[1]]):{};a&56&&(u.$$scope={dirty:a,ctx:n}),e.$set(u)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Re(l){let e,t,s;return{c(){e=T("img"),this.h()},l(i){e=j(i,"IMG",{slot:!0,class:!0,src:!0,alt:!0}),this.h()},h(){W(e,"slot","item"),W(e,"class","uno-rklhvr"),re(e.src,t=l[3])||W(e,"src",t),W(e,"alt",s="stunning photo taken by "+l[4])},m(i,n){$(i,e,n)},p(i,n){n&8&&!re(e.src,t=i[3])&&W(e,"src",t),n&16&&s!==(s="stunning photo taken by "+i[4])&&W(e,"alt",s)},d(i){i&&m(e)}}}function xe(l){let e,t,s,i,n,a,u,p,f=l[0]&&ce(l);return{c(){e=T("label"),t=w(`Show list\r
	`),s=T("input"),i=E(),f&&f.c(),n=ne(),this.h()},l(c){e=j(c,"LABEL",{class:!0,for:!0});var r=P(e);t=v(r,`Show list\r
	`),s=j(r,"INPUT",{type:!0}),r.forEach(m),i=I(c),f&&f.l(c),n=ne(),this.h()},h(){W(s,"type","checkbox"),W(e,"class","uno-o1n7yh"),W(e,"for","")},m(c,r){$(c,e,r),G(e,t),G(e,s),s.checked=l[0],$(c,i,r),f&&f.m(c,r),$(c,n,r),a=!0,u||(p=$e(s,"change",l[2]),u=!0)},p(c,[r]){r&1&&(s.checked=c[0]),c[0]?f?(f.p(c,r),r&1&&g(f,1)):(f=ce(c),f.c(),g(f,1),f.m(n.parentNode,n)):f&&(pe(),d(f,1,1,()=>{f=null}),me())},i(c){a||(g(f),a=!0)},o(c){d(f),a=!1},d(c){c&&m(e),c&&m(i),f&&f.d(c),c&&m(n),u=!1,p()}}}function Ce(l,e,t){let s;De(l,he,a=>t(1,s=a));let i=!0;function n(){i=this.checked,t(0,i)}return[i,s,n]}class x extends Z{constructor(e){super(),z(this,e,Ce,xe,F,{})}}const He=`<script>\r
	import List from "./List.svelte";\r
	import data from "./data";\r
\r
	let showList = true;\r
<\/script>\r
\r
<label class="fixed right-4 top-4 rounded-lg bg-blue-300 p-4 text-xl" for="">\r
	Show list\r
	<input type="checkbox" bind:checked={showList} />\r
</label>\r
\r
{#if showList}\r
	<List {...$data} key="id" let:item={{ download_url, author }} on:loadMore={data.fetchMore}>\r
		<img slot="item" class="w-full" src={download_url} alt="stunning photo taken by {author}" />\r
	</List>\r
{/if}\r
\r
<style>\r
</style>\r
`,qe=`<script>\r
	import { createEventDispatcher } from "svelte";\r
	import viewport from "./useViewportAction";\r
	export let data;\r
	export let noMoreData;\r
	export let key;\r
	export let loading;\r
\r
	const dispatch = createEventDispatcher();\r
<\/script>\r
\r
<ul>\r
	{#each data as item (item[key])}\r
		<li><slot name="item" {item} /></li>\r
	{/each}\r
	{#if !noMoreData}\r
		<li use:viewport on:enterViewport={() => dispatch("loadMore")}>\r
			{#if loading}\r
				Loading...\r
			{/if}\r
		</li>\r
	{/if}\r
</ul>\r
\r
<style>\r
</style>\r
`,Pe=`import { writable } from "svelte/store";\r
\r
let loading = false;\r
let noMoreData = false;\r
let page = 1;\r
let data = [];\r
\r
const list = writable({\r
	loading,\r
	data,\r
	noMoreData,\r
});\r
\r
export default {\r
	// we only implement subscribe because we don't want the user to use set/update on the store\r
	subscribe: list.subscribe,\r
	async fetchMore() {\r
		if (loading || noMoreData) return;\r
		loading = true;\r
\r
		list.set({ loading, data, noMoreData });\r
\r
		// alternative\r
		// list.update((currentList) => {\r
		// 	return { ...currentList, loading };\r
		// });\r
		const res = await fetch(\`https://picsum.photos/v2/list?page=\${page++}&limit=3\`);\r
		const newData = await res.json();\r
		loading = false;\r
		noMoreData = newData.length === 0;\r
		data.push(...newData);\r
		list.set({ loading, data, noMoreData });\r
	},\r
};\r
`,Be=`let intersectionObserver;\r
\r
function ensureIntersectionObserver() {\r
	if (intersectionObserver) return;\r
\r
	intersectionObserver = new IntersectionObserver((entries) => {\r
		entries.forEach((entry) => {\r
			const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";\r
			entry.target.dispatchEvent(new CustomEvent(eventName));\r
		});\r
	});\r
}\r
export default function viewport(element) {\r
	ensureIntersectionObserver();\r
	intersectionObserver.observe(element);\r
	return {\r
		destroy() {\r
			intersectionObserver.unobserve(element);\r
		},\r
	};\r
}\r
`;function Ge(l){let e;return{c(){e=w("Here we're going to create an infinite list where we load more data as we scroll.")},l(t){e=v(t,"Here we're going to create an infinite list where we load more data as we scroll.")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Ue(l){let e;return{c(){e=w("We can experiment and play with a component to get something we like or we can think in terms of how we want to use it and how you want to allow users to use it and provide that behavior.")},l(t){e=v(t,"We can experiment and play with a component to get something we like or we can think in terms of how we want to use it and how you want to allow users to use it and provide that behavior.")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Ze(l){let e;return{c(){e=w("He're we're going for the second approach.")},l(t){e=v(t,"He're we're going for the second approach.")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function ze(l){let e;return{c(){e=w("We can think of how our List component should look in order to provide the infinite scroll functionality.")},l(t){e=v(t,"We can think of how our List component should look in order to provide the infinite scroll functionality.")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Fe(l){let e;return{c(){e=w("click the checkbox in the top right")},l(t){e=v(t,"click the checkbox in the top right")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Je(l){let e,t,s,i;return t=new N({props:{$$slots:{default:[Fe]},$$scope:{ctx:l}}}),{c(){e=w("The list is infinite so if you want to read the code "),b(t.$$.fragment),s=w(".")},l(n){e=v(n,"The list is infinite so if you want to read the code "),k(t.$$.fragment,n),s=v(n,".")},m(n,a){$(n,e,a),y(t,n,a),$(n,s,a),i=!0},p(n,a){const u={};a&2&&(u.$$scope={dirty:a,ctx:n}),t.$set(u)},i(n){i||(g(t.$$.fragment,n),i=!0)},o(n){d(t.$$.fragment,n),i=!1},d(n){n&&m(e),M(t,n),n&&m(s)}}}function Ke(l){let e;return{c(){e=w("use:viewport")},l(t){e=v(t,"use:viewport")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Qe(l){let e;return{c(){e=w("custom store")},l(t){e=v(t,"custom store")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Xe(l){let e;return{c(){e=w("loadMore")},l(t){e=v(t,"loadMore")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function Ye(l){let e;return{c(){e=w("inside of the component in the markup")},l(t){e=v(t,"inside of the component in the markup")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function et(l){let e,t,s,i,n,a,u,p,f,c;return t=new N({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),i=new N({props:{$$slots:{default:[Qe]},$$scope:{ctx:l}}}),a=new N({props:{$$slots:{default:[Xe]},$$scope:{ctx:l}}}),p=new N({props:{$$slots:{default:[Ye]},$$scope:{ctx:l}}}),{c(){e=w("We're reusing the viewport action from "),b(t.$$.fragment),s=w(`.
We're using a writable store and a `),b(i.$$.fragment),n=w(` as the default export with our custom functionality.
We're using an event dispatcher that dispatches a custom event `),b(a.$$.fragment),u=w(` whenever the action triggers the enterViewport event.
We're using a slot to put the img tag `),b(p.$$.fragment),f=w(`.
We're using spread props in order to spread all of the $data store into our list component.`)},l(r){e=v(r,"We're reusing the viewport action from "),k(t.$$.fragment,r),s=v(r,`.
We're using a writable store and a `),k(i.$$.fragment,r),n=v(r,` as the default export with our custom functionality.
We're using an event dispatcher that dispatches a custom event `),k(a.$$.fragment,r),u=v(r,` whenever the action triggers the enterViewport event.
We're using a slot to put the img tag `),k(p.$$.fragment,r),f=v(r,`.
We're using spread props in order to spread all of the $data store into our list component.`)},m(r,h){$(r,e,h),y(t,r,h),$(r,s,h),y(i,r,h),$(r,n,h),y(a,r,h),$(r,u,h),y(p,r,h),$(r,f,h),c=!0},p(r,h){const L={};h&2&&(L.$$scope={dirty:h,ctx:r}),t.$set(L);const V={};h&2&&(V.$$scope={dirty:h,ctx:r}),i.$set(V);const D={};h&2&&(D.$$scope={dirty:h,ctx:r}),a.$set(D);const O={};h&2&&(O.$$scope={dirty:h,ctx:r}),p.$set(O)},i(r){c||(g(t.$$.fragment,r),g(i.$$.fragment,r),g(a.$$.fragment,r),g(p.$$.fragment,r),c=!0)},o(r){d(t.$$.fragment,r),d(i.$$.fragment,r),d(a.$$.fragment,r),d(p.$$.fragment,r),c=!1},d(r){r&&m(e),M(t,r),r&&m(s),M(i,r),r&&m(n),M(a,r),r&&m(u),M(p,r),r&&m(f)}}}function tt(l){let e;return{c(){e=w("That's it! I hoped you closed the infinite list so you can read this 😊")},l(t){e=v(t,"That's it! I hoped you closed the infinite list so you can read this 😊")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function nt(l){let e,t,s,i,n,a,u,p,f,c,r,h,L,V,D,O;return e=new A({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),s=new A({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}}),n=new A({props:{$$slots:{default:[Ze]},$$scope:{ctx:l}}}),u=new A({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),f=new A({props:{$$slots:{default:[Je]},$$scope:{ctx:l}}}),r=new Ie({props:{name:[{name:"App",comp:x,raw:He,text:""},{name:"List",comp:x,raw:qe,text:""},{name:"data.js",comp:x,raw:Pe,text:""},{name:"useViewportAction.js",comp:x,raw:Be,text:""}]}}),L=new A({props:{$$slots:{default:[et]},$$scope:{ctx:l}}}),D=new A({props:{$$slots:{default:[tt]},$$scope:{ctx:l}}}),{c(){b(e.$$.fragment),t=E(),b(s.$$.fragment),i=E(),b(n.$$.fragment),a=E(),b(u.$$.fragment),p=E(),b(f.$$.fragment),c=E(),b(r.$$.fragment),h=E(),b(L.$$.fragment),V=E(),b(D.$$.fragment)},l(o){k(e.$$.fragment,o),t=I(o),k(s.$$.fragment,o),i=I(o),k(n.$$.fragment,o),a=I(o),k(u.$$.fragment,o),p=I(o),k(f.$$.fragment,o),c=I(o),k(r.$$.fragment,o),h=I(o),k(L.$$.fragment,o),V=I(o),k(D.$$.fragment,o)},m(o,_){y(e,o,_),$(o,t,_),y(s,o,_),$(o,i,_),y(n,o,_),$(o,a,_),y(u,o,_),$(o,p,_),y(f,o,_),$(o,c,_),y(r,o,_),$(o,h,_),y(L,o,_),$(o,V,_),y(D,o,_),O=!0},p(o,_){const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),e.$set(J);const K={};_&2&&(K.$$scope={dirty:_,ctx:o}),s.$set(K);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:o}),n.$set(Q);const X={};_&2&&(X.$$scope={dirty:_,ctx:o}),u.$set(X);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:o}),f.$set(Y);const ee={};_&2&&(ee.$$scope={dirty:_,ctx:o}),L.$set(ee);const te={};_&2&&(te.$$scope={dirty:_,ctx:o}),D.$set(te)},i(o){O||(g(e.$$.fragment,o),g(s.$$.fragment,o),g(n.$$.fragment,o),g(u.$$.fragment,o),g(f.$$.fragment,o),g(r.$$.fragment,o),g(L.$$.fragment,o),g(D.$$.fragment,o),O=!0)},o(o){d(e.$$.fragment,o),d(s.$$.fragment,o),d(n.$$.fragment,o),d(u.$$.fragment,o),d(f.$$.fragment,o),d(r.$$.fragment,o),d(L.$$.fragment,o),d(D.$$.fragment,o),O=!1},d(o){M(e,o),o&&m(t),M(s,o),o&&m(i),M(n,o),o&&m(a),M(u,o),o&&m(p),M(f,o),o&&m(c),M(r,o),o&&m(h),M(L,o),o&&m(V),M(D,o)}}}function rt(l){let e,t;const s=[l[0],ue];let i={$$slots:{default:[nt]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)i=H(i,s[n]);return e=new Ee({props:i}),{c(){b(e.$$.fragment)},l(n){k(e.$$.fragment,n)},m(n,a){y(e,n,a),t=!0},p(n,[a]){const u=a&1?_e(s,[a&1&&U(n[0]),a&0&&U(ue)]):{};a&2&&(u.$$scope={dirty:a,ctx:n}),e.$set(u)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}const ue={title:"Infinite list",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-23T00:00:00.000Z",layout:"notes"};function st(l,e,t){return l.$$set=s=>{t(0,e=H(H({},e),se(s)))},e=se(e),[e]}class ct extends Z{constructor(e){super(),z(this,e,st,rt,F,{})}}export{ct as default,ue as metadata};
