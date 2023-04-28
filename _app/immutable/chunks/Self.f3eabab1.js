import{S as j,i as H,s as q,q as k,k as m,r as d,l as g,m as h,h as c,b as _,D as f,R as v,a0 as J,H as $,V as K,y as T,z,A,g as C,d as P,B,C as F,E as G,F as R,G as U,T as L,e as V,U as M}from"./index.5815ca79.js";import{E as N}from"./Example.f1c5c165.js";function O(l){let a,e,t,n,s,o,i,b,r,x,E,y;return{c(){a=k(`Without |self
`),e=m("div"),t=k(`Parent
`),n=m("div"),s=k("Child"),o=k(`
With |self
`),i=m("div"),b=k(`Parent
`),r=m("div"),x=k("Child")},l(p){a=d(p,`Without |self
`),e=g(p,"DIV",{});var u=h(e);t=d(u,`Parent
`),n=g(u,"DIV",{});var w=h(n);s=d(w,"Child"),w.forEach(c),u.forEach(c),o=d(p,`
With |self
`),i=g(p,"DIV",{});var W=h(i);b=d(W,`Parent
`),r=g(W,"DIV",{});var D=h(r);x=d(D,"Child"),D.forEach(c),W.forEach(c)},m(p,u){_(p,a,u),_(p,e,u),f(e,t),f(e,n),f(n,s),_(p,o,u),_(p,i,u),f(i,b),f(i,r),f(r,x),E||(y=[v(n,"click",l[0]),v(e,"click",l[1]),v(r,"click",l[2]),v(i,"click",J(l[3]))],E=!0)},p:$,i:$,o:$,d(p){p&&c(a),p&&c(e),p&&c(o),p&&c(i),E=!1,K(y)}}}function Q(l){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class X extends j{constructor(a){super(),H(this,a,Q,O,q,{})}}const Y=l=>({}),I=l=>({slot:"example"}),Z=l=>({}),S=l=>({slot:"code"});function nn(l){let a,e;return a=new X({}),{c(){T(a.$$.fragment)},l(t){z(a.$$.fragment,t)},m(t,n){A(a,t,n),e=!0},i(t){e||(C(a.$$.fragment,t),e=!0)},o(t){P(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function sn(l){let a;const e=l[0].default,t=F(e,l,l[1],I),n=t||nn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),a=!0},p(s,o){t&&t.p&&(!a||o&2)&&G(t,e,s,s[1],a?U(e,s[1],o,Y):R(s[1]),I)},i(s){a||(C(n,s),a=!0)},o(s){P(n,s),a=!1},d(s){n&&n.d(s)}}}function an(l){let a,e=`Without |self
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){a=new L(!1),t=V(),this.h()},l(n){a=M(n,!1),t=V(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),_(n,t,s)},p:$,d(n){n&&c(t),n&&a.d()}}}function tn(l){let a;const e=l[0].default,t=F(e,l,l[1],S),n=t||an();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),a=!0},p(s,o){t&&t.p&&(!a||o&2)&&G(t,e,s,s[1],a?U(e,s[1],o,Z):R(s[1]),S)},i(s){a||(C(n,s),a=!0)},o(s){P(n,s),a=!1},d(s){n&&n.d(s)}}}function en(l){let a,e,t;return e=new N({props:{src:String.raw`Without |self
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
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[tn],example:[sn]},$$scope:{ctx:l}}}),{c(){a=m("div"),T(e.$$.fragment)},l(n){a=g(n,"DIV",{});var s=h(a);z(e.$$.fragment,s),s.forEach(c)},m(n,s){_(n,a,s),A(e,a,null),t=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){P(e.$$.fragment,n),t=!1},d(n){n&&c(a),B(e)}}}function ln(l,a,e){let{$$slots:t={},$$scope:n}=a;return l.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[t,n]}class cn extends j{constructor(a){super(),H(this,a,ln,en,q,{})}}export{cn as default};
