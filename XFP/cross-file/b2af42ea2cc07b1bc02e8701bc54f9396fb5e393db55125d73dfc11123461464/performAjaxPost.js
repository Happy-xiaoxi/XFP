export function performAjaxPost(a, b) {
  b = this.encode(DotmetricsJSON.stringify(b));
  b = encodeURIComponent(b);
  var c = new Date().getTime();
  b = "v=" + b + "&r=" + c;
  a += "?" + new Date().getTime();
  window.XDomainRequest
    ? ((c = new XDomainRequest()), c.open("POST", a), c.send(b))
    : ((c = null),
      window.XMLHttpRequest
        ? (c = new XMLHttpRequest())
        : window.ActiveXObject &&
          (c = new ActiveXObject("Microsoft.XMLHTTP")),
      c.open("POST", a, !0),
      (c.withCredentials = !0),
      c.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      ),
      c.send(b));
}