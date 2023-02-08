import{S as L,i as q,s as H,k as E,q as j,a as T,e as N,l as w,m as D,h as u,r as B,c as A,n as g,aa as Q,b as d,ag as R,N as z,u as C,B as M,I as G,D as I,ah as W,T as F,ac as te,ad as ve,v as re,w as U,x,y as V,g as ke,t as J,z as K,d as Ee,f as Z,p as we,J as Y,K as $e,L as ne,M as le}from"./index-99d2d53b.js";import{M as Se}from"./mdsvex-layout-notes-8e572572.js";import{P as se}from"./ShowCode.svelte_svelte_type_style_lang-de6c27e3.js";function oe(l,e,r){const t=l.slice();return t[6]=e[r],t}function ae(l){let e,r=l[6]+"",t;return{c(){e=E("option"),t=j(r),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);t=B(o,r),o.forEach(u),this.h()},h(){e.__value=l[6],e.value=e.__value},m(s,o){d(s,e,o),I(e,t)},p:M,d(s){s&&u(e)}}}function Ie(l){let e,r;return{c(){e=E("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,r=l[1])||g(e,"src",r),g(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!F(e.src,r=t[1])&&g(e,"src",r)},d(t){t&&u(e)}}}function je(l){let e,r;return{c(){e=E("p"),r=j("oops! error!")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"oops! error!"),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function Be(l){let e,r,t,s,o,h,p,b,m,_=l[3],f=[];for(let n=0;n<_.length;n+=1)f[n]=ae(oe(l,_,n));function v(n,a){return n[2]?je:Ie}let k=v(l),i=k(l);return{c(){e=E("select");for(let n=0;n<f.length;n+=1)f[n].c();r=j(`\r
\r
Selected breed: `),t=j(l[0]),s=T(),o=E("hr"),h=T(),i.c(),p=N(),this.h()},l(n){e=w(n,"SELECT",{name:!0,id:!0});var a=D(e);for(let c=0;c<f.length;c+=1)f[c].l(a);a.forEach(u),r=B(n,`\r
\r
Selected breed: `),t=B(n,l[0]),s=A(n),o=w(n,"HR",{"w-full":!0}),h=A(n),i.l(n),p=N(),this.h()},h(){g(e,"name",""),g(e,"id",""),l[0]===void 0&&Q(()=>l[4].call(e)),g(o,"w-full","")},m(n,a){d(n,e,a);for(let c=0;c<f.length;c+=1)f[c].m(e,null);R(e,l[0]),d(n,r,a),d(n,t,a),d(n,s,a),d(n,o,a),d(n,h,a),i.m(n,a),d(n,p,a),b||(m=z(e,"change",l[4]),b=!0)},p(n,[a]){if(a&8){_=n[3];let c;for(c=0;c<_.length;c+=1){const S=oe(n,_,c);f[c]?f[c].p(S,a):(f[c]=ae(S),f[c].c(),f[c].m(e,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=_.length}a&9&&R(e,n[0]),a&1&&C(t,n[0]),k===(k=v(n))&&i?i.p(n,a):(i.d(1),i=k(n),i&&(i.c(),i.m(p.parentNode,p)))},i:M,o:M,d(n){n&&u(e),G(f,n),n&&u(r),n&&u(t),n&&u(s),n&&u(o),n&&u(h),i.d(n),n&&u(p),b=!1,m()}}}function ye(l,e,r){let t;const s=["affenpinscher","african","airedale"];let o,h=!1;function p(m){r(2,h=!1),r(1,o=null),fetch(`https://dog.ceo/api/breed/${m}/images/random`).then(_=>_.json()).then(_=>r(1,o=_.message)).catch(_=>r(2,h=!0))}function b(){t=W(this),r(0,t),r(3,s)}return l.$$.update=()=>{l.$$.dirty&1&&p(t)},[t,o,h,s,b]}class De extends L{constructor(e){super(),q(this,e,ye,Be,H,{})}}const Me=`<script>\r
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
`;function ce(l,e,r){const t=l.slice();return t[7]=e[r],t}function ie(l){let e,r=l[7]+"",t;return{c(){e=E("option"),t=j(r),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);t=B(o,r),o.forEach(u),this.h()},h(){e.__value=l[7],e.value=e.__value},m(s,o){d(s,e,o),I(e,t)},p:M,d(s){s&&u(e)}}}function Pe(l){let e,r;return{c(){e=E("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,r=l[1])||g(e,"src",r),g(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!F(e.src,r=t[1])&&g(e,"src",r)},d(t){t&&u(e)}}}function Te(l){let e,r;return{c(){e=E("p"),r=j("loading...")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"loading..."),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function Ae(l){let e,r;return{c(){e=E("p"),r=j("oops! error!")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"oops! error!"),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function Oe(l){let e,r,t,s,o,h,p,b,m,_=l[4],f=[];for(let n=0;n<_.length;n+=1)f[n]=ie(ce(l,_,n));function v(n,a){return n[3]?Ae:n[2]?Te:Pe}let k=v(l),i=k(l);return{c(){e=E("select");for(let n=0;n<f.length;n+=1)f[n].c();r=j(`\r
\r
Selected breed: `),t=j(l[0]),s=T(),o=E("hr"),h=T(),i.c(),p=N(),this.h()},l(n){e=w(n,"SELECT",{name:!0,id:!0});var a=D(e);for(let c=0;c<f.length;c+=1)f[c].l(a);a.forEach(u),r=B(n,`\r
\r
Selected breed: `),t=B(n,l[0]),s=A(n),o=w(n,"HR",{"w-full":!0}),h=A(n),i.l(n),p=N(),this.h()},h(){g(e,"name",""),g(e,"id",""),l[0]===void 0&&Q(()=>l[5].call(e)),g(o,"w-full","")},m(n,a){d(n,e,a);for(let c=0;c<f.length;c+=1)f[c].m(e,null);R(e,l[0]),d(n,r,a),d(n,t,a),d(n,s,a),d(n,o,a),d(n,h,a),i.m(n,a),d(n,p,a),b||(m=z(e,"change",l[5]),b=!0)},p(n,[a]){if(a&16){_=n[4];let c;for(c=0;c<_.length;c+=1){const S=ce(n,_,c);f[c]?f[c].p(S,a):(f[c]=ie(S),f[c].c(),f[c].m(e,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=_.length}a&17&&R(e,n[0]),a&1&&C(t,n[0]),k===(k=v(n))&&i?i.p(n,a):(i.d(1),i=k(n),i&&(i.c(),i.m(p.parentNode,p)))},i:M,o:M,d(n){n&&u(e),G(f,n),n&&u(r),n&&u(t),n&&u(s),n&&u(o),n&&u(h),i.d(n),n&&u(p),b=!1,m()}}}function Ne(l,e,r){let t;const s=["affenpinscher","african","airedale"];let o,h=!1,p=!1;function b(_){r(2,h=!0),r(3,p=!1),r(1,o=null),fetch(`https://dog.ceo/api/breed/${_}/images/random`).then(f=>f.json()).then(f=>r(1,o=f.message)).catch(f=>r(3,p=!0)).finally(()=>r(2,h=!1))}function m(){t=W(this),r(0,t),r(4,s)}return l.$$.update=()=>{l.$$.dirty&1&&b(t)},[t,o,h,p,s,m]}class Re extends L{constructor(e){super(),q(this,e,Ne,Oe,H,{})}}const Fe=`<script>\r
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
`;function fe(l,e,r){const t=l.slice();return t[7]=e[r],t}function ue(l){let e,r=l[7]+"",t;return{c(){e=E("option"),t=j(r),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);t=B(o,r),o.forEach(u),this.h()},h(){e.__value=l[7],e.value=e.__value},m(s,o){d(s,e,o),I(e,t)},p:M,d(s){s&&u(e)}}}function Ce(l){let e,r;return{c(){e=E("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,r=l[1])||g(e,"src",r),g(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&2&&!F(e.src,r=t[1])&&g(e,"src",r)},d(t){t&&u(e)}}}function Le(l){let e,r;return{c(){e=E("p"),r=j("loading...")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"loading..."),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function qe(l){let e,r;return{c(){e=E("p"),r=j("oops! error!")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"oops! error!"),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function He(l){let e,r,t,s,o,h,p,b,m,_=l[4],f=[];for(let n=0;n<_.length;n+=1)f[n]=ue(fe(l,_,n));function v(n,a){return n[3]?qe:n[2]?Le:Ce}let k=v(l),i=k(l);return{c(){e=E("select");for(let n=0;n<f.length;n+=1)f[n].c();r=j(`\r
\r
Selected breed: `),t=j(l[0]),s=T(),o=E("hr"),h=T(),i.c(),p=N(),this.h()},l(n){e=w(n,"SELECT",{name:!0,id:!0});var a=D(e);for(let c=0;c<f.length;c+=1)f[c].l(a);a.forEach(u),r=B(n,`\r
\r
Selected breed: `),t=B(n,l[0]),s=A(n),o=w(n,"HR",{"w-full":!0}),h=A(n),i.l(n),p=N(),this.h()},h(){g(e,"name",""),g(e,"id",""),l[0]===void 0&&Q(()=>l[5].call(e)),g(o,"w-full","")},m(n,a){d(n,e,a);for(let c=0;c<f.length;c+=1)f[c].m(e,null);R(e,l[0]),d(n,r,a),d(n,t,a),d(n,s,a),d(n,o,a),d(n,h,a),i.m(n,a),d(n,p,a),b||(m=z(e,"change",l[5]),b=!0)},p(n,[a]){if(a&16){_=n[4];let c;for(c=0;c<_.length;c+=1){const S=fe(n,_,c);f[c]?f[c].p(S,a):(f[c]=ue(S),f[c].c(),f[c].m(e,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=_.length}a&17&&R(e,n[0]),a&1&&C(t,n[0]),k===(k=v(n))&&i?i.p(n,a):(i.d(1),i=k(n),i&&(i.c(),i.m(p.parentNode,p)))},i:M,o:M,d(n){n&&u(e),G(f,n),n&&u(r),n&&u(t),n&&u(s),n&&u(o),n&&u(h),i.d(n),n&&u(p),b=!1,m()}}}function ze(l,e,r){let t;const s=["affenpinscher","african","airedale"];let o,h=!1,p=!1;async function b(_){try{r(2,h=!0),r(3,p=!1),r(1,o=null);const v=await(await fetch(`https://dog.ceo/api/breed/${_}/images/random`)).json();r(1,o=v.message)}catch{r(3,p=!0)}finally{r(2,h=!1)}}function m(){t=W(this),r(0,t),r(4,s)}return l.$$.update=()=>{l.$$.dirty&1&&b(t)},[t,o,h,p,s,m]}class Ge extends L{constructor(e){super(),q(this,e,ze,He,H,{})}}const Ue=`<script>\r
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
`;function he(l,e,r){const t=l.slice();return t[5]=e[r],t}function pe(l){let e,r=l[5]+"",t;return{c(){e=E("option"),t=j(r),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);t=B(o,r),o.forEach(u),this.h()},h(){e.__value=l[5],e.value=e.__value},m(s,o){d(s,e,o),I(e,t)},p:M,d(s){s&&u(e)}}}function Ve(l){let e,r,t=l[4]+"",s;return{c(){e=E("p"),r=j("oops! error! "),s=j(t)},l(o){e=w(o,"P",{});var h=D(e);r=B(h,"oops! error! "),s=B(h,t),h.forEach(u)},m(o,h){d(o,e,h),I(e,r),I(e,s)},p(o,h){h&1&&t!==(t=o[4]+"")&&C(s,t)},d(o){o&&u(e)}}}function Je(l){let e,r;return{c(){e=E("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){F(e.src,r=l[3].message)||g(e,"src",r),g(e,"alt","dog")},m(t,s){d(t,e,s)},p(t,s){s&3&&!F(e.src,r=t[3].message)&&g(e,"src",r)},d(t){t&&u(e)}}}function Ke(l){let e,r;return{c(){e=E("p"),r=j("loading...")},l(t){e=w(t,"P",{});var s=D(e);r=B(s,"loading..."),s.forEach(u)},m(t,s){d(t,e,s),I(e,r)},p:M,d(t){t&&u(e)}}}function Ze(l){let e,r,t,s,o,h,p,b,m,_,f=l[1],v=[];for(let i=0;i<f.length;i+=1)v[i]=pe(he(l,f,i));let k={ctx:l,current:null,token:null,hasCatch:!0,pending:Ke,then:Je,catch:Ve,value:3,error:4};return te(b=_e(l[0]),k),{c(){e=E("select");for(let i=0;i<v.length;i+=1)v[i].c();r=j(`\r
\r
Selected breed: `),t=j(l[0]),s=T(),o=E("hr"),h=T(),p=N(),k.block.c(),this.h()},l(i){e=w(i,"SELECT",{name:!0,id:!0});var n=D(e);for(let a=0;a<v.length;a+=1)v[a].l(n);n.forEach(u),r=B(i,`\r
\r
Selected breed: `),t=B(i,l[0]),s=A(i),o=w(i,"HR",{"w-full":!0}),h=A(i),p=N(),k.block.l(i),this.h()},h(){g(e,"name",""),g(e,"id",""),l[0]===void 0&&Q(()=>l[2].call(e)),g(o,"w-full","")},m(i,n){d(i,e,n);for(let a=0;a<v.length;a+=1)v[a].m(e,null);R(e,l[0]),d(i,r,n),d(i,t,n),d(i,s,n),d(i,o,n),d(i,h,n),d(i,p,n),k.block.m(i,k.anchor=n),k.mount=()=>p.parentNode,k.anchor=p,m||(_=z(e,"change",l[2]),m=!0)},p(i,[n]){if(l=i,n&2){f=l[1];let a;for(a=0;a<f.length;a+=1){const c=he(l,f,a);v[a]?v[a].p(c,n):(v[a]=pe(c),v[a].c(),v[a].m(e,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=f.length}n&3&&R(e,l[0]),n&1&&C(t,l[0]),k.ctx=l,n&1&&b!==(b=_e(l[0]))&&te(b,k)||ve(k,l,n)},i:M,o:M,d(i){i&&u(e),G(v,i),i&&u(r),i&&u(t),i&&u(s),i&&u(o),i&&u(h),i&&u(p),k.block.d(i),k.token=null,k=null,m=!1,_()}}}async function _e(l){return await(await fetch(`https://dog.ceo/api/breed/${l}/images/random`)).json()}function Qe(l,e,r){let t;const s=["affenpinscher","african","airedale"];function o(){t=W(this),r(0,t),r(1,s)}return[t,s,o]}class We extends L{constructor(e){super(),q(this,e,Qe,Ze,H,{})}}const Xe=`<script>\r
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
`;function de(l,e,r){const t=l.slice();return t[7]=e[r][0],t[8]=e[r][1],t}function me(l){let e,r,t,s=l[8].name+"",o,h,p,b;return{c(){e=E("label"),r=E("input"),o=j(s),this.h()},l(m){e=w(m,"LABEL",{class:!0});var _=D(e);r=w(_,"INPUT",{type:!0,name:!0,class:!0,id:!0}),o=B(_,s),_.forEach(u),this.h()},h(){g(r,"type","radio"),g(r,"name","selected"),g(r,"class","uno-pdic65"),g(r,"id",""),r.__value=t=l[8],r.value=r.__value,l[6][0].push(r),g(e,"class",h="uno-qlv1kz "+(l[8].name===l[1].name?"uno-2y2hkt":"uno-xpxxqi"))},m(m,_){d(m,e,_),I(e,r),r.checked=r.__value===l[1],I(e,o),p||(b=z(r,"change",l[5]),p=!0)},p(m,_){_&1&&t!==(t=m[8])&&(r.__value=t,r.value=r.__value),_&2&&(r.checked=r.__value===m[1]),_&1&&s!==(s=m[8].name+"")&&C(o,s),_&3&&h!==(h="uno-qlv1kz "+(m[8].name===m[1].name?"uno-2y2hkt":"uno-xpxxqi"))&&g(e,"class",h)},d(m){m&&u(e),l[6][0].splice(l[6][0].indexOf(r),1),p=!1,b()}}}function ge(l){let e,r,t;return{c(){e=E("pre"),r=E("code"),t=j(`\r
        `),this.h()},l(s){e=w(s,"PRE",{class:!0});var o=D(e);r=w(o,"CODE",{style:!0});var h=D(r);h.forEach(u),t=B(o,`\r
        `),o.forEach(u),this.h()},h(){we(r,"font-family","'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New', monospace"),g(e,"class","uno-2zodpv language-svelte")},m(s,o){d(s,e,o),I(e,r),r.innerHTML=l[3],I(e,t)},p(s,o){o&8&&(r.innerHTML=s[3])},d(s){s&&u(e)}}}function Ye(l){let e,r,t,s,o,h,p=l[2]?"🔼":"🔽",b,m,_,f,v,k;var i=l[1].comp;function n($){return{}}i&&(t=re(i,n()));let a=Object.entries(l[0]),c=[];for(let $=0;$<a.length;$+=1)c[$]=me(de(l,a,$));let S=l[2]&&ge(l);return{c(){e=E("div"),r=E("div"),t&&U(t.$$.fragment),s=T(),o=E("div"),h=E("button"),b=j(p),m=T();for(let $=0;$<c.length;$+=1)c[$].c();_=T(),S&&S.c(),this.h()},l($){e=w($,"DIV",{});var P=D(e);r=w(P,"DIV",{class:!0});var y=D(r);t&&x(t.$$.fragment,y),y.forEach(u),s=A(P),o=w(P,"DIV",{class:!0});var O=D(o);h=w(O,"BUTTON",{class:!0});var ee=D(h);b=B(ee,p),ee.forEach(u),m=A(O);for(let X=0;X<c.length;X+=1)c[X].l(O);_=A(O),S&&S.l(O),O.forEach(u),P.forEach(u),this.h()},h(){g(r,"class","uno-a5c347"),g(h,"class","uno-ahiawh"),g(o,"class","uno-u9dsbt")},m($,P){d($,e,P),I(e,r),t&&V(t,r,null),I(e,s),I(e,o),I(o,h),I(h,b),I(o,m);for(let y=0;y<c.length;y+=1)c[y].m(o,null);I(o,_),S&&S.m(o,null),f=!0,v||(k=z(h,"click",l[4]),v=!0)},p($,[P]){if(i!==(i=$[1].comp)){if(t){ke();const y=t;J(y.$$.fragment,1,0,()=>{K(y,1)}),Ee()}i?(t=re(i,n()),U(t.$$.fragment),Z(t.$$.fragment,1),V(t,r,null)):t=null}if((!f||P&4)&&p!==(p=$[2]?"🔼":"🔽")&&C(b,p),P&3){a=Object.entries($[0]);let y;for(y=0;y<a.length;y+=1){const O=de($,a,y);c[y]?c[y].p(O,P):(c[y]=me(O),c[y].c(),c[y].m(o,_))}for(;y<c.length;y+=1)c[y].d(1);c.length=a.length}$[2]?S?S.p($,P):(S=ge($),S.c(),S.m(o,null)):S&&(S.d(1),S=null)},i($){f||(t&&Z(t.$$.fragment,$),f=!0)},o($){t&&J(t.$$.fragment,$),f=!1},d($){$&&u(e),t&&K(t),G(c,$),S&&S.d(),v=!1,k()}}}function xe(l,e,r){let t,{name:s}=e,o=s[0],h=!0;const p=[[]],b=()=>r(2,h=!h);function m(){o=this.__value,r(1,o)}return l.$$set=_=>{"name"in _&&r(0,s=_.name)},l.$$.update=()=>{l.$$.dirty&2&&r(3,t=se.highlight(o.raw,se.languages.svelte,"svelte"))},[s,o,h,t,b,m,p]}class et extends L{constructor(e){super(),q(this,e,xe,Ye,H,{name:0})}}function tt(l){let e,r;return e=new et({props:{name:[{name:"App",comp:De,raw:Me},{name:"App2",comp:Re,raw:Fe},{name:"App3",comp:Ge,raw:Ue},{name:"App4",comp:We,raw:Xe}]}}),{c(){U(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){V(e,t,s),r=!0},p:M,i(t){r||(Z(e.$$.fragment,t),r=!0)},o(t){J(e.$$.fragment,t),r=!1},d(t){K(e,t)}}}function rt(l){let e,r;const t=[l[0],be];let s={$$slots:{default:[tt]},$$scope:{ctx:l}};for(let o=0;o<t.length;o+=1)s=Y(s,t[o]);return e=new Se({props:s}),{c(){U(e.$$.fragment)},l(o){x(e.$$.fragment,o)},m(o,h){V(e,o,h),r=!0},p(o,[h]){const p=h&1?$e(t,[h&1&&ne(o[0]),h&0&&ne(be)]):{};h&2&&(p.$$scope={dirty:h,ctx:o}),e.$set(p)},i(o){r||(Z(e.$$.fragment,o),r=!0)},o(o){J(e.$$.fragment,o),r=!1},d(o){K(e,o)}}}const be={title:"test",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function nt(l,e,r){return l.$$set=t=>{r(0,e=Y(Y({},e),le(t)))},e=le(e),[e]}class at extends L{constructor(e){super(),q(this,e,nt,rt,H,{})}}export{at as default,be as metadata};
