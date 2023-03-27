import{S as I,i as T,s as B,k as f,q as y,a as L,l as m,m as _,r as d,h as c,c as E,n as g,b as i,G as $,B as b,w as C,x as D,y as F,f as v,t as w,z as G,F as J,H as P,I as R,J as V,R as j,e as M,T as K}from"./index-a6ce3bb5.js";import{E as N}from"./Example-f263ece7.js";function O(o){let n,e,t,s,a,l,r,x,h,k,H;return{c(){n=f("h2"),e=y("My first Svelte component"),t=L(),s=f("p"),a=y("Hello World"),l=L(),r=f("a"),x=y("Link to Li Hau's youtube"),h=L(),k=f("a"),H=y("Link to my youtube"),this.h()},l(p){n=m(p,"H2",{class:!0});var u=_(n);e=d(u,"My first Svelte component"),u.forEach(c),t=E(p),s=m(p,"P",{class:!0});var W=_(s);a=d(W,"Hello World"),W.forEach(c),l=E(p),r=m(p,"A",{href:!0});var z=_(r);x=d(z,"Link to Li Hau's youtube"),z.forEach(c),h=E(p),k=m(p,"A",{href:!0});var S=_(k);H=d(S,"Link to my youtube"),S.forEach(c),this.h()},h(){g(n,"class","svelte-1lc270m"),g(s,"class","svelte-1lc270m"),g(r,"href","https://www.youtube.com/lihautan"),g(k,"href","https://www.youtube.com/@henrikvilhelmberglund")},m(p,u){i(p,n,u),$(n,e),i(p,t,u),i(p,s,u),$(s,a),i(p,l,u),i(p,r,u),$(r,x),i(p,h,u),i(p,k,u),$(k,H)},p:b,i:b,o:b,d(p){p&&c(n),p&&c(t),p&&c(s),p&&c(l),p&&c(r),p&&c(h),p&&c(k)}}}class Q extends I{constructor(n){super(),T(this,n,null,O,B,{})}}const U=o=>({}),q=o=>({slot:"example"}),X=o=>({}),A=o=>({slot:"code"});function Y(o){let n,e;return n=new Q({}),{c(){C(n.$$.fragment)},l(t){D(n.$$.fragment,t)},m(t,s){F(n,t,s),e=!0},i(t){e||(v(n.$$.fragment,t),e=!0)},o(t){w(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Z(o){let n;const e=o[0].default,t=J(e,o,o[1],q),s=t||Y();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){t&&t.p&&(!n||l&2)&&P(t,e,a,a[1],n?V(e,a[1],l,U):R(a[1]),q)},i(a){n||(v(s,a),n=!0)},o(a){w(s,a),n=!1},d(a){s&&s.d(a)}}}function ss(o){let n,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>My first Svelte component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/lihautan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to Li Hau's youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youtube.com/@henrikvilhelmberglund<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link to my youtube<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> rebeccapurple<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> zoom 5s infinite<span class="token punctuation">;</span>
    <span class="token atrule"><span class="token rule">@apply</span> text-center<span class="token punctuation">;</span></span>
    
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> zoom</span> <span class="token punctuation">{</span>
    <span class="token selector">0%, 100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>`,t;return{c(){n=new j(!1),t=M(),this.h()},l(s){n=K(s,!1),t=M(),this.h()},h(){n.a=t},m(s,a){n.m(e,s,a),i(s,t,a)},p:b,d(s){s&&c(t),s&&n.d()}}}function ns(o){let n;const e=o[0].default,t=J(e,o,o[1],A),s=t||ss();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){t&&t.p&&(!n||l&2)&&P(t,e,a,a[1],n?V(e,a[1],l,X):R(a[1]),A)},i(a){n||(v(s,a),n=!0)},o(a){w(s,a),n=!1},d(a){s&&s.d(a)}}}function as(o){let n,e,t;return e=new N({props:{src:String.raw`<h2>My first Svelte component</h2>
<p>Hello World</p>
<a href="https://www.youtube.com/lihautan">Link to Li Hau's youtube</a>
<a href="https://www.youtube.com/@henrikvilhelmberglund">Link to my youtube</a>
<style>
h2 {
color: rebeccapurple;
animation: zoom 5s infinite;
@apply text-center;

}
p {
color: blue;
font-size: 44px;
}
@keyframes zoom {
0%, 100% { transform: scale(2)}
50% { transform: scale(0.5)}
}

</style>`,meta:{Wrapper:"/src/lib/Example.svelte",example:!0},$$slots:{code:[ns],example:[Z]},$$scope:{ctx:o}}}),{c(){n=f("div"),C(e.$$.fragment)},l(s){n=m(s,"DIV",{});var a=_(n);D(e.$$.fragment,a),a.forEach(c)},m(s,a){i(s,n,a),F(e,n,null),t=!0},p(s,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){s&&c(n),G(e)}}}function ts(o,n,e){let{$$slots:t={},$$scope:s}=n;return o.$$set=a=>{"$$scope"in a&&e(1,s=a.$$scope)},[t,s]}class os extends I{constructor(n){super(),T(this,n,ts,as,B,{})}}export{os as default};
