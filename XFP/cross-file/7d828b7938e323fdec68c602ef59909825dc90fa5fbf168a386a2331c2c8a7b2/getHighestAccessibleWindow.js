export function getHighestAccessibleWindow(e) {
    var t = e,
      n = !1;
    try {
      for (; t.parent.document !== t.document; ) {
        if (!t.parent.document) {
          n = !0;
          break;
        }
        t = t.parent;
      }
    } catch (e) {
      n = !0;
    }
    return { topFrame: t, err: n };
  }