import{s as k,f as S,l as c,g as Y,h as D,m as d,d as p,j as T,k as y,i as f,v as g,n as b,z as _,o as I,a as j,c as C,X as R,C as h,D as W}from"./scheduler.a7cd560e.js";import{S as A,i as E,b as v,d as P,m as $,a as x,t as w,e as M}from"./index.396264e7.js";import{g as V,a as X}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as q,P as z}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Z}from"./ShowMany.db7be1f3.js";import{g as B}from"./globals.7f7f1b26.js";function F(o){let e,n=o[0].x+"",r,i,t=o[0].y+"",s;return{c(){e=S("div"),r=c(n),i=c(", "),s=c(t),this.h()},l(a){e=Y(a,"DIV",{class:!0,style:!0});var l=D(e);r=d(l,n),i=d(l,", "),s=d(l,t),l.forEach(p),this.h()},h(){T(e,"class","spu-kn0w6v"),y(e,"background","linear-gradient(to bottom, transparent "+o[2]+"%, "+o[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+o[1]+"%, "+o[1]+"%, rgba(0,0,255, 0.5) 100%)")},m(a,l){f(a,e,l),g(e,r),g(e,i),g(e,s)},p(a,[l]){l&1&&n!==(n=a[0].x+"")&&b(r,n),l&1&&t!==(t=a[0].y+"")&&b(s,t),l&6&&y(e,"background","linear-gradient(to bottom, transparent "+a[2]+"%, "+a[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+a[1]+"%, "+a[1]+"%, rgba(0,0,255, 0.5) 100%)")},i:_,o:_,d(a){a&&p(e)}}}function G(o,e,n){let r={x:0,y:0},i=0,t=0;return I(()=>{function s(a){n(0,r.x=a.clientX,r),n(0,r.y=a.clientY,r)}return document.body.addEventListener("mousemove",s),()=>document.body.removeEventListener("mousemove",s)}),o.$$.update=()=>{o.$$.dirty&1&&(n(2,t=r.y*100*10/document.body.clientHeight),n(1,i=r.x*100*2/document.body.clientWidth-40))},[r,i,t]}class J extends A{constructor(e){super(),E(this,e,G,F,k,{})}}const K=`<script>\r
	import { browser } from "$app/environment";\r
	import { onMount } from "svelte";\r
\r
	let mousePosition = { x: 0, y: 0 };\r
	let xPercentage = 0;\r
	let yPercentage = 0;\r
\r
	$: if (browser) {\r
		// added some offsets because of this not being the only thing in the body\r
		yPercentage = (mousePosition.y * 100 * 10) / document.body.clientHeight;\r
		xPercentage = (mousePosition.x * 100 * 2) / document.body.clientWidth -40;\r
	}\r
\r
	onMount(() => {\r
		function mouseMove(event) {\r
			mousePosition.x = event.clientX;\r
			mousePosition.y = event.clientY;\r
		}\r
		if (browser) {\r
			document.body.addEventListener("mousemove", mouseMove);\r
		}\r
		return () => document.body.removeEventListener("mousemove", mouseMove);\r
	});\r
<\/script>\r
\r
<div\r
	class="grid h-[300px] w-[50%] place-items-center text-2xl"\r
	style="background: linear-gradient(to bottom, transparent {yPercentage}%, {yPercentage}%, rgba(255, 0, 0, 0.5) 100%), \r
  linear-gradient(to right, transparent {xPercentage}%, {xPercentage}%, rgba(0,0,255, 0.5) 100%);\r
">\r
	{mousePosition.x}, {mousePosition.y}\r
</div>\r
\r
<style>\r
</style>\r
`;const{document:N}=B;function O(o){let e,n,r=o[0].x+"",i,t,s=o[0].y+"",a,l,H;return{c(){e=j(),n=S("div"),i=c(r),t=c(", "),a=c(s),this.h()},l(m){e=C(m),n=Y(m,"DIV",{class:!0,style:!0});var u=D(n);i=d(u,r),t=d(u,", "),a=d(u,s),u.forEach(p),this.h()},h(){T(n,"class","spu-bnn9sd"),y(n,"background","linear-gradient(to bottom, transparent "+o[2]+"%, "+o[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+o[1]+"%, "+o[1]+"%, rgba(0,0,255, 0.5) 100%)")},m(m,u){f(m,e,u),f(m,n,u),g(n,i),g(n,t),g(n,a),l||(H=R(N.body,"mousemove",o[3]),l=!0)},p(m,[u]){u&1&&r!==(r=m[0].x+"")&&b(i,r),u&1&&s!==(s=m[0].y+"")&&b(a,s),u&6&&y(n,"background","linear-gradient(to bottom, transparent "+m[2]+"%, "+m[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+m[1]+"%, "+m[1]+"%, rgba(0,0,255, 0.5) 100%)")},i:_,o:_,d(m){m&&(p(e),p(n)),l=!1,H()}}}function Q(o,e,n){let r={x:0,y:0},i=0,t=0;function s(a){n(0,r.x=a.clientX,r),n(0,r.y=a.clientY,r)}return o.$$.update=()=>{o.$$.dirty&1&&(n(2,t=r.y*100*10/document.body.clientHeight),n(1,i=r.x*100*2/document.body.clientWidth-40))},[r,i,t,s]}class U extends A{constructor(e){super(),E(this,e,Q,O,k,{})}}const ee=`<script>\r
	import { browser } from "$app/environment";\r
\r
	let mousePosition = { x: 0, y: 0 };\r
	let xPercentage = 0;\r
	let yPercentage = 0;\r
\r
	$: if (browser) {\r
		// added some offsets because of this not being the only thing in the body\r
		yPercentage = (mousePosition.y * 100 * 10) / document.body.clientHeight;\r
		xPercentage = (mousePosition.x * 100 * 2) / document.body.clientWidth -40;\r
	}\r
\r
		function mouseMove(event) {\r
			mousePosition.x = event.clientX;\r
			mousePosition.y = event.clientY;\r
		}\r
<\/script>\r
\r
<svelte:body on:mousemove={mouseMove}></svelte:body>\r
\r
<div\r
	class="grid h-[300px] w-[50%] place-items-center text-2xl"\r
	style="background: linear-gradient(to bottom, transparent {yPercentage}%, {yPercentage}%, rgba(255, 0, 0, 0.5) 100%), \r
  linear-gradient(to right, transparent {xPercentage}%, {xPercentage}%, rgba(0,0,255, 0.5) 100%);\r
">\r
	{mousePosition.x}, {mousePosition.y}\r
</div>\r
\r
<style>\r
</style>\r
`;function te(o){let e;return{c(){e=c("This resembles the last post but instead of the window it's the body instead.")},l(n){e=d(n,"This resembles the last post but instead of the window it's the body instead.")},m(n,r){f(n,e,r)},d(n){n&&p(e)}}}function ne(o){let e,n,r,i;return e=new z({props:{$$slots:{default:[te]},$$scope:{ctx:o}}}),r=new Z({props:{name:[{name:"App",comp:J,raw:K,text:"Here it is using onMount and normal event listeners."},{name:"App2",comp:U,raw:ee,text:"We can remove a lot of the code if we use the svelte:body element!"}]}}),{c(){v(e.$$.fragment),n=j(),v(r.$$.fragment)},l(t){P(e.$$.fragment,t),n=C(t),P(r.$$.fragment,t)},m(t,s){$(e,t,s),f(t,n,s),$(r,t,s),i=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(x(e.$$.fragment,t),x(r.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),i=!1},d(t){t&&p(n),M(e,t),M(r,t)}}}function re(o){let e,n;const r=[o[0],L];let i={$$slots:{default:[ne]},$$scope:{ctx:o}};for(let t=0;t<r.length;t+=1)i=h(i,r[t]);return e=new q({props:i}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p(t,[s]){const a=s&1?V(r,[s&1&&X(t[0]),s&0&&X(L)]):{};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}const L={title:"<svelte:body>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-28T00:00:00.000Z",layout:"notes"};function oe(o,e,n){return o.$$set=r=>{n(0,e=h(h({},e),W(r)))},e=W(e),[e]}class ce extends A{constructor(e){super(),E(this,e,oe,re,k,{})}}export{ce as default,L as metadata};
