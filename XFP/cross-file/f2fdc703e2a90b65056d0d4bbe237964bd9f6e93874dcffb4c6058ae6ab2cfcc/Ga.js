;
;
export function Ga(a) {
    var b = a.getItem('persistentBfdData');
    if (void 0 == b)
        b = {};
    else
        try {
            b = JSON.parse(b);
        } catch (c) {
            b = {};
        }
    0 < Object.keys(p.bfd).length && (b[location.href + ':' + new Date().getTime()] = p.bfd);
    a.setItem('persistentBfdData', X.stringify(b));
    0 < Object.keys(b).length && e('bfd', b);
}