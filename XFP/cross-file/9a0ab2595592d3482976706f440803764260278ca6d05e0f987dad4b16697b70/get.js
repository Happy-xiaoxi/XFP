
export function get(done) {
    var keys = [];
    keys = this.userAgentKey(keys);
    keys = this.languageKey(keys);
    keys = this.colorDepthKey(keys);
    keys = this.pixelRatioKey(keys);
    keys = this.hardwareConcurrencyKey(keys);
    keys = this.screenResolutionKey(keys);
    keys = this.availableScreenResolutionKey(keys);
    keys = this.timezoneOffsetKey(keys);
    keys = this.sessionStorageKey(keys);
    keys = this.localStorageKey(keys);
    keys = this.indexedDbKey(keys);
    keys = this.addBehaviorKey(keys);
    keys = this.openDatabaseKey(keys);
    keys = this.cpuClassKey(keys);
    keys = this.platformKey(keys);
    keys = this.doNotTrackKey(keys);
    keys = this.pluginsKey(keys);
    keys = this.canvasKey(keys);
    keys = this.webglKey(keys);
    keys = this.adBlockKey(keys);
    keys = this.hasLiedLanguagesKey(keys);
    keys = this.hasLiedResolutionKey(keys);
    keys = this.hasLiedOsKey(keys);
    keys = this.hasLiedBrowserKey(keys);
    keys = this.touchSupportKey(keys);
    keys = this.customEntropyFunction(keys);
    var that = this;
    this.fontsKey(keys, function (newKeys) {
        var values = [];
        that.each(newKeys, function (pair) {
            var value = pair.value;
            if (typeof pair.value.join !== 'undefined') {
                value = pair.value.join(';');
            }
            values.push(value);
        });
        var murmur = that.x64hash128(values.join('~~~'), 31);
        return done(murmur, newKeys);
    });
}