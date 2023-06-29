import{s as A,r as et,f as D,g as I,h as nt,d as p,j as P,i as c,w as st,x as rt,y as ot,a as v,c as B,l as h,m as k,C as X,ao as gt,E as bt,ap as tt,D as x,u as Lt,X as Jt,n as Rt,z as wt}from"./scheduler.a7cd560e.js";import{S as T,i as z,a as _,t as y,b as g,d as b,m as w,e as d}from"./index.396264e7.js";import{g as zt,a as dt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Ot,P as S}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Y}from"./ShowMany.db7be1f3.js";import{S as F}from"./Strong.097578ae.js";function Nt(l){let t,e,s;const u=l[2].default,n=et(u,l,l[1],null);return{c(){t=D("button"),n&&n.c(),this.h()},l(r){t=I(r,"BUTTON",{class:!0});var o=nt(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+l[0]+" svelte-aihy4j")},m(r,o){c(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&2)&&st(n,u,r,r[1],s?ot(u,r[1],o,null):rt(r[1]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e)},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function Ut(l,t,e){let{$$slots:s={},$$scope:u}=t,{type:n}=t;return l.$$set=r=>{"type"in r&&e(0,n=r.type),"$$scope"in r&&e(1,u=r.$$scope)},[n,u,s]}class ht extends T{constructor(t){super(),z(this,t,Ut,Nt,A,{type:0})}}function Xt(l){let t;return{c(){t=h("Primary button")},l(e){t=k(e,"Primary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Ct(l){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Et(l){let t,e,s,u;return t=new ht({props:{type:"primary",$$slots:{default:[Xt]},$$scope:{ctx:l}}}),s=new ht({props:{type:"secondary",$$slots:{default:[Ct]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),e=v(),g(s.$$.fragment)},l(n){b(t.$$.fragment,n),e=B(n),b(s.$$.fragment,n)},m(n,r){w(t,n,r),c(n,e,r),w(s,n,r),u=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){u||(_(t.$$.fragment,n),_(s.$$.fragment,n),u=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),u=!1},d(n){n&&p(e),d(t,n),d(s,n)}}}class kt extends T{constructor(t){super(),z(this,t,null,Et,A,{})}}const Wt=`<script>\r
	import Button from "./Button.svelte";\r
<\/script>\r
\r
<Button type="primary">Primary button</Button>\r
\r
<Button type="secondary">Secondary button</Button>\r
\r
<style>\r
</style>\r
`,xt=`<script>\r
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
`;function Ft(l){let t,e,s;const u=l[3].default,n=et(u,l,l[2],null);return{c(){t=D("button"),n&&n.c(),this.h()},l(r){t=I(r,"BUTTON",{class:!0,style:!0});var o=nt(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+l[0]+" svelte-aihy4j"),P(t,"style",l[1])},m(r,o){c(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&4)&&st(n,u,r,r[2],s?ot(u,r[2],o,null):rt(r[2]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e),(!s||o&2)&&P(t,"style",r[1])},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function Dt(l,t,e){let{$$slots:s={},$$scope:u}=t,{type:n}=t,{style:r}=t;return l.$$set=o=>{"type"in o&&e(0,n=o.type),"style"in o&&e(1,r=o.style),"$$scope"in o&&e(2,u=o.$$scope)},[n,r,u,s]}class vt extends T{constructor(t){super(),z(this,t,Dt,Ft,A,{type:0,style:1})}}function It(l){let t;return{c(){t=h("Primary button")},l(e){t=k(e,"Primary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Mt(l){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function qt(l){let t,e,s,u;return t=new vt({props:{type:"primary",style:"font-size: 24px;",$$slots:{default:[It]},$$scope:{ctx:l}}}),s=new vt({props:{type:"secondary",$$slots:{default:[Mt]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),e=v(),g(s.$$.fragment)},l(n){b(t.$$.fragment,n),e=B(n),b(s.$$.fragment,n)},m(n,r){w(t,n,r),c(n,e,r),w(s,n,r),u=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){u||(_(t.$$.fragment,n),_(s.$$.fragment,n),u=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),u=!1},d(n){n&&p(e),d(t,n),d(s,n)}}}class Bt extends T{constructor(t){super(),z(this,t,null,qt,A,{})}}const Zt=`<script>\r
	import Button2 from "./Button2.svelte";\r
<\/script>\r
\r
<Button2 type="primary" style="font-size: 24px;">Primary button</Button2>\r
\r
<Button2 type="secondary">Secondary button</Button2>\r
\r
<style>\r
</style>\r
`,Gt=`<script>\r
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
`;function Ht(l){let t,e,s;const u=l[4].default,n=et(u,l,l[3],null);return{c(){t=D("button"),n&&n.c(),this.h()},l(r){t=I(r,"BUTTON",{class:!0,style:!0,"aria-label":!0});var o=nt(t);n&&n.l(o),o.forEach(p),this.h()},h(){P(t,"class",e="btn-"+l[0]+" svelte-aihy4j"),P(t,"style",l[1]),P(t,"aria-label",l[2])},m(r,o){c(r,t,o),n&&n.m(t,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&8)&&st(n,u,r,r[3],s?ot(u,r[3],o,null):rt(r[3]),null),(!s||o&1&&e!==(e="btn-"+r[0]+" svelte-aihy4j"))&&P(t,"class",e),(!s||o&2)&&P(t,"style",r[1]),(!s||o&4)&&P(t,"aria-label",r[2])},i(r){s||(_(n,r),s=!0)},o(r){y(n,r),s=!1},d(r){r&&p(t),n&&n.d(r)}}}function Kt(l,t,e){let{$$slots:s={},$$scope:u}=t,{type:n}=t,{style:r}=t,{ariaLabel:o}=t;return l.$$set=$=>{"type"in $&&e(0,n=$.type),"style"in $&&e(1,r=$.style),"ariaLabel"in $&&e(2,o=$.ariaLabel),"$$scope"in $&&e(3,u=$.$$scope)},[n,r,o,u,s]}class jt extends T{constructor(t){super(),z(this,t,Kt,Ht,A,{type:0,style:1,ariaLabel:2})}}function Qt(l){let t;return{c(){t=h("X")},l(e){t=k(e,"X")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Vt(l){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Yt(l){let t,e,s,u;return t=new jt({props:{type:"primary",style:"font-size: 24px;",ariaLabel:"close",$$slots:{default:[Qt]},$$scope:{ctx:l}}}),s=new jt({props:{type:"secondary",$$slots:{default:[Vt]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),e=v(),g(s.$$.fragment)},l(n){b(t.$$.fragment,n),e=B(n),b(s.$$.fragment,n)},m(n,r){w(t,n,r),c(n,e,r),w(s,n,r),u=!0},p(n,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:n}),t.$set(o);const $={};r&1&&($.$$scope={dirty:r,ctx:n}),s.$set($)},i(n){u||(_(t.$$.fragment,n),_(s.$$.fragment,n),u=!0)},o(n){y(t.$$.fragment,n),y(s.$$.fragment,n),u=!1},d(n){n&&p(e),d(t,n),d(s,n)}}}class Pt extends T{constructor(t){super(),z(this,t,null,Yt,A,{})}}const te=`<script>\r
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
`;function ne(l){let t,e,s,u;const n=l[5].default,r=et(n,l,l[4],null);let o=[{style:e="color: skyblue; "+l[1]},l[2],{class:s="btn-"+l[0]+" "+l[3].class}],$={};for(let f=0;f<o.length;f+=1)$=X($,o[f]);return{c(){t=D("button"),r&&r.c(),this.h()},l(f){t=I(f,"BUTTON",{style:!0,class:!0});var m=nt(t);r&&r.l(m),m.forEach(p),this.h()},h(){gt(t,$),bt(t,"svelte-aihy4j",!0)},m(f,m){c(f,t,m),r&&r.m(t,null),t.autofocus&&t.focus(),u=!0},p(f,[m]){r&&r.p&&(!u||m&16)&&st(r,n,f,f[4],u?ot(n,f[4],m,null):rt(f[4]),null),gt(t,$=zt(o,[(!u||m&2&&e!==(e="color: skyblue; "+f[1]))&&{style:e},m&4&&f[2],(!u||m&9&&s!==(s="btn-"+f[0]+" "+f[3].class))&&{class:s}])),bt(t,"svelte-aihy4j",!0)},i(f){u||(_(r,f),u=!0)},o(f){y(r,f),u=!1},d(f){f&&p(t),r&&r.d(f)}}}function se(l,t,e){const s=["type","style"];let u=tt(t,s),{$$slots:n={},$$scope:r}=t,{type:o}=t,{style:$}=t;return l.$$set=f=>{e(3,t=X(X({},t),x(f))),e(2,u=tt(t,s)),"type"in f&&e(0,o=f.type),"style"in f&&e(1,$=f.style),"$$scope"in f&&e(4,r=f.$$scope)},t=x(t),[o,$,u,t,r,n]}class St extends T{constructor(t){super(),z(this,t,se,ne,A,{type:0,style:1})}}function re(l){let t,e,s,u="Load joke",n,r;return{c(){t=h(l[0]),e=v(),s=D("button"),s.textContent=u},l(o){t=k(o,l[0]),e=B(o),s=I(o,"BUTTON",{["data-svelte-h"]:!0}),Lt(s)!=="svelte-1wv9vgo"&&(s.textContent=u)},m(o,$){c(o,t,$),c(o,e,$),c(o,s,$),n||(r=Jt(s,"click",l[1]),n=!0)},p(o,[$]){$&1&&Rt(t,o[0])},i:wt,o:wt,d(o){o&&(p(t),p(e),p(s)),n=!1,r()}}}function oe(l,t,e){const s=["categories"];let u=tt(t,s),{categories:n="Any"}=t,r;async function o(){const $=new URLSearchParams;for(const j in u)$.append(j,u[j]);const m=await(await fetch(`https://v2.jokeapi.dev/joke/${n}?${$.toString()}`)).json();if(m.type==="twopart"){e(0,r=m.setup+m.delivery);return}e(0,r=m.joke)}return l.$$set=$=>{t=X(X({},t),x($)),e(3,u=tt(t,s)),"categories"in $&&e(2,n=$.categories)},[r,o,n]}class At extends T{constructor(t){super(),z(this,t,oe,re,A,{categories:2})}}function ae(l){let t;return{c(){t=h("X")},l(e){t=k(e,"X")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function le(l){let t;return{c(){t=h("Secondary button")},l(e){t=k(e,"Secondary button")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function ue(l){let t,e,s,u,n,r,o,$;return t=new At({props:{type:"twopart",category:"Programming",lang:"en",blacklistFlags:"nsfw,racist,sexist,explicit"}}),s=new At({props:{type:"single",category:"Dark",lang:"en",blacklistFlags:"nsfw,racist,sexist,explicit"}}),n=new St({props:{type:fe,style:"font-size: 24px;","aria-label":"close",class:"spu-t2wi13 a c",foo:"bar",$$slots:{default:[ae]},$$scope:{ctx:l}}}),o=new St({props:{type:"secondary",$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),e=v(),g(s.$$.fragment),u=v(),g(n.$$.fragment),r=v(),g(o.$$.fragment)},l(f){b(t.$$.fragment,f),e=B(f),b(s.$$.fragment,f),u=B(f),b(n.$$.fragment,f),r=B(f),b(o.$$.fragment,f)},m(f,m){w(t,f,m),c(f,e,m),w(s,f,m),c(f,u,m),w(n,f,m),c(f,r,m),w(o,f,m),$=!0},p(f,[m]){const j={};m&1&&(j.$$scope={dirty:m,ctx:f}),n.$set(j);const C={};m&1&&(C.$$scope={dirty:m,ctx:f}),o.$set(C)},i(f){$||(_(t.$$.fragment,f),_(s.$$.fragment,f),_(n.$$.fragment,f),_(o.$$.fragment,f),$=!0)},o(f){y(t.$$.fragment,f),y(s.$$.fragment,f),y(n.$$.fragment,f),y(o.$$.fragment,f),$=!1},d(f){f&&(p(e),p(u),p(r)),d(t,f),d(s,f),d(n,f),d(o,f)}}}let fe="primary";class at extends T{constructor(t){super(),z(this,t,null,ue,A,{})}}const $e=`<script>\r
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
`,ce=`<script>\r
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
`;function ie(l){let t;return{c(){t=h("This time we're finding out about $$props and $$restProps.")},l(e){t=k(e,"This time we're finding out about $$props and $$restProps.")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function me(l){let t;return{c(){t=h("We're making a button component as if we're making a component library.")},l(e){t=k(e,"We're making a button component as if we're making a component library.")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function _e(l){let t;return{c(){t=h("Now a user tells us that they want a new feature, to be able to customize the style of the button. We say okay and start implementing this:")},l(e){t=k(e,"Now a user tells us that they want a new feature, to be able to customize the style of the button. We say okay and start implementing this:")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function ye(l){let t;return{c(){t=h("Phew! Oh wait, now they want a new feature, to add an aria-label.")},l(e){t=k(e,"Phew! Oh wait, now they want a new feature, to add an aria-label.")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function ge(l){let t;return{c(){t=h("Okay this isn't great, every time we're asked for a new feature we have to edit our component to support it. Is there a better way?")},l(e){t=k(e,"Okay this isn't great, every time we're asked for a new feature we have to edit our component to support it. Is there a better way?")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function be(l){let t;return{c(){t=h("$$props")},l(e){t=k(e,"$$props")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function we(l){let t;return{c(){t=h("$$restProps")},l(e){t=k(e,"$$restProps")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function de(l){let t,e,s,u,n,r;return e=new F({props:{$$slots:{default:[be]},$$scope:{ctx:l}}}),u=new F({props:{$$slots:{default:[we]},$$scope:{ctx:l}}}),{c(){t=h("This is why we have "),g(e.$$.fragment),s=h(" and "),g(u.$$.fragment),n=h(".")},l(o){t=k(o,"This is why we have "),b(e.$$.fragment,o),s=k(o," and "),b(u.$$.fragment,o),n=k(o,".")},m(o,$){c(o,t,$),w(e,o,$),c(o,s,$),w(u,o,$),c(o,n,$),r=!0},p(o,$){const f={};$&2&&(f.$$scope={dirty:$,ctx:o}),e.$set(f);const m={};$&2&&(m.$$scope={dirty:$,ctx:o}),u.$set(m)},i(o){r||(_(e.$$.fragment,o),_(u.$$.fragment,o),r=!0)},o(o){y(e.$$.fragment,o),y(u.$$.fragment,o),r=!1},d(o){o&&(p(t),p(s),p(n)),d(e,o),d(u,o)}}}function he(l){let t;return{c(){t=h("all of the props")},l(e){t=k(e,"all of the props")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function ke(l){let t,e,s,u;return e=new F({props:{$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){t=h('"$$props" gives an object with '),g(e.$$.fragment),s=h(" passed to the component.")},l(n){t=k(n,'"$$props" gives an object with '),b(e.$$.fragment,n),s=k(n," passed to the component.")},m(n,r){c(n,t,r),w(e,n,r),c(n,s,r),u=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){u||(_(e.$$.fragment,n),u=!0)},o(n){y(e.$$.fragment,n),u=!1},d(n){n&&(p(t),p(s)),d(e,n)}}}function ve(l){let t;return{c(){t=h("not declared with export")},l(e){t=k(e,"not declared with export")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Be(l){let t,e,s,u;return e=new F({props:{$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){t=h('"$$restProps" gives an object with the props that were '),g(e.$$.fragment),s=h(".")},l(n){t=k(n,'"$$restProps" gives an object with the props that were '),b(e.$$.fragment,n),s=k(n,".")},m(n,r){c(n,t,r),w(e,n,r),c(n,s,r),u=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){u||(_(e.$$.fragment,n),u=!0)},o(n){y(e.$$.fragment,n),u=!1},d(n){n&&(p(t),p(s)),d(e,n)}}}function je(l){let t;return{c(){t=h("don't have to define everything")},l(e){t=k(e,"don't have to define everything")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Pe(l){let t,e,s,u;return e=new F({props:{$$slots:{default:[je]},$$scope:{ctx:l}}}),{c(){t=h("The benefit of $$props and $$restProps is that we "),g(e.$$.fragment),s=h(", we can simply pass all of the props along and work with them that way.")},l(n){t=k(n,"The benefit of $$props and $$restProps is that we "),b(e.$$.fragment,n),s=k(n,", we can simply pass all of the props along and work with them that way.")},m(n,r){c(n,t,r),w(e,n,r),c(n,s,r),u=!0},p(n,r){const o={};r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){u||(_(e.$$.fragment,n),u=!0)},o(n){y(e.$$.fragment,n),u=!1},d(n){n&&(p(t),p(s)),d(e,n)}}}function Se(l){let t;return{c(){t=h("According to the documentation this ends up with less optimized code though and so it is not recommended and shouldn't be used unless it's necessary.")},l(e){t=k(e,"According to the documentation this ends up with less optimized code though and so it is not recommended and shouldn't be used unless it's necessary.")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function Ae(l){let t,e,s,u,n,r,o,$,f,m,j,C,E,M,L,q,J,Z,R,G,O,H,W,K,N,Q,U,V;return t=new S({props:{$$slots:{default:[ie]},$$scope:{ctx:l}}}),s=new S({props:{$$slots:{default:[me]},$$scope:{ctx:l}}}),n=new Y({props:{name:[{name:"App",comp:kt,raw:Wt,text:""},{name:"Button",comp:kt,raw:xt,text:""}]}}),o=new S({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),f=new Y({props:{name:[{name:"App2",comp:Bt,raw:Zt,text:""},{name:"Button2",comp:Bt,raw:Gt,text:""}]}}),j=new S({props:{$$slots:{default:[ye]},$$scope:{ctx:l}}}),E=new Y({props:{name:[{name:"App3",comp:Pt,raw:te,text:""},{name:"Button3",comp:Pt,raw:ee,text:""}]}}),L=new S({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),J=new S({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),R=new S({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),O=new S({props:{$$slots:{default:[Be]},$$scope:{ctx:l}}}),W=new Y({props:{name:[{name:"App4",comp:at,raw:$e,text:"We added a Joke component that can get jokes from an API, in the fetch we're using the results of our $$restProps."},{name:"Button4",comp:at,raw:pe,text:""},{name:"Joke",comp:at,raw:ce,text:""}]}}),N=new S({props:{$$slots:{default:[Pe]},$$scope:{ctx:l}}}),U=new S({props:{$$slots:{default:[Se]},$$scope:{ctx:l}}}),{c(){g(t.$$.fragment),e=v(),g(s.$$.fragment),u=v(),g(n.$$.fragment),r=v(),g(o.$$.fragment),$=v(),g(f.$$.fragment),m=v(),g(j.$$.fragment),C=v(),g(E.$$.fragment),M=v(),g(L.$$.fragment),q=v(),g(J.$$.fragment),Z=v(),g(R.$$.fragment),G=v(),g(O.$$.fragment),H=v(),g(W.$$.fragment),K=v(),g(N.$$.fragment),Q=v(),g(U.$$.fragment)},l(a){b(t.$$.fragment,a),e=B(a),b(s.$$.fragment,a),u=B(a),b(n.$$.fragment,a),r=B(a),b(o.$$.fragment,a),$=B(a),b(f.$$.fragment,a),m=B(a),b(j.$$.fragment,a),C=B(a),b(E.$$.fragment,a),M=B(a),b(L.$$.fragment,a),q=B(a),b(J.$$.fragment,a),Z=B(a),b(R.$$.fragment,a),G=B(a),b(O.$$.fragment,a),H=B(a),b(W.$$.fragment,a),K=B(a),b(N.$$.fragment,a),Q=B(a),b(U.$$.fragment,a)},m(a,i){w(t,a,i),c(a,e,i),w(s,a,i),c(a,u,i),w(n,a,i),c(a,r,i),w(o,a,i),c(a,$,i),w(f,a,i),c(a,m,i),w(j,a,i),c(a,C,i),w(E,a,i),c(a,M,i),w(L,a,i),c(a,q,i),w(J,a,i),c(a,Z,i),w(R,a,i),c(a,G,i),w(O,a,i),c(a,H,i),w(W,a,i),c(a,K,i),w(N,a,i),c(a,Q,i),w(U,a,i),V=!0},p(a,i){const lt={};i&2&&(lt.$$scope={dirty:i,ctx:a}),t.$set(lt);const ut={};i&2&&(ut.$$scope={dirty:i,ctx:a}),s.$set(ut);const ft={};i&2&&(ft.$$scope={dirty:i,ctx:a}),o.$set(ft);const $t={};i&2&&($t.$$scope={dirty:i,ctx:a}),j.$set($t);const pt={};i&2&&(pt.$$scope={dirty:i,ctx:a}),L.$set(pt);const ct={};i&2&&(ct.$$scope={dirty:i,ctx:a}),J.$set(ct);const it={};i&2&&(it.$$scope={dirty:i,ctx:a}),R.$set(it);const mt={};i&2&&(mt.$$scope={dirty:i,ctx:a}),O.$set(mt);const _t={};i&2&&(_t.$$scope={dirty:i,ctx:a}),N.$set(_t);const yt={};i&2&&(yt.$$scope={dirty:i,ctx:a}),U.$set(yt)},i(a){V||(_(t.$$.fragment,a),_(s.$$.fragment,a),_(n.$$.fragment,a),_(o.$$.fragment,a),_(f.$$.fragment,a),_(j.$$.fragment,a),_(E.$$.fragment,a),_(L.$$.fragment,a),_(J.$$.fragment,a),_(R.$$.fragment,a),_(O.$$.fragment,a),_(W.$$.fragment,a),_(N.$$.fragment,a),_(U.$$.fragment,a),V=!0)},o(a){y(t.$$.fragment,a),y(s.$$.fragment,a),y(n.$$.fragment,a),y(o.$$.fragment,a),y(f.$$.fragment,a),y(j.$$.fragment,a),y(E.$$.fragment,a),y(L.$$.fragment,a),y(J.$$.fragment,a),y(R.$$.fragment,a),y(O.$$.fragment,a),y(W.$$.fragment,a),y(N.$$.fragment,a),y(U.$$.fragment,a),V=!1},d(a){a&&(p(e),p(u),p(r),p($),p(m),p(C),p(M),p(q),p(Z),p(G),p(H),p(K),p(Q)),d(t,a),d(s,a),d(n,a),d(o,a),d(f,a),d(j,a),d(E,a),d(L,a),d(J,a),d(R,a),d(O,a),d(W,a),d(N,a),d(U,a)}}}function Te(l){let t,e;const s=[l[0],Tt];let u={$$slots:{default:[Ae]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)u=X(u,s[n]);return t=new Ot({props:u}),{c(){g(t.$$.fragment)},l(n){b(t.$$.fragment,n)},m(n,r){w(t,n,r),e=!0},p(n,[r]){const o=r&1?zt(s,[r&1&&dt(n[0]),r&0&&dt(Tt)]):{};r&2&&(o.$$scope={dirty:r,ctx:n}),t.$set(o)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}const Tt={title:"$$props and $$restProps",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-24T00:00:00.000Z",layout:"notes"};function ze(l,t,e){return l.$$set=s=>{e(0,t=X(X({},t),x(s)))},t=x(t),[t]}class Xe extends T{constructor(t){super(),z(this,t,ze,Te,A,{})}}export{Xe as default,Tt as metadata};
