export function getCookie(a, b) {
    for (var c = b + '=', d = a.split(';'), l = 0; l < d.length; l++) {
        for (var e = d[l]; ' ' == e.charAt(0);)
            e = e.substring(1, e.length);
        if (0 == e.indexOf(c))
            return e.substring(c.length, e.length);
    }
    return null;
}
