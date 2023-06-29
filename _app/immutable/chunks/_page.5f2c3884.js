import{s as O,f as $,a as g,g as _,c as E,i as f,X as H,z as y,d as c,H as q,ae as L,h as D,j as et,v as N,I as K,p as M,l as P,e as B,m as V,n as dt,u as mt,C as tt,D as lt}from"./scheduler.a7cd560e.js";import{S as U,i as S,b as A,d as b,m as x,a as T,t as I,e as R}from"./index.396264e7.js";import{g as wt,a as ut}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as $t,P as j}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as J}from"./ShowMany.db7be1f3.js";import{S as _t}from"./Strong.097578ae.js";function vt(o){let t,e,n,u,i,l,a;return{c(){t=$("input"),e=g(),n=$("input"),u=g(),i=$("input")},l(r){t=_(r,"INPUT",{}),e=E(r),n=_(r,"INPUT",{}),u=E(r),i=_(r,"INPUT",{})},m(r,s){f(r,t,s),f(r,e,s),f(r,n,s),f(r,u,s),f(r,i,s),l||(a=[H(t,"keydown",W),H(n,"keydown",W),H(i,"keydown",W)],l=!0)},p:y,i:y,o:y,d(r){r&&(c(t),c(e),c(n),c(u),c(i)),l=!1,q(a)}}}function W(o){o.key==="Escape"&&o.currentTarget.blur()}class ht extends U{constructor(t){super(),S(this,t,null,vt,O,{})}}function gt(o){let t,e,n,u,i,l,a;return{c(){t=$("input"),e=g(),n=$("input"),u=g(),i=$("input")},l(r){t=_(r,"INPUT",{}),e=E(r),n=_(r,"INPUT",{}),u=E(r),i=_(r,"INPUT",{})},m(r,s){f(r,t,s),f(r,e,s),f(r,n,s),f(r,u,s),f(r,i,s),l||(a=[L(X.call(null,t)),L(X.call(null,n)),L(X.call(null,i))],l=!0)},p:y,i:y,o:y,d(r){r&&(c(t),c(e),c(n),c(u),c(i)),l=!1,q(a)}}}function X(o){function t(e){e.key==="Escape"&&e.currentTarget.blur()}return o.addEventListener("keydown",t),{destroy(){o.removeEventListener("keydown",t)}}}class Et extends U{constructor(t){super(),S(this,t,null,gt,O,{})}}function yt(o){let t,e,n,u,i,l,a;return n=new ht({}),l=new Et({}),{c(){t=$("div"),e=$("div"),A(n.$$.fragment),u=g(),i=$("div"),A(l.$$.fragment),this.h()},l(r){t=_(r,"DIV",{class:!0});var s=D(t);e=_(s,"DIV",{});var m=D(e);b(n.$$.fragment,m),m.forEach(c),u=E(s),i=_(s,"DIV",{});var w=D(i);b(l.$$.fragment,w),w.forEach(c),s.forEach(c),this.h()},h(){et(t,"class","spu-dw6hr0")},m(r,s){f(r,t,s),N(t,e),x(n,e,null),N(t,u),N(t,i),x(l,i,null),a=!0},p:y,i(r){a||(T(n.$$.fragment,r),T(l.$$.fragment,r),a=!0)},o(r){I(n.$$.fragment,r),I(l.$$.fragment,r),a=!1},d(r){r&&c(t),R(n),R(l)}}}class Z extends U{constructor(t){super(),S(this,t,null,yt,O,{})}}const kt=`<script>\r
	import Example1 from "./Example1.svelte";\r
	import Result1 from "./Result1.svelte";\r
<\/script>\r
\r
<div class="flex gap-4">\r
	<div>\r
		<Example1 />\r
	</div>\r
	<div>\r
		<Result1 />\r
	</div>\r
</div>\r
\r
<style>\r
	:global(input) {\r
		width: 100%;\r
	}\r
</style>\r
`;function At(o){let t,e,n,u,i,l,a;return{c(){t=$("input"),e=g(),n=$("input"),u=g(),i=$("input")},l(r){t=_(r,"INPUT",{}),e=E(r),n=_(r,"INPUT",{}),u=E(r),i=_(r,"INPUT",{})},m(r,s){f(r,t,s),o[3](t),f(r,e,s),f(r,n,s),o[4](n),f(r,u,s),f(r,i,s),o[5](i),l||(a=[H(t,"keydown",function(){K(F(o[1]))&&F(o[1]).apply(this,arguments)}),H(n,"keydown",function(){K(F(o[2]))&&F(o[2]).apply(this,arguments)}),H(i,"keydown",F())],l=!0)},p(r,[s]){o=r},i:y,o:y,d(r){r&&(c(t),c(e),c(n),c(u),c(i)),o[3](null),o[4](null),o[5](null),l=!1,q(a)}}}function F(o){return function(e){e.key==="Enter"&&(o?o.focus():e.currentTarget.blur())}}function bt(o,t,e){let n,u,i;function l(s){M[s?"unshift":"push"](()=>{n=s,e(0,n)})}function a(s){M[s?"unshift":"push"](()=>{u=s,e(1,u)})}function r(s){M[s?"unshift":"push"](()=>{i=s,e(2,i)})}return[n,u,i,l,a,r]}class xt extends U{constructor(t){super(),S(this,t,bt,At,O,{})}}function Tt(o){let t,e,n,u,i,l,a,r,s;return{c(){t=$("input"),n=g(),u=$("input"),l=g(),a=$("input")},l(m){t=_(m,"INPUT",{}),n=E(m),u=_(m,"INPUT",{}),l=E(m),a=_(m,"INPUT",{})},m(m,w){f(m,t,w),o[3](t),f(m,n,w),f(m,u,w),o[4](u),f(m,l,w),f(m,a,w),o[5](a),r||(s=[L(e=G.call(null,t,o[1])),L(i=G.call(null,u,o[2])),L(G.call(null,a))],r=!0)},p(m,[w]){e&&K(e.update)&&w&2&&e.update.call(null,m[1]),i&&K(i.update)&&w&4&&i.update.call(null,m[2])},i:y,o:y,d(m){m&&(c(t),c(n),c(u),c(l),c(a)),o[3](null),o[4](null),o[5](null),r=!1,q(s)}}}function G(o,t){function e(n){n.key==="Enter"&&(t?t.focus():n.currentTarget.blur())}return o.addEventListener("keydown",e),{update(n){t=n},destroy(){o.removeEventListener("keydown",e)}}}function It(o,t,e){let n,u,i;function l(s){M[s?"unshift":"push"](()=>{n=s,e(0,n)})}function a(s){M[s?"unshift":"push"](()=>{u=s,e(1,u)})}function r(s){M[s?"unshift":"push"](()=>{i=s,e(2,i)})}return[n,u,i,l,a,r]}class Rt extends U{constructor(t){super(),S(this,t,It,Tt,O,{})}}function Ot(o){let t,e,n,u,i,l,a;return n=new xt({}),l=new Rt({}),{c(){t=$("div"),e=$("div"),A(n.$$.fragment),u=g(),i=$("div"),A(l.$$.fragment),this.h()},l(r){t=_(r,"DIV",{class:!0});var s=D(t);e=_(s,"DIV",{});var m=D(e);b(n.$$.fragment,m),m.forEach(c),u=E(s),i=_(s,"DIV",{});var w=D(i);b(l.$$.fragment,w),w.forEach(c),s.forEach(c),this.h()},h(){et(t,"class","spu-r9hxzg")},m(r,s){f(r,t,s),N(t,e),x(n,e,null),N(t,u),N(t,i),x(l,i,null),a=!0},p:y,i(r){a||(T(n.$$.fragment,r),T(l.$$.fragment,r),a=!0)},o(r){I(n.$$.fragment,r),I(l.$$.fragment,r),a=!1},d(r){r&&c(t),R(n),R(l)}}}class Q extends U{constructor(t){super(),S(this,t,null,Ot,O,{})}}const Ut=`<script>\r
	import Example2 from "./Example2.svelte";\r
	import Result2 from "./Result2.svelte";\r
<\/script>\r
\r
<div class="flex gap-4">\r
	<div>\r
		<Example2 />\r
	</div>\r
	<div>\r
		<Result2 />\r
	</div>\r
</div>\r
\r
<style>\r
	:global(input) {\r
		width: 100%;\r
	}\r
</style>\r
`;function pt(o){let t,e="Secret unlocked!";return{c(){t=$("div"),t.textContent=e},l(n){t=_(n,"DIV",{["data-svelte-h"]:!0}),mt(t)!=="svelte-1xpa9lc"&&(t.textContent=e)},m(n,u){f(n,t,u)},d(n){n&&c(t)}}}function St(o){let t,e,n,u,i,l,a,r=o[0]&&pt();return{c(){t=P(o[1]),e=g(),n=$("input"),u=g(),r&&r.c(),i=B()},l(s){t=V(s,o[1]),e=E(s),n=_(s,"INPUT",{}),u=E(s),r&&r.l(s),i=B()},m(s,m){f(s,t,m),f(s,e,m),f(s,n,m),f(s,u,m),r&&r.m(s,m),f(s,i,m),l||(a=H(n,"keydown",o[2]),l=!0)},p(s,[m]){m&2&&dt(t,s[1]),s[0]?r||(r=pt(),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i:y,o:y,d(s){s&&(c(t),c(e),c(n),c(u),c(i)),r&&r.d(s),l=!1,a()}}}let Dt="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function Nt(o,t,e){let n=!1,u=[],i=null;function l(a){u.push(a.key),u.join(",")===Dt&&e(0,n=!0),i&&clearTimeout(i),i=setTimeout(()=>{i=null,e(1,u=[]),e(0,n=!1)},2e3)}return[n,u,l]}class Ct extends U{constructor(t){super(),S(this,t,Nt,St,O,{})}}function at(o){let t,e="Secret unlocked!";return{c(){t=$("div"),t.textContent=e},l(n){t=_(n,"DIV",{["data-svelte-h"]:!0}),mt(t)!=="svelte-1xpa9lc"&&(t.textContent=e)},m(n,u){f(n,t,u)},d(n){n&&c(t)}}}function Lt(o){let t,e,n,u,i,l,a,r,s,m,w,h=o[0]&&at();return{c(){t=$("input"),n=g(),u=$("hr"),i=g(),l=$("input"),r=g(),h&&h.c(),s=B()},l(d){t=_(d,"INPUT",{}),n=E(d),u=_(d,"HR",{}),i=E(d),l=_(d,"INPUT",{}),r=E(d),h&&h.l(d),s=B()},m(d,k){f(d,t,k),f(d,n,k),f(d,u,k),f(d,i,k),f(d,l,k),f(d,r,k),h&&h.m(d,k),f(d,s,k),m||(w=[L(e=o[1].call(null,t,{secret:ct,callback:o[2]})),L(a=o[1].call(null,l,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:o[3]}))],m=!0)},p(d,[k]){e&&K(e.update)&&k&1&&e.update.call(null,{secret:ct,callback:d[2]}),a&&K(a.update)&&k&1&&a.update.call(null,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:d[3]}),d[0]?h||(h=at(),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:y,o:y,d(d){d&&(c(t),c(n),c(u),c(i),c(l),c(r),c(s)),h&&h.d(d),m=!1,q(w)}}}let ct="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function Pt(o,t,e){let n=!1;function u(a,{secret:r,callback:s}){let m=[],w=null;function h(d){m.push(d.key),m.join(",")===r&&s(),w&&clearTimeout(w),w=setTimeout(()=>{w=null,m=[],e(0,n=!1)},2e3)}return a.addEventListener("keydown",h),{update(){},destroy(){a.removeEventListener("keydown",h)}}}return[n,u,()=>{e(0,n=!0)},()=>{e(0,n=!0)}]}class Vt extends U{constructor(t){super(),S(this,t,Pt,Lt,O,{})}}function Ht(o){let t,e,n,u,i,l,a;return n=new Ct({}),l=new Vt({}),{c(){t=$("div"),e=$("div"),A(n.$$.fragment),u=g(),i=$("div"),A(l.$$.fragment),this.h()},l(r){t=_(r,"DIV",{class:!0});var s=D(t);e=_(s,"DIV",{});var m=D(e);b(n.$$.fragment,m),m.forEach(c),u=E(s),i=_(s,"DIV",{});var w=D(i);b(l.$$.fragment,w),w.forEach(c),s.forEach(c),this.h()},h(){et(t,"class","spu-xq905l")},m(r,s){f(r,t,s),N(t,e),x(n,e,null),N(t,u),N(t,i),x(l,i,null),a=!0},p:y,i(r){a||(T(n.$$.fragment,r),T(l.$$.fragment,r),a=!0)},o(r){I(n.$$.fragment,r),I(l.$$.fragment,r),a=!1},d(r){r&&c(t),R(n),R(l)}}}class Y extends U{constructor(t){super(),S(this,t,null,Ht,O,{})}}const Mt=`<script>\r
	import Example3 from "./Example3.svelte";\r
	import Result3 from "./Result3.svelte";\r
<\/script>\r
\r
<div class="flex gap-4">\r
	<div>\r
		<Example3 />\r
	</div>\r
	<div>\r
		<Result3 />\r
	</div>\r
</div>\r
\r
<style>\r
	:global(input) {\r
		width: 100%;\r
	}\r
</style>\r
`,Kt=`<script>\r
	function blurOnEscape(event) {\r
		if (event.key === "Escape") {\r
			event.currentTarget.blur();\r
		}\r
	}\r
<\/script>\r
\r
<input on:keydown={blurOnEscape} />\r
<input on:keydown={blurOnEscape} />\r
<input on:keydown={blurOnEscape} />\r
`,jt=`<script>\r
	let input1;\r
	let input2;\r
	let input3;\r
\r
	function createNextOnEnter(input) {\r
		return function nextOnEnter1(event) {\r
			if (event.key === "Enter") {\r
				if (input) {\r
					input.focus();\r
				} else {\r
					event.currentTarget.blur();\r
				}\r
			}\r
		};\r
	}\r
<\/script>\r
\r
<input bind:this={input1} on:keydown={createNextOnEnter(input2)} />\r
<input bind:this={input2} on:keydown={createNextOnEnter(input3)} />\r
<input bind:this={input3} on:keydown={createNextOnEnter()} />\r
`,Ft=`<script>\r
	let unlocked = false;\r
	let keys = [];\r
	let timeoutId = null;\r
	let SECRET = "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";\r
	function onKeydown(event) {\r
		keys.push(event.key);\r
\r
		if (keys.join(",") === SECRET) {\r
			unlocked = true;\r
		}\r
\r
		if (timeoutId) clearTimeout(timeoutId);\r
		timeoutId = setTimeout(() => {\r
			timeoutId = null;\r
			keys = [];\r
      unlocked = false;\r
		}, 2000);\r
	}\r
<\/script>\r
\r
{keys}\r
<input on:keydown={onKeydown} />\r
\r
{#if unlocked}\r
	<div>Secret unlocked!</div>\r
{/if}\r
`,qt=`<script>\r
	function blurOnEscapeAction(node) {\r
		function blurOnEscape(event) {\r
			if (event.key === "Escape") {\r
				event.currentTarget.blur();\r
			}\r
		}\r
		node.addEventListener("keydown", blurOnEscape);\r
		return {\r
			destroy() {\r
				node.removeEventListener("keydown", blurOnEscape);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input use:blurOnEscapeAction />\r
<input use:blurOnEscapeAction />\r
<input use:blurOnEscapeAction />\r
`,zt=`<script>\r
	let input1;\r
	let input2;\r
	let input3;\r
\r
	function nextOnEnterAction(element, nextElementToFocus) {\r
		function nextOnEnter(event) {\r
			if (event.key === "Enter") {\r
				if (nextElementToFocus) {\r
					nextElementToFocus.focus();\r
				} else {\r
					event.currentTarget.blur();\r
				}\r
			}\r
		}\r
		element.addEventListener("keydown", nextOnEnter);\r
		return {\r
			update(nextNextElementToFocus) {\r
				nextElementToFocus = nextNextElementToFocus;\r
			},\r
			destroy() {\r
				element.removeEventListener("keydown", nextOnEnter);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input bind:this={input1} use:nextOnEnterAction={input2} />\r
<input bind:this={input2} use:nextOnEnterAction={input3} />\r
<input bind:this={input3} use:nextOnEnterAction />\r
`,Bt=`<script>\r
	let unlocked = false;\r
	let SECRET = "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";\r
\r
	function onSecretComboAction(element, { secret, callback }) {\r
		let keys = [];\r
		let timeoutId = null;\r
		function onKeydown(event) {\r
			keys.push(event.key);\r
\r
			if (keys.join(",") === secret) {\r
				callback();\r
			}\r
\r
			if (timeoutId) clearTimeout(timeoutId);\r
			timeoutId = setTimeout(() => {\r
				timeoutId = null;\r
				keys = [];\r
				unlocked = false;\r
			}, 2000);\r
		}\r
		element.addEventListener("keydown", onKeydown);\r
\r
		return {\r
			update() {},\r
			destroy() {\r
				element.removeEventListener("keydown", onKeydown);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input\r
	use:onSecretComboAction={{\r
		secret: SECRET,\r
		callback: () => {\r
			unlocked = true;\r
		},\r
	}} />\r
\r
<hr>\r
\r
<input\r
	use:onSecretComboAction={{\r
		secret: "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",\r
		callback: () => {\r
			unlocked = true;\r
		},\r
	}} />\r
\r
{#if unlocked}\r
	<div>Secret unlocked!</div>\r
{/if}\r
`;function Jt(o){let t;return{c(){t=P("Here we're going to compare event listeners with actions. Meaning, we will rewrite the code using event listeners as code using actions instead.")},l(e){t=V(e,"Here we're going to compare event listeners with actions. Meaning, we will rewrite the code using event listeners as code using actions instead.")},m(e,n){f(e,t,n)},d(e){e&&c(t)}}}function Wt(o){let t;return{c(){t=P("Next example:")},l(e){t=V(e,"Next example:")},m(e,n){f(e,t,n)},d(e){e&&c(t)}}}function Xt(o){let t;return{c(){t=P("Final example:")},l(e){t=V(e,"Final example:")},m(e,n){f(e,t,n)},d(e){e&&c(t)}}}function Zt(o){let t;return{c(){t=P("It depends")},l(e){t=V(e,"It depends")},m(e,n){f(e,t,n)},d(e){e&&c(t)}}}function Gt(o){let t,e,n,u;return e=new _t({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){t=P("So when should you use event listeners and when should you use actions? "),A(e.$$.fragment),n=P(". Preference of course but also what you're looking for, do you need multiple elements with the same function? Maybe use actions. Is it a one-off thing? Maybe event listeners.")},l(i){t=V(i,"So when should you use event listeners and when should you use actions? "),b(e.$$.fragment,i),n=V(i,". Preference of course but also what you're looking for, do you need multiple elements with the same function? Maybe use actions. Is it a one-off thing? Maybe event listeners.")},m(i,l){f(i,t,l),x(e,i,l),f(i,n,l),u=!0},p(i,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:i}),e.$set(a)},i(i){u||(T(e.$$.fragment,i),u=!0)},o(i){I(e.$$.fragment,i),u=!1},d(i){i&&(c(t),c(n)),R(e,i)}}}function Qt(o){let t;return{c(){t=P("Both methods work! 😊")},l(e){t=V(e,"Both methods work! 😊")},m(e,n){f(e,t,n)},d(e){e&&c(t)}}}function Yt(o){let t,e,n,u,i,l,a,r,s,m,w,h,d,k,C,z;return t=new j({props:{$$slots:{default:[Jt]},$$scope:{ctx:o}}}),n=new J({props:{name:[{name:"Example1",comp:Z,raw:Kt,text:"Here we're using currentTarget to avoid binding to multiple variables. Very vanilla JS!"},{name:"Result1",comp:Z,raw:qt,text:"Here it is using actions. It is a bit longer since we need to add the event listeners ourselves."},{name:"App",comp:Z,raw:kt,text:"This is the wrapper that displays both of the components."}]}}),i=new j({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),a=new J({props:{name:[{name:"Example2",comp:Q,raw:jt,text:"Here we use a higher order function to create a new function. This could lead to lower performance since we do this whenever input1, input2 or input3 changes."},{name:"Result2",comp:Q,raw:zt,text:"Here it is using actions. There's no need to create new functions when inputs change so it could have higher performance."},{name:"App2",comp:Q,raw:Ut,text:"This is the wrapper that displays both of the components."}]}}),s=new j({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),w=new J({props:{name:[{name:"Example3",comp:Y,raw:Ft,text:"Here we wait for user input to display a div if the input was the same as our secret."},{name:"Result3",comp:Y,raw:Bt,text:"Here it is using actions. We can easily have multiple inputs with differing secrets."},{name:"App3",comp:Y,raw:Mt,text:"This is the wrapper that displays both of the components."}]}}),d=new j({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),C=new j({props:{$$slots:{default:[Qt]},$$scope:{ctx:o}}}),{c(){A(t.$$.fragment),e=g(),A(n.$$.fragment),u=g(),A(i.$$.fragment),l=g(),A(a.$$.fragment),r=g(),A(s.$$.fragment),m=g(),A(w.$$.fragment),h=g(),A(d.$$.fragment),k=g(),A(C.$$.fragment)},l(p){b(t.$$.fragment,p),e=E(p),b(n.$$.fragment,p),u=E(p),b(i.$$.fragment,p),l=E(p),b(a.$$.fragment,p),r=E(p),b(s.$$.fragment,p),m=E(p),b(w.$$.fragment,p),h=E(p),b(d.$$.fragment,p),k=E(p),b(C.$$.fragment,p)},m(p,v){x(t,p,v),f(p,e,v),x(n,p,v),f(p,u,v),x(i,p,v),f(p,l,v),x(a,p,v),f(p,r,v),x(s,p,v),f(p,m,v),x(w,p,v),f(p,h,v),x(d,p,v),f(p,k,v),x(C,p,v),z=!0},p(p,v){const nt={};v&2&&(nt.$$scope={dirty:v,ctx:p}),t.$set(nt);const rt={};v&2&&(rt.$$scope={dirty:v,ctx:p}),i.$set(rt);const it={};v&2&&(it.$$scope={dirty:v,ctx:p}),s.$set(it);const st={};v&2&&(st.$$scope={dirty:v,ctx:p}),d.$set(st);const ot={};v&2&&(ot.$$scope={dirty:v,ctx:p}),C.$set(ot)},i(p){z||(T(t.$$.fragment,p),T(n.$$.fragment,p),T(i.$$.fragment,p),T(a.$$.fragment,p),T(s.$$.fragment,p),T(w.$$.fragment,p),T(d.$$.fragment,p),T(C.$$.fragment,p),z=!0)},o(p){I(t.$$.fragment,p),I(n.$$.fragment,p),I(i.$$.fragment,p),I(a.$$.fragment,p),I(s.$$.fragment,p),I(w.$$.fragment,p),I(d.$$.fragment,p),I(C.$$.fragment,p),z=!1},d(p){p&&(c(e),c(u),c(l),c(r),c(m),c(h),c(k)),R(t,p),R(n,p),R(i,p),R(a,p),R(s,p),R(w,p),R(d,p),R(C,p)}}}function te(o){let t,e;const n=[o[0],ft];let u={$$slots:{default:[Yt]},$$scope:{ctx:o}};for(let i=0;i<n.length;i+=1)u=tt(u,n[i]);return t=new $t({props:u}),{c(){A(t.$$.fragment)},l(i){b(t.$$.fragment,i)},m(i,l){x(t,i,l),e=!0},p(i,[l]){const a=l&1?wt(n,[l&1&&ut(i[0]),l&0&&ut(ft)]):{};l&2&&(a.$$scope={dirty:l,ctx:i}),t.$set(a)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){I(t.$$.fragment,i),e=!1},d(i){R(t,i)}}}const ft={title:"Reusing event listeners with Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function ee(o,t,e){return o.$$set=n=>{e(0,t=tt(tt({},t),lt(n)))},t=lt(t),[t]}class ue extends U{constructor(t){super(),S(this,t,ee,te,O,{})}}export{ue as default,ft as metadata};
