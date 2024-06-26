export function getAttr(a, b) {
    var c = (a.getAttribute && a.getAttribute(b)) || null;
    if (!c && "function" != typeof a)
      for (var d = a.attributes, e = d.length, f = 0; f < e; f++)
        d[f].nodeName === b && (c = d[f].nodeValue);
    return c;
  }