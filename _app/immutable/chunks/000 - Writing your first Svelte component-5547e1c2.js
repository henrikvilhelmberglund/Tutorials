import{S as j,i as q,s as U,k as h,q as b,a as T,l as v,m as y,r as w,h as c,c as A,n as z,b as i,D as x,B as I,w as H,x as E,y as S,f as $,t as d,z as M,C as K,E as Q,F as Z,G as X,O as _t,e as J,P as mt,J as st,K as dt,L as lt,M as ot,N as pt,g as gt,d as ht,Q as vt}from"./index-ef26d8d7.js";import{M as yt,P as R,A as bt}from"./mdsvex-layout-notes-6d1b5969.js";import{E as kt}from"./Example-968d9e16.js";function wt(l){let t,a,s,e,n,o,f,D,g,k,W;return{c(){t=h("h2"),a=b("My first Svelte component"),s=T(),e=h("p"),n=b("Hello World"),o=T(),f=h("a"),D=b("Link to Li Hau's youtube"),g=T(),k=h("a"),W=b("Link to my youtube"),this.h()},l(p){t=v(p,"H2",{});var r=y(t);a=w(r,"My first Svelte component"),r.forEach(c),s=A(p),e=v(p,"P",{});var m=y(e);n=w(m,"Hello World"),m.forEach(c),o=A(p),f=v(p,"A",{href:!0});var P=y(f);D=w(P,"Link to Li Hau's youtube"),P.forEach(c),g=A(p),k=v(p,"A",{href:!0});var L=y(k);W=w(L,"Link to my youtube"),L.forEach(c),this.h()},h(){z(f,"href","https://www.youtube.com/lihautan"),z(k,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(p,r){i(p,t,r),x(t,a),i(p,s,r),i(p,e,r),x(e,n),i(p,o,r),i(p,f,r),x(f,D),i(p,g,r),i(p,k,r),x(k,W)},p:I,i:I,o:I,d(p){p&&c(t),p&&c(s),p&&c(e),p&&c(o),p&&c(f),p&&c(g),p&&c(k)}}}class Lt extends j{constructor(t){super(),q(this,t,null,wt,U,{})}}const xt=l=>({}),ut=l=>({slot:"example"}),Ht=l=>({}),ct=l=>({slot:"code"});function Et(l){let t,a;return t=new Lt({}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function St(l){let t;const a=l[0].default,s=K(a,l,l[1],ut),e=s||Et();return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){s&&s.p&&(!t||o&2)&&Q(s,a,n,n[1],t?X(a,n[1],o,xt):Z(n[1]),ut)},i(n){t||($(e,n),t=!0)},o(n){d(e,n),t=!1},d(n){e&&e.d(n)}}}function Mt(l){let t,a=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>`,s;return{c(){t=new _t(!1),s=J(),this.h()},l(e){t=mt(e,!1),s=J(),this.h()},h(){t.a=s},m(e,n){t.m(a,e,n),i(e,s,n)},p:I,d(e){e&&c(s),e&&t.d()}}}function Wt(l){let t;const a=l[0].default,s=K(a,l,l[1],ct),e=s||Mt();return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){s&&s.p&&(!t||o&2)&&Q(s,a,n,n[1],t?X(a,n[1],o,Ht):Z(n[1]),ct)},i(n){t||($(e,n),t=!0)},o(n){d(e,n),t=!1},d(n){e&&e.d(n)}}}function Tt(l){let t,a,s;return a=new kt({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Wt],example:[St]},$$scope:{ctx:l}}}),{c(){t=h("div"),H(a.$$.fragment)},l(e){t=v(e,"DIV",{});var n=y(t);E(a.$$.fragment,n),n.forEach(c)},m(e,n){i(e,t,n),S(a,t,null),s=!0},p(e,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),a.$set(o)},i(e){s||($(a.$$.fragment,e),s=!0)},o(e){d(a.$$.fragment,e),s=!1},d(e){e&&c(t),M(a)}}}function At(l,t,a){let{$$slots:s={},$$scope:e}=t;return l.$$set=n=>{"$$scope"in n&&a(1,e=n.$$scope)},[s,e]}class Dt extends j{constructor(t){super(),q(this,t,At,Tt,U,{})}}function Pt(l){let t,a,s,e,n,o,f,D,g,k,W;return{c(){t=h("h2"),a=b("My first Svelte component"),s=T(),e=h("p"),n=b("Hello World"),o=T(),f=h("a"),D=b("Link to Li Hau's youtube"),g=T(),k=h("a"),W=b("Link to my youtube"),this.h()},l(p){t=v(p,"H2",{class:!0});var r=y(t);a=w(r,"My first Svelte component"),r.forEach(c),s=A(p),e=v(p,"P",{class:!0});var m=y(e);n=w(m,"Hello World"),m.forEach(c),o=A(p),f=v(p,"A",{href:!0});var P=y(f);D=w(P,"Link to Li Hau's youtube"),P.forEach(c),g=A(p),k=v(p,"A",{href:!0});var L=y(k);W=w(L,"Link to my youtube"),L.forEach(c),this.h()},h(){z(t,"class","svelte-1olio46"),z(e,"class","svelte-1olio46"),z(f,"href","https://www.youtube.com/lihautan"),z(k,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(p,r){i(p,t,r),x(t,a),i(p,s,r),i(p,e,r),x(e,n),i(p,o,r),i(p,f,r),x(f,D),i(p,g,r),i(p,k,r),x(k,W)},p:I,i:I,o:I,d(p){p&&c(t),p&&c(s),p&&c(e),p&&c(o),p&&c(f),p&&c(g),p&&c(k)}}}class It extends j{constructor(t){super(),q(this,t,null,Pt,U,{})}}const Ct=l=>({}),rt=l=>({slot:"example"}),Vt=l=>({}),it=l=>({slot:"code"});function zt(l){let t,a;return t=new It({}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function Bt(l){let t;const a=l[0].default,s=K(a,l,l[1],rt),e=s||zt();return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){s&&s.p&&(!t||o&2)&&Q(s,a,n,n[1],t?X(a,n[1],o,Ct):Z(n[1]),rt)},i(n){t||($(e,n),t=!0)},o(n){d(e,n),t=!1},d(n){e&&e.d(n)}}}function Nt(l){let t,a=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,s;return{c(){t=new _t(!1),s=J(),this.h()},l(e){t=mt(e,!1),s=J(),this.h()},h(){t.a=s},m(e,n){t.m(a,e,n),i(e,s,n)},p:I,d(e){e&&c(s),e&&t.d()}}}function Ot(l){let t;const a=l[0].default,s=K(a,l,l[1],it),e=s||Nt();return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){s&&s.p&&(!t||o&2)&&Q(s,a,n,n[1],t?X(a,n[1],o,Vt):Z(n[1]),it)},i(n){t||($(e,n),t=!0)},o(n){d(e,n),t=!1},d(n){e&&e.d(n)}}}function Rt(l){let t,a,s;return a=new kt({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>
<style>
h2 {
color: rebeccapurple;
}
p {
color: blue;
font-size: 44px;
}
</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[Ot],example:[Bt]},$$scope:{ctx:l}}}),{c(){t=h("div"),H(a.$$.fragment)},l(e){t=v(e,"DIV",{});var n=y(t);E(a.$$.fragment,n),n.forEach(c)},m(e,n){i(e,t,n),S(a,t,null),s=!0},p(e,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),a.$set(o)},i(e){s||($(a.$$.fragment,e),s=!0)},o(e){d(a.$$.fragment,e),s=!1},d(e){e&&c(t),M(a)}}}function jt(l,t,a){let{$$slots:s={},$$scope:e}=t;return l.$$set=n=>{"$$scope"in n&&a(1,e=n.$$scope)},[s,e]}class qt extends j{constructor(t){super(),q(this,t,jt,Rt,U,{})}}function Ut(l){let t;return{c(){t=b("REPL")},l(a){t=w(a,"REPL")},m(a,s){i(a,t,s)},d(a){a&&c(t)}}}function Yt(l){let t,a,s,e;return a=new bt({props:{href:"https://svelte.dev/repl/hello-world?version=3.53.1",rel:"nofollow",$$slots:{default:[Ut]},$$scope:{ctx:l}}}),{c(){t=b("There is a "),H(a.$$.fragment),s=b(" at the site where you can write code and run it in the browser.")},l(n){t=w(n,"There is a "),E(a.$$.fragment,n),s=w(n," at the site where you can write code and run it in the browser.")},m(n,o){i(n,t,o),S(a,n,o),i(n,s,o),e=!0},p(n,o){const f={};o&16&&(f.$$scope={dirty:o,ctx:n}),a.$set(f)},i(n){e||($(a.$$.fragment,n),e=!0)},o(n){d(a.$$.fragment,n),e=!1},d(n){n&&c(t),M(a,n),n&&c(s)}}}function Ft(l){let t;return{c(){t=b("In a .svelte file you can have a script tag, markup (HTML) and a single style tag that contains all of the styles.")},l(a){t=w(a,"In a .svelte file you can have a script tag, markup (HTML) and a single style tag that contains all of the styles.")},m(a,s){i(a,t,s)},d(a){a&&c(t)}}}function Gt(l){let t,a;return t=new R({props:{$$slots:{default:[Kt]},$$scope:{ctx:l}}}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function Jt(l){let t,a;return t=new R({props:{$$slots:{default:[Qt]},$$scope:{ctx:l}}}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function Kt(l){let t,a;return t=new qt({}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function Qt(l){let t,a;return t=new Dt({}),{c(){H(t.$$.fragment)},l(s){E(t.$$.fragment,s)},m(s,e){S(t,s,e),a=!0},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){d(t.$$.fragment,s),a=!1},d(s){M(t,s)}}}function Zt(l){let t;return{c(){t=b("You can import a .svelte file from anywhere and use it like a class like this:")},l(a){t=w(a,"You can import a .svelte file from anywhere and use it like a class like this:")},m(a,s){i(a,t,s)},d(a){a&&c(t)}}}function Xt(l){let t,a,s,e,n,o,f,D,g,k,W,p,r,m,P,L,Y,C,$t=`<code class="language-svelte">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">"/src/lib/MyComponent.svelte"</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/></span></span>
</code>`,F,tt,nt;t=new R({props:{$$slots:{default:[Yt]},$$scope:{ctx:l}}}),s=new R({props:{$$slots:{default:[Ft]},$$scope:{ctx:l}}});const et=[Jt,Gt],V=[];function at(u,_){return u[0]===0?0:u[0]===1?1:-1}return~(r=at(l))&&(m=V[r]=et[r](l)),L=new R({props:{$$slots:{default:[Zt]},$$scope:{ctx:l}}}),{c(){H(t.$$.fragment),a=T(),H(s.$$.fragment),e=T(),n=h("div"),o=h("button"),f=b("Stage 0: Default"),D=T(),g=h("button"),k=b("Stage 1: Add styling"),W=T(),p=h("div"),m&&m.c(),P=T(),H(L.$$.fragment),Y=T(),C=h("pre"),this.h()},l(u){E(t.$$.fragment,u),a=A(u),E(s.$$.fragment,u),e=A(u),n=v(u,"DIV",{});var _=y(n);o=v(_,"BUTTON",{});var N=y(o);f=w(N,"Stage 0: Default"),N.forEach(c),D=A(_),g=v(_,"BUTTON",{});var O=y(g);k=w(O,"Stage 1: Add styling"),O.forEach(c),_.forEach(c),W=A(u),p=v(u,"DIV",{});var B=y(p);m&&m.l(B),B.forEach(c),P=A(u),E(L.$$.fragment,u),Y=A(u),C=v(u,"PRE",{class:!0});var G=y(C);G.forEach(c),this.h()},h(){z(C,"class","language-svelte")},m(u,_){S(t,u,_),i(u,a,_),S(s,u,_),i(u,e,_),i(u,n,_),x(n,o),x(o,f),x(n,D),x(n,g),x(g,k),i(u,W,_),i(u,p,_),~r&&V[r].m(p,null),i(u,P,_),S(L,u,_),i(u,Y,_),i(u,C,_),C.innerHTML=$t,F=!0,tt||(nt=[pt(o,"click",l[2]),pt(g,"click",l[3])],tt=!0)},p(u,_){const N={};_&16&&(N.$$scope={dirty:_,ctx:u}),t.$set(N);const O={};_&16&&(O.$$scope={dirty:_,ctx:u}),s.$set(O);let B=r;r=at(u),r!==B&&(m&&(gt(),d(V[B],1,1,()=>{V[B]=null}),ht()),~r?(m=V[r],m||(m=V[r]=et[r](u),m.c()),$(m,1),m.m(p,null)):m=null);const G={};_&16&&(G.$$scope={dirty:_,ctx:u}),L.$set(G)},i(u){F||($(t.$$.fragment,u),$(s.$$.fragment,u),$(m),$(L.$$.fragment,u),F=!0)},o(u){d(t.$$.fragment,u),d(s.$$.fragment,u),d(m),d(L.$$.fragment,u),F=!1},d(u){M(t,u),u&&c(a),M(s,u),u&&c(e),u&&c(n),u&&c(W),u&&c(p),~r&&V[r].d(),u&&c(P),M(L,u),u&&c(Y),u&&c(C),tt=!1,vt(nt)}}}function ts(l){let t,a;const s=[l[1],ft];let e={$$slots:{default:[Xt]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)e=st(e,s[n]);return t=new yt({props:e}),{c(){H(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,o){S(t,n,o),a=!0},p(n,[o]){const f=o&2?dt(s,[o&2&&lt(n[1]),o&0&&lt(ft)]):{};o&17&&(f.$$scope={dirty:o,ctx:n}),t.$set(f)},i(n){a||($(t.$$.fragment,n),a=!0)},o(n){d(t.$$.fragment,n),a=!1},d(n){M(t,n)}}}const ft={title:"Writing your first Svelte component",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2022-11-27T00:00:00.000Z",layout:"notes"};function ss(l,t,a){let s=0;const e=()=>a(0,s=0),n=()=>a(0,s=1);return l.$$set=o=>{a(1,t=st(st({},t),ot(o)))},t=ot(t),[s,t,e,n]}class ls extends j{constructor(t){super(),q(this,t,ss,ts,U,{})}}export{ls as default,ft as metadata};
