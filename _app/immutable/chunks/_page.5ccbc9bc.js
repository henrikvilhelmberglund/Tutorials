import{S as A,i as T,s as L,C as nt,k as I,l as q,m as C,h as p,n as P,b as i,E as st,F as rt,G as ot,g as _,d as y,y as b,a as v,z as g,c as B,A as w,B as d,q as h,r as k,K as E,as as bt,O as gt,L as Lt,at as et,N as M,D as zt,T as Jt,u as Rt,H as wt,M as dt}from"./index.0b5cc0d7.js";import{M as Ot,P as S}from"./mdsvex-layout-notes.c527e9b3.js";import{S as tt}from"./ShowMany.5b53376e.js";import{S as D}from"./Strong.272c5f79.js";function Nt(a){let t,e,s;const f=a[2].default,n=nt(f,a,a[1],null);return{c(){t=I("button"),n&&n.c(),this.h()},l(r){t=q(r,"BUTTON",{class:!0});var o=C(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+a[0]+" svelte-aihy4j")},m(r,o){i(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&2)&&st(n,f,r,r[1],s?ot(f,r[1],o,null):rt(r[1]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e)},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function Ut(a,t,e){let{$$slots:s={},$$scope:f}=t,{type:n}=t;return a.$$set=r=>{"type"in r&&e(0,n=r.type),"$$scope"in r&&e(1,f=r.$$scope)},[n,f,s]}class ht extends A{constructor(t){super(),T(this,t,Ut,Nt,L,{type:0})}}function Et(a){let t;return{c(){t=h("Primary button")},l(e){t=k(e,"Primary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Xt(a){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Ft(a){let t,e,s,f;return t=new ht({props:{type:"primary",$$slots:{default:[Et]},$$scope:{ctx:a}}}),s=new ht({props:{type:"secondary",$$slots:{default:[Xt]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=v(),b(s.$$.fragment)},l(n){g(t.$$.fragment,n),e=B(n),g(s.$$.fragment,n)},m(n,r){w(t,n,r),i(n,e,r),w(s,n,r),f=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){f||(_(t.$$.fragment,n),_(s.$$.fragment,n),f=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),f=!1},d(n){d(t,n),n&&p(e),d(s,n)}}}class kt extends A{constructor(t){super(),T(this,t,null,Ft,L,{})}}const Wt=`<script>\r
	import Button from "./Button.svelte";\r
<\/script>\r
\r
<Button type="primary">Primary button</Button>\r
\r
<Button type="secondary">Secondary button</Button>\r
\r
<style>\r
</style>\r
`,Mt=`<script>\r
	export let type;\r
<\/script>\r
\r
<button class="btn-{type}"><slot /></button>\r
\r
<style>\r
	.btn-primary {\r
		background: #ff5722;\r
		color: white;\r
	}\r
	.btn-secondary {\r
		background: #5c5c6d;\r
		color: white;\r
	}\r
</style>\r
`;function Dt(a){let t,e,s;const f=a[3].default,n=nt(f,a,a[2],null);return{c(){t=I("button"),n&&n.c(),this.h()},l(r){t=q(r,"BUTTON",{class:!0,style:!0});var o=C(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+a[0]+" svelte-aihy4j"),P(t,"style",a[1])},m(r,o){i(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&4)&&st(n,f,r,r[2],s?ot(f,r[2],o,null):rt(r[2]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e),(!s||o&2)&&P(t,"style",r[1])},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function It(a,t,e){let{$$slots:s={},$$scope:f}=t,{type:n}=t,{style:r}=t;return a.$$set=o=>{"type"in o&&e(0,n=o.type),"style"in o&&e(1,r=o.style),"$$scope"in o&&e(2,f=o.$$scope)},[n,r,f,s]}class vt extends A{constructor(t){super(),T(this,t,It,Dt,L,{type:0,style:1})}}function qt(a){let t;return{c(){t=h("Primary button")},l(e){t=k(e,"Primary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Ct(a){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Gt(a){let t,e,s,f;return t=new vt({props:{type:"primary",style:"font-size: 24px;",$$slots:{default:[qt]},$$scope:{ctx:a}}}),s=new vt({props:{type:"secondary",$$slots:{default:[Ct]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=v(),b(s.$$.fragment)},l(n){g(t.$$.fragment,n),e=B(n),g(s.$$.fragment,n)},m(n,r){w(t,n,r),i(n,e,r),w(s,n,r),f=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){f||(_(t.$$.fragment,n),_(s.$$.fragment,n),f=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),f=!1},d(n){d(t,n),n&&p(e),d(s,n)}}}class Bt extends A{constructor(t){super(),T(this,t,null,Gt,L,{})}}const Ht=`<script>\r
	import Button2 from "./Button2.svelte";\r
<\/script>\r
\r
<Button2 type="primary" style="font-size: 24px;">Primary button</Button2>\r
\r
<Button2 type="secondary">Secondary button</Button2>\r
\r
<style>\r
</style>\r
`,Kt=`<script>\r
	export let type;\r
	export let style;\r
<\/script>\r
\r
<button class="btn-{type}" {style}><slot /></button>\r
\r
<style>\r
	.btn-primary {\r
		background: #ff5722;\r
		color: white;\r
	}\r
	.btn-secondary {\r
		background: #5c5c6d;\r
		color: white;\r
	}\r
</style>\r
`;function Zt(a){let t,e,s;const f=a[4].default,n=nt(f,a,a[3],null);return{c(){t=I("button"),n&&n.c(),this.h()},l(r){t=q(r,"BUTTON",{class:!0,style:!0,"aria-label":!0});var o=C(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+a[0]+" svelte-aihy4j"),P(t,"style",a[1]),P(t,"aria-label",a[2])},m(r,o){i(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&8)&&st(n,f,r,r[3],s?ot(f,r[3],o,null):rt(r[3]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e),(!s||o&2)&&P(t,"style",r[1]),(!s||o&4)&&P(t,"aria-label",r[2])},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function xt(a,t,e){let{$$slots:s={},$$scope:f}=t,{type:n}=t,{style:r}=t,{ariaLabel:o}=t;return a.$$set=$=>{"type"in $&&e(0,n=$.type),"style"in $&&e(1,r=$.style),"ariaLabel"in $&&e(2,o=$.ariaLabel),"$$scope"in $&&e(3,f=$.$$scope)},[n,r,o,f,s]}class jt extends A{constructor(t){super(),T(this,t,xt,Zt,L,{type:0,style:1,ariaLabel:2})}}function Qt(a){let t;return{c(){t=h("X")},l(e){t=k(e,"X")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Vt(a){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Yt(a){let t,e,s,f;return t=new jt({props:{type:"primary",style:"font-size: 24px;",ariaLabel:"close",$$slots:{default:[Qt]},$$scope:{ctx:a}}}),s=new jt({props:{type:"secondary",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=v(),b(s.$$.fragment)},l(n){g(t.$$.fragment,n),e=B(n),g(s.$$.fragment,n)},m(n,r){w(t,n,r),i(n,e,r),w(s,n,r),f=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){f||(_(t.$$.fragment,n),_(s.$$.fragment,n),f=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),f=!1},d(n){d(t,n),n&&p(e),d(s,n)}}}class Pt extends A{constructor(t){super(),T(this,t,null,Yt,L,{})}}const te=`<script>\r
	import Button3 from "./Button3.svelte";\r
<\/script>\r
\r
<Button3 type="primary" style="font-size: 24px;" ariaLabel="close">X</Button3>\r
\r
<Button3 type="secondary">Secondary button</Button3>\r
\r
<style>\r
</style>\r
`,ee=`<script>\r
	export let type;\r
	export let style;\r
  export let ariaLabel;\r
<\/script>\r
\r
<button class="btn-{type}" {style} aria-label={ariaLabel}><slot /></button>\r
\r
<style>\r
	.btn-primary {\r
		background: #ff5722;\r
		color: white;\r
	}\r
	.btn-secondary {\r
		background: #5c5c6d;\r
		color: white;\r
	}\r
</style>\r
`;function ne(a){let t,e,s,f;const n=a[5].default,r=nt(n,a,a[4],null);let o=[{style:e="color: skyblue; "+a[1]},a[2],{class:s="btn-"+a[0]+" "+a[3].class}],$={};for(let u=0;u<o.length;u+=1)$=E($,o[u]);return{c(){t=I("button"),r&&r.c(),this.h()},l(u){t=q(u,"BUTTON",{style:!0,class:!0});var m=C(t);r&&r.l(m),m.forEach(p),this.h()},h(){bt(t,$),gt(t,"svelte-aihy4j",!0)},m(u,m){i(u,t,m),r&&r.m(t,null),t.autofocus&&t.focus(),f=!0},p(u,[m]){r&&r.p&&(!f||m&16)&&st(r,n,u,u[4],f?ot(n,u[4],m,null):rt(u[4]),null),bt(t,$=Lt(o,[(!f||m&2&&e!==(e="color: skyblue; "+u[1]))&&{style:e},m&4&&u[2],(!f||m&9&&s!==(s="btn-"+u[0]+" "+u[3].class))&&{class:s}])),gt(t,"svelte-aihy4j",!0)},i(u){f||(_(r,u),f=!0)},o(u){y(r,u),f=!1},d(u){u&&p(t),r&&r.d(u)}}}function se(a,t,e){const s=["type","style"];let f=et(t,s),{$$slots:n={},$$scope:r}=t,{type:o}=t,{style:$}=t;return a.$$set=u=>{e(3,t=E(E({},t),M(u))),e(2,f=et(t,s)),"type"in u&&e(0,o=u.type),"style"in u&&e(1,$=u.style),"$$scope"in u&&e(4,r=u.$$scope)},t=M(t),[o,$,f,t,r,n]}class St extends A{constructor(t){super(),T(this,t,se,ne,L,{type:0,style:1})}}function re(a){let t,e,s,f,n,r;return{c(){t=h(a[0]),e=v(),s=I("button"),f=h("Load joke")},l(o){t=k(o,a[0]),e=B(o),s=q(o,"BUTTON",{});var $=C(s);f=k($,"Load joke"),$.forEach(p)},m(o,$){i(o,t,$),i(o,e,$),i(o,s,$),zt(s,f),n||(r=Jt(s,"click",a[1]),n=!0)},p(o,[$]){$&1&&Rt(t,o[0])},i:wt,o:wt,d(o){o&&p(t),o&&p(e),o&&p(s),n=!1,r()}}}function oe(a,t,e){const s=["categories"];let f=et(t,s),{categories:n="Any"}=t,r;async function o(){const $=new URLSearchParams;for(const j in f)$.append(j,f[j]);const m=await(await fetch(`https://v2.jokeapi.dev/joke/${n}?${$.toString()}`)).json();if(m.type==="twopart"){e(0,r=m.setup+m.delivery);return}e(0,r=m.joke)}return a.$$set=$=>{t=E(E({},t),M($)),e(3,f=et(t,s)),"categories"in $&&e(2,n=$.categories)},[r,o,n]}class At extends A{constructor(t){super(),T(this,t,oe,re,L,{categories:2})}}function le(a){let t;return{c(){t=h("X")},l(e){t=k(e,"X")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function ae(a){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function fe(a){let t,e,s,f,n,r,o,$;return t=new At({props:{type:"twopart",category:"Programming",lang:"en",blacklistFlags:"nsfw,racist,sexist,explicit"}}),s=new At({props:{type:"single",category:"Dark",lang:"en",blacklistFlags:"nsfw,racist,sexist,explicit"}}),n=new St({props:{type:ue,style:"font-size: 24px;","aria-label":"close",class:"uno-kkshi9 a c",foo:"bar",$$slots:{default:[le]},$$scope:{ctx:a}}}),o=new St({props:{type:"secondary",$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=v(),b(s.$$.fragment),f=v(),b(n.$$.fragment),r=v(),b(o.$$.fragment)},l(u){g(t.$$.fragment,u),e=B(u),g(s.$$.fragment,u),f=B(u),g(n.$$.fragment,u),r=B(u),g(o.$$.fragment,u)},m(u,m){w(t,u,m),i(u,e,m),w(s,u,m),i(u,f,m),w(n,u,m),i(u,r,m),w(o,u,m),$=!0},p(u,[m]){const j={};m&1&&(j.$$scope={dirty:m,ctx:u}),n.$set(j);const X={};m&1&&(X.$$scope={dirty:m,ctx:u}),o.$set(X)},i(u){$||(_(t.$$.fragment,u),_(s.$$.fragment,u),_(n.$$.fragment,u),_(o.$$.fragment,u),$=!0)},o(u){y(t.$$.fragment,u),y(s.$$.fragment,u),y(n.$$.fragment,u),y(o.$$.fragment,u),$=!1},d(u){d(t,u),u&&p(e),d(s,u),u&&p(f),d(n,u),u&&p(r),d(o,u)}}}let ue="primary";class lt extends A{constructor(t){super(),T(this,t,null,fe,L,{})}}const $e=`<script>\r
	import Button4 from "./Button4.svelte";\r
	import Joke from "./Joke.svelte";\r
\r
	let type = "primary";\r
	// $$props is reactive so you could do something like this\r
	// 	setTimeout(() => {\r
	// 		type="secondary"\r
	// 	}, 1000)\r
<\/script>\r
\r
<!-- we want to customize through the props -->\r
<Joke\r
	type="twopart"\r
	category="Programming"\r
	lang="en"\r
	blacklistFlags="nsfw,racist,sexist,explicit" />\r
\r
<Joke type="single" category="Dark" lang="en" blacklistFlags="nsfw,racist,sexist,explicit" />\r
\r
<Button4 {type} style="font-size: 24px;" aria-label="close" class="a b c" foo="bar">X</Button4>\r
\r
<Button4 type="secondary">Secondary button</Button4>\r
\r
<style>\r
	:global(.a) {\r
		font-style: italic;\r
	}\r
</style>\r
`,pe=`<script>\r
	export let type;\r
	export let style;\r
<\/script>\r
\r
<button style="color: skyblue; {style}" {...$$restProps} class="btn-{type} {$$props.class}"\r
	><slot /></button>\r
\r
<style>\r
	.btn-primary {\r
		background: #ff5722;\r
		color: white;\r
	}\r
	.btn-secondary {\r
		background: #5c5c6d;\r
		color: white;\r
	}\r
</style>\r
`,ie=`<script>\r
	export let categories = "Any";\r
	let joke;\r
	async function loadJoke() {\r
		const params = new URLSearchParams();\r
		for (const key in $$restProps) {\r
			params.append(key, $$restProps[key]);\r
		}\r
		const res = await fetch(\`https://v2.jokeapi.dev/joke/\${categories}?\${params.toString()}\`);\r
		const data = await res.json();\r
		if (data.type === "twopart") {\r
			joke = data.setup + data.delivery;\r
			return;\r
		}\r
		joke = data.joke;\r
	}\r
<\/script>\r
\r
{joke}\r
\r
<button on:click={loadJoke}> Load joke </button>\r
\r
<style>\r
</style>\r
`;function ce(a){let t;return{c(){t=h("This time we're finding out about $$props and $$restProps.")},l(e){t=k(e,"This time we're finding out about $$props and $$restProps.")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function me(a){let t;return{c(){t=h("We're making a button component as if we're making a component library.")},l(e){t=k(e,"We're making a button component as if we're making a component library.")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function _e(a){let t;return{c(){t=h("Now a user tells us that they want a new feature, to be able to customize the style of the button. We say okay and start implementing this:")},l(e){t=k(e,"Now a user tells us that they want a new feature, to be able to customize the style of the button. We say okay and start implementing this:")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function ye(a){let t;return{c(){t=h("Phew! Oh wait, now they want a new feature, to add an aria-label.")},l(e){t=k(e,"Phew! Oh wait, now they want a new feature, to add an aria-label.")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function be(a){let t;return{c(){t=h("Okay this isn't great, every time we're asked for a new feature we have to edit our component to support it. Is there a better way?")},l(e){t=k(e,"Okay this isn't great, every time we're asked for a new feature we have to edit our component to support it. Is there a better way?")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function ge(a){let t;return{c(){t=h("$$props")},l(e){t=k(e,"$$props")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function we(a){let t;return{c(){t=h("$$restProps")},l(e){t=k(e,"$$restProps")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function de(a){let t,e,s,f,n,r;return e=new D({props:{$$slots:{default:[ge]},$$scope:{ctx:a}}}),f=new D({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){t=h("This is why we have "),b(e.$$.fragment),s=h(" and "),b(f.$$.fragment),n=h(".")},l(o){t=k(o,"This is why we have "),g(e.$$.fragment,o),s=k(o," and "),g(f.$$.fragment,o),n=k(o,".")},m(o,$){i(o,t,$),w(e,o,$),i(o,s,$),w(f,o,$),i(o,n,$),r=!0},p(o,$){const u={};$&2&&(u.$$scope={dirty:$,ctx:o}),e.$set(u);const m={};$&2&&(m.$$scope={dirty:$,ctx:o}),f.$set(m)},i(o){r||(_(e.$$.fragment,o),_(f.$$.fragment,o),r=!0)},o(o){y(e.$$.fragment,o),y(f.$$.fragment,o),r=!1},d(o){o&&p(t),d(e,o),o&&p(s),d(f,o),o&&p(n)}}}function he(a){let t;return{c(){t=h("all of the props")},l(e){t=k(e,"all of the props")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function ke(a){let t,e,s,f;return e=new D({props:{$$slots:{default:[he]},$$scope:{ctx:a}}}),{c(){t=h('"$$props" gives an object with '),b(e.$$.fragment),s=h(" passed to the component.")},l(n){t=k(n,'"$$props" gives an object with '),g(e.$$.fragment,n),s=k(n," passed to the component.")},m(n,r){i(n,t,r),w(e,n,r),i(n,s,r),f=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){f||(_(e.$$.fragment,n),f=!0)},o(n){y(e.$$.fragment,n),f=!1},d(n){n&&p(t),d(e,n),n&&p(s)}}}function ve(a){let t;return{c(){t=h("not declared with export")},l(e){t=k(e,"not declared with export")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Be(a){let t,e,s,f;return e=new D({props:{$$slots:{default:[ve]},$$scope:{ctx:a}}}),{c(){t=h('"$$restProps" gives an object with the props that were '),b(e.$$.fragment),s=h(".")},l(n){t=k(n,'"$$restProps" gives an object with the props that were '),g(e.$$.fragment,n),s=k(n,".")},m(n,r){i(n,t,r),w(e,n,r),i(n,s,r),f=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){f||(_(e.$$.fragment,n),f=!0)},o(n){y(e.$$.fragment,n),f=!1},d(n){n&&p(t),d(e,n),n&&p(s)}}}function je(a){let t;return{c(){t=h("don't have to define everything")},l(e){t=k(e,"don't have to define everything")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Pe(a){let t,e,s,f;return e=new D({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),{c(){t=h("The benefit of $$props and $$restProps is that we "),b(e.$$.fragment),s=h(", we can simply pass all of the props along and work with them that way.")},l(n){t=k(n,"The benefit of $$props and $$restProps is that we "),g(e.$$.fragment,n),s=k(n,", we can simply pass all of the props along and work with them that way.")},m(n,r){i(n,t,r),w(e,n,r),i(n,s,r),f=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){f||(_(e.$$.fragment,n),f=!0)},o(n){y(e.$$.fragment,n),f=!1},d(n){n&&p(t),d(e,n),n&&p(s)}}}function Se(a){let t;return{c(){t=h("According to the documentation this ends up with less optimized code though and so it is not recommended and shouldn't be used unless it's necessary.")},l(e){t=k(e,"According to the documentation this ends up with less optimized code though and so it is not recommended and shouldn't be used unless it's necessary.")},m(e,s){i(e,t,s)},d(e){e&&p(t)}}}function Ae(a){let t,e,s,f,n,r,o,$,u,m,j,X,F,G,z,H,J,K,R,Z,O,x,W,Q,N,V,U,Y;return t=new S({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}}),s=new S({props:{$$slots:{default:[me]},$$scope:{ctx:a}}}),n=new tt({props:{name:[{name:"App",comp:kt,raw:Wt,text:""},{name:"Button",comp:kt,raw:Mt,text:""}]}}),o=new S({props:{$$slots:{default:[_e]},$$scope:{ctx:a}}}),u=new tt({props:{name:[{name:"App2",comp:Bt,raw:Ht,text:""},{name:"Button2",comp:Bt,raw:Kt,text:""}]}}),j=new S({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),F=new tt({props:{name:[{name:"App3",comp:Pt,raw:te,text:""},{name:"Button3",comp:Pt,raw:ee,text:""}]}}),z=new S({props:{$$slots:{default:[be]},$$scope:{ctx:a}}}),J=new S({props:{$$slots:{default:[de]},$$scope:{ctx:a}}}),R=new S({props:{$$slots:{default:[ke]},$$scope:{ctx:a}}}),O=new S({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),W=new tt({props:{name:[{name:"App4",comp:lt,raw:$e,text:"We added a Joke component that can get jokes from an API, in the fetch we're using the results of our $$restProps."},{name:"Button4",comp:lt,raw:pe,text:""},{name:"Joke",comp:lt,raw:ie,text:""}]}}),N=new S({props:{$$slots:{default:[Pe]},$$scope:{ctx:a}}}),U=new S({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment),e=v(),b(s.$$.fragment),f=v(),b(n.$$.fragment),r=v(),b(o.$$.fragment),$=v(),b(u.$$.fragment),m=v(),b(j.$$.fragment),X=v(),b(F.$$.fragment),G=v(),b(z.$$.fragment),H=v(),b(J.$$.fragment),K=v(),b(R.$$.fragment),Z=v(),b(O.$$.fragment),x=v(),b(W.$$.fragment),Q=v(),b(N.$$.fragment),V=v(),b(U.$$.fragment)},l(l){g(t.$$.fragment,l),e=B(l),g(s.$$.fragment,l),f=B(l),g(n.$$.fragment,l),r=B(l),g(o.$$.fragment,l),$=B(l),g(u.$$.fragment,l),m=B(l),g(j.$$.fragment,l),X=B(l),g(F.$$.fragment,l),G=B(l),g(z.$$.fragment,l),H=B(l),g(J.$$.fragment,l),K=B(l),g(R.$$.fragment,l),Z=B(l),g(O.$$.fragment,l),x=B(l),g(W.$$.fragment,l),Q=B(l),g(N.$$.fragment,l),V=B(l),g(U.$$.fragment,l)},m(l,c){w(t,l,c),i(l,e,c),w(s,l,c),i(l,f,c),w(n,l,c),i(l,r,c),w(o,l,c),i(l,$,c),w(u,l,c),i(l,m,c),w(j,l,c),i(l,X,c),w(F,l,c),i(l,G,c),w(z,l,c),i(l,H,c),w(J,l,c),i(l,K,c),w(R,l,c),i(l,Z,c),w(O,l,c),i(l,x,c),w(W,l,c),i(l,Q,c),w(N,l,c),i(l,V,c),w(U,l,c),Y=!0},p(l,c){const at={};c&2&&(at.$$scope={dirty:c,ctx:l}),t.$set(at);const ft={};c&2&&(ft.$$scope={dirty:c,ctx:l}),s.$set(ft);const ut={};c&2&&(ut.$$scope={dirty:c,ctx:l}),o.$set(ut);const $t={};c&2&&($t.$$scope={dirty:c,ctx:l}),j.$set($t);const pt={};c&2&&(pt.$$scope={dirty:c,ctx:l}),z.$set(pt);const it={};c&2&&(it.$$scope={dirty:c,ctx:l}),J.$set(it);const ct={};c&2&&(ct.$$scope={dirty:c,ctx:l}),R.$set(ct);const mt={};c&2&&(mt.$$scope={dirty:c,ctx:l}),O.$set(mt);const _t={};c&2&&(_t.$$scope={dirty:c,ctx:l}),N.$set(_t);const yt={};c&2&&(yt.$$scope={dirty:c,ctx:l}),U.$set(yt)},i(l){Y||(_(t.$$.fragment,l),_(s.$$.fragment,l),_(n.$$.fragment,l),_(o.$$.fragment,l),_(u.$$.fragment,l),_(j.$$.fragment,l),_(F.$$.fragment,l),_(z.$$.fragment,l),_(J.$$.fragment,l),_(R.$$.fragment,l),_(O.$$.fragment,l),_(W.$$.fragment,l),_(N.$$.fragment,l),_(U.$$.fragment,l),Y=!0)},o(l){y(t.$$.fragment,l),y(s.$$.fragment,l),y(n.$$.fragment,l),y(o.$$.fragment,l),y(u.$$.fragment,l),y(j.$$.fragment,l),y(F.$$.fragment,l),y(z.$$.fragment,l),y(J.$$.fragment,l),y(R.$$.fragment,l),y(O.$$.fragment,l),y(W.$$.fragment,l),y(N.$$.fragment,l),y(U.$$.fragment,l),Y=!1},d(l){d(t,l),l&&p(e),d(s,l),l&&p(f),d(n,l),l&&p(r),d(o,l),l&&p($),d(u,l),l&&p(m),d(j,l),l&&p(X),d(F,l),l&&p(G),d(z,l),l&&p(H),d(J,l),l&&p(K),d(R,l),l&&p(Z),d(O,l),l&&p(x),d(W,l),l&&p(Q),d(N,l),l&&p(V),d(U,l)}}}function Te(a){let t,e;const s=[a[0],Tt];let f={$$slots:{default:[Ae]},$$scope:{ctx:a}};for(let n=0;n<s.length;n+=1)f=E(f,s[n]);return t=new Ot({props:f}),{c(){b(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,r){w(t,n,r),e=!0},p(n,[r]){const o=r&1?Lt(s,[r&1&&dt(n[0]),r&0&&dt(Tt)]):{};r&2&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}const Tt={title:"$$props and $$restProps",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-24T00:00:00.000Z",layout:"notes"};function Le(a,t,e){return a.$$set=s=>{e(0,t=E(E({},t),M(s)))},t=M(t),[t]}class Ne extends A{constructor(t){super(),T(this,t,Le,Te,L,{})}}export{Ne as default,Tt as metadata};
