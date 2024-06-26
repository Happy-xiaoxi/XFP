export function getPubId() {
    for (var a = null, b = 0; b < Tynt.length; ++b)
        if ('string' == typeof Tynt[b] && 22 == Tynt[b].length && 0 > Tynt[b].indexOf('!')) {
            a = Tynt[b];
            break;
        }
    return a;
}
