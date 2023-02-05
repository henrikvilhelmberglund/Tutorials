import{S as B,i as H,s as z,q as _,k as m,a as J,r as d,l as g,m as h,h as c,c as K,b as r,D as f,N as P,V as L,B as C,Q as M,w as F,x as G,y as N,f as b,t as x,z as O,C as Q,E as R,F as T,G as A,O as U,e as S,P as X}from"./index-bc81051f.js";import{E as Y}from"./Example-db4caf26.js";function Z(e){let s,o,t,n,a,l,v,$,u,E,k,W,w,D;return{c(){s=_(`Without |stopPropagation
`),o=m("div"),t=_(`Parent
`),n=m("div"),a=_("Child"),l=J(),v=m("br"),$=_(`
With |stopPropagation
`),u=m("div"),E=_(`Parent
`),k=m("div"),W=_("Child")},l(p){s=d(p,`Without |stopPropagation
`),o=g(p,"DIV",{});var i=h(o);t=d(i,`Parent
`),n=g(i,"DIV",{});var V=h(n);a=d(V,"Child"),V.forEach(c),i.forEach(c),l=K(p),v=g(p,"BR",{}),$=d(p,`
With |stopPropagation
`),u=g(p,"DIV",{});var y=h(u);E=d(y,`Parent
`),k=g(y,"DIV",{});var I=h(k);W=d(I,"Child"),I.forEach(c),y.forEach(c)},m(p,i){r(p,s,i),r(p,o,i),f(o,t),f(o,n),f(n,a),r(p,l,i),r(p,v,i),r(p,$,i),r(p,u,i),f(u,E),f(u,k),f(k,W),w||(D=[P(n,"click",e[0]),P(o,"click",e[1]),P(k,"click",L(e[2])),P(u,"click",e[3])],w=!0)},p:C,i:C,o:C,d(p){p&&c(s),p&&c(o),p&&c(l),p&&c(v),p&&c($),p&&c(u),w=!1,M(D)}}}function nn(e){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class an extends B{constructor(s){super(),H(this,s,nn,Z,z,{})}}const sn=e=>({}),j=e=>({slot:"example"}),tn=e=>({}),q=e=>({slot:"code"});function on(e){let s,o;return s=new an({}),{c(){F(s.$$.fragment)},l(t){G(s.$$.fragment,t)},m(t,n){N(s,t,n),o=!0},i(t){o||(b(s.$$.fragment,t),o=!0)},o(t){x(s.$$.fragment,t),o=!1},d(t){O(s,t)}}}function en(e){let s;const o=e[0].default,t=Q(o,e,e[1],j),n=t||on();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,l){n&&n.m(a,l),s=!0},p(a,l){t&&t.p&&(!s||l&2)&&R(t,o,a,a[1],s?A(o,a[1],l,sn):T(a[1]),j)},i(a){s||(b(n,a),s=!0)},o(a){x(n,a),s=!1},d(a){n&&n.d(a)}}}function pn(e){let s,o=`Without |stopPropagation
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is "Child" then "Parent" --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

With |stopPropagation
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Parent"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  Parent
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click|stopPropagation=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Child"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- output is only "Child" since we stopped propagation --></span>
    Child
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){s=new U(!1),t=S(),this.h()},l(n){s=X(n,!1),t=S(),this.h()},h(){s.a=t},m(n,a){s.m(o,n,a),r(n,t,a)},p:C,d(n){n&&c(t),n&&s.d()}}}function ln(e){let s;const o=e[0].default,t=Q(o,e,e[1],q),n=t||pn();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,l){n&&n.m(a,l),s=!0},p(a,l){t&&t.p&&(!s||l&2)&&R(t,o,a,a[1],s?A(o,a[1],l,tn):T(a[1]),q)},i(a){s||(b(n,a),s=!0)},o(a){x(n,a),s=!1},d(a){n&&n.d(a)}}}function cn(e){let s,o,t;return o=new Y({props:{src:String.raw`Without |stopPropagation
<div on:click={() => console.log("Parent")}>
Parent
<div on:click={() => console.log("Child")}>
<!-- output is "Child" then "Parent" -->
Child
</div>
</div>
<br>
With |stopPropagation
<div on:click={() => console.log("Parent")}>
Parent
<div on:click|stopPropagation={() => console.log("Child")}>
<!-- output is only "Child" since we stopped propagation -->
Child
</div>
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[ln],example:[en]},$$scope:{ctx:e}}}),{c(){s=m("div"),F(o.$$.fragment)},l(n){s=g(n,"DIV",{});var a=h(s);G(o.$$.fragment,a),a.forEach(c)},m(n,a){r(n,s,a),N(o,s,null),t=!0},p(n,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:n}),o.$set(l)},i(n){t||(b(o.$$.fragment,n),t=!0)},o(n){x(o.$$.fragment,n),t=!1},d(n){n&&c(s),O(o)}}}function un(e,s,o){let{$$slots:t={},$$scope:n}=s;return e.$$set=a=>{"$$scope"in a&&o(1,n=a.$$scope)},[t,n]}class _n extends B{constructor(s){super(),H(this,s,un,cn,z,{})}}export{_n as default};
