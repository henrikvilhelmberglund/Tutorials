import{S as z,i as E,s as w,k as m,q as y,a as C,l as d,m as g,r as $,h as p,c as D,U as F,b as u,G as _,B as r,w as I,x as O,y as S,f as i,t as f,z as B,F as H,H as P,I as T,J as q,R as G,e as b,T as J}from"./index-a6ce3bb5.js";import{E as L}from"./Example-f263ece7.js";function R(o){let s,e,n,t,a;return{c(){s=m("p"),e=y("Oh no! p tags are huge!"),n=C(),t=m("style"),a=y(`p {
color: green !important;
font-size: 34px;
}`)},l(l){s=d(l,"P",{});var c=g(s);e=$(c,"Oh no! p tags are huge!"),c.forEach(p),n=D(l);const k=F("svelte-1h7zye0",document.head);t=d(k,"STYLE",{});var h=g(t);a=$(h,`p {
color: green !important;
font-size: 34px;
}`),h.forEach(p),k.forEach(p)},m(l,c){u(l,s,c),_(s,e),u(l,n,c),_(document.head,t),_(t,a)},p:r,i:r,o:r,d(l){l&&p(s),l&&p(n),p(t)}}}class U extends z{constructor(s){super(),E(this,s,null,R,w,{})}}const V=o=>({}),v=o=>({slot:"example"}),W=o=>({}),x=o=>({slot:"code"});function Y(o){let s,e;return s=new U({}),{c(){I(s.$$.fragment)},l(n){O(s.$$.fragment,n)},m(n,t){S(s,n,t),e=!0},i(n){e||(i(s.$$.fragment,n),e=!0)},o(n){f(s.$$.fragment,n),e=!1},d(n){B(s,n)}}}function j(o){let s;const e=o[0].default,n=H(e,o,o[1],v),t=n||Y();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),s=!0},p(a,l){n&&n.p&&(!s||l&2)&&P(n,e,a,a[1],s?q(e,a[1],l,V):T(a[1]),v)},i(a){s||(i(t,a),s=!0)},o(a){f(t,a),s=!1},d(a){t&&t.d(a)}}}function A(o){let s,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Oh no! p tags are huge!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>`,n;return{c(){s=new G(!1),n=b(),this.h()},l(t){s=J(t,!1),n=b(),this.h()},h(){s.a=n},m(t,a){s.m(e,t,a),u(t,n,a)},p:r,d(t){t&&p(n),t&&s.d()}}}function K(o){let s;const e=o[0].default,n=H(e,o,o[1],x),t=n||A();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),s=!0},p(a,l){n&&n.p&&(!s||l&2)&&P(n,e,a,a[1],s?q(e,a[1],l,W):T(a[1]),x)},i(a){s||(i(t,a),s=!0)},o(a){f(t,a),s=!1},d(a){t&&t.d(a)}}}function M(o){let s,e,n;return e=new L({props:{src:String.raw`<p>Oh no! p tags are huge!</p>
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
</svelte:head>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[K],example:[j]},$$scope:{ctx:o}}}),{c(){s=m("div"),I(e.$$.fragment)},l(t){s=d(t,"DIV",{});var a=g(s);O(e.$$.fragment,a),a.forEach(p)},m(t,a){u(t,s,a),S(e,s,null),n=!0},p(t,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){t&&p(s),B(e)}}}function N(o,s,e){let{$$slots:n={},$$scope:t}=s;return o.$$set=a=>{"$$scope"in a&&e(1,t=a.$$scope)},[n,t]}class Z extends z{constructor(s){super(),E(this,s,N,M,w,{})}}export{Z as default};
