var MauticJS = MauticJS || {};


export function isPixelLoaded(domOnly) {
    if (typeof domOnly == 'undefined') {
        domOnly = false;
    }
    if (typeof MauticJS.trackingPixel === 'undefined') {
        MauticJS.trackingPixel = null;
        var imgs = Array.prototype.slice.apply(document.getElementsByTagName('img'));
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].src.indexOf('mtracking.gif') !== -1) {
                MauticJS.trackingPixel = imgs[i];
                break;
            }
        }
    } else if (domOnly) {
        return false;
    }
    if (MauticJS.trackingPixel && MauticJS.trackingPixel.complete && MauticJS.trackingPixel.naturalWidth !== 0) {
        return true;
    }
    return false;
}
