export function autocaptureClicks() {
    this.trackClick('input[type="button"], button, a', 'autocaptureClick');
}
