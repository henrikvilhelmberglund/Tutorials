import{s as N,f as $,a as T,g,c as x,a2 as U,d as u,j as h,i as f,a8 as b,v as k,X as W,z as S,Y as Z,e as z,Z as D,u as X,C as L,D as q,l as y,m as w}from"./scheduler.a7cd560e.js";import{S as P,i as H,b as A,d as K,m as M,a as C,t as E,e as I}from"./index.396264e7.js";import{g as Y,a as O}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as B,P as F}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as G}from"./ShowMany.db7be1f3.js";import{S as J}from"./Strong.097578ae.js";function Q(m){let e,s,n,o,t,r;return document.title=n=m[0],{c(){e=$("input"),s=T(),o=$("meta"),this.h()},l(a){e=g(a,"INPUT",{}),s=x(a);const i=U("svelte-184e275",document.head);o=g(i,"META",{name:!0,content:!0}),i.forEach(u),this.h()},h(){h(o,"name","description"),h(o,"content",m[0])},m(a,i){f(a,e,i),b(e,m[0]),f(a,s,i),k(document.head,o),t||(r=W(e,"input",m[1]),t=!0)},p(a,[i]){i&1&&e.value!==a[0]&&b(e,a[0]),i&1&&n!==(n=a[0])&&(document.title=n),i&1&&h(o,"content",a[0])},i:S,o:S,d(a){a&&(u(e),u(s)),u(o),t=!1,r()}}}function V(m,e,s){let n="world";function o(){n=this.value,s(0,n)}return[n,o]}class ee extends P{constructor(e){super(),H(this,e,V,Q,N,{})}}const te=`<script>\r
	let name = "world";\r
<\/script>\r
\r
<input bind:value={name} />\r
<svelte:head>\r
	<title>{name}</title>\r
	<meta name="description" content={name} />\r
</svelte:head>\r
\r
<style>\r
</style>\r
`;function ne(m){let e,s,n,o,t=`<style>:root { --font-color: ${m[0]}}</style>`,r,a,i,_,l,d="This is some fancy text!",v,j;return{c(){e=$("link"),s=$("link"),n=$("link"),o=new Z(!1),r=z(),a=T(),i=$("input"),_=T(),l=$("p"),l.textContent=d,this.h()},l(c){const p=U("svelte-pq1zee",document.head);e=g(p,"LINK",{rel:!0,href:!0}),s=g(p,"LINK",{rel:!0,href:!0,crossorigin:!0}),n=g(p,"LINK",{href:!0,rel:!0}),o=D(p,!1),r=z(),p.forEach(u),a=x(c),i=g(c,"INPUT",{placeholder:!0}),_=x(c),l=g(c,"P",{class:!0,["data-svelte-h"]:!0}),X(l)!=="svelte-9rwkvt"&&(l.textContent=d),this.h()},h(){h(e,"rel","preconnect"),h(e,"href","https://fonts.googleapis.com"),h(s,"rel","preconnect"),h(s,"href","https://fonts.gstatic.com"),h(s,"crossorigin",""),h(n,"href","https://fonts.googleapis.com/css2?family=Kablammo&display=swap"),h(n,"rel","stylesheet"),o.a=r,h(i,"placeholder","Try typing a color like red!"),h(l,"class","fancy-text svelte-p7fjte")},m(c,p){k(document.head,e),k(document.head,s),k(document.head,n),o.m(t,document.head),k(document.head,r),f(c,a,p),f(c,i,p),b(i,m[0]),f(c,_,p),f(c,l,p),v||(j=W(i,"input",m[1]),v=!0)},p(c,[p]){p&1&&t!==(t=`<style>:root { --font-color: ${c[0]}}</style>`)&&o.p(t),p&1&&i.value!==c[0]&&b(i,c[0])},i:S,o:S,d(c){c&&(o.d(),u(a),u(i),u(_),u(l)),u(e),u(s),u(n),u(r),v=!1,j()}}}function se(m,e,s){let n="";function o(){n=this.value,s(0,n)}return[n,o]}class ae extends P{constructor(e){super(),H(this,e,se,ne,N,{})}}const le=`<script>\r
	let name = "";\r
<\/script>\r
\r
<svelte:head>\r
	<link rel="preconnect" href="https://fonts.googleapis.com" />\r
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\r
	<link href="https://fonts.googleapis.com/css2?family=Kablammo&display=swap" rel="stylesheet" />\r
	{@html \`<style>:root { --font-color: \${name}}</style>\`}\r
</svelte:head>\r
\r
<input bind:value={name} placeholder="Try typing a color like red!" />\r
<p class="fancy-text">This is some fancy text!</p>\r
\r
<style>\r
	.fancy-text {\r
		font-family: "Kablammo", cursive;\r
		font-size: 3rem;\r
		color: var(--font-color);\r
	}\r
</style>\r
`;function oe(m){let e;return{c(){e=y("HTML head tag")},l(s){e=w(s,"HTML head tag")},m(s,n){f(s,e,n)},d(s){s&&u(e)}}}function re(m){let e="<",s,n,o=">",t,r,a,i,_;return a=new J({props:{$$slots:{default:[oe]},$$scope:{ctx:m}}}),{c(){s=y(e),n=y("svelte:head"),t=y(o),r=y(" is used when we want to add something in the "),A(a.$$.fragment),i=y(" in our Svelte component. This is useful for SEO.")},l(l){s=w(l,e),n=w(l,"svelte:head"),t=w(l,o),r=w(l," is used when we want to add something in the "),K(a.$$.fragment,l),i=w(l," in our Svelte component. This is useful for SEO.")},m(l,d){f(l,s,d),f(l,n,d),f(l,t,d),f(l,r,d),M(a,l,d),f(l,i,d),_=!0},p(l,d){const v={};d&2&&(v.$$scope={dirty:d,ctx:l}),a.$set(v)},i(l){_||(C(a.$$.fragment,l),_=!0)},o(l){E(a.$$.fragment,l),_=!1},d(l){l&&(u(s),u(n),u(t),u(r),u(i)),I(a,l)}}}function ie(m){let e,s,n,o;return e=new F({props:{$$slots:{default:[re]},$$scope:{ctx:m}}}),n=new G({props:{name:[{name:"App",comp:ee,raw:te,text:"We can dynamically change the title or metadata of the page."},{name:"App2",comp:ae,raw:le,text:"We can also load our fancy fonts."}]}}),{c(){A(e.$$.fragment),s=T(),A(n.$$.fragment)},l(t){K(e.$$.fragment,t),s=x(t),K(n.$$.fragment,t)},m(t,r){M(e,t,r),f(t,s,r),M(n,t,r),o=!0},p(t,r){const a={};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){o||(C(e.$$.fragment,t),C(n.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(n.$$.fragment,t),o=!1},d(t){t&&u(s),I(e,t),I(n,t)}}}function me(m){let e,s;const n=[m[0],R];let o={$$slots:{default:[ie]},$$scope:{ctx:m}};for(let t=0;t<n.length;t+=1)o=L(o,n[t]);return e=new B({props:o}),{c(){A(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,r){M(e,t,r),s=!0},p(t,[r]){const a=r&1?Y(n,[r&1&&O(t[0]),r&0&&O(R)]):{};r&2&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}const R={title:"<svelte:head>",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-06-19T00:00:00.000Z",layout:"notes"};function ue(m,e,s){return m.$$set=n=>{s(0,e=L(L({},e),q(n)))},e=q(e),[e]}class $e extends P{constructor(e){super(),H(this,e,ue,me,N,{})}}export{$e as default,R as metadata};
