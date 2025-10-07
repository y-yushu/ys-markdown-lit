import{t as S}from"./chunk-4BMEZGHF-B3-vk9LB.js";import{p as l,d as I,f as z,x as F,w as E,l as P,o as R,a2 as B,A as D,U as v,Y as w,J as G,F as j,a8 as U}from"./mermaid.js";import{z as V}from"./radar-MK3ICKWK-DAU449zM.js";import"./index.vue_vue_type_script_setup_true_lang.js";import"./index.js";import"./ys-md-rendering.es.js";import"./ref-4EgzFnS5.js";import"./consume-CNX1KxBo.js";import"./_commonjsHelpers-C6fGbg64.js";import"./Button.js";import"./Table.js";import"./_baseUniq-CcP6avan.js";import"./_basePickBy-DNqsubjT.js";import"./clone-Dbqn34BQ.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},b={axes:[],curves:[],options:h},m=structuredClone(b),W=G.radar,Y=l(()=>v({...W,...w().radar}),"getConfig"),M=l(()=>m.axes,"getAxes"),J=l(()=>m.curves,"getCurves"),Z=l(()=>m.options,"getOptions"),_=l(a=>{m.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),q=l(a=>{m.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:H(t.entries)}))},"setCurves"),H=l(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(i=>i.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),K=l(a=>{const t=a.reduce((e,r)=>(e[r.name]=r,e),{});m.options={showLegend:t.showLegend?.value??h.showLegend,ticks:t.ticks?.value??h.ticks,max:t.max?.value??h.max,min:t.min?.value??h.min,graticule:t.graticule?.value??h.graticule}},"setOptions"),N=l(()=>{D(),m=structuredClone(b)},"clear"),f={getAxes:M,getCurves:J,getOptions:Z,setAxes:_,setCurves:q,setOptions:K,getConfig:Y,clear:N,setAccTitle:R,getAccTitle:P,setDiagramTitle:E,getDiagramTitle:F,getAccDescription:z,setAccDescription:I},Q=l(a=>{S(a,f);const{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),X={parse:l(async a=>{const t=await V("radar",a);j.debug(t),Q(t)},"parse")},tt=l((a,t,e,r)=>{const i=r.db,n=i.getAxes(),o=i.getCurves(),s=i.getOptions(),c=i.getConfig(),d=i.getDiagramTitle(),g=B(t),p=et(g,c),u=s.max??Math.max(...o.map(y=>Math.max(...y.entries))),x=s.min,$=Math.min(c.width,c.height)/2;at(p,n,$,s.ticks,s.graticule),rt(p,n,$,c),C(p,n,o,x,u,s.graticule,c),T(p,o,s.showLegend,c),p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=l((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),at=l((a,t,e,r,i)=>{if(i==="circle")for(let n=0;n<r;n++){const o=e*(n+1)/r;a.append("circle").attr("r",o).attr("class","radarGraticule")}else if(i==="polygon"){const n=t.length;for(let o=0;o<r;o++){const s=e*(o+1)/r,c=t.map((d,g)=>{const p=2*g*Math.PI/n-Math.PI/2,u=s*Math.cos(p),x=s*Math.sin(p);return`${u},${x}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),rt=l((a,t,e,r)=>{const i=t.length;for(let n=0;n<i;n++){const o=t[n].label,s=2*n*Math.PI/i-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(s)).attr("y2",e*r.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),a.append("text").text(o).attr("x",e*r.axisLabelFactor*Math.cos(s)).attr("y",e*r.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function C(a,t,e,r,i,n,o){const s=t.length,c=Math.min(o.width,o.height)/2;e.forEach((d,g)=>{if(d.entries.length!==s)return;const p=d.entries.map((u,x)=>{const $=2*Math.PI*x/s-Math.PI/2,y=L(u,r,i,c),k=y*Math.cos($),O=y*Math.sin($);return{x:k,y:O}});n==="circle"?a.append("path").attr("d",A(p,o.curveTension)).attr("class",`radarCurve-${g}`):n==="polygon"&&a.append("polygon").attr("points",p.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${g}`)})}l(C,"drawCurves");function L(a,t,e,r){const i=Math.min(Math.max(a,t),e);return r*(i-t)/(e-t)}l(L,"relativeRadius");function A(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let i=0;i<e;i++){const n=a[(i-1+e)%e],o=a[i],s=a[(i+1)%e],c=a[(i+2)%e],d={x:o.x+(s.x-n.x)*t,y:o.y+(s.y-n.y)*t},g={x:s.x-(c.x-o.x)*t,y:s.y-(c.y-o.y)*t};r+=` C${d.x},${d.y} ${g.x},${g.y} ${s.x},${s.y}`}return`${r} Z`}l(A,"closedRoundCurve");function T(a,t,e,r){if(!e)return;const i=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,o=20;t.forEach((s,c)=>{const d=a.append("g").attr("transform",`translate(${i}, ${n+c*o})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}l(T,"drawLegend");var it={draw:tt},st=l((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const i=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return e},"genIndexStyles"),nt=l(a=>{const t=U(),e=w(),r=v(t,e.themeVariables),i=v(r.radar,a);return{themeVariables:r,radarOptions:i}},"buildRadarStyleOptions"),ot=l(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=nt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${st(t,e)}
	`},"styles"),bt={parser:X,db:f,renderer:it,styles:ot};export{bt as diagram};
