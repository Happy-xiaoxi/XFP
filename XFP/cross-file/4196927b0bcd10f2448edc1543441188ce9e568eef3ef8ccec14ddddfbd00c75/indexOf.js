export function indexOf(B, C) {
  if (Array.prototype.indexOf) {
    return B.indexOf(C);
  } else {
    for (let i = 0; i < B.length; i++) {
      if (B[i] === C) {
        return i;
      }
    }
    return -1;
  }
}