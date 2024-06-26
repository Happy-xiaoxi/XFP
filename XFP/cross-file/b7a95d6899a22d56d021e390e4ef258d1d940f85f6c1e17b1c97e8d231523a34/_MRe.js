export function Re(e) {
  var t, n, o;
  e.configuration.trt;
  var a = {
    data: {
      plugins: Ie(e),
      cv: Te(e),
      dom:
        null ===
          (n =
            null === (t = e.configuration) || void 0 === t
              ? void 0
              : t.parentData) || void 0 === n
          ? void 0
          : n.dom,
      vm: _e(e),
      fts: Oe(),
    },
    sc: s(
      {
        httpCookie:
          null === (o = null == e ? void 0 : e.configuration) || void 0 === o
            ? void 0
            : o.sc,
      },
      i,
      W(e, i)
    ),
    pvc: De(e),
    pt2: Ne(e),
  };
  return e.configuration.wv && (a.wv = !0), a;
}