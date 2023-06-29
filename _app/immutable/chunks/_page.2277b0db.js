import{s as T,l as f,m as i,i as $,n as z,z as V,d as c,A as Z,an as ee,C as q,D as K,a as y,c as D}from"./scheduler.a7cd560e.js";import{S as W,i as B,b as p,d as _,m as b,a as g,t as w,e as v}from"./index.396264e7.js";import{g as te,a as L}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as se,P as A}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as U}from"./index.5e192797.js";import{S as P}from"./ShowMany.db7be1f3.js";import{S as X}from"./Strong.097578ae.js";const C=U(1);function ne(o){let e;return o.subscribe(r=>{e=r})(),e*2}function re(o){let e,s,r=ne(C)+"",l;return{c(){e=f(o[0]),s=f(" * 2 = "),l=f(r)},l(t){e=i(t,o[0]),s=i(t," * 2 = "),l=i(t,r)},m(t,a){$(t,e,a),$(t,s,a),$(t,l,a)},p(t,[a]){a&1&&z(e,t[0])},i:V,o:V,d(t){t&&(c(e),c(s),c(l))}}}function oe(o,e,s){let r;return Z(o,C,l=>s(0,r=l)),[r]}class N extends W{constructor(e){super(),B(this,e,oe,re,T,{})}}const ae=`<script>\r
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
}`;function ue(o){let e,s,r=$e(C)+"",l;return{c(){e=f(o[0]),s=f(" * 2 = "),l=f(r)},l(t){e=i(t,o[0]),s=i(t," * 2 = "),l=i(t,r)},m(t,a){$(t,e,a),$(t,s,a),$(t,l,a)},p(t,[a]){a&1&&z(e,t[0])},i:V,o:V,d(t){t&&(c(e),c(s),c(l))}}}function $e(o){let e;return o.subscribe(r=>{e=r})(),e*2}function ce(o,e,s){let r;return Z(o,C,l=>s(0,r=l)),[r]}class fe extends W{constructor(e){super(),B(this,e,ce,ue,T,{})}}const ie=`<script>\r
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
`,Y=U(1);function me(o){return ee(o)*2}function pe(o){let e,s,r=me(Y)+"",l;return{c(){e=f(o[0]),s=f(" * 2 = "),l=f(r)},l(t){e=i(t,o[0]),s=i(t," * 2 = "),l=i(t,r)},m(t,a){$(t,e,a),$(t,s,a),$(t,l,a)},p(t,[a]){a&1&&z(e,t[0])},i:V,o:V,d(t){t&&(c(e),c(s),c(l))}}}function _e(o,e,s){let r;return Z(o,Y,l=>s(0,r=l)),[r]}class O extends W{constructor(e){super(),B(this,e,_e,pe,T,{})}}const be=`<script>\r
	import { store, calculateDoubleValue } from "./store2";\r
<\/script>\r
\r
{$store} * 2 = {calculateDoubleValue(store)}\r
\r
<style>\r
</style>\r
`,ge=`import { writable, get } from "svelte/store";\r
\r
export const store = writable(1);\r
\r
export function calculateDoubleValue(store) {\r
	let $store = get(store);\r
	return $store * 2;\r
}\r
`;function we(o){let e;return{c(){e=f("Sometimes we may want to get the value of a Svelte store outside of a Svelte component.")},l(s){e=i(s,"Sometimes we may want to get the value of a Svelte store outside of a Svelte component.")},m(s,r){$(s,e,r)},d(s){s&&c(e)}}}function ve(o){let e;return{c(){e=f("Inside of a Svelte component it is easy, just add a dollar prefix to the store name. By doing so we automatically subscribe to the store and get its value.")},l(s){e=i(s,"Inside of a Svelte component it is easy, just add a dollar prefix to the store name. By doing so we automatically subscribe to the store and get its value.")},m(s,r){$(s,e,r)},d(s){s&&c(e)}}}function de(o){let e;return{c(){e=f("in the top level")},l(s){e=i(s,"in the top level")},m(s,r){$(s,e,r)},d(s){s&&c(e)}}}function he(o){let e,s,r,l;return s=new X({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){e=f("If we added the function to the Svelte component instead we can't use let $store inside of the function because stores have to be defined "),p(s.$$.fragment),r=f(".")},l(t){e=i(t,"If we added the function to the Svelte component instead we can't use let $store inside of the function because stores have to be defined "),_(s.$$.fragment,t),r=i(t,".")},m(t,a){$(t,e,a),b(s,t,a),$(t,r,a),l=!0},p(t,a){const m={};a&2&&(m.$$scope={dirty:a,ctx:t}),s.$set(m)},i(t){l||(g(s.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),l=!1},d(t){t&&(c(e),c(r)),v(s,t)}}}function Se(o){let e;return{c(){e=f("We can use _store instead and it will work!")},l(s){e=i(s,"We can use _store instead and it will work!")},m(s,r){$(s,e,r)},d(s){s&&c(e)}}}function xe(o){let e;return{c(){e=f("get()")},l(s){e=i(s,"get()")},m(s,r){$(s,e,r)},d(s){s&&c(e)}}}function ye(o){let e,s,r,l;return s=new X({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){e=f("There is an even easier way to get the value of a store, we simply use "),p(s.$$.fragment),r=f(".")},l(t){e=i(t,"There is an even easier way to get the value of a store, we simply use "),_(s.$$.fragment,t),r=i(t,".")},m(t,a){$(t,e,a),b(s,t,a),$(t,r,a),l=!0},p(t,a){const m={};a&2&&(m.$$scope={dirty:a,ctx:t}),s.$set(m)},i(t){l||(g(s.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),l=!1},d(t){t&&(c(e),c(r)),v(s,t)}}}function De(o){let e,s,r,l,t,a,m,k,d,j,S,I,h,R,x,M;return e=new A({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),r=new A({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),t=new P({props:{name:[{name:"App",comp:N,raw:ae,text:"Warning: this is a contrived example!"},{name:"store.js",comp:N,raw:le,text:""}]}}),m=new A({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),d=new A({props:{$$slots:{default:[Se]},$$scope:{ctx:o}}}),S=new P({props:{name:[{name:"App2",comp:fe,raw:ie,text:"It works!"}]}}),h=new A({props:{$$slots:{default:[ye]},$$scope:{ctx:o}}}),x=new P({props:{name:[{name:"store2.js",comp:O,raw:ge,text:""},{name:"App3",comp:O,raw:be,text:""}]}}),{c(){p(e.$$.fragment),s=y(),p(r.$$.fragment),l=y(),p(t.$$.fragment),a=y(),p(m.$$.fragment),k=y(),p(d.$$.fragment),j=y(),p(S.$$.fragment),I=y(),p(h.$$.fragment),R=y(),p(x.$$.fragment)},l(n){_(e.$$.fragment,n),s=D(n),_(r.$$.fragment,n),l=D(n),_(t.$$.fragment,n),a=D(n),_(m.$$.fragment,n),k=D(n),_(d.$$.fragment,n),j=D(n),_(S.$$.fragment,n),I=D(n),_(h.$$.fragment,n),R=D(n),_(x.$$.fragment,n)},m(n,u){b(e,n,u),$(n,s,u),b(r,n,u),$(n,l,u),b(t,n,u),$(n,a,u),b(m,n,u),$(n,k,u),b(d,n,u),$(n,j,u),b(S,n,u),$(n,I,u),b(h,n,u),$(n,R,u),b(x,n,u),M=!0},p(n,u){const E={};u&2&&(E.$$scope={dirty:u,ctx:n}),e.$set(E);const F={};u&2&&(F.$$scope={dirty:u,ctx:n}),r.$set(F);const G={};u&2&&(G.$$scope={dirty:u,ctx:n}),m.$set(G);const H={};u&2&&(H.$$scope={dirty:u,ctx:n}),d.$set(H);const J={};u&2&&(J.$$scope={dirty:u,ctx:n}),h.$set(J)},i(n){M||(g(e.$$.fragment,n),g(r.$$.fragment,n),g(t.$$.fragment,n),g(m.$$.fragment,n),g(d.$$.fragment,n),g(S.$$.fragment,n),g(h.$$.fragment,n),g(x.$$.fragment,n),M=!0)},o(n){w(e.$$.fragment,n),w(r.$$.fragment,n),w(t.$$.fragment,n),w(m.$$.fragment,n),w(d.$$.fragment,n),w(S.$$.fragment,n),w(h.$$.fragment,n),w(x.$$.fragment,n),M=!1},d(n){n&&(c(s),c(l),c(a),c(k),c(j),c(I),c(R)),v(e,n),v(r,n),v(t,n),v(m,n),v(d,n),v(S,n),v(h,n),v(x,n)}}}function Ve(o){let e,s;const r=[o[0],Q];let l={$$slots:{default:[De]},$$scope:{ctx:o}};for(let t=0;t<r.length;t+=1)l=q(l,r[t]);return e=new se({props:l}),{c(){p(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,a){b(e,t,a),s=!0},p(t,[a]){const m=a&1?te(r,[a&1&&L(t[0]),a&0&&L(Q)]):{};a&2&&(m.$$scope={dirty:a,ctx:t}),e.$set(m)},i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}const Q={title:"get() Svelte store value",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function Ae(o,e,s){return o.$$set=r=>{s(0,e=q(q({},e),K(r)))},e=K(e),[e]}class Be extends W{constructor(e){super(),B(this,e,Ae,Ve,T,{})}}export{Be as default,Q as metadata};
