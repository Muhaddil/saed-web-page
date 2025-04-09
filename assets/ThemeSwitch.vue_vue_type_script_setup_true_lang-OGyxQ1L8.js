import{a as et,c as tt,h as D,k as Ee,u as at,l as nt,i as ot,v as it,b as xe,d as He,Q as lt}from"./QBtn-C_vxe8uH.js";import{g as P,x as rt,y as ut,k as v,i as k,r as T,aa as ye,D as W,j as E,h as A,R as be,B as N,G as he,a4 as M,a5 as $,aj as j,l as S,C as st,n as Oe,J as ct,L as dt,ak as ft,al as vt,am as mt,Z as ht,E as se,H as X,$ as ce,A as J,K as ge,z as Be,X as de,a0 as gt,P as yt,a2 as Te,an as bt,m as pt,ao as Ve,a7 as Ae,I as fe,ap as Z,ad as wt,aq as qt,d as Ct,c as St,o as kt}from"./main-EKXlyF2f.js";const It=P({name:"QAvatar",props:{...rt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const o=ut(e),a=v((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),n=v((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const l=void 0!==e.icon?[k(et,{name:e.icon})]:void 0;return k("div",{class:a.value,style:o.value},[k("div",{class:"q-avatar__content row flex-center overflow-hidden",style:n.value},tt(t.default,l))])}}}),Wt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=v((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>k("div",{class:o.value},D(t.default))}}),Nt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=v((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>k("div",{class:o.value,role:"toolbar"},D(t.default))}});function zt(){const e=T(!ye.value);return!1===e.value&&W((()=>{e.value=!0})),{isHydrated:e}}const Fe=typeof ResizeObserver<"u",$e=!0===Fe?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},te=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o,a=null,n={width:-1,height:-1};function l(t){!0===t||0===e.debounce||"0"===e.debounce?i():null===a&&(a=setTimeout(i,e.debounce))}function i(){if(null!==a&&(clearTimeout(a),a=null),o){const{offsetWidth:e,offsetHeight:a}=o;(e!==n.width||a!==n.height)&&(n={width:e,height:a},t("resize",n))}}const{proxy:s}=E();if(s.trigger=l,!0===Fe){let e;const t=a=>{o=s.$el.parentNode,o?(e=new ResizeObserver(l),e.observe(o),i()):!0!==a&&N((()=>{t(!0)}))};return W((()=>{t()})),A((()=>{null!==a&&clearTimeout(a),void 0!==e&&(void 0!==e.disconnect?e.disconnect():o&&e.unobserve(o))})),be}{let e=function(){null!==a&&(clearTimeout(a),a=null),void 0!==r&&(void 0!==r.removeEventListener&&r.removeEventListener("resize",l,he.passive),r=void 0)},t=function(){e(),null!=o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",l,he.passive),i())};const{isHydrated:n}=zt();let r;return W((()=>{N((()=>{o=s.$el,o&&t()}))})),A(e),()=>{if(!0===n.value)return k("object",{class:"q--avoid-card-border",style:$e.style,tabindex:-1,type:"text/html",data:$e.url,"aria-hidden":"true",onLoad:t})}}}}),jt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=E(),n=M(j,$);if(n===$)return console.error("QHeader needs to be child of QLayout"),$;const l=T(parseInt(e.heightHint,10)),i=T(!0),s=v((()=>!0===e.reveal||-1!==n.view.value.indexOf("H")||a.platform.is.ios&&!0===n.isContainer.value)),r=v((()=>{if(!0!==e.modelValue)return 0;if(!0===s.value)return!0===i.value?l.value:0;const t=l.value-n.scroll.value.position;return t>0?t:0})),u=v((()=>!0!==e.modelValue||!0===s.value&&!0!==i.value)),d=v((()=>!0===e.modelValue&&!0===u.value&&!0===e.reveal)),c=v((()=>"q-header q-layout__section--marginal "+(!0===s.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===u.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),f=v((()=>{const e=n.rows.value.top,t={};return"l"===e[0]&&!0===n.left.space&&(t[!0===a.lang.rtl?"right":"left"]=`${n.left.size}px`),"r"===e[2]&&!0===n.right.space&&(t[!0===a.lang.rtl?"left":"right"]=`${n.right.size}px`),t}));function p(e,t){n.update("header",e,t)}function m(e,t){e.value!==t&&(e.value=t)}function h({height:e}){m(l,e),p("size",e)}function g(e){!0===d.value&&m(i,!0),o("focusin",e)}S((()=>e.modelValue),(e=>{p("space",e),m(i,!0),n.animate()})),S(r,(e=>{p("offset",e)})),S((()=>e.reveal),(t=>{!1===t&&m(i,e.modelValue)})),S(i,(e=>{n.animate(),o("reveal",e)})),S(n.scroll,(t=>{!0===e.reveal&&m(i,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const b={};return n.instances.header=b,!0===e.modelValue&&p("size",l.value),p("space",e.modelValue),p("offset",r.value),A((()=>{n.instances.header===b&&(n.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))})),()=>{const o=Ee(t.default,[]);return!0===e.elevated&&o.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(k(te,{debounce:0,onResize:h})),k("header",{class:c.value,style:f.value,onFocusin:g},o)}}}),Kt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=v((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>k("div",{class:o.value},D(t.default))}}),pe={dark:{type:Boolean,default:null}};function we(e,t){return v((()=>null===e.dark?t.dark.isActive:e.dark))}const Ut=P({name:"QItem",props:{...pe,...at,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=E(),n=we(e,a),{hasLink:l,linkAttrs:i,linkClass:s,linkTag:r,navigateOnClick:u}=nt(),d=T(null),c=T(null),f=v((()=>!0===e.clickable||!0===l.value||"label"===e.tag)),p=v((()=>!0!==e.disable&&!0===f.value)),m=v((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===n.value?" q-item--dark":"")+(!0===l.value&&null===e.active?s.value:!0===e.active?" q-item--active"+(void 0!==e.activeClass?` ${e.activeClass}`:""):"")+(!0===e.disable?" disabled":"")+(!0===p.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),h=v((()=>void 0===e.insetLevel?null:{["padding"+(!0===a.lang.rtl?"Right":"Left")]:16+56*e.insetLevel+"px"}));function g(e){!0===p.value&&(null!==c.value&&!0!==e.qAvoidFocus&&(!0!==e.qKeyEvent&&document.activeElement===d.value?c.value.focus():document.activeElement===c.value&&d.value.focus()),u(e))}function b(e){if(!0===p.value&&!0===st(e,[13,32])){Oe(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,d.value.dispatchEvent(t)}o("keyup",e)}return()=>{const o={ref:d,class:m.value,style:h.value,role:"listitem",onClick:g,onKeyup:b};return!0===p.value?(o.tabindex=e.tabindex||"0",Object.assign(o,i.value)):!0===f.value&&(o["aria-disabled"]="true"),k(r.value,o,function(){const e=Ee(t.default,[]);return!0===p.value&&e.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:c})),e}())}}}),xt=["ul","ol"],Xt=P({name:"QList",props:{...pe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=E(),a=we(e,o.proxy.$q),n=v((()=>xt.includes(e.tag)?null:"list")),l=v((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===a.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>k(e.tag,{class:l.value,role:n.value},D(t.default))}}),{passive:Le}=he,Bt=["both","horizontal","vertical"],Tt=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Bt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ct},emits:["scroll"],setup(e,{emit:t}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a,n,l=null;function i(){null==l||l();const n=Math.max(0,ft(a)),i=vt(a),s={top:n-o.position.top,left:i-o.position.left};if("vertical"===e.axis&&0===s.top||"horizontal"===e.axis&&0===s.left)return;const r=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";o.position={top:n,left:i},o.directionChanged=o.direction!==r,o.delta=s,!0===o.directionChanged&&(o.direction=r,o.inflectionPoint=o.position),t("scroll",{...o})}function s(){a=dt(n,e.scrollTarget),a.addEventListener("scroll",u,Le),u(!0)}function r(){void 0!==a&&(a.removeEventListener("scroll",u,Le),a=void 0)}function u(t){if(!0===t||0===e.debounce||"0"===e.debounce)i();else if(null===l){const[t,o]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];l=()=>{o(t),l=null}}}S((()=>e.scrollTarget),(()=>{r(),s()}));const{proxy:d}=E();return S((()=>d.$q.lang.rtl),i),W((()=>{n=d.$el.parentNode,s()})),A((()=>{null==l||l(),r()})),Object.assign(d,{trigger:u,getPosition:()=>o}),be}}),qe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$t=Object.keys(qe);function _e(e){const t={};for(const o of $t)!0===e[o]&&(t[o]=!0);return 0===Object.keys(t).length?qe:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}qe.all=!0;const Lt=["INPUT","TEXTAREA"];function Pe(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"==typeof t.handler&&!1===Lt.includes(e.target.nodeName.toUpperCase())&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}function _t(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==mt.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function ve(e,t,o){const a=ge(e);let n,l=a.left-t.event.x,i=a.top-t.event.y,s=Math.abs(l),r=Math.abs(i);const u=t.direction;!0===u.horizontal&&!0!==u.vertical?n=l<0?"left":"right":!0!==u.horizontal&&!0===u.vertical?n=i<0?"up":"down":!0===u.up&&i<0?(n="up",s>r&&(!0===u.left&&l<0?n="left":!0===u.right&&l>0&&(n="right"))):!0===u.down&&i>0?(n="down",s>r&&(!0===u.left&&l<0?n="left":!0===u.right&&l>0&&(n="right"))):!0===u.left&&l<0?(n="left",s<r&&(!0===u.up&&i<0?n="up":!0===u.down&&i>0&&(n="down"))):!0===u.right&&l>0&&(n="right",s<r&&(!0===u.up&&i<0?n="up":!0===u.down&&i>0&&(n="down")));let d=!1;if(void 0===n&&!1===o){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};n=t.event.lastDir,d=!0,"left"===n||"right"===n?(a.left-=l,s=0,l=0):(a.top-=i,r=0,i=0)}return{synthetic:d,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:a,direction:n,isFirst:t.event.isFirst,isFinal:!0===o,duration:Date.now()-t.event.time,distance:{x:s,y:r},offset:{x:l,y:i},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let Pt=0;const me=ht({name:"touch-pan",beforeMount(e,{value:t,modifiers:o}){if(!0!==o.mouse&&!0!==X.has.touch)return;function a(e,t){!0===o.mouse&&!0===t?Oe(e):(!0===o.stop&&de(e),!0===o.prevent&&Be(e))}const n={uid:"qvtp_"+Pt++,handler:t,modifiers:o,direction:_e(o),noop:be,mouseStart(e){Pe(e,n)&&gt(e)&&(J(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(e,!0))},touchStart(e){if(Pe(e,n)){const t=e.target;J(n,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),n.start(e)}},start(t,a){if(!0===X.is.firefox&&ce(e,!0),n.lastEvt=t,!0===a||!0===o.stop){if(!0!==n.direction.all&&(!0!==a||!0!==n.modifiers.mouseAllDir&&!0!==n.modifiers.mousealldir)){const e=-1!==t.type.indexOf("mouse")?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&Be(e),!0===t.cancelBubble&&de(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[n.uid]:t.qClonedBy.concat(n.uid)}),n.initialEvent={target:t.target,event:e}}de(t)}const{left:l,top:i}=ge(t);n.event={x:l,y:i,time:Date.now(),mouse:!0===a,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:i}},move(e){if(void 0===n.event)return;const t=ge(e),l=t.left-n.event.x,i=t.top-n.event.y;if(0===l&&0===i)return;n.lastEvt=e;const s=!0===n.event.mouse,r=()=>{let t;a(e,s),!0!==o.preserveCursor&&!0!==o.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===s&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_t(),n.styleCleanup=e=>{if(n.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===s){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===n.event.detected){!0!==n.event.isFirst&&a(e,n.event.mouse);const{payload:t,synthetic:o}=ve(e,n,!1);return void(void 0!==t&&(!1===n.handler(t)?n.end(e):(void 0===n.styleCleanup&&!0===n.event.isFirst&&r(),n.event.lastX=t.position.left,n.event.lastY=t.position.top,n.event.lastDir=!0===o?void 0:t.direction,n.event.isFirst=!1)))}if(!0===n.direction.all||!0===s&&(!0===n.modifiers.mouseAllDir||!0===n.modifiers.mousealldir))return r(),n.event.detected=!0,void n.move(e);const u=Math.abs(l),d=Math.abs(i);u!==d&&(!0===n.direction.horizontal&&u>d||!0===n.direction.vertical&&u<d||!0===n.direction.up&&u<d&&i<0||!0===n.direction.down&&u<d&&i>0||!0===n.direction.left&&u>d&&l<0||!0===n.direction.right&&u>d&&l>0?(n.event.detected=!0,n.move(e)):n.end(e,!0))},end(t,o){var a;if(void 0!==n.event){if(se(n,"temp"),!0===X.is.firefox&&ce(e,!1),!0===o)null==(a=n.styleCleanup)||a.call(n),!0!==n.event.detected&&void 0!==n.initialEvent&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(!0===n.event.detected){!0===n.event.isFirst&&n.handler(ve(void 0===t?n.lastEvt:t,n).payload);const{payload:e}=ve(void 0===t?n.lastEvt:t,n,!0),o=()=>{n.handler(e)};void 0!==n.styleCleanup?n.styleCleanup(o):o()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,!0===o.mouse){const t=!0===o.mouseCapture||!0===o.mousecapture?"Capture":"";J(n,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===X.has.touch&&J(n,"main",[[e,"touchstart","touchStart","passive"+(!0===o.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchpan;void 0!==o&&(t.oldValue!==t.value&&("function"!=typeof value&&o.end(),o.handler=t.value),o.direction=_e(t.modifiers))},beforeUnmount(e){var t;const o=e.__qtouchpan;void 0!==o&&(void 0!==o.event&&o.end(),se(o,"main"),se(o,"temp"),!0===X.is.firefox&&ce(e,!1),null==(t=o.styleCleanup)||t.call(o),delete e.__qtouchpan)}});function ee(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Yt(e,t,o){if(o<=t)return t;const a=o-t+1;let n=t+(e-t)%a;return n<t&&(n=a+n),0===n?0:n}function Qt(){let e=null;const t=E();function o(){null!==e&&(clearTimeout(e),e=null)}return yt(o),A(o),{removeTimeout:o,registerTimeout(a,n){o(),!1===ot(t)&&(e=setTimeout((()=>{e=null,a()}),n))}}}function Et(e,t,o){let a;function n(){void 0!==a&&(Te.remove(a),a=void 0)}return A((()=>{!0===e.value&&n()})),{removeFromHistory:n,addToHistory(){a={condition:()=>!0===o.value,handler:t},Te.add(a)}}}const Ht={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ot=["beforeShow","show","beforeHide","hide"];function Vt({showing:e,canShow:t,hideOnRouteChange:o,handleShow:a,handleHide:n,processOnMount:l}){const i=E(),{props:s,emit:r,proxy:u}=i;let d;function v(e){if(!0===s.disable||!0===(null==e?void 0:e.qAnchorHandled)||void 0!==t&&!0!==t(e))return;const o=void 0!==s["onUpdate:modelValue"];!0===o&&(r("update:modelValue",!0),d=e,N((()=>{d===e&&(d=void 0)}))),(null===s.modelValue||!1===o)&&c(e)}function c(t){!0!==e.value&&(e.value=!0,r("beforeShow",t),void 0!==a?a(t):r("show",t))}function f(e){if(!0===s.disable)return;const t=void 0!==s["onUpdate:modelValue"];!0===t&&(r("update:modelValue",!1),d=e,N((()=>{d===e&&(d=void 0)}))),(null===s.modelValue||!1===t)&&p(e)}function p(t){!1!==e.value&&(e.value=!1,r("beforeHide",t),void 0!==n?n(t):r("hide",t))}function m(t){!0===s.disable&&!0===t?void 0!==s["onUpdate:modelValue"]&&r("update:modelValue",!1):!0===t!==e.value&&(!0===t?c:p)(d)}S((()=>s.modelValue),m),void 0!==o&&!0===it(i)&&S((()=>u.$route.fullPath),(()=>{!0===o.value&&!0===e.value&&f()})),!0===l&&W((()=>{m(s.modelValue)}));const h={show:v,hide:f,toggle:function(t){!0===e.value?f(t):v(t)}};return Object.assign(u,h),h}function At(){let e;return{preventBodyScroll(t){t!==e&&(void 0!==e||!0===t)&&(e=t,bt(t))}}}const Qe=150,Gt=P({name:"QDrawer",inheritAttrs:!1,props:{...Ht,...pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ot,"onLayout","miniState"],setup(e,{slots:t,emit:o,attrs:a}){const n=E(),{proxy:{$q:l}}=n,i=we(e,l),{preventBodyScroll:s}=At(),{registerTimeout:r,removeTimeout:u}=Qt(),d=M(j,$);if(d===$)return console.error("QDrawer needs to be child of QLayout"),$;let c,f,p=null;const m=T("mobile"===e.behavior||"desktop"!==e.behavior&&d.totalWidth.value<=e.breakpoint),h=v((()=>!0===e.mini&&!0!==m.value)),g=v((()=>!0===h.value?e.miniWidth:e.width)),b=T(!0===e.showIfAbove&&!1===m.value||!0===e.modelValue),y=v((()=>!0!==e.persistent&&(!0===m.value||!0===K.value)));function w(e,t){if(B(),!1!==e&&d.animate(),re(0),!0===m.value){const e=d.instances[Q.value];!0===(null==e?void 0:e.belowBreakpoint)&&e.hide(!1),ue(1),!0!==d.isContainer.value&&s(!0)}else ue(0),!1!==e&&de(!1);r((()=>{!1!==e&&de(!0),!0!==t&&o("show",e)}),Qe)}function q(e,t){z(),!1!==e&&d.animate(),ue(0),re(P.value*g.value),fe(),!0!==t?r((()=>{o("hide",e)}),Qe):u()}const{show:x,hide:C}=Vt({showing:b,hideOnRouteChange:y,handleShow:w,handleHide:q}),{addToHistory:B,removeFromHistory:z}=Et(b,C,y),_={belowBreakpoint:m,hide:C},L=v((()=>"right"===e.side)),P=v((()=>(!0===l.lang.rtl?-1:1)*(!0===L.value?1:-1))),V=T(0),F=T(!1),H=T(!1),O=T(g.value*P.value),Q=v((()=>!0===L.value?"left":"right")),R=v((()=>!0===b.value&&!1===m.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:g.value:0)),I=v((()=>!0===e.overlay||!0===e.miniToOverlay||-1!==d.view.value.indexOf(L.value?"R":"L")||!0===l.platform.is.ios&&!0===d.isContainer.value)),X=v((()=>!1===e.overlay&&!0===b.value&&!1===m.value)),K=v((()=>!0===e.overlay&&!0===b.value&&!1===m.value)),U=v((()=>"fullscreen q-drawer__backdrop"+(!1===b.value&&!1===F.value?" hidden":""))),J=v((()=>({backgroundColor:`rgba(0,0,0,${.4*V.value})`}))),Z=v((()=>!0===L.value?"r"===d.rows.value.top[2]:"l"===d.rows.value.top[0])),Y=v((()=>!0===L.value?"r"===d.rows.value.bottom[2]:"l"===d.rows.value.bottom[0])),G=v((()=>{const e={};return!0===d.header.space&&!1===Z.value&&(!0===I.value?e.top=`${d.header.offset}px`:!0===d.header.space&&(e.top=`${d.header.size}px`)),!0===d.footer.space&&!1===Y.value&&(!0===I.value?e.bottom=`${d.footer.offset}px`:!0===d.footer.space&&(e.bottom=`${d.footer.size}px`)),e})),te=v((()=>{const e={width:`${g.value}px`,transform:`translateX(${O.value}px)`};return!0===m.value?e:Object.assign(e,G.value)})),oe=v((()=>"q-drawer__content fit "+(!0!==d.isContainer.value?"scroll":"overflow-auto"))),ae=v((()=>`q-drawer q-drawer--${e.side}`+(!0===H.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===i.value?" q-drawer--dark q-dark":"")+(!0===F.value?" no-transition":!0===b.value?"":" q-layout--prevent-focus")+(!0===m.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===h.value?"mini":"standard")+(!0===I.value||!0!==X.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===Z.value?" q-drawer--top-padding":"")))),ne=v((()=>{const t=!0===l.lang.rtl?e.side:Q.value;return[[me,ve,void 0,{[t]:!0,mouse:!0}]]})),le=v((()=>{const t=!0===l.lang.rtl?Q.value:e.side;return[[me,ce,void 0,{[t]:!0,mouse:!0}]]})),ie=v((()=>{const t=!0===l.lang.rtl?Q.value:e.side;return[[me,ce,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(){var t,o;t=m,o="mobile"===e.behavior||"desktop"!==e.behavior&&d.totalWidth.value<=e.breakpoint,t.value!==o&&(t.value=o)}function re(e){void 0===e?N((()=>{e=!0===b.value?0:g.value,re(P.value*e)})):(!0===d.isContainer.value&&!0===L.value&&(!0===m.value||Math.abs(e)===g.value)&&(e+=P.value*d.scrollbarWidth.value),O.value=e)}function ue(e){V.value=e}function de(e){const t=!0===e?"remove":!0!==d.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ve(e){if(!1!==b.value)return;const t=g.value,o=ee(e.distance.x,0,t);if(!0===e.isFinal)return o>=Math.min(75,t)==!0?x():(d.animate(),ue(0),re(P.value*t)),void(F.value=!1);re((!0===l.lang.rtl?!0!==L.value:L.value)?Math.max(t-o,0):Math.min(0,o-t)),ue(ee(o/t,0,1)),!0===e.isFirst&&(F.value=!0)}function ce(t){if(!0!==b.value)return;const o=g.value,a=t.direction===e.side,n=(!0===l.lang.rtl?!0!==a:a)?ee(t.distance.x,0,o):0;if(!0===t.isFinal)return Math.abs(n)<Math.min(75,o)==!0?(d.animate(),ue(1),re(0)):C(),void(F.value=!1);re(P.value*n),ue(ee(1-n/o,0,1)),!0===t.isFirst&&(F.value=!0)}function fe(){s(!1),de(!0)}function pe(t,o){d.update(e.side,t,o)}function he(t,o){pe("size",!0===t?e.miniWidth:o)}return S(m,(t=>{!0===t?(c=b.value,!0===b.value&&C(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==c&&(!0===b.value?(re(0),ue(0),fe()):x(!1))})),S((()=>e.side),((e,t)=>{d.instances[t]===_&&(d.instances[t]=void 0,d[t].space=!1,d[t].offset=0),d.instances[e]=_,d[e].size=g.value,d[e].space=X.value,d[e].offset=R.value})),S(d.totalWidth,(()=>{(!0===d.isContainer.value||!0!==document.qScrollPrevented)&&se()})),S((()=>e.behavior+e.breakpoint),se),S(d.isContainer,(e=>{!0===b.value&&s(!0!==e),!0===e&&se()})),S(d.scrollbarWidth,(()=>{re(!0===b.value?0:void 0)})),S(R,(e=>{pe("offset",e)})),S(X,(e=>{o("onLayout",e),pe("space",e)})),S(L,(()=>{re()})),S(g,(t=>{re(),he(e.miniToOverlay,t)})),S((()=>e.miniToOverlay),(e=>{he(e,g.value)})),S((()=>l.lang.rtl),(()=>{re()})),S((()=>e.mini),(()=>{e.noMiniAnimation||!0===e.modelValue&&(null!==p&&clearTimeout(p),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),H.value=!0,p=setTimeout((()=>{var e,t;p=null,H.value=!1,null==(t=null==(e=null==n?void 0:n.proxy)?void 0:e.$el)||t.classList.remove("q-drawer--mini-animate")}),150),d.animate())})),S(h,(e=>{o("miniState",e)})),d.instances[e.side]=_,he(e.miniToOverlay,g.value),pe("space",X.value),pe("offset",R.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===b.value&&void 0!==e["onUpdate:modelValue"]&&o("update:modelValue",!0),W((()=>{o("onLayout",X.value),o("miniState",h.value),c=!0===e.showIfAbove;const t=()=>{(!0===b.value?w:q)(!1,!0)};0===d.totalWidth.value?f=S(d.totalWidth,(()=>{f(),f=void 0,!1===b.value&&!0===e.showIfAbove&&!1===m.value?x(!1):t()})):N(t)})),A((()=>{null==f||f(),null!==p&&(clearTimeout(p),p=null),!0===b.value&&fe(),d.instances[e.side]===_&&(d.instances[e.side]=void 0,pe("size",0),pe("offset",0),pe("space",!1))})),()=>{const o=[];!0===m.value&&(!1===e.noSwipeOpen&&o.push(pt(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ne.value)),o.push(xe("div",{ref:"backdrop",class:U.value,style:J.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===b.value,(()=>ie.value))));const n=!0===h.value&&void 0!==t.mini,l=[k("div",{...a,key:""+n,class:[oe.value,a.class]},!0===n?t.mini():D(t.default))];return!0===e.elevated&&!0===b.value&&l.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(xe("aside",{ref:"content",class:ae.value,style:te.value},l,"contentclose",!0!==e.noSwipeClose&&!0===m.value,(()=>le.value))),k("div",{class:"q-drawer-container"},o)}}}),Jt=P({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:o}}=E(),a=M(j,$);if(a===$)return console.error("QPage needs to be a deep child of QLayout"),$;if(M(Ve,$)===$)return console.error("QPage needs to be child of QPageContainer"),$;const n=v((()=>{const t=(!0===a.header.space?a.header.size:0)+(!0===a.footer.space?a.footer.size:0);if("function"==typeof e.styleFn){const n=!0===a.isContainer.value?a.containerHeight.value:o.screen.height;return e.styleFn(t,n)}return{minHeight:!0===a.isContainer.value?a.containerHeight.value-t+"px":0===o.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":o.screen.height-t+"px"}})),l=v((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>k("main",{class:l.value,style:n.value},D(t.default))}}),Zt=P({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:o}}=E(),a=M(j,$);if(a===$)return console.error("QPageContainer needs to be child of QLayout"),$;Ae(Ve,!0);const n=v((()=>{const e={};return!0===a.header.space&&(e.paddingTop=`${a.header.size}px`),!0===a.right.space&&(e["padding"+(!0===o.lang.rtl?"Left":"Right")]=`${a.right.size}px`),!0===a.footer.space&&(e.paddingBottom=`${a.footer.size}px`),!0===a.left.space&&(e["padding"+(!0===o.lang.rtl?"Right":"Left")]=`${a.left.size}px`),e}));return()=>k("div",{class:"q-page-container",style:n.value},D(t.default))}}),ea=P({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=E(),n=M(j,$);if(n===$)return console.error("QFooter needs to be child of QLayout"),$;const l=T(parseInt(e.heightHint,10)),i=T(!0),s=T(!0===ye.value||!0===n.isContainer.value?0:window.innerHeight),r=v((()=>!0===e.reveal||-1!==n.view.value.indexOf("F")||a.platform.is.ios&&!0===n.isContainer.value)),u=v((()=>!0===n.isContainer.value?n.containerHeight.value:s.value)),d=v((()=>{if(!0!==e.modelValue)return 0;if(!0===r.value)return!0===i.value?l.value:0;const t=n.scroll.value.position+u.value+l.value-n.height.value;return t>0?t:0})),c=v((()=>!0!==e.modelValue||!0===r.value&&!0!==i.value)),f=v((()=>!0===e.modelValue&&!0===c.value&&!0===e.reveal)),p=v((()=>"q-footer q-layout__section--marginal "+(!0===r.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===c.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==r.value?" hidden":""):""))),m=v((()=>{const e=n.rows.value.bottom,t={};return"l"===e[0]&&!0===n.left.space&&(t[!0===a.lang.rtl?"right":"left"]=`${n.left.size}px`),"r"===e[2]&&!0===n.right.space&&(t[!0===a.lang.rtl?"left":"right"]=`${n.right.size}px`),t}));function h(e,t){n.update("footer",e,t)}function g(e,t){e.value!==t&&(e.value=t)}function b({height:e}){g(l,e),h("size",e)}function y(e){!0===f.value&&g(i,!0),o("focusin",e)}S((()=>e.modelValue),(e=>{h("space",e),g(i,!0),n.animate()})),S(d,(e=>{h("offset",e)})),S((()=>e.reveal),(t=>{!1===t&&g(i,e.modelValue)})),S(i,(e=>{n.animate(),o("reveal",e)})),S([l,n.scroll,n.height],(function(){if(!0!==e.reveal)return;const{direction:t,position:o,inflectionPoint:a}=n.scroll.value;g(i,"up"===t||o-a<100||n.height.value-u.value-o-l.value<300)})),S((()=>a.screen.height),(e=>{!0!==n.isContainer.value&&g(s,e)}));const w={};return n.instances.footer=w,!0===e.modelValue&&h("size",l.value),h("space",e.modelValue),h("offset",d.value),A((()=>{n.instances.footer===w&&(n.instances.footer=void 0,h("size",0),h("offset",0),h("space",!1))})),()=>{const o=He(t.default,[k(te,{debounce:0,onResize:b})]);return!0===e.elevated&&o.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),k("footer",{class:p.value,style:m.value,onFocusin:y},o)}}}),ta=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=E(),n=T(null),l=T(a.screen.height),i=T(!0===e.container?0:a.screen.width),s=T({position:0,direction:"down",inflectionPoint:0}),r=T(0),u=T(!0===ye.value?0:fe()),d=v((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),c=v((()=>!1===e.container?{minHeight:a.screen.height+"px"}:null)),f=v((()=>0!==u.value?{[!0===a.lang.rtl?"left":"right"]:`${u.value}px`}:null)),p=v((()=>0!==u.value?{[!0===a.lang.rtl?"right":"left"]:0,[!0===a.lang.rtl?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null));function m(t){if(!0===e.container||!0!==document.qScrollPrevented){const a={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};s.value=a,void 0!==e.onScroll&&o("scroll",a)}}function h(t){const{height:a,width:n}=t;let s=!1;l.value!==a&&(s=!0,l.value=a,void 0!==e.onScrollHeight&&o("scrollHeight",a),b()),i.value!==n&&(s=!0,i.value=n),!0===s&&void 0!==e.onResize&&o("resize",t)}function g({height:e}){r.value!==e&&(r.value=e,b())}function b(){if(!0===e.container){const e=l.value>r.value?fe():0;u.value!==e&&(u.value=e)}}let y=null;const w={instances:{},view:v((()=>e.view)),isContainer:v((()=>e.container)),rootRef:n,height:l,containerHeight:r,scrollbarWidth:u,totalWidth:v((()=>i.value+u.value)),rows:v((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:s,animate(){null!==y?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout((()=>{y=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,o){w[e][t]=o}};if(Ae(j,w),fe()>0){let t=function(){l=null,i.classList.remove("hide-scrollbar")},o=function(){if(null===l){if(i.scrollHeight>a.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(t,300)},n=function(e){null!==l&&"remove"===e&&(clearTimeout(l),t()),window[`${e}EventListener`]("resize",o)},l=null;const i=document.body;S((()=>!0!==e.container?"add":"remove"),n),!0!==e.container&&n("add"),wt((()=>{n("remove")}))}return()=>{const o=He(t.default,[k(Tt,{onScroll:m}),k(te,{onResize:h})]),a=k("div",{class:d.value,style:c.value,ref:!0===e.container?void 0:n,tabindex:-1},o);return!0===e.container?k("div",{class:"q-layout-container overflow-hidden",ref:n},[k(te,{onResize:g}),k("div",{class:"absolute-full",style:f.value},[k("div",{class:"scroll",style:p.value},[a])])]):a}}});function Ft(){return M(qt)}const aa=Ct({__name:"ThemeSwitch",setup(e){const t=Ft(),o=v((()=>t.dark.isActive?"fas fa-sun":"fas fa-moon"));function a(){const e=t.dark.isActive;t.dark.set(!e),localStorage.setItem("theme",e?"light":"dark")}const n=localStorage.getItem("theme");return"dark"===n?t.dark.set(!0):"light"===n&&t.dark.set(!1),"dark"===localStorage.getItem("theme")&&t.dark.set(!0),(e,t)=>(kt(),St(lt,{onClick:a,icon:o.value,color:"primary",size:"sm","aria-label":"Cambiar tema"},null,8,["icon"]))}});export{jt as Q,me as T,aa as _,Nt as a,Wt as b,It as c,Gt as d,Xt as e,Ut as f,Kt as g,Zt as h,Jt as i,ea as j,ta as k,we as l,Ot as m,Ht as n,Vt as o,_t as p,Qt as q,Yt as r,_e as s,Pe as t,pe as u,te as v,Et as w,At as x,ee as y,Tt as z};
