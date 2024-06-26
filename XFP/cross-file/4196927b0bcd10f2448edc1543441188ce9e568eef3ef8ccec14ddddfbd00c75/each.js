export function each(C, D, B) {
  let additionalArgs = Array.prototype.slice.call(arguments, 3);
  if (C) {
    if (C.length === +C.length) {
      for (let i = 0; i < C.length; i++) {
        D.apply(B, [C[i], i].concat(additionalArgs));
      }
    } else {
      for (let item in C) {
        D.apply(B, [C[item], item].concat(additionalArgs));
      }
    }
  }
}