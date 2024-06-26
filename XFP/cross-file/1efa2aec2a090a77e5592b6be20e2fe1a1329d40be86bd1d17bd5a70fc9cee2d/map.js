export function map(e, t, r, n) {
    if (e == null) {
        return n;
    }
    if (this.nativeMap && e.map === this.nativeMap) {
        return e.map(t, r);
    } else {
        this.each(e, function (element, index, array) {
            n[n.length] = t.call(r, element, index, array);
        });
        return n;
    }
}
