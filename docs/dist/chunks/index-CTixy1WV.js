import { B as o } from "./custom-element-DwLosoKP.js";
const i = (t, e) => {
  t.shadowRoot ? o(e, t.shadowRoot) : o(e, t);
};
function c() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (t) => (parseInt(t) ^ Math.random() * 16 >> parseInt(t) / 4).toString(16));
}
function n(t) {
  return typeof t != "object" || t === null ? !1 : Object.keys(t).every((e) => typeof e == "string" && typeof t[e] == "string");
}
const s = (t) => /[A-Z]/.test(t) ? t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`) : t, u = (t) => {
  if (n(t)) {
    let e = "";
    return Object.keys(t).forEach((r) => {
      e += `${s(r)}:${t[r]};`;
    }), e;
  }
  return "";
};
export {
  c as g,
  u as j,
  i as s
};
