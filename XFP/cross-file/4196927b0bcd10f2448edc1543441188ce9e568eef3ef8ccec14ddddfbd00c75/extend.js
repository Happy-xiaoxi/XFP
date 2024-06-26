export function extend(B) {
  helper.each(Array.prototype.slice.call(arguments, 1), function (C) {
    helper.each(C, function (E, D) {
      if (C.hasOwnProperty(D)) {
        B[D] = E;
      }
    });
  });
  return B;
}