import {x64Multiply} from './x64Multiply.js'
import {x64Xor} from './x64Xor.js';
export function x64Fmix(h) {
    h = x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = x64Multiply(h, [
        4283543511,
        3981806797
    ]);
    h = x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    h = x64Multiply(h, [
        3301882366,
        444984403
    ]);
    h = x64Xor(h, [
        0,
        h[0] >>> 1
    ]);
    return h;
}