import{ag as y}from"./index-78f54c3b.js";function m(o){const t=o-1;return t*t*t+1}function g(o,{delay:t=0,duration:n=400,easing:s=y}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*c}`}}function $(o,{delay:t=0,duration:n=400,easing:s=m,start:c=0,opacity:r=0}={}){const a=getComputedStyle(o),e=+a.opacity,f=a.transform==="none"?"":a.transform,p=1-c,u=e*(1-r);return{delay:t,duration:n,easing:s,css:(d,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${e-u*i}
		`}}export{g as f,$ as s};
