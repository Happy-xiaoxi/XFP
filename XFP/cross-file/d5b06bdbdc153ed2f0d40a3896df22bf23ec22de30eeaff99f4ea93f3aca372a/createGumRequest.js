export function createGumRequest() {
    var e,
      t = extractHostname(
        getHighestAccessibleUrl(getHighestAccessibleWindow(window))
      ),
      n = encodeURIComponent(t);
    return {
      topLevelDomain: getTld(),
      topUrl: n,
      canWriteCookie: cookiesWriteable,
      canWriteLocalStorage: localStorageWritable,
      consent: {
        gdprApplies: null == gdprConsent ? void 0 : gdprConsent.gdprApplies,
        consentData: null == gdprConsent ? void 0 : gdprConsent.consentData,
        gdprVersion: null == gdprConsent ? void 0 : gdprConsent.version,
        vendorConsents:
          null == gdprConsent ? void 0 : gdprConsent.vendorConsents,
        uspString: null == ccpaConsent ? void 0 : ccpaConsent.uspString,
        ccpaVersion: null == ccpaConsent ? void 0 : ccpaConsent.version,
        gppString: null == gppConsent ? void 0 : gppConsent.gpp,
        gppSectionIds:
          null === (e = null == gppConsent ? void 0 : gppConsent.gppSid) ||
          void 0 === e
            ? void 0
            : e.join(","),
      },
    };
  }