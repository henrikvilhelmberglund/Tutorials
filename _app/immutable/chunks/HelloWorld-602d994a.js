var _=Object.freeze,C=Object.defineProperty;var f=(l,a)=>_(C(l,"raw",{value:_(a||l.slice())}));import{S as b,i as H,s as w,k as y,q as m,l as E,m as R,r as d,h as p,b as u,G as g,B as c,w as S,x as W,y as j,f as r,t as i,z as q,F as I,H as T,I as z,J as B,R as D,e as k,T as F}from"./index-a6ce3bb5.js";import{E as G}from"./Example-f263ece7.js";function J(l){let a,n,e;return{c(){a=y("p"),n=m("Hello "),e=m($)},l(t){a=E(t,"P",{});var s=R(a);n=d(s,"Hello "),e=d(s,$),s.forEach(p)},m(t,s){u(t,a,s),g(a,n),g(a,e)},p:c,i:c,o:c,d(t){t&&p(a)}}}let $="Reader";class P extends b{constructor(a){super(),H(this,a,null,J,w,{})}}const V=l=>({}),h=l=>({slot:"example"}),A=l=>({}),x=l=>({slot:"code"});function K(l){let a,n;return a=new P({}),{c(){S(a.$$.fragment)},l(e){W(a.$$.fragment,e)},m(e,t){j(a,e,t),n=!0},i(e){n||(r(a.$$.fragment,e),n=!0)},o(e){i(a.$$.fragment,e),n=!1},d(e){q(a,e)}}}function L(l){let a;const n=l[0].default,e=I(n,l,l[1],h),t=e||K();return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),a=!0},p(s,o){e&&e.p&&(!a||o&2)&&T(e,n,s,s[1],a?B(n,s[1],o,V):z(s[1]),h)},i(s){a||(r(t,s),a=!0)},o(s){i(t,s),a=!1},d(s){t&&t.d(s)}}}function M(l){let a,n=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"Reader"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello <span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>`,e;return{c(){a=new D(!1),e=k(),this.h()},l(t){a=F(t,!1),e=k(),this.h()},h(){a.a=e},m(t,s){a.m(n,t,s),u(t,e,s)},p:c,d(t){t&&p(e),t&&a.d()}}}function N(l){let a;const n=l[0].default,e=I(n,l,l[1],x),t=e||M();return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),a=!0},p(s,o){e&&e.p&&(!a||o&2)&&T(e,n,s,s[1],a?B(n,s[1],o,A):z(s[1]),x)},i(s){a||(r(t,s),a=!0)},o(s){i(t,s),a=!1},d(s){t&&t.d(s)}}}var v;function O(l){let a,n,e;return n=new G({props:{src:String.raw(v||(v=f([`<script>
let name = "Reader";
<\/script>
<p>Hello {name}</p>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[N],example:[L]},$$scope:{ctx:l}}}),{c(){a=y("div"),S(n.$$.fragment)},l(t){a=E(t,"DIV",{});var s=R(a);W(n.$$.fragment,s),s.forEach(p)},m(t,s){u(t,a,s),j(n,a,null),e=!0},p(t,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){t&&p(a),q(n)}}}function Q(l,a,n){let{$$slots:e={},$$scope:t}=a;return l.$$set=s=>{"$$scope"in s&&n(1,t=s.$$scope)},[e,t]}class Z extends b{constructor(a){super(),H(this,a,Q,O,w,{})}}export{Z as default};
