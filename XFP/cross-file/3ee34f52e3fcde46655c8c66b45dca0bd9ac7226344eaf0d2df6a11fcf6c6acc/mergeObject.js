export function mergeObject(t, e) {
    t = t || {};
    if (!e)
        return e;
    for (var i in e)
        t[i] = e[i];
    return t;
}
