import{s as S,f as _,a as v,g as m,u as h,c as w,j as y,i as u,z as d,d as c,h as T,r as W,w as E,x as M,y as q,Y as V,e as C,Z as Y}from"./scheduler.a7cd560e.js";import{S as z,i as A,b as j,d as D,m as I,a as g,t as $,e as P}from"./index.396264e7.js";import{E as Z}from"./Example.e02fc6c1.js";function B(l){let a,s="My first Svelte component",e,t,n="Hello World",o,i,b="Link to Li Hau's youtube",k,r,x="Link to my youtube";return{c(){a=_("h2"),a.textContent=s,e=v(),t=_("p"),t.textContent=n,o=v(),i=_("a"),i.textContent=b,k=v(),r=_("a"),r.textContent=x,this.h()},l(p){a=m(p,"H2",{["data-svelte-h"]:!0}),h(a)!=="svelte-en93o2"&&(a.textContent=s),e=w(p),t=m(p,"P",{["data-svelte-h"]:!0}),h(t)!=="svelte-6uawp8"&&(t.textContent=n),o=w(p),i=m(p,"A",{href:!0,["data-svelte-h"]:!0}),h(i)!=="svelte-1kiz4c8"&&(i.textContent=b),k=w(p),r=m(p,"A",{href:!0,["data-svelte-h"]:!0}),h(r)!=="svelte-4pt86q"&&(r.textContent=x),this.h()},h(){y(i,"href","https://www.youtube.com/lihautan"),y(r,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(p,f){u(p,a,f),u(p,e,f),u(p,t,f),u(p,o,f),u(p,i,f),u(p,k,f),u(p,r,f)},p:d,i:d,o:d,d(p){p&&(c(a),c(e),c(t),c(o),c(i),c(k),c(r))}}}class F extends z{constructor(a){super(),A(this,a,null,B,S,{})}}const G=l=>({}),H=l=>({slot:"example"}),J=l=>({}),L=l=>({slot:"code"});function K(l){let a,s;return a=new F({}),{c(){j(a.$$.fragment)},l(e){D(a.$$.fragment,e)},m(e,t){I(a,e,t),s=!0},i(e){s||(g(a.$$.fragment,e),s=!0)},o(e){$(a.$$.fragment,e),s=!1},d(e){P(a,e)}}}function N(l){let a;const s=l[0].default,e=W(s,l,l[1],H),t=e||K();return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),a=!0},p(n,o){e&&e.p&&(!a||o&2)&&E(e,s,n,n[1],a?q(s,n[1],o,G):M(n[1]),H)},i(n){a||(g(t,n),a=!0)},o(n){$(t,n),a=!1},d(n){t&&t.d(n)}}}function O(l){let a,s=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>`,e;return{c(){a=new V(!1),e=C(),this.h()},l(t){a=Y(t,!1),e=C(),this.h()},h(){a.a=e},m(t,n){a.m(s,t,n),u(t,e,n)},p:d,d(t){t&&(c(e),a.d())}}}function Q(l){let a;const s=l[0].default,e=W(s,l,l[1],L),t=e||O();return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),a=!0},p(n,o){e&&e.p&&(!a||o&2)&&E(e,s,n,n[1],a?q(s,n[1],o,J):M(n[1]),L)},i(n){a||(g(t,n),a=!0)},o(n){$(t,n),a=!1},d(n){t&&t.d(n)}}}function R(l){let a,s,e;return s=new Z({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Q],example:[N]},$$scope:{ctx:l}}}),{c(){a=_("div"),j(s.$$.fragment)},l(t){a=m(t,"DIV",{});var n=T(a);D(s.$$.fragment,n),n.forEach(c)},m(t,n){u(t,a,n),I(s,a,null),e=!0},p(t,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:t}),s.$set(o)},i(t){e||(g(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){t&&c(a),P(s)}}}function U(l,a,s){let{$$slots:e={},$$scope:t}=a;return l.$$set=n=>{"$$scope"in n&&s(1,t=n.$$scope)},[e,t]}class nt extends z{constructor(a){super(),A(this,a,U,R,S,{})}}export{nt as default};
