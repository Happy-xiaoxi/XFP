




export function x64Fmix(h) {
    h = this.x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = this.x64Multiply(h, [
        4283543511,
        3981806797
    ]);
    h = this.x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = this.x64Multiply(h, [
        3301882366,
        444984403
    ]);
    h = this.x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    return h;
}
