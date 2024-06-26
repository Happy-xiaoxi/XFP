;
;
export function crdi(a) {
    t.crdi = !0;
    var b = function (b) {
        try {
            var d = JSON.parse(b.data);
            d && (d.dp || d.drg) && a(d);
        } catch (e) {
        }
    };
    window.attachEvent ? window.attachEvent('onmessage', b) : window.addEventListener && window.addEventListener('message', b);
}