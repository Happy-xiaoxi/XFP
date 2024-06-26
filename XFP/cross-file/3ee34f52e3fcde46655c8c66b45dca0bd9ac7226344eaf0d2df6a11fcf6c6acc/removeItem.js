
export function removeItem(t, e, i) {
    var n = t.slice((i || e) + 1 || this.length);
    this.length = e < 0 ? t.length + e : e;
    return t.push.apply(t, n);
}
