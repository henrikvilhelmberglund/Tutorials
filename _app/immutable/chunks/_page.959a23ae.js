import{S as h,i as $,s as k,k as _,q as u,l as d,m as w,r as f,h as l,b as p,D as v,u as b,H as m,o as g,I as M,J as S,y as C,z as x,A as y,K,L as j,g as I,d as A,B as D,M as H,a as B,c as N}from"./index.5815ca79.js";import{M as L,P as O}from"./mdsvex-layout-notes.7536afaf.js";import{w as R}from"./index.522bc5dc.js";import{S as T}from"./ShowMany.2af9ac15.js";let J=class{constructor(){this.time=Date.now(),this.subscribers=[]}tick(){this.time=Date.now(),this.subscribers.forEach(t=>{t(this)})}subscribe(t){return t(this),this.subscribers.push(t),()=>{this.subscribers.splice(this.subscribers.indexOf(t))}}};function Z(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=w(t);n=f(r,s[0]),r.forEach(l)},m(e,r){p(e,t,r),v(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&l(t)}}}function G(s,t,n){const e=new J;g(()=>{let o=setInterval(()=>{e.tick()},1e3);return()=>clearInterval(o)});let r;return s.$$.update=()=>{s.$$.dirty&1&&(n(0,r=e.time),console.log("time",r))},[r]}class Q extends h{constructor(t){super(),$(this,t,G,Z,k,{})}}const V=`<script>\r
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
`;function X(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=w(t);n=f(r,s[0]),r.forEach(l)},m(e,r){p(e,t,r),v(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&l(t)}}}function Y(s,t,n){let e;const r=new J;M(s,r,c=>n(2,e=c)),g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});let o;return s.$$.update=()=>{s.$$.dirty&5&&(n(0,o=e.time),console.log("time",o))},[o,r,e]}class W extends h{constructor(t){super(),$(this,t,Y,X,k,{})}}const tt=`<script>\r
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
<p>{time}</p>`;let et=class{constructor(){this.time=Date.now(),this._store=R(this)}tick(){this.time=Date.now(),this._store.set(this)}subscribe(t){return this._store.subscribe(t)}};function rt(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=w(t);n=f(r,s[0]),r.forEach(l)},m(e,r){p(e,t,r),v(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&l(t)}}}function nt(s,t,n){let e;const r=new et;M(s,r,c=>n(2,e=c)),g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});let o;return s.$$.update=()=>{s.$$.dirty&5&&(n(0,o=e.time),console.log("time",o))},[o,r,e]}class q extends h{constructor(t){super(),$(this,t,nt,rt,k,{})}}const st=`<script>\r
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
`;let ot=class{constructor(){this.time=R(Date.now())}tick(){this.time.set(Date.now())}};function it(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=w(t);n=f(r,s[0]),r.forEach(l)},m(e,r){p(e,t,r),v(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&l(t)}}}function ct(s,t,n){let e;const r=new ot;g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)});const o=r.time;return M(s,o,c=>n(0,e=c)),s.$$.update=()=>{s.$$.dirty&1&&console.log(e)},[e,o]}class U extends h{constructor(t){super(),$(this,t,ct,it,k,{})}}const lt=`<script>\r
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
`;class at{constructor(){this.time=Date.now(),this._time$}tick(){this.time=Date.now(),this._time$!==void 0&&this._time$.set(this.time)}get time$(){return this._time$===void 0&&(this._time$=R(this.time)),this._time$}}function mt(s){let t,n;return{c(){t=_("p"),n=u(s[0])},l(e){t=d(e,"P",{});var r=w(t);n=f(r,s[0]),r.forEach(l)},m(e,r){p(e,t,r),v(t,n)},p(e,[r]){r&1&&b(n,e[0])},i:m,o:m,d(e){e&&l(t)}}}function pt(s,t,n){let e;const r=new at;g(()=>{let c=setInterval(()=>{r.tick()},1e3);return()=>clearInterval(c)}),console.log("time primitive",r.time);const o=r.time$;return M(s,o,c=>n(0,e=c)),s.$$.update=()=>{s.$$.dirty&1&&console.log("time:",e)},[e,o]}class z extends h{constructor(t){super(),$(this,t,pt,mt,k,{})}}const ut=`<script>\r
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
`;function _t(s){let t;return{c(){t=u("How can we turn a class property into a store? By default class properties do not give reactivity unless the class itself changes somehow.")},l(n){t=f(n,"How can we turn a class property into a store? By default class properties do not give reactivity unless the class itself changes somehow.")},m(n,e){p(n,t,e)},d(n){n&&l(t)}}}function dt(s){let t;return{c(){t=u("Which one is the best? Uh… I'll get back to you!")},l(n){t=f(n,"Which one is the best? Uh… I'll get back to you!")},m(n,e){p(n,t,e)},d(n){n&&l(t)}}}function wt(s){let t,n,e,r,o,c;return t=new O({props:{$$slots:{default:[_t]},$$scope:{ctx:s}}}),e=new T({props:{name:[{name:"NotAnApp",comp:Q,raw:V,text:"Here we can see that the console.log() doesn't trigger."},{name:"App",comp:W,raw:tt,text:"One method is to use create a store from the class and use $clock.time."},{name:"clock.js",comp:W,raw:ft,text:""},{name:"App2",comp:q,raw:st,text:"We can simplify this further by using a writable store."},{name:"clock2.js",comp:q,raw:ht,text:""},{name:"App3",comp:U,raw:lt,text:"Another method is to use create a store from the property and use $timeStore."},{name:"clock3.js",comp:U,raw:$t,text:""},{name:"App4",comp:z,raw:ut,text:"Finally we can have a private store."},{name:"clock4.js",comp:z,raw:kt,text:""}]}}),o=new O({props:{$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment),n=B(),C(e.$$.fragment),r=B(),C(o.$$.fragment)},l(i){x(t.$$.fragment,i),n=N(i),x(e.$$.fragment,i),r=N(i),x(o.$$.fragment,i)},m(i,a){y(t,i,a),p(i,n,a),y(e,i,a),p(i,r,a),y(o,i,a),c=!0},p(i,a){const E={};a&2&&(E.$$scope={dirty:a,ctx:i}),t.$set(E);const P={};a&2&&(P.$$scope={dirty:a,ctx:i}),o.$set(P)},i(i){c||(I(t.$$.fragment,i),I(e.$$.fragment,i),I(o.$$.fragment,i),c=!0)},o(i){A(t.$$.fragment,i),A(e.$$.fragment,i),A(o.$$.fragment,i),c=!1},d(i){D(t,i),i&&l(n),D(e,i),i&&l(r),D(o,i)}}}function vt(s){let t,n;const e=[s[0],F];let r={$$slots:{default:[wt]},$$scope:{ctx:s}};for(let o=0;o<e.length;o+=1)r=S(r,e[o]);return t=new L({props:r}),{c(){C(t.$$.fragment)},l(o){x(t.$$.fragment,o)},m(o,c){y(t,o,c),n=!0},p(o,[c]){const i=c&1?K(e,[c&1&&j(o[0]),c&0&&j(F)]):{};c&2&&(i.$$scope={dirty:c,ctx:o}),t.$set(i)},i(o){n||(I(t.$$.fragment,o),n=!0)},o(o){A(t.$$.fragment,o),n=!1},d(o){D(t,o)}}}const F={title:"Reactive class property using stores",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-28T00:00:00.000Z",layout:"notes"};function bt(s,t,n){return s.$$set=e=>{n(0,t=S(S({},t),H(e)))},t=H(t),[t]}class Mt extends h{constructor(t){super(),$(this,t,bt,vt,k,{})}}export{Mt as default,F as metadata};
