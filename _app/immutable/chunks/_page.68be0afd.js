import{S as q,i as z,s as J,k as A,a as E,l as H,c as y,m as j,h as a,n as U,b as c,a2 as x,P as V,aa as G,aq as B,W as Q,H as O,T as mt,o as $t,w as tt,J as et,y as h,z as v,A as k,K as _t,L as at,g as T,d as g,B as L,M as ct,q as b,r as d}from"./index.37298988.js";import{M as wt,P as N}from"./mdsvex-layout-notes.28d092d4.js";import{S as X}from"./ShowMany.1ce9c697.js";import{S as R}from"./Strong.b6d58cbc.js";function bt(i){let t,e,r,l,n,u;return{c(){t=A("input"),e=E(),r=A("button"),this.h()},l(o){t=H(o,"INPUT",{type:!0,id:!0}),e=y(o),r=H(o,"BUTTON",{}),j(r).forEach(a),this.h()},h(){U(t,"type","number"),U(t,"id","")},m(o,f){c(o,t,f),x(t,i[0]),c(o,e,f),c(o,r,f),n||(u=[V(t,"input",i[1]),G(l=dt.call(null,r,i[0]))],n=!0)},p(o,[f]){f&1&&B(t.value)!==o[0]&&x(t,o[0]),l&&Q(l.update)&&f&1&&l.update.call(null,o[0])},i:O,o:O,d(o){o&&a(t),o&&a(e),o&&a(r),n=!1,mt(u)}}}function dt(i,t=1){let e=0;r();function r(){i.innerHTML=e}function l(){e+=t,r()}return i.addEventListener("click",l),{update(n){t=n},destroy(){i.removeEventListener("click",l)}}}function ht(i,t,e){let r=1;function l(){r=B(this.value),e(0,r)}return[r,l]}class vt extends q{constructor(t){super(),z(this,t,ht,bt,J,{})}}const kt=`<script>\r
	let num = 1;\r
\r
  \r
	function counter(element, increment = 1) {\r
		let count = 0;\r
		updateText();\r
\r
		function updateText() {\r
			element.innerHTML = count;\r
		}\r
		function onClick() {\r
			count += increment;\r
			updateText();\r
		}\r
\r
		element.addEventListener("click", onClick);\r
\r
		return {\r
			update(newIncrement) {\r
				increment = newIncrement;\r
			},\r
			destroy() {\r
				element.removeEventListener("click", onClick);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input type="number" bind:value={num} id="" />\r
<button use:counter={num} />\r
\r
<style>\r
</style>\r
`;function Tt(i){let t,e,r,l,n;return{c(){t=A("input"),e=E(),r=A("button"),this.h()},l(u){t=H(u,"INPUT",{type:!0,id:!0}),e=y(u),r=H(u,"BUTTON",{}),j(r).forEach(a),this.h()},h(){U(t,"type","number"),U(t,"id","")},m(u,o){c(u,t,o),x(t,i[0]),c(u,e,o),c(u,r,o),i[3](r),l||(n=V(t,"input",i[2]),l=!0)},p(u,[o]){o&1&&B(t.value)!==u[0]&&x(t,u[0])},i:O,o:O,d(u){u&&a(t),u&&a(e),u&&a(r),i[3](null),l=!1,n()}}}function gt(i,t,e){let r,l=1,n;$t(()=>{let f=0;_();function $(){f+=r,_()}function _(){e(1,n.innerHTML=f,n)}return n.addEventListener("click",$),()=>{n.removeEventListener("click",$)}});function u(){l=B(this.value),e(0,l)}function o(f){tt[f?"unshift":"push"](()=>{n=f,e(1,n)})}return i.$$.update=()=>{i.$$.dirty&1&&(r=l)},[l,n,u,o]}class Lt extends q{constructor(t){super(),z(this,t,gt,Tt,J,{})}}const Et=`<script>\r
	import { onMount } from "svelte";\r
	let num = 1;\r
\r
	let button;\r
\r
	$: increment = num;\r
\r
	onMount(() => {\r
		let count = 0;\r
		updateText();\r
		function onClick() {\r
			count += increment;\r
			updateText();\r
		}\r
		function updateText() {\r
			button.innerHTML = count;\r
		}\r
		button.addEventListener("click", onClick);\r
		return () => {\r
			button.removeEventListener("click", onClick);\r
		};\r
	});\r
<\/script>\r
\r
<input type="number" bind:value={num} id="" />\r
<button bind:this={button} />\r
\r
<style>\r
</style>\r
`;function yt(i){let t,e,r,l,n,u,o,f,$,_,C,I;return{c(){t=A("input"),e=E(),r=A("button"),n=E(),u=A("button"),f=E(),$=A("button"),this.h()},l(p){t=H(p,"INPUT",{type:!0,id:!0}),e=y(p),r=H(p,"BUTTON",{}),j(r).forEach(a),n=y(p),u=H(p,"BUTTON",{}),j(u).forEach(a),f=y(p),$=H(p,"BUTTON",{}),j($).forEach(a),this.h()},h(){U(t,"type","number"),U(t,"id","")},m(p,w){c(p,t,w),x(t,i[0]),c(p,e,w),c(p,r,w),c(p,n,w),c(p,u,w),c(p,f,w),c(p,$,w),C||(I=[V(t,"input",i[1]),G(l=Y.call(null,r,i[0])),G(o=Y.call(null,u,i[0])),G(_=Y.call(null,$,i[0]))],C=!0)},p(p,[w]){w&1&&B(t.value)!==p[0]&&x(t,p[0]),l&&Q(l.update)&&w&1&&l.update.call(null,p[0]),o&&Q(o.update)&&w&1&&o.update.call(null,p[0]),_&&Q(_.update)&&w&1&&_.update.call(null,p[0])},i:O,o:O,d(p){p&&a(t),p&&a(e),p&&a(r),p&&a(n),p&&a(u),p&&a(f),p&&a($),C=!1,mt(I)}}}function Y(i,t=1){let e=0;r();function r(){i.innerHTML=e}function l(){e+=t,r()}return i.addEventListener("click",l),{update(n){t=n},destroy(){i.removeEventListener("click",l)}}}function Ct(i,t,e){let r=1;function l(){r=B(this.value),e(0,r)}return[r,l]}class Mt extends q{constructor(t){super(),z(this,t,Ct,yt,J,{})}}const At=`<script>\r
	let num = 1;\r
\r
  \r
	function counter(element, increment = 1) {\r
		let count = 0;\r
		updateText();\r
\r
		function updateText() {\r
			element.innerHTML = count;\r
		}\r
		function onClick() {\r
			count += increment;\r
			updateText();\r
		}\r
\r
		element.addEventListener("click", onClick);\r
\r
		return {\r
			update(newIncrement) {\r
				increment = newIncrement;\r
			},\r
			destroy() {\r
				element.removeEventListener("click", onClick);\r
			},\r
		};\r
	}\r
<\/script>\r
\r
<input type="number" bind:value={num} id="" />\r
<button use:counter={num} />\r
<button use:counter={num} />\r
<button use:counter={num} />\r
\r
<style>\r
</style>\r
`;function Ht(i){let t,e,r,l,n,u,o;return{c(){t=A("input"),e=E(),r=A("button"),l=E(),n=A("button"),this.h()},l(f){t=H(f,"INPUT",{type:!0,id:!0}),e=y(f),r=H(f,"BUTTON",{}),j(r).forEach(a),l=y(f),n=H(f,"BUTTON",{}),j(n).forEach(a),this.h()},h(){U(t,"type","number"),U(t,"id","")},m(f,$){c(f,t,$),x(t,i[0]),c(f,e,$),c(f,r,$),i[4](r),c(f,l,$),c(f,n,$),i[5](n),u||(o=V(t,"input",i[3]),u=!0)},p(f,[$]){$&1&&B(t.value)!==f[0]&&x(t,f[0])},i:O,o:O,d(f){f&&a(t),f&&a(e),f&&a(r),i[4](null),f&&a(l),f&&a(n),i[5](null),u=!1,o()}}}function It(i,t,e){let r,l=1,n,u;$t(()=>{let _=0,C=0;w(),M();function I(){_+=r,w()}function p(){C+=r,M()}function w(){e(1,n.innerHTML=_,n)}function M(){e(2,u.innerHTML=C,u)}return n.addEventListener("click",I),u.addEventListener("click",p),()=>{n.removeEventListener("click",I),u.removeEventListener("click",p)}});function o(){l=B(this.value),e(0,l)}function f(_){tt[_?"unshift":"push"](()=>{n=_,e(1,n)})}function $(_){tt[_?"unshift":"push"](()=>{u=_,e(2,u)})}return i.$$.update=()=>{i.$$.dirty&1&&(r=l)},[l,n,u,o,f,$]}class St extends q{constructor(t){super(),z(this,t,It,Ht,J,{})}}const Wt=`<script>\r
	import { onMount } from "svelte";\r
	let num = 1;\r
\r
	let button;\r
	let button2;\r
\r
	$: increment = num;\r
\r
	onMount(() => {\r
		let count = 0;\r
		let count2 = 0;\r
		updateText();\r
		updateText2();\r
		function onClick() {\r
			count += increment;\r
			updateText();\r
		}\r
		function onClick2() {\r
			count2 += increment;\r
			updateText2();\r
		}\r
		function updateText() {\r
			button.innerHTML = count;\r
		}\r
		function updateText2() {\r
			button2.innerHTML = count2;\r
		}\r
		button.addEventListener("click", onClick);\r
		button2.addEventListener("click", onClick2);\r
		return () => {\r
			button.removeEventListener("click", onClick);\r
			button2.removeEventListener("click", onClick2);\r
		};\r
	});\r
<\/script>\r
\r
<input type="number" bind:value={num} id="" />\r
<button bind:this={button} />\r
<button bind:this={button2}  />\r
\r
<style>\r
</style>\r
`;function Nt(i){let t;return{c(){t=b("We can think of a hypothetical scenario where Svelte does not have the feature Svelte actions.")},l(e){t=d(e,"We can think of a hypothetical scenario where Svelte does not have the feature Svelte actions.")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Ut(i){let t;return{c(){t=b("Would this make what we want to do impossible? Or still possible, just harder?")},l(e){t=d(e,"Would this make what we want to do impossible? Or still possible, just harder?")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function xt(i){let t;return{c(){t=b("enabling")},l(e){t=d(e,"enabling")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Ot(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){t=b("In the first case we can think of the feature as an "),h(e.$$.fragment),r=b(" feature where it allows us to do something new.")},l(n){t=d(n,"In the first case we can think of the feature as an "),v(e.$$.fragment,n),r=d(n," feature where it allows us to do something new.")},m(n,u){c(n,t,u),k(e,n,u),c(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){n&&a(t),L(e,n),n&&a(r)}}}function Bt(i){let t;return{c(){t=b("facilitating")},l(e){t=d(e,"facilitating")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Pt(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),{c(){t=b("In the second case we can think of the feature as an "),h(e.$$.fragment),r=b(" feature where it helps us do something that could already be done in an easier way.")},l(n){t=d(n,"In the second case we can think of the feature as an "),v(e.$$.fragment,n),r=d(n," feature where it helps us do something that could already be done in an easier way.")},m(n,u){c(n,t,u),k(e,n,u),c(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){n&&a(t),L(e,n),n&&a(r)}}}function jt(i){let t;return{c(){t=b("several elements with actions")},l(e){t=d(e,"several elements with actions")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Rt(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),{c(){t=b("We might want to have "),h(e.$$.fragment),r=b(". See this:")},l(n){t=d(n,"We might want to have "),v(e.$$.fragment,n),r=d(n,". See this:")},m(n,u){c(n,t,u),k(e,n,u),c(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){n&&a(t),L(e,n),n&&a(r)}}}function qt(i){let t;return{c(){t=b("How would we do this without actions? Let's see.")},l(e){t=d(e,"How would we do this without actions? Let's see.")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function zt(i){let t;return{c(){t=b("encapsulate")},l(e){t=d(e,"encapsulate")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Jt(i){let t;return{c(){t=b("are scoped to each element")},l(e){t=d(e,"are scoped to each element")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Kt(i){let t,e,r,l,n,u;return e=new R({props:{$$slots:{default:[zt]},$$scope:{ctx:i}}}),l=new R({props:{$$slots:{default:[Jt]},$$scope:{ctx:i}}}),{c(){t=b("We can see that a major benefit of actions is that they "),h(e.$$.fragment),r=b(" the function and create new instances of the function that "),h(l.$$.fragment),n=b(".")},l(o){t=d(o,"We can see that a major benefit of actions is that they "),v(e.$$.fragment,o),r=d(o," the function and create new instances of the function that "),v(l.$$.fragment,o),n=d(o,".")},m(o,f){c(o,t,f),k(e,o,f),c(o,r,f),k(l,o,f),c(o,n,f),u=!0},p(o,f){const $={};f&2&&($.$$scope={dirty:f,ctx:o}),e.$set($);const _={};f&2&&(_.$$scope={dirty:f,ctx:o}),l.$set(_)},i(o){u||(T(e.$$.fragment,o),T(l.$$.fragment,o),u=!0)},o(o){g(e.$$.fragment,o),g(l.$$.fragment,o),u=!1},d(o){o&&a(t),L(e,o),o&&a(r),L(l,o),o&&a(n)}}}function Zt(i){let t;return{c(){t=b("easily reuse actions")},l(e){t=d(e,"easily reuse actions")},m(e,r){c(e,t,r)},d(e){e&&a(t)}}}function Dt(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){t=b("This means that we can "),h(e.$$.fragment),r=b(" without creating extra variables/functions for each element.")},l(n){t=d(n,"This means that we can "),v(e.$$.fragment,n),r=d(n," without creating extra variables/functions for each element.")},m(n,u){c(n,t,u),k(e,n,u),c(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(T(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){n&&a(t),L(e,n),n&&a(r)}}}function Ft(i){let t,e,r,l,n,u,o,f,$,_,C,I,p,w,M,K,P,Z,S,D,W,F;return t=new N({props:{$$slots:{default:[Nt]},$$scope:{ctx:i}}}),r=new N({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),n=new N({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),o=new N({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),$=new X({props:{name:[{name:"App",comp:vt,raw:kt,text:"Here is our demo app using actions. In App2, let's rewrite it without actions."},{name:"App2",comp:Lt,raw:Et,text:"Here is our demo app without actions. As you can see it works. What's the point of actions then?"}]}}),C=new N({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),p=new X({props:{name:[{name:"App3",comp:Mt,raw:At,text:"We've got multiple buttons with the same action and it still works."}]}}),M=new N({props:{$$slots:{default:[qt]},$$scope:{ctx:i}}}),P=new X({props:{name:[{name:"App4",comp:St,raw:Wt,text:"This works but is really ugly since we had to duplicate a lot of things."}]}}),S=new N({props:{$$slots:{default:[Kt]},$$scope:{ctx:i}}}),W=new N({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment),e=E(),h(r.$$.fragment),l=E(),h(n.$$.fragment),u=E(),h(o.$$.fragment),f=E(),h($.$$.fragment),_=E(),h(C.$$.fragment),I=E(),h(p.$$.fragment),w=E(),h(M.$$.fragment),K=E(),h(P.$$.fragment),Z=E(),h(S.$$.fragment),D=E(),h(W.$$.fragment)},l(s){v(t.$$.fragment,s),e=y(s),v(r.$$.fragment,s),l=y(s),v(n.$$.fragment,s),u=y(s),v(o.$$.fragment,s),f=y(s),v($.$$.fragment,s),_=y(s),v(C.$$.fragment,s),I=y(s),v(p.$$.fragment,s),w=y(s),v(M.$$.fragment,s),K=y(s),v(P.$$.fragment,s),Z=y(s),v(S.$$.fragment,s),D=y(s),v(W.$$.fragment,s)},m(s,m){k(t,s,m),c(s,e,m),k(r,s,m),c(s,l,m),k(n,s,m),c(s,u,m),k(o,s,m),c(s,f,m),k($,s,m),c(s,_,m),k(C,s,m),c(s,I,m),k(p,s,m),c(s,w,m),k(M,s,m),c(s,K,m),k(P,s,m),c(s,Z,m),k(S,s,m),c(s,D,m),k(W,s,m),F=!0},p(s,m){const nt={};m&2&&(nt.$$scope={dirty:m,ctx:s}),t.$set(nt);const rt={};m&2&&(rt.$$scope={dirty:m,ctx:s}),r.$set(rt);const st={};m&2&&(st.$$scope={dirty:m,ctx:s}),n.$set(st);const ut={};m&2&&(ut.$$scope={dirty:m,ctx:s}),o.$set(ut);const ot={};m&2&&(ot.$$scope={dirty:m,ctx:s}),C.$set(ot);const it={};m&2&&(it.$$scope={dirty:m,ctx:s}),M.$set(it);const lt={};m&2&&(lt.$$scope={dirty:m,ctx:s}),S.$set(lt);const ft={};m&2&&(ft.$$scope={dirty:m,ctx:s}),W.$set(ft)},i(s){F||(T(t.$$.fragment,s),T(r.$$.fragment,s),T(n.$$.fragment,s),T(o.$$.fragment,s),T($.$$.fragment,s),T(C.$$.fragment,s),T(p.$$.fragment,s),T(M.$$.fragment,s),T(P.$$.fragment,s),T(S.$$.fragment,s),T(W.$$.fragment,s),F=!0)},o(s){g(t.$$.fragment,s),g(r.$$.fragment,s),g(n.$$.fragment,s),g(o.$$.fragment,s),g($.$$.fragment,s),g(C.$$.fragment,s),g(p.$$.fragment,s),g(M.$$.fragment,s),g(P.$$.fragment,s),g(S.$$.fragment,s),g(W.$$.fragment,s),F=!1},d(s){L(t,s),s&&a(e),L(r,s),s&&a(l),L(n,s),s&&a(u),L(o,s),s&&a(f),L($,s),s&&a(_),L(C,s),s&&a(I),L(p,s),s&&a(w),L(M,s),s&&a(K),L(P,s),s&&a(Z),L(S,s),s&&a(D),L(W,s)}}}function Gt(i){let t,e;const r=[i[0],pt];let l={$$slots:{default:[Ft]},$$scope:{ctx:i}};for(let n=0;n<r.length;n+=1)l=et(l,r[n]);return t=new wt({props:l}),{c(){h(t.$$.fragment)},l(n){v(t.$$.fragment,n)},m(n,u){k(t,n,u),e=!0},p(n,[u]){const o=u&1?_t(r,[u&1&&at(n[0]),u&0&&at(pt)]):{};u&2&&(o.$$scope={dirty:u,ctx:n}),t.$set(o)},i(n){e||(T(t.$$.fragment,n),e=!0)},o(n){g(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}const pt={title:"What if the Svelte action feature does not exist?",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function Qt(i,t,e){return i.$$set=r=>{e(0,t=et(et({},t),ct(r)))},t=ct(t),[t]}class ee extends q{constructor(t){super(),z(this,t,Qt,Gt,J,{})}}export{ee as default,pt as metadata};
