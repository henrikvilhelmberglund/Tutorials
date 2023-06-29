import{s as $,f,a as S,g as m,u as k,c as A,a2 as q,d as p,i,v as H,z as u,h as T,r as y,w as v,x,y as b,Y,e as d,Z as D}from"./scheduler.a7cd560e.js";import{S as z,i as C,b as w,d as E,m as L,a as r,t as _,e as P}from"./index.396264e7.js";import{E as I}from"./Example.e02fc6c1.js";function V(o){let n,e="Like this!",t,s,a=`p {
animation: zoomy 3s infinite;
}`;return{c(){n=f("p"),n.textContent=e,t=S(),s=f("style"),s.textContent=a},l(l){n=m(l,"P",{["data-svelte-h"]:!0}),k(n)!=="svelte-1t7zq3o"&&(n.textContent=e),t=A(l);const c=q("svelte-lb89py",document.head);s=m(c,"STYLE",{["data-svelte-h"]:!0}),k(s)!=="svelte-1bl8xr7"&&(s.textContent=a),c.forEach(p)},m(l,c){i(l,n,c),i(l,t,c),H(document.head,s)},p:u,i:u,o:u,d(l){l&&(p(n),p(t)),p(s)}}}class W extends z{constructor(n){super(),C(this,n,null,V,$,{})}}const Z=o=>({}),g=o=>({slot:"example"}),j=o=>({}),h=o=>({slot:"code"});function B(o){let n,e;return n=new W({}),{c(){w(n.$$.fragment)},l(t){E(n.$$.fragment,t)},m(t,s){L(n,t,s),e=!0},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function F(o){let n;const e=o[0].default,t=y(e,o,o[1],g),s=t||B();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){t&&t.p&&(!n||l&2)&&v(t,e,a,a[1],n?b(e,a[1],l,Z):x(a[1]),g)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function G(o){let n,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  Like this!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> zoomy 3s infinite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@keyframes</span> -global-zoomy</span> <span class="token punctuation">{</span>
     <span class="token selector">0%, 100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">}</span>
     <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,t;return{c(){n=new Y(!1),t=d(),this.h()},l(s){n=D(s,!1),t=d(),this.h()},h(){n.a=t},m(s,a){n.m(e,s,a),i(s,t,a)},p:u,d(s){s&&(p(t),n.d())}}}function J(o){let n;const e=o[0].default,t=y(e,o,o[1],h),s=t||G();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){t&&t.p&&(!n||l&2)&&v(t,e,a,a[1],n?b(e,a[1],l,j):x(a[1]),h)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function K(o){let n,e,t;return e=new I({props:{src:String.raw`<p>
Like this!
</p>
<svelte:head>
<style>
p {
animation: zoomy 3s infinite;
}
</style>
</svelte:head>
<style>
@keyframes -global-zoomy {
0%, 100% { transform: scale(2)}
50% { transform: scale(0.5)}
}
</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[J],example:[F]},$$scope:{ctx:o}}}),{c(){n=f("div"),w(e.$$.fragment)},l(s){n=m(s,"DIV",{});var a=T(n);E(e.$$.fragment,a),a.forEach(p)},m(s,a){i(s,n,a),L(e,n,null),t=!0},p(s,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){s&&p(n),P(e)}}}function M(o,n,e){let{$$slots:t={},$$scope:s}=n;return o.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[t,s]}class R extends z{constructor(n){super(),C(this,n,M,K,$,{})}}export{R as default};
