import{S as D,i as U,s as L,k as _,a as g,e as O,l as v,c as y,b as d,ac as N,Y,H as R,h as f,V as M,q as I,m as S,r as T,D as x,R as K,y as k,z as A,n as rt,A as h,g as b,d as C,B as E,J as P,K as ot,L as Z,M as F}from"./index.5815ca79.js";import{M as lt,P as V}from"./mdsvex-layout-notes.7536afaf.js";import{S as G}from"./ShowMany.2af9ac15.js";import{S as B}from"./Strong.b8abec16.js";function Q(u){let t,e;return{c(){t=_("div"),e=I("Secret unlocked!")},l(n){t=v(n,"DIV",{});var o=S(t);e=T(o,"Secret unlocked!"),o.forEach(f)},m(n,o){d(n,t,o),x(t,e)},d(n){n&&f(t)}}}function it(u){let t,e,n,o,l,c,i,s,m,p,a,$=u[0]&&Q();return{c(){t=_("input"),n=g(),o=_("hr"),l=g(),c=_("input"),s=g(),$&&$.c(),m=O()},l(r){t=v(r,"INPUT",{}),n=y(r),o=v(r,"HR",{}),l=y(r),c=v(r,"INPUT",{}),s=y(r),$&&$.l(r),m=O()},m(r,w){d(r,t,w),d(r,n,w),d(r,o,w),d(r,l,w),d(r,c,w),d(r,s,w),$&&$.m(r,w),d(r,m,w),p||(a=[N(e=u[1].call(null,t,{secret:X,callback:u[2]})),N(i=u[1].call(null,c,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:u[3]}))],p=!0)},p(r,[w]){e&&Y(e.update)&&w&1&&e.update.call(null,{secret:X,callback:r[2]}),i&&Y(i.update)&&w&1&&i.update.call(null,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:r[3]}),r[0]?$||($=Q(),$.c(),$.m(m.parentNode,m)):$&&($.d(1),$=null)},i:R,o:R,d(r){r&&f(t),r&&f(n),r&&f(o),r&&f(l),r&&f(c),r&&f(s),$&&$.d(r),r&&f(m),p=!1,M(a)}}}let X="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function st(u,t,e){let n=!1;function o(i,{secret:s,callback:m}){let p=[],a=null;function $(r){p.push(r.key),p.join(",")===s&&m(),a&&clearTimeout(a),a=setTimeout(()=>{a=null,p=[],e(0,n=!1)},2e3)}return i.addEventListener("keydown",$),{update(){},destroy(){i.removeEventListener("keydown",$)}}}return[n,o,()=>{e(0,n=!0)},()=>{e(0,n=!0)}]}class ct extends D{constructor(t){super(),U(this,t,st,it,L,{})}}function tt(u){let t,e;return{c(){t=_("div"),e=I("Secret unlocked!")},l(n){t=v(n,"DIV",{});var o=S(t);e=T(o,"Secret unlocked!"),o.forEach(f)},m(n,o){d(n,t,o),x(t,e)},d(n){n&&f(t)}}}function ut(u){let t,e,n,o,l,c,i,s,m,p=u[0]&&tt();return{c(){t=_("input"),e=g(),n=_("hr"),o=g(),l=_("input"),c=g(),p&&p.c(),i=O()},l(a){t=v(a,"INPUT",{}),e=y(a),n=v(a,"HR",{}),o=y(a),l=v(a,"INPUT",{}),c=y(a),p&&p.l(a),i=O()},m(a,$){d(a,t,$),d(a,e,$),d(a,n,$),d(a,o,$),d(a,l,$),d(a,c,$),p&&p.m(a,$),d(a,i,$),s||(m=[N(u[1].call(null,t,{secret:at})),K(t,"secretComboAchieved",u[2]),N(u[1].call(null,l,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown"})),K(l,"secretComboAchieved",u[3])],s=!0)},p(a,[$]){a[0]?p||(p=tt(),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i:R,o:R,d(a){a&&f(t),a&&f(e),a&&f(n),a&&f(o),a&&f(l),a&&f(c),p&&p.d(a),a&&f(i),s=!1,M(m)}}}let at="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function mt(u,t,e){let n=!1;function o(i,{secret:s}){let m=[],p=null;function a($){m.push($.key),m.join(",")===s&&i.dispatchEvent(new CustomEvent("secretComboAchieved")),p&&clearTimeout(p),p=setTimeout(()=>{p=null,m=[],e(0,n=!1)},2e3)}return i.addEventListener("keydown",a),{update(){},destroy(){i.removeEventListener("keydown",a)}}}return[n,o,()=>e(0,n=!0),()=>e(0,n=!0)]}class ft extends D{constructor(t){super(),U(this,t,mt,ut,L,{})}}function pt(u){let t,e,n,o,l,c,i;return n=new ct({}),c=new ft({}),{c(){t=_("div"),e=_("div"),k(n.$$.fragment),o=g(),l=_("div"),k(c.$$.fragment),this.h()},l(s){t=v(s,"DIV",{class:!0});var m=S(t);e=v(m,"DIV",{});var p=S(e);A(n.$$.fragment,p),p.forEach(f),o=y(m),l=v(m,"DIV",{});var a=S(l);A(c.$$.fragment,a),a.forEach(f),m.forEach(f),this.h()},h(){rt(t,"class","uno-q0jo9l")},m(s,m){d(s,t,m),x(t,e),h(n,e,null),x(t,o),x(t,l),h(c,l,null),i=!0},p:R,i(s){i||(b(n.$$.fragment,s),b(c.$$.fragment,s),i=!0)},o(s){C(n.$$.fragment,s),C(c.$$.fragment,s),i=!1},d(s){s&&f(t),E(n),E(c)}}}class H extends D{constructor(t){super(),U(this,t,null,pt,L,{})}}const dt=`<script>\r
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
`;function $t(u){let t,e,n,o;return{c(){t=_("button"),e=I("Click me")},l(l){t=v(l,"BUTTON",{});var c=S(t);e=T(c,"Click me"),c.forEach(f)},m(l,c){d(l,t,c),x(t,e),n||(o=K(t,"click",u[0]),n=!0)},p:R,i:R,o:R,d(l){l&&f(t),n=!1,o()}}}function wt(u){let t=0,e;function n(){++t===3&&console.log("tripleClick!"),e&&clearTimeout(e),e=setTimeout(()=>{e=null,t=0},800)}return[n]}class _t extends D{constructor(t){super(),U(this,t,wt,$t,L,{})}}function vt(u){let t,e,n,o,l,c,i;return{c(){t=_("button"),e=I("Click me"),n=g(),o=_("button"),l=I("Or me!")},l(s){t=v(s,"BUTTON",{});var m=S(t);e=T(m,"Click me"),m.forEach(f),n=y(s),o=v(s,"BUTTON",{});var p=S(o);l=T(p,"Or me!"),p.forEach(f)},m(s,m){d(s,t,m),x(t,e),d(s,n,m),d(s,o,m),x(o,l),c||(i=[N(et.call(null,t)),K(t,"tripleClick",u[0]),N(et.call(null,o)),K(o,"tripleClick",u[1])],c=!0)},p:R,i:R,o:R,d(s){s&&f(t),s&&f(n),s&&f(o),c=!1,M(i)}}}function et(u){let t=0,e;function n(){++t===3&&u.dispatchEvent(new CustomEvent("tripleClick")),e&&clearTimeout(e),e=setTimeout(()=>{e=null,t=0},800)}return u.addEventListener("click",n),{destroy(){u.removeEventListener("click",n)}}}function kt(u){return[()=>console.log("tripleClick!"),()=>console.log("tripleClick from the second button!")]}class At extends D{constructor(t){super(),U(this,t,kt,vt,L,{})}}function ht(u){let t,e,n,o,l,c,i;return n=new _t({}),c=new At({}),{c(){t=_("div"),e=_("div"),k(n.$$.fragment),o=g(),l=_("div"),k(c.$$.fragment),this.h()},l(s){t=v(s,"DIV",{class:!0});var m=S(t);e=v(m,"DIV",{});var p=S(e);A(n.$$.fragment,p),p.forEach(f),o=y(m),l=v(m,"DIV",{});var a=S(l);A(c.$$.fragment,a),a.forEach(f),m.forEach(f),this.h()},h(){rt(t,"class","uno-0ffybb")},m(s,m){d(s,t,m),x(t,e),h(n,e,null),x(t,o),x(t,l),h(c,l,null),i=!0},p:R,i(s){i||(b(n.$$.fragment,s),b(c.$$.fragment,s),i=!0)},o(s){C(n.$$.fragment,s),C(c.$$.fragment,s),i=!1},d(s){s&&f(t),E(n),E(c)}}}class j extends D{constructor(t){super(),U(this,t,null,ht,L,{})}}const bt=`<script>\r
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
`,Ct=`<script>\r
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
	}} \r
  />\r
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
`,Et=`<script>\r
	let count = 0;\r
	let timeoutId;\r
\r
	function onClick() {\r
		if (++count === 3) {\r
			console.log("tripleClick!");\r
		}\r
\r
		timeoutId && clearTimeout(timeoutId);\r
		timeoutId = setTimeout(() => {\r
			timeoutId = null;\r
			count = 0;\r
		}, 800);\r
	}\r
<\/script>\r
\r
<button on:click={onClick}>Click me</button>\r
`,gt=`<script>\r
	let unlocked = false;\r
	let SECRET = "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";\r
\r
	function onSecretComboAction(element, { secret }) {\r
		let keys = [];\r
		let timeoutId = null;\r
		function onKeydown(event) {\r
			keys.push(event.key);\r
\r
			if (keys.join(",") === secret) {\r
				element.dispatchEvent(new CustomEvent("secretComboAchieved"));\r
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
	}}\r
	on:secretComboAchieved={() => (unlocked = true)} />\r
\r
<hr />\r
\r
<input\r
	use:onSecretComboAction={{\r
		secret: "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",\r
	}}\r
	on:secretComboAchieved={() => (unlocked = true)} />\r
\r
{#if unlocked}\r
	<div>Secret unlocked!</div>\r
{/if}\r
`,yt=`<script>\r
	function tripleClickAction(element) {\r
		let count = 0;\r
		let timeoutId;\r
		function onClick() {\r
			if (++count === 3) {\r
				element.dispatchEvent(new CustomEvent("tripleClick"));\r
			}\r
\r
			timeoutId && clearTimeout(timeoutId);\r
			timeoutId = setTimeout(() => {\r
				timeoutId = null;\r
				count = 0;\r
			}, 800);\r
		}\r
		element.addEventListener("click", onClick);\r
		return {\r
			destroy() {\r
				element.removeEventListener("click", onClick);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<button use:tripleClickAction on:tripleClick={() => console.log("tripleClick!")}>Click me</button>\r
<button\r
	use:tripleClickAction\r
	on:tripleClick={() => console.log("tripleClick from the second button!")}>Or me!</button>\r
`;function It(u){let t;return{c(){t=I("How do we create events using actions? Here's an example:")},l(e){t=T(e,"How do we create events using actions? Here's an example:")},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function Tt(u){let t;return{c(){t=I("Another example here where we create an action and an event:")},l(e){t=T(e,"Another example here where we create an action and an event:")},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function Rt(u){let t;return{c(){t=I("same action")},l(e){t=T(e,"same action")},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function St(u){let t;return{c(){t=I("differing custom event implementations")},l(e){t=T(e,"differing custom event implementations")},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function xt(u){let t,e,n,o,l,c;return e=new B({props:{$$slots:{default:[Rt]},$$scope:{ctx:u}}}),o=new B({props:{$$slots:{default:[St]},$$scope:{ctx:u}}}),{c(){t=I("I added an extra button to make it more obvious that we can have several elements that use the "),k(e.$$.fragment),n=I(", with "),k(o.$$.fragment),l=I(", which could be pretty useful.")},l(i){t=T(i,"I added an extra button to make it more obvious that we can have several elements that use the "),A(e.$$.fragment,i),n=T(i,", with "),A(o.$$.fragment,i),l=T(i,", which could be pretty useful.")},m(i,s){d(i,t,s),h(e,i,s),d(i,n,s),h(o,i,s),d(i,l,s),c=!0},p(i,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:i}),e.$set(m);const p={};s&2&&(p.$$scope={dirty:s,ctx:i}),o.$set(p)},i(i){c||(b(e.$$.fragment,i),b(o.$$.fragment,i),c=!0)},o(i){C(e.$$.fragment,i),C(o.$$.fragment,i),c=!1},d(i){i&&f(t),E(e,i),i&&f(n),E(o,i),i&&f(l)}}}function Dt(u){let t;return{c(){t=I("not forget to remove the event listeners in destroy()!")},l(e){t=T(e,"not forget to remove the event listeners in destroy()!")},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function Ut(u){let t,e,n;return e=new B({props:{$$slots:{default:[Dt]},$$scope:{ctx:u}}}),{c(){t=I("One important thing is to "),k(e.$$.fragment)},l(o){t=T(o,"One important thing is to "),A(e.$$.fragment,o)},m(o,l){d(o,t,l),h(e,o,l),n=!0},p(o,l){const c={};l&2&&(c.$$scope={dirty:l,ctx:o}),e.$set(c)},i(o){n||(b(e.$$.fragment,o),n=!0)},o(o){C(e.$$.fragment,o),n=!1},d(o){o&&f(t),E(e,o)}}}function Lt(u){let t,e,n,o,l,c,i,s,m,p,a,$;return t=new V({props:{$$slots:{default:[It]},$$scope:{ctx:u}}}),n=new G({props:{name:[{name:"Example1",comp:H,raw:Ct,text:"This is before we added an action, we're using a callback."},{name:"Result1",comp:H,raw:gt,text:"We added an action using dispatchEvent()."},{name:"App",comp:H,raw:dt,text:"This is the wrapper that displays both of the components."}]}}),l=new V({props:{$$slots:{default:[Tt]},$$scope:{ctx:u}}}),i=new G({props:{name:[{name:"Example2",comp:j,raw:Et,text:"This is before we added an action."},{name:"Result2",comp:j,raw:yt,text:'Again, we added element.dispatchEvent(new CustomEvent("tripleClick")); which allows us to use on:tripleClick. Nice!'},{name:"App2",comp:j,raw:bt,text:"This is the wrapper that displays both of the components."}]}}),m=new V({props:{$$slots:{default:[xt]},$$scope:{ctx:u}}}),a=new V({props:{$$slots:{default:[Ut]},$$scope:{ctx:u}}}),{c(){k(t.$$.fragment),e=g(),k(n.$$.fragment),o=g(),k(l.$$.fragment),c=g(),k(i.$$.fragment),s=g(),k(m.$$.fragment),p=g(),k(a.$$.fragment)},l(r){A(t.$$.fragment,r),e=y(r),A(n.$$.fragment,r),o=y(r),A(l.$$.fragment,r),c=y(r),A(i.$$.fragment,r),s=y(r),A(m.$$.fragment,r),p=y(r),A(a.$$.fragment,r)},m(r,w){h(t,r,w),d(r,e,w),h(n,r,w),d(r,o,w),h(l,r,w),d(r,c,w),h(i,r,w),d(r,s,w),h(m,r,w),d(r,p,w),h(a,r,w),$=!0},p(r,w){const q={};w&2&&(q.$$scope={dirty:w,ctx:r}),t.$set(q);const z={};w&2&&(z.$$scope={dirty:w,ctx:r}),l.$set(z);const J={};w&2&&(J.$$scope={dirty:w,ctx:r}),m.$set(J);const W={};w&2&&(W.$$scope={dirty:w,ctx:r}),a.$set(W)},i(r){$||(b(t.$$.fragment,r),b(n.$$.fragment,r),b(l.$$.fragment,r),b(i.$$.fragment,r),b(m.$$.fragment,r),b(a.$$.fragment,r),$=!0)},o(r){C(t.$$.fragment,r),C(n.$$.fragment,r),C(l.$$.fragment,r),C(i.$$.fragment,r),C(m.$$.fragment,r),C(a.$$.fragment,r),$=!1},d(r){E(t,r),r&&f(e),E(n,r),r&&f(o),E(l,r),r&&f(c),E(i,r),r&&f(s),E(m,r),r&&f(p),E(a,r)}}}function Nt(u){let t,e;const n=[u[0],nt];let o={$$slots:{default:[Lt]},$$scope:{ctx:u}};for(let l=0;l<n.length;l+=1)o=P(o,n[l]);return t=new lt({props:o}),{c(){k(t.$$.fragment)},l(l){A(t.$$.fragment,l)},m(l,c){h(t,l,c),e=!0},p(l,[c]){const i=c&1?ot(n,[c&1&&Z(l[0]),c&0&&Z(nt)]):{};c&2&&(i.$$scope={dirty:c,ctx:l}),t.$set(i)},i(l){e||(b(t.$$.fragment,l),e=!0)},o(l){C(t.$$.fragment,l),e=!1},d(l){E(t,l)}}}const nt={title:"Creating events with Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function Kt(u,t,e){return u.$$set=n=>{e(0,t=P(P({},t),F(n)))},t=F(t),[t]}class Pt extends D{constructor(t){super(),U(this,t,Kt,Nt,L,{})}}export{Pt as default,nt as metadata};
