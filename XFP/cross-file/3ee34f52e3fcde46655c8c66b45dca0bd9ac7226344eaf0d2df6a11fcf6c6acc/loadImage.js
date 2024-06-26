
export function loadImage(t, e, i) {
    var n = new Date(), r = new Image(1, 1);
    expireDateTime = n.getTime() + e;
    r.onload = function () {
        i && i();
    };
    r.src = t;
}
