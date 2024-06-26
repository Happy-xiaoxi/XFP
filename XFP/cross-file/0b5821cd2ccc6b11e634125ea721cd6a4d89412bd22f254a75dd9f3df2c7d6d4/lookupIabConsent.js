export function lookupIabConsent(n, t) {
    function e(e, o) {
      o && "string" == typeof e.tcString
        ? "tcloaded" === e.eventStatus ||
          "useractioncomplete" === e.eventStatus ||
          ("cmpuishown" === e.eventStatus &&
            e.tcString.length > 0 &&
            !0 === e.purposeOneTreatment)
          ? n(e)
          : t("Consent string is not available.")
        : t(
            "CMP unable to register callback function.  Please check CMP setup."
          );
    }
    const o = (function () {
        const e = {};
        function o() {
          e.getConsentData && e.getVendorConsents
            ? n(e)
            : !e.hasOwnProperty("getConsentData") ||
              !e.hasOwnProperty("getVendorConsents") ||
              (e.getConsentData && e.getVendorConsents) ||
              t("Consent string is blank.");
        }
        return {
          consentDataCallback: function (n) {
            (e.getConsentData = n), o();
          },
          vendorConsentsCallback: function (n) {
            (e.getVendorConsents = n), o();
          },
        };
      })(),
      { cmpFrame: a, cmpFunction: r } = (function () {
        let n,
          t,
          e = window;
        for (; !n; ) {
          try {
            if (
              "function" == typeof e.__tcfapi ||
              "function" == typeof e.__cmp
            ) {
              "function" == typeof e.__tcfapi
                ? ((cmpVersion = 2), (t = e.__tcfapi))
                : ((cmpVersion = 1), (t = e.__cmp)),
                (n = e);
              break;
            }
          } catch (n) {}
          try {
            if (e.frames.__tcfapiLocator) {
              (cmpVersion = 2), (n = e);
              break;
            }
          } catch (n) {}
          try {
            if (e.frames.__cmpLocator) {
              (cmpVersion = 1), (n = e);
              break;
            }
          } catch (n) {}
          if (e === window.top) break;
          e = e.parent;
        }
        return { cmpFrame: n, cmpFunction: t };
      })();
    if (!a) return t("CMP not found.");
    "function" == typeof r
      ? 1 === cmpVersion
        ? (r("getConsentData", null, o.consentDataCallback),
          r("getVendorConsents", null, o.vendorConsentsCallback))
        : 2 === cmpVersion && r("addEventListener", cmpVersion, e)
      : 1 === cmpVersion &&
        window.$sf &&
        window.$sf.ext &&
        "function" == typeof window.$sf.ext.cmp
      ? (this.callCmpFromSafeframe("getConsentData", o.consentDataCallback, t),
        this.callCmpFromSafeframe(
          "getVendorConsents",
          o.vendorConsentsCallback,
          t
        ))
      : 1 === cmpVersion
      ? (this.callCmpWhileInIframe(
          "getConsentData",
          a,
          o.consentDataCallback,
          t
        ),
        this.callCmpWhileInIframe(
          "getVendorConsents",
          a,
          o.vendorConsentsCallback,
          t
        ))
      : 2 === cmpVersion &&
        this.callCmpWhileInIframe("addEventListener", a, e, t);
  }