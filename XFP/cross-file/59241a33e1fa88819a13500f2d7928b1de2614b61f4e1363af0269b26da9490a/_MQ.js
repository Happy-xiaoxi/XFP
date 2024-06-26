export function Q(e) {
  const t = [
    ["url('", "')", !1],
    ['url("', '")', !1],
    ["url(", ")", !1],
    ["'", "'", !0],
    ['"', '"', !0],
  ];
  let o,
    n = [void 0, void 0];
  for (const [s, i, r] of t)
    (!r || (e.slice(0, 1) === e.slice(-1, 0) && e.slice(-1, 0) === s)) &&
      (!r ||
        "/" === e.slice(1, 2) ||
        ".." === e.slice(1, 3) ||
        "http" === e.slice(1, 5) ||
        (e.includes("/") &&
          e.includes(".") &&
          "." !== e.slice(-1, 0) &&
          "/" !== e.slice(-1, 0))) &&
      e.includes(s) &&
      (void 0 === o || o > e.indexOf(s)) &&
      ((o = e.indexOf(s)), (n = [s, i]));
  return n;
}