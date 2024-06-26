export function inArray(t, e) {
    for (var i = 0, n = e.length; i < n; i++)
        if (e[i] === t)
            return i;
    return -1;
}
