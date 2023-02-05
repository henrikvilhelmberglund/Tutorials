import{S as we,i as ke,s as be,J as ee,w,x as k,y as b,K as Se,L as ue,f as S,t as E,z as D,M as _e,a as M,k as ce,c as O,l as ge,m as ve,h as p,n as Ee,b as l,q as i,r as c,D as De,B as Le}from"./index-bc81051f.js";import{M as Me,P as A}from"./mdsvex-layout-notes-19848e84.js";import Oe from"./EventListener-57b097a4.js";import Pe from"./EventListenerArrowFunction-f9a3afce.js";import Ie from"./PreventDefault-bdf99c0f.js";import Te from"./StopPropagation-56ef22b6.js";import He from"./Capture-8f8b5128.js";import Je from"./Self-73372a21.js";import{H as Ae}from"./H3-db45ddec.js";import{S as I}from"./Strong-a34d9bbd.js";function je(a){let n;return{c(){n=i("In vanilla JS we do something like this:")},l(e){n=c(e,"In vanilla JS we do something like this:")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function qe(a){let n;return{c(){n=i("directly in the markup")},l(e){n=c(e,"directly in the markup")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ce(a){let n,e,$,m;return e=new I({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){n=i("but in Svelte we can add event listeners "),w(e.$$.fragment),$=i(".")},l(s){n=c(s,"but in Svelte we can add event listeners "),k(e.$$.fragment,s),$=c(s,".")},m(s,f){l(s,n,f),b(e,s,f),l(s,$,f),m=!0},p(s,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:s}),e.$set(u)},i(s){m||(S(e.$$.fragment,s),m=!0)},o(s){E(e.$$.fragment,s),m=!1},d(s){s&&p(n),D(e,s),s&&p($)}}}function We(a){let n;return{c(){n=i("Of course it's also possible to use arrow functions.")},l(e){n=c(e,"Of course it's also possible to use arrow functions.")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function ze(a){let n;return{c(){n=i("automatically be cleaned up")},l(e){n=c(e,"automatically be cleaned up")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Be(a){let n,e,$,m;return e=new I({props:{$$slots:{default:[ze]},$$scope:{ctx:a}}}),{c(){n=i("If the component is removed from the DOM the event listeners will "),w(e.$$.fragment),$=i(".")},l(s){n=c(s,"If the component is removed from the DOM the event listeners will "),k(e.$$.fragment,s),$=c(s,".")},m(s,f){l(s,n,f),b(e,s,f),l(s,$,f),m=!0},p(s,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:s}),e.$set(u)},i(s){m||(S(e.$$.fragment,s),m=!0)},o(s){E(e.$$.fragment,s),m=!1},d(s){s&&p(n),D(e,s),s&&p($)}}}function Fe(a){let n;return{c(){n=i("Event modifiers")},l(e){n=c(e,"Event modifiers")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ke(a){let n,e,$,m;return{c(){n=i("When we have forms in HTML we may want to use the JS "),e=ce("code"),$=i("event.preventDefault();"),m=i(".")},l(s){n=c(s,"When we have forms in HTML we may want to use the JS "),e=ge(s,"CODE",{});var f=ve(e);$=c(f,"event.preventDefault();"),f.forEach(p),m=c(s,".")},m(s,f){l(s,n,f),l(s,e,f),De(e,$),l(s,m,f)},p:Le,d(s){s&&p(n),s&&p(e),s&&p(m)}}}function Re(a){let n;return{c(){n=i("event modifier")},l(e){n=c(e,"event modifier")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ze(a){let n;return{c(){n=i("|")},l(e){n=c(e,"|")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ge(a){let n;return{c(){n=i("preventDefault")},l(e){n=c(e,"preventDefault")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ne(a){let n,e,$,m,s,f,u,v;return e=new I({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),m=new I({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}}),f=new I({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){n=i("In Svelte we can have that as an "),w(e.$$.fragment),$=i(". After the event name we can add "),w(m.$$.fragment),s=i(" and "),w(f.$$.fragment),u=i(" to get the same effect without writing code in the script tag.")},l(_){n=c(_,"In Svelte we can have that as an "),k(e.$$.fragment,_),$=c(_,". After the event name we can add "),k(m.$$.fragment,_),s=c(_," and "),k(f.$$.fragment,_),u=c(_," to get the same effect without writing code in the script tag.")},m(_,g){l(_,n,g),b(e,_,g),l(_,$,g),b(m,_,g),l(_,s,g),b(f,_,g),l(_,u,g),v=!0},p(_,g){const T={};g&2&&(T.$$scope={dirty:g,ctx:_}),e.$set(T);const P={};g&2&&(P.$$scope={dirty:g,ctx:_}),m.$set(P);const o={};g&2&&(o.$$scope={dirty:g,ctx:_}),f.$set(o)},i(_){v||(S(e.$$.fragment,_),S(m.$$.fragment,_),S(f.$$.fragment,_),v=!0)},o(_){E(e.$$.fragment,_),E(m.$$.fragment,_),E(f.$$.fragment,_),v=!1},d(_){_&&p(n),D(e,_),_&&p($),D(m,_),_&&p(s),D(f,_),_&&p(u)}}}function Qe(a){let n;return{c(){n=i("stopPropagation")},l(e){n=c(e,"stopPropagation")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ue(a){let n,e,$,m;return e=new I({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){n=i("There are also other modifiers like "),w(e.$$.fragment),$=i(" to prevent bubbling,")},l(s){n=c(s,"There are also other modifiers like "),k(e.$$.fragment,s),$=c(s," to prevent bubbling,")},m(s,f){l(s,n,f),b(e,s,f),l(s,$,f),m=!0},p(s,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:s}),e.$set(u)},i(s){m||(S(e.$$.fragment,s),m=!0)},o(s){E(e.$$.fragment,s),m=!1},d(s){s&&p(n),D(e,s),s&&p($)}}}function Ve(a){let n;return{c(){n=i("options")},l(e){n=c(e,"options")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Xe(a){let n;return{c(){n=i("capture")},l(e){n=c(e,"capture")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function Ye(a){let n,e,$,m,s,f;return e=new I({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),m=new I({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){n=i("and the .addEventListener() third "),w(e.$$.fragment),$=i(" arguments are also available, for example "),w(m.$$.fragment),s=i(" to trigger the event in the capture phase.")},l(u){n=c(u,"and the .addEventListener() third "),k(e.$$.fragment,u),$=c(u," arguments are also available, for example "),k(m.$$.fragment,u),s=c(u," to trigger the event in the capture phase.")},m(u,v){l(u,n,v),b(e,u,v),l(u,$,v),b(m,u,v),l(u,s,v),f=!0},p(u,v){const _={};v&2&&(_.$$scope={dirty:v,ctx:u}),e.$set(_);const g={};v&2&&(g.$$scope={dirty:v,ctx:u}),m.$set(g)},i(u){f||(S(e.$$.fragment,u),S(m.$$.fragment,u),f=!0)},o(u){E(e.$$.fragment,u),E(m.$$.fragment,u),f=!1},d(u){u&&p(n),D(e,u),u&&p($),D(m,u),u&&p(s)}}}function xe(a){let n;return{c(){n=i("once")},l(e){n=c(e,"once")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function de(a){let n;return{c(){n=i("passive")},l(e){n=c(e,"passive")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function he(a){let n;return{c(){n=i("nonpassive")},l(e){n=c(e,"nonpassive")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function ye(a){let n;return{c(){n=i("trusted")},l(e){n=c(e,"trusted")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function et(a){let n;return{c(){n=i("self")},l(e){n=c(e,"self")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function tt(a){let n,e,$,m,s,f,u,v,_,g,T,P;return e=new I({props:{$$slots:{default:[xe]},$$scope:{ctx:a}}}),m=new I({props:{$$slots:{default:[de]},$$scope:{ctx:a}}}),f=new I({props:{$$slots:{default:[he]},$$scope:{ctx:a}}}),v=new I({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),g=new I({props:{$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){n=i("Other possible event modifiers are "),w(e.$$.fragment),$=i(", "),w(m.$$.fragment),s=i(", "),w(f.$$.fragment),u=i(", "),w(v.$$.fragment),_=i(" and "),w(g.$$.fragment),T=i(".")},l(o){n=c(o,"Other possible event modifiers are "),k(e.$$.fragment,o),$=c(o,", "),k(m.$$.fragment,o),s=c(o,", "),k(f.$$.fragment,o),u=c(o,", "),k(v.$$.fragment,o),_=c(o," and "),k(g.$$.fragment,o),T=c(o,".")},m(o,L){l(o,n,L),b(e,o,L),l(o,$,L),b(m,o,L),l(o,s,L),b(f,o,L),l(o,u,L),b(v,o,L),l(o,_,L),b(g,o,L),l(o,T,L),P=!0},p(o,L){const B={};L&2&&(B.$$scope={dirty:L,ctx:o}),e.$set(B);const H={};L&2&&(H.$$scope={dirty:L,ctx:o}),m.$set(H);const F={};L&2&&(F.$$scope={dirty:L,ctx:o}),f.$set(F);const J={};L&2&&(J.$$scope={dirty:L,ctx:o}),v.$set(J);const K={};L&2&&(K.$$scope={dirty:L,ctx:o}),g.$set(K)},i(o){P||(S(e.$$.fragment,o),S(m.$$.fragment,o),S(f.$$.fragment,o),S(v.$$.fragment,o),S(g.$$.fragment,o),P=!0)},o(o){E(e.$$.fragment,o),E(m.$$.fragment,o),E(f.$$.fragment,o),E(v.$$.fragment,o),E(g.$$.fragment,o),P=!1},d(o){o&&p(n),D(e,o),o&&p($),D(m,o),o&&p(s),D(f,o),o&&p(u),D(v,o),o&&p(_),D(g,o),o&&p(T)}}}function nt(a){let n;return{c(){n=i("event.target is the element itself")},l(e){n=c(e,"event.target is the element itself")},m(e,$){l(e,n,$)},d(e){e&&p(n)}}}function st(a){let n,e,$,m;return e=new I({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),{c(){n=i("Self will only trigger if the "),w(e.$$.fragment),$=i(".")},l(s){n=c(s,"Self will only trigger if the "),k(e.$$.fragment,s),$=c(s,".")},m(s,f){l(s,n,f),b(e,s,f),l(s,$,f),m=!0},p(s,f){const u={};f&2&&(u.$$scope={dirty:f,ctx:s}),e.$set(u)},i(s){m||(S(e.$$.fragment,s),m=!0)},o(s){E(e.$$.fragment,s),m=!1},d(s){s&&p(n),D(e,s),s&&p($)}}}function $t(a){let n,e,$,m=`<code class="language-js"><span class="token keyword">let</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
h1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,s,f,u,v,_,g,T,P,o,L,B,H,F,J,K,j,Q,R,U,q,V,Z,X,C,Y,G,x,W,d,z,h,N,y;return n=new A({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),f=new A({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),v=new Oe({}),g=new A({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),P=new Pe({}),L=new A({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),H=new Ae({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),J=new A({props:{$$slots:{default:[Ke]},$$scope:{ctx:a}}}),j=new A({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),R=new Ie({}),q=new A({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),Z=new Te({}),C=new A({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),G=new He({}),W=new A({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),z=new A({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),N=new Je({}),{c(){w(n.$$.fragment),e=M(),$=ce("pre"),s=M(),w(f.$$.fragment),u=M(),w(v.$$.fragment),_=M(),w(g.$$.fragment),T=M(),w(P.$$.fragment),o=M(),w(L.$$.fragment),B=M(),w(H.$$.fragment),F=M(),w(J.$$.fragment),K=M(),w(j.$$.fragment),Q=M(),w(R.$$.fragment),U=M(),w(q.$$.fragment),V=M(),w(Z.$$.fragment),X=M(),w(C.$$.fragment),Y=M(),w(G.$$.fragment),x=M(),w(W.$$.fragment),d=M(),w(z.$$.fragment),h=M(),w(N.$$.fragment),this.h()},l(t){k(n.$$.fragment,t),e=O(t),$=ge(t,"PRE",{class:!0});var r=ve($);r.forEach(p),s=O(t),k(f.$$.fragment,t),u=O(t),k(v.$$.fragment,t),_=O(t),k(g.$$.fragment,t),T=O(t),k(P.$$.fragment,t),o=O(t),k(L.$$.fragment,t),B=O(t),k(H.$$.fragment,t),F=O(t),k(J.$$.fragment,t),K=O(t),k(j.$$.fragment,t),Q=O(t),k(R.$$.fragment,t),U=O(t),k(q.$$.fragment,t),V=O(t),k(Z.$$.fragment,t),X=O(t),k(C.$$.fragment,t),Y=O(t),k(G.$$.fragment,t),x=O(t),k(W.$$.fragment,t),d=O(t),k(z.$$.fragment,t),h=O(t),k(N.$$.fragment,t),this.h()},h(){Ee($,"class","language-js")},m(t,r){b(n,t,r),l(t,e,r),l(t,$,r),$.innerHTML=m,l(t,s,r),b(f,t,r),l(t,u,r),b(v,t,r),l(t,_,r),b(g,t,r),l(t,T,r),b(P,t,r),l(t,o,r),b(L,t,r),l(t,B,r),b(H,t,r),l(t,F,r),b(J,t,r),l(t,K,r),b(j,t,r),l(t,Q,r),b(R,t,r),l(t,U,r),b(q,t,r),l(t,V,r),b(Z,t,r),l(t,X,r),b(C,t,r),l(t,Y,r),b(G,t,r),l(t,x,r),b(W,t,r),l(t,d,r),b(z,t,r),l(t,h,r),b(N,t,r),y=!0},p(t,r){const te={};r&2&&(te.$$scope={dirty:r,ctx:t}),n.$set(te);const ne={};r&2&&(ne.$$scope={dirty:r,ctx:t}),f.$set(ne);const se={};r&2&&(se.$$scope={dirty:r,ctx:t}),g.$set(se);const $e={};r&2&&($e.$$scope={dirty:r,ctx:t}),L.$set($e);const fe={};r&2&&(fe.$$scope={dirty:r,ctx:t}),H.$set(fe);const oe={};r&2&&(oe.$$scope={dirty:r,ctx:t}),J.$set(oe);const pe={};r&2&&(pe.$$scope={dirty:r,ctx:t}),j.$set(pe);const re={};r&2&&(re.$$scope={dirty:r,ctx:t}),q.$set(re);const le={};r&2&&(le.$$scope={dirty:r,ctx:t}),C.$set(le);const me={};r&2&&(me.$$scope={dirty:r,ctx:t}),W.$set(me);const ae={};r&2&&(ae.$$scope={dirty:r,ctx:t}),z.$set(ae)},i(t){y||(S(n.$$.fragment,t),S(f.$$.fragment,t),S(v.$$.fragment,t),S(g.$$.fragment,t),S(P.$$.fragment,t),S(L.$$.fragment,t),S(H.$$.fragment,t),S(J.$$.fragment,t),S(j.$$.fragment,t),S(R.$$.fragment,t),S(q.$$.fragment,t),S(Z.$$.fragment,t),S(C.$$.fragment,t),S(G.$$.fragment,t),S(W.$$.fragment,t),S(z.$$.fragment,t),S(N.$$.fragment,t),y=!0)},o(t){E(n.$$.fragment,t),E(f.$$.fragment,t),E(v.$$.fragment,t),E(g.$$.fragment,t),E(P.$$.fragment,t),E(L.$$.fragment,t),E(H.$$.fragment,t),E(J.$$.fragment,t),E(j.$$.fragment,t),E(R.$$.fragment,t),E(q.$$.fragment,t),E(Z.$$.fragment,t),E(C.$$.fragment,t),E(G.$$.fragment,t),E(W.$$.fragment,t),E(z.$$.fragment,t),E(N.$$.fragment,t),y=!1},d(t){D(n,t),t&&p(e),t&&p($),t&&p(s),D(f,t),t&&p(u),D(v,t),t&&p(_),D(g,t),t&&p(T),D(P,t),t&&p(o),D(L,t),t&&p(B),D(H,t),t&&p(F),D(J,t),t&&p(K),D(j,t),t&&p(Q),D(R,t),t&&p(U),D(q,t),t&&p(V),D(Z,t),t&&p(X),D(C,t),t&&p(Y),D(G,t),t&&p(x),D(W,t),t&&p(d),D(z,t),t&&p(h),D(N,t)}}}function ft(a){let n,e;const $=[a[0],ie];let m={$$slots:{default:[$t]},$$scope:{ctx:a}};for(let s=0;s<$.length;s+=1)m=ee(m,$[s]);return n=new Me({props:m}),{c(){w(n.$$.fragment)},l(s){k(n.$$.fragment,s)},m(s,f){b(n,s,f),e=!0},p(s,[f]){const u=f&1?Se($,[f&1&&ue(s[0]),f&0&&ue(ie)]):{};f&2&&(u.$$scope={dirty:f,ctx:s}),n.$set(u)},i(s){e||(S(n.$$.fragment,s),e=!0)},o(s){E(n.$$.fragment,s),e=!1},d(s){D(n,s)}}}const ie={title:"Attaching events in Svelte",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-02T00:00:00.000Z",layout:"notes"};function ot(a,n,e){return a.$$set=$=>{e(0,n=ee(ee({},n),_e($)))},n=_e(n),[n]}class vt extends we{constructor(n){super(),ke(this,n,ot,ft,be,{})}}export{vt as default,ie as metadata};
