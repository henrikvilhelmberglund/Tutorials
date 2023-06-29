import{s as S,f as w,g as y,u as E,j as O,i as f,ae as B,z as h,d as u,a as b,e as T,c as g,X as J,h as U,J as X,C as L,D as j,l as C,m as x}from"./scheduler.a7cd560e.js";import{S as M,i as A,a as m,g as Z,t as p,c as G,j as D,b as _,d as $,m as k,e as v}from"./index.396264e7.js";import{g as K,a as P}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{b as z,M as Q,P as N}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as V}from"./ShowMany.db7be1f3.js";import{S as W}from"./Strong.097578ae.js";function Y(i){let t,o="Some modal",n,s;return{c(){t=w("div"),t.textContent=o,this.h()},l(e){t=y(e,"DIV",{class:!0,["data-svelte-h"]:!0}),E(t)!=="svelte-el5pk8"&&(t.textContent=o),this.h()},h(){O(t,"class","spu-i4xhvo")},m(e,r){f(e,t,r),n||(s=B(tt.call(null,t,i[0])),n=!0)},p:h,i:h,o:h,d(e){e&&u(t),n=!1,s()}}}function tt(i,t){function o(n){i.contains(n.target)||t()}return document.body.addEventListener("click",o),{update(n){t=n},destroy(){document.body.removeEventListener("click",o)}}}function et(i){return[()=>{console.log("clicked outside of modal 1")}]}class nt extends M{constructor(t){super(),A(this,t,et,Y,S,{})}}const ot=`<script>\r
	function clickOutside(element, callbackFunction) {\r
		function onClick(event) {\r
			if (!element.contains(event.target)) {\r
				callbackFunction();\r
			}\r
		}\r
		document.body.addEventListener("click", onClick);\r
		return {\r
			update(newCallbackFunction) {\r
				callbackFunction = newCallbackFunction;\r
			},\r
			destroy() {\r
				document.body.removeEventListener("click", onClick);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<div\r
	use:clickOutside={() => {\r
		console.log("clicked outside of modal 1");\r
	}}\r
	class="border-1 border-solid border-black p-4">\r
	Some modal\r
</div>\r
\r
<style>\r
</style>\r
`;function q(i){let t,o="Show modal",n,s;return{c(){t=w("button"),t.textContent=o},l(e){t=y(e,"BUTTON",{["data-svelte-h"]:!0}),E(t)!=="svelte-o1wte0"&&(t.textContent=o)},m(e,r){f(e,t,r),n||(s=J(t,"click",i[2]),n=!0)},p:h,d(e){e&&u(t),n=!1,s()}}}function H(i){let t,o="Hello, I am a beautiful modal!",n,s,e,r,a,d;return{c(){t=w("div"),t.textContent=o,s=b(),e=w("div"),this.h()},l(l){t=y(l,"DIV",{class:!0,["data-svelte-h"]:!0}),E(t)!=="svelte-ocisuw"&&(t.textContent=o),s=g(l),e=y(l,"DIV",{class:!0}),U(e).forEach(u),this.h()},h(){O(t,"class","spu-fnnq0s"),O(e,"class","spu-r2jpda")},m(l,c){f(l,t,c),f(l,s,c),f(l,e,c),r=!0,a||(d=B(i[1].call(null,t)),a=!0)},i(l){r||(l&&X(()=>{r&&(n||(n=D(t,z,{},!0)),n.run(1))}),r=!0)},o(l){l&&(n||(n=D(t,z,{},!1)),n.run(0)),r=!1},d(l){l&&(u(t),u(s),u(e)),l&&n&&n.end(),a=!1,d()}}}function lt(i){let t,o,n=!i[0]&&q(i),s=i[0]&&H(i);return{c(){n&&n.c(),t=b(),s&&s.c(),o=T()},l(e){n&&n.l(e),t=g(e),s&&s.l(e),o=T()},m(e,r){n&&n.m(e,r),f(e,t,r),s&&s.m(e,r),f(e,o,r)},p(e,[r]){e[0]?n&&(n.d(1),n=null):n?n.p(e,r):(n=q(e),n.c(),n.m(t.parentNode,t)),e[0]?s?r&1&&m(s,1):(s=H(e),s.c(),m(s,1),s.m(o.parentNode,o)):s&&(Z(),p(s,1,1,()=>{s=null}),G())},i(e){m(s)},o(e){p(s)},d(e){e&&(u(t),u(o)),n&&n.d(e),s&&s.d(e)}}}function st(i,t,o){let n=!1;function s(r){function a(d){r.contains(d.target)||(console.log("clicked outside of modal 2 - closing!"),o(0,n=!1))}return document.body.addEventListener("click",a),{update(d){callbackFunction=d},destroy(){document.body.removeEventListener("click",a)}}}return[n,s,()=>{o(0,n=!0),event.stopPropagation()}]}class rt extends M{constructor(t){super(),A(this,t,st,lt,S,{})}}const it=`<script>\r
	import { blur } from "svelte/transition";\r
	let showModal = false;\r
\r
	function clickOutside(element) {\r
		function onClick(event) {\r
			if (!element.contains(event.target)) {\r
				console.log("clicked outside of modal 2 - closing!");\r
				showModal = false;\r
			}\r
		}\r
		document.body.addEventListener("click", onClick);\r
		return {\r
			update(newCallbackFunction) {\r
				callbackFunction = newCallbackFunction;\r
			},\r
			destroy() {\r
				document.body.removeEventListener("click", onClick);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
{#if !showModal}\r
	<button\r
		on:click={() => {\r
			showModal = true;\r
			event.stopPropagation();\r
		}}>Show modal</button>\r
{/if}\r
\r
{#if showModal}\r
	<div\r
		transition:blur\r
		use:clickOutside\r
		class="z-100 border-1\r
  fixed top-24 left-[50%] translate-x-[-50%] rounded-md border-solid border-black bg-green-400 p-8 text-2xl ">\r
		Hello, I am a beautiful modal!\r
	</div>\r
	<div class="fixed top-0 left-0 z-50 h-full w-full backdrop-blur-lg" />\r
{/if}\r
`;function at(i){let t;return{c(){t=C("use:clickOutside")},l(o){t=x(o,"use:clickOutside")},m(o,n){f(o,t,n)},d(o){o&&u(t)}}}function ct(i){let t,o,n,s;return o=new W({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){t=C("This is an example of "),_(o.$$.fragment),n=C(" which logs to console whenever you click outside of the element.")},l(e){t=x(e,"This is an example of "),$(o.$$.fragment,e),n=x(e," which logs to console whenever you click outside of the element.")},m(e,r){f(e,t,r),k(o,e,r),f(e,n,r),s=!0},p(e,r){const a={};r&2&&(a.$$scope={dirty:r,ctx:e}),o.$set(a)},i(e){s||(m(o.$$.fragment,e),s=!0)},o(e){p(o.$$.fragment,e),s=!1},d(e){e&&(u(t),u(n)),v(o,e)}}}function ut(i){let t;return{c(){t=C("Let's make it a bit more fancy:")},l(o){t=x(o,"Let's make it a bit more fancy:")},m(o,n){f(o,t,n)},d(o){o&&u(t)}}}function ft(i){let t,o,n,s,e,r,a,d;return t=new N({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}}),n=new V({props:{name:[{name:"App",comp:nt,raw:ot,text:""}]}}),e=new N({props:{$$slots:{default:[ut]},$$scope:{ctx:i}}}),a=new V({props:{name:[{name:"App2",comp:rt,raw:it,text:""}]}}),{c(){_(t.$$.fragment),o=b(),_(n.$$.fragment),s=b(),_(e.$$.fragment),r=b(),_(a.$$.fragment)},l(l){$(t.$$.fragment,l),o=g(l),$(n.$$.fragment,l),s=g(l),$(e.$$.fragment,l),r=g(l),$(a.$$.fragment,l)},m(l,c){k(t,l,c),f(l,o,c),k(n,l,c),f(l,s,c),k(e,l,c),f(l,r,c),k(a,l,c),d=!0},p(l,c){const F={};c&2&&(F.$$scope={dirty:c,ctx:l}),t.$set(F);const I={};c&2&&(I.$$scope={dirty:c,ctx:l}),e.$set(I)},i(l){d||(m(t.$$.fragment,l),m(n.$$.fragment,l),m(e.$$.fragment,l),m(a.$$.fragment,l),d=!0)},o(l){p(t.$$.fragment,l),p(n.$$.fragment,l),p(e.$$.fragment,l),p(a.$$.fragment,l),d=!1},d(l){l&&(u(o),u(s),u(r)),v(t,l),v(n,l),v(e,l),v(a,l)}}}function dt(i){let t,o;const n=[i[0],R];let s={$$slots:{default:[ft]},$$scope:{ctx:i}};for(let e=0;e<n.length;e+=1)s=L(s,n[e]);return t=new Q({props:s}),{c(){_(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,r){k(t,e,r),o=!0},p(e,[r]){const a=r&1?K(n,[r&1&&P(e[0]),r&0&&P(R)]):{};r&2&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){o||(m(t.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),o=!1},d(e){v(t,e)}}}const R={title:"use:clickOutside",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function mt(i,t,o){return i.$$set=n=>{o(0,t=L(L({},t),j(n)))},t=j(t),[t]}class gt extends M{constructor(t){super(),A(this,t,mt,dt,S,{})}}export{gt as default,R as metadata};
