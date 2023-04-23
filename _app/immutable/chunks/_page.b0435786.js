import{a9 as Le,o as Ae,S as G,i as J,s as K,k as N,q as b,a as U,e as It,l as L,m as V,r as w,h as u,c as T,n as j,b as _,D as y,aa as H,P as M,H as Z,T as X,I as W,a2 as pt,ap as tt,C as Ie,p as Ct,E as Ce,F as Pe,G as qe,g as E,d as D,N as Pt,u as S,y as I,z as C,A as P,v as Ve,f as je,B as q,J as Rt,K as Oe,L as ae,M as ie}from"./index.37298988.js";import{M as Re,P as z}from"./mdsvex-layout-notes.28d092d4.js";import{w as St,d as qt}from"./index.646636c1.js";import{S as Vt}from"./ShowMany.1ce9c697.js";import{U as Me}from"./Ul.7c7d0e94.js";import{H as jt}from"./H3.51a842fb.js";import{S as mt}from"./Strong.b6d58cbc.js";import{L as Ot}from"./Li.9fb82923.js";const F=St({todos:[{name:"Do laundry",done:!1}],notifications:[],user:{name:"Henrik"}});function _t(){let s=new Set;return Le(()=>{s.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{s.has(t)&&(t.style.outlineColor="black")},1e3)})}),Ae(()=>{s.forEach(t=>{t.style.outline="2px solid black"})}),function(e){return s.add(e),{destroy(){s.delete(e)}}}}function fe(s){let t,e,n,l,o,f,r,a,d,v;return{c(){t=N("div"),e=U(),n=N("div"),l=b(`Update Username:\r
		`),o=N("input"),f=U(),r=N("button"),a=b("Close"),this.h()},l(c){t=L(c,"DIV",{class:!0}),V(t).forEach(u),e=T(c),n=L(c,"DIV",{class:!0});var k=V(n);l=w(k,`Update Username:\r
		`),o=L(k,"INPUT",{type:!0,class:!0}),f=T(k),r=L(k,"BUTTON",{class:!0});var A=V(r);a=w(A,"Close"),A.forEach(u),k.forEach(u),this.h()},h(){j(t,"class","backdrop svelte-1y29kn9"),j(o,"type","text"),j(o,"class","svelte-1y29kn9"),j(r,"class","svelte-1y29kn9"),j(n,"class","modal svelte-1y29kn9")},m(c,k){_(c,t,k),_(c,e,k),_(c,n,k),y(n,l),y(n,o),pt(o,s[1].user.name),y(n,f),y(n,r),y(r,a),d||(v=[H(s[2].call(null,t)),M(o,"input",s[4]),M(r,"click",s[5]),H(s[2].call(null,n))],d=!0)},p(c,k){k&2&&o.value!==c[1].user.name&&pt(o,c[1].user.name)},d(c){c&&u(t),c&&u(e),c&&u(n),d=!1,X(v)}}}function Se(s){let t,e,n,l,o,f,r=s[0]&&fe(s);return{c(){t=N("div"),e=b("⚙"),n=U(),r&&r.c(),l=It(),this.h()},l(a){t=L(a,"DIV",{class:!0});var d=V(t);e=w(d,"⚙"),d.forEach(u),n=T(a),r&&r.l(a),l=It(),this.h()},h(){j(t,"class","icon svelte-1y29kn9")},m(a,d){_(a,t,d),y(t,e),_(a,n,d),r&&r.m(a,d),_(a,l,d),o||(f=[H(s[2].call(null,t)),M(t,"click",s[3])],o=!0)},p(a,[d]){a[0]?r?r.p(a,d):(r=fe(a),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},i:Z,o:Z,d(a){a&&u(t),a&&u(n),r&&r.d(a),a&&u(l),o=!1,X(f)}}}function ze(s,t,e){let n;W(s,F,d=>e(1,n=d));let l=!1;const o=_t,f=()=>e(0,l=!l);function r(){n.user.name=this.value,F.set(n)}return[l,n,o,f,r,()=>{tt(F,n.notifications=[...n.notifications,`New name: ${n.user.name}`],n),e(0,l=!1)}]}class He extends G{constructor(t){super(),J(this,t,ze,Se,K,{})}}function ue(s,t,e){const n=s.slice();return n[8]=t[e],n}function de(s){let t,e,n=s[0].notifications,l=[];for(let o=0;o<n.length;o+=1)l[o]=ce(ue(s,n,o));return{c(){t=N("div"),e=N("ul");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){t=L(o,"DIV",{class:!0});var f=V(t);e=L(f,"UL",{class:!0});var r=V(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(u),f.forEach(u),this.h()},h(){j(e,"class","svelte-bzwdow"),j(t,"class","popover svelte-bzwdow")},m(o,f){_(o,t,f),y(t,e);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(o,f){if(f&1){n=o[0].notifications;let r;for(r=0;r<n.length;r+=1){const a=ue(o,n,r);l[r]?l[r].p(a,f):(l[r]=ce(a),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&u(t),Pt(l,o)}}}function ce(s){let t,e=s[8]+"",n;return{c(){t=N("li"),n=b(e)},l(l){t=L(l,"LI",{});var o=V(t);n=w(o,e),o.forEach(u)},m(l,o){_(l,t,o),y(t,n)},p(l,o){o&1&&e!==(e=l[8]+"")&&S(n,e)},d(l){l&&u(t)}}}function Be(s){let t,e,n,l,o;const f=s[4].default,r=Ie(f,s,s[3],null);let a=s[1]&&de(s);return{c(){t=N("div"),r&&r.c(),e=U(),a&&a.c(),this.h()},l(d){t=L(d,"DIV",{style:!0});var v=V(t);r&&r.l(v),e=T(v),a&&a.l(v),v.forEach(u),this.h()},h(){Ct(t,"position","relative"),Ct(t,"cursor","default")},m(d,v){_(d,t,v),r&&r.m(t,null),y(t,e),a&&a.m(t,null),n=!0,l||(o=[H(s[2].call(null,t)),M(t,"focus",s[5]),M(t,"mouseover",s[6]),M(t,"mouseleave",s[7])],l=!0)},p(d,[v]){r&&r.p&&(!n||v&8)&&Ce(r,f,d,d[3],n?qe(f,d[3],v,null):Pe(d[3]),null),d[1]?a?a.p(d,v):(a=de(d),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(d){n||(E(r,d),n=!0)},o(d){D(r,d),n=!1},d(d){d&&u(t),r&&r.d(d),a&&a.d(),l=!1,X(o)}}}function Fe(s,t,e){let n;W(s,F,c=>e(0,n=c));let{$$slots:l={},$$scope:o}=t,f=!1;const r=_t(),a=()=>e(1,f=!0),d=()=>e(1,f=!0),v=()=>e(1,f=!1);return s.$$set=c=>{"$$scope"in c&&e(3,o=c.$$scope)},s.$$.update=()=>{s.$$.dirty&1&&n.notifications.length===3&&tt(F,n={...n,todos:[]},n)},[n,f,r,o,l,a,d,v]}class We extends G{constructor(t){super(),J(this,t,Fe,Be,K,{})}}function pe(s){let t,e=s[0].todos.filter($e).length+"",n,l,o=s[0].todos.length+"",f;return{c(){t=N("div"),n=b(e),l=b(" / "),f=b(o),this.h()},l(r){t=L(r,"DIV",{class:!0});var a=V(t);n=w(a,e),l=w(a," / "),f=w(a,o),a.forEach(u),this.h()},h(){j(t,"class","count todos svelte-1qedsae")},m(r,a){_(r,t,a),y(t,n),y(t,l),y(t,f)},p(r,a){a&1&&e!==(e=r[0].todos.filter($e).length+"")&&S(n,e),a&1&&o!==(o=r[0].todos.length+"")&&S(f,o)},d(r){r&&u(t)}}}function me(s){let t,e;return t=new We({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){P(t,n,l),e=!0},p(n,l){const o={};l&5&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){q(t,n)}}}function Ge(s){let t,e=s[0].notifications.length+"",n;return{c(){t=N("div"),n=b(e),this.h()},l(l){t=L(l,"DIV",{class:!0});var o=V(t);n=w(o,e),o.forEach(u),this.h()},h(){j(t,"class","count svelte-1qedsae")},m(l,o){_(l,t,o),y(t,n)},p(l,o){o&1&&e!==(e=l[0].notifications.length+"")&&S(n,e)},d(l){l&&u(t)}}}function Je(s){let t,e,n,l,o,f,r,a=s[0].user.name+"",d,v,c,k,A,O,h=s[0].todos.length&&pe(s),m=s[0].notifications.length&&me(s);return c=new He({}),{c(){t=N("navbar"),e=N("div"),n=b("Complex store example"),l=U(),h&&h.c(),o=U(),m&&m.c(),f=U(),r=N("div"),d=b(a),v=U(),I(c.$$.fragment),this.h()},l(p){t=L(p,"NAVBAR",{class:!0});var $=V(t);e=L($,"DIV",{class:!0});var R=V(e);n=w(R,"Complex store example"),R.forEach(u),l=T($),h&&h.l($),o=T($),m&&m.l($),f=T($),r=L($,"DIV",{});var Q=V(r);d=w(Q,a),Q.forEach(u),v=T($),C(c.$$.fragment,$),$.forEach(u),this.h()},h(){j(e,"class","title svelte-1qedsae"),j(t,"class","svelte-1qedsae")},m(p,$){_(p,t,$),y(t,e),y(e,n),y(t,l),h&&h.m(t,null),y(t,o),m&&m.m(t,null),y(t,f),y(t,r),y(r,d),y(t,v),P(c,t,null),k=!0,A||(O=H(s[1].call(null,t)),A=!0)},p(p,[$]){p[0].todos.length?h?h.p(p,$):(h=pe(p),h.c(),h.m(t,o)):h&&(h.d(1),h=null),p[0].notifications.length?m?(m.p(p,$),$&1&&E(m,1)):(m=me(p),m.c(),E(m,1),m.m(t,f)):m&&(Ve(),D(m,1,1,()=>{m=null}),je()),(!k||$&1)&&a!==(a=p[0].user.name+"")&&S(d,a)},i(p){k||(E(m),E(c.$$.fragment,p),k=!0)},o(p){D(m),D(c.$$.fragment,p),k=!1},d(p){p&&u(t),h&&h.d(),m&&m.d(),q(c),A=!1,O()}}}const $e=s=>s.done;function Ke(s,t,e){let n;W(s,F,o=>e(0,n=o));const l=_t();return[n,l]}class Ze extends G{constructor(t){super(),J(this,t,Ke,Je,K,{})}}function Qe(s){return new Promise(t=>{setTimeout(t,s)})}function Xe(s){let t,e,n,l,o,f,r,a,d,v;return{c(){t=N("div"),e=b(`Add todo\r
	`),n=N("form"),l=N("input"),o=U(),f=N("button"),r=b("Add"),this.h()},l(c){t=L(c,"DIV",{class:!0});var k=V(t);e=w(k,`Add todo\r
	`),n=L(k,"FORM",{class:!0});var A=V(n);l=L(A,"INPUT",{}),o=T(A),f=L(A,"BUTTON",{type:!0});var O=V(f);r=w(O,"Add"),O.forEach(u),A.forEach(u),k.forEach(u),this.h()},h(){f.disabled=a=s[0].length===0,j(f,"type","submit"),j(n,"class","svelte-1ook6qp"),j(t,"class","svelte-1ook6qp")},m(c,k){_(c,t,k),y(t,e),y(t,n),y(n,l),pt(l,s[0]),y(n,o),y(n,f),y(f,r),d||(v=[M(l,"input",s[3]),M(n,"submit",s[2]),H(s[1].call(null,t))],d=!0)},p(c,[k]){k&1&&l.value!==c[0]&&pt(l,c[0]),k&1&&a!==(a=c[0].length===0)&&(f.disabled=a)},i:Z,o:Z,d(c){c&&u(t),d=!1,X(v)}}}function Ye(s,t,e){let n;W(s,F,a=>e(4,n=a));let l="";const o=_t();function f(a){a.preventDefault(),n.todos.push({name:l,done:!1}),n.notifications.push(`Add "${l}"`),F.set(n),e(0,l="")}function r(){l=this.value,e(0,l)}return[l,o,f,r]}class xe extends G{constructor(t){super(),J(this,t,Ye,Xe,K,{})}}function _e(s,t,e){const n=s.slice();return n[5]=t[e],n[6]=t,n[7]=e,n}function he(s){let t,e,n,l,o;function f(){return s[3](s[5],s[6],s[7])}return{c(){t=N("button"),e=b("Done"),this.h()},l(r){t=L(r,"BUTTON",{});var a=V(t);e=w(a,"Done"),a.forEach(u),this.h()},h(){t.disabled=n=s[5].loading},m(r,a){_(r,t,a),y(t,e),l||(o=M(t,"click",f),l=!0)},p(r,a){s=r,a&1&&n!==(n=s[5].loading)&&(t.disabled=n)},d(r){r&&u(t),l=!1,o()}}}function ve(s){let t,e,n,l=s[5].name+"",o,f,r=s[5].loading?"(Loading...)":"",a,d,v,c,k,A,O,h=!s[5].done&&he(s);function m(){return s[4](s[5])}return{c(){t=N("li"),e=N("input"),o=b(l),f=U(),a=b(r),d=U(),h&&h.c(),v=U(),c=N("button"),k=b("Delete"),this.h()},l(p){t=L(p,"LI",{class:!0});var $=V(t);e=L($,"INPUT",{type:!0,class:!0}),o=w($,l),$.forEach(u),f=T(p),a=w(p,r),d=T(p),h&&h.l(p),v=T(p),c=L(p,"BUTTON",{});var R=V(c);k=w(R,"Delete"),R.forEach(u),this.h()},h(){j(e,"type","checkbox"),e.checked=n=s[5].done,e.disabled=!0,j(e,"class","svelte-1j7qay4"),j(t,"class","svelte-1j7qay4")},m(p,$){_(p,t,$),y(t,e),y(t,o),_(p,f,$),_(p,a,$),_(p,d,$),h&&h.m(p,$),_(p,v,$),_(p,c,$),y(c,k),A||(O=M(c,"click",m),A=!0)},p(p,$){s=p,$&1&&n!==(n=s[5].done)&&(e.checked=n),$&1&&l!==(l=s[5].name+"")&&S(o,l),$&1&&r!==(r=s[5].loading?"(Loading...)":"")&&S(a,r),s[5].done?h&&(h.d(1),h=null):h?h.p(s,$):(h=he(s),h.c(),h.m(v.parentNode,v))},d(p){p&&u(t),p&&u(f),p&&u(a),p&&u(d),h&&h.d(p),p&&u(v),p&&u(c),A=!1,O()}}}function tn(s){let t,e,n,l,o=s[0].todos.length+"",f,r,a,d,v,c,k,A,O=s[0].todos,h=[];for(let m=0;m<O.length;m+=1)h[m]=ve(_e(s,O,m));return v=new xe({}),{c(){t=N("div"),e=b("Done: "),n=b(s[1]),l=b(" / "),f=b(o),r=U(),a=N("ul");for(let m=0;m<h.length;m+=1)h[m].c();d=U(),I(v.$$.fragment),this.h()},l(m){t=L(m,"DIV",{class:!0});var p=V(t);e=w(p,"Done: "),n=w(p,s[1]),l=w(p," / "),f=w(p,o),p.forEach(u),r=T(m),a=L(m,"UL",{class:!0});var $=V(a);for(let R=0;R<h.length;R+=1)h[R].l($);$.forEach(u),d=T(m),C(v.$$.fragment,m),this.h()},h(){j(t,"class","status svelte-1j7qay4"),j(a,"class","svelte-1j7qay4")},m(m,p){_(m,t,p),y(t,e),y(t,n),y(t,l),y(t,f),_(m,r,p),_(m,a,p);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(a,null);_(m,d,p),P(v,m,p),c=!0,k||(A=[H(s[2].call(null,t)),H(s[2].call(null,a))],k=!0)},p(m,[p]){if((!c||p&2)&&S(n,m[1]),(!c||p&1)&&o!==(o=m[0].todos.length+"")&&S(f,o),p&1){O=m[0].todos;let $;for($=0;$<O.length;$+=1){const R=_e(m,O,$);h[$]?h[$].p(R,p):(h[$]=ve(R),h[$].c(),h[$].m(a,null))}for(;$<h.length;$+=1)h[$].d(1);h.length=O.length}},i(m){c||(E(v.$$.fragment,m),c=!0)},o(m){D(v.$$.fragment,m),c=!1},d(m){m&&u(t),m&&u(r),m&&u(a),Pt(h,m),m&&u(d),q(v,m),k=!1,X(A)}}}function en(s,t,e){let n,l;W(s,F,a=>e(0,l=a));const o=_t(),f=async(a,d,v)=>{tt(F,d[v].loading=!0,l),await Qe(5e3),tt(F,d[v].done=!0,l),tt(F,d[v].loading=!1,l),l.notifications.push(`Marked "${a.name}" as done`),F.set(l)},r=a=>{l.todos.splice(l.todos.indexOf(a),1),l.notifications.push(`Deleted "${a.name}"`),F.set(l)};return s.$$.update=()=>{s.$$.dirty&1&&e(1,n=l.todos.filter(a=>a.done).length)},[l,n,o,f,r]}class nn extends G{constructor(t){super(),J(this,t,en,tn,K,{})}}function on(s){let t,e,n,l;return t=new Ze({}),n=new nn({}),{c(){I(t.$$.fragment),e=U(),I(n.$$.fragment)},l(o){C(t.$$.fragment,o),e=T(o),C(n.$$.fragment,o)},m(o,f){P(t,o,f),_(o,e,f),P(n,o,f),l=!0},p:Z,i(o){l||(E(t.$$.fragment,o),E(n.$$.fragment,o),l=!0)},o(o){D(t.$$.fragment,o),D(n.$$.fragment,o),l=!1},d(o){q(t,o),o&&u(e),q(n,o)}}}class Y extends G{constructor(t){super(),J(this,t,null,on,K,{})}}const rn=`<script>\r
	import Navbar from "./Navbar.svelte";\r
	import TodoList from "./TodoList.svelte";\r
<\/script>\r
\r
<Navbar />\r
\r
<TodoList />\r
`,sn=`<script>\r
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
</style>`,ln=`import { writable } from "svelte/store";\r
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
`,an=`<script>\r
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
`,fn=`import { beforeUpdate, onMount } from "svelte";\r
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
`,un=`<script>\r
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
</style>`,dn=`<script>\r
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
`,cn=`<script>\r
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
`,pn=`export default function wait(time) {\r
	return new Promise((resolve) => {\r
		setTimeout(resolve, time);\r
	});\r
}\r
`;class mn extends G{constructor(t){super(),J(this,t,null,null,K,{})}}const $n=`<!-- \r
  if ($data.notifications.length === 3) $data = { ...$data, todos: [] };\r
 -->\r
`,B=St({todos:Object.freeze([{name:"Do laundry",done:!1}]),notifications:[]}),Mt=St({name:"Henrik"});function _n(s){B.update(t=>(t.todos=Object.freeze([...t.todos,s]),t))}function ht(){let s=new Set;return Le(()=>{s.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{s.has(t)&&(t.style.outlineColor="black")},1e3)})}),Ae(()=>{s.forEach(t=>{t.style.outline="2px solid black",t.style.margin="8px"})}),function(e){return s.add(e),{destroy(){s.delete(e)}}}}function ge(s){let t,e,n,l,o,f,r,a,d,v;return{c(){t=N("div"),e=U(),n=N("div"),l=b(`Update Username:\r
		`),o=N("input"),f=U(),r=N("button"),a=b("Close"),this.h()},l(c){t=L(c,"DIV",{class:!0}),V(t).forEach(u),e=T(c),n=L(c,"DIV",{class:!0});var k=V(n);l=w(k,`Update Username:\r
		`),o=L(k,"INPUT",{type:!0,class:!0}),f=T(k),r=L(k,"BUTTON",{class:!0});var A=V(r);a=w(A,"Close"),A.forEach(u),k.forEach(u),this.h()},h(){j(t,"class","backdrop svelte-1y29kn9"),j(o,"type","text"),j(o,"class","svelte-1y29kn9"),j(r,"class","svelte-1y29kn9"),j(n,"class","modal svelte-1y29kn9")},m(c,k){_(c,t,k),_(c,e,k),_(c,n,k),y(n,l),y(n,o),pt(o,s[1].name),y(n,f),y(n,r),y(r,a),d||(v=[H(s[3].call(null,t)),M(o,"input",s[5]),M(r,"click",s[6]),H(s[3].call(null,n))],d=!0)},p(c,k){k&2&&o.value!==c[1].name&&pt(o,c[1].name)},d(c){c&&u(t),c&&u(e),c&&u(n),d=!1,X(v)}}}function hn(s){let t,e,n,l,o,f,r=s[0]&&ge(s);return{c(){t=N("div"),e=b("⚙"),n=U(),r&&r.c(),l=It(),this.h()},l(a){t=L(a,"DIV",{class:!0});var d=V(t);e=w(d,"⚙"),d.forEach(u),n=T(a),r&&r.l(a),l=It(),this.h()},h(){j(t,"class","icon svelte-1y29kn9")},m(a,d){_(a,t,d),y(t,e),_(a,n,d),r&&r.m(a,d),_(a,l,d),o||(f=[H(s[3].call(null,t)),M(t,"click",s[4])],o=!0)},p(a,[d]){a[0]?r?r.p(a,d):(r=ge(a),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},i:Z,o:Z,d(a){a&&u(t),a&&u(n),r&&r.d(a),a&&u(l),o=!1,X(f)}}}function vn(s,t,e){let n,l;W(s,Mt,v=>e(1,n=v)),W(s,B,v=>e(2,l=v));let o=!1;const f=ht,r=()=>e(0,o=!o);function a(){n.name=this.value,Mt.set(n)}return[o,n,l,f,r,a,()=>{tt(B,l.notifications=[...l.notifications,`New name: ${n.name}`],l),e(0,o=!1)}]}class gn extends G{constructor(t){super(),J(this,t,vn,hn,K,{})}}function be(s,t,e){const n=s.slice();return n[8]=t[e],n}function we(s){let t,e,n=s[1].notifications,l=[];for(let o=0;o<n.length;o+=1)l[o]=ke(be(s,n,o));return{c(){t=N("div"),e=N("ul");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){t=L(o,"DIV",{class:!0});var f=V(t);e=L(f,"UL",{class:!0});var r=V(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(u),f.forEach(u),this.h()},h(){j(e,"class","svelte-bzwdow"),j(t,"class","popover svelte-bzwdow")},m(o,f){_(o,t,f),y(t,e);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(o,f){if(f&2){n=o[1].notifications;let r;for(r=0;r<n.length;r+=1){const a=be(o,n,r);l[r]?l[r].p(a,f):(l[r]=ke(a),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&u(t),Pt(l,o)}}}function ke(s){let t,e=s[8]+"",n;return{c(){t=N("li"),n=b(e)},l(l){t=L(l,"LI",{});var o=V(t);n=w(o,e),o.forEach(u)},m(l,o){_(l,t,o),y(t,n)},p(l,o){o&2&&e!==(e=l[8]+"")&&S(n,e)},d(l){l&&u(t)}}}function bn(s){let t,e,n,l,o;const f=s[4].default,r=Ie(f,s,s[3],null);let a=s[0]&&we(s);return{c(){t=N("div"),r&&r.c(),e=U(),a&&a.c(),this.h()},l(d){t=L(d,"DIV",{style:!0});var v=V(t);r&&r.l(v),e=T(v),a&&a.l(v),v.forEach(u),this.h()},h(){Ct(t,"position","relative"),Ct(t,"cursor","default")},m(d,v){_(d,t,v),r&&r.m(t,null),y(t,e),a&&a.m(t,null),n=!0,l||(o=[H(s[2].call(null,t)),M(t,"focus",s[5]),M(t,"mouseover",s[6]),M(t,"mouseleave",s[7])],l=!0)},p(d,[v]){r&&r.p&&(!n||v&8)&&Ce(r,f,d,d[3],n?qe(f,d[3],v,null):Pe(d[3]),null),d[0]?a?a.p(d,v):(a=we(d),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(d){n||(E(r,d),n=!0)},o(d){D(r,d),n=!1},d(d){d&&u(t),r&&r.d(d),a&&a.d(),l=!1,X(o)}}}function wn(s,t,e){let n;W(s,B,c=>e(1,n=c));let{$$slots:l={},$$scope:o}=t,f=!1;const r=ht(),a=()=>e(0,f=!0),d=()=>e(0,f=!0),v=()=>e(0,f=!1);return s.$$set=c=>{"$$scope"in c&&e(3,o=c.$$scope)},[f,n,r,o,l,a,d,v]}class kn extends G{constructor(t){super(),J(this,t,wn,bn,K,{})}}function ye(s){let t,e,n,l;return{c(){t=N("div"),e=b(s[1]),n=b(" / "),l=b(s[0]),this.h()},l(o){t=L(o,"DIV",{class:!0});var f=V(t);e=w(f,s[1]),n=w(f," / "),l=w(f,s[0]),f.forEach(u),this.h()},h(){j(t,"class","count todos svelte-1qedsae")},m(o,f){_(o,t,f),y(t,e),y(t,n),y(t,l)},p(o,f){f&2&&S(e,o[1]),f&1&&S(l,o[0])},d(o){o&&u(t)}}}function Ue(s){let t,e;return t=new kn({props:{$$slots:{default:[yn]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){P(t,n,l),e=!0},p(n,l){const o={};l&260&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){e||(E(t.$$.fragment,n),e=!0)},o(n){D(t.$$.fragment,n),e=!1},d(n){q(t,n)}}}function yn(s){let t,e;return{c(){t=N("div"),e=b(s[2]),this.h()},l(n){t=L(n,"DIV",{class:!0});var l=V(t);e=w(l,s[2]),l.forEach(u),this.h()},h(){j(t,"class","count svelte-1qedsae")},m(n,l){_(n,t,l),y(t,e)},p(n,l){l&4&&S(e,n[2])},d(n){n&&u(t)}}}function Un(s){let t,e,n,l,o,f,r,a=s[3].name+"",d,v,c,k,A,O,h=s[0]&&ye(s),m=s[2]&&Ue(s);return c=new gn({}),{c(){t=N("navbar"),e=N("div"),n=b("Complex store example"),l=U(),h&&h.c(),o=U(),m&&m.c(),f=U(),r=N("div"),d=b(a),v=U(),I(c.$$.fragment),this.h()},l(p){t=L(p,"NAVBAR",{class:!0});var $=V(t);e=L($,"DIV",{class:!0});var R=V(e);n=w(R,"Complex store example"),R.forEach(u),l=T($),h&&h.l($),o=T($),m&&m.l($),f=T($),r=L($,"DIV",{});var Q=V(r);d=w(Q,a),Q.forEach(u),v=T($),C(c.$$.fragment,$),$.forEach(u),this.h()},h(){j(e,"class","title svelte-1qedsae"),j(t,"class","svelte-1qedsae")},m(p,$){_(p,t,$),y(t,e),y(e,n),y(t,l),h&&h.m(t,null),y(t,o),m&&m.m(t,null),y(t,f),y(t,r),y(r,d),y(t,v),P(c,t,null),k=!0,A||(O=H(s[4].call(null,t)),A=!0)},p(p,[$]){p[0]?h?h.p(p,$):(h=ye(p),h.c(),h.m(t,o)):h&&(h.d(1),h=null),p[2]?m?(m.p(p,$),$&4&&E(m,1)):(m=Ue(p),m.c(),E(m,1),m.m(t,f)):m&&(Ve(),D(m,1,1,()=>{m=null}),je()),(!k||$&8)&&a!==(a=p[3].name+"")&&S(d,a)},i(p){k||(E(m),E(c.$$.fragment,p),k=!0)},o(p){D(m),D(c.$$.fragment,p),k=!1},d(p){p&&u(t),h&&h.d(),m&&m.d(),q(c),A=!1,O()}}}function Tn(s,t,e){let n,l,o,f;W(s,Mt,c=>e(3,f=c));const r=ht(),a=qt(B,c=>c.todos.length);W(s,a,c=>e(0,n=c));const d=qt(B,c=>c.todos.filter(k=>k.done).length);W(s,d,c=>e(1,l=c));const v=qt(B,c=>c.notifications.length);return W(s,v,c=>e(2,o=c)),[n,l,o,f,r,a,d,v]}class En extends G{constructor(t){super(),J(this,t,Tn,Un,K,{})}}function Dn(s){return new Promise(t=>{setTimeout(t,s)})}function Nn(s){let t,e,n,l,o,f,r,a,d,v;return{c(){t=N("div"),e=b(`Add todo\r
	`),n=N("form"),l=N("input"),o=U(),f=N("button"),r=b("Add"),this.h()},l(c){t=L(c,"DIV",{class:!0});var k=V(t);e=w(k,`Add todo\r
	`),n=L(k,"FORM",{class:!0});var A=V(n);l=L(A,"INPUT",{}),o=T(A),f=L(A,"BUTTON",{type:!0});var O=V(f);r=w(O,"Add"),O.forEach(u),A.forEach(u),k.forEach(u),this.h()},h(){f.disabled=a=s[0].length===0,j(f,"type","submit"),j(n,"class","svelte-1ook6qp"),j(t,"class","svelte-1ook6qp")},m(c,k){_(c,t,k),y(t,e),y(t,n),y(n,l),pt(l,s[0]),y(n,o),y(n,f),y(f,r),d||(v=[M(l,"input",s[3]),M(n,"submit",s[2]),H(s[1].call(null,t))],d=!0)},p(c,[k]){k&1&&l.value!==c[0]&&pt(l,c[0]),k&1&&a!==(a=c[0].length===0)&&(f.disabled=a)},i:Z,o:Z,d(c){c&&u(t),d=!1,X(v)}}}function Ln(s,t,e){let n;W(s,B,a=>e(4,n=a));let l="";const o=ht();function f(a){a.preventDefault(),_n({name:l,done:!1}),n.notifications.push(`Add "${l}"`),B.set(n),e(0,l="")}function r(){l=this.value,e(0,l)}return[l,o,f,r]}class An extends G{constructor(t){super(),J(this,t,Ln,Nn,K,{})}}function Te(s,t,e){const n=s.slice();return n[5]=t[e],n[6]=t,n[7]=e,n}function Ee(s){let t,e,n,l,o;function f(){return s[3](s[5],s[6],s[7])}return{c(){t=N("button"),e=b("Done"),this.h()},l(r){t=L(r,"BUTTON",{});var a=V(t);e=w(a,"Done"),a.forEach(u),this.h()},h(){t.disabled=n=s[5].loading},m(r,a){_(r,t,a),y(t,e),l||(o=M(t,"click",f),l=!0)},p(r,a){s=r,a&1&&n!==(n=s[5].loading)&&(t.disabled=n)},d(r){r&&u(t),l=!1,o()}}}function De(s){let t,e,n,l=s[5].name+"",o,f,r=s[5].loading?"(Loading...)":"",a,d,v,c,k,A,O,h=!s[5].done&&Ee(s);function m(){return s[4](s[5])}return{c(){t=N("li"),e=N("input"),o=b(l),f=U(),a=b(r),d=U(),h&&h.c(),v=U(),c=N("button"),k=b("Delete"),this.h()},l(p){t=L(p,"LI",{class:!0});var $=V(t);e=L($,"INPUT",{type:!0,class:!0}),o=w($,l),$.forEach(u),f=T(p),a=w(p,r),d=T(p),h&&h.l(p),v=T(p),c=L(p,"BUTTON",{});var R=V(c);k=w(R,"Delete"),R.forEach(u),this.h()},h(){j(e,"type","checkbox"),e.checked=n=s[5].done,e.disabled=!0,j(e,"class","svelte-1j7qay4"),j(t,"class","svelte-1j7qay4")},m(p,$){_(p,t,$),y(t,e),y(t,o),_(p,f,$),_(p,a,$),_(p,d,$),h&&h.m(p,$),_(p,v,$),_(p,c,$),y(c,k),A||(O=M(c,"click",m),A=!0)},p(p,$){s=p,$&1&&n!==(n=s[5].done)&&(e.checked=n),$&1&&l!==(l=s[5].name+"")&&S(o,l),$&1&&r!==(r=s[5].loading?"(Loading...)":"")&&S(a,r),s[5].done?h&&(h.d(1),h=null):h?h.p(s,$):(h=Ee(s),h.c(),h.m(v.parentNode,v))},d(p){p&&u(t),p&&u(f),p&&u(a),p&&u(d),h&&h.d(p),p&&u(v),p&&u(c),A=!1,O()}}}function In(s){let t,e,n,l,o=s[0].todos.length+"",f,r,a,d,v,c,k,A,O=s[0].todos,h=[];for(let m=0;m<O.length;m+=1)h[m]=De(Te(s,O,m));return v=new An({}),{c(){t=N("div"),e=b("Done: "),n=b(s[1]),l=b(" / "),f=b(o),r=U(),a=N("ul");for(let m=0;m<h.length;m+=1)h[m].c();d=U(),I(v.$$.fragment),this.h()},l(m){t=L(m,"DIV",{class:!0});var p=V(t);e=w(p,"Done: "),n=w(p,s[1]),l=w(p," / "),f=w(p,o),p.forEach(u),r=T(m),a=L(m,"UL",{class:!0});var $=V(a);for(let R=0;R<h.length;R+=1)h[R].l($);$.forEach(u),d=T(m),C(v.$$.fragment,m),this.h()},h(){j(t,"class","status svelte-1j7qay4"),j(a,"class","svelte-1j7qay4")},m(m,p){_(m,t,p),y(t,e),y(t,n),y(t,l),y(t,f),_(m,r,p),_(m,a,p);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(a,null);_(m,d,p),P(v,m,p),c=!0,k||(A=[H(s[2].call(null,t)),H(s[2].call(null,a))],k=!0)},p(m,[p]){if((!c||p&2)&&S(n,m[1]),(!c||p&1)&&o!==(o=m[0].todos.length+"")&&S(f,o),p&1){O=m[0].todos;let $;for($=0;$<O.length;$+=1){const R=Te(m,O,$);h[$]?h[$].p(R,p):(h[$]=De(R),h[$].c(),h[$].m(a,null))}for(;$<h.length;$+=1)h[$].d(1);h.length=O.length}},i(m){c||(E(v.$$.fragment,m),c=!0)},o(m){D(v.$$.fragment,m),c=!1},d(m){m&&u(t),m&&u(r),m&&u(a),Pt(h,m),m&&u(d),q(v,m),k=!1,X(A)}}}function Cn(s,t,e){let n,l;W(s,B,a=>e(0,l=a));const o=ht(),f=async(a,d,v)=>{tt(B,d[v].loading=!0,l),await Dn(5e3),tt(B,d[v].done=!0,l),tt(B,d[v].loading=!1,l),l.notifications.push(`Marked "${a.name}" as done`),B.set(l)},r=a=>{l.todos.splice(l.todos.indexOf(a),1),l.notifications.push(`Deleted "${a.name}"`),B.set(l)};return s.$$.update=()=>{s.$$.dirty&1&&e(1,n=l.todos.filter(a=>a.done).length)},[l,n,o,f,r]}class Pn extends G{constructor(t){super(),J(this,t,Cn,In,K,{})}}function qn(s){let t,e,n,l;return t=new En({}),n=new Pn({}),{c(){I(t.$$.fragment),e=U(),I(n.$$.fragment)},l(o){C(t.$$.fragment,o),e=T(o),C(n.$$.fragment,o)},m(o,f){P(t,o,f),_(o,e,f),P(n,o,f),l=!0},p:Z,i(o){l||(E(t.$$.fragment,o),E(n.$$.fragment,o),l=!0)},o(o){D(t.$$.fragment,o),D(n.$$.fragment,o),l=!1},d(o){q(t,o),o&&u(e),q(n,o)}}}class x extends G{constructor(t){super(),J(this,t,null,qn,K,{})}}const Vn=`<script>\r
	import Navbar2 from "./Navbar2.svelte";\r
	import TodoList2 from "./TodoList2.svelte";\r
<\/script>\r
\r
<Navbar2 />\r
\r
<TodoList2 />\r
`,jn=`<script>\r
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
`,On=`import { writable } from "svelte/store";\r
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
`,Rn=`<script>\r
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
`,Mn=`import { beforeUpdate, onMount } from "svelte";\r
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
`,Sn=`<script>\r
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
`,zn=`<script>\r
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
`,Hn=`<script>\r
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
`,Bn=`export default function wait(time) {\r
	return new Promise((resolve) => {\r
		setTimeout(resolve, time);\r
	});\r
}\r
`;function Fn(s){let t;return{c(){t=b("Managing a complex store can be tricky and Li Hau Tan has 3 tips for optimizing complex stores.")},l(e){t=w(e,"Managing a complex store can be tricky and Li Hau Tan has 3 tips for optimizing complex stores.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Wn(s){let t;return{c(){t=b("Let's begin by showing a demo application.")},l(e){t=w(e,"Let's begin by showing a demo application.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Gn(s){let t;return{c(){t=b("First off, we are using markUpdate.js which shows where our states are getting updated by showing them with a red border. We can see this causes a problem because changing our profile name changes the state everywhere even though the profile name doesn't really have anything to do with the todos or notifications. This is also something we can improve.")},l(e){t=w(e,"First off, we are using markUpdate.js which shows where our states are getting updated by showing them with a red border. We can see this causes a problem because changing our profile name changes the state everywhere even though the profile name doesn't really have anything to do with the todos or notifications. This is also something we can improve.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Jn(s){let t,e,n,l;return{c(){t=b("For the bug itself we can search for "),e=N("code"),n=b("$data.todos"),l=b(" and see where we are changing it, but we don't find the bug that way… 😵")},l(o){t=w(o,"For the bug itself we can search for "),e=L(o,"CODE",{});var f=V(e);n=w(f,"$data.todos"),f.forEach(u),l=w(o," and see where we are changing it, but we don't find the bug that way… 😵")},m(o,f){_(o,t,f),_(o,e,f),y(e,n),_(o,l,f)},p:Z,d(o){o&&u(t),o&&u(e),o&&u(l)}}}function Kn(s){let t;return{c(){t=b("all components")},l(e){t=w(e,"all components")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Zn(s){let t;return{c(){t=b("any way we like")},l(e){t=w(e,"any way we like")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Qn(s){let t,e,n,l,o,f;return e=new mt({props:{$$slots:{default:[Kn]},$$scope:{ctx:s}}}),l=new mt({props:{$$slots:{default:[Zn]},$$scope:{ctx:s}}}),{c(){t=b("Debugging complex stores like this can be very hard since we can change the store from "),I(e.$$.fragment),n=b(" in basically "),I(l.$$.fragment),o=b(".")},l(r){t=w(r,"Debugging complex stores like this can be very hard since we can change the store from "),C(e.$$.fragment,r),n=w(r," in basically "),C(l.$$.fragment,r),o=w(r,".")},m(r,a){_(r,t,a),P(e,r,a),_(r,n,a),P(l,r,a),_(r,o,a),f=!0},p(r,a){const d={};a&2&&(d.$$scope={dirty:a,ctx:r}),e.$set(d);const v={};a&2&&(v.$$scope={dirty:a,ctx:r}),l.$set(v)},i(r){f||(E(e.$$.fragment,r),E(l.$$.fragment,r),f=!0)},o(r){D(e.$$.fragment,r),D(l.$$.fragment,r),f=!1},d(r){r&&u(t),q(e,r),r&&u(n),q(l,r),r&&u(o)}}}function Xn(s){let t;return{c(){t=b("action")},l(e){t=w(e,"action")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function Yn(s){let t,e,n,l;return e=new mt({props:{$$slots:{default:[Xn]},$$scope:{ctx:s}}}),{c(){t=b("One way we could improve this is to introduce an "),I(e.$$.fragment),n=b(" that is the only thing that is allowed to edit the store. If we do this we can trace and find from where the action to edit the store came from.")},l(o){t=w(o,"One way we could improve this is to introduce an "),C(e.$$.fragment,o),n=w(o," that is the only thing that is allowed to edit the store. If we do this we can trace and find from where the action to edit the store came from.")},m(o,f){_(o,t,f),P(e,o,f),_(o,n,f),l=!0},p(o,f){const r={};f&2&&(r.$$scope={dirty:f,ctx:o}),e.$set(r)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){o&&u(t),q(e,o),o&&u(n)}}}function xn(s){let t;return{c(){t=b("Notification")},l(e){t=w(e,"Notification")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function to(s){let t,e,n,l;return e=new mt({props:{$$slots:{default:[xn]},$$scope:{ctx:s}}}),{c(){t=b("Our error is in the component "),I(e.$$.fragment),n=b(" where we left in some debugging code by mistake:")},l(o){t=w(o,"Our error is in the component "),C(e.$$.fragment,o),n=w(o," where we left in some debugging code by mistake:")},m(o,f){_(o,t,f),P(e,o,f),_(o,n,f),l=!0},p(o,f){const r={};f&2&&(r.$$scope={dirty:f,ctx:o}),e.$set(r)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){o&&u(t),q(e,o),o&&u(n)}}}function eo(s){let t;return{c(){t=b("Let's make a better version of our app by:")},l(e){t=w(e,"Let's make a better version of our app by:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function no(s){let t;return{c(){t=b("making smaller stores, for example user doesn't need to be in the main store")},l(e){t=w(e,"making smaller stores, for example user doesn't need to be in the main store")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function oo(s){let t;return{c(){t=b('creating derived stores for things that only require small things like "length of todos" to avoid extra update cycles')},l(e){t=w(e,'creating derived stores for things that only require small things like "length of todos" to avoid extra update cycles')},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ro(s){let t;return{c(){t=b("in one place")},l(e){t=w(e,"in one place")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function so(s){let t,e,n,l;return e=new mt({props:{$$slots:{default:[ro]},$$scope:{ctx:s}}}),{c(){t=b("putting all our functions that modify the store "),I(e.$$.fragment),n=b("!")},l(o){t=w(o,"putting all our functions that modify the store "),C(e.$$.fragment,o),n=w(o,"!")},m(o,f){_(o,t,f),P(e,o,f),_(o,n,f),l=!0},p(o,f){const r={};f&2&&(r.$$scope={dirty:f,ctx:o}),e.$set(r)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){o&&u(t),q(e,o),o&&u(n)}}}function lo(s){let t,e,n,l,o,f;return t=new Ot({props:{$$slots:{default:[no]},$$scope:{ctx:s}}}),n=new Ot({props:{$$slots:{default:[oo]},$$scope:{ctx:s}}}),o=new Ot({props:{$$slots:{default:[so]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment),e=U(),I(n.$$.fragment),l=U(),I(o.$$.fragment)},l(r){C(t.$$.fragment,r),e=T(r),C(n.$$.fragment,r),l=T(r),C(o.$$.fragment,r)},m(r,a){P(t,r,a),_(r,e,a),P(n,r,a),_(r,l,a),P(o,r,a),f=!0},p(r,a){const d={};a&2&&(d.$$scope={dirty:a,ctx:r}),t.$set(d);const v={};a&2&&(v.$$scope={dirty:a,ctx:r}),n.$set(v);const c={};a&2&&(c.$$scope={dirty:a,ctx:r}),o.$set(c)},i(r){f||(E(t.$$.fragment,r),E(n.$$.fragment,r),E(o.$$.fragment,r),f=!0)},o(r){D(t.$$.fragment,r),D(n.$$.fragment,r),D(o.$$.fragment,r),f=!1},d(r){q(t,r),r&&u(e),q(n,r),r&&u(l),q(o,r)}}}function ao(s){let t;return{c(){t=b("only the navbar updates")},l(e){t=w(e,"only the navbar updates")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function io(s){let t,e,n,l;return e=new mt({props:{$$slots:{default:[ao]},$$scope:{ctx:s}}}),{c(){t=b("After editing data2.js we can see that adding a smaller user store helped because now when we edit the user name "),I(e.$$.fragment),n=b(".")},l(o){t=w(o,"After editing data2.js we can see that adding a smaller user store helped because now when we edit the user name "),C(e.$$.fragment,o),n=w(o,".")},m(o,f){_(o,t,f),P(e,o,f),_(o,n,f),l=!0},p(o,f){const r={};f&2&&(r.$$scope={dirty:f,ctx:o}),e.$set(r)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){D(e.$$.fragment,o),l=!1},d(o){o&&u(t),q(e,o),o&&u(n)}}}function fo(s){let t;return{c(){t=b("navbar doesn't update")},l(e){t=w(e,"navbar doesn't update")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function uo(s){let t;return{c(){t=b("derived stores for the smaller .length and so data")},l(e){t=w(e,"derived stores for the smaller .length and so data")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function co(s){let t,e,n,l,o,f;return e=new mt({props:{$$slots:{default:[fo]},$$scope:{ctx:s}}}),l=new mt({props:{$$slots:{default:[uo]},$$scope:{ctx:s}}}),{c(){t=b("In the same way when toggling a todo to be done the "),I(e.$$.fragment),n=b(" because we're using "),I(l.$$.fragment),o=b(".")},l(r){t=w(r,"In the same way when toggling a todo to be done the "),C(e.$$.fragment,r),n=w(r," because we're using "),C(l.$$.fragment,r),o=w(r,".")},m(r,a){_(r,t,a),P(e,r,a),_(r,n,a),P(l,r,a),_(r,o,a),f=!0},p(r,a){const d={};a&2&&(d.$$scope={dirty:a,ctx:r}),e.$set(d);const v={};a&2&&(v.$$scope={dirty:a,ctx:r}),l.$set(v)},i(r){f||(E(e.$$.fragment,r),E(l.$$.fragment,r),f=!0)},o(r){D(e.$$.fragment,r),D(l.$$.fragment,r),f=!1},d(r){r&&u(t),q(e,r),r&&u(n),q(l,r),r&&u(o)}}}function po(s){let t;return{c(){t=b("Here are Li Hau Tan's tips:")},l(e){t=w(e,"Here are Li Hau Tan's tips:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function mo(s){let t;return{c(){t=b("Tip 1:")},l(e){t=w(e,"Tip 1:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function $o(s){let t;return{c(){t=b("If you have a complex state, avoid manipulating the writable store directly.")},l(e){t=w(e,"If you have a complex state, avoid manipulating the writable store directly.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function _o(s){let t;return{c(){t=b("Use state management libraries, such as state machines or reducers to help manage the state changes.")},l(e){t=w(e,"Use state management libraries, such as state machines or reducers to help manage the state changes.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ho(s){let t;return{c(){t=b("Tip 2:")},l(e){t=w(e,"Tip 2:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function vo(s){let t;return{c(){t=b("Have a small self-contained store.")},l(e){t=w(e,"Have a small self-contained store.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function go(s){let t;return{c(){t=b("Tip 3:")},l(e){t=w(e,"Tip 3:")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function bo(s){let t;return{c(){t=b("If you have a large store, create a derived store out of it, so your component does not have to subscribe to all changes made to the store.")},l(e){t=w(e,"If you have a large store, create a derived store out of it, so your component does not have to subscribe to all changes made to the store.")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function wo(s){let t;return{c(){t=b("Making the store immutable or proxy-based can allow us to subscribe to part of the store too!")},l(e){t=w(e,"Making the store immutable or proxy-based can allow us to subscribe to part of the store too!")},m(e,n){_(e,t,n)},d(e){e&&u(t)}}}function ko(s){let t,e,n,l,o,f,r,a,d,v,c,k,A,O,h,m,p,$,R,Q,et,vt,$t,gt,nt,bt,ot,wt,rt,kt,st,yt,lt,Ut,at,Tt,it,Et,ft,Dt,ut,Nt,dt,Lt,ct,At;return t=new z({props:{$$slots:{default:[Fn]},$$scope:{ctx:s}}}),n=new z({props:{$$slots:{default:[Wn]},$$scope:{ctx:s}}}),o=new Vt({props:{name:[{name:"App",comp:Y,raw:rn,text:"This kind of works but we have a problem. Whenever we add 3 todos, all of them disappear!"},{name:"AddTodo",comp:Y,raw:sn,text:""},{name:"EditProfile",comp:Y,raw:an,text:""},{name:"Navbar",comp:Y,raw:un,text:""},{name:"Notification",comp:Y,raw:dn,text:""},{name:"TodoList",comp:Y,raw:cn,text:""},{name:"data.js",comp:Y,raw:ln,text:""},{name:"markUpdate.js",comp:Y,raw:fn,text:""},{name:"wait.js",comp:Y,raw:pn,text:""}]}}),r=new z({props:{$$slots:{default:[Gn]},$$scope:{ctx:s}}}),d=new z({props:{$$slots:{default:[Jn]},$$scope:{ctx:s}}}),c=new z({props:{$$slots:{default:[Qn]},$$scope:{ctx:s}}}),A=new z({props:{$$slots:{default:[Yn]},$$scope:{ctx:s}}}),h=new z({props:{$$slots:{default:[to]},$$scope:{ctx:s}}}),p=new Vt({props:{name:[{name:"excerpt from Notification",comp:mn,raw:$n,text:"We found our problem!"}]}}),R=new z({props:{$$slots:{default:[eo]},$$scope:{ctx:s}}}),et=new Me({props:{$$slots:{default:[lo]},$$scope:{ctx:s}}}),$t=new Vt({props:{name:[{name:"App2",comp:x,raw:Vn,text:""},{name:"AddTodo2",comp:x,raw:jn,text:""},{name:"EditProfile2",comp:x,raw:Rn,text:""},{name:"Navbar2",comp:x,raw:Sn,text:""},{name:"Notification2",comp:x,raw:zn,text:""},{name:"TodoList2",comp:x,raw:Hn,text:""},{name:"data2.js",comp:x,raw:On,text:""},{name:"markUpdate2.js",comp:x,raw:Mn,text:""},{name:"wait2.js",comp:x,raw:Bn,text:""}]}}),nt=new z({props:{$$slots:{default:[io]},$$scope:{ctx:s}}}),ot=new z({props:{$$slots:{default:[co]},$$scope:{ctx:s}}}),rt=new z({props:{$$slots:{default:[po]},$$scope:{ctx:s}}}),st=new jt({props:{$$slots:{default:[mo]},$$scope:{ctx:s}}}),lt=new z({props:{$$slots:{default:[$o]},$$scope:{ctx:s}}}),at=new z({props:{$$slots:{default:[_o]},$$scope:{ctx:s}}}),it=new jt({props:{$$slots:{default:[ho]},$$scope:{ctx:s}}}),ft=new z({props:{$$slots:{default:[vo]},$$scope:{ctx:s}}}),ut=new jt({props:{$$slots:{default:[go]},$$scope:{ctx:s}}}),dt=new z({props:{$$slots:{default:[bo]},$$scope:{ctx:s}}}),ct=new z({props:{$$slots:{default:[wo]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment),e=U(),I(n.$$.fragment),l=U(),I(o.$$.fragment),f=U(),I(r.$$.fragment),a=U(),I(d.$$.fragment),v=U(),I(c.$$.fragment),k=U(),I(A.$$.fragment),O=U(),I(h.$$.fragment),m=U(),I(p.$$.fragment),$=U(),I(R.$$.fragment),Q=U(),I(et.$$.fragment),vt=U(),I($t.$$.fragment),gt=U(),I(nt.$$.fragment),bt=U(),I(ot.$$.fragment),wt=U(),I(rt.$$.fragment),kt=U(),I(st.$$.fragment),yt=U(),I(lt.$$.fragment),Ut=U(),I(at.$$.fragment),Tt=U(),I(it.$$.fragment),Et=U(),I(ft.$$.fragment),Dt=U(),I(ut.$$.fragment),Nt=U(),I(dt.$$.fragment),Lt=U(),I(ct.$$.fragment)},l(i){C(t.$$.fragment,i),e=T(i),C(n.$$.fragment,i),l=T(i),C(o.$$.fragment,i),f=T(i),C(r.$$.fragment,i),a=T(i),C(d.$$.fragment,i),v=T(i),C(c.$$.fragment,i),k=T(i),C(A.$$.fragment,i),O=T(i),C(h.$$.fragment,i),m=T(i),C(p.$$.fragment,i),$=T(i),C(R.$$.fragment,i),Q=T(i),C(et.$$.fragment,i),vt=T(i),C($t.$$.fragment,i),gt=T(i),C(nt.$$.fragment,i),bt=T(i),C(ot.$$.fragment,i),wt=T(i),C(rt.$$.fragment,i),kt=T(i),C(st.$$.fragment,i),yt=T(i),C(lt.$$.fragment,i),Ut=T(i),C(at.$$.fragment,i),Tt=T(i),C(it.$$.fragment,i),Et=T(i),C(ft.$$.fragment,i),Dt=T(i),C(ut.$$.fragment,i),Nt=T(i),C(dt.$$.fragment,i),Lt=T(i),C(ct.$$.fragment,i)},m(i,g){P(t,i,g),_(i,e,g),P(n,i,g),_(i,l,g),P(o,i,g),_(i,f,g),P(r,i,g),_(i,a,g),P(d,i,g),_(i,v,g),P(c,i,g),_(i,k,g),P(A,i,g),_(i,O,g),P(h,i,g),_(i,m,g),P(p,i,g),_(i,$,g),P(R,i,g),_(i,Q,g),P(et,i,g),_(i,vt,g),P($t,i,g),_(i,gt,g),P(nt,i,g),_(i,bt,g),P(ot,i,g),_(i,wt,g),P(rt,i,g),_(i,kt,g),P(st,i,g),_(i,yt,g),P(lt,i,g),_(i,Ut,g),P(at,i,g),_(i,Tt,g),P(it,i,g),_(i,Et,g),P(ft,i,g),_(i,Dt,g),P(ut,i,g),_(i,Nt,g),P(dt,i,g),_(i,Lt,g),P(ct,i,g),At=!0},p(i,g){const zt={};g&2&&(zt.$$scope={dirty:g,ctx:i}),t.$set(zt);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:i}),n.$set(Ht);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:i}),r.$set(Bt);const Ft={};g&2&&(Ft.$$scope={dirty:g,ctx:i}),d.$set(Ft);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:i}),c.$set(Wt);const Gt={};g&2&&(Gt.$$scope={dirty:g,ctx:i}),A.$set(Gt);const Jt={};g&2&&(Jt.$$scope={dirty:g,ctx:i}),h.$set(Jt);const Kt={};g&2&&(Kt.$$scope={dirty:g,ctx:i}),R.$set(Kt);const Zt={};g&2&&(Zt.$$scope={dirty:g,ctx:i}),et.$set(Zt);const Qt={};g&2&&(Qt.$$scope={dirty:g,ctx:i}),nt.$set(Qt);const Xt={};g&2&&(Xt.$$scope={dirty:g,ctx:i}),ot.$set(Xt);const Yt={};g&2&&(Yt.$$scope={dirty:g,ctx:i}),rt.$set(Yt);const xt={};g&2&&(xt.$$scope={dirty:g,ctx:i}),st.$set(xt);const te={};g&2&&(te.$$scope={dirty:g,ctx:i}),lt.$set(te);const ee={};g&2&&(ee.$$scope={dirty:g,ctx:i}),at.$set(ee);const ne={};g&2&&(ne.$$scope={dirty:g,ctx:i}),it.$set(ne);const oe={};g&2&&(oe.$$scope={dirty:g,ctx:i}),ft.$set(oe);const re={};g&2&&(re.$$scope={dirty:g,ctx:i}),ut.$set(re);const se={};g&2&&(se.$$scope={dirty:g,ctx:i}),dt.$set(se);const le={};g&2&&(le.$$scope={dirty:g,ctx:i}),ct.$set(le)},i(i){At||(E(t.$$.fragment,i),E(n.$$.fragment,i),E(o.$$.fragment,i),E(r.$$.fragment,i),E(d.$$.fragment,i),E(c.$$.fragment,i),E(A.$$.fragment,i),E(h.$$.fragment,i),E(p.$$.fragment,i),E(R.$$.fragment,i),E(et.$$.fragment,i),E($t.$$.fragment,i),E(nt.$$.fragment,i),E(ot.$$.fragment,i),E(rt.$$.fragment,i),E(st.$$.fragment,i),E(lt.$$.fragment,i),E(at.$$.fragment,i),E(it.$$.fragment,i),E(ft.$$.fragment,i),E(ut.$$.fragment,i),E(dt.$$.fragment,i),E(ct.$$.fragment,i),At=!0)},o(i){D(t.$$.fragment,i),D(n.$$.fragment,i),D(o.$$.fragment,i),D(r.$$.fragment,i),D(d.$$.fragment,i),D(c.$$.fragment,i),D(A.$$.fragment,i),D(h.$$.fragment,i),D(p.$$.fragment,i),D(R.$$.fragment,i),D(et.$$.fragment,i),D($t.$$.fragment,i),D(nt.$$.fragment,i),D(ot.$$.fragment,i),D(rt.$$.fragment,i),D(st.$$.fragment,i),D(lt.$$.fragment,i),D(at.$$.fragment,i),D(it.$$.fragment,i),D(ft.$$.fragment,i),D(ut.$$.fragment,i),D(dt.$$.fragment,i),D(ct.$$.fragment,i),At=!1},d(i){q(t,i),i&&u(e),q(n,i),i&&u(l),q(o,i),i&&u(f),q(r,i),i&&u(a),q(d,i),i&&u(v),q(c,i),i&&u(k),q(A,i),i&&u(O),q(h,i),i&&u(m),q(p,i),i&&u($),q(R,i),i&&u(Q),q(et,i),i&&u(vt),q($t,i),i&&u(gt),q(nt,i),i&&u(bt),q(ot,i),i&&u(wt),q(rt,i),i&&u(kt),q(st,i),i&&u(yt),q(lt,i),i&&u(Ut),q(at,i),i&&u(Tt),q(it,i),i&&u(Et),q(ft,i),i&&u(Dt),q(ut,i),i&&u(Nt),q(dt,i),i&&u(Lt),q(ct,i)}}}function yo(s){let t,e;const n=[s[0],Ne];let l={$$slots:{default:[ko]},$$scope:{ctx:s}};for(let o=0;o<n.length;o+=1)l=Rt(l,n[o]);return t=new Re({props:l}),{c(){I(t.$$.fragment)},l(o){C(t.$$.fragment,o)},m(o,f){P(t,o,f),e=!0},p(o,[f]){const r=f&1?Oe(n,[f&1&&ae(o[0]),f&0&&ae(Ne)]):{};f&2&&(r.$$scope={dirty:f,ctx:o}),t.$set(r)},i(o){e||(E(t.$$.fragment,o),e=!0)},o(o){D(t.$$.fragment,o),e=!1},d(o){q(t,o)}}}const Ne={title:"3 tips for managing a complex store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function Uo(s,t,e){return s.$$set=n=>{e(0,t=Rt(Rt({},t),ie(n)))},t=ie(t),[t]}class Po extends G{constructor(t){super(),J(this,t,Uo,yo,K,{})}}export{Po as default,Ne as metadata};
