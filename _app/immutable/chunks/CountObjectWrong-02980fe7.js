var x=Object.freeze,J=Object.defineProperty;var E=(o,a)=>x(J(o,"raw",{value:x(a||o.slice())}));import{S as q,i as H,s as I,k as f,q as $,a as W,l as _,m,r as j,h as l,c as B,b as r,D as v,N as D,u as K,B as O,Q as L,w as U,x as V,y as z,f as d,t as g,z as F,C as G,E as P,F as Q,G as A,O as R,e as C,P as X}from"./index-bc81051f.js";import{E as Y}from"./Example-db4caf26.js";function Z(o){let a,e=o[0].count+"",t,s,n,p,k,i,b,h,y;return{c(){a=f("div"),t=$(e),s=W(),n=f("button"),p=$("This does not update the DOM"),k=W(),i=f("button"),b=$("But this will trigger the update (assigned in the function)")},l(c){a=_(c,"DIV",{});var u=m(a);t=j(u,e),u.forEach(l),s=B(c),n=_(c,"BUTTON",{});var w=m(n);p=j(w,"This does not update the DOM"),w.forEach(l),k=B(c),i=_(c,"BUTTON",{});var T=m(i);b=j(T,"But this will trigger the update (assigned in the function)"),T.forEach(l)},m(c,u){r(c,a,u),v(a,t),r(c,s,u),r(c,n,u),v(n,p),r(c,k,u),r(c,i,u),v(i,b),h||(y=[D(n,"click",o[3]),D(i,"click",o[4])],h=!0)},p(c,[u]){u&1&&e!==(e=c[0].count+"")&&K(t,e)},i:O,o:O,d(c){c&&l(a),c&&l(s),c&&l(n),c&&l(k),c&&l(i),h=!1,L(y)}}}function nn(o,a,e){let t={count:0},s=t;function n(){s.count++}function p(){e(0,t.foo=1,t)}return[t,n,p,()=>n(),()=>p()]}class sn extends q{constructor(a){super(),H(this,a,nn,Z,I,{})}}const an=o=>({}),M=o=>({slot:"example"}),tn=o=>({}),N=o=>({slot:"code"});function en(o){let a,e;return a=new sn({}),{c(){U(a.$$.fragment)},l(t){V(a.$$.fragment,t)},m(t,s){z(a,t,s),e=!0},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){g(a.$$.fragment,t),e=!1},d(t){F(a,t)}}}function on(o){let a;const e=o[0].default,t=G(e,o,o[1],M),s=t||en();return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,p){s&&s.m(n,p),a=!0},p(n,p){t&&t.p&&(!a||p&2)&&P(t,e,n,n[1],a?A(e,n[1],p,an):Q(n[1]),M)},i(n){a||(d(s,n),a=!0)},o(n){g(s,n),a=!1},d(n){s&&s.d(n)}}}function pn(o){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> myObj <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  
  <span class="token keyword">function</span> <span class="token function">incrementWrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myObj<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">assignToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>count<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token function">incrementWrong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>This does not update the DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token function">assignToObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>But this will trigger the update (assigned in the function)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>`,t;return{c(){a=new R(!1),t=C(),this.h()},l(s){a=X(s,!1),t=C(),this.h()},h(){a.a=t},m(s,n){a.m(e,s,n),r(s,t,n)},p:O,d(s){s&&l(t),s&&a.d()}}}function cn(o){let a;const e=o[0].default,t=G(e,o,o[1],N),s=t||pn();return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,p){s&&s.m(n,p),a=!0},p(n,p){t&&t.p&&(!a||p&2)&&P(t,e,n,n[1],a?A(e,n[1],p,tn):Q(n[1]),N)},i(n){a||(d(s,n),a=!0)},o(n){g(s,n),a=!1},d(n){s&&s.d(n)}}}var S;function ln(o){let a,e,t;return e=new Y({props:{src:String.raw(S||(S=E([`<script>
let obj = {
count: 0
};
let myObj = obj;

function incrementWrong() {
myObj.count++;
}
function assignToObj() {
obj.foo = 1;
}
<\/script>
<div>{obj.count}</div>
<button on:click={()=>incrementWrong()}>This does not update the DOM</button>
<button on:click={()=>assignToObj()}>But this will trigger the update (assigned in the function)</button>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[cn],example:[on]},$$scope:{ctx:o}}}),{c(){a=f("div"),U(e.$$.fragment)},l(s){a=_(s,"DIV",{});var n=m(a);V(e.$$.fragment,n),n.forEach(l)},m(s,n){r(s,a,n),z(e,a,null),t=!0},p(s,[n]){const p={};n&2&&(p.$$scope={dirty:n,ctx:s}),e.$set(p)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){g(e.$$.fragment,s),t=!1},d(s){s&&l(a),F(e)}}}function un(o,a,e){let{$$slots:t={},$$scope:s}=a;return o.$$set=n=>{"$$scope"in n&&e(1,s=n.$$scope)},[t,s]}class _n extends q{constructor(a){super(),H(this,a,un,ln,I,{})}}export{_n as default};
