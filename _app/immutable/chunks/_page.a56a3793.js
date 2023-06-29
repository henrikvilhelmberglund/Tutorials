import{s as S,f as H,a as y,l as f,g as b,c as A,h as R,d as m,m as $,i as p,a8 as M,X as U,ae as V,I as j,n as q,z as L,H as X,C as k,D as z}from"./scheduler.a7cd560e.js";import{S as T,i as I,b as d,d as _,m as h,a as g,t as w,e as v}from"./index.396264e7.js";import{g as B,a as C}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as F,P as E}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as N}from"./ShowMany.db7be1f3.js";import{S as Z}from"./Strong.097578ae.js";function G(o){let e,a,r,l,n,s,u,c;return{c(){e=H("input"),a=y(),r=H("div"),n=f(`\r
\r
name: `),s=f(o[0])},l(t){e=b(t,"INPUT",{}),a=A(t),r=b(t,"DIV",{}),R(r).forEach(m),n=$(t,`\r
\r
name: `),s=$(t,o[0])},m(t,i){p(t,e,i),M(e,o[0]),p(t,a,i),p(t,r,i),p(t,n,i),p(t,s,i),u||(c=[U(e,"input",o[1]),V(l=J.call(null,r,o[0]))],u=!0)},p(t,[i]){i&1&&e.value!==t[0]&&M(e,t[0]),l&&j(l.update)&&i&1&&l.update.call(null,t[0]),i&1&&q(s,t[0])},i:L,o:L,d(t){t&&(m(e),m(a),m(r),m(n),m(s)),u=!1,X(c)}}}function J(o,e){return console.log(o,e),o.innerHTML=e,{destroy(){console.log("node was destroyed")}}}function K(o,e,a){let r="world";function l(){r=this.value,a(0,r)}return[r,l]}class Q extends T{constructor(e){super(),I(this,e,K,G,S,{})}}const W=`<script>\r
	let name = "world";\r
\r
	function lihauAction(node, params) {\r
		console.log(node, params);\r
		node.innerHTML = params;\r
		return {\r
			destroy() {\r
				console.log("node was destroyed");\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input bind:value={name} />\r
\r
<div use:lihauAction={name} />\r
\r
name: {name}\r
\r
<style>\r
</style>\r
`;function Y(o){let e,a,r,l,n,s,u,c;return{c(){e=H("input"),a=y(),r=H("div"),n=f(`\r
\r
name: `),s=f(o[0])},l(t){e=b(t,"INPUT",{}),a=A(t),r=b(t,"DIV",{}),R(r).forEach(m),n=$(t,`\r
\r
name: `),s=$(t,o[0])},m(t,i){p(t,e,i),M(e,o[0]),p(t,a,i),p(t,r,i),p(t,n,i),p(t,s,i),u||(c=[U(e,"input",o[1]),V(l=x.call(null,r,o[0]))],u=!0)},p(t,[i]){i&1&&e.value!==t[0]&&M(e,t[0]),l&&j(l.update)&&i&1&&l.update.call(null,t[0]),i&1&&q(s,t[0])},i:L,o:L,d(t){t&&(m(e),m(a),m(r),m(n),m(s)),u=!1,X(c)}}}function x(o,e){return console.log(o,e),o.innerHTML=e,{update(a){console.log("updated!",a),o.innerHTML=a},destroy(){console.log("node was destroyed")}}}function ee(o,e,a){let r="world";function l(){r=this.value,a(0,r)}return[r,l]}class te extends T{constructor(e){super(),I(this,e,ee,Y,S,{})}}const ne=`<script>\r
	let name = "world";\r
\r
	function lihauAction(node, params) {\r
		console.log(node, params);\r
		node.innerHTML = params;\r
		return {\r
			update(newParams) {\r
				console.log("updated!", newParams);\r
				node.innerHTML = newParams;\r
			},\r
			destroy() {\r
				console.log("node was destroyed");\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input bind:value={name} />\r
\r
<div use:lihauAction={name} />\r
\r
name: {name}\r
\r
<style>\r
</style>\r
`;function ae(o){let e;return{c(){e=f("initialized")},l(a){e=$(a,"initialized")},m(a,r){p(a,e,r)},d(a){a&&m(e)}}}function re(o){let e,a,r,l;return a=new Z({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){e=f("As we said before, Svelte actions are run when the component is "),d(a.$$.fragment),r=f(" (mounted to the DOM). How do we make a dynamic parameter then? How do we make the action do something when the variable changes?")},l(n){e=$(n,"As we said before, Svelte actions are run when the component is "),_(a.$$.fragment,n),r=$(n," (mounted to the DOM). How do we make a dynamic parameter then? How do we make the action do something when the variable changes?")},m(n,s){p(n,e,s),h(a,n,s),p(n,r,s),l=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),a.$set(u)},i(n){l||(g(a.$$.fragment,n),l=!0)},o(n){w(a.$$.fragment,n),l=!1},d(n){n&&(m(e),m(r)),v(a,n)}}}function se(o){let e;return{c(){e=f("update()")},l(a){e=$(a,"update()")},m(a,r){p(a,e,r)},d(a){a&&m(e)}}}function oe(o){let e,a,r,l;return a=new Z({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){e=f("Luckily for us you can have another function in the action return statement called "),d(a.$$.fragment),r=f(". It will run every time the params change. Let's try it!")},l(n){e=$(n,"Luckily for us you can have another function in the action return statement called "),_(a.$$.fragment,n),r=$(n,". It will run every time the params change. Let's try it!")},m(n,s){p(n,e,s),h(a,n,s),p(n,r,s),l=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),a.$set(u)},i(n){l||(g(a.$$.fragment,n),l=!0)},o(n){w(a.$$.fragment,n),l=!1},d(n){n&&(m(e),m(r)),v(a,n)}}}function le(o){let e,a,r,l,n,s,u,c;return e=new E({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),r=new N({props:{name:[{name:"App",comp:Q,raw:W,text:"Here our div using an action doesn't update when we change the name."}]}}),n=new E({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),u=new N({props:{name:[{name:"App2",comp:te,raw:ne,text:"If we add an update() function in the return statement we can do something when the params change."}]}}),{c(){d(e.$$.fragment),a=y(),d(r.$$.fragment),l=y(),d(n.$$.fragment),s=y(),d(u.$$.fragment)},l(t){_(e.$$.fragment,t),a=A(t),_(r.$$.fragment,t),l=A(t),_(n.$$.fragment,t),s=A(t),_(u.$$.fragment,t)},m(t,i){h(e,t,i),p(t,a,i),h(r,t,i),p(t,l,i),h(n,t,i),p(t,s,i),h(u,t,i),c=!0},p(t,i){const D={};i&2&&(D.$$scope={dirty:i,ctx:t}),e.$set(D);const P={};i&2&&(P.$$scope={dirty:i,ctx:t}),n.$set(P)},i(t){c||(g(e.$$.fragment,t),g(r.$$.fragment,t),g(n.$$.fragment,t),g(u.$$.fragment,t),c=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),w(n.$$.fragment,t),w(u.$$.fragment,t),c=!1},d(t){t&&(m(a),m(l),m(s)),v(e,t),v(r,t),v(n,t),v(u,t)}}}function ie(o){let e,a;const r=[o[0],O];let l={$$slots:{default:[le]},$$scope:{ctx:o}};for(let n=0;n<r.length;n+=1)l=k(l,r[n]);return e=new F({props:l}),{c(){d(e.$$.fragment)},l(n){_(e.$$.fragment,n)},m(n,s){h(e,n,s),a=!0},p(n,[s]){const u=s&1?B(r,[s&1&&C(n[0]),s&0&&C(O)]):{};s&2&&(u.$$scope={dirty:s,ctx:n}),e.$set(u)},i(n){a||(g(e.$$.fragment,n),a=!0)},o(n){w(e.$$.fragment,n),a=!1},d(n){v(e,n)}}}const O={title:"Dynamic parameters in Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function ue(o,e,a){return o.$$set=r=>{a(0,e=k(k({},e),z(r)))},e=z(e),[e]}class _e extends T{constructor(e){super(),I(this,e,ue,ie,S,{})}}export{_e as default,O as metadata};
