export function location() {
  var l = window.location.hostname;
  if (
    window.location.ancestorOrigins &&
    window.location.ancestorOrigins.length > 0
  ) {
    var rootLoc =
      window.location.ancestorOrigins[
        window.location.ancestorOrigins.length - 1
      ];
    var rootHost = ft.hostName(rootLoc);
    if (rootHost) {
      l = rootHost;
    }
  }
  if (!l) {
    l = "";
  }
  return l;
}