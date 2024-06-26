export function j(t) {
  const o = "upscope__iframe__access";
  if ("upscopeStorageFrame" === t.id) return !1;
  if (e("maskElementMiddleware")(t)) return !1;
  if (
    void 0 !== t.__upscopeFailingAccessAt &&
    Date.now() - t.__upscopeFailingAccessAt.getTime() <
      Math.min(500 * t.__upscopeFailingCount, 5e3)
  )
    return !1;
  (t.__upscopeFailingAccessAt = new Date()),
    (t.__upscopeFailingCount = t.__upscopeFailingCount || 0),
    t.__upscopeFailingCount++;
  try {
    const e = t.contentWindow;
    if (((e[o] = "iframeAccessOn"), "iframeAccessOn" === e[o]))
      return (
        delete t.__upscopeFailingAccessAt, delete t.__upscopeFailingCount, !0
      );
  } catch (e) {
    r("Error accessing iframe %o (%o)", t, e);
  }
  return !1;
}