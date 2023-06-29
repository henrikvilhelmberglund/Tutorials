import{s as y,l as k,m as x,i as u,n as we,z as E,d as c,o as K,f as L,g as Q,a3 as _e,j as I,k as We,a as v,e as F,c as b,X as he,ac as Be,C as ge,D as je}from"./scheduler.a7cd560e.js";import{S,i as A,a as i,g as de,t as p,c as ve,b as g,d as w,m as h,e as d}from"./index.396264e7.js";import{g as He,a as De}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Oe,P as M}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Z}from"./ShowCode.9be9983a.js";import{S as J}from"./Strong.097578ae.js";function Ye(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,r){u(t,e,r)},p(t,[r]){r&1&&we(e,t[0])},i:E,o:E,d(t){t&&c(e)}}}function ze(l,e,t){let r=0;return K(()=>{setInterval(()=>{console.log("count",t(0,++r))},1e3)}),[r]}class Xe extends S{constructor(e){super(),A(this,e,ze,Ye,y,{})}}function Ze(l){let e,t;return{c(){e=L("img"),this.h()},l(r){e=Q(r,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){_e(e.src,t=l[0])||I(e,"src",t),I(e,"alt","dog"),We(e,"width","200px")},m(r,$){u(r,e,$)},p(r,[$]){$&1&&!_e(e.src,t=r[0])&&I(e,"src",t)},i:E,o:E,d(r){r&&c(e)}}}function Fe(l,e,t){let r;return K(()=>{const n=new AbortController().signal;fetch("https://dog.ceo/api/breeds/image/random",{signal:n}).then(f=>f.json()).then(({message:f})=>{t(0,r=f)})}),[r]}class Ue extends S{constructor(e){super(),A(this,e,Fe,Ze,y,{})}}function Ne(l){let e,t,r,$;return e=new Xe({}),r=new Ue({}),{c(){g(e.$$.fragment),t=v(),g(r.$$.fragment)},l(n){w(e.$$.fragment,n),t=b(n),w(r.$$.fragment,n)},m(n,f){h(e,n,f),u(n,t,f),h(r,n,f),$=!0},i(n){$||(i(e.$$.fragment,n),i(r.$$.fragment,n),$=!0)},o(n){p(e.$$.fragment,n),p(r.$$.fragment,n),$=!1},d(n){n&&c(t),d(e,n),d(r,n)}}}function Je(l){let e,t,r,$,n,f,o=l[0]&&Ne();return{c(){e=L("input"),t=v(),o&&o.c(),r=F(),this.h()},l(m){e=Q(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),r=F(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){u(m,e,_),e.checked=l[0],u(m,t,_),o&&o.m(m,_),u(m,r,_),$=!0,n||(f=he(e,"change",l[1]),n=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&i(o,1):(o=Ne(),o.c(),i(o,1),o.m(r.parentNode,r)):o&&(de(),p(o,1,1,()=>{o=null}),ve())},i(m){$||(i(o),$=!0)},o(m){p(o),$=!1},d(m){m&&(c(e),c(t),c(r)),o&&o.d(m),n=!1,f()}}}function Ke(l,e,t){let r=!1;function $(){r=this.checked,t(0,r)}return[r,$]}class Le extends S{constructor(e){super(),A(this,e,Ke,Je,y,{})}}const Qe=`<script>\r
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
{/if}`;function Ve(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,r){u(t,e,r)},p(t,[r]){r&1&&we(e,t[0])},i:E,o:E,d(t){t&&c(e)}}}function et(l,e,t){let r=0,$;return K(()=>{$=setInterval(()=>{console.log("count",t(0,++r))},1e3)}),Be(()=>{clearInterval($)}),[r]}class tt extends S{constructor(e){super(),A(this,e,et,Ve,y,{})}}function Te(l){let e,t,r,$;return e=new tt({}),r=new Ue({}),{c(){g(e.$$.fragment),t=v(),g(r.$$.fragment)},l(n){w(e.$$.fragment,n),t=b(n),w(r.$$.fragment,n)},m(n,f){h(e,n,f),u(n,t,f),h(r,n,f),$=!0},i(n){$||(i(e.$$.fragment,n),i(r.$$.fragment,n),$=!0)},o(n){p(e.$$.fragment,n),p(r.$$.fragment,n),$=!1},d(n){n&&c(t),d(e,n),d(r,n)}}}function nt(l){let e,t,r,$,n,f,o=l[0]&&Te();return{c(){e=L("input"),t=v(),o&&o.c(),r=F(),this.h()},l(m){e=Q(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),r=F(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){u(m,e,_),e.checked=l[0],u(m,t,_),o&&o.m(m,_),u(m,r,_),$=!0,n||(f=he(e,"change",l[1]),n=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&i(o,1):(o=Te(),o.c(),i(o,1),o.m(r.parentNode,r)):o&&(de(),p(o,1,1,()=>{o=null}),ve())},i(m){$||(i(o),$=!0)},o(m){p(o),$=!1},d(m){m&&(c(e),c(t),c(r)),o&&o.d(m),n=!1,f()}}}function rt(l,e,t){let r=!1;function $(){r=this.checked,t(0,r)}return[r,$]}class st extends S{constructor(e){super(),A(this,e,rt,nt,y,{})}}function ot(l){let e;return{c(){e=k(l[0])},l(t){e=x(t,l[0])},m(t,r){u(t,e,r)},p(t,[r]){r&1&&we(e,t[0])},i:E,o:E,d(t){t&&c(e)}}}function $t(l,e,t){let r=0;return K(()=>{let $=setInterval(()=>{console.log("count",t(0,++r))},1e3);return()=>clearInterval($)}),[r]}class lt extends S{constructor(e){super(),A(this,e,$t,ot,y,{})}}function ft(l){let e,t;return{c(){e=L("img"),this.h()},l(r){e=Q(r,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){_e(e.src,t=l[0])||I(e,"src",t),I(e,"alt","dog"),We(e,"width","200px")},m(r,$){u(r,e,$)},p(r,[$]){$&1&&!_e(e.src,t=r[0])&&I(e,"src",t)},i:E,o:E,d(r){r&&c(e)}}}function mt(l,e,t){let r;return K(()=>{const $=new AbortController,n=$.signal;return fetch("https://dog.ceo/api/breeds/image/random",{signal:n}).then(f=>f.json()).then(({message:f})=>{t(0,r=f)}),()=>$.abort()}),[r]}class at extends S{constructor(e){super(),A(this,e,mt,ft,y,{})}}function Pe(l){let e,t,r,$;return e=new lt({}),r=new at({}),{c(){g(e.$$.fragment),t=v(),g(r.$$.fragment)},l(n){w(e.$$.fragment,n),t=b(n),w(r.$$.fragment,n)},m(n,f){h(e,n,f),u(n,t,f),h(r,n,f),$=!0},i(n){$||(i(e.$$.fragment,n),i(r.$$.fragment,n),$=!0)},o(n){p(e.$$.fragment,n),p(r.$$.fragment,n),$=!1},d(n){n&&c(t),d(e,n),d(r,n)}}}function ut(l){let e,t,r,$,n,f,o=l[0]&&Pe();return{c(){e=L("input"),t=v(),o&&o.c(),r=F(),this.h()},l(m){e=Q(m,"INPUT",{type:!0,name:!0,id:!0}),t=b(m),o&&o.l(m),r=F(),this.h()},h(){I(e,"type","checkbox"),I(e,"name",""),I(e,"id","")},m(m,_){u(m,e,_),e.checked=l[0],u(m,t,_),o&&o.m(m,_),u(m,r,_),$=!0,n||(f=he(e,"change",l[1]),n=!0)},p(m,[_]){_&1&&(e.checked=m[0]),m[0]?o?_&1&&i(o,1):(o=Pe(),o.c(),i(o,1),o.m(r.parentNode,r)):o&&(de(),p(o,1,1,()=>{o=null}),ve())},i(m){$||(i(o),$=!0)},o(m){p(o),$=!1},d(m){m&&(c(e),c(t),c(r)),o&&o.d(m),n=!1,f()}}}function ct(l,e,t){let r=!1;function $(){r=this.checked,t(0,r)}return[r,$]}class qe extends S{constructor(e){super(),A(this,e,ct,ut,y,{})}}const it=`<script>\r
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
`,pt=`<script>\r
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
`;function ht(l){let e;return{c(){e=k("In the first example we have an interval that increments a count variable every second.")},l(t){e=x(t,"In the first example we have an interval that increments a count variable every second.")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function dt(l){let e;return{c(){e=k("In the second example we fetch and use onMount to prevent the fetch from running when server rendered (and instead wait until it is mounted).")},l(t){e=x(t,"In the second example we fetch and use onMount to prevent the fetch from running when server rendered (and instead wait until it is mounted).")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function vt(l){let e;return{c(){e=k("interval is still running")},l(t){e=x(t,"interval is still running")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function bt(l){let e,t,r,$;return t=new J({props:{$$slots:{default:[vt]},$$scope:{ctx:l}}}),{c(){e=k("One problem we have is that when we uncheck the checkbox the "),g(t.$$.fragment),r=k(" (you can see this in the console).")},l(n){e=x(n,"One problem we have is that when we uncheck the checkbox the "),w(t.$$.fragment,n),r=x(n," (you can see this in the console).")},m(n,f){u(n,e,f),h(t,n,f),u(n,r,f),$=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){$||(i(t.$$.fragment,n),$=!0)},o(n){p(t.$$.fragment,n),$=!1},d(n){n&&(c(e),c(r)),d(t,n)}}}function kt(l){let e;return{c(){e=k("We need to remember to clean them up.")},l(t){e=x(t,"We need to remember to clean them up.")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function xt(l){let e;return{c(){e=k("Here's one way to do it:")},l(t){e=x(t,"Here's one way to do it:")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function It(l){let e;return{c(){e=k("But since this is a very common pattern in Svelte there's another way to do it.")},l(t){e=x(t,"But since this is a very common pattern in Svelte there's another way to do it.")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function Mt(l){let e;return{c(){e=k("return a function")},l(t){e=x(t,"return a function")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function Et(l){let e,t,r,$;return t=new J({props:{$$slots:{default:[Mt]},$$scope:{ctx:l}}}),{c(){e=k("You can "),g(t.$$.fragment),r=k(" in onMount and it will be called when the component is destroyed.")},l(n){e=x(n,"You can "),w(t.$$.fragment,n),r=x(n," in onMount and it will be called when the component is destroyed.")},m(n,f){u(n,e,f),h(t,n,f),u(n,r,f),$=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){$||(i(t.$$.fragment,n),$=!0)},o(n){p(t.$$.fragment,n),$=!1},d(n){n&&(c(e),c(r)),d(t,n)}}}function yt(l){let e;return{c(){e=k("don't need to import onDestroy")},l(t){e=x(t,"don't need to import onDestroy")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function St(l){let e;return{c(){e=k("define the variable in onMount")},l(t){e=x(t,"define the variable in onMount")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function At(l){let e,t,r,$,n,f;return t=new J({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),$=new J({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){e=k("This way we "),g(t.$$.fragment),r=k(" and we can "),g($.$$.fragment),n=k(" as well.")},l(o){e=x(o,"This way we "),w(t.$$.fragment,o),r=x(o," and we can "),w($.$$.fragment,o),n=x(o," as well.")},m(o,m){u(o,e,m),h(t,o,m),u(o,r,m),h($,o,m),u(o,n,m),f=!0},p(o,m){const _={};m&2&&(_.$$scope={dirty:m,ctx:o}),t.$set(_);const W={};m&2&&(W.$$scope={dirty:m,ctx:o}),$.$set(W)},i(o){f||(i(t.$$.fragment,o),i($.$$.fragment,o),f=!0)},o(o){p(t.$$.fragment,o),p($.$$.fragment,o),f=!1},d(o){o&&(c(e),c(r),c(n)),d(t,o),d($,o)}}}function Rt(l){let e;return{c(){e=k("cancel the fetch when quickly checking and unchecking")},l(t){e=x(t,"cancel the fetch when quickly checking and unchecking")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function Ct(l){let e,t,r,$;return t=new J({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),{c(){e=k("We can also use the return in onMount to "),g(t.$$.fragment),r=k(".")},l(n){e=x(n,"We can also use the return in onMount to "),w(t.$$.fragment,n),r=x(n,".")},m(n,f){u(n,e,f),h(t,n,f),u(n,r,f),$=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){$||(i(t.$$.fragment,n),$=!0)},o(n){p(t.$$.fragment,n),$=!1},d(n){n&&(c(e),c(r)),d(t,n)}}}function jt(l){let e;return{c(){e=k("(open the network tab to see this, you may need to set throttling to slow 3G because the images are tiny)")},l(t){e=x(t,"(open the network tab to see this, you may need to set throttling to slow 3G because the images are tiny)")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function Dt(l){let e;return{c(){e=k("onMount does not render during SSR (server side rendering)")},l(t){e=x(t,"onMount does not render during SSR (server side rendering)")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function Nt(l){let e,t,r,$;return t=new J({props:{$$slots:{default:[Dt]},$$scope:{ctx:l}}}),{c(){e=k("It's important to note that "),g(t.$$.fragment),r=k(".")},l(n){e=x(n,"It's important to note that "),w(t.$$.fragment,n),r=x(n,".")},m(n,f){u(n,e,f),h(t,n,f),u(n,r,f),$=!0},p(n,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:n}),t.$set(o)},i(n){$||(i(t.$$.fragment,n),$=!0)},o(n){p(t.$$.fragment,n),$=!1},d(n){n&&(c(e),c(r)),d(t,n)}}}function Tt(l){let e,t,r,$,n,f,o,m,_,W,U,V,R,ee,C,te,j,ne,B,re,H,se,D,oe,N,$e,O,le,Y,fe,T,me,P,ae,z,ue,X,ce,q,ie,G,pe;return e=new Le({}),r=new Z({props:{code:Qe,name:"App.svelte"}}),n=new M({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}}),o=new Z({props:{code:it,name:"Example1.svelte"}}),_=new M({props:{$$slots:{default:[dt]},$$scope:{ctx:l}}}),U=new Z({props:{code:gt,name:"Example2.svelte"}}),R=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:l}}}),C=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:l}}}),j=new M({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),B=new st({}),H=new Z({props:{code:pt,name:"Example1v2.svelte"}}),D=new M({props:{$$slots:{default:[It]},$$scope:{ctx:l}}}),N=new M({props:{$$slots:{default:[Et]},$$scope:{ctx:l}}}),O=new qe({}),Y=new Z({props:{code:_t,name:"Example1v3.svelte"}}),T=new M({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),P=new M({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),z=new qe({}),X=new Z({props:{code:wt,name:"Example2v3.svelte"}}),q=new M({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),G=new M({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment),t=v(),g(r.$$.fragment),$=v(),g(n.$$.fragment),f=v(),g(o.$$.fragment),m=v(),g(_.$$.fragment),W=v(),g(U.$$.fragment),V=v(),g(R.$$.fragment),ee=v(),g(C.$$.fragment),te=v(),g(j.$$.fragment),ne=v(),g(B.$$.fragment),re=v(),g(H.$$.fragment),se=v(),g(D.$$.fragment),oe=v(),g(N.$$.fragment),$e=v(),g(O.$$.fragment),le=v(),g(Y.$$.fragment),fe=v(),g(T.$$.fragment),me=v(),g(P.$$.fragment),ae=v(),g(z.$$.fragment),ue=v(),g(X.$$.fragment),ce=v(),g(q.$$.fragment),ie=v(),g(G.$$.fragment)},l(s){w(e.$$.fragment,s),t=b(s),w(r.$$.fragment,s),$=b(s),w(n.$$.fragment,s),f=b(s),w(o.$$.fragment,s),m=b(s),w(_.$$.fragment,s),W=b(s),w(U.$$.fragment,s),V=b(s),w(R.$$.fragment,s),ee=b(s),w(C.$$.fragment,s),te=b(s),w(j.$$.fragment,s),ne=b(s),w(B.$$.fragment,s),re=b(s),w(H.$$.fragment,s),se=b(s),w(D.$$.fragment,s),oe=b(s),w(N.$$.fragment,s),$e=b(s),w(O.$$.fragment,s),le=b(s),w(Y.$$.fragment,s),fe=b(s),w(T.$$.fragment,s),me=b(s),w(P.$$.fragment,s),ae=b(s),w(z.$$.fragment,s),ue=b(s),w(X.$$.fragment,s),ce=b(s),w(q.$$.fragment,s),ie=b(s),w(G.$$.fragment,s)},m(s,a){h(e,s,a),u(s,t,a),h(r,s,a),u(s,$,a),h(n,s,a),u(s,f,a),h(o,s,a),u(s,m,a),h(_,s,a),u(s,W,a),h(U,s,a),u(s,V,a),h(R,s,a),u(s,ee,a),h(C,s,a),u(s,te,a),h(j,s,a),u(s,ne,a),h(B,s,a),u(s,re,a),h(H,s,a),u(s,se,a),h(D,s,a),u(s,oe,a),h(N,s,a),u(s,$e,a),h(O,s,a),u(s,le,a),h(Y,s,a),u(s,fe,a),h(T,s,a),u(s,me,a),h(P,s,a),u(s,ae,a),h(z,s,a),u(s,ue,a),h(X,s,a),u(s,ce,a),h(q,s,a),u(s,ie,a),h(G,s,a),pe=!0},p(s,a){const be={};a&2&&(be.$$scope={dirty:a,ctx:s}),n.$set(be);const ke={};a&2&&(ke.$$scope={dirty:a,ctx:s}),_.$set(ke);const xe={};a&2&&(xe.$$scope={dirty:a,ctx:s}),R.$set(xe);const Ie={};a&2&&(Ie.$$scope={dirty:a,ctx:s}),C.$set(Ie);const Me={};a&2&&(Me.$$scope={dirty:a,ctx:s}),j.$set(Me);const Ee={};a&2&&(Ee.$$scope={dirty:a,ctx:s}),D.$set(Ee);const ye={};a&2&&(ye.$$scope={dirty:a,ctx:s}),N.$set(ye);const Se={};a&2&&(Se.$$scope={dirty:a,ctx:s}),T.$set(Se);const Ae={};a&2&&(Ae.$$scope={dirty:a,ctx:s}),P.$set(Ae);const Re={};a&2&&(Re.$$scope={dirty:a,ctx:s}),q.$set(Re);const Ce={};a&2&&(Ce.$$scope={dirty:a,ctx:s}),G.$set(Ce)},i(s){pe||(i(e.$$.fragment,s),i(r.$$.fragment,s),i(n.$$.fragment,s),i(o.$$.fragment,s),i(_.$$.fragment,s),i(U.$$.fragment,s),i(R.$$.fragment,s),i(C.$$.fragment,s),i(j.$$.fragment,s),i(B.$$.fragment,s),i(H.$$.fragment,s),i(D.$$.fragment,s),i(N.$$.fragment,s),i(O.$$.fragment,s),i(Y.$$.fragment,s),i(T.$$.fragment,s),i(P.$$.fragment,s),i(z.$$.fragment,s),i(X.$$.fragment,s),i(q.$$.fragment,s),i(G.$$.fragment,s),pe=!0)},o(s){p(e.$$.fragment,s),p(r.$$.fragment,s),p(n.$$.fragment,s),p(o.$$.fragment,s),p(_.$$.fragment,s),p(U.$$.fragment,s),p(R.$$.fragment,s),p(C.$$.fragment,s),p(j.$$.fragment,s),p(B.$$.fragment,s),p(H.$$.fragment,s),p(D.$$.fragment,s),p(N.$$.fragment,s),p(O.$$.fragment,s),p(Y.$$.fragment,s),p(T.$$.fragment,s),p(P.$$.fragment,s),p(z.$$.fragment,s),p(X.$$.fragment,s),p(q.$$.fragment,s),p(G.$$.fragment,s),pe=!1},d(s){s&&(c(t),c($),c(f),c(m),c(W),c(V),c(ee),c(te),c(ne),c(re),c(se),c(oe),c($e),c(le),c(fe),c(me),c(ae),c(ue),c(ce),c(ie)),d(e,s),d(r,s),d(n,s),d(o,s),d(_,s),d(U,s),d(R,s),d(C,s),d(j,s),d(B,s),d(H,s),d(D,s),d(N,s),d(O,s),d(Y,s),d(T,s),d(P,s),d(z,s),d(X,s),d(q,s),d(G,s)}}}function Pt(l){let e,t;const r=[l[0],Ge];let $={$$slots:{default:[Tt]},$$scope:{ctx:l}};for(let n=0;n<r.length;n+=1)$=ge($,r[n]);return e=new Oe({props:$}),{c(){g(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,f){h(e,n,f),t=!0},p(n,[f]){const o=f&1?He(r,[f&1&&De(n[0]),f&0&&De(Ge)]):{};f&2&&(o.$$scope={dirty:f,ctx:n}),e.$set(o)},i(n){t||(i(e.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),t=!1},d(n){d(e,n)}}}const Ge={title:"onMount()",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-06T00:00:00.000Z",layout:"notes"};function qt(l,e,t){return l.$$set=r=>{t(0,e=ge(ge({},e),je(r)))},e=je(e),[e]}class Yt extends S{constructor(e){super(),A(this,e,qt,Pt,y,{})}}export{Yt as default,Ge as metadata};
