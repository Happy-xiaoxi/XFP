export function getTouchSupport() {
    var maxTouchPoints = 0;
    var touchEvent;
    if (typeof navigator.maxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.maxTouchPoints;
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.msMaxTouchPoints;
    }
    try {
        document.createEvent('TouchEvent');
        touchEvent = true;
    } catch (_) {
        touchEvent = false;
    }
    var touchStart = 'ontouchstart' in window;
    return [
        maxTouchPoints,
        touchEvent,
        touchStart
    ];
}
