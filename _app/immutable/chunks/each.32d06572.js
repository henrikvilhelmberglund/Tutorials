import{t as j,a as q}from"./index.396264e7.js";import{H as z}from"./scheduler.a7cd560e.js";function D(t){return t?.length!==void 0?t:Array.from(t)}function E(t,c){t.d(1),c.delete(t.key)}function F(t,c){j(t,1,1,()=>{c.delete(t.key)})}function G(t,c,M,v,S,y,d,x,m,A,h,H){let i=t.length,o=y.length,a=i;const w={};for(;a--;)w[t[a].key]=a;const f=[],r=new Map,u=new Map,g=[];for(a=o;a--;){const e=H(S,y,a),n=M(e);let s=d.get(n);s?v&&g.push(()=>s.p(e,c)):(s=A(n,e),s.c()),r.set(n,f[a]=s),n in w&&u.set(n,Math.abs(a-w[n]))}const p=new Set,k=new Set;function _(e){q(e,1),e.m(x,h),d.set(e.key,e),h=e.first,o--}for(;i&&o;){const e=f[o-1],n=t[i-1],s=e.key,l=n.key;e===n?(h=e.first,i--,o--):r.has(l)?!d.has(s)||p.has(s)?_(e):k.has(l)?i--:u.get(s)>u.get(l)?(k.add(s),_(e)):(p.add(l),i--):(m(n,d),i--)}for(;i--;){const e=t[i];r.has(e.key)||m(e,d)}for(;o;)_(f[o-1]);return z(g),f}export{E as d,D as e,F as o,G as u};
