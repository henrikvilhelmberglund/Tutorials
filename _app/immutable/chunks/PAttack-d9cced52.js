import{S as E,i as z,s as w,k,q as h,a as B,l as m,m as d,r as $,h as l,c as C,U as D,b as i,G as f,B as u,w as L,x as P,y as S,f as r,t as _,z as A,F as H,H as T,I as q,J as I,R as F,e as v,T as G}from"./index-a6ce3bb5.js";import{E as J}from"./Example-f263ece7.js";function R(p){let n,e,t,s,a;return{c(){n=k("p"),e=h("Like this!"),t=B(),s=k("style"),a=h(`p {
animation: zoomy 3s infinite;
}`)},l(o){n=m(o,"P",{});var c=d(n);e=$(c,"Like this!"),c.forEach(l),t=C(o);const g=D("svelte-lb89py",document.head);s=m(g,"STYLE",{});var y=d(s);a=$(y,`p {
animation: zoomy 3s infinite;
}`),y.forEach(l),g.forEach(l)},m(o,c){i(o,n,c),f(n,e),i(o,t,c),f(document.head,s),f(s,a)},p:u,i:u,o:u,d(o){o&&l(n),o&&l(t),l(s)}}}class U extends E{constructor(n){super(),z(this,n,null,R,w,{})}}const V=p=>({}),x=p=>({slot:"example"}),W=p=>({}),b=p=>({slot:"code"});function Y(p){let n,e;return n=new U({}),{c(){L(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,s){S(n,t,s),e=!0},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function j(p){let n;const e=p[0].default,t=H(e,p,p[1],x),s=t||Y();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,o){t&&t.p&&(!n||o&2)&&T(t,e,a,a[1],n?I(e,a[1],o,V):q(a[1]),x)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function K(p){let n,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,t;return{c(){n=new F(!1),t=v(),this.h()},l(s){n=G(s,!1),t=v(),this.h()},h(){n.a=t},m(s,a){n.m(e,s,a),i(s,t,a)},p:u,d(s){s&&l(t),s&&n.d()}}}function M(p){let n;const e=p[0].default,t=H(e,p,p[1],b),s=t||K();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,o){t&&t.p&&(!n||o&2)&&T(t,e,a,a[1],n?I(e,a[1],o,W):q(a[1]),b)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function N(p){let n,e,t;return e=new J({props:{src:String.raw`<p>
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
</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[M],example:[j]},$$scope:{ctx:p}}}),{c(){n=k("div"),L(e.$$.fragment)},l(s){n=m(s,"DIV",{});var a=d(n);P(e.$$.fragment,a),a.forEach(l)},m(s,a){i(s,n,a),S(e,n,null),t=!0},p(s,[a]){const o={};a&2&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){s&&l(n),A(e)}}}function O(p,n,e){let{$$slots:t={},$$scope:s}=n;return p.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[t,s]}class Z extends E{constructor(n){super(),z(this,n,O,N,w,{})}}export{Z as default};
