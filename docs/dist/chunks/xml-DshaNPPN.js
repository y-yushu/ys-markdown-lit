import { g as zt } from "./_commonjsHelpers-C6fGbg64.js";
var he, Be;
function Wt() {
  if (Be) return he;
  Be = 1;
  function A(e) {
    return e instanceof Map ? e.clear = e.delete = e.set = function() {
      throw new Error("map is read-only");
    } : e instanceof Set && (e.add = e.clear = e.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
      const s = e[t], u = typeof s;
      (u === "object" || u === "function") && !Object.isFrozen(s) && A(s);
    }), e;
  }
  class y {
    /**
     * @param {CompiledMode} mode
     */
    constructor(t) {
      t.data === void 0 && (t.data = {}), this.data = t.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function D(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function T(e, ...t) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const u in e)
      s[u] = e[u];
    return t.forEach(function(u) {
      for (const E in u)
        s[E] = u[E];
    }), /** @type {T} */
    s;
  }
  const z = "</span>", m = (e) => !!e.scope, F = (e, { prefix: t }) => {
    if (e.startsWith("language:"))
      return e.replace("language:", "language-");
    if (e.includes(".")) {
      const s = e.split(".");
      return [
        `${t}${s.shift()}`,
        ...s.map((u, E) => `${u}${"_".repeat(E + 1)}`)
      ].join(" ");
    }
    return `${t}${e}`;
  };
  class Y {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(t, s) {
      this.buffer = "", this.classPrefix = s.classPrefix, t.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(t) {
      this.buffer += D(t);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(t) {
      if (!m(t)) return;
      const s = F(
        t.scope,
        { prefix: this.classPrefix }
      );
      this.span(s);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(t) {
      m(t) && (this.buffer += z);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(t) {
      this.buffer += `<span class="${t}">`;
    }
  }
  const U = (e = {}) => {
    const t = { children: [] };
    return Object.assign(t, e), t;
  };
  class C {
    constructor() {
      this.rootNode = U(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(t) {
      this.top.children.push(t);
    }
    /** @param {string} scope */
    openNode(t) {
      const s = U({ scope: t });
      this.add(s), this.stack.push(s);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(t) {
      return this.constructor._walk(t, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(t, s) {
      return typeof s == "string" ? t.addText(s) : s.children && (t.openNode(s), s.children.forEach((u) => this._walk(t, u)), t.closeNode(s)), t;
    }
    /**
     * @param {Node} node
     */
    static _collapse(t) {
      typeof t != "string" && t.children && (t.children.every((s) => typeof s == "string") ? t.children = [t.children.join("")] : t.children.forEach((s) => {
        C._collapse(s);
      }));
    }
  }
  class Pe extends C {
    /**
     * @param {*} options
     */
    constructor(t) {
      super(), this.options = t;
    }
    /**
     * @param {string} text
     */
    addText(t) {
      t !== "" && this.add(t);
    }
    /** @param {string} scope */
    startScope(t) {
      this.openNode(t);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(t, s) {
      const u = t.root;
      s && (u.scope = `language:${s}`), this.add(u);
    }
    toHTML() {
      return new Y(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function W(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function de(e) {
    return B("(?=", e, ")");
  }
  function He(e) {
    return B("(?:", e, ")*");
  }
  function me(e) {
    return B("(?:", e, ")?");
  }
  function B(...e) {
    return e.map((s) => W(s)).join("");
  }
  function Ue(e) {
    const t = e[e.length - 1];
    return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
  }
  function se(...e) {
    return "(" + (Ue(e).capture ? "" : "?:") + e.map((u) => W(u)).join("|") + ")";
  }
  function pe(e) {
    return new RegExp(e.toString() + "|").exec("").length - 1;
  }
  function Ge(e, t) {
    const s = e && e.exec(t);
    return s && s.index === 0;
  }
  const $e = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function ie(e, { joinWith: t }) {
    let s = 0;
    return e.map((u) => {
      s += 1;
      const E = s;
      let _ = W(u), c = "";
      for (; _.length > 0; ) {
        const r = $e.exec(_);
        if (!r) {
          c += _;
          break;
        }
        c += _.substring(0, r.index), _ = _.substring(r.index + r[0].length), r[0][0] === "\\" && r[1] ? c += "\\" + String(Number(r[1]) + E) : (c += r[0], r[0] === "(" && s++);
      }
      return c;
    }).map((u) => `(${u})`).join(t);
  }
  const ze = /\b\B/, be = "[a-zA-Z]\\w*", re = "[a-zA-Z_]\\w*", Ee = "\\b\\d+(\\.\\d+)?", _e = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Me = "\\b(0b[01]+)", We = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Ke = (e = {}) => {
    const t = /^#![ ]*\//;
    return e.binary && (e.begin = B(
      t,
      /.*\b/,
      e.binary,
      /\b.*/
    )), T({
      scope: "meta",
      begin: t,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (s, u) => {
        s.index !== 0 && u.ignoreMatch();
      }
    }, e);
  }, K = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, Xe = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [K]
  }, Fe = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [K]
  }, Ye = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, Z = function(e, t, s = {}) {
    const u = T(
      {
        scope: "comment",
        begin: e,
        end: t,
        contains: []
      },
      s
    );
    u.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const E = se(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return u.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: B(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          E,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), u;
  }, Ze = Z("//", "$"), qe = Z("/\\*", "\\*/"), Je = Z("#", "$"), Qe = {
    scope: "number",
    begin: Ee,
    relevance: 0
  }, Ve = {
    scope: "number",
    begin: _e,
    relevance: 0
  }, et = {
    scope: "number",
    begin: Me,
    relevance: 0
  }, tt = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      K,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [K]
      }
    ]
  }, nt = {
    scope: "title",
    begin: be,
    relevance: 0
  }, st = {
    scope: "title",
    begin: re,
    relevance: 0
  }, it = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + re,
    relevance: 0
  };
  var q = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: Xe,
    BACKSLASH_ESCAPE: K,
    BINARY_NUMBER_MODE: et,
    BINARY_NUMBER_RE: Me,
    COMMENT: Z,
    C_BLOCK_COMMENT_MODE: qe,
    C_LINE_COMMENT_MODE: Ze,
    C_NUMBER_MODE: Ve,
    C_NUMBER_RE: _e,
    END_SAME_AS_BEGIN: function(e) {
      return Object.assign(
        e,
        {
          /** @type {ModeCallback} */
          "on:begin": (t, s) => {
            s.data._beginMatch = t[1];
          },
          /** @type {ModeCallback} */
          "on:end": (t, s) => {
            s.data._beginMatch !== t[1] && s.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Je,
    IDENT_RE: be,
    MATCH_NOTHING_RE: ze,
    METHOD_GUARD: it,
    NUMBER_MODE: Qe,
    NUMBER_RE: Ee,
    PHRASAL_WORDS_MODE: Ye,
    QUOTE_STRING_MODE: Fe,
    REGEXP_MODE: tt,
    RE_STARTERS_RE: We,
    SHEBANG: Ke,
    TITLE_MODE: nt,
    UNDERSCORE_IDENT_RE: re,
    UNDERSCORE_TITLE_MODE: st
  });
  function rt(e, t) {
    e.input[e.index - 1] === "." && t.ignoreMatch();
  }
  function ct(e, t) {
    e.className !== void 0 && (e.scope = e.className, delete e.className);
  }
  function ot(e, t) {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = rt, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
  }
  function at(e, t) {
    Array.isArray(e.illegal) && (e.illegal = se(...e.illegal));
  }
  function lt(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw new Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match;
    }
  }
  function ut(e, t) {
    e.relevance === void 0 && (e.relevance = 1);
  }
  const gt = (e, t) => {
    if (!e.beforeMatch) return;
    if (e.starts) throw new Error("beforeMatch cannot be used with starts");
    const s = Object.assign({}, e);
    Object.keys(e).forEach((u) => {
      delete e[u];
    }), e.keywords = s.keywords, e.begin = B(s.beforeMatch, de(s.begin)), e.starts = {
      relevance: 0,
      contains: [
        Object.assign(s, { endsParent: !0 })
      ]
    }, e.relevance = 0, delete s.beforeMatch;
  }, ft = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], ht = "keyword";
  function xe(e, t, s = ht) {
    const u = /* @__PURE__ */ Object.create(null);
    return typeof e == "string" ? E(s, e.split(" ")) : Array.isArray(e) ? E(s, e) : Object.keys(e).forEach(function(_) {
      Object.assign(
        u,
        xe(e[_], t, _)
      );
    }), u;
    function E(_, c) {
      t && (c = c.map((r) => r.toLowerCase())), c.forEach(function(r) {
        const l = r.split("|");
        u[l[0]] = [_, dt(l[0], l[1])];
      });
    }
  }
  function dt(e, t) {
    return t ? Number(t) : pt(e) ? 0 : 1;
  }
  function pt(e) {
    return ft.includes(e.toLowerCase());
  }
  const we = {}, P = (e) => {
    console.error(e);
  }, Ne = (e, ...t) => {
    console.log(`WARN: ${e}`, ...t);
  }, G = (e, t) => {
    we[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), we[`${e}/${t}`] = !0);
  }, J = new Error();
  function Oe(e, t, { key: s }) {
    let u = 0;
    const E = e[s], _ = {}, c = {};
    for (let r = 1; r <= t.length; r++)
      c[r + u] = E[r], _[r + u] = !0, u += pe(t[r - 1]);
    e[s] = c, e[s]._emit = _, e[s]._multi = !0;
  }
  function bt(e) {
    if (Array.isArray(e.begin)) {
      if (e.skip || e.excludeBegin || e.returnBegin)
        throw P("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), J;
      if (typeof e.beginScope != "object" || e.beginScope === null)
        throw P("beginScope must be object"), J;
      Oe(e, e.begin, { key: "beginScope" }), e.begin = ie(e.begin, { joinWith: "" });
    }
  }
  function Et(e) {
    if (Array.isArray(e.end)) {
      if (e.skip || e.excludeEnd || e.returnEnd)
        throw P("skip, excludeEnd, returnEnd not compatible with endScope: {}"), J;
      if (typeof e.endScope != "object" || e.endScope === null)
        throw P("endScope must be object"), J;
      Oe(e, e.end, { key: "endScope" }), e.end = ie(e.end, { joinWith: "" });
    }
  }
  function _t(e) {
    e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
  }
  function Mt(e) {
    _t(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), bt(e), Et(e);
  }
  function xt(e) {
    function t(c, r) {
      return new RegExp(
        W(c),
        "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (r ? "g" : "")
      );
    }
    class s {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(r, l) {
        l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, r]), this.matchAt += pe(r) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const r = this.regexes.map((l) => l[1]);
        this.matcherRe = t(ie(r, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(r) {
        this.matcherRe.lastIndex = this.lastIndex;
        const l = this.matcherRe.exec(r);
        if (!l)
          return null;
        const w = l.findIndex((X, oe) => oe > 0 && X !== void 0), M = this.matchIndexes[w];
        return l.splice(0, w), Object.assign(l, M);
      }
    }
    class u {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(r) {
        if (this.multiRegexes[r]) return this.multiRegexes[r];
        const l = new s();
        return this.rules.slice(r).forEach(([w, M]) => l.addRule(w, M)), l.compile(), this.multiRegexes[r] = l, l;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(r, l) {
        this.rules.push([r, l]), l.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(r) {
        const l = this.getMatcher(this.regexIndex);
        l.lastIndex = this.lastIndex;
        let w = l.exec(r);
        if (this.resumingScanAtSamePosition() && !(w && w.index === this.lastIndex)) {
          const M = this.getMatcher(0);
          M.lastIndex = this.lastIndex + 1, w = M.exec(r);
        }
        return w && (this.regexIndex += w.position + 1, this.regexIndex === this.count && this.considerAll()), w;
      }
    }
    function E(c) {
      const r = new u();
      return c.contains.forEach((l) => r.addRule(l.begin, { rule: l, type: "begin" })), c.terminatorEnd && r.addRule(c.terminatorEnd, { type: "end" }), c.illegal && r.addRule(c.illegal, { type: "illegal" }), r;
    }
    function _(c, r) {
      const l = (
        /** @type CompiledMode */
        c
      );
      if (c.isCompiled) return l;
      [
        ct,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        lt,
        Mt,
        gt
      ].forEach((M) => M(c, r)), e.compilerExtensions.forEach((M) => M(c, r)), c.__beforeBegin = null, [
        ot,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        at,
        // default to 1 relevance if not specified
        ut
      ].forEach((M) => M(c, r)), c.isCompiled = !0;
      let w = null;
      return typeof c.keywords == "object" && c.keywords.$pattern && (c.keywords = Object.assign({}, c.keywords), w = c.keywords.$pattern, delete c.keywords.$pattern), w = w || /\w+/, c.keywords && (c.keywords = xe(c.keywords, e.case_insensitive)), l.keywordPatternRe = t(w, !0), r && (c.begin || (c.begin = /\B|\b/), l.beginRe = t(l.begin), !c.end && !c.endsWithParent && (c.end = /\B|\b/), c.end && (l.endRe = t(l.end)), l.terminatorEnd = W(l.end) || "", c.endsWithParent && r.terminatorEnd && (l.terminatorEnd += (c.end ? "|" : "") + r.terminatorEnd)), c.illegal && (l.illegalRe = t(
        /** @type {RegExp | string} */
        c.illegal
      )), c.contains || (c.contains = []), c.contains = [].concat(...c.contains.map(function(M) {
        return wt(M === "self" ? c : M);
      })), c.contains.forEach(function(M) {
        _(
          /** @type Mode */
          M,
          l
        );
      }), c.starts && _(c.starts, r), l.matcher = E(l), l;
    }
    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = T(e.classNameAliases || {}), _(
      /** @type Mode */
      e
    );
  }
  function Re(e) {
    return e ? e.endsWithParent || Re(e.starts) : !1;
  }
  function wt(e) {
    return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
      return T(e, { variants: null }, t);
    })), e.cachedVariants ? e.cachedVariants : Re(e) ? T(e, { starts: e.starts ? T(e.starts) : null }) : Object.isFrozen(e) ? T(e) : e;
  }
  var Nt = "11.11.1";
  class Ot extends Error {
    constructor(t, s) {
      super(t), this.name = "HTMLInjectionError", this.html = s;
    }
  }
  const ce = D, ye = T, Se = Symbol("nomatch"), Rt = 7, Ae = function(e) {
    const t = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), u = [];
    let E = !0;
    const _ = "Could not find the language '{}', did you forget to load/include a language module?", c = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let r = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: Pe
    };
    function l(n) {
      return r.noHighlightRe.test(n);
    }
    function w(n) {
      let a = n.className + " ";
      a += n.parentNode ? n.parentNode.className : "";
      const h = r.languageDetectRe.exec(a);
      if (h) {
        const p = I(h[1]);
        return p || (Ne(_.replace("{}", h[1])), Ne("Falling back to no-highlight mode for this block.", n)), p ? h[1] : "no-highlight";
      }
      return a.split(/\s+/).find((p) => l(p) || I(p));
    }
    function M(n, a, h) {
      let p = "", x = "";
      typeof a == "object" ? (p = n, h = a.ignoreIllegals, x = a.language) : (G("10.7.0", "highlight(lang, code, ...args) has been deprecated."), G("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), x = n, p = a), h === void 0 && (h = !0);
      const S = {
        code: p,
        language: x
      };
      V("before:highlight", S);
      const L = S.result ? S.result : X(S.language, S.code, h);
      return L.code = S.code, V("after:highlight", L), L;
    }
    function X(n, a, h, p) {
      const x = /* @__PURE__ */ Object.create(null);
      function S(i, o) {
        return i.keywords[o];
      }
      function L() {
        if (!g.keywords) {
          N.addText(b);
          return;
        }
        let i = 0;
        g.keywordPatternRe.lastIndex = 0;
        let o = g.keywordPatternRe.exec(b), f = "";
        for (; o; ) {
          f += b.substring(i, o.index);
          const d = j.case_insensitive ? o[0].toLowerCase() : o[0], O = S(g, d);
          if (O) {
            const [v, Gt] = O;
            if (N.addText(f), f = "", x[d] = (x[d] || 0) + 1, x[d] <= Rt && (ne += Gt), v.startsWith("_"))
              f += o[0];
            else {
              const $t = j.classNameAliases[v] || v;
              k(o[0], $t);
            }
          } else
            f += o[0];
          i = g.keywordPatternRe.lastIndex, o = g.keywordPatternRe.exec(b);
        }
        f += b.substring(i), N.addText(f);
      }
      function ee() {
        if (b === "") return;
        let i = null;
        if (typeof g.subLanguage == "string") {
          if (!t[g.subLanguage]) {
            N.addText(b);
            return;
          }
          i = X(g.subLanguage, b, !0, Ce[g.subLanguage]), Ce[g.subLanguage] = /** @type {CompiledMode} */
          i._top;
        } else
          i = ae(b, g.subLanguage.length ? g.subLanguage : null);
        g.relevance > 0 && (ne += i.relevance), N.__addSublanguage(i._emitter, i.language);
      }
      function R() {
        g.subLanguage != null ? ee() : L(), b = "";
      }
      function k(i, o) {
        i !== "" && (N.startScope(o), N.addText(i), N.endScope());
      }
      function ve(i, o) {
        let f = 1;
        const d = o.length - 1;
        for (; f <= d; ) {
          if (!i._emit[f]) {
            f++;
            continue;
          }
          const O = j.classNameAliases[i[f]] || i[f], v = o[f];
          O ? k(v, O) : (b = v, L(), b = ""), f++;
        }
      }
      function Ie(i, o) {
        return i.scope && typeof i.scope == "string" && N.openNode(j.classNameAliases[i.scope] || i.scope), i.beginScope && (i.beginScope._wrap ? (k(b, j.classNameAliases[i.beginScope._wrap] || i.beginScope._wrap), b = "") : i.beginScope._multi && (ve(i.beginScope, o), b = "")), g = Object.create(i, { parent: { value: g } }), g;
      }
      function Le(i, o, f) {
        let d = Ge(i.endRe, f);
        if (d) {
          if (i["on:end"]) {
            const O = new y(i);
            i["on:end"](o, O), O.isMatchIgnored && (d = !1);
          }
          if (d) {
            for (; i.endsParent && i.parent; )
              i = i.parent;
            return i;
          }
        }
        if (i.endsWithParent)
          return Le(i.parent, o, f);
      }
      function Bt(i) {
        return g.matcher.regexIndex === 0 ? (b += i[0], 1) : (fe = !0, 0);
      }
      function Pt(i) {
        const o = i[0], f = i.rule, d = new y(f), O = [f.__beforeBegin, f["on:begin"]];
        for (const v of O)
          if (v && (v(i, d), d.isMatchIgnored))
            return Bt(o);
        return f.skip ? b += o : (f.excludeBegin && (b += o), R(), !f.returnBegin && !f.excludeBegin && (b = o)), Ie(f, i), f.returnBegin ? 0 : o.length;
      }
      function Ht(i) {
        const o = i[0], f = a.substring(i.index), d = Le(g, i, f);
        if (!d)
          return Se;
        const O = g;
        g.endScope && g.endScope._wrap ? (R(), k(o, g.endScope._wrap)) : g.endScope && g.endScope._multi ? (R(), ve(g.endScope, i)) : O.skip ? b += o : (O.returnEnd || O.excludeEnd || (b += o), R(), O.excludeEnd && (b = o));
        do
          g.scope && N.closeNode(), !g.skip && !g.subLanguage && (ne += g.relevance), g = g.parent;
        while (g !== d.parent);
        return d.starts && Ie(d.starts, i), O.returnEnd ? 0 : o.length;
      }
      function mt() {
        const i = [];
        for (let o = g; o !== j; o = o.parent)
          o.scope && i.unshift(o.scope);
        i.forEach((o) => N.openNode(o));
      }
      let te = {};
      function De(i, o) {
        const f = o && o[0];
        if (b += i, f == null)
          return R(), 0;
        if (te.type === "begin" && o.type === "end" && te.index === o.index && f === "") {
          if (b += a.slice(o.index, o.index + 1), !E) {
            const d = new Error(`0 width match regex (${n})`);
            throw d.languageName = n, d.badRule = te.rule, d;
          }
          return 1;
        }
        if (te = o, o.type === "begin")
          return Pt(o);
        if (o.type === "illegal" && !h) {
          const d = new Error('Illegal lexeme "' + f + '" for mode "' + (g.scope || "<unnamed>") + '"');
          throw d.mode = g, d;
        } else if (o.type === "end") {
          const d = Ht(o);
          if (d !== Se)
            return d;
        }
        if (o.type === "illegal" && f === "")
          return b += `
`, 1;
        if (ge > 1e5 && ge > o.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return b += f, f.length;
      }
      const j = I(n);
      if (!j)
        throw P(_.replace("{}", n)), new Error('Unknown language: "' + n + '"');
      const Ut = xt(j);
      let ue = "", g = p || Ut;
      const Ce = {}, N = new r.__emitter(r);
      mt();
      let b = "", ne = 0, H = 0, ge = 0, fe = !1;
      try {
        if (j.__emitTokens)
          j.__emitTokens(a, N);
        else {
          for (g.matcher.considerAll(); ; ) {
            ge++, fe ? fe = !1 : g.matcher.considerAll(), g.matcher.lastIndex = H;
            const i = g.matcher.exec(a);
            if (!i) break;
            const o = a.substring(H, i.index), f = De(o, i);
            H = i.index + f;
          }
          De(a.substring(H));
        }
        return N.finalize(), ue = N.toHTML(), {
          language: n,
          value: ue,
          relevance: ne,
          illegal: !1,
          _emitter: N,
          _top: g
        };
      } catch (i) {
        if (i.message && i.message.includes("Illegal"))
          return {
            language: n,
            value: ce(a),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: i.message,
              index: H,
              context: a.slice(H - 100, H + 100),
              mode: i.mode,
              resultSoFar: ue
            },
            _emitter: N
          };
        if (E)
          return {
            language: n,
            value: ce(a),
            illegal: !1,
            relevance: 0,
            errorRaised: i,
            _emitter: N,
            _top: g
          };
        throw i;
      }
    }
    function oe(n) {
      const a = {
        value: ce(n),
        illegal: !1,
        relevance: 0,
        _top: c,
        _emitter: new r.__emitter(r)
      };
      return a._emitter.addText(n), a;
    }
    function ae(n, a) {
      a = a || r.languages || Object.keys(t);
      const h = oe(n), p = a.filter(I).filter(je).map(
        (R) => X(R, n, !1)
      );
      p.unshift(h);
      const x = p.sort((R, k) => {
        if (R.relevance !== k.relevance) return k.relevance - R.relevance;
        if (R.language && k.language) {
          if (I(R.language).supersetOf === k.language)
            return 1;
          if (I(k.language).supersetOf === R.language)
            return -1;
        }
        return 0;
      }), [S, L] = x, ee = S;
      return ee.secondBest = L, ee;
    }
    function yt(n, a, h) {
      const p = a && s[a] || h;
      n.classList.add("hljs"), n.classList.add(`language-${p}`);
    }
    function le(n) {
      let a = null;
      const h = w(n);
      if (l(h)) return;
      if (V(
        "before:highlightElement",
        { el: n, language: h }
      ), n.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", n);
        return;
      }
      if (n.children.length > 0 && (r.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(n)), r.throwUnescapedHTML))
        throw new Ot(
          "One of your code blocks includes unescaped HTML.",
          n.innerHTML
        );
      a = n;
      const p = a.textContent, x = h ? M(p, { language: h, ignoreIllegals: !0 }) : ae(p);
      n.innerHTML = x.value, n.dataset.highlighted = "yes", yt(n, h, x.language), n.result = {
        language: x.language,
        // TODO: remove with version 11.0
        re: x.relevance,
        relevance: x.relevance
      }, x.secondBest && (n.secondBest = {
        language: x.secondBest.language,
        relevance: x.secondBest.relevance
      }), V("after:highlightElement", { el: n, result: x, text: p });
    }
    function St(n) {
      r = ye(r, n);
    }
    const At = () => {
      Q(), G("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Tt() {
      Q(), G("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Te = !1;
    function Q() {
      function n() {
        Q();
      }
      if (document.readyState === "loading") {
        Te || window.addEventListener("DOMContentLoaded", n, !1), Te = !0;
        return;
      }
      document.querySelectorAll(r.cssSelector).forEach(le);
    }
    function kt(n, a) {
      let h = null;
      try {
        h = a(e);
      } catch (p) {
        if (P("Language definition for '{}' could not be registered.".replace("{}", n)), E)
          P(p);
        else
          throw p;
        h = c;
      }
      h.name || (h.name = n), t[n] = h, h.rawDefinition = a.bind(null, e), h.aliases && ke(h.aliases, { languageName: n });
    }
    function jt(n) {
      delete t[n];
      for (const a of Object.keys(s))
        s[a] === n && delete s[a];
    }
    function vt() {
      return Object.keys(t);
    }
    function I(n) {
      return n = (n || "").toLowerCase(), t[n] || t[s[n]];
    }
    function ke(n, { languageName: a }) {
      typeof n == "string" && (n = [n]), n.forEach((h) => {
        s[h.toLowerCase()] = a;
      });
    }
    function je(n) {
      const a = I(n);
      return a && !a.disableAutodetect;
    }
    function It(n) {
      n["before:highlightBlock"] && !n["before:highlightElement"] && (n["before:highlightElement"] = (a) => {
        n["before:highlightBlock"](
          Object.assign({ block: a.el }, a)
        );
      }), n["after:highlightBlock"] && !n["after:highlightElement"] && (n["after:highlightElement"] = (a) => {
        n["after:highlightBlock"](
          Object.assign({ block: a.el }, a)
        );
      });
    }
    function Lt(n) {
      It(n), u.push(n);
    }
    function Dt(n) {
      const a = u.indexOf(n);
      a !== -1 && u.splice(a, 1);
    }
    function V(n, a) {
      const h = n;
      u.forEach(function(p) {
        p[h] && p[h](a);
      });
    }
    function Ct(n) {
      return G("10.7.0", "highlightBlock will be removed entirely in v12.0"), G("10.7.0", "Please use highlightElement now."), le(n);
    }
    Object.assign(e, {
      highlight: M,
      highlightAuto: ae,
      highlightAll: Q,
      highlightElement: le,
      // TODO: Remove with v12 API
      highlightBlock: Ct,
      configure: St,
      initHighlighting: At,
      initHighlightingOnLoad: Tt,
      registerLanguage: kt,
      unregisterLanguage: jt,
      listLanguages: vt,
      getLanguage: I,
      registerAliases: ke,
      autoDetection: je,
      inherit: ye,
      addPlugin: Lt,
      removePlugin: Dt
    }), e.debugMode = function() {
      E = !1;
    }, e.safeMode = function() {
      E = !0;
    }, e.versionString = Nt, e.regex = {
      concat: B,
      lookahead: de,
      either: se,
      optional: me,
      anyNumberOfTimes: He
    };
    for (const n in q)
      typeof q[n] == "object" && A(q[n]);
    return Object.assign(e, q), e;
  }, $ = Ae({});
  return $.newInstance = () => Ae({}), he = $, $.HighlightJS = $, $.default = $, he;
}
var Kt = /* @__PURE__ */ Wt();
const Yt = /* @__PURE__ */ zt(Kt), Zt = "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-keyword,.hljs-formula{color:#c678dd}.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string{color:#98c379}.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number{color:#d19a66}.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-title.class_,.hljs-class .hljs-title{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}";
function qt(A) {
  const y = A.regex, D = y.concat(/[\p{L}_]/u, y.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), T = /[\p{L}0-9._:-]+/u, z = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, m = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, F = A.inherit(m, {
    begin: /\(/,
    end: /\)/
  }), Y = A.inherit(A.APOS_STRING_MODE, { className: "string" }), U = A.inherit(A.QUOTE_STRING_MODE, { className: "string" }), C = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: T,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [z]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [z]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          m,
          U,
          Y,
          F,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  m,
                  F,
                  U,
                  Y
                ]
              }
            ]
          }
        ]
      },
      A.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      z,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              U
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [C],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [C],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: y.concat(
          /</,
          y.lookahead(y.concat(
            D,
            // <tag/>
            // <tag>
            // <tag ...
            y.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: D,
            relevance: 0,
            starts: C
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: y.concat(
          /<\//,
          y.lookahead(y.concat(
            D,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: D,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
export {
  Yt as H,
  Zt as h,
  qt as x
};
