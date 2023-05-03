import{S as C,i as E,s as I,k as ee,q as c,l as te,m as ne,r as i,h as a,b as p,D as Y,u as re,H as q,o as oe,y as w,z as b,A as v,g as d,d as h,B as S,K,L as $e,M as V,N as W,a as M,c as A}from"./index.0b5cc0d7.js";import{M as fe,P as L}from"./mdsvex-layout-notes.c527e9b3.js";import{r as se}from"./index.153ae70b.js";import{S as X}from"./ShowMany.5b53376e.js";import{S as H}from"./Strong.272c5f79.js";let ue=se("Hello",u=>{let e=setTimeout(()=>{u("world")},1e3);return()=>{clearTimeout(e)}});function le(u){let e,t,s;return{c(){e=ee("h1"),t=c("value: "),s=c(u[0])},l(r){e=te(r,"H1",{});var $=ne(e);t=i($,"value: "),s=i($,u[0]),$.forEach(a)},m(r,$){p(r,e,$),Y(e,t),Y(e,s)},p(r,[$]){$&1&&re(s,r[0])},i:q,o:q,d(r){r&&a(e)}}}function ae(u,e,t){let s;return oe(()=>ue.subscribe(r=>{t(0,s=r)})),[s]}class me extends C{constructor(e){super(),E(this,e,ae,le,I,{})}}function pe(u){let e,t;return e=new me({}),{c(){w(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,r){v(e,s,r),t=!0},p:q,i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}class z extends C{constructor(e){super(),E(this,e,null,pe,I,{})}}const ce=`<script>\r
	import Output from "./Output.svelte";\r
<\/script>\r
\r
<Output />\r
`,ie=`<script>\r
	import { valueStore } from "./data";\r
	import { onMount } from "svelte";\r
\r
	let _value;\r
\r
	onMount(() => {\r
		return valueStore.subscribe((value) => {\r
			_value = value;\r
		});\r
	});\r
<\/script>\r
\r
<h1>value: {_value}</h1>\r
`,_e=`import { writable, readable } from "svelte/store";\r
\r
export let valueStore = readable("Hello", (set) => {\r
	let timer = setTimeout(() => {\r
		set("world");\r
	}, 1000);\r
\r
	return () => {\r
		clearTimeout(timer);\r
	};\r
});\r
`;let ge=se("Hello",u=>{console.log("Start (someone subscribed!)");let e=setTimeout(()=>{u("world")},1e3);return()=>{console.log("Stop (everyone unsubscribed!)"),clearTimeout(e)}});const we=ge.subscribe(function(){});setTimeout(()=>{we()},5e3);function be(u){let e,t,s;return{c(){e=ee("h1"),t=c("value: "),s=c(u[0])},l(r){e=te(r,"H1",{});var $=ne(e);t=i($,"value: "),s=i($,u[0]),$.forEach(a)},m(r,$){p(r,e,$),Y(e,t),Y(e,s)},p:q,i:q,o:q,d(r){r&&a(e)}}}function ve(u){let e;return[e]}class de extends C{constructor(e){super(),E(this,e,ve,be,I,{})}}function he(u){let e,t;return e=new de({}),{c(){w(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,r){v(e,s,r),t=!0},p:q,i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){h(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}class D extends C{constructor(e){super(),E(this,e,null,he,I,{})}}const Se=`<script>\r
	import Output2 from "./Output2.svelte";\r
<\/script>\r
\r
<Output2 />\r
`,Te=`<script>\r
	import { valueStore } from "./data2";\r
	import { onMount } from "svelte";\r
\r
	let _value;\r
<\/script>\r
\r
<!-- this is undefined to make sure we don't have subscribers -->\r
<h1>value: {_value}</h1>\r
`,Oe=`import { writable, readable } from "svelte/store";\r
\r
export let valueStore = readable("Hello", (set) => {\r
	console.log("Start (someone subscribed!)");\r
	let timer = setTimeout(() => {\r
		set("world");\r
	}, 1000);\r
\r
	return () => {\r
		console.log("Stop (everyone unsubscribed!)");\r
		clearTimeout(timer);\r
	};\r
});\r
\r
const unsub = valueStore.subscribe(function () {});\r
\r
setTimeout(() => {\r
	unsub();\r
}, 5000);\r
`;function He(u){let e;return{c(){e=c("readable store")},l(t){e=i(t,"readable store")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function xe(u){let e;return{c(){e=c("read only")},l(t){e=i(t,"read only")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function ke(u){let e,t,s,r,$,m;return t=new H({props:{$$slots:{default:[He]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[xe]},$$scope:{ctx:u}}}),{c(){e=c("The "),w(t.$$.fragment),s=c(" is a "),w(r.$$.fragment),$=c(" store. But, if it's read only, how does the value change?")},l(n){e=i(n,"The "),b(t.$$.fragment,n),s=i(n," is a "),b(r.$$.fragment,n),$=i(n," store. But, if it's read only, how does the value change?")},m(n,f){p(n,e,f),v(t,n,f),p(n,s,f),v(r,n,f),p(n,$,f),m=!0},p(n,f){const g={};f&2&&(g.$$scope={dirty:f,ctx:n}),t.$set(g);const T={};f&2&&(T.$$scope={dirty:f,ctx:n}),r.$set(T)},i(n){m||(d(t.$$.fragment,n),d(r.$$.fragment,n),m=!0)},o(n){h(t.$$.fragment,n),h(r.$$.fragment,n),m=!1},d(n){n&&a(e),S(t,n),n&&a(s),S(r,n),n&&a($)}}}function Me(u){let e;return{c(){e=c("readable()")},l(t){e=i(t,"readable()")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ae(u){let e;return{c(){e=c("initial value")},l(t){e=i(t,"initial value")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Re(u){let e,t,s,r,$,m;return t=new H({props:{$$slots:{default:[Me]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[Ae]},$$scope:{ctx:u}}}),{c(){e=c("Like before the first argument in "),w(t.$$.fragment),s=c(" is the "),w(r.$$.fragment),$=c(" of the store.")},l(n){e=i(n,"Like before the first argument in "),b(t.$$.fragment,n),s=i(n," is the "),b(r.$$.fragment,n),$=i(n," of the store.")},m(n,f){p(n,e,f),v(t,n,f),p(n,s,f),v(r,n,f),p(n,$,f),m=!0},p(n,f){const g={};f&2&&(g.$$scope={dirty:f,ctx:n}),t.$set(g);const T={};f&2&&(T.$$scope={dirty:f,ctx:n}),r.$set(T)},i(n){m||(d(t.$$.fragment,n),d(r.$$.fragment,n),m=!0)},o(n){h(t.$$.fragment,n),h(r.$$.fragment,n),m=!1},d(n){n&&a(e),S(t,n),n&&a(s),S(r,n),n&&a($)}}}function je(u){let e;return{c(){e=c("mandatory second argument")},l(t){e=i(t,"mandatory second argument")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Be(u){let e;return{c(){e=c("start stop notifier")},l(t){e=i(t,"start stop notifier")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Le(u){let e,t,s,r,$,m;return t=new H({props:{$$slots:{default:[je]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[Be]},$$scope:{ctx:u}}}),{c(){e=c("In addition, readable stores have a "),w(t.$$.fragment),s=c(" which is a so called "),w(r.$$.fragment),$=c(".")},l(n){e=i(n,"In addition, readable stores have a "),b(t.$$.fragment,n),s=i(n," which is a so called "),b(r.$$.fragment,n),$=i(n,".")},m(n,f){p(n,e,f),v(t,n,f),p(n,s,f),v(r,n,f),p(n,$,f),m=!0},p(n,f){const g={};f&2&&(g.$$scope={dirty:f,ctx:n}),t.$set(g);const T={};f&2&&(T.$$scope={dirty:f,ctx:n}),r.$set(T)},i(n){m||(d(t.$$.fragment,n),d(r.$$.fragment,n),m=!0)},o(n){h(t.$$.fragment,n),h(r.$$.fragment,n),m=!1},d(n){n&&a(e),S(t,n),n&&a(s),S(r,n),n&&a($)}}}function qe(u){let e;return{c(){e=c("someone subscribes")},l(t){e=i(t,"someone subscribes")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ce(u){let e;return{c(){e=c("first time")},l(t){e=i(t,"first time")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ee(u){let e,t,s,r,$,m;return t=new H({props:{$$slots:{default:[qe]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[Ce]},$$scope:{ctx:u}}}),{c(){e=c("This function is run when "),w(t.$$.fragment),s=c(" to the store for the "),w(r.$$.fragment),$=c(".")},l(n){e=i(n,"This function is run when "),b(t.$$.fragment,n),s=i(n," to the store for the "),b(r.$$.fragment,n),$=i(n,".")},m(n,f){p(n,e,f),v(t,n,f),p(n,s,f),v(r,n,f),p(n,$,f),m=!0},p(n,f){const g={};f&2&&(g.$$scope={dirty:f,ctx:n}),t.$set(g);const T={};f&2&&(T.$$scope={dirty:f,ctx:n}),r.$set(T)},i(n){m||(d(t.$$.fragment,n),d(r.$$.fragment,n),m=!0)},o(n){h(t.$$.fragment,n),h(r.$$.fragment,n),m=!1},d(n){n&&a(e),S(t,n),n&&a(s),S(r,n),n&&a($)}}}function Ie(u){let e;return{c(){e=c("clean up function")},l(t){e=i(t,"clean up function")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Pe(u){let e;return{c(){e=c("return statement")},l(t){e=i(t,"return statement")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ye(u){let e;return{c(){e=c("all unsubscribe")},l(t){e=i(t,"all unsubscribe")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function ze(u){let e;return{c(){e=c("0")},l(t){e=i(t,"0")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function De(u){let e,t,s,r,$,m,n,f,g,T;return t=new H({props:{$$slots:{default:[Ie]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[Pe]},$$scope:{ctx:u}}}),m=new H({props:{$$slots:{default:[Ye]},$$scope:{ctx:u}}}),f=new H({props:{$$slots:{default:[ze]},$$scope:{ctx:u}}}),{c(){e=c("You can also have a "),w(t.$$.fragment),s=c(" as a "),w(r.$$.fragment),$=c(" that will run when the subscribers "),w(m.$$.fragment),n=c(" so there are "),w(f.$$.fragment),g=c(" subscribers.")},l(l){e=i(l,"You can also have a "),b(t.$$.fragment,l),s=i(l," as a "),b(r.$$.fragment,l),$=i(l," that will run when the subscribers "),b(m.$$.fragment,l),n=i(l," so there are "),b(f.$$.fragment,l),g=i(l," subscribers.")},m(l,O){p(l,e,O),v(t,l,O),p(l,s,O),v(r,l,O),p(l,$,O),v(m,l,O),p(l,n,O),v(f,l,O),p(l,g,O),T=!0},p(l,O){const k={};O&2&&(k.$$scope={dirty:O,ctx:l}),t.$set(k);const R={};O&2&&(R.$$scope={dirty:O,ctx:l}),r.$set(R);const x={};O&2&&(x.$$scope={dirty:O,ctx:l}),m.$set(x);const j={};O&2&&(j.$$scope={dirty:O,ctx:l}),f.$set(j)},i(l){T||(d(t.$$.fragment,l),d(r.$$.fragment,l),d(m.$$.fragment,l),d(f.$$.fragment,l),T=!0)},o(l){h(t.$$.fragment,l),h(r.$$.fragment,l),h(m.$$.fragment,l),h(f.$$.fragment,l),T=!1},d(l){l&&a(e),S(t,l),l&&a(s),S(r,l),l&&a($),S(m,l),l&&a(n),S(f,l),l&&a(g)}}}function Ke(u){let e;return{c(){e=c("start stop notifier")},l(t){e=i(t,"start stop notifier")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ne(u){let e;return{c(){e=c("set")},l(t){e=i(t,"set")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ze(u){let e,t,s,r,$,m;return t=new H({props:{$$slots:{default:[Ke]},$$scope:{ctx:u}}}),r=new H({props:{$$slots:{default:[Ne]},$$scope:{ctx:u}}}),{c(){e=c("The parameter for the "),w(t.$$.fragment),s=c(" is "),w(r.$$.fragment),$=c(" (same as the writable store method).")},l(n){e=i(n,"The parameter for the "),b(t.$$.fragment,n),s=i(n," is "),b(r.$$.fragment,n),$=i(n," (same as the writable store method).")},m(n,f){p(n,e,f),v(t,n,f),p(n,s,f),v(r,n,f),p(n,$,f),m=!0},p(n,f){const g={};f&2&&(g.$$scope={dirty:f,ctx:n}),t.$set(g);const T={};f&2&&(T.$$scope={dirty:f,ctx:n}),r.$set(T)},i(n){m||(d(t.$$.fragment,n),d(r.$$.fragment,n),m=!0)},o(n){h(t.$$.fragment,n),h(r.$$.fragment,n),m=!1},d(n){n&&a(e),S(t,n),n&&a(s),S(r,n),n&&a($)}}}function Fe(u){let e;return{c(){e=c("Here is an example where we console log when we subscribe and unsubscribe:")},l(t){e=i(t,"Here is an example where we console log when we subscribe and unsubscribe:")},m(t,s){p(t,e,s)},d(t){t&&a(e)}}}function Ge(u){let e,t,s,r,$,m,n,f,g,T,l,O,k,R,x,j,B,P;return e=new L({props:{$$slots:{default:[ke]},$$scope:{ctx:u}}}),s=new L({props:{$$slots:{default:[Re]},$$scope:{ctx:u}}}),$=new L({props:{$$slots:{default:[Le]},$$scope:{ctx:u}}}),n=new L({props:{$$slots:{default:[Ee]},$$scope:{ctx:u}}}),g=new L({props:{$$slots:{default:[De]},$$scope:{ctx:u}}}),l=new L({props:{$$slots:{default:[Ze]},$$scope:{ctx:u}}}),k=new X({props:{name:[{name:"App",comp:z,raw:ce,text:'Here we can see the value changing from "hello" to "world" since we use set() after a Timeout.'},{name:"Output",comp:z,raw:ie,text:""},{name:"data.js",comp:z,raw:_e,text:""}]}}),x=new L({props:{$$slots:{default:[Fe]},$$scope:{ctx:u}}}),B=new X({props:{name:[{name:"App2",comp:D,raw:Se,text:"Check the console to see the messages."},{name:"Output2",comp:D,raw:Te,text:""},{name:"data2.js",comp:D,raw:Oe,text:""}]}}),{c(){w(e.$$.fragment),t=M(),w(s.$$.fragment),r=M(),w($.$$.fragment),m=M(),w(n.$$.fragment),f=M(),w(g.$$.fragment),T=M(),w(l.$$.fragment),O=M(),w(k.$$.fragment),R=M(),w(x.$$.fragment),j=M(),w(B.$$.fragment)},l(o){b(e.$$.fragment,o),t=A(o),b(s.$$.fragment,o),r=A(o),b($.$$.fragment,o),m=A(o),b(n.$$.fragment,o),f=A(o),b(g.$$.fragment,o),T=A(o),b(l.$$.fragment,o),O=A(o),b(k.$$.fragment,o),R=A(o),b(x.$$.fragment,o),j=A(o),b(B.$$.fragment,o)},m(o,_){v(e,o,_),p(o,t,_),v(s,o,_),p(o,r,_),v($,o,_),p(o,m,_),v(n,o,_),p(o,f,_),v(g,o,_),p(o,T,_),v(l,o,_),p(o,O,_),v(k,o,_),p(o,R,_),v(x,o,_),p(o,j,_),v(B,o,_),P=!0},p(o,_){const N={};_&2&&(N.$$scope={dirty:_,ctx:o}),e.$set(N);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:o}),s.$set(Z);const F={};_&2&&(F.$$scope={dirty:_,ctx:o}),$.$set(F);const G={};_&2&&(G.$$scope={dirty:_,ctx:o}),n.$set(G);const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),g.$set(J);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:o}),l.$set(Q);const U={};_&2&&(U.$$scope={dirty:_,ctx:o}),x.$set(U)},i(o){P||(d(e.$$.fragment,o),d(s.$$.fragment,o),d($.$$.fragment,o),d(n.$$.fragment,o),d(g.$$.fragment,o),d(l.$$.fragment,o),d(k.$$.fragment,o),d(x.$$.fragment,o),d(B.$$.fragment,o),P=!0)},o(o){h(e.$$.fragment,o),h(s.$$.fragment,o),h($.$$.fragment,o),h(n.$$.fragment,o),h(g.$$.fragment,o),h(l.$$.fragment,o),h(k.$$.fragment,o),h(x.$$.fragment,o),h(B.$$.fragment,o),P=!1},d(o){S(e,o),o&&a(t),S(s,o),o&&a(r),S($,o),o&&a(m),S(n,o),o&&a(f),S(g,o),o&&a(T),S(l,o),o&&a(O),S(k,o),o&&a(R),S(x,o),o&&a(j),S(B,o)}}}function Je(u){let e,t;const s=[u[0],y];let r={$$slots:{default:[Ge]},$$scope:{ctx:u}};for(let $=0;$<s.length;$+=1)r=K(r,s[$]);return e=new fe({props:r}),{c(){w(e.$$.fragment)},l($){b(e.$$.fragment,$)},m($,m){v(e,$,m),t=!0},p($,[m]){const n=m&1?$e(s,[m&1&&V($[0]),m&0&&V(y)]):{};m&2&&(n.$$scope={dirty:m,ctx:$}),e.$set(n)},i($){t||(d(e.$$.fragment,$),t=!0)},o($){h(e.$$.fragment,$),t=!1},d($){S(e,$)}}}const y={title:"readable store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function Qe(u,e,t){return u.$$set=s=>{t(0,e=K(K({},e),W(s)))},e=W(e),[e]}class et extends C{constructor(e){super(),E(this,e,Qe,Je,I,{})}}export{et as default,y as metadata};