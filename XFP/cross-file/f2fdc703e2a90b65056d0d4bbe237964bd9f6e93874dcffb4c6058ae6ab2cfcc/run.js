import {gb} from './gb.js';
;
;
;
;



export function run(a, b) {
    Q = b;
    gb(a);
    Q && 'function' === typeof Q && eval(Q());
}