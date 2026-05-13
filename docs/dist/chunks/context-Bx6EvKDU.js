/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let o = class extends Event {
  constructor(t, e, s, c) {
    super("context-request", { bubbles: !0, composed: !0 }), this.context = t, this.contextTarget = e, this.callback = s, this.subscribe = c ?? !1;
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a = "theme-data";
export {
  o as s,
  a as t
};
