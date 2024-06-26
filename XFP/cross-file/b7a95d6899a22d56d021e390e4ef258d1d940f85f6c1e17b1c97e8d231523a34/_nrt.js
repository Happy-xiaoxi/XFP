export function rt(i) {
  if (void 0 !== i.origin && i.origin === n.SERVICE_BASE_URL) {
    var o;
    try {
      o = JSON.parse(i.data);
    } catch (e) {
      return;
    }
    var a = dt(o);
    if (a) {
      if (
        (a.configuration.tmCalledOnce ||
          (at(a, i.source, i.origin)(), (a.configuration.tmCalledOnce = !0)),
        !a.configuration.bfCollected)
      )
        if (a.configuration.trt && !a.configuration.ppGeo)
          try {
            ct(a, i.source, i.origin), (a.configuration.bfCollected = !0);
          } catch (n) {
            S(n, a, t.bf, e.FN);
          }
      "frameReady" in o && !0 === o.frameReady ? ut(i, a) : o && lt(o, a);
    }
  }
}