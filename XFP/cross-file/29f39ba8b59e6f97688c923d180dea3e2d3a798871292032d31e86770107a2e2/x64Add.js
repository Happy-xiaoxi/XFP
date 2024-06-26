;
;
export function x64Add(m, n) {
    m = [
        m[0] >>> 16,
        m[0] & 65535,
        m[1] >>> 16,
        m[1] & 65535
    ];
    n = [
        n[0] >>> 16,
        n[0] & 65535,
        n[1] >>> 16,
        n[1] & 65535
    ];
    var o = [
        0,
        0,
        0,
        0
    ];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 65535;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 65535;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 65535;
    o[0] += m[0] + n[0];
    o[0] &= 65535;
    return [
        o[0] << 16 | o[1],
        o[2] << 16 | o[3]
    ];
}