import{s as x,f as P,a as C,l as _,g,c as R,h as j,m as c,d as f,j as X,i as h,a8 as S,v as w,X as Z,am as k,n as D,z,A as U,H as nt,C as ot,D as pt}from"./scheduler.a7cd560e.js";import{S as tt,i as et,b as F,d as G,m as J,a as K,t as L,e as Q}from"./index.396264e7.js";import{g as ft,a as at}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as vt,P as mt}from"./mdsvex-layout-notes.4b2b7ac6.js";import{d as q,w as B}from"./index.5e192797.js";import{S as st}from"./ShowMany.db7be1f3.js";import{S as ut}from"./Strong.097578ae.js";function $t(t){let e,u,r,a,i,$,s,p;return{c(){e=P("input"),u=C(),r=P("div"),a=_(t[0]),i=_(` * 2 =\r
	`),$=_(t[1]),this.h()},l(v){e=g(v,"INPUT",{type:!0}),u=R(v),r=g(v,"DIV",{});var l=j(r);a=c(l,t[0]),i=c(l,` * 2 =\r
	`),$=c(l,t[1]),l.forEach(f),this.h()},h(){X(e,"type","number")},m(v,l){h(v,e,l),S(e,t[0]),h(v,u,l),h(v,r,l),w(r,a),w(r,i),w(r,$),s||(p=Z(e,"input",t[4]),s=!0)},p(v,[l]){l&1&&k(e.value)!==v[0]&&S(e,v[0]),l&1&&D(a,v[0]),l&2&&D($,v[1])},i:z,o:z,d(v){v&&(f(e),f(u),f(r)),s=!1,p()}}}function _t(t,e,u){let r,a;const i=B(10);U(t,i,p=>u(0,r=p));const $=q(i,p=>p*2);U(t,$,p=>u(1,a=p));function s(){r=k(this.value),i.set(r)}return[r,a,i,$,s]}class ct extends tt{constructor(e){super(),et(this,e,_t,$t,x,{})}}const ht=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const newNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$newNum}\r
</div>\r
`;function bt(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),this.h()},l(I){e=g(I,"INPUT",{type:!0}),u=R(I),r=g(I,"INPUT",{type:!0}),a=R(I),i=g(I,"DIV",{});var O=j(i);$=c(O,t[0]),s=c(O,` * 2 =\r
	`),p=c(O,t[2]),O.forEach(f),v=R(I),l=g(I,"DIV",{});var M=j(l);N=c(M,t[0]),A=c(M," * "),d=c(M,t[1]),y=c(M,` =\r
	`),o=c(M,t[3]),M.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(I,O){h(I,e,O),S(e,t[0]),h(I,u,O),h(I,r,O),S(r,t[1]),h(I,a,O),h(I,i,O),w(i,$),w(i,s),w(i,p),h(I,v,O),h(I,l,O),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),T||(b=[Z(e,"input",t[8]),Z(r,"input",t[9])],T=!0)},p(I,[O]){O&1&&k(e.value)!==I[0]&&S(e,I[0]),O&2&&k(r.value)!==I[1]&&S(r,I[1]),O&1&&D($,I[0]),O&4&&D(p,I[2]),O&1&&D(N,I[0]),O&2&&D(d,I[1]),O&8&&D(o,I[3])},i:z,o:z,d(I){I&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l)),T=!1,nt(b)}}}function wt(t,e,u){let r,a,i,$;const s=B(10);U(t,s,d=>u(0,r=d));const p=B(42);U(t,p,d=>u(1,a=d));const v=q(s,d=>d*2);U(t,v,d=>u(2,i=d));const l=q([s,p],([d,y])=>d*y);U(t,l,d=>u(3,$=d));function N(){r=k(this.value),s.set(r)}function A(){a=k(this.value),p.set(a)}return[r,a,i,$,s,p,v,l,N,A]}class Nt extends tt{constructor(e){super(),et(this,e,wt,bt,x,{})}}const yt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
`;function It(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),this.h()},l(n){e=g(n,"INPUT",{type:!0}),u=R(n),r=g(n,"INPUT",{type:!0}),a=R(n),i=g(n,"DIV",{});var m=j(i);$=c(m,t[0]),s=c(m,` * 2 =\r
	`),p=c(m,t[2]),m.forEach(f),v=R(n),l=g(n,"DIV",{});var E=j(l);N=c(E,t[0]),A=c(E," * "),d=c(E,t[1]),y=c(E,` =\r
	`),o=c(E,t[3]),E.forEach(f),T=R(n),b=g(n,"DIV",{});var W=j(b);I=c(W,"delayed: "),O=c(W,t[4]),W.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(n,m){h(n,e,m),S(e,t[0]),h(n,u,m),h(n,r,m),S(r,t[1]),h(n,a,m),h(n,i,m),w(i,$),w(i,s),w(i,p),h(n,v,m),h(n,l,m),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(n,T,m),h(n,b,m),w(b,I),w(b,O),M||(H=[Z(e,"input",t[10]),Z(r,"input",t[11])],M=!0)},p(n,[m]){m&1&&k(e.value)!==n[0]&&S(e,n[0]),m&2&&k(r.value)!==n[1]&&S(r,n[1]),m&1&&D($,n[0]),m&4&&D(p,n[2]),m&1&&D(N,n[0]),m&2&&D(d,n[1]),m&8&&D(o,n[3]),m&16&&D(O,n[4])},i:z,o:z,d(n){n&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b)),M=!1,nt(H)}}}function Tt(t,e,u){let r,a,i,$,s;const p=B(10);U(t,p,o=>u(0,r=o));const v=B(42);U(t,v,o=>u(1,a=o));const l=q(p,o=>o*2);U(t,l,o=>u(2,i=o));const N=q([p,v],([o,T])=>o*T);U(t,N,o=>u(3,$=o));const A=q(p,(o,T)=>o);U(t,A,o=>u(4,s=o));function d(){r=k(this.value),p.set(r)}function y(){a=k(this.value),v.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y]}class Ot extends tt{constructor(e){super(),et(this,e,Tt,It,x,{})}}const At=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
  \r
	const delayedNum = derived(num, ($num, set) => {\r
		return $num;\r
	});\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
`;function Dt(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),this.h()},l(n){e=g(n,"INPUT",{type:!0}),u=R(n),r=g(n,"INPUT",{type:!0}),a=R(n),i=g(n,"DIV",{});var m=j(i);$=c(m,t[0]),s=c(m,` * 2 =\r
	`),p=c(m,t[2]),m.forEach(f),v=R(n),l=g(n,"DIV",{});var E=j(l);N=c(E,t[0]),A=c(E," * "),d=c(E,t[1]),y=c(E,` =\r
	`),o=c(E,t[3]),E.forEach(f),T=R(n),b=g(n,"DIV",{});var W=j(b);I=c(W,"delayed: "),O=c(W,t[4]),W.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(n,m){h(n,e,m),S(e,t[0]),h(n,u,m),h(n,r,m),S(r,t[1]),h(n,a,m),h(n,i,m),w(i,$),w(i,s),w(i,p),h(n,v,m),h(n,l,m),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(n,T,m),h(n,b,m),w(b,I),w(b,O),M||(H=[Z(e,"input",t[10]),Z(r,"input",t[11])],M=!0)},p(n,[m]){m&1&&k(e.value)!==n[0]&&S(e,n[0]),m&2&&k(r.value)!==n[1]&&S(r,n[1]),m&1&&D($,n[0]),m&4&&D(p,n[2]),m&1&&D(N,n[0]),m&2&&D(d,n[1]),m&8&&D(o,n[3]),m&16&&D(O,n[4])},i:z,o:z,d(n){n&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b)),M=!1,nt(H)}}}function Et(t,e,u){let r,a,i,$,s;const p=B(10);U(t,p,o=>u(0,r=o));const v=B(42);U(t,v,o=>u(1,a=o));const l=q(p,o=>o*2);U(t,l,o=>u(2,i=o));const N=q([p,v],([o,T])=>o*T);U(t,N,o=>u(3,$=o));const A=q(p,(o,T)=>o,"not set");U(t,A,o=>u(4,s=o));function d(){r=k(this.value),p.set(r)}function y(){a=k(this.value),v.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y]}class Vt extends tt{constructor(e){super(),et(this,e,Et,Dt,x,{})}}const Pt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
\r
	const delayedNum = derived(\r
		num,\r
		($num, set) => {\r
			return $num;\r
		},\r
		"not set"\r
	);\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
`;function gt(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),this.h()},l(n){e=g(n,"INPUT",{type:!0}),u=R(n),r=g(n,"INPUT",{type:!0}),a=R(n),i=g(n,"DIV",{});var m=j(i);$=c(m,t[0]),s=c(m,` * 2 =\r
	`),p=c(m,t[2]),m.forEach(f),v=R(n),l=g(n,"DIV",{});var E=j(l);N=c(E,t[0]),A=c(E," * "),d=c(E,t[1]),y=c(E,` =\r
	`),o=c(E,t[3]),E.forEach(f),T=R(n),b=g(n,"DIV",{});var W=j(b);I=c(W,"delayed: "),O=c(W,t[4]),W.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(n,m){h(n,e,m),S(e,t[0]),h(n,u,m),h(n,r,m),S(r,t[1]),h(n,a,m),h(n,i,m),w(i,$),w(i,s),w(i,p),h(n,v,m),h(n,l,m),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(n,T,m),h(n,b,m),w(b,I),w(b,O),M||(H=[Z(e,"input",t[10]),Z(r,"input",t[11])],M=!0)},p(n,[m]){m&1&&k(e.value)!==n[0]&&S(e,n[0]),m&2&&k(r.value)!==n[1]&&S(r,n[1]),m&1&&D($,n[0]),m&4&&D(p,n[2]),m&1&&D(N,n[0]),m&2&&D(d,n[1]),m&8&&D(o,n[3]),m&16&&D(O,n[4])},i:z,o:z,d(n){n&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b)),M=!1,nt(H)}}}function Ut(t,e,u){let r,a,i,$,s;const p=B(10);U(t,p,o=>u(0,r=o));const v=B(42);U(t,v,o=>u(1,a=o));const l=q(p,o=>o*2);U(t,l,o=>u(2,i=o));const N=q([p,v],([o,T])=>o*T);U(t,N,o=>u(3,$=o));const A=q(p,(o,T)=>{T(o)},"not set");U(t,A,o=>u(4,s=o));function d(){r=k(this.value),p.set(r)}function y(){a=k(this.value),v.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y]}class Ct extends tt{constructor(e){super(),et(this,e,Ut,gt,x,{})}}const Rt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
\r
	const delayedNum = derived(\r
		num,\r
		($num, set) => {\r
			set($num);\r
		},\r
		"not set"\r
	);\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
`;function Mt(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),this.h()},l(n){e=g(n,"INPUT",{type:!0}),u=R(n),r=g(n,"INPUT",{type:!0}),a=R(n),i=g(n,"DIV",{});var m=j(i);$=c(m,t[0]),s=c(m,` * 2 =\r
	`),p=c(m,t[2]),m.forEach(f),v=R(n),l=g(n,"DIV",{});var E=j(l);N=c(E,t[0]),A=c(E," * "),d=c(E,t[1]),y=c(E,` =\r
	`),o=c(E,t[3]),E.forEach(f),T=R(n),b=g(n,"DIV",{});var W=j(b);I=c(W,"delayed: "),O=c(W,t[4]),W.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(n,m){h(n,e,m),S(e,t[0]),h(n,u,m),h(n,r,m),S(r,t[1]),h(n,a,m),h(n,i,m),w(i,$),w(i,s),w(i,p),h(n,v,m),h(n,l,m),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(n,T,m),h(n,b,m),w(b,I),w(b,O),M||(H=[Z(e,"input",t[10]),Z(r,"input",t[11])],M=!0)},p(n,[m]){m&1&&k(e.value)!==n[0]&&S(e,n[0]),m&2&&k(r.value)!==n[1]&&S(r,n[1]),m&1&&D($,n[0]),m&4&&D(p,n[2]),m&1&&D(N,n[0]),m&2&&D(d,n[1]),m&8&&D(o,n[3]),m&16&&D(O,n[4])},i:z,o:z,d(n){n&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b)),M=!1,nt(H)}}}function St(t,e,u){let r,a,i,$,s;const p=B(10);U(t,p,o=>u(0,r=o));const v=B(42);U(t,v,o=>u(1,a=o));const l=q(p,o=>o*2);U(t,l,o=>u(2,i=o));const N=q([p,v],([o,T])=>o*T);U(t,N,o=>u(3,$=o));const A=q(p,(o,T)=>{setTimeout(()=>{T(o)},1e3)},"not set");U(t,A,o=>u(4,s=o));function d(){r=k(this.value),p.set(r)}function y(){a=k(this.value),v.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y]}class kt extends tt{constructor(e){super(),et(this,e,St,Mt,x,{})}}const Yt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
\r
	const delayedNum = derived(\r
		num,\r
		($num, set) => {\r
			setTimeout(() => {\r
				set($num);\r
			}, 1000);\r
		},\r
		"not set"\r
	);\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
`;function Ht(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),this.h()},l(n){e=g(n,"INPUT",{type:!0}),u=R(n),r=g(n,"INPUT",{type:!0}),a=R(n),i=g(n,"DIV",{});var m=j(i);$=c(m,t[0]),s=c(m,` * 2 =\r
	`),p=c(m,t[2]),m.forEach(f),v=R(n),l=g(n,"DIV",{});var E=j(l);N=c(E,t[0]),A=c(E," * "),d=c(E,t[1]),y=c(E,` =\r
	`),o=c(E,t[3]),E.forEach(f),T=R(n),b=g(n,"DIV",{});var W=j(b);I=c(W,"delayed: "),O=c(W,t[4]),W.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(n,m){h(n,e,m),S(e,t[0]),h(n,u,m),h(n,r,m),S(r,t[1]),h(n,a,m),h(n,i,m),w(i,$),w(i,s),w(i,p),h(n,v,m),h(n,l,m),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(n,T,m),h(n,b,m),w(b,I),w(b,O),M||(H=[Z(e,"input",t[10]),Z(r,"input",t[11])],M=!0)},p(n,[m]){m&1&&k(e.value)!==n[0]&&S(e,n[0]),m&2&&k(r.value)!==n[1]&&S(r,n[1]),m&1&&D($,n[0]),m&4&&D(p,n[2]),m&1&&D(N,n[0]),m&2&&D(d,n[1]),m&8&&D(o,n[3]),m&16&&D(O,n[4])},i:z,o:z,d(n){n&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b)),M=!1,nt(H)}}}function Wt(t,e,u){let r,a,i,$,s;const p=B(10);U(t,p,o=>u(0,r=o));const v=B(42);U(t,v,o=>u(1,a=o));const l=q(p,o=>o*2);U(t,l,o=>u(2,i=o));const N=q([p,v],([o,T])=>o*T);U(t,N,o=>u(3,$=o));const A=q(p,(o,T)=>{let b=setTimeout(()=>{T(o)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(b)}},"not set");U(t,A,o=>u(4,s=o));function d(){r=k(this.value),p.set(r)}function y(){a=k(this.value),v.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y]}class jt extends tt{constructor(e){super(),et(this,e,Wt,Ht,x,{})}}const qt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
\r
	const delayedNum = derived(\r
		num,\r
		($num, set) => {\r
			let timeoutId = setTimeout(() => {\r
				set($num);\r
			}, 1000);\r
			return () => {\r
				console.log("Cleanup for the function here");\r
				clearTimeout(timeoutId);\r
			};\r
		},\r
		"not set"\r
	);\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
`;function zt(t){let e,u,r,a,i,$,s,p,v,l,N,A,d,y,o,T,b,I,O,M,H,n,m,E,W;return{c(){e=P("input"),u=C(),r=P("input"),a=C(),i=P("div"),$=_(t[0]),s=_(` * 2 =\r
	`),p=_(t[2]),v=C(),l=P("div"),N=_(t[0]),A=_(" * "),d=_(t[1]),y=_(` =\r
	`),o=_(t[3]),T=C(),b=P("div"),I=_("delayed: "),O=_(t[4]),M=C(),H=P("div"),n=_("delayed multiplication: "),m=_(t[5]),this.h()},l(V){e=g(V,"INPUT",{type:!0}),u=R(V),r=g(V,"INPUT",{type:!0}),a=R(V),i=g(V,"DIV",{});var Y=j(i);$=c(Y,t[0]),s=c(Y,` * 2 =\r
	`),p=c(Y,t[2]),Y.forEach(f),v=R(V),l=g(V,"DIV",{});var rt=j(l);N=c(rt,t[0]),A=c(rt," * "),d=c(rt,t[1]),y=c(rt,` =\r
	`),o=c(rt,t[3]),rt.forEach(f),T=R(V),b=g(V,"DIV",{});var it=j(b);I=c(it,"delayed: "),O=c(it,t[4]),it.forEach(f),M=R(V),H=g(V,"DIV",{});var lt=j(H);n=c(lt,"delayed multiplication: "),m=c(lt,t[5]),lt.forEach(f),this.h()},h(){X(e,"type","number"),X(r,"type","number")},m(V,Y){h(V,e,Y),S(e,t[0]),h(V,u,Y),h(V,r,Y),S(r,t[1]),h(V,a,Y),h(V,i,Y),w(i,$),w(i,s),w(i,p),h(V,v,Y),h(V,l,Y),w(l,N),w(l,A),w(l,d),w(l,y),w(l,o),h(V,T,Y),h(V,b,Y),w(b,I),w(b,O),h(V,M,Y),h(V,H,Y),w(H,n),w(H,m),E||(W=[Z(e,"input",t[12]),Z(r,"input",t[13])],E=!0)},p(V,[Y]){Y&1&&k(e.value)!==V[0]&&S(e,V[0]),Y&2&&k(r.value)!==V[1]&&S(r,V[1]),Y&1&&D($,V[0]),Y&4&&D(p,V[2]),Y&1&&D(N,V[0]),Y&2&&D(d,V[1]),Y&8&&D(o,V[3]),Y&16&&D(O,V[4]),Y&32&&D(m,V[5])},i:z,o:z,d(V){V&&(f(e),f(u),f(r),f(a),f(i),f(v),f(l),f(T),f(b),f(M),f(H)),E=!1,nt(W)}}}function Xt(t,e,u){let r,a,i,$,s,p;const v=B(10);U(t,v,b=>u(0,r=b));const l=B(42);U(t,l,b=>u(1,a=b));const N=q(v,b=>b*2);U(t,N,b=>u(2,i=b));const A=q([v,l],([b,I])=>b*I);U(t,A,b=>u(3,$=b));const d=q(v,(b,I)=>{let O=setTimeout(()=>{I(b)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(O)}},"not set");U(t,d,b=>u(4,s=b));const y=q([v,l],([b,I],O)=>{let M=setTimeout(()=>{O(b*I)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(M)}},"not set");U(t,y,b=>u(5,p=b));function o(){r=k(this.value),v.set(r)}function T(){a=k(this.value),l.set(a)}return[r,a,i,$,s,p,v,l,N,A,d,y,o,T]}class Zt extends tt{constructor(e){super(),et(this,e,Xt,zt,x,{})}}const Bt=`<script>\r
	import { writable, derived } from "svelte/store";\r
	const num = writable(10);\r
	const num2 = writable(42);\r
\r
	// derived from one store\r
	const doubleOfNum = derived(num, (haha) => {\r
		return haha * 2;\r
	});\r
\r
	const multiplication = derived([num, num2], ([$num, $num2]) => {\r
		return $num * $num2;\r
	});\r
\r
	const delayedNum = derived(\r
		num,\r
		($num, set) => {\r
			let timeoutId = setTimeout(() => {\r
				set($num);\r
			}, 1000);\r
			return () => {\r
				console.log("Cleanup for the function here");\r
				clearTimeout(timeoutId);\r
			};\r
		},\r
		"not set"\r
	);\r
\r
	const delayedMultiplication = derived(\r
		[num, num2],\r
		([$num, $num2], set) => {\r
			let timeoutId = setTimeout(() => {\r
				set($num * $num2);\r
			}, 1000);\r
			return () => {\r
				console.log("Cleanup for the function here");\r
				clearTimeout(timeoutId);\r
			};\r
		},\r
		"not set"\r
	);\r
<\/script>\r
\r
<input bind:value={$num} type="number" />\r
<input bind:value={$num2} type="number" />\r
\r
<div>\r
	{$num} * 2 =\r
	{$doubleOfNum}\r
</div>\r
\r
<div>\r
	{$num} * {$num2} =\r
	{$multiplication}\r
</div>\r
\r
<div>\r
	delayed: {$delayedNum}\r
</div>\r
\r
<div>\r
	delayed multiplication: {$delayedMultiplication}\r
</div>\r
`;function Ft(t){let e;return{c(){e=_("create stores from existing stores")},l(u){e=c(u,"create stores from existing stores")},m(u,r){h(u,e,r)},d(u){u&&f(e)}}}function Gt(t){let e,u,r,a;return u=new ut({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){e=_("Derived stores are a way to "),F(u.$$.fragment),r=_(".")},l(i){e=c(i,"Derived stores are a way to "),G(u.$$.fragment,i),r=c(i,".")},m(i,$){h(i,e,$),J(u,i,$),h(i,r,$),a=!0},p(i,$){const s={};$&2&&(s.$$scope={dirty:$,ctx:i}),u.$set(s)},i(i){a||(K(u.$$.fragment,i),a=!0)},o(i){L(u.$$.fragment,i),a=!1},d(i){i&&(f(e),f(r)),Q(u,i)}}}function Jt(t){let e;return{c(){e=_("one store")},l(u){e=c(u,"one store")},m(u,r){h(u,e,r)},d(u){u&&f(e)}}}function Kt(t){let e;return{c(){e=_("many stores")},l(u){e=c(u,"many stores")},m(u,r){h(u,e,r)},d(u){u&&f(e)}}}function Lt(t){let e,u,r,a,i,$;return u=new ut({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),a=new ut({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){e=_("You can derive from "),F(u.$$.fragment),r=_(" or from "),F(a.$$.fragment),i=_(".")},l(s){e=c(s,"You can derive from "),G(u.$$.fragment,s),r=c(s," or from "),G(a.$$.fragment,s),i=c(s,".")},m(s,p){h(s,e,p),J(u,s,p),h(s,r,p),J(a,s,p),h(s,i,p),$=!0},p(s,p){const v={};p&2&&(v.$$scope={dirty:p,ctx:s}),u.$set(v);const l={};p&2&&(l.$$scope={dirty:p,ctx:s}),a.$set(l)},i(s){$||(K(u.$$.fragment,s),K(a.$$.fragment,s),$=!0)},o(s){L(u.$$.fragment,s),L(a.$$.fragment,s),$=!1},d(s){s&&(f(e),f(r),f(i)),Q(u,s),Q(a,s)}}}function Qt(t){let e;return{c(){e=_("synchronously")},l(u){e=c(u,"synchronously")},m(u,r){h(u,e,r)},d(u){u&&f(e)}}}function xt(t){let e;return{c(){e=_("asynchronously")},l(u){e=c(u,"asynchronously")},m(u,r){h(u,e,r)},d(u){u&&f(e)}}}function te(t){let e,u,r,a,i,$;return u=new ut({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),a=new ut({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){e=_("You can also get the derived value "),F(u.$$.fragment),r=_(" or "),F(a.$$.fragment),i=_(".")},l(s){e=c(s,"You can also get the derived value "),G(u.$$.fragment,s),r=c(s," or "),G(a.$$.fragment,s),i=c(s,".")},m(s,p){h(s,e,p),J(u,s,p),h(s,r,p),J(a,s,p),h(s,i,p),$=!0},p(s,p){const v={};p&2&&(v.$$scope={dirty:p,ctx:s}),u.$set(v);const l={};p&2&&(l.$$scope={dirty:p,ctx:s}),a.$set(l)},i(s){$||(K(u.$$.fragment,s),K(a.$$.fragment,s),$=!0)},o(s){L(u.$$.fragment,s),L(a.$$.fragment,s),$=!1},d(s){s&&(f(e),f(r),f(i)),Q(u,s),Q(a,s)}}}function ee(t){let e,u,r,a,i,$,s,p,v,l,N,A;return e=new mt({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),r=new st({props:{name:[{name:"App",comp:ct,raw:ht,text:"The derived store takes an existing store and a function to apply to the value."}]}}),i=new mt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),s=new st({props:{name:[{name:"App2",comp:Nt,raw:yt,text:"Here the store called multiplication is derived from two stores."}]}}),v=new mt({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),N=new st({props:{name:[{name:"App3",comp:Ot,raw:At,text:"When adding the second parameter 'set' the derived function is assumed to be asynchronous and the return statement doesn't do anything anymore."},{name:"App3v2",comp:Vt,raw:Pt,text:"We can define an initial value like this:"},{name:"App3v3",comp:Ct,raw:Rt,text:"To set the store value in this asynchronous version we use set()."},{name:"App3v4",comp:kt,raw:Yt,text:"If we wrap the set() in a setTimeout it will trigger after one second."},{name:"App3v5",comp:jt,raw:qt,text:"As before we should make sure we clean up the function in the return statement. Here the timer stops updating if we continue typing until we stop."},{name:"App3v6",comp:Zt,raw:Bt,text:"We can also create an derived store with multiple stores and an asynchronous function."}]}}),{c(){F(e.$$.fragment),u=C(),F(r.$$.fragment),a=C(),F(i.$$.fragment),$=C(),F(s.$$.fragment),p=C(),F(v.$$.fragment),l=C(),F(N.$$.fragment)},l(d){G(e.$$.fragment,d),u=R(d),G(r.$$.fragment,d),a=R(d),G(i.$$.fragment,d),$=R(d),G(s.$$.fragment,d),p=R(d),G(v.$$.fragment,d),l=R(d),G(N.$$.fragment,d)},m(d,y){J(e,d,y),h(d,u,y),J(r,d,y),h(d,a,y),J(i,d,y),h(d,$,y),J(s,d,y),h(d,p,y),J(v,d,y),h(d,l,y),J(N,d,y),A=!0},p(d,y){const o={};y&2&&(o.$$scope={dirty:y,ctx:d}),e.$set(o);const T={};y&2&&(T.$$scope={dirty:y,ctx:d}),i.$set(T);const b={};y&2&&(b.$$scope={dirty:y,ctx:d}),v.$set(b)},i(d){A||(K(e.$$.fragment,d),K(r.$$.fragment,d),K(i.$$.fragment,d),K(s.$$.fragment,d),K(v.$$.fragment,d),K(N.$$.fragment,d),A=!0)},o(d){L(e.$$.fragment,d),L(r.$$.fragment,d),L(i.$$.fragment,d),L(s.$$.fragment,d),L(v.$$.fragment,d),L(N.$$.fragment,d),A=!1},d(d){d&&(f(u),f(a),f($),f(p),f(l)),Q(e,d),Q(r,d),Q(i,d),Q(s,d),Q(v,d),Q(N,d)}}}function ne(t){let e,u;const r=[t[0],dt];let a={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let i=0;i<r.length;i+=1)a=ot(a,r[i]);return e=new vt({props:a}),{c(){F(e.$$.fragment)},l(i){G(e.$$.fragment,i)},m(i,$){J(e,i,$),u=!0},p(i,[$]){const s=$&1?ft(r,[$&1&&at(i[0]),$&0&&at(dt)]):{};$&2&&(s.$$scope={dirty:$,ctx:i}),e.$set(s)},i(i){u||(K(e.$$.fragment,i),u=!0)},o(i){L(e.$$.fragment,i),u=!1},d(i){Q(e,i)}}}const dt={title:"derived() Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function re(t,e,u){return t.$$set=r=>{u(0,e=ot(ot({},e),pt(r)))},e=pt(e),[e]}class ae extends tt{constructor(e){super(),et(this,e,re,ne,x,{})}}export{ae as default,dt as metadata};
