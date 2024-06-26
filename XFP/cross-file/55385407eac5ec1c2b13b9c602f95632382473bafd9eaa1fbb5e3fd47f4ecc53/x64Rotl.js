export function x64Rotl(e, t) {
    return 32 === (t %= 64) ? [
        e[1],
        e[0]
    ] : t < 32 ? [
        e[0] << t | e[1] >>> 32 - t,
        e[1] << t | e[0] >>> 32 - t
    ] : (t -= 32, [
        e[1] << t | e[0] >>> 32 - t,
        e[0] << t | e[1] >>> 32 - t
    ]);
}
