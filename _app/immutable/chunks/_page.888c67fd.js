var In=Object.freeze,Kn=Object.defineProperty;var vn=(o,n)=>In(Kn(o,"raw",{value:In(n||o.slice())}));import{S as V,i as S,s as W,k as E,q as m,a as P,l as x,m as D,r as $,h as u,c as T,b as r,D as M,T as J,H as y,Q as hn,$ as Qn,y as d,z as v,A as C,g as _,d as g,B as b,n as G,a0 as wn,K as bn,L as Zn,M as Hn,N as Mn,C as sn,E as an,F as en,G as on,U as Bn,e as tn,V as En}from"./index.0b5cc0d7.js";import{M as Jn,P as z}from"./mdsvex-layout-notes.c527e9b3.js";import{E as Cn}from"./Example.18c27029.js";import{S as R}from"./Strong.272c5f79.js";function Xn(o){let n,t,a,e,s,c,l;return{c(){n=E("button"),t=m("Click me 1"),a=P(),e=E("button"),s=m("Click me 2")},l(i){n=x(i,"BUTTON",{});var h=D(n);t=$(h,"Click me 1"),h.forEach(u),a=T(i),e=x(i,"BUTTON",{});var w=D(e);s=$(w,"Click me 2"),w.forEach(u)},m(i,h){r(i,n,h),M(n,t),r(i,a,h),r(i,e,h),M(e,s),c||(l=[J(n,"click",o[0]),J(e,"click",o[1])],c=!0)},p:y,i:y,o:y,d(i){i&&u(n),i&&u(a),i&&u(e),c=!1,hn(l)}}}function nt(o){const n=Qn();function t(){n("componentButtonClick","button1")}function a(){n("componentButtonClick","button2")}return[t,a]}class Yn extends V{constructor(n){super(),S(this,n,nt,Xn,W,{})}}function tt(o){let n,t;return n=new Yn({}),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},p:y,i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}class st extends V{constructor(n){super(),S(this,n,null,tt,W,{})}}function at(o){let n,t;return n=new st({}),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},p:y,i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}class et extends V{constructor(n){super(),S(this,n,null,at,W,{})}}function ot(o){let n,t,a,e,s,c,l,i,h,w,j,I,O,H,A;return t=new et({}),t.$on("componentButtonClick",pt),{c(){n=m(`Component:
`),d(t.$$.fragment),a=P(),e=E("hr"),s=m(`
Element:
`),c=E("div"),l=E("div"),i=E("button"),h=m("Click me 1"),w=P(),j=E("button"),I=m("Click me 2"),this.h()},l(k){n=$(k,`Component:
`),v(t.$$.fragment,k),a=T(k),e=x(k,"HR",{}),s=$(k,`
Element:
`),c=x(k,"DIV",{});var B=D(c);l=x(B,"DIV",{});var N=D(l);i=x(N,"BUTTON",{"data-value":!0});var U=D(i);h=$(U,"Click me 1"),U.forEach(u),w=T(N),j=x(N,"BUTTON",{"data-value":!0});var K=D(j);I=$(K,"Click me 2"),K.forEach(u),N.forEach(u),B.forEach(u),this.h()},h(){G(i,"data-value","button1"),G(j,"data-value","button2")},m(k,B){r(k,n,B),C(t,k,B),r(k,a,B),r(k,e,B),r(k,s,B),r(k,c,B),M(c,l),M(l,i),M(i,h),M(l,w),M(l,j),M(j,I),O=!0,H||(A=[J(c,"click",On),J(c,"keydown",On)],H=!0)},p:y,i(k){O||(_(t.$$.fragment,k),O=!0)},o(k){g(t.$$.fragment,k),O=!1},d(k){k&&u(n),b(t,k),k&&u(a),k&&u(e),k&&u(s),k&&u(c),H=!1,hn(A)}}}function On(o){console.log("onElementButtonClick",o.target.dataset.value)}function pt(o){console.log("onComponentButtonClick",o.detail)}class lt extends V{constructor(n){super(),S(this,n,null,ot,W,{})}}function ct(o){let n,t;return n=new Yn({}),n.$on("componentButtonClick",o[0]),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},p:y,i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function ut(o){function n(t){wn.call(this,o,t)}return[n]}class it extends V{constructor(n){super(),S(this,n,ut,ct,W,{})}}function rt(o){let n,t;return n=new it({}),n.$on("componentButtonClick",o[0]),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},p:y,i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function kt(o){function n(t){wn.call(this,o,t)}return[n]}class ft extends V{constructor(n){super(),S(this,n,kt,rt,W,{})}}function mt(o){let n,t,a,e,s,c,l,i,h,w,j,I,O,H,A;return t=new ft({}),t.$on("componentButtonClick",$t),{c(){n=m(`Component:
`),d(t.$$.fragment),a=P(),e=E("hr"),s=m(`
Element:
`),c=E("div"),l=E("div"),i=E("button"),h=m("Click me 1"),w=P(),j=E("button"),I=m("Click me 2"),this.h()},l(k){n=$(k,`Component:
`),v(t.$$.fragment,k),a=T(k),e=x(k,"HR",{}),s=$(k,`
Element:
`),c=x(k,"DIV",{});var B=D(c);l=x(B,"DIV",{});var N=D(l);i=x(N,"BUTTON",{"data-value":!0});var U=D(i);h=$(U,"Click me 1"),U.forEach(u),w=T(N),j=x(N,"BUTTON",{"data-value":!0});var K=D(j);I=$(K,"Click me 2"),K.forEach(u),N.forEach(u),B.forEach(u),this.h()},h(){G(i,"data-value","button1"),G(j,"data-value","button2")},m(k,B){r(k,n,B),C(t,k,B),r(k,a,B),r(k,e,B),r(k,s,B),r(k,c,B),M(c,l),M(l,i),M(i,h),M(l,w),M(l,j),M(j,I),O=!0,H||(A=[J(c,"click",Nn),J(c,"keydown",Nn)],H=!0)},p:y,i(k){O||(_(t.$$.fragment,k),O=!0)},o(k){g(t.$$.fragment,k),O=!1},d(k){k&&u(n),b(t,k),k&&u(a),k&&u(e),k&&u(s),k&&u(c),H=!1,hn(A)}}}function Nn(o){console.log("onElementButtonClick",o.target.dataset.value)}function $t(o){console.log("onComponentButtonClick",o.detail)}class _t extends V{constructor(n){super(),S(this,n,null,mt,W,{})}}function gt(o){let n,t,a,e;return{c(){n=E("button"),t=m("A very nice button"),this.h()},l(s){n=x(s,"BUTTON",{class:!0});var c=D(n);t=$(c,"A very nice button"),c.forEach(u),this.h()},h(){G(n,"class","uno-o4p6yw")},m(s,c){r(s,n,c),M(n,t),a||(e=J(n,"click",o[0]),a=!0)},p:y,i:y,o:y,d(s){s&&u(n),a=!1,e()}}}function dt(o){function n(t){wn.call(this,o,t)}return[n]}let vt=class extends V{constructor(n){super(),S(this,n,dt,gt,W,{})}};function Ct(o){let n,t;return n=new vt({}),n.$on("click",o[0]),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},p:y,i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function bt(o){return[()=>console.log("you clicked the custom button!")]}class ht extends V{constructor(n){super(),S(this,n,bt,Ct,W,{})}}function wt(o){let n,t=`<code class="language-svelte"><span class="token comment">&lt;!-- CustomButton.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-1 rounded-xl border-blue-200 bg-blue-400 p-4 hover:bg-blue-300<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click</span>
	<span class="token punctuation">></span></span>A very nice button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`;return{c(){n=E("pre"),this.h()},l(a){n=x(a,"PRE",{class:!0});var e=D(n);e.forEach(u),this.h()},h(){G(n,"class","language-svelte")},m(a,e){r(a,n,e),n.innerHTML=t},p:y,i:y,o:y,d(a){a&&u(n)}}}class Bt extends V{constructor(n){super(),S(this,n,null,wt,W,{})}}const Et=o=>({}),Un=o=>({slot:"example"}),xt=o=>({}),Vn=o=>({slot:"code"}),yt=o=>({}),Sn=o=>({slot:"example"}),Pt=o=>({}),Wn=o=>({slot:"code"}),Tt=o=>({}),An=o=>({slot:"example"}),jt=o=>({}),Gn=o=>({slot:"code"});function Dt(o){let n;return{c(){n=m("bubble")},l(t){n=$(t,"bubble")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function It(o){let n,t,a,e;return t=new R({props:{$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){n=m("By default events "),d(t.$$.fragment),a=m(", meaning if I have an event listener on an element and that element has for example a child button, when I click the button it will also trigger the event listener in the parent.")},l(s){n=$(s,"By default events "),v(t.$$.fragment,s),a=$(s,", meaning if I have an event listener on an element and that element has for example a child button, when I click the button it will also trigger the event listener in the parent.")},m(s,c){r(s,n,c),C(t,s,c),r(s,a,c),e=!0},p(s,c){const l={};c&4&&(l.$$scope={dirty:c,ctx:s}),t.$set(l)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){g(t.$$.fragment,s),e=!1},d(s){s&&u(n),b(t,s),s&&u(a)}}}function Ht(o){let n;return{c(){n=m("You can see this when clicking the Element Click me 1 which is inside a div with an event listener.")},l(t){n=$(t,"You can see this when clicking the Element Click me 1 which is inside a div with an event listener.")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function Mt(o){let n,t;return n=new lt({}),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function Ot(o){let n;const t=o[1].default,a=sn(t,o,o[2],An),e=a||Mt();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,Tt):en(s[2]),An)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}function Nt(o){let n,t=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> Parent <span class="token keyword">from</span> <span class="token string">"./Parent.svelte"</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function">onElementButtonClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onElementButtonClick"</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">function</span> <span class="token function">onComponentButtonClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onComponentButtonClick"</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

Component:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span> <span class="token attr-name"><span class="token namespace">on:</span>componentButtonClick=</span><span class="token language-javascript"><span class="token punctuation">{</span>onComponentButtonClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>

Element:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>onElementButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">on:</span>keydown=</span><span class="token language-javascript"><span class="token punctuation">{</span>onElementButtonClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,a;return{c(){n=new Bn(!1),a=tn(),this.h()},l(e){n=En(e,!1),a=tn(),this.h()},h(){n.a=a},m(e,s){n.m(t,e,s),r(e,a,s)},p:y,d(e){e&&u(a),e&&n.d()}}}function Ut(o){let n;const t=o[1].default,a=sn(t,o,o[2],Gn),e=a||Nt();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,jt):en(s[2]),Gn)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}function Vt(o){let n;return{c(){n=m("deeply nested and don't bubble")},l(t){n=$(t,"deeply nested and don't bubble")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function St(o){let n,t,a,e;return t=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){n=m("The problem is that the component buttons don't work because right now the events are "),d(t.$$.fragment),a=m(".")},l(s){n=$(s,"The problem is that the component buttons don't work because right now the events are "),v(t.$$.fragment,s),a=$(s,".")},m(s,c){r(s,n,c),C(t,s,c),r(s,a,c),e=!0},p(s,c){const l={};c&4&&(l.$$scope={dirty:c,ctx:s}),t.$set(l)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){g(t.$$.fragment,s),e=!1},d(s){s&&u(n),b(t,s),s&&u(a)}}}function Wt(o){let n,t="{",a,e;return{c(){n=m("on:componentButtonClick="),a=m(t),e=m("onComponentButtonClick}")},l(s){n=$(s,"on:componentButtonClick="),a=$(s,t),e=$(s,"onComponentButtonClick}")},m(s,c){r(s,n,c),r(s,a,c),r(s,e,c)},p:y,d(s){s&&u(n),s&&u(a),s&&u(e)}}}function At(o){let n;return{c(){n=m("there is a better way")},l(t){n=$(t,"there is a better way")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function Gt(o){let n,t,a,e,s,c;return t=new R({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),e=new R({props:{$$slots:{default:[At]},$$scope:{ctx:o}}}),{c(){n=m("We could go step by step, handling the event with "),d(t.$$.fragment),a=m(" and create an event dispatcher and dispatch the event in every nested component, but "),d(e.$$.fragment),s=m(".")},l(l){n=$(l,"We could go step by step, handling the event with "),v(t.$$.fragment,l),a=$(l," and create an event dispatcher and dispatch the event in every nested component, but "),v(e.$$.fragment,l),s=$(l,".")},m(l,i){r(l,n,i),C(t,l,i),r(l,a,i),C(e,l,i),r(l,s,i),c=!0},p(l,i){const h={};i&4&&(h.$$scope={dirty:i,ctx:l}),t.$set(h);const w={};i&4&&(w.$$scope={dirty:i,ctx:l}),e.$set(w)},i(l){c||(_(t.$$.fragment,l),_(e.$$.fragment,l),c=!0)},o(l){g(t.$$.fragment,l),g(e.$$.fragment,l),c=!1},d(l){l&&u(n),b(t,l),l&&u(a),b(e,l),l&&u(s)}}}function Rt(o){let n;return{c(){n=m("dispatch the same event")},l(t){n=$(t,"dispatch the same event")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function Lt(o){let n;return{c(){n=m("on:componentButtonClick")},l(t){n=$(t,"on:componentButtonClick")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function qt(o){let n,t,a,e,s,c;return t=new R({props:{$$slots:{default:[Rt]},$$scope:{ctx:o}}}),e=new R({props:{$$slots:{default:[Lt]},$$scope:{ctx:o}}}),{c(){n=m("If we are listening to an event and are going to "),d(t.$$.fragment),a=m(", we can simply add "),d(e.$$.fragment),s=m(" to the nested components.")},l(l){n=$(l,"If we are listening to an event and are going to "),v(t.$$.fragment,l),a=$(l,", we can simply add "),v(e.$$.fragment,l),s=$(l," to the nested components.")},m(l,i){r(l,n,i),C(t,l,i),r(l,a,i),C(e,l,i),r(l,s,i),c=!0},p(l,i){const h={};i&4&&(h.$$scope={dirty:i,ctx:l}),t.$set(h);const w={};i&4&&(w.$$scope={dirty:i,ctx:l}),e.$set(w)},i(l){c||(_(t.$$.fragment,l),_(e.$$.fragment,l),c=!0)},o(l){g(t.$$.fragment,l),g(e.$$.fragment,l),c=!1},d(l){l&&u(n),b(t,l),l&&u(a),b(e,l),l&&u(s)}}}function Ft(o){let n;return{c(){n=m("Here are the nested components:")},l(t){n=$(t,"Here are the nested components:")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function Yt(o){let n;return{c(){n=m("on:componentButtonClick")},l(t){n=$(t,"on:componentButtonClick")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function zt(o){let n,t,a,e;return t=new R({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),{c(){n=m("And here is the result after adding "),d(t.$$.fragment),a=m(":")},l(s){n=$(s,"And here is the result after adding "),v(t.$$.fragment,s),a=$(s,":")},m(s,c){r(s,n,c),C(t,s,c),r(s,a,c),e=!0},p(s,c){const l={};c&4&&(l.$$scope={dirty:c,ctx:s}),t.$set(l)},i(s){e||(_(t.$$.fragment,s),e=!0)},o(s){g(t.$$.fragment,s),e=!1},d(s){s&&u(n),b(t,s),s&&u(a)}}}function Kt(o){let n,t;return n=new _t({}),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function Qt(o){let n;const t=o[1].default,a=sn(t,o,o[2],Sn),e=a||Kt();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,yt):en(s[2]),Sn)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}function Zt(o){let n,t=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> Parent2 <span class="token keyword">from</span> <span class="token string">"./Parent2.svelte"</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function">onElementButtonClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onElementButtonClick"</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">function</span> <span class="token function">onComponentButtonClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onComponentButtonClick"</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

Component:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent2</span> <span class="token attr-name"><span class="token namespace">on:</span>componentButtonClick=</span><span class="token language-javascript"><span class="token punctuation">{</span>onComponentButtonClick<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>

Element:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span>onElementButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">on:</span>keydown=</span><span class="token language-javascript"><span class="token punctuation">{</span>onElementButtonClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,a;return{c(){n=new Bn(!1),a=tn(),this.h()},l(e){n=En(e,!1),a=tn(),this.h()},h(){n.a=a},m(e,s){n.m(t,e,s),r(e,a,s)},p:y,d(e){e&&u(a),e&&n.d()}}}function Jt(o){let n;const t=o[1].default,a=sn(t,o,o[2],Wn),e=a||Zt();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,Pt):en(s[2]),Wn)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}function Xt(o){let n;return{c(){n=m("regular DOM elements")},l(t){n=$(t,"regular DOM elements")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function ns(o){let n;return{c(){n=m("on:click")},l(t){n=$(t,"on:click")},m(t,a){r(t,n,a)},d(t){t&&u(n)}}}function ts(o){let n,t,a,e,s,c;return t=new R({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),e=new R({props:{$$slots:{default:[ns]},$$scope:{ctx:o}}}),{c(){n=m("We can also do the same thing with "),d(t.$$.fragment),a=m(", just add for example "),d(e.$$.fragment),s=m(" in all nested components and the click event will bubble to the parent.")},l(l){n=$(l,"We can also do the same thing with "),v(t.$$.fragment,l),a=$(l,", just add for example "),v(e.$$.fragment,l),s=$(l," in all nested components and the click event will bubble to the parent.")},m(l,i){r(l,n,i),C(t,l,i),r(l,a,i),C(e,l,i),r(l,s,i),c=!0},p(l,i){const h={};i&4&&(h.$$scope={dirty:i,ctx:l}),t.$set(h);const w={};i&4&&(w.$$scope={dirty:i,ctx:l}),e.$set(w)},i(l){c||(_(t.$$.fragment,l),_(e.$$.fragment,l),c=!0)},o(l){g(t.$$.fragment,l),g(e.$$.fragment,l),c=!1},d(l){l&&u(n),b(t,l),l&&u(a),b(e,l),l&&u(s)}}}function ss(o){let n,t;return n=new ht({}),{c(){d(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,e){C(n,a,e),t=!0},i(a){t||(_(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}function as(o){let n;const t=o[1].default,a=sn(t,o,o[2],Un),e=a||ss();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,Et):en(s[2]),Un)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}function es(o){let n,t=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> CustomButton <span class="token keyword">from</span> <span class="token string">"./CustomButton.svelte"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"you clicked the custom button!"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>`,a;return{c(){n=new Bn(!1),a=tn(),this.h()},l(e){n=En(e,!1),a=tn(),this.h()},h(){n.a=a},m(e,s){n.m(t,e,s),r(e,a,s)},p:y,d(e){e&&u(a),e&&n.d()}}}function os(o){let n;const t=o[1].default,a=sn(t,o,o[2],Vn),e=a||es();return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),n=!0},p(s,c){a&&a.p&&(!n||c&4)&&an(a,t,s,s[2],n?on(t,s[2],c,xt):en(s[2]),Vn)},i(s){n||(_(e,s),n=!0)},o(s){g(e,s),n=!1},d(s){e&&e.d(s)}}}var Ln,qn,Fn;function ps(o){let n,t,a,e,s,c,l,i,h,w,j,I,O,H,A,k,B=`<code class="language-svelte"><span class="token comment">&lt;!-- Parent2.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> Child2 <span class="token keyword">from</span> <span class="token string">"./Child2.svelte"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child2</span> <span class="token attr-name"><span class="token namespace">on:</span>componentButtonClick</span> <span class="token punctuation">/></span></span></code>`,N,U,K=`<code class="language-svelte"><span class="token comment">&lt;!-- Child2.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> GrandChild <span class="token keyword">from</span> <span class="token string">"./GrandChild.svelte"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GrandChild</span> <span class="token attr-name"><span class="token namespace">on:</span>componentButtonClick</span> <span class="token punctuation">/></span></span></code>`,cn,Q,zn=`<code class="language-svelte"><span class="token comment">&lt;!-- GrandChild.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> createEventDispatcher <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">createEventDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">function</span> <span class="token function">onClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">"componentButtonClick"</span><span class="token punctuation">,</span> <span class="token string">"button1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">function</span> <span class="token function">onClick2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">"componentButtonClick"</span><span class="token punctuation">,</span> <span class="token string">"button2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onClick1<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Click me 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onClick2<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Click me 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`,un,L,rn,X,q,kn,F,fn,Z,mn,nn,Y,$n;return n=new z({props:{$$slots:{default:[It]},$$scope:{ctx:o}}}),a=new z({props:{$$slots:{default:[Ht]},$$scope:{ctx:o}}}),c=new Cn({props:{src:String.raw(Ln||(Ln=vn([`<script>
import Parent from "./Parent.svelte";
function onElementButtonClick(event) {
console.log("onElementButtonClick", event.target.dataset.value);
}
function onComponentButtonClick(event) {
console.log("onComponentButtonClick", event.detail);
}
<\/script>
Component:
<Parent on:componentButtonClick={onComponentButtonClick} />
<hr />
Element:
<div on:click={onElementButtonClick} on:keydown={onElementButtonClick}>
<div>
<button data-value="button1">Click me 1</button>
<button data-value="button2">Click me 2</button>
</div>
</div>
<style>
</style>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Ut],example:[Ot]},$$scope:{ctx:o}}}),i=new z({props:{$$slots:{default:[St]},$$scope:{ctx:o}}}),w=new z({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),I=new z({props:{$$slots:{default:[qt]},$$scope:{ctx:o}}}),H=new z({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}}}),L=new z({props:{$$slots:{default:[zt]},$$scope:{ctx:o}}}),q=new Cn({props:{src:String.raw(qn||(qn=vn([`<script>
import Parent2 from "./Parent2.svelte";
function onElementButtonClick(event) {
console.log("onElementButtonClick", event.target.dataset.value);
}
function onComponentButtonClick(event) {
console.log("onComponentButtonClick", event.detail);
}
<\/script>
Component:
<Parent2 on:componentButtonClick={onComponentButtonClick} />
<hr />
Element:
<div on:click={onElementButtonClick} on:keydown={onElementButtonClick}>
<div>
<button data-value="button1">Click me 1</button>
<button data-value="button2">Click me 2</button>
</div>
</div>`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Jt],example:[Qt]},$$scope:{ctx:o}}}),F=new z({props:{$$slots:{default:[ts]},$$scope:{ctx:o}}}),Z=new Bt({}),Y=new Cn({props:{src:String.raw(Fn||(Fn=vn([`<script>
import CustomButton from "./CustomButton.svelte";
<\/script>
<CustomButton on:click={() => console.log("you clicked the custom button!")} />`]))),meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[os],example:[as]},$$scope:{ctx:o}}}),{c(){d(n.$$.fragment),t=P(),d(a.$$.fragment),e=P(),s=E("div"),d(c.$$.fragment),l=P(),d(i.$$.fragment),h=P(),d(w.$$.fragment),j=P(),d(I.$$.fragment),O=P(),d(H.$$.fragment),A=P(),k=E("pre"),N=P(),U=E("pre"),cn=P(),Q=E("pre"),un=P(),d(L.$$.fragment),rn=P(),X=E("div"),d(q.$$.fragment),kn=P(),d(F.$$.fragment),fn=P(),d(Z.$$.fragment),mn=P(),nn=E("div"),d(Y.$$.fragment),this.h()},l(p){v(n.$$.fragment,p),t=T(p),v(a.$$.fragment,p),e=T(p),s=x(p,"DIV",{});var f=D(s);v(c.$$.fragment,f),f.forEach(u),l=T(p),v(i.$$.fragment,p),h=T(p),v(w.$$.fragment,p),j=T(p),v(I.$$.fragment,p),O=T(p),v(H.$$.fragment,p),A=T(p),k=x(p,"PRE",{class:!0});var _n=D(k);_n.forEach(u),N=T(p),U=x(p,"PRE",{class:!0});var gn=D(U);gn.forEach(u),cn=T(p),Q=x(p,"PRE",{class:!0});var dn=D(Q);dn.forEach(u),un=T(p),v(L.$$.fragment,p),rn=T(p),X=x(p,"DIV",{});var pn=D(X);v(q.$$.fragment,pn),pn.forEach(u),kn=T(p),v(F.$$.fragment,p),fn=T(p),v(Z.$$.fragment,p),mn=T(p),nn=x(p,"DIV",{});var ln=D(nn);v(Y.$$.fragment,ln),ln.forEach(u),this.h()},h(){G(k,"class","language-svelte"),G(U,"class","language-svelte"),G(Q,"class","language-svelte")},m(p,f){C(n,p,f),r(p,t,f),C(a,p,f),r(p,e,f),r(p,s,f),C(c,s,null),r(p,l,f),C(i,p,f),r(p,h,f),C(w,p,f),r(p,j,f),C(I,p,f),r(p,O,f),C(H,p,f),r(p,A,f),r(p,k,f),k.innerHTML=B,r(p,N,f),r(p,U,f),U.innerHTML=K,r(p,cn,f),r(p,Q,f),Q.innerHTML=zn,r(p,un,f),C(L,p,f),r(p,rn,f),r(p,X,f),C(q,X,null),r(p,kn,f),C(F,p,f),r(p,fn,f),C(Z,p,f),r(p,mn,f),r(p,nn,f),C(Y,nn,null),$n=!0},p(p,f){const _n={};f&4&&(_n.$$scope={dirty:f,ctx:p}),n.$set(_n);const gn={};f&4&&(gn.$$scope={dirty:f,ctx:p}),a.$set(gn);const dn={};f&4&&(dn.$$scope={dirty:f,ctx:p}),c.$set(dn);const pn={};f&4&&(pn.$$scope={dirty:f,ctx:p}),i.$set(pn);const ln={};f&4&&(ln.$$scope={dirty:f,ctx:p}),w.$set(ln);const xn={};f&4&&(xn.$$scope={dirty:f,ctx:p}),I.$set(xn);const yn={};f&4&&(yn.$$scope={dirty:f,ctx:p}),H.$set(yn);const Pn={};f&4&&(Pn.$$scope={dirty:f,ctx:p}),L.$set(Pn);const Tn={};f&4&&(Tn.$$scope={dirty:f,ctx:p}),q.$set(Tn);const jn={};f&4&&(jn.$$scope={dirty:f,ctx:p}),F.$set(jn);const Dn={};f&4&&(Dn.$$scope={dirty:f,ctx:p}),Y.$set(Dn)},i(p){$n||(_(n.$$.fragment,p),_(a.$$.fragment,p),_(c.$$.fragment,p),_(i.$$.fragment,p),_(w.$$.fragment,p),_(I.$$.fragment,p),_(H.$$.fragment,p),_(L.$$.fragment,p),_(q.$$.fragment,p),_(F.$$.fragment,p),_(Z.$$.fragment,p),_(Y.$$.fragment,p),$n=!0)},o(p){g(n.$$.fragment,p),g(a.$$.fragment,p),g(c.$$.fragment,p),g(i.$$.fragment,p),g(w.$$.fragment,p),g(I.$$.fragment,p),g(H.$$.fragment,p),g(L.$$.fragment,p),g(q.$$.fragment,p),g(F.$$.fragment,p),g(Z.$$.fragment,p),g(Y.$$.fragment,p),$n=!1},d(p){b(n,p),p&&u(t),b(a,p),p&&u(e),p&&u(s),b(c),p&&u(l),b(i,p),p&&u(h),b(w,p),p&&u(j),b(I,p),p&&u(O),b(H,p),p&&u(A),p&&u(k),p&&u(N),p&&u(U),p&&u(cn),p&&u(Q),p&&u(un),b(L,p),p&&u(rn),p&&u(X),b(q),p&&u(kn),b(F,p),p&&u(fn),b(Z,p),p&&u(mn),p&&u(nn),b(Y)}}}function ls(o){let n,t;const a=[o[0],Rn];let e={$$slots:{default:[ps]},$$scope:{ctx:o}};for(let s=0;s<a.length;s+=1)e=bn(e,a[s]);return n=new Jn({props:e}),{c(){d(n.$$.fragment)},l(s){v(n.$$.fragment,s)},m(s,c){C(n,s,c),t=!0},p(s,[c]){const l=c&1?Zn(a,[c&1&&Hn(s[0]),c&0&&Hn(Rn)]):{};c&4&&(l.$$scope={dirty:c,ctx:s}),n.$set(l)},i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){g(n.$$.fragment,s),t=!1},d(s){b(n,s)}}}const Rn={title:"Forwarding component events",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-03T00:00:00.000Z",layout:"notes"};function cs(o,n,t){let{$$slots:a={},$$scope:e}=n;return o.$$set=s=>{t(0,n=bn(bn({},n),Mn(s))),"$$scope"in s&&t(2,e=s.$$scope)},n=Mn(n),[n,a,e]}class $s extends V{constructor(n){super(),S(this,n,cs,ls,W,{})}}export{$s as default,Rn as metadata};