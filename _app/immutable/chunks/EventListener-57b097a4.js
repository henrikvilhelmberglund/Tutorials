var _=Object.freeze,N=Object.defineProperty;var m=(l,t)=>_(N(l,"raw",{value:_(t||l.slice())}));import{S as v,i as w,s as x,k as C,q as k,l as y,m as E,r as d,h as c,b as u,D as O,N as z,B as i,w as S,x as T,y as j,f as r,t as f,z as q,C as B,E as D,F as H,G as L,O as F,e as g,P as G}from"./index-bc81051f.js";import{E as I}from"./Example-db4caf26.js";function P(l){let t,e,a,n,s;return{c(){t=C("button"),e=k("Click me"),a=k(" (will show in the console)")},l(o){t=y(o,"BUTTON",{});var p=E(t);e=d(p,"Click me"),p.forEach(c),a=d(o," (will show in the console)")},m(o,p){u(o,t,p),O(t,e),u(o,a,p),n||(s=z(t,"click",U),n=!0)},p:i,i,o:i,d(o){o&&c(t),o&&c(a),n=!1,s()}}}function U(){console.log("you clicked!")}class V extends v{constructor(t){super(),w(this,t,null,P,x,{})}}const W=l=>({}),$=l=>({slot:"example"}),A=l=>({}),h=l=>({slot:"code"});function J(l){let t,e;return t=new V({}),{c(){S(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,n){j(t,a,n),e=!0},i(a){e||(r(t.$$.fragment,a),e=!0)},o(a){f(t.$$.fragment,a),e=!1},d(a){q(t,a)}}}function K(l){let t;const e=l[0].default,a=B(e,l,l[1],$),n=a||J();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&D(a,e,s,s[1],t?L(e,s[1],o,W):H(s[1]),$)},i(s){t||(r(n,s),t=!0)},o(s){f(n,s),t=!1},d(s){n&&n.d(s)}}}function M(l){let t,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"you clicked!"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> (will show in the console)`,a;return{c(){t=new F(!1),a=g(),this.h()},l(n){t=G(n,!1),a=g(),this.h()},h(){t.a=a},m(n,s){t.m(e,n,s),u(n,a,s)},p:i,d(n){n&&c(a),n&&t.d()}}}function Q(l){let t;const e=l[0].default,a=B(e,l,l[1],h),n=a||M();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),t=!0},p(s,o){a&&a.p&&(!t||o&2)&&D(a,e,s,s[1],t?L(e,s[1],o,A):H(s[1]),h)},i(s){t||(r(n,s),t=!0)},o(s){f(n,s),t=!1},d(s){n&&n.d(s)}}}var b;function R(l){let t,e,a;return e=new I({props:{src:String.raw(b||(b=m([`<script>
function handleClick() {
console.log("you clicked!")
}
<\/script>
<button on:click={handleClick}>Click me</button> (will show in the console)`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Q],example:[K]},$$scope:{ctx:l}}}),{c(){t=C("div"),S(e.$$.fragment)},l(n){t=y(n,"DIV",{});var s=E(t);T(e.$$.fragment,s),s.forEach(c)},m(n,s){u(n,t,s),j(e,t,null),a=!0},p(n,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){a||(r(e.$$.fragment,n),a=!0)},o(n){f(e.$$.fragment,n),a=!1},d(n){n&&c(t),q(e)}}}function X(l,t,e){let{$$slots:a={},$$scope:n}=t;return l.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[a,n]}class nt extends v{constructor(t){super(),w(this,t,X,R,x,{})}}export{nt as default};
