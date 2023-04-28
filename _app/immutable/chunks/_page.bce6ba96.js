import{S as q,i as E,s as O,q as F,k as U,r as T,l as M,n as A,b as _,a4 as S,R as W,ao as R,H as z,h as $,a as I,m as se,c as N,D as ae,V as fe,e as Y,v as X,d as b,f as x,g as w,w as j,a5 as D,y as d,z as B,A as g,a6 as L,B as y,x as H,J as Q,K as pe,L as oe,M as ie}from"./index.5815ca79.js";import{M as me,P as C}from"./mdsvex-layout-notes.7536afaf.js";import{S as V}from"./ShowMany.2af9ac15.js";import{S as le}from"./Strong.b8abec16.js";function ce(u){let e,n,t,l;return{c(){e=F(`I am Foo\r
\r
`),n=U("input"),this.h()},l(r){e=T(r,`I am Foo\r
\r
`),n=M(r,"INPUT",{type:!0,name:!0,id:!0}),this.h()},h(){A(n,"type","number"),A(n,"name",""),A(n,"id","")},m(r,a){_(r,e,a),_(r,n,a),S(n,u[0]),t||(l=W(n,"input",u[1]),t=!0)},p(r,[a]){a&1&&R(n.value)!==r[0]&&S(n,r[0])},i:z,o:z,d(r){r&&$(e),r&&$(n),t=!1,l()}}}function $e(u,e,n){let{value:t}=e;function l(){t=R(this.value),n(0,t)}return u.$$set=r=>{"value"in r&&n(0,t=r.value)},[t,l]}class J extends q{constructor(e){super(),E(this,e,$e,ce,O,{value:0})}}function _e(u){let e,n,t,l,r,a,o,c;return{c(){e=F(`I am Bar\r
\r
`),n=U("button"),t=F("200"),l=I(),r=U("button"),a=F("400")},l(m){e=T(m,`I am Bar\r
\r
`),n=M(m,"BUTTON",{});var p=se(n);t=T(p,"200"),p.forEach($),l=N(m),r=M(m,"BUTTON",{});var h=se(r);a=T(h,"400"),h.forEach($)},m(m,p){_(m,e,p),_(m,n,p),ae(n,t),_(m,l,p),_(m,r,p),ae(r,a),o||(c=[W(n,"click",u[1]),W(r,"click",u[2])],o=!0)},p:z,i:z,o:z,d(m){m&&$(e),m&&$(n),m&&$(l),m&&$(r),o=!1,fe(c)}}}function ve(u,e,n){let{value:t}=e;const l=()=>n(0,t=200),r=()=>n(0,t=400);return u.$$set=a=>{"value"in a&&n(0,t=a.value)},[t,l,r]}class K extends q{constructor(e){super(),E(this,e,ve,_e,O,{value:0})}}function he(u){let e,n,t;function l(a){u[3](a)}let r={a:"a",b:"b",c:"c"};return u[0]!==void 0&&(r.value=u[0]),e=new K({props:r}),j.push(()=>D(e,"value",l)),{c(){d(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,o){g(e,a,o),t=!0},p(a,o){const c={};!n&&o&1&&(n=!0,c.value=a[0],L(()=>n=!1)),e.$set(c)},i(a){t||(w(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){y(e,a)}}}function be(u){let e,n,t;function l(a){u[2](a)}let r={a:"a",b:"b",c:"c"};return u[0]!==void 0&&(r.value=u[0]),e=new J({props:r}),j.push(()=>D(e,"value",l)),{c(){d(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,o){g(e,a,o),t=!0},p(a,o){const c={};!n&&o&1&&(n=!0,c.value=a[0],L(()=>n=!1)),e.$set(c)},i(a){t||(w(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){y(e,a)}}}function we(u){let e,n,t,l,r,a,o,c;const m=[be,he],p=[];function h(s,f){return s[0]>50?0:1}return t=h(u),l=p[t]=m[t](u),{c(){e=U("input"),n=I(),l.c(),r=Y(),this.h()},l(s){e=M(s,"INPUT",{type:!0,name:!0,id:!0}),n=N(s),l.l(s),r=Y(),this.h()},h(){A(e,"type","number"),A(e,"name",""),A(e,"id","")},m(s,f){_(s,e,f),S(e,u[0]),_(s,n,f),p[t].m(s,f),_(s,r,f),a=!0,o||(c=W(e,"input",u[1]),o=!0)},p(s,[f]){f&1&&R(e.value)!==s[0]&&S(e,s[0]);let k=t;t=h(s),t===k?p[t].p(s,f):(X(),b(p[k],1,1,()=>{p[k]=null}),x(),l=p[t],l?l.p(s,f):(l=p[t]=m[t](s),l.c()),w(l,1),l.m(r.parentNode,r))},i(s){a||(w(l),a=!0)},o(s){b(l),a=!1},d(s){s&&$(e),s&&$(n),p[t].d(s),s&&$(r),o=!1,c()}}}function de(u,e,n){let t=0;function l(){t=R(this.value),n(0,t)}function r(o){t=o,n(0,t)}function a(o){t=o,n(0,t)}return[t,l,r,a]}class P extends q{constructor(e){super(),E(this,e,de,we,O,{})}}const ge=`<script>\r
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
`;function ye(u){let e,n,t,l,r,a,o,c;function m(s){u[2](s)}var p=u[0]>50?J:K;function h(s){let f={a:"a",b:"b",c:"c"};return s[0]!==void 0&&(f.value=s[0]),{props:f}}return p&&(t=H(p,h(u)),j.push(()=>D(t,"value",m))),{c(){e=U("input"),n=I(),t&&d(t.$$.fragment),r=Y(),this.h()},l(s){e=M(s,"INPUT",{type:!0,name:!0,id:!0}),n=N(s),t&&B(t.$$.fragment,s),r=Y(),this.h()},h(){A(e,"type","number"),A(e,"name",""),A(e,"id","")},m(s,f){_(s,e,f),S(e,u[0]),_(s,n,f),t&&g(t,s,f),_(s,r,f),a=!0,o||(c=W(e,"input",u[1]),o=!0)},p(s,[f]){f&1&&R(e.value)!==s[0]&&S(e,s[0]);const k={};if(!l&&f&1&&(l=!0,k.value=s[0],L(()=>l=!1)),f&1&&p!==(p=s[0]>50?J:K)){if(t){X();const i=t;b(i.$$.fragment,1,0,()=>{y(i,1)}),x()}p?(t=H(p,h(s)),j.push(()=>D(t,"value",m)),d(t.$$.fragment),w(t.$$.fragment,1),g(t,r.parentNode,r)):t=null}else p&&t.$set(k)},i(s){a||(t&&w(t.$$.fragment,s),a=!0)},o(s){t&&b(t.$$.fragment,s),a=!1},d(s){s&&$(e),s&&$(n),s&&$(r),t&&y(t,s),o=!1,c()}}}function ke(u,e,n){let t=0;function l(){t=R(this.value),n(0,t)}function r(a){t=a,n(0,t)}return[t,l,r]}class Be extends q{constructor(e){super(),E(this,e,ke,ye,O,{})}}const Fe=`<script>\r
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
`;function Te(u){let e,n,t,l,r,a,o,c;function m(s){u[3](s)}var p=u[1];function h(s){let f={a:"a",b:"b",c:"c"};return s[0]!==void 0&&(f.value=s[0]),{props:f}}return p&&(t=H(p,h(u)),j.push(()=>D(t,"value",m))),{c(){e=U("input"),n=I(),t&&d(t.$$.fragment),r=Y(),this.h()},l(s){e=M(s,"INPUT",{type:!0,name:!0,id:!0}),n=N(s),t&&B(t.$$.fragment,s),r=Y(),this.h()},h(){A(e,"type","number"),A(e,"name",""),A(e,"id","")},m(s,f){_(s,e,f),S(e,u[0]),_(s,n,f),t&&g(t,s,f),_(s,r,f),a=!0,o||(c=W(e,"input",u[2]),o=!0)},p(s,[f]){f&1&&R(e.value)!==s[0]&&S(e,s[0]);const k={};if(!l&&f&1&&(l=!0,k.value=s[0],L(()=>l=!1)),f&2&&p!==(p=s[1])){if(t){X();const i=t;b(i.$$.fragment,1,0,()=>{y(i,1)}),x()}p?(t=H(p,h(s)),j.push(()=>D(t,"value",m)),d(t.$$.fragment),w(t.$$.fragment,1),g(t,r.parentNode,r)):t=null}else p&&t.$set(k)},i(s){a||(t&&w(t.$$.fragment,s),a=!0)},o(s){t&&b(t.$$.fragment,s),a=!1},d(s){s&&$(e),s&&$(n),s&&$(r),t&&y(t,s),o=!1,c()}}}function Ae(u,e,n){let t,l=0;function r(){l=R(this.value),n(0,l)}function a(o){l=o,n(0,l)}return u.$$.update=()=>{u.$$.dirty&1&&n(1,t=l>210?null:l>50?J:K)},[l,t,r,a]}class Ie extends q{constructor(e){super(),E(this,e,Ae,Te,O,{})}}const Ne=`<script>\r
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
`,Z=`<script>\r
	export let value;\r
<\/script>\r
\r
I am Foo\r
\r
<input type="number" name="" id="" bind:value />\r
\r
<style>\r
</style>\r
`,G=`<script>\r
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
`;function Se(u){let e;return{c(){e=F("Sometimes you may want to show a certain component depending on some condition. You can do so with an if block:")},l(n){e=T(n,"Sometimes you may want to show a certain component depending on some condition. You can do so with an if block:")},m(n,t){_(n,e,t)},d(n){n&&$(e)}}}function Re(u){let e;return{c(){e=F("This is a bit annoying though because we want to use the same props but have to have them in two (or more) places, not very DRY compliant. We could do something like create a variable with an object for the props and spread them, but it's still not ideal because we still have to repeat the bind: and so on.")},l(n){e=T(n,"This is a bit annoying though because we want to use the same props but have to have them in two (or more) places, not very DRY compliant. We could do something like create a variable with an object for the props and spread them, but it's still not ideal because we still have to repeat the bind: and so on.")},m(n,t){_(n,e,t)},d(n){n&&$(e)}}}function Pe(u){let e;return{c(){e=F("svelte:component")},l(n){e=T(n,"svelte:component")},m(n,t){_(n,e,t)},d(n){n&&$(e)}}}function Ue(u){let e;return{c(){e=F("this")},l(n){e=T(n,"this")},m(n,t){_(n,e,t)},d(n){n&&$(e)}}}function Me(u){let e,n,t,l,r,a;return n=new le({props:{$$slots:{default:[Pe]},$$scope:{ctx:u}}}),l=new le({props:{$$slots:{default:[Ue]},$$scope:{ctx:u}}}),{c(){e=F("There is a better way: "),d(n.$$.fragment),t=F(". By using this special Svelte element we can pass in a "),d(l.$$.fragment),r=F(" value with the component we want.")},l(o){e=T(o,"There is a better way: "),B(n.$$.fragment,o),t=T(o,". By using this special Svelte element we can pass in a "),B(l.$$.fragment,o),r=T(o," value with the component we want.")},m(o,c){_(o,e,c),g(n,o,c),_(o,t,c),g(l,o,c),_(o,r,c),a=!0},p(o,c){const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),n.$set(m);const p={};c&2&&(p.$$scope={dirty:c,ctx:o}),l.$set(p)},i(o){a||(w(n.$$.fragment,o),w(l.$$.fragment,o),a=!0)},o(o){b(n.$$.fragment,o),b(l.$$.fragment,o),a=!1},d(o){o&&$(e),y(n,o),o&&$(t),y(l,o),o&&$(r)}}}function We(u){let e;return{c(){e=F("We could even do something like this where we have a reactive statement that sets the component.")},l(n){e=T(n,"We could even do something like this where we have a reactive statement that sets the component.")},m(n,t){_(n,e,t)},d(n){n&&$(e)}}}function Ye(u){let e,n,t,l,r,a,o,c,m,p,h,s,f,k;return e=new C({props:{$$slots:{default:[Se]},$$scope:{ctx:u}}}),t=new V({props:{name:[{name:"App",comp:P,raw:ge,text:""},{name:"Foo",comp:P,raw:Z,text:""},{name:"Bar",comp:P,raw:G,text:""}]}}),r=new C({props:{$$slots:{default:[Re]},$$scope:{ctx:u}}}),o=new C({props:{$$slots:{default:[Me]},$$scope:{ctx:u}}}),m=new V({props:{name:[{name:"App2",comp:Be,raw:Fe,text:""},{name:"Foo",comp:P,raw:Z,text:""},{name:"Bar",comp:P,raw:G,text:""}]}}),h=new C({props:{$$slots:{default:[We]},$$scope:{ctx:u}}}),f=new V({props:{name:[{name:"App3",comp:Ie,raw:Ne,text:"Note that passing in null or undefined will effectively hide the component."},{name:"Foo",comp:P,raw:Z,text:""},{name:"Bar",comp:P,raw:G,text:""}]}}),{c(){d(e.$$.fragment),n=I(),d(t.$$.fragment),l=I(),d(r.$$.fragment),a=I(),d(o.$$.fragment),c=I(),d(m.$$.fragment),p=I(),d(h.$$.fragment),s=I(),d(f.$$.fragment)},l(i){B(e.$$.fragment,i),n=N(i),B(t.$$.fragment,i),l=N(i),B(r.$$.fragment,i),a=N(i),B(o.$$.fragment,i),c=N(i),B(m.$$.fragment,i),p=N(i),B(h.$$.fragment,i),s=N(i),B(f.$$.fragment,i)},m(i,v){g(e,i,v),_(i,n,v),g(t,i,v),_(i,l,v),g(r,i,v),_(i,a,v),g(o,i,v),_(i,c,v),g(m,i,v),_(i,p,v),g(h,i,v),_(i,s,v),g(f,i,v),k=!0},p(i,v){const ee={};v&2&&(ee.$$scope={dirty:v,ctx:i}),e.$set(ee);const te={};v&2&&(te.$$scope={dirty:v,ctx:i}),r.$set(te);const ne={};v&2&&(ne.$$scope={dirty:v,ctx:i}),o.$set(ne);const re={};v&2&&(re.$$scope={dirty:v,ctx:i}),h.$set(re)},i(i){k||(w(e.$$.fragment,i),w(t.$$.fragment,i),w(r.$$.fragment,i),w(o.$$.fragment,i),w(m.$$.fragment,i),w(h.$$.fragment,i),w(f.$$.fragment,i),k=!0)},o(i){b(e.$$.fragment,i),b(t.$$.fragment,i),b(r.$$.fragment,i),b(o.$$.fragment,i),b(m.$$.fragment,i),b(h.$$.fragment,i),b(f.$$.fragment,i),k=!1},d(i){y(e,i),i&&$(n),y(t,i),i&&$(l),y(r,i),i&&$(a),y(o,i),i&&$(c),y(m,i),i&&$(p),y(h,i),i&&$(s),y(f,i)}}}function je(u){let e,n;const t=[u[0],ue];let l={$$slots:{default:[Ye]},$$scope:{ctx:u}};for(let r=0;r<t.length;r+=1)l=Q(l,t[r]);return e=new me({props:l}),{c(){d(e.$$.fragment)},l(r){B(e.$$.fragment,r)},m(r,a){g(e,r,a),n=!0},p(r,[a]){const o=a&1?pe(t,[a&1&&oe(r[0]),a&0&&oe(ue)]):{};a&2&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}const ue={title:"<svelte:component>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-25T00:00:00.000Z",layout:"notes"};function De(u,e,n){return u.$$set=t=>{n(0,e=Q(Q({},e),ie(t)))},e=ie(e),[e]}class Ce extends q{constructor(e){super(),E(this,e,De,je,O,{})}}export{Ce as default,ue as metadata};
