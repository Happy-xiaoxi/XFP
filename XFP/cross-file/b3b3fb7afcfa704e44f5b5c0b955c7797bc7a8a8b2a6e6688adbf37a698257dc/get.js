export function get(e) {
    var t = this, r = {
            data: [],
            addPreprocessedComponent: function (e) {
                var n = e.value;
                'function' == typeof t.options.preprocessor && (n = t.options.preprocessor(e.key, n)), r.data.push({
                    key: e.key,
                    value: n
                });
            }
        };
    r = this.userAgentKey(r), r = this.languageKey(r), r = this.colorDepthKey(r), r = this.deviceMemoryKey(r), r = this.pixelRatioKey(r), r = this.hardwareConcurrencyKey(r), r = this.screenResolutionKey(r), r = this.availableScreenResolutionKey(r), r = this.timezoneOffsetKey(r), r = this.sessionStorageKey(r), r = this.localStorageKey(r), r = this.indexedDbKey(r), r = this.addBehaviorKey(r), r = this.openDatabaseKey(r), r = this.cpuClassKey(r), r = this.platformKey(r), r = this.doNotTrackKey(r), r = this.pluginsKey(r), r = this.canvasKey(r), r = this.webglKey(r), r = this.webglVendorAndRendererKey(r), r = this.adBlockKey(r), r = this.hasLiedLanguagesKey(r), r = this.hasLiedResolutionKey(r), r = this.hasLiedOsKey(r), r = this.hasLiedBrowserKey(r), r = this.touchSupportKey(r), r = this.customEntropyFunction(r), this.fontsKey(r, function (r) {
        var n = [];
        t.each(r.data, function (e) {
            var t = e.value;
            t && 'function' == typeof t.join && (t = t.join(';')), n.push(t);
        });
        var i = t.x64hash128(n.join('~~~'), 31);
        return e(i, r.data);
    });
}
