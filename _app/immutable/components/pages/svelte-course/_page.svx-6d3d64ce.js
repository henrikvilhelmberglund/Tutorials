import{S as H,i as J,s as K,M as $,w as y,x as U,y as P,N as Q,O as w,f as c,t as m,z as N,o as R,P as E,k as d,a as V,e as _,l as p,m as g,h as r,c as D,b as u,g as v,d as b,L as F,q as T,r as W,n as M,G as k,u as X,v as L}from"../../../chunks/index-a6ce3bb5.js";import{M as Y}from"../../../chunks/mdsvex-layout-mainpage-1aa548ad.js";import{b as q}from"../../../chunks/paths-b4419565.js";/* empty css                                                           */function A(s,l,n){const t=s.slice();return t[5]=l[n],t}function S(s,l,n){const t=s.slice();return t[8]=l[n],t}function j(s){let l,n=s[0].myPages,t=[];for(let a=0;a<n.length;a+=1)t[a]=B(S(s,n,a));return{c(){l=d("ul");for(let a=0;a<t.length;a+=1)t[a].c()},l(a){l=p(a,"UL",{});var f=g(l);for(let e=0;e<t.length;e+=1)t[e].l(f);f.forEach(r)},m(a,f){u(a,l,f);for(let e=0;e<t.length;e+=1)t[e].m(l,null)},p(a,f){if(f&1){n=a[0].myPages;let e;for(e=0;e<n.length;e+=1){const o=S(a,n,e);t[e]?t[e].p(o,f):(t[e]=B(o),t[e].c(),t[e].m(l,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=n.length}},d(a){a&&r(l),F(t,a)}}}function z(s){let l,n,t=s[8].title+"",a,f,e;return{c(){l=d("li"),n=d("a"),a=T(t),e=V(),this.h()},l(o){l=p(o,"LI",{});var i=g(l);n=p(i,"A",{href:!0});var h=g(n);a=W(h,t),h.forEach(r),e=D(i),i.forEach(r),this.h()},h(){M(n,"href",f=q+"/svelte-course/"+s[8].title)},m(o,i){u(o,l,i),k(l,n),k(n,a),k(l,e)},p(o,i){i&1&&t!==(t=o[8].title+"")&&X(a,t),i&1&&f!==(f=q+"/svelte-course/"+o[8].title)&&M(n,"href",f)},d(o){o&&r(l)}}}function B(s){let l,n=s[8].bsvelte&&z(s);return{c(){n&&n.c(),l=_()},l(t){n&&n.l(t),l=_()},m(t,a){n&&n.m(t,a),u(t,l,a)},p(t,a){t[8].bsvelte?n?n.p(t,a):(n=z(t),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&r(l)}}}function C(s){let l,n,t=s[0].myPages,a=[];for(let e=0;e<t.length;e+=1)a[e]=I(A(s,t,e));const f=e=>m(a[e],1,1,()=>{a[e]=null});return{c(){for(let e=0;e<a.length;e+=1)a[e].c();l=_()},l(e){for(let o=0;o<a.length;o+=1)a[o].l(e);l=_()},m(e,o){for(let i=0;i<a.length;i+=1)a[i].m(e,o);u(e,l,o),n=!0},p(e,o){if(o&1){t=e[0].myPages;let i;for(i=0;i<t.length;i+=1){const h=A(e,t,i);a[i]?(a[i].p(h,o),c(a[i],1)):(a[i]=I(h),a[i].c(),c(a[i],1),a[i].m(l.parentNode,l))}for(v(),i=t.length;i<a.length;i+=1)f(i);b()}},i(e){if(!n){for(let o=0;o<t.length;o+=1)c(a[o]);n=!0}},o(e){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)m(a[o]);n=!1},d(e){F(a,e),e&&r(l)}}}function G(s){let l,n,t;var a=s[5].newbody;function f(e){return{}}return a&&(l=L(a,f())),{c(){l&&y(l.$$.fragment),n=_()},l(e){l&&U(l.$$.fragment,e),n=_()},m(e,o){l&&P(l,e,o),u(e,n,o),t=!0},p(e,o){if(a!==(a=e[5].newbody)){if(l){v();const i=l;m(i.$$.fragment,1,0,()=>{N(i,1)}),b()}a?(l=L(a,f()),y(l.$$.fragment),c(l.$$.fragment,1),P(l,n.parentNode,n)):l=null}},i(e){t||(l&&c(l.$$.fragment,e),t=!0)},o(e){l&&m(l.$$.fragment,e),t=!1},d(e){e&&r(n),l&&N(l,e)}}}function I(s){let l,n,t=s[5].bsvelte&&G(s);return{c(){t&&t.c(),l=_()},l(a){t&&t.l(a),l=_()},m(a,f){t&&t.m(a,f),u(a,l,f),n=!0},p(a,f){a[5].bsvelte?t?(t.p(a,f),f&1&&c(t,1)):(t=G(a),t.c(),c(t,1),t.m(l.parentNode,l)):t&&(v(),m(t,1,1,()=>{t=null}),b())},i(a){n||(c(t),n=!0)},o(a){m(t),n=!1},d(a){t&&t.d(a),a&&r(l)}}}function Z(s){let l,n,t,a,f=s[0].myPages&&j(s),e=s[1]&&C(s);return{c(){l=d("nav"),f&&f.c(),n=V(),e&&e.c(),t=_()},l(o){l=p(o,"NAV",{});var i=g(l);f&&f.l(i),i.forEach(r),n=D(o),e&&e.l(o),t=_()},m(o,i){u(o,l,i),f&&f.m(l,null),u(o,n,i),e&&e.m(o,i),u(o,t,i),a=!0},p(o,i){o[0].myPages?f?f.p(o,i):(f=j(o),f.c(),f.m(l,null)):f&&(f.d(1),f=null),o[1]?e?(e.p(o,i),i&2&&c(e,1)):(e=C(o),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(v(),m(e,1,1,()=>{e=null}),b())},i(o){a||(c(e),a=!0)},o(o){m(e),a=!1},d(o){o&&r(l),f&&f.d(),o&&r(n),e&&e.d(o),o&&r(t)}}}function x(s){let l,n;const t=[s[2],O];let a={$$slots:{default:[Z]},$$scope:{ctx:s}};for(let f=0;f<t.length;f+=1)a=$(a,t[f]);return l=new Y({props:a}),{c(){y(l.$$.fragment)},l(f){U(l.$$.fragment,f)},m(f,e){P(l,f,e),n=!0},p(f,[e]){const o=e&4?Q(t,[e&4&&w(f[2]),e&0&&w(O)]):{};e&2051&&(o.$$scope={dirty:e,ctx:f}),l.$set(o)},i(f){n||(c(l.$$.fragment,f),n=!0)},o(f){m(l.$$.fragment,f),n=!1},d(f){N(l,f)}}}const O={layout:"mainpage"};function ee(s,l,n){let{data:t}=l,a=!1;return R(()=>{n(1,a=!0)}),s.$$set=f=>{n(2,l=$($({},l),E(f))),"data"in f&&n(0,t=f.data)},l=E(l),[t,a,l]}class fe extends H{constructor(l){super(),J(this,l,ee,x,K,{data:0})}}export{fe as default,O as metadata};
