var y=Object.freeze,F=Object.defineProperty;var x=(e,t)=>y(F(e,"raw",{value:y(t||e.slice())}));import{s as q,f as b,a as T,l as d,g as $,u as C,c as j,m as g,i,X as B,n as S,z as v,d as u,H as G,t as J,h as K,r as z,w as N,x as O,y as D,Y as L,e as E,Z as M}from"./scheduler.a7cd560e.js";import{S as I,i as V,b as W,d as X,m as Y,a as f,t as m,e as Z}from"./index.396264e7.js";import{E as P}from"./Example.e02fc6c1.js";function Q(e){let t,o="-",a,n,s,p,k,r,w="+",_,h;return{c(){t=b("button"),t.textContent=o,a=T(),n=d(e[0]),s=d(" * 2 = "),p=d(e[1]),k=T(),r=b("button"),r.textContent=w},l(c){t=$(c,"BUTTON",{["data-svelte-h"]:!0}),C(t)!=="svelte-1uw3qz6"&&(t.textContent=o),a=j(c),n=g(c,e[0]),s=g(c," * 2 = "),p=g(c,e[1]),k=j(c),r=$(c,"BUTTON",{["data-svelte-h"]:!0}),C(r)!=="svelte-g3ld9c"&&(r.textContent=w)},m(c,l){i(c,t,l),i(c,a,l),i(c,n,l),i(c,s,l),i(c,p,l),i(c,k,l),i(c,r,l),_||(h=[B(t,"click",e[3]),B(r,"click",e[2])],_=!0)},p(c,[l]){l&1&&S(n,c[0]),l&2&&S(p,c[1])},i:v,o:v,d(c){c&&(u(t),u(a),u(n),u(s),u(p),u(k),u(r)),_=!1,G(h)}}}function R(e,t,o){let a,n=1;async function s(){o(0,n++,n),console.log("Before tick:"+a),await J(),console.log("After tick:"+a)}function p(){o(0,n--,n)}return e.$$.update=()=>{e.$$.dirty&1&&o(1,a=n*2)},[n,a,s,p]}class nn extends I{constructor(t){super(),V(this,t,R,Q,q,{})}}const tn=e=>({}),U=e=>({slot:"example"}),sn=e=>({}),A=e=>({slot:"code"});function an(e){let t,o;return t=new nn({}),{c(){W(t.$$.fragment)},l(a){X(t.$$.fragment,a)},m(a,n){Y(t,a,n),o=!0},i(a){o||(f(t.$$.fragment,a),o=!0)},o(a){m(t.$$.fragment,a),o=!1},d(a){Z(t,a)}}}function en(e){let t;const o=e[0].default,a=z(o,e,e[1],U),n=a||an();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,p){n&&n.m(s,p),t=!0},p(s,p){a&&a.p&&(!t||p&2)&&N(a,o,s,s[1],t?D(o,s[1],p,tn):O(s[1]),U)},i(s){t||(f(n,s),t=!0)},o(s){m(n,s),t=!1},d(s){n&&n.d(s)}}}function on(e){let t,o=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>`,a;return{c(){t=new L(!1),a=E(),this.h()},l(n){t=M(n,!1),a=E(),this.h()},h(){t.a=a},m(n,s){t.m(o,n,s),i(n,a,s)},p:v,d(n){n&&(u(a),t.d())}}}function pn(e){let t;const o=e[0].default,a=z(o,e,e[1],A),n=a||on();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,p){n&&n.m(s,p),t=!0},p(s,p){a&&a.p&&(!t||p&2)&&N(a,o,s,s[1],t?D(o,s[1],p,sn):O(s[1]),A)},i(s){t||(f(n,s),t=!0)},o(s){m(n,s),t=!1},d(s){n&&n.d(s)}}}var H;function cn(e){let t,o,a;return o=new P({props:{src:String.raw(H||(H=x([`<script>
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
<button on:click={increment}>+</button>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[pn],example:[en]},$$scope:{ctx:e}}}),{c(){t=b("div"),W(o.$$.fragment)},l(n){t=$(n,"DIV",{});var s=K(t);X(o.$$.fragment,s),s.forEach(u)},m(n,s){i(n,t,s),Y(o,t,null),a=!0},p(n,[s]){const p={};s&2&&(p.$$scope={dirty:s,ctx:n}),o.$set(p)},i(n){a||(f(o.$$.fragment,n),a=!0)},o(n){m(o.$$.fragment,n),a=!1},d(n){n&&u(t),Z(o)}}}function ln(e,t,o){let{$$slots:a={},$$scope:n}=t;return e.$$set=s=>{"$$scope"in s&&o(1,n=s.$$scope)},[a,n]}class mn extends I{constructor(t){super(),V(this,t,ln,cn,q,{})}}export{mn as default};
