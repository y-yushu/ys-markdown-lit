import{t as I}from"./chunk-4BMEZGHF-B3-vk9LB-DPxT1ne6.js";import{p as c,f as J,d as K,l as _,o as j,x as q,w as H,F as O,h as Q,U as X,a2 as Y,a4 as Z,R as tt,A as et,J as at,a5 as w,a6 as rt,a7 as R}from"./mermaid-BGotkrlZ.js";import{z as it}from"./radar-MK3ICKWK-DAU449zM-jWZxnPiX.js";import{h as E}from"./arc-CPL6YQLT-CNwn91GV.js";import{h as nt}from"./ordinal-DfAQgscy-Pc8f3NoK.js";import"./index.vue_vue_type_script_setup_true_lang-DaU-t4Sx.js";import"./index-Dnfs_mlS.js";import"./ys-md-rendering.es-H-lS7OB8.js";import"./ref-4EgzFnS5-Dptg17he.js";import"./consume-CNX1KxBo-C4hJZ7c2.js";import"./_commonjsHelpers-C6fGbg64-BC8KDfbh.js";import"./Button-BNOVJuVY.js";import"./Table-7ex-xPvn.js";import"./_baseUniq-CcP6avan-BLqpIwzf.js";import"./_basePickBy-DNqsubjT-cmfbnW4E.js";import"./clone-Dbqn34BQ-BkKggzLU.js";import"./init-DjUOC4st-DHuO7-vr.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,o=null,f=w(0),g=w(R),S=w(0);function n(e){var r,s=(e=rt(e)).length,u,A,h=0,p=new Array(s),i=new Array(s),y=+f.apply(this,arguments),$=Math.min(R,Math.max(-R,g.apply(this,arguments)-y)),m,D=Math.min(Math.abs($)/s,S.apply(this,arguments)),C=D*($<0?-1:1),d;for(r=0;r<s;++r)(d=i[p[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?p.sort(function(x,T){return a(i[x],i[T])}):o!=null&&p.sort(function(x,T){return o(e[x],e[T])}),r=0,A=h?($-s*C)/h:0;r<s;++r,y=m)u=p[r],d=i[u],m=y+(d>0?d*A:0)+C,i[u]={data:e[u],index:r,value:d,startAngle:y,endAngle:m,padAngle:D};return i}return n.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),n):t},n.sortValues=function(e){return arguments.length?(a=e,o=null,n):a},n.sort=function(e){return arguments.length?(o=e,a=null,n):o},n.startAngle=function(e){return arguments.length?(f=typeof e=="function"?e:w(+e),n):f},n.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),n):g},n.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),n):S},n}var pt=at.pie,F={sections:new Map,showData:!1},M=F.sections,W=F.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=F.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),mt=c(()=>M,"getSections"),ft=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),N={getConfig:ut,clear:dt,setDiagramTitle:H,getDiagramTitle:q,setAccTitle:j,getAccTitle:_,setAccDescription:K,getAccDescription:J,addSection:gt,getSections:mt,setShowData:ft,getShowData:ht},yt=c((t,a)=>{I(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:c(async t=>{const a=await it("pie",t);O.debug(a),yt(a,N)},"parse")},wt=c(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),St=wt,At=c(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,f)=>f.value-o.value);return st().value(o=>o.value)(a)},"createPieArcs"),$t=c((t,a,o,f)=>{O.debug(`rendering pie chart
`+t);const g=f.db,S=Q(),n=X(g.getConfig(),S.pie),e=40,r=18,s=4,u=450,A=u,h=Y(a),p=h.append("g");p.attr("transform","translate("+A/2+","+u/2+")");const{themeVariables:i}=S;let[y]=Z(i.pieOuterStrokeWidth);y??=2;const $=n.textPosition,m=Math.min(A,u)/2-e,D=E().innerRadius(0).outerRadius(m),C=E().innerRadius(m*$).outerRadius(m*$);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+y/2).attr("class","pieOuterCircle");const d=g.getSections(),x=At(d),T=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],v=nt(T);p.selectAll("mySlices").data(x).enter().append("path").attr("d",D).attr("fill",l=>v(l.data.label)).attr("class","pieCircle");let B=0;d.forEach(l=>{B+=l}),p.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/B*100).toFixed(0)+"%").attr("transform",l=>"translate("+C.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const z=p.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend").attr("transform",(l,b)=>{const k=r+s,U=k*v.domain().length/2,V=12*r,G=b*k-U;return"translate("+V+","+G+")"});z.append("rect").attr("width",r).attr("height",r).style("fill",v).style("stroke",v),z.data(x).append("text").attr("x",r+s).attr("y",r-s).text(l=>{const{label:b,value:k}=l.data;return g.getShowData()?`${b} [${k}]`:b});const P=Math.max(...z.selectAll("text").nodes().map(l=>l?.getBoundingClientRect().width??0)),L=A+e+r+s+P;h.attr("viewBox",`0 0 ${L} ${u}`),tt(h,u,L,n.useMaxWidth)},"draw"),Tt={draw:$t},Vt={parser:xt,db:N,renderer:Tt,styles:St};export{Vt as diagram};
