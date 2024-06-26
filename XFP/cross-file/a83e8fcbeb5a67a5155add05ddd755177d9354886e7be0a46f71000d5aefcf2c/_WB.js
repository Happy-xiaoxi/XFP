 export function _WB() {
    var e = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
      t = "undefined" != typeof InstallTrigger,
      n =
        Object.prototype.toString
          .call(window.HTMLElement)
          .indexOf("Constructor") > 0,
      i = !!document.documentMode,
      a = !i && !!window.StyleMedia,
      o = !!window.chrome && !e;
    isBlink = (o || e) && !!window.CSS;
    var r = e
      ? 1
      : t
      ? 2
      : n
      ? 3
      : o
      ? 4
      : i
      ? 5
      : a
      ? 6
      : window.callPhantom
      ? 7
      : window.Buffer
      ? 8
      : window.emit
      ? 9
      : window.spawn
      ? 10
      : 0;
    return r;
  }