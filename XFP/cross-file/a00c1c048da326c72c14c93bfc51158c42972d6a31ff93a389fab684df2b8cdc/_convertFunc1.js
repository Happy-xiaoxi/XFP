export function _convertFunc1(t, o, e) {
  "use strict";
  o.HTTP = new (function () {
    this.post = function (t, o, e, i) {
      var n = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      (n.onreadystatechange = function () {
        if (4 == this.readyState) {
          if (200 != this.status) return i("error", null);
          try {
            return i(null, JSON.parse(n.responseText));
          } catch (t) {
            return i(null, n.responseText);
          }
        }
      }),
        n.open("POST", t, !0),
        e &&
          e.headers &&
          (n = (function (t, o) {
            for (var e = Object.keys(o), i = 0; i < e.length; ++i) {
              var n = e[i];
              t.setRequestHeader(n, o[n]);
            }
            return t;
          })(n, e.headers)),
        e && e.credentials && (n.withCredentials = !0),
        n.send(JSON.stringify(o));
    };
  })();
}