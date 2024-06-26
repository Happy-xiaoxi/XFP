
export function trunc(a, b) {
    var c, d;
    if (!a || a.length <= b)
        return a;
    c = a.substring(0, b);
    for (d = 1; 3 >= d; ++d)
        if ('%' == c.charAt(c.length - d))
            return c.substring(0, c.length - d);
    return c;
}
