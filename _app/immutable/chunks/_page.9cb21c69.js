import{s as Z,f as A,l as x,a as T,g as k,h as R,m as E,d as f,c as y,u as P,j as C,i as $,v as w,X as B,n as X,z as H,H as Y,ae as F,ad as _t,o as Dt,B as wt,b as bt,I as xt,C as et,D as ct}from"./scheduler.a7cd560e.js";import{S as G,i as J,b as L,d as S,m as I,a as U,t as M,e as z}from"./index.396264e7.js";import{g as Et,a as dt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Tt,P as W}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as Q}from"./ShowMany.db7be1f3.js";import{e as ut}from"./each.32d06572.js";import{S as K}from"./Strong.097578ae.js";function yt(r){let t,e,s,l,n,c,a,i,g,_="A",p,d,u="B",v,m,O="C",V,N;return{c(){t=A("div"),e=A("div"),s=x(r[0]),l=T(),n=A("div"),c=x(r[1]),a=T(),i=A("div"),g=A("div"),g.textContent=_,p=T(),d=A("div"),d.textContent=u,v=T(),m=A("div"),m.textContent=O,this.h()},l(b){t=k(b,"DIV",{class:!0});var D=R(t);e=k(D,"DIV",{class:!0});var j=R(e);s=E(j,r[0]),j.forEach(f),l=y(D),n=k(D,"DIV",{class:!0});var q=R(n);c=E(q,r[1]),q.forEach(f),a=y(D),i=k(D,"DIV",{class:!0});var o=R(i);g=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(g)!=="svelte-53zmce"&&(g.textContent=_),p=y(o),d=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(d)!=="svelte-qbldnb"&&(d.textContent=u),v=y(o),m=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(m)!=="svelte-137y0wk"&&(m.textContent=O),o.forEach(f),D.forEach(f),this.h()},h(){C(e,"class","spu-vc1drp"),C(n,"class","spu-vc1drp"),C(g,"draggable","true"),C(g,"class","spu-hs1qh1"),C(d,"draggable","true"),C(d,"class","spu-hs1qh1"),C(m,"draggable","true"),C(m,"class","spu-hs1qh1"),C(i,"class","spu-h1e378"),C(t,"class","spu-h1e378")},m(b,D){$(b,t,D),w(t,e),w(e,s),w(t,l),w(t,n),w(n,c),w(t,a),w(t,i),w(i,g),w(i,p),w(i,d),w(i,v),w(i,m),V||(N=[B(e,"drop",r[4]),B(e,"dragover",r[6]),B(n,"drop",r[5]),B(n,"dragover",r[7]),B(g,"dragstart",r[2]),B(g,"dragend",r[3]),B(d,"dragstart",r[2]),B(d,"dragend",r[3]),B(m,"dragstart",r[2]),B(m,"dragend",r[3])],V=!0)},p(b,[D]){D&1&&X(s,b[0]),D&2&&X(c,b[1])},i:H,o:H,d(b){b&&f(t),V=!1,Y(N)}}}function At(r,t,e){let s="",l="",n=!1,c=!1;function a(u){const v=u.target.innerText;u.dataTransfer.setData("text",v),n=v!=="C",c=v!=="A"}function i(u){n=c=!1}function g(u){u.preventDefault();const v=u.dataTransfer.getData("text");e(0,s+=v)}function _(u){u.preventDefault();const v=u.dataTransfer.getData("text");e(1,l+=v)}function p(u){n&&u.preventDefault()}function d(u){c&&u.preventDefault()}return[s,l,a,i,g,_,p,d]}class kt extends G{constructor(t){super(),J(this,t,At,yt,Z,{})}}const Ct=`<script>\r
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
`;function pt(){let r=!1;function t(s,l){s.draggable=!0;function n(a){a.dataTransfer.setData("text",l),r=!0}function c(a){r=!1}return s.addEventListener("dragstart",n),s.addEventListener("dragend",c),{update(a){l=a},destroy(){s.removeEventListener("dragstart",n),s.removeEventListener("dragend",c)}}}function e(s,l){function n(a){a.preventDefault();const i=a.dataTransfer.getData("text");s.dispatchEvent(new CustomEvent("receivedDragData",{detail:i}))}function c(a){r&&a.preventDefault()}return s.addEventListener("drop",n),s.addEventListener("dragover",c),{update(a){},destroy(){s.removeEventListener("drop",n),s.removeEventListener("dragover",c)}}}return[t,e]}function Lt(r){let t,e,s,l,n,c,a,i,g,_="A",p,d,u="B",v,m,O="C",V,N;return{c(){t=A("div"),e=A("div"),s=x(r[0]),l=T(),n=A("div"),c=x(r[1]),a=T(),i=A("div"),g=A("div"),g.textContent=_,p=T(),d=A("div"),d.textContent=u,v=T(),m=A("div"),m.textContent=O,this.h()},l(b){t=k(b,"DIV",{class:!0});var D=R(t);e=k(D,"DIV",{class:!0});var j=R(e);s=E(j,r[0]),j.forEach(f),l=y(D),n=k(D,"DIV",{class:!0});var q=R(n);c=E(q,r[1]),q.forEach(f),a=y(D),i=k(D,"DIV",{class:!0});var o=R(i);g=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(g)!=="svelte-75gvrv"&&(g.textContent=_),p=y(o),d=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(d)!=="svelte-d2ouqv"&&(d.textContent=u),v=y(o),m=k(o,"DIV",{draggable:!0,class:!0,["data-svelte-h"]:!0}),P(m)!=="svelte-12g451w"&&(m.textContent=O),o.forEach(f),D.forEach(f),this.h()},h(){C(e,"class","spu-plarb1"),C(n,"class","spu-plarb1"),C(g,"draggable","true"),C(g,"class","spu-sbs2lp"),C(d,"draggable","true"),C(d,"class","spu-sbs2lp"),C(m,"draggable","true"),C(m,"class","spu-sbs2lp"),C(i,"class","spu-bfcxoy"),C(t,"class","spu-bfcxoy")},m(b,D){$(b,t,D),w(t,e),w(e,s),w(t,l),w(t,n),w(n,c),w(t,a),w(t,i),w(i,g),w(i,p),w(i,d),w(i,v),w(i,m),V||(N=[F(r[3].call(null,e)),B(e,"receivedDragData",r[6]),F(r[5].call(null,n)),B(n,"receivedDragData",r[7]),F(r[2].call(null,g,"A")),F(r[2].call(null,d,"A")),F(r[4].call(null,d,"B")),F(r[4].call(null,m,"C"))],V=!0)},p(b,[D]){D&1&&X(s,b[0]),D&2&&X(c,b[1])},i:H,o:H,d(b){b&&f(t),V=!1,Y(N)}}}function St(r,t,e){const[s,l]=pt(),[n,c]=pt();let a="",i="";return[a,i,s,l,n,c,p=>e(0,a+=p.detail),p=>e(1,i+=p.detail)]}class ft extends G{constructor(t){super(),J(this,t,St,Lt,Z,{})}}const It=`<script>\r
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
`,Ut=`export function getDragAndDropActions() {\r
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
`;function Mt(r){let t,e="foo",s,l;return{c(){t=A("div"),t.textContent=e},l(n){t=k(n,"DIV",{["data-svelte-h"]:!0}),P(t)!=="svelte-1g1c1y7"&&(t.textContent=e)},m(n,c){$(n,t,c),s||(l=F(r[0].call(null,t)),s=!0)},p:H,i:H,o:H,d(n){n&&f(t),s=!1,l()}}}function zt(r,t,e){let{action:s}=t;return r.$$set=l=>{"action"in l&&e(0,s=l.action)},[s]}class Ot extends G{constructor(t){super(),J(this,t,zt,Mt,Z,{action:0})}}function Vt(){let r=new Set;return _t(()=>{r.forEach(t=>{t.style.outlineColor="red",setTimeout(()=>{r.has(t)&&(t.style.outlineColor="black")},1e3)})}),Dt(()=>{r.forEach(t=>{t.style.outline="2px solid black",t.style.margin="8px"})}),function(e){return r.add(e),{destroy(){r.delete(e)}}}}function Bt(r){let t,e,s,l,n="++",c,a,i,g,_;return a=new Ot({props:{action:r[1]}}),{c(){t=A("div"),e=x(r[0]),s=T(),l=A("button"),l.textContent=n,c=T(),L(a.$$.fragment)},l(p){t=k(p,"DIV",{});var d=R(t);e=E(d,r[0]),d.forEach(f),s=y(p),l=k(p,"BUTTON",{["data-svelte-h"]:!0}),P(l)!=="svelte-1vzogig"&&(l.textContent=n),c=y(p),S(a.$$.fragment,p)},m(p,d){$(p,t,d),w(t,e),$(p,s,d),$(p,l,d),$(p,c,d),I(a,p,d),i=!0,g||(_=[F(r[1].call(null,t)),F(r[1].call(null,l)),B(l,"click",r[2])],g=!0)},p(p,[d]){(!i||d&1)&&X(e,p[0])},i(p){i||(U(a.$$.fragment,p),i=!0)},o(p){M(a.$$.fragment,p),i=!1},d(p){p&&(f(t),f(s),f(l),f(c)),z(a,p),g=!1,Y(_)}}}function jt(r,t,e){const s=Vt();let l=0;return[l,s,()=>e(0,l++,l)]}class tt extends G{constructor(t){super(),J(this,t,jt,Bt,Z,{})}}const Rt=`<script>\r
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
`,Nt=`import { beforeUpdate, onMount } from "svelte";\r
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
`,qt=`<script>\r
	export let action;\r
<\/script>\r
\r
<div use:action>\r
  foo\r
</div>`;function Ft(){const r=new Set,t=new Set;function e(s,l){let n=l<20?r:t;return n.add(s),{update(c){n.delete(s),n=c<20?r:t,n.add(s)},destroy(){n.delete(s)}}}return{action:e,getLessThan20(){return r},getMoreThan20(){return t}}}function mt(){const r=new Array(20);for(let t=0;t<20;t++)r[t]=Math.round(Math.random()*50);return r}function gt(r,t,e){const s=r.slice();return s[7]=t[e],s}function $t(r){let t,e=r[7]+"",s,l,n,c;return{c(){t=A("li"),s=x(e)},l(a){t=k(a,"LI",{});var i=R(t);s=E(i,e),i.forEach(f)},m(a,i){$(a,t,i),w(t,s),n||(c=F(l=r[2].action(t,r[7])),n=!0)},p(a,i){r=a,i&1&&e!==(e=r[7]+"")&&X(s,e),l&&xt(l.update)&&i&1&&l.update.call(null,r[7])},d(a){a&&f(t),n=!1,c()}}}function Pt(r){let t,e="Shuffle",s,l,n,c,a,i,g,_,p=ut(r[0]),d=[];for(let u=0;u<p.length;u+=1)d[u]=$t(gt(r,p,u));return{c(){t=A("button"),t.textContent=e,s=T(),l=A("label"),n=A("input"),c=x(" Toggle"),a=T(),i=A("ol");for(let u=0;u<d.length;u+=1)d[u].c();this.h()},l(u){t=k(u,"BUTTON",{["data-svelte-h"]:!0}),P(t)!=="svelte-ii4b57"&&(t.textContent=e),s=y(u),l=k(u,"LABEL",{});var v=R(l);n=k(v,"INPUT",{type:!0}),c=E(v," Toggle"),v.forEach(f),a=y(u),i=k(u,"OL",{});var m=R(i);for(let O=0;O<d.length;O+=1)d[O].l(m);m.forEach(f),this.h()},h(){C(n,"type","checkbox")},m(u,v){$(u,t,v),$(u,s,v),$(u,l,v),w(l,n),n.checked=r[1],w(l,c),$(u,a,v),$(u,i,v);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(i,null);g||(_=[B(t,"click",r[3]),B(n,"change",r[4])],g=!0)},p(u,[v]){if(v&2&&(n.checked=u[1]),v&1){p=ut(u[0]);let m;for(m=0;m<p.length;m+=1){const O=gt(u,p,m);d[m]?d[m].p(O,v):(d[m]=$t(O),d[m].c(),d[m].m(i,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=p.length}},i:H,o:H,d(u){u&&(f(t),f(s),f(l),f(a),f(i)),wt(d,u),g=!1,Y(_)}}}function Ht(r,t,e){let s=mt();const l=Ft();let n=!1;bt(()=>{a(n),c()});function c(){l.getMoreThan20().forEach(_=>{_.style.background="transparent"})}function a(_){_?l.getLessThan20().forEach(p=>{p.style.background="red"}):l.getLessThan20().forEach(p=>{p.style.background="transparent"})}const i=()=>{e(0,s=mt())};function g(){n=this.checked,e(1,n)}return[s,n,l,i,g]}class ht extends G{constructor(t){super(),J(this,t,Ht,Pt,Z,{})}}const Wt=`<script>\r
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
`,Xt=`export function getStatsAction() {\r
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
`;function Zt(r){let t;return{c(){t=x("single element")},l(e){t=E(e,"single element")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function Gt(r){let t;return{c(){t=x("group of elements")},l(e){t=E(e,"group of elements")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function Jt(r){let t,e,s,l,n,c;return e=new K({props:{$$slots:{default:[Zt]},$$scope:{ctx:r}}}),l=new K({props:{$$slots:{default:[Gt]},$$scope:{ctx:r}}}),{c(){t=x("Usually an action interacts with a "),L(e.$$.fragment),s=x(", however it's possible that we may want to have an action that interacts with a "),L(l.$$.fragment),n=x(".")},l(a){t=E(a,"Usually an action interacts with a "),S(e.$$.fragment,a),s=E(a,", however it's possible that we may want to have an action that interacts with a "),S(l.$$.fragment,a),n=E(a,".")},m(a,i){$(a,t,i),I(e,a,i),$(a,s,i),I(l,a,i),$(a,n,i),c=!0},p(a,i){const g={};i&2&&(g.$$scope={dirty:i,ctx:a}),e.$set(g);const _={};i&2&&(_.$$scope={dirty:i,ctx:a}),l.$set(_)},i(a){c||(U(e.$$.fragment,a),U(l.$$.fragment,a),c=!0)},o(a){M(e.$$.fragment,a),M(l.$$.fragment,a),c=!1},d(a){a&&(f(t),f(s),f(n)),z(e,a),z(l,a)}}}function Kt(r){let t;return{c(){t=x("Next let's try using actions instead:")},l(e){t=E(e,"Next let's try using actions instead:")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function Qt(r){let t;return{c(){t=x("Note that we don't need to have the pair of actions used in the same component.")},l(e){t=E(e,"Note that we don't need to have the pair of actions used in the same component.")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function Yt(r){let t;return{c(){t=x("In the next example we have a div and button that both light up when we click the button.")},l(e){t=E(e,"In the next example we have a div and button that both light up when we click the button.")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function te(r){let t;return{c(){t=x("creating a function that returns an action")},l(e){t=E(e,"creating a function that returns an action")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function ee(r){let t;return{c(){t=x("grouped")},l(e){t=E(e,"grouped")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function ne(r){let t,e,s,l,n,c;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:r}}}),l=new K({props:{$$slots:{default:[ee]},$$scope:{ctx:r}}}),{c(){t=x("This is only possible because we're "),L(e.$$.fragment),s=x(". This means that if several elements then use this action they are "),L(l.$$.fragment),n=x(".")},l(a){t=E(a,"This is only possible because we're "),S(e.$$.fragment,a),s=E(a,". This means that if several elements then use this action they are "),S(l.$$.fragment,a),n=E(a,".")},m(a,i){$(a,t,i),I(e,a,i),$(a,s,i),I(l,a,i),$(a,n,i),c=!0},p(a,i){const g={};i&2&&(g.$$scope={dirty:i,ctx:a}),e.$set(g);const _={};i&2&&(_.$$scope={dirty:i,ctx:a}),l.$set(_)},i(a){c||(U(e.$$.fragment,a),U(l.$$.fragment,a),c=!0)},o(a){M(e.$$.fragment,a),M(l.$$.fragment,a),c=!1},d(a){a&&(f(t),f(s),f(n)),z(e,a),z(l,a)}}}function re(r){let t;return{c(){t=x("Finally we have an action which we apply to many elements, then color them based on their value.")},l(e){t=E(e,"Finally we have an action which we apply to many elements, then color them based on their value.")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function ae(r){let t;return{c(){t=x("object with methods")},l(e){t=E(e,"object with methods")},m(e,s){$(e,t,s)},d(e){e&&f(t)}}}function se(r){let t,e,s,l;return e=new K({props:{$$slots:{default:[ae]},$$scope:{ctx:r}}}),{c(){t=x("An interesting thing here is our action isn't a function but instead an "),L(e.$$.fragment),s=x(". This works too!")},l(n){t=E(n,"An interesting thing here is our action isn't a function but instead an "),S(e.$$.fragment,n),s=E(n,". This works too!")},m(n,c){$(n,t,c),I(e,n,c),$(n,s,c),l=!0},p(n,c){const a={};c&2&&(a.$$scope={dirty:c,ctx:n}),e.$set(a)},i(n){l||(U(e.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),l=!1},d(n){n&&(f(t),f(s)),z(e,n)}}}function oe(r){let t,e,s,l,n,c,a,i,g,_,p,d,u,v,m,O,V,N,b,D,j,q;return t=new W({props:{$$slots:{default:[Jt]},$$scope:{ctx:r}}}),s=new Q({props:{name:[{name:"Example1",comp:kt,raw:Ct,text:"Here we have a few balls we can drop into a box to add text to the box. We have set up so we can't drop C into the first box and can't drop A into the second box."}]}}),n=new W({props:{$$slots:{default:[Kt]},$$scope:{ctx:r}}}),a=new Q({props:{name:[{name:"Example1Final",comp:ft,raw:It,text:"Here is the same thing but using actions. We use dragAndDropActions.js to export a function that creates our actions."},{name:"dragAndDropActions.js",comp:ft,raw:Ut,text:""}]}}),g=new W({props:{$$slots:{default:[Qt]},$$scope:{ctx:r}}}),p=new W({props:{$$slots:{default:[Yt]},$$scope:{ctx:r}}}),u=new Q({props:{name:[{name:"Example2",comp:tt,raw:Rt,text:"The elements use the same action which adds them all to a Set and thus they are all run when any action is triggered."},{name:"example2.js",comp:tt,raw:Nt,text:""},{name:"Example2Other",comp:tt,raw:qt,text:"We can even pass the action into another component and it still works!"}]}}),m=new W({props:{$$slots:{default:[ne]},$$scope:{ctx:r}}}),V=new W({props:{$$slots:{default:[re]},$$scope:{ctx:r}}}),b=new Q({props:{name:[{name:"Example3",comp:ht,raw:Wt,text:""},{name:"example3.js",comp:ht,raw:Xt,text:""}]}}),j=new W({props:{$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){L(t.$$.fragment),e=T(),L(s.$$.fragment),l=T(),L(n.$$.fragment),c=T(),L(a.$$.fragment),i=T(),L(g.$$.fragment),_=T(),L(p.$$.fragment),d=T(),L(u.$$.fragment),v=T(),L(m.$$.fragment),O=T(),L(V.$$.fragment),N=T(),L(b.$$.fragment),D=T(),L(j.$$.fragment)},l(o){S(t.$$.fragment,o),e=y(o),S(s.$$.fragment,o),l=y(o),S(n.$$.fragment,o),c=y(o),S(a.$$.fragment,o),i=y(o),S(g.$$.fragment,o),_=y(o),S(p.$$.fragment,o),d=y(o),S(u.$$.fragment,o),v=y(o),S(m.$$.fragment,o),O=y(o),S(V.$$.fragment,o),N=y(o),S(b.$$.fragment,o),D=y(o),S(j.$$.fragment,o)},m(o,h){I(t,o,h),$(o,e,h),I(s,o,h),$(o,l,h),I(n,o,h),$(o,c,h),I(a,o,h),$(o,i,h),I(g,o,h),$(o,_,h),I(p,o,h),$(o,d,h),I(u,o,h),$(o,v,h),I(m,o,h),$(o,O,h),I(V,o,h),$(o,N,h),I(b,o,h),$(o,D,h),I(j,o,h),q=!0},p(o,h){const nt={};h&2&&(nt.$$scope={dirty:h,ctx:o}),t.$set(nt);const rt={};h&2&&(rt.$$scope={dirty:h,ctx:o}),n.$set(rt);const at={};h&2&&(at.$$scope={dirty:h,ctx:o}),g.$set(at);const st={};h&2&&(st.$$scope={dirty:h,ctx:o}),p.$set(st);const ot={};h&2&&(ot.$$scope={dirty:h,ctx:o}),m.$set(ot);const lt={};h&2&&(lt.$$scope={dirty:h,ctx:o}),V.$set(lt);const it={};h&2&&(it.$$scope={dirty:h,ctx:o}),j.$set(it)},i(o){q||(U(t.$$.fragment,o),U(s.$$.fragment,o),U(n.$$.fragment,o),U(a.$$.fragment,o),U(g.$$.fragment,o),U(p.$$.fragment,o),U(u.$$.fragment,o),U(m.$$.fragment,o),U(V.$$.fragment,o),U(b.$$.fragment,o),U(j.$$.fragment,o),q=!0)},o(o){M(t.$$.fragment,o),M(s.$$.fragment,o),M(n.$$.fragment,o),M(a.$$.fragment,o),M(g.$$.fragment,o),M(p.$$.fragment,o),M(u.$$.fragment,o),M(m.$$.fragment,o),M(V.$$.fragment,o),M(b.$$.fragment,o),M(j.$$.fragment,o),q=!1},d(o){o&&(f(e),f(l),f(c),f(i),f(_),f(d),f(v),f(O),f(N),f(D)),z(t,o),z(s,o),z(n,o),z(a,o),z(g,o),z(p,o),z(u,o),z(m,o),z(V,o),z(b,o),z(j,o)}}}function le(r){let t,e;const s=[r[0],vt];let l={$$slots:{default:[oe]},$$scope:{ctx:r}};for(let n=0;n<s.length;n+=1)l=et(l,s[n]);return t=new Tt({props:l}),{c(){L(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,c){I(t,n,c),e=!0},p(n,[c]){const a=c&1?Et(s,[c&1&&dt(n[0]),c&0&&dt(vt)]):{};c&2&&(a.$$scope={dirty:c,ctx:n}),t.$set(a)},i(n){e||(U(t.$$.fragment,n),e=!0)},o(n){M(t.$$.fragment,n),e=!1},d(n){z(t,n)}}}const vt={title:"Ensemble actions",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-20T00:00:00.000Z",layout:"notes"};function ie(r,t,e){return r.$$set=s=>{e(0,t=et(et({},t),ct(s)))},t=ct(t),[t]}class $e extends G{constructor(t){super(),J(this,t,ie,le,Z,{})}}export{$e as default,vt as metadata};
