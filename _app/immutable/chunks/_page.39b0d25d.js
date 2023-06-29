import{s as nt,f as T,g as A,h as H,d as c,j as S,i as b,z as Z,e as V,u as W,X as z,l as M,a as L,m as q,c as U,v as k,n as G,H as wt,J as yt,C as et,D as it}from"./scheduler.a7cd560e.js";import{S as rt,i as st,g as lt,c as ot,a as B,t as O,j as at,f as Ct,k as St,b as I,d as F,m as X,e as D}from"./index.396264e7.js";import{g as Et,a as ft}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{f as Bt,a as Ot,s as Mt,M as qt,P as ut}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Nt}from"./ShowMany.db7be1f3.js";import{e as K,u as Q,d as Tt,o as At}from"./each.32d06572.js";import{U as xt}from"./Ul.01790c78.js";import{L as J}from"./Li.8eab8712.js";import{C as j}from"./Code.64283003.js";function ct(l,t,e){const r=l.slice();return r[10]=t[e],r[11]=t,r[12]=e,r}function dt(l,t,e){const r=l.slice();return r[13]=t[e],r[15]=e,r}function Lt(l){let t,e="+",r,i;function a(){return l[7](l[10],l[11],l[12])}return{c(){t=T("button"),t.textContent=e,this.h()},l(n){t=A(n,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(t)!=="svelte-1b8ehxb"&&(t.textContent=e),this.h()},h(){S(t,"class","add-list svelte-77a8q3")},m(n,s){b(n,t,s),r||(i=z(t,"click",a),r=!0)},p(n,s){l=n},d(n){n&&c(t),r=!1,i()}}}function Ut(l){let t,e,r=l[1][l[12]].title+"",i,a,n,s="X",f,o,u=[],g=new Map,d,p,m,h;function v(){return l[2](l[10],l[11],l[12])}let N=K(l[10].items);const P=C=>C[13];for(let C=0;C<N.length;C+=1){let w=dt(l,N,C),_=P(w);g.set(_,u[C]=mt(_,w))}let y=l[10].items.length!==3&&ht(l);function R(){return l[5](l[10],l[11],l[12])}function E(){return l[6](l[10],l[11],l[12])}return{c(){t=T("div"),e=T("div"),i=M(r),a=L(),n=T("button"),n.textContent=s,f=L(),o=T("ul");for(let C=0;C<u.length;C+=1)u[C].c();d=L(),y&&y.c(),p=L(),this.h()},l(C){t=A(C,"DIV",{class:!0});var w=H(t);e=A(w,"DIV",{class:!0});var _=H(e);i=q(_,r),_.forEach(c),a=U(w),n=A(w,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(n)!=="svelte-edtba9"&&(n.textContent=s),f=U(w),o=A(w,"UL",{class:!0});var $=H(o);for(let x=0;x<u.length;x+=1)u[x].l($);d=U($),y&&y.l($),$.forEach(c),p=U(w),w.forEach(c),this.h()},h(){S(e,"class","title svelte-77a8q3"),S(n,"class","close svelte-77a8q3"),S(o,"class","items svelte-77a8q3"),S(t,"class","list svelte-77a8q3")},m(C,w){b(C,t,w),k(t,e),k(e,i),k(t,a),k(t,n),k(t,f),k(t,o);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(o,null);k(o,d),y&&y.m(o,null),k(t,p),m||(h=[z(n,"click",v),z(t,"introend",R),z(t,"outroend",E)],m=!0)},p(C,w){l=C,w&1&&r!==(r=l[1][l[12]].title+"")&&G(i,r),w&3&&(N=K(l[10].items),u=Q(u,w,P,1,l,N,g,o,Tt,mt,d,dt)),l[10].items.length!==3?y?y.p(l,w):(y=ht(l),y.c(),y.m(o,null)):y&&(y.d(1),y=null)},d(C){C&&c(t);for(let w=0;w<u.length;w+=1)u[w].d();y&&y.d(),m=!1,wt(h)}}}function mt(l,t){let e,r,i,a=t[1][t[12]].items[t[13]]+"",n,s,f="X",o,u;function g(){return t[3](t[10],t[13],t[11],t[12])}return{key:l,first:null,c(){e=T("li"),r=T("button"),i=T("span"),n=M(a),s=T("span"),s.textContent=f,this.h()},l(d){e=A(d,"LI",{class:!0});var p=H(e);r=A(p,"BUTTON",{});var m=H(r);i=A(m,"SPAN",{class:!0});var h=H(i);n=q(h,a),h.forEach(c),s=A(m,"SPAN",{class:!0,["data-svelte-h"]:!0}),W(s)!=="svelte-1w256fn"&&(s.textContent=f),m.forEach(c),p.forEach(c),this.h()},h(){S(i,"class","svelte-77a8q3"),S(s,"class","spu-g1tcfd svelte-77a8q3"),S(e,"class","item svelte-77a8q3"),this.first=e},m(d,p){b(d,e,p),k(e,r),k(r,i),k(i,n),k(r,s),o||(u=z(r,"click",g),o=!0)},p(d,p){t=d,p&1&&a!==(a=t[1][t[12]].items[t[13]]+"")&&G(n,a)},d(d){d&&c(e),o=!1,u()}}}function ht(l){let t,e="Add item",r,i;function a(){return l[4](l[10],l[11],l[12])}return{c(){t=T("button"),t.textContent=e,this.h()},l(n){t=A(n,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(t)!=="svelte-13fr9qn"&&(t.textContent=e),this.h()},h(){S(t,"class","add-item")},m(n,s){b(n,t,s),r||(i=z(t,"click",a),r=!0)},p(n,s){l=n},d(n){n&&c(t),r=!1,i()}}}function pt(l,t){let e,r;function i(s,f){return s[10].show?Ut:Lt}let a=i(t),n=a(t);return{key:l,first:null,c(){e=V(),n.c(),r=V(),this.h()},l(s){e=V(),n.l(s),r=V(),this.h()},h(){this.first=e},m(s,f){b(s,e,f),n.m(s,f),b(s,r,f)},p(s,f){t=s,a===(a=i(t))&&n?n.p(t,f):(n.d(1),n=a(t),n&&(n.c(),n.m(r.parentNode,r)))},d(s){s&&(c(e),c(r)),n.d(s)}}}function It(l){let t,e=[],r=new Map,i=K(l[0]);const a=n=>n[12];for(let n=0;n<i.length;n+=1){let s=ct(l,i,n),f=a(s);r.set(f,e[n]=pt(f,s))}return{c(){t=T("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=A(n,"DIV",{class:!0});var s=H(t);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(c),this.h()},h(){S(t,"class","containery svelte-77a8q3")},m(n,s){b(n,t,s);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null)},p(n,[s]){s&3&&(i=K(n[0]),e=Q(e,s,a,1,n,i,r,t,Tt,pt,null,ct))},i:Z,o:Z,d(n){n&&c(t);for(let s=0;s<e.length;s+=1)e[s].d()}}}function Ft(l,t,e){const r=[{title:"Hall",items:["Sweep the floor","Mop the floor","Throw the rubbish"]},{title:"Kitchen",items:["Wash the plates","Tidy the table","Boil the soup"]},{title:"Toilet",items:["Brush the sink","Flush the toilet","Scrub the floors"]}];let i=[{show:!0,items:[0,1]},{show:!1,items:[0]},{show:!1,items:[0,1]}],a;return a=matchMedia("(prefers-reduced-motion: reduce)"),a.matches,a.onchange=d=>{d.matches},[i,r,(d,p,m)=>e(0,p[m].show=!1,i),(d,p,m,h)=>{e(0,m[h].items=d.items.filter(v=>v!==p),i)},(d,p,m)=>{const h=new Set([0,1,2]);d.items.forEach(v=>h.delete(v)),d.items.push(Array.from(h)[0]),e(0,p[m].items=d.items,i)},(d,p,m)=>{e(0,p[m].shown=!0,i)},(d,p,m)=>{e(0,p[m].shown=!1,i)},(d,p,m)=>e(0,p[m].show=!0,i)]}class Xt extends rt{constructor(t){super(),st(this,t,Ft,It,nt,{})}}const Dt=`<script>\r
	import { browser } from "$app/environment";\r
	const data = [\r
		{ title: "Hall", items: ["Sweep the floor", "Mop the floor", "Throw the rubbish"] },\r
		{ title: "Kitchen", items: ["Wash the plates", "Tidy the table", "Boil the soup"] },\r
		{ title: "Toilet", items: ["Brush the sink", "Flush the toilet", "Scrub the floors"] },\r
	];\r
	let lists = [\r
		{ show: true, items: [0, 1] },\r
		{ show: false, items: [0] },\r
		{ show: false, items: [0, 1] },\r
	];\r
	let media;\r
	let noAnimation;\r
	if (browser) {\r
		media = matchMedia("(prefers-reduced-motion: reduce)");\r
		noAnimation = media.matches;\r
		media.onchange = (event) => {\r
			noAnimation = event.matches;\r
		};\r
	}\r
\r
	function t() {\r
		return {\r
			delay: 0,\r
		};\r
	}\r
<\/script>\r
\r
<div class="containery">\r
	{#each lists as list, i (i)}\r
		{#if list.show}\r
			<div\r
				on:introend={() => {\r
					list.shown = true;\r
				}}\r
				on:outroend={() => {\r
					list.shown = false;\r
				}}\r
				class="list">\r
				<div class="title">{data[i].title}</div>\r
				<button class="close" on:click={() => (list.show = false)}>X</button>\r
				<ul class="items">\r
					{#each list.items as item, index (item)}\r
						<li class="item">\r
							<button\r
								on:click={() => {\r
									list.items = list.items.filter((i) => i !== item);\r
								}}><span>{data[i].items[item]}</span><span class="pl-4">X</span></button>\r
						</li>\r
					{/each}\r
					{#if list.items.length !== 3}\r
						<button\r
							class="add-item"\r
							on:click={() => {\r
								const potential = new Set([0, 1, 2]);\r
								list.items.forEach((item) => potential.delete(item));\r
								list.items.push(Array.from(potential)[0]);\r
								list.items = list.items;\r
							}}>\r
							Add item\r
						</button>\r
					{/if}\r
				</ul>\r
			</div>\r
		{:else}\r
			<button class="add-list" on:click={() => (list.show = true)}>+</button>\r
		{/if}\r
	{/each}\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: repeat(3, 1fr);\r
	}\r
	.list,\r
	.add-list {\r
		margin: 20px;\r
		border: 1px solid #999;\r
		border-radius: 4px;\r
		padding: 20px;\r
		box-shadow: 4px 4px 4px #ddd;\r
		position: relative;\r
	}\r
	.title {\r
		font-size: 18px;\r
		font-weight: bold;\r
	}\r
	.close {\r
		position: absolute;\r
		top: 10px;\r
		right: 10px;\r
		background: none;\r
		border: none;\r
		cursor: pointer;\r
	}\r
	.items {\r
		list-style: none;\r
		padding: 0;\r
		height: 250px;\r
	}\r
	.items li {\r
		margin-bottom: 16px;\r
		padding: 8px;\r
		border: 1px solid #999;\r
		border-radius: 4px;\r
		box-shadow: 2px 2px 2px #ddd;\r
		transition: all 0.5s ease;\r
	}\r
	.items li:hover {\r
		box-shadow: 4px 4px 4px #ddd;\r
	}\r
	.item {\r
		display: flex;\r
	}\r
	.item span:first-child {\r
		flex: 1;\r
	}\r
	.add-list {\r
		display: grid;\r
		place-items: center;\r
		font-size: 100px;\r
		cursor: pointer;\r
		background: rgba(0, 0, 255, 0.05);\r
		color: blue;\r
		border: none;\r
		box-shadow: none;\r
	}\r
	.items li.add-item {\r
		border: none;\r
		background: none;\r
		box-shadow: none;\r
		color: blue;\r
		text-align: center;\r
		background: rgba(0, 0, 255, 0.05);\r
	}\r
</style>\r
`;function _t(l,t,e){const r=l.slice();return r[11]=t[e],r[12]=t,r[13]=e,r}function $t(l,t,e){const r=l.slice();return r[14]=t[e],r[16]=e,r}function Ht(l){let t,e="+",r,i;function a(){return l[9](l[11],l[12],l[13])}return{c(){t=T("button"),t.textContent=e,this.h()},l(n){t=A(n,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(t)!=="svelte-1b8ehxb"&&(t.textContent=e),this.h()},h(){S(t,"class","add-list svelte-1rog31l")},m(n,s){b(n,t,s),r||(i=z(t,"click",a),r=!0)},p(n,s){l=n},i:Z,o:Z,d(n){n&&c(t),r=!1,i()}}}function zt(l){let t,e,r=l[2][l[13]].title+"",i,a,n,s="X",f,o,u=[],g=new Map,d,p,m,h,v,N;function P(){return l[4](l[11],l[12],l[13])}let y=K(l[11].items);const R=_=>_[14];for(let _=0;_<y.length;_+=1){let $=$t(l,y,_),x=R($);g.set(x,u[_]=bt(x,$))}let E=l[11].items.length!==3&&gt(l);function C(){return l[7](l[11],l[12],l[13])}function w(){return l[8](l[11],l[12],l[13])}return{c(){t=T("div"),e=T("div"),i=M(r),a=L(),n=T("button"),n.textContent=s,f=L(),o=T("ul");for(let _=0;_<u.length;_+=1)u[_].c();d=L(),E&&E.c(),p=L(),this.h()},l(_){t=A(_,"DIV",{class:!0});var $=H(t);e=A($,"DIV",{class:!0});var x=H(e);i=q(x,r),x.forEach(c),a=U($),n=A($,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(n)!=="svelte-edtba9"&&(n.textContent=s),f=U($),o=A($,"UL",{class:!0});var Y=H(o);for(let tt=0;tt<u.length;tt+=1)u[tt].l(Y);d=U(Y),E&&E.l(Y),Y.forEach(c),p=U($),$.forEach(c),this.h()},h(){S(e,"class","title svelte-1rog31l"),S(n,"class","close svelte-1rog31l"),S(o,"class","items svelte-1rog31l"),S(t,"class","list svelte-1rog31l")},m(_,$){b(_,t,$),k(t,e),k(e,i),k(t,a),k(t,n),k(t,f),k(t,o);for(let x=0;x<u.length;x+=1)u[x]&&u[x].m(o,null);k(o,d),E&&E.m(o,null),k(t,p),h=!0,v||(N=[z(n,"click",P),z(t,"introend",C),z(t,"outroend",w)],v=!0)},p(_,$){l=_,(!h||$&1)&&r!==(r=l[2][l[13]].title+"")&&G(i,r),$&5&&(y=K(l[11].items),lt(),u=Q(u,$,R,1,l,y,g,o,At,bt,d,$t),ot()),l[11].items.length!==3?E?E.p(l,$):(E=gt(l),E.c(),E.m(o,null)):E&&(E.d(1),E=null)},i(_){if(!h){for(let $=0;$<y.length;$+=1)B(u[$]);_&&yt(()=>{h&&(m||(m=at(t,l[1],{duration:400},!0)),m.run(1))}),h=!0}},o(_){for(let $=0;$<u.length;$+=1)O(u[$]);_&&(m||(m=at(t,l[1],{duration:400},!1)),m.run(0)),h=!1},d(_){_&&c(t);for(let $=0;$<u.length;$+=1)u[$].d();E&&E.d(),_&&m&&m.end(),v=!1,wt(N)}}}function bt(l,t){let e,r,i,a=t[2][t[13]].items[t[14]]+"",n,s,f="X",o,u,g,d,p;function m(){return t[5](t[11],t[14],t[12],t[13])}return{key:l,first:null,c(){e=T("li"),r=T("button"),i=T("span"),n=M(a),s=T("span"),s.textContent=f,this.h()},l(h){e=A(h,"LI",{class:!0});var v=H(e);r=A(v,"BUTTON",{});var N=H(r);i=A(N,"SPAN",{class:!0});var P=H(i);n=q(P,a),P.forEach(c),s=A(N,"SPAN",{class:!0,["data-svelte-h"]:!0}),W(s)!=="svelte-1owzrfh"&&(s.textContent=f),N.forEach(c),v.forEach(c),this.h()},h(){S(i,"class","svelte-1rog31l"),S(s,"class","spu-d5abt3 svelte-1rog31l"),S(e,"class","item svelte-1rog31l"),this.first=e},m(h,v){b(h,e,v),k(e,r),k(r,i),k(i,n),k(r,s),g=!0,d||(p=z(r,"click",m),d=!0)},p(h,v){t=h,(!g||v&1)&&a!==(a=t[2][t[13]].items[t[14]]+"")&&G(n,a)},i(h){g||(h&&yt(()=>{g&&(u&&u.end(1),o=Ct(e,Ot,{x:60,duration:500}),o.start())}),g=!0)},o(h){o&&o.invalidate(),h&&(u=St(e,Mt,{})),g=!1},d(h){h&&c(e),h&&u&&u.end(),d=!1,p()}}}function gt(l){let t,e="Add item",r,i;function a(){return l[6](l[11],l[12],l[13])}return{c(){t=T("button"),t.textContent=e,this.h()},l(n){t=A(n,"BUTTON",{class:!0,["data-svelte-h"]:!0}),W(t)!=="svelte-13fr9qn"&&(t.textContent=e),this.h()},h(){S(t,"class","add-item")},m(n,s){b(n,t,s),r||(i=z(t,"click",a),r=!0)},p(n,s){l=n},d(n){n&&c(t),r=!1,i()}}}function vt(l,t){let e,r,i,a,n;const s=[zt,Ht],f=[];function o(u,g){return u[11].show?0:1}return r=o(t),i=f[r]=s[r](t),{key:l,first:null,c(){e=V(),i.c(),a=V(),this.h()},l(u){e=V(),i.l(u),a=V(),this.h()},h(){this.first=e},m(u,g){b(u,e,g),f[r].m(u,g),b(u,a,g),n=!0},p(u,g){t=u;let d=r;r=o(t),r===d?f[r].p(t,g):(lt(),O(f[d],1,1,()=>{f[d]=null}),ot(),i=f[r],i?i.p(t,g):(i=f[r]=s[r](t),i.c()),B(i,1),i.m(a.parentNode,a))},i(u){n||(B(i),n=!0)},o(u){O(i),n=!1},d(u){u&&(c(e),c(a)),f[r].d(u)}}}function Pt(l){let t,e=[],r=new Map,i,a=K(l[0]);const n=s=>s[13];for(let s=0;s<a.length;s+=1){let f=_t(l,a,s),o=n(f);r.set(o,e[s]=vt(o,f))}return{c(){t=T("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){t=A(s,"DIV",{class:!0});var f=H(t);for(let o=0;o<e.length;o+=1)e[o].l(f);f.forEach(c),this.h()},h(){S(t,"class","containery svelte-1rog31l")},m(s,f){b(s,t,f);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null);i=!0},p(s,[f]){f&5&&(a=K(s[0]),lt(),e=Q(e,f,n,1,s,a,r,t,At,vt,null,_t),ot())},i(s){if(!i){for(let f=0;f<a.length;f+=1)B(e[f]);i=!0}},o(s){for(let f=0;f<e.length;f+=1)O(e[f]);i=!1},d(s){s&&c(t);for(let f=0;f<e.length;f+=1)e[f].d()}}}function Vt(){return{delay:0}}function Kt(l,t,e){let r;const i=[{title:"Hall",items:["Sweep the floor","Mop the floor","Throw the rubbish"]},{title:"Kitchen",items:["Wash the plates","Tidy the table","Boil the soup"]},{title:"Toilet",items:["Brush the sink","Flush the toilet","Scrub the floors"]}];let a=[{show:!0,items:[0,1]},{show:!1,items:[0]},{show:!1,items:[0,1]}],n,s;n=matchMedia("(prefers-reduced-motion: reduce)"),s=n.matches,n.onchange=m=>{e(3,s=m.matches)};const f=(m,h,v)=>e(0,h[v].show=!1,a),o=(m,h,v,N)=>{e(0,v[N].items=m.items.filter(P=>P!==h),a)},u=(m,h,v)=>{const N=new Set([0,1,2]);m.items.forEach(P=>N.delete(P)),m.items.push(Array.from(N)[0]),e(0,h[v].items=m.items,a)},g=(m,h,v)=>{e(0,h[v].shown=!0,a)},d=(m,h,v)=>{e(0,h[v].shown=!1,a)},p=(m,h,v)=>e(0,h[v].show=!0,a);return l.$$.update=()=>{l.$$.dirty&8&&e(1,r=s?Vt:Bt)},[a,r,i,s,f,o,u,g,d,p]}class Wt extends rt{constructor(t){super(),st(this,t,Kt,Pt,nt,{})}}const jt=`<script>\r
	import { fade, blur, fly, slide, scale } from "svelte/transition";\r
	import { bounceInOut, sineOut } from "svelte/easing";\r
	import { browser } from "$app/environment";\r
	const data = [\r
		{ title: "Hall", items: ["Sweep the floor", "Mop the floor", "Throw the rubbish"] },\r
		{ title: "Kitchen", items: ["Wash the plates", "Tidy the table", "Boil the soup"] },\r
		{ title: "Toilet", items: ["Brush the sink", "Flush the toilet", "Scrub the floors"] },\r
	];\r
	let lists = [\r
		{ show: true, items: [0, 1] },\r
		{ show: false, items: [0] },\r
		{ show: false, items: [0, 1] },\r
	];\r
	let media;\r
	let noAnimation;\r
	if (browser) {\r
		media = matchMedia("(prefers-reduced-motion: reduce)");\r
		noAnimation = media.matches;\r
		media.onchange = (event) => {\r
			noAnimation = event.matches;\r
		};\r
	}\r
\r
	function t() {\r
		return {\r
			delay: 0,\r
		};\r
	}\r
\r
	$: niceFade = noAnimation ? t : fade;\r
<\/script>\r
\r
<div class="containery">\r
	{#each lists as list, i (i)}\r
		{#if list.show}\r
			<div\r
				transition:niceFade={{ duration: 400 }}\r
				on:introend={() => {\r
					list.shown = true;\r
				}}\r
				on:outroend={() => {\r
					list.shown = false;\r
				}}\r
				class="list">\r
				<div class="title">{data[i].title}</div>\r
				<button class="close" on:click={() => (list.show = false)}>X</button>\r
				<ul class="items">\r
					{#each list.items as item, index (item)}\r
						<li\r
							in:fly={{ x: 60,  duration: 500 }}\r
							out:slide\r
							class="item">\r
							<button\r
						\r
								on:click={() => {\r
									list.items = list.items.filter((i) => i !== item);\r
								}}>	<span>{data[i].items[item]}</span><span class="pl-4">X</span></button>\r
						</li>\r
					{/each}\r
					{#if list.items.length !== 3}\r
						<button\r
							class="add-item"\r
							on:click={() => {\r
								const potential = new Set([0, 1, 2]);\r
								list.items.forEach((item) => potential.delete(item));\r
								list.items.push(Array.from(potential)[0]);\r
								list.items = list.items;\r
							}}>\r
							Add item\r
						</button>\r
					{/if}\r
				</ul>\r
			</div>\r
		{:else}\r
			<button class="add-list" on:click={() => (list.show = true)}>+</button>\r
		{/if}\r
	{/each}\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: repeat(3, 1fr);\r
	}\r
	.list,\r
	.add-list {\r
		margin: 20px;\r
		border: 1px solid #999;\r
		border-radius: 4px;\r
		padding: 20px;\r
		box-shadow: 4px 4px 4px #ddd;\r
		position: relative;\r
	}\r
	.title {\r
		font-size: 18px;\r
		font-weight: bold;\r
	}\r
	.close {\r
		position: absolute;\r
		top: 10px;\r
		right: 10px;\r
		background: none;\r
		border: none;\r
		cursor: pointer;\r
	}\r
	.items {\r
		list-style: none;\r
		padding: 0;\r
		height: 250px;\r
	}\r
	.items li {\r
		margin-bottom: 16px;\r
		padding: 8px;\r
		border: 1px solid #999;\r
		border-radius: 4px;\r
		box-shadow: 2px 2px 2px #ddd;\r
		transition: all 0.5s ease;\r
	}\r
	.items li:hover {\r
		box-shadow: 4px 4px 4px #ddd;\r
	}\r
	.item {\r
		display: flex;\r
	}\r
	.item span:first-child {\r
		flex: 1;\r
	}\r
	.add-list {\r
		display: grid;\r
		place-items: center;\r
		font-size: 100px;\r
		cursor: pointer;\r
		background: rgba(0, 0, 255, 0.05);\r
		color: blue;\r
		border: none;\r
		box-shadow: none;\r
	}\r
	.items li.add-item {\r
		border: none;\r
		background: none;\r
		box-shadow: none;\r
		color: blue;\r
		text-align: center;\r
		background: rgba(0, 0, 255, 0.05);\r
	}\r
</style>\r
`;function Rt(l){let t;return{c(){t=M("Some quick info:")},l(e){t=q(e,"Some quick info:")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function Yt(l){let t;return{c(){t=M("There's fade, blur, fly, slide, scale. All of these are imported from svelte/transition.")},l(e){t=q(e,"There's fade, blur, fly, slide, scale. All of these are imported from svelte/transition.")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function Jt(l){let t;return{c(){t=M("transition:fly")},l(e){t=q(e,"transition:fly")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function Zt(l){let t;return{c(){t=M("transition:fly={{x: 100}}")},l(e){t=q(e,"transition:fly={{x: 100}}")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function Gt(l){let t,e,r,i,a;return e=new j({props:{$$slots:{default:[Jt]},$$scope:{ctx:l}}}),i=new j({props:{$$slots:{default:[Zt]},$$scope:{ctx:l}}}),{c(){t=M("To use them add for example "),I(e.$$.fragment),r=M(", then arguments if needed "),I(i.$$.fragment)},l(n){t=q(n,"To use them add for example "),F(e.$$.fragment,n),r=q(n,", then arguments if needed "),F(i.$$.fragment,n)},m(n,s){b(n,t,s),X(e,n,s),b(n,r,s),X(i,n,s),a=!0},p(n,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:n}),e.$set(f);const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),i.$set(o)},i(n){a||(B(e.$$.fragment,n),B(i.$$.fragment,n),a=!0)},o(n){O(e.$$.fragment,n),O(i.$$.fragment,n),a=!1},d(n){n&&(c(t),c(r)),D(e,n),D(i,n)}}}function Qt(l){let t;return{c(){t=M("in:fade")},l(e){t=q(e,"in:fade")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function te(l){let t;return{c(){t=M("out:fade")},l(e){t=q(e,"out:fade")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function ee(l){let t,e,r,i,a,n;return e=new j({props:{$$slots:{default:[Qt]},$$scope:{ctx:l}}}),i=new j({props:{$$slots:{default:[te]},$$scope:{ctx:l}}}),{c(){t=M("You can also use "),I(e.$$.fragment),r=M(" or "),I(i.$$.fragment),a=M(" if you only want a transition when an element is created or destroyed. Or if you want different transitions for in and out.")},l(s){t=q(s,"You can also use "),F(e.$$.fragment,s),r=q(s," or "),F(i.$$.fragment,s),a=q(s," if you only want a transition when an element is created or destroyed. Or if you want different transitions for in and out.")},m(s,f){b(s,t,f),X(e,s,f),b(s,r,f),X(i,s,f),b(s,a,f),n=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o);const u={};f&2&&(u.$$scope={dirty:f,ctx:s}),i.$set(u)},i(s){n||(B(e.$$.fragment,s),B(i.$$.fragment,s),n=!0)},o(s){O(e.$$.fragment,s),O(i.$$.fragment,s),n=!1},d(s){s&&(c(t),c(r),c(a)),D(e,s),D(i,s)}}}function ne(l){let t;return{c(){t=M("sineOut")},l(e){t=q(e,"sineOut")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function re(l){let t,e,r;return e=new j({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}}),{c(){t=M("There are easings in svelte/easings if you want a smoother animation. For example "),I(e.$$.fragment)},l(i){t=q(i,"There are easings in svelte/easings if you want a smoother animation. For example "),F(e.$$.fragment,i)},m(i,a){b(i,t,a),X(e,i,a),r=!0},p(i,a){const n={};a&2&&(n.$$scope={dirty:a,ctx:i}),e.$set(n)},i(i){r||(B(e.$$.fragment,i),r=!0)},o(i){O(e.$$.fragment,i),r=!1},d(i){i&&c(t),D(e,i)}}}function se(l){let t,e,r,i,a,n,s,f;return t=new J({props:{$$slots:{default:[Yt]},$$scope:{ctx:l}}}),r=new J({props:{$$slots:{default:[Gt]},$$scope:{ctx:l}}}),a=new J({props:{$$slots:{default:[ee]},$$scope:{ctx:l}}}),s=new J({props:{$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){I(t.$$.fragment),e=L(),I(r.$$.fragment),i=L(),I(a.$$.fragment),n=L(),I(s.$$.fragment)},l(o){F(t.$$.fragment,o),e=U(o),F(r.$$.fragment,o),i=U(o),F(a.$$.fragment,o),n=U(o),F(s.$$.fragment,o)},m(o,u){X(t,o,u),b(o,e,u),X(r,o,u),b(o,i,u),X(a,o,u),b(o,n,u),X(s,o,u),f=!0},p(o,u){const g={};u&2&&(g.$$scope={dirty:u,ctx:o}),t.$set(g);const d={};u&2&&(d.$$scope={dirty:u,ctx:o}),r.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:o}),a.$set(p);const m={};u&2&&(m.$$scope={dirty:u,ctx:o}),s.$set(m)},i(o){f||(B(t.$$.fragment,o),B(r.$$.fragment,o),B(a.$$.fragment,o),B(s.$$.fragment,o),f=!0)},o(o){O(t.$$.fragment,o),O(r.$$.fragment,o),O(a.$$.fragment,o),O(s.$$.fragment,o),f=!1},d(o){o&&(c(e),c(i),c(n)),D(t,o),D(r,o),D(a,o),D(s,o)}}}function le(l){let t;return{c(){t=M("Let's look at Li Hau Tan's example:")},l(e){t=q(e,"Let's look at Li Hau Tan's example:")},m(e,r){b(e,t,r)},d(e){e&&c(t)}}}function oe(l){let t,e,r,i,a,n,s,f;return t=new ut({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),r=new xt({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),a=new ut({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),s=new Nt({props:{name:[{name:"App",comp:Xt,raw:Dt,text:"Here we have a TODO app without transitions. Let's try adding some transitions and see if it feels better to use."},{name:"App2",comp:Wt,raw:jt,text:"It does!"}]}}),{c(){I(t.$$.fragment),e=L(),I(r.$$.fragment),i=L(),I(a.$$.fragment),n=L(),I(s.$$.fragment)},l(o){F(t.$$.fragment,o),e=U(o),F(r.$$.fragment,o),i=U(o),F(a.$$.fragment,o),n=U(o),F(s.$$.fragment,o)},m(o,u){X(t,o,u),b(o,e,u),X(r,o,u),b(o,i,u),X(a,o,u),b(o,n,u),X(s,o,u),f=!0},p(o,u){const g={};u&2&&(g.$$scope={dirty:u,ctx:o}),t.$set(g);const d={};u&2&&(d.$$scope={dirty:u,ctx:o}),r.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:o}),a.$set(p)},i(o){f||(B(t.$$.fragment,o),B(r.$$.fragment,o),B(a.$$.fragment,o),B(s.$$.fragment,o),f=!0)},o(o){O(t.$$.fragment,o),O(r.$$.fragment,o),O(a.$$.fragment,o),O(s.$$.fragment,o),f=!1},d(o){o&&(c(e),c(i),c(n)),D(t,o),D(r,o),D(a,o),D(s,o)}}}function ie(l){let t,e;const r=[l[0],kt];let i={$$slots:{default:[oe]},$$scope:{ctx:l}};for(let a=0;a<r.length;a+=1)i=et(i,r[a]);return t=new qt({props:i}),{c(){I(t.$$.fragment)},l(a){F(t.$$.fragment,a)},m(a,n){X(t,a,n),e=!0},p(a,[n]){const s=n&1?Et(r,[n&1&&ft(a[0]),n&0&&ft(kt)]):{};n&2&&(s.$$scope={dirty:n,ctx:a}),t.$set(s)},i(a){e||(B(t.$$.fragment,a),e=!0)},o(a){O(t.$$.fragment,a),e=!1},d(a){D(t,a)}}}const kt={title:"Intro to Svelte transitions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-06-25T00:00:00.000Z",layout:"notes"};function ae(l,t,e){return Error.stackTraceLimit=0,l.$$set=r=>{e(0,t=et(et({},t),it(r)))},t=it(t),[t]}class be extends rt{constructor(t){super(),st(this,t,ae,ie,nt,{})}}export{be as default,kt as metadata};
