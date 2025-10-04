import{i as se,q as le,h as k,a0 as de,J as Ee,d as D,a1 as Oe,j as l,a2 as He,l as h,a3 as ce,k as I,m as c,p as ue,t as fe,r as _,P as Ne,a4 as be,s as x,v as te,z as ne,a5 as je,a6 as De,E as Ke,A as Me,B as he,a7 as Ve,K as We,L as r,a8 as N,O as Ge,R as qe}from"./index-Dnfs_mlS.js";const K=typeof document<"u"&&typeof window<"u";function ie(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const ae=le("n-form-item");function Le(e,{defaultSize:a="medium",mergedSize:s,mergedDisabled:d}={}){const n=se(ae,null);Ee(ae,null);const v=k(s?()=>s(n):()=>{const{size:g}=e;if(g)return g;if(n){const{mergedSize:F}=n;if(F.value!==void 0)return F.value}return a}),P=k(d?()=>d(n):()=>{const{disabled:g}=e;return g!==void 0?g:n?n.disabled.value:!1}),R=k(()=>{const{status:g}=e;return g||n?.mergedValidationStatus.value});return de(()=>{n&&n.restoreValidation()}),{mergedSizeRef:v,mergedDisabledRef:P,mergedStatusRef:R,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const ve=D({name:"BaseIconSwitchTransition",setup(e,{slots:a}){const s=Oe();return()=>l(He,{name:"icon-switch-transition",appear:s.value},a)}}),{cubicBezierEaseInOut:Qe}=ce;function J({originalTransform:e="",left:a=0,top:s=0,transition:d=`all .3s ${Qe} !important`}={}){return[h("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:a,top:s,opacity:0}),h("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:a,top:s,opacity:1}),h("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:a,top:s,transition:d})]}const Ae=h([h("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),I("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[J()]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[J({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("container",`
 animation: rotator 3s linear infinite both;
 `,[c("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Y="1.6s",Xe={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Ye=D({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Xe),setup(e){ue("-base-loading",Ae,fe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:a,strokeWidth:s,stroke:d,scale:n}=this,v=a/n;return l("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},l(ve,null,{default:()=>this.show?l("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},l("div",{class:`${e}-base-loading__container`},l("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*v} ${2*v}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},l("g",null,l("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${v} ${v};270 ${v} ${v}`,begin:"0s",dur:Y,fill:"freeze",repeatCount:"indefinite"}),l("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:v,cy:v,r:a-s/2,"stroke-dasharray":5.67*a,"stroke-dashoffset":18.48*a},l("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${v} ${v};135 ${v} ${v};450 ${v} ${v}`,begin:"0s",dur:Y,fill:"freeze",repeatCount:"indefinite"}),l("animate",{attributeName:"stroke-dashoffset",values:`${5.67*a};${1.42*a};${5.67*a}`,begin:"0s",dur:Y,fill:"freeze",repeatCount:"indefinite"})))))):l("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:$}=ce;function Je({duration:e=".2s",delay:a=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$},
 max-width ${e} ${$} ${a},
 margin-left ${e} ${$} ${a},
 margin-right ${e} ${$} ${a};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$} ${a},
 max-width ${e} ${$},
 margin-left ${e} ${$},
 margin-right ${e} ${$};
 `)]}const Ue=I("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Ze=D({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ue("-base-wave",Ue,fe(e,"clsPrefix"));const a=_(null),s=_(!1);let d=null;return de(()=>{d!==null&&window.clearTimeout(d)}),{active:s,selfRef:a,play(){d!==null&&(window.clearTimeout(d),s.value=!1,d=null),Ne(()=>{var n;(n=a.value)===null||n===void 0||n.offsetHeight,s.value=!0,d=window.setTimeout(()=>{s.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:e}=this;return l("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),eo=K&&"chrome"in window;K&&navigator.userAgent.includes("Firefox");const oo=K&&navigator.userAgent.includes("Safari")&&!eo;function S(e){return be(e,[255,255,255,.16])}function j(e){return be(e,[0,0,0,.12])}const ro=le("n-button-group"),to=h([I("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[c("border",{borderColor:"var(--n-border-color)"}),x("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),te("disabled",[h("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),te("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),I("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),K&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[I("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[J({top:"50%",originalTransform:"translateY(-50%)"})]),Je()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),no=Object.assign(Object.assign({},he.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!oo}}),io=D({name:"Button",props:no,slots:Object,setup(e){const a=_(null),s=_(null),d=_(!1),n=Ke(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),v=se(ro,{}),{mergedSizeRef:P}=Le({},{defaultSize:"medium",mergedSize:t=>{const{size:p}=e;if(p)return p;const{size:w}=v;if(w)return w;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),R=k(()=>e.focusable&&!e.disabled),g=t=>{var p;R.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&R.value&&((p=a.value)===null||p===void 0||p.focus({preventScroll:!0})))},F=t=>{var p;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&qe(w,t),e.text||(p=s.value)===null||p===void 0||p.play()}},pe=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;d.value=!1}},me=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}d.value=!0}},ge=()=>{d.value=!1},{inlineThemeDisabled:U,mergedClsPrefixRef:M,mergedRtlRef:ye}=Me(e),xe=he("Button","-button",to,Ve,e,M),we=We("Button",ye,M),Z=k(()=>{const t=xe.value,{common:{cubicBezierEaseInOut:p,cubicBezierEaseOut:w},self:o}=t,{rippleDuration:V,opacityDisabled:E,fontWeight:W,fontWeightStrong:G}=o,y=P.value,{dashed:q,type:z,ghost:L,text:C,color:u,round:ee,circle:Q,textColor:B,secondary:Ce,tertiary:oe,quaternary:$e,strong:ze}=e,Be={"--n-font-weight":ze?G:W};let f={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const O=z==="tertiary",re=z==="default",i=O?"default":z;if(C){const b=B||u;f={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":b||o[r("textColorText",i)],"--n-text-color-hover":b?S(b):o[r("textColorTextHover",i)],"--n-text-color-pressed":b?j(b):o[r("textColorTextPressed",i)],"--n-text-color-focus":b?S(b):o[r("textColorTextHover",i)],"--n-text-color-disabled":b||o[r("textColorTextDisabled",i)]}}else if(L||q){const b=B||u;f={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":u||o[r("rippleColor",i)],"--n-text-color":b||o[r("textColorGhost",i)],"--n-text-color-hover":b?S(b):o[r("textColorGhostHover",i)],"--n-text-color-pressed":b?j(b):o[r("textColorGhostPressed",i)],"--n-text-color-focus":b?S(b):o[r("textColorGhostHover",i)],"--n-text-color-disabled":b||o[r("textColorGhostDisabled",i)]}}else if(Ce){const b=re?o.textColor:O?o.textColorTertiary:o[r("color",i)],m=u||b,H=z!=="default"&&z!=="tertiary";f={"--n-color":H?N(m,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":H?N(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":H?N(m,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":H?N(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":m,"--n-text-color-hover":m,"--n-text-color-pressed":m,"--n-text-color-focus":m,"--n-text-color-disabled":m}}else if(oe||$e){const b=re?o.textColor:O?o.textColorTertiary:o[r("color",i)],m=u||b;oe?(f["--n-color"]=o.colorTertiary,f["--n-color-hover"]=o.colorTertiaryHover,f["--n-color-pressed"]=o.colorTertiaryPressed,f["--n-color-focus"]=o.colorSecondaryHover,f["--n-color-disabled"]=o.colorTertiary):(f["--n-color"]=o.colorQuaternary,f["--n-color-hover"]=o.colorQuaternaryHover,f["--n-color-pressed"]=o.colorQuaternaryPressed,f["--n-color-focus"]=o.colorQuaternaryHover,f["--n-color-disabled"]=o.colorQuaternary),f["--n-ripple-color"]="#0000",f["--n-text-color"]=m,f["--n-text-color-hover"]=m,f["--n-text-color-pressed"]=m,f["--n-text-color-focus"]=m,f["--n-text-color-disabled"]=m}else f={"--n-color":u||o[r("color",i)],"--n-color-hover":u?S(u):o[r("colorHover",i)],"--n-color-pressed":u?j(u):o[r("colorPressed",i)],"--n-color-focus":u?S(u):o[r("colorFocus",i)],"--n-color-disabled":u||o[r("colorDisabled",i)],"--n-ripple-color":u||o[r("rippleColor",i)],"--n-text-color":B||(u?o.textColorPrimary:O?o.textColorTertiary:o[r("textColor",i)]),"--n-text-color-hover":B||(u?o.textColorHoverPrimary:o[r("textColorHover",i)]),"--n-text-color-pressed":B||(u?o.textColorPressedPrimary:o[r("textColorPressed",i)]),"--n-text-color-focus":B||(u?o.textColorFocusPrimary:o[r("textColorFocus",i)]),"--n-text-color-disabled":B||(u?o.textColorDisabledPrimary:o[r("textColorDisabled",i)])};let A={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?A={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:A={"--n-border":o[r("border",i)],"--n-border-hover":o[r("borderHover",i)],"--n-border-pressed":o[r("borderPressed",i)],"--n-border-focus":o[r("borderFocus",i)],"--n-border-disabled":o[r("borderDisabled",i)]};const{[r("height",y)]:X,[r("fontSize",y)]:Se,[r("padding",y)]:ke,[r("paddingRound",y)]:Te,[r("iconSize",y)]:Pe,[r("borderRadius",y)]:Re,[r("iconMargin",y)]:Ie,waveOpacity:_e}=o,Fe={"--n-width":Q&&!C?X:"initial","--n-height":C?"initial":X,"--n-font-size":Se,"--n-padding":Q||C?"initial":ee?Te:ke,"--n-icon-size":Pe,"--n-icon-margin":Ie,"--n-border-radius":C?"initial":Q||ee?X:Re};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":p,"--n-bezier-ease-out":w,"--n-ripple-duration":V,"--n-opacity-disabled":E,"--n-wave-opacity":_e},Be),f),A),Fe)}),T=U?Ge("button",k(()=>{let t="";const{dashed:p,type:w,ghost:o,text:V,color:E,round:W,circle:G,textColor:y,secondary:q,tertiary:z,quaternary:L,strong:C}=e;p&&(t+="a"),o&&(t+="b"),V&&(t+="c"),W&&(t+="d"),G&&(t+="e"),q&&(t+="f"),z&&(t+="g"),L&&(t+="h"),C&&(t+="i"),E&&(t+=`j${ie(E)}`),y&&(t+=`k${ie(y)}`);const{value:u}=P;return t+=`l${u[0]}`,t+=`m${w[0]}`,t}),Z,e):void 0;return{selfElRef:a,waveElRef:s,mergedClsPrefix:M,mergedFocusable:R,mergedSize:P,showBorder:n,enterPressed:d,rtlEnabled:we,handleMousedown:g,handleKeydown:me,handleBlur:ge,handleKeyup:pe,handleClick:F,customColorCssVars:k(()=>{const{color:t}=e;if(!t)return null;const p=S(t);return{"--n-border-color":t,"--n-border-color-hover":p,"--n-border-color-pressed":j(t),"--n-border-color-focus":p,"--n-border-color-disabled":t}}),cssVars:U?void 0:Z,themeClass:T?.themeClass,onRender:T?.onRender}},render(){const{mergedClsPrefix:e,tag:a,onRender:s}=this;s?.();const d=ne(this.$slots.default,n=>n&&l("span",{class:`${e}-button__content`},n));return l(a,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,l(je,{width:!0},{default:()=>ne(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&l("span",{class:`${e}-button__icon`,style:{margin:De(this.$slots.default)?"0":""}},l(ve,null,{default:()=>this.loading?l(Ye,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):l("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&d,this.text?null:l(Ze,{ref:"waveElRef",clsPrefix:e}),this.showBorder?l("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?l("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),so=io;export{io as B,ve as N,so as X,Ye as a,oo as b,J as i,Le as u};
