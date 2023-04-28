import{S as k,i as A,s as E,k as X,q as c,l as Y,m as D,r as d,h as p,n as R,p as y,b as f,D as g,u as b,H as _,o as q,a as T,c as j,R as z,av as I,J as h,y as v,z as P,A as $,K as V,L,g as x,d as w,B as M,M as W}from"./index.5815ca79.js";import{M as B,P as C}from"./mdsvex-layout-notes.7536afaf.js";import{S as J}from"./ShowMany.2af9ac15.js";function K(o){let e,n=o[0].x+"",r,i,t=o[0].y+"",s;return{c(){e=X("div"),r=c(n),i=c(", "),s=c(t),this.h()},l(a){e=Y(a,"DIV",{class:!0,style:!0});var u=D(e);r=d(u,n),i=d(u,", "),s=d(u,t),u.forEach(p),this.h()},h(){R(e,"class","uno-r1zil5"),y(e,"background","linear-gradient(to bottom, transparent "+o[2]+"%, "+o[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+o[1]+"%, "+o[1]+"%, rgba(0,0,255, 0.5) 100%)")},m(a,u){f(a,e,u),g(e,r),g(e,i),g(e,s)},p(a,[u]){u&1&&n!==(n=a[0].x+"")&&b(r,n),u&1&&t!==(t=a[0].y+"")&&b(s,t),u&6&&y(e,"background","linear-gradient(to bottom, transparent "+a[2]+"%, "+a[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+a[1]+"%, "+a[1]+"%, rgba(0,0,255, 0.5) 100%)")},i:_,o:_,d(a){a&&p(e)}}}function Z(o,e,n){let r={x:0,y:0},i=0,t=0;return q(()=>{function s(a){n(0,r.x=a.clientX,r),n(0,r.y=a.clientY,r)}return document.body.addEventListener("mousemove",s),()=>document.body.removeEventListener("mousemove",s)}),o.$$.update=()=>{o.$$.dirty&1&&(n(2,t=r.y*100*10/document.body.clientHeight),n(1,i=r.x*100*2/document.body.clientWidth-40))},[r,i,t]}class F extends k{constructor(e){super(),A(this,e,Z,K,E,{})}}const G=`<script>\r
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
`;const{document:N}=I;function O(o){let e,n,r=o[0].x+"",i,t,s=o[0].y+"",a,u,H;return{c(){e=T(),n=X("div"),i=c(r),t=c(", "),a=c(s),this.h()},l(l){e=j(l),n=Y(l,"DIV",{class:!0,style:!0});var m=D(n);i=d(m,r),t=d(m,", "),a=d(m,s),m.forEach(p),this.h()},h(){R(n,"class","uno-hnyjw7"),y(n,"background","linear-gradient(to bottom, transparent "+o[2]+"%, "+o[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+o[1]+"%, "+o[1]+"%, rgba(0,0,255, 0.5) 100%)")},m(l,m){f(l,e,m),f(l,n,m),g(n,i),g(n,t),g(n,a),u||(H=z(N.body,"mousemove",o[3]),u=!0)},p(l,[m]){m&1&&r!==(r=l[0].x+"")&&b(i,r),m&1&&s!==(s=l[0].y+"")&&b(a,s),m&6&&y(n,"background","linear-gradient(to bottom, transparent "+l[2]+"%, "+l[2]+"%, rgba(255, 0, 0, 0.5) 100%), linear-gradient(to right, transparent "+l[1]+"%, "+l[1]+"%, rgba(0,0,255, 0.5) 100%)")},i:_,o:_,d(l){l&&p(e),l&&p(n),u=!1,H()}}}function Q(o,e,n){let r={x:0,y:0},i=0,t=0;function s(a){n(0,r.x=a.clientX,r),n(0,r.y=a.clientY,r)}return o.$$.update=()=>{o.$$.dirty&1&&(n(2,t=r.y*100*10/document.body.clientHeight),n(1,i=r.x*100*2/document.body.clientWidth-40))},[r,i,t,s]}class U extends k{constructor(e){super(),A(this,e,Q,O,E,{})}}const ee=`<script>\r
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
`;function te(o){let e;return{c(){e=c("This resembles the last post but instead of the window it's the body instead.")},l(n){e=d(n,"This resembles the last post but instead of the window it's the body instead.")},m(n,r){f(n,e,r)},d(n){n&&p(e)}}}function ne(o){let e,n,r,i;return e=new C({props:{$$slots:{default:[te]},$$scope:{ctx:o}}}),r=new J({props:{name:[{name:"App",comp:F,raw:G,text:"Here it is using onMount and normal event listeners."},{name:"App2",comp:U,raw:ee,text:"We can remove a lot of the code if we use the svelte:body element!"}]}}),{c(){v(e.$$.fragment),n=T(),v(r.$$.fragment)},l(t){P(e.$$.fragment,t),n=j(t),P(r.$$.fragment,t)},m(t,s){$(e,t,s),f(t,n,s),$(r,t,s),i=!0},p(t,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(x(e.$$.fragment,t),x(r.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),i=!1},d(t){M(e,t),t&&p(n),M(r,t)}}}function re(o){let e,n;const r=[o[0],S];let i={$$slots:{default:[ne]},$$scope:{ctx:o}};for(let t=0;t<r.length;t+=1)i=h(i,r[t]);return e=new B({props:i}),{c(){v(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){$(e,t,s),n=!0},p(t,[s]){const a=s&1?V(r,[s&1&&L(t[0]),s&0&&L(S)]):{};s&2&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}const S={title:"<svelte:body>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-28T00:00:00.000Z",layout:"notes"};function oe(o,e,n){return o.$$set=r=>{n(0,e=h(h({},e),W(r)))},e=W(e),[e]}class le extends k{constructor(e){super(),A(this,e,oe,re,E,{})}}export{le as default,S as metadata};
