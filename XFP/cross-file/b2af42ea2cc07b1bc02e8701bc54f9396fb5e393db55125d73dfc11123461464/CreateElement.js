export function CreateElement(a, b, d) {
  if (null != a) {
    a = document.createElement(a);
    if (null != b)
      for (var c in b)
        "function" == typeof b[c]
          ? this.addEventSimple(a, c, b[c])
          : (a.setAttribute(c, b[c]),
            "class" == c && this.isIE() && (a.className = b[c]));
    null != d &&
      ((b = document.createTextNode(d.toString())), a.appendChild(b));
    return a;
  }
  return null != d ? document.createTextNode(d.toString()) : null;
};