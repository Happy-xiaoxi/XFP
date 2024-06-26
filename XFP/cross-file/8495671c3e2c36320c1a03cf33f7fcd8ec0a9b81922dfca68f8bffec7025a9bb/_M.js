export function M(e){
    if (e.cancelable) {
        var n =
          (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
        "pointerdown" == e.type
          ? (function (e, n) {
              var t = function () {
                  A(e, n), i();
                },
                r = function () {
                  i();
                },
                i = function () {
                  removeEventListener("pointerup", t, L),
                    removeEventListener("pointercancel", r, L);
                };
              addEventListener("pointerup", t, L),
                addEventListener("pointercancel", r, L);
            })(n, e)
          : A(n, e);
      }
  }