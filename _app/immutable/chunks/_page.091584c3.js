import{S as v,i as g,s as y,k as $,q as u,l as b,m as P,r as d,h as m,p,b as h,D as c,u as x,H as f,I as w,a as X,c as Y,n as V,a2 as _,T as H,Q as K,K as T,y as k,z as I,A as R,L as Q,M as j,g as z,d as E,B as D,N as q}from"./index.0b5cc0d7.js";import{M as Z,P as G}from"./mdsvex-layout-notes.c527e9b3.js";import{r as B,d as C,w as J}from"./index.153ae70b.js";import{s as W}from"./index.e4a7308b.js";import{S as tt}from"./ShowMany.5b53376e.js";class et extends v{constructor(t){super(),g(this,t,null,null,y,{})}}const nt=`<script>\r
	// this is here to prevent an angry red square when you load in the index page!\r
<\/script>\r
`,S=B({x:0,y:0},o=>{try{let t=function(r){o({x:r.clientX,y:r.clientY})};return document.body.addEventListener("mousemove",t),()=>{document.body.removeEventListener("mousemove",t)}}catch(t){console.log("this doesn't work in SSR"),console.log(t)}});function rt(o){let t,r=o[0].x+"",n,a,e=o[0].y+"",s;return{c(){t=$("div"),n=u(r),a=u(", "),s=u(e),this.h()},l(i){t=b(i,"DIV",{style:!0});var l=P(t);n=d(l,r),a=d(l,", "),s=d(l,e),l.forEach(m),this.h()},h(){p(t,"background","red"),p(t,"height","100px"),p(t,"width","100px"),p(t,"position","fixed"),p(t,"display","grid"),p(t,"place-items","center"),p(t,"color","white"),p(t,"top","-50px"),p(t,"left","-50px"),p(t,"z-index","100"),p(t,"transform","translate("+o[0].x+"px, "+o[0].y+"px)"),p(t,"pointer-events","none")},m(i,l){h(i,t,l),c(t,n),c(t,a),c(t,s)},p(i,[l]){l&1&&r!==(r=i[0].x+"")&&x(n,r),l&1&&e!==(e=i[0].y+"")&&x(s,e),l&1&&p(t,"transform","translate("+i[0].x+"px, "+i[0].y+"px)")},i:f,o:f,d(i){i&&m(t)}}}function ot(o,t,r){let n,a=S;return w(o,a,e=>r(0,n=e)),[n,a]}class F extends v{constructor(t){super(),g(this,t,ot,rt,y,{})}}const it=`<script>\r
	import mousePosition from "./mousePosition";\r
\r
	let position = mousePosition;\r
<\/script>\r
\r
<div\r
	style="\r
background: red;\r
height: 100px;\r
  width: 100px;\r
  position: fixed;\r
  display: grid;\r
  place-items: center;\r
  color: white;\r
  top: -50px;\r
  left: -50px;\r
  z-index: 100;\r
  transform: translate({$position.x}px, {$position.y}px);\r
  pointer-events: none;\r
  ">\r
	{$position.x}, {$position.y}\r
</div>\r
`;function st(o){let t=!1;return C(o,(r,n)=>{if(!t){n(r),t=!0;return}const a=setTimeout(()=>{n(r)},100);return()=>{clearTimeout(a)}})}function at(o){let t,r=o[0].x+"",n,a,e=o[0].y+"",s;return{c(){t=$("div"),n=u(r),a=u(", "),s=u(e),this.h()},l(i){t=b(i,"DIV",{style:!0});var l=P(t);n=d(l,r),a=d(l,", "),s=d(l,e),l.forEach(m),this.h()},h(){p(t,"background","red"),p(t,"height","100px"),p(t,"width","100px"),p(t,"position","fixed"),p(t,"display","grid"),p(t,"place-items","center"),p(t,"color","white"),p(t,"top","-50px"),p(t,"left","-50px"),p(t,"z-index","100"),p(t,"transform","translate("+o[0].x+"px, "+o[0].y+"px)"),p(t,"pointer-events","none")},m(i,l){h(i,t,l),c(t,n),c(t,a),c(t,s)},p(i,[l]){l&1&&r!==(r=i[0].x+"")&&x(n,r),l&1&&e!==(e=i[0].y+"")&&x(s,e),l&1&&p(t,"transform","translate("+i[0].x+"px, "+i[0].y+"px)")},i:f,o:f,d(i){i&&m(t)}}}function pt(o,t,r){let n,a=st(S);return w(o,a,e=>r(0,n=e)),[n,a]}class L extends v{constructor(t){super(),g(this,t,pt,at,y,{})}}const lt=`<script>\r
	import mousePosition from "./mousePosition";\r
	import debounce from "./debounce";\r
\r
	let position = debounce(mousePosition);\r
<\/script>\r
\r
<div\r
	style="\r
background: red;\r
height: 100px;\r
  width: 100px;\r
  position: fixed;\r
  display: grid;\r
  place-items: center;\r
  color: white;\r
  top: -50px;\r
  left: -50px;\r
  z-index: 100;\r
  transform: translate({$position.x}px, {$position.y}px);\r
  pointer-events: none;\r
  ">\r
	{$position.x}, {$position.y}\r
</div>\r
`;function ut(o){let t;return C(o,(r,n)=>{let a=Date.now();if(!t||a-t>100)n(r),t=a;else{const e=setTimeout(()=>{n(r)},100);return()=>clearTimeout(e)}})}function dt(o){let t,r=o[0].x+"",n,a,e=o[0].y+"",s;return{c(){t=$("div"),n=u(r),a=u(", "),s=u(e),this.h()},l(i){t=b(i,"DIV",{style:!0});var l=P(t);n=d(l,r),a=d(l,", "),s=d(l,e),l.forEach(m),this.h()},h(){p(t,"background","red"),p(t,"height","100px"),p(t,"width","100px"),p(t,"position","fixed"),p(t,"display","grid"),p(t,"place-items","center"),p(t,"color","white"),p(t,"top","-50px"),p(t,"left","-50px"),p(t,"z-index","100"),p(t,"transform","translate("+o[0].x+"px, "+o[0].y+"px)"),p(t,"pointer-events","none")},m(i,l){h(i,t,l),c(t,n),c(t,a),c(t,s)},p(i,[l]){l&1&&r!==(r=i[0].x+"")&&x(n,r),l&1&&e!==(e=i[0].y+"")&&x(s,e),l&1&&p(t,"transform","translate("+i[0].x+"px, "+i[0].y+"px)")},i:f,o:f,d(i){i&&m(t)}}}function mt(o,t,r){let n,a=ut(S);return w(o,a,e=>r(0,n=e)),[n,a]}class M extends v{constructor(t){super(),g(this,t,mt,dt,y,{})}}const ct=`<script>\r
	import mousePosition from "./mousePosition";\r
	import throttle from "./throttle";\r
\r
	let position = throttle(mousePosition);\r
<\/script>\r
\r
<div\r
	style="\r
background: red;\r
height: 100px;\r
  width: 100px;\r
  position: fixed;\r
  display: grid;\r
  place-items: center;\r
  color: white;\r
  top: -50px;\r
  left: -50px;\r
  z-index: 100;\r
  transform: translate({$position.x}px, {$position.y}px);\r
  pointer-events: none;\r
  ">\r
	{$position.x}, {$position.y}\r
</div>\r
`;function ft(o){return{subscribe:o.subscribe,set(){throw new Error("Unable to set the value of a readonly store")}}}function ht(o){let t,r,n,a,e;return{c(){t=$("input"),r=X(),n=$("input"),this.h()},l(s){t=b(s,"INPUT",{type:!0}),r=Y(s),n=b(s,"INPUT",{type:!0}),this.h()},h(){V(t,"type","text"),V(n,"type","text")},m(s,i){h(s,t,i),_(t,o[0]),h(s,r,i),h(s,n,i),_(n,o[1]),a||(e=[H(t,"input",o[4]),H(n,"input",o[5])],a=!0)},p(s,[i]){i&1&&t.value!==s[0]&&_(t,s[0]),i&2&&n.value!==s[1]&&_(n,s[1])},i:f,o:f,d(s){s&&m(t),s&&m(r),s&&m(n),a=!1,K(e)}}}function xt(o,t,r){let n,a,e=J("");w(o,e,A=>r(0,n=A));let s=ft(e);w(o,s,A=>r(1,a=A));function i(){n=this.value,e.set(n)}function l(){a=this.value,s.set(a)}return[n,a,e,s,i,l]}class O extends v{constructor(t){super(),g(this,t,xt,ht,y,{})}}const vt=`<script>\r
	import mousePosition from "./mousePosition";\r
	import readonly from "./readonly";\r
	import { writable } from "svelte/store";\r
\r
	let value = writable("");\r
	let readOnlyValue = readonly(value);\r
<\/script>\r
\r
<input bind:value={$value} type="text" />\r
<input bind:value={$readOnlyValue} type="text" />\r
`;function gt(o){const t=W(void 0,{stiffness:.2,damping:.1});return B(void 0,r=>{let n=o.subscribe(t.set),a=t.subscribe(r);return()=>{n(),a()}})}function yt(o){let t,r=o[0].x+"",n,a,e=o[0].y+"",s;return{c(){t=$("div"),n=u(r),a=u(", "),s=u(e),this.h()},l(i){t=b(i,"DIV",{style:!0});var l=P(t);n=d(l,r),a=d(l,", "),s=d(l,e),l.forEach(m),this.h()},h(){p(t,"background","red"),p(t,"height","100px"),p(t,"width","100px"),p(t,"position","fixed"),p(t,"display","grid"),p(t,"place-items","center"),p(t,"color","white"),p(t,"top","-50px"),p(t,"left","-50px"),p(t,"z-index","100"),p(t,"transform","translate("+o[0].x+"px, "+o[0].y+"px)"),p(t,"pointer-events","none")},m(i,l){h(i,t,l),c(t,n),c(t,a),c(t,s)},p(i,[l]){l&1&&r!==(r=i[0].x+"")&&x(n,r),l&1&&e!==(e=i[0].y+"")&&x(s,e),l&1&&p(t,"transform","translate("+i[0].x+"px, "+i[0].y+"px)")},i:f,o:f,d(i){i&&m(t)}}}function $t(o,t,r){let n,a=gt(S);return w(o,a,e=>r(0,n=e)),[n,a]}class U extends v{constructor(t){super(),g(this,t,$t,yt,y,{})}}const bt=`<script>\r
	import mousePosition from "./mousePosition";\r
	import spring from "./spring";\r
\r
	let position = spring(mousePosition);\r
<\/script>\r
\r
<div\r
	style="\r
background: red;\r
height: 100px;\r
  width: 100px;\r
  position: fixed;\r
  display: grid;\r
  place-items: center;\r
  color: white;\r
  top: -50px;\r
  left: -50px;\r
  z-index: 100;\r
  transform: translate({$position.x}px, {$position.y}px);\r
  pointer-events: none;\r
  ">\r
	{$position.x}, {$position.y}\r
</div>\r
`,wt=`import { readable } from "svelte/store";\r
\r
export default readable({ x: 0, y: 0 }, (set) => {\r
	try {\r
		document.body.addEventListener("mousemove", move);\r
\r
		function move(event) {\r
			set({\r
				x: event.clientX,\r
				y: event.clientY,\r
			});\r
		}\r
\r
		return () => {\r
			document.body.removeEventListener("mousemove", move);\r
		};\r
	} catch (error) {\r
		console.log("this doesn't work in SSR");\r
		console.log(error);\r
	}\r
});\r
`,_t=`import { derived } from "svelte/store";\r
\r
export default function debounce(store) {\r
	let initialized = false;\r
	return derived(store, ($value, set) => {\r
		if (!initialized) {\r
			set($value);\r
			initialized = true;\r
			return;\r
		}\r
		const timeout = setTimeout(() => {\r
			set($value);\r
		}, 100);\r
\r
		return () => {\r
			clearTimeout(timeout);\r
		};\r
	});\r
}\r
`,Pt=`import { derived } from "svelte/store";\r
export default function (store) {\r
	let lastTime;\r
	return derived(store, (value, set) => {\r
		let now = Date.now();\r
		if (!lastTime || now - lastTime > 100) {\r
			set(value);\r
			lastTime = now;\r
		} else {\r
			const timeoutId = setTimeout(() => {\r
				set(value);\r
			}, 100);\r
			return () => clearTimeout(timeoutId);\r
		}\r
	});\r
}\r
`,St=`export default function readonly(store) {\r
	return {\r
		subscribe: store.subscribe,\r
		set() {\r
			throw new Error("Unable to set the value of a readonly store");\r
		},\r
	};\r
}\r
`,At=`import { spring } from "svelte/motion";\r
import { readable } from "svelte/store";\r
\r
export default function (store) {\r
	const springStore = spring(undefined, {\r
		stiffness: 0.2,\r
		damping: 0.1,\r
	});\r
\r
	return readable(undefined, (set) => {\r
		let unsubsubcribeFromStore = store.subscribe(springStore.set);\r
		let unsubscribeFromSpring = springStore.subscribe(set);\r
		return () => {\r
			unsubsubcribeFromStore();\r
			unsubscribeFromSpring();\r
		};\r
	});\r
}\r
`;function Tt(o){let t;return{c(){t=u('In functional programming there is something called "higher order functions" which are functions that take in a function and return a new enhanced function.')},l(r){t=d(r,'In functional programming there is something called "higher order functions" which are functions that take in a function and return a new enhanced function.')},m(r,n){h(r,t,n)},d(r){r&&m(t)}}}function kt(o){let t,r,n,a;return t=new G({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),n=new tt({props:{name:[{name:"AppInit",comp:et,raw:nt,text:"This is here to prevent you from seeing an angry red square when loading the index. Select the next one to see the first example!"},{name:"App",comp:F,raw:it,text:"Here we have a red square that follows our mouse cursor using a custom store."},{name:"mousePosition.js",comp:F,raw:wt,text:""},{name:"App2",comp:L,raw:lt,text:"Here we use a higher order store debounce that debounces our red square."},{name:"debounce.js",comp:L,raw:_t,text:""},{name:"App3",comp:M,raw:ct,text:"Here we have a throttled store that only updates so often."},{name:"throttle.js",comp:M,raw:Pt,text:""},{name:"App4",comp:O,raw:vt,text:"Here we have a readonly store that doesn't allow you to change the value (second input field)."},{name:"readonly.js",comp:O,raw:St,text:""},{name:"App5",comp:U,raw:bt,text:"Here we have a higher order spring store that makes our red box springy."},{name:"spring.js",comp:U,raw:At,text:""}]}}),{c(){k(t.$$.fragment),r=X(),k(n.$$.fragment)},l(e){I(t.$$.fragment,e),r=Y(e),I(n.$$.fragment,e)},m(e,s){R(t,e,s),h(e,r,s),R(n,e,s),a=!0},p(e,s){const i={};s&2&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){a||(z(t.$$.fragment,e),z(n.$$.fragment,e),a=!0)},o(e){E(t.$$.fragment,e),E(n.$$.fragment,e),a=!1},d(e){D(t,e),e&&m(r),D(n,e)}}}function It(o){let t,r;const n=[o[0],N];let a={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let e=0;e<n.length;e+=1)a=T(a,n[e]);return t=new Z({props:a}),{c(){k(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){R(t,e,s),r=!0},p(e,[s]){const i=s&1?Q(n,[s&1&&j(e[0]),s&0&&j(N)]):{};s&2&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i(e){r||(z(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){D(t,e)}}}const N={title:"Higher order store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-27T00:00:00.000Z",layout:"notes"};function Rt(o,t,r){return o.$$set=n=>{r(0,t=T(T({},t),q(n)))},t=q(t),[t]}class jt extends v{constructor(t){super(),g(this,t,Rt,It,y,{})}}export{jt as default,N as metadata};