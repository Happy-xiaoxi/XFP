export function eachScript() {
    var a,
      b,
      c,
      d,
      e = document.getElementsByTagName("script"),
      f = !1;
    if (e.length > 0)
      for (var g = 0; g < e.length; g++)
        (a = this.getAttr(e[g], "data-ts-spot")),
          (b = this.getAttr(e[g], "data-ts-width")),
          (c = this.getAttr(e[g], "data-ts-height")),
          (d = this.getAttr(e[g], "data-ts-instant-message")),
          a && b && c && !d && ((f = !0), this.setBannerSettings(e[g], a));
    return f;
  }