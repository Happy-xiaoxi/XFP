export function doNotTrack(n, t) {
    (n = n || navigator), (t = t || window);
    var e = sovrn.auction.readCookie("tracking_optout");
    return (
      "yes" === n.doNotTrack ||
      "1" === n.doNotTrack ||
      "1" === n.msDoNotTrack ||
      "1" === t.doNotTrack ||
      "1" === e
    );
  }