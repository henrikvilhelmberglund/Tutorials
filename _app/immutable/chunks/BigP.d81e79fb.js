import{S as E,i as z,s as w,k as m,q as y,a as C,l as d,m as g,r as $,h as p,c as D,W,b as u,D as _,H as r,y as O,z as S,A as B,g as i,d as f,B as H,C as I,E as P,F as T,G as q,T as A,e as b,U as F}from"./index.5815ca79.js";import{E as G}from"./Example.f1c5c165.js";function L(o){let t,e,n,s,a;return{c(){t=m("p"),e=y("Oh no! p tags are huge!"),n=C(),s=m("style"),a=y(`p {
color: green !important;
font-size: 34px;
}`)},l(l){t=d(l,"P",{});var c=g(t);e=$(c,"Oh no! p tags are huge!"),c.forEach(p),n=D(l);const k=W("svelte-1h7zye0",document.head);s=d(k,"STYLE",{});var h=g(s);a=$(h,`p {
color: green !important;
font-size: 34px;
}`),h.forEach(p),k.forEach(p)},m(l,c){u(l,t,c),_(t,e),u(l,n,c),_(document.head,s),_(s,a)},p:r,i:r,o:r,d(l){l&&p(t),l&&p(n),p(s)}}}class U extends E{constructor(t){super(),z(this,t,null,L,w,{})}}const V=o=>({}),v=o=>({slot:"example"}),Y=o=>({}),x=o=>({slot:"code"});function j(o){let t,e;return t=new U({}),{c(){O(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,s){B(t,n,s),e=!0},i(n){e||(i(t.$$.fragment,n),e=!0)},o(n){f(t.$$.fragment,n),e=!1},d(n){H(t,n)}}}function J(o){let t;const e=o[0].default,n=I(e,o,o[1],v),s=n||j();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),t=!0},p(a,l){n&&n.p&&(!t||l&2)&&P(n,e,a,a[1],t?q(e,a[1],l,V):T(a[1]),v)},i(a){t||(i(s,a),t=!0)},o(a){f(s,a),t=!1},d(a){s&&s.d(a)}}}function K(o){let t,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Oh no! p tags are huge!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* normally done like this but you can't disable the global style after applying it
  so I use &lt;svelte:head> instead to add the global style to the head tag, then remove it
  
  :global(p) {
    color: blue;
    font-size: 44px;
  }  
  */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green <span class="token important">!important</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>`,n;return{c(){t=new A(!1),n=b(),this.h()},l(s){t=F(s,!1),n=b(),this.h()},h(){t.a=n},m(s,a){t.m(e,s,a),u(s,n,a)},p:r,d(s){s&&p(n),s&&t.d()}}}function M(o){let t;const e=o[0].default,n=I(e,o,o[1],x),s=n||K();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),t=!0},p(a,l){n&&n.p&&(!t||l&2)&&P(n,e,a,a[1],t?q(e,a[1],l,Y):T(a[1]),x)},i(a){t||(i(s,a),t=!0)},o(a){f(s,a),t=!1},d(a){s&&s.d(a)}}}function N(o){let t,e,n;return e=new G({props:{src:String.raw`<p>Oh no! p tags are huge!</p>
<style>
/* normally done like this but you can't disable the global style after applying it
so I use <svelte:head> instead to add the global style to the head tag, then remove it

:global(p) {
color: blue;
font-size: 44px;
}
*/
</style>
<svelte:head>
<style>
p {
color: green !important;
font-size: 34px;
}
</style>
</svelte:head>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[M],example:[J]},$$scope:{ctx:o}}}),{c(){t=m("div"),O(e.$$.fragment)},l(s){t=d(s,"DIV",{});var a=g(t);S(e.$$.fragment,a),a.forEach(p)},m(s,a){u(s,t,a),B(e,t,null),n=!0},p(s,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){f(e.$$.fragment,s),n=!1},d(s){s&&p(t),H(e)}}}function Q(o,t,e){let{$$slots:n={},$$scope:s}=t;return o.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[n,s]}class Z extends E{constructor(t){super(),z(this,t,Q,N,w,{})}}export{Z as default};
