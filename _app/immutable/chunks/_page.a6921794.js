import{S as Q,i as Z,s as F,k as y,q as v,a as N,l as O,m as U,r as g,h as p,c as j,n as q,b as m,D as h,R as I,u as Y,H as M,V as x,Q as V,J as X,y as k,z as T,A as S,K as ft,L as ot,g as D,d as E,B as A,M as lt}from"./index.5815ca79.js";import{M as $t,P as H}from"./mdsvex-layout-notes.7536afaf.js";import{S as G}from"./ShowCode.e677744f.js";import"./index.8a23e261.js";import{S as R}from"./Strong.b8abec16.js";function it(l){let t,e,r,$,s,f,o,i,d,w,a,c;return{c(){t=y("div"),e=y("span"),r=v(l[0]),$=N(),s=y("button"),f=v("++"),o=N(),i=y("button"),d=v("--"),this.h()},l(u){t=O(u,"DIV",{class:!0});var b=U(t);e=O(b,"SPAN",{class:!0});var C=U(e);r=g(C,l[0]),C.forEach(p),$=j(b),s=O(b,"BUTTON",{class:!0});var B=U(s);f=g(B,"++"),B.forEach(p),o=j(b),i=O(b,"BUTTON",{class:!0});var P=U(i);d=g(P,"--"),P.forEach(p),b.forEach(p),this.h()},h(){q(e,"class","uno-ph67fy"),q(s,"class","uno-us6n9b"),q(i,"class","uno-us6n9b"),q(t,"class",w=(l[0]<0?"negative":"")+" "+(l[0]>0?"positive":"")+" svelte-1tl382e")},m(u,b){m(u,t,b),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),a||(c=[I(s,"click",l[1]),I(i,"click",l[2])],a=!0)},p(u,[b]){b&1&&Y(r,u[0]),b&1&&w!==(w=(u[0]<0?"negative":"")+" "+(u[0]>0?"positive":"")+" svelte-1tl382e")&&q(t,"class",w)},i:M,o:M,d(u){u&&p(t),a=!1,x(c)}}}function pt(l,t,e){let r=0;return[r,()=>e(0,r++,r),()=>e(0,r--,r)]}class ct extends Q{constructor(t){super(),Z(this,t,pt,it,F,{})}}const ut=`<script>\r
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
`;function mt(l){let t,e,r,$,s,f,o,i,d,w,a;return{c(){t=y("div"),e=y("span"),r=v(l[0]),$=N(),s=y("button"),f=v("++"),o=N(),i=y("button"),d=v("--"),this.h()},l(c){t=O(c,"DIV",{class:!0});var u=U(t);e=O(u,"SPAN",{class:!0});var b=U(e);r=g(b,l[0]),b.forEach(p),$=j(u),s=O(u,"BUTTON",{class:!0});var C=U(s);f=g(C,"++"),C.forEach(p),o=j(u),i=O(u,"BUTTON",{class:!0});var B=U(i);d=g(B,"--"),B.forEach(p),u.forEach(p),this.h()},h(){q(e,"class","uno-dgg9jg"),q(s,"class","uno-wj1jqz"),q(i,"class","uno-wj1jqz"),q(t,"class","svelte-14g8k8k"),V(t,"negative",l[0]<0),V(t,"positive",l[0]>0)},m(c,u){m(c,t,u),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),w||(a=[I(s,"click",l[1]),I(i,"click",l[2])],w=!0)},p(c,[u]){u&1&&Y(r,c[0]),u&1&&V(t,"negative",c[0]<0),u&1&&V(t,"positive",c[0]>0)},i:M,o:M,d(c){c&&p(t),w=!1,x(a)}}}function _t(l,t,e){let r=0;return[r,()=>e(0,r++,r),()=>e(0,r--,r)]}class vt extends Q{constructor(t){super(),Z(this,t,_t,mt,F,{})}}const gt=`<script>\r
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
`;function dt(l){let t,e,r,$,s,f,o,i,d,w,a;return{c(){t=y("div"),e=y("span"),r=v(l[0]),$=N(),s=y("button"),f=v("++"),o=N(),i=y("button"),d=v("--"),this.h()},l(c){t=O(c,"DIV",{class:!0});var u=U(t);e=O(u,"SPAN",{class:!0});var b=U(e);r=g(b,l[0]),b.forEach(p),$=j(u),s=O(u,"BUTTON",{class:!0});var C=U(s);f=g(C,"++"),C.forEach(p),o=j(u),i=O(u,"BUTTON",{class:!0});var B=U(i);d=g(B,"--"),B.forEach(p),u.forEach(p),this.h()},h(){q(e,"class","uno-5udxto"),q(s,"class","uno-jpdstl"),q(i,"class","uno-jpdstl"),q(t,"class","svelte-g8362t"),V(t,"negative",l[2]),V(t,"positive",l[1])},m(c,u){m(c,t,u),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),w||(a=[I(s,"click",l[3]),I(i,"click",l[4])],w=!0)},p(c,[u]){u&1&&Y(r,c[0]),u&4&&V(t,"negative",c[2]),u&2&&V(t,"positive",c[1])},i:M,o:M,d(c){c&&p(t),w=!1,x(a)}}}function wt(l,t,e){let r,$,s=0;const f=()=>e(0,s++,s),o=()=>e(0,s--,s);return l.$$.update=()=>{l.$$.dirty&1&&e(2,r=s<0),l.$$.dirty&1&&e(1,$=s>0)},[s,$,r,f,o]}class bt extends Q{constructor(t){super(),Z(this,t,wt,dt,F,{})}}const ht=`<script>\r
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
`;function kt(l){let t;return{c(){t=v("class attribute")},l(e){t=g(e,"class attribute")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Tt(l){let t,e,r,$;return e=new R({props:{$$slots:{default:[kt]},$$scope:{ctx:l}}}),{c(){t=v("We know how to set a class using the "),k(e.$$.fragment),r=v(":")},l(s){t=g(s,"We know how to set a class using the "),T(e.$$.fragment,s),r=g(s,":")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),A(e,s),s&&p(r)}}}function St(l){let t;return{c(){t=v("class directive")},l(e){t=g(e,"class directive")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Dt(l){let t,e,r,$;return e=new R({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){t=v("But in Svelte there's another way to set classes using something called a "),k(e.$$.fragment),r=v(".")},l(s){t=g(s,"But in Svelte there's another way to set classes using something called a "),T(e.$$.fragment,s),r=g(s,".")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),A(e,s),s&&p(r)}}}function Et(l){let t;return{c(){t=v("anything with a colon")},l(e){t=g(e,"anything with a colon")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function At(l){let t,e,r,$;return e=new R({props:{$$slots:{default:[Et]},$$scope:{ctx:l}}}),{c(){t=v("A directive in Svelte is "),k(e.$$.fragment),r=v(".")},l(s){t=g(s,"A directive in Svelte is "),T(e.$$.fragment,s),r=g(s,".")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),A(e,s),s&&p(r)}}}function Ct(l){let t;return{c(){t=v("class:")},l(e){t=g(e,"class:")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Bt(l){let t;return{c(){t=v("class name")},l(e){t=g(e,"class name")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Nt(l){let t;return{c(){t=v("equals sign")},l(e){t=g(e,"equals sign")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function jt(l){let t;return{c(){t=v("condition for the class to apply")},l(e){t=g(e,"condition for the class to apply")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function qt(l){let t,e,r,$,s,f,o,i,d,w;return e=new R({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),$=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:l}}}),f=new R({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),i=new R({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){t=v("To write a class directive we write "),k(e.$$.fragment),r=v(" followed by the "),k($.$$.fragment),s=v(", followed by an "),k(f.$$.fragment),o=v(" and the "),k(i.$$.fragment),d=v(".")},l(a){t=g(a,"To write a class directive we write "),T(e.$$.fragment,a),r=g(a," followed by the "),T($.$$.fragment,a),s=g(a,", followed by an "),T(f.$$.fragment,a),o=g(a," and the "),T(i.$$.fragment,a),d=g(a,".")},m(a,c){m(a,t,c),S(e,a,c),m(a,r,c),S($,a,c),m(a,s,c),S(f,a,c),m(a,o,c),S(i,a,c),m(a,d,c),w=!0},p(a,c){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const b={};c&2&&(b.$$scope={dirty:c,ctx:a}),$.$set(b);const C={};c&2&&(C.$$scope={dirty:c,ctx:a}),f.$set(C);const B={};c&2&&(B.$$scope={dirty:c,ctx:a}),i.$set(B)},i(a){w||(D(e.$$.fragment,a),D($.$$.fragment,a),D(f.$$.fragment,a),D(i.$$.fragment,a),w=!0)},o(a){E(e.$$.fragment,a),E($.$$.fragment,a),E(f.$$.fragment,a),E(i.$$.fragment,a),w=!1},d(a){a&&p(t),A(e,a),a&&p(r),A($,a),a&&p(s),A(f,a),a&&p(o),A(i,a),a&&p(d)}}}function yt(l){let t;return{c(){t=v("shorthand")},l(e){t=g(e,"shorthand")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Ot(l){let t;return{c(){t=v("reactive variable")},l(e){t=g(e,"reactive variable")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Ut(l){let t,e,r,$,s,f;return e=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),$=new R({props:{$$slots:{default:[Ot]},$$scope:{ctx:l}}}),{c(){t=v("We can use a "),k(e.$$.fragment),r=v(" by setting the expression to a "),k($.$$.fragment),s=v(".")},l(o){t=g(o,"We can use a "),T(e.$$.fragment,o),r=g(o," by setting the expression to a "),T($.$$.fragment,o),s=g(o,".")},m(o,i){m(o,t,i),S(e,o,i),m(o,r,i),S($,o,i),m(o,s,i),f=!0},p(o,i){const d={};i&2&&(d.$$scope={dirty:i,ctx:o}),e.$set(d);const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),$.$set(w)},i(o){f||(D(e.$$.fragment,o),D($.$$.fragment,o),f=!0)},o(o){E(e.$$.fragment,o),E($.$$.fragment,o),f=!1},d(o){o&&p(t),A(e,o),o&&p(r),A($,o),o&&p(s)}}}function Pt(l){let t,e,r,$,s,f,o,i,d,w,a,c,u,b,C,B,P,J,W,K,z,L;return t=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),r=new ct({}),s=new G({props:{code:ut,name:"App.svelte"}}),o=new H({props:{$$slots:{default:[Dt]},$$scope:{ctx:l}}}),d=new H({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),a=new H({props:{$$slots:{default:[qt]},$$scope:{ctx:l}}}),u=new vt({}),C=new G({props:{code:gt,name:"ClassDirective.svelte"}}),P=new H({props:{$$slots:{default:[Ut]},$$scope:{ctx:l}}}),W=new bt({}),z=new G({props:{code:ht,name:"ClassDirective2.svelte"}}),{c(){k(t.$$.fragment),e=N(),k(r.$$.fragment),$=N(),k(s.$$.fragment),f=N(),k(o.$$.fragment),i=N(),k(d.$$.fragment),w=N(),k(a.$$.fragment),c=N(),k(u.$$.fragment),b=N(),k(C.$$.fragment),B=N(),k(P.$$.fragment),J=N(),k(W.$$.fragment),K=N(),k(z.$$.fragment)},l(n){T(t.$$.fragment,n),e=j(n),T(r.$$.fragment,n),$=j(n),T(s.$$.fragment,n),f=j(n),T(o.$$.fragment,n),i=j(n),T(d.$$.fragment,n),w=j(n),T(a.$$.fragment,n),c=j(n),T(u.$$.fragment,n),b=j(n),T(C.$$.fragment,n),B=j(n),T(P.$$.fragment,n),J=j(n),T(W.$$.fragment,n),K=j(n),T(z.$$.fragment,n)},m(n,_){S(t,n,_),m(n,e,_),S(r,n,_),m(n,$,_),S(s,n,_),m(n,f,_),S(o,n,_),m(n,i,_),S(d,n,_),m(n,w,_),S(a,n,_),m(n,c,_),S(u,n,_),m(n,b,_),S(C,n,_),m(n,B,_),S(P,n,_),m(n,J,_),S(W,n,_),m(n,K,_),S(z,n,_),L=!0},p(n,_){const tt={};_&2&&(tt.$$scope={dirty:_,ctx:n}),t.$set(tt);const et={};_&2&&(et.$$scope={dirty:_,ctx:n}),o.$set(et);const st={};_&2&&(st.$$scope={dirty:_,ctx:n}),d.$set(st);const nt={};_&2&&(nt.$$scope={dirty:_,ctx:n}),a.$set(nt);const rt={};_&2&&(rt.$$scope={dirty:_,ctx:n}),P.$set(rt)},i(n){L||(D(t.$$.fragment,n),D(r.$$.fragment,n),D(s.$$.fragment,n),D(o.$$.fragment,n),D(d.$$.fragment,n),D(a.$$.fragment,n),D(u.$$.fragment,n),D(C.$$.fragment,n),D(P.$$.fragment,n),D(W.$$.fragment,n),D(z.$$.fragment,n),L=!0)},o(n){E(t.$$.fragment,n),E(r.$$.fragment,n),E(s.$$.fragment,n),E(o.$$.fragment,n),E(d.$$.fragment,n),E(a.$$.fragment,n),E(u.$$.fragment,n),E(C.$$.fragment,n),E(P.$$.fragment,n),E(W.$$.fragment,n),E(z.$$.fragment,n),L=!1},d(n){A(t,n),n&&p(e),A(r,n),n&&p($),A(s,n),n&&p(f),A(o,n),n&&p(i),A(d,n),n&&p(w),A(a,n),n&&p(c),A(u,n),n&&p(b),A(C,n),n&&p(B),A(P,n),n&&p(J),A(W,n),n&&p(K),A(z,n)}}}function Rt(l){let t,e;const r=[l[0],at];let $={$$slots:{default:[Pt]},$$scope:{ctx:l}};for(let s=0;s<r.length;s+=1)$=X($,r[s]);return t=new $t({props:$}),{c(){k(t.$$.fragment)},l(s){T(t.$$.fragment,s)},m(s,f){S(t,s,f),e=!0},p(s,[f]){const o=f&1?ft(r,[f&1&&ot(s[0]),f&0&&ot(at)]):{};f&2&&(o.$$scope={dirty:f,ctx:s}),t.$set(o)},i(s){e||(D(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){A(t,s)}}}const at={title:"class: directive",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-04T00:00:00.000Z",layout:"notes"};function Vt(l,t,e){return l.$$set=r=>{e(0,t=X(X({},t),lt(r)))},t=lt(t),[t]}class Jt extends Q{constructor(t){super(),Z(this,t,Vt,Rt,F,{})}}export{Jt as default,at as metadata};
