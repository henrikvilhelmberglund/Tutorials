function p(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(q)}function j(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let $;function ht(t,n){return $||($=document.createElement("a")),$.href=n,t===$.href}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return p;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(K(n,e))}function pt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,o){if(r){const s=O(n,e,i,o);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function $t(t){return t&&j(t.destroy)?t.destroy:p}let N=!1;function Q(){N=!0}function V(){N=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:X(1,r,x=>n[e[x]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function Z(t,n){if(N){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){N&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function wt(){return C("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function At(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function kt(t){return function(n){n.target===this&&t.call(this,n)}}function St(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function jt(t,n,e){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return e||i.delete(n),Array.from(i)}function it(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){R(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Ct(t,n,e){return rt(t,n,e,G)}function st(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Ht(t){return st(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Dt(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new P(void 0,n);R(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(o,n)}function Mt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Lt(t,n){t.value=n??""}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Bt(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function qt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class ot{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class P extends ot{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function Ot(t,n){return new t(n)}let y;function m(t){y=t}function b(){if(!y)throw new Error("Function called outside component initialization");return y}function Gt(t){b().$$.before_update.push(t)}function Rt(t){b().$$.on_mount.push(t)}function zt(t){b().$$.after_update.push(t)}function Ft(t){b().$$.on_destroy.push(t)}function Ut(){const t=b();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function Wt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],B=[],v=[],A=[],F=Promise.resolve();let k=!1;function U(){k||(k=!0,F.then(W))}function It(){return U(),F}function S(t){v.push(t)}function Jt(t){A.push(t)}const T=new Set;let d=0;function W(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,m(n),lt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;B.length;)B.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];T.has(e)||(T.add(e),e())}v.length=0}while(h.length);for(;A.length;)A.pop()();k=!1,T.clear(),m(t)}function lt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const E=new Set;let _;function Kt(){_={r:0,c:[],p:_}}function Qt(){_.r||g(_.c),_=_.p}function ut(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Vt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Xt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=n[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Yt(t){return typeof t=="object"&&t!==null?t:{}}function Zt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function tn(t){t&&t.c()}function nn(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const s=t.$$.on_mount.map(q).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(S)}function ft(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function en(t,n,e,i,r,o,s,l=[-1]){const c=y;m(t);const u=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...H)=>{const D=H.length?H[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=D)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](D),f&&_t(t,a)),x}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){Q();const a=it(n.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),V(),W()}m(c)}class rn{$destroy(){ft(this,1),this.$destroy=p}$on(n,e){if(!j(e))return p;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{B as $,It as A,p as B,pt as C,Z as D,gt as E,bt as F,yt as G,mt as H,vt as I,I as J,Xt as K,Yt as L,xt as M,Nt as N,P as O,Dt as P,g as Q,qt as R,rn as S,ht as T,Tt as U,At as V,kt as W,Ut as X,Wt as Y,Bt as Z,Lt as _,Et as a,Zt as a0,Jt as a1,jt as a2,W as a3,Ft as a4,Gt as a5,$t as a6,nt as b,Ht as c,Qt as d,wt as e,ut as f,Kt as g,w as h,en as i,zt as j,G as k,Ct as l,it as m,St as n,Rt as o,Pt as p,C as q,st as r,dt as s,Vt as t,Mt as u,Ot as v,tn as w,nn as x,at as y,ft as z};
