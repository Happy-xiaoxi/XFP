export function unique(a) {
    var b, c = {}, d = [];
    for (b = 0; b < a.length; ++b)
        c[a[b]] || (c[a[b]] = !0, d.push(a[b]));
    return d;
}
