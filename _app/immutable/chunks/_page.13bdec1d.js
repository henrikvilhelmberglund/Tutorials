import{s as G,f as x,a as E,g as j,h as q,c as I,d as m,i as $,v as U,_ as dt,r as gt,w as wt,x as vt,y as bt,ae as kt,X as pt,H as yt,l as w,m as v,e as nt,j as A,A as Mt,C as R,a3 as Lt,z as Dt,D as rt}from"./scheduler.a7cd560e.js";import{S as X,i as Z,g as mt,c as $t,a as d,t as g,b,d as k,m as y,e as M}from"./index.396264e7.js";import{g as _t,a as B}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Et,P as O}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as It}from"./ShowMany.db7be1f3.js";import{e as ot,u as Wt,o as Vt}from"./each.32d06572.js";import{w as Ot}from"./index.5e192797.js";import{S as T}from"./Strong.097578ae.js";let P;function At(){P||(P=new IntersectionObserver(a=>{a.forEach(t=>{const e=t.isIntersecting?"enterViewport":"exitViewport";t.target.dispatchEvent(new CustomEvent(e))})}))}function St(a){return At(),P.observe(a),{destroy(){P.unobserve(a)}}}function st(a,t,e){const r=a.slice();return r[8]=t[e],r}const xt=a=>({item:a&1}),at=a=>({item:a[8]});function it(a,t){let e,r;const l=t[6].item,n=gt(l,t,t[5],at);return{key:a,first:null,c(){e=x("li"),n&&n.c(),this.h()},l(s){e=j(s,"LI",{});var u=q(e);n&&n.l(u),u.forEach(m),this.h()},h(){this.first=e},m(s,u){$(s,e,u),n&&n.m(e,null),r=!0},p(s,u){t=s,n&&n.p&&(!r||u&33)&&wt(n,l,t,t[5],r?bt(l,t[5],u,xt):vt(t[5]),at)},i(s){r||(d(n,s),r=!0)},o(s){g(n,s),r=!1},d(s){s&&m(e),n&&n.d(s)}}}function lt(a){let t,e,r,l=a[3]&&ct();return{c(){t=x("li"),l&&l.c()},l(n){t=j(n,"LI",{});var s=q(t);l&&l.l(s),s.forEach(m)},m(n,s){$(n,t,s),l&&l.m(t,null),e||(r=[kt(St.call(null,t)),pt(t,"enterViewport",a[7])],e=!0)},p(n,s){n[3]?l||(l=ct(),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(n){n&&m(t),l&&l.d(),e=!1,yt(r)}}}function ct(a){let t;return{c(){t=w("Loading...")},l(e){t=v(e,"Loading...")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function jt(a){let t,e=[],r=new Map,l,n,s=ot(a[0]);const u=c=>c[8][c[2]];for(let c=0;c<s.length;c+=1){let f=st(a,s,c),o=u(f);r.set(o,e[c]=it(o,f))}let p=!a[1]&&lt(a);return{c(){t=x("ul");for(let c=0;c<e.length;c+=1)e[c].c();l=E(),p&&p.c()},l(c){t=j(c,"UL",{});var f=q(t);for(let o=0;o<e.length;o+=1)e[o].l(f);l=I(f),p&&p.l(f),f.forEach(m)},m(c,f){$(c,t,f);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null);U(t,l),p&&p.m(t,null),n=!0},p(c,[f]){f&37&&(s=ot(c[0]),mt(),e=Wt(e,f,u,1,c,s,r,t,Vt,it,l,st),$t()),c[1]?p&&(p.d(1),p=null):p?p.p(c,f):(p=lt(c),p.c(),p.m(t,null))},i(c){if(!n){for(let f=0;f<s.length;f+=1)d(e[f]);n=!0}},o(c){for(let f=0;f<e.length;f+=1)g(e[f]);n=!1},d(c){c&&m(t);for(let f=0;f<e.length;f+=1)e[f].d();p&&p.d()}}}function Tt(a,t,e){let{$$slots:r={},$$scope:l}=t,{data:n}=t,{noMoreData:s}=t,{key:u}=t,{loading:p}=t;const c=dt(),f=()=>c("loadMore");return a.$$set=o=>{"data"in o&&e(0,n=o.data),"noMoreData"in o&&e(1,s=o.noMoreData),"key"in o&&e(2,u=o.key),"loading"in o&&e(3,p=o.loading),"$$scope"in o&&e(5,l=o.$$scope)},[n,s,u,p,c,l,r,f]}class Ht extends X{constructor(t){super(),Z(this,t,Tt,jt,G,{data:0,noMoreData:1,key:2,loading:3})}}let S=!1,H=!1,Nt=1,C=[];const z=Ot({loading:S,data:C,noMoreData:H}),ht={subscribe:z.subscribe,async fetchMore(){if(S||H)return;S=!0,z.set({loading:S,data:C,noMoreData:H});const t=await(await fetch(`https://picsum.photos/v2/list?page=${Nt++}&limit=3`)).json();S=!1,H=t.length===0,C.push(...t),z.set({loading:S,data:C,noMoreData:H})}};function ft(a){let t,e;const r=[a[1],{key:"id"}];let l={$$slots:{item:[Ct]},$$scope:{ctx:a}};for(let n=0;n<r.length;n+=1)l=R(l,r[n]);return t=new Ht({props:l}),t.$on("loadMore",ht.fetchMore),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,s){y(t,n,s),e=!0},p(n,s){const u=s&2?_t(r,[B(n[1]),r[1]]):{};s&8&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){M(t,n)}}}function Ct(a){let t,e;return{c(){t=x("img"),this.h()},l(r){t=j(r,"IMG",{slot:!0,class:!0,src:!0,alt:!0}),this.h()},h(){A(t,"slot","item"),A(t,"class","spu-t7u3vr"),Lt(t.src,e=download_url)||A(t,"src",e),A(t,"alt","stunning photo taken by "+author)},m(r,l){$(r,t,l)},p:Dt,d(r){r&&m(t)}}}function Rt(a){let t,e,r,l,n,s,u,p,c=a[0]&&ft(a);return{c(){t=x("label"),e=w(`Show list\r
	`),r=x("input"),l=E(),c&&c.c(),n=nt(),this.h()},l(f){t=j(f,"LABEL",{class:!0,for:!0});var o=q(t);e=v(o,`Show list\r
	`),r=j(o,"INPUT",{type:!0}),o.forEach(m),l=I(f),c&&c.l(f),n=nt(),this.h()},h(){A(r,"type","checkbox"),A(t,"class","spu-thp9jz"),A(t,"for","")},m(f,o){$(f,t,o),U(t,e),U(t,r),r.checked=a[0],$(f,l,o),c&&c.m(f,o),$(f,n,o),s=!0,u||(p=pt(r,"change",a[2]),u=!0)},p(f,[o]){o&1&&(r.checked=f[0]),f[0]?c?(c.p(f,o),o&1&&d(c,1)):(c=ft(f),c.c(),d(c,1),c.m(n.parentNode,n)):c&&(mt(),g(c,1,1,()=>{c=null}),$t())},i(f){s||(d(c),s=!0)},o(f){g(c),s=!1},d(f){f&&(m(t),m(l),m(n)),c&&c.d(f),u=!1,p()}}}function Pt(a,t,e){let r;Mt(a,ht,s=>e(1,r=s));let l=!0;function n(){l=this.checked,e(0,l)}return[l,r,n]}class N extends X{constructor(t){super(),Z(this,t,Pt,Rt,G,{})}}const qt=`<script>\r
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
`,zt=`<script>\r
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
`,Ut=`import { writable } from "svelte/store";\r
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
`,Bt=`let intersectionObserver;\r
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
`;function Gt(a){let t;return{c(){t=w("Here we're going to create an infinite list where we load more data as we scroll.")},l(e){t=v(e,"Here we're going to create an infinite list where we load more data as we scroll.")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Xt(a){let t;return{c(){t=w("We can experiment and play with a component to get something we like or we can think in terms of how we want to use it and how you want to allow users to use it and provide that behavior.")},l(e){t=v(e,"We can experiment and play with a component to get something we like or we can think in terms of how we want to use it and how you want to allow users to use it and provide that behavior.")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Zt(a){let t;return{c(){t=w("He're we're going for the second approach.")},l(e){t=v(e,"He're we're going for the second approach.")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Ft(a){let t;return{c(){t=w("We can think of how our List component should look in order to provide the infinite scroll functionality.")},l(e){t=v(e,"We can think of how our List component should look in order to provide the infinite scroll functionality.")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Jt(a){let t;return{c(){t=w("click the checkbox in the top right")},l(e){t=v(e,"click the checkbox in the top right")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Kt(a){let t,e,r,l;return e=new T({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){t=w("The list is infinite so if you want to read the code "),b(e.$$.fragment),r=w(".")},l(n){t=v(n,"The list is infinite so if you want to read the code "),k(e.$$.fragment,n),r=v(n,".")},m(n,s){$(n,t,s),y(e,n,s),$(n,r,s),l=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),e.$set(u)},i(n){l||(d(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){n&&(m(t),m(r)),M(e,n)}}}function Qt(a){let t;return{c(){t=w("use:viewport")},l(e){t=v(e,"use:viewport")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function Yt(a){let t;return{c(){t=w("custom store")},l(e){t=v(e,"custom store")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function te(a){let t;return{c(){t=w("loadMore")},l(e){t=v(e,"loadMore")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function ee(a){let t;return{c(){t=w("inside of the component in the markup")},l(e){t=v(e,"inside of the component in the markup")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function ne(a){let t,e,r,l,n,s,u,p,c,f;return e=new T({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),l=new T({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),s=new T({props:{$$slots:{default:[te]},$$scope:{ctx:a}}}),p=new T({props:{$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){t=w("We're reusing the viewport action from "),b(e.$$.fragment),r=w(`.
We're using a writable store and a `),b(l.$$.fragment),n=w(` as the default export with our custom functionality.
We're using an event dispatcher that dispatches a custom event `),b(s.$$.fragment),u=w(` whenever the action triggers the enterViewport event.
We're using a slot to put the img tag `),b(p.$$.fragment),c=w(`.
We're using spread props in order to spread all of the $data store into our list component.`)},l(o){t=v(o,"We're reusing the viewport action from "),k(e.$$.fragment,o),r=v(o,`.
We're using a writable store and a `),k(l.$$.fragment,o),n=v(o,` as the default export with our custom functionality.
We're using an event dispatcher that dispatches a custom event `),k(s.$$.fragment,o),u=v(o,` whenever the action triggers the enterViewport event.
We're using a slot to put the img tag `),k(p.$$.fragment,o),c=v(o,`.
We're using spread props in order to spread all of the $data store into our list component.`)},m(o,h){$(o,t,h),y(e,o,h),$(o,r,h),y(l,o,h),$(o,n,h),y(s,o,h),$(o,u,h),y(p,o,h),$(o,c,h),f=!0},p(o,h){const L={};h&2&&(L.$$scope={dirty:h,ctx:o}),e.$set(L);const W={};h&2&&(W.$$scope={dirty:h,ctx:o}),l.$set(W);const D={};h&2&&(D.$$scope={dirty:h,ctx:o}),s.$set(D);const V={};h&2&&(V.$$scope={dirty:h,ctx:o}),p.$set(V)},i(o){f||(d(e.$$.fragment,o),d(l.$$.fragment,o),d(s.$$.fragment,o),d(p.$$.fragment,o),f=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),g(s.$$.fragment,o),g(p.$$.fragment,o),f=!1},d(o){o&&(m(t),m(r),m(n),m(u),m(c)),M(e,o),M(l,o),M(s,o),M(p,o)}}}function re(a){let t;return{c(){t=w("That's it! I hoped you closed the infinite list so you can read this 😊")},l(e){t=v(e,"That's it! I hoped you closed the infinite list so you can read this 😊")},m(e,r){$(e,t,r)},d(e){e&&m(t)}}}function oe(a){let t,e,r,l,n,s,u,p,c,f,o,h,L,W,D,V;return t=new O({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),r=new O({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),n=new O({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),u=new O({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),c=new O({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),o=new It({props:{name:[{name:"App",comp:N,raw:qt,text:""},{name:"List",comp:N,raw:zt,text:""},{name:"data.js",comp:N,raw:Ut,text:""},{name:"useViewportAction.js",comp:N,raw:Bt,text:""}]}}),L=new O({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),D=new O({props:{$$slots:{default:[re]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=E(),b(r.$$.fragment),l=E(),b(n.$$.fragment),s=E(),b(u.$$.fragment),p=E(),b(c.$$.fragment),f=E(),b(o.$$.fragment),h=E(),b(L.$$.fragment),W=E(),b(D.$$.fragment)},l(i){k(t.$$.fragment,i),e=I(i),k(r.$$.fragment,i),l=I(i),k(n.$$.fragment,i),s=I(i),k(u.$$.fragment,i),p=I(i),k(c.$$.fragment,i),f=I(i),k(o.$$.fragment,i),h=I(i),k(L.$$.fragment,i),W=I(i),k(D.$$.fragment,i)},m(i,_){y(t,i,_),$(i,e,_),y(r,i,_),$(i,l,_),y(n,i,_),$(i,s,_),y(u,i,_),$(i,p,_),y(c,i,_),$(i,f,_),y(o,i,_),$(i,h,_),y(L,i,_),$(i,W,_),y(D,i,_),V=!0},p(i,_){const F={};_&2&&(F.$$scope={dirty:_,ctx:i}),t.$set(F);const J={};_&2&&(J.$$scope={dirty:_,ctx:i}),r.$set(J);const K={};_&2&&(K.$$scope={dirty:_,ctx:i}),n.$set(K);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:i}),u.$set(Q);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:i}),c.$set(Y);const tt={};_&2&&(tt.$$scope={dirty:_,ctx:i}),L.$set(tt);const et={};_&2&&(et.$$scope={dirty:_,ctx:i}),D.$set(et)},i(i){V||(d(t.$$.fragment,i),d(r.$$.fragment,i),d(n.$$.fragment,i),d(u.$$.fragment,i),d(c.$$.fragment,i),d(o.$$.fragment,i),d(L.$$.fragment,i),d(D.$$.fragment,i),V=!0)},o(i){g(t.$$.fragment,i),g(r.$$.fragment,i),g(n.$$.fragment,i),g(u.$$.fragment,i),g(c.$$.fragment,i),g(o.$$.fragment,i),g(L.$$.fragment,i),g(D.$$.fragment,i),V=!1},d(i){i&&(m(e),m(l),m(s),m(p),m(f),m(h),m(W)),M(t,i),M(r,i),M(n,i),M(u,i),M(c,i),M(o,i),M(L,i),M(D,i)}}}function se(a){let t,e;const r=[a[0],ut];let l={$$slots:{default:[oe]},$$scope:{ctx:a}};for(let n=0;n<r.length;n+=1)l=R(l,r[n]);return t=new Et({props:l}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,s){y(t,n,s),e=!0},p(n,[s]){const u=s&1?_t(r,[s&1&&B(n[0]),s&0&&B(ut)]):{};s&2&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){M(t,n)}}}const ut={title:"Infinite list",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-23T00:00:00.000Z",layout:"notes"};function ae(a,t,e){return a.$$set=r=>{e(0,t=R(R({},t),rt(r)))},t=rt(t),[t]}class _e extends X{constructor(t){super(),Z(this,t,ae,se,G,{})}}export{_e as default,ut as metadata};
