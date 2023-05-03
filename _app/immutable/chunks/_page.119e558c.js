import{S as L,i as Q,s as Z,k as D,a as k,q as _,l as S,m as T,h as l,c as I,r as v,p as w,b as m,D as F,aa as G,T as j,H as N,Q as J,K as W,y as g,z as d,A as b,L as U,M as q,g as x,d as y,B as V,N as P}from"./index.0b5cc0d7.js";import{M as X,P as R}from"./mdsvex-layout-notes.c527e9b3.js";import{S as Y}from"./ShowMany.5b53376e.js";import{S as z}from"./Strong.272c5f79.js";let H;function ee(){H||(H=new IntersectionObserver(p=>{p.forEach(e=>{const n=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(n))})}))}function te(p){return ee(),H.observe(p),{destroy(){H.unobserve(p)}}}function ne(p){let e,n,o,f,s,a,t,u,r,$,E,h,O,A,M,C;return{c(){e=D("div"),n=k(),o=D("div"),f=k(),s=D("div"),a=k(),t=D("h1"),u=_("Hello world!"),r=k(),$=D("div"),E=k(),h=D("div"),O=k(),A=D("div"),this.h()},l(i){e=S(i,"DIV",{style:!0}),T(e).forEach(l),n=I(i),o=S(i,"DIV",{style:!0}),T(o).forEach(l),f=I(i),s=S(i,"DIV",{style:!0}),T(s).forEach(l),a=I(i),t=S(i,"H1",{});var c=T(t);u=v(c,"Hello world!"),c.forEach(l),r=I(i),$=S(i,"DIV",{style:!0}),T($).forEach(l),E=I(i),h=S(i,"DIV",{style:!0}),T(h).forEach(l),O=I(i),A=S(i,"DIV",{style:!0}),T(A).forEach(l),this.h()},h(){w(e,"height","200px"),w(e,"background","red"),w(o,"height","200px"),w(o,"background","blue"),w(s,"height","200px"),w(s,"background","green"),w($,"height","200px"),w($,"background","red"),w(h,"height","200px"),w(h,"background","blue"),w(A,"height","200px"),w(A,"background","green")},m(i,c){m(i,e,c),m(i,n,c),m(i,o,c),m(i,f,c),m(i,s,c),m(i,a,c),m(i,t,c),F(t,u),m(i,r,c),m(i,$,c),m(i,E,c),m(i,h,c),m(i,O,c),m(i,A,c),M||(C=[G(te.call(null,t)),j(t,"enterViewport",p[0]),j(t,"exitViewport",p[1])],M=!0)},p:N,i:N,o:N,d(i){i&&l(e),i&&l(n),i&&l(o),i&&l(f),i&&l(s),i&&l(a),i&&l(t),i&&l(r),i&&l($),i&&l(E),i&&l(h),i&&l(O),i&&l(A),M=!1,J(C)}}}function re(p){return[()=>console.log("entered viewport"),()=>console.log("exited viewport")]}class B extends L{constructor(e){super(),Q(this,e,re,ne,Z,{})}}const se=`<script>\r
	import viewport from "./useViewportAction";\r
<\/script>\r
\r
<div style="height: 200px; background: red;" />\r
<div style="height: 200px; background: blue;" />\r
<div style="height: 200px; background: green;" />\r
\r
<h1\r
	use:viewport\r
	on:enterViewport={() => console.log("entered viewport")}\r
	on:exitViewport={() => console.log("exited viewport")}>\r
	Hello world!\r
</h1>\r
\r
<div style="height: 200px; background: red;" />\r
<div style="height: 200px; background: blue;" />\r
<div style="height: 200px; background: green;" />\r
\r
<style>\r
</style>\r
`,oe=`let intersectionObserver;\r
\r
function ensureIntersectionObserver() {\r
	if (intersectionObserver) return;\r
\r
	intersectionObserver = new IntersectionObserver((entries) => {\r
		entries.forEach((entry) => {\r
			const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";\r
			entry.target.dispatchEvent(new CustomEvent(eventName));\r
		});\r
	});\r
}\r
export default function viewport(element) {\r
	ensureIntersectionObserver();\r
	intersectionObserver.observe(element);\r
	return {\r
		destroy() {\r
			intersectionObserver.unobserve(element);\r
		},\r
	};\r
}\r
`;function ie(p){let e;return{c(){e=_("use:viewport")},l(n){e=v(n,"use:viewport")},m(n,o){m(n,e,o)},d(n){n&&l(e)}}}function le(p){let e;return{c(){e=_("enters")},l(n){e=v(n,"enters")},m(n,o){m(n,e,o)},d(n){n&&l(e)}}}function fe(p){let e;return{c(){e=_("leaves")},l(n){e=v(n,"leaves")},m(n,o){m(n,e,o)},d(n){n&&l(e)}}}function ae(p){let e,n,o,f,s,a,t,u;return n=new z({props:{$$slots:{default:[ie]},$$scope:{ctx:p}}}),f=new z({props:{$$slots:{default:[le]},$$scope:{ctx:p}}}),a=new z({props:{$$slots:{default:[fe]},$$scope:{ctx:p}}}),{c(){e=_("This is an example of "),g(n.$$.fragment),o=_(" which will tell us when an element "),g(f.$$.fragment),s=_(" the viewport or "),g(a.$$.fragment),t=_(" the viewport.")},l(r){e=v(r,"This is an example of "),d(n.$$.fragment,r),o=v(r," which will tell us when an element "),d(f.$$.fragment,r),s=v(r," the viewport or "),d(a.$$.fragment,r),t=v(r," the viewport.")},m(r,$){m(r,e,$),b(n,r,$),m(r,o,$),b(f,r,$),m(r,s,$),b(a,r,$),m(r,t,$),u=!0},p(r,$){const E={};$&2&&(E.$$scope={dirty:$,ctx:r}),n.$set(E);const h={};$&2&&(h.$$scope={dirty:$,ctx:r}),f.$set(h);const O={};$&2&&(O.$$scope={dirty:$,ctx:r}),a.$set(O)},i(r){u||(x(n.$$.fragment,r),x(f.$$.fragment,r),x(a.$$.fragment,r),u=!0)},o(r){y(n.$$.fragment,r),y(f.$$.fragment,r),y(a.$$.fragment,r),u=!1},d(r){r&&l(e),V(n,r),r&&l(o),V(f,r),r&&l(s),V(a,r),r&&l(t)}}}function pe(p){let e;return{c(){e=_("lazy initialization")},l(n){e=v(n,"lazy initialization")},m(n,o){m(n,e,o)},d(n){n&&l(e)}}}function ue(p){let e;return{c(){e=_("needed")},l(n){e=v(n,"needed")},m(n,o){m(n,e,o)},d(n){n&&l(e)}}}function $e(p){let e,n,o,f,s,a;return n=new z({props:{$$slots:{default:[pe]},$$scope:{ctx:p}}}),f=new z({props:{$$slots:{default:[ue]},$$scope:{ctx:p}}}),{c(){e=_("An important thing here is the "),g(n.$$.fragment),o=_(" of the action. The IntersectionObserver is only created when it is "),g(f.$$.fragment),s=_(". We also reuse the observer if we already have one. Without this this whole page broke. 🤯")},l(t){e=v(t,"An important thing here is the "),d(n.$$.fragment,t),o=v(t," of the action. The IntersectionObserver is only created when it is "),d(f.$$.fragment,t),s=v(t,". We also reuse the observer if we already have one. Without this this whole page broke. 🤯")},m(t,u){m(t,e,u),b(n,t,u),m(t,o,u),b(f,t,u),m(t,s,u),a=!0},p(t,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:t}),n.$set(r);const $={};u&2&&($.$$scope={dirty:u,ctx:t}),f.$set($)},i(t){a||(x(n.$$.fragment,t),x(f.$$.fragment,t),a=!0)},o(t){y(n.$$.fragment,t),y(f.$$.fragment,t),a=!1},d(t){t&&l(e),V(n,t),t&&l(o),V(f,t),t&&l(s)}}}function me(p){let e,n,o,f,s,a;return e=new R({props:{$$slots:{default:[ae]},$$scope:{ctx:p}}}),o=new Y({props:{name:[{name:"App",comp:B,raw:se,text:""},{name:"useViewportAction.js",comp:B,raw:oe,text:""}]}}),s=new R({props:{$$slots:{default:[$e]},$$scope:{ctx:p}}}),{c(){g(e.$$.fragment),n=k(),g(o.$$.fragment),f=k(),g(s.$$.fragment)},l(t){d(e.$$.fragment,t),n=I(t),d(o.$$.fragment,t),f=I(t),d(s.$$.fragment,t)},m(t,u){b(e,t,u),m(t,n,u),b(o,t,u),m(t,f,u),b(s,t,u),a=!0},p(t,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:t}),e.$set(r);const $={};u&2&&($.$$scope={dirty:u,ctx:t}),s.$set($)},i(t){a||(x(e.$$.fragment,t),x(o.$$.fragment,t),x(s.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),y(s.$$.fragment,t),a=!1},d(t){V(e,t),t&&l(n),V(o,t),t&&l(f),V(s,t)}}}function ce(p){let e,n;const o=[p[0],K];let f={$$slots:{default:[me]},$$scope:{ctx:p}};for(let s=0;s<o.length;s+=1)f=W(f,o[s]);return e=new X({props:f}),{c(){g(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,a){b(e,s,a),n=!0},p(s,[a]){const t=a&1?U(o,[a&1&&q(s[0]),a&0&&q(K)]):{};a&2&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){n||(x(e.$$.fragment,s),n=!0)},o(s){y(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}const K={title:"use:viewport",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-06T00:00:00.000Z",layout:"notes"};function _e(p,e,n){return p.$$set=o=>{n(0,e=W(W({},e),P(o)))},e=P(e),[e]}class de extends L{constructor(e){super(),Q(this,e,_e,ce,Z,{})}}export{de as default,K as metadata};
