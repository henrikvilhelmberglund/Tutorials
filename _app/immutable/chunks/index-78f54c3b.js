function k(){}const gt=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function rt(t){return t()}function Z(){return Object.create(null)}function H(t){t.forEach(rt)}function F(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Xt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(wt(e,n))}function Zt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,c){if(s){const r=ct(e,n,i,c);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t){const e={};for(const n in t)e[n]=!0;return e}function re(t,e,n){return t.set(n),e}function ce(t){return t&&F(t.destroy)?t.destroy:k}const ot=typeof window<"u";let vt=ot?()=>window.performance.now():()=>Date.now(),K=ot?t=>requestAnimationFrame(t):k;const T=new Set;function lt(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&K(lt)}function kt(t){let e;return T.size===0&&K(lt),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let G=!1;function Et(){G=!0}function Nt(){G=!1}function At(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:At(1,s,f=>e[n[f]].claim_order,l))-1;i[o]=n[_]+1;const u=_+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const _=l<c.length?c[l]:null;t.insertBefore(r[o],_)}}function St(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=Q("style");return jt(at(t),e),e.sheet}function jt(t,e){return St(t.head||t,e),e.sheet}function Mt(t,e){if(G){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){G&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Q(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function le(){return V(" ")}function ae(){return V("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function fe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _e(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function de(t){return function(e){e.target===this&&t.call(this,e)}}function he(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function Lt(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,s=!1){ft(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function dt(t,e,n,i){return _t(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function pe(t,e,n){return dt(t,e,n,Q)}function ye(t,e,n){return dt(t,e,n,ut)}function Pt(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function ge(t){return Pt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);ft(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(c,e)}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xe(t,e){t.value=e??""}function we(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ve(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ke(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ne(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Rt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=Q(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class et extends Rt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function Ae(t,e){return new t(e)}const O=new Map;let B=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Ct(e),rules:{}};return O.set(t,n),n}function Bt(t,e,n,i,s,c,r,a=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);l+=p*100+`%{${r(g,1-g)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(_)}_${a}`,f=at(t),{stylesheet:h,rules:m}=O.get(f)||Ot(f,t);m[u]||(m[u]=!0,h.insertRule(`@keyframes ${u} ${_}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${i}ms linear ${s}ms 1 both`,B+=1,u}function nt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||zt())}function zt(){K(()=>{B||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),O.clear())})}let D;function x(t){D=t}function w(){if(!D)throw new Error("Function called outside component initialization");return D}function Te(t){w().$$.before_update.push(t)}function Se(t){w().$$.on_mount.push(t)}function Ce(t){w().$$.after_update.push(t)}function je(t){w().$$.on_destroy.push(t)}function Me(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function De(t,e){return w().$$.context.set(t,e),e}function He(t){return w().$$.context.get(t)}function Le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],it=[],R=[],W=[],mt=Promise.resolve();let J=!1;function pt(){J||(J=!0,mt.then(X))}function Pe(){return pt(),mt}function z(t){R.push(t)}function Re(t){W.push(t)}const U=new Set;let N=0;function X(){if(N!==0)return;const t=D;do{try{for(;N<A.length;){const e=A[N];N++,x(e),Ft(e.$$)}}catch(e){throw A.length=0,N=0,e}for(x(null),A.length=0,N=0;it.length;)it.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];U.has(n)||(U.add(n),n())}R.length=0}while(A.length);for(;W.length;)W.pop()();J=!1,U.clear(),x(t)}function Ft(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let j;function Gt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function st(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function It(){v={r:0,c:[],p:v}}function Ut(){v.r||H(v.c),v=v.p}function Y(t,e){t&&t.i&&(q.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Wt={duration:0};function qe(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,a,o=0;function l(){r&&nt(t,r)}function _(){const{delay:f=0,duration:h=300,easing:m=gt,tick:y=k,css:p}=s||Wt;p&&(r=Bt(t,0,1,h,f,m,p,o++)),y(0,1);const g=vt()+f,S=g+h;a&&a.abort(),c=!0,z(()=>st(t,!0,"start")),a=kt(E=>{if(c){if(E>=S)return y(1,0),st(t,!0,"end"),l(),c=!1;if(E>=g){const C=m((E-g)/h);y(C,1-C)}}return c})}let u=!1;return{start(){u||(u=!0,nt(t),F(s)?(s=s(i),Gt().then(_)):_())},invalidate(){u=!1},end(){c&&(l(),c=!1)}}}function Oe(t,e){const n=e.token={};function i(s,c,r,a){if(e.token!==n)return;e.resolved=a;let o=e.ctx;r!==void 0&&(o=o.slice(),o[r]=a);const l=s&&(e.current=s)(o);let _=!1;e.block&&(e.blocks?e.blocks.forEach((u,f)=>{f!==c&&u&&(It(),yt(u,1,1,()=>{e.blocks[f]===u&&(e.blocks[f]=null)}),Ut())}):e.block.d(1),l.c(),Y(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[c]=l),_&&X()}if(bt(t)){const s=w();if(t.then(c=>{x(s),i(e.then,1,e.value,c),x(null)},c=>{if(x(s),i(e.catch,2,e.error,c),x(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Be(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function ze(t,e){yt(t,1,1,()=>{e.delete(t.key)})}function Fe(t,e,n,i,s,c,r,a,o,l,_,u){let f=t.length,h=c.length,m=f;const y={};for(;m--;)y[t[m].key]=m;const p=[],g=new Map,S=new Map;for(m=h;m--;){const d=u(s,c,m),$=n(d);let b=r.get($);b?i&&b.p(d,e):(b=l($,d),b.c()),g.set($,p[m]=b),$ in y&&S.set($,Math.abs(m-y[$]))}const E=new Set,C=new Set;function I(d){Y(d,1),d.m(a,_),r.set(d.key,d),_=d.first,h--}for(;f&&h;){const d=p[h-1],$=t[f-1],b=d.key,L=$.key;d===$?(_=d.first,f--,h--):g.has(L)?!r.has(b)||E.has(b)?I(d):C.has(L)?f--:S.get(b)>S.get(L)?(C.add(b),I(d)):(E.add(L),f--):(o($,r),f--)}for(;f--;){const d=t[f];g.has(d.key)||o(d,r)}for(;h;)I(p[h-1]);return p}function Ge(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],a=e[c];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[c]=a}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ie(t){return typeof t=="object"&&t!==null?t:{}}function Ue(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function We(t){t&&t.c()}function Je(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(rt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):H(r),t.$$.on_mount=[]}),c.forEach(z)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(A.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ke(t,e,n,i,s,c,r,a=[-1]){const o=D;x(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Z(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(u,f,...h)=>{const m=h.length?h[0]:f;return l.ctx&&s(l.ctx[u],l.ctx[u]=m)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](m),_&&Qt(t,u)),f}):[],l.update(),_=!0,H(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Et();const u=Lt(e.target);l.fragment&&l.fragment.l(u),u.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),Nt(),X()}x(o)}class Qe{$destroy(){Kt(this,1),this.$destroy=k}$on(e,n){if(!F(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xe as $,Pe as A,k as B,Zt as C,Mt as D,ee as E,ne as F,te as G,Yt as H,oe as I,$t as J,Ge as K,Ie as L,ie as M,ue as N,et as O,$e as P,H as Q,Ne as R,Qe as S,Xt as T,fe as U,_e as V,de as W,Me as X,Le as Y,Ee as Z,se as _,le as a,it as a0,Ue as a1,Re as a2,me as a3,X as a4,je as a5,Te as a6,ce as a7,ut as a8,ye as a9,z as aa,qe as ab,Oe as ac,Be as ad,Fe as ae,ze as af,gt as ag,ve as ah,ke as ai,He as aj,De as ak,re as al,Ht as b,ge as c,Ut as d,ae as e,Y as f,It as g,M as h,Ke as i,Ce as j,Q as k,pe as l,Lt as m,he as n,Se as o,we as p,V as q,Pt as r,Vt as s,yt as t,be as u,Ae as v,We as w,Je as x,Jt as y,Kt as z};
