export function getScriptTag() {
    var n,
      t,
      e,
      o =
        /^(https?:)?\/\/.*\.lijit\.(com|dev)\/www\/sovrn_beacon_standalone\/sovrn_standalone_beacon(\.min)?\.js/i;
    if (
      "currentScript" in document &&
      (e = document.currentScript) &&
      o.test(e.src)
    )
      return e;
    for (
      t = (n = document.getElementsByTagName("script")).length - 1;
      t >= 0;
      t--
    )
      if (o.test(n[t].src)) return n[t];
    return null;
  }