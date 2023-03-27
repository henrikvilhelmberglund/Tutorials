import{S as j,i as H,s as q,q as k,k as m,r as d,l as h,m as g,h as c,b as _,G as f,Q as v,Y,B as $,D as A,w as T,x as z,y as B,f as C,t as P,z as F,F as G,H as J,I as Q,J as R,R as K,e as I,T as L}from"./index-a6ce3bb5.js";import{E as M}from"./Example-f263ece7.js";function N(l){let a,e,t,n,s,o,i,b,r,x,W,y;return{c(){a=k(`Without |self
`),e=m("div"),t=k(`Parent
`),n=m("div"),s=k("Child"),o=k(`
With |self
`),i=m("div"),b=k(`Parent
`),r=m("div"),x=k("Child")},l(p){a=d(p,`Without |self
`),e=h(p,"DIV",{});var u=g(e);t=d(u,`Parent
`),n=h(u,"DIV",{});var E=g(n);s=d(E,"Child"),E.forEach(c),u.forEach(c),o=d(p,`
With |self
`),i=h(p,"DIV",{});var w=g(i);b=d(w,`Parent
`),r=h(w,"DIV",{});var D=g(r);x=d(D,"Child"),D.forEach(c),w.forEach(c)},m(p,u){_(p,a,u),_(p,e,u),f(e,t),f(e,n),f(n,s),_(p,o,u),_(p,i,u),f(i,b),f(i,r),f(r,x),W||(y=[v(n,"click",l[0]),v(e,"click",l[1]),v(r,"click",l[2]),v(i,"click",Y(l[3]))],W=!0)},p:$,i:$,o:$,d(p){p&&c(a),p&&c(e),p&&c(o),p&&c(i),W=!1,A(y)}}}function O(l){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class U extends j{constructor(a){super(),H(this,a,O,N,q,{})}}const X=l=>({}),S=l=>({slot:"example"}),Z=l=>({}),V=l=>({slot:"code"});function nn(l){let a,e;return a=new U({}),{c(){T(a.$$.fragment)},l(t){z(a.$$.fragment,t)},m(t,n){B(a,t,n),e=!0},i(t){e||(C(a.$$.fragment,t),e=!0)},o(t){P(a.$$.fragment,t),e=!1},d(t){F(a,t)}}}function sn(l){let a;const e=l[0].default,t=G(e,l,l[1],S),n=t||nn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),a=!0},p(s,o){t&&t.p&&(!a||o&2)&&J(t,e,s,s[1],a?R(e,s[1],o,X):Q(s[1]),S)},i(s){a||(C(n,s),a=!0)},o(s){P(n,s),a=!1},d(s){n&&n.d(s)}}}function an(l){let a,e=`Without |self
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Child" then "Parent" --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

With |self
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click|self=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is only "Child" because event.target is not the parent div when clicking the child --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){a=new K(!1),t=I(),this.h()},l(n){a=L(n,!1),t=I(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),_(n,t,s)},p:$,d(n){n&&c(t),n&&a.d()}}}function tn(l){let a;const e=l[0].default,t=G(e,l,l[1],V),n=t||an();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),a=!0},p(s,o){t&&t.p&&(!a||o&2)&&J(t,e,s,s[1],a?R(e,s[1],o,Z):Q(s[1]),V)},i(s){a||(C(n,s),a=!0)},o(s){P(n,s),a=!1},d(s){n&&n.d(s)}}}function en(l){let a,e,t;return e=new M({props:{src:String.raw`Without |self
<div on:click={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Child" then "Parent" -->
Child
</div>
</div>
With |self
<div on:click|self={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is only "Child" because event.target is not the parent div when clicking the child -->
Child
</div>
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[tn],example:[sn]},$$scope:{ctx:l}}}),{c(){a=m("div"),T(e.$$.fragment)},l(n){a=h(n,"DIV",{});var s=g(a);z(e.$$.fragment,s),s.forEach(c)},m(n,s){_(n,a,s),B(e,a,null),t=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){P(e.$$.fragment,n),t=!1},d(n){n&&c(a),F(e)}}}function ln(l,a,e){let{$$slots:t={},$$scope:n}=a;return l.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[t,n]}class cn extends j{constructor(a){super(),H(this,a,ln,en,q,{})}}export{cn as default};
