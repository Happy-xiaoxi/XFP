export function L(n, i) {
  try {
    if (null !== n && "string" == typeof n && "" !== n) {
      var o = n.split(".");
      if (2 === o.length)
        return window[o[0]][o[1]] || window.parent[o[0]][o[1]];
      if (1 === o.length) return window[n] || window.parent[n];
    }
  } catch (n) {
    S(n, i, t.rCb, e.FN);
  }
}