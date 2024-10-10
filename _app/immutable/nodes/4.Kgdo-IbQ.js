import{f as Z,s as at,h as W,n as X}from"../chunks/scheduler.Va3TKrii.js";import{S as st,i as rt,e as x,m as V,s as y,c as w,a as A,n as z,d as o,f as G,l as C,g as $,o as E,h as j,p as m,q as _,x as K,r as D,t as F,b as N,A as S,k as T,y as Q}from"../chunks/index.CXCissPj.js";import{Navbar as lt,GradientButton as R,NavHamburger as it,NavUl as ot,Card as Y,NavLi as J}from"flowbite-svelte";import"flowbite-svelte-icons";function ft(i){const t=i-1;return t*t*t+1}function U(i,{delay:t=0,duration:e=400,easing:a=ft,x:s=0,y:n=0,opacity:r=0}={}){const f=getComputedStyle(i),v=+f.opacity,l=f.transform==="none"?"":f.transform,c=v*(1-r),[I,k]=Z(s),[H,P]=Z(n);return{delay:t,duration:e,easing:a,css:(q,B)=>`
			transform: ${l} translate(${(1-q)*I}${k}, ${(1-q)*H}${P});
			opacity: ${v-c*B}`}}function ut(i){let t;return{c(){t=F("Home")},l(e){t=N(e,"Home")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function $t(i){let t;return{c(){t=F("Portfolio")},l(e){t=N(e,"Portfolio")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function ct(i){let t;return{c(){t=F("About")},l(e){t=N(e,"About")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function mt(i){let t;return{c(){t=F("Contact")},l(e){t=N(e,"Contact")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function gt(i){let t,e,a,s,n,r,f,v;return t=new J({props:{class:"nav-item",href:"/",active:!0,$$slots:{default:[ut]},$$scope:{ctx:i}}}),a=new J({props:{class:"nav-item",href:"/portfolio",$$slots:{default:[$t]},$$scope:{ctx:i}}}),n=new J({props:{class:"nav-item",href:"/about",$$slots:{default:[ct]},$$scope:{ctx:i}}}),f=new J({props:{class:"nav-item",href:"/contact",$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){V(t.$$.fragment),e=y(),V(a.$$.fragment),s=y(),V(n.$$.fragment),r=y(),V(f.$$.fragment)},l(l){z(t.$$.fragment,l),e=G(l),z(a.$$.fragment,l),s=G(l),z(n.$$.fragment,l),r=G(l),z(f.$$.fragment,l)},m(l,c){E(t,l,c),$(l,e,c),E(a,l,c),$(l,s,c),E(n,l,c),$(l,r,c),E(f,l,c),v=!0},p(l,c){const I={};c&64&&(I.$$scope={dirty:c,ctx:l}),t.$set(I);const k={};c&64&&(k.$$scope={dirty:c,ctx:l}),a.$set(k);const H={};c&64&&(H.$$scope={dirty:c,ctx:l}),n.$set(H);const P={};c&64&&(P.$$scope={dirty:c,ctx:l}),f.$set(P)},i(l){v||(m(t.$$.fragment,l),m(a.$$.fragment,l),m(n.$$.fragment,l),m(f.$$.fragment,l),v=!0)},o(l){_(t.$$.fragment,l),_(a.$$.fragment,l),_(n.$$.fragment,l),_(f.$$.fragment,l),v=!1},d(l){l&&(o(e),o(s),o(r)),D(t,l),D(a,l),D(n,l),D(f,l)}}}function dt(i){let t,e,a,s;return t=new it({}),a=new ot({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){V(t.$$.fragment),e=y(),V(a.$$.fragment)},l(n){z(t.$$.fragment,n),e=G(n),z(a.$$.fragment,n)},m(n,r){E(t,n,r),$(n,e,r),E(a,n,r),s=!0},p(n,r){const f={};r&64&&(f.$$scope={dirty:r,ctx:n}),a.$set(f)},i(n){s||(m(t.$$.fragment,n),m(a.$$.fragment,n),s=!0)},o(n){_(t.$$.fragment,n),_(a.$$.fragment,n),s=!1},d(n){n&&o(e),D(t,n),D(a,n)}}}function pt(i){let t;return{c(){t=F("Facebook")},l(e){t=N(e,"Facebook")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function _t(i){let t;return{c(){t=F("Gmail")},l(e){t=N(e,"Gmail")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function ht(i){let t;return{c(){t=F("Github")},l(e){t=N(e,"Github")},m(e,a){$(e,t,a)},d(e){e&&o(t)}}}function tt(i){let t,e,a,s;return e=new Y({props:{img:"/facebook.png",href:"https://www.facebook.com/jaaqt",target:"_blank",class:"bg-gray-800 text-white",$$slots:{default:[vt]},$$scope:{ctx:i}}}),{c(){t=x("div"),V(e.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var r=A(t);z(e.$$.fragment,r),r.forEach(o),this.h()},h(){C(t,"class","card-container svelte-k8ibzn")},m(n,r){$(n,t,r),E(e,t,null),s=!0},i(n){s||(m(e.$$.fragment,n),n&&W(()=>{s&&(a||(a=S(t,U,{y:-20,duration:300},!0)),a.run(1))}),s=!0)},o(n){_(e.$$.fragment,n),n&&(a||(a=S(t,U,{y:-20,duration:300},!1)),a.run(0)),s=!1},d(n){n&&o(t),D(e),n&&a&&a.end()}}}function vt(i){let t,e="Facebook",a,s,n="Facebook Account";return{c(){t=x("h5"),t.textContent=e,a=y(),s=x("p"),s.textContent=n,this.h()},l(r){t=w(r,"H5",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-xysbzs"&&(t.textContent=e),a=G(r),s=w(r,"P",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-41hkw4"&&(s.textContent=n),this.h()},h(){C(t,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),C(s,"class","mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight")},m(r,f){$(r,t,f),$(r,a,f),$(r,s,f)},p:X,d(r){r&&(o(t),o(a),o(s))}}}function et(i){let t,e,a,s;return e=new Y({props:{img:"/gmail.png",href:`https://mail.google.com/mail/?view=cm&fs=1&to=fontelerajohnadrian@gmail.com\r
`,target:"_blank",class:"bg-gray-800 text-white",$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){t=x("div"),V(e.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var r=A(t);z(e.$$.fragment,r),r.forEach(o),this.h()},h(){C(t,"class","card-container2 svelte-k8ibzn")},m(n,r){$(n,t,r),E(e,t,null),s=!0},i(n){s||(m(e.$$.fragment,n),n&&W(()=>{s&&(a||(a=S(t,U,{y:-20,duration:300},!0)),a.run(1))}),s=!0)},o(n){_(e.$$.fragment,n),n&&(a||(a=S(t,U,{y:-20,duration:300},!1)),a.run(0)),s=!1},d(n){n&&o(t),D(e),n&&a&&a.end()}}}function bt(i){let t,e="Gmail",a,s,n="Compose an Email to My Gmail Address";return{c(){t=x("h5"),t.textContent=e,a=y(),s=x("p"),s.textContent=n,this.h()},l(r){t=w(r,"H5",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-4dgrew"&&(t.textContent=e),a=G(r),s=w(r,"P",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-ctsr57"&&(s.textContent=n),this.h()},h(){C(t,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),C(s,"class","mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight")},m(r,f){$(r,t,f),$(r,a,f),$(r,s,f)},p:X,d(r){r&&(o(t),o(a),o(s))}}}function nt(i){let t,e,a,s;return e=new Y({props:{img:"/github.png",href:"https://github.com/j3yey",target:"_blank",class:"bg-gray-800 text-white",$$slots:{default:[kt]},$$scope:{ctx:i}}}),{c(){t=x("div"),V(e.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var r=A(t);z(e.$$.fragment,r),r.forEach(o),this.h()},h(){C(t,"class","card-container3 svelte-k8ibzn")},m(n,r){$(n,t,r),E(e,t,null),s=!0},i(n){s||(m(e.$$.fragment,n),n&&W(()=>{s&&(a||(a=S(t,U,{y:-20,duration:300},!0)),a.run(1))}),s=!0)},o(n){_(e.$$.fragment,n),n&&(a||(a=S(t,U,{y:-20,duration:300},!1)),a.run(0)),s=!1},d(n){n&&o(t),D(e),n&&a&&a.end()}}}function kt(i){let t,e="Github",a,s,n="Github Profile";return{c(){t=x("h5"),t.textContent=e,a=y(),s=x("p"),s.textContent=n,this.h()},l(r){t=w(r,"H5",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-19y4hqj"&&(t.textContent=e),a=G(r),s=w(r,"P",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-1uxtyjp"&&(s.textContent=n),this.h()},h(){C(t,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),C(s,"class","mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight")},m(r,f){$(r,t,f),$(r,a,f),$(r,s,f)},p:X,d(r){r&&(o(t),o(a),o(s))}}}function xt(i){let t,e,a,s,n,r,f,v,l,c,I,k,H,P,q,B;e=new lt({props:{class:"px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b bg-gray-800 text-white",$$slots:{default:[dt]},$$scope:{ctx:i}}}),r=new R({props:{outline:!0,color:"purpleToBlue",style:"width:295px;",$$slots:{default:[pt]},$$scope:{ctx:i}}}),r.$on("click",i[3]),l=new R({props:{outline:!0,color:"pinkToOrange",style:"width:295px;",$$slots:{default:[_t]},$$scope:{ctx:i}}}),l.$on("click",i[4]),k=new R({props:{outline:!0,color:"cyanToBlue",style:"width:295px;",$$slots:{default:[ht]},$$scope:{ctx:i}}}),k.$on("click",i[5]);let g=i[0]&&tt(i),d=i[1]&&et(i),p=i[2]&&nt(i);return{c(){t=x("div"),V(e.$$.fragment),a=y(),s=x("div"),n=x("div"),V(r.$$.fragment),f=y(),v=x("div"),V(l.$$.fragment),c=y(),I=x("div"),V(k.$$.fragment),H=y(),g&&g.c(),P=y(),d&&d.c(),q=y(),p&&p.c(),this.h()},l(u){t=w(u,"DIV",{class:!0});var h=A(t);z(e.$$.fragment,h),h.forEach(o),a=G(u),s=w(u,"DIV",{class:!0});var b=A(s);n=w(b,"DIV",{class:!0});var O=A(n);z(r.$$.fragment,O),O.forEach(o),f=G(b),v=w(b,"DIV",{class:!0});var L=A(v);z(l.$$.fragment,L),L.forEach(o),c=G(b),I=w(b,"DIV",{class:!0});var M=A(I);z(k.$$.fragment,M),M.forEach(o),H=G(b),g&&g.l(b),P=G(b),d&&d.l(b),q=G(b),p&&p.l(b),b.forEach(o),this.h()},h(){C(t,"class","relative px-8"),C(n,"class","toggle-btn svelte-k8ibzn"),C(v,"class","toggle-btn2 svelte-k8ibzn"),C(I,"class","toggle-btn3 svelte-k8ibzn"),C(s,"class","welcome-container svelte-k8ibzn")},m(u,h){$(u,t,h),E(e,t,null),$(u,a,h),$(u,s,h),j(s,n),E(r,n,null),j(s,f),j(s,v),E(l,v,null),j(s,c),j(s,I),E(k,I,null),j(s,H),g&&g.m(s,null),j(s,P),d&&d.m(s,null),j(s,q),p&&p.m(s,null),B=!0},p(u,[h]){const b={};h&64&&(b.$$scope={dirty:h,ctx:u}),e.$set(b);const O={};h&64&&(O.$$scope={dirty:h,ctx:u}),r.$set(O);const L={};h&64&&(L.$$scope={dirty:h,ctx:u}),l.$set(L);const M={};h&64&&(M.$$scope={dirty:h,ctx:u}),k.$set(M),u[0]?g?h&1&&m(g,1):(g=tt(u),g.c(),m(g,1),g.m(s,P)):g&&(Q(),_(g,1,1,()=>{g=null}),K()),u[1]?d?h&2&&m(d,1):(d=et(u),d.c(),m(d,1),d.m(s,q)):d&&(Q(),_(d,1,1,()=>{d=null}),K()),u[2]?p?h&4&&m(p,1):(p=nt(u),p.c(),m(p,1),p.m(s,null)):p&&(Q(),_(p,1,1,()=>{p=null}),K())},i(u){B||(m(e.$$.fragment,u),m(r.$$.fragment,u),m(l.$$.fragment,u),m(k.$$.fragment,u),m(g),m(d),m(p),B=!0)},o(u){_(e.$$.fragment,u),_(r.$$.fragment,u),_(l.$$.fragment,u),_(k.$$.fragment,u),_(g),_(d),_(p),B=!1},d(u){u&&(o(t),o(a),o(s)),D(e),D(r),D(l),D(k),g&&g.d(),d&&d.d(),p&&p.d()}}}function wt(i,t,e){let a=!1,s=!1,n=!1;return[a,s,n,()=>{e(0,a=!a)},()=>{e(1,s=!s)},()=>{e(2,n=!n)}]}class zt extends st{constructor(t){super(),rt(this,t,wt,xt,at,{})}}export{zt as component};
