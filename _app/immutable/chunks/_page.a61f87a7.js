import{s as R,f as _,a as E,e as H,g as v,c as x,i as d,ae as N,I as F,z as y,d as p,H as q,u as K,X as V,h as U,j as ot,v as L,C as B,D as G,l as I,m as T}from"./scheduler.a7cd560e.js";import{S as D,i as S,b as A,d as h,m as k,a as C,t as g,e as b}from"./index.396264e7.js";import{g as lt,a as J}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as st,P as j}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Q}from"./ShowMany.db7be1f3.js";import{S as M}from"./Strong.097578ae.js";function Y(c){let t,e="Secret unlocked!";return{c(){t=_("div"),t.textContent=e},l(n){t=v(n,"DIV",{["data-svelte-h"]:!0}),K(t)!=="svelte-1xpa9lc"&&(t.textContent=e)},m(n,o){d(n,t,o)},d(n){n&&p(t)}}}function it(c){let t,e,n,o,l,u,s,i,m,f,a,$=c[0]&&Y();return{c(){t=_("input"),n=E(),o=_("hr"),l=E(),u=_("input"),i=E(),$&&$.c(),m=H()},l(r){t=v(r,"INPUT",{}),n=x(r),o=v(r,"HR",{}),l=x(r),u=v(r,"INPUT",{}),i=x(r),$&&$.l(r),m=H()},m(r,w){d(r,t,w),d(r,n,w),d(r,o,w),d(r,l,w),d(r,u,w),d(r,i,w),$&&$.m(r,w),d(r,m,w),f||(a=[N(e=c[1].call(null,t,{secret:tt,callback:c[2]})),N(s=c[1].call(null,u,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:c[3]}))],f=!0)},p(r,[w]){e&&F(e.update)&&w&1&&e.update.call(null,{secret:tt,callback:r[2]}),s&&F(s.update)&&w&1&&s.update.call(null,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",callback:r[3]}),r[0]?$||($=Y(),$.c(),$.m(m.parentNode,m)):$&&($.d(1),$=null)},i:y,o:y,d(r){r&&(p(t),p(n),p(o),p(l),p(u),p(i),p(m)),$&&$.d(r),f=!1,q(a)}}}let tt="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function ct(c,t,e){let n=!1;function o(s,{secret:i,callback:m}){let f=[],a=null;function $(r){f.push(r.key),f.join(",")===i&&m(),a&&clearTimeout(a),a=setTimeout(()=>{a=null,f=[],e(0,n=!1)},2e3)}return s.addEventListener("keydown",$),{update(){},destroy(){s.removeEventListener("keydown",$)}}}return[n,o,()=>{e(0,n=!0)},()=>{e(0,n=!0)}]}class ut extends D{constructor(t){super(),S(this,t,ct,it,R,{})}}function et(c){let t,e="Secret unlocked!";return{c(){t=_("div"),t.textContent=e},l(n){t=v(n,"DIV",{["data-svelte-h"]:!0}),K(t)!=="svelte-1xpa9lc"&&(t.textContent=e)},m(n,o){d(n,t,o)},d(n){n&&p(t)}}}function at(c){let t,e,n,o,l,u,s,i,m,f=c[0]&&et();return{c(){t=_("input"),e=E(),n=_("hr"),o=E(),l=_("input"),u=E(),f&&f.c(),s=H()},l(a){t=v(a,"INPUT",{}),e=x(a),n=v(a,"HR",{}),o=x(a),l=v(a,"INPUT",{}),u=x(a),f&&f.l(a),s=H()},m(a,$){d(a,t,$),d(a,e,$),d(a,n,$),d(a,o,$),d(a,l,$),d(a,u,$),f&&f.m(a,$),d(a,s,$),i||(m=[N(c[1].call(null,t,{secret:mt})),V(t,"secretComboAchieved",c[2]),N(c[1].call(null,l,{secret:"ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown"})),V(l,"secretComboAchieved",c[3])],i=!0)},p(a,[$]){a[0]?f||(f=et(),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i:y,o:y,d(a){a&&(p(t),p(e),p(n),p(o),p(l),p(u),p(s)),f&&f.d(a),i=!1,q(m)}}}let mt="ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";function ft(c,t,e){let n=!1;function o(s,{secret:i}){let m=[],f=null;function a($){m.push($.key),m.join(",")===i&&s.dispatchEvent(new CustomEvent("secretComboAchieved")),f&&clearTimeout(f),f=setTimeout(()=>{f=null,m=[],e(0,n=!1)},2e3)}return s.addEventListener("keydown",a),{update(){},destroy(){s.removeEventListener("keydown",a)}}}return[n,o,()=>e(0,n=!0),()=>e(0,n=!0)]}class pt extends D{constructor(t){super(),S(this,t,ft,at,R,{})}}function dt(c){let t,e,n,o,l,u,s;return n=new ut({}),u=new pt({}),{c(){t=_("div"),e=_("div"),A(n.$$.fragment),o=E(),l=_("div"),A(u.$$.fragment),this.h()},l(i){t=v(i,"DIV",{class:!0});var m=U(t);e=v(m,"DIV",{});var f=U(e);h(n.$$.fragment,f),f.forEach(p),o=x(m),l=v(m,"DIV",{});var a=U(l);h(u.$$.fragment,a),a.forEach(p),m.forEach(p),this.h()},h(){ot(t,"class","spu-0s8r5f")},m(i,m){d(i,t,m),L(t,e),k(n,e,null),L(t,o),L(t,l),k(u,l,null),s=!0},p:y,i(i){s||(C(n.$$.fragment,i),C(u.$$.fragment,i),s=!0)},o(i){g(n.$$.fragment,i),g(u.$$.fragment,i),s=!1},d(i){i&&p(t),b(n),b(u)}}}class O extends D{constructor(t){super(),S(this,t,null,dt,R,{})}}const $t=`<script>\r
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
`;function wt(c){let t,e="Click me",n,o;return{c(){t=_("button"),t.textContent=e},l(l){t=v(l,"BUTTON",{["data-svelte-h"]:!0}),K(t)!=="svelte-c6qyxp"&&(t.textContent=e)},m(l,u){d(l,t,u),n||(o=V(t,"click",c[0]),n=!0)},p:y,i:y,o:y,d(l){l&&p(t),n=!1,o()}}}function _t(c){let t=0,e;function n(){++t===3&&console.log("tripleClick!"),e&&clearTimeout(e),e=setTimeout(()=>{e=null,t=0},800)}return[n]}class vt extends D{constructor(t){super(),S(this,t,_t,wt,R,{})}}function At(c){let t,e="Click me",n,o,l="Or me!",u,s;return{c(){t=_("button"),t.textContent=e,n=E(),o=_("button"),o.textContent=l},l(i){t=v(i,"BUTTON",{["data-svelte-h"]:!0}),K(t)!=="svelte-15vadic"&&(t.textContent=e),n=x(i),o=v(i,"BUTTON",{["data-svelte-h"]:!0}),K(o)!=="svelte-1a0atjd"&&(o.textContent=l)},m(i,m){d(i,t,m),d(i,n,m),d(i,o,m),u||(s=[N(nt.call(null,t)),V(t,"tripleClick",c[0]),N(nt.call(null,o)),V(o,"tripleClick",c[1])],u=!0)},p:y,i:y,o:y,d(i){i&&(p(t),p(n),p(o)),u=!1,q(s)}}}function nt(c){let t=0,e;function n(){++t===3&&c.dispatchEvent(new CustomEvent("tripleClick")),e&&clearTimeout(e),e=setTimeout(()=>{e=null,t=0},800)}return c.addEventListener("click",n),{destroy(){c.removeEventListener("click",n)}}}function ht(c){return[()=>console.log("tripleClick!"),()=>console.log("tripleClick from the second button!")]}class kt extends D{constructor(t){super(),S(this,t,ht,At,R,{})}}function Ct(c){let t,e,n,o,l,u,s;return n=new vt({}),u=new kt({}),{c(){t=_("div"),e=_("div"),A(n.$$.fragment),o=E(),l=_("div"),A(u.$$.fragment),this.h()},l(i){t=v(i,"DIV",{class:!0});var m=U(t);e=v(m,"DIV",{});var f=U(e);h(n.$$.fragment,f),f.forEach(p),o=x(m),l=v(m,"DIV",{});var a=U(l);h(u.$$.fragment,a),a.forEach(p),m.forEach(p),this.h()},h(){ot(t,"class","spu-fuza8h")},m(i,m){d(i,t,m),L(t,e),k(n,e,null),L(t,o),L(t,l),k(u,l,null),s=!0},p:y,i(i){s||(C(n.$$.fragment,i),C(u.$$.fragment,i),s=!0)},o(i){g(n.$$.fragment,i),g(u.$$.fragment,i),s=!1},d(i){i&&p(t),b(n),b(u)}}}class P extends D{constructor(t){super(),S(this,t,null,Ct,R,{})}}const gt=`<script>\r
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
`,bt=`<script>\r
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
`,xt=`<script>\r
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
`;function It(c){let t;return{c(){t=I("How do we create events using actions? Here's an example:")},l(e){t=T(e,"How do we create events using actions? Here's an example:")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Tt(c){let t;return{c(){t=I("Another example here where we create an action and an event:")},l(e){t=T(e,"Another example here where we create an action and an event:")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Rt(c){let t;return{c(){t=I("same action")},l(e){t=T(e,"same action")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Dt(c){let t;return{c(){t=I("differing custom event implementations")},l(e){t=T(e,"differing custom event implementations")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function St(c){let t,e,n,o,l,u;return e=new M({props:{$$slots:{default:[Rt]},$$scope:{ctx:c}}}),o=new M({props:{$$slots:{default:[Dt]},$$scope:{ctx:c}}}),{c(){t=I("I added an extra button to make it more obvious that we can have several elements that use the "),A(e.$$.fragment),n=I(", with "),A(o.$$.fragment),l=I(", which could be pretty useful.")},l(s){t=T(s,"I added an extra button to make it more obvious that we can have several elements that use the "),h(e.$$.fragment,s),n=T(s,", with "),h(o.$$.fragment,s),l=T(s,", which could be pretty useful.")},m(s,i){d(s,t,i),k(e,s,i),d(s,n,i),k(o,s,i),d(s,l,i),u=!0},p(s,i){const m={};i&2&&(m.$$scope={dirty:i,ctx:s}),e.$set(m);const f={};i&2&&(f.$$scope={dirty:i,ctx:s}),o.$set(f)},i(s){u||(C(e.$$.fragment,s),C(o.$$.fragment,s),u=!0)},o(s){g(e.$$.fragment,s),g(o.$$.fragment,s),u=!1},d(s){s&&(p(t),p(n),p(l)),b(e,s),b(o,s)}}}function Ut(c){let t;return{c(){t=I("not forget to remove the event listeners in destroy()!")},l(e){t=T(e,"not forget to remove the event listeners in destroy()!")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Lt(c){let t,e,n;return e=new M({props:{$$slots:{default:[Ut]},$$scope:{ctx:c}}}),{c(){t=I("One important thing is to "),A(e.$$.fragment)},l(o){t=T(o,"One important thing is to "),h(e.$$.fragment,o)},m(o,l){d(o,t,l),k(e,o,l),n=!0},p(o,l){const u={};l&2&&(u.$$scope={dirty:l,ctx:o}),e.$set(u)},i(o){n||(C(e.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),n=!1},d(o){o&&p(t),b(e,o)}}}function Nt(c){let t,e,n,o,l,u,s,i,m,f,a,$;return t=new j({props:{$$slots:{default:[It]},$$scope:{ctx:c}}}),n=new Q({props:{name:[{name:"Example1",comp:O,raw:bt,text:"This is before we added an action, we're using a callback."},{name:"Result1",comp:O,raw:xt,text:"We added an action using dispatchEvent()."},{name:"App",comp:O,raw:$t,text:"This is the wrapper that displays both of the components."}]}}),l=new j({props:{$$slots:{default:[Tt]},$$scope:{ctx:c}}}),s=new Q({props:{name:[{name:"Example2",comp:P,raw:Et,text:"This is before we added an action."},{name:"Result2",comp:P,raw:yt,text:'Again, we added element.dispatchEvent(new CustomEvent("tripleClick")); which allows us to use on:tripleClick. Nice!'},{name:"App2",comp:P,raw:gt,text:"This is the wrapper that displays both of the components."}]}}),m=new j({props:{$$slots:{default:[St]},$$scope:{ctx:c}}}),a=new j({props:{$$slots:{default:[Lt]},$$scope:{ctx:c}}}),{c(){A(t.$$.fragment),e=E(),A(n.$$.fragment),o=E(),A(l.$$.fragment),u=E(),A(s.$$.fragment),i=E(),A(m.$$.fragment),f=E(),A(a.$$.fragment)},l(r){h(t.$$.fragment,r),e=x(r),h(n.$$.fragment,r),o=x(r),h(l.$$.fragment,r),u=x(r),h(s.$$.fragment,r),i=x(r),h(m.$$.fragment,r),f=x(r),h(a.$$.fragment,r)},m(r,w){k(t,r,w),d(r,e,w),k(n,r,w),d(r,o,w),k(l,r,w),d(r,u,w),k(s,r,w),d(r,i,w),k(m,r,w),d(r,f,w),k(a,r,w),$=!0},p(r,w){const z={};w&2&&(z.$$scope={dirty:w,ctx:r}),t.$set(z);const W={};w&2&&(W.$$scope={dirty:w,ctx:r}),l.$set(W);const X={};w&2&&(X.$$scope={dirty:w,ctx:r}),m.$set(X);const Z={};w&2&&(Z.$$scope={dirty:w,ctx:r}),a.$set(Z)},i(r){$||(C(t.$$.fragment,r),C(n.$$.fragment,r),C(l.$$.fragment,r),C(s.$$.fragment,r),C(m.$$.fragment,r),C(a.$$.fragment,r),$=!0)},o(r){g(t.$$.fragment,r),g(n.$$.fragment,r),g(l.$$.fragment,r),g(s.$$.fragment,r),g(m.$$.fragment,r),g(a.$$.fragment,r),$=!1},d(r){r&&(p(e),p(o),p(u),p(i),p(f)),b(t,r),b(n,r),b(l,r),b(s,r),b(m,r),b(a,r)}}}function Kt(c){let t,e;const n=[c[0],rt];let o={$$slots:{default:[Nt]},$$scope:{ctx:c}};for(let l=0;l<n.length;l+=1)o=B(o,n[l]);return t=new st({props:o}),{c(){A(t.$$.fragment)},l(l){h(t.$$.fragment,l)},m(l,u){k(t,l,u),e=!0},p(l,[u]){const s=u&1?lt(n,[u&1&&J(l[0]),u&0&&J(rt)]):{};u&2&&(s.$$scope={dirty:u,ctx:l}),t.$set(s)},i(l){e||(C(t.$$.fragment,l),e=!0)},o(l){g(t.$$.fragment,l),e=!1},d(l){b(t,l)}}}const rt={title:"Creating events with Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function Vt(c,t,e){return c.$$set=n=>{e(0,t=B(B({},t),G(n)))},t=G(t),[t]}class qt extends D{constructor(t){super(),S(this,t,Vt,Kt,R,{})}}export{qt as default,rt as metadata};
