export function _checkBait() {
    var a = !1;
    if (
      ((null === window.document.body.getAttribute("abp") &&
        null !== this._var.bait.offsetParent &&
        0 !== this._var.bait.offsetHeight &&
        0 !== this._var.bait.offsetLeft &&
        0 !== this._var.bait.offsetTop &&
        0 !== this._var.bait.offsetWidth &&
        0 !== this._var.bait.clientHeight &&
        0 !== this._var.bait.clientWidth) ||
        (a = !0),
      void 0 !== window.getComputedStyle)
    ) {
      var b = window.getComputedStyle(this._var.bait, null);
      ("none" != b.getPropertyValue("display") &&
        "hidden" != b.getPropertyValue("visibility")) ||
        (a = !0);
    }
    this._destroyBait(), this._var.event(a);
  }