export function getWebglCanvas() {
    var e = document.createElement('canvas'), t = null;
    try {
        t = e.getContext('webgl') || e.getContext('experimental-webgl');
    } catch (e) {
    }
    return t || (t = null), t;
}
