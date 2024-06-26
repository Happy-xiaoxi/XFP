export function O() {
    var n = y(),
      o = n.y + n.h;
    if (!(o == m || o <= 0)) {
      m = o;
      var _ = {
          z: _wdUID,
          a: curtime.getTime().toString(16),
          c: fesc(window.location.href),
          d: o,
          k: "S",
          H: fesc(_wdHost),
          r: _wdCID,
        },
        n = "";
      for (var f in _) n += "&" + f + "=" + _[f];
      (f = _wdCA.replace("1.gif", "3.gif") + "?" + n.slice(1)),
        (refImg = new Image(1, 1)),
        (refImg.src = f);
    }
  }