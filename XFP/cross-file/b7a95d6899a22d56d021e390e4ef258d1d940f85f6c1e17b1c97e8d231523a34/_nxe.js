export function xe(e) {
  var t = e.configuration.b;
  return t && void 0 !== t
    ? t
    : ""
        .concat(n.BEACON_BASE_URL, "?p=")
        .concat(e.configuration.correlationId, "&s=")
        .concat(e.configuration.appId);
}