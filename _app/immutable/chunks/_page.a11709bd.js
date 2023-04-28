import{S as y,i as S,s as A,q as k,r as x,b as i,u as we,H as E,h as p,o as F,k as Q,l as V,Z as _e,n as I,p as We,a as d,e as K,c as b,R as ve,g as a,v as he,d as c,f as de,y as g,z as w,A as v,B as h,aa as He,J as ge,K as Ue,L as Ne,M as Te}from"./index.5815ca79.js";import{M as Oe,P as M}from"./mdsvex-layout-notes.7536afaf.js";import{S as J}from"./ShowCode.e677744f.js";import{S as L}from"./Strong.b8abec16.js";function Ye(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,s){i(t,e,s)},p(t,[s]){s&1&&we(e,t[0])},i:E,o:E,d(t){t&&p(e)}}}function Ze(l,e,t){let s=0;return F(()=>{setInterval(()=>{console.log("count",t(0,++s))},1e3)}),[s]}class ze extends y{constructor(e){super(),S(this,e,Ze,Ye,A,{})}}function Je(l){let e,t;return{c(){e=Q("img"),this.h()},l(s){e=V(s,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){_e(e.src,t=l[0])||I(e,"src",t),I(e,"alt","dog"),We(e,"width","200px")},m(s,$){i(s,e,$)},p(s,[$]){$&1&&!_e(e.src,t=s[0])&&I(e,"src",t)},i:E,o:E,d(s){s&&p(e)}}}function Ke(l,e,t){let s;return F(()=>{const r=new AbortController().signal;fetch("https://dog.ceo/api/breeds/image/random",{signal:r}).then(f=>f.json()).then(({message:f})=>{t(0,s=f)})}),[s]}class Be extends y{constructor(e){super(),S(this,e,Ke,Je,A,{})}}function je(l){let e,t,s,$;return e=new ze({}),s=new Be({}),{c(){g(e.$$.fragment),t=d(),g(s.$$.fragment)},l(r){w(e.$$.fragment,r),t=b(r),w(s.$$.fragment,r)},m(r,f){v(e,r,f),i(r,t,f),v(s,r,f),$=!0},i(r){$||(a(e.$$.fragment,r),a(s.$$.fragment,r),$=!0)},o(r){c(e.$$.fragment,r),c(s.$$.fragment,r),$=!1},d(r){h(e,r),r&&p(t),h(s,r)}}}function Le(l){let e,t,s,$,r,f,o=l[0]&&je();return{c(){e=Q("input"),t=d(),o&&o.c(),s=K(),this.h()},l(m){e=V(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),s=K(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){i(m,e,_),e.checked=l[0],i(m,t,_),o&&o.m(m,_),i(m,s,_),$=!0,r||(f=ve(e,"change",l[1]),r=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&a(o,1):(o=je(),o.c(),a(o,1),o.m(s.parentNode,s)):o&&(he(),c(o,1,1,()=>{o=null}),de())},i(m){$||(a(o),$=!0)},o(m){c(o),$=!1},d(m){m&&p(e),m&&p(t),o&&o.d(m),m&&p(s),r=!1,f()}}}function Fe(l,e,t){let s=!1;function $(){s=this.checked,t(0,s)}return[s,$]}class Qe extends y{constructor(e){super(),S(this,e,Fe,Le,A,{})}}const Ve=`<script>\r
	import Example1 from "./Example1.svelte";\r
	import Example2 from "./Example2.svelte";\r
\r
	let show = false;\r
<\/script>\r
\r
<input bind:checked={show} type="checkbox" name="" id="" />\r
\r
{#if show}\r
	<Example1 />\r
	<Example2 />\r
{/if}`;function Xe(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,s){i(t,e,s)},p(t,[s]){s&1&&we(e,t[0])},i:E,o:E,d(t){t&&p(e)}}}function et(l,e,t){let s=0,$;return F(()=>{$=setInterval(()=>{console.log("count",t(0,++s))},1e3)}),He(()=>{clearInterval($)}),[s]}class tt extends y{constructor(e){super(),S(this,e,et,Xe,A,{})}}function qe(l){let e,t,s,$;return e=new tt({}),s=new Be({}),{c(){g(e.$$.fragment),t=d(),g(s.$$.fragment)},l(r){w(e.$$.fragment,r),t=b(r),w(s.$$.fragment,r)},m(r,f){v(e,r,f),i(r,t,f),v(s,r,f),$=!0},i(r){$||(a(e.$$.fragment,r),a(s.$$.fragment,r),$=!0)},o(r){c(e.$$.fragment,r),c(s.$$.fragment,r),$=!1},d(r){h(e,r),r&&p(t),h(s,r)}}}function nt(l){let e,t,s,$,r,f,o=l[0]&&qe();return{c(){e=Q("input"),t=d(),o&&o.c(),s=K(),this.h()},l(m){e=V(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),s=K(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){i(m,e,_),e.checked=l[0],i(m,t,_),o&&o.m(m,_),i(m,s,_),$=!0,r||(f=ve(e,"change",l[1]),r=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&a(o,1):(o=qe(),o.c(),a(o,1),o.m(s.parentNode,s)):o&&(he(),c(o,1,1,()=>{o=null}),de())},i(m){$||(a(o),$=!0)},o(m){c(o),$=!1},d(m){m&&p(e),m&&p(t),o&&o.d(m),m&&p(s),r=!1,f()}}}function rt(l,e,t){let s=!1;function $(){s=this.checked,t(0,s)}return[s,$]}class st extends y{constructor(e){super(),S(this,e,rt,nt,A,{})}}function ot(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,s){i(t,e,s)},p(t,[s]){s&1&&we(e,t[0])},i:E,o:E,d(t){t&&p(e)}}}function $t(l,e,t){let s=0;return F(()=>{let $=setInterval(()=>{console.log("count",t(0,++s))},1e3);return()=>clearInterval($)}),[s]}class lt extends y{constructor(e){super(),S(this,e,$t,ot,A,{})}}function ft(l){let e,t;return{c(){e=Q("img"),this.h()},l(s){e=V(s,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){_e(e.src,t=l[0])||I(e,"src",t),I(e,"alt","dog"),We(e,"width","200px")},m(s,$){i(s,e,$)},p(s,[$]){$&1&&!_e(e.src,t=s[0])&&I(e,"src",t)},i:E,o:E,d(s){s&&p(e)}}}function mt(l,e,t){let s;return F(()=>{const $=new AbortController,r=$.signal;return fetch("https://dog.ceo/api/breeds/image/random",{signal:r}).then(f=>f.json()).then(({message:f})=>{t(0,s=f)}),()=>$.abort()}),[s]}class ut extends y{constructor(e){super(),S(this,e,mt,ft,A,{})}}function De(l){let e,t,s,$;return e=new lt({}),s=new ut({}),{c(){g(e.$$.fragment),t=d(),g(s.$$.fragment)},l(r){w(e.$$.fragment,r),t=b(r),w(s.$$.fragment,r)},m(r,f){v(e,r,f),i(r,t,f),v(s,r,f),$=!0},i(r){$||(a(e.$$.fragment,r),a(s.$$.fragment,r),$=!0)},o(r){c(e.$$.fragment,r),c(s.$$.fragment,r),$=!1},d(r){h(e,r),r&&p(t),h(s,r)}}}function it(l){let e,t,s,$,r,f,o=l[0]&&De();return{c(){e=Q("input"),t=d(),o&&o.c(),s=K(),this.h()},l(m){e=V(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),s=K(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){i(m,e,_),e.checked=l[0],i(m,t,_),o&&o.m(m,_),i(m,s,_),$=!0,r||(f=ve(e,"change",l[1]),r=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&a(o,1):(o=De(),o.c(),a(o,1),o.m(s.parentNode,s)):o&&(he(),c(o,1,1,()=>{o=null}),de())},i(m){$||(a(o),$=!0)},o(m){c(o),$=!1},d(m){m&&p(e),m&&p(t),o&&o.d(m),m&&p(s),r=!1,f()}}}function pt(l,e,t){let s=!1;function $(){s=this.checked,t(0,s)}return[s,$]}class Pe extends y{constructor(e){super(),S(this,e,pt,it,A,{})}}const at=`<script>\r
	import { onMount } from "svelte";\r
	let count = 0;\r
\r
	onMount(() => {\r
		let intervalId = setInterval(() => {\r
			console.log("count", ++count);\r
		}, 1000);\r
	});\r
<\/script>\r
\r
{count}\r
`,ct=`<script>\r
	import { onMount, onDestroy } from "svelte";\r
	let count = 0;\r
	let intervalId;\r
\r
	onMount(() => {\r
		intervalId = setInterval(() => {\r
			console.log("count", ++count);\r
		}, 1000);\r
	});\r
\r
	onDestroy(() => {\r
		clearInterval(intervalId);\r
	});\r
<\/script>\r
\r
{count}\r
`,_t=`<script>\r
	import { onMount } from "svelte";\r
	let count = 0;\r
\r
	onMount(() => {\r
		let intervalId = setInterval(() => {\r
			console.log("count", ++count);\r
		}, 1000);\r
		return () => clearInterval(intervalId);\r
	});\r
<\/script>\r
\r
{count}\r
`,gt=`<script>\r
	import { onMount } from "svelte";\r
	let src;\r
\r
	onMount(() => {\r
		const controller = new AbortController();\r
		const signal = controller.signal;\r
\r
		fetch("https://dog.ceo/api/breeds/image/random", { signal })\r
			.then((response) => response.json())\r
			.then(({ message }) => {\r
				src = message;\r
			});\r
	});\r
<\/script>\r
\r
<img {src} alt="dog" style="width: 200px;" />\r
\r
<style>\r
</style>\r
`,wt=`<script>\r
	import { onMount } from "svelte";\r
	let src;\r
\r
	onMount(() => {\r
		const controller = new AbortController();\r
		const signal = controller.signal;\r
\r
		fetch("https://dog.ceo/api/breeds/image/random", { signal })\r
			.then((response) => response.json())\r
			.then(({ message }) => {\r
				src = message;\r
			});\r
\r
		return () => controller.abort();\r
	});\r
<\/script>\r
\r
<img {src} alt="dog" style="width: 200px;" />\r
\r
<style>\r
</style>\r
`;function vt(l){let e;return{c(){e=k("In the first example we have an interval that increments a count variable every second.")},l(t){e=x(t,"In the first example we have an interval that increments a count variable every second.")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function ht(l){let e;return{c(){e=k("In the second example we fetch and use onMount to prevent the fetch from running when server rendered (and instead wait until it is mounted).")},l(t){e=x(t,"In the second example we fetch and use onMount to prevent the fetch from running when server rendered (and instead wait until it is mounted).")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function dt(l){let e;return{c(){e=k("interval is still running")},l(t){e=x(t,"interval is still running")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function bt(l){let e,t,s,$;return t=new L({props:{$$slots:{default:[dt]},$$scope:{ctx:l}}}),{c(){e=k("One problem we have is that when we uncheck the checkbox the "),g(t.$$.fragment),s=k(" (you can see this in the console).")},l(r){e=x(r,"One problem we have is that when we uncheck the checkbox the "),w(t.$$.fragment,r),s=x(r," (you can see this in the console).")},m(r,f){i(r,e,f),v(t,r,f),i(r,s,f),$=!0},p(r,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:r}),t.$set(o)},i(r){$||(a(t.$$.fragment,r),$=!0)},o(r){c(t.$$.fragment,r),$=!1},d(r){r&&p(e),h(t,r),r&&p(s)}}}function kt(l){let e;return{c(){e=k("We need to remember to clean them up.")},l(t){e=x(t,"We need to remember to clean them up.")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function xt(l){let e;return{c(){e=k("Here's one way to do it:")},l(t){e=x(t,"Here's one way to do it:")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function It(l){let e;return{c(){e=k("But since this is a very common pattern in Svelte there's another way to do it.")},l(t){e=x(t,"But since this is a very common pattern in Svelte there's another way to do it.")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function Mt(l){let e;return{c(){e=k("return a function")},l(t){e=x(t,"return a function")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function Et(l){let e,t,s,$;return t=new L({props:{$$slots:{default:[Mt]},$$scope:{ctx:l}}}),{c(){e=k("You can "),g(t.$$.fragment),s=k(" in onMount and it will be called when the component is destroyed.")},l(r){e=x(r,"You can "),w(t.$$.fragment,r),s=x(r," in onMount and it will be called when the component is destroyed.")},m(r,f){i(r,e,f),v(t,r,f),i(r,s,f),$=!0},p(r,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:r}),t.$set(o)},i(r){$||(a(t.$$.fragment,r),$=!0)},o(r){c(t.$$.fragment,r),$=!1},d(r){r&&p(e),h(t,r),r&&p(s)}}}function yt(l){let e;return{c(){e=k("don't need to import onDestroy")},l(t){e=x(t,"don't need to import onDestroy")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function St(l){let e;return{c(){e=k("define the variable in onMount")},l(t){e=x(t,"define the variable in onMount")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function At(l){let e,t,s,$,r,f;return t=new L({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),$=new L({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){e=k("This way we "),g(t.$$.fragment),s=k(" and we can "),g($.$$.fragment),r=k(" as well.")},l(o){e=x(o,"This way we "),w(t.$$.fragment,o),s=x(o," and we can "),w($.$$.fragment,o),r=x(o," as well.")},m(o,m){i(o,e,m),v(t,o,m),i(o,s,m),v($,o,m),i(o,r,m),f=!0},p(o,m){const _={};m&2&&(_.$$scope={dirty:m,ctx:o}),t.$set(_);const W={};m&2&&(W.$$scope={dirty:m,ctx:o}),$.$set(W)},i(o){f||(a(t.$$.fragment,o),a($.$$.fragment,o),f=!0)},o(o){c(t.$$.fragment,o),c($.$$.fragment,o),f=!1},d(o){o&&p(e),h(t,o),o&&p(s),h($,o),o&&p(r)}}}function Rt(l){let e;return{c(){e=k("cancel the fetch when quickly checking and unchecking")},l(t){e=x(t,"cancel the fetch when quickly checking and unchecking")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function Ct(l){let e,t,s,$;return t=new L({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),{c(){e=k("We can also use the return in onMount to "),g(t.$$.fragment),s=k(".")},l(r){e=x(r,"We can also use the return in onMount to "),w(t.$$.fragment,r),s=x(r,".")},m(r,f){i(r,e,f),v(t,r,f),i(r,s,f),$=!0},p(r,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:r}),t.$set(o)},i(r){$||(a(t.$$.fragment,r),$=!0)},o(r){c(t.$$.fragment,r),$=!1},d(r){r&&p(e),h(t,r),r&&p(s)}}}function Nt(l){let e;return{c(){e=k("(open the network tab to see this, you may need to set throttling to slow 3G because the images are tiny)")},l(t){e=x(t,"(open the network tab to see this, you may need to set throttling to slow 3G because the images are tiny)")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function Tt(l){let e;return{c(){e=k("onMount does not render during SSR (server side rendering)")},l(t){e=x(t,"onMount does not render during SSR (server side rendering)")},m(t,s){i(t,e,s)},d(t){t&&p(e)}}}function jt(l){let e,t,s,$;return t=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){e=k("It's important to note that "),g(t.$$.fragment),s=k(".")},l(r){e=x(r,"It's important to note that "),w(t.$$.fragment,r),s=x(r,".")},m(r,f){i(r,e,f),v(t,r,f),i(r,s,f),$=!0},p(r,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:r}),t.$set(o)},i(r){$||(a(t.$$.fragment,r),$=!0)},o(r){c(t.$$.fragment,r),$=!1},d(r){r&&p(e),h(t,r),r&&p(s)}}}function qt(l){let e,t,s,$,r,f,o,m,_,W,B,X,R,ee,C,te,N,ne,H,re,U,se,T,oe,j,$e,O,le,Y,fe,q,me,D,ue,Z,ie,z,pe,P,ae,G,ce;return e=new Qe({}),s=new J({props:{code:Ve,name:"App.svelte"}}),r=new M({props:{$$slots:{default:[vt]},$$scope:{ctx:l}}}),o=new J({props:{code:at,name:"Example1.svelte"}}),_=new M({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}}),B=new J({props:{code:gt,name:"Example2.svelte"}}),R=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:l}}}),C=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:l}}}),N=new M({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),H=new st({}),U=new J({props:{code:ct,name:"Example1v2.svelte"}}),T=new M({props:{$$slots:{default:[It]},$$scope:{ctx:l}}}),j=new M({props:{$$slots:{default:[Et]},$$scope:{ctx:l}}}),O=new Pe({}),Y=new J({props:{code:_t,name:"Example1v3.svelte"}}),q=new M({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),D=new M({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),Z=new Pe({}),z=new J({props:{code:wt,name:"Example2v3.svelte"}}),P=new M({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),G=new M({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment),t=d(),g(s.$$.fragment),$=d(),g(r.$$.fragment),f=d(),g(o.$$.fragment),m=d(),g(_.$$.fragment),W=d(),g(B.$$.fragment),X=d(),g(R.$$.fragment),ee=d(),g(C.$$.fragment),te=d(),g(N.$$.fragment),ne=d(),g(H.$$.fragment),re=d(),g(U.$$.fragment),se=d(),g(T.$$.fragment),oe=d(),g(j.$$.fragment),$e=d(),g(O.$$.fragment),le=d(),g(Y.$$.fragment),fe=d(),g(q.$$.fragment),me=d(),g(D.$$.fragment),ue=d(),g(Z.$$.fragment),ie=d(),g(z.$$.fragment),pe=d(),g(P.$$.fragment),ae=d(),g(G.$$.fragment)},l(n){w(e.$$.fragment,n),t=b(n),w(s.$$.fragment,n),$=b(n),w(r.$$.fragment,n),f=b(n),w(o.$$.fragment,n),m=b(n),w(_.$$.fragment,n),W=b(n),w(B.$$.fragment,n),X=b(n),w(R.$$.fragment,n),ee=b(n),w(C.$$.fragment,n),te=b(n),w(N.$$.fragment,n),ne=b(n),w(H.$$.fragment,n),re=b(n),w(U.$$.fragment,n),se=b(n),w(T.$$.fragment,n),oe=b(n),w(j.$$.fragment,n),$e=b(n),w(O.$$.fragment,n),le=b(n),w(Y.$$.fragment,n),fe=b(n),w(q.$$.fragment,n),me=b(n),w(D.$$.fragment,n),ue=b(n),w(Z.$$.fragment,n),ie=b(n),w(z.$$.fragment,n),pe=b(n),w(P.$$.fragment,n),ae=b(n),w(G.$$.fragment,n)},m(n,u){v(e,n,u),i(n,t,u),v(s,n,u),i(n,$,u),v(r,n,u),i(n,f,u),v(o,n,u),i(n,m,u),v(_,n,u),i(n,W,u),v(B,n,u),i(n,X,u),v(R,n,u),i(n,ee,u),v(C,n,u),i(n,te,u),v(N,n,u),i(n,ne,u),v(H,n,u),i(n,re,u),v(U,n,u),i(n,se,u),v(T,n,u),i(n,oe,u),v(j,n,u),i(n,$e,u),v(O,n,u),i(n,le,u),v(Y,n,u),i(n,fe,u),v(q,n,u),i(n,me,u),v(D,n,u),i(n,ue,u),v(Z,n,u),i(n,ie,u),v(z,n,u),i(n,pe,u),v(P,n,u),i(n,ae,u),v(G,n,u),ce=!0},p(n,u){const be={};u&2&&(be.$$scope={dirty:u,ctx:n}),r.$set(be);const ke={};u&2&&(ke.$$scope={dirty:u,ctx:n}),_.$set(ke);const xe={};u&2&&(xe.$$scope={dirty:u,ctx:n}),R.$set(xe);const Ie={};u&2&&(Ie.$$scope={dirty:u,ctx:n}),C.$set(Ie);const Me={};u&2&&(Me.$$scope={dirty:u,ctx:n}),N.$set(Me);const Ee={};u&2&&(Ee.$$scope={dirty:u,ctx:n}),T.$set(Ee);const ye={};u&2&&(ye.$$scope={dirty:u,ctx:n}),j.$set(ye);const Se={};u&2&&(Se.$$scope={dirty:u,ctx:n}),q.$set(Se);const Ae={};u&2&&(Ae.$$scope={dirty:u,ctx:n}),D.$set(Ae);const Re={};u&2&&(Re.$$scope={dirty:u,ctx:n}),P.$set(Re);const Ce={};u&2&&(Ce.$$scope={dirty:u,ctx:n}),G.$set(Ce)},i(n){ce||(a(e.$$.fragment,n),a(s.$$.fragment,n),a(r.$$.fragment,n),a(o.$$.fragment,n),a(_.$$.fragment,n),a(B.$$.fragment,n),a(R.$$.fragment,n),a(C.$$.fragment,n),a(N.$$.fragment,n),a(H.$$.fragment,n),a(U.$$.fragment,n),a(T.$$.fragment,n),a(j.$$.fragment,n),a(O.$$.fragment,n),a(Y.$$.fragment,n),a(q.$$.fragment,n),a(D.$$.fragment,n),a(Z.$$.fragment,n),a(z.$$.fragment,n),a(P.$$.fragment,n),a(G.$$.fragment,n),ce=!0)},o(n){c(e.$$.fragment,n),c(s.$$.fragment,n),c(r.$$.fragment,n),c(o.$$.fragment,n),c(_.$$.fragment,n),c(B.$$.fragment,n),c(R.$$.fragment,n),c(C.$$.fragment,n),c(N.$$.fragment,n),c(H.$$.fragment,n),c(U.$$.fragment,n),c(T.$$.fragment,n),c(j.$$.fragment,n),c(O.$$.fragment,n),c(Y.$$.fragment,n),c(q.$$.fragment,n),c(D.$$.fragment,n),c(Z.$$.fragment,n),c(z.$$.fragment,n),c(P.$$.fragment,n),c(G.$$.fragment,n),ce=!1},d(n){h(e,n),n&&p(t),h(s,n),n&&p($),h(r,n),n&&p(f),h(o,n),n&&p(m),h(_,n),n&&p(W),h(B,n),n&&p(X),h(R,n),n&&p(ee),h(C,n),n&&p(te),h(N,n),n&&p(ne),h(H,n),n&&p(re),h(U,n),n&&p(se),h(T,n),n&&p(oe),h(j,n),n&&p($e),h(O,n),n&&p(le),h(Y,n),n&&p(fe),h(q,n),n&&p(me),h(D,n),n&&p(ue),h(Z,n),n&&p(ie),h(z,n),n&&p(pe),h(P,n),n&&p(ae),h(G,n)}}}function Dt(l){let e,t;const s=[l[0],Ge];let $={$$slots:{default:[qt]},$$scope:{ctx:l}};for(let r=0;r<s.length;r+=1)$=ge($,s[r]);return e=new Oe({props:$}),{c(){g(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,f){v(e,r,f),t=!0},p(r,[f]){const o=f&1?Ue(s,[f&1&&Ne(r[0]),f&0&&Ne(Ge)]):{};f&2&&(o.$$scope={dirty:f,ctx:r}),e.$set(o)},i(r){t||(a(e.$$.fragment,r),t=!0)},o(r){c(e.$$.fragment,r),t=!1},d(r){h(e,r)}}}const Ge={title:"onMount()",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-06T00:00:00.000Z",layout:"notes"};function Pt(l,e,t){return l.$$set=s=>{t(0,e=ge(ge({},e),Te(s)))},e=Te(e),[e]}class Ut extends y{constructor(e){super(),S(this,e,Pt,Dt,A,{})}}export{Ut as default,Ge as metadata};
