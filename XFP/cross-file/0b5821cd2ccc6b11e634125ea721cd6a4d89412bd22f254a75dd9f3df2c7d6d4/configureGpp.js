export function configureGpp() {
    const n = this;
    this.lookupIabConsentForGpp(
      function (t) {
        (sovrn.auction.gppConsent = t.gppString),
          (sovrn.auction.gppSid = t.applicableSections),
          n.sendBeacon();
      },
      function (t) {
        n.sendBeacon();
      }
    );
  }