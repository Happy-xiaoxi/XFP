export function P(e) {
  if (void 0 !== e.__upscopeScrollable) return e.__upscopeScrollable;
  try {
    const t = e.scrollWidth > e.clientWidth,
      o = e.scrollHeight > e.clientHeight,
      n = e.ownerDocument.defaultView?.getComputedStyle(e),
      s = n?.["overflow-x"],
      i = n?.["overflow-y"];
    return (
      (e.__upscopeScrollable =
        (t && "hidden" !== s) || (o && "hidden" !== i)),
      e.__upscopeScrollable
    );
  } catch (t) {
    return (
      r("Error detecting scrollability of %o (%o)", e, t),
      (e.__upscopeScrollable = !1),
      !1
    );
  }
}