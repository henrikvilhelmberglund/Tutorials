import{s as P,C as $,D as w,f as x,a as A,g as D,h as N,c as F,d as p,j as G,i as z,v as j,B as H,q,e as B}from"../chunks/scheduler.a7cd560e.js";import{S as J,i as K,b as g,d as k,m as h,a as u,t as _,e as v,g as y,c as b}from"../chunks/index.396264e7.js";import{e as C}from"../chunks/each.32d06572.js";import{g as L,a as E}from"../chunks/HR.svelte_svelte_type_style_lang.8355a705.js";import{M as O}from"../chunks/mdsvex-layout-mainpage.e29519a7.js";import"../chunks/paths.bd29c1ba.js";import{N as Q}from"../chunks/Nav.f4e24f5b.js";function I(c,e,l){const a=c.slice();return a[4]=e[l],a}function M(c){let e,l;return e=new Q({props:{data:c[0],subroute:"/svelte-course"}}),{c(){g(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,r){h(e,a,r),l=!0},p(a,r){const t={};r&1&&(t.data=a[0]),e.$set(t)},i(a){l||(u(e.$$.fragment,a),l=!0)},o(a){_(e.$$.fragment,a),l=!1},d(a){v(e,a)}}}function S(c){let e,l,a;var r=c[4].default;function t(s){return{}}return r&&(e=q(r,t())),{c(){e&&g(e.$$.fragment),l=B()},l(s){e&&k(e.$$.fragment,s),l=B()},m(s,n){e&&h(e,s,n),z(s,l,n),a=!0},p(s,n){if(n&1&&r!==(r=s[4].default)){if(e){y();const d=e;_(d.$$.fragment,1,0,()=>{v(d,1)}),b()}r?(e=q(r,t()),g(e.$$.fragment),u(e.$$.fragment,1),h(e,l.parentNode,l)):e=null}},i(s){a||(e&&u(e.$$.fragment,s),a=!0)},o(s){e&&_(e.$$.fragment,s),a=!1},d(s){s&&p(l),e&&v(e,s)}}}function R(c){let e,l,a,r,t=c[0].titles&&M(c),s=C(c[0].posts),n=[];for(let o=0;o<s.length;o+=1)n[o]=S(I(c,s,o));const d=o=>_(n[o],1,1,()=>{n[o]=null});return{c(){e=x("div"),t&&t.c(),l=A(),a=x("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=D(o,"DIV",{class:!0});var f=N(e);t&&t.l(f),l=F(f),a=D(f,"DIV",{});var i=N(a);for(let m=0;m<n.length;m+=1)n[m].l(i);i.forEach(p),f.forEach(p),this.h()},h(){G(e,"class","spu-wppzy5")},m(o,f){z(o,e,f),t&&t.m(e,null),j(e,l),j(e,a);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(a,null);r=!0},p(o,f){if(o[0].titles?t?(t.p(o,f),f&1&&u(t,1)):(t=M(o),t.c(),u(t,1),t.m(e,l)):t&&(y(),_(t,1,1,()=>{t=null}),b()),f&1){s=C(o[0].posts);let i;for(i=0;i<s.length;i+=1){const m=I(o,s,i);n[i]?(n[i].p(m,f),u(n[i],1)):(n[i]=S(m),n[i].c(),u(n[i],1),n[i].m(a,null))}for(y(),i=s.length;i<n.length;i+=1)d(i);b()}},i(o){if(!r){u(t);for(let f=0;f<s.length;f+=1)u(n[f]);r=!0}},o(o){_(t),n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)_(n[f]);r=!1},d(o){o&&p(e),t&&t.d(),H(n,o)}}}function T(c){let e,l;const a=[c[1],V];let r={$$slots:{default:[R]},$$scope:{ctx:c}};for(let t=0;t<a.length;t+=1)r=$(r,a[t]);return e=new O({props:r}),{c(){g(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){h(e,t,s),l=!0},p(t,[s]){const n=s&2?L(a,[s&2&&E(t[1]),s&0&&E(V)]):{};s&129&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){l||(u(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){v(e,t)}}}const V={layout:"mainpage"};function U(c,e,l){let{data:a}=e;return c.$$set=r=>{l(1,e=$($({},e),w(r))),"data"in r&&l(0,a=r.data)},e=w(e),[a,e]}class ne extends J{constructor(e){super(),K(this,e,U,T,P,{data:0})}}export{ne as component};
