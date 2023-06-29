import{s as h,f as _,l as u,g as d,h as v,m as f,d as a,i as p,v as w,n as b,z as m,o as g,A as S,C as M,D as j,a as H,c as N}from"./scheduler.a7cd560e.js";import{S as $,i as k,b as C,d as x,m as y,a as I,t as A,e as D}from"./index.396264e7.js";import{g as Z,a as O}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as G,P as W}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as R}from"./index.5e192797.js";import{S as J}from"./ShowMany.db7be1f3.js";let T=class{constructor(){this.time=Date.now(),this.subscribers=[]}tick(){this.time=Date.now(),this.subscribers.forEach(t=>{t(this)})}subscribe(t){return t(this),this.subscribers.push(t),()=>{this.subscribers.splice(this.subscribers.indexOf(t))}}};function K(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=v(t);n=f(r,s[0]),r.forEach(a)},m(e,r){p(e,t,r),w(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&a(t)}}}function L(s,t,n){const e=new T;g(()=>{let o=setInterval(()=>{e.tick()},1e3);return()=>clearInterval(o)});let r;return s.$$.update=()=>{s.$$.dirty&1&&(n(0,r=e.time),console.log("time",r))},[r]}class Q extends ${constructor(t){super(),k(this,t,L,K,h,{})}}const V=`<script>\r
	import { onMount } from "svelte";\r
	import Clock from "./clock";\r
\r
	const clock = new Clock();\r
\r
	onMount(() => {\r
		let interval = setInterval(() => {\r
			clock.tick();\r
		}, 1000);\r
		return () => clearInterval(interval);\r
	});\r
\r
	let time;\r
\r
	$: {\r
		time = clock.time;\r
		console.log("time", time);\r
	}\r
<\/script>\r
\r
<p>{time}</p>\r
`;function X(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=v(t);n=f(r,s[0]),r.forEach(a)},m(e,r){p(e,t,r),w(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&a(t)}}}function Y(s,t,n){let e;const r=new T;S(s,r,c=>n(2,e=c)),g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});let o;return s.$$.update=()=>{s.$$.dirty&5&&(n(0,o=e.time),console.log("time",o))},[o,r,e]}class B extends ${constructor(t){super(),k(this,t,Y,X,h,{})}}const tt=`<script>\r
	import { onMount } from "svelte";\r
	import Clock from "./clock";\r
\r
	const clock = new Clock();\r
\r
	onMount(() => {\r
		let interval = setInterval(() => {\r
			clock.tick();\r
		}, 1000);\r
		return () => clearInterval(interval);\r
	});\r
\r
	let time;\r
\r
	$: {\r
		time = $clock.time;\r
		console.log("time", time);\r
	}\r
<\/script>\r
\r
<p>{time}</p>`;let et=class{constructor(){this.time=Date.now(),this._store=R(this)}tick(){this.time=Date.now(),this._store.set(this)}subscribe(t){return this._store.subscribe(t)}};function rt(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=v(t);n=f(r,s[0]),r.forEach(a)},m(e,r){p(e,t,r),w(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&a(t)}}}function nt(s,t,n){let e;const r=new et;S(s,r,c=>n(2,e=c)),g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});let o;return s.$$.update=()=>{s.$$.dirty&5&&(n(0,o=e.time),console.log("time",o))},[o,r,e]}class U extends ${constructor(t){super(),k(this,t,nt,rt,h,{})}}const st=`<script>\r
	import { onMount } from "svelte";\r
	import Clock2 from "./clock2";\r
\r
	const clock = new Clock2();\r
\r
	onMount(() => {\r
		let interval = setInterval(() => {\r
			clock.tick();\r
		}, 1000);\r
		return () => clearInterval(interval);\r
	});\r
\r
	let time;\r
\r
	$: {\r
		time = $clock.time;\r
		console.log("time", time);\r
	}\r
<\/script>\r
\r
<p>{time}</p>\r
`;let ot=class{constructor(){this.time=R(Date.now())}tick(){this.time.set(Date.now())}};function it(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=v(t);n=f(r,s[0]),r.forEach(a)},m(e,r){p(e,t,r),w(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&a(t)}}}function ct(s,t,n){let e;const r=new ot;g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});const o=r.time;return S(s,o,c=>n(0,e=c)),s.$$.update=()=>{s.$$.dirty&1&&console.log(e)},[e,o]}class q extends ${constructor(t){super(),k(this,t,ct,it,h,{})}}const at=`<script>\r
	import { onMount } from "svelte";\r
	import Clock3 from "./clock3";\r
\r
	const clock = new Clock3();\r
\r
	onMount(() => {\r
		let interval = setInterval(() => {\r
			clock.tick();\r
		}, 1000);\r
		return () => clearInterval(interval);\r
	});\r
\r
	let time;\r
\r
	const timeStore = clock.time;\r
	$: console.log($timeStore);\r
<\/script>\r
\r
<p>{$timeStore}</p>\r
`;class lt{constructor(){this.time=Date.now(),this._time$}tick(){this.time=Date.now(),this._time$!==void 0&&this._time$.set(this.time)}get time$(){return this._time$===void 0&&(this._time$=R(this.time)),this._time$}}function mt(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=v(t);n=f(r,s[0]),r.forEach(a)},m(e,r){p(e,t,r),w(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&a(t)}}}function pt(s,t,n){let e;const r=new lt;g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)}),console.log("time primitive",r.time);const o=r.time$;return S(s,o,c=>n(0,e=c)),s.$$.update=()=>{s.$$.dirty&1&&console.log("time:",e)},[e,o]}class z extends ${constructor(t){super(),k(this,t,pt,mt,h,{})}}const ut=`<script>\r
	import { onMount } from "svelte";\r
	import Clock4 from "./clock4";\r
\r
	const clock = new Clock4();\r
\r
	onMount(() => {\r
		let interval = setInterval(() => {\r
			clock.tick();\r
		}, 1000);\r
		return () => clearInterval(interval);\r
	});\r
\r
	console.log("time primitive", clock.time);\r
	const timeStore = clock.time$;\r
	$: console.log("time:", $timeStore);\r
<\/script>\r
\r
<p>{$timeStore}</p>\r
`,ft=`class Clock {\r
	constructor() {\r
		this.time = Date.now();\r
		this.subscribers = [];\r
	}\r
\r
	tick() {\r
		this.time = Date.now();\r
		this.subscribers.forEach((subscriber) => {\r
			subscriber(this);\r
		});\r
	}\r
\r
	subscribe(subscriber) {\r
		subscriber(this);\r
		this.subscribers.push(subscriber);\r
		return () => {\r
			this.subscribers.splice(this.subscribers.indexOf(subscriber));\r
		};\r
	}\r
}\r
\r
export default Clock;\r
`,ht=`import { writable } from "svelte/store";\r
\r
class Clock {\r
	constructor() {\r
		this.time = Date.now();\r
		this._store = writable(this);\r
	}\r
\r
	tick() {\r
		this.time = Date.now();\r
		this._store.set(this);\r
		// alternative\r
		// this._store.set( {time: this.time});\r
	}\r
\r
	subscribe(subscriber) {\r
		return this._store.subscribe(subscriber);\r
	}\r
}\r
\r
export default Clock;\r
`,$t=`import { writable } from "svelte/store";\r
\r
class Clock {\r
	constructor() {\r
		this.time = writable(Date.now());\r
	} \r
\r
	tick() {\r
		this.time.set(Date.now());\r
	}\r
}\r
\r
export default Clock;\r
`,kt=`import { writable } from "svelte/store";\r
import { get } from "svelte/store";\r
\r
class Clock {\r
	constructor() {\r
		this.time = Date.now();\r
		this._time$;\r
	}\r
\r
	tick() {\r
		this.time = Date.now();\r
		if (this._time$ !== undefined) {\r
			this._time$.set(this.time);\r
		}\r
	}\r
\r
	get time$() {\r
		if (this._time$ === undefined) {\r
			this._time$ = writable(this.time);\r
		}\r
		return this._time$;\r
	}\r
}\r
\r
export default Clock;\r
`;function _t(s){let t;return{c(){t=u("How can we turn a class property into a store? By default class properties do not give reactivity unless the class itself changes somehow.")},l(n){t=f(n,"How can we turn a class property into a store? By default class properties do not give reactivity unless the class itself changes somehow.")},m(n,e){p(n,t,e)},d(n){n&&a(t)}}}function dt(s){let t;return{c(){t=u("Which one is the best? Uh… I'll get back to you!")},l(n){t=f(n,"Which one is the best? Uh… I'll get back to you!")},m(n,e){p(n,t,e)},d(n){n&&a(t)}}}function vt(s){let t,n,e,r,o,c;return t=new W({props:{$$slots:{default:[_t]},$$scope:{ctx:s}}}),e=new J({props:{name:[{name:"NotAnApp",comp:Q,raw:V,text:"Here we can see that the console.log() doesn't trigger."},{name:"App",comp:B,raw:tt,text:"One method is to use create a store from the class and use $clock.time."},{name:"clock.js",comp:B,raw:ft,text:""},{name:"App2",comp:U,raw:st,text:"We can simplify this further by using a writable store."},{name:"clock2.js",comp:U,raw:ht,text:""},{name:"App3",comp:q,raw:at,text:"Another method is to use create a store from the property and use $timeStore."},{name:"clock3.js",comp:q,raw:$t,text:""},{name:"App4",comp:z,raw:ut,text:"Finally we can have a private store."},{name:"clock4.js",comp:z,raw:kt,text:""}]}}),o=new W({props:{$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment),n=H(),C(e.$$.fragment),r=H(),C(o.$$.fragment)},l(i){x(t.$$.fragment,i),n=N(i),x(e.$$.fragment,i),r=N(i),x(o.$$.fragment,i)},m(i,l){y(t,i,l),p(i,n,l),y(e,i,l),p(i,r,l),y(o,i,l),c=!0},p(i,l){const E={};l&2&&(E.$$scope={dirty:l,ctx:i}),t.$set(E);const P={};l&2&&(P.$$scope={dirty:l,ctx:i}),o.$set(P)},i(i){c||(I(t.$$.fragment,i),I(e.$$.fragment,i),I(o.$$.fragment,i),c=!0)},o(i){A(t.$$.fragment,i),A(e.$$.fragment,i),A(o.$$.fragment,i),c=!1},d(i){i&&(a(n),a(r)),D(t,i),D(e,i),D(o,i)}}}function wt(s){let t,n;const e=[s[0],F];let r={$$slots:{default:[vt]},$$scope:{ctx:s}};for(let o=0;o<e.length;o+=1)r=M(r,e[o]);return t=new G({props:r}),{c(){C(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,c){y(t,o,c),n=!0},p(o,[c]){const i=c&1?Z(e,[c&1&&O(o[0]),c&0&&O(F)]):{};c&2&&(i.$$scope={dirty:c,ctx:o}),t.$set(i)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){A(t.$$.fragment,o),n=!1},d(o){D(t,o)}}}const F={title:"Reactive class property using stores",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-28T00:00:00.000Z",layout:"notes"};function bt(s,t,n){return s.$$set=e=>{n(0,t=M(M({},t),j(e)))},t=j(t),[t]}class Rt extends ${constructor(t){super(),k(this,t,bt,wt,h,{})}}export{Rt as default,F as metadata};
