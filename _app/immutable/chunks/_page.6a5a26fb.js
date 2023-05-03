import{S as Y,i as j,s as z,k as B,a as E,q as v,l as U,c as L,m as y,r as d,h as a,b as m,a2 as D,D as C,T as M,aa as V,u as q,H,Q as te,K as R,y as g,z as A,A as I,L as ne,M as J,g as b,d as h,B as T,N as O}from"./index.0b5cc0d7.js";import{M as se,P as k}from"./mdsvex-layout-notes.c527e9b3.js";import{S as W}from"./ShowMany.5b53376e.js";import{S as N}from"./Strong.272c5f79.js";function re(i){let e,t,r,l,n,f,s,p,c,w,P;return{c(){e=B("input"),t=E(),r=B("input"),l=E(),n=B("div"),f=v(i[0]),s=E(),p=B("div"),c=v(i[1])},l(o){e=U(o,"INPUT",{}),t=L(o),r=U(o,"INPUT",{}),l=L(o),n=U(o,"DIV",{});var $=y(n);f=d($,i[0]),$.forEach(a),s=L(o),p=U(o,"DIV",{});var S=y(p);c=d(S,i[1]),S.forEach(a)},m(o,$){m(o,e,$),D(e,i[0]),m(o,t,$),m(o,r,$),D(r,i[1]),m(o,l,$),m(o,n,$),C(n,f),m(o,s,$),m(o,p,$),C(p,c),w||(P=[M(e,"input",i[2]),V(X.call(null,e)),V(X.call(null,r)),M(r,"input",i[3])],w=!0)},p(o,[$]){$&1&&e.value!==o[0]&&D(e,o[0]),$&2&&r.value!==o[1]&&D(r,o[1]),$&1&&q(f,o[0]),$&2&&q(c,o[1])},i:H,o:H,d(o){o&&a(e),o&&a(t),o&&a(r),o&&a(l),o&&a(n),o&&a(s),o&&a(p),w=!1,te(P)}}}function X(i){function e(t){i.value=i.value.toUpperCase()}return i.addEventListener("input",e),{destroy(){i.removeEventListener("input",e)}}}function oe(i,e,t){let r="",l="";function n(){r=this.value,t(0,r)}function f(){l=this.value,t(1,l)}return[r,l,n,f]}class ue extends Y{constructor(e){super(),j(this,e,oe,re,z,{})}}const ie=`<script>\r
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
`;function le(i){let e,t,r,l,n,f,s,p,c,w,P;return{c(){e=B("input"),t=E(),r=B("input"),l=E(),n=B("div"),f=v(i[0]),s=E(),p=B("div"),c=v(i[1])},l(o){e=U(o,"INPUT",{}),t=L(o),r=U(o,"INPUT",{}),l=L(o),n=U(o,"DIV",{});var $=y(n);f=d($,i[0]),$.forEach(a),s=L(o),p=U(o,"DIV",{});var S=y(p);c=d(S,i[1]),S.forEach(a)},m(o,$){m(o,e,$),D(e,i[0]),m(o,t,$),m(o,r,$),D(r,i[1]),m(o,l,$),m(o,n,$),C(n,f),m(o,s,$),m(o,p,$),C(p,c),w||(P=[M(e,"input",i[2]),V(x.call(null,e)),V(x.call(null,r)),M(r,"input",i[3])],w=!0)},p(o,[$]){$&1&&e.value!==o[0]&&D(e,o[0]),$&2&&r.value!==o[1]&&D(r,o[1]),$&1&&q(f,o[0]),$&2&&q(c,o[1])},i:H,o:H,d(o){o&&a(e),o&&a(t),o&&a(r),o&&a(l),o&&a(n),o&&a(s),o&&a(p),w=!1,te(P)}}}function x(i){function e(t){i.value=i.value.toUpperCase(),t.stopImmediatePropagation()}return i.addEventListener("input",e),{destroy(){i.removeEventListener("input",e)}}}function fe(i,e,t){let r="",l="";function n(){r=this.value,t(0,r)}function f(){l=this.value,t(1,l)}return[r,l,n,f]}class ae extends Y{constructor(e){super(),j(this,e,fe,le,z,{})}}const pe=`<script>\r
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
`;function $e(i){let e;return{c(){e=v("Yes!")},l(t){e=d(t,"Yes!")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function me(i){let e,t,r,l;return t=new N({props:{$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){e=v("Does the order of Svelte actions matter? "),g(t.$$.fragment),r=v(" Let's find out why.")},l(n){e=d(n,"Does the order of Svelte actions matter? "),A(t.$$.fragment,n),r=d(n," Let's find out why.")},m(n,f){m(n,e,f),I(t,n,f),m(n,r,f),l=!0},p(n,f){const s={};f&2&&(s.$$scope={dirty:f,ctx:n}),t.$set(s)},i(n){l||(b(t.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),l=!1},d(n){n&&a(e),T(t,n),n&&a(r)}}}function ce(i){let e;return{c(){e=v("lowercase letter*. This is because we're binding to the value ")},l(t){e=d(t,"lowercase letter*. This is because we're binding to the value ")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function _e(i){let e,t,r,l;return t=new N({props:{$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){e=v("As you can see the left input always ends with a "),g(t.$$.fragment),r=v("before our action** so the saved result doesn't include the result of the action function.")},l(n){e=d(n,"As you can see the left input always ends with a "),A(t.$$.fragment,n),r=d(n,"before our action** so the saved result doesn't include the result of the action function.")},m(n,f){m(n,e,f),I(t,n,f),m(n,r,f),l=!0},p(n,f){const s={};f&2&&(s.$$scope={dirty:f,ctx:n}),t.$set(s)},i(n){l||(b(t.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),l=!1},d(n){n&&a(e),T(t,n),n&&a(r)}}}function ve(i){let e;return{c(){e=v("uppercase letter")},l(t){e=d(t,"uppercase letter")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function de(i){let e;return{c(){e=v("after we have run the action")},l(t){e=d(t,"after we have run the action")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function we(i){let e,t,r,l,n,f;return t=new N({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),l=new N({props:{$$slots:{default:[de]},$$scope:{ctx:i}}}),{c(){e=v("The right input ends with an "),g(t.$$.fragment),r=v(" since we're binding "),g(l.$$.fragment),n=v(".")},l(s){e=d(s,"The right input ends with an "),A(t.$$.fragment,s),r=d(s," since we're binding "),A(l.$$.fragment,s),n=d(s,".")},m(s,p){m(s,e,p),I(t,s,p),m(s,r,p),I(l,s,p),m(s,n,p),f=!0},p(s,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:s}),t.$set(c);const w={};p&2&&(w.$$scope={dirty:p,ctx:s}),l.$set(w)},i(s){f||(b(t.$$.fragment,s),b(l.$$.fragment,s),f=!0)},o(s){h(t.$$.fragment,s),h(l.$$.fragment,s),f=!1},d(s){s&&a(e),T(t,s),s&&a(r),T(l,s),s&&a(n)}}}function ge(i){let e;return{c(){e=v('Note that if you have event.stopImmediatePropagation() in your code the action will "eat" the event and prevent the bind.')},l(t){e=d(t,'Note that if you have event.stopImmediatePropagation() in your code the action will "eat" the event and prevent the bind.')},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function Ae(i){let e;return{c(){e=v("directive order")},l(t){e=d(t,"directive order")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function Ie(i){let e;return{c(){e=v("event.stopImmediatePropagation()")},l(t){e=d(t,"event.stopImmediatePropagation()")},m(t,r){m(t,e,r)},d(t){t&&a(e)}}}function be(i){let e,t,r,l,n,f;return t=new N({props:{$$slots:{default:[Ae]},$$scope:{ctx:i}}}),l=new N({props:{$$slots:{default:[Ie]},$$scope:{ctx:i}}}),{c(){e=v("So, pay attention to "),g(t.$$.fragment),r=v(" and functions like "),g(l.$$.fragment),n=v(" in order to use actions successfully.")},l(s){e=d(s,"So, pay attention to "),A(t.$$.fragment,s),r=d(s," and functions like "),A(l.$$.fragment,s),n=d(s," in order to use actions successfully.")},m(s,p){m(s,e,p),I(t,s,p),m(s,r,p),I(l,s,p),m(s,n,p),f=!0},p(s,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:s}),t.$set(c);const w={};p&2&&(w.$$scope={dirty:p,ctx:s}),l.$set(w)},i(s){f||(b(t.$$.fragment,s),b(l.$$.fragment,s),f=!0)},o(s){h(t.$$.fragment,s),h(l.$$.fragment,s),f=!1},d(s){s&&a(e),T(t,s),s&&a(r),T(l,s),s&&a(n)}}}function he(i){let e,t,r,l,n,f,s,p,c,w,P,o,$,S;return e=new k({props:{$$slots:{default:[me]},$$scope:{ctx:i}}}),r=new W({props:{name:[{name:"App",comp:ue,raw:ie,text:"Here we have two input fields. The order of the bind directive and use directive are different in each input. Type in each field and see what happens."}]}}),n=new k({props:{$$slots:{default:[_e]},$$scope:{ctx:i}}}),s=new k({props:{$$slots:{default:[we]},$$scope:{ctx:i}}}),c=new k({props:{$$slots:{default:[ge]},$$scope:{ctx:i}}}),P=new W({props:{name:[{name:"App2",comp:ae,raw:pe,text:"The right input field doesn't bind because we're using event.stopImmediatePropagation()."}]}}),$=new k({props:{$$slots:{default:[be]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment),t=E(),g(r.$$.fragment),l=E(),g(n.$$.fragment),f=E(),g(s.$$.fragment),p=E(),g(c.$$.fragment),w=E(),g(P.$$.fragment),o=E(),g($.$$.fragment)},l(u){A(e.$$.fragment,u),t=L(u),A(r.$$.fragment,u),l=L(u),A(n.$$.fragment,u),f=L(u),A(s.$$.fragment,u),p=L(u),A(c.$$.fragment,u),w=L(u),A(P.$$.fragment,u),o=L(u),A($.$$.fragment,u)},m(u,_){I(e,u,_),m(u,t,_),I(r,u,_),m(u,l,_),I(n,u,_),m(u,f,_),I(s,u,_),m(u,p,_),I(c,u,_),m(u,w,_),I(P,u,_),m(u,o,_),I($,u,_),S=!0},p(u,_){const K={};_&2&&(K.$$scope={dirty:_,ctx:u}),e.$set(K);const Q={};_&2&&(Q.$$scope={dirty:_,ctx:u}),n.$set(Q);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:u}),s.$set(Z);const F={};_&2&&(F.$$scope={dirty:_,ctx:u}),c.$set(F);const G={};_&2&&(G.$$scope={dirty:_,ctx:u}),$.$set(G)},i(u){S||(b(e.$$.fragment,u),b(r.$$.fragment,u),b(n.$$.fragment,u),b(s.$$.fragment,u),b(c.$$.fragment,u),b(P.$$.fragment,u),b($.$$.fragment,u),S=!0)},o(u){h(e.$$.fragment,u),h(r.$$.fragment,u),h(n.$$.fragment,u),h(s.$$.fragment,u),h(c.$$.fragment,u),h(P.$$.fragment,u),h($.$$.fragment,u),S=!1},d(u){T(e,u),u&&a(t),T(r,u),u&&a(l),T(n,u),u&&a(f),T(s,u),u&&a(p),T(c,u),u&&a(w),T(P,u),u&&a(o),T($,u)}}}function Te(i){let e,t;const r=[i[0],ee];let l={$$slots:{default:[he]},$$scope:{ctx:i}};for(let n=0;n<r.length;n+=1)l=R(l,r[n]);return e=new se({props:l}),{c(){g(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,f){I(e,n,f),t=!0},p(n,[f]){const s=f&1?ne(r,[f&1&&J(n[0]),f&0&&J(ee)]):{};f&2&&(s.$$scope={dirty:f,ctx:n}),e.$set(s)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}const ee={title:"The order of Svelte actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function Pe(i,e,t){return i.$$set=r=>{t(0,e=R(R({},e),O(r)))},e=O(e),[e]}class Ue extends Y{constructor(e){super(),j(this,e,Pe,Te,z,{})}}export{Ue as default,ee as metadata};
