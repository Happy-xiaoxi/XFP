export function p(e){
    var n = function n(n){
      ("pagehide" !== n.type && "hidden" !== document.visibilityState) ||
        e(n);
    };
    addEventListener("visibilitychange", n, !0),
    addEventListener("pagehide", n, !0);
  }