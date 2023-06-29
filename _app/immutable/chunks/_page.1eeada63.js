import{s as Ae,C as de,D as Ie,a as E,f as Q,l as i,e as Pe,c as C,g as Y,h as x,d as r,m as _,j as _e,i as p,v as A,X as Me,n as De,H as Fe}from"./scheduler.a7cd560e.js";import{S as Ge,i as Ue,b as w,d,m as v,a as g,t as h,e as k,g as Ne,c as Oe}from"./index.396264e7.js";import{g as qe,a as Be}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Le,P as F}from"./mdsvex-layout-notes.4b2b7ac6.js";import Re from"./HelloWorld_1.89d104ff.js";import We from"./AnotherComponent.1ea6e6ba.js";import Xe from"./BigP.7df043ee.js";import Ze from"./SmallP.bcd79b22.js";import Je from"./PAttack.e89e4a3c.js";import{H as Ke}from"./H3.2217b794.js";import{S as ee}from"./Strong.097578ae.js";import{C as se}from"./Code.64283003.js";function Qe(f){let t;return{c(){t=i("scoped")},l(e){t=_(e,"scoped")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function Ye(f){let t,e,s,a;return e=new ee({props:{$$slots:{default:[Qe]},$$scope:{ctx:f}}}),{c(){t=i("Styles in components are "),w(e.$$.fragment),s=i(". This means that the styles in one component will only apply in that particular component.")},l(l){t=_(l,"Styles in components are "),d(e.$$.fragment,l),s=_(l,". This means that the styles in one component will only apply in that particular component.")},m(l,o){p(l,t,o),v(e,l,o),p(l,s,o),a=!0},p(l,o){const u={};o&32&&(u.$$scope={dirty:o,ctx:l}),e.$set(u)},i(l){a||(g(e.$$.fragment,l),a=!0)},o(l){h(e.$$.fragment,l),a=!1},d(l){l&&(r(t),r(s)),k(e,l)}}}function xe(f){let t;return{c(){t=i("<h2>")},l(e){t=_(e,"<h2>")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function et(f){let t;return{c(){t=i("<p>")},l(e){t=_(e,"<p>")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function tt(f){let t;return{c(){t=i("classes")},l(e){t=_(e,"classes")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function nt(f){let t;return{c(){t=i("animation keyframes")},l(e){t=_(e,"animation keyframes")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function st(f){let t,e,s,a,l,o,u,S,c,y;return e=new se({props:{$$slots:{default:[xe]},$$scope:{ctx:f}}}),a=new se({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),o=new ee({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),S=new ee({props:{$$slots:{default:[nt]},$$scope:{ctx:f}}}),{c(){t=i("Here we have two components. Even though both have "),w(e.$$.fragment),s=i(" tags and "),w(a.$$.fragment),l=i(" tags, the styles from the left component don't apply to the right component. The same is true for "),w(o.$$.fragment),u=i(" and "),w(S.$$.fragment),c=i(".")},l(m){t=_(m,"Here we have two components. Even though both have "),d(e.$$.fragment,m),s=_(m," tags and "),d(a.$$.fragment,m),l=_(m," tags, the styles from the left component don't apply to the right component. The same is true for "),d(o.$$.fragment,m),u=_(m," and "),d(S.$$.fragment,m),c=_(m,".")},m(m,b){p(m,t,b),v(e,m,b),p(m,s,b),v(a,m,b),p(m,l,b),v(o,m,b),p(m,u,b),v(S,m,b),p(m,c,b),y=!0},p(m,b){const H={};b&32&&(H.$$scope={dirty:b,ctx:m}),e.$set(H);const G={};b&32&&(G.$$scope={dirty:b,ctx:m}),a.$set(G);const I={};b&32&&(I.$$scope={dirty:b,ctx:m}),o.$set(I);const U={};b&32&&(U.$$scope={dirty:b,ctx:m}),S.$set(U)},i(m){y||(g(e.$$.fragment,m),g(a.$$.fragment,m),g(o.$$.fragment,m),g(S.$$.fragment,m),y=!0)},o(m){h(e.$$.fragment,m),h(a.$$.fragment,m),h(o.$$.fragment,m),h(S.$$.fragment,m),y=!1},d(m){m&&(r(t),r(s),r(l),r(u),r(c)),k(e,m),k(a,m),k(o,m),k(S,m)}}}function ot(f){let t;return{c(){t=i("This means that it's very easy to write CSS in the components themselves because you don't have to worry about any styles colliding.")},l(e){t=_(e,"This means that it's very easy to write CSS in the components themselves because you don't have to worry about any styles colliding.")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function lt(f){let t;return{c(){t=i("If you have a style but it's not being used Svelte will discard it when compiling creating an optimized CSS file.")},l(e){t=_(e,"If you have a style but it's not being used Svelte will discard it when compiling creating an optimized CSS file.")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function at(f){let t;return{c(){t=i("Global styles")},l(e){t=_(e,"Global styles")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function $t(f){let t;return{c(){t=i("global styles")},l(e){t=_(e,"global styles")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function ft(f){let t;return{c(){t=i(":global(selector)")},l(e){t=_(e,":global(selector)")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function rt(f){let t,e,s,a,l;return e=new ee({props:{$$slots:{default:[$t]},$$scope:{ctx:f}}}),a=new se({props:{$$slots:{default:[ft]},$$scope:{ctx:f}}}),{c(){t=i("If you really want to you can also have "),w(e.$$.fragment),s=i(". To do that you write "),w(a.$$.fragment)},l(o){t=_(o,"If you really want to you can also have "),d(e.$$.fragment,o),s=_(o,". To do that you write "),d(a.$$.fragment,o)},m(o,u){p(o,t,u),v(e,o,u),p(o,s,u),v(a,o,u),l=!0},p(o,u){const S={};u&32&&(S.$$scope={dirty:u,ctx:o}),e.$set(S);const c={};u&32&&(c.$$scope={dirty:u,ctx:o}),a.$set(c)},i(o){l||(g(e.$$.fragment,o),g(a.$$.fragment,o),l=!0)},o(o){h(e.$$.fragment,o),h(a.$$.fragment,o),l=!1},d(o){o&&(r(t),r(s)),k(e,o),k(a,o)}}}function mt(f){let t,e;return t=new Ze({}),{c(){w(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){h(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function pt(f){let t,e;return t=new Xe({}),{c(){w(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){h(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function ct(f){let t;return{c(){t=i("Or, like in this case, put them inside a style tag in")},l(e){t=_(e,"Or, like in this case, put them inside a style tag in")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function ut(f){let t;return{c(){t=i("disable the global style")},l(e){t=_(e,"disable the global style")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function it(f){let t;return{c(){t=i(":global(selector)")},l(e){t=_(e,":global(selector)")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function _t(f){let t;return{c(){t=i("everywhere")},l(e){t=_(e,"everywhere")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function gt(f){let t,e,s,a,l,o,u,S;return e=new ee({props:{$$slots:{default:[ut]},$$scope:{ctx:f}}}),a=new se({props:{$$slots:{default:[it]},$$scope:{ctx:f}}}),o=new ee({props:{$$slots:{default:[_t]},$$scope:{ctx:f}}}),{c(){t=i("The benefit of this approach is that you can actually "),w(e.$$.fragment),s=i(" like I did here with a button, whereas the "),w(a.$$.fragment),l=i(" approach will apply the global style "),w(o.$$.fragment),u=i(" without an easy way to disable it.")},l(c){t=_(c,"The benefit of this approach is that you can actually "),d(e.$$.fragment,c),s=_(c," like I did here with a button, whereas the "),d(a.$$.fragment,c),l=_(c," approach will apply the global style "),d(o.$$.fragment,c),u=_(c," without an easy way to disable it.")},m(c,y){p(c,t,y),v(e,c,y),p(c,s,y),v(a,c,y),p(c,l,y),v(o,c,y),p(c,u,y),S=!0},p(c,y){const m={};y&32&&(m.$$scope={dirty:y,ctx:c}),e.$set(m);const b={};y&32&&(b.$$scope={dirty:y,ctx:c}),a.$set(b);const H={};y&32&&(H.$$scope={dirty:y,ctx:c}),o.$set(H)},i(c){S||(g(e.$$.fragment,c),g(a.$$.fragment,c),g(o.$$.fragment,c),S=!0)},o(c){h(e.$$.fragment,c),h(a.$$.fragment,c),h(o.$$.fragment,c),S=!1},d(c){c&&(r(t),r(s),r(l),r(u)),k(e,c),k(a,c),k(o,c)}}}function ht(f){let t;return{c(){t=i("-global-")},l(e){t=_(e,"-global-")},m(e,s){p(e,t,s)},d(e){e&&r(t)}}}function bt(f){let t,e,s,a;return e=new se({props:{$$slots:{default:[ht]},$$scope:{ctx:f}}}),{c(){t=i("For animation keyframes you can add "),w(e.$$.fragment),s=i(" before the identifier to make it global.")},l(l){t=_(l,"For animation keyframes you can add "),d(e.$$.fragment,l),s=_(l," before the identifier to make it global.")},m(l,o){p(l,t,o),v(e,l,o),p(l,s,o),a=!0},p(l,o){const u={};o&32&&(u.$$scope={dirty:o,ctx:l}),e.$set(u)},i(l){a||(g(e.$$.fragment,l),a=!0)},o(l){h(e.$$.fragment,l),a=!1},d(l){l&&(r(t),r(s)),k(e,l)}}}function Ve(f){let t,e;return t=new Je({}),{c(){w(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,a){v(t,s,a),e=!0},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){h(t.$$.fragment,s),e=!1},d(s){k(t,s)}}}function wt(f){let t,e,s,a,l,o,u,S,c,y,m,b,H,G,I,U,D,oe,N,le,O,ge,te=f[0]?"small":"big",ae,$e,P,M,W,B,fe,q,ze=`<code class="language-svelte">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- put style tag with global styles here --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
</code>`,re,V,me,j,pe,z,ne=f[1]?"Hide":"Show",ce,he,ue,X,Z,be,ve;t=new F({props:{$$slots:{default:[Ye]},$$scope:{ctx:f}}}),a=new Re({}),c=new We({}),m=new F({props:{$$slots:{default:[st]},$$scope:{ctx:f}}}),H=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:f}}}),I=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:f}}}),D=new Ke({props:{$$slots:{default:[at]},$$scope:{ctx:f}}}),N=new F({props:{$$slots:{default:[rt]},$$scope:{ctx:f}}});const ke=[pt,mt],L=[];function ye(n,$){return n[0]?0:1}P=ye(f),M=L[P]=ke[P](f),B=new F({props:{$$slots:{default:[ct]},$$scope:{ctx:f}}}),V=new F({props:{$$slots:{default:[gt]},$$scope:{ctx:f}}}),j=new F({props:{$$slots:{default:[bt]},$$scope:{ctx:f}}});let T=f[1]&&Ve();return{c(){w(t.$$.fragment),e=E(),s=Q("div"),w(a.$$.fragment),l=E(),o=Q("div"),u=Q("div"),S=E(),w(c.$$.fragment),y=E(),w(m.$$.fragment),b=E(),w(H.$$.fragment),G=E(),w(I.$$.fragment),U=E(),w(D.$$.fragment),oe=E(),w(N.$$.fragment),le=E(),O=Q("button"),ge=i("Make p tag "),ae=i(te),$e=E(),M.c(),W=E(),w(B.$$.fragment),fe=E(),q=Q("pre"),re=E(),w(V.$$.fragment),me=E(),w(j.$$.fragment),pe=E(),z=Q("button"),ce=i(ne),he=i(" Example"),ue=E(),T&&T.c(),X=Pe(),this.h()},l(n){d(t.$$.fragment,n),e=C(n),s=Y(n,"DIV",{class:!0});var $=x(s);d(a.$$.fragment,$),l=C($),o=Y($,"DIV",{class:!0});var R=x(o);u=Y(R,"DIV",{class:!0}),x(u).forEach(r),S=C(R),d(c.$$.fragment,R),R.forEach(r),$.forEach(r),y=C(n),d(m.$$.fragment,n),b=C(n),d(H.$$.fragment,n),G=C(n),d(I.$$.fragment,n),U=C(n),d(D.$$.fragment,n),oe=C(n),d(N.$$.fragment,n),le=C(n),O=Y(n,"BUTTON",{});var J=x(O);ge=_(J,"Make p tag "),ae=_(J,te),J.forEach(r),$e=C(n),M.l(n),W=C(n),d(B.$$.fragment,n),fe=C(n),q=Y(n,"PRE",{class:!0});var ie=x(q);ie.forEach(r),re=C(n),d(V.$$.fragment,n),me=C(n),d(j.$$.fragment,n),pe=C(n),z=Y(n,"BUTTON",{});var K=x(z);ce=_(K,ne),he=_(K," Example"),K.forEach(r),ue=C(n),T&&T.l(n),X=Pe(),this.h()},h(){_e(u,"class","spu-5fthn5"),_e(o,"class","spu-mv9xp9"),_e(s,"class","spu-wm7wxn space-between"),_e(q,"class","language-svelte")},m(n,$){v(t,n,$),p(n,e,$),p(n,s,$),v(a,s,null),A(s,l),A(s,o),A(o,u),A(o,S),v(c,o,null),p(n,y,$),v(m,n,$),p(n,b,$),v(H,n,$),p(n,G,$),v(I,n,$),p(n,U,$),v(D,n,$),p(n,oe,$),v(N,n,$),p(n,le,$),p(n,O,$),A(O,ge),A(O,ae),p(n,$e,$),L[P].m(n,$),p(n,W,$),v(B,n,$),p(n,fe,$),p(n,q,$),q.innerHTML=ze,p(n,re,$),v(V,n,$),p(n,me,$),v(j,n,$),p(n,pe,$),p(n,z,$),A(z,ce),A(z,he),p(n,ue,$),T&&T.m(n,$),p(n,X,$),Z=!0,be||(ve=[Me(O,"click",f[3]),Me(z,"click",f[4])],be=!0)},p(n,$){const R={};$&32&&(R.$$scope={dirty:$,ctx:n}),t.$set(R);const J={};$&32&&(J.$$scope={dirty:$,ctx:n}),m.$set(J);const ie={};$&32&&(ie.$$scope={dirty:$,ctx:n}),H.$set(ie);const K={};$&32&&(K.$$scope={dirty:$,ctx:n}),I.$set(K);const Se={};$&32&&(Se.$$scope={dirty:$,ctx:n}),D.$set(Se);const Te={};$&32&&(Te.$$scope={dirty:$,ctx:n}),N.$set(Te),(!Z||$&1)&&te!==(te=n[0]?"small":"big")&&De(ae,te);let we=P;P=ye(n),P!==we&&(Ne(),h(L[we],1,1,()=>{L[we]=null}),Oe(),M=L[P],M||(M=L[P]=ke[P](n),M.c()),g(M,1),M.m(W.parentNode,W));const Ee={};$&32&&(Ee.$$scope={dirty:$,ctx:n}),B.$set(Ee);const Ce={};$&32&&(Ce.$$scope={dirty:$,ctx:n}),V.$set(Ce);const He={};$&32&&(He.$$scope={dirty:$,ctx:n}),j.$set(He),(!Z||$&2)&&ne!==(ne=n[1]?"Hide":"Show")&&De(ce,ne),n[1]?T?$&2&&g(T,1):(T=Ve(),T.c(),g(T,1),T.m(X.parentNode,X)):T&&(Ne(),h(T,1,1,()=>{T=null}),Oe())},i(n){Z||(g(t.$$.fragment,n),g(a.$$.fragment,n),g(c.$$.fragment,n),g(m.$$.fragment,n),g(H.$$.fragment,n),g(I.$$.fragment,n),g(D.$$.fragment,n),g(N.$$.fragment,n),g(M),g(B.$$.fragment,n),g(V.$$.fragment,n),g(j.$$.fragment,n),g(T),Z=!0)},o(n){h(t.$$.fragment,n),h(a.$$.fragment,n),h(c.$$.fragment,n),h(m.$$.fragment,n),h(H.$$.fragment,n),h(I.$$.fragment,n),h(D.$$.fragment,n),h(N.$$.fragment,n),h(M),h(B.$$.fragment,n),h(V.$$.fragment,n),h(j.$$.fragment,n),h(T),Z=!1},d(n){n&&(r(e),r(s),r(y),r(b),r(G),r(U),r(oe),r(le),r(O),r($e),r(W),r(fe),r(q),r(re),r(me),r(pe),r(z),r(ue),r(X)),k(t,n),k(a),k(c),k(m,n),k(H,n),k(I,n),k(D,n),k(N,n),L[P].d(n),k(B,n),k(V,n),k(j,n),T&&T.d(n),be=!1,Fe(ve)}}}function dt(f){let t,e;const s=[f[2],je];let a={$$slots:{default:[wt]},$$scope:{ctx:f}};for(let l=0;l<s.length;l+=1)a=de(a,s[l]);return t=new Le({props:a}),{c(){w(t.$$.fragment)},l(l){d(t.$$.fragment,l)},m(l,o){v(t,l,o),e=!0},p(l,[o]){const u=o&4?qe(s,[o&4&&Be(l[2]),o&0&&Be(je)]):{};o&35&&(u.$$scope={dirty:o,ctx:l}),t.$set(u)},i(l){e||(g(t.$$.fragment,l),e=!0)},o(l){h(t.$$.fragment,l),e=!1},d(l){k(t,l)}}}const je={title:"Style your Svelte Component",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-01-28T00:00:00.000Z",layout:"notes"};function vt(f,t,e){let s=!1,a=!1;const l=()=>e(0,s=!s),o=()=>e(1,a=!a);return f.$$set=u=>{e(2,t=de(de({},t),Ie(u)))},t=Ie(t),[s,a,t,l,o]}class Ot extends Ge{constructor(t){super(),Ue(this,t,vt,dt,Ae,{})}}export{Ot as default,je as metadata};
