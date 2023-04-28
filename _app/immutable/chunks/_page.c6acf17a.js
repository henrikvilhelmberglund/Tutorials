import{S as R,i as S,s as D,C as pt,k as A,a as E,e as et,l as H,m as M,h as p,c as L,b as u,R as z,E as ft,F as ut,G as ct,g,d as h,V as vt,q as d,r as _,p as k,n as X,D as V,u as at,y as w,z as y,A as b,B as x,H as T,ac as mt,J,K as $t,L as nt,M as ot}from"./index.5815ca79.js";import{M as dt,P as j}from"./mdsvex-layout-notes.7536afaf.js";import{S as B}from"./ShowMany.2af9ac15.js";import{S as P}from"./Strong.b8abec16.js";function rt(l){let t,e;return{c(){t=A("div"),e=d(l[0]),this.h()},l(n){t=H(n,"DIV",{style:!0,class:!0});var r=M(t);e=_(r,l[0]),r.forEach(p),this.h()},h(){k(t,"top",l[3]+"px"),k(t,"left",l[2]+"px"),X(t,"class","uno-htfif7")},m(n,r){u(n,t,r),V(t,e)},p(n,r){r&1&&at(e,n[0]),r&8&&k(t,"top",n[3]+"px"),r&4&&k(t,"left",n[2]+"px")},d(n){n&&p(t)}}}function _t(l){let t,e,n,r,o,a;const s=l[8].default,m=pt(s,l,l[7],null);let c=l[1]&&rt(l);return{c(){t=A("div"),m&&m.c(),e=E(),c&&c.c(),n=et()},l(f){t=H(f,"DIV",{});var $=M(t);m&&m.l($),$.forEach(p),e=L(f),c&&c.l(f),n=et()},m(f,$){u(f,t,$),m&&m.m(t,null),u(f,e,$),c&&c.m(f,$),u(f,n,$),r=!0,o||(a=[z(t,"mouseover",l[4]),z(t,"mouseleave",l[6]),z(t,"mousemove",l[5])],o=!0)},p(f,[$]){m&&m.p&&(!r||$&128)&&ft(m,s,f,f[7],r?ct(s,f[7],$,null):ut(f[7]),null),f[1]?c?c.p(f,$):(c=rt(f),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null)},i(f){r||(g(m,f),r=!0)},o(f){h(m,f),r=!1},d(f){f&&p(t),m&&m.d(f),f&&p(e),c&&c.d(f),f&&p(n),o=!1,vt(a)}}}let q=5;function gt(l,t,e){let{$$slots:n={},$$scope:r}=t,{title:o=""}=t,a=!1,s,m;function c(){e(1,a=!0),e(2,s=event.pageX+q),e(3,m=event.pageY+q)}function f(){e(2,s=event.pageX+q),e(3,m=event.pageY+q)}function $(){e(1,a=!1)}return l.$$set=C=>{"title"in C&&e(0,o=C.title),"$$scope"in C&&e(7,r=C.$$scope)},[o,a,s,m,c,f,$,r,n]}class ht extends R{constructor(t){super(),S(this,t,gt,_t,D,{title:0})}}function wt(l){let t,e;return{c(){t=A("h1"),e=d("Hello world!")},l(n){t=H(n,"H1",{});var r=M(t);e=_(r,"Hello world!"),r.forEach(p)},m(n,r){u(n,t,r),V(t,e)},p:T,d(n){n&&p(t)}}}function yt(l){let t,e,n,r;return t=new ht({props:{title:"This is a greeting",$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){w(t.$$.fragment),e=E(),n=A("div"),this.h()},l(o){y(t.$$.fragment,o),e=L(o),n=H(o,"DIV",{class:!0}),M(n).forEach(p),this.h()},h(){X(n,"class","uno-s7gdv0")},m(o,a){b(t,o,a),u(o,e,a),u(o,n,a),r=!0},p(o,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:o}),t.$set(s)},i(o){r||(g(t.$$.fragment,o),r=!0)},o(o){h(t.$$.fragment,o),r=!1},d(o){x(t,o),o&&p(e),o&&p(n)}}}class st extends R{constructor(t){super(),S(this,t,null,yt,D,{})}}const bt=`<script>\r
	import Tooltip from "./Tooltip.svelte";\r
<\/script>\r
\r
<Tooltip title="This is a greeting">\r
	<h1>Hello world!</h1>\r
</Tooltip>\r
\r
<!-- adding some room to display the tooltip -->\r
<div class="pt-12" />\r
`;function xt(l){let t,e,n=5;function r(s){t=document.createElement("div"),t.textContent=l.getAttribute("title"),t.classList="my-tooltip",t.style=`top: ${s.pageY+n}px; left: ${s.pageX+n}px;`,document.body.appendChild(t),e=l.getAttribute("title"),l.removeAttribute("title")}function o(){t.style.left=`${event.pageX+n}px`,t.style.top=`${event.pageY+n}px`}function a(){document.body.removeChild(t),l.setAttribute("title",e)}return l.addEventListener("mouseover",r),l.addEventListener("mouseleave",a),l.addEventListener("mousemove",o),{destroy(){l.removeEventListener("mouseover",r),l.removeEventListener("mouseleave",a),l.removeEventListener("mousemove",o)}}}function Et(l){let t,e,n,r,o,a;return{c(){t=A("h1"),e=d("Hello world!"),n=E(),r=A("div"),this.h()},l(s){t=H(s,"H1",{title:!0});var m=M(t);e=_(m,"Hello world!"),m.forEach(p),n=L(s),r=H(s,"DIV",{class:!0}),M(r).forEach(p),this.h()},h(){X(t,"title","This is a greeting"),X(r,"class","uno-b523mx")},m(s,m){u(s,t,m),V(t,e),u(s,n,m),u(s,r,m),o||(a=mt(xt.call(null,t)),o=!0)},p:T,i:T,o:T,d(s){s&&p(t),s&&p(n),s&&p(r),o=!1,a()}}}class lt extends R{constructor(t){super(),S(this,t,null,Et,D,{})}}const Lt=`<script>\r
	import { tooltip } from "./tooltip.js";\r
<\/script>\r
\r
<h1 title="This is a greeting" use:tooltip>Hello world!</h1>\r
\r
<!-- adding some room to display the tooltip -->\r
<div class="pt-12" />\r
\r
<!-- no idea how to add the UnoCSS classes in the .js file itself -->\r
<style>\r
	:global(.my-tooltip) {\r
		@apply "border-1 shadow-2xl" absolute rounded-lg border-solid border-slate-300 bg-white p-4 shadow-lg;\r
	}\r
</style>\r
`;function Tt(l){let t,e;return{c(){t=A("div"),e=d(l[0]),this.h()},l(n){t=H(n,"DIV",{style:!0,class:!0});var r=M(t);e=_(r,l[0]),r.forEach(p),this.h()},h(){k(t,"top",l[2]+5+"px"),k(t,"left",l[1]+5+"px"),X(t,"class","svelte-1hrbito")},m(n,r){u(n,t,r),V(t,e)},p(n,[r]){r&1&&at(e,n[0]),r&4&&k(t,"top",n[2]+5+"px"),r&2&&k(t,"left",n[1]+5+"px")},i:T,o:T,d(n){n&&p(t)}}}function At(l,t,e){let{title:n}=t,{x:r}=t,{y:o}=t;return l.$$set=a=>{"title"in a&&e(0,n=a.title),"x"in a&&e(1,r=a.x),"y"in a&&e(2,o=a.y)},[n,r,o]}class Ht extends R{constructor(t){super(),S(this,t,At,Tt,D,{title:0,x:1,y:2})}}function Mt(l){let t,e;function n(a){t=l.getAttribute("title"),l.removeAttribute("title"),e=new Ht({props:{title:t,x:a.pageX,y:a.pageY},target:document.body})}function r(a){e.$set({x:a.pageX,y:a.pageY})}function o(){e.$destroy(),l.setAttribute("title",t)}return l.addEventListener("mouseover",n),l.addEventListener("mouseleave",o),l.addEventListener("mousemove",r),{destroy(){l.removeEventListener("mouseover",n),l.removeEventListener("mouseleave",o),l.removeEventListener("mousemove",r)}}}function Ct(l){let t,e,n,r,o,a;return{c(){t=A("h1"),e=d("Hello world!"),n=E(),r=A("div"),this.h()},l(s){t=H(s,"H1",{title:!0});var m=M(t);e=_(m,"Hello world!"),m.forEach(p),n=L(s),r=H(s,"DIV",{class:!0}),M(r).forEach(p),this.h()},h(){X(t,"title","This is a greeting"),X(r,"class","uno-ovohke")},m(s,m){u(s,t,m),V(t,e),u(s,n,m),u(s,r,m),o||(a=mt(Mt.call(null,t)),o=!0)},p:T,i:T,o:T,d(s){s&&p(t),s&&p(n),s&&p(r),o=!1,a()}}}class G extends R{constructor(t){super(),S(this,t,null,Ct,D,{})}}const Ot=`<script>\r
	import { tooltip } from "./tooltip2.js";\r
<\/script>\r
\r
<h1 title="This is a greeting" use:tooltip>Hello world!</h1>\r
\r
<!-- adding some room to display the tooltip -->\r
<div class="pt-12" />\r
`;function kt(l){let t,e;return{c(){t=A("h1"),e=d("Hover me"),this.h()},l(n){t=H(n,"H1",{title:!0});var r=M(t);e=_(r,"Hover me"),r.forEach(p),this.h()},h(){X(t,"title","this is a tooltip")},m(n,r){u(n,t,r),V(t,e)},p:T,i:T,o:T,d(n){n&&p(t)}}}class Xt extends R{constructor(t){super(),S(this,t,null,kt,D,{})}}const Yt='<h1 title="this is a tooltip">Hover me</h1>',Ft=`<script>\r
	export let title = "";\r
\r
	let isHovered = false;\r
	let x;\r
	let y;\r
	let offset = 5;\r
\r
	function mouseOver() {\r
		isHovered = true;\r
		x = event.pageX + offset;\r
		y = event.pageY + offset;\r
	}\r
	function mouseMove() {\r
		x = event.pageX + offset;\r
		y = event.pageY + offset;\r
	}\r
	function mouseLeave() {\r
		isHovered = false;\r
	}\r
<\/script>\r
\r
<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>\r
	<slot />\r
</div>\r
\r
{#if isHovered}\r
	<div\r
		style="top: {y}px; left: {x}px;"\r
		class="shadow-lg border-1 absolute rounded-lg border-solid border-slate-300 bg-white p-4 shadow-2xl">\r
		{title}\r
	</div>\r
{/if}\r
\r
<style>\r
</style>\r
`,Rt=`export function tooltip(element) {\r
  let div;\r
  let title;\r
\r
	let offset = 5;\r
	function mouseOver(event) {\r
		div = document.createElement("div");\r
		div.textContent = element.getAttribute("title");\r
		div.classList = "my-tooltip";\r
		div.style = \`top: \${event.pageY + offset}px; left: \${event.pageX + offset}px;\`;\r
    document.body.appendChild(div);\r
    title = element.getAttribute('title');\r
		element.removeAttribute('title');\r
	}\r
	function mouseMove() {\r
		div.style.left = \`\${event.pageX + offset}px\`;\r
		div.style.top = \`\${event.pageY + offset}px\`;\r
	}\r
	function mouseLeave() {\r
    document.body.removeChild(div);\r
    element.setAttribute('title', title);\r
	}\r
\r
	element.addEventListener("mouseover", mouseOver);\r
	element.addEventListener("mouseleave", mouseLeave);\r
	element.addEventListener("mousemove", mouseMove);\r
\r
	return {\r
		destroy() {\r
			element.removeEventListener("mouseover", mouseOver);\r
			element.removeEventListener("mouseleave", mouseLeave);\r
			element.removeEventListener("mousemove", mouseMove);\r
		},\r
	};\r
}\r
`,St=`<script>\r
	export let title;\r
	export let x;\r
	export let y;\r
<\/script>\r
\r
<div\r
	style="\r
		top: {y + 5}px;\r
		left: {x + 5}px;">\r
	{title}\r
</div>\r
\r
<style>\r
	div {\r
		border: 1px solid #ddd;\r
		box-shadow: 1px 1px 1px #ddd;\r
		background: white;\r
		border-radius: 4px;\r
		padding: 4px;\r
		position: absolute;\r
	}\r
</style>\r
`,Dt=`import Tooltip from "./TooltipFromAction.svelte";\r
\r
// from https://svelte.dev/repl/dd6754a2ad0547c5b1c1ea37c0293fef?version=3.58.0\r
export function tooltip(element) {\r
	let title;\r
	let tooltipComponent;\r
	function mouseOver(event) {\r
		// NOTE: remove the \`title\` attribute, to prevent showing the default browser tooltip\r
		// remember to set it back on \`mouseleave\`\r
		title = element.getAttribute("title");\r
		element.removeAttribute("title");\r
\r
		tooltipComponent = new Tooltip({\r
			props: {\r
				title: title,\r
				x: event.pageX,\r
				y: event.pageY,\r
			},\r
			target: document.body,\r
		});\r
	}\r
	function mouseMove(event) {\r
		tooltipComponent.$set({\r
			x: event.pageX,\r
			y: event.pageY,\r
		});\r
	}\r
	function mouseLeave() {\r
		tooltipComponent.$destroy();\r
		// NOTE: restore the \`title\` attribute\r
		element.setAttribute("title", title);\r
	}\r
\r
	element.addEventListener("mouseover", mouseOver);\r
	element.addEventListener("mouseleave", mouseLeave);\r
	element.addEventListener("mousemove", mouseMove);\r
\r
	return {\r
		destroy() {\r
			element.removeEventListener("mouseover", mouseOver);\r
			element.removeEventListener("mouseleave", mouseLeave);\r
			element.removeEventListener("mousemove", mouseMove);\r
		},\r
	};\r
}\r
`;function Vt(l){let t;return{c(){t=d("use:tooltip")},l(e){t=_(e,"use:tooltip")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function jt(l){let t,e,n,r;return e=new P({props:{$$slots:{default:[Vt]},$$scope:{ctx:l}}}),{c(){t=d("This is an example of "),w(e.$$.fragment),n=d(" which changes the tooltip displayed when hovering over an element.")},l(o){t=_(o,"This is an example of "),y(e.$$.fragment,o),n=_(o," which changes the tooltip displayed when hovering over an element.")},m(o,a){u(o,t,a),b(e,o,a),u(o,n,a),r=!0},p(o,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:o}),e.$set(s)},i(o){r||(g(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){o&&p(t),x(e,o),o&&p(n)}}}function It(l){let t;return{c(){t=d('With HTML you can have a tooltip with a title="" attribute on an element. For example:')},l(e){t=_(e,'With HTML you can have a tooltip with a title="" attribute on an element. For example:')},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function Nt(l){let t;return{c(){t=d("component")},l(e){t=_(e,"component")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function Wt(l){let t;return{c(){t=d("action")},l(e){t=_(e,"action")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function Bt(l){let t,e,n,r,o,a;return e=new P({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),r=new P({props:{$$slots:{default:[Wt]},$$scope:{ctx:l}}}),{c(){t=d("But we would like something more fancy. First let's write it as a "),w(e.$$.fragment),n=d(" and then we'll refactor it to an "),w(r.$$.fragment),o=d(".")},l(s){t=_(s,"But we would like something more fancy. First let's write it as a "),y(e.$$.fragment,s),n=_(s," and then we'll refactor it to an "),y(r.$$.fragment,s),o=_(s,".")},m(s,m){u(s,t,m),b(e,s,m),u(s,n,m),b(r,s,m),u(s,o,m),a=!0},p(s,m){const c={};m&2&&(c.$$scope={dirty:m,ctx:s}),e.$set(c);const f={};m&2&&(f.$$scope={dirty:m,ctx:s}),r.$set(f)},i(s){a||(g(e.$$.fragment,s),g(r.$$.fragment,s),a=!0)},o(s){h(e.$$.fragment,s),h(r.$$.fragment,s),a=!1},d(s){s&&p(t),x(e,s),s&&p(n),x(r,s),s&&p(o)}}}function qt(l){let t;return{c(){t=d("Now let's rewrite it as an action.")},l(e){t=_(e,"Now let's rewrite it as an action.")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function Pt(l){let t;return{c(){t=d("both")},l(e){t=_(e,"both")},m(e,n){u(e,t,n)},d(e){e&&p(t)}}}function zt(l){let t,e,n,r;return e=new P({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),{c(){t=d("There is also a third way, we can use "),w(e.$$.fragment),n=d(" a component and an action!")},l(o){t=_(o,"There is also a third way, we can use "),y(e.$$.fragment,o),n=_(o," a component and an action!")},m(o,a){u(o,t,a),b(e,o,a),u(o,n,a),r=!0},p(o,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:o}),e.$set(s)},i(o){r||(g(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){o&&p(t),x(e,o),o&&p(n)}}}function Gt(l){let t,e,n,r,o,a,s,m,c,f,$,C,Y,I,O,N,F,W;return t=new j({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),n=new j({props:{$$slots:{default:[It]},$$scope:{ctx:l}}}),o=new B({props:{name:[{name:"ElementWithTooltip",comp:Xt,raw:Yt,text:""}]}}),s=new j({props:{$$slots:{default:[Bt]},$$scope:{ctx:l}}}),c=new B({props:{name:[{name:"App2",comp:st,raw:bt,text:"This is our Tooltip component!"},{name:"Tooltip",comp:st,raw:Ft,text:""}]}}),$=new j({props:{$$slots:{default:[qt]},$$scope:{ctx:l}}}),Y=new B({props:{name:[{name:"App3",comp:lt,raw:Lt,text:"This is our tooltip action!"},{name:"tooltip.js",comp:lt,raw:Rt,text:""}]}}),O=new j({props:{$$slots:{default:[zt]},$$scope:{ctx:l}}}),F=new B({props:{name:[{name:"App4",comp:G,raw:Ot,text:"This is our component and action combined!"},{name:"TooltipFromAction",comp:G,raw:St,text:""},{name:"tooltip2.js",comp:G,raw:Dt,text:""}]}}),{c(){w(t.$$.fragment),e=E(),w(n.$$.fragment),r=E(),w(o.$$.fragment),a=E(),w(s.$$.fragment),m=E(),w(c.$$.fragment),f=E(),w($.$$.fragment),C=E(),w(Y.$$.fragment),I=E(),w(O.$$.fragment),N=E(),w(F.$$.fragment)},l(i){y(t.$$.fragment,i),e=L(i),y(n.$$.fragment,i),r=L(i),y(o.$$.fragment,i),a=L(i),y(s.$$.fragment,i),m=L(i),y(c.$$.fragment,i),f=L(i),y($.$$.fragment,i),C=L(i),y(Y.$$.fragment,i),I=L(i),y(O.$$.fragment,i),N=L(i),y(F.$$.fragment,i)},m(i,v){b(t,i,v),u(i,e,v),b(n,i,v),u(i,r,v),b(o,i,v),u(i,a,v),b(s,i,v),u(i,m,v),b(c,i,v),u(i,f,v),b($,i,v),u(i,C,v),b(Y,i,v),u(i,I,v),b(O,i,v),u(i,N,v),b(F,i,v),W=!0},p(i,v){const K={};v&2&&(K.$$scope={dirty:v,ctx:i}),t.$set(K);const U={};v&2&&(U.$$scope={dirty:v,ctx:i}),n.$set(U);const Z={};v&2&&(Z.$$scope={dirty:v,ctx:i}),s.$set(Z);const Q={};v&2&&(Q.$$scope={dirty:v,ctx:i}),$.$set(Q);const tt={};v&2&&(tt.$$scope={dirty:v,ctx:i}),O.$set(tt)},i(i){W||(g(t.$$.fragment,i),g(n.$$.fragment,i),g(o.$$.fragment,i),g(s.$$.fragment,i),g(c.$$.fragment,i),g($.$$.fragment,i),g(Y.$$.fragment,i),g(O.$$.fragment,i),g(F.$$.fragment,i),W=!0)},o(i){h(t.$$.fragment,i),h(n.$$.fragment,i),h(o.$$.fragment,i),h(s.$$.fragment,i),h(c.$$.fragment,i),h($.$$.fragment,i),h(Y.$$.fragment,i),h(O.$$.fragment,i),h(F.$$.fragment,i),W=!1},d(i){x(t,i),i&&p(e),x(n,i),i&&p(r),x(o,i),i&&p(a),x(s,i),i&&p(m),x(c,i),i&&p(f),x($,i),i&&p(C),x(Y,i),i&&p(I),x(O,i),i&&p(N),x(F,i)}}}function Jt(l){let t,e;const n=[l[0],it];let r={$$slots:{default:[Gt]},$$scope:{ctx:l}};for(let o=0;o<n.length;o+=1)r=J(r,n[o]);return t=new dt({props:r}),{c(){w(t.$$.fragment)},l(o){y(t.$$.fragment,o)},m(o,a){b(t,o,a),e=!0},p(o,[a]){const s=a&1?$t(n,[a&1&&nt(o[0]),a&0&&nt(it)]):{};a&2&&(s.$$scope={dirty:a,ctx:o}),t.$set(s)},i(o){e||(g(t.$$.fragment,o),e=!0)},o(o){h(t.$$.fragment,o),e=!1},d(o){x(t,o)}}}const it={title:"use:tooltip",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function Kt(l,t,e){return l.$$set=n=>{e(0,t=J(J({},t),ot(n)))},t=ot(t),[t]}class ee extends R{constructor(t){super(),S(this,t,Kt,Jt,D,{})}}export{ee as default,it as metadata};
