import{s as j,l as f,f as d,m,g as _,h as W,u as E,d as c,i as k,v as g,X as h,z as v,H as F,r as H,w as S,x as q,y as z,Y as G,e as D,Z as J}from"./scheduler.a7cd560e.js";import{S as T,i as X,b as Y,d as Z,m as A,a as $,t as C,e as B}from"./index.396264e7.js";import{E as K}from"./Example.e02fc6c1.js";function L(o){let a,e,s,n,t="Child",l,i,P,r,w="Child",x,y;return{c(){a=f(`Without |capture
`),e=d("div"),s=f(`Parent
`),n=d("div"),n.textContent=t,l=f(`
With |capture
`),i=d("div"),P=f(`Parent
`),r=d("div"),r.textContent=w},l(p){a=m(p,`Without |capture
`),e=_(p,"DIV",{});var u=W(e);s=m(u,`Parent
`),n=_(u,"DIV",{["data-svelte-h"]:!0}),E(n)!=="svelte-1tlhb"&&(n.textContent=t),u.forEach(c),l=m(p,`
With |capture
`),i=_(p,"DIV",{});var b=W(i);P=m(b,`Parent
`),r=_(b,"DIV",{["data-svelte-h"]:!0}),E(r)!=="svelte-5itcu4"&&(r.textContent=w),b.forEach(c)},m(p,u){k(p,a,u),k(p,e,u),g(e,s),g(e,n),k(p,l,u),k(p,i,u),g(i,P),g(i,r),x||(y=[h(n,"click",o[0]),h(e,"click",o[1]),h(r,"click",o[2]),h(i,"click",o[3],!0)],x=!0)},p:v,i:v,o:v,d(p){p&&(c(a),c(e),c(l),c(i)),x=!1,F(y)}}}function M(o){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class N extends T{constructor(a){super(),X(this,a,M,L,j,{})}}const O=o=>({}),I=o=>({slot:"example"}),Q=o=>({}),V=o=>({slot:"code"});function R(o){let a,e;return a=new N({}),{c(){Y(a.$$.fragment)},l(s){Z(a.$$.fragment,s)},m(s,n){A(a,s,n),e=!0},i(s){e||($(a.$$.fragment,s),e=!0)},o(s){C(a.$$.fragment,s),e=!1},d(s){B(a,s)}}}function U(o){let a;const e=o[0].default,s=H(e,o,o[1],I),n=s||R();return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),a=!0},p(t,l){s&&s.p&&(!a||l&2)&&S(s,e,t,t[1],a?z(e,t[1],l,O):q(t[1]),I)},i(t){a||($(n,t),a=!0)},o(t){C(n,t),a=!1},d(t){n&&n.d(t)}}}function nn(o){let a,e=`Without |capture
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Child" then "Parent" --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

With |capture
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click|capture=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Parent" then "Child" because of |capture --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,s;return{c(){a=new G(!1),s=D(),this.h()},l(n){a=J(n,!1),s=D(),this.h()},h(){a.a=s},m(n,t){a.m(e,n,t),k(n,s,t)},p:v,d(n){n&&(c(s),a.d())}}}function an(o){let a;const e=o[0].default,s=H(e,o,o[1],V),n=s||nn();return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),a=!0},p(t,l){s&&s.p&&(!a||l&2)&&S(s,e,t,t[1],a?z(e,t[1],l,Q):q(t[1]),V)},i(t){a||($(n,t),a=!0)},o(t){C(n,t),a=!1},d(t){n&&n.d(t)}}}function tn(o){let a,e,s;return e=new K({props:{src:String.raw`Without |capture
<div on:click={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Child" then "Parent" -->
Child
</div>
</div>
With |capture
<div on:click|capture={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Parent" then "Child" because of |capture -->
Child
</div>
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[an],example:[U]},$$scope:{ctx:o}}}),{c(){a=d("div"),Y(e.$$.fragment)},l(n){a=_(n,"DIV",{});var t=W(a);Z(e.$$.fragment,t),t.forEach(c)},m(n,t){k(n,a,t),A(e,a,null),s=!0},p(n,[t]){const l={};t&2&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){C(e.$$.fragment,n),s=!1},d(n){n&&c(a),B(e)}}}function sn(o,a,e){let{$$slots:s={},$$scope:n}=a;return o.$$set=t=>{"$$scope"in t&&e(1,n=t.$$scope)},[s,n]}class pn extends T{constructor(a){super(),X(this,a,sn,tn,j,{})}}export{pn as default};
