import { bw as ru, bx as iu, aN as tl, bg as su, aR as au, aO as te, az as ou, aA as zs, b6 as lu, b9 as nl, ba as rl, b7 as cu, bl as qs, aC as yt, aD as D, aP as Ys, aJ as uu } from "./index-BX-ZM0Ir.js";
import { k as wt, j as gs, g as Dt, S as du, w as fu, x as hu, c as il, v as z, y as sl, l as pu, z as mu, A as gu, B as yu, C as Tu, a as al, d as $, i as qe, r as oe, f as Se, D as Y } from "./_baseUniq-BQqVdRLZ.js";
import { j as ys, m as S, d as Ru, f as Ne, g as _t, h as N, i as Ts, l as Lt, e as vu } from "./_basePickBy-CC5cZEYK.js";
import { c as re } from "./clone-DwsAL1rQ.js";
var Au = Object.prototype, Eu = Au.hasOwnProperty, ke = ru(function(n, e) {
  if (iu(e) || tl(e)) {
    su(e, wt(e), n);
    return;
  }
  for (var t in e)
    Eu.call(e, t) && au(n, t, e[t]);
});
function ol(n, e, t) {
  var r = -1, i = n.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = n[r + e];
  return s;
}
function Pn(n) {
  for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
    var s = n[e];
    s && (i[r++] = s);
  }
  return i;
}
function ku(n, e, t, r) {
  for (var i = -1, s = n == null ? 0 : n.length; ++i < s; ) {
    var a = n[i];
    e(r, a, t(a), n);
  }
  return r;
}
function Su(n, e, t, r) {
  return gs(n, function(i, s, a) {
    e(r, i, t(i), a);
  }), r;
}
function xu(n, e) {
  return function(t, r) {
    var i = te(t) ? ku : Su, s = e ? e() : {};
    return i(t, n, Dt(r), s);
  };
}
var Iu = 200;
function Cu(n, e, t, r) {
  var i = -1, s = fu, a = !0, o = n.length, l = [], c = e.length;
  if (!o)
    return l;
  e.length >= Iu && (s = hu, a = !1, e = new du(e));
  e:
    for (; ++i < o; ) {
      var u = n[i], d = u;
      if (u = u !== 0 ? u : 0, a && d === d) {
        for (var h = c; h--; )
          if (e[h] === d)
            continue e;
        l.push(u);
      } else s(e, d, r) || l.push(u);
    }
  return l;
}
var Hr = ou(function(n, e) {
  return zs(n) ? Cu(n, il(e, 1, zs, !0)) : [];
});
function Q(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : ys(e), ol(n, e < 0 ? 0 : e, r)) : [];
}
function _n(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : ys(e), e = r - e, ol(n, 0, e < 0 ? 0 : e)) : [];
}
function $u(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (!e(n[t], t, n))
      return !1;
  return !0;
}
function Nu(n, e) {
  var t = !0;
  return gs(n, function(r, i, s) {
    return t = !!e(r, i, s), t;
  }), t;
}
function be(n, e, t) {
  var r = te(n) ? $u : Nu;
  return r(n, Dt(e));
}
function Pe(n) {
  return n && n.length ? n[0] : void 0;
}
function Ee(n, e) {
  return il(S(n, e));
}
var wu = Object.prototype, _u = wu.hasOwnProperty, Lu = xu(function(n, e, t) {
  _u.call(n, t) ? n[t].push(e) : lu(n, t, [e]);
}), Ou = "[object String]";
function fe(n) {
  return typeof n == "string" || !te(n) && nl(n) && rl(n) == Ou;
}
var bu = Math.max;
function ue(n, e, t, r) {
  n = tl(n) ? n : z(n), t = t ? ys(t) : 0;
  var i = n.length;
  return t < 0 && (t = bu(i + t, 0)), fe(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && sl(n, e, t) > -1;
}
function Xs(n, e, t) {
  var r = n == null ? 0 : n.length;
  if (!r)
    return -1;
  var i = 0;
  return sl(n, e, i);
}
var Pu = "[object RegExp]";
function Mu(n) {
  return nl(n) && rl(n) == Pu;
}
var Js = qs && qs.isRegExp, Ye = Js ? cu(Js) : Mu, Du = "Expected a function";
function Fu(n) {
  if (typeof n != "function")
    throw new TypeError(Du);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !n.call(this);
      case 1:
        return !n.call(this, e[0]);
      case 2:
        return !n.call(this, e[0], e[1]);
      case 3:
        return !n.call(this, e[0], e[1], e[2]);
    }
    return !n.apply(this, e);
  };
}
function Me(n, e) {
  if (n == null)
    return {};
  var t = pu(mu(n), function(r) {
    return [r];
  });
  return e = Dt(e), Ru(n, t, function(r, i) {
    return e(r, i[0]);
  });
}
function zr(n, e) {
  var t = te(n) ? gu : yu;
  return t(n, Fu(Dt(e)));
}
function Gu(n, e) {
  var t;
  return gs(n, function(r, i, s) {
    return t = e(r, i, s), !t;
  }), !!t;
}
function ll(n, e, t) {
  var r = te(n) ? Tu : Gu;
  return r(n, Dt(e));
}
function Rs(n) {
  return n && n.length ? al(n) : [];
}
function Uu(n, e) {
  return n && n.length ? al(n, Dt(e)) : [];
}
function ae(n) {
  return typeof n == "object" && n !== null && typeof n.$type == "string";
}
function Ue(n) {
  return typeof n == "object" && n !== null && typeof n.$refText == "string";
}
function Bu(n) {
  return typeof n == "object" && n !== null && typeof n.name == "string" && typeof n.type == "string" && typeof n.path == "string";
}
function lr(n) {
  return typeof n == "object" && n !== null && ae(n.container) && Ue(n.reference) && typeof n.message == "string";
}
class cl {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t)
      return !0;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[t];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, t);
      return r[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    const t = this.allSubtypes[e];
    if (t)
      return t;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function Ln(n) {
  return typeof n == "object" && n !== null && Array.isArray(n.content);
}
function ul(n) {
  return typeof n == "object" && n !== null && typeof n.tokenType == "object";
}
function dl(n) {
  return Ln(n) && typeof n.fullText == "string";
}
class Z {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let t = 0, r = e.next();
    for (; !r.done; )
      t++, r = e.next();
    return t;
  }
  toArray() {
    const e = [], t = this.iterator();
    let r;
    do
      r = t.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    const r = this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new Z(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (t) => {
      let r;
      if (!t.firstDone) {
        do
          if (r = this.nextFn(t.first), !r.done)
            return r;
        while (!r.done);
        t.firstDone = !0;
      }
      do
        if (r = t.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return ve;
    });
  }
  join(e = ",") {
    const t = this.iterator();
    let r = "", i, s = !1;
    do
      i = t.next(), i.done || (s && (r += e), r += Vu(i.value)), s = !0;
    while (!i.done);
    return r;
  }
  indexOf(e, t = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return !1;
      r = t.next();
    }
    return !0;
  }
  some(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return !0;
      r = t.next();
    }
    return !1;
  }
  forEach(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; )
      e(i.value, r), i = t.next(), r++;
  }
  map(e) {
    return new Z(this.startFn, (t) => {
      const { done: r, value: i } = this.nextFn(t);
      return r ? ve : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new Z(this.startFn, (t) => {
      let r;
      do
        if (r = this.nextFn(t), !r.done && e(r.value))
          return r;
      while (!r.done);
      return ve;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    const r = this.iterator();
    let i = t, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(this.iterator(), e, t);
  }
  recursiveReduce(e, t, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, t, r);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = t.next();
    }
  }
  findIndex(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = t.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (r.value === e)
        return !0;
      r = t.next();
    }
    return !1;
  }
  flatMap(e) {
    return new Z(() => ({ this: this.startFn() }), (t) => {
      do {
        if (t.iterator) {
          const s = t.iterator.next();
          if (s.done)
            t.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(t.this);
        if (!r) {
          const s = e(i);
          if (kr(s))
            t.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
        }
      } while (t.iterator);
      return ve;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const t = e > 1 ? this.flat(e - 1) : this;
    return new Z(() => ({ this: t.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a = r.iterator.next();
          if (a.done)
            r.iterator = void 0;
          else
            return a;
        }
        const { done: i, value: s } = t.nextFn(r.this);
        if (!i)
          if (kr(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
      } while (r.iterator);
      return ve;
    });
  }
  head() {
    const t = this.iterator().next();
    if (!t.done)
      return t.value;
  }
  tail(e = 1) {
    return new Z(() => {
      const t = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(t).done)
          return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new Z(() => ({ size: 0, state: this.startFn() }), (t) => (t.size++, t.size > e ? ve : this.nextFn(t.state)));
  }
  distinct(e) {
    return new Z(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (t) => {
      let r;
      do
        if (r = this.nextFn(t.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!t.set.has(i))
            return t.set.add(i), r;
        }
      while (!r.done);
      return ve;
    });
  }
  exclude(e, t) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = t ? t(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = t ? t(i) : i;
      return !r.has(s);
    });
  }
}
function Vu(n) {
  return typeof n == "string" ? n : typeof n > "u" ? "undefined" : typeof n.toString == "function" ? n.toString() : Object.prototype.toString.call(n);
}
function kr(n) {
  return !!n && typeof n[Symbol.iterator] == "function";
}
const Wu = new Z(() => {
}, () => ve), ve = Object.freeze({ done: !0, value: void 0 });
function ee(...n) {
  if (n.length === 1) {
    const e = n[0];
    if (e instanceof Z)
      return e;
    if (kr(e))
      return new Z(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number")
      return new Z(() => ({ index: 0 }), (t) => t.index < e.length ? { done: !1, value: e[t.index++] } : ve);
  }
  return n.length > 1 ? new Z(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const t = e.iterator.next();
        if (!t.done)
          return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < n.length) {
        const t = n[e.collIndex++];
        kr(t) ? e.iterator = t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < n.length);
    return ve;
  }) : Wu;
}
class vs extends Z {
  constructor(e, t, r) {
    super(() => ({
      iterators: r?.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
      pruned: !1
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = !1); i.iterators.length > 0; ) {
        const a = i.iterators[i.iterators.length - 1].next();
        if (a.done)
          i.iterators.pop();
        else
          return i.iterators.push(t(a.value)[Symbol.iterator]()), a;
      }
      return ve;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = !0;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var bi;
(function(n) {
  function e(s) {
    return s.reduce((a, o) => a + o, 0);
  }
  n.sum = e;
  function t(s) {
    return s.reduce((a, o) => a * o, 0);
  }
  n.product = t;
  function r(s) {
    return s.reduce((a, o) => Math.min(a, o));
  }
  n.min = r;
  function i(s) {
    return s.reduce((a, o) => Math.max(a, o));
  }
  n.max = i;
})(bi || (bi = {}));
function Pi(n) {
  return new vs(n, (e) => Ln(e) ? e.content : [], { includeRoot: !0 });
}
function ju(n, e) {
  for (; n.container; )
    if (n = n.container, n === e)
      return !0;
  return !1;
}
function Mi(n) {
  return {
    start: {
      character: n.startColumn - 1,
      line: n.startLine - 1
    },
    end: {
      character: n.endColumn,
      // endColumn uses the correct index
      line: n.endLine - 1
    }
  };
}
function Sr(n) {
  if (!n)
    return;
  const { offset: e, end: t, range: r } = n;
  return {
    range: r,
    offset: e,
    end: t,
    length: t - e
  };
}
var Ke;
(function(n) {
  n[n.Before = 0] = "Before", n[n.After = 1] = "After", n[n.OverlapFront = 2] = "OverlapFront", n[n.OverlapBack = 3] = "OverlapBack", n[n.Inside = 4] = "Inside", n[n.Outside = 5] = "Outside";
})(Ke || (Ke = {}));
function Ku(n, e) {
  if (n.end.line < e.start.line || n.end.line === e.start.line && n.end.character <= e.start.character)
    return Ke.Before;
  if (n.start.line > e.end.line || n.start.line === e.end.line && n.start.character >= e.end.character)
    return Ke.After;
  const t = n.start.line > e.start.line || n.start.line === e.start.line && n.start.character >= e.start.character, r = n.end.line < e.end.line || n.end.line === e.end.line && n.end.character <= e.end.character;
  return t && r ? Ke.Inside : t ? Ke.OverlapBack : r ? Ke.OverlapFront : Ke.Outside;
}
function Hu(n, e) {
  return Ku(n, e) > Ke.After;
}
const zu = /^[\w\p{L}]$/u;
function qu(n, e) {
  if (n) {
    const t = Yu(n, !0);
    if (t && Qs(t, e))
      return t;
    if (dl(n)) {
      const r = n.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = n.content[i];
        if (Qs(s, e))
          return s;
      }
    }
  }
}
function Qs(n, e) {
  return ul(n) && e.includes(n.tokenType.name);
}
function Yu(n, e = !0) {
  for (; n.container; ) {
    const t = n.container;
    let r = t.content.indexOf(n);
    for (; r > 0; ) {
      r--;
      const i = t.content[r];
      if (e || !i.hidden)
        return i;
    }
    n = t;
  }
}
class fl extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
}
function Mn(n) {
  throw new Error("Error! The input value was not handled.");
}
const Wn = "AbstractRule", jn = "AbstractType", li = "Condition", Zs = "TypeDefinition", ci = "ValueLiteral", zt = "AbstractElement";
function Xu(n) {
  return M.isInstance(n, zt);
}
const Kn = "ArrayLiteral", Hn = "ArrayType", qt = "BooleanLiteral";
function Ju(n) {
  return M.isInstance(n, qt);
}
const Yt = "Conjunction";
function Qu(n) {
  return M.isInstance(n, Yt);
}
const Xt = "Disjunction";
function Zu(n) {
  return M.isInstance(n, Xt);
}
const zn = "Grammar", ui = "GrammarImport", Jt = "InferredType";
function hl(n) {
  return M.isInstance(n, Jt);
}
const Qt = "Interface";
function pl(n) {
  return M.isInstance(n, Qt);
}
const di = "NamedArgument", Zt = "Negation";
function ed(n) {
  return M.isInstance(n, Zt);
}
const qn = "NumberLiteral", Yn = "Parameter", en = "ParameterReference";
function td(n) {
  return M.isInstance(n, en);
}
const tn = "ParserRule";
function we(n) {
  return M.isInstance(n, tn);
}
const Xn = "ReferenceType", cr = "ReturnType";
function nd(n) {
  return M.isInstance(n, cr);
}
const nn = "SimpleType";
function rd(n) {
  return M.isInstance(n, nn);
}
const Jn = "StringLiteral", It = "TerminalRule";
function Tt(n) {
  return M.isInstance(n, It);
}
const rn = "Type";
function ml(n) {
  return M.isInstance(n, rn);
}
const fi = "TypeAttribute", Qn = "UnionType", sn = "Action";
function qr(n) {
  return M.isInstance(n, sn);
}
const an = "Alternatives";
function gl(n) {
  return M.isInstance(n, an);
}
const on = "Assignment";
function dt(n) {
  return M.isInstance(n, on);
}
const ln = "CharacterRange";
function id(n) {
  return M.isInstance(n, ln);
}
const cn = "CrossReference";
function As(n) {
  return M.isInstance(n, cn);
}
const un = "EndOfFile";
function sd(n) {
  return M.isInstance(n, un);
}
const dn = "Group";
function Es(n) {
  return M.isInstance(n, dn);
}
const fn = "Keyword";
function ft(n) {
  return M.isInstance(n, fn);
}
const hn = "NegatedToken";
function ad(n) {
  return M.isInstance(n, hn);
}
const pn = "RegexToken";
function od(n) {
  return M.isInstance(n, pn);
}
const mn = "RuleCall";
function ht(n) {
  return M.isInstance(n, mn);
}
const gn = "TerminalAlternatives";
function ld(n) {
  return M.isInstance(n, gn);
}
const yn = "TerminalGroup";
function cd(n) {
  return M.isInstance(n, yn);
}
const Tn = "TerminalRuleCall";
function ud(n) {
  return M.isInstance(n, Tn);
}
const Rn = "UnorderedGroup";
function yl(n) {
  return M.isInstance(n, Rn);
}
const vn = "UntilToken";
function dd(n) {
  return M.isInstance(n, vn);
}
const An = "Wildcard";
function fd(n) {
  return M.isInstance(n, An);
}
class Tl extends cl {
  getAllTypes() {
    return [zt, Wn, jn, sn, an, Kn, Hn, on, qt, ln, li, Yt, cn, Xt, un, zn, ui, dn, Jt, Qt, fn, di, hn, Zt, qn, Yn, en, tn, Xn, pn, cr, mn, nn, Jn, gn, yn, It, Tn, rn, fi, Zs, Qn, Rn, vn, ci, An];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case sn:
      case an:
      case on:
      case ln:
      case cn:
      case un:
      case dn:
      case fn:
      case hn:
      case pn:
      case mn:
      case gn:
      case yn:
      case Tn:
      case Rn:
      case vn:
      case An:
        return this.isSubtype(zt, t);
      case Kn:
      case qn:
      case Jn:
        return this.isSubtype(ci, t);
      case Hn:
      case Xn:
      case nn:
      case Qn:
        return this.isSubtype(Zs, t);
      case qt:
        return this.isSubtype(li, t) || this.isSubtype(ci, t);
      case Yt:
      case Xt:
      case Zt:
      case en:
        return this.isSubtype(li, t);
      case Jt:
      case Qt:
      case rn:
        return this.isSubtype(jn, t);
      case tn:
        return this.isSubtype(Wn, t) || this.isSubtype(jn, t);
      case It:
        return this.isSubtype(Wn, t);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return jn;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return Wn;
      case "Grammar:usedGrammars":
        return zn;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return Yn;
      case "TerminalRuleCall:rule":
        return It;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case zt:
        return {
          name: zt,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case Kn:
        return {
          name: Kn,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case Hn:
        return {
          name: Hn,
          properties: [
            { name: "elementType" }
          ]
        };
      case qt:
        return {
          name: qt,
          properties: [
            { name: "true", defaultValue: !1 }
          ]
        };
      case Yt:
        return {
          name: Yt,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Xt:
        return {
          name: Xt,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case zn:
        return {
          name: zn,
          properties: [
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: !1 },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case ui:
        return {
          name: ui,
          properties: [
            { name: "path" }
          ]
        };
      case Jt:
        return {
          name: Jt,
          properties: [
            { name: "name" }
          ]
        };
      case Qt:
        return {
          name: Qt,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case di:
        return {
          name: di,
          properties: [
            { name: "calledByName", defaultValue: !1 },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case Zt:
        return {
          name: Zt,
          properties: [
            { name: "value" }
          ]
        };
      case qn:
        return {
          name: qn,
          properties: [
            { name: "value" }
          ]
        };
      case Yn:
        return {
          name: Yn,
          properties: [
            { name: "name" }
          ]
        };
      case en:
        return {
          name: en,
          properties: [
            { name: "parameter" }
          ]
        };
      case tn:
        return {
          name: tn,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "definition" },
            { name: "entry", defaultValue: !1 },
            { name: "fragment", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: !1 }
          ]
        };
      case Xn:
        return {
          name: Xn,
          properties: [
            { name: "referenceType" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "name" }
          ]
        };
      case nn:
        return {
          name: nn,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case Jn:
        return {
          name: Jn,
          properties: [
            { name: "value" }
          ]
        };
      case It:
        return {
          name: It,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: !1 },
            { name: "hidden", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case rn:
        return {
          name: rn,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case fi:
        return {
          name: fi,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Qn:
        return {
          name: Qn,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case sn:
        return {
          name: sn,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case an:
        return {
          name: an,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case on:
        return {
          name: on,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case ln:
        return {
          name: ln,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case cn:
        return {
          name: cn,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: !1 },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case un:
        return {
          name: un,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case dn:
        return {
          name: dn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case fn:
        return {
          name: fn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case hn:
        return {
          name: hn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case pn:
        return {
          name: pn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case mn:
        return {
          name: mn,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case gn:
        return {
          name: gn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case yn:
        return {
          name: yn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Tn:
        return {
          name: Tn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case Rn:
        return {
          name: Rn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case vn:
        return {
          name: vn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case An:
        return {
          name: An,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}
const M = new Tl();
function hd(n) {
  for (const [e, t] of Object.entries(n))
    e.startsWith("$") || (Array.isArray(t) ? t.forEach((r, i) => {
      ae(r) && (r.$container = n, r.$containerProperty = e, r.$containerIndex = i);
    }) : ae(t) && (t.$container = n, t.$containerProperty = e));
}
function Yr(n, e) {
  let t = n;
  for (; t; ) {
    if (e(t))
      return t;
    t = t.$container;
  }
}
function Ze(n) {
  const t = Di(n).$document;
  if (!t)
    throw new Error("AST node has no document.");
  return t;
}
function Di(n) {
  for (; n.$container; )
    n = n.$container;
  return n;
}
function ks(n, e) {
  if (!n)
    throw new Error("Node must be an AstNode.");
  const t = e?.range;
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = n[i];
        if (ae(s)) {
          if (r.keyIndex++, ea(s, t))
            return { done: !1, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a = r.arrayIndex++, o = s[a];
            if (ae(o) && ea(o, t))
              return { done: !1, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return ve;
  });
}
function Dn(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new vs(n, (t) => ks(t, e));
}
function $t(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new vs(n, (t) => ks(t, e), { includeRoot: !0 });
}
function ea(n, e) {
  var t;
  if (!e)
    return !0;
  const r = (t = n.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return r ? Hu(r, e) : !1;
}
function Rl(n) {
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        const r = n[t];
        if (Ue(r))
          return e.keyIndex++, { done: !1, value: { reference: r, container: n, property: t } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (Ue(s))
              return { done: !1, value: { reference: s, container: n, property: t, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return ve;
  });
}
function pd(n, e) {
  const t = n.getTypeMetaData(e.$type), r = e;
  for (const i of t.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = vl(i.defaultValue));
}
function vl(n) {
  return Array.isArray(n) ? [...n.map(vl)] : n;
}
function w(n) {
  return n.charCodeAt(0);
}
function hi(n, e) {
  Array.isArray(n) ? n.forEach(function(t) {
    e.push(t);
  }) : e.push(n);
}
function jt(n, e) {
  if (n[e] === !0)
    throw "duplicate flag " + e;
  n[e], n[e] = !0;
}
function xt(n) {
  if (n === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function md() {
  throw Error("Internal Error - Should never get here!");
}
function ta(n) {
  return n.type === "Character";
}
const xr = [];
for (let n = w("0"); n <= w("9"); n++)
  xr.push(n);
const Ir = [w("_")].concat(xr);
for (let n = w("a"); n <= w("z"); n++)
  Ir.push(n);
for (let n = w("A"); n <= w("Z"); n++)
  Ir.push(n);
const na = [
  w(" "),
  w("\f"),
  w(`
`),
  w("\r"),
  w("	"),
  w("\v"),
  w("	"),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w("\u2028"),
  w("\u2029"),
  w(" "),
  w(" "),
  w("　"),
  w("\uFEFF")
], gd = /[0-9a-fA-F]/, Zn = /[0-9]/, yd = /[1-9]/;
class Al {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const t = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          jt(r, "global");
          break;
        case "i":
          jt(r, "ignoreCase");
          break;
        case "m":
          jt(r, "multiLine");
          break;
        case "u":
          jt(r, "unicode");
          break;
        case "y":
          jt(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: t,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], t = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(t) };
  }
  alternative() {
    const e = [], t = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(t) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        xt(t);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: r,
          loc: this.loc(e)
        };
    }
    return md();
  }
  quantifier(e = !1) {
    let t;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && t === void 0)
          return;
        xt(t);
        break;
    }
    if (!(e === !0 && t === void 0) && xt(t))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = !1) : t.greedy = !0, t.type = "Quantifier", t.loc = this.loc(r), t;
  }
  atom() {
    let e;
    const t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), xt(e))
      return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [w(`
`), w("\r"), w("\u2028"), w("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, t = !1;
    switch (this.popChar()) {
      case "d":
        e = xr;
        break;
      case "D":
        e = xr, t = !0;
        break;
      case "s":
        e = na;
        break;
      case "S":
        e = na, t = !0;
        break;
      case "w":
        e = Ir;
        break;
      case "W":
        e = Ir, t = !0;
        break;
    }
    if (xt(e))
      return { type: "Set", value: e, complement: t };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = w("\f");
        break;
      case "n":
        e = w(`
`);
        break;
      case "r":
        e = w("\r");
        break;
      case "t":
        e = w("	");
        break;
      case "v":
        e = w("\v");
        break;
    }
    if (xt(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: w("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: w(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: w(e) };
    }
  }
  characterClass() {
    const e = [];
    let t = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, ta(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, ta(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          hi(r.value, e), e.push(w("-")), hi(i.value, e);
      } else
        hi(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: t, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        return this.consumeChar("b"), { type: "Character", value: w("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = !1;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const t = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (yd.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; Zn.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (Zn.test(e) === !1)
      throw Error("Expecting an integer");
    for (; Zn.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: w(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return Zn.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      // '(?=' or '(?!'
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (gd.test(s) === !1)
        throw Error("Expecting a HexDecimal digits");
      t += s;
    }
    return { type: "Character", value: parseInt(t, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class Xr {
  visitChildren(e) {
    for (const t in e) {
      const r = e[t];
      e.hasOwnProperty(t) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const Td = /\r?\n/gm, Rd = new Al();
class vd extends Xr {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const t = String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = Jr(t);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const t = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(t);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const t = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const pi = new vd();
function Ad(n) {
  try {
    return typeof n == "string" && (n = new RegExp(n)), n = n.toString(), pi.reset(n), pi.visit(Rd.pattern(n)), pi.multiline;
  } catch {
    return !1;
  }
}
const Ed = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Fi(n) {
  const e = typeof n == "string" ? new RegExp(n) : n;
  return Ed.some((t) => e.test(t));
}
function Jr(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function kd(n) {
  return Array.prototype.map.call(n, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : Jr(e)).join("");
}
function Sd(n, e) {
  const t = xd(n), r = e.match(t);
  return !!r && r[0].length > 0;
}
function xd(n) {
  typeof n == "string" && (n = new RegExp(n));
  const e = n, t = n.source;
  let r = 0;
  function i() {
    let s = "", a;
    function o(c) {
      s += t.substr(r, c), r += c;
    }
    function l(c) {
      s += "(?:" + t.substr(r, c) + "|$)", r += c;
    }
    for (; r < t.length; )
      switch (t[r]) {
        case "\\":
          switch (t[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? t[r + 2] === "{" ? l(t.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(t.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(t.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(t) || [], l(a[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(t), a ? o(a[0].length) : l(1);
          break;
        case "(":
          if (t[r + 1] === "?")
            switch (t[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a = r, r += 3, i(), s += t.substr(a, r - a);
                break;
              case "<":
                switch (t[r + 3]) {
                  case "=":
                  case "!":
                    a = r, r += 4, i(), s += t.substr(a, r - a);
                    break;
                  default:
                    o(t.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), n.flags);
}
function Id(n) {
  return n.rules.find((e) => we(e) && e.entry);
}
function Cd(n) {
  return n.rules.filter((e) => Tt(e) && e.hidden);
}
function El(n, e) {
  const t = /* @__PURE__ */ new Set(), r = Id(n);
  if (!r)
    return new Set(n.rules);
  const i = [r].concat(Cd(n));
  for (const a of i)
    kl(a, t, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of n.rules)
    (t.has(a.name) || Tt(a) && a.hidden) && s.add(a);
  return s;
}
function kl(n, e, t) {
  e.add(n.name), Dn(n).forEach((r) => {
    if (ht(r) || t) {
      const i = r.rule.ref;
      i && !e.has(i.name) && kl(i, e, t);
    }
  });
}
function $d(n) {
  if (n.terminal)
    return n.terminal;
  if (n.type.ref) {
    const e = xl(n.type.ref);
    return e?.terminal;
  }
}
function Nd(n) {
  return n.hidden && !Fi(Cs(n));
}
function wd(n, e) {
  return !n || !e ? [] : Ss(n, e, n.astNode, !0);
}
function Sl(n, e, t) {
  if (!n || !e)
    return;
  const r = Ss(n, e, n.astNode, !0);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function Ss(n, e, t, r) {
  if (!r) {
    const i = Yr(n.grammarSource, dt);
    if (i && i.feature === e)
      return [n];
  }
  return Ln(n) && n.astNode === t ? n.content.flatMap((i) => Ss(i, e, t, !1)) : [];
}
function _d(n, e, t) {
  if (!n)
    return;
  const r = Ld(n, e, n?.astNode);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function Ld(n, e, t) {
  if (n.astNode !== t)
    return [];
  if (ft(n.grammarSource) && n.grammarSource.value === e)
    return [n];
  const r = Pi(n).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a = i.value;
      a.astNode === t ? ft(a.grammarSource) && a.grammarSource.value === e && s.push(a) : r.prune();
    }
  while (!i.done);
  return s;
}
function Od(n) {
  var e;
  const t = n.astNode;
  for (; t === ((e = n.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = Yr(n.grammarSource, dt);
    if (r)
      return r;
    n = n.container;
  }
}
function xl(n) {
  let e = n;
  return hl(e) && (qr(e.$container) ? e = e.$container.$container : we(e.$container) ? e = e.$container : Mn(e.$container)), Il(n, e, /* @__PURE__ */ new Map());
}
function Il(n, e, t) {
  var r;
  function i(s, a) {
    let o;
    return Yr(s, dt) || (o = Il(a, a, t)), t.set(n, o), o;
  }
  if (t.has(n))
    return t.get(n);
  t.set(n, void 0);
  for (const s of Dn(e)) {
    if (dt(s) && s.feature.toLowerCase() === "name")
      return t.set(n, s), s;
    if (ht(s) && we(s.rule.ref))
      return i(s, s.rule.ref);
    if (rd(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Cl(n) {
  return $l(n, /* @__PURE__ */ new Set());
}
function $l(n, e) {
  if (e.has(n))
    return !0;
  e.add(n);
  for (const t of Dn(n))
    if (ht(t)) {
      if (!t.rule.ref || we(t.rule.ref) && !$l(t.rule.ref, e))
        return !1;
    } else {
      if (dt(t))
        return !1;
      if (qr(t))
        return !1;
    }
  return !!n.definition;
}
function xs(n) {
  if (n.inferredType)
    return n.inferredType.name;
  if (n.dataType)
    return n.dataType;
  if (n.returnType) {
    const e = n.returnType.ref;
    if (e) {
      if (we(e))
        return e.name;
      if (pl(e) || ml(e))
        return e.name;
    }
  }
}
function Is(n) {
  var e;
  if (we(n))
    return Cl(n) ? n.name : (e = xs(n)) !== null && e !== void 0 ? e : n.name;
  if (pl(n) || ml(n) || nd(n))
    return n.name;
  if (qr(n)) {
    const t = bd(n);
    if (t)
      return t;
  } else if (hl(n))
    return n.name;
  throw new Error("Cannot get name of Unknown Type");
}
function bd(n) {
  var e;
  if (n.inferredType)
    return n.inferredType.name;
  if (!((e = n.type) === null || e === void 0) && e.ref)
    return Is(n.type.ref);
}
function Pd(n) {
  var e, t, r;
  return Tt(n) ? (t = (e = n.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (r = xs(n)) !== null && r !== void 0 ? r : n.name;
}
function Cs(n) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, t = Ft(n.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(t, r);
}
const $s = /[\s\S]/.source;
function Ft(n, e) {
  if (ld(n))
    return Md(n);
  if (cd(n))
    return Dd(n);
  if (id(n))
    return Ud(n);
  if (ud(n)) {
    const t = n.rule.ref;
    if (!t)
      throw new Error("Missing rule reference.");
    return ze(Ft(t.definition), {
      cardinality: n.cardinality,
      lookahead: n.lookahead
    });
  } else {
    if (ad(n))
      return Gd(n);
    if (dd(n))
      return Fd(n);
    if (od(n)) {
      const t = n.regex.lastIndexOf("/"), r = n.regex.substring(1, t), i = n.regex.substring(t + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), ze(r, {
        cardinality: n.cardinality,
        lookahead: n.lookahead,
        wrap: !1
      });
    } else {
      if (fd(n))
        return ze($s, {
          cardinality: n.cardinality,
          lookahead: n.lookahead
        });
      throw new Error(`Invalid terminal element: ${n?.$type}`);
    }
  }
}
function Md(n) {
  return ze(n.elements.map((e) => Ft(e)).join("|"), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Dd(n) {
  return ze(n.elements.map((e) => Ft(e)).join(""), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Fd(n) {
  return ze(`${$s}*?${Ft(n.terminal)}`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Gd(n) {
  return ze(`(?!${Ft(n.terminal)})${$s}*?`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Ud(n) {
  return n.right ? ze(`[${mi(n.left)}-${mi(n.right)}]`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: !1
  }) : ze(mi(n.left), {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: !1
  });
}
function mi(n) {
  return Jr(n.value);
}
function ze(n, e) {
  var t;
  return (e.wrap !== !1 || e.lookahead) && (n = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${n})`), e.cardinality ? `${n}${e.cardinality}` : n;
}
function Bd(n) {
  const e = [], t = n.Grammar;
  for (const r of t.rules)
    Tt(r) && Nd(r) && Ad(Cs(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: zu
  };
}
function Gi(n) {
  console && console.error && console.error(`Error: ${n}`);
}
function Nl(n) {
  console && console.warn && console.warn(`Warning: ${n}`);
}
function wl(n) {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = n();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: t };
}
function _l(n) {
  function e() {
  }
  e.prototype = n;
  const t = new e();
  function r() {
    return typeof t.bar;
  }
  return r(), r(), n;
}
function Vd(n) {
  return Wd(n) ? n.LABEL : n.name;
}
function Wd(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
class Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), $(this.definition, (t) => {
      t.accept(e);
    });
  }
}
class le extends Be {
  constructor(e) {
    super([]), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class Gt extends Be {
  constructor(e) {
    super(e.definition), this.orgText = "", ke(this, Me(e, (t) => t !== void 0));
  }
}
class he extends Be {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, ke(this, Me(e, (t) => t !== void 0));
  }
}
let ne = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
class xe extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class Ie extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class j extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class me extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class ge extends Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class G {
  constructor(e) {
    this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function jd(n) {
  return S(n, ur);
}
function ur(n) {
  function e(t) {
    return S(t, ur);
  }
  if (n instanceof le) {
    const t = {
      type: "NonTerminal",
      name: n.nonTerminalName,
      idx: n.idx
    };
    return fe(n.label) && (t.label = n.label), t;
  } else {
    if (n instanceof he)
      return {
        type: "Alternative",
        definition: e(n.definition)
      };
    if (n instanceof ne)
      return {
        type: "Option",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof xe)
      return {
        type: "RepetitionMandatory",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: n.idx,
        separator: ur(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof me)
      return {
        type: "RepetitionWithSeparator",
        idx: n.idx,
        separator: ur(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof j)
      return {
        type: "Repetition",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof ge)
      return {
        type: "Alternation",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof G) {
      const t = {
        type: "Terminal",
        name: n.terminalType.name,
        label: Vd(n.terminalType),
        idx: n.idx
      };
      fe(n.label) && (t.terminalLabel = n.label);
      const r = n.terminalType.PATTERN;
      return n.terminalType.PATTERN && (t.pattern = Ye(r) ? r.source : r), t;
    } else {
      if (n instanceof Gt)
        return {
          type: "Rule",
          name: n.name,
          orgText: n.orgText,
          definition: e(n.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class Ut {
  visit(e) {
    const t = e;
    switch (t.constructor) {
      case le:
        return this.visitNonTerminal(t);
      case he:
        return this.visitAlternative(t);
      case ne:
        return this.visitOption(t);
      case xe:
        return this.visitRepetitionMandatory(t);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case me:
        return this.visitRepetitionWithSeparator(t);
      case j:
        return this.visitRepetition(t);
      case ge:
        return this.visitAlternation(t);
      case G:
        return this.visitTerminal(t);
      case Gt:
        return this.visitRule(t);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function Kd(n) {
  return n instanceof he || n instanceof ne || n instanceof j || n instanceof xe || n instanceof Ie || n instanceof me || n instanceof G || n instanceof Gt;
}
function Cr(n, e = []) {
  return n instanceof ne || n instanceof j || n instanceof me ? !0 : n instanceof ge ? ll(n.definition, (r) => Cr(r, e)) : n instanceof le && ue(e, n) ? !1 : n instanceof Be ? (n instanceof le && e.push(n), be(n.definition, (r) => Cr(r, e))) : !1;
}
function Hd(n) {
  return n instanceof ge;
}
function Ge(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof j)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class Qr {
  walk(e, t = []) {
    $(e.definition, (r, i) => {
      const s = Q(e.definition, i + 1);
      if (r instanceof le)
        this.walkProdRef(r, s, t);
      else if (r instanceof G)
        this.walkTerminal(r, s, t);
      else if (r instanceof he)
        this.walkFlat(r, s, t);
      else if (r instanceof ne)
        this.walkOption(r, s, t);
      else if (r instanceof xe)
        this.walkAtLeastOne(r, s, t);
      else if (r instanceof Ie)
        this.walkAtLeastOneSep(r, s, t);
      else if (r instanceof me)
        this.walkManySep(r, s, t);
      else if (r instanceof j)
        this.walkMany(r, s, t);
      else if (r instanceof ge)
        this.walkOr(r, s, t);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
  }
  walkFlat(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkOption(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, r) {
    const i = ra(e, t, r);
    this.walk(e, i);
  }
  walkMany(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkManySep(e, t, r) {
    const i = ra(e, t, r);
    this.walk(e, i);
  }
  walkOr(e, t, r) {
    const i = t.concat(r);
    $(e.definition, (s) => {
      const a = new he({ definition: [s] });
      this.walk(a, i);
    });
  }
}
function ra(n, e, t) {
  return [
    new ne({
      definition: [
        new G({ terminalType: n.separator })
      ].concat(n.definition)
    })
  ].concat(e, t);
}
function Fn(n) {
  if (n instanceof le)
    return Fn(n.referencedRule);
  if (n instanceof G)
    return Yd(n);
  if (Kd(n))
    return zd(n);
  if (Hd(n))
    return qd(n);
  throw Error("non exhaustive match");
}
function zd(n) {
  let e = [];
  const t = n.definition;
  let r = 0, i = t.length > r, s, a = !0;
  for (; i && a; )
    s = t[r], a = Cr(s), e = e.concat(Fn(s)), r = r + 1, i = t.length > r;
  return Rs(e);
}
function qd(n) {
  const e = S(n.definition, (t) => Fn(t));
  return Rs(Ne(e));
}
function Yd(n) {
  return [n.terminalType];
}
const Ll = "_~IN~_";
class Xd extends Qr {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
    const i = Qd(e.referencedRule, e.idx) + this.topProd.name, s = t.concat(r), a = new he({ definition: s }), o = Fn(a);
    this.follows[i] = o;
  }
}
function Jd(n) {
  const e = {};
  return $(n, (t) => {
    const r = new Xd(t).startWalking();
    ke(e, r);
  }), e;
}
function Qd(n, e) {
  return n.name + e + Ll;
}
let dr = {};
const Zd = new Al();
function Zr(n) {
  const e = n.toString();
  if (dr.hasOwnProperty(e))
    return dr[e];
  {
    const t = Zd.pattern(e);
    return dr[e] = t, t;
  }
}
function ef() {
  dr = {};
}
const Ol = "Complement Sets are not supported for first char optimization", $r = `Unable to use "first char" lexer optimizations:
`;
function tf(n, e = !1) {
  try {
    const t = Zr(n);
    return Ui(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === Ol)
      e && Nl(`${$r}	Unable to optimize: < ${n.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Gi(`${$r}
	Failed parsing: < ${n.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function Ui(n, e, t) {
  switch (n.type) {
    case "Disjunction":
      for (let i = 0; i < n.value.length; i++)
        Ui(n.value[i], e, t);
      break;
    case "Alternative":
      const r = n.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a = s;
        switch (a.type) {
          case "Character":
            er(a.value, e, t);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(Ol);
            $(a.value, (l) => {
              if (typeof l == "number")
                er(l, e, t);
              else {
                const c = l;
                if (t === !0)
                  for (let u = c.from; u <= c.to; u++)
                    er(u, e, t);
                else {
                  for (let u = c.from; u <= c.to && u < kn; u++)
                    er(u, e, t);
                  if (c.to >= kn) {
                    const u = c.from >= kn ? c.from : kn, d = c.to, h = et(u), f = et(d);
                    for (let m = h; m <= f; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            Ui(a.value, e, t);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && Bi(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return z(e);
}
function er(n, e, t) {
  const r = et(n);
  e[r] = r, t === !0 && nf(n, e);
}
function nf(n, e) {
  const t = String.fromCharCode(n), r = t.toUpperCase();
  if (r !== t) {
    const i = et(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = t.toLowerCase();
    if (i !== t) {
      const s = et(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function ia(n, e) {
  return _t(n.value, (t) => {
    if (typeof t == "number")
      return ue(e, t);
    {
      const r = t;
      return _t(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function Bi(n) {
  const e = n.quantifier;
  return e && e.atLeast === 0 ? !0 : n.value ? te(n.value) ? be(n.value, Bi) : Bi(n.value) : !1;
}
class rf extends Xr {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ue(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? ia(e, this.targetCharCodes) === void 0 && (this.found = !0) : ia(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function Ns(n, e) {
  if (e instanceof RegExp) {
    const t = Zr(e), r = new rf(n);
    return r.visit(t), r.found;
  } else
    return _t(e, (t) => ue(n, t.charCodeAt(0))) !== void 0;
}
const pt = "PATTERN", En = "defaultMode", tr = "modes";
let bl = typeof new RegExp("(?:)").sticky == "boolean";
function sf(n, e) {
  e = Ts(e, {
    useSticky: bl,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (A, R) => R()
  });
  const t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    $f();
  });
  let r;
  t("Reject Lexer.NA", () => {
    r = zr(n, (A) => A[pt] === de.NA);
  });
  let i = !1, s;
  t("Transform Patterns", () => {
    i = !1, s = S(r, (A) => {
      const R = A[pt];
      if (Ye(R)) {
        const C = R.source;
        return C.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        C !== "^" && C !== "$" && C !== "." && !R.ignoreCase ? C : C.length === 2 && C[0] === "\\" && // not a meta character
        !ue([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], C[1]) ? C[1] : e.useSticky ? aa(R) : sa(R);
      } else {
        if (yt(R))
          return i = !0, { exec: R };
        if (typeof R == "object")
          return i = !0, R;
        if (typeof R == "string") {
          if (R.length === 1)
            return R;
          {
            const C = R.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), F = new RegExp(C);
            return e.useSticky ? aa(F) : sa(F);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, c, u;
  t("misc mapping", () => {
    a = S(r, (A) => A.tokenTypeIdx), o = S(r, (A) => {
      const R = A.GROUP;
      if (R !== de.SKIPPED) {
        if (fe(R))
          return R;
        if (qe(R))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = S(r, (A) => {
      const R = A.LONGER_ALT;
      if (R)
        return te(R) ? S(R, (F) => Xs(r, F)) : [Xs(r, R)];
    }), c = S(r, (A) => A.PUSH_MODE), u = S(r, (A) => N(A, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    const A = Dl(e.lineTerminatorCharacters);
    d = S(r, (R) => !1), e.positionTracking !== "onlyOffset" && (d = S(r, (R) => N(R, "LINE_BREAKS") ? !!R.LINE_BREAKS : Ml(R, A) === !1 && Ns(A, R.PATTERN)));
  });
  let h, f, m, g;
  t("Misc Mapping #2", () => {
    h = S(r, Pl), f = S(s, xf), m = oe(r, (A, R) => {
      const C = R.GROUP;
      return fe(C) && C !== de.SKIPPED && (A[C] = []), A;
    }, {}), g = S(s, (A, R) => ({
      pattern: s[R],
      longerAlt: l[R],
      canLineTerminator: d[R],
      isCustom: h[R],
      short: f[R],
      group: o[R],
      push: c[R],
      pop: u[R],
      tokenTypeIdx: a[R],
      tokenType: r[R]
    }));
  });
  let v = !0, T = [];
  return e.safeMode || t("First Char Optimization", () => {
    T = oe(r, (A, R, C) => {
      if (typeof R.PATTERN == "string") {
        const F = R.PATTERN.charCodeAt(0), ie = et(F);
        gi(A, ie, g[C]);
      } else if (te(R.START_CHARS_HINT)) {
        let F;
        $(R.START_CHARS_HINT, (ie) => {
          const _e = typeof ie == "string" ? ie.charCodeAt(0) : ie, ye = et(_e);
          F !== ye && (F = ye, gi(A, ye, g[C]));
        });
      } else if (Ye(R.PATTERN))
        if (R.PATTERN.unicode)
          v = !1, e.ensureOptimizations && Gi(`${$r}	Unable to analyze < ${R.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const F = tf(R.PATTERN, e.ensureOptimizations);
          D(F) && (v = !1), $(F, (ie) => {
            gi(A, ie, g[C]);
          });
        }
      else
        e.ensureOptimizations && Gi(`${$r}	TokenType: <${R.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = !1;
      return A;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: T,
    hasCustom: i,
    canBeOptimized: v
  };
}
function af(n, e) {
  let t = [];
  const r = lf(n);
  t = t.concat(r.errors);
  const i = cf(r.valid), s = i.valid;
  return t = t.concat(i.errors), t = t.concat(of(s)), t = t.concat(yf(s)), t = t.concat(Tf(s, e)), t = t.concat(Rf(s)), t;
}
function of(n) {
  let e = [];
  const t = Se(n, (r) => Ye(r[pt]));
  return e = e.concat(df(t)), e = e.concat(pf(t)), e = e.concat(mf(t)), e = e.concat(gf(t)), e = e.concat(ff(t)), e;
}
function lf(n) {
  const e = Se(n, (i) => !N(i, pt)), t = S(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: K.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = Hr(n, e);
  return { errors: t, valid: r };
}
function cf(n) {
  const e = Se(n, (i) => {
    const s = i[pt];
    return !Ye(s) && !yt(s) && !N(s, "exec") && !fe(s);
  }), t = S(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: K.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = Hr(n, e);
  return { errors: t, valid: r };
}
const uf = /[^\\][$]/;
function df(n) {
  class e extends Xr {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(s) {
      this.found = !0;
    }
  }
  const t = Se(n, (i) => {
    const s = i.PATTERN;
    try {
      const a = Zr(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return uf.test(s.source);
    }
  });
  return S(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: K.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function ff(n) {
  const e = Se(n, (r) => r.PATTERN.test(""));
  return S(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: K.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const hf = /[^\\[][\^]|^\^/;
function pf(n) {
  class e extends Xr {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(s) {
      this.found = !0;
    }
  }
  const t = Se(n, (i) => {
    const s = i.PATTERN;
    try {
      const a = Zr(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return hf.test(s.source);
    }
  });
  return S(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: K.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function mf(n) {
  const e = Se(n, (r) => {
    const i = r[pt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return S(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: K.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function gf(n) {
  const e = [];
  let t = S(n, (s) => oe(n, (a, o) => (s.PATTERN.source === o.PATTERN.source && !ue(e, o) && o.PATTERN !== de.NA && (e.push(o), a.push(o)), a), []));
  t = Pn(t);
  const r = Se(t, (s) => s.length > 1);
  return S(r, (s) => {
    const a = S(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Pe(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: K.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function yf(n) {
  const e = Se(n, (r) => {
    if (!N(r, "GROUP"))
      return !1;
    const i = r.GROUP;
    return i !== de.SKIPPED && i !== de.NA && !fe(i);
  });
  return S(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: K.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function Tf(n, e) {
  const t = Se(n, (i) => i.PUSH_MODE !== void 0 && !ue(e, i.PUSH_MODE));
  return S(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: K.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function Rf(n) {
  const e = [], t = oe(n, (r, i, s) => {
    const a = i.PATTERN;
    return a === de.NA || (fe(a) ? r.push({ str: a, idx: s, tokenType: i }) : Ye(a) && Af(a) && r.push({ str: a.source, idx: s, tokenType: i })), r;
  }, []);
  return $(n, (r, i) => {
    $(t, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && vf(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: K.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function vf(n, e) {
  if (Ye(e)) {
    const t = e.exec(n);
    return t !== null && t.index === 0;
  } else {
    if (yt(e))
      return e(n, 0, [], {});
    if (N(e, "exec"))
      return e.exec(n, 0, [], {});
    if (typeof e == "string")
      return e === n;
    throw Error("non exhaustive match");
  }
}
function Af(n) {
  return _t([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (t) => n.source.indexOf(t) !== -1) === void 0;
}
function sa(n) {
  const e = n.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${n.source})`, e);
}
function aa(n) {
  const e = n.ignoreCase ? "iy" : "y";
  return new RegExp(`${n.source}`, e);
}
function Ef(n, e, t) {
  const r = [];
  return N(n, En) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + En + `> property in its definition
`,
    type: K.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), N(n, tr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + tr + `> property in its definition
`,
    type: K.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), N(n, tr) && N(n, En) && !N(n.modes, n.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${En}: <${n.defaultMode}>which does not exist
`,
    type: K.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), N(n, tr) && $(n.modes, (i, s) => {
    $(i, (a, o) => {
      if (qe(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: K.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (N(a, "LONGER_ALT")) {
        const l = te(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        $(l, (c) => {
          !qe(c) && !ue(i, c) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: K.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function kf(n, e, t) {
  const r = [];
  let i = !1;
  const s = Pn(Ne(z(n.modes))), a = zr(s, (l) => l[pt] === de.NA), o = Dl(t);
  return e && $(a, (l) => {
    const c = Ml(l, o);
    if (c !== !1) {
      const d = {
        message: Cf(l, c),
        type: c.issue,
        tokenType: l
      };
      r.push(d);
    } else
      N(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : Ns(o, l.PATTERN) && (i = !0);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: K.NO_LINE_BREAKS_FLAGS
  }), r;
}
function Sf(n) {
  const e = {}, t = wt(n);
  return $(t, (r) => {
    const i = n[r];
    if (te(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function Pl(n) {
  const e = n.PATTERN;
  if (Ye(e))
    return !1;
  if (yt(e))
    return !0;
  if (N(e, "exec"))
    return !0;
  if (fe(e))
    return !1;
  throw Error("non exhaustive match");
}
function xf(n) {
  return fe(n) && n.length === 1 ? n.charCodeAt(0) : !1;
}
const If = {
  // implements /\n|\r\n?/g.test
  test: function(n) {
    const e = n.length;
    for (let t = this.lastIndex; t < e; t++) {
      const r = n.charCodeAt(t);
      if (r === 10)
        return this.lastIndex = t + 1, !0;
      if (r === 13)
        return n.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function Ml(n, e) {
  if (N(n, "LINE_BREAKS"))
    return !1;
  if (Ye(n.PATTERN)) {
    try {
      Ns(e, n.PATTERN);
    } catch (t) {
      return {
        issue: K.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return !1;
  } else {
    if (fe(n.PATTERN))
      return !1;
    if (Pl(n))
      return { issue: K.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Cf(n, e) {
  if (e.issue === K.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${n.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === K.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${n.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function Dl(n) {
  return S(n, (t) => fe(t) ? t.charCodeAt(0) : t);
}
function gi(n, e, t) {
  n[e] === void 0 ? n[e] = [t] : n[e].push(t);
}
const kn = 256;
let fr = [];
function et(n) {
  return n < kn ? n : fr[n];
}
function $f() {
  if (D(fr)) {
    fr = new Array(65536);
    for (let n = 0; n < 65536; n++)
      fr[n] = n > 255 ? 255 + ~~(n / 255) : n;
  }
}
function Gn(n, e) {
  const t = n.tokenTypeIdx;
  return t === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[t] === !0;
}
function Nr(n, e) {
  return n.tokenTypeIdx === e.tokenTypeIdx;
}
let oa = 1;
const Fl = {};
function Un(n) {
  const e = Nf(n);
  wf(e), Lf(e), _f(e), $(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
function Nf(n) {
  let e = re(n), t = n, r = !0;
  for (; r; ) {
    t = Pn(Ne(S(t, (s) => s.CATEGORIES)));
    const i = Hr(t, e);
    e = e.concat(i), D(i) ? r = !1 : t = i;
  }
  return e;
}
function wf(n) {
  $(n, (e) => {
    Ul(e) || (Fl[oa] = e, e.tokenTypeIdx = oa++), la(e) && !te(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), la(e) || (e.CATEGORIES = []), Of(e) || (e.categoryMatches = []), bf(e) || (e.categoryMatchesMap = {});
  });
}
function _f(n) {
  $(n, (e) => {
    e.categoryMatches = [], $(e.categoryMatchesMap, (t, r) => {
      e.categoryMatches.push(Fl[r].tokenTypeIdx);
    });
  });
}
function Lf(n) {
  $(n, (e) => {
    Gl([], e);
  });
}
function Gl(n, e) {
  $(n, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = !0;
  }), $(e.CATEGORIES, (t) => {
    const r = n.concat(e);
    ue(r, t) || Gl(r, t);
  });
}
function Ul(n) {
  return N(n, "tokenTypeIdx");
}
function la(n) {
  return N(n, "CATEGORIES");
}
function Of(n) {
  return N(n, "categoryMatches");
}
function bf(n) {
  return N(n, "categoryMatchesMap");
}
function Pf(n) {
  return N(n, "tokenTypeIdx");
}
const Vi = {
  buildUnableToPopLexerModeMessage(n) {
    return `Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(n, e, t, r, i) {
    return `unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var K;
(function(n) {
  n[n.MISSING_PATTERN = 0] = "MISSING_PATTERN", n[n.INVALID_PATTERN = 1] = "INVALID_PATTERN", n[n.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", n[n.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", n[n.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", n[n.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", n[n.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", n[n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", n[n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", n[n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", n[n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", n[n.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", n[n.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", n[n.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", n[n.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", n[n.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", n[n.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", n[n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(K || (K = {}));
const Sn = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: Vi,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(Sn);
class de {
  constructor(e, t = Sn) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = wl(s), c = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && c(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof t == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = ke({}, Sn, t);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Sn.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = If;
        else if (this.config.lineTerminatorCharacters === Sn.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), te(e) ? i = {
          modes: { defaultMode: re(e) },
          defaultMode: En
        } : (s = !1, i = re(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Ef(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(kf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, $(i.modes, (o, l) => {
        i.modes[l] = zr(o, (c) => qe(c));
      });
      const a = wt(i.modes);
      if ($(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(af(o, a));
          }), D(this.lexerDefinitionErrors)) {
            Un(o);
            let c;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              c = sf(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = c.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = c.charCodeToPatternIdxToConfig, this.emptyGroups = ke({}, this.emptyGroups, c.emptyGroups), this.hasCustom = c.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = c.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !D(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = S(this.lexerDefinitionErrors, (c) => c.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      $(this.lexerDefinitionWarning, (o) => {
        Nl(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (bl ? (this.chopInput = Ys, this.match = this.matchWithTest) : (this.updateLastIndex = Y, this.match = this.matchWithExec), s && (this.handleModes = Y), this.trackStartLines === !1 && (this.computeNewColumn = Ys), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = Y), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = oe(this.canModeBeOptimized, (l, c, u) => (c === !1 && l.push(u), l), []);
        if (t.ensureOptimizations && !D(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        ef();
      }), this.TRACE_INIT("toFastProperties", () => {
        _l(this);
      });
    });
  }
  tokenize(e, t = this.defaultMode) {
    if (!D(this.lexerDefinitionErrors)) {
      const i = S(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, t) {
    let r, i, s, a, o, l, c, u, d, h, f, m, g, v, T;
    const A = e, R = A.length;
    let C = 0, F = 0;
    const ie = this.hasCustom ? 0 : Math.floor(e.length / 10), _e = new Array(ie), ye = [];
    let Fe = this.trackStartLines ? 1 : void 0, Ce = this.trackStartLines ? 1 : void 0;
    const k = Sf(this.emptyGroups), y = this.trackStartLines, I = this.config.lineTerminatorsPattern;
    let x = 0, O = [], L = [];
    const _ = [], Te = [];
    Object.freeze(Te);
    let q;
    function W() {
      return O;
    }
    function at(se) {
      const $e = et(se), St = L[$e];
      return St === void 0 ? Te : St;
    }
    const nu = (se) => {
      if (_.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      se.tokenType.PUSH_MODE === void 0) {
        const $e = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(se);
        ye.push({
          offset: se.startOffset,
          line: se.startLine,
          column: se.startColumn,
          length: se.image.length,
          message: $e
        });
      } else {
        _.pop();
        const $e = Lt(_);
        O = this.patternIdxToConfig[$e], L = this.charCodeToPatternIdxToConfig[$e], x = O.length;
        const St = this.canModeBeOptimized[$e] && this.config.safeMode === !1;
        L && St ? q = at : q = W;
      }
    };
    function js(se) {
      _.push(se), L = this.charCodeToPatternIdxToConfig[se], O = this.patternIdxToConfig[se], x = O.length, x = O.length;
      const $e = this.canModeBeOptimized[se] && this.config.safeMode === !1;
      L && $e ? q = at : q = W;
    }
    js.call(this, t);
    let Le;
    const Ks = this.config.recoveryEnabled;
    for (; C < R; ) {
      l = null;
      const se = A.charCodeAt(C), $e = q(se), St = $e.length;
      for (r = 0; r < St; r++) {
        Le = $e[r];
        const Re = Le.pattern;
        c = null;
        const Ve = Le.short;
        if (Ve !== !1 ? se === Ve && (l = Re) : Le.isCustom === !0 ? (T = Re.exec(A, C, _e, k), T !== null ? (l = T[0], T.payload !== void 0 && (c = T.payload)) : l = null) : (this.updateLastIndex(Re, C), l = this.match(Re, e, C)), l !== null) {
          if (o = Le.longerAlt, o !== void 0) {
            const Je = o.length;
            for (s = 0; s < Je; s++) {
              const We = O[o[s]], ot = We.pattern;
              if (u = null, We.isCustom === !0 ? (T = ot.exec(A, C, _e, k), T !== null ? (a = T[0], T.payload !== void 0 && (u = T.payload)) : a = null) : (this.updateLastIndex(ot, C), a = this.match(ot, e, C)), a && a.length > l.length) {
                l = a, c = u, Le = We;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, h = Le.group, h !== void 0 && (f = Le.tokenTypeIdx, m = this.createTokenInstance(l, C, f, Le.tokenType, Fe, Ce, d), this.handlePayload(m, c), h === !1 ? F = this.addToken(_e, F, m) : k[h].push(m)), e = this.chopInput(e, d), C = C + d, Ce = this.computeNewColumn(Ce, d), y === !0 && Le.canLineTerminator === !0) {
          let Re = 0, Ve, Je;
          I.lastIndex = 0;
          do
            Ve = I.test(l), Ve === !0 && (Je = I.lastIndex - 1, Re++);
          while (Ve === !0);
          Re !== 0 && (Fe = Fe + Re, Ce = d - Je, this.updateTokenEndLineColumnLocation(m, h, Je, Re, Fe, Ce, d));
        }
        this.handleModes(Le, nu, js, m);
      } else {
        const Re = C, Ve = Fe, Je = Ce;
        let We = Ks === !1;
        for (; We === !1 && C < R; )
          for (e = this.chopInput(e, 1), C++, i = 0; i < x; i++) {
            const ot = O[i], oi = ot.pattern, Hs = ot.short;
            if (Hs !== !1 ? A.charCodeAt(C) === Hs && (We = !0) : ot.isCustom === !0 ? We = oi.exec(A, C, _e, k) !== null : (this.updateLastIndex(oi, C), We = oi.exec(e) !== null), We === !0)
              break;
          }
        if (g = C - Re, Ce = this.computeNewColumn(Ce, g), v = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(A, Re, g, Ve, Je), ye.push({
          offset: Re,
          line: Ve,
          column: Je,
          length: g,
          message: v
        }), Ks === !1)
          break;
      }
    }
    return this.hasCustom || (_e.length = F), {
      tokens: _e,
      groups: k,
      errors: ye
    };
  }
  handleModes(e, t, r, i) {
    if (e.pop === !0) {
      const s = e.push;
      t(i), s !== void 0 && r.call(this, s);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, t, r, i, s, a, o) {
    let l, c;
    t !== void 0 && (l = r === o - 1, c = l ? -1 : 0, i === 1 && l === !0 || (e.endLine = s + c, e.endColumn = a - 1 + -c));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, r, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, r, i, s, a) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: a,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, t, r, i, s, a, o) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, r) {
    return e.push(r), t;
  }
  addTokenUsingMemberAccess(e, t, r) {
    return e[t] = r, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, r) {
    return e.test(t) === !0 ? t.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    const r = e.exec(t);
    return r !== null ? r[0] : null;
  }
}
de.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
de.NA = /NOT_APPLICABLE/;
function Nt(n) {
  return Bl(n) ? n.LABEL : n.name;
}
function Bl(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
const Mf = "parent", ca = "categories", ua = "label", da = "group", fa = "push_mode", ha = "pop_mode", pa = "longer_alt", ma = "line_breaks", ga = "start_chars_hint";
function Vl(n) {
  return Df(n);
}
function Df(n) {
  const e = n.pattern, t = {};
  if (t.name = n.name, qe(e) || (t.PATTERN = e), N(n, Mf))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return N(n, ca) && (t.CATEGORIES = n[ca]), Un([t]), N(n, ua) && (t.LABEL = n[ua]), N(n, da) && (t.GROUP = n[da]), N(n, ha) && (t.POP_MODE = n[ha]), N(n, fa) && (t.PUSH_MODE = n[fa]), N(n, pa) && (t.LONGER_ALT = n[pa]), N(n, ma) && (t.LINE_BREAKS = n[ma]), N(n, ga) && (t.START_CHARS_HINT = n[ga]), t;
}
const tt = Vl({ name: "EOF", pattern: de.NA });
Un([tt]);
function ws(n, e, t, r, i, s, a, o) {
  return {
    image: e,
    startOffset: t,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: n.tokenTypeIdx,
    tokenType: n
  };
}
function Wl(n, e) {
  return Gn(n, e);
}
const Ct = {
  buildMismatchTokenMessage({ expected: n, actual: e, previous: t, ruleName: r }) {
    return `Expecting ${Bl(n) ? `--> ${Nt(n)} <--` : `token of type --> ${n.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: n, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + n.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: n, actual: e, previous: t, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Pe(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = oe(n, (h, f) => h.concat(f), []), c = S(l, (h) => `[${S(h, (f) => Nt(f)).join(", ")}]`), d = `one of these possible Token sequences:
${S(c, (h, f) => `  ${f + 1}. ${h}`).join(`
`)}`;
      return s + d + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: n, actual: e, customUserDescription: t, ruleName: r }) {
    const i = "Expecting: ", a = `
but found: '` + Pe(e).image + "'";
    if (t)
      return i + t + a;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${S(n, (c) => `[${S(c, (u) => Nt(u)).join(",")}]`).join(" ,")}>`;
      return i + l + a;
    }
  }
};
Object.freeze(Ct);
const Ff = {
  buildRuleNotFoundError(n, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + n.name + "<-";
  }
}, ut = {
  buildDuplicateFoundError(n, e) {
    function t(u) {
      return u instanceof G ? u.terminalType.name : u instanceof le ? u.nonTerminalName : "";
    }
    const r = n.name, i = Pe(e), s = i.idx, a = Ge(i), o = t(i), l = s > 0;
    let c = `->${a}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return c = c.replace(/[ \t]+/g, " "), c = c.replace(/\s\s+/g, `
`), c;
  },
  buildNamespaceConflictError(n) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(n) {
    const e = S(n.prefixPath, (i) => Nt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    return `Ambiguous alternatives: <${n.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(n) {
    const e = S(n.prefixPath, (i) => Nt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(n) {
    let e = Ge(n.repetition);
    return n.repetition.idx !== 0 && (e += n.repetition.idx), `The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(n) {
    return "deprecated";
  },
  buildEmptyAlternationError(n) {
    return `Ambiguous empty alternative: <${n.emptyChoiceIdx + 1}> in <OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(n) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(n) {
    const e = n.topLevelRule.name, t = S(n.leftRecursionPath, (s) => s.name), r = `${e} --> ${t.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(n) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(n) {
    let e;
    return n.topLevelRule instanceof Gt ? e = n.topLevelRule.name : e = n.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`;
  }
};
function Gf(n, e) {
  const t = new Uf(n, e);
  return t.resolveRefs(), t.errors;
}
class Uf extends Ut {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    $(z(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const t = this.nameToTopRule[e.nonTerminalName];
    if (t)
      e.referencedRule = t;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class Bf extends Qr {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = re(this.path.ruleStack).reverse(), this.occurrenceStack = re(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, t = []) {
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = t.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    D(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class Vf extends Bf {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = t.concat(r), s = new he({ definition: i });
      this.possibleTokTypes = Fn(s), this.found = !0;
    }
  }
}
class ei extends Qr {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class Wf extends ei {
  walkMany(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, t, r);
  }
}
class ya extends ei {
  walkManySep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, t, r);
  }
}
class jf extends ei {
  walkAtLeastOne(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, t, r);
  }
}
class Ta extends ei {
  walkAtLeastOneSep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, t, r);
  }
}
function Wi(n, e, t = []) {
  t = re(t);
  let r = [], i = 0;
  function s(o) {
    return o.concat(Q(n, i + 1));
  }
  function a(o) {
    const l = Wi(s(o), e, t);
    return r.concat(l);
  }
  for (; t.length < e && i < n.length; ) {
    const o = n[i];
    if (o instanceof he)
      return a(o.definition);
    if (o instanceof le)
      return a(o.definition);
    if (o instanceof ne)
      r = a(o.definition);
    else if (o instanceof xe) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof Ie) {
      const l = [
        new he({ definition: o.definition }),
        new j({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof me) {
      const l = o.definition.concat([
        new j({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(l);
    } else if (o instanceof j) {
      const l = o.definition.concat([
        new j({
          definition: o.definition
        })
      ]);
      r = a(l);
    } else {
      if (o instanceof ge)
        return $(o.definition, (l) => {
          D(l.definition) === !1 && (r = a(l.definition));
        }), r;
      if (o instanceof G)
        t.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: t,
    suffixDef: Q(n, i)
  }), r;
}
function jl(n, e, t, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a = "EXIT_ALTERNATIVE";
  let o = !1;
  const l = e.length, c = l - r - 1, u = [], d = [];
  for (d.push({
    idx: -1,
    def: n,
    ruleStack: [],
    occurrenceStack: []
  }); !D(d); ) {
    const h = d.pop();
    if (h === a) {
      o && Lt(d).idx <= c && d.pop();
      continue;
    }
    const f = h.def, m = h.idx, g = h.ruleStack, v = h.occurrenceStack;
    if (D(f))
      continue;
    const T = f[0];
    if (T === i) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: _n(g),
        occurrenceStack: _n(v)
      };
      d.push(A);
    } else if (T instanceof G)
      if (m < l - 1) {
        const A = m + 1, R = e[A];
        if (t(R, T.terminalType)) {
          const C = {
            idx: A,
            def: Q(f),
            ruleStack: g,
            occurrenceStack: v
          };
          d.push(C);
        }
      } else if (m === l - 1)
        u.push({
          nextTokenType: T.terminalType,
          nextTokenOccurrence: T.idx,
          ruleStack: g,
          occurrenceStack: v
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (T instanceof le) {
      const A = re(g);
      A.push(T.nonTerminalName);
      const R = re(v);
      R.push(T.idx);
      const C = {
        idx: m,
        def: T.definition.concat(s, Q(f)),
        ruleStack: A,
        occurrenceStack: R
      };
      d.push(C);
    } else if (T instanceof ne) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = {
        idx: m,
        def: T.definition.concat(Q(f)),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(R);
    } else if (T instanceof xe) {
      const A = new j({
        definition: T.definition,
        idx: T.idx
      }), R = T.definition.concat([A], Q(f)), C = {
        idx: m,
        def: R,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(C);
    } else if (T instanceof Ie) {
      const A = new G({
        terminalType: T.separator
      }), R = new j({
        definition: [A].concat(T.definition),
        idx: T.idx
      }), C = T.definition.concat([R], Q(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (T instanceof me) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = new G({
        terminalType: T.separator
      }), C = new j({
        definition: [R].concat(T.definition),
        idx: T.idx
      }), F = T.definition.concat([C], Q(f)), ie = {
        idx: m,
        def: F,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(ie);
    } else if (T instanceof j) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a);
      const R = new j({
        definition: T.definition,
        idx: T.idx
      }), C = T.definition.concat([R], Q(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (T instanceof ge)
      for (let A = T.definition.length - 1; A >= 0; A--) {
        const R = T.definition[A], C = {
          idx: m,
          def: R.definition.concat(Q(f)),
          ruleStack: g,
          occurrenceStack: v
        };
        d.push(C), d.push(a);
      }
    else if (T instanceof he)
      d.push({
        idx: m,
        def: T.definition.concat(Q(f)),
        ruleStack: g,
        occurrenceStack: v
      });
    else if (T instanceof Gt)
      d.push(Kf(T, m, g, v));
    else
      throw Error("non exhaustive match");
  }
  return u;
}
function Kf(n, e, t, r) {
  const i = re(t);
  i.push(n.name);
  const s = re(r);
  return s.push(1), {
    idx: e,
    def: n.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var B;
(function(n) {
  n[n.OPTION = 0] = "OPTION", n[n.REPETITION = 1] = "REPETITION", n[n.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", n[n.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", n[n.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", n[n.ALTERNATION = 5] = "ALTERNATION";
})(B || (B = {}));
function _s(n) {
  if (n instanceof ne || n === "Option")
    return B.OPTION;
  if (n instanceof j || n === "Repetition")
    return B.REPETITION;
  if (n instanceof xe || n === "RepetitionMandatory")
    return B.REPETITION_MANDATORY;
  if (n instanceof Ie || n === "RepetitionMandatoryWithSeparator")
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (n instanceof me || n === "RepetitionWithSeparator")
    return B.REPETITION_WITH_SEPARATOR;
  if (n instanceof ge || n === "Alternation")
    return B.ALTERNATION;
  throw Error("non exhaustive match");
}
function Ra(n) {
  const { occurrence: e, rule: t, prodType: r, maxLookahead: i } = n, s = _s(r);
  return s === B.ALTERNATION ? ti(e, t, i) : ni(e, t, s, i);
}
function Hf(n, e, t, r, i, s) {
  const a = ti(n, e, t), o = zl(a) ? Nr : Gn;
  return s(a, r, o, i);
}
function zf(n, e, t, r, i, s) {
  const a = ni(n, e, i, t), o = zl(a) ? Nr : Gn;
  return s(a[0], o, r);
}
function qf(n, e, t, r) {
  const i = n.length, s = be(n, (a) => be(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = S(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const c = n[l], u = c.length, d = o[l];
        if (!(d !== void 0 && d.call(this) === !1))
          e: for (let h = 0; h < u; h++) {
            const f = c[h], m = f.length;
            for (let g = 0; g < m; g++) {
              const v = this.LA(g + 1);
              if (t(v, f[g]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a = S(n, (l) => Ne(l)), o = oe(a, (l, c, u) => ($(c, (d) => {
      N(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = u), $(d.categoryMatches, (h) => {
        N(l, h) || (l[h] = u);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < i; a++) {
        const o = n[a], l = o.length;
        e: for (let c = 0; c < l; c++) {
          const u = o[c], d = u.length;
          for (let h = 0; h < d; h++) {
            const f = this.LA(h + 1);
            if (t(f, u[h]) === !1)
              continue e;
          }
          return a;
        }
      }
    };
}
function Yf(n, e, t) {
  const r = be(n, (s) => s.length === 1), i = n.length;
  if (r && !t) {
    const s = Ne(n);
    if (s.length === 1 && D(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = oe(s, (o, l, c) => (o[l.tokenTypeIdx] = !0, $(l.categoryMatches, (u) => {
        o[u] = !0;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a = n[s], o = a.length;
        for (let l = 0; l < o; l++) {
          const c = this.LA(l + 1);
          if (e(c, a[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class Xf extends Qr {
  constructor(e, t, r) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = r.concat(i), !0) : !1;
  }
  walkOption(e, t, r) {
    this.checkIsTarget(e, B.OPTION, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOne(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOneSep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
  walkMany(e, t, r) {
    this.checkIsTarget(e, B.REPETITION, t, r) || super.walkOption(e, t, r);
  }
  walkManySep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
}
class Kl extends Ut {
  constructor(e, t, r) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, B.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, B.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, B.ALTERNATION);
  }
}
function va(n) {
  const e = new Array(n);
  for (let t = 0; t < n; t++)
    e[t] = [];
  return e;
}
function yi(n) {
  let e = [""];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      i.push(a + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a + l);
      }
    }
    e = i;
  }
  return e;
}
function Jf(n, e, t) {
  for (let r = 0; r < n.length; r++) {
    if (r === t)
      continue;
    const i = n[r];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (i[a] === !0)
        return !1;
    }
  }
  return !0;
}
function Hl(n, e) {
  const t = S(n, (a) => Wi([a], 1)), r = va(t.length), i = S(t, (a) => {
    const o = {};
    return $(a, (l) => {
      const c = yi(l.partialPath);
      $(c, (u) => {
        o[u] = !0;
      });
    }), o;
  });
  let s = t;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = va(o.length);
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      for (let u = 0; u < c.length; u++) {
        const d = c[u].partialPath, h = c[u].suffixDef, f = yi(d);
        if (Jf(i, f, l) || D(h) || d.length === e) {
          const g = r[l];
          if (ji(g, d) === !1) {
            g.push(d);
            for (let v = 0; v < f.length; v++) {
              const T = f[v];
              i[l][T] = !0;
            }
          }
        } else {
          const g = Wi(h, a + 1, d);
          s[l] = s[l].concat(g), $(g, (v) => {
            const T = yi(v.partialPath);
            $(T, (A) => {
              i[l][A] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function ti(n, e, t, r) {
  const i = new Kl(n, B.ALTERNATION, r);
  return e.accept(i), Hl(i.result, t);
}
function ni(n, e, t, r) {
  const i = new Kl(n, t);
  e.accept(i);
  const s = i.result, o = new Xf(e, n, t).startWalking(), l = new he({ definition: s }), c = new he({ definition: o });
  return Hl([l, c], r);
}
function ji(n, e) {
  e: for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (r.length === e.length) {
      for (let i = 0; i < r.length; i++) {
        const s = e[i], a = r[i];
        if ((s === a || a.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function Qf(n, e) {
  return n.length < e.length && be(n, (t, r) => {
    const i = e[r];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
function zl(n) {
  return be(n, (e) => be(e, (t) => be(t, (r) => D(r.categoryMatches))));
}
function Zf(n) {
  const e = n.lookaheadStrategy.validate({
    rules: n.rules,
    tokenTypes: n.tokenTypes,
    grammarName: n.grammarName
  });
  return S(e, (t) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
function eh(n, e, t, r) {
  const i = Ee(n, (l) => th(l, t)), s = hh(n, e, t), a = Ee(n, (l) => ch(l, t)), o = Ee(n, (l) => ih(l, n, r, t));
  return i.concat(s, a, o);
}
function th(n, e) {
  const t = new rh();
  n.accept(t);
  const r = t.allProductions, i = Lu(r, nh), s = Me(i, (o) => o.length > 1);
  return S(z(s), (o) => {
    const l = Pe(o), c = e.buildDuplicateFoundError(n, o), u = Ge(l), d = {
      message: c,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: n.name,
      dslName: u,
      occurrence: l.idx
    }, h = ql(l);
    return h && (d.parameter = h), d;
  });
}
function nh(n) {
  return `${Ge(n)}_#_${n.idx}_#_${ql(n)}`;
}
function ql(n) {
  return n instanceof G ? n.terminalType.name : n instanceof le ? n.nonTerminalName : "";
}
class rh extends Ut {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function ih(n, e, t, r) {
  const i = [];
  if (oe(e, (a, o) => o.name === n.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: n,
      grammarName: t
    });
    i.push({
      message: a,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: n.name
    });
  }
  return i;
}
function sh(n, e, t) {
  const r = [];
  let i;
  return ue(e, n) || (i = `Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: n
  })), r;
}
function Yl(n, e, t, r = []) {
  const i = [], s = hr(e.definition);
  if (D(s))
    return [];
  {
    const a = n.name;
    ue(s, n) && i.push({
      message: t.buildLeftRecursionError({
        topLevelRule: n,
        leftRecursionPath: r
      }),
      type: ce.LEFT_RECURSION,
      ruleName: a
    });
    const l = Hr(s, r.concat([n])), c = Ee(l, (u) => {
      const d = re(r);
      return d.push(u), Yl(n, u, t, d);
    });
    return i.concat(c);
  }
}
function hr(n) {
  let e = [];
  if (D(n))
    return e;
  const t = Pe(n);
  if (t instanceof le)
    e.push(t.referencedRule);
  else if (t instanceof he || t instanceof ne || t instanceof xe || t instanceof Ie || t instanceof me || t instanceof j)
    e = e.concat(hr(t.definition));
  else if (t instanceof ge)
    e = Ne(S(t.definition, (s) => hr(s.definition)));
  else if (!(t instanceof G)) throw Error("non exhaustive match");
  const r = Cr(t), i = n.length > 1;
  if (r && i) {
    const s = Q(n);
    return e.concat(hr(s));
  } else
    return e;
}
class Ls extends Ut {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function ah(n, e) {
  const t = new Ls();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => {
    const a = _n(s.definition);
    return Ee(a, (o, l) => {
      const c = jl([o], [], Gn, 1);
      return D(c) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: n,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: n.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function oh(n, e, t) {
  const r = new Ls();
  n.accept(r);
  let i = r.alternations;
  return i = zr(i, (a) => a.ignoreAmbiguities === !0), Ee(i, (a) => {
    const o = a.idx, l = a.maxLookahead || e, c = ti(o, n, l, a), u = dh(c, a, n, t), d = fh(c, a, n, t);
    return u.concat(d);
  });
}
class lh extends Ut {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function ch(n, e) {
  const t = new Ls();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: n,
        alternation: s
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: n.name,
      occurrence: s.idx
    }
  ] : []);
}
function uh(n, e, t) {
  const r = [];
  return $(n, (i) => {
    const s = new lh();
    i.accept(s);
    const a = s.allProductions;
    $(a, (o) => {
      const l = _s(o), c = o.maxLookahead || e, u = o.idx, h = ni(u, i, l, c)[0];
      if (D(Ne(h))) {
        const f = t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: f,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function dh(n, e, t, r) {
  const i = [], s = oe(n, (o, l, c) => (e.definition[c].ignoreAmbiguities === !0 || $(l, (u) => {
    const d = [c];
    $(n, (h, f) => {
      c !== f && ji(h, u) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[f].ignoreAmbiguities !== !0 && d.push(f);
    }), d.length > 1 && !ji(i, u) && (i.push(u), o.push({
      alts: d,
      path: u
    }));
  }), o), []);
  return S(s, (o) => {
    const l = S(o.alts, (u) => u + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function fh(n, e, t, r) {
  const i = oe(n, (a, o, l) => {
    const c = S(o, (u) => ({ idx: l, path: u }));
    return a.concat(c);
  }, []);
  return Pn(Ee(i, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const l = a.idx, c = a.path, u = Se(i, (h) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[h.idx].ignoreAmbiguities !== !0 && h.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      Qf(h.path, c)
    ));
    return S(u, (h) => {
      const f = [h.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: f,
          prefixPath: h.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: m,
        alternatives: f
      };
    });
  }));
}
function hh(n, e, t) {
  const r = [], i = S(e, (s) => s.name);
  return $(n, (s) => {
    const a = s.name;
    if (ue(i, a)) {
      const o = t.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function ph(n) {
  const e = Ts(n, {
    errMsgProvider: Ff
  }), t = {};
  return $(n.rules, (r) => {
    t[r.name] = r;
  }), Gf(t, e.errMsgProvider);
}
function mh(n) {
  return n = Ts(n, {
    errMsgProvider: ut
  }), eh(n.rules, n.tokenTypes, n.errMsgProvider, n.grammarName);
}
const Xl = "MismatchedTokenException", Jl = "NoViableAltException", Ql = "EarlyExitException", Zl = "NotAllInputParsedException", ec = [
  Xl,
  Jl,
  Ql,
  Zl
];
Object.freeze(ec);
function wr(n) {
  return ue(ec, n.name);
}
class ri extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class tc extends ri {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = Xl;
  }
}
class gh extends ri {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = Jl;
  }
}
class yh extends ri {
  constructor(e, t) {
    super(e, t), this.name = Zl;
  }
}
class Th extends ri {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = Ql;
  }
}
const Ti = {}, nc = "InRuleRecoveryException";
class Rh extends Error {
  constructor(e) {
    super(e), this.name = nc;
  }
}
class vh {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = N(e, "recoveryEnabled") ? e.recoveryEnabled : Xe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Ah);
  }
  getTokenToInsert(e) {
    const t = ws(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = !0, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, t, r, i) {
    const s = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let l = !1;
    const c = this.LA(1);
    let u = this.LA(1);
    const d = () => {
      const h = this.LA(0), f = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: c,
        previous: h,
        ruleName: this.getCurrRuleFullName()
      }), m = new tc(f, c, this.LA(0));
      m.resyncedTokens = _n(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(u, i)) {
        d();
        return;
      } else if (r.call(this)) {
        d(), e.apply(this, t);
        return;
      } else this.tokenMatcher(u, s) ? l = !0 : (u = this.SKIP_TOKEN(), this.addToResyncTokens(u, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, t, r) {
    return !(r === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, t) {
    const r = this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new Rh("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || D(t))
      return !1;
    const r = this.LA(1);
    return _t(t, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const t = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(t);
    return ue(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let t = this.LA(1), r = 2;
    for (; ; ) {
      const i = _t(e, (s) => Wl(t, s));
      if (i !== void 0)
        return i;
      t = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Ti;
    const e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return S(e, (r, i) => i === 0 ? Ti : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: t[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = S(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return Ne(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Ti)
      return [tt];
    const t = e.ruleName + e.idxInCallingRule + Ll + e.inRule;
    return this.resyncFollows[t];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, tt) || t.push(e), t;
  }
  reSyncTo(e) {
    const t = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, t);
    return _n(t);
  }
  attemptInRepetitionRecovery(e, t, r, i, s, a, o) {
  }
  getCurrentGrammarPath(e, t) {
    const r = this.getHumanReadableRuleStack(), i = re(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return S(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function Ah(n, e, t, r, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const h = this.getCurrRuleFullName(), f = this.getGAstProductions()[h];
    l = new s(f, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let c = l.token, u = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && c === void 0 && (c = tt, u = 1), !(c === void 0 || u === void 0) && this.shouldInRepetitionRecoveryBeTried(c, u, a) && this.tryInRepetitionRecovery(n, e, t, c);
}
const Eh = 4, it = 8, rc = 1 << it, ic = 2 << it, Ki = 3 << it, Hi = 4 << it, zi = 5 << it, pr = 6 << it;
function Ri(n, e, t) {
  return t | e | n;
}
class Os {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e?.maxLookahead) !== null && t !== void 0 ? t : Xe.maxLookahead;
  }
  validate(e) {
    const t = this.validateNoLeftRecursion(e.rules);
    if (D(t)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...r,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (t) => Yl(t, t, ut));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (t) => ah(t, ut));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return Ee(e, (r) => oh(r, t, ut));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return uh(e, t, ut);
  }
  buildLookaheadForAlternation(e) {
    return Hf(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, qf);
  }
  buildLookaheadForOptional(e) {
    return zf(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, _s(e.prodType), Yf);
  }
}
class kh {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = N(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Xe.dynamicTokensEnabled, this.maxLookahead = N(e, "maxLookahead") ? e.maxLookahead : Xe.maxLookahead, this.lookaheadStrategy = N(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Os({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    $(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = xh(t);
        $(r, (c) => {
          const u = c.idx === 0 ? "" : c.idx;
          this.TRACE_INIT(`${Ge(c)}${u}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: c.idx,
              rule: t,
              maxLookahead: c.maxLookahead || this.maxLookahead,
              hasPredicates: c.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), h = Ri(this.fullRuleNameToShort[t.name], rc, c.idx);
            this.setLaFuncCache(h, d);
          });
        }), $(i, (c) => {
          this.computeLookaheadFunc(t, c.idx, Ki, "Repetition", c.maxLookahead, Ge(c));
        }), $(s, (c) => {
          this.computeLookaheadFunc(t, c.idx, ic, "Option", c.maxLookahead, Ge(c));
        }), $(a, (c) => {
          this.computeLookaheadFunc(t, c.idx, Hi, "RepetitionMandatory", c.maxLookahead, Ge(c));
        }), $(o, (c) => {
          this.computeLookaheadFunc(t, c.idx, pr, "RepetitionMandatoryWithSeparator", c.maxLookahead, Ge(c));
        }), $(l, (c) => {
          this.computeLookaheadFunc(t, c.idx, zi, "RepetitionWithSeparator", c.maxLookahead, Ge(c));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, r, i, s, a) {
    this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = Ri(this.fullRuleNameToShort[e.name], r, t);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, t) {
    const r = this.getLastExplicitRuleShortName();
    return Ri(r, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
}
class Sh extends Ut {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const nr = new Sh();
function xh(n) {
  nr.reset(), n.accept(nr);
  const e = nr.dslMethods;
  return nr.reset(), e;
}
function Aa(n, e) {
  isNaN(n.startOffset) === !0 ? (n.startOffset = e.startOffset, n.endOffset = e.endOffset) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset);
}
function Ea(n, e) {
  isNaN(n.startOffset) === !0 ? (n.startOffset = e.startOffset, n.startColumn = e.startColumn, n.startLine = e.startLine, n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine);
}
function Ih(n, e, t) {
  n.children[t] === void 0 ? n.children[t] = [e] : n.children[t].push(e);
}
function Ch(n, e, t) {
  n.children[e] === void 0 ? n.children[e] = [t] : n.children[e].push(t);
}
const $h = "name";
function sc(n, e) {
  Object.defineProperty(n, $h, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function Nh(n, e) {
  const t = wt(n), r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i], a = n[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const c = a[l];
      c.tokenTypeIdx === void 0 && this[c.name](c.children, e);
    }
  }
}
function wh(n, e) {
  const t = function() {
  };
  sc(t, n + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (te(i) && (i = i[0]), !qe(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = Lh(this, e);
      if (!D(i)) {
        const s = S(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return t.prototype = r, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
function _h(n, e, t) {
  const r = function() {
  };
  sc(r, n + "BaseSemanticsWithDefaults");
  const i = Object.create(t.prototype);
  return $(e, (s) => {
    i[s] = Nh;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var qi;
(function(n) {
  n[n.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", n[n.MISSING_METHOD = 1] = "MISSING_METHOD";
})(qi || (qi = {}));
function Lh(n, e) {
  return Oh(n, e);
}
function Oh(n, e) {
  const t = Se(e, (i) => yt(n[i]) === !1), r = S(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
    type: qi.MISSING_METHOD,
    methodName: i
  }));
  return Pn(r);
}
class bh {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = N(e, "nodeLocationTracking") ? e.nodeLocationTracking : Xe.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = Y, this.cstFinallyStateUpdate = Y, this.cstPostTerminal = Y, this.cstPostNonTerminal = Y, this.cstPostRule = Y;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Ea, this.setNodeLocationFromNode = Ea, this.cstPostRule = Y, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Aa, this.setNodeLocationFromNode = Aa, this.cstPostRule = Y, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = Y, this.setNodeLocationFromNode = Y, this.cstPostRule = Y, this.setInitialNodeLocation = Y;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const t = this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? (r.endOffset = t.endOffset, r.endLine = t.endLine, r.endColumn = t.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? r.endOffset = t.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Ih(r, t, e), this.setNodeLocationFromToken(r.location, t);
  }
  cstPostNonTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Ch(r, t, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (qe(this.baseCstVisitorConstructor)) {
      const e = wh(this.className, wt(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (qe(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = _h(this.className, wt(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class Ph {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Lr;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? Lr : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class Mh {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, r) {
    return this.consumeInternal(t, e, r);
  }
  subrule(e, t, r) {
    return this.subruleInternal(t, e, r);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t, r = Or) {
    if (ue(this.definedRulesNames, e)) {
      const a = {
        message: ut.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, t, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t, r = Or) {
    const i = sh(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, t, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, t), !0;
      } catch (i) {
        if (wr(i))
          return !1;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return jd(z(this.gastProductionsCache));
  }
}
class Dh {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Nr, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, N(t, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (te(e)) {
      if (D(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (te(e))
      this.tokensMap = oe(e, (s, a) => (s[a.name] = a, s), {});
    else if (N(e, "modes") && be(Ne(z(e.modes)), Pf)) {
      const s = Ne(z(e.modes)), a = Rs(s);
      this.tokensMap = oe(a, (o, l) => (o[l.name] = l, o), {});
    } else if (uu(e))
      this.tokensMap = re(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = tt;
    const r = N(e, "modes") ? Ne(z(e.modes)) : z(e), i = be(r, (s) => D(s.categoryMatches));
    this.tokenMatcher = i ? Nr : Gn, Un(z(this.tokensMap));
  }
  defineRule(e, t, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = N(r, "resyncEnabled") ? r.resyncEnabled : Or.resyncEnabled, s = N(r, "recoveryValueFunc") ? r.recoveryValueFunc : Or.recoveryValueFunc, a = this.ruleShortNameIdx << Eh + it;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === !0 ? o = function(...u) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, u);
        const d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...u) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, u);
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: t });
  }
  invokeRuleCatch(e, t, r) {
    const i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (wr(e)) {
      const a = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, a.partialCstResult = l;
          }
          throw a;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(ic, t);
    return this.optionInternalLogic(e, t, r);
  }
  optionInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === !0)
      return s.call(this);
  }
  atLeastOneInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Hi, e);
    return this.atLeastOneInternalLogic(e, t, r);
  }
  atLeastOneInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const a = t.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = t;
    if (i.call(this) === !0) {
      let a = this.doSingleRepetition(s);
      for (; i.call(this) === !0 && a === !0; )
        a = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, Hi, e, jf);
  }
  atLeastOneSepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(pr, e);
    this.atLeastOneSepFirstInternalLogic(e, t, r);
  }
  atLeastOneSepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Ta
      ], o, pr, e, Ta);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Ki, e);
    return this.manyInternalLogic(e, t, r);
  }
  manyInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const o = t.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = t;
    let a = !0;
    for (; i.call(this) === !0 && a === !0; )
      a = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, t],
      i,
      Ki,
      e,
      Wf,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(zi, e);
    this.manySepFirstInternalLogic(e, t, r);
  }
  manySepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        ya
      ], o, zi, e, ya);
    }
  }
  repetitionSepSecondInternal(e, t, r, i, s) {
    for (; r(); )
      this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      r,
      i,
      s
    ], r, pr, e, s);
  }
  doSingleRepetition(e) {
    const t = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(rc, t), i = te(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, i);
    if (a !== void 0)
      return i[a].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new yh(t, e));
    }
  }
  subruleInternal(e, t, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = t, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, t, r) {
    throw wr(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new tc(i, t, s));
  }
  consumeInternalRecovery(e, t, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === nc ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, t = re(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), tt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Fh {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = N(e, "errorMessageProvider") ? e.errorMessageProvider : Xe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (wr(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: re(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return re(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, t, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = ni(e, s, t, this.maxLookahead)[0], l = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      l.push(this.LA(u));
    const c = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new Th(c, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, t) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = ti(e, i, this.maxLookahead), a = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      a.push(this.LA(c));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: t,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new gh(l, this.LA(1), o));
  }
}
class Gh {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    const r = this.gastProductionsCache[e];
    if (qe(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return jl([r], t, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const t = Pe(e.ruleStack), i = this.getGAstProductions()[t];
    return new Vf(i, e).startWalking();
  }
}
const ii = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(ii);
const ka = !0, Sa = Math.pow(2, it) - 1, ac = Vl({ name: "RECORDING_PHASE_TOKEN", pattern: de.NA });
Un([ac]);
const oc = ws(
  ac,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(oc);
const Uh = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Bh {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${t}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${t}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${t}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${t}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${t}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${t}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, t, r) {
        return this.consumeInternalRecord(t, e, r);
      }, this.subrule = function(e, t, r) {
        return this.subruleInternalRecord(t, e, r);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let t = 0; t < 10; t++) {
        const r = t > 0 ? t : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, t) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Lr;
  }
  topLevelRuleRecord(e, t) {
    try {
      const r = new Gt({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), t.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== !0)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, t) {
    return Kt.call(this, ne, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    Kt.call(this, xe, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    Kt.call(this, Ie, t, e, ka);
  }
  manyInternalRecord(e, t) {
    Kt.call(this, j, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    Kt.call(this, me, t, e, ka);
  }
  orInternalRecord(e, t) {
    return Vh.call(this, e, t);
  }
  subruleInternalRecord(e, t, r) {
    if (_r(t), !e || N(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${xa(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = Lt(this.recordingProdStack), s = e.ruleName, a = new le({
      idx: t,
      nonTerminalName: s,
      label: r?.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? Uh : ii;
  }
  consumeInternalRecord(e, t, r) {
    if (_r(t), !Ul(e)) {
      const a = new Error(`<CONSUME${xa(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const i = Lt(this.recordingProdStack), s = new G({
      idx: t,
      terminalType: e,
      label: r?.LABEL
    });
    return i.definition.push(s), oc;
  }
}
function Kt(n, e, t, r = !1) {
  _r(t);
  const i = Lt(this.recordingProdStack), s = yt(e) ? e : e.DEF, a = new n({ definition: [], idx: t });
  return r && (a.separator = e.SEP), N(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), ii;
}
function Vh(n, e) {
  _r(e);
  const t = Lt(this.recordingProdStack), r = te(n) === !1, i = r === !1 ? n : n.DEF, s = new ge({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && n.IGNORE_AMBIGUITIES === !0
  });
  N(n, "MAX_LOOKAHEAD") && (s.maxLookahead = n.MAX_LOOKAHEAD);
  const a = ll(i, (o) => yt(o.GATE));
  return s.hasPredicates = a, t.definition.push(s), $(i, (o) => {
    const l = new he({ definition: [] });
    s.definition.push(l), N(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : N(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), ii;
}
function xa(n) {
  return n === 0 ? "" : `${n}`;
}
function _r(n) {
  if (n < 0 || n > Sa) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${n}>
	Idx value must be a none negative value smaller than ${Sa + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class Wh {
  initPerformanceTracer(e) {
    if (N(e, "traceInitPerf")) {
      const t = e.traceInitPerf, r = typeof t == "number";
      this.traceInitMaxIdent = r ? t : 1 / 0, this.traceInitPerf = r ? t > 0 : t;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Xe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = wl(t), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return t();
  }
}
function jh(n, e) {
  e.forEach((t) => {
    const r = t.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(n.prototype, i, s) : n.prototype[i] = t.prototype[i];
    });
  });
}
const Lr = ws(tt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Lr);
const Xe = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: Ct,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), Or = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var ce;
(function(n) {
  n[n.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", n[n.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", n[n.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", n[n.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", n[n.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", n[n.LEFT_RECURSION = 5] = "LEFT_RECURSION", n[n.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", n[n.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", n[n.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", n[n.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", n[n.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", n[n.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", n[n.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", n[n.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
function Ia(n = void 0) {
  return function() {
    return n;
  };
}
class Bn {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        _l(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), $(this.definedRulesNames, (i) => {
            const a = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = ph({
          rules: z(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (D(r) && this.skipValidations === !1) {
          const i = mh({
            rules: z(this.gastProductionsCache),
            tokenTypes: z(this.tokensMap),
            errMsgProvider: ut,
            grammarName: t
          }), s = Zf({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: z(this.gastProductionsCache),
            tokenTypes: z(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), D(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = Jd(z(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: z(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(z(this.gastProductionsCache));
      })), !Bn.DEFER_DEFINITION_ERRORS_HANDLING && !D(this.definitionErrors))
        throw e = S(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(t), r.initLexerAdapter(), r.initLooksAhead(t), r.initRecognizerEngine(e, t), r.initRecoverable(t), r.initTreeBuilder(t), r.initContentAssist(), r.initGastRecorder(t), r.initPerformanceTracer(t), N(t, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = N(t, "skipValidations") ? t.skipValidations : Xe.skipValidations;
  }
}
Bn.DEFER_DEFINITION_ERRORS_HANDLING = !1;
jh(Bn, [
  vh,
  kh,
  bh,
  Ph,
  Dh,
  Mh,
  Fh,
  Gh,
  Bh,
  Wh
]);
class Kh extends Bn {
  constructor(e, t = Xe) {
    const r = re(t);
    r.outputCst = !1, super(e, r);
  }
}
function Ot(n, e, t) {
  return `${n.name}_${e}_${t}`;
}
const nt = 1, Hh = 2, lc = 4, cc = 5, Vn = 7, zh = 8, qh = 9, Yh = 10, Xh = 11, uc = 12;
class bs {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class Ps extends bs {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
}
class dc extends bs {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class Ms extends bs {
  constructor(e, t, r) {
    super(e), this.rule = t, this.followState = r;
  }
  isEpsilon() {
    return !0;
  }
}
function Jh(n) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  Qh(e, n);
  const t = n.length;
  for (let r = 0; r < t; r++) {
    const i = n[r], s = Rt(e, i, i);
    s !== void 0 && cp(e, i, s);
  }
  return e;
}
function Qh(n, e) {
  const t = e.length;
  for (let r = 0; r < t; r++) {
    const i = e[r], s = X(n, i, void 0, {
      type: Hh
    }), a = X(n, i, void 0, {
      type: Vn
    });
    s.stop = a, n.ruleToStartState.set(i, s), n.ruleToStopState.set(i, a);
  }
}
function fc(n, e, t) {
  return t instanceof G ? Ds(n, e, t.terminalType, t) : t instanceof le ? lp(n, e, t) : t instanceof ge ? rp(n, e, t) : t instanceof ne ? ip(n, e, t) : t instanceof j ? Zh(n, e, t) : t instanceof me ? ep(n, e, t) : t instanceof xe ? tp(n, e, t) : t instanceof Ie ? np(n, e, t) : Rt(n, e, t);
}
function Zh(n, e, t) {
  const r = X(n, e, t, {
    type: cc
  });
  st(n, r);
  const i = Bt(n, e, r, t, Rt(n, e, t));
  return pc(n, e, t, i);
}
function ep(n, e, t) {
  const r = X(n, e, t, {
    type: cc
  });
  st(n, r);
  const i = Bt(n, e, r, t, Rt(n, e, t)), s = Ds(n, e, t.separator, t);
  return pc(n, e, t, i, s);
}
function tp(n, e, t) {
  const r = X(n, e, t, {
    type: lc
  });
  st(n, r);
  const i = Bt(n, e, r, t, Rt(n, e, t));
  return hc(n, e, t, i);
}
function np(n, e, t) {
  const r = X(n, e, t, {
    type: lc
  });
  st(n, r);
  const i = Bt(n, e, r, t, Rt(n, e, t)), s = Ds(n, e, t.separator, t);
  return hc(n, e, t, i, s);
}
function rp(n, e, t) {
  const r = X(n, e, t, {
    type: nt
  });
  st(n, r);
  const i = S(t.definition, (a) => fc(n, e, a));
  return Bt(n, e, r, t, ...i);
}
function ip(n, e, t) {
  const r = X(n, e, t, {
    type: nt
  });
  st(n, r);
  const i = Bt(n, e, r, t, Rt(n, e, t));
  return sp(n, e, t, i);
}
function Rt(n, e, t) {
  const r = Se(S(t.definition, (i) => fc(n, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : op(n, r);
}
function hc(n, e, t, r, i) {
  const s = r.left, a = r.right, o = X(n, e, t, {
    type: Xh
  });
  st(n, o);
  const l = X(n, e, t, {
    type: uc
  });
  return s.loopback = o, l.loopback = o, n.decisionMap[Ot(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = o, H(a, o), i === void 0 ? (H(o, s), H(o, l)) : (H(o, l), H(o, i.left), H(i.right, s)), {
    left: s,
    right: l
  };
}
function pc(n, e, t, r, i) {
  const s = r.left, a = r.right, o = X(n, e, t, {
    type: Yh
  });
  st(n, o);
  const l = X(n, e, t, {
    type: uc
  }), c = X(n, e, t, {
    type: qh
  });
  return o.loopback = c, l.loopback = c, H(o, s), H(o, l), H(a, c), i !== void 0 ? (H(c, l), H(c, i.left), H(i.right, s)) : H(c, o), n.decisionMap[Ot(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = o, {
    left: o,
    right: l
  };
}
function sp(n, e, t, r) {
  const i = r.left, s = r.right;
  return H(i, s), n.decisionMap[Ot(e, "Option", t.idx)] = i, r;
}
function st(n, e) {
  return n.decisionStates.push(e), e.decision = n.decisionStates.length - 1, e.decision;
}
function Bt(n, e, t, r, ...i) {
  const s = X(n, e, r, {
    type: zh,
    start: t
  });
  t.end = s;
  for (const o of i)
    o !== void 0 ? (H(t, o.left), H(o.right, s)) : H(t, s);
  const a = {
    left: t,
    right: s
  };
  return n.decisionMap[Ot(e, ap(r), r.idx)] = t, a;
}
function ap(n) {
  if (n instanceof ge)
    return "Alternation";
  if (n instanceof ne)
    return "Option";
  if (n instanceof j)
    return "Repetition";
  if (n instanceof me)
    return "RepetitionWithSeparator";
  if (n instanceof xe)
    return "RepetitionMandatory";
  if (n instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function op(n, e) {
  const t = e.length;
  for (let s = 0; s < t - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof Ms, c = o, u = e[s + 1].left;
    a.left.type === nt && a.right.type === nt && o !== void 0 && (l && c.followState === a.right || o.target === a.right) ? (l ? c.followState = u : o.target = u, up(n, a.right)) : H(a.right, u);
  }
  const r = e[0], i = e[t - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function Ds(n, e, t, r) {
  const i = X(n, e, r, {
    type: nt
  }), s = X(n, e, r, {
    type: nt
  });
  return Fs(i, new Ps(s, t)), {
    left: i,
    right: s
  };
}
function lp(n, e, t) {
  const r = t.referencedRule, i = n.ruleToStartState.get(r), s = X(n, e, t, {
    type: nt
  }), a = X(n, e, t, {
    type: nt
  }), o = new Ms(i, r, a);
  return Fs(s, o), {
    left: s,
    right: a
  };
}
function cp(n, e, t) {
  const r = n.ruleToStartState.get(e);
  H(r, t.left);
  const i = n.ruleToStopState.get(e);
  return H(t.right, i), {
    left: r,
    right: i
  };
}
function H(n, e) {
  const t = new dc(e);
  Fs(n, t);
}
function X(n, e, t, r) {
  const i = Object.assign({
    atn: n,
    production: t,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: n.states.length
  }, r);
  return n.states.push(i), i;
}
function Fs(n, e) {
  n.transitions.length === 0 && (n.epsilonOnlyTransitions = e.isEpsilon()), n.transitions.push(e);
}
function up(n, e) {
  n.states.splice(n.states.indexOf(e), 1);
}
const br = {};
class Yi {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const t = mc(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return S(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const t in this.map)
      e += t + ":";
    return e;
  }
}
function mc(n, e = !0) {
  return `${e ? `a${n.alt}` : ""}s${n.state.stateNumber}:${n.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
function dp(n, e) {
  const t = {};
  return (r) => {
    const i = r.toString();
    let s = t[i];
    return s !== void 0 || (s = {
      atnStartState: n,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
class gc {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "";
    const t = this.predicates.length;
    for (let r = 0; r < t; r++)
      e += this.predicates[r] === !0 ? "1" : "0";
    return e;
  }
}
const Ca = new gc();
class fp extends Os {
  constructor(e) {
    var t;
    super(), this.logging = (t = e?.logging) !== null && t !== void 0 ? t : (r) => console.log(r);
  }
  initialize(e) {
    this.atn = Jh(e.rules), this.dfas = hp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: t, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Ot(r, "Alternation", t), u = this.atn.decisionMap[l].decision, d = S(Ra({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: r
    }), (h) => S(h, (f) => f[0]));
    if ($a(d, !1) && !s) {
      const h = oe(d, (f, m, g) => ($(m, (v) => {
        v && (f[v.tokenTypeIdx] = g, $(v.categoryMatches, (T) => {
          f[T] = g;
        }));
      }), f), {});
      return i ? function(f) {
        var m;
        const g = this.LA(1), v = h[g.tokenTypeIdx];
        if (f !== void 0 && v !== void 0) {
          const T = (m = f[v]) === null || m === void 0 ? void 0 : m.GATE;
          if (T !== void 0 && T.call(this) === !1)
            return;
        }
        return v;
      } : function() {
        const f = this.LA(1);
        return h[f.tokenTypeIdx];
      };
    } else return i ? function(h) {
      const f = new gc(), m = h === void 0 ? 0 : h.length;
      for (let v = 0; v < m; v++) {
        const T = h?.[v].GATE;
        f.set(v, T === void 0 || T.call(this));
      }
      const g = vi.call(this, a, u, f, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const h = vi.call(this, a, u, Ca, o);
      return typeof h == "number" ? h : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: t, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Ot(r, i, t), u = this.atn.decisionMap[l].decision, d = S(Ra({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: r
    }), (h) => S(h, (f) => f[0]));
    if ($a(d) && d[0][0] && !s) {
      const h = d[0], f = Ne(h);
      if (f.length === 1 && D(f[0].categoryMatches)) {
        const g = f[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = oe(f, (g, v) => (v !== void 0 && (g[v.tokenTypeIdx] = !0, $(v.categoryMatches, (T) => {
          g[T] = !0;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const h = vi.call(this, a, u, Ca, o);
      return typeof h == "object" ? !1 : h === 0;
    };
  }
}
function $a(n, e = !0) {
  const t = /* @__PURE__ */ new Set();
  for (const r of n) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return !1;
      }
      const a = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a)
        if (t.has(o)) {
          if (!i.has(o))
            return !1;
        } else
          t.add(o), i.add(o);
    }
  }
  return !0;
}
function hp(n) {
  const e = n.decisionStates.length, t = Array(e);
  for (let r = 0; r < e; r++)
    t[r] = dp(n.decisionStates[r], r);
  return t;
}
function vi(n, e, t, r) {
  const i = n[e](t);
  let s = i.start;
  if (s === void 0) {
    const o = Sp(i.atnStartState);
    s = Tc(i, yc(o)), i.start = s;
  }
  return pp.apply(this, [i, s, t, r]);
}
function pp(n, e, t, r) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = vp(i, o);
    if (l === void 0 && (l = mp.apply(this, [n, i, o, s, t, r])), l === br)
      return Rp(a, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function mp(n, e, t, r, i, s) {
  const a = Ap(e.configs, t, i);
  if (a.size === 0)
    return Na(n, e, t, br), br;
  let o = yc(a);
  const l = kp(a, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if ($p(a)) {
    const c = vu(a.alts);
    o.isAcceptState = !0, o.prediction = c, o.configs.uniqueAlt = c, gp.apply(this, [n, r, a.alts, s]);
  }
  return o = Na(n, e, t, o), o;
}
function gp(n, e, t, r) {
  const i = [];
  for (let c = 1; c <= e; c++)
    i.push(this.LA(c).tokenType);
  const s = n.atnStartState, a = s.rule, o = s.production, l = yp({
    topLevelRule: a,
    ambiguityIndices: t,
    production: o,
    prefixPath: i
  });
  r(l);
}
function yp(n) {
  const e = S(n.prefixPath, (i) => Nt(i)).join(", "), t = n.production.idx === 0 ? "" : n.production.idx;
  let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(", ")}> in <${Tp(n.production)}${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function Tp(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof xe)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof j)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function Rp(n, e, t) {
  const r = Ee(e.configs.elements, (s) => s.state.transitions), i = Uu(r.filter((s) => s instanceof Ps).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: n
  };
}
function vp(n, e) {
  return n.edges[e.tokenTypeIdx];
}
function Ap(n, e, t) {
  const r = new Yi(), i = [];
  for (const a of n.elements) {
    if (t.is(a.alt) === !1)
      continue;
    if (a.state.type === Vn) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const c = a.state.transitions[l], u = Ep(c, e);
      u !== void 0 && r.add({
        state: u,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new Yi();
    for (const a of r.elements)
      Pr(a, s);
  }
  if (i.length > 0 && !Ip(s))
    for (const a of i)
      s.add(a);
  return s;
}
function Ep(n, e) {
  if (n instanceof Ps && Wl(e, n.tokenType))
    return n.target;
}
function kp(n, e) {
  let t;
  for (const r of n.elements)
    if (e.is(r.alt) === !0) {
      if (t === void 0)
        t = r.alt;
      else if (t !== r.alt)
        return;
    }
  return t;
}
function yc(n) {
  return {
    configs: n,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function Na(n, e, t, r) {
  return r = Tc(n, r), e.edges[t.tokenTypeIdx] = r, r;
}
function Tc(n, e) {
  if (e === br)
    return e;
  const t = e.configs.key, r = n.states[t];
  return r !== void 0 ? r : (e.configs.finalize(), n.states[t] = e, e);
}
function Sp(n) {
  const e = new Yi(), t = n.transitions.length;
  for (let r = 0; r < t; r++) {
    const s = {
      state: n.transitions[r].target,
      alt: r,
      stack: []
    };
    Pr(s, e);
  }
  return e;
}
function Pr(n, e) {
  const t = n.state;
  if (t.type === Vn) {
    if (n.stack.length > 0) {
      const i = [...n.stack], a = {
        state: i.pop(),
        alt: n.alt,
        stack: i
      };
      Pr(a, e);
    } else
      e.add(n);
    return;
  }
  t.epsilonOnlyTransitions || e.add(n);
  const r = t.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = t.transitions[i], a = xp(n, s);
    a !== void 0 && Pr(a, e);
  }
}
function xp(n, e) {
  if (e instanceof dc)
    return {
      state: e.target,
      alt: n.alt,
      stack: n.stack
    };
  if (e instanceof Ms) {
    const t = [...n.stack, e.followState];
    return {
      state: e.target,
      alt: n.alt,
      stack: t
    };
  }
}
function Ip(n) {
  for (const e of n.elements)
    if (e.state.type === Vn)
      return !0;
  return !1;
}
function Cp(n) {
  for (const e of n.elements)
    if (e.state.type !== Vn)
      return !1;
  return !0;
}
function $p(n) {
  if (Cp(n))
    return !0;
  const e = Np(n.elements);
  return wp(e) && !_p(e);
}
function Np(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const r = mc(t, !1);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[t.alt] = !0;
  }
  return e;
}
function wp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function _p(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var wa;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(wa || (wa = {}));
var Xi;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(Xi || (Xi = {}));
var _a;
(function(n) {
  n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(_a || (_a = {}));
var Mr;
(function(n) {
  n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(Mr || (Mr = {}));
var P;
(function(n) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = Mr.MAX_VALUE), i === Number.MAX_VALUE && (i = Mr.MAX_VALUE), { line: r, character: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  n.is = t;
})(P || (P = {}));
var b;
(function(n) {
  function e(r, i, s, a) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a))
      return { start: P.create(r, i), end: P.create(s, a) };
    if (P.is(r) && P.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`);
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.start) && P.is(i.end);
  }
  n.is = t;
})(b || (b = {}));
var Dr;
(function(n) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  n.is = t;
})(Dr || (Dr = {}));
var La;
(function(n) {
  function e(r, i, s, a) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.targetRange) && p.string(i.targetUri) && b.is(i.targetSelectionRange) && (b.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  n.is = t;
})(La || (La = {}));
var Ji;
(function(n) {
  function e(r, i, s, a) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  n.is = t;
})(Ji || (Ji = {}));
var Oa;
(function(n) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && b.is(i.range) && Ji.is(i.color);
  }
  n.is = t;
})(Oa || (Oa = {}));
var ba;
(function(n) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || Pt.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, Pt.is));
  }
  n.is = t;
})(ba || (ba = {}));
var Pa;
(function(n) {
  n.Comment = "comment", n.Imports = "imports", n.Region = "region";
})(Pa || (Pa = {}));
var Ma;
(function(n) {
  function e(r, i, s, a, o, l) {
    const c = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (c.startCharacter = s), p.defined(a) && (c.endCharacter = a), p.defined(o) && (c.kind = o), p.defined(l) && (c.collapsedText = l), c;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  n.is = t;
})(Ma || (Ma = {}));
var Qi;
(function(n) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && Dr.is(i.location) && p.string(i.message);
  }
  n.is = t;
})(Qi || (Qi = {}));
var Da;
(function(n) {
  n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
})(Da || (Da = {}));
var Fa;
(function(n) {
  n.Unnecessary = 1, n.Deprecated = 2;
})(Fa || (Fa = {}));
var Ga;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && p.string(r.href);
  }
  n.is = e;
})(Ga || (Ga = {}));
var Fr;
(function(n) {
  function e(r, i, s, a, o, l) {
    let c = { range: r, message: i };
    return p.defined(s) && (c.severity = s), p.defined(a) && (c.code = a), p.defined(o) && (c.source = o), p.defined(l) && (c.relatedInformation = l), c;
  }
  n.create = e;
  function t(r) {
    var i;
    let s = r;
    return p.defined(s) && b.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, Qi.is));
  }
  n.is = t;
})(Fr || (Fr = {}));
var bt;
(function(n) {
  function e(r, i, ...s) {
    let a = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  n.is = t;
})(bt || (bt = {}));
var Pt;
(function(n) {
  function e(s, a) {
    return { range: s, newText: a };
  }
  n.replace = e;
  function t(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  n.insert = t;
  function r(s) {
    return { range: s, newText: "" };
  }
  n.del = r;
  function i(s) {
    const a = s;
    return p.objectLiteral(a) && p.string(a.newText) && b.is(a.range);
  }
  n.is = i;
})(Pt || (Pt = {}));
var Zi;
(function(n) {
  function e(r, i, s) {
    const a = { label: r };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  n.is = t;
})(Zi || (Zi = {}));
var Mt;
(function(n) {
  function e(t) {
    const r = t;
    return p.string(r);
  }
  n.is = e;
})(Mt || (Mt = {}));
var Ua;
(function(n) {
  function e(s, a, o) {
    return { range: s, newText: a, annotationId: o };
  }
  n.replace = e;
  function t(s, a, o) {
    return { range: { start: s, end: s }, newText: a, annotationId: o };
  }
  n.insert = t;
  function r(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  n.del = r;
  function i(s) {
    const a = s;
    return Pt.is(a) && (Zi.is(a.annotationId) || Mt.is(a.annotationId));
  }
  n.is = i;
})(Ua || (Ua = {}));
var es;
(function(n) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && ss.is(i.textDocument) && Array.isArray(i.edits);
  }
  n.is = t;
})(es || (es = {}));
var ts;
(function(n) {
  function e(r, i, s) {
    let a = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Mt.is(i.annotationId));
  }
  n.is = t;
})(ts || (ts = {}));
var ns;
(function(n) {
  function e(r, i, s, a) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Mt.is(i.annotationId));
  }
  n.is = t;
})(ns || (ns = {}));
var rs;
(function(n) {
  function e(r, i, s) {
    let a = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Mt.is(i.annotationId));
  }
  n.is = t;
})(rs || (rs = {}));
var is;
(function(n) {
  function e(t) {
    let r = t;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? ts.is(i) || ns.is(i) || rs.is(i) : es.is(i)));
  }
  n.is = e;
})(is || (is = {}));
var Ba;
(function(n) {
  function e(r) {
    return { uri: r };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  n.is = t;
})(Ba || (Ba = {}));
var Va;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  n.is = t;
})(Va || (Va = {}));
var ss;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  n.is = t;
})(ss || (ss = {}));
var Wa;
(function(n) {
  function e(r, i, s, a) {
    return { uri: r, languageId: i, version: s, text: a };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  n.is = t;
})(Wa || (Wa = {}));
var as;
(function(n) {
  n.PlainText = "plaintext", n.Markdown = "markdown";
  function e(t) {
    const r = t;
    return r === n.PlainText || r === n.Markdown;
  }
  n.is = e;
})(as || (as = {}));
var On;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(t) && as.is(r.kind) && p.string(r.value);
  }
  n.is = e;
})(On || (On = {}));
var ja;
(function(n) {
  n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
})(ja || (ja = {}));
var Ka;
(function(n) {
  n.PlainText = 1, n.Snippet = 2;
})(Ka || (Ka = {}));
var Ha;
(function(n) {
  n.Deprecated = 1;
})(Ha || (Ha = {}));
var za;
(function(n) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i && p.string(i.newText) && b.is(i.insert) && b.is(i.replace);
  }
  n.is = t;
})(za || (za = {}));
var qa;
(function(n) {
  n.asIs = 1, n.adjustIndentation = 2;
})(qa || (qa = {}));
var Ya;
(function(n) {
  function e(t) {
    const r = t;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  n.is = e;
})(Ya || (Ya = {}));
var Xa;
(function(n) {
  function e(t) {
    return { label: t };
  }
  n.create = e;
})(Xa || (Xa = {}));
var Ja;
(function(n) {
  function e(t, r) {
    return { items: t || [], isIncomplete: !!r };
  }
  n.create = e;
})(Ja || (Ja = {}));
var Gr;
(function(n) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  n.fromPlainText = e;
  function t(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  n.is = t;
})(Gr || (Gr = {}));
var Qa;
(function(n) {
  function e(t) {
    let r = t;
    return !!r && p.objectLiteral(r) && (On.is(r.contents) || Gr.is(r.contents) || p.typedArray(r.contents, Gr.is)) && (t.range === void 0 || b.is(t.range));
  }
  n.is = e;
})(Qa || (Qa = {}));
var Za;
(function(n) {
  function e(t, r) {
    return r ? { label: t, documentation: r } : { label: t };
  }
  n.create = e;
})(Za || (Za = {}));
var eo;
(function(n) {
  function e(t, r, ...i) {
    let s = { label: t };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  n.create = e;
})(eo || (eo = {}));
var to;
(function(n) {
  n.Text = 1, n.Read = 2, n.Write = 3;
})(to || (to = {}));
var no;
(function(n) {
  function e(t, r) {
    let i = { range: t };
    return p.number(r) && (i.kind = r), i;
  }
  n.create = e;
})(no || (no = {}));
var ro;
(function(n) {
  n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
})(ro || (ro = {}));
var io;
(function(n) {
  n.Deprecated = 1;
})(io || (io = {}));
var so;
(function(n) {
  function e(t, r, i, s, a) {
    let o = {
      name: t,
      kind: r,
      location: { uri: s, range: i }
    };
    return a && (o.containerName = a), o;
  }
  n.create = e;
})(so || (so = {}));
var ao;
(function(n) {
  function e(t, r, i, s) {
    return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
  }
  n.create = e;
})(ao || (ao = {}));
var oo;
(function(n) {
  function e(r, i, s, a, o, l) {
    let c = {
      name: r,
      detail: i,
      kind: s,
      range: a,
      selectionRange: o
    };
    return l !== void 0 && (c.children = l), c;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && b.is(i.range) && b.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  n.is = t;
})(oo || (oo = {}));
var lo;
(function(n) {
  n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll";
})(lo || (lo = {}));
var Ur;
(function(n) {
  n.Invoked = 1, n.Automatic = 2;
})(Ur || (Ur = {}));
var co;
(function(n) {
  function e(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, Fr.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === Ur.Invoked || i.triggerKind === Ur.Automatic);
  }
  n.is = t;
})(co || (co = {}));
var uo;
(function(n) {
  function e(r, i, s) {
    let a = { title: r }, o = !0;
    return typeof i == "string" ? (o = !1, a.kind = i) : bt.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, Fr.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || bt.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || is.is(i.edit));
  }
  n.is = t;
})(uo || (uo = {}));
var fo;
(function(n) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.command) || bt.is(i.command));
  }
  n.is = t;
})(fo || (fo = {}));
var ho;
(function(n) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  n.is = t;
})(ho || (ho = {}));
var po;
(function(n) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  n.is = t;
})(po || (po = {}));
var mo;
(function(n) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (i.parent === void 0 || n.is(i.parent));
  }
  n.is = t;
})(mo || (mo = {}));
var go;
(function(n) {
  n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator";
})(go || (go = {}));
var yo;
(function(n) {
  n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
})(yo || (yo = {}));
var To;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  n.is = e;
})(To || (To = {}));
var Ro;
(function(n) {
  function e(r, i) {
    return { range: r, text: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.string(i.text);
  }
  n.is = t;
})(Ro || (Ro = {}));
var vo;
(function(n) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  n.is = t;
})(vo || (vo = {}));
var Ao;
(function(n) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  n.is = t;
})(Ao || (Ao = {}));
var Eo;
(function(n) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.defined(i) && b.is(r.stoppedLocation);
  }
  n.is = t;
})(Eo || (Eo = {}));
var os;
(function(n) {
  n.Type = 1, n.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  n.is = e;
})(os || (os = {}));
var ls;
(function(n) {
  function e(r) {
    return { value: r };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || On.is(i.tooltip)) && (i.location === void 0 || Dr.is(i.location)) && (i.command === void 0 || bt.is(i.command));
  }
  n.is = t;
})(ls || (ls = {}));
var ko;
(function(n) {
  function e(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && P.is(i.position) && (p.string(i.label) || p.typedArray(i.label, ls.is)) && (i.kind === void 0 || os.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, Pt.is) && (i.tooltip === void 0 || p.string(i.tooltip) || On.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  n.is = t;
})(ko || (ko = {}));
var So;
(function(n) {
  function e(t) {
    return { kind: "snippet", value: t };
  }
  n.createSnippet = e;
})(So || (So = {}));
var xo;
(function(n) {
  function e(t, r, i, s) {
    return { insertText: t, filterText: r, range: i, command: s };
  }
  n.create = e;
})(xo || (xo = {}));
var Io;
(function(n) {
  function e(t) {
    return { items: t };
  }
  n.create = e;
})(Io || (Io = {}));
var Co;
(function(n) {
  n.Invoked = 0, n.Automatic = 1;
})(Co || (Co = {}));
var $o;
(function(n) {
  function e(t, r) {
    return { range: t, text: r };
  }
  n.create = e;
})($o || ($o = {}));
var No;
(function(n) {
  function e(t, r) {
    return { triggerKind: t, selectedCompletionInfo: r };
  }
  n.create = e;
})(No || (No = {}));
var wo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && Xi.is(r.uri) && p.string(r.name);
  }
  n.is = e;
})(wo || (wo = {}));
var _o;
(function(n) {
  function e(s, a, o, l) {
    return new Lp(s, a, o, l);
  }
  n.create = e;
  function t(s) {
    let a = s;
    return !!(p.defined(a) && p.string(a.uri) && (p.undefined(a.languageId) || p.string(a.languageId)) && p.uinteger(a.lineCount) && p.func(a.getText) && p.func(a.positionAt) && p.func(a.offsetAt));
  }
  n.is = t;
  function r(s, a) {
    let o = s.getText(), l = i(a, (u, d) => {
      let h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    }), c = o.length;
    for (let u = l.length - 1; u >= 0; u--) {
      let d = l[u], h = s.offsetAt(d.range.start), f = s.offsetAt(d.range.end);
      if (f <= c)
        o = o.substring(0, h) + d.newText + o.substring(f, o.length);
      else
        throw new Error("Overlapping edit");
      c = h;
    }
    return o;
  }
  n.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), c = s.slice(o);
    i(l, a), i(c, a);
    let u = 0, d = 0, h = 0;
    for (; u < l.length && d < c.length; )
      a(l[u], c[d]) <= 0 ? s[h++] = l[u++] : s[h++] = c[d++];
    for (; u < l.length; )
      s[h++] = l[u++];
    for (; d < c.length; )
      s[h++] = c[d++];
    return s;
  }
})(_o || (_o = {}));
let Lp = class {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, r = !0;
      for (let i = 0; i < t.length; i++) {
        r && (e.push(i), r = !1);
        let s = t.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      r && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), r = 0, i = t.length;
    if (i === 0)
      return P.create(0, e);
    for (; r < i; ) {
      let a = Math.floor((r + i) / 2);
      t[a] > e ? i = a : r = a + 1;
    }
    let s = r - 1;
    return P.create(s, e - t[s]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(n) {
  const e = Object.prototype.toString;
  function t(f) {
    return typeof f < "u";
  }
  n.defined = t;
  function r(f) {
    return typeof f > "u";
  }
  n.undefined = r;
  function i(f) {
    return f === !0 || f === !1;
  }
  n.boolean = i;
  function s(f) {
    return e.call(f) === "[object String]";
  }
  n.string = s;
  function a(f) {
    return e.call(f) === "[object Number]";
  }
  n.number = a;
  function o(f, m, g) {
    return e.call(f) === "[object Number]" && m <= f && f <= g;
  }
  n.numberRange = o;
  function l(f) {
    return e.call(f) === "[object Number]" && -2147483648 <= f && f <= 2147483647;
  }
  n.integer = l;
  function c(f) {
    return e.call(f) === "[object Number]" && 0 <= f && f <= 2147483647;
  }
  n.uinteger = c;
  function u(f) {
    return e.call(f) === "[object Function]";
  }
  n.func = u;
  function d(f) {
    return f !== null && typeof f == "object";
  }
  n.objectLiteral = d;
  function h(f, m) {
    return Array.isArray(f) && f.every(m);
  }
  n.typedArray = h;
})(p || (p = {}));
class Op {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new vc(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const t = new Gs();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    const r = new cs(e.startOffset, e.image.length, Mi(e), e.tokenType, !t);
    return r.grammarSource = t, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const t = e.container;
    if (t) {
      const r = t.content.indexOf(e);
      r >= 0 && t.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const t = [];
    for (const s of e) {
      const a = new cs(s.startOffset, s.image.length, Mi(s), s.tokenType, !0);
      a.root = this.rootNode, t.push(a);
    }
    let r = this.current, i = !1;
    if (r.content.length > 0) {
      r.content.push(...t);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...t), i = !0;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    const t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    const r = this.nodeStack.pop();
    r?.content.length === 0 && this.removeNode(r);
  }
}
class Rc {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return !1;
  }
  get astNode() {
    var e, t;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class cs extends Rc {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, r, i, s = !1) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = r;
  }
}
class Gs extends Rc {
  constructor() {
    super(...arguments), this.content = new Us(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = t;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: P.create(0, 0), end: P.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const t = this.content[e];
      if (!t.hidden)
        return t;
    }
    return this.content[this.content.length - 1];
  }
}
class Us extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, Us.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t, ...r) {
    return this.addParents(r), super.splice(e, t, ...r);
  }
  addParents(e) {
    for (const t of e)
      t.container = this.parent;
  }
}
class vc extends Gs {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const us = Symbol("Datatype");
function Ai(n) {
  return n.$type === us;
}
const Lo = "​", Ac = (n) => n.endsWith(Lo) ? n : n + Lo;
class Ec {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const t = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new Fp(t, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class bp extends Ec {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Op(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Ac(e.name), this.startImplementation(r, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Cl(e))
        return us;
      {
        const t = xs(e);
        return t ?? e.name;
      }
    }
  }
  parse(e, t = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i)
      throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a = { $type: e };
        this.stack.push(a), e === us && (a.value = "");
      }
      let s;
      try {
        s = t(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const t = this.lexerResult.hidden;
    if (!t.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < t.length; i++)
      if (t[i].startOffset > r)
        return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, r) {
    const i = this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), c = this.current;
      if (o) {
        const u = ft(r) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, u, a, l);
      } else if (Ai(c)) {
        let u = i.image;
        ft(r) || (u = this.converter.convert(u, a).toString()), c.value += u;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, r, i, s) {
    let a;
    !this.isRecording() && !r && (a = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, i, a);
  }
  performSubruleAssignment(e, t, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a = this.current;
      if (Ai(a))
        a.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let r = this.current;
      if (t.feature && t.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(t.operator, t.feature, r, r.$cstNode, !1);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return hd(e), this.nodeBuilder.construct(e), this.stack.pop(), Ai(e) ? this.converter.convert(e.value, e.$cstNode) : (pd(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const t = Yr(e, dt);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? As(t.terminal) : !1
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, r, i, s) {
    const a = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a, t, i, r) : o = r, e) {
      case "=": {
        a[t] = o;
        break;
      }
      case "?=": {
        a[t] = !0;
        break;
      }
      case "+=":
        Array.isArray(a[t]) || (a[t] = []), a[t].push(o);
    }
  }
  assignWithoutOverride(e, t) {
    for (const [i, s] of Object.entries(t)) {
      const a = e[i];
      a === void 0 ? e[i] = s : Array.isArray(a) && Array.isArray(s) && (s.push(...a), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class Pp {
  buildMismatchTokenMessage(e) {
    return Ct.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Ct.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Ct.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Ct.buildEarlyExitMessage(e);
  }
}
class kc extends Pp {
  buildMismatchTokenMessage({ expected: e, actual: t }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class Mp extends Ec {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const t = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    const r = this.wrapper.DEFINE_RULE(Ac(e.name), this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      const r = this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, r) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const t = this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const Dp = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new kc()
};
class Fp extends Kh {
  constructor(e, t) {
    const r = t && "maxLookahead" in t;
    super(e, Object.assign(Object.assign(Object.assign({}, Dp), { lookaheadStrategy: r ? new Os({ maxLookahead: t.maxLookahead }) : new fp({
      // If validations are skipped, don't log the lookahead warnings
      logging: t.skipValidations ? () => {
      } : void 0
    }) }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, r) {
    return this.subrule(e, t, {
      ARGS: [r]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
}
function Sc(n, e, t) {
  return Gp({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, n), e;
}
function Gp(n, e) {
  const t = El(e, !1), r = ee(e.rules).filter(we).filter((i) => t.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, n), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    n.parser.rule(i, mt(s, i.definition));
  }
}
function mt(n, e, t = !1) {
  let r;
  if (ft(e))
    r = Hp(n, e);
  else if (qr(e))
    r = Up(n, e);
  else if (dt(e))
    r = mt(n, e.terminal);
  else if (As(e))
    r = xc(n, e);
  else if (ht(e))
    r = Bp(n, e);
  else if (gl(e))
    r = Wp(n, e);
  else if (yl(e))
    r = jp(n, e);
  else if (Es(e))
    r = Kp(n, e);
  else if (sd(e)) {
    const i = n.consume++;
    r = () => n.parser.consume(i, tt, e);
  } else
    throw new fl(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Ic(n, t ? void 0 : Br(e), r, e.cardinality);
}
function Up(n, e) {
  const t = Is(e);
  return () => n.parser.action(t, e);
}
function Bp(n, e) {
  const t = e.rule.ref;
  if (we(t)) {
    const r = n.subrule++, i = t.fragment, s = e.arguments.length > 0 ? Vp(t, e.arguments) : () => ({});
    return (a) => n.parser.subrule(r, Cc(n, t), i, e, s(a));
  } else if (Tt(t)) {
    const r = n.consume++, i = ds(n, t.name);
    return () => n.parser.consume(r, i, e);
  } else if (t)
    Mn();
  else
    throw new fl(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function Vp(n, e) {
  const t = e.map((r) => He(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < t.length; s++) {
      const a = n.parameters[s], o = t[s];
      i[a.name] = o(r);
    }
    return i;
  };
}
function He(n) {
  if (Zu(n)) {
    const e = He(n.left), t = He(n.right);
    return (r) => e(r) || t(r);
  } else if (Qu(n)) {
    const e = He(n.left), t = He(n.right);
    return (r) => e(r) && t(r);
  } else if (ed(n)) {
    const e = He(n.value);
    return (t) => !e(t);
  } else if (td(n)) {
    const e = n.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === !0;
  } else if (Ju(n)) {
    const e = !!n.true;
    return () => e;
  }
  Mn();
}
function Wp(n, e) {
  if (e.elements.length === 1)
    return mt(n, e.elements[0]);
  {
    const t = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: mt(n, i, !0)
      }, a = Br(i);
      a && (s.GATE = He(a)), t.push(s);
    }
    const r = n.or++;
    return (i) => n.parser.alternatives(r, t.map((s) => {
      const a = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a.GATE = () => o(i)), a;
    }));
  }
}
function jp(n, e) {
  if (e.elements.length === 1)
    return mt(n, e.elements[0]);
  const t = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: mt(n, o, !0)
    }, c = Br(o);
    c && (l.GATE = He(c)), t.push(l);
  }
  const r = n.or++, i = (o, l) => {
    const c = l.getRuleStack().join("-");
    return `uGroup_${o}_${c}`;
  }, s = (o) => n.parser.alternatives(r, t.map((l, c) => {
    const u = { ALT: () => !0 }, d = n.parser;
    u.ALT = () => {
      if (l.ALT(o), !d.isRecording()) {
        const f = i(r, d);
        d.unorderedGroups.get(f) || d.unorderedGroups.set(f, []);
        const m = d.unorderedGroups.get(f);
        typeof m?.[c] > "u" && (m[c] = !0);
      }
    };
    const h = l.GATE;
    return h ? u.GATE = () => h(o) : u.GATE = () => {
      const f = d.unorderedGroups.get(i(r, d));
      return !f?.[c];
    }, u;
  })), a = Ic(n, Br(e), s, "*");
  return (o) => {
    a(o), n.parser.isRecording() || n.parser.unorderedGroups.delete(i(r, n.parser));
  };
}
function Kp(n, e) {
  const t = e.elements.map((r) => mt(n, r));
  return (r) => t.forEach((i) => i(r));
}
function Br(n) {
  if (Es(n))
    return n.guardCondition;
}
function xc(n, e, t = e.terminal) {
  if (t)
    if (ht(t) && we(t.rule.ref)) {
      const r = t.rule.ref, i = n.subrule++;
      return (s) => n.parser.subrule(i, Cc(n, r), !1, e, s);
    } else if (ht(t) && Tt(t.rule.ref)) {
      const r = n.consume++, i = ds(n, t.rule.ref.name);
      return () => n.parser.consume(r, i, e);
    } else if (ft(t)) {
      const r = n.consume++, i = ds(n, t.value);
      return () => n.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = xl(e.type.ref), i = r?.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Is(e.type.ref));
    return xc(n, e, i);
  }
}
function Hp(n, e) {
  const t = n.consume++, r = n.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => n.parser.consume(t, r, e);
}
function Ic(n, e, t, r) {
  const i = e && He(e);
  if (!r)
    if (i) {
      const s = n.or++;
      return (a) => n.parser.alternatives(s, [
        {
          ALT: () => t(a),
          GATE: () => i(a)
        },
        {
          ALT: Ia(),
          GATE: () => !i(a)
        }
      ]);
    } else
      return t;
  if (r === "*") {
    const s = n.many++;
    return (a) => n.parser.many(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else if (r === "+") {
    const s = n.many++;
    if (i) {
      const a = n.or++;
      return (o) => n.parser.alternatives(a, [
        {
          ALT: () => n.parser.atLeastOne(s, {
            DEF: () => t(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: Ia(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a) => n.parser.atLeastOne(s, {
        DEF: () => t(a)
      });
  } else if (r === "?") {
    const s = n.optional++;
    return (a) => n.parser.optional(s, {
      DEF: () => t(a),
      GATE: i ? () => i(a) : void 0
    });
  } else
    Mn();
}
function Cc(n, e) {
  const t = zp(n, e), r = n.parser.getRule(t);
  if (!r)
    throw new Error(`Rule "${t}" not found."`);
  return r;
}
function zp(n, e) {
  if (we(e))
    return e.name;
  if (n.ruleNames.has(e))
    return n.ruleNames.get(e);
  {
    let t = e, r = t.$container, i = e.$type;
    for (; !we(r); )
      (Es(r) || gl(r) || yl(r)) && (i = r.elements.indexOf(t).toString() + ":" + i), t = r, r = r.$container;
    return i = r.name + ":" + i, n.ruleNames.set(e, i), i;
  }
}
function ds(n, e) {
  const t = n.tokens[e];
  if (!t)
    throw new Error(`Token "${e}" not found."`);
  return t;
}
function qp(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new Mp(n);
  return Sc(e, r, t.definition), r.finalize(), r;
}
function Yp(n) {
  const e = Xp(n);
  return e.finalize(), e;
}
function Xp(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new bp(n);
  return Sc(e, r, t.definition);
}
class $c {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    const r = ee(El(e, !1)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, t);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && Fi(o) ? s.unshift(a) : s.push(a);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Tt).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    const t = Cs(e), r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = Fi(t) ? de.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const t = new RegExp(e, e.flags + "y");
    return (r, i) => (t.lastIndex = i, t.exec(r));
  }
  buildKeywordTokens(e, t, r) {
    return e.filter(we).flatMap((i) => Dn(i).filter(ft)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!r?.caseInsensitive));
  }
  buildKeywordToken(e, t, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = !0), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp(kd(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((r, i) => {
      const s = i?.PATTERN;
      return s?.source && Sd("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class Nc {
  convert(e, t) {
    let r = t.grammarSource;
    if (As(r) && (r = $d(r)), ht(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, t, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return je.convertInt(t);
      case "STRING":
        return je.convertString(t);
      case "ID":
        return je.convertID(t);
    }
    switch ((i = Pd(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return je.convertNumber(t);
      case "boolean":
        return je.convertBoolean(t);
      case "bigint":
        return je.convertBigint(t);
      case "date":
        return je.convertDate(t);
      default:
        return t;
    }
  }
}
var je;
(function(n) {
  function e(c) {
    let u = "";
    for (let d = 1; d < c.length - 1; d++) {
      const h = c.charAt(d);
      if (h === "\\") {
        const f = c.charAt(++d);
        u += t(f);
      } else
        u += h;
    }
    return u;
  }
  n.convertString = e;
  function t(c) {
    switch (c) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return c;
    }
  }
  function r(c) {
    return c.charAt(0) === "^" ? c.substring(1) : c;
  }
  n.convertID = r;
  function i(c) {
    return parseInt(c);
  }
  n.convertInt = i;
  function s(c) {
    return BigInt(c);
  }
  n.convertBigint = s;
  function a(c) {
    return new Date(c);
  }
  n.convertDate = a;
  function o(c) {
    return Number(c);
  }
  n.convertNumber = o;
  function l(c) {
    return c.toLowerCase() === "true";
  }
  n.convertBoolean = l;
})(je || (je = {}));
var lt = {}, rr = {}, Oo;
function wc() {
  if (Oo) return rr;
  Oo = 1, Object.defineProperty(rr, "__esModule", { value: !0 });
  let n;
  function e() {
    if (n === void 0)
      throw new Error("No runtime abstraction layer installed");
    return n;
  }
  return function(t) {
    function r(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      n = i;
    }
    t.install = r;
  }(e || (e = {})), rr.default = e, rr;
}
var J = {}, bo;
function Jp() {
  if (bo) return J;
  bo = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.stringArray = J.array = J.func = J.error = J.number = J.string = J.boolean = void 0;
  function n(o) {
    return o === !0 || o === !1;
  }
  J.boolean = n;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  J.string = e;
  function t(o) {
    return typeof o == "number" || o instanceof Number;
  }
  J.number = t;
  function r(o) {
    return o instanceof Error;
  }
  J.error = r;
  function i(o) {
    return typeof o == "function";
  }
  J.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  J.array = s;
  function a(o) {
    return s(o) && o.every((l) => e(l));
  }
  return J.stringArray = a, J;
}
var ct = {}, Po;
function _c() {
  if (Po) return ct;
  Po = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.Emitter = ct.Event = void 0;
  const n = wc();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (ct.Event = e = {}));
  class t {
    add(s, a = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a) });
    }
    remove(s, a = null) {
      if (!this._callbacks)
        return;
      let o = !1;
      for (let l = 0, c = this._callbacks.length; l < c; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = !0;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let c = 0, u = o.length; c < u; c++)
        try {
          a.push(o[c].apply(l[c], s));
        } catch (d) {
          (0, n.default)().console.error(d);
        }
      return a;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class r {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a, o) => {
        this._callbacks || (this._callbacks = new t()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a), l.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return ct.Emitter = r, r._noop = function() {
  }, ct;
}
var Mo;
function Qp() {
  if (Mo) return lt;
  Mo = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.CancellationTokenSource = lt.CancellationToken = void 0;
  const n = wc(), e = Jp(), t = _c();
  var r;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: t.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: t.Event.None
    });
    function l(c) {
      const u = c;
      return u && (u === o.None || u === o.Cancelled || e.boolean(u.isCancellationRequested) && !!u.onCancellationRequested);
    }
    o.is = l;
  })(r || (lt.CancellationToken = r = {}));
  const i = Object.freeze(function(o, l) {
    const c = (0, n.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      c.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new t.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = r.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = r.None;
    }
  }
  return lt.CancellationTokenSource = a, lt;
}
var V = Qp();
function Zp() {
  return new Promise((n) => {
    typeof setImmediate > "u" ? setTimeout(n, 0) : setImmediate(n);
  });
}
let mr = 0, em = 10;
function tm() {
  return mr = performance.now(), new V.CancellationTokenSource();
}
const Vr = Symbol("OperationCancelled");
function si(n) {
  return n === Vr;
}
async function Ae(n) {
  if (n === V.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - mr >= em && (mr = e, await Zp(), mr = performance.now()), n.isCancellationRequested)
    throw Vr;
}
class Bs {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (t(r), this);
    });
  }
}
class bn {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    for (const r of e)
      if (bn.isIncremental(r)) {
        const i = Oc(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let c = this._lineOffsets;
        const u = Do(r.text, !1, s);
        if (l - o === u.length)
          for (let h = 0, f = u.length; h < f; h++)
            c[h + o + 1] = u[h];
        else
          u.length < 1e4 ? c.splice(o + 1, l - o, ...u) : this._lineOffsets = c = c.slice(0, o + 1).concat(u, c.slice(l + 1));
        const d = r.text.length - (a - s);
        if (d !== 0)
          for (let h = o + 1 + u.length, f = c.length; h < f; h++)
            c[h] = c[h] + d;
      } else if (bn.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Do(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const t = this.getLineOffsets();
    let r = 0, i = t.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a = Math.floor((r + i) / 2);
      t[a] > e ? i = a : r = a + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
  }
  offsetAt(e) {
    const t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = t[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && Lc(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
}
var fs;
(function(n) {
  function e(i, s, a, o) {
    return new bn(i, s, a, o);
  }
  n.create = e;
  function t(i, s, a) {
    if (i instanceof bn)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  n.update = t;
  function r(i, s) {
    const a = i.getText(), o = hs(s.map(nm), (u, d) => {
      const h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    });
    let l = 0;
    const c = [];
    for (const u of o) {
      const d = i.offsetAt(u.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && c.push(a.substring(l, d)), u.newText.length && c.push(u.newText), l = i.offsetAt(u.range.end);
    }
    return c.push(a.substr(l)), c.join("");
  }
  n.applyEdits = r;
})(fs || (fs = {}));
function hs(n, e) {
  if (n.length <= 1)
    return n;
  const t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  hs(r, e), hs(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < r.length && a < i.length; )
    e(r[s], i[a]) <= 0 ? n[o++] = r[s++] : n[o++] = i[a++];
  for (; s < r.length; )
    n[o++] = r[s++];
  for (; a < i.length; )
    n[o++] = i[a++];
  return n;
}
function Do(n, e, t = 0) {
  const r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    const s = n.charCodeAt(i);
    Lc(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function Lc(n) {
  return n === 13 || n === 10;
}
function Oc(n) {
  const e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function nm(n) {
  const e = Oc(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var bc;
(() => {
  var n = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a(l, c) {
      for (var u, d = "", h = 0, f = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) u = l.charCodeAt(g);
        else {
          if (u === 47) break;
          u = 47;
        }
        if (u === 47) {
          if (!(f === g - 1 || m === 1)) if (f !== g - 1 && m === 2) {
            if (d.length < 2 || h !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
              if (d.length > 2) {
                var v = d.lastIndexOf("/");
                if (v !== d.length - 1) {
                  v === -1 ? (d = "", h = 0) : h = (d = d.slice(0, v)).length - 1 - d.lastIndexOf("/"), f = g, m = 0;
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                d = "", h = 0, f = g, m = 0;
                continue;
              }
            }
            c && (d.length > 0 ? d += "/.." : d = "..", h = 2);
          } else d.length > 0 ? d += "/" + l.slice(f + 1, g) : d = l.slice(f + 1, g), h = g - f - 1;
          f = g, m = 0;
        } else u === 46 && m !== -1 ? ++m : m = -1;
      }
      return d;
    }
    var o = { resolve: function() {
      for (var l, c = "", u = !1, d = arguments.length - 1; d >= -1 && !u; d--) {
        var h;
        d >= 0 ? h = arguments[d] : (l === void 0 && (l = process.cwd()), h = l), s(h), h.length !== 0 && (c = h + "/" + c, u = h.charCodeAt(0) === 47);
      }
      return c = a(c, !u), u ? c.length > 0 ? "/" + c : "/" : c.length > 0 ? c : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var c = l.charCodeAt(0) === 47, u = l.charCodeAt(l.length - 1) === 47;
      return (l = a(l, !c)).length !== 0 || c || (l = "."), l.length > 0 && u && (l += "/"), c ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, c = 0; c < arguments.length; ++c) {
        var u = arguments[c];
        s(u), u.length > 0 && (l === void 0 ? l = u : l += "/" + u);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, c) {
      if (s(l), s(c), l === c || (l = o.resolve(l)) === (c = o.resolve(c))) return "";
      for (var u = 1; u < l.length && l.charCodeAt(u) === 47; ++u) ;
      for (var d = l.length, h = d - u, f = 1; f < c.length && c.charCodeAt(f) === 47; ++f) ;
      for (var m = c.length - f, g = h < m ? h : m, v = -1, T = 0; T <= g; ++T) {
        if (T === g) {
          if (m > g) {
            if (c.charCodeAt(f + T) === 47) return c.slice(f + T + 1);
            if (T === 0) return c.slice(f + T);
          } else h > g && (l.charCodeAt(u + T) === 47 ? v = T : T === 0 && (v = 0));
          break;
        }
        var A = l.charCodeAt(u + T);
        if (A !== c.charCodeAt(f + T)) break;
        A === 47 && (v = T);
      }
      var R = "";
      for (T = u + v + 1; T <= d; ++T) T !== d && l.charCodeAt(T) !== 47 || (R.length === 0 ? R += ".." : R += "/..");
      return R.length > 0 ? R + c.slice(f + v) : (f += v, c.charCodeAt(f) === 47 && ++f, c.slice(f));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var c = l.charCodeAt(0), u = c === 47, d = -1, h = !0, f = l.length - 1; f >= 1; --f) if ((c = l.charCodeAt(f)) === 47) {
        if (!h) {
          d = f;
          break;
        }
      } else h = !1;
      return d === -1 ? u ? "/" : "." : u && d === 1 ? "//" : l.slice(0, d);
    }, basename: function(l, c) {
      if (c !== void 0 && typeof c != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var u, d = 0, h = -1, f = !0;
      if (c !== void 0 && c.length > 0 && c.length <= l.length) {
        if (c.length === l.length && c === l) return "";
        var m = c.length - 1, g = -1;
        for (u = l.length - 1; u >= 0; --u) {
          var v = l.charCodeAt(u);
          if (v === 47) {
            if (!f) {
              d = u + 1;
              break;
            }
          } else g === -1 && (f = !1, g = u + 1), m >= 0 && (v === c.charCodeAt(m) ? --m == -1 && (h = u) : (m = -1, h = g));
        }
        return d === h ? h = g : h === -1 && (h = l.length), l.slice(d, h);
      }
      for (u = l.length - 1; u >= 0; --u) if (l.charCodeAt(u) === 47) {
        if (!f) {
          d = u + 1;
          break;
        }
      } else h === -1 && (f = !1, h = u + 1);
      return h === -1 ? "" : l.slice(d, h);
    }, extname: function(l) {
      s(l);
      for (var c = -1, u = 0, d = -1, h = !0, f = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) d === -1 && (h = !1, d = m + 1), g === 46 ? c === -1 ? c = m : f !== 1 && (f = 1) : c !== -1 && (f = -1);
        else if (!h) {
          u = m + 1;
          break;
        }
      }
      return c === -1 || d === -1 || f === 0 || f === 1 && c === d - 1 && c === u + 1 ? "" : l.slice(c, d);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return function(c, u) {
        var d = u.dir || u.root, h = u.base || (u.name || "") + (u.ext || "");
        return d ? d === u.root ? d + h : d + "/" + h : h;
      }(0, l);
    }, parse: function(l) {
      s(l);
      var c = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return c;
      var u, d = l.charCodeAt(0), h = d === 47;
      h ? (c.root = "/", u = 1) : u = 0;
      for (var f = -1, m = 0, g = -1, v = !0, T = l.length - 1, A = 0; T >= u; --T) if ((d = l.charCodeAt(T)) !== 47) g === -1 && (v = !1, g = T + 1), d === 46 ? f === -1 ? f = T : A !== 1 && (A = 1) : f !== -1 && (A = -1);
      else if (!v) {
        m = T + 1;
        break;
      }
      return f === -1 || g === -1 || A === 0 || A === 1 && f === g - 1 && f === m + 1 ? g !== -1 && (c.base = c.name = m === 0 && h ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && h ? (c.name = l.slice(1, f), c.base = l.slice(1, g)) : (c.name = l.slice(m, f), c.base = l.slice(m, g)), c.ext = l.slice(f, g)), m > 0 ? c.dir = l.slice(0, m - 1) : h && (c.dir = "/"), c;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a = e[i] = { exports: {} };
    return n[i](a, a.exports, t), a.exports;
  }
  t.d = (i, s) => {
    for (var a in s) t.o(s, a) && !t.o(i, a) && Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var r = {};
  (() => {
    let i;
    t.r(r), t.d(r, { URI: () => h, Utils: () => Ce }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l(k, y) {
      if (!k.scheme && y) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
      if (k.scheme && !s.test(k.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (k.path) {
        if (k.authority) {
          if (!a.test(k.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(k.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const c = "", u = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class h {
      static isUri(y) {
        return y instanceof h || !!y && typeof y.authority == "string" && typeof y.fragment == "string" && typeof y.path == "string" && typeof y.query == "string" && typeof y.scheme == "string" && typeof y.fsPath == "string" && typeof y.with == "function" && typeof y.toString == "function";
      }
      scheme;
      authority;
      path;
      query;
      fragment;
      constructor(y, I, x, O, L, _ = !1) {
        typeof y == "object" ? (this.scheme = y.scheme || c, this.authority = y.authority || c, this.path = y.path || c, this.query = y.query || c, this.fragment = y.fragment || c) : (this.scheme = /* @__PURE__ */ function(Te, q) {
          return Te || q ? Te : "file";
        }(y, _), this.authority = I || c, this.path = function(Te, q) {
          switch (Te) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== u && (q = u + q) : q = u;
          }
          return q;
        }(this.scheme, x || c), this.query = O || c, this.fragment = L || c, l(this, _));
      }
      get fsPath() {
        return A(this);
      }
      with(y) {
        if (!y) return this;
        let { scheme: I, authority: x, path: O, query: L, fragment: _ } = y;
        return I === void 0 ? I = this.scheme : I === null && (I = c), x === void 0 ? x = this.authority : x === null && (x = c), O === void 0 ? O = this.path : O === null && (O = c), L === void 0 ? L = this.query : L === null && (L = c), _ === void 0 ? _ = this.fragment : _ === null && (_ = c), I === this.scheme && x === this.authority && O === this.path && L === this.query && _ === this.fragment ? this : new m(I, x, O, L, _);
      }
      static parse(y, I = !1) {
        const x = d.exec(y);
        return x ? new m(x[2] || c, ie(x[4] || c), ie(x[5] || c), ie(x[7] || c), ie(x[9] || c), I) : new m(c, c, c, c, c);
      }
      static file(y) {
        let I = c;
        if (i && (y = y.replace(/\\/g, u)), y[0] === u && y[1] === u) {
          const x = y.indexOf(u, 2);
          x === -1 ? (I = y.substring(2), y = u) : (I = y.substring(2, x), y = y.substring(x) || u);
        }
        return new m("file", I, y, c, c);
      }
      static from(y) {
        const I = new m(y.scheme, y.authority, y.path, y.query, y.fragment);
        return l(I, !0), I;
      }
      toString(y = !1) {
        return R(this, y);
      }
      toJSON() {
        return this;
      }
      static revive(y) {
        if (y) {
          if (y instanceof h) return y;
          {
            const I = new m(y);
            return I._formatted = y.external, I._fsPath = y._sep === f ? y.fsPath : null, I;
          }
        }
        return y;
      }
    }
    const f = i ? 1 : void 0;
    class m extends h {
      _formatted = null;
      _fsPath = null;
      get fsPath() {
        return this._fsPath || (this._fsPath = A(this)), this._fsPath;
      }
      toString(y = !1) {
        return y ? R(this, !0) : (this._formatted || (this._formatted = R(this, !1)), this._formatted);
      }
      toJSON() {
        const y = { $mid: 1 };
        return this._fsPath && (y.fsPath = this._fsPath, y._sep = f), this._formatted && (y.external = this._formatted), this.path && (y.path = this.path), this.scheme && (y.scheme = this.scheme), this.authority && (y.authority = this.authority), this.query && (y.query = this.query), this.fragment && (y.fragment = this.fragment), y;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function v(k, y, I) {
      let x, O = -1;
      for (let L = 0; L < k.length; L++) {
        const _ = k.charCodeAt(L);
        if (_ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 45 || _ === 46 || _ === 95 || _ === 126 || y && _ === 47 || I && _ === 91 || I && _ === 93 || I && _ === 58) O !== -1 && (x += encodeURIComponent(k.substring(O, L)), O = -1), x !== void 0 && (x += k.charAt(L));
        else {
          x === void 0 && (x = k.substr(0, L));
          const Te = g[_];
          Te !== void 0 ? (O !== -1 && (x += encodeURIComponent(k.substring(O, L)), O = -1), x += Te) : O === -1 && (O = L);
        }
      }
      return O !== -1 && (x += encodeURIComponent(k.substring(O))), x !== void 0 ? x : k;
    }
    function T(k) {
      let y;
      for (let I = 0; I < k.length; I++) {
        const x = k.charCodeAt(I);
        x === 35 || x === 63 ? (y === void 0 && (y = k.substr(0, I)), y += g[x]) : y !== void 0 && (y += k[I]);
      }
      return y !== void 0 ? y : k;
    }
    function A(k, y) {
      let I;
      return I = k.authority && k.path.length > 1 && k.scheme === "file" ? `//${k.authority}${k.path}` : k.path.charCodeAt(0) === 47 && (k.path.charCodeAt(1) >= 65 && k.path.charCodeAt(1) <= 90 || k.path.charCodeAt(1) >= 97 && k.path.charCodeAt(1) <= 122) && k.path.charCodeAt(2) === 58 ? k.path[1].toLowerCase() + k.path.substr(2) : k.path, i && (I = I.replace(/\//g, "\\")), I;
    }
    function R(k, y) {
      const I = y ? T : v;
      let x = "", { scheme: O, authority: L, path: _, query: Te, fragment: q } = k;
      if (O && (x += O, x += ":"), (L || O === "file") && (x += u, x += u), L) {
        let W = L.indexOf("@");
        if (W !== -1) {
          const at = L.substr(0, W);
          L = L.substr(W + 1), W = at.lastIndexOf(":"), W === -1 ? x += I(at, !1, !1) : (x += I(at.substr(0, W), !1, !1), x += ":", x += I(at.substr(W + 1), !1, !0)), x += "@";
        }
        L = L.toLowerCase(), W = L.lastIndexOf(":"), W === -1 ? x += I(L, !1, !0) : (x += I(L.substr(0, W), !1, !0), x += L.substr(W));
      }
      if (_) {
        if (_.length >= 3 && _.charCodeAt(0) === 47 && _.charCodeAt(2) === 58) {
          const W = _.charCodeAt(1);
          W >= 65 && W <= 90 && (_ = `/${String.fromCharCode(W + 32)}:${_.substr(3)}`);
        } else if (_.length >= 2 && _.charCodeAt(1) === 58) {
          const W = _.charCodeAt(0);
          W >= 65 && W <= 90 && (_ = `${String.fromCharCode(W + 32)}:${_.substr(2)}`);
        }
        x += I(_, !0, !1);
      }
      return Te && (x += "?", x += I(Te, !1, !1)), q && (x += "#", x += y ? q : v(q, !1, !1)), x;
    }
    function C(k) {
      try {
        return decodeURIComponent(k);
      } catch {
        return k.length > 3 ? k.substr(0, 3) + C(k.substr(3)) : k;
      }
    }
    const F = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ie(k) {
      return k.match(F) ? k.replace(F, (y) => C(y)) : k;
    }
    var _e = t(470);
    const ye = _e.posix || _e, Fe = "/";
    var Ce;
    (function(k) {
      k.joinPath = function(y, ...I) {
        return y.with({ path: ye.join(y.path, ...I) });
      }, k.resolvePath = function(y, ...I) {
        let x = y.path, O = !1;
        x[0] !== Fe && (x = Fe + x, O = !0);
        let L = ye.resolve(x, ...I);
        return O && L[0] === Fe && !y.authority && (L = L.substring(1)), y.with({ path: L });
      }, k.dirname = function(y) {
        if (y.path.length === 0 || y.path === Fe) return y;
        let I = ye.dirname(y.path);
        return I.length === 1 && I.charCodeAt(0) === 46 && (I = ""), y.with({ path: I });
      }, k.basename = function(y) {
        return ye.basename(y.path);
      }, k.extname = function(y) {
        return ye.extname(y.path);
      };
    })(Ce || (Ce = {}));
  })(), bc = r;
})();
const { URI: gt, Utils: Ht } = bc;
var rt;
(function(n) {
  n.basename = Ht.basename, n.dirname = Ht.dirname, n.extname = Ht.extname, n.joinPath = Ht.joinPath, n.resolvePath = Ht.resolvePath;
  function e(i, s) {
    return i?.toString() === s?.toString();
  }
  n.equals = e;
  function t(i, s) {
    const a = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a.split("/").filter((f) => f.length > 0), c = o.split("/").filter((f) => f.length > 0);
    let u = 0;
    for (; u < l.length && l[u] === c[u]; u++)
      ;
    const d = "../".repeat(l.length - u), h = c.slice(u).join("/");
    return d + h;
  }
  n.relative = t;
  function r(i) {
    return gt.parse(i.toString()).toString();
  }
  n.normalize = r;
})(rt || (rt = {}));
var U;
(function(n) {
  n[n.Changed = 0] = "Changed", n[n.Parsed = 1] = "Parsed", n[n.IndexedContent = 2] = "IndexedContent", n[n.ComputedScopes = 3] = "ComputedScopes", n[n.Linked = 4] = "Linked", n[n.IndexedReferences = 5] = "IndexedReferences", n[n.Validated = 6] = "Validated";
})(U || (U = {}));
class rm {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, t = V.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, t);
  }
  fromTextDocument(e, t, r) {
    return t = t ?? gt.parse(e.uri), V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromString(e, t, r) {
    return V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromModel(e, t) {
    return this.create(t, { $model: e });
  }
  create(e, t, r) {
    if (typeof t == "string") {
      const i = this.parse(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      const i = { value: t.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  async createAsync(e, t, r) {
    if (typeof t == "string") {
      const i = await this.parseAsync(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      const i = await this.parseAsync(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, t, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a = this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        get textDocument() {
          return a();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, t), e.parseResult.value.$document = e), e.state = U.Parsed, e;
  }
  parse(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, r);
  }
  parseAsync(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r);
  }
  createTextDocumentGetter(e, t) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = fs.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
}
class im {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ee(this.documentMap.values());
  }
  addDocument(e) {
    const t = e.uri.toString();
    if (this.documentMap.has(t))
      throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    const t = e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(r), r);
  }
  createDocument(e, t, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(t, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = U.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (r.state = U.Changed, this.documentMap.delete(t)), r;
  }
}
const Ei = Symbol("ref_resolving");
class sm {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, t = V.CancellationToken.None) {
    for (const r of $t(e.parseResult.value))
      await Ae(t), Rl(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Ei;
      try {
        const s = this.getCandidate(e);
        if (lr(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a = this.loadAstNode(s);
          i._ref = a ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a}` });
      }
      t.references.push(i);
    }
  }
  unlink(e) {
    for (const t of e.references)
      delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, t, r, i) {
    const s = this, a = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ae(this._ref))
          return this._ref;
        if (Bu(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: t }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Ei;
          const l = Di(e).$document, c = s.getLinkedNode({ reference: a, container: e, property: t });
          if (c.error && l && l.state < U.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = c.node) !== null && o !== void 0 ? o : c.error, this._nodeDescription = c.descr, l?.references.push(this);
        } else if (this._ref === Ei)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return lr(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var t;
    try {
      const r = this.getCandidate(e);
      if (lr(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (t = r.message) !== null && t !== void 0 ? t : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const t = this.langiumDocuments().getDocument(e.documentUri);
    if (t)
      return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    const r = Di(e.container).$document;
    r && r.state < U.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: t });
  }
}
function am(n) {
  return typeof n.name == "string";
}
class om {
  getName(e) {
    if (am(e))
      return e.name;
  }
  getNameNode(e) {
    return Sl(e.$cstNode, "name");
  }
}
class lm {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const t = Od(e), r = e.astNode;
      if (t && r) {
        const i = r[t.feature];
        if (Ue(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (Ue(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || ju(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const t = this.findDeclaration(e);
    if (t?.$cstNode) {
      const r = this.nameProvider.getNameNode(t);
      return r ?? t.$cstNode;
    }
  }
  findReferences(e, t) {
    const r = [];
    if (t.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = i.filter((s) => rt.equals(s.sourceUri, t.documentUri))), r.push(...i), ee(r);
  }
  getReferenceToSelf(e) {
    const t = this.nameProvider.getNameNode(e);
    if (t) {
      const r = Ze(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Sr(t),
        local: !0
      };
    }
  }
}
class Wr {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.add(t, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return bi.sum(ee(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, t) {
    if (t === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(t);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var t;
    return (t = this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, t) {
    if (t === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(t) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((t, r) => t.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ee(this.map.entries()).flatMap(([e, t]) => t.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ee(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ee(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ee(this.map.entries());
  }
}
class Fo {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.set(t, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const t = this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), !0) : !1;
  }
}
class cm {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, t = V.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, t, r = ks, i = V.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, t);
    for (const a of r(e))
      await Ae(i), this.exportNode(a, s, t);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, t, r) {
    const i = this.nameProvider.getName(e);
    i && t.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, t = V.CancellationToken.None) {
    const r = e.parseResult.value, i = new Wr();
    for (const s of Dn(r))
      await Ae(t), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, t, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, t));
    }
  }
}
class Go {
  constructor(e, t, r) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const t = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (t)
      return t;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
}
class um {
  constructor(e, t, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
    for (const s of e) {
      const a = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    const t = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(t);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ee(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class Pc {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class dm extends Pc {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (t) {
      const r = t();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class fm extends Pc {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, r);
  }
  get(e, t, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(t))
      return i.get(t);
    if (r) {
      const s = r();
      return i.set(t, s), s;
    } else
      return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const t = this.converter(e);
      this.cache.delete(t);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const t = this.converter(e);
    let r = this.cache.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(t, r)), r;
  }
}
class hm extends dm {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, t) {
    super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class pm {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new hm(e.shared);
  }
  getScope(e) {
    const t = [], r = this.reflection.getReferenceType(e), i = Ze(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && t.push(ee(o).filter((l) => this.reflection.isSubtype(l.type, r))), a = a.$container;
      } while (a);
    }
    let s = this.getGlobalScope(r, e);
    for (let a = t.length - 1; a >= 0; a--)
      s = this.createScope(t[a], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, t, r) {
    return new Go(ee(e), t, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, t, r) {
    const i = ee(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new Go(i, t, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new um(this.indexManager.allElements(e)));
  }
}
function mm(n) {
  return typeof n.$comment == "string";
}
function Uo(n) {
  return typeof n == "object" && !!n && ("$ref" in n || "$error" in n);
}
class gm {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    const r = t ?? {}, i = t?.replacer, s = (o, l) => this.replacer(o, l, r), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = Ze(e), JSON.stringify(e, a, t?.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    const r = t ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, t, { refText: r, sourceText: i, textRegions: s, comments: a, uriConverter: o }) {
    var l, c, u, d;
    if (!this.ignoreProperties.has(e))
      if (Ue(t)) {
        const h = t.ref, f = r ? t.$refText : void 0;
        if (h) {
          const m = Ze(h);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, t) : g = m.uri.toString());
          const v = this.astNodeLocator.getAstNodePath(h);
          return {
            $ref: `${g}#${v}`,
            $refText: f
          };
        } else
          return {
            $error: (c = (l = t.error) === null || l === void 0 ? void 0 : l.message) !== null && c !== void 0 ? c : "Could not resolve reference",
            $refText: f
          };
      } else if (ae(t)) {
        let h;
        if (s && (h = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t)), (!e || t.$document) && h?.$textRegion && (h.$textRegion.documentURI = (u = this.currentDocument) === null || u === void 0 ? void 0 : u.uri.toString())), i && !e && (h ?? (h = Object.assign({}, t)), h.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), a) {
          h ?? (h = Object.assign({}, t));
          const f = this.commentProvider.getComment(t);
          f && (h.$comment = f.replace(/\r/g, ""));
        }
        return h ?? t;
      } else
        return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const t = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = t(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a = wd(e.$cstNode, s).map(t);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, t, r, i, s, a) {
    for (const [l, c] of Object.entries(e))
      if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
          const d = c[u];
          Uo(d) ? c[u] = this.reviveReference(e, l, t, d, r) : ae(d) && this.linkNode(d, t, r, e, l, u);
        }
      else Uo(c) ? e[l] = this.reviveReference(e, l, t, c, r) : ae(c) && this.linkNode(c, t, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, t, r, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ae(l))
        return a || (a = this.nameProvider.getName(l)), {
          $refText: a ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a ?? ""
      };
      return l.error = {
        container: e,
        property: t,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, t, r) {
    try {
      const i = t.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, t.substring(1));
        return l || "Could not resolve path: " + t;
      }
      if (i < 0) {
        const l = r ? r(t) : gt.parse(t), c = this.langiumDocuments.getDocument(l);
        return c ? c.parseResult.value : "Could not find document for URI: " + t;
      }
      const s = r ? r(t.substring(0, i)) : gt.parse(t.substring(0, i)), a = this.langiumDocuments.getDocument(s);
      if (!a)
        return "Could not find document for URI: " + t;
      if (i === t.length - 1)
        return a.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(i + 1));
      return o || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
}
class ym {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
  }
  register(e) {
    const t = e.LanguageMetaData;
    for (const r of t.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = rt.extname(e), a = this.fileExtensionMap.get(s);
    if (!a)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function xn(n) {
  return { code: n };
}
var jr;
(function(n) {
  n.all = ["fast", "slow", "built-in"];
})(jr || (jr = {}));
class Tm {
  constructor(e) {
    this.entries = new Wr(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, t = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a = s;
      if (Array.isArray(a))
        for (const o of a) {
          const l = {
            check: this.wrapValidationException(o, t),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a == "function") {
        const o = {
          check: this.wrapValidationException(a, t),
          category: r
        };
        this.addEntry(i, o);
      } else
        Mn();
    }
  }
  wrapValidationException(e, t) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(t, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, t, r, i) {
    try {
      await e();
    } catch (s) {
      if (si(s))
        throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a = s instanceof Error ? s.message : String(s);
      r("error", `${t}: ${a}`, { node: i });
    }
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, t);
  }
  getChecks(e, t) {
    let r = ee(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return t && (r = r.filter((i) => t.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, t = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, t = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, r) {
    return async (i, s, a, o) => {
      await this.handleException(() => e.call(r, i, s, a, o), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}
class Rm {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, t = {}, r = V.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await Ae(r), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Oe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, t, r));
    } catch (a) {
      if (si(a))
        throw a;
      console.error("An error occurred during validation:", a);
    }
    return await Ae(r), s;
  }
  processLexingErrors(e, t, r) {
    var i, s, a;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const c = (a = l.severity) !== null && a !== void 0 ? a : "error", u = {
        severity: ki(c),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: Am(c),
        source: this.getSource()
      };
      t.push(u);
    }
  }
  processParsingErrors(e, t, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a = i.previousToken;
          if (isNaN(a.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a.endLine - 1, character: a.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = Mi(i.token);
      if (s) {
        const a = {
          severity: ki("error"),
          range: s,
          message: i.message,
          data: xn(Oe.ParsingError),
          source: this.getSource()
        };
        t.push(a);
      }
    }
  }
  processLinkingErrors(e, t, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Oe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(this.toDiagnostic("error", s.message, a));
      }
    }
  }
  async validateAst(e, t, r = V.CancellationToken.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, t, s, r), await this.validateAstNodes(e, t, s, r), await this.validateAstAfter(e, t, s, r), i;
  }
  async validateAstBefore(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, r, i = V.CancellationToken.None) {
    await Promise.all($t(e).map(async (s) => {
      await Ae(i);
      const a = this.validationRegistry.getChecks(s.$type, t.categories);
      for (const o of a)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, r) {
    return {
      message: t,
      range: vm(r),
      severity: ki(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function vm(n) {
  if (n.range)
    return n.range;
  let e;
  return typeof n.property == "string" ? e = Sl(n.node.$cstNode, n.property, n.index) : typeof n.keyword == "string" && (e = _d(n.node.$cstNode, n.keyword, n.index)), e ?? (e = n.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function ki(n) {
  switch (n) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
function Am(n) {
  switch (n) {
    case "error":
      return xn(Oe.LexingError);
    case "warning":
      return xn(Oe.LexingWarning);
    case "info":
      return xn(Oe.LexingInfo);
    case "hint":
      return xn(Oe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
var Oe;
(function(n) {
  n.LexingError = "lexing-error", n.LexingWarning = "lexing-warning", n.LexingInfo = "lexing-info", n.LexingHint = "lexing-hint", n.ParsingError = "parsing-error", n.LinkingError = "linking-error";
})(Oe || (Oe = {}));
class Em {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, r) {
    const i = r ?? Ze(e);
    t ?? (t = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!t)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Sr((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o();
      },
      selectionSegment: Sr(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class km {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, t = V.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of $t(i))
      await Ae(t), Rl(s).filter((a) => !lr(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const t = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!t || !r)
      return;
    const i = Ze(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: Sr(r),
      local: rt.equals(t.documentUri, i)
    };
  }
}
class Sm {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const t = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return t + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: t }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a = s.indexOf(this.indexSeparator);
      if (a > 0) {
        const o = s.substring(0, a), l = parseInt(s.substring(a + 1)), c = i[o];
        return c?.[l];
      }
      return i[s];
    }, e);
  }
}
var xm = _c();
class Im {
  constructor(e) {
    this._ready = new Bs(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new xm.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, r;
    this.workspaceConfig = (r = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && r !== void 0 ? r : !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const t = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: t.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const t = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      const r = e.settings[t];
      this.updateSectionConfiguration(t, r), this.onConfigurationSectionUpdateEmitter.fire({ section: t, configuration: r });
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, t) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var wn;
(function(n) {
  function e(t) {
    return {
      dispose: async () => await t()
    };
  }
  n.create = e;
})(wn || (wn = {}));
class Cm {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new Wr(), this.documentPhaseListeners = new Wr(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = U.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, t = {}, r = V.CancellationToken.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === U.Validated) {
        if (typeof t.validation == "boolean" && t.validation)
          a.state = U.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof t.validation == "object") {
          const l = this.buildState.get(o), c = (i = l?.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (c) {
            const d = ((s = t.validation.categories) !== null && s !== void 0 ? s : jr.all).filter((h) => !c.includes(h));
            d.length > 0 && (this.buildState.set(o, {
              completed: !1,
              options: {
                validation: Object.assign(Object.assign({}, t.validation), { categories: d })
              },
              result: l.result
            }), a.state = U.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = U.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, t, r);
  }
  async update(e, t, r = V.CancellationToken.None) {
    this.currentState = U.Changed;
    for (const a of t)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        l.state = U.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a.toString());
    }
    const i = ee(e).concat(t).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, U.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await Ae(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < U.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, t) {
    await Promise.all(this.updateListeners.map((r) => r(e, t)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let t = 0, r = e.length - 1;
    for (; t < r; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); )
        t++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      t < r && ([e[t], e[r]] = [e[r], e[t]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, t) {
    return e.references.some((r) => r.error !== void 0) ? !0 : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), wn.create(() => {
      const t = this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, t, r) {
    this.prepareBuild(e, t), await this.runCancelable(e, U.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, U.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, U.ComputedScopes, r, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, r);
    }), await this.runCancelable(e, U.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, U.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, U.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a = this.buildState.get(s.uri.toString());
      a && (a.completed = !0);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, t) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: !1,
        options: t,
        result: s?.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, t, r, i) {
    const s = e.filter((o) => o.state < t);
    for (const o of s)
      await Ae(r), await i(o), o.state = t, await this.notifyDocumentPhase(o, t, r);
    const a = e.filter((o) => o.state === t);
    await this.notifyBuildPhase(a, t, r), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), wn.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), wn.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, r) {
    let i;
    if (t && "path" in t ? i = t : r = t, r ?? (r = V.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(Vr) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const c = this.langiumDocuments.getDocument(i);
          s(c?.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(Vr);
      });
    });
  }
  async notifyDocumentPhase(e, t, r) {
    const s = this.documentPhaseListeners.get(t).slice();
    for (const a of s)
      try {
        await a(e, r);
      } catch (o) {
        if (!si(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, t, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(t).slice();
    for (const a of s)
      await Ae(r), await a(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, t) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e).validation, o = typeof a == "object" ? a : void 0, l = await s.validateDocument(e, o, t);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const c = this.buildState.get(e.uri.toString());
    if (c) {
      (r = c.result) !== null && r !== void 0 || (c.result = {});
      const u = (i = o?.categories) !== null && i !== void 0 ? i : jr.all;
      c.result.validationChecks ? c.result.validationChecks.push(...u) : c.result.validationChecks = [...u];
    }
  }
  getBuildOptions(e) {
    var t, r;
    return (r = (t = this.buildState.get(e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && r !== void 0 ? r : {};
  }
}
class $m {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new fm(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    const r = Ze(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        rt.equals(a.targetUri, r) && a.targetPath === t && i.push(a);
      });
    }), ee(i);
  }
  allElements(e, t) {
    let r = ee(this.symbolIndex.keys());
    return t && (r = r.filter((i) => !t || t.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var r;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, t));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const t = e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, t) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && t.has(i.targetUri.toString())) : !1;
  }
}
class Nm {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Bs(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], t);
    });
  }
  async initializeWorkspace(e, t = V.CancellationToken.None) {
    const r = await this.performStartup(e);
    await Ae(t), await this.documentBuilder.build(r, this.initialBuildOptions, t);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const t = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return gt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, t, r, i) {
    const s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(s.map(async (a) => {
      if (this.includeEntry(e, a, r)) {
        if (a.isDirectory)
          await this.traverseFolder(e, a.uri, r, i);
        else if (a.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, t, r) {
    const i = rt.basename(t.uri);
    if (i.startsWith("."))
      return !1;
    if (t.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      const s = rt.extname(t.uri);
      return r.includes(s);
    }
    return !1;
  }
}
class wm {
  buildUnexpectedCharactersMessage(e, t, r, i, s) {
    return Vi.buildUnexpectedCharactersMessage(e, t, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return Vi.buildUnableToPopLexerModeMessage(e);
  }
}
const _m = { mode: "full" };
class Lm {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const t = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(t);
    const r = Bo(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new de(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, t = _m) {
    var r, i, s;
    const a = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a.tokens,
      errors: a.errors,
      hidden: (r = a.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (Bo(e))
      return e;
    const t = Mc(e) ? Object.values(e.modes).flat() : e, r = {};
    return t.forEach((i) => r[i.name] = i), r;
  }
}
function Om(n) {
  return Array.isArray(n) && (n.length === 0 || "name" in n[0]);
}
function Mc(n) {
  return n && "modes" in n && "defaultMode" in n;
}
function Bo(n) {
  return !Om(n) && !Mc(n);
}
function bm(n, e, t) {
  let r, i;
  typeof n == "string" ? (i = e, r = t) : (i = n.range.start, r = e), i || (i = P.create(0, 0));
  const s = Dc(n), a = Vs(r), o = Dm({
    lines: s,
    position: i,
    options: a
  });
  return Vm({
    index: 0,
    tokens: o,
    position: i
  });
}
function Pm(n, e) {
  const t = Vs(e), r = Dc(n);
  if (r.length === 0)
    return !1;
  const i = r[0], s = r[r.length - 1], a = t.start, o = t.end;
  return !!a?.exec(i) && !!o?.exec(s);
}
function Dc(n) {
  let e = "";
  return typeof n == "string" ? e = n : e = n.text, e.split(Td);
}
const Vo = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, Mm = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function Dm(n) {
  var e, t, r;
  const i = [];
  let s = n.position.line, a = n.position.character;
  for (let o = 0; o < n.lines.length; o++) {
    const l = o === 0, c = o === n.lines.length - 1;
    let u = n.lines[o], d = 0;
    if (l && n.options.start) {
      const f = (e = n.options.start) === null || e === void 0 ? void 0 : e.exec(u);
      f && (d = f.index + f[0].length);
    } else {
      const f = (t = n.options.line) === null || t === void 0 ? void 0 : t.exec(u);
      f && (d = f.index + f[0].length);
    }
    if (c) {
      const f = (r = n.options.end) === null || r === void 0 ? void 0 : r.exec(u);
      f && (u = u.substring(0, f.index));
    }
    if (u = u.substring(0, Bm(u)), ps(u, d) >= u.length) {
      if (i.length > 0) {
        const f = P.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: b.create(f, f)
        });
      }
    } else {
      Vo.lastIndex = d;
      const f = Vo.exec(u);
      if (f) {
        const m = f[0], g = f[1], v = P.create(s, a + d), T = P.create(s, a + d + m.length);
        i.push({
          type: "tag",
          content: g,
          range: b.create(v, T)
        }), d += m.length, d = ps(u, d);
      }
      if (d < u.length) {
        const m = u.substring(d), g = Array.from(m.matchAll(Mm));
        i.push(...Fm(g, m, s, a + d));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function Fm(n, e, t, r) {
  const i = [];
  if (n.length === 0) {
    const s = P.create(t, r), a = P.create(t, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: b.create(s, a)
    });
  } else {
    let s = 0;
    for (const o of n) {
      const l = o.index, c = e.substring(s, l);
      c.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: b.create(P.create(t, s + r), P.create(t, l + r))
      });
      let u = c.length + 1;
      const d = o[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: b.create(P.create(t, s + u + r), P.create(t, s + u + d.length + r))
      }), u += d.length, o.length === 4) {
        u += o[2].length;
        const h = o[3];
        i.push({
          type: "text",
          content: h,
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + h.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + r))
        });
      s = l + o[0].length;
    }
    const a = e.substring(s);
    a.length > 0 && i.push({
      type: "text",
      content: a,
      range: b.create(P.create(t, s + r), P.create(t, s + r + a.length))
    });
  }
  return i;
}
const Gm = /\S/, Um = /\s*$/;
function ps(n, e) {
  const t = n.substring(e).match(Gm);
  return t ? e + t.index : n.length;
}
function Bm(n) {
  const e = n.match(Um);
  if (e && typeof e.index == "number")
    return e.index;
}
function Vm(n) {
  var e, t, r, i;
  const s = P.create(n.position.line, n.position.character);
  if (n.tokens.length === 0)
    return new Wo([], b.create(s, s));
  const a = [];
  for (; n.index < n.tokens.length; ) {
    const c = Wm(n, a[a.length - 1]);
    c && a.push(c);
  }
  const o = (t = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, l = (i = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new Wo(a, b.create(o, l));
}
function Wm(n, e) {
  const t = n.tokens[n.index];
  if (t.type === "tag")
    return Gc(n, !1);
  if (t.type === "text" || t.type === "inline-tag")
    return Fc(n);
  jm(t, e), n.index++;
}
function jm(n, e) {
  if (e) {
    const t = new Bc("", n.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
function Fc(n) {
  let e = n.tokens[n.index];
  const t = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(Km(n)), r = e, e = n.tokens[n.index];
  return new ms(i, b.create(t.range.start, r.range.end));
}
function Km(n) {
  return n.tokens[n.index].type === "inline-tag" ? Gc(n, !0) : Uc(n);
}
function Gc(n, e) {
  const t = n.tokens[n.index++], r = t.content.substring(1), i = n.tokens[n.index];
  if (i?.type === "text")
    if (e) {
      const s = Uc(n);
      return new xi(r, new ms([s], s.range), e, b.create(t.range.start, s.range.end));
    } else {
      const s = Fc(n);
      return new xi(r, s, e, b.create(t.range.start, s.range.end));
    }
  else {
    const s = t.range;
    return new xi(r, new ms([], s), e, s);
  }
}
function Uc(n) {
  const e = n.tokens[n.index++];
  return new Bc(e.content, e.range);
}
function Vs(n) {
  if (!n)
    return Vs({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: t, line: r } = n;
  return {
    start: Si(e, !0),
    end: Si(t, !1),
    line: Si(r, !0)
  };
}
function Si(n, e) {
  if (typeof n == "string" || typeof n == "object") {
    const t = typeof n == "string" ? Jr(n) : n.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else
    return n;
}
class Wo {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const t of this.elements)
      if (e.length === 0)
        e = t.toString();
      else {
        const r = t.toString();
        e += jo(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (const r of this.elements)
      if (t.length === 0)
        t = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        t += jo(t) + i;
      }
    return t.trim();
  }
}
class xi {
  constructor(e, t, r, i) {
    this.name = e, this.content = t, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const t = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, r;
    return (r = (t = e?.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const t = this.content.toMarkdown(e);
    if (this.inline) {
      const s = Hm(this.name, t, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    e?.tag === "italic" || e?.tag === void 0 ? r = "*" : e?.tag === "bold" ? r = "**" : e?.tag === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
}
function Hm(n, e, t) {
  var r, i;
  if (n === "linkplain" || n === "linkcode" || n === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const l = ps(e, s);
      a = e.substring(l), e = e.substring(0, s);
    }
    return (n === "linkcode" || n === "link" && t.link === "code") && (a = `\`${a}\``), (i = (r = t.renderLink) === null || r === void 0 ? void 0 : r.call(t, e, a)) !== null && i !== void 0 ? i : zm(e, a);
  }
}
function zm(n, e) {
  try {
    return gt.parse(n, !0), `[${e}](${n})`;
  } catch {
    return n;
  }
}
class ms {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      const r = this.inlines[t], i = this.inlines[t + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      t += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
}
class Bc {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function jo(n) {
  return n.endsWith(`
`) ? `
` : `

`;
}
class qm {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const t = this.commentProvider.getComment(e);
    if (t && Pm(t))
      return bm(t).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, t, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      const a = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    const i = Ze(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === t);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((i) => i.name === t);
  }
}
class Ym {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return mm(e) ? e.$comment : (t = qu(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
}
class Xm {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class Jm {
  constructor() {
    this.previousTokenSource = new V.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const t = tm();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, r = V.CancellationToken.None) {
    const i = new Bs(), s = {
      action: t,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: t, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => t(i));
        r.resolve(s);
      } catch (s) {
        si(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class Qm {
  constructor(e) {
    this.grammarElementIdMap = new Fo(), this.tokenTypeIdMap = new Fo(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((t) => Object.assign(Object.assign({}, t), { message: t.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of $t(e))
      t.set(i, {});
    if (e.$cstNode)
      for (const i of Pi(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.dehydrateAstNode(o, t)) : Ue(o) ? a.push(this.dehydrateReference(o, t)) : a.push(o);
        } else ae(s) ? r[i] = this.dehydrateAstNode(s, t) : Ue(s) ? r[i] = this.dehydrateReference(s, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, t) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = t.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, t) {
    const r = t.cstNodes.get(e);
    return dl(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = t.astNodes.get(e.astNode), Ln(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, t)) : ul(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const t = e.value, r = this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(t, r)
    };
  }
  createHydrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of $t(e))
      t.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Pi(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new vc(s.fullText), i = a) : "content" in s ? a = new Gs() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (r.set(s, a), a.root = i);
      }
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  hydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = t.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ae(o) ? a.push(this.setParent(this.hydrateAstNode(o, t), r)) : Ue(o) ? a.push(this.hydrateReference(o, r, i, t)) : a.push(o);
        } else ae(s) ? r[i] = this.setParent(this.hydrateAstNode(s, t), r) : Ue(s) ? r[i] = this.hydrateReference(s, r, i, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, r, i) {
    return this.linker.buildReference(t, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t, r = 0) {
    const i = t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = t.astNodes.get(e.astNode), Ln(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, t, r++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const t = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, c = e.hidden;
    return new cs(r, i, {
      start: {
        line: s,
        character: a
      },
      end: {
        line: o,
        character: l
      }
    }, t, c);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const t of $t(this.grammar))
      Xu(t) && this.grammarElementIdMap.set(t, e++);
  }
}
function vt(n) {
  return {
    documentation: {
      CommentProvider: (e) => new Ym(e),
      DocumentationProvider: (e) => new qm(e)
    },
    parser: {
      AsyncParser: (e) => new Xm(e),
      GrammarConfig: (e) => Bd(e),
      LangiumParser: (e) => Yp(e),
      CompletionParser: (e) => qp(e),
      ValueConverter: () => new Nc(),
      TokenBuilder: () => new $c(),
      Lexer: (e) => new Lm(e),
      ParserErrorMessageProvider: () => new kc(),
      LexerErrorMessageProvider: () => new wm()
    },
    workspace: {
      AstNodeLocator: () => new Sm(),
      AstNodeDescriptionProvider: (e) => new Em(e),
      ReferenceDescriptionProvider: (e) => new km(e)
    },
    references: {
      Linker: (e) => new sm(e),
      NameProvider: () => new om(),
      ScopeProvider: (e) => new pm(e),
      ScopeComputation: (e) => new cm(e),
      References: (e) => new lm(e)
    },
    serializer: {
      Hydrator: (e) => new Qm(e),
      JsonSerializer: (e) => new gm(e)
    },
    validation: {
      DocumentValidator: (e) => new Rm(e),
      ValidationRegistry: (e) => new Tm(e)
    },
    shared: () => n.shared
  };
}
function At(n) {
  return {
    ServiceRegistry: (e) => new ym(e),
    workspace: {
      LangiumDocuments: (e) => new im(e),
      LangiumDocumentFactory: (e) => new rm(e),
      DocumentBuilder: (e) => new Cm(e),
      IndexManager: (e) => new $m(e),
      WorkspaceManager: (e) => new Nm(e),
      FileSystemProvider: (e) => n.fileSystemProvider(e),
      WorkspaceLock: () => new Jm(),
      ConfigurationProvider: (e) => new Im(e)
    }
  };
}
var Ko;
(function(n) {
  n.merge = (e, t) => Kr(Kr({}, e), t);
})(Ko || (Ko = {}));
function pe(n, e, t, r, i, s, a, o, l) {
  const c = [n, e, t, r, i, s, a, o, l].reduce(Kr, {});
  return Vc(c);
}
const Zm = Symbol("isProxy");
function Vc(n, e) {
  const t = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === Zm ? !0 : zo(r, i, n, e || t),
    getOwnPropertyDescriptor: (r, i) => (zo(r, i, n, e || t), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in n,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(n)]
    // used by for..in
  });
  return t;
}
const Ho = Symbol();
function zo(n, e, t, r) {
  if (e in n) {
    if (n[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: n[e] });
    if (n[e] === Ho)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return n[e];
  } else if (e in t) {
    const i = t[e];
    n[e] = Ho;
    try {
      n[e] = typeof i == "function" ? i(r) : Vc(i, r);
    } catch (s) {
      throw n[e] = s instanceof Error ? s : void 0, s;
    }
    return n[e];
  } else
    return;
}
function Kr(n, e) {
  if (e) {
    for (const [t, r] of Object.entries(e))
      if (r !== void 0) {
        const i = n[t];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? n[t] = Kr(i, r) : n[t] = r;
      }
  }
  return n;
}
class eg {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const Et = {
  fileSystemProvider: () => new eg()
}, tg = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, ng = {
  AstReflection: () => new Tl()
};
function rg() {
  const n = pe(At(Et), ng), e = pe(vt({ shared: n }), tg);
  return n.ServiceRegistry.register(e), e;
}
function Vt(n) {
  var e;
  const t = rg(), r = t.serializer.JsonSerializer.deserialize(n);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(r, gt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var ig = Object.defineProperty, E = (n, e) => ig(n, "name", { value: e, configurable: !0 }), qo = "Statement", gr = "Architecture";
function sg(n) {
  return De.isInstance(n, gr);
}
E(sg, "isArchitecture");
var ir = "Axis", In = "Branch";
function ag(n) {
  return De.isInstance(n, In);
}
E(ag, "isBranch");
var sr = "Checkout", ar = "CherryPicking", Cn = "Commit";
function og(n) {
  return De.isInstance(n, Cn);
}
E(og, "isCommit");
var yr = "Common";
function lg(n) {
  return De.isInstance(n, yr);
}
E(lg, "isCommon");
var Ii = "Curve", Ci = "Edge", $i = "Entry", $n = "GitGraph";
function cg(n) {
  return De.isInstance(n, $n);
}
E(cg, "isGitGraph");
var Ni = "Group", Tr = "Info";
function ug(n) {
  return De.isInstance(n, Tr);
}
E(ug, "isInfo");
var wi = "Junction", Nn = "Merge";
function dg(n) {
  return De.isInstance(n, Nn);
}
E(dg, "isMerge");
var _i = "Option", Rr = "Packet";
function fg(n) {
  return De.isInstance(n, Rr);
}
E(fg, "isPacket");
var vr = "PacketBlock";
function hg(n) {
  return De.isInstance(n, vr);
}
E(hg, "isPacketBlock");
var Ar = "Pie";
function pg(n) {
  return De.isInstance(n, Ar);
}
E(pg, "isPie");
var Er = "PieSection";
function mg(n) {
  return De.isInstance(n, Er);
}
E(mg, "isPieSection");
var Li = "Radar", Oi = "Service", or = "Direction", Wc = class extends cl {
  static {
    E(this, "MermaidAstReflection");
  }
  getAllTypes() {
    return [gr, ir, In, sr, ar, Cn, yr, Ii, or, Ci, $i, $n, Ni, Tr, wi, Nn, _i, Rr, vr, Ar, Er, Li, Oi, qo];
  }
  computeIsSubtype(n, e) {
    switch (n) {
      case In:
      case sr:
      case ar:
      case Cn:
      case Nn:
        return this.isSubtype(qo, e);
      case or:
        return this.isSubtype($n, e);
      default:
        return !1;
    }
  }
  getReferenceType(n) {
    const e = `${n.container.$type}:${n.property}`;
    switch (e) {
      case "Entry:axis":
        return ir;
      default:
        throw new Error(`${e} is not a valid reference id.`);
    }
  }
  getTypeMetaData(n) {
    switch (n) {
      case gr:
        return {
          name: gr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case ir:
        return {
          name: ir,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case In:
        return {
          name: In,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case sr:
        return {
          name: sr,
          properties: [
            { name: "branch" }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case Cn:
        return {
          name: Cn,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case yr:
        return {
          name: yr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case Ii:
        return {
          name: Ii,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case Ci:
        return {
          name: Ci,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: !1 },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: !1 },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: !1 },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case $i:
        return {
          name: $i,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case $n:
        return {
          name: $n,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ni:
        return {
          name: Ni,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Tr:
        return {
          name: Tr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case wi:
        return {
          name: wi,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case Nn:
        return {
          name: Nn,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case _i:
        return {
          name: _i,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: !1 }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case vr:
        return {
          name: vr,
          properties: [
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case Er:
        return {
          name: Er,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case Li:
        return {
          name: Li,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Oi:
        return {
          name: Oi,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      default:
        return {
          name: n,
          properties: []
        };
    }
  }
}, De = new Wc(), Yo, gg = /* @__PURE__ */ E(() => Yo ?? (Yo = Vt('{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "InfoGrammar"), Xo, yg = /* @__PURE__ */ E(() => Xo ?? (Xo = Vt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), Jo, Tg = /* @__PURE__ */ E(() => Jo ?? (Jo = Vt('{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "PieGrammar"), Qo, Rg = /* @__PURE__ */ E(() => Qo ?? (Qo = Vt('{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "ArchitectureGrammar"), Zo, vg = /* @__PURE__ */ E(() => Zo ?? (Zo = Vt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), el, Ag = /* @__PURE__ */ E(() => el ?? (el = Vt(`{"$type":"Grammar","isDeclared":true,"name":"Radar","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@12"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@12"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9\\\\-_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Eg = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, kg = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Sg = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, xg = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Ig = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Cg = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Wt = {
  AstReflection: /* @__PURE__ */ E(() => new Wc(), "AstReflection")
}, $g = {
  Grammar: /* @__PURE__ */ E(() => gg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => Eg, "LanguageMetaData"),
  parser: {}
}, Ng = {
  Grammar: /* @__PURE__ */ E(() => yg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => kg, "LanguageMetaData"),
  parser: {}
}, wg = {
  Grammar: /* @__PURE__ */ E(() => Tg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => Sg, "LanguageMetaData"),
  parser: {}
}, _g = {
  Grammar: /* @__PURE__ */ E(() => Rg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => xg, "LanguageMetaData"),
  parser: {}
}, Lg = {
  Grammar: /* @__PURE__ */ E(() => vg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => Ig, "LanguageMetaData"),
  parser: {}
}, Og = {
  Grammar: /* @__PURE__ */ E(() => Ag(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ E(() => Cg, "LanguageMetaData"),
  parser: {}
}, bg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Pg = /accTitle[\t ]*:([^\n\r]*)/, Mg = /title([\t ][^\n\r]*|)/, Dg = {
  ACC_DESCR: bg,
  ACC_TITLE: Pg,
  TITLE: Mg
}, Ws = class extends Nc {
  static {
    E(this, "AbstractMermaidValueConverter");
  }
  runConverter(n, e, t) {
    let r = this.runCommonConverter(n, e, t);
    return r === void 0 && (r = this.runCustomConverter(n, e, t)), r === void 0 ? super.runConverter(n, e, t) : r;
  }
  runCommonConverter(n, e, t) {
    const r = Dg[n.name];
    if (r === void 0)
      return;
    const i = r.exec(e);
    if (i !== null) {
      if (i[1] !== void 0)
        return i[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (i[2] !== void 0)
        return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, ai = class extends Ws {
  static {
    E(this, "CommonValueConverter");
  }
  runCustomConverter(n, e, t) {
  }
}, kt = class extends $c {
  static {
    E(this, "AbstractMermaidTokenBuilder");
  }
  constructor(n) {
    super(), this.keywords = new Set(n);
  }
  buildKeywordTokens(n, e, t) {
    const r = super.buildKeywordTokens(n, e, t);
    return r.forEach((i) => {
      this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), r;
  }
};
(class extends kt {
  static {
    E(this, "CommonTokenBuilder");
  }
});
var Fg = class extends kt {
  static {
    E(this, "GitGraphTokenBuilder");
  }
  constructor() {
    super(["gitGraph"]);
  }
}, jc = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Fg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new ai(), "ValueConverter")
  }
};
function Kc(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    Lg,
    jc
  );
  return e.ServiceRegistry.register(t), { shared: e, GitGraph: t };
}
E(Kc, "createGitGraphServices");
var Gg = class extends kt {
  static {
    E(this, "InfoTokenBuilder");
  }
  constructor() {
    super(["info", "showInfo"]);
  }
}, Hc = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Gg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new ai(), "ValueConverter")
  }
};
function zc(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    $g,
    Hc
  );
  return e.ServiceRegistry.register(t), { shared: e, Info: t };
}
E(zc, "createInfoServices");
var Ug = class extends kt {
  static {
    E(this, "PacketTokenBuilder");
  }
  constructor() {
    super(["packet-beta"]);
  }
}, qc = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Ug(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new ai(), "ValueConverter")
  }
};
function Yc(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    Ng,
    qc
  );
  return e.ServiceRegistry.register(t), { shared: e, Packet: t };
}
E(Yc, "createPacketServices");
var Bg = class extends kt {
  static {
    E(this, "PieTokenBuilder");
  }
  constructor() {
    super(["pie", "showData"]);
  }
}, Vg = class extends Ws {
  static {
    E(this, "PieValueConverter");
  }
  runCustomConverter(n, e, t) {
    if (n.name === "PIE_SECTION_LABEL")
      return e.replace(/"/g, "").trim();
  }
}, Xc = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Bg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new Vg(), "ValueConverter")
  }
};
function Jc(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    wg,
    Xc
  );
  return e.ServiceRegistry.register(t), { shared: e, Pie: t };
}
E(Jc, "createPieServices");
var Wg = class extends kt {
  static {
    E(this, "ArchitectureTokenBuilder");
  }
  constructor() {
    super(["architecture"]);
  }
}, jg = class extends Ws {
  static {
    E(this, "ArchitectureValueConverter");
  }
  runCustomConverter(n, e, t) {
    if (n.name === "ARCH_ICON")
      return e.replace(/[()]/g, "").trim();
    if (n.name === "ARCH_TEXT_ICON")
      return e.replace(/["()]/g, "");
    if (n.name === "ARCH_TITLE")
      return e.replace(/[[\]]/g, "").trim();
  }
}, Qc = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Wg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new jg(), "ValueConverter")
  }
};
function Zc(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    _g,
    Qc
  );
  return e.ServiceRegistry.register(t), { shared: e, Architecture: t };
}
E(Zc, "createArchitectureServices");
var Kg = class extends kt {
  static {
    E(this, "RadarTokenBuilder");
  }
  constructor() {
    super(["radar-beta"]);
  }
}, eu = {
  parser: {
    TokenBuilder: /* @__PURE__ */ E(() => new Kg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ E(() => new ai(), "ValueConverter")
  }
};
function tu(n = Et) {
  const e = pe(
    At(n),
    Wt
  ), t = pe(
    vt({ shared: e }),
    Og,
    eu
  );
  return e.ServiceRegistry.register(t), { shared: e, Radar: t };
}
E(tu, "createRadarServices");
var Qe = {}, Hg = {
  info: /* @__PURE__ */ E(async () => {
    const { createInfoServices: n } = await Promise.resolve().then(() => Yg), e = n().Info.parser.LangiumParser;
    Qe.info = e;
  }, "info"),
  packet: /* @__PURE__ */ E(async () => {
    const { createPacketServices: n } = await Promise.resolve().then(() => Xg), e = n().Packet.parser.LangiumParser;
    Qe.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ E(async () => {
    const { createPieServices: n } = await Promise.resolve().then(() => Jg), e = n().Pie.parser.LangiumParser;
    Qe.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ E(async () => {
    const { createArchitectureServices: n } = await Promise.resolve().then(() => Qg), e = n().Architecture.parser.LangiumParser;
    Qe.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ E(async () => {
    const { createGitGraphServices: n } = await Promise.resolve().then(() => Zg), e = n().GitGraph.parser.LangiumParser;
    Qe.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ E(async () => {
    const { createRadarServices: n } = await Promise.resolve().then(() => ey), e = n().Radar.parser.LangiumParser;
    Qe.radar = e;
  }, "radar")
};
async function zg(n, e) {
  const t = Hg[n];
  if (!t)
    throw new Error(`Unknown diagram type: ${n}`);
  Qe[n] || await t();
  const i = Qe[n].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new qg(i);
  return i.value;
}
E(zg, "parse");
var qg = class extends Error {
  constructor(n) {
    const e = n.lexerErrors.map((r) => r.message).join(`
`), t = n.parserErrors.map((r) => r.message).join(`
`);
    super(`Parsing failed: ${e} ${t}`), this.result = n;
  }
  static {
    E(this, "MermaidParseError");
  }
};
const Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: Hc,
  createInfoServices: zc
}, Symbol.toStringTag, { value: "Module" })), Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: qc,
  createPacketServices: Yc
}, Symbol.toStringTag, { value: "Module" })), Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: Xc,
  createPieServices: Jc
}, Symbol.toStringTag, { value: "Module" })), Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: Qc,
  createArchitectureServices: Zc
}, Symbol.toStringTag, { value: "Module" })), Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: jc,
  createGitGraphServices: Kc
}, Symbol.toStringTag, { value: "Module" })), ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: eu,
  createRadarServices: tu
}, Symbol.toStringTag, { value: "Module" }));
export {
  zg as p
};
