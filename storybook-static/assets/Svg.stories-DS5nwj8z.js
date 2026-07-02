import{i as e}from"./preload-helper-CT_b8DTk.js";import{U as t,W as n,Y as r,rt as i,tt as a}from"./iframe-D4NKHDCX.js";import{C as o,D as s,T as c,_ as l,a as u,c as d,f,g as p,i as m,k as h,l as g,m as _,n as v,p as y,r as b,t as x,u as S}from"./YsMdRendering-Db6tAK7z.js";import{a as C,i as w,n as T,o as E,r as D,t as O}from"./xml-oue2ZT3R.js";import{i as k,n as A,t as j}from"./ref-BtQrx78-.js";var M,N=e((()=>{M=`.ys-svg-root{margin-bottom:1rem}.ys-svg-card{border:1px solid #d1d5db;border-radius:.375rem;overflow:hidden}.ys-svg-card-dark{border-color:#374151}.ys-svg-toolbar{user-select:none;justify-content:space-between;align-items:center;gap:.5rem;height:2.5rem;padding:.5rem .5rem .5rem .75rem;display:flex}.ys-svg-card-dark .ys-svg-toolbar{background:#111827}.ys-svg-tabs{background:#f3f4f6;border-radius:.375rem;height:2rem;padding:.25rem;display:inline-flex}.ys-svg-card-dark .ys-svg-tabs{background:#1f2937}.ys-svg-tab{color:#4b5563;cursor:pointer;min-width:4rem;font:inherit;background:0 0;border:0;border-radius:.375rem;justify-content:center;align-items:center;padding:.25rem .75rem;font-size:.875rem;font-weight:500;transition:color .2s ease-in-out,background-color .2s ease-in-out,box-shadow .2s ease-in-out;display:flex}.ys-svg-card-dark .ys-svg-tab{color:#9ca3af}.ys-svg-tab-idle:hover{color:#1f2937;background:#e5e7eb}.ys-svg-card-dark .ys-svg-tab-idle:hover{color:#e5e7eb;background:#1f2937}.ys-svg-tab-active{color:#2563eb;background:#fff;box-shadow:0 1px 2px #00000014}.ys-svg-card-dark .ys-svg-tab-active{color:#60a5fa;background:#374151}.ys-svg-body{max-height:15rem;overflow:hidden}.ys-svg-scroll{max-width:100%;overflow-x:auto}.ys-svg-code{background:#fff;border-top-left-radius:0;border-top-right-radius:0;max-width:100%;max-height:15rem;margin:0;padding:0;overflow-y:auto}.ys-svg-code-dark{background:#1e2939}.ys-svg-code code{background:0 0}.ys-svg-canvas{box-sizing:border-box;background:#fff;justify-content:center;align-items:center;width:100%;height:15rem;padding:1rem;display:flex}.ys-svg-canvas-dark{background:#1e2939}`})),P,F,I=e((()=>{t(),o(),E(),w(),O(),S(),j(),N(),d(),y(),m(),p(),b(),C.registerLanguage(`xml`,T),P=class extends n{constructor(...e){super(...e),this.config={name:`svg`,version:`0.0.1`},this.handleUpdate=e=>{g(e.detail.el,r`<ys-svg-render .content=${e.detail.content}></ys-svg-render>`)}}firstUpdated(){this.dataset.register=this.config.name,this.parentElement&&this.parentElement.addEventListener(`${this.config.name}-update`,this.handleUpdate)}disconnectedCallback(){this.parentElement&&this.parentElement.removeEventListener(`${this.config.name}-update`,this.handleUpdate),super.disconnectedCallback()}},P=v([h(`ys-svg`)],P),F=class extends n{constructor(...e){super(...e),this.content=``,this.status=`code`,this.isComplete=!1,this.isFinish=!1,this.svgBoxRef=A(),this.dragStartX=0,this.dragStartY=0,this.x=0,this.y=0,this.isDragging=!1,this.onMouseDown=e=>{this.isDragging=!0,this.dragStartX=e.clientX-this.x,this.dragStartY=e.clientY-this.y},this.onMouseMove=e=>{this.isDragging&&(this.x=e.clientX-this.dragStartX,this.y=e.clientY-this.dragStartY)},this.onMouseUp=()=>{this.isDragging=!1}}static{this.styles=[i(M),i(D),a`
      /* 浅色滚动条 */
      .custom-scrollbar.light::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-track {
        background: #f0f0f0;
        border-radius: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-thumb {
        background-color: #8b8b8b;
        border-radius: 4px;
      }
      .custom-scrollbar.light::-webkit-scrollbar-thumb:hover {
        background-color: #9f9c9c;
      }
      .custom-scrollbar.light {
        scrollbar-width: thin;
        scrollbar-color: #8b8b8b #f0f0f0;
      }

      /* 深色滚动条 */
      .custom-scrollbar.dark::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-track {
        background: #1e2939;
        border-radius: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-thumb {
        background-color: #3b82f6;
        border-radius: 4px;
      }
      .custom-scrollbar.dark::-webkit-scrollbar-thumb:hover {
        background-color: #60a5fa;
      }
      .custom-scrollbar.dark {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 #1e2939;
      }
    `]}get isDarkMode(){return this.themeData?.mode===`dark`}checkStatus(e){this.isFinish&&(this.status=e)}firstUpdated(){}updated(e){if((e.has(`status`)||e.has(`content`))&&this.status===`view`){let e=this.svgBoxRef.value;e&&(e.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`mouseup`,this.onMouseUp),e.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`mouseup`,this.onMouseUp))}}disconnectedCallback(){this.svgBoxRef.value?.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`mouseup`,this.onMouseUp),super.disconnectedCallback()}isSvgComplete(e){let t=e.trim().replace(/<!--.*?-->/gs,``).trim();return t.startsWith(`<svg`)&&t.endsWith(`</svg>`)||t.startsWith(`<?xml`)&&t.includes(`<!DOCTYPE svg`)&&t.endsWith(`</svg>`)}filterTrailingFence(e){return e.trimEnd().replace(/(`{1,2})$/g,``)}render(){let e=this.isDarkMode,t=this.filterTrailingFence(this.content),n=this.isSvgComplete(t);this.isComplete=n,n&&!this.isFinish&&(this.isFinish=!0,this.status=`view`);let i=C.highlight(t,{language:`xml`}).value,a=`transform: translate(${this.x}px, ${this.y}px); cursor: grab;`,o={"ys-svg-tab":!0},s={...o,"ys-svg-tab-active":this.status===`code`,"ys-svg-tab-idle":this.status!==`code`},c={...o,"ys-svg-tab-active":this.status===`view`,"ys-svg-tab-idle":this.status!==`view`};return r`<div class="ys-svg-root">
      <div class=${e?`ys-svg-card ys-svg-card-dark`:`ys-svg-card`}>
        <!-- 顶部工具栏 -->
        <div class="ys-svg-toolbar">
          <div class="ys-svg-tabs">
            <button class=${l(s)} @click=${()=>this.checkStatus(`code`)}>
              <span>代码</span>
            </button>
            <button class=${l(c)} @click=${()=>this.checkStatus(`view`)}>
              <span>图标</span>
            </button>
          </div>
        </div>

        <!-- 内容区域 -->
        <div class="ys-svg-body">
          ${this.status===`code`?r`<div class="ys-svg-scroll">
                <pre
                  class="${e?`ys-svg-code ys-svg-code-dark dark`:`ys-svg-code light`} custom-scrollbar"
                ><code  class="hljs language-xml" style="background: transparent;">${f(i)}</code></pre>
              </div>`:r`<div class=${e?`ys-svg-canvas ys-svg-canvas-dark`:`ys-svg-canvas`} ${k(this.svgBoxRef)}>
                <div style=${a}>${f(t)}</div>
              </div>`}
        </div>
      </div>
    </div>`}},v([_({context:u,subscribe:!0}),s({attribute:!1})],F.prototype,`themeData`,void 0),v([s({type:String})],F.prototype,`content`,void 0),v([c()],F.prototype,`status`,void 0),v([c()],F.prototype,`isComplete`,void 0),v([c()],F.prototype,`isFinish`,void 0),v([c()],F.prototype,`x`,void 0),v([c()],F.prototype,`y`,void 0),F=v([h(`ys-svg-render`)],F)})),L,R,z;e((()=>{t(),x(),I(),L={title:`Plugins/Svg`,tags:[`autodocs`],render:e=>r`
    <div style="max-width: 880px; padding: 16px;">
      <ys-md-rendering .content=${e.content}>
        <ys-svg></ys-svg>
      </ys-md-rendering>
    </div>
  `,argTypes:{content:{control:`text`}},args:{content:[`## SVG 渲染`,``,"```svg",`<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">`,`  <rect x="75" y="75" width="50" height="50" fill="blue">`,`    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />`,`  </rect>`,`  <circle cx="100" cy="100" r="3" fill="red" />`,`</svg>`,"```"].join(`
`)}},R={},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z=[`Basic`]}))();export{R as Basic,z as __namedExportsOrder,L as default};