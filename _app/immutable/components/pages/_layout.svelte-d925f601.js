import{S as M,i as L,s as q,C as A,k as u,a as y,l as _,m as c,h as r,c as E,b as h,D as C,E as S,F as D,f as F,t as G,G as H,q as I,r as N,n as p,H as m,u as U}from"../../chunks/index-032954cb.js";import{b as v}from"../../chunks/paths-6cd3a76e.js";function b(o,s,n){const a=o.slice();return a[3]=s[n],a}function g(o){let s,n=o[0].myMenu,a=[];for(let e=0;e<n.length;e+=1)a[e]=k(b(o,n,e));return{c(){s=u("ul");for(let e=0;e<a.length;e+=1)a[e].c()},l(e){s=_(e,"UL",{});var i=c(s);for(let t=0;t<a.length;t+=1)a[t].l(i);i.forEach(r)},m(e,i){h(e,s,i);for(let t=0;t<a.length;t+=1)a[t].m(s,null)},p(e,i){if(i&1){n=e[0].myMenu;let t;for(t=0;t<n.length;t+=1){const l=b(e,n,t);a[t]?a[t].p(l,i):(a[t]=k(l),a[t].c(),a[t].m(s,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=n.length}},d(e){e&&r(s),H(a,e)}}}function k(o){let s,n,a=o[3].title+"",e,i,t;return{c(){s=u("li"),n=u("a"),e=I(a),t=y(),this.h()},l(l){s=_(l,"LI",{});var f=c(s);n=_(f,"A",{href:!0});var d=c(n);e=N(d,a),d.forEach(r),t=E(f),f.forEach(r),this.h()},h(){p(n,"href",i=v+"/"+o[3].title)},m(l,f){h(l,s,f),m(s,n),m(n,e),m(s,t)},p(l,f){f&1&&a!==(a=l[3].title+"")&&U(e,a),f&1&&i!==(i=v+"/"+l[3].title)&&p(n,"href",i)},d(l){l&&r(s)}}}function V(o){let s,n,a,e=o[0].myMenu&&g(o);const i=o[2].default,t=A(i,o,o[1],null);return{c(){s=u("nav"),e&&e.c(),n=y(),t&&t.c()},l(l){s=_(l,"NAV",{});var f=c(s);e&&e.l(f),f.forEach(r),n=E(l),t&&t.l(l)},m(l,f){h(l,s,f),e&&e.m(s,null),h(l,n,f),t&&t.m(l,f),a=!0},p(l,[f]){l[0].myMenu?e?e.p(l,f):(e=g(l),e.c(),e.m(s,null)):e&&(e.d(1),e=null),t&&t.p&&(!a||f&2)&&C(t,i,l,l[1],a?D(i,l[1],f,null):S(l[1]),null)},i(l){a||(F(t,l),a=!0)},o(l){G(t,l),a=!1},d(l){l&&r(s),e&&e.d(),l&&r(n),t&&t.d(l)}}}function j(o,s,n){let{$$slots:a={},$$scope:e}=s,{data:i}=s;return o.$$set=t=>{"data"in t&&n(0,i=t.data),"$$scope"in t&&n(1,e=t.$$scope)},[i,e,a]}class B extends M{constructor(s){super(),L(this,s,j,V,q,{data:0})}}export{B as default};
