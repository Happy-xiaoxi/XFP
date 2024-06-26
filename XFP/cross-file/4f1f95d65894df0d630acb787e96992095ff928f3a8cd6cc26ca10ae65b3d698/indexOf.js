export function indexOf(a, b) {
    if (a.indexOf)
        return a.indexOf(b);
    for (var c = 0; c < a.length; ++c)
        if (a[c] === b)
            return c;
    return -1;
}
