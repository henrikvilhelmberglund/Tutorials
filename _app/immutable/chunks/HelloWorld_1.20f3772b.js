import{S as C,i as D,s as V,k as f,q as d,a as L,l as k,m,r as y,h as c,c as E,n as g,b as r,D as $,H as b,y as B,z as F,A as G,g as v,d as w,B as I,C as P,E as T,F as U,G as j,U as J,e as z,V as K}from"./index.0b5cc0d7.js";import{E as N}from"./Example.18c27029.js";function O(o){let t,e,n,s,a,p,i,x,h,_,H;return{c(){t=f("h2"),e=d("My first Svelte component"),n=L(),s=f("p"),a=d("Hello World"),p=L(),i=f("a"),x=d("Link to Li Hau's youtube"),h=L(),_=f("a"),H=d("Link to my youtube"),this.h()},l(l){t=k(l,"H2",{class:!0});var u=m(t);e=y(u,"My first Svelte component"),u.forEach(c),n=E(l),s=k(l,"P",{class:!0});var W=m(s);a=y(W,"Hello World"),W.forEach(c),p=E(l),i=k(l,"A",{href:!0});var S=m(i);x=y(S,"Link to Li Hau's youtube"),S.forEach(c),h=E(l),_=k(l,"A",{href:!0});var M=m(_);H=y(M,"Link to my youtube"),M.forEach(c),this.h()},h(){g(t,"class","svelte-1olio46"),g(s,"class","svelte-1olio46"),g(i,"href","https://www.youtube.com/lihautan"),g(_,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(l,u){r(l,t,u),$(t,e),r(l,n,u),r(l,s,u),$(s,a),r(l,p,u),r(l,i,u),$(i,x),r(l,h,u),r(l,_,u),$(_,H)},p:b,i:b,o:b,d(l){l&&c(t),l&&c(n),l&&c(s),l&&c(p),l&&c(i),l&&c(h),l&&c(_)}}}class Q extends C{constructor(t){super(),D(this,t,null,O,V,{})}}const R=o=>({}),A=o=>({slot:"example"}),X=o=>({}),q=o=>({slot:"code"});function Y(o){let t,e;return t=new Q({}),{c(){B(t.$$.fragment)},l(n){F(t.$$.fragment,n)},m(n,s){G(t,n,s),e=!0},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){I(t,n)}}}function Z(o){let t;const e=o[0].default,n=P(e,o,o[1],A),s=n||Y();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,p){s&&s.m(a,p),t=!0},p(a,p){n&&n.p&&(!t||p&2)&&T(n,e,a,a[1],t?j(e,a[1],p,R):U(a[1]),A)},i(a){t||(v(s,a),t=!0)},o(a){w(s,a),t=!1},d(a){s&&s.d(a)}}}function ss(o){let t,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,n;return{c(){t=new J(!1),n=z(),this.h()},l(s){t=K(s,!1),n=z(),this.h()},h(){t.a=n},m(s,a){t.m(e,s,a),r(s,n,a)},p:b,d(s){s&&c(n),s&&t.d()}}}function ts(o){let t;const e=o[0].default,n=P(e,o,o[1],q),s=n||ss();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,p){s&&s.m(a,p),t=!0},p(a,p){n&&n.p&&(!t||p&2)&&T(n,e,a,a[1],t?j(e,a[1],p,X):U(a[1]),q)},i(a){t||(v(s,a),t=!0)},o(a){w(s,a),t=!1},d(a){s&&s.d(a)}}}function as(o){let t,e,n;return e=new N({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>
<style>
h2 {
color: rebeccapurple;
}
p {
color: blue;
font-size: 44px;
}
</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[ts],example:[Z]},$$scope:{ctx:o}}}),{c(){t=f("div"),B(e.$$.fragment)},l(s){t=k(s,"DIV",{});var a=m(t);F(e.$$.fragment,a),a.forEach(c)},m(s,a){r(s,t,a),G(e,t,null),n=!0},p(s,[a]){const p={};a&2&&(p.$$scope={dirty:a,ctx:s}),e.$set(p)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){s&&c(t),I(e)}}}function ns(o,t,e){let{$$slots:n={},$$scope:s}=t;return o.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[n,s]}class os extends C{constructor(t){super(),D(this,t,ns,as,V,{})}}export{os as default};