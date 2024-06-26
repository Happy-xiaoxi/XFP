export function getBeaconURL() {
    return (
      "https://ce.lijit.com/beacon?informer=" +
      (sovrn.auction.beaconConfig.hasOwnProperty("iid")
        ? sovrn.auction.beaconConfig.iid
        : "") +
      "&gdpr_consent=" +
      (sovrn.auction.gdprConsent || "") +
      "&us_privacy=" +
      (sovrn.auction.ccpaConsent || "") +
      "&gpp=" +
      (sovrn.auction.gppConsent || "") +
      "&gpp_sid=" +
      (sovrn.auction.gppSid || "")
    );
  }