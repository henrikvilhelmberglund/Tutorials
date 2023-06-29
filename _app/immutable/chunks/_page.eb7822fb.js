import{s as ie,C as ee,D as ue,a as L,f as ge,c as M,g as ve,h as we,d as r,j as ke,i as p,l as _,m as i}from"./scheduler.a7cd560e.js";import{S as be,i as Se,b as v,d as w,m as k,a as b,t as S,e as d}from"./index.396264e7.js";import{g as de,a as ce}from"./HR.svelte_svelte_type_style_lang.8355a705.js";import{M as Ee,P as C}from"./mdsvex-layout-notes.4b2b7ac6.js";import De from"./EventListener.45befa7d.js";import Le from"./EventListenerArrowFunction.4e20c612.js";import Me from"./PreventDefault.b99d3bc8.js";import Pe from"./StopPropagation.77f0fad9.js";import he from"./Capture.83e358cf.js";import Ie from"./Self.5b67b8de.js";import{H as Oe}from"./H3.2217b794.js";import{S as h}from"./Strong.097578ae.js";import{C as Te}from"./Code.64283003.js";function Ce(a){let t;return{c(){t=_("In vanilla JS we do something like this:")},l(e){t=i(e,"In vanilla JS we do something like this:")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function He(a){let t;return{c(){t=_("directly in the markup")},l(e){t=i(e,"directly in the markup")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function je(a){let t,e,$,m;return e=new h({props:{$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){t=_("but in Svelte we can add event listeners "),v(e.$$.fragment),$=_(".")},l(s){t=i(s,"but in Svelte we can add event listeners "),w(e.$$.fragment,s),$=i(s,".")},m(s,f){p(s,t,f),k(e,s,f),p(s,$,f),m=!0},p(s,f){const l={};f&2&&(l.$$scope={dirty:f,ctx:s}),e.$set(l)},i(s){m||(b(e.$$.fragment,s),m=!0)},o(s){S(e.$$.fragment,s),m=!1},d(s){s&&(r(t),r($)),d(e,s)}}}function Ae(a){let t;return{c(){t=_("Of course it's also possible to use arrow functions.")},l(e){t=i(e,"Of course it's also possible to use arrow functions.")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Je(a){let t;return{c(){t=_("automatically be cleaned up")},l(e){t=i(e,"automatically be cleaned up")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function qe(a){let t,e,$,m;return e=new h({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){t=_("If the component is removed from the DOM the event listeners will "),v(e.$$.fragment),$=_(".")},l(s){t=i(s,"If the component is removed from the DOM the event listeners will "),w(e.$$.fragment,s),$=i(s,".")},m(s,f){p(s,t,f),k(e,s,f),p(s,$,f),m=!0},p(s,f){const l={};f&2&&(l.$$scope={dirty:f,ctx:s}),e.$set(l)},i(s){m||(b(e.$$.fragment,s),m=!0)},o(s){S(e.$$.fragment,s),m=!1},d(s){s&&(r(t),r($)),d(e,s)}}}function We(a){let t;return{c(){t=_("Event modifiers")},l(e){t=i(e,"Event modifiers")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Fe(a){let t;return{c(){t=_("event.preventDefault();")},l(e){t=i(e,"event.preventDefault();")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Re(a){let t,e,$,m;return e=new Te({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){t=_("When we have forms in HTML we may want to use the JS "),v(e.$$.fragment),$=_(".")},l(s){t=i(s,"When we have forms in HTML we may want to use the JS "),w(e.$$.fragment,s),$=i(s,".")},m(s,f){p(s,t,f),k(e,s,f),p(s,$,f),m=!0},p(s,f){const l={};f&2&&(l.$$scope={dirty:f,ctx:s}),e.$set(l)},i(s){m||(b(e.$$.fragment,s),m=!0)},o(s){S(e.$$.fragment,s),m=!1},d(s){s&&(r(t),r($)),d(e,s)}}}function Ze(a){let t;return{c(){t=_("event modifier")},l(e){t=i(e,"event modifier")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function ze(a){let t;return{c(){t=_("|")},l(e){t=i(e,"|")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Be(a){let t;return{c(){t=_("preventDefault")},l(e){t=i(e,"preventDefault")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Ge(a){let t,e,$,m,s,f,l,E;return e=new h({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}}),m=new h({props:{$$slots:{default:[ze]},$$scope:{ctx:a}}}),f=new h({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){t=_("In Svelte we can have that as an "),v(e.$$.fragment),$=_(". After the event name we can add "),v(m.$$.fragment),s=_(" and "),v(f.$$.fragment),l=_(" to get the same effect without writing code in the script tag.")},l(c){t=i(c,"In Svelte we can have that as an "),w(e.$$.fragment,c),$=i(c,". After the event name we can add "),w(m.$$.fragment,c),s=i(c," and "),w(f.$$.fragment,c),l=i(c," to get the same effect without writing code in the script tag.")},m(c,g){p(c,t,g),k(e,c,g),p(c,$,g),k(m,c,g),p(c,s,g),k(f,c,g),p(c,l,g),E=!0},p(c,g){const I={};g&2&&(I.$$scope={dirty:g,ctx:c}),e.$set(I);const P={};g&2&&(P.$$scope={dirty:g,ctx:c}),m.$set(P);const u={};g&2&&(u.$$scope={dirty:g,ctx:c}),f.$set(u)},i(c){E||(b(e.$$.fragment,c),b(m.$$.fragment,c),b(f.$$.fragment,c),E=!0)},o(c){S(e.$$.fragment,c),S(m.$$.fragment,c),S(f.$$.fragment,c),E=!1},d(c){c&&(r(t),r($),r(s),r(l)),d(e,c),d(m,c),d(f,c)}}}function Ke(a){let t;return{c(){t=_("stopPropagation")},l(e){t=i(e,"stopPropagation")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Ne(a){let t,e,$,m;return e=new h({props:{$$slots:{default:[Ke]},$$scope:{ctx:a}}}),{c(){t=_("There are also other modifiers like "),v(e.$$.fragment),$=_(" to prevent bubbling,")},l(s){t=i(s,"There are also other modifiers like "),w(e.$$.fragment,s),$=i(s," to prevent bubbling,")},m(s,f){p(s,t,f),k(e,s,f),p(s,$,f),m=!0},p(s,f){const l={};f&2&&(l.$$scope={dirty:f,ctx:s}),e.$set(l)},i(s){m||(b(e.$$.fragment,s),m=!0)},o(s){S(e.$$.fragment,s),m=!1},d(s){s&&(r(t),r($)),d(e,s)}}}function Qe(a){let t;return{c(){t=_("options")},l(e){t=i(e,"options")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Ue(a){let t;return{c(){t=_("capture")},l(e){t=i(e,"capture")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Ve(a){let t,e,$,m,s,f;return e=new h({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),m=new h({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){t=_("and the .addEventListener() third "),v(e.$$.fragment),$=_(" arguments are also available, for example "),v(m.$$.fragment),s=_(" to trigger the event in the capture phase.")},l(l){t=i(l,"and the .addEventListener() third "),w(e.$$.fragment,l),$=i(l," arguments are also available, for example "),w(m.$$.fragment,l),s=i(l," to trigger the event in the capture phase.")},m(l,E){p(l,t,E),k(e,l,E),p(l,$,E),k(m,l,E),p(l,s,E),f=!0},p(l,E){const c={};E&2&&(c.$$scope={dirty:E,ctx:l}),e.$set(c);const g={};E&2&&(g.$$scope={dirty:E,ctx:l}),m.$set(g)},i(l){f||(b(e.$$.fragment,l),b(m.$$.fragment,l),f=!0)},o(l){S(e.$$.fragment,l),S(m.$$.fragment,l),f=!1},d(l){l&&(r(t),r($),r(s)),d(e,l),d(m,l)}}}function Xe(a){let t;return{c(){t=_("once")},l(e){t=i(e,"once")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function Ye(a){let t;return{c(){t=_("passive")},l(e){t=i(e,"passive")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function xe(a){let t;return{c(){t=_("nonpassive")},l(e){t=i(e,"nonpassive")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function ye(a){let t;return{c(){t=_("trusted")},l(e){t=i(e,"trusted")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function et(a){let t;return{c(){t=_("self")},l(e){t=i(e,"self")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function tt(a){let t,e,$,m,s,f,l,E,c,g,I,P;return e=new h({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),m=new h({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),f=new h({props:{$$slots:{default:[xe]},$$scope:{ctx:a}}}),E=new h({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),g=new h({props:{$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){t=_("Other possible event modifiers are "),v(e.$$.fragment),$=_(", "),v(m.$$.fragment),s=_(", "),v(f.$$.fragment),l=_(", "),v(E.$$.fragment),c=_(" and "),v(g.$$.fragment),I=_(".")},l(u){t=i(u,"Other possible event modifiers are "),w(e.$$.fragment,u),$=i(u,", "),w(m.$$.fragment,u),s=i(u,", "),w(f.$$.fragment,u),l=i(u,", "),w(E.$$.fragment,u),c=i(u," and "),w(g.$$.fragment,u),I=i(u,".")},m(u,D){p(u,t,D),k(e,u,D),p(u,$,D),k(m,u,D),p(u,s,D),k(f,u,D),p(u,l,D),k(E,u,D),p(u,c,D),k(g,u,D),p(u,I,D),P=!0},p(u,D){const W={};D&2&&(W.$$scope={dirty:D,ctx:u}),e.$set(W);const O={};D&2&&(O.$$scope={dirty:D,ctx:u}),m.$set(O);const F={};D&2&&(F.$$scope={dirty:D,ctx:u}),f.$set(F);const T={};D&2&&(T.$$scope={dirty:D,ctx:u}),E.$set(T);const R={};D&2&&(R.$$scope={dirty:D,ctx:u}),g.$set(R)},i(u){P||(b(e.$$.fragment,u),b(m.$$.fragment,u),b(f.$$.fragment,u),b(E.$$.fragment,u),b(g.$$.fragment,u),P=!0)},o(u){S(e.$$.fragment,u),S(m.$$.fragment,u),S(f.$$.fragment,u),S(E.$$.fragment,u),S(g.$$.fragment,u),P=!1},d(u){u&&(r(t),r($),r(s),r(l),r(c),r(I)),d(e,u),d(m,u),d(f,u),d(E,u),d(g,u)}}}function nt(a){let t;return{c(){t=_("event.target is the element itself")},l(e){t=i(e,"event.target is the element itself")},m(e,$){p(e,t,$)},d(e){e&&r(t)}}}function st(a){let t,e,$,m;return e=new h({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),{c(){t=_("Self will only trigger if the "),v(e.$$.fragment),$=_(".")},l(s){t=i(s,"Self will only trigger if the "),w(e.$$.fragment,s),$=i(s,".")},m(s,f){p(s,t,f),k(e,s,f),p(s,$,f),m=!0},p(s,f){const l={};f&2&&(l.$$scope={dirty:f,ctx:s}),e.$set(l)},i(s){m||(b(e.$$.fragment,s),m=!0)},o(s){S(e.$$.fragment,s),m=!1},d(s){s&&(r(t),r($)),d(e,s)}}}function $t(a){let t,e,$,m=`<code class="language-js"><span class="token keyword">let</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
h1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,s,f,l,E,c,g,I,P,u,D,W,O,F,T,R,H,K,Z,N,j,Q,z,U,A,V,B,X,J,Y,q,x,G,y;return t=new C({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),f=new C({props:{$$slots:{default:[je]},$$scope:{ctx:a}}}),E=new De({}),g=new C({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),P=new Le({}),D=new C({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),O=new Oe({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),T=new C({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),H=new C({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),Z=new Me({}),j=new C({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),z=new Pe({}),A=new C({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),B=new he({}),J=new C({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),q=new C({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),G=new Ie({}),{c(){v(t.$$.fragment),e=L(),$=ge("pre"),s=L(),v(f.$$.fragment),l=L(),v(E.$$.fragment),c=L(),v(g.$$.fragment),I=L(),v(P.$$.fragment),u=L(),v(D.$$.fragment),W=L(),v(O.$$.fragment),F=L(),v(T.$$.fragment),R=L(),v(H.$$.fragment),K=L(),v(Z.$$.fragment),N=L(),v(j.$$.fragment),Q=L(),v(z.$$.fragment),U=L(),v(A.$$.fragment),V=L(),v(B.$$.fragment),X=L(),v(J.$$.fragment),Y=L(),v(q.$$.fragment),x=L(),v(G.$$.fragment),this.h()},l(n){w(t.$$.fragment,n),e=M(n),$=ve(n,"PRE",{class:!0});var o=we($);o.forEach(r),s=M(n),w(f.$$.fragment,n),l=M(n),w(E.$$.fragment,n),c=M(n),w(g.$$.fragment,n),I=M(n),w(P.$$.fragment,n),u=M(n),w(D.$$.fragment,n),W=M(n),w(O.$$.fragment,n),F=M(n),w(T.$$.fragment,n),R=M(n),w(H.$$.fragment,n),K=M(n),w(Z.$$.fragment,n),N=M(n),w(j.$$.fragment,n),Q=M(n),w(z.$$.fragment,n),U=M(n),w(A.$$.fragment,n),V=M(n),w(B.$$.fragment,n),X=M(n),w(J.$$.fragment,n),Y=M(n),w(q.$$.fragment,n),x=M(n),w(G.$$.fragment,n),this.h()},h(){ke($,"class","language-js")},m(n,o){k(t,n,o),p(n,e,o),p(n,$,o),$.innerHTML=m,p(n,s,o),k(f,n,o),p(n,l,o),k(E,n,o),p(n,c,o),k(g,n,o),p(n,I,o),k(P,n,o),p(n,u,o),k(D,n,o),p(n,W,o),k(O,n,o),p(n,F,o),k(T,n,o),p(n,R,o),k(H,n,o),p(n,K,o),k(Z,n,o),p(n,N,o),k(j,n,o),p(n,Q,o),k(z,n,o),p(n,U,o),k(A,n,o),p(n,V,o),k(B,n,o),p(n,X,o),k(J,n,o),p(n,Y,o),k(q,n,o),p(n,x,o),k(G,n,o),y=!0},p(n,o){const te={};o&2&&(te.$$scope={dirty:o,ctx:n}),t.$set(te);const ne={};o&2&&(ne.$$scope={dirty:o,ctx:n}),f.$set(ne);const se={};o&2&&(se.$$scope={dirty:o,ctx:n}),g.$set(se);const $e={};o&2&&($e.$$scope={dirty:o,ctx:n}),D.$set($e);const fe={};o&2&&(fe.$$scope={dirty:o,ctx:n}),O.$set(fe);const oe={};o&2&&(oe.$$scope={dirty:o,ctx:n}),T.$set(oe);const re={};o&2&&(re.$$scope={dirty:o,ctx:n}),H.$set(re);const pe={};o&2&&(pe.$$scope={dirty:o,ctx:n}),j.$set(pe);const ae={};o&2&&(ae.$$scope={dirty:o,ctx:n}),A.$set(ae);const me={};o&2&&(me.$$scope={dirty:o,ctx:n}),J.$set(me);const le={};o&2&&(le.$$scope={dirty:o,ctx:n}),q.$set(le)},i(n){y||(b(t.$$.fragment,n),b(f.$$.fragment,n),b(E.$$.fragment,n),b(g.$$.fragment,n),b(P.$$.fragment,n),b(D.$$.fragment,n),b(O.$$.fragment,n),b(T.$$.fragment,n),b(H.$$.fragment,n),b(Z.$$.fragment,n),b(j.$$.fragment,n),b(z.$$.fragment,n),b(A.$$.fragment,n),b(B.$$.fragment,n),b(J.$$.fragment,n),b(q.$$.fragment,n),b(G.$$.fragment,n),y=!0)},o(n){S(t.$$.fragment,n),S(f.$$.fragment,n),S(E.$$.fragment,n),S(g.$$.fragment,n),S(P.$$.fragment,n),S(D.$$.fragment,n),S(O.$$.fragment,n),S(T.$$.fragment,n),S(H.$$.fragment,n),S(Z.$$.fragment,n),S(j.$$.fragment,n),S(z.$$.fragment,n),S(A.$$.fragment,n),S(B.$$.fragment,n),S(J.$$.fragment,n),S(q.$$.fragment,n),S(G.$$.fragment,n),y=!1},d(n){n&&(r(e),r($),r(s),r(l),r(c),r(I),r(u),r(W),r(F),r(R),r(K),r(N),r(Q),r(U),r(V),r(X),r(Y),r(x)),d(t,n),d(f,n),d(E,n),d(g,n),d(P,n),d(D,n),d(O,n),d(T,n),d(H,n),d(Z,n),d(j,n),d(z,n),d(A,n),d(B,n),d(J,n),d(q,n),d(G,n)}}}function ft(a){let t,e;const $=[a[0],_e];let m={$$slots:{default:[$t]},$$scope:{ctx:a}};for(let s=0;s<$.length;s+=1)m=ee(m,$[s]);return t=new Ee({props:m}),{c(){v(t.$$.fragment)},l(s){w(t.$$.fragment,s)},m(s,f){k(t,s,f),e=!0},p(s,[f]){const l=f&1?de($,[f&1&&ce(s[0]),f&0&&ce(_e)]):{};f&2&&(l.$$scope={dirty:f,ctx:s}),t.$set(l)},i(s){e||(b(t.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),e=!1},d(s){d(t,s)}}}const _e={title:"Attaching events in Svelte",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-02T00:00:00.000Z",layout:"notes"};function ot(a,t,e){return a.$$set=$=>{e(0,t=ee(ee({},t),ue($)))},t=ue(t),[t]}class bt extends be{constructor(t){super(),Se(this,t,ot,ft,ie,{})}}export{bt as default,_e as metadata};
