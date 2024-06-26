import { Y } from './Y.js';
export function sa(a, b, c) {
  if (c && c.action) {
    var d = (c.method || "").toLowerCase();
    if ("get" === d) {
      d = c.childNodes || [];
      for (var e = !1, f = 0; f < d.length; f++) {
        var h = d[f];
        if (h.name === a) {
          h.setAttribute("value", b);
          e = !0;
          break;
        }
      }
      e || (d = I.createElement("input"), d.setAttribute("type", "hidden"), d.setAttribute("name", a), d.setAttribute("value", b), c.appendChild(d));
    } else "post" === d && (a = Y(a, b, c.action), C.test(a) && (c.action = a));
  }
}