import{s as G,f as y,l as g,a as A,g as O,h as I,m as v,d as u,c as N,u as R,j as E,i as m,v as x,X as V,n as Y,z as M,H as tt,E as P,C as Q,D as ot}from"./scheduler.a7cd560e.js";import{S as J,i as K,b,d as k,m as C,a as T,t as S,e as D}from"./index.396264e7.js";import{g as $t,a as at}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as ft,P as H}from"./mdsvex-layout-notes.4b2b7ac6.js";import{S as L}from"./ShowCode.9be9983a.js";import"./index.928acef2.js";import{S as U}from"./Strong.097578ae.js";function ct(l){let t,e,n,i,s,$="++",o,f,d="--",w,a,c;return{c(){t=y("div"),e=y("span"),n=g(l[0]),i=A(),s=y("button"),s.textContent=$,o=A(),f=y("button"),f.textContent=d,this.h()},l(p){t=O(p,"DIV",{class:!0});var h=I(t);e=O(h,"SPAN",{class:!0});var B=I(e);n=v(B,l[0]),B.forEach(u),i=N(h),s=O(h,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(s)!=="svelte-anym62"&&(s.textContent=$),o=N(h),f=O(h,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(f)!=="svelte-33z78e"&&(f.textContent=d),h.forEach(u),this.h()},h(){E(e,"class","spu-5kywva"),E(s,"class","spu-2ig37n"),E(f,"class","spu-2ig37n"),E(t,"class",w=(l[0]<0?"negative":"")+" "+(l[0]>0?"positive":"")+" svelte-1pdvunk")},m(p,h){m(p,t,h),x(t,e),x(e,n),x(t,i),x(t,s),x(t,o),x(t,f),a||(c=[V(s,"click",l[1]),V(f,"click",l[2])],a=!0)},p(p,[h]){h&1&&Y(n,p[0]),h&1&&w!==(w=(p[0]<0?"negative":"")+" "+(p[0]>0?"positive":"")+" svelte-1pdvunk")&&E(t,"class",w)},i:M,o:M,d(p){p&&u(t),a=!1,tt(c)}}}function pt(l,t,e){let n=0;return[n,()=>e(0,n++,n),()=>e(0,n--,n)]}class ut extends J{constructor(t){super(),K(this,t,pt,ct,G,{})}}const mt=`<script>\r
	let profit = 0;\r
<\/script>\r
\r
<div class="{profit < 0 ? 'negative' : ''} {profit > 0 ? 'positive' : ''}">\r
	<span class="p-4 font-serif text-2xl">{profit}</span>\r
	<button class="p-4" on:click={() => profit++}>++</button>\r
	<button class="p-4" on:click={() => profit--}>--</button>\r
</div>\r
\r
<style>\r
	.negative {\r
		color: red;\r
		font-weight: bold;\r
	}\r
	.positive {\r
		color: limegreen;\r
		font-weight: bold;\r
	}\r
</style>\r
`;function _t(l){let t,e,n,i,s,$="++",o,f,d="--",w,a;return{c(){t=y("div"),e=y("span"),n=g(l[0]),i=A(),s=y("button"),s.textContent=$,o=A(),f=y("button"),f.textContent=d,this.h()},l(c){t=O(c,"DIV",{class:!0});var p=I(t);e=O(p,"SPAN",{class:!0});var h=I(e);n=v(h,l[0]),h.forEach(u),i=N(p),s=O(p,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(s)!=="svelte-iz9xtg"&&(s.textContent=$),o=N(p),f=O(p,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(f)!=="svelte-i9ie9k"&&(f.textContent=d),p.forEach(u),this.h()},h(){E(e,"class","spu-ad1bus"),E(s,"class","spu-lpr62v"),E(f,"class","spu-lpr62v"),E(t,"class","svelte-1969j4r"),P(t,"negative",l[0]<0),P(t,"positive",l[0]>0)},m(c,p){m(c,t,p),x(t,e),x(e,n),x(t,i),x(t,s),x(t,o),x(t,f),w||(a=[V(s,"click",l[1]),V(f,"click",l[2])],w=!0)},p(c,[p]){p&1&&Y(n,c[0]),p&1&&P(t,"negative",c[0]<0),p&1&&P(t,"positive",c[0]>0)},i:M,o:M,d(c){c&&u(t),w=!1,tt(a)}}}function gt(l,t,e){let n=0;return[n,()=>e(0,n++,n),()=>e(0,n--,n)]}class vt extends J{constructor(t){super(),K(this,t,gt,_t,G,{})}}const dt=`<script>\r
	let profit = 0;\r
<\/script>\r
\r
<div class:negative={profit < 0} class:positive={profit > 0}>\r
	<span class="p-4 font-serif text-2xl">{profit}</span>\r
	<button class="p-4" on:click={() => profit++}>++</button>\r
	<button class="p-4" on:click={() => profit--}>--</button>\r
</div>\r
\r
<style>\r
	.negative {\r
		color: red;\r
		font-weight: bold;\r
	}\r
	.positive {\r
		color: limegreen;\r
		font-weight: bold;\r
	}\r
</style>\r
`;function wt(l){let t,e,n,i,s,$="++",o,f,d="--",w,a;return{c(){t=y("div"),e=y("span"),n=g(l[0]),i=A(),s=y("button"),s.textContent=$,o=A(),f=y("button"),f.textContent=d,this.h()},l(c){t=O(c,"DIV",{class:!0});var p=I(t);e=O(p,"SPAN",{class:!0});var h=I(e);n=v(h,l[0]),h.forEach(u),i=N(p),s=O(p,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(s)!=="svelte-1cu7kv1"&&(s.textContent=$),o=N(p),f=O(p,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(f)!=="svelte-1w5xf81"&&(f.textContent=d),p.forEach(u),this.h()},h(){E(e,"class","spu-v2hqec"),E(s,"class","spu-3jnesd"),E(f,"class","spu-3jnesd"),E(t,"class","svelte-1g8m689"),P(t,"negative",l[2]),P(t,"positive",l[1])},m(c,p){m(c,t,p),x(t,e),x(e,n),x(t,i),x(t,s),x(t,o),x(t,f),w||(a=[V(s,"click",l[3]),V(f,"click",l[4])],w=!0)},p(c,[p]){p&1&&Y(n,c[0]),p&4&&P(t,"negative",c[2]),p&2&&P(t,"positive",c[1])},i:M,o:M,d(c){c&&u(t),w=!1,tt(a)}}}function ht(l,t,e){let n,i,s=0;const $=()=>e(0,s++,s),o=()=>e(0,s--,s);return l.$$.update=()=>{l.$$.dirty&1&&e(2,n=s<0),l.$$.dirty&1&&e(1,i=s>0)},[s,i,n,$,o]}class bt extends J{constructor(t){super(),K(this,t,ht,wt,G,{})}}const kt=`<script>\r
	let profit = 0;\r
	$: negative = profit < 0;\r
	$: positive = profit > 0;\r
<\/script>\r
\r
<!-- same thing as \r
<div class:negative={negative} class:positive={positive}> -->\r
<div class:negative class:positive>\r
	<span class="p-4 font-serif text-2xl">{profit}</span>\r
	<button class="p-4" on:click={() => profit++}>++</button>\r
	<button class="p-4" on:click={() => profit--}>--</button>\r
</div>\r
\r
<style>\r
	.negative {\r
		color: red;\r
		font-weight: bold;\r
	}\r
	.positive {\r
		color: limegreen;\r
		font-weight: bold;\r
	}\r
</style>\r
`;function Ct(l){let t;return{c(){t=g("class attribute")},l(e){t=v(e,"class attribute")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Tt(l){let t,e,n,i;return e=new U({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),{c(){t=g("We know how to set a class using the "),b(e.$$.fragment),n=g(":")},l(s){t=v(s,"We know how to set a class using the "),k(e.$$.fragment,s),n=v(s,":")},m(s,$){m(s,t,$),C(e,s,$),m(s,n,$),i=!0},p(s,$){const o={};$&2&&(o.$$scope={dirty:$,ctx:s}),e.$set(o)},i(s){i||(T(e.$$.fragment,s),i=!0)},o(s){S(e.$$.fragment,s),i=!1},d(s){s&&(u(t),u(n)),D(e,s)}}}function St(l){let t;return{c(){t=g("class directive")},l(e){t=v(e,"class directive")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Dt(l){let t,e,n,i;return e=new U({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){t=g("But in Svelte there's another way to set classes using something called a "),b(e.$$.fragment),n=g(".")},l(s){t=v(s,"But in Svelte there's another way to set classes using something called a "),k(e.$$.fragment,s),n=v(s,".")},m(s,$){m(s,t,$),C(e,s,$),m(s,n,$),i=!0},p(s,$){const o={};$&2&&(o.$$scope={dirty:$,ctx:s}),e.$set(o)},i(s){i||(T(e.$$.fragment,s),i=!0)},o(s){S(e.$$.fragment,s),i=!1},d(s){s&&(u(t),u(n)),D(e,s)}}}function xt(l){let t;return{c(){t=g("anything with a colon")},l(e){t=v(e,"anything with a colon")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function At(l){let t,e,n,i;return e=new U({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){t=g("A directive in Svelte is "),b(e.$$.fragment),n=g(".")},l(s){t=v(s,"A directive in Svelte is "),k(e.$$.fragment,s),n=v(s,".")},m(s,$){m(s,t,$),C(e,s,$),m(s,n,$),i=!0},p(s,$){const o={};$&2&&(o.$$scope={dirty:$,ctx:s}),e.$set(o)},i(s){i||(T(e.$$.fragment,s),i=!0)},o(s){S(e.$$.fragment,s),i=!1},d(s){s&&(u(t),u(n)),D(e,s)}}}function Nt(l){let t;return{c(){t=g("class:")},l(e){t=v(e,"class:")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Bt(l){let t;return{c(){t=g("class name")},l(e){t=v(e,"class name")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Et(l){let t;return{c(){t=g("equals sign")},l(e){t=v(e,"equals sign")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function yt(l){let t;return{c(){t=g("condition for the class to apply")},l(e){t=v(e,"condition for the class to apply")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Ot(l){let t,e,n,i,s,$,o,f,d,w;return e=new U({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),i=new U({props:{$$slots:{default:[Bt]},$$scope:{ctx:l}}}),$=new U({props:{$$slots:{default:[Et]},$$scope:{ctx:l}}}),f=new U({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),{c(){t=g("To write a class directive we write "),b(e.$$.fragment),n=g(" followed by the "),b(i.$$.fragment),s=g(", followed by an "),b($.$$.fragment),o=g(" and the "),b(f.$$.fragment),d=g(".")},l(a){t=v(a,"To write a class directive we write "),k(e.$$.fragment,a),n=v(a," followed by the "),k(i.$$.fragment,a),s=v(a,", followed by an "),k($.$$.fragment,a),o=v(a," and the "),k(f.$$.fragment,a),d=v(a,".")},m(a,c){m(a,t,c),C(e,a,c),m(a,n,c),C(i,a,c),m(a,s,c),C($,a,c),m(a,o,c),C(f,a,c),m(a,d,c),w=!0},p(a,c){const p={};c&2&&(p.$$scope={dirty:c,ctx:a}),e.$set(p);const h={};c&2&&(h.$$scope={dirty:c,ctx:a}),i.$set(h);const B={};c&2&&(B.$$scope={dirty:c,ctx:a}),$.$set(B);const q={};c&2&&(q.$$scope={dirty:c,ctx:a}),f.$set(q)},i(a){w||(T(e.$$.fragment,a),T(i.$$.fragment,a),T($.$$.fragment,a),T(f.$$.fragment,a),w=!0)},o(a){S(e.$$.fragment,a),S(i.$$.fragment,a),S($.$$.fragment,a),S(f.$$.fragment,a),w=!1},d(a){a&&(u(t),u(n),u(s),u(o),u(d)),D(e,a),D(i,a),D($,a),D(f,a)}}}function Ut(l){let t;return{c(){t=g("shorthand")},l(e){t=v(e,"shorthand")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function jt(l){let t;return{c(){t=g("reactive variable")},l(e){t=v(e,"reactive variable")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Pt(l){let t,e,n,i,s,$;return e=new U({props:{$$slots:{default:[Ut]},$$scope:{ctx:l}}}),i=new U({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){t=g("We can use a "),b(e.$$.fragment),n=g(" by setting the expression to a "),b(i.$$.fragment),s=g(".")},l(o){t=v(o,"We can use a "),k(e.$$.fragment,o),n=v(o," by setting the expression to a "),k(i.$$.fragment,o),s=v(o,".")},m(o,f){m(o,t,f),C(e,o,f),m(o,n,f),C(i,o,f),m(o,s,f),$=!0},p(o,f){const d={};f&2&&(d.$$scope={dirty:f,ctx:o}),e.$set(d);const w={};f&2&&(w.$$scope={dirty:f,ctx:o}),i.$set(w)},i(o){$||(T(e.$$.fragment,o),T(i.$$.fragment,o),$=!0)},o(o){S(e.$$.fragment,o),S(i.$$.fragment,o),$=!1},d(o){o&&(u(t),u(n),u(s)),D(e,o),D(i,o)}}}function qt(l){let t,e,n,i,s,$,o,f,d,w,a,c,p,h,B,q,j,X,W,Z,z,F;return t=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),n=new ut({}),s=new L({props:{code:mt,name:"App.svelte"}}),o=new H({props:{$$slots:{default:[Dt]},$$scope:{ctx:l}}}),d=new H({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),a=new H({props:{$$slots:{default:[Ot]},$$scope:{ctx:l}}}),p=new vt({}),B=new L({props:{code:dt,name:"ClassDirective.svelte"}}),j=new H({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),W=new bt({}),z=new L({props:{code:kt,name:"ClassDirective2.svelte"}}),{c(){b(t.$$.fragment),e=A(),b(n.$$.fragment),i=A(),b(s.$$.fragment),$=A(),b(o.$$.fragment),f=A(),b(d.$$.fragment),w=A(),b(a.$$.fragment),c=A(),b(p.$$.fragment),h=A(),b(B.$$.fragment),q=A(),b(j.$$.fragment),X=A(),b(W.$$.fragment),Z=A(),b(z.$$.fragment)},l(r){k(t.$$.fragment,r),e=N(r),k(n.$$.fragment,r),i=N(r),k(s.$$.fragment,r),$=N(r),k(o.$$.fragment,r),f=N(r),k(d.$$.fragment,r),w=N(r),k(a.$$.fragment,r),c=N(r),k(p.$$.fragment,r),h=N(r),k(B.$$.fragment,r),q=N(r),k(j.$$.fragment,r),X=N(r),k(W.$$.fragment,r),Z=N(r),k(z.$$.fragment,r)},m(r,_){C(t,r,_),m(r,e,_),C(n,r,_),m(r,i,_),C(s,r,_),m(r,$,_),C(o,r,_),m(r,f,_),C(d,r,_),m(r,w,_),C(a,r,_),m(r,c,_),C(p,r,_),m(r,h,_),C(B,r,_),m(r,q,_),C(j,r,_),m(r,X,_),C(W,r,_),m(r,Z,_),C(z,r,_),F=!0},p(r,_){const et={};_&2&&(et.$$scope={dirty:_,ctx:r}),t.$set(et);const st={};_&2&&(st.$$scope={dirty:_,ctx:r}),o.$set(st);const nt={};_&2&&(nt.$$scope={dirty:_,ctx:r}),d.$set(nt);const rt={};_&2&&(rt.$$scope={dirty:_,ctx:r}),a.$set(rt);const lt={};_&2&&(lt.$$scope={dirty:_,ctx:r}),j.$set(lt)},i(r){F||(T(t.$$.fragment,r),T(n.$$.fragment,r),T(s.$$.fragment,r),T(o.$$.fragment,r),T(d.$$.fragment,r),T(a.$$.fragment,r),T(p.$$.fragment,r),T(B.$$.fragment,r),T(j.$$.fragment,r),T(W.$$.fragment,r),T(z.$$.fragment,r),F=!0)},o(r){S(t.$$.fragment,r),S(n.$$.fragment,r),S(s.$$.fragment,r),S(o.$$.fragment,r),S(d.$$.fragment,r),S(a.$$.fragment,r),S(p.$$.fragment,r),S(B.$$.fragment,r),S(j.$$.fragment,r),S(W.$$.fragment,r),S(z.$$.fragment,r),F=!1},d(r){r&&(u(e),u(i),u($),u(f),u(w),u(c),u(h),u(q),u(X),u(Z)),D(t,r),D(n,r),D(s,r),D(o,r),D(d,r),D(a,r),D(p,r),D(B,r),D(j,r),D(W,r),D(z,r)}}}function Wt(l){let t,e;const n=[l[0],it];let i={$$slots:{default:[qt]},$$scope:{ctx:l}};for(let s=0;s<n.length;s+=1)i=Q(i,n[s]);return t=new ft({props:i}),{c(){b(t.$$.fragment)},l(s){k(t.$$.fragment,s)},m(s,$){C(t,s,$),e=!0},p(s,[$]){const o=$&1?$t(n,[$&1&&at(s[0]),$&0&&at(it)]):{};$&2&&(o.$$scope={dirty:$,ctx:s}),t.$set(o)},i(s){e||(T(t.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),e=!1},d(s){D(t,s)}}}const it={title:"class: directive",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-04T00:00:00.000Z",layout:"notes"};function zt(l,t,e){return l.$$set=n=>{e(0,t=Q(Q({},t),ot(n)))},t=ot(t),[t]}class Ft extends J{constructor(t){super(),K(this,t,zt,Wt,G,{})}}export{Ft as default,it as metadata};
