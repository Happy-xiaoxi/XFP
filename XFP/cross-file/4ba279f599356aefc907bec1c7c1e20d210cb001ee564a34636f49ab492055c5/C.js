export function C(n) {
    for (var o = "", _ = 0; _ < n.length; _++) {
      var f = n[_];
      o += f.x + "*" + f.y + "*" + f.w + ",";
    }
    return o.slice(0, o.length - 1);
  }