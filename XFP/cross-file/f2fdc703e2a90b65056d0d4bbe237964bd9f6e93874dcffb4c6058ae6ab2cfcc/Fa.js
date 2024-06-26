;
;
export function Fa(a) {
    try {
        for (var b = '', c = [
                    89,
                    231,
                    225,
                    55
                ], d = 0; d < a.length; d++)
            b += String.fromCharCode(a.charCodeAt(d) ^ c[d % c.length]);
        return b;
    } catch (e) {
        return k(e), '';
    }
}