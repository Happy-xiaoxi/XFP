


export function checkForTrackingPixel() {
    if (!/in/.test(document.readyState)) {
        setTimeout(function () {
            MauticJS.checkForTrackingPixel();
        }, 9);
    } else {
        var maxChecks = 3000;
        var checkPixel = setInterval(function () {
            if (maxChecks > 0 && !MauticJS.isPixelLoaded(true)) {
                maxChecks--;
                return;
            }
            clearInterval(checkPixel);
            if (maxChecks > 0) {
                var params = {}, hash;
                var hashes = MauticJS.trackingPixel.src.slice(MauticJS.trackingPixel.src.indexOf('?') + 1).split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    params[hash[0]] = hash[1];
                }
                MauticJS.dispatchEvent('mauticPageEventDelivered', {
                    event: [
                        'send',
                        'pageview',
                        params
                    ],
                    params: params,
                    image: true
                });
            }
        }, 1);
    }
}
