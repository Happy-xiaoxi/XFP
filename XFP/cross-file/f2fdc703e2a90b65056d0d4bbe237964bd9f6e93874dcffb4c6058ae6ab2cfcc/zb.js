;
;
export function zb(a) {
    if ('userAgentData' in navigator) {
        var b = navigator.userAgentData;
        if ('object' === typeof b) {
            var c = a();
            e('navigator.userAgentData.brands', b.brands);
            e('navigator.userAgentData.mobile', b.mobile);
            e('navigator.userAgentData.platform', b.platform);
            navigator.userAgentData.getHighEntropyValues('platform platformVersion architecture bitness model uaFullVersion fullVersionList'.split(' ')).then(function (a) {
                e('navigator.userAgentData.highEntropyValues.platform', a.platform);
                e('navigator.userAgentData.highEntropyValues.platformVersion', a.platformVersion);
                e('navigator.userAgentData.highEntropyValues.architecture', a.architecture);
                e('navigator.userAgentData.highEntropyValues.bitness', a.bitness);
                e('navigator.userAgentData.highEntropyValues.model', a.model);
                e('navigator.userAgentData.highEntropyValues.uaFullVersion', a.uaFullVersion);
                e('navigator.userAgentData.highEntropyValues.fullVersionList', a.fullVersionList);
                c(!0);
            });
        }
    }
}