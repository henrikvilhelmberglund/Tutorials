import{S as N,i as y,s as E,k as h,l as _,m,h as r,n as u,b as c,H as d,J as q,a as A,q as D,c as S,r as V,O as v,D as j,u as w}from"./index.0b5cc0d7.js";import{b}from"./paths.2a29ddc0.js";function p(f,s,l){const e=f.slice();e[2]=s[l];const t=e[2].includes("-")?e[2].split("-")[1]:e[2];return e[3]=t,e}function g(f){let s,l=f[0].titles,e=[];for(let t=0;t<l.length;t+=1)e[t]=k(p(f,l,t));return{c(){s=h("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){s=_(t,"DIV",{class:!0});var i=m(s);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(r),this.h()},h(){u(s,"class","uno-719mcd")},m(t,i){c(t,s,i);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,null)},p(t,i){if(i&3){l=t[0].titles;let a;for(a=0;a<l.length;a+=1){const n=p(t,l,a);e[a]?e[a].p(n,i):(e[a]=k(n),e[a].c(),e[a].m(s,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(t){t&&r(s),q(e,t)}}}function k(f){let s,l,e,t=f[3]+"",i,a;return{c(){s=h("br"),l=A(),e=h("a"),i=D(t),this.h()},l(n){s=_(n,"BR",{}),l=S(n),e=_(n,"A",{class:!0,href:!0});var o=m(e);i=V(o,t),o.forEach(r),this.h()},h(){u(e,"class","uno-nhjwpp"),u(e,"href",a=b+f[1]+"/"+f[2]),v(e,"uno-mms0fk",f[2]===f[0].slug)},m(n,o){c(n,s,o),c(n,l,o),c(n,e,o),j(e,i)},p(n,o){o&1&&t!==(t=n[3]+"")&&w(i,t),o&3&&a!==(a=b+n[1]+"/"+n[2])&&u(e,"href",a),o&1&&v(e,"uno-mms0fk",n[2]===n[0].slug)},d(n){n&&r(s),n&&r(l),n&&r(e)}}}function B(f){let s,l=f[0].titles&&g(f);return{c(){s=h("nav"),l&&l.c(),this.h()},l(e){s=_(e,"NAV",{class:!0});var t=m(s);l&&l.l(t),t.forEach(r),this.h()},h(){u(s,"class","uno-y100e3")},m(e,t){c(e,s,t),l&&l.m(s,null)},p(e,[t]){e[0].titles?l?l.p(e,t):(l=g(e),l.c(),l.m(s,null)):l&&(l.d(1),l=null)},i:d,o:d,d(e){e&&r(s),l&&l.d()}}}function C(f,s,l){let{data:e}=s,{subroute:t=""}=s;return f.$$set=i=>{"data"in i&&l(0,e=i.data),"subroute"in i&&l(1,t=i.subroute)},[e,t]}class J extends N{constructor(s){super(),y(this,s,C,B,E,{data:0,subroute:1})}}export{J as N};
