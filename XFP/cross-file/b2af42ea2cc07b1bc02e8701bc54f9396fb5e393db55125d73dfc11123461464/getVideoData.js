export function getVideoData() {
  var a = this.videos,
    c = [],
    b;
  for (b in a)
    if (a.hasOwnProperty(b)) {
      var d = a[b];
      !d.vid ||
        "" == d.vid ||
        0 <= d.vid.indexOf("data:video") ||
        ((d.w = Math.round(d.w)),
        (d.h = Math.round(d.h)),
        d.w || (d.w = 0),
        d.h || (d.h = 0),
        d.vdur && isFinite(d.vdur)
          ? ((d.vdur = Math.round(d.vdur)), 0 > d.vdur && (d.vdur = 0))
          : (d.vdur = 0),
        0 < d.tw && 1 > d.tw && (d.tw = 1),
        (d.tw = Math.round(d.tw)),
        0 < d.tw && c.push(d));
    }
  return c;
}