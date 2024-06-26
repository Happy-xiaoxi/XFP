


export function pg(keys) {
    var isIE = function () {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            return true;
        } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
            return true;
        }
        return false;
    };
    if (isIE()) {
        keys.data.push({
            key: 'ie_plugins',
            value: null
        });
    } else {
        keys.data.push({
            key: 'regular_plugins',
            value: this.getRegularPlugins()
        });
    }
    return keys;
}
