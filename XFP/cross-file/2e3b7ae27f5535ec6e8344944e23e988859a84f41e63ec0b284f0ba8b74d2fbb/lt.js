export function lt() {
  if (window.pbjs && O(window.pbjs.getUserIds)) {
    var t = window.pbjs.getUserIds();
    if (
      t &&
      ((e = !0),
      D(t, function () {
        e = !1;
      }),
      !e)
    )
      return {
        userIdSources: R.keys(t).join(","),
      };
  }
  var e;
  return {};
}