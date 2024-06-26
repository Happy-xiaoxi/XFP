export function trackFP(a, c, b) {
  function d() {
    var b = "";
    try {
      b = a.opts.title;
    } catch (p) {}
    return a.currentSrc + "_" + b;
  }
  function f() {
    var b = "";
    try {
      b = a.opts.title;
    } catch (t) {}
    var c = Math.max(0, a.duration),
      e = d();
    g.videos[e] = {
      vid: a.currentSrc,
      w: a.videoWidth,
      h: a.videoHeight,
      vdur: c,
      tw: 0,
      ls: a.opts.live,
      t: b,
    };
    n = k = null;
  }
  function e(d) {
    a.off("loadedmetadata", m);
    a.off("seeked", r);
    a.off("timeupdate", h);
    g.sendVideoError(c, b, d);
  }
  var g = this,
    k = null,
    n = null,
    m = function (a) {
      try {
        f();
      } catch (p) {
        e(p);
      }
    },
    r = function (b) {
      try {
        (k = a.currentTime), (n = new Date().getTime());
      } catch (p) {
        e(p);
      }
    },
    h = function (b) {
      try {
        if (k && 0 == a.playerState["is-seeking"]) {
          var c = a.currentTime - k,
            h = 0.001 * (new Date().getTime() - n);
          if (0 < c) {
            if (1 < c) return;
            var q = d();
            g.videos[q]
              ? (a.currentTime != k &&
                  0 < h &&
                  1 > h &&
                  (g.videos[q].tw += h),
                g.videos[q].vdur < a.duration &&
                  (g.videos[q].vdur = a.duration))
              : f();
          }
        }
        k = a.currentTime;
        n = new Date().getTime();
      } catch (u) {
        e(u);
      }
    };
  a.on("loadedmetadata", m);
  a.on("seeked", r);
  a.on("timeupdate", h);
}