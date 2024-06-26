export function s(n) {
    var o = {
        z: _wdUID,
        a: curtime.getTime().toString(16),
        c: fesc(window.location.href),
        d: fesc(n),
        k: u,
        H: fesc(_wdHost),
        r: _wdCID,
      },
      _ = "";
    for (var f in o) _ += "&" + f + "=" + o[f];
    (f = _wdCA.replace("1.gif", "3.gif") + "?" + _.slice(1)),
      (refImg = new Image(1, 1)),
      (refImg.src = f);
  }