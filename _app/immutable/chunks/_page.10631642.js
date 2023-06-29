import{s as ot,f as y,g as A,h as q,d as b,j as S,i as v,e as z,u as L,X as F,z as Z,l as N,a as I,m as M,c as U,v as k,n as Y,J as tt,H as yt,C as it,D as ft}from"./scheduler.a7cd560e.js";import{S as at,i as ut,g as j,c as R,a as x,t as B,j as G,f as At,k as Tt,b as D,d as P,m as V,e as W}from"./index.396264e7.js";import{g as xt,a as ct}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{f as Ct,a as St,s as Et,M as Bt,P as lt}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Nt}from"./ShowMany.db7be1f3.js";import{e as H,u as et,o as nt}from"./each.32d06572.js";import{S as Q}from"./Strong.097578ae.js";function dt(s,t,e){const r=s.slice();return r[11]=t[e],r[12]=t,r[13]=e,r}function ht(s,t,e){const r=s.slice();return r[14]=t[e],r[16]=e,r}function Mt(s){let t,e="+",r,u;function a(){return s[9](s[11],s[12],s[13])}return{c(){t=y("button"),t.textContent=e,this.h()},l(o){t=A(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(t)!=="svelte-1b8ehxb"&&(t.textContent=e),this.h()},h(){S(t,"class","add-list svelte-9pfq9r")},m(o,n){v(o,t,n),r||(u=F(t,"click",a),r=!0)},p(o,n){s=o},i:Z,o:Z,d(o){o&&b(t),r=!1,u()}}}function qt(s){let t,e,r=s[2][s[13]].title+"",u,a,o,n="X",l,i,f=[],_=new Map,$,C,m,c,p,w;function E(){return s[4](s[11],s[12],s[13])}let O=H(s[11].items);const J=h=>h[14];for(let h=0;h<O.length;h+=1){let d=ht(s,O,h),T=J(d);_.set(T,f[h]=mt(T,d))}let g=s[11].items.length!==3&&pt(s);function rt(){return s[7](s[11],s[12],s[13])}function st(){return s[8](s[11],s[12],s[13])}return{c(){t=y("div"),e=y("div"),u=N(r),a=I(),o=y("button"),o.textContent=n,l=I(),i=y("ul");for(let h=0;h<f.length;h+=1)f[h].c();$=I(),g&&g.c(),C=I(),this.h()},l(h){t=A(h,"DIV",{class:!0});var d=q(t);e=A(d,"DIV",{class:!0});var T=q(e);u=M(T,r),T.forEach(b),a=U(d),o=A(d,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(o)!=="svelte-edtba9"&&(o.textContent=n),l=U(d),i=A(d,"UL",{class:!0});var X=q(i);for(let K=0;K<f.length;K+=1)f[K].l(X);$=U(X),g&&g.l(X),X.forEach(b),C=U(d),d.forEach(b),this.h()},h(){S(e,"class","title svelte-9pfq9r"),S(o,"class","close svelte-9pfq9r"),S(i,"class","items svelte-9pfq9r"),S(t,"class","list svelte-9pfq9r")},m(h,d){v(h,t,d),k(t,e),k(e,u),k(t,a),k(t,o),k(t,l),k(t,i);for(let T=0;T<f.length;T+=1)f[T]&&f[T].m(i,null);k(i,$),g&&g.m(i,null),k(t,C),c=!0,p||(w=[F(o,"click",E),F(t,"introend",rt),F(t,"outroend",st)],p=!0)},p(h,d){s=h,(!c||d&1)&&r!==(r=s[2][s[13]].title+"")&&Y(u,r),d&5&&(O=H(s[11].items),j(),f=et(f,d,J,1,s,O,_,i,nt,mt,$,ht),R()),s[11].items.length!==3?g?g.p(s,d):(g=pt(s),g.c(),g.m(i,null)):g&&(g.d(1),g=null)},i(h){if(!c){for(let d=0;d<O.length;d+=1)x(f[d]);h&&tt(()=>{c&&(m||(m=G(t,s[1],{duration:400},!0)),m.run(1))}),c=!0}},o(h){for(let d=0;d<f.length;d+=1)B(f[d]);h&&(m||(m=G(t,s[1],{duration:400},!1)),m.run(0)),c=!1},d(h){h&&b(t);for(let d=0;d<f.length;d+=1)f[d].d();g&&g.d(),h&&m&&m.end(),p=!1,yt(w)}}}function mt(s,t){let e,r,u,a=t[2][t[13]].items[t[14]]+"",o,n,l="X",i,f,_,$,C;function m(){return t[5](t[11],t[14],t[12],t[13])}return{key:s,first:null,c(){e=y("li"),r=y("button"),u=y("span"),o=N(a),n=y("span"),n.textContent=l,this.h()},l(c){e=A(c,"LI",{class:!0});var p=q(e);r=A(p,"BUTTON",{});var w=q(r);u=A(w,"SPAN",{class:!0});var E=q(u);o=M(E,a),E.forEach(b),n=A(w,"SPAN",{class:!0,["data-svelte-h"]:!0}),L(n)!=="svelte-1qrnvcv"&&(n.textContent=l),w.forEach(b),p.forEach(b),this.h()},h(){S(u,"class","svelte-9pfq9r"),S(n,"class","spu-923l5b svelte-9pfq9r"),S(e,"class","item svelte-9pfq9r"),this.first=e},m(c,p){v(c,e,p),k(e,r),k(r,u),k(u,o),k(r,n),_=!0,$||(C=F(r,"click",m),$=!0)},p(c,p){t=c,(!_||p&1)&&a!==(a=t[2][t[13]].items[t[14]]+"")&&Y(o,a)},i(c){_||(tt(()=>{_&&(f&&f.end(1),i=At(e,St,{x:60}),i.start())}),_=!0)},o(c){i&&i.invalidate(),c&&(f=Tt(e,Et,{})),_=!1},d(c){c&&b(e),c&&f&&f.end(),$=!1,C()}}}function pt(s){let t,e="Add item",r,u;function a(){return s[6](s[11],s[12],s[13])}return{c(){t=y("button"),t.textContent=e,this.h()},l(o){t=A(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(t)!=="svelte-13fr9qn"&&(t.textContent=e),this.h()},h(){S(t,"class","add-item")},m(o,n){v(o,t,n),r||(u=F(t,"click",a),r=!0)},p(o,n){s=o},d(o){o&&b(t),r=!1,u()}}}function _t(s,t){let e,r,u,a,o;const n=[qt,Mt],l=[];function i(f,_){return f[11].show?0:1}return r=i(t),u=l[r]=n[r](t),{key:s,first:null,c(){e=z(),u.c(),a=z(),this.h()},l(f){e=z(),u.l(f),a=z(),this.h()},h(){this.first=e},m(f,_){v(f,e,_),l[r].m(f,_),v(f,a,_),o=!0},p(f,_){t=f;let $=r;r=i(t),r===$?l[r].p(t,_):(j(),B(l[$],1,1,()=>{l[$]=null}),R(),u=l[r],u?u.p(t,_):(u=l[r]=n[r](t),u.c()),x(u,1),u.m(a.parentNode,a))},i(f){o||(x(u),o=!0)},o(f){B(u),o=!1},d(f){f&&(b(e),b(a)),l[r].d(f)}}}function Ft(s){let t,e=[],r=new Map,u,a=H(s[0]);const o=n=>n[13];for(let n=0;n<a.length;n+=1){let l=dt(s,a,n),i=o(l);r.set(i,e[n]=_t(i,l))}return{c(){t=y("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=A(n,"DIV",{class:!0});var l=q(t);for(let i=0;i<e.length;i+=1)e[i].l(l);l.forEach(b),this.h()},h(){S(t,"class","containery svelte-9pfq9r")},m(n,l){v(n,t,l);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,null);u=!0},p(n,[l]){l&5&&(a=H(n[0]),j(),e=et(e,l,o,1,n,a,r,t,nt,_t,null,dt),R())},i(n){if(!u){for(let l=0;l<a.length;l+=1)x(e[l]);u=!0}},o(n){for(let l=0;l<e.length;l+=1)B(e[l]);u=!1},d(n){n&&b(t);for(let l=0;l<e.length;l+=1)e[l].d()}}}function Ot(){return{delay:0}}function It(s,t,e){let r;const u=[{title:"Hall",items:["Sweep the floor","Mop the floor","Throw the rubbish"]},{title:"Kitchen",items:["Wash the plates","Tidy the table","Boil the soup"]},{title:"Toilet",items:["Brush the sink","Flush the toilet","Scrub the floors"]}];let a=[{show:!0,items:[0,1]},{show:!1,items:[0]},{show:!1,items:[0,1]}],o,n;o=matchMedia("(prefers-reduced-motion: reduce)"),n=o.matches,o.onchange=m=>{e(3,n=m.matches)};const l=(m,c,p)=>e(0,c[p].show=!1,a),i=(m,c,p,w)=>{e(0,p[w].items=m.items.filter(E=>E!==c),a)},f=(m,c,p)=>{const w=new Set([0,1,2]);m.items.forEach(E=>w.delete(E)),m.items.push(Array.from(w)[0]),e(0,c[p].items=m.items,a)},_=(m,c,p)=>{e(0,c[p].shown=!0,a)},$=(m,c,p)=>{e(0,c[p].shown=!1,a)},C=(m,c,p)=>e(0,c[p].show=!0,a);return s.$$.update=()=>{s.$$.dirty&8&&e(1,r=n?Ot:Ct)},[a,r,u,n,l,i,f,_,$,C]}class Ut extends at{constructor(t){super(),ut(this,t,It,Ft,ot,{})}}const Xt=`<script>\r
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
						<li in:fly|global={{ x: 60 }} out:slide class="item">\r
							<button\r
								on:click={() => {\r
									list.items = list.items.filter((i) => i !== item);\r
								}}>\r
								<span>{data[i].items[item]}</span><span class="pl-4">X</span></button>\r
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
`;function bt(s,t,e){const r=s.slice();return r[11]=t[e],r[12]=t,r[13]=e,r}function gt(s,t,e){const r=s.slice();return r[14]=t[e],r[16]=e,r}function Dt(s){let t,e="+",r,u;function a(){return s[9](s[11],s[12],s[13])}return{c(){t=y("button"),t.textContent=e,this.h()},l(o){t=A(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(t)!=="svelte-1b8ehxb"&&(t.textContent=e),this.h()},h(){S(t,"class","add-list svelte-lg1f0u")},m(o,n){v(o,t,n),r||(u=F(t,"click",a),r=!0)},p(o,n){s=o},i:Z,o:Z,d(o){o&&b(t),r=!1,u()}}}function Pt(s){let t,e,r=s[2][s[13]].title+"",u,a,o,n="X",l,i,f=[],_=new Map,$,C,m,c,p,w;function E(){return s[4](s[11],s[12],s[13])}let O=H(s[11].items);const J=h=>h[14];for(let h=0;h<O.length;h+=1){let d=gt(s,O,h),T=J(d);_.set(T,f[h]=$t(T,d))}let g=s[11].items.length!==3&&vt(s);function rt(){return s[7](s[11],s[12],s[13])}function st(){return s[8](s[11],s[12],s[13])}return{c(){t=y("div"),e=y("div"),u=N(r),a=I(),o=y("button"),o.textContent=n,l=I(),i=y("ul");for(let h=0;h<f.length;h+=1)f[h].c();$=I(),g&&g.c(),C=I(),this.h()},l(h){t=A(h,"DIV",{class:!0});var d=q(t);e=A(d,"DIV",{class:!0});var T=q(e);u=M(T,r),T.forEach(b),a=U(d),o=A(d,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(o)!=="svelte-edtba9"&&(o.textContent=n),l=U(d),i=A(d,"UL",{class:!0});var X=q(i);for(let K=0;K<f.length;K+=1)f[K].l(X);$=U(X),g&&g.l(X),X.forEach(b),C=U(d),d.forEach(b),this.h()},h(){S(e,"class","title svelte-lg1f0u"),S(o,"class","close svelte-lg1f0u"),S(i,"class","items svelte-lg1f0u"),S(t,"class","list svelte-lg1f0u")},m(h,d){v(h,t,d),k(t,e),k(e,u),k(t,a),k(t,o),k(t,l),k(t,i);for(let T=0;T<f.length;T+=1)f[T]&&f[T].m(i,null);k(i,$),g&&g.m(i,null),k(t,C),c=!0,p||(w=[F(o,"click",E),F(t,"introend",rt),F(t,"outroend",st)],p=!0)},p(h,d){s=h,(!c||d&1)&&r!==(r=s[2][s[13]].title+"")&&Y(u,r),d&5&&(O=H(s[11].items),j(),f=et(f,d,J,1,s,O,_,i,nt,$t,$,gt),R()),s[11].items.length!==3?g?g.p(s,d):(g=vt(s),g.c(),g.m(i,null)):g&&(g.d(1),g=null)},i(h){if(!c){for(let d=0;d<O.length;d+=1)x(f[d]);h&&tt(()=>{c&&(m||(m=G(t,s[1],{duration:400},!0)),m.run(1))}),c=!0}},o(h){for(let d=0;d<f.length;d+=1)B(f[d]);h&&(m||(m=G(t,s[1],{duration:400},!1)),m.run(0)),c=!1},d(h){h&&b(t);for(let d=0;d<f.length;d+=1)f[d].d();g&&g.d(),h&&m&&m.end(),p=!1,yt(w)}}}function $t(s,t){let e,r,u,a=t[2][t[13]].items[t[14]]+"",o,n,l="X",i,f,_,$,C;function m(){return t[5](t[11],t[14],t[12],t[13])}return{key:s,first:null,c(){e=y("li"),r=y("button"),u=y("span"),o=N(a),n=y("span"),n.textContent=l,this.h()},l(c){e=A(c,"LI",{class:!0});var p=q(e);r=A(p,"BUTTON",{});var w=q(r);u=A(w,"SPAN",{class:!0});var E=q(u);o=M(E,a),E.forEach(b),n=A(w,"SPAN",{class:!0,["data-svelte-h"]:!0}),L(n)!=="svelte-1sx8vxu"&&(n.textContent=l),w.forEach(b),p.forEach(b),this.h()},h(){S(u,"class","svelte-lg1f0u"),S(n,"class","spu-g71u8l svelte-lg1f0u"),S(e,"class","item svelte-lg1f0u"),this.first=e},m(c,p){v(c,e,p),k(e,r),k(r,u),k(u,o),k(r,n),_=!0,$||(C=F(r,"click",m),$=!0)},p(c,p){t=c,(!_||p&1)&&a!==(a=t[2][t[13]].items[t[14]]+"")&&Y(o,a)},i(c){_||(tt(()=>{_&&(f&&f.end(1),i=At(e,St,{x:60,delay:400+t[16]*300}),i.start())}),_=!0)},o(c){i&&i.invalidate(),c&&(f=Tt(e,Et,{})),_=!1},d(c){c&&b(e),c&&f&&f.end(),$=!1,C()}}}function vt(s){let t,e="Add item",r,u;function a(){return s[6](s[11],s[12],s[13])}return{c(){t=y("button"),t.textContent=e,this.h()},l(o){t=A(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),L(t)!=="svelte-13fr9qn"&&(t.textContent=e),this.h()},h(){S(t,"class","add-item")},m(o,n){v(o,t,n),r||(u=F(t,"click",a),r=!0)},p(o,n){s=o},d(o){o&&b(t),r=!1,u()}}}function kt(s,t){let e,r,u,a,o;const n=[Pt,Dt],l=[];function i(f,_){return f[11].show?0:1}return r=i(t),u=l[r]=n[r](t),{key:s,first:null,c(){e=z(),u.c(),a=z(),this.h()},l(f){e=z(),u.l(f),a=z(),this.h()},h(){this.first=e},m(f,_){v(f,e,_),l[r].m(f,_),v(f,a,_),o=!0},p(f,_){t=f;let $=r;r=i(t),r===$?l[r].p(t,_):(j(),B(l[$],1,1,()=>{l[$]=null}),R(),u=l[r],u?u.p(t,_):(u=l[r]=n[r](t),u.c()),x(u,1),u.m(a.parentNode,a))},i(f){o||(x(u),o=!0)},o(f){B(u),o=!1},d(f){f&&(b(e),b(a)),l[r].d(f)}}}function Vt(s){let t,e=[],r=new Map,u,a=H(s[0]);const o=n=>n[13];for(let n=0;n<a.length;n+=1){let l=bt(s,a,n),i=o(l);r.set(i,e[n]=kt(i,l))}return{c(){t=y("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=A(n,"DIV",{class:!0});var l=q(t);for(let i=0;i<e.length;i+=1)e[i].l(l);l.forEach(b),this.h()},h(){S(t,"class","containery svelte-lg1f0u")},m(n,l){v(n,t,l);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,null);u=!0},p(n,[l]){l&5&&(a=H(n[0]),j(),e=et(e,l,o,1,n,a,r,t,nt,kt,null,bt),R())},i(n){if(!u){for(let l=0;l<a.length;l+=1)x(e[l]);u=!0}},o(n){for(let l=0;l<e.length;l+=1)B(e[l]);u=!1},d(n){n&&b(t);for(let l=0;l<e.length;l+=1)e[l].d()}}}function Wt(){return{delay:0}}function zt(s,t,e){let r;const u=[{title:"Hall",items:["Sweep the floor","Mop the floor","Throw the rubbish"]},{title:"Kitchen",items:["Wash the plates","Tidy the table","Boil the soup"]},{title:"Toilet",items:["Brush the sink","Flush the toilet","Scrub the floors"]}];let a=[{show:!0,items:[0,1]},{show:!1,items:[0]},{show:!1,items:[0,1]}],o,n;o=matchMedia("(prefers-reduced-motion: reduce)"),n=o.matches,o.onchange=m=>{e(3,n=m.matches)};const l=(m,c,p)=>e(0,c[p].show=!1,a),i=(m,c,p,w)=>{e(0,p[w].items=m.items.filter(E=>E!==c),a)},f=(m,c,p)=>{const w=new Set([0,1,2]);m.items.forEach(E=>w.delete(E)),m.items.push(Array.from(w)[0]),e(0,c[p].items=m.items,a)},_=(m,c,p)=>{e(0,c[p].shown=!0,a)},$=(m,c,p)=>{e(0,c[p].shown=!1,a)},C=(m,c,p)=>e(0,c[p].show=!0,a);return s.$$.update=()=>{s.$$.dirty&8&&e(1,r=n?Wt:Ct)},[a,r,u,n,l,i,f,_,$,C]}class Ht extends at{constructor(t){super(),ut(this,t,zt,Vt,ot,{})}}const Lt=`<script>\r
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
						in:fly|global={{ x: 60, delay:400 + index * 300}}\r
							out:slide\r
							class="item">\r
							<button\r
             \r
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
`;function Kt(s){let t;return{c(){t=N("coordinate transitions")},l(e){t=M(e,"coordinate transitions")},m(e,r){v(e,t,r)},d(e){e&&b(t)}}}function jt(s){let t;return{c(){t=N("delay")},l(e){t=M(e,"delay")},m(e,r){v(e,t,r)},d(e){e&&b(t)}}}function Rt(s){let t,e,r,u,a,o;return e=new Q({props:{$$slots:{default:[Kt]},$$scope:{ctx:s}}}),u=new Q({props:{$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){t=N("There is a way to "),D(e.$$.fragment),r=N(" if we want to play one transition after another has completed. This is done by using "),D(u.$$.fragment),a=N(".")},l(n){t=M(n,"There is a way to "),P(e.$$.fragment,n),r=M(n," if we want to play one transition after another has completed. This is done by using "),P(u.$$.fragment,n),a=M(n,".")},m(n,l){v(n,t,l),V(e,n,l),v(n,r,l),V(u,n,l),v(n,a,l),o=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),e.$set(i);const f={};l&2&&(f.$$scope={dirty:l,ctx:n}),u.$set(f)},i(n){o||(x(e.$$.fragment,n),x(u.$$.fragment,n),o=!0)},o(n){B(e.$$.fragment,n),B(u.$$.fragment,n),o=!1},d(n){n&&(b(t),b(r),b(a)),W(e,n),W(u,n)}}}function Jt(s){let t;return{c(){t=N("local by default")},l(e){t=M(e,"local by default")},m(e,r){v(e,t,r)},d(e){e&&b(t)}}}function Zt(s){let t;return{c(){t=N("|global")},l(e){t=M(e,"|global")},m(e,r){v(e,t,r)},d(e){e&&b(t)}}}function Gt(s){let t,e,r,u,a,o;return e=new Q({props:{$$slots:{default:[Jt]},$$scope:{ctx:s}}}),u=new Q({props:{$$slots:{default:[Zt]},$$scope:{ctx:s}}}),{c(){t=N("Note that in Svelte 4 transitions are "),D(e.$$.fragment),r=N(" meaning that if you want children transitions to play when a parent is added you need to add the "),D(u.$$.fragment),a=N(" modifier. (For most things local transitions make more sense though)")},l(n){t=M(n,"Note that in Svelte 4 transitions are "),P(e.$$.fragment,n),r=M(n," meaning that if you want children transitions to play when a parent is added you need to add the "),P(u.$$.fragment,n),a=M(n," modifier. (For most things local transitions make more sense though)")},m(n,l){v(n,t,l),V(e,n,l),v(n,r,l),V(u,n,l),v(n,a,l),o=!0},p(n,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:n}),e.$set(i);const f={};l&2&&(f.$$scope={dirty:l,ctx:n}),u.$set(f)},i(n){o||(x(e.$$.fragment,n),x(u.$$.fragment,n),o=!0)},o(n){B(e.$$.fragment,n),B(u.$$.fragment,n),o=!1},d(n){n&&(b(t),b(r),b(a)),W(e,n),W(u,n)}}}function Qt(s){let t;return{c(){t=N("Also note that in this App2 example there's is an annoying delay when adding new items. We will fix this in the next post!")},l(e){t=M(e,"Also note that in this App2 example there's is an annoying delay when adding new items. We will fix this in the next post!")},m(e,r){v(e,t,r)},d(e){e&&b(t)}}}function Yt(s){let t,e,r,u,a,o,n,l;return t=new lt({props:{$$slots:{default:[Rt]},$$scope:{ctx:s}}}),r=new Nt({props:{name:[{name:"App",comp:Ut,raw:Xt,text:"Before delay is added."},{name:"App2",comp:Ht,raw:Lt,text:"After delay is added."}]}}),a=new lt({props:{$$slots:{default:[Gt]},$$scope:{ctx:s}}}),n=new lt({props:{$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment),e=I(),D(r.$$.fragment),u=I(),D(a.$$.fragment),o=I(),D(n.$$.fragment)},l(i){P(t.$$.fragment,i),e=U(i),P(r.$$.fragment,i),u=U(i),P(a.$$.fragment,i),o=U(i),P(n.$$.fragment,i)},m(i,f){V(t,i,f),v(i,e,f),V(r,i,f),v(i,u,f),V(a,i,f),v(i,o,f),V(n,i,f),l=!0},p(i,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:i}),t.$set(_);const $={};f&2&&($.$$scope={dirty:f,ctx:i}),a.$set($);const C={};f&2&&(C.$$scope={dirty:f,ctx:i}),n.$set(C)},i(i){l||(x(t.$$.fragment,i),x(r.$$.fragment,i),x(a.$$.fragment,i),x(n.$$.fragment,i),l=!0)},o(i){B(t.$$.fragment,i),B(r.$$.fragment,i),B(a.$$.fragment,i),B(n.$$.fragment,i),l=!1},d(i){i&&(b(e),b(u),b(o)),W(t,i),W(r,i),W(a,i),W(n,i)}}}function te(s){let t,e;const r=[s[0],wt];let u={$$slots:{default:[Yt]},$$scope:{ctx:s}};for(let a=0;a<r.length;a+=1)u=it(u,r[a]);return t=new Bt({props:u}),{c(){D(t.$$.fragment)},l(a){P(t.$$.fragment,a)},m(a,o){V(t,a,o),e=!0},p(a,[o]){const n=o&1?xt(r,[o&1&&ct(a[0]),o&0&&ct(wt)]):{};o&2&&(n.$$scope={dirty:o,ctx:a}),t.$set(n)},i(a){e||(x(t.$$.fragment,a),e=!0)},o(a){B(t.$$.fragment,a),e=!1},d(a){W(t,a)}}}const wt={title:"Coordinating transitions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-06-29T00:00:00.000Z",layout:"notes"};function ee(s,t,e){return Error.stackTraceLimit=0,s.$$set=r=>{e(0,t=it(it({},t),ft(r)))},t=ft(t),[t]}class ue extends at{constructor(t){super(),ut(this,t,ee,te,ot,{})}}export{ue as default,wt as metadata};
