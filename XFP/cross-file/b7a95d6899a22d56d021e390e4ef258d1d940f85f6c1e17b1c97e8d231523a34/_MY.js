export function Y(e, t, n) {
  var i;
  (null === (i = null == e ? void 0 : e.configuration) || void 0 === i
    ? void 0
    : i.localStorage) && window.localStorage.setItem(t, n);
}