import{ad as Ae,o as Ie,s as W,f as N,a as T,e as Pt,g as L,u as $t,c as E,j as q,i as _,ae as H,X as M,z as G,d as u,H as J,A as F,l as w,h as R,m as k,v as y,a8 as ct,al as Y,r as Pe,k as jt,w as je,x as qe,y as Ve,B as qt,n as S,C as St,D as fe}from"./scheduler.a7cd560e.js";import{S as X,i as Z,a as U,t as D,b as C,d as A,m as I,g as Re,c as Oe,e as P}from"./index.396264e7.js";import{g as Me,a as ue}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Se,P as z}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as Ht,d as Vt}from"./index.5e192797.js";import{e as mt}from"./each.32d06572.js";import{S as Rt}from"./ShowMany.db7be1f3.js";import{U as ze}from"./Ul.01790c78.js";import{H as Ot}from"./H3.2217b794.js";import{C as He}from"./Code.64283003.js";import{S as pt}from"./Strong.097578ae.js";import{L as Mt}from"./Li.8eab8712.js";const B=Ht({todos:[{name:"Do laundry",done:!1}],notifications:[],user:{name:"Henrik"}});function ht(){let s=new Set;return Ae(()=>{s.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{s.has(t)&&(t.style.outlineColor="black")},1e3)})}),Ie(()=>{s.forEach(t=>{t.style.outline="2px solid black"})}),function(e){return s.add(e),{destroy(){s.delete(e)}}}}function de(s){let t,e,n,a,o,i,r,l="Close",d,g;return{c(){t=N("div"),e=T(),n=N("div"),a=w(`Update Username:\r
		`),o=N("input"),i=T(),r=N("button"),r.textContent=l,this.h()},l(c){t=L(c,"DIV",{class:!0}),R(t).forEach(u),e=E(c),n=L(c,"DIV",{class:!0});var b=R(n);a=k(b,`Update Username:\r
		`),o=L(b,"INPUT",{type:!0,class:!0}),i=E(b),r=L(b,"BUTTON",{class:!0,["data-svelte-h"]:!0}),$t(r)!=="svelte-1nr2pdr"&&(r.textContent=l),b.forEach(u),this.h()},h(){q(t,"class","backdrop svelte-1y29kn9"),q(o,"type","text"),q(o,"class","svelte-1y29kn9"),q(r,"class","svelte-1y29kn9"),q(n,"class","modal svelte-1y29kn9")},m(c,b){_(c,t,b),_(c,e,b),_(c,n,b),y(n,a),y(n,o),ct(o,s[1].user.name),y(n,i),y(n,r),d||(g=[H(s[2].call(null,t)),M(o,"input",s[4]),M(r,"click",s[5]),H(s[2].call(null,n))],d=!0)},p(c,b){b&2&&o.value!==c[1].user.name&&ct(o,c[1].user.name)},d(c){c&&(u(t),u(e),u(n)),d=!1,J(g)}}}function xe(s){let t,e="⚙",n,a,o,i,r=s[0]&&de(s);return{c(){t=N("div"),t.textContent=e,n=T(),r&&r.c(),a=Pt(),this.h()},l(l){t=L(l,"DIV",{class:!0,["data-svelte-h"]:!0}),$t(t)!=="svelte-1k4s5ev"&&(t.textContent=e),n=E(l),r&&r.l(l),a=Pt(),this.h()},h(){q(t,"class","icon svelte-1y29kn9")},m(l,d){_(l,t,d),_(l,n,d),r&&r.m(l,d),_(l,a,d),o||(i=[H(s[2].call(null,t)),M(t,"click",s[3])],o=!0)},p(l,[d]){l[0]?r?r.p(l,d):(r=de(l),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},i:G,o:G,d(l){l&&(u(t),u(n),u(a)),r&&r.d(l),o=!1,J(i)}}}function Be(s,t,e){let n;F(s,B,d=>e(1,n=d));let a=!1;const o=ht,i=()=>e(0,a=!a);function r(){n.user.name=this.value,B.set(n)}return[a,n,o,i,r,()=>{Y(B,n.notifications=[...n.notifications,`New name: ${n.user.name}`],n),e(0,a=!1)}]}class Fe extends X{constructor(t){super(),Z(this,t,Be,xe,W,{})}}function ce(s,t,e){const n=s.slice();return n[8]=t[e],n}function me(s){let t,e,n=mt(s[0].notifications),a=[];for(let o=0;o<n.length;o+=1)a[o]=pe(ce(s,n,o));return{c(){t=N("div"),e=N("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=L(o,"DIV",{class:!0});var i=R(t);e=L(i,"UL",{class:!0});var r=R(e);for(let l=0;l<a.length;l+=1)a[l].l(r);r.forEach(u),i.forEach(u),this.h()},h(){q(e,"class","svelte-bzwdow"),q(t,"class","popover svelte-bzwdow")},m(o,i){_(o,t,i),y(t,e);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null)},p(o,i){if(i&1){n=mt(o[0].notifications);let r;for(r=0;r<n.length;r+=1){const l=ce(o,n,r);a[r]?a[r].p(l,i):(a[r]=pe(l),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(o){o&&u(t),qt(a,o)}}}function pe(s){let t,e=s[8]+"",n;return{c(){t=N("li"),n=w(e)},l(a){t=L(a,"LI",{});var o=R(t);n=k(o,e),o.forEach(u)},m(a,o){_(a,t,o),y(t,n)},p(a,o){o&1&&e!==(e=a[8]+"")&&S(n,e)},d(a){a&&u(t)}}}function We(s){let t,e,n,a,o;const i=s[4].default,r=Pe(i,s,s[3],null);let l=s[1]&&me(s);return{c(){t=N("div"),r&&r.c(),e=T(),l&&l.c(),this.h()},l(d){t=L(d,"DIV",{style:!0});var g=R(t);r&&r.l(g),e=E(g),l&&l.l(g),g.forEach(u),this.h()},h(){jt(t,"position","relative"),jt(t,"cursor","default")},m(d,g){_(d,t,g),r&&r.m(t,null),y(t,e),l&&l.m(t,null),n=!0,a||(o=[H(s[2].call(null,t)),M(t,"focus",s[5]),M(t,"mouseover",s[6]),M(t,"mouseleave",s[7])],a=!0)},p(d,[g]){r&&r.p&&(!n||g&8)&&je(r,i,d,d[3],n?Ve(i,d[3],g,null):qe(d[3]),null),d[1]?l?l.p(d,g):(l=me(d),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(d){n||(U(r,d),n=!0)},o(d){D(r,d),n=!1},d(d){d&&u(t),r&&r.d(d),l&&l.d(),a=!1,J(o)}}}function Xe(s,t,e){let n;F(s,B,c=>e(0,n=c));let{$$slots:a={},$$scope:o}=t,i=!1;const r=ht(),l=()=>e(1,i=!0),d=()=>e(1,i=!0),g=()=>e(1,i=!1);return s.$$set=c=>{"$$scope"in c&&e(3,o=c.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&n.notifications.length===3&&Y(B,n={...n,todos:[]},n)},[n,i,r,o,a,l,d,g]}class Ze extends X{constructor(t){super(),Z(this,t,Xe,We,W,{})}}function $e(s){let t,e=s[0].todos.filter(he).length+"",n,a,o=s[0].todos.length+"",i;return{c(){t=N("div"),n=w(e),a=w(" / "),i=w(o),this.h()},l(r){t=L(r,"DIV",{class:!0});var l=R(t);n=k(l,e),a=k(l," / "),i=k(l,o),l.forEach(u),this.h()},h(){q(t,"class","count todos svelte-1qedsae")},m(r,l){_(r,t,l),y(t,n),y(t,a),y(t,i)},p(r,l){l&1&&e!==(e=r[0].todos.filter(he).length+"")&&S(n,e),l&1&&o!==(o=r[0].todos.length+"")&&S(i,o)},d(r){r&&u(t)}}}function _e(s){let t,e;return t=new Ze({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment)},l(n){A(t.$$.fragment,n)},m(n,a){I(t,n,a),e=!0},p(n,a){const o={};a&5&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(U(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){P(t,n)}}}function Ge(s){let t,e=s[0].notifications.length+"",n;return{c(){t=N("div"),n=w(e),this.h()},l(a){t=L(a,"DIV",{class:!0});var o=R(t);n=k(o,e),o.forEach(u),this.h()},h(){q(t,"class","count svelte-1qedsae")},m(a,o){_(a,t,o),y(t,n)},p(a,o){o&1&&e!==(e=a[0].notifications.length+"")&&S(n,e)},d(a){a&&u(t)}}}function Je(s){let t,e,n="Complex store example",a,o,i,r,l=s[0].user.name+"",d,g,c,b,j,V,h=s[0].todos.length&&$e(s),p=s[0].notifications.length&&_e(s);return c=new Fe({}),{c(){t=N("navbar"),e=N("div"),e.textContent=n,a=T(),h&&h.c(),o=T(),p&&p.c(),i=T(),r=N("div"),d=w(l),g=T(),C(c.$$.fragment),this.h()},l(m){t=L(m,"NAVBAR",{class:!0});var $=R(t);e=L($,"DIV",{class:!0,["data-svelte-h"]:!0}),$t(e)!=="svelte-1sugiey"&&(e.textContent=n),a=E($),h&&h.l($),o=E($),p&&p.l($),i=E($),r=L($,"DIV",{});var O=R(r);d=k(O,l),O.forEach(u),g=E($),A(c.$$.fragment,$),$.forEach(u),this.h()},h(){q(e,"class","title svelte-1qedsae"),q(t,"class","svelte-1qedsae")},m(m,$){_(m,t,$),y(t,e),y(t,a),h&&h.m(t,null),y(t,o),p&&p.m(t,null),y(t,i),y(t,r),y(r,d),y(t,g),I(c,t,null),b=!0,j||(V=H(s[1].call(null,t)),j=!0)},p(m,[$]){m[0].todos.length?h?h.p(m,$):(h=$e(m),h.c(),h.m(t,o)):h&&(h.d(1),h=null),m[0].notifications.length?p?(p.p(m,$),$&1&&U(p,1)):(p=_e(m),p.c(),U(p,1),p.m(t,i)):p&&(Re(),D(p,1,1,()=>{p=null}),Oe()),(!b||$&1)&&l!==(l=m[0].user.name+"")&&S(d,l)},i(m){b||(U(p),U(c.$$.fragment,m),b=!0)},o(m){D(p),D(c.$$.fragment,m),b=!1},d(m){m&&u(t),h&&h.d(),p&&p.d(),P(c),j=!1,V()}}}const he=s=>s.done;function Ke(s,t,e){let n;F(s,B,o=>e(0,n=o));const a=ht();return[n,a]}class Qe extends X{constructor(t){super(),Z(this,t,Ke,Je,W,{})}}function Ye(s){return new Promise(t=>{setTimeout(t,s)})}function tn(s){let t,e,n,a,o,i,r,l,d,g;return{c(){t=N("div"),e=w(`Add todo\r
	`),n=N("form"),a=N("input"),o=T(),i=N("button"),r=w("Add"),this.h()},l(c){t=L(c,"DIV",{class:!0});var b=R(t);e=k(b,`Add todo\r
	`),n=L(b,"FORM",{class:!0});var j=R(n);a=L(j,"INPUT",{}),o=E(j),i=L(j,"BUTTON",{type:!0});var V=R(i);r=k(V,"Add"),V.forEach(u),j.forEach(u),b.forEach(u),this.h()},h(){i.disabled=l=s[0].length===0,q(i,"type","submit"),q(n,"class","svelte-1ook6qp"),q(t,"class","svelte-1ook6qp")},m(c,b){_(c,t,b),y(t,e),y(t,n),y(n,a),ct(a,s[0]),y(n,o),y(n,i),y(i,r),d||(g=[M(a,"input",s[3]),M(n,"submit",s[2]),H(s[1].call(null,t))],d=!0)},p(c,[b]){b&1&&a.value!==c[0]&&ct(a,c[0]),b&1&&l!==(l=c[0].length===0)&&(i.disabled=l)},i:G,o:G,d(c){c&&u(t),d=!1,J(g)}}}function en(s,t,e){let n;F(s,B,l=>e(4,n=l));let a="";const o=ht();function i(l){l.preventDefault(),n.todos.push({name:a,done:!1}),n.notifications.push(`Add "${a}"`),B.set(n),e(0,a="")}function r(){a=this.value,e(0,a)}return[a,o,i,r]}class nn extends X{constructor(t){super(),Z(this,t,en,tn,W,{})}}function ge(s,t,e){const n=s.slice();return n[5]=t[e],n[6]=t,n[7]=e,n}function ve(s){let t,e,n,a,o;function i(){return s[3](s[5],s[6],s[7])}return{c(){t=N("button"),e=w("Done"),this.h()},l(r){t=L(r,"BUTTON",{});var l=R(t);e=k(l,"Done"),l.forEach(u),this.h()},h(){t.disabled=n=s[5].loading},m(r,l){_(r,t,l),y(t,e),a||(o=M(t,"click",i),a=!0)},p(r,l){s=r,l&1&&n!==(n=s[5].loading)&&(t.disabled=n)},d(r){r&&u(t),a=!1,o()}}}function be(s){let t,e,n,a=s[5].name+"",o,i,r=s[5].loading?"(Loading...)":"",l,d,g,c,b="Delete",j,V,h=!s[5].done&&ve(s);function p(){return s[4](s[5])}return{c(){t=N("li"),e=N("input"),o=w(a),i=T(),l=w(r),d=T(),h&&h.c(),g=T(),c=N("button"),c.textContent=b,this.h()},l(m){t=L(m,"LI",{class:!0});var $=R(t);e=L($,"INPUT",{type:!0,class:!0}),o=k($,a),$.forEach(u),i=E(m),l=k(m,r),d=E(m),h&&h.l(m),g=E(m),c=L(m,"BUTTON",{["data-svelte-h"]:!0}),$t(c)!=="svelte-1sgkfpc"&&(c.textContent=b),this.h()},h(){q(e,"type","checkbox"),e.checked=n=s[5].done,e.disabled=!0,q(e,"class","svelte-1j7qay4"),q(t,"class","svelte-1j7qay4")},m(m,$){_(m,t,$),y(t,e),y(t,o),_(m,i,$),_(m,l,$),_(m,d,$),h&&h.m(m,$),_(m,g,$),_(m,c,$),j||(V=M(c,"click",p),j=!0)},p(m,$){s=m,$&1&&n!==(n=s[5].done)&&(e.checked=n),$&1&&a!==(a=s[5].name+"")&&S(o,a),$&1&&r!==(r=s[5].loading?"(Loading...)":"")&&S(l,r),s[5].done?h&&(h.d(1),h=null):h?h.p(s,$):(h=ve(s),h.c(),h.m(g.parentNode,g))},d(m){m&&(u(t),u(i),u(l),u(d),u(g),u(c)),h&&h.d(m),j=!1,V()}}}function on(s){let t,e,n,a,o=s[0].todos.length+"",i,r,l,d,g,c,b,j,V=mt(s[0].todos),h=[];for(let p=0;p<V.length;p+=1)h[p]=be(ge(s,V,p));return g=new nn({}),{c(){t=N("div"),e=w("Done: "),n=w(s[1]),a=w(" / "),i=w(o),r=T(),l=N("ul");for(let p=0;p<h.length;p+=1)h[p].c();d=T(),C(g.$$.fragment),this.h()},l(p){t=L(p,"DIV",{class:!0});var m=R(t);e=k(m,"Done: "),n=k(m,s[1]),a=k(m," / "),i=k(m,o),m.forEach(u),r=E(p),l=L(p,"UL",{class:!0});var $=R(l);for(let O=0;O<h.length;O+=1)h[O].l($);$.forEach(u),d=E(p),A(g.$$.fragment,p),this.h()},h(){q(t,"class","status svelte-1j7qay4"),q(l,"class","svelte-1j7qay4")},m(p,m){_(p,t,m),y(t,e),y(t,n),y(t,a),y(t,i),_(p,r,m),_(p,l,m);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(l,null);_(p,d,m),I(g,p,m),c=!0,b||(j=[H(s[2].call(null,t)),H(s[2].call(null,l))],b=!0)},p(p,[m]){if((!c||m&2)&&S(n,p[1]),(!c||m&1)&&o!==(o=p[0].todos.length+"")&&S(i,o),m&1){V=mt(p[0].todos);let $;for($=0;$<V.length;$+=1){const O=ge(p,V,$);h[$]?h[$].p(O,m):(h[$]=be(O),h[$].c(),h[$].m(l,null))}for(;$<h.length;$+=1)h[$].d(1);h.length=V.length}},i(p){c||(U(g.$$.fragment,p),c=!0)},o(p){D(g.$$.fragment,p),c=!1},d(p){p&&(u(t),u(r),u(l),u(d)),qt(h,p),P(g,p),b=!1,J(j)}}}function rn(s,t,e){let n,a;F(s,B,l=>e(0,a=l));const o=ht(),i=async(l,d,g)=>{Y(B,d[g].loading=!0,a),await Ye(5e3),Y(B,d[g].done=!0,a),Y(B,d[g].loading=!1,a),a.notifications.push(`Marked "${l.name}" as done`),B.set(a)},r=l=>{a.todos.splice(a.todos.indexOf(l),1),a.notifications.push(`Deleted "${l.name}"`),B.set(a)};return s.$$.update=()=>{s.$$.dirty&1&&e(1,n=a.todos.filter(l=>l.done).length)},[a,n,o,i,r]}class sn extends X{constructor(t){super(),Z(this,t,rn,on,W,{})}}function an(s){let t,e,n,a;return t=new Qe({}),n=new sn({}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment)},l(o){A(t.$$.fragment,o),e=E(o),A(n.$$.fragment,o)},m(o,i){I(t,o,i),_(o,e,i),I(n,o,i),a=!0},p:G,i(o){a||(U(t.$$.fragment,o),U(n.$$.fragment,o),a=!0)},o(o){D(t.$$.fragment,o),D(n.$$.fragment,o),a=!1},d(o){o&&u(e),P(t,o),P(n,o)}}}class K extends X{constructor(t){super(),Z(this,t,null,an,W,{})}}const ln=`<script>\r
	import Navbar from "./Navbar.svelte";\r
	import TodoList from "./TodoList.svelte";\r
<\/script>\r
\r
<Navbar />\r
\r
<TodoList />\r
`,fn=`<script>\r
	import data from "./data";\r
	let value = "";\r
\r
	import markUpdate from "./markUpdate";\r
	const action = markUpdate();\r
\r
	function onSubmit(event) {\r
		event.preventDefault();\r
		$data.todos.push({\r
			name: value,\r
			done: false,\r
		});\r
		$data.notifications.push(\`Add "\${value}"\`);\r
		$data = $data;\r
		value = "";\r
	}\r
<\/script>\r
\r
<div use:action>\r
	Add todo\r
	<form on:submit={onSubmit}>\r
		<input bind:value />\r
		<button disabled={value.length === 0} type="submit">Add</button>\r
	</form>\r
</div>\r
\r
<style>\r
	div {\r
		padding: 16px;\r
		background: #f5f5f5;\r
		margin: 16px;\r
	}\r
	form {\r
		margin-top: 8px;\r
	}\r
</style>`,un=`import { writable } from "svelte/store";\r
\r
export default writable({\r
	todos: [\r
		{\r
			name: "Do laundry",\r
			done: false,\r
		},\r
	],\r
	notifications: [],\r
	user: {\r
		name: "Henrik",\r
	},\r
});\r
`,dn=`<script>\r
	import data from "./data";\r
	let show = false;\r
\r
	import markUpdate from "./markUpdate";\r
\r
	const action = markUpdate;\r
<\/script>\r
\r
<div use:action class="icon" on:click={() => (show = !show)}>⚙</div>\r
{#if show}\r
	<div use:action class="backdrop" />\r
	<div use:action class="modal">\r
		Update Username:\r
		<input bind:value={$data.user.name} type="text" />\r
		<button\r
			on:click={() => {\r
				$data.notifications = [...$data.notifications, \`New name: \${$data.user.name}\`];\r
				show = false;\r
			}}>Close</button>\r
	</div>\r
{/if}\r
\r
<style>\r
	.icon {\r
		margin: 0 8px;\r
		font-size: 12px;\r
		cursor: pointer;\r
	}\r
	.modal {\r
		position: fixed;\r
		top: 50%;\r
		left: 50%;\r
		transform: translate(-50%, -50%);\r
		width: 200px;\r
		border: 1px solid;\r
		padding: 20px;\r
		background: white;\r
		z-index: 2;\r
	}\r
	.backdrop {\r
		background: black;\r
		opacity: 0.5;\r
		position: fixed;\r
		top: 0;\r
		left: 0;\r
		right: 0;\r
		bottom: 0;\r
	}\r
	input {\r
		margin-top: 8px;\r
		width: 100%;\r
	}\r
	button {\r
		margin-left: auto;\r
		display: block;\r
	}\r
</style>\r
`,cn=`import { beforeUpdate, onMount } from "svelte";\r
\r
export default function () {\r
	let elements = new Set();\r
\r
		beforeUpdate(() => {\r
			elements.forEach(element => {\r
				element.style.outlineColor = 'red';\r
\r
				setTimeout(() => {\r
					if (elements.has(element)) {\r
						element.style.outlineColor = 'black';\r
					}\r
				}, 1000);\r
			})\r
		});\r
\r
		onMount(() => {\r
			elements.forEach(element => {\r
				element.style.outline = '2px solid black';\r
			});\r
		});\r
\r
	return function markUpdateAction(node) {\r
		elements.add(node);\r
\r
		return {\r
			destroy() {\r
				elements.delete(node);\r
			},\r
		};\r
	};\r
}\r
`,mn=`<script>\r
	import data from "./data";\r
	import EditProfile from "./EditProfile.svelte";\r
\r
	import markUpdate from "./markUpdate";\r
	import Notification from "./Notification.svelte";\r
\r
	const action = markUpdate();\r
<\/script>\r
\r
<navbar use:action>\r
	<div class="title">Complex store example</div>\r
	{#if $data.todos.length}\r
		<div class="count todos">\r
			{$data.todos.filter((todo) => todo.done).length} / {$data.todos.length}\r
		</div>\r
	{/if}\r
	{#if $data.notifications.length}\r
		<Notification>\r
			<div class="count">{$data.notifications.length}</div>\r
		</Notification>\r
	{/if}\r
	<div>{$data.user.name}</div>\r
\r
	<EditProfile />\r
</navbar>\r
\r
\r
<style>\r
	navbar {\r
		display: flex;\r
		background: lightgray;\r
		padding: 8px 16px;\r
	}\r
	.count {\r
		background: darkblue;\r
		color: white;\r
		border-radius: 8px;\r
		margin: 0 4px;\r
		padding: 0 6px;\r
	}\r
	.todos.count {\r
		background: maroon;\r
	}\r
	.title {\r
		flex: 1;\r
	}\r
</style>`,pn=`<script>\r
	import data from "./data";\r
	let show = false;\r
\r
	import markUpdate from "./markUpdate";\r
	const action = markUpdate();\r
\r
	$: if ($data.notifications.length === 3) $data = { ...$data, todos: [] };\r
<\/script>\r
\r
<div\r
	use:action\r
	style="position: relative; cursor: default;"\r
	on:focus={() => (show = true)}\r
	on:mouseover={() => (show = true)}\r
	on:mouseleave={() => (show = false)}>\r
	<slot />\r
	{#if show}\r
		<div class="popover">\r
			<ul>\r
				{#each $data.notifications as noti}\r
					<li>{noti}</li>\r
				{/each}\r
			</ul>\r
		</div>\r
	{/if}\r
</div>\r
\r
<style>\r
	.popover {\r
		position: absolute;\r
		top: calc(100% + 6px);\r
		right: 0;\r
		background: white;\r
		border: 1px solid;\r
		padding: 12px 8px;\r
		white-space: nowrap;\r
	}\r
	ul {\r
		padding-left: 20px;\r
	}\r
</style>\r
`,$n=`<script>\r
	import data from "./data";\r
	import wait from "./wait";\r
\r
	import AddTodo from "./AddTodo.svelte";\r
\r
	import markUpdate from "./markUpdate";\r
	const action = markUpdate();\r
\r
	$: doneCount = $data.todos.filter((todo) => todo.done).length;\r
<\/script>\r
\r
<div use:action class="status">\r
	Done: {doneCount} / {$data.todos.length}\r
</div>\r
\r
<ul use:action>\r
	{#each $data.todos as todo}\r
		<li><input type="checkbox" checked={todo.done} disabled />{todo.name}</li>\r
		{todo.loading ? "(Loading...)" : ""}\r
		{#if !todo.done}\r
			<button\r
				disabled={todo.loading}\r
				on:click={async () => {\r
					todo.loading = true;\r
					await wait(5000);\r
					todo.done = true;\r
					todo.loading = false;\r
					$data.notifications.push(\`Marked "\${todo.name}" as done\`);\r
					$data = $data;\r
				}}>Done</button>\r
		{/if}\r
		<button\r
			on:click={() => {\r
				$data.todos.splice($data.todos.indexOf(todo), 1);\r
				$data.notifications.push(\`Deleted "\${todo.name}"\`);\r
				$data = $data;\r
			}}>Delete</button>\r
	{/each}\r
</ul>\r
\r
<AddTodo />\r
\r
<style>\r
	input {\r
		margin-right: 6px;\r
	}\r
	li {\r
		list-style: none;\r
	}\r
	ul {\r
		padding-left: 12px;\r
	}\r
	.status {\r
		padding: 8px 12px;\r
	}\r
</style>\r
`,_n=`export default function wait(time) {\r
	return new Promise((resolve) => {\r
		setTimeout(resolve, time);\r
	});\r
}\r
`;class hn extends X{constructor(t){super(),Z(this,t,null,null,W,{})}}const gn=`<!-- \r
  if ($data.notifications.length === 3) $data = { ...$data, todos: [] };\r
 -->\r
`,x=Ht({todos:Object.freeze([{name:"Do laundry",done:!1}]),notifications:[]}),zt=Ht({name:"Henrik"});function vn(s){x.update(t=>(t.todos=Object.freeze([...t.todos,s]),t))}function gt(){let s=new Set;return Ae(()=>{s.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{s.has(t)&&(t.style.outlineColor="black")},1e3)})}),Ie(()=>{s.forEach(t=>{t.style.outline="2px solid black",t.style.margin="8px"})}),function(e){return s.add(e),{destroy(){s.delete(e)}}}}function we(s){let t,e,n,a,o,i,r,l="Close",d,g;return{c(){t=N("div"),e=T(),n=N("div"),a=w(`Update Username:\r
		`),o=N("input"),i=T(),r=N("button"),r.textContent=l,this.h()},l(c){t=L(c,"DIV",{class:!0}),R(t).forEach(u),e=E(c),n=L(c,"DIV",{class:!0});var b=R(n);a=k(b,`Update Username:\r
		`),o=L(b,"INPUT",{type:!0,class:!0}),i=E(b),r=L(b,"BUTTON",{class:!0,["data-svelte-h"]:!0}),$t(r)!=="svelte-1g3um2p"&&(r.textContent=l),b.forEach(u),this.h()},h(){q(t,"class","backdrop svelte-1y29kn9"),q(o,"type","text"),q(o,"class","svelte-1y29kn9"),q(r,"class","svelte-1y29kn9"),q(n,"class","modal svelte-1y29kn9")},m(c,b){_(c,t,b),_(c,e,b),_(c,n,b),y(n,a),y(n,o),ct(o,s[1].name),y(n,i),y(n,r),d||(g=[H(s[3].call(null,t)),M(o,"input",s[5]),M(r,"click",s[6]),H(s[3].call(null,n))],d=!0)},p(c,b){b&2&&o.value!==c[1].name&&ct(o,c[1].name)},d(c){c&&(u(t),u(e),u(n)),d=!1,J(g)}}}function bn(s){let t,e="⚙",n,a,o,i,r=s[0]&&we(s);return{c(){t=N("div"),t.textContent=e,n=T(),r&&r.c(),a=Pt(),this.h()},l(l){t=L(l,"DIV",{class:!0,["data-svelte-h"]:!0}),$t(t)!=="svelte-1k4s5ev"&&(t.textContent=e),n=E(l),r&&r.l(l),a=Pt(),this.h()},h(){q(t,"class","icon svelte-1y29kn9")},m(l,d){_(l,t,d),_(l,n,d),r&&r.m(l,d),_(l,a,d),o||(i=[H(s[3].call(null,t)),M(t,"click",s[4])],o=!0)},p(l,[d]){l[0]?r?r.p(l,d):(r=we(l),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},i:G,o:G,d(l){l&&(u(t),u(n),u(a)),r&&r.d(l),o=!1,J(i)}}}function wn(s,t,e){let n,a;F(s,zt,g=>e(1,n=g)),F(s,x,g=>e(2,a=g));let o=!1;const i=gt,r=()=>e(0,o=!o);function l(){n.name=this.value,zt.set(n)}return[o,n,a,i,r,l,()=>{Y(x,a.notifications=[...a.notifications,`New name: ${n.name}`],a),e(0,o=!1)}]}class kn extends X{constructor(t){super(),Z(this,t,wn,bn,W,{})}}function ke(s,t,e){const n=s.slice();return n[8]=t[e],n}function ye(s){let t,e,n=mt(s[1].notifications),a=[];for(let o=0;o<n.length;o+=1)a[o]=Ue(ke(s,n,o));return{c(){t=N("div"),e=N("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=L(o,"DIV",{class:!0});var i=R(t);e=L(i,"UL",{class:!0});var r=R(e);for(let l=0;l<a.length;l+=1)a[l].l(r);r.forEach(u),i.forEach(u),this.h()},h(){q(e,"class","svelte-bzwdow"),q(t,"class","popover svelte-bzwdow")},m(o,i){_(o,t,i),y(t,e);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null)},p(o,i){if(i&2){n=mt(o[1].notifications);let r;for(r=0;r<n.length;r+=1){const l=ke(o,n,r);a[r]?a[r].p(l,i):(a[r]=Ue(l),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(o){o&&u(t),qt(a,o)}}}function Ue(s){let t,e=s[8]+"",n;return{c(){t=N("li"),n=w(e)},l(a){t=L(a,"LI",{});var o=R(t);n=k(o,e),o.forEach(u)},m(a,o){_(a,t,o),y(t,n)},p(a,o){o&2&&e!==(e=a[8]+"")&&S(n,e)},d(a){a&&u(t)}}}function yn(s){let t,e,n,a,o;const i=s[4].default,r=Pe(i,s,s[3],null);let l=s[0]&&ye(s);return{c(){t=N("div"),r&&r.c(),e=T(),l&&l.c(),this.h()},l(d){t=L(d,"DIV",{style:!0});var g=R(t);r&&r.l(g),e=E(g),l&&l.l(g),g.forEach(u),this.h()},h(){jt(t,"position","relative"),jt(t,"cursor","default")},m(d,g){_(d,t,g),r&&r.m(t,null),y(t,e),l&&l.m(t,null),n=!0,a||(o=[H(s[2].call(null,t)),M(t,"focus",s[5]),M(t,"mouseover",s[6]),M(t,"mouseleave",s[7])],a=!0)},p(d,[g]){r&&r.p&&(!n||g&8)&&je(r,i,d,d[3],n?Ve(i,d[3],g,null):qe(d[3]),null),d[0]?l?l.p(d,g):(l=ye(d),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(d){n||(U(r,d),n=!0)},o(d){D(r,d),n=!1},d(d){d&&u(t),r&&r.d(d),l&&l.d(),a=!1,J(o)}}}function Un(s,t,e){let n;F(s,x,c=>e(1,n=c));let{$$slots:a={},$$scope:o}=t,i=!1;const r=gt(),l=()=>e(0,i=!0),d=()=>e(0,i=!0),g=()=>e(0,i=!1);return s.$$set=c=>{"$$scope"in c&&e(3,o=c.$$scope)},[i,n,r,o,a,l,d,g]}class Tn extends X{constructor(t){super(),Z(this,t,Un,yn,W,{})}}function Te(s){let t,e,n,a;return{c(){t=N("div"),e=w(s[1]),n=w(" / "),a=w(s[0]),this.h()},l(o){t=L(o,"DIV",{class:!0});var i=R(t);e=k(i,s[1]),n=k(i," / "),a=k(i,s[0]),i.forEach(u),this.h()},h(){q(t,"class","count todos svelte-1qedsae")},m(o,i){_(o,t,i),y(t,e),y(t,n),y(t,a)},p(o,i){i&2&&S(e,o[1]),i&1&&S(a,o[0])},d(o){o&&u(t)}}}function Ee(s){let t,e;return t=new Tn({props:{$$slots:{default:[En]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment)},l(n){A(t.$$.fragment,n)},m(n,a){I(t,n,a),e=!0},p(n,a){const o={};a&260&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){e||(U(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){P(t,n)}}}function En(s){let t,e;return{c(){t=N("div"),e=w(s[2]),this.h()},l(n){t=L(n,"DIV",{class:!0});var a=R(t);e=k(a,s[2]),a.forEach(u),this.h()},h(){q(t,"class","count svelte-1qedsae")},m(n,a){_(n,t,a),y(t,e)},p(n,a){a&4&&S(e,n[2])},d(n){n&&u(t)}}}function Dn(s){let t,e,n="Complex store example",a,o,i,r,l=s[3].name+"",d,g,c,b,j,V,h=s[0]&&Te(s),p=s[2]&&Ee(s);return c=new kn({}),{c(){t=N("navbar"),e=N("div"),e.textContent=n,a=T(),h&&h.c(),o=T(),p&&p.c(),i=T(),r=N("div"),d=w(l),g=T(),C(c.$$.fragment),this.h()},l(m){t=L(m,"NAVBAR",{class:!0});var $=R(t);e=L($,"DIV",{class:!0,["data-svelte-h"]:!0}),$t(e)!=="svelte-1sugiey"&&(e.textContent=n),a=E($),h&&h.l($),o=E($),p&&p.l($),i=E($),r=L($,"DIV",{});var O=R(r);d=k(O,l),O.forEach(u),g=E($),A(c.$$.fragment,$),$.forEach(u),this.h()},h(){q(e,"class","title svelte-1qedsae"),q(t,"class","svelte-1qedsae")},m(m,$){_(m,t,$),y(t,e),y(t,a),h&&h.m(t,null),y(t,o),p&&p.m(t,null),y(t,i),y(t,r),y(r,d),y(t,g),I(c,t,null),b=!0,j||(V=H(s[4].call(null,t)),j=!0)},p(m,[$]){m[0]?h?h.p(m,$):(h=Te(m),h.c(),h.m(t,o)):h&&(h.d(1),h=null),m[2]?p?(p.p(m,$),$&4&&U(p,1)):(p=Ee(m),p.c(),U(p,1),p.m(t,i)):p&&(Re(),D(p,1,1,()=>{p=null}),Oe()),(!b||$&8)&&l!==(l=m[3].name+"")&&S(d,l)},i(m){b||(U(p),U(c.$$.fragment,m),b=!0)},o(m){D(p),D(c.$$.fragment,m),b=!1},d(m){m&&u(t),h&&h.d(),p&&p.d(),P(c),j=!1,V()}}}function Nn(s,t,e){let n,a,o,i;F(s,zt,c=>e(3,i=c));const r=gt(),l=Vt(x,c=>c.todos.length);F(s,l,c=>e(0,n=c));const d=Vt(x,c=>c.todos.filter(b=>b.done).length);F(s,d,c=>e(1,a=c));const g=Vt(x,c=>c.notifications.length);return F(s,g,c=>e(2,o=c)),[n,a,o,i,r,l,d,g]}class Ln extends X{constructor(t){super(),Z(this,t,Nn,Dn,W,{})}}function Cn(s){return new Promise(t=>{setTimeout(t,s)})}function An(s){let t,e,n,a,o,i,r,l,d,g;return{c(){t=N("div"),e=w(`Add todo\r
	`),n=N("form"),a=N("input"),o=T(),i=N("button"),r=w("Add"),this.h()},l(c){t=L(c,"DIV",{class:!0});var b=R(t);e=k(b,`Add todo\r
	`),n=L(b,"FORM",{class:!0});var j=R(n);a=L(j,"INPUT",{}),o=E(j),i=L(j,"BUTTON",{type:!0});var V=R(i);r=k(V,"Add"),V.forEach(u),j.forEach(u),b.forEach(u),this.h()},h(){i.disabled=l=s[0].length===0,q(i,"type","submit"),q(n,"class","svelte-1ook6qp"),q(t,"class","svelte-1ook6qp")},m(c,b){_(c,t,b),y(t,e),y(t,n),y(n,a),ct(a,s[0]),y(n,o),y(n,i),y(i,r),d||(g=[M(a,"input",s[3]),M(n,"submit",s[2]),H(s[1].call(null,t))],d=!0)},p(c,[b]){b&1&&a.value!==c[0]&&ct(a,c[0]),b&1&&l!==(l=c[0].length===0)&&(i.disabled=l)},i:G,o:G,d(c){c&&u(t),d=!1,J(g)}}}function In(s,t,e){let n;F(s,x,l=>e(4,n=l));let a="";const o=gt();function i(l){l.preventDefault(),vn({name:a,done:!1}),n.notifications.push(`Add "${a}"`),x.set(n),e(0,a="")}function r(){a=this.value,e(0,a)}return[a,o,i,r]}class Pn extends X{constructor(t){super(),Z(this,t,In,An,W,{})}}function De(s,t,e){const n=s.slice();return n[5]=t[e],n[6]=t,n[7]=e,n}function Ne(s){let t,e,n,a,o;function i(){return s[3](s[5],s[6],s[7])}return{c(){t=N("button"),e=w("Done"),this.h()},l(r){t=L(r,"BUTTON",{});var l=R(t);e=k(l,"Done"),l.forEach(u),this.h()},h(){t.disabled=n=s[5].loading},m(r,l){_(r,t,l),y(t,e),a||(o=M(t,"click",i),a=!0)},p(r,l){s=r,l&1&&n!==(n=s[5].loading)&&(t.disabled=n)},d(r){r&&u(t),a=!1,o()}}}function Le(s){let t,e,n,a=s[5].name+"",o,i,r=s[5].loading?"(Loading...)":"",l,d,g,c,b="Delete",j,V,h=!s[5].done&&Ne(s);function p(){return s[4](s[5])}return{c(){t=N("li"),e=N("input"),o=w(a),i=T(),l=w(r),d=T(),h&&h.c(),g=T(),c=N("button"),c.textContent=b,this.h()},l(m){t=L(m,"LI",{class:!0});var $=R(t);e=L($,"INPUT",{type:!0,class:!0}),o=k($,a),$.forEach(u),i=E(m),l=k(m,r),d=E(m),h&&h.l(m),g=E(m),c=L(m,"BUTTON",{["data-svelte-h"]:!0}),$t(c)!=="svelte-3lqpw2"&&(c.textContent=b),this.h()},h(){q(e,"type","checkbox"),e.checked=n=s[5].done,e.disabled=!0,q(e,"class","svelte-1j7qay4"),q(t,"class","svelte-1j7qay4")},m(m,$){_(m,t,$),y(t,e),y(t,o),_(m,i,$),_(m,l,$),_(m,d,$),h&&h.m(m,$),_(m,g,$),_(m,c,$),j||(V=M(c,"click",p),j=!0)},p(m,$){s=m,$&1&&n!==(n=s[5].done)&&(e.checked=n),$&1&&a!==(a=s[5].name+"")&&S(o,a),$&1&&r!==(r=s[5].loading?"(Loading...)":"")&&S(l,r),s[5].done?h&&(h.d(1),h=null):h?h.p(s,$):(h=Ne(s),h.c(),h.m(g.parentNode,g))},d(m){m&&(u(t),u(i),u(l),u(d),u(g),u(c)),h&&h.d(m),j=!1,V()}}}function jn(s){let t,e,n,a,o=s[0].todos.length+"",i,r,l,d,g,c,b,j,V=mt(s[0].todos),h=[];for(let p=0;p<V.length;p+=1)h[p]=Le(De(s,V,p));return g=new Pn({}),{c(){t=N("div"),e=w("Done: "),n=w(s[1]),a=w(" / "),i=w(o),r=T(),l=N("ul");for(let p=0;p<h.length;p+=1)h[p].c();d=T(),C(g.$$.fragment),this.h()},l(p){t=L(p,"DIV",{class:!0});var m=R(t);e=k(m,"Done: "),n=k(m,s[1]),a=k(m," / "),i=k(m,o),m.forEach(u),r=E(p),l=L(p,"UL",{class:!0});var $=R(l);for(let O=0;O<h.length;O+=1)h[O].l($);$.forEach(u),d=E(p),A(g.$$.fragment,p),this.h()},h(){q(t,"class","status svelte-1j7qay4"),q(l,"class","svelte-1j7qay4")},m(p,m){_(p,t,m),y(t,e),y(t,n),y(t,a),y(t,i),_(p,r,m),_(p,l,m);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(l,null);_(p,d,m),I(g,p,m),c=!0,b||(j=[H(s[2].call(null,t)),H(s[2].call(null,l))],b=!0)},p(p,[m]){if((!c||m&2)&&S(n,p[1]),(!c||m&1)&&o!==(o=p[0].todos.length+"")&&S(i,o),m&1){V=mt(p[0].todos);let $;for($=0;$<V.length;$+=1){const O=De(p,V,$);h[$]?h[$].p(O,m):(h[$]=Le(O),h[$].c(),h[$].m(l,null))}for(;$<h.length;$+=1)h[$].d(1);h.length=V.length}},i(p){c||(U(g.$$.fragment,p),c=!0)},o(p){D(g.$$.fragment,p),c=!1},d(p){p&&(u(t),u(r),u(l),u(d)),qt(h,p),P(g,p),b=!1,J(j)}}}function qn(s,t,e){let n,a;F(s,x,l=>e(0,a=l));const o=gt(),i=async(l,d,g)=>{Y(x,d[g].loading=!0,a),await Cn(5e3),Y(x,d[g].done=!0,a),Y(x,d[g].loading=!1,a),a.notifications.push(`Marked "${l.name}" as done`),x.set(a)},r=l=>{a.todos.splice(a.todos.indexOf(l),1),a.notifications.push(`Deleted "${l.name}"`),x.set(a)};return s.$$.update=()=>{s.$$.dirty&1&&e(1,n=a.todos.filter(l=>l.done).length)},[a,n,o,i,r]}class Vn extends X{constructor(t){super(),Z(this,t,qn,jn,W,{})}}function Rn(s){let t,e,n,a;return t=new Ln({}),n=new Vn({}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment)},l(o){A(t.$$.fragment,o),e=E(o),A(n.$$.fragment,o)},m(o,i){I(t,o,i),_(o,e,i),I(n,o,i),a=!0},p:G,i(o){a||(U(t.$$.fragment,o),U(n.$$.fragment,o),a=!0)},o(o){D(t.$$.fragment,o),D(n.$$.fragment,o),a=!1},d(o){o&&u(e),P(t,o),P(n,o)}}}class Q extends X{constructor(t){super(),Z(this,t,null,Rn,W,{})}}const On=`<script>\r
	import Navbar2 from "./Navbar2.svelte";\r
	import TodoList2 from "./TodoList2.svelte";\r
<\/script>\r
\r
<Navbar2 />\r
\r
<TodoList2 />\r
`,Mn=`<script>\r
	import data, { addTodo } from "./data2";\r
	let value = "";\r
\r
	import markUpdate2 from "./markUpdate2";\r
	const action = markUpdate2();\r
\r
	function onSubmit(event) {\r
		event.preventDefault();\r
		addTodo({\r
			name: value,\r
			done: false,\r
		});\r
		$data.notifications.push(\`Add "\${value}"\`);\r
		$data = $data;\r
		value = "";\r
	}\r
<\/script>\r
\r
<div use:action>\r
	Add todo\r
	<form on:submit={onSubmit}>\r
		<input bind:value />\r
		<button disabled={value.length === 0} type="submit">Add</button>\r
	</form>\r
</div>\r
\r
<style>\r
	div {\r
		padding: 16px;\r
		background: #f5f5f5;\r
		margin: 16px;\r
	}\r
	form {\r
		margin-top: 8px;\r
	}\r
</style>\r
`,Sn=`import { writable } from "svelte/store";\r
\r
const data = writable({\r
	todos: Object.freeze([\r
		{\r
			name: "Do laundry",\r
			done: false,\r
		},\r
	]),\r
	notifications: [],\r
});\r
\r
export const user = writable({\r
	name: "Henrik",\r
});\r
\r
export function addTodo(newTodo) {\r
	data.update(($data) => {\r
		$data.todos = Object.freeze([...$data.todos, newTodo]);\r
		return $data;\r
	});\r
}\r
\r
export default data;\r
`,zn=`<script>\r
	import data2, { user } from "./data2";\r
	let show = false;\r
\r
	import markUpdate2 from "./markUpdate2";\r
\r
	const action = markUpdate2;\r
<\/script>\r
\r
<div use:action class="icon" on:click={() => (show = !show)}>⚙</div>\r
{#if show}\r
	<div use:action class="backdrop" />\r
	<div use:action class="modal">\r
		Update Username:\r
		<input bind:value={$user.name} type="text" />\r
		<button\r
			on:click={() => {\r
				$data2.notifications = [...$data2.notifications, \`New name: \${$user.name}\`];\r
				show = false;\r
			}}>Close</button>\r
	</div>\r
{/if}\r
\r
<style>\r
	.icon {\r
		margin: 0 8px;\r
		font-size: 12px;\r
		cursor: pointer;\r
	}\r
	.modal {\r
		position: fixed;\r
		top: 50%;\r
		left: 50%;\r
		transform: translate(-50%, -50%);\r
		width: 200px;\r
		border: 1px solid;\r
		padding: 20px;\r
		background: white;\r
		z-index: 2;\r
	}\r
	.backdrop {\r
		background: black;\r
		opacity: 0.5;\r
		position: fixed;\r
		top: 0;\r
		left: 0;\r
		right: 0;\r
		bottom: 0;\r
	}\r
	input {\r
		margin-top: 8px;\r
		width: 100%;\r
	}\r
	button {\r
		margin-left: auto;\r
		display: block;\r
	}\r
</style>\r
`,Hn=`import { beforeUpdate, onMount } from "svelte";\r
\r
export default function () {\r
	let elements = new Set();\r
\r
	beforeUpdate(() => {\r
		elements.forEach((element) => {\r
			element.style.outlineColor = "red";\r
\r
			setTimeout(() => {\r
				if (elements.has(element)) {\r
					element.style.outlineColor = "black";\r
				}\r
			}, 1000);\r
		});\r
	});\r
\r
	onMount(() => {\r
		elements.forEach((element) => {\r
			element.style.outline = "2px solid black";\r
			element.style.margin = "8px";\r
		});\r
	});\r
\r
	return function markUpdateAction(node) {\r
		elements.add(node);\r
\r
		return {\r
			destroy() {\r
				elements.delete(node);\r
			},\r
		};\r
	};\r
}\r
`,xn=`<script>\r
	import { derived } from "svelte/store";\r
\r
	import data2, { user } from "./data2";\r
	import EditProfile2 from "./EditProfile2.svelte";\r
\r
	import markUpdate2 from "./markUpdate2";\r
	import Notification2 from "./Notification2.svelte";\r
\r
	const action = markUpdate2();\r
\r
	const todosLength = derived(data2, ($data2) => $data2.todos.length);\r
	const todosDoneLength = derived(\r
		data2,\r
		($data2) => $data2.todos.filter((todo) => todo.done).length\r
	);\r
	const notificationsLength = derived(data2, ($data2) => $data2.notifications.length);\r
<\/script>\r
\r
<navbar use:action>\r
	<div class="title">Complex store example</div>\r
	{#if $todosLength}\r
		<div class="count todos">\r
			{$todosDoneLength} / {$todosLength}\r
		</div>\r
	{/if}\r
	{#if $notificationsLength}\r
		<Notification2>\r
			<div class="count">{$notificationsLength}</div>\r
		</Notification2>\r
	{/if}\r
	<div>{$user.name}</div>\r
\r
	<EditProfile2 />\r
</navbar>\r
\r
<style>\r
	navbar {\r
		display: flex;\r
		background: lightgray;\r
		padding: 8px 16px;\r
	}\r
	.count {\r
		background: darkblue;\r
		color: white;\r
		border-radius: 8px;\r
		margin: 0 4px;\r
		padding: 0 6px;\r
	}\r
	.todos.count {\r
		background: maroon;\r
	}\r
	.title {\r
		flex: 1;\r
	}\r
</style>\r
`,Bn=`<script>\r
	import data2 from "./data2";\r
	let show = false;\r
\r
	import markUpdate2 from "./markUpdate2";\r
	const action = markUpdate2();\r
\r
<\/script>\r
\r
<div\r
	use:action\r
	style="position: relative; cursor: default;"\r
	on:focus={() => (show = true)}\r
	on:mouseover={() => (show = true)}\r
	on:mouseleave={() => (show = false)}>\r
	<slot />\r
	{#if show}\r
		<div class="popover">\r
			<ul>\r
				{#each $data2.notifications as noti}\r
					<li>{noti}</li>\r
				{/each}\r
			</ul>\r
		</div>\r
	{/if}\r
</div>\r
\r
<style>\r
	.popover {\r
		position: absolute;\r
		top: calc(100% + 6px);\r
		right: 0;\r
		background: white;\r
		border: 1px solid;\r
		padding: 12px 8px;\r
		white-space: nowrap;\r
	}\r
	ul {\r
		padding-left: 20px;\r
	}\r
</style>\r
`,Fn=`<script>\r
	import data2 from "./data2";\r
	import wait2 from "./wait2";\r
\r
	import AddTodo2 from "./AddTodo2.svelte";\r
\r
	import markUpdate2 from "./markUpdate2";\r
	const action = markUpdate2();\r
\r
	$: doneCount = $data2.todos.filter((todo) => todo.done).length;\r
<\/script>\r
\r
<div use:action class="status">\r
	Done: {doneCount} / {$data2.todos.length}\r
</div>\r
\r
<ul use:action>\r
	{#each $data2.todos as todo}\r
		<li><input type="checkbox" checked={todo.done} disabled />{todo.name}</li>\r
		{todo.loading ? "(Loading...)" : ""}\r
		{#if !todo.done}\r
			<button\r
				disabled={todo.loading}\r
				on:click={async () => {\r
					todo.loading = true;\r
					await wait2(5000);\r
					todo.done = true;\r
					todo.loading = false;\r
					$data2.notifications.push(\`Marked "\${todo.name}" as done\`);\r
					$data2 = $data2;\r
				}}>Done</button>\r
		{/if}\r
		<button\r
			on:click={() => {\r
				$data2.todos.splice($data2.todos.indexOf(todo), 1);\r
				$data2.notifications.push(\`Deleted "\${todo.name}"\`);\r
				$data2 = $data2;\r
			}}>Delete</button>\r
	{/each}\r
</ul>\r
\r
<AddTodo2 />\r
\r
<style>\r
	input {\r
		margin-right: 6px;\r
	}\r
	li {\r
		list-style: none;\r
	}\r
	ul {\r
		padding-left: 12px;\r
	}\r
	.status {\r
		padding: 8px 12px;\r
	}\r
</style>\r
`,Wn=`export default function wait(time) {\r
	return new Promise((resolve) => {\r
		setTimeout(resolve, time);\r
	});\r
}\r
`;function Xn(s){let t;return{c(){t=w("Managing a complex store can be tricky and Li Hau Tan has 3 tips for optimizing complex stores.")},l(e){t=k(e,"Managing a complex store can be tricky and Li Hau Tan has 3 tips for optimizing complex stores.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Zn(s){let t;return{c(){t=w("Let's begin by showing a demo application.")},l(e){t=k(e,"Let's begin by showing a demo application.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Gn(s){let t;return{c(){t=w("First off, we are using markUpdate.js which shows where our states are getting updated by showing them with a red border. We can see this causes a problem because changing our profile name changes the state everywhere even though the profile name doesn't really have anything to do with the todos or notifications. This is also something we can improve.")},l(e){t=k(e,"First off, we are using markUpdate.js which shows where our states are getting updated by showing them with a red border. We can see this causes a problem because changing our profile name changes the state everywhere even though the profile name doesn't really have anything to do with the todos or notifications. This is also something we can improve.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Jn(s){let t;return{c(){t=w("$data.todos")},l(e){t=k(e,"$data.todos")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Kn(s){let t,e,n,a;return e=new He({props:{$$slots:{default:[Jn]},$$scope:{ctx:s}}}),{c(){t=w("For the bug itself we can search for "),C(e.$$.fragment),n=w(" and see where we are changing it, but we don't find the bug that way… 😵")},l(o){t=k(o,"For the bug itself we can search for "),A(e.$$.fragment,o),n=k(o," and see where we are changing it, but we don't find the bug that way… 😵")},m(o,i){_(o,t,i),I(e,o,i),_(o,n,i),a=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){a||(U(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){o&&(u(t),u(n)),P(e,o)}}}function Qn(s){let t;return{c(){t=w("all components")},l(e){t=k(e,"all components")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Yn(s){let t;return{c(){t=w("any way we like")},l(e){t=k(e,"any way we like")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function to(s){let t,e,n,a,o,i;return e=new pt({props:{$$slots:{default:[Qn]},$$scope:{ctx:s}}}),a=new pt({props:{$$slots:{default:[Yn]},$$scope:{ctx:s}}}),{c(){t=w("Debugging complex stores like this can be very hard since we can change the store from "),C(e.$$.fragment),n=w(" in basically "),C(a.$$.fragment),o=w(".")},l(r){t=k(r,"Debugging complex stores like this can be very hard since we can change the store from "),A(e.$$.fragment,r),n=k(r," in basically "),A(a.$$.fragment,r),o=k(r,".")},m(r,l){_(r,t,l),I(e,r,l),_(r,n,l),I(a,r,l),_(r,o,l),i=!0},p(r,l){const d={};l&2&&(d.$$scope={dirty:l,ctx:r}),e.$set(d);const g={};l&2&&(g.$$scope={dirty:l,ctx:r}),a.$set(g)},i(r){i||(U(e.$$.fragment,r),U(a.$$.fragment,r),i=!0)},o(r){D(e.$$.fragment,r),D(a.$$.fragment,r),i=!1},d(r){r&&(u(t),u(n),u(o)),P(e,r),P(a,r)}}}function eo(s){let t;return{c(){t=w("action")},l(e){t=k(e,"action")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function no(s){let t,e,n,a;return e=new pt({props:{$$slots:{default:[eo]},$$scope:{ctx:s}}}),{c(){t=w("One way we could improve this is to introduce an "),C(e.$$.fragment),n=w(" that is the only thing that is allowed to edit the store. If we do this we can trace and find from where the action to edit the store came from.")},l(o){t=k(o,"One way we could improve this is to introduce an "),A(e.$$.fragment,o),n=k(o," that is the only thing that is allowed to edit the store. If we do this we can trace and find from where the action to edit the store came from.")},m(o,i){_(o,t,i),I(e,o,i),_(o,n,i),a=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){a||(U(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){o&&(u(t),u(n)),P(e,o)}}}function oo(s){let t;return{c(){t=w("Notification")},l(e){t=k(e,"Notification")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ro(s){let t,e,n,a;return e=new pt({props:{$$slots:{default:[oo]},$$scope:{ctx:s}}}),{c(){t=w("Our error is in the component "),C(e.$$.fragment),n=w(" where we left in some debugging code by mistake:")},l(o){t=k(o,"Our error is in the component "),A(e.$$.fragment,o),n=k(o," where we left in some debugging code by mistake:")},m(o,i){_(o,t,i),I(e,o,i),_(o,n,i),a=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){a||(U(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){o&&(u(t),u(n)),P(e,o)}}}function so(s){let t;return{c(){t=w("Let's make a better version of our app by:")},l(e){t=k(e,"Let's make a better version of our app by:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ao(s){let t;return{c(){t=w("making smaller stores, for example user doesn't need to be in the main store")},l(e){t=k(e,"making smaller stores, for example user doesn't need to be in the main store")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function lo(s){let t;return{c(){t=w('creating derived stores for things that only require small things like "length of todos" to avoid extra update cycles')},l(e){t=k(e,'creating derived stores for things that only require small things like "length of todos" to avoid extra update cycles')},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function io(s){let t;return{c(){t=w("in one place")},l(e){t=k(e,"in one place")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function fo(s){let t,e,n,a;return e=new pt({props:{$$slots:{default:[io]},$$scope:{ctx:s}}}),{c(){t=w("putting all our functions that modify the store "),C(e.$$.fragment),n=w("!")},l(o){t=k(o,"putting all our functions that modify the store "),A(e.$$.fragment,o),n=k(o,"!")},m(o,i){_(o,t,i),I(e,o,i),_(o,n,i),a=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){a||(U(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){o&&(u(t),u(n)),P(e,o)}}}function uo(s){let t,e,n,a,o,i;return t=new Mt({props:{$$slots:{default:[ao]},$$scope:{ctx:s}}}),n=new Mt({props:{$$slots:{default:[lo]},$$scope:{ctx:s}}}),o=new Mt({props:{$$slots:{default:[fo]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment),a=T(),C(o.$$.fragment)},l(r){A(t.$$.fragment,r),e=E(r),A(n.$$.fragment,r),a=E(r),A(o.$$.fragment,r)},m(r,l){I(t,r,l),_(r,e,l),I(n,r,l),_(r,a,l),I(o,r,l),i=!0},p(r,l){const d={};l&2&&(d.$$scope={dirty:l,ctx:r}),t.$set(d);const g={};l&2&&(g.$$scope={dirty:l,ctx:r}),n.$set(g);const c={};l&2&&(c.$$scope={dirty:l,ctx:r}),o.$set(c)},i(r){i||(U(t.$$.fragment,r),U(n.$$.fragment,r),U(o.$$.fragment,r),i=!0)},o(r){D(t.$$.fragment,r),D(n.$$.fragment,r),D(o.$$.fragment,r),i=!1},d(r){r&&(u(e),u(a)),P(t,r),P(n,r),P(o,r)}}}function co(s){let t;return{c(){t=w("only the navbar updates")},l(e){t=k(e,"only the navbar updates")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function mo(s){let t,e,n,a;return e=new pt({props:{$$slots:{default:[co]},$$scope:{ctx:s}}}),{c(){t=w("After editing data2.js we can see that adding a smaller user store helped because now when we edit the user name "),C(e.$$.fragment),n=w(".")},l(o){t=k(o,"After editing data2.js we can see that adding a smaller user store helped because now when we edit the user name "),A(e.$$.fragment,o),n=k(o,".")},m(o,i){_(o,t,i),I(e,o,i),_(o,n,i),a=!0},p(o,i){const r={};i&2&&(r.$$scope={dirty:i,ctx:o}),e.$set(r)},i(o){a||(U(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){o&&(u(t),u(n)),P(e,o)}}}function po(s){let t;return{c(){t=w("navbar doesn't update")},l(e){t=k(e,"navbar doesn't update")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function $o(s){let t;return{c(){t=w("derived stores for the smaller .length and so data")},l(e){t=k(e,"derived stores for the smaller .length and so data")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function _o(s){let t,e,n,a,o,i;return e=new pt({props:{$$slots:{default:[po]},$$scope:{ctx:s}}}),a=new pt({props:{$$slots:{default:[$o]},$$scope:{ctx:s}}}),{c(){t=w("In the same way when toggling a todo to be done the "),C(e.$$.fragment),n=w(" because we're using "),C(a.$$.fragment),o=w(".")},l(r){t=k(r,"In the same way when toggling a todo to be done the "),A(e.$$.fragment,r),n=k(r," because we're using "),A(a.$$.fragment,r),o=k(r,".")},m(r,l){_(r,t,l),I(e,r,l),_(r,n,l),I(a,r,l),_(r,o,l),i=!0},p(r,l){const d={};l&2&&(d.$$scope={dirty:l,ctx:r}),e.$set(d);const g={};l&2&&(g.$$scope={dirty:l,ctx:r}),a.$set(g)},i(r){i||(U(e.$$.fragment,r),U(a.$$.fragment,r),i=!0)},o(r){D(e.$$.fragment,r),D(a.$$.fragment,r),i=!1},d(r){r&&(u(t),u(n),u(o)),P(e,r),P(a,r)}}}function ho(s){let t;return{c(){t=w("Here are Li Hau Tan's tips:")},l(e){t=k(e,"Here are Li Hau Tan's tips:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function go(s){let t;return{c(){t=w("Tip 1:")},l(e){t=k(e,"Tip 1:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function vo(s){let t;return{c(){t=w("If you have a complex state, avoid manipulating the writable store directly.")},l(e){t=k(e,"If you have a complex state, avoid manipulating the writable store directly.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function bo(s){let t;return{c(){t=w("Use state management libraries, such as state machines or reducers to help manage the state changes.")},l(e){t=k(e,"Use state management libraries, such as state machines or reducers to help manage the state changes.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function wo(s){let t;return{c(){t=w("Tip 2:")},l(e){t=k(e,"Tip 2:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ko(s){let t;return{c(){t=w("Have a small self-contained store.")},l(e){t=k(e,"Have a small self-contained store.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function yo(s){let t;return{c(){t=w("Tip 3:")},l(e){t=k(e,"Tip 3:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Uo(s){let t;return{c(){t=w("If you have a large store, create a derived store out of it, so your component does not have to subscribe to all changes made to the store.")},l(e){t=k(e,"If you have a large store, create a derived store out of it, so your component does not have to subscribe to all changes made to the store.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function To(s){let t;return{c(){t=w("Making the store immutable or proxy-based can allow us to subscribe to part of the store too!")},l(e){t=k(e,"Making the store immutable or proxy-based can allow us to subscribe to part of the store too!")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Eo(s){let t,e,n,a,o,i,r,l,d,g,c,b,j,V,h,p,m,$,O,vt,tt,bt,_t,wt,et,kt,nt,yt,ot,Ut,rt,Tt,st,Et,at,Dt,lt,Nt,it,Lt,ft,Ct,ut,At,dt,It;return t=new z({props:{$$slots:{default:[Xn]},$$scope:{ctx:s}}}),n=new z({props:{$$slots:{default:[Zn]},$$scope:{ctx:s}}}),o=new Rt({props:{name:[{name:"App",comp:K,raw:ln,text:"This kind of works but we have a problem. Whenever we add 3 todos, all of them disappear!"},{name:"AddTodo",comp:K,raw:fn,text:""},{name:"EditProfile",comp:K,raw:dn,text:""},{name:"Navbar",comp:K,raw:mn,text:""},{name:"Notification",comp:K,raw:pn,text:""},{name:"TodoList",comp:K,raw:$n,text:""},{name:"data.js",comp:K,raw:un,text:""},{name:"markUpdate.js",comp:K,raw:cn,text:""},{name:"wait.js",comp:K,raw:_n,text:""}]}}),r=new z({props:{$$slots:{default:[Gn]},$$scope:{ctx:s}}}),d=new z({props:{$$slots:{default:[Kn]},$$scope:{ctx:s}}}),c=new z({props:{$$slots:{default:[to]},$$scope:{ctx:s}}}),j=new z({props:{$$slots:{default:[no]},$$scope:{ctx:s}}}),h=new z({props:{$$slots:{default:[ro]},$$scope:{ctx:s}}}),m=new Rt({props:{name:[{name:"excerpt from Notification",comp:hn,raw:gn,text:"We found our problem!"}]}}),O=new z({props:{$$slots:{default:[so]},$$scope:{ctx:s}}}),tt=new ze({props:{$$slots:{default:[uo]},$$scope:{ctx:s}}}),_t=new Rt({props:{name:[{name:"App2",comp:Q,raw:On,text:""},{name:"AddTodo2",comp:Q,raw:Mn,text:""},{name:"EditProfile2",comp:Q,raw:zn,text:""},{name:"Navbar2",comp:Q,raw:xn,text:""},{name:"Notification2",comp:Q,raw:Bn,text:""},{name:"TodoList2",comp:Q,raw:Fn,text:""},{name:"data2.js",comp:Q,raw:Sn,text:""},{name:"markUpdate2.js",comp:Q,raw:Hn,text:""},{name:"wait2.js",comp:Q,raw:Wn,text:""}]}}),et=new z({props:{$$slots:{default:[mo]},$$scope:{ctx:s}}}),nt=new z({props:{$$slots:{default:[_o]},$$scope:{ctx:s}}}),ot=new z({props:{$$slots:{default:[ho]},$$scope:{ctx:s}}}),rt=new Ot({props:{$$slots:{default:[go]},$$scope:{ctx:s}}}),st=new z({props:{$$slots:{default:[vo]},$$scope:{ctx:s}}}),at=new z({props:{$$slots:{default:[bo]},$$scope:{ctx:s}}}),lt=new Ot({props:{$$slots:{default:[wo]},$$scope:{ctx:s}}}),it=new z({props:{$$slots:{default:[ko]},$$scope:{ctx:s}}}),ft=new Ot({props:{$$slots:{default:[yo]},$$scope:{ctx:s}}}),ut=new z({props:{$$slots:{default:[Uo]},$$scope:{ctx:s}}}),dt=new z({props:{$$slots:{default:[To]},$$scope:{ctx:s}}}),{c(){C(t.$$.fragment),e=T(),C(n.$$.fragment),a=T(),C(o.$$.fragment),i=T(),C(r.$$.fragment),l=T(),C(d.$$.fragment),g=T(),C(c.$$.fragment),b=T(),C(j.$$.fragment),V=T(),C(h.$$.fragment),p=T(),C(m.$$.fragment),$=T(),C(O.$$.fragment),vt=T(),C(tt.$$.fragment),bt=T(),C(_t.$$.fragment),wt=T(),C(et.$$.fragment),kt=T(),C(nt.$$.fragment),yt=T(),C(ot.$$.fragment),Ut=T(),C(rt.$$.fragment),Tt=T(),C(st.$$.fragment),Et=T(),C(at.$$.fragment),Dt=T(),C(lt.$$.fragment),Nt=T(),C(it.$$.fragment),Lt=T(),C(ft.$$.fragment),Ct=T(),C(ut.$$.fragment),At=T(),C(dt.$$.fragment)},l(f){A(t.$$.fragment,f),e=E(f),A(n.$$.fragment,f),a=E(f),A(o.$$.fragment,f),i=E(f),A(r.$$.fragment,f),l=E(f),A(d.$$.fragment,f),g=E(f),A(c.$$.fragment,f),b=E(f),A(j.$$.fragment,f),V=E(f),A(h.$$.fragment,f),p=E(f),A(m.$$.fragment,f),$=E(f),A(O.$$.fragment,f),vt=E(f),A(tt.$$.fragment,f),bt=E(f),A(_t.$$.fragment,f),wt=E(f),A(et.$$.fragment,f),kt=E(f),A(nt.$$.fragment,f),yt=E(f),A(ot.$$.fragment,f),Ut=E(f),A(rt.$$.fragment,f),Tt=E(f),A(st.$$.fragment,f),Et=E(f),A(at.$$.fragment,f),Dt=E(f),A(lt.$$.fragment,f),Nt=E(f),A(it.$$.fragment,f),Lt=E(f),A(ft.$$.fragment,f),Ct=E(f),A(ut.$$.fragment,f),At=E(f),A(dt.$$.fragment,f)},m(f,v){I(t,f,v),_(f,e,v),I(n,f,v),_(f,a,v),I(o,f,v),_(f,i,v),I(r,f,v),_(f,l,v),I(d,f,v),_(f,g,v),I(c,f,v),_(f,b,v),I(j,f,v),_(f,V,v),I(h,f,v),_(f,p,v),I(m,f,v),_(f,$,v),I(O,f,v),_(f,vt,v),I(tt,f,v),_(f,bt,v),I(_t,f,v),_(f,wt,v),I(et,f,v),_(f,kt,v),I(nt,f,v),_(f,yt,v),I(ot,f,v),_(f,Ut,v),I(rt,f,v),_(f,Tt,v),I(st,f,v),_(f,Et,v),I(at,f,v),_(f,Dt,v),I(lt,f,v),_(f,Nt,v),I(it,f,v),_(f,Lt,v),I(ft,f,v),_(f,Ct,v),I(ut,f,v),_(f,At,v),I(dt,f,v),It=!0},p(f,v){const xt={};v&2&&(xt.$$scope={dirty:v,ctx:f}),t.$set(xt);const Bt={};v&2&&(Bt.$$scope={dirty:v,ctx:f}),n.$set(Bt);const Ft={};v&2&&(Ft.$$scope={dirty:v,ctx:f}),r.$set(Ft);const Wt={};v&2&&(Wt.$$scope={dirty:v,ctx:f}),d.$set(Wt);const Xt={};v&2&&(Xt.$$scope={dirty:v,ctx:f}),c.$set(Xt);const Zt={};v&2&&(Zt.$$scope={dirty:v,ctx:f}),j.$set(Zt);const Gt={};v&2&&(Gt.$$scope={dirty:v,ctx:f}),h.$set(Gt);const Jt={};v&2&&(Jt.$$scope={dirty:v,ctx:f}),O.$set(Jt);const Kt={};v&2&&(Kt.$$scope={dirty:v,ctx:f}),tt.$set(Kt);const Qt={};v&2&&(Qt.$$scope={dirty:v,ctx:f}),et.$set(Qt);const Yt={};v&2&&(Yt.$$scope={dirty:v,ctx:f}),nt.$set(Yt);const te={};v&2&&(te.$$scope={dirty:v,ctx:f}),ot.$set(te);const ee={};v&2&&(ee.$$scope={dirty:v,ctx:f}),rt.$set(ee);const ne={};v&2&&(ne.$$scope={dirty:v,ctx:f}),st.$set(ne);const oe={};v&2&&(oe.$$scope={dirty:v,ctx:f}),at.$set(oe);const re={};v&2&&(re.$$scope={dirty:v,ctx:f}),lt.$set(re);const se={};v&2&&(se.$$scope={dirty:v,ctx:f}),it.$set(se);const ae={};v&2&&(ae.$$scope={dirty:v,ctx:f}),ft.$set(ae);const le={};v&2&&(le.$$scope={dirty:v,ctx:f}),ut.$set(le);const ie={};v&2&&(ie.$$scope={dirty:v,ctx:f}),dt.$set(ie)},i(f){It||(U(t.$$.fragment,f),U(n.$$.fragment,f),U(o.$$.fragment,f),U(r.$$.fragment,f),U(d.$$.fragment,f),U(c.$$.fragment,f),U(j.$$.fragment,f),U(h.$$.fragment,f),U(m.$$.fragment,f),U(O.$$.fragment,f),U(tt.$$.fragment,f),U(_t.$$.fragment,f),U(et.$$.fragment,f),U(nt.$$.fragment,f),U(ot.$$.fragment,f),U(rt.$$.fragment,f),U(st.$$.fragment,f),U(at.$$.fragment,f),U(lt.$$.fragment,f),U(it.$$.fragment,f),U(ft.$$.fragment,f),U(ut.$$.fragment,f),U(dt.$$.fragment,f),It=!0)},o(f){D(t.$$.fragment,f),D(n.$$.fragment,f),D(o.$$.fragment,f),D(r.$$.fragment,f),D(d.$$.fragment,f),D(c.$$.fragment,f),D(j.$$.fragment,f),D(h.$$.fragment,f),D(m.$$.fragment,f),D(O.$$.fragment,f),D(tt.$$.fragment,f),D(_t.$$.fragment,f),D(et.$$.fragment,f),D(nt.$$.fragment,f),D(ot.$$.fragment,f),D(rt.$$.fragment,f),D(st.$$.fragment,f),D(at.$$.fragment,f),D(lt.$$.fragment,f),D(it.$$.fragment,f),D(ft.$$.fragment,f),D(ut.$$.fragment,f),D(dt.$$.fragment,f),It=!1},d(f){f&&(u(e),u(a),u(i),u(l),u(g),u(b),u(V),u(p),u($),u(vt),u(bt),u(wt),u(kt),u(yt),u(Ut),u(Tt),u(Et),u(Dt),u(Nt),u(Lt),u(Ct),u(At)),P(t,f),P(n,f),P(o,f),P(r,f),P(d,f),P(c,f),P(j,f),P(h,f),P(m,f),P(O,f),P(tt,f),P(_t,f),P(et,f),P(nt,f),P(ot,f),P(rt,f),P(st,f),P(at,f),P(lt,f),P(it,f),P(ft,f),P(ut,f),P(dt,f)}}}function Do(s){let t,e;const n=[s[0],Ce];let a={$$slots:{default:[Eo]},$$scope:{ctx:s}};for(let o=0;o<n.length;o+=1)a=St(a,n[o]);return t=new Se({props:a}),{c(){C(t.$$.fragment)},l(o){A(t.$$.fragment,o)},m(o,i){I(t,o,i),e=!0},p(o,[i]){const r=i&1?Me(n,[i&1&&ue(o[0]),i&0&&ue(Ce)]):{};i&2&&(r.$$scope={dirty:i,ctx:o}),t.$set(r)},i(o){e||(U(t.$$.fragment,o),e=!0)},o(o){D(t.$$.fragment,o),e=!1},d(o){P(t,o)}}}const Ce={title:"3 tips for managing a complex store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function No(s,t,e){return s.$$set=n=>{e(0,t=St(St({},t),fe(n)))},t=fe(t),[t]}class zo extends X{constructor(t){super(),Z(this,t,No,Do,W,{})}}export{zo as default,Ce as metadata};
