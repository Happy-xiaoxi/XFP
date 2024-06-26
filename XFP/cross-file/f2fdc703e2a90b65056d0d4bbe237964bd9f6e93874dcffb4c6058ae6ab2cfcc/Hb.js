;
;
export function hb() {
    var a = L.sid;
    if (a) {
        var b = x.algo.SHA1.create();
        b.update(a);
        a = b.finalize().toString(x.enc.Hex).toLowerCase();
        for (b = 0; b < Sa.length; b++)
            if (0 == a.indexOf(Sa[b]))
                return !0;
    }
    return !1;
}