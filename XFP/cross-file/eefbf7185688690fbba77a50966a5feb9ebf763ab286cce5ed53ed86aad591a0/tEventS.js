;
;
export function tEventS(n, t, i, r, u, f) {
    document.gEventT || (document.gEventT = []);
    var e = i + ':' + r + ':' + u;
    return document.gEventT[e] || document.gEventBlock ? f && f() : (tEvent(n, t, i, r, u, 0, f), document.gEventT[e] = 1), !0;
}