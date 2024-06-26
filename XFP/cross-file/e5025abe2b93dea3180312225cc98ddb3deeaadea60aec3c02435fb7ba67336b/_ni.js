export function i(e) {
  if (null == navigator.plugins) return e.NOT_AVAILABLE;
  for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++)
    navigator.plugins[n] && t.push(navigator.plugins[n]);
  return (
    c(e) &&
      (t = t.sort(function (e, t) {
        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
      })),
    s(t, function (e) {
      var t = s(e, function (e) {
        return [e.type, e.suffixes];
      });
      return [e.name, e.description, t];
    })
  );
}