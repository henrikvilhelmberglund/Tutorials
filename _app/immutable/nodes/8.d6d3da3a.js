import{s as g,f as h,a as v,g as y,h as P,c as b,d as l,j as w,i as N,v as S}from"../chunks/scheduler.a7cd560e.js";import{S as j,i as q,b as p,d as f,m as d,a as u,t as _,e as $}from"../chunks/index.396264e7.js";import{N as C}from"../chunks/Nav.f4e24f5b.js";import{P as D}from"../chunks/PostGrid.7f1313ef.js";function E(o){let e,s,r,a,i;return s=new C({props:{data:o[0],subroute:"/svelte-course"}}),a=new D({props:{route:"/svelte-course",posts:o[0].titles}}),{c(){e=h("div"),p(s.$$.fragment),r=v(),p(a.$$.fragment),this.h()},l(t){e=y(t,"DIV",{class:!0});var n=P(e);f(s.$$.fragment,n),r=b(n),f(a.$$.fragment,n),n.forEach(l),this.h()},h(){w(e,"class","spu-ud3smp")},m(t,n){N(t,e,n),d(s,e,null),S(e,r),d(a,e,null),i=!0},p(t,[n]){const m={};n&1&&(m.data=t[0]),s.$set(m);const c={};n&1&&(c.posts=t[0].titles),a.$set(c)},i(t){i||(u(s.$$.fragment,t),u(a.$$.fragment,t),i=!0)},o(t){_(s.$$.fragment,t),_(a.$$.fragment,t),i=!1},d(t){t&&l(e),$(s),$(a)}}}function G(o,e,s){let{data:r}=e;return o.$$set=a=>{"data"in a&&s(0,r=a.data)},[r]}class z extends j{constructor(e){super(),q(this,e,G,E,g,{data:0})}}export{z as component};
