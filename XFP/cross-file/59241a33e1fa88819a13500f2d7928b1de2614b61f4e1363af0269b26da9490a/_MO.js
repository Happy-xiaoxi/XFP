export function O(e) {
  try {
    const {
        top: t,
        bottom: o,
        height: n,
        width: s,
      } = e.getBoundingClientRect(),
      {
        display: i,
        visibility: r,
        opacity: a,
      } = e.ownerDocument.defaultView.getComputedStyle(e),
      c = Math.max(
        e.ownerDocument.documentElement.clientHeight,
        e.ownerDocument.defaultView.innerHeight
      );
    return (
      o >= 0 &&
      t - c < 0 &&
      n > 5 &&
      s > 5 &&
      "none" !== i &&
      "hidden" !== r &&
      "0" !== a
    );
  } catch (t) {
    return r("Error detecting visibility of %o (%o)", e, t), !0;
  }
}