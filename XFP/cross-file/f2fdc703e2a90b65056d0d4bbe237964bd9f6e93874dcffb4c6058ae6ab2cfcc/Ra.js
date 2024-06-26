export function Ra(a) {
    try {
        var b = Zb[a[0]];
        b && b.apply(null, a.slice(1));
    } catch (c) {
        k(c);
    }
}