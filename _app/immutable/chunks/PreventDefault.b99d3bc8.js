var _=Object.freeze,z=Object.defineProperty;var m=(l,t)=>_(z(l,"raw",{value:_(t||l.slice())}));import{s as $,f as v,l as H,g as x,u as P,m as B,i,X as I,a4 as N,z as p,d as c,h as O,r as b,w,x as C,y,Y as U,e as k,Z as V}from"./scheduler.a7cd560e.js";import{S as D,i as E,b as S,d as T,m as j,a as u,t as r,e as q}from"./index.396264e7.js";import{E as W}from"./Example.e02fc6c1.js";function X(l){let t,e="Click me",a,n,s;return{c(){t=v("button"),t.textContent=e,a=H(" (will show in the console)")},l(o){t=x(o,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-1pqvzih"&&(t.textContent=e),a=B(o," (will show in the console)")},m(o,f){i(o,t,f),i(o,a,f),n||(s=I(t,"click",N(Y)),n=!0)},p,i:p,o:p,d(o){o&&(c(t),c(a)),n=!1,s()}}}function Y(){console.log("you clicked!")}class Z extends D{constructor(t){super(),E(this,t,null,X,$,{})}}const A=l=>({}),d=l=>({slot:"example"}),F=l=>({}),g=l=>({slot:"code"});function G(l){let t,e;return t=new Z({}),{c(){S(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,n){j(t,a,n),e=!0},i(a){e||(u(t.$$.fragment,a),e=!0)},o(a){r(t.$$.fragment,a),e=!1},d(a){q(t,a)}}}function J(l){let t;const e=l[0].default,a=b(e,l,l[1],d),n=a||G();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&w(a,e,s,s[1],t?y(e,s[1],o,A):C(s[1]),d)},i(s){t||(u(n,s),t=!0)},o(s){r(n,s),t=!1},d(s){n&&n.d(s)}}}function K(l){let t,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"you clicked!"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click|preventDefault=</span><span class="token language-javascript"><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> (will show in the console)`,a;return{c(){t=new U(!1),a=k(),this.h()},l(n){t=V(n,!1),a=k(),this.h()},h(){t.a=a},m(n,s){t.m(e,n,s),i(n,a,s)},p,d(n){n&&(c(a),t.d())}}}function L(l){let t;const e=l[0].default,a=b(e,l,l[1],g),n=a||K();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&w(a,e,s,s[1],t?y(e,s[1],o,F):C(s[1]),g)},i(s){t||(u(n,s),t=!0)},o(s){r(n,s),t=!1},d(s){n&&n.d(s)}}}var h;function M(l){let t,e,a;return e=new W({props:{src:String.raw(h||(h=m([`<script>
function handleClick() {
console.log("you clicked!")
}
<\/script>
<button on:click|preventDefault={handleClick}>Click me</button> (will show in the console)`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[L],example:[J]},$$scope:{ctx:l}}}),{c(){t=v("div"),S(e.$$.fragment)},l(n){t=x(n,"DIV",{});var s=O(t);T(e.$$.fragment,s),s.forEach(c)},m(n,s){i(n,t,s),j(e,t,null),a=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){a||(u(e.$$.fragment,n),a=!0)},o(n){r(e.$$.fragment,n),a=!1},d(n){n&&c(t),q(e)}}}function Q(l,t,e){let{$$slots:a={},$$scope:n}=t;return l.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[a,n]}class at extends D{constructor(t){super(),E(this,t,Q,M,$,{})}}export{at as default};
