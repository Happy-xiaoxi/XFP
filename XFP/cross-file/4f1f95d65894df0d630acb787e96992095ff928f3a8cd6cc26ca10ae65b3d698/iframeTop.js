export function iframeTop() {
    var a = window, b = null;
    try {
        for (; a != window.top;)
            b = a, a = a.parent;
    } catch (c) {
        return null;
    }
    return b ? this.iframeEle(b) : null;
}
