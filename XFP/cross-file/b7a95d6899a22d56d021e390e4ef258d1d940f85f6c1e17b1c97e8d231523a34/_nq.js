export function q(e) {
  if (window && window.navigator) {
    var t = window.navigator,
      n = {
        appName: t.appName,
        appVersion: t.appVersion,
        buildID: t.buildID,
        cookieEnabled: t.cookieEnabled,
        language: void 0 === t.language ? t.browserLanguage : t.language,
        onLine: t.onLine,
        oscpu: t.oscpu,
        platform: t.platform,
        product: t.product,
        productSub: t.productSub,
        userAgent: t.userAgent,
        vendor: t.vendor,
        vendorSub: t.vendorSub,
      };
    return (
      e &&
        e.configuration &&
        void 0 !== e.configuration.igt &&
        (n.igt = e.configuration.igt),
      n
    );
  }
}