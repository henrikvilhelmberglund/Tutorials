import{s as P,C as $,o as A,D as b,f as k,a as F,g as w,h as j,c as G,d as g,j as H,i as S,v as D,B as J,q as M,e as N}from"../chunks/scheduler.a7cd560e.js";import{S as K,i as L,b as p,d as y,m as h,a as _,t as m,e as v,g as V,c as z}from"../chunks/index.396264e7.js";import{e as q}from"../chunks/each.32d06572.js";import{g as O,a as B}from"../chunks/HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Q}from"../chunks/mdsvex-layout-mainpage.e29519a7.js";import"../chunks/paths.bd29c1ba.js";import{N as R}from"../chunks/Nav.f4e24f5b.js";function C(c,e,s){const i=c.slice();return i[5]=e[s],i}function E(c){let e,s,i;var l=c[5].default;function o(a){return{}}return l&&(e=M(l,o())),{c(){e&&p(e.$$.fragment),s=N()},l(a){e&&y(e.$$.fragment,a),s=N()},m(a,t){e&&h(e,a,t),S(a,s,t),i=!0},p(a,t){if(t&1&&l!==(l=a[5].default)){if(e){V();const d=e;m(d.$$.fragment,1,0,()=>{v(d,1)}),z()}l?(e=M(l,o()),p(e.$$.fragment),_(e.$$.fragment,1),h(e,s.parentNode,s)):e=null}},i(a){i||(e&&_(e.$$.fragment,a),i=!0)},o(a){e&&m(e.$$.fragment,a),i=!1},d(a){a&&g(s),e&&v(e,a)}}}function T(c){let e,s,i,l,o;s=new R({props:{data:c[0],subroute:"/old-tutorials"}});let a=q(c[0].posts),t=[];for(let n=0;n<a.length;n+=1)t[n]=E(C(c,a,n));const d=n=>m(t[n],1,1,()=>{t[n]=null});return{c(){e=k("div"),p(s.$$.fragment),i=F(),l=k("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var f=j(e);y(s.$$.fragment,f),i=G(f),l=w(f,"DIV",{});var u=j(l);for(let r=0;r<t.length;r+=1)t[r].l(u);u.forEach(g),f.forEach(g),this.h()},h(){H(e,"class","spu-j57gz1")},m(n,f){S(n,e,f),h(s,e,null),D(e,i),D(e,l);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(l,null);o=!0},p(n,f){const u={};if(f&1&&(u.data=n[0]),s.$set(u),f&1){a=q(n[0].posts);let r;for(r=0;r<a.length;r+=1){const x=C(n,a,r);t[r]?(t[r].p(x,f),_(t[r],1)):(t[r]=E(x),t[r].c(),_(t[r],1),t[r].m(l,null))}for(V(),r=a.length;r<t.length;r+=1)d(r);z()}},i(n){if(!o){_(s.$$.fragment,n);for(let f=0;f<a.length;f+=1)_(t[f]);o=!0}},o(n){m(s.$$.fragment,n),t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)m(t[f]);o=!1},d(n){n&&g(e),v(s),J(t,n)}}}function U(c){let e,s;const i=[c[1],I];let l={$$slots:{default:[T]},$$scope:{ctx:c}};for(let o=0;o<i.length;o+=1)l=$(l,i[o]);return e=new Q({props:l}),{c(){p(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,a){h(e,o,a),s=!0},p(o,[a]){const t=a&2?O(i,[a&2&&B(o[1]),a&0&&B(I)]):{};a&257&&(t.$$scope={dirty:a,ctx:o}),e.$set(t)},i(o){s||(_(e.$$.fragment,o),s=!0)},o(o){m(e.$$.fragment,o),s=!1},d(o){v(e,o)}}}const I={layout:"mainpage"};function W(c,e,s){let{data:i}=e;return A(()=>{}),c.$$set=l=>{s(1,e=$($({},e),b(l))),"data"in l&&s(0,i=l.data)},e=b(e),[i,e]}class se extends K{constructor(e){super(),L(this,e,W,U,P,{data:0})}}export{se as component};
