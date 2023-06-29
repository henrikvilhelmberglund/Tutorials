import{s as W,r as N,l as d,a as S,f as E,m as h,c as D,g as V,h as z,d as m,i as _,v as T,w as O,x as U,y as j,u as L,z as J,j as ce,X as Y,n as X,C as Q,D as x}from"./scheduler.a7cd560e.js";import{S as q,i as M,a as g,t as v,b as B,d as A,m as k,e as H}from"./index.396264e7.js";import{g as me,a as ee}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as ue,P as Z}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as te}from"./ShowMany.db7be1f3.js";import{S as y}from"./Strong.097578ae.js";import{C as pe}from"./Code.64283003.js";const _e=s=>({}),ne=s=>({}),de=s=>({}),re=s=>({}),he=s=>({}),se=s=>({});function ge(s){let e,r,n,o,t,a;const i=s[1].header,u=N(i,s,s[0],se),f=s[1].content,$=N(f,s,s[0],re),b=s[1].footer,w=N(b,s,s[0],ne);return{c(){e=d("C header: "),u&&u.c(),r=S(),n=E("div"),o=d("C content: "),$&&$.c(),t=d(`\r
\r
C footer: `),w&&w.c()},l(l){e=h(l,"C header: "),u&&u.l(l),r=D(l),n=V(l,"DIV",{});var p=z(n);o=h(p,"C content: "),$&&$.l(p),p.forEach(m),t=h(l,`\r
\r
C footer: `),w&&w.l(l)},m(l,p){_(l,e,p),u&&u.m(l,p),_(l,r,p),_(l,n,p),T(n,o),$&&$.m(n,null),_(l,t,p),w&&w.m(l,p),a=!0},p(l,[p]){u&&u.p&&(!a||p&1)&&O(u,i,l,l[0],a?j(i,l[0],p,he):U(l[0]),se),$&&$.p&&(!a||p&1)&&O($,f,l,l[0],a?j(f,l[0],p,de):U(l[0]),re),w&&w.p&&(!a||p&1)&&O(w,b,l,l[0],a?j(b,l[0],p,_e):U(l[0]),ne)},i(l){a||(g(u,l),g($,l),g(w,l),a=!0)},o(l){v(u,l),v($,l),v(w,l),a=!1},d(l){l&&(m(e),m(r),m(n),m(t)),u&&u.d(l),$&&$.d(l),w&&w.d(l)}}}function ve(s,e,r){let{$$slots:n={},$$scope:o}=e;return s.$$set=t=>{"$$scope"in t&&r(0,o=t.$$scope)},[o,n]}class be extends q{constructor(e){super(),M(this,e,ve,ge,W,{})}}const we=s=>({}),oe=s=>({});function Ce(s){let e,r="Header from B",n,o,t="Header from B";return{c(){e=E("div"),e.textContent=r,n=S(),o=E("div"),o.textContent=t},l(a){e=V(a,"DIV",{["data-svelte-h"]:!0}),L(e)!=="svelte-1p28n5r"&&(e.textContent=r),n=D(a),o=V(a,"DIV",{["data-svelte-h"]:!0}),L(o)!=="svelte-1p28n5r"&&(o.textContent=t)},m(a,i){_(a,e,i),_(a,n,i),_(a,o,i)},p:J,d(a){a&&(m(e),m(n),m(o))}}}function Be(s){let e,r,n,o,t,a;const i=s[0]["b-header"],u=N(i,s,s[1],oe);return t=new be({props:{$$slots:{header:[Ce]},$$scope:{ctx:s}}}),{c(){e=d("B header: "),u&&u.c(),r=S(),n=E("br"),o=S(),B(t.$$.fragment)},l(f){e=h(f,"B header: "),u&&u.l(f),r=D(f),n=V(f,"BR",{}),o=D(f),A(t.$$.fragment,f)},m(f,$){_(f,e,$),u&&u.m(f,$),_(f,r,$),_(f,n,$),_(f,o,$),k(t,f,$),a=!0},p(f,[$]){u&&u.p&&(!a||$&2)&&O(u,i,f,f[1],a?j(i,f[1],$,we):U(f[1]),oe);const b={};$&2&&(b.$$scope={dirty:$,ctx:f}),t.$set(b)},i(f){a||(g(u,f),g(t.$$.fragment,f),a=!0)},o(f){v(u,f),v(t.$$.fragment,f),a=!1},d(f){f&&(m(e),m(r),m(n),m(o)),u&&u.d(f),H(t,f)}}}function Ae(s,e,r){let{$$slots:n={},$$scope:o}=e;return s.$$set=t=>{"$$scope"in t&&r(1,o=t.$$scope)},[n,o]}class ke extends q{constructor(e){super(),M(this,e,Ae,Be,W,{})}}function He(s){let e,r="Header from A";return{c(){e=E("div"),e.textContent=r,this.h()},l(n){e=V(n,"DIV",{slot:!0,["data-svelte-h"]:!0}),L(e)!=="svelte-105o3i1"&&(e.textContent=r),this.h()},h(){ce(e,"slot","b-header")},m(n,o){_(n,e,o)},p:J,d(n){n&&m(e)}}}function Ie(s){let e,r;return e=new ke({props:{$$slots:{"b-header":[He]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,o){k(e,n,o),r=!0},p(n,[o]){const t={};o&1&&(t.$$scope={dirty:o,ctx:n}),e.$set(t)},i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){H(e,n)}}}class Re extends q{constructor(e){super(),M(this,e,null,Ie,W,{})}}function Se(s){let e,r;return e=new Re({}),{c(){B(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,o){k(e,n,o),r=!0},p:J,i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){H(e,n)}}}class F extends q{constructor(e){super(),M(this,e,null,Se,W,{})}}const De=`<script>\r
  import A from "./A.svelte";\r
<\/script>\r
\r
<A/>\r
\r
<style>\r
  \r
</style>`,Te=s=>({}),le=s=>({}),Ee=s=>({}),ae=s=>({}),Ve=s=>({count:s&1}),fe=s=>({count:s[0]});function We(s){let e,r,n,o,t,a,i,u,f,$,b;const w=s[2].header,l=N(w,s,s[1],fe),p=s[2].content,I=N(p,s,s[1],ae),P=s[2].footer,R=N(P,s,s[1],le);return{c(){e=E("button"),r=d("C: "),n=d(s[0]),o=d(`\r
\r
C header: `),l&&l.c(),t=S(),a=E("div"),i=d("C content: "),I&&I.c(),u=d(`\r
\r
C footer: `),R&&R.c()},l(c){e=V(c,"BUTTON",{});var C=z(e);r=h(C,"C: "),n=h(C,s[0]),C.forEach(m),o=h(c,`\r
\r
C header: `),l&&l.l(c),t=D(c),a=V(c,"DIV",{});var K=z(a);i=h(K,"C content: "),I&&I.l(K),K.forEach(m),u=h(c,`\r
\r
C footer: `),R&&R.l(c)},m(c,C){_(c,e,C),T(e,r),T(e,n),_(c,o,C),l&&l.m(c,C),_(c,t,C),_(c,a,C),T(a,i),I&&I.m(a,null),_(c,u,C),R&&R.m(c,C),f=!0,$||(b=Y(e,"click",s[3]),$=!0)},p(c,[C]){(!f||C&1)&&X(n,c[0]),l&&l.p&&(!f||C&3)&&O(l,w,c,c[1],f?j(w,c[1],C,Ve):U(c[1]),fe),I&&I.p&&(!f||C&2)&&O(I,p,c,c[1],f?j(p,c[1],C,Ee):U(c[1]),ae),R&&R.p&&(!f||C&2)&&O(R,P,c,c[1],f?j(P,c[1],C,Te):U(c[1]),le)},i(c){f||(g(l,c),g(I,c),g(R,c),f=!0)},o(c){v(l,c),v(I,c),v(R,c),f=!1},d(c){c&&(m(e),m(o),m(t),m(a),m(u)),l&&l.d(c),I&&I.d(c),R&&R.d(c),$=!1,b()}}}function qe(s,e,r){let{$$slots:n={},$$scope:o}=e,t=0;const a=()=>r(0,t++,t);return s.$$set=i=>{"$$scope"in i&&r(1,o=i.$$scope)},[t,o,n,a]}class Me extends q{constructor(e){super(),M(this,e,qe,We,W,{})}}const Ne=s=>({sum:s&17}),$e=s=>({slot:"header",sum:s[4]+s[0]});function Oe(s){let e,r=s[4]+"",n;return{c(){e=d("fallback: "),n=d(r)},l(o){e=h(o,"fallback: "),n=h(o,r)},m(o,t){_(o,e,t),_(o,n,t)},p(o,t){t&16&&r!==(r=o[4]+"")&&X(n,r)},d(o){o&&(m(e),m(n))}}}function Ue(s){let e;const r=s[1].header,n=N(r,s,s[3],$e),o=n||Oe(s);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,a){o&&o.m(t,a),e=!0},p(t,a){n?n.p&&(!e||a&25)&&O(n,r,t,t[3],e?j(r,t[3],a,Ne):U(t[3]),$e):o&&o.p&&(!e||a&16)&&o.p(t,e?a:-1)},i(t){e||(g(o,t),e=!0)},o(t){v(o,t),e=!1},d(t){o&&o.d(t)}}}function je(s){let e,r,n,o,t,a,i,u;return t=new Me({props:{$$slots:{header:[Ue,({count:f})=>({4:f}),({count:f})=>f?16:0]},$$scope:{ctx:s}}}),{c(){e=E("button"),r=d("B: "),n=d(s[0]),o=S(),B(t.$$.fragment)},l(f){e=V(f,"BUTTON",{});var $=z(e);r=h($,"B: "),n=h($,s[0]),$.forEach(m),o=D(f),A(t.$$.fragment,f)},m(f,$){_(f,e,$),T(e,r),T(e,n),_(f,o,$),k(t,f,$),a=!0,i||(u=Y(e,"click",s[2]),i=!0)},p(f,[$]){(!a||$&1)&&X(n,f[0]);const b={};$&25&&(b.$$scope={dirty:$,ctx:f}),t.$set(b)},i(f){a||(g(t.$$.fragment,f),a=!0)},o(f){v(t.$$.fragment,f),a=!1},d(f){f&&(m(e),m(o)),H(t,f),i=!1,u()}}}function Pe(s,e,r){let{$$slots:n={},$$scope:o}=e,t=0;const a=()=>r(0,t++,t);return s.$$set=i=>{"$$scope"in i&&r(3,o=i.$$scope)},[t,n,a,o]}class ze extends q{constructor(e){super(),M(this,e,Pe,je,W,{})}}function Xe(s){let e,r,n=s[2]+s[0]+"",o;return{c(){e=E("div"),r=d("Header from A "),o=d(n),this.h()},l(t){e=V(t,"DIV",{slot:!0});var a=z(e);r=h(a,"Header from A "),o=h(a,n),a.forEach(m),this.h()},h(){ce(e,"slot","header")},m(t,a){_(t,e,a),T(e,r),T(e,o)},p(t,a){a&5&&n!==(n=t[2]+t[0]+"")&&X(o,n)},d(t){t&&m(e)}}}function Ze(s){let e,r,n,o,t,a,i,u;return t=new ze({props:{$$slots:{header:[Xe,({sum:f})=>({2:f}),({sum:f})=>f?4:0]},$$scope:{ctx:s}}}),{c(){e=E("button"),r=d("A: "),n=d(s[0]),o=S(),B(t.$$.fragment)},l(f){e=V(f,"BUTTON",{});var $=z(e);r=h($,"A: "),n=h($,s[0]),$.forEach(m),o=D(f),A(t.$$.fragment,f)},m(f,$){_(f,e,$),T(e,r),T(e,n),_(f,o,$),k(t,f,$),a=!0,i||(u=Y(e,"click",s[1]),i=!0)},p(f,[$]){(!a||$&1)&&X(n,f[0]);const b={};$&13&&(b.$$scope={dirty:$,ctx:f}),t.$set(b)},i(f){a||(g(t.$$.fragment,f),a=!0)},o(f){v(t.$$.fragment,f),a=!1},d(f){f&&(m(e),m(o)),H(t,f),i=!1,u()}}}function Fe(s,e,r){let n=0;return[n,()=>r(0,n++,n)]}class Ge extends q{constructor(e){super(),M(this,e,Fe,Ze,W,{})}}function Je(s){let e,r;return e=new Ge({}),{c(){B(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,o){k(e,n,o),r=!0},p:J,i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){H(e,n)}}}class G extends q{constructor(e){super(),M(this,e,null,Je,W,{})}}const Ke=`<script>\r
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
`,Qe=`<script>\r
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
`,Ye=`<script>\r
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
`,ye=`<script>\r
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
`,xe=`<script>\r
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
`,et=`<script>\r
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
`;function tt(s){let e;return{c(){e=d("slot forwarding")},l(r){e=h(r,"slot forwarding")},m(r,n){_(r,e,n)},d(r){r&&m(e)}}}function nt(s){let e,r,n,o;return r=new y({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),{c(){e=d("What is "),B(r.$$.fragment),n=d("?")},l(t){e=h(t,"What is "),A(r.$$.fragment,t),n=h(t,"?")},m(t,a){_(t,e,a),k(r,t,a),_(t,n,a),o=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){o||(g(r.$$.fragment,t),o=!0)},o(t){v(r.$$.fragment,t),o=!1},d(t){t&&(m(e),m(n)),H(r,t)}}}function rt(s){let e;return{c(){e=d("unique")},l(r){e=h(r,"unique")},m(r,n){_(r,e,n)},d(r){r&&m(e)}}}function st(s){let e,r,n,o;return r=new y({props:{$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){e=d('In this example we want to have two divs with the attribute slot="header". However this is impossible because slot attributes need to be '),B(r.$$.fragment),n=d(".")},l(t){e=h(t,'In this example we want to have two divs with the attribute slot="header". However this is impossible because slot attributes need to be '),A(r.$$.fragment,t),n=h(t,".")},m(t,a){_(t,e,a),k(r,t,a),_(t,n,a),o=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){o||(g(r.$$.fragment,t),o=!0)},o(t){v(r.$$.fragment,t),o=!1},d(t){t&&(m(e),m(n)),H(r,t)}}}function ot(s){let e;return{c(){e=d('{"<"}svelte:fragment>')},l(r){e=h(r,'{"<"}svelte:fragment>')},m(r,n){_(r,e,n)},d(r){r&&m(e)}}}function lt(s){let e,r;return e=new pe({props:{$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,o){k(e,n,o),r=!0},p(n,o){const t={};o&2&&(t.$$scope={dirty:o,ctx:n}),e.$set(t)},i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){H(e,n)}}}function at(s){let e,r,n,o;return r=new y({props:{$$slots:{default:[lt]},$$scope:{ctx:s}}}),{c(){e=d("We can fix this by using a "),B(r.$$.fragment),n=d(" tag instead.")},l(t){e=h(t,"We can fix this by using a "),A(r.$$.fragment,t),n=h(t," tag instead.")},m(t,a){_(t,e,a),k(r,t,a),_(t,n,a),o=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),r.$set(i)},i(t){o||(g(r.$$.fragment,t),o=!0)},o(t){v(r.$$.fragment,t),o=!1},d(t){t&&(m(e),m(n)),H(r,t)}}}function ft(s){let e;return{c(){e=d("In the next example we have three buttons. Clicking any of them will increase the sum.")},l(r){e=h(r,"In the next example we have three buttons. Clicking any of them will increase the sum.")},m(r,n){_(r,e,n)},d(r){r&&m(e)}}}function $t(s){let e,r,n,o,t,a,i,u,f,$,b,w;return e=new Z({props:{$$slots:{default:[nt]},$$scope:{ctx:s}}}),n=new Z({props:{$$slots:{default:[st]},$$scope:{ctx:s}}}),t=new Z({props:{$$slots:{default:[at]},$$scope:{ctx:s}}}),i=new te({props:{name:[{name:"B",comp:F,raw:Qe,text:""},{name:"C",comp:F,raw:Ye,text:""},{name:"App",comp:F,raw:De,text:""},{name:"A",comp:F,raw:Le,text:""}]}}),f=new Z({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),b=new te({props:{name:[{name:"A2",comp:G,raw:ye,text:"Here we don't have props in the components script tags but instead in the slots."},{name:"B2",comp:G,raw:xe,text:""},{name:"C2",comp:G,raw:et,text:""},{name:"App2",comp:G,raw:Ke,text:""}]}}),{c(){B(e.$$.fragment),r=S(),B(n.$$.fragment),o=S(),B(t.$$.fragment),a=S(),B(i.$$.fragment),u=S(),B(f.$$.fragment),$=S(),B(b.$$.fragment)},l(l){A(e.$$.fragment,l),r=D(l),A(n.$$.fragment,l),o=D(l),A(t.$$.fragment,l),a=D(l),A(i.$$.fragment,l),u=D(l),A(f.$$.fragment,l),$=D(l),A(b.$$.fragment,l)},m(l,p){k(e,l,p),_(l,r,p),k(n,l,p),_(l,o,p),k(t,l,p),_(l,a,p),k(i,l,p),_(l,u,p),k(f,l,p),_(l,$,p),k(b,l,p),w=!0},p(l,p){const I={};p&2&&(I.$$scope={dirty:p,ctx:l}),e.$set(I);const P={};p&2&&(P.$$scope={dirty:p,ctx:l}),n.$set(P);const R={};p&2&&(R.$$scope={dirty:p,ctx:l}),t.$set(R);const c={};p&2&&(c.$$scope={dirty:p,ctx:l}),f.$set(c)},i(l){w||(g(e.$$.fragment,l),g(n.$$.fragment,l),g(t.$$.fragment,l),g(i.$$.fragment,l),g(f.$$.fragment,l),g(b.$$.fragment,l),w=!0)},o(l){v(e.$$.fragment,l),v(n.$$.fragment,l),v(t.$$.fragment,l),v(i.$$.fragment,l),v(f.$$.fragment,l),v(b.$$.fragment,l),w=!1},d(l){l&&(m(r),m(o),m(a),m(u),m($)),H(e,l),H(n,l),H(t,l),H(i,l),H(f,l),H(b,l)}}}function it(s){let e,r;const n=[s[0],ie];let o={$$slots:{default:[$t]},$$scope:{ctx:s}};for(let t=0;t<n.length;t+=1)o=Q(o,n[t]);return e=new ue({props:o}),{c(){B(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},p(t,[a]){const i=a&1?me(n,[a&1&&ee(t[0]),a&0&&ee(ie)]):{};a&2&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}const ie={title:"<slot/> forwarding",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-22T00:00:00.000Z",layout:"notes"};function ct(s,e,r){return s.$$set=n=>{r(0,e=Q(Q({},e),x(n)))},e=x(e),[e]}class vt extends q{constructor(e){super(),M(this,e,ct,it,W,{})}}export{vt as default,ie as metadata};
