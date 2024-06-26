;
;
export function l(a, b) {
    try {
        var c = Array.prototype.slice.call(arguments);
        if (B) {
            var d = I();
            a.apply(null, c.slice(2));
            B.apply(null, [
                b,
                Math.round(I() - d)
            ]);
        } else
            a.apply(null, c.slice(2));
    } catch (e) {
        k(e);
    }
}