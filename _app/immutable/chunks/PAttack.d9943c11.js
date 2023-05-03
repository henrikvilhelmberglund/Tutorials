import{S as E,i as z,s as w,k,q as h,a as T,l as m,m as d,r as $,h as l,c as V,W,b as i,D as f,H as u,y as L,z as A,A as P,g as r,d as _,B as S,C as H,E as q,F as C,G as D,U as B,e as v,V as F}from"./index.0b5cc0d7.js";import{E as G}from"./Example.18c27029.js";function I(p){let n,e,t,s,a;return{c(){n=k("p"),e=h("Like this!"),t=T(),s=k("style"),a=h(`p {
animation: zoomy 3s infinite;
}`)},l(o){n=m(o,"P",{});var c=d(n);e=$(c,"Like this!"),c.forEach(l),t=V(o);const g=W("svelte-lb89py",document.head);s=m(g,"STYLE",{});var y=d(s);a=$(y,`p {
animation: zoomy 3s infinite;
}`),y.forEach(l),g.forEach(l)},m(o,c){i(o,n,c),f(n,e),i(o,t,c),f(document.head,s),f(s,a)},p:u,i:u,o:u,d(o){o&&l(n),o&&l(t),l(s)}}}class U extends E{constructor(n){super(),z(this,n,null,I,w,{})}}const Y=p=>({}),x=p=>({slot:"example"}),j=p=>({}),b=p=>({slot:"code"});function J(p){let n,e;return n=new U({}),{c(){L(n.$$.fragment)},l(t){A(n.$$.fragment,t)},m(t,s){P(n,t,s),e=!0},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){_(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function K(p){let n;const e=p[0].default,t=H(e,p,p[1],x),s=t||J();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,o){t&&t.p&&(!n||o&2)&&q(t,e,a,a[1],n?D(e,a[1],o,Y):C(a[1]),x)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function M(p){let n,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,t;return{c(){n=new B(!1),t=v(),this.h()},l(s){n=F(s,!1),t=v(),this.h()},h(){n.a=t},m(s,a){n.m(e,s,a),i(s,t,a)},p:u,d(s){s&&l(t),s&&n.d()}}}function N(p){let n;const e=p[0].default,t=H(e,p,p[1],b),s=t||M();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,o){t&&t.p&&(!n||o&2)&&q(t,e,a,a[1],n?D(e,a[1],o,j):C(a[1]),b)},i(a){n||(r(s,a),n=!0)},o(a){_(s,a),n=!1},d(a){s&&s.d(a)}}}function O(p){let n,e,t;return e=new G({props:{src:String.raw`<p>
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
</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[N],example:[K]},$$scope:{ctx:p}}}),{c(){n=k("div"),L(e.$$.fragment)},l(s){n=m(s,"DIV",{});var a=d(n);A(e.$$.fragment,a),a.forEach(l)},m(s,a){i(s,n,a),P(e,n,null),t=!0},p(s,[a]){const o={};a&2&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){s&&l(n),S(e)}}}function Q(p,n,e){let{$$slots:t={},$$scope:s}=n;return p.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[t,s]}class Z extends E{constructor(n){super(),z(this,n,Q,O,w,{})}}export{Z as default};
