import{S as O,i as T,s as M,k,q as v,a as B,e as D,l as w,m as j,h as p,r as E,c as P,n as $,ad as J,b as d,al as R,P as K,u as N,H as y,N as W,D as I,am as X,X as F,af as Q,ag as ce,J as Z,y as H,z as C,A as L,K as fe,L as U,g as G,d as q,B as z,M as V}from"./index.37298988.js";import{M as ue,P as Y}from"./mdsvex-layout-notes.28d092d4.js";import"./index.8a23e261.js";/* empty css                                               */import{S as pe}from"./ShowMany.1ce9c697.js";function x(s,e,n){const t=s.slice();return t[6]=e[n],t}function ee(s){let e,n=s[6]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[6],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function he(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!F(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function de(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function me(s){let e,n,t,l,o,h,c,_,S,m=s[3],u=[];for(let r=0;r<m.length;r+=1)u[r]=ee(x(s,m,r));function g(r,a){return r[2]?de:he}let b=g(s),i=b(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),i.c(),c=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),i.l(r),c=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&J(()=>s[4].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(e,null);R(e,s[0],!0),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),i.m(r,a),d(r,c,a),_||(S=K(e,"change",s[4]),_=!0)},p(r,[a]){if(a&8){m=r[3];let f;for(f=0;f<m.length;f+=1){const A=x(r,m,f);u[f]?u[f].p(A,a):(u[f]=ee(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&9&&R(e,r[0]),a&1&&N(t,r[0]),b===(b=g(r))&&i?i.p(r,a):(i.d(1),i=b(r),i&&(i.c(),i.m(c.parentNode,c)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),i.d(r),r&&p(c),_=!1,S()}}}function _e(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1;function c(S){n(2,h=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${S}/images/random`).then(m=>m.json()).then(m=>n(1,o=m.message)).catch(m=>n(2,h=!0))}function _(){t=X(this),n(0,t),n(3,l)}return s.$$.update=()=>{s.$$.dirty&1&&c(t)},[t,o,h,l,_]}class ge extends O{constructor(e){super(),T(this,e,_e,me,M,{})}}const be=`<script>\r
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
`;function te(s,e,n){const t=s.slice();return t[7]=e[n],t}function re(s){let e,n=s[7]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function $e(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!F(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function ke(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function we(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function ve(s){let e,n,t,l,o,h,c,_,S,m=s[4],u=[];for(let r=0;r<m.length;r+=1)u[r]=re(te(s,m,r));function g(r,a){return r[3]?we:r[2]?ke:$e}let b=g(s),i=b(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),i.c(),c=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),i.l(r),c=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&J(()=>s[5].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(e,null);R(e,s[0],!0),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),i.m(r,a),d(r,c,a),_||(S=K(e,"change",s[5]),_=!0)},p(r,[a]){if(a&16){m=r[4];let f;for(f=0;f<m.length;f+=1){const A=te(r,m,f);u[f]?u[f].p(A,a):(u[f]=re(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&17&&R(e,r[0]),a&1&&N(t,r[0]),b===(b=g(r))&&i?i.p(r,a):(i.d(1),i=b(r),i&&(i.c(),i.m(c.parentNode,c)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),i.d(r),r&&p(c),_=!1,S()}}}function Ee(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1,c=!1;function _(m){n(2,h=!0),n(3,c=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${m}/images/random`).then(u=>u.json()).then(u=>n(1,o=u.message)).catch(u=>n(3,c=!0)).finally(()=>n(2,h=!1))}function S(){t=X(this),n(0,t),n(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&_(t)},[t,o,h,c,l,S]}class Se extends O{constructor(e){super(),T(this,e,Ee,ve,M,{})}}const ye=`<script>\r
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
`;function ne(s,e,n){const t=s.slice();return t[7]=e[n],t}function le(s){let e,n=s[7]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function je(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!F(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function Ie(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Be(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Pe(s){let e,n,t,l,o,h,c,_,S,m=s[4],u=[];for(let r=0;r<m.length;r+=1)u[r]=le(ne(s,m,r));function g(r,a){return r[3]?Be:r[2]?Ie:je}let b=g(s),i=b(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),i.c(),c=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),i.l(r),c=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&J(()=>s[5].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(e,null);R(e,s[0],!0),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),i.m(r,a),d(r,c,a),_||(S=K(e,"change",s[5]),_=!0)},p(r,[a]){if(a&16){m=r[4];let f;for(f=0;f<m.length;f+=1){const A=ne(r,m,f);u[f]?u[f].p(A,a):(u[f]=le(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&17&&R(e,r[0]),a&1&&N(t,r[0]),b===(b=g(r))&&i?i.p(r,a):(i.d(1),i=b(r),i&&(i.c(),i.m(c.parentNode,c)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),i.d(r),r&&p(c),_=!1,S()}}}function Ae(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1,c=!1;async function _(m){try{n(2,h=!0),n(3,c=!1),n(1,o=null);const g=await(await fetch(`https://dog.ceo/api/breed/${m}/images/random`)).json();n(1,o=g.message)}catch{n(3,c=!0)}finally{n(2,h=!1)}}function S(){t=X(this),n(0,t),n(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&_(t)},[t,o,h,c,l,S]}class De extends O{constructor(e){super(),T(this,e,Ae,Pe,M,{})}}const Re=`<script>\r
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
`;function se(s,e,n){const t=s.slice();return t[5]=e[n],t}function oe(s){let e,n=s[5]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[5],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function Fe(s){let e,n,t=s[4]+"",l;return{c(){e=k("p"),n=v("oops! error! "),l=v(t)},l(o){e=w(o,"P",{});var h=j(e);n=E(h,"oops! error! "),l=E(h,t),h.forEach(p)},m(o,h){d(o,e,h),I(e,n),I(e,l)},p(o,h){h&1&&t!==(t=o[4]+"")&&N(l,t)},d(o){o&&p(e)}}}function Oe(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,n=s[3].message)||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&3&&!F(e.src,n=t[3].message)&&$(e,"src",n)},d(t){t&&p(e)}}}function Te(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Me(s){let e,n,t,l,o,h,c,_,S,m,u=s[1],g=[];for(let i=0;i<u.length;i+=1)g[i]=oe(se(s,u,i));let b={ctx:s,current:null,token:null,hasCatch:!0,pending:Te,then:Oe,catch:Fe,value:3,error:4};return Q(_=ae(s[0]),b),{c(){e=k("select");for(let i=0;i<g.length;i+=1)g[i].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),c=D(),b.block.c(),this.h()},l(i){e=w(i,"SELECT",{name:!0,id:!0});var r=j(e);for(let a=0;a<g.length;a+=1)g[a].l(r);r.forEach(p),n=E(i,`\r
\r
Selected breed: `),t=E(i,s[0]),l=P(i),o=w(i,"HR",{"w-full":!0}),h=P(i),c=D(),b.block.l(i),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&J(()=>s[2].call(e)),$(o,"w-full","")},m(i,r){d(i,e,r);for(let a=0;a<g.length;a+=1)g[a]&&g[a].m(e,null);R(e,s[0],!0),d(i,n,r),d(i,t,r),d(i,l,r),d(i,o,r),d(i,h,r),d(i,c,r),b.block.m(i,b.anchor=r),b.mount=()=>c.parentNode,b.anchor=c,S||(m=K(e,"change",s[2]),S=!0)},p(i,[r]){if(s=i,r&2){u=s[1];let a;for(a=0;a<u.length;a+=1){const f=se(s,u,a);g[a]?g[a].p(f,r):(g[a]=oe(f),g[a].c(),g[a].m(e,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=u.length}r&3&&R(e,s[0]),r&1&&N(t,s[0]),b.ctx=s,r&1&&_!==(_=ae(s[0]))&&Q(_,b)||ce(b,s,r)},i:y,o:y,d(i){i&&p(e),W(g,i),i&&p(n),i&&p(t),i&&p(l),i&&p(o),i&&p(h),i&&p(c),b.block.d(i),b.token=null,b=null,S=!1,m()}}}async function ae(s){return await(await fetch(`https://dog.ceo/api/breed/${s}/images/random`)).json()}function Ne(s,e,n){let t;const l=["affenpinscher","african","airedale"];function o(){t=X(this),n(0,t),n(1,l)}return[t,l,o]}class He extends O{constructor(e){super(),T(this,e,Ne,Me,M,{})}}const Ce=`<script>\r
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
`;function Le(s){let e;return{c(){e=v("Here we have a component that fetches the selected dog breed as an image using Dog API.")},l(n){e=E(n,"Here we have a component that fetches the selected dog breed as an image using Dog API.")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function Ge(s){let e;return{c(){e=v("One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},l(n){e=E(n,"One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function qe(s){let e,n,t,l,o,h;return e=new Y({props:{$$slots:{default:[Le]},$$scope:{ctx:s}}}),t=new pe({props:{name:[{name:"App",comp:ge,raw:be,text:"Right now it's a bit wonky because every time you change the dog breed you get a <b>missing image icon</b> while the image is loading."},{name:"App2",comp:Se,raw:ye,text:"We could try to use another if statement to display a loading text:"},{name:"App3",comp:De,raw:Re,text:"Maybe an async await version:"},{name:"App4",comp:He,raw:Ce,text:"That works but there is an even better way to do this, we can use the <b>{#await} block</b>."}]}}),o=new Y({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){H(e.$$.fragment),n=B(),H(t.$$.fragment),l=B(),H(o.$$.fragment)},l(c){C(e.$$.fragment,c),n=P(c),C(t.$$.fragment,c),l=P(c),C(o.$$.fragment,c)},m(c,_){L(e,c,_),d(c,n,_),L(t,c,_),d(c,l,_),L(o,c,_),h=!0},p(c,_){const S={};_&2&&(S.$$scope={dirty:_,ctx:c}),e.$set(S);const m={};_&2&&(m.$$scope={dirty:_,ctx:c}),o.$set(m)},i(c){h||(G(e.$$.fragment,c),G(t.$$.fragment,c),G(o.$$.fragment,c),h=!0)},o(c){q(e.$$.fragment,c),q(t.$$.fragment,c),q(o.$$.fragment,c),h=!1},d(c){z(e,c),c&&p(n),z(t,c),c&&p(l),z(o,c)}}}function ze(s){let e,n;const t=[s[0],ie];let l={$$slots:{default:[qe]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)l=Z(l,t[o]);return e=new ue({props:l}),{c(){H(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,h){L(e,o,h),n=!0},p(o,[h]){const c=h&1?fe(t,[h&1&&U(o[0]),h&0&&U(ie)]):{};h&2&&(c.$$scope={dirty:h,ctx:o}),e.$set(c)},i(o){n||(G(e.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),n=!1},d(o){z(e,o)}}}const ie={title:"{#await}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function Je(s,e,n){return s.$$set=t=>{n(0,e=Z(Z({},e),V(t)))},e=V(e),[e]}class Ue extends O{constructor(e){super(),T(this,e,Je,ze,M,{})}}export{Ue as default,ie as metadata};
