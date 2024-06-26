export function T(n, o, _) {
    var f = o;
    f || (f = []);
    var l = 0;
    try {
      var p = _
        ? _.contentWindow.document.getElementsByTagName(n)
        : document.getElementsByTagName(n);
      l = p.length;
    } catch (M) {
      l = 0;
    }
    for (var S = 0; S < l; S++) {
      var E = x(p[S]);
      _ && _.position && ((E.x += _.position.x), (E.y += _.position.y)),
        (p[S].position = E),
        f.push(p[S]),
        T(n, f, p[S]);
    }
    return f;
  }