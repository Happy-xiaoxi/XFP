export function getParams(n) {
    var t,
      e,
      o = n.getAttribute("id"),
      a = document.getElementById(o);
    return (
      null != a &&
      ((currentTagSRC = a.src),
      (e = {}),
      (t = (t = currentTagSRC.split("?")[1] || "").split("#")[0] || "")
        ? (t.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function (n, t, o, a) {
              try {
                e[t] = decodeURIComponent(a);
              } catch (n) {
                sovrn.ads.dbg(n);
              }
            }
          ),
          (e.currentTag = o),
          (e.location = a.parentNode.nodeName),
          e)
        : {})
    );
  }