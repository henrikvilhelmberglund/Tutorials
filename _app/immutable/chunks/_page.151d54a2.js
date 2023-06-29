import{s as S,f as $,a as I,l as v,g,c as T,h as y,m as b,d as p,j as w,i as _,v as h,X as R,n as V,z as A,J as ct,e as X,a8 as O,B as W,aa as ut,E as j,C as H,D as Z}from"./scheduler.a7cd560e.js";import{S as D,i as P,f as ft,g as dt,t as C,c as pt,a as E,b as F,d as U,m as z,e as L}from"./index.396264e7.js";import{g as ht,a as G}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{f as mt,M as $t,P as Q}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Y}from"./ShowMany.db7be1f3.js";import{S as gt}from"./ShowCode.9be9983a.js";import{e as M}from"./each.32d06572.js";import{S as K}from"./Strong.097578ae.js";function vt(a){let t,e,n,l,o,u;return{c(){t=$("input"),e=I(),n=$("button"),l=v(a[0]),this.h()},l(c){t=g(c,"INPUT",{type:!0}),e=T(c),n=g(c,"BUTTON",{});var i=y(n);l=b(i,a[0]),i.forEach(p),this.h()},h(){w(t,"type","text")},m(c,i){_(c,t,i),_(c,e,i),_(c,n,i),h(n,l),o||(u=R(n,"click",a[1]),o=!0)},p(c,[i]){i&1&&V(l,c[0])},i:A,o:A,d(c){c&&(p(t),p(e),p(n)),o=!1,u()}}}function bt(a,t,e){let n=0;return[n,()=>e(0,n++,n)]}class kt extends D{constructor(t){super(),P(this,t,bt,vt,S,{})}}const yt=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<input type="text" />\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function x(a){let t;return{c(){t=$("input"),this.h()},l(e){t=g(e,"INPUT",{type:!0}),this.h()},h(){w(t,"type","text")},m(e,n){_(e,t,n)},p:A,d(e){e&&p(t)}}}function wt(a){let t=a[0],e,n,l,o,u,c=x();return{c(){c.c(),e=I(),n=$("button"),l=v(a[0])},l(i){c.l(i),e=T(i),n=g(i,"BUTTON",{});var f=y(n);l=b(f,a[0]),f.forEach(p)},m(i,f){c.m(i,f),_(i,e,f),_(i,n,f),h(n,l),o||(u=R(n,"click",a[1]),o=!0)},p(i,[f]){f&1&&S(t,t=i[0])?(c.d(1),c=x(),c.c(),c.m(e.parentNode,e)):c.p(i,f),f&1&&V(l,i[0])},i:A,o:A,d(i){i&&(p(e),p(n)),c.d(i),o=!1,u()}}}function Ct(a,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Et extends D{constructor(t){super(),P(this,t,Ct,wt,S,{})}}const It=`<script>\r
	let count = 0;\r
<\/script>\r
\r
{#key count}\r
	<input type="text" />\r
{/key}\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function Tt(a){let t,e,n,l,o,u,c,i,f,d;return{c(){t=$("input"),e=I(),n=$("button"),l=v(a[0]),o=I(),u=$("div"),c=v(a[0]),this.h()},l(r){t=g(r,"INPUT",{type:!0}),e=T(r),n=g(r,"BUTTON",{});var s=y(n);l=b(s,a[0]),s.forEach(p),o=T(r),u=g(r,"DIV",{});var m=y(u);c=b(m,a[0]),m.forEach(p),this.h()},h(){w(t,"type","text")},m(r,s){_(r,t,s),_(r,e,s),_(r,n,s),h(n,l),_(r,o,s),_(r,u,s),h(u,c),f||(d=R(n,"click",a[1]),f=!0)},p(r,[s]){s&1&&V(l,r[0]),s&1&&V(c,r[0])},i(r){r&&(i||ct(()=>{i=ft(u,mt,{}),i.start()}))},o:A,d(r){r&&(p(t),p(e),p(n),p(o),p(u)),f=!1,d()}}}function Ft(a,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Ut extends D{constructor(t){super(),P(this,t,Ft,Tt,S,{})}}const zt=`<script>\r
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
`;function tt(a){let t,e,n;return{c(){t=$("div"),e=v(a[0])},l(l){t=g(l,"DIV",{});var o=y(t);e=b(o,a[0]),o.forEach(p)},m(l,o){_(l,t,o),h(t,e)},p(l,o){o&1&&V(e,l[0])},i(l){l&&(n||ct(()=>{n=ft(t,mt,{}),n.start()}))},o:A,d(l){l&&p(t)}}}function Lt(a){let t,e,n,l,o,u=a[0],c,i,f,d=tt(a);return{c(){t=$("input"),e=I(),n=$("button"),l=v(a[0]),o=I(),d.c(),c=X(),this.h()},l(r){t=g(r,"INPUT",{type:!0}),e=T(r),n=g(r,"BUTTON",{});var s=y(n);l=b(s,a[0]),s.forEach(p),o=T(r),d.l(r),c=X(),this.h()},h(){w(t,"type","text")},m(r,s){_(r,t,s),_(r,e,s),_(r,n,s),h(n,l),_(r,o,s),d.m(r,s),_(r,c,s),i||(f=R(n,"click",a[1]),i=!0)},p(r,[s]){s&1&&V(l,r[0]),s&1&&S(u,u=r[0])?(dt(),C(d,1,1,A),pt(),d=tt(r),d.c(),E(d,1),d.m(c.parentNode,c)):d.p(r,s)},i(r){E(d)},o(r){C(d)},d(r){r&&(p(t),p(e),p(n),p(o),p(c)),d.d(r),i=!1,f()}}}function Nt(a,t,e){let n=0;return[n,()=>e(0,n++,n)]}class At extends D{constructor(t){super(),P(this,t,Nt,Lt,S,{})}}const St=`<script>\r
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
`;async function Dt(a){return await new Promise(t=>setTimeout(t,1e3)),new Array(q(3,4)).fill(null).map(t=>{const e=q(5,10);return`${a}: "${String.fromCharCode(...new Array(e).fill(0).map(n=>q(65,52)))}"`})}function q(a,t){return Math.round(Math.random()*t+a)}function et(a,t,e){const n=a.slice();return n[7]=t[e],n}function Pt(a){let t,e=M(a[1]),n=[];for(let l=0;l<e.length;l+=1)n[l]=nt(et(a,e,l));return{c(){t=$("ul");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){t=g(l,"UL",{});var o=y(t);for(let u=0;u<n.length;u+=1)n[u].l(o);o.forEach(p)},m(l,o){_(l,t,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null)},p(l,o){if(o&2){e=M(l[1]);let u;for(u=0;u<e.length;u+=1){const c=et(l,e,u);n[u]?n[u].p(c,o):(n[u]=nt(c),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=e.length}},d(l){l&&p(t),W(n,l)}}}function Bt(a){let t;return{c(){t=v("Loading ...")},l(e){t=b(e,"Loading ...")},m(e,n){_(e,t,n)},p:A,d(e){e&&p(t)}}}function nt(a){let t,e=a[7]+"",n;return{c(){t=$("li"),n=v(e)},l(l){t=g(l,"LI",{});var o=y(t);n=b(o,e),o.forEach(p)},m(l,o){_(l,t,o),h(t,n)},p(l,o){o&2&&e!==(e=l[7]+"")&&V(n,e)},d(l){l&&p(t)}}}function Vt(a){let t,e,n,l,o,u,c,i,f,d;function r(k,N){return k[2]?Bt:Pt}let s=r(a),m=s(a);return{c(){t=$("div"),e=$("div"),n=$("div"),l=v("Talking to "),o=v(a[3]),u=I(),m.c(),c=I(),i=$("input"),this.h()},l(k){t=g(k,"DIV",{class:!0});var N=y(t);e=g(N,"DIV",{class:!0});var B=y(e);n=g(B,"DIV",{});var J=y(n);l=b(J,"Talking to "),o=b(J,a[3]),J.forEach(p),u=T(B),m.l(B),B.forEach(p),c=T(N),i=g(N,"INPUT",{}),N.forEach(p),this.h()},h(){w(e,"class","content svelte-1a1ya3l"),w(t,"class","spu-8rfjt5")},m(k,N){_(k,t,N),h(t,e),h(e,n),h(n,l),h(n,o),h(e,u),m.m(e,null),h(t,c),h(t,i),O(i,a[0]),f||(d=R(i,"input",a[5]),f=!0)},p(k,[N]){s===(s=r(k))&&m?m.p(k,N):(m.d(1),m=s(k),m&&(m.c(),m.m(e,null))),N&1&&i.value!==k[0]&&O(i,k[0])},i:A,o:A,d(k){k&&p(t),m.d(),f=!1,d()}}}function Rt(a,t,e){let{friend:n}=t,l=n.name,o="",u=[],c=!1;i(l);async function i(d){e(2,c=!0),e(1,u=await Dt(d)),e(2,c=!1)}function f(){o=this.value,e(0,o)}return a.$$set=d=>{"friend"in d&&e(4,n=d.friend)},[o,u,c,l,n,f]}class _t extends D{constructor(t){super(),P(this,t,Rt,Vt,S,{friend:4})}}function rt(a,t,e){const n=a.slice();return n[4]=t[e],n}function lt(a){let t,e,n,l,o=a[4].name+"",u,c,i,f,d;return i=ut(a[3][0]),{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=v(o),c=I(),this.h()},l(r){t=g(r,"LI",{class:!0});var s=y(t);e=g(s,"LABEL",{class:!0});var m=y(e);n=g(m,"INPUT",{type:!0,class:!0}),l=T(m),u=b(m,o),m.forEach(p),c=T(s),s.forEach(p),this.h()},h(){w(n,"type","radio"),n.__value=a[4],O(n,n.__value),w(n,"class","svelte-8i67ii"),w(e,"class","svelte-8i67ii"),j(e,"selected",a[0]===a[4]),w(t,"class","svelte-8i67ii"),i.p(n)},m(r,s){_(r,t,s),h(t,e),h(e,n),n.checked=n.__value===a[0],h(e,l),h(e,u),h(t,c),f||(d=R(n,"change",a[2]),f=!0)},p(r,s){s&1&&(n.checked=n.__value===r[0]),s&3&&j(e,"selected",r[0]===r[4])},d(r){r&&p(t),i.r(),f=!1,d()}}}function Kt(a){let t,e,n,l,o,u,c=M(a[1]),i=[];for(let f=0;f<c.length;f+=1)i[f]=lt(rt(a,c,f));return o=new _t({props:{friend:a[0]}}),{c(){t=$("div"),e=$("ul");for(let f=0;f<i.length;f+=1)i[f].c();n=I(),l=$("div"),F(o.$$.fragment),this.h()},l(f){t=g(f,"DIV",{class:!0});var d=y(t);e=g(d,"UL",{class:!0});var r=y(e);for(let m=0;m<i.length;m+=1)i[m].l(r);r.forEach(p),n=T(d),l=g(d,"DIV",{class:!0});var s=y(l);U(o.$$.fragment,s),s.forEach(p),d.forEach(p),this.h()},h(){w(e,"class","list svelte-8i67ii"),w(l,"class","chat"),w(t,"class","containy svelte-8i67ii")},m(f,d){_(f,t,d),h(t,e);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null);h(t,n),h(t,l),z(o,l,null),u=!0},p(f,[d]){if(d&3){c=M(f[1]);let s;for(s=0;s<c.length;s+=1){const m=rt(f,c,s);i[s]?i[s].p(m,d):(i[s]=lt(m),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=c.length}const r={};d&1&&(r.friend=f[0]),o.$set(r)},i(f){u||(E(o.$$.fragment,f),u=!0)},o(f){C(o.$$.fragment,f),u=!1},d(f){f&&p(t),W(i,f),L(o)}}}function Mt(a,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const o=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,o]}class Ot extends D{constructor(t){super(),P(this,t,Mt,Kt,S,{})}}const jt=`<script>\r
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
`;function st(a,t,e){const n=a.slice();return n[4]=t[e],n}function at(a){let t,e,n,l,o=a[4].name+"",u,c,i,f,d;return i=ut(a[3][0]),{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=v(o),c=I(),this.h()},l(r){t=g(r,"LI",{class:!0});var s=y(t);e=g(s,"LABEL",{class:!0});var m=y(e);n=g(m,"INPUT",{type:!0,class:!0}),l=T(m),u=b(m,o),m.forEach(p),c=T(s),s.forEach(p),this.h()},h(){w(n,"type","radio"),n.__value=a[4],O(n,n.__value),w(n,"class","svelte-6z6zo0"),w(e,"class","svelte-6z6zo0"),j(e,"selected",a[0]===a[4]),w(t,"class","svelte-6z6zo0"),i.p(n)},m(r,s){_(r,t,s),h(t,e),h(e,n),n.checked=n.__value===a[0],h(e,l),h(e,u),h(t,c),f||(d=R(n,"change",a[2]),f=!0)},p(r,s){s&1&&(n.checked=n.__value===r[0]),s&3&&j(e,"selected",r[0]===r[4])},d(r){r&&p(t),i.r(),f=!1,d()}}}function it(a){let t,e;return t=new _t({props:{friend:a[0]}}),{c(){F(t.$$.fragment)},l(n){U(t.$$.fragment,n)},m(n,l){z(t,n,l),e=!0},p(n,l){const o={};l&1&&(o.friend=n[0]),t.$set(o)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){C(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}function Jt(a){let t,e,n,l,o=a[0],u,c=M(a[1]),i=[];for(let d=0;d<c.length;d+=1)i[d]=at(st(a,c,d));let f=it(a);return{c(){t=$("div"),e=$("ul");for(let d=0;d<i.length;d+=1)i[d].c();n=I(),l=$("div"),f.c(),this.h()},l(d){t=g(d,"DIV",{class:!0});var r=y(t);e=g(r,"UL",{class:!0});var s=y(e);for(let k=0;k<i.length;k+=1)i[k].l(s);s.forEach(p),n=T(r),l=g(r,"DIV",{class:!0});var m=y(l);f.l(m),m.forEach(p),r.forEach(p),this.h()},h(){w(e,"class","list svelte-6z6zo0"),w(l,"class","chat"),w(t,"class","containy svelte-6z6zo0")},m(d,r){_(d,t,r),h(t,e);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null);h(t,n),h(t,l),f.m(l,null),u=!0},p(d,[r]){if(r&3){c=M(d[1]);let s;for(s=0;s<c.length;s+=1){const m=st(d,c,s);i[s]?i[s].p(m,r):(i[s]=at(m),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=c.length}r&1&&S(o,o=d[0])?(dt(),C(f,1,1,A),pt(),f=it(d),f.c(),E(f,1),f.m(l,null)):f.p(d,r)},i(d){u||(E(f),u=!0)},o(d){C(f),u=!1},d(d){d&&p(t),W(i,d),f.d(d)}}}function qt(a,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const o=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,o]}class Ht extends D{constructor(t){super(),P(this,t,qt,Jt,S,{})}}const Wt=`<script>\r
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
`,Xt=`<script>\r
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
`;function Zt(a){let t;return{c(){t=v("recreate elements or components")},l(e){t=b(e,"recreate elements or components")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function Gt(a){let t;return{c(){t=v("changed")},l(e){t=b(e,"changed")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function Qt(a){let t,e,n,l,o,u;return e=new K({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),l=new K({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),{c(){t=v("Sometimes we may want to "),F(e.$$.fragment),n=v(" when something has "),F(l.$$.fragment),o=v(".")},l(c){t=b(c,"Sometimes we may want to "),U(e.$$.fragment,c),n=b(c," when something has "),U(l.$$.fragment,c),o=b(c,".")},m(c,i){_(c,t,i),z(e,c,i),_(c,n,i),z(l,c,i),_(c,o,i),u=!0},p(c,i){const f={};i&2&&(f.$$scope={dirty:i,ctx:c}),e.$set(f);const d={};i&2&&(d.$$scope={dirty:i,ctx:c}),l.$set(d)},i(c){u||(E(e.$$.fragment,c),E(l.$$.fragment,c),u=!0)},o(c){C(e.$$.fragment,c),C(l.$$.fragment,c),u=!1},d(c){c&&(p(t),p(n),p(o)),L(e,c),L(l,c)}}}function Yt(a){let t;return{c(){t=v("reset function")},l(e){t=b(e,"reset function")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function xt(a){let t;return{c(){t=v("resets the whole state")},l(e){t=b(e,"resets the whole state")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function te(a){let t;return{c(){t=v("use the key block")},l(e){t=b(e,"use the key block")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function ee(a){let t;return{c(){t=v("reinitialize a new one")},l(e){t=b(e,"reinitialize a new one")},m(e,n){_(e,t,n)},d(e){e&&p(t)}}}function ne(a){let t,e,n,l,o,u,c,i,f,d;return e=new K({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),l=new K({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),u=new K({props:{$$slots:{default:[te]},$$scope:{ctx:a}}}),i=new K({props:{$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){t=v("In this case, rather than creating a "),F(e.$$.fragment),n=v(" that "),F(l.$$.fragment),o=v(" we could simply "),F(u.$$.fragment),c=v(" to destroy the component and "),F(i.$$.fragment),f=v(".")},l(r){t=b(r,"In this case, rather than creating a "),U(e.$$.fragment,r),n=b(r," that "),U(l.$$.fragment,r),o=b(r," we could simply "),U(u.$$.fragment,r),c=b(r," to destroy the component and "),U(i.$$.fragment,r),f=b(r,".")},m(r,s){_(r,t,s),z(e,r,s),_(r,n,s),z(l,r,s),_(r,o,s),z(u,r,s),_(r,c,s),z(i,r,s),_(r,f,s),d=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),e.$set(m);const k={};s&2&&(k.$$scope={dirty:s,ctx:r}),l.$set(k);const N={};s&2&&(N.$$scope={dirty:s,ctx:r}),u.$set(N);const B={};s&2&&(B.$$scope={dirty:s,ctx:r}),i.$set(B)},i(r){d||(E(e.$$.fragment,r),E(l.$$.fragment,r),E(u.$$.fragment,r),E(i.$$.fragment,r),d=!0)},o(r){C(e.$$.fragment,r),C(l.$$.fragment,r),C(u.$$.fragment,r),C(i.$$.fragment,r),d=!1},d(r){r&&(p(t),p(n),p(o),p(c),p(f)),L(e,r),L(l,r),L(u,r),L(i,r)}}}function re(a){let t,e,n,l,o,u,c,i,f,d;return t=new Q({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),n=new Y({props:{name:[{name:"Count",comp:kt,raw:yt,text:"Imagine that you wanted to clear the input field whenever you clicked the button."},{name:"CountKey",comp:Et,raw:It,text:"Just add a key block wrapping the input with the variable that should trigger the recreation of the element!"},{name:"CountFade",comp:Ut,raw:zt,text:"We could add a transition that fades in, however it only shows once."},{name:"CountFadeKey",comp:At,raw:St,text:"But if we add a key block it fades in every time it's recreated when the count variable changes!"}]}}),o=new Y({props:{name:[{name:"App",comp:Ot,raw:jt,text:"Here we have a chat app where we can select a friend and see their messages. But, when clicking, the component using the friend prop doesn't update."},{name:"App2",comp:Ht,raw:Wt,text:"To fix this we can simply surround the Chat component with a key block referencing selectedFriend. Every time we select a new friend the Chat component is recreated!"}]}}),c=new gt({props:{code:Xt,name:"Chat.svelte"}}),f=new Q({props:{$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){F(t.$$.fragment),e=I(),F(n.$$.fragment),l=I(),F(o.$$.fragment),u=I(),F(c.$$.fragment),i=I(),F(f.$$.fragment)},l(r){U(t.$$.fragment,r),e=T(r),U(n.$$.fragment,r),l=T(r),U(o.$$.fragment,r),u=T(r),U(c.$$.fragment,r),i=T(r),U(f.$$.fragment,r)},m(r,s){z(t,r,s),_(r,e,s),z(n,r,s),_(r,l,s),z(o,r,s),_(r,u,s),z(c,r,s),_(r,i,s),z(f,r,s),d=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),t.$set(m);const k={};s&2&&(k.$$scope={dirty:s,ctx:r}),f.$set(k)},i(r){d||(E(t.$$.fragment,r),E(n.$$.fragment,r),E(o.$$.fragment,r),E(c.$$.fragment,r),E(f.$$.fragment,r),d=!0)},o(r){C(t.$$.fragment,r),C(n.$$.fragment,r),C(o.$$.fragment,r),C(c.$$.fragment,r),C(f.$$.fragment,r),d=!1},d(r){r&&(p(e),p(l),p(u),p(i)),L(t,r),L(n,r),L(o,r),L(c,r),L(f,r)}}}function le(a){let t,e;const n=[a[0],ot];let l={$$slots:{default:[re]},$$scope:{ctx:a}};for(let o=0;o<n.length;o+=1)l=H(l,n[o]);return t=new $t({props:l}),{c(){F(t.$$.fragment)},l(o){U(t.$$.fragment,o)},m(o,u){z(t,o,u),e=!0},p(o,[u]){const c=u&1?ht(n,[u&1&&G(o[0]),u&0&&G(ot)]):{};u&2&&(c.$$scope={dirty:u,ctx:o}),t.$set(c)},i(o){e||(E(t.$$.fragment,o),e=!0)},o(o){C(t.$$.fragment,o),e=!1},d(o){L(t,o)}}}const ot={title:"{#key}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-09T00:00:00.000Z",layout:"notes"};function se(a,t,e){return a.$$set=n=>{e(0,t=H(H({},t),Z(n)))},t=Z(t),[t]}class me extends D{constructor(t){super(),P(this,t,se,le,S,{})}}export{me as default,ot as metadata};
