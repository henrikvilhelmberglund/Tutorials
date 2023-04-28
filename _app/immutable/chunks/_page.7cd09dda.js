import{S as N,i as L,s as P,k as $,a as E,l as _,c as k,b as m,R as H,H as A,h as f,V as B,ac as V,y as h,m as O,z as g,n as et,D as S,A as x,g as T,d as R,B as I,Y as K,w as M,q as U,e as J,r as D,u as mt,J as tt,K as dt,L as lt,M as ut}from"./index.5815ca79.js";import{M as wt,P as F}from"./mdsvex-layout-notes.7536afaf.js";import{S as z}from"./ShowMany.2af9ac15.js";import{S as $t}from"./Strong.b8abec16.js";function _t(o){let t,e,r,l,i,u,a;return{c(){t=$("input"),e=E(),r=$("input"),l=E(),i=$("input")},l(n){t=_(n,"INPUT",{}),e=k(n),r=_(n,"INPUT",{}),l=k(n),i=_(n,"INPUT",{})},m(n,s){m(n,t,s),m(n,e,s),m(n,r,s),m(n,l,s),m(n,i,s),u||(a=[H(t,"keydown",W),H(r,"keydown",W),H(i,"keydown",W)],u=!0)},p:A,i:A,o:A,d(n){n&&f(t),n&&f(e),n&&f(r),n&&f(l),n&&f(i),u=!1,B(a)}}}function W(o){o.key==="Escape"&&o.currentTarget.blur()}class vt extends N{constructor(t){super(),L(this,t,null,_t,P,{})}}function yt(o){let t,e,r,l,i,u,a;return{c(){t=$("input"),e=E(),r=$("input"),l=E(),i=$("input")},l(n){t=_(n,"INPUT",{}),e=k(n),r=_(n,"INPUT",{}),l=k(n),i=_(n,"INPUT",{})},m(n,s){m(n,t,s),m(n,e,s),m(n,r,s),m(n,l,s),m(n,i,s),u||(a=[V(Y.call(null,t)),V(Y.call(null,r)),V(Y.call(null,i))],u=!0)},p:A,i:A,o:A,d(n){n&&f(t),n&&f(e),n&&f(r),n&&f(l),n&&f(i),u=!1,B(a)}}}function Y(o){function t(e){e.key==="Escape"&&e.currentTarget.blur()}return o.addEventListener("keydown",t),{destroy(){o.removeEventListener("keydown",t)}}}class Et extends N{constructor(t){super(),L(this,t,null,yt,P,{})}}function kt(o){let t,e,r,l,i,u,a;return r=new vt({}),u=new Et({}),{c(){t=$("div"),e=$("div"),h(r.$$.fragment),l=E(),i=$("div"),h(u.$$.fragment),this.h()},l(n){t=_(n,"DIV",{class:!0});var s=O(t);e=_(s,"DIV",{});var c=O(e);g(r.$$.fragment,c),c.forEach(f),l=k(s),i=_(s,"DIV",{});var w=O(i);g(u.$$.fragment,w),w.forEach(f),s.forEach(f),this.h()},h(){et(t,"class","uno-em2aby")},m(n,s){m(n,t,s),S(t,e),x(r,e,null),S(t,l),S(t,i),x(u,i,null),a=!0},p:A,i(n){a||(T(r.$$.fragment,n),T(u.$$.fragment,n),a=!0)},o(n){R(r.$$.fragment,n),R(u.$$.fragment,n),a=!1},d(n){n&&f(t),I(r),I(u)}}}class Z extends N{constructor(t){super(),L(this,t,null,kt,P,{})}}const At=`<script>\r
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
`;function bt(o){let t,e,r,l,i,u,a;return{c(){t=$("input"),e=E(),r=$("input"),l=E(),i=$("input")},l(n){t=_(n,"INPUT",{}),e=k(n),r=_(n,"INPUT",{}),l=k(n),i=_(n,"INPUT",{})},m(n,s){m(n,t,s),o[3](t),m(n,e,s),m(n,r,s),o[4](r),m(n,l,s),m(n,i,s),o[5](i),u||(a=[H(t,"keydown",function(){K(j(o[1]))&&j(o[1]).apply(this,arguments)}),H(r,"keydown",function(){K(j(o[2]))&&j(o[2]).apply(this,arguments)}),H(i,"keydown",j())],u=!0)},p(n,[s]){o=n},i:A,o:A,d(n){n&&f(t),o[3](null),n&&f(e),n&&f(r),o[4](null),n&&f(l),n&&f(i),o[5](null),u=!1,B(a)}}}function j(o){return function(e){e.key==="Enter"&&(o?o.focus():e.currentTarget.blur())}}function ht(o,t,e){let r,l,i;function u(s){M[s?"unshift":"push"](()=>{r=s,e(0,r)})}function a(s){M[s?"unshift":"push"](()=>{l=s,e(1,l)})}function n(s){M[s?"unshift":"push"](()=>{i=s,e(2,i)})}return[r,l,i,u,a,n]}class gt extends N{constructor(t){super(),L(this,t,ht,bt,P,{})}}function xt(o){let t,e,r,l,i,u,a,n,s;return{c(){t=$("input"),r=E(),l=$("input"),u=E(),a=$("input")},l(c){t=_(c,"INPUT",{}),r=k(c),l=_(c,"INPUT",{}),u=k(c),a=_(c,"INPUT",{})},m(c,w){m(c,t,w),o[3](t),m(c,r,w),m(c,l,w),o[4](l),m(c,u,w),m(c,a,w),o[5](a),n||(s=[V(e=G.call(null,t,o[1])),V(i=G.call(null,l,o[2])),V(G.call(null,a))],n=!0)},p(c,[w]){e&&K(e.update)&&w&2&&e.update.call(null,c[1]),i&&K(i.update)&&w&4&&i.update.call(null,c[2])},i:A,o:A,d(c){c&&f(t),o[3](null),c&&f(r),c&&f(l),o[4](null),c&&f(u),c&&f(a),o[5](null),n=!1,B(s)}}}function G(o,t){function e(r){r.key==="Enter"&&(t?t.focus():r.currentTarget.blur())}return o.addEventListener("keydown",e),{update(r){t=r},destroy(){o.removeEventListener("keydown",e)}}}function Tt(o,t,e){let r,l,i;function u(s){M[s?"unshift":"push"](()=>{r=s,e(0,r)})}function a(s){M[s?"unshift":"push"](()=>{l=s,e(1,l)})}function n(s){M[s?"unshift":"push"](()=>{i=s,e(2,i)})}return[r,l,i,u,a,n]}class Rt extends N{constructor(t){super(),L(this,t,Tt,xt,P,{})}}function It(o){let t,e,r,l,i,u,a;return r=new gt({}),u=new Rt({}),{c(){t=$("div"),e=$("div"),h(r.$$.fragment),l=E(),i=$("div"),h(u.$$.fragment),this.h()},l(n){t=_(n,"DIV",{class:!0});var s=O(t);e=_(s,"DIV",{});var c=O(e);g(r.$$.fragment,c),c.forEach(f),l=k(s),i=_(s,"DIV",{});var w=O(i);g(u.$$.fragment,w),w.forEach(f),s.forEach(f),this.h()},h(){et(t,"class","uno-29vsa6")},m(n,s){m(n,t,s),S(t,e),x(r,e,null),S(t,l),S(t,i),x(u,i,null),a=!0},p:A,i(n){a||(T(r.$$.fragment,n),T(u.$$.fragment,n),a=!0)},o(n){R(r.$$.fragment,n),R(u.$$.fragment,n),a=!1},d(n){n&&f(t),I(r),I(u)}}}class Q extends N{constructor(t){super(),L(this,t,null,It,P,{})}}const Ot=`<script>\r
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
`;function pt(o){let t,e;return{c(){t=$("div"),e=U("Secret unlocked!")},l(r){t=_(r,"DIV",{});var l=O(t);e=D(l,"Secret unlocked!"),l.forEach(f)},m(r,l){m(r,t,l),S(t,e)},d(r){r&&f(t)}}}function St(o){let t,e,r,l,i,u,a,n=o[0]&&pt();return{c(){t=U(o[1]),e=E(),r=$("input"),l=E(),n&&n.c(),i=J()},l(s){t=D(s,o[1]),e=k(s),r=_(s,"INPUT",{}),l=k(s),n&&n.l(s),i=J()},m(s,c){m(s,t,c),m(s,e,c),m(s,r,c),m(s,l,c),n&&n.m(s,c),m(s,i,c),u||(a=H(r,"keydown",o[2]),u=!0)},p(s,[c]){c&2&&mt(t,s[1]),s[0]?n||(n=pt(),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},i:A,o:A,d(s){s&&f(t),s&&f(e),s&&f(r),s&&f(l),n&&n.d(s),s&&f(i),u=!1,a()}}}let Ut="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function Dt(o,t,e){let r=!1,l=[],i=null;function u(a){l.push(a.key),l.join(",")===Ut&&e(0,r=!0),i&&clearTimeout(i),i=setTimeout(()=>{i=null,e(1,l=[]),e(0,r=!1)},2e3)}return[r,l,u]}class Nt extends N{constructor(t){super(),L(this,t,Dt,St,P,{})}}function ft(o){let t,e;return{c(){t=$("div"),e=U("Secret unlocked!")},l(r){t=_(r,"DIV",{});var l=O(t);e=D(l,"Secret unlocked!"),l.forEach(f)},m(r,l){m(r,t,l),S(t,e)},d(r){r&&f(t)}}}function Lt(o){let t,e,r,l,i,u,a,n,s,c,w,y=o[0]&&ft();return{c(){t=$("input"),r=E(),l=$("hr"),i=E(),u=$("input"),n=E(),y&&y.c(),s=J()},l(d){t=_(d,"INPUT",{}),r=k(d),l=_(d,"HR",{}),i=k(d),u=_(d,"INPUT",{}),n=k(d),y&&y.l(d),s=J()},m(d,b){m(d,t,b),m(d,r,b),m(d,l,b),m(d,i,b),m(d,u,b),m(d,n,b),y&&y.m(d,b),m(d,s,b),c||(w=[V(e=o[1].call(null,t,{secret:at,callback:o[2]})),V(a=o[1].call(null,u,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:o[3]}))],c=!0)},p(d,[b]){e&&K(e.update)&&b&1&&e.update.call(null,{secret:at,callback:d[2]}),a&&K(a.update)&&b&1&&a.update.call(null,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:d[3]}),d[0]?y||(y=ft(),y.c(),y.m(s.parentNode,s)):y&&(y.d(1),y=null)},i:A,o:A,d(d){d&&f(t),d&&f(r),d&&f(l),d&&f(i),d&&f(u),d&&f(n),y&&y.d(d),d&&f(s),c=!1,B(w)}}}let at="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function Pt(o,t,e){let r=!1;function l(a,{secret:n,callback:s}){let c=[],w=null;function y(d){c.push(d.key),c.join(",")===n&&s(),w&&clearTimeout(w),w=setTimeout(()=>{w=null,c=[],e(0,r=!1)},2e3)}return a.addEventListener("keydown",y),{update(){},destroy(){a.removeEventListener("keydown",y)}}}return[r,l,()=>{e(0,r=!0)},()=>{e(0,r=!0)}]}class Ct extends N{constructor(t){super(),L(this,t,Pt,Lt,P,{})}}function Vt(o){let t,e,r,l,i,u,a;return r=new Nt({}),u=new Ct({}),{c(){t=$("div"),e=$("div"),h(r.$$.fragment),l=E(),i=$("div"),h(u.$$.fragment),this.h()},l(n){t=_(n,"DIV",{class:!0});var s=O(t);e=_(s,"DIV",{});var c=O(e);g(r.$$.fragment,c),c.forEach(f),l=k(s),i=_(s,"DIV",{});var w=O(i);g(u.$$.fragment,w),w.forEach(f),s.forEach(f),this.h()},h(){et(t,"class","uno-br3ybv")},m(n,s){m(n,t,s),S(t,e),x(r,e,null),S(t,l),S(t,i),x(u,i,null),a=!0},p:A,i(n){a||(T(r.$$.fragment,n),T(u.$$.fragment,n),a=!0)},o(n){R(r.$$.fragment,n),R(u.$$.fragment,n),a=!1},d(n){n&&f(t),I(r),I(u)}}}class X extends N{constructor(t){super(),L(this,t,null,Vt,P,{})}}const Ht=`<script>\r
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
`,Mt=`<script>\r
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
`,Kt=`<script>\r
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
`,jt=`<script>\r
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
`,Bt=`<script>\r
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
`,qt=`<script>\r
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
`;function Jt(o){let t;return{c(){t=U("Here we're going to compare event listeners with actions. Meaning, we will rewrite the code using event listeners as code using actions instead.")},l(e){t=D(e,"Here we're going to compare event listeners with actions. Meaning, we will rewrite the code using event listeners as code using actions instead.")},m(e,r){m(e,t,r)},d(e){e&&f(t)}}}function zt(o){let t;return{c(){t=U("Next example:")},l(e){t=D(e,"Next example:")},m(e,r){m(e,t,r)},d(e){e&&f(t)}}}function Wt(o){let t;return{c(){t=U("Final example:")},l(e){t=D(e,"Final example:")},m(e,r){m(e,t,r)},d(e){e&&f(t)}}}function Yt(o){let t;return{c(){t=U("It depends")},l(e){t=D(e,"It depends")},m(e,r){m(e,t,r)},d(e){e&&f(t)}}}function Zt(o){let t,e,r,l;return e=new $t({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){t=U("So when should you use event listeners and when should you use actions? "),h(e.$$.fragment),r=U(". Preference of course but also what you're looking for, do you need multiple elements with the same function? Maybe use actions. Is it a one-off thing? Maybe event listeners.")},l(i){t=D(i,"So when should you use event listeners and when should you use actions? "),g(e.$$.fragment,i),r=D(i,". Preference of course but also what you're looking for, do you need multiple elements with the same function? Maybe use actions. Is it a one-off thing? Maybe event listeners.")},m(i,u){m(i,t,u),x(e,i,u),m(i,r,u),l=!0},p(i,u){const a={};u&2&&(a.$$scope={dirty:u,ctx:i}),e.$set(a)},i(i){l||(T(e.$$.fragment,i),l=!0)},o(i){R(e.$$.fragment,i),l=!1},d(i){i&&f(t),I(e,i),i&&f(r)}}}function Gt(o){let t;return{c(){t=U("Both methods work! 😊")},l(e){t=D(e,"Both methods work! 😊")},m(e,r){m(e,t,r)},d(e){e&&f(t)}}}function Qt(o){let t,e,r,l,i,u,a,n,s,c,w,y,d,b,C,q;return t=new F({props:{$$slots:{default:[Jt]},$$scope:{ctx:o}}}),r=new z({props:{name:[{name:"Example1",comp:Z,raw:Mt,text:"Here we're using currentTarget to avoid binding to multiple variables. Very vanilla JS!"},{name:"Result1",comp:Z,raw:jt,text:"Here it is using actions. It is a bit longer since we need to add the event listeners ourselves."},{name:"App",comp:Z,raw:At,text:"This is the wrapper that displays both of the components."}]}}),i=new F({props:{$$slots:{default:[zt]},$$scope:{ctx:o}}}),a=new z({props:{name:[{name:"Example2",comp:Q,raw:Kt,text:"Here we use a higher order function to create a new function. This could lead to lower performance since we do this whenever input1, input2 or input3 changes."},{name:"Result2",comp:Q,raw:Bt,text:"Here it is using actions. There's no need to create new functions when inputs change so it could have higher performance."},{name:"App2",comp:Q,raw:Ot,text:"This is the wrapper that displays both of the components."}]}}),s=new F({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),w=new z({props:{name:[{name:"Example3",comp:X,raw:Ft,text:"Here we wait for user input to display a div if the input was the same as our secret."},{name:"Result3",comp:X,raw:qt,text:"Here it is using actions. We can easily have multiple inputs with differing secrets."},{name:"App3",comp:X,raw:Ht,text:"This is the wrapper that displays both of the components."}]}}),d=new F({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),C=new F({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment),e=E(),h(r.$$.fragment),l=E(),h(i.$$.fragment),u=E(),h(a.$$.fragment),n=E(),h(s.$$.fragment),c=E(),h(w.$$.fragment),y=E(),h(d.$$.fragment),b=E(),h(C.$$.fragment)},l(p){g(t.$$.fragment,p),e=k(p),g(r.$$.fragment,p),l=k(p),g(i.$$.fragment,p),u=k(p),g(a.$$.fragment,p),n=k(p),g(s.$$.fragment,p),c=k(p),g(w.$$.fragment,p),y=k(p),g(d.$$.fragment,p),b=k(p),g(C.$$.fragment,p)},m(p,v){x(t,p,v),m(p,e,v),x(r,p,v),m(p,l,v),x(i,p,v),m(p,u,v),x(a,p,v),m(p,n,v),x(s,p,v),m(p,c,v),x(w,p,v),m(p,y,v),x(d,p,v),m(p,b,v),x(C,p,v),q=!0},p(p,v){const nt={};v&2&&(nt.$$scope={dirty:v,ctx:p}),t.$set(nt);const rt={};v&2&&(rt.$$scope={dirty:v,ctx:p}),i.$set(rt);const it={};v&2&&(it.$$scope={dirty:v,ctx:p}),s.$set(it);const st={};v&2&&(st.$$scope={dirty:v,ctx:p}),d.$set(st);const ot={};v&2&&(ot.$$scope={dirty:v,ctx:p}),C.$set(ot)},i(p){q||(T(t.$$.fragment,p),T(r.$$.fragment,p),T(i.$$.fragment,p),T(a.$$.fragment,p),T(s.$$.fragment,p),T(w.$$.fragment,p),T(d.$$.fragment,p),T(C.$$.fragment,p),q=!0)},o(p){R(t.$$.fragment,p),R(r.$$.fragment,p),R(i.$$.fragment,p),R(a.$$.fragment,p),R(s.$$.fragment,p),R(w.$$.fragment,p),R(d.$$.fragment,p),R(C.$$.fragment,p),q=!1},d(p){I(t,p),p&&f(e),I(r,p),p&&f(l),I(i,p),p&&f(u),I(a,p),p&&f(n),I(s,p),p&&f(c),I(w,p),p&&f(y),I(d,p),p&&f(b),I(C,p)}}}function Xt(o){let t,e;const r=[o[0],ct];let l={$$slots:{default:[Qt]},$$scope:{ctx:o}};for(let i=0;i<r.length;i+=1)l=tt(l,r[i]);return t=new wt({props:l}),{c(){h(t.$$.fragment)},l(i){g(t.$$.fragment,i)},m(i,u){x(t,i,u),e=!0},p(i,[u]){const a=u&1?dt(r,[u&1&&lt(i[0]),u&0&&lt(ct)]):{};u&2&&(a.$$scope={dirty:u,ctx:i}),t.$set(a)},i(i){e||(T(t.$$.fragment,i),e=!0)},o(i){R(t.$$.fragment,i),e=!1},d(i){I(t,i)}}}const ct={title:"Reusing event listeners with Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function te(o,t,e){return o.$$set=r=>{e(0,t=tt(tt({},t),ut(r)))},t=ut(t),[t]}class se extends N{constructor(t){super(),L(this,t,te,Xt,P,{})}}export{se as default,ct as metadata};
