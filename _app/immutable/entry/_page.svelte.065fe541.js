import{S as k,i as b,s as x,k as h,l as u,m as _,h as i,n as f,b as g,H as d,J as y,q as D,a as E,r as S,c as q,D as c}from"../chunks/index.0b5cc0d7.js";import{b as I}from"../chunks/paths.2a29ddc0.js";function p(o,a,s){const t=o.slice();return t[1]=a[s],t[3]=s,t}function v(o){let a,s,t=o[1].name+"",l,n;return{c(){a=h("div"),s=h("a"),l=D(t),n=E(),this.h()},l(e){a=u(e,"DIV",{});var r=_(a);s=u(r,"A",{class:!0,href:!0});var m=_(s);l=S(m,t),m.forEach(i),n=q(r),r.forEach(i),this.h()},h(){f(s,"class","uno-98hzso"),f(s,"href",""+(I+o[1].link))},m(e,r){g(e,a,r),c(a,s),c(s,l),c(a,n)},p:d,d(e){e&&i(a)}}}function V(o){let a,s=o[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=v(p(o,s,l));return{c(){a=h("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){a=u(l,"DIV",{class:!0});var n=_(a);for(let e=0;e<t.length;e+=1)t[e].l(n);n.forEach(i),this.h()},h(){f(a,"class","uno-mopl99")},m(l,n){g(l,a,n);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(a,null)},p(l,[n]){if(n&1){s=l[0];let e;for(e=0;e<s.length;e+=1){const r=p(l,s,e);t[e]?t[e].p(r,n):(t[e]=v(r),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=s.length}},i:d,o:d,d(l){l&&i(a),y(t,l)}}}function $(o){return[[{link:"/svelte-course",name:"Svelte course"},{link:"/old-tutorials",name:"Old tutorials"}]]}class C extends k{constructor(a){super(),b(this,a,$,V,x,{})}}export{C as default};
