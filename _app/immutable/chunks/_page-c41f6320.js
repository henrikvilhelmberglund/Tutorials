import{S as te,i as ne,s as se,k as N,a as T,q as c,l as U,c as I,m as q,r as v,h as m,n as he,b as i,D,N as M,u as ge,B as z,Q as de,_ as we,X as Oe,w as b,x as h,y as d,f as k,t as S,z as V,$ as Ae,a0 as qe,a1 as Me,J as be,K as He,L as Ne,M as Ue}from"./index-bc81051f.js";import{M as We,P as A}from"./mdsvex-layout-notes-19848e84.js";import{S as ee}from"./ShowCode-3bfd614a.js";import{S as E}from"./Strong-a34d9bbd.js";function je(r){let t,e,$,o,f,l,u,p,g,B;return{c(){t=N("input"),e=T(),$=N("button"),o=c('Set myValue to "hello"'),f=T(),l=N("div"),u=c("value: "),p=c(r[0]),this.h()},l(n){t=U(n,"INPUT",{type:!0}),e=I(n),$=U(n,"BUTTON",{});var a=q($);o=v(a,'Set myValue to "hello"'),a.forEach(m),f=I(n),l=U(n,"DIV",{});var _=q(l);u=v(_,"value: "),p=v(_,r[0]),_.forEach(m),this.h()},h(){t.value=r[0],he(t,"type","text")},m(n,a){i(n,t,a),i(n,e,a),i(n,$,a),D($,o),i(n,f,a),i(n,l,a),D(l,u),D(l,p),g||(B=[M(t,"input",r[1]),M($,"click",r[2])],g=!0)},p(n,[a]){a&1&&t.value!==n[0]&&(t.value=n[0]),a&1&&ge(p,n[0])},i:z,o:z,d(n){n&&m(t),n&&m(e),n&&m($),n&&m(f),n&&m(l),g=!1,de(B)}}}function ze(r,t,e){let $="";function o(l){e(0,$=this.value)}return[$,o,()=>e(0,$="hello")]}class Je extends te{constructor(t){super(),ne(this,t,ze,je,se,{})}}const Ke=`<script>\r
	let myValue = "";\r
	function onInput(event) {\r
		myValue = this.value;\r
	}\r
<\/script>\r
\r
<input on:input={onInput} value={myValue} type="text" />\r
\r
<button on:click={() => (myValue = "hello")}>Set myValue to "hello"</button>\r
\r
<div>value: {myValue}</div>\r
`;function Le(r){let t,e,$,o,f,l,u,p,g,B;return{c(){t=N("input"),e=T(),$=N("button"),o=c('Set myValue to "hello"'),f=T(),l=N("div"),u=c("value: "),p=c(r[0]),this.h()},l(n){t=U(n,"INPUT",{type:!0}),e=I(n),$=U(n,"BUTTON",{});var a=q($);o=v(a,'Set myValue to "hello"'),a.forEach(m),f=I(n),l=U(n,"DIV",{});var _=q(l);u=v(_,"value: "),p=v(_,r[0]),_.forEach(m),this.h()},h(){he(t,"type","text")},m(n,a){i(n,t,a),we(t,r[0]),i(n,e,a),i(n,$,a),D($,o),i(n,f,a),i(n,l,a),D(l,u),D(l,p),g||(B=[M(t,"input",r[1]),M($,"click",r[2])],g=!0)},p(n,[a]){a&1&&t.value!==n[0]&&we(t,n[0]),a&1&&ge(p,n[0])},i:z,o:z,d(n){n&&m(t),n&&m(e),n&&m($),n&&m(f),n&&m(l),g=!1,de(B)}}}function Qe(r,t,e){let $="";function o(){$=this.value,e(0,$)}return[$,o,()=>e(0,$="hello")]}class Xe extends te{constructor(t){super(),ne(this,t,Qe,Le,se,{})}}const Ze=`<script>\r
	let myValue = "";\r
<\/script>\r
\r
<input bind:value={myValue} type="text" />\r
\r
<button on:click={() => (myValue = "hello")}>Set myValue to "hello"</button>\r
\r
<div>value: {myValue}</div>\r
`;function Fe(r){let t,e,$,o,f,l,u,p,g,B;return{c(){t=N("input"),e=T(),$=N("button"),o=c('Set value to "hello"'),f=T(),l=N("div"),u=c("value: "),p=c(r[0]),this.h()},l(n){t=U(n,"INPUT",{type:!0}),e=I(n),$=U(n,"BUTTON",{});var a=q($);o=v(a,'Set value to "hello"'),a.forEach(m),f=I(n),l=U(n,"DIV",{});var _=q(l);u=v(_,"value: "),p=v(_,r[0]),_.forEach(m),this.h()},h(){he(t,"type","text")},m(n,a){i(n,t,a),we(t,r[0]),i(n,e,a),i(n,$,a),D($,o),i(n,f,a),i(n,l,a),D(l,u),D(l,p),g||(B=[M(t,"input",r[1]),M($,"click",r[2])],g=!0)},p(n,[a]){a&1&&t.value!==n[0]&&we(t,n[0]),a&1&&ge(p,n[0])},i:z,o:z,d(n){n&&m(t),n&&m(e),n&&m($),n&&m(f),n&&m(l),g=!1,de(B)}}}function Ge(r,t,e){let $="";function o(){$=this.value,e(0,$)}return[$,o,()=>e(0,$="hello")]}class Ye extends te{constructor(t){super(),ne(this,t,Ge,Fe,se,{})}}const xe=`<script>\r
	let value = "";\r
<\/script>\r
\r
<input bind:value type="text" />\r
\r
<button on:click={() => (value = "hello")}>Set value to "hello"</button>\r
\r
<div>value: {value}</div>\r
`;function et(r){let t,e,$,o,f,l,u;return{c(){t=c("count: "),e=c(r[0]),$=T(),o=N("button"),f=c("Increment")},l(p){t=v(p,"count: "),e=v(p,r[0]),$=I(p),o=U(p,"BUTTON",{});var g=q(o);f=v(g,"Increment"),g.forEach(m)},m(p,g){i(p,t,g),i(p,e,g),i(p,$,g),i(p,o,g),D(o,f),l||(u=M(o,"click",r[1]),l=!0)},p(p,[g]){g&1&&ge(e,p[0])},i:z,o:z,d(p){p&&m(t),p&&m(e),p&&m($),p&&m(o),l=!1,u()}}}function tt(r,t,e){let{count:$=0}=t;const o=Oe(),f=()=>e(0,$++,$);return r.$$set=l=>{"count"in l&&e(0,$=l.count)},r.$$.update=()=>{r.$$.dirty&1&&o("countChange",$)},[$,f]}class Re extends te{constructor(t){super(),ne(this,t,tt,et,se,{count:0})}}function nt(r){let t,e,$,o,f,l,u;return t=new Re({props:{count:r[0]}}),t.$on("countChange",r[1]),{c(){b(t.$$.fragment),e=T(),$=N("button"),o=c("Set count to 999")},l(p){h(t.$$.fragment,p),e=I(p),$=U(p,"BUTTON",{});var g=q($);o=v(g,"Set count to 999"),g.forEach(m)},m(p,g){d(t,p,g),i(p,e,g),i(p,$,g),D($,o),f=!0,l||(u=M($,"click",r[2]),l=!0)},p(p,[g]){const B={};g&1&&(B.count=p[0]),t.$set(B)},i(p){f||(k(t.$$.fragment,p),f=!0)},o(p){S(t.$$.fragment,p),f=!1},d(p){V(t,p),p&&m(e),p&&m($),l=!1,u()}}}function st(r,t,e){let $;return[$,l=>{e(0,$=l.detail)},()=>e(0,$=999)]}class $t extends te{constructor(t){super(),ne(this,t,st,nt,se,{})}}const ft=`<script>\r
	let count;\r
	import Child from "./Child.svelte";\r
<\/script>\r
\r
<Child\r
	on:countChange={(event) => {\r
		count = event.detail;\r
	}}\r
	{count} />\r
\r
<button on:click={() => (count = 999)}>Set count to 999</button>\r
\r
<style>\r
</style>\r
`,lt=`<script>\r
	export let count = 0;\r
	import { createEventDispatcher } from "svelte";\r
	const dispatch = createEventDispatcher();\r
	$: dispatch("countChange", count);\r
<\/script>\r
\r
count: {count}\r
\r
<button on:click={() => count++}>Increment</button>\r
`;function ot(r){let t,e,$,o,f,l,u,p;function g(n){r[1](n)}let B={};return r[0]!==void 0&&(B.count=r[0]),t=new Re({props:B}),Ae.push(()=>qe(t,"count",g)),{c(){b(t.$$.fragment),$=T(),o=N("button"),f=c("Set count to 999")},l(n){h(t.$$.fragment,n),$=I(n),o=U(n,"BUTTON",{});var a=q(o);f=v(a,"Set count to 999"),a.forEach(m)},m(n,a){d(t,n,a),i(n,$,a),i(n,o,a),D(o,f),l=!0,u||(p=M(o,"click",r[2]),u=!0)},p(n,[a]){const _={};!e&&a&1&&(e=!0,_.count=n[0],Me(()=>e=!1)),t.$set(_)},i(n){l||(k(t.$$.fragment,n),l=!0)},o(n){S(t.$$.fragment,n),l=!1},d(n){V(t,n),n&&m($),n&&m(o),u=!1,p()}}}function rt(r,t,e){let $;function o(l){$=l,e(0,$)}return[$,o,()=>e(0,$=999)]}class ut extends te{constructor(t){super(),ne(this,t,rt,ot,se,{})}}const pt=`<script>\r
	let count;\r
	import Child from "./Child.svelte";\r
<\/script>\r
\r
<Child bind:count />\r
\r
<button on:click={() => (count = 999)}>Set count to 999</button>\r
\r
<style>\r
</style>\r
`,mt=`<script>\r
	export let count = 0;\r
<\/script>\r
\r
count: {count}\r
\r
<button on:click={() => count++}>Increment</button>\r
`;function it(r){let t;return{c(){t=c("Sometimes we want to set a variable from for example an input field.")},l(e){t=v(e,"Sometimes we want to set a variable from for example an input field.")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function at(r){let t;return{c(){t=c("value of the input field")},l(e){t=v(e,"value of the input field")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function _t(r){let t;return{c(){t=c("value of the input field")},l(e){t=v(e,"value of the input field")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function ct(r){let t,e,$,o,f,l;return e=new E({props:{$$slots:{default:[at]},$$scope:{ctx:r}}}),o=new E({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){t=c("Here we accomplish this by assigning myValue to the "),b(e.$$.fragment),$=c(" and also set the "),b(o.$$.fragment),f=c(" at the same time.")},l(u){t=v(u,"Here we accomplish this by assigning myValue to the "),h(e.$$.fragment,u),$=v(u," and also set the "),h(o.$$.fragment,u),f=v(u," at the same time.")},m(u,p){i(u,t,p),d(e,u,p),i(u,$,p),d(o,u,p),i(u,f,p),l=!0},p(u,p){const g={};p&2&&(g.$$scope={dirty:p,ctx:u}),e.$set(g);const B={};p&2&&(B.$$scope={dirty:p,ctx:u}),o.$set(B)},i(u){l||(k(e.$$.fragment,u),k(o.$$.fragment,u),l=!0)},o(u){S(e.$$.fragment,u),S(o.$$.fragment,u),l=!1},d(u){u&&m(t),V(e,u),u&&m($),V(o,u),u&&m(f)}}}function vt(r){let t;return{c(){t=c("button that sets myValue which will update the input field reflecting the new value")},l(e){t=v(e,"button that sets myValue which will update the input field reflecting the new value")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function wt(r){let t,e,$,o;return e=new E({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),{c(){t=c("Since we have a variable that is used to set the input field value we can also have a "),b(e.$$.fragment),$=c(".")},l(f){t=v(f,"Since we have a variable that is used to set the input field value we can also have a "),h(e.$$.fragment,f),$=v(f,".")},m(f,l){i(f,t,l),d(e,f,l),i(f,$,l),o=!0},p(f,l){const u={};l&2&&(u.$$scope={dirty:l,ctx:f}),e.$set(u)},i(f){o||(k(e.$$.fragment,f),o=!0)},o(f){S(e.$$.fragment,f),o=!1},d(f){f&&m(t),V(e,f),f&&m($)}}}function gt(r){let t;return{c(){t=c("bind:")},l(e){t=v(e,"bind:")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function bt(r){let t,e,$,o;return e=new E({props:{$$slots:{default:[gt]},$$scope:{ctx:r}}}),{c(){t=c("This is a very common pattern so Svelte has a directive for it, the "),b(e.$$.fragment),$=c(" directive.")},l(f){t=v(f,"This is a very common pattern so Svelte has a directive for it, the "),h(e.$$.fragment,f),$=v(f," directive.")},m(f,l){i(f,t,l),d(e,f,l),i(f,$,l),o=!0},p(f,l){const u={};l&2&&(u.$$scope={dirty:l,ctx:f}),e.$set(u)},i(f){o||(k(e.$$.fragment,f),o=!0)},o(f){S(e.$$.fragment,f),o=!1},d(f){f&&m(t),V(e,f),f&&m($)}}}function ht(r){let t;return{c(){t=c("bind:")},l(e){t=v(e,"bind:")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function dt(r){let t;return{c(){t=c("property")},l(e){t=v(e,"property")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function kt(r){let t;return{c(){t=c("equals sign")},l(e){t=v(e,"equals sign")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function St(r){let t;return{c(){t=c("variable")},l(e){t=v(e,"variable")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Vt(r){let t,e,$,o,f,l,u,p,g,B;return e=new E({props:{$$slots:{default:[ht]},$$scope:{ctx:r}}}),o=new E({props:{$$slots:{default:[dt]},$$scope:{ctx:r}}}),l=new E({props:{$$slots:{default:[kt]},$$scope:{ctx:r}}}),p=new E({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),{c(){t=c("We use it with "),b(e.$$.fragment),$=c(", then a "),b(o.$$.fragment),f=c(", then an "),b(l.$$.fragment),u=c(" and a "),b(p.$$.fragment),g=c(" we want to bind the property to.")},l(n){t=v(n,"We use it with "),h(e.$$.fragment,n),$=v(n,", then a "),h(o.$$.fragment,n),f=v(n,", then an "),h(l.$$.fragment,n),u=v(n," and a "),h(p.$$.fragment,n),g=v(n," we want to bind the property to.")},m(n,a){i(n,t,a),d(e,n,a),i(n,$,a),d(o,n,a),i(n,f,a),d(l,n,a),i(n,u,a),d(p,n,a),i(n,g,a),B=!0},p(n,a){const _={};a&2&&(_.$$scope={dirty:a,ctx:n}),e.$set(_);const C={};a&2&&(C.$$scope={dirty:a,ctx:n}),o.$set(C);const P={};a&2&&(P.$$scope={dirty:a,ctx:n}),l.$set(P);const y={};a&2&&(y.$$scope={dirty:a,ctx:n}),p.$set(y)},i(n){B||(k(e.$$.fragment,n),k(o.$$.fragment,n),k(l.$$.fragment,n),k(p.$$.fragment,n),B=!0)},o(n){S(e.$$.fragment,n),S(o.$$.fragment,n),S(l.$$.fragment,n),S(p.$$.fragment,n),B=!1},d(n){n&&m(t),V(e,n),n&&m($),V(o,n),n&&m(f),V(l,n),n&&m(u),V(p,n),n&&m(g)}}}function Bt(r){let t;return{c(){t=c("value")},l(e){t=v(e,"value")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Ct(r){let t;return{c(){t=c("myValue")},l(e){t=v(e,"myValue")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Tt(r){let t;return{c(){t=c("value")},l(e){t=v(e,"value")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function It(r){let t;return{c(){t=c("myValue")},l(e){t=v(e,"myValue")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Et(r){let t,e,$,o,f,l,u,p,g,B;return e=new E({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}}}),o=new E({props:{$$slots:{default:[Ct]},$$scope:{ctx:r}}}),l=new E({props:{$$slots:{default:[Tt]},$$scope:{ctx:r}}}),p=new E({props:{$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){t=c("Below we have bound "),b(e.$$.fragment),$=c(" to the variable "),b(o.$$.fragment),f=c(" so that whenever we update either the "),b(l.$$.fragment),u=c(" or "),b(p.$$.fragment),g=c(" the changes get reflected.")},l(n){t=v(n,"Below we have bound "),h(e.$$.fragment,n),$=v(n," to the variable "),h(o.$$.fragment,n),f=v(n," so that whenever we update either the "),h(l.$$.fragment,n),u=v(n," or "),h(p.$$.fragment,n),g=v(n," the changes get reflected.")},m(n,a){i(n,t,a),d(e,n,a),i(n,$,a),d(o,n,a),i(n,f,a),d(l,n,a),i(n,u,a),d(p,n,a),i(n,g,a),B=!0},p(n,a){const _={};a&2&&(_.$$scope={dirty:a,ctx:n}),e.$set(_);const C={};a&2&&(C.$$scope={dirty:a,ctx:n}),o.$set(C);const P={};a&2&&(P.$$scope={dirty:a,ctx:n}),l.$set(P);const y={};a&2&&(y.$$scope={dirty:a,ctx:n}),p.$set(y)},i(n){B||(k(e.$$.fragment,n),k(o.$$.fragment,n),k(l.$$.fragment,n),k(p.$$.fragment,n),B=!0)},o(n){S(e.$$.fragment,n),S(o.$$.fragment,n),S(l.$$.fragment,n),S(p.$$.fragment,n),B=!1},d(n){n&&m(t),V(e,n),n&&m($),V(o,n),n&&m(f),V(l,n),n&&m(u),V(p,n),n&&m(g)}}}function Pt(r){let t;return{c(){t=c("two-way binding")},l(e){t=v(e,"two-way binding")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function yt(r){let t;return{c(){t=c("property")},l(e){t=v(e,"property")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Nt(r){let t;return{c(){t=c("variable")},l(e){t=v(e,"variable")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Ut(r){let t;return{c(){t=c("variable")},l(e){t=v(e,"variable")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Dt(r){let t;return{c(){t=c("property")},l(e){t=v(e,"property")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Rt(r){let t,e,$,o,f,l,u,p,g,B,n,a;return e=new E({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),o=new E({props:{$$slots:{default:[yt]},$$scope:{ctx:r}}}),l=new E({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}}}),p=new E({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}}}),B=new E({props:{$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){t=c("This is known as a "),b(e.$$.fragment),$=c(". Changing the "),b(o.$$.fragment),f=c(" will update the "),b(l.$$.fragment),u=c(", and changing the "),b(p.$$.fragment),g=c(" will update the "),b(B.$$.fragment),n=c(".")},l(_){t=v(_,"This is known as a "),h(e.$$.fragment,_),$=v(_,". Changing the "),h(o.$$.fragment,_),f=v(_," will update the "),h(l.$$.fragment,_),u=v(_,", and changing the "),h(p.$$.fragment,_),g=v(_," will update the "),h(B.$$.fragment,_),n=v(_,".")},m(_,C){i(_,t,C),d(e,_,C),i(_,$,C),d(o,_,C),i(_,f,C),d(l,_,C),i(_,u,C),d(p,_,C),i(_,g,C),d(B,_,C),i(_,n,C),a=!0},p(_,C){const P={};C&2&&(P.$$scope={dirty:C,ctx:_}),e.$set(P);const y={};C&2&&(y.$$scope={dirty:C,ctx:_}),o.$set(y);const R={};C&2&&(R.$$scope={dirty:C,ctx:_}),l.$set(R);const J={};C&2&&(J.$$scope={dirty:C,ctx:_}),p.$set(J);const O={};C&2&&(O.$$scope={dirty:C,ctx:_}),B.$set(O)},i(_){a||(k(e.$$.fragment,_),k(o.$$.fragment,_),k(l.$$.fragment,_),k(p.$$.fragment,_),k(B.$$.fragment,_),a=!0)},o(_){S(e.$$.fragment,_),S(o.$$.fragment,_),S(l.$$.fragment,_),S(p.$$.fragment,_),S(B.$$.fragment,_),a=!1},d(_){_&&m(t),V(e,_),_&&m($),V(o,_),_&&m(f),V(l,_),_&&m(u),V(p,_),_&&m(g),V(B,_),_&&m(n)}}}function Ot(r){let t;return{c(){t=c("variable")},l(e){t=v(e,"variable")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function At(r){let t;return{c(){t=c("property")},l(e){t=v(e,"property")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function qt(r){let t,e,$,o,f,l;return e=new E({props:{$$slots:{default:[Ot]},$$scope:{ctx:r}}}),o=new E({props:{$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){t=c("And yes, we can have a shorthand for it if the "),b(e.$$.fragment),$=c(" and "),b(o.$$.fragment),f=c(" have the same name.")},l(u){t=v(u,"And yes, we can have a shorthand for it if the "),h(e.$$.fragment,u),$=v(u," and "),h(o.$$.fragment,u),f=v(u," have the same name.")},m(u,p){i(u,t,p),d(e,u,p),i(u,$,p),d(o,u,p),i(u,f,p),l=!0},p(u,p){const g={};p&2&&(g.$$scope={dirty:p,ctx:u}),e.$set(g);const B={};p&2&&(B.$$scope={dirty:p,ctx:u}),o.$set(B)},i(u){l||(k(e.$$.fragment,u),k(o.$$.fragment,u),l=!0)},o(u){S(e.$$.fragment,u),S(o.$$.fragment,u),l=!1},d(u){u&&m(t),V(e,u),u&&m($),V(o,u),u&&m(f)}}}function Mt(r){let t;return{c(){t=c("event dispatcher")},l(e){t=v(e,"event dispatcher")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function Ht(r){let t,e,$,o;return e=new E({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){t=c("Before we used an "),b(e.$$.fragment),$=c(" to send a value to the parent of a child, like this:")},l(f){t=v(f,"Before we used an "),h(e.$$.fragment,f),$=v(f," to send a value to the parent of a child, like this:")},m(f,l){i(f,t,l),d(e,f,l),i(f,$,l),o=!0},p(f,l){const u={};l&2&&(u.$$scope={dirty:l,ctx:f}),e.$set(u)},i(f){o||(k(e.$$.fragment,f),o=!0)},o(f){S(e.$$.fragment,f),o=!1},d(f){f&&m(t),V(e,f),f&&m($)}}}function Wt(r){let t;return{c(){t=c("bind:")},l(e){t=v(e,"bind:")},m(e,$){i(e,t,$)},d(e){e&&m(t)}}}function jt(r){let t,e,$,o;return e=new E({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}}}),{c(){t=c("But we could also accomplish this by using "),b(e.$$.fragment),$=c(".")},l(f){t=v(f,"But we could also accomplish this by using "),h(e.$$.fragment,f),$=v(f,".")},m(f,l){i(f,t,l),d(e,f,l),i(f,$,l),o=!0},p(f,l){const u={};l&2&&(u.$$scope={dirty:l,ctx:f}),e.$set(u)},i(f){o||(k(e.$$.fragment,f),o=!0)},o(f){S(e.$$.fragment,f),o=!1},d(f){f&&m(t),V(e,f),f&&m($)}}}function zt(r){let t,e,$,o,f,l,u,p,g,B,n,a,_,C,P,y,R,J,O,$e,K,fe,H,le,L,oe,Q,re,W,ue,X,pe,Z,me,F,ie,j,ae,G,_e,Y,ce,x,ve;return t=new A({props:{$$slots:{default:[it]},$$scope:{ctx:r}}}),$=new A({props:{$$slots:{default:[ct]},$$scope:{ctx:r}}}),f=new A({props:{$$slots:{default:[wt]},$$scope:{ctx:r}}}),u=new Je({}),g=new ee({props:{code:Ke,name:"App.svelte"}}),n=new A({props:{$$slots:{default:[bt]},$$scope:{ctx:r}}}),_=new A({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}}}),P=new A({props:{$$slots:{default:[Et]},$$scope:{ctx:r}}}),R=new A({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}}}),O=new Xe({}),K=new ee({props:{code:Ze,name:"Bind.svelte"}}),H=new A({props:{$$slots:{default:[qt]},$$scope:{ctx:r}}}),L=new Ye({}),Q=new ee({props:{code:xe,name:"BindShorthand.svelte"}}),W=new A({props:{$$slots:{default:[Ht]},$$scope:{ctx:r}}}),X=new $t({}),Z=new ee({props:{code:ft,name:"Parent.svelte"}}),F=new ee({props:{code:lt,name:"Child.svelte"}}),j=new A({props:{$$slots:{default:[jt]},$$scope:{ctx:r}}}),G=new ut({}),Y=new ee({props:{code:pt,name:"ParentBind.svelte"}}),x=new ee({props:{code:mt,name:"ChildBind.svelte"}}),{c(){b(t.$$.fragment),e=T(),b($.$$.fragment),o=T(),b(f.$$.fragment),l=T(),b(u.$$.fragment),p=T(),b(g.$$.fragment),B=T(),b(n.$$.fragment),a=T(),b(_.$$.fragment),C=T(),b(P.$$.fragment),y=T(),b(R.$$.fragment),J=T(),b(O.$$.fragment),$e=T(),b(K.$$.fragment),fe=T(),b(H.$$.fragment),le=T(),b(L.$$.fragment),oe=T(),b(Q.$$.fragment),re=T(),b(W.$$.fragment),ue=T(),b(X.$$.fragment),pe=T(),b(Z.$$.fragment),me=T(),b(F.$$.fragment),ie=T(),b(j.$$.fragment),ae=T(),b(G.$$.fragment),_e=T(),b(Y.$$.fragment),ce=T(),b(x.$$.fragment)},l(s){h(t.$$.fragment,s),e=I(s),h($.$$.fragment,s),o=I(s),h(f.$$.fragment,s),l=I(s),h(u.$$.fragment,s),p=I(s),h(g.$$.fragment,s),B=I(s),h(n.$$.fragment,s),a=I(s),h(_.$$.fragment,s),C=I(s),h(P.$$.fragment,s),y=I(s),h(R.$$.fragment,s),J=I(s),h(O.$$.fragment,s),$e=I(s),h(K.$$.fragment,s),fe=I(s),h(H.$$.fragment,s),le=I(s),h(L.$$.fragment,s),oe=I(s),h(Q.$$.fragment,s),re=I(s),h(W.$$.fragment,s),ue=I(s),h(X.$$.fragment,s),pe=I(s),h(Z.$$.fragment,s),me=I(s),h(F.$$.fragment,s),ie=I(s),h(j.$$.fragment,s),ae=I(s),h(G.$$.fragment,s),_e=I(s),h(Y.$$.fragment,s),ce=I(s),h(x.$$.fragment,s)},m(s,w){d(t,s,w),i(s,e,w),d($,s,w),i(s,o,w),d(f,s,w),i(s,l,w),d(u,s,w),i(s,p,w),d(g,s,w),i(s,B,w),d(n,s,w),i(s,a,w),d(_,s,w),i(s,C,w),d(P,s,w),i(s,y,w),d(R,s,w),i(s,J,w),d(O,s,w),i(s,$e,w),d(K,s,w),i(s,fe,w),d(H,s,w),i(s,le,w),d(L,s,w),i(s,oe,w),d(Q,s,w),i(s,re,w),d(W,s,w),i(s,ue,w),d(X,s,w),i(s,pe,w),d(Z,s,w),i(s,me,w),d(F,s,w),i(s,ie,w),d(j,s,w),i(s,ae,w),d(G,s,w),i(s,_e,w),d(Y,s,w),i(s,ce,w),d(x,s,w),ve=!0},p(s,w){const ke={};w&2&&(ke.$$scope={dirty:w,ctx:s}),t.$set(ke);const Se={};w&2&&(Se.$$scope={dirty:w,ctx:s}),$.$set(Se);const Ve={};w&2&&(Ve.$$scope={dirty:w,ctx:s}),f.$set(Ve);const Be={};w&2&&(Be.$$scope={dirty:w,ctx:s}),n.$set(Be);const Ce={};w&2&&(Ce.$$scope={dirty:w,ctx:s}),_.$set(Ce);const Te={};w&2&&(Te.$$scope={dirty:w,ctx:s}),P.$set(Te);const Ie={};w&2&&(Ie.$$scope={dirty:w,ctx:s}),R.$set(Ie);const Ee={};w&2&&(Ee.$$scope={dirty:w,ctx:s}),H.$set(Ee);const Pe={};w&2&&(Pe.$$scope={dirty:w,ctx:s}),W.$set(Pe);const ye={};w&2&&(ye.$$scope={dirty:w,ctx:s}),j.$set(ye)},i(s){ve||(k(t.$$.fragment,s),k($.$$.fragment,s),k(f.$$.fragment,s),k(u.$$.fragment,s),k(g.$$.fragment,s),k(n.$$.fragment,s),k(_.$$.fragment,s),k(P.$$.fragment,s),k(R.$$.fragment,s),k(O.$$.fragment,s),k(K.$$.fragment,s),k(H.$$.fragment,s),k(L.$$.fragment,s),k(Q.$$.fragment,s),k(W.$$.fragment,s),k(X.$$.fragment,s),k(Z.$$.fragment,s),k(F.$$.fragment,s),k(j.$$.fragment,s),k(G.$$.fragment,s),k(Y.$$.fragment,s),k(x.$$.fragment,s),ve=!0)},o(s){S(t.$$.fragment,s),S($.$$.fragment,s),S(f.$$.fragment,s),S(u.$$.fragment,s),S(g.$$.fragment,s),S(n.$$.fragment,s),S(_.$$.fragment,s),S(P.$$.fragment,s),S(R.$$.fragment,s),S(O.$$.fragment,s),S(K.$$.fragment,s),S(H.$$.fragment,s),S(L.$$.fragment,s),S(Q.$$.fragment,s),S(W.$$.fragment,s),S(X.$$.fragment,s),S(Z.$$.fragment,s),S(F.$$.fragment,s),S(j.$$.fragment,s),S(G.$$.fragment,s),S(Y.$$.fragment,s),S(x.$$.fragment,s),ve=!1},d(s){V(t,s),s&&m(e),V($,s),s&&m(o),V(f,s),s&&m(l),V(u,s),s&&m(p),V(g,s),s&&m(B),V(n,s),s&&m(a),V(_,s),s&&m(C),V(P,s),s&&m(y),V(R,s),s&&m(J),V(O,s),s&&m($e),V(K,s),s&&m(fe),V(H,s),s&&m(le),V(L,s),s&&m(oe),V(Q,s),s&&m(re),V(W,s),s&&m(ue),V(X,s),s&&m(pe),V(Z,s),s&&m(me),V(F,s),s&&m(ie),V(j,s),s&&m(ae),V(G,s),s&&m(_e),V(Y,s),s&&m(ce),V(x,s)}}}function Jt(r){let t,e;const $=[r[0],De];let o={$$slots:{default:[zt]},$$scope:{ctx:r}};for(let f=0;f<$.length;f+=1)o=be(o,$[f]);return t=new We({props:o}),{c(){b(t.$$.fragment)},l(f){h(t.$$.fragment,f)},m(f,l){d(t,f,l),e=!0},p(f,[l]){const u=l&1?He($,[l&1&&Ne(f[0]),l&0&&Ne(De)]):{};l&2&&(u.$$scope={dirty:l,ctx:f}),t.$set(u)},i(f){e||(k(t.$$.fragment,f),e=!0)},o(f){S(t.$$.fragment,f),e=!1},d(f){V(t,f)}}}const De={title:"Bindings",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-04T00:00:00.000Z",layout:"notes"};function Kt(r,t,e){return r.$$set=$=>{e(0,t=be(be({},t),Ue($)))},t=Ue(t),[t]}class Ft extends te{constructor(t){super(),ne(this,t,Kt,Jt,se,{})}}export{Ft as default,De as metadata};
