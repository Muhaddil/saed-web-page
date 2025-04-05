import{P as ve,h as V,B as he,j as U,k as f,r as x,ad as be,ab as ye,i as v,g as J,ae as ke,af as we,ag as xe,H as X,C as pe,l as R,T as j,M as qe}from"./main-D2MmPmPc.js";import{l as Se,m as Te,p as Pe,n as Ce,v as Be,w as Ee}from"./ThemeSwitch.vue_vue_type_script_setup_true_lang-D7GZbd7P.js";import{v as _e,j as $,h as Fe}from"./QBtn-BcQaoSPB.js";import{b as I,c as $e,a as De}from"./focus-manager-zjdVGI5d.js";function He(){let e;const t=U();function o(){e=void 0}return ve(o),V(o),{removeTick:o,registerTick(o){e=o,he((()=>{e===o&&(!1===_e(t)&&e(),e=void 0)}))}}}const Me={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Oe(e,t=()=>{},o=()=>{}){return{transitionProps:f((()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}})),transitionStyle:f((()=>`--q-transition-duration: ${e.transitionDuration}ms`))}}const D=[];function Je(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return $(e)}else if(!0===e.__qPortal){const o=$(e);return"QPopupProxy"===(null==o?void 0:o.$options.name)?(e.hide(t),o):e}e=$(e)}while(null!=e)}const ze=J({name:"QPortal",setup:(e,{slots:t})=>()=>t.default()});function Le(e){for(e=e.parent;null!=e;){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function Qe(e,t,o,n){const i=x(!1),a=x(!1);let l=null;const s={},r="dialog"===n&&Le(e);function u(t){if(a.value=!1,!0!==t)return;I(s),i.value=!1;const o=D.indexOf(e.proxy);-1!==o&&D.splice(o,1),null!==l&&(xe(l),l=null)}return be((()=>{u(!0)})),e.proxy.__qPortal=!0,ye(e.proxy,"contentEl",(()=>t.value)),{showPortal:function(t){if(!0===t)return I(s),void(a.value=!0);a.value=!1,!1===i.value&&(!1===r&&null===l&&(l=we(!1,n)),i.value=!0,D.push(e.proxy),$e(s))},hidePortal:u,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>!0===r?o():!0===i.value?[v(ke,{to:l},v(ze,o))]:void 0}}const h=[];let y;function Ae(e){y=27===e.keyCode}function Ke(){!0===y&&(y=!1)}function Re(e){!0===y&&(y=!1,!0===pe(e,27)&&h[h.length-1](e))}function Y(e){window[e]("keydown",Ae),window[e]("blur",Ke),window[e]("keyup",Re),y=!1}function je(e){!0===X.is.desktop&&(h.push(e),1===h.length&&Y("addEventListener"))}function G(e){const t=h.indexOf(e);-1!==t&&(h.splice(t,1),0===h.length&&Y("removeEventListener"))}const b=[];function Z(e){b[b.length-1](e)}function Ie(e){!0===X.is.desktop&&(b.push(e),1===b.length&&document.body.addEventListener("focusin",Z))}function W(e){const t=b.indexOf(e);-1!==t&&(b.splice(t,1),0===b.length&&document.body.removeEventListener("focusin",Z))}let T=0;const Ge={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},N={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Xe=J({name:"QDialog",inheritAttrs:!1,props:{...Te,...Me,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Se,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const i=U(),a=x(null),l=x(!1),s=x(!1);let r,u,c=null,d=null;const m=f((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:p}=Ee(),{registerTimeout:h}=Pe(),{registerTick:g,removeTick:y}=He(),{transitionProps:b,transitionStyle:w}=Oe(e,(()=>N[e.position][0]),(()=>N[e.position][1])),k=f((()=>w.value+(void 0!==e.backdropFilter?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:""))),{showPortal:q,hidePortal:_,portalIsAccessible:S,renderPortal:B}=Qe(i,a,(function(){return v("div",{role:"dialog","aria-modal":!0===C.value?"true":"false",...n,class:F.value},[v(j,{name:"q-transition--fade",appear:!0},(()=>!0===C.value?v("div",{class:"q-dialog__backdrop fixed-full",style:k.value,"aria-hidden":"true",tabindex:-1,onClick:A}):null)),v(j,b.value,(()=>!0===l.value?v("div",{ref:a,class:E.value,style:w.value,tabindex:-1,...H.value},Fe(t.default)):null))])}),"dialog"),{hide:$}=Ce({showing:l,hideOnRouteChange:m,handleShow:function(t){var n;D(),d=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,z(e.maximized),q(),s.value=!0,!0!==e.noFocus?(null==(n=document.activeElement)||n.blur(),g(Q)):y(),h((()=>{if(!0===i.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:o}=window,n=void 0!==window.visualViewport?window.visualViewport.height:o;e>0&&t>n/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-n,t>=o?1/0:Math.ceil(document.scrollingElement.scrollTop+t-n/2))),document.activeElement.scrollIntoView()}u=!0,a.value.click(),u=!1}q(!0),s.value=!1,o("show",t)}),e.transitionDuration)},handleHide:function(t){y(),P(),L(!0),s.value=!0,_(),null!==d&&(((0===(null==t?void 0:t.type.indexOf("key"))?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),h((()=>{_(!0),s.value=!1,o("hide",t)}),e.transitionDuration)},processOnMount:!0}),{addToHistory:D,removeFromHistory:P}=Be(l,$,m),E=f((()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${!0===e.maximized?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ge[e.position]}`+(!0===s.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),C=f((()=>!0===l.value&&!0!==e.seamless)),H=f((()=>!0===e.autoClose?{onClick:M}:{})),F=f((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===C.value?"modal":"seamless"),n.class]));function Q(e){De((()=>{let t=a.value;if(null!==t){if(void 0!==e){const o=t.querySelector(e);if(null!==o)return void o.focus({preventScroll:!0})}!0!==t.contains(document.activeElement)&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))}}))}function O(e){e&&"function"==typeof e.focus?e.focus({preventScroll:!0}):Q(),o("shake");const t=a.value;null!==t&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),null!==c&&clearTimeout(c),c=setTimeout((()=>{c=null,null!==a.value&&(t.classList.remove("q-animate--scale"),Q())}),170))}function I(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&O():(o("escapeKey"),$()))}function L(t){null!==c&&(clearTimeout(c),c=null),(!0===t||!0===l.value)&&(z(!1),!0!==e.seamless&&(p(!1),W(J),G(I))),!0!==t&&(d=null)}function z(e){!0===e?!0!==r&&(T<1&&document.body.classList.add("q-body--dialog"),T++,r=!0):!0===r&&(T<2&&document.body.classList.remove("q-body--dialog"),T--,r=!1)}function M(e){!0!==u&&($(e),o("click",e))}function A(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?$(t):!0!==e.noShake&&O()}function J(t){!0!==e.allowFocusOutside&&!0===S.value&&!0!==qe(a.value,t.target)&&Q('[tabindex]:not([tabindex="-1"])')}return R((()=>e.maximized),(e=>{!0===l.value&&z(e)})),R(C,(e=>{p(e),!0===e?(Ie(J),je(I)):(W(J),G(I))})),Object.assign(i.proxy,{focus:Q,shake:O,__updateRefocusTarget(e){d=e||null}}),V(L),B}});export{Xe as Q,He as a,Oe as b,Qe as c,je as d,Ie as e,W as f,Je as g,D as p,G as r,Me as u};
