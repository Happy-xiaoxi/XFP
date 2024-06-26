export function sendCrossDomain () {
  try {
    var e = document.createElement("script"),
      t =
        document.head ||
        document.getElementsByTagName("head")[0] ||
        document.documentElement;
    (e.async = "async"),
      (e.src = this.url),
      (e.onload = e.onreadystatechange =
        function (n, i) {
          (i || !e.readyState || /loaded|complete/.test(e.readyState)) &&
            ((e.onload = e.onreadystatechange = null),
            t && e.parentNode && t.removeChild(e),
            (e = void 0),
            i ||
              "function" != typeof this.callbacks.success ||
              this.callbacks.success(this));
        }.bind(this)),
      t.insertBefore(e, t.firstChild);
  } catch (e) {
    "function" == typeof this.callbacks.error &&
      this.callbacks.error(this, new Error("Exception on send"));
  }
}