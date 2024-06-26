export function getHighestAccessibleUrl(e) {
    var t = e.topFrame,
      n = "";
    if (e.err)
      try {
        try {
          n = t.top.location.href;
        } catch (e) {
          var o = t.location.ancestorOrigins;
          n = o[o.length - 1];
        }
      } catch (e) {
        n = t.document.referrer;
      }
    else n = t.location.href;
    return n;
  }