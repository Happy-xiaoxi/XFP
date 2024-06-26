export function endsWith(t, e) {
    var i = t.length - e.length;
    return i >= 0 && t.lastIndexOf(e) === i;
}
