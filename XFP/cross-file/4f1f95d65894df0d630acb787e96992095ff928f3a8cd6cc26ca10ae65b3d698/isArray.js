export function isArray(a) {
    return 'undefined' != typeof a && '[object Array]' === Object.prototype.toString.call(a);
}
