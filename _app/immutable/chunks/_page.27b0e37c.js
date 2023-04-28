import{S as D,i as P,s as S,k as $,a as I,q as g,l as v,c as T,m as y,r as b,h as d,n as w,b as _,D as h,R,u as V,H as A,af as ot,ai as ct,e as j,v as ut,d as C,f as ft,g as E,a4 as Q,N as J,y as F,z,A as L,B as N,a7 as pt,Q as M,J as H,K as _t,L as W,M as Z}from"./index.5815ca79.js";import{M as ht,P as G}from"./mdsvex-layout-notes.7536afaf.js";import{f as dt}from"./index.597eb129.js";import{S as X}from"./ShowMany.2af9ac15.js";import{S as $t}from"./ShowCode.e677744f.js";import{S as K}from"./Strong.b8abec16.js";function vt(i){let t,e,n,l,c,u;return{c(){t=$("input"),e=I(),n=$("button"),l=g(i[0]),this.h()},l(a){t=v(a,"INPUT",{type:!0}),e=T(a),n=v(a,"BUTTON",{});var o=y(n);l=b(o,i[0]),o.forEach(d),this.h()},h(){w(t,"type","text")},m(a,o){_(a,t,o),_(a,e,o),_(a,n,o),h(n,l),c||(u=R(n,"click",i[1]),c=!0)},p(a,[o]){o&1&&V(l,a[0])},i:A,o:A,d(a){a&&d(t),a&&d(e),a&&d(n),c=!1,u()}}}function gt(i,t,e){let n=0;return[n,()=>e(0,n++,n)]}class bt extends D{constructor(t){super(),P(this,t,gt,vt,S,{})}}const kt=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<input type="text" />\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function Y(i){let t;return{c(){t=$("input"),this.h()},l(e){t=v(e,"INPUT",{type:!0}),this.h()},h(){w(t,"type","text")},m(e,n){_(e,t,n)},p:A,d(e){e&&d(t)}}}function yt(i){let t=i[0],e,n,l,c,u,a=Y();return{c(){a.c(),e=I(),n=$("button"),l=g(i[0])},l(o){a.l(o),e=T(o),n=v(o,"BUTTON",{});var f=y(n);l=b(f,i[0]),f.forEach(d)},m(o,f){a.m(o,f),_(o,e,f),_(o,n,f),h(n,l),c||(u=R(n,"click",i[1]),c=!0)},p(o,[f]){f&1&&S(t,t=o[0])?(a.d(1),a=Y(),a.c(),a.m(e.parentNode,e)):a.p(o,f),f&1&&V(l,o[0])},i:A,o:A,d(o){a.d(o),o&&d(e),o&&d(n),c=!1,u()}}}function wt(i,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Ct extends D{constructor(t){super(),P(this,t,wt,yt,S,{})}}const Et=`<script>\r
	let count = 0;\r
<\/script>\r
\r
{#key count}\r
	<input type="text" />\r
{/key}\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function It(i){let t,e,n,l,c,u,a,o,f,p;return{c(){t=$("input"),e=I(),n=$("button"),l=g(i[0]),c=I(),u=$("div"),a=g(i[0]),this.h()},l(r){t=v(r,"INPUT",{type:!0}),e=T(r),n=v(r,"BUTTON",{});var s=y(n);l=b(s,i[0]),s.forEach(d),c=T(r),u=v(r,"DIV",{});var m=y(u);a=b(m,i[0]),m.forEach(d),this.h()},h(){w(t,"type","text")},m(r,s){_(r,t,s),_(r,e,s),_(r,n,s),h(n,l),_(r,c,s),_(r,u,s),h(u,a),f||(p=R(n,"click",i[1]),f=!0)},p(r,[s]){s&1&&V(l,r[0]),s&1&&V(a,r[0])},i(r){o||ot(()=>{o=ct(u,dt,{}),o.start()})},o:A,d(r){r&&d(t),r&&d(e),r&&d(n),r&&d(c),r&&d(u),f=!1,p()}}}function Tt(i,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Ft extends D{constructor(t){super(),P(this,t,Tt,It,S,{})}}const zt=`<script>\r
	import { fade } from "svelte/transition";\r
	let count = 0;\r
<\/script>\r
\r
<input type="text" />\r
\r
<button on:click={() => count++}>\r
	{count}\r
</button>\r
\r
<div in:fade>\r
	{count}\r
</div>\r
`;function x(i){let t,e,n;return{c(){t=$("div"),e=g(i[0])},l(l){t=v(l,"DIV",{});var c=y(t);e=b(c,i[0]),c.forEach(d)},m(l,c){_(l,t,c),h(t,e)},p(l,c){c&1&&V(e,l[0])},i(l){n||ot(()=>{n=ct(t,dt,{}),n.start()})},o:A,d(l){l&&d(t)}}}function Lt(i){let t,e,n,l,c,u=i[0],a,o,f,p=x(i);return{c(){t=$("input"),e=I(),n=$("button"),l=g(i[0]),c=I(),p.c(),a=j(),this.h()},l(r){t=v(r,"INPUT",{type:!0}),e=T(r),n=v(r,"BUTTON",{});var s=y(n);l=b(s,i[0]),s.forEach(d),c=T(r),p.l(r),a=j(),this.h()},h(){w(t,"type","text")},m(r,s){_(r,t,s),_(r,e,s),_(r,n,s),h(n,l),_(r,c,s),p.m(r,s),_(r,a,s),o||(f=R(n,"click",i[1]),o=!0)},p(r,[s]){s&1&&V(l,r[0]),s&1&&S(u,u=r[0])?(ut(),C(p,1,1,A),ft(),p=x(r),p.c(),E(p,1),p.m(a.parentNode,a)):p.p(r,s)},i(r){E(p)},o(r){C(p)},d(r){r&&d(t),r&&d(e),r&&d(n),r&&d(c),r&&d(a),p.d(r),o=!1,f()}}}function Nt(i,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Ut extends D{constructor(t){super(),P(this,t,Nt,Lt,S,{})}}const At=`<script>\r
	import { fade } from "svelte/transition";\r
	let count = 0;\r
<\/script>\r
\r
<input type="text" />\r
\r
<button on:click={() => count++}>\r
	{count}\r
</button>\r
\r
{#key count}\r
	<div in:fade>\r
		{count}\r
	</div>\r
{/key}\r
`;async function St(i){return await new Promise(t=>setTimeout(t,1e3)),new Array(q(3,4)).fill(null).map(t=>{const e=q(5,10);return`${i}: "${String.fromCharCode(...new Array(e).fill(0).map(n=>q(65,52)))}"`})}function q(i,t){return Math.round(Math.random()*t+i)}function tt(i,t,e){const n=i.slice();return n[7]=t[e],n}function Dt(i){let t,e=i[1],n=[];for(let l=0;l<e.length;l+=1)n[l]=et(tt(i,e,l));return{c(){t=$("ul");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){t=v(l,"UL",{});var c=y(t);for(let u=0;u<n.length;u+=1)n[u].l(c);c.forEach(d)},m(l,c){_(l,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null)},p(l,c){if(c&2){e=l[1];let u;for(u=0;u<e.length;u+=1){const a=tt(l,e,u);n[u]?n[u].p(a,c):(n[u]=et(a),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=e.length}},d(l){l&&d(t),J(n,l)}}}function Pt(i){let t;return{c(){t=g("Loading ...")},l(e){t=b(e,"Loading ...")},m(e,n){_(e,t,n)},p:A,d(e){e&&d(t)}}}function et(i){let t,e=i[7]+"",n;return{c(){t=$("li"),n=g(e)},l(l){t=v(l,"LI",{});var c=y(t);n=b(c,e),c.forEach(d)},m(l,c){_(l,t,c),h(t,n)},p(l,c){c&2&&e!==(e=l[7]+"")&&V(n,e)},d(l){l&&d(t)}}}function Bt(i){let t,e,n,l,c,u,a,o,f,p;function r(k,U){return k[2]?Pt:Dt}let s=r(i),m=s(i);return{c(){t=$("div"),e=$("div"),n=$("div"),l=g("Talking to "),c=g(i[3]),u=I(),m.c(),a=I(),o=$("input"),this.h()},l(k){t=v(k,"DIV",{class:!0});var U=y(t);e=v(U,"DIV",{class:!0});var B=y(e);n=v(B,"DIV",{});var O=y(n);l=b(O,"Talking to "),c=b(O,i[3]),O.forEach(d),u=T(B),m.l(B),B.forEach(d),a=T(U),o=v(U,"INPUT",{}),U.forEach(d),this.h()},h(){w(e,"class","content svelte-d6zxq5"),w(t,"class","uno-ylix55")},m(k,U){_(k,t,U),h(t,e),h(e,n),h(n,l),h(n,c),h(e,u),m.m(e,null),h(t,a),h(t,o),Q(o,i[0]),f||(p=R(o,"input",i[5]),f=!0)},p(k,[U]){s===(s=r(k))&&m?m.p(k,U):(m.d(1),m=s(k),m&&(m.c(),m.m(e,null))),U&1&&o.value!==k[0]&&Q(o,k[0])},i:A,o:A,d(k){k&&d(t),m.d(),f=!1,p()}}}function Vt(i,t,e){let{friend:n}=t,l=n.name,c="",u=[],a=!1;o(l);async function o(p){e(2,a=!0),e(1,u=await St(p)),e(2,a=!1)}function f(){c=this.value,e(0,c)}return i.$$set=p=>{"friend"in p&&e(4,n=p.friend)},[c,u,a,l,n,f]}class mt extends D{constructor(t){super(),P(this,t,Vt,Bt,S,{friend:4})}}function nt(i,t,e){const n=i.slice();return n[4]=t[e],n}function rt(i){let t,e,n,l,c=i[4].name+"",u,a,o,f,p;return o=pt(i[3][0]),{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=g(c),a=I(),this.h()},l(r){t=v(r,"LI",{class:!0});var s=y(t);e=v(s,"LABEL",{class:!0});var m=y(e);n=v(m,"INPUT",{type:!0,class:!0}),l=T(m),u=b(m,c),m.forEach(d),a=T(s),s.forEach(d),this.h()},h(){w(n,"type","radio"),n.__value=i[4],n.value=n.__value,w(n,"class","svelte-8i67ii"),w(e,"class","svelte-8i67ii"),M(e,"selected",i[0]===i[4]),w(t,"class","svelte-8i67ii"),o.p(n)},m(r,s){_(r,t,s),h(t,e),h(e,n),n.checked=n.__value===i[0],h(e,l),h(e,u),h(t,a),f||(p=R(n,"change",i[2]),f=!0)},p(r,s){s&1&&(n.checked=n.__value===r[0]),s&3&&M(e,"selected",r[0]===r[4])},d(r){r&&d(t),o.r(),f=!1,p()}}}function Rt(i){let t,e,n,l,c,u,a=i[1],o=[];for(let f=0;f<a.length;f+=1)o[f]=rt(nt(i,a,f));return c=new mt({props:{friend:i[0]}}),{c(){t=$("div"),e=$("ul");for(let f=0;f<o.length;f+=1)o[f].c();n=I(),l=$("div"),F(c.$$.fragment),this.h()},l(f){t=v(f,"DIV",{class:!0});var p=y(t);e=v(p,"UL",{class:!0});var r=y(e);for(let m=0;m<o.length;m+=1)o[m].l(r);r.forEach(d),n=T(p),l=v(p,"DIV",{class:!0});var s=y(l);z(c.$$.fragment,s),s.forEach(d),p.forEach(d),this.h()},h(){w(e,"class","list svelte-8i67ii"),w(l,"class","chat"),w(t,"class","containy svelte-8i67ii")},m(f,p){_(f,t,p),h(t,e);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null);h(t,n),h(t,l),L(c,l,null),u=!0},p(f,[p]){if(p&3){a=f[1];let s;for(s=0;s<a.length;s+=1){const m=nt(f,a,s);o[s]?o[s].p(m,p):(o[s]=rt(m),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}const r={};p&1&&(r.friend=f[0]),c.$set(r)},i(f){u||(E(c.$$.fragment,f),u=!0)},o(f){C(c.$$.fragment,f),u=!1},d(f){f&&d(t),J(o,f),N(c)}}}function Kt(i,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const c=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,c]}class Mt extends D{constructor(t){super(),P(this,t,Kt,Rt,S,{})}}const Ot=`<script>\r
	import Chat from "./Chat.svelte";\r
\r
	let friends = [\r
		{ name: "alfred" },\r
		{ name: "ben" },\r
		{ name: "charlie" },\r
		{ name: "dawson" },\r
		{ name: "elain" },\r
	];\r
	let selectedFriend = friends[2];\r
<\/script>\r
\r
<div class="containy">\r
	<ul class="list">\r
		{#each friends as friend}\r
			<li>\r
				<label class:selected={selectedFriend === friend}>\r
					<input bind:group={selectedFriend} type="radio" value={friend} />\r
					{friend.name}\r
				</label>\r
			</li>\r
		{/each}\r
	</ul>\r
	<div class="chat">\r
		<Chat friend={selectedFriend} />\r
	</div>\r
</div>\r
\r
<style>\r
	:global(body) {\r
		padding: 0;\r
	}\r
	.containy {\r
		display: grid;\r
		grid-template-columns: 100px 1fr;\r
		height: 100%;\r
	}\r
	.list {\r
		padding: 0;\r
		margin: 0;\r
		border-right: 1px solid #999;\r
	}\r
	li {\r
		list-style: none;\r
		border-bottom: 1px solid #999;\r
	}\r
	label {\r
		display: block;\r
		padding: 10px 5px;\r
	}\r
	.selected {\r
		background: lightskyblue;\r
	}\r
	input {\r
		visibility: hidden;\r
		width: 0;\r
	}\r
</style>\r
`;function lt(i,t,e){const n=i.slice();return n[4]=t[e],n}function st(i){let t,e,n,l,c=i[4].name+"",u,a,o,f,p;return o=pt(i[3][0]),{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=g(c),a=I(),this.h()},l(r){t=v(r,"LI",{class:!0});var s=y(t);e=v(s,"LABEL",{class:!0});var m=y(e);n=v(m,"INPUT",{type:!0,class:!0}),l=T(m),u=b(m,c),m.forEach(d),a=T(s),s.forEach(d),this.h()},h(){w(n,"type","radio"),n.__value=i[4],n.value=n.__value,w(n,"class","svelte-6z6zo0"),w(e,"class","svelte-6z6zo0"),M(e,"selected",i[0]===i[4]),w(t,"class","svelte-6z6zo0"),o.p(n)},m(r,s){_(r,t,s),h(t,e),h(e,n),n.checked=n.__value===i[0],h(e,l),h(e,u),h(t,a),f||(p=R(n,"change",i[2]),f=!0)},p(r,s){s&1&&(n.checked=n.__value===r[0]),s&3&&M(e,"selected",r[0]===r[4])},d(r){r&&d(t),o.r(),f=!1,p()}}}function it(i){let t,e;return t=new mt({props:{friend:i[0]}}),{c(){F(t.$$.fragment)},l(n){z(t.$$.fragment,n)},m(n,l){L(t,n,l),e=!0},p(n,l){const c={};l&1&&(c.friend=n[0]),t.$set(c)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){C(t.$$.fragment,n),e=!1},d(n){N(t,n)}}}function qt(i){let t,e,n,l,c=i[0],u,a=i[1],o=[];for(let p=0;p<a.length;p+=1)o[p]=st(lt(i,a,p));let f=it(i);return{c(){t=$("div"),e=$("ul");for(let p=0;p<o.length;p+=1)o[p].c();n=I(),l=$("div"),f.c(),this.h()},l(p){t=v(p,"DIV",{class:!0});var r=y(t);e=v(r,"UL",{class:!0});var s=y(e);for(let k=0;k<o.length;k+=1)o[k].l(s);s.forEach(d),n=T(r),l=v(r,"DIV",{class:!0});var m=y(l);f.l(m),m.forEach(d),r.forEach(d),this.h()},h(){w(e,"class","list svelte-6z6zo0"),w(l,"class","chat"),w(t,"class","containy svelte-6z6zo0")},m(p,r){_(p,t,r),h(t,e);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(e,null);h(t,n),h(t,l),f.m(l,null),u=!0},p(p,[r]){if(r&3){a=p[1];let s;for(s=0;s<a.length;s+=1){const m=lt(p,a,s);o[s]?o[s].p(m,r):(o[s]=st(m),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}r&1&&S(c,c=p[0])?(ut(),C(f,1,1,A),ft(),f=it(p),f.c(),E(f,1),f.m(l,null)):f.p(p,r)},i(p){u||(E(f),u=!0)},o(p){C(f),u=!1},d(p){p&&d(t),J(o,p),f.d(p)}}}function Ht(i,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const c=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,c]}class Jt extends D{constructor(t){super(),P(this,t,Ht,qt,S,{})}}const jt=`<script>\r
	import Chat from "./Chat.svelte";\r
\r
	let friends = [\r
		{ name: "alfred" },\r
		{ name: "ben" },\r
		{ name: "charlie" },\r
		{ name: "dawson" },\r
		{ name: "elain" },\r
	];\r
	let selectedFriend = friends[2];\r
<\/script>\r
\r
<div class="containy">\r
	<ul class="list">\r
		{#each friends as friend}\r
			<li>\r
				<label class:selected={selectedFriend === friend}>\r
					<input bind:group={selectedFriend} type="radio" value={friend} />\r
					{friend.name}\r
				</label>\r
			</li>\r
		{/each}\r
	</ul>\r
	<div class="chat">\r
		{#key selectedFriend}\r
			<Chat friend={selectedFriend} />\r
		{/key}\r
	</div>\r
</div>\r
\r
<style>\r
	:global(body) {\r
		padding: 0;\r
	}\r
	.containy {\r
		display: grid;\r
		grid-template-columns: 100px 1fr;\r
		height: 100%;\r
	}\r
	.list {\r
		padding: 0;\r
		margin: 0;\r
		border-right: 1px solid #999;\r
	}\r
	li {\r
		list-style: none;\r
		border-bottom: 1px solid #999;\r
	}\r
	label {\r
    display: block;\r
		padding: 10px 5px;\r
	}\r
	.selected {\r
		background: lightskyblue;\r
	}\r
	input {\r
		visibility: hidden;\r
		width: 0;\r
	}\r
</style>\r
`,Qt=`<script>\r
	import { fetchChat } from "./data";\r
\r
	export let friend;\r
	let name = friend.name;\r
	let message = "";\r
\r
	let chats = [];\r
	let loading = false;\r
\r
	loadChat(name);\r
\r
	async function loadChat(name) {\r
		loading = true;\r
		chats = await fetchChat(name);\r
		loading = false;\r
	}\r
<\/script>\r
\r
<div class="container">\r
	<div class="content">\r
		<div>Talking to {name}</div>\r
\r
		{#if loading}\r
			Loading ...\r
		{:else}\r
			<ul>\r
				{#each chats as chat}\r
					<li>{chat}</li>\r
				{/each}\r
			</ul>\r
		{/if}\r
	</div>\r
	<input bind:value={message} />\r
</div>\r
\r
<style>\r
	.container {\r
		height: 100%;\r
		display: flex;\r
		flex-direction: column;\r
	}\r
	.content {\r
		flex: 1;\r
		padding: 10px;\r
	}\r
</style>\r
`;function Wt(i){let t;return{c(){t=g("recreate elements or components")},l(e){t=b(e,"recreate elements or components")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function Zt(i){let t;return{c(){t=g("changed")},l(e){t=b(e,"changed")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function Gt(i){let t,e,n,l,c,u;return e=new K({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),l=new K({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){t=g("Sometimes we may want to "),F(e.$$.fragment),n=g(" when something has "),F(l.$$.fragment),c=g(".")},l(a){t=b(a,"Sometimes we may want to "),z(e.$$.fragment,a),n=b(a," when something has "),z(l.$$.fragment,a),c=b(a,".")},m(a,o){_(a,t,o),L(e,a,o),_(a,n,o),L(l,a,o),_(a,c,o),u=!0},p(a,o){const f={};o&2&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const p={};o&2&&(p.$$scope={dirty:o,ctx:a}),l.$set(p)},i(a){u||(E(e.$$.fragment,a),E(l.$$.fragment,a),u=!0)},o(a){C(e.$$.fragment,a),C(l.$$.fragment,a),u=!1},d(a){a&&d(t),N(e,a),a&&d(n),N(l,a),a&&d(c)}}}function Xt(i){let t;return{c(){t=g("reset function")},l(e){t=b(e,"reset function")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function Yt(i){let t;return{c(){t=g("resets the whole state")},l(e){t=b(e,"resets the whole state")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function xt(i){let t;return{c(){t=g("use the key block")},l(e){t=b(e,"use the key block")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function te(i){let t;return{c(){t=g("reinitialize a new one")},l(e){t=b(e,"reinitialize a new one")},m(e,n){_(e,t,n)},d(e){e&&d(t)}}}function ee(i){let t,e,n,l,c,u,a,o,f,p;return e=new K({props:{$$slots:{default:[Xt]},$$scope:{ctx:i}}}),l=new K({props:{$$slots:{default:[Yt]},$$scope:{ctx:i}}}),u=new K({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),o=new K({props:{$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){t=g("In this case, rather than creating a "),F(e.$$.fragment),n=g(" that "),F(l.$$.fragment),c=g(" we could simply "),F(u.$$.fragment),a=g(" to destroy the component and "),F(o.$$.fragment),f=g(".")},l(r){t=b(r,"In this case, rather than creating a "),z(e.$$.fragment,r),n=b(r," that "),z(l.$$.fragment,r),c=b(r," we could simply "),z(u.$$.fragment,r),a=b(r," to destroy the component and "),z(o.$$.fragment,r),f=b(r,".")},m(r,s){_(r,t,s),L(e,r,s),_(r,n,s),L(l,r,s),_(r,c,s),L(u,r,s),_(r,a,s),L(o,r,s),_(r,f,s),p=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),e.$set(m);const k={};s&2&&(k.$$scope={dirty:s,ctx:r}),l.$set(k);const U={};s&2&&(U.$$scope={dirty:s,ctx:r}),u.$set(U);const B={};s&2&&(B.$$scope={dirty:s,ctx:r}),o.$set(B)},i(r){p||(E(e.$$.fragment,r),E(l.$$.fragment,r),E(u.$$.fragment,r),E(o.$$.fragment,r),p=!0)},o(r){C(e.$$.fragment,r),C(l.$$.fragment,r),C(u.$$.fragment,r),C(o.$$.fragment,r),p=!1},d(r){r&&d(t),N(e,r),r&&d(n),N(l,r),r&&d(c),N(u,r),r&&d(a),N(o,r),r&&d(f)}}}function ne(i){let t,e,n,l,c,u,a,o,f,p;return t=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:i}}}),n=new X({props:{name:[{name:"Count",comp:bt,raw:kt,text:"Imagine that you wanted to clear the input field whenever you clicked the button."},{name:"CountKey",comp:Ct,raw:Et,text:"Just add a key block wrapping the input with the variable that should trigger the recreation of the element!"},{name:"CountFade",comp:Ft,raw:zt,text:"We could add a transition that fades in, however it only shows once."},{name:"CountFadeKey",comp:Ut,raw:At,text:"But if we add a key block it fades in every time it's recreated when the count variable changes!"}]}}),c=new X({props:{name:[{name:"App",comp:Mt,raw:Ot,text:"Here we have a chat app where we can select a friend and see their messages. But, when clicking, the component using the friend prop doesn't update."},{name:"App2",comp:Jt,raw:jt,text:"To fix this we can simply surround the Chat component with a key block referencing selectedFriend. Every time we select a new friend the Chat component is recreated!"}]}}),a=new $t({props:{code:Qt,name:"Chat.svelte"}}),f=new G({props:{$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){F(t.$$.fragment),e=I(),F(n.$$.fragment),l=I(),F(c.$$.fragment),u=I(),F(a.$$.fragment),o=I(),F(f.$$.fragment)},l(r){z(t.$$.fragment,r),e=T(r),z(n.$$.fragment,r),l=T(r),z(c.$$.fragment,r),u=T(r),z(a.$$.fragment,r),o=T(r),z(f.$$.fragment,r)},m(r,s){L(t,r,s),_(r,e,s),L(n,r,s),_(r,l,s),L(c,r,s),_(r,u,s),L(a,r,s),_(r,o,s),L(f,r,s),p=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),t.$set(m);const k={};s&2&&(k.$$scope={dirty:s,ctx:r}),f.$set(k)},i(r){p||(E(t.$$.fragment,r),E(n.$$.fragment,r),E(c.$$.fragment,r),E(a.$$.fragment,r),E(f.$$.fragment,r),p=!0)},o(r){C(t.$$.fragment,r),C(n.$$.fragment,r),C(c.$$.fragment,r),C(a.$$.fragment,r),C(f.$$.fragment,r),p=!1},d(r){N(t,r),r&&d(e),N(n,r),r&&d(l),N(c,r),r&&d(u),N(a,r),r&&d(o),N(f,r)}}}function re(i){let t,e;const n=[i[0],at];let l={$$slots:{default:[ne]},$$scope:{ctx:i}};for(let c=0;c<n.length;c+=1)l=H(l,n[c]);return t=new ht({props:l}),{c(){F(t.$$.fragment)},l(c){z(t.$$.fragment,c)},m(c,u){L(t,c,u),e=!0},p(c,[u]){const a=u&1?_t(n,[u&1&&W(c[0]),u&0&&W(at)]):{};u&2&&(a.$$scope={dirty:u,ctx:c}),t.$set(a)},i(c){e||(E(t.$$.fragment,c),e=!0)},o(c){C(t.$$.fragment,c),e=!1},d(c){N(t,c)}}}const at={title:"{#key}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-09T00:00:00.000Z",layout:"notes"};function le(i,t,e){return i.$$set=n=>{e(0,t=H(H({},t),Z(n)))},t=Z(t),[t]}class fe extends D{constructor(t){super(),P(this,t,le,re,S,{})}}export{fe as default,at as metadata};
