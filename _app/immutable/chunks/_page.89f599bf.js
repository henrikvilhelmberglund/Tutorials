import{s as L,l as _,m as d,i as f,n as S,z as E,d as u,o as V,A as Z,a as P,f as F,c as C,g as G,h as J,C as R,D as O}from"./scheduler.a7cd560e.js";import{S as A,i as j,b as g,d as y,m as b,a as w,t as x,e as M}from"./index.396264e7.js";import{g as K,a as T}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as N,P as k}from"./mdsvex-layout-notes.4b2b7ac6.js";import{r as Q}from"./index.5e192797.js";import{S as q}from"./ShowMany.db7be1f3.js";function U(r){let e,t,s,a;return{c(){e=_("Mouse position: "),t=_(r[0]),s=_(", "),a=_(r[1])},l(n){e=d(n,"Mouse position: "),t=d(n,r[0]),s=d(n,", "),a=d(n,r[1])},m(n,i){f(n,e,i),f(n,t,i),f(n,s,i),f(n,a,i)},p(n,[i]){i&1&&S(t,n[0]),i&2&&S(a,n[1])},i:E,o:E,d(n){n&&(u(e),u(t),u(s),u(a))}}}function W(r,e,t){let s=0,a=0;return V(()=>{function n(i){t(0,s=i.clientX),t(1,a=i.clientY)}return document.body.addEventListener("mousemove",n),()=>{document.body.removeEventListener("mousemove",n)}}),[s,a]}class ee extends A{constructor(e){super(),j(this,e,W,U,L,{})}}const te=`<script>\r
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
`,B=Q({x:0,y:0},r=>{V(()=>{document.body.addEventListener("mousemove",e);function e(t){r({x:t.clientX,y:t.clientY})}return()=>{document.body.removeEventListener("mousemove",e)}})});function ne(r){let e,t=r[0].x+"",s,a,n=r[0].y+"",i;return{c(){e=_("Child mouse position: "),s=_(t),a=_(", "),i=_(n)},l(m){e=d(m,"Child mouse position: "),s=d(m,t),a=d(m,", "),i=d(m,n)},m(m,$){f(m,e,$),f(m,s,$),f(m,a,$),f(m,i,$)},p(m,[$]){$&1&&t!==(t=m[0].x+"")&&S(s,t),$&1&&n!==(n=m[0].y+"")&&S(i,n)},i:E,o:E,d(m){m&&(u(e),u(s),u(a),u(i))}}}function oe(r,e,t){let s;return Z(r,B,a=>t(0,s=a)),[s]}class se extends A{constructor(e){super(),j(this,e,oe,ne,L,{})}}function re(r){let e,t=r[0].x+"",s,a,n=r[0].y+"",i,m,$,v,h;return v=new se({}),{c(){e=_("Mouse position: "),s=_(t),a=_(", "),i=_(n),m=P(),$=F("div"),g(v.$$.fragment)},l(l){e=d(l,"Mouse position: "),s=d(l,t),a=d(l,", "),i=d(l,n),m=C(l),$=G(l,"DIV",{});var c=J($);y(v.$$.fragment,c),c.forEach(u)},m(l,c){f(l,e,c),f(l,s,c),f(l,a,c),f(l,i,c),f(l,m,c),f(l,$,c),b(v,$,null),h=!0},p(l,[c]){(!h||c&1)&&t!==(t=l[0].x+"")&&S(s,t),(!h||c&1)&&n!==(n=l[0].y+"")&&S(i,n)},i(l){h||(w(v.$$.fragment,l),h=!0)},o(l){x(v.$$.fragment,l),h=!1},d(l){l&&(u(e),u(s),u(a),u(i),u(m),u($)),M(v)}}}function ie(r,e,t){let s;return Z(r,B,a=>t(0,s=a)),[s]}class D extends A{constructor(e){super(),j(this,e,ie,re,L,{})}}const ae=`<script>\r
	import mousePosition from "./mousePosition";\r
	import Child from "./Child.svelte";\r
<\/script>\r
\r
Mouse position: {$mousePosition.x}, {$mousePosition.y}\r
\r
<div>\r
	<Child />\r
</div>\r
`,le=`<script>\r
	import mousePosition from "./mousePosition";\r
<\/script>\r
\r
Child mouse position: {$mousePosition.x}, {$mousePosition.y}`,me=`import { onMount } from "svelte";\r
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
`;function ue(r){let e;return{c(){e=_("Here we are going to try to convert the following example into a Svelte store:")},l(t){e=d(t,"Here we are going to try to convert the following example into a Svelte store:")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function fe(r){let e;return{c(){e=_("Here it is as a Svelte store:")},l(t){e=d(t,"Here it is as a Svelte store:")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function pe(r){let e;return{c(){e=_("This page has no real explanation because this page basically broke the whole site until I found out you could have on onMount after the export in mousePosition.js (no idea if this is how it should work), but basically this is a readable store that handles DOM events as the store values.")},l(t){e=d(t,"This page has no real explanation because this page basically broke the whole site until I found out you could have on onMount after the export in mousePosition.js (no idea if this is how it should work), but basically this is a readable store that handles DOM events as the store values.")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function $e(r){let e;return{c(){e=_("May revisit later!")},l(t){e=d(t,"May revisit later!")},m(t,s){f(t,e,s)},d(t){t&&u(e)}}}function ce(r){let e,t,s,a,n,i,m,$,v,h,l,c;return e=new k({props:{$$slots:{default:[ue]},$$scope:{ctx:r}}}),s=new q({props:{name:[{name:"App.svelte",comp:ee,raw:te,text:""}]}}),n=new k({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),m=new q({props:{name:[{name:"App2.svelte",comp:D,raw:ae,text:""},{name:"Child.svelte",comp:D,raw:le,text:""},{name:"mousePosition.js",comp:D,raw:me,text:""}]}}),v=new k({props:{$$slots:{default:[pe]},$$scope:{ctx:r}}}),l=new k({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){g(e.$$.fragment),t=P(),g(s.$$.fragment),a=P(),g(n.$$.fragment),i=P(),g(m.$$.fragment),$=P(),g(v.$$.fragment),h=P(),g(l.$$.fragment)},l(o){y(e.$$.fragment,o),t=C(o),y(s.$$.fragment,o),a=C(o),y(n.$$.fragment,o),i=C(o),y(m.$$.fragment,o),$=C(o),y(v.$$.fragment,o),h=C(o),y(l.$$.fragment,o)},m(o,p){b(e,o,p),f(o,t,p),b(s,o,p),f(o,a,p),b(n,o,p),f(o,i,p),b(m,o,p),f(o,$,p),b(v,o,p),f(o,h,p),b(l,o,p),c=!0},p(o,p){const H={};p&4&&(H.$$scope={dirty:p,ctx:o}),e.$set(H);const X={};p&4&&(X.$$scope={dirty:p,ctx:o}),n.$set(X);const Y={};p&4&&(Y.$$scope={dirty:p,ctx:o}),v.$set(Y);const I={};p&4&&(I.$$scope={dirty:p,ctx:o}),l.$set(I)},i(o){c||(w(e.$$.fragment,o),w(s.$$.fragment,o),w(n.$$.fragment,o),w(m.$$.fragment,o),w(v.$$.fragment,o),w(l.$$.fragment,o),c=!0)},o(o){x(e.$$.fragment,o),x(s.$$.fragment,o),x(n.$$.fragment,o),x(m.$$.fragment,o),x(v.$$.fragment,o),x(l.$$.fragment,o),c=!1},d(o){o&&(u(t),u(a),u(i),u($),u(h)),M(e,o),M(s,o),M(n,o),M(m,o),M(v,o),M(l,o)}}}function ve(r){let e,t;const s=[r[0],z];let a={$$slots:{default:[ce]},$$scope:{ctx:r}};for(let n=0;n<s.length;n+=1)a=R(a,s[n]);return e=new N({props:a}),{c(){g(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){b(e,n,i),t=!0},p(n,[i]){const m=i&1?K(s,[i&1&&T(n[0]),i&0&&T(z)]):{};i&4&&(m.$$scope={dirty:i,ctx:n}),e.$set(m)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}const z={title:"DOM events as a Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function _e(r,e,t){return r.$$set=s=>{t(0,e=R(R({},e),O(s)))},e=O(e),[e]}class xe extends A{constructor(e){super(),j(this,e,_e,ve,L,{})}}export{xe as default,z as metadata};
