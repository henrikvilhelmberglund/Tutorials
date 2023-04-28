import{S as V,i as B,s as M,C as x,k as P,a as C,l as j,m as R,h as d,c as S,b as p,E as tt,F as et,G as nt,g as _,d as g,N as Ht,I as st,am as G,an as J,q as h,r as w,n as z,Q as K,D as A,R as O,u as rt,e as Q,v as lt,f as it,al as Z,aa as Nt,w as Pt,a5 as jt,y as k,z as y,a4 as W,A as I,a6 as Et,B as L,V as At,J as ut,K as Ut,L as gt,M as Tt}from"./index.5815ca79.js";import{M as Ot,P as q}from"./mdsvex-layout-notes.7536afaf.js";import{S as ot}from"./ShowMany.2af9ac15.js";import{w as Rt}from"./index.522bc5dc.js";import{S as ht}from"./Strong.b8abec16.js";function wt(i,t,e){const n=i.slice();return n[8]=t[e].id,n[9]=t[e].title,n}function vt(i){let t,e=i[9]+"",n,l,s;function a(){return i[6](i[8])}return{c(){t=P("button"),n=h(e),this.h()},l(r){t=j(r,"BUTTON",{class:!0});var o=R(t);n=w(o,e),o.forEach(d),this.h()},h(){z(t,"class","svelte-5hceud"),K(t,"selected",i[0]===i[8])},m(r,o){p(r,t,o),A(t,n),l||(s=O(t,"click",a),l=!0)},p(r,o){i=r,o&2&&e!==(e=i[9]+"")&&rt(n,e),o&3&&K(t,"selected",i[0]===i[8])},d(r){r&&d(t),l=!1,s()}}}function Vt(i){let t,e,n,l=Object.values(i[1]),s=[];for(let o=0;o<l.length;o+=1)s[o]=vt(wt(i,l,o));const a=i[5].default,r=x(a,i,i[4],null);return{c(){t=P("div");for(let o=0;o<s.length;o+=1)s[o].c();e=C(),r&&r.c()},l(o){t=j(o,"DIV",{});var u=R(t);for(let f=0;f<s.length;f+=1)s[f].l(u);u.forEach(d),e=S(o),r&&r.l(o)},m(o,u){p(o,t,u);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);p(o,e,u),r&&r.m(o,u),n=!0},p(o,[u]){if(u&3){l=Object.values(o[1]);let f;for(f=0;f<l.length;f+=1){const m=wt(o,l,f);s[f]?s[f].p(m,u):(s[f]=vt(m),s[f].c(),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=l.length}r&&r.p&&(!n||u&16)&&tt(r,a,o,o[4],n?nt(a,o[4],u,null):et(o[4]),null)},i(o){n||(_(r,o),n=!0)},o(o){g(r,o),n=!1},d(o){o&&d(t),Ht(s,o),o&&d(e),r&&r.d(o)}}}function Bt(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{selectedTab:a="1"}=t,r=Rt(a);st(i,r,m=>e(0,n=m));function o(m){e(3,a=m)}G("selectedTab",r);let u={};G("tabTitles",{registerTab(m,v){e(1,u[m]={id:m,title:v},u),e(1,u),console.log(u)},updateTitle(m,v){e(1,u[m].title=v,u)},unregisterTab(m){delete u[m],e(1,u)}});const f=m=>J(r,n=m,n);return i.$$set=m=>{"selectedTab"in m&&e(3,a=m.selectedTab),"$$scope"in m&&e(4,s=m.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&J(r,n=a,n),i.$$.dirty&1&&o(n)},[n,u,r,a,s,l,f]}class Mt extends V{constructor(t){super(),B(this,t,Bt,Vt,M,{selectedTab:3})}}function kt(i){let t,e;const n=i[5].default,l=x(n,i,i[4],null);return{c(){t=P("div"),l&&l.c()},l(s){t=j(s,"DIV",{});var a=R(t);l&&l.l(a),a.forEach(d)},m(s,a){p(s,t,a),l&&l.m(t,null),e=!0},p(s,a){l&&l.p&&(!e||a&16)&&tt(l,n,s,s[4],e?nt(n,s[4],a,null):et(s[4]),null)},i(s){e||(_(l,s),e=!0)},o(s){g(l,s),e=!1},d(s){s&&d(t),l&&l.d(s)}}}function qt(i){let t,e,n=i[1]===i[0]&&kt(i);return{c(){n&&n.c(),t=Q()},l(l){n&&n.l(l),t=Q()},m(l,s){n&&n.m(l,s),p(l,t,s),e=!0},p(l,[s]){l[1]===l[0]?n?(n.p(l,s),s&3&&_(n,1)):(n=kt(l),n.c(),_(n,1),n.m(t.parentNode,t)):n&&(lt(),g(n,1,1,()=>{n=null}),it())},i(l){e||(_(n),e=!0)},o(l){g(n),e=!1},d(l){n&&n.d(l),l&&d(t)}}}function zt(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{title:a}=t,{id:r}=t,o=Z("selectedTab");st(i,o,f=>e(1,n=f));const u=Z("tabTitles");return u.registerTab(r,a),Nt(()=>{u.unregisterTab(r)}),i.$$set=f=>{"title"in f&&e(3,a=f.title),"id"in f&&e(0,r=f.id),"$$scope"in f&&e(4,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&9&&u.updateTitle(r,a)},[r,n,o,a,s,l]}class X extends V{constructor(t){super(),B(this,t,zt,qt,M,{title:3,id:0})}}function Ft(i){let t;return{c(){t=h("Hey hey")},l(e){t=w(e,"Hey hey")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function yt(i){let t,e,n,l;return t=new X({props:{id:"2",title:"secret tab 2",$$slots:{default:[Gt]},$$scope:{ctx:i}}}),n=new X({props:{id:"3",title:"secret tab 3",$$slots:{default:[Jt]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment),e=C(),k(n.$$.fragment)},l(s){y(t.$$.fragment,s),e=S(s),y(n.$$.fragment,s)},m(s,a){I(t,s,a),p(s,e,a),I(n,s,a),l=!0},i(s){l||(_(t.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),g(n.$$.fragment,s),l=!1},d(s){L(t,s),s&&d(e),L(n,s)}}}function Gt(i){let t;return{c(){t=h("Logged in content 1")},l(e){t=w(e,"Logged in content 1")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Jt(i){let t;return{c(){t=h("Logged in content 2")},l(e){t=w(e,"Logged in content 2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Kt(i){let t,e;return{c(){t=h("info for "),e=h(i[1])},l(n){t=w(n,"info for "),e=w(n,i[1])},m(n,l){p(n,t,l),p(n,e,l)},p(n,l){l&2&&rt(e,n[1])},d(n){n&&d(t),n&&d(e)}}}function Qt(i){let t,e,n,l,s;t=new X({props:{id:"1",title:"tab 1",$$slots:{default:[Ft]},$$scope:{ctx:i}}});let a=i[0]&&yt(i);return l=new X({props:{id:"4",title:i[1],$$slots:{default:[Kt]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment),e=C(),a&&a.c(),n=C(),k(l.$$.fragment)},l(r){y(t.$$.fragment,r),e=S(r),a&&a.l(r),n=S(r),y(l.$$.fragment,r)},m(r,o){I(t,r,o),p(r,e,o),a&&a.m(r,o),p(r,n,o),I(l,r,o),s=!0},p(r,o){const u={};o&128&&(u.$$scope={dirty:o,ctx:r}),t.$set(u),r[0]?a?o&1&&_(a,1):(a=yt(r),a.c(),_(a,1),a.m(n.parentNode,n)):a&&(lt(),g(a,1,1,()=>{a=null}),it());const f={};o&2&&(f.title=r[1]),o&130&&(f.$$scope={dirty:o,ctx:r}),l.$set(f)},i(r){s||(_(t.$$.fragment,r),_(a),_(l.$$.fragment,r),s=!0)},o(r){g(t.$$.fragment,r),g(a),g(l.$$.fragment,r),s=!1},d(r){L(t,r),r&&d(e),a&&a.d(r),r&&d(n),L(l,r)}}}function Zt(i){let t,e,n,l,s,a,r,o,u,f,m,v,D;function E(b){i[6](b)}let N={$$slots:{default:[Qt]},$$scope:{ctx:i}};return i[2]!==void 0&&(N.selectedTab=i[2]),u=new Mt({props:N}),Pt.push(()=>jt(u,"selectedTab",E)),{c(){t=P("div"),e=P("input"),n=C(),l=P("input"),s=C(),a=P("button"),r=h("Change tab"),o=C(),k(u.$$.fragment),this.h()},l(b){t=j(b,"DIV",{});var $=R(t);e=j($,"INPUT",{type:!0}),n=S($),l=j($,"INPUT",{type:!0}),$.forEach(d),s=S(b),a=j(b,"BUTTON",{});var H=R(a);r=w(H,"Change tab"),H.forEach(d),o=S(b),y(u.$$.fragment,b),this.h()},h(){z(e,"type","checkbox"),z(l,"type","text")},m(b,$){p(b,t,$),A(t,e),e.checked=i[0],A(t,n),A(t,l),W(l,i[1]),p(b,s,$),p(b,a,$),A(a,r),p(b,o,$),I(u,b,$),m=!0,v||(D=[O(e,"change",i[3]),O(l,"input",i[4]),O(a,"click",i[5])],v=!0)},p(b,[$]){$&1&&(e.checked=b[0]),$&2&&l.value!==b[1]&&W(l,b[1]);const H={};$&131&&(H.$$scope={dirty:$,ctx:b}),!f&&$&4&&(f=!0,H.selectedTab=b[2],Et(()=>f=!1)),u.$set(H)},i(b){m||(_(u.$$.fragment,b),m=!0)},o(b){g(u.$$.fragment,b),m=!1},d(b){b&&d(t),b&&d(s),b&&d(a),b&&d(o),L(u,b),v=!1,At(D)}}}function Wt(i,t,e){let n,l="Henrik",s="2";function a(){n=this.checked,e(0,n)}function r(){l=this.value,e(1,l)}const o=()=>e(2,s="4");function u(f){s=f,e(2,s)}return[n,l,s,a,r,o,u]}class at extends V{constructor(t){super(),B(this,t,Wt,Zt,M,{})}}const Xt=`<script>\r
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
`,Yt=`<script>\r
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
`,xt=`<script>\r
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
`;function It(i,t,e){const n=i.slice();return n[8]=t[e].id,n[9]=t[e].title,n}function Lt(i){let t,e=i[9]+"",n,l,s;function a(){return i[6](i[8])}return{c(){t=P("button"),n=h(e),this.h()},l(r){t=j(r,"BUTTON",{class:!0});var o=R(t);n=w(o,e),o.forEach(d),this.h()},h(){z(t,"class","svelte-5hceud"),K(t,"selected",i[0]===i[8])},m(r,o){p(r,t,o),A(t,n),l||(s=O(t,"click",a),l=!0)},p(r,o){i=r,o&2&&e!==(e=i[9]+"")&&rt(n,e),o&3&&K(t,"selected",i[0]===i[8])},d(r){r&&d(t),l=!1,s()}}}function te(i){let t,e,n,l=i[1],s=[];for(let o=0;o<l.length;o+=1)s[o]=Lt(It(i,l,o));const a=i[5].default,r=x(a,i,i[4],null);return{c(){t=P("div");for(let o=0;o<s.length;o+=1)s[o].c();e=C(),r&&r.c()},l(o){t=j(o,"DIV",{});var u=R(t);for(let f=0;f<s.length;f+=1)s[f].l(u);u.forEach(d),e=S(o),r&&r.l(o)},m(o,u){p(o,t,u);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);p(o,e,u),r&&r.m(o,u),n=!0},p(o,[u]){if(u&3){l=o[1];let f;for(f=0;f<l.length;f+=1){const m=It(o,l,f);s[f]?s[f].p(m,u):(s[f]=Lt(m),s[f].c(),s[f].m(t,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=l.length}r&&r.p&&(!n||u&16)&&tt(r,a,o,o[4],n?nt(a,o[4],u,null):et(o[4]),null)},i(o){n||(_(r,o),n=!0)},o(o){g(r,o),n=!1},d(o){o&&d(t),Ht(s,o),o&&d(e),r&&r.d(o)}}}function ee(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{selectedTab:a="1"}=t,r=Rt(a);st(i,r,m=>e(0,n=m));function o(m){e(3,a=m)}G("selectedTab",r);let u=[];G("tabTitles",{registerTab(m,v){e(1,u=[...u,{id:m,title:v}].sort((D,E)=>D.id-E.id))},updateTitle(m,v){const D=u.findIndex(E=>E.id===m);e(1,u[D].title=v,u)},unregisterTab(m){const v=u.findIndex(D=>D.id===m);v>-1&&(u.splice(v,1),e(1,u))}});const f=m=>J(r,n=m,n);return i.$$set=m=>{"selectedTab"in m&&e(3,a=m.selectedTab),"$$scope"in m&&e(4,s=m.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&J(r,n=a,n),i.$$.dirty&1&&o(n)},[n,u,r,a,s,l,f]}class ne extends V{constructor(t){super(),B(this,t,ee,te,M,{selectedTab:3})}}function Ct(i){let t,e;const n=i[5].default,l=x(n,i,i[4],null);return{c(){t=P("div"),l&&l.c()},l(s){t=j(s,"DIV",{});var a=R(t);l&&l.l(a),a.forEach(d)},m(s,a){p(s,t,a),l&&l.m(t,null),e=!0},p(s,a){l&&l.p&&(!e||a&16)&&tt(l,n,s,s[4],e?nt(n,s[4],a,null):et(s[4]),null)},i(s){e||(_(l,s),e=!0)},o(s){g(l,s),e=!1},d(s){s&&d(t),l&&l.d(s)}}}function se(i){let t,e,n=i[1]===i[0]&&Ct(i);return{c(){n&&n.c(),t=Q()},l(l){n&&n.l(l),t=Q()},m(l,s){n&&n.m(l,s),p(l,t,s),e=!0},p(l,[s]){l[1]===l[0]?n?(n.p(l,s),s&3&&_(n,1)):(n=Ct(l),n.c(),_(n,1),n.m(t.parentNode,t)):n&&(lt(),g(n,1,1,()=>{n=null}),it())},i(l){e||(_(n),e=!0)},o(l){g(n),e=!1},d(l){n&&n.d(l),l&&d(t)}}}function re(i,t,e){let n,{$$slots:l={},$$scope:s}=t,{title:a}=t,{id:r}=t,o=Z("selectedTab");st(i,o,f=>e(1,n=f));const u=Z("tabTitles");return u.registerTab(r,a),Nt(()=>{u.unregisterTab(r)}),i.$$set=f=>{"title"in f&&e(3,a=f.title),"id"in f&&e(0,r=f.id),"$$scope"in f&&e(4,s=f.$$scope)},i.$$.update=()=>{i.$$.dirty&9&&u.updateTitle(r,a)},[r,n,o,a,s,l]}class Y extends V{constructor(t){super(),B(this,t,re,se,M,{title:3,id:0})}}function le(i){let t;return{c(){t=h("Hey hey")},l(e){t=w(e,"Hey hey")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function St(i){let t,e,n,l;return t=new Y({props:{id:"2",title:"secret tab 2",$$slots:{default:[ie]},$$scope:{ctx:i}}}),n=new Y({props:{id:"3",title:"secret tab 3",$$slots:{default:[oe]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment),e=C(),k(n.$$.fragment)},l(s){y(t.$$.fragment,s),e=S(s),y(n.$$.fragment,s)},m(s,a){I(t,s,a),p(s,e,a),I(n,s,a),l=!0},i(s){l||(_(t.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){g(t.$$.fragment,s),g(n.$$.fragment,s),l=!1},d(s){L(t,s),s&&d(e),L(n,s)}}}function ie(i){let t;return{c(){t=h("Logged in content 1")},l(e){t=w(e,"Logged in content 1")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function oe(i){let t;return{c(){t=h("Logged in content 2")},l(e){t=w(e,"Logged in content 2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ae(i){let t,e;return{c(){t=h("info for "),e=h(i[1])},l(n){t=w(n,"info for "),e=w(n,i[1])},m(n,l){p(n,t,l),p(n,e,l)},p(n,l){l&2&&rt(e,n[1])},d(n){n&&d(t),n&&d(e)}}}function fe(i){let t,e,n,l,s;t=new Y({props:{id:"1",title:"tab 1",$$slots:{default:[le]},$$scope:{ctx:i}}});let a=i[0]&&St(i);return l=new Y({props:{id:"4",title:i[1],$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment),e=C(),a&&a.c(),n=C(),k(l.$$.fragment)},l(r){y(t.$$.fragment,r),e=S(r),a&&a.l(r),n=S(r),y(l.$$.fragment,r)},m(r,o){I(t,r,o),p(r,e,o),a&&a.m(r,o),p(r,n,o),I(l,r,o),s=!0},p(r,o){const u={};o&128&&(u.$$scope={dirty:o,ctx:r}),t.$set(u),r[0]?a?o&1&&_(a,1):(a=St(r),a.c(),_(a,1),a.m(n.parentNode,n)):a&&(lt(),g(a,1,1,()=>{a=null}),it());const f={};o&2&&(f.title=r[1]),o&130&&(f.$$scope={dirty:o,ctx:r}),l.$set(f)},i(r){s||(_(t.$$.fragment,r),_(a),_(l.$$.fragment,r),s=!0)},o(r){g(t.$$.fragment,r),g(a),g(l.$$.fragment,r),s=!1},d(r){L(t,r),r&&d(e),a&&a.d(r),r&&d(n),L(l,r)}}}function ue(i){let t,e,n,l,s,a,r,o,u,f,m,v,D;function E(b){i[6](b)}let N={$$slots:{default:[fe]},$$scope:{ctx:i}};return i[2]!==void 0&&(N.selectedTab=i[2]),u=new ne({props:N}),Pt.push(()=>jt(u,"selectedTab",E)),{c(){t=P("div"),e=P("input"),n=C(),l=P("input"),s=C(),a=P("button"),r=h("Change tab"),o=C(),k(u.$$.fragment),this.h()},l(b){t=j(b,"DIV",{});var $=R(t);e=j($,"INPUT",{type:!0}),n=S($),l=j($,"INPUT",{type:!0}),$.forEach(d),s=S(b),a=j(b,"BUTTON",{});var H=R(a);r=w(H,"Change tab"),H.forEach(d),o=S(b),y(u.$$.fragment,b),this.h()},h(){z(e,"type","checkbox"),z(l,"type","text")},m(b,$){p(b,t,$),A(t,e),e.checked=i[0],A(t,n),A(t,l),W(l,i[1]),p(b,s,$),p(b,a,$),A(a,r),p(b,o,$),I(u,b,$),m=!0,v||(D=[O(e,"change",i[3]),O(l,"input",i[4]),O(a,"click",i[5])],v=!0)},p(b,[$]){$&1&&(e.checked=b[0]),$&2&&l.value!==b[1]&&W(l,b[1]);const H={};$&131&&(H.$$scope={dirty:$,ctx:b}),!f&&$&4&&(f=!0,H.selectedTab=b[2],Et(()=>f=!1)),u.$set(H)},i(b){m||(_(u.$$.fragment,b),m=!0)},o(b){g(u.$$.fragment,b),m=!1},d(b){b&&d(t),b&&d(s),b&&d(a),b&&d(o),L(u,b),v=!1,At(D)}}}function ce(i,t,e){let n,l="Henrik",s="2";function a(){n=this.checked,e(0,n)}function r(){l=this.value,e(1,l)}const o=()=>e(2,s="4");function u(f){s=f,e(2,s)}return[n,l,s,a,r,o,u]}class ft extends V{constructor(t){super(),B(this,t,ce,ue,M,{})}}const be=`<script>\r
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
`,de=`<script>\r
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
`,me=`<script>\r
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
`;function pe(i){return[]}class $e extends V{constructor(t){super(),B(this,t,pe,null,M,{})}}const _e=`<script>\r
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
`;function ge(i){let t;return{c(){t=h("He're were going to make a Tabs component for displaying tabs. I already made a simple tab system myself for displaying the code but it could probably be improved.")},l(e){t=w(e,"He're were going to make a Tabs component for displaying tabs. I already made a simple tab system myself for displaying the code but it could probably be improved.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Te(i){let t;return{c(){t=h("It can be good to think about how the user is going to use our component instead of just starting blindly.")},l(e){t=w(e,"It can be good to think about how the user is going to use our component instead of just starting blindly.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function he(i){let t;return{c(){t=h("This looks fine! Let's start building it.")},l(e){t=w(e,"This looks fine! Let's start building it.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function we(i){let t;return{c(){t=h("2")},l(e){t=w(e,"2")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ve(i){let t;return{c(){t=h("3")},l(e){t=w(e,"3")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ke(i){let t,e,n,l,s,a;return e=new ht({props:{$$slots:{default:[we]},$$scope:{ctx:i}}}),l=new ht({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),{c(){t=h("At first the login tabs ended up at the end even though they had IDs of "),k(e.$$.fragment),n=h(" and "),k(l.$$.fragment),s=h(".")},l(r){t=w(r,"At first the login tabs ended up at the end even though they had IDs of "),y(e.$$.fragment,r),n=w(r," and "),y(l.$$.fragment,r),s=w(r,".")},m(r,o){p(r,t,o),I(e,r,o),p(r,n,o),I(l,r,o),p(r,s,o),a=!0},p(r,o){const u={};o&2&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const f={};o&2&&(f.$$scope={dirty:o,ctx:r}),l.$set(f)},i(r){a||(_(e.$$.fragment,r),_(l.$$.fragment,r),a=!0)},o(r){g(e.$$.fragment,r),g(l.$$.fragment,r),a=!1},d(r){r&&d(t),L(e,r),r&&d(n),L(l,r),r&&d(s)}}}function ye(i){let t;return{c(){t=h("I solved it by using an object instead which works but from my understanding it is not guaranteed to work since objects are not ordered.")},l(e){t=w(e,"I solved it by using an object instead which works but from my understanding it is not guaranteed to work since objects are not ordered.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Ie(i){let t;return{c(){t=h("Let's try fixing the array implementation instead:")},l(e){t=w(e,"Let's try fixing the array implementation instead:")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Le(i){let t;return{c(){t=h("There we go! In this example we used slots, context, reactive context using a store, bind and reactive statements to end up with a fairly simple store.")},l(e){t=w(e,"There we go! In this example we used slots, context, reactive context using a store, bind and reactive statements to end up with a fairly simple store.")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function Ce(i){let t,e,n,l,s,a,r,o,u,f,m,v,D,E,N,b,$,H,U,F;return t=new q({props:{$$slots:{default:[ge]},$$scope:{ctx:i}}}),n=new q({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),s=new ot({props:{name:[{name:"DesigningTabsComponent",comp:$e,raw:_e,text:""}]}}),r=new q({props:{$$slots:{default:[he]},$$scope:{ctx:i}}}),u=new ot({props:{name:[{name:"App",comp:at,raw:Xt,text:""},{name:"Tabs",comp:at,raw:Yt,text:""},{name:"Tab",comp:at,raw:xt,text:""}]}}),m=new q({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}}),D=new q({props:{$$slots:{default:[ye]},$$scope:{ctx:i}}}),N=new q({props:{$$slots:{default:[Ie]},$$scope:{ctx:i}}}),$=new ot({props:{name:[{name:"Tabs2",comp:ft,raw:de,text:"Instead of pushing the value directly we sort them by their ID when assigning using the spread operator. As a bonus since we're assigning we don't need the ugly titles = titles either. Credits to <strong>Believe Lody</strong> for this solution!"},{name:"App2",comp:ft,raw:be,text:""},{name:"Tab2",comp:ft,raw:me,text:""}]}}),U=new q({props:{$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment),e=C(),k(n.$$.fragment),l=C(),k(s.$$.fragment),a=C(),k(r.$$.fragment),o=C(),k(u.$$.fragment),f=C(),k(m.$$.fragment),v=C(),k(D.$$.fragment),E=C(),k(N.$$.fragment),b=C(),k($.$$.fragment),H=C(),k(U.$$.fragment)},l(c){y(t.$$.fragment,c),e=S(c),y(n.$$.fragment,c),l=S(c),y(s.$$.fragment,c),a=S(c),y(r.$$.fragment,c),o=S(c),y(u.$$.fragment,c),f=S(c),y(m.$$.fragment,c),v=S(c),y(D.$$.fragment,c),E=S(c),y(N.$$.fragment,c),b=S(c),y($.$$.fragment,c),H=S(c),y(U.$$.fragment,c)},m(c,T){I(t,c,T),p(c,e,T),I(n,c,T),p(c,l,T),I(s,c,T),p(c,a,T),I(r,c,T),p(c,o,T),I(u,c,T),p(c,f,T),I(m,c,T),p(c,v,T),I(D,c,T),p(c,E,T),I(N,c,T),p(c,b,T),I($,c,T),p(c,H,T),I(U,c,T),F=!0},p(c,T){const ct={};T&2&&(ct.$$scope={dirty:T,ctx:c}),t.$set(ct);const bt={};T&2&&(bt.$$scope={dirty:T,ctx:c}),n.$set(bt);const dt={};T&2&&(dt.$$scope={dirty:T,ctx:c}),r.$set(dt);const mt={};T&2&&(mt.$$scope={dirty:T,ctx:c}),m.$set(mt);const pt={};T&2&&(pt.$$scope={dirty:T,ctx:c}),D.$set(pt);const $t={};T&2&&($t.$$scope={dirty:T,ctx:c}),N.$set($t);const _t={};T&2&&(_t.$$scope={dirty:T,ctx:c}),U.$set(_t)},i(c){F||(_(t.$$.fragment,c),_(n.$$.fragment,c),_(s.$$.fragment,c),_(r.$$.fragment,c),_(u.$$.fragment,c),_(m.$$.fragment,c),_(D.$$.fragment,c),_(N.$$.fragment,c),_($.$$.fragment,c),_(U.$$.fragment,c),F=!0)},o(c){g(t.$$.fragment,c),g(n.$$.fragment,c),g(s.$$.fragment,c),g(r.$$.fragment,c),g(u.$$.fragment,c),g(m.$$.fragment,c),g(D.$$.fragment,c),g(N.$$.fragment,c),g($.$$.fragment,c),g(U.$$.fragment,c),F=!1},d(c){L(t,c),c&&d(e),L(n,c),c&&d(l),L(s,c),c&&d(a),L(r,c),c&&d(o),L(u,c),c&&d(f),L(m,c),c&&d(v),L(D,c),c&&d(E),L(N,c),c&&d(b),L($,c),c&&d(H),L(U,c)}}}function Se(i){let t,e;const n=[i[0],Dt];let l={$$slots:{default:[Ce]},$$scope:{ctx:i}};for(let s=0;s<n.length;s+=1)l=ut(l,n[s]);return t=new Ot({props:l}),{c(){k(t.$$.fragment)},l(s){y(t.$$.fragment,s)},m(s,a){I(t,s,a),e=!0},p(s,[a]){const r=a&1?Ut(n,[a&1&&gt(s[0]),a&0&&gt(Dt)]):{};a&2&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){g(t.$$.fragment,s),e=!1},d(s){L(t,s)}}}const Dt={title:"Tabs",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-23T00:00:00.000Z",layout:"notes"};function De(i,t,e){return i.$$set=n=>{e(0,t=ut(ut({},t),Tt(n)))},t=Tt(t),[t]}class Ae extends V{constructor(t){super(),B(this,t,De,Se,M,{})}}export{Ae as default,Dt as metadata};
