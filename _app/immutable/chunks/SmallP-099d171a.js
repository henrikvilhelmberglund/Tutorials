import{S as d,i as $,s as g,k as h,q as C,l as k,m as x,r as D,h as r,b as f,D as H,B as c,w as v,x as w,y as b,f as _,t as p,z as P,C as y,E,F as S,G as q,O as z,e as i,P as B}from"./index-bc81051f.js";import{E as F}from"./Example-db4caf26.js";function G(n){let e,l;return{c(){e=h("p"),l=C("Phew, p tags are small.")},l(s){e=k(s,"P",{});var t=x(e);l=D(t,"Phew, p tags are small."),t.forEach(r)},m(s,t){f(s,e,t),H(e,l)},p:c,i:c,o:c,d(s){s&&r(e)}}}class I extends d{constructor(e){super(),$(this,e,null,G,g,{})}}const O=n=>({}),m=n=>({slot:"example"}),T=n=>({}),u=n=>({slot:"code"});function V(n){let e,l;return e=new I({}),{c(){v(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,t){b(e,s,t),l=!0},i(s){l||(_(e.$$.fragment,s),l=!0)},o(s){p(e.$$.fragment,s),l=!1},d(s){P(e,s)}}}function W(n){let e;const l=n[0].default,s=y(l,n,n[1],m),t=s||V();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&2)&&E(s,l,a,a[1],e?q(l,a[1],o,O):S(a[1]),m)},i(a){e||(_(t,a),e=!0)},o(a){p(t,a),e=!1},d(a){t&&t.d(a)}}}function j(n){let e,l='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Phew, p tags are small.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',s;return{c(){e=new z(!1),s=i(),this.h()},l(t){e=B(t,!1),s=i(),this.h()},h(){e.a=s},m(t,a){e.m(l,t,a),f(t,s,a)},p:c,d(t){t&&r(s),t&&e.d()}}}function A(n){let e;const l=n[0].default,s=y(l,n,n[1],u),t=s||j();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,o){t&&t.m(a,o),e=!0},p(a,o){s&&s.p&&(!e||o&2)&&E(s,l,a,a[1],e?q(l,a[1],o,T):S(a[1]),u)},i(a){e||(_(t,a),e=!0)},o(a){p(t,a),e=!1},d(a){t&&t.d(a)}}}function J(n){let e,l,s;return l=new F({props:{src:String.raw`<p>Phew, p tags are small.</p>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[A],example:[W]},$$scope:{ctx:n}}}),{c(){e=h("div"),v(l.$$.fragment)},l(t){e=k(t,"DIV",{});var a=x(e);w(l.$$.fragment,a),a.forEach(r)},m(t,a){f(t,e,a),b(l,e,null),s=!0},p(t,[a]){const o={};a&2&&(o.$$scope={dirty:a,ctx:t}),l.$set(o)},i(t){s||(_(l.$$.fragment,t),s=!0)},o(t){p(l.$$.fragment,t),s=!1},d(t){t&&r(e),P(l)}}}function K(n,e,l){let{$$slots:s={},$$scope:t}=e;return n.$$set=a=>{"$$scope"in a&&l(1,t=a.$$scope)},[s,t]}class N extends d{constructor(e){super(),$(this,e,K,J,g,{})}}export{N as default};
