import{s as j,f as B,a as E,l as v,g as U,c as S,h as k,m as d,d as p,i as m,a8 as D,v as y,X as V,ae as M,n as H,z as R,H as te,C as Y,D as K}from"./scheduler.a7cd560e.js";import{S as q,i as z,b as w,d as h,m as A,a as I,t as b,e as P}from"./index.396264e7.js";import{g as ne,a as O}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as se,P as N}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Q}from"./ShowMany.db7be1f3.js";import{S as C}from"./Strong.097578ae.js";function re(o){let e,t,r,a,n,l,s,f,c,g,T;return{c(){e=B("input"),t=E(),r=B("input"),a=E(),n=B("div"),l=v(o[0]),s=E(),f=B("div"),c=v(o[1])},l(i){e=U(i,"INPUT",{}),t=S(i),r=U(i,"INPUT",{}),a=S(i),n=U(i,"DIV",{});var $=k(n);l=d($,o[0]),$.forEach(p),s=S(i),f=U(i,"DIV",{});var L=k(f);c=d(L,o[1]),L.forEach(p)},m(i,$){m(i,e,$),D(e,o[0]),m(i,t,$),m(i,r,$),D(r,o[1]),m(i,a,$),m(i,n,$),y(n,l),m(i,s,$),m(i,f,$),y(f,c),g||(T=[V(e,"input",o[2]),M(W.call(null,e)),M(W.call(null,r)),V(r,"input",o[3])],g=!0)},p(i,[$]){$&1&&e.value!==i[0]&&D(e,i[0]),$&2&&r.value!==i[1]&&D(r,i[1]),$&1&&H(l,i[0]),$&2&&H(c,i[1])},i:R,o:R,d(i){i&&(p(e),p(t),p(r),p(a),p(n),p(s),p(f)),g=!1,te(T)}}}function W(o){function e(t){o.value=o.value.toUpperCase()}return o.addEventListener("input",e),{destroy(){o.removeEventListener("input",e)}}}function oe(o,e,t){let r="",a="";function n(){r=this.value,t(0,r)}function l(){a=this.value,t(1,a)}return[r,a,n,l]}class ue extends q{constructor(e){super(),z(this,e,oe,re,j,{})}}const ae=`<script>\r
	let valueBeforeAction = "";\r
	let valueAfterAction = "";\r
\r
	function uppercase(element) {\r
		function onInput(event) {\r
			element.value = element.value.toUpperCase();\r
		}\r
		element.addEventListener("input", onInput);\r
\r
		return {\r
			destroy() {\r
				element.removeEventListener("input", onInput);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input bind:value={valueBeforeAction} use:uppercase />\r
\r
<input use:uppercase bind:value={valueAfterAction} />\r
\r
<div>\r
	{valueBeforeAction}\r
</div>\r
\r
<div>\r
	{valueAfterAction}\r
</div>\r
`;function ie(o){let e,t,r,a,n,l,s,f,c,g,T;return{c(){e=B("input"),t=E(),r=B("input"),a=E(),n=B("div"),l=v(o[0]),s=E(),f=B("div"),c=v(o[1])},l(i){e=U(i,"INPUT",{}),t=S(i),r=U(i,"INPUT",{}),a=S(i),n=U(i,"DIV",{});var $=k(n);l=d($,o[0]),$.forEach(p),s=S(i),f=U(i,"DIV",{});var L=k(f);c=d(L,o[1]),L.forEach(p)},m(i,$){m(i,e,$),D(e,o[0]),m(i,t,$),m(i,r,$),D(r,o[1]),m(i,a,$),m(i,n,$),y(n,l),m(i,s,$),m(i,f,$),y(f,c),g||(T=[V(e,"input",o[2]),M(x.call(null,e)),M(x.call(null,r)),V(r,"input",o[3])],g=!0)},p(i,[$]){$&1&&e.value!==i[0]&&D(e,i[0]),$&2&&r.value!==i[1]&&D(r,i[1]),$&1&&H(l,i[0]),$&2&&H(c,i[1])},i:R,o:R,d(i){i&&(p(e),p(t),p(r),p(a),p(n),p(s),p(f)),g=!1,te(T)}}}function x(o){function e(t){o.value=o.value.toUpperCase(),t.stopImmediatePropagation()}return o.addEventListener("input",e),{destroy(){o.removeEventListener("input",e)}}}function le(o,e,t){let r="",a="";function n(){r=this.value,t(0,r)}function l(){a=this.value,t(1,a)}return[r,a,n,l]}class pe extends q{constructor(e){super(),z(this,e,le,ie,j,{})}}const fe=`<script>\r
	let valueBeforeAction = "";\r
	let valueAfterAction = "";\r
\r
	function uppercase(element) {\r
		function onInput(event) {\r
			element.value = element.value.toUpperCase();\r
      event.stopImmediatePropagation()\r
		}\r
		element.addEventListener("input", onInput);\r
\r
		return {\r
			destroy() {\r
				element.removeEventListener("input", onInput);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input bind:value={valueBeforeAction} use:uppercase />\r
\r
<input use:uppercase bind:value={valueAfterAction} />\r
\r
<div>\r
	{valueBeforeAction}\r
</div>\r
\r
<div>\r
	{valueAfterAction}\r
</div>\r
`;function $e(o){let e;return{c(){e=v("Yes!")},l(t){e=d(t,"Yes!")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function me(o){let e,t,r,a;return t=new C({props:{$$slots:{default:[$e]},$$scope:{ctx:o}}}),{c(){e=v("Does the order of Svelte actions matter? "),w(t.$$.fragment),r=v(" Let's find out why.")},l(n){e=d(n,"Does the order of Svelte actions matter? "),h(t.$$.fragment,n),r=d(n," Let's find out why.")},m(n,l){m(n,e,l),A(t,n,l),m(n,r,l),a=!0},p(n,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){a||(I(t.$$.fragment,n),a=!0)},o(n){b(t.$$.fragment,n),a=!1},d(n){n&&(p(e),p(r)),P(t,n)}}}function ce(o){let e;return{c(){e=v("lowercase letter*. This is because we're binding to the value ")},l(t){e=d(t,"lowercase letter*. This is because we're binding to the value ")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function _e(o){let e,t,r,a;return t=new C({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),{c(){e=v("As you can see the left input always ends with a "),w(t.$$.fragment),r=v("before our action** so the saved result doesn't include the result of the action function.")},l(n){e=d(n,"As you can see the left input always ends with a "),h(t.$$.fragment,n),r=d(n,"before our action** so the saved result doesn't include the result of the action function.")},m(n,l){m(n,e,l),A(t,n,l),m(n,r,l),a=!0},p(n,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){a||(I(t.$$.fragment,n),a=!0)},o(n){b(t.$$.fragment,n),a=!1},d(n){n&&(p(e),p(r)),P(t,n)}}}function ve(o){let e;return{c(){e=v("uppercase letter")},l(t){e=d(t,"uppercase letter")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function de(o){let e;return{c(){e=v("after we have run the action")},l(t){e=d(t,"after we have run the action")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function ge(o){let e,t,r,a,n,l;return t=new C({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),a=new C({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){e=v("The right input ends with an "),w(t.$$.fragment),r=v(" since we're binding "),w(a.$$.fragment),n=v(".")},l(s){e=d(s,"The right input ends with an "),h(t.$$.fragment,s),r=d(s," since we're binding "),h(a.$$.fragment,s),n=d(s,".")},m(s,f){m(s,e,f),A(t,s,f),m(s,r,f),A(a,s,f),m(s,n,f),l=!0},p(s,f){const c={};f&2&&(c.$$scope={dirty:f,ctx:s}),t.$set(c);const g={};f&2&&(g.$$scope={dirty:f,ctx:s}),a.$set(g)},i(s){l||(I(t.$$.fragment,s),I(a.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),b(a.$$.fragment,s),l=!1},d(s){s&&(p(e),p(r),p(n)),P(t,s),P(a,s)}}}function we(o){let e;return{c(){e=v('Note that if you have event.stopImmediatePropagation() in your code the action will "eat" the event and prevent the bind.')},l(t){e=d(t,'Note that if you have event.stopImmediatePropagation() in your code the action will "eat" the event and prevent the bind.')},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function he(o){let e;return{c(){e=v("directive order")},l(t){e=d(t,"directive order")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Ae(o){let e;return{c(){e=v("event.stopImmediatePropagation()")},l(t){e=d(t,"event.stopImmediatePropagation()")},m(t,r){m(t,e,r)},d(t){t&&p(e)}}}function Ie(o){let e,t,r,a,n,l;return t=new C({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),a=new C({props:{$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){e=v("So, pay attention to "),w(t.$$.fragment),r=v(" and functions like "),w(a.$$.fragment),n=v(" in order to use actions successfully.")},l(s){e=d(s,"So, pay attention to "),h(t.$$.fragment,s),r=d(s," and functions like "),h(a.$$.fragment,s),n=d(s," in order to use actions successfully.")},m(s,f){m(s,e,f),A(t,s,f),m(s,r,f),A(a,s,f),m(s,n,f),l=!0},p(s,f){const c={};f&2&&(c.$$scope={dirty:f,ctx:s}),t.$set(c);const g={};f&2&&(g.$$scope={dirty:f,ctx:s}),a.$set(g)},i(s){l||(I(t.$$.fragment,s),I(a.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),b(a.$$.fragment,s),l=!1},d(s){s&&(p(e),p(r),p(n)),P(t,s),P(a,s)}}}function be(o){let e,t,r,a,n,l,s,f,c,g,T,i,$,L;return e=new N({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),r=new Q({props:{name:[{name:"App",comp:ue,raw:ae,text:"Here we have two input fields. The order of the bind directive and use directive are different in each input. Type in each field and see what happens."}]}}),n=new N({props:{$$slots:{default:[_e]},$$scope:{ctx:o}}}),s=new N({props:{$$slots:{default:[ge]},$$scope:{ctx:o}}}),c=new N({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),T=new Q({props:{name:[{name:"App2",comp:pe,raw:fe,text:"The right input field doesn't bind because we're using event.stopImmediatePropagation()."}]}}),$=new N({props:{$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),t=E(),w(r.$$.fragment),a=E(),w(n.$$.fragment),l=E(),w(s.$$.fragment),f=E(),w(c.$$.fragment),g=E(),w(T.$$.fragment),i=E(),w($.$$.fragment)},l(u){h(e.$$.fragment,u),t=S(u),h(r.$$.fragment,u),a=S(u),h(n.$$.fragment,u),l=S(u),h(s.$$.fragment,u),f=S(u),h(c.$$.fragment,u),g=S(u),h(T.$$.fragment,u),i=S(u),h($.$$.fragment,u)},m(u,_){A(e,u,_),m(u,t,_),A(r,u,_),m(u,a,_),A(n,u,_),m(u,l,_),A(s,u,_),m(u,f,_),A(c,u,_),m(u,g,_),A(T,u,_),m(u,i,_),A($,u,_),L=!0},p(u,_){const X={};_&2&&(X.$$scope={dirty:_,ctx:u}),e.$set(X);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:u}),n.$set(Z);const F={};_&2&&(F.$$scope={dirty:_,ctx:u}),s.$set(F);const G={};_&2&&(G.$$scope={dirty:_,ctx:u}),c.$set(G);const J={};_&2&&(J.$$scope={dirty:_,ctx:u}),$.$set(J)},i(u){L||(I(e.$$.fragment,u),I(r.$$.fragment,u),I(n.$$.fragment,u),I(s.$$.fragment,u),I(c.$$.fragment,u),I(T.$$.fragment,u),I($.$$.fragment,u),L=!0)},o(u){b(e.$$.fragment,u),b(r.$$.fragment,u),b(n.$$.fragment,u),b(s.$$.fragment,u),b(c.$$.fragment,u),b(T.$$.fragment,u),b($.$$.fragment,u),L=!1},d(u){u&&(p(t),p(a),p(l),p(f),p(g),p(i)),P(e,u),P(r,u),P(n,u),P(s,u),P(c,u),P(T,u),P($,u)}}}function Pe(o){let e,t;const r=[o[0],ee];let a={$$slots:{default:[be]},$$scope:{ctx:o}};for(let n=0;n<r.length;n+=1)a=Y(a,r[n]);return e=new se({props:a}),{c(){w(e.$$.fragment)},l(n){h(e.$$.fragment,n)},m(n,l){A(e,n,l),t=!0},p(n,[l]){const s=l&1?ne(r,[l&1&&O(n[0]),l&0&&O(ee)]):{};l&2&&(s.$$scope={dirty:l,ctx:n}),e.$set(s)},i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}const ee={title:"The order of Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function Te(o,e,t){return o.$$set=r=>{t(0,e=Y(Y({},e),K(r)))},e=K(e),[e]}class Ce extends q{constructor(e){super(),z(this,e,Te,Pe,j,{})}}export{Ce as default,ee as metadata};
