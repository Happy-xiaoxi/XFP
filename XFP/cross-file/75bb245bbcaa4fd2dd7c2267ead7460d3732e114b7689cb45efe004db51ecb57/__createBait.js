export function _createBait() {
    var a = document.createElement("div");
    a.setAttribute("class", this._options.baitClass),
      a.setAttribute("style", this._options.baitStyle),
      (this._var.bait = window.document.body.appendChild(a)),
      this._var.bait.offsetParent,
      this._var.bait.offsetHeight,
      this._var.bait.offsetLeft,
      this._var.bait.offsetTop,
      this._var.bait.offsetWidth,
      this._var.bait.clientHeight,
      this._var.bait.clientWidth,
      this._checkBait();
  }