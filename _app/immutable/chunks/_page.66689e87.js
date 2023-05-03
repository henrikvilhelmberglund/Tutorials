import{S as L,i as A,s as j,q as _,r as d,b as f,u as k,H as E,h as u,o as B,I as K,a as P,k as V,y as b,c as S,l as Z,m as F,z as w,A as x,g as h,d as M,B as g,K as R,L as G,M as O,N as T}from"./index.0b5cc0d7.js";import{M as J,P as C}from"./mdsvex-layout-notes.c527e9b3.js";import{r as Q}from"./index.153ae70b.js";import{S as q}from"./ShowMany.5b53376e.js";function U(i){let e,t,s,a;return{c(){e=_("Mouse position: "),t=_(i[0]),s=_(", "),a=_(i[1])},l(n){e=d(n,"Mouse position: "),t=d(n,i[0]),s=d(n,", "),a=d(n,i[1])},m(n,l){f(n,e,l),f(n,t,l),f(n,s,l),f(n,a,l)},p(n,[l]){l&1&&k(t,n[0]),l&2&&k(a,n[1])},i:E,o:E,d(n){n&&u(e),n&&u(t),n&&u(s),n&&u(a)}}}function W(i,e,t){let s=0,a=0;return B(()=>{function n(l){t(0,s=l.clientX),t(1,a=l.clientY)}return document.body.addEventListener("mousemove",n),()=>{document.body.removeEventListener("mousemove",n)}}),[s,a]}class ee extends L{constructor(e){super(),A(this,e,W,U,j,{})}}const te=`<script>\r
	import { onMount } from "svelte";\r
	let x = 0;\r
	let y = 0;\r
	onMount(() => {\r
		function move(event) {\r
			x = event.clientX;\r
			y = event.clientY;\r
		}\r
		document.body.addEventListener("mousemove", move);\r
		return () => {\r
			document.body.removeEventListener("mousemove", move);\r
		};\r
	});\r
<\/script>\r
\r
Mouse position: {x}, {y}\r
\r
<style>\r
</style>\r
`,N=Q({x:0,y:0},i=>{B(()=>{document.body.addEventListener("mousemove",e);function e(t){i({x:t.clientX,y:t.clientY})}return()=>{document.body.removeEventListener("mousemove",e)}})});function ne(i){let e,t=i[0].x+"",s,a,n=i[0].y+"",l;return{c(){e=_("Child mouse position: "),s=_(t),a=_(", "),l=_(n)},l(m){e=d(m,"Child mouse position: "),s=d(m,t),a=d(m,", "),l=d(m,n)},m(m,$){f(m,e,$),f(m,s,$),f(m,a,$),f(m,l,$)},p(m,[$]){$&1&&t!==(t=m[0].x+"")&&k(s,t),$&1&&n!==(n=m[0].y+"")&&k(l,n)},i:E,o:E,d(m){m&&u(e),m&&u(s),m&&u(a),m&&u(l)}}}function oe(i,e,t){let s;return K(i,N,a=>t(0,s=a)),[s]}class se extends L{constructor(e){super(),A(this,e,oe,ne,j,{})}}function re(i){let e,t=i[0].x+"",s,a,n=i[0].y+"",l,m,$,v,y;return v=new se({}),{c(){e=_("Mouse position: "),s=_(t),a=_(", "),l=_(n),m=P(),$=V("div"),b(v.$$.fragment)},l(r){e=d(r,"Mouse position: "),s=d(r,t),a=d(r,", "),l=d(r,n),m=S(r),$=Z(r,"DIV",{});var c=F($);w(v.$$.fragment,c),c.forEach(u)},m(r,c){f(r,e,c),f(r,s,c),f(r,a,c),f(r,l,c),f(r,m,c),f(r,$,c),x(v,$,null),y=!0},p(r,[c]){(!y||c&1)&&t!==(t=r[0].x+"")&&k(s,t),(!y||c&1)&&n!==(n=r[0].y+"")&&k(l,n)},i(r){y||(h(v.$$.fragment,r),y=!0)},o(r){M(v.$$.fragment,r),y=!1},d(r){r&&u(e),r&&u(s),r&&u(a),r&&u(l),r&&u(m),r&&u($),g(v)}}}function ie(i,e,t){let s;return K(i,N,a=>t(0,s=a)),[s]}class H extends L{constructor(e){super(),A(this,e,ie,re,j,{})}}const le=`<script>\r
	import mousePosition from "./mousePosition";\r
	import Child from "./Child.svelte";\r
<\/script>\r
\r
Mouse position: {$mousePosition.x}, {$mousePosition.y}\r
\r
<div>\r
	<Child />\r
</div>\r
`,me=`<script>\r
	import mousePosition from "./mousePosition";\r
<\/script>\r
\r
Child mouse position: {$mousePosition.x}, {$mousePosition.y}`,ae=`import { onMount } from "svelte";\r
import { readable } from "svelte/store";\r
\r
export default readable({ x: 0, y: 0 }, (set) => {\r
  // slightly jank but need this for SSR to work\r
	onMount(() => {\r
		document.body.addEventListener("mousemove", move);\r
		function move(event) {\r
			set({\r
				x: event.clientX,\r
				y: event.clientY,\r
			});\r
		}\r
		return () => {\r
			document.body.removeEventListener("mousemove", move);\r
		};\r
	});\r
});\r
`;function ue(i){let e;return{c(){e=_("Here we are going to try to convert the following example into a Svelte store:")},l(t){e=d(t,"Here we are going to try to convert the following example into a Svelte store:")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function fe(i){let e;return{c(){e=_("Here it is as a Svelte store:")},l(t){e=d(t,"Here it is as a Svelte store:")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function pe(i){let e;return{c(){e=_("This page has no real explanation because this page basically broke the whole site until I found out you could have on onMount after the export in mousePosition.js (no idea if this is how it should work), but basically this is a readable store that handles DOM events as the store values.")},l(t){e=d(t,"This page has no real explanation because this page basically broke the whole site until I found out you could have on onMount after the export in mousePosition.js (no idea if this is how it should work), but basically this is a readable store that handles DOM events as the store values.")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function $e(i){let e;return{c(){e=_("May revisit later!")},l(t){e=d(t,"May revisit later!")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function ce(i){let e,t,s,a,n,l,m,$,v,y,r,c;return e=new C({props:{$$slots:{default:[ue]},$$scope:{ctx:i}}}),s=new q({props:{name:[{name:"App.svelte",comp:ee,raw:te,text:""}]}}),n=new C({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}}),m=new q({props:{name:[{name:"App2.svelte",comp:H,raw:le,text:""},{name:"Child.svelte",comp:H,raw:me,text:""},{name:"mousePosition.js",comp:H,raw:ae,text:""}]}}),v=new C({props:{$$slots:{default:[pe]},$$scope:{ctx:i}}}),r=new C({props:{$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){b(e.$$.fragment),t=P(),b(s.$$.fragment),a=P(),b(n.$$.fragment),l=P(),b(m.$$.fragment),$=P(),b(v.$$.fragment),y=P(),b(r.$$.fragment)},l(o){w(e.$$.fragment,o),t=S(o),w(s.$$.fragment,o),a=S(o),w(n.$$.fragment,o),l=S(o),w(m.$$.fragment,o),$=S(o),w(v.$$.fragment,o),y=S(o),w(r.$$.fragment,o)},m(o,p){x(e,o,p),f(o,t,p),x(s,o,p),f(o,a,p),x(n,o,p),f(o,l,p),x(m,o,p),f(o,$,p),x(v,o,p),f(o,y,p),x(r,o,p),c=!0},p(o,p){const D={};p&4&&(D.$$scope={dirty:p,ctx:o}),e.$set(D);const I={};p&4&&(I.$$scope={dirty:p,ctx:o}),n.$set(I);const X={};p&4&&(X.$$scope={dirty:p,ctx:o}),v.$set(X);const Y={};p&4&&(Y.$$scope={dirty:p,ctx:o}),r.$set(Y)},i(o){c||(h(e.$$.fragment,o),h(s.$$.fragment,o),h(n.$$.fragment,o),h(m.$$.fragment,o),h(v.$$.fragment,o),h(r.$$.fragment,o),c=!0)},o(o){M(e.$$.fragment,o),M(s.$$.fragment,o),M(n.$$.fragment,o),M(m.$$.fragment,o),M(v.$$.fragment,o),M(r.$$.fragment,o),c=!1},d(o){g(e,o),o&&u(t),g(s,o),o&&u(a),g(n,o),o&&u(l),g(m,o),o&&u($),g(v,o),o&&u(y),g(r,o)}}}function ve(i){let e,t;const s=[i[0],z];let a={$$slots:{default:[ce]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)a=R(a,s[n]);return e=new J({props:a}),{c(){b(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,l){x(e,n,l),t=!0},p(n,[l]){const m=l&1?G(s,[l&1&&O(n[0]),l&0&&O(z)]):{};l&4&&(m.$$scope={dirty:l,ctx:n}),e.$set(m)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){M(e.$$.fragment,n),t=!1},d(n){g(e,n)}}}const z={title:"DOM events as a Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function _e(i,e,t){return i.$$set=s=>{t(0,e=R(R({},e),T(s)))},e=T(e),[e]}class xe extends L{constructor(e){super(),A(this,e,_e,ve,j,{})}}export{xe as default,z as metadata};
