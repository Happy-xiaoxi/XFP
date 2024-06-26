export function countIds(a) {
    var b, c = 0;
    for (b = 0; b < Tynt.length; ++b)
        Tynt[b] === a && ++c;
    return c;
}
