export function x64LeftShift(e, t) {
    return (
      (t %= 64),
      0 === t
        ? e
        : t < 32
        ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
        : [e[1] << (t - 32), 0]
    );
  }