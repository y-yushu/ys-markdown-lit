import{a as D}from"./index.vue_vue_type_script_setup_true_lang.js";import{_ as U}from"./ys-md-rendering.es.js";import{e as p,o as c,a as e,Y as f,d as $,r as R,Z as y,j as C,b as u,w as m,f as I,u as w,F as S,c as M}from"./index.js";import{B as T}from"./Button.js";import{N as j}from"./Table.js";const J={class:"max-w-sm overflow-hidden rounded-2xl border-2 border-blue-400 bg-white shadow-lg"},O={key:0,class:"animate-pulse p-6"},B={key:1},H={class:"bg-blue-500 px-6 py-3"},L={class:"text-lg font-semibold text-white"},Y={class:"p-6 text-sm whitespace-pre-wrap text-blue-600"},E={__name:"render",props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(s){return(b,a)=>(c(),p("div",J,[!s.title||!s.desc?(c(),p("div",O,[...a[0]||(a[0]=[e("div",{class:"mb-4 h-7 w-36 rounded bg-blue-300"},null,-1),e("div",{class:"h-5 w-full rounded bg-blue-200"},null,-1)])])):(c(),p("div",B,[e("div",H,[e("h3",L,f(s.title),1)]),e("p",Y,f(s.desc),1)]))]))}},z=".max-w-sm{max-width:24rem}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.border-2{border-width:2px}.border-blue-400{border-color:#60a5fa}.bg-white{background-color:#fff}.shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.4}}.p-6{padding:1.5rem}.mb-4{margin-bottom:1rem}.h-7{height:1.75rem}.w-36{width:9rem}.rounded{border-radius:.25rem}.bg-blue-300{background-color:#93c5fd}.h-5{height:1.25rem}.w-full{width:100%}.bg-blue-200{background-color:#bfdbfe}.bg-blue-500{background-color:#3b82f6}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-lg{font-size:1.125rem}.font-semibold{font-weight:600}.text-white{color:#fff}.text-sm{font-size:.875rem}.text-blue-600{color:#2563eb}.whitespace-pre-wrap{white-space:pre-wrap}h3,p{margin-block:0}",A=["content"],F=$({__name:"index",setup(s){const g=`<cu-card>${JSON.stringify({title:"台湾海峡",desc:`台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`})}</cu-card>`,t=R(g),v=o=>o.shadowRoot?o.shadowRoot:o,h=new Map,k=o=>{const{el:n,key:r}=o.detail,i=v(n),l=document.createElement("style");l.textContent=z,i.appendChild(l),y(C(E,{title:"",desc:""}),i),h.set(r,{el:i})},_=o=>{const{key:n,content:r,iscomplete:i}=o.detail,l=h.get(n);if(l&&i)try{const d=JSON.parse(r);y(C(E,{title:d.title,desc:d.desc}),l.el)}catch(d){console.error("cu-card-update error",d)}};return(o,n)=>(c(),p("ys-md-rendering",{content:t.value,onCuCardInstance:k,onCuCardUpdate:_},[...n[0]||(n[0]=[e("div",{"data-register":"cu-card"},null,-1)])],40,A))}}),V=`<script setup lang="ts">\r
import { ref, h, render } from 'vue'\r
import 'ys-md-rendering'\r
import CardAuto from './render.vue'\r
import tailwindCss from './index.css?inline'\r
\r
interface YsRenderUpdateDetail {\r
  key: string\r
  type: string\r
  el: HTMLElement\r
  content: string\r
  iscomplete?: boolean\r
  meta?: unknown\r
}\r
\r
const obj = {\r
  title: '台湾海峡',\r
  desc: '台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\\n\\n台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。'\r
}\r
\r
const json = JSON.stringify(obj)\r
const text = \`<cu-card>\${json}</cu-card>\`\r
\r
const mdstr = ref(text)\r
\r
const getDom = (el: HTMLElement) => {\r
  if (el.shadowRoot) {\r
    return el.shadowRoot as unknown as HTMLElement\r
  } else {\r
    return el\r
  }\r
}\r
\r
const appInstances = new Map<string, any>()\r
\r
const handleCuCardInstance = (event: { detail: YsRenderUpdateDetail }) => {\r
  const { el, key } = event.detail\r
  const dom = getDom(el)\r
  const style = document.createElement('style')\r
  style.textContent = tailwindCss\r
  dom.appendChild(style)\r
  render(h(CardAuto, { title: '', desc: '' }), dom)\r
  appInstances.set(key, { el: dom })\r
}\r
\r
const handleCuCardUpdate = (event: { detail: YsRenderUpdateDetail }) => {\r
  const { key, content, iscomplete } = event.detail\r
  const instance = appInstances.get(key)\r
  if (instance && iscomplete) {\r
    try {\r
      const data = JSON.parse(content)\r
      render(h(CardAuto, { title: data.title, desc: data.desc }), instance.el)\r
    } catch (err) {\r
      console.error('cu-card-update error', err)\r
    }\r
  }\r
}\r
<\/script>\r
\r
<template>\r
  <ys-md-rendering :content="mdstr" @cu-card-instance="handleCuCardInstance" @cu-card-update="handleCuCardUpdate">\r
    <div data-register="cu-card"></div>\r
  </ys-md-rendering>\r
</template>\r
`,P={class:"max-w-sm overflow-hidden rounded-2xl border-2 border-blue-400 bg-white shadow-lg"},Z={key:0,class:"animate-pulse p-6"},q={key:1},G={class:"bg-blue-500 px-6 py-3"},K={class:"text-lg font-semibold text-white"},Q={class:"p-6 text-sm whitespace-pre-wrap text-blue-600"},N={__name:"render",props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(s){return(b,a)=>(c(),p("div",P,[!s.title||!s.desc?(c(),p("div",Z,[...a[0]||(a[0]=[e("div",{class:"mb-4 h-7 w-36 rounded bg-blue-300"},null,-1),e("div",{class:"h-5 w-full rounded bg-blue-200"},null,-1)])])):(c(),p("div",q,[e("div",G,[e("h3",K,f(s.title),1)]),e("p",Q,f(s.desc),1)]))]))}},W=".max-w-sm{max-width:24rem}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.border-2{border-width:2px}.border-blue-400{border-color:#60a5fa}.bg-white{background-color:#fff}.shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.4}}.p-6{padding:1.5rem}.mb-4{margin-bottom:1rem}.h-7{height:1.75rem}.w-36{width:9rem}.rounded{border-radius:.25rem}.bg-blue-300{background-color:#93c5fd}.h-5{height:1.25rem}.w-full{width:100%}.bg-blue-200{background-color:#bfdbfe}.bg-blue-500{background-color:#3b82f6}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-lg{font-size:1.125rem}.font-semibold{font-weight:600}.text-white{color:#fff}.text-sm{font-size:.875rem}.text-blue-600{color:#2563eb}.whitespace-pre-wrap{white-space:pre-wrap}h3,p{margin-block:0}",X=["content"],ee=$({__name:"index",setup(s){const g=`<cu-card>${JSON.stringify({title:"台湾海峡",desc:`台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。

台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。`})}</cu-card>`,t=R(""),v=n=>n.shadowRoot?n.shadowRoot:n,h=new Map,k=n=>{const{el:r,key:i}=n.detail,l=v(r),d=document.createElement("style");d.textContent=W,l.appendChild(d),y(C(N,{title:"",desc:""}),l),h.set(i,{el:l})},_=n=>{const{key:r,content:i,iscomplete:l}=n.detail,d=h.get(r);if(d&&l)try{const x=JSON.parse(i);y(C(N,{title:x.title,desc:x.desc}),d.el)}catch(x){console.error("cu-card-update error",x)}},o=()=>{let n=0;t.value="";const r=setInterval(()=>{t.value+=g[n],n++,g[n]||clearInterval(r)},20)};return(n,r)=>(c(),p(S,null,[u(w(T),{onClick:o},{default:m(()=>[...r[0]||(r[0]=[I("流输出",-1)])]),_:1}),e("ys-md-rendering",{content:t.value,onCuCardInstance:k,onCuCardUpdate:_},[...r[1]||(r[1]=[e("div",{"data-register":"cu-card"},null,-1)])],40,X)],64))}}),te=`<script setup lang="ts">\r
import { ref, h, render } from 'vue'\r
import { NButton } from 'naive-ui'\r
import 'ys-md-rendering'\r
import CardAuto from './render.vue'\r
import tailwindCss from './index.css?inline'\r
\r
interface YsRenderUpdateDetail {\r
  key: string\r
  type: string\r
  el: HTMLElement\r
  content: string\r
  iscomplete?: boolean\r
  meta?: unknown\r
}\r
\r
const obj = {\r
  title: '台湾海峡',\r
  desc: '台湾海峡，是中国大陆与中华人民共和国台湾岛之间连通南海、东海的海峡。西起福建省沿海，东至台湾岛西岸；南北界线有多种说法，一般标准是：南起台湾南端猫鼻头~广东南澳岛之间的连线，北至台湾北端富贵角~福建连江北茭的连线。\\n\\n台湾海峡纵长约400公里，面积约9万平方公里。南宽北窄，南口宽约400公里，北口宽约200公里，北部最窄处为130公里。 **[1]** 其是贯通中国南北海运的要道，处于中国东海大陆架上，地形起伏不平，平均水深约60米。海峡位于亚热带、北热带季风气候区。受黑潮影响，海峡水温较高，盐度和透明度较大、风浪较大。 **[2]** 台湾海峡资源丰富，是中国重要渔场之一。鲯、鲔和鲨为这里三大渔产。海峡底部富集油气资源，还有钛铁、磁铁、金红石、独居石和锆石等矿，品位高，储量大。'\r
}\r
\r
const json = JSON.stringify(obj)\r
const text = \`<cu-card>\${json}</cu-card>\`\r
\r
const mdstr = ref('')\r
\r
const getDom = (el: HTMLElement) => {\r
  if (el.shadowRoot) {\r
    return el.shadowRoot as unknown as HTMLElement\r
  } else {\r
    return el\r
  }\r
}\r
\r
const appInstances = new Map<string, any>()\r
\r
const handleCuCardInstance = (event: { detail: YsRenderUpdateDetail }) => {\r
  const { el, key } = event.detail\r
  const dom = getDom(el)\r
  const style = document.createElement('style')\r
  style.textContent = tailwindCss\r
  dom.appendChild(style)\r
  render(h(CardAuto, { title: '', desc: '' }), dom)\r
  appInstances.set(key, { el: dom })\r
}\r
\r
const handleCuCardUpdate = (event: { detail: YsRenderUpdateDetail }) => {\r
  const { key, content, iscomplete } = event.detail\r
  const instance = appInstances.get(key)\r
  if (instance && iscomplete) {\r
    try {\r
      const data = JSON.parse(content)\r
      render(h(CardAuto, { title: data.title, desc: data.desc }), instance.el)\r
    } catch (err) {\r
      console.error('cu-card-update error', err)\r
    }\r
  }\r
}\r
\r
const render2 = () => {\r
  let i = 0\r
  mdstr.value = ''\r
  const interval = setInterval(() => {\r
    mdstr.value += text[i]\r
    i++\r
    if (!text[i]) clearInterval(interval)\r
  }, 20)\r
}\r
<\/script>\r
\r
<template>\r
  <n-button @click="render2">流输出</n-button>\r
\r
  <ys-md-rendering :content="mdstr" @cu-card-instance="handleCuCardInstance" @cu-card-update="handleCuCardUpdate">\r
    <div data-register="cu-card"></div>\r
  </ys-md-rendering>\r
</template>\r
`,ne=`<key>
内容
</key>`,re="```key\n内容\n```",ie=$({__name:"simpleUsage",setup(s){const b=[{name:"vue3",type:"vue3",code:V}],a=[{name:"vue3",type:"vue3",code:te}];return(g,t)=>(c(),M(D,null,{default:m(()=>[t[3]||(t[3]=e("h1",{class:"text-2xl font-bold"},"快捷注册",-1)),u(U,{codes:b},{default:m(()=>[u(F)]),_:1}),t[4]||(t[4]=e("h1",{class:"text-2xl font-bold"},"流输出",-1)),u(U,{codes:a},{default:m(()=>[u(ee)]),_:1}),t[5]||(t[5]=e("h1",{class:"text-2xl font-bold"},"插件属性",-1)),u(w(j),{bordered:!1,"single-line":!1},{default:m(()=>[...t[0]||(t[0]=[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1),e("tbody",null,[e("tr",null,[e("td",null,"data-register"),e("td",null,"string"),e("td",null,"必填"),e("td",null,"快捷注册指令，会默认注册两种方式，以`key`为例")])],-1)])]),_:1}),t[6]||(t[6]=I(" 方式1： ",-1)),e("pre",{class:"hljs"},[e("code",null,f(ne))]),t[7]||(t[7]=I(" 方式2： ",-1)),e("pre",{class:"hljs"},[e("code",null,f(re))]),t[8]||(t[8]=e("h1",{class:"text-2xl font-bold"},"组件方法",-1)),u(w(j),{bordered:!1,"single-line":!1},{default:m(()=>[...t[1]||(t[1]=[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"说明")])],-1),e("tbody",null,[e("tr",null,[e("td",null,"[key]-instance"),e("td",null,"Function"),e("td",null,"组件示例创建回调")]),e("tr",null,[e("td",null,"[key]-update"),e("td",null,"Function"),e("td",null,"组件示例更新回调")])],-1)])]),_:1}),t[9]||(t[9]=e("h2",{class:"text-2xl font-bold"},"组件方法出参",-1)),u(w(j),{bordered:!1,"single-line":!1},{default:m(()=>[...t[2]||(t[2]=[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"说明")])],-1),e("tbody",null,[e("tr",null,[e("td",null,"key"),e("td",null,"string"),e("td",null,"该示例的唯一键")]),e("tr",null,[e("td",null,"type"),e("td",null,"string"),e("td",null,"该示例的类型，（组件通过`data-register`注册的key）")]),e("tr",null,[e("td",null,"el"),e("td",null,"HTMLElement"),e("td",null,"示例包裹容器")]),e("tr",null,[e("td",null,"content"),e("td",null,"string"),e("td",null,"示例输出内容，纯字符串、json字符串、正则字符串，根据自己需求实现")]),e("tr",null,[e("td",null,"iscomplete"),e("td",null,"boolean"),e("td",null,"示例是否输出完成，如果是json字符串，该参数为true时，代表json字符串输出完成")])],-1)])]),_:1})]),_:1}))}});export{ie as default};
