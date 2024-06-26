export function _Get() {
    var e = this.obj;
    new Fingerprint(
      EHTalon.IM
        ? { excludeAvailableScreenResolution: !0, excludeScreenResolution: !0 }
        : {}
    ).get(function (t, n, i) {
      (e.f3r = ""),
        e.dd &&
          ((i[14] = "r"), (i[15] = "r"), (i[i.length - 2] = "3"), (e.f3r = i)),
        (e.f3 = t),
        e.TC();
    }, this.FPExtra);
  }