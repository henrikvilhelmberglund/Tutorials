var E=Object.freeze,L=Object.defineProperty;var x=(o,s)=>E(L(o,"raw",{value:E(s||o.slice())}));import{S as N,i as O,s as V,k as $,q as k,a as B,l as v,m as w,r as f,h as u,c as j,b as i,D as S,T as U,u as A,H as y,Q as M,t as P,y as z,z as F,A as G,g as _,d,B as I,C as Q,E as W,F as J,G as K,U as R,e as H,V as X}from"./index.0b5cc0d7.js";import{E as Y}from"./Example.18c27029.js";function Z(o){let s,e,t,n,a,c,m,r,g,b,h;return{c(){s=$("button"),e=k("-"),t=B(),n=k(o[0]),a=k(" * 2 = "),c=k(o[1]),m=B(),r=$("button"),g=k("+")},l(p){s=v(p,"BUTTON",{});var l=w(s);e=f(l,"-"),l.forEach(u),t=j(p),n=f(p,o[0]),a=f(p," * 2 = "),c=f(p,o[1]),m=j(p),r=v(p,"BUTTON",{});var T=w(r);g=f(T,"+"),T.forEach(u)},m(p,l){i(p,s,l),S(s,e),i(p,t,l),i(p,n,l),i(p,a,l),i(p,c,l),i(p,m,l),i(p,r,l),S(r,g),b||(h=[U(s,"click",o[3]),U(r,"click",o[2])],b=!0)},p(p,[l]){l&1&&A(n,p[0]),l&2&&A(c,p[1])},i:y,o:y,d(p){p&&u(s),p&&u(t),p&&u(n),p&&u(a),p&&u(c),p&&u(m),p&&u(r),b=!1,M(h)}}}function nn(o,s,e){let t,n=1;async function a(){e(0,n++,n),console.log("Before tick:"+t),await P(),console.log("After tick:"+t)}function c(){e(0,n--,n)}return o.$$.update=()=>{o.$$.dirty&1&&e(1,t=n*2)},[n,t,a,c]}class sn extends N{constructor(s){super(),O(this,s,nn,Z,V,{})}}const an=o=>({}),q=o=>({slot:"example"}),tn=o=>({}),C=o=>({slot:"code"});function en(o){let s,e;return s=new sn({}),{c(){z(s.$$.fragment)},l(t){F(s.$$.fragment,t)},m(t,n){G(s,t,n),e=!0},i(t){e||(_(s.$$.fragment,t),e=!0)},o(t){d(s.$$.fragment,t),e=!1},d(t){I(s,t)}}}function on(o){let s;const e=o[0].default,t=Q(e,o,o[1],q),n=t||en();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,c){n&&n.m(a,c),s=!0},p(a,c){t&&t.p&&(!s||c&2)&&W(t,e,a,a[1],s?K(e,a[1],c,an):J(a[1]),q)},i(a){s||(_(n,a),s=!0)},o(a){d(n,a),s=!1},d(a){n&&n.d(a)}}}function pn(o){let s,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> tick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> double <span class="token operator">=</span> count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// This will log the previous value because it did not update yet</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Before tick:"</span> <span class="token operator">+</span> double<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// but we can use Svelte's tick() to wait until it is updated</span>
    <span class="token keyword">await</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"After tick:"</span> <span class="token operator">+</span> double<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span> * 2 = <span class="token language-javascript"><span class="token punctuation">{</span>double<span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>`,t;return{c(){s=new R(!1),t=H(),this.h()},l(n){s=X(n,!1),t=H(),this.h()},h(){s.a=t},m(n,a){s.m(e,n,a),i(n,t,a)},p:y,d(n){n&&u(t),n&&s.d()}}}function cn(o){let s;const e=o[0].default,t=Q(e,o,o[1],C),n=t||pn();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,c){n&&n.m(a,c),s=!0},p(a,c){t&&t.p&&(!s||c&2)&&W(t,e,a,a[1],s?K(e,a[1],c,tn):J(a[1]),C)},i(a){s||(_(n,a),s=!0)},o(a){d(n,a),s=!1},d(a){n&&n.d(a)}}}var D;function ln(o){let s,e,t;return e=new Y({props:{src:String.raw(D||(D=x([`<script>
import { tick } from "svelte";
let count = 1;
$: double = count * 2;
async function increment() {
count++;
// This will log the previous value because it did not update yet
console.log("Before tick:" + double);
// but we can use Svelte's tick() to wait until it is updated
await tick();
console.log("After tick:" + double);
}
function decrement() {
count--;
}
<\/script>
<button on:click={decrement}>-</button>
{count} * 2 = {double}
<button on:click={increment}>+</button>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[cn],example:[on]},$$scope:{ctx:o}}}),{c(){s=$("div"),z(e.$$.fragment)},l(n){s=v(n,"DIV",{});var a=w(s);F(e.$$.fragment,a),a.forEach(u)},m(n,a){i(n,s,a),G(e,s,null),t=!0},p(n,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:n}),e.$set(c)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&u(s),I(e)}}}function un(o,s,e){let{$$slots:t={},$$scope:n}=s;return o.$$set=a=>{"$$scope"in a&&e(1,n=a.$$scope)},[t,n]}class mn extends N{constructor(s){super(),O(this,s,un,ln,V,{})}}export{mn as default};