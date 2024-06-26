export function reBook(e, t, r) {
    var n = t.toString().split("#")[0];
    appendJSONCookie("_rtbook", e, n, 864e5), privateLogWLJS(3, e, n, r);
  }