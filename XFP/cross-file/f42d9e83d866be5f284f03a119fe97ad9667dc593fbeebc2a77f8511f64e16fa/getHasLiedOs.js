;
;
export function getHasLiedOs() {
    var userAgent = navigator.userAgent.toLowerCase();
    var oscpu = navigator.oscpu;
    var platform = navigator.platform.toLowerCase();
    var os;
    if (userAgent.indexOf('windows phone') >= 0) {
        os = 'Windows Phone';
    } else if (userAgent.indexOf('win') >= 0) {
        os = 'Windows';
    } else if (userAgent.indexOf('android') >= 0) {
        os = 'Android';
    } else if (userAgent.indexOf('linux') >= 0) {
        os = 'Linux';
    } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
        os = 'iOS';
    } else if (userAgent.indexOf('mac') >= 0) {
        os = 'Mac';
    } else {
        os = 'Other';
    }
    var mobileDevice;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        mobileDevice = true;
    } else {
        mobileDevice = false;
    }
    if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
        return true;
    }
    if (typeof oscpu !== 'undefined') {
        oscpu = oscpu.toLowerCase();
        if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
            return true;
        } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
            return true;
        } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
            return true;
        } else if (oscpu.indexOf('win') === 0 && oscpu.indexOf('linux') === 0 && oscpu.indexOf('mac') >= 0 && os !== 'other') {
            return true;
        }
    }
    if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true;
    } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
        return true;
    } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
        return true;
    } else if (platform.indexOf('win') === 0 && platform.indexOf('linux') === 0 && platform.indexOf('mac') >= 0 && os !== 'other') {
        return true;
    }
    if (typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone') {
        return true;
    }
    return false;
}