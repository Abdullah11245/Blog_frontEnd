(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1119:function(e,t,s){Promise.resolve().then(s.bind(s,8965))},8965:function(e,t,s){"use strict";let r,a;s.r(t),s.d(t,{default:function(){return eb}});var i,o=s(7437),n=s(1396),l=s.n(n),d=s(1865),c=s(2173),u=s(4033),p=s(2265);let m={data:""},f=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||m,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,y=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?y(o,i):i+"{"+y(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=y(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=y.p?y.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},b={},v=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+v(e[s]);return t}return e},w=(e,t,s,r,a)=>{var i;let o=v(e),n=b[o]||(b[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!b[n]){let t=o!==e?e:(e=>{let t,s,r=[{}];for(;t=g.exec(e.replace(h,""));)t[4]?r.shift():t[3]?(s=t[3].replace(x," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(x," ").trim();return r[0]})(e);b[n]=y(a?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&b.g?b.g:null;return s&&(b.g=b[n]),i=b[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},j=(e,t,s)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":y(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function N(e){let t=this||{},s=e.call?e(t.p):e;return w(s.unshift?s.raw?j(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,f(t.target),t.g,t.o,t.k)}N.bind({g:1});let E,k,C,L=N.bind({k:1});function $(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;s.p=Object.assign({theme:k&&k()},n),s.o=/ *go\d+/.test(l),n.className=N.apply(s,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),C&&d[0]&&C(n),E(d,n)}return t?t(a):a}}var O=e=>"function"==typeof e,S=(e,t)=>O(e)?e(t):e,D=(r=0,()=>(++r).toString()),F=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return I(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},P=[],z={toasts:[],pausedAt:void 0},A=e=>{z=I(z,e),P.forEach(e=>{e(z)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={})=>{let[t,s]=(0,p.useState)(z),r=(0,p.useRef)(z);(0,p.useEffect)(()=>(r.current!==z&&s(z),P.push(s),()=>{let e=P.indexOf(s);e>-1&&P.splice(e,1)}),[]);let a=t.toasts.map(t=>{var s,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},q=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||D()}),T=e=>(t,s)=>{let r=q(t,e,s);return A({type:2,toast:r}),r.id},B=(e,t)=>T("blank")(e,t);B.error=T("error"),B.success=T("success"),B.loading=T("loading"),B.custom=T("custom"),B.dismiss=e=>{A({type:3,toastId:e})},B.remove=e=>A({type:4,toastId:e}),B.promise=(e,t,s)=>{let r=B.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?S(t.success,e):void 0;return a?B.success(a,{id:r,...s,...null==s?void 0:s.success}):B.dismiss(r),e}).catch(e=>{let a=t.error?S(t.error,e):void 0;a?B.error(a,{id:r,...s,...null==s?void 0:s.error}):B.dismiss(r)}),e};var G=(e,t)=>{A({type:1,toast:{id:e,height:t}})},H=()=>{A({type:5,time:Date.now()})},R=new Map,U=1e3,Z=(e,t=U)=>{if(R.has(e))return;let s=setTimeout(()=>{R.delete(e),A({type:4,toastId:e})},t);R.set(e,s)},J=e=>{let{toasts:t,pausedAt:s}=M(e);(0,p.useEffect)(()=>{if(s)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,s]);let r=(0,p.useCallback)(()=>{s&&A({type:6,time:Date.now()})},[s]),a=(0,p.useCallback)((e,s)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=s||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return(0,p.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)Z(e.id,e.removeDelay);else{let t=R.get(e.id);t&&(clearTimeout(t),R.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:G,startPause:H,endPause:r,calculateOffset:a}}},Y=L`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,K=L`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=L`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${K} 0.15s ease-out forwards;
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
    animation: ${Q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W=L`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=$("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,ee=L`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,et=L`
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
}`,es=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${et} 0.2s ease-out forwards;
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
`,er=$("div")`
  position: absolute;
`,ea=$("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ei=L`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eo=$("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ei} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,en=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?p.createElement(eo,null,t):t:"blank"===s?null:p.createElement(ea,null,p.createElement(X,{...r}),"loading"!==s&&p.createElement(er,null,"error"===s?p.createElement(V,{...r}):p.createElement(es,{...r})))},el=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ed=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ec=$("div")`
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
`,eu=$("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ep=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[el(s),ed(s)];return{animation:t?`${L(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${L(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},em=p.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?ep(e.position||t||"top-center",e.visible):{opacity:0},i=p.createElement(en,{toast:e}),o=p.createElement(eu,{...e.ariaProps},S(e.message,e));return p.createElement(ec,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:i,message:o}):p.createElement(p.Fragment,null,i,o))});i=p.createElement,y.p=void 0,E=i,k=void 0,C=void 0;var ef=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let i=p.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return p.createElement("div",{ref:i,className:t,style:s},a)},eg=(e,t)=>{let s=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...r}},eh=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ex=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,containerStyle:i,containerClassName:o})=>{let{toasts:n,handlers:l}=J(s);return p.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(s=>{let i=s.position||t,o=eg(i,l.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}));return p.createElement(ef,{id:s.id,key:s.id,onHeightUpdate:l.updateHeight,className:s.visible?eh:"",style:o},"custom"===s.type?S(s.message,s):a?a(s):p.createElement(em,{toast:s,position:i}))}))};s(5555);var ey=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"loader"})}),eb=()=>{let e=(0,u.useRouter)(),{register:t,handleSubmit:s,watch:r,formState:{errors:a}}=(0,d.cI)(),[i,n]=(0,p.useState)(!1),m=async t=>{n(!0);try{let s=new FormData;s.append("email",t.email),s.append("password",t.password);let r=await c.Z.post("http://localhost:5000/user/login",{email:t.email,password:t.password},{withCredentials:!0});r.data.message="Login Successfully",console.log(r.data),n(!1),B.success("Login Successfully"),localStorage.setItem("user",JSON.stringify(r.data.user)),e.push("/")}catch(e){n(!1),B.error("Internal Server Error")}};return i?(0,o.jsx)("div",{className:"flex items-center justify-center h-screen bg-white",children:(0,o.jsx)(ey,{})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"",style:{backgroundImage:"url(signupbg2.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,o.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ",children:(0,o.jsxs)("div",{className:"mx-auto max-w-lg bg-white pt-4 rounded-lg opacity-95",children:[(0,o.jsx)(ex,{position:"top-right",reverseOrder:!1}),(0,o.jsx)("h1",{className:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl",children:"Get started today"}),(0,o.jsx)("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?"}),(0,o.jsxs)("form",{action:"#",className:"mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8",onSubmit:s(e=>{m(e),console.log(e)}),children:[(0,o.jsx)("p",{className:"text-center text-lg font-medium",children:"Sign in to your account"}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{className:"mb-2 block text-sm px-2 font-medium text-[#07074D]",children:"Enter your Email"}),(0,o.jsx)("input",{type:"text",placeholder:"abc@gmail.com",className:"input input-bordered input-md w-full py-3 px-3 border rounded-full",...t("email",{required:"Email is required"})}),a.email&&(0,o.jsx)("p",{className:"text-red-500 text-sm",children:a.email.message})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)("label",{className:"mb-2 block text-sm font-medium text-[#07074D]",children:"Enter your Password"}),(0,o.jsx)("input",{type:"password",placeholder:"*********",className:"input input-bordered input-md w-full py-3 px-3 border rounded-full",...t("password",{required:"Password is required"})}),a.password&&(0,o.jsx)("p",{className:"text-red-500 text-sm",children:a.password.message})]}),(0,o.jsx)("button",{type:"submit",className:"block w-full rounded-full bg-[#6A64F1] px-5 py-4 text-base font-medium text-white mt-4",children:"Sign in"}),(0,o.jsxs)("div",{className:"mt-6 flex items-center justify-between",children:[(0,o.jsx)("span",{className:"border-b w-1/5 lg:w-1/4"}),(0,o.jsx)("a",{href:"#",className:"text-xs text-center text-gray-500 uppercase",children:"or Login with Google"}),(0,o.jsx)("span",{className:"border-b w-1/5 lg:w-1/4"})]}),(0,o.jsxs)("button",{className:"flex items-center justify-center py-3 w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-full shadow-md px-6  text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:[(0,o.jsxs)("svg",{className:"h-6 w-6 mr-2",xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"-0.5 0 48 48",version:"1.1",children:[" ",(0,o.jsx)("title",{children:"Google-color"})," ",(0,o.jsx)("desc",{children:"Created with Sketch."})," ",(0,o.jsx)("defs",{children:" "})," ",(0,o.jsxs)("g",{id:"Icons",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[" ",(0,o.jsxs)("g",{id:"Color-",transform:"translate(-401.000000, -860.000000)",children:[" ",(0,o.jsxs)("g",{id:"Google",transform:"translate(401.000000, 860.000000)",children:[" ",(0,o.jsx)("path",{d:"M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24",id:"Fill-1",fill:"#FBBC05",children:" "})," ",(0,o.jsx)("path",{d:"M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333",id:"Fill-2",fill:"#EB4335",children:" "})," ",(0,o.jsx)("path",{d:"M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667",id:"Fill-3",fill:"#34A853",children:" "})," ",(0,o.jsx)("path",{d:"M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24",id:"Fill-4",fill:"#4285F4",children:" "})," "]})," "]})," "]})," "]}),(0,o.jsx)("span",{className:"text-lg font-semibold",children:"Login with Google"})]}),(0,o.jsxs)("p",{className:"text-center text-sm text-gray-500",children:["No account?",(0,o.jsx)(l(),{className:"font-semibold",href:"/signup",children:" Sign up"})]})]})]})})})})}},5555:function(){},4033:function(e,t,s){e.exports=s(5313)}},function(e){e.O(0,[250,580,599,971,938,744],function(){return e(e.s=1119)}),_N_E=e.O()}]);