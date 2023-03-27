import{c as y}from"./index-a40f73eb.js";import{ai as u}from"./index-a6ce3bb5.js";function g(t,{delay:o=0,duration:s=400,easing:c=u}={}){const n=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:c,css:a=>`opacity: ${a*n}`}}function C(t,{delay:o=0,duration:s=400,easing:c=y,start:n=0,opacity:a=0}={}){const r=getComputedStyle(t),e=+r.opacity,f=r.transform==="none"?"":r.transform,m=1-n,p=e*(1-a);return{delay:o,duration:s,easing:c,css:(d,i)=>`
			transform: ${f} scale(${1-m*i});
			opacity: ${e-p*i}
		`}}export{g as f,C as s};
