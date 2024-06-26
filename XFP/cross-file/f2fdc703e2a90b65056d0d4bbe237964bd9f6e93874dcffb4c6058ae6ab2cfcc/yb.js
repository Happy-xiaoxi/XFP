;
;
export function yb() {
    try {
        void 0 !== navigator.hardwareConcurrency && e('navigator.hardwareConcurrency', navigator.hardwareConcurrency.toString());
        void 0 !== navigator.deviceMemory && e('navigator.deviceMemory', navigator.deviceMemory.toString());
        void 0 !== navigator.connection && void 0 !== navigator.connection.effectiveType && e('navigator.connection.effectiveType', navigator.connection.effectiveType);
        navigator.getBattery && navigator.getBattery().then(function (a) {
            var b = a.level;
            e('navigator.battery.level', 'object' === typeof b ? JSON.stringify(b) : String(b));
            b = a.charging;
            e('navigator.battery.charging', 'object' === typeof b ? JSON.stringify(b) : String(b));
            b = a.chargingTime;
            e('navigator.battery.chargingTime', 'object' === typeof b ? JSON.stringify(b) : String(b));
            e('navigator.battery.dischargingTime', a.dischargingTime);
        });
        var a = void 0;
        'maxTouchPoints' in navigator ? a = navigator.maxTouchPoints : 'msMaxTouchPoints' in navigator && (a = navigator.msMaxTouchPoints);
        void 0 !== a && e('touchEnabled', a);
        a = !1;
        null != navigator.webdriver && (a = navigator.webdriver);
        e('navigator.automationEnabled', a);
        e('navigator.doNotTrack', String(navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack || ''));
    } catch (b) {
        k(b);
    }
}