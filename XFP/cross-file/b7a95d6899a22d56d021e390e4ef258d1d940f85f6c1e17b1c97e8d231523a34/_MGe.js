export function Ge(e) {
  var t;
  (null === (t = null == e ? void 0 : e.configuration) || void 0 === t
    ? void 0
    : t.localStorage) &&
    (window.localStorage.removeItem(n.LS_P1_POST_COUNTS),
    window.localStorage.removeItem(n.LS_P2_POST_TIME),
    window.localStorage.removeItem(n.LS_CORR_ID));
}