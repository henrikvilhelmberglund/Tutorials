import{s as U,f as S,l as C,g as G,h as L,m as B,d as m,i as $,v as R,n as tt,z as X,A as M,aj as Gt,a as D,c as P,j as I,a8 as O,X as A,H as Tt,ak as ut,am as yt,B as wt,e as xt,E as J,r as Bt,C as q,ao as et,w as Dt,x as Pt,y as kt,ap as nt,D as it,k as Y,a0 as se,p as ae,a9 as ie}from"./scheduler.a7cd560e.js";import{S as F,i as N,b as v,d as y,m as w,a as h,t as d,e as x,h as ue,g as fe,c as ce}from"./index.396264e7.js";import{g as dt,a as At}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as me,P as ot,A as $e}from"./mdsvex-layout-notes.4b2b7ac6.js";import{b as pe}from"./paths.bd29c1ba.js";import{w as rt}from"./index.5e192797.js";import{e as K}from"./each.32d06572.js";import{S as bt}from"./ShowMany.db7be1f3.js";import{H as _e}from"./H3.2217b794.js";import{S as Q}from"./Strong.097578ae.js";const ht=rt(1);function ge(i){let t,e,n,o,l;return{c(){t=S("div"),e=C("Context: "),n=C(i[0]),o=C(", Store: "),l=C(i[1])},l(r){t=G(r,"DIV",{});var a=L(t);e=B(a,"Context: "),n=B(a,i[0]),o=B(a,", Store: "),l=B(a,i[1]),a.forEach(m)},m(r,a){$(r,t,a),R(t,e),R(t,n),R(t,o),R(t,l)},p(r,[a]){a&1&&tt(n,r[0]),a&2&&tt(l,r[1])},i:X,o:X,d(r){r&&m(t)}}}function he(i,t,e){let n,o;M(i,ht,r=>e(1,o=r));const l=Gt("data");return M(i,l,r=>e(0,n=r)),[n,o,l]}class le extends F{constructor(t){super(),N(this,t,he,ge,U,{})}}function de(i){let t,e,n,o,l,r,a,s,c,f,u,b;return c=new le({}),{c(){t=S("label"),e=C("Context: "),n=S("input"),o=D(),l=S("label"),r=C("Store: "),a=S("input"),s=D(),v(c.$$.fragment),this.h()},l(g){t=G(g,"LABEL",{});var _=L(t);e=B(_,"Context: "),n=G(_,"INPUT",{type:!0,min:!0,max:!0}),_.forEach(m),o=P(g),l=G(g,"LABEL",{});var k=L(l);r=B(k,"Store: "),a=G(k,"INPUT",{type:!0,min:!0,max:!0}),k.forEach(m),s=P(g),y(c.$$.fragment,g),this.h()},h(){I(n,"type","range"),I(n,"min",0),I(n,"max",10),I(a,"type","range"),I(a,"min",0),I(a,"max",10)},m(g,_){$(g,t,_),R(t,e),R(t,n),O(n,i[0]),$(g,o,_),$(g,l,_),R(l,r),R(l,a),O(a,i[1]),$(g,s,_),w(c,g,_),f=!0,u||(b=[A(n,"change",i[3]),A(n,"input",i[3]),A(a,"change",i[4]),A(a,"input",i[4])],u=!0)},p(g,[_]){_&1&&O(n,g[0]),_&2&&O(a,g[1])},i(g){f||(h(c.$$.fragment,g),f=!0)},o(g){d(c.$$.fragment,g),f=!1},d(g){g&&(m(t),m(o),m(l),m(s)),x(c,g),u=!1,Tt(b)}}}function be(i,t,e){let n,o;M(i,ht,s=>e(1,o=s));const l=rt(1);M(i,l,s=>e(0,n=s)),ut("data",l);function r(){n=yt(this.value),l.set(n)}function a(){o=yt(this.value),ht.set(o)}return[n,o,l,r,a]}class ve extends F{constructor(t){super(),N(this,t,be,de,U,{})}}function ye(i){let t,e,n,o,l,r,a,s,c,f,u,b;return c=new le({}),{c(){t=S("label"),e=C("Context: "),n=S("input"),o=D(),l=S("label"),r=C("Store: "),a=S("input"),s=D(),v(c.$$.fragment),this.h()},l(g){t=G(g,"LABEL",{});var _=L(t);e=B(_,"Context: "),n=G(_,"INPUT",{type:!0,min:!0,max:!0}),_.forEach(m),o=P(g),l=G(g,"LABEL",{});var k=L(l);r=B(k,"Store: "),a=G(k,"INPUT",{type:!0,min:!0,max:!0}),k.forEach(m),s=P(g),y(c.$$.fragment,g),this.h()},h(){I(n,"type","range"),I(n,"min",0),I(n,"max",10),I(a,"type","range"),I(a,"min",0),I(a,"max",10)},m(g,_){$(g,t,_),R(t,e),R(t,n),O(n,i[0]),$(g,o,_),$(g,l,_),R(l,r),R(l,a),O(a,i[1]),$(g,s,_),w(c,g,_),f=!0,u||(b=[A(n,"change",i[3]),A(n,"input",i[3]),A(a,"change",i[4]),A(a,"input",i[4])],u=!0)},p(g,[_]){_&1&&O(n,g[0]),_&2&&O(a,g[1])},i(g){f||(h(c.$$.fragment,g),f=!0)},o(g){d(c.$$.fragment,g),f=!1},d(g){g&&(m(t),m(o),m(l),m(s)),x(c,g),u=!1,Tt(b)}}}function we(i,t,e){let n,o;M(i,ht,s=>e(1,o=s));const l=rt(1);M(i,l,s=>e(0,n=s)),ut("data",l);function r(){n=yt(this.value),l.set(n)}function a(){o=yt(this.value),ht.set(o)}return[n,o,l,r,a]}class xe extends F{constructor(t){super(),N(this,t,we,ye,U,{})}}function Ce(i){let t,e,n,o,l,r;return t=new ve({}),l=new xe({}),{c(){v(t.$$.fragment),e=D(),n=S("hr"),o=D(),v(l.$$.fragment)},l(a){y(t.$$.fragment,a),e=P(a),n=G(a,"HR",{}),o=P(a),y(l.$$.fragment,a)},m(a,s){w(t,a,s),$(a,e,s),$(a,n,s),$(a,o,s),w(l,a,s),r=!0},p:X,i(a){r||(h(t.$$.fragment,a),h(l.$$.fragment,a),r=!0)},o(a){d(t.$$.fragment,a),d(l.$$.fragment,a),r=!1},d(a){a&&(m(e),m(n),m(o)),x(t,a),x(l,a)}}}class ft extends F{constructor(t){super(),N(this,t,null,Ce,U,{})}}const Be=`<script>\r
	import Parent1 from "./Parent1.svelte";\r
	import Parent2 from "./Parent2.svelte";\r
\r
\r
<\/script>\r
\r
<Parent1 />\r
<hr />\r
<Parent2 />\r
\r
<style>\r
</style>\r
`,De=`<script>\r
	import Child from "./Child.svelte";\r
	import { setContext } from "svelte";\r
	import { writable } from "svelte/store";\r
	import { data as storeData } from "./store";\r
\r
	const contextData = writable(1);\r
\r
	setContext("data", contextData);\r
<\/script>\r
\r
<label>\r
	Context: <input type="range" min={0} max={10} bind:value={$contextData} />\r
</label>\r
\r
<label>\r
	Store: <input type="range" min={0} max={10} bind:value={$storeData} />\r
</label>\r
\r
<Child />\r
\r
<style>\r
</style>\r
`,Pe=`<script>\r
	import Child from "./Child.svelte";\r
	import { setContext } from "svelte";\r
	import { writable } from "svelte/store";\r
	import { data as storeData } from "./store";\r
\r
	const contextData = writable(1);\r
\r
	setContext("data", contextData);\r
<\/script>\r
\r
<label>\r
	Context: <input type="range" min={0} max={10} bind:value={$contextData} />\r
</label>\r
\r
<label>\r
	Store: <input type="range" min={0} max={10} bind:value={$storeData} />\r
</label>\r
\r
<Child />\r
\r
<style>\r
</style>\r
`,ke=`<script>\r
	import { getContext } from "svelte";\r
	import { data as storeData } from "./store";\r
\r
	const contextData = getContext("data");\r
<\/script>\r
\r
<div>\r
	Context: {$contextData}, Store: {$storeData}\r
</div>\r
\r
<style>\r
</style>\r
`,Re=`import { writable } from "svelte/store";\r
\r
export const data = writable(1);`;function Mt(i,t,e){const n=i.slice();return n[4]=t[e],n[6]=e,n}function Wt(i,t,e){const n=i.slice();return n[7]=t[e],n[6]=e,n}function Xt(i,t,e){const n=i.slice();return n[9]=t[e],n}function zt(i,t,e){const n=i.slice();return n[9]=t[e],n}function Se(i){let t,e=K(i[7]),n=[];for(let o=0;o<e.length;o+=1)n[o]=Yt(Xt(i,e,o));return{c(){t=S("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=G(o,"DIV",{class:!0});var l=L(t);for(let r=0;r<n.length;r+=1)n[r].l(l);l.forEach(m),this.h()},h(){I(t,"class","spu-97d92f svelte-1rbdoya")},m(o,l){$(o,t,l);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(o,l){if(l&2){e=K(o[7]);let r;for(r=0;r<e.length;r+=1){const a=Xt(o,e,r);n[r]?n[r].p(a,l):(n[r]=Yt(a),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=e.length}},d(o){o&&m(t),wt(n,o)}}}function Ge(i){let t,e=K(i[7]),n=[];for(let o=0;o<e.length;o+=1)n[o]=Zt(zt(i,e,o));return{c(){t=S("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=G(o,"DIV",{class:!0});var l=L(t);for(let r=0;r<n.length;r+=1)n[r].l(l);l.forEach(m),this.h()},h(){I(t,"class","spu-ir01t5 svelte-1rbdoya")},m(o,l){$(o,t,l);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(o,l){if(l&2){e=K(o[7]);let r;for(r=0;r<e.length;r+=1){const a=zt(o,e,r);n[r]?n[r].p(a,l):(n[r]=Zt(a),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=e.length}},d(o){o&&m(t),wt(n,o)}}}function Yt(i){let t,e=i[9]+"",n;return{c(){t=S("div"),n=C(e),this.h()},l(o){t=G(o,"DIV",{class:!0});var l=L(t);n=B(l,e),l.forEach(m),this.h()},h(){I(t,"class","spu-qr88op svelte-1rbdoya")},m(o,l){$(o,t,l),R(t,n)},p(o,l){l&2&&e!==(e=o[9]+"")&&tt(n,e)},d(o){o&&m(t)}}}function Zt(i){let t,e=i[9]+"",n;return{c(){t=S("div"),n=C(e),this.h()},l(o){t=G(o,"DIV",{class:!0});var l=L(t);n=B(l,e),l.forEach(m),this.h()},h(){I(t,"class","spu-qrlrta svelte-1rbdoya")},m(o,l){$(o,t,l),R(t,n)},p(o,l){l&2&&e!==(e=o[9]+"")&&tt(n,e)},d(o){o&&m(t)}}}function Jt(i){let t;function e(l,r){return l[6]===0?Ge:Se}let o=e(i)(i);return{c(){o.c(),t=xt()},l(l){o.l(l),t=xt()},m(l,r){o.m(l,r),$(l,t,r)},p(l,r){o.p(l,r)},d(l){l&&m(t),o.d(l)}}}function Kt(i){let t,e=i[4]+"",n,o,l;function r(){return i[3](i[4])}return{c(){t=S("button"),n=C(e),this.h()},l(a){t=G(a,"BUTTON",{class:!0});var s=L(t);n=B(s,e),s.forEach(m),this.h()},h(){I(t,"class","spu-5t5s78 svelte-1rbdoya"),J(t,"spu-90f586",i[6]===0||i[6]===2),J(t,"spu-ele793",i[6]===1||i[6]===3),J(t,"spu-sy2u3g",i[6]===0||i[6]===1),J(t,"spu-128of1",i[6]===2||i[6]===3),J(t,"spu-lwxm1l",i[0]===i[4]),J(t,"spu-oicpgb",i[0]===i[4])},m(a,s){$(a,t,s),R(t,n),o||(l=A(t,"click",r),o=!0)},p(a,s){i=a,s&5&&J(t,"spu-lwxm1l",i[0]===i[4]),s&5&&J(t,"spu-oicpgb",i[0]===i[4])},d(a){a&&m(t),o=!1,l()}}}function Te(i){let t,e,n,o,l=K(Object.values(i[1])),r=[];for(let c=0;c<l.length;c+=1)r[c]=Jt(Wt(i,l,c));let a=K(i[2]),s=[];for(let c=0;c<a.length;c+=1)s[c]=Kt(Mt(i,a,c));return{c(){t=S("div"),e=S("div"),n=D();for(let c=0;c<r.length;c+=1)r[c].c();o=D();for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=G(c,"DIV",{class:!0});var f=L(t);e=G(f,"DIV",{class:!0}),L(e).forEach(m),n=P(f);for(let u=0;u<r.length;u+=1)r[u].l(f);o=P(f);for(let u=0;u<s.length;u+=1)s[u].l(f);f.forEach(m),this.h()},h(){I(e,"class","svelte-1rbdoya"),I(t,"class","spu-qjrzsl svelte-1rbdoya")},m(c,f){$(c,t,f),R(t,e),R(t,n);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);R(t,o);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(t,null)},p(c,[f]){if(f&2){l=K(Object.values(c[1]));let u;for(u=0;u<l.length;u+=1){const b=Wt(c,l,u);r[u]?r[u].p(b,f):(r[u]=Jt(b),r[u].c(),r[u].m(t,o))}for(;u<r.length;u+=1)r[u].d(1);r.length=l.length}if(f&5){a=K(c[2]);let u;for(u=0;u<a.length;u+=1){const b=Mt(c,a,u);s[u]?s[u].p(b,f):(s[u]=Kt(b),s[u].c(),s[u].m(t,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=a.length}},i:X,o:X,d(c){c&&m(t),wt(r,c),wt(s,c)}}}function Ee(i,t,e){let{xy:n}=t,o=[];for(let a of n.y)for(let s of n.x)o.push(`${a} ${s}`);let{selected:l}=t;const r=a=>e(0,l=a);return i.$$set=a=>{"xy"in a&&e(1,n=a.xy),"selected"in a&&e(0,l=a.selected)},[l,n,o,r]}class Ie extends F{constructor(t){super(),N(this,t,Ee,Te,U,{xy:1,selected:0})}}const St="#ff5522";function Le(i){let t,e,n;const o=i[3].default,l=Bt(o,i,i[2],null);let r=[{style:e=i[0]+"; background: "+St+"; color:white;"},i[1]],a={};for(let s=0;s<r.length;s+=1)a=q(a,r[s]);return{c(){t=S("button"),l&&l.c(),this.h()},l(s){t=G(s,"BUTTON",{style:!0});var c=L(t);l&&l.l(c),c.forEach(m),this.h()},h(){et(t,a)},m(s,c){$(s,t,c),l&&l.m(t,null),t.autofocus&&t.focus(),n=!0},p(s,[c]){l&&l.p&&(!n||c&4)&&Dt(l,o,s,s[2],n?kt(o,s[2],c,null):Pt(s[2]),null),et(t,a=dt(r,[(!n||c&1&&e!==(e=s[0]+"; background: "+St+"; color:white;"))&&{style:e},c&2&&s[1]]))},i(s){n||(h(l,s),n=!0)},o(s){d(l,s),n=!1},d(s){s&&m(t),l&&l.d(s)}}}function Ue(i,t,e){const n=["style"];let o=nt(t,n),{$$slots:l={},$$scope:r}=t,{style:a=""}=t;return i.$$set=s=>{t=q(q({},t),it(s)),e(1,o=nt(t,n)),"style"in s&&e(0,a=s.style),"$$scope"in s&&e(2,r=s.$$scope)},[a,o,r,l]}class $t extends F{constructor(t){super(),N(this,t,Ue,Le,U,{style:0})}}function Fe(i){let t;return{c(){t=C("Up")},l(e){t=B(e,"Up")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Ne(i){let t;return{c(){t=C("Down")},l(e){t=B(e,"Down")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Ve(i){let t;return{c(){t=C("Left")},l(e){t=B(e,"Left")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function He(i){let t;return{c(){t=C("Right")},l(e){t=B(e,"Right")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function je(i){let t,e,n,o,l,r,a,s,c;return e=new $t({props:{style:"grid-area: u;",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),o=new $t({props:{style:"grid-area: d;",$$slots:{default:[Ne]},$$scope:{ctx:i}}}),r=new $t({props:{style:"grid-area: l;",$$slots:{default:[Ve]},$$scope:{ctx:i}}}),s=new $t({props:{style:"grid-area: r;",$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){t=S("div"),v(e.$$.fragment),n=D(),v(o.$$.fragment),l=D(),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){t=G(f,"DIV",{class:!0});var u=L(t);y(e.$$.fragment,u),n=P(u),y(o.$$.fragment,u),l=P(u),y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(t,"class","containery svelte-1rhl4ra")},m(f,u){$(f,t,u),w(e,t,null),R(t,n),w(o,t,null),R(t,l),w(r,t,null),R(t,a),w(s,t,null),c=!0},p(f,[u]){const b={};u&1&&(b.$$scope={dirty:u,ctx:f}),e.$set(b);const g={};u&1&&(g.$$scope={dirty:u,ctx:f}),o.$set(g);const _={};u&1&&(_.$$scope={dirty:u,ctx:f}),r.$set(_);const k={};u&1&&(k.$$scope={dirty:u,ctx:f}),s.$set(k)},i(f){c||(h(e.$$.fragment,f),h(o.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(e.$$.fragment,f),d(o.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&m(t),x(e),x(o),x(r),x(s)}}}class Oe extends F{constructor(t){super(),N(this,t,null,je,U,{})}}function qe(i){let t,e,n,o,l;return o=new Oe({}),{c(){t=S("div"),e=C(i[0]),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"DIV",{style:!0});var a=L(t);e=B(a,i[0]),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){Y(t,"border","1px solid "+St),Y(t,"padding","10px")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){(!l||a&1)&&tt(e,r[0])},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}function Ae(i,t,e){let{title:n}=t;return i.$$set=o=>{"title"in o&&e(0,n=o.title)},[n]}class Qt extends F{constructor(t){super(),N(this,t,Ae,qe,U,{title:0})}}function Me(i){let t;return{c(){t=C("Submit")},l(e){t=B(e,"Submit")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function We(i){let t,e,n,o,l;return o=new $t({props:{type:"submit",$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){t=S("form"),e=S("input"),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"FORM",{});var a=L(t);e=G(a,"INPUT",{placeholder:!0}),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){I(e,"placeholder","Type something...")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}class Xe extends F{constructor(t){super(),N(this,t,null,We,U,{})}}function ze(i){let t,e,n,o,l,r,a,s,c;return t=new Xe({}),r=new Qt({props:{title:"Player 1"}}),s=new Qt({props:{title:"Player 2"}}),{c(){v(t.$$.fragment),e=D(),n=S("hr"),o=D(),l=S("div"),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){y(t.$$.fragment,f),e=P(f),n=G(f,"HR",{}),o=P(f),l=G(f,"DIV",{class:!0});var u=L(l);y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(l,"class","spu-qo8qdq")},m(f,u){w(t,f,u),$(f,e,u),$(f,n,u),$(f,o,u),$(f,l,u),w(r,l,null),R(l,a),w(s,l,null),c=!0},p:X,i(f){c||(h(t.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(t.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&(m(e),m(n),m(o),m(l)),x(t,f),x(r),x(s)}}}class st extends F{constructor(t){super(),N(this,t,null,ze,U,{})}}const Ye=`<script>\r
	import Game from "./Game.svelte";\r
	import Form from "./Form.svelte";\r
<\/script>\r
\r
<Form />\r
\r
<hr />\r
\r
<div class="flex">\r
	<Game title="Player 1" />\r
	<Game title="Player 2" />\r
</div>\r
\r
<style>\r
</style>\r
`,Ze=`<script>\r
	import { color } from "./data";\r
	export let style = "";\r
<\/script>\r
\r
<button style="{style}; background: {color}; color:white;" {...$$restProps}>\r
	<slot />\r
</button>`,Je=`<script>\r
	import Button from "./Button.svelte";\r
<\/script>\r
\r
<div class="containery">\r
	<Button style="grid-area: u;">Up</Button>\r
	<Button style="grid-area: d;">Down</Button>\r
	<Button style="grid-area: l;">Left</Button>\r
	<Button style="grid-area: r;">Right</Button>\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: 50px 50px 50px;\r
		grid-template-rows: 50px 50px;\r
		grid-template-areas:\r
			"_ u __"\r
			"l d r ";\r
	}\r
</style>\r
`,Ke=`<script>\r
	import Button from './Button.svelte';\r
<\/script>\r
\r
<form>\r
	<input placeholder="Type something..." />\r
	<Button type="submit">\r
		Submit\r
	</Button>\r
</form>`,Qe=`<script>\r
	import Controller from "./Controller.svelte";\r
	import { color } from "./data";\r
	export let title;\r
<\/script>\r
\r
<div style="border: 1px solid {color}; padding: 10px;">\r
	{title}\r
	<Controller />\r
</div>\r
`,tn=`// static variable (not a store) that will be used across components\r
export const color = "#ff5522";\r
`;function en(i){let t,e,n;const o=i[4].default,l=Bt(o,i,i[3],null);let r=[{style:e=i[0]+"; background: "+i[1]+"; color:white;"},i[2]],a={};for(let s=0;s<r.length;s+=1)a=q(a,r[s]);return{c(){t=S("button"),l&&l.c(),this.h()},l(s){t=G(s,"BUTTON",{style:!0});var c=L(t);l&&l.l(c),c.forEach(m),this.h()},h(){et(t,a)},m(s,c){$(s,t,c),l&&l.m(t,null),t.autofocus&&t.focus(),n=!0},p(s,[c]){l&&l.p&&(!n||c&8)&&Dt(l,o,s,s[3],n?kt(o,s[3],c,null):Pt(s[3]),null),et(t,a=dt(r,[(!n||c&1&&e!==(e=s[0]+"; background: "+s[1]+"; color:white;"))&&{style:e},c&4&&s[2]]))},i(s){n||(h(l,s),n=!0)},o(s){d(l,s),n=!1},d(s){s&&m(t),l&&l.d(s)}}}function nn(i,t,e){const n=["style"];let o=nt(t,n),{$$slots:l={},$$scope:r}=t;const a=Gt("color");let{style:s=""}=t;return i.$$set=c=>{t=q(q({},t),it(c)),e(2,o=nt(t,n)),"style"in c&&e(0,s=c.style),"$$scope"in c&&e(3,r=c.$$scope)},[s,a,o,r,l]}class pt extends F{constructor(t){super(),N(this,t,nn,en,U,{style:0})}}function rn(i){let t;return{c(){t=C("Submit")},l(e){t=B(e,"Submit")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function ln(i){let t,e,n,o,l;return o=new pt({props:{type:"submit",$$slots:{default:[rn]},$$scope:{ctx:i}}}),{c(){t=S("form"),e=S("input"),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"FORM",{});var a=L(t);e=G(a,"INPUT",{placeholder:!0}),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){I(e,"placeholder","Type something...")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}class on extends F{constructor(t){super(),N(this,t,null,ln,U,{})}}function sn(i){let t;return{c(){t=C("Up")},l(e){t=B(e,"Up")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function an(i){let t;return{c(){t=C("Down")},l(e){t=B(e,"Down")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function un(i){let t;return{c(){t=C("Left")},l(e){t=B(e,"Left")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function fn(i){let t;return{c(){t=C("Right")},l(e){t=B(e,"Right")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function cn(i){let t,e,n,o,l,r,a,s,c;return e=new pt({props:{style:"grid-area: u;",$$slots:{default:[sn]},$$scope:{ctx:i}}}),o=new pt({props:{style:"grid-area: d;",$$slots:{default:[an]},$$scope:{ctx:i}}}),r=new pt({props:{style:"grid-area: l;",$$slots:{default:[un]},$$scope:{ctx:i}}}),s=new pt({props:{style:"grid-area: r;",$$slots:{default:[fn]},$$scope:{ctx:i}}}),{c(){t=S("div"),v(e.$$.fragment),n=D(),v(o.$$.fragment),l=D(),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){t=G(f,"DIV",{class:!0});var u=L(t);y(e.$$.fragment,u),n=P(u),y(o.$$.fragment,u),l=P(u),y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(t,"class","containery svelte-1rhl4ra")},m(f,u){$(f,t,u),w(e,t,null),R(t,n),w(o,t,null),R(t,l),w(r,t,null),R(t,a),w(s,t,null),c=!0},p(f,[u]){const b={};u&1&&(b.$$scope={dirty:u,ctx:f}),e.$set(b);const g={};u&1&&(g.$$scope={dirty:u,ctx:f}),o.$set(g);const _={};u&1&&(_.$$scope={dirty:u,ctx:f}),r.$set(_);const k={};u&1&&(k.$$scope={dirty:u,ctx:f}),s.$set(k)},i(f){c||(h(e.$$.fragment,f),h(o.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(e.$$.fragment,f),d(o.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&m(t),x(e),x(o),x(r),x(s)}}}class mn extends F{constructor(t){super(),N(this,t,null,cn,U,{})}}function $n(i){let t,e,n,o,l;return o=new mn({}),{c(){t=S("div"),e=C(i[0]),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"DIV",{style:!0});var a=L(t);e=B(a,i[0]),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){Y(t,"border","1px solid "+i[1]),Y(t,"padding","10px")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){(!l||a&1)&&tt(e,r[0]),(!l||a&2)&&Y(t,"border","1px solid "+r[1])},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}function pn(i,t,e){let{title:n}=t,{color:o}=t;return ut("color",o),i.$$set=l=>{"title"in l&&e(0,n=l.title),"color"in l&&e(1,o=l.color)},[n,o]}class te extends F{constructor(t){super(),N(this,t,pn,$n,U,{title:0,color:1})}}function _n(i){let t,e,n,o,l,r,a,s,c;return t=new on({}),r=new te({props:{title:"Player 1",color:"green"}}),s=new te({props:{title:"Player 2",color:"blue"}}),{c(){v(t.$$.fragment),e=D(),n=S("hr"),o=D(),l=S("div"),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){y(t.$$.fragment,f),e=P(f),n=G(f,"HR",{}),o=P(f),l=G(f,"DIV",{class:!0});var u=L(l);y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(l,"class","spu-36p9iy")},m(f,u){w(t,f,u),$(f,e,u),$(f,n,u),$(f,o,u),$(f,l,u),w(r,l,null),R(l,a),w(s,l,null),c=!0},p:X,i(f){c||(h(t.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(t.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&(m(e),m(n),m(o),m(l)),x(t,f),x(r),x(s)}}}function gn(i){return ut("color","#ff5522"),[]}class ct extends F{constructor(t){super(),N(this,t,gn,_n,U,{})}}const hn=`<script>\r
	import { setContext } from "svelte";\r
	import Form2 from "./Form2.svelte";\r
	import Game2 from "./Game2.svelte";\r
\r
	setContext("color", "#ff5522");\r
<\/script>\r
\r
<Form2 />\r
\r
<hr />\r
\r
<div class="flex">\r
	<Game2 title="Player 1" color="green" />\r
	<Game2 title="Player 2" color="blue" />\r
</div>\r
\r
<style>\r
</style>\r
`,dn=`<script>\r
	import { getContext } from "svelte";\r
	const color = getContext("color");\r
	export let style = "";\r
<\/script>\r
\r
<button style="{style}; background: {color}; color:white;" {...$$restProps}>\r
	<slot />\r
</button>`,bn=`<script>\r
	import Button2 from "./Button2.svelte";\r
<\/script>\r
\r
<div class="containery">\r
	<Button2 style="grid-area: u;">Up</Button2>\r
	<Button2 style="grid-area: d;">Down</Button2>\r
	<Button2 style="grid-area: l;">Left</Button2>\r
	<Button2 style="grid-area: r;">Right</Button2>\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: 50px 50px 50px;\r
		grid-template-rows: 50px 50px;\r
		grid-template-areas:\r
			"_ u __"\r
			"l d r ";\r
	}\r
</style>\r
`,vn=`<script>\r
	import Button2 from './Button2.svelte';\r
<\/script>\r
\r
<form>\r
	<input placeholder="Type something..." />\r
	<Button2 type="submit">\r
		Submit\r
	</Button2>\r
</form>`,yn=`<script>\r
	import { setContext } from "svelte";\r
	import Controller2 from "./Controller2.svelte";\r
	export let title;\r
	export let color;\r
\r
	setContext("color", color);\r
<\/script>\r
\r
<div style="border: 1px solid {color}; padding: 10px;">\r
	{title}\r
	<Controller2 />\r
</div>`,Ct=rt("#ff5522");function wn(i){let t,e,n;const o=i[4].default,l=Bt(o,i,i[3],null);let r=[{style:e=i[0]+"; background: "+i[1]+"; color:white;"},i[2]],a={};for(let s=0;s<r.length;s+=1)a=q(a,r[s]);return{c(){t=S("button"),l&&l.c(),this.h()},l(s){t=G(s,"BUTTON",{style:!0});var c=L(t);l&&l.l(c),c.forEach(m),this.h()},h(){et(t,a)},m(s,c){$(s,t,c),l&&l.m(t,null),t.autofocus&&t.focus(),n=!0},p(s,[c]){l&&l.p&&(!n||c&8)&&Dt(l,o,s,s[3],n?kt(o,s[3],c,null):Pt(s[3]),null),et(t,a=dt(r,[(!n||c&3&&e!==(e=s[0]+"; background: "+s[1]+"; color:white;"))&&{style:e},c&4&&s[2]]))},i(s){n||(h(l,s),n=!0)},o(s){d(l,s),n=!1},d(s){s&&m(t),l&&l.d(s)}}}function xn(i,t,e){const n=["style"];let o=nt(t,n),l;M(i,Ct,c=>e(1,l=c));let{$$slots:r={},$$scope:a}=t,{style:s=""}=t;return i.$$set=c=>{t=q(q({},t),it(c)),e(2,o=nt(t,n)),"style"in c&&e(0,s=c.style),"$$scope"in c&&e(3,a=c.$$scope)},[s,l,o,a,r]}class _t extends F{constructor(t){super(),N(this,t,xn,wn,U,{style:0})}}function Cn(i){let t;return{c(){t=C("Up")},l(e){t=B(e,"Up")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Bn(i){let t;return{c(){t=C("Down")},l(e){t=B(e,"Down")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Dn(i){let t;return{c(){t=C("Left")},l(e){t=B(e,"Left")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Pn(i){let t;return{c(){t=C("Right")},l(e){t=B(e,"Right")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function kn(i){let t,e,n,o,l,r,a,s,c;return e=new _t({props:{style:"grid-area: u;",$$slots:{default:[Cn]},$$scope:{ctx:i}}}),o=new _t({props:{style:"grid-area: d;",$$slots:{default:[Bn]},$$scope:{ctx:i}}}),r=new _t({props:{style:"grid-area: l;",$$slots:{default:[Dn]},$$scope:{ctx:i}}}),s=new _t({props:{style:"grid-area: r;",$$slots:{default:[Pn]},$$scope:{ctx:i}}}),{c(){t=S("div"),v(e.$$.fragment),n=D(),v(o.$$.fragment),l=D(),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){t=G(f,"DIV",{class:!0});var u=L(t);y(e.$$.fragment,u),n=P(u),y(o.$$.fragment,u),l=P(u),y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(t,"class","containery svelte-1rhl4ra")},m(f,u){$(f,t,u),w(e,t,null),R(t,n),w(o,t,null),R(t,l),w(r,t,null),R(t,a),w(s,t,null),c=!0},p(f,[u]){const b={};u&1&&(b.$$scope={dirty:u,ctx:f}),e.$set(b);const g={};u&1&&(g.$$scope={dirty:u,ctx:f}),o.$set(g);const _={};u&1&&(_.$$scope={dirty:u,ctx:f}),r.$set(_);const k={};u&1&&(k.$$scope={dirty:u,ctx:f}),s.$set(k)},i(f){c||(h(e.$$.fragment,f),h(o.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(e.$$.fragment,f),d(o.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&m(t),x(e),x(o),x(r),x(s)}}}class Rn extends F{constructor(t){super(),N(this,t,null,kn,U,{})}}function Sn(i){let t,e,n,o,l;return o=new Rn({}),{c(){t=S("div"),e=C(i[0]),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"DIV",{style:!0});var a=L(t);e=B(a,i[0]),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){Y(t,"border","1px solid "+i[1]),Y(t,"padding","10px")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){(!l||a&1)&&tt(e,r[0]),(!l||a&2)&&Y(t,"border","1px solid "+r[1])},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}function Gn(i,t,e){let n;M(i,Ct,l=>e(1,n=l));let{title:o}=t;return i.$$set=l=>{"title"in l&&e(0,o=l.title)},[o,n]}class ee extends F{constructor(t){super(),N(this,t,Gn,Sn,U,{title:0})}}function Tn(i){let t;return{c(){t=C("Submit")},l(e){t=B(e,"Submit")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function En(i){let t,e,n,o,l;return o=new _t({props:{type:"submit",$$slots:{default:[Tn]},$$scope:{ctx:i}}}),{c(){t=S("form"),e=S("input"),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"FORM",{});var a=L(t);e=G(a,"INPUT",{placeholder:!0}),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){I(e,"placeholder","Type something...")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}class In extends F{constructor(t){super(),N(this,t,null,En,U,{})}}function Ln(i){let t,e,n,o,l,r,a,s,c,f,u,b,g;return t=new In({}),s=new ee({props:{title:"Player 1"}}),f=new ee({props:{title:"Player 2"}}),{c(){v(t.$$.fragment),e=D(),n=S("hr"),o=D(),l=S("input"),r=D(),a=S("div"),v(s.$$.fragment),c=D(),v(f.$$.fragment),this.h()},l(_){y(t.$$.fragment,_),e=P(_),n=G(_,"HR",{}),o=P(_),l=G(_,"INPUT",{type:!0}),r=P(_),a=G(_,"DIV",{class:!0});var k=L(a);y(s.$$.fragment,k),c=P(k),y(f.$$.fragment,k),k.forEach(m),this.h()},h(){I(l,"type","color"),I(a,"class","spu-4s5xk5")},m(_,k){w(t,_,k),$(_,e,k),$(_,n,k),$(_,o,k),$(_,l,k),O(l,i[0]),$(_,r,k),$(_,a,k),w(s,a,null),R(a,c),w(f,a,null),u=!0,b||(g=A(l,"input",i[1]),b=!0)},p(_,[k]){k&1&&O(l,_[0])},i(_){u||(h(t.$$.fragment,_),h(s.$$.fragment,_),h(f.$$.fragment,_),u=!0)},o(_){d(t.$$.fragment,_),d(s.$$.fragment,_),d(f.$$.fragment,_),u=!1},d(_){_&&(m(e),m(n),m(o),m(l),m(r),m(a)),x(t,_),x(s),x(f),b=!1,g()}}}function Un(i,t,e){let n;M(i,Ct,l=>e(0,n=l));function o(){n=this.value,Ct.set(n)}return[n,o]}class at extends F{constructor(t){super(),N(this,t,Un,Ln,U,{})}}const Fn=`<script>\r
	import Game3 from "./Game3.svelte";\r
	import { color } from "./data3";\r
	import Form3 from "./Form3.svelte";\r
<\/script>\r
\r
<Form3 />\r
<hr />\r
<input type="color" bind:value={$color} />\r
<div class="flex">\r
	<Game3 title="Player 1" />\r
	<Game3 title="Player 2" />\r
</div>\r
\r
<style>\r
</style>\r
`,Nn=`<script>\r
	import { color } from "./data3";\r
	export let style = "";\r
<\/script>\r
\r
<button style="{style}; background: {$color}; color:white;" {...$$restProps}>\r
	<slot />\r
</button>\r
`,Vn=`<script>\r
	import Button3 from "./Button3.svelte";\r
<\/script>\r
\r
<div class="containery">\r
	<Button3 style="grid-area: u;">Up</Button3>\r
	<Button3 style="grid-area: d;">Down</Button3>\r
	<Button3 style="grid-area: l;">Left</Button3>\r
	<Button3 style="grid-area: r;">Right</Button3>\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: 50px 50px 50px;\r
		grid-template-rows: 50px 50px;\r
		grid-template-areas:\r
			"_ u __"\r
			"l d r ";\r
	}\r
</style>\r
`,Hn=`<script>\r
	import Button3 from './Button3.svelte';\r
<\/script>\r
\r
<form>\r
	<input placeholder="Type something..." />\r
	<Button3 type="submit">\r
		Submit\r
	</Button3>\r
</form>`,jn=`<script>\r
	import Controller3 from "./Controller3.svelte";\r
	export let title;\r
	import { color } from "./data3";\r
<\/script>\r
\r
<div style="border: 1px solid {$color}; padding: 10px;">\r
	{title}\r
	<Controller3 />\r
</div>\r
`,On=`import { writable } from "svelte/store";\r
\r
export const color = writable("#ff5522");\r
`;function qn(i){let t,e,n;const o=i[5].default,l=Bt(o,i,i[4],null);let r=[{style:e=i[0]+"; background: "+i[1]+"; color:white;"},i[3]],a={};for(let s=0;s<r.length;s+=1)a=q(a,r[s]);return{c(){t=S("button"),l&&l.c(),this.h()},l(s){t=G(s,"BUTTON",{style:!0});var c=L(t);l&&l.l(c),c.forEach(m),this.h()},h(){et(t,a)},m(s,c){$(s,t,c),l&&l.m(t,null),t.autofocus&&t.focus(),n=!0},p(s,[c]){l&&l.p&&(!n||c&16)&&Dt(l,o,s,s[4],n?kt(o,s[4],c,null):Pt(s[4]),null),et(t,a=dt(r,[(!n||c&3&&e!==(e=s[0]+"; background: "+s[1]+"; color:white;"))&&{style:e},c&8&&s[3]]))},i(s){n||(h(l,s),n=!0)},o(s){d(l,s),n=!1},d(s){s&&m(t),l&&l.d(s)}}}function An(i,t,e){const n=["style"];let o=nt(t,n),l,{$$slots:r={},$$scope:a}=t;const s=Gt("color");M(i,s,f=>e(1,l=f));let{style:c=""}=t;return i.$$set=f=>{t=q(q({},t),it(f)),e(3,o=nt(t,n)),"style"in f&&e(0,c=f.style),"$$scope"in f&&e(4,a=f.$$scope)},[c,l,s,o,a,r]}class gt extends F{constructor(t){super(),N(this,t,An,qn,U,{style:0})}}function Mn(i){let t;return{c(){t=C("Submit")},l(e){t=B(e,"Submit")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Wn(i){let t,e,n,o,l;return o=new gt({props:{type:"submit",$$slots:{default:[Mn]},$$scope:{ctx:i}}}),{c(){t=S("form"),e=S("input"),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"FORM",{});var a=L(t);e=G(a,"INPUT",{placeholder:!0}),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){I(e,"placeholder","Type something...")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:r}),o.$set(s)},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}class Xn extends F{constructor(t){super(),N(this,t,null,Wn,U,{})}}function zn(i){let t;return{c(){t=C("Up")},l(e){t=B(e,"Up")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Yn(i){let t;return{c(){t=C("Down")},l(e){t=B(e,"Down")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Zn(i){let t;return{c(){t=C("Left")},l(e){t=B(e,"Left")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Jn(i){let t;return{c(){t=C("Right")},l(e){t=B(e,"Right")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Kn(i){let t,e,n,o,l,r,a,s,c;return e=new gt({props:{style:"grid-area: u;",$$slots:{default:[zn]},$$scope:{ctx:i}}}),o=new gt({props:{style:"grid-area: d;",$$slots:{default:[Yn]},$$scope:{ctx:i}}}),r=new gt({props:{style:"grid-area: l;",$$slots:{default:[Zn]},$$scope:{ctx:i}}}),s=new gt({props:{style:"grid-area: r;",$$slots:{default:[Jn]},$$scope:{ctx:i}}}),{c(){t=S("div"),v(e.$$.fragment),n=D(),v(o.$$.fragment),l=D(),v(r.$$.fragment),a=D(),v(s.$$.fragment),this.h()},l(f){t=G(f,"DIV",{class:!0});var u=L(t);y(e.$$.fragment,u),n=P(u),y(o.$$.fragment,u),l=P(u),y(r.$$.fragment,u),a=P(u),y(s.$$.fragment,u),u.forEach(m),this.h()},h(){I(t,"class","containery svelte-1rhl4ra")},m(f,u){$(f,t,u),w(e,t,null),R(t,n),w(o,t,null),R(t,l),w(r,t,null),R(t,a),w(s,t,null),c=!0},p(f,[u]){const b={};u&1&&(b.$$scope={dirty:u,ctx:f}),e.$set(b);const g={};u&1&&(g.$$scope={dirty:u,ctx:f}),o.$set(g);const _={};u&1&&(_.$$scope={dirty:u,ctx:f}),r.$set(_);const k={};u&1&&(k.$$scope={dirty:u,ctx:f}),s.$set(k)},i(f){c||(h(e.$$.fragment,f),h(o.$$.fragment,f),h(r.$$.fragment,f),h(s.$$.fragment,f),c=!0)},o(f){d(e.$$.fragment,f),d(o.$$.fragment,f),d(r.$$.fragment,f),d(s.$$.fragment,f),c=!1},d(f){f&&m(t),x(e),x(o),x(r),x(s)}}}class Qn extends F{constructor(t){super(),N(this,t,null,Kn,U,{})}}function tr(i){let t,e,n,o,l;return o=new Qn({}),{c(){t=S("div"),e=C(i[0]),n=D(),v(o.$$.fragment),this.h()},l(r){t=G(r,"DIV",{style:!0});var a=L(t);e=B(a,i[0]),n=P(a),y(o.$$.fragment,a),a.forEach(m),this.h()},h(){Y(t,"border","1px solid "+i[2]),Y(t,"padding","10px")},m(r,a){$(r,t,a),R(t,e),R(t,n),w(o,t,null),l=!0},p(r,[a]){(!l||a&1)&&tt(e,r[0]),(!l||a&4)&&Y(t,"border","1px solid "+r[2])},i(r){l||(h(o.$$.fragment,r),l=!0)},o(r){d(o.$$.fragment,r),l=!1},d(r){r&&m(t),x(o)}}}function er(i,t,e){let n,o=X,l=()=>(o(),o=se(a,s=>e(2,n=s)),a);i.$$.on_destroy.push(()=>o());let{title:r}=t,{color:a}=t;return l(),ut("color",a),i.$$set=s=>{"title"in s&&e(0,r=s.title),"color"in s&&l(e(1,a=s.color))},[r,a,n]}class ne extends F{constructor(t){super(),N(this,t,er,tr,U,{title:0,color:1})}}function nr(i){let t,e,n,o,l,r,a,s,c,f,u,b,g,_,k,z,W;return a=new Xn({}),b=new ne({props:{title:"Player 1",color:i[4]}}),_=new ne({props:{title:"Player 2",color:i[5]}}),{c(){t=S("input"),e=D(),n=S("input"),o=D(),l=S("input"),r=D(),v(a.$$.fragment),s=D(),c=S("hr"),f=D(),u=S("div"),v(b.$$.fragment),g=D(),v(_.$$.fragment),this.h()},l(T){t=G(T,"INPUT",{type:!0}),e=P(T),n=G(T,"INPUT",{type:!0}),o=P(T),l=G(T,"INPUT",{type:!0}),r=P(T),y(a.$$.fragment,T),s=P(T),c=G(T,"HR",{}),f=P(T),u=G(T,"DIV",{class:!0});var V=L(u);y(b.$$.fragment,V),g=P(V),y(_.$$.fragment,V),V.forEach(m),this.h()},h(){I(t,"type","color"),I(n,"type","color"),I(l,"type","color"),I(u,"class","spu-oi4spt")},m(T,V){$(T,t,V),O(t,i[0]),$(T,e,V),$(T,n,V),O(n,i[1]),$(T,o,V),$(T,l,V),O(l,i[2]),$(T,r,V),w(a,T,V),$(T,s,V),$(T,c,V),$(T,f,V),$(T,u,V),w(b,u,null),R(u,g),w(_,u,null),k=!0,z||(W=[A(t,"input",i[6]),A(n,"input",i[7]),A(l,"input",i[8])],z=!0)},p(T,[V]){V&1&&O(t,T[0]),V&2&&O(n,T[1]),V&4&&O(l,T[2])},i(T){k||(h(a.$$.fragment,T),h(b.$$.fragment,T),h(_.$$.fragment,T),k=!0)},o(T){d(a.$$.fragment,T),d(b.$$.fragment,T),d(_.$$.fragment,T),k=!1},d(T){T&&(m(t),m(e),m(n),m(o),m(l),m(r),m(s),m(c),m(f),m(u)),x(a,T),x(b),x(_),z=!1,Tt(W)}}}function rr(i,t,e){let n,o,l;const r=rt("#ff5522");M(i,r,b=>e(0,n=b));const a=rt("#0f7f12");M(i,a,b=>e(1,o=b));const s=rt("#0b24fb");M(i,s,b=>e(2,l=b)),ut("color",r);function c(){n=this.value,r.set(n)}function f(){o=this.value,a.set(o)}function u(){l=this.value,s.set(l)}return[n,o,l,r,a,s,c,f,u]}class mt extends F{constructor(t){super(),N(this,t,rr,nr,U,{})}}const lr=`<script>\r
	import { setContext } from "svelte";\r
	import { writable } from "svelte/store";\r
	import Form4 from "./Form4.svelte";\r
	import Game4 from "./Game4.svelte";\r
\r
	const color = writable("#ff5522");\r
	const game1Color = writable("#0f7f12");\r
	const game2Color = writable("#0b24fb");\r
	setContext("color", color);\r
<\/script>\r
\r
<input type="color" bind:value={$color} />\r
<input type="color" bind:value={$game1Color} />\r
<input type="color" bind:value={$game2Color} />\r
\r
<Form4 />\r
\r
<hr />\r
\r
<div class="flex">\r
	<Game4 title="Player 1" color={game1Color} />\r
	<Game4 title="Player 2" color={game2Color} />\r
</div>\r
\r
<style>\r
</style>\r
`,or=`<script>\r
	import { getContext } from "svelte";\r
	const color = getContext("color");\r
	export let style = "";\r
<\/script>\r
\r
<button style="{style}; background: {$color}; color:white;" {...$$restProps}>\r
	<slot />\r
</button>\r
`,sr=`<script>\r
	import Button4 from "./Button4.svelte";\r
<\/script>\r
\r
<div class="containery">\r
	<Button4 style="grid-area: u;">Up</Button4>\r
	<Button4 style="grid-area: d;">Down</Button4>\r
	<Button4 style="grid-area: l;">Left</Button4>\r
	<Button4 style="grid-area: r;">Right</Button4>\r
</div>\r
\r
<style>\r
	.containery {\r
		display: grid;\r
		grid-template-columns: 50px 50px 50px;\r
		grid-template-rows: 50px 50px;\r
		grid-template-areas:\r
			"_ u __"\r
			"l d r ";\r
	}\r
</style>\r
`,ar=`<script>\r
	import Button4 from './Button4.svelte';\r
<\/script>\r
\r
<form>\r
	<input placeholder="Type something..." />\r
	<Button4 type="submit">\r
		Submit\r
	</Button4>\r
</form>`,ir=`<script>\r
	import { setContext } from "svelte";\r
	import Controller4 from "./Controller4.svelte";\r
	export let title;\r
	export let color;\r
\r
	setContext("color", color);\r
<\/script>\r
\r
<div style="border: 1px solid {$color}; padding: 10px;">\r
	{title}\r
	<Controller4 />\r
</div>\r
`;function ur(i){let t;return{c(){t=C("What is the difference between stores and context? Let's find out!")},l(e){t=B(e,"What is the difference between stores and context? Let's find out!")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function fr(i){let t;return{c(){t=C("Here we have an example where Parent1 and Parent2 are identical. They both import a Child component.")},l(e){t=B(e,"Here we have an example where Parent1 and Parent2 are identical. They both import a Child component.")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function cr(i){let t;return{c(){t=C("both of the sliders move")},l(e){t=B(e,"both of the sliders move")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function mr(i){let t;return{c(){t=C("both update")},l(e){t=B(e,"both update")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function $r(i){let t;return{c(){t=C("only one of them move")},l(e){t=B(e,"only one of them move")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function pr(i){let t;return{c(){t=C("one of")},l(e){t=B(e,"one of")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function _r(i){let t,e,n,o,l,r,a,s,c,f;return e=new Q({props:{$$slots:{default:[cr]},$$scope:{ctx:i}}}),o=new Q({props:{$$slots:{default:[mr]},$$scope:{ctx:i}}}),r=new Q({props:{$$slots:{default:[$r]},$$scope:{ctx:i}}}),s=new Q({props:{$$slots:{default:[pr]},$$scope:{ctx:i}}}),{c(){t=C("If you change the Store slider you can see that "),v(e.$$.fragment),n=C(" (and the childrens' values "),v(o.$$.fragment),l=C("), but if you change the context slider "),v(r.$$.fragment),a=C(" (and "),v(s.$$.fragment),c=C(" the children's value updates).")},l(u){t=B(u,"If you change the Store slider you can see that "),y(e.$$.fragment,u),n=B(u," (and the childrens' values "),y(o.$$.fragment,u),l=B(u,"), but if you change the context slider "),y(r.$$.fragment,u),a=B(u," (and "),y(s.$$.fragment,u),c=B(u," the children's value updates).")},m(u,b){$(u,t,b),w(e,u,b),$(u,n,b),w(o,u,b),$(u,l,b),w(r,u,b),$(u,a,b),w(s,u,b),$(u,c,b),f=!0},p(u,b){const g={};b&16&&(g.$$scope={dirty:b,ctx:u}),e.$set(g);const _={};b&16&&(_.$$scope={dirty:b,ctx:u}),o.$set(_);const k={};b&16&&(k.$$scope={dirty:b,ctx:u}),r.$set(k);const z={};b&16&&(z.$$scope={dirty:b,ctx:u}),s.$set(z)},i(u){f||(h(e.$$.fragment,u),h(o.$$.fragment,u),h(r.$$.fragment,u),h(s.$$.fragment,u),f=!0)},o(u){d(e.$$.fragment,u),d(o.$$.fragment,u),d(r.$$.fragment,u),d(s.$$.fragment,u),f=!1},d(u){u&&(m(t),m(n),m(l),m(a),m(c)),x(e,u),x(o,u),x(r,u),x(s,u)}}}function gr(i){let t;return{c(){t=C("share their data everywhere")},l(e){t=B(e,"share their data everywhere")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function hr(i){let t;return{c(){t=C("only shares data between related components")},l(e){t=B(e,"only shares data between related components")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function dr(i){let t,e,n,o,l,r;return e=new Q({props:{$$slots:{default:[gr]},$$scope:{ctx:i}}}),o=new Q({props:{$$slots:{default:[hr]},$$scope:{ctx:i}}}),{c(){t=C("This is because stores "),v(e.$$.fragment),n=C(" and context "),v(o.$$.fragment),l=C(". That is, only the Child instance in Parent1 will listen to Parent1's context and only the Child instance in Parent2 will listen to Parent2's context.")},l(a){t=B(a,"This is because stores "),y(e.$$.fragment,a),n=B(a," and context "),y(o.$$.fragment,a),l=B(a,". That is, only the Child instance in Parent1 will listen to Parent1's context and only the Child instance in Parent2 will listen to Parent2's context.")},m(a,s){$(a,t,s),w(e,a,s),$(a,n,s),w(o,a,s),$(a,l,s),r=!0},p(a,s){const c={};s&16&&(c.$$scope={dirty:s,ctx:a}),e.$set(c);const f={};s&16&&(f.$$scope={dirty:s,ctx:a}),o.$set(f)},i(a){r||(h(e.$$.fragment,a),h(o.$$.fragment,a),r=!0)},o(a){d(e.$$.fragment,a),d(o.$$.fragment,a),r=!1},d(a){a&&(m(t),m(n),m(l)),x(e,a),x(o,a)}}}function br(i){let t;return{c(){t=C("are not mutually exclusive")},l(e){t=B(e,"are not mutually exclusive")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function vr(i){let t;return{c(){t=C("reactive context")},l(e){t=B(e,"reactive context")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function yr(i){let t;return{c(){t=C("See this for more info")},l(e){t=B(e,"See this for more info")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function wr(i){let t,e,n,o,l,r,a;return e=new Q({props:{$$slots:{default:[br]},$$scope:{ctx:i}}}),o=new Q({props:{$$slots:{default:[vr]},$$scope:{ctx:i}}}),r=new $e({props:{href:pe+"/svelte-course/034%20-%20Reactive%20context",$$slots:{default:[yr]},$$scope:{ctx:i}}}),{c(){t=C("This also means that stores and context "),v(e.$$.fragment),n=C(". We could have a context that uses stores to get a "),v(o.$$.fragment),l=C(". "),v(r.$$.fragment)},l(s){t=B(s,"This also means that stores and context "),y(e.$$.fragment,s),n=B(s,". We could have a context that uses stores to get a "),y(o.$$.fragment,s),l=B(s,". "),y(r.$$.fragment,s)},m(s,c){$(s,t,c),w(e,s,c),$(s,n,c),w(o,s,c),$(s,l,c),w(r,s,c),a=!0},p(s,c){const f={};c&16&&(f.$$scope={dirty:c,ctx:s}),e.$set(f);const u={};c&16&&(u.$$scope={dirty:c,ctx:s}),o.$set(u);const b={};c&16&&(b.$$scope={dirty:c,ctx:s}),r.$set(b)},i(s){a||(h(e.$$.fragment,s),h(o.$$.fragment,s),h(r.$$.fragment,s),a=!0)},o(s){d(e.$$.fragment,s),d(o.$$.fragment,s),d(r.$$.fragment,s),a=!1},d(s){s&&(m(t),m(n),m(l)),x(e,s),x(o,s),x(r,s)}}}function xr(i){let t;return{c(){t=C("When should I use a store and when should I use context?")},l(e){t=B(e,"When should I use a store and when should I use context?")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Cr(i){let t;return{c(){t=C("Here is another way to think about this question. Click the buttons to see the different components!")},l(e){t=B(e,"Here is another way to think about this question. Click the buttons to see the different components!")},m(e,n){$(e,t,n)},d(e){e&&m(t)}}}function Br(i){let t,e;return t=new bt({props:{name:[{name:"LocalDynamic",comp:mt,raw:lr,text:"Local Dynamic means that the colors are local since we're using context and dynamic since we're using multiple stores."},{name:"Button4",comp:mt,raw:or,text:""},{name:"Controller4",comp:mt,raw:sr,text:""},{name:"Form4",comp:mt,raw:ar,text:""},{name:"Game4",comp:mt,raw:ir,text:""}]}}),{c(){v(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,o){w(t,n,o),e=!0},p:X,i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){d(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function Dr(i){let t,e;return t=new bt({props:{name:[{name:"GlobalDynamic",comp:at,raw:Fn,text:"Global Dynamic means that the colors are global but we're using a store to have a dynamic color value that's coming from a color picker."},{name:"Button3",comp:at,raw:Nn,text:""},{name:"Controller3",comp:at,raw:Vn,text:""},{name:"Form3",comp:at,raw:Hn,text:""},{name:"Game3",comp:at,raw:jn,text:""},{name:"data3.js",comp:at,raw:On,text:""}]}}),{c(){v(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,o){w(t,n,o),e=!0},p:X,i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){d(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function Pr(i){let t,e;return t=new bt({props:{name:[{name:"LocalStatic",comp:ct,raw:hn,text:"Local Static means that the colors are local since we're using context but also static since we're not using a store. The reason we're using context instead of props is that the place that sets the color is very high up in the component tree: LocalStatic.svelte. Since we use context any children can use getContext() and we don't have to pass props from parent -> child -> grandchild and so on."},{name:"Button2",comp:ct,raw:dn,text:""},{name:"Controller2",comp:ct,raw:bn,text:""},{name:"Form2",comp:ct,raw:vn,text:""},{name:"Game2",comp:ct,raw:yn,text:""}]}}),{c(){v(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,o){w(t,n,o),e=!0},p:X,i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){d(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function kr(i){let t,e;return t=new bt({props:{name:[{name:"GlobalStatic",comp:st,raw:Ye,text:"Global Static means that the colors are global and statically imported from a data.js file. No stores or context are needed."},{name:"Button",comp:st,raw:Ze,text:""},{name:"Controller",comp:st,raw:Je,text:""},{name:"Form",comp:st,raw:Ke,text:""},{name:"Game",comp:st,raw:Qe,text:""},{name:"data.js",comp:st,raw:tn,text:""}]}}),{c(){v(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,o){w(t,n,o),e=!0},p:X,i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){d(t.$$.fragment,n),e=!1},d(n){x(t,n)}}}function Rr(i){let t,e,n,o,l,r,a,s,c,f,u,b,g,_,k,z,W,T,V,H,j,lt,vt;t=new ot({props:{$$slots:{default:[ur]},$$scope:{ctx:i}}}),n=new bt({props:{name:[{name:"App",comp:ft,raw:Be,text:""},{name:"Parent1",comp:ft,raw:De,text:""},{name:"Parent2",comp:ft,raw:Pe,text:""},{name:"Child",comp:ft,raw:ke,text:""},{name:"store.js",comp:ft,raw:Re,text:""}]}}),l=new ot({props:{$$slots:{default:[fr]},$$scope:{ctx:i}}}),a=new ot({props:{$$slots:{default:[_r]},$$scope:{ctx:i}}}),c=new ot({props:{$$slots:{default:[dr]},$$scope:{ctx:i}}}),u=new ot({props:{$$slots:{default:[wr]},$$scope:{ctx:i}}}),g=new _e({props:{$$slots:{default:[xr]},$$scope:{ctx:i}}}),k=new ot({props:{$$slots:{default:[Cr]},$$scope:{ctx:i}}});function oe(p){i[3](p)}let Et={xy:i[1]};i[0]!==void 0&&(Et.selected=i[0]),W=new Ie({props:Et}),ae.push(()=>ue(W,"selected",oe));const It=[kr,Pr,Dr,Br],Z=[];function Lt(p,E){return p[0]==="Global Static"?0:p[0]==="Local Static"?1:p[0]==="Global Dynamic"?2:p[0]==="Local Dynamic"?3:-1}return~(H=Lt(i))&&(j=Z[H]=It[H](i)),{c(){v(t.$$.fragment),e=D(),v(n.$$.fragment),o=D(),v(l.$$.fragment),r=D(),v(a.$$.fragment),s=D(),v(c.$$.fragment),f=D(),v(u.$$.fragment),b=D(),v(g.$$.fragment),_=D(),v(k.$$.fragment),z=D(),v(W.$$.fragment),V=D(),j&&j.c(),lt=xt()},l(p){y(t.$$.fragment,p),e=P(p),y(n.$$.fragment,p),o=P(p),y(l.$$.fragment,p),r=P(p),y(a.$$.fragment,p),s=P(p),y(c.$$.fragment,p),f=P(p),y(u.$$.fragment,p),b=P(p),y(g.$$.fragment,p),_=P(p),y(k.$$.fragment,p),z=P(p),y(W.$$.fragment,p),V=P(p),j&&j.l(p),lt=xt()},m(p,E){w(t,p,E),$(p,e,E),w(n,p,E),$(p,o,E),w(l,p,E),$(p,r,E),w(a,p,E),$(p,s,E),w(c,p,E),$(p,f,E),w(u,p,E),$(p,b,E),w(g,p,E),$(p,_,E),w(k,p,E),$(p,z,E),w(W,p,E),$(p,V,E),~H&&Z[H].m(p,E),$(p,lt,E),vt=!0},p(p,E){const Ut={};E&16&&(Ut.$$scope={dirty:E,ctx:p}),t.$set(Ut);const Ft={};E&16&&(Ft.$$scope={dirty:E,ctx:p}),l.$set(Ft);const Nt={};E&16&&(Nt.$$scope={dirty:E,ctx:p}),a.$set(Nt);const Vt={};E&16&&(Vt.$$scope={dirty:E,ctx:p}),c.$set(Vt);const Ht={};E&16&&(Ht.$$scope={dirty:E,ctx:p}),u.$set(Ht);const jt={};E&16&&(jt.$$scope={dirty:E,ctx:p}),g.$set(jt);const Ot={};E&16&&(Ot.$$scope={dirty:E,ctx:p}),k.$set(Ot);const qt={};!T&&E&1&&(T=!0,qt.selected=p[0],ie(()=>T=!1)),W.$set(qt);let Rt=H;H=Lt(p),H===Rt?~H&&Z[H].p(p,E):(j&&(fe(),d(Z[Rt],1,1,()=>{Z[Rt]=null}),ce()),~H?(j=Z[H],j?j.p(p,E):(j=Z[H]=It[H](p),j.c()),h(j,1),j.m(lt.parentNode,lt)):j=null)},i(p){vt||(h(t.$$.fragment,p),h(n.$$.fragment,p),h(l.$$.fragment,p),h(a.$$.fragment,p),h(c.$$.fragment,p),h(u.$$.fragment,p),h(g.$$.fragment,p),h(k.$$.fragment,p),h(W.$$.fragment,p),h(j),vt=!0)},o(p){d(t.$$.fragment,p),d(n.$$.fragment,p),d(l.$$.fragment,p),d(a.$$.fragment,p),d(c.$$.fragment,p),d(u.$$.fragment,p),d(g.$$.fragment,p),d(k.$$.fragment,p),d(W.$$.fragment,p),d(j),vt=!1},d(p){p&&(m(e),m(o),m(r),m(s),m(f),m(b),m(_),m(z),m(V),m(lt)),x(t,p),x(n,p),x(l,p),x(a,p),x(c,p),x(u,p),x(g,p),x(k,p),x(W,p),~H&&Z[H].d(p)}}}function Sr(i){let t,e;const n=[i[2],re];let o={$$slots:{default:[Rr]},$$scope:{ctx:i}};for(let l=0;l<n.length;l+=1)o=q(o,n[l]);return t=new me({props:o}),{c(){v(t.$$.fragment)},l(l){y(t.$$.fragment,l)},m(l,r){w(t,l,r),e=!0},p(l,[r]){const a=r&4?dt(n,[r&4&&At(l[2]),r&0&&At(re)]):{};r&17&&(a.$$scope={dirty:r,ctx:l}),t.$set(a)},i(l){e||(h(t.$$.fragment,l),e=!0)},o(l){d(t.$$.fragment,l),e=!1},d(l){x(t,l)}}}const re={title:"Store vs context",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-03-31T00:00:00.000Z",layout:"notes"};function Gr(i,t,e){let n="Global Static",o={x:["Static","Dynamic"],y:["Global","Local"]};function l(r){n=r,e(0,n)}return i.$$set=r=>{e(2,t=q(q({},t),it(r)))},t=it(t),[n,o,t,l]}class Or extends F{constructor(t){super(),N(this,t,Gr,Sr,U,{})}}export{Or as default,re as metadata};
