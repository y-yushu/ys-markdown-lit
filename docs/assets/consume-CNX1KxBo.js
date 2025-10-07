import{o as r}from"./ys-md-rendering.es.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o{constructor(c,t,e,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,b)=>{this.unsubscribe&&(this.unsubscribe!==b&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,b)),this.unsubscribe=b},this.host=c,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=e,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r(this.context,this.host,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n({context:h,subscribe:c}){return(t,e)=>{typeof e=="object"?e.addInitializer(function(){new o(this,{context:h,callback:i=>{t.set.call(this,i)},subscribe:c})}):t.constructor.addInitializer(i=>{new o(i,{context:h,callback:s=>{i[e]=s},subscribe:c})})}}export{n as a};
