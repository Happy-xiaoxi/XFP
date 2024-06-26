export function sendBeacon() {
    sovrn.auction.beaconConfig = sovrn.auction.getParams(
      sovrn.auction.getScriptTag()
    );
    try {
      var n;
      if (beaconFlag) return !1;
      "sovrn_beacon",
        ((n = sovrn.auction.createiFrame("sovrn_beacon", 1, 1)).src =
          sovrn.auction.getBeaconURL()),
        document.body.appendChild(n),
        (beaconFlag = !0);
    } catch (n) {
      return !1;
    }
    return !0;
  }