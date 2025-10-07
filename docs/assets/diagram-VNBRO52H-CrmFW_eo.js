import{t as B}from"./chunk-4BMEZGHF-B3-vk9LB.js";import{p as i,d as z,f as S,x as F,w as P,l as W,o as T,U as y,a2 as v,R,A as Y,Y as A,J as D,F as x}from"./mermaid.js";import{z as E}from"./radar-MK3ICKWK-DAU449zM.js";import"./index.vue_vue_type_script_setup_true_lang.js";import"./index.js";import"./ys-md-rendering.es.js";import"./ref-4EgzFnS5.js";import"./consume-CNX1KxBo.js";import"./_commonjsHelpers-C6fGbg64.js";import"./Button.js";import"./Table.js";import"./_baseUniq-CcP6avan.js";import"./_basePickBy-DNqsubjT.js";import"./clone-Dbqn34BQ.js";var w={packet:[]},u=structuredClone(w),H=D.packet,L=i(()=>{const t=y({...H,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),U=i(()=>u.packet,"getPacket"),I=i(t=>{t.length>0&&u.packet.push(t)},"pushWord"),J=i(()=>{Y(),u=structuredClone(w)},"clear"),m={pushWord:I,getPacket:U,getConfig:L,clear:J,setAccTitle:T,getAccTitle:W,setDiagramTitle:P,getDiagramTitle:F,getAccDescription:S,setAccDescription:z},M=1e4,X=i(t=>{B(t,m);let e=-1,o=[],s=1;const{bitsPerRow:n}=m.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=n+1&&m.getPacket().length<M;){const[h,c]=j({start:a,end:r,label:p},s,n);if(o.push(h),h.end+1===s*n&&(m.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}m.pushWord(o)},"populate"),j=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),q={parse:i(async t=>{const e=await E("packet",t);x.debug(e),X(e)},"parse")},G=i((t,e,o,s)=>{const n=s.db,a=n.getConfig(),{rowHeight:r,paddingY:p,bitWidth:h,bitsPerRow:c}=a,f=n.getPacket(),l=n.getDiagramTitle(),k=r+p,d=k*(f.length+1)-(l?0:r),b=h*c+2,g=v(e);g.attr("viewbox",`0 0 ${b} ${d}`),R(g,d,b,a.useMaxWidth);for(const[$,C]of f.entries())K(g,C,$,a);g.append("text").text(l).attr("x",b/2).attr("y",d-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),K=i((t,e,o,{rowHeight:s,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:h})=>{const c=t.append("g"),f=o*(s+a)+a;for(const l of e){const k=l.start%p*r+1,d=(l.end-l.start+1)*r-n;if(c.append("rect").attr("x",k).attr("y",f).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",k+d/2).attr("y",f+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!h)continue;const b=l.end===l.start,g=f-2;c.append("text").attr("x",k+(b?d/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(l.start),b||c.append("text").attr("x",k+d).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),N={draw:G},O={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},Q=i(({packet:t}={})=>{const e=y(O,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),pt={parser:q,db:m,renderer:N,styles:Q};export{pt as diagram};
