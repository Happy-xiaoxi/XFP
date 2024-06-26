export function J() {
  if (
    window &&
    window.navigator &&
    window.navigator.connection &&
    void 0 !== window.navigator.connection
  ) {
    for (
      var e = ["type", "effectiveType", "rtt", "downlink", "downlinkMax"],
        t = window.navigator.connection,
        n = {},
        i = 0;
      i < e.length;
      i++
    ) {
      var o = t[e[i]];
      o && (n[e[i]] = String(o));
    }
    return n;
  }
}