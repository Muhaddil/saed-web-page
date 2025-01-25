import{u as ye,h as qe,a as U,Q as ie}from"./QBtn-D7VDNg9C.js";import{u as pe,k as xe,l as Me,m as Ae,n as Ee,e as W,f as H,Q as _e,a as Ce,b as Te,c as Fe,d as Ie,g as De,h as Le,_ as Ve,j as Re,i as je}from"./ThemeSwitch.vue_vue_type_script_setup_true_lang-DlMRsmqJ.js";import{u as Pe,a as Qe,b as ze,c as Be,f as fe,d as Ne,e as $e,g as Oe,h as He,i as Ke,Q as me}from"./QItemLabel-TcJKc-UQ.js";import{r as K,g as $,n as te,s as Ye,h as q,i as le,j as ge,k as ce,l as Ze,m as T,p as Ue,q as de,T as Ge,u as We,v as Xe,x as Je,y as ea,d as aa,z as ta,o as oe,c as na,w as k,a as c,b as w,e as G,f as re,A as oa,F as sa,t as la,B as ia,_ as ra}from"./main-B4qL4dZp.js";import{a as ua}from"./focus-manager-zjdVGI5d.js";import{Q as ve,a as he}from"./QCard-u6U4rbbJ.js";import{_ as ca}from"./SAEDLogo-D9ZtglGg.js";const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},se={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},we=Object.keys(se);we.forEach((e=>{se[e].regex=new RegExp(se[e].pattern)}));const da=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+we.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,F="",fa={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ma(e,a,n,o){let t,s,l,i,r,u;const c=K(null),d=K(function(){if(m(),!0===c.value){const a=f(h(e.modelValue));return!1!==e.fillMask?b(a):a}return e.modelValue}());function p(e){if(e<t.length)return t.slice(-e);let a="",n=t;const o=n.indexOf(F);if(-1!==o){for(let o=e-n.length;o>0;o--)a+=F;n=n.slice(0,o)+a+n.slice(o)}return n}function m(){if(c.value=void 0!==e.mask&&0!==e.mask.length&&(!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)),!1===c.value)return i=void 0,t="",void(s="");const a=void 0===be[e.mask]?e.mask:be[e.mask],n="string"==typeof e.fillMask&&0!==e.fillMask.length?e.fillMask.slice(0,1):"_",o=n.replace(Se,"\\$&"),r=[],u=[],d=[];let p=!0===e.reverseFillMask,m="",v="";a.replace(da,((e,a,n,o,t)=>{if(void 0!==o){const e=se[o];d.push(e),v=e.negate,!0===p&&(u.push("(?:"+v+"+)?("+e.pattern+"+)?(?:"+v+"+)?("+e.pattern+"+)?"),p=!1),u.push("(?:"+v+"+)?("+e.pattern+")?")}else if(void 0!==n)m="\\"+("\\"===n?"":n),d.push(n),r.push("([^"+m+"]+)?"+m+"?");else{const e=void 0!==a?a:t;m="\\"===e?"\\\\\\\\":e.replace(Se,"\\\\$&"),d.push(e),r.push("([^"+m+"]+)?"+m+"?")}}));const g=new RegExp("^"+r.join("")+"("+(""===m?".":"[^"+m+"]")+"+)?"+(""===m?"":"["+m+"]*")+"$"),f=u.length-1,h=u.map(((a,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+o+"*"+a):n===f?new RegExp("^"+a+"("+(""===v?".":v)+"+)?"+(!0===e.reverseFillMask?"$":o+"*")):new RegExp("^"+a)));l=d,i=a=>{const n=g.exec(!0===e.reverseFillMask?a:a.slice(0,d.length+1));null!==n&&(a=n.slice(1).join(""));const o=[],t=h.length;for(let e=0,n=a;e<t;e++){const a=h[e].exec(n);if(null===a)break;n=n.slice(a.shift().length),o.push(...a)}return 0!==o.length?o.join(""):a},t=d.map((e=>"string"==typeof e?e:F)).join(""),s=t.split(F).join(n)}function v(a,l,i){const u=o.value,c=u.selectionEnd,p=u.value.length-c,v=h(a);!0===l&&m();const w=f(v),S=!1!==e.fillMask?b(w):w,q=d.value!==S;u.value!==S&&(u.value=S),!0===q&&(d.value=S),document.activeElement===u&&te((()=>{if(S!==s)if("insertFromPaste"!==i||!0===e.reverseFillMask)if(-1===["deleteContentBackward","deleteContentForward"].indexOf(i))if(!0===e.reverseFillMask)if(!0===q){const e=Math.max(0,S.length-(S===s?0:Math.min(w.length,p+1)));1===e&&1===c?u.setSelectionRange(e,e,"forward"):g.rightReverse(u,e)}else{const e=S.length-p;u.setSelectionRange(e,e,"backward")}else if(!0===q){const e=Math.max(0,t.indexOf(F),Math.min(w.length,c)-1);g.right(u,e)}else{const e=c-1;g.right(u,e)}else{const a=!0===e.reverseFillMask?0===c?S.length>w.length?1:0:Math.max(0,S.length-(S===s?0:Math.min(w.length,p)+1))+1:c;u.setSelectionRange(a,a,"forward")}else{const e=u.selectionEnd;let a=c-1;for(let n=r;n<=a&&n<e;n++)t[n]!==F&&a++;g.right(u,a)}else{const a=!0===e.reverseFillMask?s.length:0;u.setSelectionRange(a,a,"forward")}}));const y=!0===e.unmaskedValue?h(S):S;String(e.modelValue)!==y&&(null!==e.modelValue||""!==y)&&n(y,!0)}$((()=>e.type+e.autogrow),m),$((()=>e.mask),(n=>{if(void 0!==n)v(d.value,!0);else{const n=h(d.value);m(),e.modelValue!==n&&a("update:modelValue",n)}})),$((()=>e.fillMask+e.reverseFillMask),(()=>{!0===c.value&&v(d.value,!0)})),$((()=>e.unmaskedValue),(()=>{!0===c.value&&v(d.value)}));const g={left(e,a){const n=-1===t.slice(a-1).indexOf(F);let o=Math.max(0,a-1);for(;o>=0;o--)if(t[o]===F){a=o,!0===n&&a++;break}if(o<0&&void 0!==t[a]&&t[a]!==F)return g.right(e,0);a>=0&&e.setSelectionRange(a,a,"backward")},right(e,a){const n=e.value.length;let o=Math.min(n,a+1);for(;o<=n;o++){if(t[o]===F){a=o;break}t[o-1]===F&&(a=o)}if(o>n&&void 0!==t[a-1]&&t[a-1]!==F)return g.left(e,n);e.setSelectionRange(a,a,"forward")},leftReverse(e,a){const n=p(e.value.length);let o=Math.max(0,a-1);for(;o>=0;o--){if(n[o-1]===F){a=o;break}if(n[o]===F&&(a=o,0===o))break}if(o<0&&void 0!==n[a]&&n[a]!==F)return g.rightReverse(e,0);a>=0&&e.setSelectionRange(a,a,"backward")},rightReverse(e,a){const n=e.value.length,o=p(n),t=-1===o.slice(0,a+1).indexOf(F);let s=Math.min(n,a+1);for(;s<=n;s++)if(o[s-1]===F){(a=s)>0&&!0===t&&a--;break}if(s>n&&void 0!==o[a-1]&&o[a-1]!==F)return g.leftReverse(e,n);e.setSelectionRange(a,a,"forward")}};function f(a){if(null==a||""===a)return"";if(!0===e.reverseFillMask)return function(e){const a=l,n=t.indexOf(F);let o=e.length-1,s="";for(let t=a.length-1;t>=0&&-1!==o;t--){const l=a[t];let i=e[o];if("string"==typeof l)s=l+s,i===l&&o--;else{if(void 0===i||!l.regex.test(i))return s;do{s=(void 0!==l.transform?l.transform(i):i)+s,o--,i=e[o]}while(n===t&&void 0!==i&&l.regex.test(i))}}return s}(a);const n=l;let o=0,s="";for(let e=0;e<n.length;e++){const t=a[o],l=n[e];if("string"==typeof l)s+=l,t===l&&o++;else{if(void 0===t||!l.regex.test(t))return s;s+=void 0!==l.transform?l.transform(t):t,o++}}return s}function h(e){return"string"!=typeof e||void 0===i?"number"==typeof e?i(""+e):e:i(e)}function b(a){return s.length-a.length<=0?a:!0===e.reverseFillMask&&0!==a.length?s.slice(0,-a.length)+a:a+s.slice(a.length)}return{innerValue:d,hasMask:c,moveCursorForPaste:function(e,a,n){const o=f(h(e.value));a=Math.max(0,t.indexOf(F),Math.min(o.length,a)),r=a,e.setSelectionRange(a,n,"forward")},updateMaskValue:v,onMaskedKeydown:function(n){if(a("keydown",n),!0===Ye(n)||!0===n.altKey)return;const t=o.value,s=t.selectionStart,l=t.selectionEnd;if(n.shiftKey||(u=void 0),37===n.keyCode||39===n.keyCode){n.shiftKey&&void 0===u&&(u="forward"===t.selectionDirection?s:l);const a=g[(39===n.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];if(n.preventDefault(),a(t,u===s?l:s),n.shiftKey){const e=t.selectionStart;t.setSelectionRange(Math.min(u,e),Math.max(u,e),"forward")}}else 8===n.keyCode&&!0!==e.reverseFillMask&&s===l?(g.left(t,s),t.setSelectionRange(t.selectionStart,l,"backward")):46===n.keyCode&&!0===e.reverseFillMask&&s===l&&(g.rightReverse(t,l),t.setSelectionRange(s,t.selectionEnd,"forward"))},onMaskedClick:function(e){a("click",e),u=void 0}}}function ga(e,a){return q((()=>{if("file"===e.type)return function(){const a=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(a)===a&&("length"in a?Array.from(a):[a]).forEach((a=>{e.items.add(a)})),{files:e.files}}catch{return{files:void 0}}}()}))}const va=le({name:"QInput",inheritAttrs:!1,props:{...Pe,...fa,...Qe,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ze,"paste","change","keydown","click","animationend"],setup(e,{emit:a,attrs:n}){const{proxy:o}=de(),{$q:t}=o,s={};let l,i,r,u=NaN,c=null;const d=K(null),p=Be(e),{innerValue:m,hasMask:v,moveCursorForPaste:g,updateMaskValue:f,onMaskedKeydown:h,onMaskedClick:b}=ma(e,a,D,d),w=ga(e),S=q((()=>fe(m.value))),y=Oe(F),k=Ne({changeEvent:!0}),x=q((()=>"textarea"===e.type||!0===e.autogrow)),A=q((()=>!0===x.value||["text","search","url","tel","password"].includes(e.type))),E=q((()=>{const a={...k.splitAttrs.listeners.value,onInput:F,onPaste:_,onChange:L,onBlur:z,onFocus:ge};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=y,!0===v.value&&(a.onKeydown=h,a.onClick=b),!0===e.autogrow&&(a.onAnimationend=C),a})),M=q((()=>{const a={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:p.value,...k.splitAttrs.attributes.value,id:k.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===x.value&&(a.type=e.type),!0===e.autogrow&&(a.rows=1),a}));function _(n){if(!0===v.value&&!0!==e.reverseFillMask){const e=n.target;g(e,e.selectionStart,e.selectionEnd)}a("paste",n)}function F(n){if(!n||!n.target)return;if("file"===e.type)return void a("update:modelValue",n.target.files);const o=n.target.value;if(!0!==n.target.qComposing){if(!0===v.value)f(o,!1,n.inputType);else if(D(o),!0===A.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:a}=n.target;void 0!==e&&void 0!==a&&te((()=>{n.target===document.activeElement&&0===o.indexOf(n.target.value)&&n.target.setSelectionRange(e,a)}))}!0===e.autogrow&&j()}else s.value=o}function C(e){a("animationend",e),j()}function D(n,o){r=()=>{c=null,"number"!==e.type&&!0===s.hasOwnProperty("value")&&delete s.value,e.modelValue!==n&&u!==n&&(u=n,!0===o&&(i=!0),a("update:modelValue",n),te((()=>{u===n&&(u=NaN)}))),r=void 0},"number"===e.type&&(l=!0,s.value=n),void 0!==e.debounce?(null!==c&&clearTimeout(c),s.value=n,c=setTimeout(r,e.debounce)):r()}function j(){requestAnimationFrame((()=>{const e=d.value;if(null!==e){const a=e.parentNode.style,{scrollTop:n}=e,{overflowY:o,maxHeight:s}=!0===t.platform.is.firefox?{}:window.getComputedStyle(e),l=void 0!==o&&"scroll"!==o;!0===l&&(e.style.overflowY="hidden"),a.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.height=e.scrollHeight+"px",!0===l&&(e.style.overflowY=parseInt(s,10)<e.scrollHeight?"auto":"hidden"),a.marginBottom="",e.scrollTop=n}}))}function L(e){y(e),null!==c&&(clearTimeout(c),c=null),void 0!==r&&r(),a("change",e.target.value)}function z(a){void 0!==a&&ge(a),null!==c&&(clearTimeout(c),c=null),void 0!==r&&r(),l=!1,i=!1,delete s.value,"file"!==e.type&&setTimeout((()=>{null!==d.value&&(d.value.value=void 0!==m.value?m.value:"")}))}function V(){return!0===s.hasOwnProperty("value")?s.value:void 0!==m.value?m.value:""}$((()=>e.type),(()=>{d.value&&(d.value.value=e.modelValue)})),$((()=>e.modelValue),(a=>{if(!0===v.value){if(!0===i&&(i=!1,String(a)===u))return;f(a)}else m.value!==a&&(m.value=a,"number"===e.type&&!0===s.hasOwnProperty("value")&&(!0===l?l=!1:delete s.value));!0===e.autogrow&&te(j)})),$((()=>e.autogrow),(e=>{!0===e?te(j):null!==d.value&&n.rows>0&&(d.value.style.height="auto")})),$((()=>e.dense),(()=>{!0===e.autogrow&&te(j)})),ce((()=>{z()})),Ze((()=>{!0===e.autogrow&&j()})),Object.assign(k,{innerValue:m,fieldClass:q((()=>"q-"+(!0===x.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:q((()=>"file"!==e.type&&"string"==typeof e.shadowText&&0!==e.shadowText.length)),inputRef:d,emitValue:D,hasValue:S,floatingLabel:q((()=>!0===S.value&&("number"!==e.type||!1===isNaN(m.value))||fe(e.displayValue))),getControl:()=>T(!0===x.value?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...M.value,...E.value,..."file"!==e.type?{value:V()}:w.value}),getShadowControl:()=>T("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===x.value?"":" text-no-wrap")},[T("span",{class:"invisible"},V()),T("span",e.shadowText)])});const I=$e(k);return Object.assign(o,{focus:function(){ua((()=>{const e=document.activeElement;null!==d.value&&d.value!==e&&(null===e||e.id!==k.targetUid.value)&&d.value.focus({preventScroll:!0})}))},select:function(){null!==d.value&&d.value.select()},getNativeElement:()=>d.value}),Ue(o,"nativeEl",(()=>d.value)),I}}),ha=le({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:a,emit:n}){let o,t,s,l,i=!1,r=null,u=null;function c(){o&&o(),o=null,i=!1,null!==r&&(clearTimeout(r),r=null),null!==u&&(clearTimeout(u),u=null),void 0!==t&&t.removeEventListener("transitionend",s),s=null}function d(a,n,t){void 0!==n&&(a.style.height=`${n}px`),a.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,o=t}function p(e,a){e.style.overflowY=null,e.style.height=null,e.style.transition=null,c(),a!==l&&n(a)}function m(a,n){let o=0;t=a,!0===i?(c(),o=a.offsetHeight===a.scrollHeight?0:void 0):(l="hide",a.style.overflowY="hidden"),d(a,o,n),r=setTimeout((()=>{r=null,a.style.height=`${a.scrollHeight}px`,s=e=>{u=null,(Object(e)!==e||e.target===a)&&p(a,"show")},a.addEventListener("transitionend",s),u=setTimeout(s,1.1*e.duration)}),100)}function v(a,n){let o;t=a,!0===i?c():(l="show",a.style.overflowY="hidden",o=a.scrollHeight),d(a,o,n),r=setTimeout((()=>{r=null,a.style.height=0,s=e=>{u=null,(Object(e)!==e||e.target===a)&&p(a,"hide")},a.addEventListener("transitionend",s),u=setTimeout(s,1.1*e.duration)}),100)}return ce((()=>{!0===i&&c()})),()=>T(Ge,{css:!1,appear:e.appear,onEnter:m,onLeave:v},a.default)}}),ba={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ue={xs:2,sm:4,md:8,lg:16,xl:24},ke=le({name:"QSeparator",props:{...pe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=de(),n=xe(e,a.proxy.$q),o=q((()=>!0===e.vertical?"vertical":"horizontal")),t=q((()=>` q-separator--${o.value}`)),s=q((()=>!1!==e.inset?`${t.value}-${ba[e.inset]}`:"")),l=q((()=>`q-separator${t.value}${s.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),i=q((()=>{const a={};if(void 0!==e.size&&(a[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${ue.md}px`:e.spaced in ue?`${ue[e.spaced]}px`:e.spaced,o=!0===e.vertical?["Left","Right"]:["Top","Bottom"];a[`margin${o[0]}`]=a[`margin${o[1]}`]=n}return a}));return()=>T("hr",{class:l.value,style:i.value,"aria-orientation":o.value})}}),J=We({}),Sa=Object.keys(ye),ka=le({name:"QExpansionItem",props:{...ye,...Me,...pe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ae,"click","afterShow","afterHide"],setup(e,{slots:a,emit:n}){const{proxy:{$q:o}}=de(),t=xe(e,o),s=K(null!==e.modelValue?e.modelValue:e.defaultOpened),l=K(null),i=He(),{show:r,hide:u,toggle:c}=Ee({showing:s});let d,p;const m=q((()=>`q-expansion-item q-item-type q-expansion-item--${!0===s.value?"expanded":"collapsed"} q-expansion-item--${!0===e.popup?"popup":"standard"}`)),v=q((()=>void 0===e.contentInsetLevel?null:{["padding"+(!0===o.lang.rtl?"Right":"Left")]:56*e.contentInsetLevel+"px"})),g=q((()=>!0!==e.disable&&(void 0!==e.href||void 0!==e.to&&null!==e.to&&""!==e.to))),f=q((()=>{const a={};return Sa.forEach((n=>{a[n]=e[n]})),a})),h=q((()=>!0===g.value||!0!==e.expandIconToggle)),b=q((()=>void 0!==e.expandedIcon&&!0===s.value?e.expandedIcon:e.expandIcon||o.iconSet.expansionItem[!0===e.denseToggle?"denseIcon":"icon"])),w=q((()=>!0!==e.disable&&(!0===g.value||!0===e.expandIconToggle))),S=q((()=>({expanded:!0===s.value,detailsId:i.value,toggle:c,show:r,hide:u}))),y=q((()=>{const a=void 0!==e.toggleAriaLabel?e.toggleAriaLabel:o.lang.label[!0===s.value?"collapse":"expand"](e.label);return{role:"button","aria-expanded":!0===s.value?"true":"false","aria-controls":i.value,"aria-label":a}}));function k(e){!0!==g.value&&c(e),n("click",e)}function x(e){13===e.keyCode&&A(e,!0)}function A(e,a){!0!==a&&null!==l.value&&l.value.focus(),c(e),ea(e)}function E(){n("afterShow")}function M(){n("afterHide")}function _(){void 0===d&&(d=Ke()),!0===s.value&&(J[e.group]=d);const a=$(s,(a=>{!0===a?J[e.group]=d:J[e.group]===d&&delete J[e.group]})),n=$((()=>J[e.group]),((e,a)=>{a===d&&void 0!==e&&e!==d&&u()}));p=()=>{a(),n(),J[e.group]===d&&delete J[e.group],p=void 0}}function F(){let n;return void 0!==a.header?n=[].concat(a.header(S.value)):(n=[T(H,(()=>[T(me,{lines:e.labelLines},(()=>e.label||"")),e.caption?T(me,{lines:e.captionLines,caption:!0},(()=>e.caption)):null]))],e.icon&&n[!0===e.switchToggleSide?"push":"unshift"](T(H,{side:!0===e.switchToggleSide,avatar:!0!==e.switchToggleSide},(()=>T(U,{name:e.icon}))))),!0!==e.disable&&!0!==e.hideExpandIcon&&n[!0===e.switchToggleSide?"unshift":"push"](function(){const a={class:["q-focusable relative-position cursor-pointer"+(!0===e.denseToggle&&!0===e.switchToggleSide?" items-end":""),e.expandIconClass],side:!0!==e.switchToggleSide,avatar:e.switchToggleSide},n=[T(U,{class:"q-expansion-item__toggle-icon"+(void 0===e.expandedIcon&&!0===s.value?" q-expansion-item__toggle-icon--rotated":""),name:b.value})];return!0===w.value&&(Object.assign(a,{tabindex:0,...y.value,onClick:A,onKeyup:x}),n.unshift(T("div",{ref:l,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),T(H,a,(()=>n))}()),n}function C(){const a={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return!0===h.value&&(a.clickable=!0,a.onClick=k,Object.assign(a,!0===g.value?f.value:y.value)),T(W,a,F)}function D(){return Xe(T("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:v.value,id:i.value},qe(a.default)),[[Je,s.value]])}function j(){const a=[C(),T(ha,{duration:e.duration,onShow:E,onHide:M},D)];return!0===e.expandSeparator&&a.push(T(ke,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),T(ke,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),a}return $((()=>e.group),(e=>{void 0!==p&&p(),void 0!==e&&_()})),void 0!==e.group&&_(),ce((()=>{void 0!==p&&p()})),()=>T("div",{class:m.value},[T("div",{class:"q-expansion-item__container relative-position"},j())])}}),ya={href:"/saed-web-page/"},pa={href:"information.html"},xa={href:"/saed-web-page/"},wa={href:"sams.html"},qa={href:"promotions.html"},Ma={href:"photoweek.html"},Aa={href:"safd.html"},Ea={href:"contact.html"},_a={class:"q-mb-md flex justify-between"},Ca={class:"faq-container"},Ta={class:"search-container"},Fa={class:"faq-list q-mt-md"},Ia=["innerHTML"],Da={key:0,class:"no-results-message"},La=aa({__name:"FAQPage",setup(e){const a=K([{question:"¿Qué es el SAED?",answer:"El SAED (San Andreas Emergency Department) es la organización privada que gestiona los servicios de emergencias en San Andreas. Incluye el SAMS (Servicios Médicos) y el SAFD (Bomberos), asegurando la seguridad y bienestar de los ciudadanos."},{question:"¿Cómo funciona el SAED?",answer:"El SAED opera mediante una estructura jerárquica con equipos altamente capacitados. Los servicios médicos (SAMS) atienden emergencias sanitarias, mientras que los bomberos (SAFD) responden a incendios, rescates y emergencias relacionadas. Ambos trabajan en conjunto para ofrecer una respuesta integral."},{question:"¿Cómo puedo unirme al SAED?",answer:"Para unirte al SAED, debes completar un formulario de solicitud y participar en un proceso de selección. Este incluye entrevistas, pruebas prácticas y evaluaciones de aptitud. Dependiendo de tus intereses, puedes postularte al SAMS o al SAFD."},{question:"¿Cuánto se cobra trabajando para el SAED?",answer:"<p class='mt-2'>Los ingresos en el SAED dependen de si formas parte del SAMS o del SAFD, y de tu rango dentro de la organización:</p>  <ul class='mt-2'>    <li><strong>SAMS (San Andreas Medical Services):</strong>      <ul>        <li>Recibes un sueldo pasivo cada 30 minutos, comenzando en $550 para los rangos iniciales.</li>        <li>Por cada ascenso, el sueldo aumenta en $50, llegando hasta un máximo de $1,500.</li>        <li>Además, obtienes una bonificación de $1,100 por cada hora activa trabajada.</li>      </ul>    </li>    <li><strong>SAFD (San Andreas Fire Department):</strong>      <ul>        <li>El sueldo pasivo se calcula de manera similar al SAMS.</li>        <li>Recibes $25 adicionales por cada incendio apagado con éxito, incentivando la acción directa en emergencias.</li>      </ul>    </li>  </ul>  <p class='mt-2'>Ambos departamentos están diseñados para recompensar el compromiso y el esfuerzo, ofreciendo un esquema de pago justo y competitivo.</p>"},{question:"¿Qué servicios ofrece el SAMS?",answer:"El SAMS brinda atención médica de emergencia, traslados en ambulancia, soporte vital avanzado y servicios de consulta preventiva. Además, organiza campañas de salud para la comunidad."},{question:"¿Qué servicios ofrece el SAFD?",answer:"El SAFD se encarga de responder a incendios, rescates en accidentes vehiculares, operaciones de búsqueda y rescate, y control de materiales peligrosos. También realiza inspecciones de seguridad contra incendios."},{question:"¿Qué requisitos debo cumplir para unirme al SAED?",answer:"Debes tener al menos 21 años, poseer todas las licencias de coducción terrestres, y demostrar habilidades de trabajo en equipo y disposición para responder ante emergencias. Además, es necesario completar una capacitación inicial en la academia correspondiente."},{question:"¿Cómo puedo colaborar con el SAED si no soy miembro?",answer:"Puedes colaborar participando en simulacros de emergencia, asistiendo a talleres comunitarios o donando suministros. También puedes ofrecer tu tiempo como voluntario en actividades específicas organizadas por el SAED."},{question:"¿Cómo puedo reportar un problema relacionado con los servicios del SAED?",answer:"Puedes reportar cualquier problema o sugerencia a través del formulario de contacto en nuestra página oficial o directamente en las oficinas del SAED. Tu retroalimentación nos ayuda a mejorar continuamente."},{question:"¿Existen programas de formación continua para los miembros del SAED?",answer:"Sí, el SAED ofrece programas de capacitación regular para sus miembros, incluyendo talleres de primeros auxilios avanzados, técnicas de rescate y gestión de crisis. La formación es clave para mantener altos estándares de servicio."},{question:"¿Qué debo hacer si tengo una emergencia?",answer:'En caso de emergencia, llama al número correspondiente (SAFD o SAMS) en la app de "Servicios" en tu movil. Mantén la calma, proporciona tu ubicación exacta y describe brevemente la situación. Los equipos del SAED estarán en camino para asistirte.'}]),n=K(""),o=K(""),t=K(!1),s=K(!1),l=q((()=>a.value.filter((e=>{const a=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),o=a(n.value);return a(e.question).includes(o)||a(e.answer).includes(o)})))),i=["¿Has probado a buscar algo que tenga sentido?","¿Seguro que escribiste bien? Yo lo encontré a la primera.","Bueno, si no está aquí, será que no era tan importante.","¿No será que estás buscando en el lugar equivocado?","¿Seguro que es algo que existe? Porque yo no veo nada.","A ver si pruebas con otra búsqueda, porque yo lo encontraría en 5 segundos.","No te rindas, pero... ¿estás seguro de que lo escribiste correctamente?","Hmm, eso no parece estar por aquí. ¿Lo estás buscando bien?","Parece que el universo no tiene esa respuesta... ¿Estás seguro de lo que buscas?","¿Revisaste si la ortografía está bien? A veces los detalles importan.","No encuentro nada con eso... Tal vez es una búsqueda demasiado avanzada para mí.","¡Vaya! ¿Estás seguro de que existe algo con esa descripción?","¿Seguro que esa es la pregunta correcta? Yo no lo encuentro por aquí.","A lo mejor intentas buscar en otro lugar... ¡Yo no veo nada!","¿Lo escribiste bien? A veces con una sola letra cambia todo.","Parece que esa información no está aquí, pero ¿has probado con otro término?","¿Has probado a hacer una búsqueda más precisa? Esto se está volviendo difícil.","Nada encontrado... tal vez estamos buscando en el lugar equivocado.","Eso no lo tengo, ¿pero seguro que es algo relevante?","¿Has probado con otro término? Esto se está poniendo interesante.","¿Estás buscando algo que realmente exista? Porque no lo encuentro por aquí.","No sé si me estoy perdiendo algo, pero no encuentro nada relacionado.","Hmm... eso no me suena. Tal vez necesites un mejor término de búsqueda.","Eso de buscar en internet no es tan difícil, ¿eh? Solo tienes que saber cómo hacerlo.","Es que, si supieras cómo funciona esto, lo encontrarías enseguida.","Te lo dije, no hay nada ahí, es obvio. Mejor prueba en otro sitio.","Yo lo busqué y lo encontré en 3 segundos. ¿No estarás escribiendo mal?","Si no encuentras nada, tal vez es porque no estás buscando bien.","Es que, con lo fácil que es buscar esto, no entiendo cómo no lo encuentras.","No sé, yo no tendría muchas esperanzas con eso. Mejor busca algo más sencillo.","Yo me acuerdo que hace años encontré eso sin problema, pero seguro que tú lo complicaste.","La respuesta está ahí, pero claro, si no sabes cómo buscar, es normal que no la encuentres.","Tienes que poner más atención, porque eso que buscas es fácil de encontrar, no sé cómo no lo ves.","Te lo estoy diciendo, eso no existe o ya no está. Mejor busca otra cosa.","Pues si yo lo encontré hace poco, y ahora tú no. ¿Qué hiciste mal?","Yo ni busqué y ya sé lo que hay, ¿cómo no lo encontraste tú?","Claro, la respuesta estaba frente a tus narices, pero ¿quién sabe buscar, no?","Es que no lo entiendo, a mí no me costó nada encontrarlo. ¿Seguiste todos los pasos?"];function r(){s.value=!s.value}return ta((()=>{""===n.value?(o.value="",t.value=!1):0!==l.value.length||t.value?l.value.length>0&&(o.value="",t.value=!1):(o.value=(()=>{const e=Math.floor(Math.random()*i.length);return i[e]||""})(),t.value=!0)})),(e,a)=>(oe(),na(_e,{view:"lHh Lpr lFf"},{default:k((()=>[c(Fe,{elevated:""},{default:k((()=>[c(Ce,null,{default:k((()=>[c(ie,{dense:"",flat:"",round:"",icon:"menu",onClick:r}),c(Te,null,{default:k((()=>a[2]||(a[2]=[w("img",{src:ca,alt:"SAED Logo",class:"logo"},null,-1),G(" San Andreas Emergency Department (SAED) ")]))),_:1}),w("a",ya,[c(ie,{flat:"",icon:"fas fa-home","aria-label":"Ir a inicio"})]),w("a",pa,[c(ie,{flat:"",icon:"fas fa-info-circle","aria-label":"Información sobre SAED"})])])),_:1})])),_:1}),c(De,{"show-if-above":"",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),side:"left",bordered:""},{default:k((()=>[c(Ie,null,{default:k((()=>[w("a",xa,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fas fa-info-circle",class:"icon"}),a[3]||(a[3]=G(" Información General "))])])),_:1})])),_:1})]),w("a",wa,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fas fa-hospital",class:"icon"}),a[4]||(a[4]=G(" SAMS "))])])),_:1})])),_:1})]),w("a",qa,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fa-solid fa-file-contract",class:"icon"}),a[5]||(a[5]=G(" Ascensos "))])])),_:1})])),_:1})]),w("a",Ma,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fa-solid fa-camera",class:"icon"}),a[6]||(a[6]=G(" Foto de la Semana "))])])),_:1})])),_:1})]),w("a",Aa,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fas fa-fire",class:"icon"}),a[7]||(a[7]=G(" SAFD "))])])),_:1})])),_:1})]),c(W,{clickable:"",disable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fas fa-question-circle",class:"icon"}),a[8]||(a[8]=G(" FAQ "))])])),_:1})])),_:1}),w("a",Ea,[c(W,{clickable:""},{default:k((()=>[c(H,{class:"item-row"},{default:k((()=>[w("span",null,[c(U,{name:"fas fa-phone",class:"icon"}),a[9]||(a[9]=G(" Contacto "))])])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"]),c(je,null,{default:k((()=>[c(Le,{class:"q-pa-md"},{default:k((()=>[w("div",_a,[c(Ve)]),w("div",Ca,[w("div",Ta,[c(va,{rounded:"",filled:"",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e),placeholder:"Buscar preguntas...",class:"search-container input"},null,8,["modelValue"])]),w("div",Fa,[(oe(!0),re(sa,null,oa(l.value,((e,a)=>(oe(),re("div",{key:a,class:"faq-item"},[c(ve,{class:"q-mb-md"},{default:k((()=>[c(he,null,{default:k((()=>[c(ka,{label:e.question},{default:k((()=>[c(ve,null,{default:k((()=>[c(he,null,{default:k((()=>[w("div",{class:"faq-answer",innerHTML:e.answer},null,8,Ia)])),_:2},1024)])),_:2},1024)])),_:2},1032,["label"])])),_:2},1024)])),_:2},1024)])))),128))]),0===l.value.length&&t.value?(oe(),re("div",Da,[w("p",null,la(o.value),1)])):ia("",!0),c(Re,null,{default:k((()=>a[10]||(a[10]=[w("div",{class:"text-center"},[w("p",null,[w("i",null,"Creado y mantenido por el equipo de comunicaciones del SAED")])],-1)]))),_:1})])])),_:1})])),_:1})])),_:1}))}}),Na=ra(La,[["__scopeId","data-v-91b5f6dc"]]);export{Na as default};
