export function ie(e) {
  return {
    detect(t, o) {
      var n;
      e.addEventListener("focusin", o),
        t(
          ((n = o),
          function () {
            e.removeEventListener("focusin", n);
          })
        );
    },
    encode(e) {
      if (!T(e.target) || e.target.__upscopeMasked) return;
      const t = N(e.target);
      return t ? { focus: { elementId: t } } : void 0;
    },
  };
}