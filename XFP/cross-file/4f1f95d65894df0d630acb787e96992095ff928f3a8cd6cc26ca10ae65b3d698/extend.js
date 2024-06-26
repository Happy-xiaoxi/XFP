export function extend(a, b) {
    var c, d;
    for (c = 1; c < arguments.length; ++c)
        for (d in arguments[c])
            arguments[c].hasOwnProperty(d) && (a[d] = arguments[c][d]);
    return a;
}
