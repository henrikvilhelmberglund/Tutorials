var x=Object.freeze,L=Object.defineProperty;var T=(e,s)=>x(L(e,"raw",{value:x(s||e.slice())}));import{S as O,i as V,s as z,k as b,q as k,a as j,l as v,m as y,r as f,h as u,c as C,b as i,D,T as B,u as H,H as h,Q as M,y as A,z as F,A as G,g as m,d,B as I,C as Q,E as W,F as J,G as K,U as P,e as S,V as R}from"./index.0b5cc0d7.js";import{E as X}from"./Example.18c27029.js";function Y(e){let s,o,t,n,a,c,_,r,$,g,w;return{c(){s=b("button"),o=k("-"),t=j(),n=k(e[0]),a=k(" * 2 = "),c=k(e[1]),_=j(),r=b("button"),$=k("+")},l(p){s=v(p,"BUTTON",{});var l=y(s);o=f(l,"-"),l.forEach(u),t=C(p),n=f(p,e[0]),a=f(p," * 2 = "),c=f(p,e[1]),_=C(p),r=v(p,"BUTTON",{});var E=y(r);$=f(E,"+"),E.forEach(u)},m(p,l){i(p,s,l),D(s,o),i(p,t,l),i(p,n,l),i(p,a,l),i(p,c,l),i(p,_,l),i(p,r,l),D(r,$),g||(w=[B(s,"click",e[3]),B(r,"click",e[2])],g=!0)},p(p,[l]){l&1&&H(n,p[0]),l&2&&H(c,p[1])},i:h,o:h,d(p){p&&u(s),p&&u(t),p&&u(n),p&&u(a),p&&u(c),p&&u(_),p&&u(r),g=!1,M(w)}}}function Z(e,s,o){let t,n=1;function a(){o(0,n++,n)}function c(){o(0,n--,n)}return e.$$.update=()=>{e.$$.dirty&1&&o(1,t=n*2),e.$$.dirty&1&&console.log(n)},[n,t,a,c]}class nn extends O{constructor(s){super(),V(this,s,Z,Y,z,{})}}const sn=e=>({}),U=e=>({slot:"example"}),an=e=>({}),q=e=>({slot:"code"});function tn(e){let s,o;return s=new nn({}),{c(){A(s.$$.fragment)},l(t){F(s.$$.fragment,t)},m(t,n){G(s,t,n),o=!0},i(t){o||(m(s.$$.fragment,t),o=!0)},o(t){d(s.$$.fragment,t),o=!1},d(t){I(s,t)}}}function en(e){let s;const o=e[0].default,t=Q(o,e,e[1],U),n=t||tn();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,c){n&&n.m(a,c),s=!0},p(a,c){t&&t.p&&(!s||c&2)&&W(t,o,a,a[1],s?K(o,a[1],c,sn):J(a[1]),U)},i(a){s||(m(n,a),s=!0)},o(a){d(n,a),s=!1},d(a){n&&n.d(a)}}}function on(e){let s,o=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> double <span class="token operator">=</span> count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span> * 2 = <span class="token language-javascript"><span class="token punctuation">{</span>double<span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>`,t;return{c(){s=new P(!1),t=S(),this.h()},l(n){s=R(n,!1),t=S(),this.h()},h(){s.a=t},m(n,a){s.m(o,n,a),i(n,t,a)},p:h,d(n){n&&u(t),n&&s.d()}}}function pn(e){let s;const o=e[0].default,t=Q(o,e,e[1],q),n=t||on();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,c){n&&n.m(a,c),s=!0},p(a,c){t&&t.p&&(!s||c&2)&&W(t,o,a,a[1],s?K(o,a[1],c,an):J(a[1]),q)},i(a){s||(m(n,a),s=!0)},o(a){d(n,a),s=!1},d(a){n&&n.d(a)}}}var N;function cn(e){let s,o,t;return o=new X({props:{src:String.raw(N||(N=T([`<script>
let count = 1;
$: double = count * 2;
$: console.log(count);
function increment() {
count++;
}
function decrement() {
count--;
}
<\/script>
<button on:click={decrement}>-</button>
{count} * 2 = {double}
<button on:click={increment}>+</button>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[pn],example:[en]},$$scope:{ctx:e}}}),{c(){s=b("div"),A(o.$$.fragment)},l(n){s=v(n,"DIV",{});var a=y(s);F(o.$$.fragment,a),a.forEach(u)},m(n,a){i(n,s,a),G(o,s,null),t=!0},p(n,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:n}),o.$set(c)},i(n){t||(m(o.$$.fragment,n),t=!0)},o(n){d(o.$$.fragment,n),t=!1},d(n){n&&u(s),I(o)}}}function ln(e,s,o){let{$$slots:t={},$$scope:n}=s;return e.$$set=a=>{"$$scope"in a&&o(1,n=a.$$scope)},[t,n]}class fn extends O{constructor(s){super(),V(this,s,ln,cn,z,{})}}export{fn as default};