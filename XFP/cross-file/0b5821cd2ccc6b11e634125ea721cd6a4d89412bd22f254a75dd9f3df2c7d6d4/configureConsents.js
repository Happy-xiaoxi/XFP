export function configureConsents() {
    const n = this;
    n.lookupIabConsent(
      function (t) {
        (sovrn.auction.gdprConsent =
          1 === cmpVersion ? t.getConsentData.consentData : t.tcString),
          n.configureCcpa();
      },
      function (t) {
        n.configureCcpa();
      }
    );
  }