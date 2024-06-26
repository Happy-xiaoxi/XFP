export function configureCcpa() {
    const n = this;
    this.lookupCcpaConsent(
      function (t) {
        (sovrn.auction.ccpaConsent = t.uspData), n.configureGpp();
      },
      function (t) {
        n.configureGpp();
      }
    );
  }