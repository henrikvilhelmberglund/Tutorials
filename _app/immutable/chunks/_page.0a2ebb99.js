import{S as x,i as tt,s as et,k as P,a as R,q as _,l as U,c as k,m as j,r as b,h as d,n as K,b as w,a2 as S,D as y,T as L,ao as Y,u as E,H as B,I as M,Q as nt,K as ot,y as Z,z as F,A as G,L as dt,M as pt,g as J,d as X,B as g,N as ft}from"./index.0b5cc0d7.js";import{M as vt,P as mt}from"./mdsvex-layout-notes.c527e9b3.js";import{d as z,w as Q}from"./index.153ae70b.js";import{S as st}from"./ShowMany.5b53376e.js";import{S as ut}from"./Strong.272c5f79.js";function $t(e){let n,u,r,a,i,$,l,p;return{c(){n=P("input"),u=R(),r=P("div"),a=_(e[0]),i=_(` * 2 =\r
	`),$=_(e[1]),this.h()},l(v){n=U(v,"INPUT",{type:!0}),u=k(v),r=U(v,"DIV",{});var m=j(r);a=b(m,e[0]),i=b(m,` * 2 =\r
	`),$=b(m,e[1]),m.forEach(d),this.h()},h(){K(n,"type","number")},m(v,m){w(v,n,m),S(n,e[0]),w(v,u,m),w(v,r,m),y(r,a),y(r,i),y(r,$),l||(p=L(n,"input",e[4]),l=!0)},p(v,[m]){m&1&&Y(n.value)!==v[0]&&S(n,v[0]),m&1&&E(a,v[0]),m&2&&E($,v[1])},i:B,o:B,d(v){v&&d(n),v&&d(u),v&&d(r),l=!1,p()}}}function _t(e,n,u){let r,a;const i=Q(10);M(e,i,p=>u(0,r=p));const $=z(i,p=>p*2);M(e,$,p=>u(1,a=p));function l(){r=Y(this.value),i.set(r)}return[r,a,i,$,l]}class bt extends x{constructor(n){super(),tt(this,n,_t,$t,et,{})}}const wt=`<script>\r
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
`;function Nt(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),this.h()},l(c){n=U(c,"INPUT",{type:!0}),u=k(c),r=U(c,"INPUT",{type:!0}),a=k(c),i=U(c,"DIV",{});var O=j(i);$=b(O,e[0]),l=b(O,` * 2 =\r
	`),p=b(O,e[2]),O.forEach(d),v=k(c),m=U(c,"DIV",{});var C=j(m);I=b(C,e[0]),A=b(C," * "),f=b(C,e[1]),h=b(C,` =\r
	`),o=b(C,e[3]),C.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(c,O){w(c,n,O),S(n,e[0]),w(c,u,O),w(c,r,O),S(r,e[1]),w(c,a,O),w(c,i,O),y(i,$),y(i,l),y(i,p),w(c,v,O),w(c,m,O),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),T||(N=[L(n,"input",e[8]),L(r,"input",e[9])],T=!0)},p(c,[O]){O&1&&Y(n.value)!==c[0]&&S(n,c[0]),O&2&&Y(r.value)!==c[1]&&S(r,c[1]),O&1&&E($,c[0]),O&4&&E(p,c[2]),O&1&&E(I,c[0]),O&2&&E(f,c[1]),O&8&&E(o,c[3])},i:B,o:B,d(c){c&&d(n),c&&d(u),c&&d(r),c&&d(a),c&&d(i),c&&d(v),c&&d(m),T=!1,nt(N)}}}function yt(e,n,u){let r,a,i,$;const l=Q(10);M(e,l,f=>u(0,r=f));const p=Q(42);M(e,p,f=>u(1,a=f));const v=z(l,f=>f*2);M(e,v,f=>u(2,i=f));const m=z([l,p],([f,h])=>f*h);M(e,m,f=>u(3,$=f));function I(){r=Y(this.value),l.set(r)}function A(){a=Y(this.value),p.set(a)}return[r,a,i,$,l,p,v,m,I,A]}class ct extends x{constructor(n){super(),tt(this,n,yt,Nt,et,{})}}const It=`<script>\r
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
`;function ht(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),this.h()},l(t){n=U(t,"INPUT",{type:!0}),u=k(t),r=U(t,"INPUT",{type:!0}),a=k(t),i=U(t,"DIV",{});var s=j(i);$=b(s,e[0]),l=b(s,` * 2 =\r
	`),p=b(s,e[2]),s.forEach(d),v=k(t),m=U(t,"DIV",{});var V=j(m);I=b(V,e[0]),A=b(V," * "),f=b(V,e[1]),h=b(V,` =\r
	`),o=b(V,e[3]),V.forEach(d),T=k(t),N=U(t,"DIV",{});var q=j(N);c=b(q,"delayed: "),O=b(q,e[4]),q.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(t,s){w(t,n,s),S(n,e[0]),w(t,u,s),w(t,r,s),S(r,e[1]),w(t,a,s),w(t,i,s),y(i,$),y(i,l),y(i,p),w(t,v,s),w(t,m,s),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(t,T,s),w(t,N,s),y(N,c),y(N,O),C||(W=[L(n,"input",e[10]),L(r,"input",e[11])],C=!0)},p(t,[s]){s&1&&Y(n.value)!==t[0]&&S(n,t[0]),s&2&&Y(r.value)!==t[1]&&S(r,t[1]),s&1&&E($,t[0]),s&4&&E(p,t[2]),s&1&&E(I,t[0]),s&2&&E(f,t[1]),s&8&&E(o,t[3]),s&16&&E(O,t[4])},i:B,o:B,d(t){t&&d(n),t&&d(u),t&&d(r),t&&d(a),t&&d(i),t&&d(v),t&&d(m),t&&d(T),t&&d(N),C=!1,nt(W)}}}function Tt(e,n,u){let r,a,i,$,l;const p=Q(10);M(e,p,o=>u(0,r=o));const v=Q(42);M(e,v,o=>u(1,a=o));const m=z(p,o=>o*2);M(e,m,o=>u(2,i=o));const I=z([p,v],([o,T])=>o*T);M(e,I,o=>u(3,$=o));const A=z(p,(o,T)=>o);M(e,A,o=>u(4,l=o));function f(){r=Y(this.value),p.set(r)}function h(){a=Y(this.value),v.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h]}class Ot extends x{constructor(n){super(),tt(this,n,Tt,ht,et,{})}}const At=`<script>\r
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
`;function Dt(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),this.h()},l(t){n=U(t,"INPUT",{type:!0}),u=k(t),r=U(t,"INPUT",{type:!0}),a=k(t),i=U(t,"DIV",{});var s=j(i);$=b(s,e[0]),l=b(s,` * 2 =\r
	`),p=b(s,e[2]),s.forEach(d),v=k(t),m=U(t,"DIV",{});var V=j(m);I=b(V,e[0]),A=b(V," * "),f=b(V,e[1]),h=b(V,` =\r
	`),o=b(V,e[3]),V.forEach(d),T=k(t),N=U(t,"DIV",{});var q=j(N);c=b(q,"delayed: "),O=b(q,e[4]),q.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(t,s){w(t,n,s),S(n,e[0]),w(t,u,s),w(t,r,s),S(r,e[1]),w(t,a,s),w(t,i,s),y(i,$),y(i,l),y(i,p),w(t,v,s),w(t,m,s),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(t,T,s),w(t,N,s),y(N,c),y(N,O),C||(W=[L(n,"input",e[10]),L(r,"input",e[11])],C=!0)},p(t,[s]){s&1&&Y(n.value)!==t[0]&&S(n,t[0]),s&2&&Y(r.value)!==t[1]&&S(r,t[1]),s&1&&E($,t[0]),s&4&&E(p,t[2]),s&1&&E(I,t[0]),s&2&&E(f,t[1]),s&8&&E(o,t[3]),s&16&&E(O,t[4])},i:B,o:B,d(t){t&&d(n),t&&d(u),t&&d(r),t&&d(a),t&&d(i),t&&d(v),t&&d(m),t&&d(T),t&&d(N),C=!1,nt(W)}}}function Et(e,n,u){let r,a,i,$,l;const p=Q(10);M(e,p,o=>u(0,r=o));const v=Q(42);M(e,v,o=>u(1,a=o));const m=z(p,o=>o*2);M(e,m,o=>u(2,i=o));const I=z([p,v],([o,T])=>o*T);M(e,I,o=>u(3,$=o));const A=z(p,(o,T)=>o,"not set");M(e,A,o=>u(4,l=o));function f(){r=Y(this.value),p.set(r)}function h(){a=Y(this.value),v.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h]}class Vt extends x{constructor(n){super(),tt(this,n,Et,Dt,et,{})}}const Pt=`<script>\r
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
`;function Ut(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),this.h()},l(t){n=U(t,"INPUT",{type:!0}),u=k(t),r=U(t,"INPUT",{type:!0}),a=k(t),i=U(t,"DIV",{});var s=j(i);$=b(s,e[0]),l=b(s,` * 2 =\r
	`),p=b(s,e[2]),s.forEach(d),v=k(t),m=U(t,"DIV",{});var V=j(m);I=b(V,e[0]),A=b(V," * "),f=b(V,e[1]),h=b(V,` =\r
	`),o=b(V,e[3]),V.forEach(d),T=k(t),N=U(t,"DIV",{});var q=j(N);c=b(q,"delayed: "),O=b(q,e[4]),q.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(t,s){w(t,n,s),S(n,e[0]),w(t,u,s),w(t,r,s),S(r,e[1]),w(t,a,s),w(t,i,s),y(i,$),y(i,l),y(i,p),w(t,v,s),w(t,m,s),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(t,T,s),w(t,N,s),y(N,c),y(N,O),C||(W=[L(n,"input",e[10]),L(r,"input",e[11])],C=!0)},p(t,[s]){s&1&&Y(n.value)!==t[0]&&S(n,t[0]),s&2&&Y(r.value)!==t[1]&&S(r,t[1]),s&1&&E($,t[0]),s&4&&E(p,t[2]),s&1&&E(I,t[0]),s&2&&E(f,t[1]),s&8&&E(o,t[3]),s&16&&E(O,t[4])},i:B,o:B,d(t){t&&d(n),t&&d(u),t&&d(r),t&&d(a),t&&d(i),t&&d(v),t&&d(m),t&&d(T),t&&d(N),C=!1,nt(W)}}}function Mt(e,n,u){let r,a,i,$,l;const p=Q(10);M(e,p,o=>u(0,r=o));const v=Q(42);M(e,v,o=>u(1,a=o));const m=z(p,o=>o*2);M(e,m,o=>u(2,i=o));const I=z([p,v],([o,T])=>o*T);M(e,I,o=>u(3,$=o));const A=z(p,(o,T)=>{T(o)},"not set");M(e,A,o=>u(4,l=o));function f(){r=Y(this.value),p.set(r)}function h(){a=Y(this.value),v.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h]}class Rt extends x{constructor(n){super(),tt(this,n,Mt,Ut,et,{})}}const kt=`<script>\r
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
`;function Ct(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),this.h()},l(t){n=U(t,"INPUT",{type:!0}),u=k(t),r=U(t,"INPUT",{type:!0}),a=k(t),i=U(t,"DIV",{});var s=j(i);$=b(s,e[0]),l=b(s,` * 2 =\r
	`),p=b(s,e[2]),s.forEach(d),v=k(t),m=U(t,"DIV",{});var V=j(m);I=b(V,e[0]),A=b(V," * "),f=b(V,e[1]),h=b(V,` =\r
	`),o=b(V,e[3]),V.forEach(d),T=k(t),N=U(t,"DIV",{});var q=j(N);c=b(q,"delayed: "),O=b(q,e[4]),q.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(t,s){w(t,n,s),S(n,e[0]),w(t,u,s),w(t,r,s),S(r,e[1]),w(t,a,s),w(t,i,s),y(i,$),y(i,l),y(i,p),w(t,v,s),w(t,m,s),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(t,T,s),w(t,N,s),y(N,c),y(N,O),C||(W=[L(n,"input",e[10]),L(r,"input",e[11])],C=!0)},p(t,[s]){s&1&&Y(n.value)!==t[0]&&S(n,t[0]),s&2&&Y(r.value)!==t[1]&&S(r,t[1]),s&1&&E($,t[0]),s&4&&E(p,t[2]),s&1&&E(I,t[0]),s&2&&E(f,t[1]),s&8&&E(o,t[3]),s&16&&E(O,t[4])},i:B,o:B,d(t){t&&d(n),t&&d(u),t&&d(r),t&&d(a),t&&d(i),t&&d(v),t&&d(m),t&&d(T),t&&d(N),C=!1,nt(W)}}}function St(e,n,u){let r,a,i,$,l;const p=Q(10);M(e,p,o=>u(0,r=o));const v=Q(42);M(e,v,o=>u(1,a=o));const m=z(p,o=>o*2);M(e,m,o=>u(2,i=o));const I=z([p,v],([o,T])=>o*T);M(e,I,o=>u(3,$=o));const A=z(p,(o,T)=>{setTimeout(()=>{T(o)},1e3)},"not set");M(e,A,o=>u(4,l=o));function f(){r=Y(this.value),p.set(r)}function h(){a=Y(this.value),v.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h]}class Yt extends x{constructor(n){super(),tt(this,n,St,Ct,et,{})}}const Ht=`<script>\r
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
`;function Wt(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),this.h()},l(t){n=U(t,"INPUT",{type:!0}),u=k(t),r=U(t,"INPUT",{type:!0}),a=k(t),i=U(t,"DIV",{});var s=j(i);$=b(s,e[0]),l=b(s,` * 2 =\r
	`),p=b(s,e[2]),s.forEach(d),v=k(t),m=U(t,"DIV",{});var V=j(m);I=b(V,e[0]),A=b(V," * "),f=b(V,e[1]),h=b(V,` =\r
	`),o=b(V,e[3]),V.forEach(d),T=k(t),N=U(t,"DIV",{});var q=j(N);c=b(q,"delayed: "),O=b(q,e[4]),q.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(t,s){w(t,n,s),S(n,e[0]),w(t,u,s),w(t,r,s),S(r,e[1]),w(t,a,s),w(t,i,s),y(i,$),y(i,l),y(i,p),w(t,v,s),w(t,m,s),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(t,T,s),w(t,N,s),y(N,c),y(N,O),C||(W=[L(n,"input",e[10]),L(r,"input",e[11])],C=!0)},p(t,[s]){s&1&&Y(n.value)!==t[0]&&S(n,t[0]),s&2&&Y(r.value)!==t[1]&&S(r,t[1]),s&1&&E($,t[0]),s&4&&E(p,t[2]),s&1&&E(I,t[0]),s&2&&E(f,t[1]),s&8&&E(o,t[3]),s&16&&E(O,t[4])},i:B,o:B,d(t){t&&d(n),t&&d(u),t&&d(r),t&&d(a),t&&d(i),t&&d(v),t&&d(m),t&&d(T),t&&d(N),C=!1,nt(W)}}}function qt(e,n,u){let r,a,i,$,l;const p=Q(10);M(e,p,o=>u(0,r=o));const v=Q(42);M(e,v,o=>u(1,a=o));const m=z(p,o=>o*2);M(e,m,o=>u(2,i=o));const I=z([p,v],([o,T])=>o*T);M(e,I,o=>u(3,$=o));const A=z(p,(o,T)=>{let N=setTimeout(()=>{T(o)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(N)}},"not set");M(e,A,o=>u(4,l=o));function f(){r=Y(this.value),p.set(r)}function h(){a=Y(this.value),v.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h]}class jt extends x{constructor(n){super(),tt(this,n,qt,Wt,et,{})}}const zt=`<script>\r
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
`;function Bt(e){let n,u,r,a,i,$,l,p,v,m,I,A,f,h,o,T,N,c,O,C,W,t,s,V,q;return{c(){n=P("input"),u=R(),r=P("input"),a=R(),i=P("div"),$=_(e[0]),l=_(` * 2 =\r
	`),p=_(e[2]),v=R(),m=P("div"),I=_(e[0]),A=_(" * "),f=_(e[1]),h=_(` =\r
	`),o=_(e[3]),T=R(),N=P("div"),c=_("delayed: "),O=_(e[4]),C=R(),W=P("div"),t=_("delayed multiplication: "),s=_(e[5]),this.h()},l(D){n=U(D,"INPUT",{type:!0}),u=k(D),r=U(D,"INPUT",{type:!0}),a=k(D),i=U(D,"DIV",{});var H=j(i);$=b(H,e[0]),l=b(H,` * 2 =\r
	`),p=b(H,e[2]),H.forEach(d),v=k(D),m=U(D,"DIV",{});var rt=j(m);I=b(rt,e[0]),A=b(rt," * "),f=b(rt,e[1]),h=b(rt,` =\r
	`),o=b(rt,e[3]),rt.forEach(d),T=k(D),N=U(D,"DIV",{});var it=j(N);c=b(it,"delayed: "),O=b(it,e[4]),it.forEach(d),C=k(D),W=U(D,"DIV",{});var lt=j(W);t=b(lt,"delayed multiplication: "),s=b(lt,e[5]),lt.forEach(d),this.h()},h(){K(n,"type","number"),K(r,"type","number")},m(D,H){w(D,n,H),S(n,e[0]),w(D,u,H),w(D,r,H),S(r,e[1]),w(D,a,H),w(D,i,H),y(i,$),y(i,l),y(i,p),w(D,v,H),w(D,m,H),y(m,I),y(m,A),y(m,f),y(m,h),y(m,o),w(D,T,H),w(D,N,H),y(N,c),y(N,O),w(D,C,H),w(D,W,H),y(W,t),y(W,s),V||(q=[L(n,"input",e[12]),L(r,"input",e[13])],V=!0)},p(D,[H]){H&1&&Y(n.value)!==D[0]&&S(n,D[0]),H&2&&Y(r.value)!==D[1]&&S(r,D[1]),H&1&&E($,D[0]),H&4&&E(p,D[2]),H&1&&E(I,D[0]),H&2&&E(f,D[1]),H&8&&E(o,D[3]),H&16&&E(O,D[4]),H&32&&E(s,D[5])},i:B,o:B,d(D){D&&d(n),D&&d(u),D&&d(r),D&&d(a),D&&d(i),D&&d(v),D&&d(m),D&&d(T),D&&d(N),D&&d(C),D&&d(W),V=!1,nt(q)}}}function Kt(e,n,u){let r,a,i,$,l,p;const v=Q(10);M(e,v,N=>u(0,r=N));const m=Q(42);M(e,m,N=>u(1,a=N));const I=z(v,N=>N*2);M(e,I,N=>u(2,i=N));const A=z([v,m],([N,c])=>N*c);M(e,A,N=>u(3,$=N));const f=z(v,(N,c)=>{let O=setTimeout(()=>{c(N)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(O)}},"not set");M(e,f,N=>u(4,l=N));const h=z([v,m],([N,c],O)=>{let C=setTimeout(()=>{O(N*c)},1e3);return()=>{console.log("Cleanup for the function here"),clearTimeout(C)}},"not set");M(e,h,N=>u(5,p=N));function o(){r=Y(this.value),v.set(r)}function T(){a=Y(this.value),m.set(a)}return[r,a,i,$,l,p,v,m,I,A,f,h,o,T]}class Lt extends x{constructor(n){super(),tt(this,n,Kt,Bt,et,{})}}const Qt=`<script>\r
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
`;function Zt(e){let n;return{c(){n=_("create stores from existing stores")},l(u){n=b(u,"create stores from existing stores")},m(u,r){w(u,n,r)},d(u){u&&d(n)}}}function Ft(e){let n,u,r,a;return u=new ut({props:{$$slots:{default:[Zt]},$$scope:{ctx:e}}}),{c(){n=_("Derived stores are a way to "),Z(u.$$.fragment),r=_(".")},l(i){n=b(i,"Derived stores are a way to "),F(u.$$.fragment,i),r=b(i,".")},m(i,$){w(i,n,$),G(u,i,$),w(i,r,$),a=!0},p(i,$){const l={};$&2&&(l.$$scope={dirty:$,ctx:i}),u.$set(l)},i(i){a||(J(u.$$.fragment,i),a=!0)},o(i){X(u.$$.fragment,i),a=!1},d(i){i&&d(n),g(u,i),i&&d(r)}}}function Gt(e){let n;return{c(){n=_("one store")},l(u){n=b(u,"one store")},m(u,r){w(u,n,r)},d(u){u&&d(n)}}}function Jt(e){let n;return{c(){n=_("many stores")},l(u){n=b(u,"many stores")},m(u,r){w(u,n,r)},d(u){u&&d(n)}}}function Xt(e){let n,u,r,a,i,$;return u=new ut({props:{$$slots:{default:[Gt]},$$scope:{ctx:e}}}),a=new ut({props:{$$slots:{default:[Jt]},$$scope:{ctx:e}}}),{c(){n=_("You can derive from "),Z(u.$$.fragment),r=_(" or from "),Z(a.$$.fragment),i=_(".")},l(l){n=b(l,"You can derive from "),F(u.$$.fragment,l),r=b(l," or from "),F(a.$$.fragment,l),i=b(l,".")},m(l,p){w(l,n,p),G(u,l,p),w(l,r,p),G(a,l,p),w(l,i,p),$=!0},p(l,p){const v={};p&2&&(v.$$scope={dirty:p,ctx:l}),u.$set(v);const m={};p&2&&(m.$$scope={dirty:p,ctx:l}),a.$set(m)},i(l){$||(J(u.$$.fragment,l),J(a.$$.fragment,l),$=!0)},o(l){X(u.$$.fragment,l),X(a.$$.fragment,l),$=!1},d(l){l&&d(n),g(u,l),l&&d(r),g(a,l),l&&d(i)}}}function gt(e){let n;return{c(){n=_("synchronously")},l(u){n=b(u,"synchronously")},m(u,r){w(u,n,r)},d(u){u&&d(n)}}}function xt(e){let n;return{c(){n=_("asynchronously")},l(u){n=b(u,"asynchronously")},m(u,r){w(u,n,r)},d(u){u&&d(n)}}}function te(e){let n,u,r,a,i,$;return u=new ut({props:{$$slots:{default:[gt]},$$scope:{ctx:e}}}),a=new ut({props:{$$slots:{default:[xt]},$$scope:{ctx:e}}}),{c(){n=_("You can also get the derived value "),Z(u.$$.fragment),r=_(" or "),Z(a.$$.fragment),i=_(".")},l(l){n=b(l,"You can also get the derived value "),F(u.$$.fragment,l),r=b(l," or "),F(a.$$.fragment,l),i=b(l,".")},m(l,p){w(l,n,p),G(u,l,p),w(l,r,p),G(a,l,p),w(l,i,p),$=!0},p(l,p){const v={};p&2&&(v.$$scope={dirty:p,ctx:l}),u.$set(v);const m={};p&2&&(m.$$scope={dirty:p,ctx:l}),a.$set(m)},i(l){$||(J(u.$$.fragment,l),J(a.$$.fragment,l),$=!0)},o(l){X(u.$$.fragment,l),X(a.$$.fragment,l),$=!1},d(l){l&&d(n),g(u,l),l&&d(r),g(a,l),l&&d(i)}}}function ee(e){let n,u,r,a,i,$,l,p,v,m,I,A;return n=new mt({props:{$$slots:{default:[Ft]},$$scope:{ctx:e}}}),r=new st({props:{name:[{name:"App",comp:bt,raw:wt,text:"The derived store takes an existing store and a function to apply to the value."}]}}),i=new mt({props:{$$slots:{default:[Xt]},$$scope:{ctx:e}}}),l=new st({props:{name:[{name:"App2",comp:ct,raw:It,text:"Here the store called multiplication is derived from two stores."}]}}),v=new mt({props:{$$slots:{default:[te]},$$scope:{ctx:e}}}),I=new st({props:{name:[{name:"App3",comp:Ot,raw:At,text:"When adding the second parameter 'set' the derived function is assumed to be asynchronous and the return statement doesn't do anything anymore."},{name:"App3v2",comp:Vt,raw:Pt,text:"We can define an initial value like this:"},{name:"App3v3",comp:Rt,raw:kt,text:"To set the store value in this asynchronous version we use set()."},{name:"App3v4",comp:Yt,raw:Ht,text:"If we wrap the set() in a setTimeout it will trigger after one second."},{name:"App3v5",comp:jt,raw:zt,text:"As before we should make sure we clean up the function in the return statement. Here the timer stops updating if we continue typing until we stop."},{name:"App3v6",comp:Lt,raw:Qt,text:"We can also create an derived store with multiple stores and an asynchronous function."}]}}),{c(){Z(n.$$.fragment),u=R(),Z(r.$$.fragment),a=R(),Z(i.$$.fragment),$=R(),Z(l.$$.fragment),p=R(),Z(v.$$.fragment),m=R(),Z(I.$$.fragment)},l(f){F(n.$$.fragment,f),u=k(f),F(r.$$.fragment,f),a=k(f),F(i.$$.fragment,f),$=k(f),F(l.$$.fragment,f),p=k(f),F(v.$$.fragment,f),m=k(f),F(I.$$.fragment,f)},m(f,h){G(n,f,h),w(f,u,h),G(r,f,h),w(f,a,h),G(i,f,h),w(f,$,h),G(l,f,h),w(f,p,h),G(v,f,h),w(f,m,h),G(I,f,h),A=!0},p(f,h){const o={};h&2&&(o.$$scope={dirty:h,ctx:f}),n.$set(o);const T={};h&2&&(T.$$scope={dirty:h,ctx:f}),i.$set(T);const N={};h&2&&(N.$$scope={dirty:h,ctx:f}),v.$set(N)},i(f){A||(J(n.$$.fragment,f),J(r.$$.fragment,f),J(i.$$.fragment,f),J(l.$$.fragment,f),J(v.$$.fragment,f),J(I.$$.fragment,f),A=!0)},o(f){X(n.$$.fragment,f),X(r.$$.fragment,f),X(i.$$.fragment,f),X(l.$$.fragment,f),X(v.$$.fragment,f),X(I.$$.fragment,f),A=!1},d(f){g(n,f),f&&d(u),g(r,f),f&&d(a),g(i,f),f&&d($),g(l,f),f&&d(p),g(v,f),f&&d(m),g(I,f)}}}function ne(e){let n,u;const r=[e[0],at];let a={$$slots:{default:[ee]},$$scope:{ctx:e}};for(let i=0;i<r.length;i+=1)a=ot(a,r[i]);return n=new vt({props:a}),{c(){Z(n.$$.fragment)},l(i){F(n.$$.fragment,i)},m(i,$){G(n,i,$),u=!0},p(i,[$]){const l=$&1?dt(r,[$&1&&pt(i[0]),$&0&&pt(at)]):{};$&2&&(l.$$scope={dirty:$,ctx:i}),n.$set(l)},i(i){u||(J(n.$$.fragment,i),u=!0)},o(i){X(n.$$.fragment,i),u=!1},d(i){g(n,i)}}}const at={title:"derived() Svelte store",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-12T00:00:00.000Z",layout:"notes"};function re(e,n,u){return e.$$set=r=>{u(0,n=ot(ot({},n),ft(r)))},n=ft(n),[n]}class oe extends x{constructor(n){super(),tt(this,n,re,ne,et,{})}}export{oe as default,at as metadata};
