import{s as $,f as _,a as O,g as m,u as d,c as P,a2 as B,d as p,i as r,v as H,z as u,h as T,r as y,w as v,x,y as b,Y,e as g,Z as q}from"./scheduler.a7cd560e.js";import{S as z,i as C,b as w,d as E,m as S,a as i,t as f,e as I}from"./index.396264e7.js";import{E as D}from"./Example.e02fc6c1.js";function L(l){let a,e="Oh no! p tags are huge!",n,t,s=`p {
color: green !important;
font-size: 34px;
}`;return{c(){a=_("p"),a.textContent=e,n=O(),t=_("style"),t.textContent=s},l(o){a=m(o,"P",{["data-svelte-h"]:!0}),d(a)!=="svelte-aolb4u"&&(a.textContent=e),n=P(o);const c=B("svelte-1h7zye0",document.head);t=m(c,"STYLE",{["data-svelte-h"]:!0}),d(t)!=="svelte-f1k9t5"&&(t.textContent=s),c.forEach(p)},m(o,c){r(o,a,c),r(o,n,c),H(document.head,t)},p:u,i:u,o:u,d(o){o&&(p(a),p(n)),p(t)}}}class V extends z{constructor(a){super(),C(this,a,null,L,$,{})}}const W=l=>({}),k=l=>({slot:"example"}),Z=l=>({}),h=l=>({slot:"code"});function j(l){let a,e;return a=new V({}),{c(){w(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,t){S(a,n,t),e=!0},i(n){e||(i(a.$$.fragment,n),e=!0)},o(n){f(a.$$.fragment,n),e=!1},d(n){I(a,n)}}}function A(l){let a;const e=l[0].default,n=y(e,l,l[1],k),t=n||j();return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),a=!0},p(s,o){n&&n.p&&(!a||o&2)&&v(n,e,s,s[1],a?b(e,s[1],o,W):x(s[1]),k)},i(s){a||(i(t,s),a=!0)},o(s){f(t,s),a=!1},d(s){t&&t.d(s)}}}function F(l){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Oh no! p tags are huge!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>`,n;return{c(){a=new Y(!1),n=g(),this.h()},l(t){a=q(t,!1),n=g(),this.h()},h(){a.a=n},m(t,s){a.m(e,t,s),r(t,n,s)},p:u,d(t){t&&(p(n),a.d())}}}function G(l){let a;const e=l[0].default,n=y(e,l,l[1],h),t=n||F();return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),a=!0},p(s,o){n&&n.p&&(!a||o&2)&&v(n,e,s,s[1],a?b(e,s[1],o,Z):x(s[1]),h)},i(s){a||(i(t,s),a=!0)},o(s){f(t,s),a=!1},d(s){t&&t.d(s)}}}function J(l){let a,e,n;return e=new D({props:{src:String.raw`<p>Oh no! p tags are huge!</p>
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
</svelte:head>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[G],example:[A]},$$scope:{ctx:l}}}),{c(){a=_("div"),w(e.$$.fragment)},l(t){a=m(t,"DIV",{});var s=T(a);E(e.$$.fragment,s),s.forEach(p)},m(t,s){r(t,a,s),S(e,a,null),n=!0},p(t,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){t&&p(a),I(e)}}}function K(l,a,e){let{$$slots:n={},$$scope:t}=a;return l.$$set=s=>{"$$scope"in s&&e(1,t=s.$$scope)},[n,t]}class R extends z{constructor(a){super(),C(this,a,K,J,$,{})}}export{R as default};
