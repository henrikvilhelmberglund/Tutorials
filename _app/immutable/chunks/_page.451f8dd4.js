import{S as j,i as V,s as E,k as N,a as T,q as i,l as q,c as R,m as ne,r as c,h as f,n as se,b as a,D as J,T as re,u as Re,H as O,y as w,z as g,A as v,g as h,d as b,B as d,o as Fe,K as xe,L as Ge,M as De,N as Ke}from"./index.0b5cc0d7.js";import{M as Qe,P as H}from"./mdsvex-layout-notes.c527e9b3.js";import{S as te}from"./ShowMany.5b53376e.js";import{S}from"./Strong.272c5f79.js";function Xe(o){let e,t,s,$,n,u,l;return{c(){e=N("input"),t=T(),s=N("h1"),$=i("value: "),n=i(o[0]),this.h()},l(I){e=q(I,"INPUT",{type:!0}),t=R(I),s=q(I,"H1",{});var p=ne(s);$=c(p,"value: "),n=c(p,o[0]),p.forEach(f),this.h()},h(){se(e,"type","text")},m(I,p){a(I,e,p),a(I,t,p),a(I,s,p),J(s,$),J(s,n),u||(l=re(e,"input",o[2]),u=!0)},p(I,[p]){p&1&&Re(n,I[0])},i:O,o:O,d(I){I&&f(e),I&&f(t),I&&f(s),u=!1,l()}}}function et(o,e,t){let s="";function $(u){t(0,s=u)}return[s,$,u=>$(u.currentTarget.value)]}class tt extends j{constructor(e){super(),V(this,e,et,Xe,E,{})}}function nt(o){let e,t;return e=new tt({}),{c(){w(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,$){v(e,s,$),t=!0},p:O,i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){d(e,s)}}}class ve extends j{constructor(e){super(),V(this,e,null,nt,E,{})}}const st=`<script>\r
	import Sample from "./Sample.svelte";\r
<\/script>\r
\r
<Sample />\r
`,rt=`<script>\r
	let value = "";\r
\r
	function update(newValue) {\r
		value = newValue;\r
	}\r
<\/script>\r
\r
<input on:input={(e) => update(e.currentTarget.value)} type="text" />\r
\r
<h1>value: {value}</h1>\r
`;function $t(o){let e,t,s;return{c(){e=N("input"),this.h()},l($){e=q($,"INPUT",{type:!0}),this.h()},h(){se(e,"type","text")},m($,n){a($,e,n),t||(s=re(e,"input",o[1]),t=!0)},p:O,i:O,o:O,d($){$&&f(e),t=!1,s()}}}function ut(o){function e(s){}return[e,s=>(s.currentTarget.value,void 0)]}class ot extends j{constructor(e){super(),V(this,e,ut,$t,E,{})}}const ft=`<script>\r
	let value = "";\r
\r
	function update(newValue) {\r
		value = newValue;\r
	}\r
<\/script>\r
\r
<input on:input={(e) => update(e.currentTarget.value)} type="text" />\r
`;function pt(o){let e,t,s;return{c(){e=N("h1"),t=i("value: "),s=i(Le)},l($){e=q($,"H1",{});var n=ne(e);t=c(n,"value: "),s=c(n,Le),n.forEach(f)},m($,n){a($,e,n),J(e,t),J(e,s)},p:O,i:O,o:O,d($){$&&f(e)}}}let Le="";class at extends j{constructor(e){super(),V(this,e,null,pt,E,{})}}const lt=`<script>\r
	let value = "";\r
<\/script>\r
\r
<h1>value: {value}</h1>\r
`;function mt(o){let e,t,s,$;return e=new ot({}),s=new at({}),{c(){w(e.$$.fragment),t=T(),w(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=R(n),g(s.$$.fragment,n)},m(n,u){v(e,n,u),a(n,t,u),v(s,n,u),$=!0},p:O,i(n){$||(h(e.$$.fragment,n),h(s.$$.fragment,n),$=!0)},o(n){b(e.$$.fragment,n),b(s.$$.fragment,n),$=!1},d(n){d(e,n),n&&f(t),d(s,n)}}}class it extends j{constructor(e){super(),V(this,e,null,mt,E,{})}}const ct=`<script>\r
	import Input from "./Input.svelte";\r
	import Output from "./Output.svelte";\r
<\/script>\r
\r
<Input />\r
<Output />\r
`;let Oe="";function _t(o){Oe=o}function wt(o){let e,t,s;return{c(){e=N("input"),this.h()},l($){e=q($,"INPUT",{type:!0}),this.h()},h(){se(e,"type","text")},m($,n){a($,e,n),t||(s=re(e,"input",o[0]),t=!0)},p:O,i:O,o:O,d($){$&&f(e),t=!1,s()}}}function gt(o){return[t=>_t(t.currentTarget.value)]}class vt extends j{constructor(e){super(),V(this,e,gt,wt,E,{})}}const ht=`<script>\r
	import { update } from "./data";\r
<\/script>\r
\r
<input on:input={(e) => update(e.currentTarget.value)} type="text" />\r
`;function bt(o){let e,t,s;return{c(){e=N("h1"),t=i("value: "),s=i(Oe)},l($){e=q($,"H1",{});var n=ne(e);t=c(n,"value: "),s=c(n,Oe),n.forEach(f)},m($,n){a($,e,n),J(e,t),J(e,s)},p:O,i:O,o:O,d($){$&&f(e)}}}class dt extends j{constructor(e){super(),V(this,e,null,bt,E,{})}}const It=`<script>\r
	import { value } from "./data";\r
<\/script>\r
\r
<h1>value: {value}</h1>\r
`;function xt(o){let e,t,s,$;return e=new vt({}),s=new dt({}),{c(){w(e.$$.fragment),t=T(),w(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=R(n),g(s.$$.fragment,n)},m(n,u){v(e,n,u),a(n,t,u),v(s,n,u),$=!0},p:O,i(n){$||(h(e.$$.fragment,n),h(s.$$.fragment,n),$=!0)},o(n){b(e.$$.fragment,n),b(s.$$.fragment,n),$=!1},d(n){d(e,n),n&&f(t),d(s,n)}}}class he extends j{constructor(e){super(),V(this,e,null,xt,E,{})}}const Ot=`<script>\r
	import Input2 from "./Input2.svelte";\r
	import Output2 from "./Output2.svelte";\r
<\/script>\r
\r
<Input2 />\r
<Output2 />\r
`,At=`export let value = "";\r
\r
export function update(newValue) {\r
  value = newValue;\r
}`;let Ae="";function Tt(o){Ae=o,ye.forEach(e=>e())}let ye=[];function Rt(o){ye.push(o)}function St(o){let e,t,s;return{c(){e=N("input"),this.h()},l($){e=q($,"INPUT",{type:!0}),this.h()},h(){se(e,"type","text")},m($,n){a($,e,n),t||(s=re(e,"input",o[0]),t=!0)},p:O,i:O,o:O,d($){$&&f(e),t=!1,s()}}}function kt(o){return[t=>Tt(t.currentTarget.value)]}class Ht extends j{constructor(e){super(),V(this,e,kt,St,E,{})}}const Wt=`<script>\r
	import { update } from "./data2";\r
<\/script>\r
\r
<input on:input={(e) => update(e.currentTarget.value)} type="text" />\r
`;function jt(o){let e,t,s;return{c(){e=N("h1"),t=i("value: "),s=i(o[0])},l($){e=q($,"H1",{});var n=ne(e);t=c(n,"value: "),s=c(n,o[0]),n.forEach(f)},m($,n){a($,e,n),J(e,t),J(e,s)},p($,[n]){n&1&&Re(s,$[0])},i:O,o:O,d($){$&&f(e)}}}function Vt(o,e,t){let s=Ae;return Rt(()=>{t(0,s=Ae)}),[s]}class Et extends j{constructor(e){super(),V(this,e,Vt,jt,E,{})}}const Mt=`<script>\r
	import { value, subscribe } from "./data2";\r
\r
  let _value = value;\r
	subscribe(() => {\r
		_value = value;\r
	});\r
<\/script>\r
\r
<h1>value: {_value}</h1>\r
`;function Pt(o){let e,t,s,$;return e=new Ht({}),s=new Et({}),{c(){w(e.$$.fragment),t=T(),w(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=R(n),g(s.$$.fragment,n)},m(n,u){v(e,n,u),a(n,t,u),v(s,n,u),$=!0},p:O,i(n){$||(h(e.$$.fragment,n),h(s.$$.fragment,n),$=!0)},o(n){b(e.$$.fragment,n),b(s.$$.fragment,n),$=!1},d(n){d(e,n),n&&f(t),d(s,n)}}}class be extends j{constructor(e){super(),V(this,e,null,Pt,E,{})}}const Ut=`<script>\r
	import Input3 from "./Input3.svelte";\r
	import Output3 from "./Output3.svelte";\r
<\/script>\r
\r
<Input3 />\r
<Output3 />\r
`,Nt=`export let value = "";\r
\r
export function update(newValue) {\r
	value = newValue;\r
\r
	subscribers.forEach((fn) => fn());\r
}\r
\r
let subscribers = [];\r
\r
export function subscribe(fn) {\r
	subscribers.push(fn);\r
}\r
`;let Te="";function qt(o){Te=o,Ie.forEach(e=>e())}let Ie=[];function Jt(o){return Ie.push(o),function(t){Ie.splice(Ie.indexOf(t),1)}}function Yt(o){let e,t,s;return{c(){e=N("input"),this.h()},l($){e=q($,"INPUT",{type:!0}),this.h()},h(){se(e,"type","text")},m($,n){a($,e,n),t||(s=re(e,"input",o[0]),t=!0)},p:O,i:O,o:O,d($){$&&f(e),t=!1,s()}}}function zt(o){return[t=>qt(t.currentTarget.value)]}class Bt extends j{constructor(e){super(),V(this,e,zt,Yt,E,{})}}const Ct=`<script>\r
	import { update } from "./data3";\r
<\/script>\r
\r
<input on:input={(e) => update(e.currentTarget.value)} type="text" />\r
`;function Dt(o){let e,t,s;return{c(){e=N("h1"),t=i("value: "),s=i(o[0])},l($){e=q($,"H1",{});var n=ne(e);t=c(n,"value: "),s=c(n,o[0]),n.forEach(f)},m($,n){a($,e,n),J(e,t),J(e,s)},p($,[n]){n&1&&Re(s,$[0])},i:O,o:O,d($){$&&f(e)}}}function Kt(o,e,t){let s=Te;return Fe(()=>Jt(()=>{t(0,s=Te)})),[s]}class Lt extends j{constructor(e){super(),V(this,e,Kt,Dt,E,{})}}const Zt=`<script>\r
	import { value, subscribe } from "./data3";\r
	import { onMount } from "svelte";\r
\r
	let _value = value;\r
\r
  // whenever the component is unmounted the returned unsubscribe function in\r
  // data3.js is run so the function is removed from the subscribers list\r
	onMount(() => {\r
		return subscribe(() => {\r
			_value = value;\r
		});\r
	});\r
<\/script>\r
\r
<h1>value: {_value}</h1>\r
`;function yt(o){let e,t,s,$;return e=new Bt({}),s=new Lt({}),{c(){w(e.$$.fragment),t=T(),w(s.$$.fragment)},l(n){g(e.$$.fragment,n),t=R(n),g(s.$$.fragment,n)},m(n,u){v(e,n,u),a(n,t,u),v(s,n,u),$=!0},p:O,i(n){$||(h(e.$$.fragment,n),h(s.$$.fragment,n),$=!0)},o(n){b(e.$$.fragment,n),b(s.$$.fragment,n),$=!1},d(n){d(e,n),n&&f(t),d(s,n)}}}class de extends j{constructor(e){super(),V(this,e,null,yt,E,{})}}const Ft=`<script>\r
	import Input4 from "./Input4.svelte";\r
	import Output4 from "./Output4.svelte";\r
<\/script>\r
\r
<Input4 />\r
<Output4 />\r
`,Gt=`export let value = "";\r
\r
export function update(newValue) {\r
	value = newValue;\r
\r
	subscribers.forEach((fn) => fn());\r
}\r
\r
let subscribers = [];\r
\r
export function subscribe(fn) {\r
	subscribers.push(fn);\r
\r
	return function unsubscribe(fn) {\r
		subscribers.splice(subscribers.indexOf(fn), 1);\r
	};\r
}\r
`;function Qt(o){let e;return{c(){e=i("How do we share states across two components?")},l(t){e=c(t,"How do we share states across two components?")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Xt(o){let e;return{c(){e=i("Here we have a component that we're later going two split into two components, each handling a different task.")},l(t){e=c(t,"Here we have a component that we're later going two split into two components, each handling a different task.")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function en(o){let e;return{c(){e=i("After splitting it we have this:")},l(t){e=c(t,"After splitting it we have this:")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function tn(o){let e;return{c(){e=i("value")},l(t){e=c(t,"value")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function nn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[tn]},$$scope:{ctx:o}}}),{c(){e=i("How do we share the "),w(t.$$.fragment),s=i(" variable?")},l(n){e=c(n,"How do we share the "),g(t.$$.fragment,n),s=c(n," variable?")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function sn(o){let e;return{c(){e=i("value")},l(t){e=c(t,"value")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function rn(o){let e;return{c(){e=i("props")},l(t){e=c(t,"props")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function $n(o){let e;return{c(){e=i("context")},l(t){e=c(t,"context")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function un(o){let e,t,s,$,n,u,l,I;return t=new S({props:{$$slots:{default:[sn]},$$scope:{ctx:o}}}),$=new S({props:{$$slots:{default:[rn]},$$scope:{ctx:o}}}),u=new S({props:{$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){e=i("We could have "),w(t.$$.fragment),s=i(" in App2.svelte and pass the value by "),w($.$$.fragment),n=i(" or "),w(u.$$.fragment),l=i(", but perhaps we don't want have that value variable in App2.svelte since it's really only loading the components.")},l(p){e=c(p,"We could have "),g(t.$$.fragment,p),s=c(p," in App2.svelte and pass the value by "),g($.$$.fragment,p),n=c(p," or "),g(u.$$.fragment,p),l=c(p,", but perhaps we don't want have that value variable in App2.svelte since it's really only loading the components.")},m(p,x){a(p,e,x),v(t,p,x),a(p,s,x),v($,p,x),a(p,n,x),v(u,p,x),a(p,l,x),I=!0},p(p,x){const k={};x&2&&(k.$$scope={dirty:x,ctx:p}),t.$set(k);const W={};x&2&&(W.$$scope={dirty:x,ctx:p}),$.$set(W);const _={};x&2&&(_.$$scope={dirty:x,ctx:p}),u.$set(_)},i(p){I||(h(t.$$.fragment,p),h($.$$.fragment,p),h(u.$$.fragment,p),I=!0)},o(p){b(t.$$.fragment,p),b($.$$.fragment,p),b(u.$$.fragment,p),I=!1},d(p){p&&f(e),d(t,p),p&&f(s),d($,p),p&&f(n),d(u,p),p&&f(l)}}}function on(o){let e;return{c(){e=i("data.js")},l(t){e=c(t,"data.js")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function fn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){e=i("We could instead have another file called "),w(t.$$.fragment),s=i(" where we put the value variable and the function to update it, and import these into the Input and Output components.")},l(n){e=c(n,"We could instead have another file called "),g(t.$$.fragment,n),s=c(n," where we put the value variable and the function to update it, and import these into the Input and Output components.")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function pn(o){let e;return{c(){e=i("doesn't work")},l(t){e=c(t,"doesn't work")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function an(o){let e;return{c(){e=i("data.js")},l(t){e=c(t,"data.js")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function ln(o){let e;return{c(){e=i("Javascript file")},l(t){e=c(t,"Javascript file")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function mn(o){let e;return{c(){e=i("value")},l(t){e=c(t,"value")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function cn(o){let e;return{c(){e=i("reactive")},l(t){e=c(t,"reactive")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function _n(o){let e,t,s,$,n,u,l,I,p,x,k,W;return t=new S({props:{$$slots:{default:[pn]},$$scope:{ctx:o}}}),$=new S({props:{$$slots:{default:[an]},$$scope:{ctx:o}}}),u=new S({props:{$$slots:{default:[ln]},$$scope:{ctx:o}}}),I=new S({props:{$$slots:{default:[mn]},$$scope:{ctx:o}}}),x=new S({props:{$$slots:{default:[cn]},$$scope:{ctx:o}}}),{c(){e=i("However, when we type we notice that it "),w(t.$$.fragment),s=i("! This is because "),w($.$$.fragment),n=i(" is a "),w(u.$$.fragment),l=i(" and not a .svelte file, so the "),w(I.$$.fragment),p=i(" variable isn't "),w(x.$$.fragment),k=i(".")},l(_){e=c(_,"However, when we type we notice that it "),g(t.$$.fragment,_),s=c(_,"! This is because "),g($.$$.fragment,_),n=c(_," is a "),g(u.$$.fragment,_),l=c(_," and not a .svelte file, so the "),g(I.$$.fragment,_),p=c(_," variable isn't "),g(x.$$.fragment,_),k=c(_,".")},m(_,A){a(_,e,A),v(t,_,A),a(_,s,A),v($,_,A),a(_,n,A),v(u,_,A),a(_,l,A),v(I,_,A),a(_,p,A),v(x,_,A),a(_,k,A),W=!0},p(_,A){const M={};A&2&&(M.$$scope={dirty:A,ctx:_}),t.$set(M);const G={};A&2&&(G.$$scope={dirty:A,ctx:_}),$.$set(G);const U={};A&2&&(U.$$scope={dirty:A,ctx:_}),u.$set(U);const Q={};A&2&&(Q.$$scope={dirty:A,ctx:_}),I.$set(Q);const P={};A&2&&(P.$$scope={dirty:A,ctx:_}),x.$set(P)},i(_){W||(h(t.$$.fragment,_),h($.$$.fragment,_),h(u.$$.fragment,_),h(I.$$.fragment,_),h(x.$$.fragment,_),W=!0)},o(_){b(t.$$.fragment,_),b($.$$.fragment,_),b(u.$$.fragment,_),b(I.$$.fragment,_),b(x.$$.fragment,_),W=!1},d(_){_&&f(e),d(t,_),_&&f(s),d($,_),_&&f(n),d(u,_),_&&f(l),d(I,_),_&&f(p),d(x,_),_&&f(k)}}}function wn(o){let e;return{c(){e=i("Is there a way we can fix this?")},l(t){e=c(t,"Is there a way we can fix this?")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function gn(o){let e;return{c(){e=i("subscription model")},l(t){e=c(t,"subscription model")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function vn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[gn]},$$scope:{ctx:o}}}),{c(){e=i("We could try having a "),w(t.$$.fragment),s=i(" (event listener style) where we subscribe to the changes in data.js, when there's a change, we can rerender by ourselvees.")},l(n){e=c(n,"We could try having a "),g(t.$$.fragment,n),s=c(n," (event listener style) where we subscribe to the changes in data.js, when there's a change, we can rerender by ourselvees.")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function hn(o){let e;return{c(){e=i("rerender")},l(t){e=c(t,"rerender")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function bn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[hn]},$$scope:{ctx:o}}}),{c(){e=i("We subscribe to the data and whenever the data changes we get notified and update the internal state (the _value variable) and since that was assigned in a .svelte file whenever _value changes we "),w(t.$$.fragment),s=i(".")},l(n){e=c(n,"We subscribe to the data and whenever the data changes we get notified and update the internal state (the _value variable) and since that was assigned in a .svelte file whenever _value changes we "),g(t.$$.fragment,n),s=c(n,".")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function dn(o){let e;return{c(){e=i("This")},l(t){e=c(t,"This")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function In(o){let e;return{c(){e=i("Svelte store")},l(t){e=c(t,"Svelte store")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function xn(o){let e,t,s,$,n;return e=new S({props:{$$slots:{default:[dn]},$$scope:{ctx:o}}}),s=new S({props:{$$slots:{default:[In]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),t=i(" is the concept of a "),w(s.$$.fragment),$=i(".")},l(u){g(e.$$.fragment,u),t=c(u," is the concept of a "),g(s.$$.fragment,u),$=c(u,".")},m(u,l){v(e,u,l),a(u,t,l),v(s,u,l),a(u,$,l),n=!0},p(u,l){const I={};l&2&&(I.$$scope={dirty:l,ctx:u}),e.$set(I);const p={};l&2&&(p.$$scope={dirty:l,ctx:u}),s.$set(p)},i(u){n||(h(e.$$.fragment,u),h(s.$$.fragment,u),n=!0)},o(u){b(e.$$.fragment,u),b(s.$$.fragment,u),n=!1},d(u){d(e,u),u&&f(t),d(s,u),u&&f($)}}}function On(o){let e;return{c(){e=i("You can have a variable or some kind of state in your application that is not a part of your app component hierarchy, meaning it can live in a separate .js file.")},l(t){e=c(t,"You can have a variable or some kind of state in your application that is not a part of your app component hierarchy, meaning it can live in a separate .js file.")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function An(o){let e;return{c(){e=i("any component")},l(t){e=c(t,"any component")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Tn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[An]},$$scope:{ctx:o}}}),{c(){e=i("We can then import that file and use the store in "),w(t.$$.fragment),s=i(" without paying attention to the relationships between the components.")},l(n){e=c(n,"We can then import that file and use the store in "),g(t.$$.fragment,n),s=c(n," without paying attention to the relationships between the components.")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function Rn(o){let e;return{c(){e=i("way to change the value")},l(t){e=c(t,"way to change the value")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Sn(o){let e;return{c(){e=i("subscribe")},l(t){e=c(t,"subscribe")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function kn(o){let e;return{c(){e=i("you get notified")},l(t){e=c(t,"you get notified")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Hn(o){let e,t,s,$,n,u,l,I;return t=new S({props:{$$slots:{default:[Rn]},$$scope:{ctx:o}}}),$=new S({props:{$$slots:{default:[Sn]},$$scope:{ctx:o}}}),u=new S({props:{$$slots:{default:[kn]},$$scope:{ctx:o}}}),{c(){e=i("After that we provide a "),w(t.$$.fragment),s=i(" and a way to "),w($.$$.fragment),n=i(" to that value so when it changes "),w(u.$$.fragment),l=i(".")},l(p){e=c(p,"After that we provide a "),g(t.$$.fragment,p),s=c(p," and a way to "),g($.$$.fragment,p),n=c(p," to that value so when it changes "),g(u.$$.fragment,p),l=c(p,".")},m(p,x){a(p,e,x),v(t,p,x),a(p,s,x),v($,p,x),a(p,n,x),v(u,p,x),a(p,l,x),I=!0},p(p,x){const k={};x&2&&(k.$$scope={dirty:x,ctx:p}),t.$set(k);const W={};x&2&&(W.$$scope={dirty:x,ctx:p}),$.$set(W);const _={};x&2&&(_.$$scope={dirty:x,ctx:p}),u.$set(_)},i(p){I||(h(t.$$.fragment,p),h($.$$.fragment,p),h(u.$$.fragment,p),I=!0)},o(p){b(t.$$.fragment,p),b($.$$.fragment,p),b(u.$$.fragment,p),I=!1},d(p){p&&f(e),d(t,p),p&&f(s),d($,p),p&&f(n),d(u,p),p&&f(l)}}}function Wn(o){let e;return{c(){e=i("unsubscribe")},l(t){e=c(t,"unsubscribe")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function jn(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[Wn]},$$scope:{ctx:o}}}),{c(){e=i("Whenever we subscribe we also need a way to "),w(t.$$.fragment),s=i(".")},l(n){e=c(n,"Whenever we subscribe we also need a way to "),g(t.$$.fragment,n),s=c(n,".")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function Vn(o){let e;return{c(){e=i("unmonted")},l(t){e=c(t,"unmonted")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function En(o){let e,t,s,$;return t=new S({props:{$$slots:{default:[Vn]},$$scope:{ctx:o}}}),{c(){e=i("Unsubscribing in this way using onMount will make sure the subscribed function is removed when the component is "),w(t.$$.fragment),s=i(".")},l(n){e=c(n,"Unsubscribing in this way using onMount will make sure the subscribed function is removed when the component is "),g(t.$$.fragment,n),s=c(n,".")},m(n,u){a(n,e,u),v(t,n,u),a(n,s,u),$=!0},p(n,u){const l={};u&2&&(l.$$scope={dirty:u,ctx:n}),t.$set(l)},i(n){$||(h(t.$$.fragment,n),$=!0)},o(n){b(t.$$.fragment,n),$=!1},d(n){n&&f(e),d(t,n),n&&f(s)}}}function Mn(o){let e;return{c(){e=i("store")},l(t){e=c(t,"store")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Pn(o){let e;return{c(){e=i("store creation functions provided in Svelte")},l(t){e=c(t,"store creation functions provided in Svelte")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function Un(o){let e,t,s,$,n,u;return t=new S({props:{$$slots:{default:[Mn]},$$scope:{ctx:o}}}),$=new S({props:{$$slots:{default:[Pn]},$$scope:{ctx:o}}}),{c(){e=i("We can implement a "),w(t.$$.fragment),s=i(" like this by ourselves or use the "),w($.$$.fragment),n=i(" which we'll do next.")},l(l){e=c(l,"We can implement a "),g(t.$$.fragment,l),s=c(l," like this by ourselves or use the "),g($.$$.fragment,l),n=c(l," which we'll do next.")},m(l,I){a(l,e,I),v(t,l,I),a(l,s,I),v($,l,I),a(l,n,I),u=!0},p(l,I){const p={};I&2&&(p.$$scope={dirty:I,ctx:l}),t.$set(p);const x={};I&2&&(x.$$scope={dirty:I,ctx:l}),$.$set(x)},i(l){u||(h(t.$$.fragment,l),h($.$$.fragment,l),u=!0)},o(l){b(t.$$.fragment,l),b($.$$.fragment,l),u=!1},d(l){l&&f(e),d(t,l),l&&f(s),d($,l),l&&f(n)}}}function Nn(o){let e,t,s,$,n,u,l,I,p,x,k,W,_,A,M,G,U,Q,P,$e,Y,ue,z,oe,X,fe,B,pe,C,ae,D,le,K,me,L,ie,Z,ce,ee,_e,y,we,F,ge;return e=new H({props:{$$slots:{default:[Qt]},$$scope:{ctx:o}}}),s=new H({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),n=new te({props:{name:[{name:"App",comp:ve,raw:st,text:""},{name:"Sample",comp:ve,raw:rt}]}}),l=new H({props:{$$slots:{default:[en]},$$scope:{ctx:o}}}),p=new te({props:{name:[{name:"App2",comp:it,raw:ct,text:""},{name:"Input",comp:ve,raw:ft},{name:"Output",comp:ve,raw:lt}]}}),k=new H({props:{$$slots:{default:[nn]},$$scope:{ctx:o}}}),_=new H({props:{$$slots:{default:[un]},$$scope:{ctx:o}}}),M=new H({props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}),U=new te({props:{name:[{name:"App3",comp:he,raw:Ot,text:""},{name:"Input2",comp:he,raw:ht},{name:"Output2",comp:he,raw:It},{name:"data.js",comp:he,raw:At}]}}),P=new H({props:{$$slots:{default:[_n]},$$scope:{ctx:o}}}),Y=new H({props:{$$slots:{default:[wn]},$$scope:{ctx:o}}}),z=new H({props:{$$slots:{default:[vn]},$$scope:{ctx:o}}}),X=new te({props:{name:[{name:"App4",comp:be,raw:Ut,text:""},{name:"Input3",comp:be,raw:Wt},{name:"Output3",comp:be,raw:Mt},{name:"data2.js",comp:be,raw:Nt}]}}),B=new H({props:{$$slots:{default:[bn]},$$scope:{ctx:o}}}),C=new H({props:{$$slots:{default:[xn]},$$scope:{ctx:o}}}),D=new H({props:{$$slots:{default:[On]},$$scope:{ctx:o}}}),K=new H({props:{$$slots:{default:[Tn]},$$scope:{ctx:o}}}),L=new H({props:{$$slots:{default:[Hn]},$$scope:{ctx:o}}}),Z=new H({props:{$$slots:{default:[jn]},$$scope:{ctx:o}}}),ee=new te({props:{name:[{name:"App5",comp:de,raw:Ft,text:""},{name:"Input4",comp:de,raw:Ct},{name:"Output4",comp:de,raw:Zt},{name:"data3.js",comp:de,raw:Gt}]}}),y=new H({props:{$$slots:{default:[En]},$$scope:{ctx:o}}}),F=new H({props:{$$slots:{default:[Un]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment),t=T(),w(s.$$.fragment),$=T(),w(n.$$.fragment),u=T(),w(l.$$.fragment),I=T(),w(p.$$.fragment),x=T(),w(k.$$.fragment),W=T(),w(_.$$.fragment),A=T(),w(M.$$.fragment),G=T(),w(U.$$.fragment),Q=T(),w(P.$$.fragment),$e=T(),w(Y.$$.fragment),ue=T(),w(z.$$.fragment),oe=T(),w(X.$$.fragment),fe=T(),w(B.$$.fragment),pe=T(),w(C.$$.fragment),ae=T(),w(D.$$.fragment),le=T(),w(K.$$.fragment),me=T(),w(L.$$.fragment),ie=T(),w(Z.$$.fragment),ce=T(),w(ee.$$.fragment),_e=T(),w(y.$$.fragment),we=T(),w(F.$$.fragment)},l(r){g(e.$$.fragment,r),t=R(r),g(s.$$.fragment,r),$=R(r),g(n.$$.fragment,r),u=R(r),g(l.$$.fragment,r),I=R(r),g(p.$$.fragment,r),x=R(r),g(k.$$.fragment,r),W=R(r),g(_.$$.fragment,r),A=R(r),g(M.$$.fragment,r),G=R(r),g(U.$$.fragment,r),Q=R(r),g(P.$$.fragment,r),$e=R(r),g(Y.$$.fragment,r),ue=R(r),g(z.$$.fragment,r),oe=R(r),g(X.$$.fragment,r),fe=R(r),g(B.$$.fragment,r),pe=R(r),g(C.$$.fragment,r),ae=R(r),g(D.$$.fragment,r),le=R(r),g(K.$$.fragment,r),me=R(r),g(L.$$.fragment,r),ie=R(r),g(Z.$$.fragment,r),ce=R(r),g(ee.$$.fragment,r),_e=R(r),g(y.$$.fragment,r),we=R(r),g(F.$$.fragment,r)},m(r,m){v(e,r,m),a(r,t,m),v(s,r,m),a(r,$,m),v(n,r,m),a(r,u,m),v(l,r,m),a(r,I,m),v(p,r,m),a(r,x,m),v(k,r,m),a(r,W,m),v(_,r,m),a(r,A,m),v(M,r,m),a(r,G,m),v(U,r,m),a(r,Q,m),v(P,r,m),a(r,$e,m),v(Y,r,m),a(r,ue,m),v(z,r,m),a(r,oe,m),v(X,r,m),a(r,fe,m),v(B,r,m),a(r,pe,m),v(C,r,m),a(r,ae,m),v(D,r,m),a(r,le,m),v(K,r,m),a(r,me,m),v(L,r,m),a(r,ie,m),v(Z,r,m),a(r,ce,m),v(ee,r,m),a(r,_e,m),v(y,r,m),a(r,we,m),v(F,r,m),ge=!0},p(r,m){const Se={};m&2&&(Se.$$scope={dirty:m,ctx:r}),e.$set(Se);const ke={};m&2&&(ke.$$scope={dirty:m,ctx:r}),s.$set(ke);const He={};m&2&&(He.$$scope={dirty:m,ctx:r}),l.$set(He);const We={};m&2&&(We.$$scope={dirty:m,ctx:r}),k.$set(We);const je={};m&2&&(je.$$scope={dirty:m,ctx:r}),_.$set(je);const Ve={};m&2&&(Ve.$$scope={dirty:m,ctx:r}),M.$set(Ve);const Ee={};m&2&&(Ee.$$scope={dirty:m,ctx:r}),P.$set(Ee);const Me={};m&2&&(Me.$$scope={dirty:m,ctx:r}),Y.$set(Me);const Pe={};m&2&&(Pe.$$scope={dirty:m,ctx:r}),z.$set(Pe);const Ue={};m&2&&(Ue.$$scope={dirty:m,ctx:r}),B.$set(Ue);const Ne={};m&2&&(Ne.$$scope={dirty:m,ctx:r}),C.$set(Ne);const qe={};m&2&&(qe.$$scope={dirty:m,ctx:r}),D.$set(qe);const Je={};m&2&&(Je.$$scope={dirty:m,ctx:r}),K.$set(Je);const Ye={};m&2&&(Ye.$$scope={dirty:m,ctx:r}),L.$set(Ye);const ze={};m&2&&(ze.$$scope={dirty:m,ctx:r}),Z.$set(ze);const Be={};m&2&&(Be.$$scope={dirty:m,ctx:r}),y.$set(Be);const Ce={};m&2&&(Ce.$$scope={dirty:m,ctx:r}),F.$set(Ce)},i(r){ge||(h(e.$$.fragment,r),h(s.$$.fragment,r),h(n.$$.fragment,r),h(l.$$.fragment,r),h(p.$$.fragment,r),h(k.$$.fragment,r),h(_.$$.fragment,r),h(M.$$.fragment,r),h(U.$$.fragment,r),h(P.$$.fragment,r),h(Y.$$.fragment,r),h(z.$$.fragment,r),h(X.$$.fragment,r),h(B.$$.fragment,r),h(C.$$.fragment,r),h(D.$$.fragment,r),h(K.$$.fragment,r),h(L.$$.fragment,r),h(Z.$$.fragment,r),h(ee.$$.fragment,r),h(y.$$.fragment,r),h(F.$$.fragment,r),ge=!0)},o(r){b(e.$$.fragment,r),b(s.$$.fragment,r),b(n.$$.fragment,r),b(l.$$.fragment,r),b(p.$$.fragment,r),b(k.$$.fragment,r),b(_.$$.fragment,r),b(M.$$.fragment,r),b(U.$$.fragment,r),b(P.$$.fragment,r),b(Y.$$.fragment,r),b(z.$$.fragment,r),b(X.$$.fragment,r),b(B.$$.fragment,r),b(C.$$.fragment,r),b(D.$$.fragment,r),b(K.$$.fragment,r),b(L.$$.fragment,r),b(Z.$$.fragment,r),b(ee.$$.fragment,r),b(y.$$.fragment,r),b(F.$$.fragment,r),ge=!1},d(r){d(e,r),r&&f(t),d(s,r),r&&f($),d(n,r),r&&f(u),d(l,r),r&&f(I),d(p,r),r&&f(x),d(k,r),r&&f(W),d(_,r),r&&f(A),d(M,r),r&&f(G),d(U,r),r&&f(Q),d(P,r),r&&f($e),d(Y,r),r&&f(ue),d(z,r),r&&f(oe),d(X,r),r&&f(fe),d(B,r),r&&f(pe),d(C,r),r&&f(ae),d(D,r),r&&f(le),d(K,r),r&&f(me),d(L,r),r&&f(ie),d(Z,r),r&&f(ce),d(ee,r),r&&f(_e),d(y,r),r&&f(we),d(F,r)}}}function qn(o){let e,t;const s=[o[0],Ze];let $={$$slots:{default:[Nn]},$$scope:{ctx:o}};for(let n=0;n<s.length;n+=1)$=xe($,s[n]);return e=new Qe({props:$}),{c(){w(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,u){v(e,n,u),t=!0},p(n,[u]){const l=u&1?Ge(s,[u&1&&De(n[0]),u&0&&De(Ze)]):{};u&2&&(l.$$scope={dirty:u,ctx:n}),e.$set(l)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){d(e,n)}}}const Ze={title:"Intro to Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function Jn(o,e,t){return o.$$set=s=>{t(0,e=xe(xe({},e),Ke(s)))},e=Ke(e),[e]}class Dn extends j{constructor(e){super(),V(this,e,Jn,qn,E,{})}}export{Dn as default,Ze as metadata};