export function H(e, t, o = null, n = !1) {
  const s = [...e.querySelectorAll("iframe,frame")];
  $(e, (e) => {
    const t = e.querySelectorAll("iframe,frame");
    for (const e of t) s.push(e);
  });
  for (const e of s) {
    if (!n && !O(e)) continue;
    if (e.__upscopeChildFrameHandler) {
      o && o(e, e.__upscopeChildFrameHandler);
      continue;
    }
    let s = !1;
    try {
      void 0 !== e.contentWindow && j(e) && (s = !0);
    } catch (t) {
      r("Skipping iframe %o due to error %o", e, t);
    }
    s && t(e);
  }
}