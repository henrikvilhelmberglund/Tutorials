import{s as M,f as m,l as S,a as k,g as v,h as N,m as z,d as f,c as C,u as y,j as H,i as $,v as _,X as x,n as W,z as B,H as X,A as L,al as T,k as j,C as G,D as et}from"./scheduler.a7cd560e.js";import{S as P,i as V,b as I,d as J,m as A,a as R,t as q,e as D}from"./index.396264e7.js";import{g as ot,a as nt}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as at,P as rt}from"./mdsvex-layout-notes.4b2b7ac6.js";import{w as it}from"./index.5e192797.js";import{t as K}from"./tweened.c20bb7bf.js";import{s as ct}from"./spring.62c73e18.js";import{S as ut}from"./ShowMany.db7be1f3.js";import{S as st}from"./Strong.097578ae.js";function dt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,l,r,o,n="0",c,u,p="20",b,w;return{c(){e=m("pre"),t=S(s),l=k(),r=m("div"),o=m("button"),o.textContent=n,c=k(),u=m("button"),u.textContent=p,this.h()},l(a){e=v(a,"PRE",{});var d=N(e);t=z(d,s),d.forEach(f),l=C(a),r=v(a,"DIV",{class:!0});var h=N(r);o=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(o)!=="svelte-13k0rex"&&(o.textContent=n),c=C(h),u=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(u)!=="svelte-u4d50z"&&(u.textContent=p),h.forEach(f),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(a,d){$(a,e,d),_(e,t),$(a,l,d),$(a,r,d),_(r,o),_(r,c),_(r,u),b||(w=[x(o,"click",i[2]),x(u,"click",i[3])],b=!0)},p(a,[d]){d&1&&s!==(s=JSON.stringify(a[0],null,2)+"")&&W(t,s)},i:B,o:B,d(a){a&&(f(e),f(l),f(r)),b=!1,X(w)}}}function ft(i,e,s){let t;const l=it(1);return L(i,l,n=>s(0,t=n)),[t,l,()=>{T(l,t=0,t)},()=>{T(l,t=20,t)}]}class pt extends P{constructor(e){super(),V(this,e,ft,dt,M,{})}}const _t=`<script>\r
	import { writable } from "svelte/store";\r
	const value = writable(1);\r
<\/script>\r
\r
<pre>{JSON.stringify($value, null, 2)}</pre>\r
\r
<div class="buttons">\r
\r
  \r
  <button\r
	on:click={() => {\r
    $value = 0;\r
	}}>0</button>\r
<button\r
on:click={() => {\r
  $value = 20;\r
}}>20</button>\r
\r
</div>\r
<style>\r
	.buttons {\r
		margin: 18px 0;\r
	}\r
</style>\r
`;function mt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,l,r,o,n="0",c,u,p="20",b,w;return{c(){e=m("pre"),t=S(s),l=k(),r=m("div"),o=m("button"),o.textContent=n,c=k(),u=m("button"),u.textContent=p,this.h()},l(a){e=v(a,"PRE",{});var d=N(e);t=z(d,s),d.forEach(f),l=C(a),r=v(a,"DIV",{class:!0});var h=N(r);o=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(o)!=="svelte-13k0rex"&&(o.textContent=n),c=C(h),u=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(u)!=="svelte-u4d50z"&&(u.textContent=p),h.forEach(f),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(a,d){$(a,e,d),_(e,t),$(a,l,d),$(a,r,d),_(r,o),_(r,c),_(r,u),b||(w=[x(o,"click",i[2]),x(u,"click",i[3])],b=!0)},p(a,[d]){d&1&&s!==(s=JSON.stringify(a[0],null,2)+"")&&W(t,s)},i:B,o:B,d(a){a&&(f(e),f(l),f(r)),b=!1,X(w)}}}function vt(i,e,s){let t;const l=K(1);return L(i,l,n=>s(0,t=n)),[t,l,()=>{T(l,t=0,t)},()=>{T(l,t=20,t)}]}class ht extends P{constructor(e){super(),V(this,e,vt,mt,M,{})}}const $t=`<script>\r
  import { tweened } from "svelte/motion";\r
	const value = tweened(1);\r
<\/script>\r
\r
<pre>{JSON.stringify($value, null, 2)}</pre>\r
\r
<div class="buttons">\r
\r
  \r
  <button\r
	on:click={() => {\r
    $value = 0;\r
	}}>0</button>\r
<button\r
on:click={() => {\r
  $value = 20;\r
}}>20</button>\r
\r
</div>\r
<style>\r
	.buttons {\r
		margin: 18px 0;\r
	}\r
</style>\r
`;function bt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,l,r,o,n="0",c,u,p="{a: 100, b: 0, c: 30}",b,w;return{c(){e=m("pre"),t=S(s),l=k(),r=m("div"),o=m("button"),o.textContent=n,c=k(),u=m("button"),this.h()},l(a){e=v(a,"PRE",{});var d=N(e);t=z(d,s),d.forEach(f),l=C(a),r=v(a,"DIV",{class:!0});var h=N(r);o=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(o)!=="svelte-1b3yye0"&&(o.textContent=n),c=C(h),u=v(h,"BUTTON",{});var E=N(u);E.forEach(f),h.forEach(f),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(a,d){$(a,e,d),_(e,t),$(a,l,d),$(a,r,d),_(r,o),_(r,c),_(r,u),u.innerHTML=p,b||(w=[x(o,"click",i[2]),x(u,"click",i[3])],b=!0)},p(a,[d]){d&1&&s!==(s=JSON.stringify(a[0],null,2)+"")&&W(t,s)},i:B,o:B,d(a){a&&(f(e),f(l),f(r)),b=!1,X(w)}}}function gt(i,e,s){let t;const l=K({a:0,b:50,c:40},{duration:4e3});return L(i,l,n=>s(0,t=n)),[t,l,()=>{T(l,t=0,t)},()=>{T(l,t={a:100,b:0,c:30},t)}]}class wt extends P{constructor(e){super(),V(this,e,gt,bt,M,{})}}const kt=`<script>\r
	import { tweened } from "svelte/motion";\r
	const value = tweened({ a: 0, b: 50, c: 40 }, { duration: 4000 });\r
<\/script>\r
\r
<pre>{JSON.stringify($value, null, 2)}</pre>\r
\r
<div class="buttons">\r
	<button\r
		on:click={() => {\r
			$value = 0;\r
		}}>0</button>\r
	<button\r
		on:click={() => {\r
			$value = { a: 100, b: 0, c: 30 };\r
		}}>{@html "{a: 100, b: 0, c: 30}"}</button>\r
</div>\r
\r
<style>\r
	.buttons {\r
		margin: 18px 0;\r
	}\r
</style>\r
`;function Ct(i){let e,s=JSON.stringify(i[0],null,2)+"",t,l,r,o,n="a",c,u,p="z",b,w;return{c(){e=m("pre"),t=S(s),l=k(),r=m("div"),o=m("button"),o.textContent=n,c=k(),u=m("button"),u.textContent=p,this.h()},l(a){e=v(a,"PRE",{});var d=N(e);t=z(d,s),d.forEach(f),l=C(a),r=v(a,"DIV",{class:!0});var h=N(r);o=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(o)!=="svelte-19sknzm"&&(o.textContent=n),c=C(h),u=v(h,"BUTTON",{["data-svelte-h"]:!0}),y(u)!=="svelte-1qskuyk"&&(u.textContent=p),h.forEach(f),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(a,d){$(a,e,d),_(e,t),$(a,l,d),$(a,r,d),_(r,o),_(r,c),_(r,u),b||(w=[x(o,"click",i[2]),x(u,"click",i[3])],b=!0)},p(a,[d]){d&1&&s!==(s=JSON.stringify(a[0],null,2)+"")&&W(t,s)},i:B,o:B,d(a){a&&(f(e),f(l),f(r)),b=!1,X(w)}}}function xt(i,e,s){let t;const l=K("a",{duration:4e3,interpolate:(n,c)=>u=>{const p=n.charCodeAt(0),w=(c.charCodeAt(0)-p)*u+p;return String.fromCharCode(Math.round(w))}});return L(i,l,n=>s(0,t=n)),[t,l,()=>{T(l,t="a",t)},()=>{T(l,t="z",t)}]}class yt extends P{constructor(e){super(),V(this,e,xt,Ct,M,{})}}const Tt=`<script>\r
	import { tweened } from "svelte/motion";\r
	const value = tweened("a",\r
		{\r
			duration: 4000,\r
			interpolate: (start, end) => (t) => {\r
				const startCode = start.charCodeAt(0);\r
				const endCode = end.charCodeAt(0);\r
				// if t is zero you get startCode\r
				// if t is 1 you get endCode\r
				// standard interpolation formula!\r
				const resultCode = (endCode - startCode) * t + startCode;\r
				return String.fromCharCode(Math.round(resultCode));\r
			},\r
		}\r
	);\r
<\/script>\r
\r
<pre>{JSON.stringify($value, null, 2)}</pre>\r
\r
<div class="buttons">\r
	<button\r
		on:click={() => {\r
			$value = "a";\r
		}}>a</button>\r
	<button\r
		on:click={() => {\r
			$value = "z";\r
		}}>z</button>\r
</div>\r
\r
<style>\r
	.buttons {\r
		margin: 18px 0;\r
	}\r
</style>\r
`;function Ot(i){let e,s,t,l,r="0",o,n,c="20",u,p,b="40",w,a,d="60",h,E,Q="80",Z,U,Y="100",F,tt;return{c(){e=m("div"),s=k(),t=m("div"),l=m("button"),l.textContent=r,o=k(),n=m("button"),n.textContent=c,u=k(),p=m("button"),p.textContent=b,w=k(),a=m("button"),a.textContent=d,h=k(),E=m("button"),E.textContent=Q,Z=k(),U=m("button"),U.textContent=Y,this.h()},l(O){e=v(O,"DIV",{style:!0}),N(e).forEach(f),s=C(O),t=v(O,"DIV",{class:!0});var g=N(t);l=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(l)!=="svelte-p0ujrh"&&(l.textContent=r),o=C(g),n=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(n)!=="svelte-q2i9if"&&(n.textContent=c),u=C(g),p=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(p)!=="svelte-11m8wcv"&&(p.textContent=b),w=C(g),a=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(a)!=="svelte-dsdrbj"&&(a.textContent=d),h=C(g),E=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(E)!=="svelte-4fvmt3"&&(E.textContent=Q),Z=C(g),U=v(g,"BUTTON",{["data-svelte-h"]:!0}),y(U)!=="svelte-1oj8pev"&&(U.textContent=Y),g.forEach(f),this.h()},h(){j(e,"height","50px"),j(e,"width","5px"),j(e,"background","red"),j(e,"transform-origin","left center"),j(e,"transform","scaleX("+i[0]+")"),H(t,"class","buttons svelte-zxcybq")},m(O,g){$(O,e,g),$(O,s,g),$(O,t,g),_(t,l),_(t,o),_(t,n),_(t,u),_(t,p),_(t,w),_(t,a),_(t,h),_(t,E),_(t,Z),_(t,U),F||(tt=[x(l,"click",i[2]),x(n,"click",i[3]),x(p,"click",i[4]),x(a,"click",i[5]),x(E,"click",i[6]),x(U,"click",i[7])],F=!0)},p(O,[g]){g&1&&j(e,"transform","scaleX("+O[0]+")")},i:B,o:B,d(O){O&&(f(e),f(s),f(t)),F=!1,X(tt)}}}function Nt(i,e,s){let t;const l=ct(1,{stiffness:.5,damping:.2});return L(i,l,b=>s(0,t=b)),[t,l,()=>l.set(0,{hard:!0}),()=>T(l,t=20,t),()=>T(l,t=40,t),()=>T(l,t=60,t),()=>T(l,t=80,t),()=>T(l,t=100,t)]}class St extends P{constructor(e){super(),V(this,e,Nt,Ot,M,{})}}const zt=`<script>\r
	import { spring } from "svelte/motion";\r
\r
	const value = spring(1, { stiffness: 0.5, damping: 0.2 });\r
<\/script>\r
\r
<div\r
	style="\r
height: 50px;\r
width: 5px;\r
background: red;\r
transform-origin: left center;\r
transform: scaleX({$value});\r
" />\r
<div class="buttons">\r
	<button on:click={() => value.set(0, { hard: true })}>0</button>\r
	<button on:click={() => ($value = 20)}>20</button>\r
	<button on:click={() => ($value = 40)}>40</button>\r
	<button on:click={() => ($value = 60)}>60</button>\r
	<button on:click={() => ($value = 80)}>80</button>\r
	<button on:click={() => ($value = 100)}>100</button>\r
</div>\r
\r
<style>\r
	.buttons {\r
		margin: 18px 0;\r
	}\r
</style>\r
`;function Bt(i){let e;return{c(){e=S("tweened()")},l(s){e=z(s,"tweened()")},m(s,t){$(s,e,t)},d(s){s&&f(e)}}}function Et(i){let e;return{c(){e=S("spring()")},l(s){e=z(s,"spring()")},m(s,t){$(s,e,t)},d(s){s&&f(e)}}}function Ut(i){let e,s,t,l,r,o;return s=new st({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),l=new st({props:{$$slots:{default:[Et]},$$scope:{ctx:i}}}),{c(){e=S("In addition to "),I(s.$$.fragment),t=S(" there's also "),I(l.$$.fragment),r=S(". Let's see the differences between them!")},l(n){e=z(n,"In addition to "),J(s.$$.fragment,n),t=z(n," there's also "),J(l.$$.fragment,n),r=z(n,". Let's see the differences between them!")},m(n,c){$(n,e,c),A(s,n,c),$(n,t,c),A(l,n,c),$(n,r,c),o=!0},p(n,c){const u={};c&2&&(u.$$scope={dirty:c,ctx:n}),s.$set(u);const p={};c&2&&(p.$$scope={dirty:c,ctx:n}),l.$set(p)},i(n){o||(R(s.$$.fragment,n),R(l.$$.fragment,n),o=!0)},o(n){q(s.$$.fragment,n),q(l.$$.fragment,n),o=!1},d(n){n&&(f(e),f(t),f(r)),D(s,n),D(l,n)}}}function jt(i){let e;return{c(){e=S("As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},l(s){e=z(s,"As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},m(s,t){$(s,e,t)},d(s){s&&f(e)}}}function It(i){let e,s,t,l,r,o;return e=new rt({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),t=new ut({props:{name:[{name:"App",comp:pt,raw:_t,text:"Here is our starting point with no tweening or spring. The value changes instantly."},{name:"Tweened",comp:ht,raw:$t,text:"Here we use tweened(). The value smoothly changes."},{name:"TweenedObject",comp:wt,raw:kt,text:"We can also tween values in objects and arrays. Here's an example with an object. Of course nested objects/arrays/values works too."},{name:"TweenedInterpolate",comp:yt,raw:Tt,text:"We can not tween strings by default, however if we implement an interpolate function we can do that too."},{name:"Spring",comp:St,raw:zt,text:"By using the stiffness and damping properties we can customize the behavior of our spring. We can also use value.set() with a second parameter of {hard: true} in order to instantly switch to the value if we want to."}]}}),r=new rt({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),{c(){I(e.$$.fragment),s=k(),I(t.$$.fragment),l=k(),I(r.$$.fragment)},l(n){J(e.$$.fragment,n),s=C(n),J(t.$$.fragment,n),l=C(n),J(r.$$.fragment,n)},m(n,c){A(e,n,c),$(n,s,c),A(t,n,c),$(n,l,c),A(r,n,c),o=!0},p(n,c){const u={};c&2&&(u.$$scope={dirty:c,ctx:n}),e.$set(u);const p={};c&2&&(p.$$scope={dirty:c,ctx:n}),r.$set(p)},i(n){o||(R(e.$$.fragment,n),R(t.$$.fragment,n),R(r.$$.fragment,n),o=!0)},o(n){q(e.$$.fragment,n),q(t.$$.fragment,n),q(r.$$.fragment,n),o=!1},d(n){n&&(f(s),f(l)),D(e,n),D(t,n),D(r,n)}}}function Jt(i){let e,s;const t=[i[0],lt];let l={$$slots:{default:[It]},$$scope:{ctx:i}};for(let r=0;r<t.length;r+=1)l=G(l,t[r]);return e=new at({props:l}),{c(){I(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,o){A(e,r,o),s=!0},p(r,[o]){const n=o&1?ot(t,[o&1&&nt(r[0]),o&0&&nt(lt)]):{};o&2&&(n.$$scope={dirty:o,ctx:r}),e.$set(n)},i(r){s||(R(e.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),s=!1},d(r){D(e,r)}}}const lt={title:"tweened() and spring()",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-27T00:00:00.000Z",layout:"notes"};function At(i,e,s){return i.$$set=t=>{s(0,e=G(G({},e),et(t)))},e=et(e),[e]}class Wt extends P{constructor(e){super(),V(this,e,At,Jt,M,{})}}export{Wt as default,lt as metadata};
