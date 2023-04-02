import{S as B,i as P,s as T,q as i,r as m,b as $,u as C,B as A,h as f,K,ar as ee,M as z,w as c,x as _,y as b,N as te,O as G,f as w,t as v,z as g,P as H,a as D,c as V}from"./index-58af1356.js";import{M as se,P as h}from"./mdsvex-layout-notes-a943bafe.js";import{w as U}from"./index-be13bd0b.js";import{S as q}from"./ShowMany-e03b9690.js";import{S as X}from"./Strong-d8efce91.js";const W=U(1);function ne(o){let t;return o.subscribe(r=>{t=r})(),t*2}function re(o){let t,s,r=ne(W)+"",l;return{c(){t=i(o[0]),s=i(" * 2 = "),l=i(r)},l(e){t=m(e,o[0]),s=m(e," * 2 = "),l=m(e,r)},m(e,a){$(e,t,a),$(e,s,a),$(e,l,a)},p(e,[a]){a&1&&C(t,e[0])},i:A,o:A,d(e){e&&f(t),e&&f(s),e&&f(l)}}}function oe(o,t,s){let r;return K(o,W,l=>s(0,r=l)),[r]}class J extends B{constructor(t){super(),P(this,t,oe,re,T,{})}}const ae=`<script>\r
	import { store, calculateDoubleValue } from "./store";\r
<\/script>\r
\r
{$store} * 2 = {calculateDoubleValue(store)}\r
\r
<style>\r
</style>\r
`,le=`import { writable } from "svelte/store";\r
\r
export const store = writable(1);\r
\r
export function calculateDoubleValue(store) {\r
  // this has nothing to do with the Svelte version that automatically subscribes\r
  let $store;\r
  const unsubscribe = store.subscribe(value => {\r
    $store = value;\r
  })\r
  unsubscribe();\r
  return $store * 2;\r
}`;function ue(o){let t,s,r=$e(W)+"",l;return{c(){t=i(o[0]),s=i(" * 2 = "),l=i(r)},l(e){t=m(e,o[0]),s=m(e," * 2 = "),l=m(e,r)},m(e,a){$(e,t,a),$(e,s,a),$(e,l,a)},p(e,[a]){a&1&&C(t,e[0])},i:A,o:A,d(e){e&&f(t),e&&f(s),e&&f(l)}}}function $e(o){let t;return o.subscribe(r=>{t=r})(),t*2}function fe(o,t,s){let r;return K(o,W,l=>s(0,r=l)),[r]}class ie extends B{constructor(t){super(),P(this,t,fe,ue,T,{})}}const me=`<script>\r
	import { store } from "./store";\r
\r
	function calculateDoubleValue(store) {\r
		let _store;\r
		const unsubscribe = store.subscribe((value) => {\r
			_store = value;\r
		});\r
		unsubscribe();\r
		return _store * 2;\r
	}\r
<\/script>\r
\r
{$store} * 2 = {calculateDoubleValue(store)}\r
\r
<style>\r
</style>\r
`,Y=U(1);function pe(o){return ee(o)*2}function ce(o){let t,s,r=pe(Y)+"",l;return{c(){t=i(o[0]),s=i(" * 2 = "),l=i(r)},l(e){t=m(e,o[0]),s=m(e," * 2 = "),l=m(e,r)},m(e,a){$(e,t,a),$(e,s,a),$(e,l,a)},p(e,[a]){a&1&&C(t,e[0])},i:A,o:A,d(e){e&&f(t),e&&f(s),e&&f(l)}}}function _e(o,t,s){let r;return K(o,Y,l=>s(0,r=l)),[r]}class L extends B{constructor(t){super(),P(this,t,_e,ce,T,{})}}const be=`<script>\r
	import { store, calculateDoubleValue } from "./store2";\r
<\/script>\r
\r
{$store} * 2 = {calculateDoubleValue(store)}\r
\r
<style>\r
</style>\r
`,we=`import { writable, get } from "svelte/store";\r
\r
export const store = writable(1);\r
\r
export function calculateDoubleValue(store) {\r
	let $store = get(store);\r
	return $store * 2;\r
}\r
`;function ve(o){let t;return{c(){t=i("Sometimes we may want to get the value of a Svelte store outside of a Svelte component.")},l(s){t=m(s,"Sometimes we may want to get the value of a Svelte store outside of a Svelte component.")},m(s,r){$(s,t,r)},d(s){s&&f(t)}}}function ge(o){let t;return{c(){t=i("Inside of a Svelte component it is easy, just add a dollar prefix to the store name. By doing so we automatically subscribe to the store and get its value.")},l(s){t=m(s,"Inside of a Svelte component it is easy, just add a dollar prefix to the store name. By doing so we automatically subscribe to the store and get its value.")},m(s,r){$(s,t,r)},d(s){s&&f(t)}}}function de(o){let t;return{c(){t=i("in the top level")},l(s){t=m(s,"in the top level")},m(s,r){$(s,t,r)},d(s){s&&f(t)}}}function xe(o){let t,s,r,l;return s=new X({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){t=i("If we added the function to the Svelte component instead we can't use let $store inside of the function because stores have to be defined "),c(s.$$.fragment),r=i(".")},l(e){t=m(e,"If we added the function to the Svelte component instead we can't use let $store inside of the function because stores have to be defined "),_(s.$$.fragment,e),r=m(e,".")},m(e,a){$(e,t,a),b(s,e,a),$(e,r,a),l=!0},p(e,a){const p={};a&2&&(p.$$scope={dirty:a,ctx:e}),s.$set(p)},i(e){l||(w(s.$$.fragment,e),l=!0)},o(e){v(s.$$.fragment,e),l=!1},d(e){e&&f(t),g(s,e),e&&f(r)}}}function Se(o){let t;return{c(){t=i("We can use _store instead and it will work!")},l(s){t=m(s,"We can use _store instead and it will work!")},m(s,r){$(s,t,r)},d(s){s&&f(t)}}}function ye(o){let t;return{c(){t=i("get()")},l(s){t=m(s,"get()")},m(s,r){$(s,t,r)},d(s){s&&f(t)}}}function De(o){let t,s,r,l;return s=new X({props:{$$slots:{default:[ye]},$$scope:{ctx:o}}}),{c(){t=i("There is an even easier way to get the value of a store, we simply use "),c(s.$$.fragment),r=i(".")},l(e){t=m(e,"There is an even easier way to get the value of a store, we simply use "),_(s.$$.fragment,e),r=m(e,".")},m(e,a){$(e,t,a),b(s,e,a),$(e,r,a),l=!0},p(e,a){const p={};a&2&&(p.$$scope={dirty:a,ctx:e}),s.$set(p)},i(e){l||(w(s.$$.fragment,e),l=!0)},o(e){v(s.$$.fragment,e),l=!1},d(e){e&&f(t),g(s,e),e&&f(r)}}}function Ve(o){let t,s,r,l,e,a,p,k,d,j,S,I,x,R,y,M;return t=new h({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),r=new h({props:{$$slots:{default:[ge]},$$scope:{ctx:o}}}),e=new q({props:{name:[{name:"App",comp:J,raw:ae,text:"Warning: this is a contrived example!"},{name:"store.js",comp:J,raw:le,text:""}]}}),p=new h({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),d=new h({props:{$$slots:{default:[Se]},$$scope:{ctx:o}}}),S=new q({props:{name:[{name:"App2",comp:ie,raw:me,text:"It works!"}]}}),x=new h({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),y=new q({props:{name:[{name:"store2.js",comp:L,raw:we,text:""},{name:"App3",comp:L,raw:be,text:""}]}}),{c(){c(t.$$.fragment),s=D(),c(r.$$.fragment),l=D(),c(e.$$.fragment),a=D(),c(p.$$.fragment),k=D(),c(d.$$.fragment),j=D(),c(S.$$.fragment),I=D(),c(x.$$.fragment),R=D(),c(y.$$.fragment)},l(n){_(t.$$.fragment,n),s=V(n),_(r.$$.fragment,n),l=V(n),_(e.$$.fragment,n),a=V(n),_(p.$$.fragment,n),k=V(n),_(d.$$.fragment,n),j=V(n),_(S.$$.fragment,n),I=V(n),_(x.$$.fragment,n),R=V(n),_(y.$$.fragment,n)},m(n,u){b(t,n,u),$(n,s,u),b(r,n,u),$(n,l,u),b(e,n,u),$(n,a,u),b(p,n,u),$(n,k,u),b(d,n,u),$(n,j,u),b(S,n,u),$(n,I,u),b(x,n,u),$(n,R,u),b(y,n,u),M=!0},p(n,u){const N={};u&2&&(N.$$scope={dirty:u,ctx:n}),t.$set(N);const O={};u&2&&(O.$$scope={dirty:u,ctx:n}),r.$set(O);const Z={};u&2&&(Z.$$scope={dirty:u,ctx:n}),p.$set(Z);const E={};u&2&&(E.$$scope={dirty:u,ctx:n}),d.$set(E);const F={};u&2&&(F.$$scope={dirty:u,ctx:n}),x.$set(F)},i(n){M||(w(t.$$.fragment,n),w(r.$$.fragment,n),w(e.$$.fragment,n),w(p.$$.fragment,n),w(d.$$.fragment,n),w(S.$$.fragment,n),w(x.$$.fragment,n),w(y.$$.fragment,n),M=!0)},o(n){v(t.$$.fragment,n),v(r.$$.fragment,n),v(e.$$.fragment,n),v(p.$$.fragment,n),v(d.$$.fragment,n),v(S.$$.fragment,n),v(x.$$.fragment,n),v(y.$$.fragment,n),M=!1},d(n){g(t,n),n&&f(s),g(r,n),n&&f(l),g(e,n),n&&f(a),g(p,n),n&&f(k),g(d,n),n&&f(j),g(S,n),n&&f(I),g(x,n),n&&f(R),g(y,n)}}}function Ae(o){let t,s;const r=[o[0],Q];let l={$$slots:{default:[Ve]},$$scope:{ctx:o}};for(let e=0;e<r.length;e+=1)l=z(l,r[e]);return t=new se({props:l}),{c(){c(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){b(t,e,a),s=!0},p(e,[a]){const p=a&1?te(r,[a&1&&G(e[0]),a&0&&G(Q)]):{};a&2&&(p.$$scope={dirty:a,ctx:e}),t.$set(p)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){g(t,e)}}}const Q={title:"get() Svelte store value",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function he(o,t,s){return o.$$set=r=>{s(0,t=z(z({},t),H(r)))},t=H(t),[t]}class Be extends B{constructor(t){super(),P(this,t,he,Ae,T,{})}}export{Be as default,Q as metadata};
