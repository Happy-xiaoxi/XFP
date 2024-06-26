export function k(e){
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (
      n
    ) {
      return e(n, M, L);
    });
  }