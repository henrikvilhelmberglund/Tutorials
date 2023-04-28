import{S as Y,i as Z,s as G,k as y,q as D,a as A,l as k,m as S,r as w,h as d,c as x,n as L,b as v,D as h,R,u as K,H as P,V as tt,ac as F,ab as vt,o as ht,y as U,z as I,A as O,g as C,d as V,B,N as _t,j as Dt,Y as wt,J as nt,K as bt,L as it,M as ct}from"./index.5815ca79.js";import{M as Et,P as J}from"./mdsvex-layout-notes.7536afaf.js";import{S as X}from"./ShowMany.2af9ac15.js";import{S as Q}from"./Strong.b8abec16.js";function Tt(o){let t,e,s,l,n,c,r,i,g,b,f,p,u,_,m,M,z,N;return{c(){t=y("div"),e=y("div"),s=D(o[0]),l=A(),n=y("div"),c=D(o[1]),r=A(),i=y("div"),g=y("div"),b=D("A"),f=A(),p=y("div"),u=D("B"),_=A(),m=y("div"),M=D("C"),this.h()},l(T){t=k(T,"DIV",{class:!0});var E=S(t);e=k(E,"DIV",{class:!0});var j=S(e);s=w(j,o[0]),j.forEach(d),l=x(E),n=k(E,"DIV",{class:!0});var q=S(n);c=w(q,o[1]),q.forEach(d),r=x(E),i=k(E,"DIV",{class:!0});var a=S(i);g=k(a,"DIV",{draggable:!0,class:!0});var $=S(g);b=w($,"A"),$.forEach(d),f=x(a),p=k(a,"DIV",{draggable:!0,class:!0});var H=S(p);u=w(H,"B"),H.forEach(d),_=x(a),m=k(a,"DIV",{draggable:!0,class:!0});var W=S(m);M=w(W,"C"),W.forEach(d),a.forEach(d),E.forEach(d),this.h()},h(){L(e,"class","uno-qu7g0b"),L(n,"class","uno-qu7g0b"),L(g,"draggable","true"),L(g,"class","uno-h3hm1r"),L(p,"draggable","true"),L(p,"class","uno-h3hm1r"),L(m,"draggable","true"),L(m,"class","uno-h3hm1r"),L(i,"class","uno-lbmzgw"),L(t,"class","uno-lbmzgw")},m(T,E){v(T,t,E),h(t,e),h(e,s),h(t,l),h(t,n),h(n,c),h(t,r),h(t,i),h(i,g),h(g,b),h(i,f),h(i,p),h(p,u),h(i,_),h(i,m),h(m,M),z||(N=[R(e,"drop",o[4]),R(e,"dragover",o[6]),R(n,"drop",o[5]),R(n,"dragover",o[7]),R(g,"dragstart",o[2]),R(g,"dragend",o[3]),R(p,"dragstart",o[2]),R(p,"dragend",o[3]),R(m,"dragstart",o[2]),R(m,"dragend",o[3])],z=!0)},p(T,[E]){E&1&&K(s,T[0]),E&2&&K(c,T[1])},i:P,o:P,d(T){T&&d(t),z=!1,tt(N)}}}function At(o,t,e){let s="",l="",n=!1,c=!1;function r(u){const _=u.target.innerText;u.dataTransfer.setData("text",_),n=_!=="C",c=_!=="A"}function i(u){n=c=!1}function g(u){u.preventDefault();const _=u.dataTransfer.getData("text");e(0,s+=_)}function b(u){u.preventDefault();const _=u.dataTransfer.getData("text");e(1,l+=_)}function f(u){n&&u.preventDefault()}function p(u){c&&u.preventDefault()}return[s,l,r,i,g,b,f,p]}class xt extends Y{constructor(t){super(),Z(this,t,At,Tt,G,{})}}const yt=`<script>\r
	let dropzone1 = "";\r
	let dropzone2 = "";\r
\r
	let canDrop1 = false;\r
	let canDrop2 = false;\r
\r
	function onDragStart(event) {\r
		const text = event.target.innerText;\r
		event.dataTransfer.setData("text", text);\r
		canDrop1 = text !== "C";\r
		canDrop2 = text !== "A";\r
	}\r
\r
	function onDragEnd(event) {\r
		canDrop1 = canDrop2 = false;\r
	}\r
\r
	function onDrop1(event) {\r
		event.preventDefault();\r
		const data = event.dataTransfer.getData("text");\r
		dropzone1 += data;\r
	}\r
	function onDrop2(event) {\r
		event.preventDefault();\r
		const data = event.dataTransfer.getData("text");\r
		dropzone2 += data;\r
	}\r
	function onDragOver1(event) {\r
		if (canDrop1) {\r
			event.preventDefault();\r
		}\r
	}\r
	function onDragOver2(event) {\r
		if (canDrop2) {\r
			event.preventDefault();\r
		}\r
	}\r
<\/script>\r
\r
<div class="flex">\r
	<div class="m-4 h-28 w-28  bg-gray-300" on:drop={onDrop1} on:dragover={onDragOver1}>\r
		{dropzone1}\r
	</div>\r
	<div class="m-4 h-28 w-28 bg-gray-300" on:drop={onDrop2} on:dragover={onDragOver2}>\r
		{dropzone2}\r
	</div>\r
\r
	<div class="flex">\r
		<div\r
			draggable="true"\r
			on:dragstart={onDragStart}\r
			on:dragend={onDragEnd}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			A\r
		</div>\r
		<div\r
			draggable="true"\r
			on:dragstart={onDragStart}\r
			on:dragend={onDragEnd}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			B\r
		</div>\r
		<div\r
			draggable="true"\r
			on:dragstart={onDragStart}\r
			on:dragend={onDragEnd}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			C\r
		</div>\r
	</div>\r
</div>\r
\r
<style>\r
</style>\r
`;function ut(){let o=!1;function t(s,l){s.draggable=!0;function n(r){r.dataTransfer.setData("text",l),o=!0}function c(r){o=!1}return s.addEventListener("dragstart",n),s.addEventListener("dragend",c),{update(r){l=r},destroy(){s.removeEventListener("dragstart",n),s.removeEventListener("dragend",c)}}}function e(s,l){function n(r){r.preventDefault();const i=r.dataTransfer.getData("text");s.dispatchEvent(new CustomEvent("receivedDragData",{detail:i}))}function c(r){o&&r.preventDefault()}return s.addEventListener("drop",n),s.addEventListener("dragover",c),{update(r){},destroy(){s.removeEventListener("drop",n),s.removeEventListener("dragover",c)}}}return[t,e]}function kt(o){let t,e,s,l,n,c,r,i,g,b,f,p,u,_,m,M,z,N;return{c(){t=y("div"),e=y("div"),s=D(o[0]),l=A(),n=y("div"),c=D(o[1]),r=A(),i=y("div"),g=y("div"),b=D("A"),f=A(),p=y("div"),u=D("B"),_=A(),m=y("div"),M=D("C"),this.h()},l(T){t=k(T,"DIV",{class:!0});var E=S(t);e=k(E,"DIV",{class:!0});var j=S(e);s=w(j,o[0]),j.forEach(d),l=x(E),n=k(E,"DIV",{class:!0});var q=S(n);c=w(q,o[1]),q.forEach(d),r=x(E),i=k(E,"DIV",{class:!0});var a=S(i);g=k(a,"DIV",{draggable:!0,class:!0});var $=S(g);b=w($,"A"),$.forEach(d),f=x(a),p=k(a,"DIV",{draggable:!0,class:!0});var H=S(p);u=w(H,"B"),H.forEach(d),_=x(a),m=k(a,"DIV",{draggable:!0,class:!0});var W=S(m);M=w(W,"C"),W.forEach(d),a.forEach(d),E.forEach(d),this.h()},h(){L(e,"class","uno-0qnrcv"),L(n,"class","uno-0qnrcv"),L(g,"draggable","true"),L(g,"class","uno-ckyr1v"),L(p,"draggable","true"),L(p,"class","uno-ckyr1v"),L(m,"draggable","true"),L(m,"class","uno-ckyr1v"),L(i,"class","uno-7hsazi"),L(t,"class","uno-7hsazi")},m(T,E){v(T,t,E),h(t,e),h(e,s),h(t,l),h(t,n),h(n,c),h(t,r),h(t,i),h(i,g),h(g,b),h(i,f),h(i,p),h(p,u),h(i,_),h(i,m),h(m,M),z||(N=[F(o[3].call(null,e)),R(e,"receivedDragData",o[6]),F(o[5].call(null,n)),R(n,"receivedDragData",o[7]),F(o[2].call(null,g,"A")),F(o[2].call(null,p,"A")),F(o[4].call(null,p,"B")),F(o[4].call(null,m,"C"))],z=!0)},p(T,[E]){E&1&&K(s,T[0]),E&2&&K(c,T[1])},i:P,o:P,d(T){T&&d(t),z=!1,tt(N)}}}function Lt(o,t,e){const[s,l]=ut(),[n,c]=ut();let r="",i="";return[r,i,s,l,n,c,f=>e(0,r+=f.detail),f=>e(1,i+=f.detail)]}class dt extends Y{constructor(t){super(),Z(this,t,Lt,kt,G,{})}}const St=`<script>\r
	import { getDragAndDropActions } from "./dragAndDropActions";\r
\r
	// function that creates an action\r
	// good way to not enforce the name of what is being returned!\r
	const [drag1, drop1] = getDragAndDropActions();\r
	const [drag2, drop2] = getDragAndDropActions();\r
\r
  let dropzone1 = "";\r
	let dropzone2 = "";\r
<\/script>\r
\r
<div class="flex">\r
	<div\r
		class="m-4 h-28 w-28  bg-gray-300"\r
		use:drop1\r
		on:receivedDragData={(event) => (dropzone1 += event.detail)}>\r
		{dropzone1}\r
	</div>\r
	<div\r
		class="m-4 h-28 w-28 bg-gray-300"\r
		use:drop2\r
		on:receivedDragData={(event) => (dropzone2 += event.detail)}>\r
		{dropzone2}\r
	</div>\r
\r
	<div class="flex">\r
		<div\r
			draggable="true"\r
			use:drag1={"A"}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			A\r
		</div>\r
		<div\r
			draggable="true"\r
			use:drag1={"A"}\r
			use:drag2={"B"}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			B\r
		</div>\r
		<div\r
			draggable="true"\r
			use:drag2={"C"}\r
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">\r
			C\r
		</div>\r
	</div>\r
</div>\r
\r
<style>\r
</style>\r
`,zt=`export function getDragAndDropActions() {\r
  let canDrop = false;\r
  \r
	function drag(element, data) {\r
		element.draggable = true;\r
\r
		function onDragStart(event) {\r
			event.dataTransfer.setData("text", data);\r
			canDrop = true;\r
		}\r
\r
		function onDragEnd(event) {\r
			canDrop = false;\r
		}\r
\r
		element.addEventListener("dragstart", onDragStart);\r
		element.addEventListener("dragend", onDragEnd);\r
\r
		return {\r
			update(newData) {\r
				data = newData;\r
			},\r
			destroy() {\r
				element.removeEventListener("dragstart", onDragStart);\r
				element.removeEventListener("dragend", onDragEnd);\r
			},\r
		};\r
	}\r
\r
	function drop(element, params) {\r
		function onDrop(event) {\r
			event.preventDefault();\r
			const data = event.dataTransfer.getData("text");\r
			element.dispatchEvent(new CustomEvent("receivedDragData", { detail: data }));\r
		}\r
\r
		function onDragOver(event) {\r
			if (canDrop) {\r
				event.preventDefault();\r
			}\r
		}\r
\r
		element.addEventListener("drop", onDrop);\r
		element.addEventListener("dragover", onDragOver);\r
\r
		return {\r
			update(newParams) {\r
				params = newParams;\r
			},\r
			destroy() {\r
				element.removeEventListener("drop", onDrop);\r
				element.removeEventListener("dragover", onDragOver);\r
			},\r
		};\r
	}\r
\r
	return [drag, drop];\r
}\r
`;function Mt(o){let t,e,s,l;return{c(){t=y("div"),e=D("foo")},l(n){t=k(n,"DIV",{});var c=S(t);e=w(c,"foo"),c.forEach(d)},m(n,c){v(n,t,c),h(t,e),s||(l=F(o[0].call(null,t)),s=!0)},p:P,i:P,o:P,d(n){n&&d(t),s=!1,l()}}}function Ut(o,t,e){let{action:s}=t;return o.$$set=l=>{"action"in l&&e(0,s=l.action)},[s]}class It extends Y{constructor(t){super(),Z(this,t,Ut,Mt,G,{action:0})}}function Ot(){let o=new Set;return vt(()=>{o.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{o.has(t)&&(t.style.outlineColor="black")},1e3)})}),ht(()=>{o.forEach(t=>{t.style.outline="2px solid black",t.style.margin="8px"})}),function(e){return o.add(e),{destroy(){o.delete(e)}}}}function Ct(o){let t,e,s,l,n,c,r,i,g,b;return r=new It({props:{action:o[1]}}),{c(){t=y("div"),e=D(o[0]),s=A(),l=y("button"),n=D("++"),c=A(),U(r.$$.fragment)},l(f){t=k(f,"DIV",{});var p=S(t);e=w(p,o[0]),p.forEach(d),s=x(f),l=k(f,"BUTTON",{});var u=S(l);n=w(u,"++"),u.forEach(d),c=x(f),I(r.$$.fragment,f)},m(f,p){v(f,t,p),h(t,e),v(f,s,p),v(f,l,p),h(l,n),v(f,c,p),O(r,f,p),i=!0,g||(b=[F(o[1].call(null,t)),F(o[1].call(null,l)),R(l,"click",o[2])],g=!0)},p(f,[p]){(!i||p&1)&&K(e,f[0])},i(f){i||(C(r.$$.fragment,f),i=!0)},o(f){V(r.$$.fragment,f),i=!1},d(f){f&&d(t),f&&d(s),f&&d(l),f&&d(c),B(r,f),g=!1,tt(b)}}}function Vt(o,t,e){const s=Ot();let l=0;return[l,s,()=>e(0,l++,l)]}class et extends Y{constructor(t){super(),Z(this,t,Vt,Ct,G,{})}}const Bt=`<script>\r
	import Example2Other from "./Example2Other.svelte";\r
	import getMarkUpdateAction from "./example2";\r
\r
	const markUpdate = getMarkUpdateAction();\r
\r
	let count = 0;\r
<\/script>\r
\r
<div use:markUpdate>\r
	{count}\r
</div>\r
\r
<button use:markUpdate on:click={() => count++}>++</button>\r
\r
<Example2Other action={markUpdate} />\r
\r
<style>\r
</style>\r
`,Rt=`import { beforeUpdate, onMount } from "svelte";\r
\r
export default function () {\r
	let elements = new Set();\r
\r
	beforeUpdate(() => {\r
		elements.forEach((element) => {\r
			element.style.outlineColor = "red";\r
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
`,jt=`<script>\r
	export let action;\r
<\/script>\r
\r
<div use:action>\r
  foo\r
</div>`;function Nt(){const o=new Set,t=new Set;function e(s,l){let n=l<20?o:t;return n.add(s),{update(c){n.delete(s),n=c<20?o:t,n.add(s)},destroy(){n.delete(s)}}}return{action:e,getLessThan20(){return o},getMoreThan20(){return t}}}function ft(){const o=new Array(20);for(let t=0;t<20;t++)o[t]=Math.round(Math.random()*50);return o}function pt(o,t,e){const s=o.slice();return s[7]=t[e],s}function mt(o){let t,e=o[7]+"",s,l,n,c;return{c(){t=y("li"),s=D(e)},l(r){t=k(r,"LI",{});var i=S(t);s=w(i,e),i.forEach(d)},m(r,i){v(r,t,i),h(t,s),n||(c=F(l=o[2].action(t,o[7])),n=!0)},p(r,i){o=r,i&1&&e!==(e=o[7]+"")&&K(s,e),l&&wt(l.update)&&i&1&&l.update.call(null,o[7])},d(r){r&&d(t),n=!1,c()}}}function qt(o){let t,e,s,l,n,c,r,i,g,b,f=o[0],p=[];for(let u=0;u<f.length;u+=1)p[u]=mt(pt(o,f,u));return{c(){t=y("button"),e=D("Shuffle"),s=A(),l=y("label"),n=y("input"),c=D(" Toggle"),r=A(),i=y("ol");for(let u=0;u<p.length;u+=1)p[u].c();this.h()},l(u){t=k(u,"BUTTON",{});var _=S(t);e=w(_,"Shuffle"),_.forEach(d),s=x(u),l=k(u,"LABEL",{});var m=S(l);n=k(m,"INPUT",{type:!0}),c=w(m," Toggle"),m.forEach(d),r=x(u),i=k(u,"OL",{});var M=S(i);for(let z=0;z<p.length;z+=1)p[z].l(M);M.forEach(d),this.h()},h(){L(n,"type","checkbox")},m(u,_){v(u,t,_),h(t,e),v(u,s,_),v(u,l,_),h(l,n),n.checked=o[1],h(l,c),v(u,r,_),v(u,i,_);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(i,null);g||(b=[R(t,"click",o[3]),R(n,"change",o[4])],g=!0)},p(u,[_]){if(_&2&&(n.checked=u[1]),_&1){f=u[0];let m;for(m=0;m<f.length;m+=1){const M=pt(u,f,m);p[m]?p[m].p(M,_):(p[m]=mt(M),p[m].c(),p[m].m(i,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=f.length}},i:P,o:P,d(u){u&&d(t),u&&d(s),u&&d(l),u&&d(r),u&&d(i),_t(p,u),g=!1,tt(b)}}}function Ft(o,t,e){let s=ft();const l=Nt();let n=!1;Dt(()=>{r(n),c()});function c(){l.getMoreThan20().forEach(b=>{b.style.background="transparent"})}function r(b){b?l.getLessThan20().forEach(f=>{f.style.background="red"}):l.getLessThan20().forEach(f=>{f.style.background="transparent"})}const i=()=>{e(0,s=ft())};function g(){n=this.checked,e(1,n)}return[s,n,l,i,g]}class gt extends Y{constructor(t){super(),Z(this,t,Ft,qt,G,{})}}const Pt=`<script>\r
	import { getStatsAction, generateData } from "./example3";\r
	import { afterUpdate } from "svelte";\r
\r
	let data = generateData();\r
	const statsAction = getStatsAction();\r
\r
	let showLessThan20 = false;\r
\r
	afterUpdate(() => {\r
		toggleShowLessThan20(showLessThan20);\r
		hideMoreThan20();\r
	});\r
\r
	function hideMoreThan20() {\r
		statsAction.getMoreThan20().forEach((element) => {\r
			element.style.background = "transparent";\r
		});\r
	}\r
\r
	function toggleShowLessThan20(showLessThan20) {\r
		if (showLessThan20) {\r
			statsAction.getLessThan20().forEach((element) => {\r
				element.style.background = "red";\r
			});\r
		} else {\r
			statsAction.getLessThan20().forEach((element) => {\r
				element.style.background = "transparent";\r
			});\r
		}\r
	}\r
<\/script>\r
\r
<button\r
	on:click={() => {\r
		data = generateData();\r
	}}>Shuffle</button>\r
<label><input type="checkbox" bind:checked={showLessThan20} /> Toggle</label>\r
<ol>\r
	{#each data as item}\r
		<li use:statsAction.action={item}>{item}</li>\r
	{/each}\r
</ol>\r
`,Ht=`export function getStatsAction() {\r
	const lessThan20 = new Set();\r
	const moreThan20 = new Set();\r
	function action(node, param) {\r
		let set = param < 20 ? lessThan20 : moreThan20;\r
		set.add(node);\r
		return {\r
			update(param) {\r
				set.delete(node);\r
				set = param < 20 ? lessThan20 : moreThan20;\r
				set.add(node);\r
			},\r
			destroy() {\r
				set.delete(node);\r
			},\r
		};\r
	}\r
\r
	return {\r
		action,\r
		getLessThan20() {\r
			return lessThan20;\r
		},\r
		getMoreThan20() {\r
			return moreThan20;\r
		},\r
	};\r
}\r
\r
export function generateData() {\r
	const result = new Array(20);\r
	for (let i = 0; i < 20; i++) {\r
		result[i] = Math.round(Math.random() * 50);\r
	}\r
	return result;\r
}\r
`;function Wt(o){let t;return{c(){t=D("single element")},l(e){t=w(e,"single element")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Jt(o){let t;return{c(){t=D("group of elements")},l(e){t=w(e,"group of elements")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Kt(o){let t,e,s,l,n,c;return e=new Q({props:{$$slots:{default:[Wt]},$$scope:{ctx:o}}}),l=new Q({props:{$$slots:{default:[Jt]},$$scope:{ctx:o}}}),{c(){t=D("Usually an action interacts with a "),U(e.$$.fragment),s=D(", however it's possible that we may want to have an action that interacts with a "),U(l.$$.fragment),n=D(".")},l(r){t=w(r,"Usually an action interacts with a "),I(e.$$.fragment,r),s=w(r,", however it's possible that we may want to have an action that interacts with a "),I(l.$$.fragment,r),n=w(r,".")},m(r,i){v(r,t,i),O(e,r,i),v(r,s,i),O(l,r,i),v(r,n,i),c=!0},p(r,i){const g={};i&2&&(g.$$scope={dirty:i,ctx:r}),e.$set(g);const b={};i&2&&(b.$$scope={dirty:i,ctx:r}),l.$set(b)},i(r){c||(C(e.$$.fragment,r),C(l.$$.fragment,r),c=!0)},o(r){V(e.$$.fragment,r),V(l.$$.fragment,r),c=!1},d(r){r&&d(t),B(e,r),r&&d(s),B(l,r),r&&d(n)}}}function Yt(o){let t;return{c(){t=D("Next let's try using actions instead:")},l(e){t=w(e,"Next let's try using actions instead:")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Zt(o){let t;return{c(){t=D("Note that we don't need to have the pair of actions used in the same component.")},l(e){t=w(e,"Note that we don't need to have the pair of actions used in the same component.")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Gt(o){let t;return{c(){t=D("In the next example we have a div and button that both light up when we click the button.")},l(e){t=w(e,"In the next example we have a div and button that both light up when we click the button.")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Qt(o){let t;return{c(){t=D("creating a function that returns an action")},l(e){t=w(e,"creating a function that returns an action")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function Xt(o){let t;return{c(){t=D("grouped")},l(e){t=w(e,"grouped")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function te(o){let t,e,s,l,n,c;return e=new Q({props:{$$slots:{default:[Qt]},$$scope:{ctx:o}}}),l=new Q({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){t=D("This is only possible because we're "),U(e.$$.fragment),s=D(". This means that if several elements then use this action they are "),U(l.$$.fragment),n=D(".")},l(r){t=w(r,"This is only possible because we're "),I(e.$$.fragment,r),s=w(r,". This means that if several elements then use this action they are "),I(l.$$.fragment,r),n=w(r,".")},m(r,i){v(r,t,i),O(e,r,i),v(r,s,i),O(l,r,i),v(r,n,i),c=!0},p(r,i){const g={};i&2&&(g.$$scope={dirty:i,ctx:r}),e.$set(g);const b={};i&2&&(b.$$scope={dirty:i,ctx:r}),l.$set(b)},i(r){c||(C(e.$$.fragment,r),C(l.$$.fragment,r),c=!0)},o(r){V(e.$$.fragment,r),V(l.$$.fragment,r),c=!1},d(r){r&&d(t),B(e,r),r&&d(s),B(l,r),r&&d(n)}}}function ee(o){let t;return{c(){t=D("Finally we have an action which we apply to many elements, then color them based on their value.")},l(e){t=w(e,"Finally we have an action which we apply to many elements, then color them based on their value.")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function ne(o){let t;return{c(){t=D("object with methods")},l(e){t=w(e,"object with methods")},m(e,s){v(e,t,s)},d(e){e&&d(t)}}}function re(o){let t,e,s,l;return e=new Q({props:{$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){t=D("An interesting thing here is our action isn't a function but instead an "),U(e.$$.fragment),s=D(". This works too!")},l(n){t=w(n,"An interesting thing here is our action isn't a function but instead an "),I(e.$$.fragment,n),s=w(n,". This works too!")},m(n,c){v(n,t,c),O(e,n,c),v(n,s,c),l=!0},p(n,c){const r={};c&2&&(r.$$scope={dirty:c,ctx:n}),e.$set(r)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){V(e.$$.fragment,n),l=!1},d(n){n&&d(t),B(e,n),n&&d(s)}}}function ae(o){let t,e,s,l,n,c,r,i,g,b,f,p,u,_,m,M,z,N,T,E,j,q;return t=new J({props:{$$slots:{default:[Kt]},$$scope:{ctx:o}}}),s=new X({props:{name:[{name:"Example1",comp:xt,raw:yt,text:"Here we have a few balls we can drop into a box to add text to the box. We have set up so we can't drop C into the first box and can't drop A into the second box."}]}}),n=new J({props:{$$slots:{default:[Yt]},$$scope:{ctx:o}}}),r=new X({props:{name:[{name:"Example1Final",comp:dt,raw:St,text:"Here is the same thing but using actions. We use dragAndDropActions.js to export a function that creates our actions."},{name:"dragAndDropActions.js",comp:dt,raw:zt,text:""}]}}),g=new J({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),f=new J({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),u=new X({props:{name:[{name:"Example2",comp:et,raw:Bt,text:"The elements use the same action which adds them all to a Set and thus they are all run when any action is triggered."},{name:"example2.js",comp:et,raw:Rt,text:""},{name:"Example2Other",comp:et,raw:jt,text:"We can even pass the action into another component and it still works!"}]}}),m=new J({props:{$$slots:{default:[te]},$$scope:{ctx:o}}}),z=new J({props:{$$slots:{default:[ee]},$$scope:{ctx:o}}}),T=new X({props:{name:[{name:"Example3",comp:gt,raw:Pt,text:""},{name:"example3.js",comp:gt,raw:Ht,text:""}]}}),j=new J({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){U(t.$$.fragment),e=A(),U(s.$$.fragment),l=A(),U(n.$$.fragment),c=A(),U(r.$$.fragment),i=A(),U(g.$$.fragment),b=A(),U(f.$$.fragment),p=A(),U(u.$$.fragment),_=A(),U(m.$$.fragment),M=A(),U(z.$$.fragment),N=A(),U(T.$$.fragment),E=A(),U(j.$$.fragment)},l(a){I(t.$$.fragment,a),e=x(a),I(s.$$.fragment,a),l=x(a),I(n.$$.fragment,a),c=x(a),I(r.$$.fragment,a),i=x(a),I(g.$$.fragment,a),b=x(a),I(f.$$.fragment,a),p=x(a),I(u.$$.fragment,a),_=x(a),I(m.$$.fragment,a),M=x(a),I(z.$$.fragment,a),N=x(a),I(T.$$.fragment,a),E=x(a),I(j.$$.fragment,a)},m(a,$){O(t,a,$),v(a,e,$),O(s,a,$),v(a,l,$),O(n,a,$),v(a,c,$),O(r,a,$),v(a,i,$),O(g,a,$),v(a,b,$),O(f,a,$),v(a,p,$),O(u,a,$),v(a,_,$),O(m,a,$),v(a,M,$),O(z,a,$),v(a,N,$),O(T,a,$),v(a,E,$),O(j,a,$),q=!0},p(a,$){const H={};$&2&&(H.$$scope={dirty:$,ctx:a}),t.$set(H);const W={};$&2&&(W.$$scope={dirty:$,ctx:a}),n.$set(W);const rt={};$&2&&(rt.$$scope={dirty:$,ctx:a}),g.$set(rt);const at={};$&2&&(at.$$scope={dirty:$,ctx:a}),f.$set(at);const ot={};$&2&&(ot.$$scope={dirty:$,ctx:a}),m.$set(ot);const st={};$&2&&(st.$$scope={dirty:$,ctx:a}),z.$set(st);const lt={};$&2&&(lt.$$scope={dirty:$,ctx:a}),j.$set(lt)},i(a){q||(C(t.$$.fragment,a),C(s.$$.fragment,a),C(n.$$.fragment,a),C(r.$$.fragment,a),C(g.$$.fragment,a),C(f.$$.fragment,a),C(u.$$.fragment,a),C(m.$$.fragment,a),C(z.$$.fragment,a),C(T.$$.fragment,a),C(j.$$.fragment,a),q=!0)},o(a){V(t.$$.fragment,a),V(s.$$.fragment,a),V(n.$$.fragment,a),V(r.$$.fragment,a),V(g.$$.fragment,a),V(f.$$.fragment,a),V(u.$$.fragment,a),V(m.$$.fragment,a),V(z.$$.fragment,a),V(T.$$.fragment,a),V(j.$$.fragment,a),q=!1},d(a){B(t,a),a&&d(e),B(s,a),a&&d(l),B(n,a),a&&d(c),B(r,a),a&&d(i),B(g,a),a&&d(b),B(f,a),a&&d(p),B(u,a),a&&d(_),B(m,a),a&&d(M),B(z,a),a&&d(N),B(T,a),a&&d(E),B(j,a)}}}function oe(o){let t,e;const s=[o[0],$t];let l={$$slots:{default:[ae]},$$scope:{ctx:o}};for(let n=0;n<s.length;n+=1)l=nt(l,s[n]);return t=new Et({props:l}),{c(){U(t.$$.fragment)},l(n){I(t.$$.fragment,n)},m(n,c){O(t,n,c),e=!0},p(n,[c]){const r=c&1?bt(s,[c&1&&it(n[0]),c&0&&it($t)]):{};c&2&&(r.$$scope={dirty:c,ctx:n}),t.$set(r)},i(n){e||(C(t.$$.fragment,n),e=!0)},o(n){V(t.$$.fragment,n),e=!1},d(n){B(t,n)}}}const $t={title:"Ensemble actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function se(o,t,e){return o.$$set=s=>{e(0,t=nt(nt({},t),ct(s)))},t=ct(t),[t]}class de extends Y{constructor(t){super(),Z(this,t,se,oe,G,{})}}export{de as default,$t as metadata};
