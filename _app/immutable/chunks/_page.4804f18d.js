import{S as T,i as S,s as I,k as H,a as y,q as c,l as M,c as A,m as O,h as m,r as $,b as f,a2 as b,T as U,aa as V,R as j,u as B,H as L,Q as C,K as k,y as _,z as d,A as w,L as Q,M as z,g as h,d as g,B as v,N}from"./index.0b5cc0d7.js";import{M as Z,P as R}from"./mdsvex-layout-notes.c527e9b3.js";import{S as q}from"./ShowMany.5b53376e.js";import{S as K}from"./Strong.272c5f79.js";function F(o){let t,a,r,l,n,s,u,p;return{c(){t=H("input"),a=y(),r=H("div"),n=c(`\r
\r
name: `),s=c(o[0])},l(e){t=M(e,"INPUT",{}),a=A(e),r=M(e,"DIV",{}),O(r).forEach(m),n=$(e,`\r
\r
name: `),s=$(e,o[0])},m(e,i){f(e,t,i),b(t,o[0]),f(e,a,i),f(e,r,i),f(e,n,i),f(e,s,i),u||(p=[U(t,"input",o[1]),V(l=G.call(null,r,o[0]))],u=!0)},p(e,[i]){i&1&&t.value!==e[0]&&b(t,e[0]),l&&j(l.update)&&i&1&&l.update.call(null,e[0]),i&1&&B(s,e[0])},i:L,o:L,d(e){e&&m(t),e&&m(a),e&&m(r),e&&m(n),e&&m(s),u=!1,C(p)}}}function G(o,t){return console.log(o,t),o.innerHTML=t,{destroy(){console.log("node was destroyed")}}}function J(o,t,a){let r="world";function l(){r=this.value,a(0,r)}return[r,l]}class W extends T{constructor(t){super(),S(this,t,J,F,I,{})}}const X=`<script>\r
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
`;function Y(o){let t,a,r,l,n,s,u,p;return{c(){t=H("input"),a=y(),r=H("div"),n=c(`\r
\r
name: `),s=c(o[0])},l(e){t=M(e,"INPUT",{}),a=A(e),r=M(e,"DIV",{}),O(r).forEach(m),n=$(e,`\r
\r
name: `),s=$(e,o[0])},m(e,i){f(e,t,i),b(t,o[0]),f(e,a,i),f(e,r,i),f(e,n,i),f(e,s,i),u||(p=[U(t,"input",o[1]),V(l=x.call(null,r,o[0]))],u=!0)},p(e,[i]){i&1&&t.value!==e[0]&&b(t,e[0]),l&&j(l.update)&&i&1&&l.update.call(null,e[0]),i&1&&B(s,e[0])},i:L,o:L,d(e){e&&m(t),e&&m(a),e&&m(r),e&&m(n),e&&m(s),u=!1,C(p)}}}function x(o,t){return console.log(o,t),o.innerHTML=t,{update(a){console.log("updated!",a),o.innerHTML=a},destroy(){console.log("node was destroyed")}}}function ee(o,t,a){let r="world";function l(){r=this.value,a(0,r)}return[r,l]}class te extends T{constructor(t){super(),S(this,t,ee,Y,I,{})}}const ne=`<script>\r
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
`;function ae(o){let t;return{c(){t=c("initialized")},l(a){t=$(a,"initialized")},m(a,r){f(a,t,r)},d(a){a&&m(t)}}}function re(o){let t,a,r,l;return a=new K({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){t=c("As we said before, Svelte actions are run when the component is "),_(a.$$.fragment),r=c(" (mounted to the DOM). How do we make a dynamic parameter then? How do we make the action do something when the variable changes?")},l(n){t=$(n,"As we said before, Svelte actions are run when the component is "),d(a.$$.fragment,n),r=$(n," (mounted to the DOM). How do we make a dynamic parameter then? How do we make the action do something when the variable changes?")},m(n,s){f(n,t,s),w(a,n,s),f(n,r,s),l=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),a.$set(u)},i(n){l||(h(a.$$.fragment,n),l=!0)},o(n){g(a.$$.fragment,n),l=!1},d(n){n&&m(t),v(a,n),n&&m(r)}}}function se(o){let t;return{c(){t=c("update()")},l(a){t=$(a,"update()")},m(a,r){f(a,t,r)},d(a){a&&m(t)}}}function oe(o){let t,a,r,l;return a=new K({props:{$$slots:{default:[se]},$$scope:{ctx:o}}}),{c(){t=c("Luckily for us you can have another function in the action return statement called "),_(a.$$.fragment),r=c(". It will run every time the params change. Let's try it!")},l(n){t=$(n,"Luckily for us you can have another function in the action return statement called "),d(a.$$.fragment,n),r=$(n,". It will run every time the params change. Let's try it!")},m(n,s){f(n,t,s),w(a,n,s),f(n,r,s),l=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),a.$set(u)},i(n){l||(h(a.$$.fragment,n),l=!0)},o(n){g(a.$$.fragment,n),l=!1},d(n){n&&m(t),v(a,n),n&&m(r)}}}function le(o){let t,a,r,l,n,s,u,p;return t=new R({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),r=new q({props:{name:[{name:"App",comp:W,raw:X,text:"Here our div using an action doesn't update when we change the name."}]}}),n=new R({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),u=new q({props:{name:[{name:"App2",comp:te,raw:ne,text:"If we add an update() function in the return statement we can do something when the params change."}]}}),{c(){_(t.$$.fragment),a=y(),_(r.$$.fragment),l=y(),_(n.$$.fragment),s=y(),_(u.$$.fragment)},l(e){d(t.$$.fragment,e),a=A(e),d(r.$$.fragment,e),l=A(e),d(n.$$.fragment,e),s=A(e),d(u.$$.fragment,e)},m(e,i){w(t,e,i),f(e,a,i),w(r,e,i),f(e,l,i),w(n,e,i),f(e,s,i),w(u,e,i),p=!0},p(e,i){const P={};i&2&&(P.$$scope={dirty:i,ctx:e}),t.$set(P);const D={};i&2&&(D.$$scope={dirty:i,ctx:e}),n.$set(D)},i(e){p||(h(t.$$.fragment,e),h(r.$$.fragment,e),h(n.$$.fragment,e),h(u.$$.fragment,e),p=!0)},o(e){g(t.$$.fragment,e),g(r.$$.fragment,e),g(n.$$.fragment,e),g(u.$$.fragment,e),p=!1},d(e){v(t,e),e&&m(a),v(r,e),e&&m(l),v(n,e),e&&m(s),v(u,e)}}}function ie(o){let t,a;const r=[o[0],E];let l={$$slots:{default:[le]},$$scope:{ctx:o}};for(let n=0;n<r.length;n+=1)l=k(l,r[n]);return t=new Z({props:l}),{c(){_(t.$$.fragment)},l(n){d(t.$$.fragment,n)},m(n,s){w(t,n,s),a=!0},p(n,[s]){const u=s&1?Q(r,[s&1&&z(n[0]),s&0&&z(E)]):{};s&2&&(u.$$scope={dirty:s,ctx:n}),t.$set(u)},i(n){a||(h(t.$$.fragment,n),a=!0)},o(n){g(t.$$.fragment,n),a=!1},d(n){v(t,n)}}}const E={title:"Dynamic parameters in Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function ue(o,t,a){return o.$$set=r=>{a(0,t=k(k({},t),N(r)))},t=N(t),[t]}class $e extends T{constructor(t){super(),S(this,t,ue,ie,I,{})}}export{$e as default,E as metadata};
