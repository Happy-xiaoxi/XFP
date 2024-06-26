export function ut(e, t) {
  (t.configuration.referer = document.referrer),
    (t.configuration.url = document.URL),
    (t.configuration.parentData = { dom: He() });
  var n = { ppfn: !0, utils: t };
  e.source.postMessage(JSON.stringify(n), e.origin);
}