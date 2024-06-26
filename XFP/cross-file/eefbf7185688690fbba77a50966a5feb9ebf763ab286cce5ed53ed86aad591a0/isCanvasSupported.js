
export function isCanvasSupported() {
    var n = document.createElement('canvas');
    return !!(n.getContext && n.getContext('2d'));
}