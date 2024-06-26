export function L(n) {
    if (n == document.domain) return !0;
    if (ROOTDM && ROOTDM.length != 0 && n)
      for (i = 0; i < ROOTDM.length; i++) {
        var o = ROOTDM[i];
        if (
          n.indexOf(o) != -1 ||
          (o && o.length > 0 && o[0] == "." && n == o.substring(1))
        )
          return !0;
      }
    return !1;
  }