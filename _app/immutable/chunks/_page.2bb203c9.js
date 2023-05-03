import{S as L,i as M,s as A,k as C,q as _,l as x,m as E,r as $,h as u,n as O,b as f,D as F,aa as K,H as y,a as h,e as z,c as w,g as d,v as U,d as p,f as Z,T as G,ad as J,au as D,K as S,y as k,z as b,A as v,L as Q,M as H,B as g,N}from"./index.0b5cc0d7.js";import{M as W,P}from"./mdsvex-layout-notes.c527e9b3.js";import{S as V}from"./ShowMany.5b53376e.js";import{b as j}from"./index.0f4f1c76.js";import{S as X}from"./Strong.272c5f79.js";function Y(i){let t,o,l,s;return{c(){t=C("div"),o=_("Some modal"),this.h()},l(e){t=x(e,"DIV",{class:!0});var n=E(t);o=$(n,"Some modal"),n.forEach(u),this.h()},h(){O(t,"class","uno-gh6jfk")},m(e,n){f(e,t,n),F(t,o),l||(s=K(tt.call(null,t,i[0])),l=!0)},p:y,i:y,o:y,d(e){e&&u(t),l=!1,s()}}}function tt(i,t){function o(l){i.contains(l.target)||t()}return document.body.addEventListener("click",o),{update(l){t=l},destroy(){document.body.removeEventListener("click",o)}}}function et(i){return[()=>{console.log("clicked outside of modal 1")}]}class nt extends L{constructor(t){super(),M(this,t,et,Y,A,{})}}const ot=`<script>\r
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
`;function q(i){let t,o,l,s;return{c(){t=C("button"),o=_("Show modal")},l(e){t=x(e,"BUTTON",{});var n=E(t);o=$(n,"Show modal"),n.forEach(u)},m(e,n){f(e,t,n),F(t,o),l||(s=G(t,"click",i[2]),l=!0)},p:y,d(e){e&&u(t),l=!1,s()}}}function B(i){let t,o,l,s,e,n,a,m;return{c(){t=C("div"),o=_("Hello, I am a beautiful modal!"),s=h(),e=C("div"),this.h()},l(r){t=x(r,"DIV",{class:!0});var c=E(t);o=$(c,"Hello, I am a beautiful modal!"),c.forEach(u),s=w(r),e=x(r,"DIV",{class:!0}),E(e).forEach(u),this.h()},h(){O(t,"class","uno-t5zaci"),O(e,"class","uno-7iem4y")},m(r,c){f(r,t,c),F(t,o),f(r,s,c),f(r,e,c),n=!0,a||(m=K(i[1].call(null,t)),a=!0)},i(r){n||(J(()=>{n&&(l||(l=D(t,j,{},!0)),l.run(1))}),n=!0)},o(r){l||(l=D(t,j,{},!1)),l.run(0),n=!1},d(r){r&&u(t),r&&l&&l.end(),r&&u(s),r&&u(e),a=!1,m()}}}function lt(i){let t,o,l,s=!i[0]&&q(i),e=i[0]&&B(i);return{c(){s&&s.c(),t=h(),e&&e.c(),o=z()},l(n){s&&s.l(n),t=w(n),e&&e.l(n),o=z()},m(n,a){s&&s.m(n,a),f(n,t,a),e&&e.m(n,a),f(n,o,a),l=!0},p(n,[a]){n[0]?s&&(s.d(1),s=null):s?s.p(n,a):(s=q(n),s.c(),s.m(t.parentNode,t)),n[0]?e?a&1&&d(e,1):(e=B(n),e.c(),d(e,1),e.m(o.parentNode,o)):e&&(U(),p(e,1,1,()=>{e=null}),Z())},i(n){l||(d(e),l=!0)},o(n){p(e),l=!1},d(n){s&&s.d(n),n&&u(t),e&&e.d(n),n&&u(o)}}}function rt(i,t,o){let l=!1;function s(n){function a(m){n.contains(m.target)||(console.log("clicked outside of modal 2 - closing!"),o(0,l=!1))}return document.body.addEventListener("click",a),{update(m){callbackFunction=m},destroy(){document.body.removeEventListener("click",a)}}}return[l,s,()=>{o(0,l=!0),event.stopPropagation()}]}class st extends L{constructor(t){super(),M(this,t,rt,lt,A,{})}}const it=`<script>\r
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
`;function at(i){let t;return{c(){t=_("use:clickOutside")},l(o){t=$(o,"use:clickOutside")},m(o,l){f(o,t,l)},d(o){o&&u(t)}}}function ct(i){let t,o,l,s;return o=new X({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){t=_("This is an example of "),k(o.$$.fragment),l=_(" which logs to console whenever you click outside of the element.")},l(e){t=$(e,"This is an example of "),b(o.$$.fragment,e),l=$(e," which logs to console whenever you click outside of the element.")},m(e,n){f(e,t,n),v(o,e,n),f(e,l,n),s=!0},p(e,n){const a={};n&2&&(a.$$scope={dirty:n,ctx:e}),o.$set(a)},i(e){s||(d(o.$$.fragment,e),s=!0)},o(e){p(o.$$.fragment,e),s=!1},d(e){e&&u(t),g(o,e),e&&u(l)}}}function ut(i){let t;return{c(){t=_("Let's make it a bit more fancy:")},l(o){t=$(o,"Let's make it a bit more fancy:")},m(o,l){f(o,t,l)},d(o){o&&u(t)}}}function ft(i){let t,o,l,s,e,n,a,m;return t=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:i}}}),l=new V({props:{name:[{name:"App",comp:nt,raw:ot,text:""}]}}),e=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:i}}}),a=new V({props:{name:[{name:"App2",comp:st,raw:it,text:""}]}}),{c(){k(t.$$.fragment),o=h(),k(l.$$.fragment),s=h(),k(e.$$.fragment),n=h(),k(a.$$.fragment)},l(r){b(t.$$.fragment,r),o=w(r),b(l.$$.fragment,r),s=w(r),b(e.$$.fragment,r),n=w(r),b(a.$$.fragment,r)},m(r,c){v(t,r,c),f(r,o,c),v(l,r,c),f(r,s,c),v(e,r,c),f(r,n,c),v(a,r,c),m=!0},p(r,c){const I={};c&2&&(I.$$scope={dirty:c,ctx:r}),t.$set(I);const T={};c&2&&(T.$$scope={dirty:c,ctx:r}),e.$set(T)},i(r){m||(d(t.$$.fragment,r),d(l.$$.fragment,r),d(e.$$.fragment,r),d(a.$$.fragment,r),m=!0)},o(r){p(t.$$.fragment,r),p(l.$$.fragment,r),p(e.$$.fragment,r),p(a.$$.fragment,r),m=!1},d(r){g(t,r),r&&u(o),g(l,r),r&&u(s),g(e,r),r&&u(n),g(a,r)}}}function mt(i){let t,o;const l=[i[0],R];let s={$$slots:{default:[ft]},$$scope:{ctx:i}};for(let e=0;e<l.length;e+=1)s=S(s,l[e]);return t=new W({props:s}),{c(){k(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,n){v(t,e,n),o=!0},p(e,[n]){const a=n&1?Q(l,[n&1&&H(e[0]),n&0&&H(R)]):{};n&2&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){o||(d(t.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),o=!1},d(e){g(t,e)}}}const R={title:"use:clickOutside",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function dt(i,t,o){return i.$$set=l=>{o(0,t=S(S({},t),N(l)))},t=N(t),[t]}class vt extends L{constructor(t){super(),M(this,t,dt,mt,A,{})}}export{vt as default,R as metadata};
