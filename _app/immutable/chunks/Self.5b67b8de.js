import{s as V,l as _,f as d,m,g as f,h as w,u as E,d as c,i as k,v as g,X as h,a6 as F,z as v,H as G,r as j,w as H,x as z,y as q,Y as J,e as D,Z as K}from"./scheduler.a7cd560e.js";import{S as T,i as X,b as Y,d as Z,m as A,a as $,t as C,e as B}from"./index.396264e7.js";import{E as L}from"./Example.e02fc6c1.js";function M(l){let s,e,t,n,a="Child",o,i,x,r,W="Child",P,y;return{c(){s=_(`Without |self
`),e=d("div"),t=_(`Parent
`),n=d("div"),n.textContent=a,o=_(`
With |self
`),i=d("div"),x=_(`Parent
`),r=d("div"),r.textContent=W},l(p){s=m(p,`Without |self
`),e=f(p,"DIV",{});var u=w(e);t=m(u,`Parent
`),n=f(u,"DIV",{["data-svelte-h"]:!0}),E(n)!=="svelte-1tlhb"&&(n.textContent=a),u.forEach(c),o=m(p,`
With |self
`),i=f(p,"DIV",{});var b=w(i);x=m(b,`Parent
`),r=f(b,"DIV",{["data-svelte-h"]:!0}),E(r)!=="svelte-1w3v99z"&&(r.textContent=W),b.forEach(c)},m(p,u){k(p,s,u),k(p,e,u),g(e,t),g(e,n),k(p,o,u),k(p,i,u),g(i,x),g(i,r),P||(y=[h(n,"click",l[0]),h(e,"click",l[1]),h(r,"click",l[2]),h(i,"click",F(l[3]))],P=!0)},p:v,i:v,o:v,d(p){p&&(c(s),c(e),c(o),c(i)),P=!1,G(y)}}}function N(l){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class O extends T{constructor(s){super(),X(this,s,N,M,V,{})}}const Q=l=>({}),I=l=>({slot:"example"}),R=l=>({}),S=l=>({slot:"code"});function U(l){let s,e;return s=new O({}),{c(){Y(s.$$.fragment)},l(t){Z(s.$$.fragment,t)},m(t,n){A(s,t,n),e=!0},i(t){e||($(s.$$.fragment,t),e=!0)},o(t){C(s.$$.fragment,t),e=!1},d(t){B(s,t)}}}function nn(l){let s;const e=l[0].default,t=j(e,l,l[1],I),n=t||U();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,o){n&&n.m(a,o),s=!0},p(a,o){t&&t.p&&(!s||o&2)&&H(t,e,a,a[1],s?q(e,a[1],o,Q):z(a[1]),I)},i(a){s||($(n,a),s=!0)},o(a){C(n,a),s=!1},d(a){n&&n.d(a)}}}function sn(l){let s,e=`Without |self
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Child" then "Parent" --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

With |self
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click|self=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is only "Child" because event.target is not the parent div when clicking the child --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){s=new J(!1),t=D(),this.h()},l(n){s=K(n,!1),t=D(),this.h()},h(){s.a=t},m(n,a){s.m(e,n,a),k(n,t,a)},p:v,d(n){n&&(c(t),s.d())}}}function an(l){let s;const e=l[0].default,t=j(e,l,l[1],S),n=t||sn();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,o){n&&n.m(a,o),s=!0},p(a,o){t&&t.p&&(!s||o&2)&&H(t,e,a,a[1],s?q(e,a[1],o,R):z(a[1]),S)},i(a){s||($(n,a),s=!0)},o(a){C(n,a),s=!1},d(a){n&&n.d(a)}}}function tn(l){let s,e,t;return e=new L({props:{src:String.raw`Without |self
<div on:click={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Child" then "Parent" -->
Child
</div>
</div>
With |self
<div on:click|self={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is only "Child" because event.target is not the parent div when clicking the child -->
Child
</div>
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[an],example:[nn]},$$scope:{ctx:l}}}),{c(){s=d("div"),Y(e.$$.fragment)},l(n){s=f(n,"DIV",{});var a=w(s);Z(e.$$.fragment,a),a.forEach(c)},m(n,a){k(n,s,a),A(e,s,null),t=!0},p(n,[a]){const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){n&&c(s),B(e)}}}function en(l,s,e){let{$$slots:t={},$$scope:n}=s;return l.$$set=a=>{"$$scope"in a&&e(1,n=a.$$scope)},[t,n]}class cn extends T{constructor(s){super(),X(this,s,en,tn,V,{})}}export{cn as default};
