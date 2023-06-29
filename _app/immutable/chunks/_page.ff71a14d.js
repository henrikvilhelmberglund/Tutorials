import{s as q,f as H,a as E,g as A,c as y,h as P,d as a,j as W,i as f,a8 as x,X as Q,ae as J,am as B,I as K,z as O,H as mt,o as $t,p as tt,C as et,D as ct,l as h,m as b}from"./scheduler.a7cd560e.js";import{S as z,i as D,b as w,d as g,m as v,a as k,t as T,e as L}from"./index.396264e7.js";import{g as _t,a as ft}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as dt,P as U}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as V}from"./ShowMany.db7be1f3.js";import{S as R}from"./Strong.097578ae.js";function ht(i){let t,e,r,l,n,u;return{c(){t=H("input"),e=E(),r=H("button"),this.h()},l(o){t=A(o,"INPUT",{type:!0,id:!0}),e=y(o),r=A(o,"BUTTON",{}),P(r).forEach(a),this.h()},h(){W(t,"type","number"),W(t,"id","")},m(o,c){f(o,t,c),x(t,i[0]),f(o,e,c),f(o,r,c),n||(u=[Q(t,"input",i[1]),J(l=bt.call(null,r,i[0]))],n=!0)},p(o,[c]){c&1&&B(t.value)!==o[0]&&x(t,o[0]),l&&K(l.update)&&c&1&&l.update.call(null,o[0])},i:O,o:O,d(o){o&&(a(t),a(e),a(r)),n=!1,mt(u)}}}function bt(i,t=1){let e=0;r();function r(){i.innerHTML=e}function l(){e+=t,r()}return i.addEventListener("click",l),{update(n){t=n},destroy(){i.removeEventListener("click",l)}}}function wt(i,t,e){let r=1;function l(){r=B(this.value),e(0,r)}return[r,l]}class gt extends z{constructor(t){super(),D(this,t,wt,ht,q,{})}}const vt=`<script>\r
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
`;function kt(i){let t,e,r,l,n;return{c(){t=H("input"),e=E(),r=H("button"),this.h()},l(u){t=A(u,"INPUT",{type:!0,id:!0}),e=y(u),r=A(u,"BUTTON",{}),P(r).forEach(a),this.h()},h(){W(t,"type","number"),W(t,"id","")},m(u,o){f(u,t,o),x(t,i[0]),f(u,e,o),f(u,r,o),i[3](r),l||(n=Q(t,"input",i[2]),l=!0)},p(u,[o]){o&1&&B(t.value)!==u[0]&&x(t,u[0])},i:O,o:O,d(u){u&&(a(t),a(e),a(r)),i[3](null),l=!1,n()}}}function Tt(i,t,e){let r,l=1,n;$t(()=>{let c=0;_();function $(){c+=r,_()}function _(){e(1,n.innerHTML=c,n)}return n.addEventListener("click",$),()=>{n.removeEventListener("click",$)}});function u(){l=B(this.value),e(0,l)}function o(c){tt[c?"unshift":"push"](()=>{n=c,e(1,n)})}return i.$$.update=()=>{i.$$.dirty&1&&(r=l)},[l,n,u,o]}class Lt extends z{constructor(t){super(),D(this,t,Tt,kt,q,{})}}const Et=`<script>\r
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
`;function yt(i){let t,e,r,l,n,u,o,c,$,_,C,I;return{c(){t=H("input"),e=E(),r=H("button"),n=E(),u=H("button"),c=E(),$=H("button"),this.h()},l(m){t=A(m,"INPUT",{type:!0,id:!0}),e=y(m),r=A(m,"BUTTON",{}),P(r).forEach(a),n=y(m),u=A(m,"BUTTON",{}),P(u).forEach(a),c=y(m),$=A(m,"BUTTON",{}),P($).forEach(a),this.h()},h(){W(t,"type","number"),W(t,"id","")},m(m,d){f(m,t,d),x(t,i[0]),f(m,e,d),f(m,r,d),f(m,n,d),f(m,u,d),f(m,c,d),f(m,$,d),C||(I=[Q(t,"input",i[1]),J(l=Y.call(null,r,i[0])),J(o=Y.call(null,u,i[0])),J(_=Y.call(null,$,i[0]))],C=!0)},p(m,[d]){d&1&&B(t.value)!==m[0]&&x(t,m[0]),l&&K(l.update)&&d&1&&l.update.call(null,m[0]),o&&K(o.update)&&d&1&&o.update.call(null,m[0]),_&&K(_.update)&&d&1&&_.update.call(null,m[0])},i:O,o:O,d(m){m&&(a(t),a(e),a(r),a(n),a(u),a(c),a($)),C=!1,mt(I)}}}function Y(i,t=1){let e=0;r();function r(){i.innerHTML=e}function l(){e+=t,r()}return i.addEventListener("click",l),{update(n){t=n},destroy(){i.removeEventListener("click",l)}}}function Ct(i,t,e){let r=1;function l(){r=B(this.value),e(0,r)}return[r,l]}class Mt extends z{constructor(t){super(),D(this,t,Ct,yt,q,{})}}const Ht=`<script>\r
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
`;function At(i){let t,e,r,l,n,u,o;return{c(){t=H("input"),e=E(),r=H("button"),l=E(),n=H("button"),this.h()},l(c){t=A(c,"INPUT",{type:!0,id:!0}),e=y(c),r=A(c,"BUTTON",{}),P(r).forEach(a),l=y(c),n=A(c,"BUTTON",{}),P(n).forEach(a),this.h()},h(){W(t,"type","number"),W(t,"id","")},m(c,$){f(c,t,$),x(t,i[0]),f(c,e,$),f(c,r,$),i[4](r),f(c,l,$),f(c,n,$),i[5](n),u||(o=Q(t,"input",i[3]),u=!0)},p(c,[$]){$&1&&B(t.value)!==c[0]&&x(t,c[0])},i:O,o:O,d(c){c&&(a(t),a(e),a(r),a(l),a(n)),i[4](null),i[5](null),u=!1,o()}}}function It(i,t,e){let r,l=1,n,u;$t(()=>{let _=0,C=0;d(),M();function I(){_+=r,d()}function m(){C+=r,M()}function d(){e(1,n.innerHTML=_,n)}function M(){e(2,u.innerHTML=C,u)}return n.addEventListener("click",I),u.addEventListener("click",m),()=>{n.removeEventListener("click",I),u.removeEventListener("click",m)}});function o(){l=B(this.value),e(0,l)}function c(_){tt[_?"unshift":"push"](()=>{n=_,e(1,n)})}function $(_){tt[_?"unshift":"push"](()=>{u=_,e(2,u)})}return i.$$.update=()=>{i.$$.dirty&1&&(r=l)},[l,n,u,o,c,$]}class St extends z{constructor(t){super(),D(this,t,It,At,q,{})}}const Nt=`<script>\r
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
`;function Ut(i){let t;return{c(){t=h("We can think of a hypothetical scenario where Svelte does not have the feature Svelte actions.")},l(e){t=b(e,"We can think of a hypothetical scenario where Svelte does not have the feature Svelte actions.")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Wt(i){let t;return{c(){t=h("Would this make what we want to do impossible? Or still possible, just harder?")},l(e){t=b(e,"Would this make what we want to do impossible? Or still possible, just harder?")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function xt(i){let t;return{c(){t=h("enabling")},l(e){t=b(e,"enabling")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Ot(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){t=h("In the first case we can think of the feature as an "),w(e.$$.fragment),r=h(" feature where it allows us to do something new.")},l(n){t=b(n,"In the first case we can think of the feature as an "),g(e.$$.fragment,n),r=b(n," feature where it allows us to do something new.")},m(n,u){f(n,t,u),v(e,n,u),f(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){T(e.$$.fragment,n),l=!1},d(n){n&&(a(t),a(r)),L(e,n)}}}function Bt(i){let t;return{c(){t=h("facilitating")},l(e){t=b(e,"facilitating")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function jt(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),{c(){t=h("In the second case we can think of the feature as an "),w(e.$$.fragment),r=h(" feature where it helps us do something that could already be done in an easier way.")},l(n){t=b(n,"In the second case we can think of the feature as an "),g(e.$$.fragment,n),r=b(n," feature where it helps us do something that could already be done in an easier way.")},m(n,u){f(n,t,u),v(e,n,u),f(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){T(e.$$.fragment,n),l=!1},d(n){n&&(a(t),a(r)),L(e,n)}}}function Pt(i){let t;return{c(){t=h("several elements with actions")},l(e){t=b(e,"several elements with actions")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Rt(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),{c(){t=h("We might want to have "),w(e.$$.fragment),r=h(". See this:")},l(n){t=b(n,"We might want to have "),g(e.$$.fragment,n),r=b(n,". See this:")},m(n,u){f(n,t,u),v(e,n,u),f(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){T(e.$$.fragment,n),l=!1},d(n){n&&(a(t),a(r)),L(e,n)}}}function qt(i){let t;return{c(){t=h("How would we do this without actions? Let's see.")},l(e){t=b(e,"How would we do this without actions? Let's see.")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function zt(i){let t;return{c(){t=h("encapsulate")},l(e){t=b(e,"encapsulate")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Dt(i){let t;return{c(){t=h("are scoped to each element")},l(e){t=b(e,"are scoped to each element")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Xt(i){let t,e,r,l,n,u;return e=new R({props:{$$slots:{default:[zt]},$$scope:{ctx:i}}}),l=new R({props:{$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){t=h("We can see that a major benefit of actions is that they "),w(e.$$.fragment),r=h(" the function and create new instances of the function that "),w(l.$$.fragment),n=h(".")},l(o){t=b(o,"We can see that a major benefit of actions is that they "),g(e.$$.fragment,o),r=b(o," the function and create new instances of the function that "),g(l.$$.fragment,o),n=b(o,".")},m(o,c){f(o,t,c),v(e,o,c),f(o,r,c),v(l,o,c),f(o,n,c),u=!0},p(o,c){const $={};c&2&&($.$$scope={dirty:c,ctx:o}),e.$set($);const _={};c&2&&(_.$$scope={dirty:c,ctx:o}),l.$set(_)},i(o){u||(k(e.$$.fragment,o),k(l.$$.fragment,o),u=!0)},o(o){T(e.$$.fragment,o),T(l.$$.fragment,o),u=!1},d(o){o&&(a(t),a(r),a(n)),L(e,o),L(l,o)}}}function Zt(i){let t;return{c(){t=h("easily reuse actions")},l(e){t=b(e,"easily reuse actions")},m(e,r){f(e,t,r)},d(e){e&&a(t)}}}function Ft(i){let t,e,r,l;return e=new R({props:{$$slots:{default:[Zt]},$$scope:{ctx:i}}}),{c(){t=h("This means that we can "),w(e.$$.fragment),r=h(" without creating extra variables/functions for each element.")},l(n){t=b(n,"This means that we can "),g(e.$$.fragment,n),r=b(n," without creating extra variables/functions for each element.")},m(n,u){f(n,t,u),v(e,n,u),f(n,r,u),l=!0},p(n,u){const o={};u&2&&(o.$$scope={dirty:u,ctx:n}),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){T(e.$$.fragment,n),l=!1},d(n){n&&(a(t),a(r)),L(e,n)}}}function Gt(i){let t,e,r,l,n,u,o,c,$,_,C,I,m,d,M,X,j,Z,S,F,N,G;return t=new U({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}}}),r=new U({props:{$$slots:{default:[Wt]},$$scope:{ctx:i}}}),n=new U({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),o=new U({props:{$$slots:{default:[jt]},$$scope:{ctx:i}}}),$=new V({props:{name:[{name:"App",comp:gt,raw:vt,text:"Here is our demo app using actions. In App2, let's rewrite it without actions."},{name:"App2",comp:Lt,raw:Et,text:"Here is our demo app without actions. As you can see it works. What's the point of actions then?"}]}}),C=new U({props:{$$slots:{default:[Rt]},$$scope:{ctx:i}}}),m=new V({props:{name:[{name:"App3",comp:Mt,raw:Ht,text:"We've got multiple buttons with the same action and it still works."}]}}),M=new U({props:{$$slots:{default:[qt]},$$scope:{ctx:i}}}),j=new V({props:{name:[{name:"App4",comp:St,raw:Nt,text:"This works but is really ugly since we had to duplicate a lot of things."}]}}),S=new U({props:{$$slots:{default:[Xt]},$$scope:{ctx:i}}}),N=new U({props:{$$slots:{default:[Ft]},$$scope:{ctx:i}}}),{c(){w(t.$$.fragment),e=E(),w(r.$$.fragment),l=E(),w(n.$$.fragment),u=E(),w(o.$$.fragment),c=E(),w($.$$.fragment),_=E(),w(C.$$.fragment),I=E(),w(m.$$.fragment),d=E(),w(M.$$.fragment),X=E(),w(j.$$.fragment),Z=E(),w(S.$$.fragment),F=E(),w(N.$$.fragment)},l(s){g(t.$$.fragment,s),e=y(s),g(r.$$.fragment,s),l=y(s),g(n.$$.fragment,s),u=y(s),g(o.$$.fragment,s),c=y(s),g($.$$.fragment,s),_=y(s),g(C.$$.fragment,s),I=y(s),g(m.$$.fragment,s),d=y(s),g(M.$$.fragment,s),X=y(s),g(j.$$.fragment,s),Z=y(s),g(S.$$.fragment,s),F=y(s),g(N.$$.fragment,s)},m(s,p){v(t,s,p),f(s,e,p),v(r,s,p),f(s,l,p),v(n,s,p),f(s,u,p),v(o,s,p),f(s,c,p),v($,s,p),f(s,_,p),v(C,s,p),f(s,I,p),v(m,s,p),f(s,d,p),v(M,s,p),f(s,X,p),v(j,s,p),f(s,Z,p),v(S,s,p),f(s,F,p),v(N,s,p),G=!0},p(s,p){const nt={};p&2&&(nt.$$scope={dirty:p,ctx:s}),t.$set(nt);const rt={};p&2&&(rt.$$scope={dirty:p,ctx:s}),r.$set(rt);const st={};p&2&&(st.$$scope={dirty:p,ctx:s}),n.$set(st);const ut={};p&2&&(ut.$$scope={dirty:p,ctx:s}),o.$set(ut);const ot={};p&2&&(ot.$$scope={dirty:p,ctx:s}),C.$set(ot);const it={};p&2&&(it.$$scope={dirty:p,ctx:s}),M.$set(it);const lt={};p&2&&(lt.$$scope={dirty:p,ctx:s}),S.$set(lt);const at={};p&2&&(at.$$scope={dirty:p,ctx:s}),N.$set(at)},i(s){G||(k(t.$$.fragment,s),k(r.$$.fragment,s),k(n.$$.fragment,s),k(o.$$.fragment,s),k($.$$.fragment,s),k(C.$$.fragment,s),k(m.$$.fragment,s),k(M.$$.fragment,s),k(j.$$.fragment,s),k(S.$$.fragment,s),k(N.$$.fragment,s),G=!0)},o(s){T(t.$$.fragment,s),T(r.$$.fragment,s),T(n.$$.fragment,s),T(o.$$.fragment,s),T($.$$.fragment,s),T(C.$$.fragment,s),T(m.$$.fragment,s),T(M.$$.fragment,s),T(j.$$.fragment,s),T(S.$$.fragment,s),T(N.$$.fragment,s),G=!1},d(s){s&&(a(e),a(l),a(u),a(c),a(_),a(I),a(d),a(X),a(Z),a(F)),L(t,s),L(r,s),L(n,s),L(o,s),L($,s),L(C,s),L(m,s),L(M,s),L(j,s),L(S,s),L(N,s)}}}function Jt(i){let t,e;const r=[i[0],pt];let l={$$slots:{default:[Gt]},$$scope:{ctx:i}};for(let n=0;n<r.length;n+=1)l=et(l,r[n]);return t=new dt({props:l}),{c(){w(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,u){v(t,n,u),e=!0},p(n,[u]){const o=u&1?_t(r,[u&1&&ft(n[0]),u&0&&ft(pt)]):{};u&2&&(o.$$scope={dirty:u,ctx:n}),t.$set(o)},i(n){e||(k(t.$$.fragment,n),e=!0)},o(n){T(t.$$.fragment,n),e=!1},d(n){L(t,n)}}}const pt={title:"What if the Svelte action feature does not exist?",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-04-02T00:00:00.000Z",layout:"notes"};function Kt(i,t,e){return i.$$set=r=>{e(0,t=et(et({},t),ct(r)))},t=ct(t),[t]}class re extends z{constructor(t){super(),D(this,t,Kt,Jt,q,{})}}export{re as default,pt as metadata};
