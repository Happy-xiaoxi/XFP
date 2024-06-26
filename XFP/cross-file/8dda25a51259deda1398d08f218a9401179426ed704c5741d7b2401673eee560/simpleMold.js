export function simpleMold(e, t, r, n, i) {
  for (var o = 0; o < e.length; o++) {
    var a = getCookie(r + e[o]);
    null != a && "" != a && loginfo(a, e[o], t, n, i);
  }
}