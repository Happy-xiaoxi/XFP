export function A(e) {
  var t, n, i;
  return (
    (i =
      (null === (t = e.configuration) || void 0 === t ? void 0 : t.u) ||
      (null === (n = e.configuration) || void 0 === n ? void 0 : n.url) ||
      document.URL) && (i = i.substring(0, 50)),
    i
  );
}