import{S as E,i as z,s as w,k as m,q as y,a as H,l as d,m as g,r as $,h as p,c as T,R as F,b as u,D as _,B as r,w as O,x as P,y as S,f as i,t as f,z as B,C as I,E as q,F as C,G as D,O as G,e as b,P as L}from"./index-bc81051f.js";import{E as R}from"./Example-db4caf26.js";function V(o){let s,e,n,t,a;return{c(){s=m("p"),e=y("Oh no! p tags are huge!"),n=H(),t=m("style"),a=y(`p {
color: green !important;
font-size: 34px;
}`)},l(l){s=d(l,"P",{});var c=g(s);e=$(c,"Oh no! p tags are huge!"),c.forEach(p),n=T(l);const k=F("svelte-1h7zye0",document.head);t=d(k,"STYLE",{});var h=g(t);a=$(h,`p {
color: green !important;
font-size: 34px;
}`),h.forEach(p),k.forEach(p)},m(l,c){u(l,s,c),_(s,e),u(l,n,c),_(document.head,t),_(t,a)},p:r,i:r,o:r,d(l){l&&p(s),l&&p(n),p(t)}}}class W extends E{constructor(s){super(),z(this,s,null,V,w,{})}}const Y=o=>({}),v=o=>({slot:"example"}),j=o=>({}),x=o=>({slot:"code"});function A(o){let s,e;return s=new W({}),{c(){O(s.$$.fragment)},l(n){P(s.$$.fragment,n)},m(n,t){S(s,n,t),e=!0},i(n){e||(i(s.$$.fragment,n),e=!0)},o(n){f(s.$$.fragment,n),e=!1},d(n){B(s,n)}}}function J(o){let s;const e=o[0].default,n=I(e,o,o[1],v),t=n||A();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),s=!0},p(a,l){n&&n.p&&(!s||l&2)&&q(n,e,a,a[1],s?D(e,a[1],l,Y):C(a[1]),v)},i(a){s||(i(t,a),s=!0)},o(a){f(t,a),s=!1},d(a){t&&t.d(a)}}}function K(o){let s,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Oh no! p tags are huge!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>`,n;return{c(){s=new G(!1),n=b(),this.h()},l(t){s=L(t,!1),n=b(),this.h()},h(){s.a=n},m(t,a){s.m(e,t,a),u(t,n,a)},p:r,d(t){t&&p(n),t&&s.d()}}}function M(o){let s;const e=o[0].default,n=I(e,o,o[1],x),t=n||K();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),s=!0},p(a,l){n&&n.p&&(!s||l&2)&&q(n,e,a,a[1],s?D(e,a[1],l,j):C(a[1]),x)},i(a){s||(i(t,a),s=!0)},o(a){f(t,a),s=!1},d(a){t&&t.d(a)}}}function N(o){let s,e,n;return e=new R({props:{src:String.raw`<p>Oh no! p tags are huge!</p>
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
</svelte:head>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[M],example:[J]},$$scope:{ctx:o}}}),{c(){s=m("div"),O(e.$$.fragment)},l(t){s=d(t,"DIV",{});var a=g(s);P(e.$$.fragment,a),a.forEach(p)},m(t,a){u(t,s,a),S(e,s,null),n=!0},p(t,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){t&&p(s),B(e)}}}function Q(o,s,e){let{$$slots:n={},$$scope:t}=s;return o.$$set=a=>{"$$scope"in a&&e(1,t=a.$$scope)},[n,t]}class Z extends E{constructor(s){super(),z(this,s,Q,N,w,{})}}export{Z as default};
