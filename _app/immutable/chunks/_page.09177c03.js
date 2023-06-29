import{s as X,r as et,f as R,l as g,a as k,g as U,h as Q,m as T,u as P,c as w,d as c,i,v as H,X as E,n as M,w as nt,x as ot,y as lt,H as L,C as rt,D as it}from"./scheduler.a7cd560e.js";import{S as Z,i as G,a as z,t as S,b as y,d as D,m as V,e as q}from"./index.396264e7.js";import{g as kt,a as ft}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as wt,P as K}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as tt}from"./ShowMany.db7be1f3.js";import{H as gt}from"./H3.2217b794.js";import{S as ut}from"./Strong.097578ae.js";import{C as Tt}from"./Code.64283003.js";const Bt=l=>({count:l&1}),pt=l=>({count:l[0]});function Nt(l){let t,n,o,f="-",r,s,m,u,p="+",d,b,B,e,$,h;const N=l[2].default,v=et(N,l,l[1],pt);return{c(){t=R("div"),n=g(`Component:\r
	`),o=R("button"),o.textContent=f,r=k(),s=g(l[0]),m=k(),u=R("button"),u.textContent=p,d=k(),b=R("hr"),B=k(),v&&v.c()},l(a){t=U(a,"DIV",{});var _=Q(t);n=T(_,`Component:\r
	`),o=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(o)!=="svelte-1i0ct90"&&(o.textContent=f),r=w(_),s=T(_,l[0]),m=w(_),u=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(u)!=="svelte-1upznsy"&&(u.textContent=p),_.forEach(c),d=w(a),b=U(a,"HR",{}),B=w(a),v&&v.l(a)},m(a,_){i(a,t,_),H(t,n),H(t,o),H(t,r),H(t,s),H(t,m),H(t,u),i(a,d,_),i(a,b,_),i(a,B,_),v&&v.m(a,_),e=!0,$||(h=[E(o,"click",l[3]),E(u,"click",l[4])],$=!0)},p(a,[_]){(!e||_&1)&&M(s,a[0]),v&&v.p&&(!e||_&3)&&nt(v,N,a,a[1],e?lt(N,a[1],_,Bt):ot(a[1]),pt)},i(a){e||(z(v,a),e=!0)},o(a){S(v,a),e=!1},d(a){a&&(c(t),c(d),c(b),c(B)),v&&v.d(a),$=!1,L(h)}}}function Ot(l,t,n){let{$$slots:o={},$$scope:f}=t,r=0;const s=()=>n(0,r--,r),m=()=>n(0,r++,r);return l.$$set=u=>{"$$scope"in u&&n(1,f=u.$$scope)},[r,f,o,s,m]}class Rt extends Z{constructor(t){super(),G(this,t,Ot,Nt,X,{})}}function Ut(l){let t,n,o,f,r,s=l[3]+"",m;return{c(){t=g("appCount: "),n=g(l[0]),o=k(),f=R("br"),r=g(`\r
    componentCount: `),m=g(s)},l(u){t=T(u,"appCount: "),n=T(u,l[0]),o=w(u),f=U(u,"BR",{}),r=T(u,`\r
    componentCount: `),m=T(u,s)},m(u,p){i(u,t,p),i(u,n,p),i(u,o,p),i(u,f,p),i(u,r,p),i(u,m,p)},p(u,p){p&1&&M(n,u[0]),p&8&&s!==(s=u[3]+"")&&M(m,s)},d(u){u&&(c(t),c(n),c(o),c(f),c(r),c(m))}}}function At(l){let t,n="-",o,f,r,s,m="+",u,p,d,b,B;return p=new Rt({props:{$$slots:{default:[Ut,({count:e})=>({3:e}),({count:e})=>e?8:0]},$$scope:{ctx:l}}}),{c(){t=R("button"),t.textContent=n,o=k(),f=g(l[0]),r=k(),s=R("button"),s.textContent=m,u=k(),y(p.$$.fragment)},l(e){t=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-5cq0sb"&&(t.textContent=n),o=w(e),f=T(e,l[0]),r=w(e),s=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(s)!=="svelte-19qo5st"&&(s.textContent=m),u=w(e),D(p.$$.fragment,e)},m(e,$){i(e,t,$),i(e,o,$),i(e,f,$),i(e,r,$),i(e,s,$),i(e,u,$),V(p,e,$),d=!0,b||(B=[E(t,"click",l[1]),E(s,"click",l[2])],b=!0)},p(e,[$]){(!d||$&1)&&M(f,e[0]);const h={};$&25&&(h.$$scope={dirty:$,ctx:e}),p.$set(h)},i(e){d||(z(p.$$.fragment,e),d=!0)},o(e){S(p.$$.fragment,e),d=!1},d(e){e&&(c(t),c(o),c(f),c(r),c(s),c(u)),q(p,e),b=!1,L(B)}}}function Ft(l,t,n){let o=0;return[o,()=>n(0,o--,o),()=>n(0,o++,o)]}class mt extends Z{constructor(t){super(),G(this,t,Ft,At,X,{})}}const Ht=`<script>\r
	import Component from "./Component.svelte";\r
\r
	let appCount = 0;\r
<\/script>\r
\r
<button on:click={() => appCount--}>-</button>\r
{appCount}\r
<button on:click={() => appCount++}>+</button>\r
\r
<!-- the let directive here allows us to use the count variable from the child component in the fragment -->\r
<Component>\r
	<svelte:fragment let:count>\r
		appCount: {appCount} \r
    <br>\r
    componentCount: {count}\r
	</svelte:fragment>\r
</Component>\r
\r
<style>\r
</style>\r
`,It=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<div>\r
	Component:\r
	<button on:click={() => count--}>-</button>\r
	{count}\r
	<button on:click={() => count++}>+</button>\r
</div>\r
\r
<hr />\r
\r
<!-- added a prop to the slot here -->\r
<slot {count} />\r
\r
<style>\r
</style>\r
`,Wt=l=>({count:l&1}),at=l=>({count:l[0]});function zt(l){let t,n,o,f="-",r,s,m,u,p="+",d,b,B,e,$,h;const N=l[2].default,v=et(N,l,l[1],at);return{c(){t=R("div"),n=g(`Component:\r
	`),o=R("button"),o.textContent=f,r=k(),s=g(l[0]),m=k(),u=R("button"),u.textContent=p,d=k(),b=R("hr"),B=k(),v&&v.c()},l(a){t=U(a,"DIV",{});var _=Q(t);n=T(_,`Component:\r
	`),o=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(o)!=="svelte-1i0ct90"&&(o.textContent=f),r=w(_),s=T(_,l[0]),m=w(_),u=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(u)!=="svelte-1upznsy"&&(u.textContent=p),_.forEach(c),d=w(a),b=U(a,"HR",{}),B=w(a),v&&v.l(a)},m(a,_){i(a,t,_),H(t,n),H(t,o),H(t,r),H(t,s),H(t,m),H(t,u),i(a,d,_),i(a,b,_),i(a,B,_),v&&v.m(a,_),e=!0,$||(h=[E(o,"click",l[3]),E(u,"click",l[4])],$=!0)},p(a,[_]){(!e||_&1)&&M(s,a[0]),v&&v.p&&(!e||_&3)&&nt(v,N,a,a[1],e?lt(N,a[1],_,Wt):ot(a[1]),at)},i(a){e||(z(v,a),e=!0)},o(a){S(v,a),e=!1},d(a){a&&(c(t),c(d),c(b),c(B)),v&&v.d(a),$=!1,L(h)}}}function St(l,t,n){let{$$slots:o={},$$scope:f}=t,r=0;const s=()=>n(0,r--,r),m=()=>n(0,r++,r);return l.$$set=u=>{"$$scope"in u&&n(1,f=u.$$scope)},[r,f,o,s,m]}class Et extends Z{constructor(t){super(),G(this,t,St,zt,X,{})}}function yt(l){let t,n,o,f,r,s=l[3]+"",m;return{c(){t=g("appCount: "),n=g(l[0]),o=k(),f=R("br"),r=g(`\r
		componentCount: `),m=g(s)},l(u){t=T(u,"appCount: "),n=T(u,l[0]),o=w(u),f=U(u,"BR",{}),r=T(u,`\r
		componentCount: `),m=T(u,s)},m(u,p){i(u,t,p),i(u,n,p),i(u,o,p),i(u,f,p),i(u,r,p),i(u,m,p)},p(u,p){p&1&&M(n,u[0]),p&8&&s!==(s=u[3]+"")&&M(m,s)},d(u){u&&(c(t),c(n),c(o),c(f),c(r),c(m))}}}function Dt(l){let t,n="-",o,f,r,s,m="+",u,p,d,b,B;return p=new Et({props:{$$slots:{default:[yt,({count:e})=>({3:e}),({count:e})=>e?8:0]},$$scope:{ctx:l}}}),{c(){t=R("button"),t.textContent=n,o=k(),f=g(l[0]),r=k(),s=R("button"),s.textContent=m,u=k(),y(p.$$.fragment)},l(e){t=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-1i0ct90"&&(t.textContent=n),o=w(e),f=T(e,l[0]),r=w(e),s=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(s)!=="svelte-1upznsy"&&(s.textContent=m),u=w(e),D(p.$$.fragment,e)},m(e,$){i(e,t,$),i(e,o,$),i(e,f,$),i(e,r,$),i(e,s,$),i(e,u,$),V(p,e,$),d=!0,b||(B=[E(t,"click",l[1]),E(s,"click",l[2])],b=!0)},p(e,[$]){(!d||$&1)&&M(f,e[0]);const h={};$&25&&(h.$$scope={dirty:$,ctx:e}),p.$set(h)},i(e){d||(z(p.$$.fragment,e),d=!0)},o(e){S(p.$$.fragment,e),d=!1},d(e){e&&(c(t),c(o),c(f),c(r),c(s),c(u)),q(p,e),b=!1,L(B)}}}function Vt(l,t,n){let o=0;return[o,()=>n(0,o--,o),()=>n(0,o++,o)]}class $t extends Z{constructor(t){super(),G(this,t,Vt,Dt,X,{})}}const qt=`<script>\r
	import Component2 from "./Component2.svelte";\r
\r
	let count = 0;\r
<\/script>\r
\r
<button on:click={() => count--}>-</button>\r
{count}\r
<button on:click={() => count++}>+</button>\r
\r
<!-- the let directive here allows us to use the count variable from the child component in the fragment -->\r
<!-- by changing the name after ={} we can bind the variable to another name -->\r
<Component2>\r
	<svelte:fragment let:count={countFromComponent}>\r
		appCount: {count}\r
		<br />\r
		componentCount: {countFromComponent}\r
	</svelte:fragment>\r
</Component2>\r
\r
<style>\r
</style>\r
`,Mt=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<div>\r
	Component:\r
	<button on:click={() => count--}>-</button>\r
	{count}\r
	<button on:click={() => count++}>+</button>\r
</div>\r
\r
<hr />\r
\r
<!-- added a prop to the slot here -->\r
<slot {count} />\r
\r
<style>\r
</style>\r
`,Pt=l=>({count:l&1}),_t=l=>({count:l[0]});function Lt(l){let t,n,o,f="-",r,s,m,u,p="+",d,b,B,e,$,h;const N=l[2].default,v=et(N,l,l[1],_t);return{c(){t=R("div"),n=g(`Component:\r
	`),o=R("button"),o.textContent=f,r=k(),s=g(l[0]),m=k(),u=R("button"),u.textContent=p,d=k(),b=R("hr"),B=k(),v&&v.c()},l(a){t=U(a,"DIV",{});var _=Q(t);n=T(_,`Component:\r
	`),o=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(o)!=="svelte-1i0ct90"&&(o.textContent=f),r=w(_),s=T(_,l[0]),m=w(_),u=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(u)!=="svelte-1upznsy"&&(u.textContent=p),_.forEach(c),d=w(a),b=U(a,"HR",{}),B=w(a),v&&v.l(a)},m(a,_){i(a,t,_),H(t,n),H(t,o),H(t,r),H(t,s),H(t,m),H(t,u),i(a,d,_),i(a,b,_),i(a,B,_),v&&v.m(a,_),e=!0,$||(h=[E(o,"click",l[3]),E(u,"click",l[4])],$=!0)},p(a,[_]){(!e||_&1)&&M(s,a[0]),v&&v.p&&(!e||_&3)&&nt(v,N,a,a[1],e?lt(N,a[1],_,Pt):ot(a[1]),_t)},i(a){e||(z(v,a),e=!0)},o(a){S(v,a),e=!1},d(a){a&&(c(t),c(d),c(b),c(B)),v&&v.d(a),$=!1,L(h)}}}function jt(l,t,n){let{$$slots:o={},$$scope:f}=t,r=0;const s=()=>n(0,r--,r),m=()=>n(0,r++,r);return l.$$set=u=>{"$$scope"in u&&n(1,f=u.$$scope)},[r,f,o,s,m]}class Xt extends Z{constructor(t){super(),G(this,t,jt,Lt,X,{})}}function Zt(l){let t,n,o,f,r,s=l[5]+"",m,u,p,d,b,B="+5",e,$;return{c(){t=g("appCount: "),n=g(l[0]),o=k(),f=R("br"),r=g(`\r
		componentCount: `),m=g(s),u=k(),p=R("br"),d=k(),b=R("button"),b.textContent=B},l(h){t=T(h,"appCount: "),n=T(h,l[0]),o=w(h),f=U(h,"BR",{}),r=T(h,`\r
		componentCount: `),m=T(h,s),u=w(h),p=U(h,"BR",{}),d=w(h),b=U(h,"BUTTON",{["data-svelte-h"]:!0}),P(b)!=="svelte-citx0g"&&(b.textContent=B)},m(h,N){i(h,t,N),i(h,n,N),i(h,o,N),i(h,f,N),i(h,r,N),i(h,m,N),i(h,u,N),i(h,p,N),i(h,d,N),i(h,b,N),e||($=E(b,"click",l[4]),e=!0)},p(h,N){N&1&&M(n,h[0]),N&32&&s!==(s=h[5]+"")&&M(m,s)},d(h){h&&(c(t),c(n),c(o),c(f),c(r),c(m),c(u),c(p),c(d),c(b)),e=!1,$()}}}function Gt(l){let t,n="-",o,f,r,s,m="+",u,p,d,b,B;return p=new Xt({props:{$$slots:{default:[Zt,({count:e})=>({5:e}),({count:e})=>e?32:0]},$$scope:{ctx:l}}}),{c(){t=R("button"),t.textContent=n,o=k(),f=g(l[0]),r=k(),s=R("button"),s.textContent=m,u=k(),y(p.$$.fragment)},l(e){t=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-1i0ct90"&&(t.textContent=n),o=w(e),f=T(e,l[0]),r=w(e),s=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(s)!=="svelte-1upznsy"&&(s.textContent=m),u=w(e),D(p.$$.fragment,e)},m(e,$){i(e,t,$),i(e,o,$),i(e,f,$),i(e,r,$),i(e,s,$),i(e,u,$),V(p,e,$),d=!0,b||(B=[E(t,"click",l[2]),E(s,"click",l[3])],b=!0)},p(e,[$]){(!d||$&1)&&M(f,e[0]);const h={};$&97&&(h.$$scope={dirty:$,ctx:e}),p.$set(h)},i(e){d||(z(p.$$.fragment,e),d=!0)},o(e){S(p.$$.fragment,e),d=!1},d(e){e&&(c(t),c(o),c(f),c(r),c(s),c(u)),q(p,e),b=!1,L(B)}}}function Jt(l,t,n){let o=0;function f(u){n(0,o+=u)}return[o,f,()=>n(0,o--,o),()=>n(0,o++,o),()=>f(5)]}class Ct extends Z{constructor(t){super(),G(this,t,Jt,Gt,X,{})}}const Kt=`<script>\r
	import Component3 from "./Component3.svelte";\r
\r
	let count = 0;\r
\r
	function inc(delta) {\r
		count += delta;\r
	}\r
<\/script>\r
\r
<button on:click={() => count--}>-</button>\r
{count}\r
<button on:click={() => count++}>+</button>\r
\r
<!-- the let directive here allows us to use the count variable from the child component in the fragment -->\r
<!-- by changing the name after ={} we can bind the variable to another name -->\r
<Component3>\r
	<svelte:fragment let:count={countFromComponent}>\r
		appCount: {count}\r
		<br />\r
		componentCount: {countFromComponent}\r
		<br />\r
		<button on:click={() => inc(5)}>+5</button>\r
	</svelte:fragment>\r
</Component3>\r
\r
<style>\r
</style>\r
`,Qt=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<div>\r
	Component:\r
	<button on:click={() => count--}>-</button>\r
	{count}\r
	<button on:click={() => count++}>+</button>\r
</div>\r
\r
<hr />\r
\r
<!-- added a prop to the slot here -->\r
<slot {count} />\r
\r
<style>\r
</style>\r
`,Yt=l=>({count:l&1}),bt=l=>({count:l[0],inc:l[1]});function xt(l){let t,n,o,f="-",r,s,m,u,p="+",d,b,B,e,$,h;const N=l[3].default,v=et(N,l,l[2],bt);return{c(){t=R("div"),n=g(`Component:\r
	`),o=R("button"),o.textContent=f,r=k(),s=g(l[0]),m=k(),u=R("button"),u.textContent=p,d=k(),b=R("hr"),B=k(),v&&v.c()},l(a){t=U(a,"DIV",{});var _=Q(t);n=T(_,`Component:\r
	`),o=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(o)!=="svelte-1i0ct90"&&(o.textContent=f),r=w(_),s=T(_,l[0]),m=w(_),u=U(_,"BUTTON",{["data-svelte-h"]:!0}),P(u)!=="svelte-1upznsy"&&(u.textContent=p),_.forEach(c),d=w(a),b=U(a,"HR",{}),B=w(a),v&&v.l(a)},m(a,_){i(a,t,_),H(t,n),H(t,o),H(t,r),H(t,s),H(t,m),H(t,u),i(a,d,_),i(a,b,_),i(a,B,_),v&&v.m(a,_),e=!0,$||(h=[E(o,"click",l[4]),E(u,"click",l[5])],$=!0)},p(a,[_]){(!e||_&1)&&M(s,a[0]),v&&v.p&&(!e||_&5)&&nt(v,N,a,a[2],e?lt(N,a[2],_,Yt):ot(a[2]),bt)},i(a){e||(z(v,a),e=!0)},o(a){S(v,a),e=!1},d(a){a&&(c(t),c(d),c(b),c(B)),v&&v.d(a),$=!1,L(h)}}}function te(l,t,n){let{$$slots:o={},$$scope:f}=t,r=0;function s(p){n(0,r+=p)}const m=()=>n(0,r--,r),u=()=>n(0,r++,r);return l.$$set=p=>{"$$scope"in p&&n(2,f=p.$$scope)},[r,s,f,o,m,u]}class vt extends Z{constructor(t){super(),G(this,t,te,xt,X,{})}}function ee(l){let t,n,o,f,r,s=l[6]+"",m,u,p,d,b,B="+5",e,$,h,N,v="+5 to component",a,_;function j(){return l[5](l[7])}return{c(){t=g("appCount: "),n=g(l[0]),o=k(),f=R("br"),r=g(`\r
		componentCount: `),m=g(s),u=k(),p=R("br"),d=k(),b=R("button"),b.textContent=B,e=k(),$=R("br"),h=k(),N=R("button"),N.textContent=v},l(O){t=T(O,"appCount: "),n=T(O,l[0]),o=w(O),f=U(O,"BR",{}),r=T(O,`\r
		componentCount: `),m=T(O,s),u=w(O),p=U(O,"BR",{}),d=w(O),b=U(O,"BUTTON",{["data-svelte-h"]:!0}),P(b)!=="svelte-citx0g"&&(b.textContent=B),e=w(O),$=U(O,"BR",{}),h=w(O),N=U(O,"BUTTON",{["data-svelte-h"]:!0}),P(N)!=="svelte-tps27a"&&(N.textContent=v)},m(O,W){i(O,t,W),i(O,n,W),i(O,o,W),i(O,f,W),i(O,r,W),i(O,m,W),i(O,u,W),i(O,p,W),i(O,d,W),i(O,b,W),i(O,e,W),i(O,$,W),i(O,h,W),i(O,N,W),a||(_=[E(b,"click",l[4]),E(N,"click",j)],a=!0)},p(O,W){l=O,W&1&&M(n,l[0]),W&64&&s!==(s=l[6]+"")&&M(m,s)},d(O){O&&(c(t),c(n),c(o),c(f),c(r),c(m),c(u),c(p),c(d),c(b),c(e),c($),c(h),c(N)),a=!1,L(_)}}}function ne(l){let t,n="-",o,f,r,s,m="+",u,p,d,b,B;return p=new vt({props:{$$slots:{default:[ee,({count:e,inc:$})=>({6:e,7:$}),({count:e,inc:$})=>(e?64:0)|($?128:0)]},$$scope:{ctx:l}}}),{c(){t=R("button"),t.textContent=n,o=k(),f=g(l[0]),r=k(),s=R("button"),s.textContent=m,u=k(),y(p.$$.fragment)},l(e){t=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-1i0ct90"&&(t.textContent=n),o=w(e),f=T(e,l[0]),r=w(e),s=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(s)!=="svelte-1upznsy"&&(s.textContent=m),u=w(e),D(p.$$.fragment,e)},m(e,$){i(e,t,$),i(e,o,$),i(e,f,$),i(e,r,$),i(e,s,$),i(e,u,$),V(p,e,$),d=!0,b||(B=[E(t,"click",l[2]),E(s,"click",l[3])],b=!0)},p(e,[$]){(!d||$&1)&&M(f,e[0]);const h={};$&449&&(h.$$scope={dirty:$,ctx:e}),p.$set(h)},i(e){d||(z(p.$$.fragment,e),d=!0)},o(e){S(p.$$.fragment,e),d=!1},d(e){e&&(c(t),c(o),c(f),c(r),c(s),c(u)),q(p,e),b=!1,L(B)}}}function oe(l,t,n){let o=0;function f(p){n(0,o+=p)}return[o,f,()=>n(0,o--,o),()=>n(0,o++,o),()=>f(5),p=>p(5)]}class dt extends Z{constructor(t){super(),G(this,t,oe,ne,X,{})}}const le=`<script>\r
	import Component4 from "./Component4.svelte";\r
\r
	let count = 0;\r
\r
	function inc(delta) {\r
		count += delta;\r
	}\r
<\/script>\r
\r
<button on:click={() => count--}>-</button>\r
{count}\r
<button on:click={() => count++}>+</button>\r
\r
<!-- the let directive here allows us to use the count variable from the child component in the fragment -->\r
<!-- by changing the name after ={} we can bind the variable to another name -->\r
<Component4>\r
	<svelte:fragment let:count={countFromComponent} let:inc={incInComponent}>\r
		appCount: {count}\r
		<br />\r
		componentCount: {countFromComponent}\r
		<br />\r
		<button on:click={() => inc(5)}>+5</button>\r
		<br />\r
		<button on:click={() => incInComponent(5)}>+5 to component</button>\r
	</svelte:fragment>\r
</Component4>\r
\r
<style>\r
</style>\r
`,re=`<script>\r
	let count = 0;\r
\r
	function inc(delta) {\r
		count += delta;\r
	}\r
<\/script>\r
\r
<div>\r
	Component:\r
	<button on:click={() => count--}>-</button>\r
	{count}\r
	<button on:click={() => count++}>+</button>\r
</div>\r
\r
<hr />\r
\r
<!-- added a prop to the slot here -->\r
<slot {count} {inc} />\r
\r
<style>\r
</style>\r
`;function ue(l){let t,n,o,f,r,s=l[6]+"",m,u,p,d,b,B,e=l[6]+"",$,h,N,v,a,_,j,O,W,C,A;function Y(){return l[4](l[6])}function x(){return l[5](l[7])}return{c(){t=g("appCount: "),n=g(l[0]),o=k(),f=R("br"),r=g(`\r
		componentCount: `),m=g(s),u=k(),p=R("br"),d=k(),b=R("button"),B=g("+"),$=g(e),h=g(" to parent"),N=k(),v=R("br"),a=k(),_=R("button"),j=g("+"),O=g(l[0]),W=g(" to component")},l(F){t=T(F,"appCount: "),n=T(F,l[0]),o=w(F),f=U(F,"BR",{}),r=T(F,`\r
		componentCount: `),m=T(F,s),u=w(F),p=U(F,"BR",{}),d=w(F),b=U(F,"BUTTON",{});var I=Q(b);B=T(I,"+"),$=T(I,e),h=T(I," to parent"),I.forEach(c),N=w(F),v=U(F,"BR",{}),a=w(F),_=U(F,"BUTTON",{});var J=Q(_);j=T(J,"+"),O=T(J,l[0]),W=T(J," to component"),J.forEach(c)},m(F,I){i(F,t,I),i(F,n,I),i(F,o,I),i(F,f,I),i(F,r,I),i(F,m,I),i(F,u,I),i(F,p,I),i(F,d,I),i(F,b,I),H(b,B),H(b,$),H(b,h),i(F,N,I),i(F,v,I),i(F,a,I),i(F,_,I),H(_,j),H(_,O),H(_,W),C||(A=[E(b,"click",Y),E(_,"click",x)],C=!0)},p(F,I){l=F,I&1&&M(n,l[0]),I&64&&s!==(s=l[6]+"")&&M(m,s),I&64&&e!==(e=l[6]+"")&&M($,e),I&1&&M(O,l[0])},d(F){F&&(c(t),c(n),c(o),c(f),c(r),c(m),c(u),c(p),c(d),c(b),c(N),c(v),c(a),c(_)),C=!1,L(A)}}}function se(l){let t,n="-",o,f,r,s,m="+",u,p,d,b,B;return p=new vt({props:{$$slots:{default:[ue,({count:e,inc:$})=>({6:e,7:$}),({count:e,inc:$})=>(e?64:0)|($?128:0)]},$$scope:{ctx:l}}}),{c(){t=R("button"),t.textContent=n,o=k(),f=g(l[0]),r=k(),s=R("button"),s.textContent=m,u=k(),y(p.$$.fragment)},l(e){t=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-1i0ct90"&&(t.textContent=n),o=w(e),f=T(e,l[0]),r=w(e),s=U(e,"BUTTON",{["data-svelte-h"]:!0}),P(s)!=="svelte-1upznsy"&&(s.textContent=m),u=w(e),D(p.$$.fragment,e)},m(e,$){i(e,t,$),i(e,o,$),i(e,f,$),i(e,r,$),i(e,s,$),i(e,u,$),V(p,e,$),d=!0,b||(B=[E(t,"click",l[2]),E(s,"click",l[3])],b=!0)},p(e,[$]){(!d||$&1)&&M(f,e[0]);const h={};$&449&&(h.$$scope={dirty:$,ctx:e}),p.$set(h)},i(e){d||(z(p.$$.fragment,e),d=!0)},o(e){S(p.$$.fragment,e),d=!1},d(e){e&&(c(t),c(o),c(f),c(r),c(s),c(u)),q(p,e),b=!1,L(B)}}}function ce(l,t,n){let o=0;function f(p){n(0,o+=p)}return[o,f,()=>n(0,o--,o),()=>n(0,o++,o),p=>f(p),p=>p(o)]}class ie extends Z{constructor(t){super(),G(this,t,ce,se,X,{})}}const fe=`<script>\r
	import Component4 from "./Component4.svelte";\r
\r
	let count = 0;\r
\r
	function inc(delta) {\r
		count += delta;\r
	}\r
<\/script>\r
\r
<button on:click={() => count--}>-</button>\r
{count}\r
<button on:click={() => count++}>+</button>\r
\r
<!-- the let directive here allows us to use the count variable from the child component in the fragment -->\r
<!-- by changing the name after ={} we can bind the variable to another name -->\r
<Component4>\r
	<svelte:fragment let:count={countFromComponent} let:inc={incInComponent}>\r
		appCount: {count}\r
		<br />\r
		componentCount: {countFromComponent}\r
		<br />\r
		<button on:click={() => inc(countFromComponent)}>+{countFromComponent} to parent</button>\r
		<br />\r
		<button on:click={() => incInComponent(count)}>+{count} to component</button>\r
	</svelte:fragment>\r
</Component4>\r
\r
<style>\r
</style>\r
`;function pe(l){let t;return{c(){t=g("We may want to pass data to a parent across a slot in the child component. How do we do this?")},l(n){t=T(n,"We may want to pass data to a parent across a slot in the child component. How do we do this?")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function me(l){let t;return{c(){t=g("props in the slot")},l(n){t=T(n,"props in the slot")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function ae(l){let t,n,o,f;return n=new ut({props:{$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){t=g("We can use "),y(n.$$.fragment),o=g("!")},l(r){t=T(r,"We can use "),D(n.$$.fragment,r),o=T(r,"!")},m(r,s){i(r,t,s),V(n,r,s),i(r,o,s),f=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),n.$set(m)},i(r){f||(z(n.$$.fragment,r),f=!0)},o(r){S(n.$$.fragment,r),f=!1},d(r){r&&(c(t),c(o)),q(n,r)}}}function $e(l){let t;return{c(){t=g("count")},l(n){t=T(n,"count")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function _e(l){let t;return{c(){t=g("give a specific name to the let binding")},l(n){t=T(n,"give a specific name to the let binding")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function Ce(l){let t,n,o,f,r,s;return n=new Tt({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),f=new ut({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),{c(){t=g("What if we want to use the variable name "),y(n.$$.fragment),o=g(" in both the parent and child though? We can "),y(f.$$.fragment),r=g(".")},l(m){t=T(m,"What if we want to use the variable name "),D(n.$$.fragment,m),o=T(m," in both the parent and child though? We can "),D(f.$$.fragment,m),r=T(m,".")},m(m,u){i(m,t,u),V(n,m,u),i(m,o,u),V(f,m,u),i(m,r,u),s=!0},p(m,u){const p={};u&2&&(p.$$scope={dirty:u,ctx:m}),n.$set(p);const d={};u&2&&(d.$$scope={dirty:u,ctx:m}),f.$set(d)},i(m){s||(z(n.$$.fragment,m),z(f.$$.fragment,m),s=!0)},o(m){S(n.$$.fragment,m),S(f.$$.fragment,m),s=!1},d(m){m&&(c(t),c(o),c(r)),q(n,m),q(f,m)}}}function be(l){let t;return{c(){t=g("Actually passing data")},l(n){t=T(n,"Actually passing data")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function de(l){let t;return{c(){t=g("Let's try to get some data out of the fragment and into the main script tag. How do we accomplish this?`")},l(n){t=T(n,"Let's try to get some data out of the fragment and into the main script tag. How do we accomplish this?`")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function he(l){let t;return{c(){t=g("run functions inside of the fragment")},l(n){t=T(n,"run functions inside of the fragment")},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function ve(l){let t,n,o,f;return n=new ut({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){t=g("If we want to get data into the parent component (which has the fragment) we can "),y(n.$$.fragment),o=g(".")},l(r){t=T(r,"If we want to get data into the parent component (which has the fragment) we can "),D(n.$$.fragment,r),o=T(r,".")},m(r,s){i(r,t,s),V(n,r,s),i(r,o,s),f=!0},p(r,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:r}),n.$set(m)},i(r){f||(z(n.$$.fragment,r),f=!0)},o(r){S(n.$$.fragment,r),f=!1},d(r){r&&(c(t),c(o)),q(n,r)}}}function ke(l){let t;return{c(){t=g(`For the data in the child component, we can add a function to it as a prop and bind to it using the let directive.
Since we don't want to override the function in the parent we change the name in the let directive again.`)},l(n){t=T(n,`For the data in the child component, we can add a function to it as a prop and bind to it using the let directive.
Since we don't want to override the function in the parent we change the name in the let directive again.`)},m(n,o){i(n,t,o)},d(n){n&&c(t)}}}function we(l){let t,n,o,f,r,s,m,u,p,d,b,B,e,$,h,N,v,a,_,j,O,W;return t=new K({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}}),o=new K({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),r=new tt({props:{name:[{name:"App",comp:mt,raw:Ht,text:""},{name:"Component",comp:mt,raw:It,text:""}]}}),m=new K({props:{$$slots:{default:[Ce]},$$scope:{ctx:l}}}),p=new tt({props:{name:[{name:"App2",comp:$t,raw:qt,text:""},{name:"Component2",comp:$t,raw:Mt,text:""}]}}),b=new gt({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),e=new K({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),h=new K({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),v=new tt({props:{name:[{name:"App3",comp:Ct,raw:Kt,text:""},{name:"Component3",comp:Ct,raw:Qt,text:""}]}}),_=new K({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),O=new tt({props:{name:[{name:"App4",comp:dt,raw:le,text:"This is an example of binding to the function in the child."},{name:"Component4",comp:dt,raw:re,text:""},{name:"Bonus",comp:ie,raw:fe,text:"We can also use the variables as input to the functions!"}]}}),{c(){y(t.$$.fragment),n=k(),y(o.$$.fragment),f=k(),y(r.$$.fragment),s=k(),y(m.$$.fragment),u=k(),y(p.$$.fragment),d=k(),y(b.$$.fragment),B=k(),y(e.$$.fragment),$=k(),y(h.$$.fragment),N=k(),y(v.$$.fragment),a=k(),y(_.$$.fragment),j=k(),y(O.$$.fragment)},l(C){D(t.$$.fragment,C),n=w(C),D(o.$$.fragment,C),f=w(C),D(r.$$.fragment,C),s=w(C),D(m.$$.fragment,C),u=w(C),D(p.$$.fragment,C),d=w(C),D(b.$$.fragment,C),B=w(C),D(e.$$.fragment,C),$=w(C),D(h.$$.fragment,C),N=w(C),D(v.$$.fragment,C),a=w(C),D(_.$$.fragment,C),j=w(C),D(O.$$.fragment,C)},m(C,A){V(t,C,A),i(C,n,A),V(o,C,A),i(C,f,A),V(r,C,A),i(C,s,A),V(m,C,A),i(C,u,A),V(p,C,A),i(C,d,A),V(b,C,A),i(C,B,A),V(e,C,A),i(C,$,A),V(h,C,A),i(C,N,A),V(v,C,A),i(C,a,A),V(_,C,A),i(C,j,A),V(O,C,A),W=!0},p(C,A){const Y={};A&2&&(Y.$$scope={dirty:A,ctx:C}),t.$set(Y);const x={};A&2&&(x.$$scope={dirty:A,ctx:C}),o.$set(x);const F={};A&2&&(F.$$scope={dirty:A,ctx:C}),m.$set(F);const I={};A&2&&(I.$$scope={dirty:A,ctx:C}),b.$set(I);const J={};A&2&&(J.$$scope={dirty:A,ctx:C}),e.$set(J);const st={};A&2&&(st.$$scope={dirty:A,ctx:C}),h.$set(st);const ct={};A&2&&(ct.$$scope={dirty:A,ctx:C}),_.$set(ct)},i(C){W||(z(t.$$.fragment,C),z(o.$$.fragment,C),z(r.$$.fragment,C),z(m.$$.fragment,C),z(p.$$.fragment,C),z(b.$$.fragment,C),z(e.$$.fragment,C),z(h.$$.fragment,C),z(v.$$.fragment,C),z(_.$$.fragment,C),z(O.$$.fragment,C),W=!0)},o(C){S(t.$$.fragment,C),S(o.$$.fragment,C),S(r.$$.fragment,C),S(m.$$.fragment,C),S(p.$$.fragment,C),S(b.$$.fragment,C),S(e.$$.fragment,C),S(h.$$.fragment,C),S(v.$$.fragment,C),S(_.$$.fragment,C),S(O.$$.fragment,C),W=!1},d(C){C&&(c(n),c(f),c(s),c(u),c(d),c(B),c($),c(N),c(a),c(j)),q(t,C),q(o,C),q(r,C),q(m,C),q(p,C),q(b,C),q(e,C),q(h,C),q(v,C),q(_,C),q(O,C)}}}function ge(l){let t,n;const o=[l[0],ht];let f={$$slots:{default:[we]},$$scope:{ctx:l}};for(let r=0;r<o.length;r+=1)f=rt(f,o[r]);return t=new wt({props:f}),{c(){y(t.$$.fragment)},l(r){D(t.$$.fragment,r)},m(r,s){V(t,r,s),n=!0},p(r,[s]){const m=s&1?kt(o,[s&1&&ft(r[0]),s&0&&ft(ht)]):{};s&2&&(m.$$scope={dirty:s,ctx:r}),t.$set(m)},i(r){n||(z(t.$$.fragment,r),n=!0)},o(r){S(t.$$.fragment,r),n=!1},d(r){q(t,r)}}}const ht={title:"Passing data across <slot/>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-22T00:00:00.000Z",layout:"notes"};function Te(l,t,n){return l.$$set=o=>{n(0,t=rt(rt({},t),it(o)))},t=it(t),[t]}class Ie extends Z{constructor(t){super(),G(this,t,Te,ge,X,{})}}export{Ie as default,ht as metadata};
