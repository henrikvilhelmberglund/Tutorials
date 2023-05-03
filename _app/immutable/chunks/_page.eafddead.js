import{S as Q,i as Z,s as J,C as tt,k as A,q as k,a as N,l as F,m as W,r as v,h as f,c as O,b as p,D as R,T as V,u as P,E as nt,F as et,G as ot,g as D,d as M,Q as K,y as q,z as j,A as z,B as G,K as lt,L as wt,M as st,N as it}from"./index.0b5cc0d7.js";import{M as Tt,P as Y}from"./mdsvex-layout-notes.c527e9b3.js";import{S as x}from"./ShowMany.5b53376e.js";import{H as Bt}from"./H3.ad69a22c.js";import{S as rt}from"./Strong.272c5f79.js";const Et=o=>({count:o&1}),ct=o=>({count:o[0]});function Nt(o){let n,e,r,m,l,s,a,u,i,T,w,U,t,$,b;const d=o[2].default,B=tt(d,o,o[1],ct);return{c(){n=A("div"),e=k(`Component:\r
	`),r=A("button"),m=k("-"),l=N(),s=k(o[0]),a=N(),u=A("button"),i=k("+"),T=N(),w=A("hr"),U=N(),B&&B.c()},l(c){n=F(c,"DIV",{});var C=W(n);e=v(C,`Component:\r
	`),r=F(C,"BUTTON",{});var L=W(r);m=v(L,"-"),L.forEach(f),l=O(C),s=v(C,o[0]),a=O(C),u=F(C,"BUTTON",{});var E=W(u);i=v(E,"+"),E.forEach(f),C.forEach(f),T=O(c),w=F(c,"HR",{}),U=O(c),B&&B.l(c)},m(c,C){p(c,n,C),R(n,e),R(n,r),R(r,m),R(n,l),R(n,s),R(n,a),R(n,u),R(u,i),p(c,T,C),p(c,w,C),p(c,U,C),B&&B.m(c,C),t=!0,$||(b=[V(r,"click",o[3]),V(u,"click",o[4])],$=!0)},p(c,[C]){(!t||C&1)&&P(s,c[0]),B&&B.p&&(!t||C&3)&&nt(B,d,c,c[1],t?ot(d,c[1],C,Et):et(c[1]),ct)},i(c){t||(D(B,c),t=!0)},o(c){M(B,c),t=!1},d(c){c&&f(n),c&&f(T),c&&f(w),c&&f(U),B&&B.d(c),$=!1,K(b)}}}function Ot(o,n,e){let{$$slots:r={},$$scope:m}=n,l=0;const s=()=>e(0,l--,l),a=()=>e(0,l++,l);return o.$$set=u=>{"$$scope"in u&&e(1,m=u.$$scope)},[l,m,r,s,a]}class Rt extends Q{constructor(n){super(),Z(this,n,Ot,Nt,J,{})}}function Ut(o){let n,e,r,m,l,s=o[3]+"",a;return{c(){n=k("appCount: "),e=k(o[0]),r=N(),m=A("br"),l=k(`\r
    componentCount: `),a=k(s)},l(u){n=v(u,"appCount: "),e=v(u,o[0]),r=O(u),m=F(u,"BR",{}),l=v(u,`\r
    componentCount: `),a=v(u,s)},m(u,i){p(u,n,i),p(u,e,i),p(u,r,i),p(u,m,i),p(u,l,i),p(u,a,i)},p(u,i){i&1&&P(e,u[0]),i&8&&s!==(s=u[3]+"")&&P(a,s)},d(u){u&&f(n),u&&f(e),u&&f(r),u&&f(m),u&&f(l),u&&f(a)}}}function dt(o){let n,e,r,m,l,s,a,u,i,T,w,U;return i=new Rt({props:{$$slots:{default:[Ut,({count:t})=>({3:t}),({count:t})=>t?8:0]},$$scope:{ctx:o}}}),{c(){n=A("button"),e=k("-"),r=N(),m=k(o[0]),l=N(),s=A("button"),a=k("+"),u=N(),q(i.$$.fragment)},l(t){n=F(t,"BUTTON",{});var $=W(n);e=v($,"-"),$.forEach(f),r=O(t),m=v(t,o[0]),l=O(t),s=F(t,"BUTTON",{});var b=W(s);a=v(b,"+"),b.forEach(f),u=O(t),j(i.$$.fragment,t)},m(t,$){p(t,n,$),R(n,e),p(t,r,$),p(t,m,$),p(t,l,$),p(t,s,$),R(s,a),p(t,u,$),z(i,t,$),T=!0,w||(U=[V(n,"click",o[1]),V(s,"click",o[2])],w=!0)},p(t,[$]){(!T||$&1)&&P(m,t[0]);const b={};$&25&&(b.$$scope={dirty:$,ctx:t}),i.$set(b)},i(t){T||(D(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(t){t&&f(n),t&&f(r),t&&f(m),t&&f(l),t&&f(s),t&&f(u),G(i,t),w=!1,K(U)}}}function ht(o,n,e){let r=0;return[r,()=>e(0,r--,r),()=>e(0,r++,r)]}class pt extends Q{constructor(n){super(),Z(this,n,ht,dt,J,{})}}const At=`<script>\r
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
`,Ft=`<script>\r
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
`,Ht=o=>({count:o&1}),mt=o=>({count:o[0]});function It(o){let n,e,r,m,l,s,a,u,i,T,w,U,t,$,b;const d=o[2].default,B=tt(d,o,o[1],mt);return{c(){n=A("div"),e=k(`Component:\r
	`),r=A("button"),m=k("-"),l=N(),s=k(o[0]),a=N(),u=A("button"),i=k("+"),T=N(),w=A("hr"),U=N(),B&&B.c()},l(c){n=F(c,"DIV",{});var C=W(n);e=v(C,`Component:\r
	`),r=F(C,"BUTTON",{});var L=W(r);m=v(L,"-"),L.forEach(f),l=O(C),s=v(C,o[0]),a=O(C),u=F(C,"BUTTON",{});var E=W(u);i=v(E,"+"),E.forEach(f),C.forEach(f),T=O(c),w=F(c,"HR",{}),U=O(c),B&&B.l(c)},m(c,C){p(c,n,C),R(n,e),R(n,r),R(r,m),R(n,l),R(n,s),R(n,a),R(n,u),R(u,i),p(c,T,C),p(c,w,C),p(c,U,C),B&&B.m(c,C),t=!0,$||(b=[V(r,"click",o[3]),V(u,"click",o[4])],$=!0)},p(c,[C]){(!t||C&1)&&P(s,c[0]),B&&B.p&&(!t||C&3)&&nt(B,d,c,c[1],t?ot(d,c[1],C,Ht):et(c[1]),mt)},i(c){t||(D(B,c),t=!0)},o(c){M(B,c),t=!1},d(c){c&&f(n),c&&f(T),c&&f(w),c&&f(U),B&&B.d(c),$=!1,K(b)}}}function Wt(o,n,e){let{$$slots:r={},$$scope:m}=n,l=0;const s=()=>e(0,l--,l),a=()=>e(0,l++,l);return o.$$set=u=>{"$$scope"in u&&e(1,m=u.$$scope)},[l,m,r,s,a]}class St extends Q{constructor(n){super(),Z(this,n,Wt,It,J,{})}}function Dt(o){let n,e,r,m,l,s=o[3]+"",a;return{c(){n=k("appCount: "),e=k(o[0]),r=N(),m=A("br"),l=k(`\r
		componentCount: `),a=k(s)},l(u){n=v(u,"appCount: "),e=v(u,o[0]),r=O(u),m=F(u,"BR",{}),l=v(u,`\r
		componentCount: `),a=v(u,s)},m(u,i){p(u,n,i),p(u,e,i),p(u,r,i),p(u,m,i),p(u,l,i),p(u,a,i)},p(u,i){i&1&&P(e,u[0]),i&8&&s!==(s=u[3]+"")&&P(a,s)},d(u){u&&f(n),u&&f(e),u&&f(r),u&&f(m),u&&f(l),u&&f(a)}}}function Mt(o){let n,e,r,m,l,s,a,u,i,T,w,U;return i=new St({props:{$$slots:{default:[Dt,({count:t})=>({3:t}),({count:t})=>t?8:0]},$$scope:{ctx:o}}}),{c(){n=A("button"),e=k("-"),r=N(),m=k(o[0]),l=N(),s=A("button"),a=k("+"),u=N(),q(i.$$.fragment)},l(t){n=F(t,"BUTTON",{});var $=W(n);e=v($,"-"),$.forEach(f),r=O(t),m=v(t,o[0]),l=O(t),s=F(t,"BUTTON",{});var b=W(s);a=v(b,"+"),b.forEach(f),u=O(t),j(i.$$.fragment,t)},m(t,$){p(t,n,$),R(n,e),p(t,r,$),p(t,m,$),p(t,l,$),p(t,s,$),R(s,a),p(t,u,$),z(i,t,$),T=!0,w||(U=[V(n,"click",o[1]),V(s,"click",o[2])],w=!0)},p(t,[$]){(!T||$&1)&&P(m,t[0]);const b={};$&25&&(b.$$scope={dirty:$,ctx:t}),i.$set(b)},i(t){T||(D(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(t){t&&f(n),t&&f(r),t&&f(m),t&&f(l),t&&f(s),t&&f(u),G(i,t),w=!1,K(U)}}}function Vt(o,n,e){let r=0;return[r,()=>e(0,r--,r),()=>e(0,r++,r)]}class $t extends Q{constructor(n){super(),Z(this,n,Vt,Mt,J,{})}}const Lt=`<script>\r
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
`,Pt=`<script>\r
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
`,qt=o=>({count:o&1}),_t=o=>({count:o[0]});function jt(o){let n,e,r,m,l,s,a,u,i,T,w,U,t,$,b;const d=o[2].default,B=tt(d,o,o[1],_t);return{c(){n=A("div"),e=k(`Component:\r
	`),r=A("button"),m=k("-"),l=N(),s=k(o[0]),a=N(),u=A("button"),i=k("+"),T=N(),w=A("hr"),U=N(),B&&B.c()},l(c){n=F(c,"DIV",{});var C=W(n);e=v(C,`Component:\r
	`),r=F(C,"BUTTON",{});var L=W(r);m=v(L,"-"),L.forEach(f),l=O(C),s=v(C,o[0]),a=O(C),u=F(C,"BUTTON",{});var E=W(u);i=v(E,"+"),E.forEach(f),C.forEach(f),T=O(c),w=F(c,"HR",{}),U=O(c),B&&B.l(c)},m(c,C){p(c,n,C),R(n,e),R(n,r),R(r,m),R(n,l),R(n,s),R(n,a),R(n,u),R(u,i),p(c,T,C),p(c,w,C),p(c,U,C),B&&B.m(c,C),t=!0,$||(b=[V(r,"click",o[3]),V(u,"click",o[4])],$=!0)},p(c,[C]){(!t||C&1)&&P(s,c[0]),B&&B.p&&(!t||C&3)&&nt(B,d,c,c[1],t?ot(d,c[1],C,qt):et(c[1]),_t)},i(c){t||(D(B,c),t=!0)},o(c){M(B,c),t=!1},d(c){c&&f(n),c&&f(T),c&&f(w),c&&f(U),B&&B.d(c),$=!1,K(b)}}}function zt(o,n,e){let{$$slots:r={},$$scope:m}=n,l=0;const s=()=>e(0,l--,l),a=()=>e(0,l++,l);return o.$$set=u=>{"$$scope"in u&&e(1,m=u.$$scope)},[l,m,r,s,a]}class Gt extends Q{constructor(n){super(),Z(this,n,zt,jt,J,{})}}function Kt(o){let n,e,r,m,l,s=o[5]+"",a,u,i,T,w,U,t,$;return{c(){n=k("appCount: "),e=k(o[0]),r=N(),m=A("br"),l=k(`\r
		componentCount: `),a=k(s),u=N(),i=A("br"),T=N(),w=A("button"),U=k("+5")},l(b){n=v(b,"appCount: "),e=v(b,o[0]),r=O(b),m=F(b,"BR",{}),l=v(b,`\r
		componentCount: `),a=v(b,s),u=O(b),i=F(b,"BR",{}),T=O(b),w=F(b,"BUTTON",{});var d=W(w);U=v(d,"+5"),d.forEach(f)},m(b,d){p(b,n,d),p(b,e,d),p(b,r,d),p(b,m,d),p(b,l,d),p(b,a,d),p(b,u,d),p(b,i,d),p(b,T,d),p(b,w,d),R(w,U),t||($=V(w,"click",o[4]),t=!0)},p(b,d){d&1&&P(e,b[0]),d&32&&s!==(s=b[5]+"")&&P(a,s)},d(b){b&&f(n),b&&f(e),b&&f(r),b&&f(m),b&&f(l),b&&f(a),b&&f(u),b&&f(i),b&&f(T),b&&f(w),t=!1,$()}}}function Qt(o){let n,e,r,m,l,s,a,u,i,T,w,U;return i=new Gt({props:{$$slots:{default:[Kt,({count:t})=>({5:t}),({count:t})=>t?32:0]},$$scope:{ctx:o}}}),{c(){n=A("button"),e=k("-"),r=N(),m=k(o[0]),l=N(),s=A("button"),a=k("+"),u=N(),q(i.$$.fragment)},l(t){n=F(t,"BUTTON",{});var $=W(n);e=v($,"-"),$.forEach(f),r=O(t),m=v(t,o[0]),l=O(t),s=F(t,"BUTTON",{});var b=W(s);a=v(b,"+"),b.forEach(f),u=O(t),j(i.$$.fragment,t)},m(t,$){p(t,n,$),R(n,e),p(t,r,$),p(t,m,$),p(t,l,$),p(t,s,$),R(s,a),p(t,u,$),z(i,t,$),T=!0,w||(U=[V(n,"click",o[2]),V(s,"click",o[3])],w=!0)},p(t,[$]){(!T||$&1)&&P(m,t[0]);const b={};$&97&&(b.$$scope={dirty:$,ctx:t}),i.$set(b)},i(t){T||(D(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(t){t&&f(n),t&&f(r),t&&f(m),t&&f(l),t&&f(s),t&&f(u),G(i,t),w=!1,K(U)}}}function Zt(o,n,e){let r=0;function m(u){e(0,r+=u)}return[r,m,()=>e(0,r--,r),()=>e(0,r++,r),()=>m(5)]}class at extends Q{constructor(n){super(),Z(this,n,Zt,Qt,J,{})}}const Jt=`<script>\r
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
`,Xt=`<script>\r
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
`,Yt=o=>({count:o&1}),bt=o=>({count:o[0],inc:o[1]});function yt(o){let n,e,r,m,l,s,a,u,i,T,w,U,t,$,b;const d=o[3].default,B=tt(d,o,o[2],bt);return{c(){n=A("div"),e=k(`Component:\r
	`),r=A("button"),m=k("-"),l=N(),s=k(o[0]),a=N(),u=A("button"),i=k("+"),T=N(),w=A("hr"),U=N(),B&&B.c()},l(c){n=F(c,"DIV",{});var C=W(n);e=v(C,`Component:\r
	`),r=F(C,"BUTTON",{});var L=W(r);m=v(L,"-"),L.forEach(f),l=O(C),s=v(C,o[0]),a=O(C),u=F(C,"BUTTON",{});var E=W(u);i=v(E,"+"),E.forEach(f),C.forEach(f),T=O(c),w=F(c,"HR",{}),U=O(c),B&&B.l(c)},m(c,C){p(c,n,C),R(n,e),R(n,r),R(r,m),R(n,l),R(n,s),R(n,a),R(n,u),R(u,i),p(c,T,C),p(c,w,C),p(c,U,C),B&&B.m(c,C),t=!0,$||(b=[V(r,"click",o[4]),V(u,"click",o[5])],$=!0)},p(c,[C]){(!t||C&1)&&P(s,c[0]),B&&B.p&&(!t||C&5)&&nt(B,d,c,c[2],t?ot(d,c[2],C,Yt):et(c[2]),bt)},i(c){t||(D(B,c),t=!0)},o(c){M(B,c),t=!1},d(c){c&&f(n),c&&f(T),c&&f(w),c&&f(U),B&&B.d(c),$=!1,K(b)}}}function gt(o,n,e){let{$$slots:r={},$$scope:m}=n,l=0;function s(i){e(0,l+=i)}const a=()=>e(0,l--,l),u=()=>e(0,l++,l);return o.$$set=i=>{"$$scope"in i&&e(2,m=i.$$scope)},[l,s,m,r,a,u]}class vt extends Q{constructor(n){super(),Z(this,n,gt,yt,J,{})}}function xt(o){let n,e,r,m,l,s=o[6]+"",a,u,i,T,w,U,t,$,b,d,B,c,C;function L(){return o[5](o[7])}return{c(){n=k("appCount: "),e=k(o[0]),r=N(),m=A("br"),l=k(`\r
		componentCount: `),a=k(s),u=N(),i=A("br"),T=N(),w=A("button"),U=k("+5"),t=N(),$=A("br"),b=N(),d=A("button"),B=k("+5 to component")},l(E){n=v(E,"appCount: "),e=v(E,o[0]),r=O(E),m=F(E,"BR",{}),l=v(E,`\r
		componentCount: `),a=v(E,s),u=O(E),i=F(E,"BR",{}),T=O(E),w=F(E,"BUTTON",{});var I=W(w);U=v(I,"+5"),I.forEach(f),t=O(E),$=F(E,"BR",{}),b=O(E),d=F(E,"BUTTON",{});var _=W(d);B=v(_,"+5 to component"),_.forEach(f)},m(E,I){p(E,n,I),p(E,e,I),p(E,r,I),p(E,m,I),p(E,l,I),p(E,a,I),p(E,u,I),p(E,i,I),p(E,T,I),p(E,w,I),R(w,U),p(E,t,I),p(E,$,I),p(E,b,I),p(E,d,I),R(d,B),c||(C=[V(w,"click",o[4]),V(d,"click",L)],c=!0)},p(E,I){o=E,I&1&&P(e,o[0]),I&64&&s!==(s=o[6]+"")&&P(a,s)},d(E){E&&f(n),E&&f(e),E&&f(r),E&&f(m),E&&f(l),E&&f(a),E&&f(u),E&&f(i),E&&f(T),E&&f(w),E&&f(t),E&&f($),E&&f(b),E&&f(d),c=!1,K(C)}}}function tn(o){let n,e,r,m,l,s,a,u,i,T,w,U;return i=new vt({props:{$$slots:{default:[xt,({count:t,inc:$})=>({6:t,7:$}),({count:t,inc:$})=>(t?64:0)|($?128:0)]},$$scope:{ctx:o}}}),{c(){n=A("button"),e=k("-"),r=N(),m=k(o[0]),l=N(),s=A("button"),a=k("+"),u=N(),q(i.$$.fragment)},l(t){n=F(t,"BUTTON",{});var $=W(n);e=v($,"-"),$.forEach(f),r=O(t),m=v(t,o[0]),l=O(t),s=F(t,"BUTTON",{});var b=W(s);a=v(b,"+"),b.forEach(f),u=O(t),j(i.$$.fragment,t)},m(t,$){p(t,n,$),R(n,e),p(t,r,$),p(t,m,$),p(t,l,$),p(t,s,$),R(s,a),p(t,u,$),z(i,t,$),T=!0,w||(U=[V(n,"click",o[2]),V(s,"click",o[3])],w=!0)},p(t,[$]){(!T||$&1)&&P(m,t[0]);const b={};$&449&&(b.$$scope={dirty:$,ctx:t}),i.$set(b)},i(t){T||(D(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(t){t&&f(n),t&&f(r),t&&f(m),t&&f(l),t&&f(s),t&&f(u),G(i,t),w=!1,K(U)}}}function nn(o,n,e){let r=0;function m(i){e(0,r+=i)}return[r,m,()=>e(0,r--,r),()=>e(0,r++,r),()=>m(5),i=>i(5)]}class Ct extends Q{constructor(n){super(),Z(this,n,nn,tn,J,{})}}const en=`<script>\r
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
`,on=`<script>\r
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
`;function ln(o){let n,e,r,m,l,s=o[6]+"",a,u,i,T,w,U,t=o[6]+"",$,b,d,B,c,C,L,E,I,_,H;function y(){return o[4](o[6])}function g(){return o[5](o[7])}return{c(){n=k("appCount: "),e=k(o[0]),r=N(),m=A("br"),l=k(`\r
		componentCount: `),a=k(s),u=N(),i=A("br"),T=N(),w=A("button"),U=k("+"),$=k(t),b=k(" to parent"),d=N(),B=A("br"),c=N(),C=A("button"),L=k("+"),E=k(o[0]),I=k(" to component")},l(h){n=v(h,"appCount: "),e=v(h,o[0]),r=O(h),m=F(h,"BR",{}),l=v(h,`\r
		componentCount: `),a=v(h,s),u=O(h),i=F(h,"BR",{}),T=O(h),w=F(h,"BUTTON",{});var S=W(w);U=v(S,"+"),$=v(S,t),b=v(S," to parent"),S.forEach(f),d=O(h),B=F(h,"BR",{}),c=O(h),C=F(h,"BUTTON",{});var X=W(C);L=v(X,"+"),E=v(X,o[0]),I=v(X," to component"),X.forEach(f)},m(h,S){p(h,n,S),p(h,e,S),p(h,r,S),p(h,m,S),p(h,l,S),p(h,a,S),p(h,u,S),p(h,i,S),p(h,T,S),p(h,w,S),R(w,U),R(w,$),R(w,b),p(h,d,S),p(h,B,S),p(h,c,S),p(h,C,S),R(C,L),R(C,E),R(C,I),_||(H=[V(w,"click",y),V(C,"click",g)],_=!0)},p(h,S){o=h,S&1&&P(e,o[0]),S&64&&s!==(s=o[6]+"")&&P(a,s),S&64&&t!==(t=o[6]+"")&&P($,t),S&1&&P(E,o[0])},d(h){h&&f(n),h&&f(e),h&&f(r),h&&f(m),h&&f(l),h&&f(a),h&&f(u),h&&f(i),h&&f(T),h&&f(w),h&&f(d),h&&f(B),h&&f(c),h&&f(C),_=!1,K(H)}}}function rn(o){let n,e,r,m,l,s,a,u,i,T,w,U;return i=new vt({props:{$$slots:{default:[ln,({count:t,inc:$})=>({6:t,7:$}),({count:t,inc:$})=>(t?64:0)|($?128:0)]},$$scope:{ctx:o}}}),{c(){n=A("button"),e=k("-"),r=N(),m=k(o[0]),l=N(),s=A("button"),a=k("+"),u=N(),q(i.$$.fragment)},l(t){n=F(t,"BUTTON",{});var $=W(n);e=v($,"-"),$.forEach(f),r=O(t),m=v(t,o[0]),l=O(t),s=F(t,"BUTTON",{});var b=W(s);a=v(b,"+"),b.forEach(f),u=O(t),j(i.$$.fragment,t)},m(t,$){p(t,n,$),R(n,e),p(t,r,$),p(t,m,$),p(t,l,$),p(t,s,$),R(s,a),p(t,u,$),z(i,t,$),T=!0,w||(U=[V(n,"click",o[2]),V(s,"click",o[3])],w=!0)},p(t,[$]){(!T||$&1)&&P(m,t[0]);const b={};$&449&&(b.$$scope={dirty:$,ctx:t}),i.$set(b)},i(t){T||(D(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(t){t&&f(n),t&&f(r),t&&f(m),t&&f(l),t&&f(s),t&&f(u),G(i,t),w=!1,K(U)}}}function un(o,n,e){let r=0;function m(i){e(0,r+=i)}return[r,m,()=>e(0,r--,r),()=>e(0,r++,r),i=>m(i),i=>i(r)]}class fn extends Q{constructor(n){super(),Z(this,n,un,rn,J,{})}}const sn=`<script>\r
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
`;function cn(o){let n;return{c(){n=k("We may want to pass data to a parent across a slot in the child component. How do we do this?")},l(e){n=v(e,"We may want to pass data to a parent across a slot in the child component. How do we do this?")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function pn(o){let n;return{c(){n=k("props in the slot")},l(e){n=v(e,"props in the slot")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function mn(o){let n,e,r,m;return e=new rt({props:{$$slots:{default:[pn]},$$scope:{ctx:o}}}),{c(){n=k("We can use "),q(e.$$.fragment),r=k("!")},l(l){n=v(l,"We can use "),j(e.$$.fragment,l),r=v(l,"!")},m(l,s){p(l,n,s),z(e,l,s),p(l,r,s),m=!0},p(l,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){m||(D(e.$$.fragment,l),m=!0)},o(l){M(e.$$.fragment,l),m=!1},d(l){l&&f(n),G(e,l),l&&f(r)}}}function $n(o){let n;return{c(){n=k("give a specific name to the let binding")},l(e){n=v(e,"give a specific name to the let binding")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function _n(o){let n,e,r,m,l,s,a;return l=new rt({props:{$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){n=k("What if we want to use the variable name "),e=A("code"),r=k("count"),m=k(" in both the parent and child though? We can "),q(l.$$.fragment),s=k(".")},l(u){n=v(u,"What if we want to use the variable name "),e=F(u,"CODE",{});var i=W(e);r=v(i,"count"),i.forEach(f),m=v(u," in both the parent and child though? We can "),j(l.$$.fragment,u),s=v(u,".")},m(u,i){p(u,n,i),p(u,e,i),R(e,r),p(u,m,i),z(l,u,i),p(u,s,i),a=!0},p(u,i){const T={};i&2&&(T.$$scope={dirty:i,ctx:u}),l.$set(T)},i(u){a||(D(l.$$.fragment,u),a=!0)},o(u){M(l.$$.fragment,u),a=!1},d(u){u&&f(n),u&&f(e),u&&f(m),G(l,u),u&&f(s)}}}function an(o){let n;return{c(){n=k("Actually passing data")},l(e){n=v(e,"Actually passing data")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function bn(o){let n;return{c(){n=k("Let's try to get some data out of the fragment and into the main script tag. How do we accomplish this?`")},l(e){n=v(e,"Let's try to get some data out of the fragment and into the main script tag. How do we accomplish this?`")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function Cn(o){let n;return{c(){n=k("run functions inside of the fragment")},l(e){n=v(e,"run functions inside of the fragment")},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function kn(o){let n,e,r,m;return e=new rt({props:{$$slots:{default:[Cn]},$$scope:{ctx:o}}}),{c(){n=k("If we want to get data into the parent component (which has the fragment) we can "),q(e.$$.fragment),r=k(".")},l(l){n=v(l,"If we want to get data into the parent component (which has the fragment) we can "),j(e.$$.fragment,l),r=v(l,".")},m(l,s){p(l,n,s),z(e,l,s),p(l,r,s),m=!0},p(l,s){const a={};s&2&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i(l){m||(D(e.$$.fragment,l),m=!0)},o(l){M(e.$$.fragment,l),m=!1},d(l){l&&f(n),G(e,l),l&&f(r)}}}function vn(o){let n;return{c(){n=k(`For the data in the child component, we can add a function to it as a prop and bind to it using the let directive.
Since we don't want to override the function in the parent we change the name in the let directive again.`)},l(e){n=v(e,`For the data in the child component, we can add a function to it as a prop and bind to it using the let directive.
Since we don't want to override the function in the parent we change the name in the let directive again.`)},m(e,r){p(e,n,r)},d(e){e&&f(n)}}}function wn(o){let n,e,r,m,l,s,a,u,i,T,w,U,t,$,b,d,B,c,C,L,E,I;return n=new Y({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}}),r=new Y({props:{$$slots:{default:[mn]},$$scope:{ctx:o}}}),l=new x({props:{name:[{name:"App",comp:pt,raw:At,text:""},{name:"Component",comp:pt,raw:Ft,text:""}]}}),a=new Y({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),i=new x({props:{name:[{name:"App2",comp:$t,raw:Lt,text:""},{name:"Component2",comp:$t,raw:Pt,text:""}]}}),w=new Bt({props:{$$slots:{default:[an]},$$scope:{ctx:o}}}),t=new Y({props:{$$slots:{default:[bn]},$$scope:{ctx:o}}}),b=new Y({props:{$$slots:{default:[kn]},$$scope:{ctx:o}}}),B=new x({props:{name:[{name:"App3",comp:at,raw:Jt,text:""},{name:"Component3",comp:at,raw:Xt,text:""}]}}),C=new Y({props:{$$slots:{default:[vn]},$$scope:{ctx:o}}}),E=new x({props:{name:[{name:"App4",comp:Ct,raw:en,text:"This is an example of binding to the function in the child."},{name:"Component4",comp:Ct,raw:on,text:""},{name:"Bonus",comp:fn,raw:sn,text:"We can also use the variables as input to the functions!"}]}}),{c(){q(n.$$.fragment),e=N(),q(r.$$.fragment),m=N(),q(l.$$.fragment),s=N(),q(a.$$.fragment),u=N(),q(i.$$.fragment),T=N(),q(w.$$.fragment),U=N(),q(t.$$.fragment),$=N(),q(b.$$.fragment),d=N(),q(B.$$.fragment),c=N(),q(C.$$.fragment),L=N(),q(E.$$.fragment)},l(_){j(n.$$.fragment,_),e=O(_),j(r.$$.fragment,_),m=O(_),j(l.$$.fragment,_),s=O(_),j(a.$$.fragment,_),u=O(_),j(i.$$.fragment,_),T=O(_),j(w.$$.fragment,_),U=O(_),j(t.$$.fragment,_),$=O(_),j(b.$$.fragment,_),d=O(_),j(B.$$.fragment,_),c=O(_),j(C.$$.fragment,_),L=O(_),j(E.$$.fragment,_)},m(_,H){z(n,_,H),p(_,e,H),z(r,_,H),p(_,m,H),z(l,_,H),p(_,s,H),z(a,_,H),p(_,u,H),z(i,_,H),p(_,T,H),z(w,_,H),p(_,U,H),z(t,_,H),p(_,$,H),z(b,_,H),p(_,d,H),z(B,_,H),p(_,c,H),z(C,_,H),p(_,L,H),z(E,_,H),I=!0},p(_,H){const y={};H&2&&(y.$$scope={dirty:H,ctx:_}),n.$set(y);const g={};H&2&&(g.$$scope={dirty:H,ctx:_}),r.$set(g);const h={};H&2&&(h.$$scope={dirty:H,ctx:_}),a.$set(h);const S={};H&2&&(S.$$scope={dirty:H,ctx:_}),w.$set(S);const X={};H&2&&(X.$$scope={dirty:H,ctx:_}),t.$set(X);const ut={};H&2&&(ut.$$scope={dirty:H,ctx:_}),b.$set(ut);const ft={};H&2&&(ft.$$scope={dirty:H,ctx:_}),C.$set(ft)},i(_){I||(D(n.$$.fragment,_),D(r.$$.fragment,_),D(l.$$.fragment,_),D(a.$$.fragment,_),D(i.$$.fragment,_),D(w.$$.fragment,_),D(t.$$.fragment,_),D(b.$$.fragment,_),D(B.$$.fragment,_),D(C.$$.fragment,_),D(E.$$.fragment,_),I=!0)},o(_){M(n.$$.fragment,_),M(r.$$.fragment,_),M(l.$$.fragment,_),M(a.$$.fragment,_),M(i.$$.fragment,_),M(w.$$.fragment,_),M(t.$$.fragment,_),M(b.$$.fragment,_),M(B.$$.fragment,_),M(C.$$.fragment,_),M(E.$$.fragment,_),I=!1},d(_){G(n,_),_&&f(e),G(r,_),_&&f(m),G(l,_),_&&f(s),G(a,_),_&&f(u),G(i,_),_&&f(T),G(w,_),_&&f(U),G(t,_),_&&f($),G(b,_),_&&f(d),G(B,_),_&&f(c),G(C,_),_&&f(L),G(E,_)}}}function Tn(o){let n,e;const r=[o[0],kt];let m={$$slots:{default:[wn]},$$scope:{ctx:o}};for(let l=0;l<r.length;l+=1)m=lt(m,r[l]);return n=new Tt({props:m}),{c(){q(n.$$.fragment)},l(l){j(n.$$.fragment,l)},m(l,s){z(n,l,s),e=!0},p(l,[s]){const a=s&1?wt(r,[s&1&&st(l[0]),s&0&&st(kt)]):{};s&2&&(a.$$scope={dirty:s,ctx:l}),n.$set(a)},i(l){e||(D(n.$$.fragment,l),e=!0)},o(l){M(n.$$.fragment,l),e=!1},d(l){G(n,l)}}}const kt={title:"Passing data across <slot/>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-22T00:00:00.000Z",layout:"notes"};function Bn(o,n,e){return o.$$set=r=>{e(0,n=lt(lt({},n),it(r)))},n=it(n),[n]}class dn extends Q{constructor(n){super(),Z(this,n,Bn,Tn,J,{})}}export{dn as default,kt as metadata};
