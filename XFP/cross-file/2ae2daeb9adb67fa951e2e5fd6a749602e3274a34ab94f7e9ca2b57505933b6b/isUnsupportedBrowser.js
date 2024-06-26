  export function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;
    if (typeof strictMode === "string") {
      ua = strictMode;
      strictMode = void 0;
    }
    if (strictMode === void 0) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }
    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== "string") {
            throw new Error(
              "Browser version in the minVersion map should be a string: " +
                browser +
                ": " +
                String(minVersions)
            );
          }
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }
    return strictMode;
  }