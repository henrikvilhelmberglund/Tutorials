import{s as F,l as r,a as C,f as z,m as b,c as d,g as j,u as N,j as S,i as f,a8 as k,X as B,n as T,z as y,d as m,H as U,$ as q}from"./scheduler.a7cd560e.js";import{S as A,i as H}from"./index.396264e7.js";function I(l){let s,u,_,n,p,a,i,o,h="A button to click",c,v;return{c(){s=r("Foo: "),u=r(l[1]),_=r(`\r
Bar: `),n=r(l[0]),p=C(),a=z("input"),i=C(),o=z("button"),o.textContent=h,this.h()},l(t){s=b(t,"Foo: "),u=b(t,l[1]),_=b(t,`\r
Bar: `),n=b(t,l[0]),p=d(t),a=j(t,"INPUT",{type:!0}),i=d(t),o=j(t,"BUTTON",{["data-svelte-h"]:!0}),N(o)!=="svelte-jlsztj"&&(o.textContent=h),this.h()},h(){S(a,"type","text")},m(t,e){f(t,s,e),f(t,u,e),f(t,_,e),f(t,n,e),f(t,p,e),f(t,a,e),k(a,l[0]),f(t,i,e),f(t,o,e),c||(v=[B(a,"input",l[3]),B(o,"click",l[2])],c=!0)},p(t,[e]){e&2&&T(u,t[1]),e&1&&T(n,t[0]),e&1&&a.value!==t[0]&&k(a,t[0])},i:y,o:y,d(t){t&&(m(s),m(u),m(_),m(n),m(p),m(a),m(i),m(o)),c=!1,U(v)}}}function O(l,s,u){let{foo:_}=s,{bar:n}=s;console.log("lazy component initialized!");function p(i){q.call(this,l,i)}function a(){n=this.value,u(0,n)}return l.$$set=i=>{"foo"in i&&u(1,_=i.foo),"bar"in i&&u(0,n=i.bar)},[n,_,p,a]}class w extends A{constructor(s){super(),H(this,s,O,I,F,{foo:1,bar:0})}}export{w as default};
