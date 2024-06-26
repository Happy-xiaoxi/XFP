export function iframeEle(a) {
    var b = null;
    a = a || window;
    try {
        b = a.frameElement;
    } catch (c) {
    }
    return b;
}
