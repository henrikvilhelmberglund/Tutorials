import{S as ft,i as ut,s as ct,K as Ve,y as u,z as c,A as g,L as gt,M as at,g as p,d as m,B as d,N as rt,a as w,k as pe,c as v,l as me,m as de,h as $,n as _e,b as i,D as T,q as _,r as h}from"./index.0b5cc0d7.js";import{M as pt,H as mt,A as $t,P as ae}from"./mdsvex-layout-notes.c527e9b3.js";import{H as dt}from"./H1.e01caebe.js";import{H as _t}from"./H4.59d3a94e.js";import{H as Oe}from"./H3.ad69a22c.js";import{L as j}from"./Li.ecd818f1.js";import{U as ht}from"./Ul.4059dc64.js";function wt(a){let t;return{c(){t=_("Viewing (and debugging) a Live Server project using the Edge Devtools extension")},l(e){t=h(e,"Viewing (and debugging) a Live Server project using the Edge Devtools extension")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function vt(a){let t;return{c(){t=_("(Note: Slightly janky)")},l(e){t=h(e,"(Note: Slightly janky)")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function bt(a){let t;return{c(){t=_("Purpose: to view (or debug) a Live Server project in an embedded Edge browser in VSCode itself with console, elements and so on also visible")},l(e){t=h(e,"Purpose: to view (or debug) a Live Server project in an embedded Edge browser in VSCode itself with console, elements and so on also visible")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function yt(a){let t;return{c(){t=_("Viewing")},l(e){t=h(e,"Viewing")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function St(a){let t;return{c(){t=_("If you don't already have Live Server, in extensions in the left side panel search for Live Server and install it.")},l(e){t=h(e,"If you don't already have Live Server, in extensions in the left side panel search for Live Server and install it.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function jt(a){let t;return{c(){t=_("https://www.microsoftedgeinsider.com/en-us/download")},l(e){t=h(e,"https://www.microsoftedgeinsider.com/en-us/download")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function kt(a){let t,e,n,l;return e=new $t({props:{href:"https://www.microsoftedgeinsider.com/en-us/download",rel:"nofollow",$$slots:{default:[jt]},$$scope:{ctx:a}}}),{c(){t=_("If you don't have Edge (Dev version), go to "),u(e.$$.fragment),n=_(" to download it .")},l(r){t=h(r,"If you don't have Edge (Dev version), go to "),c(e.$$.fragment,r),n=h(r," to download it .")},m(r,S){i(r,t,S),g(e,r,S),i(r,n,S),l=!0},p(r,S){const k={};S&2&&(k.$$scope={dirty:S,ctx:r}),e.$set(k)},i(r){l||(p(e.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),l=!1},d(r){r&&$(t),d(e,r),r&&$(n)}}}function Lt(a){let t;return{c(){t=_("In extensions in the left side panel search for Edge Devtools and install it.")},l(e){t=h(e,"In extensions in the left side panel search for Edge Devtools and install it.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Dt(a){let t;return{c(){t=_("Now we need a launch.json for the project, click the Microsoft Edge Tools icon in the left side panel and in your code folder (workspace) click Generate launch.json.")},l(e){t=h(e,"Now we need a launch.json for the project, click the Microsoft Edge Tools icon in the left side panel and in your code folder (workspace) click Generate launch.json.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Tt(a){let t;return{c(){t=_("Some entries will be added to the launch.json file but we need one more for starting Edge Devtools without debugging.")},l(e){t=h(e,"Some entries will be added to the launch.json file but we need one more for starting Edge Devtools without debugging.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Et(a){let t;return{c(){t=_("Open Run and Debug in the left side panel and click the Open launch.json icon.")},l(e){t=h(e,"Open Run and Debug in the left side panel and click the Open launch.json icon.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function qt(a){let t;return{c(){t=_("In there paste the following at the top inside of configurations.")},l(e){t=h(e,"In there paste the following at the top inside of configurations.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function It(a){let t;return{c(){t=_("This command will launch the Edge Devtools as an embedded browser along with developer tools but without debugging functionality. This is useful for just viewing your web project as you're building it.")},l(e){t=h(e,"This command will launch the Edge Devtools as an embedded browser along with developer tools but without debugging functionality. This is useful for just viewing your web project as you're building it.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Ot(a){let t;return{c(){t=_("Go to Keyboard Shortcuts and a shortcut key for Debug: Start Debugging and make sure Open App (Headless) is selected in the dropdown. This isn't really headless anymore by the way so you can change the name if you want to.")},l(e){t=h(e,"Go to Keyboard Shortcuts and a shortcut key for Debug: Start Debugging and make sure Open App (Headless) is selected in the dropdown. This isn't really headless anymore by the way so you can change the name if you want to.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Vt(a){let t;return{c(){t=_("To make the Live Server experience even better when using Edge Devtools, go to Settings and search for auto save, change Auto Save to afterDelay and the Auto Save Delay to 400ms.")},l(e){t=h(e,"To make the Live Server experience even better when using Edge Devtools, go to Settings and search for auto save, change Auto Save to afterDelay and the Auto Save Delay to 400ms.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Ht(a){let t;return{c(){t=_("Next search for live server delay and change Live Server Wait to 410ms. By doing this your unsaved files will auto save after 400ms after changes are made and Live Server will automatically reload the page after 410ms. This means you can see your changes as you are coding.")},l(e){t=h(e,"Next search for live server delay and change Live Server Wait to 410ms. By doing this your unsaved files will auto save after 400ms after changes are made and Live Server will automatically reload the page after 410ms. This means you can see your changes as you are coding.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function At(a){let t;return{c(){t=_("Success! (for viewing, just press the shortcut key)")},l(e){t=h(e,"Success! (for viewing, just press the shortcut key)")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Mt(a){let t;return{c(){t=_("Debugging")},l(e){t=h(e,"Debugging")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Nt(a){let t;return{c(){t=_("Start with Viewing if you didn't do it yet to set up the basics.")},l(e){t=h(e,"Start with Viewing if you didn't do it yet to set up the basics.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Gt(a){let t;return{c(){t=_("Open an .html file in your project and then Go Live to start the Live Server if it wasn't started yet.")},l(e){t=h(e,"Open an .html file in your project and then Go Live to start the Live Server if it wasn't started yet.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Pt(a){let t;return{c(){t=_("Click the Microsoft Edge Tools icon in the left side panel and then Launch Project. If it says Launch Instance you may need to open your project as a folder.")},l(e){t=h(e,"Click the Microsoft Edge Tools icon in the left side panel and then Launch Project. If it says Launch Instance you may need to open your project as a folder.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Wt(a){let t;return{c(){t=_("https://code.visualstudio.com/docs/editor/debugging")},l(e){t=h(e,"https://code.visualstudio.com/docs/editor/debugging")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Ct(a){let t,e,n;return e=new $t({props:{href:"https://code.visualstudio.com/docs/editor/debugging",rel:"nofollow",$$slots:{default:[Wt]},$$scope:{ctx:a}}}),{c(){t=_(`This should start debugging for your project (you can see a small bar with different buttons).
For more information on debugging itself see `),u(e.$$.fragment)},l(l){t=h(l,`This should start debugging for your project (you can see a small bar with different buttons).
For more information on debugging itself see `),c(e.$$.fragment,l)},m(l,r){i(l,t,r),g(e,l,r),n=!0},p(l,r){const S={};r&2&&(S.$$scope={dirty:r,ctx:l}),e.$set(S)},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){m(e.$$.fragment,l),n=!1},d(l){l&&$(t),d(e,l)}}}function Kt(a){let t;return{c(){t=_("To open the console at the bottom of the DevTools window (if it's not there), press escape.")},l(e){t=h(e,"To open the console at the bottom of the DevTools window (if it's not there), press escape.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Rt(a){let t;return{c(){t=_("When you are done debugging click the red button and Edge Devtools will close. This is the janky part.")},l(e){t=h(e,"When you are done debugging click the red button and Edge Devtools will close. This is the janky part.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Bt(a){let t;return{c(){t=_("To get back Edge Devtools for viewing the project without debugging press your shortcut key for Debug: Start Debugging.")},l(e){t=h(e,"To get back Edge Devtools for viewing the project without debugging press your shortcut key for Debug: Start Debugging.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Ft(a){let t;return{c(){t=_("To add a shortcut key for debugging in Keyboard Shortcuts add a key for Microsoft Edge Tools: Launch project.")},l(e){t=h(e,"To add a shortcut key for debugging in Keyboard Shortcuts add a key for Microsoft Edge Tools: Launch project.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Ut(a){let t;return{c(){t=_("Success!")},l(e){t=h(e,"Success!")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function zt(a){let t;return{c(){t=_("Logpoints")},l(e){t=h(e,"Logpoints")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Zt(a){let t;return{c(){t=_("When debugging is active you can add logpoints by right clicking left of the line numbers to the left and clicking Add Logpoint.")},l(e){t=h(e,"When debugging is active you can add logpoints by right clicking left of the line numbers to the left and clicking Add Logpoint.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Jt(a){let t,e;return t=new ae({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,l){g(t,n,l),e=!0},p(n,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}function Qt(a){let t;return{c(){t=_("It is important to note that these will need to be on a line below the variable definition if you want to log its value (or you will just get back undefined).")},l(e){t=h(e,"It is important to note that these will need to be on a line below the variable definition if you want to log its value (or you will just get back undefined).")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function Xt(a){let t,e;return t=new ae({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,l){g(t,n,l),e=!0},p(n,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}function Yt(a){let t;return{c(){t=_("To get the value of a variable or any expression just surround it with curly braces, so if we had a variable myVariable it would be myVariable inside curly braces.")},l(e){t=h(e,"To get the value of a variable or any expression just surround it with curly braces, so if we had a variable myVariable it would be myVariable inside curly braces.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function xt(a){let t,e;return t=new ae({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,l){g(t,n,l),e=!0},p(n,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}function en(a){let t;return{c(){t=_("One of the powerful features of logpoints is that it doesn't trigger a file save so you can keep your website state (without it refreshing your Live Server page) but it is still possible to add and edit all the logpoints.")},l(e){t=h(e,"One of the powerful features of logpoints is that it doesn't trigger a file save so you can keep your website state (without it refreshing your Live Server page) but it is still possible to add and edit all the logpoints.")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function tn(a){let t,e;return t=new ae({props:{$$slots:{default:[en]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,l){g(t,n,l),e=!0},p(n,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}function nn(a){let t;return{c(){t=_("So, instead of throwing console.log() everywhere and adding/changing our inputs in the site every time we want to see something in the console we can just have debugging running, add a logpoint anywhere in our code or even change our existing logpoints to log what we want without disrupting website/app state for easier debugging. Try it out!")},l(e){t=h(e,"So, instead of throwing console.log() everywhere and adding/changing our inputs in the site every time we want to see something in the console we can just have debugging running, add a logpoint anywhere in our code or even change our existing logpoints to log what we want without disrupting website/app state for easier debugging. Try it out!")},m(e,n){i(e,t,n)},d(e){e&&$(t)}}}function on(a){let t,e;return t=new ae({props:{$$slots:{default:[nn]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment)},l(n){c(t.$$.fragment,n)},m(n,l){g(t,n,l),e=!0},p(n,l){const r={};l&2&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||(p(t.$$.fragment,n),e=!0)},o(n){m(t.$$.fragment,n),e=!1},d(n){d(t,n)}}}function sn(a){let t,e,n,l,r,S,k,H,y,q;return t=new j({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),n=new j({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),r=new j({props:{$$slots:{default:[xt]},$$scope:{ctx:a}}}),k=new j({props:{$$slots:{default:[tn]},$$scope:{ctx:a}}}),y=new j({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment),e=w(),u(n.$$.fragment),l=w(),u(r.$$.fragment),S=w(),u(k.$$.fragment),H=w(),u(y.$$.fragment)},l(f){c(t.$$.fragment,f),e=v(f),c(n.$$.fragment,f),l=v(f),c(r.$$.fragment,f),S=v(f),c(k.$$.fragment,f),H=v(f),c(y.$$.fragment,f)},m(f,b){g(t,f,b),i(f,e,b),g(n,f,b),i(f,l,b),g(r,f,b),i(f,S,b),g(k,f,b),i(f,H,b),g(y,f,b),q=!0},p(f,b){const ne={};b&2&&(ne.$$scope={dirty:b,ctx:f}),t.$set(ne);const O={};b&2&&(O.$$scope={dirty:b,ctx:f}),n.$set(O);const oe={};b&2&&(oe.$$scope={dirty:b,ctx:f}),r.$set(oe);const V={};b&2&&(V.$$scope={dirty:b,ctx:f}),k.$set(V);const se={};b&2&&(se.$$scope={dirty:b,ctx:f}),y.$set(se)},i(f){q||(p(t.$$.fragment,f),p(n.$$.fragment,f),p(r.$$.fragment,f),p(k.$$.fragment,f),p(y.$$.fragment,f),q=!0)},o(f){m(t.$$.fragment,f),m(n.$$.fragment,f),m(r.$$.fragment,f),m(k.$$.fragment,f),m(y.$$.fragment,f),q=!1},d(f){d(t,f),f&&$(e),d(n,f),f&&$(l),d(r,f),f&&$(S),d(k,f),f&&$(H),d(y,f)}}}function an(a){let t,e,n,l,r,S,k,H,y,q,f,b,ne,O,oe,V,se,A,he,M,we,N,re,te,it=`<code class="language-undefined">&#123;
        &quot;name&quot;: &quot;Open App (Headless)&quot;,
        &quot;request&quot;: &quot;launch&quot;,
        &quot;type&quot;: &quot;vscode-edge-devtools.debug&quot;,
        &quot;url&quot;: &quot;http://localhost:5500&quot;,
        &quot;webRoot&quot;: &quot;$&#123;workspaceFolder&#125;&quot;
      &#125;,</code>`,le,E,G,ve,P,be,W,ye,C,Se,K,$e,R,ie,L,B,je,F,ke,U,Le,z,De,Z,Te,J,Ee,Q,qe,X,Ie,Y,fe,x,ue,ee,ce;return t=new dt({props:{$$slots:{default:[wt]},$$scope:{ctx:a}}}),n=new _t({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),r=new mt({props:{$$slots:{default:[bt]},$$scope:{ctx:a}}}),k=new Oe({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),q=new j({props:{$$slots:{default:[St]},$$scope:{ctx:a}}}),b=new j({props:{$$slots:{default:[kt]},$$scope:{ctx:a}}}),O=new j({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),V=new j({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),A=new j({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}}}),M=new j({props:{$$slots:{default:[Et]},$$scope:{ctx:a}}}),N=new j({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),G=new j({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),P=new j({props:{$$slots:{default:[Ot]},$$scope:{ctx:a}}}),W=new j({props:{$$slots:{default:[Vt]},$$scope:{ctx:a}}}),C=new j({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),K=new j({props:{$$slots:{default:[At]},$$scope:{ctx:a}}}),R=new Oe({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),B=new j({props:{$$slots:{default:[Nt]},$$scope:{ctx:a}}}),F=new j({props:{$$slots:{default:[Gt]},$$scope:{ctx:a}}}),U=new j({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}}),z=new j({props:{$$slots:{default:[Ct]},$$scope:{ctx:a}}}),Z=new j({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),J=new j({props:{$$slots:{default:[Rt]},$$scope:{ctx:a}}}),Q=new j({props:{$$slots:{default:[Bt]},$$scope:{ctx:a}}}),X=new j({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),Y=new j({props:{$$slots:{default:[Ut]},$$scope:{ctx:a}}}),x=new Oe({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),ee=new ht({props:{$$slots:{default:[sn]},$$scope:{ctx:a}}}),{c(){u(t.$$.fragment),e=w(),u(n.$$.fragment),l=w(),u(r.$$.fragment),S=w(),u(k.$$.fragment),H=w(),y=pe("ol"),u(q.$$.fragment),f=w(),u(b.$$.fragment),ne=w(),u(O.$$.fragment),oe=w(),u(V.$$.fragment),se=w(),u(A.$$.fragment),he=w(),u(M.$$.fragment),we=w(),u(N.$$.fragment),re=w(),te=pe("pre"),le=w(),E=pe("ol"),u(G.$$.fragment),ve=w(),u(P.$$.fragment),be=w(),u(W.$$.fragment),ye=w(),u(C.$$.fragment),Se=w(),u(K.$$.fragment),$e=w(),u(R.$$.fragment),ie=w(),L=pe("ol"),u(B.$$.fragment),je=w(),u(F.$$.fragment),ke=w(),u(U.$$.fragment),Le=w(),u(z.$$.fragment),De=w(),u(Z.$$.fragment),Te=w(),u(J.$$.fragment),Ee=w(),u(Q.$$.fragment),qe=w(),u(X.$$.fragment),Ie=w(),u(Y.$$.fragment),fe=w(),u(x.$$.fragment),ue=w(),u(ee.$$.fragment),this.h()},l(o){c(t.$$.fragment,o),e=v(o),c(n.$$.fragment,o),l=v(o),c(r.$$.fragment,o),S=v(o),c(k.$$.fragment,o),H=v(o),y=me(o,"OL",{start:!0});var s=de(y);c(q.$$.fragment,s),f=v(s),c(b.$$.fragment,s),ne=v(s),c(O.$$.fragment,s),oe=v(s),c(V.$$.fragment,s),se=v(s),c(A.$$.fragment,s),he=v(s),c(M.$$.fragment,s),we=v(s),c(N.$$.fragment,s),s.forEach($),re=v(o),te=me(o,"PRE",{class:!0});var ge=de(te);ge.forEach($),le=v(o),E=me(o,"OL",{start:!0});var I=de(E);c(G.$$.fragment,I),ve=v(I),c(P.$$.fragment,I),be=v(I),c(W.$$.fragment,I),ye=v(I),c(C.$$.fragment,I),Se=v(I),c(K.$$.fragment,I),I.forEach($),$e=v(o),c(R.$$.fragment,o),ie=v(o),L=me(o,"OL",{start:!0});var D=de(L);c(B.$$.fragment,D),je=v(D),c(F.$$.fragment,D),ke=v(D),c(U.$$.fragment,D),Le=v(D),c(z.$$.fragment,D),De=v(D),c(Z.$$.fragment,D),Te=v(D),c(J.$$.fragment,D),Ee=v(D),c(Q.$$.fragment,D),qe=v(D),c(X.$$.fragment,D),Ie=v(D),c(Y.$$.fragment,D),D.forEach($),fe=v(o),c(x.$$.fragment,o),ue=v(o),c(ee.$$.fragment,o),this.h()},h(){_e(y,"start","0"),_e(te,"class","language-undefined"),_e(E,"start","7"),_e(L,"start","0")},m(o,s){g(t,o,s),i(o,e,s),g(n,o,s),i(o,l,s),g(r,o,s),i(o,S,s),g(k,o,s),i(o,H,s),i(o,y,s),g(q,y,null),T(y,f),g(b,y,null),T(y,ne),g(O,y,null),T(y,oe),g(V,y,null),T(y,se),g(A,y,null),T(y,he),g(M,y,null),T(y,we),g(N,y,null),i(o,re,s),i(o,te,s),te.innerHTML=it,i(o,le,s),i(o,E,s),g(G,E,null),T(E,ve),g(P,E,null),T(E,be),g(W,E,null),T(E,ye),g(C,E,null),T(E,Se),g(K,E,null),i(o,$e,s),g(R,o,s),i(o,ie,s),i(o,L,s),g(B,L,null),T(L,je),g(F,L,null),T(L,ke),g(U,L,null),T(L,Le),g(z,L,null),T(L,De),g(Z,L,null),T(L,Te),g(J,L,null),T(L,Ee),g(Q,L,null),T(L,qe),g(X,L,null),T(L,Ie),g(Y,L,null),i(o,fe,s),g(x,o,s),i(o,ue,s),g(ee,o,s),ce=!0},p(o,s){const ge={};s&2&&(ge.$$scope={dirty:s,ctx:o}),t.$set(ge);const I={};s&2&&(I.$$scope={dirty:s,ctx:o}),n.$set(I);const D={};s&2&&(D.$$scope={dirty:s,ctx:o}),r.$set(D);const He={};s&2&&(He.$$scope={dirty:s,ctx:o}),k.$set(He);const Ae={};s&2&&(Ae.$$scope={dirty:s,ctx:o}),q.$set(Ae);const Me={};s&2&&(Me.$$scope={dirty:s,ctx:o}),b.$set(Me);const Ne={};s&2&&(Ne.$$scope={dirty:s,ctx:o}),O.$set(Ne);const Ge={};s&2&&(Ge.$$scope={dirty:s,ctx:o}),V.$set(Ge);const Pe={};s&2&&(Pe.$$scope={dirty:s,ctx:o}),A.$set(Pe);const We={};s&2&&(We.$$scope={dirty:s,ctx:o}),M.$set(We);const Ce={};s&2&&(Ce.$$scope={dirty:s,ctx:o}),N.$set(Ce);const Ke={};s&2&&(Ke.$$scope={dirty:s,ctx:o}),G.$set(Ke);const Re={};s&2&&(Re.$$scope={dirty:s,ctx:o}),P.$set(Re);const Be={};s&2&&(Be.$$scope={dirty:s,ctx:o}),W.$set(Be);const Fe={};s&2&&(Fe.$$scope={dirty:s,ctx:o}),C.$set(Fe);const Ue={};s&2&&(Ue.$$scope={dirty:s,ctx:o}),K.$set(Ue);const ze={};s&2&&(ze.$$scope={dirty:s,ctx:o}),R.$set(ze);const Ze={};s&2&&(Ze.$$scope={dirty:s,ctx:o}),B.$set(Ze);const Je={};s&2&&(Je.$$scope={dirty:s,ctx:o}),F.$set(Je);const Qe={};s&2&&(Qe.$$scope={dirty:s,ctx:o}),U.$set(Qe);const Xe={};s&2&&(Xe.$$scope={dirty:s,ctx:o}),z.$set(Xe);const Ye={};s&2&&(Ye.$$scope={dirty:s,ctx:o}),Z.$set(Ye);const xe={};s&2&&(xe.$$scope={dirty:s,ctx:o}),J.$set(xe);const et={};s&2&&(et.$$scope={dirty:s,ctx:o}),Q.$set(et);const tt={};s&2&&(tt.$$scope={dirty:s,ctx:o}),X.$set(tt);const nt={};s&2&&(nt.$$scope={dirty:s,ctx:o}),Y.$set(nt);const ot={};s&2&&(ot.$$scope={dirty:s,ctx:o}),x.$set(ot);const st={};s&2&&(st.$$scope={dirty:s,ctx:o}),ee.$set(st)},i(o){ce||(p(t.$$.fragment,o),p(n.$$.fragment,o),p(r.$$.fragment,o),p(k.$$.fragment,o),p(q.$$.fragment,o),p(b.$$.fragment,o),p(O.$$.fragment,o),p(V.$$.fragment,o),p(A.$$.fragment,o),p(M.$$.fragment,o),p(N.$$.fragment,o),p(G.$$.fragment,o),p(P.$$.fragment,o),p(W.$$.fragment,o),p(C.$$.fragment,o),p(K.$$.fragment,o),p(R.$$.fragment,o),p(B.$$.fragment,o),p(F.$$.fragment,o),p(U.$$.fragment,o),p(z.$$.fragment,o),p(Z.$$.fragment,o),p(J.$$.fragment,o),p(Q.$$.fragment,o),p(X.$$.fragment,o),p(Y.$$.fragment,o),p(x.$$.fragment,o),p(ee.$$.fragment,o),ce=!0)},o(o){m(t.$$.fragment,o),m(n.$$.fragment,o),m(r.$$.fragment,o),m(k.$$.fragment,o),m(q.$$.fragment,o),m(b.$$.fragment,o),m(O.$$.fragment,o),m(V.$$.fragment,o),m(A.$$.fragment,o),m(M.$$.fragment,o),m(N.$$.fragment,o),m(G.$$.fragment,o),m(P.$$.fragment,o),m(W.$$.fragment,o),m(C.$$.fragment,o),m(K.$$.fragment,o),m(R.$$.fragment,o),m(B.$$.fragment,o),m(F.$$.fragment,o),m(U.$$.fragment,o),m(z.$$.fragment,o),m(Z.$$.fragment,o),m(J.$$.fragment,o),m(Q.$$.fragment,o),m(X.$$.fragment,o),m(Y.$$.fragment,o),m(x.$$.fragment,o),m(ee.$$.fragment,o),ce=!1},d(o){d(t,o),o&&$(e),d(n,o),o&&$(l),d(r,o),o&&$(S),d(k,o),o&&$(H),o&&$(y),d(q),d(b),d(O),d(V),d(A),d(M),d(N),o&&$(re),o&&$(te),o&&$(le),o&&$(E),d(G),d(P),d(W),d(C),d(K),o&&$($e),d(R,o),o&&$(ie),o&&$(L),d(B),d(F),d(U),d(z),d(Z),d(J),d(Q),d(X),d(Y),o&&$(fe),d(x,o),o&&$(ue),d(ee,o)}}}function rn(a){let t,e;const n=[a[0],lt];let l={$$slots:{default:[an]},$$scope:{ctx:a}};for(let r=0;r<n.length;r+=1)l=Ve(l,n[r]);return t=new pt({props:l}),{c(){u(t.$$.fragment)},l(r){c(t.$$.fragment,r)},m(r,S){g(t,r,S),e=!0},p(r,[S]){const k=S&1?gt(n,[S&1&&at(r[0]),S&0&&at(lt)]):{};S&2&&(k.$$scope={dirty:S,ctx:r}),t.$set(k)},i(r){e||(p(t.$$.fragment,r),e=!0)},o(r){m(t.$$.fragment,r),e=!1},d(r){d(t,r)}}}const lt={title:"Viewing (and debugging) a Live Server project using the Edge Devtools extension",author:"henrikvilhelmberglund",authorlink:"github.com/henrikvilhelmberglund/",date:"2022-10-05T00:00:00.000Z",layout:"notes"};function ln(a,t,e){return a.$$set=n=>{e(0,t=Ve(Ve({},t),rt(n)))},t=rt(t),[t]}class dn extends ft{constructor(t){super(),ut(this,t,ln,rn,ct,{})}}export{dn as default,lt as metadata};