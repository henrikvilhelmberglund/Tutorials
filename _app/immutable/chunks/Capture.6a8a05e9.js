import{S as H,i as S,s as q,q as k,k as m,r as d,l as g,m as h,h as c,b as f,D as _,T as v,H as $,Q as J,y as T,z,A,g as C,d as P,B,C as F,E as G,F as Q,G as U,U as K,e as w,V as L}from"./index.0b5cc0d7.js";import{E as M}from"./Example.18c27029.js";function N(o){let s,e,t,n,a,l,i,b,r,x,E,y;return{c(){s=k(`Without |capture
`),e=m("div"),t=k(`Parent
`),n=m("div"),a=k("Child"),l=k(`
With |capture
`),i=m("div"),b=k(`Parent
`),r=m("div"),x=k("Child")},l(p){s=d(p,`Without |capture
`),e=g(p,"DIV",{});var u=h(e);t=d(u,`Parent
`),n=g(u,"DIV",{});var D=h(n);a=d(D,"Child"),D.forEach(c),u.forEach(c),l=d(p,`
With |capture
`),i=g(p,"DIV",{});var W=h(i);b=d(W,`Parent
`),r=g(W,"DIV",{});var V=h(r);x=d(V,"Child"),V.forEach(c),W.forEach(c)},m(p,u){f(p,s,u),f(p,e,u),_(e,t),_(e,n),_(n,a),f(p,l,u),f(p,i,u),_(i,b),_(i,r),_(r,x),E||(y=[v(n,"click",o[0]),v(e,"click",o[1]),v(r,"click",o[2]),v(i,"click",o[3],!0)],E=!0)},p:$,i:$,o:$,d(p){p&&c(s),p&&c(e),p&&c(l),p&&c(i),E=!1,J(y)}}}function O(o){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class R extends H{constructor(s){super(),S(this,s,O,N,q,{})}}const X=o=>({}),I=o=>({slot:"example"}),Y=o=>({}),j=o=>({slot:"code"});function Z(o){let s,e;return s=new R({}),{c(){T(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,n){A(s,t,n),e=!0},i(t){e||(C(s.$$.fragment,t),e=!0)},o(t){P(s.$$.fragment,t),e=!1},d(t){B(s,t)}}}function nn(o){let s;const e=o[0].default,t=F(e,o,o[1],I),n=t||Z();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,l){n&&n.m(a,l),s=!0},p(a,l){t&&t.p&&(!s||l&2)&&G(t,e,a,a[1],s?U(e,a[1],l,X):Q(a[1]),I)},i(a){s||(C(n,a),s=!0)},o(a){P(n,a),s=!1},d(a){n&&n.d(a)}}}function an(o){let s,e=`Without |capture
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Child" then "Parent" --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

With |capture
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click|capture=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Parent" then "Child" because of |capture --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){s=new K(!1),t=w(),this.h()},l(n){s=L(n,!1),t=w(),this.h()},h(){s.a=t},m(n,a){s.m(e,n,a),f(n,t,a)},p:$,d(n){n&&c(t),n&&s.d()}}}function sn(o){let s;const e=o[0].default,t=F(e,o,o[1],j),n=t||an();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,l){n&&n.m(a,l),s=!0},p(a,l){t&&t.p&&(!s||l&2)&&G(t,e,a,a[1],s?U(e,a[1],l,Y):Q(a[1]),j)},i(a){s||(C(n,a),s=!0)},o(a){P(n,a),s=!1},d(a){n&&n.d(a)}}}function tn(o){let s,e,t;return e=new M({props:{src:String.raw`Without |capture
<div on:click={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Child" then "Parent" -->
Child
</div>
</div>
With |capture
<div on:click|capture={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Parent" then "Child" because of |capture -->
Child
</div>
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[sn],example:[nn]},$$scope:{ctx:o}}}),{c(){s=m("div"),T(e.$$.fragment)},l(n){s=g(n,"DIV",{});var a=h(s);z(e.$$.fragment,a),a.forEach(c)},m(n,a){f(n,s,a),A(e,s,null),t=!0},p(n,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:n}),e.$set(l)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){P(e.$$.fragment,n),t=!1},d(n){n&&c(s),B(e)}}}function en(o,s,e){let{$$slots:t={},$$scope:n}=s;return o.$$set=a=>{"$$scope"in a&&e(1,n=a.$$scope)},[t,n]}class pn extends H{constructor(s){super(),S(this,s,en,tn,q,{})}}export{pn as default};