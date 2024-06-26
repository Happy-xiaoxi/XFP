 export function _ObjectMerge(e, t) {
    return "object" != typeof t
      ? e
      : (Object.keys(t).forEach(function (n) {
          "object" == typeof t[n]
            ? (e[n] = EHTalon.ObjectMerge(e[n], t[n]))
            : (e[n] = t[n]);
        }),
        e);
  }