export function vt(t) {
  var e = t.getResponseInformation();
  return E(e)
    ? {
        adId: null,
        bnId: null,
        pId: t.getAdUnitPath(),
        
      }
    : {
        adId: e.lineItemId || e.sourceAgnosticLineItemId,
        bnId: e.creativeId || e.sourceAgnosticCreativeId,
        pId: t.getAdUnitPath(),
      };
}
export function mt(t) {
  return t.adId + "_" + t.bnId + "_" + t.pId;
}