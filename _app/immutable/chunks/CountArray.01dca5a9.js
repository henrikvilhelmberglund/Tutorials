var $=Object.freeze,I=Object.defineProperty;var h=(o,n)=>$(I(o,"raw",{value:$(n||o.slice())}));import{s as C,f as m,l as V,a as q,g as d,h as w,m as z,d as l,c as B,u as U,i,v as W,X,z as r,r as S,w as E,x as N,y as O,Y,e as v,Z}from"./scheduler.a7cd560e.js";import{S as j,i as J,b as T,d as A,m as D,a as f,t as _,e as H}from"./index.396264e7.js";import{E as F}from"./Example.e02fc6c1.js";function G(o){let n,e=JSON.stringify(o[0])+"",s,t,a,p="Click me",k,g;return{c(){n=m("div"),s=V(e),t=q(),a=m("button"),a.textContent=p},l(c){n=d(c,"DIV",{});var u=w(n);s=z(u,e),u.forEach(l),t=B(c),a=d(c,"BUTTON",{["data-svelte-h"]:!0}),U(a)!=="svelte-1dchdp2"&&(a.textContent=p)},m(c,u){i(c,n,u),W(n,s),i(c,t,u),i(c,a,u),k||(g=X(a,"click",o[2]),k=!0)},p:r,i:r,o:r,d(c){c&&(l(n),l(t),l(a)),k=!1,g()}}}function K(o){let n=[];function e(){n.push(1)}return[n,e,()=>e()]}class L extends j{constructor(n){super(),J(this,n,K,G,C,{})}}const M=o=>({}),y=o=>({slot:"example"}),P=o=>({}),b=o=>({slot:"code"});function Q(o){let n,e;return n=new L({}),{c(){T(n.$$.fragment)},l(s){A(n.$$.fragment,s)},m(s,t){D(n,s,t),e=!0},i(s){e||(f(n.$$.fragment,s),e=!0)},o(s){_(n.$$.fragment,s),e=!1},d(s){H(n,s)}}}function R(o){let n;const e=o[0].default,s=S(e,o,o[1],y),t=s||Q();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,p){t&&t.m(a,p),n=!0},p(a,p){s&&s.p&&(!n||p&2)&&E(s,e,a,a[1],n?O(e,a[1],p,M):N(a[1]),y)},i(a){n||(f(t,a),n=!0)},o(a){_(t,a),n=!1},d(a){t&&t.d(a)}}}function nn(o){let n,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>`,s;return{c(){n=new Y(!1),s=v(),this.h()},l(t){n=Z(t,!1),s=v(),this.h()},h(){n.a=s},m(t,a){n.m(e,t,a),i(t,s,a)},p:r,d(t){t&&(l(s),n.d())}}}function an(o){let n;const e=o[0].default,s=S(e,o,o[1],b),t=s||nn();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,p){t&&t.m(a,p),n=!0},p(a,p){s&&s.p&&(!n||p&2)&&E(s,e,a,a[1],n?O(e,a[1],p,P):N(a[1]),b)},i(a){n||(f(t,a),n=!0)},o(a){_(t,a),n=!1},d(a){t&&t.d(a)}}}var x;function tn(o){let n,e,s;return e=new F({props:{src:String.raw(x||(x=h([`<script>
let array = []
function increment() {
array.push(1);
}
<\/script>
<div>{JSON.stringify(array)}</div>
<button on:click={()=>increment()}>Click me</button>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[an],example:[R]},$$scope:{ctx:o}}}),{c(){n=m("div"),T(e.$$.fragment)},l(t){n=d(t,"DIV",{});var a=w(n);A(e.$$.fragment,a),a.forEach(l)},m(t,a){i(t,n,a),D(e,n,null),s=!0},p(t,[a]){const p={};a&2&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){t&&l(n),H(e)}}}function sn(o,n,e){let{$$slots:s={},$$scope:t}=n;return o.$$set=a=>{"$$scope"in a&&e(1,t=a.$$scope)},[s,t]}class ln extends j{constructor(n){super(),J(this,n,sn,tn,C,{})}}export{ln as default};
