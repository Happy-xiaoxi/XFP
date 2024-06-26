;
;
export function wb() {
    try {
        for (var a = new Yb().detect(Pa), b = 0; b < a.length; b++)
            try {
                e('font-' + Pa[b], a[b]);
            } catch (c) {
                k(c);
            }
    } catch (d) {
        k(d);
    }
}