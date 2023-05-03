import{S as P,i as D,s as M,k as L,q as g,a as R,l as I,m as U,r as d,h as c,c as S,b as i,D as E,H as A,J as j,p as se,e as le,n as ae,K as Ae,y as v,z as w,A as k,L as bt,M as Ze,g as b,d as x,B as y,N as Fe}from"./index.0b5cc0d7.js";import{M as xt,P as q}from"./mdsvex-layout-notes.c527e9b3.js";import{S as W}from"./ShowCode.1ad00a73.js";import{S as oe}from"./Strong.272c5f79.js";function yt(a){let e,n,t=a[0][0]+"",l,r,s,f=a[0][1]+"",_,p,$,h=a[0][2]+"",m;return{c(){e=L("ul"),n=L("li"),l=g(t),r=R(),s=L("li"),_=g(f),p=R(),$=L("li"),m=g(h)},l(T){e=I(T,"UL",{});var N=U(e);n=I(N,"LI",{});var C=U(n);l=d(C,t),C.forEach(c),r=S(N),s=I(N,"LI",{});var fe=U(s);_=d(fe,f),fe.forEach(c),p=S(N),$=I(N,"LI",{});var re=U($);m=d(re,h),re.forEach(c),N.forEach(c)},m(T,N){i(T,e,N),E(e,n),E(n,l),E(e,r),E(e,s),E(s,_),E(e,p),E(e,$),E($,m)},p:A,i:A,o:A,d(T){T&&c(e)}}}function At(a){return[["red","green","blue"]]}class Et extends P{constructor(e){super(),D(this,e,At,yt,M,{})}}const Lt=`<script>\r
	let colors = ["red", "green", "blue"];\r
<\/script>\r
\r
<ul>\r
	<li>{colors[0]}</li>\r
	<li>{colors[1]}</li>\r
	<li>{colors[2]}</li>\r
</ul>\r
`;function Ge(a,e,n){const t=a.slice();return t[1]=e[n],t}function Qe(a){let e,n=a[1]+"",t;return{c(){e=L("li"),t=g(n)},l(l){e=I(l,"LI",{});var r=U(e);t=d(r,n),r.forEach(c)},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function It(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=Qe(Ge(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=Ge(l,n,s);t[s]?t[s].p(f,r):(t[s]=Qe(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function Ut(a){return[["red","green","blue"]]}class Rt extends P{constructor(e){super(),D(this,e,Ut,It,M,{})}}const St=`<script>\r
	let colors = ["red", "green", "blue"];\r
<\/script>\r
\r
<ul>\r
	{#each colors as color}\r
		<li>{color}</li>\r
	{/each}\r
</ul>\r
`;function Ve(a,e,n){const t=a.slice();return t[1]=e[n],t}function Xe(a){let e,n=a[1].name+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{style:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){se(e,"color",a[1].hex)},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function Tt(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=Xe(Ve(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=Ve(l,n,s);t[s]?t[s].p(f,r):(t[s]=Xe(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function Nt(a){return[[{name:"red",hex:"#f00"},{name:"green",hex:"#0f0"},{name:"blue",hex:"#00f"}]]}class qt extends P{constructor(e){super(),D(this,e,Nt,Tt,M,{})}}const jt=`<script>\r
	let colors = [\r
		{ name: "red", hex: "#f00" },\r
		{ name: "green", hex: "#0f0" },\r
		{ name: "blue", hex: "#00f" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as color}\r
		<li style="color: {color.hex};">{color.name}</li>\r
	{/each}\r
</ul>\r
`;function Ye(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex,t}function et(a){let e,n=a[1]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{style:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){se(e,"color",a[2])},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function Ct(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=et(Ye(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=Ye(l,n,s);t[s]?t[s].p(f,r):(t[s]=et(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function Pt(a){return[[{name:"red",hex:"#f00"},{name:"green",hex:"#0f0"},{name:"blue",hex:"#00f"}]]}class Dt extends P{constructor(e){super(),D(this,e,Pt,Ct,M,{})}}const Mt=`<script>\r
	let colors = [\r
		{ name: "red", hex: "#f00" },\r
		{ name: "green", hex: "#0f0" },\r
		{ name: "blue", hex: "#00f" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as { name, hex }}\r
		<li style="color: {hex};">{name}</li>\r
	{/each}\r
</ul>\r
`;function tt(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex!==void 0?e[n].hex:"purple",t}function nt(a){let e,n=a[1]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{style:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){se(e,"color",a[2])},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function Wt(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=nt(tt(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=tt(l,n,s);t[s]?t[s].p(f,r):(t[s]=nt(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function zt(a){return[[{name:"red",hex:"#f00"},{name:"green",hex:"#0f0"},{name:"blue",hex:"#00f"},{name:"mysterious"}]]}class Bt extends P{constructor(e){super(),D(this,e,zt,Wt,M,{})}}const Jt=`<script>\r
	let colors = [\r
		{ name: "red", hex: "#f00" },\r
		{ name: "green", hex: "#0f0" },\r
		{ name: "blue", hex: "#00f" },\r
		{ name: "mysterious" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as { name, hex = "purple" }}\r
		<li style="color: {hex};">{name}</li>\r
	{/each}\r
</ul>\r
`;function lt(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex!==void 0?e[n].hex:"purple",t}function rt(a,e,n){const t=a.slice();return t[5]=e[n],t}function st(a){let e,n=a[5]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{class:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){ae(e,"class","uno-qupnz8")},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function ot(a){let e,n=a[1]+"",t,l,r,s=a[2],f=[];for(let _=0;_<s.length;_+=1)f[_]=st(rt(a,s,_));return{c(){e=L("li"),t=g(n),l=R();for(let _=0;_<f.length;_+=1)f[_].c();r=le(),this.h()},l(_){e=I(_,"LI",{style:!0});var p=U(e);t=d(p,n),p.forEach(c),l=S(_);for(let $=0;$<f.length;$+=1)f[$].l(_);r=le(),this.h()},h(){se(e,"color",a[2])},m(_,p){i(_,e,p),E(e,t),i(_,l,p);for(let $=0;$<f.length;$+=1)f[$]&&f[$].m(_,p);i(_,r,p)},p(_,p){if(p&1){s=_[2];let $;for($=0;$<s.length;$+=1){const h=rt(_,s,$);f[$]?f[$].p(h,p):(f[$]=st(h),f[$].c(),f[$].m(r.parentNode,r))}for(;$<f.length;$+=1)f[$].d(1);f.length=s.length}},d(_){_&&c(e),_&&c(l),j(f,_),_&&c(r)}}}function Ot(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=ot(lt(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=lt(l,n,s);t[s]?t[s].p(f,r):(t[s]=ot(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function Ht(a){return[[{name:"red",hex:"#f00"},{name:"green",hex:"#0f0"},{name:"blue",hex:"#00f"},{name:"mysterious"}]]}class Kt extends P{constructor(e){super(),D(this,e,Ht,Ot,M,{})}}const Zt=`<script>\r
	let colors = [\r
		{ name: "red", hex: "#f00" },\r
		{ name: "green", hex: "#0f0" },\r
		{ name: "blue", hex: "#00f" },\r
		{ name: "mysterious" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as { name, hex = "purple" }}\r
		<li style="color: {hex};">{name}</li>\r
    {#each hex as character}\r
      <li class="list-none">{character}</li>\r
    {/each}\r
	{/each}\r
</ul>\r
`;function at(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex!==void 0?e[n].hex:"purple",t[4]=n,t}function ft(a,e,n){const t=a.slice();return t[5]=e[n],t}function ct(a){let e,n=a[5]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{class:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){ae(e,"class","uno-qps8ip")},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function $t(a){let e,n=a[1]+"",t,l,r,s,f,_=a[2],p=[];for(let $=0;$<_.length;$+=1)p[$]=ct(ft(a,_,$));return{c(){e=L("li"),t=g(n),l=g(" - "),r=g(a[4]),s=R();for(let $=0;$<p.length;$+=1)p[$].c();f=le(),this.h()},l($){e=I($,"LI",{style:!0});var h=U(e);t=d(h,n),l=d(h," - "),r=d(h,a[4]),h.forEach(c),s=S($);for(let m=0;m<p.length;m+=1)p[m].l($);f=le(),this.h()},h(){se(e,"color",a[2])},m($,h){i($,e,h),E(e,t),E(e,l),E(e,r),i($,s,h);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m($,h);i($,f,h)},p($,h){if(h&1){_=$[2];let m;for(m=0;m<_.length;m+=1){const T=ft($,_,m);p[m]?p[m].p(T,h):(p[m]=ct(T),p[m].c(),p[m].m(f.parentNode,f))}for(;m<p.length;m+=1)p[m].d(1);p.length=_.length}},d($){$&&c(e),$&&c(s),j(p,$),$&&c(f)}}}function Ft(a){let e,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=$t(at(a,n,l));return{c(){e=L("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=I(l,"UL",{});var r=U(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(c)},m(l,r){i(l,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[r]){if(r&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=at(l,n,s);t[s]?t[s].p(f,r):(t[s]=$t(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:A,o:A,d(l){l&&c(e),j(t,l)}}}function Gt(a){return[[{name:"red",hex:"#f00"},{name:"green",hex:"#0f0"},{name:"blue",hex:"#00f"},{name:"mysterious"}]]}class Qt extends P{constructor(e){super(),D(this,e,Gt,Ft,M,{})}}const Vt=`<script>\r
	let colors = [\r
		{ name: "red", hex: "#f00" },\r
		{ name: "green", hex: "#0f0" },\r
		{ name: "blue", hex: "#00f" },\r
		{ name: "mysterious" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as { name, hex = "purple" }, i}\r
		<li style="color: {hex};">{name} - {i}</li>\r
    {#each hex as character}\r
      <li class="list-none">{character}</li>\r
    {/each}\r
	{/each}\r
</ul>\r
`;function ut(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex!==void 0?e[n].hex:"purple",t[4]=n,t}function it(a,e,n){const t=a.slice();return t[5]=e[n],t}function pt(a){let e,n;return{c(){e=L("p"),n=g("The array is empty 😞")},l(t){e=I(t,"P",{});var l=U(e);n=d(l,"The array is empty 😞"),l.forEach(c)},m(t,l){i(t,e,l),E(e,n)},p:A,d(t){t&&c(e)}}}function mt(a){let e,n=a[5]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{class:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){ae(e,"class","uno-ozissu")},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function _t(a){let e,n=a[1]+"",t,l,r,s,f,_=a[2],p=[];for(let $=0;$<_.length;$+=1)p[$]=mt(it(a,_,$));return{c(){e=L("li"),t=g(n),l=g(" - "),r=g(a[4]),s=R();for(let $=0;$<p.length;$+=1)p[$].c();f=le(),this.h()},l($){e=I($,"LI",{style:!0});var h=U(e);t=d(h,n),l=d(h," - "),r=d(h,a[4]),h.forEach(c),s=S($);for(let m=0;m<p.length;m+=1)p[m].l($);f=le(),this.h()},h(){se(e,"color",a[2])},m($,h){i($,e,h),E(e,t),E(e,l),E(e,r),i($,s,h);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m($,h);i($,f,h)},p($,h){if(h&1){_=$[2];let m;for(m=0;m<_.length;m+=1){const T=it($,_,m);p[m]?p[m].p(T,h):(p[m]=mt(T),p[m].c(),p[m].m(f.parentNode,f))}for(;m<p.length;m+=1)p[m].d(1);p.length=_.length}},d($){$&&c(e),$&&c(s),j(p,$),$&&c(f)}}}function Xt(a){let e,n=a[0],t=[];for(let r=0;r<n.length;r+=1)t[r]=_t(ut(a,n,r));let l=null;return n.length||(l=pt()),{c(){e=L("ul");for(let r=0;r<t.length;r+=1)t[r].c();l&&l.c()},l(r){e=I(r,"UL",{});var s=U(e);for(let f=0;f<t.length;f+=1)t[f].l(s);l&&l.l(s),s.forEach(c)},m(r,s){i(r,e,s);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);l&&l.m(e,null)},p(r,[s]){if(s&1){n=r[0];let f;for(f=0;f<n.length;f+=1){const _=ut(r,n,f);t[f]?t[f].p(_,s):(t[f]=_t(_),t[f].c(),t[f].m(e,null))}for(;f<t.length;f+=1)t[f].d(1);t.length=n.length,!n.length&&l?l.p(r,s):n.length?l&&(l.d(1),l=null):(l=pt(),l.c(),l.m(e,null))}},i:A,o:A,d(r){r&&c(e),j(t,r),l&&l.d()}}}function Yt(a){return[[]]}class en extends P{constructor(e){super(),D(this,e,Yt,Xt,M,{})}}const tn=`<script>\r
	let colors = [\r
		// { name: "red", hex: "#f00" },\r
		// { name: "green", hex: "#0f0" },\r
		// { name: "blue", hex: "#00f" },\r
		// { name: "mysterious" },\r
	];\r
<\/script>\r
\r
<ul>\r
	{#each colors as { name, hex = "purple" }, i}\r
		<li style="color: {hex};">{name} - {i}</li>\r
    {#each hex as character}\r
      <li class="list-none">{character}</li>\r
    {/each}\r
    {:else}\r
    <p>The array is empty 😞</p>\r
	{/each}\r
</ul>\r
`;function ht(a,e,n){const t=a.slice();return t[1]=e[n].name,t[2]=e[n].hex!==void 0?e[n].hex:"purple",t[4]=n,t}function gt(a,e,n){const t=a.slice();return t[5]=e[n],t}function dt(a){let e,n;return{c(){e=L("p"),n=g("The array is empty 😞")},l(t){e=I(t,"P",{});var l=U(e);n=d(l,"The array is empty 😞"),l.forEach(c)},m(t,l){i(t,e,l),E(e,n)},p:A,d(t){t&&c(e)}}}function vt(a){let e,n=a[5]+"",t;return{c(){e=L("li"),t=g(n),this.h()},l(l){e=I(l,"LI",{class:!0});var r=U(e);t=d(r,n),r.forEach(c),this.h()},h(){ae(e,"class","uno-0sbucr")},m(l,r){i(l,e,r),E(e,t)},p:A,d(l){l&&c(e)}}}function wt(a){let e,n=a[1]+"",t,l,r,s,f,_=a[2],p=[];for(let $=0;$<_.length;$+=1)p[$]=vt(gt(a,_,$));return{c(){e=L("li"),t=g(n),l=g(" - "),r=g(a[4]),s=R();for(let $=0;$<p.length;$+=1)p[$].c();f=le(),this.h()},l($){e=I($,"LI",{style:!0});var h=U(e);t=d(h,n),l=d(h," - "),r=d(h,a[4]),h.forEach(c),s=S($);for(let m=0;m<p.length;m+=1)p[m].l($);f=le(),this.h()},h(){se(e,"color",a[2])},m($,h){i($,e,h),E(e,t),E(e,l),E(e,r),i($,s,h);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m($,h);i($,f,h)},p($,h){if(h&1){_=$[2];let m;for(m=0;m<_.length;m+=1){const T=gt($,_,m);p[m]?p[m].p(T,h):(p[m]=vt(T),p[m].c(),p[m].m(f.parentNode,f))}for(;m<p.length;m+=1)p[m].d(1);p.length=_.length}},d($){$&&c(e),$&&c(s),j(p,$),$&&c(f)}}}function nn(a){let e,n=a[0]||[],t=[];for(let r=0;r<n.length;r+=1)t[r]=wt(ht(a,n,r));let l=null;return n.length||(l=dt()),{c(){e=L("ul");for(let r=0;r<t.length;r+=1)t[r].c();l&&l.c()},l(r){e=I(r,"UL",{});var s=U(e);for(let f=0;f<t.length;f+=1)t[f].l(s);l&&l.l(s),s.forEach(c)},m(r,s){i(r,e,s);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);l&&l.m(e,null)},p(r,[s]){if(s&1){n=r[0]||[];let f;for(f=0;f<n.length;f+=1){const _=ht(r,n,f);t[f]?t[f].p(_,s):(t[f]=wt(_),t[f].c(),t[f].m(e,null))}for(;f<t.length;f+=1)t[f].d(1);t.length=n.length,!n.length&&l?l.p(r,s):n.length?l&&(l.d(1),l=null):(l=dt(),l.c(),l.m(e,null))}},i:A,o:A,d(r){r&&c(e),j(t,r),l&&l.d()}}}function ln(a){let e;return[e]}class rn extends P{constructor(e){super(),D(this,e,ln,nn,M,{})}}const sn=`<script>\r
	let colors;\r
	// let colors = [\r
	// { name: "red", hex: "#f00" },\r
	// { name: "green", hex: "#0f0" },\r
	// { name: "blue", hex: "#00f" },\r
	// { name: "mysterious" },\r
	// ];\r
<\/script>\r
\r
<ul>\r
	{#each colors || [] as { name, hex = "purple" }, i}\r
		<li style="color: {hex};">{name} - {i}</li>\r
		{#each hex as character}\r
			<li class="list-none">{character}</li>\r
		{/each}\r
	{:else}\r
		<p>The array is empty 😞</p>\r
	{/each}\r
</ul>\r
`;function on(a){let e,n;return{c(){e=L("code"),n=g("{#each}")},l(t){e=I(t,"CODE",{});var l=U(e);n=d(l,"{#each}"),l.forEach(c)},m(t,l){i(t,e,l),E(e,n)},p:A,d(t){t&&c(e)}}}function an(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){e=g("Svelte has another logic block called the "),v(n.$$.fragment),t=g(" block.")},l(r){e=d(r,"Svelte has another logic block called the "),w(n.$$.fragment,r),t=d(r," block.")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function fn(a){let e;return{c(){e=g("Let's say I have an array of colors and I want to show all of them in a list.")},l(n){e=d(n,"Let's say I have an array of colors and I want to show all of them in a list.")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function cn(a){let e;return{c(){e=g("Usually you would do this:")},l(n){e=d(n,"Usually you would do this:")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function $n(a){let e;return{c(){e=g("But it gets annoying quickly when you want to add a color since you would need to edit the code in two places.")},l(n){e=d(n,"But it gets annoying quickly when you want to add a color since you would need to edit the code in two places.")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function un(a){let e;return{c(){e=g("In Javascript we could have some kind of for loop:")},l(n){e=d(n,"In Javascript we could have some kind of for loop:")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function pn(a){let e,n;return{c(){e=L("code"),n=g("{#each}")},l(t){e=I(t,"CODE",{});var l=U(e);n=d(l,"{#each}"),l.forEach(c)},m(t,l){i(t,e,l),E(e,n)},p:A,d(t){t&&c(e)}}}function mn(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[pn]},$$scope:{ctx:a}}}),{c(){e=g("And in Svelte we have something similar, the "),v(n.$$.fragment),t=g(" logic block.")},l(r){e=d(r,"And in Svelte we have something similar, the "),w(n.$$.fragment,r),t=d(r," logic block.")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function _n(a){let e,n;return e=new Rt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function hn(a){let e;return{c(){e=g("Let's try with an object:")},l(n){e=d(n,"Let's try with an object:")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function gn(a){let e,n;return e=new qt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function dn(a){let e;return{c(){e=g("destructuring syntax")},l(n){e=d(n,"destructuring syntax")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function vn(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[dn]},$$scope:{ctx:a}}}),{c(){e=g("We can also use "),v(n.$$.fragment),t=g(":")},l(r){e=d(r,"We can also use "),w(n.$$.fragment,r),t=d(r,":")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function wn(a){let e,n;return e=new Dt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function kn(a){let e;return{c(){e=g("default value")},l(n){e=d(n,"default value")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function bn(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[kn]},$$scope:{ctx:a}}}),{c(){e=g("We can have a "),v(n.$$.fragment),t=g(" that will be shown when the value is undefined:")},l(r){e=d(r,"We can have a "),w(n.$$.fragment,r),t=d(r," that will be shown when the value is undefined:")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function xn(a){let e,n;return e=new Bt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function yn(a){let e;return{c(){e=g("Nested each blocks:")},l(n){e=d(n,"Nested each blocks:")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function An(a){let e,n;return e=new Kt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function En(a){let e;return{c(){e=g("index")},l(n){e=d(n,"index")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function Ln(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[En]},$$scope:{ctx:a}}}),{c(){e=g("If you add a variable after a comma after the item name you can use it as an "),v(n.$$.fragment),t=g(":")},l(r){e=d(r,"If you add a variable after a comma after the item name you can use it as an "),w(n.$$.fragment,r),t=d(r,":")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function In(a){let e,n;return e=new Qt({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Un(a){let e,n;return{c(){e=L("code"),n=g("{:else}")},l(t){e=I(t,"CODE",{});var l=U(e);n=d(l,"{:else}"),l.forEach(c)},m(t,l){i(t,e,l),E(e,n)},p:A,d(t){t&&c(e)}}}function Rn(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[Un]},$$scope:{ctx:a}}}),{c(){e=g("If you have an empty array you can display something else using "),v(n.$$.fragment),t=g(":")},l(r){e=d(r,"If you have an empty array you can display something else using "),w(n.$$.fragment,r),t=d(r,":")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function Sn(a){let e,n;return e=new en({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Tn(a){let e;return{c(){e=g("||[]")},l(n){e=d(n,"||[]")},m(n,t){i(n,e,t)},d(n){n&&c(e)}}}function Nn(a){let e,n,t,l;return n=new oe({props:{$$slots:{default:[Tn]},$$scope:{ctx:a}}}),{c(){e=g("If your array is undefined you can avoid getting errors by adding "),v(n.$$.fragment),t=g(" after the array.")},l(r){e=d(r,"If your array is undefined you can avoid getting errors by adding "),w(n.$$.fragment,r),t=d(r," after the array.")},m(r,s){i(r,e,s),k(n,r,s),i(r,t,s),l=!0},p(r,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:r}),n.$set(f)},i(r){l||(b(n.$$.fragment,r),l=!0)},o(r){x(n.$$.fragment,r),l=!1},d(r){r&&c(e),y(n,r),r&&c(t)}}}function qn(a){let e,n;return e=new rn({}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function jn(a){let e,n,t,l,r,s,f,_,p,$,h,m,T,N,C,fe=`<code class="language-js"><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> color <span class="token keyword">of</span> colors<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,re,z,ce,B,$e,J,ue,O,ie,H,pe,K,me,Z,_e,F,he,G,ge,Q,de,V,ve,X,we,Y,ke,ee,be,te,xe,ne,ye;return e=new q({props:{$$slots:{default:[an]},$$scope:{ctx:a}}}),t=new q({props:{$$slots:{default:[fn]},$$scope:{ctx:a}}}),r=new q({props:{$$slots:{default:[cn]},$$scope:{ctx:a}}}),f=new Et({}),p=new W({props:{code:Lt,name:"App.svelte"}}),h=new q({props:{$$slots:{default:[$n]},$$scope:{ctx:a}}}),T=new q({props:{$$slots:{default:[un]},$$scope:{ctx:a}}}),z=new q({props:{$$slots:{default:[mn]},$$scope:{ctx:a}}}),B=new W({props:{code:St,name:"App2",$$slots:{default:[_n]},$$scope:{ctx:a}}}),J=new q({props:{$$slots:{default:[hn]},$$scope:{ctx:a}}}),O=new W({props:{code:jt,name:"App3",$$slots:{default:[gn]},$$scope:{ctx:a}}}),H=new q({props:{$$slots:{default:[vn]},$$scope:{ctx:a}}}),K=new W({props:{code:Mt,name:"App4",$$slots:{default:[wn]},$$scope:{ctx:a}}}),Z=new q({props:{$$slots:{default:[bn]},$$scope:{ctx:a}}}),F=new W({props:{code:Jt,name:"App5",$$slots:{default:[xn]},$$scope:{ctx:a}}}),G=new q({props:{$$slots:{default:[yn]},$$scope:{ctx:a}}}),Q=new W({props:{code:Zt,name:"App6",$$slots:{default:[An]},$$scope:{ctx:a}}}),V=new q({props:{$$slots:{default:[Ln]},$$scope:{ctx:a}}}),X=new W({props:{code:Vt,name:"App7",$$slots:{default:[In]},$$scope:{ctx:a}}}),Y=new q({props:{$$slots:{default:[Rn]},$$scope:{ctx:a}}}),ee=new W({props:{code:tn,name:"App8",$$slots:{default:[Sn]},$$scope:{ctx:a}}}),te=new q({props:{$$slots:{default:[Nn]},$$scope:{ctx:a}}}),ne=new W({props:{code:sn,name:"App9",$$slots:{default:[qn]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment),n=R(),v(t.$$.fragment),l=R(),v(r.$$.fragment),s=R(),v(f.$$.fragment),_=R(),v(p.$$.fragment),$=R(),v(h.$$.fragment),m=R(),v(T.$$.fragment),N=R(),C=L("pre"),re=R(),v(z.$$.fragment),ce=R(),v(B.$$.fragment),$e=R(),v(J.$$.fragment),ue=R(),v(O.$$.fragment),ie=R(),v(H.$$.fragment),pe=R(),v(K.$$.fragment),me=R(),v(Z.$$.fragment),_e=R(),v(F.$$.fragment),he=R(),v(G.$$.fragment),ge=R(),v(Q.$$.fragment),de=R(),v(V.$$.fragment),ve=R(),v(X.$$.fragment),we=R(),v(Y.$$.fragment),ke=R(),v(ee.$$.fragment),be=R(),v(te.$$.fragment),xe=R(),v(ne.$$.fragment),this.h()},l(o){w(e.$$.fragment,o),n=S(o),w(t.$$.fragment,o),l=S(o),w(r.$$.fragment,o),s=S(o),w(f.$$.fragment,o),_=S(o),w(p.$$.fragment,o),$=S(o),w(h.$$.fragment,o),m=S(o),w(T.$$.fragment,o),N=S(o),C=I(o,"PRE",{class:!0});var u=U(C);u.forEach(c),re=S(o),w(z.$$.fragment,o),ce=S(o),w(B.$$.fragment,o),$e=S(o),w(J.$$.fragment,o),ue=S(o),w(O.$$.fragment,o),ie=S(o),w(H.$$.fragment,o),pe=S(o),w(K.$$.fragment,o),me=S(o),w(Z.$$.fragment,o),_e=S(o),w(F.$$.fragment,o),he=S(o),w(G.$$.fragment,o),ge=S(o),w(Q.$$.fragment,o),de=S(o),w(V.$$.fragment,o),ve=S(o),w(X.$$.fragment,o),we=S(o),w(Y.$$.fragment,o),ke=S(o),w(ee.$$.fragment,o),be=S(o),w(te.$$.fragment,o),xe=S(o),w(ne.$$.fragment,o),this.h()},h(){ae(C,"class","language-js")},m(o,u){k(e,o,u),i(o,n,u),k(t,o,u),i(o,l,u),k(r,o,u),i(o,s,u),k(f,o,u),i(o,_,u),k(p,o,u),i(o,$,u),k(h,o,u),i(o,m,u),k(T,o,u),i(o,N,u),i(o,C,u),C.innerHTML=fe,i(o,re,u),k(z,o,u),i(o,ce,u),k(B,o,u),i(o,$e,u),k(J,o,u),i(o,ue,u),k(O,o,u),i(o,ie,u),k(H,o,u),i(o,pe,u),k(K,o,u),i(o,me,u),k(Z,o,u),i(o,_e,u),k(F,o,u),i(o,he,u),k(G,o,u),i(o,ge,u),k(Q,o,u),i(o,de,u),k(V,o,u),i(o,ve,u),k(X,o,u),i(o,we,u),k(Y,o,u),i(o,ke,u),k(ee,o,u),i(o,be,u),k(te,o,u),i(o,xe,u),k(ne,o,u),ye=!0},p(o,u){const Ee={};u&2&&(Ee.$$scope={dirty:u,ctx:o}),e.$set(Ee);const Le={};u&2&&(Le.$$scope={dirty:u,ctx:o}),t.$set(Le);const Ie={};u&2&&(Ie.$$scope={dirty:u,ctx:o}),r.$set(Ie);const Ue={};u&2&&(Ue.$$scope={dirty:u,ctx:o}),h.$set(Ue);const Re={};u&2&&(Re.$$scope={dirty:u,ctx:o}),T.$set(Re);const Se={};u&2&&(Se.$$scope={dirty:u,ctx:o}),z.$set(Se);const Te={};u&2&&(Te.$$scope={dirty:u,ctx:o}),B.$set(Te);const Ne={};u&2&&(Ne.$$scope={dirty:u,ctx:o}),J.$set(Ne);const qe={};u&2&&(qe.$$scope={dirty:u,ctx:o}),O.$set(qe);const je={};u&2&&(je.$$scope={dirty:u,ctx:o}),H.$set(je);const Ce={};u&2&&(Ce.$$scope={dirty:u,ctx:o}),K.$set(Ce);const Pe={};u&2&&(Pe.$$scope={dirty:u,ctx:o}),Z.$set(Pe);const De={};u&2&&(De.$$scope={dirty:u,ctx:o}),F.$set(De);const Me={};u&2&&(Me.$$scope={dirty:u,ctx:o}),G.$set(Me);const We={};u&2&&(We.$$scope={dirty:u,ctx:o}),Q.$set(We);const ze={};u&2&&(ze.$$scope={dirty:u,ctx:o}),V.$set(ze);const Be={};u&2&&(Be.$$scope={dirty:u,ctx:o}),X.$set(Be);const Je={};u&2&&(Je.$$scope={dirty:u,ctx:o}),Y.$set(Je);const Oe={};u&2&&(Oe.$$scope={dirty:u,ctx:o}),ee.$set(Oe);const He={};u&2&&(He.$$scope={dirty:u,ctx:o}),te.$set(He);const Ke={};u&2&&(Ke.$$scope={dirty:u,ctx:o}),ne.$set(Ke)},i(o){ye||(b(e.$$.fragment,o),b(t.$$.fragment,o),b(r.$$.fragment,o),b(f.$$.fragment,o),b(p.$$.fragment,o),b(h.$$.fragment,o),b(T.$$.fragment,o),b(z.$$.fragment,o),b(B.$$.fragment,o),b(J.$$.fragment,o),b(O.$$.fragment,o),b(H.$$.fragment,o),b(K.$$.fragment,o),b(Z.$$.fragment,o),b(F.$$.fragment,o),b(G.$$.fragment,o),b(Q.$$.fragment,o),b(V.$$.fragment,o),b(X.$$.fragment,o),b(Y.$$.fragment,o),b(ee.$$.fragment,o),b(te.$$.fragment,o),b(ne.$$.fragment,o),ye=!0)},o(o){x(e.$$.fragment,o),x(t.$$.fragment,o),x(r.$$.fragment,o),x(f.$$.fragment,o),x(p.$$.fragment,o),x(h.$$.fragment,o),x(T.$$.fragment,o),x(z.$$.fragment,o),x(B.$$.fragment,o),x(J.$$.fragment,o),x(O.$$.fragment,o),x(H.$$.fragment,o),x(K.$$.fragment,o),x(Z.$$.fragment,o),x(F.$$.fragment,o),x(G.$$.fragment,o),x(Q.$$.fragment,o),x(V.$$.fragment,o),x(X.$$.fragment,o),x(Y.$$.fragment,o),x(ee.$$.fragment,o),x(te.$$.fragment,o),x(ne.$$.fragment,o),ye=!1},d(o){y(e,o),o&&c(n),y(t,o),o&&c(l),y(r,o),o&&c(s),y(f,o),o&&c(_),y(p,o),o&&c($),y(h,o),o&&c(m),y(T,o),o&&c(N),o&&c(C),o&&c(re),y(z,o),o&&c(ce),y(B,o),o&&c($e),y(J,o),o&&c(ue),y(O,o),o&&c(ie),y(H,o),o&&c(pe),y(K,o),o&&c(me),y(Z,o),o&&c(_e),y(F,o),o&&c(he),y(G,o),o&&c(ge),y(Q,o),o&&c(de),y(V,o),o&&c(ve),y(X,o),o&&c(we),y(Y,o),o&&c(ke),y(ee,o),o&&c(be),y(te,o),o&&c(xe),y(ne,o)}}}function Cn(a){let e,n;const t=[a[0],kt];let l={$$slots:{default:[jn]},$$scope:{ctx:a}};for(let r=0;r<t.length;r+=1)l=Ae(l,t[r]);return e=new xt({props:l}),{c(){v(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,s){k(e,r,s),n=!0},p(r,[s]){const f=s&1?bt(t,[s&1&&Ze(r[0]),s&0&&Ze(kt)]):{};s&2&&(f.$$scope={dirty:s,ctx:r}),e.$set(f)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}const kt={title:"{#each}",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-07T00:00:00.000Z",layout:"notes"};function Pn(a,e,n){return a.$$set=t=>{n(0,e=Ae(Ae({},e),Fe(t)))},e=Fe(e),[e]}class Bn extends P{constructor(e){super(),D(this,e,Pn,Cn,M,{})}}export{Bn as default,kt as metadata};