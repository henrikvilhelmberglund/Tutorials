import{S as M,i as V,s as P,k as m,q as h,a as E,l as v,m as $,r as w,h as c,c as N,n as H,b as g,D as d,R as C,u as X,H as U,V as L,I as W,an as B,p as I,J as G,y as J,z as A,A as R,K as ft,L as lt,g as j,d as q,B as D,M as at}from"./index.5815ca79.js";import{M as dt,P as it}from"./mdsvex-layout-notes.7536afaf.js";import{w as pt}from"./index.522bc5dc.js";import{t as Q,s as _t}from"./index.4b5027c9.js";import{S as mt}from"./ShowMany.2af9ac15.js";import{S as ct}from"./Strong.b8abec16.js";function vt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,o,r,a,n,u,f,_,k,O;return{c(){e=m("pre"),t=h(s),o=E(),r=m("div"),a=m("button"),n=h("0"),u=E(),f=m("button"),_=h("20"),this.h()},l(l){e=v(l,"PRE",{});var p=$(e);t=w(p,s),p.forEach(c),o=N(l),r=v(l,"DIV",{class:!0});var b=$(r);a=v(b,"BUTTON",{});var y=$(a);n=w(y,"0"),y.forEach(c),u=N(b),f=v(b,"BUTTON",{});var S=$(f);_=w(S,"20"),S.forEach(c),b.forEach(c),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(l,p){g(l,e,p),d(e,t),g(l,o,p),g(l,r,p),d(r,a),d(a,n),d(r,u),d(r,f),d(f,_),k||(O=[C(a,"click",i[2]),C(f,"click",i[3])],k=!0)},p(l,[p]){p&1&&s!==(s=JSON.stringify(l[0],null,2)+"")&&X(t,s)},i:U,o:U,d(l){l&&c(e),l&&c(o),l&&c(r),k=!1,L(O)}}}function $t(i,e,s){let t;const o=pt(1);return W(i,o,n=>s(0,t=n)),[t,o,()=>{B(o,t=0,t)},()=>{B(o,t=20,t)}]}class bt extends M{constructor(e){super(),V(this,e,$t,vt,P,{})}}const ht=`<script>\r
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
`;function wt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,o,r,a,n,u,f,_,k,O;return{c(){e=m("pre"),t=h(s),o=E(),r=m("div"),a=m("button"),n=h("0"),u=E(),f=m("button"),_=h("20"),this.h()},l(l){e=v(l,"PRE",{});var p=$(e);t=w(p,s),p.forEach(c),o=N(l),r=v(l,"DIV",{class:!0});var b=$(r);a=v(b,"BUTTON",{});var y=$(a);n=w(y,"0"),y.forEach(c),u=N(b),f=v(b,"BUTTON",{});var S=$(f);_=w(S,"20"),S.forEach(c),b.forEach(c),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(l,p){g(l,e,p),d(e,t),g(l,o,p),g(l,r,p),d(r,a),d(a,n),d(r,u),d(r,f),d(f,_),k||(O=[C(a,"click",i[2]),C(f,"click",i[3])],k=!0)},p(l,[p]){p&1&&s!==(s=JSON.stringify(l[0],null,2)+"")&&X(t,s)},i:U,o:U,d(l){l&&c(e),l&&c(o),l&&c(r),k=!1,L(O)}}}function gt(i,e,s){let t;const o=Q(1);return W(i,o,n=>s(0,t=n)),[t,o,()=>{B(o,t=0,t)},()=>{B(o,t=20,t)}]}class kt extends M{constructor(e){super(),V(this,e,gt,wt,P,{})}}const yt=`<script>\r
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
`;function Tt(i){let e,s=JSON.stringify(i[0],null,2)+"",t,o,r,a,n,u,f,_="{a: 100, b: 0, c: 30}",k,O;return{c(){e=m("pre"),t=h(s),o=E(),r=m("div"),a=m("button"),n=h("0"),u=E(),f=m("button"),this.h()},l(l){e=v(l,"PRE",{});var p=$(e);t=w(p,s),p.forEach(c),o=N(l),r=v(l,"DIV",{class:!0});var b=$(r);a=v(b,"BUTTON",{});var y=$(a);n=w(y,"0"),y.forEach(c),u=N(b),f=v(b,"BUTTON",{});var S=$(f);S.forEach(c),b.forEach(c),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(l,p){g(l,e,p),d(e,t),g(l,o,p),g(l,r,p),d(r,a),d(a,n),d(r,u),d(r,f),f.innerHTML=_,k||(O=[C(a,"click",i[2]),C(f,"click",i[3])],k=!0)},p(l,[p]){p&1&&s!==(s=JSON.stringify(l[0],null,2)+"")&&X(t,s)},i:U,o:U,d(l){l&&c(e),l&&c(o),l&&c(r),k=!1,L(O)}}}function Ot(i,e,s){let t;const o=Q({a:0,b:50,c:40},{duration:4e3});return W(i,o,n=>s(0,t=n)),[t,o,()=>{B(o,t=0,t)},()=>{B(o,t={a:100,b:0,c:30},t)}]}class Et extends M{constructor(e){super(),V(this,e,Ot,Tt,P,{})}}const Nt=`<script>\r
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
`;function St(i){let e,s=JSON.stringify(i[0],null,2)+"",t,o,r,a,n,u,f,_,k,O;return{c(){e=m("pre"),t=h(s),o=E(),r=m("div"),a=m("button"),n=h("a"),u=E(),f=m("button"),_=h("z"),this.h()},l(l){e=v(l,"PRE",{});var p=$(e);t=w(p,s),p.forEach(c),o=N(l),r=v(l,"DIV",{class:!0});var b=$(r);a=v(b,"BUTTON",{});var y=$(a);n=w(y,"a"),y.forEach(c),u=N(b),f=v(b,"BUTTON",{});var S=$(f);_=w(S,"z"),S.forEach(c),b.forEach(c),this.h()},h(){H(r,"class","buttons svelte-zxcybq")},m(l,p){g(l,e,p),d(e,t),g(l,o,p),g(l,r,p),d(r,a),d(a,n),d(r,u),d(r,f),d(f,_),k||(O=[C(a,"click",i[2]),C(f,"click",i[3])],k=!0)},p(l,[p]){p&1&&s!==(s=JSON.stringify(l[0],null,2)+"")&&X(t,s)},i:U,o:U,d(l){l&&c(e),l&&c(o),l&&c(r),k=!1,L(O)}}}function Ct(i,e,s){let t;const o=Q("a",{duration:4e3,interpolate:(n,u)=>f=>{const _=n.charCodeAt(0),O=(u.charCodeAt(0)-_)*f+_;return String.fromCharCode(Math.round(O))}});return W(i,o,n=>s(0,t=n)),[t,o,()=>{B(o,t="a",t)},()=>{B(o,t="z",t)}]}class xt extends M{constructor(e){super(),V(this,e,Ct,St,P,{})}}const Bt=`<script>\r
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
`;function Ut(i){let e,s,t,o,r,a,n,u,f,_,k,O,l,p,b,y,S,K,z,Z,F,Y;return{c(){e=m("div"),s=E(),t=m("div"),o=m("button"),r=h("0"),a=E(),n=m("button"),u=h("20"),f=E(),_=m("button"),k=h("40"),O=E(),l=m("button"),p=h("60"),b=E(),y=m("button"),S=h("80"),K=E(),z=m("button"),Z=h("100"),this.h()},l(x){e=v(x,"DIV",{style:!0}),$(e).forEach(c),s=N(x),t=v(x,"DIV",{class:!0});var T=$(t);o=v(T,"BUTTON",{});var tt=$(o);r=w(tt,"0"),tt.forEach(c),a=N(T),n=v(T,"BUTTON",{});var et=$(n);u=w(et,"20"),et.forEach(c),f=N(T),_=v(T,"BUTTON",{});var nt=$(_);k=w(nt,"40"),nt.forEach(c),O=N(T),l=v(T,"BUTTON",{});var rt=$(l);p=w(rt,"60"),rt.forEach(c),b=N(T),y=v(T,"BUTTON",{});var st=$(y);S=w(st,"80"),st.forEach(c),K=N(T),z=v(T,"BUTTON",{});var ot=$(z);Z=w(ot,"100"),ot.forEach(c),T.forEach(c),this.h()},h(){I(e,"height","50px"),I(e,"width","5px"),I(e,"background","red"),I(e,"transform-origin","left center"),I(e,"transform","scaleX("+i[0]+")"),H(t,"class","buttons svelte-zxcybq")},m(x,T){g(x,e,T),g(x,s,T),g(x,t,T),d(t,o),d(o,r),d(t,a),d(t,n),d(n,u),d(t,f),d(t,_),d(_,k),d(t,O),d(t,l),d(l,p),d(t,b),d(t,y),d(y,S),d(t,K),d(t,z),d(z,Z),F||(Y=[C(o,"click",i[2]),C(n,"click",i[3]),C(_,"click",i[4]),C(l,"click",i[5]),C(y,"click",i[6]),C(z,"click",i[7])],F=!0)},p(x,[T]){T&1&&I(e,"transform","scaleX("+x[0]+")")},i:U,o:U,d(x){x&&c(e),x&&c(s),x&&c(t),F=!1,L(Y)}}}function zt(i,e,s){let t;const o=_t(1,{stiffness:.5,damping:.2});return W(i,o,k=>s(0,t=k)),[t,o,()=>o.set(0,{hard:!0}),()=>B(o,t=20,t),()=>B(o,t=40,t),()=>B(o,t=60,t),()=>B(o,t=80,t),()=>B(o,t=100,t)]}class It extends M{constructor(e){super(),V(this,e,zt,Ut,P,{})}}const Jt=`<script>\r
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
`;function At(i){let e;return{c(){e=h("tweened()")},l(s){e=w(s,"tweened()")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function Rt(i){let e;return{c(){e=h("spring()")},l(s){e=w(s,"spring()")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function jt(i){let e,s,t,o,r,a;return s=new ct({props:{$$slots:{default:[At]},$$scope:{ctx:i}}}),o=new ct({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){e=h("In addition to "),J(s.$$.fragment),t=h(" there's also "),J(o.$$.fragment),r=h(". Let's see the differences between them!")},l(n){e=w(n,"In addition to "),A(s.$$.fragment,n),t=w(n," there's also "),A(o.$$.fragment,n),r=w(n,". Let's see the differences between them!")},m(n,u){g(n,e,u),R(s,n,u),g(n,t,u),R(o,n,u),g(n,r,u),a=!0},p(n,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:n}),s.$set(f);const _={};u&2&&(_.$$scope={dirty:u,ctx:n}),o.$set(_)},i(n){a||(j(s.$$.fragment,n),j(o.$$.fragment,n),a=!0)},o(n){q(s.$$.fragment,n),q(o.$$.fragment,n),a=!1},d(n){n&&c(e),D(s,n),n&&c(t),D(o,n),n&&c(r)}}}function qt(i){let e;return{c(){e=h("As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},l(s){e=w(s,"As you can see tweened() is great when we want a value to animate smoothly instead of switching instantly.")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function Dt(i){let e,s,t,o,r,a;return e=new it({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),t=new mt({props:{name:[{name:"App",comp:bt,raw:ht,text:"Here is our starting point with no tweening or spring. The value changes instantly."},{name:"Tweened",comp:kt,raw:yt,text:"Here we use tweened(). The value smoothly changes."},{name:"TweenedObject",comp:Et,raw:Nt,text:"We can also tween values in objects and arrays. Here's an example with an object. Of course nested objects/arrays/values works too."},{name:"TweenedInterpolate",comp:xt,raw:Bt,text:"We can not tween strings by default, however if we implement an interpolate function we can do that too."},{name:"Spring",comp:It,raw:Jt,text:"By using the stiffness and damping properties we can customize the behavior of our spring. We can also use value.set() with a second parameter of {hard: true} in order to instantly switch to the value if we want to."}]}}),r=new it({props:{$$slots:{default:[qt]},$$scope:{ctx:i}}}),{c(){J(e.$$.fragment),s=E(),J(t.$$.fragment),o=E(),J(r.$$.fragment)},l(n){A(e.$$.fragment,n),s=N(n),A(t.$$.fragment,n),o=N(n),A(r.$$.fragment,n)},m(n,u){R(e,n,u),g(n,s,u),R(t,n,u),g(n,o,u),R(r,n,u),a=!0},p(n,u){const f={};u&2&&(f.$$scope={dirty:u,ctx:n}),e.$set(f);const _={};u&2&&(_.$$scope={dirty:u,ctx:n}),r.$set(_)},i(n){a||(j(e.$$.fragment,n),j(t.$$.fragment,n),j(r.$$.fragment,n),a=!0)},o(n){q(e.$$.fragment,n),q(t.$$.fragment,n),q(r.$$.fragment,n),a=!1},d(n){D(e,n),n&&c(s),D(t,n),n&&c(o),D(r,n)}}}function Mt(i){let e,s;const t=[i[0],ut];let o={$$slots:{default:[Dt]},$$scope:{ctx:i}};for(let r=0;r<t.length;r+=1)o=G(o,t[r]);return e=new dt({props:o}),{c(){J(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,a){R(e,r,a),s=!0},p(r,[a]){const n=a&1?ft(t,[a&1&&lt(r[0]),a&0&&lt(ut)]):{};a&2&&(n.$$scope={dirty:a,ctx:r}),e.$set(n)},i(r){s||(j(e.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),s=!1},d(r){D(e,r)}}}const ut={title:"tweened() and spring()",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-27T00:00:00.000Z",layout:"notes"};function Vt(i,e,s){return i.$$set=t=>{s(0,e=G(G({},e),at(t)))},e=at(e),[e]}class Zt extends M{constructor(e){super(),V(this,e,Vt,Mt,P,{})}}export{Zt as default,ut as metadata};
