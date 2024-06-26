export function h(e){
    var n = !1;
    return function (t) {
      n || (e(t), (n = !0));
    };
  }