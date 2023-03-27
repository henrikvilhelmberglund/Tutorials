import{S as F,i as T,s as M,k,q as v,a as B,e as D,l as w,m as j,h as p,r as E,c as P,n as $,ac as Q,b as d,aj as R,Q as V,u as N,B as y,L as W,G as I,ak as Z,V as O,ae as K,af as ie,M as J,w as C,x as H,y as G,N as fe,O as U,f as L,t as q,z,P as X}from"./index-a6ce3bb5.js";import{M as ue,P as Y}from"./mdsvex-layout-notes-38a9c8fb.js";import"./index-8a23e261.js";/* empty css                                               */import{S as pe}from"./ShowMany-33ef960d.js";function x(s,e,n){const t=s.slice();return t[6]=e[n],t}function ee(s){let e,n=s[6]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[6],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function he(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){O(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!O(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function de(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function me(s){let e,n,t,l,o,h,i,_,S,m=s[3],u=[];for(let r=0;r<m.length;r+=1)u[r]=ee(x(s,m,r));function b(r,a){return r[2]?de:he}let g=b(s),c=g(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),c.c(),i=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),c.l(r),i=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&Q(()=>s[4].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f].m(e,null);R(e,s[0]),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),c.m(r,a),d(r,i,a),_||(S=V(e,"change",s[4]),_=!0)},p(r,[a]){if(a&8){m=r[3];let f;for(f=0;f<m.length;f+=1){const A=x(r,m,f);u[f]?u[f].p(A,a):(u[f]=ee(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&9&&R(e,r[0]),a&1&&N(t,r[0]),g===(g=b(r))&&c?c.p(r,a):(c.d(1),c=g(r),c&&(c.c(),c.m(i.parentNode,i)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),c.d(r),r&&p(i),_=!1,S()}}}function _e(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1;function i(S){n(2,h=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${S}/images/random`).then(m=>m.json()).then(m=>n(1,o=m.message)).catch(m=>n(2,h=!0))}function _(){t=Z(this),n(0,t),n(3,l)}return s.$$.update=()=>{s.$$.dirty&1&&i(t)},[t,o,h,l,_]}class ge extends F{constructor(e){super(),T(this,e,_e,me,M,{})}}const be=`<script>\r
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
`;function te(s,e,n){const t=s.slice();return t[7]=e[n],t}function re(s){let e,n=s[7]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function $e(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){O(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!O(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function ke(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function we(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function ve(s){let e,n,t,l,o,h,i,_,S,m=s[4],u=[];for(let r=0;r<m.length;r+=1)u[r]=re(te(s,m,r));function b(r,a){return r[3]?we:r[2]?ke:$e}let g=b(s),c=g(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),c.c(),i=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),c.l(r),i=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&Q(()=>s[5].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f].m(e,null);R(e,s[0]),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),c.m(r,a),d(r,i,a),_||(S=V(e,"change",s[5]),_=!0)},p(r,[a]){if(a&16){m=r[4];let f;for(f=0;f<m.length;f+=1){const A=te(r,m,f);u[f]?u[f].p(A,a):(u[f]=re(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&17&&R(e,r[0]),a&1&&N(t,r[0]),g===(g=b(r))&&c?c.p(r,a):(c.d(1),c=g(r),c&&(c.c(),c.m(i.parentNode,i)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),c.d(r),r&&p(i),_=!1,S()}}}function Ee(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1,i=!1;function _(m){n(2,h=!0),n(3,i=!1),n(1,o=null),fetch(`https://dog.ceo/api/breed/${m}/images/random`).then(u=>u.json()).then(u=>n(1,o=u.message)).catch(u=>n(3,i=!0)).finally(()=>n(2,h=!1))}function S(){t=Z(this),n(0,t),n(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&_(t)},[t,o,h,i,l,S]}class Se extends F{constructor(e){super(),T(this,e,Ee,ve,M,{})}}const ye=`<script>\r
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
`;function ne(s,e,n){const t=s.slice();return t[7]=e[n],t}function le(s){let e,n=s[7]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function je(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){O(e.src,n=s[1])||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&2&&!O(e.src,n=t[1])&&$(e,"src",n)},d(t){t&&p(e)}}}function Ie(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Be(s){let e,n;return{c(){e=k("p"),n=v("oops! error!")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"oops! error!"),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Pe(s){let e,n,t,l,o,h,i,_,S,m=s[4],u=[];for(let r=0;r<m.length;r+=1)u[r]=le(ne(s,m,r));function b(r,a){return r[3]?Be:r[2]?Ie:je}let g=b(s),c=g(s);return{c(){e=k("select");for(let r=0;r<u.length;r+=1)u[r].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),c.c(),i=D(),this.h()},l(r){e=w(r,"SELECT",{name:!0,id:!0});var a=j(e);for(let f=0;f<u.length;f+=1)u[f].l(a);a.forEach(p),n=E(r,`\r
\r
Selected breed: `),t=E(r,s[0]),l=P(r),o=w(r,"HR",{"w-full":!0}),h=P(r),c.l(r),i=D(),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&Q(()=>s[5].call(e)),$(o,"w-full","")},m(r,a){d(r,e,a);for(let f=0;f<u.length;f+=1)u[f].m(e,null);R(e,s[0]),d(r,n,a),d(r,t,a),d(r,l,a),d(r,o,a),d(r,h,a),c.m(r,a),d(r,i,a),_||(S=V(e,"change",s[5]),_=!0)},p(r,[a]){if(a&16){m=r[4];let f;for(f=0;f<m.length;f+=1){const A=ne(r,m,f);u[f]?u[f].p(A,a):(u[f]=le(A),u[f].c(),u[f].m(e,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=m.length}a&17&&R(e,r[0]),a&1&&N(t,r[0]),g===(g=b(r))&&c?c.p(r,a):(c.d(1),c=g(r),c&&(c.c(),c.m(i.parentNode,i)))},i:y,o:y,d(r){r&&p(e),W(u,r),r&&p(n),r&&p(t),r&&p(l),r&&p(o),r&&p(h),c.d(r),r&&p(i),_=!1,S()}}}function Ae(s,e,n){let t;const l=["affenpinscher","african","airedale"];let o,h=!1,i=!1;async function _(m){try{n(2,h=!0),n(3,i=!1),n(1,o=null);const b=await(await fetch(`https://dog.ceo/api/breed/${m}/images/random`)).json();n(1,o=b.message)}catch{n(3,i=!0)}finally{n(2,h=!1)}}function S(){t=Z(this),n(0,t),n(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&_(t)},[t,o,h,i,l,S]}class De extends F{constructor(e){super(),T(this,e,Ae,Pe,M,{})}}const Re=`<script>\r
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
`;function se(s,e,n){const t=s.slice();return t[5]=e[n],t}function oe(s){let e,n=s[5]+"",t;return{c(){e=k("option"),t=v(n),this.h()},l(l){e=w(l,"OPTION",{});var o=j(e);t=E(o,n),o.forEach(p),this.h()},h(){e.__value=s[5],e.value=e.__value},m(l,o){d(l,e,o),I(e,t)},p:y,d(l){l&&p(e)}}}function Oe(s){let e,n,t=s[4]+"",l;return{c(){e=k("p"),n=v("oops! error! "),l=v(t)},l(o){e=w(o,"P",{});var h=j(e);n=E(h,"oops! error! "),l=E(h,t),h.forEach(p)},m(o,h){d(o,e,h),I(e,n),I(e,l)},p(o,h){h&1&&t!==(t=o[4]+"")&&N(l,t)},d(o){o&&p(e)}}}function Fe(s){let e,n;return{c(){e=k("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){O(e.src,n=s[3].message)||$(e,"src",n),$(e,"alt","dog")},m(t,l){d(t,e,l)},p(t,l){l&3&&!O(e.src,n=t[3].message)&&$(e,"src",n)},d(t){t&&p(e)}}}function Te(s){let e,n;return{c(){e=k("p"),n=v("loading...")},l(t){e=w(t,"P",{});var l=j(e);n=E(l,"loading..."),l.forEach(p)},m(t,l){d(t,e,l),I(e,n)},p:y,d(t){t&&p(e)}}}function Me(s){let e,n,t,l,o,h,i,_,S,m,u=s[1],b=[];for(let c=0;c<u.length;c+=1)b[c]=oe(se(s,u,c));let g={ctx:s,current:null,token:null,hasCatch:!0,pending:Te,then:Fe,catch:Oe,value:3,error:4};return K(_=ae(s[0]),g),{c(){e=k("select");for(let c=0;c<b.length;c+=1)b[c].c();n=v(`\r
\r
Selected breed: `),t=v(s[0]),l=B(),o=k("hr"),h=B(),i=D(),g.block.c(),this.h()},l(c){e=w(c,"SELECT",{name:!0,id:!0});var r=j(e);for(let a=0;a<b.length;a+=1)b[a].l(r);r.forEach(p),n=E(c,`\r
\r
Selected breed: `),t=E(c,s[0]),l=P(c),o=w(c,"HR",{"w-full":!0}),h=P(c),i=D(),g.block.l(c),this.h()},h(){$(e,"name",""),$(e,"id",""),s[0]===void 0&&Q(()=>s[2].call(e)),$(o,"w-full","")},m(c,r){d(c,e,r);for(let a=0;a<b.length;a+=1)b[a].m(e,null);R(e,s[0]),d(c,n,r),d(c,t,r),d(c,l,r),d(c,o,r),d(c,h,r),d(c,i,r),g.block.m(c,g.anchor=r),g.mount=()=>i.parentNode,g.anchor=i,S||(m=V(e,"change",s[2]),S=!0)},p(c,[r]){if(s=c,r&2){u=s[1];let a;for(a=0;a<u.length;a+=1){const f=se(s,u,a);b[a]?b[a].p(f,r):(b[a]=oe(f),b[a].c(),b[a].m(e,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=u.length}r&3&&R(e,s[0]),r&1&&N(t,s[0]),g.ctx=s,r&1&&_!==(_=ae(s[0]))&&K(_,g)||ie(g,s,r)},i:y,o:y,d(c){c&&p(e),W(b,c),c&&p(n),c&&p(t),c&&p(l),c&&p(o),c&&p(h),c&&p(i),g.block.d(c),g.token=null,g=null,S=!1,m()}}}async function ae(s){return await(await fetch(`https://dog.ceo/api/breed/${s}/images/random`)).json()}function Ne(s,e,n){let t;const l=["affenpinscher","african","airedale"];function o(){t=Z(this),n(0,t),n(1,l)}return[t,l,o]}class Ce extends F{constructor(e){super(),T(this,e,Ne,Me,M,{})}}const He=`<script>\r
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
`;function Ge(s){let e;return{c(){e=v("Here we have a component that fetches the selected dog breed as an image using Dog API.")},l(n){e=E(n,"Here we have a component that fetches the selected dog breed as an image using Dog API.")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function Le(s){let e;return{c(){e=v("One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},l(n){e=E(n,"One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},m(n,t){d(n,e,t)},d(n){n&&p(e)}}}function qe(s){let e,n,t,l,o,h;return e=new Y({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),t=new pe({props:{name:[{name:"App",comp:ge,raw:be,text:"Right now it's a bit wonky because every time you change the dog breed you get a <b>missing image icon</b> while the image is loading."},{name:"App2",comp:Se,raw:ye,text:"We could try to use another if statement to display a loading text:"},{name:"App3",comp:De,raw:Re,text:"Maybe an async await version:"},{name:"App4",comp:Ce,raw:He,text:"That works but there is an even better way to do this, we can use the <b>{#await} block</b>."}]}}),o=new Y({props:{$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment),n=B(),C(t.$$.fragment),l=B(),C(o.$$.fragment)},l(i){H(e.$$.fragment,i),n=P(i),H(t.$$.fragment,i),l=P(i),H(o.$$.fragment,i)},m(i,_){G(e,i,_),d(i,n,_),G(t,i,_),d(i,l,_),G(o,i,_),h=!0},p(i,_){const S={};_&2&&(S.$$scope={dirty:_,ctx:i}),e.$set(S);const m={};_&2&&(m.$$scope={dirty:_,ctx:i}),o.$set(m)},i(i){h||(L(e.$$.fragment,i),L(t.$$.fragment,i),L(o.$$.fragment,i),h=!0)},o(i){q(e.$$.fragment,i),q(t.$$.fragment,i),q(o.$$.fragment,i),h=!1},d(i){z(e,i),i&&p(n),z(t,i),i&&p(l),z(o,i)}}}function ze(s){let e,n;const t=[s[0],ce];let l={$$slots:{default:[qe]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)l=J(l,t[o]);return e=new ue({props:l}),{c(){C(e.$$.fragment)},l(o){H(e.$$.fragment,o)},m(o,h){G(e,o,h),n=!0},p(o,[h]){const i=h&1?fe(t,[h&1&&U(o[0]),h&0&&U(ce)]):{};h&2&&(i.$$scope={dirty:h,ctx:o}),e.$set(i)},i(o){n||(L(e.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),n=!1},d(o){z(e,o)}}}const ce={title:"{#await}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function Qe(s,e,n){return s.$$set=t=>{n(0,e=J(J({},e),X(t)))},e=X(e),[e]}class Ue extends F{constructor(e){super(),T(this,e,Qe,ze,M,{})}}export{Ue as default,ce as metadata};
