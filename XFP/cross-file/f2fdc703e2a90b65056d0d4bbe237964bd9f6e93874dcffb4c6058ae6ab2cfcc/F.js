;
;
export function F(a, b, c) {
    'add' === c ? window.addEventListener ? window.addEventListener(a, b) : window.attachEvent ? window.attachEvent(a, b) : '' : 'rm' === c && (window.removeEventListener ? window.removeEventListener(a, b) : window.detachEvent ? window.detachEvent(a, b) : '');
}