import{p as g,v as ne,i as ae,C as re,j as Q,D as ue,h as f,a3 as ve,I as ge,G as me,H as F,k as ie,N as be,an as he,r as U,y as A,J as ye,E as ke,l as pe,$ as xe,T as qe}from"./main-BcdUNzJa.js";function $e(e,t){return void 0!==e&&e()||t}function Ge(e,t){if(void 0!==e){const t=e();if(null!=t)return t.slice()}return t}function K(e,t){return void 0!==e?t.concat(e()):t}function Je(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function Ye(e,t,n,a,l,o){t.key=a+l;const r=g(e,t,n);return!0===l?ne(r,o()):r}const H="0 0 24 24",z=e=>e,V=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":z,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":V,"ion-ios":V,"ion-logo":V,"iconfont ":z,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":z},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(le).join("|")+")"),Re=new RegExp("^("+Object.keys(oe).join("|")+")"),W=new RegExp("^("+Object.keys(se).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,Ce=/^svguse:/,Se=/^ion-/,Be=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,X=ae({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),a=ue(e),l=f((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),o=f((()=>{let t,a=e.name;if("none"===a||!a)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(a);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};if(a=e.icon,"none"===a||!a)return{none:!0}}}if(!0===we.test(a)){const[e,t=H]=a.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,a]=e.split("@@");return g("path",{style:n,d:t,transform:a})}))}}if(!0===Le.test(a))return{img:!0,src:a.substring(4)};if(!0===Ce.test(a)){const[e,t=H]=a.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let l=" ";const o=a.match(Ee);if(null!==o)t=le[o[1]](a);else if(!0===Be.test(a))t=a;else if(!0===Se.test(a))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${a.substring(3)}`;else if(!0===W.test(a)){t="notranslate material-symbols";const e=a.match(W);null!==e&&(a=a.substring(6),t+=se[e[1]]),l=a}else{t="notranslate material-icons";const e=a.match(Re);null!==e&&(a=a.substring(2),t+=oe[e[1]]),l=a}return{cls:t,content:l}}));return()=>{const n={class:l.value,style:a.value,"aria-hidden":"true"};return!0===o.value.none?g(e.tag,n,$e(t.default)):!0===o.value.img?g(e.tag,n,K(t.default,[g("img",{src:o.value.src})])):!0===o.value.svg?g(e.tag,n,K(t.default,[g("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):!0===o.value.svguse?g(e.tag,n,K(t.default,[g("svg",{viewBox:o.value.viewBox},[g("use",{"xlink:href":o.value.src})])])):(void 0!==o.value.cls&&(n.class+=" "+o.value.cls),g(e.tag,n,K(t.default,[o.value.content])))}}});function _e(e,t=250){let n,a=!1;return function(){return!1===a&&(a=!0,setTimeout((()=>{a=!1}),t),n=e.apply(this,arguments)),n}}function G(e,t,n,a){!0===n.modifiers.stop&&ie(e);const l=n.modifiers.color;let o=n.modifiers.center;o=!0===o||!0===a;const r=document.createElement("span"),i=document.createElement("span"),s=be(e),{left:u,top:c,width:d,height:v}=t.getBoundingClientRect(),f=Math.sqrt(d*d+v*v),p=f/2,g=(d-f)/2+"px",b=o?g:s.left-u-p+"px",m=(v-f)/2+"px",y=o?m:s.top-c-p+"px";i.className="q-ripple__inner",he(i,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${b},${y},0) scale3d(.2,.2,1)`,opacity:0}),r.className="q-ripple"+(l?" text-"+l:""),r.setAttribute("dir","ltr"),r.appendChild(i),t.appendChild(r);const h=()=>{r.remove(),clearTimeout(k)};n.abort.push(h);let k=setTimeout((()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${g},${m},0) scale3d(1,1,1)`,i.style.opacity=.2,k=setTimeout((()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,k=setTimeout((()=>{r.remove(),n.abort.splice(n.abort.indexOf(h),1)}),275)}),250)}),50)}function J(e,{modifiers:t,value:n,arg:a}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:!0===l.early,stop:!0===l.stop,center:!0===l.center,color:l.color||a,keyCodes:[].concat(l.keyCodes||13)}}const Pe=ve({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(!1===n.ripple)return;const a={cfg:n,enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===a.enabled&&!0!==t.qSkipRipple&&t.type===(!0===a.modifiers.early?"pointerdown":"click")&&G(t,e,a,!0===t.qKeyEvent)},keystart:_e((t=>{!0===a.enabled&&!0!==t.qSkipRipple&&!0===F(t,a.modifiers.keyCodes)&&t.type==="key"+(!0===a.modifiers.early?"down":"up")&&G(t,e,a,!0)}),300)};J(a,t),e.__qripple=a,me(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;void 0!==n&&(n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&J(n,t))}},beforeUnmount(e){const t=e.__qripple;void 0!==t&&(t.abort.forEach((e=>{e()})),ge(t,"main"),delete e._qripple)}}),ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(ce),Te={align:{type:String,validator:e=>Ae.includes(e)}};function Oe(e){return f((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${ce[t]}`}))}function Ze(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function de(e,t){"symbol"==typeof t.type?!0===Array.isArray(t.children)&&t.children.forEach((t=>{de(e,t)})):e.add(t)}function et(e){const t=new Set;return e.forEach((e=>{de(t,e)})),Array.from(t)}function je(e){return void 0!==e.appContext.config.globalProperties.$router}function tt(e){return!0===e.isUnmounted||!0===e.isDeactivated}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Me(e,t){for(const n in t){const a=t[n],l=e[n];if("string"==typeof a){if(a!==l)return!1}else if(!1===Array.isArray(l)||l.length!==a.length||a.some(((e,t)=>e!==l[t])))return!1}return!0}function ee(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function Ne(e,t){return!0===Array.isArray(e)?ee(e,t):!0===Array.isArray(t)?ee(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===Ne(e[n],t[n]))return!1;return!0}const fe={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},nt={...fe,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ke({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Q(),{props:a,proxy:l,emit:o}=n,r=je(n),i=f((()=>!0!==a.disable&&void 0!==a.href)),s=f(!0===t?()=>!0===r&&!0!==a.disable&&!0!==i.value&&void 0!==a.to&&null!==a.to&&""!==a.to:()=>!0===r&&!0!==i.value&&void 0!==a.to&&null!==a.to&&""!==a.to),u=f((()=>!0===s.value?h(a.to):null)),c=f((()=>null!==u.value)),d=f((()=>!0===i.value||!0===c.value)),v=f((()=>"a"===a.type||!0===d.value?"a":a.tag||e||"div")),p=f((()=>!0===i.value?{href:a.href,target:a.target}:!0===c.value?{href:u.value.href,target:a.target}:{})),g=f((()=>{if(!1===c.value)return-1;const{matched:e}=u.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const a=l.$route.matched;if(0===a.length)return-1;const o=a.findIndex(Z.bind(null,n));if(-1!==o)return o;const r=Y(e[t-2]);return t>1&&Y(n)===r&&a[a.length-1].path!==r?a.findIndex(Z.bind(null,e[t-2])):o})),b=f((()=>!0===c.value&&-1!==g.value&&Me(l.$route.params,u.value.params))),m=f((()=>!0===b.value&&g.value===l.$route.matched.length-1&&Ie(l.$route.params,u.value.params))),y=f((()=>!0===c.value?!0===m.value?` ${a.exactActiveClass} ${a.activeClass}`:!0===a.exact?"":!0===b.value?` ${a.activeClass}`:"":""));function h(e){try{return l.$router.resolve(e)}catch{}return null}function k(e,{returnRouterError:t,to:n=a.to,replace:o=a.replace}={}){if(!0===a.disable)return e.preventDefault(),Promise.resolve(!1);if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||void 0!==e.button&&0!==e.button||"_blank"===a.target)return Promise.resolve(!1);e.preventDefault();const r=l.$router[!0===o?"replace":"push"](n);return!0===t?r:r.then((()=>{})).catch((()=>{}))}return{hasRouterLink:c,hasHrefLink:i,hasLink:d,linkTag:v,resolvedLink:u,linkIsActive:b,linkIsExactActive:m,linkClass:y,linkAttrs:p,getLink:h,navigateToRouterLink:k,navigateOnClick:function(e){if(!0===c.value){const t=t=>k(e,t);o("click",e,t),!0!==e.defaultPrevented&&t()}else o("click",e)}}}const te={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},ze=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"];function Qe(e,t){return!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":t}const Ue={...re,...fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce(((e,t)=>(e[t]=Boolean)&&e),{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Te.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},He={...Ue,round:Boolean};function We(e){const t=ue(e,De),n=Oe(e),{hasRouterLink:a,hasLink:l,linkTag:o,linkAttrs:r,navigateOnClick:i}=Ke({fallbackTag:"button"}),s=f((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in te?te[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),u=f((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),c=f((()=>!0!==e.disable&&!0!==e.loading)),d=f((()=>!0===c.value?e.tabindex||0:-1)),v=f((()=>Qe(e,"standard"))),p=f((()=>{const t={tabindex:d.value};return!0===l.value?Object.assign(t,r.value):!0===ze.includes(e.type)&&(t.type=e.type),"a"===o.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==a.value&&!0===Ve.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t}));return{classes:f((()=>{let t;void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`);const n=!0===e.round?"round":"rectangle"+(!0===u.value?" q-btn--rounded":!0===e.square?" q-btn--square":"");return`q-btn--${v.value} q-btn--${n}`+(void 0!==t?" "+t:"")+(!0===c.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")+(e.square?" q-btn--square":"")})),style:s,innerClasses:f((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":""))),attributes:p,hasLink:l,linkTag:o,navigateOnClick:i,isActionable:c}}const{passiveCapture:E}=ye;let T=null,O=null,j=null;const at=ae({name:"QBtn",props:{...He,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=Q(),{classes:l,style:o,innerClasses:r,attributes:i,hasLink:s,linkTag:u,navigateOnClick:c,isActionable:d}=We(e),v=U(null),p=U(null);let b,m=null,y=null;const h=f((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),k=f((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===s.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),x=f((()=>({center:e.round}))),q=f((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),$=f((()=>{if(!0===e.loading)return{onMousedown:P,onTouchstart:P,onClick:P,onKeydown:P,onKeyup:P};if(!0===d.value){const t={onClick:_,onKeydown:C,onMousedown:B};if(!0===a.$q.platform.has.touch){t[`onTouchstart${void 0!==e.onTouchstart?"":"Passive"}`]=L}return t}return{onClick:A}})),w=f((()=>({ref:v,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:o.value,...i.value,...$.value})));function _(t){if(null!==v.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===v.value.contains(n)&&!1===n.contains(v.value)){!0!==t.qAvoidFocus&&v.value.focus();const e=()=>{var t;document.removeEventListener("keydown",A,!0),document.removeEventListener("keyup",e,E),null==(t=v.value)||t.removeEventListener("blur",e,E)};document.addEventListener("keydown",A,!0),document.addEventListener("keyup",e,E),v.value.addEventListener("blur",e,E)}}c(t)}}function C(e){null!==v.value&&(n("keydown",e),!0===F(e,[13,32])&&O!==v.value&&(null!==O&&R(),!0!==e.defaultPrevented&&(!0!==e.qAvoidFocus&&v.value.focus(),O=v.value,v.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),v.value.addEventListener("blur",S,E)),A(e)))}function L(e){null!==v.value&&(n("touchstart",e),!0!==e.defaultPrevented&&(T!==v.value&&(null!==T&&R(),T=v.value,m=e.target,m.addEventListener("touchcancel",S,E),m.addEventListener("touchend",S,E)),b=!0,null!==y&&clearTimeout(y),y=setTimeout((()=>{y=null,b=!1}),200)))}function B(e){null!==v.value&&(e.qSkipRipple=!0===b,n("mousedown",e),!0!==e.defaultPrevented&&j!==v.value&&(null!==j&&R(),j=v.value,v.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,E)))}function S(e){if(null!==v.value&&("blur"!==(null==e?void 0:e.type)||document.activeElement!==v.value)){if("keyup"===(null==e?void 0:e.type)){if(O===v.value&&!0===F(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&ke(t),!0===e.cancelBubble&&ie(t),v.value.dispatchEvent(t),A(e),e.qKeyEvent=!0}n("keyup",e)}R()}}function R(e){var t,n;const a=p.value;!0!==e&&(T===v.value||j===v.value)&&null!==a&&a!==document.activeElement&&(a.setAttribute("tabindex",-1),a.focus()),T===v.value&&(null!==m&&(m.removeEventListener("touchcancel",S,E),m.removeEventListener("touchend",S,E)),T=m=null),j===v.value&&(document.removeEventListener("mouseup",S,E),j=null),O===v.value&&(document.removeEventListener("keyup",S,!0),null==(t=v.value)||t.removeEventListener("blur",S,E),O=null),null==(n=v.value)||n.classList.remove("q-btn--active")}function P(e){A(e),e.qSkipRipple=!0}return pe((()=>{R(!0)})),Object.assign(a,{click:e=>{!0===d.value&&_(e)}}),()=>{let n=[];void 0!==e.icon&&n.push(g(X,{name:e.icon,left:!0!==e.stack&&!0===h.value,role:"img"})),!0===h.value&&n.push(g("span",{class:"block"},[e.label])),n=K(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push(g(X,{name:e.iconRight,right:!0!==e.stack&&!0===h.value,role:"img"}));const a=[g("span",{class:"q-focus-helper",ref:p})];return!0===e.loading&&void 0!==e.percentage&&a.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(!0===e.darkPercentage?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:q.value})])),a.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},n)),null!==e.loading&&a.push(g(qe,{name:"q-transition--fade"},(()=>!0===e.loading?[g("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[g(xe)])]:null))),ne(g(u.value,w.value,a),[[Pe,k.value,void 0,x.value]])}}});export{at as Q,Pe as R,X as a,Ye as b,Je as c,K as d,je as e,Te as f,et as g,$e as h,Oe as i,Ze as j,Ge as k,Ke as l,nt as u,tt as v};
