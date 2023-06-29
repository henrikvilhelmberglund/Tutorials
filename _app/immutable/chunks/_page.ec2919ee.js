import{s as F,r as ut,f as A,a as L,e as et,g as C,h as j,d as m,c as E,i as u,X as z,w as ft,x as ct,y as vt,H as $t,l as y,m as b,k,j as O,v as at,n as mt,u as P,z as T,ae as pt,C as Z,D as nt}from"./scheduler.a7cd560e.js";import{S as R,i as S,a as d,t as _,b as g,d as h,m as w,e as x}from"./index.396264e7.js";import{g as dt,a as ot}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as _t,P as D}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as W}from"./ShowMany.db7be1f3.js";import{S as B}from"./Strong.097578ae.js";function rt(s){let t,e;return{c(){t=A("div"),e=y(s[0]),this.h()},l(n){t=C(n,"DIV",{style:!0,class:!0});var r=j(t);e=b(r,s[0]),r.forEach(m),this.h()},h(){k(t,"top",s[3]+"px"),k(t,"left",s[2]+"px"),O(t,"class","spu-eaa4dd")},m(n,r){u(n,t,r),at(t,e)},p(n,r){r&1&&mt(e,n[0]),r&8&&k(t,"top",n[3]+"px"),r&4&&k(t,"left",n[2]+"px")},d(n){n&&m(t)}}}function gt(s){let t,e,n,r,o,a;const l=s[8].default,p=ut(l,s,s[7],null);let c=s[1]&&rt(s);return{c(){t=A("div"),p&&p.c(),e=L(),c&&c.c(),n=et()},l(f){t=C(f,"DIV",{});var $=j(t);p&&p.l($),$.forEach(m),e=E(f),c&&c.l(f),n=et()},m(f,$){u(f,t,$),p&&p.m(t,null),u(f,e,$),c&&c.m(f,$),u(f,n,$),r=!0,o||(a=[z(t,"mouseover",s[4]),z(t,"mouseleave",s[6]),z(t,"mousemove",s[5])],o=!0)},p(f,[$]){p&&p.p&&(!r||$&128)&&ft(p,l,f,f[7],r?vt(l,f[7],$,null):ct(f[7]),null),f[1]?c?c.p(f,$):(c=rt(f),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null)},i(f){r||(d(p,f),r=!0)},o(f){_(p,f),r=!1},d(f){f&&(m(t),m(e),m(n)),p&&p.d(f),c&&c.d(f),o=!1,$t(a)}}}let q=5;function ht(s,t,e){let{$$slots:n={},$$scope:r}=t,{title:o=""}=t,a=!1,l,p;function c(){e(1,a=!0),e(2,l=event.pageX+q),e(3,p=event.pageY+q)}function f(){e(2,l=event.pageX+q),e(3,p=event.pageY+q)}function $(){e(1,a=!1)}return s.$$set=H=>{"title"in H&&e(0,o=H.title),"$$scope"in H&&e(7,r=H.$$scope)},[o,a,l,p,c,f,$,r,n]}class wt extends R{constructor(t){super(),S(this,t,ht,gt,F,{title:0})}}function xt(s){let t,e="Hello world!";return{c(){t=A("h1"),t.textContent=e},l(n){t=C(n,"H1",{["data-svelte-h"]:!0}),P(t)!=="svelte-1vv3a6r"&&(t.textContent=e)},m(n,r){u(n,t,r)},p:T,d(n){n&&m(t)}}}function yt(s){let t,e,n,r;return t=new wt({props:{title:"This is a greeting",$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){g(t.$$.fragment),e=L(),n=A("div"),this.h()},l(o){h(t.$$.fragment,o),e=E(o),n=C(o,"DIV",{class:!0}),j(n).forEach(m),this.h()},h(){O(n,"class","spu-uwrmfm")},m(o,a){w(t,o,a),u(o,e,a),u(o,n,a),r=!0},p(o,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){r||(d(t.$$.fragment,o),r=!0)},o(o){_(t.$$.fragment,o),r=!1},d(o){o&&(m(e),m(n)),x(t,o)}}}class st extends R{constructor(t){super(),S(this,t,null,yt,F,{})}}const bt=`<script>\r
	import Tooltip from "./Tooltip.svelte";\r
<\/script>\r
\r
<Tooltip title="This is a greeting">\r
	<h1>Hello world!</h1>\r
</Tooltip>\r
\r
<!-- adding some room to display the tooltip -->\r
<div class="pt-12" />\r
`;function Lt(s){let t,e,n=5;function r(l){t=document.createElement("div"),t.textContent=s.getAttribute("title"),t.classList="my-tooltip",t.style=`top: ${l.pageY+n}px; left: ${l.pageX+n}px;`,document.body.appendChild(t),e=s.getAttribute("title"),s.removeAttribute("title")}function o(){t.style.left=`${event.pageX+n}px`,t.style.top=`${event.pageY+n}px`}function a(){document.body.removeChild(t),s.setAttribute("title",e)}return s.addEventListener("mouseover",r),s.addEventListener("mouseleave",a),s.addEventListener("mousemove",o),{destroy(){s.removeEventListener("mouseover",r),s.removeEventListener("mouseleave",a),s.removeEventListener("mousemove",o)}}}function Et(s){let t,e="Hello world!",n,r,o,a;return{c(){t=A("h1"),t.textContent=e,n=L(),r=A("div"),this.h()},l(l){t=C(l,"H1",{title:!0,["data-svelte-h"]:!0}),P(t)!=="svelte-1kpikqa"&&(t.textContent=e),n=E(l),r=C(l,"DIV",{class:!0}),j(r).forEach(m),this.h()},h(){O(t,"title","This is a greeting"),O(r,"class","spu-0hb1u7")},m(l,p){u(l,t,p),u(l,n,p),u(l,r,p),o||(a=pt(Lt.call(null,t)),o=!0)},p:T,i:T,o:T,d(l){l&&(m(t),m(n),m(r)),o=!1,a()}}}class lt extends R{constructor(t){super(),S(this,t,null,Et,F,{})}}const Tt=`<script>\r
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
`;function At(s){let t,e;return{c(){t=A("div"),e=y(s[0]),this.h()},l(n){t=C(n,"DIV",{style:!0,class:!0});var r=j(t);e=b(r,s[0]),r.forEach(m),this.h()},h(){k(t,"top",s[2]+5+"px"),k(t,"left",s[1]+5+"px"),O(t,"class","svelte-1hrbito")},m(n,r){u(n,t,r),at(t,e)},p(n,[r]){r&1&&mt(e,n[0]),r&4&&k(t,"top",n[2]+5+"px"),r&2&&k(t,"left",n[1]+5+"px")},i:T,o:T,d(n){n&&m(t)}}}function Ct(s,t,e){let{title:n}=t,{x:r}=t,{y:o}=t;return s.$$set=a=>{"title"in a&&e(0,n=a.title),"x"in a&&e(1,r=a.x),"y"in a&&e(2,o=a.y)},[n,r,o]}class Ht extends R{constructor(t){super(),S(this,t,Ct,At,F,{title:0,x:1,y:2})}}function Mt(s){let t,e;function n(a){t=s.getAttribute("title"),s.removeAttribute("title"),e=new Ht({props:{title:t,x:a.pageX,y:a.pageY},target:document.body})}function r(a){e.$set({x:a.pageX,y:a.pageY})}function o(){e.$destroy(),s.setAttribute("title",t)}return s.addEventListener("mouseover",n),s.addEventListener("mouseleave",o),s.addEventListener("mousemove",r),{destroy(){s.removeEventListener("mouseover",n),s.removeEventListener("mouseleave",o),s.removeEventListener("mousemove",r)}}}function kt(s){let t,e="Hello world!",n,r,o,a;return{c(){t=A("h1"),t.textContent=e,n=L(),r=A("div"),this.h()},l(l){t=C(l,"H1",{title:!0,["data-svelte-h"]:!0}),P(t)!=="svelte-1kpikqa"&&(t.textContent=e),n=E(l),r=C(l,"DIV",{class:!0}),j(r).forEach(m),this.h()},h(){O(t,"title","This is a greeting"),O(r,"class","spu-d1rgaw")},m(l,p){u(l,t,p),u(l,n,p),u(l,r,p),o||(a=pt(Mt.call(null,t)),o=!0)},p:T,i:T,o:T,d(l){l&&(m(t),m(n),m(r)),o=!1,a()}}}class U extends R{constructor(t){super(),S(this,t,null,kt,F,{})}}const Ot=`<script>\r
	import { tooltip } from "./tooltip2.js";\r
<\/script>\r
\r
<h1 title="This is a greeting" use:tooltip>Hello world!</h1>\r
\r
<!-- adding some room to display the tooltip -->\r
<div class="pt-12" />\r
`;function Xt(s){let t,e="Hover me";return{c(){t=A("h1"),t.textContent=e,this.h()},l(n){t=C(n,"H1",{title:!0,["data-svelte-h"]:!0}),P(t)!=="svelte-eu7ga1"&&(t.textContent=e),this.h()},h(){O(t,"title","this is a tooltip")},m(n,r){u(n,t,r)},p:T,i:T,o:T,d(n){n&&m(t)}}}class Yt extends R{constructor(t){super(),S(this,t,null,Xt,F,{})}}const Ft='<h1 title="this is a tooltip">Hover me</h1>',Rt=`<script>\r
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
`,St=`export function tooltip(element) {\r
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
`,jt=`<script>\r
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
`;function It(s){let t;return{c(){t=y("use:tooltip")},l(e){t=b(e,"use:tooltip")},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function Vt(s){let t,e,n,r;return e=new B({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){t=y("This is an example of "),g(e.$$.fragment),n=y(" which changes the tooltip displayed when hovering over an element.")},l(o){t=b(o,"This is an example of "),h(e.$$.fragment,o),n=b(o," which changes the tooltip displayed when hovering over an element.")},m(o,a){u(o,t,a),w(e,o,a),u(o,n,a),r=!0},p(o,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)},i(o){r||(d(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){o&&(m(t),m(n)),x(e,o)}}}function Nt(s){let t;return{c(){t=y('With HTML you can have a tooltip with a title="" attribute on an element. For example:')},l(e){t=b(e,'With HTML you can have a tooltip with a title="" attribute on an element. For example:')},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function Wt(s){let t;return{c(){t=y("component")},l(e){t=b(e,"component")},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function qt(s){let t;return{c(){t=y("action")},l(e){t=b(e,"action")},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function Bt(s){let t,e,n,r,o,a;return e=new B({props:{$$slots:{default:[Wt]},$$scope:{ctx:s}}}),r=new B({props:{$$slots:{default:[qt]},$$scope:{ctx:s}}}),{c(){t=y("But we would like something more fancy. First let's write it as a "),g(e.$$.fragment),n=y(" and then we'll refactor it to an "),g(r.$$.fragment),o=y(".")},l(l){t=b(l,"But we would like something more fancy. First let's write it as a "),h(e.$$.fragment,l),n=b(l," and then we'll refactor it to an "),h(r.$$.fragment,l),o=b(l,".")},m(l,p){u(l,t,p),w(e,l,p),u(l,n,p),w(r,l,p),u(l,o,p),a=!0},p(l,p){const c={};p&2&&(c.$$scope={dirty:p,ctx:l}),e.$set(c);const f={};p&2&&(f.$$scope={dirty:p,ctx:l}),r.$set(f)},i(l){a||(d(e.$$.fragment,l),d(r.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(r.$$.fragment,l),a=!1},d(l){l&&(m(t),m(n),m(o)),x(e,l),x(r,l)}}}function Pt(s){let t;return{c(){t=y("Now let's rewrite it as an action.")},l(e){t=b(e,"Now let's rewrite it as an action.")},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function zt(s){let t;return{c(){t=y("both")},l(e){t=b(e,"both")},m(e,n){u(e,t,n)},d(e){e&&m(t)}}}function Ut(s){let t,e,n,r;return e=new B({props:{$$slots:{default:[zt]},$$scope:{ctx:s}}}),{c(){t=y("There is also a third way, we can use "),g(e.$$.fragment),n=y(" a component and an action!")},l(o){t=b(o,"There is also a third way, we can use "),h(e.$$.fragment,o),n=b(o," a component and an action!")},m(o,a){u(o,t,a),w(e,o,a),u(o,n,a),r=!0},p(o,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)},i(o){r||(d(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){o&&(m(t),m(n)),x(e,o)}}}function Zt(s){let t,e,n,r,o,a,l,p,c,f,$,H,X,I,M,V,Y,N;return t=new D({props:{$$slots:{default:[Vt]},$$scope:{ctx:s}}}),n=new D({props:{$$slots:{default:[Nt]},$$scope:{ctx:s}}}),o=new W({props:{name:[{name:"ElementWithTooltip",comp:Yt,raw:Ft,text:""}]}}),l=new D({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),c=new W({props:{name:[{name:"App2",comp:st,raw:bt,text:"This is our Tooltip component!"},{name:"Tooltip",comp:st,raw:Rt,text:""}]}}),$=new D({props:{$$slots:{default:[Pt]},$$scope:{ctx:s}}}),X=new W({props:{name:[{name:"App3",comp:lt,raw:Tt,text:"This is our tooltip action!"},{name:"tooltip.js",comp:lt,raw:St,text:""}]}}),M=new D({props:{$$slots:{default:[Ut]},$$scope:{ctx:s}}}),Y=new W({props:{name:[{name:"App4",comp:U,raw:Ot,text:"This is our component and action combined!"},{name:"TooltipFromAction",comp:U,raw:jt,text:""},{name:"tooltip2.js",comp:U,raw:Dt,text:""}]}}),{c(){g(t.$$.fragment),e=L(),g(n.$$.fragment),r=L(),g(o.$$.fragment),a=L(),g(l.$$.fragment),p=L(),g(c.$$.fragment),f=L(),g($.$$.fragment),H=L(),g(X.$$.fragment),I=L(),g(M.$$.fragment),V=L(),g(Y.$$.fragment)},l(i){h(t.$$.fragment,i),e=E(i),h(n.$$.fragment,i),r=E(i),h(o.$$.fragment,i),a=E(i),h(l.$$.fragment,i),p=E(i),h(c.$$.fragment,i),f=E(i),h($.$$.fragment,i),H=E(i),h(X.$$.fragment,i),I=E(i),h(M.$$.fragment,i),V=E(i),h(Y.$$.fragment,i)},m(i,v){w(t,i,v),u(i,e,v),w(n,i,v),u(i,r,v),w(o,i,v),u(i,a,v),w(l,i,v),u(i,p,v),w(c,i,v),u(i,f,v),w($,i,v),u(i,H,v),w(X,i,v),u(i,I,v),w(M,i,v),u(i,V,v),w(Y,i,v),N=!0},p(i,v){const G={};v&2&&(G.$$scope={dirty:v,ctx:i}),t.$set(G);const J={};v&2&&(J.$$scope={dirty:v,ctx:i}),n.$set(J);const K={};v&2&&(K.$$scope={dirty:v,ctx:i}),l.$set(K);const Q={};v&2&&(Q.$$scope={dirty:v,ctx:i}),$.$set(Q);const tt={};v&2&&(tt.$$scope={dirty:v,ctx:i}),M.$set(tt)},i(i){N||(d(t.$$.fragment,i),d(n.$$.fragment,i),d(o.$$.fragment,i),d(l.$$.fragment,i),d(c.$$.fragment,i),d($.$$.fragment,i),d(X.$$.fragment,i),d(M.$$.fragment,i),d(Y.$$.fragment,i),N=!0)},o(i){_(t.$$.fragment,i),_(n.$$.fragment,i),_(o.$$.fragment,i),_(l.$$.fragment,i),_(c.$$.fragment,i),_($.$$.fragment,i),_(X.$$.fragment,i),_(M.$$.fragment,i),_(Y.$$.fragment,i),N=!1},d(i){i&&(m(e),m(r),m(a),m(p),m(f),m(H),m(I),m(V)),x(t,i),x(n,i),x(o,i),x(l,i),x(c,i),x($,i),x(X,i),x(M,i),x(Y,i)}}}function Gt(s){let t,e;const n=[s[0],it];let r={$$slots:{default:[Zt]},$$scope:{ctx:s}};for(let o=0;o<n.length;o+=1)r=Z(r,n[o]);return t=new _t({props:r}),{c(){g(t.$$.fragment)},l(o){h(t.$$.fragment,o)},m(o,a){w(t,o,a),e=!0},p(o,[a]){const l=a&1?dt(n,[a&1&&ot(o[0]),a&0&&ot(it)]):{};a&2&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){e||(d(t.$$.fragment,o),e=!0)},o(o){_(t.$$.fragment,o),e=!1},d(o){x(t,o)}}}const it={title:"use:tooltip",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-03T00:00:00.000Z",layout:"notes"};function Jt(s,t,e){return s.$$set=n=>{e(0,t=Z(Z({},t),nt(n)))},t=nt(t),[t]}class re extends R{constructor(t){super(),S(this,t,Jt,Gt,F,{})}}export{re as default,it as metadata};
