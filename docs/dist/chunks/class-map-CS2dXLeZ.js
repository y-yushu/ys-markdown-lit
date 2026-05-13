import { n as i } from "./property-DXl-UJKd.js";
import { T as o } from "./custom-element-DwLosoKP.js";
import { e as a, i as h, t as c } from "./directive-kLG6oqUu.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function f(s) {
  return i({ ...s, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m = a(class extends h {
  constructor(s) {
    if (super(s), s.type !== c.ATTRIBUTE || s.name !== "class" || s.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return " " + Object.keys(s).filter((e) => s[e]).join(" ") + " ";
  }
  update(s, [e]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), s.strings !== void 0 && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t) => t !== "")));
      for (const t in e) e[t] && !this.nt?.has(t) && this.st.add(t);
      return this.render(e);
    }
    const r = s.element.classList;
    for (const t of this.st) t in e || (r.remove(t), this.st.delete(t));
    for (const t in e) {
      const n = !!e[t];
      n === this.st.has(t) || this.nt?.has(t) || (n ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
    }
    return o;
  }
});
export {
  m as e,
  f as r
};
