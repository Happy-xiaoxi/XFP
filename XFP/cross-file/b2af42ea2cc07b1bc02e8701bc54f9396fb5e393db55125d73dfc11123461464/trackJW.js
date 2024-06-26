export function trackJW(a, c, b) {
  function d() {
    var b = a.getPlaylistItem();
    if ("undefined" != typeof b) {
      var c = b.file + "_" + b.title;
      if (!e.videos[c]) {
        var d = a.getConfig();
        e.videos[c] = {
          vid: b.file,
          w: a.getWidth(),
          h: a.getHeight(),
          vdur: a.getDuration(),
          tw: 0,
          ls: d && "Live" == d.streamType,
          t: b.title,
        };
        0 > e.videos[c].vdur && (e.videos[c].vdur = 0);
      }
      g = a.getPosition();
      k = new Date().getTime();
    }
  }
  function f(d) {
    a.off("play", n);
    a.off("seek", m);
    a.off("time", r);
    e.sendVideoError(c, b, d);
  }
  var e = this,
    g = null,
    k = null,
    n = function (a) {
      try {
        d();
      } catch (q) {
        f(q);
      }
    },
    m = function (a) {
      try {
        g = a.offset;
      } catch (q) {
        f(q);
      }
    },
    r = function (b) {
      try {
        if (g) {
          var c = 0.001 * (new Date().getTime() - k),
            h = a.getPlaylistItem();
          if ("undefined" == typeof h) return;
          var l = h.file + "_" + h.title;
          "undefined" == typeof e.videos[l] && d();
          b.position != g && 0 < c && 1 > c && (e.videos[l].tw += c);
          e.videos[l].h || (e.videos[l].h = a.getHeight());
          e.videos[l].w || (e.videos[l].w = a.getWidth());
          if (!e.videos[l].vdur || e.videos[l].vdur < a.getDuration())
            e.videos[l].vdur = a.getDuration();
        }
        g = b.position;
        k = new Date().getTime();
      } catch (t) {
        f(t);
      }
    };
  a.on("play", n);
  a.on("seek", m);
  a.on("time", r);
}