import{s as T,f as v,l as E,a as y,e as D,g as $,h as I,d as h,m as j,c as C,j as k,J as X,i as d,af as P,X as Z,n as M,z as S,B as K,a8 as Q,v as F,ag as U,a3 as A,u as O,C as V,D as Y}from"./scheduler.a7cd560e.js";import{S as N,i as H,b as q,d as G,m as L,a as z,t as J,e as W}from"./index.396264e7.js";import{g as he,a as x}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as pe,P as ee}from"./mdsvex-layout-notes.4b2b7ac6.js";import{e as R}from"./each.32d06572.js";import{h as te,u as de}from"./await_block.4c3fba22.js";import"./index.928acef2.js";/* empty css                                               */import{S as me}from"./ShowMany.db7be1f3.js";function re(l,e,n){const t=l.slice();return t[6]=e[n],t}function ne(l){let e,n=l[6]+"",t;return{c(){e=v("option"),t=E(n),this.h()},l(s){e=$(s,"OPTION",{});var o=I(e);t=j(o,n),o.forEach(h),this.h()},h(){e.__value=l[6],Q(e,e.__value)},m(s,o){d(s,e,o),F(e,t)},p:S,d(s){s&&h(e)}}}function _e(l){let e,n;return{c(){e=v("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,alt:!0}),this.h()},h(){A(e.src,n=l[1])||k(e,"src",n),k(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!A(e.src,n=t[1])&&k(e,"src",n)},d(t){t&&h(e)}}}function ge(l){let e,n="oops! error!";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-22kwax"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function be(l){let e,n,t,s,o,p,c,_,w,m=R(l[3]),f=[];for(let r=0;r<m.length;r+=1)f[r]=ne(re(l,m,r));function g(r,a){return r[2]?ge:_e}let b=g(l),u=b(l);return{c(){e=v("select");for(let r=0;r<f.length;r+=1)f[r].c();n=E(`\r
\r
Selected breed: `),t=E(l[0]),s=y(),o=v("hr"),p=y(),u.c(),c=D(),this.h()},l(r){e=$(r,"SELECT",{name:!0,id:!0});var a=I(e);for(let i=0;i<f.length;i+=1)f[i].l(a);a.forEach(h),n=j(r,`\r
\r
Selected breed: `),t=j(r,l[0]),s=C(r),o=$(r,"HR",{"w-full":!0}),p=C(r),u.l(r),c=D(),this.h()},h(){k(e,"name",""),k(e,"id",""),l[0]===void 0&&X(()=>l[4].call(e)),k(o,"w-full","")},m(r,a){d(r,e,a);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(e,null);P(e,l[0],!0),d(r,n,a),d(r,t,a),d(r,s,a),d(r,o,a),d(r,p,a),u.m(r,a),d(r,c,a),_||(w=Z(e,"change",l[4]),_=!0)},p(r,[a]){if(a&8){m=R(r[3]);let i;for(i=0;i<m.length;i+=1){const B=re(r,m,i);f[i]?f[i].p(B,a):(f[i]=ne(B),f[i].c(),f[i].m(e,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=m.length}a&9&&P(e,r[0]),a&1&&M(t,r[0]),b===(b=g(r))&&u?u.p(r,a):(u.d(1),u=b(r),u&&(u.c(),u.m(c.parentNode,c)))},i:S,o:S,d(r){r&&(h(e),h(n),h(t),h(s),h(o),h(p),h(c)),K(f,r),u.d(r),_=!1,w()}}}function ke(l,e,n){let t;const s=["affenpinscher","african","airedale"];let o,p=!1;function c(w){n(2,p=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${w}/images/random`).then(m=>m.json()).then(m=>n(1,o=m.message)).catch(m=>n(2,p=!0))}function _(){t=U(this),n(0,t),n(3,s)}return l.$$.update=()=>{l.$$.dirty&1&&c(t)},[t,o,p,s,_]}class ve extends N{constructor(e){super(),H(this,e,ke,be,T,{})}}const $e=`<script>\r
	let selectedBreed;\r
	const breeds = ["affenpinscher", "african", "airedale"];\r
\r
	let imgSrc;\r
	let hasError = false;\r
\r
	$: fetchDogImage(selectedBreed);\r
\r
	function fetchDogImage(breed) {\r
		hasError = false;\r
		imgSrc = null;\r
		fetch(\`https://dog.ceo/api/breed/\${breed}/images/random\`)\r
			.then((response) => response.json())\r
			.then((obj) => (imgSrc = obj.message))\r
			.catch((error) => (hasError = true));\r
	}\r
<\/script>\r
\r
<select name="" bind:value={selectedBreed} id="">\r
	{#each breeds as breed}\r
		<option value={breed}>{breed}</option>\r
	{/each}\r
</select>\r
\r
Selected breed: {selectedBreed}\r
\r
<hr w-full />\r
\r
{#if hasError}\r
	<p>oops! error!</p>\r
{:else}\r
	<img src={imgSrc} alt="dog" />\r
{/if}\r
`;function le(l,e,n){const t=l.slice();return t[7]=e[n],t}function se(l){let e,n=l[7]+"",t;return{c(){e=v("option"),t=E(n),this.h()},l(s){e=$(s,"OPTION",{});var o=I(e);t=j(o,n),o.forEach(h),this.h()},h(){e.__value=l[7],Q(e,e.__value)},m(s,o){d(s,e,o),F(e,t)},p:S,d(s){s&&h(e)}}}function we(l){let e,n;return{c(){e=v("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,alt:!0}),this.h()},h(){A(e.src,n=l[1])||k(e,"src",n),k(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!A(e.src,n=t[1])&&k(e,"src",n)},d(t){t&&h(e)}}}function Se(l){let e,n="loading...";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-qeejp2"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function Ee(l){let e,n="oops! error!";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-22kwax"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function je(l){let e,n,t,s,o,p,c,_,w,m=R(l[4]),f=[];for(let r=0;r<m.length;r+=1)f[r]=se(le(l,m,r));function g(r,a){return r[3]?Ee:r[2]?Se:we}let b=g(l),u=b(l);return{c(){e=v("select");for(let r=0;r<f.length;r+=1)f[r].c();n=E(`\r
\r
Selected breed: `),t=E(l[0]),s=y(),o=v("hr"),p=y(),u.c(),c=D(),this.h()},l(r){e=$(r,"SELECT",{name:!0,id:!0});var a=I(e);for(let i=0;i<f.length;i+=1)f[i].l(a);a.forEach(h),n=j(r,`\r
\r
Selected breed: `),t=j(r,l[0]),s=C(r),o=$(r,"HR",{"w-full":!0}),p=C(r),u.l(r),c=D(),this.h()},h(){k(e,"name",""),k(e,"id",""),l[0]===void 0&&X(()=>l[5].call(e)),k(o,"w-full","")},m(r,a){d(r,e,a);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(e,null);P(e,l[0],!0),d(r,n,a),d(r,t,a),d(r,s,a),d(r,o,a),d(r,p,a),u.m(r,a),d(r,c,a),_||(w=Z(e,"change",l[5]),_=!0)},p(r,[a]){if(a&16){m=R(r[4]);let i;for(i=0;i<m.length;i+=1){const B=le(r,m,i);f[i]?f[i].p(B,a):(f[i]=se(B),f[i].c(),f[i].m(e,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=m.length}a&17&&P(e,r[0]),a&1&&M(t,r[0]),b===(b=g(r))&&u?u.p(r,a):(u.d(1),u=b(r),u&&(u.c(),u.m(c.parentNode,c)))},i:S,o:S,d(r){r&&(h(e),h(n),h(t),h(s),h(o),h(p),h(c)),K(f,r),u.d(r),_=!1,w()}}}function ye(l,e,n){let t;const s=["affenpinscher","african","airedale"];let o,p=!1,c=!1;function _(m){n(2,p=!0),n(3,c=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${m}/images/random`).then(f=>f.json()).then(f=>n(1,o=f.message)).catch(f=>n(3,c=!0)).finally(()=>n(2,p=!1))}function w(){t=U(this),n(0,t),n(4,s)}return l.$$.update=()=>{l.$$.dirty&1&&_(t)},[t,o,p,c,s,w]}class Ce extends N{constructor(e){super(),H(this,e,ye,je,T,{})}}const Ie=`<script>\r
	let selectedBreed;\r
	const breeds = ["affenpinscher", "african", "airedale"];\r
\r
	let imgSrc;\r
	let isFetching = false;\r
	let hasError = false;\r
\r
	$: fetchDogImage(selectedBreed);\r
\r
	function fetchDogImage(breed) {\r
		isFetching = true;\r
		hasError = false;\r
		imgSrc = null;\r
		fetch(\`https://dog.ceo/api/breed/\${breed}/images/random\`)\r
			.then((response) => response.json())\r
			.then((obj) => (imgSrc = obj.message))\r
			.catch((error) => (hasError = true))\r
			.finally(() => (isFetching = false));\r
	}\r
<\/script>\r
\r
<select name="" bind:value={selectedBreed} id="">\r
	{#each breeds as breed}\r
		<option value={breed}>{breed}</option>\r
	{/each}\r
</select>\r
\r
Selected breed: {selectedBreed}\r
\r
<hr w-full />\r
\r
{#if hasError}\r
	<p>oops! error!</p>\r
{:else if isFetching}\r
	<p>loading...</p>\r
{:else}\r
	<img src={imgSrc} alt="dog" />\r
{/if}\r
`;function oe(l,e,n){const t=l.slice();return t[7]=e[n],t}function ae(l){let e,n=l[7]+"",t;return{c(){e=v("option"),t=E(n),this.h()},l(s){e=$(s,"OPTION",{});var o=I(e);t=j(o,n),o.forEach(h),this.h()},h(){e.__value=l[7],Q(e,e.__value)},m(s,o){d(s,e,o),F(e,t)},p:S,d(s){s&&h(e)}}}function Be(l){let e,n;return{c(){e=v("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,alt:!0}),this.h()},h(){A(e.src,n=l[1])||k(e,"src",n),k(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!A(e.src,n=t[1])&&k(e,"src",n)},d(t){t&&h(e)}}}function De(l){let e,n="loading...";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-qeejp2"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function Pe(l){let e,n="oops! error!";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-22kwax"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function Ae(l){let e,n,t,s,o,p,c,_,w,m=R(l[4]),f=[];for(let r=0;r<m.length;r+=1)f[r]=ae(oe(l,m,r));function g(r,a){return r[3]?Pe:r[2]?De:Be}let b=g(l),u=b(l);return{c(){e=v("select");for(let r=0;r<f.length;r+=1)f[r].c();n=E(`\r
\r
Selected breed: `),t=E(l[0]),s=y(),o=v("hr"),p=y(),u.c(),c=D(),this.h()},l(r){e=$(r,"SELECT",{name:!0,id:!0});var a=I(e);for(let i=0;i<f.length;i+=1)f[i].l(a);a.forEach(h),n=j(r,`\r
\r
Selected breed: `),t=j(r,l[0]),s=C(r),o=$(r,"HR",{"w-full":!0}),p=C(r),u.l(r),c=D(),this.h()},h(){k(e,"name",""),k(e,"id",""),l[0]===void 0&&X(()=>l[5].call(e)),k(o,"w-full","")},m(r,a){d(r,e,a);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(e,null);P(e,l[0],!0),d(r,n,a),d(r,t,a),d(r,s,a),d(r,o,a),d(r,p,a),u.m(r,a),d(r,c,a),_||(w=Z(e,"change",l[5]),_=!0)},p(r,[a]){if(a&16){m=R(r[4]);let i;for(i=0;i<m.length;i+=1){const B=oe(r,m,i);f[i]?f[i].p(B,a):(f[i]=ae(B),f[i].c(),f[i].m(e,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=m.length}a&17&&P(e,r[0]),a&1&&M(t,r[0]),b===(b=g(r))&&u?u.p(r,a):(u.d(1),u=b(r),u&&(u.c(),u.m(c.parentNode,c)))},i:S,o:S,d(r){r&&(h(e),h(n),h(t),h(s),h(o),h(p),h(c)),K(f,r),u.d(r),_=!1,w()}}}function Re(l,e,n){let t;const s=["affenpinscher","african","airedale"];let o,p=!1,c=!1;async function _(m){try{n(2,p=!0),n(3,c=!1),n(1,o=null);const g=await(await fetch(`https://dog.ceo/api/breed/${m}/images/random`)).json();n(1,o=g.message)}catch{n(3,c=!0)}finally{n(2,p=!1)}}function w(){t=U(this),n(0,t),n(4,s)}return l.$$.update=()=>{l.$$.dirty&1&&_(t)},[t,o,p,c,s,w]}class Fe extends N{constructor(e){super(),H(this,e,Re,Ae,T,{})}}const Oe=`<script>\r
	let selectedBreed;\r
	const breeds = ["affenpinscher", "african", "airedale"];\r
\r
	let imgSrc;\r
	let isFetching = false;\r
	let hasError = false;\r
\r
	$: fetchDogImage(selectedBreed);\r
\r
	async function fetchDogImage(breed) {\r
		try {\r
			isFetching = true;\r
			hasError = false;\r
			imgSrc = null;\r
			const response = await fetch(\`https://dog.ceo/api/breed/\${breed}/images/random\`);\r
			const obj = await response.json();\r
			imgSrc = obj.message;\r
		} catch (error) {\r
			hasError = true;\r
		} finally {\r
			isFetching = false;\r
		}\r
	}\r
<\/script>\r
\r
<select name="" bind:value={selectedBreed} id="">\r
	{#each breeds as breed}\r
		<option value={breed}>{breed}</option>\r
	{/each}\r
</select>\r
\r
Selected breed: {selectedBreed}\r
\r
<hr w-full />\r
\r
{#if hasError}\r
	<p>oops! error!</p>\r
{:else if isFetching}\r
	<p>loading...</p>\r
{:else}\r
	<img src={imgSrc} alt="dog" />\r
{/if}\r
`;function ce(l,e,n){const t=l.slice();return t[5]=e[n],t}function ie(l){let e,n=l[5]+"",t;return{c(){e=v("option"),t=E(n),this.h()},l(s){e=$(s,"OPTION",{});var o=I(e);t=j(o,n),o.forEach(h),this.h()},h(){e.__value=l[5],Q(e,e.__value)},m(s,o){d(s,e,o),F(e,t)},p:S,d(s){s&&h(e)}}}function Te(l){let e,n,t=l[4]+"",s;return{c(){e=v("p"),n=E("oops! error! "),s=E(t)},l(o){e=$(o,"P",{});var p=I(e);n=j(p,"oops! error! "),s=j(p,t),p.forEach(h)},m(o,p){d(o,e,p),F(e,n),F(e,s)},p(o,p){p&1&&t!==(t=o[4]+"")&&M(s,t)},d(o){o&&h(e)}}}function Me(l){let e,n;return{c(){e=v("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,alt:!0}),this.h()},h(){A(e.src,n=l[3].message)||k(e,"src",n),k(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&3&&!A(e.src,n=t[3].message)&&k(e,"src",n)},d(t){t&&h(e)}}}function Ne(l){let e,n="loading...";return{c(){e=v("p"),e.textContent=n},l(t){e=$(t,"P",{["data-svelte-h"]:!0}),O(e)!=="svelte-qeejp2"&&(e.textContent=n)},m(t,s){d(t,e,s)},p:S,d(t){t&&h(e)}}}function He(l){let e,n,t,s,o,p,c,_,w,m,f=R(l[1]),g=[];for(let u=0;u<f.length;u+=1)g[u]=ie(ce(l,f,u));let b={ctx:l,current:null,token:null,hasCatch:!0,pending:Ne,then:Me,catch:Te,value:3,error:4};return te(_=fe(l[0]),b),{c(){e=v("select");for(let u=0;u<g.length;u+=1)g[u].c();n=E(`\r
\r
Selected breed: `),t=E(l[0]),s=y(),o=v("hr"),p=y(),c=D(),b.block.c(),this.h()},l(u){e=$(u,"SELECT",{name:!0,id:!0});var r=I(e);for(let a=0;a<g.length;a+=1)g[a].l(r);r.forEach(h),n=j(u,`\r
\r
Selected breed: `),t=j(u,l[0]),s=C(u),o=$(u,"HR",{"w-full":!0}),p=C(u),c=D(),b.block.l(u),this.h()},h(){k(e,"name",""),k(e,"id",""),l[0]===void 0&&X(()=>l[2].call(e)),k(o,"w-full","")},m(u,r){d(u,e,r);for(let a=0;a<g.length;a+=1)g[a]&&g[a].m(e,null);P(e,l[0],!0),d(u,n,r),d(u,t,r),d(u,s,r),d(u,o,r),d(u,p,r),d(u,c,r),b.block.m(u,b.anchor=r),b.mount=()=>c.parentNode,b.anchor=c,w||(m=Z(e,"change",l[2]),w=!0)},p(u,[r]){if(l=u,r&2){f=R(l[1]);let a;for(a=0;a<f.length;a+=1){const i=ce(l,f,a);g[a]?g[a].p(i,r):(g[a]=ie(i),g[a].c(),g[a].m(e,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=f.length}r&3&&P(e,l[0]),r&1&&M(t,l[0]),b.ctx=l,r&1&&_!==(_=fe(l[0]))&&te(_,b)||de(b,l,r)},i:S,o:S,d(u){u&&(h(e),h(n),h(t),h(s),h(o),h(p),h(c)),K(g,u),b.block.d(u),b.token=null,b=null,w=!1,m()}}}async function fe(l){return await(await fetch(`https://dog.ceo/api/breed/${l}/images/random`)).json()}function qe(l,e,n){let t;const s=["affenpinscher","african","airedale"];function o(){t=U(this),n(0,t),n(1,s)}return[t,s,o]}class Ge extends N{constructor(e){super(),H(this,e,qe,He,T,{})}}const Le=`<script>\r
	let selectedBreed;\r
	const breeds = ["affenpinscher", "african", "airedale"];\r
\r
	async function getRandomDogImage(breed) {\r
		const response = await fetch(\`https://dog.ceo/api/breed/\${breed}/images/random\`);\r
		const obj = await response.json();\r
		return obj;\r
	}\r
<\/script>\r
\r
<select name="" bind:value={selectedBreed} id="">\r
	{#each breeds as breed}\r
		<option value={breed}>{breed}</option>\r
	{/each}\r
</select>\r
\r
Selected breed: {selectedBreed}\r
\r
<hr w-full />\r
\r
{#await getRandomDogImage(selectedBreed)}\r
	<p>loading...</p>\r
{:then obj}\r
	<img src={obj.message} alt="dog" />\r
{:catch error}\r
	<p>oops! error! {error}</p>\r
{/await}\r
`;function ze(l){let e;return{c(){e=E("Here we have a component that fetches the selected dog breed as an image using Dog API.")},l(n){e=j(n,"Here we have a component that fetches the selected dog breed as an image using Dog API.")},m(n,t){d(n,e,t)},d(n){n&&h(e)}}}function Je(l){let e;return{c(){e=E("One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},l(n){e=j(n,"One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},m(n,t){d(n,e,t)},d(n){n&&h(e)}}}function We(l){let e,n,t,s,o,p;return e=new ee({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),t=new me({props:{name:[{name:"App",comp:ve,raw:$e,text:"Right now it's a bit wonky because every time you change the dog breed you get a <b>missing image icon</b> while the image is loading."},{name:"App2",comp:Ce,raw:Ie,text:"We could try to use another if statement to display a loading text:"},{name:"App3",comp:Fe,raw:Oe,text:"Maybe an async await version:"},{name:"App4",comp:Ge,raw:Le,text:"That works but there is an even better way to do this, we can use the <b>{#await} block</b>."}]}}),o=new ee({props:{$$slots:{default:[Je]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment),n=y(),q(t.$$.fragment),s=y(),q(o.$$.fragment)},l(c){G(e.$$.fragment,c),n=C(c),G(t.$$.fragment,c),s=C(c),G(o.$$.fragment,c)},m(c,_){L(e,c,_),d(c,n,_),L(t,c,_),d(c,s,_),L(o,c,_),p=!0},p(c,_){const w={};_&2&&(w.$$scope={dirty:_,ctx:c}),e.$set(w);const m={};_&2&&(m.$$scope={dirty:_,ctx:c}),o.$set(m)},i(c){p||(z(e.$$.fragment,c),z(t.$$.fragment,c),z(o.$$.fragment,c),p=!0)},o(c){J(e.$$.fragment,c),J(t.$$.fragment,c),J(o.$$.fragment,c),p=!1},d(c){c&&(h(n),h(s)),W(e,c),W(t,c),W(o,c)}}}function Xe(l){let e,n;const t=[l[0],ue];let s={$$slots:{default:[We]},$$scope:{ctx:l}};for(let o=0;o<t.length;o+=1)s=V(s,t[o]);return e=new pe({props:s}),{c(){q(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,p){L(e,o,p),n=!0},p(o,[p]){const c=p&1?he(t,[p&1&&x(o[0]),p&0&&x(ue)]):{};p&2&&(c.$$scope={dirty:p,ctx:o}),e.$set(c)},i(o){n||(z(e.$$.fragment,o),n=!0)},o(o){J(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}const ue={title:"{#await}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function Ze(l,e,n){return l.$$set=t=>{n(0,e=V(V({},e),Y(t)))},e=Y(e),[e]}class nt extends N{constructor(e){super(),H(this,e,Ze,Xe,T,{})}}export{nt as default,ue as metadata};
