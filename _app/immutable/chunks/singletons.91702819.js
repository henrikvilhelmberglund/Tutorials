import{w as u}from"./index.646636c1.js";import{a as _}from"./paths.8759911f.js";const g="1682281789180",w="sveltekit:snapshot",k="sveltekit:scroll",A="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function R(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:r}}function T(e){let t=null,n=null,r=null,o=null,a=e;for(;a&&a!==document.documentElement;)n===null&&(n=l(a,"preload-code")),r===null&&(r=l(a,"preload-data")),t===null&&(t=l(a,"noscroll")),o===null&&(o=l(a,"reload")),a=h(a);return{preload_code:d[n??"off"],preload_data:d[r??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function p(e){const t=u(e);let n=!0;function r(){n=!0,t.update(s=>s)}function o(s){n=!1,t.set(s)}function a(s){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&s(i=c)})}return{notify:r,set:o,subscribe:a}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function r(){clearTimeout(n);const o=await fetch(`${_}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const s=(await o.json()).version!==g;return s&&(e(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:r}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function x(e){e.client}const O={url:p({}),page:p({}),navigating:u(null),updated:b()};export{A as I,f as P,k as S,w as a,y as b,T as c,I as d,x as e,S as f,R as g,v as i,O as s};
