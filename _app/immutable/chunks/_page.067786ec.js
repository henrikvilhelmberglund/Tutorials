import{s as rt,f as b,a as w,l as C,g as $,h as E,u as B,c as x,m as N,d as S,j as D,i as U,v as i,a8 as M,X as k,am as L,n as q,z as F,H as lt,A as Z,an as ut,al as it,a2 as xt,a3 as Rt,C as ct,D as ft}from"./scheduler.a7cd560e.js";import{S as ot,i as st,b as G,d as K,m as Q,a as Y,t as tt,e as et}from"./index.396264e7.js";import{g as kt,a as vt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as It,P as pt}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as nt}from"./index.5e192797.js";import{S as mt}from"./ShowMany.db7be1f3.js";import{S as dt}from"./Strong.097578ae.js";function Ct(o){const t=[];let e=-1;return{subscribe:o.subscribe,doAction(r){for(e++,t[e]=r;e<t.length-1;)t.pop();o.update(u=>t[e].apply(u))},undo(){e>=0&&(o.update(r=>t[e].reverse(r)),e--)},redo(){e<t.length-1&&(e++,o.update(r=>t[e].apply(r)))}}}function Nt(o){let t,e,r="Undo",u,n,l="Redo",s,a,v,d,p="Add",m,h,g,R,O;return{c(){t=b("div"),e=b("button"),e.textContent=r,u=w(),n=b("button"),n.textContent=l,s=w(),a=b("input"),v=w(),d=b("button"),d.textContent=p,m=w(),h=b("p"),g=C(o[1]),this.h()},l(_){t=$(_,"DIV",{class:!0});var f=E(t);e=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(e)!=="svelte-182749q"&&(e.textContent=r),u=x(f),n=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(n)!=="svelte-fzh5ne"&&(n.textContent=l),s=x(f),a=$(f,"INPUT",{type:!0}),v=x(f),d=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(d)!=="svelte-13hdpdn"&&(d.textContent=p),m=x(f),h=$(f,"P",{});var T=E(h);g=N(T,o[1]),T.forEach(S),f.forEach(S),this.h()},h(){D(a,"type","number"),D(t,"class","spu-6x3gqd")},m(_,f){U(_,t,f),i(t,e),i(t,u),i(t,n),i(t,s),i(t,a),M(a,o[0]),i(t,v),i(t,d),i(t,m),i(t,h),i(h,g),R||(O=[k(e,"click",o[3]),k(n,"click",o[4]),k(a,"input",o[5]),k(d,"click",o[6])],R=!0)},p(_,[f]){f&1&&L(a.value)!==_[0]&&M(a,_[0]),f&2&&q(g,_[1])},i:F,o:F,d(_){_&&S(t),R=!1,lt(O)}}}function Tt(o){return{apply(t){return t+o},reverse(t){return t-o}}}function Ot(o,t,e){let r;const u=nt(0);let n=1;const l=Ct(u);Z(o,l,p=>e(1,r=p));const s=()=>{l.undo()},a=()=>{l.redo()};function v(){n=L(this.value),e(0,n)}return[n,r,l,s,a,v,()=>{l.doAction(Tt(n)),e(0,n=0)}]}class _t extends ot{constructor(t){super(),st(this,t,Ot,Nt,rt,{})}}const At=`<script>\r
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
`;function Ut(o){const t=[ut(o)];let e=0;const r=()=>o.set(t[e]);return{subscribe:o.subscribe,set(u){for(e++,t[e]=u;e<t.length-1;)t.pop();r()},undo(){e>0&&(e--,r())},redo(){e<t.length-1&&(e++,r())}}}function Jt(o){let t,e,r="Undo",u,n,l="Redo",s,a,v,d,p="Add",m,h,g,R,O;return{c(){t=b("div"),e=b("button"),e.textContent=r,u=w(),n=b("button"),n.textContent=l,s=w(),a=b("input"),v=w(),d=b("button"),d.textContent=p,m=w(),h=b("p"),g=C(o[1]),this.h()},l(_){t=$(_,"DIV",{class:!0});var f=E(t);e=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(e)!=="svelte-182749q"&&(e.textContent=r),u=x(f),n=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(n)!=="svelte-fzh5ne"&&(n.textContent=l),s=x(f),a=$(f,"INPUT",{type:!0}),v=x(f),d=$(f,"BUTTON",{["data-svelte-h"]:!0}),B(d)!=="svelte-10g6nyv"&&(d.textContent=p),m=x(f),h=$(f,"P",{});var T=E(h);g=N(T,o[1]),T.forEach(S),f.forEach(S),this.h()},h(){D(a,"type","number"),D(t,"class","spu-7ts8u3")},m(_,f){U(_,t,f),i(t,e),i(t,u),i(t,n),i(t,s),i(t,a),M(a,o[0]),i(t,v),i(t,d),i(t,m),i(t,h),i(h,g),R||(O=[k(e,"click",o[3]),k(n,"click",o[4]),k(a,"input",o[5]),k(d,"click",o[6])],R=!0)},p(_,[f]){f&1&&L(a.value)!==_[0]&&M(a,_[0]),f&2&&q(g,_[1])},i:F,o:F,d(_){_&&S(t),R=!1,lt(O)}}}function Bt(o,t,e){let r;const u=nt(0);let n=1;const l=Ut(u);Z(o,l,p=>e(1,r=p));const s=()=>{l.undo()},a=()=>{l.redo()};function v(){n=L(this.value),e(0,n)}return[n,r,l,s,a,v,()=>{it(l,r+=n,r),e(0,n=0)}]}class yt extends ot{constructor(t){super(),st(this,t,Bt,Jt,rt,{})}}const Pt=`<script>\r
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
`;function Et(o){const t=[ut(o)],e=nt(t);let r=0;const u=()=>o.set(t[r]);return{subscribe:o.subscribe,history:e,set(n){for(r++,t[r]=n,e.set(t);r<t.length-1;)t.pop();u()},undo(){r>0&&(r--,u())},redo(){r<t.length-1&&(r++,u())}}}function jt(o){let t,e,r="Undo",u,n,l="Redo",s,a,v,d,p="Add",m,h,g=JSON.stringify(o[1])+"",R,O,_=o[1].value+"",f,T,A,I=JSON.stringify(o[2])+"",J,j,V;return{c(){t=b("div"),e=b("button"),e.textContent=r,u=w(),n=b("button"),n.textContent=l,s=w(),a=b("input"),v=w(),d=b("button"),d.textContent=p,m=w(),h=b("p"),R=C(g),O=w(),f=C(_),T=w(),A=b("p"),J=C(I),this.h()},l(y){t=$(y,"DIV",{class:!0});var c=E(t);e=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(e)!=="svelte-182749q"&&(e.textContent=r),u=x(c),n=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(n)!=="svelte-fzh5ne"&&(n.textContent=l),s=x(c),a=$(c,"INPUT",{type:!0}),v=x(c),d=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(d)!=="svelte-1pemv1q"&&(d.textContent=p),m=x(c),h=$(c,"P",{});var P=E(h);R=N(P,g),O=x(P),f=N(P,_),P.forEach(S),T=x(c),A=$(c,"P",{});var W=E(A);J=N(W,I),W.forEach(S),c.forEach(S),this.h()},h(){D(a,"type","number"),D(t,"class","spu-yk91su")},m(y,c){U(y,t,c),i(t,e),i(t,u),i(t,n),i(t,s),i(t,a),M(a,o[0]),i(t,v),i(t,d),i(t,m),i(t,h),i(h,R),i(h,O),i(h,f),i(t,T),i(t,A),i(A,J),j||(V=[k(e,"click",o[5]),k(n,"click",o[6]),k(a,"input",o[7]),k(d,"click",o[8])],j=!0)},p(y,[c]){c&1&&L(a.value)!==y[0]&&M(a,y[0]),c&2&&g!==(g=JSON.stringify(y[1])+"")&&q(R,g),c&2&&_!==(_=y[1].value+"")&&q(f,_),c&4&&I!==(I=JSON.stringify(y[2])+"")&&q(J,I)},i:F,o:F,d(y){y&&S(t),j=!1,lt(V)}}}function Vt(o,t,e){let r,u;const n=nt({value:0});let l=1;const s=Et(n);Z(o,s,h=>e(1,r=h));const a=s.history;Z(o,a,h=>e(2,u=h));const v=()=>{s.undo()},d=()=>{s.redo()};function p(){l=L(this.value),e(0,l)}return[l,r,u,s,a,v,d,p,()=>{it(s,r.value+=l,r),e(0,l=0)}]}class bt extends ot{constructor(t){super(),st(this,t,Vt,jt,rt,{})}}const qt=`<script>\r
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
`;function zt(o){const t=[n(ut(o))],e=nt(t);let r=0;const u=()=>o.set(n(t[r]));return{subscribe:o.subscribe,history:e,set(l){for(r++,t[r]=l,e.set(t);r<t.length-1;)t.pop();u()},undo(){r>0&&(r--,u())},redo(){r<t.length-1&&(r++,u())}};function n(l){return JSON.parse(JSON.stringify(l))}}function Dt(o){let t,e,r="Undo",u,n,l="Redo",s,a,v,d,p="Add",m,h,g=JSON.stringify(o[1])+"",R,O,_=o[1].value+"",f,T,A,I=JSON.stringify(o[2])+"",J,j,V;return{c(){t=b("div"),e=b("button"),e.textContent=r,u=w(),n=b("button"),n.textContent=l,s=w(),a=b("input"),v=w(),d=b("button"),d.textContent=p,m=w(),h=b("p"),R=C(g),O=w(),f=C(_),T=w(),A=b("p"),J=C(I),this.h()},l(y){t=$(y,"DIV",{class:!0});var c=E(t);e=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(e)!=="svelte-182749q"&&(e.textContent=r),u=x(c),n=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(n)!=="svelte-fzh5ne"&&(n.textContent=l),s=x(c),a=$(c,"INPUT",{type:!0}),v=x(c),d=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(d)!=="svelte-1pemv1q"&&(d.textContent=p),m=x(c),h=$(c,"P",{});var P=E(h);R=N(P,g),O=x(P),f=N(P,_),P.forEach(S),T=x(c),A=$(c,"P",{});var W=E(A);J=N(W,I),W.forEach(S),c.forEach(S),this.h()},h(){D(a,"type","number"),D(t,"class","spu-l11cnt")},m(y,c){U(y,t,c),i(t,e),i(t,u),i(t,n),i(t,s),i(t,a),M(a,o[0]),i(t,v),i(t,d),i(t,m),i(t,h),i(h,R),i(h,O),i(h,f),i(t,T),i(t,A),i(A,J),j||(V=[k(e,"click",o[5]),k(n,"click",o[6]),k(a,"input",o[7]),k(d,"click",o[8])],j=!0)},p(y,[c]){c&1&&L(a.value)!==y[0]&&M(a,y[0]),c&2&&g!==(g=JSON.stringify(y[1])+"")&&q(R,g),c&2&&_!==(_=y[1].value+"")&&q(f,_),c&4&&I!==(I=JSON.stringify(y[2])+"")&&q(J,I)},i:F,o:F,d(y){y&&S(t),j=!1,lt(V)}}}function Ht(o,t,e){let r,u;const n=nt({value:0});let l=1;const s=zt(n);Z(o,s,h=>e(1,r=h));const a=s.history;Z(o,a,h=>e(2,u=h));const v=()=>{s.undo()},d=()=>{s.redo()};function p(){l=L(this.value),e(0,l)}return[l,r,u,s,a,v,d,p,()=>{it(s,r.value+=l,r),e(0,l=0)}]}class $t extends ot{constructor(t){super(),st(this,t,Ht,Dt,rt,{})}}const Mt=`<script>\r
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
`;function wt(o){const t=[ut(o)],e=nt(t);let r=0;const u=()=>o.set(t[r]);return{subscribe:o.subscribe,history:e,set(n){for(r++,t[r]=n,e.set(t);r<t.length-1;)t.pop();u()},undo(){r>0&&(r--,u())},redo(){r<t.length-1&&(r++,u())}}}function Ft(o){let t,e,r="Undo",u,n,l="Redo",s,a,v,d,p="Add",m,h,g=JSON.stringify(o[1])+"",R,O,_=o[1].value+"",f,T,A,I=JSON.stringify(o[2])+"",J,j,V;return{c(){t=b("div"),e=b("button"),e.textContent=r,u=w(),n=b("button"),n.textContent=l,s=w(),a=b("input"),v=w(),d=b("button"),d.textContent=p,m=w(),h=b("p"),R=C(g),O=w(),f=C(_),T=w(),A=b("p"),J=C(I),this.h()},l(y){t=$(y,"DIV",{class:!0});var c=E(t);e=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(e)!=="svelte-182749q"&&(e.textContent=r),u=x(c),n=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(n)!=="svelte-fzh5ne"&&(n.textContent=l),s=x(c),a=$(c,"INPUT",{type:!0}),v=x(c),d=$(c,"BUTTON",{["data-svelte-h"]:!0}),B(d)!=="svelte-crufrm"&&(d.textContent=p),m=x(c),h=$(c,"P",{});var P=E(h);R=N(P,g),O=x(P),f=N(P,_),P.forEach(S),T=x(c),A=$(c,"P",{});var W=E(A);J=N(W,I),W.forEach(S),c.forEach(S),this.h()},h(){D(a,"type","number"),D(t,"class","spu-vk53x8")},m(y,c){U(y,t,c),i(t,e),i(t,u),i(t,n),i(t,s),i(t,a),M(a,o[0]),i(t,v),i(t,d),i(t,m),i(t,h),i(h,R),i(h,O),i(h,f),i(t,T),i(t,A),i(A,J),j||(V=[k(e,"click",o[5]),k(n,"click",o[6]),k(a,"input",o[7]),k(d,"click",o[8])],j=!0)},p(y,[c]){c&1&&L(a.value)!==y[0]&&M(a,y[0]),c&2&&g!==(g=JSON.stringify(y[1])+"")&&q(R,g),c&2&&_!==(_=y[1].value+"")&&q(f,_),c&4&&I!==(I=JSON.stringify(y[2])+"")&&q(J,I)},i:F,o:F,d(y){y&&S(t),j=!1,lt(V)}}}function Lt(o,t,e){let r,u;const n=nt({value:0});let l=1;const s=wt(n);Z(o,s,h=>e(1,r=h));const a=s.history;Z(o,a,h=>e(2,u=h));const v=()=>{s.undo()},d=()=>{s.redo()};function p(){l=L(this.value),e(0,l)}return[l,r,u,s,a,v,d,p,()=>{it(s,r={...r,value:r.value+l},r),e(0,l=0)}]}class gt extends ot{constructor(t){super(),st(this,t,Lt,Ft,rt,{})}}const Wt=`<script>\r
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
`;function Xt(o){let t,e="",r,u,n,l,s="Undo",a,v,d="Redo",p,m,h,g,R="Add",O,_,f=JSON.stringify(o[1])+"",T,A,I=o[1].value+"",J,j,V,y=JSON.stringify(o[2])+"",c,P,W;return{c(){t=b("script"),t.innerHTML=e,u=w(),n=b("div"),l=b("button"),l.textContent=s,a=w(),v=b("button"),v.textContent=d,p=w(),m=b("input"),h=w(),g=b("button"),g.textContent=R,O=w(),_=b("p"),T=C(f),A=w(),J=C(I),j=w(),V=b("p"),c=C(y),this.h()},l(z){const X=xt("svelte-5dmpuv",document.head);t=$(X,"SCRIPT",{src:!0,["data-svelte-h"]:!0}),B(t)!=="svelte-wv1n7p"&&(t.innerHTML=e),X.forEach(S),u=x(z),n=$(z,"DIV",{class:!0});var H=E(n);l=$(H,"BUTTON",{["data-svelte-h"]:!0}),B(l)!=="svelte-182749q"&&(l.textContent=s),a=x(H),v=$(H,"BUTTON",{["data-svelte-h"]:!0}),B(v)!=="svelte-fzh5ne"&&(v.textContent=d),p=x(H),m=$(H,"INPUT",{type:!0}),h=x(H),g=$(H,"BUTTON",{["data-svelte-h"]:!0}),B(g)!=="svelte-j6jt69"&&(g.textContent=R),O=x(H),_=$(H,"P",{});var at=E(_);T=N(at,f),A=x(at),J=N(at,I),at.forEach(S),j=x(H),V=$(H,"P",{});var ht=E(V);c=N(ht,y),ht.forEach(S),H.forEach(S),this.h()},h(){Rt(t.src,r="https://unpkg.com/immer")||D(t,"src",r),D(m,"type","number"),D(n,"class","spu-btpxef")},m(z,X){i(document.head,t),U(z,u,X),U(z,n,X),i(n,l),i(n,a),i(n,v),i(n,p),i(n,m),M(m,o[0]),i(n,h),i(n,g),i(n,O),i(n,_),i(_,T),i(_,A),i(_,J),i(n,j),i(n,V),i(V,c),P||(W=[k(l,"click",o[5]),k(v,"click",o[6]),k(m,"input",o[7]),k(g,"click",o[8])],P=!0)},p(z,[X]){X&1&&L(m.value)!==z[0]&&M(m,z[0]),X&2&&f!==(f=JSON.stringify(z[1])+"")&&q(T,f),X&2&&I!==(I=z[1].value+"")&&q(J,I),X&4&&y!==(y=JSON.stringify(z[2])+"")&&q(c,y)},i:F,o:F,d(z){z&&(S(u),S(n)),S(t),P=!1,lt(W)}}}function Zt(o,t,e){let r,u;const n=nt({value:0});let l=1;const s=wt(n);Z(o,s,h=>e(1,r=h));const a=s.history;Z(o,a,h=>e(2,u=h));const v=()=>{s.undo()},d=()=>{s.redo()};function p(){l=L(this.value),e(0,l)}return[l,r,u,s,a,v,d,p,()=>{it(s,r=immer.produce(r,h=>{h.value+=l}),r),e(0,l=0)}]}class Gt extends ot{constructor(t){super(),st(this,t,Zt,Xt,rt,{})}}const Kt=`<script>\r
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
`,Qt=`import { get } from "svelte/store";\r
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
`,Yt=`import { get } from "svelte/store";\r
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
`,te=`import { get, writable } from "svelte/store";\r
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
`,ee=`import { get, writable } from "svelte/store";\r
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
`,ne=`import { get, writable } from "svelte/store";\r
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
`;function re(o){let t;return{c(){t=C("Here we want to implement undo/redo using Svelte stores.")},l(e){t=N(e,"Here we want to implement undo/redo using Svelte stores.")},m(e,r){U(e,t,r)},d(e){e&&S(t)}}}function oe(o){let t;return{c(){t=C("numbers")},l(e){t=N(e,"numbers")},m(e,r){U(e,t,r)},d(e){e&&S(t)}}}function se(o){let t;return{c(){t=C("strings")},l(e){t=N(e,"strings")},m(e,r){U(e,t,r)},d(e){e&&S(t)}}}function le(o){let t,e,r,u,n,l;return e=new dt({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),u=new dt({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){t=C("Both of these approaches works fine if we want to store a primary type like "),G(e.$$.fragment),r=C(" or "),G(u.$$.fragment),n=C(".")},l(s){t=N(s,"Both of these approaches works fine if we want to store a primary type like "),K(e.$$.fragment,s),r=N(s," or "),K(u.$$.fragment,s),n=N(s,".")},m(s,a){U(s,t,a),Q(e,s,a),U(s,r,a),Q(u,s,a),U(s,n,a),l=!0},p(s,a){const v={};a&2&&(v.$$scope={dirty:a,ctx:s}),e.$set(v);const d={};a&2&&(d.$$scope={dirty:a,ctx:s}),u.$set(d)},i(s){l||(Y(e.$$.fragment,s),Y(u.$$.fragment,s),l=!0)},o(s){tt(e.$$.fragment,s),tt(u.$$.fragment,s),l=!1},d(s){s&&(S(t),S(r),S(n)),et(e,s),et(u,s)}}}function ie(o){let t;return{c(){t=C("object")},l(e){t=N(e,"object")},m(e,r){U(e,t,r)},d(e){e&&S(t)}}}function ae(o){let t,e,r,u;return e=new dt({props:{$$slots:{default:[ie]},$$scope:{ctx:o}}}),{c(){t=C("But, what if we want to store an "),G(e.$$.fragment),r=C("?")},l(n){t=N(n,"But, what if we want to store an "),K(e.$$.fragment,n),r=N(n,"?")},m(n,l){U(n,t,l),Q(e,n,l),U(n,r,l),u=!0},p(n,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:n}),e.$set(s)},i(n){u||(Y(e.$$.fragment,n),u=!0)},o(n){tt(e.$$.fragment,n),u=!1},d(n){n&&(S(t),S(r)),et(e,n)}}}function ue(o){let t,e,r,u,n,l,s,a,v,d;return t=new pt({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),r=new mt({props:{name:[{name:"App",comp:_t,raw:At,text:"This is the first approach: storing a history of actions applied to the store"},{name:"approach1.js",comp:_t,raw:Qt,text:""},{name:"App2",comp:yt,raw:Pt,text:"This is the second approach: storing a history of store value snapshots"},{name:"approach2.js",comp:yt,raw:Yt,text:""}]}}),n=new pt({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),s=new pt({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),v=new mt({props:{name:[{name:"App3",comp:bt,raw:qt,text:"Here we are going to use an object! ... except it doesn't work because we're referencing the same object in our store."},{name:"approach3.js",comp:bt,raw:te,text:""},{name:"App4",comp:$t,raw:Mt,text:"First we will try a clone() method that uses JSON.parse() and JSON.stringify(). It's not always ideal because it will not work with circular references and any functions in the properties will get removed. Here it is fine because we've got a simple store."},{name:"approach4.js",comp:$t,raw:ee,text:""},{name:"App5",comp:gt,raw:Wt,text:"Next we will try utilizing immutability by using the spread syntax when assigning our values. That way we won't reference the same object."},{name:"approach5.js",comp:gt,raw:ne,text:""},{name:"App6",comp:Gt,raw:Kt,text:`Finally we will try the library "immer" to have a nicer syntax. We didn't change anything in approach5.js so just reusing that one.`}]}}),{c(){G(t.$$.fragment),e=w(),G(r.$$.fragment),u=w(),G(n.$$.fragment),l=w(),G(s.$$.fragment),a=w(),G(v.$$.fragment)},l(p){K(t.$$.fragment,p),e=x(p),K(r.$$.fragment,p),u=x(p),K(n.$$.fragment,p),l=x(p),K(s.$$.fragment,p),a=x(p),K(v.$$.fragment,p)},m(p,m){Q(t,p,m),U(p,e,m),Q(r,p,m),U(p,u,m),Q(n,p,m),U(p,l,m),Q(s,p,m),U(p,a,m),Q(v,p,m),d=!0},p(p,m){const h={};m&2&&(h.$$scope={dirty:m,ctx:p}),t.$set(h);const g={};m&2&&(g.$$scope={dirty:m,ctx:p}),n.$set(g);const R={};m&2&&(R.$$scope={dirty:m,ctx:p}),s.$set(R)},i(p){d||(Y(t.$$.fragment,p),Y(r.$$.fragment,p),Y(n.$$.fragment,p),Y(s.$$.fragment,p),Y(v.$$.fragment,p),d=!0)},o(p){tt(t.$$.fragment,p),tt(r.$$.fragment,p),tt(n.$$.fragment,p),tt(s.$$.fragment,p),tt(v.$$.fragment,p),d=!1},d(p){p&&(S(e),S(u),S(l),S(a)),et(t,p),et(r,p),et(n,p),et(s,p),et(v,p)}}}function pe(o){let t,e;const r=[o[0],St];let u={$$slots:{default:[ue]},$$scope:{ctx:o}};for(let n=0;n<r.length;n+=1)u=ct(u,r[n]);return t=new It({props:u}),{c(){G(t.$$.fragment)},l(n){K(t.$$.fragment,n)},m(n,l){Q(t,n,l),e=!0},p(n,[l]){const s=l&1?kt(r,[l&1&&vt(n[0]),l&0&&vt(St)]):{};l&2&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){e||(Y(t.$$.fragment,n),e=!0)},o(n){tt(t.$$.fragment,n),e=!1},d(n){et(t,n)}}}const St={title:"Undo redo with Svelte stores",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-30T00:00:00.000Z",layout:"notes"};function ce(o,t,e){return o.$$set=r=>{e(0,t=ct(ct({},t),ft(r)))},t=ft(t),[t]}class be extends ot{constructor(t){super(),st(this,t,ce,pe,rt,{})}}export{be as default,St as metadata};
