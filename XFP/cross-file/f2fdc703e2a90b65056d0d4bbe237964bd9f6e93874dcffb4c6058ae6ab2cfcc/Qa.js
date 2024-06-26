;
;
export function Qa(a) {
    var b = [], c;
    for (c in a)
        b.push(c);
    return b.sort();
}