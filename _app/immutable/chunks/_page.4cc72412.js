import{s as B,f as C,a as k,g as D,h as S,d as i,c as I,u as J,k as _,i as $,ae as K,X as j,z as W,H as L,C as M,D as P,l as h,m as v}from"./scheduler.a7cd560e.js";import{S as F,i as G,b as d,d as w,m as b,a as x,t as y,e as V}from"./index.396264e7.js";import{g as Q,a as R}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as U,P as q}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Y}from"./ShowMany.db7be1f3.js";import{S as z}from"./Strong.097578ae.js";let T;function ee(){T||(T=new IntersectionObserver(u=>{u.forEach(e=>{const n=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(n))})}))}function te(u){return ee(),T.observe(u),{destroy(){T.unobserve(u)}}}function ne(u){let e,n,o,l,r,a,t,p="Hello world!",s,c,O,g,E,A,H,N;return{c(){e=C("div"),n=k(),o=C("div"),l=k(),r=C("div"),a=k(),t=C("h1"),t.textContent=p,s=k(),c=C("div"),O=k(),g=C("div"),E=k(),A=C("div"),this.h()},l(f){e=D(f,"DIV",{style:!0}),S(e).forEach(i),n=I(f),o=D(f,"DIV",{style:!0}),S(o).forEach(i),l=I(f),r=D(f,"DIV",{style:!0}),S(r).forEach(i),a=I(f),t=D(f,"H1",{["data-svelte-h"]:!0}),J(t)!=="svelte-14hf1c"&&(t.textContent=p),s=I(f),c=D(f,"DIV",{style:!0}),S(c).forEach(i),O=I(f),g=D(f,"DIV",{style:!0}),S(g).forEach(i),E=I(f),A=D(f,"DIV",{style:!0}),S(A).forEach(i),this.h()},h(){_(e,"height","200px"),_(e,"background","red"),_(o,"height","200px"),_(o,"background","blue"),_(r,"height","200px"),_(r,"background","green"),_(c,"height","200px"),_(c,"background","red"),_(g,"height","200px"),_(g,"background","blue"),_(A,"height","200px"),_(A,"background","green")},m(f,m){$(f,e,m),$(f,n,m),$(f,o,m),$(f,l,m),$(f,r,m),$(f,a,m),$(f,t,m),$(f,s,m),$(f,c,m),$(f,O,m),$(f,g,m),$(f,E,m),$(f,A,m),H||(N=[K(te.call(null,t)),j(t,"enterViewport",u[0]),j(t,"exitViewport",u[1])],H=!0)},p:W,i:W,o:W,d(f){f&&(i(e),i(n),i(o),i(l),i(r),i(a),i(t),i(s),i(c),i(O),i(g),i(E),i(A)),H=!1,L(N)}}}function re(u){return[()=>console.log("entered viewport"),()=>console.log("exited viewport")]}class X extends F{constructor(e){super(),G(this,e,re,ne,B,{})}}const se=`<script>\r
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
`;function ie(u){let e;return{c(){e=h("use:viewport")},l(n){e=v(n,"use:viewport")},m(n,o){$(n,e,o)},d(n){n&&i(e)}}}function le(u){let e;return{c(){e=h("enters")},l(n){e=v(n,"enters")},m(n,o){$(n,e,o)},d(n){n&&i(e)}}}function ae(u){let e;return{c(){e=h("leaves")},l(n){e=v(n,"leaves")},m(n,o){$(n,e,o)},d(n){n&&i(e)}}}function ue(u){let e,n,o,l,r,a,t,p;return n=new z({props:{$$slots:{default:[ie]},$$scope:{ctx:u}}}),l=new z({props:{$$slots:{default:[le]},$$scope:{ctx:u}}}),a=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){e=h("This is an example of "),d(n.$$.fragment),o=h(" which will tell us when an element "),d(l.$$.fragment),r=h(" the viewport or "),d(a.$$.fragment),t=h(" the viewport.")},l(s){e=v(s,"This is an example of "),w(n.$$.fragment,s),o=v(s," which will tell us when an element "),w(l.$$.fragment,s),r=v(s," the viewport or "),w(a.$$.fragment,s),t=v(s," the viewport.")},m(s,c){$(s,e,c),b(n,s,c),$(s,o,c),b(l,s,c),$(s,r,c),b(a,s,c),$(s,t,c),p=!0},p(s,c){const O={};c&2&&(O.$$scope={dirty:c,ctx:s}),n.$set(O);const g={};c&2&&(g.$$scope={dirty:c,ctx:s}),l.$set(g);const E={};c&2&&(E.$$scope={dirty:c,ctx:s}),a.$set(E)},i(s){p||(x(n.$$.fragment,s),x(l.$$.fragment,s),x(a.$$.fragment,s),p=!0)},o(s){y(n.$$.fragment,s),y(l.$$.fragment,s),y(a.$$.fragment,s),p=!1},d(s){s&&(i(e),i(o),i(r),i(t)),V(n,s),V(l,s),V(a,s)}}}function pe(u){let e;return{c(){e=h("lazy initialization")},l(n){e=v(n,"lazy initialization")},m(n,o){$(n,e,o)},d(n){n&&i(e)}}}function fe(u){let e;return{c(){e=h("needed")},l(n){e=v(n,"needed")},m(n,o){$(n,e,o)},d(n){n&&i(e)}}}function ce(u){let e,n,o,l,r,a;return n=new z({props:{$$slots:{default:[pe]},$$scope:{ctx:u}}}),l=new z({props:{$$slots:{default:[fe]},$$scope:{ctx:u}}}),{c(){e=h("An important thing here is the "),d(n.$$.fragment),o=h(" of the action. The IntersectionObserver is only created when it is "),d(l.$$.fragment),r=h(". We also reuse the observer if we already have one. Without this this whole page broke. 🤯")},l(t){e=v(t,"An important thing here is the "),w(n.$$.fragment,t),o=v(t," of the action. The IntersectionObserver is only created when it is "),w(l.$$.fragment,t),r=v(t,". We also reuse the observer if we already have one. Without this this whole page broke. 🤯")},m(t,p){$(t,e,p),b(n,t,p),$(t,o,p),b(l,t,p),$(t,r,p),a=!0},p(t,p){const s={};p&2&&(s.$$scope={dirty:p,ctx:t}),n.$set(s);const c={};p&2&&(c.$$scope={dirty:p,ctx:t}),l.$set(c)},i(t){a||(x(n.$$.fragment,t),x(l.$$.fragment,t),a=!0)},o(t){y(n.$$.fragment,t),y(l.$$.fragment,t),a=!1},d(t){t&&(i(e),i(o),i(r)),V(n,t),V(l,t)}}}function $e(u){let e,n,o,l,r,a;return e=new q({props:{$$slots:{default:[ue]},$$scope:{ctx:u}}}),o=new Y({props:{name:[{name:"App",comp:X,raw:se,text:""},{name:"useViewportAction.js",comp:X,raw:oe,text:""}]}}),r=new q({props:{$$slots:{default:[ce]},$$scope:{ctx:u}}}),{c(){d(e.$$.fragment),n=k(),d(o.$$.fragment),l=k(),d(r.$$.fragment)},l(t){w(e.$$.fragment,t),n=I(t),w(o.$$.fragment,t),l=I(t),w(r.$$.fragment,t)},m(t,p){b(e,t,p),$(t,n,p),b(o,t,p),$(t,l,p),b(r,t,p),a=!0},p(t,p){const s={};p&2&&(s.$$scope={dirty:p,ctx:t}),e.$set(s);const c={};p&2&&(c.$$scope={dirty:p,ctx:t}),r.$set(c)},i(t){a||(x(e.$$.fragment,t),x(o.$$.fragment,t),x(r.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),y(o.$$.fragment,t),y(r.$$.fragment,t),a=!1},d(t){t&&(i(n),i(l)),V(e,t),V(o,t),V(r,t)}}}function me(u){let e,n;const o=[u[0],Z];let l={$$slots:{default:[$e]},$$scope:{ctx:u}};for(let r=0;r<o.length;r+=1)l=M(l,o[r]);return e=new U({props:l}),{c(){d(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,a){b(e,r,a),n=!0},p(r,[a]){const t=a&1?Q(o,[a&1&&R(r[0]),a&0&&R(Z)]):{};a&2&&(t.$$scope={dirty:a,ctx:r}),e.$set(t)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){V(e,r)}}}const Z={title:"use:viewport",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-06T00:00:00.000Z",layout:"notes"};function _e(u,e,n){return u.$$set=o=>{n(0,e=M(M({},e),P(o)))},e=P(e),[e]}class xe extends F{constructor(e){super(),G(this,e,_e,me,B,{})}}export{xe as default,Z as metadata};
