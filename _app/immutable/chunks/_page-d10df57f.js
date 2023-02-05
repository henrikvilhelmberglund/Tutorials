import{S as Ae,i as Se,s as ke,J as pe,w as i,x as c,y as g,K as Le,L as ye,f as w,t as v,z as b,M as Ce,a as d,k as F,c as j,l as P,m as z,h as m,n as Me,b as l,D as Z,q as u,r as _,B as ue}from"./index-bc81051f.js";import{M as xe,P as K}from"./mdsvex-layout-notes-19848e84.js";import He from"./Count-a8db4f5e.js";import Ue from"./CountObject-a80b50fa.js";import Re from"./CountObjectWrong-02980fe7.js";import Te from"./CountArray-a46b0254.js";import We from"./CountArrayFixed-4a9a83e7.js";import qe from"./CountArrayFixed2-0ee6143b.js";import{L as Q}from"./Li-c401e699.js";import{H as Ie}from"./H3-db45ddec.js";import{S as B}from"./Strong-a34d9bbd.js";function Fe(a){let $;return{c(){$=u("Reactivity")},l(t){$=_(t,"Reactivity")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function Pe(a){let $,t,f,s,n,p;return t=new B({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){$=u("In Svelte we can have something called "),i(t.$$.fragment),f=u(", basically meaning: "),s=F("em"),n=u("When we update variables, update the DOM as well.")},l(o){$=_(o,"In Svelte we can have something called "),c(t.$$.fragment,o),f=_(o,", basically meaning: "),s=P(o,"EM",{});var O=z(s);n=_(O,"When we update variables, update the DOM as well."),O.forEach(m)},m(o,O){l(o,$,O),g(t,o,O),l(o,f,O),l(o,s,O),Z(s,n),p=!0},p(o,O){const E={};O&2&&(E.$$scope={dirty:O,ctx:o}),t.$set(E)},i(o){p||(w(t.$$.fragment,o),p=!0)},o(o){v(t.$$.fragment,o),p=!1},d(o){o&&m($),b(t,o),o&&m(f),o&&m(s)}}}function ze(a){let $;return{c(){$=u("assign a variable in the top level")},l(t){$=_(t,"assign a variable in the top level")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function Be(a){let $,t,f;return t=new B({props:{$$slots:{default:[ze]},$$scope:{ctx:a}}}),{c(){$=u("One way of achieving this is to simply "),i(t.$$.fragment)},l(s){$=_(s,"One way of achieving this is to simply "),c(t.$$.fragment,s)},m(s,n){l(s,$,n),g(t,s,n),f=!0},p(s,n){const p={};n&2&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){f||(w(t.$$.fragment,s),f=!0)},o(s){v(t.$$.fragment,s),f=!1},d(s){s&&m($),b(t,s)}}}function Je(a){let $;return{c(){$=u("type")},l(t){$=_(t,"type")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function Ke(a){let $;return{c(){$=u("do")},l(t){$=_(t,"do")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function Ze(a){let $,t,f,s,n,p;return t=new B({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),s=new B({props:{$$slots:{default:[Ke]},$$scope:{ctx:a}}}),{c(){$=u("The variable "),i(t.$$.fragment),f=u(" doesn't really matter, but we "),i(s.$$.fragment),n=u(" need to change the value using one of three methods.")},l(o){$=_(o,"The variable "),c(t.$$.fragment,o),f=_(o," doesn't really matter, but we "),c(s.$$.fragment,o),n=_(o," need to change the value using one of three methods.")},m(o,O){l(o,$,O),g(t,o,O),l(o,f,O),g(s,o,O),l(o,n,O),p=!0},p(o,O){const E={};O&2&&(E.$$scope={dirty:O,ctx:o}),t.$set(E);const y={};O&2&&(y.$$scope={dirty:O,ctx:o}),s.$set(y)},i(o){p||(w(t.$$.fragment,o),w(s.$$.fragment,o),p=!0)},o(o){v(t.$$.fragment,o),v(s.$$.fragment,o),p=!1},d(o){o&&m($),b(t,o),o&&m(f),b(s,o),o&&m(n)}}}function Ge(a){let $,t,f;return{c(){$=u("Assignment. "),t=F("code"),f=u("count = 10;")},l(s){$=_(s,"Assignment. "),t=P(s,"CODE",{});var n=z(t);f=_(n,"count = 10;"),n.forEach(m)},m(s,n){l(s,$,n),l(s,t,n),Z(t,f)},p:ue,d(s){s&&m($),s&&m(t)}}}function Ne(a){let $,t,f;return{c(){$=u("Update statements. "),t=F("code"),f=u("count++;")},l(s){$=_(s,"Update statements. "),t=P(s,"CODE",{});var n=z(t);f=_(n,"count++;"),n.forEach(m)},m(s,n){l(s,$,n),l(s,t,n),Z(t,f)},p:ue,d(s){s&&m($),s&&m(t)}}}function Qe(a){let $,t,f;return{c(){$=u("Updating/assigning a property. "),t=F("code"),f=u("obj.count++;")},l(s){$=_(s,"Updating/assigning a property. "),t=P(s,"CODE",{});var n=z(t);f=_(n,"obj.count++;"),n.forEach(m)},m(s,n){l(s,$,n),l(s,t,n),Z(t,f)},p:ue,d(s){s&&m($),s&&m(t)}}}function Ve(a){let $;return{c(){$=u("not")},l(t){$=_(t,"not")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function Xe(a){let $,t,f,s;return t=new B({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){$=u("Here are some of the things that will "),i(t.$$.fragment),f=u(" trigger reactivity.")},l(n){$=_(n,"Here are some of the things that will "),c(t.$$.fragment,n),f=_(n," trigger reactivity.")},m(n,p){l(n,$,p),g(t,n,p),l(n,f,p),s=!0},p(n,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:n}),t.$set(o)},i(n){s||(w(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&m($),b(t,n),n&&m(f)}}}function Ye(a){let $;return{c(){$=u("Don't do this")},l(t){$=_(t,"Don't do this")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function he(a){let $;return{c(){$=u("Indirect object references")},l(t){$=_(t,"Indirect object references")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function et(a){let $;return{c(){$=u("Array methods")},l(t){$=_(t,"Array methods")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function tt(a){let $;return{c(){$=u("Instead: spread syntax")},l(t){$=_(t,"Instead: spread syntax")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function $t(a){let $;return{c(){$=u("spread syntax")},l(t){$=_(t,"spread syntax")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function nt(a){let $,t,f,s;return t=new B({props:{$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){$=u("Instead of using array methods we can use "),i(t.$$.fragment),f=u(".")},l(n){$=_(n,"Instead of using array methods we can use "),c(t.$$.fragment,n),f=_(n,".")},m(n,p){l(n,$,p),g(t,n,p),l(n,f,p),s=!0},p(n,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:n}),t.$set(o)},i(n){s||(w(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&m($),b(t,n),n&&m(f)}}}function st(a){let $;return{c(){$=u("array = array;")},l(t){$=_(t,"array = array;")},m(t,f){l(t,$,f)},d(t){t&&m($)}}}function ft(a){let $,t,f,s;return t=new B({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),{c(){$=u("Or, we can just do "),i(t.$$.fragment),f=u(". It is a bit ugly but it works!")},l(n){$=_(n,"Or, we can just do "),c(t.$$.fragment,n),f=_(n,". It is a bit ugly but it works!")},m(n,p){l(n,$,p),g(t,n,p),l(n,f,p),s=!0},p(n,p){const o={};p&2&&(o.$$scope={dirty:p,ctx:n}),t.$set(o)},i(n){s||(w(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){n&&m($),b(t,n),n&&m(f)}}}function ot(a){let $,t,f,s,n,p,o,O,E,y,le,C,ae,I,V,H,X,D,Y,A,h,J,S,ee,U,te,R,k,$e,T,ne,L,se,M,fe,W,oe,x,re,q,me;return $=new K({props:{$$slots:{default:[Pe]},$$scope:{ctx:a}}}),f=new K({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),n=new He({}),o=new K({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}}),y=new Q({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),C=new Q({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),I=new Q({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),H=new Ue({}),D=new K({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),A=new Ie({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),S=new Q({props:{$$slots:{default:[he]},$$scope:{ctx:a}}}),U=new Re({}),k=new Q({props:{$$slots:{default:[et]},$$scope:{ctx:a}}}),T=new Te({}),L=new Ie({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),M=new K({props:{$$slots:{default:[nt]},$$scope:{ctx:a}}}),W=new We({}),x=new K({props:{$$slots:{default:[ft]},$$scope:{ctx:a}}}),q=new qe({}),{c(){i($.$$.fragment),t=d(),i(f.$$.fragment),s=d(),i(n.$$.fragment),p=d(),i(o.$$.fragment),O=d(),E=F("ol"),i(y.$$.fragment),le=d(),i(C.$$.fragment),ae=d(),i(I.$$.fragment),V=d(),i(H.$$.fragment),X=d(),i(D.$$.fragment),Y=d(),i(A.$$.fragment),h=d(),J=F("ol"),i(S.$$.fragment),ee=d(),i(U.$$.fragment),te=d(),R=F("ol"),i(k.$$.fragment),$e=d(),i(T.$$.fragment),ne=d(),i(L.$$.fragment),se=d(),i(M.$$.fragment),fe=d(),i(W.$$.fragment),oe=d(),i(x.$$.fragment),re=d(),i(q.$$.fragment),this.h()},l(e){c($.$$.fragment,e),t=j(e),c(f.$$.fragment,e),s=j(e),c(n.$$.fragment,e),p=j(e),c(o.$$.fragment,e),O=j(e),E=P(e,"OL",{});var r=z(E);c(y.$$.fragment,r),le=j(r),c(C.$$.fragment,r),ae=j(r),c(I.$$.fragment,r),r.forEach(m),V=j(e),c(H.$$.fragment,e),X=j(e),c(D.$$.fragment,e),Y=j(e),c(A.$$.fragment,e),h=j(e),J=P(e,"OL",{});var G=z(J);c(S.$$.fragment,G),G.forEach(m),ee=j(e),c(U.$$.fragment,e),te=j(e),R=P(e,"OL",{start:!0});var N=z(R);c(k.$$.fragment,N),N.forEach(m),$e=j(e),c(T.$$.fragment,e),ne=j(e),c(L.$$.fragment,e),se=j(e),c(M.$$.fragment,e),fe=j(e),c(W.$$.fragment,e),oe=j(e),c(x.$$.fragment,e),re=j(e),c(q.$$.fragment,e),this.h()},h(){Me(R,"start","2")},m(e,r){g($,e,r),l(e,t,r),g(f,e,r),l(e,s,r),g(n,e,r),l(e,p,r),g(o,e,r),l(e,O,r),l(e,E,r),g(y,E,null),Z(E,le),g(C,E,null),Z(E,ae),g(I,E,null),l(e,V,r),g(H,e,r),l(e,X,r),g(D,e,r),l(e,Y,r),g(A,e,r),l(e,h,r),l(e,J,r),g(S,J,null),l(e,ee,r),g(U,e,r),l(e,te,r),l(e,R,r),g(k,R,null),l(e,$e,r),g(T,e,r),l(e,ne,r),g(L,e,r),l(e,se,r),g(M,e,r),l(e,fe,r),g(W,e,r),l(e,oe,r),g(x,e,r),l(e,re,r),g(q,e,r),me=!0},p(e,r){const G={};r&2&&(G.$$scope={dirty:r,ctx:e}),$.$set(G);const N={};r&2&&(N.$$scope={dirty:r,ctx:e}),f.$set(N);const _e={};r&2&&(_e.$$scope={dirty:r,ctx:e}),o.$set(_e);const ie={};r&2&&(ie.$$scope={dirty:r,ctx:e}),y.$set(ie);const ce={};r&2&&(ce.$$scope={dirty:r,ctx:e}),C.$set(ce);const ge={};r&2&&(ge.$$scope={dirty:r,ctx:e}),I.$set(ge);const we={};r&2&&(we.$$scope={dirty:r,ctx:e}),D.$set(we);const ve={};r&2&&(ve.$$scope={dirty:r,ctx:e}),A.$set(ve);const be={};r&2&&(be.$$scope={dirty:r,ctx:e}),S.$set(be);const Oe={};r&2&&(Oe.$$scope={dirty:r,ctx:e}),k.$set(Oe);const de={};r&2&&(de.$$scope={dirty:r,ctx:e}),L.$set(de);const je={};r&2&&(je.$$scope={dirty:r,ctx:e}),M.$set(je);const Ee={};r&2&&(Ee.$$scope={dirty:r,ctx:e}),x.$set(Ee)},i(e){me||(w($.$$.fragment,e),w(f.$$.fragment,e),w(n.$$.fragment,e),w(o.$$.fragment,e),w(y.$$.fragment,e),w(C.$$.fragment,e),w(I.$$.fragment,e),w(H.$$.fragment,e),w(D.$$.fragment,e),w(A.$$.fragment,e),w(S.$$.fragment,e),w(U.$$.fragment,e),w(k.$$.fragment,e),w(T.$$.fragment,e),w(L.$$.fragment,e),w(M.$$.fragment,e),w(W.$$.fragment,e),w(x.$$.fragment,e),w(q.$$.fragment,e),me=!0)},o(e){v($.$$.fragment,e),v(f.$$.fragment,e),v(n.$$.fragment,e),v(o.$$.fragment,e),v(y.$$.fragment,e),v(C.$$.fragment,e),v(I.$$.fragment,e),v(H.$$.fragment,e),v(D.$$.fragment,e),v(A.$$.fragment,e),v(S.$$.fragment,e),v(U.$$.fragment,e),v(k.$$.fragment,e),v(T.$$.fragment,e),v(L.$$.fragment,e),v(M.$$.fragment,e),v(W.$$.fragment,e),v(x.$$.fragment,e),v(q.$$.fragment,e),me=!1},d(e){b($,e),e&&m(t),b(f,e),e&&m(s),b(n,e),e&&m(p),b(o,e),e&&m(O),e&&m(E),b(y),b(C),b(I),e&&m(V),b(H,e),e&&m(X),b(D,e),e&&m(Y),b(A,e),e&&m(h),e&&m(J),b(S),e&&m(ee),b(U,e),e&&m(te),e&&m(R),b(k),e&&m($e),b(T,e),e&&m(ne),b(L,e),e&&m(se),b(M,e),e&&m(fe),b(W,e),e&&m(oe),b(x,e),e&&m(re),b(q,e)}}}function rt(a){let $,t;const f=[a[0],De];let s={$$slots:{default:[ot]},$$scope:{ctx:a}};for(let n=0;n<f.length;n+=1)s=pe(s,f[n]);return $=new xe({props:s}),{c(){i($.$$.fragment)},l(n){c($.$$.fragment,n)},m(n,p){g($,n,p),t=!0},p(n,[p]){const o=p&1?Le(f,[p&1&&ye(n[0]),p&0&&ye(De)]):{};p&2&&(o.$$scope={dirty:p,ctx:n}),$.$set(o)},i(n){t||(w($.$$.fragment,n),t=!0)},o(n){v($.$$.fragment,n),t=!1},d(n){b($,n)}}}const De={title:"Reactivity in Svelte",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-02T00:00:00.000Z",layout:"notes"};function mt(a,$,t){return a.$$set=f=>{t(0,$=pe(pe({},$),Ce(f)))},$=Ce($),[$]}class Ot extends Ae{constructor($){super(),Se(this,$,mt,rt,ke,{})}}export{Ot as default,De as metadata};
