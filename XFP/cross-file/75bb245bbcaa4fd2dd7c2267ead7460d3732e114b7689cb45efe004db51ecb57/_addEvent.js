export function addEvent(a, b, c) {
    if (b.addEventListener) b.addEventListener(a, c, !1);
    else if (b.attachEvent) {
      var d = b.attachEvent("on" + a, c);
      return d;
    }
  }