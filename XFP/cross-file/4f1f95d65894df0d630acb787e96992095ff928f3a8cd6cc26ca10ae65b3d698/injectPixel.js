export function injectPixel(a, b, c) {
    var d;
    try {
        d = g.createElement('img');
    } catch (l) {
        d = document.createElement('img');
    }
    d && (this._imgs.push(d), b && (d.onload = b), c && (d.onerror = c), d.referrerPolicy = 'unsafe-url', d.src = a);
}
