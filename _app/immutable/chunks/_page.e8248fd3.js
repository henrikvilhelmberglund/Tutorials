import{S as M,i as O,s as W,C as N,q as d,a as D,k as T,r as h,c as S,l as V,m as q,h as u,b as p,D as I,E as U,F as P,G as j,g as v,d as b,y as k,z as H,A as E,B as R,H as F,n as ie,R as X,u as G,J as Q,K as me,L as y,M as x}from"./index.5815ca79.js";import{M as ue,P as J}from"./mdsvex-layout-notes.7536afaf.js";import{S as ee}from"./ShowMany.2af9ac15.js";import{S as Y}from"./Strong.b8abec16.js";const ce=o=>({}),te=o=>({}),_e=o=>({}),ne=o=>({}),pe=o=>({}),re=o=>({});function de(o){let e,r,n,s,t,a;const i=o[1].header,c=N(i,o,o[0],re),f=o[1].content,$=N(f,o,o[0],ne),g=o[1].footer,w=N(g,o,o[0],te);return{c(){e=d("C header: "),c&&c.c(),r=D(),n=T("div"),s=d("C content: "),$&&$.c(),t=d(`\r
\r
C footer: `),w&&w.c()},l(l){e=h(l,"C header: "),c&&c.l(l),r=S(l),n=V(l,"DIV",{});var _=q(n);s=h(_,"C content: "),$&&$.l(_),_.forEach(u),t=h(l,`\r
\r
C footer: `),w&&w.l(l)},m(l,_){p(l,e,_),c&&c.m(l,_),p(l,r,_),p(l,n,_),I(n,s),$&&$.m(n,null),p(l,t,_),w&&w.m(l,_),a=!0},p(l,[_]){c&&c.p&&(!a||_&1)&&U(c,i,l,l[0],a?j(i,l[0],_,pe):P(l[0]),re),$&&$.p&&(!a||_&1)&&U($,f,l,l[0],a?j(f,l[0],_,_e):P(l[0]),ne),w&&w.p&&(!a||_&1)&&U(w,g,l,l[0],a?j(g,l[0],_,ce):P(l[0]),te)},i(l){a||(v(c,l),v($,l),v(w,l),a=!0)},o(l){b(c,l),b($,l),b(w,l),a=!1},d(l){l&&u(e),c&&c.d(l),l&&u(r),l&&u(n),$&&$.d(l),l&&u(t),w&&w.d(l)}}}function he(o,e,r){let{$$slots:n={},$$scope:s}=e;return o.$$set=t=>{"$$scope"in t&&r(0,s=t.$$scope)},[s,n]}class ve extends M{constructor(e){super(),O(this,e,he,de,W,{})}}const be=o=>({}),se=o=>({});function ge(o){let e,r,n,s,t;return{c(){e=T("div"),r=d("Header from B"),n=D(),s=T("div"),t=d("Header from B")},l(a){e=V(a,"DIV",{});var i=q(e);r=h(i,"Header from B"),i.forEach(u),n=S(a),s=V(a,"DIV",{});var c=q(s);t=h(c,"Header from B"),c.forEach(u)},m(a,i){p(a,e,i),I(e,r),p(a,n,i),p(a,s,i),I(s,t)},p:F,d(a){a&&u(e),a&&u(n),a&&u(s)}}}function we(o){let e,r,n,s,t,a;const i=o[0]["b-header"],c=N(i,o,o[1],se);return t=new ve({props:{$$slots:{header:[ge]},$$scope:{ctx:o}}}),{c(){e=d("B header: "),c&&c.c(),r=D(),n=T("br"),s=D(),k(t.$$.fragment)},l(f){e=h(f,"B header: "),c&&c.l(f),r=S(f),n=V(f,"BR",{}),s=S(f),H(t.$$.fragment,f)},m(f,$){p(f,e,$),c&&c.m(f,$),p(f,r,$),p(f,n,$),p(f,s,$),E(t,f,$),a=!0},p(f,[$]){c&&c.p&&(!a||$&2)&&U(c,i,f,f[1],a?j(i,f[1],$,be):P(f[1]),se);const g={};$&2&&(g.$$scope={dirty:$,ctx:f}),t.$set(g)},i(f){a||(v(c,f),v(t.$$.fragment,f),a=!0)},o(f){b(c,f),b(t.$$.fragment,f),a=!1},d(f){f&&u(e),c&&c.d(f),f&&u(r),f&&u(n),f&&u(s),R(t,f)}}}function Ce(o,e,r){let{$$slots:n={},$$scope:s}=e;return o.$$set=t=>{"$$scope"in t&&r(1,s=t.$$scope)},[n,s]}class Be extends M{constructor(e){super(),O(this,e,Ce,we,W,{})}}function Ae(o){let e,r;return{c(){e=T("div"),r=d("Header from A"),this.h()},l(n){e=V(n,"DIV",{slot:!0});var s=q(e);r=h(s,"Header from A"),s.forEach(u),this.h()},h(){ie(e,"slot","b-header")},m(n,s){p(n,e,s),I(e,r)},p:F,d(n){n&&u(e)}}}function ke(o){let e,r;return e=new Be({props:{$$slots:{"b-header":[Ae]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){E(e,n,s),r=!0},p(n,[s]){const t={};s&1&&(t.$$scope={dirty:s,ctx:n}),e.$set(t)},i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){R(e,n)}}}class He extends M{constructor(e){super(),O(this,e,null,ke,W,{})}}function Ee(o){let e,r;return e=new He({}),{c(){k(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){E(e,n,s),r=!0},p:F,i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){R(e,n)}}}class K extends M{constructor(e){super(),O(this,e,null,Ee,W,{})}}const Re=`<script>\r
  import A from "./A.svelte";\r
<\/script>\r
\r
<A/>\r
\r
<style>\r
  \r
</style>`,Ie=o=>({}),oe=o=>({}),De=o=>({}),le=o=>({}),Se=o=>({count:o&1}),fe=o=>({count:o[0]});function Te(o){let e,r,n,s,t,a,i,c,f,$,g;const w=o[2].header,l=N(w,o,o[1],fe),_=o[2].content,B=N(_,o,o[1],le),z=o[2].footer,A=N(z,o,o[1],oe);return{c(){e=T("button"),r=d("C: "),n=d(o[0]),s=d(`\r
\r
C header: `),l&&l.c(),t=D(),a=T("div"),i=d("C content: "),B&&B.c(),c=d(`\r
\r
C footer: `),A&&A.c()},l(m){e=V(m,"BUTTON",{});var C=q(e);r=h(C,"C: "),n=h(C,o[0]),C.forEach(u),s=h(m,`\r
\r
C header: `),l&&l.l(m),t=S(m),a=V(m,"DIV",{});var Z=q(a);i=h(Z,"C content: "),B&&B.l(Z),Z.forEach(u),c=h(m,`\r
\r
C footer: `),A&&A.l(m)},m(m,C){p(m,e,C),I(e,r),I(e,n),p(m,s,C),l&&l.m(m,C),p(m,t,C),p(m,a,C),I(a,i),B&&B.m(a,null),p(m,c,C),A&&A.m(m,C),f=!0,$||(g=X(e,"click",o[3]),$=!0)},p(m,[C]){(!f||C&1)&&G(n,m[0]),l&&l.p&&(!f||C&3)&&U(l,w,m,m[1],f?j(w,m[1],C,Se):P(m[1]),fe),B&&B.p&&(!f||C&2)&&U(B,_,m,m[1],f?j(_,m[1],C,De):P(m[1]),le),A&&A.p&&(!f||C&2)&&U(A,z,m,m[1],f?j(z,m[1],C,Ie):P(m[1]),oe)},i(m){f||(v(l,m),v(B,m),v(A,m),f=!0)},o(m){b(l,m),b(B,m),b(A,m),f=!1},d(m){m&&u(e),m&&u(s),l&&l.d(m),m&&u(t),m&&u(a),B&&B.d(m),m&&u(c),A&&A.d(m),$=!1,g()}}}function Ve(o,e,r){let{$$slots:n={},$$scope:s}=e,t=0;const a=()=>r(0,t++,t);return o.$$set=i=>{"$$scope"in i&&r(1,s=i.$$scope)},[t,s,n,a]}class qe extends M{constructor(e){super(),O(this,e,Ve,Te,W,{})}}const Me=o=>({sum:o&17}),ae=o=>({slot:"header",sum:o[4]+o[0]});function Oe(o){let e,r=o[4]+"",n;return{c(){e=d("fallback: "),n=d(r)},l(s){e=h(s,"fallback: "),n=h(s,r)},m(s,t){p(s,e,t),p(s,n,t)},p(s,t){t&16&&r!==(r=s[4]+"")&&G(n,r)},d(s){s&&u(e),s&&u(n)}}}function We(o){let e;const r=o[1].header,n=N(r,o,o[3],ae),s=n||Oe(o);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,a){s&&s.m(t,a),e=!0},p(t,a){n?n.p&&(!e||a&25)&&U(n,r,t,t[3],e?j(r,t[3],a,Me):P(t[3]),ae):s&&s.p&&(!e||a&16)&&s.p(t,e?a:-1)},i(t){e||(v(s,t),e=!0)},o(t){b(s,t),e=!1},d(t){s&&s.d(t)}}}function Ne(o){let e,r,n,s,t,a,i,c;return t=new qe({props:{$$slots:{header:[We,({count:f})=>({4:f}),({count:f})=>f?16:0]},$$scope:{ctx:o}}}),{c(){e=T("button"),r=d("B: "),n=d(o[0]),s=D(),k(t.$$.fragment)},l(f){e=V(f,"BUTTON",{});var $=q(e);r=h($,"B: "),n=h($,o[0]),$.forEach(u),s=S(f),H(t.$$.fragment,f)},m(f,$){p(f,e,$),I(e,r),I(e,n),p(f,s,$),E(t,f,$),a=!0,i||(c=X(e,"click",o[2]),i=!0)},p(f,[$]){(!a||$&1)&&G(n,f[0]);const g={};$&25&&(g.$$scope={dirty:$,ctx:f}),t.$set(g)},i(f){a||(v(t.$$.fragment,f),a=!0)},o(f){b(t.$$.fragment,f),a=!1},d(f){f&&u(e),f&&u(s),R(t,f),i=!1,c()}}}function Ue(o,e,r){let{$$slots:n={},$$scope:s}=e,t=0;const a=()=>r(0,t++,t);return o.$$set=i=>{"$$scope"in i&&r(3,s=i.$$scope)},[t,n,a,s]}class Pe extends M{constructor(e){super(),O(this,e,Ue,Ne,W,{})}}function je(o){let e,r,n=o[2]+o[0]+"",s;return{c(){e=T("div"),r=d("Header from A "),s=d(n),this.h()},l(t){e=V(t,"DIV",{slot:!0});var a=q(e);r=h(a,"Header from A "),s=h(a,n),a.forEach(u),this.h()},h(){ie(e,"slot","header")},m(t,a){p(t,e,a),I(e,r),I(e,s)},p(t,a){a&5&&n!==(n=t[2]+t[0]+"")&&G(s,n)},d(t){t&&u(e)}}}function ze(o){let e,r,n,s,t,a,i,c;return t=new Pe({props:{$$slots:{header:[je,({sum:f})=>({2:f}),({sum:f})=>f?4:0]},$$scope:{ctx:o}}}),{c(){e=T("button"),r=d("A: "),n=d(o[0]),s=D(),k(t.$$.fragment)},l(f){e=V(f,"BUTTON",{});var $=q(e);r=h($,"A: "),n=h($,o[0]),$.forEach(u),s=S(f),H(t.$$.fragment,f)},m(f,$){p(f,e,$),I(e,r),I(e,n),p(f,s,$),E(t,f,$),a=!0,i||(c=X(e,"click",o[1]),i=!0)},p(f,[$]){(!a||$&1)&&G(n,f[0]);const g={};$&13&&(g.$$scope={dirty:$,ctx:f}),t.$set(g)},i(f){a||(v(t.$$.fragment,f),a=!0)},o(f){b(t.$$.fragment,f),a=!1},d(f){f&&u(e),f&&u(s),R(t,f),i=!1,c()}}}function Fe(o,e,r){let n=0;return[n,()=>r(0,n++,n)]}class Ge extends M{constructor(e){super(),O(this,e,Fe,ze,W,{})}}function Je(o){let e,r;return e=new Ge({}),{c(){k(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,s){E(e,n,s),r=!0},p:F,i(n){r||(v(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){R(e,n)}}}class L extends M{constructor(e){super(),O(this,e,null,Je,W,{})}}const Ke=`<script>\r
	import A2 from "./A2.svelte";\r
<\/script>\r
\r
<A2 />\r
`,Le=`<script>\r
	import B from "./B.svelte";\r
<\/script>\r
\r
<B>\r
	<!-- note that we need to specify the slot name if we have a named slot -->\r
	<div slot="b-header">Header from A</div>\r
</B>\r
\r
<style>\r
</style>\r
`,Ze=`<script>\r
	import C from "./C.svelte";\r
<\/script>\r
\r
B header: <slot name="b-header" />\r
<br />\r
\r
<C>\r
	<svelte:fragment slot="header">\r
		<div>Header from B</div>\r
		<div>Header from B</div>\r
	</svelte:fragment>\r
</C>\r
\r
<style>\r
</style>\r
`,Qe=`<script>\r
<\/script>\r
\r
C header: <slot name="header" />\r
\r
<div>\r
	C content: <slot name="content" />\r
</div>\r
\r
C footer: <slot name="footer" />\r
\r
<style>\r
</style>\r
`,Xe=`<script>\r
	import B2 from "./B2.svelte";\r
\r
	let a = 0;\r
<\/script>\r
\r
<button on:click={() => a++}>A: {a}</button>\r
\r
<B2>\r
	<div slot="header" let:sum>Header from A {sum + a}</div>\r
</B2>\r
`,Ye=`<script>\r
	import C2 from "./C2.svelte";\r
	// needed for SSR apparently\r
	let count = 0;\r
\r
	let b = 0;\r
<\/script>\r
\r
<button on:click={() => b++}>B: {b}</button>\r
\r
<C2>\r
	<slot name="header" slot="header" let:count sum={count + b}>fallback: {count}</slot>\r
</C2>\r
`,ye=`<script>\r
	let count = 0;\r
<\/script>\r
\r
<button on:click={() => count++}>C: {count}</button>\r
\r
C header: <slot name="header" {count} />\r
\r
<div>\r
	C content: <slot name="content" />\r
</div>\r
\r
C footer: <slot name="footer" />\r
`;function xe(o){let e;return{c(){e=d("slot forwarding")},l(r){e=h(r,"slot forwarding")},m(r,n){p(r,e,n)},d(r){r&&u(e)}}}function et(o){let e,r,n,s;return r=new Y({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){e=d("What is "),k(r.$$.fragment),n=d("?")},l(t){e=h(t,"What is "),H(r.$$.fragment,t),n=h(t,"?")},m(t,a){p(t,e,a),E(r,t,a),p(t,n,a),s=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){t&&u(e),R(r,t),t&&u(n)}}}function tt(o){let e;return{c(){e=d("unique")},l(r){e=h(r,"unique")},m(r,n){p(r,e,n)},d(r){r&&u(e)}}}function nt(o){let e,r,n,s;return r=new Y({props:{$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){e=d('In this example we want to have two divs with the attribute slot="header". However this is impossible because slot attributes need to be '),k(r.$$.fragment),n=d(".")},l(t){e=h(t,'In this example we want to have two divs with the attribute slot="header". However this is impossible because slot attributes need to be '),H(r.$$.fragment,t),n=h(t,".")},m(t,a){p(t,e,a),E(r,t,a),p(t,n,a),s=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){t&&u(e),R(r,t),t&&u(n)}}}function rt(o){let e,r;return{c(){e=T("code"),r=d('{"<"}svelte:fragment>')},l(n){e=V(n,"CODE",{});var s=q(e);r=h(s,'{"<"}svelte:fragment>'),s.forEach(u)},m(n,s){p(n,e,s),I(e,r)},p:F,d(n){n&&u(e)}}}function st(o){let e,r,n,s;return r=new Y({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){e=d("We can fix this by using a "),k(r.$$.fragment),n=d(" tag instead.")},l(t){e=h(t,"We can fix this by using a "),H(r.$$.fragment,t),n=h(t," tag instead.")},m(t,a){p(t,e,a),E(r,t,a),p(t,n,a),s=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){b(r.$$.fragment,t),s=!1},d(t){t&&u(e),R(r,t),t&&u(n)}}}function ot(o){let e;return{c(){e=d("In the next example we have three buttons. Clicking any of them will increase the sum.")},l(r){e=h(r,"In the next example we have three buttons. Clicking any of them will increase the sum.")},m(r,n){p(r,e,n)},d(r){r&&u(e)}}}function lt(o){let e,r,n,s,t,a,i,c,f,$,g,w;return e=new J({props:{$$slots:{default:[et]},$$scope:{ctx:o}}}),n=new J({props:{$$slots:{default:[nt]},$$scope:{ctx:o}}}),t=new J({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),i=new ee({props:{name:[{name:"B",comp:K,raw:Ze,text:""},{name:"C",comp:K,raw:Qe,text:""},{name:"App",comp:K,raw:Re,text:""},{name:"A",comp:K,raw:Le,text:""}]}}),f=new J({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),g=new ee({props:{name:[{name:"A2",comp:L,raw:Xe,text:"Here we don't have props in the components script tags but instead in the slots."},{name:"B2",comp:L,raw:Ye,text:""},{name:"C2",comp:L,raw:ye,text:""},{name:"App2",comp:L,raw:Ke,text:""}]}}),{c(){k(e.$$.fragment),r=D(),k(n.$$.fragment),s=D(),k(t.$$.fragment),a=D(),k(i.$$.fragment),c=D(),k(f.$$.fragment),$=D(),k(g.$$.fragment)},l(l){H(e.$$.fragment,l),r=S(l),H(n.$$.fragment,l),s=S(l),H(t.$$.fragment,l),a=S(l),H(i.$$.fragment,l),c=S(l),H(f.$$.fragment,l),$=S(l),H(g.$$.fragment,l)},m(l,_){E(e,l,_),p(l,r,_),E(n,l,_),p(l,s,_),E(t,l,_),p(l,a,_),E(i,l,_),p(l,c,_),E(f,l,_),p(l,$,_),E(g,l,_),w=!0},p(l,_){const B={};_&2&&(B.$$scope={dirty:_,ctx:l}),e.$set(B);const z={};_&2&&(z.$$scope={dirty:_,ctx:l}),n.$set(z);const A={};_&2&&(A.$$scope={dirty:_,ctx:l}),t.$set(A);const m={};_&2&&(m.$$scope={dirty:_,ctx:l}),f.$set(m)},i(l){w||(v(e.$$.fragment,l),v(n.$$.fragment,l),v(t.$$.fragment,l),v(i.$$.fragment,l),v(f.$$.fragment,l),v(g.$$.fragment,l),w=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),b(t.$$.fragment,l),b(i.$$.fragment,l),b(f.$$.fragment,l),b(g.$$.fragment,l),w=!1},d(l){R(e,l),l&&u(r),R(n,l),l&&u(s),R(t,l),l&&u(a),R(i,l),l&&u(c),R(f,l),l&&u($),R(g,l)}}}function ft(o){let e,r;const n=[o[0],$e];let s={$$slots:{default:[lt]},$$scope:{ctx:o}};for(let t=0;t<n.length;t+=1)s=Q(s,n[t]);return e=new ue({props:s}),{c(){k(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){E(e,t,a),r=!0},p(t,[a]){const i=a&1?me(n,[a&1&&y(t[0]),a&0&&y($e)]):{};a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){R(e,t)}}}const $e={title:"<slot/> forwarding",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-22T00:00:00.000Z",layout:"notes"};function at(o,e,r){return o.$$set=n=>{r(0,e=Q(Q({},e),x(n)))},e=x(e),[e]}class ct extends M{constructor(e){super(),O(this,e,at,ft,W,{})}}export{ct as default,$e as metadata};
