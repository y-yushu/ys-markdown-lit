const n = {
  fromAttribute: (r) => {
    if (typeof r == "boolean")
      return r;
    if (r == null) return !1;
    if (r === "") return !0;
    if (typeof r == "string") {
      const t = r.toLowerCase().trim();
      return t === "true" || t === "1";
    }
    return typeof r == "number" ? r === 1 : !!r;
  },
  toAttribute: (r) => r ? "" : null
}, e = {
  fromAttribute: (r) => {
    if (!r || !r.trim())
      return {};
    try {
      const t = JSON.parse(r);
      return typeof t == "object" && t !== null && !Array.isArray(t) ? t : {};
    } catch {
      return {};
    }
  },
  toAttribute: (r) => {
    if (typeof r == "string")
      try {
        const t = JSON.parse(r);
        return typeof t == "object" && t !== null && !Array.isArray(t) ? JSON.stringify(t) : "{}";
      } catch {
        return "{}";
      }
    return typeof r == "object" && r !== null && !Array.isArray(r) ? JSON.stringify(r) : "{}";
  }
};
export {
  n as B,
  e as O
};
