import{S as z,i as J,s as K,k as I,q as w,a as O,e as L,l as j,m as M,h as c,r as v,c as F,n as S,aa as V,b as _,ag as G,N as X,u as Z,B,I as Y,D as C,ah as x,T as q,ac as ue,ad as Ie,J as ee,w as D,x as P,y,K as je,L as pe,f as A,t as R,z as T,M as me}from"./index-99d2d53b.js";import{M as Be,P as W}from"./mdsvex-layout-notes-8e572572.js";import{S as U}from"./ShowCode-f7790b45.js";import{S as Se}from"./Strong-0fe50ee4.js";function _e(s,e,r){const t=s.slice();return t[6]=e[r],t}function he(s){let e,r=s[6]+"",t;return{c(){e=I("option"),t=w(r),this.h()},l(l){e=j(l,"OPTION",{});var o=M(e);t=v(o,r),o.forEach(c),this.h()},h(){e.__value=s[6],e.value=e.__value},m(l,o){_(l,e,o),C(e,t)},p:B,d(l){l&&c(e)}}}function De(s){let e,r;return{c(){e=I("img"),this.h()},l(t){e=j(t,"IMG",{src:!0,alt:!0}),this.h()},h(){q(e.src,r=s[1])||S(e,"src",r),S(e,"alt","dog")},m(t,l){_(t,e,l)},p(t,l){l&2&&!q(e.src,r=t[1])&&S(e,"src",r)},d(t){t&&c(e)}}}function Pe(s){let e,r;return{c(){e=I("p"),r=w("oops! error!")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"oops! error!"),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function ye(s){let e,r,t,l,o,m,h,k,E,d=s[3],p=[];for(let n=0;n<d.length;n+=1)p[n]=he(_e(s,d,n));function b(n,a){return n[2]?Pe:De}let g=b(s),i=g(s);return{c(){e=I("select");for(let n=0;n<p.length;n+=1)p[n].c();r=w(`\r
\r
Selected breed: `),t=w(s[0]),l=O(),o=I("hr"),m=O(),i.c(),h=L(),this.h()},l(n){e=j(n,"SELECT",{name:!0,id:!0});var a=M(e);for(let u=0;u<p.length;u+=1)p[u].l(a);a.forEach(c),r=v(n,`\r
\r
Selected breed: `),t=v(n,s[0]),l=F(n),o=j(n,"HR",{"w-full":!0}),m=F(n),i.l(n),h=L(),this.h()},h(){S(e,"name",""),S(e,"id",""),s[0]===void 0&&V(()=>s[4].call(e)),S(o,"w-full","")},m(n,a){_(n,e,a);for(let u=0;u<p.length;u+=1)p[u].m(e,null);G(e,s[0]),_(n,r,a),_(n,t,a),_(n,l,a),_(n,o,a),_(n,m,a),i.m(n,a),_(n,h,a),k||(E=X(e,"change",s[4]),k=!0)},p(n,[a]){if(a&8){d=n[3];let u;for(u=0;u<d.length;u+=1){const N=_e(n,d,u);p[u]?p[u].p(N,a):(p[u]=he(N),p[u].c(),p[u].m(e,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=d.length}a&9&&G(e,n[0]),a&1&&Z(t,n[0]),g===(g=b(n))&&i?i.p(n,a):(i.d(1),i=g(n),i&&(i.c(),i.m(h.parentNode,h)))},i:B,o:B,d(n){n&&c(e),Y(p,n),n&&c(r),n&&c(t),n&&c(l),n&&c(o),n&&c(m),i.d(n),n&&c(h),k=!1,E()}}}function Ae(s,e,r){let t;const l=["affenpinscher","african","airedale"];let o,m=!1;function h(E){r(2,m=!1),r(1,o=null),fetch(`https://dog.ceo/api/breed/${E}/images/random`).then(d=>d.json()).then(d=>r(1,o=d.message)).catch(d=>r(2,m=!0))}function k(){t=x(this),r(0,t),r(3,l)}return s.$$.update=()=>{s.$$.dirty&1&&h(t)},[t,o,m,l,k]}class Re extends z{constructor(e){super(),J(this,e,Ae,ye,K,{})}}const Te=`<script>\r
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
`;function $e(s,e,r){const t=s.slice();return t[7]=e[r],t}function de(s){let e,r=s[7]+"",t;return{c(){e=I("option"),t=w(r),this.h()},l(l){e=j(l,"OPTION",{});var o=M(e);t=v(o,r),o.forEach(c),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){_(l,e,o),C(e,t)},p:B,d(l){l&&c(e)}}}function Oe(s){let e,r;return{c(){e=I("img"),this.h()},l(t){e=j(t,"IMG",{src:!0,alt:!0}),this.h()},h(){q(e.src,r=s[1])||S(e,"src",r),S(e,"alt","dog")},m(t,l){_(t,e,l)},p(t,l){l&2&&!q(e.src,r=t[1])&&S(e,"src",r)},d(t){t&&c(e)}}}function Fe(s){let e,r;return{c(){e=I("p"),r=w("loading...")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"loading..."),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function Me(s){let e,r;return{c(){e=I("p"),r=w("oops! error!")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"oops! error!"),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function Ne(s){let e,r,t,l,o,m,h,k,E,d=s[4],p=[];for(let n=0;n<d.length;n+=1)p[n]=de($e(s,d,n));function b(n,a){return n[3]?Me:n[2]?Fe:Oe}let g=b(s),i=g(s);return{c(){e=I("select");for(let n=0;n<p.length;n+=1)p[n].c();r=w(`\r
\r
Selected breed: `),t=w(s[0]),l=O(),o=I("hr"),m=O(),i.c(),h=L(),this.h()},l(n){e=j(n,"SELECT",{name:!0,id:!0});var a=M(e);for(let u=0;u<p.length;u+=1)p[u].l(a);a.forEach(c),r=v(n,`\r
\r
Selected breed: `),t=v(n,s[0]),l=F(n),o=j(n,"HR",{"w-full":!0}),m=F(n),i.l(n),h=L(),this.h()},h(){S(e,"name",""),S(e,"id",""),s[0]===void 0&&V(()=>s[5].call(e)),S(o,"w-full","")},m(n,a){_(n,e,a);for(let u=0;u<p.length;u+=1)p[u].m(e,null);G(e,s[0]),_(n,r,a),_(n,t,a),_(n,l,a),_(n,o,a),_(n,m,a),i.m(n,a),_(n,h,a),k||(E=X(e,"change",s[5]),k=!0)},p(n,[a]){if(a&16){d=n[4];let u;for(u=0;u<d.length;u+=1){const N=$e(n,d,u);p[u]?p[u].p(N,a):(p[u]=de(N),p[u].c(),p[u].m(e,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=d.length}a&17&&G(e,n[0]),a&1&&Z(t,n[0]),g===(g=b(n))&&i?i.p(n,a):(i.d(1),i=g(n),i&&(i.c(),i.m(h.parentNode,h)))},i:B,o:B,d(n){n&&c(e),Y(p,n),n&&c(r),n&&c(t),n&&c(l),n&&c(o),n&&c(m),i.d(n),n&&c(h),k=!1,E()}}}function Ce(s,e,r){let t;const l=["affenpinscher","african","airedale"];let o,m=!1,h=!1;function k(d){r(2,m=!0),r(3,h=!1),r(1,o=null),fetch(`https://dog.ceo/api/breed/${d}/images/random`).then(p=>p.json()).then(p=>r(1,o=p.message)).catch(p=>r(3,h=!0)).finally(()=>r(2,m=!1))}function E(){t=x(this),r(0,t),r(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&k(t)},[t,o,m,h,l,E]}class He extends z{constructor(e){super(),J(this,e,Ce,Ne,K,{})}}const Le=`<script>\r
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
`;function ge(s,e,r){const t=s.slice();return t[7]=e[r],t}function be(s){let e,r=s[7]+"",t;return{c(){e=I("option"),t=w(r),this.h()},l(l){e=j(l,"OPTION",{});var o=M(e);t=v(o,r),o.forEach(c),this.h()},h(){e.__value=s[7],e.value=e.__value},m(l,o){_(l,e,o),C(e,t)},p:B,d(l){l&&c(e)}}}function Ge(s){let e,r;return{c(){e=I("img"),this.h()},l(t){e=j(t,"IMG",{src:!0,alt:!0}),this.h()},h(){q(e.src,r=s[1])||S(e,"src",r),S(e,"alt","dog")},m(t,l){_(t,e,l)},p(t,l){l&2&&!q(e.src,r=t[1])&&S(e,"src",r)},d(t){t&&c(e)}}}function qe(s){let e,r;return{c(){e=I("p"),r=w("loading...")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"loading..."),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function We(s){let e,r;return{c(){e=I("p"),r=w("oops! error!")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"oops! error!"),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function ze(s){let e,r,t,l,o,m,h,k,E,d=s[4],p=[];for(let n=0;n<d.length;n+=1)p[n]=be(ge(s,d,n));function b(n,a){return n[3]?We:n[2]?qe:Ge}let g=b(s),i=g(s);return{c(){e=I("select");for(let n=0;n<p.length;n+=1)p[n].c();r=w(`\r
\r
Selected breed: `),t=w(s[0]),l=O(),o=I("hr"),m=O(),i.c(),h=L(),this.h()},l(n){e=j(n,"SELECT",{name:!0,id:!0});var a=M(e);for(let u=0;u<p.length;u+=1)p[u].l(a);a.forEach(c),r=v(n,`\r
\r
Selected breed: `),t=v(n,s[0]),l=F(n),o=j(n,"HR",{"w-full":!0}),m=F(n),i.l(n),h=L(),this.h()},h(){S(e,"name",""),S(e,"id",""),s[0]===void 0&&V(()=>s[5].call(e)),S(o,"w-full","")},m(n,a){_(n,e,a);for(let u=0;u<p.length;u+=1)p[u].m(e,null);G(e,s[0]),_(n,r,a),_(n,t,a),_(n,l,a),_(n,o,a),_(n,m,a),i.m(n,a),_(n,h,a),k||(E=X(e,"change",s[5]),k=!0)},p(n,[a]){if(a&16){d=n[4];let u;for(u=0;u<d.length;u+=1){const N=ge(n,d,u);p[u]?p[u].p(N,a):(p[u]=be(N),p[u].c(),p[u].m(e,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=d.length}a&17&&G(e,n[0]),a&1&&Z(t,n[0]),g===(g=b(n))&&i?i.p(n,a):(i.d(1),i=g(n),i&&(i.c(),i.m(h.parentNode,h)))},i:B,o:B,d(n){n&&c(e),Y(p,n),n&&c(r),n&&c(t),n&&c(l),n&&c(o),n&&c(m),i.d(n),n&&c(h),k=!1,E()}}}function Je(s,e,r){let t;const l=["affenpinscher","african","airedale"];let o,m=!1,h=!1;async function k(d){try{r(2,m=!0),r(3,h=!1),r(1,o=null);const b=await(await fetch(`https://dog.ceo/api/breed/${d}/images/random`)).json();r(1,o=b.message)}catch{r(3,h=!0)}finally{r(2,m=!1)}}function E(){t=x(this),r(0,t),r(4,l)}return s.$$.update=()=>{s.$$.dirty&1&&k(t)},[t,o,m,h,l,E]}class Ke extends z{constructor(e){super(),J(this,e,Je,ze,K,{})}}const Ze=`<script>\r
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
`;function we(s,e,r){const t=s.slice();return t[5]=e[r],t}function ve(s){let e,r=s[5]+"",t;return{c(){e=I("option"),t=w(r),this.h()},l(l){e=j(l,"OPTION",{});var o=M(e);t=v(o,r),o.forEach(c),this.h()},h(){e.__value=s[5],e.value=e.__value},m(l,o){_(l,e,o),C(e,t)},p:B,d(l){l&&c(e)}}}function Qe(s){let e,r,t=s[4]+"",l;return{c(){e=I("p"),r=w("oops! error! "),l=w(t)},l(o){e=j(o,"P",{});var m=M(e);r=v(m,"oops! error! "),l=v(m,t),m.forEach(c)},m(o,m){_(o,e,m),C(e,r),C(e,l)},p(o,m){m&1&&t!==(t=o[4]+"")&&Z(l,t)},d(o){o&&c(e)}}}function Ue(s){let e,r;return{c(){e=I("img"),this.h()},l(t){e=j(t,"IMG",{src:!0,alt:!0}),this.h()},h(){q(e.src,r=s[3].message)||S(e,"src",r),S(e,"alt","dog")},m(t,l){_(t,e,l)},p(t,l){l&3&&!q(e.src,r=t[3].message)&&S(e,"src",r)},d(t){t&&c(e)}}}function Ve(s){let e,r;return{c(){e=I("p"),r=w("loading...")},l(t){e=j(t,"P",{});var l=M(e);r=v(l,"loading..."),l.forEach(c)},m(t,l){_(t,e,l),C(e,r)},p:B,d(t){t&&c(e)}}}function Xe(s){let e,r,t,l,o,m,h,k,E,d,p=s[1],b=[];for(let i=0;i<p.length;i+=1)b[i]=ve(we(s,p,i));let g={ctx:s,current:null,token:null,hasCatch:!0,pending:Ve,then:Ue,catch:Qe,value:3,error:4};return ue(k=ke(s[0]),g),{c(){e=I("select");for(let i=0;i<b.length;i+=1)b[i].c();r=w(`\r
\r
Selected breed: `),t=w(s[0]),l=O(),o=I("hr"),m=O(),h=L(),g.block.c(),this.h()},l(i){e=j(i,"SELECT",{name:!0,id:!0});var n=M(e);for(let a=0;a<b.length;a+=1)b[a].l(n);n.forEach(c),r=v(i,`\r
\r
Selected breed: `),t=v(i,s[0]),l=F(i),o=j(i,"HR",{"w-full":!0}),m=F(i),h=L(),g.block.l(i),this.h()},h(){S(e,"name",""),S(e,"id",""),s[0]===void 0&&V(()=>s[2].call(e)),S(o,"w-full","")},m(i,n){_(i,e,n);for(let a=0;a<b.length;a+=1)b[a].m(e,null);G(e,s[0]),_(i,r,n),_(i,t,n),_(i,l,n),_(i,o,n),_(i,m,n),_(i,h,n),g.block.m(i,g.anchor=n),g.mount=()=>h.parentNode,g.anchor=h,E||(d=X(e,"change",s[2]),E=!0)},p(i,[n]){if(s=i,n&2){p=s[1];let a;for(a=0;a<p.length;a+=1){const u=we(s,p,a);b[a]?b[a].p(u,n):(b[a]=ve(u),b[a].c(),b[a].m(e,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=p.length}n&3&&G(e,s[0]),n&1&&Z(t,s[0]),g.ctx=s,n&1&&k!==(k=ke(s[0]))&&ue(k,g)||Ie(g,s,n)},i:B,o:B,d(i){i&&c(e),Y(b,i),i&&c(r),i&&c(t),i&&c(l),i&&c(o),i&&c(m),i&&c(h),g.block.d(i),g.token=null,g=null,E=!1,d()}}}async function ke(s){return await(await fetch(`https://dog.ceo/api/breed/${s}/images/random`)).json()}function Ye(s,e,r){let t;const l=["affenpinscher","african","airedale"];function o(){t=x(this),r(0,t),r(1,l)}return[t,l,o]}class xe extends z{constructor(e){super(),J(this,e,Ye,Xe,K,{})}}const et=`<script>\r
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
`;function tt(s){let e;return{c(){e=w("Here we have a component that fetches the selected dog breed as an image using Dog API.")},l(r){e=v(r,"Here we have a component that fetches the selected dog breed as an image using Dog API.")},m(r,t){_(r,e,t)},d(r){r&&c(e)}}}function rt(s){let e;return{c(){e=w("missing image icon")},l(r){e=v(r,"missing image icon")},m(r,t){_(r,e,t)},d(r){r&&c(e)}}}function nt(s){let e,r,t,l;return r=new Se({props:{$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){e=w("Right now it's a bit wonky because every time you change the dog breed you get a "),D(r.$$.fragment),t=w(" while the image is loading.")},l(o){e=v(o,"Right now it's a bit wonky because every time you change the dog breed you get a "),P(r.$$.fragment,o),t=v(o," while the image is loading.")},m(o,m){_(o,e,m),y(r,o,m),_(o,t,m),l=!0},p(o,m){const h={};m&2&&(h.$$scope={dirty:m,ctx:o}),r.$set(h)},i(o){l||(A(r.$$.fragment,o),l=!0)},o(o){R(r.$$.fragment,o),l=!1},d(o){o&&c(e),T(r,o),o&&c(t)}}}function lt(s){let e,r;return e=new Re({}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function st(s){let e;return{c(){e=w("We could try to use another if statement to display a loading text:")},l(r){e=v(r,"We could try to use another if statement to display a loading text:")},m(r,t){_(r,e,t)},d(r){r&&c(e)}}}function ot(s){let e,r;return e=new He({}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ft(s){let e;return{c(){e=w("Maybe an async await version:")},l(r){e=v(r,"Maybe an async await version:")},m(r,t){_(r,e,t)},d(r){r&&c(e)}}}function at(s){let e,r;return e=new Ke({}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function ct(s){let e,r,t;return{c(){e=I("code"),r=w("{#await}"),t=w(" block")},l(l){e=j(l,"CODE",{});var o=M(e);r=v(o,"{#await}"),o.forEach(c),t=v(l," block")},m(l,o){_(l,e,o),C(e,r),_(l,t,o)},p:B,d(l){l&&c(e),l&&c(t)}}}function it(s){let e,r,t,l;return r=new Se({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}}),{c(){e=w("This does work but there is an even better way to do this, we can use the "),D(r.$$.fragment),t=w(".")},l(o){e=v(o,"This does work but there is an even better way to do this, we can use the "),P(r.$$.fragment,o),t=v(o,".")},m(o,m){_(o,e,m),y(r,o,m),_(o,t,m),l=!0},p(o,m){const h={};m&2&&(h.$$scope={dirty:m,ctx:o}),r.$set(h)},i(o){l||(A(r.$$.fragment,o),l=!0)},o(o){R(r.$$.fragment,o),l=!1},d(o){o&&c(e),T(r,o),o&&c(t)}}}function ut(s){let e,r;return e=new xe({}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function pt(s){let e;return{c(){e=w("One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},l(r){e=v(r,"One thing to note is that you can skip some of the blocks if you don't need them, for example the loading text or the error handling.")},m(r,t){_(r,e,t)},d(r){r&&c(e)}}}function mt(s){let e,r,t,l,o,m,h,k,E,d,p,b,g,i,n,a,u,N,H,Q;return e=new W({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),t=new W({props:{$$slots:{default:[nt]},$$scope:{ctx:s}}}),o=new U({props:{code:Te,name:"App.svelte",$$slots:{default:[lt]},$$scope:{ctx:s}}}),h=new W({props:{$$slots:{default:[st]},$$scope:{ctx:s}}}),E=new U({props:{code:Le,name:"App2.svelte",$$slots:{default:[ot]},$$scope:{ctx:s}}}),p=new W({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),g=new U({props:{code:Ze,name:"App3.svelte",$$slots:{default:[at]},$$scope:{ctx:s}}}),n=new W({props:{$$slots:{default:[it]},$$scope:{ctx:s}}}),u=new U({props:{code:et,name:"App4.svelte",$$slots:{default:[ut]},$$scope:{ctx:s}}}),H=new W({props:{$$slots:{default:[pt]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment),r=O(),D(t.$$.fragment),l=O(),D(o.$$.fragment),m=O(),D(h.$$.fragment),k=O(),D(E.$$.fragment),d=O(),D(p.$$.fragment),b=O(),D(g.$$.fragment),i=O(),D(n.$$.fragment),a=O(),D(u.$$.fragment),N=O(),D(H.$$.fragment)},l(f){P(e.$$.fragment,f),r=F(f),P(t.$$.fragment,f),l=F(f),P(o.$$.fragment,f),m=F(f),P(h.$$.fragment,f),k=F(f),P(E.$$.fragment,f),d=F(f),P(p.$$.fragment,f),b=F(f),P(g.$$.fragment,f),i=F(f),P(n.$$.fragment,f),a=F(f),P(u.$$.fragment,f),N=F(f),P(H.$$.fragment,f)},m(f,$){y(e,f,$),_(f,r,$),y(t,f,$),_(f,l,$),y(o,f,$),_(f,m,$),y(h,f,$),_(f,k,$),y(E,f,$),_(f,d,$),y(p,f,$),_(f,b,$),y(g,f,$),_(f,i,$),y(n,f,$),_(f,a,$),y(u,f,$),_(f,N,$),y(H,f,$),Q=!0},p(f,$){const te={};$&2&&(te.$$scope={dirty:$,ctx:f}),e.$set(te);const re={};$&2&&(re.$$scope={dirty:$,ctx:f}),t.$set(re);const ne={};$&2&&(ne.$$scope={dirty:$,ctx:f}),o.$set(ne);const le={};$&2&&(le.$$scope={dirty:$,ctx:f}),h.$set(le);const se={};$&2&&(se.$$scope={dirty:$,ctx:f}),E.$set(se);const oe={};$&2&&(oe.$$scope={dirty:$,ctx:f}),p.$set(oe);const fe={};$&2&&(fe.$$scope={dirty:$,ctx:f}),g.$set(fe);const ae={};$&2&&(ae.$$scope={dirty:$,ctx:f}),n.$set(ae);const ce={};$&2&&(ce.$$scope={dirty:$,ctx:f}),u.$set(ce);const ie={};$&2&&(ie.$$scope={dirty:$,ctx:f}),H.$set(ie)},i(f){Q||(A(e.$$.fragment,f),A(t.$$.fragment,f),A(o.$$.fragment,f),A(h.$$.fragment,f),A(E.$$.fragment,f),A(p.$$.fragment,f),A(g.$$.fragment,f),A(n.$$.fragment,f),A(u.$$.fragment,f),A(H.$$.fragment,f),Q=!0)},o(f){R(e.$$.fragment,f),R(t.$$.fragment,f),R(o.$$.fragment,f),R(h.$$.fragment,f),R(E.$$.fragment,f),R(p.$$.fragment,f),R(g.$$.fragment,f),R(n.$$.fragment,f),R(u.$$.fragment,f),R(H.$$.fragment,f),Q=!1},d(f){T(e,f),f&&c(r),T(t,f),f&&c(l),T(o,f),f&&c(m),T(h,f),f&&c(k),T(E,f),f&&c(d),T(p,f),f&&c(b),T(g,f),f&&c(i),T(n,f),f&&c(a),T(u,f),f&&c(N),T(H,f)}}}function _t(s){let e,r;const t=[s[0],Ee];let l={$$slots:{default:[mt]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)l=ee(l,t[o]);return e=new Be({props:l}),{c(){D(e.$$.fragment)},l(o){P(e.$$.fragment,o)},m(o,m){y(e,o,m),r=!0},p(o,[m]){const h=m&1?je(t,[m&1&&pe(o[0]),m&0&&pe(Ee)]):{};m&2&&(h.$$scope={dirty:m,ctx:o}),e.$set(h)},i(o){r||(A(e.$$.fragment,o),r=!0)},o(o){R(e.$$.fragment,o),r=!1},d(o){T(e,o)}}}const Ee={title:"{#await}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function ht(s,e,r){return s.$$set=t=>{r(0,e=ee(ee({},e),me(t)))},e=me(e),[e]}class wt extends z{constructor(e){super(),J(this,e,ht,_t,K,{})}}export{wt as default,Ee as metadata};
