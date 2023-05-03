import{S as rt,i as nt,s as ot,k as b,q as S,a as R,l as $,m as I,r as g,h,c as k,n as z,b as j,D as s,a2 as C,T as J,ao as W,u as q,H as F,Q as st,I as L,ar as at,an as it,W as It,X as Nt,K as pt,y as Q,z as X,A as Z,L as Ot,M as yt,g as G,d as Y,B as tt,N as mt}from"./index.0b5cc0d7.js";import{M as Tt,P as ut}from"./mdsvex-layout-notes.c527e9b3.js";import{w as et}from"./index.153ae70b.js";import{S as vt}from"./ShowMany.5b53376e.js";import{S as ct}from"./Strong.272c5f79.js";function At(o){const t=[];let e=-1;return{subscribe:o.subscribe,doAction(r){for(e++,t[e]=r;e<t.length-1;)t.pop();o.update(l=>t[e].apply(l))},undo(){e>=0&&(o.update(r=>t[e].reverse(r)),e--)},redo(){e<t.length-1&&(e++,o.update(r=>t[e].apply(r)))}}}function Ut(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N,O,U;return{c(){t=b("div"),e=b("button"),r=S("Undo"),l=R(),n=b("button"),a=S("Redo"),i=R(),p=b("input"),y=R(),f=b("button"),u=S("Add"),m=R(),c=b("p"),N=S(o[1]),this.h()},l(v){t=$(v,"DIV",{class:!0});var _=I(t);e=$(_,"BUTTON",{});var B=I(e);r=g(B,"Undo"),B.forEach(h),l=k(_),n=$(_,"BUTTON",{});var T=I(n);a=g(T,"Redo"),T.forEach(h),i=k(_),p=$(_,"INPUT",{type:!0}),y=k(_),f=$(_,"BUTTON",{});var A=I(f);u=g(A,"Add"),A.forEach(h),m=k(_),c=$(_,"P",{});var E=I(c);N=g(E,o[1]),E.forEach(h),_.forEach(h),this.h()},h(){z(p,"type","number"),z(t,"class","uno-sp992x")},m(v,_){j(v,t,_),s(t,e),s(e,r),s(t,l),s(t,n),s(n,a),s(t,i),s(t,p),C(p,o[0]),s(t,y),s(t,f),s(f,u),s(t,m),s(t,c),s(c,N),O||(U=[J(e,"click",o[3]),J(n,"click",o[4]),J(p,"input",o[5]),J(f,"click",o[6])],O=!0)},p(v,[_]){_&1&&W(p.value)!==v[0]&&C(p,v[0]),_&2&&q(N,v[1])},i:F,o:F,d(v){v&&h(t),O=!1,st(U)}}}function Et(o){return{apply(t){return t+o},reverse(t){return t-o}}}function Jt(o,t,e){let r;const l=et(0);let n=1;const a=At(l);L(o,a,u=>e(1,r=u));const i=()=>{a.undo()},p=()=>{a.redo()};function y(){n=W(this.value),e(0,n)}return[n,r,a,i,p,y,()=>{a.doAction(Et(n)),e(0,n=0)}]}class bt extends rt{constructor(t){super(),nt(this,t,Jt,Ut,ot,{})}}const xt=`<script>\r
	import { writable } from "svelte/store";\r
	import approach1 from "./approach1";\r
\r
	const store = writable(0);\r
	let value = 1;\r
\r
	// action creator\r
	function sum(value) {\r
		return {\r
			apply(_value) {\r
				return _value + value;\r
			},\r
			reverse(_value) {\r
				return _value - value;\r
			},\r
		};\r
	}\r
\r
	const undoRedoStore = approach1(store);\r
<\/script>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			// $undoRedoStore += value;\r
			undoRedoStore.doAction(sum(value));\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{$undoRedoStore}\r
	</p>\r
</div>\r
\r
<style>\r
</style>\r
`;function Bt(o){const t=[at(o)];let e=0;const r=()=>o.set(t[e]);return{subscribe:o.subscribe,set(l){for(e++,t[e]=l;e<t.length-1;)t.pop();r()},undo(){e>0&&(e--,r())},redo(){e<t.length-1&&(e++,r())}}}function Pt(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N,O,U;return{c(){t=b("div"),e=b("button"),r=S("Undo"),l=R(),n=b("button"),a=S("Redo"),i=R(),p=b("input"),y=R(),f=b("button"),u=S("Add"),m=R(),c=b("p"),N=S(o[1]),this.h()},l(v){t=$(v,"DIV",{class:!0});var _=I(t);e=$(_,"BUTTON",{});var B=I(e);r=g(B,"Undo"),B.forEach(h),l=k(_),n=$(_,"BUTTON",{});var T=I(n);a=g(T,"Redo"),T.forEach(h),i=k(_),p=$(_,"INPUT",{type:!0}),y=k(_),f=$(_,"BUTTON",{});var A=I(f);u=g(A,"Add"),A.forEach(h),m=k(_),c=$(_,"P",{});var E=I(c);N=g(E,o[1]),E.forEach(h),_.forEach(h),this.h()},h(){z(p,"type","number"),z(t,"class","uno-9til1z")},m(v,_){j(v,t,_),s(t,e),s(e,r),s(t,l),s(t,n),s(n,a),s(t,i),s(t,p),C(p,o[0]),s(t,y),s(t,f),s(f,u),s(t,m),s(t,c),s(c,N),O||(U=[J(e,"click",o[3]),J(n,"click",o[4]),J(p,"input",o[5]),J(f,"click",o[6])],O=!0)},p(v,[_]){_&1&&W(p.value)!==v[0]&&C(p,v[0]),_&2&&q(N,v[1])},i:F,o:F,d(v){v&&h(t),O=!1,st(U)}}}function jt(o,t,e){let r;const l=et(0);let n=1;const a=Bt(l);L(o,a,u=>e(1,r=u));const i=()=>{a.undo()},p=()=>{a.redo()};function y(){n=W(this.value),e(0,n)}return[n,r,a,i,p,y,()=>{it(a,r+=n,r),e(0,n=0)}]}class $t extends rt{constructor(t){super(),nt(this,t,jt,Pt,ot,{})}}const Vt=`<script>\r
	import { writable } from "svelte/store";\r
	import approach2 from "./approach2";\r
\r
	const store = writable(0);\r
	let value = 1;\r
\r
	const undoRedoStore = approach2(store);\r
<\/script>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			$undoRedoStore += value;\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{$undoRedoStore}\r
	</p>\r
</div>\r
\r
<style>\r
</style>\r
`;function Dt(o){const t=[at(o)],e=et(t);let r=0;const l=()=>o.set(t[r]);return{subscribe:o.subscribe,history:e,set(n){for(r++,t[r]=n,e.set(t);r<t.length-1;)t.pop();l()},undo(){r>0&&(r--,l())},redo(){r<t.length-1&&(r++,l())}}}function Ht(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N=JSON.stringify(o[1])+"",O,U,v=o[1].value+"",_,B,T,A=JSON.stringify(o[2])+"",E,D,M;return{c(){t=b("div"),e=b("button"),r=S("Undo"),l=R(),n=b("button"),a=S("Redo"),i=R(),p=b("input"),y=R(),f=b("button"),u=S("Add"),m=R(),c=b("p"),O=S(N),U=R(),_=S(v),B=R(),T=b("p"),E=S(A),this.h()},l(w){t=$(w,"DIV",{class:!0});var d=I(t);e=$(d,"BUTTON",{});var K=I(e);r=g(K,"Undo"),K.forEach(h),l=k(d),n=$(d,"BUTTON",{});var x=I(n);a=g(x,"Redo"),x.forEach(h),i=k(d),p=$(d,"INPUT",{type:!0}),y=k(d),f=$(d,"BUTTON",{});var V=I(f);u=g(V,"Add"),V.forEach(h),m=k(d),c=$(d,"P",{});var H=I(c);O=g(H,N),U=k(H),_=g(H,v),H.forEach(h),B=k(d),T=$(d,"P",{});var P=I(T);E=g(P,A),P.forEach(h),d.forEach(h),this.h()},h(){z(p,"type","number"),z(t,"class","uno-urg3ei")},m(w,d){j(w,t,d),s(t,e),s(e,r),s(t,l),s(t,n),s(n,a),s(t,i),s(t,p),C(p,o[0]),s(t,y),s(t,f),s(f,u),s(t,m),s(t,c),s(c,O),s(c,U),s(c,_),s(t,B),s(t,T),s(T,E),D||(M=[J(e,"click",o[5]),J(n,"click",o[6]),J(p,"input",o[7]),J(f,"click",o[8])],D=!0)},p(w,[d]){d&1&&W(p.value)!==w[0]&&C(p,w[0]),d&2&&N!==(N=JSON.stringify(w[1])+"")&&q(O,N),d&2&&v!==(v=w[1].value+"")&&q(_,v),d&4&&A!==(A=JSON.stringify(w[2])+"")&&q(E,A)},i:F,o:F,d(w){w&&h(t),D=!1,st(M)}}}function Mt(o,t,e){let r,l;const n=et({value:0});let a=1;const i=Dt(n);L(o,i,c=>e(1,r=c));const p=i.history;L(o,p,c=>e(2,l=c));const y=()=>{i.undo()},f=()=>{i.redo()};function u(){a=W(this.value),e(0,a)}return[a,r,l,i,p,y,f,u,()=>{it(i,r.value+=a,r),e(0,a=0)}]}class St extends rt{constructor(t){super(),nt(this,t,Mt,Ht,ot,{})}}const qt=`<script>\r
	import { writable } from "svelte/store";\r
	import approach3 from "./approach3";\r
\r
	const store = writable({ value: 0 });\r
	let value = 1;\r
\r
	const undoRedoStore = approach3(store);\r
	const history = undoRedoStore.history;\r
<\/script>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			$undoRedoStore.value += value;\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{JSON.stringify($undoRedoStore)}\r
		{$undoRedoStore.value}\r
	</p>\r
	<p>{JSON.stringify($history)}</p>\r
</div>\r
\r
<style>\r
</style>\r
`;function zt(o){const t=[n(at(o))],e=et(t);let r=0;const l=()=>o.set(n(t[r]));return{subscribe:o.subscribe,history:e,set(a){for(r++,t[r]=a,e.set(t);r<t.length-1;)t.pop();l()},undo(){r>0&&(r--,l())},redo(){r<t.length-1&&(r++,l())}};function n(a){return JSON.parse(JSON.stringify(a))}}function Ct(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N=JSON.stringify(o[1])+"",O,U,v=o[1].value+"",_,B,T,A=JSON.stringify(o[2])+"",E,D,M;return{c(){t=b("div"),e=b("button"),r=S("Undo"),l=R(),n=b("button"),a=S("Redo"),i=R(),p=b("input"),y=R(),f=b("button"),u=S("Add"),m=R(),c=b("p"),O=S(N),U=R(),_=S(v),B=R(),T=b("p"),E=S(A),this.h()},l(w){t=$(w,"DIV",{class:!0});var d=I(t);e=$(d,"BUTTON",{});var K=I(e);r=g(K,"Undo"),K.forEach(h),l=k(d),n=$(d,"BUTTON",{});var x=I(n);a=g(x,"Redo"),x.forEach(h),i=k(d),p=$(d,"INPUT",{type:!0}),y=k(d),f=$(d,"BUTTON",{});var V=I(f);u=g(V,"Add"),V.forEach(h),m=k(d),c=$(d,"P",{});var H=I(c);O=g(H,N),U=k(H),_=g(H,v),H.forEach(h),B=k(d),T=$(d,"P",{});var P=I(T);E=g(P,A),P.forEach(h),d.forEach(h),this.h()},h(){z(p,"type","number"),z(t,"class","uno-r2rnfx")},m(w,d){j(w,t,d),s(t,e),s(e,r),s(t,l),s(t,n),s(n,a),s(t,i),s(t,p),C(p,o[0]),s(t,y),s(t,f),s(f,u),s(t,m),s(t,c),s(c,O),s(c,U),s(c,_),s(t,B),s(t,T),s(T,E),D||(M=[J(e,"click",o[5]),J(n,"click",o[6]),J(p,"input",o[7]),J(f,"click",o[8])],D=!0)},p(w,[d]){d&1&&W(p.value)!==w[0]&&C(p,w[0]),d&2&&N!==(N=JSON.stringify(w[1])+"")&&q(O,N),d&2&&v!==(v=w[1].value+"")&&q(_,v),d&4&&A!==(A=JSON.stringify(w[2])+"")&&q(E,A)},i:F,o:F,d(w){w&&h(t),D=!1,st(M)}}}function Ft(o,t,e){let r,l;const n=et({value:0});let a=1;const i=zt(n);L(o,i,c=>e(1,r=c));const p=i.history;L(o,p,c=>e(2,l=c));const y=()=>{i.undo()},f=()=>{i.redo()};function u(){a=W(this.value),e(0,a)}return[a,r,l,i,p,y,f,u,()=>{it(i,r.value+=a,r),e(0,a=0)}]}class gt extends rt{constructor(t){super(),nt(this,t,Ft,Ct,ot,{})}}const Wt=`<script>\r
	import { writable } from "svelte/store";\r
	import approach4 from "./approach4";\r
\r
	const store = writable({ value: 0 });\r
	let value = 1;\r
\r
	const undoRedoStore = approach4(store);\r
	const history = undoRedoStore.history;\r
<\/script>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			$undoRedoStore.value += value;\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{JSON.stringify($undoRedoStore)}\r
		{$undoRedoStore.value}\r
	</p>\r
	<p>{JSON.stringify($history)}</p>\r
</div>\r
\r
<style>\r
</style>\r
`;function kt(o){const t=[at(o)],e=et(t);let r=0;const l=()=>o.set(t[r]);return{subscribe:o.subscribe,history:e,set(n){for(r++,t[r]=n,e.set(t);r<t.length-1;)t.pop();l()},undo(){r>0&&(r--,l())},redo(){r<t.length-1&&(r++,l())}}}function Kt(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N=JSON.stringify(o[1])+"",O,U,v=o[1].value+"",_,B,T,A=JSON.stringify(o[2])+"",E,D,M;return{c(){t=b("div"),e=b("button"),r=S("Undo"),l=R(),n=b("button"),a=S("Redo"),i=R(),p=b("input"),y=R(),f=b("button"),u=S("Add"),m=R(),c=b("p"),O=S(N),U=R(),_=S(v),B=R(),T=b("p"),E=S(A),this.h()},l(w){t=$(w,"DIV",{class:!0});var d=I(t);e=$(d,"BUTTON",{});var K=I(e);r=g(K,"Undo"),K.forEach(h),l=k(d),n=$(d,"BUTTON",{});var x=I(n);a=g(x,"Redo"),x.forEach(h),i=k(d),p=$(d,"INPUT",{type:!0}),y=k(d),f=$(d,"BUTTON",{});var V=I(f);u=g(V,"Add"),V.forEach(h),m=k(d),c=$(d,"P",{});var H=I(c);O=g(H,N),U=k(H),_=g(H,v),H.forEach(h),B=k(d),T=$(d,"P",{});var P=I(T);E=g(P,A),P.forEach(h),d.forEach(h),this.h()},h(){z(p,"type","number"),z(t,"class","uno-meeib4")},m(w,d){j(w,t,d),s(t,e),s(e,r),s(t,l),s(t,n),s(n,a),s(t,i),s(t,p),C(p,o[0]),s(t,y),s(t,f),s(f,u),s(t,m),s(t,c),s(c,O),s(c,U),s(c,_),s(t,B),s(t,T),s(T,E),D||(M=[J(e,"click",o[5]),J(n,"click",o[6]),J(p,"input",o[7]),J(f,"click",o[8])],D=!0)},p(w,[d]){d&1&&W(p.value)!==w[0]&&C(p,w[0]),d&2&&N!==(N=JSON.stringify(w[1])+"")&&q(O,N),d&2&&v!==(v=w[1].value+"")&&q(_,v),d&4&&A!==(A=JSON.stringify(w[2])+"")&&q(E,A)},i:F,o:F,d(w){w&&h(t),D=!1,st(M)}}}function Lt(o,t,e){let r,l;const n=et({value:0});let a=1;const i=kt(n);L(o,i,c=>e(1,r=c));const p=i.history;L(o,p,c=>e(2,l=c));const y=()=>{i.undo()},f=()=>{i.redo()};function u(){a=W(this.value),e(0,a)}return[a,r,l,i,p,y,f,u,()=>{it(i,r={...r,value:r.value+a},r),e(0,a=0)}]}class wt extends rt{constructor(t){super(),nt(this,t,Lt,Kt,ot,{})}}const Qt=`<script>\r
	import { writable } from "svelte/store";\r
	import approach5 from "./approach5";\r
\r
	const store = writable({ value: 0 });\r
	let value = 1;\r
\r
	const undoRedoStore = approach5(store);\r
	const history = undoRedoStore.history;\r
<\/script>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			$undoRedoStore = {\r
				...$undoRedoStore,\r
				value: $undoRedoStore.value + value,\r
			};\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{JSON.stringify($undoRedoStore)}\r
		{$undoRedoStore.value}\r
	</p>\r
	<p>{JSON.stringify($history)}</p>\r
</div>\r
\r
<style>\r
</style>\r
`;function Xt(o){let t,e,r,l,n,a,i,p,y,f,u,m,c,N,O,U,v=JSON.stringify(o[1])+"",_,B,T=o[1].value+"",A,E,D,M=JSON.stringify(o[2])+"",w,d,K;return{c(){t=b("script"),r=R(),l=b("div"),n=b("button"),a=S("Undo"),i=R(),p=b("button"),y=S("Redo"),f=R(),u=b("input"),m=R(),c=b("button"),N=S("Add"),O=R(),U=b("p"),_=S(v),B=R(),A=S(T),E=R(),D=b("p"),w=S(M),this.h()},l(x){const V=It("svelte-5dmpuv",document.head);t=$(V,"SCRIPT",{src:!0});var H=I(t);H.forEach(h),V.forEach(h),r=k(x),l=$(x,"DIV",{class:!0});var P=I(l);n=$(P,"BUTTON",{});var dt=I(n);a=g(dt,"Undo"),dt.forEach(h),i=k(P),p=$(P,"BUTTON",{});var ht=I(p);y=g(ht,"Redo"),ht.forEach(h),f=k(P),u=$(P,"INPUT",{type:!0}),m=k(P),c=$(P,"BUTTON",{});var ft=I(c);N=g(ft,"Add"),ft.forEach(h),O=k(P),U=$(P,"P",{});var lt=I(U);_=g(lt,v),B=k(lt),A=g(lt,T),lt.forEach(h),E=k(P),D=$(P,"P",{});var _t=I(D);w=g(_t,M),_t.forEach(h),P.forEach(h),this.h()},h(){Nt(t.src,e="https://unpkg.com/immer")||z(t,"src",e),z(u,"type","number"),z(l,"class","uno-i3jmgr")},m(x,V){s(document.head,t),j(x,r,V),j(x,l,V),s(l,n),s(n,a),s(l,i),s(l,p),s(p,y),s(l,f),s(l,u),C(u,o[0]),s(l,m),s(l,c),s(c,N),s(l,O),s(l,U),s(U,_),s(U,B),s(U,A),s(l,E),s(l,D),s(D,w),d||(K=[J(n,"click",o[5]),J(p,"click",o[6]),J(u,"input",o[7]),J(c,"click",o[8])],d=!0)},p(x,[V]){V&1&&W(u.value)!==x[0]&&C(u,x[0]),V&2&&v!==(v=JSON.stringify(x[1])+"")&&q(_,v),V&2&&T!==(T=x[1].value+"")&&q(A,T),V&4&&M!==(M=JSON.stringify(x[2])+"")&&q(w,M)},i:F,o:F,d(x){h(t),x&&h(r),x&&h(l),d=!1,st(K)}}}function Zt(o,t,e){let r,l;const n=et({value:0});let a=1;const i=kt(n);L(o,i,c=>e(1,r=c));const p=i.history;L(o,p,c=>e(2,l=c));const y=()=>{i.undo()},f=()=>{i.redo()};function u(){a=W(this.value),e(0,a)}return[a,r,l,i,p,y,f,u,()=>{it(i,r=immer.produce(r,c=>{c.value+=a}),r),e(0,a=0)}]}class Gt extends rt{constructor(t){super(),nt(this,t,Zt,Xt,ot,{})}}const Yt=`<script>\r
	import { writable } from "svelte/store";\r
	// import { produce } from "immer";\r
	import approach5 from "./approach5";\r
\r
	const store = writable({ value: 0 });\r
	let value = 1;\r
\r
	const undoRedoStore = approach5(store);\r
	const history = undoRedoStore.history;\r
<\/script>\r
\r
<svelte:head>\r
	<script src="https://unpkg.com/immer"><\/script>\r
</svelte:head>\r
\r
<div class="p-4">\r
	<button\r
		on:click={() => {\r
			undoRedoStore.undo();\r
		}}>Undo</button>\r
	<button\r
		on:click={() => {\r
			undoRedoStore.redo();\r
		}}>Redo</button>\r
\r
	<input bind:value type="number" />\r
	<button\r
		on:click={() => {\r
			$undoRedoStore = immer.produce($undoRedoStore, (draft) => {\r
				draft.value += value;\r
			});\r
			value = 0;\r
		}}>Add</button>\r
\r
	<p>\r
		{JSON.stringify($undoRedoStore)}\r
		{$undoRedoStore.value}\r
	</p>\r
	<p>{JSON.stringify($history)}</p>\r
</div>\r
\r
<style>\r
</style>\r
`,te=`import { get } from "svelte/store";\r
// store a history of actions applied to the store\r
\r
export default function approach1(store) {\r
	const history = [];\r
	let historyIndex = -1;\r
	return {\r
		subscribe: store.subscribe,\r
		doAction(action) {\r
			historyIndex++;\r
			history[historyIndex] = action;\r
      let i = historyIndex + 1;\r
      while (historyIndex < history.length - 1) {\r
        history.pop();\r
      }\r
			store.update((value) => history[historyIndex].apply(value));\r
		},\r
		undo() {\r
			if (historyIndex >= 0) {\r
				store.update((value) => history[historyIndex].reverse(value));\r
				historyIndex--;\r
			}\r
		},\r
		redo() {\r
			if (historyIndex < history.length - 1) {\r
				historyIndex++;\r
				store.update((value) => history[historyIndex].apply(value));\r
			}\r
		},\r
	};\r
}\r
`,ee=`import { get } from "svelte/store";\r
// store a history of store value snapshots\r
\r
export default function approach2(store) {\r
	const history = [get(store)];\r
	let historyIndex = 0;\r
\r
	const updateStore = () => store.set(history[historyIndex]);\r
\r
	return {\r
		subscribe: store.subscribe,\r
		set(newValue) {\r
			historyIndex++;\r
			history[historyIndex] = newValue;\r
			while (historyIndex < history.length - 1) {\r
				history.pop();\r
			}\r
			updateStore();\r
		},\r
		undo() {\r
			if (historyIndex > 0) {\r
				historyIndex--;\r
				updateStore();\r
			}\r
		},\r
		redo() {\r
			if (historyIndex < history.length - 1) {\r
				historyIndex++;\r
				updateStore();\r
			}\r
		},\r
	};\r
}\r
`,re=`import { get, writable } from "svelte/store";\r
// store a history of store value snapshots\r
\r
export default function approach3(store) {\r
	const history = [get(store)];\r
	const historyStore = writable(history);\r
	let historyIndex = 0;\r
\r
	const updateStore = () => store.set(history[historyIndex]);\r
\r
	return {\r
		subscribe: store.subscribe,\r
		history: historyStore,\r
		set(newValue) {\r
			historyIndex++;\r
			history[historyIndex] = newValue;\r
			historyStore.set(history);\r
			while (historyIndex < history.length - 1) {\r
				history.pop();\r
			}\r
			updateStore();\r
		},\r
		undo() {\r
			if (historyIndex > 0) {\r
				historyIndex--;\r
				updateStore();\r
			}\r
		},\r
		redo() {\r
			if (historyIndex < history.length - 1) {\r
				historyIndex++;\r
				updateStore();\r
			}\r
		},\r
	};\r
}\r
`,ne=`import { get, writable } from "svelte/store";\r
// store a history of store value snapshots\r
\r
export default function approach4(store) {\r
	const history = [clone(get(store))];\r
	const historyStore = writable(history);\r
	let historyIndex = 0;\r
\r
	const updateStore = () => store.set(clone(history[historyIndex]));\r
\r
	return {\r
		subscribe: store.subscribe,\r
		history: historyStore,\r
		set(newValue) {\r
			historyIndex++;\r
      history[historyIndex] = newValue;\r
			historyStore.set(history);\r
			while (historyIndex < history.length - 1) {\r
				history.pop();\r
			}\r
			updateStore();\r
		},\r
		undo() {\r
			if (historyIndex > 0) {\r
				historyIndex--;\r
				updateStore();\r
			}\r
		},\r
		redo() {\r
			if (historyIndex < history.length - 1) {\r
				historyIndex++;\r
				updateStore();\r
			}\r
		},\r
	};\r
\r
	function clone(store) {\r
		return JSON.parse(JSON.stringify(store));\r
	}\r
}\r
`,oe=`import { get, writable } from "svelte/store";\r
// store a history of store value snapshots\r
\r
export default function approach5(store) {\r
	const history = [get(store)];\r
	const historyStore = writable(history);\r
	let historyIndex = 0;\r
\r
	const updateStore = () => store.set(history[historyIndex]);\r
\r
	return {\r
		subscribe: store.subscribe,\r
		history: historyStore,\r
		set(newValue) {\r
			historyIndex++;\r
			history[historyIndex] = newValue;\r
			historyStore.set(history);\r
			while (historyIndex < history.length - 1) {\r
				history.pop();\r
			}\r
			updateStore();\r
		},\r
		undo() {\r
			if (historyIndex > 0) {\r
				historyIndex--;\r
				updateStore();\r
			}\r
		},\r
		redo() {\r
			if (historyIndex < history.length - 1) {\r
				historyIndex++;\r
				updateStore();\r
			}\r
		},\r
	};\r
}\r
`;function se(o){let t;return{c(){t=S("Here we want to implement undo/redo using Svelte stores.")},l(e){t=g(e,"Here we want to implement undo/redo using Svelte stores.")},m(e,r){j(e,t,r)},d(e){e&&h(t)}}}function ie(o){let t;return{c(){t=S("numbers")},l(e){t=g(e,"numbers")},m(e,r){j(e,t,r)},d(e){e&&h(t)}}}function le(o){let t;return{c(){t=S("strings")},l(e){t=g(e,"strings")},m(e,r){j(e,t,r)},d(e){e&&h(t)}}}function ae(o){let t,e,r,l,n,a;return e=new ct({props:{$$slots:{default:[ie]},$$scope:{ctx:o}}}),l=new ct({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){t=S("Both of these approaches works fine if we want to store a primary type like "),Q(e.$$.fragment),r=S(" or "),Q(l.$$.fragment),n=S(".")},l(i){t=g(i,"Both of these approaches works fine if we want to store a primary type like "),X(e.$$.fragment,i),r=g(i," or "),X(l.$$.fragment,i),n=g(i,".")},m(i,p){j(i,t,p),Z(e,i,p),j(i,r,p),Z(l,i,p),j(i,n,p),a=!0},p(i,p){const y={};p&2&&(y.$$scope={dirty:p,ctx:i}),e.$set(y);const f={};p&2&&(f.$$scope={dirty:p,ctx:i}),l.$set(f)},i(i){a||(G(e.$$.fragment,i),G(l.$$.fragment,i),a=!0)},o(i){Y(e.$$.fragment,i),Y(l.$$.fragment,i),a=!1},d(i){i&&h(t),tt(e,i),i&&h(r),tt(l,i),i&&h(n)}}}function ue(o){let t;return{c(){t=S("object")},l(e){t=g(e,"object")},m(e,r){j(e,t,r)},d(e){e&&h(t)}}}function pe(o){let t,e,r,l;return e=new ct({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}}),{c(){t=S("But, what if we want to store an "),Q(e.$$.fragment),r=S("?")},l(n){t=g(n,"But, what if we want to store an "),X(e.$$.fragment,n),r=g(n,"?")},m(n,a){j(n,t,a),Z(e,n,a),j(n,r,a),l=!0},p(n,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:n}),e.$set(i)},i(n){l||(G(e.$$.fragment,n),l=!0)},o(n){Y(e.$$.fragment,n),l=!1},d(n){n&&h(t),tt(e,n),n&&h(r)}}}function ce(o){let t,e,r,l,n,a,i,p,y,f;return t=new ut({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),r=new vt({props:{name:[{name:"App",comp:bt,raw:xt,text:"This is the first approach: storing a history of actions applied to the store"},{name:"approach1.js",comp:bt,raw:te,text:""},{name:"App2",comp:$t,raw:Vt,text:"This is the second approach: storing a history of store value snapshots"},{name:"approach2.js",comp:$t,raw:ee,text:""}]}}),n=new ut({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),i=new ut({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),y=new vt({props:{name:[{name:"App3",comp:St,raw:qt,text:"Here we are going to use an object! ... except it doesn't work because we're referencing the same object in our store."},{name:"approach3.js",comp:St,raw:re,text:""},{name:"App4",comp:gt,raw:Wt,text:"First we will try a clone() method that uses JSON.parse() and JSON.stringify(). It's not always ideal because it will not work with circular references and any functions in the properties will get removed. Here it is fine because we've got a simple store."},{name:"approach4.js",comp:gt,raw:ne,text:""},{name:"App5",comp:wt,raw:Qt,text:"Next we will try utilizing immutability by using the spread syntax when assigning our values. That way we won't reference the same object."},{name:"approach5.js",comp:wt,raw:oe,text:""},{name:"App6",comp:Gt,raw:Yt,text:`Finally we will try the library "immer" to have a nicer syntax. We didn't change anything in approach5.js so just reusing that one.`}]}}),{c(){Q(t.$$.fragment),e=R(),Q(r.$$.fragment),l=R(),Q(n.$$.fragment),a=R(),Q(i.$$.fragment),p=R(),Q(y.$$.fragment)},l(u){X(t.$$.fragment,u),e=k(u),X(r.$$.fragment,u),l=k(u),X(n.$$.fragment,u),a=k(u),X(i.$$.fragment,u),p=k(u),X(y.$$.fragment,u)},m(u,m){Z(t,u,m),j(u,e,m),Z(r,u,m),j(u,l,m),Z(n,u,m),j(u,a,m),Z(i,u,m),j(u,p,m),Z(y,u,m),f=!0},p(u,m){const c={};m&2&&(c.$$scope={dirty:m,ctx:u}),t.$set(c);const N={};m&2&&(N.$$scope={dirty:m,ctx:u}),n.$set(N);const O={};m&2&&(O.$$scope={dirty:m,ctx:u}),i.$set(O)},i(u){f||(G(t.$$.fragment,u),G(r.$$.fragment,u),G(n.$$.fragment,u),G(i.$$.fragment,u),G(y.$$.fragment,u),f=!0)},o(u){Y(t.$$.fragment,u),Y(r.$$.fragment,u),Y(n.$$.fragment,u),Y(i.$$.fragment,u),Y(y.$$.fragment,u),f=!1},d(u){tt(t,u),u&&h(e),tt(r,u),u&&h(l),tt(n,u),u&&h(a),tt(i,u),u&&h(p),tt(y,u)}}}function de(o){let t,e;const r=[o[0],Rt];let l={$$slots:{default:[ce]},$$scope:{ctx:o}};for(let n=0;n<r.length;n+=1)l=pt(l,r[n]);return t=new Tt({props:l}),{c(){Q(t.$$.fragment)},l(n){X(t.$$.fragment,n)},m(n,a){Z(t,n,a),e=!0},p(n,[a]){const i=a&1?Ot(r,[a&1&&yt(n[0]),a&0&&yt(Rt)]):{};a&2&&(i.$$scope={dirty:a,ctx:n}),t.$set(i)},i(n){e||(G(t.$$.fragment,n),e=!0)},o(n){Y(t.$$.fragment,n),e=!1},d(n){tt(t,n)}}}const Rt={title:"Undo redo with Svelte stores",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-30T00:00:00.000Z",layout:"notes"};function he(o,t,e){return o.$$set=r=>{e(0,t=pt(pt({},t),mt(r)))},t=mt(t),[t]}class be extends rt{constructor(t){super(),nt(this,t,he,de,ot,{})}}export{be as default,Rt as metadata};
