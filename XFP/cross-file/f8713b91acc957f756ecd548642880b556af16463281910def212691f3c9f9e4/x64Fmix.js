export function x64Fmix(e) {
    return e = this.x64Xor(e, [
        0,
        e[0] >>> 1
    ]), e = this.x64Multiply(e, [
        4283543511,
        3981806797
    ]), e = this.x64Xor(e, [
        0,
        e[0] >>> 1
    ]), e = this.x64Multiply(e, [
        3301882366,
        444984403
    ]), e = this.x64Xor(e, [
        0,
        e[0] >>> 1
    ]);
}
