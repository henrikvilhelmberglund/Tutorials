import{S as H,i as J,s as K,k as q,q as v,a as B,l as y,m as P,r as g,h as p,c as j,n as O,b as m,G as h,Q as R,u as Y,B as V,D as x,$ as z,M as X,w as k,x as T,y as S,N as ft,O as ot,f as D,t as E,z as C,P as lt}from"./index-a6ce3bb5.js";import{M as $t,P as G}from"./mdsvex-layout-notes-38a9c8fb.js";import{S as L}from"./ShowCode-d0467b78.js";import"./index-8a23e261.js";import{S as W}from"./Strong-98ce4a94.js";function it(l){let t,e,r,$,s,f,o,i,d,w,a,c;return{c(){t=q("div"),e=q("span"),r=v(l[0]),$=B(),s=q("button"),f=v("++"),o=B(),i=q("button"),d=v("--"),this.h()},l(u){t=y(u,"DIV",{class:!0});var b=P(t);e=y(b,"SPAN",{class:!0});var N=P(e);r=g(N,l[0]),N.forEach(p),$=j(b),s=y(b,"BUTTON",{class:!0});var A=P(s);f=g(A,"++"),A.forEach(p),o=j(b),i=y(b,"BUTTON",{class:!0});var U=P(i);d=g(U,"--"),U.forEach(p),b.forEach(p),this.h()},h(){O(e,"class","uno-ph67fy"),O(s,"class","uno-us6n9b"),O(i,"class","uno-us6n9b"),O(t,"class",w=(l[0]<0?"negative":"")+" "+(l[0]>0?"positive":"")+" svelte-1tl382e")},m(u,b){m(u,t,b),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),a||(c=[R(s,"click",l[1]),R(i,"click",l[2])],a=!0)},p(u,[b]){b&1&&Y(r,u[0]),b&1&&w!==(w=(u[0]<0?"negative":"")+" "+(u[0]>0?"positive":"")+" svelte-1tl382e")&&O(t,"class",w)},i:V,o:V,d(u){u&&p(t),a=!1,x(c)}}}function pt(l,t,e){let r=0;return[r,()=>e(0,r++,r),()=>e(0,r--,r)]}class ct extends H{constructor(t){super(),J(this,t,pt,it,K,{})}}const ut=`<script>\r
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
`;function mt(l){let t,e,r,$,s,f,o,i,d,w,a;return{c(){t=q("div"),e=q("span"),r=v(l[0]),$=B(),s=q("button"),f=v("++"),o=B(),i=q("button"),d=v("--"),this.h()},l(c){t=y(c,"DIV",{class:!0});var u=P(t);e=y(u,"SPAN",{class:!0});var b=P(e);r=g(b,l[0]),b.forEach(p),$=j(u),s=y(u,"BUTTON",{class:!0});var N=P(s);f=g(N,"++"),N.forEach(p),o=j(u),i=y(u,"BUTTON",{class:!0});var A=P(i);d=g(A,"--"),A.forEach(p),u.forEach(p),this.h()},h(){O(e,"class","uno-dgg9jg"),O(s,"class","uno-wj1jqz"),O(i,"class","uno-wj1jqz"),O(t,"class","svelte-14g8k8k"),z(t,"negative",l[0]<0),z(t,"positive",l[0]>0)},m(c,u){m(c,t,u),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),w||(a=[R(s,"click",l[1]),R(i,"click",l[2])],w=!0)},p(c,[u]){u&1&&Y(r,c[0]),u&1&&z(t,"negative",c[0]<0),u&1&&z(t,"positive",c[0]>0)},i:V,o:V,d(c){c&&p(t),w=!1,x(a)}}}function _t(l,t,e){let r=0;return[r,()=>e(0,r++,r),()=>e(0,r--,r)]}class vt extends H{constructor(t){super(),J(this,t,_t,mt,K,{})}}const gt=`<script>\r
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
`;function dt(l){let t,e,r,$,s,f,o,i,d,w,a;return{c(){t=q("div"),e=q("span"),r=v(l[0]),$=B(),s=q("button"),f=v("++"),o=B(),i=q("button"),d=v("--"),this.h()},l(c){t=y(c,"DIV",{class:!0});var u=P(t);e=y(u,"SPAN",{class:!0});var b=P(e);r=g(b,l[0]),b.forEach(p),$=j(u),s=y(u,"BUTTON",{class:!0});var N=P(s);f=g(N,"++"),N.forEach(p),o=j(u),i=y(u,"BUTTON",{class:!0});var A=P(i);d=g(A,"--"),A.forEach(p),u.forEach(p),this.h()},h(){O(e,"class","uno-5udxto"),O(s,"class","uno-jpdstl"),O(i,"class","uno-jpdstl"),O(t,"class","svelte-g8362t"),z(t,"negative",l[2]),z(t,"positive",l[1])},m(c,u){m(c,t,u),h(t,e),h(e,r),h(t,$),h(t,s),h(s,f),h(t,o),h(t,i),h(i,d),w||(a=[R(s,"click",l[3]),R(i,"click",l[4])],w=!0)},p(c,[u]){u&1&&Y(r,c[0]),u&4&&z(t,"negative",c[2]),u&2&&z(t,"positive",c[1])},i:V,o:V,d(c){c&&p(t),w=!1,x(a)}}}function wt(l,t,e){let r,$,s=0;const f=()=>e(0,s++,s),o=()=>e(0,s--,s);return l.$$.update=()=>{l.$$.dirty&1&&e(2,r=s<0),l.$$.dirty&1&&e(1,$=s>0)},[s,$,r,f,o]}class bt extends H{constructor(t){super(),J(this,t,wt,dt,K,{})}}const ht=`<script>\r
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
`;function kt(l){let t;return{c(){t=v("class attribute")},l(e){t=g(e,"class attribute")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Tt(l){let t,e,r,$;return e=new W({props:{$$slots:{default:[kt]},$$scope:{ctx:l}}}),{c(){t=v("We know how to set a class using the "),k(e.$$.fragment),r=v(":")},l(s){t=g(s,"We know how to set a class using the "),T(e.$$.fragment,s),r=g(s,":")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),C(e,s),s&&p(r)}}}function St(l){let t;return{c(){t=v("class directive")},l(e){t=g(e,"class directive")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Dt(l){let t,e,r,$;return e=new W({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){t=v("But in Svelte there's another way to set classes using something called a "),k(e.$$.fragment),r=v(".")},l(s){t=g(s,"But in Svelte there's another way to set classes using something called a "),T(e.$$.fragment,s),r=g(s,".")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),C(e,s),s&&p(r)}}}function Et(l){let t;return{c(){t=v("anything with a colon")},l(e){t=g(e,"anything with a colon")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Ct(l){let t,e,r,$;return e=new W({props:{$$slots:{default:[Et]},$$scope:{ctx:l}}}),{c(){t=v("A directive in Svelte is "),k(e.$$.fragment),r=v(".")},l(s){t=g(s,"A directive in Svelte is "),T(e.$$.fragment,s),r=g(s,".")},m(s,f){m(s,t,f),S(e,s,f),m(s,r,f),$=!0},p(s,f){const o={};f&2&&(o.$$scope={dirty:f,ctx:s}),e.$set(o)},i(s){$||(D(e.$$.fragment,s),$=!0)},o(s){E(e.$$.fragment,s),$=!1},d(s){s&&p(t),C(e,s),s&&p(r)}}}function Nt(l){let t;return{c(){t=v("class:")},l(e){t=g(e,"class:")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function At(l){let t;return{c(){t=v("class name")},l(e){t=g(e,"class name")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Bt(l){let t;return{c(){t=v("equals sign")},l(e){t=g(e,"equals sign")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function jt(l){let t;return{c(){t=v("condition for the class to apply")},l(e){t=g(e,"condition for the class to apply")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Ot(l){let t,e,r,$,s,f,o,i,d,w;return e=new W({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),$=new W({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),f=new W({props:{$$slots:{default:[Bt]},$$scope:{ctx:l}}}),i=new W({props:{$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){t=v("To write a class directive we write "),k(e.$$.fragment),r=v(" followed by the "),k($.$$.fragment),s=v(", followed by an "),k(f.$$.fragment),o=v(" and the "),k(i.$$.fragment),d=v(".")},l(a){t=g(a,"To write a class directive we write "),T(e.$$.fragment,a),r=g(a," followed by the "),T($.$$.fragment,a),s=g(a,", followed by an "),T(f.$$.fragment,a),o=g(a," and the "),T(i.$$.fragment,a),d=g(a,".")},m(a,c){m(a,t,c),S(e,a,c),m(a,r,c),S($,a,c),m(a,s,c),S(f,a,c),m(a,o,c),S(i,a,c),m(a,d,c),w=!0},p(a,c){const u={};c&2&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const b={};c&2&&(b.$$scope={dirty:c,ctx:a}),$.$set(b);const N={};c&2&&(N.$$scope={dirty:c,ctx:a}),f.$set(N);const A={};c&2&&(A.$$scope={dirty:c,ctx:a}),i.$set(A)},i(a){w||(D(e.$$.fragment,a),D($.$$.fragment,a),D(f.$$.fragment,a),D(i.$$.fragment,a),w=!0)},o(a){E(e.$$.fragment,a),E($.$$.fragment,a),E(f.$$.fragment,a),E(i.$$.fragment,a),w=!1},d(a){a&&p(t),C(e,a),a&&p(r),C($,a),a&&p(s),C(f,a),a&&p(o),C(i,a),a&&p(d)}}}function qt(l){let t;return{c(){t=v("shorthand")},l(e){t=g(e,"shorthand")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function yt(l){let t;return{c(){t=v("reactive variable")},l(e){t=g(e,"reactive variable")},m(e,r){m(e,t,r)},d(e){e&&p(t)}}}function Pt(l){let t,e,r,$,s,f;return e=new W({props:{$$slots:{default:[qt]},$$scope:{ctx:l}}}),$=new W({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),{c(){t=v("We can use a "),k(e.$$.fragment),r=v(" by setting the expression to a "),k($.$$.fragment),s=v(".")},l(o){t=g(o,"We can use a "),T(e.$$.fragment,o),r=g(o," by setting the expression to a "),T($.$$.fragment,o),s=g(o,".")},m(o,i){m(o,t,i),S(e,o,i),m(o,r,i),S($,o,i),m(o,s,i),f=!0},p(o,i){const d={};i&2&&(d.$$scope={dirty:i,ctx:o}),e.$set(d);const w={};i&2&&(w.$$scope={dirty:i,ctx:o}),$.$set(w)},i(o){f||(D(e.$$.fragment,o),D($.$$.fragment,o),f=!0)},o(o){E(e.$$.fragment,o),E($.$$.fragment,o),f=!1},d(o){o&&p(t),C(e,o),o&&p(r),C($,o),o&&p(s)}}}function Ut(l){let t,e,r,$,s,f,o,i,d,w,a,c,u,b,N,A,U,Q,I,Z,M,F;return t=new G({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),r=new ct({}),s=new L({props:{code:ut,name:"App.svelte"}}),o=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:l}}}),d=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:l}}}),a=new G({props:{$$slots:{default:[Ot]},$$scope:{ctx:l}}}),u=new vt({}),N=new L({props:{code:gt,name:"ClassDirective.svelte"}}),U=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),I=new bt({}),M=new L({props:{code:ht,name:"ClassDirective2.svelte"}}),{c(){k(t.$$.fragment),e=B(),k(r.$$.fragment),$=B(),k(s.$$.fragment),f=B(),k(o.$$.fragment),i=B(),k(d.$$.fragment),w=B(),k(a.$$.fragment),c=B(),k(u.$$.fragment),b=B(),k(N.$$.fragment),A=B(),k(U.$$.fragment),Q=B(),k(I.$$.fragment),Z=B(),k(M.$$.fragment)},l(n){T(t.$$.fragment,n),e=j(n),T(r.$$.fragment,n),$=j(n),T(s.$$.fragment,n),f=j(n),T(o.$$.fragment,n),i=j(n),T(d.$$.fragment,n),w=j(n),T(a.$$.fragment,n),c=j(n),T(u.$$.fragment,n),b=j(n),T(N.$$.fragment,n),A=j(n),T(U.$$.fragment,n),Q=j(n),T(I.$$.fragment,n),Z=j(n),T(M.$$.fragment,n)},m(n,_){S(t,n,_),m(n,e,_),S(r,n,_),m(n,$,_),S(s,n,_),m(n,f,_),S(o,n,_),m(n,i,_),S(d,n,_),m(n,w,_),S(a,n,_),m(n,c,_),S(u,n,_),m(n,b,_),S(N,n,_),m(n,A,_),S(U,n,_),m(n,Q,_),S(I,n,_),m(n,Z,_),S(M,n,_),F=!0},p(n,_){const tt={};_&2&&(tt.$$scope={dirty:_,ctx:n}),t.$set(tt);const et={};_&2&&(et.$$scope={dirty:_,ctx:n}),o.$set(et);const st={};_&2&&(st.$$scope={dirty:_,ctx:n}),d.$set(st);const nt={};_&2&&(nt.$$scope={dirty:_,ctx:n}),a.$set(nt);const rt={};_&2&&(rt.$$scope={dirty:_,ctx:n}),U.$set(rt)},i(n){F||(D(t.$$.fragment,n),D(r.$$.fragment,n),D(s.$$.fragment,n),D(o.$$.fragment,n),D(d.$$.fragment,n),D(a.$$.fragment,n),D(u.$$.fragment,n),D(N.$$.fragment,n),D(U.$$.fragment,n),D(I.$$.fragment,n),D(M.$$.fragment,n),F=!0)},o(n){E(t.$$.fragment,n),E(r.$$.fragment,n),E(s.$$.fragment,n),E(o.$$.fragment,n),E(d.$$.fragment,n),E(a.$$.fragment,n),E(u.$$.fragment,n),E(N.$$.fragment,n),E(U.$$.fragment,n),E(I.$$.fragment,n),E(M.$$.fragment,n),F=!1},d(n){C(t,n),n&&p(e),C(r,n),n&&p($),C(s,n),n&&p(f),C(o,n),n&&p(i),C(d,n),n&&p(w),C(a,n),n&&p(c),C(u,n),n&&p(b),C(N,n),n&&p(A),C(U,n),n&&p(Q),C(I,n),n&&p(Z),C(M,n)}}}function Wt(l){let t,e;const r=[l[0],at];let $={$$slots:{default:[Ut]},$$scope:{ctx:l}};for(let s=0;s<r.length;s+=1)$=X($,r[s]);return t=new $t({props:$}),{c(){k(t.$$.fragment)},l(s){T(t.$$.fragment,s)},m(s,f){S(t,s,f),e=!0},p(s,[f]){const o=f&1?ft(r,[f&1&&ot(s[0]),f&0&&ot(at)]):{};f&2&&(o.$$scope={dirty:f,ctx:s}),t.$set(o)},i(s){e||(D(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){C(t,s)}}}const at={title:"class: directive",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-04T00:00:00.000Z",layout:"notes"};function zt(l,t,e){return l.$$set=r=>{e(0,t=X(X({},t),lt(r)))},t=lt(t),[t]}class Qt extends H{constructor(t){super(),J(this,t,zt,Wt,K,{})}}export{Qt as default,at as metadata};
