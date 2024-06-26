export function ut() {
  return (function () {
    var t,
      e = {};
    try {
      t = a();
    } catch (e) {
      b(e), (t = null);
    }
    var n,
      r = t.content;
    return (
      (e.siteId = t.siteId),
      (e.ckp = t.browserId),
      (e.rnd = t.pageViewId),
      (e.cxId = it()),
      (e.source = "cx"),
      P(e, {
        cCreatedAt: (n = r || {}).createdAt,
        cAuthor: n.authors ? n.authors.join(",") : void 0,
        cSection: n.section,
        cTags: n.tags,
        cType: n.type,
        t: n.title,
      }),
      e
    );
  })();
}