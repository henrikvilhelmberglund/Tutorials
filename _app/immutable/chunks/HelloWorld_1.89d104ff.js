import{s as z,f,a as b,g as m,u as h,c as $,j as d,i as u,z as g,d as c,h as T,r as W,w as S,x as E,y as M,Y as V,e as C,Z as Y}from"./scheduler.a7cd560e.js";import{S as q,i as A,b as j,d as D,m as I,a as y,t as v,e as P}from"./index.396264e7.js";import{E as Z}from"./Example.e02fc6c1.js";function B(p){let t,e="My first Svelte component",a,n,s="Hello World",o,i,x="Link to Li Hau's youtube",_,r,w="Link to my youtube";return{c(){t=f("h2"),t.textContent=e,a=b(),n=f("p"),n.textContent=s,o=b(),i=f("a"),i.textContent=x,_=b(),r=f("a"),r.textContent=w,this.h()},l(l){t=m(l,"H2",{class:!0,["data-svelte-h"]:!0}),h(t)!=="svelte-en93o2"&&(t.textContent=e),a=$(l),n=m(l,"P",{class:!0,["data-svelte-h"]:!0}),h(n)!=="svelte-6uawp8"&&(n.textContent=s),o=$(l),i=m(l,"A",{href:!0,["data-svelte-h"]:!0}),h(i)!=="svelte-1kiz4c8"&&(i.textContent=x),_=$(l),r=m(l,"A",{href:!0,["data-svelte-h"]:!0}),h(r)!=="svelte-4pt86q"&&(r.textContent=w),this.h()},h(){d(t,"class","svelte-1bmb8d7"),d(n,"class","svelte-1bmb8d7"),d(i,"href","https://www.youtube.com/lihautan"),d(r,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(l,k){u(l,t,k),u(l,a,k),u(l,n,k),u(l,o,k),u(l,i,k),u(l,_,k),u(l,r,k)},p:g,i:g,o:g,d(l){l&&(c(t),c(a),c(n),c(o),c(i),c(_),c(r))}}}class F extends q{constructor(t){super(),A(this,t,null,B,z,{})}}const G=p=>({}),H=p=>({slot:"example"}),J=p=>({}),L=p=>({slot:"code"});function K(p){let t,e;return t=new F({}),{c(){j(t.$$.fragment)},l(a){D(t.$$.fragment,a)},m(a,n){I(t,a,n),e=!0},i(a){e||(y(t.$$.fragment,a),e=!0)},o(a){v(t.$$.fragment,a),e=!1},d(a){P(t,a)}}}function N(p){let t;const e=p[0].default,a=W(e,p,p[1],H),n=a||K();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&S(a,e,s,s[1],t?M(e,s[1],o,G):E(s[1]),H)},i(s){t||(y(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){n&&n.d(s)}}}function O(p){let t,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> zoom 5s infinite<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> zoom</span> <span class="token punctuation">{</span>
    <span class="token selector">0%, 100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,a;return{c(){t=new V(!1),a=C(),this.h()},l(n){t=Y(n,!1),a=C(),this.h()},h(){t.a=a},m(n,s){t.m(e,n,s),u(n,a,s)},p:g,d(n){n&&(c(a),t.d())}}}function Q(p){let t;const e=p[0].default,a=W(e,p,p[1],L),n=a||O();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&S(a,e,s,s[1],t?M(e,s[1],o,J):E(s[1]),L)},i(s){t||(y(n,s),t=!0)},o(s){v(n,s),t=!1},d(s){n&&n.d(s)}}}function R(p){let t,e,a;return e=new Z({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>
<style>
h2 {
color: rebeccapurple;
animation: zoom 5s infinite;
text-align:center;

}
p {
color: blue;
font-size: 44px;
}
@keyframes zoom {
0%, 100% { transform: scale(2)}
50% { transform: scale(0.5)}
}

</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Q],example:[N]},$$scope:{ctx:p}}}),{c(){t=f("div"),j(e.$$.fragment)},l(n){t=m(n,"DIV",{});var s=T(t);D(e.$$.fragment,s),s.forEach(c)},m(n,s){u(n,t,s),I(e,t,null),a=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){a||(y(e.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),a=!1},d(n){n&&c(t),P(e)}}}function U(p,t,e){let{$$slots:a={},$$scope:n}=t;return p.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[a,n]}class sn extends q{constructor(t){super(),A(this,t,U,R,z,{})}}export{sn as default};
