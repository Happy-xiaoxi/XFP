export function x64LeftShift(e, t) {
    return 0 === (t %= 64) ? e : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t
    ] : [
        e[1] << t - 32,
        0
    ];
}
