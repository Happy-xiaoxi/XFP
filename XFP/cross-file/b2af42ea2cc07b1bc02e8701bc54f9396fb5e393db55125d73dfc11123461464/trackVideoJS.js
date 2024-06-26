export function trackVideoJS(a, c, b) {
  function d() {
    var b = a.mediainfo ? a.mediainfo.name : "";
    return a.currentSrc() + "_" + b;
  }
  function f() {
    var b = a.currentSrc();
    if ("" != b) {
      var c = d();
      g.videos[c] ||
        ((g.videos[c] = {
          vid: b,
          w: "function" == typeof a.videoWidth ? a.videoWidth() : a.width(),
          h:
            "function" == typeof a.videoHeight ? a.videoHeight() : a.height(),
          vdur: a.duration(),
          tw: 0,
          ls: !1,
          t: a.mediainfo ? a.mediainfo.name : "",
        }),
        0 > g.videos[c].vdur && (g.videos[c].vdur = 0),
        (n = k = null));
    }
  }
  function e(d) {
    a.off("loadedmetadata", m);
    a.off("timeupdate", r);
    g.sendVideoError(c, b, d);
  }
  var g = this,
    k = null,
    n = null,
    m = function () {
      try {
        f();
      } catch (h) {
        e(h);
      }
    },
    r = function () {
      try {
        if (
          k &&
          0 == a.seeking() &&
          ("function" == typeof a.scrubbing ? 0 == a.scrubbing() : 1)
        ) {
          var b = 0.001 * (new Date().getTime() - n);
          if ("" == a.currentSrc()) return;
          var c = d();
          if ("undefined" == typeof g.videos[c]) {
            f();
            return;
          }
          try {
            g.videos[c].ls =
              g.videos[c].ls ||
              ("undefined" != a.liveTracker &&
                a.liveTracker.isLive &&
                a.liveTracker.isLive());
          } catch (p) {}
          g.videos[c].vdur < a.duration() &&
            (g.videos[c].vdur = a.duration());
          a.currentTime() != k && 0 < b && 1 > b && (g.videos[c].tw += b);
        }
        k = a.currentTime();
        n = new Date().getTime();
      } catch (p) {
        e(p);
      }
    };
  a.on("loadedmetadata", m);
  a.on("timeupdate", r);
}