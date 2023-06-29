import{s as M,l as N,f as P,m as S,g as U,j as F,i as $,a8 as A,X as j,am as C,z as O,d as _,a as T,u as se,c as I,H as ue,e as W,p as Y,a9 as G,q as X,C as Q,D as re}from"./scheduler.a7cd560e.js";import{S as q,i as z,g as V,t as h,c as x,a as b,h as D,b as g,d as B,m as w,e as y}from"./index.396264e7.js";import{g as pe,a as oe}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as fe,P as H}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as J}from"./ShowMany.db7be1f3.js";import{S as ie}from"./Strong.097578ae.js";function me(l){let e,n,t,o;return{c(){e=N(`I am Foo\r
\r
`),n=P("input"),this.h()},l(a){e=S(a,`I am Foo\r
\r
`),n=U(a,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){F(n,"type","number"),F(n,"name",""),F(n,"id","")},m(a,r){$(a,e,r),$(a,n,r),A(n,l[0]),t||(o=j(n,"input",l[1]),t=!0)},p(a,[r]){r&1&&C(n.value)!==a[0]&&A(n,a[0])},i:O,o:O,d(a){a&&(_(e),_(n)),t=!1,o()}}}function ce(l,e,n){let{value:t}=e;function o(){t=C(this.value),n(0,t)}return l.$$set=a=>{"value"in a&&n(0,t=a.value)},[t,o]}class Z extends q{constructor(e){super(),z(this,e,ce,me,M,{value:0})}}function $e(l){let e,n,t="200",o,a,r="400",i,m;return{c(){e=N(`I am Bar\r
\r
`),n=P("button"),n.textContent=t,o=T(),a=P("button"),a.textContent=r},l(c){e=S(c,`I am Bar\r
\r
`),n=U(c,"BUTTON",{["data-svelte-h"]:!0}),se(n)!=="svelte-4baxaz"&&(n.textContent=t),o=I(c),a=U(c,"BUTTON",{["data-svelte-h"]:!0}),se(a)!=="svelte-e1pli7"&&(a.textContent=r)},m(c,f){$(c,e,f),$(c,n,f),$(c,o,f),$(c,a,f),i||(m=[j(n,"click",l[1]),j(a,"click",l[2])],i=!0)},p:O,i:O,o:O,d(c){c&&(_(e),_(n),_(o),_(a)),i=!1,ue(m)}}}function _e(l,e,n){let{value:t}=e;const o=()=>n(0,t=200),a=()=>n(0,t=400);return l.$$set=r=>{"value"in r&&n(0,t=r.value)},[t,o,a]}class E extends q{constructor(e){super(),z(this,e,_e,$e,M,{value:0})}}function ve(l){let e,n,t;function o(r){l[3](r)}let a={a:"a",b:"b",c:"c"};return l[0]!==void 0&&(a.value=l[0]),e=new E({props:a}),Y.push(()=>D(e,"value",o)),{c(){g(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,i){w(e,r,i),t=!0},p(r,i){const m={};!n&&i&1&&(n=!0,m.value=r[0],G(()=>n=!1)),e.$set(m)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){h(e.$$.fragment,r),t=!1},d(r){y(e,r)}}}function he(l){let e,n,t;function o(r){l[2](r)}let a={a:"a",b:"b",c:"c"};return l[0]!==void 0&&(a.value=l[0]),e=new Z({props:a}),Y.push(()=>D(e,"value",o)),{c(){g(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,i){w(e,r,i),t=!0},p(r,i){const m={};!n&&i&1&&(n=!0,m.value=r[0],G(()=>n=!1)),e.$set(m)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){h(e.$$.fragment,r),t=!1},d(r){y(e,r)}}}function be(l){let e,n,t,o,a,r,i,m;const c=[he,ve],f=[];function d(s,p){return s[0]>50?0:1}return t=d(l),o=f[t]=c[t](l),{c(){e=P("input"),n=T(),o.c(),a=W(),this.h()},l(s){e=U(s,"INPUT",{type:!0,name:!0,id:!0}),n=I(s),o.l(s),a=W(),this.h()},h(){F(e,"type","number"),F(e,"name",""),F(e,"id","")},m(s,p){$(s,e,p),A(e,l[0]),$(s,n,p),f[t].m(s,p),$(s,a,p),r=!0,i||(m=j(e,"input",l[1]),i=!0)},p(s,[p]){p&1&&C(e.value)!==s[0]&&A(e,s[0]);let k=t;t=d(s),t===k?f[t].p(s,p):(V(),h(f[k],1,1,()=>{f[k]=null}),x(),o=f[t],o?o.p(s,p):(o=f[t]=c[t](s),o.c()),b(o,1),o.m(a.parentNode,a))},i(s){r||(b(o),r=!0)},o(s){h(o),r=!1},d(s){s&&(_(e),_(n),_(a)),f[t].d(s),i=!1,m()}}}function de(l,e,n){let t=0;function o(){t=C(this.value),n(0,t)}function a(i){t=i,n(0,t)}function r(i){t=i,n(0,t)}return[t,o,a,r]}class R extends q{constructor(e){super(),z(this,e,de,be,M,{})}}const ge=`<script>\r
	import Foo from "./Foo.svelte";\r
	import Bar from "./Bar.svelte";\r
\r
	let value = 0;\r
<\/script>\r
\r
<input type="number" name="" bind:value id="" />\r
\r
{#if value > 50}\r
	<Foo bind:value a="a" b="b" c="c" />\r
{:else}\r
	<Bar bind:value a="a" b="b" c="c" />\r
{/if}\r
\r
<style>\r
</style>\r
`;function we(l){let e,n,t,o,a,r,i,m;function c(s){l[2](s)}var f=l[0]>50?Z:E;function d(s){let p={a:"a",b:"b",c:"c"};return s[0]!==void 0&&(p.value=s[0]),{props:p}}return f&&(t=X(f,d(l)),Y.push(()=>D(t,"value",c))),{c(){e=P("input"),n=T(),t&&g(t.$$.fragment),a=W(),this.h()},l(s){e=U(s,"INPUT",{type:!0,name:!0,id:!0}),n=I(s),t&&B(t.$$.fragment,s),a=W(),this.h()},h(){F(e,"type","number"),F(e,"name",""),F(e,"id","")},m(s,p){$(s,e,p),A(e,l[0]),$(s,n,p),t&&w(t,s,p),$(s,a,p),r=!0,i||(m=j(e,"input",l[1]),i=!0)},p(s,[p]){p&1&&C(e.value)!==s[0]&&A(e,s[0]);const k={};if(!o&&p&1&&(o=!0,k.value=s[0],G(()=>o=!1)),p&1&&f!==(f=s[0]>50?Z:E)){if(t){V();const u=t;h(u.$$.fragment,1,0,()=>{y(u,1)}),x()}f?(t=X(f,d(s)),Y.push(()=>D(t,"value",c)),g(t.$$.fragment),b(t.$$.fragment,1),w(t,a.parentNode,a)):t=null}else f&&t.$set(k)},i(s){r||(t&&b(t.$$.fragment,s),r=!0)},o(s){t&&h(t.$$.fragment,s),r=!1},d(s){s&&(_(e),_(n),_(a)),t&&y(t,s),i=!1,m()}}}function ye(l,e,n){let t=0;function o(){t=C(this.value),n(0,t)}function a(r){t=r,n(0,t)}return[t,o,a]}class ke extends q{constructor(e){super(),z(this,e,ye,we,M,{})}}const Be=`<script>\r
	import Foo from "./Foo.svelte";\r
	import Bar from "./Bar.svelte";\r
\r
	let value = 0;\r
<\/script>\r
\r
<input type="number" name="" bind:value id="" />\r
\r
<!-- "this" takes in the component -->\r
<svelte:component this={value > 50 ? Foo : Bar} bind:value a="a" b="b" c="c" />\r
\r
<style>\r
</style>\r
`;function Fe(l){let e,n,t,o,a,r,i,m;function c(s){l[3](s)}var f=l[1];function d(s){let p={a:"a",b:"b",c:"c"};return s[0]!==void 0&&(p.value=s[0]),{props:p}}return f&&(t=X(f,d(l)),Y.push(()=>D(t,"value",c))),{c(){e=P("input"),n=T(),t&&g(t.$$.fragment),a=W(),this.h()},l(s){e=U(s,"INPUT",{type:!0,name:!0,id:!0}),n=I(s),t&&B(t.$$.fragment,s),a=W(),this.h()},h(){F(e,"type","number"),F(e,"name",""),F(e,"id","")},m(s,p){$(s,e,p),A(e,l[0]),$(s,n,p),t&&w(t,s,p),$(s,a,p),r=!0,i||(m=j(e,"input",l[2]),i=!0)},p(s,[p]){p&1&&C(e.value)!==s[0]&&A(e,s[0]);const k={};if(!o&&p&1&&(o=!0,k.value=s[0],G(()=>o=!1)),p&2&&f!==(f=s[1])){if(t){V();const u=t;h(u.$$.fragment,1,0,()=>{y(u,1)}),x()}f?(t=X(f,d(s)),Y.push(()=>D(t,"value",c)),g(t.$$.fragment),b(t.$$.fragment,1),w(t,a.parentNode,a)):t=null}else f&&t.$set(k)},i(s){r||(t&&b(t.$$.fragment,s),r=!0)},o(s){t&&h(t.$$.fragment,s),r=!1},d(s){s&&(_(e),_(n),_(a)),t&&y(t,s),i=!1,m()}}}function Te(l,e,n){let t,o=0;function a(){o=C(this.value),n(0,o)}function r(i){o=i,n(0,o)}return l.$$.update=()=>{l.$$.dirty&1&&n(1,t=o>210?null:o>50?Z:E)},[o,t,a,r]}class Ie extends q{constructor(e){super(),z(this,e,Te,Fe,M,{})}}const Ne=`<script>\r
	import Foo from "./Foo.svelte";\r
	import Bar from "./Bar.svelte";\r
\r
	let value = 0;\r
\r
	$: component = value > 210 ? null : value > 50 ? Foo : Bar;\r
<\/script>\r
\r
<input type="number" name="" bind:value id="" />\r
\r
<!-- "this" takes in the component -->\r
<svelte:component this={component} bind:value a="a" b="b" c="c" />\r
\r
<style>\r
</style>\r
`,K=`<script>\r
	export let value;\r
<\/script>\r
\r
I am Foo\r
\r
<input type="number" name="" id="" bind:value />\r
\r
<style>\r
</style>\r
`,L=`<script>\r
	export let value;\r
<\/script>\r
\r
I am Bar\r
\r
<button on:click={() => (value = 200)}>200</button>\r
<button on:click={() => (value = 400)}>400</button>\r
\r
<style>\r
</style>\r
`;function Se(l){let e;return{c(){e=N("Sometimes you may want to show a certain component depending on some condition. You can do so with an if block:")},l(n){e=S(n,"Sometimes you may want to show a certain component depending on some condition. You can do so with an if block:")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Ae(l){let e;return{c(){e=N("This is a bit annoying though because we want to use the same props but have to have them in two (or more) places, not very DRY compliant. We could do something like create a variable with an object for the props and spread them, but it's still not ideal because we still have to repeat the bind: and so on.")},l(n){e=S(n,"This is a bit annoying though because we want to use the same props but have to have them in two (or more) places, not very DRY compliant. We could do something like create a variable with an object for the props and spread them, but it's still not ideal because we still have to repeat the bind: and so on.")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Ce(l){let e;return{c(){e=N("svelte:component")},l(n){e=S(n,"svelte:component")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Re(l){let e;return{c(){e=N("this")},l(n){e=S(n,"this")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function Pe(l){let e,n,t,o,a,r;return n=new ie({props:{$$slots:{default:[Ce]},$$scope:{ctx:l}}}),o=new ie({props:{$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){e=N("There is a better way: "),g(n.$$.fragment),t=N(". By using this special Svelte element we can pass in a "),g(o.$$.fragment),a=N(" value with the component we want.")},l(i){e=S(i,"There is a better way: "),B(n.$$.fragment,i),t=S(i,". By using this special Svelte element we can pass in a "),B(o.$$.fragment,i),a=S(i," value with the component we want.")},m(i,m){$(i,e,m),w(n,i,m),$(i,t,m),w(o,i,m),$(i,a,m),r=!0},p(i,m){const c={};m&2&&(c.$$scope={dirty:m,ctx:i}),n.$set(c);const f={};m&2&&(f.$$scope={dirty:m,ctx:i}),o.$set(f)},i(i){r||(b(n.$$.fragment,i),b(o.$$.fragment,i),r=!0)},o(i){h(n.$$.fragment,i),h(o.$$.fragment,i),r=!1},d(i){i&&(_(e),_(t),_(a)),y(n,i),y(o,i)}}}function Ue(l){let e;return{c(){e=N("We could even do something like this where we have a reactive statement that sets the component.")},l(n){e=S(n,"We could even do something like this where we have a reactive statement that sets the component.")},m(n,t){$(n,e,t)},d(n){n&&_(e)}}}function je(l){let e,n,t,o,a,r,i,m,c,f,d,s,p,k;return e=new H({props:{$$slots:{default:[Se]},$$scope:{ctx:l}}}),t=new J({props:{name:[{name:"App",comp:R,raw:ge,text:""},{name:"Foo",comp:R,raw:K,text:""},{name:"Bar",comp:R,raw:L,text:""}]}}),a=new H({props:{$$slots:{default:[Ae]},$$scope:{ctx:l}}}),i=new H({props:{$$slots:{default:[Pe]},$$scope:{ctx:l}}}),c=new J({props:{name:[{name:"App2",comp:ke,raw:Be,text:""},{name:"Foo",comp:R,raw:K,text:""},{name:"Bar",comp:R,raw:L,text:""}]}}),d=new H({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}}),p=new J({props:{name:[{name:"App3",comp:Ie,raw:Ne,text:"Note that passing in null or undefined will effectively hide the component."},{name:"Foo",comp:R,raw:K,text:""},{name:"Bar",comp:R,raw:L,text:""}]}}),{c(){g(e.$$.fragment),n=T(),g(t.$$.fragment),o=T(),g(a.$$.fragment),r=T(),g(i.$$.fragment),m=T(),g(c.$$.fragment),f=T(),g(d.$$.fragment),s=T(),g(p.$$.fragment)},l(u){B(e.$$.fragment,u),n=I(u),B(t.$$.fragment,u),o=I(u),B(a.$$.fragment,u),r=I(u),B(i.$$.fragment,u),m=I(u),B(c.$$.fragment,u),f=I(u),B(d.$$.fragment,u),s=I(u),B(p.$$.fragment,u)},m(u,v){w(e,u,v),$(u,n,v),w(t,u,v),$(u,o,v),w(a,u,v),$(u,r,v),w(i,u,v),$(u,m,v),w(c,u,v),$(u,f,v),w(d,u,v),$(u,s,v),w(p,u,v),k=!0},p(u,v){const ee={};v&2&&(ee.$$scope={dirty:v,ctx:u}),e.$set(ee);const te={};v&2&&(te.$$scope={dirty:v,ctx:u}),a.$set(te);const ne={};v&2&&(ne.$$scope={dirty:v,ctx:u}),i.$set(ne);const ae={};v&2&&(ae.$$scope={dirty:v,ctx:u}),d.$set(ae)},i(u){k||(b(e.$$.fragment,u),b(t.$$.fragment,u),b(a.$$.fragment,u),b(i.$$.fragment,u),b(c.$$.fragment,u),b(d.$$.fragment,u),b(p.$$.fragment,u),k=!0)},o(u){h(e.$$.fragment,u),h(t.$$.fragment,u),h(a.$$.fragment,u),h(i.$$.fragment,u),h(c.$$.fragment,u),h(d.$$.fragment,u),h(p.$$.fragment,u),k=!1},d(u){u&&(_(n),_(o),_(r),_(m),_(f),_(s)),y(e,u),y(t,u),y(a,u),y(i,u),y(c,u),y(d,u),y(p,u)}}}function We(l){let e,n;const t=[l[0],le];let o={$$slots:{default:[je]},$$scope:{ctx:l}};for(let a=0;a<t.length;a+=1)o=Q(o,t[a]);return e=new fe({props:o}),{c(){g(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,r){w(e,a,r),n=!0},p(a,[r]){const i=r&1?pe(t,[r&1&&oe(a[0]),r&0&&oe(le)]):{};r&2&&(i.$$scope={dirty:r,ctx:a}),e.$set(i)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){h(e.$$.fragment,a),n=!1},d(a){y(e,a)}}}const le={title:"<svelte:component>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-25T00:00:00.000Z",layout:"notes"};function Ye(l,e,n){return l.$$set=t=>{n(0,e=Q(Q({},e),re(t)))},e=re(e),[e]}class Xe extends q{constructor(e){super(),z(this,e,Ye,We,M,{})}}export{Xe as default,le as metadata};
