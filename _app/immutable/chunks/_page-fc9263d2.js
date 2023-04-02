import{S,i as B,s as P,k as $,a as I,q as g,l as v,c as T,m as y,r as b,h as d,n as w,b as m,G as h,Q as O,u as V,B as A,ac as ot,ad as ct,e as H,g as ut,t as C,d as ft,f as E,a1 as J,L as G,w as F,x as z,y as L,z as N,$ as K,M as j,N as mt,O as Q,P as W}from"./index-58af1356.js";import{M as _t,P as Z}from"./mdsvex-layout-notes-a943bafe.js";import{f as pt}from"./index-01fd903e.js";import{S as X}from"./ShowMany-e03b9690.js";import{S as ht}from"./ShowCode-978958bd.js";import{S as R}from"./Strong-d8efce91.js";function $t(s){let t,e,n,l,c,u;return{c(){t=$("input"),e=I(),n=$("button"),l=g(s[0]),this.h()},l(a){t=v(a,"INPUT",{type:!0}),e=T(a),n=v(a,"BUTTON",{});var o=y(n);l=b(o,s[0]),o.forEach(d),this.h()},h(){w(t,"type","text")},m(a,o){m(a,t,o),m(a,e,o),m(a,n,o),h(n,l),c||(u=O(n,"click",s[1]),c=!0)},p(a,[o]){o&1&&V(l,a[0])},i:A,o:A,d(a){a&&d(t),a&&d(e),a&&d(n),c=!1,u()}}}function vt(s,t,e){let n=0;return[n,()=>e(0,n++,n)]}class gt extends S{constructor(t){super(),B(this,t,vt,$t,P,{})}}const bt=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<input type="text" />\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function Y(s){let t;return{c(){t=$("input"),this.h()},l(e){t=v(e,"INPUT",{type:!0}),this.h()},h(){w(t,"type","text")},m(e,n){m(e,t,n)},p:A,d(e){e&&d(t)}}}function kt(s){let t=s[0],e,n,l,c,u,a=Y();return{c(){a.c(),e=I(),n=$("button"),l=g(s[0])},l(o){a.l(o),e=T(o),n=v(o,"BUTTON",{});var p=y(n);l=b(p,s[0]),p.forEach(d)},m(o,p){a.m(o,p),m(o,e,p),m(o,n,p),h(n,l),c||(u=O(n,"click",s[1]),c=!0)},p(o,[p]){p&1&&P(t,t=o[0])?(a.d(1),a=Y(),a.c(),a.m(e.parentNode,e)):a.p(o,p),p&1&&V(l,o[0])},i:A,o:A,d(o){a.d(o),o&&d(e),o&&d(n),c=!1,u()}}}function yt(s,t,e){let n=0;return[n,()=>e(0,n++,n)]}class wt extends S{constructor(t){super(),B(this,t,yt,kt,P,{})}}const Ct=`<script>\r
	let count = 0;\r
<\/script>\r
\r
{#key count}\r
	<input type="text" />\r
{/key}\r
\r
<button on:click={() => count++}>{count}</button>\r
`;function Et(s){let t,e,n,l,c,u,a,o,p,f;return{c(){t=$("input"),e=I(),n=$("button"),l=g(s[0]),c=I(),u=$("div"),a=g(s[0]),this.h()},l(r){t=v(r,"INPUT",{type:!0}),e=T(r),n=v(r,"BUTTON",{});var i=y(n);l=b(i,s[0]),i.forEach(d),c=T(r),u=v(r,"DIV",{});var _=y(u);a=b(_,s[0]),_.forEach(d),this.h()},h(){w(t,"type","text")},m(r,i){m(r,t,i),m(r,e,i),m(r,n,i),h(n,l),m(r,c,i),m(r,u,i),h(u,a),p||(f=O(n,"click",s[1]),p=!0)},p(r,[i]){i&1&&V(l,r[0]),i&1&&V(a,r[0])},i(r){o||ot(()=>{o=ct(u,pt,{}),o.start()})},o:A,d(r){r&&d(t),r&&d(e),r&&d(n),r&&d(c),r&&d(u),p=!1,f()}}}function It(s,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Tt extends S{constructor(t){super(),B(this,t,It,Et,P,{})}}const Ft=`<script>\r
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
`;function x(s){let t,e,n;return{c(){t=$("div"),e=g(s[0])},l(l){t=v(l,"DIV",{});var c=y(t);e=b(c,s[0]),c.forEach(d)},m(l,c){m(l,t,c),h(t,e)},p(l,c){c&1&&V(e,l[0])},i(l){n||ot(()=>{n=ct(t,pt,{}),n.start()})},o:A,d(l){l&&d(t)}}}function zt(s){let t,e,n,l,c,u=s[0],a,o,p,f=x(s);return{c(){t=$("input"),e=I(),n=$("button"),l=g(s[0]),c=I(),f.c(),a=H(),this.h()},l(r){t=v(r,"INPUT",{type:!0}),e=T(r),n=v(r,"BUTTON",{});var i=y(n);l=b(i,s[0]),i.forEach(d),c=T(r),f.l(r),a=H(),this.h()},h(){w(t,"type","text")},m(r,i){m(r,t,i),m(r,e,i),m(r,n,i),h(n,l),m(r,c,i),f.m(r,i),m(r,a,i),o||(p=O(n,"click",s[1]),o=!0)},p(r,[i]){i&1&&V(l,r[0]),i&1&&P(u,u=r[0])?(ut(),C(f,1,1,A),ft(),f=x(r),f.c(),E(f,1),f.m(a.parentNode,a)):f.p(r,i)},i(r){E(f)},o(r){C(f)},d(r){r&&d(t),r&&d(e),r&&d(n),r&&d(c),r&&d(a),f.d(r),o=!1,p()}}}function Lt(s,t,e){let n=0;return[n,()=>e(0,n++,n)]}class Nt extends S{constructor(t){super(),B(this,t,Lt,zt,P,{})}}const Ut=`<script>\r
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
`;async function At(s){return await new Promise(t=>setTimeout(t,1e3)),new Array(q(3,4)).fill(null).map(t=>{const e=q(5,10);return`${s}: "${String.fromCharCode(...new Array(e).fill(0).map(n=>q(65,52)))}"`})}function q(s,t){return Math.round(Math.random()*t+s)}function tt(s,t,e){const n=s.slice();return n[7]=t[e],n}function Pt(s){let t,e=s[1],n=[];for(let l=0;l<e.length;l+=1)n[l]=et(tt(s,e,l));return{c(){t=$("ul");for(let l=0;l<n.length;l+=1)n[l].c()},l(l){t=v(l,"UL",{});var c=y(t);for(let u=0;u<n.length;u+=1)n[u].l(c);c.forEach(d)},m(l,c){m(l,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null)},p(l,c){if(c&2){e=l[1];let u;for(u=0;u<e.length;u+=1){const a=tt(l,e,u);n[u]?n[u].p(a,c):(n[u]=et(a),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=e.length}},d(l){l&&d(t),G(n,l)}}}function St(s){let t;return{c(){t=g("Loading ...")},l(e){t=b(e,"Loading ...")},m(e,n){m(e,t,n)},p:A,d(e){e&&d(t)}}}function et(s){let t,e=s[7]+"",n;return{c(){t=$("li"),n=g(e)},l(l){t=v(l,"LI",{});var c=y(t);n=b(c,e),c.forEach(d)},m(l,c){m(l,t,c),h(t,n)},p(l,c){c&2&&e!==(e=l[7]+"")&&V(n,e)},d(l){l&&d(t)}}}function Bt(s){let t,e,n,l,c,u,a,o,p,f;function r(k,U){return k[2]?St:Pt}let i=r(s),_=i(s);return{c(){t=$("div"),e=$("div"),n=$("div"),l=g("Talking to "),c=g(s[3]),u=I(),_.c(),a=I(),o=$("input"),this.h()},l(k){t=v(k,"DIV",{class:!0});var U=y(t);e=v(U,"DIV",{class:!0});var D=y(e);n=v(D,"DIV",{});var M=y(n);l=b(M,"Talking to "),c=b(M,s[3]),M.forEach(d),u=T(D),_.l(D),D.forEach(d),a=T(U),o=v(U,"INPUT",{}),U.forEach(d),this.h()},h(){w(e,"class","content svelte-d6zxq5"),w(t,"class","uno-ylix55")},m(k,U){m(k,t,U),h(t,e),h(e,n),h(n,l),h(n,c),h(e,u),_.m(e,null),h(t,a),h(t,o),J(o,s[0]),p||(f=O(o,"input",s[5]),p=!0)},p(k,[U]){i===(i=r(k))&&_?_.p(k,U):(_.d(1),_=i(k),_&&(_.c(),_.m(e,null))),U&1&&o.value!==k[0]&&J(o,k[0])},i:A,o:A,d(k){k&&d(t),_.d(),p=!1,f()}}}function Dt(s,t,e){let{friend:n}=t,l=n.name,c="",u=[],a=!1;o(l);async function o(f){e(2,a=!0),e(1,u=await At(f)),e(2,a=!1)}function p(){c=this.value,e(0,c)}return s.$$set=f=>{"friend"in f&&e(4,n=f.friend)},[c,u,a,l,n,p]}class dt extends S{constructor(t){super(),B(this,t,Dt,Bt,P,{friend:4})}}function nt(s,t,e){const n=s.slice();return n[4]=t[e],n}function rt(s){let t,e,n,l,c=s[4].name+"",u,a,o,p;return{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=g(c),a=I(),this.h()},l(f){t=v(f,"LI",{class:!0});var r=y(t);e=v(r,"LABEL",{class:!0});var i=y(e);n=v(i,"INPUT",{type:!0,class:!0}),l=T(i),u=b(i,c),i.forEach(d),a=T(r),r.forEach(d),this.h()},h(){w(n,"type","radio"),n.__value=s[4],n.value=n.__value,w(n,"class","svelte-8i67ii"),s[3][0].push(n),w(e,"class","svelte-8i67ii"),K(e,"selected",s[0]===s[4]),w(t,"class","svelte-8i67ii")},m(f,r){m(f,t,r),h(t,e),h(e,n),n.checked=n.__value===s[0],h(e,l),h(e,u),h(t,a),o||(p=O(n,"change",s[2]),o=!0)},p(f,r){r&1&&(n.checked=n.__value===f[0]),r&3&&K(e,"selected",f[0]===f[4])},d(f){f&&d(t),s[3][0].splice(s[3][0].indexOf(n),1),o=!1,p()}}}function Vt(s){let t,e,n,l,c,u,a=s[1],o=[];for(let p=0;p<a.length;p+=1)o[p]=rt(nt(s,a,p));return c=new dt({props:{friend:s[0]}}),{c(){t=$("div"),e=$("ul");for(let p=0;p<o.length;p+=1)o[p].c();n=I(),l=$("div"),F(c.$$.fragment),this.h()},l(p){t=v(p,"DIV",{class:!0});var f=y(t);e=v(f,"UL",{class:!0});var r=y(e);for(let _=0;_<o.length;_+=1)o[_].l(r);r.forEach(d),n=T(f),l=v(f,"DIV",{class:!0});var i=y(l);z(c.$$.fragment,i),i.forEach(d),f.forEach(d),this.h()},h(){w(e,"class","list svelte-8i67ii"),w(l,"class","chat"),w(t,"class","containy svelte-8i67ii")},m(p,f){m(p,t,f),h(t,e);for(let r=0;r<o.length;r+=1)o[r].m(e,null);h(t,n),h(t,l),L(c,l,null),u=!0},p(p,[f]){if(f&3){a=p[1];let i;for(i=0;i<a.length;i+=1){const _=nt(p,a,i);o[i]?o[i].p(_,f):(o[i]=rt(_),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=a.length}const r={};f&1&&(r.friend=p[0]),c.$set(r)},i(p){u||(E(c.$$.fragment,p),u=!0)},o(p){C(c.$$.fragment,p),u=!1},d(p){p&&d(t),G(o,p),N(c)}}}function Ot(s,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const c=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,c]}class Rt extends S{constructor(t){super(),B(this,t,Ot,Vt,P,{})}}const Kt=`<script>\r
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
`;function lt(s,t,e){const n=s.slice();return n[4]=t[e],n}function st(s){let t,e,n,l,c=s[4].name+"",u,a,o,p;return{c(){t=$("li"),e=$("label"),n=$("input"),l=I(),u=g(c),a=I(),this.h()},l(f){t=v(f,"LI",{class:!0});var r=y(t);e=v(r,"LABEL",{class:!0});var i=y(e);n=v(i,"INPUT",{type:!0,class:!0}),l=T(i),u=b(i,c),i.forEach(d),a=T(r),r.forEach(d),this.h()},h(){w(n,"type","radio"),n.__value=s[4],n.value=n.__value,w(n,"class","svelte-6z6zo0"),s[3][0].push(n),w(e,"class","svelte-6z6zo0"),K(e,"selected",s[0]===s[4]),w(t,"class","svelte-6z6zo0")},m(f,r){m(f,t,r),h(t,e),h(e,n),n.checked=n.__value===s[0],h(e,l),h(e,u),h(t,a),o||(p=O(n,"change",s[2]),o=!0)},p(f,r){r&1&&(n.checked=n.__value===f[0]),r&3&&K(e,"selected",f[0]===f[4])},d(f){f&&d(t),s[3][0].splice(s[3][0].indexOf(n),1),o=!1,p()}}}function at(s){let t,e;return t=new dt({props:{friend:s[0]}}),{c(){F(t.$$.fragment)},l(n){z(t.$$.fragment,n)},m(n,l){L(t,n,l),e=!0},p(n,l){const c={};l&1&&(c.friend=n[0]),t.$set(c)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){C(t.$$.fragment,n),e=!1},d(n){N(t,n)}}}function Mt(s){let t,e,n,l,c=s[0],u,a=s[1],o=[];for(let f=0;f<a.length;f+=1)o[f]=st(lt(s,a,f));let p=at(s);return{c(){t=$("div"),e=$("ul");for(let f=0;f<o.length;f+=1)o[f].c();n=I(),l=$("div"),p.c(),this.h()},l(f){t=v(f,"DIV",{class:!0});var r=y(t);e=v(r,"UL",{class:!0});var i=y(e);for(let k=0;k<o.length;k+=1)o[k].l(i);i.forEach(d),n=T(r),l=v(r,"DIV",{class:!0});var _=y(l);p.l(_),_.forEach(d),r.forEach(d),this.h()},h(){w(e,"class","list svelte-6z6zo0"),w(l,"class","chat"),w(t,"class","containy svelte-6z6zo0")},m(f,r){m(f,t,r),h(t,e);for(let i=0;i<o.length;i+=1)o[i].m(e,null);h(t,n),h(t,l),p.m(l,null),u=!0},p(f,[r]){if(r&3){a=f[1];let i;for(i=0;i<a.length;i+=1){const _=lt(f,a,i);o[i]?o[i].p(_,r):(o[i]=st(_),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=a.length}r&1&&P(c,c=f[0])?(ut(),C(p,1,1,A),ft(),p=at(f),p.c(),E(p,1),p.m(l,null)):p.p(f,r)},i(f){u||(E(p),u=!0)},o(f){C(p),u=!1},d(f){f&&d(t),G(o,f),p.d(f)}}}function qt(s,t,e){let n=[{name:"alfred"},{name:"ben"},{name:"charlie"},{name:"dawson"},{name:"elain"}],l=n[2];const c=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,c]}class jt extends S{constructor(t){super(),B(this,t,qt,Mt,P,{})}}const Gt=`<script>\r
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
`,Ht=`<script>\r
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
`;function Jt(s){let t;return{c(){t=g("recreate elements or components")},l(e){t=b(e,"recreate elements or components")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function Qt(s){let t;return{c(){t=g("changed")},l(e){t=b(e,"changed")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function Wt(s){let t,e,n,l,c,u;return e=new R({props:{$$slots:{default:[Jt]},$$scope:{ctx:s}}}),l=new R({props:{$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){t=g("Sometimes we may want to "),F(e.$$.fragment),n=g(" when something has "),F(l.$$.fragment),c=g(".")},l(a){t=b(a,"Sometimes we may want to "),z(e.$$.fragment,a),n=b(a," when something has "),z(l.$$.fragment,a),c=b(a,".")},m(a,o){m(a,t,o),L(e,a,o),m(a,n,o),L(l,a,o),m(a,c,o),u=!0},p(a,o){const p={};o&2&&(p.$$scope={dirty:o,ctx:a}),e.$set(p);const f={};o&2&&(f.$$scope={dirty:o,ctx:a}),l.$set(f)},i(a){u||(E(e.$$.fragment,a),E(l.$$.fragment,a),u=!0)},o(a){C(e.$$.fragment,a),C(l.$$.fragment,a),u=!1},d(a){a&&d(t),N(e,a),a&&d(n),N(l,a),a&&d(c)}}}function Zt(s){let t;return{c(){t=g("reset function")},l(e){t=b(e,"reset function")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function Xt(s){let t;return{c(){t=g("resets the whole state")},l(e){t=b(e,"resets the whole state")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function Yt(s){let t;return{c(){t=g("use the key block")},l(e){t=b(e,"use the key block")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function xt(s){let t;return{c(){t=g("reinitialize a new one")},l(e){t=b(e,"reinitialize a new one")},m(e,n){m(e,t,n)},d(e){e&&d(t)}}}function te(s){let t,e,n,l,c,u,a,o,p,f;return e=new R({props:{$$slots:{default:[Zt]},$$scope:{ctx:s}}}),l=new R({props:{$$slots:{default:[Xt]},$$scope:{ctx:s}}}),u=new R({props:{$$slots:{default:[Yt]},$$scope:{ctx:s}}}),o=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){t=g("In this case, rather than creating a "),F(e.$$.fragment),n=g(" that "),F(l.$$.fragment),c=g(" we could simply "),F(u.$$.fragment),a=g(" to destroy the component and "),F(o.$$.fragment),p=g(".")},l(r){t=b(r,"In this case, rather than creating a "),z(e.$$.fragment,r),n=b(r," that "),z(l.$$.fragment,r),c=b(r," we could simply "),z(u.$$.fragment,r),a=b(r," to destroy the component and "),z(o.$$.fragment,r),p=b(r,".")},m(r,i){m(r,t,i),L(e,r,i),m(r,n,i),L(l,r,i),m(r,c,i),L(u,r,i),m(r,a,i),L(o,r,i),m(r,p,i),f=!0},p(r,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:r}),e.$set(_);const k={};i&2&&(k.$$scope={dirty:i,ctx:r}),l.$set(k);const U={};i&2&&(U.$$scope={dirty:i,ctx:r}),u.$set(U);const D={};i&2&&(D.$$scope={dirty:i,ctx:r}),o.$set(D)},i(r){f||(E(e.$$.fragment,r),E(l.$$.fragment,r),E(u.$$.fragment,r),E(o.$$.fragment,r),f=!0)},o(r){C(e.$$.fragment,r),C(l.$$.fragment,r),C(u.$$.fragment,r),C(o.$$.fragment,r),f=!1},d(r){r&&d(t),N(e,r),r&&d(n),N(l,r),r&&d(c),N(u,r),r&&d(a),N(o,r),r&&d(p)}}}function ee(s){let t,e,n,l,c,u,a,o,p,f;return t=new Z({props:{$$slots:{default:[Wt]},$$scope:{ctx:s}}}),n=new X({props:{name:[{name:"Count",comp:gt,raw:bt,text:"Imagine that you wanted to clear the input field whenever you clicked the button."},{name:"CountKey",comp:wt,raw:Ct,text:"Just add a key block wrapping the input with the variable that should trigger the recreation of the element!"},{name:"CountFade",comp:Tt,raw:Ft,text:"We could add a transition that fades in, however it only shows once."},{name:"CountFadeKey",comp:Nt,raw:Ut,text:"But if we add a key block it fades in every time it's recreated when the count variable changes!"}]}}),c=new X({props:{name:[{name:"App",comp:Rt,raw:Kt,text:"Here we have a chat app where we can select a friend and see their messages. But, when clicking, the component using the friend prop doesn't update."},{name:"App2",comp:jt,raw:Gt,text:"To fix this we can simply surround the Chat component with a key block referencing selectedFriend. Every time we select a new friend the Chat component is recreated!"}]}}),a=new ht({props:{code:Ht,name:"Chat.svelte"}}),p=new Z({props:{$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment),e=I(),F(n.$$.fragment),l=I(),F(c.$$.fragment),u=I(),F(a.$$.fragment),o=I(),F(p.$$.fragment)},l(r){z(t.$$.fragment,r),e=T(r),z(n.$$.fragment,r),l=T(r),z(c.$$.fragment,r),u=T(r),z(a.$$.fragment,r),o=T(r),z(p.$$.fragment,r)},m(r,i){L(t,r,i),m(r,e,i),L(n,r,i),m(r,l,i),L(c,r,i),m(r,u,i),L(a,r,i),m(r,o,i),L(p,r,i),f=!0},p(r,i){const _={};i&2&&(_.$$scope={dirty:i,ctx:r}),t.$set(_);const k={};i&2&&(k.$$scope={dirty:i,ctx:r}),p.$set(k)},i(r){f||(E(t.$$.fragment,r),E(n.$$.fragment,r),E(c.$$.fragment,r),E(a.$$.fragment,r),E(p.$$.fragment,r),f=!0)},o(r){C(t.$$.fragment,r),C(n.$$.fragment,r),C(c.$$.fragment,r),C(a.$$.fragment,r),C(p.$$.fragment,r),f=!1},d(r){N(t,r),r&&d(e),N(n,r),r&&d(l),N(c,r),r&&d(u),N(a,r),r&&d(o),N(p,r)}}}function ne(s){let t,e;const n=[s[0],it];let l={$$slots:{default:[ee]},$$scope:{ctx:s}};for(let c=0;c<n.length;c+=1)l=j(l,n[c]);return t=new _t({props:l}),{c(){F(t.$$.fragment)},l(c){z(t.$$.fragment,c)},m(c,u){L(t,c,u),e=!0},p(c,[u]){const a=u&1?mt(n,[u&1&&Q(c[0]),u&0&&Q(it)]):{};u&2&&(a.$$scope={dirty:u,ctx:c}),t.$set(a)},i(c){e||(E(t.$$.fragment,c),e=!0)},o(c){C(t.$$.fragment,c),e=!1},d(c){N(t,c)}}}const it={title:"{#key}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-09T00:00:00.000Z",layout:"notes"};function re(s,t,e){return s.$$set=n=>{e(0,t=j(j({},t),W(n)))},t=W(t),[t]}class ue extends S{constructor(t){super(),B(this,t,re,ne,P,{})}}export{ue as default,it as metadata};
