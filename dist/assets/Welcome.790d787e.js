import{by as m,bA as h,bt as w,bp as E,bF as x,bQ as S,bR as M,bG as W,bE as d,bU as g,bW as y,bJ as C,bD as L}from"./vendor.cc682980.js";const z=(a,e)=>{const t=m(),l=m(),v=m(!1),f=h(()=>!t.value||!l.value?null:{x:l.value.x-t.value.x,y:l.value.y-t.value.y}),b=h(()=>{if(!f.value)return"";const{x:r,y:u}=f.value;return Math.abs(r)>Math.abs(u)?r>0?"right":"left":u>0?"down":"up"}),s=r=>{var u,_;(u=e==null?void 0:e.beforeStart)==null||u.call(e,r),v.value=!0,l.value=t.value={x:r.touches[0].screenX,y:r.touches[0].screenY},(_=e==null?void 0:e.afterStart)==null||_.call(e,r)},c=r=>{var u,_;(u=e==null?void 0:e.beforeMove)==null||u.call(e,r),t.value&&(l.value={x:r.touches[0].screenX,y:r.touches[0].screenY},(_=e==null?void 0:e.afterMove)==null||_.call(e,r))},i=r=>{var u,_;(u=e==null?void 0:e.beforeEnd)==null||u.call(e,r),v.value=!1,(_=e==null?void 0:e.afterEnd)==null||_.call(e,r)};return w(()=>{!a.value||(a.value.addEventListener("touchstart",s),a.value.addEventListener("touchmove",c),a.value.addEventListener("touchend",i))}),E(()=>{!a.value||(a.value.removeEventListener("touchstart",s),a.value.removeEventListener("touchmove",c),a.value.removeEventListener("touchend",i))}),{swiping:v,direction:b,distance:f}},D=(a,e)=>{let t,l;return(...v)=>(t||(l=a(...v),t=setTimeout(()=>{t=void 0},e)),l)},R="_wrapper_6za3y_1",T="_slide_fade_enter_active_6za3y_32",V="_slide_fade_leave_active_6za3y_33",j="_slide_fade_enter_from_6za3y_42",A="_slide_fade_leave_to_6za3y_46",n={wrapper:R,slide_fade_enter_active:T,slide_fade_leave_active:V,slide_fade_enter_from:j,slide_fade_leave_to:A};function B(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!L(a)}const F={Welcome1:"/welcome/2",Welcome2:"/welcome/3",Welcome3:"/welcome/4",Welcome4:"/items"},o=x({setup:(a,e)=>{const t=m(),{direction:l,swiping:v}=z(t,{beforeStart:c=>c.preventDefault()}),f=S(),b=M(),s=D(()=>{const c=(f.name||"Welcome1").toString();b.replace(F[c])},500);return W(()=>{v.value&&l.value==="left"&&s()}),()=>d("div",{class:n.wrapper},[d("header",null,[d("svg",null,[d("use",{"xlink:href":"#life"},null)]),d("h1",null,[g("\u751F\u6D3B\u8BB0\u8D26")])]),d("main",{class:n.main,ref:t},[d(y,{name:"main"},{default:({Component:c})=>d(C,{enterFromClass:n.slide_fade_enter_from,enterActiveClass:n.slide_fade_enter_active,leaveToClass:n.slide_fade_leave_to,leaveActiveClass:n.slide_fade_leave_active},B(c)?c:{default:()=>[c]})})]),d("footer",null,[d(y,{name:"footer"},null)])])}});export{o as Welcome,o as default};
