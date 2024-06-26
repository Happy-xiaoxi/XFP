export function dt() {
  var t = {},
    e = window.googletag.pubads(),
    n = e.getTargeting("permutive"),
    r = e.getTargeting("CxSegments"),
    o = e.getTargetingKeys(),
    i = e.getAttributeKeys();
  return (
    n &&
      !x(n) &&
      (t = P(t, {
        permutiveSids: n.join(","),
      })),
    r &&
      !x(r) &&
      (t = P(t, {
        cxSids: r.join(","),
      })),
    o &&
      !x(o) &&
      (t = P(t, {
        targKeys: o.join(","),
      })),
    i &&
      !x(i) &&
      (t = P(t, {
        attrKeys: i.join(","),
      })),
    t
  );
}