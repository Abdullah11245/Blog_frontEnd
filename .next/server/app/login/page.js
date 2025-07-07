(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},42427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(50482),a=r(69108),i=r(62563),o=r.n(i),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,91613)),"F:\\Project\\Blogs\\Blogs\\Blog_frontEnd\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,21342)),"F:\\Project\\Blogs\\Blogs\\Blog_frontEnd\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["F:\\Project\\Blogs\\Blogs\\Blog_frontEnd\\src\\app\\login\\page.tsx"],p="/login/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},90204:(e,t,r)=>{Promise.resolve().then(r.bind(r,22302))},22302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eh});var s,a=r(95344),i=r(20783),o=r.n(i),n=r(60708),l=r(53608),d=r(22254),c=r(3729);let p={data:""},u=e=>e||p,m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,f=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?f(o,i):i+"{"+f(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=f(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=f.p?f.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},h={},y=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+y(e[r]);return t}return e},b=(e,t,r,s,a)=>{let i=y(e),o=h[i]||(h[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!h[o]){let t=i!==e?e:(e=>{let t,r,s=[{}];for(;t=m.exec(e.replace(g,""));)t[4]?s.shift():t[3]?(r=t[3].replace(x," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(x," ").trim();return s[0]})(e);h[o]=f(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let n=r&&h.g?h.g:null;return r&&(h.g=h[o]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(h[o],t,s,n),o},v=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function w(e){let t=this||{},r=e.call?e(t.p):e;return b(r.unshift?r.raw?v(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,u(t.target),t.g,t.o,t.k)}w.bind({g:1});let j,N,E,P=w.bind({k:1});function k(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;r.p=Object.assign({theme:N&&N()},n),r.o=/ *go\d+/.test(l),n.className=w.apply(r,s)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),E&&d[0]&&E(n),j(d,n)}return t?t(a):a}}var C=e=>"function"==typeof e,q=(e,t)=>C(e)?e(t):e,_=(()=>{let e=0;return()=>(++e).toString()})(),$=(()=>{let e;return()=>e})(),F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return F(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},S=[],L={toasts:[],pausedAt:void 0},B=e=>{L=F(L,e),S.forEach(e=>{e(L)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,r]=(0,c.useState)(L),s=(0,c.useRef)(L);(0,c.useEffect)(()=>(s.current!==L&&r(L),S.push(r),()=>{let e=S.indexOf(r);e>-1&&S.splice(e,1)}),[]);let a=t.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},A=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||_()}),z=e=>(t,r)=>{let s=A(t,e,r);return B({type:2,toast:s}),s.id},I=(e,t)=>z("blank")(e,t);I.error=z("error"),I.success=z("success"),I.loading=z("loading"),I.custom=z("custom"),I.dismiss=e=>{B({type:3,toastId:e})},I.remove=e=>B({type:4,toastId:e}),I.promise=(e,t,r)=>{let s=I.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?q(t.success,e):void 0;return a?I.success(a,{id:s,...r,...null==r?void 0:r.success}):I.dismiss(s),e}).catch(e=>{let a=t.error?q(t.error,e):void 0;a?I.error(a,{id:s,...r,...null==r?void 0:r.error}):I.dismiss(s)}),e};var M=(e,t)=>{B({type:1,toast:{id:e,height:t}})},G=()=>{B({type:5,time:Date.now()})},T=new Map,R=1e3,H=(e,t=R)=>{if(T.has(e))return;let r=setTimeout(()=>{T.delete(e),B({type:4,toastId:e})},t);T.set(e,r)},U=e=>{let{toasts:t,pausedAt:r}=O(e);(0,c.useEffect)(()=>{if(r)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&I.dismiss(t.id);return}return setTimeout(()=>I.dismiss(t.id),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,r]);let s=(0,c.useCallback)(()=>{r&&B({type:6,time:Date.now()})},[r]),a=(0,c.useCallback)((e,r)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return(0,c.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)H(e.id,e.removeDelay);else{let t=T.get(e.id);t&&(clearTimeout(t),T.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:M,startPause:G,endPause:s,calculateOffset:a}}},Z=P`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,J=P`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=P`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${J} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=P`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,V=P`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=P`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ee=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,et=k("div")`
  position: absolute;
`,er=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,es=P`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ea=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${es} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ei=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?c.createElement(ea,null,t):t:"blank"===r?null:c.createElement(er,null,c.createElement(Q,{...s}),"loading"!==r&&c.createElement(et,null,"error"===r?c.createElement(Y,{...s}):c.createElement(ee,{...s})))},eo=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,en=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,el=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ed=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ec=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[eo(r),en(r)];return{animation:t?`${P(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${P(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ep=c.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?ec(e.position||t||"top-center",e.visible):{opacity:0},i=c.createElement(ei,{toast:e}),o=c.createElement(ed,{...e.ariaProps},q(e.message,e));return c.createElement(el,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:o}):c.createElement(c.Fragment,null,i,o))});s=c.createElement,f.p=void 0,j=s,N=void 0,E=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=c.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return c.createElement("div",{ref:i,className:t,style:r},a)},em=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},eg=w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ex=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,containerStyle:i,containerClassName:o})=>{let{toasts:n,handlers:l}=U(r);return c.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(r=>{let i=r.position||t,o=em(i,l.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return c.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?eg:"",style:o},"custom"===r.type?q(r.message,r):a?a(r):c.createElement(ep,{toast:r,position:i}))}))};r(10709);let ef=()=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"loader"})}),eh=()=>{let e=(0,d.useRouter)(),{register:t,handleSubmit:r,watch:s,formState:{errors:i}}=(0,n.cI)(),[p,u]=(0,c.useState)(!1),m=async t=>{u(!0);try{let r=new FormData;r.append("email",t.email),r.append("password",t.password);let s=await l.Z.post("http://localhost:5000/user/login",{email:t.email,password:t.password},{withCredentials:!0});s.data.message="Login Successfully",console.log(s.data),u(!1),I.success("Login Successfully"),localStorage.setItem("user",JSON.stringify(s.data.user)),e.push("/")}catch(e){u(!1),I.error("Internal Server Error")}};return p?a.jsx("div",{className:"flex items-center justify-center h-screen bg-white",children:a.jsx(ef,{})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"",style:{backgroundImage:"url(signupbg2.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:a.jsx("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ",children:(0,a.jsxs)("div",{className:"mx-auto max-w-lg bg-white pt-4 rounded-lg opacity-95",children:[a.jsx(ex,{position:"top-right",reverseOrder:!1}),a.jsx("h1",{className:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl",children:"Get started today"}),a.jsx("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?"}),(0,a.jsxs)("form",{action:"#",className:"mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8",onSubmit:r(e=>{m(e),console.log(e)}),children:[a.jsx("p",{className:"text-center text-lg font-medium",children:"Sign in to your account"}),(0,a.jsxs)("div",{className:"mb-3",children:[a.jsx("label",{className:"mb-2 block text-sm px-2 font-medium text-[#07074D]",children:"Enter your Email"}),a.jsx("input",{type:"text",placeholder:"abc@gmail.com",className:"input input-bordered input-md w-full py-3 px-3 border rounded-full",...t("email",{required:"Email is required"})}),i.email&&a.jsx("p",{className:"text-red-500 text-sm",children:i.email.message})]}),(0,a.jsxs)("div",{className:"mb-3",children:[a.jsx("label",{className:"mb-2 block text-sm font-medium text-[#07074D]",children:"Enter your Password"}),a.jsx("input",{type:"password",placeholder:"*********",className:"input input-bordered input-md w-full py-3 px-3 border rounded-full",...t("password",{required:"Password is required"})}),i.password&&a.jsx("p",{className:"text-red-500 text-sm",children:i.password.message})]}),a.jsx("button",{type:"submit",className:"block w-full rounded-full bg-[#6A64F1] px-5 py-4 text-base font-medium text-white mt-4",children:"Sign in"}),(0,a.jsxs)("div",{className:"mt-6 flex items-center justify-between",children:[a.jsx("span",{className:"border-b w-1/5 lg:w-1/4"}),a.jsx("a",{href:"#",className:"text-xs text-center text-gray-500 uppercase",children:"or Login with Google"}),a.jsx("span",{className:"border-b w-1/5 lg:w-1/4"})]}),(0,a.jsxs)("button",{className:"flex items-center justify-center py-3 w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-full shadow-md px-6  text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:[(0,a.jsxs)("svg",{className:"h-6 w-6 mr-2",xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"-0.5 0 48 48",version:"1.1",children:[" ",a.jsx("title",{children:"Google-color"})," ",a.jsx("desc",{children:"Created with Sketch."})," ",a.jsx("defs",{children:" "})," ",(0,a.jsxs)("g",{id:"Icons",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[" ",(0,a.jsxs)("g",{id:"Color-",transform:"translate(-401.000000, -860.000000)",children:[" ",(0,a.jsxs)("g",{id:"Google",transform:"translate(401.000000, 860.000000)",children:[" ",a.jsx("path",{d:"M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24",id:"Fill-1",fill:"#FBBC05",children:" "})," ",a.jsx("path",{d:"M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333",id:"Fill-2",fill:"#EB4335",children:" "})," ",a.jsx("path",{d:"M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667",id:"Fill-3",fill:"#34A853",children:" "})," ",a.jsx("path",{d:"M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24",id:"Fill-4",fill:"#4285F4",children:" "})," "]})," "]})," "]})," "]}),a.jsx("span",{className:"text-lg font-semibold",children:"Login with Google"})]}),(0,a.jsxs)("p",{className:"text-center text-sm text-gray-500",children:["No account?",a.jsx(o(),{className:"font-semibold",href:"/signup",children:" Sign up"})]})]})]})})})})}},91613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let s=(0,r(86843).createProxy)(String.raw`F:\Project\Blogs\Blogs\Blog_frontEnd\src\app\login\page.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},10709:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,948,337,608,708,559],()=>r(42427));module.exports=s})();