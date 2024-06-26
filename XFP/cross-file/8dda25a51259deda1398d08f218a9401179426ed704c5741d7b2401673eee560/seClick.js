export function seClick(e, t, r) {
    var n = "seWids" + e,
      i = getCookie(n);
    null != i ? i.toString().indexOf(r) < 0 && (i = i + "," + r) : (i = r);
    setCookieMills(n, i, 864e5), privateLogWLJS(2, 2, t, r);
  }