export function isJson(t) {
  if ("string" == typeof t)
    try {
      var r = JSON.parse(t);
      return !("object" != typeof r || !r);
    } catch (e) {
      return !1;
    }
  return !1;
}