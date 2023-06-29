import{s as R,r as tt,f as j,a as I,g as N,h as B,d,c as C,i as p,w as et,x as nt,y as st,B as jt,A as rt,ak as z,al as F,l as L,m as S,j as X,E as G,v as U,X as O,n as lt,e as J,aj as K,ac as Nt,p as Pt,u as At,a8 as Q,a9 as Et,H as Ut,C as ct,D as Tt}from"./scheduler.a7cd560e.js";import{S as V,i as M,a as _,t as g,g as it,c as at,h as Ot,b as w,d as v,m as k,e as y}from"./index.396264e7.js";import{g as Bt,a as ht}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Vt,P as q}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as ot}from"./ShowMany.db7be1f3.js";import{e as W}from"./each.32d06572.js";import{w as Rt}from"./index.5e192797.js";import{S as wt}from"./Strong.097578ae.js";function vt(i,t,e){const n=i.slice();return n[8]=t[e].id,n[9]=t[e].title,n}function kt(i){let t,e=i[9]+"",n,l,s;function o(){return i[6](i[8])}return{c(){t=j("button"),n=L(e),this.h()},l(r){t=N(r,"BUTTON",{class:!0});var a=B(t);n=S(a,e),a.forEach(d),this.h()},h(){X(t,"class","svelte-5hceud"),G(t,"selected",i[0]===i[8])},m(r,a){p(r,t,a),U(t,n),l||(s=O(t,"click",o),l=!0)},p(r,a){i=r,a&2&&e!==(e=i[9]+"")&&lt(n,e),a&3&&G(t,"selected",i[0]===i[8])},d(r){r&&d(t),l=!1,s()}}}function Mt(i){let t,e,n,l=W(Object.values(i[1])),s=[];for(let a=0;a<l.length;a+=1)s[a]=kt(vt(i,l,a));const o=i[5].default,r=tt(o,i,i[4],null);return{c(){t=j("div");for(let a=0;a<s.length;a+=1)s[a].c();e=I(),r&&r.c()},l(a){t=N(a,"DIV",{});var u=B(t);for(let f=0;f<s.length;f+=1)s[f].l(u);u.forEach(d),e=C(a),r&&r.l(a)},m(a,u){p(a,t,u);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);p(a,e,u),r&&r.m(a,u),n=!0},p(a,[u]){if(u&3){l=W(Object.values(a[1]));let f;for(f=0;f<l.length;f+=1){const b=vt(a,l,f);s[f]?s[f].p(b,u):(s[f]=kt(b),s[f].c(),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=l.length}r&&r.p&&(!n||u&16)&&et(r,o,a,a[4],n?st(o,a[4],u,null):nt(a[4]),null)},i(a){n||(_(r,a),n=!0)},o(a){g(r,a),n=!1},d(a){a&&(d(t),d(e)),jt(s,a),r&&r.d(a)}}}function qt(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{selectedTab:o="1"}=t,r=Rt(o);rt(i,r,b=>e(0,n=b));function a(b){e(3,o=b)}z("selectedTab",r);let u={};z("tabTitles",{registerTab(b,h){e(1,u[b]={id:b,title:h},u),e(1,u),console.log(u)},updateTitle(b,h){e(1,u[b].title=h,u)},unregisterTab(b){delete u[b],e(1,u)}});const f=b=>F(r,n=b,n);return i.$$set=b=>{"selectedTab"in b&&e(3,o=b.selectedTab),"$$scope"in b&&e(4,s=b.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&F(r,n=o,n),i.$$.dirty&1&&a(n)},[n,u,r,o,s,l,f]}class Xt extends V{constructor(t){super(),M(this,t,qt,Mt,R,{selectedTab:3})}}function yt(i){let t,e;const n=i[5].default,l=tt(n,i,i[4],null);return{c(){t=j("div"),l&&l.c()},l(s){t=N(s,"DIV",{});var o=B(t);l&&l.l(o),o.forEach(d)},m(s,o){p(s,t,o),l&&l.m(t,null),e=!0},p(s,o){l&&l.p&&(!e||o&16)&&et(l,n,s,s[4],e?st(n,s[4],o,null):nt(s[4]),null)},i(s){e||(_(l,s),e=!0)},o(s){g(l,s),e=!1},d(s){s&&d(t),l&&l.d(s)}}}function Zt(i){let t,e,n=i[1]===i[0]&&yt(i);return{c(){n&&n.c(),t=J()},l(l){n&&n.l(l),t=J()},m(l,s){n&&n.m(l,s),p(l,t,s),e=!0},p(l,[s]){l[1]===l[0]?n?(n.p(l,s),s&3&&_(n,1)):(n=yt(l),n.c(),_(n,1),n.m(t.parentNode,t)):n&&(it(),g(n,1,1,()=>{n=null}),at())},i(l){e||(_(n),e=!0)},o(l){g(n),e=!1},d(l){l&&d(t),n&&n.d(l)}}}function zt(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{title:o}=t,{id:r}=t,a=K("selectedTab");rt(i,a,f=>e(1,n=f));const u=K("tabTitles");return u.registerTab(r,o),Nt(()=>{u.unregisterTab(r)}),i.$$set=f=>{"title"in f&&e(3,o=f.title),"id"in f&&e(0,r=f.id),"$$scope"in f&&e(4,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&9&&u.updateTitle(r,o)},[r,n,a,o,s,l]}class Y extends V{constructor(t){super(),M(this,t,zt,Zt,R,{title:3,id:0})}}function Ft(i){let t;return{c(){t=L("Hey hey")},l(e){t=S(e,"Hey hey")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function It(i){let t,e,n,l;return t=new Y({props:{id:"2",title:"secret tab 2",$$slots:{default:[Gt]},$$scope:{ctx:i}}}),n=new Y({props:{id:"3",title:"secret tab 3",$$slots:{default:[Jt]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=I(),w(n.$$.fragment)},l(s){v(t.$$.fragment,s),e=C(s),v(n.$$.fragment,s)},m(s,o){k(t,s,o),p(s,e,o),k(n,s,o),l=!0},i(s){l||(_(t.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),g(n.$$.fragment,s),l=!1},d(s){s&&d(e),y(t,s),y(n,s)}}}function Gt(i){let t;return{c(){t=L("Logged in content 1")},l(e){t=S(e,"Logged in content 1")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Jt(i){let t;return{c(){t=L("Logged in content 2")},l(e){t=S(e,"Logged in content 2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Kt(i){let t,e;return{c(){t=L("info for "),e=L(i[1])},l(n){t=S(n,"info for "),e=S(n,i[1])},m(n,l){p(n,t,l),p(n,e,l)},p(n,l){l&2&&lt(e,n[1])},d(n){n&&(d(t),d(e))}}}function Qt(i){let t,e,n,l,s;t=new Y({props:{id:"1",title:"tab 1",$$slots:{default:[Ft]},$$scope:{ctx:i}}});let o=i[0]&&It(i);return l=new Y({props:{id:"4",title:i[1],$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=I(),o&&o.c(),n=I(),w(l.$$.fragment)},l(r){v(t.$$.fragment,r),e=C(r),o&&o.l(r),n=C(r),v(l.$$.fragment,r)},m(r,a){k(t,r,a),p(r,e,a),o&&o.m(r,a),p(r,n,a),k(l,r,a),s=!0},p(r,a){const u={};a&128&&(u.$$scope={dirty:a,ctx:r}),t.$set(u),r[0]?o?a&1&&_(o,1):(o=It(r),o.c(),_(o,1),o.m(n.parentNode,n)):o&&(it(),g(o,1,1,()=>{o=null}),at());const f={};a&2&&(f.title=r[1]),a&130&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){s||(_(t.$$.fragment,r),_(o),_(l.$$.fragment,r),s=!0)},o(r){g(t.$$.fragment,r),g(o),g(l.$$.fragment,r),s=!1},d(r){r&&(d(e),d(n)),y(t,r),o&&o.d(r),y(l,r)}}}function Wt(i){let t,e,n,l,s,o,r="Change tab",a,u,f,b,h,D;function P(m){i[6](m)}let H={$$slots:{default:[Qt]},$$scope:{ctx:i}};return i[2]!==void 0&&(H.selectedTab=i[2]),u=new Xt({props:H}),Pt.push(()=>Ot(u,"selectedTab",P)),{c(){t=j("div"),e=j("input"),n=I(),l=j("input"),s=I(),o=j("button"),o.textContent=r,a=I(),w(u.$$.fragment),this.h()},l(m){t=N(m,"DIV",{});var $=B(t);e=N($,"INPUT",{type:!0}),n=C($),l=N($,"INPUT",{type:!0}),$.forEach(d),s=C(m),o=N(m,"BUTTON",{["data-svelte-h"]:!0}),At(o)!=="svelte-1ak5lnb"&&(o.textContent=r),a=C(m),v(u.$$.fragment,m),this.h()},h(){X(e,"type","checkbox"),X(l,"type","text")},m(m,$){p(m,t,$),U(t,e),e.checked=i[0],U(t,n),U(t,l),Q(l,i[1]),p(m,s,$),p(m,o,$),p(m,a,$),k(u,m,$),b=!0,h||(D=[O(e,"change",i[3]),O(l,"input",i[4]),O(o,"click",i[5])],h=!0)},p(m,[$]){$&1&&(e.checked=m[0]),$&2&&l.value!==m[1]&&Q(l,m[1]);const A={};$&131&&(A.$$scope={dirty:$,ctx:m}),!f&&$&4&&(f=!0,A.selectedTab=m[2],Et(()=>f=!1)),u.$set(A)},i(m){b||(_(u.$$.fragment,m),b=!0)},o(m){g(u.$$.fragment,m),b=!1},d(m){m&&(d(t),d(s),d(o),d(a)),y(u,m),h=!1,Ut(D)}}}function Yt(i,t,e){let n,l="Henrik",s="2";function o(){n=this.checked,e(0,n)}function r(){l=this.value,e(1,l)}const a=()=>e(2,s="4");function u(f){s=f,e(2,s)}return[n,l,s,o,r,a,u]}class ft extends V{constructor(t){super(),M(this,t,Yt,Wt,R,{})}}const xt=`<script>\r
	import Tabs from "./Tabs.svelte";\r
	import Tab from "./Tab.svelte";\r
	let isLoggedIn;\r
	let username = "Henrik";\r
	let selectedTab = "2";\r
<\/script>\r
\r
<div>\r
	<input type="checkbox" bind:checked={isLoggedIn} />\r
	<input type="text" bind:value={username} />\r
</div>\r
\r
<button on:click={() => (selectedTab = "4")}>Change tab</button>\r
\r
<Tabs bind:selectedTab>\r
	<Tab id="1" title="tab 1">Hey hey</Tab>\r
	{#if isLoggedIn}\r
		<Tab id="2" title="secret tab 2">Logged in content 1</Tab>\r
		<Tab id="3" title="secret tab 3">Logged in content 2</Tab>\r
	{/if}\r
	<Tab id="4" title={username}>info for {username}</Tab>\r
</Tabs>\r
<style>\r
</style>\r
`,te=`<script>\r
	import { setContext } from "svelte";\r
	import { writable } from "svelte/store";\r
	// we want to be able to view one tab at a time\r
	export let selectedTab = "1";\r
	let selectedTabStore = writable(selectedTab);\r
	$: $selectedTabStore = selectedTab;\r
	// for making the bind: work\r
	$: updateProps($selectedTabStore);\r
\r
	function updateProps(value) {\r
		selectedTab = value;\r
	}\r
\r
	setContext("selectedTab", selectedTabStore);\r
\r
	let titles = {};\r
\r
	setContext("tabTitles", {\r
		registerTab(id, title) {\r
			titles[id] = { id, title };\r
			titles = titles;\r
			console.log(titles);\r
		},\r
		updateTitle(id, title) {\r
			titles[id].title = title;\r
		},\r
		unregisterTab(id) {\r
			delete titles[id];\r
			titles = titles;\r
		},\r
	});\r
<\/script>\r
\r
<div>\r
	{#each Object.values(titles) as { id, title }}\r
		<!-- not reactive yet because context is not reactive across components, we need a store as well -->\r
		<button class:selected={$selectedTabStore === id} on:click={() => ($selectedTabStore = id)}\r
			>{title}</button>\r
	{/each}\r
</div>\r
\r
<slot />\r
\r
<style>\r
	button.selected {\r
		background: black;\r
		color: white;\r
	}\r
</style>\r
`,ee=`<script>\r
	import { onDestroy } from "svelte";\r
	import { getContext } from "svelte";\r
	export let title;\r
	export let id;\r
	let selectedTab = getContext("selectedTab");\r
	const tabTitles = getContext("tabTitles");\r
\r
  // for making the title reactive\r
	$: tabTitles.updateTitle(id, title);\r
\r
	// register yourself when you are created, unregister when you are destroyed\r
	tabTitles.registerTab(id, title);\r
\r
	onDestroy(() => {\r
		tabTitles.unregisterTab(id);\r
	});\r
	// export let selectedTab;\r
<\/script>\r
\r
{#if $selectedTab === id}\r
	<div>\r
		<slot />\r
	</div>\r
{/if}\r
<style>\r
</style>\r
`;function Ct(i,t,e){const n=i.slice();return n[8]=t[e].id,n[9]=t[e].title,n}function Lt(i){let t,e=i[9]+"",n,l,s;function o(){return i[6](i[8])}return{c(){t=j("button"),n=L(e),this.h()},l(r){t=N(r,"BUTTON",{class:!0});var a=B(t);n=S(a,e),a.forEach(d),this.h()},h(){X(t,"class","svelte-5hceud"),G(t,"selected",i[0]===i[8])},m(r,a){p(r,t,a),U(t,n),l||(s=O(t,"click",o),l=!0)},p(r,a){i=r,a&2&&e!==(e=i[9]+"")&&lt(n,e),a&3&&G(t,"selected",i[0]===i[8])},d(r){r&&d(t),l=!1,s()}}}function ne(i){let t,e,n,l=W(i[1]),s=[];for(let a=0;a<l.length;a+=1)s[a]=Lt(Ct(i,l,a));const o=i[5].default,r=tt(o,i,i[4],null);return{c(){t=j("div");for(let a=0;a<s.length;a+=1)s[a].c();e=I(),r&&r.c()},l(a){t=N(a,"DIV",{});var u=B(t);for(let f=0;f<s.length;f+=1)s[f].l(u);u.forEach(d),e=C(a),r&&r.l(a)},m(a,u){p(a,t,u);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);p(a,e,u),r&&r.m(a,u),n=!0},p(a,[u]){if(u&3){l=W(a[1]);let f;for(f=0;f<l.length;f+=1){const b=Ct(a,l,f);s[f]?s[f].p(b,u):(s[f]=Lt(b),s[f].c(),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=l.length}r&&r.p&&(!n||u&16)&&et(r,o,a,a[4],n?st(o,a[4],u,null):nt(a[4]),null)},i(a){n||(_(r,a),n=!0)},o(a){g(r,a),n=!1},d(a){a&&(d(t),d(e)),jt(s,a),r&&r.d(a)}}}function se(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{selectedTab:o="1"}=t,r=Rt(o);rt(i,r,b=>e(0,n=b));function a(b){e(3,o=b)}z("selectedTab",r);let u=[];z("tabTitles",{registerTab(b,h){e(1,u=[...u,{id:b,title:h}].sort((D,P)=>D.id-P.id))},updateTitle(b,h){const D=u.findIndex(P=>P.id===b);e(1,u[D].title=h,u)},unregisterTab(b){const h=u.findIndex(D=>D.id===b);h>-1&&(u.splice(h,1),e(1,u))}});const f=b=>F(r,n=b,n);return i.$$set=b=>{"selectedTab"in b&&e(3,o=b.selectedTab),"$$scope"in b&&e(4,s=b.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&F(r,n=o,n),i.$$.dirty&1&&a(n)},[n,u,r,o,s,l,f]}class re extends V{constructor(t){super(),M(this,t,se,ne,R,{selectedTab:3})}}function St(i){let t,e;const n=i[5].default,l=tt(n,i,i[4],null);return{c(){t=j("div"),l&&l.c()},l(s){t=N(s,"DIV",{});var o=B(t);l&&l.l(o),o.forEach(d)},m(s,o){p(s,t,o),l&&l.m(t,null),e=!0},p(s,o){l&&l.p&&(!e||o&16)&&et(l,n,s,s[4],e?st(n,s[4],o,null):nt(s[4]),null)},i(s){e||(_(l,s),e=!0)},o(s){g(l,s),e=!1},d(s){s&&d(t),l&&l.d(s)}}}function le(i){let t,e,n=i[1]===i[0]&&St(i);return{c(){n&&n.c(),t=J()},l(l){n&&n.l(l),t=J()},m(l,s){n&&n.m(l,s),p(l,t,s),e=!0},p(l,[s]){l[1]===l[0]?n?(n.p(l,s),s&3&&_(n,1)):(n=St(l),n.c(),_(n,1),n.m(t.parentNode,t)):n&&(it(),g(n,1,1,()=>{n=null}),at())},i(l){e||(_(n),e=!0)},o(l){g(n),e=!1},d(l){l&&d(t),n&&n.d(l)}}}function ie(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{title:o}=t,{id:r}=t,a=K("selectedTab");rt(i,a,f=>e(1,n=f));const u=K("tabTitles");return u.registerTab(r,o),Nt(()=>{u.unregisterTab(r)}),i.$$set=f=>{"title"in f&&e(3,o=f.title),"id"in f&&e(0,r=f.id),"$$scope"in f&&e(4,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&9&&u.updateTitle(r,o)},[r,n,a,o,s,l]}class x extends V{constructor(t){super(),M(this,t,ie,le,R,{title:3,id:0})}}function ae(i){let t;return{c(){t=L("Hey hey")},l(e){t=S(e,"Hey hey")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Dt(i){let t,e,n,l;return t=new x({props:{id:"2",title:"secret tab 2",$$slots:{default:[oe]},$$scope:{ctx:i}}}),n=new x({props:{id:"3",title:"secret tab 3",$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=I(),w(n.$$.fragment)},l(s){v(t.$$.fragment,s),e=C(s),v(n.$$.fragment,s)},m(s,o){k(t,s,o),p(s,e,o),k(n,s,o),l=!0},i(s){l||(_(t.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),g(n.$$.fragment,s),l=!1},d(s){s&&d(e),y(t,s),y(n,s)}}}function oe(i){let t;return{c(){t=L("Logged in content 1")},l(e){t=S(e,"Logged in content 1")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function fe(i){let t;return{c(){t=L("Logged in content 2")},l(e){t=S(e,"Logged in content 2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ue(i){let t,e;return{c(){t=L("info for "),e=L(i[1])},l(n){t=S(n,"info for "),e=S(n,i[1])},m(n,l){p(n,t,l),p(n,e,l)},p(n,l){l&2&&lt(e,n[1])},d(n){n&&(d(t),d(e))}}}function ce(i){let t,e,n,l,s;t=new x({props:{id:"1",title:"tab 1",$$slots:{default:[ae]},$$scope:{ctx:i}}});let o=i[0]&&Dt(i);return l=new x({props:{id:"4",title:i[1],$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=I(),o&&o.c(),n=I(),w(l.$$.fragment)},l(r){v(t.$$.fragment,r),e=C(r),o&&o.l(r),n=C(r),v(l.$$.fragment,r)},m(r,a){k(t,r,a),p(r,e,a),o&&o.m(r,a),p(r,n,a),k(l,r,a),s=!0},p(r,a){const u={};a&128&&(u.$$scope={dirty:a,ctx:r}),t.$set(u),r[0]?o?a&1&&_(o,1):(o=Dt(r),o.c(),_(o,1),o.m(n.parentNode,n)):o&&(it(),g(o,1,1,()=>{o=null}),at());const f={};a&2&&(f.title=r[1]),a&130&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){s||(_(t.$$.fragment,r),_(o),_(l.$$.fragment,r),s=!0)},o(r){g(t.$$.fragment,r),g(o),g(l.$$.fragment,r),s=!1},d(r){r&&(d(e),d(n)),y(t,r),o&&o.d(r),y(l,r)}}}function de(i){let t,e,n,l,s,o,r="Change tab",a,u,f,b,h,D;function P(m){i[6](m)}let H={$$slots:{default:[ce]},$$scope:{ctx:i}};return i[2]!==void 0&&(H.selectedTab=i[2]),u=new re({props:H}),Pt.push(()=>Ot(u,"selectedTab",P)),{c(){t=j("div"),e=j("input"),n=I(),l=j("input"),s=I(),o=j("button"),o.textContent=r,a=I(),w(u.$$.fragment),this.h()},l(m){t=N(m,"DIV",{});var $=B(t);e=N($,"INPUT",{type:!0}),n=C($),l=N($,"INPUT",{type:!0}),$.forEach(d),s=C(m),o=N(m,"BUTTON",{["data-svelte-h"]:!0}),At(o)!=="svelte-1ak5lnb"&&(o.textContent=r),a=C(m),v(u.$$.fragment,m),this.h()},h(){X(e,"type","checkbox"),X(l,"type","text")},m(m,$){p(m,t,$),U(t,e),e.checked=i[0],U(t,n),U(t,l),Q(l,i[1]),p(m,s,$),p(m,o,$),p(m,a,$),k(u,m,$),b=!0,h||(D=[O(e,"change",i[3]),O(l,"input",i[4]),O(o,"click",i[5])],h=!0)},p(m,[$]){$&1&&(e.checked=m[0]),$&2&&l.value!==m[1]&&Q(l,m[1]);const A={};$&131&&(A.$$scope={dirty:$,ctx:m}),!f&&$&4&&(f=!0,A.selectedTab=m[2],Et(()=>f=!1)),u.$set(A)},i(m){b||(_(u.$$.fragment,m),b=!0)},o(m){g(u.$$.fragment,m),b=!1},d(m){m&&(d(t),d(s),d(o),d(a)),y(u,m),h=!1,Ut(D)}}}function be(i,t,e){let n,l="Henrik",s="2";function o(){n=this.checked,e(0,n)}function r(){l=this.value,e(1,l)}const a=()=>e(2,s="4");function u(f){s=f,e(2,s)}return[n,l,s,o,r,a,u]}class ut extends V{constructor(t){super(),M(this,t,be,de,R,{})}}const me=`<script>\r
	import Tabs2 from "./Tabs2.svelte";\r
	import Tab2 from "./Tab2.svelte";\r
	let isLoggedIn;\r
	let username = "Henrik";\r
	let selectedTab = "2";\r
<\/script>\r
\r
<div>\r
	<input type="checkbox" bind:checked={isLoggedIn} />\r
	<input type="text" bind:value={username} />\r
</div>\r
\r
<button on:click={() => (selectedTab = "4")}>Change tab</button>\r
\r
<Tabs2 bind:selectedTab>\r
	<Tab2 id="1" title="tab 1">Hey hey</Tab2>\r
	{#if isLoggedIn}\r
		<Tab2 id="2" title="secret tab 2">Logged in content 1</Tab2>\r
		<Tab2 id="3" title="secret tab 3">Logged in content 2</Tab2>\r
	{/if}\r
	<Tab2 id="4" title={username}>info for {username}</Tab2>\r
</Tabs2>\r
\r
<style>\r
</style>\r
`,pe=`<script>\r
	import { setContext } from "svelte";\r
	import { writable } from "svelte/store";\r
	// we want to be able to view one tab at a time\r
	export let selectedTab = "1";\r
	let selectedTabStore = writable(selectedTab);\r
	$: $selectedTabStore = selectedTab;\r
	// for making the bind: work\r
	$: updateProps($selectedTabStore);\r
\r
	function updateProps(value) {\r
		selectedTab = value;\r
	}\r
\r
	setContext("selectedTab", selectedTabStore);\r
\r
	let titles = [];\r
	setContext("tabTitles", {\r
		registerTab(id, title) {\r
			// titles.push({ id, title });\r
			titles = [...titles, { id, title }].sort((a, b) => a.id - b.id);\r
		},\r
		updateTitle(id, title) {\r
			const tabIndex = titles.findIndex((title) => title.id === id);\r
			titles[tabIndex].title = title;\r
		},\r
		unregisterTab(id) {\r
			const tabIndex = titles.findIndex((title) => title.id === id);\r
			if (tabIndex > -1) {\r
				titles.splice(tabIndex, 1);\r
				titles = titles;\r
			}\r
		},\r
	});\r
<\/script>\r
\r
<div>\r
	{#each titles as { id, title }}\r
		<!-- not reactive yet because context is not reactive across components, we need a store as well -->\r
		<button class:selected={$selectedTabStore === id} on:click={() => ($selectedTabStore = id)}\r
			>{title}</button>\r
	{/each}\r
</div>\r
\r
<slot />\r
\r
<style>\r
	button.selected {\r
		background: black;\r
		color: white;\r
	}\r
</style>\r
`,$e=`<script>\r
	import { onDestroy } from "svelte";\r
	import { getContext } from "svelte";\r
	export let title;\r
	export let id;\r
	let selectedTab = getContext("selectedTab");\r
	const tabTitles = getContext("tabTitles");\r
\r
  // for making the title reactive\r
	$: tabTitles.updateTitle(id, title);\r
\r
	// register yourself when you are created, unregister when you are destroyed\r
	tabTitles.registerTab(id, title);\r
\r
	onDestroy(() => {\r
		tabTitles.unregisterTab(id);\r
	});\r
	// export let selectedTab;\r
<\/script>\r
\r
{#if $selectedTab === id}\r
	<div>\r
		<slot />\r
	</div>\r
{/if}\r
<style>\r
</style>\r
`;function _e(i){return[]}class ge extends V{constructor(t){super(),M(this,t,_e,null,R,{})}}const Te=`<script>\r
	// to hide errors\r
	let Tabs;\r
	let Tab;\r
	let isLoggedIn;\r
	let username;\r
<\/script>\r
\r
<!-- \r
\r
  <Tabs>\r
    <Tab title="tab 1">Hey hey</Tab>\r
    {#if isLoggedIn}\r
		<Tab title="secret tab 2">Logged in content 1</Tab>\r
		<Tab title="secret tab 3">Logged in content 2</Tab>\r
    {/if}\r
    <Tab title={username}>info for {username}</Tab>\r
  </Tabs>\r
-->\r
<!-- alternative way, but we think just having an if statement to show or hide them feels better -->\r
\r
<!-- <Tab shouldShow={isLoggedIn}>Tab content</Tab> -->\r
<style>\r
</style>\r
`;function he(i){let t;return{c(){t=L("He're were going to make a Tabs component for displaying tabs. I already made a simple tab system myself for displaying the code but it could probably be improved.")},l(e){t=S(e,"He're were going to make a Tabs component for displaying tabs. I already made a simple tab system myself for displaying the code but it could probably be improved.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function we(i){let t;return{c(){t=L("It can be good to think about how the user is going to use our component instead of just starting blindly.")},l(e){t=S(e,"It can be good to think about how the user is going to use our component instead of just starting blindly.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ve(i){let t;return{c(){t=L("This looks fine! Let's start building it.")},l(e){t=S(e,"This looks fine! Let's start building it.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ke(i){let t;return{c(){t=L("2")},l(e){t=S(e,"2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ye(i){let t;return{c(){t=L("3")},l(e){t=S(e,"3")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Ie(i){let t,e,n,l,s,o;return e=new wt({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}}),l=new wt({props:{$$slots:{default:[ye]},$$scope:{ctx:i}}}),{c(){t=L("At first the login tabs ended up at the end even though they had IDs of "),w(e.$$.fragment),n=L(" and "),w(l.$$.fragment),s=L(".")},l(r){t=S(r,"At first the login tabs ended up at the end even though they had IDs of "),v(e.$$.fragment,r),n=S(r," and "),v(l.$$.fragment,r),s=S(r,".")},m(r,a){p(r,t,a),k(e,r,a),p(r,n,a),k(l,r,a),p(r,s,a),o=!0},p(r,a){const u={};a&2&&(u.$$scope={dirty:a,ctx:r}),e.$set(u);const f={};a&2&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i(r){o||(_(e.$$.fragment,r),_(l.$$.fragment,r),o=!0)},o(r){g(e.$$.fragment,r),g(l.$$.fragment,r),o=!1},d(r){r&&(d(t),d(n),d(s)),y(e,r),y(l,r)}}}function Ce(i){let t;return{c(){t=L("I solved it by using an object instead which works but from my understanding it is not guaranteed to work since objects are not ordered.")},l(e){t=S(e,"I solved it by using an object instead which works but from my understanding it is not guaranteed to work since objects are not ordered.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Le(i){let t;return{c(){t=L("Let's try fixing the array implementation instead:")},l(e){t=S(e,"Let's try fixing the array implementation instead:")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Se(i){let t;return{c(){t=L("There we go! In this example we used slots, context, reactive context using a store, bind and reactive statements to end up with a fairly simple store.")},l(e){t=S(e,"There we go! In this example we used slots, context, reactive context using a store, bind and reactive statements to end up with a fairly simple store.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function De(i){let t,e,n,l,s,o,r,a,u,f,b,h,D,P,H,m,$,A,E,Z;return t=new q({props:{$$slots:{default:[he]},$$scope:{ctx:i}}}),n=new q({props:{$$slots:{default:[we]},$$scope:{ctx:i}}}),s=new ot({props:{name:[{name:"DesigningTabsComponent",comp:ge,raw:Te,text:""}]}}),r=new q({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),u=new ot({props:{name:[{name:"App",comp:ft,raw:xt,text:""},{name:"Tabs",comp:ft,raw:te,text:""},{name:"Tab",comp:ft,raw:ee,text:""}]}}),b=new q({props:{$$slots:{default:[Ie]},$$scope:{ctx:i}}}),D=new q({props:{$$slots:{default:[Ce]},$$scope:{ctx:i}}}),H=new q({props:{$$slots:{default:[Le]},$$scope:{ctx:i}}}),$=new ot({props:{name:[{name:"Tabs2",comp:ut,raw:pe,text:"Instead of pushing the value directly we sort them by their ID when assigning using the spread operator. As a bonus since we're assigning we don't need the ugly titles = titles either. Credits to <strong>Believe Lody</strong> for this solution!"},{name:"App2",comp:ut,raw:me,text:""},{name:"Tab2",comp:ut,raw:$e,text:""}]}}),E=new q({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=I(),w(n.$$.fragment),l=I(),w(s.$$.fragment),o=I(),w(r.$$.fragment),a=I(),w(u.$$.fragment),f=I(),w(b.$$.fragment),h=I(),w(D.$$.fragment),P=I(),w(H.$$.fragment),m=I(),w($.$$.fragment),A=I(),w(E.$$.fragment)},l(c){v(t.$$.fragment,c),e=C(c),v(n.$$.fragment,c),l=C(c),v(s.$$.fragment,c),o=C(c),v(r.$$.fragment,c),a=C(c),v(u.$$.fragment,c),f=C(c),v(b.$$.fragment,c),h=C(c),v(D.$$.fragment,c),P=C(c),v(H.$$.fragment,c),m=C(c),v($.$$.fragment,c),A=C(c),v(E.$$.fragment,c)},m(c,T){k(t,c,T),p(c,e,T),k(n,c,T),p(c,l,T),k(s,c,T),p(c,o,T),k(r,c,T),p(c,a,T),k(u,c,T),p(c,f,T),k(b,c,T),p(c,h,T),k(D,c,T),p(c,P,T),k(H,c,T),p(c,m,T),k($,c,T),p(c,A,T),k(E,c,T),Z=!0},p(c,T){const dt={};T&2&&(dt.$$scope={dirty:T,ctx:c}),t.$set(dt);const bt={};T&2&&(bt.$$scope={dirty:T,ctx:c}),n.$set(bt);const mt={};T&2&&(mt.$$scope={dirty:T,ctx:c}),r.$set(mt);const pt={};T&2&&(pt.$$scope={dirty:T,ctx:c}),b.$set(pt);const $t={};T&2&&($t.$$scope={dirty:T,ctx:c}),D.$set($t);const _t={};T&2&&(_t.$$scope={dirty:T,ctx:c}),H.$set(_t);const gt={};T&2&&(gt.$$scope={dirty:T,ctx:c}),E.$set(gt)},i(c){Z||(_(t.$$.fragment,c),_(n.$$.fragment,c),_(s.$$.fragment,c),_(r.$$.fragment,c),_(u.$$.fragment,c),_(b.$$.fragment,c),_(D.$$.fragment,c),_(H.$$.fragment,c),_($.$$.fragment,c),_(E.$$.fragment,c),Z=!0)},o(c){g(t.$$.fragment,c),g(n.$$.fragment,c),g(s.$$.fragment,c),g(r.$$.fragment,c),g(u.$$.fragment,c),g(b.$$.fragment,c),g(D.$$.fragment,c),g(H.$$.fragment,c),g($.$$.fragment,c),g(E.$$.fragment,c),Z=!1},d(c){c&&(d(e),d(l),d(o),d(a),d(f),d(h),d(P),d(m),d(A)),y(t,c),y(n,c),y(s,c),y(r,c),y(u,c),y(b,c),y(D,c),y(H,c),y($,c),y(E,c)}}}function He(i){let t,e;const n=[i[0],Ht];let l={$$slots:{default:[De]},$$scope:{ctx:i}};for(let s=0;s<n.length;s+=1)l=ct(l,n[s]);return t=new Vt({props:l}),{c(){w(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,o){k(t,s,o),e=!0},p(s,[o]){const r=o&1?Bt(n,[o&1&&ht(s[0]),o&0&&ht(Ht)]):{};o&2&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){g(t.$$.fragment,s),e=!1},d(s){y(t,s)}}}const Ht={title:"Tabs",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-23T00:00:00.000Z",layout:"notes"};function je(i,t,e){return i.$$set=n=>{e(0,t=ct(ct({},t),Tt(n)))},t=Tt(t),[t]}class Ve extends V{constructor(t){super(),M(this,t,je,He,R,{})}}export{Ve as default,Ht as metadata};
