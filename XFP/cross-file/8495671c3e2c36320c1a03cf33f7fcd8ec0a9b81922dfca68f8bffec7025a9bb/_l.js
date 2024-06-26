export function l(e, n, t, r){
    var i, o;
    return function (a) {
      n.value >= 0 &&
        (a || r) &&
        ((o = n.value - (i || 0)) || void 0 === i) &&
        ((i = n.value),
        (n.delta = o),
        (n.rating = (function (e, n) {
          return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good";
        })(n.value, t)),
        e(n));
    };
  }