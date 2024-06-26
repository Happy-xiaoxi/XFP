export function createiFrame(n, t, e) {
    var o, a, r, c, i, s;
    for (r in ((a = (o = document.createElement("iframe")).style),
    (s = {
      margin: "0px",
      padding: "0px",
      border: "0px none",
      width: t + "px",
      height: e + "px",
      overflow: "hidden",
    }),
    (i = {
      id: n,
      margin: "0",
      padding: "0",
      frameborder: "0",
      width: t + "",
      height: e + "",
      scrolling: "no",
      src: "about:blank",
    })))
      i.hasOwnProperty(r) && o.setAttribute(r, i[r]);
    for (c in s)
      if (s.hasOwnProperty(c))
        try {
          a[c] = s[c];
        } catch (n) {}
    return o;
  }