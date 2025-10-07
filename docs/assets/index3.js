import{r as In,A as zn,a as Bn}from"./index.vue_vue_type_script_setup_true_lang.js";import{_ as Ae}from"./ys-md-rendering.es.js";import{i as bt,g as Vn,h as D,d as $,j as s,k as _,l as z,m as v,n as ue,p as yt,t as ze,N as he,q as Dn,s as U,v as ke,r as y,x as Be,y as $n,z as fe,S as En,F as wt,V as Nn,A as xt,B as De,C as Wn,D as Ct,E as G,G as On,H as Ln,I as ct,J as Un,K as kt,L as et,M as jn,O as Hn,P as at,Q as Ve,R as F,T as ft,U as Kn,W as qn,e as $e,o as Te,b as Y,a as S,u as Pt,X as St,c as Xn,w as Pe,f as tt}from"./index.js";import{i as Yn,N as Gn,a as Jn,b as Qn,u as Mt,X as ht}from"./Button.js";const Zn={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"},Heatmap:{less:"less",more:"more",monthFormat:"MMM",weekdayFormat:"eee"}};function nt(e){return(l={})=>{const o=l.width?String(l.width):e.defaultWidth;return e.formats[o]||e.formats[e.defaultWidth]}}function Se(e){return(l,o)=>{const c=o?.context?String(o.context):"standalone";let h;if(c==="formatting"&&e.formattingValues){const r=e.defaultFormattingWidth||e.defaultWidth,i=o?.width?String(o.width):r;h=e.formattingValues[i]||e.formattingValues[r]}else{const r=e.defaultWidth,i=o?.width?String(o.width):e.defaultWidth;h=e.values[i]||e.values[r]}const f=e.argumentCallback?e.argumentCallback(l):l;return h[f]}}function Me(e){return(l,o={})=>{const c=o.width,h=c&&e.matchPatterns[c]||e.matchPatterns[e.defaultMatchWidth],f=l.match(h);if(!f)return null;const r=f[0],i=c&&e.parsePatterns[c]||e.parsePatterns[e.defaultParseWidth],k=Array.isArray(i)?tr(i,M=>M.test(r)):er(i,M=>M.test(r));let B;B=e.valueCallback?e.valueCallback(k):k,B=o.valueCallback?o.valueCallback(B):B;const g=l.slice(r.length);return{value:B,rest:g}}}function er(e,l){for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&l(e[o]))return o}function tr(e,l){for(let o=0;o<e.length;o++)if(l(e[o]))return o}function nr(e){return(l,o={})=>{const c=l.match(e.matchPattern);if(!c)return null;const h=c[0],f=l.match(e.parsePattern);if(!f)return null;let r=e.valueCallback?e.valueCallback(f[0]):f[0];r=o.valueCallback?o.valueCallback(r):r;const i=l.slice(h.length);return{value:r,rest:i}}}const rr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},or=(e,l,o)=>{let c;const h=rr[e];return typeof h=="string"?c=h:l===1?c=h.one:c=h.other.replace("{{count}}",l.toString()),o?.addSuffix?o.comparison&&o.comparison>0?"in "+c:c+" ago":c},ar={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ir=(e,l,o,c)=>ar[e],lr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},sr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ur={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},hr=(e,l)=>{const o=Number(e),c=o%100;if(c>20||c<10)switch(c%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},mr={ordinalNumber:hr,era:Se({values:lr,defaultWidth:"wide"}),quarter:Se({values:sr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Se({values:ur,defaultWidth:"wide"}),day:Se({values:dr,defaultWidth:"wide"}),dayPeriod:Se({values:cr,defaultWidth:"wide",formattingValues:fr,defaultFormattingWidth:"wide"})},vr=/^(\d+)(th|st|nd|rd)?/i,pr=/\d+/i,gr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},br={any:[/^b/i,/^(a|c)/i]},yr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},wr={any:[/1/i,/2/i,/3/i,/4/i]},xr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Cr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Sr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Mr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Tr={ordinalNumber:nr({matchPattern:vr,parsePattern:pr,valueCallback:e=>parseInt(e,10)}),era:Me({matchPatterns:gr,defaultMatchWidth:"wide",parsePatterns:br,defaultParseWidth:"any"}),quarter:Me({matchPatterns:yr,defaultMatchWidth:"wide",parsePatterns:wr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Me({matchPatterns:xr,defaultMatchWidth:"wide",parsePatterns:Cr,defaultParseWidth:"any"}),day:Me({matchPatterns:kr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any"}),dayPeriod:Me({matchPatterns:Sr,defaultMatchWidth:"any",parsePatterns:Mr,defaultParseWidth:"any"})},_r={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Rr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ar={date:nt({formats:_r,defaultWidth:"full"}),time:nt({formats:Fr,defaultWidth:"full"}),dateTime:nt({formats:Rr,defaultWidth:"full"})},Ir={code:"en-US",formatDistance:or,formatLong:Ar,formatRelative:ir,localize:mr,match:Tr,options:{weekStartsOn:0,firstWeekContainsDate:1}},zr={name:"en-US",locale:Ir};function Tt(e){const{mergedLocaleRef:l,mergedDateLocaleRef:o}=bt(Vn,null)||{},c=D(()=>{var f,r;return(r=(f=l?.value)===null||f===void 0?void 0:f[e])!==null&&r!==void 0?r:Zn[e]});return{dateLocaleRef:D(()=>{var f;return(f=o?.value)!==null&&f!==void 0?f:zr}),localeRef:c}}const Br=$({name:"ChevronDown",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Vr=In("clear",()=>s("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Dr=$({name:"Eye",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),s("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),$r=$({name:"EyeOff",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),s("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),s("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),s("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),s("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Er=$({name:"Remove",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Nr=_("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[z(">",[v("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[z("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),z("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),v("placeholder",`
 display: flex;
 `),v("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Yn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),it=$({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return yt("-base-clear",Nr,ze(e,"clsPrefix")),{handleMouseDown(l){l.preventDefault()}}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-base-clear`},s(Gn,null,{default:()=>{var l,o;return this.show?s("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ue(this.$slots.icon,()=>[s(he,{clsPrefix:e},{default:()=>s(Vr,null)})])):s("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(l=this.$slots).placeholder)===null||o===void 0?void 0:o.call(l))}}))}}),Wr=$({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:l}){return()=>{const{clsPrefix:o}=e;return s(Jn,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?s(it,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{placeholder:()=>s(he,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>ue(l.default,()=>[s(Br,null)])})}):null})}}}),_t=Dn("n-input"),Or=_("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[v("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),v("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),v("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),z("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),z("&:-webkit-autofill ~",[v("placeholder","display: none;")])]),U("round",[ke("textarea","border-radius: calc(var(--n-height) / 2);")]),v("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[z("span",`
 width: 100%;
 display: inline-block;
 `)]),U("textarea",[v("placeholder","overflow: visible;")]),ke("autosize","width: 100%;"),U("autosize",[v("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),_("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),v("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),v("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[z("&[type=password]::-ms-reveal","display: none;"),z("+",[v("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),ke("textarea",[v("placeholder","white-space: nowrap;")]),v("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),U("textarea","width: 100%;",[_("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),U("resizable",[_("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),v("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),v("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),U("pair",[v("input-el, placeholder","text-align: center;"),v("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[_("icon",`
 color: var(--n-icon-color);
 `),_("base-icon",`
 color: var(--n-icon-color);
 `)])]),U("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[v("border","border: var(--n-border-disabled);"),v("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),v("placeholder","color: var(--n-placeholder-color-disabled);"),v("separator","color: var(--n-text-color-disabled);",[_("icon",`
 color: var(--n-icon-color-disabled);
 `),_("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),_("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),v("suffix, prefix","color: var(--n-text-color-disabled);",[_("icon",`
 color: var(--n-icon-color-disabled);
 `),_("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),ke("disabled",[v("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[z("&:hover",`
 color: var(--n-icon-color-hover);
 `),z("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),z("&:hover",[v("state-border","border: var(--n-border-hover);")]),U("focus","background-color: var(--n-color-focus);",[v("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),v("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),v("state-border",`
 border-color: #0000;
 z-index: 1;
 `),v("prefix","margin-right: 4px;"),v("suffix",`
 margin-left: 4px;
 `),v("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[_("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),_("base-clear",`
 font-size: var(--n-icon-size);
 `,[v("placeholder",[_("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),z(">",[_("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),_("base-icon",`
 font-size: var(--n-icon-size);
 `)]),_("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>U(`${e}-status`,[ke("disabled",[_("base-loading",`
 color: var(--n-loading-color-${e})
 `),v("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),v("state-border",`
 border: var(--n-border-${e});
 `),z("&:hover",[v("state-border",`
 border: var(--n-border-hover-${e});
 `)]),z("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),U("focus",`
 background-color: var(--n-color-focus-${e});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Lr=_("input",[U("disabled",[v("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Ur(e){let l=0;for(const o of e)l++;return l}function Ie(e){return e===""||e==null}function jr(e){const l=y(null);function o(){const{value:f}=e;if(!f?.focus){h();return}const{selectionStart:r,selectionEnd:i,value:k}=f;if(r==null||i==null){h();return}l.value={start:r,end:i,beforeText:k.slice(0,r),afterText:k.slice(i)}}function c(){var f;const{value:r}=l,{value:i}=e;if(!r||!i)return;const{value:k}=i,{start:B,beforeText:g,afterText:M}=r;let I=k.length;if(k.endsWith(M))I=k.length-M.length;else if(k.startsWith(g))I=g.length;else{const P=g[B-1],m=k.indexOf(P,B-1);m!==-1&&(I=m+1)}(f=i.setSelectionRange)===null||f===void 0||f.call(i,I,I)}function h(){l.value=null}return Be(e,h),{recordCursor:o,restoreCursor:c}}const mt=$({name:"InputWordCount",setup(e,{slots:l}){const{mergedValueRef:o,maxlengthRef:c,mergedClsPrefixRef:h,countGraphemesRef:f}=bt(_t),r=D(()=>{const{value:i}=o;return i===null||Array.isArray(i)?0:(f.value||Ur)(i)});return()=>{const{value:i}=c,{value:k}=o;return s("span",{class:`${h.value}-input-word-count`},$n(l.default,{value:k===null||Array.isArray(k)?"":k},()=>[i===void 0?r.value:`${r.value} / ${i}`]))}}}),Hr=Object.assign(Object.assign({},De.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Kr=$({name:"Input",props:Hr,slots:Object,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:o,inlineThemeDisabled:c,mergedRtlRef:h}=xt(e),f=De("Input","-input",Or,Wn,e,l);Qn&&yt("-input-safari",Lr,l);const r=y(null),i=y(null),k=y(null),B=y(null),g=y(null),M=y(null),I=y(null),P=jr(I),m=y(null),{localeRef:b}=Tt("Input"),C=y(e.defaultValue),V=ze(e,"value"),E=Ct(V,C),Z=Mt(e),{mergedSizeRef:J,mergedDisabledRef:q,mergedStatusRef:_e}=Z,N=y(!1),O=y(!1),A=y(!1),ee=y(!1);let te=null;const ne=D(()=>{const{placeholder:t,pair:n}=e;return n?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[b.value.placeholder]:[t]}),Ee=D(()=>{const{value:t}=A,{value:n}=E,{value:u}=ne;return!t&&(Ie(n)||Array.isArray(n)&&Ie(n[0]))&&u[0]}),Ne=D(()=>{const{value:t}=A,{value:n}=E,{value:u}=ne;return!t&&u[1]&&(Ie(n)||Array.isArray(n)&&Ie(n[1]))}),me=G(()=>e.internalForceFocus||N.value),ve=G(()=>{if(q.value||e.readonly||!e.clearable||!me.value&&!O.value)return!1;const{value:t}=E,{value:n}=me;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(O.value||n):!!t&&(O.value||n)}),re=D(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),oe=y(!1),We=D(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(n=>({textDecoration:n})):[{textDecoration:t}]:["",""]}),pe=y(void 0),Oe=()=>{var t,n;if(e.type==="textarea"){const{autosize:u}=e;if(u&&(pe.value=(n=(t=m.value)===null||t===void 0?void 0:t.$el)===null||n===void 0?void 0:n.offsetWidth),!i.value||typeof u=="boolean")return;const{paddingTop:x,paddingBottom:T,lineHeight:w}=window.getComputedStyle(i.value),ie=Number(x.slice(0,-2)),le=Number(T.slice(0,-2)),se=Number(w.slice(0,-2)),{value:xe}=k;if(!xe)return;if(u.minRows){const Ce=Math.max(u.minRows,1),Ze=`${ie+le+se*Ce}px`;xe.style.minHeight=Ze}if(u.maxRows){const Ce=`${ie+le+se*u.maxRows}px`;xe.style.maxHeight=Ce}}},Le=D(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});On(()=>{const{value:t}=E;Array.isArray(t)||Qe(t)});const ae=Ln().proxy;function j(t,n){const{onUpdateValue:u,"onUpdate:value":x,onInput:T}=e,{nTriggerFormInput:w}=Z;u&&F(u,t,n),x&&F(x,t,n),T&&F(T,t,n),C.value=t,w()}function X(t,n){const{onChange:u}=e,{nTriggerFormChange:x}=Z;u&&F(u,t,n),C.value=t,x()}function ge(t){const{onBlur:n}=e,{nTriggerFormBlur:u}=Z;n&&F(n,t),u()}function de(t){const{onFocus:n}=e,{nTriggerFormFocus:u}=Z;n&&F(n,t),u()}function be(t){const{onClear:n}=e;n&&F(n,t)}function Ue(t){const{onInputBlur:n}=e;n&&F(n,t)}function je(t){const{onInputFocus:n}=e;n&&F(n,t)}function He(){const{onDeactivate:t}=e;t&&F(t)}function Ke(){const{onActivate:t}=e;t&&F(t)}function qe(t){const{onClick:n}=e;n&&F(n,t)}function Xe(t){const{onWrapperFocus:n}=e;n&&F(n,t)}function Ye(t){const{onWrapperBlur:n}=e;n&&F(n,t)}function Ge(){A.value=!0}function a(t){A.value=!1,t.target===M.value?d(t,1):d(t,0)}function d(t,n=0,u="input"){const x=t.target.value;if(Qe(x),t instanceof InputEvent&&!t.isComposing&&(A.value=!1),e.type==="textarea"){const{value:w}=m;w&&w.syncUnifiedContainer()}if(te=x,A.value)return;P.recordCursor();const T=p(x);if(T)if(!e.pair)u==="input"?j(x,{source:n}):X(x,{source:n});else{let{value:w}=E;Array.isArray(w)?w=[w[0],w[1]]:w=["",""],w[n]=x,u==="input"?j(w,{source:n}):X(w,{source:n})}ae.$forceUpdate(),T||at(P.restoreCursor)}function p(t){const{countGraphemes:n,maxlength:u,minlength:x}=e;if(n){let w;if(u!==void 0&&(w===void 0&&(w=n(t)),w>Number(u))||x!==void 0&&(w===void 0&&(w=n(t)),w<Number(u)))return!1}const{allowInput:T}=e;return typeof T=="function"?T(t):!0}function R(t){Ue(t),t.relatedTarget===r.value&&He(),t.relatedTarget!==null&&(t.relatedTarget===g.value||t.relatedTarget===M.value||t.relatedTarget===i.value)||(ee.value=!1),H(t,"blur"),I.value=null}function W(t,n){je(t),N.value=!0,ee.value=!0,Ke(),H(t,"focus"),n===0?I.value=g.value:n===1?I.value=M.value:n===2&&(I.value=i.value)}function L(t){e.passivelyActivated&&(Ye(t),H(t,"blur"))}function Q(t){e.passivelyActivated&&(N.value=!0,Xe(t),H(t,"focus"))}function H(t,n){t.relatedTarget!==null&&(t.relatedTarget===g.value||t.relatedTarget===M.value||t.relatedTarget===i.value||t.relatedTarget===r.value)||(n==="focus"?(de(t),N.value=!0):n==="blur"&&(ge(t),N.value=!1))}function K(t,n){d(t,n,"change")}function ye(t){qe(t)}function we(t){be(t),lt()}function lt(){e.pair?(j(["",""],{source:"clear"}),X(["",""],{source:"clear"})):(j("",{source:"clear"}),X("",{source:"clear"}))}function Ft(t){const{onMousedown:n}=e;n&&n(t);const{tagName:u}=t.target;if(u!=="INPUT"&&u!=="TEXTAREA"){if(e.resizable){const{value:x}=r;if(x){const{left:T,top:w,width:ie,height:le}=x.getBoundingClientRect(),se=14;if(T+ie-se<t.clientX&&t.clientX<T+ie&&w+le-se<t.clientY&&t.clientY<w+le)return}}t.preventDefault(),N.value||st()}}function Rt(){var t;O.value=!0,e.type==="textarea"&&((t=m.value)===null||t===void 0||t.handleMouseEnterWrapper())}function At(){var t;O.value=!1,e.type==="textarea"&&((t=m.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function It(){q.value||re.value==="click"&&(oe.value=!oe.value)}function zt(t){if(q.value)return;t.preventDefault();const n=x=>{x.preventDefault(),ft("mouseup",document,n)};if(Ve("mouseup",document,n),re.value!=="mousedown")return;oe.value=!0;const u=()=>{oe.value=!1,ft("mouseup",document,u)};Ve("mouseup",document,u)}function Bt(t){e.onKeyup&&F(e.onKeyup,t)}function Vt(t){switch(e.onKeydown&&F(e.onKeydown,t),t.key){case"Escape":Je();break;case"Enter":Dt(t);break}}function Dt(t){var n,u;if(e.passivelyActivated){const{value:x}=ee;if(x){e.internalDeactivateOnEnter&&Je();return}t.preventDefault(),e.type==="textarea"?(n=i.value)===null||n===void 0||n.focus():(u=g.value)===null||u===void 0||u.focus()}}function Je(){e.passivelyActivated&&(ee.value=!1,at(()=>{var t;(t=r.value)===null||t===void 0||t.focus()}))}function st(){var t,n,u;q.value||(e.passivelyActivated?(t=r.value)===null||t===void 0||t.focus():((n=i.value)===null||n===void 0||n.focus(),(u=g.value)===null||u===void 0||u.focus()))}function $t(){var t;!((t=r.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function Et(){var t,n;(t=i.value)===null||t===void 0||t.select(),(n=g.value)===null||n===void 0||n.select()}function Nt(){q.value||(i.value?i.value.focus():g.value&&g.value.focus())}function Wt(){const{value:t}=r;t?.contains(document.activeElement)&&t!==document.activeElement&&Je()}function Ot(t){if(e.type==="textarea"){const{value:n}=i;n?.scrollTo(t)}else{const{value:n}=g;n?.scrollTo(t)}}function Qe(t){const{type:n,pair:u,autosize:x}=e;if(!u&&x)if(n==="textarea"){const{value:T}=k;T&&(T.textContent=`${t??""}\r
`)}else{const{value:T}=B;T&&(t?T.textContent=t:T.innerHTML="&nbsp;")}}function Lt(){Oe()}const ut=y({top:"0"});function Ut(t){var n;const{scrollTop:u}=t.target;ut.value.top=`${-u}px`,(n=m.value)===null||n===void 0||n.syncUnifiedContainer()}let Fe=null;ct(()=>{const{autosize:t,type:n}=e;t&&n==="textarea"?Fe=Be(E,u=>{!Array.isArray(u)&&u!==te&&Qe(u)}):Fe?.()});let Re=null;ct(()=>{e.type==="textarea"?Re=Be(E,t=>{var n;!Array.isArray(t)&&t!==te&&((n=m.value)===null||n===void 0||n.syncUnifiedContainer())}):Re?.()}),Un(_t,{mergedValueRef:E,maxlengthRef:Le,mergedClsPrefixRef:l,countGraphemesRef:ze(e,"countGraphemes")});const jt={wrapperElRef:r,inputElRef:g,textareaElRef:i,isCompositing:A,clear:lt,focus:st,blur:$t,select:Et,deactivate:Wt,activate:Nt,scrollTo:Ot},Ht=kt("Input",h,l),dt=D(()=>{const{value:t}=J,{common:{cubicBezierEaseInOut:n},self:{color:u,borderRadius:x,textColor:T,caretColor:w,caretColorError:ie,caretColorWarning:le,textDecorationColor:se,border:xe,borderDisabled:Ce,borderHover:Ze,borderFocus:Kt,placeholderColor:qt,placeholderColorDisabled:Xt,lineHeightTextarea:Yt,colorDisabled:Gt,colorFocus:Jt,textColorDisabled:Qt,boxShadowFocus:Zt,iconSize:en,colorFocusWarning:tn,boxShadowFocusWarning:nn,borderWarning:rn,borderFocusWarning:on,borderHoverWarning:an,colorFocusError:ln,boxShadowFocusError:sn,borderError:un,borderFocusError:dn,borderHoverError:cn,clearSize:fn,clearColor:hn,clearColorHover:mn,clearColorPressed:vn,iconColor:pn,iconColorDisabled:gn,suffixTextColor:bn,countTextColor:yn,countTextColorDisabled:wn,iconColorHover:xn,iconColorPressed:Cn,loadingColor:kn,loadingColorError:Pn,loadingColorWarning:Sn,fontWeight:Mn,[et("padding",t)]:Tn,[et("fontSize",t)]:_n,[et("height",t)]:Fn}}=f.value,{left:Rn,right:An}=jn(Tn);return{"--n-bezier":n,"--n-count-text-color":yn,"--n-count-text-color-disabled":wn,"--n-color":u,"--n-font-size":_n,"--n-font-weight":Mn,"--n-border-radius":x,"--n-height":Fn,"--n-padding-left":Rn,"--n-padding-right":An,"--n-text-color":T,"--n-caret-color":w,"--n-text-decoration-color":se,"--n-border":xe,"--n-border-disabled":Ce,"--n-border-hover":Ze,"--n-border-focus":Kt,"--n-placeholder-color":qt,"--n-placeholder-color-disabled":Xt,"--n-icon-size":en,"--n-line-height-textarea":Yt,"--n-color-disabled":Gt,"--n-color-focus":Jt,"--n-text-color-disabled":Qt,"--n-box-shadow-focus":Zt,"--n-loading-color":kn,"--n-caret-color-warning":le,"--n-color-focus-warning":tn,"--n-box-shadow-focus-warning":nn,"--n-border-warning":rn,"--n-border-focus-warning":on,"--n-border-hover-warning":an,"--n-loading-color-warning":Sn,"--n-caret-color-error":ie,"--n-color-focus-error":ln,"--n-box-shadow-focus-error":sn,"--n-border-error":un,"--n-border-focus-error":dn,"--n-border-hover-error":cn,"--n-loading-color-error":Pn,"--n-clear-color":hn,"--n-clear-size":fn,"--n-clear-color-hover":mn,"--n-clear-color-pressed":vn,"--n-icon-color":pn,"--n-icon-color-hover":xn,"--n-icon-color-pressed":Cn,"--n-icon-color-disabled":gn,"--n-suffix-text-color":bn}}),ce=c?Hn("input",D(()=>{const{value:t}=J;return t[0]}),dt,e):void 0;return Object.assign(Object.assign({},jt),{wrapperElRef:r,inputElRef:g,inputMirrorElRef:B,inputEl2Ref:M,textareaElRef:i,textareaMirrorElRef:k,textareaScrollbarInstRef:m,rtlEnabled:Ht,uncontrolledValue:C,mergedValue:E,passwordVisible:oe,mergedPlaceholder:ne,showPlaceholder1:Ee,showPlaceholder2:Ne,mergedFocus:me,isComposing:A,activated:ee,showClearButton:ve,mergedSize:J,mergedDisabled:q,textDecorationStyle:We,mergedClsPrefix:l,mergedBordered:o,mergedShowPasswordOn:re,placeholderStyle:ut,mergedStatus:_e,textAreaScrollContainerWidth:pe,handleTextAreaScroll:Ut,handleCompositionStart:Ge,handleCompositionEnd:a,handleInput:d,handleInputBlur:R,handleInputFocus:W,handleWrapperBlur:L,handleWrapperFocus:Q,handleMouseEnter:Rt,handleMouseLeave:At,handleMouseDown:Ft,handleChange:K,handleClick:ye,handleClear:we,handlePasswordToggleClick:It,handlePasswordToggleMousedown:zt,handleWrapperKeydown:Vt,handleWrapperKeyup:Bt,handleTextAreaMirrorResize:Lt,getTextareaScrollContainer:()=>i.value,mergedTheme:f,cssVars:c?void 0:dt,themeClass:ce?.themeClass,onRender:ce?.onRender})},render(){var e,l,o,c,h,f,r;const{mergedClsPrefix:i,mergedStatus:k,themeClass:B,type:g,countGraphemes:M,onRender:I}=this,P=this.$slots;return I?.(),s("div",{ref:"wrapperElRef",class:[`${i}-input`,B,k&&`${i}-input--${k}-status`,{[`${i}-input--rtl`]:this.rtlEnabled,[`${i}-input--disabled`]:this.mergedDisabled,[`${i}-input--textarea`]:g==="textarea",[`${i}-input--resizable`]:this.resizable&&!this.autosize,[`${i}-input--autosize`]:this.autosize,[`${i}-input--round`]:this.round&&g!=="textarea",[`${i}-input--pair`]:this.pair,[`${i}-input--focus`]:this.mergedFocus,[`${i}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},s("div",{class:`${i}-input-wrapper`},fe(P.prefix,m=>m&&s("div",{class:`${i}-input__prefix`},m)),g==="textarea"?s(En,{ref:"textareaScrollbarInstRef",class:`${i}-input__textarea`,container:this.getTextareaScrollContainer,theme:(l=(e=this.theme)===null||e===void 0?void 0:e.peers)===null||l===void 0?void 0:l.Scrollbar,themeOverrides:(c=(o=this.themeOverrides)===null||o===void 0?void 0:o.peers)===null||c===void 0?void 0:c.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var m,b;const{textAreaScrollContainerWidth:C}=this,V={width:this.autosize&&C&&`${C}px`};return s(wt,null,s("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${i}-input__textarea-el`,(m=this.inputProps)===null||m===void 0?void 0:m.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:M?void 0:this.maxlength,minlength:M?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(b=this.inputProps)===null||b===void 0?void 0:b.style,V],onBlur:this.handleInputBlur,onFocus:E=>{this.handleInputFocus(E,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?s("div",{class:`${i}-input__placeholder`,style:[this.placeholderStyle,V],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?s(Nn,{onResize:this.handleTextAreaMirrorResize},{default:()=>s("div",{ref:"textareaMirrorElRef",class:`${i}-input__textarea-mirror`,key:"mirror"})}):null)}}):s("div",{class:`${i}-input__input`},s("input",Object.assign({type:g==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":g},this.inputProps,{ref:"inputElRef",class:[`${i}-input__input-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style],tabindex:this.passivelyActivated&&!this.activated?-1:(r=this.inputProps)===null||r===void 0?void 0:r.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:M?void 0:this.maxlength,minlength:M?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:m=>{this.handleInputFocus(m,0)},onInput:m=>{this.handleInput(m,0)},onChange:m=>{this.handleChange(m,0)}})),this.showPlaceholder1?s("div",{class:`${i}-input__placeholder`},s("span",null,this.mergedPlaceholder[0])):null,this.autosize?s("div",{class:`${i}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&fe(P.suffix,m=>m||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?s("div",{class:`${i}-input__suffix`},[fe(P["clear-icon-placeholder"],b=>(this.clearable||b)&&s(it,{clsPrefix:i,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>b,icon:()=>{var C,V;return(V=(C=this.$slots)["clear-icon"])===null||V===void 0?void 0:V.call(C)}})),this.internalLoadingBeforeSuffix?null:m,this.loading!==void 0?s(Wr,{clsPrefix:i,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?m:null,this.showCount&&this.type!=="textarea"?s(mt,null,{default:b=>{var C;const{renderCount:V}=this;return V?V(b):(C=P.count)===null||C===void 0?void 0:C.call(P,b)}}):null,this.mergedShowPasswordOn&&this.type==="password"?s("div",{class:`${i}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ue(P["password-visible-icon"],()=>[s(he,{clsPrefix:i},{default:()=>s(Dr,null)})]):ue(P["password-invisible-icon"],()=>[s(he,{clsPrefix:i},{default:()=>s($r,null)})])):null]):null)),this.pair?s("span",{class:`${i}-input__separator`},ue(P.separator,()=>[this.separator])):null,this.pair?s("div",{class:`${i}-input-wrapper`},s("div",{class:`${i}-input__input`},s("input",{ref:"inputEl2Ref",type:this.type,class:`${i}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:M?void 0:this.maxlength,minlength:M?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:m=>{this.handleInputFocus(m,1)},onInput:m=>{this.handleInput(m,1)},onChange:m=>{this.handleChange(m,1)}}),this.showPlaceholder2?s("div",{class:`${i}-input__placeholder`},s("span",null,this.mergedPlaceholder[1])):null),fe(P.suffix,m=>(this.clearable||m)&&s("div",{class:`${i}-input__suffix`},[this.clearable&&s(it,{clsPrefix:i,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var b;return(b=P["clear-icon"])===null||b===void 0?void 0:b.call(P)},placeholder:()=>{var b;return(b=P["clear-icon-placeholder"])===null||b===void 0?void 0:b.call(P)}}),m]))):null,this.mergedBordered?s("div",{class:`${i}-input__border`}):null,this.mergedBordered?s("div",{class:`${i}-input__state-border`}):null,this.showCount&&g==="textarea"?s(mt,null,{default:m=>{var b;const{renderCount:C}=this;return C?C(m):(b=P.count)===null||b===void 0?void 0:b.call(P,m)}}):null)}}),qr=z([_("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),_("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]);function Xr(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Yr(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^-?\d*$/.test(e))||e==="-"||e==="-0"}function rt(e){return e==null?!0:!Number.isNaN(e)}function vt(e,l){return typeof e!="number"?"":l===void 0?String(e):e.toFixed(l)}function ot(e){if(e===null)return null;if(typeof e=="number")return e;{const l=Number(e);return Number.isNaN(l)?null:l}}const pt=800,gt=100,Gr=Object.assign(Object.assign({},De.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},round:{type:Boolean,default:void 0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Jr=$({name:"InputNumber",props:Gr,slots:Object,setup(e){const{mergedBorderedRef:l,mergedClsPrefixRef:o,mergedRtlRef:c}=xt(e),h=De("InputNumber","-input-number",qr,Kn,e,o),{localeRef:f}=Tt("InputNumber"),r=Mt(e),{mergedSizeRef:i,mergedDisabledRef:k,mergedStatusRef:B}=r,g=y(null),M=y(null),I=y(null),P=y(e.defaultValue),m=ze(e,"value"),b=Ct(m,P),C=y(""),V=a=>{const d=String(a).split(".")[1];return d?d.length:0},E=a=>{const d=[e.min,e.max,e.step,a].map(p=>p===void 0?0:V(p));return Math.max(...d)},Z=G(()=>{const{placeholder:a}=e;return a!==void 0?a:f.value.placeholder}),J=G(()=>{const a=ot(e.step);return a!==null?a===0?1:Math.abs(a):1}),q=G(()=>{const a=ot(e.min);return a!==null?a:null}),_e=G(()=>{const a=ot(e.max);return a!==null?a:null}),N=()=>{const{value:a}=b;if(rt(a)){const{format:d,precision:p}=e;d?C.value=d(a):a===null||p===void 0||V(a)>p?C.value=vt(a,void 0):C.value=vt(a,p)}else C.value=String(a)};N();const O=a=>{const{value:d}=b;if(a===d){N();return}const{"onUpdate:value":p,onUpdateValue:R,onChange:W}=e,{nTriggerFormInput:L,nTriggerFormChange:Q}=r;W&&F(W,a),R&&F(R,a),p&&F(p,a),P.value=a,L(),Q()},A=({offset:a,doUpdateIfValid:d,fixPrecision:p,isInputing:R})=>{const{value:W}=C;if(R&&Yr(W))return!1;const L=(e.parse||Xr)(W);if(L===null)return d&&O(null),null;if(rt(L)){const Q=V(L),{precision:H}=e;if(H!==void 0&&H<Q&&!p)return!1;let K=Number.parseFloat((L+a).toFixed(H??E(L)));if(rt(K)){const{value:ye}=_e,{value:we}=q;if(ye!==null&&K>ye){if(!d||R)return!1;K=ye}if(we!==null&&K<we){if(!d||R)return!1;K=we}return e.validator&&!e.validator(K)?!1:(d&&O(K),K)}}return!1},ee=G(()=>A({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),te=G(()=>{const{value:a}=b;if(e.validator&&a===null)return!1;const{value:d}=J;return A({offset:-d,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),ne=G(()=>{const{value:a}=b;if(e.validator&&a===null)return!1;const{value:d}=J;return A({offset:+d,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function Ee(a){const{onFocus:d}=e,{nTriggerFormFocus:p}=r;d&&F(d,a),p()}function Ne(a){var d,p;if(a.target===((d=g.value)===null||d===void 0?void 0:d.wrapperElRef))return;const R=A({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(R!==!1){const Q=(p=g.value)===null||p===void 0?void 0:p.inputElRef;Q&&(Q.value=String(R||"")),b.value===R&&N()}else N();const{onBlur:W}=e,{nTriggerFormBlur:L}=r;W&&F(W,a),L(),at(()=>{N()})}function me(a){const{onClear:d}=e;d&&F(d,a)}function ve(){const{value:a}=ne;if(!a){be();return}const{value:d}=b;if(d===null)e.validator||O(pe());else{const{value:p}=J;A({offset:p,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function re(){const{value:a}=te;if(!a){ge();return}const{value:d}=b;if(d===null)e.validator||O(pe());else{const{value:p}=J;A({offset:-p,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const oe=Ee,We=Ne;function pe(){if(e.validator)return null;const{value:a}=q,{value:d}=_e;return a!==null?Math.max(0,a):d!==null?Math.min(0,d):0}function Oe(a){me(a),O(null)}function Le(a){var d,p,R;!((d=I.value)===null||d===void 0)&&d.$el.contains(a.target)&&a.preventDefault(),!((p=M.value)===null||p===void 0)&&p.$el.contains(a.target)&&a.preventDefault(),(R=g.value)===null||R===void 0||R.activate()}let ae=null,j=null,X=null;function ge(){X&&(window.clearTimeout(X),X=null),ae&&(window.clearInterval(ae),ae=null)}let de=null;function be(){de&&(window.clearTimeout(de),de=null),j&&(window.clearInterval(j),j=null)}function Ue(){ge(),X=window.setTimeout(()=>{ae=window.setInterval(()=>{re()},gt)},pt),Ve("mouseup",document,ge,{once:!0})}function je(){be(),de=window.setTimeout(()=>{j=window.setInterval(()=>{ve()},gt)},pt),Ve("mouseup",document,be,{once:!0})}const He=()=>{j||ve()},Ke=()=>{ae||re()};function qe(a){var d,p;if(a.key==="Enter"){if(a.target===((d=g.value)===null||d===void 0?void 0:d.wrapperElRef))return;A({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((p=g.value)===null||p===void 0||p.deactivate())}else if(a.key==="ArrowUp"){if(!ne.value||e.keyboard.ArrowUp===!1)return;a.preventDefault(),A({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&ve()}else if(a.key==="ArrowDown"){if(!te.value||e.keyboard.ArrowDown===!1)return;a.preventDefault(),A({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&re()}}function Xe(a){C.value=a,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&A({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Be(b,()=>{N()});const Ye={focus:()=>{var a;return(a=g.value)===null||a===void 0?void 0:a.focus()},blur:()=>{var a;return(a=g.value)===null||a===void 0?void 0:a.blur()},select:()=>{var a;return(a=g.value)===null||a===void 0?void 0:a.select()}},Ge=kt("InputNumber",c,o);return Object.assign(Object.assign({},Ye),{rtlEnabled:Ge,inputInstRef:g,minusButtonInstRef:M,addButtonInstRef:I,mergedClsPrefix:o,mergedBordered:l,uncontrolledValue:P,mergedValue:b,mergedPlaceholder:Z,displayedValueInvalid:ee,mergedSize:i,mergedDisabled:k,displayedValue:C,addable:ne,minusable:te,mergedStatus:B,handleFocus:oe,handleBlur:We,handleClear:Oe,handleMouseDown:Le,handleAddClick:He,handleMinusClick:Ke,handleAddMousedown:je,handleMinusMousedown:Ue,handleKeyDown:qe,handleUpdateDisplayedValue:Xe,mergedTheme:h,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:D(()=>{const{self:{iconColorDisabled:a}}=h.value,[d,p,R,W]=qn(a);return{textColorTextDisabled:`rgb(${d}, ${p}, ${R})`,opacityDisabled:`${W}`}})})},render(){const{mergedClsPrefix:e,$slots:l}=this,o=()=>s(ht,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ue(l["minus-icon"],()=>[s(he,{clsPrefix:e},{default:()=>s(Er,null)})])}),c=()=>s(ht,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ue(l["add-icon"],()=>[s(he,{clsPrefix:e},{default:()=>s(zn,null)})])});return s("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},s(Kr,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,round:this.round,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var h;return this.showButton&&this.buttonPlacement==="both"?[o(),fe(l.prefix,f=>f?s("span",{class:`${e}-input-number-prefix`},f):null)]:(h=l.prefix)===null||h===void 0?void 0:h.call(l)},suffix:()=>{var h;return this.showButton?[fe(l.suffix,f=>f?s("span",{class:`${e}-input-number-suffix`},f):null),this.buttonPlacement==="right"?o():null,c()]:(h=l.suffix)===null||h===void 0?void 0:h.call(l)}}))}}),Qr=["content"],Zr=`### 台湾海峡

台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`,eo=$({__name:"index",setup(e){const l=y(Zr),o=y(16),c=D(()=>({"--rem-size":o.value+"px"}));return(h,f)=>(Te(),$e(wt,null,[Y(Pt(Jr),{value:o.value,"onUpdate:value":f[0]||(f[0]=r=>o.value=r),placeholder:"最小值",min:4},null,8,["value"]),S("ys-md-rendering",{content:l.value,style:St(c.value)},null,12,Qr)],64))}}),to=`<script setup lang="ts">\r
import { computed, ref } from 'vue'\r
import { NInputNumber } from 'naive-ui'\r
import 'ys-md-rendering'\r
\r
const text = \`### 台湾海峡\r
\r
台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\r
\r
台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。\`\r
\r
const mdstr = ref(text)\r
\r
const size = ref(16)\r
\r
const style = computed(() => ({\r
  '--rem-size': size.value + 'px'\r
}))\r
<\/script>\r
\r
<template>\r
  <n-input-number v-model:value="size" placeholder="最小值" :min="4" />\r
  <ys-md-rendering :content="mdstr" :style="style"></ys-md-rendering>\r
</template>\r
`,no=["content","custom-styles"],ro=`### 台湾海峡

---

台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`,oo=$({__name:"index",setup(e){const l=y(ro),c=JSON.stringify({h3:{color:"red"},hr:{marginBlock:"5px",borderColor:"blue"}});return(h,f)=>(Te(),$e("ys-md-rendering",{content:l.value,"custom-styles":Pt(c)},null,8,no))}}),ao=`<script setup lang="ts">\r
import { ref } from 'vue'\r
import 'ys-md-rendering'\r
\r
const text = \`### 台湾海峡\r
\r
---\r
\r
台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\r
\r
台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。\`\r
\r
const mdstr = ref(text)\r
\r
const style = {\r
  h3: {\r
    color: 'red'\r
  },\r
  hr: {\r
    marginBlock: '5px',\r
    borderColor: 'blue'\r
  }\r
}\r
\r
// 方法2：通过序列化传递样式\r
const serializedStyle = JSON.stringify(style)\r
<\/script>\r
\r
<template>\r
  <ys-md-rendering :content="mdstr" :custom-styles="serializedStyle"></ys-md-rendering>\r
</template>\r
`,io=["content"],lo=`### 台湾海峡

台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`,so=$({__name:"index",setup(e){const l=y(lo),o={"--tw-prose-body":"blue","--tw-prose-headings":"red"};return(c,h)=>(Te(),$e("ys-md-rendering",{content:l.value,style:o},null,8,io))}}),uo=`<script setup lang="ts">\r
import { ref } from 'vue'\r
import 'ys-md-rendering'\r
\r
const text = \`### 台湾海峡\r
\r
台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\r
\r
台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。\`\r
\r
const mdstr = ref(text)\r
\r
const style = {\r
  // 修改段落颜色\r
  '--tw-prose-body': 'blue',\r
  // 修改标题颜色\r
  '--tw-prose-headings': 'red'\r
}\r
<\/script>\r
\r
<template>\r
  <ys-md-rendering :content="mdstr" :style="style"></ys-md-rendering>\r
</template>\r
`,co={class:"mb-4 space-x-2"},fo=["content","mode"],ho=`### 台湾海峡

台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`,mo=$({__name:"index",setup(e){const l=y(ho),o=y(""),c=D(()=>o.value==="light"?"#f5f5f5":o.value==="dark"||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"#1e1e1e":"#f5f5f5"),h=y();return(f,r)=>(Te(),$e("div",{class:"p-4",style:St({backgroundColor:c.value})},[S("div",co,[S("button",{class:"cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700",onClick:r[0]||(r[0]=i=>o.value="")},"自动"),S("button",{class:"cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700",onClick:r[1]||(r[1]=i=>o.value="light")},"浅色"),S("button",{class:"cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700",onClick:r[2]||(r[2]=i=>o.value="dark")},"深色")]),S("ys-md-rendering",{ref_key:"mdRendering",ref:h,content:l.value,mode:o.value},null,8,fo)],4))}}),vo=`<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import 'ys-md-rendering'\r
\r
const text = \`### 台湾海峡\r
\r
台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\r
\r
台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。\`\r
\r
const mdstr = ref(text)\r
\r
const mode = ref('')\r
\r
// 根据 mode 或系统主题计算背景颜色\r
const bgColor = computed(() => {\r
  if (mode.value === 'light') return '#f5f5f5'\r
  if (mode.value === 'dark') return '#1e1e1e'\r
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#1e1e1e' : '#f5f5f5'\r
})\r
\r
const mdRendering = ref()\r
<\/script>\r
\r
<template>\r
  <div class="p-4" :style="{ backgroundColor: bgColor }">\r
    <div class="mb-4 space-x-2">\r
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = ''">自动</button>\r
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = 'light'">浅色</button>\r
      <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-700" @click="mode = 'dark'">深色</button>\r
    </div>\r
    <ys-md-rendering ref="mdRendering" :content="mdstr" :mode="mode"></ys-md-rendering>\r
  </div>\r
</template>\r
`,wo=$({__name:"index",setup(e){const l=[{name:"vue3",type:"vue3",code:to}],o=[{name:"vue3",type:"vue3",code:ao}],c=[{name:"vue3",type:"vue3",code:uo}],h=[{name:"vue3",type:"vue3",code:vo}];return(f,r)=>(Te(),Xn(Bn,null,{default:Pe(()=>[r[0]||(r[0]=S("h1",{class:"text-2xl font-bold"},"主题切换",-1)),r[1]||(r[1]=S("div",{class:"mb-2"},"通过mode设置对应主题，如果设置空，则根据浏览器模式自动切换",-1)),r[2]||(r[2]=S("div",{class:"mb-2"},"注：是通过@tailwindcss/typography的深浅切换实现的，也可外部对prose进行切换，达到同样的目的",-1)),Y(Ae,{codes:h},{default:Pe(()=>[Y(mo)]),_:1}),r[3]||(r[3]=S("h1",{class:"text-2xl font-bold"},"整体大小调整",-1)),r[4]||(r[4]=S("div",{class:"mb-2"},"通过style传递`--rem-size: 16px;`属性，控制整体大小",-1)),Y(Ae,{codes:l},{default:Pe(()=>[Y(eo)]),_:1}),r[5]||(r[5]=S("h1",{class:"text-2xl font-bold"},"元素样式自定义",-1)),r[6]||(r[6]=S("span",null,"支持的自定义元素属性有：h1、h2、h3、h4、h5、h6、p、blockquote、strong、em、s、ol、ul、li、table、thead、tbody、tr、th、td、a、pre、code、hr、br、img",-1)),r[7]||(r[7]=S("br",null,null,-1)),r[8]||(r[8]=S("span",null,"设置样式可通过`background-color`、`backgroundColor`两种方式设置，因为是覆盖css，几乎所有css属性都可以设置",-1)),r[9]||(r[9]=S("br",null,null,-1)),r[10]||(r[10]=S("span",null,"目前不支持伪元素、伪类、选择器等操作，不过目前的属性够把md翻出花了",-1)),Y(Ae,{codes:o},{default:Pe(()=>[Y(oo)]),_:1}),r[11]||(r[11]=S("h1",{class:"text-2xl font-bold"},"元素属性自定义",-1)),r[12]||(r[12]=S("span",null,[tt("内部使用"),S("a",{class:"text-blue-500 no-underline hover:underline",href:"https://www.npmjs.com/package/@tailwindcss/typography"},"@tailwindcss/typography"),tt("渲染，所以支持修改typography插件的css变量以修改样式的效果")],-1)),r[13]||(r[13]=tt(" 示例数据如下： ",-1)),r[14]||(r[14]=S("div",{class:"py-4"},[S("pre",{class:"rounded-md bg-gray-900 p-2 text-white"},[S("code",null,`@utility prose-pink {
    --tw-prose-body: var(--color-pink-800);
    --tw-prose-headings: var(--color-pink-900);
    --tw-prose-lead: var(--color-pink-700);
    --tw-prose-links: var(--color-pink-900);
    --tw-prose-bold: var(--color-pink-900);
    --tw-prose-counters: var(--color-pink-600);
    --tw-prose-bullets: var(--color-pink-400);
    --tw-prose-hr: var(--color-pink-300);
    --tw-prose-quotes: var(--color-pink-900);
    --tw-prose-quote-borders: var(--color-pink-300);
    --tw-prose-captions: var(--color-pink-700);
    --tw-prose-code: var(--color-pink-900);
    --tw-prose-pre-code: var(--color-pink-100);
    --tw-prose-pre-bg: var(--color-pink-900);
    --tw-prose-th-borders: var(--color-pink-300);
    --tw-prose-td-borders: var(--color-pink-200);
    --tw-prose-invert-body: var(--color-pink-200);
    --tw-prose-invert-headings: var(--color-white);
    --tw-prose-invert-lead: var(--color-pink-300);
    --tw-prose-invert-links: var(--color-white);
    --tw-prose-invert-bold: var(--color-white);
    --tw-prose-invert-counters: var(--color-pink-400);
    --tw-prose-invert-bullets: var(--color-pink-600);
    --tw-prose-invert-hr: var(--color-pink-700);
    --tw-prose-invert-quotes: var(--color-pink-100);
    --tw-prose-invert-quote-borders: var(--color-pink-700);
    --tw-prose-invert-captions: var(--color-pink-400);
    --tw-prose-invert-code: var(--color-white);
    --tw-prose-invert-pre-code: var(--color-pink-300);
    --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
    --tw-prose-invert-th-borders: var(--color-pink-600);
    --tw-prose-invert-td-borders: var(--color-pink-700);
  }`)])],-1)),Y(Ae,{codes:c},{default:Pe(()=>[Y(so)]),_:1})]),_:1}))}});export{wo as default};
