import { T as Tu, E as Mu, x as k, B as Bu, r as qu, i as Iu, a as $u, b as Ru, t as Lu } from "./chunks/custom-element-DwLosoKP.js";
import { n as ee } from "./chunks/property-DXl-UJKd.js";
import { r as ze, e as Pu } from "./chunks/class-map-CS2dXLeZ.js";
import { e as Ou, i as Nu, t as ju } from "./chunks/directive-kLG6oqUu.js";
import { s as Vu, t as Uu } from "./chunks/context-Bx6EvKDU.js";
import { o as ou } from "./chunks/unsafe-html-SzyPlaEh.js";
import { j as E, g as Hu } from "./chunks/index-CTixy1WV.js";
import { B as iu, O as Zu } from "./chunks/converter-viPbAnVx.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const su = "important", Wu = " !" + su, Gu = Ou(class extends Nu {
  constructor(e) {
    if (super(e), e.type !== ju.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((u, t) => {
      const n = e[t];
      return n == null ? u : u + `${t = t.includes("-") ? t : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(e, [u]) {
    const { style: t } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(u)), this.render(u);
    for (const n of this.ft) u[n] == null && (this.ft.delete(n), n.includes("-") ? t.removeProperty(n) : t[n] = null);
    for (const n in u) {
      const r = u[n];
      if (r != null) {
        this.ft.add(n);
        const o = typeof r == "string" && r.endsWith(Wu);
        n.includes("-") || o ? t.setProperty(n, o ? r.slice(0, -11) : r, o ? su : "") : t[n] = r;
      }
    }
    return Tu;
  }
});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ju {
  get value() {
    return this.o;
  }
  set value(u) {
    this.setValue(u);
  }
  setValue(u, t = !1) {
    const n = t || !Object.is(u, this.o);
    this.o = u, n && this.updateObservers();
  }
  constructor(u) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [t, { disposer: n }] of this.subscriptions) t(this.o, n);
    }, u !== void 0 && (this.value = u);
  }
  addCallback(u, t, n) {
    if (!n) return void u(this.value);
    this.subscriptions.has(u) || this.subscriptions.set(u, { disposer: () => {
      this.subscriptions.delete(u);
    }, consumerHost: t });
    const { disposer: r } = this.subscriptions.get(u);
    u(this.value, r);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Qu = class extends Event {
  constructor(u, t) {
    super("context-provider", { bubbles: !0, composed: !0 }), this.context = u, this.contextTarget = t;
  }
}, Pe = class extends Ju {
  constructor(u, t, n) {
    super(t.context !== void 0 ? t.initialValue : n), this.onContextRequest = (r) => {
      if (r.context !== this.context) return;
      const o = r.contextTarget ?? r.composedPath()[0];
      o !== this.host && (r.stopPropagation(), this.addCallback(r.callback, o, r.subscribe));
    }, this.onProviderRequest = (r) => {
      if (r.context !== this.context || (r.contextTarget ?? r.composedPath()[0]) === this.host) return;
      const o = /* @__PURE__ */ new Set();
      for (const [i, { consumerHost: s }] of this.subscriptions) o.has(i) || (o.add(i), s.dispatchEvent(new Vu(this.context, s, i, !0)));
      r.stopPropagation();
    }, this.host = u, t.context !== void 0 ? this.context = t.context : this.context = t, this.attachListeners(), this.host.addController?.(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new Qu(this.context, this.host));
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ku({ context: e }) {
  return (u, t) => {
    const n = /* @__PURE__ */ new WeakMap();
    if (typeof t == "object") return { get() {
      return u.get.call(this);
    }, set(r) {
      return n.get(this).setValue(r), u.set.call(this, r);
    }, init(r) {
      return n.set(this, new Pe(this, { context: e, initialValue: r })), r;
    } };
    {
      u.constructor.addInitializer((i) => {
        n.set(i, new Pe(i, { context: e }));
      });
      const r = Object.getOwnPropertyDescriptor(u, t);
      let o;
      if (r === void 0) {
        const i = /* @__PURE__ */ new WeakMap();
        o = { get() {
          return i.get(this);
        }, set(s) {
          n.get(this).setValue(s), i.set(this, s);
        }, configurable: !0, enumerable: !0 };
      } else {
        const i = r.set;
        o = { ...r, set(s) {
          n.get(this).setValue(s), i?.call(this, s);
        } };
      }
      return void Object.defineProperty(u, t, o);
    }
  };
}
const Oe = {};
function Xu(e) {
  let u = Oe[e];
  if (u)
    return u;
  u = Oe[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    u.push(n);
  }
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    u[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return u;
}
function X(e, u) {
  typeof u != "string" && (u = X.defaultChars);
  const t = Xu(u);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let o = 0, i = n.length; o < i; o += 3) {
      const s = parseInt(n.slice(o + 1, o + 3), 16);
      if (s < 128) {
        r += t[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i) {
        const c = parseInt(n.slice(o + 4, o + 6), 16);
        if ((c & 192) === 128) {
          const a = s << 6 & 1984 | c & 63;
          a < 128 ? r += "��" : r += String.fromCharCode(a), o += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && o + 6 < i) {
        const c = parseInt(n.slice(o + 4, o + 6), 16), a = parseInt(n.slice(o + 7, o + 9), 16);
        if ((c & 192) === 128 && (a & 192) === 128) {
          const l = s << 12 & 61440 | c << 6 & 4032 | a & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? r += "���" : r += String.fromCharCode(l), o += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && o + 9 < i) {
        const c = parseInt(n.slice(o + 4, o + 6), 16), a = parseInt(n.slice(o + 7, o + 9), 16), l = parseInt(n.slice(o + 10, o + 12), 16);
        if ((c & 192) === 128 && (a & 192) === 128 && (l & 192) === 128) {
          let d = s << 18 & 1835008 | c << 12 & 258048 | a << 6 & 4032 | l & 63;
          d < 65536 || d > 1114111 ? r += "����" : (d -= 65536, r += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), o += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
X.defaultChars = ";/?:@&=+$,#";
X.componentChars = "";
const Ne = {};
function Yu(e) {
  let u = Ne[e];
  if (u)
    return u;
  u = Ne[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(n) ? u.push(n) : u.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < e.length; t++)
    u[e.charCodeAt(t)] = e[t];
  return u;
}
function ie(e, u, t) {
  typeof u != "string" && (t = u, u = ie.defaultChars), typeof t > "u" && (t = !0);
  const n = Yu(u);
  let r = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e.charCodeAt(o);
    if (t && s === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      r += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      r += n[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < i) {
        const c = e.charCodeAt(o + 1);
        if (c >= 56320 && c <= 57343) {
          r += encodeURIComponent(e[o] + e[o + 1]), o++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[o]);
  }
  return r;
}
ie.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ie.componentChars = "-_.!~*'()";
function Te(e) {
  let u = "";
  return u += e.protocol || "", u += e.slashes ? "//" : "", u += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? u += "[" + e.hostname + "]" : u += e.hostname || "", u += e.port ? ":" + e.port : "", u += e.pathname || "", u += e.search || "", u += e.hash || "", u;
}
function fe() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const et = /^([a-z0-9.+-]+:)/i, ut = /:[0-9]*$/, tt = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, rt = ["<", ">", '"', "`", " ", "\r", `
`, "	"], nt = ["{", "}", "|", "\\", "^", "`"].concat(rt), ot = ["'"].concat(nt), je = ["%", "/", "?", ";", "#"].concat(ot), Ve = ["/", "?", "#"], it = 255, Ue = /^[+a-z0-9A-Z_-]{0,63}$/, st = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, He = {
  javascript: !0,
  "javascript:": !0
}, Ze = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Me(e, u) {
  if (e && e instanceof fe) return e;
  const t = new fe();
  return t.parse(e, u), t;
}
fe.prototype.parse = function(e, u) {
  let t, n, r, o = e;
  if (o = o.trim(), !u && e.split("#").length === 1) {
    const a = tt.exec(o);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  let i = et.exec(o);
  if (i && (i = i[0], t = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (u || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = o.substr(0, 2) === "//", r && !(i && He[i]) && (o = o.substr(2), this.slashes = !0)), !He[i] && (r || i && !Ze[i])) {
    let a = -1;
    for (let f = 0; f < Ve.length; f++)
      n = o.indexOf(Ve[f]), n !== -1 && (a === -1 || n < a) && (a = n);
    let l, d;
    a === -1 ? d = o.lastIndexOf("@") : d = o.lastIndexOf("@", a), d !== -1 && (l = o.slice(0, d), o = o.slice(d + 1), this.auth = l), a = -1;
    for (let f = 0; f < je.length; f++)
      n = o.indexOf(je[f]), n !== -1 && (a === -1 || n < a) && (a = n);
    a === -1 && (a = o.length), o[a - 1] === ":" && a--;
    const p = o.slice(0, a);
    o = o.slice(a), this.parseHost(p), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const f = this.hostname.split(/\./);
      for (let w = 0, _ = f.length; w < _; w++) {
        const v = f[w];
        if (v && !v.match(Ue)) {
          let b = "";
          for (let x = 0, m = v.length; x < m; x++)
            v.charCodeAt(x) > 127 ? b += "x" : b += v[x];
          if (!b.match(Ue)) {
            const x = f.slice(0, w), m = f.slice(w + 1), g = v.match(st);
            g && (x.push(g[1]), m.unshift(g[2])), m.length && (o = m.join(".") + o), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > it && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = o.indexOf("#");
  s !== -1 && (this.hash = o.substr(s), o = o.slice(0, s));
  const c = o.indexOf("?");
  return c !== -1 && (this.search = o.substr(c), o = o.slice(0, c)), o && (this.pathname = o), Ze[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
fe.prototype.parseHost = function(e) {
  let u = ut.exec(e);
  u && (u = u[0], u !== ":" && (this.port = u.substr(1)), e = e.substr(0, e.length - u.length)), e && (this.hostname = e);
};
const ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: X,
  encode: ie,
  format: Te,
  parse: Me
}, Symbol.toStringTag, { value: "Module" })), cu = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, au = /[\0-\x1F\x7F-\x9F]/, at = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Be = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, lu = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, du = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: cu,
  Cc: au,
  Cf: at,
  P: Be,
  S: lu,
  Z: du
}, Symbol.toStringTag, { value: "Module" })), dt = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), ft = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var ke;
const ht = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), pt = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (ke = String.fromCodePoint) !== null && ke !== void 0 ? ke : function(e) {
    let u = "";
    return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u;
  }
);
function bt(e) {
  var u;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = ht.get(e)) !== null && u !== void 0 ? u : e;
}
var T;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(T || (T = {}));
const mt = 32;
var W;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(W || (W = {}));
function Ae(e) {
  return e >= T.ZERO && e <= T.NINE;
}
function xt(e) {
  return e >= T.UPPER_A && e <= T.UPPER_F || e >= T.LOWER_A && e <= T.LOWER_F;
}
function gt(e) {
  return e >= T.UPPER_A && e <= T.UPPER_Z || e >= T.LOWER_A && e <= T.LOWER_Z || Ae(e);
}
function wt(e) {
  return e === T.EQUALS || gt(e);
}
var z;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(z || (z = {}));
var Z;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Z || (Z = {}));
class kt {
  constructor(u, t, n) {
    this.decodeTree = u, this.emitCodePoint = t, this.errors = n, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Z.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(u) {
    this.decodeMode = u, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(u, t) {
    switch (this.state) {
      case z.EntityStart:
        return u.charCodeAt(t) === T.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(u, t));
      case z.NumericStart:
        return this.stateNumericStart(u, t);
      case z.NumericDecimal:
        return this.stateNumericDecimal(u, t);
      case z.NumericHex:
        return this.stateNumericHex(u, t);
      case z.NamedEntity:
        return this.stateNamedEntity(u, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(u, t) {
    return t >= u.length ? -1 : (u.charCodeAt(t) | mt) === T.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(u, t));
  }
  addToNumericResult(u, t, n, r) {
    if (t !== n) {
      const o = n - t;
      this.result = this.result * Math.pow(r, o) + parseInt(u.substr(t, o), r), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (Ae(r) || xt(r))
        t += 1;
      else
        return this.addToNumericResult(u, n, t, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(u, n, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (Ae(r))
        t += 1;
      else
        return this.addToNumericResult(u, n, t, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(u, n, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(u, t) {
    var n;
    if (this.consumed <= t)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (u === T.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Z.Strict)
      return 0;
    return this.emitCodePoint(bt(this.result), this.consumed), this.errors && (u !== T.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(u, t) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], o = (r & W.VALUE_LENGTH) >> 14;
    for (; t < u.length; t++, this.excess++) {
      const i = u.charCodeAt(t);
      if (this.treeIndex = _t(n, r, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Z.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        wt(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], o = (r & W.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === T.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== Z.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var u;
    const { result: t, decodeTree: n } = this, r = (n[t] & W.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, r, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(u, t, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(t === 1 ? r[u] & ~W.VALUE_LENGTH : r[u + 1], n), t === 3 && this.emitCodePoint(r[u + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var u;
    switch (this.state) {
      case z.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Z.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case z.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case z.NumericHex:
        return this.emitNumericEntity(0, 3);
      case z.NumericStart:
        return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case z.EntityStart:
        return 0;
    }
  }
}
function fu(e) {
  let u = "";
  const t = new kt(e, (n) => u += pt(n));
  return function(r, o) {
    let i = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      u += r.slice(i, s), t.startEntity(o);
      const a = t.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (a < 0) {
        i = s + t.end();
        break;
      }
      i = s + a, s = a === 0 ? i + 1 : i;
    }
    const c = u + r.slice(i);
    return u = "", c;
  };
}
function _t(e, u, t, n) {
  const r = (u & W.BRANCH_LENGTH) >> 7, o = u & W.JUMP_TABLE;
  if (r === 0)
    return o !== 0 && n === o ? t : -1;
  if (o) {
    const c = n - o;
    return c < 0 || c >= r ? -1 : e[t + c] - 1;
  }
  let i = t, s = i + r - 1;
  for (; i <= s; ) {
    const c = i + s >>> 1, a = e[c];
    if (a < n)
      i = c + 1;
    else if (a > n)
      s = c - 1;
    else
      return e[c + r];
  }
  return -1;
}
const yt = fu(dt);
fu(ft);
function hu(e, u = Z.Legacy) {
  return yt(e, u);
}
function vt(e) {
  return Object.prototype.toString.call(e);
}
function qe(e) {
  return vt(e) === "[object String]";
}
const Ct = Object.prototype.hasOwnProperty;
function Dt(e, u) {
  return Ct.call(e, u);
}
function be(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(n) {
        e[n] = t[n];
      });
    }
  }), e;
}
function pu(e, u, t) {
  return [].concat(e.slice(0, u), t, e.slice(u + 1));
}
function Ie(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function he(e) {
  if (e > 65535) {
    e -= 65536;
    const u = 55296 + (e >> 10), t = 56320 + (e & 1023);
    return String.fromCharCode(u, t);
  }
  return String.fromCharCode(e);
}
const bu = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Et = /&([a-z#][a-z0-9]{1,31});/gi, At = new RegExp(bu.source + "|" + Et.source, "gi"), Ft = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function St(e, u) {
  if (u.charCodeAt(0) === 35 && Ft.test(u)) {
    const n = u[1].toLowerCase() === "x" ? parseInt(u.slice(2), 16) : parseInt(u.slice(1), 10);
    return Ie(n) ? he(n) : e;
  }
  const t = hu(e);
  return t !== e ? t : e;
}
function zt(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(bu, "$1");
}
function Y(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(At, function(u, t, n) {
    return t || St(u, n);
  });
}
const Tt = /[&<>"]/, Mt = /[&<>"]/g, Bt = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function qt(e) {
  return Bt[e];
}
function G(e) {
  return Tt.test(e) ? e.replace(Mt, qt) : e;
}
const It = /[.?*+^$[\]\\(){}|-]/g;
function $t(e) {
  return e.replace(It, "\\$&");
}
function D(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function te(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function re(e) {
  return Be.test(e) || lu.test(e);
}
function ne(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function me(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Rt = { mdurl: ct, ucmicro: lt }, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: pu,
  assign: be,
  escapeHtml: G,
  escapeRE: $t,
  fromCodePoint: he,
  has: Dt,
  isMdAsciiPunct: ne,
  isPunctChar: re,
  isSpace: D,
  isString: qe,
  isValidEntityCode: Ie,
  isWhiteSpace: te,
  lib: Rt,
  normalizeReference: me,
  unescapeAll: Y,
  unescapeMd: zt
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, u, t) {
  let n, r, o, i;
  const s = e.posMax, c = e.pos;
  for (e.pos = u + 1, n = 1; e.pos < s; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (n--, n === 0)) {
      r = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        n++;
      else if (t)
        return e.pos = c, -1;
    }
  }
  let a = -1;
  return r && (a = e.pos), e.pos = c, a;
}
function Ot(e, u, t) {
  let n, r = u;
  const o = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < t; ) {
      if (n = e.charCodeAt(r), n === 10 || n === 60)
        return o;
      if (n === 62)
        return o.pos = r + 1, o.str = Y(e.slice(u + 1, r)), o.ok = !0, o;
      if (n === 92 && r + 1 < t) {
        r += 2;
        continue;
      }
      r++;
    }
    return o;
  }
  let i = 0;
  for (; r < t && (n = e.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < t) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (n === 40 && (i++, i > 32))
      return o;
    if (n === 41) {
      if (i === 0)
        break;
      i--;
    }
    r++;
  }
  return u === r || i !== 0 || (o.str = Y(e.slice(u, r)), o.pos = r, o.ok = !0), o;
}
function Nt(e, u, t, n) {
  let r, o = u;
  const i = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    i.str = n.str, i.marker = n.marker;
  else {
    if (o >= t)
      return i;
    let s = e.charCodeAt(o);
    if (s !== 34 && s !== 39 && s !== 40)
      return i;
    u++, o++, s === 40 && (s = 41), i.marker = s;
  }
  for (; o < t; ) {
    if (r = e.charCodeAt(o), r === i.marker)
      return i.pos = o + 1, i.str += Y(e.slice(u, o)), i.ok = !0, i;
    if (r === 40 && i.marker === 41)
      return i;
    r === 92 && o + 1 < t && o++, o++;
  }
  return i.can_continue = !0, i.str += Y(e.slice(u, o)), i;
}
const jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ot,
  parseLinkLabel: Pt,
  parseLinkTitle: Nt
}, Symbol.toStringTag, { value: "Module" })), O = {};
O.code_inline = function(e, u, t, n, r) {
  const o = e[u];
  return "<code" + r.renderAttrs(o) + ">" + G(o.content) + "</code>";
};
O.code_block = function(e, u, t, n, r) {
  const o = e[u];
  return "<pre" + r.renderAttrs(o) + "><code>" + G(e[u].content) + `</code></pre>
`;
};
O.fence = function(e, u, t, n, r) {
  const o = e[u], i = o.info ? Y(o.info).trim() : "";
  let s = "", c = "";
  if (i) {
    const l = i.split(/(\s+)/g);
    s = l[0], c = l.slice(2).join("");
  }
  let a;
  if (t.highlight ? a = t.highlight(o.content, s, c) || G(o.content) : a = G(o.content), a.indexOf("<pre") === 0)
    return a + `
`;
  if (i) {
    const l = o.attrIndex("class"), d = o.attrs ? o.attrs.slice() : [];
    l < 0 ? d.push(["class", t.langPrefix + s]) : (d[l] = d[l].slice(), d[l][1] += " " + t.langPrefix + s);
    const p = {
      attrs: d
    };
    return `<pre><code${r.renderAttrs(p)}>${a}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(o)}>${a}</code></pre>
`;
};
O.image = function(e, u, t, n, r) {
  const o = e[u];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, t, n), r.renderToken(e, u, t);
};
O.hardbreak = function(e, u, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
O.softbreak = function(e, u, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
O.text = function(e, u) {
  return G(e[u].content);
};
O.html_block = function(e, u) {
  return e[u].content;
};
O.html_inline = function(e, u) {
  return e[u].content;
};
function ue() {
  this.rules = be({}, O);
}
ue.prototype.renderAttrs = function(u) {
  let t, n, r;
  if (!u.attrs)
    return "";
  for (r = "", t = 0, n = u.attrs.length; t < n; t++)
    r += " " + G(u.attrs[t][0]) + '="' + G(u.attrs[t][1]) + '"';
  return r;
};
ue.prototype.renderToken = function(u, t, n) {
  const r = u[t];
  let o = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && t && u[t - 1].hidden && (o += `
`), o += (r.nesting === -1 ? "</" : "<") + r.tag, o += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (o += " /");
  let i = !1;
  if (r.block && (i = !0, r.nesting === 1 && t + 1 < u.length)) {
    const s = u[t + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
ue.prototype.renderInline = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    typeof r[s] < "u" ? n += r[s](e, o, u, t, this) : n += this.renderToken(e, o, u);
  }
  return n;
};
ue.prototype.renderInlineAsText = function(e, u, t) {
  let n = "";
  for (let r = 0, o = e.length; r < o; r++)
    switch (e[r].type) {
      case "text":
        n += e[r].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[r].children, u, t);
        break;
      case "html_inline":
      case "html_block":
        n += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
ue.prototype.render = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    s === "inline" ? n += this.renderInline(e[o].children, u, t) : typeof r[s] < "u" ? n += r[s](e, o, u, t, this) : n += this.renderToken(e, o, u, t);
  }
  return n;
};
function B() {
  this.__rules__ = [], this.__cache__ = null;
}
B.prototype.__find__ = function(e) {
  for (let u = 0; u < this.__rules__.length; u++)
    if (this.__rules__[u].name === e)
      return u;
  return -1;
};
B.prototype.__compile__ = function() {
  const e = this, u = [""];
  e.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(n) {
      u.indexOf(n) < 0 && u.push(n);
    });
  }), e.__cache__ = {}, u.forEach(function(t) {
    e.__cache__[t] = [], e.__rules__.forEach(function(n) {
      n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn));
    });
  });
};
B.prototype.at = function(e, u, t) {
  const n = this.__find__(e), r = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = u, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
B.prototype.before = function(e, u, t, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
B.prototype.after = function(e, u, t, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
B.prototype.push = function(e, u, t) {
  const n = t || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: u,
    alt: n.alt || []
  }), this.__cache__ = null;
};
B.prototype.enable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !0, t.push(n);
  }, this), this.__cache__ = null, t;
};
B.prototype.enableOnly = function(e, u) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(e, u);
};
B.prototype.disable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !1, t.push(n);
  }, this), this.__cache__ = null, t;
};
B.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function R(e, u, t) {
  this.type = e, this.tag = u, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
R.prototype.attrIndex = function(u) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let n = 0, r = t.length; n < r; n++)
    if (t[n][0] === u)
      return n;
  return -1;
};
R.prototype.attrPush = function(u) {
  this.attrs ? this.attrs.push(u) : this.attrs = [u];
};
R.prototype.attrSet = function(u, t) {
  const n = this.attrIndex(u), r = [u, t];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
R.prototype.attrGet = function(u) {
  const t = this.attrIndex(u);
  let n = null;
  return t >= 0 && (n = this.attrs[t][1]), n;
};
R.prototype.attrJoin = function(u, t) {
  const n = this.attrIndex(u);
  n < 0 ? this.attrPush([u, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t;
};
function mu(e, u, t) {
  this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = u;
}
mu.prototype.Token = R;
const Vt = /\r\n?|\n/g, Ut = /\0/g;
function Ht(e) {
  let u;
  u = e.src.replace(Vt, `
`), u = u.replace(Ut, "�"), e.src = u;
}
function Zt(e) {
  let u;
  e.inlineMode ? (u = new e.Token("inline", "", 0), u.content = e.src, u.map = [0, 1], u.children = [], e.tokens.push(u)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Wt(e) {
  const u = e.tokens;
  for (let t = 0, n = u.length; t < n; t++) {
    const r = u[t];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Gt(e) {
  return /^<a[>\s]/i.test(e);
}
function Jt(e) {
  return /^<\/a\s*>/i.test(e);
}
function Qt(e) {
  const u = e.tokens;
  if (e.md.options.linkify)
    for (let t = 0, n = u.length; t < n; t++) {
      if (u[t].type !== "inline" || !e.md.linkify.pretest(u[t].content))
        continue;
      let r = u[t].children, o = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        const s = r[i];
        if (s.type === "link_close") {
          for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (s.type === "html_inline" && (Gt(s.content) && o > 0 && o--, Jt(s.content) && o++), !(o > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const c = s.content;
          let a = e.md.linkify.match(c);
          const l = [];
          let d = s.level, p = 0;
          a.length > 0 && a[0].index === 0 && i > 0 && r[i - 1].type === "text_special" && (a = a.slice(1));
          for (let h = 0; h < a.length; h++) {
            const f = a[h].url, w = e.md.normalizeLink(f);
            if (!e.md.validateLink(w))
              continue;
            let _ = a[h].text;
            a[h].schema ? a[h].schema === "mailto:" && !/^mailto:/i.test(_) ? _ = e.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : _ = e.md.normalizeLinkText(_) : _ = e.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, "");
            const v = a[h].index;
            if (v > p) {
              const g = new e.Token("text", "", 0);
              g.content = c.slice(p, v), g.level = d, l.push(g);
            }
            const b = new e.Token("link_open", "a", 1);
            b.attrs = [["href", w]], b.level = d++, b.markup = "linkify", b.info = "auto", l.push(b);
            const x = new e.Token("text", "", 0);
            x.content = _, x.level = d, l.push(x);
            const m = new e.Token("link_close", "a", -1);
            m.level = --d, m.markup = "linkify", m.info = "auto", l.push(m), p = a[h].lastIndex;
          }
          if (p < c.length) {
            const h = new e.Token("text", "", 0);
            h.content = c.slice(p), h.level = d, l.push(h);
          }
          u[t].children = r = pu(r, i, l);
        }
      }
    }
}
const xu = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Kt = /\((c|tm|r)\)/i, Xt = /\((c|tm|r)\)/ig, Yt = {
  c: "©",
  r: "®",
  tm: "™"
};
function er(e, u) {
  return Yt[u.toLowerCase()];
}
function ur(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && (n.content = n.content.replace(Xt, er)), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function tr(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && xu.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function rr(e) {
  let u;
  if (e.md.options.typographer)
    for (u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type === "inline" && (Kt.test(e.tokens[u].content) && ur(e.tokens[u].children), xu.test(e.tokens[u].content) && tr(e.tokens[u].children));
}
const nr = /['"]/, We = /['"]/g, Ge = "’";
function le(e, u, t) {
  return e.slice(0, u) + t + e.slice(u + 1);
}
function or(e, u) {
  let t;
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], i = e[r].level;
    for (t = n.length - 1; t >= 0 && !(n[t].level <= i); t--)
      ;
    if (n.length = t + 1, o.type !== "text")
      continue;
    let s = o.content, c = 0, a = s.length;
    e:
      for (; c < a; ) {
        We.lastIndex = c;
        const l = We.exec(s);
        if (!l)
          break;
        let d = !0, p = !0;
        c = l.index + 1;
        const h = l[0] === "'";
        let f = 32;
        if (l.index - 1 >= 0)
          f = s.charCodeAt(l.index - 1);
        else
          for (t = r - 1; t >= 0 && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t--)
            if (e[t].content) {
              f = e[t].content.charCodeAt(e[t].content.length - 1);
              break;
            }
        let w = 32;
        if (c < a)
          w = s.charCodeAt(c);
        else
          for (t = r + 1; t < e.length && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t++)
            if (e[t].content) {
              w = e[t].content.charCodeAt(0);
              break;
            }
        const _ = ne(f) || re(String.fromCharCode(f)), v = ne(w) || re(String.fromCharCode(w)), b = te(f), x = te(w);
        if (x ? d = !1 : v && (b || _ || (d = !1)), b ? p = !1 : _ && (x || v || (p = !1)), w === 34 && l[0] === '"' && f >= 48 && f <= 57 && (p = d = !1), d && p && (d = _, p = v), !d && !p) {
          h && (o.content = le(o.content, l.index, Ge));
          continue;
        }
        if (p)
          for (t = n.length - 1; t >= 0; t--) {
            let m = n[t];
            if (n[t].level < i)
              break;
            if (m.single === h && n[t].level === i) {
              m = n[t];
              let g, y;
              h ? (g = u.md.options.quotes[2], y = u.md.options.quotes[3]) : (g = u.md.options.quotes[0], y = u.md.options.quotes[1]), o.content = le(o.content, l.index, y), e[m.token].content = le(
                e[m.token].content,
                m.pos,
                g
              ), c += y.length - 1, m.token === r && (c += g.length - 1), s = o.content, a = s.length, n.length = t;
              continue e;
            }
          }
        d ? n.push({
          token: r,
          pos: l.index,
          single: h,
          level: i
        }) : p && h && (o.content = le(o.content, l.index, Ge));
      }
  }
}
function ir(e) {
  if (e.md.options.typographer)
    for (let u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type !== "inline" || !nr.test(e.tokens[u].content) || or(e.tokens[u].children, e);
}
function sr(e) {
  let u, t;
  const n = e.tokens, r = n.length;
  for (let o = 0; o < r; o++) {
    if (n[o].type !== "inline") continue;
    const i = n[o].children, s = i.length;
    for (u = 0; u < s; u++)
      i[u].type === "text_special" && (i[u].type = "text");
    for (u = t = 0; u < s; u++)
      i[u].type === "text" && u + 1 < s && i[u + 1].type === "text" ? i[u + 1].content = i[u].content + i[u + 1].content : (u !== t && (i[t] = i[u]), t++);
    u !== t && (i.length = t);
  }
}
const _e = [
  ["normalize", Ht],
  ["block", Zt],
  ["inline", Wt],
  ["linkify", Qt],
  ["replacements", rr],
  ["smartquotes", ir],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", sr]
];
function $e() {
  this.ruler = new B();
  for (let e = 0; e < _e.length; e++)
    this.ruler.push(_e[e][0], _e[e][1]);
}
$e.prototype.process = function(e) {
  const u = this.ruler.getRules("");
  for (let t = 0, n = u.length; t < n; t++)
    u[t](e);
};
$e.prototype.State = mu;
function N(e, u, t, n) {
  this.src = e, this.md = u, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let o = 0, i = 0, s = 0, c = 0, a = r.length, l = !1; i < a; i++) {
    const d = r.charCodeAt(i);
    if (!l)
      if (D(d)) {
        s++, d === 9 ? c += 4 - c % 4 : c++;
        continue;
      } else
        l = !0;
    (d === 10 || i === a - 1) && (d !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(s), this.sCount.push(c), this.bsCount.push(0), l = !1, s = 0, c = 0, o = i + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
N.prototype.push = function(e, u, t) {
  const n = new R(e, u, t);
  return n.block = !0, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n), n;
};
N.prototype.isEmpty = function(u) {
  return this.bMarks[u] + this.tShift[u] >= this.eMarks[u];
};
N.prototype.skipEmptyLines = function(u) {
  for (let t = this.lineMax; u < t && !(this.bMarks[u] + this.tShift[u] < this.eMarks[u]); u++)
    ;
  return u;
};
N.prototype.skipSpaces = function(u) {
  for (let t = this.src.length; u < t; u++) {
    const n = this.src.charCodeAt(u);
    if (!D(n))
      break;
  }
  return u;
};
N.prototype.skipSpacesBack = function(u, t) {
  if (u <= t)
    return u;
  for (; u > t; )
    if (!D(this.src.charCodeAt(--u)))
      return u + 1;
  return u;
};
N.prototype.skipChars = function(u, t) {
  for (let n = this.src.length; u < n && this.src.charCodeAt(u) === t; u++)
    ;
  return u;
};
N.prototype.skipCharsBack = function(u, t, n) {
  if (u <= n)
    return u;
  for (; u > n; )
    if (t !== this.src.charCodeAt(--u))
      return u + 1;
  return u;
};
N.prototype.getLines = function(u, t, n, r) {
  if (u >= t)
    return "";
  const o = new Array(t - u);
  for (let i = 0, s = u; s < t; s++, i++) {
    let c = 0;
    const a = this.bMarks[s];
    let l = a, d;
    for (s + 1 < t || r ? d = this.eMarks[s] + 1 : d = this.eMarks[s]; l < d && c < n; ) {
      const p = this.src.charCodeAt(l);
      if (D(p))
        p === 9 ? c += 4 - (c + this.bsCount[s]) % 4 : c++;
      else if (l - a < this.tShift[s])
        c++;
      else
        break;
      l++;
    }
    c > n ? o[i] = new Array(c - n + 1).join(" ") + this.src.slice(l, d) : o[i] = this.src.slice(l, d);
  }
  return o.join("");
};
N.prototype.Token = R;
const cr = 65536;
function ye(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  return e.src.slice(t, n);
}
function Je(e) {
  const u = [], t = e.length;
  let n = 0, r = e.charCodeAt(n), o = !1, i = 0, s = "";
  for (; n < t; )
    r === 124 && (o ? (s += e.substring(i, n - 1), i = n) : (u.push(s + e.substring(i, n)), s = "", i = n + 1)), o = r === 92, n++, r = e.charCodeAt(n);
  return u.push(s + e.substring(i)), u;
}
function ar(e, u, t, n) {
  if (u + 2 > t)
    return !1;
  let r = u + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[r] + e.tShift[r];
  if (o >= e.eMarks[r])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 || o >= e.eMarks[r])
    return !1;
  const s = e.src.charCodeAt(o++);
  if (s !== 124 && s !== 45 && s !== 58 && !D(s) || i === 45 && D(s))
    return !1;
  for (; o < e.eMarks[r]; ) {
    const m = e.src.charCodeAt(o);
    if (m !== 124 && m !== 45 && m !== 58 && !D(m))
      return !1;
    o++;
  }
  let c = ye(e, u + 1), a = c.split("|");
  const l = [];
  for (let m = 0; m < a.length; m++) {
    const g = a[m].trim();
    if (!g) {
      if (m === 0 || m === a.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(g))
      return !1;
    g.charCodeAt(g.length - 1) === 58 ? l.push(g.charCodeAt(0) === 58 ? "center" : "right") : g.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (c = ye(e, u).trim(), c.indexOf("|") === -1 || e.sCount[u] - e.blkIndent >= 4)
    return !1;
  a = Je(c), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop();
  const d = a.length;
  if (d === 0 || d !== l.length)
    return !1;
  if (n)
    return !0;
  const p = e.parentType;
  e.parentType = "table";
  const h = e.md.block.ruler.getRules("blockquote"), f = e.push("table_open", "table", 1), w = [u, 0];
  f.map = w;
  const _ = e.push("thead_open", "thead", 1);
  _.map = [u, u + 1];
  const v = e.push("tr_open", "tr", 1);
  v.map = [u, u + 1];
  for (let m = 0; m < a.length; m++) {
    const g = e.push("th_open", "th", 1);
    l[m] && (g.attrs = [["style", "text-align:" + l[m]]]);
    const y = e.push("inline", "", 0);
    y.content = a[m].trim(), y.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let b, x = 0;
  for (r = u + 2; r < t && !(e.sCount[r] < e.blkIndent); r++) {
    let m = !1;
    for (let y = 0, F = h.length; y < F; y++)
      if (h[y](e, r, t, !0)) {
        m = !0;
        break;
      }
    if (m || (c = ye(e, r).trim(), !c) || e.sCount[r] - e.blkIndent >= 4 || (a = Je(c), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop(), x += d - a.length, x > cr))
      break;
    if (r === u + 2) {
      const y = e.push("tbody_open", "tbody", 1);
      y.map = b = [u + 2, 0];
    }
    const g = e.push("tr_open", "tr", 1);
    g.map = [r, r + 1];
    for (let y = 0; y < d; y++) {
      const F = e.push("td_open", "td", 1);
      l[y] && (F.attrs = [["style", "text-align:" + l[y]]]);
      const M = e.push("inline", "", 0);
      M.content = a[y] ? a[y].trim() : "", M.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return b && (e.push("tbody_close", "tbody", -1), b[1] = r), e.push("table_close", "table", -1), w[1] = r, e.parentType = p, e.line = r, !0;
}
function lr(e, u, t) {
  if (e.sCount[u] - e.blkIndent < 4)
    return !1;
  let n = u + 1, r = n;
  for (; n < t; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  e.line = r;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(u, r, 4 + e.blkIndent, !1) + `
`, o.map = [u, e.line], !0;
}
function dr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || r + 3 > o)
    return !1;
  const i = e.src.charCodeAt(r);
  if (i !== 126 && i !== 96)
    return !1;
  let s = r;
  r = e.skipChars(r, i);
  let c = r - s;
  if (c < 3)
    return !1;
  const a = e.src.slice(s, r), l = e.src.slice(r, o);
  if (i === 96 && l.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (n)
    return !0;
  let d = u, p = !1;
  for (; d++, !(d >= t || (r = s = e.bMarks[d] + e.tShift[d], o = e.eMarks[d], r < o && e.sCount[d] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === i && !(e.sCount[d] - e.blkIndent >= 4) && (r = e.skipChars(r, i), !(r - s < c) && (r = e.skipSpaces(r), !(r < o)))) {
      p = !0;
      break;
    }
  c = e.sCount[u], e.line = d + (p ? 1 : 0);
  const h = e.push("fence", "code", 0);
  return h.info = l, h.content = e.getLines(u + 1, d, c, !0), h.markup = a, h.map = [u, e.line], !0;
}
function fr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  const i = e.lineMax;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (n)
    return !0;
  const s = [], c = [], a = [], l = [], d = e.md.block.ruler.getRules("blockquote"), p = e.parentType;
  e.parentType = "blockquote";
  let h = !1, f;
  for (f = u; f < t; f++) {
    const x = e.sCount[f] < e.blkIndent;
    if (r = e.bMarks[f] + e.tShift[f], o = e.eMarks[f], r >= o)
      break;
    if (e.src.charCodeAt(r++) === 62 && !x) {
      let g = e.sCount[f] + 1, y, F;
      e.src.charCodeAt(r) === 32 ? (r++, g++, F = !1, y = !0) : e.src.charCodeAt(r) === 9 ? (y = !0, (e.bsCount[f] + g) % 4 === 3 ? (r++, g++, F = !1) : F = !0) : y = !1;
      let M = g;
      for (s.push(e.bMarks[f]), e.bMarks[f] = r; r < o; ) {
        const A = e.src.charCodeAt(r);
        if (D(A))
          A === 9 ? M += 4 - (M + e.bsCount[f] + (F ? 1 : 0)) % 4 : M++;
        else
          break;
        r++;
      }
      h = r >= o, c.push(e.bsCount[f]), e.bsCount[f] = e.sCount[f] + 1 + (y ? 1 : 0), a.push(e.sCount[f]), e.sCount[f] = M - g, l.push(e.tShift[f]), e.tShift[f] = r - e.bMarks[f];
      continue;
    }
    if (h)
      break;
    let m = !1;
    for (let g = 0, y = d.length; g < y; g++)
      if (d[g](e, f, t, !0)) {
        m = !0;
        break;
      }
    if (m) {
      e.lineMax = f, e.blkIndent !== 0 && (s.push(e.bMarks[f]), c.push(e.bsCount[f]), l.push(e.tShift[f]), a.push(e.sCount[f]), e.sCount[f] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[f]), c.push(e.bsCount[f]), l.push(e.tShift[f]), a.push(e.sCount[f]), e.sCount[f] = -1;
  }
  const w = e.blkIndent;
  e.blkIndent = 0;
  const _ = e.push("blockquote_open", "blockquote", 1);
  _.markup = ">";
  const v = [u, 0];
  _.map = v, e.md.block.tokenize(e, u, f);
  const b = e.push("blockquote_close", "blockquote", -1);
  b.markup = ">", e.lineMax = i, e.parentType = p, v[1] = e.line;
  for (let x = 0; x < l.length; x++)
    e.bMarks[x + u] = s[x], e.tShift[x + u] = l[x], e.sCount[x + u] = a[x], e.bsCount[x + u] = c[x];
  return e.blkIndent = w, !0;
}
function hr(e, u, t, n) {
  const r = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[u] + e.tShift[u];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let s = 1;
  for (; o < r; ) {
    const a = e.src.charCodeAt(o++);
    if (a !== i && !D(a))
      return !1;
    a === i && s++;
  }
  if (s < 3)
    return !1;
  if (n)
    return !0;
  e.line = u + 1;
  const c = e.push("hr", "hr", 0);
  return c.map = [u, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i)), !0;
}
function Qe(e, u) {
  const t = e.eMarks[u];
  let n = e.bMarks[u] + e.tShift[u];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < t) {
    const o = e.src.charCodeAt(n);
    if (!D(o))
      return -1;
  }
  return n;
}
function Ke(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  let r = t;
  if (r + 1 >= n)
    return -1;
  let o = e.src.charCodeAt(r++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (r >= n)
      return -1;
    if (o = e.src.charCodeAt(r++), o >= 48 && o <= 57) {
      if (r - t >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return r < n && (o = e.src.charCodeAt(r), !D(o)) ? -1 : r;
}
function pr(e, u) {
  const t = e.level + 2;
  for (let n = u + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === t && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function br(e, u, t, n) {
  let r, o, i, s, c = u, a = !0;
  if (e.sCount[c] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[c] >= e.blkIndent && (l = !0);
  let d, p, h;
  if ((h = Ke(e, c)) >= 0) {
    if (d = !0, i = e.bMarks[c] + e.tShift[c], p = Number(e.src.slice(i, h - 1)), l && p !== 1) return !1;
  } else if ((h = Qe(e, c)) >= 0)
    d = !1;
  else
    return !1;
  if (l && e.skipSpaces(h) >= e.eMarks[c])
    return !1;
  if (n)
    return !0;
  const f = e.src.charCodeAt(h - 1), w = e.tokens.length;
  d ? (s = e.push("ordered_list_open", "ol", 1), p !== 1 && (s.attrs = [["start", p]])) : s = e.push("bullet_list_open", "ul", 1);
  const _ = [c, 0];
  s.map = _, s.markup = String.fromCharCode(f);
  let v = !1;
  const b = e.md.block.ruler.getRules("list"), x = e.parentType;
  for (e.parentType = "list"; c < t; ) {
    o = h, r = e.eMarks[c];
    const m = e.sCount[c] + h - (e.bMarks[c] + e.tShift[c]);
    let g = m;
    for (; o < r; ) {
      const J = e.src.charCodeAt(o);
      if (J === 9)
        g += 4 - (g + e.bsCount[c]) % 4;
      else if (J === 32)
        g++;
      else
        break;
      o++;
    }
    const y = o;
    let F;
    y >= r ? F = 1 : F = g - m, F > 4 && (F = 1);
    const M = m + F;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(f);
    const A = [c, 0];
    s.map = A, d && (s.info = e.src.slice(i, h - 1));
    const V = e.tight, U = e.tShift[c], S = e.sCount[c], ae = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = M, e.tight = !0, e.tShift[c] = y - e.bMarks[c], e.sCount[c] = g, y >= r && e.isEmpty(c + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, c, t, !0), (!e.tight || v) && (a = !1), v = e.line - c > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = ae, e.tShift[c] = U, e.sCount[c] = S, e.tight = V, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(f), c = e.line, A[1] = c, c >= t || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
      break;
    let we = !1;
    for (let J = 0, zu = b.length; J < zu; J++)
      if (b[J](e, c, t, !0)) {
        we = !0;
        break;
      }
    if (we)
      break;
    if (d) {
      if (h = Ke(e, c), h < 0)
        break;
      i = e.bMarks[c] + e.tShift[c];
    } else if (h = Qe(e, c), h < 0)
      break;
    if (f !== e.src.charCodeAt(h - 1))
      break;
  }
  return d ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(f), _[1] = c, e.line = c, e.parentType = x, a && pr(e, w), !0;
}
function mr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u], i = u + 1;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(b) {
    const x = e.lineMax;
    if (b >= x || e.isEmpty(b))
      return null;
    let m = !1;
    if (e.sCount[b] - e.blkIndent > 3 && (m = !0), e.sCount[b] < 0 && (m = !0), !m) {
      const F = e.md.block.ruler.getRules("reference"), M = e.parentType;
      e.parentType = "reference";
      let A = !1;
      for (let V = 0, U = F.length; V < U; V++)
        if (F[V](e, b, x, !0)) {
          A = !0;
          break;
        }
      if (e.parentType = M, A)
        return null;
    }
    const g = e.bMarks[b] + e.tShift[b], y = e.eMarks[b];
    return e.src.slice(g, y + 1);
  }
  let c = e.src.slice(r, o + 1);
  o = c.length;
  let a = -1;
  for (r = 1; r < o; r++) {
    const b = c.charCodeAt(r);
    if (b === 91)
      return !1;
    if (b === 93) {
      a = r;
      break;
    } else if (b === 10) {
      const x = s(i);
      x !== null && (c += x, o = c.length, i++);
    } else if (b === 92 && (r++, r < o && c.charCodeAt(r) === 10)) {
      const x = s(i);
      x !== null && (c += x, o = c.length, i++);
    }
  }
  if (a < 0 || c.charCodeAt(a + 1) !== 58)
    return !1;
  for (r = a + 2; r < o; r++) {
    const b = c.charCodeAt(r);
    if (b === 10) {
      const x = s(i);
      x !== null && (c += x, o = c.length, i++);
    } else if (!D(b)) break;
  }
  const l = e.md.helpers.parseLinkDestination(c, r, o);
  if (!l.ok)
    return !1;
  const d = e.md.normalizeLink(l.str);
  if (!e.md.validateLink(d))
    return !1;
  r = l.pos;
  const p = r, h = i, f = r;
  for (; r < o; r++) {
    const b = c.charCodeAt(r);
    if (b === 10) {
      const x = s(i);
      x !== null && (c += x, o = c.length, i++);
    } else if (!D(b)) break;
  }
  let w = e.md.helpers.parseLinkTitle(c, r, o);
  for (; w.can_continue; ) {
    const b = s(i);
    if (b === null) break;
    c += b, r = o, o = c.length, i++, w = e.md.helpers.parseLinkTitle(c, r, o, w);
  }
  let _;
  for (r < o && f !== r && w.ok ? (_ = w.str, r = w.pos) : (_ = "", r = p, i = h); r < o; ) {
    const b = c.charCodeAt(r);
    if (!D(b))
      break;
    r++;
  }
  if (r < o && c.charCodeAt(r) !== 10 && _)
    for (_ = "", r = p, i = h; r < o; ) {
      const b = c.charCodeAt(r);
      if (!D(b))
        break;
      r++;
    }
  if (r < o && c.charCodeAt(r) !== 10)
    return !1;
  const v = me(c.slice(1, a));
  return v ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[v] > "u" && (e.env.references[v] = { title: _, href: d }), e.line = i), !0) : !1;
}
const xr = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], gr = "[a-zA-Z_:][a-zA-Z0-9:._-]*", wr = "[^\"'=<>`\\x00-\\x20]+", kr = "'[^']*'", _r = '"[^"]*"', yr = "(?:" + wr + "|" + kr + "|" + _r + ")", vr = "(?:\\s+" + gr + "(?:\\s*=\\s*" + yr + ")?)", gu = "<[A-Za-z][A-Za-z0-9\\-]*" + vr + "*\\s*\\/?>", wu = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Cr = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Dr = "<[?][\\s\\S]*?[?]>", Er = "<![A-Za-z][^>]*>", Ar = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Fr = new RegExp("^(?:" + gu + "|" + wu + "|" + Cr + "|" + Dr + "|" + Er + "|" + Ar + ")"), Sr = new RegExp("^(?:" + gu + "|" + wu + ")"), Q = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + xr.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Sr.source + "\\s*$"), /^$/, !1]
];
function zr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let i = e.src.slice(r, o), s = 0;
  for (; s < Q.length && !Q[s][0].test(i); s++)
    ;
  if (s === Q.length)
    return !1;
  if (n)
    return Q[s][2];
  let c = u + 1;
  if (!Q[s][1].test(i)) {
    for (; c < t && !(e.sCount[c] < e.blkIndent); c++)
      if (r = e.bMarks[c] + e.tShift[c], o = e.eMarks[c], i = e.src.slice(r, o), Q[s][1].test(i)) {
        i.length !== 0 && c++;
        break;
      }
  }
  e.line = c;
  const a = e.push("html_block", "", 0);
  return a.map = [u, c], a.content = e.getLines(u, c, e.blkIndent, !0), !0;
}
function Tr(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(r);
  if (i !== 35 || r >= o)
    return !1;
  let s = 1;
  for (i = e.src.charCodeAt(++r); i === 35 && r < o && s <= 6; )
    s++, i = e.src.charCodeAt(++r);
  if (s > 6 || r < o && !D(i))
    return !1;
  if (n)
    return !0;
  o = e.skipSpacesBack(o, r);
  const c = e.skipCharsBack(o, 35, r);
  c > r && D(e.src.charCodeAt(c - 1)) && (o = c), e.line = u + 1;
  const a = e.push("heading_open", "h" + String(s), 1);
  a.markup = "########".slice(0, s), a.map = [u, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, o).trim(), l.map = [u, e.line], l.children = [];
  const d = e.push("heading_close", "h" + String(s), -1);
  return d.markup = "########".slice(0, s), !0;
}
function Mr(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, s = u + 1;
  for (; s < t && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let h = e.bMarks[s] + e.tShift[s];
      const f = e.eMarks[s];
      if (h < f && (i = e.src.charCodeAt(h), (i === 45 || i === 61) && (h = e.skipChars(h, i), h = e.skipSpaces(h), h >= f))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let p = !1;
    for (let h = 0, f = n.length; h < f; h++)
      if (n[h](e, s, t, !0)) {
        p = !0;
        break;
      }
    if (p)
      break;
  }
  if (!o)
    return !1;
  const c = e.getLines(u, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const a = e.push("heading_open", "h" + String(o), 1);
  a.markup = String.fromCharCode(i), a.map = [u, e.line];
  const l = e.push("inline", "", 0);
  l.content = c, l.map = [u, e.line - 1], l.children = [];
  const d = e.push("heading_close", "h" + String(o), -1);
  return d.markup = String.fromCharCode(i), e.parentType = r, !0;
}
function Br(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let o = u + 1;
  for (e.parentType = "paragraph"; o < t && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let a = !1;
    for (let l = 0, d = n.length; l < d; l++)
      if (n[l](e, o, t, !0)) {
        a = !0;
        break;
      }
    if (a)
      break;
  }
  const i = e.getLines(u, o, e.blkIndent, !1).trim();
  e.line = o;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [u, e.line];
  const c = e.push("inline", "", 0);
  return c.content = i, c.map = [u, e.line], c.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const de = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", ar, ["paragraph", "reference"]],
  ["code", lr],
  ["fence", dr, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", fr, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "reference", "blockquote", "list"]],
  ["list", br, ["paragraph", "reference", "blockquote"]],
  ["reference", mr],
  ["html_block", zr, ["paragraph", "reference", "blockquote"]],
  ["heading", Tr, ["paragraph", "reference", "blockquote"]],
  ["lheading", Mr],
  ["paragraph", Br]
];
function xe() {
  this.ruler = new B();
  for (let e = 0; e < de.length; e++)
    this.ruler.push(de[e][0], de[e][1], { alt: (de[e][2] || []).slice() });
}
xe.prototype.tokenize = function(e, u, t) {
  const n = this.ruler.getRules(""), r = n.length, o = e.md.options.maxNesting;
  let i = u, s = !1;
  for (; i < t && (e.line = i = e.skipEmptyLines(i), !(i >= t || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = t;
      break;
    }
    const c = e.line;
    let a = !1;
    for (let l = 0; l < r; l++)
      if (a = n[l](e, i, t, !1), a) {
        if (c >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!a) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), i = e.line, i < t && e.isEmpty(i) && (s = !0, i++, e.line = i);
  }
};
xe.prototype.parse = function(e, u, t, n) {
  if (!e)
    return;
  const r = new this.State(e, u, t, n);
  this.tokenize(r, r.line, r.lineMax);
};
xe.prototype.State = N;
function se(e, u, t, n) {
  this.src = e, this.env = t, this.md = u, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
se.prototype.pushPending = function() {
  const e = new R("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
se.prototype.push = function(e, u, t) {
  this.pending && this.pushPending();
  const n = new R(e, u, t);
  let r = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
se.prototype.scanDelims = function(e, u) {
  const t = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let o = e;
  for (; o < t && this.src.charCodeAt(o) === n; )
    o++;
  const i = o - e, s = o < t ? this.src.charCodeAt(o) : 32, c = ne(r) || re(String.fromCharCode(r)), a = ne(s) || re(String.fromCharCode(s)), l = te(r), d = te(s), p = !d && (!a || l || c), h = !l && (!c || d || a);
  return { can_open: p && (u || !h || c), can_close: h && (u || !p || a), length: i };
};
se.prototype.Token = R;
function qr(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ir(e, u) {
  let t = e.pos;
  for (; t < e.posMax && !qr(e.src.charCodeAt(t)); )
    t++;
  return t === e.pos ? !1 : (u || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0);
}
const $r = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Rr(e, u) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const t = e.pos, n = e.posMax;
  if (t + 3 > n || e.src.charCodeAt(t) !== 58 || e.src.charCodeAt(t + 1) !== 47 || e.src.charCodeAt(t + 2) !== 47) return !1;
  const r = e.pending.match($r);
  if (!r) return !1;
  const o = r[1], i = e.md.linkify.matchAtStart(e.src.slice(t - o.length));
  if (!i) return !1;
  let s = i.url;
  if (s.length <= o.length) return !1;
  s = s.replace(/\*+$/, "");
  const c = e.md.normalizeLink(s);
  if (!e.md.validateLink(c)) return !1;
  if (!u) {
    e.pending = e.pending.slice(0, -o.length);
    const a = e.push("link_open", "a", 1);
    a.attrs = [["href", c]], a.markup = "linkify", a.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(s);
    const d = e.push("link_close", "a", -1);
    d.markup = "linkify", d.info = "auto";
  }
  return e.pos += s.length - o.length, !0;
}
function Lr(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 10)
    return !1;
  const n = e.pending.length - 1, r = e.posMax;
  if (!u)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let o = n - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (t++; t < r && D(e.src.charCodeAt(t)); )
    t++;
  return e.pos = t, !0;
}
const Re = [];
for (let e = 0; e < 256; e++)
  Re.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Re[e.charCodeAt(0)] = 1;
});
function Pr(e, u) {
  let t = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(t) !== 92 || (t++, t >= n)) return !1;
  let r = e.src.charCodeAt(t);
  if (r === 10) {
    for (u || e.push("hardbreak", "br", 0), t++; t < n && (r = e.src.charCodeAt(t), !!D(r)); )
      t++;
    return e.pos = t, !0;
  }
  let o = e.src[t];
  if (r >= 55296 && r <= 56319 && t + 1 < n) {
    const s = e.src.charCodeAt(t + 1);
    s >= 56320 && s <= 57343 && (o += e.src[t + 1], t++);
  }
  const i = "\\" + o;
  if (!u) {
    const s = e.push("text_special", "", 0);
    r < 256 && Re[r] !== 0 ? s.content = o : s.content = i, s.markup = i, s.info = "escape";
  }
  return e.pos = t + 1, !0;
}
function Or(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 96)
    return !1;
  const r = t;
  t++;
  const o = e.posMax;
  for (; t < o && e.src.charCodeAt(t) === 96; )
    t++;
  const i = e.src.slice(r, t), s = i.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return u || (e.pending += i), e.pos += s, !0;
  let c = t, a;
  for (; (a = e.src.indexOf("`", c)) !== -1; ) {
    for (c = a + 1; c < o && e.src.charCodeAt(c) === 96; )
      c++;
    const l = c - a;
    if (l === s) {
      if (!u) {
        const d = e.push("code_inline", "code", 0);
        d.markup = i, d.content = e.src.slice(t, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = c, !0;
    }
    e.backticks[l] = a;
  }
  return e.backticksScanned = !0, u || (e.pending += i), e.pos += s, !0;
}
function Nr(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let o = r.length;
  const i = String.fromCharCode(n);
  if (o < 2)
    return !1;
  let s;
  o % 2 && (s = e.push("text", "", 0), s.content = i, o--);
  for (let c = 0; c < o; c += 2)
    s = e.push("text", "", 0), s.content = i + i, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function Xe(e, u) {
  let t;
  const n = [], r = u.length;
  for (let o = 0; o < r; o++) {
    const i = u[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const s = u[i.end];
    t = e.tokens[i.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = e.tokens[s.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && n.push(s.token - 1);
  }
  for (; n.length; ) {
    const o = n.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (t = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = t);
  }
}
function jr(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  Xe(e, e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && Xe(e, u[n].delimiters);
}
const ku = {
  tokenize: Nr,
  postProcess: jr
};
function Vr(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 95 && n !== 42)
    return !1;
  const r = e.scanDelims(e.pos, n === 42);
  for (let o = 0; o < r.length; o++) {
    const i = e.push("text", "", 0);
    i.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  }
  return e.pos += r.length, !0;
}
function Ye(e, u) {
  const t = u.length;
  for (let n = t - 1; n >= 0; n--) {
    const r = u[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const o = u[r.end], i = n > 0 && u[n - 1].end === r.end + 1 && // check that first two markers match and adjacent
    u[n - 1].marker === r.marker && u[n - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    u[r.end + 1].token === o.token + 1, s = String.fromCharCode(r.marker), c = e.tokens[r.token];
    c.type = i ? "strong_open" : "em_open", c.tag = i ? "strong" : "em", c.nesting = 1, c.markup = i ? s + s : s, c.content = "";
    const a = e.tokens[o.token];
    a.type = i ? "strong_close" : "em_close", a.tag = i ? "strong" : "em", a.nesting = -1, a.markup = i ? s + s : s, a.content = "", i && (e.tokens[u[n - 1].token].content = "", e.tokens[u[r.end + 1].token].content = "", n--);
  }
}
function Ur(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  Ye(e, e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && Ye(e, u[n].delimiters);
}
const _u = {
  tokenize: Vr,
  postProcess: Ur
};
function Hr(e, u) {
  let t, n, r, o, i = "", s = "", c = e.pos, a = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, d = e.posMax, p = e.pos + 1, h = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (h < 0)
    return !1;
  let f = h + 1;
  if (f < d && e.src.charCodeAt(f) === 40) {
    for (a = !1, f++; f < d && (t = e.src.charCodeAt(f), !(!D(t) && t !== 10)); f++)
      ;
    if (f >= d)
      return !1;
    if (c = f, r = e.md.helpers.parseLinkDestination(e.src, f, e.posMax), r.ok) {
      for (i = e.md.normalizeLink(r.str), e.md.validateLink(i) ? f = r.pos : i = "", c = f; f < d && (t = e.src.charCodeAt(f), !(!D(t) && t !== 10)); f++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, f, e.posMax), f < d && c !== f && r.ok)
        for (s = r.str, f = r.pos; f < d && (t = e.src.charCodeAt(f), !(!D(t) && t !== 10)); f++)
          ;
    }
    (f >= d || e.src.charCodeAt(f) !== 41) && (a = !0), f++;
  }
  if (a) {
    if (typeof e.env.references > "u")
      return !1;
    if (f < d && e.src.charCodeAt(f) === 91 ? (c = f + 1, f = e.md.helpers.parseLinkLabel(e, f), f >= 0 ? n = e.src.slice(c, f++) : f = h + 1) : f = h + 1, n || (n = e.src.slice(p, h)), o = e.env.references[me(n)], !o)
      return e.pos = l, !1;
    i = o.href, s = o.title;
  }
  if (!u) {
    e.pos = p, e.posMax = h;
    const w = e.push("link_open", "a", 1), _ = [["href", i]];
    w.attrs = _, s && _.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = f, e.posMax = d, !0;
}
function Zr(e, u) {
  let t, n, r, o, i, s, c, a, l = "";
  const d = e.pos, p = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const h = e.pos + 2, f = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (f < 0)
    return !1;
  if (o = f + 1, o < p && e.src.charCodeAt(o) === 40) {
    for (o++; o < p && (t = e.src.charCodeAt(o), !(!D(t) && t !== 10)); o++)
      ;
    if (o >= p)
      return !1;
    for (a = o, s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? o = s.pos : l = ""), a = o; o < p && (t = e.src.charCodeAt(o), !(!D(t) && t !== 10)); o++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < p && a !== o && s.ok)
      for (c = s.str, o = s.pos; o < p && (t = e.src.charCodeAt(o), !(!D(t) && t !== 10)); o++)
        ;
    else
      c = "";
    if (o >= p || e.src.charCodeAt(o) !== 41)
      return e.pos = d, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < p && e.src.charCodeAt(o) === 91 ? (a = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? r = e.src.slice(a, o++) : o = f + 1) : o = f + 1, r || (r = e.src.slice(h, f)), i = e.env.references[me(r)], !i)
      return e.pos = d, !1;
    l = i.href, c = i.title;
  }
  if (!u) {
    n = e.src.slice(h, f);
    const w = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      w
    );
    const _ = e.push("image", "img", 0), v = [["src", l], ["alt", ""]];
    _.attrs = v, _.children = w, _.content = n, c && v.push(["title", c]);
  }
  return e.pos = o, e.posMax = p, !0;
}
const Wr = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Gr = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Jr(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 60)
    return !1;
  const n = e.pos, r = e.posMax;
  for (; ; ) {
    if (++t >= r) return !1;
    const i = e.src.charCodeAt(t);
    if (i === 60) return !1;
    if (i === 62) break;
  }
  const o = e.src.slice(n + 1, t);
  if (Gr.test(o)) {
    const i = e.md.normalizeLink(o);
    if (!e.md.validateLink(i))
      return !1;
    if (!u) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (Wr.test(o)) {
    const i = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(i))
      return !1;
    if (!u) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const a = e.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function Qr(e) {
  return /^<a[>\s]/i.test(e);
}
function Kr(e) {
  return /^<\/a\s*>/i.test(e);
}
function Xr(e) {
  const u = e | 32;
  return u >= 97 && u <= 122;
}
function Yr(e, u) {
  if (!e.md.options.html)
    return !1;
  const t = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= t)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !Xr(r))
    return !1;
  const o = e.src.slice(n).match(Fr);
  if (!o)
    return !1;
  if (!u) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], Qr(i.content) && e.linkLevel++, Kr(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const e0 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, u0 = /^&([a-z][a-z0-9]{1,31});/i;
function t0(e, u) {
  const t = e.pos, n = e.posMax;
  if (e.src.charCodeAt(t) !== 38 || t + 1 >= n) return !1;
  if (e.src.charCodeAt(t + 1) === 35) {
    const o = e.src.slice(t).match(e0);
    if (o) {
      if (!u) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), s = e.push("text_special", "", 0);
        s.content = Ie(i) ? he(i) : he(65533), s.markup = o[0], s.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(t).match(u0);
    if (o) {
      const i = hu(o[0]);
      if (i !== o[0]) {
        if (!u) {
          const s = e.push("text_special", "", 0);
          s.content = i, s.markup = o[0], s.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function eu(e) {
  const u = {}, t = e.length;
  if (!t) return;
  let n = 0, r = -2;
  const o = [];
  for (let i = 0; i < t; i++) {
    const s = e[i];
    if (o.push(0), (e[n].marker !== s.marker || r !== s.token - 1) && (n = i), r = s.token, s.length = s.length || 0, !s.close) continue;
    u.hasOwnProperty(s.marker) || (u[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const c = u[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let a = n - o[n] - 1, l = a;
    for (; a > c; a -= o[a] + 1) {
      const d = e[a];
      if (d.marker === s.marker && d.open && d.end < 0) {
        let p = !1;
        if ((d.close || s.open) && (d.length + s.length) % 3 === 0 && (d.length % 3 !== 0 || s.length % 3 !== 0) && (p = !0), !p) {
          const h = a > 0 && !e[a - 1].open ? o[a - 1] + 1 : 0;
          o[i] = i - a + h, o[a] = h, s.open = !1, d.end = i, d.close = !1, l = -1, r = -2;
          break;
        }
      }
    }
    l !== -1 && (u[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = l);
  }
}
function r0(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  eu(e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && eu(u[n].delimiters);
}
function n0(e) {
  let u, t, n = 0;
  const r = e.tokens, o = e.tokens.length;
  for (u = t = 0; u < o; u++)
    r[u].nesting < 0 && n--, r[u].level = n, r[u].nesting > 0 && n++, r[u].type === "text" && u + 1 < o && r[u + 1].type === "text" ? r[u + 1].content = r[u].content + r[u + 1].content : (u !== t && (r[t] = r[u]), t++);
  u !== t && (r.length = t);
}
const ve = [
  ["text", Ir],
  ["linkify", Rr],
  ["newline", Lr],
  ["escape", Pr],
  ["backticks", Or],
  ["strikethrough", ku.tokenize],
  ["emphasis", _u.tokenize],
  ["link", Hr],
  ["image", Zr],
  ["autolink", Jr],
  ["html_inline", Yr],
  ["entity", t0]
], Ce = [
  ["balance_pairs", r0],
  ["strikethrough", ku.postProcess],
  ["emphasis", _u.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", n0]
];
function ce() {
  this.ruler = new B();
  for (let e = 0; e < ve.length; e++)
    this.ruler.push(ve[e][0], ve[e][1]);
  this.ruler2 = new B();
  for (let e = 0; e < Ce.length; e++)
    this.ruler2.push(Ce[e][0], Ce[e][1]);
}
ce.prototype.skipToken = function(e) {
  const u = e.pos, t = this.ruler.getRules(""), n = t.length, r = e.md.options.maxNesting, o = e.cache;
  if (typeof o[u] < "u") {
    e.pos = o[u];
    return;
  }
  let i = !1;
  if (e.level < r) {
    for (let s = 0; s < n; s++)
      if (e.level++, i = t[s](e, !0), e.level--, i) {
        if (u >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[u] = e.pos;
};
ce.prototype.tokenize = function(e) {
  const u = this.ruler.getRules(""), t = u.length, n = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < r) {
      for (let s = 0; s < t; s++)
        if (i = u[s](e, !1), i) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (i) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
ce.prototype.parse = function(e, u, t, n) {
  const r = new this.State(e, u, t, n);
  this.tokenize(r);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let s = 0; s < i; s++)
    o[s](r);
};
ce.prototype.State = se;
function o0(e) {
  const u = {};
  e = e || {}, u.src_Any = cu.source, u.src_Cc = au.source, u.src_Z = du.source, u.src_P = Be.source, u.src_ZPCc = [u.src_Z, u.src_P, u.src_Cc].join("|"), u.src_ZCc = [u.src_Z, u.src_Cc].join("|");
  const t = "[><｜]";
  return u.src_pseudo_letter = "(?:(?!" + t + "|" + u.src_ZPCc + ")" + u.src_Any + ")", u.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", u.src_auth = "(?:(?:(?!" + u.src_ZCc + "|[@/\\[\\]()]).)+@)?", u.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", u.src_host_terminator = "(?=$|" + t + "|" + u.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + u.src_ZPCc + "))", u.src_path = "(?:[/?#](?:(?!" + u.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + u.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + u.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + u.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + u.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + u.src_ZCc + "|[']).)+\\'|\\'(?=" + u.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + u.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + u.src_ZCc + "|$)|;(?!" + u.src_ZCc + "|$)|\\!+(?!" + u.src_ZCc + "|[!]|$)|\\?(?!" + u.src_ZCc + "|[?]|$))+|\\/)?", u.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', u.src_xn = "xn--[a-z0-9\\-]{1,59}", u.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + u.src_xn + "|" + u.src_pseudo_letter + "{1,63})", u.src_domain = "(?:" + u.src_xn + "|(?:" + u.src_pseudo_letter + ")|(?:" + u.src_pseudo_letter + "(?:-|" + u.src_pseudo_letter + "){0,61}" + u.src_pseudo_letter + "))", u.src_host = "(?:(?:(?:(?:" + u.src_domain + ")\\.)*" + u.src_domain + "))", u.tpl_host_fuzzy = "(?:" + u.src_ip4 + "|(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%)))", u.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%))", u.src_host_strict = u.src_host + u.src_host_terminator, u.tpl_host_fuzzy_strict = u.tpl_host_fuzzy + u.src_host_terminator, u.src_host_port_strict = u.src_host + u.src_port + u.src_host_terminator, u.tpl_host_port_fuzzy_strict = u.tpl_host_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_port_no_ip_fuzzy_strict = u.tpl_host_no_ip_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + u.src_ZPCc + "|>|$))", u.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + u.src_ZCc + ")(" + u.src_email_name + "@" + u.tpl_host_fuzzy_strict + ")", u.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_fuzzy_strict + u.src_path + ")", u.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_no_ip_fuzzy_strict + u.src_path + ")", u;
}
function Fe(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(n) {
      e[n] = t[n];
    });
  }), e;
}
function ge(e) {
  return Object.prototype.toString.call(e);
}
function i0(e) {
  return ge(e) === "[object String]";
}
function s0(e) {
  return ge(e) === "[object Object]";
}
function c0(e) {
  return ge(e) === "[object RegExp]";
}
function uu(e) {
  return ge(e) === "[object Function]";
}
function a0(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const yu = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function l0(e) {
  return Object.keys(e || {}).reduce(function(u, t) {
    return u || yu.hasOwnProperty(t);
  }, !1);
}
const d0 = {
  "http:": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(n) ? u >= 3 && e[u - 3] === ":" || u >= 3 && e[u - 3] === "/" ? 0 : n.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0;
    }
  }
}, f0 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", h0 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function p0(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function b0(e) {
  return function(u, t) {
    const n = u.slice(t);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function tu() {
  return function(e, u) {
    u.normalize(e);
  };
}
function pe(e) {
  const u = e.re = o0(e.__opts__), t = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || t.push(f0), t.push(u.src_xn), u.src_tlds = t.join("|");
  function n(s) {
    return s.replace("%TLDS%", u.src_tlds);
  }
  u.email_fuzzy = RegExp(n(u.tpl_email_fuzzy), "i"), u.link_fuzzy = RegExp(n(u.tpl_link_fuzzy), "i"), u.link_no_ip_fuzzy = RegExp(n(u.tpl_link_no_ip_fuzzy), "i"), u.host_fuzzy_test = RegExp(n(u.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function o(s, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + c);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const c = e.__schemas__[s];
    if (c === null)
      return;
    const a = { validate: null, link: null };
    if (e.__compiled__[s] = a, s0(c)) {
      c0(c.validate) ? a.validate = b0(c.validate) : uu(c.validate) ? a.validate = c.validate : o(s, c), uu(c.normalize) ? a.normalize = c.normalize : c.normalize ? o(s, c) : a.normalize = tu();
      return;
    }
    if (i0(c)) {
      r.push(s);
      return;
    }
    o(s, c);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: tu() };
  const i = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(a0).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), p0(e);
}
function m0(e, u) {
  const t = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(t, n);
  this.schema = e.__schema__.toLowerCase(), this.index = t + u, this.lastIndex = n + u, this.raw = r, this.text = r, this.url = r;
}
function Se(e, u) {
  const t = new m0(e, u);
  return e.__compiled__[t.schema].normalize(t, e), t;
}
function q(e, u) {
  if (!(this instanceof q))
    return new q(e, u);
  u || l0(e) && (u = e, e = {}), this.__opts__ = Fe({}, yu, u), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Fe({}, d0, e), this.__compiled__ = {}, this.__tlds__ = h0, this.__tlds_replaced__ = !1, this.re = {}, pe(this);
}
q.prototype.add = function(u, t) {
  return this.__schemas__[u] = t, pe(this), this;
};
q.prototype.set = function(u) {
  return this.__opts__ = Fe(this.__opts__, u), this;
};
q.prototype.test = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length)
    return !1;
  let t, n, r, o, i, s, c, a, l;
  if (this.re.schema_test.test(u)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (t = c.exec(u)) !== null; )
      if (o = this.testSchemaAt(u, t[2], c.lastIndex), o) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = u.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (n = u.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = u.indexOf("@"), l >= 0 && (r = u.match(this.re.email_fuzzy)) !== null && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s))), this.__index__ >= 0;
};
q.prototype.pretest = function(u) {
  return this.re.pretest.test(u);
};
q.prototype.testSchemaAt = function(u, t, n) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(u, n, this) : 0;
};
q.prototype.match = function(u) {
  const t = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === u && (t.push(Se(this, n)), n = this.__last_index__);
  let r = n ? u.slice(n) : u;
  for (; this.test(r); )
    t.push(Se(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return t.length ? t : null;
};
q.prototype.matchAtStart = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length) return null;
  const t = this.re.schema_at_start.exec(u);
  if (!t) return null;
  const n = this.testSchemaAt(u, t[2], t[0].length);
  return n ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n, Se(this, 0)) : null;
};
q.prototype.tlds = function(u, t) {
  return u = Array.isArray(u) ? u : [u], t ? (this.__tlds__ = this.__tlds__.concat(u).sort().filter(function(n, r, o) {
    return n !== o[r - 1];
  }).reverse(), pe(this), this) : (this.__tlds__ = u.slice(), this.__tlds_replaced__ = !0, pe(this), this);
};
q.prototype.normalize = function(u) {
  u.schema || (u.url = "http://" + u.url), u.schema === "mailto:" && !/^mailto:/i.test(u.url) && (u.url = "mailto:" + u.url);
};
q.prototype.onCompile = function() {
};
const K = 2147483647, L = 36, Le = 1, oe = 26, x0 = 38, g0 = 700, vu = 72, Cu = 128, Du = "-", w0 = /^xn--/, k0 = /[^\0-\x7F]/, _0 = /[\x2E\u3002\uFF0E\uFF61]/g, y0 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, De = L - Le, P = Math.floor, Ee = String.fromCharCode;
function H(e) {
  throw new RangeError(y0[e]);
}
function v0(e, u) {
  const t = [];
  let n = e.length;
  for (; n--; )
    t[n] = u(e[n]);
  return t;
}
function Eu(e, u) {
  const t = e.split("@");
  let n = "";
  t.length > 1 && (n = t[0] + "@", e = t[1]), e = e.replace(_0, ".");
  const r = e.split("."), o = v0(r, u).join(".");
  return n + o;
}
function C0(e) {
  const u = [];
  let t = 0;
  const n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      const o = e.charCodeAt(t++);
      (o & 64512) == 56320 ? u.push(((r & 1023) << 10) + (o & 1023) + 65536) : (u.push(r), t--);
    } else
      u.push(r);
  }
  return u;
}
const D0 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : L;
}, ru = function(e, u) {
  return e + 22 + 75 * (e < 26) - ((u != 0) << 5);
}, Au = function(e, u, t) {
  let n = 0;
  for (e = t ? P(e / g0) : e >> 1, e += P(e / u); e > De * oe >> 1; n += L)
    e = P(e / De);
  return P(n + (De + 1) * e / (e + x0));
}, E0 = function(e) {
  const u = [], t = e.length;
  let n = 0, r = Cu, o = vu, i = e.lastIndexOf(Du);
  i < 0 && (i = 0);
  for (let s = 0; s < i; ++s)
    e.charCodeAt(s) >= 128 && H("not-basic"), u.push(e.charCodeAt(s));
  for (let s = i > 0 ? i + 1 : 0; s < t; ) {
    const c = n;
    for (let l = 1, d = L; ; d += L) {
      s >= t && H("invalid-input");
      const p = D0(e.charCodeAt(s++));
      p >= L && H("invalid-input"), p > P((K - n) / l) && H("overflow"), n += p * l;
      const h = d <= o ? Le : d >= o + oe ? oe : d - o;
      if (p < h)
        break;
      const f = L - h;
      l > P(K / f) && H("overflow"), l *= f;
    }
    const a = u.length + 1;
    o = Au(n - c, a, c == 0), P(n / a) > K - r && H("overflow"), r += P(n / a), n %= a, u.splice(n++, 0, r);
  }
  return String.fromCodePoint(...u);
}, A0 = function(e) {
  const u = [];
  e = C0(e);
  const t = e.length;
  let n = Cu, r = 0, o = vu;
  for (const c of e)
    c < 128 && u.push(Ee(c));
  const i = u.length;
  let s = i;
  for (i && u.push(Du); s < t; ) {
    let c = K;
    for (const l of e)
      l >= n && l < c && (c = l);
    const a = s + 1;
    c - n > P((K - r) / a) && H("overflow"), r += (c - n) * a, n = c;
    for (const l of e)
      if (l < n && ++r > K && H("overflow"), l === n) {
        let d = r;
        for (let p = L; ; p += L) {
          const h = p <= o ? Le : p >= o + oe ? oe : p - o;
          if (d < h)
            break;
          const f = d - h, w = L - h;
          u.push(
            Ee(ru(h + f % w, 0))
          ), d = P(f / w);
        }
        u.push(Ee(ru(d, 0))), o = Au(r, a, s === i), r = 0, ++s;
      }
    ++r, ++n;
  }
  return u.join("");
}, F0 = function(e) {
  return Eu(e, function(u) {
    return w0.test(u) ? E0(u.slice(4).toLowerCase()) : u;
  });
}, S0 = function(e) {
  return Eu(e, function(u) {
    return k0.test(u) ? "xn--" + A0(u) : u;
  });
}, Fu = {
  toASCII: S0,
  toUnicode: F0
}, z0 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, T0 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, M0 = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, B0 = {
  default: z0,
  zero: T0,
  commonmark: M0
}, q0 = /^(vbscript|javascript|file|data):/, I0 = /^data:image\/(gif|png|jpeg|webp);/;
function $0(e) {
  const u = e.trim().toLowerCase();
  return q0.test(u) ? I0.test(u) : !0;
}
const Su = ["http:", "https:", "mailto:"];
function R0(e) {
  const u = Me(e, !0);
  if (u.hostname && (!u.protocol || Su.indexOf(u.protocol) >= 0))
    try {
      u.hostname = Fu.toASCII(u.hostname);
    } catch {
    }
  return ie(Te(u));
}
function L0(e) {
  const u = Me(e, !0);
  if (u.hostname && (!u.protocol || Su.indexOf(u.protocol) >= 0))
    try {
      u.hostname = Fu.toUnicode(u.hostname);
    } catch {
    }
  return X(Te(u), X.defaultChars + "%");
}
function I(e, u) {
  if (!(this instanceof I))
    return new I(e, u);
  u || qe(e) || (u = e || {}, e = "default"), this.inline = new ce(), this.block = new xe(), this.core = new $e(), this.renderer = new ue(), this.linkify = new q(), this.validateLink = $0, this.normalizeLink = R0, this.normalizeLinkText = L0, this.utils = Lt, this.helpers = be({}, jt), this.options = {}, this.configure(e), u && this.set(u);
}
I.prototype.set = function(e) {
  return be(this.options, e), this;
};
I.prototype.configure = function(e) {
  const u = this;
  if (qe(e)) {
    const t = e;
    if (e = B0[t], !e)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && u.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
    e.components[t].rules && u[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && u[t].ruler2.enableOnly(e.components[t].rules2);
  }), this;
};
I.prototype.enable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.enable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
I.prototype.disable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.disable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
I.prototype.use = function(e) {
  const u = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, u), this;
};
I.prototype.parse = function(e, u) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(e, this, u);
  return this.core.process(t), t.tokens;
};
I.prototype.render = function(e, u) {
  return u = u || {}, this.renderer.render(this.parse(e, u), this.options, u);
};
I.prototype.parseInline = function(e, u) {
  const t = new this.core.State(e, this, u);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
I.prototype.renderInline = function(e, u) {
  return u = u || {}, this.renderer.render(this.parseInline(e, u), this.options, u);
};
const P0 = (e, u) => {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 61) return !1;
  const r = e.scanDelims(e.pos, !0);
  let { length: o } = r;
  if (o < 2) return !1;
  const i = String.fromCharCode(n);
  if (o % 2) {
    const s = e.push("text", "", 0);
    s.content = i, o--;
  }
  for (let s = 0; s < o; s += 2) {
    const c = e.push("text", "", 0);
    c.content = i + i, (r.can_open || r.can_close) && e.delimiters.push({ marker: 61, length: 0, token: e.tokens.length - 1, end: -1, open: r.can_open, close: r.can_close });
  }
  return e.pos += r.length, !0;
}, nu = (e, u) => {
  let t;
  const n = [], r = u.length;
  for (let o = 0; o < r; o++) {
    const i = u[o];
    if (i.marker === 61 && i.end !== -1) {
      const s = u[i.end];
      t = e.tokens[i.token], t.type = "mark_open", t.tag = "mark", t.nesting = 1, t.markup = "==", t.content = "", t = e.tokens[s.token], t.type = "mark_close", t.tag = "mark", t.nesting = -1, t.markup = "==", t.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "=" && n.push(s.token - 1);
    }
  }
  for (; n.length; ) {
    const o = n.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "mark_close"; ) i++;
    i--, o !== i && (t = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = t);
  }
}, O0 = (e) => {
  e.inline.ruler.before("emphasis", "mark", P0), e.inline.ruler2.before("emphasis", "mark", (u) => {
    nu(u, u.delimiters);
    for (const t of u.tokens_meta) t?.delimiters && nu(u, t.delimiters);
    return !0;
  });
}, N0 = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-300:oklch(82.3% .12 346.018);--color-pink-400:oklch(71.8% .202 349.761);--color-pink-600:oklch(59.2% .249 .584);--color-pink-700:oklch(52.5% .223 3.958);--color-pink-800:oklch(45.9% .187 3.815);--color-pink-900:oklch(40.8% .153 2.432);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.top-0{top:calc(var(--spacing)*0)}.col-span-1{grid-column:span 1/span 1}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.\\!m-0{margin:calc(var(--spacing)*0)!important}.m-1{margin:calc(var(--spacing)*1)}.mx-1{margin-inline:calc(var(--spacing)*1)}.\\!my-0{margin-block:calc(var(--spacing)*0)!important}.prose{color:var(--tw-prose-body);--tw-prose-body:oklch(37.3% .034 259.733);--tw-prose-headings:oklch(21% .034 264.665);--tw-prose-lead:oklch(44.6% .03 256.802);--tw-prose-links:oklch(21% .034 264.665);--tw-prose-bold:oklch(21% .034 264.665);--tw-prose-counters:oklch(55.1% .027 264.364);--tw-prose-bullets:oklch(87.2% .01 258.338);--tw-prose-hr:oklch(92.8% .006 264.531);--tw-prose-quotes:oklch(21% .034 264.665);--tw-prose-quote-borders:oklch(92.8% .006 264.531);--tw-prose-captions:oklch(55.1% .027 264.364);--tw-prose-kbd:oklch(21% .034 264.665);--tw-prose-kbd-shadows:NaN NaN NaN;--tw-prose-code:oklch(21% .034 264.665);--tw-prose-pre-code:oklch(92.8% .006 264.531);--tw-prose-pre-bg:oklch(27.8% .033 256.848);--tw-prose-th-borders:oklch(87.2% .01 258.338);--tw-prose-td-borders:oklch(92.8% .006 264.531);--tw-prose-invert-body:oklch(87.2% .01 258.338);--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:oklch(70.7% .022 261.325);--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:oklch(70.7% .022 261.325);--tw-prose-invert-bullets:oklch(44.6% .03 256.802);--tw-prose-invert-hr:oklch(37.3% .034 259.733);--tw-prose-invert-quotes:oklch(96.7% .003 264.542);--tw-prose-invert-quote-borders:oklch(37.3% .034 259.733);--tw-prose-invert-captions:oklch(70.7% .022 261.325);--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:oklch(87.2% .01 258.338);--tw-prose-invert-pre-bg:#00000080;--tw-prose-invert-th-borders:oklch(44.6% .03 256.802);--tw-prose-invert-td-borders:oklch(37.3% .034 259.733);max-width:65ch;font-size:1rem;line-height:1.75}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);margin-top:1.2em;margin-bottom:1.2em;font-size:1.25em;line-height:1.6}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:decimal}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;list-style-type:disc}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.25em;font-weight:600}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"“""”""‘""’";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;font-style:italic;font-weight:500}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:0;margin-bottom:.888889em;font-size:2.25em;font-weight:800;line-height:1.11111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:900}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:2em;margin-bottom:1em;font-size:1.5em;font-weight:700;line-height:1.33333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:800}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.6em;margin-bottom:.6em;font-size:1.25em;font-weight:600;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);margin-top:1.5em;margin-bottom:.5em;font-weight:600;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-weight:700}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em;display:block}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-kbd);box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px rgb(var(--tw-prose-kbd-shadows)/10%);padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;border-radius:.3125rem;padding-inline-start:.375em;font-family:inherit;font-size:.875em;font-weight:500}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);padding-top:.857143em;padding-inline-end:1.14286em;padding-bottom:.857143em;border-radius:.375rem;margin-top:1.71429em;margin-bottom:1.71429em;padding-inline-start:1.14286em;font-size:.875em;font-weight:400;line-height:1.71429;overflow-x:auto}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;background-color:#0000;border-width:0;border-radius:0;padding:0}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before,.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){table-layout:auto;width:100%;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.71429}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);vertical-align:bottom;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em;font-weight:600}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);margin-top:.857143em;font-size:.875em;line-height:1.42857}.prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose>ul>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ul>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose>ol>li>p:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose>ol>li>p:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)),.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.571429em;padding-inline-end:.571429em;padding-bottom:.571429em;padding-inline-start:.571429em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.mt-2{margin-top:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.box-border{box-sizing:border-box}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.size-1{width:calc(var(--spacing)*1);height:calc(var(--spacing)*1)}.h-3{height:calc(var(--spacing)*3)}.h-5{height:calc(var(--spacing)*5)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-40{height:calc(var(--spacing)*40)}.h-60{height:calc(var(--spacing)*60)}.h-84{height:calc(var(--spacing)*84)}.h-\\[60px\\]{height:60px}.h-\\[calc\\(100vh-60px\\)\\]{height:calc(100vh - 60px)}.h-full{height:100%}.h-screen{height:100vh}.max-h-60{max-height:calc(var(--spacing)*60)}.min-h-20{min-height:calc(var(--spacing)*20)}.w-3{width:calc(var(--spacing)*3)}.w-36{width:calc(var(--spacing)*36)}.w-fit{width:fit-content}.w-full{width:100%}.max-w-\\[200px\\]{max-width:200px}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.max-w-sm{max-width:var(--container-sm)}.min-w-16{min-width:calc(var(--spacing)*16)}.min-w-\\[100px\\]{min-width:100px}.min-w-full{min-width:100%}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.flex-grow{flex-grow:1}.border-collapse{border-collapse:collapse}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.transform\\!{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}.animate-pulse{animation:var(--animate-pulse)}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize\\!{resize:both!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-t-md{border-top-left-radius:var(--radius-md);border-top-right-radius:var(--radius-md)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\[\\#f0efeb80\\]{border-color:#f0efeb80}.border-blue-400{border-color:var(--color-blue-400)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-700{border-color:var(--color-gray-700)}.\\!bg-transparent{background-color:#0000!important}.bg-\\[\\#1e2939\\]{background-color:#1e2939}.bg-\\[\\#f0efeb40\\]{background-color:#f0efeb40}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-300{background-color:var(--color-blue-300)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.\\!p-0{padding:calc(var(--spacing)*0)!important}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.pr-2{padding-right:calc(var(--spacing)*2)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-justify{text-align:justify}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.break-words{overflow-wrap:break-word}.whitespace-normal{white-space:normal}.whitespace-pre-wrap{white-space:pre-wrap}.text-\\[\\#c12c1f\\]{color:#c12c1f}.text-blue-400{color:var(--color-blue-400)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur\\!{--tw-blur:blur(8px)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.prose-invert{--tw-prose-body:var(--tw-prose-invert-body);--tw-prose-headings:var(--tw-prose-invert-headings);--tw-prose-lead:var(--tw-prose-invert-lead);--tw-prose-links:var(--tw-prose-invert-links);--tw-prose-bold:var(--tw-prose-invert-bold);--tw-prose-counters:var(--tw-prose-invert-counters);--tw-prose-bullets:var(--tw-prose-invert-bullets);--tw-prose-hr:var(--tw-prose-invert-hr);--tw-prose-quotes:var(--tw-prose-invert-quotes);--tw-prose-quote-borders:var(--tw-prose-invert-quote-borders);--tw-prose-captions:var(--tw-prose-invert-captions);--tw-prose-kbd:var(--tw-prose-invert-kbd);--tw-prose-kbd-shadows:var(--tw-prose-invert-kbd-shadows);--tw-prose-code:var(--tw-prose-invert-code);--tw-prose-pre-code:var(--tw-prose-invert-pre-code);--tw-prose-pre-bg:var(--tw-prose-invert-pre-bg);--tw-prose-th-borders:var(--tw-prose-invert-th-borders);--tw-prose-td-borders:var(--tw-prose-invert-td-borders)}.prose-pink{--tw-prose-links:oklch(59.2% .249 .584);--tw-prose-invert-links:oklch(65.6% .241 354.308)}.select-none{-webkit-user-select:none;user-select:none}@media (hover:hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:text-gray-200:hover{color:var(--color-gray-200)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}.hover\\:underline:hover{text-decoration-line:underline}}.active\\:bg-blue-700:active{background-color:var(--color-blue-700)}.active\\:text-blue-300:active{color:var(--color-blue-300)}.active\\:text-blue-400:active{color:var(--color-blue-400)}@media (prefers-color-scheme:dark){.dark\\:prose-invert{--tw-prose-body:var(--tw-prose-invert-body);--tw-prose-headings:var(--tw-prose-invert-headings);--tw-prose-lead:var(--tw-prose-invert-lead);--tw-prose-links:var(--tw-prose-invert-links);--tw-prose-bold:var(--tw-prose-invert-bold);--tw-prose-counters:var(--tw-prose-invert-counters);--tw-prose-bullets:var(--tw-prose-invert-bullets);--tw-prose-hr:var(--tw-prose-invert-hr);--tw-prose-quotes:var(--tw-prose-invert-quotes);--tw-prose-quote-borders:var(--tw-prose-invert-quote-borders);--tw-prose-captions:var(--tw-prose-invert-captions);--tw-prose-kbd:var(--tw-prose-invert-kbd);--tw-prose-kbd-shadows:var(--tw-prose-invert-kbd-shadows);--tw-prose-code:var(--tw-prose-invert-code);--tw-prose-pre-code:var(--tw-prose-invert-pre-code);--tw-prose-pre-bg:var(--tw-prose-invert-pre-bg);--tw-prose-th-borders:var(--tw-prose-invert-th-borders);--tw-prose-td-borders:var(--tw-prose-invert-td-borders)}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}';
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C = (e) => e ?? Mu, j0 = (e, u, t) => k`${u}`, V0 = (e, u, t) => {
  const n = e.node;
  let r = "";
  t?.style?.[n.tag] && (r = E(t.style[n.tag]));
  const o = r.trim() ? r : void 0;
  switch (n.tag) {
    case "h1":
      return k`<h1 style=${C(o)}>${u}</h1>`;
    case "h2":
      return k`<h2 style=${C(o)}>${u}</h2>`;
    case "h3":
      return k`<h3 style=${C(o)}>${u}</h3>`;
    case "h4":
      return k`<h4 style=${C(o)}>${u}</h4>`;
    case "h5":
      return k`<h5 style=${C(o)}>${u}</h5>`;
    case "h6":
      return k`<h6 style=${C(o)}>${u}</h6>`;
  }
  return console.error("[heading标签解析异常]", n), k`<p>${u}</p>`;
}, U0 = (e, u, t) => {
  const n = e.node;
  let r = "";
  t?.style?.p && (r = E(t.style.p));
  const o = r.trim() ? r : void 0;
  return n.hidden ? k`${u}` : k`<p style=${C(o)}>${u}</p>`;
}, H0 = (e, u, t) => {
  let n = "";
  t?.style?.blockquote && (n = E(t.style.blockquote));
  const r = n.trim() ? n : void 0;
  return k`<blockquote style=${C(r)}>${u}</blockquote>`;
}, Z0 = (e, u, t) => {
  let n = "";
  t?.style?.strong && (n = E(t.style.strong));
  const r = n.trim() ? n : void 0;
  return k`<strong style=${C(r)}>${u}</strong>`;
}, W0 = (e, u, t) => {
  let n = "";
  t?.style?.em && (n = E(t.style.em));
  const r = n.trim() ? n : void 0;
  return k`<em style=${C(r)}>${u}</em>`;
}, G0 = (e, u, t) => {
  let n = "";
  t?.style?.s && (n = E(t.style.s));
  const r = n.trim() ? n : void 0;
  return k`<s style=${C(r)}>${u}</s>`;
}, J0 = (e, u, t) => {
  const r = e.node.attrs || [];
  let o = 1;
  for (let c = 0; c < r.length; c++)
    if (r[c][0] === "start") {
      o = Number(r[c][1]);
      break;
    }
  let i = "";
  t?.style?.ol && (i = E(t.style.ol));
  const s = i.trim() ? i : void 0;
  return k`<ol start="${o}" style=${C(s)}>
    ${u}
  </ol>`;
}, Q0 = (e, u, t) => {
  let n = "";
  t?.style?.ul && (n = E(t.style.ul));
  const r = n.trim() ? n : void 0;
  return k`<ul style=${C(r)}>
    ${u}
  </ul>`;
}, K0 = (e, u, t) => {
  let n = "";
  t?.style?.li && (n = E(t.style.li));
  const r = n.trim() ? n : void 0;
  return k`<li style=${C(r)}>${u}</li>`;
}, X0 = (e, u, t) => {
  let n = "";
  t?.style?.table && (n = E(t.style.table));
  const r = n.trim() ? n : void 0;
  return k`<div class="w-fit max-w-full overflow-x-auto">
    <table class="max-w-max border-collapse" style=${C(r)}>
      ${u}
    </table>
  </div> `;
}, Y0 = (e, u, t) => {
  let n = "";
  t?.style?.thead && (n = E(t.style.thead));
  const r = n.trim() ? n : void 0;
  return k`<thead style=${C(r)}>
    ${u}
  </thead>`;
}, en = (e, u, t) => {
  let n = "";
  t?.style?.tbody && (n = E(t.style.tbody));
  const r = n.trim() ? n : void 0;
  return k`<tbody style=${C(r)}>
    ${u}
  </tbody>`;
}, un = (e, u, t) => {
  let n = "";
  t?.style?.tr && (n = E(t.style.tr));
  const r = n.trim() ? n : void 0;
  return k`<tr style=${C(r)}>
    ${u}
  </tr>`;
}, tn = (e, u, t) => {
  let n = "";
  t?.style?.th && (n = E(t.style.th));
  const r = n.trim() ? n : void 0;
  return k`<th class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal" style=${C(r)}>${u}</th>`;
}, rn = (e, u, t) => {
  let n = "";
  t?.style?.td && (n = E(t.style.td));
  const r = n.trim() ? n : void 0;
  return k`<td class="box-border max-w-[200px] min-w-[100px] p-2 px-4 break-words whitespace-normal" style=${C(r)}>${u}</td>`;
}, nn = (e) => e.button === 1 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey, on = (e, u, t) => {
  const o = (e.node.attrs || []).find((a) => a[0] === "href")?.[1] || "";
  let i = "";
  t?.style?.a && (i = E(t.style.a));
  const s = i.trim() ? i : void 0, c = (a) => {
    const l = a.currentTarget;
    if (nn(a)) return;
    let d = null;
    try {
      d = new URL(o, window.location.href);
    } catch {
    }
    a.preventDefault();
    const p = l.getRootNode(), h = p instanceof ShadowRoot ? p.host : l, f = u?.[0]?.values?.[0] || "", w = new CustomEvent("link-click", {
      detail: { text: f, href: o, anchor: l, rawEvent: a },
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    if (h.dispatchEvent(w)) {
      if (o.startsWith("#")) {
        document.querySelector(o)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (!d) {
        window.location.href = o;
        return;
      }
      const v = d.protocol;
      v === "http:" || v === "https:" ? d.origin === window.location.origin ? window.location.assign(d.href) : window.open(d.href, "_blank") : window.location.href = o;
    }
  };
  return k`<a
    class="text-blue-500 no-underline active:text-blue-400"
    href="${o}"
    target="_blank"
    rel="noreferrer noopener nofollow"
    style=${C(s)}
    @click=${c}
    >${u}</a
  >`;
}, sn = (e, u, t) => {
  const n = e.node;
  let r = "";
  t?.style?.pre && (r = E(t.style.pre));
  const o = r.trim() ? r : void 0;
  return k`
    <div class="mb-4 max-w-full rounded-lg">
      <div class="sticky top-0 flex h-8 items-center justify-between rounded-t-md bg-gray-700 px-3 text-xs select-none">
        <span class="font-bold text-gray-400">${n.info}</span>
        <!-- <span class="cursor-pointer text-blue-400 active:text-blue-300">复制</span> -->
      </div>
      <div class="max-w-full overflow-x-auto">
        <pre class="!m-0 max-w-full rounded-t-none" style=${C(o)}><code>${n.content}</code></pre>
      </div>
    </div>
  `;
}, cn = (e, u, t) => {
  const n = e.node;
  let r = "";
  t?.style?.code && (r = E(t.style.code));
  const o = r.trim() ? r : void 0;
  return k`<span class="mx-1 rounded-sm px-2 py-0.5 text-[#c12c1f] border border-solid border-[#f0efeb80] bg-[#f0efeb40]" style=${C(o)}>${n.content}</span>`;
}, an = (e, u, t) => {
  let n = "";
  t?.style?.hr && (n = E(t.style.hr));
  const r = n.trim() ? n : void 0;
  return k`<hr class="mt-2 mb-2" style=${C(r)} />`;
}, ln = (e, u, t) => {
  if (t?.breaks) {
    let n = "";
    t?.style?.br && (n = E(t.style.br));
    const r = n.trim() ? n : void 0;
    return k`<br style=${C(r)} />`;
  } else
    return k`${" "}`;
}, dn = (e, u, t) => {
  let n = "";
  t?.style?.br && (n = E(t.style.br));
  const r = n.trim() ? n : void 0;
  return k`<br style=${C(r)} />`;
}, fn = (e, u, t) => {
  const r = e.node.attrs || [], o = r.find((l) => l[0] === "src")?.[1] || "", i = r.find((l) => l[0] === "alt")?.[1] || "", s = r.find((l) => l[0] === "title")?.[1] || "";
  let c = "";
  t?.style?.img && (c = E(t.style.img));
  const a = c.trim() ? c : void 0;
  return k`<img src="${o}" alt="${i}" title="${s}" style=${C(a)} />`;
}, hn = (e, u, t) => {
  const n = e.node;
  return k`${n.content}`;
}, pn = (e, u, t) => {
  const n = e.node;
  return k`${ou(n.content)}`;
}, bn = (e, u, t) => {
  const n = e.node, r = e.end, o = k`${u}`, i = document.createElement("div");
  Bu(o, i);
  let s = n.content;
  const c = i.innerHTML;
  return c && (s += c), r?.content && (s += r.content), k`${ou(s)}`;
}, mn = (e, u, t) => {
  const n = e.node;
  return k`<div class="mx-1 inline-flex items-center gap-1 rounded-md border border-dashed px-2 py-1.5 leading-none">
    <div class="inline-block h-3 w-3 rounded-sm" style="background-color: ${n.content};"></div>
    ${n.content}
  </div>`;
}, xn = (e, u, t) => {
  let n = "";
  t?.style?.mark && (n = E(t.style.mark));
  const r = n.trim() ? n : void 0;
  return k`<mark style=${C(r)}>${u}</mark>`;
}, gn = {
  inline: j0,
  heading_open: V0,
  paragraph_open: U0,
  blockquote_open: H0,
  strong_open: Z0,
  em_open: W0,
  s_open: G0,
  ordered_list_open: J0,
  bullet_list_open: Q0,
  list_item_open: K0,
  table_open: X0,
  thead_open: Y0,
  tbody_open: en,
  tr_open: un,
  th_open: tn,
  td_open: rn,
  link_open: on,
  fence: sn,
  code_inline: cn,
  hr: an,
  softbreak: ln,
  hardbreak: dn,
  image: fn,
  text: hn,
  html_block: pn,
  html_inline: bn,
  color: mn,
  mark_open: xn
}, wn = [
  "--tw-prose-body",
  "--tw-prose-headings",
  "--tw-prose-lead",
  "--tw-prose-links",
  "--tw-prose-bold",
  "--tw-prose-counters",
  "--tw-prose-bullets",
  "--tw-prose-hr",
  "--tw-prose-quotes",
  "--tw-prose-quote-borders",
  "--tw-prose-captions",
  "--tw-prose-kbd",
  "--tw-prose-kbd-shadows",
  "--tw-prose-code",
  "--tw-prose-pre-code",
  "--tw-prose-pre-bg",
  "--tw-prose-th-borders",
  "--tw-prose-td-borders",
  "--tw-prose-invert-body",
  "--tw-prose-invert-headings",
  "--tw-prose-invert-lead",
  "--tw-prose-invert-links",
  "--tw-prose-invert-bold",
  "--tw-prose-invert-counters",
  "--tw-prose-invert-bullets",
  "--tw-prose-invert-hr",
  "--tw-prose-invert-quotes",
  "--tw-prose-invert-quote-borders",
  "--tw-prose-invert-captions",
  "--tw-prose-invert-kbd",
  "--tw-prose-invert-kbd-shadows",
  "--tw-prose-invert-code",
  "--tw-prose-invert-pre-code",
  "--tw-prose-invert-pre-bg",
  "--tw-prose-invert-th-borders",
  "--tw-prose-invert-td-borders"
], kn = ({ startTag: e, endTag: u, startToken: t, endToken: n, hasChildren: r = !1, meta: o = null }) => (i, s, c, a) => {
  const l = i.bMarks[s] + i.tShift[s];
  if (!i.src.startsWith(e, l))
    return !1;
  if (e === u) {
    const v = l + e.length, b = i.eMarks[s], x = i.src.slice(v, b), m = x.indexOf(u);
    if (m >= 0) {
      const V = v + m, U = i.src.slice(v, V);
      if (a) return !0;
      let S = i.push(t, "div", 1);
      return S.meta || (S.meta = {}), o && (S.meta = {
        ...S.meta,
        ...o
      }), S.markup = e, S.block = !0, r ? i.md.inline.parse(U, i.md, i.env, i.tokens) : S.content = U, S = i.push(n, "div", -1), S.markup = u, S.block = !0, S.meta || (S.meta = {}), S.meta.isClose = !0, i.line = s + 1, !0;
    }
    let g = s + 1, y = !1, F = x + `
`;
    for (; g < c; ) {
      const V = i.bMarks[g] + i.tShift[g], U = i.eMarks[g], S = i.src.slice(V, U), ae = S.indexOf(u);
      if (ae >= 0)
        if (S.slice(0, ae).trim() === "") {
          y = !0;
          break;
        } else
          F += S + `
`;
      else
        F += S + `
`;
      g++;
    }
    if (a) return !0;
    let M = F, A = i.push(t, "div", 1);
    return A.meta || (A.meta = {}), o && (A.meta = {
      ...A.meta,
      ...o
    }), A.markup = e, A.block = !0, r ? i.md.inline.parse(M.trim(), i.md, i.env, i.tokens) : A.content = M.trim(), A = i.push(n, "div", -1), A.markup = u, A.block = !0, A.meta || (A.meta = {}), A.meta.isClose = y, i.line = y ? g + 1 : c, !0;
  }
  let d = s, p = -1, h = !1;
  for (; d < c; ) {
    const b = i.getLines(d, d + 1, i.tShift[d], !1).indexOf(u);
    if (b >= 0) {
      p = i.bMarks[d] + i.tShift[d] + b, h = !0;
      break;
    }
    d++;
  }
  if (a) return !0;
  let f = i.push(t, "div", 1);
  f.meta || (f.meta = {}), o && (f.meta = {
    ...f.meta,
    ...o
  }), f.markup = e, f.block = !0;
  let w = "", _ = !1;
  return h ? (w = i.src.slice(l + e.length, p).trim(), _ = !0) : w = i.src.slice(l + e.length).trim(), r ? i.md.inline.parse(w, i.md, i.env, i.tokens) : f.content = w, f = i.push(n, "div", -1), f.markup = u, f.block = !0, f.meta || (f.meta = {}), f.meta.isClose = _, i.line = h ? d + 1 : c, !0;
}, _n = ({ startTag: e, endTag: u, startToken: t, meta: n }) => (r, o) => {
  const i = r.pos, s = r.posMax;
  if (!r.src.startsWith(e, i))
    return !1;
  let c = i + e.length, a = !1;
  for (; c <= s - u.length; ) {
    if (r.src.startsWith(u, c)) {
      a = !0;
      break;
    }
    c++;
  }
  if (!a) return !1;
  const l = r.src.slice(i + e.length, c).trim();
  if (!o) {
    const d = r.push(t, "", 0);
    d.meta || (d.meta = {}), n && (d.meta = {
      ...d.meta,
      ...n
    }), d.content = l, d.markup = t;
  }
  return r.pos = c + u.length, !0;
};
var yn = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, j = (e, u, t, n) => {
  for (var r = n > 1 ? void 0 : n ? vn(u, t) : u, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (r = (n ? i(u, t, r) : i(r)) || r);
  return n && r && yn(u, t, r), r;
};
let $ = class extends $u {
  constructor() {
    super(), this.content = "", this.mode = "", this.dark = !1, this.customStyles = {}, this.customCss = "", this.breaks = !0, this.key = Hu(), this.themeData = {
      mode: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }, this._computedStyles = {}, this.templates = /* @__PURE__ */ new Map(), this.autoKey = /* @__PURE__ */ new Map(), this.cloneMap = /* @__PURE__ */ new Map(), this.isReady = !1, this.customMethods = {}, this.md = new I({
      html: !0,
      linkify: !1,
      typographer: !0
    }).use(O0), this.rewriteRules();
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    e?.addEventListener("slotchange", () => {
      e.assignedElements().forEach((t) => {
        const n = t.getAttribute("data-register") || null;
        if (n) {
          this.templates.set(n, t.cloneNode(!0));
          const r = t.getAttribute("data-rules") || "";
          r ? this.registrationCustomize(r) : this.registrationQuick(n);
        }
      });
    }), this.setMarkdownIt(), this.addEventListener("child-register", this._handleChildRegister), this.isReady = !0;
  }
  // 方法1：使用 willUpdate 生命周期方法（推荐）
  willUpdate(e) {
    e.has("mode") && this.mode && (this.themeData = {
      mode: this.mode
    }), this.setProseVariables();
  }
  updated() {
    this.syncCustomCssStyle();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("child-register", this._handleChildRegister);
  }
  // 修改markdown-it渲染器的配置
  setMarkdownIt() {
    Array.from(this.attributes).forEach((e) => {
      if (e.name.startsWith("md-")) {
        const u = e.name.substring(3);
        let t = e.value;
        t === "true" ? t = !0 : t === "false" ? t = !1 : !isNaN(Number(t)) && t !== "" && (t = Number(t)), this.md.set({ [u]: t });
      }
    });
  }
  // 快捷规则注册
  registrationQuick(e) {
    const u = {
      startTag: `<${e}>`,
      endTag: `</${e}>`,
      startToken: `${e}`,
      endToken: `${e}_end`
    };
    this.registrationRulesByMulti(u), this.autoKey.set(e, e);
  }
  // 自定义规则注册
  registrationCustomize(e) {
    try {
      JSON.parse(e).forEach((t) => {
        t.type === "block" ? this.registrationRulesByMulti({
          key: t.key,
          startTag: t.startTag,
          endTag: t.endTag,
          startToken: t.name,
          endToken: `${t.name}_end`,
          meta: t.meta || null
        }) : t.type === "inline" ? this.registrationRulesBySingle({
          key: t.key,
          startTag: t.startTag,
          endTag: t.endTag,
          startToken: t.name,
          meta: t.meta || null
        }) : t.type === "fence" && this.autoKey.set(t.key, t.name);
      });
    } catch (u) {
      console.error("自定义规则注册失败:", u);
    }
  }
  // 单行规则注册
  registrationRulesBySingle(e) {
    const u = _n(e);
    this.md.inline.ruler.before("escape", e.key || e.startToken, u);
  }
  // 多行规则注册
  registrationRulesByMulti(e) {
    const u = kn(e);
    this.md.block.ruler.before("fence", e.key || e.startToken, u);
  }
  // 重写markdown-it规则
  rewriteRules() {
    const e = /^#([0-9a-fA-F]{3,8})\b/;
    this.md.inline.ruler.push("color", (u, t) => {
      const r = u.src.slice(u.pos).match(e);
      if (!r) return !1;
      const o = r[0];
      if (!/^#[0-9a-fA-F]{3,8}$/.test(o)) return !1;
      if (!t) {
        const i = u.push("color", "span", 0);
        i.attrPush(["style", `color: ${o};`]), i.content = o;
      }
      return u.pos += o.length, !0;
    });
  }
  _handleChildRegister(e) {
    if (!!Ru.disableWarning) {
      const n = e.detail.feature;
      console.log("注册功能:", n);
    }
    const t = e.detail.styles;
    if (t) {
      const n = document.createElement("style");
      n.textContent = t, this.shadowRoot?.appendChild(n), this.syncCustomCssStyle();
    }
    e.detail.apply(this);
  }
  // 同步应用侧传入的完整 CSS，固定复用同一个 style 节点
  syncCustomCssStyle() {
    const e = this.shadowRoot;
    if (!e) return;
    const u = "ys-md-rendering-custom-css";
    let t = e.querySelector(`#${u}`);
    if (!this.customCss.trim()) {
      t?.remove();
      return;
    }
    t || (t = document.createElement("style"), t.id = u), t.textContent = this.customCss, e.appendChild(t);
  }
  /**
   * 覆盖tailwindcss变量
   * 识别符合`--tw-prose`开头的那些css变量
   */
  setProseVariables() {
    const e = getComputedStyle(this);
    wn.forEach((u) => {
      e.getPropertyValue(u) && this._computedStyles[u] !== e.getPropertyValue(u) && (this._computedStyles[u] = e.getPropertyValue(u));
    });
  }
  /**
   * 一维结构转树状结构
   * @param flatAST 抽象树
   * @param prefix_id id前缀
   * @returns 渲染树
   */
  _buildNestedAST2(e, u = "") {
    const n = {
      key: "root",
      node: new R("", "", 0),
      end: null,
      children: []
    }, r = [n];
    let o = !0;
    for (const [i, s] of e.entries()) {
      const c = r.length - 1;
      if (s.type === "inline") {
        const a = `${u}_${i}`;
        r[c].children.push({
          key: a,
          node: s,
          end: null,
          children: this._buildNestedAST2(s.children || [], a)
        });
      } else if (s.type === "html_inline")
        if (o) {
          o = !1;
          const a = {
            key: `${u}_${i}`,
            node: s,
            end: null,
            children: []
          };
          r[c].children.push(a), r.push(a);
        } else
          o = !0, r[c].end = s, r.pop();
      else if (s.nesting === 0)
        r[c].children.push({
          key: `${u}_${i}`,
          node: s,
          end: null,
          children: []
        });
      else if (s.nesting === 1) {
        const a = {
          key: `${u}_${i}`,
          node: s,
          end: null,
          children: []
        };
        r[c].children.push(a), r.push(a);
      } else s.nesting === -1 && (r[c].end = s, r.pop());
    }
    return n.children;
  }
  // 渲染AST v5
  _renderAst5(e) {
    return e.map((t, n) => {
      const r = t.node, o = (c) => {
        const a = `${t.key}_${n}`;
        let l;
        if (this.cloneMap.has(a)) {
          l = this.cloneMap.get(a), l.dataset.content = r.content;
          let d = !1;
          t?.end?.meta?.isClose && (d = !0), t.node.type === "fence" && t.node.meta?.isClose && (d = !0), l.dataset.completeDispatched === "true" || this.dispatchEvent(
            new CustomEvent(`${c}-update`, {
              detail: {
                key: a,
                el: l,
                content: r.content,
                type: c,
                iscomplete: d,
                meta: r.meta || null
              },
              bubbles: !0,
              composed: !0
            })
          ), d && (l.dataset.completeDispatched = "true");
        } else {
          l = this.templates.get(c).cloneNode(!0), l.dataset.ysInstance = "", l.dataset.ysIndex = String(n), l.dataset.register = c, l.dataset.content = r.content;
          const p = l.dataset.style || "";
          if (p) {
            const h = l.innerHTML, f = l.attachShadow({ mode: "open" });
            f.innerHTML = `<style>${p || ""}</style>${h}`, l.innerHTML = "";
          }
          this.cloneMap.set(a, l), queueMicrotask(() => {
            this.dispatchEvent(
              new CustomEvent(`${c}-instance`, {
                detail: {
                  key: a,
                  el: l,
                  content: r.content,
                  type: c,
                  iscomplete: !1,
                  meta: r.meta || null
                },
                bubbles: !0,
                composed: !0
              })
            );
            let h = !1;
            t?.end?.meta?.isClose && (h = !0), t.node.type === "fence" && t.node.meta?.isClose && (h = !0), h && queueMicrotask(() => {
              this.dispatchEvent(
                new CustomEvent(`${c}-update`, {
                  detail: {
                    key: a,
                    el: l,
                    content: r.content,
                    type: c,
                    iscomplete: h,
                    meta: r.meta || null
                  },
                  bubbles: !0,
                  composed: !0
                })
              ), l.dataset.completeDispatched = "true";
            });
          });
        }
        return l;
      };
      if (this.templates.has(r.type))
        return o(r.type);
      if (r.type === "fence" && this.autoKey.has(r.info)) {
        const c = this.autoKey.get(r.info);
        return o(c);
      }
      const i = this.customMethods[r.type];
      if (i)
        return i(t, this._renderAst5(t.children), {});
      const s = gn[r.type];
      return s ? s(t, this._renderAst5(t.children), {
        style: this.customStyles,
        breaks: this.breaks
      }) : (console.warn("未找到渲染方法:", r.type), null);
    }).filter((t) => t !== void 0 && t !== k``);
  }
  _getAST() {
    const e = this.md.parse(this.content, {});
    e.forEach((r) => {
      r.type === "fence" && (r.meta = {
        ...r.meta,
        isClose: !0
      });
    });
    const u = e[e.length - 1];
    if (u && u.type === "fence") {
      u.meta.isClose = !1;
      const r = this.content.trimEnd();
      u.content && r.endsWith("```") && (u.meta.isClose = !0);
    }
    const t = this._buildNestedAST2(e, this.key);
    return this._renderAst5(t);
  }
  render() {
    if (!this.isReady)
      return k`<slot></slot>`;
    const e = {
      prose: !0,
      "dark:prose-invert": !0,
      // 默认自动检测
      "prose-invert": !1,
      "max-w-full": !0
    };
    return this.mode === "dark" && (e["dark:prose-invert"] = !1, e["prose-invert"] = !0), this.mode === "light" && (e["dark:prose-invert"] = !1, e["prose-invert"] = !1), k`
      <div class=${Pu(e)} style=${Gu(this._computedStyles)}>${this._getAST()}</div>
      <slot></slot>
    `;
  }
};
$.styles = [
  qu(N0),
  Iu`
      :host {
        --rem-size: 1rem;
        display: block;
        max-width: 100%;
      }
      .prose {
        font-size: var(--rem-size);
      }
    `
];
j([
  ee({ type: String })
], $.prototype, "content", 2);
j([
  ee({ type: String })
], $.prototype, "mode", 2);
j([
  ee({ type: Boolean, converter: iu })
], $.prototype, "dark", 2);
j([
  ee({
    type: Object,
    attribute: "custom-styles",
    converter: Zu,
    hasChanged: (e, u) => JSON.stringify(e) !== JSON.stringify(u)
  })
], $.prototype, "customStyles", 2);
j([
  ee({ type: String, attribute: "custom-css" })
], $.prototype, "customCss", 2);
j([
  ee({ type: Boolean, converter: iu })
], $.prototype, "breaks", 2);
j([
  Ku({ context: Uu }),
  ze()
], $.prototype, "themeData", 2);
j([
  ze()
], $.prototype, "_computedStyles", 2);
j([
  ze()
], $.prototype, "isReady", 2);
$ = j([
  Lu("ys-md-rendering")
], $);
export {
  $ as default
};
