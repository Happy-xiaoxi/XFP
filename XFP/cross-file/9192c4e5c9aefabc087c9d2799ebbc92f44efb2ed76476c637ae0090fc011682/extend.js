export function extend(e, t) {
    if (null == e) return t;
    for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
    return t;
  }