  export function get(e, t) {
    var n = [];
    (n = this.userAgentKey(n)),
      (n = this.languageKey(n)),
      (n = this.colorDepthKey(n)),
      (n = this.pixelRatioKey(n)),
      (n = this.hardwareConcurrencyKey(n)),
      (n = this.screenResolutionKey(n)),
      (n = this.availableScreenResolutionKey(n)),
      (n = this.timezoneOffsetKey(n)),
      (n = this.sessionStorageKey(n)),
      (n = this.localStorageKey(n)),
      (n = this.indexedDbKey(n)),
      (n = this.addBehaviorKey(n)),
      (n = this.openDatabaseKey(n)),
      (n = this.cpuClassKey(n)),
      (n = this.platformKey(n)),
      (n = this.doNotTrackKey(n)),
      (n = this.pluginsKey(n)),
      (n = this.canvasKey(n)),
      (n = this.webglKey(n)),
      (n = this.adBlockKey(n)),
      (n = this.hasLiedLanguagesKey(n)),
      (n = this.hasLiedResolutionKey(n)),
      (n = this.hasLiedOsKey(n)),
      (n = this.hasLiedBrowserKey(n)),
      (n = this.touchSupportKey(n)),
      (n = this.customEntropyFunction(n)),
      void 0 !== t && (n = t(n));
    var i = this;
    this.audioKey(n, function (t) {
      i.fontsKey(t, function (t) {
        var n = [];
        i.each(t, function (e) {
          var t = e.value;
          void 0 !== e.value &&
            void 0 !== e.value.join &&
            (t = e.value.join(";")),
            n.push(t);
        });
        var a = n.join("~~~"),
          o = i.x64hash128(a, 31);
        return e(o, t, n);
      });
    });
  }