import{s as H,l as m,f as d,a as G,m as h,g as _,h as y,u as D,d as c,c as J,i as r,v,X as $,a5 as K,z as P,H as L,r as q,w as z,x as B,y as R,Y as M,e as I,Z as N}from"./scheduler.a7cd560e.js";import{S as T,i as X,b as Y,d as Z,m as A,a as C,t as x,e as F}from"./index.396264e7.js";import{E as O}from"./Example.e02fc6c1.js";function Q(o){let a,e,t,n,s="Child",p,f,g,u,b,k,E="Child",W,j;return{c(){a=m(`Without |stopPropagation
`),e=d("div"),t=m(`Parent
`),n=d("div"),n.textContent=s,p=G(),f=d("br"),g=m(`
With |stopPropagation
`),u=d("div"),b=m(`Parent
`),k=d("div"),k.textContent=E},l(l){a=h(l,`Without |stopPropagation
`),e=_(l,"DIV",{});var i=y(e);t=h(i,`Parent
`),n=_(i,"DIV",{["data-svelte-h"]:!0}),D(n)!=="svelte-1tlhb"&&(n.textContent=s),i.forEach(c),p=J(l),f=_(l,"BR",{}),g=h(l,`
With |stopPropagation
`),u=_(l,"DIV",{});var w=y(u);b=h(w,`Parent
`),k=_(w,"DIV",{["data-svelte-h"]:!0}),D(k)!=="svelte-1nblucj"&&(k.textContent=E),w.forEach(c)},m(l,i){r(l,a,i),r(l,e,i),v(e,t),v(e,n),r(l,p,i),r(l,f,i),r(l,g,i),r(l,u,i),v(u,b),v(u,k),W||(j=[$(n,"click",o[0]),$(e,"click",o[1]),$(k,"click",K(o[2])),$(u,"click",o[3])],W=!0)},p:P,i:P,o:P,d(l){l&&(c(a),c(e),c(p),c(f),c(g),c(u)),W=!1,L(j)}}}function U(o){return[()=>console.log("Child"),()=>console.log("Parent"),()=>console.log("Child"),()=>console.log("Parent")]}class nn extends T{constructor(a){super(),X(this,a,U,Q,H,{})}}const an=o=>({}),S=o=>({slot:"example"}),sn=o=>({}),V=o=>({slot:"code"});function tn(o){let a,e;return a=new nn({}),{c(){Y(a.$$.fragment)},l(t){Z(a.$$.fragment,t)},m(t,n){A(a,t,n),e=!0},i(t){e||(C(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){F(a,t)}}}function en(o){let a;const e=o[0].default,t=q(e,o,o[1],S),n=t||tn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,p){n&&n.m(s,p),a=!0},p(s,p){t&&t.p&&(!a||p&2)&&z(t,e,s,s[1],a?R(e,s[1],p,an):B(s[1]),S)},i(s){a||(C(n,s),a=!0)},o(s){x(n,s),a=!1},d(s){n&&n.d(s)}}}function on(o){let a,e=`Without |stopPropagation
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){a=new M(!1),t=I(),this.h()},l(n){a=N(n,!1),t=I(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),r(n,t,s)},p:P,d(n){n&&(c(t),a.d())}}}function pn(o){let a;const e=o[0].default,t=q(e,o,o[1],V),n=t||on();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,p){n&&n.m(s,p),a=!0},p(s,p){t&&t.p&&(!a||p&2)&&z(t,e,s,s[1],a?R(e,s[1],p,sn):B(s[1]),V)},i(s){a||(C(n,s),a=!0)},o(s){x(n,s),a=!1},d(s){n&&n.d(s)}}}function ln(o){let a,e,t;return e=new O({props:{src:String.raw`Without |stopPropagation
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
</div>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[pn],example:[en]},$$scope:{ctx:o}}}),{c(){a=d("div"),Y(e.$$.fragment)},l(n){a=_(n,"DIV",{});var s=y(a);Z(e.$$.fragment,s),s.forEach(c)},m(n,s){r(n,a,s),A(e,a,null),t=!0},p(n,[s]){const p={};s&2&&(p.$$scope={dirty:s,ctx:n}),e.$set(p)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){n&&c(a),F(e)}}}function cn(o,a,e){let{$$slots:t={},$$scope:n}=a;return o.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[t,n]}class dn extends T{constructor(a){super(),X(this,a,cn,ln,H,{})}}export{dn as default};
