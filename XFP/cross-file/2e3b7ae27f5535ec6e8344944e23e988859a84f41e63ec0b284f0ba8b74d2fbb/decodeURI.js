export function Y(t) {
  var e = {},
    n = t.replace(/\?/, "").replace(/#/, "").split("&");
  return (
    T.forEach(n, function (t) {
      var n = t.split("=");
      if (2 === n.length) {
        var r = decodeURIComponent(n[0]),
          o = decodeURIComponent(n[1]);
        C(e[r]) ? (e[r] = o) : (j(e[r]) || (e[r] = [e[r]]), e[r].push(o));
      }
    }),
    e
  );
}