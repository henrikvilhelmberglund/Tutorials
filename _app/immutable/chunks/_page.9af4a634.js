import{S as G,i as Q,s as V,a5 as W,k as E,q as b,a as S,l as O,m as I,r as g,h as i,c as T,n as M,b as $,D as P,P as N,u as X,H as J,T as Y,a6 as q,J as z,y as d,z as h,A as w,K as ee,L as K,g as k,d as x,B as y,M as R}from"./index.37298988.js";import{M as te,P as C}from"./mdsvex-layout-notes.28d092d4.js";import{S as ne}from"./ShowCode.2a8fd992.js";import{S as D}from"./Strong.b6d58cbc.js";function se(r){let n,t,l,o,e,s,f,v,c,p,a,_,A=(r[0].join(",")||"-")+"",F,L,U,H;return L=W(r[2][0]),{c(){n=E("label"),t=E("input"),l=b("1"),o=S(),e=E("label"),s=E("input"),f=b("2"),v=S(),c=E("label"),p=E("input"),a=b("3"),_=b(`\r
\r
Flavors: `),F=b(A),this.h()},l(u){n=O(u,"LABEL",{});var m=I(n);t=O(m,"INPUT",{type:!0}),l=g(m,"1"),m.forEach(i),o=T(u),e=O(u,"LABEL",{});var j=I(e);s=O(j,"INPUT",{type:!0}),f=g(j,"2"),j.forEach(i),v=T(u),c=O(u,"LABEL",{});var B=I(c);p=O(B,"INPUT",{type:!0}),a=g(B,"3"),B.forEach(i),_=g(u,`\r
\r
Flavors: `),F=g(u,A),this.h()},h(){M(t,"type","checkbox"),t.__value="1",t.value=t.__value,M(s,"type","checkbox"),s.__value="2",s.value=s.__value,M(p,"type","checkbox"),p.__value="3",p.value=p.__value,L.p(t,s,p)},m(u,m){$(u,n,m),P(n,t),t.checked=~(r[0]||[]).indexOf(t.__value),P(n,l),$(u,o,m),$(u,e,m),P(e,s),s.checked=~(r[0]||[]).indexOf(s.__value),P(e,f),$(u,v,m),$(u,c,m),P(c,p),p.checked=~(r[0]||[]).indexOf(p.__value),P(c,a),$(u,_,m),$(u,F,m),U||(H=[N(t,"change",r[1]),N(s,"change",r[3]),N(p,"change",r[4])],U=!0)},p(u,[m]){m&1&&(t.checked=~(u[0]||[]).indexOf(t.__value)),m&1&&(s.checked=~(u[0]||[]).indexOf(s.__value)),m&1&&(p.checked=~(u[0]||[]).indexOf(p.__value)),m&1&&A!==(A=(u[0].join(",")||"-")+"")&&X(F,A)},i:J,o:J,d(u){u&&i(n),u&&i(o),u&&i(e),u&&i(v),u&&i(c),u&&i(_),u&&i(F),L.r(),U=!1,Y(H)}}}function ae(r,n,t){let l=[];const o=[[]];function e(){l=q(o[0],this.__value,this.checked),t(0,l)}function s(){l=q(o[0],this.__value,this.checked),t(0,l)}function f(){l=q(o[0],this.__value,this.checked),t(0,l)}return[l,e,o,s,f]}class le extends G{constructor(n){super(),Q(this,n,ae,se,V,{})}}const oe=`<script>\r
	let flavors = [];\r
<\/script>\r
\r
<label>\r
	<input type="checkbox" bind:group={flavors} value="1" />1\r
</label>\r
<label>\r
	<input type="checkbox" bind:group={flavors} value="2" />2\r
</label>\r
<label>\r
	<input type="checkbox" bind:group={flavors} value="3" />3\r
</label>\r
\r
Flavors: {flavors.join(",") || "-"}\r
\r
<style>\r
</style>\r
`;function re(r){let n;return{c(){n=b("bind:group")},l(t){n=g(t,"bind:group")},m(t,l){$(t,n,l)},d(t){t&&i(n)}}}function ue(r){let n,t,l,o;return t=new D({props:{$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){n=b("For radio buttons or checkboxes you can use the "),d(t.$$.fragment),l=b(" binding.")},l(e){n=g(e,"For radio buttons or checkboxes you can use the "),h(t.$$.fragment,e),l=g(e," binding.")},m(e,s){$(e,n,s),w(t,e,s),$(e,l,s),o=!0},p(e,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){o||(k(t.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),o=!1},d(e){e&&i(n),y(t,e),e&&i(l)}}}function fe(r){let n;return{c(){n=b("group")},l(t){n=g(t,"group")},m(t,l){$(t,n,l)},d(t){t&&i(n)}}}function ie(r){let n,t,l,o;return t=new D({props:{$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){n=b("Using this we can have a two way binding with a "),d(t.$$.fragment),l=b(" of checkboxes or radio buttons.")},l(e){n=g(e,"Using this we can have a two way binding with a "),h(t.$$.fragment,e),l=g(e," of checkboxes or radio buttons.")},m(e,s){$(e,n,s),w(t,e,s),$(e,l,s),o=!0},p(e,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){o||(k(t.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),o=!1},d(e){e&&i(n),y(t,e),e&&i(l)}}}function _e(r){let n;return{c(){n=b("array")},l(t){n=g(t,"array")},m(t,l){$(t,n,l)},d(t){t&&i(n)}}}function $e(r){let n,t,l,o;return t=new D({props:{$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){n=b("For checkboxes we want an "),d(t.$$.fragment),l=b(" to store our values in but for radio buttons we can have a single value.")},l(e){n=g(e,"For checkboxes we want an "),h(t.$$.fragment,e),l=g(e," to store our values in but for radio buttons we can have a single value.")},m(e,s){$(e,n,s),w(t,e,s),$(e,l,s),o=!0},p(e,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){o||(k(t.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),o=!1},d(e){e&&i(n),y(t,e),e&&i(l)}}}function pe(r){let n,t,l,o,e,s,f,v,c,p;return n=new C({props:{$$slots:{default:[ue]},$$scope:{ctx:r}}}),l=new C({props:{$$slots:{default:[ie]},$$scope:{ctx:r}}}),e=new le({}),f=new ne({props:{code:oe,name:"App.svelte"}}),c=new C({props:{$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){d(n.$$.fragment),t=S(),d(l.$$.fragment),o=S(),d(e.$$.fragment),s=S(),d(f.$$.fragment),v=S(),d(c.$$.fragment)},l(a){h(n.$$.fragment,a),t=T(a),h(l.$$.fragment,a),o=T(a),h(e.$$.fragment,a),s=T(a),h(f.$$.fragment,a),v=T(a),h(c.$$.fragment,a)},m(a,_){w(n,a,_),$(a,t,_),w(l,a,_),$(a,o,_),w(e,a,_),$(a,s,_),w(f,a,_),$(a,v,_),w(c,a,_),p=!0},p(a,_){const A={};_&2&&(A.$$scope={dirty:_,ctx:a}),n.$set(A);const F={};_&2&&(F.$$scope={dirty:_,ctx:a}),l.$set(F);const L={};_&2&&(L.$$scope={dirty:_,ctx:a}),c.$set(L)},i(a){p||(k(n.$$.fragment,a),k(l.$$.fragment,a),k(e.$$.fragment,a),k(f.$$.fragment,a),k(c.$$.fragment,a),p=!0)},o(a){x(n.$$.fragment,a),x(l.$$.fragment,a),x(e.$$.fragment,a),x(f.$$.fragment,a),x(c.$$.fragment,a),p=!1},d(a){y(n,a),a&&i(t),y(l,a),a&&i(o),y(e,a),a&&i(s),y(f,a),a&&i(v),y(c,a)}}}function ce(r){let n,t;const l=[r[0],Z];let o={$$slots:{default:[pe]},$$scope:{ctx:r}};for(let e=0;e<l.length;e+=1)o=z(o,l[e]);return n=new te({props:o}),{c(){d(n.$$.fragment)},l(e){h(n.$$.fragment,e)},m(e,s){w(n,e,s),t=!0},p(e,[s]){const f=s&1?ee(l,[s&1&&K(e[0]),s&0&&K(Z)]):{};s&2&&(f.$$scope={dirty:s,ctx:e}),n.$set(f)},i(e){t||(k(n.$$.fragment,e),t=!0)},o(e){x(n.$$.fragment,e),t=!1},d(e){y(n,e)}}}const Z={title:"bind:group",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2023-02-05T00:00:00.000Z",layout:"notes"};function me(r,n,t){return r.$$set=l=>{t(0,n=z(z({},n),R(l)))},n=R(n),[n]}class he extends G{constructor(n){super(),Q(this,n,me,ce,V,{})}}export{he as default,Z as metadata};
