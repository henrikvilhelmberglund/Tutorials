function v(t,c){const l={},y={},o={$$scope:1};let n=t.length;for(;n--;){const _=t[n],s=c[n];if(s){for(const e in _)e in s||(y[e]=1);for(const e in s)o[e]||(l[e]=s[e],o[e]=1);t[n]=s}else for(const e in _)o[e]=1}for(const _ in y)_ in l||(l[_]=void 0);return l}function a(t){return typeof t=="object"&&t!==null?t:{}}export{a,v as g};
